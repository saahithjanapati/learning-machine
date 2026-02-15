# Directed Graphical Models 0 to 1 Curriculum

Topic Path: `topics/probabilistic-graphical-models/directed-graphical-models`

## Source Trace

- Canonical manifest: `learning_system/SOURCE_MAP.json`
- Topic locator: `topics/probabilistic-graphical-models/directed-graphical-models/curriculum/0-to-1-plan.md`
- Transcript links: see source sections in this curriculum.

## Outcome

By the end of this topic, you should be able to build and interpret Bayesian networks, write valid factorizations from DAGs, and reason about conditional independencies using graph structure.

## Source Materials

- `materials/processed/probabilistic-graphical-models/Lecture_2_directed.md`

## Transcript Anchors

- Bayesian network examples with node-wise CPT parameterization (Cloudy/Sprinkler/Rain/WetGrass).
- Joint factorization as product of local conditionals based on parent sets.
- Interpretation of missing DAG edges as conditional independence assumptions.
- Discussion of deriving Bayesian-network structure as restrictions on general distributions.
- Examples spanning simple BNs to layered Gaussian directed models.

## Starting Assumption

Learner is new to DAG semantics and needs graph-to-equation fluency.

## Lesson Sequence

1. Lesson 1: DAG semantics and local conditionals
- Map each node to a conditional distribution on parents.
- Convert DAGs into complete joint factorizations.
- Practice: factorization drills for small directed graphs.

2. Lesson 2: Structural independencies and intuition
- Introduce collider, chain, and fork motifs with path intuition.
- Build qualitative understanding before full formal d-separation.
- Practice: predict dependency changes under conditioning.

3. Lesson 3: d-separation in practice
- Apply blocking/unblocking rules to determine CI statements.
- Use step-by-step graph traversal to avoid guessing.
- Practice: CI query sets with justification in words and symbols.

4. Lesson 4: Parameterization and modeling choices
- Discuss CPTs, parameter growth, and modularity benefits.
- Connect directed structure to causal-style interpretations carefully.
- Practice: design a small BN for a real-world scenario.

5. Lesson 5: Timed synthesis set
- Mixed tasks: graph design, factorization, CI reasoning.
- Focus on concise, defensible solution writeups.
- Practice: exam-style short questions.

## Practice Ladder

- Level 1: Graph-to-factorization conversion.
- Level 2: Local dependency interpretation.
- Level 3: d-separation CI analysis.
- Level 4: End-to-end BN construction from problem statements.

## Mastery Checks

- Can write correct joint factorization for any small DAG.
- Can answer CI queries with d-separation-based reasoning.
- Can explain collider behavior and conditioning effects reliably.
- Can propose a reasonable BN structure for a simple domain.

## Progression

Next topic: `topics/probabilistic-graphical-models/undirected-graphical-models`.
