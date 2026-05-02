# canvas-02-05-13501947-Midterm.Two_cheat_sheet

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-02-05-13501947-Midterm.Two_cheat_sheet.pdf`
Duplicate equivalents: `canvas-02-05-13501947-Midterm.Two_cheat_sheet.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 1

## Page 1

### Content

**Some potentially useful facts**

*   $\text{Var}(X) = \mathbb{E}(X^2) - (\mathbb{E}X)^2$, $\text{Cov}(X, Y) = \mathbb{E}(XY) - \mathbb{E}(X)\mathbb{E}(Y)$.
*   For a collection of random variables, $\text{Var} \left(\sum_{i=1}^n a_i X_i\right) = \sum_{i=1}^n \sum_{j=1}^n a_i a_j \text{Cov}(X_i, X_j)$.
*   The law of total expectation: $\mathbb{E}[\mathbb{E}[Y|X]] = \mathbb{E}[Y]$
*   The law of total variance: $\text{Var}(Y) = \mathbb{E}(\text{Var}(Y|X)) + \text{Var}(\mathbb{E}(Y|X))$.
*   Convergence in probability: $X_n \xrightarrow{P} X$ if $\forall \epsilon > 0, \lim_{n \to \infty} \mathbb{P}(|X_n - X| \ge \epsilon) = 0$.
*   Convergence in distribution: $X_n \rightsquigarrow X$, if $\lim_{n \to \infty} F_n(t) = F(t)$, for all $t$ for which $F$ is continuous.
*   If $Z \sim N(0, I)$ and $X = \mu + \Sigma^{1/2}Z$, then $X \sim N(\mu, \Sigma)$.
    Conversely, if $X \sim N(\mu, \Sigma)$, then $\Sigma^{-1/2}(X - \mu) \sim N(0, I)$.
*   Let $X \sim N(\mu, \Sigma)$. If $a \in \mathbb{R}^k$ is a constant vector, then $a^\top X \sim N(a^\top \mu, a^\top \Sigma a)$ and $(X - \mu)^\top \Sigma^{-1}(X - \mu) \sim \chi^2_k$.
*   $\mathbb{E}(\widehat{\theta}_n - \theta)^2 = \text{bias}^2(\widehat{\theta}_n) + \text{Var}(\widehat{\theta}_n)$

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

**Fisher Information** Define the log-likelihood function $\ell_n(\theta) = \sum_{i=1}^n \log f_\theta(X_i)$. The score function
$$s_n(X; \theta) = \nabla_\theta \ell_n(\theta) = \sum_i \nabla_\theta \log f_\theta(X_i) = \sum_i s_1(X_i; \theta)$$
The Fisher information, $I_n(\theta) = \text{Var}_\theta (s_n(X; \theta)) = \sum_i \text{Var}_\theta (s_1(X_i; \theta)) = n I_1(\theta)$, where
$$I_1(\theta) = \text{Var}_{X \sim f_\theta} (s_1(X; \theta)) = -\mathbb{E}_{X \sim f_\theta} \nabla_\theta^2 \ell_1(\theta).$$

1

### Visual Description
Text-only slide.

---
