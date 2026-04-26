# PGM Practice Problems 5: MCMC

Use with [[2026-04-20-pgm-exam-prep-section-05-mcmc]], [[2026-04-20-pgm-worked-problems-section-05-mcmc]], [[2026-04-20-pgm-practice-problems-section-05-mcmc-answer-key]], and [[2026-04-20-pgm-memory-05-mcmc]].

These are unsolved practice problems for the MCMC unit. They emphasize transition matrices, acceptance ratios, local conditionals, and mixing traps.

## Table of Contents

- [[#Problem 5.1]]
- [[#Problem 5.2]]
- [[#Problem 5.3]]
- [[#Problem 5.4]]

## Problem 5.1

Consider the Markov chain on states $\{0,1\}$ with transition matrix
$$
P=
\begin{pmatrix}
0.9 & 0.1\\
0.2 & 0.8
\end{pmatrix}.
$$

1. Solve for the stationary distribution $\pi$.
2. Check whether detailed balance holds.
3. Does detailed balance being true or false by itself tell you whether the chain mixes quickly? Explain briefly.

## Problem 5.2

You want to sample from an unnormalized target $\tilde{\pi}$ on states $\{A,B,C\}$ with
$$
\tilde{\pi}(A)=1,\qquad \tilde{\pi}(B)=4,\qquad \tilde{\pi}(C)=2.
$$

The proposal probabilities include
$$
q(B\mid A)=0.6,\qquad q(A\mid B)=0.2.
$$

1. Compute the Metropolis-Hastings acceptance probability for a proposal from $A$ to $B$.
2. Compute the acceptance probability for a proposal from $B$ to $A$.
3. Explain why the normalizing constant of $\pi$ is not needed.

## Problem 5.3

Consider a binary pairwise Markov random field
$$
p(x_1,x_2,x_3)\propto
\psi_{12}(x_1,x_2)\psi_{23}(x_2,x_3),
$$
where each $x_i\in\{0,1\}$.

You are doing a Gibbs update of $X_2$ while holding $X_1=a$ and $X_3=c$ fixed.

1. Write an expression proportional to $p(X_2=x \mid X_1=a,X_3=c)$.
2. Which factors can be ignored for this update, if any?
3. Explain why this is a local computation.

## Problem 5.4

Select all statements that are true.

A. A Markov chain can have the correct stationary distribution but still be practically bad if it mixes slowly.

B. Multimodality can cause slow mixing because a local proposal may spend a long time in one mode before crossing to another.

C. Increasing temperature can flatten an energy landscape and sometimes help movement between modes.

D. If a proposal is accepted with probability $1$ for every move, the chain must be sampling from the desired target distribution.

E. Conductance is one way to formalize whether probability mass has narrow bottlenecks between regions.
