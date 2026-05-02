# canvas-13-05-13493921-slides_Chapter8.Testing.Part2.WaldLRT

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-13-05-13493921-slides_Chapter8.Testing.Part2.WaldLRT.pdf`
Duplicate equivalents: `canvas-13-05-13493921-slides_Chapter8.Testing.Part2.WaldLRT.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 21

## Page 1
### Content
**CHAPTER 8, Part 2 Hypothesis Testing (cont’d)**

**Contents**

1. **Systematic methods to choose good test statistics** **2**
   1.1 The Wald Test . . . . . . . . . . . . . . . . . . . . . 3
      1.1.1 Power of the Wald test . . . . . . . . . . . . . 5
   1.2 The General Likelihood Ratio test (LRT) . . . . . . . 6
      1.2.1 Power of the LRT . . . . . . . . . . . . . . . 15
   1.3 The Neyman Pearson test . . . . . . . . . . . . . . . 16
      1.3.1 The Neyman-Pearson Lemma . . . . . . . . 19

Reference: Wasserman Section 10

1
### Visual Description
Table of contents slide for Chapter 8, Part 2 on Hypothesis Testing. The background is a light grid pattern.

---
## Page 2
### Content
**1 Systematic methods to choose good test statistics**

So far we have used our intuition to find TS
There are systematic ways to do that

**Wald test** — when the parameter to be tested is a scalar and we use an asymptotically normal estimate as TS

**(General) likelihood ratio test** — when the parameter is multi-dimensional
(when the parameter is a scalar, the general LRT is usually equivalent to a Wald test)

**Neyman-Pearson likelihood ratio test** — most powerful test for simple vs simple hypotheses

2
### Visual Description
Text-only slide.

---
## Page 3
### Content
**1.1 The Wald Test**

$$H_0 : \theta = \theta_0$$
$$H_1 : \theta \neq \theta_0$$
$\theta$ scalar

**TS:** $T = \hat{\theta}$

**RR:** Reject $H_0$ if $|\hat{\theta} - \theta_0| \geq c$

---
If $T = \text{MLE}$ then as $n \to \infty$, $\sqrt{nI(\theta)}(\hat{\theta} - \theta) \to N(0, 1)$

$\implies$ **Null distribution:**
$$\sqrt{nI(\theta_0)}(\hat{\theta} - \theta_0) \to N(0, 1), \quad n \to \infty$$

**RR:**
Reject $H_0$ if $|\hat{\theta} - \theta_0| \geq c \implies$ Reject $H_0$ if $\sqrt{nI(\theta_0)}|(\hat{\theta} - \theta_0)| \geq d$
where $d = \Phi^{-1} \left( 1 - \frac{\alpha}{2} \right)$

3
### Visual Description
Slide detailing the Wald Test, including hypotheses, test statistic (TS), rejection region (RR), and the asymptotic null distribution using Fisher Information $I(\theta)$.

---
## Page 4
### Content
**Ex:** $H_0 : p = p_0$ in a Bernoulli problem:
Use
$$T = \frac{\hat{p} - p_0}{\sqrt{p_0(1 - p_0)/n}}$$
and reject $H_0$ if $|T| \geq \Phi^{-1} \left( 1 - \frac{\alpha}{2} \right)$

All examples we have seen so far (where we tested a scalar $\theta$) were Wald tests.

4
### Visual Description
Text-only slide showing an example of the Wald test applied to a Bernoulli problem.

---
## Page 5
### Content
**1.1.1 Power of the Wald test**

**TS** $T = \sqrt{nI(\theta_0)}(\hat{\theta} - \theta_0)$

When $n$ large, for the 2-sided alternative $H_1 : \theta \neq \theta_0$:

$$\beta(\theta) = \mathbb{P}_\theta \left( \sqrt{nI(\theta_0)}|(\hat{\theta} - \theta_0)| \geq d \right) \text{ where } d = \Phi^{-1} \left( 1 - \frac{\alpha}{2} \right)$$

$$= 1 - \Phi \left( \sqrt{nI(\theta)}(\theta_0 - \theta) - \Phi^{-1} \left( 1 - \frac{\alpha}{2} \right) \right)$$
$$+ \Phi \left( \sqrt{nI(\theta)}(\theta_0 - \theta) + \Phi^{-1} \left( 1 - \frac{\alpha}{2} \right) \right)$$

CAN be calculated

5
### Visual Description
Slide showing the derivation of the power function $\beta(\theta)$ for the Wald test under large sample conditions.

---
## Page 6
### Content
**1.2 The General Likelihood Ratio test (LRT)**

Let $X_1, \dots, X_n$ be i.i.d from pdf/pmf $f(x; \theta)$, with likelihood
$$L(\theta|X^n) = f(X_1, \dots, X_n; \theta) = \prod_{i=1}^n f(X_i; \theta)$$

**LR TS** for testing $H_0 : \theta \in \Theta_0$ versus $H_1 : \theta \in \Theta_0^c$
$$\lambda(X^n) = \frac{\sup_{\Theta_0} L(\theta|X^n)}{\sup_{\Theta} L(\theta|X^n)} = \frac{L(\hat{\theta}_0|X^n)}{L(\hat{\theta}|X^n)}$$

**RR?**

6
### Visual Description
Slide introducing the General Likelihood Ratio Test (LRT), defining the likelihood function and the likelihood ratio test statistic $\lambda(X^n)$.

---
## Page 7
### Content
$$RR = \{ \mathbf{x} : \lambda(\mathbf{x}) \leq c \}, \text{ where } c \in [0, 1] \text{ s.t.}$$

$$\sup_{\theta \in \Theta_0} P_\theta(\lambda(\mathbf{X}) \leq c) \leq \alpha$$

7
### Visual Description
Slide defining the Rejection Region (RR) for the Likelihood Ratio Test based on a significance level $\alpha$.

---
## Page 8
### Content
**Null distribution:** under regularity conditions
$T = -2 \log \lambda(\mathbf{X}) \to \chi^2_\nu$ as $n \to \infty$ when $H_0$ is true

$\nu = (\text{# of free parameters in } \theta) - (\text{# of free parameters when } \theta \in \Theta_0)$

$$RR = \{ \mathbf{x} : \lambda(\mathbf{X}) \leq c \}$$
where $c \in [0, 1]$ s.t. $\sup_{\theta \in \Theta_0} P_\theta(\lambda(\mathbf{X}) \leq c) \leq \alpha$

$$RR = \{ \mathbf{x} : \lambda(\mathbf{X}) \leq c \}$$
$$= \{ \mathbf{x} : 2 \log \lambda(\mathbf{X}) \leq 2 \log c \}$$
$$= \{ \mathbf{x} : -2 \log \lambda(\mathbf{X}) \geq -2 \log c \}$$

where $c \in [0, 1]$ s.t. $\sup_{\theta \in \Theta_0} P_\theta(\lambda(\mathbf{X}) \leq c) \leq \alpha$
$\equiv$
where $c \in [0, 1]$ s.t. $\sup_{\theta \in \Theta_0} P_\theta(-2 \log \lambda(\mathbf{X}) \geq \underbrace{-2 \log c}_{\chi^2_{\nu, \alpha}}) \leq \alpha$

8
### Visual Description
Slide explaining the asymptotic null distribution of the LRT statistic (Wilks' Theorem) and how it relates to the rejection region using the Chi-squared distribution. A brace is used to identify $-2 \log c$ as the critical value $\chi^2_{\nu, \alpha}$.

---
## Page 9
### Content
**Ex:** Let $X_1, \dots, X_n$ i.i.d $N(\theta, 1)$

$H_0 : \theta = \theta_0$ versus $H_1 : \theta \neq \theta_0$

$\nu$ ?

### Visual Description
The slide contains hand-written style text on a light gray grid background. It introduces an example of a hypothesis test for the mean of a normal distribution with known variance.

---

## Page 10
### Content
$\theta$ is scalar so we could do a Wald test, but let's try the LRT

$$\lambda(\mathbf{x}) = \frac{\sup_{\Theta_0} L(\theta|\mathbf{x})}{\sup_{\Theta} L(\theta|\mathbf{x})} = \frac{L(\theta_0|\mathbf{x})}{L(\hat{\theta}|\mathbf{x})}$$

### Visual Description
The slide contains hand-written style text and a mathematical formula for the Likelihood Ratio Test (LRT) statistic $\lambda(\mathbf{x})$ on a light gray grid background.

---

## Page 11
### Content
$$\lambda(\mathbf{x}) = \frac{(2\pi)^{-n/2} \exp[-\sum_{i=1}^n (x_i - \theta_0)^2/2]}{(2\pi)^{-n/2} \exp[-\sum_{i=1}^n (x_i - \bar{x})^2/2]}$$

$$= \exp \left[ -\frac{1}{2} \left( \sum_{i=1}^n (x_i - \theta_0)^2 - \sum_{i=1}^n (x_i - \bar{x})^2 \right) \right]$$

Reject $H_0$ for small values of $\lambda(\mathbf{x})$
$\equiv$
Reject $H_0$ for large values of $-2 \log \lambda(\mathbf{X})$

**RR:** $\mathbf{x} : -2 \log \lambda(\mathbf{X}) \geq \chi^2_{\nu, \alpha}$ where $\nu = 1$

### Visual Description
The slide shows the mathematical derivation of the LRT statistic for the normal distribution example and defines the rejection region (RR) using the chi-squared distribution. The background is a light gray grid.

---

## Page 12
### Content
Let's have another look at this example:

$$\lambda(\mathbf{x}) = \exp \left[ -\frac{1}{2} \left( \underbrace{\sum_{i=1}^n (x_i - \theta_0)^2}_{\sum_{i=1}^n (x_i - \bar{x})^2 + n(\bar{x} - \theta_0)^2} - \sum_{i=1}^n (x_i - \bar{x})^2 \right) \right]$$

so

$$\lambda(\mathbf{X}) = \exp[-n(\bar{X} - \theta_0)^2/2]$$

$$\mathbf{RR} = \{ \mathbf{X} : \lambda(\mathbf{X}) \leq c \} = \{ \mathbf{X} : |\bar{X} - \theta_0| \geq \underbrace{\sqrt{-2(\log c)/n}}_{d} \}$$

When $\theta$ is scalar and the Wald test is based on the MLE, the Wald and LR tests are (asymptotically) equivalent

### Visual Description
The slide continues the normal distribution example, simplifying the LRT statistic and showing the rejection region in terms of the sample mean. It concludes with a note on the asymptotic equivalence of Wald and LR tests. The background is a light gray grid.

---

## Page 13
### Content
**Ex:** $X_1, \dots, X_n$ i.i.d. exponential with pdf

$$f(x; \theta) = \begin{cases} e^{-(x-\theta)} & x \geq \theta \\ 0 & x < \theta \end{cases}$$

where $-\infty < \theta < \infty$.

Test $H_0 : \theta \leq \theta_0$ versus $H_1 : \theta > \theta_0$

$$L(\theta|\mathbf{x}) = \begin{cases} e^{-\sum x_i + n\theta} & \theta \leq x_{(1)} \\ 0 & \theta > x_{(1)} \end{cases}$$

### Visual Description
The slide introduces a new example involving an exponential distribution with a location parameter $\theta$. It defines the pdf, the hypotheses, and the likelihood function. The background is a light gray grid.

---

## Page 14
### Content
$$\lambda(\mathbf{x}) = \begin{cases} 1 & x_{(1)} \leq \theta_0 \\ e^{-n(x_{(1)} - \theta_0)} & x_{(1)} > \theta_0 \end{cases}$$

Reject $H_0$ if $\lambda(\mathbf{X}) \leq c \equiv -2 \log \lambda(\mathbf{X}) \geq d$

Equivalent Wald test?

### Visual Description
The slide provides the LRT statistic for the exponential distribution example and the rejection rule. It ends with a question about the equivalent Wald test. The background is a light gray grid.

---

## Page 15
### Content
### 1.2.1 Power of the LRT

It is generally too difficult to calculate the power of the LRT, unless it reduces to the Wald test

An exception is the Neyman-Pearson LRT, which is the most powerful test for testing simple versus simple hypotheses

### Visual Description
Text-only slide. The slide discusses the difficulty of calculating the power of the LRT and mentions the Neyman-Pearson test as an exception. The background is a light gray grid.

---

## Page 16
### Content
### 1.3 The Neyman Pearson test

$$H_0 : \theta = \theta_0$$
$$H_1 : \theta = \theta_1$$

Neyman Pearson test statistic:

$$\Lambda(x) = \frac{L(x; \theta_0)}{L(x; \theta_1)} = \frac{f_0(x)}{f_1(x)}$$

Reject $H_0$ if

$$\Lambda(x) \quad \text{[blank]}$$

where $c^*$ is s.t.

$$\mathbb{P}_0( \quad \text{[blank]} \quad ) = \alpha$$

### Visual Description
The slide introduces the Neyman-Pearson test for simple hypotheses, defining the test statistic as a ratio of likelihoods. There are blank spaces for the rejection rule and the condition for the critical value $c^*$. The background is a light gray grid.

---
## Page 17
### Content
**Ex:** Let $X_1, \dots, X_n$ i.i.d $N(\theta, 1)$

Test $H_0 : \theta = \theta_0$ versus $H_1 : \theta = \theta_1$

$$L(\theta) = (2\pi)^{-n/2} \exp \left[ -\sum_{i=1}^n (x_i - \theta)^2/2 \right]$$

so

$$\Lambda(\mathbf{x}) = \frac{(2\pi)^{-n/2} \exp[-\sum_{i=1}^n (x_i - \theta_0)^2/2]}{(2\pi)^{-n/2} \exp[-\sum_{i=1}^n (x_i - \theta_1)^2/2]}$$
$$= \exp \left[ -\frac{1}{2} \left( \sum_{i=1}^n (x_i - \theta_0)^2 - \sum_{i=1}^n (x_i - \theta_1)^2 \right) \right]$$

Reject $H_0$ when $\Lambda(x) \le c$ where $c$ is s.t.

### Visual Description
Text-only slide with a light gray grid background. The content consists of mathematical derivations for a likelihood ratio test example.

---

## Page 18
### Content
**Ex:** Let $X_1, \dots, X_n$ i.i.d $N(\theta, 1)$

Test $H_0 : \theta = \theta_0$ versus $H_1 : \theta = \theta_1$

$$L(\theta) = (2\pi)^{-n/2} \exp \left[ -\sum_{i=1}^n (x_i - \theta)^2/2 \right]$$

so

$$\Lambda(\mathbf{x}) = \frac{(2\pi)^{-n/2} \exp[-\sum_{i=1}^n (x_i - \theta_0)^2/2]}{(2\pi)^{-n/2} \exp[-\sum_{i=1}^n (x_i - \theta_1)^2/2]}$$
$$= \exp \left[ -\frac{1}{2} \left( \sum_{i=1}^n (x_i - \theta_0)^2 - \sum_{i=1}^n (x_i - \theta_1)^2 \right) \right]$$

Reject $H_0$ when $\Lambda(x) \le c$ where $c$ is s.t.

### Visual Description
Text-only slide with a light gray grid background. This page is identical to page 17.

---

## Page 19
### Content
### 1.3.1 The Neyman-Pearson Lemma

The NP test is the most powerful test of size $\alpha$.

**Proof:**

For any test, define the indicator

$$\phi(x) = \begin{cases} 1, & \text{if } x \in R \\ 0, & \text{if } x \notin R \end{cases}$$

Then

$$\text{Power} = \int_x \phi(x) f_1(x) dx \quad \text{and} \quad \text{Size} = \int_x \phi(x) f_0(x) dx$$

### Visual Description
Text-only slide with a light gray grid background. It introduces the Neyman-Pearson Lemma and defines the indicator function, power, and size for a statistical test.

---

## Page 20
### Content
We will prove that for any $\alpha$ level test $A$:

$$\int_x (\phi_{NP}(x) - \phi_A(x)) \left( f_1(x) - \frac{f_0(x)}{c^*} \right) dx \ge 0$$

which implies:

$$\int_x (\phi_{NP}(x) - \phi_A(x)) f_1(x) dx \ge \frac{1}{c^*} \int_x (\phi_{NP}(x) - \phi_A(x)) f_0(x) dx$$

$$= \frac{1}{c^*} \left( \underbrace{\int_x \phi_{NP}(x) f_0(x) dx}_{= \alpha} - \underbrace{\int_x \phi_A(x) f_0(x) dx}_{\le \alpha} \right)$$

$$\ge 0$$

that is, the power of NP test is higher than the power of test A

### Visual Description
Text-only slide with a light gray grid background. It continues the proof of the Neyman-Pearson Lemma using integral inequalities and underbraces to label terms as $\alpha$ and $\le \alpha$.

---

## Page 21
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

### Visual Description
Text-only slide with a light gray grid background. It provides a case-by-case analysis to show that the integrand in the Neyman-Pearson Lemma proof is non-negative for all $x$. Underbraces are used to define $T_1$ and $T_2$.

---
