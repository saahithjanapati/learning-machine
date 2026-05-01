# PGM Memory Sheet 3: Exact Inference and Belief Propagation

Use with [[2026-04-20-pgm-exam-prep-section-03-inference-bp]].

This section is about exact computation in structured models. The exam pattern is usually: write a variable-elimination expression, reason about factor growth, explain BP messages, or identify when message passing is exact.

## Assessed Sources

- `HW1-Q5`: exact BP on a tree factor graph.
- `HW1-Q6`: variable elimination order and factor growth.
- `HW1-Q8`: exact sampling from a tree Ising model using dynamic programming / sum-product.
- `HW1-Q9`: reductions between partition functions and marginals.
- `M1-Q12`: tree decomposition properties.
- `HW3-Q3`: loopy BP convergence and periodic non-convergence.
- `WP3.1-WP3.6`: variable elimination, elimination order, BP messages, tree exactness, forward-backward vs Viterbi, treewidth.

## Inference Targets

Common exact-inference tasks:

- compute a marginal, such as $p(x_i)$
- compute a conditional, such as $p(x_i\mid e)$
- compute the partition function $Z$
- compute MAP or a best joint assignment
- sample exactly from a tree-structured model

The same graph can be easy or hard depending on which computation and which structure.

## Variable Elimination Algorithm

To eliminate variable $X$:

- collect all factors involving $X$
- multiply them together
- sum out $X$
- replace the collected factors with the new factor

Formula pattern:

$$
\tau(y)=\sum_x \prod_{\alpha: X\in \alpha}\phi_\alpha(x,y_\alpha).
$$

The final answer is exact, but the intermediate factors may become large.

## Elimination Order

Different elimination orders give the same exact value but different runtime.

Why:

- eliminating a variable connects all variables that co-occur in its current factors
- this can create a large induced clique
- factor table size is exponential in the number of variables in the factor

Exam phrase:

> Correctness is invariant to elimination order; cost is not.

## Treewidth

Operational memory:

> Treewidth is the smallest possible worst induced-clique size minus 1 over all elimination orders.

Why it matters:

$$
\text{exact inference cost} \approx \exp(\text{treewidth}).
$$

Low treewidth makes exact inference feasible; high treewidth makes exact inference expensive.

## Sum-Product BP On Factor Graphs

Variable-to-factor message:

$$
\mu_{i\to \alpha}(x_i)
=
\prod_{\beta\in N(i)\setminus\{\alpha\}}
\mu_{\beta\to i}(x_i).
$$

Factor-to-variable message:

$$
\mu_{\alpha\to i}(x_i)
=
\sum_{x_{\alpha\setminus i}}
\psi_\alpha(x_\alpha)
\prod_{j\in N(\alpha)\setminus\{i\}}
\mu_{j\to \alpha}(x_j).
$$

Why exclude the recipient:

> A message should summarize information from the rest of the graph, not echo information back along the edge it came from.

## Beliefs

Variable belief:

$$
b_i(x_i)\propto \prod_{\alpha\in N(i)}\mu_{\alpha\to i}(x_i).
$$

Factor belief:

$$
b_\alpha(x_\alpha)\propto
\psi_\alpha(x_\alpha)
\prod_{i\in N(\alpha)}\mu_{i\to\alpha}(x_i).
$$

On trees, these are exact marginals after messages have converged.

## BP Exactness

BP is exact on trees because cutting an edge separates the graph into independent subproblems conditioned on the boundary variable.

On loopy graphs:

- messages can circulate information repeatedly
- BP can converge to an approximation
- BP can fail to converge
- BP can oscillate

This distinction is tested by `HW3-Q3`.

## Sum-Product vs Max-Product

Sum-product:

$$
\sum
$$

is for marginals and partition functions.

Max-product:

$$
\max
$$

is for MAP-style optimization.

Do not mix them.

## Forward-Backward vs Viterbi

Forward-backward gives nodewise posterior marginals:

$$
p(z_t\mid x_{1:T}).
$$

Viterbi gives the single best joint latent path:

$$
\arg\max_{z_{1:T}} p(z_{1:T}\mid x_{1:T}).
$$

Choosing the most likely state at each time separately is not guaranteed to equal the best joint path.

## Tree Decomposition Checklist

For a tree decomposition, verify:

- every original graph node appears in some bag
- every original graph edge is contained in some bag
- for each variable, the bags containing it form a connected subtree

The third condition is the running-intersection property. It is the easiest one to forget.

Width:

$$
\max_i |B_i|-1.
$$

Treewidth:

$$
\min_{\text{valid decompositions}}(\max_i |B_i|-1).
$$

Exam phrase:

> To prove a proposed tree decomposition is valid, verify vertex coverage, edge coverage, and running intersection, then report the largest bag size minus one.

## Hardness / Reduction Memory

If a problem asks about reducing partition functions to marginals or vice versa, the big idea is:

> If an oracle could solve one hard inference query exactly, you may be able to call it repeatedly to solve another hard query.

For Ising-style problems:

- partition functions normalize the whole model
- marginals can reveal ratios of partition-function-like quantities
- exact inference is generally hard outside special structures such as trees or low treewidth graphs

## Exam Traps

- Do not say BP is always exact.
- Do not ignore elimination order.
- Do not confuse marginal MAP-like summaries with the Viterbi path.
- Do not forget the running-intersection property in tree decompositions.
- Do not double-count messages by including the recipient in the product.
- Do not use max-product when asked for marginals.

## Quick Self-Test

- Marginal query? Use sum-product / sums.
- MAP path? Use max-product / Viterbi-style recursion.
- Tree factor graph? BP is exact.
- Loopy graph? BP is not automatically exact.
- Runtime question? Talk about induced factors, elimination order, and treewidth.
