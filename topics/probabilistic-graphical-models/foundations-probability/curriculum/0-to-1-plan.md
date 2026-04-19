# Foundations Probability 0 to 1 Curriculum

Topic Path: `topics/probabilistic-graphical-models/foundations-probability`

## Source Trace

- Canonical manifest: `learning_system/SOURCE_MAP.json`
- Topic locator: [topics/probabilistic-graphical-models/foundations-probability/curriculum/0-to-1-plan.md](0-to-1-plan.md)
- Transcript links: see source sections in this curriculum.

## Outcome

By the end of this topic, you should be able to manipulate core probability expressions, read factorized joint distributions, and explain conditional independence statements that later power graphical models.

## Source Materials

- [materials/processed/probabilistic-graphical-models/Lecture_1_intro.md](../../../../materials/processed/probabilistic-graphical-models/Lecture_1_intro.md)

## Transcript Anchors

- Course framing of exact inference toolkit: variable elimination and belief propagation.
- Intro motivation for sampling from unnormalized distributions `p(x) proportional exp(f(x))`.
- Early overview of Gibbs/Metropolis-Hastings and mixing-time considerations.
- Positioning of inference tasks (sampling, marginals, partition functions) as computationally hard.
- Core notation and probabilistic language used in later model-specific lectures.

## Starting Assumption

Learner has minimal recent probability exposure and needs heavy exposition first.

## Lesson Sequence

1. Lesson 1: Probability language reboot
- Review random variables, events, joint/marginal/conditional probability.
- Clarify notation that appears repeatedly in later PGM lectures.
- Practice: translation drills from words to formal probability expressions.

2. Lesson 2: Bayes rule and factorization
- Build fluency with chain rule and Bayes updates.
- Interpret factorized expressions as structured models, not just algebra.
- Practice: derive conditionals from joint factorizations.

3. Lesson 3: Conditional independence fundamentals
- Define independence vs conditional independence carefully.
- Use small examples to show why CI reduces model complexity.
- Practice: truth-check CI statements on tabular toy distributions.

4. Lesson 4: Expectation-based reasoning and prep for PGMs
- Refresh expectation, variance, and simple expectation manipulations.
- Connect expectations to inference questions asked in PGMs.
- Practice: compute small expectations from factored distributions.

## Practice Ladder

- Level 1: Basic probability manipulation.
- Level 2: Bayes and chain-rule derivations.
- Level 3: Conditional independence checks.
- Level 4: Short inference-style probability queries.

## Mastery Checks

- Can convert plain-language statements into probability notation.
- Can derive missing factors/conditionals from factorizations.
- Can explain CI clearly and distinguish it from plain independence.
- Can complete foundational manipulations without getting stuck on notation.

## Progression

Next topic: `topics/probabilistic-graphical-models/directed-graphical-models`.
