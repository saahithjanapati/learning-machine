# Probabilistic Graphical Models Late-Course Module Map

Date: `2026-03-30`
Mode: `learn`
Coverage: processed late-course lectures currently available in this repo: `Lecture 13`, `Lecture 15`, `Lecture 17`, `Lecture 18`, and `Lecture 19`.

## Coverage Note

This module map is based only on lectures that are currently present in `materials/processed/probabilistic-graphical-models/`.

The course numbering is not contiguous in the repo right now:
- present: `Lecture_13_variational`, `Lecture_15_EM`, `Lecture_17_GAN`, `Lecture_18_applications`, `Lecture_19_scorematching`
- not currently ingested here: `Lectures 10-12`, `14`, and `16`

## Module 1: Variational Inference and EM

Topic path: `topics/probabilistic-graphical-models/variational-inference-and-em`

Source transcripts:
- [materials/processed/probabilistic-graphical-models/Lecture_13_variational.md](../../../materials/processed/probabilistic-graphical-models/Lecture_13_variational.md)
- [materials/processed/probabilistic-graphical-models/Lecture_15_EM.md](../../../materials/processed/probabilistic-graphical-models/Lecture_15_EM.md)

Focus questions:
- How does the Gibbs variational principle turn `log Z` or `log p(x)` into an optimization problem?
- What is the difference between mean-field inner relaxations and local-polytope / Bethe-style outer relaxations?
- How do ELBO, EM, and variational EM fit into one template?

## Module 2: Generative Adversarial Networks

Topic path: `topics/probabilistic-graphical-models/generative-adversarial-networks`

Source transcripts:
- [materials/processed/probabilistic-graphical-models/Lecture_17_GAN.md](../../../materials/processed/probabilistic-graphical-models/Lecture_17_GAN.md)
- [materials/processed/probabilistic-graphical-models/Lecture_18_applications.md](../../../materials/processed/probabilistic-graphical-models/Lecture_18_applications.md)

Focus questions:
- Why can adversarial training produce sharper samples than likelihood-heavy approaches?
- How do DC-GAN and WGAN differ in what they optimize?
- What changes when GANs are conditioned on labels or paired inputs?

## Module 3: Score Matching and EBMs

Topic path: `topics/probabilistic-graphical-models/score-matching-and-energy-based-models`

Source transcripts:
- [materials/processed/probabilistic-graphical-models/Lecture_19_scorematching.md](../../../materials/processed/probabilistic-graphical-models/Lecture_19_scorematching.md)

Focus questions:
- How does score matching avoid partition-function gradients during training?
- Why do denoising and sliced variants matter in practice?
- Why is sampling still a real issue even after score-based training?

## Suggested Study Order

1. `Lecture_13_variational` -> `Lecture_15_EM`
2. `Lecture_17_GAN` -> `Lecture_18_applications`
3. `Lecture_19_scorematching`

## Use With

- Root overview: [topics/probabilistic-graphical-models/README.md](../README.md)
- Master curriculum: [topics/probabilistic-graphical-models/curriculum/0-to-1-master-plan.md](../curriculum/0-to-1-master-plan.md)
- Catch-up path: [topics/probabilistic-graphical-models/course-catchup/curriculum/0-to-1-plan.md](../course-catchup/curriculum/0-to-1-plan.md)
