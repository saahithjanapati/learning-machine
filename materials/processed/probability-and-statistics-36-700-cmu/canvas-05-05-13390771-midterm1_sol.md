# canvas-05-05-13390771-midterm1_sol

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-05-05-13390771-midterm1_sol.pdf`
Duplicate equivalents: `canvas-05-05-13390771-midterm1_sol.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 5

## Page 1
### Content
# 36-700 Midterm 1 Solutions

1. Let $X$ and $Y$ be independent continuous random variables, $X$ with density $f_X(x) = e^{-x}, x > 0$, and $Y$ uniformly distributed on $(0, 1)$. Let $V = X/(X + Y)$
(a) Find $\mathbb{P}(V > v \mid Y = y)$ for $v \in (0, 1)$.
(b) Compute $\mathbb{P}(V > v)$.
(c) What is the pdf of $V$?

**Solution:**
(a)
$$V > v \iff \frac{X}{X + y} > v \iff X > \frac{vy}{1 - v}$$
So
$$\mathbb{P}(V > v \mid Y = y) = \mathbb{P}\left(X > \frac{vY}{1 - v} \mid Y = y\right)$$
$$= \int_{\frac{vy}{1-v}}^{\infty} e^{-x} dx$$
$$= e^{-\frac{vy}{1-v}}$$

(b) Noting that $\mathbb{P}(V > v) = \mathbb{E}[\mathbb{I}_{\{V > v\}}(V)]$, we can apply iterated expectation,
$$\mathbb{P}(V > v) = \mathbb{E}[\mathbb{E}[\mathbb{I}_{\{V > v\}}(V) \mid Y]]$$
$$= \mathbb{E}[\mathbb{P}(V > v \mid Y)]$$
$$= \mathbb{E}[e^{-\frac{vY}{1-v}}]$$
$$= \int_0^1 e^{-\frac{vy}{1-v}} dy$$
$$= \frac{1 - v}{v} - \frac{1 - v}{v} e^{-\frac{v}{1-v}}$$
$$= \frac{1 - v}{v} \left(1 - e^{-\frac{v}{1-v}}\right)$$

(c) By definition of the CDF, we have that
$$F_V(v) = \mathbb{P}(V \le v) = 1 - \mathbb{P}(V > v) = 1 - \frac{1 - v}{v} \left(1 - e^{-\frac{v}{1-v}}\right)$$
So we have that the PDF is
$$f_V(v) = F'_V(v)$$
$$= \frac{1}{v^2} \left(1 - e^{-\frac{v}{1-v}}\right) - \frac{1 - v}{v} \left(\frac{1}{(1 - v)^2} e^{-\frac{v}{1-v}}\right)$$
$$= \frac{1}{v^2} \left(1 - e^{-\frac{v}{1-v}}\right) - \frac{1}{v(1 - v)} e^{-\frac{v}{1-v}}, \quad 0 < v < 1$$

1

### Visual Description
Text-only slide.

---
## Page 2
### Content
2. Let $X$ be a non-degenerate random variable with $\mathbb{E}[X^2] < \infty$, and let $Y = SX$, where $S$ is an independent random variable such that $\mathbb{P}(S = 1) = \mathbb{P}(S = -1) = \frac{1}{2}$.
(a) Show that $\text{Cov}(X, Y) = 0$.
(b) Explain why $X$ and $Y$ are not independent.
Note that $\mathbb{E}(S) = 0$.

**Solution:**
$$\text{Cov}(X, Y) = \mathbb{E}(XY) - \mathbb{E}(X)\mathbb{E}(Y)$$
$$= \mathbb{E}(SX^2) - \mathbb{E}(X)\mathbb{E}(SX)$$
$$= \mathbb{E}(S)\mathbb{E}(X^2) - \mathbb{E}(X)\mathbb{E}(S)\mathbb{E}(X) \quad \text{by independence}$$
$$= 0$$

(b) $|X| = |Y|$, so knowing the value of one will always provide additional information about the value of the other unless $X$ is a degenerate random variable, which we assumed is not the case.

3. Let $T$ be an exponential random variable with parameter $\beta$ and let $U$ be uniform on $[0, T]$. Find $\mathbb{E}(U)$ and $\text{Var}(U)$.

**Solution:**
$$\mathbb{E}(U) = \mathbb{E}[\mathbb{E}[U \mid T]]$$
$$= \mathbb{E}\left[\frac{T}{2}\right]$$
$$= \frac{1}{2}\mathbb{E}[T]$$
$$= \frac{1}{2}\beta$$

Next,
$$\text{Var}(U) = \mathbb{E}[\text{Var}[U \mid T]] + \text{Var}[\mathbb{E}[U \mid T]]$$
$$= \mathbb{E}\left[\frac{T^2}{12}\right] + \text{Var}\left[\frac{T}{2}\right]$$
$$= \frac{1}{12}\mathbb{E}[T^2] + \frac{1}{4}\text{Var}[T]$$
$$= \frac{1}{12}(2\beta^2) + \frac{1}{4}(\beta^2)$$
$$= \frac{5}{12}\beta^2$$

2

### Visual Description
Text-only slide.

---
## Page 3
### Content
4. (a) Suppose that $X$ is a random variable. Let $g$ be a nonnegative even function ($g(x) = g(-x)$) that is increasing on $[0, \infty)$ and supposed that $\mathbb{E}[g(X)] < \infty$. Show that
$$\mathbb{P}[|X| > \epsilon] \le \frac{\mathbb{E}[g(X)]}{g(\epsilon)}$$
for any $\epsilon > 0$.
(b) Let $\{X_n\}$ be a sequence of random variables such that $\mathbb{E}[|X_n|^r] \to 0$ as $n \to \infty$. Show that $X_n \xrightarrow{p} 0$.

**Solution: (a)**
$$\mathbb{P}[|X| > \epsilon] = \mathbb{P}[g(|X|) > g(\epsilon)] \quad \text{Since } g \text{ is increasing on } [0, \infty)$$
$$= \mathbb{P}[g(X) > g(\epsilon)] \quad \text{Since } g \text{ is even}$$
$$\le \frac{\mathbb{E}[g(X)]}{g(\epsilon)} \quad \text{Markov's inequality}$$

(b) Let $g(x) = |x|^r$, and note that $g$ is even and increasing on $[0, \infty)$. So by the previous result have that for any $\epsilon > 0$
$$\lim_{n\to\infty} \mathbb{P}[|X_n| > \epsilon] \le \lim_{n\to\infty} \frac{\mathbb{E}[|X_n|^r]}{|\epsilon|^r} = 0$$
and $\mathbb{P}[|X_n| > \epsilon]$ is lower bounded by zero hence, $X_n \xrightarrow{p} 0$.

5. Let $X_n \sim \text{Bernoulli}(1/2 + 1/n)$ and let $X \sim \text{Bernoulli}(1/2)$. Does $X_n$ converge to $X$ in distribution? Does it converge to $X$ in probability?

**Solution:**
$$\lim_{n\to\infty} F_{X_n}(x) = \lim_{n\to\infty} \mathbb{P}(X_n \le x)$$
$$= \lim_{n\to\infty} \begin{cases} 0 & \text{for } x < 0 \\ 1 - \frac{1}{2} - \frac{1}{n} & \text{for } x \in (0, 1) \\ 1 & \text{for } x > 0 \end{cases}$$
$$= \begin{cases} 0 & \text{for } x < 0 \\ \frac{1}{2} & \text{for } x \in (0, 1) \\ 1 & \text{for } x > 0 \end{cases}$$
$$= F_X(x)$$
Therefore, $X_n \xrightarrow{d} X$.

3

### Visual Description
Text-only slide.

---
## Page 4
### Content
As for convergence in probability, note that for any $0 < \epsilon < 1$
$$\mathbb{P}(|X_n - X| > \epsilon) = \mathbb{P}(X_n \ne X)$$
$$= \mathbb{P}(X_n = 1, X = 0) + \mathbb{P}(X_n = 0, X = 1)$$
$$= \left(\frac{1}{2} + \frac{1}{n}\right)\left(\frac{1}{2}\right) + \left(1 - \frac{1}{2} - \frac{1}{n}\right)\left(\frac{1}{2}\right)$$
$$= \frac{1}{2}$$
So $\lim_{n\to\infty} \mathbb{P}(|X_n - X| > \epsilon) \ne 0$, therefore $X_n$ does not converge to $X$ in probability.

6. Let $X_1, \dots, X_n$ be a collection of continuous random variables with cdf $F(x)$ and pdf $f(x) = F'(x)$. Let $Y_n = \max\{X_1, \dots, X_n\}$. Find the limiting distribution of $Z_n = n[1 - F(Y_n)]$.

**Solution:** For $z > 0$,
$$F_{Z_n}(z) = \mathbb{P}(n[1 - F(Y_n)] \le z)$$
$$= \mathbb{P}\left(F(Y_n) \ge 1 - \frac{z}{n}\right)$$
$$= \mathbb{P}\left(Y_n \ge F^{-1}\left(1 - \frac{z}{n}\right)\right)$$
$$= \mathbb{P}\left(\max\{X_1, \dots, X_n\} \ge F^{-1}\left(1 - \frac{z}{n}\right)\right)$$
$$= 1 - \mathbb{P}\left(\max\{X_1, \dots, X_n\} < F^{-1}\left(1 - \frac{z}{n}\right)\right)$$
$$= 1 - \left[F\left(F^{-1}\left(1 - \frac{z}{n}\right)\right)\right]^n$$
$$= 1 - \left(1 - \frac{z}{n}\right)^n$$
Therefore,
$$\lim_{n\to\infty} F_{Z_n}(z) = \lim_{n\to\infty} 1 - \left(1 - \frac{z}{n}\right)^n = 1 - e^{-z}, \quad z > 0$$

7. Let $X_1, \dots, X_n \sim F$ be an IID sample where $F$ is a CDF on the real line; i.e., $F(x) = \mathbb{P}(X_1 \le x)$ where $x$ is a real number. Consider the so called empirical distribution function $\hat{F}_n$ defined by
$$\hat{F}_n(x) = \frac{\sum_{i=1}^n \mathbb{I}(X_i \le x)}{n}$$
where the indicator function
$$\mathbb{I}(X_i \le x) = \begin{cases} 1 & \text{if } X_i \le x \\ 0 & \text{otherwise.} \end{cases}$$

4

### Visual Description
Text-only slide.

---
## Page 5
### Content
(a) Find $\mathbb{E}(\hat{F}_n(x))$ and $\mathbb{V}(\hat{F}_n(x))$.
(b) Show that $\hat{F}_n(x)$ is a consistent estimator of $F(x)$.
(c) For any fixed value of $x$, find the limiting distribution of $\hat{F}_n(x)$. (Remember to rescale your answer so that that the limit does not depend on $n$.)
(d) Use your answer in part c, to construct an approximate 95% confidence interval for $F(x)$ at fixed $x$.

**Solution: (a)**
$$\mathbb{E}[\hat{F}_n(x)] = \frac{1}{n} \sum_{i=1}^n \mathbb{E}[\mathbb{I}(X_i \le x)] = \frac{1}{n} \sum_{i=1}^n F(x) = F(x).$$
Since the $\mathbb{I}(X_i \le x)$ are independent,
$$\text{Var}[\hat{F}_n(x)] = \frac{1}{n^2} \sum_{i=1}^n \text{Var}(\mathbb{I}(X_i \le x)) = \frac{1}{n^2} n F(x)(1 - F(x)) = \frac{F(x)(1 - F(x))}{n}.$$

(b) By the Weak Law of Large Numbers,
$$\hat{F}_n(x) = \frac{1}{n} \sum_{i=1}^n \mathbb{I}(X_i \le x) \xrightarrow{p} \mathbb{E}[\mathbb{I}(X_1 \le x)] = F(x).$$

(c) By the Central Limit Theorem applied to $\{\mathbb{I}(X_i \le x)\}$,
$$\sqrt{n}(\hat{F}_n(x) - F(x)) \xrightarrow{d} N(0, F(x)[1 - F(x)]).$$

(d) Using the asymptotic normality and plugging in $\hat{F}_n(x)$ for $F(x)$ in the variance an approximate 95% confidence interval for $F(x)$ is
$$\hat{F}_n(x) \pm 1.96 \sqrt{\frac{\hat{F}_n(x)(1 - \hat{F}_n(x))}{n}}.$$
Where 1.96 is the 97.5% probability cutoff value for the standard normal CDF.

5

### Visual Description
Text-only slide.
