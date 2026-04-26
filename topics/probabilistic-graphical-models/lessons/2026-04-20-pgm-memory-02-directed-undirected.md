# PGM Memory Sheet 2: Directed and Undirected Models

Use with [[2026-04-20-pgm-exam-prep-section-02-directed-undirected]].

This section is heavily assessed by graph-reading questions. The key exam skill is moving between graph structure, factorization, Markov blankets, separation, moralization, cliques, and factor graphs.

## Assessed Sources

- `HW1-Q1`: UGM factorization, graph separation, UGM Markov blankets.
- `HW1-Q2`: DAG factorization, d-separation, Markov blankets, moralization.
- `HW1-Q4`: conversions among UGMs, DAGs, and factor graphs.
- `M1-Q1`: DAG Markov blanket and local conditional-independence reasoning.
- `M1-Q2`: UGM Markov blanket, factor graph conversion, and separation.
- `M1-Q11`: constructing maximal-clique log-potentials.
- `PF-P1`: Bayesian network factorization, d-separation, Markov blankets, and moralization.
- `WP2.1-WP2.7`: directed factorization, path patterns, colliders, Markov blankets, partition functions, UGM cliques, directed vs undirected semantics.

## DAG Factorization

For a directed acyclic graph:

$$
p(x_1,\dots,x_n)=\prod_i p(x_i\mid x_{\mathrm{pa}(i)}).
$$

How to use it:

- list each node
- identify its parents
- write one conditional per node
- root nodes get unconditional factors

Do not include descendants unless they are parents.

## DAG Markov Blanket

For a node $X$, the Markov blanket in a DAG is:

- parents of $X$
- children of $X$
- other parents of $X$'s children

Memory phrase:

> Parents, children, spouses.

Once you condition on the Markov blanket, the node is independent of the rest of the graph.

## D-Separation Patterns

For a path $X-Y-Z$:

- **Chain:** $X\to Y\to Z$. Conditioning on $Y$ blocks.
- **Fork:** $X\leftarrow Y\to Z$. Conditioning on $Y$ blocks.
- **Collider:** $X\to Y\leftarrow Z$. Conditioning on $Y$ opens.

Collider descendants matter:

- unobserved collider blocks the path
- observed collider opens the path
- observed descendant of a collider also opens the path

Exam phrase:

> Chains and forks are blocked by conditioning; colliders are opened by conditioning.

## UGM Factorization

For an undirected graphical model:

$$
p(x)=\frac{1}{Z}\prod_{C\in\mathcal{C}}\psi_C(x_C),
$$

where $\mathcal{C}$ is usually the set of maximal cliques.

The partition function is:

$$
Z=\sum_x \prod_{C\in\mathcal{C}}\psi_C(x_C).
$$

Why $Z$ is needed:

- UGM potentials are compatibility scores, not normalized conditionals.
- Their product does not automatically sum to 1.

## UGM Markov Blanket

In an undirected graph, the Markov blanket of a node is just its neighbors.

Reason:

> All paths from that node to the rest of the graph must pass through its neighbors.

This was central in `M1-Q2`.

## UGM Separation

In an undirected graph:

$$
A\perp B\mid C
$$

if every path from $A$ to $B$ passes through the conditioning set $C$.

Exam procedure:

- list all relevant paths from $A$ to $B$
- check whether each path hits the conditioning set
- if any path remains open, the separation claim is false

## Cliques And Factor Graphs

A clique is a set of nodes that are all pairwise connected.

A maximal clique is a clique that cannot be enlarged.

Smallest-factor conversion for a UGM:

- create one factor per maximal clique
- connect that factor to every variable in the clique

This is exactly the move used in `M1-Q2`.

## Moralization

To moralize a DAG:

- connect all pairs of parents that share a child
- drop arrow directions

Use this for converting a DAG into an undirected graph for some inference/separation arguments.

## Log-Potential Construction

For UGM factorization proofs, it is useful to work with logs:

$$
\log p(x)=\sum_C \theta_C(x_C)-\log Z.
$$

If a problem asks you to show a distribution factorizes over maximal cliques, the strategy is:

- express the log probability as a sum of local terms
- assign each local term to a maximal clique that contains its variables
- absorb constants into the partition function

This is the idea behind `M1-Q11`.

## Exam Traps

- Do not include grandchildren in a DAG Markov blanket unless they are also children or co-parents.
- Do not use d-separation rules directly on undirected graphs.
- Do not forget that an unobserved collider blocks a path.
- Do not say UGM potentials are conditional probabilities.
- Do not forget $1/Z$ in an undirected model.
- Do not create one factor per edge if a larger maximal clique can use fewer factors.

## Quick Self-Test

- DAG factorization: one factor per node given its parents.
- UGM factorization: one potential per maximal clique, divided by $Z$.
- DAG Markov blanket: parents, children, other parents of children.
- UGM Markov blanket: neighbors.
- Chain/fork: conditioning blocks.
- Collider: conditioning opens.
