# canvas-02-07-13526456-midterm2_review

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-02-07-13526456-midterm2_review.pdf`
Duplicate equivalents: `canvas-02-07-13526456-midterm2_review.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 5

## Page 1
### Content
# Midterm 2 Review

1. Let $X_1, \dots, X_n$ be i.i.d. $\text{Gamma}(\alpha, \beta)$ with (shape–scale parameterization)
$$f(x \mid \alpha, \beta) = \frac{1}{\Gamma(\alpha)\beta^\alpha} x^{\alpha-1} e^{-x/\beta}, \quad x > 0,$$
where $\alpha > 0$ and $\beta > 0$.

(a) Using the first two moments, find the method-of-moments estimators $\hat{\alpha}_{\text{MM}}$ and $\hat{\beta}_{\text{MM}}$.
(b) Now assume that $\alpha$ is known. Find the MLE $\hat{\beta}$ of $\beta$.
(c) Derive the asymptotic distribution of $\hat{\beta}$.
(d) Construct an approximate 95% confidence interval for $\log \beta$.

**(a) For $X \sim \Gamma(\alpha, \beta)$ (shape–scale),**
$$\mathbb{E}(X) = \alpha\beta, \quad \text{Var}(X) = \alpha\beta^2, \quad \mathbb{E}(X^2) = \text{Var}(X) + \mathbb{E}(X)^2 = \alpha\beta^2 + \alpha^2\beta^2 = \alpha(\alpha+1)\beta^2.$$
The method of moments equates population and sample moments:
$$m_1 = \alpha\beta, \quad m_2 = \alpha(\alpha + 1)\beta^2.$$
From $m_1 = \alpha\beta$ we have $\beta = m_1/\alpha$. Substitute into the equation for $m_2$:
$$m_2 = \alpha(\alpha + 1) \left(\frac{m_1}{\alpha}\right)^2 = \frac{(\alpha + 1)m_1^2}{\alpha}.$$
Thus
$$m_2\alpha = (\alpha + 1)m_1^2 \implies \alpha(m_2 - m_1^2) = m_1^2 \implies \hat{\alpha}_{\text{MM}} = \frac{m_1^2}{m_2 - m_1^2}.$$
Then
$$\hat{\beta}_{\text{MM}} = \frac{m_1}{\hat{\alpha}_{\text{MM}}} = \frac{m_1(m_2 - m_1^2)}{m_1^2} = \frac{m_2 - m_1^2}{m_1}.$$

**(b) With $\alpha$ known and $\beta$ unknown, the log-likelihood is**
$$\ell(\beta) = \sum_{i=1}^n \log f(X_i \mid \alpha, \beta) = -n\alpha \log \beta - \frac{1}{\beta} \sum_{i=1}^n X_i + \text{const}.$$
Differentiate:
$$\frac{d\ell}{d\beta} = -\frac{n\alpha}{\beta} + \frac{1}{\beta^2} \sum_{i=1}^n X_i = -\frac{n\alpha}{\beta} + \frac{n\bar{X}}{\beta^2}.$$
Set $d\ell/d\beta = 0$:
$$-\frac{n\alpha}{\beta} + \frac{n\bar{X}}{\beta^2} = 0 \implies n\bar{X} = n\alpha\beta \implies \hat{\beta} = \frac{\bar{X}}{\alpha}.$$

### Visual Description
Text-only slide containing a statistical problem and its step-by-step solution for parts (a) and (b). The text is primarily black with solutions highlighted in blue.

---
## Page 2
### Content
(c) For one observation $X$, the log-density is
$$\ell(\beta; X) = -\alpha \log \beta - \frac{X}{\beta} + \text{const},$$
so
$$\frac{d\ell}{d\beta} = -\frac{\alpha}{\beta} + \frac{X}{\beta^2}, \quad \frac{d^2\ell}{d\beta^2} = \frac{\alpha}{\beta^2} - \frac{2X}{\beta^3}.$$
The Fisher information for one observation is
$$I_1(\beta) = -\mathbb{E}\left[\frac{d^2\ell}{d\beta^2}\right] = -\left(\frac{\alpha}{\beta^2} - \frac{2\mathbb{E}(X)}{\beta^3}\right) = -\left(\frac{\alpha}{\beta^2} - \frac{2\alpha\beta}{\beta^3}\right) = -\left(\frac{\alpha}{\beta^2} - \frac{2\alpha}{\beta^2}\right) = \frac{\alpha}{\beta^2}.$$
For $n$ i.i.d. observations, $I_n(\beta) = n\alpha/\beta^2$. Standard MLE asymptotics give
$$\sqrt{n}(\hat{\beta} - \beta) \xrightarrow{d} N(0, I_1(\beta)^{-1}) = N\left(0, \frac{\beta^2}{\alpha}\right),$$
or equivalently
$$\hat{\beta} \approx N\left(\beta, \frac{\beta^2}{\alpha n}\right) \text{ for large } n.$$

(d) Let $g(\beta) = \log \beta$. Then $g'(\beta) = 1/\beta$. By the Delta method,
$$\sqrt{n}(g(\hat{\beta}) - g(\beta)) \xrightarrow{d} N\left(0, (g'(\beta))^2 \frac{\beta^2}{\alpha}\right) = N\left(0, \frac{1}{\alpha}\right).$$
Thus, asymptotically,
$$\log \hat{\beta} \approx N\left(\log \beta, \frac{1}{\alpha n}\right).$$
An approximate 95% confidence interval for $\log \beta$ is
$$\left[\log \hat{\beta} - 1.96 \sqrt{\frac{1}{\alpha n}}, \log \hat{\beta} + 1.96 \sqrt{\frac{1}{\alpha n}}\right],$$

2. Assume that, conditional on $\lambda$,
$$X_1, \dots, X_n \mid \lambda \overset{\text{i.i.d.}}{\sim} \text{Poisson}(\lambda),$$
and the prior on $\lambda$ is
$$\lambda \sim \text{Gamma}(\alpha, \beta),$$
where $\text{Gamma}(\alpha, \beta)$ has density
$$\pi(\lambda) = \frac{1}{\Gamma(\alpha)\beta^\alpha} \lambda^{\alpha-1} e^{-\lambda/\beta}, \quad \lambda > 0$$
(shape $\alpha$, scale $\beta$). Use squared error loss $L(\lambda, a) = (\lambda - a)^2$.

### Visual Description
Text-only slide continuing the solution for problem 1 (parts c and d) and introducing problem 2. The text is primarily black with solutions and new problem statements highlighted in blue.

---
## Page 3
### Content
(a) Find the Bayes estimator $\delta_B(X_1, \dots, X_n)$.
(b) Compute the Bayes risk $R_\pi(\delta_B)$.

Let $S = \sum_{i=1}^n X_i$.

(a) The likelihood for $\lambda$ given $X_1, \dots, X_n$ is
$$L(\lambda) = \prod_{i=1}^n \frac{e^{-\lambda}\lambda^{X_i}}{X_i!} \propto e^{-n\lambda}\lambda^S.$$
Multiplying by the prior density,
$$\pi(\lambda \mid x_1, \dots, x_n) \propto \lambda^S e^{-n\lambda} \cdot \lambda^{\alpha-1} e^{-\lambda/\beta} \mathbf{1}(\lambda > 0) = \lambda^{\alpha+S-1} \exp\{-\lambda(n + 1/\beta)\} \mathbf{1}(\lambda > 0).$$
Thus the posterior is
$$\lambda \mid X_1, \dots, X_n \sim \text{Gamma}\left(\alpha + S, \frac{1}{n + 1/\beta}\right) = \text{Gamma}\left(\alpha + S, \frac{\beta}{1 + n\beta}\right),$$
with shape $\alpha + S$ and scale $\beta/(1 + n\beta)$.
Under squared error loss, the Bayes estimator is the posterior mean:
$$\delta_B(X_1, \dots, X_n) = \mathbb{E}(\lambda \mid X_1, \dots, X_n) = (\alpha + S) \frac{\beta}{1 + n\beta}.$$

(b) For squared error loss, the Bayes risk equals the prior expectation of the posterior variance:
$$R_\pi(\delta_B) = \mathbb{E}[\text{Var}(\lambda \mid X_1, \dots, X_n)].$$
For $\lambda \mid X_1, \dots, X_n \sim \text{Gamma}(k, \theta)$, the variance is $k\theta^2$. Here $k = \alpha + S$ and $\theta = \beta/(1 + n\beta)$, so
$$\text{Var}(\lambda \mid X_1, \dots, X_n) = (\alpha + S) \left(\frac{\beta}{1 + n\beta}\right)^2.$$
Hence
$$R_\pi(\delta_B) = \mathbb{E}(\alpha + S) \left(\frac{\beta}{1 + n\beta}\right)^2.$$
Now
$$\mathbb{E}(S) = \mathbb{E}[\mathbb{E}(S \mid \lambda)] = \mathbb{E}(n\lambda) = n \mathbb{E}(\lambda) = n\alpha\beta,$$
so
$$\mathbb{E}(\alpha + S) = \alpha + n\alpha\beta = \alpha(1 + n\beta).$$
Therefore
$$R_\pi(\delta_B) = \alpha(1 + n\beta) \left(\frac{\beta}{1 + n\beta}\right)^2 = \frac{\alpha\beta^2}{1 + n\beta}.$$

### Visual Description
Text-only slide providing the solution for problem 2, parts (a) and (b). The text is primarily black with solutions highlighted in blue.

---
## Page 4
### Content
Proof of $R_\pi(\delta_B) = \mathbb{E}[\text{Var}(\lambda \mid X_1, \dots, X_n)]$:

From Lecture notes 7, we derived that
$$R_\pi(\hat{\theta}) = \int \mathbb{E}(L(\hat{\theta}, \theta) \mid x_1, \dots, x_n) p(x_1, \dots, x_n) dx_1, \dots, dx_n$$
$$= \mathbb{E}[\mathbb{E}(L(\hat{\theta}, \theta) \mid x_1, \dots, x_n)]$$
Where the inner expectation is taken with respect to the conditional distribution of $\theta \mid x_1, \dots, x_n$ and the outer exception is with respect to the marginal distribution of $x_1, \dots, x_n$. Now plugging in the squared error loss and the Bayes estimator $\hat{\theta} = \mathbb{E}(\lambda \mid x_1, \dots, x_n)$ we have,
$$\mathbb{E}[\mathbb{E}(L(\hat{\theta}, \theta) \mid x_1, \dots, x_n)] = \mathbb{E}[\mathbb{E}((\lambda - \mathbb{E}(\lambda \mid x_1, \dots, x_n))^2 \mid x_1, \dots, x_n)]$$
$$= \mathbb{E}[\text{Var}(\lambda \mid x_1, \dots, x_n)] \quad \text{By definition of conditional variance}$$
$\square$

3. Let $X_1, \dots, X_n$ be i.i.d. $\text{Bernoulli}(p)$ and $\hat{p} = \bar{X}$. Consider testing
$$H_0 : p = p_0 \quad \text{vs} \quad H_1 : p \neq p_0$$
at level $\alpha$ using the Wald test.

(a) Write the Wald test statistic
$$W = \frac{\hat{p} - p_0}{\sqrt{p_0(1 - p_0)/n}}$$
and give the (approximate) two-sided rejection region in terms of $z_{\alpha/2}$.
(b) Using the CLT under a general $p \in (0, 1)$, derive the approximate power function $\beta(p) = \mathbb{P}_p(\text{reject } H_0)$ and express it in terms of the standard normal CDF $\Phi$.

(a) Under $H_0$, by the CLT,
$$W = \frac{\hat{p} - p_0}{\sqrt{p_0(1 - p_0)/n}} \approx N(0, 1).$$
The (approximate) two-sided level-$\alpha$ rejection region is
$$|W| > z_{\alpha/2},$$
i.e.
$$\frac{|\hat{p} - p_0|}{\sqrt{p_0(1 - p_0)/n}} > z_{\alpha/2}.$$

### Visual Description
Text-only slide containing a proof for Bayes risk and the start of problem 3 regarding Bernoulli testing. The text is primarily black with solutions and problem statements highlighted in blue.

---
## Page 5
### Content
Equivalently, in terms of $\hat{p}$,
$$\hat{p} < c_1 \quad \text{or} \quad \hat{p} > c_2,$$
where
$$c_1 = p_0 - z_{\alpha/2} \sqrt{\frac{p_0(1 - p_0)}{n}}, \quad c_2 = p_0 + z_{\alpha/2} \sqrt{\frac{p_0(1 - p_0)}{n}}.$$

(b) For a true parameter value $p$, the CLT gives
$$\hat{p} \approx N\left(p, \frac{p(1 - p)}{n}\right).$$
Hence the (approximate) power is
$$\beta(p) \approx \mathbb{P}_p(\hat{p} < c_1) + \mathbb{P}_p(\hat{p} > c_2).$$
Let
$$Z = \frac{\hat{p} - p}{\sqrt{p(1 - p)/n}} \approx N(0, 1).$$
Then
$$\mathbb{P}_p(\hat{p} < c_1) = \mathbb{P}\left(Z < \frac{c_1 - p}{\sqrt{p(1 - p)/n}}\right) = \Phi\left(\frac{c_1 - p}{\sqrt{p(1 - p)/n}}\right),$$
$$\mathbb{P}_p(\hat{p} > c_2) = 1 - \mathbb{P}\left(Z \leq \frac{c_2 - p}{\sqrt{p(1 - p)/n}}\right) = 1 - \Phi\left(\frac{c_2 - p}{\sqrt{p(1 - p)/n}}\right).$$
Therefore
$$\beta(p) \approx \Phi\left(\frac{c_1 - p}{\sqrt{p(1 - p)/n}}\right) + 1 - \Phi\left(\frac{c_2 - p}{\sqrt{p(1 - p)/n}}\right).$$
Substituting $c_1$ and $c_2$,
$$\beta(p) \approx \Phi\left(\frac{p_0 - z_{\alpha/2} \sqrt{p_0(1 - p_0)/n} - p}{\sqrt{p(1 - p)/n}}\right) + 1 - \Phi\left(\frac{p_0 + z_{\alpha/2} \sqrt{p_0(1 - p_0)/n} - p}{\sqrt{p(1 - p)/n}}\right).$$

### Visual Description
Text-only slide completing the solution for problem 3, part (b). The text is primarily black with solutions highlighted in blue.
