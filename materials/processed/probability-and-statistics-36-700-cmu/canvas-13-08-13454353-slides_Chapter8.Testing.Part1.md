# canvas-13-08-13454353-slides_Chapter8.Testing.Part1

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-13-08-13454353-slides_Chapter8.Testing.Part1.pdf`
Duplicate equivalents: `canvas-13-08-13454353-slides_Chapter8.Testing.Part1.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 20

## Page 1
### Content
# CHAPTER 8 Hypothesis Testing (Part 1): Overview

**Contents**
1. **Testing Overview** (2)
    1.1 Construction of Tests . . . . . . . . . . . . . . . . . . . . . . . 4
    1.2 Evaluating Tests . . . . . . . . . . . . . . . . . . . . . . . . 5
2. **p-values** (13)
3. **Some Famous Tests** (18)
    3.1 Pearson's $\chi^2$ Test . . . . . . . . . . . . . . . . . . . . . . . . . 18

Reference: Wasserman Section 10

### Visual Description
Text-only slide with a table of contents on a light gray grid background.

---

## Page 2
### Content
# 1 Testing Overview

- Let
$$X_1, \dots, X_n \sim f_\theta$$

- We want to test
$$H_0 : \theta = \theta_0$$
versus
$$H_1 : \theta \neq \theta_0$$

### Visual Description
Text-only slide on a light gray grid background.

---

## Page 3
### Content
More generally:
$$H_0 : \theta \in \Theta_0$$
$$H_1 : \theta \in \Theta_1$$

where $\Theta_0 \cup \Theta_1 = \Theta$ and $\Theta_0 \cap \Theta_1 = \emptyset$

**Terminology:** when $\Theta_0$ is a single point $\equiv$ *simple* null. Otherwise *composite* null

### Visual Description
Text-only slide on a light gray grid background.

---

## Page 4
### Content
## 1.1 Construction of Tests

**Ex: Is my coin fair?**

1. Choose a *test statistic* $T_n = T(X_1, \dots, X_n)$
2. Determine the *rejection region* $R$.
3. If $X^n \in R$, reject $H_0$; otherwise retain $H_0$.

### Visual Description
Text-only slide on a light gray grid background. The example text is in purple.

---

## Page 5
### Content
## 1.2 Evaluating Tests

Choose $T$ and $R$ to ensure our tests have desirable/stated properties.

Assume simple $H_0 : \theta = \theta_0$ and reject $H_0$ when $(X_1, \dots, X_n) \in R$

**Power function**
$$\beta(\theta) = P_\theta((X_1, \dots, X_n) \in R).$$

### Visual Description
Text-only slide on a light gray grid background.

---

## Page 6
### Content
For some pre-chosen level $\alpha$, want $R$ s.t.
$$\beta(\theta_0) = P_{\theta_0}((X_1, \dots, X_n) \in R) = \alpha.$$

$\equiv$
$$P(\text{reject } H_0 \text{ when } H_0 \text{ is true}) = \alpha$$
$$P(\text{type I error}) = \alpha$$

### Visual Description
Text-only slide on a light gray grid background.

---

## Page 7
### Content
**Ex: $X_1, \dots, X_n \sim N(\theta, \sigma^2)$ i.i.d., $\sigma^2$ known.**

$$H_0 : \theta = \theta_0$$
$$H_1 : \theta > \theta_0$$

TS?

RR?

TS null distribution?

### Visual Description
Text-only slide on a light gray grid background. The text is mostly in purple.

---

## Page 8
### Content
Reject $H_0$ when $\bar{X}_n - \theta_0 > c$

$\equiv$

Reject $H_0$ when $T(X_1, \dots, X_n) = \frac{\bar{X}_n - \theta_0}{\sigma/\sqrt{n}} > d$

**Power** $\beta(\theta) = P_\theta(T_n > d) = P_\theta\left(\frac{\bar{X}_n - \theta}{\sigma/\sqrt{n}} > d + \frac{\theta_0 - \theta}{\sigma/\sqrt{n}}\right)$
$= P\left(Z > d + \frac{\theta_0 - \theta}{\sigma/\sqrt{n}}\right)$
$= 1 - \Phi\left(d + \frac{\theta_0 - \theta}{\sigma/\sqrt{n}}\right),$

since
$$\frac{\bar{X}_n - \theta}{\sigma/\sqrt{n}} \sim N(0, 1).$$

When $H_0 : \theta = \theta_0$ true, $P(\text{type I error}) = \beta(\theta_0) = 1 - \Phi(d)$

Want $d$ such that $\beta(\theta_0) = \alpha \implies d = \Phi^{-1}(1 - \alpha) = z_\alpha$

### Visual Description
Text-only slide on a light gray grid background. Some keywords and the final derivation are in purple.
## Page 9
### Content
**Example:** $X_1, \dots, X_n \sim N(\theta, \sigma^2)$ i.i.d., $\sigma^2$ known.

$$H_0 : \theta = \theta_0$$
$$H_1 : \theta \neq \theta_0$$

TS?

RR?

TS null distribution?

### Visual Description
Text-only slide with a grid background.

---
## Page 10
### Content
Reject $H_0$ when $|\bar{X}_n - \theta_0| > c$

$\equiv$

Reject $H_0$ when $|T_n(X_1, \dots, X_n)| = \left| \frac{\bar{X}_n - \theta_0}{\sigma/\sqrt{n}} \right| > d$

$\beta(\theta) = P_\theta(T_n < -d) + P_\theta(T_n > d)$
$= P_\theta \left( \frac{\bar{X}_n - \theta}{\sigma/\sqrt{n}} < -d + \frac{\theta_0 - \theta}{\sigma/\sqrt{n}} \right) + P_\theta \left( \frac{\bar{X}_n - \theta}{\sigma/\sqrt{n}} > d + \frac{\theta_0 - \theta}{\sigma/\sqrt{n}} \right)$
$= \Phi \left( -d + \frac{\theta_0 - \theta}{\sigma/\sqrt{n}} \right) + \left\{ 1 - \Phi \left( d + \frac{\theta_0 - \theta}{\sigma/\sqrt{n}} \right) \right\}$

Under $H_0$ we have:
$$\beta(\theta_0) = \Phi(-d) + 1 - \Phi(d) = 2\Phi(-d)$$

Set $\beta(\theta_0) = \alpha \implies d = -\Phi^{-1}(\alpha/2) = \Phi^{-1}(1 - \alpha/2) = z_{\alpha/2}$

### Visual Description
Text-only slide with a grid background.

---
## Page 11
### Content
**Recap:**

For a given TS we set the threshold to ensure that the test has level $\alpha$, i.e. to ensure that the probability of rejecting $H_0$ by mistake is $\alpha$

**Remarks:**

The question is never if the $H_0$ is true or not, since we will never know for sure.

Rather the question is whether we have sufficient evidence to reject $H_0$ or not. There are two possibilities:

1. reject $H_0$ or
2. retain/fail to reject $H_0$. Retaining $H_0$ does not mean that $H_0$ is true. We just don’t have strong enough evidence to reject $H_0$.

All we can do is to make a decision that has the properties we want: a stated $\alpha$ level (probability of rejecting $H_0$ by mistake), and high power.

**Type I and Type II errors:**

*Type I:* $H_0$ is true but we rejected $H_0$

*Type II:* $H_1$ true but we failed to reject $H_0$

### Visual Description
Text-only slide with a grid background.

---
## Page 12
### Content
**RECAP**

**Construction of Tests**

1. Consider an hypothesis about $\theta$
2. Choose a test statistic $T_n = T(X_1, \dots, X_n)$
3. Determine the rejection region $R$ “qualitatively”
   Determine the rejection region $R$ “quantitatively” by ensuring that
   $$\beta(\theta_0) = P_{\theta_0}((X_1, \dots, X_n) \in R)$$
   $$= P(\text{reject } H_0 \text{ when } H_0 \text{ is true})$$
   $$= \alpha$$
4. If $T_n \in R$, reject $H_0$; otherwise retain $H_0$

Am I guaranteed to have made the correct decision?

**Type I and Type II errors:**

*Type I:* $H_0$ is true but we rejected $H_0$

*Type II:* $H_1$ true but we failed to reject $H_0$

### Visual Description
Text-only slide with a grid background.

---
## Page 13
### Content
**2 p-values**

p-value = smallest level ($\alpha$) for which the test would reject $H_0$

Ex: say $H_0 : \theta = \theta_0$ and the size $\alpha$ test is of the form: reject $H_0$ if
$$T_n \geq c_\alpha$$

### Visual Description
Text-only slide with a grid background.

---
## Page 14
### Content
In previous example,

p-value $= P_{\theta_0}(T(X^n) \geq T(x^n)) = P(T(X^n) \geq T(x^n), \text{ when } H_0 \text{ is true})$

$\implies$ p-value = probability under the null of seeing a more (or equally) extreme test statistic than the one you actually observed.

### Visual Description
Text-only slide with a grid background.

---
## Page 15
### Content
Ex: say $H_0 : \theta = \theta_0$ and the size $\alpha$ test is of the form: reject $H_0$ if
$$|T_n| \geq c$$

### Visual Description
Text-only slide with a grid background.

---
## Page 16
### Content
**Remark 1:**

Intuitively, a smaller p-value is stronger evidence against the null. Scientists often report p-values, and informally a p-value of $< 0.01$ is considered strong evidence against the null, and $< 0.05$ is moderate evidence against the null.

BUT

> A p-value is a random variable, because it is a function of the data.

### Visual Description
Text-only slide with a grid background. The final sentence is enclosed in a box.

---
## Page 17
### Content
**Remark 2:**

$$ \text{p-value IS NOT } \mathbb{P}(H_0 \text{ is true}|\text{Data}) $$

### Visual Description
Text-only slide. The remark is centered and the main statement is enclosed in a rectangular box, with "IS NOT" highlighted in red.

---
## Page 18
### Content
### 3 Some Famous Tests
#### 3.1 Pearson's $\chi^2$ Test
**Testing a vector of Gaussian means**

Let $X_1, \dots, X_n \sim N(\theta, I_d), \quad \theta \in \mathbb{R}^d$

$$H_0 : \theta = \theta_0$$
$$H_1 : \theta \neq \theta_0$$

### Visual Description
Text-only slide.

---
## Page 19
### Content
**Testing multinomials**

Let $(X_1, \dots, X_k) \sim Mult(n, (p_1, \dots, p_k))$

$$H_0 : p = p_0$$
$$H_1 : p \neq p_0$$

### Visual Description
Text-only slide.

---
## Page 20
### Content
**Ex:** Mendel's theory predicts that the probability of a pea plant in a certain hybrid generation falling in one of four categories is $\vec{p}_0 = (9/16, 3/16, 3/16, 1/16)$

The observed count vector is $X = (315, 101, 108, 32)$ with $n = 556$

The predicted counts are $\vec{E}_0 = n\vec{p}_0 = (312.75, 104.25, 104.25, 34.75)$

The $\chi^2$ statistic is
$$T = \frac{(315 - 312.75)^2}{312.75} + \frac{(101 - 104.25)^2}{104.25} + \frac{(108 - 104.25)^2}{104.25} + \frac{(32 - 34.75)^2}{34.75}$$
$$= 0.47$$

The 0.05 upper quantile of $\chi^2_3$ is 7.815 $\implies$ retain the null, and conclude that the collected data does not invalidate Mendel's hypothesis.

### Visual Description
Text-only slide. The final conclusion starting from "conclude that..." is written in red text.
