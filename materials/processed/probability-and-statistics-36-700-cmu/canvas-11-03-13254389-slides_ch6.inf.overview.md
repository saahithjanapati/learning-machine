# canvas-11-03-13254389-slides_ch6.inf.overview

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-11-03-13254389-slides_ch6.inf.overview.pdf`
Duplicate equivalents: `canvas-11-03-13254389-slides_ch6.inf.overview.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 15

## Page 1
### Content
# Statistical Inference Overview
Ref: Wasserman Section 6

First revisit: Lecture 1 slides pages 1-3

### Contents
1. **Point Estimation** (Page 2)
2. **Confidence Sets** (Page 8)
3. **Hypothesis testing** (Page 12)

### Visual Description
Text-only slide on a grid background.

---

## Page 2
### Content
### 36-700 Prelude/Big Picture
**Probability vs Statistics: what is the difference?**

[Hand-drawn diagram: Two circles. The left circle is labeled "Data-generating process". The right circle is labeled "Observed data". An arrow points from the left circle to the right circle, labeled "Prob. Th.". An arrow points from the right circle to the left circle, labeled "Stat. Inf."]

**Probability:** What is the basic problem that we study in probability?
*Handwritten note:* Given a d.g.p, what are the properties of the outcomes?

**Statistics:** What is the basic problem that we study in statistics?
*Handwritten note:* Given the outcomes, what can we say about the d.g.p?
*Handwritten note:* Stat. inf. --- inverse of prob.

*Think:* What is the role of *models* in statistics?
What are the role of parameters and random variables in statistical inference?

### Visual Description
The slide features a grid background with printed text and extensive handwritten annotations in blue and red. A diagram shows the relationship between a data-generating process and observed data via probability theory and statistical inference.

---

## Page 3
### Content
Given a sample, $X_1, \dots, X_n \sim F$,
*Handwritten note:* $X_1, \dots, X_n$ is "data". $F$ is the underlying distr. (unknown). $X_i$ are RVS.

$F \in \mathcal{F}$ the set of possible distributions.
e.g.
$$\mathcal{F} = \left\{ f(x; \mu, \sigma) = \frac{1}{\sigma \sqrt{2\pi}} \exp \left\{ -\frac{(x-\mu)^2}{2\sigma^2} \right\} ; \mu \in \mathbb{R}, \sigma > 0, x \in \mathbb{R} \right\}$$
*Handwritten note:* Parameters of interest (POIs) $\theta = (\mu, \sigma)$

**Goal:** What can we infer about $F$?

**Three broad types of inference:**
1. **point estimation** — *Handwritten note:* single best guess of quantity of interest $\hat{\theta}(X_1, \dots, X_n)$. ($\hat{\theta}$ is a RV)
2. **interval estimation** — *Handwritten note:* $[L(X_1, \dots, X_n), U(X_1, \dots, X_n)]$. ($L, U$ are RVS)
3. **test of hypotheses.** — *Handwritten note:* e.g. $H_0: \theta = \theta_0$ vs $H_a: \theta \neq \theta_0$. Base decision on "test-statistic" $T(X_1, \dots, X_n)$. ($T$ is a RV)

*Handwritten note at bottom:* properties of RVS? "good" estimator? convergence of $\hat{\theta}$ as $n \to \infty$?

### Visual Description
The slide has a grid background with highlighted text and significant handwritten notes in blue and red. Mathematical formulas for the Gaussian distribution and various types of inference are shown.

---

## Page 4
### Content
**Parametric model $F$:** described by a finite number of parameters.
1. Gaussian model above: two-parameter model.
2. Bernoulli model: one-parameter model:
   $$\mathcal{F} = \{ \mathbb{P}_p(X = x) = p^x(1 - p)^{1-x} : 0 \le p \le 1, x = \{0, 1\} \}$$

If we know/learn from data the value of the parameters, then we know the distribution completely.

**Non-parametric model $F$:** Not described by a finite number of parameters.
1. **CDF** (cumulative distribution function) estimation: the model consists of any valid CDF, i.e.
   *Handwritten note:* CDF $F(x) \stackrel{\text{def}}{=} \mathbb{P}(X \le x)$
   $$\mathcal{F} = \{ F : 0 \le F \le 1, F \text{ non-decreasing and right-continuous}, \lim_{x \to -\infty} F(x) = 0, \lim_{x \to +\infty} F(x) = 1 \}$$
   A "good estimator" is the empirical distribution function (EDF).
   *Handwritten note:* EDF $\hat{F}_n(x) \stackrel{\text{def}}{=} \frac{1}{n} \sum_{i=1}^n I(X_i \le x)$ [followed by a sketch of a step function].

2. **PDF** (probability density function) estimation: the class of all possible densities is too big for this problem to be well posed
   $\implies$ we assume some smoothness on the density, e.g.
   $$\mathcal{F} = \left\{ f : \int f(x)dx = 1, f(x) \ge 0, \int (f''(x))^2 dx < \infty \right\}$$
   *Handwritten note:* ex. of nonparametric estimator of pdfs: histogram estimator [followed by a sketch of a histogram].

### Visual Description
Grid background with highlighted text and handwritten notes in blue. Includes mathematical definitions for parametric and non-parametric models, as well as sketches of an EDF step function and a histogram.

---

## Page 5
### Content
## 1 Point Estimation
Find single "best guess" of the value of some quantity of interest $\theta$, e.g.
* $\theta = (\mu, \sigma^2)$ or $\theta = p$ for parametric models
* $\theta = f$ or $\theta = F$ for non-parametric models
* any other function of the parameters, e.g.
  - $\theta = \log(p/(1 - p))$,
  - $\theta = F^{-1}(0.75) - F^{-1}(0.25)$, interquartile range of a random variable

We use $\hat{\theta}$ or $\hat{\theta}_n$ to denote a point estimator.

**$\hat{\theta}$ is a random variable** because it is a function of the data $X_1, \dots, X_n$:
$$\hat{\theta}_n = g(X_1, \dots, X_n),$$
E.g. $\hat{\theta} = \bar{X}_n$.

### Visual Description
Text-only slide on a grid background.

---

## Page 6
### Content
We like estimators that have good properties, e.g.
* **no or low bias**
  $$\text{bias} = b(\hat{\theta}_n) = \mathbb{E}_\theta(\hat{\theta}_n) - \theta,$$
* **small variance**
  $$v(\hat{\theta}_n) = \mathbb{E}_\theta(\hat{\theta}_n - \mathbb{E}_\theta(\hat{\theta}_n))^2,$$
* **consistency**, i.e. $\hat{\theta}_n$ converges in probability to $\theta$.

**Remark on notation:** $\theta$ is typically a function of $F$, i.e., $\theta = \theta(F)$; e.g.
Mean: $\theta(F) = \int x dF(x)$
Inter-quartile range: $\theta(F) = F^{-1}(0.75) - F^{-1}(0.25)$ and
PDF: $\theta(F) = f = dF$

$\mathbb{E}(\cdot)$ and $\mathbb{P}(\cdot)$ refer to the randomness in the data $X_1, \dots, X_n$ iid from $F$.
Sometimes we use $\mathbb{E}_\theta(\cdot)$ and $\mathbb{P}_\theta(\cdot)$ to emphasize that the underlying distribution is the one associated with $\theta$.

### Visual Description
Text-only slide on a grid background.

---

## Page 7
### Content
**The Bias-Variance decomposition** One way to compute the quality of an estimator is via its mean squared error:
$$\text{MSE} = \mathbb{E}_\theta(\theta - \hat{\theta})^2.$$

The MSE = squared bias + variance:
$$\text{MSE} = \mathbb{E}[\theta - \hat{\theta}]^2$$
$$= \mathbb{E}[\theta - \mathbb{E}(\hat{\theta}) + \mathbb{E}(\hat{\theta}) - \hat{\theta}]^2$$
$$= [b(\hat{\theta})]^2 + v(\hat{\theta}).$$

### Visual Description
Text-only slide on a grid background.

---

## Page 8
### Content
**Consistency** $\hat{\theta}_n$ is consistent for $\theta$ if $\hat{\theta}_n \xrightarrow{P} \theta$, i.e.
$$\forall \epsilon > 0, \mathbb{P}(|\hat{\theta}_n - \theta| \ge \epsilon) \to 0,$$
as $n \to \infty$.

Consequence of the bias-variance decomposition:
$$\text{MSE} = \mathbb{E}[\theta - \hat{\theta}]^2 = [b(\hat{\theta})]^2 + v(\hat{\theta})$$
* if $b(\hat{\theta}_n) \to 0$, i.e. the estimator is asymptotically unbiased
* and $v(\hat{\theta}_n) \to 0$
* then $\hat{\theta}_n$ is consistent since convergence in quadratic mean implies convergence in probability.

### Visual Description
Text-only slide on a grid background.

---
## Page 9
### Content
**Example:** Suppose $X_1, \dots, X_n \sim \text{Ber}(p)$, and our estimator is:
$$\hat{p}_n = \frac{1}{n} \sum_{i=1}^n X_i.$$
What is the bias of this estimator? What is its variance? Is the estimator consistent?

### Visual Description
Text and a centered mathematical formula on a light gray grid background. Slide number 6 is at the bottom.

---

## Page 10
### Content
**Asymptotic Normality** Often estimators that we study will have an asymptotically normal distribution:
$$\frac{\hat{\theta}_n - \theta}{\sqrt{v(\hat{\theta}_n)}} \xrightarrow{d} N(0, 1)$$

### Visual Description
Text and a centered mathematical formula on a light gray grid background. Slide number 7 is at the bottom.

---

## Page 11
### Content
### 2 Confidence Sets

A $1 - \alpha$ confidence set $C_n$ for parameter $\theta$ is any random set such that:
$$\forall \theta, \quad \mathbb{P}_\theta(\theta \in C_n) \ge 1 - \alpha$$
$\mathbb{P}_\theta(\theta \in C_n)$ is called the coverage of the confidence set $C_n$.

### Visual Description
Text and a centered mathematical formula on a light gray grid background. Slide number 8 is at the bottom.

---

## Page 12
### Content
**Bernoulli parameter example:** confidence intervals for Bernoulli parameter $p$ using Hoeffding's inequality:

Let $X_1, \dots, X_n$ be indep. s.t. $a_i \le X_i \le b_i$, and $\mathbb{E}[X_i] = 0$. Then,
$$\forall t > 0, \quad \mathbb{P}(|\bar{X}| \ge t) \le 2 \exp\left(-\frac{2n^2t^2}{\sum_{i=1}^n (b_i - a_i)^2}\right).$$

Let $\hat{p} = \bar{X} =$ fraction of tosses that are heads.
$\mathbb{E}(\hat{p}) = p$ so Hoeffding's ineq. does not apply.
But $E(X_i) = p \implies Y_i = X_i - p$ has mean 0 and is bounded between $-p$ and $1 - p$, so that $(b_i - a_i) = 1$.

Apply Hoeffding's ineq. to $\bar{Y} = \hat{p} - p$ to obtain:
$$\mathbb{P}(|\hat{p} - p| \ge t) \le 2 \exp(-2nt^2) = \alpha,$$
where $\alpha > 0$ and $t = \sqrt{\frac{1}{2n} \log(2/\alpha)} > 0$.

Equivalently $\mathbb{P}(|\hat{p} - p| < t) = \mathbb{P}(\hat{p} - t < p < \hat{p} + t) \ge 1 - \alpha,$

### Visual Description
Text and several mathematical formulas on a light gray grid background. Slide number 9 is at the bottom.

---

## Page 13
### Content
Alternative to using inequalities to set confidence sets.
Often we have:
$$Z = \frac{\hat{\theta} - \theta}{\sqrt{v(\hat{\theta})}} \to N(0, 1), \quad n \to \infty,$$
i.e., when $n$ is large, $\hat{\theta} \sim N(\theta, v(\hat{\theta}))$.

Define, $z_{\alpha/2} = \Phi^{-1}(1 - \alpha/2)$ and let
$$C_n = \left( \hat{\theta} - z_{\alpha/2} \sqrt{v(\hat{\theta})}, \hat{\theta} + z_{\alpha/2} \sqrt{v(\hat{\theta})} \right).$$

Then
$$\mathbb{P}(\theta \in C_n) = \mathbb{P}\left( \hat{\theta} - z_{\alpha/2} \sqrt{v(\hat{\theta})} \le \theta \le \hat{\theta} + z_{\alpha/2} \sqrt{v(\hat{\theta})} \right)$$
$$= \mathbb{P}\left( -z_{\alpha/2} \le \frac{\hat{\theta} - \theta}{\sqrt{v(\hat{\theta})}} \le z_{\alpha/2} \right)$$
$$\to \mathbb{P}(-z_{\alpha/2} \le Z \le z_{\alpha/2}) = 1 - \alpha.$$

### Visual Description
Text and several mathematical derivations on a light gray grid background. Slide number 10 is at the bottom.

---

## Page 14
### Content
**Bernoulli parameter example:** We previously constructed Bernoulli confidence sets using Hoeffding's inequality. Here we use a normal approximation since $\hat{\theta} = \hat{p}$ is an average, to which the CLT applies.

Note:
$$v(\hat{\theta}) = \frac{p(1 - p)}{n}$$
is not known, so we estimate it as:
$$\hat{v}(\hat{\theta}) = \frac{\hat{p}(1 - \hat{p})}{n}.$$

Asymptotic confidence interval for $p$:
$$C_n = \left( \hat{p} - z_{\alpha/2} \sqrt{\hat{v}(\hat{\theta})}, \hat{p} + z_{\alpha/2} \sqrt{\hat{v}(\hat{\theta})} \right).$$

This interval is always shorter than the Hoeffding interval but it is only asymptotically correct.

### Visual Description
Text and mathematical formulas on a light gray grid background. Slide number 11 is at the bottom.

---

## Page 15
### Content
### 3 Hypothesis testing

To investigate a **null hypothesis** of interest, collect data and decide if data provides enough evidence to *reject* the null hypothesis.

**Bernoulli parameter example:** Suppose $X_1, \dots, X_n \sim \text{Ber}(p)$, and we want to test if the coin is fair. In this case the null hypothesis would be:
$$H_0 : p = 1/2.$$
We typically also specify a **alternative hypothesis**.
$$H_1 : p \neq 1/2.$$

When will you reject the null hypothesis?

### Visual Description
Text and mathematical formulas on a light gray grid background. Slide number 12 is at the bottom.
