# PGM Practice Problems 6: VI, EM, and VAEs

Use with [[2026-04-20-pgm-exam-prep-section-06-vi-em-vae]], [[2026-04-20-pgm-worked-problems-section-06-vi-em-vae]], [[2026-04-20-pgm-practice-problems-section-06-vi-em-vae-answer-key]], and [[2026-04-20-pgm-memory-06-vi-em-vae]].

These are unsolved practice problems for the variational-inference unit. They ask you to manipulate the ELBO and recognize estimator/algorithm choices.

## Table of Contents

- [[#Problem 6.1]]
- [[#Problem 6.2]]
- [[#Problem 6.3]]
- [[#Problem 6.4]]

## Problem 6.1

Starting from
$$
\log p_\theta(x)=\log \int p_\theta(x,z)\,dz,
$$
introduce a variational distribution $q(z)$.

1. Derive the ELBO using Jensen's inequality.
2. State the identity relating $\log p_\theta(x)$, the ELBO, and $\mathrm{KL}(q(z)\|p_\theta(z\mid x))$.
3. Select all true statements:

A. Maximizing the ELBO is equivalent to minimizing $\mathrm{KL}(q(z)\|p_\theta(z\mid x))$ when $\theta$ is fixed.

B. The ELBO can be larger than $\log p_\theta(x)$ if $q$ is expressive enough.

C. The gap between $\log p_\theta(x)$ and the ELBO is a KL divergence.

D. The ELBO avoids needing to directly compute $p_\theta(z\mid x)$.

## Problem 6.2

Suppose
$$
p(x,z_1,z_2)=p(z_1)p(z_2)p(x\mid z_1,z_2)
$$
and you choose a mean-field approximation
$$
q(z_1,z_2)=q_1(z_1)q_2(z_2).
$$

1. What dependence is the variational family refusing to represent?
2. Write the coordinate-ascent update form for $q_1^*(z_1)$ up to proportionality.
3. Explain why mean-field can make optimization easier while also introducing bias.

## Problem 6.3

A mixture model has latent cluster assignments $z_i$ and parameters $\theta$.

Select all statements that are true about EM.

A. The E-step computes or approximates the posterior responsibilities $p_{\theta^{old}}(z_i\mid x_i)$.

B. The M-step updates $\theta$ using the expected complete-data log likelihood under the current responsibilities.

C. EM never uses inference over latent variables.

D. If exact posterior inference is unavailable, variational EM may replace the exact E-step with an approximate variational distribution.

E. The M-step changes the observed data $x_i$.

## Problem 6.4

For each scenario, choose the more natural gradient estimator: `REINFORCE / score function`, `reparameterization`, or `either`.

1. $z$ is discrete and sampled from a categorical distribution.
2. $z=\mu_\phi(x)+\sigma_\phi(x)\odot \varepsilon$, where $\varepsilon\sim \mathcal{N}(0,I)$.
3. The sampling operation is not differentiable, but you can evaluate $\nabla_\phi \log q_\phi(z)$.
4. You want lower-variance pathwise gradients for a Gaussian VAE encoder.

Then explain in 2 to 4 sentences why VAEs usually prefer reparameterization when it applies.
