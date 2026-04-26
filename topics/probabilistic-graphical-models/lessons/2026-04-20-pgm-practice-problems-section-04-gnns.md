# PGM Practice Problems 4: GNNs and Message Passing

Use with [[2026-04-20-pgm-exam-prep-section-04-gnns]], [[2026-04-20-pgm-worked-problems-section-04-gnns]], [[2026-04-20-pgm-practice-problems-section-04-gnns-answer-key]], and [[2026-04-20-pgm-memory-04-gnns]].

These are unsolved practice problems. They focus on applying the BP/GNN analogy rather than only defining vocabulary.

## Table of Contents

- [[#Problem 4.1]]
- [[#Problem 4.2]]
- [[#Problem 4.3]]
- [[#Problem 4.4]]

## Problem 4.1

Select all statements that are true about the relationship between belief propagation and message-passing GNNs.

A. Both update local representations using information sent along graph edges.

B. In both methods, after $k$ rounds/layers, a node can only depend on information at most $k$ hops away, unless extra global mechanisms are added.

C. Standard BP messages are learned from labeled training data in exactly the same way as GNN weights.

D. Both methods can be viewed as repeated local aggregation followed by an update.

E. BP and GNNs always optimize the same objective.

## Problem 4.2

Suppose a GNN uses the update
$$
h_v^{(t+1)}
=\sigma\left(W h_v^{(t)}+
\sum_{u\in N(v)} W_m h_u^{(t)}\right).
$$

Answer each part.

1. Why is this update permutation-invariant with respect to the order in which neighbors are listed?
2. After three layers, which nodes can influence $h_v^{(3)}$?
3. Give one reason this update is not the same thing as exact probabilistic inference.

## Problem 4.3

A graph neural network repeatedly replaces each node embedding by the average of its neighbors' embeddings, followed by a weak nonlinearity. After many layers, the node embeddings in a connected component become nearly identical.

1. Which pathology is this describing: over-smoothing or over-squashing?
2. Why can this hurt node classification?
3. Select one plausible mitigation:

A. Add residual connections or normalization.

B. Increase the number of layers without changing anything else.

C. Remove all node features.

## Problem 4.4

Consider a balanced binary tree. A label at the root depends on a pattern involving many leaves, but all information from the leaves must pass through a small number of edges near the root.

1. Which pathology is this describing: over-smoothing or over-squashing?
2. Why is this a bottleneck problem rather than merely an "embeddings become equal" problem?
3. Give one graph- or architecture-level change that could reduce the issue.
