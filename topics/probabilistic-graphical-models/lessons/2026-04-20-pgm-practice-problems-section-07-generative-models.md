# PGM Practice Problems 7: GANs, Score Matching, NCE, and Diffusion

Use with [[2026-04-20-pgm-exam-prep-section-07-generative-models]], [[2026-04-20-pgm-worked-problems-section-07-generative-models]], [[2026-04-20-pgm-practice-problems-section-07-generative-models-answer-key]], and [[2026-04-20-pgm-memory-07-generative-models]].

These are unsolved practice problems for the late-course generative-models cluster. Completed prompts are kept stable; unsolved prompts are more exam-like.

## Table of Contents

- [[#Problem 7.1]]
- [[#Problem 7.2]]
- [[#Problem 7.3]]
- [[#Problem 7.4]]

## Problem 7.1

Match each method to the main object it most directly learns:

- GAN
- score matching
- NCE
- diffusion model

Targets:

- a denoising / reverse-noise process
- the score $\nabla_x \log p(x)$
- a classifier that separates data from noise
- a generator trained against a discriminator

## Problem 7.2

Consider an energy-based model
$$
p_\theta(x)=\frac{1}{Z_\theta}\exp(-E_\theta(x)).
$$

Select all statements that are true.

A. The score $\nabla_x \log p_\theta(x)$ does not contain $\nabla_x \log Z_\theta$ because $Z_\theta$ does not depend on $x$.

B. Score matching can be useful when likelihood training is hard because $Z_\theta$ is expensive.

C. Score matching directly gives normalized probabilities $p_\theta(x)$ for every $x$ without any additional work.

D. The score points in the direction where log density increases locally.

E. Score matching is only defined for discrete variables.

## Problem 7.3

Suppose the real data distribution puts mass near $x=0$, while the generator currently puts mass near $x=10$ with almost no overlap.

Which statement is the best explanation for why a Wasserstein-style objective can be easier to optimize than the original GAN objective in this setting?

A. The Wasserstein objective can provide a meaningful notion of distance even when supports barely overlap.

B. The Wasserstein objective removes the need for a generator.

C. The Wasserstein objective guarantees there can never be mode collapse.

D. The Wasserstein objective requires the discriminator to output calibrated probabilities.

Then briefly explain why the wrong choices are wrong.

## Problem 7.4

Describe the forward and reverse stories in a diffusion model.

Your answer should explain what happens during training at a high level and how sampling works.
