# PGM Practice Problems 6 Answer Key: VI, EM, and VAEs

Use with [[2026-04-20-pgm-practice-problems-section-06-vi-em-vae]].

## Table of Contents

- [[#Solution 6.1]]
- [[#Solution 6.2]]
- [[#Solution 6.3]]
- [[#Solution 6.4]]

## Solution 6.1

Insert $q(z)$ into the marginal likelihood:
$$
\log p_\theta(x)
=
\log \int q(z)\frac{p_\theta(x,z)}{q(z)}\,dz.
$$

By Jensen's inequality,
$$
\log p_\theta(x)
\ge
\mathbb{E}_{q(z)}
\left[
\log \frac{p_\theta(x,z)}{q(z)}
\right]
=
\mathcal{L}(q).
$$

The exact identity is
$$
\log p_\theta(x)
=
\mathcal{L}(q)
+
\mathrm{KL}\left(q(z)\|p_\theta(z\mid x)\right).
$$

The true statements are A, C, and D. Statement B is false because the ELBO is a lower bound; it cannot exceed $\log p_\theta(x)$.

## Solution 6.2

The mean-field family refuses to represent posterior dependence between $z_1$ and $z_2$. Even if $p(z_1,z_2\mid x)$ is strongly correlated, the approximation forces
$$
q(z_1,z_2)=q_1(z_1)q_2(z_2).
$$

The coordinate-ascent update has the form
$$
q_1^*(z_1)
\propto
\exp\left(
\mathbb{E}_{q_2(z_2)}
\left[
\log p(x,z_1,z_2)
\right]
\right).
$$

Mean-field makes optimization easier because each coordinate update only has to optimize one factor while averaging over the others. The cost is bias: if the true posterior has dependencies the factorized family cannot express, the best variational approximation may still be systematically wrong.

## Solution 6.3

The true statements are:

- A
- B
- D

Statement C is false because EM is built around latent-variable inference in the E-step.

Statement E is false because the observed data are fixed. The M-step updates parameters, not observations.

## Solution 6.4

The natural choices are:

- Discrete categorical $z$: `REINFORCE / score function`
- $z=\mu_\phi(x)+\sigma_\phi(x)\odot\varepsilon$: `reparameterization`
- Sampling not differentiable, but $\nabla_\phi\log q_\phi(z)$ is available: `REINFORCE / score function`
- Lower-variance pathwise gradients for a Gaussian VAE encoder: `reparameterization`

REINFORCE is very general because it does not require differentiating through the sampled value, but it often has high variance. Reparameterization rewrites randomness as fixed noise passed through a differentiable function, allowing pathwise gradients. VAEs usually prefer it for Gaussian latent variables because the resulting gradients are often much lower variance.
