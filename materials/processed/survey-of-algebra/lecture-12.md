# lecture-12

Source: `materials/archive/survey-of-algebra/local-pdfs/lecture-12.pdf`
Duplicate equivalents: `lecture-12.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 4

## Page 1
### Content
# Lecture 12: Continuous time MC (continued)

March 14, 2024

$$\frac{d}{dt} \mathbf{P}_t = \mathbf{P}_t \mathbf{A}$$

The continuous MC is irreducible if for any $x, y \in S$ there is $t > 0$ such that $P_t(x, y) > 0$.
This means for any distinct $x, y \in S$ there are $z_1, \dots, z_{k-1}$ in $S$ such that $\alpha(x, z_1), \alpha(z_1, z_2), \dots, \alpha(z_{k-1}, y) > 0$.
Indeed, if irreducible then the entry $(x, y)$ of $P_t$ is the sum of the $(x, y)$ entries of
$$I, At, \frac{A^2 t^2}{2!}, \dots$$
so for some $k$ this entry should be nonzero for $A^k$, which gives the $z_1, \dots, z_{k-1}$ mentioned above.

For continuous irreducible MC there is no issue with periodicity. In fact we can show:
(i) there is an unique probability vector $\pi$ such that
$$\pi \mathbf{A} = \mathbf{0}$$
(future homework problem.)
(ii) all other eigenvalues of $\mathbf{A}$ have negative real part.
Note that 0 is always an eigenvalue of $\mathbf{A}$. If we look at the discrete chain $(X_n)$ (as a subchain of $(X_t)$) then the transition matrix is $\mathbf{P} = e^{\mathbf{A}}$ and the eigenvalues of $P$ are exponentials of the eigenvalues of $A$. The above properties also ensure that 1 is a simple eigenvalue of $\mathbf{P}$ with a nonnegative left eigenvector, and all other eigenvalues have modulus strictly less than 1. Which are among the conditions that guarantees existence of the stationary distribution for the discrete subchain.

We are also interested in questions similar to those postulated in the setting of discrete chains.
**Example 1:** First time to change state. (First passage time to $S - \{x\}$).

1

### Visual Description
Text-only slide.

---
## Page 2
### Content
Suppose $X_0 = x$, then let
$$T = \inf\{t \geq 0 : X_t \neq x\}$$
Then $T$ has an exponential distribution.
To see this, given any $t \geq 0$, let
$$A_t = \{X_u = x : 0 \leq u \leq t\}$$
Thanks to the Markov property,
$$P(A_{t+s} | A_t) = P(X_{t+u} = x, 0 \leq u \leq s | X_t = 0) = P(X_u = x | 0 \leq u \leq s) = P(A_s)$$
$$P(A_{t+s}) = P(A_t)P(A_s)$$
Since $P(A_0) = 1$, it follows that $P(A_t) = e^{-\alpha t}$ for some $\alpha \geq 0$. Now if
$$P(A_{t+\epsilon}) \leq P(T > t) \leq P(A_t)$$
for any $\epsilon > 0$, and thus taking $\epsilon \to 0$ we obtain $P(T > t) = e^{-\alpha t} = P(A_t)$, thus $T$ has an exponential distribution.

It turns out $\alpha = \alpha(x) = -\alpha(x, x)$ recall $\alpha(x, y)$ is the entry of the infinitesimal generator matrix.
$$1 - e^{-\alpha \Delta t} = P(T < \Delta t) \approx P(X_{\Delta t} \neq x) = -\alpha(x, x)(\Delta t) + O((\Delta t)^2)$$
In fact we can show that, for any $y \neq x$:
$$P(X_T = y | X_0 = x) = \frac{\alpha(x, y)}{\alpha(x)}$$

**Example 2:** Mean passage time: compute the expected time it takes to visit a particular state $z$ given that the chain starts at $x$. (Here we assume that the chain is irreducible). Aka mean passage time to $z$.
Let $Z = \inf\{t : X_t = z\}$ we want to compute $E[Z | X_0 = x]$. Fix $z$ and consider $b(x) = E[Z | X_0 = x]$ as a function of $x \in S$. Recall $T = \inf\{t : X_t \neq x\} \leq Z$. And $Z - T \neq 0$ when $X_T \neq z$.
$$b(x) = E[Z | X_0 = x] = E[T | X_0 = x] + E[Z - T | X_0 = x]$$
$$= \frac{1}{\alpha(x)} + \sum_{y \neq z, y \neq x} E[Z - T | X_T = y] P(X_T = y | X_0 = x)$$
$$= \frac{1}{\alpha(x)} + \sum_{y \neq z, y \neq x} E[Z | X_0 = y] P(X_T = y | X_0 = x)$$

2

### Visual Description
The slide contains text and mathematical derivations. A central portion of the derivation regarding the exponential distribution of $T$ is enclosed in a black-bordered box.

---
## Page 3
### Content
$$= \frac{1}{\alpha(x)} + \sum_{y \neq z, y \neq x} b(y) \frac{\alpha(x, y)}{\alpha(x)}$$
Thus
$$1 + \sum_{y \neq z} \alpha(x, y)b(y) = 0$$
This holds for all $x \neq z$. Thus by considering the matrix $\bar{\mathbf{A}}$ obtained by deleting the row and column containing $z$, and considering $\bar{\mathbf{b}}$ and $\bar{\mathbf{1}}$ vectors indexed by $S \setminus \{z\}$ we obtain
$$\bar{\mathbf{1}} + \bar{\mathbf{A}}\bar{\mathbf{b}} = \bar{\mathbf{0}}$$
thus
$$\bar{\mathbf{b}} = -(\bar{\mathbf{A}})^{-1} \bar{\mathbf{1}}$$
**Example:** let $S = \{0, 1, 2, 3\}$ and consider a chain with generator matrix
$$A = \begin{bmatrix} -1 & 1 & 0 & 0 \\ 1 & -3 & 1 & 1 \\ 0 & 1 & -2 & 1 \\ 0 & 1 & 1 & -2 \end{bmatrix}$$
we want to find the expected time to visit 3 when starting at 0. Then
$$\bar{A} = \begin{bmatrix} -1 & 1 & 0 \\ 1 & -3 & 1 \\ 0 & 1 & -2 \end{bmatrix}$$
and
$$\bar{b} = -(\bar{A})^{-1} \bar{\mathbf{1}} = \begin{pmatrix} 8/3 \\ 5/3 \\ 4/3 \end{pmatrix}$$
Thus $b(0) = 8/3$.

**Birth and death processes**
State space $S = \{0, 1, 2, \dots\}$ and the transition will always be from $n$ to $n-1$ or $n$ or $n+1$. If $n=0$ then transition to 0 or 1.
Typical use: Model a population with certain birth date and death rate.
Birth rate: $\alpha(n, n+1) = \lambda_n$ in other words $P(X_t = n+1 | X_0 = n) \approx \lambda_n t$ when $t$ is small:
$$\lambda_n = \lim_{t \to 0} \frac{P(X_t = n+1 | X_0 = n)}{t}$$
Death rate: $\alpha(n, n-1) = \mu_n$ for $n \geq 1$. Assume that $\mu_0 = 0$ (if population is zero then no death). Again, $P(X_t = n-1 | X_0 = n) \approx \mu_n t$ when $t$ is small:

3

### Visual Description
Text-only slide containing mathematical formulas, a $4 \times 4$ matrix $A$, a $3 \times 3$ matrix $\bar{A}$, and a $3 \times 1$ vector $\bar{b}$.

---
## Page 4
### Content
$$\mu_n = \lim_{t \to 0} \frac{P(X_t = n-1 | X_0 = n)}{t}$$
It follows in particular that $P(X_t = n | X_0 = n) \approx 1 - (\mu_n + \lambda_n)t$.
**Example:** We consider the Poisson process with rate $\lambda$. Then $\lambda_n = \lambda$ and $\mu_n = 0$.
Generally speaking, one has the differential equation
$$\frac{d}{dt} \mathbf{P} = \mathbf{PA},$$
$$\mathbf{P}(0) = \mathbf{Id},$$
$$\mathbf{A} = \begin{pmatrix} -\lambda_0 & \lambda_0 & 0 & 0 & \dots \\ \mu_1 & -\lambda_1 - \mu_1 & \lambda_1 & 0 & \dots \\ 0 & \mu_2 & -\lambda_2 - \mu_2 & 0 & \dots \\ \vdots & \vdots & \vdots & \vdots & \vdots \end{pmatrix}$$

4

### Visual Description
Text-only slide featuring mathematical limits, differential equations, and a large tridiagonal matrix $\mathbf{A}$ representing a birth-death process.

---
