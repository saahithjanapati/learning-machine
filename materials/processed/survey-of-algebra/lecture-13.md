# lecture-13

Source: `materials/archive/survey-of-algebra/local-pdfs/lecture-13.pdf`
Duplicate equivalents: `lecture-13.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `MAX_TOKENS`
Pages: 5

## Page 1
### Content
# Lecture 13: Continuous time MC (review and continued)

March 14, 2024

## 1 Review
$S$ could be finite or countably infinite.
for each $t \ge 0, X_t$ is a random variable that takes values in $S$.

**Transition probability matrix:**
$$\mathbf{P}_t = (p_t(x, y))_{x,y \in S}$$
$$p_t(x, y) = P(X_t = y | X_0 = x)$$

**Basic property 1: for $s, t \ge 0$**
$$\mathbf{P}_{t+s} = \mathbf{P}_t \mathbf{P}_s$$

**Basic property 2:** It turns out that the transition matrix $\mathbf{P}_t$ for a continuous time-homogeneous MC will satisfy an equation of the form
$$\frac{d}{dt} \mathbf{P}_t = \mathbf{P}_t \mathbf{A}$$
for some matrix $\mathbf{A}$ indexed by $(x, y) \in S \times S$.
The matrix $\mathbf{A}$ is independent of $t$ and is called the **infinitesimal generator** for the MC.

The transition matrix for continuous time-homogeneous MC has the form
$$\mathbf{P}_t = e^{t\mathbf{A}} = \mathbf{I} + \mathbf{A}t + \frac{\mathbf{A}^2 t^2}{2!} + \dots$$

The continuous MC is irreducible if for any $x, y \in S$ there is $t > 0$ such that $P_t(x, y) > 0$.
This means for any distinct $x, y \in S$ there are $z_1, \dots, z_{k-1}$ in $S$ such that $\alpha(x, z_1), \alpha(z_1, z_2), \dots, \alpha(z_{k-1}, y) > 0$.

### Visual Description
Text-only slide with several boxed formulas and definitions related to continuous-time Markov chains.

---
## Page 2
### Content
**First time to change state.** (First passage time to $S - \{x\}$).
Suppose $X_0 = x$, then let
$$T = \inf\{t \ge 0 : X_t \neq x\}$$
Then $T$ has an exponential distribution.
$$P(T > t) = e^{-\alpha t}$$
$\alpha = \alpha(x) = -\alpha(x, x)$ recall $\alpha(x, y)$ is the entry of the infinitesimal generator matrix.

**Mean passage time:** compute the expected time it takes to visit a particular state $z$ given that the chain starts at $x$. (Here we assume that the chain is irreducible). Aka mean passage time to $z$.
Let $Z = \inf\{t : X_t = z\}$ we want to compute $b(x) := \mathbb{E}[Z | X_0 = x]$. By considering the matrix $\bar{\mathbf{A}}$ obtained by deleting the row and column containing $z$, and considering $\mathbf{b}$ and $\mathbf{1}$ vectors indexed by $S \setminus \{z\}$ we obtain
$$\mathbf{1} + \bar{\mathbf{A}}\mathbf{b} = \mathbf{0}$$
thus
$$\mathbf{b} = -(\bar{\mathbf{A}})^{-1}\mathbf{1}$$

**Example 3:** let $S = \{0, 1, 2, 3\}$ and consider a chain with generator matrix
$$A = \begin{bmatrix} -1 & 1 & 0 & 0 \\ 1 & -3 & 1 & 1 \\ 0 & 1 & -2 & 1 \\ 0 & 1 & 1 & -2 \end{bmatrix}$$
we want to find the expected time to visit 3 when starting at 0. Then
$$\bar{A} = \begin{bmatrix} -1 & 1 & 0 \\ 1 & -3 & 1 \\ 0 & 1 & -2 \end{bmatrix}$$
and
$$\mathbf{b} = -(\bar{A})^{-1}\mathbf{1} = \begin{pmatrix} 8/3 \\ 5/3 \\ 4/3 \end{pmatrix}$$
Thus $b(0) = 8/3$.

### Visual Description
Text-only slide containing definitions, formulas in boxes, and a worked example involving matrix calculations for mean passage time.

---
## Page 3
### Content
**Transient and recurrent:**
A MC chain (which is the case here) is recurrent if with certainty it will visit to any given state $x$. Otherwise transient.
Fix any state $x$ then the return time $T_x = \inf\{t > 0 : X_t = x\}$
If $P(T_x < \infty | X_0 = x) < 1$ then transient.
If $P(T_x < \infty | X_0 = x) = 1$ then recurrent. Then evaluate $\mathbb{E}[T_x | X_0 = x]$. If finite then positive recurrent. Otherwise null recurrence.
A recurrent chain is positive recurrent if it has a stationary distribution:
$$\pi(x) \ge 0, \sum_S \pi(x) = 1,$$
$$\pi = \pi \mathbf{P}_t \text{ for all } t \ge 0.$$
Now, $\pi(x) = \frac{1}{\mathbb{E}[T_x | X_0 = x]}$

## 2 Birth & Death processes: A case study
**Birth and death processes**
State space $S = \{0, 1, 2, \dots\}$ and the transition will always be from $n$ to $n-1$ or $n$ or $n+1$. If $n=0$ then transition to 0 or 1.
Typical use: Model a population with certain birth date and death rate.
Birth rate: $\alpha(n, n+1) = \lambda_n$ in other words $P(X_t = n+1 | X_0 = n) \approx \lambda_n t$ when $t$ is small:
$$\lambda_n = \lim_{t \to 0} \frac{P(X_t = n+1 | X_0 = n)}{t}$$
Death rate: $\alpha(n, n-1) = \mu_n$ for $n \ge 1$. Assume that $\mu_0 = 0$ (if population is zero then no death). Again, $P(X_t = n-1 | X_0 = n) \approx \mu_n t$ when $t$ is small:
$$\mu_n = \lim_{t \to 0} \frac{P(X_t = n-1 | X_0 = n)}{t}$$
It follows in particular that $P(X_t = n | X_0 = n) \approx 1 - (\mu_n + \lambda_n)t$.
**Example:** We consider the Poisson process with rate $\lambda$. Then $\lambda_n = \lambda$ and $\mu_n = 0$.
Generally speaking, one has the differential equation
$$\frac{d}{dt} \mathbf{P} = \mathbf{P}\mathbf{A},$$
$$\mathbf{P}(0) = \mathbf{Id},$$
$$\mathbf{A} = \begin{pmatrix} -\lambda_0 & \lambda_0 & 0 & 0 & \dots \\ \mu_1 & -\lambda_1 - \mu_1 & \lambda_1 & 0 & \dots \\ 0 & \mu_2 & -\lambda_2 - \mu_2 & \lambda_2 & \dots \\ \vdots & \vdots & \vdots & \vdots & \vdots \end{pmatrix}$$

### Visual Description
Text-only slide with definitions of recurrence and transience, followed by an introduction to Birth & Death processes including rate definitions and the structure of the generator matrix $\mathbf{A}$.

---
## Page 4
### Content
State space $S = \{0, 1, 2, \dots\}$ and the transition will always be from $n$ to $n-1$ or $n$ or $n+1$. If $n=0$ then transition to 0 or 1.
It follows in particular that $P(X_t = n | X_0 = n) \approx 1 - (\mu_n + \lambda_n)t$.
Generally speaking, one has the differential equation
$$\frac{d}{dt} \mathbf{P} = \mathbf{P}\mathbf{A},$$
$$\mathbf{P}(0) = \mathbf{Id},$$
$$\mathbf{A} = \begin{pmatrix} -\lambda_0 & \lambda_0 & 0 & 0 & \dots \\ \mu_1 & -\lambda_1 - \mu_1 & \lambda_1 & 0 & \dots \\ 0 & \mu_2 & -\lambda_2 - \mu_2 & \lambda_2 & \dots \\ \vdots & \vdots & \vdots & \vdots & \vdots \end{pmatrix}$$

If $\mu_n > 0$ for all $n \ge 1$ and $\lambda_n > 0$ for all $n \ge 0$, then the chain is irreducible. Namely it is possible to visit a state from another state within finite time, with positive probability.
We shall assume such conditions on $\mu_n$ and $\lambda_n$.

**Fact: The irreducible birth and death chain is transient if and only if**
$$\sum_{n \ge 1} \frac{\mu_1 \dots \mu_n}{\lambda_1 \dots \lambda_n} < \infty$$

To see this, we can look at the equivalent discrete MC which is the RW on $\{0, 1, \dots\}$ with $p(n, n-1) = \frac{\mu_n}{\mu_n + \lambda_n}, p(n, n+1) = \frac{\lambda_n}{\mu_n + \lambda_n}$ (for $n=0$ we have $p(0, 0) = \mu_0 / (\mu_0 + \lambda_0)$.)
To see this equivalence, we let $Y_0 = X_0$ and let $Y_1$ be the next value of $X_t$. In other words, if $X_0 = x$ and
$$T = \inf\{t > 0 : X_t \neq x\}$$
then
$$Y_1 := X_T$$
Then define $Y_2$ similarly to be the next new value of $X_t$ after $Y_1$.
As can be seen, the transient/recurrent properties of $(Y_n)$ and $(X_t)$ are the same. And we saw before that
$$P(Y_1 = y | Y_0 = x) = \frac{\alpha(x, y)}{\alpha(x)}$$
for all $y \neq x$. In fact,
$$P(Y_{k+1} = y | Y_k = x) = \frac{\alpha(x, y)}{\alpha(x)}$
