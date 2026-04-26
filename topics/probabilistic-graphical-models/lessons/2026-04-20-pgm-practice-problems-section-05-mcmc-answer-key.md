# PGM Practice Problems 5 Answer Key: MCMC

Use with [[2026-04-20-pgm-practice-problems-section-05-mcmc]].

## Table of Contents

- [[#Solution 5.1]]
- [[#Solution 5.2]]
- [[#Solution 5.3]]
- [[#Solution 5.4]]

## Solution 5.1

Let $\pi=(\pi_0,\pi_1)$. Stationarity requires
$$
\pi=\pi P
$$
and $\pi_0+\pi_1=1$. The flow equations give
$$
0.1\pi_0=0.2\pi_1,
$$
so $\pi_0=2\pi_1$. Therefore
$$
\pi=\left(\frac{2}{3},\frac{1}{3}\right).
$$

Detailed balance holds because
$$
\pi_0P(0,1)
=
\frac{2}{3}\cdot 0.1
=
\frac{1}{15}
$$
and
$$
\pi_1P(1,0)
=
\frac{1}{3}\cdot 0.2
=
\frac{1}{15}.
$$

Detailed balance helps prove stationarity, but it does not by itself tell you that the chain mixes quickly. Mixing speed depends on how fast distributions from different starting states converge to $\pi$.

## Solution 5.2

The Metropolis-Hastings acceptance probability is
$$
\alpha(x,x')
=
\min\left(1,\frac{\pi(x')q(x \mid x')}{\pi(x)q(x' \mid x)}\right).
$$

Because the normalizing constant cancels, we can use $\tilde{\pi}$ instead of normalized $\pi$.

For $A\to B$:
$$
\alpha(A,B)
=
\min\left(1,\frac{\tilde{\pi}(B)q(A\mid B)}{\tilde{\pi}(A)q(B\mid A)}\right)
=
\min\left(1,\frac{4\cdot 0.2}{1\cdot 0.6}\right)
=1.
$$

For $B\to A$:
$$
\alpha(B,A)
=
\min\left(1,\frac{\tilde{\pi}(A)q(B\mid A)}{\tilde{\pi}(B)q(A\mid B)}\right)
=
\min\left(1,\frac{1\cdot 0.6}{4\cdot 0.2}\right)
=
\frac{3}{4}.
$$

## Solution 5.3

The Gibbs conditional satisfies
$$
p(X_2=x\mid X_1=a,X_3=c)
\propto
\psi_{12}(a,x)\psi_{23}(x,c).
$$

There are no other factors in this model, so nothing else matters. More generally, for a Gibbs update you only need factors that touch the variable being updated; factors not involving that variable cancel out during normalization.

This is local because $X_2$ only interacts with its graph neighbors $X_1$ and $X_3$.

## Solution 5.4

The true statements are:

- A
- B
- C
- E

Statement D is false. Always accepting every proposed move only samples from the desired target if the proposal dynamics themselves preserve that target. Acceptance probability $1$ alone does not guarantee correctness.
