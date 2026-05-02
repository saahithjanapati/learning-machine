# recitations-05-Recitation_4_MLE_MAP

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/recitations-05-Recitation_4_MLE_MAP.pdf`
Duplicate equivalents: `recitations-05-Recitation_4_MLE_MAP.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 7

## Page 1
### Content
# 10-715: MLE & MAP Recitation Notes
Jacob Springer
September 26, 2025

## 1 Introduction
In this recitation, we will cover the maximum likelihood estimation (MLE) and maximum a posteriori (MAP) estimation.

**So far in this course.** We assumed that we have a set of data samples $S = \{(x_i, y_i)\}_{i=1}^n$ from some unknown distribution $D$ over $\mathcal{X} \times \mathcal{Y}$, and a hypothesis class of *deterministic functions*, $\mathcal{H} = \{f : \mathcal{X} \to \mathcal{Y}\}$. Our goal was to use the data to pick the "best" function $f \in \mathcal{H}$.

**Today.** We now consider the case where we have a set of data samples $S$, but this time, rather than having a hypothesis class of deterministic functions, we have a family of distributions $\mathcal{P} = \{P_\theta : \theta \in \Theta\}$. Our goal is to use the data to pick the "best" distribution $P_\theta \in \mathcal{P}$.

For example, we may consider the following families of distributions:
* **Bernoulli family:** $X \in \{0, 1\}$ with $P_\theta(X = 1) = \theta$ and $P_\theta(X = 0) = 1 - \theta$.
* **Gaussian family (known covariance):** $X \in \mathbb{R}^d$ with $X \sim \mathcal{N}(\mu = \theta, \Sigma)$ for known $\Sigma$.

We'll focus on two methods for picking a distribution based on the data: **maximum likelihood estimation (MLE)** and **maximum a posteriori (MAP)**.

## 2 Maximum Likelihood Estimation (MLE)
One natural method for choosing a distribution given the data is to pick the distribution that maximizes the likelihood of the data.

**Maximum Likelihood Estimation.** Given data $D = \{x_i\}_{i=1}^n$ and parameter $\theta$, the maximum likelihood estimator (MLE) for a distribution family $\mathcal{P} = \{p_\theta \mid \theta \in \Theta\}$ is
$$
\begin{aligned}
\hat{\theta}_{\text{MLE}} &\in \arg \max_{\theta \in \Theta} \prod_{i=1}^n p_\theta(x_i) \\
&= \arg \max_{\theta \in \Theta} \sum_{i=1}^n \log p_\theta(x_i)
\end{aligned}
$$
It is often convenient to work with the log of the probability density, which is called the **log-likelihood** of the data.

### Visual Description
Text-only slide.

---
## Page 2
### Content
**Example: Coin flipping.** Suppose we have a coin that we flip $n$ times, and we observe the sequence of heads and tails. We want to estimate the probability of heads $p$. Formally, let $x_1, \dots, x_n \stackrel{\text{i.i.d.}}{\sim} \text{Bernoulli}(\theta)$ with $x_i \in \{0, 1\}$ and unknown $\theta \in [0, 1]$. Write $k = \sum_{i=1}^n x_i$ for the number of heads. By definition,
$$
\begin{aligned}
\hat{\theta}_{\text{MLE}} &\in \arg \max_{\theta \in [0,1]} \prod_{i=1}^n \theta^{x_i} (1 - \theta)^{1-x_i} \\
&= \arg \max_{\theta \in [0,1]} \sum_{i=1}^n [x_i \log \theta + (1 - x_i) \log(1 - \theta)] \\
&= \arg \max_{\theta \in [0,1]} \{k \log \theta + (n - k) \log(1 - \theta)\}.
\end{aligned}
$$
One way to solve this maximization problem is to set the gradient to zero. Differentiating the log-likelihood and equating to zero,
$$
\begin{aligned}
\frac{\partial}{\partial \theta} [k \log \theta + (n - k) \log(1 - \theta)] &= \frac{k}{\theta} - \frac{n - k}{1 - \theta} \\
&= 0 \implies \theta = \frac{k}{n}.
\end{aligned}
$$
To verify this is a maximizer on $(0, 1)$, inspect the second derivative:
$$
\frac{\partial^2}{\partial \theta^2} [k \log \theta + (n - k) \log(1 - \theta)] = -\frac{k}{\theta^2} - \frac{n - k}{(1 - \theta)^2} < 0,
$$
so the log-likelihood is strictly concave and the unique interior maximizer (when $0 < k < n$) is
$$
\hat{\theta}_{\text{MLE}} = \frac{1}{n} \sum_{i=1}^n x_i = \frac{k}{n}.
$$
At the boundaries, the maximizer occurs at $\theta = 0$ if $k = 0$ (all tails) and at $\theta = 1$ if $k = n$ (all heads).

**Example: Gaussian linear model.** Last week during recitation, we introduced linear regression. Here, we'll show that the least squares estimator is equivalent to the MLE for the Gaussian linear model.
Let $y = X\theta + \varepsilon$ with $y \in \mathbb{R}^n$, $X \in \mathbb{R}^{n \times d}$, $\theta \in \mathbb{R}^d$, and $\varepsilon \sim \mathcal{N}(0, \sigma^2 I_n)$. Then $y \mid \theta \sim \mathcal{N}(X\theta, \sigma^2 I_n)$, so
$$
p(y \mid \theta) = (2\pi\sigma^2)^{-n/2} \exp\left(-\frac{1}{2\sigma^2} \|y - X\theta\|_2^2\right),
$$
$$
\ell(\theta) = \log p(y \mid \theta) = -\frac{n}{2} \log(2\pi\sigma^2) - \frac{1}{2\sigma^2} \|y - X\theta\|_2^2.
$$
By definition of MLE,
$$
\begin{aligned}
\hat{\theta}_{\text{MLE}} &\in \arg \max_{\theta \in \mathbb{R}^d} p(y \mid \theta) \\
&= \arg \max_{\theta \in \mathbb{R}^d} \ell(\theta) \\
&= \arg \min_{\theta \in \mathbb{R}^d} \|y - X\theta\|_2^2,
\end{aligned}
$$

### Visual Description
Text-only slide.

---
## Page 3
### Content
where we dropped additive and positive multiplicative constants.
One way to solve this maximization problem is to set the gradient to zero. Let
$$f(\theta) = \|y - X\theta\|_2^2 = (y - X\theta)^\top(y - X\theta).$$
Then
$$\nabla_\theta f(\theta) = -2X^\top(y - X\theta) = 2X^\top X \theta - 2X^\top y,$$
and setting the gradient to zero yields the normal equations
$$X^\top X \hat{\theta}_{\text{MLE}} = X^\top y.$$
If $X^\top X$ is invertible (e.g., $X$ has full column rank), the unique solution is
$$\hat{\theta}_{\text{MLE}} = (X^\top X)^{-1}X^\top y$$
and if $X^\top X$ is not invertible, any least-squares solution satisfies the normal equations; the minimum-norm solution is $X^+y$ (Moore–Penrose pseudoinverse).

## 3 Maximum A Posteriori (MAP)
Another natural method for choosing a distribution when we have prior information about the parameters is to maximize the *posterior* probability of the parameters given the observed data. Intuitively, MAP combines how well $\theta$ explains the data (likelihood) with how plausible $\theta$ is a priori (prior).

**Definition.** Given a prior $p(\theta)$ and observed data $(x_1, \dots, x_n)$, the MAP estimator is
$$
\begin{aligned}
\hat{\theta}_{\text{MAP}} &\in \arg \max_\theta p(\theta \mid x_1, \dots, x_n) \\
&= \arg \max_\theta p(x_1, \dots, x_n \mid \theta) p(\theta) \\
&= \arg \max_\theta \{ \log p(x_1, \dots, x_n \mid \theta) + \log p(\theta) \}.
\end{aligned}
$$

**Gaussian prior on coefficients $\Rightarrow$ ridge.** Consider the Gaussian linear model with $y = X\theta + \varepsilon$, where $y \in \mathbb{R}^n$, $X \in \mathbb{R}^{n \times d}$, $\theta \in \mathbb{R}^d$, and $\varepsilon \sim \mathcal{N}(0, \sigma^2 I_n)$. Assume an i.i.d. Gaussian prior on the coefficients, $\theta \sim \mathcal{N}(0, \sigma_\theta^2 I_d)$.

**Likelihood.** As before,
$$
p(y \mid \theta) = (2\pi\sigma^2)^{-n/2} \exp\left(-\frac{1}{2\sigma^2} \|y - X\theta\|_2^2\right),
$$
$$
\ell(\theta) = \log p(y \mid \theta) = -\frac{n}{2} \log(2\pi\sigma^2) - \frac{1}{2\sigma^2} \|y - X\theta\|_2^2.
$$

**Prior.** The Gaussian prior density is
$$
p(\theta) = (2\pi\sigma_\theta^2)^{-d/2} \exp\left(-\frac{1}{2\sigma_\theta^2} \|\theta\|_2^2\right),
$$
$$
\log p(\theta) = -\frac{d}{2} \log(2\pi\sigma_\theta^2) - \frac{1}{2\sigma_\theta^2} \|\theta\|_2^2.
$$

### Visual Description
Text-only slide.

---
## Page 4
### Content
**Posterior objective (log).** Adding the two,
$$
\log p(y \mid \theta) + \log p(\theta) = -\frac{n}{2} \log(2\pi\sigma^2) - \frac{1}{2\sigma^2} \|y - X\theta\|_2^2 - \frac{d}{2} \log(2\pi\sigma_\theta^2) - \frac{1}{2\sigma_\theta^2} \|\theta\|_2^2.
$$
Dropping additive constants and multiplying by $2\sigma^2$ (a positive constant that does not affect the maximizer), the MAP problem is equivalent to
$$
\hat{\theta}_{\text{MAP}} \in \arg \min_{\theta \in \mathbb{R}^d} \|y - X\theta\|_2^2 + \lambda \|\theta\|_2^2, \quad \lambda = \frac{\sigma^2}{\sigma_\theta^2}.
$$
**Solve by setting the gradient to zero.** Let
$$f(\theta) = \|y - X\theta\|_2^2 + \lambda\|\theta\|_2^2 = (y - X\theta)^\top(y - X\theta) + \lambda \theta^\top\theta.$$
Then
$$\nabla_\theta f(\theta) = -2X^\top(y - X\theta) + 2\lambda \theta = 2X^\top X \theta - 2X^\top y + 2\lambda \theta.$$
Setting the gradient to zero yields the *ridge normal equations*
$$(X^\top X + \lambda I_d) \hat{\theta}_{\text{MAP}} = X^\top y.$$
For any $\lambda > 0$, $X^\top X + \lambda I_d$ is invertible, so the unique solution is
$$\hat{\theta}_{\text{MAP}} = (X^\top X + \lambda I_d)^{-1}X^\top y, \quad \lambda = \sigma^2/\sigma_\theta^2.$$

## 4 Equivalence of MLE and MAP
**MLE as MAP with a uniform prior.** If $p(\theta) \propto 1$ (improper uniform on $\mathbb{R}^p$), then $p(\theta \mid y) \propto p(y \mid \theta)$ and
$$\hat{\theta}_{\text{MAP}} = \arg \max_\theta p(\theta \mid y) = \arg \max_\theta p(y \mid \theta) = \hat{\theta}_{\text{MLE}}.$$

**MAP as regularized MLE.** By Bayes' rule,
$$
\log p(\theta \mid y) = \underbrace{\log p(y \mid \theta)}_{\text{log-likelihood}} + \underbrace{\log p(\theta)}_{\text{log-prior}} - \log p(y).
$$
Hence
$$
\hat{\theta}_{\text{MAP}} \in \arg \min_\theta \left( -\log p(y \mid \theta) \right) + \underbrace{\left( -\log p(\theta) \right)}_{\text{regularizer}}.
$$

## 5 Surprises in Least Squares Regression: MLE vs. MAP
This section is based on Hastie et al. [1]. We'll be looking empirically at the difference between MLE and MAP in the context of least squares regression.

### Visual Description
Text-only slide.

---
## Page 5
### Content
**Setup.** Recall from above that we have derived the MLE and (one of the) MAP estimators for the Gaussian linear model:
$$
\begin{aligned}
\hat{\theta}_{\text{MLE}} &= (X^\top X)^{-1}X^\top y, \\
\hat{\theta}_{\text{MAP}} &= (X^\top X + \lambda I_d)^{-1}X^\top y,
\end{aligned}
$$
A natural question is how these two estimators behave as the number of samples $n$ varies. In particular, we will study the $\ell_2$ error:
$$
\text{MSE}(\hat{\theta}_n) = \mathbb{E}[\|\hat{\theta}_n - \theta\|_2^2].
$$
where $\hat{\theta}_n$ is the estimator based on $n$ samples $x_1, \dots, x_n \sim \mathcal{N}(0, \sigma^2 I_d)$ and corresponding labels $y_1, \dots, y_n \sim \mathcal{N}(x_i^\top \theta, \sigma^2)$.
As it turns out, the error will have a very strange behavior when the number of samples $n$ approaches the dimensionality of each example $x_i$, which we will call $d$.

**Experiment.** We'll simulate data from the Gaussian linear model and compute the parameter estimation error for MLE and MAP as the number of samples $n$ varies. When the MLE and MAP are not uniquely determined (when $n < d$), we'll use the minimum-norm solution.

![Figure 1: Parameter error vs sample size: MLE vs MAP](figure1.png)
*Figure 1: Parameter estimation error as a function of the training dataset size. The dashed vertical line indicates where the model dimension $d$ is equal to the number of samples $n$, at which point the error for MLE spikes.*

**Surprising observations.** From Figure 1, we see that the error for MLE spikes when the number of samples $n = d$, where $d$ is the model dimension. However, the error for the MAP is much lower.

**Explanation (intuitive version).** The full proof is somewhat involved, and you can refer to Hastie et al. [1] for the details. However, we'll give a tiny bit of intuition here.
Consider the case where we have $d$ samples $x_1, \dots, x_d \sim \mathcal{N}(0, \sigma^2)$ which form a matrix $X = [x_1, \dots, x_d] \in \mathbb{R}^{d \times d}$. We can lower bound the error for the estimators:
$$
\|\hat{\theta} - \theta\|_2^2 \geq (\|\hat{\theta}\|_2 - \|\theta\|_2)^2 = \mathcal{O}(\|\hat{\theta}\|_2^2)
$$
when $\|\hat{\theta}\|_2$ is large. Thus, let us compute $\|\hat{\theta}\|_2$ for the MLE and MAP.

### Visual Description
The page contains a line graph titled "Parameter error vs sample size: MLE vs MAP". The y-axis is "Parameter error (l2 norm)" ranging from 0 to 10. The x-axis is "Number of samples (n)" ranging from 0 to 250. There are two lines: a blue line for MLE ($\lambda=0$) and an orange line for MAP/Ridge ($\lambda=1$). Both lines start high and decrease as $n$ increases. At $n=d=128$ (marked by a red dashed vertical line), the blue MLE line has a sharp, high spike reaching nearly 10, while the orange MAP line remains smooth and low. After $n=d$, both lines converge towards zero.

---
## Page 6
### Content
**Computing $\|\hat{\theta}\|_2$ for the MLE.** Let us pretend for a moment that $X$ is diagonal and also that we have ordered the samples in increasing order of magnitude:
$$
X = \begin{bmatrix}
\lambda_1 & 0 & \cdots & 0 \\
0 & \lambda_2 & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & \lambda_d
\end{bmatrix}, \text{ as we are pretending that } X \text{ is diagonal for intuition.}
$$
Then,
$$
\begin{aligned}
\hat{\theta}_{\text{MLE}} &= (X^\top X)^{-1}X^\top y \\
&= \left( \begin{bmatrix} \lambda_1 & \cdots & 0 \\ \vdots & \ddots & \vdots \\ 0 & \cdots & \lambda_d \end{bmatrix}^\top \begin{bmatrix} \lambda_1 & \cdots & 0 \\ \vdots & \ddots & \vdots \\ 0 & \cdots & \lambda_d \end{bmatrix} \right)^{-1} \begin{bmatrix} \lambda_1 & \cdots & 0 \\ \vdots & \ddots & \vdots \\ 0 & \cdots & \lambda_d \end{bmatrix}^\top y \\
&= \begin{bmatrix} \lambda_1^{-1} & \cdots & 0 \\ \vdots & \ddots & \vdots \\ 0 & \cdots & \lambda_d^{-1} \end{bmatrix} y \\
&= \text{diag}(\lambda_1^{-1}, \lambda_2^{-1}, \dots, \lambda_d^{-1})y
\end{aligned}
$$
Thus,
$$
\|\hat{\theta}_{\text{MLE}}\|_2^2 = \sum_{i=1}^d \lambda_i^{-2} = \mathcal{O}(\lambda_d^{-2})
$$
The same is true even if $X$ is not diagonal, but requires slightly more linear algebra to show. Overall, this implies that the error for the MLE depends on the smallest singular value of $X$.

**Computing $\|\hat{\theta}\|_2$ for the MAP.** We will perform a similar computation for the MAP.
$$
\begin{aligned}
\hat{\theta}_{\text{MAP}} &= (X^\top X + \lambda I_d)^{-1}X^\top y \\
&= \left( \begin{bmatrix} \lambda_1^2 & \cdots & 0 \\ \vdots & \ddots & \vdots \\ 0 & \cdots & \lambda_d^2 \end{bmatrix} + \lambda I_d \right)^{-1} \begin{bmatrix} \lambda_1 & \cdots & 0 \\ \vdots & \ddots & \vdots \\ 0 & \cdots & \lambda_d \end{bmatrix}^\top y \\
&= \text{diag}(\lambda_1/(\lambda_1^2 + \lambda), \lambda_2/(\lambda_2^2 + \lambda), \dots, \lambda_d/(\lambda_d^2 + \lambda))y
\end{aligned}
$$
Thus,
$$
\|\hat{\theta}_{\text{MAP}}\|_2^2 = \sum_{i=1}^d \lambda_i^2 / (\lambda_i^2 + \lambda) = \mathcal{O}(1)
$$
Importantly, the error for the MAP has no (asymptotic) dependence on the smallest singular value of $X$.

### Visual Description
Text-only slide.

---
## Page 7
### Content
**Singular values of $X$.** We can plot the distribution of the minimum singular values of $X$ (over random draws of the data matrix $X$) for a given $d$ and $n$.

![Figure 2: Distribution of min eig(X^T X)](figure2.png)
*Figure 2: Minimum singular value distribution of $X^\top X$ when $n = d = 128$ (top) and $n = 132$ (bottom). When $n = d$, the minimum singular value is concentrated around 0. When $n > d$ (even slightly), the minimum singular value is no longer concentrated around 0.*

**Minimum singular value concentration.** Interestingly, when $n = d$ (in this case $n = d = 128$), the minimum singular value of $X$ is concentrated around 0. However, when $n > d$, even very slightly (in this case $n = 132$), the minimum singular value of $X$ is no longer concentrated around 0.

**Conclusion.** We have seen that the error for the MLE depends inversely on the smallest singular value of $X$, while the error for the MAP has no (asymptotic) dependence on the smallest singular value of $X$. This is why the error for the MAP is much lower than the error for the MLE when $n = d$.

### References
[1] Trevor Hastie, Andrea Montanari, Saharon Rosset, and Ryan J Tibshirani. Surprises in high-dimensional ridgeless least squares interpolation. *Annals of statistics*, 50(2):949, 2022.

### Visual Description
The page contains two histograms under the title "Distribution of min eig(X^T X)". 
- The top histogram is for $d=128, n=128$. It shows a high frequency of minimum eigenvalues very close to 0.00, with the frequency dropping off sharply as the value increases.
- The bottom histogram is for $d=128, n=132$. It shows the distribution of minimum eigenvalues shifted away from zero, peaking around 0.05 and ranging from approximately 0.01 to 0.08. 
The y-axis for both is "Frequency" and the x-axis is "Minimum eigenvalue of X^T X".
