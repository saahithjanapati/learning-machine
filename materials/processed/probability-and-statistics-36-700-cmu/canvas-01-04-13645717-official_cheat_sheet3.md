# canvas-01-04-13645717-official_cheat_sheet3

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-01-04-13645717-official_cheat_sheet3.pdf`
Duplicate equivalents: `canvas-01-04-13645717-official_cheat_sheet3.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 1

## Page 1
### Content
**Some potentially useful facts**

*   $\text{Var}(X) = \mathbb{E}(X^2) - (\mathbb{E}X)^2$, $\text{Cov}(X, Y) = \mathbb{E}(XY) - \mathbb{E}(X)\mathbb{E}(Y)$.
*   For a collection of random variables, $\text{Var} (\sum_{i=1}^n a_i X_i) = \sum_{i=1}^n \sum_{j=1}^n a_i a_j \text{Cov}(X_i, X_j)$.
*   The law of total expectation: $\mathbb{E}[\mathbb{E}[Y|X]] = \mathbb{E}[Y]$
*   The law of total variance: $\text{Var}(Y) = \mathbb{E}(\text{Var}(Y|X)) + \text{Var}(\mathbb{E}(Y|X))$.
*   Convergence in probability: $X_n \xrightarrow{P} X$ if $\forall \epsilon > 0, \lim_{n \to \infty} \mathbb{P}(|X_n - X| \geq \epsilon) = 0$.
*   Convergence in distribution: $X_n \rightsquigarrow X$, if $\lim_{n \to \infty} F_n(t) = F(t)$, for all $t$ for which $F$ is continuous.
*   If $Z \sim N(0, I)$ and $X = \mu + \Sigma^{1/2}Z$, then $X \sim N(\mu, \Sigma)$.
    Conversely, if $X \sim N(\mu, \Sigma)$, then $\Sigma^{-1/2}(X - \mu) \sim N(0, I)$.
*   If $X \in \mathbb{R}^k$, and $a \in \mathbb{R}^k$ is a constant vector, then $\mathbb{E}(a^\top X) = a^\top \mathbb{E}(X)$ and $\text{Var}(a^\top X) = a^\top \text{Var}(X)a$. If $A$ is a constant matrix with $k$ columns, then $\mathbb{E}(AX) = A\mathbb{E}(X)$ and $\text{Var}(AX) = A\text{Var}(X)A^\top$.
*   Let $X \sim N(\mu, \Sigma)$. Then $a^\top X \sim N(a^\top \mu, a^\top \Sigma a)$ and $(X - \mu)^\top \Sigma^{-1} (X - \mu) \sim \chi^2_k$.
*   $\mathbb{E}(\hat{\theta}_n - \theta)^2 = \text{bias}^2(\hat{\theta}_n) + \text{Var}(\hat{\theta}_n)$

**Markov's Inequality** Let $X \geq 0$ and assume $\mu = \mathbb{E}[X]$ exists. Then $\forall t > 0, \mathbb{P}(X \geq t) \leq \mu/t$.

**Chebyshev's Inequality** Assume $\mathbb{E}[X] = \mu$ and $\text{Var}(X) = \sigma^2$ exist. Then $\forall t > 0, \mathbb{P}(|X - \mu| \geq t\sigma) \leq 1/t^2$.

**Hoeffding's inequality** Let $X_1, \dots, X_n$ be independent, $X_i \in [a_i, b_i]$, and $\mathbb{E}[X_i] = 0$. Then
$$\forall t > 0, \quad \mathbb{P}(\overline{X} \geq t) \leq \exp \left( -\frac{2n^2t^2}{\sum_{i=1}^n (b_i - a_i)^2} \right) \quad \text{and} \quad \mathbb{P}(|\overline{X}| \geq t) \leq 2 \exp \left( -\frac{2n^2t^2}{\sum_{i=1}^n (b_i - a_i)^2} \right).$$

**Delta method** Let $Y_n = (Y_{n1}, \dots, Y_{nk})^T$ be a sequence of random vectors, or random variables if $k = 1$, and $g : \mathbb{R}^k \to \mathbb{R}$ be a differentiable function with derivative
$$\nabla g(y) = \left( \frac{\partial g}{\partial y_1} \quad \frac{\partial g}{\partial y_2} \quad \dots \quad \frac{\partial g}{\partial y_k} \right)^T.$$
If $\sqrt{n}(Y_n - \mu) \rightsquigarrow N(0, \Sigma)$, then $\sqrt{n}(g(Y_n) - g(\mu)) \rightsquigarrow N(0, \nabla_\mu^T \Sigma \nabla_\mu)$, where $\nabla_\mu$ is $\nabla g(y)$ evaluated at $y = \mu$.

**Fisher Information** Define the log-likelihood function $\ell_n(\theta) = \sum_{i=1}^n \log f_\theta(X_i)$. The score function
$$s_n(X; \theta) = \nabla_\theta \ell_n(\theta) = \sum_i \nabla_\theta \log f_\theta(X_i) = \sum_i s_1(X_i; \theta)$$
The Fisher information, $I_n(\theta) = \text{Var}_\theta(s_n(X; \theta)) = \sum_i \text{Var}_\theta(s_1(X_i; \theta)) = nI_1(\theta)$, where
$$I_1(\theta) = \text{Var}_{X \sim f_\theta}(s_1(X; \theta)) = -\mathbb{E}_{X \sim f_\theta} \nabla_\theta^2 \ell_1(\theta).$$

1
### Visual Description
Text-only slide.

---
