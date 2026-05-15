# Interpretable Reward Model via Sparse Autoencoder

Source: `https://arxiv.org/pdf/2508.08746`
Canonical page: `https://arxiv.org/abs/2508.08746`
Title: `Interpretable Reward Model via Sparse Autoencoder`
Authors: `Shuyi Zhang, Wei Shi, Sihang Li, Jiayi Liao, Hengxing Cai, Xiang Wang`
Submitted: `2025-08-12`
Last revised: `2025-11-25`
Venue note: `AAAI 2026 Oral`
arXiv: `2508.08746v5`
DOI: `10.48550/arXiv.2508.08746`
Ingested: `2026-05-15`
Extraction engine: `arXiv metadata + Python PDF text extraction + manual structured ingest`
Strategy: `paper-mode summary focused on SAE-based reward-model interpretability, feature attribution, and preference manipulation`

Related processed note: [SparseRM: A Lightweight Preference Modeling with Sparse Autoencoder](sparserm-lightweight-preference-modeling-with-sparse-autoencoder.md)

## Summary

This paper introduces SARM, a Sparse Autoencoder-enhanced Reward Model. The goal is to make scalar reward models more interpretable and controllable by inserting a pretrained SAE into the reward-model architecture.

Traditional reward models usually map dense hidden activations to a scalar reward. That scalar can be useful for RLHF, but it is hard to explain. SARM instead maps hidden activations into a sparse feature space. A linear value head then aggregates feature activations into a reward score. Because the active features can be described in natural language, the reward score can be attributed to a small set of interpretable components.

The paper emphasizes two benefits:

1. Feature-level attribution: reward assignments can be traced to sparse features.
2. Dynamic preference manipulation: changing the value-head weight for a feature can selectively increase or decrease rewards for examples where that feature activates.

SARM is evaluated on RewardBench 2 with Llama-3-style backbones. The headline result is that SARM-4B gets the highest overall score among the compared open-source and closed-source baselines in the table, with an overall RewardBench 2 score of 73.6. The paper also shows that manipulating a safety-related feature shifts reward scores for safety-positive target examples while leaving a complement set mostly unchanged.

## Method

SARM has two stages.

### Stage 1: Pretrain an SAE

The authors train a TopK SAE on sequence-level hidden activations from a selected layer of a language model. The SAE decomposes dense hidden states into sparse feature activations.

The TopK design retains only the largest activations, making the latent vector sparse. The paper argues that this sparse latent space supports human-readable feature attribution.

### Stage 2: Train the reward model

After SAE pretraining, the SAE encoder is inserted back into the reward model at the chosen layer. The model maps the final-token hidden state into sparse feature activations and trains a linear value head over those features with the standard pairwise reward-modeling objective.

The model can be trained on ordinary preference data. It does not require costly multidimensional reward annotations.

## Interpretability

The paper uses auto-interpretation to assign natural-language descriptions to SAE features. It runs SARM on an out-of-distribution preference dataset, collects contexts that activate each feature, and sends those contexts to GPT-4o to generate descriptions.

The paper distinguishes positive and negative features:

- Positive features correlate with preferred responses. Examples include structured calculations, programming, factual reasoning, and ethical considerations.
- Negative features correlate with rejected responses. Examples include unsafe, harmful, or misleading content.

Because the value head has explicit weights over sparse features, a feature's contribution to the reward can be inspected. Positive-weighted features raise reward when active; negative-weighted features suppress reward.

## Preference Manipulation

SARM's most distinctive experiment is preference manipulation.

The authors identify a safety-related feature by measuring how often each feature activates on chosen versus rejected responses in safety data. They then multiply the value-head weight for that feature and evaluate the reward distribution.

The result is selective movement:

- The reward distribution for target safety-positive examples shifts rightward.
- The complement set remains mostly unchanged.

This supports the claim that SARM's features are not only interpretable after the fact, but also usable as control knobs for targeted reward behavior.

## Experimental Setup

The paper trains SARM variants with Llama-3 family backbones. It uses a general corpus for SAE pretraining and Skywork-Reward-Preference-80K-v0.2 for reward-model training.

The benchmark is RewardBench 2, which covers preference tasks involving safety, helpfulness, factuality, instruction following, math, focus, and ties.

The reported SARM variants include:

- SARM-2B;
- SARM-3B;
- SARM-4B.

Baselines include open-source reward models such as ArmoRM, GRM, Tulu reward models, RAMO, QRM, Skywork, LDL-Reward-Gemma, and a 70B Tulu reward model, plus closed-source models such as GPT-4o, Gemini 2.5 Pro, Claude Sonnet 4, and GPT-4.1.

## Main Results

SARM-4B achieves the highest overall RewardBench 2 score in the reported table:

- SARM-4B: 73.6 overall.
- GPT-4.1: 72.3 overall.
- LDL-Reward-Gemma-2-27B: 72.5 overall.
- Llama-3.1-Tulu-3-70B-SFT-RM-RB2: 72.2 overall.
- Skywork-Llama-8B-v0.2: 71.8 overall.

SARM-4B is especially strong on safety and focus:

- Safety: 91.3.
- Focus: 96.0.
- Ties: 79.6.

The paper uses this to argue that adding interpretability through sparse feature modeling does not necessarily degrade reward-model quality.

## Ablations

Two ablations are central.

First, replacing the pretrained SAE encoder with a randomly initialized linear layer drops overall performance from 73.6 to 68.4. This suggests the pretrained sparse features are doing useful work beyond adding parameters.

Second, using token-level SAE pretraining instead of sequence-level SAE pretraining gets 71.5 overall, below full SARM. The authors argue that sequence-level pretraining produces more abstract, decision-relevant features for reward modeling.

The appendix also explores layer position, feature dimension, and sparsity. The general conclusion is that middle/deeper layers are better than shallow layers, feature dimension is fairly robust over a range, and TopK sparsity choices trade interpretability against reconstruction quality without dominating performance.

## Limitations

- SARM depends on feature descriptions generated by an external model, so interpretability quality depends on the quality of auto-interpretation.
- Feature manipulation is demonstrated mainly through a safety-focused case study, not a broad suite of preference-control tasks.
- A sparse feature may have mixed semantics or context-dependent meaning.
- Directly manipulating reward weights could create unintended side effects if a feature activates in unexpected contexts.
- The paper benchmarks reward-model scoring, but it does not fully test long-run policy optimization against SARM.
- The method assumes that the relevant reward semantics are captured in the selected SAE feature space.

## Why It Matters

SARM is important because it treats interpretability as part of the reward model itself. Instead of training an opaque scalar reward and then trying to explain it later, the reward computation is routed through sparse features from the beginning.

For post-training research, this suggests a concrete design pattern:

1. Learn or reuse an interpretable feature basis.
2. Train reward heads over that basis.
3. Attribute rewards to active features.
4. Adjust feature weights to change preferences.

That design is promising, but risky. If a policy is optimized against a feature-weighted reward model, it may learn to game those features. The next research question is whether feature-level interpretability makes such reward hacking easier to detect or merely gives the optimizer a new target.

## Questions For Review

1. How does SARM differ from an ordinary scalar reward model?
2. Why does the paper use a pretrained SAE rather than a randomly initialized feature layer?
3. What does feature-level attribution mean in SARM?
4. How does the safety-feature manipulation experiment work?
5. Why is sequence-level SAE pretraining better than token-level SAE pretraining in the ablation?
6. What are the risks of directly manipulating feature weights in a reward model?
