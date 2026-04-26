# PGM Practice Problems 2: Directed and Undirected Models

Use with [[2026-04-20-pgm-exam-prep-section-02-directed-undirected]], [[2026-04-20-pgm-worked-problems-section-02-directed-undirected]], [[2026-04-20-pgm-practice-problems-section-02-directed-undirected-answer-key]], and [[2026-04-20-pgm-memory-02-directed-undirected]].

These are unsolved practice problems. They emphasize exam-style graph reading, factorization, separation, and normalization.

## Table of Contents

- [[#Problem 2.1]]
- [[#Problem 2.2]]
- [[#Problem 2.3]]
- [[#Problem 2.4]]

## Problem 2.1

Suppose the directed graph is
$$
A \to B,\qquad A \to C,\qquad B \to D,\qquad C \to D,\qquad D \to E.
$$

Answer each part.

1. Write the Bayesian-network factorization of $p(a,b,c,d,e)$.
2. What is the Markov blanket of $D$?
3. Select all conditional-independence statements implied by d-separation:

A. $B \perp C \mid A$

B. $B \perp C \mid D$

C. $E \perp A \mid D$

D. $A \perp E$

## Problem 2.2

Suppose the undirected graph has edges
$$
(A,B),\ (A,C),\ (B,C),\ (C,D),\ (D,E).
$$

Answer each part.

1. List the maximal cliques.
2. Write a valid clique-based factorization.
3. If each variable is binary, what is the size of the largest clique table?
4. Explain why this undirected factorization needs a global normalizing constant.

## Problem 2.3

Select all statements that are true.

A. A conditional probability table $p(x_i \mid x_{\mathrm{pa}(i)})$ is normalized over $x_i$ for every fixed parent assignment.

B. An undirected potential $\psi_C(x_C)$ must sum to $1$ over $x_C$.

C. A potential can be interpreted as a compatibility score before global normalization.

D. In a Bayesian network, multiplying all local CPTs gives a normalized joint distribution.

E. In an undirected model, the partition function can usually be ignored when computing exact probabilities.

## Problem 2.4

Consider an undirected model on two binary variables:
$$
p(x_1,x_2)=\frac{1}{Z}\psi_{12}(x_1,x_2),
$$
where
$$
\psi_{12}(0,0)=4,\quad
\psi_{12}(0,1)=1,\quad
\psi_{12}(1,0)=1,\quad
\psi_{12}(1,1)=2.
$$

1. Compute $Z$.
2. Compute $p(X_1=0,X_2=0)$.
3. Compute $p(X_1=1)$.
4. In one sentence, say why the same operation becomes much harder in a large undirected model.
