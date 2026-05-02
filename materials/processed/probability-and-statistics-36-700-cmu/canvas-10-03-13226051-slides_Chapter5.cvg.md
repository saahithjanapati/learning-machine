# canvas-10-03-13226051-slides_Chapter5.cvg

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-10-03-13226051-slides_Chapter5.cvg.pdf`
Duplicate equivalents: `canvas-10-03-13226051-slides_Chapter5.cvg.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 29

## Page 1
### Content
**CHAPTER 5 – Stochastic Convergence**

**Contents**
1. **Stochastic Convergence Basics** (2)
2. **More on the Central Limit Theorem (CLT)** (11)
3. **Stronger Modes of Convergence** (16)
4. **The Delta Method** (24)

Reading: Wasserman Sec 5.1-5.5

First recall how we say that a sequence of numbers converges to a limit, i.e. we say a sequence of numbers $x_1, \dots, x_n$ has limit $x$, if for every $\epsilon > 0$, there is some $N(\epsilon)$ such that, for all $n \ge N(\epsilon)$, we have that $|x - x_n| < \epsilon$.

We then write $\lim_{n \to \infty} x_n = x$, and say that the sequence converges to $x$.

We would like to ask an analogous question for random variables, i.e. given a sequence of RVs $X_1, \dots, X_n$ can we say that they have a “limit” $X$? What does it mean for a sequence of random variables to converge to some random variable $X$?

1

### Visual Description
Text-only slide.

---
## Page 2
### Content
### 1 Stochastic Convergence Basics

In statistics we estimate parameters using data, e.g. we estimate a true mean $\mu$ using the sample average of observations that have mean $\mu$.

We want to know something about the limiting behavior of our estimators, as the sample size $n$ increases:
* do estimates “converge” to the truth?
* what is their distribution around the truth?
* and so on.

This is what we refer to as **large sample theory**.

Note on notation: this chapter concerns the limiting behavior of the sequence of random variables $Y_n$, where for example:
$$Y_n = \frac{1}{n} \sum_{i=1}^n X_i.$$

2

### Visual Description
Text-only slide.

---
## Page 3
### Content
Suppose we have a sequence of random variables $Y_1, \dots, Y_n$, and another random variable $Y$. The two most basic forms of stochastic convergence are:

1. **Convergence in Probability:** The sequence $Y_n$ converges to $Y$ if:
$$\forall \epsilon > 0, \quad \lim_{n \to \infty} \mathbb{P}(|Y_n - Y| \ge \epsilon) = 0,$$
and we write
$$Y_n \xrightarrow{P} Y.$$

An important special case is when $Y = c$ constant, for example in the WLLN where $Y_n = \frac{1}{n} \sum_{i=1}^n X_i$ and $c = \mu = \mathbb{E}(X_1) = \mathbb{E}(Y_n)$.

**The Weak Law of Large Numbers (WLLN)** Let $X_1, \dots, X_n$ be i.i.d RVs with finite $\mathbb{E}(X_1) = \mu$ and $\text{Var}(X_1) = \sigma^2$. Then
$$\forall \epsilon > 0, \quad \mathbb{P}(|Y_n - \mu| > \epsilon) \to 0$$
as $n \to \infty$.

3

### Visual Description
Text-only slide.

---
## Page 4
### Content
2. **Convergence in Distribution:** Let $F_n$ and $F$ be the CDFs of $Y_n$ and $Y$. The sequence $Y_n$ converges in distribution to $Y$ if:
$$\lim_{n \to \infty} F_n(t) = F(t),$$
at all points $t$ where $F$ is continuous, and we write
$$Y_n \xrightarrow{d} Y \quad \text{or} \quad Y_n \rightsquigarrow Y.$$

An important example is the central limit theorem.

**The Central Limit Theorem (CLT)** Let $X_1, \dots, X_n$ be i.i.d. with mean $\mu$ and variance $\sigma^2$, both finite. Define:
$$Y_n = \bar{X}_n = \frac{1}{n} \sum_{i=1}^n X_i.$$
Then the standardized variable:
$$Z_n = \frac{(Y_n - \mu)}{\sigma/\sqrt{n}} = \frac{\sqrt{n}(Y_n - \mu)}{\sigma} \rightsquigarrow N(0, 1).$$

4

### Visual Description
Text-only slide.

---
## Page 5
### Content
Convergence in distribution only makes a statement about the distribution of the random variables.

Convergence in probability is a statement about the value of the random variables.

Convergence in probability $\implies$ convergence in distribution. The reverse is not, in general, true.

5

### Visual Description
Text-only slide.

---
## Page 6
### Content
We care about convergence in probability because it is a desirable property of estimators.

Terminology: consistent = “converges in probability”.

When we do estimation, we will see that MLEs, for example, are consistent.

We care about convergence in distribution because it facilitates or even allows probability calculations.

6

### Visual Description
Text-only slide.

---
## Page 7
### Content
**Ex:** Let $X_n, n = 1, 2, \dots$ be a sequence of i.i.d $N(0, 1)$ RVs and let $X \sim N(0, 1)$.

As $n \to \infty$, does $X_n$ converge to $X$ in distribution? In probability?

7

### Visual Description
Text-only slide.

---
## Page 8
### Content
**Ex:** Let $Y_n \sim N(0, \frac{1}{n})$ for $n = 1, 2, \dots$.

Note: $\sqrt{n}Y_n \sim N(0, 1)$ for all $n$. Hence, trivially, $\sqrt{n}Y_n \rightsquigarrow N(0, 1)$.

Does $Y_n$ converge, and if so to what? In distribution? In probability?

8

### Visual Description
Text-only slide.

---
## Page 9
### Content
**Ex:** Let $Y_n \sim N(n, 1)$.

Note: $Y_n - n \sim N(0, 1)$ for all $n$ so obviously, $Y_n - n \rightsquigarrow N(0, 1)$.

Does $Y_n$ converge, and if so to what? In distribution? In probability?

9
### Visual Description
Text-only slide.

---
## Page 10
### Content
**Ex:** Let $X \sim Poi(n)$. Prove that the sequence $Y_n = \frac{X-n}{\sqrt{n}} \rightsquigarrow N(0, 1)$ as $n \to \infty$.

10
### Visual Description
Text-only slide.

---
## Page 11
### Content
### 2 More on the Central Limit Theorem (CLT)

Let $X_1, \dots, X_n$ be i.i.d. with finite $\mu$ and $\sigma^2$. Then
$$Z_n = \frac{\sqrt{n}(\bar{X}_n - \mu)}{\sigma} \rightsquigarrow N(0, 1).$$

1. We could use MGF to prove the CLT (see Wasserman). Here we will just do a sanity check:
   Does $Z_n$ have the correct mean and variance?
   * $\mathbb{E}[Z_n] =$
   * $\mathbb{E}[Z_n^2] =$

11
### Visual Description
Text-only slide.

---
## Page 12
### Content
2. There are two common ways to think of the CLT (and more broadly convergence in distribution):
   * Say I repeat the experiment many times:
     $\{X_1^1, \dots, X_n^1\}$
     $\{X_1^2, \dots, X_n^2\}$
     $\dots$
     $\{X_1^k, \dots, X_n^k\}$
     and computed their centered and normalized averages $Z_n^1, \dots, Z_n^k$. The central limit theorem then tells us that these normalized averages will (approximately) have a standard Gaussian distribution.

12
### Visual Description
Text-only slide.

---
## Page 13
### Content
* The second way is to suppose that before I did the experiment I asked the question what is the probability of a certain outcome:
  $$\mathbb{P}(a \le \bar{X} \le b).$$
  Then the CLT tells us:
  $$P(a \le \bar{X} \le b) =$$
  $$= P\left( \frac{\sqrt{n}(a - \mu)}{\sigma} \le Z_n \le \frac{\sqrt{n}(b - \mu)}{\sigma} \right)$$
  $$\approx P\left( \frac{\sqrt{n}(a - \mu)}{\sigma} \le Z \le \frac{\sqrt{n}(b - \mu)}{\sigma} \right)$$
  $$= \Phi\left( \frac{\sqrt{n}(b - \mu)}{\sigma} \right) - \Phi\left( \frac{\sqrt{n}(a - \mu)}{\sigma} \right)$$
  where $\Phi$ is the cdf of a standard Normal.

13
### Visual Description
Text-only slide.

---
## Page 14
### Content
**Example :** Let $X_i$ be iid RVs with $\mu = 0.5$ and $\sigma^2 = 1/4$.
<u>Note: no distribution assumption.</u>

$\mathbb{P}(0.4 < \bar{X}_n < 0.6) = \mathbb{P}(-0.1 < \bar{X}_n - \mu < 0.1)$
$= \mathbb{P}\left( \frac{-0.1 \times \sqrt{n}}{\sigma} < \frac{\sqrt{n}(\bar{X}_n - \mu)}{\sigma} < \frac{0.1 \times \sqrt{n}}{\sigma} \right)$
$\approx \Phi(0.2\sqrt{n}) - \Phi(-0.2\sqrt{n}),$

When $n = 100$, $\mathbb{P}(0.4 < \bar{X}_n < 0.6) \approx 0.9545$.

Compare to Chebyshev:
$\mathbb{P}(0.4 < \bar{X}_n < 0.6) = \mathbb{P}(|\bar{X}_n - \mu| < 0.1)$
$= 1 - \mathbb{P}(|\bar{X}_n - \mu| \ge 0.1)$
$\ge 1 - \frac{25}{n}.$

When $n = 100$, $\mathbb{P}(0.4 < \bar{X}_n < 0.6) \ge 0.75$.

Recall Chebychev: $\forall t \ge 0 \mathbb{P}(|X - \mu| \ge t\sigma) \le \frac{1}{t^2}$.

14
### Visual Description
Text-only slide.

---
## Page 15
### Content
To apply the CLT, we need $\sigma$
Often $\sigma^2$ is unknown
Estimate it:
$$S_n^2 = \frac{1}{n-1} \sum_{i=1}^n (X_i - \bar{X}_n)^2.$$

One can show that $S_n^2 \xrightarrow{P} \sigma^2$, i.e. $S_n^2$ is consistent for $\sigma^2$.

Using Slutsky's theorem we obtain the following version of the CLT:
$$\frac{\sqrt{n}(\bar{X}_n - \mu)}{S_n} \rightsquigarrow N(0, 1).$$

15
### Visual Description
Text-only slide.

---
## Page 16
### Content
### 3 Stronger Modes of Convergence

**Almost-sure convergence.** A sequence $X_n$ almost surely converges to $X$ if:
$$\mathbb{P}(\lim_{n \to \infty} X_n = X) = 1,$$
and denoted as
$$X_n \xrightarrow{a.s.} X.$$
The two RVs become the same at the limit, i.e. they have the same values with probability 1.

Compare to **Convergence in Probability**:
$$\forall \epsilon > 0, \lim_{n \to \infty} \mathbb{P}(|X_n - X| \ge \epsilon) = 0,$$
At the limit most values $X_n$ are quite close to $X$, but we can still have rare erratic value of $X_n$.

16
### Visual Description
Text-only slide.

---
## Page 17
### Content
We will not use a.s. convergence again.

I only mention it because its most famous example is

**The Kolmogorov’s Strong Law of Large Numbers :** Let $Y_1, \dots, Y_n, \dots$ be iid random variables with finite mean $\mathbb{E}(Y_1) = \mu$, then
$$\frac{1}{n} \sum_{i=1}^n Y_i \xrightarrow{a.s.} \mu .$$

The SLLN is harder to prove than the WLLN.

### Visual Description
Text-only slide.

---
## Page 18
### Content
**Convergence in quadratic mean (convergence in $\ell_2$).** A sequence $X_n$ converges to $X$ in quadratic mean if:
$$\lim_{n \to \infty} \mathbb{E}(X_n - X)^2 = 0,$$
denoted as
$X_n \xrightarrow{\ell_2} X$ or $X_n \xrightarrow{qm} X$.

**Convergence in $\ell_1$.** A sequence $X_n$ converges to $X$ in $\ell_1$ if:
$$\lim_{n \to \infty} \mathbb{E}|X_n - X| = 0,$$
denoted as
$X_n \xrightarrow{\ell_1} X$.

$\ell_1$ and $\ell_2$ convergence modes are convergences of values of a sequence of random variables, as opposed to convergence in probability and a.s. convergence.

### Visual Description
Text-only slide.

---
## Page 19
### Content
In statistics we are typically concerned with convergence in q.m. to a constant $c$:
$\mathbb{E}(Y_n - c)^2 \to 0$ where $c = \mu = \mathbb{E}(Y_n)$ as $n \to \infty$.

E.g.
Let $Y_1, \dots, Y_n$ be iid RVs with $\mathbb{E}(Y_1) = \mu$ and $\text{Var}(Y_1) = \sigma^2$
Let $X_n = \frac{1}{n} \sum_{i=1}^n Y_i$.
Then $\mathbb{E}(X_n - \mu)^2 = \text{Var}(X_n) = \sigma^2/n \to 0$
That is, $X_n$ converges to its mean in quadratic mean.

Convergence in q.m. is interesting because it is often easy to prove, and it implies convergence in probability.

### Visual Description
Text-only slide.

---
## Page 20
### Content
**Exercise:** Prove that convergence in quadratic mean $\implies$ convergence in probability. (The reverse is not, in general, true.)

We know $\mathbb{E}(X_n - X)^2 \to 0$

We want $\mathbb{P}(|X_n - X| \ge \epsilon) \to 0$.

### Visual Description
Text-only slide.

---
## Page 21
### Content
We know $\mathbb{E}(X_n - X)^2 \to 0$. We want $\mathbb{P}(|X_n - X| \ge \epsilon) \to 0$.

**Chebyshev**
$$\forall t > 0, \quad \mathbb{P}(|X - \mu_X| \ge t\sigma_X) \le \frac{1}{t^2}.$$

**Mill** Let $X \sim N(\mu_X, \sigma_X^2)$.
$$\forall t > 0, \quad \mathbb{P}(|X - \mu_X| \ge t\sigma_X) \le \sqrt{2/\pi} \frac{\exp(-t^2/2)}{t}.$$

**Hoeffding**
$$\forall t > 0, \quad \mathbb{P}\left(|X - 0| \ge t \sqrt{\frac{\sum_{i=1}^n (b_i - a_i)^2}{4n^2}}\right) \le 2 \exp(-t^2/2).$$

**Markov** Let $X \ge 0$.
$$\forall t > 0, \quad \mathbb{P}(X \ge t) \le \frac{\mu}{t}, \quad \text{or equivalently,} \quad \mathbb{P}(X \ge t\mu) \le \frac{1}{t}.$$

### Visual Description
Text-only slide.

---
## Page 22
### Content
**Exercise:** Prove that convergence in quadratic mean $\implies$ convergence in probability. (The reverse is not, in general, true.)

We know $\mathbb{E}(X_n - X)^2 \to 0$

We want $\mathbb{P}(|X_n - X| \ge \epsilon) \to 0$.

$$\mathbb{P}(|X_n - X| \ge \epsilon) = \mathbb{P}((X_n - X)^2 \ge \epsilon^2) \le \frac{\mathbb{E}(X_n - X)^2}{\epsilon^2} \to 0 \text{ as } n \to \infty.$$

### Visual Description
Text-only slide.

---
## Page 23
### Content
Figure 1: Forms of convergence that imply other forms of convergence (source: wikipedia).

### Visual Description
A diagram illustrating the relationships between different types of convergence for random variables:
- $L^s$ convergence implies $L^r$ convergence for $s > r \ge 1$.
- $L^r$ convergence implies convergence in probability ($p$).
- Almost sure convergence (a.s.) implies convergence in probability ($p$).
- Convergence in probability ($p$) implies convergence in distribution ($d$).
The implications are shown with arrows and double-line implication symbols.

---
## Page 24
### Content
### 4 The Delta Method

If
$$\frac{\sqrt{n}(Y_n - \mu)}{\sigma} \rightsquigarrow N(0, 1)$$
and $g$ is a differentiable function such that $g'(\mu) \neq 0$. Then
$$\frac{\sqrt{n}(g(Y_n) - g(\mu))}{g'(\mu)\sigma} \rightsquigarrow N(0, 1).$$

### Visual Description
Text-only slide.
## Page 25
### Content
**Ex:** Let $X_1, \dots, X_n$ be iid with finite mean $\mu$ and variance $\sigma^2$. By the CLT we have $\sqrt{n}(\bar{X}_n - \mu) \rightsquigarrow N(0, \sigma^2)$.

Let $W_n = e^{\bar{X}_n}$, then the Delta Method implies that $\sqrt{n}(W_n - e^\mu) \rightsquigarrow N(0, \sigma^2 e^{2\mu})$.

25
### Visual Description
Text-only slide.

---
## Page 26
### Content
Proof:

26
### Visual Description
Mostly blank slide with the word "Proof:" at the top left and the page number 25 at the bottom center. The background is a light gray grid.

---
## Page 27
### Content
.

27
### Visual Description
Mostly blank slide with a single dot at the top left and the page number 27 at the bottom center. The background is a light gray grid.

---
## Page 28
### Content
Multivariate case: let $Y_n = (Y_{n1}, \dots, Y_{nk})^T$ be a sequence of random vectors and $g : \mathbb{R}^k \mapsto \mathbb{R}$ be a differentiable function with derivative
$$\nabla g(y) = \begin{pmatrix} \frac{\partial g}{\partial y_1} \\ \frac{\partial g}{\partial y_2} \\ \vdots \\ \frac{\partial g}{\partial y_k} \end{pmatrix}.$$

If
$$\sqrt{n}(Y_n - \mu) \rightsquigarrow N(0, \Sigma)$$

then
$$\sqrt{n}(g(Y_n) - g(\mu)) \rightsquigarrow N(0, [\nabla g(\mu)]^T \Sigma [\nabla g(\mu)]),$$

28
### Visual Description
Text-only slide.

---
## Page 29
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
Text-only slide.
