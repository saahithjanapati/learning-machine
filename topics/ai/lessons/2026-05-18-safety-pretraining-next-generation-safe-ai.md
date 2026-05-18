# Safety Pretraining And Native Model Safety

Source note: This lesson is based on Pratyush Maini, Sachin Goyal, Dylan Sam, Alex Robey, Yash Savani, Yiding Jiang, Andy Zou, Matt Fredrikson, Zachary C. Lipton, and J. Zico Kolter, "Safety Pretraining: Toward the Next Generation of Safe AI," NeurIPS 2025. Source PDF: [proceedings.neurips.cc](https://proceedings.neurips.cc/paper_files/paper/2025/file/3e84c4e0acee2be072571fedc70700a9-Paper-Conference.pdf). Project site: [locuslab.github.io/safety-pretraining](https://locuslab.github.io/safety-pretraining). Processed source: [materials/processed/ai/safety-pretraining-toward-next-generation-safe-ai.md](../../../materials/processed/ai/safety-pretraining-toward-next-generation-safe-ai.md).

Filing note: This is filed normally under `AI / Collection` and cross-listed under [Scale AI Research Internship Prep](../scale-ai-research-internship-prep/README.md) as `safety`, `alignment`, `pretraining`, `data curation`, and `evaluation`.

## Table of Contents

- [Medium-Length Version](#medium-length-version)
- [Full-Length Version](#full-length-version)

## Medium-Length Version

The paper's core idea is that model safety should begin before post-training. Most alignment work tries to shape a model after it has already absorbed web-scale patterns during pretraining. The authors argue that this is brittle: if unsafe tendencies are learned in the base model, later instruction tuning or RLHF may suppress them in normal chat settings without truly removing them.

Their slogan is: alignment is not unlearning.

The proposed fix is a safety-aware pretraining curriculum. Instead of only filtering unsafe examples out of the pretraining corpus, the pipeline teaches the model how to encounter sensitive material responsibly. It has four main data interventions:

1. score web data for harmfulness;
2. rewrite mildly or moderately unsafe material into safer educational contexts;
3. turn highly unsafe examples into refusal training data;
4. turn refusal examples into broader moral-education prose.

Then the model is pretrained with a special harmfulness tag, `<potentially unsafe content>`, inserted into unsafe segments. That tag gives the model a learned signal for unsafe semantics. At inference time, SafeBeam uses the probability of that tag as a warning signal and filters candidate beams that look likely to move toward unsafe content.

The most important empirical result is not just that safety-pretrained models look safer after alignment. It is that they remain safer after benign finetuning. Standard pretrained models can be safety instruction-tuned to low attack success rates, but after a small supervised finetune on GSM8K, their attack success rises sharply. Safety-pretrained models degrade much less.

The main ablation is memorable:

- raw data: 38.8% attack success after benign finetuning;
- score-0-only safe data: 43.8%;
- plus rephrased unsafe content: 33.6%;
- plus native refusal data: 25.1%;
- plus moral education: 23.0%;
- plus SafeBeam: 8.3%.

The surprising lesson is that filtering alone is not enough. Training only on the safest data can make the model less prepared to handle unsafe patterns. The better strategy is controlled exposure: the model sees sensitive topics with context, boundaries, and ethical framing.

The paper is important because it reframes safety as a pretraining data problem, not only a post-training behavior problem. It also gives a concrete recipe for measuring dataset safety through Data Safety Report Cards.

The caveat is scale and coverage. The experiments use 1.7B-parameter models, depend on safety classifiers, and focus mostly on harmful-content/refusal safety. This does not settle all alignment risks. But it is a strong example of how pretraining data design can make later alignment less fragile.

## Full-Length Version

### Research Question

The paper asks whether language models can be made safer by changing the pretraining distribution itself.

That question matters because most modern alignment pipelines happen late. A model is pretrained on a broad web-scale mixture, then later made assistant-like through supervised fine-tuning, RLHF, DPO, constitutional training, or other post-training methods.

The authors argue that this sequencing creates a structural problem. If the base model has already learned unsafe continuations, harmful associations, or brittle refusal boundaries, post-training may mostly teach it when to suppress those behaviors. Suppression is not the same as removal. A model may refuse in the aligned chat distribution but become unsafe again after jailbreaks, distribution shift, or even ordinary benign finetuning.

So the paper asks: what if safety were part of the original learning curriculum?

### The Mental Model: Safety As Curriculum

A simple version of safety filtering says: remove bad examples.

The paper says that is too crude. A model that never sees unsafe patterns may not learn what makes them unsafe or how to respond when they appear. The model needs something closer to a curriculum:

- safe examples for ordinary knowledge;
- sensitive examples rewritten with context;
- hard refusal examples for clearly harmful requests;
- moral explanations that teach why the boundary exists;
- a learned marker that separates unsafe content internally.

This is the paper's central conceptual move. It treats safety as a distribution-design problem. The model should be exposed to dangerous topics in a way that teaches responsible handling rather than either raw imitation or total ignorance.

### Step 1: Safety Scoring

The pipeline begins by assigning web documents a safety score from 0 to 5.

The authors use GPT-4o-mini to annotate a subset of FineWeb-Edu with safety scores and short justifications. Then they train scalable classifiers:

- an LLM-based classifier using Qwen 2.5-7B;
- an embedding-based classifier using `gte-base-en-v1.5`;
- an ensemble that takes the maximum score from both.

Taking the maximum is a conservative choice. It prioritizes recall: if either classifier thinks something is unsafe, the pipeline treats it as unsafe. That increases false positives, but false negatives are worse when the goal is to keep unsafe material from passing through as ordinary pretraining text.

The appendix shows why this is nontrivial. Old toxicity filters and profanity checkers are too narrow for modern AI safety. The paper uses a broader harm taxonomy and evaluates classifier recall across multiple thresholds.

### Step 2: Recontextualization Instead Of Deletion

For low-to-medium unsafe material, the paper does not simply delete the text. It rewrites it.

The intuition is that some unsafe or sensitive content contains real information. Historical violence, extremist ideology, medical risk, fraud, harassment, and self-harm are not topics a model should be ignorant about. But the model should not learn them as raw continuation patterns that normalize harm or provide actionable wrongdoing.

The authors use LLaMA-3.1-8B to generate recontextualized versions of unsafe examples. These versions add disclaimers, explain why the material is sensitive, and preserve information in safer educational framing.

This produces SafeWeb, described as a safety-focused synthetic corpus with over 100B tokens.

The key lesson is: preserve knowledge, change framing.

### Step 3: Refusal Data

Some content should not be rephrased into helpful instructions. For examples with safety scores 4 or 5, the authors create RefuseWeb.

RefuseWeb transforms harmful source material into dialogues where a user asks for harmful assistance and the assistant refuses with an explanation. This teaches the model hard boundaries.

Rephrasing and refusal solve different problems:

- rephrasing teaches safe discussion of sensitive topics;
- refusal teaches when not to comply.

A good safety model needs both. If it only refuses, it becomes useless on sensitive but legitimate questions. If it only rephrases, it may stay too helpful on clearly harmful requests.

### Step 4: Moral Education

The paper then adds moral education data. These examples turn the refusal logic into educational prose, such as articles or guidelines.

This is subtle but important. If the model only learns a refusal template, it may behave like a shallow classifier: when a request resembles a harmful prompt, output a refusal. Moral education tries to teach the underlying reason.

In plain language:

- refusal data says "do not help with this";
- moral education says "here is why this boundary exists."

That matters for generalization. The model may encounter new harmful requests that do not match a memorized refusal pattern. Ethical context can help it reason about the boundary.

### Step 5: Harmfulness-Tag Pretraining

The paper also trains with a special token: `<potentially unsafe content>`.

During pretraining, unsafe segments receive this tag at random positions covering 5% of the input sequence length. Safe content and synthetic recontextualized content do not get the tag.

The purpose is not merely to label the text for the human reader. The goal is to make the model learn an internal association between unsafe semantics and a special marker. If the model can predict that marker around unsafe continuations, that marker can later be used as a steering signal.

This creates a bridge from pretraining to inference. The model has learned a safety-relevant feature of its own distribution.

### Step 6: SafeBeam

SafeBeam is the inference-time use of the harmfulness tag.

In normal beam search, the model keeps candidate continuations with high probability. SafeBeam adds a safety lookahead. For each candidate beam, it asks: if we extend this candidate, how likely is the model to produce the harmfulness tag next?

Then it discards the riskiest half of candidate beams and chooses the best remaining beams by ordinary log probability.

So SafeBeam does not rely on a hand-written blocklist. It uses the model's learned unsafe-content marker as a decoding signal.

This is clever because the tag has been trained into the model's own distribution. But it also creates a limitation: attackers may adapt to the decoding rule, and the method can increase overrefusal.

### Training And Baselines

The experiments use 1.7B-parameter models trained in a SmolLM2-style setup with FineWeb-Edu, StackOverflow, FineMath, and Cosmopedia. The paper uses LitGPT with FlashAttention-2 and mixed precision.

All models are later instruction-tuned on UltraChat-200k plus safety datasets including WildGuardMix and WildJailbreak. This detail matters. The standard pretrained model is not left unaligned. It receives ordinary safety instruction tuning too.

That makes the comparison sharper:

- standard pretraining plus post-hoc safety instruction tuning;
- safety-aware pretraining plus the same post-training;
- safety-aware pretraining plus SafeBeam.

The paper is asking whether pretraining-time safety adds robustness beyond normal alignment.

### Evaluation Design

The paper evaluates four things.

First, ordinary language capability: ARC, CommonsenseQA, GSM8K, OpenBookQA, PIQA, TriviaQA, WinoGrande, and MMLU.

Second, base-model safety: the tendency of a pretrained model to complete unsafe prompts before instruction tuning.

Third, post-instruction safety: attack success on safety benchmarks such as HarmBench, TDC, JailbreakBench, and AdvBench.

Fourth, robustness after benign finetuning: what happens if the aligned model is further trained on a harmless task like GSM8K?

The last evaluation is the most conceptually important. If safety is only a thin post-training layer, then benign finetuning may erase or weaken it. If safety is native to the pretrained model, benign finetuning should hurt less.

### Main Results

The result pattern supports the paper's thesis.

In base-model evaluations, standard pretraining has much higher attack success than safety pretraining. The paper reports 44.1% ASR for the standard pretrained base model, 11.6% for safety pretraining, and 1.6% for safety pretraining with SafeBeam.

After safety instruction tuning, differences become less visible. All models look fairly safe. This is exactly why the authors distrust post-hoc evaluation alone: alignment can hide differences in underlying robustness.

After benign GSM8K finetuning, the differences reappear. The standard pretrained model rises to 38.8% ASR. Safety pretraining is lower at 23.0%. Safety pretraining with SafeBeam reaches 8.3%.

That is the paper's main story in one sentence:

Post-training can make models look safe, but safety pretraining makes the safety behavior harder to wash away.

### The Most Important Ablation

The stepwise ablation is the best part of the paper for memory.

Training only on safety-score-0 data makes things worse: 43.8% ASR versus 38.8% for raw data. That is surprising if you think safety is just removing bad content.

The authors' interpretation is that the model needs controlled exposure. If it never sees unsafe patterns, it does not learn what to do with them.

Then each richer intervention helps:

- recontextualization lowers ASR to 33.6%;
- adding refusal data lowers it to 25.1%;
- adding moral education lowers it to 23.0%;
- adding SafeBeam lowers it to 8.3%.

This teaches a clean distinction:

- filtering removes exposure;
- recontextualization changes exposure;
- refusal teaches boundaries;
- moral education teaches principles;
- harmfulness tags create a control handle;
- SafeBeam uses that handle during generation.

### Helpfulness And Overrefusal

The natural worry is that making models safer will make them refuse too much. The paper evaluates 300 benign Alpaca requests and judges responses as helpful, unhelpful, partial refusal, full refusal, or short-circuit.

The reported result is that safety pretraining mostly preserves helpfulness. SafeBeam slightly increases overrefusal.

This is plausible given the method. If SafeBeam is filtering continuations based on unsafe-tag probability, it may sometimes treat legitimate sensitive discussion as risky. The paper's appendix also shows that harmfulness-tag pretraining plus SafeBeam without richer recontextualization can hurt helpfulness. That reinforces the curriculum point: steering works better when the model has safe continuations available.

### Data Safety Report Cards

The paper proposes Data Safety Report Cards for pretraining datasets. This is a useful operational idea.

A dataset release should not only report size, sources, language mix, and benchmark effects. It should report:

- the distribution of safety scores;
- harmful content frequencies by category;
- the taxonomy used for those categories.

This makes safety a property of the dataset, not only a property of the final model.

For Scale-style evaluation and data work, this is especially relevant. If a dataset drives model behavior, then its safety profile should be inspectable before training.

### Critique

The paper is strong because it gives a concrete pretraining-time safety pipeline and tests robustness after benign finetuning. That benign-finetune stress test is a good way to reveal shallow alignment.

The main limitation is scale. The models are 1.7B parameters. It is not obvious that the same intervention sizes, synthetic data quality, tag rates, and decoding tradeoffs transfer unchanged to frontier models.

The second limitation is classifier dependence. The entire pipeline starts with safety scoring. If scoring misses subtle harms, those harms pass through. If scoring overflags benign material, the model may learn excessive caution or distorted context.

The third limitation is scope. This paper is mainly about harmful-content safety and refusal robustness. It is not a full solution for deception, power-seeking, scheming, tool misuse, or long-horizon agent behavior.

The fourth limitation is synthetic-data values. Recontextualization and moral education require choices about ethics, context, and framing. Those choices can be reasonable and still contested.

Finally, SafeBeam is not a permanent shield. It uses a learned tag probability as a risk signal, but adaptive attacks could target the decoding rule, and decoding-time filters can create utility costs.

### How To Remember The Paper

The one-line memory:

Safety Pretraining says models should learn safety during pretraining, not merely learn refusal after pretraining.

The pipeline:

1. score data for harm;
2. recontextualize moderately unsafe content;
3. create refusal data for highly unsafe content;
4. create moral-education data explaining boundaries;
5. train harmfulness tags into unsafe segments;
6. use SafeBeam to steer away from unsafe continuations.

The surprising result:

Training only on "safe" data can be worse than raw data because the model does not learn how to handle unsafe patterns.

The deep lesson:

Safety is not just less bad data. It is the right kind of exposure, with context, boundaries, and principles.

