# Score Matching and Energy-Based Models 0 to 1 Curriculum

Topic Path: `topics/probabilistic-graphical-models/score-matching-and-energy-based-models`

## Source Trace

- Canonical manifest: `learning_system/SOURCE_MAP.json`
- Topic locator: [topics/probabilistic-graphical-models/score-matching-and-energy-based-models/curriculum/0-to-1-plan.md](0-to-1-plan.md)
- Transcript links: see source sections in this curriculum.

## Outcome

By the end of this topic, you should be able to explain how score matching avoids partition-function gradients during training, relate denoising score matching to practical score learning, and describe how Langevin-style samplers use learned scores at generation time.

## Source Materials

- [materials/processed/probabilistic-graphical-models/Lecture_19_scorematching.md](../../../../materials/processed/probabilistic-graphical-models/Lecture_19_scorematching.md)

## Transcript Anchors

- Likelihood training of EBMs and the partition-function-gradient bottleneck.
- Score function `nabla_x log p(x)` and the core score-matching objective.
- Integration-by-parts trick that removes the unknown data-score term.
- Sliced and denoising score matching as computational / robustness variants.
- Langevin and annealed Langevin dynamics for sampling from learned score fields.

## Starting Assumption

Learner has seen likelihood-based and adversarial generative modeling, but is new to score-based training objectives for EBMs.

## Lesson Sequence

1. Lesson 1: Why score matching exists
- Revisit why MLE for EBMs is expensive because of `log Z`.
- Introduce the score function and the idea of matching gradients of log densities.
- Practice: identify which term becomes cheaper under score matching.

2. Lesson 2: Deriving the objective
- Expand the squared-error loss and use the integration-by-parts trick.
- Explain why the true data score disappears from the final trainable objective.
- Practice: trace each term in the derivation and state which depend on `theta`.

3. Lesson 3: Practical variants
- Cover sliced score matching and why Jacobian costs matter.
- Introduce denoising score matching and the noisy-data training view.
- Practice: compare base score matching vs sliced vs denoising in workload and intuition.

4. Lesson 4: Sampling with learned scores
- Review Langevin dynamics as gradient-plus-noise sampling.
- Explain why annealed Langevin helps with multimodal structure and mode balance.
- Practice: reason about when plain Langevin will mix poorly.

5. Lesson 5: Limits and comparison
- Contrast likelihood, adversarial, and score-matching training in one frame.
- Discuss where score matching still inherits sampling difficulty at generation time.
- Practice: choose the right generative-learning lens for a model description.

## Practice Ladder

- Level 1: Objective and notation fluency.
- Level 2: Derivation reasoning with integration by parts.
- Level 3: Sampling-dynamics interpretation.
- Level 4: Method comparison across generative paradigms.

## Mastery Checks

- Can explain why score matching removes `nabla_theta log Z` from training.
- Can describe denoising score matching without confusing it with standard reconstruction loss.
- Can explain what Langevin dynamics is using the learned score field.
- Can compare score matching to maximum likelihood and GAN training coherently.

## Progression

Next topic: `topics/probabilistic-graphical-models/course-catchup`.
