# PGM Practice Problems 3: Exact Inference and Belief Propagation

Use with [[2026-04-20-pgm-exam-prep-section-03-inference-bp]], [[2026-04-20-pgm-worked-problems-section-03-inference-bp]], [[2026-04-20-pgm-practice-problems-section-03-inference-bp-answer-key]], and [[2026-04-20-pgm-memory-03-inference-bp]].

These are unsolved practice problems aimed at exact-inference and belief-propagation exam intuition.

## Table of Contents

- [[#Problem 3.1]]
- [[#Problem 3.2]]
- [[#Problem 3.3]]
- [[#Problem 3.4]]

## Problem 3.1

Consider the factorization
$$
p(a,b,c,d,e)=\phi_1(a,b)\phi_2(b,c)\phi_3(c,d)\phi_4(c,e).
$$

You want the unnormalized marginal over $E$.

1. Write the variable-elimination expression that eliminates $A,B,C,D$.
2. For the elimination order $A,D,B,C$, list the variables contained in each newly created intermediate factor.
3. What is the largest intermediate scope size in that order?

## Problem 3.2

For the same factorization as Problem 3.1, compare these two elimination orders for computing the marginal over $E$:

- Order 1: $A,D,B,C$
- Order 2: $C,A,B,D$

Select all statements that are true.

A. Both orders compute the same exact marginal if implemented correctly.

B. Order 2 creates an intermediate factor over $\{A,B,D,E\}$ when eliminating $C$.

C. The runtime is controlled by the largest intermediate factor, not just by the number of variables eliminated.

D. If two orders eliminate the same variables, they must have the same runtime.

## Problem 3.3

Consider a factor graph with variable nodes $X,Y,Z$ and factors $f(X,Y)$ and $g(Y,Z)$.

1. Write the message from factor $f$ to variable $Y$ in terms of incoming messages.
2. Write the message from variable $Y$ to factor $g$.
3. In one sentence, explain why a message from a node should not immediately reuse the recipient's previous message back to it.

## Problem 3.4

Select all statements that are true about belief propagation.

A. On a tree-structured factor graph, sum-product BP gives exact marginals after enough messages have passed.

B. On a graph with cycles, the same local update equations can still be run.

C. Loopy BP always converges to exact marginals.

D. If loopy BP converges, the fixed point can still be a useful approximation.

E. BP messages can be understood as summaries of information flowing across graph edges.
