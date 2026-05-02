# canvas-13-06-13488097-TEMP_annotated.slides_Chapter8.Testing.Part1

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-13-06-13488097-TEMP_annotated.slides_Chapter8.Testing.Part1.pdf`
Duplicate equivalents: `canvas-13-06-13488097-TEMP_annotated.slides_Chapter8.Testing.Part1.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `MIXED`
Pages: 33

## Page 1
### Content
**CHAPTER 8 Hypothesis Testing (Part 1): Overview**

**Contents**
1. **Testing Overview** (Page 2)
   1.1 Construction of Tests (Page 4)
   1.2 Evaluating Tests (Page 5)
2. **p-values** (Page 13)
3. **Some Famous Tests** (Page 18)
   3.1 Pearson's $\chi^2$ Test (Page 18)

Reference: Wasserman Section 10

---
**Recall (Lecture 6)**
Suppose $\{X_1, \dots, X_n\} \stackrel{iid}{\sim} F$
Quantity of interest $\theta = T(F)$ "statistical function"
e.g., scalar, vector, pdf, CDF

**Three broad types of inference:**
* **point estimation**
  $\hat{\theta} = \hat{\theta}(X_1, \dots, X_n)$
* **interval estimation**
  e.g., $[L(X_1, \dots, X_n), U(X_1, \dots, X_n)]$
* **hypothesis testing** (indicated with an arrow)

### Visual Description
The slide contains a printed table of contents for Chapter 8. There are extensive handwritten notes in blue ink. The notes define the setup for inference with i.i.d. variables and list three types of inference: point estimation, interval estimation, and hypothesis testing. A blue arrow points specifically to "hypothesis testing".

---

## Page 2
### Content
# 1 Testing Overview

- Let
$$X_1, \dots, X_n \sim f_\theta$$

- We want to test
$$H_0 : \theta = \theta_0$$
(Handwritten: null hypothesis (default))
versus
$$H_1 : \theta \neq \theta_0$$

(Handwritten: hypothesis testing cf. legal trial)

### Visual Description
The slide introduces the basic setup for hypothesis testing. It defines the null hypothesis $H_0$ and the alternative hypothesis $H_1$. Handwritten notes in blue clarify that $H_0$ is the "default" and suggest a comparison between hypothesis testing and a "legal trial".

---

## Page 3
### Content
More generally:
$$H_0 : \theta \in \Theta_0$$
$$H_1 : \theta \in \Theta_1$$
(Handwritten: $= \Theta_0^c$)

where $\Theta_0 \cup \Theta_1 = \Theta$ and $\Theta_0 \cap \Theta_1 = \emptyset$

**Terminology:** when $\Theta_0$ is a single point $\equiv$ *simple* null. Otherwise *composite* null.

### Visual Description
The slide generalizes the hypotheses to sets $\Theta_0$ and $\Theta_1$. Handwritten notes in blue indicate that $\Theta_1$ is the complement of $\Theta_0$ ($\Theta_0^c$). It also defines "simple" and "composite" null hypotheses with blue underlines.

---

## Page 4
### Content
### 1.1 Construction of Tests
**Ex: Is my coin fair?**
(Handwritten: $X_1, \dots, X_n \stackrel{iid}{\sim} \text{Ber}(\theta)$)
(Handwritten: Test $H_0: \theta = 1/2$ vs. $H_1: \theta \neq 1/2$)

1. Choose a **test statistic** $T_n = T(X_1, \dots, X_n)$
   (Handwritten: evidence in data; data are random $\rightarrow$ random)
   e.g. $\hat{\theta} = \bar{X}_n$ (sample prop. of heads)

   To make a decision whether to reject $H_0$ (default), need to know "sampling dist. of $T_n$ when $H_0$ is true" (Handwritten: theory; null distr.)

2. Determine the **rejection region** $R$.
   (Handwritten: Reject $H_0$ when $|\hat{\theta} - 1/2| > c$)

3. If $X^n \in R$, reject $H_0$; otherwise retain $H_0$.
   (Handwritten: $R = \{ (X_1, \dots, X_n) \text{ s.t. } |\bar{X}_n - 1/2| > c \}$)

### Visual Description
The slide outlines the three steps for constructing a test using a fair coin example. Handwritten notes in blue and red add detail: specifying the Bernoulli distribution, defining the test statistic as the sample mean, and illustrating the rejection region. There is a hand-drawn sketch of a distribution (labeled "null distr = distr of $T_n$ under $H_0$") with shaded tails labeled "reject" and a central area labeled "retain $H_0$".

---

## Page 5
### Content
(Handwritten: Test defined by test statistic $T(X^n)$ (random variable) and rejection region $R$)

### 1.2 Evaluating Tests
Choose $T$ and $R$ to ensure our tests have desirable/stated properties.

Assume simple $H_0 : \theta = \theta_0$ and reject $H_0$ when $(X_1, \dots, X_n) \in R$

**Power function**
(Handwritten: Prob of rejection when true parameter is $\theta$)
$$\beta(\theta) = P_\theta((X_1, \dots, X_n) \in R)$$
(Handwritten: $\theta$ is a fixed parameter; $\Theta = [0, 1]$)

**Ex:** $X_1, \dots, X_n \sim \text{Bernoulli}(\theta)$
Test $H_0: \theta = 1/2$ vs. $H_1: \theta \neq 1/2$
Test statistic $T_n = \bar{X}_n = \frac{1}{n} \sum_{i=1}^n X_i$

(Handwritten: prob of rejection depends on $\theta$: $P_{\theta_*} (|\bar{X}_n - 1/2| > c)$)

### Visual Description
The slide introduces the power function. Handwritten notes in blue and red provide an example using the Bernoulli distribution. A hand-drawn graph shows two overlapping bell curves representing the "sampling distribution of $T_n$". One curve is centered at $1/2$ (labeled $\theta_* = \theta_0 = 1/2$) and another is centered at $1/4$ (labeled $\theta_* = 1/4$, where $\theta_*$ is the true parameter). Shaded regions in the tails of the $1/2$ distribution represent the rejection region defined by $1/2 \pm c$.

---

## Page 6
### Content
Test $H_0: \theta = \theta_0$ vs. $H_1: \theta \neq \theta_0$
(Handwritten: simple null)

For some pre-chosen level $\alpha$, want $R$ s.t.
(Handwritten: small, e.g. $\alpha = 0.05$)
$$\beta(\theta_0) = P_{\theta_0}((X_1, \dots, X_n) \in R) = \alpha$$

$\equiv$
$$P(\text{reject } H_0 \text{ when } H_0 \text{ is true}) = \alpha$$
$$P(\text{type I error}) = \alpha$$
(Handwritten: $\leq \alpha$ "valid test at level $\alpha$")

More generally for (Handwritten: testing composite null) $H_0: \theta \in \Theta_0$ vs. $H_1: \theta \in \Theta_0^c$
**"Neyman-Pearson paradigm"**

* Choose $\alpha \in [0, 1)$ (Handwritten: upper bound on Type I error; "false alarms")
* Try to maximize $\beta(\theta)$ over $\theta \in \Theta_1$ (Handwritten: $\Theta_1 = \Theta_0^c$, $H_1$ is true) subject to "level"
$$\sup_{\theta \in \Theta_0} \beta(\theta) \leq \alpha$$
(Handwritten: largest type I error; "size" or "size of a test")

### Visual Description
The slide discusses the significance level $\alpha$ and the Neyman-Pearson paradigm. Handwritten notes in blue and red define Type I error as a "false alarm" and explain that for composite nulls, the "size" of the test is the supremum of the power function over the null hypothesis space, which must be bounded by $\alpha$.

---

## Page 7
### Content
**Summary of outcomes of hypothesis testing:**
$H_0: \theta \in \Theta_0$
$H_1: \theta \in \Theta_1 = \Theta_0^c$

| Actual condition / Truth | Retain $H_0$ | Reject $H_0$ |
| :--- | :--- | :--- |
| **$H_0$ true** | Correct ($\checkmark$) | **type I error** |
| **$H_1$ true** | **type II error** | Correct ($\checkmark$) |

**2x2 "confusion table" (total pop. = P + N)**

| Total = P + N | Predicted condition: negative | Predicted condition: positive | |
| :--- | :--- | :--- | :--- |
| **Actual Real negatives (N)** | True neg | **FP** (False positive) | $FPR = \frac{FP}{N}$ (prob. of Type I error / "false alarm") |
| **Actual Real positives (P)** | False neg | **TP** (True pos.) | $TPR = \frac{TP}{P}$ ("Recall", power, hit rate = 1 - Prob(Type II error)) |
| | | **Positive predictive value (PPV)**: $\frac{TP}{TP+FP}$ ("Precision") | |

**Q: How is hypothesis testing different from e.g. information retrieval, object detection, classification in ML?**

### Visual Description
The slide presents two tables. The first is a standard hypothesis testing outcome table (Truth vs. Decision) identifying Type I and Type II errors. The second is a "confusion table" mapping these concepts to machine learning metrics like False Positive Rate (FPR), True Positive Rate (TPR/Recall), and Precision (PPV). Handwritten notes in blue and red annotate the tables with checkmarks and formulas.

---

## Page 8
### Content
Hypothesis testing is like a **legal trial**
- defendant is innocent until proven guilty
- overwhelming evidence to reject $H_0$ (default hypothesis - innocent)
e.g.
$H_0$: drug is not effective
no signal
no cancer

Use **"N-P paradigm"**: define level $\alpha$, $prob(\text{Type I Error}) \leq \alpha$
$\rightarrow$ "context"

**cf. fraud detection**
- might not want to miss many true positives
- instead of NP-paradigm, want to instead balance "recall" and "precision"

### Visual Description
The slide uses a legal trial analogy to explain the philosophy of hypothesis testing, emphasizing the "innocent until proven guilty" stance of the null hypothesis. It contrasts the Neyman-Pearson paradigm (controlling Type I error) with applications like fraud detection where balancing recall and precision might be more appropriate. Handwritten notes in blue and red emphasize key terms and the "context" of these decisions.

---
## Page 9
### Content
Ex: $X_1, \dots, X_n \sim N(\theta, \sigma^2)$ i.i.d., $\sigma^2$ known.

$$H_0 : \theta = \theta_0 \text{ simple, } \Theta = [\theta_0, \infty)$$
$$H_1 : \theta > \theta_0$$

(cf. $H_0 : \theta \le \theta_0 \text{ composite, } \Theta = \mathbb{R}$)
$H_1 : \theta > \theta_0$

TS? $T = \bar{X}_n$ or $\hat{\theta}(x^n)$

RR? $R = \{(X_1, \dots, X_n) \text{ s.t. } \bar{X} > \theta_0 + c\}$
$\bar{X} - \theta_0 > c$
$\frac{\bar{X} - \theta_0}{\sigma/\sqrt{n}} > \frac{c}{\sigma/\sqrt{n}} = d$

TS null distribution? $\bar{X} \sim ?$ when $H_0 : \theta = \theta_0$ true
$\bar{X} \sim N(\theta_0, \frac{\sigma^2}{n})$

Think: What should the power func. $\beta(\theta)$ for this problem ideally look like?

### Visual Description
Hand-written notes on a grid background. Includes a hand-drawn graph of the power function $\beta(\theta)$ versus $\theta$. The graph shows a step-like function that is low (at level $\alpha$) at $\theta_0$ and jumps to 1 for $\theta > \theta_0$.

---
## Page 10
### Content
Reject $H_0$ when $\bar{X}_n - \theta_0 > c$
$\equiv$
Reject $H_0$ when $T(X_1, \dots, X_n) = \frac{\bar{X}_n - \theta_0}{\sigma/\sqrt{n}} > d$
$d = \frac{c}{\sigma/\sqrt{n}}$

Recall: $\bar{X}_n \sim N(\theta, \frac{\sigma^2}{n})$
Test statistic: $Z$ normal R.V., $Z \sim N(0,1)$

**Power** $\beta(\theta) = P_\theta(T_n > d) = P_\theta\left(\frac{\bar{X}_n - \theta}{\sigma/\sqrt{n}} > d + \frac{\theta_0 - \theta}{\sigma/\sqrt{n}}\right)$
$= P\left(Z > d + \frac{\theta_0 - \theta}{\sigma/\sqrt{n}}\right) = 1 - P\left(Z \le d + \frac{\theta_0 - \theta}{\sigma/\sqrt{n}}\right)$
$= 1 - \Phi\left(d + \frac{\theta_0 - \theta}{\sigma/\sqrt{n}}\right)$,
since $\frac{\bar{X}_n - \theta}{\sigma/\sqrt{n}} \sim N(0,1)$.
$\Phi$ is the CDF of st. normal $Z \sim N(0,1)$.

When $H_0 : \theta = \theta_0$ true, $P(\text{type I error}) = \beta(\theta_0) = 1 - \Phi(d)$

Want $d$ such that $\beta(\theta_0) = \alpha \implies d = \Phi^{-1}(1 - \alpha) = z_\alpha$

### Visual Description
Hand-written notes and formulas on a grid background. Includes a hand-drawn standard normal distribution curve with the right tail shaded and labeled "prob $\alpha$". The threshold on the z-axis is labeled $z_\alpha$, described as the "upper $\alpha$ quantile".

---
## Page 11
### Content
Reject $H_0$ when $\bar{X}_n > \theta_0 + z_\alpha \frac{\sigma}{\sqrt{n}}$

$\beta(\theta)$?

$$\beta(\theta) = 1 - \Phi\left(z_\alpha - \frac{\theta - \theta_0}{\sigma/\sqrt{n}}\right)$$

$\theta \to -\infty \implies \beta \to 1 - \Phi(+\infty) = 0$
$\theta \to +\infty \implies \beta \to 1 - \Phi(-\infty) = 1$
$\beta(\theta_0) = \alpha$

What happens as $n \to \infty$?

### Visual Description
Hand-written notes on a grid background. Includes a hand-drawn graph of the power function $\beta(\theta)$ as an increasing S-shaped curve starting near 0, passing through the point $(\theta_0, \alpha)$, and asymptotically approaching 1 as $\theta$ increases.

---
## Page 12
### Content
Example: $X_1, \dots, X_n \sim N(\theta, \sigma^2)$ i.i.d., $\sigma^2$ known.

$$H_0 : \theta = \theta_0, \Theta = \mathbb{R}$$
$$H_1 : \theta \ne \theta_0$$

TS? $\bar{X}$

RR? $R = \{(X_1, \dots, X_n) : |\bar{X} - \theta_0| \ge c\}$

TS null distribution? When $\theta = \theta_0$, $\bar{X} \sim N(\theta_0, \frac{\sigma^2}{n})$

$\bar{X} \sim N(\theta_*, \frac{\sigma^2}{n})$ sampling distr of $\bar{X}$ when $\theta = \theta_*$

### Visual Description
Hand-written notes on a grid background. The rejection region $R$ is defined using an absolute value, and a blue circle with an $\alpha$ symbol is drawn next to it.

---
## Page 13
### Content
Think: What's the ideal $\beta(\theta)$?

$H_0 : \theta = \theta_0$

### Visual Description
Hand-written notes on a grid background. Includes a hand-drawn graph of an "ideal" power function $\beta(\theta)$ for a two-sided test. The curve is U-shaped, with its minimum value at $\theta_0$ equal to the "level" $\alpha$. The regions to the left and right of $\theta_0$ are labeled $H_1$.

---
## Page 14
### Content
Reject $H_0$ when $|\bar{X}_n - \theta_0| > c$
$\equiv$
Reject $H_0$ when $|T_n(X_1, \dots, X_n)| = \left| \frac{\bar{X}_n - \theta_0}{\sigma/\sqrt{n}} \right| > d$
because testing $H_0 : \theta = \theta_0$ vs $H_a : \theta \ne \theta_0$.

$\beta(\theta) = P_\theta(T_n < -d) + P_\theta(T_n > d)$
$= P_\theta\left(\frac{\bar{X}_n - \theta}{\sigma/\sqrt{n}} < -d + \frac{\theta_0 - \theta}{\sigma/\sqrt{n}}\right) + P_\theta\left(\frac{\bar{X}_n - \theta}{\sigma/\sqrt{n}} > d + \frac{\theta_0 - \theta}{\sigma/\sqrt{n}}\right)$
$= \Phi\left(-d + \frac{\theta_0 - \theta}{\sigma/\sqrt{n}}\right) + \left\{ 1 - \Phi\left(d + \frac{\theta_0 - \theta}{\sigma/\sqrt{n}}\right) \right\}$

Under $H_0$ we have:
$\beta(\theta_0) = \Phi(-d) + 1 - \Phi(d) = 2\Phi(-d)$

Set $\beta(\theta_0) = \alpha \implies d = -\Phi^{-1}(\alpha/2) = \Phi^{-1}(1 - \alpha/2) = z_{\alpha/2}$

Check $\beta(\theta) = ?$ as $\theta \to +\infty$ and $\theta \to -\infty$.
$\beta(\theta = \theta_0) = \alpha$

### Visual Description
Hand-written notes and formulas on a grid background. Red circles and arrows highlight parts of the power function derivation.

---
## Page 15
### Content
**Recap:**
For a given TS we set the threshold to ensure that the test has level $\alpha$, i.e. to ensure that the probability of rejecting $H_0$ by mistake is $\alpha$.

**Remarks:**
The question is never if the $H_0$ is true or not, since we will never know for sure.
Rather the question is whether we have sufficient evidence to reject $H_0$ or not. There are two possibilities:
1. reject $H_0$ or
2. retain/fail to reject $H_0$. Retaining $H_0$ does not mean that $H_0$ is true. We just don't have strong enough evidence to reject $H_0$.
e.g. defendant innocent

All we can do is to make a decision that has the properties we want: a stated $\alpha$ level (probability of rejecting $H_0$ by mistake), and high power.

**Type I and Type II errors:**
*Type I:* $H_0$ is true but we rejected $H_0$
*Type II:* $H_1$ true but we failed to reject $H_0$

$\sup_{\theta \in \Theta_0} \beta(\theta) \le \alpha$ (pre-chosen level)
$\alpha$ is small e.g. 1%, 5% prob of false alarm.

### Visual Description
A mix of printed text and hand-written annotations. Hand-written notes clarify that $\alpha$ is a "small" probability of "false alarm" and define the level using the supremum of the power function over the null hypothesis space.

---
## Page 16
### Content
**RECAP**

**Construction of Tests**
1. Consider an hypothesis about $\theta$
2. Choose a test statistic $T_n = T(X_1, \dots, X_n)$
3. Determine the rejection region $R$ "qualitatively"
Determine the rejection region $R$ "quantitatively" by ensuring that
$$\beta(\theta_0) = P_{\theta_0}((X_1, \dots, X_n) \in R)$$
$$= P(\text{reject } H_0 \text{ when } H_0 \text{ is true})$$
$$= \alpha$$
4. If $T_n \in R$, reject $H_0$; otherwise retain $H_0$

Am I guaranteed to have made the correct decision?

**Type I and Type II errors:**
*Type I:* $H_0$ is true but we rejected $H_0$
*Type II:* $H_1$ true but we failed to reject $H_0$

### Visual Description
Text-only slide.
## Page 17
### Content
**2 p-values**

**Def:** p-value = smallest level ($\alpha$) for which the test would reject $H_0$
*(Handwritten note: assuming $H_0$ is true)*

Ex: say $H_0 : \theta = \theta_0$ and the size $\alpha$ test is of the form: reject $H_0$ if
$$T_n \ge c_\alpha$$

*(Handwritten diagrams and notes)*
- null distr of $T$
- $\alpha$ tail prob
- e.g. $\alpha = 0.05$ (5%)
- "p-value"
- $t_{obs}$
- reject at $\alpha = 0.05$
- not reject at $\alpha = 0.01$
- smallest $\alpha$ for which we would reject $H_0$?

### Visual Description
The slide contains printed text and several hand-drawn annotations and diagrams on a grid background. There are two hand-drawn probability density curves representing the "null distr of T". 
- The first plot shows a vertical line at $c_\alpha$ with the area to the right shaded in red, labeled "$\alpha$ tail prob".
- The second plot shows a vertical line at $t_{obs}$ with the area to the right shaded in yellow and green, labeled "p-value". It also marks $c_{0.05}$ and $c_{0.01}$ on the x-axis. 
- Handwritten notes at the bottom conclude that the test rejects at $\alpha = 0.05$ but not at $\alpha = 0.01$.

---
## Page 18
### Content
In previous example,
p-value = $\mathbb{P}_{\theta_0}(T(X^n) \ge T(x^n)) = \mathbb{P}(T(X^n) \ge T(x^n), \text{ when } H_0 \text{ is true})$

*(Handwritten annotations: $T(X^n)$ is labeled "test statistic R.V."; $T(x^n)$ is labeled "realized value of $T(X_n)$")*

$\implies$ p-value = probability under the null of seeing a more (or equally) extreme test statistic than the one you actually observed.

### Visual Description
The slide contains printed text with handwritten annotations in teal and blue. The annotations clarify that $T(X^n)$ is a random variable (R.V.) and $T(x^n)$ is the realized value. The background is a light grid.

---
## Page 19
### Content
Ex: say $H_0 : \theta = \theta_0$ and the size $\alpha$ test is of the form: reject $H_0$ if
$$|T_n| \ge c$$

### Visual Description
Text-only slide. The slide contains a single example statement with a mathematical expression on a grid background.

---
## Page 20
### Content
**Remark 1:**

Intuitively, a smaller p-value is stronger evidence against the null. Scientists often report p-values, and informally a p-value of $< 0.01$ is considered strong evidence against the null, and $< 0.05$ is moderate evidence against the null.

BUT

> A p-value is a random variable, because it is a function of the data.

### Visual Description
Text-only slide. The final sentence is enclosed in a rectangular box. The background is a light grid.

---
## Page 21
### Content
**Remark 2:**

> p-value IS NOT $\mathbb{P}(H_0 \text{ is true} | \text{Data})$

### Visual Description
Text-only slide. The main statement is enclosed in a rectangular box, with "IS NOT" highlighted in red. The background is a light grid.

---
## Page 22
### Content
**3 Some Famous Tests**

**3.1 Pearson’s $\chi^2$ Test**

**Testing a vector of Gaussian means**

Let $X_1, \dots, X_n \sim N(\theta, I_d), \theta \in \mathbb{R}^d$

$$H_0 : \theta = \theta_0$$
$$H_1 : \theta \neq \theta_0$$

### Visual Description
Text-only slide. The slide introduces a new section on Pearson's Chi-squared test for Gaussian means. The background is a light grid.

---
## Page 23
### Content
**Testing multinomials**

Let $(X_1, \dots, X_k) \sim Mult(n, (p_1, \dots, p_k))$

$$H_0 : p = p_0$$
$$H_1 : p \neq p_0$$

### Visual Description
Text-only slide. The slide describes testing for multinomial distributions. The background is a light grid.

---
## Page 24
### Content
**Ex:** Mendel’s theory predicts that the probability of a pea plant in a certain hybrid generation falling in one of four categories is
$\vec{p}_0 = (9/16, 3/16, 3/16, 1/16)$

The observed count vector is $X = (315, 101, 108, 32)$ with $n = 556$

The predicted counts are $\vec{E}_0 = n\vec{p}_0 = (312.75, 104.25, 104.25, 34.75)$

The $\chi^2$ statistic is
$$T = \frac{(315 - 312.75)^2}{312.75} + \frac{(101 - 104.25)^2}{104.25} + \frac{(108 - 104.25)^2}{104.25} + \frac{(32 - 34.75)^2}{34.75}$$
$$= 0.47$$

The 0.05 upper quantile of $\chi^2_3$ is 7.815 $\implies$ retain the null, and conclude that the collected data does not invalidate Mendel’s hypothesis.

### Visual Description
Text-only slide. The slide provides a numerical example of a Chi-squared test applied to Mendel's theory. The final conclusion is written in red text. The background is a light grid.

---
## Page 25
### Content
150 10. Hypothesis Testing and p-values

| | Retain Null | Reject Null |
| :--- | :--- | :--- |
| $H_0$ true | $\checkmark$ | type I error |
| $H_1$ true | type II error | $\checkmark$ |

TABLE 10.1. Summary of outcomes of hypothesis testing.

**region.** If $X \in R$ we reject the null hypothesis, otherwise, we do not reject the null hypothesis:

$$X \in R \implies \text{reject } H_0$$
$$X \notin R \implies \text{retain (do not reject) } H_0$$

Usually, the rejection region $R$ is of the form
$$R = \{x : T(x) > c\} \quad (10.2)$$
where $T$ is a **test statistic** and $c$ is a **critical value**. The problem in hypothesis testing is to find an appropriate test statistic $T$ and an appropriate critical value $c$.

**Warning!** There is a tendency to use hypothesis testing methods even when they are not appropriate. Often, estimation and confidence intervals are better tools. Use hypothesis testing only when you want to test a well-defined hypothesis.

Hypothesis testing is like a legal trial. We assume someone is innocent unless the evidence strongly suggests that he is guilty. Similarly, we retain $H_0$ unless there is strong evidence to reject $H_0$. There are two types of errors we can make. Rejecting $H_0$ when $H_0$ is true is called a **type I error**. Retaining $H_0$ when $H_1$ is true is called a **type II error**. The possible outcomes for hypothesis testing are summarized in Tab. 10.1.

> **10.1 Definition.** The **power function** of a test with rejection region $R$ is defined by
> $$\beta(\theta) = \mathbb{P}_\theta(X \in R). \quad (10.3)$$
> The **size** of a test is defined to be
> $$\alpha = \sup_{\theta \in \Theta_0} \beta(\theta). \quad (10.4)$$
> A test is said to have **level** $\alpha$ if its size is less than or equal to $\alpha$.

### Visual Description
The page contains a table summarizing hypothesis testing outcomes (Type I and Type II errors), mathematical definitions for rejection regions, and a boxed definition for the power function and size of a statistical test.

---
## Page 26
### Content
10. Hypothesis Testing and p-values 151

A hypothesis of the form $\theta = \theta_0$ is called a **simple hypothesis**. A hypothesis of the form $\theta > \theta_0$ or $\theta < \theta_0$ is called a **composite hypothesis**. A test of the form
$$H_0 : \theta = \theta_0 \quad \text{versus} \quad H_1 : \theta \neq \theta_0$$
is called a **two-sided test**. A test of the form
$$H_0 : \theta \le \theta_0 \quad \text{versus} \quad H_1 : \theta > \theta_0$$
or
$$H_0 : \theta \ge \theta_0 \quad \text{versus} \quad H_1 : \theta < \theta_0$$
is called a **one-sided test**. The most common tests are two-sided.

**10.2 Example.** Let $X_1, \dots, X_n \sim N(\mu, \sigma^2)$ where $\sigma$ is known. We want to test $H_0 : \mu \le 0$ versus $H_1 : \mu > 0$. Hence, $\Theta_0 = (-\infty, 0]$ and $\Theta_1 = (0, \infty)$. Consider the test:
$$\text{reject } H_0 \text{ if } T > c$$
where $T = \bar{X}$. The rejection region is
$$R = \{(x_1, \dots, x_n) : T(x_1, \dots, x_n) > c\}.$$
Let $Z$ denote a standard Normal random variable. The power function is
$$\begin{aligned} \beta(\mu) &= \mathbb{P}_\mu(\bar{X} > c) \\ &= \mathbb{P}_\mu\left(\frac{\sqrt{n}(\bar{X} - \mu)}{\sigma} > \frac{\sqrt{n}(c - \mu)}{\sigma}\right) \\ &= \mathbb{P}\left(Z > \frac{\sqrt{n}(c - \mu)}{\sigma}\right) \\ &= 1 - \Phi\left(\frac{\sqrt{n}(c - \mu)}{\sigma}\right). \end{aligned}$$
This function is increasing in $\mu$. See Figure 10.1. Hence
$$\text{size} = \sup_{\mu \le 0} \beta(\mu) = \beta(0) = 1 - \Phi\left(\frac{\sqrt{n}c}{\sigma}\right).$$
For a size $\alpha$ test, we set this equal to $\alpha$ and solve for $c$ to get
$$c = \frac{\sigma \Phi^{-1}(1 - \alpha)}{\sqrt{n}}.$$
We reject when $\bar{X} > \sigma \Phi^{-1}(1 - \alpha)/\sqrt{n}$. Equivalently, we reject when
$$\frac{\sqrt{n}(\bar{X} - 0)}{\sigma} > z_\alpha$$
where $z_\alpha = \Phi^{-1}(1 - \alpha)$. $\blacksquare$

### Visual Description
Text-only slide. It defines simple/composite hypotheses and one-sided/two-sided tests, followed by a detailed mathematical example of a one-sided test for the mean of a Normal distribution.

---
## Page 27
### Content
152 10. Hypothesis Testing and p-values

![Power function graph](figure_10_1.png)
**FIGURE 10.1.** The power function for Example 10.2. The size of the test is the largest probability of rejecting $H_0$ when $H_0$ is true. This occurs at $\mu = 0$ hence the size is $\beta(0)$. We choose the critical value $c$ so that $\beta(0) = \alpha$.

It would be desirable to find the test with highest power under $H_1$, among all size $\alpha$ tests. Such a test, if it exists, is called **most powerful**. Finding most powerful tests is hard and, in many cases, most powerful tests don't even exist. Instead of going into detail about when most powerful tests exist, we'll just consider four widely used tests: the Wald test,¹ the $\chi^2$ test, the permutation test, and the likelihood ratio test.

### 10.1 The Wald Test
Let $\theta$ be a scalar parameter, let $\hat{\theta}$ be an estimate of $\theta$ and let $\widehat{se}$ be the estimated standard error of $\hat{\theta}$.

---
¹The test is named after Abraham Wald (1902–1950), who was a very influential mathematical statistician. Wald died in a plane crash in India in 1950.

### Visual Description
The page features a graph (Figure 10.1) showing a sigmoid-like power function $\beta(\mu)$ plotted against $\mu$. The y-axis marks $\alpha$ and the x-axis marks $H_0$ and $H_1$ regions separated at $\mu=0$. Below the figure, there is text discussing "most powerful" tests and introducing the Wald Test.

---
## Page 28
### Content
10.1 The Wald Test 153

> **10.3 Definition.** The Wald Test
> Consider testing
> $$H_0 : \theta = \theta_0 \quad \text{versus} \quad H_1 : \theta \neq \theta_0.$$
> Assume that $\hat{\theta}$ is asymptotically Normal:
> $$\frac{(\hat{\theta} - \theta_0)}{\widehat{se}} \rightsquigarrow N(0, 1).$$
> The size $\alpha$ **Wald test** is: reject $H_0$ when $|W| > z_{\alpha/2}$ where
> $$W = \frac{\hat{\theta} - \theta_0}{\widehat{se}}. \quad (10.5)$$

**10.4 Theorem.** *Asymptotically, the Wald test has size $\alpha$, that is,*
$$\mathbb{P}_{\theta_0}(|W| > z_{\alpha/2}) \to \alpha$$
*as $n \to \infty$.*

PROOF. Under $\theta = \theta_0$, $(\hat{\theta} - \theta_0)/\widehat{se} \rightsquigarrow N(0, 1)$. Hence, the probability of rejecting when the null $\theta = \theta_0$ is true is
$$\begin{aligned} \mathbb{P}_{\theta_0}(|W| > z_{\alpha/2}) &= \mathbb{P}_{\theta_0}\left(\left|\frac{\hat{\theta} - \theta_0}{\widehat{se}}\right| > z_{\alpha/2}\right) \\ &\to \mathbb{P}(|Z| > z_{\alpha/2}) \\ &= \alpha \end{aligned}$$
where $Z \sim N(0, 1)$. $\blacksquare$

**10.5 Remark.** An alternative version of the Wald test statistic is $W = (\hat{\theta} - \theta_0)/se_0$ where $se_0$ is the standard error computed at $\theta = \theta_0$. Both versions of the test are valid.

Let us consider the power of the Wald test when the null hypothesis is false.

**10.6 Theorem.** *Suppose the true value of $\theta$ is $\theta_* \neq \theta_0$. The power $\beta(\theta_*)$ — the probability of correctly rejecting the null hypothesis — is given (approximately) by*
$$1 - \Phi\left(\frac{\theta_0 - \theta_*}{\widehat{se}} + z_{\alpha/2}\right) + \Phi\left(\frac{\theta_0 - \theta_*}{\widehat{se}} - z_{\alpha/2}\right). \quad (10.6)$$

### Visual Description
The page contains a boxed definition for the Wald Test (Definition 10.3), followed by Theorem 10.4 regarding its size, a proof, a remark on alternative statistics, and Theorem 10.6 regarding its power function.

---
## Page 29
### Content
154 10. Hypothesis Testing and p-values

Recall that $\widehat{se}$ tends to 0 as the sample size increases. Inspecting (10.6) closely we note that: (i) the power is large if $\theta_*$ is far from $\theta_0$, and (ii) the power is large if the sample size is large.

**10.7 Example** (Comparing Two Prediction Algorithms). We test a prediction algorithm on a test set of size $m$ and we test a second prediction algorithm on a second test set of size $n$. Let $X$ be the number of incorrect predictions for algorithm 1 and let $Y$ be the number of incorrect predictions for algorithm 2. Then $X \sim \text{Binomial}(m, p_1)$ and $Y \sim \text{Binomial}(n, p_2)$. To test the null hypothesis that $p_1 = p_2$ write
$$H_0 : \delta = 0 \quad \text{versus} \quad H_1 : \delta \neq 0$$
where $\delta = p_1 - p_2$. The MLE is $\hat{\delta} = \hat{p}_1 - \hat{p}_2$ with estimated standard error
$$\widehat{se} = \sqrt{\frac{\hat{p}_1(1 - \hat{p}_1)}{m} + \frac{\hat{p}_2(1 - \hat{p}_2)}{n}}.$$
The size $\alpha$ Wald test is to reject $H_0$ when $|W| > z_{\alpha/2}$ where
$$W = \frac{\hat{\delta} - 0}{\widehat{se}} = \frac{\hat{p}_1 - \hat{p}_2}{\sqrt{\frac{\hat{p}_1(1 - \hat{p}_1)}{m} + \frac{\hat{p}_2(1 - \hat{p}_2)}{n}}}.$$
The power of this test will be largest when $p_1$ is far from $p_2$ and when the sample sizes are large.

What if we used the same test set to test both algorithms? The two samples are no longer independent. Instead we use the following strategy. Let $X_i = 1$ if algorithm 1 is correct on test case $i$ and $X_i = 0$ otherwise. Let $Y_i = 1$ if algorithm 2 is correct on test case $i$, and $Y_i = 0$ otherwise. Define $D_i = X_i - Y_i$. A typical dataset will look something like this:

| Test Case | $X_i$ | $Y_i$ | $D_i = X_i - Y_i$ |
| :--- | :--- | :--- | :--- |
| 1 | 1 | 0 | 1 |
| 2 | 1 | 1 | 0 |
| 3 | 1 | 1 | 0 |
| 4 | 0 | 1 | -1 |
| 5 | 0 | 0 | 0 |
| $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ |
| n | 0 | 1 | -1 |

Let
$$\delta = \mathbb{E}(D_i) = \mathbb{E}(X_i) - \mathbb{E}(Y_i) = \mathbb{P}(X_i = 1) - \mathbb{P}(Y_i = 1).$$
The nonparametric plug-in estimate of $\delta$ is $\hat{\delta} = \bar{D} = n^{-1} \sum_{i=1}^n D_i$ and $\widehat{se}(\hat{\delta}) = S/\sqrt{n}$, where $S^2 = n^{-1} \sum_{i=1}^n (D_i - \bar{D})^2$. To test $H_0 : \delta = 0$ versus $H_1 : \delta \neq 0$

### Visual Description
The page discusses an example of comparing two prediction algorithms using the Wald test. It covers both independent samples and paired samples (using the same test set), including a data table for the paired case.

---
## Page 30
### Content
10.1 The Wald Test 155

we use $W = \hat{\delta}/\widehat{se}$ and reject $H_0$ if $|W| > z_{\alpha/2}$. This is called a **paired comparison**. $\blacksquare$

**10.8 Example** (Comparing Two Means). Let $X_1, \dots, X_m$ and $Y_1, \dots, Y_n$ be two independent samples from populations with means $\mu_1$ and $\mu_2$, respectively. Let's test the null hypothesis that $\mu_1 = \mu_2$. Write this as $H_0 : \delta = 0$ versus $H_1 : \delta \neq 0$ where $\delta = \mu_1 - \mu_2$. Recall that the nonparametric plug-in estimate of $\delta$ is $\hat{\delta} = \bar{X} - \bar{Y}$ with estimated standard error
$$\widehat{se} = \sqrt{\frac{s_1^2}{m} + \frac{s_2^2}{n}}$$
where $s_1^2$ and $s_2^2$ are the sample variances. The size $\alpha$ Wald test rejects $H_0$ when $|W| > z_{\alpha/2}$ where
$$W = \frac{\hat{\delta} - 0}{\widehat{se}} = \frac{\bar{X} - \bar{Y}}{\sqrt{\frac{s_1^2}{m} + \frac{s_2^2}{n}}}. \quad \blacksquare$$

**10.9 Example** (Comparing Two Medians). Consider the previous example again but let us test whether the medians of the two distributions are the same. Thus, $H_0 : \delta = 0$ versus $H_1 : \delta \neq 0$ where $\delta = \nu_1 - \nu_2$ where $\nu_1$ and $\nu_2$ are the medians. The nonparametric plug-in estimate of $\delta$ is $\hat{\delta} = \hat{\nu}_1 - \hat{\nu}_2$ where $\hat{\nu}_1$ and $\hat{\nu}_2$ are the sample medians. The estimated standard error $\widehat{se}$ of $\hat{\delta}$ can be obtained from the bootstrap. The Wald test statistic is $W = \hat{\delta}/\widehat{se}$. $\blacksquare$

There is a relationship between the Wald test and the $1 - \alpha$ asymptotic confidence interval $\hat{\theta} \pm \widehat{se} z_{\alpha/2}$.

**10.10 Theorem.** *The size $\alpha$ Wald test rejects $H_0 : \theta = \theta_0$ versus $H_1 : \theta \neq \theta_0$ if and only if $\theta_0 \notin C$ where*
$$C = (\hat{\theta} - \widehat{se} z_{\alpha/2}, \hat{\theta} + \widehat{se} z_{\alpha/2}).$$
*Thus, testing the hypothesis is equivalent to checking whether the null value is in the confidence interval.*

**Warning!** When we reject $H_0$ we often say that the result is **statistically significant**. A result might be statistically significant and yet the size of the effect might be small. In such a case we have a result that is statistically significant but not scientifically or practically significant. The difference between statistical significance and scientific significance is easy to understand in light of Theorem 10.10. Any confidence interval that excludes $\theta_0$ corresponds to rejecting $H_0$. But the values in the interval could be close to $\theta_0$ (not scientifically significant) or far from $\theta_0$ (scientifically significant). See Figure 10.2.

### Visual Description
Text-only slide. It continues examples of the Wald test (comparing means and medians), states Theorem 10.10 linking hypothesis tests to confidence intervals, and provides a warning about the difference between statistical and scientific significance.

---
## Page 31
### Content
# 36-700: Homework Set 8
Extended Deadline to Monday November 10 at 6 pm — no late homework
Submit on Gradescope

1. **[More practice on parametric inference]** Suppose that $X_1, \dots, X_n \sim \text{Geom}(p)$, i.e. the samples have a geometric distribution with parameter $p$. A geometric distribution is the distribution of the number of coin flips needed to see one head.
    (a) Compute the MOME of $p$.
    (b) Compute the MLE of $p$. In order to do this you need to write the likelihood function, simplify it as much as you can and find the (global) maximum of the likelihood or log likelihood; check that it is a maximum.
    (c) Assume that $p$ has a $\text{beta}(\alpha, \beta)$ prior. What is the prior mean of $p$?
    (d) Compute the posterior distribution of $p$.
    (e) Re-write the mean of the posterior distribution (what we call the posterior mean) as a convex combination of the prior mean and the MLE. What happens to the posterior mean if $\alpha, \beta$ are fixed and $n \to \infty$?
    (f) Obtain the Bayes estimator under squared error loss. (Remark: with absolute error loss, we would need to compute the posterior median which typically does not have a closed-form solution)
    (g) Look at the definition of a *posterior interval* (Wasserman p. 178, top). What is the difference between a posterior interval and a (frequentist) confidence interval of $p$? Why would taking level sets of the posterior (that is, computing highest posterior density intervals/sets) generally not give you valid confidence intervals/sets?

2. **[Comparing statistical procedures]** Suppose that we are in a Bernoulli experiment, $X_1, \dots, X_n \sim \text{Ber}(p)$, and we believe that $p$ is close to 0. A natural way to incorporate this knowledge might be to use a $\text{Beta}(1, b)$ prior with a high-value of $b$. In the following, assume we always use the squared error loss.
    (a) Compute the Bayes estimator. *Hint: The posterior density should be a well-known one, saving you some calculations of expected values.*
    (b) Compute the risk of the Bayes estimator $R(p)$. *Hint: With squared error loss, the risk reduces to the MSE.*
    (c) Suppose that $p = 1$ (i.e. our prior was wrong). Compare the risk of the Bayes estimator above to the minimax estimator. What happens as $b$ gets large?
    (d) Suppose that $b$ is fixed, compute the ratio of the maximum risk of the above Bayes estimator to the minimax risk. What happens as $n \to \infty$?

3. **[Wald test]** Suppose that $X_1, \dots, X_n \sim \text{Poisson}(\lambda)$. Let $\lambda_0 > 0$. Find the size $\alpha$ Wald test for $H_0 : \lambda = \lambda_0$ versus $H_1 : \lambda \neq \lambda_0$. (*Hint: With “Wald test” we here mean: use the MLE of $\lambda$ as a test statistic and use large-sample theory.*)

1

### Visual Description
Text-only slide. It lists the first three problems of Homework Set 8, covering parametric inference (Geometric distribution), comparing statistical procedures (Bayesian vs Minimax), and the Wald test (Poisson distribution).

---
## Page 32
### Content
4. **[Understanding type II error and power]** Let $X_1, \dots, X_n$ be i.i.d. $N(\theta, 1)$ random variables, where $n = 20$. Let
$$H_0 : \theta = \theta_0 = 0 \quad \text{versus} \quad H_1 : \theta = \theta_1 < \theta_0$$
    (a) Determine the rejection region of the Wald test at the 5% significance level.
    (b) Say that you obtain a sample of size $n = 20$ for which the value of the Wald test statistic is in the rejection region, so that **you reject the null hypothesis**.
        i. **Suppose $H_0$ is true.** Then rejecting $H_0$ is the wrong decision. What is the probability of rejecting $H_0$ when $H_0$ is true?
        ii. **Suppose $H_1$ is true.** Then rejecting $H_0$ is the correct decision.
            A. What is the probability of rejecting $H_0$ if $H_1 : \theta = \theta_1 = -1$ is true?
            B. What is the probability of rejecting $H_0$ if $H_1 : \theta = \theta_1 = -5$ is true?
            C. What is the probability that you just calculated (of correctly rejecting $H_0$ when $H_1$ is true) called?
    (c) Say that you obtain a sample of size $n = 20$ for which the value of the Wald test statistic is not in the rejection region, so that **you retain the null hypothesis**.
        i. **Suppose $H_0$ is true.** Then retaining $H_0$ is the correct decision. What is the probability of retaining $H_0$ when $H_0$ is true?
        ii. **Suppose $H_1$ is true.** Then
## Page 33

### Content
(b) Assume $H_0$ is true. Simulate $n = 10$ observations from the model.
- calculate the observed value of the TS in that sample.
- calculate the p-value. The p-value is always calculated under $H_0$, i.e. assuming that $H_0$ is true, because it measures the amount of evidence against $H_0$ in favor of $H_1$

(c) Repeat (b) 200 times and produce a histogram of the 200 p-values. The distribution should look uniform.

(d) If $H_0$ is true, what is the probability that the p-value is less than 5%? What is the probability that it has value between 5% and 10%? What is the probability that it is greater than 20%?

(e) Assume now that $H_1$ is true. Simulate $n = 10$ observations from the model.
- Calculate the observed value of the TS in that sample.
- Calculate the p-value. Again, the p-value is always calculated under $H_0$.

(f) Repeat (e) 200 times and produce a histogram of the 200 p-values. Describe this distribution.

(g) If $H_1$ is true, what is the probability that your p-value is less than 5%? What is the probability that it is greater than 20%? (Use sample proportions to estimate probabilities.)

(h) Suppose you were to repeat (f) and (g) but with a different value of $\theta_1$. How, if at all, would a smaller (larger) $\theta_1$ change your answers in (f) and (g)? Explain your answer briefly (just qualitatively; that is, no mathematical derivations are necessary).

(i) In light of your simulations, does it make sense that observing a small p-value provides evidence against $H_0$, even though p-values are random? Explain your answer.

7. **[Deriving the distribution of p-values]** An important way to interpret p-values is by observing that under the null their distribution is uniform. Under the alternate we expect the p-values to concentrate closer to zero. In this question we will prove this fact:
"If the test statistic has a continuous distribution, then under $H_0 : \theta = \theta_0$, the p-value has a $\text{Uniform}(0, 1)$ distribution."

(a) Prove the above statement. Here are a few potentially useful hints/assumptions:
(1) The CDF of the uniform distribution is: $\mathbb{P}(U \le u) = u$ for $u \in [0, 1]$ and it suffices to show that the p-values satisfy this. (2) You can assume that any CDFs that you need/use are invertible. (3) You can also assume that the rejection region is simple and nested, i.e. for any $\alpha$ you can assume that the rejection region takes the form:
$$R_\alpha = \{ \widehat{T} \ge t_\alpha \}$$
where $\widehat{T}$ is the observed test statistic and $t_\alpha$ is some threshold.

(b) Use what you have shown above to prove that if we reject $H_0$ when the p-value is less than or equal to $\alpha$, our Type 1 error is $\alpha$.

3

### Visual Description
Text-only slide containing a list of exercise sub-questions (b through i) and a multi-part problem (7a, 7b). Some text is highlighted in red for emphasis (specifically the notes about p-values being calculated under $H_0$). The page number "3" is at the bottom center.

---
