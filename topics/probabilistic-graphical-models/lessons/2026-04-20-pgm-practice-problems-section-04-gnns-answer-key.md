# PGM Practice Problems 4 Answer Key: GNNs and Message Passing

Use with [[2026-04-20-pgm-practice-problems-section-04-gnns]].

## Table of Contents

- [[#Solution 4.1]]
- [[#Solution 4.2]]
- [[#Solution 4.3]]
- [[#Solution 4.4]]

## Solution 4.1

The true statements are:

- A
- B
- D

Statement C is false because standard BP messages are derived from a probabilistic model rather than learned from labeled data in the same way as GNN weights.

Statement E is false because BP is an inference algorithm, while a GNN is usually a learned function trained for a task-specific objective.

## Solution 4.2

The update is permutation-invariant with respect to neighbor order because it uses a sum over neighbors. Reordering the neighbors does not change the value of the sum.

After three layers, $h_v^{(3)}$ can be influenced by nodes within three graph hops of $v$.

This is not exact probabilistic inference because the update uses learned weights and nonlinearities rather than messages derived from a specified probability distribution and its factors. It may learn useful graph computations, but it is not automatically computing marginals or MAP values.

## Solution 4.3

This is over-smoothing.

It hurts node classification because nodes from different classes may end up with nearly identical embeddings, making them hard to separate even if the original features or graph positions were informative.

A plausible mitigation is A: add residual connections or normalization. These can help preserve information and stabilize deep message passing.

## Solution 4.4

This is over-squashing.

It is a bottleneck problem because many distant signals must be compressed through a small number of edges or hidden-vector dimensions before reaching the root. The issue is not merely that all embeddings become equal; the issue is that too much relevant information is forced through too narrow a communication channel.

Possible mitigations include graph rewiring, adding long-range edges, attention/global tokens, positional encodings, or architectures designed to improve long-range information flow.
