# PGM Practice Problems 3 Answer Key: Exact Inference and Belief Propagation

Use with [[2026-04-20-pgm-practice-problems-section-03-inference-bp]].

## Table of Contents

- [[#Solution 3.1]]
- [[#Solution 3.2]]
- [[#Solution 3.3]]
- [[#Solution 3.4]]

## Solution 3.1

An elimination expression for the unnormalized marginal over $E$ is
$$
\tilde{p}(e)
=
\sum_a\sum_b\sum_c\sum_d
\phi_1(a,b)\phi_2(b,c)\phi_3(c,d)\phi_4(c,e).
$$

For order $A,D,B,C$:

- Eliminate $A$: combine $\phi_1(A,B)$ and sum out $A$, creating a factor over $\{B\}$.
- Eliminate $D$: combine $\phi_3(C,D)$ and sum out $D$, creating a factor over $\{C\}$.
- Eliminate $B$: combine the $\{B\}$ factor with $\phi_2(B,C)$ and sum out $B$, creating a factor over $\{C\}$.
- Eliminate $C$: combine all remaining $C$-dependent factors with $\phi_4(C,E)$ and sum out $C$, creating a factor over $\{E\}$.

The largest factor scope involved during multiplication has size $2$ in this order, such as $\{A,B\}$, $\{C,D\}$, $\{B,C\}$, or $\{C,E\}$. The newly created post-summation intermediate factors have scope size $1$.

## Solution 3.2

The true statements are A and C.

Statement A is true because variable elimination is exact regardless of order if all required sums/products are done correctly.

Statement B is false. Eliminating $C$ first combines $\phi_2(B,C)$, $\phi_3(C,D)$, and $\phi_4(C,E)$, which creates a factor over $\{B,D,E\}$, not $\{A,B,D,E\}$.

Statement C is true. The largest intermediate factor is the main driver of runtime and memory.

Statement D is false. Two orders can eliminate the same variables but create very different intermediate scopes.

## Solution 3.3

The factor-to-variable message is
$$
m_{f\to Y}(y)
=
\sum_x f(x,y)m_{X\to f}(x).
$$

The variable-to-factor message from $Y$ to $g$ is the product of incoming messages to $Y$ except the one from $g$. In this tiny graph, that is
$$
m_{Y\to g}(y)=m_{f\to Y}(y).
$$

The "exclude the recipient" rule prevents a node from immediately sending information back to the place it just came from. Without that rule, messages can double-count the same evidence.

## Solution 3.4

The true statements are:

- A
- B
- D
- E

Statement C is false. On graphs with cycles, BP is generally called loopy BP; it may converge and work well, but exact convergence to true marginals is not guaranteed.
