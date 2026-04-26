# PGM Memory Sheet 6: Variational Inference, EM, and VAEs

Use with [[2026-04-20-pgm-exam-prep-section-06-vi-em-vae]].

This section is exam-heavy. The recurring skills are deriving the ELBO identity, recognizing KL direction behavior, understanding mean-field/CAVI, distinguishing EM from variational EM, and choosing REINFORCE vs reparameterization.

## Assessed Sources

- `HW3-Q1`: mean-field Ising objective and non-concavity.
- `HW3-Q4`: Bayesian HMM mean-field CAVI updates.
- `HW3-Q5`: REINFORCE vs reparameterization variance.
- `HW3-PROG`: variational inference / variational EM for LDA.
- `PF-SQ1`: Gibbs variational principle and inner vs outer relaxations.
- `PF-SQ4`: `KL(q || p)` vs `KL(p || q)`.
- `PF-SQ6`: VI vs MCMC and ELBO.
- `PF-SQ9`: direct applicability of REINFORCE vs reparameterization.
- `WP6.1-WP6.9`: MCMC vs VI, ELBO, mean field, mode-seeking, EM, VAE, gradient estimators, VAE terms.

## MCMC vs VI

MCMC:

> approximate a target distribution by samples from a Markov chain.

VI:

> approximate a target distribution by choosing the best distribution inside a simpler family.

Memory:

- MCMC is sampling-based.
- VI is optimization-based.

This is directly tested in `PF-SQ6`.

## ELBO Identity

For latent variable $z$:

$$
\log p_\theta(x)
=
\mathcal{L}(q,\theta)
+
\mathrm{KL}\bigl(q(z)\|p_\theta(z\mid x)\bigr).
$$

Since KL is nonnegative:

$$
\mathcal{L}(q,\theta)\le \log p_\theta(x).
$$

The ELBO is:

$$
\mathcal{L}(q,\theta)
=
\mathbb{E}_q[\log p_\theta(x,z)]
-
\mathbb{E}_q[\log q(z)].
$$

Equivalent form:

$$
\mathcal{L}(q,\theta)
=
\mathbb{E}_q[\log p_\theta(x\mid z)]
-
\mathrm{KL}(q(z)\|p_\theta(z)).
$$

## Why Maximizing ELBO Helps

For fixed $x$ and $\theta$, $\log p_\theta(x)$ is constant with respect to $q$.

Therefore increasing the ELBO decreases:

$$
\mathrm{KL}\bigl(q(z)\|p_\theta(z\mid x)\bigr).
$$

Memory:

> ELBO optimization is posterior approximation plus model learning.

## Mean Field

Mean-field family:

$$
q(z)=\prod_i q_i(z_i).
$$

Benefit:

- computationally simpler
- turns a hard global distribution problem into updates over factors

Cost:

- loses posterior dependencies
- can underestimate uncertainty
- can choose one mode when the true posterior is multimodal

## KL Direction

$\mathrm{KL}(q\|p)$:

- mode-seeking
- avoids placing $q$ mass where $p$ is tiny
- may ignore some modes

$\mathrm{KL}(p\|q)$:

- mass-covering
- penalizes missing regions where $p$ has mass

This distinction is central to `PF-SQ4`.

## CAVI Memory

Coordinate-ascent VI updates one factor at a time:

$$
\log q_i^*(z_i)
=
\mathbb{E}_{q_{-i}}[\log p(x,z)]
+\text{constant}.
$$

Use this template for HMM/LDA-style questions:

- isolate terms involving the variable or factor being updated
- take expectation over all other variational factors
- exponentiate and normalize

## EM

EM alternates:

- **E-step:** compute exact posterior over latent variables using current parameters
- **M-step:** maximize expected complete-data log-likelihood

Classical EM assumes the E-step is tractable.

## Variational EM

Variational EM replaces the exact E-step with a variational approximation.

Alternation:

- update $q$ to improve approximate posterior fit
- update $\theta$ to improve model parameters

Memory:

> EM uses exact posterior if possible; variational EM uses approximate posterior when exact inference is hard.

## VAE

A VAE combines:

- latent-variable generative model $p_\theta(x,z)$
- encoder / inference network $q_\phi(z\mid x)$
- ELBO training
- amortized inference

Amortized inference means:

> Instead of optimizing a new $q$ for every datapoint, learn a network that outputs approximate posterior parameters.

Typical VAE ELBO:

$$
\mathbb{E}_{q_\phi(z\mid x)}[\log p_\theta(x\mid z)]
-
\mathrm{KL}\bigl(q_\phi(z\mid x)\|p(z)\bigr).
$$

Interpretation:

- reconstruction term rewards explaining $x$ from $z$
- KL term regularizes approximate posterior toward prior

## REINFORCE

Score-function identity:

$$
\nabla_\phi \mathbb{E}_{q_\phi(z)}[f(z)]
=
\mathbb{E}_{q_\phi(z)}[f(z)\nabla_\phi\log q_\phi(z)].
$$

Use REINFORCE when:

- $z$ is discrete
- $z$ is not differentiably reparameterizable
- the decoder or ELBO integrand is black-box / non-differentiable in $z$
- you can compute $\nabla_\phi\log q_\phi(z\mid x)$

Downside:

- unbiased but often high variance

## Reparameterization Trick

Use when:

$$
z=g_\phi(\epsilon,x),
\qquad
\epsilon\sim p(\epsilon)
$$

where $\epsilon$ is fixed, parameter-free noise and $g_\phi$ is differentiable.

Then gradients flow through:

$$
z=g_\phi(\epsilon,x).
$$

Use reparameterization when:

- $z$ is continuous
- a differentiable pathwise representation exists
- you can backpropagate through the ELBO integrand

Benefit:

- usually lower variance than REINFORCE

## PF-SQ9 Decision Rule

- Discrete categorical latent variable: REINFORCE.
- Continuous differentiable $z=g_\phi(\epsilon,x)$: reparameterization.
- Black-box/non-differentiable decoder with available $\nabla_\phi\log q_\phi$: REINFORCE.

Memory:

> Discrete or black-box: REINFORCE. Continuous differentiable path: reparameterization.

## Exam Traps

- Do not say the ELBO equals log evidence unless KL to the true posterior is zero.
- Do not forget the entropy term in the ELBO.
- Do not say mean field is always accurate; it breaks dependencies.
- Do not reverse the KL direction behavior.
- Do not say EM and VI are the same algorithm.
- Do not use reparameterization for ordinary discrete categorical variables without extra tricks.
- Do not use REINFORCE if the problem says $\nabla_\phi\log q_\phi$ is unavailable.

## Quick Self-Test

- ELBO lower bound? Use nonnegative KL.
- Mean field update? Expected log joint over all other factors.
- `KL(q || p)`? Mode-seeking.
- `KL(p || q)`? Mass-covering.
- Exact posterior E-step? EM.
- Approximate posterior E-step? Variational EM.
- Encoder network for posterior parameters? VAE.
- Discrete latent? REINFORCE.
- Differentiable continuous latent? Reparameterization.
