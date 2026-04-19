# Inference and Belief Propagation 0 to 1 Curriculum

Topic Path: `topics/probabilistic-graphical-models/inference-and-belief-propagation`

## Source Trace

- Canonical manifest: `learning_system/SOURCE_MAP.json`
- Topic locator: [topics/probabilistic-graphical-models/inference-and-belief-propagation/curriculum/0-to-1-plan.md](0-to-1-plan.md)
- Transcript links: see source sections in this curriculum.

## Outcome

By the end of this topic, you should be able to formulate inference queries, explain exact inference complexity limits, and execute message-passing updates on tree-structured graphs.

## Source Materials

- [materials/processed/probabilistic-graphical-models/Lecture_5_inference.md](../../../../materials/processed/probabilistic-graphical-models/Lecture_5_inference.md)
- [materials/processed/probabilistic-graphical-models/Lecture_6_7_beliefprop.md](../../../../materials/processed/probabilistic-graphical-models/Lecture_6_7_beliefprop.md)

## Transcript Anchors

- Exact-inference coverage centered on variable elimination and belief propagation.
- Hardness framing for marginals, sampling, and partition-function computation.
- Variable-elimination \"peel variables\" algorithmic pattern and order dependence.
- Sum-product BP for marginals/partition function on trees.
- Max-product BP connection for MAP-style inference.

## Starting Assumption

Learner has graph model basics but limited experience with inference algorithms.

## Lesson Sequence

1. Lesson 1: Inference query taxonomy
- Define marginals, conditionals, MAP, and evidence incorporation.
- Map each query type to computational tasks.
- Practice: classify and restate inference requests formally.

2. Lesson 2: Exact inference framing
- Build intuition for elimination-based exact inference.
- Explain source of combinatorial blow-up and graph structure effects.
- Practice: variable elimination order exercises on toy graphs.

3. Lesson 3: Sum-product on trees
- Derive message update equations from factorization structure.
- Compute upward/downward passes and resulting marginals.
- Practice: hand-run BP on small tree examples.

4. Lesson 4: Loopy BP and practical caveats
- Discuss fixed points, approximation behavior, and failure modes.
- Contrast exact-tree guarantees with loopy heuristics.
- Practice: diagnose likely issues from message traces.

5. Lesson 5: MAP and max-product perspective
- Relate sum-product to max-product objectives.
- Clarify when MAP differs from marginal-based decisions.
- Practice: side-by-side comparison problems.

## Practice Ladder

- Level 1: Query identification and notation.
- Level 2: Elimination-order reasoning.
- Level 3: Exact message computations on trees.
- Level 4: Approximation caveat analysis in loopy settings.

## Mastery Checks

- Can state inference tasks precisely from plain-English prompts.
- Can execute tree BP updates without algebraic confusion.
- Can explain why exact inference may be intractable on dense graphs.
- Can identify when loopy BP output should be treated cautiously.

## Progression

Next topic: `topics/probabilistic-graphical-models/mcmc`.
