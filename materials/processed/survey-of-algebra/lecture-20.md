# lecture-20

Source: `materials/archive/survey-of-algebra/local-pdfs/lecture-20.pdf`
Duplicate equivalents: `lecture-20.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 3

## Page 1
### Content
# Lecture 20: Brownian motion (continued)

April 9, 2024

> A Brownian motion is a time-continuous stochastic process $(X_t)_{t \ge 0}$ that models random continuous motions. The standard Brownian motion has the following properties:
> (i) $X_0 = 0$;
> (ii) for any $s_1 \le t_1 \le s_2 \le t_2 \le \dots \le s_n \le t_n$ the random variables
> $$X_{t_1} - X_{s_1}, \dots, X_{t_n} - X_{s_n}$$
> are independent;
> (iii) For any $s < t$ the random variable $X_t - X_s$ has a normal distribution with mean 0 and variance $t - s$.
> (iv) With probability 1, the function $t \mapsto X_t$ is continuous in $t$.

If $(X_t)_{t \ge 0}$ is a standard Brownian motion then $(\sigma X_t)_{t \ge 0}$ is a Brownian motion with variance parameter $\sigma^2$.
If we add $x$ to all of $(X_t)_{t \ge 0}$ then we obtain the standard Brownian motion that starts at $X_0 = x$.

> **Strong form of the reflection principle:** If $T$ is a stopping time then
> $$X^T(t) := \begin{cases} X_t, & t \le T; \\ 2X_T - X_t, & t > T, \end{cases}$$
> is also a Brownian motion.

> **Reflection Principle (simple form).**
> If $(X_t)$ is a Brownian motion starting at $b > 0$ (with any variance parameter) then for any $t_0 > 0$ the following holds
> $$P(X_{t_0} \le 0) = \frac{1}{2} P(\text{there is an } 0 < s < t_0 \text{ such that } X_s = 0)$$

Indeed, let $T$ be the first time $s$ that $X_s \le 0$.
$$T = \inf\{s \ge 0 : X_s \le 0\}$$
then $T$ is a stopping time. And
$$P(\text{there is an } 0 < s < t_0 \text{ such that } X_s = 0) = P(T \le t_0)$$

### Visual Description
The slide contains several boxed definitions and theorems. The first box defines standard Brownian motion with four properties. Below it, there are two more boxes: one for the "Strong form of the reflection principle" and another for the "Reflection Principle (simple form)". The formula in the simple form box is highlighted with a yellow brush stroke. The bottom of the page starts a proof/explanation for the simple form.

---
## Page 2
### Content
Note that if $X_{t_0} \le 0$ then by definition we also have $T \le t_0$. Therefore, using the reflection principle
$$P(X_{t_0} \le 0) = P(X_{t_0} \le 0 | T \le t_0) P(T \le t_0) = \frac{1}{2} P(T \le t_0).$$

**Example:** Find the probability that a standard brownian motion crosses the $x$-axis sometimes between $t = 1$ and $t = 100$.
We condition on $X_1 = b$ where $b$ is a real number. If $b < 0$ then by the reflection principle,
$$P(X_s = 0 \text{ for some } 1 \le s \le t | X_1 = b) = 2P(X_t \ge 0 | X_1 = b) = 2 \int_{-\infty}^{-b} \frac{1}{\sqrt{2\pi(t - 1)}} \exp(-\frac{u^2}{2(t - 1)}) du$$
If $b > 0$ we argue similarly and obtain the same formula. Since $X_1$ has the std normal distribution, we obtain
$$P(X_s = 0 \text{ for some } 1 \le s \le t) = 2 \int_{-\infty}^{\infty} \left( \int_{-\infty}^{-b} \frac{1}{\sqrt{2\pi(t - 1)}} \exp(-\frac{u^2}{2(t - 1)}) du \right) \frac{1}{\sqrt{2\pi}} e^{-b^2/2} db$$
which can be simplified to
$$2 \int_{-\infty}^{\infty} \int_{-\infty}^{-|b|/\sqrt{t-1}} \frac{1}{2\pi} e^{-s^2/2} e^{-b^2/2} ds db$$
and using property of bivariate normal distribution we can compute this to be
$$1 - \frac{2}{\pi} \arctan \frac{1}{\sqrt{t - 1}}.$$

**Example:** Let $(X_t)$ be a standard BM.
(1) Find the probability that $X_3 > X_1 > X_5$.
Let $A$ be the event that $X_3 > X_1 > X_5$.
Let $I_1 = X_3 - X_1$ and $I_2 = X_5 - X_3$. Then $I_1$ and $I_2$ are independent Gaussian with distribution $N(0, 2)$, and $A = \{I_1 > 0, I_1 + I_2 < 0\} = \left\{ \frac{I_1}{\sqrt{2}} > 0, \frac{I_1}{\sqrt{2}} + \frac{I_2}{\sqrt{2}} < 0 \right\}$.
Thus
$$P(A) = \iint_{x>0, x+y<0} \frac{1}{2\pi} e^{-(x^2+y^2)/2} dxdy$$
using rotational invariance of standard bivariate normal distribution this is equal to
$$= \frac{1}{8}$$

### Visual Description
Text-only slide. There are some stray black marks (curved lines) on the top and left side of the page, likely from a digital pen. The content consists of mathematical derivations and two examples related to Brownian motion.

---
## Page 3
### Content
> Recall: If $X_1$ and $X_2$ are independent standard Gaussian then $X = (X_1, X_2)$ has the standard bivariate normal distribution, and if we plot $X$ in the plane and convert to polar coordinate then
> $$\theta$$
> the polar angle has uniform distribution in $[0, 2\pi]$. This was used in the previous computation.

> A standard Brownian motion in $\mathbb{R}^d$ is a vector $(X_t^1, \dots, X_t^d)$ whose coordinates are independent standard Brownian motions.

This BM has the following property:
(i) $X_0 = 0 \in \mathbb{R}^d$ the starting point.
(ii) for any $s_1 \le t_1 \le s_2 \le t_2 \le \dots \le s_n \le t_n$ the random vectors
$$X_{t_1} - X_{s_1}, \dots, X_{t_n} - X_{s_n}$$
are independent;
(iii) For any $s < t$ the random vector $X_t - X_s$ has independent coordinates, each of them is a standard gaussian with mean 0 and variance $(t - s)$.
(iv) With probability 1, the vector valued function $t \mapsto X_t$ is continuous in $t$.
Let $P$ be a $d \times d$ matrix. Let $x_0 \in \mathbb{R}^d$. Then
$$Y_t = x_0 + P X_t$$
is a Brownian motion in $\mathbb{R}^d$ that starts at $x_0$ and with covariance matrix
$$\Sigma = P^T P$$
in other words
$$X_t - X_s \sim N(0, \Sigma(t - s))$$

### Visual Description
The slide contains two boxed sections. The first box provides a recall about bivariate normal distributions and polar coordinates. The second box defines standard Brownian motion in $\mathbb{R}^d$. Below the boxes, the properties of this multidimensional Brownian motion are listed, followed by a definition of a transformed process $Y_t$ and its distribution.

---
==End of PDF==
