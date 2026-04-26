# PGM Practice Problems 1: Foundations

Use with [[2026-04-20-pgm-exam-prep-section-01-foundations]], [[2026-04-20-pgm-worked-problems-section-01-foundations]], [[2026-04-20-pgm-practice-problems-section-01-foundations-answer-key]], and [[2026-04-20-pgm-memory-01-foundations]].

These are unsolved practice problems. They are written to feel closer to exam prompts: some computation, some short-answer reasoning, and some select-all conceptual traps.

## Table of Contents

- [[#Problem 1.1]]
- [[#Problem 1.2]]
- [[#Problem 1.3]]
- [[#Problem 1.4]]

## Problem 1.1

Suppose $X_1,\dots,X_8$ are ternary random variables, so each variable takes $3$ possible values.

You are considering two ways to represent a model:

- Model A: a completely unrestricted full joint table over all eight variables.
- Model B: a directed chain
  $$
  X_1 \to X_2 \to X_3 \to \cdots \to X_8.
  $$

Assume each local conditional table in Model B is fully tabular.

1. How many raw joint assignments does Model A need to store before accounting for the sum-to-one constraint?
2. How many independent parameters does Model A have?
3. How many independent parameters does Model B have?
4. Does Model B automatically make every inference query cheap? Answer `yes` or `no` and give one sentence.

## Problem 1.2

Select all statements that are true.

A. A graph by itself usually specifies conditional-independence structure, not all numerical probabilities.

B. If a joint distribution factorizes according to a graph, every marginal query can be computed in time linear in the number of variables.

C. Learning usually means estimating unknown model parameters or functions from data.

D. Sampling can be useful when exact inference is too expensive.

E. Inference asks questions such as "what is $p(x_A \mid x_B)$ under this model?"

## Problem 1.3

You are given the factorization
$$
p(a,b,c,d)=p(a)p(b \mid a)p(c \mid a)p(d \mid b,c).
$$

Answer each part.

1. Draw or describe the directed graph.
2. Is the statement $B \perp C \mid A$ suggested by this factorization? Answer `yes` or `no`.
3. Is the statement $B \perp C$ suggested by this factorization? Answer `yes` or `no`.
4. In one sentence, explain why the factorization is not the same thing as the full joint table.

## Problem 1.4

Consider the pairwise undirected chain
$$
X_1 - X_2 - X_3 - X_4 - X_5
$$
and the pairwise undirected complete graph on the same five variables.

Assume all variables are binary.

1. Which graph has the more compact pairwise representation?
2. Which graph is more likely to create large intermediate factors during exact variable elimination?
3. Explain in 3 to 5 sentences why compact representation and cheap exact inference are related but not identical ideas.
