# canvas-02-01-13611196-midterm2_sol

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-02-01-13611196-midterm2_sol.pdf`
Duplicate equivalents: `canvas-02-01-13611196-midterm2_sol.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 7

## Page 1
### Content
# Midterm 2 Problems

**Yes or no problem**

1. Under the square loss, the posterior risk of the Bayes estimator is always the posterior variance. **T**
2. If the parameter of interest is at the boundary of the parameter space, its MLE will not necessarily have asymptotic normality. **T**
3. For a given test statistic and data, changing the alternative hypothesis does not affect the p-value. **F**
4. For a fixed dataset and test, changing the significance level $\alpha$ changes the p-value. **F**
5. If $\hat{\theta}$ is unbiased for $\theta$, then $\hat{\theta}^2$ is unbiased for $\theta^2$. **F**
6. Under a valid test with continuous p-values, the distribution of the p-value is Uniform[0,1] when $H_0$ holds. **T**
7. A p-value is the probability that $H_1$ is false. **F**
8. Two different level-$\alpha$ tests will always have identical power against the same alternative. **F**
9. A small p-value from a large sample provides stronger evidence against $H_0$ than a small p-value from a small sample. **F**
10. Lowering the test level from $\alpha = 0.05$ to $\alpha = 0.01$ typically reduces Type I errors but also reduces power against true alternatives. **T**
11. Minimax estimators are always admissible. **F**
12. The Bayes risk lower-bounds the maximum risk of any estimator. **T**

**Calculation problem**

1. Let $X_1, \dots, X_n$ be independent identically distributed random variables with density
$$f(x) = \frac{k}{\lambda} \left( \frac{x}{\lambda} \right)^{k-1} e^{-(x/\lambda)^k}, \quad x \ge 0$$
where $k > 0$ is **known** and $\lambda > 0$ is unknown.
(a) Find the maximum likelihood estimator (MLE) for $\lambda$.
**Solution:** The likelihood is
$$L(\lambda) = \prod_{i=1}^n \frac{k}{\lambda} \left( \frac{X_i}{\lambda} \right)^{k-1} \exp \left\{ -\left( \frac{X_i}{\lambda} \right)^k \right\}.$$

### Visual Description
Text-only slide. The page contains a list of 12 true/false questions followed by the start of a calculation problem involving a probability density function and its maximum likelihood estimator. Solutions/answers are highlighted in blue.

---
## Page 2
### Content
The log-likelihood is
$$\ell(\lambda) = \sum_{i=1}^n \left[ \log k - \log \lambda + (k - 1)(\log X_i - \log \lambda) - (X_i/\lambda)^k \right]$$
$$= C - kn \log \lambda - \sum_{i=1}^n (X_i/\lambda)^k,$$
where $C$ does not depend on $\lambda$. Differentiate and set equal to 0:
$$\ell'(\lambda) = -\frac{kn}{\lambda} + k\lambda^{-k-1} \sum_{i=1}^n X_i^k = 0.$$
Solving gives
$$\lambda^k = \frac{1}{n} \sum_{i=1}^n X_i^k \implies \hat{\lambda} = \left( \frac{1}{n} \sum_{i=1}^n X_i^k \right)^{1/k}.$$

(b) Find the limiting distribution of the MLE. Useful fact: $\mathbb{E}(X_i^k) = \lambda^k$.
**Solution:** For one observation,
$$\ell_1(\lambda; x) = \log k - \log \lambda + (k - 1)(\log x - \log \lambda) - \left( \frac{x}{\lambda} \right)^k = C - k \log \lambda - \left( \frac{x}{\lambda} \right)^k,$$
where $C$ does not depend on $\lambda$.
The first derivative is
$$\ell'_1(\lambda; x) = \frac{\partial}{\partial \lambda} \ell_1(\lambda; x) = -\frac{k}{\lambda} + k \frac{x^k}{\lambda^{k+1}}.$$
The second derivative is
$$\ell''_1(\lambda; x) = \frac{\partial}{\partial \lambda} \ell'_1(\lambda; x) = \frac{k}{\lambda^2} - k(k + 1) \frac{x^k}{\lambda^{k+2}}.$$
The Fisher information in one observation is
$$I_1(\lambda) = -\mathbb{E}_\lambda [\ell''_1(\lambda; X)] = -\left[ \frac{k}{\lambda^2} - k(k + 1) \frac{\mathbb{E}_\lambda(X^k)}{\lambda^{k+2}} \right].$$
Using the given fact $\mathbb{E}_\lambda(X^k) = \lambda^k$, we obtain
$$I_1(\lambda) = -\left[ \frac{k}{\lambda^2} - k(k + 1) \frac{\lambda^k}{\lambda^{k+2}} \right] = -\left[ \frac{k}{\lambda^2} - \frac{k(k + 1)}{\lambda^2} \right] = \frac{k^2}{\lambda^2}.$$
For $n$ i.i.d. observations, the total information is
$$I_n(\lambda) = n I_1(\lambda) = n \frac{k^2}{\lambda^2}.$$

### Visual Description
Text-only slide. This page continues the solution for the MLE of $\lambda$ and calculates the Fisher information to find the limiting distribution. Mathematical derivations are shown in blue text.

---
## Page 3
### Content
By the standard MLE asymptotic normality theorem,
$$\sqrt{n} (\hat{\lambda} - \lambda) \rightsquigarrow N(0, I_1(\lambda)^{-1}) = N\left(0, \frac{\lambda^2}{k^2}\right).$$

(c) Using the limiting distribution of the MLE, derive an approximate 95% confidence interval for $\log \lambda$.
**Solution:** We are interested in $\log \lambda$, so define $g(\lambda) = \log \lambda$. Then
$$g'(\lambda) = \frac{1}{\lambda}.$$
By the delta method,
$$\sqrt{n} (\log \hat{\lambda} - \log \lambda) \xrightarrow{d} N(0, [g'(\lambda)]^2 \cdot \frac{\lambda^2}{k^2}) = N\left(0, \frac{1}{k^2}\right).$$
Thus, for large $n$,
$$\log \hat{\lambda} \approx N\left(\log \lambda, \frac{1}{nk^2}\right),$$
so an approximate 95% confidence interval for $\log \lambda$ is
$$\left[ \log \hat{\lambda} - \frac{1.96}{k\sqrt{n}}, \log \hat{\lambda} + \frac{1.96}{k\sqrt{n}} \right].$$

2. Let $X_1, \dots, X_n$ be an independent sample from the Uniform$[0, \theta]$ distribution. Let $\theta$ have Pareto$(\alpha, \beta)$ prior distribution, which has density
$$h(\theta) = \frac{\beta \alpha^\beta}{\theta^{\beta+1}} \mathbf{1}\{\theta > \alpha\}$$
for some $\alpha > 0$ and $\beta > 0$.
(a) Compute the likelihood $L(\theta \mid X_1, \dots, X_n)$. Simplify so that there are no products over 1 to $n$ left in the final expression.
**Solution:** For one observation
$$f(x_i \mid \theta) = \frac{1}{\theta} \mathbf{1}\{0 \le x_i \le \theta\}.$$
Hence the joint density is
$$L(\theta \mid x_1, \dots, x_n) = \prod_{i=1}^n \frac{1}{\theta} \mathbf{1}\{0 \le x_i \le \theta\} = \theta^{-n} \mathbf{1}\{X_{(n)} \le \theta\}.$$
Let $M = \max_{1 \le i \le n} x_i$. Then
$$L(\theta \mid x_1, \dots, x_n) = \theta^{-n} \mathbf{1}\{\theta \ge X_{(n)}\}.$$

### Visual Description
Text-only slide. The page completes the first problem using the delta method for a confidence interval and starts a second problem involving a Uniform distribution with a Pareto prior. Mathematical derivations are in blue.

---
## Page 4
### Content
(b) Compute the posterior distribution of $\theta$ under the given prior $h(\theta)$. Hint: the posterior distribution will also be Pareto.
**Solution:** The posterior density is proportional to likelihood times prior:
$$\pi(\theta \mid x_1, \dots, x_n) \propto L(\theta \mid x_1, \dots, x_n) h(\theta) \propto \theta^{-n} \mathbf{1}\{\theta \ge X_{(n)}\} \frac{\beta \alpha^\beta}{\theta^{\beta+1}} \mathbf{1}\{\theta > \alpha\}.$$
Thus
$$\pi(\theta \mid x_1, \dots, x_n) \propto \theta^{-(\beta+n+1)} \mathbf{1}\{\theta > \max(\alpha, X_{(n)})\}.$$
This is again a Pareto density. Let
$$\alpha^* = \max(\alpha, X_{(n)}), \quad \beta^* = \beta + n.$$
Then the normalized posterior density is
$$\pi(\theta \mid x_1, \dots, x_n) = \frac{\beta^* (\alpha^*)^{\beta^*}}{\theta^{\beta^*+1}} \mathbf{1}\{\theta > \alpha^*\},$$
i.e. $\theta \mid x_1, \dots, x_n \sim \text{Pareto}(\alpha^*, \beta^*)$.

(c) Obtain the Bayes estimator for $\theta$ under squared error loss. You may use fact that if $Y \sim \text{Pareto}(\alpha, \beta)$ then $\mathbb{E}(Y) = \frac{\beta \alpha}{\beta-1}$.
**Solution:**
Under squared error loss, the Bayes estimator is the posterior mean, hence
$$\hat{\theta}_B = \mathbb{E}(\theta \mid x_1, \dots, x_n)$$
Using the fact that $\theta \mid x_1, \dots, x_n \sim \text{Pareto}(\alpha^*, \beta^*)$, the Bayes estimator is
$$\hat{\theta}_B = \mathbb{E}(\theta \mid x_1, \dots, x_n) = \frac{\beta^* \alpha^*}{\beta^* - 1} = \frac{(\beta + n) \max(\alpha, X_{(n)})}{\beta + n - 1},$$

3. Let $X_1, \dots, X_n$ be i.i.d. Bernoulli($p$) with unknown $p \in (0, 1)$. Consider the following three estimators:
$$\hat{p}_{\text{MLE}} = \bar{X}, \quad \hat{p}_{\text{CR}} = \frac{\sum_{i=1}^n X_i + \sqrt{n}/4}{n + 2\sqrt{n}/4},$$
where $\hat{p}_{\text{MLE}}$ is the MLE and $\hat{p}_{\text{CR}}$ is the Bayes estimators under the prior $\text{Beta}(\sqrt{n}/4, \sqrt{n}/4)$.
Under squared error loss, the corresponding risks are
$$R(p, \hat{p}_{\text{MLE}}) = \frac{p(1 - p)}{n}, \quad R(p, \hat{p}_{\text{CR}}) = \frac{n}{4(n + \sqrt{n})^2}$$
for all $p \in (0, 1)$.

### Visual Description
Text-only slide. This page continues the Pareto posterior calculation and Bayes estimator derivation. It then introduces a third problem comparing MLE and Bayes estimators for a Bernoulli distribution. Mathematical derivations are in blue.

---
## Page 5
### Content
(a) On a single set of axes, approximately sketch the risk functions $R(p, \hat{p}_{\text{MLE}})$ and $R(p, \hat{p}_{\text{CR}})$ as functions of $p \in [0, 1]$ for a fixed $n$.
**Solution:** Figure 12.2 in AOS

(b) For fixed $n > 4$, which estimator has the smallest maximum risk $\sup_{p \in [0,1]} R(p, \hat{p})$?
**Solution:** For the MLE,
$$R(p, \hat{p}_{\text{MLE}}) = \frac{p(1 - p)}{n}$$
is a concave quadratic in $p$ with maximum at $p = 1/2$, so
$$\sup_{p \in [0,1]} R(p, \hat{p}_{\text{MLE}}) = \frac{1}{4n}.$$
For $\hat{p}_{\text{CR}}$ the risk is constant in $p$, so
$$\sup_{p \in [0,1]} R(p, \hat{p}_{\text{CR}}) = \frac{n}{4(n + \sqrt{n})^2}.$$
Now compare. First,
$$\frac{n}{4(n + \sqrt{n})^2} < \frac{1}{4n}$$
because $(n + \sqrt{n})^2 > n^2$, so $\hat{p}_{\text{CR}}$ has smaller maximum risk than the MLE.

(c) Take the uniform prior $\pi(p) \equiv 1$ on $[0, 1]$. Compute the Bayes risk with respect to prior $\pi$ for $\hat{p}_{\text{MLE}}$ and $\hat{p}_{\text{CR}}$. Determine which estimator has the smaller Bayes risk for large $n$ by analyzing the behavior of the ratio $R_\pi(\hat{p}_{\text{MLE}})/R_\pi(\hat{p}_{\text{CR}})$ as $n \to \infty$.
**Solution:** Take $\pi(p) \equiv 1$ on $[0, 1]$ and define
$$R_\pi(\hat{p}) = \int_0^1 \pi(p) R(p, \hat{p}) \, dp.$$
For the MLE,
$$R_\pi(\hat{p}_{\text{MLE}}) = \int_0^1 \frac{p(1 - p)}{n} \, dp = \frac{1}{n} \int_0^1 (p - p^2) \, dp = \frac{1}{n} \left( \frac{1}{2} - \frac{1}{3} \right) = \frac{1}{6n}.$$
For $\hat{p}_{\text{CR}}$ the risk is constant, so
$$R_\pi(\hat{p}_{\text{CR}}) = \frac{n}{4(n + \sqrt{n})^2}.$$
Analyzing the asymptotic behavior of the ratio of the two risks.
$$\lim_{n \to \infty} \frac{R_\pi(\hat{p}_{\text{MLE}})}{R_\pi(\hat{p}_{\text{CR}})} = \lim_{n \to \infty} \frac{4(n + \sqrt{n})^2}{6n^2} = \frac{4}{6} < 1$$
So the $\hat{p}_{\text{MLE}}$ has smaller Bayes risk for large $n$.

### Visual Description
Text-only slide. This page analyzes the risk functions and Bayes risks for the Bernoulli estimators introduced on the previous page. Mathematical derivations and comparisons are shown in blue.

---
## Page 6
### Content
4. Let $X_1, \dots, X_n$ be an independent random sample from an $\text{Exp}(\theta)$ distribution, with density
$$f(x) = \frac{1}{\theta} e^{-x/\theta}, \quad x > 0$$
for some $\theta > 0$. We are testing the hypotheses
$$H_0 : \theta = \theta_0 \quad \text{vs} \quad H_1 : \theta = \theta_1, \quad \theta_1 > \theta_0.$$
Let the test statistic be the sample mean
$$T(X_1, \dots, X_n) = \bar{X}_n = \frac{1}{n} \sum_{i=1}^n X_i$$
and consider a rejection region of the form
$$R = \{T(X_1, \dots, X_n) > c\}$$
(a) Find $c$ so that the test has approximate size $\alpha$.
**Solution:** Under $H_0$, by the CLT
$$\mathbb{P}_{\theta_0}(\bar{X}_n > c) \approx \mathbb{P} \left( Z > \frac{c - \theta_0}{\theta_0/\sqrt{n}} \right), \quad Z \sim N(0, 1).$$
For this to equal $\alpha$, we require
$$\frac{c - \theta_0}{\theta_0/\sqrt{n}} = z_{1-\alpha},$$
where $z_{1-\alpha}$ is the $(1 - \alpha)$ quantile of $N(0, 1)$. Hence
$$c = \theta_0 + z_{1-\alpha} \frac{\theta_0}{\sqrt{n}}.$$

(b) Compute the approximate power under $H_1$, that is, find $\beta(\theta_1)$.
**Solution:** Under $H_1 : \theta = \theta_1$,
$$\beta(\theta_1) = \mathbb{P}_{\theta_1}(\bar{X}_n > c) \approx \mathbb{P} \left( Z > \frac{c - \theta_1}{\theta_1/\sqrt{n}} \right), \quad Z \sim N(0, 1).$$
Substitute the $c$ found in part (a):
$$\frac{c - \theta_1}{\theta_1/\sqrt{n}} = \frac{\theta_0 + z_{1-\alpha} \frac{\theta_0}{\sqrt{n}} - \theta_1}{\theta_1/\sqrt{n}} = \frac{\sqrt{n}(\theta_0 - \theta_1)}{\theta_1} + z_{1-\alpha} \frac{\theta_0}{\theta_1}.$$
Thus the approximate power is
$$\beta(\theta_1) \approx 1 - \Phi \left( \frac{\sqrt{n}(\theta_0 - \theta_1)}{\theta_1} + z_{1-\alpha} \frac{\theta_0}{\theta_1} \right),$$

### Visual Description
Text-only slide. This page presents a hypothesis testing problem for an Exponential distribution, deriving the critical value $c$ for a given size $\alpha$ and the power function $\beta(\theta_1)$. Mathematical derivations are in blue.

---
## Page 7
### Content
where $\Phi$ is the standard normal distribution function.
(c) Show that the test is consistent under the alternative, meaning $\beta(\theta_1) \to 1$ as $n \to \infty$.
**Solution:** Since $\theta_1 > \theta_0$, we have $(\theta_0 - \theta_1)/\theta_1 < 0$, so
$$\frac{\sqrt{n}(\theta_0 - \theta_1)}{\theta_1} + z_{1-\alpha} \frac{\theta_0}{\theta_1} \longrightarrow -\infty \quad \text{as } n \to \infty.$$
Therefore
$$\beta(\theta_1) \approx 1 - \Phi \left( \frac{\sqrt{n}(\theta_0 - \theta_1)}{\theta_1} + z_{1-\alpha} \frac{\theta_0}{\theta_1} \right) \longrightarrow 1,$$
showing that the test is consistent under the alternative.

### Visual Description
Text-only slide. This final page completes the hypothesis testing problem by proving the consistency of the test as the sample size $n$ goes to infinity. Mathematical derivations are in blue.

---
