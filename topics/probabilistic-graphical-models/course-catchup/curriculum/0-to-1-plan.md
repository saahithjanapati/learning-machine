# Probabilistic Graphical Models Catch-Up Plan

Path: `topics/probabilistic-graphical-models/course-catchup`

## Source Trace

- Canonical manifest: `learning_system/SOURCE_MAP.json`
- Topic locator: `topics/probabilistic-graphical-models/course-catchup/curriculum/0-to-1-plan.md`
- Transcript links: see source sections in this curriculum.

## Purpose

Reach lecture-following readiness from near zero background by moving through the transcribed lectures in teaching order.

## Source Transcript Sequence

1. `materials/processed/probabilistic-graphical-models/Lecture_1_intro.md`
2. `materials/processed/probabilistic-graphical-models/Lecture_2_directed.md`
3. `materials/processed/probabilistic-graphical-models/Lecture_3_4_undirected.md`
4. `materials/processed/probabilistic-graphical-models/Lecture_5_inference.md`
5. `materials/processed/probabilistic-graphical-models/Lecture_6_7_beliefprop.md`
6. `materials/processed/probabilistic-graphical-models/Lecture_8_GNNs.md`
7. `materials/processed/probabilistic-graphical-models/Lecture_9_MCMC_intro.md`

## Weekly Plan

1. Week 1: Foundations plus directed models
- Session 1: Probability notation reboot and inference-task framing from Lecture 1.
- Session 2: Directed graphical model semantics, local conditionals, and CPT reading.
- Session 3: Conditional independence in DAGs and d-separation drills.
- Deliverable: BN notation and CI quick-reference sheet.

2. Week 2: Undirected models and exact inference
- Session 4: Clique potentials, partition function intuition, MRF interpretation.
- Session 5: Inference task taxonomy and variable-elimination reasoning.
- Session 6: Belief propagation on trees, then loopy caveats.
- Deliverable: worked message-passing examples and elimination-order notes.

3. Week 3: Approximate inference and modern bridge
- Session 7: MCMC motivation, stationary distributions, MH and Gibbs mechanics.
- Session 8: GNN message passing and links/differences versus PGM inference.
- Session 9: Integration session with mixed graph, inference, and sampling questions.
- Deliverable: model-selection guide (exact inference, BP, MCMC, GNN framing).

## Session Format

- Start (10-15 min): transcript-grounded recap and terminology check.
- Core (35-45 min): structured exposition with graph examples.
- Practice (20-30 min): CI, factorization, inference, and sampling drills.
- Close (10 min): mistake log update and next-session targeting.

## Assessment Gates

- Gate A: Write valid factorizations for DAG and MRF examples.
- Gate B: Answer conditional-independence queries with graph-based justifications.
- Gate C: Execute tree BP message updates and explain inference outputs.
- Gate D: Explain when/why MCMC is needed and describe MH/Gibbs steps clearly.

## Outputs to Track

- Weekly misconception tracker (graph semantics, CI, inference, sampling).
- Growing formula-and-algorithm sheet.
- Readiness score (0-3) per module: directed, undirected, exact inference, approximate inference.
