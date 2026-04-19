# Probabilistic Graphical Models Catch-Up Plan

Path: `topics/probabilistic-graphical-models/course-catchup`

## Source Trace

- Canonical manifest: `learning_system/SOURCE_MAP.json`
- Topic locator: [topics/probabilistic-graphical-models/course-catchup/curriculum/0-to-1-plan.md](0-to-1-plan.md)
- Transcript links: see source sections in this curriculum.

## Purpose

Reach lecture-following readiness from near zero background by moving through the transcribed lectures in teaching order.

## Source Transcript Sequence

1. [materials/processed/probabilistic-graphical-models/Lecture_1_intro.md](../../../../materials/processed/probabilistic-graphical-models/Lecture_1_intro.md)
2. [materials/processed/probabilistic-graphical-models/Lecture_2_directed.md](../../../../materials/processed/probabilistic-graphical-models/Lecture_2_directed.md)
3. [materials/processed/probabilistic-graphical-models/Lecture_3_4_undirected.md](../../../../materials/processed/probabilistic-graphical-models/Lecture_3_4_undirected.md)
4. [materials/processed/probabilistic-graphical-models/Lecture_5_inference.md](../../../../materials/processed/probabilistic-graphical-models/Lecture_5_inference.md)
5. [materials/processed/probabilistic-graphical-models/Lecture_6_7_beliefprop.md](../../../../materials/processed/probabilistic-graphical-models/Lecture_6_7_beliefprop.md)
6. [materials/processed/probabilistic-graphical-models/Lecture_8_GNNs.md](../../../../materials/processed/probabilistic-graphical-models/Lecture_8_GNNs.md)
7. [materials/processed/probabilistic-graphical-models/Lecture_9_MCMC_intro.md](../../../../materials/processed/probabilistic-graphical-models/Lecture_9_MCMC_intro.md)
8. [materials/processed/probabilistic-graphical-models/Lecture_13_variational.md](../../../../materials/processed/probabilistic-graphical-models/Lecture_13_variational.md)
9. [materials/processed/probabilistic-graphical-models/Lecture_15_EM.md](../../../../materials/processed/probabilistic-graphical-models/Lecture_15_EM.md)
10. [materials/processed/probabilistic-graphical-models/Lecture_17_GAN.md](../../../../materials/processed/probabilistic-graphical-models/Lecture_17_GAN.md)
11. [materials/processed/probabilistic-graphical-models/Lecture_18_applications.md](../../../../materials/processed/probabilistic-graphical-models/Lecture_18_applications.md)
12. [materials/processed/probabilistic-graphical-models/Lecture_19_scorematching.md](../../../../materials/processed/probabilistic-graphical-models/Lecture_19_scorematching.md)

Note: current repo coverage is non-contiguous in lecture numbering; `Lectures 10-12`, `14`, and `16` are not currently present in `materials/processed/`.

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

3. Week 3: Graph bridge plus sampling
- Session 7: GNN message passing and links/differences versus PGM inference.
- Session 8: MCMC motivation, stationary distributions, MH and Gibbs mechanics.
- Session 9: Integration session on graph structure plus approximate sampling.
- Deliverable: model-selection guide (exact inference, BP, GNN framing, MCMC).

4. Week 4: Variational approximations and latent-variable learning
- Session 10: Gibbs variational principle, mean-field, and Bethe / local-polytope ideas.
- Session 11: ELBO viewpoint for latent-variable posteriors.
- Session 12: EM and variational EM, with Gaussian-mixture intuition.
- Deliverable: one-page ELBO / EM comparison sheet.

5. Week 5: Modern generative-modeling branch
- Session 13: GAN training, discriminator-distance intuition, and failure modes.
- Session 14: Conditional / application-driven GANs (AC-GAN, SRGAN, Pix2Pix).
- Session 15: Score matching, denoising score matching, and Langevin-style sampling.
- Deliverable: comparison grid for MCMC vs variational inference vs GANs vs score matching.

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
- Gate E: Explain ELBO and EM in one coherent latent-variable-learning story.
- Gate F: Contrast adversarial and score-based generative training at a high level.

## Outputs to Track

- Weekly misconception tracker (graph semantics, CI, inference, sampling).
- Growing formula-and-algorithm sheet.
- Readiness score (0-3) per module: directed, undirected, exact inference, MCMC, variational/EM, adversarial/score-based generative modeling.
