# PGM Practice Problems 1 Answer Key: Foundations

Use with [[2026-04-20-pgm-practice-problems-section-01-foundations]].

## Table of Contents

- [[#Solution 1.1]]
- [[#Solution 1.2]]
- [[#Solution 1.3]]
- [[#Solution 1.4]]

## Solution 1.1

Model A has
$$
3^8=6561
$$
raw assignments. Since the probabilities must sum to $1$, it has
$$
3^8-1=6560
$$
independent parameters.

For the directed chain, $p(x_1)$ needs $3-1=2$ independent parameters. Each conditional $p(x_i\mid x_{i-1})$ has $3$ parent settings and $3-1=2$ independent child probabilities per setting, so each conditional needs $6$ parameters. There are $7$ such conditionals, so Model B needs
$$
2+7\cdot 6=44
$$
independent parameters.

No, Model B does not automatically make every inference query cheap in every possible model. It helps a lot here because the chain has low treewidth, but the general lesson is that compact representation and cheap inference are related through graph structure, not identical.

## Solution 1.2

The true statements are:

- A
- C
- D
- E

Statement B is false. A graph can make a model compact, but exact marginal inference can still be expensive if the graph has high treewidth or creates large intermediate factors.

## Solution 1.3

The directed graph is:
$$
A\to B,\qquad A\to C,\qquad B\to D,\qquad C\to D.
$$

Yes, $B \perp C \mid A$ is suggested by the factorization. Once we condition on their shared parent $A$, the two branches no longer communicate unless we condition on the collider $D$ or its descendants.

No, $B \perp C$ is not generally suggested. Marginally, $B$ and $C$ can be dependent because both are influenced by $A$.

The factorization is a compact algebraic recipe for the joint distribution, while the full joint table is the complete list of probabilities for every assignment.

## Solution 1.4

The chain has the more compact pairwise representation. It has only four edges, while the complete graph on five variables has ten pairwise edges.

The complete graph is more likely to create large intermediate factors during exact variable elimination. In a complete graph, every variable is already connected to every other variable, so eliminating variables tends to involve large scopes.

The key idea is that representation size counts how many local pieces the model uses, while inference cost depends on the sizes of intermediate factors created by the algorithm. Sparse low-treewidth graphs often make both representation and inference easier. But the guarantee is not simply "few factors means easy inference"; it is about whether the graph structure prevents large intermediate scopes.
