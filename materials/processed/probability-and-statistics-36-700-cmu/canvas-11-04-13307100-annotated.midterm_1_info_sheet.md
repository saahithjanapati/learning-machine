# canvas-11-04-13307100-annotated.midterm_1_info_sheet

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-11-04-13307100-annotated.midterm_1_info_sheet.pdf`
Duplicate equivalents: `canvas-11-04-13307100-annotated.midterm_1_info_sheet.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 20

## Page 1
### Content
36-700 Probability and Mathematical Statistics • Fall 2025

**INFORMATION REGARDING MIDTERM ONE**

1. The first midterm exam will be on **Wednesday October 1 in class** (11 am-12:20 pm, WEH 7500). Please arrive 5-10 mins early if you can, so we can start seating you and minimize distractions during the exam.
2. The exam will cover **Lecture Chapters/Notes 1-6 and HW assignments 1-4**, which roughly correspond to **Chapters 1-6 in Wasserman**. In other words, everything covered in class up to now and some basic concepts of statistical inference (such as, confidence sets, bias/variance and consistency of an estimator).
3. To prepare for the exam: Make sure you understand the homework problems, lecture and class examples well — meaning pay attention to the *underlying concepts* behind these problems. The exam may also contain (a variation of) the book examples in Wasserman.
4. You will be given at the time of the exam the "Official cheat-sheet" and a copy of the table which appears on page 433 in Wasserman. The last page of the exam can be used as scratch paper.
5. Calculators will not be allowed or needed. **Show all work for full credit.** You can leave your final answer in fractions, combination/permutation numbers, exponential functions, and $\Phi(\cdot)$, the CDF of standard normal. Integrals need to be simplified.
6. Remember that while we are very generous in grading the HW, we will grade exams more stringently. Hence, make sure you do not repeat your HW mistakes, and take a look at the posted solutions even if you received full credit on your answers.
7. The exam will consist of 6-8 problems where you need to show your work for full credit. There will be at least one problem from each lecture/chapter.
8. Finally make sure you get a good night's sleep and come to the exam well-rested!

Topics to review:
* axioms of probability; how to list the sample space of a given random experiment and then calculate the probability or conditional probability of an event; Bayes' Theorem
* the cumulative distribution function of a discrete or continuous random variable; general properties and how to find the cdf
* definition of independence of events and random variables; how to test whether random variables are independent
* how to calculate marginal and conditional probabilities of various events and random variables (given the joint pdf of relevant random variables)
* transformation of random variables (the Jacobian method will not be included on the exam)
* properties of expectations, variances and covariances of random variables; *(important)* conditional expectation and the law of iterated expectations; moment-generating functions

### Visual Description
Text-only slide with some annotations. Points 3 and 4 are highlighted in yellow. There is a blue underline under "conditional expectation" in the last bullet point.

---

## Page 2
### Content
* how to use probability inequalities to bound quantities that are otherwise hard to compute
* convergence of a sequence of random variables (in probability, in distribution and in quadratic mean); relationship between types of convergence, convergence properties under transformations
* *(important)* the Law of Large Numbers and the CLT; when and how to use these laws
* ~~the Delta method (univariate and bivariate cases)~~ [Handwritten note: not for Midterm 1 but need this for next HW]
* General concepts in statistical inference (what they mean): point versus interval estimators, statistic, sampling distribution, consistency and bias of an estimator, MSE, parametric vs non-parametric methods
* confidence intervals and sample size

### Visual Description
Text-only slide with blue annotations. Several phrases are underlined in blue: "probability inequalities", "convergence of a sequence of random variables", "Law of Large Numbers and the CLT", "consistency and bias", and "confidence intervals". The bullet point for "the Delta method" is crossed out with a blue 'X' and has a handwritten note next to it: "not for Midterm 1 but need this for next HW".

---

## Page 3
### Content
[This page is marked with a large blue "OLD" and a diagonal strike-through line.]

**Useful facts**
* For any real number $t$, $\lim_{n \to \infty} (1 + \frac{t}{n})^n = e^t$.
* $Var(X) = E(X^2) - (EX)^2$, $Cov(X, Y) = E(XY) - E(X)E(Y)$.
* $Y_n \xrightarrow{P} Y$ if $\forall \epsilon > 0, \lim_{n \to \infty} P(|Y_n - Y| \ge \epsilon) = 0$.

**Commonly used distributions**
| Distribution | support | pdf/pmf | $E(X)$ | $Var(X)$ | $M_X(t)$ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| $N(\mu, \sigma^2)$ | $(-\infty, \infty)$ | $\frac{1}{\sqrt{2\pi}\sigma} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$ | $\mu$ | $\sigma^2$ | $\exp(\mu t + t^2\sigma^2/2)$ |
| $U(a, b)$ | $[a, b]$ | $\frac{1}{b-a} \mathbf{1}(a \le x \le b)$ | $(a+b)/2$ | $(b-a)^2/12$ | $\frac{e^{tb}-e^{ta}}{t(b-a)}$ |
| $Bin(n, p)$ | $0, 1, \dots, n$ | $C_n^x p^x(1-p)^{n-x}$ | $np$ | $np(1-p)$ | $[pe^t + (1-p)]^n$ |
| $Geo(p)$ | $1, 2, 3, \dots$ | $p(1-p)^{x-1}$ | $1/p$ | $\frac{1-p}{p^2}$ | $\frac{pe^t}{1-(1-p)e^t}$ |
| $Poi(\lambda)$ | $0, 1, 2, \dots$ | $\frac{\lambda^x}{x!} e^{-\lambda}$ | $\lambda$ | $\lambda$ | $\exp(\lambda(e^t - 1))$ |
| $Expon(\lambda)$ | $(0, +\infty)$ | $\lambda e^{-\lambda x}$ | $1/\lambda$ | $1/\lambda^2$ | $\lambda/(\lambda - t)$, for $t < \lambda$ |
| $Gamma(\alpha, \beta)$ | $(0, +\infty)$ | $\frac{\beta^\alpha}{\Gamma(\alpha)} x^{\alpha-1} e^{-\beta x}$ | $\alpha/\beta$ | $\alpha/\beta^2$ | $(1 - t/\beta)^{-\alpha}$ for $t < \beta$ |

**Markov's Inequality** Let $X \ge 0$ and assume $\mu = E[X]$ exists. Then $\forall t > 0, P(X \ge t) \le \mu/t$.

**Chebyshev's Inequality** Assume $E[X] = \mu$ and $Var(X) = \sigma^2$ exist. Then $\forall t > 0, P(|X - \mu| \ge t\sigma) \le 1/t^2$.

**Mill's inequality:** Let $Z \sim N(0, 1)$. Then $\forall t > 0, P(|Z| \ge t) \le \sqrt{(2/\pi)} \exp(-t^2/2)/t$.

**Hoeffding's inequality** Let $X_1, \dots, X_n$ be independent, $X_i \in [a_i, b_i]$, and $E[X_i] = 0$. Then
$\forall t > 0, P(\bar{X} \ge t) \le \exp\left(-\frac{2n^2t^2}{\sum_{i=1}^n (b_i - a_i)^2}\right)$ and $P(|\bar{X}| \ge t) \le 2 \exp\left(-\frac{2n^2t^2}{\sum_{i=1}^n (b_i - a_i)^2}\right)$.

**Delta method** Let $Y_n = (Y_{n1}, \dots, Y_{nk})^T$ be a sequence of random vectors, or random variables if $k = 1$, and $g : \mathbb{R}^k \to \mathbb{R}$ be a differentiable function with derivative
$$\nabla g(y) = \left( \frac{\partial g}{\partial y_1} \frac{\partial g}{\partial y_2} \dots \frac{\partial g}{\partial y_k} \right)^T.$$
If $\sqrt{n}(Y_n - \mu) \rightsquigarrow N(0, \Sigma)$, then $\sqrt{n}(g(Y_n) - g(\mu)) \rightsquigarrow N(0, \nabla_\mu^T \Sigma \nabla_\mu)$, where $\nabla_\mu$ is $\nabla g(y)$ evaluated at $y = \mu$.

**Cauchy-Schwarz inequality** $E[XY] \le \sqrt{E[X^2]E[Y^2]}$.

**Jensen's inequality** For a convex function $r$, $r(E[X]) \le E[r(X)]$.

### Visual Description
A formula sheet containing a table of distributions and several statistical inequalities. The entire page is crossed out with a large blue diagonal line and has the word "OLD" written in large blue letters at the top left. The word "support" in the table header is highlighted in yellow.

---

## Page 4
### Content
**Revised**

**Some potentially useful facts**
* **DeMorgan's Laws:** $(A \cup B)^c = A^c \cap B^c$ and $(A \cap B)^c = A^c \cup B^c$
* **Union Bound:** For not necessarily disjoint events $A_i$ we have
$$P\left(\bigcup_{i=1}^\infty A_i\right) \le \sum_{i=1}^\infty P(A_i).$$
* $Var(X) = E(X^2) - (EX)^2, Cov(X, Y) = E(XY) - E(X)E(Y)$.
* For a collection of random variables,
$$Var\left(\sum_{i=1}^n a_i X_i\right) = \sum_{i=1}^n \sum_{j=1}^n a_i a_j Cov(X_i, X_j).$$
* The law of total expectation (the tower property):
$$E[E[Y|X]] = E[Y]$$
* The law of total variance:
$$V(Y) = E(V(Y|X)) + V(E(Y|X)).$$.
* Convergence in probability: $Y_n \xrightarrow{P} Y$ if $\forall \epsilon > 0, \lim_{n \to \infty} P(|Y_n - Y| \ge \epsilon) = 0$.
* Convergence in distribution: $X_n \rightsquigarrow X$, if $\lim_{n \to \infty} F_n(t) = F(t)$, for all $t$ for which $F$ is continuous.
* If $Z \sim N(0, I)$ and $X = \mu + \Sigma^{1/2}Z$, then $X \sim N(\mu, \Sigma)$.
Conversely, if $X \sim N(\mu, \Sigma)$, then $\Sigma^{-1/2}(X - \mu) \sim N(0, I)$.
* For any real number $t$, $\lim_{n \to \infty} (1 + \frac{t}{n})^n = e^t$.

**Markov's Inequality** Let $X \ge 0$ and assume $\mu = E[X]$ exists. Then $\forall t > 0, P(X \ge t) \le \mu/t$.

**Chebyshev's Inequality** Assume $E[X] = \mu$ and $Var(X) = \sigma^2$ exist. Then $\forall t > 0, P(|X - \mu| \ge t\sigma) \le 1/t^2$.

**Mill's inequality:** Let $Z \sim N(0, 1)$. Then $\forall t > 0, P(|Z| \ge t) \le \sqrt{(2/\pi)} \exp(-t^2/2)/t$.

**Hoeffding's inequality** Let $X_1, \dots, X_n$ be independent, $X_i \in [a_i, b_i]$, and $E[X_i] = 0$. Then
$\forall t > 0, P(\bar{X} \ge t) \le \exp\left(-\frac{2n^2t^2}{\sum_{i=1}^n (b_i - a_i)^2}\right)$ and $P(|\bar{X}| \ge t) \le 2 \exp\left(-\frac{2n^2t^2}{\sum_{i=1}^n (b_i - a_i)^2}\right)$.

### Visual Description
A revised formula sheet. The word "Revised" is written in blue at the top left. There are blue checkmarks next to several bullet points. The layout is text-only with mathematical formulas.

---

## Page 5
### Content
**Theorem** Let $X_n, X, Y_n, Y$ be random variables. Let $g$ be a continuous function and $c$ a constant.
1. If $X_n \xrightarrow{P} X$, then $X_n \rightsquigarrow X$.
2. $X_n \xrightarrow{P} c \iff X_n \rightsquigarrow c$
3. If $X_n \xrightarrow{P} X$ and $Y_n \xrightarrow{P} Y$, then $X_n + Y_n \xrightarrow{P} X + Y$
4. If $X_n \rightsquigarrow X$ and $Y_n \rightsquigarrow c$, then $X_n + Y_n \rightsquigarrow X + c$
5. If $X_n \xrightarrow{P} X$ and $Y_n \xrightarrow{P} Y$, then $X_n Y_n \xrightarrow{P} XY$
6. If $X_n \rightsquigarrow X$ and $Y_n \rightsquigarrow c$, then $X_n Y_n \rightsquigarrow cX$
7. If $X_n \xrightarrow{P} X$, then $g(X_n) \xrightarrow{P} g(X)$
8. If $X_n \rightsquigarrow X$, then $g(X_n) \rightsquigarrow g(X)$

**Delta method** Let $Y_n = (Y_{n1}, \dots, Y_{nk})^T$ be a sequence of random vectors, or random variables if $k = 1$, and $g : \mathbb{R}^k \to \mathbb{R}$ be a differentiable function with derivative
$$\nabla g(y) = \left( \frac{\partial g}{\partial y_1} \frac{\partial g}{\partial y_2} \dots \frac{\partial g}{\partial y_k} \right)^T.$$
If $\sqrt{n}(Y_n - \mu) \rightsquigarrow N(0, \Sigma)$, then $\sqrt{n}(g(Y_n) - g(\mu)) \rightsquigarrow N(0, \nabla_\mu^T \Sigma \nabla_\mu)$, where $\nabla_\mu$ is $\nabla g(y)$ evaluated at $y = \mu$.

### Visual Description
Text-only slide containing a theorem with 8 properties of convergence and the definition of the Delta method. There is a small blue checkmark next to the word "Theorem".

---

## Page 6
### Content
[Handwritten blue notes at top: "Cont or discrete R.V.?", "support of RV?"]

**Table of Distributions**
List of Symbols 433

| Distribution | PDF or probability function | mean | variance | MGF |
| :--- | :--- | :--- | :--- | :--- |
| Point mass at $a$ | $I(x = a)$ | $a$ | $0$ | $e^{at}$ |
| Bernoulli($p$) | $p^x(1 - p)^{1-x}$ | $p$ | $p(1 - p)$ | $pe^t + (1 - p)$ |
| Binomial($n, p$) | $\binom{n}{x} p^x(1 - p)^{n-x}$ | $np$ | $np(1 - p)$ | $(pe^t + (1 - p))^n$ |
| Geometric($p$) | $p(1 - p)^{x-1}I(x \ge 1)$ | $1/p$ | $\frac{1-p}{p^2}$ | $\frac{pe^t}{1-(1-p)e^t}$ ($t < -\log(1-p)$) |
| Poisson($\lambda$) | $\frac{\lambda^x e^{-\lambda}}{x!}$ | $\lambda$ | $\lambda$ | $e^{\lambda(e^t-1)}$ |
| Uniform($a, b$) | $I(a < x < b)/(b - a)$ | $\frac{a+b}{2}$ | $\frac{(b-a)^2}{12}$ | $\frac{e^{bt}-e^{at}}{(b-a)t}$ |
| Normal($\mu, \sigma^2$) | $\frac{1}{\sigma\sqrt{2\pi}} e^{-(x-\mu)^2/(2\sigma^2)}$ | $\mu$ | $\sigma^2$ | $\exp\{\mu t + \frac{\sigma^2 t^2}{2}\}$ |
| Exponential($\beta$) | $\frac{e^{-x/\beta}}{\beta}$ | $\beta$ | $\beta^2$ | $\frac{1}{1-\beta t}$ ($t < 1/\beta$) |
| Gamma($\alpha, \beta$) | $\frac{x^{\alpha-1}e^{-x/\beta}}{\Gamma(\alpha)\beta^\alpha}$ | $\alpha\beta$ | $\alpha\beta^2$ | $(\frac{1}{1-\beta t})^\alpha$ ($t < 1/\beta$) |
| Beta($\alpha, \beta$) | $\frac{\Gamma(\alpha+\beta)}{\Gamma(\alpha)\Gamma(\beta)}x^{\alpha-1}(1 - x)^{\beta-1}$ | $\frac{\alpha}{\alpha+\beta}$ | $\frac{\alpha\beta}{(\alpha+\beta)^2(\alpha+\beta+1)}$ | $1 + \sum_{k=1}^\infty \left(\prod_{r=0}^{k-1} \frac{\alpha+r}{\alpha+\beta+r}\right) \frac{t^k}{k!}$ |
| $t_\nu$ | $\frac{\Gamma(\frac{\nu+1}{2})}{\Gamma(\frac{\nu}{2})} \frac{1}{\sqrt{\nu\pi}} \frac{1}{(1 + \frac{x^2}{\nu})^{(\nu+1)/2}}$ | $0$ (if $\nu > 1$) | $\frac{\nu}{\nu-2}$ (if $\nu > 2$) | does not exist |
| $\chi^2_p$ | $\frac{1}{\Gamma(p/2)2^{p/2}} x^{(p/2)-1}e^{-x/2}$ | $p$ | $2p$ | $(\frac{1}{1-2t})^{p/2}$ ($t < 1/2$) |

### Visual Description
A detailed table of probability distributions. The title "Table of Distributions" is highlighted in yellow. There are handwritten blue notes at the top asking about continuous vs discrete variables and their support.

---

## Page 7
### Content
**Table for Standard Normal Z**

| $z$ | $P(Z < z)$ | | $z$ | $P(Z < z)$ |
| :--- | :--- | :--- | :--- | :--- |
| -3.01 | 0.00 | | 0.00 | 0.50 |
| -2.58 | 0.00 | | 0.03 | 0.51 |
| -2.33 | 0.01 | | 0.05 | 0.52 |
| -2.05 | 0.02 | | 0.08 | 0.53 |
| -1.96 | 0.02 | | 0.10 | 0.54 |
| -1.88 | 0.03 | | 0.13 | 0.55 |
| -1.75 | 0.04 | | 0.15 | 0.56 |
| -1.64 | 0.05 | | 0.18 | 0.57 |
| -1.55 | 0.06 | | 0.20 | 0.58 |
| -1.48 | 0.07 | | 0.23 | 0.59 |
| -1.41 | 0.08 | | 0.25 | 0.60 |
| -1.34 | 0.09 | | 0.28 | 0.61 |
| -1.28 | 0.10 | | 0.31 | 0.62 |
| -1.23 | 0.11 | | 0.33 | 0.63 |
| -1.17 | 0.12 | | 0.36 | 0.64 |
| -1.13 | 0.13 | | 0.39 | 0.65 |
| -1.08 | 0.14 | | 0.41 | 0.66 |
| -1.04 | 0.15 | | 0.44 | 0.67 |
| -0.99 | 0.16 | | 0.47 | 0.68 |
| -0.95 | 0.17 | | 0.50 | 0.69 |
| -0.92 | 0.18 | | 0.52 | 0.70 |
| -0.88 | 0.19 | | 0.55 | 0.71 |
| -0.84 | 0.20 | | 0.58 | 0.72 |
| -0.81 | 0.21 | | 0.61 | 0.73 |
| -0.77 | 0.22 | | 0.64 | 0.74 |
| -0.74 | 0.23 | | 0.67 | 0.75 |
| -0.71 | 0.24 | | 0.71 | 0.76 |
| -0.67 | 0.25 | | 0.74 | 0.77 |
| -0.64 | 0.26 | | 0.77 | 0.78 |
| -0.61 | 0.27 | | 0.81 | 0.79 |
| -0.58 | 0.28 | | 0.84 | 0.80 |
| -0.55 | 0.29 | | 0.88 | 0.81 |
| -0.52 | 0.30 | | 0.92 | 0.82 |
| -0.50 | 0.31 | | 0.95 | 0.83 |
| -0.47 | 0.32 | | 0.99 | 0.84 |
| -0.44 | 0.33 | | 1.04 | 0.85 |
| -0.41 | 0.34 | | 1.08 | 0.86 |
| -0.39 | 0.35 | | 1.13 | 0.87 |
| -0.36 | 0.36 | | 1.17 | 0.88 |
| -0.33 | 0.37 | | 1.23 | 0.89 |
| -0.31 | 0.38 | | 1.28 | 0.90 |
| -0.28 | 0.39 | | 1.34 | 0.91 |
| -0.25 | 0.40 | | 1.41 | 0.92 |
| -0.23 | 0.41 | | 1.48 | 0.93 |
| -0.20 | 0.42 | | 1.55 | 0.94 |
| -0.18 | 0.43 | | 1.64 | 0.95 |
| -0.15 | 0.44 | | 1.75 | 0.96 |
| -0.13 | 0.45 | | 1.88 | 0.97 |
| -0.10 | 0.46 | | 1.96 | 0.98 |
| -0.08 | 0.47 | | 2.05 | 0.98 |
| -0.05 | 0.48 | | 2.33 | 0.99 |
| -0.03 | 0.49 | | 2.58 | 1.00 |
| | | | 3.01 | 1.00 |
| | | | 3.72 | 1.00 |

### Visual Description
A standard normal distribution table showing $z$-scores and their corresponding cumulative probabilities $P(Z < z)$. Text-only slide.

---

## Page 8
### Content
**36-700 Probability and Mathematical Statistics**
**Practice Midterm 1**

**Printed Name:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**Andrew ID:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**This exam is closed book/notes. I have neither given nor received assistance on this exam.**

**Signature:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

* **Please legibly write all parts of your solutions inside the boxes.** We will not read or grade things outside of boxes.
* Calculators are not allowed or needed. **Show all work for full credit.** You may leave your final answer in fractions, combination/permutation numbers, exponential functions, and $\Phi(\cdot)$, the CDF of standard normal. Integrals need to be simplified.
* You can find the official formula sheet and a table of distributions at the back of the exam. You can use the last page as scratch paper.

### Visual Description
The cover page of a practice midterm exam. It includes fields for name, ID, and signature, along with an honor statement and exam instructions. Some instructions are highlighted in yellow.

---
## Page 9
### Content
Name: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Andrew ID: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1. Let $X$ be a random variable with a continuous and strictly increasing c.d.f. function $F_X$ (so that the inverse $F_X^{-1}$ is well defined). Let $Y = F_X(X)$. Show that $Y$ has a uniform distribution on the interval $[a, b]$; specify $a$ and $b$.

### Visual Description
The page contains a header for Name and Andrew ID with blank boxes. Below the problem statement is a large, empty rectangular box intended for the student's solution.

---
## Page 10
### Content
Name: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Andrew ID: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

2. Let $X_1, \dots, X_n \stackrel{iid}{\sim} \text{Bernoulli}(1/2)$. Let $Y_i = e^{3X_i}$. Let
$$W_n = \frac{1}{n} \sum_{i=1}^n Y_i.$$

(a) The sequence $W_n$ converges in probability to a number $\mu$. What is $\mu$?

(b) State the limiting distribution of $\sqrt{n}(W_n - \mu)$ and write your answer in terms of $\sigma^2$, where $\sigma^2$ is the variance of $Y_i = e^{3X_i}$. Then compute $\sigma^2$ explicitly.

### Visual Description
The page contains a header for Name and Andrew ID. There are two empty rectangular boxes provided for the answers to parts (a) and (b).

---
## Page 11
### Content
(c) Let $Z_n = \sqrt{W_n}$. Show that $\sqrt{n}(Z_n - a) \rightsquigarrow N(0, b)$ for some $a$ and $b$. Find $a$ and $b$ explicitly. You may leave your answer in terms of $\sigma^2$ (the variance of $Y_i = e^{3X_i}$). Note: $N(a, b)$ means a normal distribution with mean $a$ and variance $b$.

### Visual Description
The page contains the text for part (c) of problem 2 at the top, followed by a large empty rectangular box for the solution.

---
## Page 12
### Content
Name: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Andrew ID: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3. Let $X$ be a continuous uniform random variable on $[0, 1]$.

(a): Show that for any $x \in [0, 1]$, $P(X = x) = 0$.
Hint: You can use that $A \subset B \Rightarrow P(A) \le P(B)$.

(b): Let $A$ be the event that $X = 1/2$. Show that $A$ is independent of any other event $B$.

### Visual Description
The page contains a header for Name and Andrew ID. There are two empty rectangular boxes provided for the answers to parts (a) and (b).

---
## Page 13
### Content
Name: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Andrew ID: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

(c): Derive the PDF of $(X + 1)^5$. Be sure to define the PDF for all real numbers.

### Visual Description
The page contains a header for Name and Andrew ID and the text for part (c) of problem 3. A large empty rectangular box is provided for the solution.

---
## Page 14
### Content
Name: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Andrew ID: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

4. Let $X$ and $Z$ be two continuous random variables with PDFs $f_X$ and $f_Z$. Let $g_{X|Z}(x|z)$ be the conditional PDF of $X$ given $Z = z$ (note that this is a function of $x$, and $z$ is fixed).

(a): State the definition of $E[X|Z = z]$ and $V[X|Z = z]$ in terms of the conditional PDF $g_{X|Z}$.

(b): Explain in 1-2 sentences whether $E[X|Z]$ in general is a random variable or fixed constant and why.

### Visual Description
The page contains a header for Name and Andrew ID. There are two empty rectangular boxes provided for the answers to parts (a) and (b).

---
## Page 15
### Content
Name: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Andrew ID: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5. Suppose we generate a random variable $X$ in the following way. First we flip a coin with a 60% chance of heads. If the coin is heads, take $X$ to have constant value 10. If the coin is tails, take $X$ to have a $N(100, 200)$ distribution (that is, mean 100, variance 200). Let $Y$ take value 1 if the coin is heads and 0 otherwise.

(a): Compute $E[X|Y = 0]$ and $V[X|Y = 0]$.

(b): Compute $E[X|Y = 1]$ and $V[X|Y = 1]$.

### Visual Description
The page contains a header for Name and Andrew ID. There are two empty rectangular boxes provided for the answers to parts (a) and (b).

---
## Page 16
### Content
(c): Use (a) and (b) to compute $E[X]$ and $V[X]$.

### Visual Description
The page contains the text for part (c) of problem 5 at the top, followed by a large empty rectangular box for the solution.

---
## Page 17
### Content
Name: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Andrew ID: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

6. Prove that if $X_n \rightsquigarrow 0$ then $X_n \xrightarrow{P} 0$.

### Visual Description
The page contains a header for Name and Andrew ID, followed by a single mathematical proof question. Below the question is a large, empty rectangular box intended for the student's answer.

---
## Page 18
### Content
Name: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Andrew ID: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7. One important application of concentration inequalities is in quantifying performance in classification problems in machine learning. In the classification problem, suppose we are given $n$ i.i.d samples $(X_i, Y_i)$ and a fixed classifier $h$ which maps $X$s to $Y$s, and the $Y$s are binary $\{0, 1\}$.

We can define the **empirical risk** of a classifier as:
$$\widehat{R}(h) = \frac{1}{n} \sum_{i=1}^n \mathbb{I}(h(X_i) \neq Y_i),$$
this simply counts the number of mistakes made by our classifier on the training data. To remind you $\mathbb{I}(h(X_i) \neq Y_i) = 1$, if $h(X_i) \neq Y_i$ and 0 otherwise. (That is, it is a Bernoulli random variable.) Its expected value is the **true risk** of the classifier which we denote $R(h)$. Ideally, we would like that the empirical risk is close to the true risk so we can use our training data to get a sense of how good our classifier is. We will use concentration inequalities to show this.

(a) Compute the variance of $\widehat{R}(h)$. This can depend on $R(h)$.
*Hint: Note that $\mathbb{I}(\cdot)^2 = \mathbb{I}(\cdot)$. Use the i.i.d. assumption to simplify your calculations.*

### Visual Description
The page contains a header for Name and Andrew ID, followed by an introductory text for question 7 regarding empirical risk in machine learning. It includes a mathematical formula for empirical risk. Below part (a), there is a large, empty rectangular box for the student's answer.

---
## Page 19
### Content
(b) Write out Chebyshev’s inequality to bound the deviation $|\widehat{R}(h) - R(h)|$ in probability.

(c) Use Chebyshev’s inequality to bound the sample size needed to ensure that this deviation is at most 0.01 with probability at least 0.95. You may need to upper bound the variance of $\widehat{R}(h)$ to do this: use as tight a bound as you can think of. *Hint: Recall $x(1 - x) \le 1/4$ for $x \in [0, 1]$.*

### Visual Description
The page continues question 7 with parts (b) and (c). Each part is followed by a large, empty rectangular box for the student's answer.

---
## Page 20
### Content
(d) Write out Hoeffding’s inequality for the deviation.

(e) Use Hoeffding’s inequality to give a $1 - \delta$ confidence interval for the unknown true risk $R(h)$ (centered around the empirical risk).

### Visual Description
The page concludes question 7 with parts (d) and (e). Each part is followed by a large, empty rectangular box for the student's answer.
