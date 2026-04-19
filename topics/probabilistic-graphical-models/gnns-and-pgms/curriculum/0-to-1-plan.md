# GNNs and PGMs 0 to 1 Curriculum

Topic Path: `topics/probabilistic-graphical-models/gnns-and-pgms`

## Source Trace

- Canonical manifest: `learning_system/SOURCE_MAP.json`
- Topic locator: [topics/probabilistic-graphical-models/gnns-and-pgms/curriculum/0-to-1-plan.md](0-to-1-plan.md)
- Transcript links: see source sections in this curriculum.

## Outcome

By the end of this topic, you should be able to explain the conceptual link between graphical-model message passing and modern GNN layers, and reason about what is shared vs different between probabilistic inference and neural representation learning.

## Source Materials

- [materials/processed/probabilistic-graphical-models/Lecture_8_GNNs.md](../../../../materials/processed/probabilistic-graphical-models/Lecture_8_GNNs.md)

## Transcript Anchors

- Message-passing interpretation of graph convolution from lecture visuals.
- Multi-layer GNN intuition via k-hop neighborhood receptive fields.
- GNN layer decomposition into message computation and aggregation.
- Activation and aggregation variants shown as concrete layer examples.
- Expressivity limitation examples (indistinguishable local neighborhoods).

## Starting Assumption

Learner is new to neural graph methods and needs bridge-building from prior PGM intuition.

## Lesson Sequence

1. Lesson 1: Neural network basics needed for GNN context
- Refresh neuron, layer, activation, and representation-learning language.
- Anchor all terms to slide visuals and notation from the lecture.
- Practice: identify role of parameters, activations, and nonlinearities.

2. Lesson 2: Message passing pattern in GNNs
- Define node updates via neighborhood aggregation and transformation.
- Compare update flow to belief-propagation style local computation.
- Practice: execute one round of message updates on a toy graph.

3. Lesson 3: Similarities and differences vs PGMs
- Similarity: local graph computation and iterative information flow.
- Difference: probabilistic semantics vs learned feature transformations.
- Practice: classify statements as PGM-like, GNN-like, or both.

4. Lesson 4: Expressivity and practical design concerns
- Discuss over-smoothing intuition, depth tradeoffs, and architecture choices.
- Tie model choices to graph tasks (node, edge, graph-level prediction).
- Practice: propose a simple GNN setup for a small application.

5. Lesson 5: Integration capstone
- Synthesize directed/undirected/inference intuition with GNN perspective.
- Produce a concise comparison sheet for exam recall.
- Practice: short written responses and concept map creation.

## Practice Ladder

- Level 1: Neural/GNN vocabulary fluency.
- Level 2: Manual message-passing updates.
- Level 3: PGM vs GNN comparison reasoning.
- Level 4: Task-driven architecture justification.

## Mastery Checks

- Can explain one GNN layer update without ambiguity.
- Can articulate how BP-style intuition transfers to GNNs.
- Can distinguish probabilistic inference outputs from learned embeddings.
- Can choose a basic GNN framing for a concrete graph task.

## Progression

Next topic: `topics/probabilistic-graphical-models/course-catchup`.
