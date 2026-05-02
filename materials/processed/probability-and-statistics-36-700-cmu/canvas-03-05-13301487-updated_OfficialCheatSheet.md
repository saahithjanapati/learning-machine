# canvas-03-05-13301487-updated_OfficialCheatSheet

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-03-05-13301487-updated_OfficialCheatSheet.pdf`
Duplicate equivalents: `canvas-03-05-13301487-updated_OfficialCheatSheet.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 2

## Page 1
### Content
**Some potentially useful facts**

*   **DeMorgan’s Laws:** $(A \cup B)^c = A^c \cap B^c$ and $(A \cap B)^c = A^c \cup B^c$
*   **Union Bound:** For not necessarily disjoint events $A_i$ we have
    $$\mathbb{P}\left(\bigcup_{i=1}^{\infty} A_i\right) \leq \sum_{i=1}^{\infty} \mathbb{P}(A_i).$$
*   $\text{Var}(X) = \mathbb{E}(X^2) - (\mathbb{E}X)^2$, $\text{Cov}(X, Y) = \mathbb{E}(XY) - \mathbb{E}(X)\mathbb{E}(Y)$.
*   For a collection of random variables,
    $$\text{Var}\left(\sum_{i=1}^n a_i X_i\right) = \sum_{i=1}^n \sum_{j=1}^n a_i a_j \text{Cov}(X_i, X_j).$$
*   The law of total expectation (the tower property):
    $$\mathbb{E}[\mathbb{E}[Y|X]] = \mathbb{E}[Y]$$
*   The law of total variance:
    $$\mathbb{V}(Y) = \mathbb{E}(\mathbb{V}(Y|X)) + \mathbb{V}(\mathbb{E}(Y|X)).$$
*   Convergence in probability: $Y_n \xrightarrow{P} Y$ if $\forall \epsilon > 0, \lim_{n \to \infty} \mathbb{P}(|Y_n - Y| \geq \epsilon) = 0$.
*   Convergence in distribution: $X_n \rightsquigarrow X$, if $\lim_{n \to \infty} F_n(t) = F(t)$, for all $t$ for which $F$ is continuous.
*   If $Z \sim N(0, I)$ and $X = \mu + \Sigma^{1/2}Z$, then $X \sim N(\mu, \Sigma)$.
    Conversely, if $X \sim N(\mu, \Sigma)$, then $\Sigma^{-1/2}(X - \mu) \sim N(0, I)$.
*   For any real number $t, \lim_{n \to \infty} (1 + \frac{t}{n})^n = e^t$.

**Markov’s Inequality** Let $X \geq 0$ and assume $\mu = \mathbb{E}[X]$ exists. Then $\forall t > 0, \mathbb{P}(X \geq t) \leq \mu/t$.

**Chebyshev’s Inequality** Assume $\mathbb{E}[X] = \mu$ and $\text{Var}(X) = \sigma^2$ exist. Then $\forall t > 0, \mathbb{P}(|X - \mu| \geq t\sigma) \leq 1/t^2$.

**Mill’s inequality:** Let $Z \sim N(0, 1)$. Then $\forall t > 0, \mathbb{P}(|Z| \geq t) \leq \sqrt{(2/\pi)} \exp(-t^2/2)/t$.

**Hoeffding’s inequality** Let $X_1, \dots, X_n$ be independent, $X_i \in [a_i, b_i]$, and $\mathbb{E}[X_i] = 0$. Then
$$\forall t > 0, \mathbb{P}(\bar{X} \geq t) \leq \exp\left(-\frac{2n^2t^2}{\sum_{i=1}^n (b_i - a_i)^2}\right) \text{ and } \mathbb{P}(|\bar{X}| \geq t) \leq 2 \exp\left(-\frac{2n^2t^2}{\sum_{i=1}^n (b_i - a_i)^2}\right).$$

1

### Visual Description
Text-only slide containing mathematical definitions and theorems related to probability and statistics.

---

## Page 2
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

2

### Visual Description
Text-only slide containing a theorem on convergence properties of random variables and the definition of the Delta method.

---
