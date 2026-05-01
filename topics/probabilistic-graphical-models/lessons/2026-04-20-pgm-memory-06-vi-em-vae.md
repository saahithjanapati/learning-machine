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

Exam-level distinction:

- MCMC tries to be asymptotically exact: if the chain is correct and run long enough, samples come from the target.
- VI tries to be fast and deterministic-ish: it solves an optimization problem, but the answer is only as good as the variational family.
- MCMC output is a set of correlated samples.
- VI output is an explicit approximate distribution $q$.

If asked "which one gives a lower bound?", the answer is VI. The ELBO is a variational objective, not an MCMC objective.

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

Symbol meanings:

- $x$ is the observed data.
- $z$ is the latent or hidden variable.
- $\theta$ is the model parameter.
- $p_\theta(x,z)$ is the model's joint distribution over data and latent variables.
- $p_\theta(x)$ is the evidence or marginal likelihood of the observed data.
- $p_\theta(z\mid x)$ is the true posterior under the model.
- $q(z)$ is the variational approximation to the true posterior.
- $\mathcal{L}(q,\theta)$ is the ELBO, the objective we can usually optimize.

Plain English:

$$
\text{log evidence}
=
\text{ELBO}
+
\text{approximation error}.
$$

The approximation error is:

$$
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

That second form comes from splitting the joint:

$$
p_\theta(x,z)=p_\theta(x\mid z)p_\theta(z).
$$

So:

$$
\mathbb{E}_q[\log p_\theta(x,z)]
-
\mathbb{E}_q[\log q(z)]
=
\mathbb{E}_q[\log p_\theta(x\mid z)]
-
\mathbb{E}_q\left[\log\frac{q(z)}{p_\theta(z)}\right].
$$

The last expectation is the KL term.

### Jensen Derivation To Remember

Start from:

$$
\log p_\theta(x)
=
\log \int p_\theta(x,z)\,dz.
$$

Insert any distribution $q(z)$ whose support covers the relevant posterior mass:

$$
\log p_\theta(x)
=
\log \int q(z)\frac{p_\theta(x,z)}{q(z)}\,dz.
$$

This is:

$$
\log
\mathbb{E}_{q(z)}
\left[
\frac{p_\theta(x,z)}{q(z)}
\right].
$$

Since $\log$ is concave, Jensen gives:

$$
\log
\mathbb{E}_q
\left[
\frac{p_\theta(x,z)}{q(z)}
\right]
\ge
\mathbb{E}_q
\left[
\log \frac{p_\theta(x,z)}{q(z)}
\right].
$$

That right-hand side is the ELBO.

Memory:

> Insert $q$, move log inside by Jensen, get expected log joint minus expected log $q$.

## Why Maximizing ELBO Helps

For fixed $x$ and $\theta$, $\log p_\theta(x)$ is constant with respect to $q$.

Therefore increasing the ELBO decreases:

$$
\mathrm{KL}\bigl(q(z)\|p_\theta(z\mid x)\bigr).
$$

Memory:

> ELBO optimization is posterior approximation plus model learning.

More precise:

- If $\theta$ is fixed, maximizing the ELBO only improves $q$ as an approximation to $p_\theta(z\mid x)$.
- If $q$ is fixed, maximizing the ELBO improves the model parameters $\theta$ under that approximate posterior.
- In full variational learning, we often alternate or jointly optimize both.

The gap is:

$$
\log p_\theta(x)-\mathcal{L}(q,\theta)
=
\mathrm{KL}\bigl(q(z)\|p_\theta(z\mid x)\bigr).
$$

So the ELBO is tight exactly when:

$$
q(z)=p_\theta(z\mid x).
$$

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

The key assumption is not "the real latent variables are independent." The assumption is:

> our approximation pretends they are independent because that makes optimization tractable.

That is why mean field can be useful even when it is wrong. It is a computational compromise.

Example:

$$
q(z_1,z_2,z_3)=q_1(z_1)q_2(z_2)q_3(z_3).
$$

This cannot represent posterior correlations such as "if $z_1$ is high, $z_2$ is likely low." It can only set each factor's marginal shape separately.

In exam language:

- true posterior: may have dependencies
- mean-field posterior: forced product form
- result: tractable updates, biased approximation

## KL Direction

$\mathrm{KL}(q\|p)$:

- mode-seeking
- avoids placing $q$ mass where $p$ is tiny
- may ignore some modes

$\mathrm{KL}(p\|q)$:

- mass-covering
- penalizes missing regions where $p$ has mass

Why:

$$
\mathrm{KL}(q\|p)
=
\mathbb{E}_q\left[\log\frac{q(z)}{p(z)}\right].
$$

This expectation is taken under $q$. So it strongly cares about places where $q$ puts mass. If $q$ puts mass where $p$ is tiny, the ratio $q/p$ is huge and the penalty is large. But if $p$ has a mode where $q$ puts almost no mass, that region contributes little because the expectation is not taken under $p$.

For the reverse direction:

$$
\mathrm{KL}(p\|q)
=
\mathbb{E}_p\left[\log\frac{p(z)}{q(z)}\right].
$$

Now the expectation is under $p$. If $p$ has mass somewhere and $q$ misses it, the penalty is large.

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

Why the update has this form:

When optimizing $q_i$, every term in the ELBO that does not involve $z_i$ is constant with respect to $q_i$. The only relevant part is the expected log joint as a function of $z_i$, averaged over the other factors.

Equivalent update:

$$
q_i^*(z_i)
\propto
\exp\left(
\mathbb{E}_{q_{-i}}[\log p(x,z)]
\right).
$$

Mini-example:

If

$$
p(x,z_1,z_2)=p(z_1)p(z_2)p(x\mid z_1,z_2)
$$

and

$$
q(z_1,z_2)=q_1(z_1)q_2(z_2),
$$

then

$$
\log q_1^*(z_1)
=
\mathbb{E}_{q_2}
\left[
\log p(z_1)+\log p(z_2)+\log p(x\mid z_1,z_2)
\right]
+
\text{constant}.
$$

The $\log p(z_2)$ term does not depend on $z_1$, so it gets absorbed into the constant:

$$
\log q_1^*(z_1)
=
\log p(z_1)
+
\mathbb{E}_{q_2}
\left[
\log p(x\mid z_1,z_2)
\right]
+
\text{constant}.
$$

That is the actual mechanical procedure in CAVI problems.

## EM

EM alternates:

- **E-step:** compute exact posterior over latent variables using current parameters
- **M-step:** maximize expected complete-data log-likelihood

Classical EM assumes the E-step is tractable.

More detailed version:

The E-step computes:

$$
p_{\theta^{old}}(z\mid x).
$$

Then it forms the expected complete-data objective:

$$
Q(\theta,\theta^{old})
=
\mathbb{E}_{p_{\theta^{old}}(z\mid x)}
[
\log p_\theta(x,z)
].
$$

The M-step updates:

$$
\theta^{new}
=
\arg\max_\theta Q(\theta,\theta^{old}).
$$

Memory:

> E-step fills in latent-variable uncertainty; M-step treats that soft completion as the objective for parameters.

For mixture models, the E-step computes responsibilities. The M-step updates mixture weights, means, covariances, or other parameters using those responsibilities as soft assignments.

## Variational EM

Variational EM replaces the exact E-step with a variational approximation.

Alternation:

- update $q$ to improve approximate posterior fit
- update $\theta$ to improve model parameters

Memory:

> EM uses exact posterior if possible; variational EM uses approximate posterior when exact inference is hard.

More formal picture:

Instead of using the exact posterior $p_\theta(z\mid x)$, choose $q(z)$ from a tractable family and optimize:

$$
\mathcal{L}(q,\theta)
=
\mathbb{E}_q[\log p_\theta(x,z)]
-
\mathbb{E}_q[\log q(z)].
$$

Variational E-step:

$$
q^{new}
\approx
\arg\max_q \mathcal{L}(q,\theta^{old}).
$$

Variational M-step:

$$
\theta^{new}
=
\arg\max_\theta \mathcal{L}(q^{new},\theta).
$$

Important:

- EM is a special case where the variational family is rich enough to contain the exact posterior.
- Variational EM is used when the exact posterior is too expensive or unavailable.
- In LDA/HMM-style homework, the hard part is often writing the factorized $q$ and deriving the CAVI updates.

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

### VAE Objects

Prior:

$$
p(z)
$$

Usually simple, such as $\mathcal{N}(0,I)$.

Decoder / generative model:

$$
p_\theta(x\mid z)
$$

This says how to generate data from a latent code.

Encoder / inference model:

$$
q_\phi(z\mid x)
$$

This approximates the intractable posterior over latent variables after seeing $x$.

### What Training Is Doing

For each data point $x$:

1. The encoder produces an approximate posterior over $z$.
2. A latent $z$ is sampled from that approximate posterior.
3. The decoder tries to assign high likelihood to reconstructing/explaining $x$ from $z$.
4. The KL term prevents the encoder distribution from drifting too far away from the prior.

Why the KL matters:

- If $q_\phi(z\mid x)$ is not kept near $p(z)$, then samples from the prior at generation time may land in latent regions the decoder never learned to use.
- The KL term makes the latent space more organized for generation.

Exam trap:

> A VAE is not just an autoencoder with noise. It is a latent-variable probabilistic model trained by an ELBO.

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

Why the identity works:

Start with:

$$
\nabla_\phi
\mathbb{E}_{q_\phi(z)}[f(z)]
=
\nabla_\phi
\int q_\phi(z)f(z)\,dz.
$$

Move the gradient inside:

$$
=
\int f(z)\nabla_\phi q_\phi(z)\,dz.
$$

Use:

$$
\nabla_\phi q_\phi(z)
=
q_\phi(z)\nabla_\phi\log q_\phi(z).
$$

Then:

$$
=
\mathbb{E}_{q_\phi(z)}
[
f(z)\nabla_\phi\log q_\phi(z)
].
$$

Why high variance:

The estimator multiplies the sampled objective value $f(z)$ by a score term. If $f(z)$ varies a lot across samples, the gradient estimates can be noisy.

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

Classic Gaussian VAE example:

$$
z\sim \mathcal{N}(\mu_\phi(x),\operatorname{diag}(\sigma_\phi^2(x))).
$$

Rewrite as:

$$
\epsilon\sim \mathcal{N}(0,I),
\qquad
z=\mu_\phi(x)+\sigma_\phi(x)\odot\epsilon.
$$

Now the randomness is in $\epsilon$, which does not depend on $\phi$. The dependence on $\phi$ is inside a differentiable function, so ordinary backpropagation can flow through $z$.

Why lower variance:

- REINFORCE asks "how did changing $\phi$ change the probability of this sampled $z$?"
- reparameterization asks "how did changing $\phi$ smoothly move this sampled $z$?"

The second signal is usually more direct for continuous latent variables.

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
- Do not say mean field assumes the real variables are independent; it assumes the approximate posterior factorizes.
- Do not reverse the KL direction behavior.
- Do not say EM and VI are the same algorithm.
- Do not say variational EM computes the exact posterior in the E-step.
- Do not say a VAE learns only a decoder; the encoder is the amortized inference model.
- Do not say the VAE KL term is optional if you want good prior samples.
- Do not use reparameterization for ordinary discrete categorical variables without extra tricks.
- Do not use REINFORCE if the problem says $\nabla_\phi\log q_\phi$ is unavailable.
- Do not say REINFORCE is biased just because it is high variance.
- Do not say reparameterization is always available; it needs a differentiable path from parameter-free noise.

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
