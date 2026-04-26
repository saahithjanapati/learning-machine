# PGM Practice Problems 7 Answer Key: GANs, Score Matching, NCE, and Diffusion

Use with [[2026-04-20-pgm-practice-problems-section-07-generative-models]].

## Table of Contents

- [[#Solution 7.1]]
- [[#Solution 7.2]]
- [[#Solution 7.3]]
- [[#Solution 7.4]]

## Solution 7.1

The correct matching is:

- GAN $\to$ a generator trained against a discriminator
- score matching $\to$ the score $\nabla_x \log p(x)$
- NCE $\to$ a classifier that separates data from noise
- diffusion model $\to$ a denoising / reverse-noise process

## Solution 7.2

The true statements are:

- A
- B
- D

For
$$
\log p_\theta(x)=-E_\theta(x)-\log Z_\theta,
$$
the score is
$$
\nabla_x\log p_\theta(x)
=
-\nabla_x E_\theta(x),
$$
because $Z_\theta$ depends on $\theta$, not on $x$.

Statement C is false because the score does not directly give normalized probability values. Statement E is false because classical score matching is naturally stated for continuous variables.

## Solution 7.3

The best answer is A.

When the real and generated distributions barely overlap, the original GAN objective can give weak or saturated learning signals. A Wasserstein-style objective measures how much "work" it takes to move mass from one distribution to the other, so it can remain informative even when the supports are far apart.

The other choices are wrong:

- B is wrong because WGANs still train a generator.
- C is wrong because WGANs can reduce some training pathologies but do not mathematically eliminate mode collapse in every practical setup.
- D is wrong because the critic in a WGAN is not a calibrated probability discriminator.

## Solution 7.4

In the forward process, noise is gradually added to data. In the reverse process, the model learns how to remove that noise step by step. At generation time, we start from noise and repeatedly apply the learned reverse denoising process to obtain a sample.
