# Learning a Generative Meta-Model of LLM Activations

Source: [arXiv PDF](https://arxiv.org/pdf/2602.06964)

Project page: [generative-latent-prior.github.io](https://generative-latent-prior.github.io/)

Code: [g-luo/generative_latent_prior](https://github.com/g-luo/generative_latent_prior)

Weights: [Hugging Face weights](https://huggingface.co/generative-latent-prior)

Authors: Grace Luo, Jiahai Feng, Trevor Darrell, Alec Radford, Jacob Steinhardt

Venue/status: ICML 2026 project page; arXiv:2602.06964v1 submitted February 6, 2026; paper preprint dated February 9, 2026

Ingested: 2026-05-03

## One Sentence Summary

The paper trains diffusion models over LLM residual-stream activations, called Generative Latent Priors (GLPs), and shows that these meta-models can improve activation steering and produce useful nonlinear features for probing.

## Why This Matters

Many interpretability tools assume that the important structure in activations is linear or sparse. PCA assumes useful directions are linear. Sparse autoencoders (SAEs) assume that activations can be decomposed into sparse features. These assumptions are useful, but they can also miss nonlinear structure and can produce activation edits that leave the model's natural activation manifold.

This paper asks a different question:

> Instead of forcing activations into a linear or sparse format, can we learn a generative model of the activation distribution itself?

If the answer is yes, the generative model can act like a learned prior over "valid" internal states of an LLM.

## Core Object: GLP

GLP stands for Generative Latent Prior. It is a diffusion model trained on LLM activations.

The authors train GLP on one billion residual-stream activations sampled from FineWeb text. The source activations come from intermediate layers of Llama-family models:

- Llama1B: middle layer, activation dimension 2048
- Llama8B: middle layer, activation dimension 4096

The model is a deep MLP diffusion denoiser. It uses a flow-matching objective over continuous activation vectors. Unlike an SAE, it does not try to reconstruct an activation through a sparse bottleneck. It learns the activation distribution directly.

## Why A Diffusion Model Of Activations?

Diffusion models learn to denoise corrupted samples. In images, that means learning what natural images look like. Here, the "image" is an LLM activation vector.

The training setup is conceptually simple:

1. Take a real activation vector.
2. Add Gaussian noise at a sampled timestep.
3. Train a denoiser to predict the velocity that moves the noisy vector back toward the data.

Because activations are continuous vectors, they fit naturally into a diffusion/flow-matching setup.

## Application 1: On-Manifold Steering

Activation steering often works by adding a concept vector to an activation:

```text
edited_activation = activation + steering_strength * concept_direction
```

The problem is that large steering strengths can push the activation off the model's natural manifold. The model may express the target concept more strongly, but its output fluency degrades.

GLP is used as a post-processing step:

1. Apply a steering intervention.
2. Add a controlled amount of noise.
3. Run diffusion denoising with GLP.
4. Inject the denoised activation back into the LLM.

This is analogous to image editing with diffusion: keep the intended semantic edit, but pull the sample back toward the learned data manifold.

The paper evaluates this in several settings:

- SAE feature steering on 500 LlamaScope SAE concepts
- Persona vector steering on Llama8B-Instruct
- Positive sentiment steering with DiffMean

Across these settings, GLP improves the concept-fluency tradeoff: for a comparable fluency level, outputs express the target concept more strongly.

## Application 2: Meta-Neurons For Probing

The authors also use internal GLP activations as features. They call these features "meta-neurons" because they are neurons inside a model trained to model another model's activations.

They test whether a single scalar GLP feature can predict binary concepts, using 113 probing tasks from prior work. This is a strict test: one feature gets one logistic-regression probe.

The reported 1-D probe AUCs are:

| Model family | SAE | Raw layer output | Raw MLP neuron | GLP |
| --- | ---: | ---: | ---: | ---: |
| Llama1B | 0.70 | 0.77 | 0.79 | 0.84 |
| Llama8B | 0.76 | 0.77 | 0.82 | 0.87 |

The result suggests that GLP internal units localize some concepts more cleanly than SAE features or raw LLM neurons in this setup.

## Scaling Results

The paper trains Llama1B GLPs of several sizes: 0.5B, 0.9B, 1.7B, and 3.3B parameters. The diffusion loss decreases smoothly with compute and fits a power law.

The important claim is not just that training loss improves. The authors show that downstream usefulness tracks the loss:

- Better diffusion loss predicts better steering performance.
- Better diffusion loss predicts better 1-D probing performance.

This is one of the paper's main arguments for GLP as a scalable interpretability direction. If loss is a reliable proxy for downstream utility, then scaling the meta-model may predictably improve interpretability tools.

## Generation Quality Checks

Unlike image or text generation, activation generation is hard to inspect directly. The authors use several checks:

- Frechet Distance between generated and real activations
- PCA plots comparing generated and real activation samples
- Delta LM Loss when replacing original activations with reconstructed/denoised ones

For Llama1B activations, GLP Frechet Distance improves with scale and is lower than SAE reconstruction despite GLP generating from noise. For Llama8B, GLP also beats the comparable SAE reconstruction on Frechet Distance and Delta LM Loss.

## Limitations

The paper names several limitations.

First, GLP models single-token activations independently. It does not yet model multi-token structure, so it may miss cross-position relationships.

Second, the model is unconditional. Conditioning directly on the clean activation could reduce information loss for steering-like applications.

Third, the main experiments focus on residual-stream activations at one layer. Other activation types, layer combinations, and multi-layer GLPs remain open directions.

Fourth, a better concept-fluency frontier does not automatically mean a steering method is safe. Stronger persona or behavior elicitation can be useful for analysis, but it can also make behavioral control more powerful.

## Key Takeaways

1. GLP is a diffusion model trained on LLM activations, not on text.
2. It learns a prior over plausible internal states of a source LLM.
3. That prior can post-process activation edits so they stay closer to the activation manifold.
4. GLP internal neurons can act as nonlinear features for concept probing.
5. Diffusion loss scales smoothly with compute and predicts downstream steering/probing gains.
6. The work is promising, but still limited to mostly single-token, single-layer activation modeling.

## Questions To Check Understanding

1. Why might a linear steering direction push activations off-manifold?
2. How is GLP different from a sparse autoencoder?
3. Why is diffusion loss useful if it predicts steering and probing performance?
4. What does a 1-D probe test?
5. Why is single-token modeling a limitation?
