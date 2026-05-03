# 10-715 Lesson: Supervised Learning, Loss, Risk, And ERM

Source note: Based on the 10-715 "intro to intro to ML" processed lecture note and the 10-715 curriculum path. Ingested on 2026-05-03.

## Table of Contents

- [The Basic Problem](#the-basic-problem)
- [Training Data](#training-data)
- [Hypothesis Classes](#hypothesis-classes)
- [Loss Functions](#loss-functions)
- [Risk](#risk)
- [Empirical Risk Minimization](#empirical-risk-minimization)
- [Why This Is The Course's Grammar](#why-this-is-the-courses-grammar)
- [Quick Check](#quick-check)

## The Basic Problem

Supervised learning starts with examples whose answers are known.

Each example has an input $x$ and a label $y$. In digit recognition, $x$ might be a vector of pixel values and $y$ might be one of the digits $0$ through $9$. In regression, $x$ might describe a house or a weather condition and $y$ might be a real-valued quantity to predict.

The learning problem is not just "find a pattern." More precisely, it is:

> Use labeled examples to choose a function that will make good predictions on future examples drawn from the same underlying process.

That phrase contains almost the whole course: examples, functions, prediction quality, future data, and assumptions about how data is generated.

## Training Data

The training set is written as

$$
\{(x^{(i)}, y^{(i)})\}_{i=1}^n.
$$

Here:

- $x^{(i)} \in \mathcal{X}$ is the input;
- $y^{(i)} \in \mathcal{Y}$ is the label;
- $n$ is the number of training examples.

The set $\mathcal{X}$ is the input space. The set $\mathcal{Y}$ is the output space.

For binary classification, $\mathcal{Y}$ is often $\{-1, 1\}$. For multiclass classification, it might be $\{0,1,\dots,9\}$. For regression, it is often $\mathbb{R}$.

## Hypothesis Classes

A hypothesis class $\mathcal{H}$ is the set of candidate functions the learner is allowed to choose from.

For linear regression:

$$
\mathcal{H} = \{h_{w,b}(x) = w^\top x + b : w \in \mathbb{R}^d, b \in \mathbb{R}\}.
$$

For linear binary classification:

$$
\mathcal{H} = \{h_{w,b}(x) = \mathrm{sign}(w^\top x + b) : w \in \mathbb{R}^d, b \in \mathbb{R}\}.
$$

The hypothesis class is a modeling choice. If $\mathcal{H}$ is too small, it may not contain any good predictor. If it is too large, it may fit training noise and generalize poorly. Much of ML theory is about this tension.

## Loss Functions

A loss function measures how bad a prediction is.

If the true label is $y$ and the prediction is $\hat{y}$, then

$$
\ell(\hat{y}, y)
$$

is the penalty for that prediction.

For binary classification, the most direct loss is zero-one loss:

$$
\ell(\hat{y}, y) = \mathbf{1}\{y \ne \hat{y}\}.
$$

Zero-one loss matches classification accuracy, but it is hard to optimize. So ML often replaces it with a surrogate loss:

$$
\ell_{\mathrm{hinge}}(\hat{y}, y) = \max\{0, 1 - y\hat{y}\},
$$

$$
\ell_{\mathrm{logistic}}(\hat{y}, y) = \log(1 + \exp(-y\hat{y})),
$$

$$
\ell_{\mathrm{exp}}(\hat{y}, y) = \exp(-y\hat{y}).
$$

This is a recurring move: choose a loss that is mathematically manageable but still aligned with the real task.

## Risk

The true goal is not to do well on the training set. The true goal is to do well on future data.

If examples are drawn from an unknown distribution $P_{x,y}$, the risk of a hypothesis $h$ is

$$
R(h) = \mathbb{E}_{(x,y) \sim P_{x,y}}[\ell(h(x), y)].
$$

Risk is the expected loss on new data from the data-generating distribution.

The problem is that $P_{x,y}$ is unknown. If we knew the true distribution, we could optimize the true risk directly. In real learning, we only see samples.

## Empirical Risk Minimization

Empirical risk replaces the unknown expectation with an average over the training set:

$$
\hat{R}_n(h) = \frac{1}{n}\sum_{i=1}^n \ell(h(x^{(i)}), y^{(i)}).
$$

Empirical risk minimization, or ERM, chooses

$$
\hat{h} \in \arg\min_{h \in \mathcal{H}} \hat{R}_n(h).
$$

ERM is natural because the training set is what we actually have. But it creates the central question:

> When does low empirical risk imply low true risk?

That question leads directly to generalization theory, concentration inequalities, capacity control, and bias-complexity tradeoffs.

## Why This Is The Course's Grammar

Almost every later method can be read through the same template.

For perceptrons, the hypothesis class is linear classifiers and the update tries to fix mistakes.

For SVMs, the hypothesis class is still linear classifiers, but the objective chooses a large-margin separator.

For kernels, the hypothesis class becomes linear in a transformed feature space.

For neural networks, the hypothesis class becomes a large nonlinear function class.

For reinforcement learning, the setup changes because the learner does not simply receive labeled examples; it acts and receives reward.

So the first lesson is not just introductory vocabulary. It is the coordinate system for the rest of the course.

## Quick Check

1. What are $\mathcal{X}$, $\mathcal{Y}$, and $\mathcal{H}$?
2. Why is zero-one loss hard to optimize?
3. What is the difference between risk and empirical risk?
4. Why does ERM need a generalization theory?
5. Give one example where choosing too small a hypothesis class causes failure.
