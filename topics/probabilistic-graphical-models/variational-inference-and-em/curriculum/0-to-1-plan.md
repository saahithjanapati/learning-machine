# Variational Inference and EM 0 to 1 Curriculum

Topic Path: `topics/probabilistic-graphical-models/variational-inference-and-em`

## Source Trace

- Canonical manifest: `learning_system/SOURCE_MAP.json`
- Topic locator: `topics/probabilistic-graphical-models/variational-inference-and-em/curriculum/0-to-1-plan.md`
- Transcript links: see source sections in this curriculum.

## Outcome

By the end of this topic, you should be able to explain why variational methods turn inference into optimization, derive the ELBO viewpoint for latent-variable models, and describe how EM / variational EM alternate between posterior approximation and parameter updates.

## Source Materials

- `materials/processed/probabilistic-graphical-models/Lecture_13_variational.md`
- `materials/processed/probabilistic-graphical-models/Lecture_15_EM.md`

## Transcript Anchors

- Gibbs variational principle as an optimization formula for `log Z`.
- Mean-field inner relaxations solved with coordinate ascent / CAVI.
- Outer relaxations via the local polytope, Bethe entropy, and Bethe free energy.
- ELBO decomposition `log p(x) = ELBO + KL(q || p(z|x))`.
- EM as the exact-posterior E-step limit, with GMM and LDA-style examples.

## Starting Assumption

Learner already understands basic exact inference and MCMC motivation, but is new to the optimization view of approximate inference.

## Lesson Sequence

1. Lesson 1: Gibbs variational principle and KL geometry
- Reframe partition-function approximation as optimization over distributions.
- Interpret `KL(q || p)` as the gap between a variational objective and `log Z`.
- Practice: rewrite small energy-based models in variational form.

2. Lesson 2: Mean-field and coordinate ascent
- Introduce product-family restrictions and why they are computationally attractive.
- Derive coordinate updates and connect them to CAVI intuition.
- Practice: hand-run one or two mean-field updates on toy pairwise models.

3. Lesson 3: Outer relaxations and Bethe viewpoint
- Contrast inner relaxations with local-polytope outer relaxations.
- Explain Bethe entropy, Bethe free energy, and why loopy BP appears here.
- Practice: classify approximations as lower-bound, upper/outer, or neither.

4. Lesson 4: Variational posteriors and the ELBO
- Move from partition functions to latent-variable posterior approximation.
- Derive the ELBO and interpret the role of the KL term.
- Practice: translate between `log p(x)`, ELBO, and posterior-projection language.

5. Lesson 5: EM and variational EM
- Explain E-step and M-step updates conceptually and algebraically.
- Distinguish exact EM from variational inference via the richness of `Q`.
- Practice: work through responsibility-style updates for Gaussian mixtures.

6. Lesson 6: Modern examples and limits
- Study LDA-style variational EM and why custom derivations become tedious.
- Introduce ADVI as an automation response to model-specific update burden.
- Practice: decide whether a model calls for exact EM, variational EM, or another approximation.

## Practice Ladder

- Level 1: Variational-principle and ELBO interpretation.
- Level 2: Mean-field/CAVI update mechanics.
- Level 3: EM step derivations on latent-variable models.
- Level 4: Comparing approximation families and failure modes.

## Mastery Checks

- Can explain the variational objective without confusing it with MAP.
- Can distinguish inner vs outer relaxations and place Bethe in the right bucket.
- Can derive the ELBO decomposition and interpret the `KL(q || p)` gap term.
- Can explain why EM is a special case of the broader variational-learning template.

## Progression

Next topic: `topics/probabilistic-graphical-models/generative-adversarial-networks`.
