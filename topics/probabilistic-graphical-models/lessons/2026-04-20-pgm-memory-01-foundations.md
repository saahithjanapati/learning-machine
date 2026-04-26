# PGM Memory Sheet 1: Foundations

Use with [[2026-04-20-pgm-exam-prep-section-01-foundations]].

This sheet is tuned to the practice problems, Midterm 1, and Practice Final maps. The core exam skill is not memorizing slogans; it is quickly identifying what kind of object or task the question is asking about.

## Assessed Sources

- `HW1-Q3`: KL is not a metric; covariance vs mutual information; Pinsker-style reasoning.
- `HW4-Q3`: metric properties, KL, and IPM-style distances.
- `PF-SQ1`: Gibbs variational principle and relaxation language.
- `PF-SQ4`: `KL(q || p)` vs `KL(p || q)`.
- `PF-SQ6`: VI vs MCMC and the ELBO.
- `PF-SQ14`: score matching derivative requirements.
- `WP1.1-WP1.5`: full joint size, graph vs distribution, marginal vs conditional, compact representation vs easy inference, representation/inference/learning.

## Core Objects

- **Joint distribution:** the full probability law over all variables,
  $$
  p(x_1,\dots,x_n).
  $$
- **Graphical model:** a structured way to represent a joint distribution using local pieces and conditional-independence assumptions.
- **Graph:** structure only. It is not a probability distribution until variables, factors/conditionals, and parameters are specified.
- **Marginal:** remove variables by summing or integrating them out.
- **Conditional:** fix variables as observed and renormalize.

## Three Course Tasks

- **Representation:** write the model compactly, for example with a DAG or UGM factorization.
- **Inference:** compute something from a fixed model, such as a marginal, conditional, MAP state, partition function, or posterior.
- **Learning:** estimate unknown parameters or functions from data.
- **Sampling:** produce approximate samples from a target distribution when exact inference is hard.

## Exponential Scaling

For `n` binary variables, the full joint table has
$$
2^n
$$
entries.

The lesson: graphical models fight exponential blowup in representation, but do not automatically remove exponential cost from inference.

Memory phrase:

> Compact model does not imply compact inference.

## Metric And Divergence Facts

A metric-like distance should usually satisfy:

- nonnegativity
- identity of indiscernibles
- symmetry
- triangle inequality

KL divergence:

$$
\mathrm{KL}(p\|q)=\sum_x p(x)\log\frac{p(x)}{q(x)}
$$

Important facts:

- KL is nonnegative.
- KL is zero iff $p=q$.
- KL is not symmetric.
- KL does not satisfy the triangle inequality.
- Therefore KL is not a metric.

For exam questions, if asked “is KL a metric?”, answer **no**, and immediately mention asymmetry and triangle inequality.

## Pinsker / Total Variation Pattern

Total variation:

$$
\mathrm{TV}(p,q)=\frac{1}{2}\sum_x |p(x)-q(x)|.
$$

Pinsker-style memory:

$$
\mathrm{TV}(p,q)^2 \le \frac{1}{2}\mathrm{KL}(p\|q).
$$

Use case: if KL is small, then expectations of bounded functions under $p$ and $q$ are close. This is the bridge from divergence control to statements about covariances or probabilities.

## KL Direction Memory

For approximating a complicated target $p$ with a simpler $q$:

- $\mathrm{KL}(q\|p)$ is often **mode-seeking**.
- $\mathrm{KL}(p\|q)$ is often **mass-covering**.

Why:

- $\mathrm{KL}(q\|p)$ heavily punishes putting $q$-mass where $p$ is tiny.
- $\mathrm{KL}(p\|q)$ heavily punishes failing to put $q$-mass where $p$ has mass.

This is directly tested by `PF-SQ4`.

## Gibbs Variational Principle

The Gibbs variational principle turns hard log-partition / log-sum-exp quantities into an optimization over distributions.

Memory form:

$$
\log \sum_x \exp(f(x))
=
\max_q
\left\{
\mathbb{E}_q[f(X)] + H(q)
\right\}.
$$

Approximation idea:

- optimizing over all $q$ is exact but hard
- restricting $q$ to a simpler family gives a relaxation or approximation
- mean field is an inner restriction on possible distributions

## Exam Traps

- Do not say the graph is the distribution.
- Do not say compact factorization means exact inference is easy.
- Do not call KL a metric.
- Do not mix up marginalizing with conditioning.
- Do not mix up $\mathrm{KL}(q\|p)$ and $\mathrm{KL}(p\|q)$.
- Do not treat “representation,” “inference,” and “learning” as interchangeable.

## Quick Self-Test

- If a question asks for $p(X)$ from $p(X,Y)$, you are marginalizing.
- If a question asks for $p(X\mid Y=y)$, you are conditioning.
- If a question asks for a factorization, it is representation.
- If a question asks for a posterior/marginal/MAP/partition function, it is inference.
- If a question asks for parameters from data, it is learning.
- If a question asks whether KL is a metric, say no and cite asymmetry.
