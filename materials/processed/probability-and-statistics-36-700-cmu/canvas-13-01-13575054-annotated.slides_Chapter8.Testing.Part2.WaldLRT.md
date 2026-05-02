# canvas-13-01-13575054-annotated.slides_Chapter8.Testing.Part2.WaldLRT

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-13-01-13575054-annotated.slides_Chapter8.Testing.Part2.WaldLRT.pdf`
Duplicate equivalents: `canvas-13-01-13575054-annotated.slides_Chapter8.Testing.Part2.WaldLRT.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 34

## Page 1
### Content
**CHAPTER 8, Part 2 Hypothesis Testing (cont’d)**

**Contents**
1. **Systematic methods to choose good test statistics** ... 2
   1.1 The Wald Test ..................... 3
      1.1.1 Power of the Wald test . . . . . . . . . . . . . 5
   1.2 The General Likelihood Ratio test (LRT) ....... 6
      1.2.1 Power of the LRT . . . . . . . . . . . . . . . 15
   1.3 The Neyman Pearson test ............... 16
      1.3.1 The Neyman-Pearson Lemma . . . . . . . . 19

Reference: Wasserman Section 10

[Handwritten notes]:
* want valid tests (that control Type I error)
* with high power for a large range of alternatives
* [Arrows pointing to the word "good" in section 1 title]

### Visual Description
Table of contents slide for Chapter 8, Part 2. It features a list of sections with page numbers. There are blue handwritten annotations emphasizing the goals of choosing "good" test statistics: validity (controlling Type I error) and high power.

---

## Page 2
### Content
# 1 Systematic methods to choose good test statistics

So far we have used our intuition to find TS
There are systematic ways to do that

**Wald test** — when the parameter to be tested is a scalar and we use an asymptotically normal estimate as TS
[Handwritten note]: e.g. test $H_0: \theta = \theta_0$ vs $H_a: \theta \neq \theta_0$
$T = \frac{\hat{\theta} - \theta_0}{se(\hat{\theta})} \xrightarrow{under H_0} N(0,1)$
$se(\hat{\theta})$ can be replaced with $se_0$ (std under $H_0$)

**(General) likelihood ratio test** — when the parameter is multi-dimensional
(when the parameter is a scalar, the general LRT is usually equivalent to a Wald test)

**Neyman-Pearson likelihood ratio test** — most powerful test for simple vs simple hypotheses

### Visual Description
Text-based slide introducing three systematic methods for choosing test statistics: Wald test, General LRT, and Neyman-Pearson LRT. Blue handwritten notes provide a specific example for the Wald test, showing the test statistic $T$ and its asymptotic distribution under the null hypothesis.

---

## Page 3
### Content
## 1.1 The Wald Test

$$H_0 : \theta = \theta_0$$
$$H_1 : \theta \neq \theta_0$$

$\theta$ scalar

**TS:** $T = \hat{\theta}$

**RR:** Reject $H_0$ if $|\hat{\theta} - \theta_0| \ge c$

If $T = \text{MLE}$ then as $n \to \infty$, $\sqrt{n I(\theta)}(\hat{\theta} - \theta) \to N(0, 1)$
[Handwritten note]: rescaled test stat

$\implies$ **Null distribution:**
$$\sqrt{n I(\theta_0)}(\hat{\theta} - \theta_0) \to N(0, 1), \quad n \to \infty$$

**RR:**
Reject $H_0$ if $|\hat{\theta} - \theta_0| \ge c \implies$ Reject $H_0$ if $\sqrt{n I(\theta_0)} |(\hat{\theta} - \theta_0)| \ge d$
where $d = \Phi^{-1} \left( 1 - \frac{\alpha}{2} \right)$

### Visual Description
Slide detailing the Wald Test for a scalar parameter. It defines the hypotheses, test statistic (TS), and rejection region (RR). It shows the asymptotic distribution of the MLE and derives the null distribution and the final rejection region using the standard normal quantile. A blue handwritten note identifies the rescaled term as the "rescaled test stat".

---

## Page 4
### Content
[Handwritten notes]:

Recall: $\sqrt{n I_1(\theta)}(\hat{\theta} - \theta) \rightsquigarrow N(0,1)$
or $n \hat{I}_n(\hat{\theta})(\hat{\theta} - \theta) \rightsquigarrow N(0,1)$ if $\hat{I}_n(\hat{\theta}) \xrightarrow{P} I_1(\theta)$

AoS p.153 assumes that $\widehat{SE} \stackrel{\text{def}}{=} \sqrt{\frac{1}{n I(\hat{\theta})}}$ is s.t. $\frac{\hat{\theta} - \theta_0}{\widehat{SE}} \rightsquigarrow N(0,1)$

Under $H_0$, dist of $T$ is $N(0,1)$

[Visual: A normal distribution curve centered at 0. The tails are shaded and labeled $-c_{\alpha/2}$ and $c_{\alpha/2}$ to represent the rejection regions.]

### Visual Description
Handwritten notes on a grid background. The text recalls the asymptotic normality of the MLE and mentions a specific definition of standard error from "AoS" (All of Statistics) page 153. A hand-drawn normal distribution plot illustrates the rejection regions in the tails for a two-sided test.

---

## Page 5
### Content
**Ex:** $H_0 : p = p_0$ in a Bernoulli problem:
Use
$$T = \frac{\hat{p} - p_0}{\sqrt{p_0(1 - p_0)/n}}$$
and reject $H_0$ if $|T| \ge \Phi^{-1} \left( 1 - \frac{\alpha}{2} \right)$

[Handwritten notes]:
Alt. $\widehat{se} = \sqrt{\hat{p}(1-\hat{p})/n}$
both valid tests but different power functions

All examples we have seen so far (where we tested a scalar $\theta$) were Wald tests.

[Handwritten note]: Will discuss Pearson's $\chi^2$ test for multinomial data (AOS sec 10.4) later.

### Visual Description
Slide showing an example of the Wald test applied to a Bernoulli problem. It provides the test statistic $T$ and the rejection rule. Blue handwritten notes suggest an alternative standard error calculation and note that while both are valid, they result in different power functions. A final note mentions a future discussion on Pearson's chi-squared test.

---

## Page 6
### Content
### 1.1.1 Power of the Wald test

**TS** $T = \sqrt{n I(\theta_0)}(\hat{\theta} - \theta_0)$

When $n$ large, for the 2-sided alternative $H_1 : \theta \neq \theta_0$:

$$\beta(\theta) = \mathbb{P}_\theta \left( \sqrt{n I(\theta_0)} |(\hat{\theta} - \theta_0)| \ge d \right) \text{ where } d = \Phi^{-1} \left( 1 - \frac{\alpha}{2} \right)$$

[Handwritten notes]:
$P(W \ge z_{\alpha/2})$
$P(W \le -z_{\alpha/2})$

$$= 1 - \Phi \left( \sqrt{n I(\theta)} (\theta_0 - \theta) - \Phi^{-1} \left( 1 - \frac{\alpha}{2} \right) \right) + \Phi \left( \sqrt{n I(\theta)} (\theta_0 - \theta) + \Phi^{-1} \left( 1 - \frac{\alpha}{2} \right) \right)$$

CAN be calculated

[Visual: A plot of the power function $\beta(\theta)$ against $\theta$. The curve is U-shaped, reaching its minimum value $\alpha$ at $\theta = \theta_0$.]

[Handwritten note]: non-trivial power if $|\theta - \theta_0| \gg \frac{1}{\sqrt{n I(\theta_0)}}$

### Visual Description
Slide explaining the power function $\beta(\theta)$ for the Wald test. It includes the mathematical formula for power and a hand-drawn graph showing how power increases as the true parameter $\theta$ moves away from the null value $\theta_0$. A handwritten note indicates that power becomes significant when the difference between $\theta$ and $\theta_0$ is large relative to the standard error.

---

## Page 7
### Content
[Handwritten notes]:
Wed Nov 19, 2025

* **Previous lectures**
  * Basics of point estimation
    * confidence intervals
    * hypothesis testing
  * Core concepts / large-sample theory
  * Parametric inference (+ bootstrap/MC)

* **Today's lecture**
  * Focus on use cases, examples, applications + connections
  * **LRT**
    * model selection / deviance tests of nested models
    * Ex 1: normally distributed data (cf. large-sample theory)
    * Ex 2: exponentially distributed data (likelihood doesn't satisfy regularity conditions, Wilks' thm doesn't apply)
  * **NP lemma**

### Visual Description
Handwritten lecture notes on a grid background. It outlines the topics covered in previous lectures and sets the agenda for the current lecture, focusing on Likelihood Ratio Tests (LRT) and the Neyman-Pearson (NP) lemma.

---

## Page 8
### Content
[Handwritten notes]:
* **$\chi^2$-test for Multinomial data**
  * Application to testing independence (categorical data)
  * GOF testing (by reducing to a multinomial test by binning)

**Connections:**
* hypothesis test and confidence intervals (equivalent)
* confidence intervals vs. credible intervals

**Next time:** non-parametric inference
e.g.
* permutation test
* plug-in estimators
* non-parametric KDE
* non-parametric regression

### Visual Description
Handwritten notes on a grid background. It continues the lecture outline, mentioning the chi-squared test for multinomial data, connections between different statistical concepts, and a preview of the next topic: non-parametric inference.

---
## Page 9
### Content
**1.2 The General Likelihood Ratio test (LRT)**

Let $X_1, \dots, X_n$ be i.i.d from pdf/pmf $f(x; \theta)$, with likelihood
$$L(\theta|X^n) \stackrel{\text{def}}{=} f(X_1, \dots, X_n; \theta) \stackrel{\text{iid}}{=} \prod_{i=1}^n f(X_i; \theta)$$
Note: $\theta$ is a fixed parameter.

**LR TS** for testing $H_0 : \theta \in \Theta_0$ versus $H_1 : \theta \in \Theta_0^c$

**Test statistic**:
$$\lambda(X^n) = \frac{\sup_{\Theta_0} L(\theta|X^n)}{\sup_{\Theta} L(\theta|X^n)} = \frac{L(\hat{\theta}_0|X^n)}{L(\hat{\theta}|X^n)}$$
- $L(\hat{\theta}_0|X^n)$ is the **restricted MLE**.
- $L(\hat{\theta}|X^n)$ is the **MLE**.

Property: $0 \le \lambda(X^n) \le 1$

**RR?**
Reject for **small** values of $\lambda(X^n) = \frac{L(X^n; \hat{\theta}_0)}{L(X^n; \hat{\theta})}$
or equivalently
reject for **large** values of $-2 \log \lambda(X^n)$

### Visual Description
Hand-annotated lecture slide on grid paper. Key terms like "Likelihood Ratio", "restricted MLE", and "MLE" are circled or underlined in blue and red. The rejection region logic is highlighted with red text and arrows.

---
## Page 10
### Content
[Hand-drawn graph of likelihood function $L(X^n; \theta)$ vs $\theta$]
- $\hat{\theta}_0$ is the restricted MLE.
- $\hat{\theta}_{MLE}$ is the MLE.
- $\Theta_0 \subset \Theta$
- $\Theta$ is the full parameter space.

More generally, LRT comparing likelihoods of two **nested statistical tests**.

[Diagram of nested sets]
- Family of functions $\mathcal{F} = \{f(x; \theta) : \theta \in \Theta\}$
- Reduced family $\mathcal{F}_0 = \{f(x; \theta) : \theta \in \Theta_0\}$
- $\Theta_0 \subset \Theta \implies \mathcal{F}_0 \subset \mathcal{F}$

Ex: Should we use a more complex model?

### Visual Description
Hand-drawn diagrams on grid paper. The top part shows a likelihood curve with marked MLE and restricted MLE points. The bottom part shows a Venn diagram of nested function families $\mathcal{F}_0$ inside $\mathcal{F}$.

---
## Page 11
### Content
$M_{red} \subset M_{complex}$

Test $H_0: M_{red}$ is true vs. $H_1: M_{complex}$

### Visual Description
Hand-written text on grid paper.

---
## Page 12
### Content
Test $H_0: \theta \in \Theta_0$ vs ($H_1: \theta \in \Theta_0^c, \theta \in \Theta$)

**Model selection via hyp. testing:**
When using a more complex model, is the improved fit statistically significant as compared to noise ("sampling error") that would occur if $H_0$ was true?

Need to know the **null distr** - sampling distr of test statistic when $H_0$ is true.

### Visual Description
Hand-written text on grid paper with some highlighting in yellow.

---
## Page 13
### Content
[From Hastie, Tibshirani, Friedman, "Elements of Statistical Learning"]

**5.2.2 Example: South African Heart Disease (Continued)**

In Section 4.4.2 we fit linear logistic regression models to the South African heart disease data. Here we explore nonlinearities in the functions using natural splines. The functional form of the model is
$$\text{logit}[\text{Pr}(\text{chd}|X)] = \theta_0 + h_1(X_1)^T \theta_1 + h_2(X_2)^T \theta_2 + \dots + h_p(X_p)^T \theta_p, \quad (5.6)$$
where each of the $\theta_j$ are vectors of coefficients multiplying their associated vector of natural spline basis functions $h_j$.

[Hand-written note: **logistic GAM**]

... [Text describes the use of four natural spline bases, coding of 'famhist', and backward stepwise deletion using AIC] ...

The AIC statistic is slightly more generous than the likelihood-ratio test (deviance test). Both sbp and obesity are included in this model, while...

### Visual Description
A page from a textbook (page 146) with hand-written annotations. A red circle and arrow point to the logit formula, labeled "logistic GAM".

---
## Page 14
### Content
GLMs: Generalized Linear Models
GAMs: Generalized Additive Models

$r(x) = E(Y|X=x) = \mu(x)$

**Linear reg.:**
$\begin{cases} Y_i|X_i \sim N(\mu_i, \sigma^2) \\ E[Y_i|X_i] = \beta_0 + \sum_{j=1}^q \beta_j X_{ij} \end{cases}$

**Logistic reg.:**
$Y_i \in \{0, 1\}$
$\begin{cases} Y_i|X_i \sim \text{Bernoulli}(p_i) \\ p_i = E[Y_i|X_i] \end{cases}$

**GLM:**
$g(E(Y_i|X_i)) = \beta_0 + \sum_{j=1}^q \beta_j X_{ij}$
where $g$ is the link function.

For logistic:
$\text{logit}(p_i) = \log\left(\frac{p_i}{1-p_i}\right) = \beta_0 + \sum_{j=1}^q \beta_j X_{ij}$

**GAM:**
$\sum_j f_j(X_j)$

### Visual Description
Hand-written notes and formulas on grid paper. Includes a small sketch of a sigmoid-like curve and a linear regression line through data points.

---
## Page 15
### Content
**5.2 Piecewise Polynomials and Splines** (Page 147)

**FIGURE 5.4.** Fitted natural-spline functions for each of the terms in the final model selected by the stepwise procedure. Included are pointwise standard-error bands. The rug plot at the base of each figure indicates the location of each of the sample values for that variable (jittered to break ties).

[Six plots showing $\hat{f}$ for: sbp, tobacco, ldl, famhist, obesity, age]

### Visual Description
A textbook page showing six plots of fitted functions with confidence bands and rug plots. The x-axes represent different health metrics (sbp, tobacco, ldl, famhist, obesity, age) and the y-axes represent the fitted function values.

---
## Page 16
### Content
[From "Elements of Statistical Learning", Page 148]

**TABLE 5.1.** Final logistic regression model, after stepwise deletion of natural splines terms. The column labeled "LRT" is the likelihood-ratio test statistic when that term is deleted from the model, and is the change in deviance from the full model (labeled "none").

| Terms | Df | Deviance | AIC | LRT | P-value |
| :--- | :--- | :--- | :--- | :--- | :--- |
| none | | 458.09 | 502.09 | | |
| sbp | 4 | 467.16 | 503.16 | 9.076 | 0.059 |
| tobacco | 4 | 470.48 | 506.48 | 12.387 | 0.015 |
| ldl | 4 | 472.39 | 508.39 | 14.307 | 0.006 |
| famhist | 1 | 479.44 | 521.44 | 21.356 | 0.000 |
| obesity | 4 | 466.24 | 502.24 | 8.147 | 0.086 |
| age | 4 | 481.86 | 517.86 | 23.768 | 0.000 |

**Hand-written notes:**
For any submodel $M$, $deviance(M) = 2(\hat{\ell}_{sat} - \hat{\ell}_M)$
where $\hat{\ell}_{sat} = \text{log-likelihood of saturated model evaluated at MLE}$
$\hat{\ell}_M = \text{log-likelihood of model M evaluated at its MLE}$

$M_{red} \subset M_{full}$
Test $H_0$: Model with one term dropped vs $H_a$: full model.

### Visual Description
A textbook page containing a table of statistical results. Hand-written annotations in blue define deviance and the hypothesis test being performed. Arrows link the "Deviance" and "LRT" columns to the hand-written formulas.
## Page 17
### Content
$RR = \{\mathbf{x} : \lambda(\mathbf{x}) \le c\}$, where $c \in [0, 1]$ s.t.
$$\sup_{\theta \in \Theta_0} P_\theta(\lambda(\mathbf{X}) \le c) \le \alpha$$

*   **Handwritten annotations in blue:**
    *   $\lambda(\mathbf{X})$ is a "test-statistic is a function of X (random variable)".
    *   $P_\theta(\lambda(\mathbf{X}) \le c)$ is "Prob of rejection".
    *   $\sup_{\theta \in \Theta_0} P_\theta(\lambda(\mathbf{X}) \le c)$ is "max(Prob of Type I Errors)".

*   **Handwritten text in red:**
    In general: distr of test stat $T(X)$ and the cutoff $c_\alpha$ depends on the value of $\theta$ (even if there's no $\theta$ in the expr of $T(X)$).

### Visual Description
The slide is on a grid background. It contains a mathematical definition of a rejection region (RR) for a Likelihood Ratio Test. Blue and red handwritten notes annotate the formal definition, explaining the components of the formula.

---
## Page 18
### Content
**Wilks's Theorem**
**Null distribution:** under regularity conditions
$$T = -2 \log \lambda(\mathbf{X}) \xrightarrow{d} \chi^2_\nu \text{ as } n \to \infty \text{ when } H_0 \text{ is true}$$
$\nu = (\text{# of free parameters in } \theta) - (\text{# of free parameters when } \theta \in \Theta_0)$

*   **Handwritten annotations in blue:**
    *   "smoothness cond + $H_0$ needs to lie strictly within the interior of the parameter space"
    *   "Think Why" (pointing to $\nu$)
    *   "$\nu$ = added df's when going from simpler to more complex models"

*   **Derivation of Rejection Region (RR) in red:**
    $RR = \{\mathbf{x} : \lambda(\mathbf{X}) \le c\}$ where $c \in [0, 1]$ s.t. $\sup_{\theta \in \Theta_0} P_\theta(\lambda(\mathbf{X}) \le c) \le \alpha$
    
    $RR = \{\mathbf{x} : \lambda(\mathbf{X}) \le c\}$
    $= \{\mathbf{x} : 2 \log \lambda(\mathbf{X}) \le 2 \log c\}$
    $= \{\mathbf{x} : -2 \log \lambda(\mathbf{X}) \ge -2 \log c\}$
    
    where $c \in [0, 1]$ s.t. $\sup_{\theta \in \Theta_0} P_\theta(\lambda(\mathbf{X}) \le c) \le \alpha$
    $\equiv$
    where $c \in [0, 1]$ s.t. $\sup_{\theta \in \Theta_0} P_\theta(-2 \log \lambda(\mathbf{X}) \ge \underbrace{-2 \log c}_{\chi^2_{\nu, \alpha}}) \le \alpha$

### Visual Description
The slide explains Wilks's Theorem and the asymptotic distribution of the LRT statistic. It includes a hand-drawn plot of a Chi-squared distribution on the right, with a shaded tail area labeled "reject $H_0$" and "$\approx \text{prob } \alpha$". Red arrows and text show the algebraic transformation of the rejection region from $\lambda(\mathbf{X}) \le c$ to $-2 \log \lambda(\mathbf{X}) \ge \chi^2_{\nu, \alpha}$.

---
## Page 19
### Content
**Ex 1:** Let $X_1, \dots, X_n$ i.i.d. $N(\theta, 1)$
$H_0: \theta = \theta_0$ versus $H_1: \theta \neq \theta_0$
*   $\theta$ vector: $\Theta = \mathbb{R}$ (df: 1)
*   $H_0$: $\theta = \theta_0$ (df: 0)
*   $\nu$? $\nu = 1 - 0 = 1$

**Ex:** $H_0: \theta \le \theta_0$ (df: 1)
$H_1: \theta > \theta_0$ (df: 1)
*   $\nu = 1 - 1 = 0$

**Ex:** $(X_1, \dots, X_5) \sim \text{Multinomial}(n, p)$
$p = (p_1, \dots, p_5)$, $\sum_{i=1}^5 p_i = 1$
*   $H_0: p_4 = p_5 = 0$
*   df for $H_a$ (not $H_0$): $5 - 1 = 4$
*   df for $H_0$: $3 - 1 = 2$
*   $\nu = 4 - 2 = 2$

### Visual Description
Handwritten examples on a grid background calculating the degrees of freedom ($\nu$) for Wilks's Theorem in different testing scenarios: a normal mean test (point null and one-sided) and a multinomial parameter test.

---
## Page 20
### Content
$X_1, \dots, X_n \xrightarrow{iid} N(\theta, 1)$
Test $H_0: \theta = \theta_0$ vs. $H_1: \theta \neq \theta_0$
$\theta$ is scalar so we could do a Wald test, but let's try the LRT
$$\lambda(\mathbf{x}) = \frac{\sup_{\Theta_0} L(\theta|\mathbf{x})}{\sup_{\Theta} L(\theta|\mathbf{x})} = \frac{L(\hat{\theta}_0|\mathbf{x})}{L(\hat{\theta}|\mathbf{x})}$$
*   **Handwritten annotations:** $L(\hat{\theta}_0|\mathbf{x})$ is the "restricted MLE", $L(\hat{\theta}|\mathbf{x})$ is the "MLE".

**Likelihood function:**
$L(\mathbf{x}; \theta) = p(\mathbf{x}^n; \theta) = \prod_{i=1}^n \frac{1}{\sqrt{2\pi}} \exp\left(-\frac{1}{2}(X_i - \theta)^2\right) = \frac{1}{(2\pi)^{n/2}} \exp\left[-\frac{1}{2} \sum_{i=1}^n (X_i - \theta)^2\right]$

**(Unrestricted) MLE:** $\hat{\theta} = \bar{X}_n = \frac{1}{n} \sum_{i=1}^n X_i$
**Restricted MLE:** $\hat{\theta}_0 = \theta_0$ because $\Theta_0 = \{\theta_0\}$

### Visual Description
The slide starts an example of applying the Likelihood Ratio Test to a normal distribution with known variance. It defines the likelihood, the unrestricted MLE (sample mean), and the restricted MLE (the null value). Handwritten notes in blue and yellow highlights emphasize key terms.

---
## Page 21
### Content
$$\lambda(\mathbf{x}) = \frac{(2\pi)^{-n/2} \exp[-\sum_{i=1}^n (x_i - \theta_0)^2/2]}{(2\pi)^{-n/2} \exp[-\sum_{i=1}^n (x_i - \bar{x})^2/2]} = \exp\left[-\frac{1}{2} \left(\sum_{i=1}^n (x_i - \theta_0)^2 - \sum_{i=1}^n (x_i - \bar{x})^2\right)\right]$$

Reject $H_0$ for small values of $\lambda(\mathbf{x})$
$\equiv$
Reject $H_0$ for large values of $-2 \log \lambda(\mathbf{X})$

**RR:** $\mathbf{x} : -2 \log \lambda(\mathbf{X}) \ge \chi^2_{\nu, \alpha}$ where $\nu = 1$

### Visual Description
The slide continues the normal distribution example, simplifying the likelihood ratio $\lambda(\mathbf{x})$. It states the rejection criteria in terms of $\lambda(\mathbf{x})$ and $-2 \log \lambda(\mathbf{X})$. A hand-drawn Chi-squared distribution plot on the right shows the rejection region in the upper tail.

---
## Page 22
### Content
Let's have another look at this example:
$$\lambda(\mathbf{x}) = \exp\left[-\frac{1}{2} \left(\underbrace{\sum_{i=1}^n (x_i - \theta_0)^2}_{\sum_{i=1}^n (x_i - \bar{x})^2 + n(\bar{x} - \theta_0)^2} - \sum_{i=1}^n (x_i - \bar{x})^2\right)\right]$$

*   **Handwritten note:** $x_i - \theta_0 = (x_i - \bar{x}) + (\bar{x} - \theta_0)$
    $(x_i - \theta_0)^2 = (x_i - \bar{x})^2 + (\bar{x} - \theta_0)^2 + 2(x_i - \bar{x})(\bar{x} - \theta_0)$

so
$$\lambda(\mathbf{X}) = \exp[-n(\bar{X} - \theta_0)^2/2]$$

*   **Handwritten notes in red:**
    *   "Reject for small values of $\lambda(X)$"
    *   "For any $\theta_0$, $\lambda(X)$ is a strictly decreasing function of the pivot $\|\bar{X}_n - \theta_0\|$."
    *   "Reject for small $\lambda(x^n)$ means reject for large values of $\|\bar{X}_n - \theta_0\|$."

Test $H_0: \theta = \theta_0$ vs. $H_1: \theta \neq \theta_0$
**RR** $= \{X : \lambda(\mathbf{X}) \le c\} = \{X : |\bar{X} - \theta_0| \ge \underbrace{\sqrt{-2(\log c)/n}}_{d}\}$

*   **Handwritten note:** "MLE. This is just the Wald test!"

When $\theta$ is scalar and the Wald test is based on the MLE, the Wald and LR tests are (asymptotically) equivalent.

### Visual Description
The slide provides an algebraic simplification of the LRT statistic for the normal mean example, showing it reduces to a test based on the sample mean. It concludes that for this case, the LRT is equivalent to the Wald test.

---
## Page 23
### Content
**Ex 2:** $X_1, \dots, X_n$ i.i.d. shifted exponential with pdf
$$f(x; \theta) = \begin{cases} e^{-(x-\theta)} & x \ge \theta \\ 0 & x < \theta \end{cases}$$
where $-\infty < \theta < \infty$.
Test $H_0: \theta \le \theta_0$ versus $H_1: \theta > \theta_0$

**Likelihood:**
$L(\mathbf{x}^n; \theta) = \prod_{i=1}^n \exp(-(X_i - \theta)) I[X_i \ge \theta] = \exp(-\sum X_i + n\theta) I\{\theta \le X_{(1)}\}$

$L(\theta|\mathbf{x}) = \begin{cases} e^{-\sum x_i + n\theta} & \theta \le x_{(1)} \\ 0 & \theta > x_{(1)} \end{cases}$

### Visual Description
The slide introduces a second example: a shifted exponential distribution. It defines the pdf and the likelihood function, including the indicator function for the parameter $\theta$ being less than or equal to the first order statistic $X_{(1)}$. A hand-drawn plot of the pdf $f(x; \theta)$ is shown on the right.

---
## Page 24
### Content
Test $H_0: \theta \le \theta_0$ vs. $H_1: \theta > \theta_0$
$$L(X_1, \dots, X_n; \theta) = \begin{cases} e^{-\sum X_i + n\theta} & \theta \le X_{(1)} \\ 0 & \theta > X_{(1)} \end{cases}$$

*   **Handwritten note:** "likelihood $L(\theta|\mathbf{x})$ is an increasing function of $\theta$ on $-\infty < \theta \le X_{(1)}$"

**Unrestricted MLE:** $\hat{\theta} = X_{(1)}$
$\Theta = (-\infty, \infty)$

**Restricted MLE?** Depends on $\theta_0$.
$\Theta_0 = (-\infty, \theta_0]$

### Visual Description
Handwritten notes on a grid background analyzing the likelihood function for the shifted exponential example. A plot of the likelihood $L(\theta)$ shows it increasing exponentially until it reaches $X_{(1)}$, where it then drops to zero. The unrestricted MLE is identified as $X_{(1)}$.

---
==End of PDF==
## Page 25
### Content
Two cases:

(I) If $\theta_0 \ge X_{(1)}$
$\hat{\theta}_0 = \hat{\theta} = X_{(1)}$
$\lambda(X) = 1$

(II) If $\theta_0 < X_{(1)}$
$\begin{cases} \hat{\theta}_0 = \theta_0 \\ \hat{\theta} = X_{(1)} \end{cases}$
$\lambda(X^n) = \frac{e^{n\theta_0}}{e^{nX_{(1)}}} = e^{-n(X_{(1)} - \theta_0)}$

### Visual Description
Handwritten notes on a grid background detailing two cases for a likelihood ratio test calculation involving the first order statistic $X_{(1)}$.

---
## Page 26
### Content
$\lambda(\mathbf{x}) = \begin{cases} 1 & x_{(1)} \le \theta_0 \\ e^{-n(x_{(1)} - \theta_0)} & x_{(1)} > \theta_0 \end{cases}$ (Decreasing func of $X_{(1)}$)

Reject $H_0$ if $\lambda(\mathbf{X}) \le c \iff -2 \log \lambda(\mathbf{X}) \ge d$ (Reject when)

Null distr of $\lambda(X)$?

Equivalent Wald test?

Wilk's theorem does not apply! $\chi^2_{df}$ because the regularity/smoothness conditions don't hold.

Reject when $\lambda(X^n) \le c$ or when $\underbrace{X_{(1)} - \theta_0}_{\text{MLE}} \text{ large } \ge d$
Assuming $X_{(1)} - \theta_0 > 0$

To find the cut-off for a level-$\alpha$ test, compute the $\mathbb{P}(X_{(1)} - \theta_0 \ge d_\alpha)$
Recall: Distr. of $X_{(1)}$ for exponentially distr data

### Visual Description
A mix of typed text and handwritten blue and red annotations on a grid background. It discusses the rejection region for a likelihood ratio test and notes that Wilk's theorem is not applicable due to regularity conditions.

---
## Page 27
### Content
**1.2.1 Power of the LRT**

It is generally too difficult to calculate the power of the LRT, unless it reduces to the Wald test

An exception is the Neyman-Pearson LRT, which is the most powerful test for testing simple versus simple hypotheses

### Visual Description
Text-only slide with a header and two bullet points regarding the power of the Likelihood Ratio Test (LRT).

---
## Page 28
### Content
**1.3 The Neyman Pearson test**
$\Theta_0 = \{\theta_0\}$
$\Theta = \{\theta_0, \theta_1\}$

$H_0 : \theta = \theta_0$ (simple)
$H_1 : \theta = \theta_1$

Neyman Pearson test statistic:
$$\Lambda(x) = \frac{L(x; \theta_0)}{L(x; \theta_1)} = \frac{f_0(x)}{f_1(x)}$$

Reject $H_0$ if
$$\Lambda(x) \le c$$
where $c^*$ is s.t.
$$\mathbb{P}_0(\Lambda(x) \le c) = \alpha$$
(null distr? of $\Lambda(x)$)

Do not use Wilk's theorem! (Regularity conditions don't apply)

Among all level-$\alpha$ tests, the LRT maximizes the power $\beta(\theta_1)$

### Visual Description
A mix of typed text and handwritten blue and red annotations. It defines the Neyman-Pearson test for simple hypotheses and emphasizes that Wilk's theorem should not be used.

---
## Page 29
### Content
**Ex:** Let $X_1, \dots, X_n$ i.i.d $N(\theta, 1)$ (scalar, unknown mean here known variance)

Test $H_0 : \theta = \theta_0$ versus $H_1 : \theta = \theta_1$ ($df=0$ for both)

Comment: $X_1, \dots, X_n \sim N(\mu, \sigma^2)$, $\sigma^2$ unknown. Test $H_0: \mu = \mu_0$ vs $H_1: \mu \ne \mu_0$. Not simple $H_0$. $\Theta_0 = \{(\mu_0, \sigma^2) : \text{all } \sigma > 0\}$

$$L(\theta) = (2\pi)^{-n/2} \exp\left[-\sum_{i=1}^n (x_i - \theta)^2/2\right]$$

so

$$\Lambda(\mathbf{x}) = \frac{(2\pi)^{-n/2} \exp[-\sum_{i=1}^n (x_i - \theta_0)^2/2]}{(2\pi)^{-n/2} \exp[-\sum_{i=1}^n (x_i - \theta_1)^2/2]}$$
$$= \exp \left[ -\frac{1}{2} \left( \sum_{i=1}^n (x_i - \theta_0)^2 - \sum_{i=1}^n (x_i - \theta_1)^2 \right) \right]$$

Reject $H_0$ when $\Lambda(x) \le c$ where $c$ is s.t.

Hint: expand expr... $(\theta_0^2 - \theta_1^2) - 2n\bar{X}_n(\theta_0 - \theta_1)$

**Case I:** suppose $\theta_1 > \theta_0$
then $\Lambda(x^n)$ is decreasing func of $\bar{X}_n$
Reject when $\bar{X}_n > k_{\theta_0}$ (cut-off does not depend on $\theta_1$)

### Visual Description
A mix of typed text and handwritten blue annotations. It works through an example of the Neyman-Pearson test for a Normal distribution with known variance, including a comment on simple vs. composite hypotheses.

---
## Page 30
### Content
**Case II** Suppose $\theta_1 < \theta_0$

Then $\lambda(x^n)$ is an increasing function of $\bar{X}_n$

$\implies$ Reject when $\bar{X}_n$ is small

Recall: $X_1, \dots, X_n \sim N(\theta, 1)$
$\implies \frac{1}{n} \sum_{i=1}^n X_i \sim N(\theta, \frac{1}{n})$
$\underbrace{\sqrt{n}(\bar{X}_n - \theta)}_{=Z} \sim N(0, 1)$ standard normal R.V.

### Visual Description
Handwritten notes in blue on a grid background continuing the example from the previous page, focusing on Case II where $\theta_1 < \theta_0$.

---
## Page 31
### Content
Remark 1:
Do not confuse LRT with Wilk's Theorem!

Remark 2:
Testing $H_0: \theta = \theta_0$ vs. $H_1: \theta = \theta_1$ does not necessarily mean simple-vs-simple hypothesis (w/o context).
What is your model and parameter space?

### Visual Description
Handwritten notes in red on a grid background providing two cautionary remarks about the Likelihood Ratio Test and hypothesis testing context.

---
## Page 32
### Content
**1.3.1 The Neyman-Pearson Lemma**

The NP test is the most powerful test of size $\alpha$.

(Proof:)
For any test, define the indicator
$$\phi(x) = \begin{cases} 1, & \text{if } x \in R \\ 0, & \text{if } x \notin R \end{cases}$$

Then
Power $= \int_x \phi(x) f_1(x) dx$ and Size $= \int_x \phi(x) f_0(x) dx$

### Visual Description
Typed slide with handwritten blue annotations. It introduces the Neyman-Pearson Lemma and begins a proof by defining an indicator function for the rejection region.

---
## Page 33
### Content
We will prove that for any $\alpha$ level test $A$:

$$\int_x (\phi_{NP}(x) - \phi_A(x)) \left( f_1(x) - \frac{f_0(x)}{c^*} \right) dx \ge 0$$

which implies:

$$\int_x (\phi_{NP}(x) - \phi_A(x)) f_1(x) dx \ge \frac{1}{c^*} \int_x (\phi_{NP}(x) - \phi_A(x)) f_0(x) dx$$

$$= \frac{1}{c^*} \left( \underbrace{\int_x \phi_{NP}(x) f_0(x) dx}_{= \alpha} - \underbrace{\int_x \phi_A(x) f_0(x) dx}_{\le \alpha} \right)$$

$$\ge 0$$

that is, the power of NP test is higher than the power of test A

20

### Visual Description
The slide contains mathematical derivations on a light grid background. It shows a proof involving integrals of test functions $\phi_{NP}$ and $\phi_A$ against probability density functions $f_0$ and $f_1$. Underbraces are used to identify terms equal to or less than $\alpha$. The page number "20" is at the bottom center.

---

## Page 34
### Content
Need to prove:

$$\int_x \underbrace{(\phi_{NP}(x) - \phi_A(x))}_{T_1} \underbrace{\left( f_1(x) - \frac{f_0(x)}{c^*} \right)}_{T_2} dx \ge 0$$

1. If data $x$ s.t. both tests reject or both tests accept, then $T_1 = 1 - 1 = 0$ or $T_1 = 0 - 0 = 0$
   so $T_1 \times T_2 \ge 0$

2. If data $x$ s.t. NP test rejects ($\phi_{NP}(x) = 1$) and test A retains ($\phi_A(x) = 0$), then $T_1 \ge 0$
   Now NP test rejects $\equiv \frac{f_0(x)}{f_1(x)} \le c^* \implies T_2 \ge 0$
   so $T_1 \times T_2 \ge 0$

3. Conversely, if NP accepts and test A rejects then both $T_1$ and $T_2$ are negative
   so $T_1 \times T_2 \ge 0$

$\implies$ for every sample $x$, $T_1 \times T_2 \ge 0$ so integral wrt $x$ is also positive

21

### Visual Description
The slide continues the mathematical proof from the previous page on a light grid background. It breaks down the proof into three logical cases to show that the product of two terms $T_1$ and $T_2$ is always non-negative. The page number "21" is at the bottom center.
