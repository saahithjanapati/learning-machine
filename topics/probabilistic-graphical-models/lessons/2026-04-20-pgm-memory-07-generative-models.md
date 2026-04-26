# PGM Memory Sheet 7: GANs, Score Matching, NCE, and Diffusion

Use with [[2026-04-20-pgm-exam-prep-section-07-generative-models]].

This section is late-course and Practice-Final-heavy. The recurring exam skill is knowing what each method learns, what objective it avoids or replaces, and why the method helps with a specific failure mode.

## Assessed Sources

- `HW4-Q1`: exponential families, score matching, NCE, and NCE vs MLE efficiency.
- `HW4-Q2`: WGAN trace-form analysis and best-response cycling.
- `HW4-PROG`: neural score matching on Gaussian mixtures.
- `PF-SQ3`: GAN basics, JS divergence, and Wasserstein gradients.
- `PF-SQ7`: standard GAN local minima and CycleGAN non-uniqueness.
- `PF-SQ8`: NCE noise-distribution choice.
- `PF-SQ12`: predictor-corrector diffusion sampling.
- `PF-SQ13`: probability-flow ODE uses.
- `PF-SQ14`: Hyvarinen score-matching derivative requirements.
- `PF-P4`: gradient matching, score matching, generalized score matching.
- `PF-P5`: JS-GAN vs WGAN on shifted uniform intervals.
- `WP7.1-WP7.8`: optimal discriminator, JS flat gradients, score matching, integration by parts, NCE, diffusion, PC sampling, probability-flow ODE.

## Method Map

- **GAN:** learns a generator by fooling a discriminator.
- **WGAN:** replaces JS-style geometry with Wasserstein-style critic geometry.
- **Score matching:** learns the score $\nabla_x \log p_\theta(x)$ without computing $Z(\theta)$.
- **NCE:** learns an unnormalized model by classifying data vs fixed noise.
- **Diffusion / score-based model:** learns scores across noise levels and samples by reversing noising dynamics.

## Standard GAN Objective

Classical GAN minimax objective:

$$
\min_G \max_D
\mathbb{E}_{x\sim p_{\text{data}}}[\log D(x)]
+
\mathbb{E}_{z\sim p(z)}[\log(1-D(G(z)))].
$$

For fixed generator $G$, the optimal discriminator is:

$$
D^*(x)=
\frac{p_{\text{data}}(x)}
{p_{\text{data}}(x)+p_G(x)}.
$$

Interpretation:

> The discriminator is the Bayes classifier for real vs generated samples.

Plugging in $D^*$ yields a Jensen-Shannon divergence view:

$$
2\,\mathrm{JS}(p_{\text{data}},p_G)-\log 4.
$$

## GAN Likelihood Trap

GANs can generate samples, but ordinary GANs do not usually provide tractable likelihoods for arbitrary $x$.

Practice Final `PF-SQ3` tested this.

Memory:

> GANs sample. They do not automatically score arbitrary datapoints with exact likelihood.

## JS Support-Mismatch Failure

When $p_{\text{data}}$ and $p_G$ have disjoint or nearly disjoint support, the JS objective can become flat.

In the shifted-uniform example from `PF-P5`:

$$
p=\mathrm{Unif}[0,1],
\qquad
p_m=\mathrm{Unif}[m,m+1].
$$

For $|m|>1$, supports are disjoint and:

$$
\mathrm{JSD}(p\|p_m)=\log 2.
$$

Therefore:

$$
\frac{d}{dm}L_{\mathrm{JS}}(m)=0.
$$

Meaning:

> The generator gets no useful direction for moving its support toward the data.

## WGAN

Wasserstein-1 distance:

$$
W_1(P,Q)
=
\sup_{\mathrm{Lip}(f)\le 1}
\left(
\mathbb{E}_{P}[f(X)]-\mathbb{E}_{Q}[f(Y)]
\right).
$$

The function $f$ is a critic, not a probabilistic classifier.

1-Lipschitz means:

$$
|f(x)-f(y)|\le |x-y|.
$$

Why WGAN helps:

- Wasserstein distance changes smoothly as distributions move closer or farther.
- It can provide useful gradients even when supports do not overlap.
- In the shifted-uniform example, $W_1(p,p_m)=|m|$, which has nonzero derivative away from 0.

But WGAN does not magically solve all GAN problems.

## CycleGAN Non-Uniqueness

Cycle consistency says:

$$
g(f(a))\approx a,
\qquad
f(g(b))\approx b.
$$

It prevents arbitrary many-to-one collapse, but it does not force a unique semantic translation.

Even with perfect adversarial losses and perfect cycle consistency, many bijections between domains may satisfy the objective.

Practice Final `PF-SQ7` tested:

> Cycle consistency reduces ambiguity but does not guarantee uniqueness.

## Score Matching Goal

For an energy-based model:

$$
p_\theta(x)=\frac{1}{Z(\theta)}\exp(-E_\theta(x)).
$$

The score is:

$$
\nabla_x\log p_\theta(x)
=
-\nabla_x E_\theta(x),
$$

because $\log Z(\theta)$ does not depend on $x$.

That is the key normalizer cancellation.

## Hyvarinen Score Matching

Original score matching wants to match:

$$
\nabla_x\log p_\theta(x)
\approx
\nabla_x\log p_{\text{data}}(x).
$$

After integration by parts, the data score disappears, and the objective depends on model derivatives with respect to $x$.

For EBMs, the required terms are:

$$
\lVert\nabla_x E_\theta(x)\rVert_2^2
$$

and

$$
\sum_{i=1}^d \partial_{x_i x_i}E_\theta(x).
$$

It does not require:

$$
\log Z(\theta)
$$

or

$$
\nabla_\theta\log Z(\theta).
$$

This is exactly `PF-SQ14`.

## Why Integration By Parts Matters

The ideal score-matching loss contains the unknown data score:

$$
\nabla_x\log p_{\text{data}}(x).
$$

Integration by parts rewrites the cross term into model-only derivatives, assuming the boundary term vanishes.

Memory:

> Score matching avoids the normalizer by differentiating in $x$, and avoids the data score by integration by parts.

## Generalized Score Matching

Generalized score matching can weight directions or regions through a matrix/function $A(x)$.

If $A(x)$ is large in rare but important regions, those regions contribute more to the objective.

This is the main idea in `PF-P4`: weighting can make the loss focus on informative rare components.

## NCE

Noise Contrastive Estimation turns density estimation into classification:

- data samples come from $p_{\text{data}}$
- noise samples come from known $q$
- train a classifier to distinguish data vs noise
- use the classifier structure to estimate the unnormalized model

Key difference from GANs:

- GAN negative distribution is learned and moving.
- NCE noise distribution is fixed and known.

## NCE Noise Choice

Noise should not be “as far from data as possible.”

If noise is too easy to distinguish:

- classification becomes trivial
- the model learns little about the fine structure of the data density
- sample efficiency can be poor

Practice Final `PF-SQ8` tested this exact false statement.

Memory:

> NCE wants informative contrast, not trivial contrast.

## Diffusion / Score-Based Sampling

Forward process:

> gradually add noise to data.

Reverse process:

> use learned scores to move from noise back toward data.

The learned score is usually:

$$
s_\theta(x,t)\approx \nabla_x\log p_t(x).
$$

The time/noise level matters.

## Predictor-Corrector Sampling

Predictor:

- numerically integrates a reverse-time SDE or probability-flow ODE
- moves across noise levels
- uses the learned score

Corrector:

- runs Langevin-style MCMC at a fixed noise level
- locally refines the sample
- uses the same learned score network

Correct answer for `PF-SQ12`:

> predictor integration step plus corrector Langevin step; no separate network and no required classifier.

## Reverse-Time SDE vs Probability-Flow ODE

Reverse-time SDE:

- stochastic
- drift plus random noise
- samples by numerical stochastic integration

Probability-flow ODE:

- deterministic
- no extra random noise
- samples by numerical ODE integration
- enables likelihood computation and inversion

`PF-SQ13` tested that probability-flow ODE is useful for:

- likelihood evaluation
- potentially faster sampling
- latent/noise inversion

So the answer was all of the above.

## Exam Traps

- Do not say GANs give tractable likelihoods by default.
- Do not call a WGAN critic a probability classifier.
- Do not forget the 1-Lipschitz constraint in WGAN.
- Do not say Wasserstein fixes every GAN problem.
- Do not say cycle consistency makes CycleGAN unique.
- Do not say score matching needs $\log Z(\theta)$.
- Do not forget the Hessian trace/divergence term in score matching.
- Do not choose NCE noise to be maximally far from data.
- Do not say predictor and corrector need separate neural networks.
- Do not say classifier guidance is required for PC sampling.

## Quick Self-Test

- Optimal GAN discriminator? $p_{\text{data}}/(p_{\text{data}}+p_G)$.
- JS support mismatch? Flat loss, zero gradient.
- WGAN support mismatch? Wasserstein distance gives directional signal.
- Score matching avoids $Z$ because $\nabla_x \log Z=0$.
- Hyvarinen terms? Gradient norm plus Hessian trace.
- NCE negative class? Fixed known noise.
- Predictor? Reverse-time integration.
- Corrector? Langevin refinement.
- Probability-flow ODE? Deterministic path useful for likelihoods, faster sampling, inversion.
