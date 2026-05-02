# lecture-21

Source: `materials/archive/survey-of-algebra/local-pdfs/lecture-21.pdf`
Duplicate equivalents: `lecture-21.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 4

## Page 1
### Content
# Lecture 21: Multi-dimensional Brownian motions and the heat/diffusion equation.

April 12, 2024

> A standard Brownian motion in $\mathbb{R}^d$ is a vector $(X_t^1, \dots, X_t^d)$ whose coordinates are independent standard Brownian motions.

This BM has the following property:
(i) $X_0 = 0 \in \mathbb{R}^d$ the starting point.
(ii) for any $s_1 \le t_1 \le s_2 \le t_2 \le \dots \le s_n \le t_n$ the random vectors
$$X_{t_1} - X_{s_1}, \dots, X_{t_n} - X_{s_n}$$
are independent;
(iii) For any $s < t$ the random vector $X_t - X_s$ has independent coordinates, each of them is a standard gaussian with mean 0 and variance $(t - s)$.
(iv) With probability 1, the vector valued function $t \mapsto X_t$ is continuous in $t$.

Let $P$ be a $d \times d$ matrix. Let $x_0 \in \mathbb{R}^d$. Then
$$Y_t = x_0 + PX_t$$
is a Brownian motion in $\mathbb{R}^d$ that starts at $x_0$ and with covariance matrix
$$\Sigma = PP^T$$
in other words
$$X_t - X_s \sim N(0, \Sigma(t - s))$$

**Check:** for a vector $V$ of $d$ random variables with mean zero, we have
$$Cov(V) = \mathbb{E}[VV^T]$$
(which is a $d \times d$ matrix), therefore
$$Cov(X_t - X_s) = \mathbb{E}[P(X_t - X_s)(P(X_t - X_s))^T]$$
$$= \mathbb{E}[P(X_t - X_s)(X_t - X_s)^T P^T]$$
$$= (t - s)PP^T.$$

### Visual Description
The slide contains a title, date, and mathematical definitions and properties of multi-dimensional Brownian motion. Key definitions and a "Check" proof are enclosed in rectangular boxes. The text is primarily black on a white background.

---
## Page 2
### Content
**BM is related to the theory of diffusion.**
Suppose that the position of the particle at time $t$ is $X_t$ and $(X_t)$ is a Brownian motion in $\mathbb{R}^d$. We are interested in the probability that at time $t$ the particle is in a set $U \subset \mathbb{R}^d$. Let $f(t, y)$ denote the density of the distribution of the particle at time $t$. So
$$P(\text{at the given time } t \text{ the particle is in } U) = \int_U f(t, y) dy.$$

One is interested in computing $f(t, y)$. It can be shown that if the density of the initial distribution is $f(t = 0, x) = f(x)$ then
$$f(t, x) = \mathbb{E}[f(X_t) | X_0 = x] \equiv \mathbb{E}^x[f(X_t)]$$
where $\mathbb{E}^x$ denotes the conditional expectation, conditioning on $X_0 = x$.
Then one can show that (see below for the 1D derivation)
$$\partial_t f(t, x) = \frac{1}{2} \Delta f(t, x)$$
where $\Delta f(t, x) = \sum_j (\partial_{x_j})^2 f(t, x)$ the sum over all second derivatives with respect to the coordinates of $x = (x_1, \dots, x_d) \in \mathbb{R}^d$.

This means $f(t, x)$ satisfies the heat equation (also known as the diffusion equation)
$$\begin{cases} \partial_t f = \frac{1}{2} \Delta f \\ f(t = 0, x) = f(x) \end{cases}$$

### Visual Description
Text-only slide. It explains the relationship between Brownian motion and the heat/diffusion equation, including the definition of the density function and the Laplacian operator. A system of equations representing the heat equation is shown at the bottom.

---
## Page 3
### Content
> **Example:** Suppose that initial position of a particle on the real line is uniform on the square $S := (-1, 1) \times (-1, 1)$.
> Find the probability that the particle is inside $S$ at time $t = 10$.
> The density function
> $$f_t = \frac{1}{2} f_{xx},$$
> $$f(0, x) = \begin{cases} \frac{1}{4}, & x \in S; \\ 0, & x \notin S. \end{cases}$$
> Then
> $$f(t, x) = \mathbb{E}[f(X_t) | X_0 = x]$$
> $$= \int_{\mathbb{R}^2} f(0, y) \frac{1}{2\pi} e^{-\|y-x\|^2/(2t)} dy$$
> $$= \int_{-1}^1 \int_{-1}^1 \frac{1}{8\pi} e^{-((y_1-x_1)^2 + (y_2-x_2)^2)/(2t)} dy_1 dy_2.$$
> Then
> $$Prob(X_t \in S) = \int_S \int_{-1}^1 \int_{-1}^1 \frac{1}{8\pi} e^{-((y_1-x_1)^2 + (y_2-x_2)^2)/(2t)} dy_1 dy_2 dx_1 dx_2$$
> Apply this to $t = 10$.

**Derivation of the expectation equation:** We know that
$$f(t, x) = \int_{\mathbb{R}^d} f(y) p_t(y, x) dy$$
The BM is known to be symmetric we also have $p_t(y, x) = p_t(x, y)$ (the probability that $X_t = y$ given $X_0 = x$).
Thus
$$f(t, x) = \int_{\mathbb{R}^d} f(y) p_t(x, y) dy = \mathbb{E}[f(X_t) | X_0 = x].$$

**Derivation of the differential equation:**
We will discuss the 1D theory, the general case is entirely similar. We have
$$f_t(t, x) = \lim_{h \to 0} \frac{f(t + h, x) - f(t, x)}{h} = \lim_{h \to 0} \frac{\mathbb{E}^x[f(X_{t+h}) - f(X_t)]}{h}$$
We may condition on $X_t = y$ and write
$$f(z) = f(y) + (z - y)f'(y) + (z - y)^2 \frac{1}{2} f''(y) + o((z - x)^2)$$
Thus conditioning on $X_t$ we have

### Visual Description
The slide contains a boxed example problem involving a uniform distribution on a square and its evolution under the heat equation. Below the box, there are two sections: "Derivation of the expectation equation" and "Derivation of the differential equation," showing mathematical steps and Taylor expansions.

---
## Page 4
### Content
$$f(X_{t+h}) - f(X_t) = (X_{t+h} - X_t)f'(X_t) + (X_{t+h} - X_t)^2 \frac{1}{2} f''(X_t) + o((X_{t+h} - X_t)^2)$$
Taking expected value
$$\mathbb{E}[f(X_{t+h}) - f(X_t) | X_t = y, X_0 = x] =$$
$$= \frac{1}{2} f''(X_t) \mathbb{E}[(X_{t+h} - X_t)^2 | X_t = y, X_0 = x]$$
$$+ o(\mathbb{E}[(X_{t+h} - X_t)^2 | X_t = y, X_0 = x])$$
Using Markov Property and the fact that $X_{t+h} - X_t \sim N(0, h)$ we have
$$= \frac{1}{2} f''(X_t)h + o(h)$$
Consequently
$$f_t(t, x) = \lim_{h \to 0} \frac{\mathbb{E}^x[f(X_{t+h}) - f(X_t)]}{h} = \mathbb{E}^x[\frac{1}{2} f''(X_t)] = f''(t, x)$$
the last equation is obtained by applying the expectation equation for $f''$.
**Brownian motion on other surfaces are defined using the diffusion equation.**

## Scaling property of BM
Brownian Motions in 1D has several well-known scaling symmetries.
(i) If $(X_t)$ is a standard BM then, for any $a > 0$ fixed,
$$(\frac{1}{\sqrt{a}} X_{at})_{t \ge 0}$$
is also a standard BM.
(ii) If $(X_t)$ is a standard BM then
$$Y_t := \begin{cases} 0, & t = 0; \\ t X_{1/t}, & t > 0; \end{cases}$$
is also a standard BM.
For (ii), we will need the fact that: almost surely,
$$\lim_{t \to 0^+} t X_{1/t} = 0$$
or equivalently
$$\lim_{t \to \infty} \frac{X_t}{t} = 0.$$
We can prove this using Borel Cantelli's lemmas.

### Visual Description
Text-only slide. It completes the derivation of the differential equation from the previous page and introduces the scaling properties of Brownian motion, including two specific symmetries and a limit property related to the law of large numbers for BM.
