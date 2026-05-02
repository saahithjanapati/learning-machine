# lecture-19

Source: `materials/archive/survey-of-algebra/local-pdfs/lecture-19.pdf`
Duplicate equivalents: `lecture-19.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 3

## Page 1
### Content
# Lecture 19: Brownian motion
April 4, 2024

A Brownian motion is a time-continuous stochastic process $(X_t)_{t \ge 0}$ that models random continuous motions. The standard Brownian motion has the following properties:
(i) $X_0 = 0$;
(ii) for any $s_1 \le t_1 \le s_2 \le t_2 \le \dots \le s_n \le t_n$ the random variables
$$X_{t_1} - X_{s_1}, \dots, X_{t_n} - X_{s_n}$$
are independent;
(iii) For any $s < t$ the random variable $X_t - X_s$ has a Gaussian distribution with mean 0 and variance $t - s$.
(iv) With probability 1, the function $t \mapsto X_t$ is continuous in $t$.

If $(X_t)_{t \ge 0}$ is a standard Brownian motion then $(\sigma X_t)_{t \ge 0}$ is a Brownian motion with variance parameter $\sigma^2$. Everything is the same, except that
$$X_t - X_s \sim N(0, \sigma^2(t - s))$$
If we add $x$ to all of $(X_t)_{t \ge 0}$ then we obtain the standard Brownian motion that starts at $X_0 = x$.
Consequently, if $(X_t)_{t \ge 0}$ is a standard BM then
$$Y_t = a + bX_t$$
defines a BM that starts at $a$ with variance parameter $b^2$.

**Brownian motion as a limit of random walks.**
Let $S_n$ be an unbiased random walk on $\mathbb{Z}$:
$$S_n = Y_1 + \dots + Y_n$$
where $Y_i$ are independent identically distributed, with $P(Y_i = 1) = P(Y_i = -1) = \frac{1}{2}$. By the central limit theorem, $\frac{1}{\sqrt{n}} S_n$ will converge to the normal distribution with mean 0 and variance 1.
$$Var[S_n] = n.$$
The approximation is roughly: choose $N$ very large and consider

### Visual Description
Text-heavy slide with a central box containing the four defining properties of standard Brownian motion. The rest of the text discusses variations of Brownian motion (scaling and shifting) and introduces Brownian motion as a limit of random walks.

---
## Page 2
### Content
$$(\frac{1}{\sqrt{N}} S_{[Nt]})_{t \ge 0}$$
where $[x]$ is the largest integer that does not exceed $x$.
Then it can be shown that when $N \to \infty$ this rescaled RW approximates a Brownian motion.
For example:
$$\frac{1}{\sqrt{N}} S_{[Nt]} \approx N(0, t)$$
and for $t > s$
$$\frac{1}{\sqrt{N}} S_{[Nt]} - \frac{1}{\sqrt{N}} S_{[Ns]} = \frac{1}{\sqrt{N}} \sum_{[Ns] < j \le [Nt]} Y_j \approx N(0, t - s)$$

**Sample path of Brownian motion:**
We know that the sample paths are continuous (with probability 1). It turns out that the sample path is nowhere differentiable (with probability 1).

**Brownian motion as a martingale.**
Let $F_t$ be information up to time $t$.
Then $(F_t)$ is a filtration: if $s < t$ then $F_s \subset F_t$.
$(X_t)$ is a martingale with respect to this filtration:
(i) $E|X_t| < \infty$ since $X_t$ has the normal distribution with mean 0 and variance $t$;
(ii) $X_t$ is measurable with respect to $F_t$;
(iii) if $s < t$ then $E[X_t | F_s] = X_s$. This is because $X_t - X_s$ has mean zero and independent of $F_s$.
$$E[X_t | F_s] = E[X_s | F_s] + E[X_t - X_s | F_s] = X_s + E[X_t - X_s] = X_s.$$
Note that this martingale is not uniformly integrable, in fact $E|X_t|$ grows like $\sqrt{t}$ so is unbounded.

**Markov properties of the Brownian motion.**
Let $(X_t)$ be a stochastic process and let $F_t$ denote the information up to time $t$.
The Markov property means: for any interval $I$ we have
$$P(X_t \in I | F_s) = P(X_t \in I | X_s)$$
It is the same as requiring that for any bounded (continuous) function $f$ we will have
$$E[f(X_{t+s}) | F_s] = E[f(X_{t+s}) | X_s]$$
The Brownian motion has this Markov property.

### Visual Description
Text-heavy slide with two main boxes. The first box details Brownian motion as a martingale, listing three properties and a proof for the third. The second box defines the Markov property for a stochastic process.

---
## Page 3
### Content
This allows us to discuss the transition probability density function $p_t(x, y)$
$$P(X_t \in A | X_0 = x) = \int_A p_t(x, y) dy$$
and we have the Chapman Kolmogorov equation
$$p_{s+t}(x, y) = \int_{-\infty}^{\infty} p_s(x, z) p_t(z, y) dz.$$
Note: for the Brownian motion, since $X_t - X_0$ is normal with mean 0 and variance $t$, we can actually compute more explicitly
$$p_t(x, y) = \frac{1}{\sqrt{2\pi t}} \exp(-\frac{(x - y)^2}{2t}).$$

**Strong Markov property of BM:** If $T$ is a stopping time then for any $t > 0$ we have
$$E[f(X_{T+t}) | F_T] = E[f(X_{T+t}) | X_T]$$
Here $F_T = \{A : A \cap \{T \le t\} \in F_t \text{ for all } t \ge 0\}$. Information upto time $T$.

**If $T$ is the constant stopping time then we recover the standard MP. But this strong MP is a lot more.**
**Strong Markov property of Brownian motion.**
The strong MP for BM is a consequence of the following property: for any stopping time $T$, and any $t > 0$, the increment $X_{T+t} - X_T$ is independent of $F_T$.
Thus when conditioning on $F_T$ the only piece of information that is relevant is $X_T$.

**Strong form of the reflection principle:** If $T$ is a stopping time then
$$X^T(t) := \begin{cases} X_t, & t \le T; \\ 2X_T - X_t, & t > T, \end{cases}$$
is also a Brownian motion.

### Visual Description
Text-heavy slide with two main boxes. The first box defines the Strong Markov property of Brownian motion, including the definition of the filtration $F_T$. The second box defines the strong form of the reflection principle using a piecewise function. Formulas for transition density and the Chapman-Kolmogorov equation are presented at the top.

---
