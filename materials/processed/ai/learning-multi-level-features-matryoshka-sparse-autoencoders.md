# Learning Multi-Level Features with Matryoshka Sparse Autoencoders

Source: [arXiv PDF](https://arxiv.org/pdf/2503.17547), arXiv:2503.17547.

Authors: Bart Bussmann, Noa Nabeshima, Adam Karvonen, Neel Nanda.

## Core Claim

Sparse autoencoders become less reliable as their dictionary size grows because the sparsity objective can distort feature structure. High-level features can split into many specific features, develop holes through feature absorption, or combine independent concepts into composed latents. The paper introduces Matryoshka Sparse Autoencoders, which train multiple nested dictionaries inside one SAE so early latents must reconstruct inputs on their own while later latents can specialize.

The key result is that Matryoshka SAEs preserve high-level features better while still learning more specific features at larger dictionary sizes. They trade a small amount of reconstruction quality for better feature quality, lower absorption, less composition, stronger sparse probing, and better targeted concept erasure.

## Problem

Standard SAEs optimize reconstruction plus sparsity. This can create several failures:

- Feature splitting: a broad concept fragments into many narrow latents, such as punctuation splitting into comma, period, and question-mark latents.
- Feature absorption: a parent latent remains but develops systematic blind spots when child latents absorb specific cases, such as a female-name latent that stops firing on Lily because a Lily-specific latent handles those tokens.
- Feature composition: independent concepts merge into composite latents, such as red triangle instead of red and triangle separately.

These failures get worse as the dictionary gets larger. More latents create more opportunities for the SAE to satisfy the sparsity objective by replacing abstract features with narrower or more composite ones.

## Method

Matryoshka SAEs define a sequence of nested dictionary sizes:

```text
m1 < m2 < ... < mn = m
```

A sub-SAE using only the first `mi` latents must reconstruct the input. The full model is trained with reconstruction losses at multiple prefix sizes.

Early latents are used by every smaller reconstruction objective, so they are pressured to learn general, reusable features. Later latents are used only in larger prefix reconstructions, so they can specialize without absorbing the general features.

For Gemma-2-2B experiments, the authors use fixed prefix sizes with five nested sub-SAEs:

```text
{2048, 6144, 14336, 30720, 65536}
```

They train on layer 12 residual stream activations from Gemma-2-2B using 500M tokens from The Pile. They use BatchTopK activation functions with average sparsities of 20, 40, 80, 160, and 320 active latents per token.

## Experiments

The paper tests Matryoshka SAEs in three settings.

### Synthetic Hierarchical Toy Model

The toy model contains tree-structured binary features where child features imply parent features. A standard SAE exhibits feature absorption: when a child fires, the parent often fails to fire. Matryoshka SAEs recover the true feature structure more cleanly, with decoder vectors aligning diagonally with ground-truth features.

### TinyStories Transformer

On a 4-layer TinyStories transformer, standard larger SAEs show broad features developing holes. The paper highlights a female-words latent that stops firing on Lily once a Lily-specific latent appears. A larger Matryoshka SAE maintains the broad female-words feature while also learning specialized name features.

### Gemma-2-2B

On Gemma-2-2B, Matryoshka SAEs are compared against several SAE baselines using SAE Bench-style evaluations.

Main findings:

- Reconstruction is slightly worse than BatchTopK. At L0 = 40, Matryoshka explains about 70% of variance versus 72% for BatchTopK.
- Downstream language-model cross-entropy loss is comparable at larger L0s.
- Feature absorption is much lower. At L0 = 40, Matryoshka absorption rate is about 0.05 versus 0.49 for BatchTopK.
- Feature splitting is reduced. At L0 = 40, Matryoshka needs about one latent per first-letter feature, while BatchTopK splits the same information across about three latents.
- Sparse probing improves, especially at lower sparsities.
- Spurious correlation removal and targeted probe perturbation improve, suggesting more isolated causal concept representations.
- Decoder cosine similarity is lower, suggesting less feature composition.
- Automated interpretability scores are comparable to BatchTopK and better than many alternatives.
- Scaling from 4k to 16k to 65k latents is stable or improves most metrics for Matryoshka SAEs, while some baselines degrade.

## Limitations

Matryoshka SAEs sacrifice a small amount of reconstruction quality. If an application requires the best possible activation reconstruction, this trade-off may matter.

Training is slower because the model computes multiple nested reconstruction losses. With five nested dictionaries, the authors report about 50% more training time.

The paper relies heavily on quantitative proxies and automated interpretability. Human interpretability and practical downstream use need further testing.

## Scale AI Prep Relevance

This paper belongs in the Scale AI interpretability and embeddings map because it improves the quality of sparse feature spaces that could later support audits, steering, monitors, or feature-based rewards. It also sharpens an important warning: reconstruction quality is not the same thing as interpretability. A standard SAE can reconstruct well while learning absorbed, split, or composed features that are less useful for supervision or auditing.

For post-training x interpretability, Matryoshka SAEs matter because feature-derived signals are only as good as the feature basis. If a feature reward, monitor, or eval depends on a high-level concept, feature absorption can create dangerous blind spots. Nested dictionaries are one concrete method for preserving high-level and low-level features together.

## Key Takeaways

- Larger SAE dictionaries can distort feature structure through splitting, absorption, and composition.
- Matryoshka SAEs train nested prefix dictionaries so early latents must remain useful general features.
- The method reduces absorption and composition while improving sparse probing and concept-isolation tasks.
- The cost is slightly worse reconstruction and slower training.
- The paper is directly relevant to using sparse features as reliable interpretability, evaluation, or post-training signals.
