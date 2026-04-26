# PGM Memory Sheet 4: GNNs and Message Passing

Use with [[2026-04-20-pgm-exam-prep-section-04-gnns]].

This section is shorter, but it appears in the practice final and homework. The exam skill is recognizing message-passing structure and distinguishing over-smoothing from over-squashing.

## Assessed Sources

- `HW2-Q9`: linear GCN dynamics and over-smoothing.
- `PF-SQ2`: over-smoothing vs over-squashing.
- `PF-P3`: shortest paths through iterative message passing.
- `WP4.1-WP4.6`: GNN/BP comparison, learned messages, permutation-invariant aggregation, k-hop dependence, failure modes, shortest paths.

## Why GNNs Belong Here

GNNs and BP both use the same computational motif:

- neighbors send messages
- a node aggregates messages
- the node updates its state
- repeated rounds move information farther through the graph

Key difference:

- BP messages have probabilistic meaning derived from a graphical model.
- GNN messages are learned feature vectors optimized for a task.

Memory phrase:

> Same message-passing skeleton, different semantics.

## Generic GNN Layer

A typical layer looks like:

$$
m_v^{(k)}=\mathrm{AGG}\{h_u^{(k)}:u\in N(v)\},
$$

$$
h_v^{(k+1)}=\mathrm{UPDATE}(h_v^{(k)},m_v^{(k)}).
$$

After $k$ rounds, node $v$ can only depend on information within $k$ hops.

## Permutation Invariance

Graph neighborhoods do not come with a natural order.

Therefore aggregators should be invariant to neighbor ordering:

- sum
- mean
- max

Bad idea:

> Concatenate neighbors in arbitrary listed order.

That would make the output depend on irrelevant ordering.

## Over-Smoothing

Over-smoothing means node representations become too similar after many layers.

Memory image:

> Repeated averaging washes out node identity.

In linear GCN-style dynamics, repeatedly multiplying by normalized adjacency can push features toward a low-dimensional shared subspace.

## Over-Squashing

Over-squashing means too much information from far-away nodes has to pass through a narrow graph bottleneck.

Memory image:

> Many distant signals get squeezed through a few edges.

This is about limited communication capacity, not just representations becoming numerically similar.

## Over-Smoothing vs Over-Squashing

- **Over-smoothing:** representations collapse toward each other.
- **Over-squashing:** long-range information cannot fit through bottlenecks.

Practice Final `PF-SQ2` tested this distinction.

## Shortest Paths As Message Passing

Shortest-path dynamic programming can be written in message-passing form:

$$
d_v^{(k+1)}=\min\left(d_v^{(k)},\min_{u\in N(v)}d_u^{(k)}+w(u,v)\right).
$$

This is not necessarily a neural network, but it has the GNN-like update pattern:

- send distance estimates
- aggregate by minimum
- update local state

## Exam Traps

- Do not say GNNs are literally BP.
- Do not say over-smoothing and over-squashing are the same.
- Do not forget that $k$ layers only give $k$-hop reach.
- Do not use order-sensitive aggregation unless the graph has a meaningful node order.
- Do not blame over-squashing on backprop alone; it is fundamentally graph communication compression.

## Quick Self-Test

- “Representations become similar” means over-smoothing.
- “Long-range signals compressed through bottlenecks” means over-squashing.
- “After $k$ layers, what can a node know?” Answer: at most its $k$-hop neighborhood.
- “Why sum/mean/max?” Answer: permutation invariance.
