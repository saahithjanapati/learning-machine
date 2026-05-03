# Probability and Statistics - 36-700 (CMU) 0 -> 1 Curriculum

Topic Path: `topics/probability-and-statistics-36-700-cmu`

## Source Trace

- Canonical manifest: `learning_system/SOURCE_MAP.json`
- Raw source manifest: `materials/archive/probability-and-statistics-36-700-cmu/source-manifest.json`
- Ingest report: materials/processed/probability-and-statistics-36-700-cmu/_INGEST_REPORT.md
- Public course reference: `https://www.stat.cmu.edu/~siva/teaching/700/`

## Source Materials

- `materials/processed/probability-and-statistics-36-700-cmu/_canvas_modules_manifest.md`
- `materials/processed/probability-and-statistics-36-700-cmu/_gradescope_dashboard.md`
- `materials/processed/probability-and-statistics-36-700-cmu/canvas-04-01-13080649-700_syllabus_Aug22_2025.md`
- `materials/processed/probability-and-statistics-36-700-cmu/canvas-06-01-13085976-Chapter1.Prob.md`
- `materials/processed/probability-and-statistics-36-700-cmu/canvas-07-01-13085977-Chapter2.RVs.md`
- `materials/processed/probability-and-statistics-36-700-cmu/canvas-08-01-13128443-Chapter3.Expectations.md`
- `materials/processed/probability-and-statistics-36-700-cmu/canvas-09-01-13173316-Chapter4.Inequalities.md`
- `materials/processed/probability-and-statistics-36-700-cmu/canvas-10-02-13210493-Chapter5.cvg.md`
- `materials/processed/probability-and-statistics-36-700-cmu/canvas-11-02-13254388-chapter6.inference.overview.md`
- `materials/processed/probability-and-statistics-36-700-cmu/canvas-12-07-13301500-Chapter7.Estimation.md`
- `materials/processed/probability-and-statistics-36-700-cmu/canvas-13-07-13454057-Chapter8.testing.md`
- `materials/processed/probability-and-statistics-36-700-cmu/canvas-14-03-13601946-Chapter9.DensEst.md`
- `materials/processed/probability-and-statistics-36-700-cmu/canvas-15-03-13632515-Chapter10.npreg.md`

## Course Identity

36-700 is a one-semester probability and mathematical statistics course. The local 2025 syllabus frames it as a concise statistical inference course with enough probability theory to support inference. The public CMU 36-700 reference describes fundamentals of theoretical statistics, including concentration, convergence, point and interval estimation, maximum likelihood, hypothesis testing, Bayesian inference, nonparametric statistics, and bootstrap resampling.

This curriculum treats 36-700 as the bridge from "I know some probability formulas" to "I can reason about estimators, tests, uncertainty, and asymptotic behavior."

## Target Outcome

By the end, the learner should be able to:

- manipulate events, conditional probabilities, independence, random variables, CDFs, PDFs, and PMFs;
- compute expectations, variances, covariance, conditional expectations, and moment generating functions;
- use probability inequalities and convergence concepts to support statistical arguments;
- explain what an estimator is and evaluate bias, variance, consistency, and asymptotic behavior;
- derive and interpret maximum likelihood estimators;
- build confidence intervals and hypothesis tests from sampling distributions and asymptotic approximations;
- understand nonparametric density/regression ideas and the bias-variance tradeoff;
- use practice exams and graded work to target weak proof and computation habits.

## Prerequisites

- Multivariable calculus.
- Basic linear algebra.
- Basic exposure to data analysis and statistical reasoning.
- Comfort with summations, integrals, inequalities, and algebraic manipulation.
- Willingness to write careful mathematical explanations, not only final numeric answers.

## Module 0: Course Setup And Statistical Thinking

Objective: Understand what 36-700 is trying to teach and how to study it.

Core sources:

- `canvas-04-01-13080649-700_syllabus_Aug22_2025.md`
- `_canvas_modules_manifest.md`
- `materials/processed/probability-and-statistics-36-700-cmu/_gradescope_dashboard.md`

Lessons:

- `topics/probability-and-statistics-36-700-cmu/lessons/2026-05-03-36-700-course-roadmap.md`

Exit check:

- Explain how 36-700 differs from a purely applied statistics class and from the more advanced 36-705 path.
- Build a weekly loop: read notes, solve examples, do homework, correct errors, drill weak concepts.

## Module 1: Probability Foundations

Objective: Build a reliable base for events, probability laws, conditioning, independence, and Bayes' rule.

Core sources:

- `canvas-06-01-13085976-Chapter1.Prob.md`

Lessons:

- `topics/probability-and-statistics-36-700-cmu/lessons/2026-05-03-36-700-probability-random-variables.md`

Exit check:

- Use set operations and probability axioms to derive union, complement, and Bonferroni-style statements.
- Compute conditional probabilities and identify independence correctly.

## Module 2: Random Variables And Distributions

Objective: Move from events to functions of outcomes and their induced distributions.

Core sources:

- `canvas-07-01-13085977-Chapter2.RVs.md`

Content targets:

- random variables as functions from sample spaces;
- CDFs, PMFs, and PDFs;
- discrete vs continuous distributions;
- famous families: Bernoulli, Binomial, Geometric, Uniform, Gaussian;
- transformations of random variables.

Exit check:

- Given a simple experiment, define a random variable and derive its PMF or CDF.
- Explain why a continuous random variable has probability zero at a point but positive probability over intervals.

## Module 3: Expectation, Moments, And Conditioning

Objective: Learn the numerical summaries that drive inference.

Core sources:

- `canvas-08-01-13128443-Chapter3.Expectations.md`

Content targets:

- expectation as weighted average or integral;
- variance and covariance;
- conditional expectation;
- moment generating functions;
- law of total expectation and variance.

Exit check:

- Compute expectation and variance from a PMF/PDF.
- Use conditional expectation to simplify a two-stage random experiment.

## Module 4: Inequalities And Convergence

Objective: Learn why large-sample statistics can be justified.

Core sources:

- `canvas-09-01-13173316-Chapter4.Inequalities.md`
- `canvas-10-02-13210493-Chapter5.cvg.md`

Content targets:

- Markov and Chebyshev inequalities;
- concentration intuition;
- convergence in probability and distribution;
- weak law of large numbers;
- central limit theorem;
- how convergence statements support approximations.

Exit check:

- Choose the right inequality for a tail-probability bound.
- Distinguish convergence in probability from convergence in distribution.

## Module 5: Inference Overview And Estimation

Objective: Understand what it means to estimate an unknown population quantity from data.

Core sources:

- `canvas-11-02-13254388-chapter6.inference.overview.md`
- `canvas-12-07-13301500-Chapter7.Estimation.md`

Lessons:

- `topics/probability-and-statistics-36-700-cmu/lessons/2026-05-03-36-700-estimation-testing-roadmap.md`

Content targets:

- parameters, estimators, and estimates;
- bias, variance, MSE, consistency;
- method of moments;
- maximum likelihood;
- asymptotic normality;
- confidence intervals.

Exit check:

- Derive an MLE for a one-parameter model.
- Compare two estimators using bias, variance, and MSE.

## Module 6: Hypothesis Testing

Objective: Learn how statistical evidence is formalized as tests, rejection regions, errors, and p-values.

Core sources:

- `canvas-13-07-13454057-Chapter8.testing.md`
- Wald/LRT testing slides and cheat sheets in the processed folder

Content targets:

- null and alternative hypotheses;
- type I and type II errors;
- power;
- p-values;
- Wald tests;
- likelihood-ratio tests;
- common tests and asymptotic approximations.

Exit check:

- Translate a scientific question into $H_0$ and $H_1$.
- Compute a test statistic and state the decision in context.

## Module 7: Nonparametric Density And Regression

Objective: Learn flexible estimation without committing to a small parametric family.

Core sources:

- `canvas-14-03-13601946-Chapter9.DensEst.md`
- `canvas-15-03-13632515-Chapter10.npreg.md`

Content targets:

- histograms and kernel density estimation;
- bandwidth as smoothing parameter;
- nonparametric regression;
- train/test thinking and optimism;
- bias-variance tradeoff.

Exit check:

- Explain what happens when bandwidth is too small or too large.
- Compare parametric and nonparametric approaches.

## Module 8: Exam And Error-Analysis Loop

Objective: Convert conceptual knowledge into reliable performance under exam constraints.

Core sources:

- homework solutions,
- practice midterms,
- practice final,
- available graded copies in the processed source folder.

Cadence:

- Maintain an error log with concept tag, false move, corrected reasoning, and next drill.
- Redo missed questions after 48 hours without looking at the solution.
- Use official cheat sheets as recall targets, not as substitutes for understanding.

Exit check:

- Complete one timed mixed set covering probability, random variables, convergence, estimation, and testing.
- Explain every missed step in words before redoing the algebra.

## Session Cadence

- Session length: 60-90 minutes.
- Sessions per week: 3 for active course support; 2 for review.
- Practice ratio progression:
  - early: 50% concept rebuild, 50% computations;
  - middle: 35% concept review, 65% derivations and homework-style problems;
  - late: 20% review, 80% timed mixed practice.

## Assessment Plan

- Quick checks: definitions, short computations, distribution identification.
- Medium practice: derivations, estimator comparisons, test construction.
- Capstone task: timed mixed exam review plus a one-page error map linking mistakes to modules.
