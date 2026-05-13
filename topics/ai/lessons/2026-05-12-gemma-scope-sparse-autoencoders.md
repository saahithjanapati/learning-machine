# Gemma Scope

Source note: Tom Lieberum, Senthooran Rajamanoharan, Arthur Conmy, Lewis Smith, Nicolas Sonnerat, Vikrant Varma, Janos Kramar, Anca Dragan, Rohin Shah, and Neel Nanda, "Gemma Scope: Open Sparse Autoencoders Everywhere All At Once on Gemma 2." arXiv:2408.05147v2, submitted August 9, 2024 and revised August 19, 2024. Source page: [arxiv.org/abs/2408.05147](https://arxiv.org/abs/2408.05147). PDF: [arxiv.org/pdf/2408.05147](https://arxiv.org/pdf/2408.05147). Processed source: [materials/processed/ai/gemma-scope-open-sparse-autoencoders-everywhere-all-at-once-gemma-2.md](../../../materials/processed/ai/gemma-scope-open-sparse-autoencoders-everywhere-all-at-once-gemma-2.md).

Filing note: This is filed normally under `AI / Collection` and cross-listed under [Scale AI Research Internship Prep](../scale-ai-research-internship-prep/README.md) as `interpretability`, `embeddings`, and `post-training x interpretability`.

## Table of Contents

- [Medium-Length Version](#medium-length-version)
- [Full-Length Version](#full-length-version)
- [The Central Question](#the-central-question)
- [Sparse Autoencoders In Plain English](#sparse-autoencoders-in-plain-english)
- [What Gemma Scope Releases](#what-gemma-scope-releases)
- [Why JumpReLU Matters](#why-jumprelu-matters)
- [Training And Infrastructure](#training-and-infrastructure)
- [Evaluation Metrics](#evaluation-metrics)
- [Main Findings](#main-findings)
- [Why This Matters For Post-Training](#why-this-matters-for-post-training)
- [Limitations And Critique](#limitations-and-critique)
- [Memory Checklist](#memory-checklist)

## Medium-Length Version

### Medium Thesis

Gemma Scope is an interpretability infrastructure paper.

Its main contribution is not a single discovery about what Gemma 2 represents. Its contribution is releasing a large open suite of sparse autoencoders across Gemma 2 models so researchers can study internal features without first paying the enormous cost of training the tools.

Sparse autoencoders, or SAEs, are used to decompose dense activations into sparse learned latents. The hope is that these latents are closer to human-interpretable features than raw activation dimensions.

Gemma Scope trains JumpReLU SAEs across:

- all layers and important sub-layer sites of Gemma 2 2B and 9B,
- selected layers of Gemma 2 27B,
- some instruction-tuned Gemma 2 9B activations,
- plus related transcoders and sparsity variants.

The main release has more than 400 SAEs. Counting sparsity variants, the release includes more than 2,000 SAEs and more than 30 million learned latents.

### Why This Is Useful

Before Gemma Scope, a lot of SAE work was constrained by cost and access. Researchers could train SAEs on small models, a few layers, or proprietary systems, but it was hard to do broad, reproducible work across a modern open model family.

Gemma Scope changes the baseline. It gives researchers a reusable feature map for Gemma 2.

That matters for:

- finding and comparing features across layers,
- studying feature splitting,
- building circuits from sparse features,
- testing whether features transfer from base to instruction-tuned models,
- exploring feature-based monitoring or steering.

### What The Paper Evaluates

The paper focuses on the sparsity-fidelity tradeoff. A good SAE should reconstruct activations well while using few active latents.

The main metrics are:

- `L0`, the average number of active latents,
- delta LM loss, the increase in model loss when SAE reconstructions are inserted into the model,
- `FVU`, the fraction of variance unexplained by the reconstruction.

One useful result is that residual-stream SAEs often look worse by delta LM loss than MLP or attention-output SAEs, even when FVU is similar. The residual stream is the shared communication channel that later layers depend on, so reconstruction errors there can be more damaging.

The paper also studies sequence position, SAE width, architecture comparisons, transfer from base to instruction-tuned models, dataset-subset behavior, and bfloat16 inference.

### Medium Takeaway

Gemma Scope is best remembered as **open SAE infrastructure for Gemma 2**.

For the Scale AI prep map, it matters because sparse features are one candidate bridge between interpretability and post-training. If internal features can become monitors, reward signals, data-selection signals, or evaluation diagnostics, then broad open SAE suites like Gemma Scope are the substrate that makes those experiments possible.

But the caution is just as important: reconstruction quality is not the same as interpretability, and interpretability is not the same as a safe optimization target.

## Full-Length Version

## The Central Question

The central question is:

**What would it take to make sparse-autoencoder interpretability usable by more than a few large labs?**

Sparse autoencoders have become one of the main tools in mechanistic interpretability. They are attractive because neural networks often appear to represent concepts in superposed directions rather than in clean one-neuron-one-concept units. An SAE tries to learn a larger sparse dictionary of directions that can reconstruct the original activations.

If the dictionary directions are meaningful, researchers can inspect them as features.

The bottleneck is scale. Training SAEs over many layers and sites of a modern model is expensive. Without open suites, many researchers are stuck doing small or one-off studies.

Gemma Scope is an attempt to remove that bottleneck for Gemma 2.

## Sparse Autoencoders In Plain English

Imagine a model activation as a dense mixture of many concepts. The vector does not say "this coordinate is Python code" and "that coordinate is medical uncertainty." Concepts are distributed.

An SAE learns a dictionary of possible latent directions. For a given activation, it activates only a small number of those latents and uses them to reconstruct the original vector.

The bet is that sparse decomposition makes the internal state easier to interpret.

A normal dense activation might be hard to read because every dimension participates in many things. A sparse latent representation is easier to inspect because only a small set of latents fire for a token.

This does not automatically make the latents real concepts. It gives researchers a candidate feature space to validate.

## What Gemma Scope Releases

Gemma Scope is broad by design.

The authors train SAEs for Gemma 2 2B and Gemma 2 9B across all layers and multiple sites inside the transformer block:

- attention outputs,
- MLP outputs,
- post-MLP residual stream.

They also train selected SAEs for Gemma 2 27B, some SAEs on Gemma 2 9B instruction-tuned activations, and a suite of transcoders.

This breadth matters. A single-layer SAE can support a demo. A full suite can support systematic questions:

- Does a feature persist across layers?
- Do adjacent-layer features match?
- Does a feature appear in both base and instruction-tuned models?
- Which sites are easiest to reconstruct?
- Which layers are best for a given auditing problem?

The paper reports that the main release contains more than 400 SAEs, while the full set of sparsity variants includes more than 2,000 SAEs.

## Why JumpReLU Matters

The paper uses JumpReLU SAEs.

The key idea is that each latent has a threshold. If the latent's pre-activation is below the threshold, it is zero. If it is above the threshold, it becomes active.

This is useful because the model can learn both:

- whether a latent should be active,
- how large its activation should be when it is active.

The loss balances reconstruction error with a sparsity penalty. That means the SAE is rewarded for reconstructing activations accurately while keeping the number of active latents low.

In practical terms, JumpReLU gives a cleaner way to control sparsity than older ReLU-plus-L1 setups.

## Training And Infrastructure

The engineering scale is one of the paper's main points.

The SAEs are trained on activations from Gemma 2 models. Each SAE sees billions of tokens. The activations must be collected, stored, shuffled, normalized, and fed through distributed training.

The authors describe a large infrastructure effort involving activation storage, TPU training, sharding strategies, and fast data loading. This is not incidental. It explains why public releases matter. If every researcher has to repeat this cost, the field slows down.

Gemma Scope also releases weights and tutorial material, with an interactive demo through Neuronpedia. That turns the result from a paper into an actual research substrate.

## Evaluation Metrics

The paper evaluates SAEs mainly by asking: how sparse are they, and how much information do they preserve?

The first metric is `L0`, the average number of active latents. Lower `L0` means sparser representations.

The second metric is delta LM loss. This measures what happens when the SAE reconstruction is inserted back into the language model's forward pass. If the language model's loss increases a lot, the reconstruction damaged information the model needed.

The third metric is fraction of variance unexplained, or `FVU`. This measures reconstruction error relative to a simple baseline.

These metrics are useful but incomplete. An SAE can reconstruct well without yielding clean human-interpretable features. A feature can look interpretable but fail causal tests. The paper is careful that there is no settled gold standard for SAE quality.

## Main Findings

The paper's findings are mostly about the behavior of the released suite.

First, the sparsity-fidelity tradeoff is smooth enough to give users choices. Researchers can pick SAEs with different active-latent counts depending on whether they need more sparsity or more faithful reconstruction.

Second, residual-stream SAEs tend to have higher delta LM loss than attention or MLP-output SAEs, even when FVU is similar. This makes sense because the residual stream is the central communication channel across the model. Small reconstruction errors there can affect many downstream computations.

Third, sequence position matters. Reconstruction behavior changes depending on where a token appears in the context, with different patterns for attention, MLP, and residual sites.

Fourth, wider SAEs improve some reconstruction behavior but raise feature-splitting questions. A wider SAE can represent finer distinctions, but a concept that looks single in a narrow SAE may split into several latents in a wider one.

Fifth, base-model SAEs transfer reasonably to instruction-tuned model activations in some settings. This is important because post-training may reweight or adapt existing features rather than completely rebuilding the representation space.

Sixth, bfloat16 inference appears to work without major fidelity loss in the tested setting, which matters for practical circuit-analysis workflows.

## Why This Matters For Post-Training

Gemma Scope is not a post-training paper in the usual sense. It does not propose a new RL algorithm, preference objective, or SFT pipeline.

But it matters for post-training because post-training increasingly needs better signals.

Exact verifiers work for some tasks. Rubrics and judges work for others. But many behaviors researchers care about, such as hallucination, deception, benchmark awareness, sycophancy, and reward hacking, may have internal signatures before they become visible behavior.

Sparse features could become:

- monitors for undesirable internal states,
- reward features for open-ended training,
- data-selection signals,
- debugging tools for failed rollouts,
- representation-level evaluation metrics.

Gemma Scope helps because it gives a large open feature space where those ideas can be tested.

The dangerous leap would be to assume that because a feature is useful for analysis, it is safe to optimize. Once a feature becomes a reward, the model may learn to manipulate the proxy. That is why Gemma Scope should be read alongside work like Features as Rewards, Qwen-Scope, Natural Language Autoencoders, and rubric-based evaluation.

## Limitations And Critique

The main limitation is that the paper releases infrastructure more than final answers.

That is not a weakness, but it changes how to evaluate the contribution. Gemma Scope is valuable if later work uses it to produce reliable interpretability findings, not merely because the suite exists.

Several open issues remain:

- There is no settled metric for SAE interpretability.
- Reconstruction fidelity does not guarantee meaningful latents.
- Feature splitting can make concepts harder to track.
- Transfer to instruction-tuned models is encouraging but not complete.
- SAE latents still require labeling, validation, and causal testing.
- A feature can be useful for auditing but unsafe as a direct optimization target.

The best reading is not "SAEs now solve interpretability." It is:

**Gemma Scope makes serious SAE research on Gemma 2 much more accessible.**

## Memory Checklist

- Gemma Scope is an open suite of JumpReLU SAEs for Gemma 2.
- It covers Gemma 2 2B and 9B broadly, selected 27B layers, and some instruction-tuned comparisons.
- SAEs decompose activations into sparse learned latents.
- Evaluation uses sparsity (`L0`), delta LM loss, and FVU.
- Residual-stream errors can hurt loss more because the residual stream is a shared communication channel.
- For Scale AI prep, Gemma Scope is representation infrastructure for monitors, audits, and possible feature-based post-training signals.
