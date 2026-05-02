# canvas-10-01-13307038-annotated.slides_Chapter5.cvg

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-10-01-13307038-annotated.slides_Chapter5.cvg.pdf`
Duplicate equivalents: `canvas-10-01-13307038-annotated.slides_Chapter5.cvg.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `MIXED`
Pages: 55

## Page 1
### Content
**RECAP** 9/17/25
**Last Lecture (Prob. Ineqs)**

* non-asymptotic quantitative bounds with a minimum of assumptions
* recall two aspects of the ineqs.
    * typical deviation
    * probability
* e.g. Chebyshev's ineq.
    For any $t \ge 0$, $\mathbb{P}(|X - \mu_X| \ge t\sigma_X) \le \frac{1}{t^2}$
    Recall:
    * Hoeffding example
    * example with conf. intervals
* Special case: RV of interest is the mean of independent RVs
    Most of the time (i.e. with high prob), the sample mean is within $c/\sqrt{n}$ from the true mean for some small const $c$.

### Visual Description
Handwritten notes in blue ink on a light blue grid paper background. The word "RECAP" is written in red at the top left.

---

## Page 2
### Content
**RECAP**
**CHAPTER 4 Probability Inequalities: Summary**

In this chapter, we show that most of the time (i.e. with high probability), the sample mean is within $c/\sqrt{n}$ from the true mean, for some small constant $c$.

**Chebyshev** Assume that $\mathbb{E}[X] = \mu_X$ and $\mathbb{V}(X) = \sigma_X^2$ both exist. Then $\forall t \ge 0$:
$$\mathbb{P}(|X - \mu_X| \ge t\sigma_X) \le \frac{1}{t^2}.$$

The deviation from the mean of any random variable is of the order of the standard deviation, and more concretely the probability that a random variable is more than $t$ standard deviations away from its mean is at most $1/t^2$.

**Mill** Let $X \sim N(\mu_X, \sigma_X^2)$. Then $\forall t > 0$:
$$\mathbb{P}(|X - \mu_X| \ge t\sigma_X) \le \sqrt{2/\pi} \frac{\exp(-t^2/2)}{t}.$$

For Mill's inequality, the deviation is again of the order of the standard deviation but the probability is exponential. This is much sharper than what we would get from Chebyshev's inequality.

**Hoeffding** Let $Y_1, \dots, Y_n$ be independent, bounded s.t. $a_i \le Y_i \le b_i$, and $\mathbb{E}[Y_i] = 0$. Let $X = \bar{Y}$. Then $\forall t > 0$,
$$\mathbb{P}\left(|X - 0| \ge t \sqrt{\frac{\sum_{i=1}^n (b_i - a_i)^2}{4n^2}}\right) \le 2 \exp(-t^2/2).$$

Here, it is not obvious that the deviation is of the order of the standard deviation (it is – see later) but like Mill's, the probability is exponential.

+ Markov's Inequality

### Visual Description
A slide containing typed text and mathematical formulas. At the bottom, there is a line graph plotting "bound" vs "$t$" for three methods: Chebyshev (black solid line), Mill (red dashed line), and Hoeffding (green dotted line). The graph shows that Mill and Hoeffding bounds decay much faster than Chebyshev. There are handwritten annotations: "RECAP" in red at the top left and "+ Markov's Inequality" in blue at the bottom right.

---

## Page 3
### Content
**Reminders** Mon Sept 22, 2025

* **HW 4** Extended due date to Monday Sept 29, 6 pm
* **Office hours** every day this week
* **Midterm 1** in class (Lectures 1-6)
    Info sheet & other material will be posted later today

---
**Last lectures:**
* Stochastic conv. basics
    * Conv. in prob.
    * conv. in distr.
    * WLLN, CLT

**This lecture:**
* work through examples
* how this works in practice

### Visual Description
Handwritten notes in blue and red ink on a light blue grid paper background. A horizontal line separates the "Reminders" section from the "Last lectures" and "This lecture" sections.

---

## Page 4
### Content
**Next: large-sample results**

**CHAPTER 5 – Stochastic Convergence**

**Contents**
1. **Stochastic Convergence Basics** (2)
2. **More on the Central Limit Theorem (CLT)** (11)
3. **Stronger Modes of Convergence** (16)
4. **The Delta Method** (24)

Reading: Wasserman Sec 5.1-5.5

First recall how we say that a sequence of numbers converges to a limit, i.e. we say a sequence of numbers $x_1, \dots, x_n$ has limit $x$, if for every $\epsilon > 0$, there is some $N(\epsilon)$ such that, for all $n \ge N(\epsilon)$, we have that $|x - x_n| < \epsilon$.

We then write $\lim_{n \to \infty} x_n = x$, and say that the sequence converges to $x$.

We would like to ask an analogous question for random variables, i.e. given a sequence of RVs $X_1, \dots, X_n$ can we say that they have a "limit" $X$? What does it mean for a sequence of random variables to converge to some random variable $X$?

**Recall from Real Analysis:**
Convergence of a seq. of real numbers
$x_1 \quad x_2 \quad x_3 \dots x_n \to x$

### Visual Description
A slide with typed text and a table of contents. There are handwritten annotations in blue ink: "Next: large-sample results" at the top, and a "Recall from Real Analysis" section at the bottom with a small diagram showing points $x_i$ approaching a limit $x$ on a line.

---

## Page 5
### Content
**Motivation**
**1 Stochastic Convergence Basics**

In statistics we estimate **parameters** using data, e.g. we estimate a true mean $\mu$ using the sample average of observations that have mean $\mu$.
* statistical functional $T(F)$ e.g. $\mu = \mathbb{E}[X] = \int x dF_x$ (distr of data)
* $\theta = T(F)$ P.O.I (Parameter of Interest)
* $\hat{\theta}_n(X_1, \dots, X_n)$ where $X_1, \dots, X_n \sim F$

We want to know something about the limiting behavior of our estimators, as the sample size $n$ increases:
* do estimates "converge" to the truth?
* what is their distribution around the truth?
* and so on.

This is what we refer to as **large sample theory**.

Note on notation: this chapter concerns the limiting behavior of the sequence of random variables $Y_n$, where for example:
**Spec case**
$$Y_n = \frac{1}{n} \sum_{i=1}^n X_i$$
$Y_n$ is an RV estimator $\hat{\mu}$ of $\mu = \mathbb{E}[X_1]$.

Limiting behavior of $Y_n^2$?
seq. $Y_1, Y_2, \dots$

### Visual Description
A slide with typed text and several handwritten annotations in blue and red ink. Arrows point from "parameters" and "estimators" to handwritten definitions of statistical functionals and estimator notation. A "Spec case" is highlighted with a circle around the formula for $Y_n$.

---

## Page 6
### Content
Suppose we have a sequence of random variables $Y_1, \dots, Y_n$, and another random variable $Y$. The two most basic forms of stochastic convergence are:

1. **Convergence in Probability:** The sequence $Y_n$ converges to $Y$ if:
$$\forall \epsilon > 0, \lim_{n \to \infty} \mathbb{P}(|Y_n - Y| \ge \epsilon) = 0,$$
and we write $Y_n \xrightarrow{P} Y$.
* $|Y_n - Y| \ge \epsilon$ is an **event**
* $Y_n - Y$ is an **R.V.**
* $\mathbb{P}(\dots)$ is the **Prob of an event**

**Spec case**
An important special case is when $Y = c$ constant, for example in the WLLN where $Y_n = \frac{1}{n} \sum_{i=1}^n X_i$ and $c = \mu = \mathbb{E}(X_1) = \mathbb{E}(Y_n)$.
* spec. case of a discrete RV: $\mathbb{P}(Y=c)=1$

**The Weak Law of Large Numbers (WLLN)** Let $X_1, \dots, X_n$ be i.i.d RVs with finite $\mathbb{E}(X_1) = \mu$ and $\text{Var}(X_1) = \sigma^2$. Then
$$\forall \epsilon > 0, \mathbb{P}(|Y_n - \mu| > \epsilon) \to 0$$
as $n \to \infty$.
* Recall: proof by Chebyshev's ineq.

**Interpretation of WLLN:** "conc. of measure" phenomena.
The distr of $\bar{X}_n$ becomes more concentr. around $\mu = \mathbb{E}[X_1]$ as $n$ gets larger.

### Visual Description
A slide with typed text and math, heavily annotated with blue and red ink. There are two small handwritten plots on the right: one for a pmf showing a spike at $c$, and one for a CDF showing a step function at $c$. Arrows and circles highlight specific parts of the formulas.

---

## Page 7
### Content
2. **Convergence in Distribution:** Let $F_n$ and $F$ be the CDFs of $Y_n$ and $Y$. The sequence $Y_n$ converges in distribution to $Y$ if:
$$\lim_{n \to \infty} F_n(t) = F(t),$$
at all points $t$ where $F$ is continuous, and we write $Y_n \xrightarrow{d} Y$ or $Y_n \rightsquigarrow Y$.

**Spec case**
An important example is the central limit theorem.

**The Central Limit Theorem (CLT)** Let $X_1, \dots, X_n$ be i.i.d. with mean $\mu$ and variance $\sigma^2$, both finite. Define:
$$Y_n = \bar{X}_n = \frac{1}{n} \sum_{i=1}^n X_i.$$
* $\mathbb{E}[Y_n] = \mu$
* $\mathbb{V}[Y_n] = \frac{\sigma^2}{n}$

Then the standardized variable:
$$Z_n = \frac{Y_n - \mu}{\sigma/\sqrt{n}} = \frac{\sqrt{n}(Y_n - \mu)}{\sigma} \rightsquigarrow N(0, 1).$$

$Y_n \approx N(\mu, \frac{\sigma^2}{n})$ for large $n$.
~~$Y_n \xrightarrow{d} N(\mu, \frac{\sigma^2}{n})$~~ (limits cannot depend on $n$)

### Visual Description
A slide with typed text and math, featuring blue ink annotations. A section of math at the bottom right is crossed out with a blue "X", accompanied by the note "limits cannot depend on $n$". Circles highlight the CDF symbols $F_n$ and $F$, and the standardized variable $Z_n$.

---

## Page 8
### Content
Convergence in distribution only makes a statement about the distribution of the random variables.

Convergence in probability is a statement about the value of the random variables.

**Convergence in probability $\implies$ convergence in distribution.** The reverse is not, in general, true.

$$X_n \xrightarrow{P} X \implies X_n \rightsquigarrow X$$
(Reverse arrow is crossed out)

### Visual Description
A slide with three main points of typed text. The third point is highlighted in yellow. Below the text, there is a handwritten logical statement in blue ink showing that convergence in probability implies convergence in distribution, with a crossed-out arrow indicating the converse is false.
## Page 9
### Content
**Motivation:**

We care about convergence in probability because it is a desirable property of estimators. *Think why?*

Terminology: **consistent** = "converges in probability".

When we do estimation, we will see that MLEs, for example, are consistent.

Consistent estimator $\hat{\Theta}_n(X_1, \dots, X_n) \xrightarrow{P} \Theta$

We care about convergence in distribution because it facilitates or even allows **probability calculations**.

6

### Visual Description
The slide contains printed text with blue handwritten annotations. The word "consistent" is highlighted in yellow and underlined in blue. There is a handwritten note "Think why?" next to the first paragraph. A handwritten formula for a consistent estimator is provided in the middle. The phrase "probability calculations" at the bottom is underlined in blue. The background is a light grid pattern.

---

## Page 10
### Content
**Ex:** Let $X_n, n = 1, 2, \dots$ be a sequence of i.i.d $N(0, 1)$ RVs and let $X \sim N(0, 1)$.

As $n \to \infty$, does $X_n$ converge to $X$ in distribution? In probability?
*   **In distribution?** Yes. $X_n \sim N(0, 1)$ for all $n$. Hence, trivially $X_n \xrightarrow{D} N(0, 1)$.
*   **In probability?** No, show this!

Given $\epsilon > 0$
$P(|X_n - X| > \epsilon)$ where $Y = X_n - X \sim N(0, 2)$

Recall: Linear comb. of IID normal RVS (independent) is still normal (proof via MGF)
$\begin{cases} Var(Y) = Var(X_n - X) \xrightarrow{\text{indep.}} Var(X_n) + Var(X) = 1^2 + 1^2 = 2 \\ E(Y) = E(X_n) - E(X) = 0 - 0 = 0 \end{cases}$

$P(|Y| > \epsilon) \neq 0$ for $Y \sim N(0, 2)$

7

### Visual Description
The slide contains a printed example problem with extensive blue and red handwritten notes and a sketch. The notes explain why convergence in distribution holds but convergence in probability does not. A small sketch of a normal distribution curve is at the bottom right, showing shaded tails beyond $\pm \epsilon$ to illustrate that the probability $P(|Y| > \epsilon)$ is non-zero.

---

## Page 11
### Content
**Ex:** Let $Y_n \sim N(0, \frac{1}{n})$ for $n = 1, 2, \dots$.

Note: $\sqrt{n}Y_n \sim N(0, 1)$ for all $n$. Hence, trivially, $\sqrt{n}Y_n \xrightarrow{D} N(0, 1)$.
$\frac{Y_n}{1/\sqrt{n}}$

Does $Y_n$ converge, and if so to what? In distribution? In probability?
**Yes**, $Y_n \xrightarrow{D} 0$ because $F_n(t) \to F(t)$ for all $t \neq 0$.

CDF of $Y_n$: $F_n(t) = P(Y_n \le t) = P(\sqrt{n}Y_n \le \sqrt{n}t) = P(Z \le \sqrt{n}t)$ where $Z \sim N(0, 1)$
*   For $t > 0, F_n(t) \to 1$ as $n \to \infty$
*   For $t < 0, F_n(t) \to 0$ as $n \to \infty$
*   However $F_n(t=0) = P(Z \le 0) = \frac{1}{2} \neq 0$

8

### Visual Description
The slide features a printed example with blue handwritten annotations and two sketches of CDFs. The left sketch shows $F_n(t)$ as S-shaped curves that become steeper as $n$ increases. The right sketch shows the limit CDF $F(t)$, which is a step function (point mass at 0). Red circles and lines highlight key parts of the derivation.

---

## Page 12
### Content
Show that $Y_n \xrightarrow{P} 0$,

Given $\epsilon > 0$,
$P(|Y_n - 0| > \epsilon) = P(Y_n^2 > \epsilon^2)$ (where $Y_n^2$ is a non-neg RV)
$\le \frac{E(|Y_n|^2)}{\epsilon^2} = \frac{Var(Y_n)}{\epsilon^2} = \frac{1}{n\epsilon^2} \to 0$ as $n \to \infty$

$\square$

### Visual Description
This is a handwritten slide on a grid background. It provides a formal proof using Markov's/Chebyshev's inequality to show that the sequence $Y_n$ from the previous page converges in probability to 0.

---

## Page 13
### Content
**Ex:** Let $Y_n \sim N(n, 1)$.

Note: $Y_n - n \sim N(0, 1)$ for all $n$ so obviously, $Y_n - n \xrightarrow{D} N(0, 1)$.
*   conv. in distr to $Z$ standard normal
*   does not conv in prob to $Z$

Does $Y_n$ converge, and if so to what? In distribution? In probability?

9

### Visual Description
The slide contains a printed example with blue handwritten notes. The notes clarify that while $Y_n - n$ converges in distribution to a standard normal variable $Z$, it does not converge in probability to $Z$. The background is a light grid.

---

## Page 14
### Content
[From AOS]
5.2 Types of Convergence 75

quadratic mean $\xrightarrow{\text{spec. case}}$ point-mass distribution
$\downarrow$
probability $\xrightarrow{\dots \dots}$ distribution

FIGURE 5.2. Relationship between types of convergence.

**Summary.** Some convergence properties are preserved under transformations.

**5.5 Theorem.** Let $X_n, X, Y_n, Y$ be random variables. Let $g$ be a continuous function.
(a) If $X_n \xrightarrow{P} X$ and $Y_n \xrightarrow{P} Y$, then $X_n + Y_n \xrightarrow{P} X + Y$.
(b) If $X_n \xrightarrow{qm} X$ and $Y_n \xrightarrow{qm} Y$, then $X_n + Y_n \xrightarrow{qm} X + Y$.
(c) If $X_n \xrightarrow{D} X$ and $Y_n \xrightarrow{P} c$, then $X_n + Y_n \xrightarrow{D} X + c$. (**Slutzky's theorem**)
(d) If $X_n \xrightarrow{P} X$ and $Y_n \xrightarrow{P} Y$, then $X_n Y_n \xrightarrow{P} XY$.
(e) If $X_n \xrightarrow{D} X$ and $Y_n \xrightarrow{P} c$, then $X_n Y_n \xrightarrow{D} cX$. (**Slutzky's theorem**)
(f) If $X_n \xrightarrow{P} X$, then $g(X_n) \xrightarrow{P} g(X)$. (**Continuous mapping theorem**)
(g) If $X_n \xrightarrow{D} X$, then $g(X_n) \xrightarrow{D} g(X)$. (**Continuous mapping theorem**)

Parts (c) and (e) are known as **Slutzky's theorem**.

Handwritten notes:
*   Since $g$ is cont. For any $\epsilon > 0$, we can find $\delta$ s.t. $|g(X_n) - g(X)| < \epsilon$ if $|X_n - X| < \delta$. Now translate into a prob statement.
*   $X_n \to g(X_n)$ for cont. func. $g$
*   $X_n \pm Y_n$
*   $X_n \cdot Y_n$

### Visual Description
The slide contains a screenshot from a textbook ("All of Statistics") with various blue and red handwritten annotations. A diagram at the top shows the hierarchy of convergence types. Theorem 5.5 is listed with several properties, which are annotated with names like "Slutzky's" and "Continuous mapping theorem". There is a red star on the left.

---

## Page 15
### Content
**Ex:** Let $X \sim Poi(n)$. Prove that the sequence $Y_n = \frac{X - n}{\sqrt{n}} \xrightarrow{D} N(0, 1)$ as $n \to \infty$.
$n = 1, 2, 3, \dots$
$\begin{cases} E[X] = n \\ Var(X) = n \end{cases}$

*   Hard to show that Poisson PMF converges to a Gaussian PDF
*   **Trick:** Easy to show that the Poisson MGF converges to the Gaussian MGF

**Useful result:** Can show conv. in distr. by conv. of the MGFs.
Let $X_1, \dots, X_n$ be a seq. of RVs with MGFs $M_{X_1}, \dots, M_{X_n}$.
Let $X$ be a RV with MGF $M_X$.
If for all $t$ around a neighborhood around 0, $M_{X_n}(t) \to M_X(t)$, then $X_n \xrightarrow{D} X$.

10

### Visual Description
The slide contains a printed example problem with blue handwritten notes. The notes outline a strategy for the proof using Moment Generating Functions (MGFs) instead of Probability Mass Functions (PMFs). It also states a theorem regarding convergence in distribution via MGFs.

---

## Page 16
### Content
$Y = \frac{X - n}{\sqrt{n}}$ ($X \sim Poi(n)$) $\implies E[Y] = 0, V(Y) = 1$

$M_Y(t) = E[e^{tY}] = E[e^{t(\frac{X-n}{\sqrt{n}})}] = E[e^{\frac{tX}{\sqrt{n}}} e^{-t\sqrt{n}}] = e^{-t\sqrt{n}} E[e^{X(\frac{t}{\sqrt{n}})}]$
$= e^{-t\sqrt{n}} M_X(\frac{t}{\sqrt{n}})$

Poisson($\lambda$) MGF: $e^{\lambda(e^t - 1)}$

$M_Y(t) = \exp(n(e^{t/\sqrt{n}} - 1)) e^{-t\sqrt{n}} = \exp(n(e^{t/\sqrt{n}} - 1) - t\sqrt{n})$

Taylor exp: $e^x = 1 + x + \frac{x^2}{2!} + \dots$
$e^{t/\sqrt{n}} \approx 1 + \frac{t}{\sqrt{n}} + \frac{t^2}{2n} + O(\frac{1}{n^{3/2}})$

$M_Y(t) = \exp(n(1 + \frac{t}{\sqrt{n}} + \frac{t^2}{2n} + O(\frac{1}{n^{3/2}}) - 1) - t\sqrt{n})$
$= \exp(t\sqrt{n} + \frac{t^2}{2} + O(\frac{1}{\sqrt{n}}) - t\sqrt{n}) = \exp(\frac{t^2}{2} + O(\frac{1}{\sqrt{n}}))$

$M_Y(t) \to \exp(\frac{t^2}{2})$ as $n \to \infty$ for all $t$.
$\exp(\frac{t^2}{2})$ is the MGF of $N(0, 1)$.

### Visual Description
This is a handwritten slide on a grid background showing the mathematical derivation for the Poisson limit theorem using MGFs. It uses Taylor expansion to show that the MGF of the normalized Poisson variable converges to the MGF of a standard normal distribution. Red circles and lines are used to group terms and show the flow of the derivation.
## Page 17
### Content
$$M_Y(t) \longrightarrow M_{N(0,1)}(t) \quad \text{for all } t \text{ as } n \to \infty$$

Then $Y \xrightarrow{d} N(0,1)$

### Visual Description
Handwritten blue notes on a light yellow grid background. The text states a condition on moment generating functions (MGFs) and the resulting convergence in distribution to a standard normal distribution.

---

## Page 18
### Content
**Table of Distributions**

| Distribution | PDF or probability function | mean | variance | MGF |
| :--- | :--- | :--- | :--- | :--- |
| Point mass at $a$ | $I(x = a)$ | $a$ | $0$ | $e^{at}$ |
| Bernoulli($p$) | $p^x(1 - p)^{1-x}$ | $p$ | $p(1 - p)$ | $pe^t + (1 - p)$ |
| Binomial($n, p$) | $\binom{n}{x} p^x(1 - p)^{n-x}$ | $np$ | $np(1 - p)$ | $(pe^t + (1 - p))^n$ |
| Geometric($p$) | $p(1 - p)^{x-1} I(x \ge 1)$ | $1/p$ | $\frac{1-p}{p^2}$ | $\frac{pe^t}{1-(1-p)e^t} (t < -\log(1 - p))$ |
| **Poisson($\lambda$)** | $\frac{\lambda^x e^{-\lambda}}{x!}$ | **$\lambda$** | **$\lambda$** | $e^{\lambda(e^t-1)}$ |
| Uniform($a, b$) | $I(a < x < b)/(b - a)$ | $\frac{a+b}{2}$ | $\frac{(b-a)^2}{12}$ | $\frac{e^{bt}-e^{at}}{(b-a)t}$ |
| **Normal($\mu, \sigma^2$)** | $\frac{1}{\sigma\sqrt{2\pi}} e^{-(x-\mu)^2/(2\sigma^2)}$ | **$\mu$** | **$\sigma^2$** | $\exp\{\mu t + \frac{\sigma^2 t^2}{2}\}$ |
| Exponential($\beta$) | $\frac{e^{-x/\beta}}{\beta}$ | $\beta$ | $\beta^2$ | $\frac{1}{1-\beta t} (t < 1/\beta)$ |
| Gamma($\alpha, \beta$) | $\frac{x^{\alpha-1}e^{-x/\beta}}{\Gamma(\alpha)\beta^\alpha}$ | $\alpha\beta$ | $\alpha\beta^2$ | $(\frac{1}{1-\beta t})^\alpha (t < 1/\beta)$ |
| Beta($\alpha, \beta$) | $\frac{\Gamma(\alpha+\beta)}{\Gamma(\alpha)\Gamma(\beta)} x^{\alpha-1}(1-x)^{\beta-1}$ | $\frac{\alpha}{\alpha+\beta}$ | $\frac{\alpha\beta}{(\alpha+\beta)^2(\alpha+\beta+1)}$ | $1 + \sum_{k=1}^\infty \left(\prod_{r=0}^{k-1} \frac{\alpha+r}{\alpha+\beta+r}\right) \frac{t^k}{k!}$ |
| $t_\nu$ | $\frac{\Gamma(\frac{\nu+1}{2})}{\Gamma(\frac{\nu}{2})} \frac{1}{(1+\frac{x^2}{\nu})^{(\nu+1)/2}}$ | $0$ (if $\nu > 1$) | $\frac{\nu}{\nu-2}$ (if $\nu > 2$) | does not exist |
| $\chi^2_p$ | $\frac{1}{\Gamma(p/2)2^{p/2}} x^{(p/2)-1} e^{-x/2}$ | $p$ | $2p$ | $(\frac{1}{1-2t})^{p/2} (t < 1/2)$ |

Handwritten note next to Normal MGF: $M_{N(0,1)}(t) = e^{t^2/2}$

### Visual Description
A printed table of common probability distributions with their properties. Several items are highlighted in yellow: the column headers "mean" and "variance", and the rows for "Poisson($\lambda$)" and "Normal($\mu, \sigma^2$)". There are blue arrows pointing to the Poisson and Normal MGFs, with a handwritten formula for the standard normal MGF.

---

## Page 19
### Content
## 2 More on the Central Limit Theorem (CLT)

Let $X_1, \dots, X_n$ be i.i.d. with finite $\mu$ and $\sigma^2$. Then
$$Z_n = \frac{\sqrt{n}(\bar{X}_n - \mu)}{\sigma} \rightsquigarrow N(0, 1).$$

1. We could use MGF to prove the CLT (see Wasserman). Here we will just do a sanity check:
   Does $Z_n$ have the correct mean and variance?
   * $\mathbb{E}[Z_n] = \dots = 0$
   * $\mathbb{E}[Z_n^2] = \dots = 1 \implies \text{Var}(Z_n) = 1$

### Visual Description
Typed lecture notes with blue handwritten annotations. "i.i.d." is annotated with "independent" and "identically distr". $\mu$ and $\sigma^2$ are annotated with $\mathbb{E}[X_i]$ and $\text{Var}(X_i)$. The convergence symbol $\rightsquigarrow$ is labeled "limit". The sanity check results ($0$ and $1$) are handwritten in blue, along with a "check this!" note.

---

## Page 20
### Content
[From AOS]

5.4 The Central Limit Theorem 77

The law of large numbers says that the distribution of $\bar{X}_n$ piles up near $\mu$. This isn't enough to help us approximate probability statements about $\bar{X}_n$. For this we need the central limit theorem.

Suppose that $X_1, \dots, X_n$ are IID with mean $\mu$ and variance $\sigma^2$. The central limit theorem (CLT) says that $\bar{X}_n = n^{-1} \sum_i X_i$ has a distribution which is approximately Normal with mean $\mu$ and variance $\sigma^2/n$. This is remarkable since nothing is assumed about the distribution of $X_i$, except the existence of the mean and variance.

**5.8 Theorem (The Central Limit Theorem (CLT)).** Let $X_1, \dots, X_n$ be IID with mean $\mu$ and variance $\sigma^2$. Let $\bar{X}_n = n^{-1} \sum_{i=1}^n X_i$. Then
$$Z_n = \frac{\bar{X}_n - \mu}{\sqrt{\mathbb{V}(\bar{X}_n)}} = \frac{\sqrt{n}(\bar{X}_n - \mu)}{\sigma} \rightsquigarrow Z$$
where $Z \sim N(0, 1)$. In other words,
$$\lim_{n \to \infty} \mathbb{P}(Z_n \le z) = \Phi(z) = \int_{-\infty}^z \frac{1}{\sqrt{2\pi}} e^{-x^2/2} dx.$$

**Interpretation:** Probability statements about $\bar{X}_n$ can be approximated using a Normal distribution. It's the **probability statements** that we are approximating, not the random variable itself.

In addition to $Z_n \rightsquigarrow N(0, 1)$, there are several forms of notation to denote the fact that the distribution of $Z_n$ is converging to a Normal. They all mean the same thing. Here they are:
* $Z_n \approx N(0, 1)$
* $\bar{X}_n \approx N(\mu, \frac{\sigma^2}{n})$
* $\bar{X}_n - \mu \approx N(0, \frac{\sigma^2}{n})$
* $\sqrt{n}(\bar{X}_n - \mu) \approx N(0, \sigma^2)$
* $\frac{\sqrt{n}(\bar{X}_n - \mu)}{\sigma} \approx N(0, 1)$

(Can prove CLT using MGFs)

### Visual Description
A screenshot of a textbook page (likely "All of Statistics" by Wasserman). Key parts of the theorem and interpretation are highlighted in yellow. Blue handwritten notes include "[From AOS]", circling the random variable part of the $Z_n$ formula, and a note at the bottom: "(Can prove CLT using MGFs)". There is also a blue handwritten derivation showing $\frac{\bar{X}_n - \mu}{\sigma/\sqrt{n}} = \frac{\sqrt{n}(\bar{X}_n - \mu)}{\sigma}$.

---

## Page 21
### Content
# Two interpretations/applications of the CLT:

2. There are two common ways to think of the CLT (and more broadly convergence in distribution):

* Say I repeat the experiment many times:
  iid sample of size $n$: $\{X_1^1, \dots, X_n^1\} \implies \text{compute Statistic } \bar{X}_n^{(1)}, T_n^{(1)}$
  $\{X_1^2, \dots, X_n^2\}$
  ...
  $\{X_1^k, \dots, X_n^k\} \implies \bar{X}_n^{(k)}, T_n^{(k)}$

  and computed their centered and normalized averages $Z_n^1, \dots, Z_n^k$. The central limit theorem then tells us that these normalized averages will (approximately) have a standard Gaussian distribution.

$k$ I.I.D. samples of size $n$
$\implies T_n^{(1)}, T_n^{(2)}, \dots, T_n^{(k)}$
approx. distr of these RVS is normal

### Visual Description
Lecture slide with typed text and extensive blue and red handwritten annotations on a grid background. The annotations clarify the process of taking multiple samples of size $n$ and computing a statistic for each, noting that the resulting distribution of these statistics will be approximately normal.

---

## Page 22
### Content
[From AOS]
3.8 Exercises 61

19. This question is to help you understand the idea of a **sampling distribution**. Let $X_1, \dots, X_n$ be IID with mean $\mu$ and variance $\sigma^2$. Let $\bar{X}_n = n^{-1} \sum_{i=1}^n X_i$. Then $\bar{X}_n$ is a **statistic**, that is, a function of the data. Since $\bar{X}_n$ is a random variable, it has a distribution. This distribution is called the **sampling distribution of the statistic**. Recall from Theorem 3.17 that $\mathbb{E}(\bar{X}_n) = \mu$ and $\mathbb{V}(\bar{X}_n) = \sigma^2/n$. Don't confuse the distribution of the data $f_X$ and the distribution of the statistic $f_{\bar{X}_n}$. To make this clear, let $X_1, \dots, X_n \sim \text{Uniform}(0, 1)$. Let $f_X$ be the density of the Uniform(0, 1). Plot $f_X$. Now let $\bar{X}_n = n^{-1} \sum_{i=1}^n X_i$. Find $\mathbb{E}(\bar{X}_n)$ and $\mathbb{V}(\bar{X}_n)$. Plot them as a function of $n$. Interpret. Now simulate the distribution of $\bar{X}_n$ for $n = 1, 5, 25, 100$. Check that the simulated values of $\mathbb{E}(\bar{X}_n)$ and $\mathbb{V}(\bar{X}_n)$ agree with your theoretical calculations. What do you notice about the sampling distribution of $\bar{X}_n$ as $n$ increases?

23. Find the moment generating function for the Poisson, Normal, and Gamma distributions.

24. Let $X_1, \dots, X_n \sim \text{Exp}(\beta)$. Find the moment generating function of $X_i$. Prove that $\sum_{i=1}^n X_i \sim \text{Gamma}(n, \beta)$.

### Visual Description
A screenshot of an exercise page from a textbook (AoS). Exercise 19 is highlighted in yellow, emphasizing the concept of a sampling distribution and the difference between the data distribution and the statistic's distribution. Blue handwritten note "[From AOS]" is at the top.

---

## Page 23
### Content
From Navidi, "Statistics for Engineers and Scientists", 2006

**original data distr. (population distr.) $f_X$**
**sampling distr. $f_{\bar{X}_n}$**

[Graphs showing the evolution of the sampling distribution of the mean for different sample sizes $n=5$ and $n=30$ for three different population distributions: nearly symmetric, skewed, and discrete.]

**What does this look like in higher dims?**

### Visual Description
A scanned page from a textbook showing nine plots arranged in a 3x3 grid. 
- The left column shows the "Population" distribution (original data distribution).
- The middle column shows the sampling distribution for "Sample size = 5" ($n=5$).
- The right column shows the sampling distribution for "Sample size = 30" ($n=30$).
The rows represent different initial population shapes. In all cases, as $n$ increases, the sampling distribution becomes more bell-shaped (Normal), illustrating the CLT. Blue handwritten annotations label the columns and add the question "What does this look like in higher dims?".

---

## Page 24
### Content
# II "Prediction"

* The second way is to suppose that before I did the experiment I asked the question what is the probability of a certain outcome:
$$\mathbb{P}(a \le \bar{X}_n \le b).$$

Then the CLT tells us:
$$\mathbb{P}(a \le \bar{X}_n \le b) =$$
$$= P\left(\frac{\sqrt{n}(a - \mu)}{\sigma} \le Z_n \le \frac{\sqrt{n}(b - \mu)}{\sigma}\right)$$
$$\approx P\left(\frac{\sqrt{n}(a - \mu)}{\sigma} \le Z \le \frac{\sqrt{n}(b - \mu)}{\sigma}\right)$$
$$= \Phi\left(\frac{\sqrt{n}(b - \mu)}{\sigma}\right) - \Phi\left(\frac{\sqrt{n}(a - \mu)}{\sigma}\right)$$
where $\Phi$ is the cdf of a standard Normal.

### Visual Description
Lecture slide on a grid background with typed text and blue/red handwritten annotations. It details the "Prediction" interpretation of the CLT for calculating probabilities. A handwritten sketch at the bottom shows a Normal distribution curve with a shaded area between two points, representing the probability calculation. Annotations include "CDF of N(0,1)" and a breakdown of the standardization process: $Z_n = \frac{\bar{X}_n - \mu}{\sigma/\sqrt{n}}$.
## Page 25
### Content
**Q: How does CLT comp. w. conc. ineq?**

**Example:** Let $X_i$ be iid RVs with $\mu = 0.5$ and $\sigma^2 = 1/4$.
Note: no distribution assumption.

$\mathbb{P}(0.4 < \bar{X}_n < 0.6) = \mathbb{P}(-0.1 < \bar{X}_n - \mu < 0.1)$
$= \mathbb{P}\left(\frac{-0.1 \times \sqrt{n}}{\sigma} < \frac{\sqrt{n}(\bar{X}_n - \mu)}{\sigma} < \frac{0.1 \times \sqrt{n}}{\sigma}\right)$
$\approx \Phi(0.2\sqrt{n}) - \Phi(-0.2\sqrt{n})$,
*Handwritten note: approx. prob statement for large n*

When $n = 100$, $\mathbb{P}(0.4 < \bar{X}_n < 0.6) \approx 0.9545$.

---
Compare to Chebyshev:
$\mathbb{P}(0.4 < \bar{X}_n < 0.6) = \mathbb{P}(|\bar{X}_n - \mu| < 0.1)$
$= 1 - \mathbb{P}(|\bar{X}_n - \mu| \ge 0.1)$
$\ge 1 - \frac{25}{n}$.

When $n = 100$, $\mathbb{P}(0.4 < \bar{X}_n < 0.6) \ge 0.75$.
*Handwritten notes: non-asymptotic bound (true for any n), lower bound*

Recall Chebyshev: $\forall t \ge 0, \mathbb{P}(|X - \mu| \ge t\sigma) \le \frac{1}{t^2}$.

### Visual Description
The slide compares the Central Limit Theorem (CLT) approximation to the Chebyshev inequality bound using a numerical example. It features printed text with several blue and red handwritten annotations. A red box highlights the standardized term in the CLT calculation, and a red circle highlights the Chebyshev bound result. A blue horizontal line separates the two comparison sections.

---

## Page 26
### Content
*Handwritten note: But, how do we apply CLT in practice? Usually, don't know $var(X_i)$*

To apply the CLT, we need $\sigma$
Often $\sigma^2$ is unknown
*Handwritten note: Def. $var(X) = \mathbb{E}[(X - \mathbb{E}(X))^2]$*

Estimate it:
$$S_n^2 = \frac{1}{n-1} \sum_{i=1}^n (X_i - \bar{X}_n)^2$$
*Handwritten notes: Unbiased est. $\mathbb{E}[S_n^2] = \sigma^2$, RV "statistic"*

One can show that $S_n^2 \xrightarrow{P} \sigma^2$, i.e. $S_n^2$ is consistent for $\sigma^2$.
*Handwritten note: prove by Chebyshev's or Markov's ineq. $\mathbb{P}(|S_n^2 - \sigma^2| \ge \epsilon) \le \dots$*

Using Slutsky's theorem we obtain the following version of the CLT:
$$\frac{\sqrt{n}(\bar{X}_n - \mu)}{S_n} \rightsquigarrow N(0, 1)$$

*Handwritten derivation at bottom:*
$S_n^2 \xrightarrow{P} \sigma^2$ see above
$\left. \begin{matrix} S_n \xrightarrow{P} \sigma \\ \frac{\sigma}{S_n} \xrightarrow{P} 1 \end{matrix} \right\} \text{By cont. mapping th.}$
$\le \frac{\mathbb{E}[(S_n^2 - \sigma^2)^2]}{\epsilon^2} = \frac{var(S_n^2)}{\epsilon^2} \to 0$ if $var(S_n^2) \to 0$ as $n \to \infty$

### Visual Description
The slide discusses the practical application of the CLT when the variance is unknown, introducing the sample variance $S_n^2$. It contains printed formulas, including a blue-boxed formula for $S_n^2$ and a red-boxed formula for the CLT with estimated variance. Extensive blue handwritten notes explain the definitions, consistency, and the use of Slutsky's theorem and the continuous mapping theorem.

---

## Page 27
### Content
*Handwritten notes:*

Normal approx with estimated var.

$$\frac{\sqrt{n}(\bar{X}_n - \mu)}{S_n} = \underbrace{\frac{\sigma}{S_n}}_{\xrightarrow{P} 1 \text{ by cont. mapping th.}} \underbrace{\left( \frac{\sqrt{n}(\bar{X}_n - \mu)}{\sigma} \right)}_{\xrightarrow{d} N(0,1)}$$

By Slutsky's th.
$$\frac{\sqrt{n}(\bar{X}_n - \mu)}{S_n} \rightsquigarrow N(0,1)$$

### Visual Description
This page is a handwritten scratchpad or supplemental slide. It provides a step-by-step breakdown of why the CLT holds when the population standard deviation $\sigma$ is replaced by the sample standard deviation $S_n$, using Slutsky's theorem and the continuous mapping theorem. The text is written in blue and red ink on a grid background.

---

## Page 28
### Content
*Handwritten note: $RV X: \Omega \to \mathbb{R}$. Recall: A r.v. is a map that assigns a real number $X(\omega)$ to each outcome $\omega \in \Omega$.*

### 3 Stronger Modes of Convergence

**Almost-sure convergence.** A sequence $X_n$ almost surely converges to $X$ if:
$$\mathbb{P}(\lim_{n \to \infty} X_n = X) = 1,$$
and denoted as
$$X_n \xrightarrow{a.s.} X.$$

*Handwritten notes: Alt. terminology: $X_n \to X$ almost everywhere, $X_n \to X$ w. prob 1. For every $\epsilon > 0, \mathbb{P}(\lim_{n \to \infty} |X_n - X| < \epsilon) = 1$.*

The two RVs become the same at the limit, i.e. they have the same values with probability 1.

Compare to **Convergence in Probability**:
$$\forall \epsilon > 0, \quad \lim_{n \to \infty} \mathbb{P}(|X_n - X| \ge \epsilon) = 0,$$

At the limit most values $X_n$ are quite close to $X$, but we can still have rare erratic value of $X_n$.

### Visual Description
The slide introduces "Stronger Modes of Convergence," specifically almost-sure convergence. It compares this to convergence in probability. The slide contains printed definitions with yellow highlighting on key terms. Blue and red handwritten notes provide alternative terminology and a formal epsilon-based probability statement for almost-sure convergence.

---

## Page 29
### Content
We will not use a.s. convergence again.

I only mention it because its most famous example is

**The Kolmogorov's Strong Law of Large Numbers:** Let $Y_1, \dots, Y_n, \dots$ be iid random variables with finite mean $\mathbb{E}(Y_1) = \mu$, then
$$\frac{1}{n} \sum_{i=1}^n Y_i \xrightarrow{a.s.} \mu.$$

The SLLN is harder to prove than the WLLN.

### Visual Description
Text-only slide. It presents the Strong Law of Large Numbers (SLLN) as the primary example of almost-sure convergence, noting its difficulty to prove compared to the Weak Law of Large Numbers (WLLN).

---

## Page 30
### Content
**Convergence in quadratic mean (convergence in $L_2$).** A sequence $X_n$ converges to $X$ in quadratic mean if:
$$\lim_{n \to \infty} \mathbb{E}(X_n - X)^2 = 0,$$
*Handwritten notes: average, squared magnitude of deviation, $X_1, X_2, \dots$ as $n \to \infty$*
denoted as
$$X_n \xrightarrow{L_2} X \text{ or } X_n \xrightarrow{qm} X.$$

**Convergence in $L_1$.** A sequence $X_n$ converges to $X$ in $L_1$ if:
$$\lim_{n \to \infty} \mathbb{E}|X_n - X| = 0,$$
*Handwritten note: magnitude of the deviation*
denoted as
$$X_n \xrightarrow{L_1} X.$$

$L_1$ and $L_2$ convergence modes are convergences of values of a sequence of random variables, as opposed to convergence in probability and a.s. convergence.
*Handwritten note: frequency of deviations (referring to prob/a.s. convergence)*

### Visual Description
The slide defines convergence in quadratic mean ($L_2$) and $L_1$ convergence. It uses printed text with blue and yellow handwritten annotations that clarify the intuitive meaning of the mathematical terms (e.g., "magnitude of deviation" vs "frequency of deviation").

---

## Page 31
### Content
![Forms of convergence diagram](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Convergence_of_random_variables.svg/500px-Convergence_of_random_variables.svg.png)
*Note: The image in the slide is a simplified version of the standard convergence implication diagram.*

**Figure 1: Forms of convergence that imply other forms of convergence (source: wikipedia).**

Implications shown:
- $L^s \implies L^r$ for $s > r \ge 1$
- $L^r \implies p$ (Convergence in probability)
- a.s. (Almost sure) $\implies p$ (Convergence in probability)
- $p$ (Convergence in probability) $\implies d$ (Convergence in distribution)

### Visual Description
The slide features a diagram showing the relationships between different modes of convergence. Arrows indicate which mode implies another. Key nodes like $L^s$, $L^r$, $a.s.$, $p$, and $d$ are highlighted in yellow. Blue handwritten arrows and marks emphasize certain paths in the diagram.

---

## Page 32
### Content
In statistics we are typically concerned with convergence in q.m. to a constant $c$:

$\mathbb{E}(Y_n - c)^2 \to 0$ where $c = \mu = \mathbb{E}(Y_n)$ as $n \to \infty$.
*Handwritten note: $\mathbb{E}[(\hat{\theta}_n - \theta)^2]$ MSE in point estimation*

E.g.
Let $Y_1, \dots, Y_n$ be iid RVs with $\mathbb{E}(Y_1) = \mu$ and $Var(Y_1) = \sigma^2$
Let $X_n = \frac{1}{n} \sum_{i=1}^n Y_i$.
Then $\mathbb{E}(X_n - \mu)^2 = Var(X_n) = \sigma^2/n \to 0$

That is, $X_n$ converges to its mean in quadratic mean.

Convergence in q.m. is interesting because it is often easy to prove, and it implies convergence in probability.

### Visual Description
The slide discusses the relevance of quadratic mean (q.m.) convergence in statistics, specifically relating it to Mean Squared Error (MSE) in point estimation. It includes a printed example showing that the sample mean converges to the population mean in quadratic mean. Yellow highlighting emphasizes the final point about q.m. convergence implying convergence in probability. Blue handwritten notes add the MSE context.

==End of PDF==
## Page 33
### Content
**Exercise:** Prove that convergence in quadratic mean $\implies$ convergence in probability. (The reverse is not, in general, true.)

We know $\mathbb{E}(X_n - X)^2 \to 0$

We want $\mathbb{P}(|X_n - X| \ge \epsilon) \to 0$.

### Visual Description
Handwritten notes on a grid background. The text is printed, with blue underlines and brackets highlighting the mathematical expressions for convergence in quadratic mean and convergence in probability.

---

## Page 34
### Content
We know $\mathbb{E}(X_n - X)^2 \to 0$. We want $\mathbb{P}(|X_n - X| \ge \epsilon) \to 0$.

**Chebyshev**
$$\forall t > 0, \quad \mathbb{P}(|X - \mu_X| \ge t\sigma_X) \le \frac{1}{t^2}.$$

**Mill** Let $X \sim N(\mu_X, \sigma_X^2)$.
$$\forall t > 0, \quad \mathbb{P}(|X - \mu_X| \ge t\sigma_X) \le \sqrt{2/\pi} \frac{\exp(-t^2/2)}{t}.$$

**Hoeffding**
$$\forall t > 0, \quad \mathbb{P}\left(|X - 0| \ge t\sqrt{\frac{\sum_{i=1}^n (b_i - a_i)^2}{4n^2}}\right) \le 2 \exp(-t^2/2).$$

**Markov** Let $X \ge 0$.
$$\forall t > 0, \quad \mathbb{P}(X \ge t) \le \frac{\mu}{t}, \quad \text{or equivalently,} \quad \mathbb{P}(X \ge t\mu) \le \frac{1}{t}.$$

### Visual Description
Text-only slide on a grid background, listing four probability inequalities: Chebyshev, Mill, Hoeffding, and Markov.

---

## Page 35
### Content
**Exercise:** Prove that convergence in quadratic mean $\implies$ convergence in probability. (The reverse is not, in general, true.)

We know $\mathbb{E}(X_n - X)^2 \to 0$ (by def. of conv. in q.m.)

We want $\mathbb{P}(|X_n - X| \ge \epsilon) \to 0$.

$$\mathbb{P}(|X_n - X| \ge \epsilon) = \mathbb{P}((X_n - X)^2 \ge \epsilon^2) \le \frac{\mathbb{E}(X_n - X)^2}{\epsilon^2} \to 0 \text{ as } n \to \infty.$$
(By Markov's inequality, since $(X_n - X)^2$ is a nonneg R.V.)

**Next: counter-ex. to reverse**
That is, conv in prob. does **not** imply conv in q.m. in general.

**Spec case (conv. in prob & conv. in qm)**
$Y_1, \dots, Y_n \stackrel{IID}{\sim} F$
Let $X_n = \frac{1}{n} \sum_{i=1}^n Y_i$
By LLN, $X_n \xrightarrow{P} \mathbb{E}[Y_1] = X$
$\mathbb{E}(X_n) = \mathbb{E}(Y_1) = X$
$Var(X_n) = Var(Y_1)/n$
$\mathbb{E}[(X_n - X)^2] = \mathbb{E}[(X_n - \mathbb{E}X_n)^2] = Var(X_n) \to 0$

### Visual Description
Handwritten notes in blue and red over printed text on a grid background. The proof uses Markov's inequality to show the implication. A special case involving the Law of Large Numbers (LLN) is sketched at the bottom.

---

## Page 36
### Content
**Counter-ex. (to show conv. in prob. does not imply conv. in qm in general)**

**PMF of $X_n$**
*   $\mathbb{P}(X_n = \sqrt{n}) = \frac{1}{n}$
*   $\mathbb{P}(X_n = 0) = 1 - \frac{1}{n}$

**Analysis:**
*   Conv. in prob? **yes**
*   Conv. in $L_2$? **no**
*   Conv. in $L_1$? **yes** (show this)

**Freq. of dev. (conc. of measure):**
$\mathbb{P}(|X_n - 0| > \epsilon) = \frac{1}{n} \to 0$ as $n \to \infty$
Hence $X_n \xrightarrow{P} 0$

**Magnitude of deviation:**
But $\mathbb{E}(|X_n - 0|^2) = (\sqrt{n})^2 \cdot \frac{1}{n} + 0 = 1$ for all $n$.
Hence, $X_n$ does **not** converge to zero in q.m.

### Visual Description
Handwritten notes in blue and red on a grid background. Includes a small plot of the PMF of $X_n$ showing a large spike at 0 with height $1-1/n$ and a small spike at $\sqrt{n}$ with height $1/n$.

---

## Page 37
### Content
Similarly, $X_n \xrightarrow{P} X$ does **not** imply $X_n \xrightarrow{L_1} X$.

**PMF of $X_n$**
*   $\mathbb{P}(X_n = n^2) = \frac{1}{n}$
*   $\mathbb{P}(X_n = 0) = 1 - \frac{1}{n}$

For any $\epsilon > 0$:
$\mathbb{P}(|X_n| < \epsilon) = \mathbb{P}(X_n = 0) = 1 - \frac{1}{n} \to 1$ as $n \to \infty$
Hence, $X_n \xrightarrow{P} 0$.

But $\mathbb{E}(|X_n - 0|) = n^2 \cdot \frac{1}{n} + 0 = n \to \infty$.
That is, $X_n$ does **not** converge to 0 in $L_1$.

### Visual Description
Handwritten notes in blue on a grid background. Includes a plot of the PMF of $X_n$ with a spike at 0 and a spike at $n^2$.

---

## Page 38
### Content
[From AOS]
5.2 Types of Convergence 75

quadratic mean $\longrightarrow$ probability $\longrightarrow$ distribution
(point-mass distribution $\dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots \dots
## Page 41
### Content
"error of propagation"
**4 The Delta Method**
(First-order delta method)

If
$$\frac{\sqrt{n}(Y_n - \mu)}{\sigma} \rightsquigarrow N(0, 1)$$
and $g$ is a differentiable function such that $g'(\mu) \neq 0$. Then
$$\frac{\sqrt{n}(g(Y_n) - g(\mu))}{g'(\mu)\sigma} \rightsquigarrow N(0, 1).$$

*Handwritten notes:*
- linear approx around $Y_n = \mu$
- $Y_n$ is asymptotically normal: $Y_n \approx N(\mu, \frac{\sigma^2}{n})$
- $\sigma$ known
- $g(Y_n) \approx N(g(\mu), [g'(\mu)]^2 \frac{\sigma^2}{n})$
- Graph showing $z = g(y)$ with a tangent line at $\mu$.
- $Y_n \xrightarrow{P} \mu$ as $n \to \infty$
- **Think:** When is the delta method good? When is the linear approx good?
- When $n$ large, $Y_n$ close to $\mu$, when $g$ is 'flatter' around $\mu$ etc.

### Visual Description
The slide contains printed text defining the Delta Method with extensive blue and red handwritten annotations. A hand-drawn graph on a grid background illustrates the function $z = g(y)$ and its linear approximation at the point $\mu$. Arrows and labels highlight the distribution of $g(Y_n)$ when $n$ is large.

---

## Page 42
### Content
**Sketch of proof:**

Taylor exp of $g(Y_n)$ around $Y_n = \mu$
$$g(Y_n) = g(\mu) + g'(\mu)(Y_n - \mu) + \text{Remainder}$$
where Remainder $\to 0$ as $Y_n \to \mu$
($\text{Rem} = o_p(1)$)

$$g(Y_n) \approx g(\mu) + g'(\mu)(Y_n - \mu)$$
$$\frac{g(Y_n) - g(\mu)}{\sigma/\sqrt{n}} \approx g'(\mu) \frac{(Y_n - \mu)}{\sigma/\sqrt{n}}$$

Apply Slutsky's theorem, const $\cdot \rightsquigarrow N(0, 1)$
$$\frac{\sqrt{n}(g(Y_n) - g(\mu))}{\sigma} \rightsquigarrow g'(\mu) \cdot N(0, 1)$$

$$sd(g(Y_n)) = |g'(\mu)| \cdot \frac{\sigma}{\sqrt{n}}$$

### Visual Description
Handwritten notes on a blue grid background detailing the mathematical steps for a sketch of the proof of the Delta Method. It uses Taylor expansion and Slutsky's theorem. Key terms like "Remainder" and "Slutsky's theorem" are highlighted or underlined.

---

## Page 43
### Content
**Ex:** Let $X_1, \dots, X_n$ be iid with finite mean $\mu$ and variance $\sigma^2$. By the CLT we have $\sqrt{n}(\bar{X}_n - \mu) \rightsquigarrow N(0, \sigma^2)$.

Let $W_n = e^{\bar{X}_n}$, then the Delta Method implies that $\sqrt{n}(W_n - e^\mu) \rightsquigarrow N(0, \sigma^2 e^{2\mu})$.

*Handwritten notes:*
$\bar{X}_n \approx N(\mu, \frac{\sigma^2}{n})$
$W_n = e^{\bar{X}_n}$ distr of $W_n$?
Let $g(s) = e^s \implies g'(s) = e^s, g'(\mu) \neq 0$

Taylor exp. of $g$ around $\bar{X}_n = \mu$
$$g(\bar{X}_n) \approx g(\mu) + g'(\mu)(\bar{X}_n - \mu)$$
$$\sqrt{n}(g(\bar{X}_n) - g(\mu)) \approx g'(\mu) \sqrt{n}(\bar{X}_n - \mu)$$
where $\sqrt{n}(\bar{X}_n - \mu) \rightsquigarrow N(0, \sigma^2)$
$$\sqrt{n}(g(\bar{X}_n) - g(\mu)) \rightsquigarrow e^\mu N(0, \sigma^2)$$
$$\sqrt{n}(e^{\bar{X}_n} - e^\mu) \rightsquigarrow N(0, \sigma^2 e^{2\mu})$$

### Visual Description
The slide features a printed example of the Delta Method applied to an exponential function of the sample mean. Below the printed text, handwritten notes on a grid background provide the step-by-step derivation using Taylor expansion and the properties of the normal distribution.

---

## Page 44
### Content
**Proof:** What if $g'(\mu) = 0$?

2nd order Taylor exp Assuming $g(\cdot)$ twice differentiable around $Y_n = \mu$ and $g'(\mu) = 0$
$$g(Y_n) \approx g(\mu) + \underbrace{g'(\mu)(Y_n - \mu)}_{=0} + \frac{g''(\mu)}{2!} (Y_n - \mu)^2$$

$$\frac{n}{\sigma^2} (g(Y_n) - g(\mu)) \approx \frac{g''(\mu)}{2} \frac{(Y_n - \mu)^2}{\sigma^2/n}$$
where $\frac{(Y_n - \mu)^2}{\sigma^2/n} \rightsquigarrow \chi^2_1$

Apply Slutsky's th $\implies$ **2nd order Delta Method** [see CB]
$$n(g(Y_n) - g(\mu)) \rightsquigarrow \sigma^2 \frac{g''(\mu)}{2} \chi^2_1$$

**Recall:** square of a $N(0, 1)$ RV is a $\chi^2_1$ RV
$$\frac{n(Y_n - \mu)^2}{\sigma^2} \rightsquigarrow \chi^2_1$$
$$\frac{(Y_n - \mu)^2}{\sigma^2/n}$$

### Visual Description
Handwritten notes on a grid background exploring the case where the first derivative in the Delta Method is zero, leading to the "2nd order Delta Method". It includes mathematical derivations involving Taylor expansion and the Chi-squared distribution.

---

## Page 45
### Content
[From AOS]
232 14. Multivariate Models
**14.1 Random Vectors**

Multivariate models involve a **random vector** $X$ of the form
$$X = \begin{pmatrix} X_1 \\ \vdots \\ X_k \end{pmatrix}$$
$k$ = # of inputs/features
$\vec{X}^1, \dots, \vec{X}^n$ sample from $f(\vec{x})$

The mean of a random vector $X$ is defined by
$$\mu = E(X) = \begin{pmatrix} \mu_1 \\ \vdots \\ \mu_k \end{pmatrix} = \begin{pmatrix} E(X_1) \\ \vdots \\ E(X_k) \end{pmatrix} \in \mathbb{R}^k \text{ (fixed)}$$ (14.1)

The **covariance matrix** $\Sigma$, also written $\mathbb{V}(X)$, is defined to be
$$\Sigma = \begin{bmatrix} \mathbb{V}(X_1) & \text{Cov}(X_1, X_2) & \dots & \text{Cov}(X_1, X_k) \\ \text{Cov}(X_2, X_1) & \mathbb{V}(X_2) & \dots & \text{Cov}(X_2, X_k) \\ \vdots & \vdots & \ddots & \vdots \\ \text{Cov}(X_k, X_1) & \text{Cov}(X_k, X_2) & \dots & \mathbb{V}(X_k) \end{bmatrix} \in \mathbb{R}^{k \times k} \text{ (fixed)}$$ (14.2)
$\Sigma = \text{cov}(X)$

This is also called the variance matrix or the variance-covariance matrix. The inverse $\Sigma^{-1}$ is called the **precision matrix**.

**14.1 Theorem.** *Let $a$ be a vector of length $k$ and let $X$ be a random vector of the same length with mean $\mu$ and variance $\Sigma$. Then $E(a^T X) = a^T \mu$ and $\mathbb{V}(a^T X) = a^T \Sigma a$. If $A$ is a matrix with $k$ columns, then $E(AX) = A\mu$ and $\mathbb{V}(AX) = A\Sigma A^T$.*

$a^T X = a_1 X_1 + a_2 X_2 + \dots + a_k X_k = \text{scalar R.V.}$

Now suppose we have a random sample of $n$ vectors:
$$\begin{pmatrix} X_{11} \\ X_{21} \\ \vdots \\ X_{k1} \end{pmatrix}, \begin{pmatrix} X_{12} \\ X_{22} \\ \vdots \\ X_{k2} \end{pmatrix}, \dots, \begin{pmatrix} X_{1n} \\ X_{2n} \\ \vdots \\ X_{kn} \end{pmatrix}$$ (14.3)

The sample mean $\bar{X}$ is a vector defined by
$$\bar{X} = \begin{pmatrix} \bar{X}_1 \\ \vdots \\ \bar{X}_k \end{pmatrix}$$

**Ask:**
1) random or fixed?
2) dim?

### Visual Description
A scan of a textbook page (likely "All of Statistics") with blue handwritten annotations. The text defines random vectors, their mean vectors, and covariance matrices, including a theorem on linear transformations. Handwritten notes clarify dimensions and whether parameters are fixed or random.

---

## Page 46
### Content
14.2 Estimating the Correlation 233

where $\bar{X}_i = n^{-1} \sum_{j=1}^n X_{ij}$. The sample variance matrix, also called the covariance matrix or the variance-covariance matrix, is
$$S = \begin{bmatrix} s_{11} & s_{12} & \dots & s_{1k} \\ s_{12} & s_{22} & \dots & s_{2k} \\ \vdots & \vdots & \ddots & \vdots \\ s_{1k} & s_{2k} & \dots & s_{kk} \end{bmatrix}$$ (14.4)
where
$$s_{ab} = \frac{1}{n-1} \sum_{j=1}^n (X_{aj} - \bar{X}_a)(X_{bj} - \bar{X}_b).$$
It follows that $E(\bar{X}) = \mu$ and $E(S) = \Sigma$.

**14.2 Estimating the Correlation**

Consider $n$ data points from a bivariate distribution:
$$\begin{pmatrix} X_{11} \\ X_{21} \end{pmatrix}, \begin{pmatrix} X_{12} \\ X_{22} \end{pmatrix}, \dots, \begin{pmatrix} X_{1n} \\ X_{2n} \end{pmatrix}.$$
Recall that the correlation between $X_1$ and $X_2$ is
$$\rho = \frac{E((X_1 - \mu_1)(X_2 - \mu_2))}{\sigma_1 \sigma_2}$$ (14.5)
where $\sigma_j^2 = \mathbb{V}(X_j), j = 1, 2$. The nonparametric plug-in estimator is the sample correlation$^1$
$$\hat{\rho} = \frac{\sum_{i=1}^n (X_{1i} - \bar{X}_1)(X_{2i} - \bar{X}_2)}{s_1 s_2}$$ (14.6)
where
$$s_j^2 = \frac{1}{n-1} \sum_{i=1}^n (X_{ji} - \bar{X}_j)^2.$$
We can construct a confidence interval for $\rho$ by applying the delta method. However, it turns out that we get a more accurate confidence interval by first constructing a confidence interval for a function $\theta = f(\rho)$ and then applying...

---
$^1$More precisely, the plug-in estimator has $n$ rather than $n-1$ in the formula for $s_j$ but this difference is small.

### Visual Description
Text-only slide. It is a scan of a textbook page discussing the estimation of correlation and the sample variance matrix.

---

## Page 47
### Content
234 14. Multivariate Models

the inverse function $f^{-1}$. The method, due to Fisher, is as follows: Define $f$ and its inverse by
$$f(r) = \frac{1}{2} (\log(1+r) - \log(1-r))$$
$$f^{-1}(z) = \frac{e^{2z} - 1}{e^{2z} + 1}.$$

**Approximate Confidence Interval for The Correlation**
1. Compute $\hat{\theta} = f(\hat{\rho}) = \frac{1}{2} (\log(1+\hat{\rho}) - \log(1-\hat{\rho}))$.
2. Compute the approximate standard error of $\hat{\theta}$ which can be shown to be $\widehat{se}(\hat{\theta}) = \frac{1}{\sqrt{n-3}}$.
3. An approximate $1 - \alpha$ confidence interval for $\theta = f(\rho)$ is $(a, b) = \left( \hat{\theta} - \frac{z_{\alpha/2}}{\sqrt{n-3}}, \hat{\theta} + \frac{z_{\alpha/2}}{\sqrt{n-3}} \right)$.
4. Apply the inverse transformation $f^{-1}(z)$ to get a confidence interval for $\rho$: $\left( \frac{e^{2a}-1}{e^{2a}+1}, \frac{e^{2b}-1}{e^{2b}+1} \right)$.

Yet another method for getting a confidence interval for $\rho$ is to use the bootstrap.

**14.3 Multivariate Normal**
Recall that a vector $X$ has a multivariate Normal distribution, denoted by $X \sim N(\mu, \Sigma)$, if its density is
$$f(x; \mu, \Sigma) = \frac{1}{(2\pi)^{k/2} |\Sigma|^{1/2}} \exp \left\{ -\frac{1}{2} (x-\mu)^T \Sigma^{-1} (x-\mu) \right\}$$ (14.7)
where $\mu$ is a vector of length $k$ and $\Sigma$ is a $k \times k$ symmetric, positive definite matrix. Then $E(X) = \mu$ and $\mathbb{V}(X) = \Sigma$.

*Handwritten notes:*
- random vector
- $(x-\mu)^T \Sigma^{-1} (x-\mu) \approx \text{const} \implies \text{scalar} \implies \text{level sets}$
- pdf
- What do multivariate normally distributed data "look like"? Marginal distr? Projections? Conditional distr?
- Does the CLT apply to MVN distributions?

### Visual Description
A textbook page scan detailing Fisher's z-transformation for correlation confidence intervals and introducing the multivariate normal distribution. Blue handwritten notes add questions about the visualization and properties of multivariate normal data.

---

## Page 48
### Content
Joint pdf $p(x, y)$ bivariate normal distr

*Handwritten notes:*
- data pts
- feature 1 (X axis)
- feature 2 (Y axis)
- [From Wikipedia]

### Visual Description
A 3D plot of a bivariate normal distribution. The vertical axis represents the joint probability density $p(x, y)$. The base plane shows a scatter plot of data points with elliptical contour lines (level sets). On the side walls of the 3D box, the marginal distributions $p(x)$ and $p(y)$ are shown as histograms with overlaid normal curves. Blue handwritten labels identify the features and components of the plot.
## Page 49
### Content
14.4 Multinomial 235

**14.2 Theorem.** The following properties hold:
1. If $Z \sim N(0, I)$ and $X = \mu + \Sigma^{1/2}Z$, then $X \sim N(\mu, \Sigma)$.
2. If $X \sim N(\mu, \Sigma)$, then $\Sigma^{-1/2}(X - \mu) \sim N(0, I)$.
3. If $X \sim N(\mu, \Sigma)$ and $a$ is a vector of the same length as $X$, then $a^T X \sim N(a^T \mu, a^T \Sigma a)$.
4. Let
$$V = (X - \mu)^T \Sigma^{-1} (X - \mu).$$
Then $V \sim \chi^2_k$.

**14.3 Theorem.** Given a random sample of size $n$ from a $N(\mu, \Sigma)$, the log-likelihood is (up to a constant not depending on $\mu$ or $\Sigma$) given by
$$\ell(\mu, \Sigma) = -\frac{n}{2}(\bar{X} - \mu)^T \Sigma^{-1} (\bar{X} - \mu) - \frac{n}{2} \text{tr}(\Sigma^{-1} S) - \frac{n}{2} \log |\Sigma|.$$
The MLE is
$$\hat{\mu} = \bar{X} \quad \text{and} \quad \hat{\Sigma} = \left( \frac{n-1}{n} \right) S. \quad (14.8)$$

### 14.4 Multinomial
Let us now review the Multinomial distribution. The data take the form $X = (X_1, \dots, X_k)$ where each $X_j$ is a count. Think of drawing $n$ balls (with replacement) from an urn which has balls with $k$ different colors. In this case, $X_j$ is the number of balls of the $j$th color. Let $p = (p_1, \dots, p_k)$ where $p_j \ge 0$ and $\sum_{j=1}^k p_j = 1$ and suppose that $p_j$ is the probability of drawing a ball of color $j$.

**14.4 Theorem.** Let $X \sim \text{Multinomial}(n, p)$. Then the marginal distribution of $X_j$ is $X_j \sim \text{Binomial}(n, p_j)$. The mean and variance of $X$ are
$$\mathbb{E}(X) = \begin{pmatrix} np_1 \\ \vdots \\ np_k \end{pmatrix}$$
and
$$\mathbb{V}(X) = \begin{pmatrix} np_1(1-p_1) & -np_1p_2 & \dots & -np_1p_k \\ -np_1p_2 & np_2(1-p_2) & \dots & -np_2p_k \\ \vdots & \vdots & \ddots & \vdots \\ -np_1p_k & -np_2p_k & \dots & np_k(1-p_k) \end{pmatrix}.$$

### Visual Description
The page contains printed mathematical text. Property 3 of Theorem 14.2 is highlighted in yellow. In property 4, the expression for $V$ has a blue underline, and the result $V \sim \chi^2_k$ has a blue squiggle underline. The rest of the page is standard black text on a white background.

---

## Page 50
### Content
### Multivariate CLT
Let $\vec{X}_1, \dots, \vec{X}_n$ be IID random vectors with $\mathbb{E}[\vec{X}_1] = \vec{\mu}$ and $\mathbb{V}[\vec{X}_1] = \Sigma$.

Let $\bar{\vec{X}}_n = \frac{1}{n} \sum_{i=1}^n \vec{X}_i$. As $n \to \infty$, then,
$$\sqrt{n}(\bar{\vec{X}}_n - \mu) \rightsquigarrow MVN(0, \Sigma)$$

### Visual Description
Handwritten notes in blue ink on a light-colored grid background. The word "IID" is highlighted in yellow. The title "Multivariate CLT" is underlined.

---

## Page 51
### Content
### Delta Method
(1st order Taylor exp / tangent plane approx)

Multivariate case: let $Y_n = (Y_{n1}, \dots, Y_{nk})^T$ be a sequence of random vectors and $g : \mathbb{R}^k \mapsto \mathbb{R}$ be a differentiable function with derivative
$$\nabla g(y) = \begin{pmatrix} \frac{\partial g}{\partial y_1} \\ \frac{\partial g}{\partial y_2} \\ \vdots \\ \frac{\partial g}{\partial y_k} \end{pmatrix}.$$
around $Y_n \approx \mu$.

If
$$\sqrt{n}(Y_n - \mu) \rightsquigarrow N(0, \Sigma)$$
(By e.g. CLT, $Y_n \approx MVN(\mu, \frac{\Sigma}{n})$ for large $n$)

then
$$\sqrt{n}(g(Y_n) - g(\mu)) \rightsquigarrow N(0, [\nabla g(\mu)]^T \Sigma [\nabla g(\mu)])$$

28

### Visual Description
The page features printed text with extensive handwritten annotations in blue ink on a grid background. The title "Delta Method" and the definition of $Y_n$ and $g$ are highlighted in yellow. There are blue circles around the $\sqrt{n}$ terms and the variance term in the final result. Handwritten notes explain the context as a "1st order Taylor exp" and mention the CLT.

---

## Page 52
### Content
**Example :** Let $X_n = \begin{pmatrix} X_{n1} \\ X_{n2} \end{pmatrix}$ be iid bivariate random variables with mean $\mu = \begin{pmatrix} \mu_1 \\ \mu_2 \end{pmatrix}$ and covariance $\Sigma$. By the multivariate CLT,
$$\sqrt{n} \begin{pmatrix} \bar{X}_{\cdot 1} - \mu_1 \\ \bar{X}_{\cdot 2} - \mu_2 \end{pmatrix} \rightsquigarrow N(0, \Sigma).$$

Let $Y_n = \bar{X}_{\cdot 1} \bar{X}_{\cdot 2}$, that is $Y_n = g(\bar{X}_{\cdot 1}, \bar{X}_{\cdot 2})$ with $g(s_1, s_2) = s_1 s_2$.

Then $\mathbb{E}(Y_n) = g(\mu) = \mu_1 \mu_2$, $\nabla g(s) = \begin{pmatrix} \frac{\partial g}{\partial s_1} \\ \frac{\partial g}{\partial s_2} \end{pmatrix} = \begin{pmatrix} s_2 \\ s_1 \end{pmatrix}$,
and
$$\nabla g(\mu)^T \Sigma \nabla g(\mu) = (\mu_2, \mu_1) \begin{pmatrix} \sigma_{11} & \sigma_{12} \\ \sigma_{21} & \sigma_{22} \end{pmatrix} \begin{pmatrix} \mu_2 \\ \mu_1 \end{pmatrix} = \mu_2^2 \sigma_{11} + 2\mu_1 \mu_2 \sigma_{12} + \mu_1^2 \sigma_{22}.$$

By the Multivariate Delta Method,
$$\sqrt{n}(\bar{X}_{\cdot 1} \bar{X}_{\cdot 2} - \mu_1 \mu_2) \rightsquigarrow N(0, \mu_2^2 \sigma_{11} + 2\mu_1 \mu_2 \sigma_{12} + \mu_1^2 \sigma_{22}).$$

29

### Visual Description
Printed text on a grid background with blue handwritten annotations. Blue lines underline key definitions like $Y_n$ and the final result. A blue circle highlights $\nabla g(s)$. A blue arrow points from the variance calculation to its place in the final normal distribution result.

---

## Page 53
### Content
[From AOS]

2.10 Two Important Multivariate Distributions 39

**2.41 Definition.** If $X_1, \dots, X_n$ are independent and each has the same marginal distribution with CDF $F$, we say that $X_1, \dots, X_n$ are IID (independent and identically distributed) and we write
$$X_1, \dots, X_n \sim F.$$
If $F$ has density $f$ we also write $X_1, \dots, X_n \sim f$. We also call $X_1, \dots, X_n$ a random sample of size $n$ from $F$.

Much of statistical theory and practice begins with IID observations and we shall study this case in detail when we discuss statistics.

### 2.10 Two Important Multivariate Distributions

MULTINOMIAL. The multivariate version of a Binomial is called a Multinomial. Consider drawing a ball from an urn which has balls with $k$ different colors labeled "color 1, color 2, ..., color k." Let $p = (p_1, \dots, p_k)$ where $p_j \ge 0$ and $\sum_{j=1}^k p_j = 1$ and suppose that $p_j$ is the probability of drawing a ball of color $j$. Draw $n$ times (independent draws with replacement) and let $X = (X_1, \dots, X_k)$ where $X_j$ is the number of times that color $j$ appears. Hence, $n = \sum_{j=1}^k X_j$. We say that $X$ has a Multinomial $(n, p)$ distribution written $X \sim \text{Multinomial}(n, p)$. The probability function is
$$f(x) = \binom{n}{x_1 \dots x_k} p_1^{x_1} \dots p_k^{x_k} \quad (2.9)$$
where
$$\binom{n}{x_1 \dots x_k} = \frac{n!}{x_1! \dots x_k!}.$$

**2.42 Lemma.** Suppose that $X \sim \text{Multinomial}(n, p)$ where $X = (X_1, \dots, X_k)$ and $p = (p_1, \dots, p_k)$. The marginal distribution of $X_j$ is Binomial $(n, p_j)$.

MULTIVARIATE NORMAL. The univariate Normal has two parameters, $\mu$ and $\sigma$. In the multivariate version, $\mu$ is a vector and $\sigma$ is replaced by a matrix $\Sigma$. To begin, let
$$Z = \begin{pmatrix} Z_1 \\ \vdots \\ Z_k \end{pmatrix}$$

### Visual Description
A scan of a textbook page. At the top left, "[From AOS]" is handwritten in blue. The heading "MULTIVARIATE NORMAL" is highlighted in yellow. The page contains definitions and descriptions of IID, Multinomial, and Multivariate Normal distributions.

---

## Page 54
### Content
40 2. Random Variables

where $Z_1, \dots, Z_k \sim N(0, 1)$ are independent. The density of $Z$ is
$$f(z) = \prod_{i=1}^k f(z_i) = \frac{1}{(2\pi)^{k/2}} \exp \left\{ -\frac{1}{2} \sum_{j=1}^k z_j^2 \right\} = \frac{1}{(2\pi)^{k/2}} \exp \left\{ -\frac{1}{2} z^T z \right\}.$$
We say that $Z$ has a standard multivariate Normal distribution written $Z \sim N(0, I)$ where it is understood that 0 represents a vector of $k$ zeroes and $I$ is the $k \times k$ identity matrix.

More generally, a vector $X$ has a multivariate Normal distribution, denoted by $X \sim N(\mu, \Sigma)$, if it has density
$$f(x; \mu, \Sigma) = \frac{1}{(2\pi)^{k/2} |\Sigma|^{1/2}} \exp \left\{ -\frac{1}{2} (x - \mu)^T \Sigma^{-1} (x - \mu) \right\} \quad (2.10)$$
where $|\Sigma|$ denotes the determinant of $\Sigma$, $\mu$ is a vector of length $k$ and $\Sigma$ is a $k \times k$ symmetric, positive definite matrix. Setting $\mu = 0$ and $\Sigma = I$ gives back the standard Normal.

Since $\Sigma$ is symmetric and positive definite, it can be shown that there exists a matrix $\Sigma^{1/2}$ — called the square root of $\Sigma$ — with the following properties: (i) $\Sigma^{1/2}$ is symmetric, (ii) $\Sigma = \Sigma^{1/2} \Sigma^{1/2}$ and (iii) $\Sigma^{1/2} \Sigma^{-1/2} = \Sigma^{-1/2} \Sigma^{1/2} = I$ where $\Sigma^{-1/2} = (\Sigma^{1/2})^{-1}$.

**2.43 Theorem.** If $Z \sim N(0, I)$ and $X = \mu + \Sigma^{1/2}Z$ then $X \sim N(\mu, \Sigma)$. Conversely, if $X \sim N(\mu, \Sigma)$, then $\Sigma^{-1/2}(X - \mu) \sim N(0, I)$.

Suppose we partition a random Normal vector $X$ as $X = (X_a, X_b)$. We can similarly partition $\mu = (\mu_a, \mu_b)$ and
$$\Sigma = \begin{pmatrix} \Sigma_{aa} & \Sigma_{ab} \\ \Sigma_{ba} & \Sigma_{bb} \end{pmatrix}.$$

**2.44 Theorem.** Let $X \sim N(\mu, \Sigma)$. Then:
(1) The marginal distribution of $X_a$ is $X_a \sim N(\mu_a, \Sigma_{aa})$.
(2) The conditional distribution of $X_b$ given $X_a = x_a$ is
$$X_b | X_a = x_a \sim N(\mu_b + \Sigma_{ba} \Sigma_{aa}^{-1}(x_a - \mu_a), \Sigma_{bb} - \Sigma_{ba} \Sigma_{aa}^{-1} \Sigma_{ab}).$$
(3) If $a$ is a vector then $a^T X \sim N(a^T \mu, a^T \Sigma a)$.
(4) $V = (X - \mu)^T \Sigma^{-1} (X - \mu) \sim \chi^2_k$.

---
$^7$If $a$ and $b$ are vectors then $a^T b = \sum_{i=1}^k a_i b_i$.
$^8\Sigma^{-1}$ is the inverse of the matrix $\Sigma$.
$^9$A matrix $\Sigma$ is positive definite if, for all nonzero vectors $x$, $x^T \Sigma x > 0$.

### Visual Description
A scan of a textbook page. Parts (1), (2), and (3) of Theorem 2.44 are highlighted in yellow. The page contains mathematical derivations and theorems related to the Multivariate Normal distribution, including its density, linear transformations, and partitioning properties.

---

## Page 55
### Content
[From AOS]

432 List of Symbols

**Convergence Symbols**
$X_n \xrightarrow{P} X$: convergence in probability
$X_n \rightsquigarrow X$: convergence in distribution
$X_n \xrightarrow{qm} X$: convergence in quadratic mean
$X_n \approx N(\mu, \sigma_n^2)$: $(X_n - \mu)/\sigma_n \rightsquigarrow N(0, 1)$
$x_n = o(a_n)$: $x_n/a_n \to 0$
$x_n = O(a_n)$: $|x_n/a_n|$ is bounded for large $n$
$X_n = o_P(a_n)$: $X_n/a_n \xrightarrow{P} 0$
$X_n = O_P(a_n)$: $|X_n/a_n|$ is bounded in probability for large $n$

**Statistical Models**
$\mathfrak{F}$: statistical model; a set of distribution functions, density functions or regression functions
$\theta$: parameter
$\hat{\theta}$: estimate of parameter
$T(F)$: statistical functional (the mean, for example)
$\mathcal{L}_n(\theta)$: likelihood function

**Useful Math Facts**
$e^x = \sum_{k=0}^\infty \frac{x^k}{k!} = 1 + x + \frac{x^2}{2!} + \dots$
$\sum_{j=k}^\infty r^j = \frac{r^k}{1-r}$ for $0 < r < 1$
$\lim_{n \to \infty} (1 + \frac{a}{n})^n = e^a$
Stirling's approximation: $n! \approx n^n e^{-n} \sqrt{2\pi n}$

THE GAMMA FUNCTION. The Gamma function is defined by
$$\Gamma(\alpha) = \int_0^\infty y^{\alpha-1} e^{-y} dy$$
for $\alpha > 0$. If $\alpha > 1$ then $\Gamma(\alpha) = (\alpha - 1)\Gamma(\alpha - 1)$. If $n$ is a positive integer then $\Gamma(n) = (n - 1)!$. Some special values are: $\Gamma(1) = 1$ and $\Gamma(1/2) = \sqrt{\pi}$.

### Visual Description
A scan of a textbook page titled "List of Symbols". At the top left, "[From AOS]" is handwritten in blue. The page lists various mathematical and statistical symbols and formulas categorized under "Convergence Symbols", "Statistical Models", and "Useful Math Facts". There is a small blue mark near the $\theta$ parameter.

---
==End of PDF==
