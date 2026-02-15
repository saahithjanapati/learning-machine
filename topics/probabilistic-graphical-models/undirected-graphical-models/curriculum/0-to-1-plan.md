# Undirected Graphical Models 0 to 1 Curriculum

Topic Path: `topics/probabilistic-graphical-models/undirected-graphical-models`

## Source Trace

- Canonical manifest: `learning_system/SOURCE_MAP.json`
- Topic locator: `topics/probabilistic-graphical-models/undirected-graphical-models/curriculum/0-to-1-plan.md`
- Transcript links: see source sections in this curriculum.

## Outcome

By the end of this topic, you should be able to interpret Markov random fields, write clique-potential factorizations, and explain the role of the partition function in inference and learning.

## Source Materials

- `materials/processed/probabilistic-graphical-models/Lecture_3_4_undirected.md`

## Transcript Anchors

- Undirected-model representation as local interactions with soft constraints.
- Partition-function definition and computational cost discussion.
- Markov random field definition via conditional independence/global Markov property.
- Hammersley-Clifford theorem linking Markov properties and clique-potential factorization.
- Moralization bridge from directed to undirected structures for independence reasoning.

## Starting Assumption

Learner understands basic directed models but is new to energy/potential formulations.

## Lesson Sequence

1. Lesson 1: MRF basics and graph semantics
- Introduce undirected edges as symmetric dependency structure.
- Compare directed vs undirected representational assumptions.
- Practice: interpret neighborhood-based dependence statements.

2. Lesson 2: Potentials and factorization form
- Build joint distributions from clique potentials.
- Clarify non-negativity and unnormalized score interpretation.
- Practice: construct valid potential-based factorizations.

3. Lesson 3: Partition function and normalization
- Explain why `Z` is required and why it is often expensive.
- Link partition-function difficulty to computational bottlenecks.
- Practice: exact `Z` calculation for tiny toy graphs.

4. Lesson 4: Energy-based view and model intuition
- Connect log-potentials to energies and compatibility scores.
- Discuss common modeling patterns and qualitative behavior.
- Practice: reason about high/low probability assignments via energy.

5. Lesson 5: Directed-undirected translation workshop
- Compare equivalent or near-equivalent representations.
- Emphasize when one formalism is more convenient.
- Practice: convert small examples between BN and MRF style.

## Practice Ladder

- Level 1: Read MRF graphs and neighborhood assumptions.
- Level 2: Write clique-based factorizations.
- Level 3: Compute tiny partition functions.
- Level 4: Analyze modeling tradeoffs between directed/undirected forms.

## Mastery Checks

- Can produce a valid MRF factorization for small graphs.
- Can explain partition function significance and challenge.
- Can reason with energy/potential intuition for assignment likelihood.
- Can articulate directed vs undirected tradeoffs in context.

## Progression

Next topic: `topics/probabilistic-graphical-models/inference-and-belief-propagation`.
