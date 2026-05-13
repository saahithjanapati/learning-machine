# Base Models Know How To Reason

Source note: This lesson is based on Constantin Venhoff, Ivan Arcuschin, Philip Torr, Arthur Conmy, and Neel Nanda, "Base Models Know How To Reason, Thinking Models Learn When." Source: [arXiv PDF](https://arxiv.org/pdf/2510.07364). Processed source: [materials/processed/ai/base-models-know-how-to-reason-thinking-models-learn-when.md](../../../materials/processed/ai/base-models-know-how-to-reason-thinking-models-learn-when.md).

## Table of Contents

- [Medium-Length Version](#medium-length-version)
- [Full-Length Version](#full-length-version)

## Medium-Length Version

This paper asks a direct question: why do thinking models outperform their base models?

One answer is that post-training teaches new reasoning abilities. Another answer is that base models already have many of the relevant abilities, but they do not reliably deploy them. This paper argues for the second view. In the authors' framing, base models know how to reason; thinking models learn when.

The distinction matters. If post-training creates reasoning from scratch, then we should study it as capability construction. If post-training mainly teaches orchestration, then we should study it as a controller: when to plan, when to compute, when to verify, when to backtrack, and when to stop.

The paper tests this with a hybrid model. The base model still generates the answer. A thinking model watches the generation and decides which reasoning mechanism should be activated next. Then the authors add a steering vector to the base model's activations to induce that reasoning behavior.

No base-model weights are updated. If the hybrid model gets close to thinking-model performance, then the base model must already contain executable versions of the reasoning behaviors.

The first part of the paper builds a taxonomy of reasoning mechanisms. Instead of manually writing a list like "verification, planning, backtracking," the authors use an unsupervised method. They collect reasoning traces from thinking models, split them into sentences, average activations over each sentence, and train small Top-K sparse autoencoders on those sentence-level activations.

These SAEs are unusual. In mechanistic interpretability, SAEs often use very large dictionaries to decompose activations into many fine-grained features. Here, the authors deliberately restrict the dictionary to around 5 to 50 features. This forces the SAE to cluster sentences into high-level reasoning functions rather than tiny linguistic details.

An LLM then labels the clusters with interpretable category names and descriptions. The authors evaluate each taxonomy with LLM-judge metrics for consistency, completeness, and independence. This is not perfect, because LLM judges are still a source of uncertainty, but it gives them a systematic way to compare taxonomies across models and layers.

The second part trains steering vectors in base models. For each reasoning category, the authors find examples where thinking-model traces strongly activate that category. Then they optimize a vector in the base model's activation space so that adding the vector makes the base model more likely to produce the corresponding reasoning behavior.

At generation time, the hybrid model works like this:

1. The base model generates.
2. A thinking-model classifier predicts what reasoning mechanism should be active.
3. The matching steering vector is added to the base model.
4. The base model continues generating.

This lets the authors separate two things that are normally entangled: the ability to execute a reasoning mechanism and the ability to decide when to execute it.

The results are strongest on larger models. On GSM8K, Qwen2.5-32B paired with DeepSeek-R1-Distill-Qwen-32B goes from 92.6% to 94.4%, recovering 81.8% of the gap to the thinking model. On MATH500, Qwen2.5-32B paired with QwQ-32B goes from 63.4% to 84.4%, while QwQ-32B scores 86.4%. That recovers 91% of the gap.

The hybrid model only steers a minority of tokens, often around 6% to 21% depending on the model and benchmark. That is important. The system is not rewriting every token into a thinking-model imitation. It is nudging the base model at selected points.

The ablations support the main story. In the strongest MATH500 setting, the base model gets 63.4%, the full hybrid gets 84.4%, and the thinking model gets 86.4%. If the authors only use a general bias vector, performance is 76.8%. If they randomly fire category vectors, it is 77.8%. If they use random vectors, it is 77.2%. So the style bias helps, but it is not enough. The learned vectors matter, and the timing matters.

The paper's biggest idea is this decomposition:

```text
reasoning = mechanisms + deployment policy
```

Pretraining may learn many mechanisms. Post-training may teach a deployment policy over those mechanisms.

For Scale AI prep, this is a very relevant post-training x interpretability paper. It gives a concrete way to ask whether RLVR teaches new reasoning or teaches better use of latent reasoning. It also connects sparse features, activation steering, reasoning taxonomies, and verifier-trained thinking models.

The main caveat is that the hybrid uses a thinking model as a controller. That means the paper is not saying we can throw away post-training. The result is better understood as a causal diagnostic: if a base model can be steered into thinking-model behavior without weight updates, then the base model already had much of the machinery.

The takeaway: thinking-model training may be less like installing reasoning and more like teaching a model when to call the reasoning tools it already has.

## Full-Length Version

### The Central Question

Reasoning models generate long chains of thought before giving final answers. DeepSeek-R1-style models, QwQ, o-series models, Gemini reasoning models, and Claude thinking modes all use some form of extra inference-time computation. They often perform much better than base models on math and reasoning benchmarks.

But what exactly changed?

There are two broad hypotheses.

The first is capability construction. Post-training teaches the model new reasoning mechanisms that the base model did not have.

The second is capability deployment. The base model already has many mechanisms, but it does not use them reliably. Post-training teaches the model when and how to deploy those mechanisms in a useful sequence.

This paper argues for the second hypothesis. It does not claim post-training is trivial. It claims post-training may mostly teach orchestration.

### Why "When" Matters

Imagine a student who knows arithmetic, algebra, checking, and backtracking, but applies them at the wrong times. They may rush to an answer without checking assumptions. They may compute before setting up the problem. They may continue a bad path instead of backtracking.

A better student may not know fundamentally different operations. They may simply know when to use each operation.

The paper applies this idea to language models. A base model may know how to:

- restate the problem;
- plan next steps;
- compute intermediate values;
- verify a result;
- notice uncertainty;
- backtrack after an error;
- draw a final conclusion.

A thinking model may be better because it deploys these steps in a productive order.

### Building A Taxonomy Of Reasoning Mechanisms

The authors first need a vocabulary of reasoning mechanisms. They do not want to impose a manual taxonomy from the outside. Instead, they build one from model activations.

They collect reasoning traces from thinking models on 12,102 MMLU-Pro prompts. These traces produce 430,122 sentences. They then average activations over each sentence and train Top-K sparse autoencoders on those sentence-level activations.

This is different from a normal token-level SAE workflow. Token-level features can be too fine-grained for reasoning analysis. Paragraphs can be too coarse. Sentences are a useful middle scale: each sentence often serves a recognizable role in the reasoning trace.

The SAE dictionary is deliberately small. Instead of thousands or millions of features, the authors use dictionary sizes from 5 to 50. This turns the SAE into something like an activation-grounded clustering method. The goal is not to discover every tiny feature, but to discover a compact set of high-level reasoning functions.

The resulting clusters are then labeled with an LLM. For each cluster, the authors collect highly activating examples and random examples, then ask an LLM to infer the cognitive function of the cluster.

Examples of discovered categories include things like recalling formulas, retrieving factual knowledge, listing considerations, conditional reasoning, drawing conclusions, restating data, verifying intermediate steps, confirming reasoning steps, numeric calculation, task formulation, proposing possibilities, planning next steps, and expressing uncertainty.

### Evaluating The Taxonomy

The paper evaluates taxonomies with three desiderata.

Consistency asks whether sentences assigned to a category actually match its title and description.

Completeness asks whether the taxonomy covers the full range of observed reasoning sentences.

Independence asks whether the categories are distinct rather than redundant.

These are scored with LLM-based evaluation. That is a limitation, but the important thing is that the authors are trying to avoid pure manual inspection. They use a systematic, activation-grounded way to produce categories, then use LLMs to translate and score those categories.

The grid search finds that useful taxonomies often emerge around 10 to 25 categories across model families. This supports the idea that reasoning traces can be decomposed into a modest number of repeated functional moves.

### Steering Vectors In Base Models

Once the authors have a reasoning taxonomy, they ask whether base models can perform those behaviors.

They train steering vectors. A steering vector is a direction in activation space. When added to a model's hidden activations, it pushes generation toward a target behavior.

For each reasoning category, the authors select sentences from thinking-model traces that strongly activate that category. They take the prefix leading up to the sentence and the sentence itself as a target completion. Then they optimize a vector in the base model so that adding the vector lowers cross-entropy on the thinking-model completion tokens.

This is a causal test. If adding a category vector makes a base model produce the corresponding reasoning behavior, then the behavior is at least partly accessible through the base model's activation space.

The authors also train a general bias vector. This captures broad thinking-model style, such as more verbose, explanatory, self-contained reasoning. The ablations later show that this bias vector helps, but it does not explain the full effect.

### The Hybrid Model

The hybrid model combines a base model and a thinking model.

The base model is the generator. It produces the actual answer tokens.

The thinking model acts like a controller. It evaluates the current rollout and predicts which reasoning category should be active next. If a category is selected, the corresponding steering vector is applied to the base model.

The authors also choose steering strengths and windows by checking which steered token has the lowest perplexity under the thinking model. This keeps the hybrid from moving too far out of the thinking model's distribution.

For both base-only and hybrid models, the authors use the same chain-of-thought prompt. This matters because otherwise the gains could be explained by prompting rather than steering.

### GSM8K Results

On GSM8K, the hybrid often improves over the base model.

For Llama-3.1-8B paired with DeepSeek-R1-Distill-Llama-8B, the base model scores 37.8%, the hybrid scores 63.4%, and the thinking model scores 83.4%. That recovers 56.1% of the gap.

For Qwen2.5-14B paired with DeepSeek-R1-Distill-Qwen-14B, the base model scores 90.8%, the hybrid scores 93.0%, and the thinking model scores 94.2%. That recovers 64.7% of the gap.

For Qwen2.5-32B paired with DeepSeek-R1-Distill-Qwen-32B, the base model scores 92.6%, the hybrid scores 94.4%, and the thinking model scores 94.8%. That recovers 81.8% of the gap.

The 1.5B math model is an exception: on GSM8K, the base and thinking model are already close or inverted, so there is no meaningful gap to recover.

### MATH500 Results

MATH500 is harder and shows a clearer result for larger models.

For Qwen2.5-14B paired with DeepSeek-R1-Distill-Qwen-14B, the base model scores 58.6%, the hybrid scores 75.4%, and the thinking model scores 86.4%. That recovers 60.4% of the gap.

For Qwen2.5-32B paired with DeepSeek-R1-Distill-Qwen-32B, the base model scores 59.4%, the hybrid scores 74.6%, and the thinking model scores 86.0%. That recovers 57.1% of the gap.

The strongest result is Qwen2.5-32B paired with QwQ-32B. The base model scores 63.4%, the hybrid scores 84.4%, and QwQ-32B scores 86.4%. That recovers 91% of the gap.

This is the paper's headline evidence. The base model, with no weight updates, gets close to a thinking model when the right reasoning mechanisms are externally cued.

### Sparse Intervention

The hybrid does not steer every token. Across model and benchmark pairs, it steers a minority of tokens, often around 6% to 21% per problem.

This makes the result more interesting. If the hybrid had rewritten every token with massive intervention, the result would be less informative. Sparse steering suggests that the base model's own generation can carry most of the answer, provided certain reasoning modes are activated at key moments.

The steering patterns differ by model and task. Smaller models require more frequent and diverse steering. Larger models often benefit from targeted steering of specific mechanisms. On harder math, mechanisms like known equations, numeric computation, planning next steps, evaluating expressions, and presenting conclusions become more prominent.

### Ablations

The authors run important ablations in the strongest setting: Qwen2.5-32B base with QwQ-32B as the thinking model on MATH500.

The base model gets 63.4%. The full hybrid gets 84.4%. The thinking model gets 86.4%.

Only-bias steering gets 76.8%. This means style and broad structure matter. The bias vector makes the base model more verbose, explanatory, and tutorial-like.

Random-firing gets 77.8%. Here the system uses real category vectors but fires them randomly. This shows that timing matters.

Random-vectors gets 77.2%. Here the timing machinery remains, but the vectors are random directions. This shows that the learned directions matter.

The full hybrid beats all three. So the result is not just "make the model more verbose." It requires specific reasoning vectors applied at appropriate times.

### The Main Interpretation

The paper's central interpretation is:

```text
pretraining learns reasoning mechanisms
post-training learns mechanism deployment
```

This does not mean post-training is only cosmetic. Knowing when to deploy a mechanism is a real capability. A model that computes, verifies, and backtracks at the wrong times will fail.

But the mechanism-vs-deployment distinction changes how we think about reasoning models. RLVR may not be primarily installing arithmetic, algebra, verification, or backtracking. It may be shaping a policy over when to use them.

This also explains why distillation can work well. If the smaller or base model already has latent mechanisms, then distillation traces teach the deployment pattern. The trace is less like a capability transfer from nothing and more like behavioral supervision over an existing internal toolkit.

### Why This Matters For Interpretability

This paper is not just a benchmark paper. Its strongest evidence is causal.

The authors do not merely observe that base and thinking models share outputs. They identify activation-space directions for reasoning mechanisms and intervene on the base model. When the intervention improves performance, that supports the claim that the base model contains executable latent mechanisms.

It also connects several interpretability threads:

- sparse autoencoders as high-level feature discovery tools;
- sentence-level representations rather than token-level features;
- steering vectors as causal behavior controls;
- reasoning traces as sequences of functional mechanisms;
- post-training as changes in activation scheduling.

That is why this paper sits naturally next to Gemma Scope, Matryoshka SAEs, Natural Language Autoencoders, Features as Rewards, and Generated-Token Embeddings.

### Why This Matters For Post-Training

For post-training, the paper suggests a more precise research question:

```text
What part of improvement comes from new capability, and what part comes from better deployment?
```

If a model improves because it learned a deployment policy, then training data and rewards should be designed to teach when to call mechanisms. That means reward design should value sequencing, verification timing, backtracking, uncertainty use, and stopping decisions, not only final correctness.

It also suggests targeted interventions. Instead of full fine-tuning, one might improve a model by strengthening or scheduling specific latent mechanisms. This could lead to cheaper post-training or inference-time control methods.

But it also raises safety questions. If steering can activate reasoning modes, then monitors and evaluators need to understand whether a model is genuinely using a mechanism productively or merely producing reasoning-looking traces.

### Why This Matters For Scale AI Prep

For Scale AI-style work, this paper is especially relevant because it sits at the intersection of post-training, interpretability, and evaluation.

Scale-style research often asks how to make open-ended behavior measurable and improvable. This paper gives a representation-level way to break reasoning into measurable components.

It suggests several useful evaluation questions:

- Does a model fail because it lacks a mechanism or because it fails to deploy it?
- Can a verifier reward specific reasoning steps without rewarding superficial chain-of-thought style?
- Can activation features identify when a model is verifying, backtracking, or merely rambling?
- Can post-training data be selected to teach deployment timing rather than generic verbosity?
- Can steering or probing distinguish genuine reasoning mechanisms from style imitation?

This is directly connected to the earlier embeddings and feature-reward theme. If internal representations can expose reasoning mechanisms, those mechanisms might become monitors, diagnostics, curriculum signals, or eventually reward features. But optimization pressure against those signals would need careful robustness testing.

### Limitations

The first limitation is that the thinking model acts as a controller. The hybrid model is not a standalone base model with a learned internal scheduler. It is a diagnostic system that uses the thinking model to decide when to steer.

The second limitation is LLM-judge dependence. The taxonomy is activation-grounded, but labels and scoring still depend on LLM evaluation. Human validation would strengthen the claim.

The third limitation is benchmark scope. GSM8K and MATH500 are important but narrow. The result may differ for coding, scientific reasoning, long-horizon agents, ambiguous tasks, or open-ended creative work.

The fourth limitation is model scale. Smaller models show weaker or unstable gains. This suggests that either the mechanisms are less present, less cleanly represented, or harder to steer.

The fifth limitation is that steering is not ordinary deployment. Activation steering can be expensive, brittle, model-specific, and hard to productize compared with normal post-training.

### Final Takeaway

This paper gives a sharp mechanistic hypothesis about thinking models.

Base models may already contain many of the reasoning mechanisms that thinking models use. The difference is that thinking models have learned when to deploy those mechanisms during a chain of thought.

The evidence comes from a hybrid model that uses activation steering to make base models execute thinking-model-like reasoning behaviors without weight updates. The strongest result recovers 91% of the MATH500 performance gap between a base model and QwQ-32B.

The broader lesson is that reasoning improvement may be less about inventing new mental tools and more about learning a good controller over latent tools already learned during pretraining.
