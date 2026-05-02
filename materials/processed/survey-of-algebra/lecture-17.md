# lecture-17

Source: `materials/archive/survey-of-algebra/local-pdfs/lecture-17.pdf`
Duplicate equivalents: `lecture-17.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 4

## Page 1
### Content
# Lecture 17: Martingales and the optional stopping theorem (continued)

March 28, 2024

A martingale is a sequence $X_0, X_1, X_2, \dots$ of random variables (i.e., a stochastic process) for which,
$$\mathbb{E}|X_n| < \infty,$$
$$\mathbb{E}[X_{n+1} | X_0, \dots, X_n] = X_n$$

Property: if $(X_n)$ is a martingale then
$$\mathbb{E}[X_n] = \mathbb{E}[X_{n-1}] = \dots = \mathbb{E}[X_0].$$

**Stopping time**
$T$ is a stopping time if for any $n$ we can decide whether $T = n$ or not based on information up to now (i.e. values of $X_0, \dots, X_n$).

**Optional Stopping Theorems:** A set of conditions that ensure $\mathbb{E}[X_T] = \mathbb{E}[X_0]$. Where $T$ is a stopping time for martingale $(X_n)_{n \ge 0}$. There are different versions. Note that without extra conditions then it is possible that $\mathbb{E}[X_T] \neq \mathbb{E}[X_0]$.

**Simple condition:** If there is a constant $C$ independent of $n$ such that $P(T < C) = 1$ then
$$\mathbb{E}[X_T] = \mathbb{E}X_0.$$

### Visual Description
Text-only slide. The definition of a martingale and a simple condition for the optional stopping theorem are enclosed in double-lined boxes.

---
## Page 2
### Content
**More advanced conditions:** Assume
$$P(T < \infty) = 1$$
$$\mathbb{E}|X_T| < \infty,$$
$$\lim_{n \to \infty} \mathbb{E}[|X_n| 1_{T > n}] = 0$$
Then
$$\mathbb{E}[X_T] = \mathbb{E}[X_0].$$

Today we will discuss another condition that is also useful.
**Uniform integrability:** for any $\epsilon > 0$ there is some $K$ finite such that
$$\mathbb{E}[|X_n| 1_{|X_n| > K}] < \epsilon$$

**Example:** random harmonic series. Let $\epsilon_n = 1$ with probability $1/2$ and $\epsilon_n = -1$ with probability $1/2$ and assume that they are independent. Then consider the martingale $(X_n)_{n \ge 1}$ where
$$X_n = \epsilon_1 + \frac{\epsilon_2}{2} + \dots + \frac{\epsilon_n}{n}$$
Check that this is a martingale.
Then $\mathbb{E}X_n = 0$, thus
$$\mathbb{E}|X_n|^2 = Var[X_n] = 1 + \frac{1}{2^2} + \dots + \frac{1}{n^2} < C < \infty$$
for some constant $C$ (could take $C = 10$ for example). Therefore
$$\mathbb{E}[|X_n| 1_{|X_n| > K}] \le \frac{1}{K} \mathbb{E}|X_n|^2 < \frac{C}{K}$$
and so we simply choose
$$K = \frac{C}{\epsilon}$$
The example shows that if the martingale has uniformly bounded second moment then it is uniformly integrable.

If $(X_n)_{n \ge 0}$ is **uniformly integrable** and $T$ is a stopping time such that $P(T < \infty) = 1$ and $\mathbb{E}|X_T| < \infty$, then we also have
$$\mathbb{E}X_T = \mathbb{E}X_0$$

**Example:** The branching process $(Y_n)$ with offspring distribution
$$p(\text{an individual have } k \text{ offspring}) = p_k$$

### Visual Description
The slide contains several boxed definitions and theorems. There is a handwritten note in a bubble with an arrow pointing to the definition of uniform integrability that says "Kind of like basic-real definition".

---
## Page 3
### Content
$$\sum_{j=0}^\infty p_j = 1$$
Letting $\mu = \sum_j j p_j$ be the average number of offspring per individual, we may construct a martingale
$$X_n = \mu^{-n} Y_n$$
**Check: martingale conditions.**
It turns out that if $\mu > 1$ then this also satisfies an uniform bound
$$\mathbb{E}|X_n|^2 < C$$
and therefore is uniformly integrable.

Indeed, let $\sigma^2 = Var[offspring] = \sum_j (j - \mu)^2 p_j$.
Given $Y_n = k \ge 1$ then $Y_{n+1}$ is the sum of $k$ independent and identically distributed random variables, each has the offspring distribution. Using this we may compute and get
$$\mathbb{E}[Y_{n+1}^2 | Y_n = k, \dots] = k \sigma^2 + (\mu k)^2 = Y_n \sigma^2 + \mu^2 Y_n^2$$
Thus by the law of iterated expectation we obtain
$$\mathbb{E}[Y_{n+1}^2] = \mathbb{E}[\mathbb{E}[Y_{n+1}^2 | Y_n, \dots, Y_0]] = \mathbb{E}[Y_n] \sigma^2 + \mu^2 \mathbb{E}[Y_n^2]$$
$$= \mu^n \sigma^2 + \mu^2 \mathbb{E}[Y_n^2]$$
By iterating this recursive formula we may compute $\mathbb{E}[Y_n^2]$ and hence $\mathbb{E}[X_n^2]$.
$$\mathbb{E}(X_n^2) = \mathbb{E}(X_0^2) + \sigma^2 \left( \frac{1}{\mu^2} + \dots + \frac{1}{\mu^{n+1}} \right).$$
Thus if $\mu > 1$ then there is a constant $C > 0$ such that $\mathbb{E}X_n^2 < C$.

**Martingale convergence theorem (MCT):**
Suppose $X_0, X_1, \dots$ is a martingale satisfying the following moment condition:
**for some $C > 0$ independent of $n$ we have $\mathbb{E}|X_n| < C$.**
Then there is some random variable $X_\infty$ such that $\mathbb{E}|X_\infty| < \infty$ and
$$\lim_{n \to \infty} X_n = X_\infty$$
with probability 1.

Note: If $X_n$ is uniformly integrable then there is $K$ independent of $n$ such that
$$\mathbb{E}[|X_n| 1_{|X_n| > K}] < 1$$
so in particular

### Visual Description
Text-only slide. The Martingale convergence theorem is presented in a double-lined box. Mathematical derivations for the branching process martingale are shown in the middle of the page.

---
## Page 4
### Content
$$\mathbb{E}|X_n| = \mathbb{E}[|X_n| 1_{|X_n| \le K}] + \mathbb{E}[|X_n| 1_{|X_n| > K}] \le K + 1,$$
therefore the moment condition for the MCT is hold with $C = K + 1$, and therefore $X_n \to X_\infty$.
In fact,
If $(X_n)$ is a martingale with uniform integrability then there is a random variable $X_\infty$ with $\mathbb{E}|X_\infty| < \infty$ and also
$$\mathbb{E}X_\infty = \mathbb{E}[X_0]$$

**Example:** $Y_n = 3/2$ or $1/2$ with equal probability and let $X_n = Y_1 \dots Y_n$ then this is a martingale with respect to $Y_1, \dots, Y_n, \dots$. And $\mathbb{E}|X_n| = \mathbb{E}|Y_1| \dots \mathbb{E}|Y_n| = 1$, so MCT holds and $X_n \to X_\infty$.
Turns out $X_\infty = 0$ (check by taking $M_n = \log |X_n|$ which converges to $-\infty$ using the SLLN, which says that almost surely
$$\frac{1}{n} \log |X_n| = \frac{1}{n} (\log |Y_1| + \dots + \log |Y_n|) \to \mathbb{E}[\log |Y_j|] = \log \frac{\sqrt{3}}{2} < 0$$
Thus $\log |X_n| \to -\infty$ and therefore $X_n \to 0$ almost surely.
Hence $\mathbb{E}X_\infty = 0$ but $1 = \lim \mathbb{E}X_n$. (No uniform integrability)

**Example:** Branching process, assume $Y_0 = 1$ and $X_n = \mu^{-n} Y_n$. A martingale. If $\mu > 1$ then uniformly integrable therefore there is a limit $X_n \to X_\infty$. Which means $Y_n \approx X_\infty \mu^n$ therefore population grows like geometric sequence.

### Visual Description
Text-only slide. A theorem regarding martingales with uniform integrability is presented in a shadowed box. The rest of the page contains examples and mathematical derivations.

---
==End of PDF==
