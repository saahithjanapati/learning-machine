# MCMC 0 to 1 Curriculum

Topic Path: `topics/probabilistic-graphical-models/mcmc`

## Source Trace

- Canonical manifest: `learning_system/SOURCE_MAP.json`
- Topic locator: `topics/probabilistic-graphical-models/mcmc/curriculum/0-to-1-plan.md`
- Transcript links: see source sections in this curriculum.

## Outcome

By the end of this topic, you should be able to explain why MCMC is needed, describe core Markov chain concepts, and carry out basic Metropolis-Hastings and Gibbs sampling procedures on toy problems.

## Source Materials

- `materials/processed/probabilistic-graphical-models/Lecture_9_MCMC_intro.md`

## Transcript Anchors

- Inference-hardness framing and motivation for approximate methods (MCMC/VI).
- Partition-function estimation example and relation to sampling difficulty.
- Stationary-distribution design principle for MCMC chains.
- Metropolis-Hastings algorithm steps, acceptance rule, and detailed-balance argument.
- Gibbs sampling introduction as conditional-update alternative.

## Starting Assumption

Learner understands inference goals but is new to sampling-based approximation.

## Lesson Sequence

1. Lesson 1: Why sampling and why MCMC
- Motivate sampling when exact inference is intractable.
- Introduce state space, transition kernels, and stationary distributions.
- Practice: explain approximation rationale in plain language.

2. Lesson 2: Markov chain fundamentals
- Cover irreducibility, aperiodicity, and convergence intuition.
- Explain detailed balance as a practical design principle.
- Practice: check simple transition rules for validity properties.

3. Lesson 3: Metropolis-Hastings workflow
- Walk proposal, acceptance ratio, and accept/reject mechanics.
- Emphasize target/proposal distinction and common mistakes.
- Practice: hand-calculate acceptance probabilities in toy setups.

4. Lesson 4: Gibbs sampling intuition
- Show coordinate-wise conditional sampling updates.
- Compare Gibbs and MH tradeoffs in model-specific contexts.
- Practice: execute short Gibbs chains on tiny discrete models.

5. Lesson 5: Diagnostics and practical judgment
- Discuss burn-in, mixing, autocorrelation, and trace interpretation.
- Teach failure-mode detection before trusting estimates.
- Practice: interpret synthetic chain diagnostics.

## Practice Ladder

- Level 1: Conceptual explanation of MCMC motivation.
- Level 2: Transition-rule validity checks.
- Level 3: Manual MH/Gibbs step computations.
- Level 4: Diagnostic interpretation and method choice.

## Mastery Checks

- Can justify MCMC usage in one clear argument.
- Can describe MH and Gibbs without mixing up update steps.
- Can compute acceptance ratios correctly on simple examples.
- Can identify common warning signs in chain behavior.

## Progression

Next topic: `topics/probabilistic-graphical-models/gnns-and-pgms`.
