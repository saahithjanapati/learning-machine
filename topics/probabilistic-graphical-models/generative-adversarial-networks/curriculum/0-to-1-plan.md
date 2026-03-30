# Generative Adversarial Networks 0 to 1 Curriculum

Topic Path: `topics/probabilistic-graphical-models/generative-adversarial-networks`

## Source Trace

- Canonical manifest: `learning_system/SOURCE_MAP.json`
- Topic locator: `topics/probabilistic-graphical-models/generative-adversarial-networks/curriculum/0-to-1-plan.md`
- Transcript links: see source sections in this curriculum.

## Outcome

By the end of this topic, you should be able to explain GAN training as a two-player distribution-matching game, contrast JS-style and Wasserstein-style objectives, and discuss practical GAN variants and failure modes in plain language.

## Source Materials

- `materials/processed/probabilistic-graphical-models/Lecture_17_GAN.md`
- `materials/processed/probabilistic-graphical-models/Lecture_18_applications.md`

## Transcript Anchors

- GAN intuition as jointly learning a generator and a discriminator-defined notion of distance.
- DC-GAN minimax objective and its Jensen-Shannon interpretation.
- WGAN reformulation, critic strength, and stability tradeoffs.
- Mode collapse, vanishing gradients, and discriminator-capacity tension.
- Conditional GANs, AC-GANs, SRGAN, and Pix2Pix as concrete applications.

## Starting Assumption

Learner knows likelihood-based generative modeling basics and now needs the adversarial alternative plus its practical tradeoffs.

## Lesson Sequence

1. Lesson 1: Why go beyond likelihood
- Use the lecture’s VAE-vs-GAN contrast to motivate adversarial training.
- Explain why pixel-space losses and likelihood surrogates can produce blurry samples.
- Practice: compare maximum-likelihood and adversarial objectives at a high level.

2. Lesson 2: The GAN game
- Define generator, discriminator, and the DC-GAN minimax loss.
- Interpret what it means for the generator to fool the discriminator.
- Practice: identify which player is optimizing what in simple examples.

3. Lesson 3: JS vs Wasserstein viewpoints
- Explain optimal-discriminator reasoning and the role of JS divergence.
- Introduce WGAN and why a different distance notion can improve optimization behavior.
- Practice: contrast when each formulation gives useful gradients.

4. Lesson 4: Training pathologies and diagnostics
- Cover vanishing gradients, mode collapse, and discriminator-capacity tradeoffs.
- Discuss why visual sample quality is not enough for evaluation.
- Practice: diagnose likely failure modes from sample/evaluation descriptions.

5. Lesson 5: Conditional and application-driven GANs
- Study conditional GANs, AC-GANs, superresolution, and Pix2Pix.
- Emphasize how adversarial objectives are paired with task-specific structure.
- Practice: choose a GAN variant for a labeled, paired, or perceptual-generation task.

## Practice Ladder

- Level 1: Objective and role identification.
- Level 2: Divergence / distance interpretation.
- Level 3: Failure-mode diagnosis.
- Level 4: Variant selection for concrete applications.

## Mastery Checks

- Can explain the generator-discriminator game without slipping into vague metaphor only.
- Can distinguish DC-GAN and WGAN objectives at a conceptual level.
- Can explain mode collapse and why discriminator capacity creates a real tradeoff.
- Can match conditional / application-specific GAN variants to their training setup.

## Progression

Next topic: `topics/probabilistic-graphical-models/score-matching-and-energy-based-models`.
