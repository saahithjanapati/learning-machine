# Probabilistic Graphical Models: 0 -> 1 Master Curriculum

Topic path: `topics/probabilistic-graphical-models`

## Source Trace

- Canonical manifest: `learning_system/SOURCE_MAP.json`
- Topic locator: `topics/probabilistic-graphical-models/curriculum/0-to-1-master-plan.md`
- Transcript links: see source sections in this curriculum.

## Starting Assumption

You are near 0 familiarity and need a full catch-up path from basics.

## Transcript Coverage Map

- `Lecture_1_intro.md`: course framing, probability/inference toolkit, approximate-inference motivation.
- `Lecture_2_directed.md`: Bayesian networks, DAG factorization, CPT structure, independence assumptions.
- `Lecture_3_4_undirected.md`: MRFs, potentials, partition function, Hammersley-Clifford, moralization bridge.
- `Lecture_5_inference.md` and `Lecture_6_7_beliefprop.md`: exact inference complexity, variable elimination, sum-product and max-product BP.
- `Lecture_9_MCMC_intro.md`: Markov chains, MH/Gibbs mechanics, stationary-distribution targeting.
- `Lecture_8_GNNs.md`: graph message passing, GNN layer decomposition, expressivity limits, links to PGM intuition.

## 0 -> 1 Definition

By the end, you should be able to:
- read and construct directed/undirected graphical models,
- derive conditional independencies and factorization structure,
- run core inference ideas (exact + message passing intuition),
- explain when and why MCMC is used,
- connect message passing intuition to GNN-style computations.

## Phase Plan

1. Phase A: Probability and notation refresh (2 sessions)
- conditional probability, Bayes rule, expectation basics, factorization notation

2. Phase B: Directed graphical models (2 sessions)
- Bayesian networks, local conditionals, causal/conditional structure intuition

3. Phase C: Undirected graphical models (2 sessions)
- MRFs, potentials, partition function, energy-based perspective

4. Phase D: Inference foundations (3 sessions)
- exact inference framing, elimination-style reasoning, tractability limits

5. Phase E: Belief propagation (2 sessions)
- message update intuition, trees vs loopy settings, practical caveats

6. Phase F: Sampling with MCMC (2 sessions)
- why sampling, Markov chain intuition, basic algorithm flow and diagnostics

7. Phase G: Modern connections (1-2 sessions)
- GNN/message passing parallels and representational implications

## Session Style Ramp

- Early (A-B): 75% exposition, 25% guided questions
- Middle (C-E): 50% exposition, 50% practice
- Late (F-G): 30% exposition, 70% practice

## Assessment Gates

- Gate 1: write and explain a valid factorization for a small graph
- Gate 2: identify key conditional independence statements from structure
- Gate 3: explain exact inference complexity bottlenecks in plain language
- Gate 4: execute small-message-passing examples and sanity-check outputs
- Gate 5: explain MCMC motivation and failure modes at a high level
