# 36-700 Lesson: Estimation And Testing Roadmap

Source note: Based on the 36-700 processed notes for inference overview, Chapter 7 estimation, and Chapter 8 testing. Ingested on 2026-05-03.

## Table of Contents

- [Where Inference Starts](#where-inference-starts)
- [Parameters, Estimators, And Estimates](#parameters-estimators-and-estimates)
- [How To Judge An Estimator](#how-to-judge-an-estimator)
- [Maximum Likelihood](#maximum-likelihood)
- [Confidence Intervals](#confidence-intervals)
- [Hypothesis Tests](#hypothesis-tests)
- [The Big Connection](#the-big-connection)
- [Quick Check](#quick-check)

## Where Inference Starts

Inference starts when the data-generating distribution has something unknown.

Maybe the mean $\mu$ is unknown. Maybe the variance $\sigma^2$ is unknown. Maybe the whole distribution is unknown. The statistician observes data and tries to learn something about the unknown quantity.

The course's probability units tell us how data behave if the distribution is known. The inference units reverse the direction: data are observed, and the distribution or parameter must be inferred.

## Parameters, Estimators, And Estimates

A parameter is an unknown quantity attached to a model or population. Examples:

- the mean $\mu$ of a distribution;
- the variance $\sigma^2$;
- a Bernoulli probability $p$;
- a regression coefficient;
- a density value.

An estimator is a rule that maps data to a guess.

For data $X_1,\dots,X_n$, the sample mean

$$
\bar{X}=\frac{1}{n}\sum_{i=1}^n X_i
$$

is an estimator for $\mu$.

An estimate is the number you get after plugging in the observed data.

This distinction matters:

- estimator: random variable before seeing data;
- estimate: realized value after seeing data.

## How To Judge An Estimator

The main criteria are bias, variance, mean squared error, consistency, and asymptotic behavior.

Bias asks whether the estimator is correct on average:

$$
\mathrm{Bias}(\hat{\theta})=\mathbb{E}[\hat{\theta}]-\theta.
$$

Variance asks how much the estimator fluctuates:

$$
\mathrm{Var}(\hat{\theta}).
$$

Mean squared error combines both:

$$
\mathrm{MSE}(\hat{\theta})=\mathbb{E}[(\hat{\theta}-\theta)^2].
$$

Usually,

$$
\mathrm{MSE}(\hat{\theta})=\mathrm{Var}(\hat{\theta})+\mathrm{Bias}(\hat{\theta})^2.
$$

Consistency asks whether the estimator converges to the true parameter as $n$ grows.

Asymptotic normality asks whether the scaled error behaves approximately Normal for large $n$.

These ideas are the bridge between probability convergence and practical confidence intervals or tests.

## Maximum Likelihood

Maximum likelihood estimation chooses the parameter that makes the observed data most likely under the model.

If the likelihood is $L(\theta)$, then the MLE is

$$
\hat{\theta}_{\mathrm{MLE}} \in \arg\max_\theta L(\theta).
$$

Usually it is easier to maximize the log-likelihood:

$$
\ell(\theta)=\log L(\theta).
$$

The common workflow is:

1. write the likelihood from the model;
2. take logs;
3. differentiate with respect to the parameter;
4. solve the first-order condition;
5. check that the solution is valid.

MLEs matter because they are often consistent and asymptotically Normal under regularity conditions, which makes them useful for intervals and tests.

## Confidence Intervals

A confidence interval is a random interval built from data by a procedure with a long-run coverage guarantee.

For example, a rough large-sample interval often has the shape

$$
\hat{\theta} \pm z_{\alpha/2}\cdot \mathrm{SE}(\hat{\theta}).
$$

The standard error measures estimator fluctuation. The critical value controls the desired coverage level.

The most important interpretation:

> A 95% confidence procedure covers the true parameter in about 95% of repeated samples.

It does not mean there is a 95% probability that the fixed parameter lies in the already-computed interval under the frequentist interpretation.

## Hypothesis Tests

A hypothesis test formalizes a decision about evidence.

You start with:

- null hypothesis $H_0$;
- alternative hypothesis $H_1$;
- test statistic;
- rejection rule.

Type I error is rejecting $H_0$ when it is true. Type II error is failing to reject $H_0$ when the alternative is true. Power is the probability of rejecting under the alternative.

A p-value measures how extreme the observed data are under the null model. It is not the probability that the null hypothesis is true.

The main tests in this part of the course include Wald-style tests and likelihood-ratio tests. Both use the sampling behavior of estimators or likelihoods to decide whether the data are surprising under $H_0$.

## The Big Connection

Estimation and testing are not separate worlds.

Both depend on sampling distributions. If you know how an estimator fluctuates, you can build a confidence interval. If you know how a test statistic behaves under the null, you can build a rejection rule.

The deep structure is:

1. define a model;
2. identify the unknown parameter;
3. construct an estimator or statistic;
4. understand its distribution or approximation;
5. make an interval or decision;
6. interpret the result in context.

That is the core of mathematical statistics.

## Quick Check

1. What is the difference between an estimator and an estimate?
2. Why can a biased estimator sometimes still be useful?
3. Why do we often maximize log-likelihood instead of likelihood?
4. What does 95% confidence mean?
5. What is the difference between a p-value and the probability that $H_0$ is true?
