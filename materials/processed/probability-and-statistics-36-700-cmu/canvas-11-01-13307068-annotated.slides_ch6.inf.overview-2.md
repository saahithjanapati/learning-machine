# canvas-11-01-13307068-annotated.slides_ch6.inf.overview-2

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-11-01-13307068-annotated.slides_ch6.inf.overview-2.pdf`
Duplicate equivalents: `canvas-11-01-13307068-annotated.slides_ch6.inf.overview-2.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `MIXED`
Pages: 17

## Page 1
### Content
# Statistical Inference Overview
Ref: Wasserman Section 6
First revisit: Lecture 1 slides pages 1-3

### Contents
1. **Point Estimation** (Page 2)
2. **Confidence Sets** (Page 8)
3. **Hypothesis testing** (Page 12)

1

### Visual Description
The slide is a table of contents for a lecture on Statistical Inference. It features a title, a reference to a textbook (Wasserman Section 6), and a list of three main topics with their corresponding page numbers. The background is a light gray grid pattern.

---

## Page 2
### Content
[Lecture 1 slides]
Aug 27, 2025

# 36-700 Prelude/Big Picture

### Probability vs Statistics: what is the difference?

```mermaid
graph LR
    A(Data-generating process) -- "Prob. Th." --> B(Observed data)
    B -- "Stat. Inf." --> A
```
Handwritten note: $X_1, \dots, X_n \overset{iid}{\sim} F$ (unknown distr)

**Probability:** What is the basic problem that we study in probability?
*Handwritten answer:* Given a d.g.p., what are the properties of the outcomes?

**Statistics:** What is the basic problem that we study in statistics?
*Handwritten answer:* Given the outcomes, what can we say about the d.g.p.?
*Handwritten note:* Stat. inf. --- inverse of prob.

*Think:* What is the role of *models* in statistics?
What are the role of parameters and random variables in statistical inference?

1

### Visual Description
The slide uses a diagram to contrast Probability and Statistics. A "Data-generating process" and "Observed data" are connected by two arrows: one for Probability Theory (process to data) and one for Statistical Inference (data to process). Handwritten blue and red ink provides answers to the questions posed and adds mathematical notation for i.i.d. samples from an unknown distribution.

---

## Page 3
### Content
Given a sample, $X_1, \dots, X_n \sim F$,
*Handwritten notes:* "data" $\rightarrow$ $X_1, \dots, X_n \sim F$ $\leftarrow$ underlying distr. (unknown). These are RVS (Random Variables).

$F \in \mathcal{F}$ the set of possible distributions.
e.g.
$$\mathcal{F} = \left\{ f(x; \mu, \sigma) = \frac{1}{\sigma\sqrt{2\pi}} \exp \left\{ -\frac{(x-\mu)^2}{2\sigma^2} \right\} ; \mu \in \mathbb{R}, \sigma > 0, x \in \mathbb{R} \right\}$$
*Handwritten note:* Parameters of interest (POIs) $\theta = (\mu, \sigma)$

**Goal:** What can we infer about $F$?

### Three broad types of inference:
1. **point estimation** — single best guess of quantity of interest: $\hat{\theta}(X_1, \dots, X_n)$ (Handwritten: RV)
2. **interval estimation** — $[L(X_1, \dots, X_n), U(X_1, \dots, X_n)]$ (Handwritten: RVS)
3. **test of hypotheses** — e.g. $H_0: \theta = \theta_0$ vs $H_a: \theta \neq \theta_0$. Base decision on "test-statistic" $T(X_1, \dots, X_n)$ (Handwritten: RV)

*Handwritten footer:* properties of RVS? "good" estimator? convergence of $\hat{\theta}_n$ as $n \to \infty$?

2

### Visual Description
This slide defines the goal of statistical inference and lists three main types. It includes mathematical definitions for a Gaussian distribution family and uses handwritten annotations to identify random variables (RV/RVS) and parameters of interest. There are several blue and red circles and arrows highlighting key terms.

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
*Handwritten:* CDF $F(x) \overset{def}{=} \mathbb{P}(X \le x)$
$$\mathcal{F} = \{ F : 0 \le F \le 1, F \text{ non-decreasing and right-continuous}, \lim_{x \to -\infty} F(x) = 0, \lim_{x \to +\infty} F(x) = 1 \}$$
A "good estimator" is the empirical distribution function (EDF):
*Handwritten:* EDF $\hat{F}_n(x) \overset{def}{=} \frac{1}{n} \sum_{i=1}^n I(X_i \le x)$

2. **PDF** (probability density function) estimation: the class of all possible densities is too big for this problem to be well posed
$\implies$ we assume some smoothness on the density, e.g.
$$\mathcal{F} = \left\{ f : \int f(x)dx = 1, f(x) \ge 0, \int (f''(x))^2 dx < \infty \right\}$$
*Handwritten:* ex. of nonparametric estimator of pdfs: histogram estimator.

3

### Visual Description
The slide distinguishes between parametric and non-parametric models. It provides mathematical definitions for Bernoulli, CDF, and PDF models. Handwritten notes add definitions for CDF and EDF, and include two small sketches: a step function representing an EDF and a bar chart representing a histogram estimator for a PDF.

---

## Page 5
### Content
# 1 Point Estimation

Find single "best guess" of the value of some quantity of interest $\theta$, e.g.
* $\theta = (\mu, \sigma^2)$ or $\theta = p$ for parametric models
* $\theta = f$ or $\theta = F$ for non-parametric models
* any other function of the parameters, e.g.
    * $\theta = \log(p/(1 - p))$,
    * $\theta = F^{-1}(0.75) - F^{-1}(0.25)$, interquartile range of a random variable

We use $\hat{\theta}$ or $\hat{\theta}_n$ to denote a point estimator.

**$\hat{\theta}$ is a random variable** because it is a function of the data $X_1, \dots, X_n$:
$$\hat{\theta}_n = g(X_1, \dots, X_n),$$
E.g. $\hat{\theta} = \bar{X}_n$.

2

### Visual Description
Text-only slide. It introduces point estimation, providing examples of parameters $\theta$ in different models and defining the point estimator $\hat{\theta}$ as a random variable that is a function of the data.

---

## Page 6
### Content
We like estimators that have good properties, e.g.
* no or low **bias**
$$\text{bias} = b(\hat{\theta}_n) = \mathbb{E}_\theta(\hat{\theta}_n) - \theta$$
* small **variance**
$$v(\hat{\theta}_n) = \mathbb{E}_\theta(\hat{\theta}_n - \mathbb{E}_\theta(\hat{\theta}_n))^2$$
* consistency, i.e. $\hat{\theta}_n$ converges in probability to $\theta$.

**Remark on notation:** $\theta$ is typically a function of $F$, i.e., $\theta = \theta(F)$; e.g.
Mean: $\theta(F) = \int x dF(x)$
Inter-quartile range: $\theta(F) = F^{-1}(0.75) - F^{-1}(0.25)$ and
PDF: $\theta(F) = f = dF$

$\mathbb{E}(\cdot)$ and $\mathbb{P}(\cdot)$ refer to the randomness in the data $X_1, \dots, X_n$ iid from $F$.
Sometimes we use $\mathbb{E}_\theta(\cdot)$ and $\mathbb{P}_\theta(\cdot)$ to emphasize that the underlying distribution is the one associated with $\theta$.

*Handwritten note:* $\mathbb{E}_\theta(g(X)) = \int g(x) dF_\theta(x)$

3

### Visual Description
The slide discusses properties of estimators (bias, variance, consistency) and notation for parameters as functions of the distribution $F$. A handwritten sketch in the top right shows a "sampling distr of $\hat{\theta}$" as a bell curve, with labels for the "true quantity" $\theta$, the expectation $\mathbb{E}(\hat{\theta})$, and the bias $b(\hat{\theta})$.

---

## Page 7
### Content
**The Bias-Variance decomposition** One way to compute the quality of an estimator is via its mean squared error:
$$\text{MSE} = \mathbb{E}_\theta(\theta - \hat{\theta})^2$$

The MSE = squared bias + variance:
$$\text{MSE} = \mathbb{E}[\theta - \hat{\theta}]^2$$
$$= \mathbb{E}[\theta - \mathbb{E}(\hat{\theta}) + \mathbb{E}(\hat{\theta}) - \hat{\theta}]^2$$
*Handwritten derivation:*
$= \mathbb{E} [ (\theta - \mathbb{E}\hat{\theta})^2 + (\mathbb{E}\hat{\theta} - \hat{\theta})^2 + 2(\theta - \mathbb{E}\hat{\theta})(\mathbb{E}\hat{\theta} - \hat{\theta}) ]$
$= (\text{bias}(\hat{\theta}))^2 + \text{var}(\hat{\theta}) + 0$
(Note: $\mathbb{E}[\mathbb{E}\hat{\theta} - \hat{\theta}] = 0$)

$$= [b(\hat{\theta})]^2 + v(\hat{\theta})$$

*Handwritten note:* $\text{MSE}(\theta, \hat{\theta}) = 0 \iff \begin{cases} v(\hat{\theta}) = 0 \\ \text{bias}(\hat{\theta}) = 0 \end{cases}$

4

### Visual Description
The slide presents the Bias-Variance decomposition of the Mean Squared Error (MSE). It includes the formal statement and a handwritten step-by-step derivation showing how the cross-term in the squared expansion becomes zero, leaving only the squared bias and the variance.

---

## Page 8
### Content
*Handwritten:* Recall:
**Consistency** $\hat{\theta}_n$ is consistent for $\theta$ if $\hat{\theta}_n \xrightarrow{P} \theta$, i.e.
$$\forall \epsilon > 0, \mathbb{P}(|\hat{\theta}_n - \theta| \ge \epsilon) \to 0,$$
as $n \to \infty$.

Consequence of the bias-variance decomposition:
$$\text{MSE} = \mathbb{E}[\theta - \hat{\theta}]^2 = [b(\hat{\theta})]^2 + v(\hat{\theta})$$
* if $b(\hat{\theta}_n) \to 0$, i.e. the estimator is asymptotically unbiased
* and $v(\hat{\theta}_n) \to 0$
* then $\hat{\theta}_n$ is consistent since convergence in quadratic mean implies convergence in probability.

*Handwritten notes at bottom:*
$\hat{\theta}_n \xrightarrow{q.m.} \theta \iff \text{MSE}(\theta, \hat{\theta}_n) \to 0$
Recall: $\hat{\theta}_n \xrightarrow{q.m.} \theta \implies \hat{\theta}_n \xrightarrow{P} \theta$
Hence, $\text{MSE} \to 0 \implies \hat{\theta}_n \xrightarrow{P} \theta$ (consistent estimator)

5

### Visual Description
The slide explains the concept of consistency and its relationship to the bias-variance decomposition. It states that an estimator is consistent if its MSE goes to zero. Handwritten notes reinforce the link between convergence in quadratic mean (q.m.) and convergence in probability (P).
## Page 9
### Content
**Example:** Suppose $X_1, \dots, X_n \stackrel{iid}{\sim} \text{Ber}(p)$, and our estimator is:
$$\hat{p}_n = \frac{1}{n} \sum_{i=1}^n X_i.$$
What is the bias of this estimator? What is its variance? Is the estimator consistent?

*Handwritten notes:*
- $\mathbb{E}(\hat{p}) = \mathbb{E}(X_1) = p$
- $\text{var}(\hat{p}) = \frac{\text{var}(X_1)}{n} = \frac{p(1-p)}{n} \to 0$ as $n \to \infty$
- $\text{Bias}(\hat{p}) = \mathbb{E}(\hat{p}) - p = 0$
- $\text{MSE}(\hat{p}, p) \to 0$ as $n \to \infty$
- $\implies \hat{p} \xrightarrow{\text{prob.}} p$ i.e. $\hat{p}$ is a consistent estimator of $p$.

### Visual Description
Slide with printed text and blue handwritten mathematical derivations on a grid background.

---
## Page 10
### Content
**Asymptotic Normality** Often estimators that we study will have an asymptotically normal distribution:
$$\frac{\hat{\theta}_n - \theta}{\sqrt{v(\hat{\theta}_n)}} \xrightarrow{d} N(0, 1)$$

*Handwritten notes:*
- i.e. $\hat{\theta}_n$ is "asymptotically unbiased"
- Suppose $\mathbb{E}(\hat{\theta}_n) \to \theta$ as $n \to \infty$
- Then, $\frac{\hat{\theta}_n - \mathbb{E}(\hat{\theta}_n)}{\sqrt{\text{var}(\hat{\theta}_n)}} \rightsquigarrow N(0, 1)$
- $\implies \frac{\hat{\theta}_n - \theta}{\sqrt{\text{var}(\hat{\theta}_n)}} \rightsquigarrow N(0, 1)$

### Visual Description
Slide with printed text and blue handwritten notes explaining asymptotic normality. A red arrow points to the parameter $\theta$ in the formula.

---
## Page 11
### Content
## 2 Confidence Sets
A $1 - \alpha$ confidence set $C_n$ for parameter $\theta$ is any random set such that:
$$\forall \theta, \quad \mathbb{P}_\theta(\theta \in C_n) \geq 1 - \alpha$$
$\mathbb{P}_\theta(\theta \in C_n)$ is called the **coverage** of the confidence set $C_n$.

*Handwritten notes:*
- "random" pointing to $C_n$.
- A diagram showing several horizontal blue intervals relative to a vertical red line labeled $\theta$.

### Visual Description
Slide defining confidence sets with a highlighted formula and a handwritten diagram illustrating interval coverage.

---
## Page 12
### Content
**Recall:**
**Bernoulli parameter example:** confidence intervals for Bernoulli parameter $p$ using Hoeffding's inequality:
Let $X_1, \dots, X_n$ be indep. s.t. $a_i \leq X_i \leq b_i$, and $\mathbb{E}[X_i] = 0$. Then,
$$\forall t > 0, \quad \mathbb{P}(|\bar{X}| \geq t) \leq 2 \exp\left(-\frac{2n^2t^2}{\sum_{i=1}^n (b_i - a_i)^2}\right).$$

Let $\hat{p} = \bar{X} = \text{fraction of tosses that are heads.}$
$\mathbb{E}(\hat{p}) = p$ so Hoeffding's ineq. does not apply.
But $E(X_i) = p \implies Y_i = X_i - p$ has mean 0 and is bounded between $-p$ and $1-p$, so that $(b_i - a_i) = 1$.

Apply Hoeffding's ineq. to $\bar{Y} = \hat{p} - p$ to obtain:
$$\mathbb{P}(|\hat{p} - p| \geq t) \leq 2 \exp(-2nt^2) = \alpha,$$
where $\alpha > 0$ and $t = \sqrt{\frac{1}{2n} \log(2/\alpha)} > 0$.

Equivalently $\mathbb{P}(|\hat{p} - p| < t) = \mathbb{P}(\hat{p} - t < p < \hat{p} + t) \geq 1 - \alpha$,

*Handwritten notes:*
- "upper bound on prob." pointing to the RHS of the inequality.
- "valid conf int. for p" pointing to the interval.
- "holds for any n"

### Visual Description
Slide with printed text and blue handwritten annotations explaining the application of Hoeffding's inequality to Bernoulli parameters.

---
## Page 13
### Content
**Recall:**
Alternative to using inequalities to set confidence sets.
Often we have:
$$Z = \frac{\hat{\theta} - \theta}{\sqrt{v(\hat{\theta})}} \to N(0, 1), \quad n \to \infty,$$
i.e., when $n$ is large, $\hat{\theta} \sim N(\theta, v(\hat{\theta}))$.

Define, $z_{\alpha/2} = \Phi^{-1}(1 - \alpha/2)$ and let
$$C_n = \left(\hat{\theta} - z_{\alpha/2} \sqrt{v(\hat{\theta})}, \hat{\theta} + z_{\alpha/2} \sqrt{v(\hat{\theta})}\right).$$

Then
$$\mathbb{P}(\theta \in C_n) = \mathbb{P}\left(\hat{\theta} - z_{\alpha/2} \sqrt{v(\hat{\theta})} \leq \theta \leq \hat{\theta} + z_{\alpha/2} \sqrt{v(\hat{\theta})}\right)$$
$$= \mathbb{P}\left(-z_{\alpha/2} \leq \frac{\hat{\theta} - \theta}{\sqrt{v(\hat{\theta})}} \leq z_{\alpha/2}\right)$$
$$\to \mathbb{P}(-z_{\alpha/2} \leq Z \leq z_{\alpha/2}) = 1 - \alpha.$$

*Handwritten notes:*
- "distr." pointing to the tilde.
- "approx. normal"

### Visual Description
Slide with printed text and blue handwritten notes describing an alternative method for setting confidence sets using normal approximation.

---
## Page 14
### Content
**Bernoulli parameter example:** We previously constructed Bernoulli confidence sets using Hoeffding's inequality. Here we use a normal approximation since $\hat{\theta} = \hat{p}$ is an average, to which the CLT applies.

Note:
$$v(\hat{\theta}) = \frac{p(1-p)}{n}$$
is not known, so we estimate it as:
$$\hat{v}(\hat{\theta}) = \frac{\hat{p}(1-\hat{p})}{n}.$$

Asymptotic confidence interval for $p$:
$$C_n = \left(\hat{p} - z_{\alpha/2} \sqrt{\hat{v}(\hat{\theta})}, \hat{p} + z_{\alpha/2} \sqrt{\hat{v}(\hat{\theta})}\right).$$

This interval is always shorter than the Hoeffding interval but it is only asymptotically correct.

### Visual Description
Text-only slide with some highlighted text at the bottom.

---
## Page 15
### Content
## 3 Hypothesis testing
To investigate a **null hypothesis** of interest, collect data and decide if data provides enough evidence to *reject* the null hypothesis.

**Bernoulli parameter example:** Suppose $X_1, \dots, X_n \sim \text{Ber}(p)$, and we want to test if the coin is fair. In this case the null hypothesis would be:
$$H_0 : p = 1/2.$$
We typically also specify a **alternative hypothesis**.
$$H_1 : p \neq 1/2.$$
When will you reject the null hypothesis?

*Handwritten notes:*
- "default conjecture" above null hypothesis.
- "data-driven decision making"
- "Under $H_0$, $p=1/2$"
- $\mathbb{P}(|\hat{p}_n - p| \geq \delta)$
- "observed deviation" pointing to $\delta$.
- "R.V. $\hat{p} = \frac{1}{n} \sum_{i=1}^n X_i$"
- "sampling distr of $\hat{p}$ ?" circled in red.

### Visual Description
Slide introducing hypothesis testing with printed text and handwritten notes in blue and red.

---
## Page 16
### Content
# 36-700: Homework Set 4
Extended Due Date to Monday September 29 at 6 pm
Submit on Gradescope

1. Suppose that $X \sim F$ (some unspecified distribution) and that $\mathbb{E}[X] = \mu$ and $\text{Var}[X] = \sigma^2$. Suppose, further, that $\sigma \leq 5$. We draw $n$ iid samples $X_1, \dots, X_n \sim F$.
   (a) How large should the sample size
## Page 17

### Content
Particularly, order the intervals by their coverage.
(Include your code in your submission)

5. **Approximating distributions:** The Poisson distribution with parameter $\lambda$, has pmf:
$$\mathbb{P}(X = k) = \frac{\exp(-\lambda)\lambda^k}{k!}.$$
For large values of $\lambda$, the Poisson distribution is well approximated by a Gaussian distribution.

(a) Use moment matching to find the Gaussian that best approximates a $Poi(\lambda)$ distribution. In other words, we can use $N(\mu, \sigma^2)$ to approximate the Poisson, and we choose $\mu$ and $\sigma^2$ to match the mean and variance of the Poisson.
(b) Suppose that we have a system that emits a random variable $X$ particles according to a Poisson distribution with mean $\lambda = 900$ per hour. Use the above approximation to calculate the probability $\mathbb{P}(X > 950)$. You should express this in terms of an appropriate standard Gaussian quantile, i.e., express your answer in terms of the function $\Phi(z) = \mathbb{P}(Z \le z)$ where $Z$ has a standard normal distribution.
(c) Use R (or any package you prefer) to compute the value of $\mathbb{P}(X > 950)$, approximately using the Gaussian quantile and exactly using the Poisson CDF. There are built-in functions in R for each of these computations.
(Include your code in your submission)

6. **Convergence I:** In lecture we will show that convergence in quadratic mean implies convergence in probability. Suppose we have a sequence $X_1, \dots, X_n$. Fix $a > 0$. Show that if $\mathbb{E}|X_n - X|^a \to 0$ then $X_n$ converges to $X$ in probability.

7. **Convergence II:** Show that the following RVs converge in probability to 1.
(a) $Y_n = 1 + nX_n$ where $X_n \sim Ber(1/n)$.
(b) $Y_n = \frac{1}{n} \sum_{i=1}^n X_i^2$ where $X_i \sim N(0, 1)$.

8. **Convergence III:** (Order statistic) Wasserman Exercise 5.13 on page 84

[Handwritten notes in blue]:
- Top left: "Recall class example"
- Middle right: "R.V. X, approx. its distr. w. a normal"
- Bottom left: "Ask: Is $Y_n$ discrete or cont.? What is its PMF/PDF? Use def. of conv. of prob."
- Bottom right: "In R: CDF commands { ppois, pnorm, pbinom"

### Visual Description
The page is a typed document containing mathematical problems related to probability and convergence. It features several blue handwritten annotations and yellow highlights.
- **Highlights:** The title of section 5, the sentence about Gaussian approximation for large $\lambda$, and the specific probability $\mathbb{P}(X > 950)$ in part 5(b) are highlighted in yellow.
- **Annotations:** Red circles are drawn around "Poi($\lambda$)" in 5(a) and "$\mathbb{P}(X > 950)$" in 5(b). Blue handwritten notes provide additional context and hints for the problems.
- **Layout:** The text is organized into numbered sections (5 through 8). A page number "2" is visible at the bottom center, though this is absolute page 17 of the document.

---
