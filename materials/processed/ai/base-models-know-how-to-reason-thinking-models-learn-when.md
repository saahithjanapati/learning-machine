# Base Models Know How To Reason, Thinking Models Learn When

Source: [arXiv PDF](https://arxiv.org/pdf/2510.07364), arXiv:2510.07364.

Authors: Constantin Venhoff, Ivan Arcuschin, Philip Torr, Arthur Conmy, Neel Nanda.

Status note: The PDF is marked as under review as an ICLR 2026 conference paper.

## Core Claim

Thinking models such as DeepSeek-R1-style models may not primarily learn entirely new reasoning mechanisms during post-training. Instead, the paper argues that many reasoning mechanisms already exist latently in base models, and post-training teaches models when to deploy those mechanisms during a chain of thought.

The authors test this by building hybrid models: a base model generates the answer, while a thinking model decides when a reasoning mechanism should be activated. The base model is steered with activation-space vectors corresponding to reasoning behaviors such as planning, backtracking, computation, verification, and drawing conclusions. Across GSM8K and MATH500, the hybrid model recovers up to 91% of the gap between base and thinking models without changing base-model weights, while steering only a minority of tokens.

## Method

The paper has two main parts.

First, it discovers a taxonomy of reasoning mechanisms in thinking models. The authors collect reasoning traces from MMLU-Pro, split them into sentences, average activations over each sentence, and train small Top-K sparse autoencoders on those sentence-level activations. Unlike standard mechanistic-interpretability SAEs with very large dictionaries, these SAEs use restricted dictionary sizes, roughly 5 to 50 features, to force clustering into high-level reasoning mechanisms rather than incidental token-level features.

The resulting clusters are turned into human-readable categories with an LLM. The taxonomy is scored using LLM-judge metrics for:

- consistency: whether sentences assigned to a category match the category description;
- completeness: whether the taxonomy covers the observed reasoning sentences;
- independence: whether categories are distinct rather than redundant.

Second, the authors train steering vectors in base models. For each reasoning category, they select high-activation example sentences from thinking-model traces, then optimize a steering vector in the base model so that adding the vector makes the base model more likely to produce the corresponding thinking-model completion. They also train a general bias vector that captures broad thinking-model style, such as more verbose and pedagogical explanations.

At evaluation time, the hybrid model works as follows:

1. The base model generates tokens.
2. A thinking-model activation classifier decides which reasoning category should be active next.
3. If a reasoning category is detected, the corresponding steering vector is added to the base model's activations.
4. Steering strength and token windows are selected using thinking-model perplexity.

The key point is that the base model's weights do not change. If the hybrid performs close to the thinking model, that is evidence that the base model already contains executable reasoning mechanisms.

## Main Results

On GSM8K, the hybrid model substantially improves several base models. For Llama-3.1-8B paired with DeepSeek-R1-Distill-Llama-8B, accuracy rises from 37.8% to 63.4%, recovering 56.1% of the gap to the thinking model. For Qwen2.5-32B paired with DeepSeek-R1-Distill-Qwen-32B, accuracy rises from 92.6% to 94.4%, recovering 81.8% of the gap.

On MATH500, the strongest result is Qwen2.5-32B paired with QwQ-32B. The base model scores 63.4%, the hybrid scores 84.4%, and the thinking model scores 86.4%. This recovers 91% of the performance gap.

The hybrid does this while steering a small fraction of tokens. Across the reported configurations, the per-problem steered fraction is usually around 6% to 21% depending on model and benchmark. This supports the authors' claim that sparse, well-timed interventions can unlock latent reasoning behavior.

The ablations are important. In the strongest MATH500 setting, Qwen2.5-32B base gets 63.4%, full hybrid gets 84.4%, and the thinking model gets 86.4%. Only using the general bias vector gets 76.8%. Randomly firing category vectors gets 77.8%. Random vectors get 77.2%. These are all worse than the full hybrid, suggesting that both the learned directions and the timing matter.

## Interpretation

The paper's central decomposition is:

```text
reasoning = knowing how to execute mechanisms + knowing when to deploy them
```

The authors argue that pretraining supplies many of the mechanisms. Post-training, especially RLVR or reasoning distillation, teaches orchestration: when to verify, when to backtrack, when to compute, when to restate the problem, and when to conclude.

This does not mean post-training is unimportant. It means post-training may act more like a controller or scheduler over latent capabilities than a builder of those capabilities from scratch.

## Limitations

The taxonomy evaluation depends heavily on LLM judges. The categories are discovered from activations, but their labels and quality scores are still mediated by LLM evaluation.

The hybrid model uses a thinking model as an oracle-like controller. That means the result is not yet a standalone replacement for post-training; it is a causal test of whether the base model can execute thinking-model behaviors when externally cued.

The strongest gains appear in larger models. Smaller models often show weaker or even negative gains without broader hyperparameter sweeps, suggesting that latent mechanisms and clean steering directions may be less available or less controllable at small scale.

The experiments focus on GSM8K and MATH500. The claim may not transfer unchanged to broader reasoning, coding, scientific planning, agentic tasks, or open-ended evaluation.

Finally, activation steering is not the same as deployable training. The paper supports a mechanistic hypothesis about reasoning post-training, but more work is needed to turn the idea into reliable training or inference-time systems.

## Scale AI Prep Relevance

This paper is highly relevant to post-training x interpretability.

For post-training, it gives a concrete hypothesis about what RLVR and distillation are doing: they may teach deployment policies over pre-existing reasoning behaviors. This reframes post-training from "create reasoning" to "schedule reasoning mechanisms."

For interpretability, it uses sentence-level activation clustering and steering vectors to identify and causally activate reasoning behaviors. This connects sparse features, reasoning taxonomies, and activation engineering.

For Scale-style evaluation and training, it suggests a useful diagnostic question: when a model improves after post-training, did it learn a new capability, or did it learn to call the right internal mechanism at the right time? That distinction matters for data selection, reward design, verifier design, and scalable supervision.

## Key Takeaways

- Base models may already contain many reasoning mechanisms used by thinking models.
- Thinking-model training may primarily teach when to deploy those mechanisms.
- The paper builds an unsupervised SAE-based taxonomy of reasoning mechanisms from sentence-level activations.
- Activation steering lets base models execute those mechanisms without weight updates.
- The strongest hybrid result recovers 91% of the MATH500 gap between Qwen2.5-32B and QwQ-32B.
- The result is a causal interpretability argument, not just a behavioral comparison.
