# canvas-12-02-13445381-annotated.slides_Chapter7.Estimation.Part1

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-12-02-13445381-annotated.slides_Chapter7.Estimation.Part1.pdf`
Duplicate equivalents: `canvas-12-02-13445381-annotated.slides_Chapter7.Estimation.Part1.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 22

## Page 1
### Content
**Last lectures: Stochastic conv + intro to Stat Inf**
* point estimation, confidence sets, hypothesis testing (bias-variance decomposition, consistency)

# CHAPTER 7 Point Estimation (Part 1): Finding Estimators

### Contents
1. **Method of Moments Estimators** (Page 1)
2. **Maximum Likelihood Estimators** (Page 5)
3. **Bayes Estimators** (Page 10)

Reference: Wasserman Sections 9.1-9.3, 11.1-11.3

---

### 1 Method of Moments Estimators
Assume $X_1, \dots, X_n \overset{iid}{\sim} F_\theta$ (parametric family, $\theta$ unknown)

Let $X_1, \dots, X_n$ be an iid sample from a distribution with parameter $\theta = (\theta_1, \dots, \theta_k)$
* $n$: # data pts.
* $k$: # features

e.g. $\theta = (\mu, \sigma^2)$ for the Gaussian distribution.

MOME: Estimate $\theta$ by matching $k$ true/theoretical/population moments and $k$ sample moments.

Recall:
* $\mu = \mu_1 \overset{\text{def}}{=} \mathbb{E}(X)$ true mean (1st moment)
  * $\mu_1 = \int x \, dF_\theta(x)$
* $m_1 = \frac{1}{n} \sum X_i$ sample mean
* $\mu_k = \mathbb{E}(X^k)$ true $k$th moment
  * $\mu_k = \int x^k \, dF_\theta(x)$
  * "statistical functionals", functions of distr. $F_\theta$
* $k$th sample moment?
  * $m_k = \frac{1}{n} \sum X_i^k$
  * "statistics (functions of data)"

### Visual Description
The slide introduces Method of Moments Estimators. It contains printed text with extensive blue handwritten annotations. The annotations clarify terms like "1st moment", "statistical functionals", and provide integral definitions for moments. There is a table of contents at the top. The background is a light grid pattern.

---

## Page 2
### Content
Sample moments:
$$m_1 = \frac{1}{n} \sum_{i=1}^n X_i$$
$$m_2 = \frac{1}{n} \sum_{i=1}^n X_i^2$$
$$\dots$$
$$m_k = \frac{1}{n} \sum_{i=1}^n X_i^k$$

True moments:
$$\mu_j = \mu_j(\theta) = \mathbb{E}(X^j) = \int x^j \, dF_\theta(x), \quad j = 1, \dots, k$$

Estimate $\theta$ by matching $k$ true/theoretical/population moments and $k$ sample moments.
$$\mu_1(\theta_1, \dots, \theta_k) = m_1$$
$$\vdots$$
$$\mu_k(\theta_1, \dots, \theta_k) = m_k$$

Solve system of **$k$ equations** with **$k$ unknowns**.

### Visual Description
This slide details the mathematical formulation of the Method of Moments. It lists the formulas for sample moments and true moments, then shows the system of equations created by equating them. Red circles highlight the general $k$-th sample moment and the integral definition of the $j$-th true moment. The background is a light grid pattern.

---

## Page 3
### Content
**Example 1:** $X_1, \dots, X_n \overset{iid}{\sim} N(\mu, \sigma^2) \longrightarrow \theta = (\theta_1, \theta_2) = (\mu, \sigma^2)$

True moments:
$\mu_1(\theta) \overset{\text{def}}{=} \mathbb{E}(X) = \mu$ and $\mu_2(\theta) \overset{\text{def}}{=} \mathbb{E}(X^2) = \mu^2 + \sigma^2$

**Recall:** $\text{Var}(X) = \mathbb{E}(X^2) - (\mathbb{E}(X))^2$
(where $\text{Var}(X) = \sigma^2$, $\mathbb{E}(X^2) = \mu_2$, and $\mathbb{E}(X) = \mu$)

Solve for $\mu$ and $\sigma^2$:
$\mu_1(\theta) = \frac{1}{n} \sum_{i=1}^n X_i$ and $\mu_2(\theta) = \frac{1}{n} \sum_{i=1}^n X_i^2$

System of equations:
(1) $\mu = \frac{1}{n} \sum_{i=1}^n X_i$
(2) $\mu^2 + \sigma^2 = \frac{1}{n} \sum_{i=1}^n X_i^2$

Obtain:
$$\hat{\mu} = \frac{1}{n} \sum_{i=1}^n X_i = \bar{X}_n$$
$$\hat{\sigma}^2 = \frac{1}{n} \sum_{i=1}^n X_i^2 - \left( \frac{1}{n} \sum_{i=1}^n X_i \right)^2 = \frac{1}{n} \sum_{i=1}^n (X_i - \bar{X}_n)^2$$
(MOME of $\sigma^2$)

**Note:**
cf. $S^2 = \frac{1}{n-1} \sum (X_i - \bar{X}_n)^2$
$\mathbb{E}[S^2] = \sigma^2$
$\hat{\sigma}^2 = \frac{n-1}{n} S^2$

### Visual Description
The slide works through an example of MOME for a Normal distribution. It includes printed formulas and blue handwritten derivations. A system of two equations is set up and solved to find the estimators for $\mu$ and $\sigma^2$. A comparison is made between the MOME variance estimator and the unbiased sample variance $S^2$. The background is a light grid pattern.

---

## Page 4
### Content
**Example 2:** $X_1, \dots, X_n \sim \text{Bin}(k, p) \longrightarrow \theta = (k, p)$
$k = 0, 1, 2, \dots$
$p \in [0, 1]$

Used to e.g. model reported crimes, where the total number of crimes $k$ and reporting rate $p$ are both unknown.

Solve:
$\mu_1(\theta) = \frac{1}{n} \sum_{i=1}^n X_i$ (1) and $\mu_2(\theta) = \frac{1}{n} \sum_{i=1}^n X_i^2$ (2)

where
$\mu_1(\theta) \overset{\text{def}}{=} \mathbb{E}(X) = kp$ and $\mu_2(\theta) \overset{\text{def}}{=} \mathbb{E}(X^2) = kp(1 - p) + (kp)^2$

Obtain:
$$\hat{p} = \frac{\bar{X} - \frac{1}{n} \sum_{i=1}^n (X_i - \bar{X})^2}{\bar{X}} \quad \text{and} \quad \hat{k} = \frac{\bar{X}^2}{\bar{X} - \frac{1}{n} \sum_{i=1}^n (X_i - \bar{X})^2}$$

Could be negative!
$\rightarrow$ when the sample mean is dominated by the sample variance.
spec. case: $p=0, p=1$ (no variability in $X$)

### Visual Description
This slide provides a second example of MOME, this time for a Binomial distribution where both $k$ and $p$ are unknown. It shows the resulting estimators and notes a potential issue where the probability estimator could be negative. Blue handwritten notes add constraints for $k$ and $p$ and explain the "negative" result condition. The background is a light grid pattern.

---

## Page 5
### Content
## 2 Maximum Likelihood Estimators
Unlike MOMEs, MLEs have the same range as the parameter.

Assume parametric model: Let $X_1, \dots, X_n \sim f_\theta$ i.i.d.

**Likelihood function:** $L(\theta) \equiv L(\theta | X_1, \dots, X_n)$
$= \text{joint distribution of the observed data}$
$\overset{\text{def}}{=} f_{X_1, X_2, \dots, X_n}(X_1, \dots, X_n; \theta)$
$= \prod_{i=1}^n f_\theta(X_i)$ (for iid data)

* [AoS] The likelihood is just the joint distr. of the data treated as a function of the parameter $\theta$.
* RV $X_i \sim f(x; \theta)$
* parameter $\theta$ (fixed) unknown
* $\mathcal{L}: \Theta \to [0, \infty)$
* **Note:** $\mathcal{L}$ is not a density funct w.r.t $\theta$ (e.g. doesn't integrate to 1 w.r.t $\theta$)

**MLE:**
$$\hat{\theta} = \hat{\theta}(X_1, \dots, X_n) = \text{argmax}_\theta L(\theta)$$
value of $\theta$ most likely to have generated the data

e.g. $X \sim N(\mu, 1)$
Suppose we observe $X = -5$ ($n=1$). Which distr best fits the data? $\rightarrow$ MLE $\hat{\mu} = -5$.

### Visual Description
The slide introduces Maximum Likelihood Estimation (MLE). It defines the likelihood function as the joint distribution of the data and explains that the MLE is the parameter value that maximizes this function. A graphical example shows three normal curves with different means, illustrating how the curve centered at the observed data point ($X=-5$) is the "best fit". Extensive blue handwritten notes provide additional definitions and conceptual clarifications.

---

## Page 6
### Content
Typical way to compute the MLE ($k$ POIs) is to either analytically or numerically solve the system of eqs. $\frac{\partial}{\partial \theta} \mathcal{L}(\theta) = 0$.

**Example:** Let $X_1, \dots, X_n \overset{iid}{\sim} N(\theta, 1)$. Derive the MLE of $\theta$.

**Important!**
$$L(\theta) = \prod_{i=1}^n \frac{1}{\sqrt{2\pi}} \exp\left( -\frac{(X_i - \theta)^2}{2} \right) \quad (\text{since } \sigma=1)$$
$$= \frac{1}{(2\pi)^{n/2}} \exp\left( -\frac{1}{2} \sum_{i=1}^n (X_i - \theta)^2 \right)$$

$\ell = \log L(\theta)$
$\text{argmax}_\theta L(\theta) = \text{argmin}_\theta \sum_{i=1}^n (X_i - \theta)^2$
(NLL = $-\ell(\theta)$, neg. log-likelihood)

$$\frac{\partial}{\partial \theta} \left[ \sum_i (X_i - \theta)^2 \right] = -2 \sum_i (X_i - \theta) = 0$$
$$\sum_i X_i = \sum_i \theta = n\theta$$
$$\hat{\theta} = \frac{\sum_i X_i}{n} = \bar{X}_n$$

Should verify that $\frac{d^2}{d\theta^2} (-\ell(\theta)) > 0$ (which is $= 2n$).

### Visual Description
This slide demonstrates the derivation of the MLE for the mean of a Normal distribution with known variance. It shows the likelihood function, the log-likelihood, and the use of calculus (first derivative set to zero) to find the estimator. Blue handwritten notes guide the steps and include a second-derivative check for a minimum of the negative log-likelihood. The background is a light grid pattern.

---

## Page 7
### Content
**Example:** Let $X_1, \dots, X_n \overset{iid}{\sim} \text{Ber}(p)$. Derive the MLE of $p$.
e.g. outcome 0 1 0 0 1

$$L(p) = \prod_{i=1}^n f_p(X_i) = \prod_{i=1}^n p^{X_i} (1-p)^{(1-X_i)}$$
$$= p^{\sum X_i} (1-p)^{n - \sum X_i}$$

$\ell(\theta) = \log L(\theta)$ (log-likelihood)
$$\ell(p) = \left( \sum_{i=1}^n X_i \right) \log p + \left( n - \sum_{i=1}^n X_i \right) \log(1-p)$$
$$\ell'(p) = \frac{\sum X_i}{p} - \frac{n - \sum X_i}{1-p} = 0$$

Solve for $p \implies \hat{p} = \bar{X}_n$

Check that $\ell''(p) < 0$ when $p = \hat{p}$.
(Sketch of a concave down curve)

### Visual Description
The slide shows the derivation of the MLE for a Bernoulli distribution. It follows the same steps as the previous page: likelihood, log-likelihood, derivative, and solving for the parameter. Blue handwritten notes show the intermediate algebraic steps and a sketch of the log-likelihood function's concavity. The background is a light grid pattern.

---

## Page 8
### Content
These two examples were easy. However, MLEs can be difficult to find in practice...

**Computational difficulties:** How do we find the global maximum? How do we verify that we have in fact found the global maximum?

**Numerical sensitivity:**
(1) We can often only approximately maximize the likelihood (using a numerical procedure like gradient descent), so we need a well-behaved likelihood function (as a function of the parameters).

(2) It is also natural to hope that the estimator is a well-behaved function of the data; that is, we would hope that a slightly different sample would not result in a vastly different MLE.

### Visual Description
Text-only slide. It discusses the practical challenges of finding MLEs, specifically focusing on computational difficulties and numerical sensitivity. A single red vertical line is drawn in the left margin next to point (2). The background is a light grid pattern.

---
==End of PDF==
## Page 9
### Content
124 9. Parametric Inference

$= \sigma^{-n} \exp \left\{ -\frac{nS^2}{2\sigma^2} \right\} \exp \left\{ -\frac{n(\overline{X} - \mu)^2}{2\sigma^2} \right\}$

where $\overline{X} = n^{-1} \sum_i X_i$ is the sample mean and $S^2 = n^{-1} \sum_i (X_i - \overline{X})^2$. The last equality above follows from the fact that $\sum_i (X_i - \mu)^2 = nS^2 + n(\overline{X} - \mu)^2$ which can be verified by writing $\sum_i (X_i - \mu)^2 = \sum_i (X_i - \overline{X} + \overline{X} - \mu)^2$ and then expanding the square. The log-likelihood is

$\ell(\mu, \sigma) = -n \log \sigma - \frac{nS^2}{2\sigma^2} - \frac{n(\overline{X} - \mu)^2}{2\sigma^2}$.

Solving the equations
$\frac{\partial \ell(\mu, \sigma)}{\partial \mu} = 0$ and $\frac{\partial \ell(\mu, \sigma)}{\partial \sigma} = 0$,

we conclude that $\hat{\mu} = \overline{X}$ and $\hat{\sigma} = S$. It can be verified that these are indeed global maxima of the likelihood. ■

**9.12 Example (A Hard Example).** Here is an example that many people find confusing. Let $X_1, \dots, X_n \sim \text{Unif}(0, \theta)$. Recall that
$f(x; \theta) = \begin{cases} 1/\theta & 0 \le x \le \theta \\ 0 & \text{otherwise.} \end{cases}$

Consider a fixed value of $\theta$. Suppose $\theta < X_i$ for some $i$. Then, $f(X_i; \theta) = 0$ and hence $\mathcal{L}_n(\theta) = \prod_i f(X_i; \theta) = 0$. It follows that $\mathcal{L}_n(\theta) = 0$ if any $X_i > \theta$. Therefore, $\mathcal{L}_n(\theta) = 0$ if $\theta < X_{(n)}$ where $X_{(n)} = \max\{X_1, \dots, X_n\}$. Now consider any $\theta \ge X_{(n)}$. For every $X_i$ we then have that $f(X_i; \theta) = 1/\theta$ so that $\mathcal{L}_n(\theta) = \prod_i f(X_i; \theta) = \theta^{-n}$. In conclusion,

$\mathcal{L}_n(\theta) = \begin{cases} \left( \frac{1}{\theta} \right)^n & \theta \ge X_{(n)} \\ 0 & \theta < X_{(n)}. \end{cases}$

See Figure 9.2. Now $\mathcal{L}_n(\theta)$ is strictly decreasing over the interval $[X_{(n)}, \infty)$. Hence, $\hat{\theta}_n = X_{(n)}$. ■

The maximum likelihood estimators for the multivariate Normal and the multinomial can be found in Theorems 14.5 and 14.3.

### Visual Description
The page contains printed text and mathematical formulas. There are several blue and red handwritten annotations. 
- A blue note asks "MLE of $\theta$?".
- Another blue note says "Observe data $D = \{X_1, \dots, X_n\}$".
- A blue formula shows $\mathcal{L}_n(\theta) = \prod_{i=1}^n f(X_i; \theta) \implies \begin{cases} 0 & \text{if any } X_i > \theta \\ (1/\theta)^n & \text{o.w.} \end{cases}$
- A red sketch shows a plot of $\mathcal{L}(\theta)$ vs $\theta$. The function is zero until a point labeled $X_{(n)}$, where it jumps to a peak and then decreases. A label "MLE (R.V.)" points to $X_{(n)}$.

---

## Page 10
### Content
9.4 Properties of Maximum Likelihood Estimators 125

[Four plots showing the likelihood function for Uniform $(0, \theta)$]

**FIGURE 9.2.** Likelihood function for Uniform $(0, \theta)$. The vertical lines show the observed data. The first three plots show $f(x; \theta)$ for three different values of $\theta$. When $\theta < X_{(n)} = \max\{X_1, \dots, X_n\}$, as in the first plot, $f(X_{(n)}; \theta) = 0$ and hence $\mathcal{L}_n(\theta) = \prod_{i=1}^n f(X_i; \theta) = 0$. Otherwise $f(X_i; \theta) = 1/\theta$ for each $i$ and hence $\mathcal{L}_n(\theta) = \prod_{i=1}^n f(X_i; \theta) = (1/\theta)^n$. The last plot shows the likelihood function.

### Visual Description
The page contains four graphs. 
- The first three graphs plot $f(x; \theta)$ vs $x$ for $\theta = 0.75$, $\theta = 1$, and $\theta = 1.25$. They show a rectangular uniform distribution with data points (vertical dashed lines) on the x-axis. 
- The fourth graph plots $\mathcal{L}_n(\theta)$ vs $\theta$. It shows the likelihood is zero until $\theta$ reaches $X_{(n)}$, at which point it peaks and then decays as $(1/\theta)^n$.
- Handwritten blue notes: "Imagine all possible $\theta \in \Theta$".
- Handwritten red notes: An arrow points to the peak of the likelihood curve in the fourth plot, labeled "$\theta = \max\{X_1, \dots, X_n\}$", "R.V. $X_{(n)}$", and "MLE of $\theta$".

---

## Page 11
### Content
**Invariance of the MLE**

We are often interested in making inferences about something else than the parameters of the data distribution.
- e.g. $\delta = \text{logit}(p)$
- e.g. $\delta = \text{Interquartile range} = F_\theta^{-1}(0.75) - F_\theta^{-1}(0.25)$

**The MLE is invariant to transformations**
$\rightarrow$ MLE of $\delta = r(\theta)$ is $\hat{\delta} = r(\hat{\theta})$

**Note:** if you know the distribution of $\hat{\theta}$, you can find the distribution of $r(\hat{\theta})$ using one of the methods we have learned, e.g. the delta method.

9

### Visual Description
The slide is on a grid background with printed text and extensive blue and red handwritten notes.
- Blue notes at the top: "Big picture: suppose you computed the MLE $\hat{\theta}$ of $\theta$ given data $X \sim f_\theta(x), X_1, \dots, X_n \text{ iid}$".
- Blue notes: "Let $\delta = r(\theta)$ r known func.", "MLE of $\delta$?".
- Red notes: "point estimator of $\delta$".
- Blue notes: "MLE of $\delta$ is $\hat{\delta} = r(\hat{\theta})$".
- Red notes: "II (sampling) distr. of $\hat{\delta} = r(\hat{\theta})$".
- Red notes: "Moreover: MLE of $\delta$".

---

## Page 12
### Content
**Last lecture: Point Estimation Oct 27, 2025**
- Bayes Estimators [Notes 7, Part I]
    - prior & posterior distr.
    - conjugate priors
- Bootstrap as a method for computing SEs (cf. MC)
    - non-parametric & parametric
    [Ref: AoS Sec 8, 9.11]

**This lecture**
- Bayes estimators (cont'd)
- Intro to Statistical Decision Th.
    Evaluating/comparing estimators [Notes 7, Part 4]

**Next lecture + Next Week**
- Hypothesis testing

### Visual Description
Handwritten notes in blue ink on a grid background. The text outlines the topics for the last, current, and next lectures. Some phrases like "Evaluating/comparing estimators" and "Hypothesis testing" are highlighted in yellow.

---

## Page 13
### Content
### 3 Bayes Estimators

We have the likelihood function ($L(\theta) = \text{the joint distribution of the data given parameter value } \theta$), which summarizes the information about $\theta$ in the data.

We further treat $\theta$ as a random variable with distribution $p(\theta)$ called the **prior distribution**.

10

### Visual Description
The slide is on a grid background with printed text and blue handwritten notes.
- A blue bracket groups the first paragraph with the note: "In classical stats, $\theta$ is a fixed quantity".
- Another blue bracket groups the second paragraph with the note: "In Bayesian inf, treat $\theta$ as a R.V.".
- Handwritten blue notes: "$L(\theta) = p(x^n|\theta)$" and "$\pi(\theta)$" next to "prior distribution".

---

## Page 14
### Content
**Bayes Estimators**

We have $L(\theta)$ and $p(\theta)$

To make inference about $\theta$, we update the prior information about $\theta$ by calculating $p(\theta|x_1, \dots, x_n)$, the **posterior distribution** of $\theta$.

Using Bayes theorem:
$$p(\theta|x_1, \dots, x_n) = \frac{p(\theta, x_1, \dots, x_n)}{p(x_1, \dots, x_n)} = \frac{p(x_1, \dots, x_n|\theta)p(\theta)}{\int p(x_1, \dots, x_n|\theta)p(\theta)d\theta}$$
$$= \frac{L(\theta)p(\theta)}{\int L(\theta)p(\theta)d\theta} \propto L(\theta)p(\theta).$$

We take the **Bayes estimator** of $\theta$ to be the mean/median/mode of $p(\theta|x_1, \dots, x_n)$.

e.g. posterior mean:
$$\hat{\theta} = \int \theta p(\theta|X_1, \dots, X_n) d\theta.$$

11

### Visual Description
The slide is on a grid background with printed text, mathematical derivations, and red/blue handwritten notes.
- A red sketch at the top shows a bell-shaped curve representing a probability distribution, with labels for "Prior $p(\theta)$" and "Posterior $p(\theta|X^n)$". Vertical lines indicate the "mean" and "mode".
- Red handwritten notes show the general form of Bayes' Theorem: $P(A|B) = \frac{P(A \cap B)}{P(B)}$ and the Law of Total Probability: $P(B) = \sum_{i=1}^n P(B|A_i)P(A_i)$.
- Blue notes identify the denominator of the posterior as $p(x_1, \dots, x_n)$ and the numerator as proportional to $L_n(\theta)$.
- A red note indicates that the integral of the posterior over $\theta$ equals 1.

---

## Page 15
### Content
**Example:** Let $X_1, \dots, X_n \overset{iid}{\sim} \text{Ber}(\theta)$.

Let $\theta \sim \text{Beta}(\alpha, \beta)$ (Beta distribution prior):
$$p(\theta) = \frac{\Gamma(\alpha + \beta)}{\Gamma(\alpha)\Gamma(\beta)} \theta^{\alpha-1}(1 - \theta)^{\beta-1} \propto \theta^{\alpha-1}(1 - \theta)^{\beta-1},$$
$\alpha > 0$
$\beta > 0$
$\theta \in [0, 1]$
$\Gamma(\alpha) = \int x^{\alpha-1}e^{-x}dx$.

**Some facts:**
The mean of the Beta distribution is: $\alpha/(\alpha + \beta)$.
$\alpha = \beta = 1$ yields the $U[0, 1]$ distribution.

12

### Visual Description
The slide is on a grid background with printed text and extensive blue and red handwritten notes.
- Red notes label the components: "theory/Model", "Likelihood", "Prior", "Binomial $(n=1, p)$".
- Blue notes derive the posterior: $p(\theta|x^n) \propto \mathcal{L}_n(\theta) p(\theta)$.
- The likelihood is shown as $\prod_{i=1}^n \theta^{X_i}(1-\theta)^{(1-X_i)} = \theta^S (1-\theta)^{n-S}$ where $S = \sum X_i$.
- The final blue derivation shows: $p(\theta|x^n) = \text{const} \cdot \theta^{S+\alpha-1} (1-\theta)^{n-S+\beta-1} \sim \text{Beta}(S+\alpha, n-S+\beta)$.
- Red brackets identify the new parameters of the Beta distribution as $\alpha' = S+\alpha$ and $\beta' = n-S+\beta$.

---

## Page 16
### Content
**Table of Distributions**

| Distribution | PDF or probability function | mean | variance | MGF |
| :--- | :--- | :--- | :--- | :--- |
| Point mass at $a$ | $I(x = a)$ | $a$ | $0$ | $e^{at}$ |
| Bernoulli($p$) | $p^x(1 - p)^{1-x}$ | $p$ | $p(1 - p)$ | $pe^t + (1 - p)$ |
| Binomial($n, p$) | $\binom{n}{x} p^x(1 - p)^{n-x}$ | $np$ | $np(1 - p)$ | $(pe^t + (1 - p))^n$ |
| Geometric($p$) | $p(1 - p)^{x-1}I(x \ge 1)$ | $1/p$ | $\frac{1-p}{p^2}$ | $\frac{pe^t}{1-(1-p)e^t} (t < -\log(1-p))$ |
| Poisson($\lambda$) | $\frac{\lambda^x e^{-\lambda}}{x!}$ | $\lambda$ | $\lambda$ | $e^{\lambda(e^t-1)}$ |
| Uniform($a, b$) | $I(a < x < b)/(b - a)$ | $\frac{a+b}{2}$ | $\frac{(b-a)^2}{12}$ | $\frac{e^{bt}-e^{at}}{(b-a)t}$ |
| Normal($\mu, \sigma^2$) | $\frac{1}{\sigma\sqrt{2\pi}} e^{-(x-\mu)^2/(2\sigma^2)}$ | $\mu$ | $\sigma^2$ | $\exp\{\mu t + \frac{\sigma^2 t^2}{2}\}$ |
| Exponential($\beta$) | $\frac{e^{-x/\beta}}{\beta}$ | $\beta$ | $\beta^2$ | $\frac{1}{1-\beta t} (t < 1/\beta)$ |
| Gamma($\alpha, \beta$) | $\frac{x^{\alpha-1}e^{-x/\beta}}{\Gamma(\alpha)\beta^\alpha}$ | $\alpha\beta$ | $\alpha\beta^2$ | $(\frac{1}{1-\beta t})^\alpha (t < 1/\beta)$ |
| Beta($\alpha, \beta$) | $\frac{\Gamma(\alpha+\beta)}{\Gamma(\alpha)\Gamma(\beta)} x^{\alpha-1}(1 - x)^{\beta-1}$ | $\frac{\alpha}{\alpha+\beta}$ | $\frac{\alpha\beta}{(\alpha+\beta)^2(\alpha+\beta+1)}$ | $1 + \sum_{k=1}^\infty \left( \prod_{r=0}^{k-1} \frac{\alpha+r}{\alpha+\beta+r} \right) \frac{t^k}{k!}$ |
| $t_\nu$ | $\frac{\Gamma(\frac{\nu+1}{2})}{\Gamma(\frac{\nu}{2})} \frac{1}{(1 + \frac{x^2}{\nu})^{(\nu+1)/2}}$ | $0$ (if $\nu > 1$) | $\frac{\nu}{\nu-2}$ (if $\nu > 2$) | does not exist |
| $\chi^2_p$ | $\frac{1}{\Gamma(p/2)2^{p/2}} x^{(p/2)-1}e^{-x/2}$ | $p$ | $2p$ | $(\frac{1}{1-2t})^{p/2} (t < 1/2)$ |

List of Symbols 433

### Visual Description
A comprehensive table of common probability distributions and their properties. A blue handwritten arrow points specifically to the row for the Beta distribution. The page number 433 is visible on the right side.

---
## Page 17
### Content
**Beta distribution**
From Wikipedia, the free encyclopedia

In probability theory and statistics, the **beta distribution** is a family of **continuous probability distributions** defined on the interval $[0, 1]$ or $(0, 1)$ in terms of two positive **parameters**, denoted by *alpha* ($\alpha$) and *beta* ($\beta$), that appear as exponents of the variable and its complement to 1, respectively, and control the **shape** of the distribution.

The beta distribution has been applied to model the behavior of **random variables** limited to intervals of finite length in a wide variety of disciplines. The beta distribution is a suitable model for the random behavior of percentages and proportions.

In **Bayesian inference**, the beta distribution is the **conjugate prior probability distribution** for the **Bernoulli**, **binomial**, **negative binomial**, and **geometric** distributions.

*Handwritten annotations:*
- $\alpha=1, \beta=1 \implies \text{Unif}(0,1)$
- $\alpha, \beta > 1$: concave f. with one mode

### Visual Description
A screenshot of the Wikipedia page for "Beta distribution". It includes a plot of the Probability Density Function (PDF) for various values of $\alpha$ and $\beta$. Blue handwritten notes highlight the case $\alpha=1, \beta=1$ as a uniform distribution and describe the shape for $\alpha, \beta > 1$.

---

## Page 18
### Content
Posterior distribution?

13
### Visual Description
Text-only slide on a grid paper background.

---

## Page 19
### Content
Posterior distribution:
$$p(\theta|X_1, \dots, X_n) \propto \theta^{S+\alpha-1}(1-\theta)^{n-S+\beta-1},$$
where $S = \sum X_i$.

*Handwritten note:* $\theta \sim \text{Prior Beta}(\alpha, \beta)$

The posterior distribution is $\text{Beta}(S+\alpha, n-S+\beta)$.

We write
$$\theta|X_1, \dots, X_n \sim \text{Beta}(S+\alpha, n-S+\beta).$$

*Handwritten note:* $\alpha' = S+\alpha$, $\beta' = n-S+\beta$ (posterior)

When the prior and the posterior are in the same family (as for the previous Bernoulli example), we say that the prior is **conjugate** w.r.t the model.

*Handwritten note:* (likelihood) model

Recall the Beta distribution:
$$p(\theta) = \frac{\Gamma(\alpha+\beta)}{\Gamma(\alpha)\Gamma(\beta)} \theta^{\alpha-1}(1-\theta)^{\beta-1} \propto \theta^{\alpha-1}(1-\theta)^{\beta-1},$$

*Handwritten note:*
- ex 1: prior Beta, conjugate w.r.t. model Binomial($\theta$)
- ex 2: prior normal, conjugate w.r.t. model normal($\theta, 1^2$)

14
### Visual Description
A slide with mathematical derivations on a grid paper background. It contains both printed text and handwritten annotations in red and blue.

---

## Page 20
### Content
The posterior mean is $(S+\alpha)/(n+\alpha+\beta)$.

Thus, Bayes estimate:
$$\hat{\theta}_n = \frac{S+\alpha}{n+\alpha+\beta}.$$

*Handwritten note:* Bayes estimator (for $L_2$-loss)

A common choice is $\alpha = \beta = 1$ ($\theta$ is uniform).

*Handwritten note:* Prior Beta(1,1) Spec. case - uninformative prior. $X_1, \dots, X_n \sim \text{Ber}(\theta)$

Then
$$\hat{\theta}_n = \frac{n\bar{X} + 1}{n + 2}$$
$$= \frac{n}{n+2}\bar{X} + \frac{2}{n+2}\frac{1}{2}$$
$$= w\bar{X} + (1-w)\frac{1}{2},$$
where $w = \frac{n}{n+2}$.

*Handwritten notes:*
- $\bar{X}$ is the MLE
- $1/2$ is the mean of U[0,1] prior
- $w \to 1$ when $n \to \infty$

convex combination of the MLE and the prior mean 1/2.

When $n$ is large, $\hat{\theta} \approx \bar{X}_n = \text{the MLE}$

15
### Visual Description
A slide with mathematical derivations on a grid paper background. It includes printed text and blue/red handwritten annotations explaining the components of the Bayes estimator.

---

## Page 21
### Content
**Exercise:** Let $X_1, \dots, X_n \overset{iid}{\sim} N(\theta, \sigma^2)$, $\sigma^2$ known.

*Handwritten note:* unknown mean

Let $\theta \sim N(\mu, \tau^2)$.

*Handwritten note:* conjugate prior to normal model

Then $\theta | (X_1, \dots, X_n) \sim N(a, b^2)$

*Handwritten note:* Posterior normally distr.

where
$$a = \left( \frac{n\tau^2}{\sigma^2 + n\tau^2} \right) \bar{X}_n + \left( \frac{\sigma^2}{\sigma^2 + n\tau^2} \right) \mu, \quad b^2 = \frac{\sigma^2\tau^2}{\sigma^2 + n\tau^2}.$$

*Handwritten notes:*
- $a$ is the posterior mean
- $b^2$ is the posterior variance
- $b^2 \to \frac{\sigma^2}{n}$ as $n \to \infty$
- $\bar{X}_n$ is the MLE of $\theta$
- $\mu$ is the prior mean

The Bayes estimator is
$$\hat{\mu} = w\bar{X}_n + (1-w)\mu$$
where $w = \frac{n\tau^2}{\sigma^2 + n\tau^2}$.

*Handwritten note:* weight $w = \frac{\tau^2}{\sigma^2/n + \tau^2}$

When $n$ is large, $w \approx 1$ and $\hat{\mu} \approx \bar{X}_n$.

*Handwritten note:* That is for large $n$, $\theta|X^n \approx N(\hat{\theta}_{MLE}, \text{var}(\hat{\theta}_{MLE}))$ where $\text{var}(\hat{\theta}_{MLE}) \approx \frac{\sigma^2}{n}$.

16
### Visual Description
A slide with an exercise on Normal-Normal conjugate priors on a grid paper background. It features printed text and extensive blue and red handwritten annotations.

---

## Page 22
### Content
For large $n$, $\theta|X^n \approx N(\hat{\theta}_{MLE}, \text{var}(\hat{\theta}_{MLE}))$

Remark: same is true for fixed $n$ (incl. $n=1$) and prior variance $\tau \to \infty$ "flat prior" (check this)

### Visual Description
Handwritten notes in blue ink on a grid paper background.
