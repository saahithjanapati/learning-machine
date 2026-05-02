# gradescope-04-homework-7-graded-copy

Source: `materials/archive/probability-and-statistics-36-700-cmu/gradescope-graded-copies/gradescope-04-homework-7-graded-copy.pdf`
Duplicate equivalents: `gradescope-04-homework-7-graded-copy.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 20

## Page 1
### Content
**Homework 7**
**Graded**

**Student**
Saahith Janapati

**Total Points**
100 / 100 pts

**Question 1**
**Wasserman 9.6** **20 / 20 pts**
*   **- 0 pts** Correct
*   **- 2 pts** (a) Major error
*   **- 1 pt** (a) Minor error
*   **- 2 pts** (b) Major error
*   **- 1 pt** (b) Minor error
*   **- 2 pts** (c) Major error
*   **- 1 pt** (c) Minor error
*   **- 2 pts** (d) Major error
*   **- 1 pt** (d) Minor error
*   **- 2 pts** (e) Major error
*   **- 1 pt** (e) Minor error

**Question 2**
**Normal MLE** **20 / 20 pts**
*   **- 0 pts** Correct
*   **- 3 pts** (a) Major error
*   **- 1 pt** (a) Minor error
*   **- 3 pts** (b) Major error
*   **- 1 pt** (b) Minor error
*   **- 3 pts** (c) Major error
*   **- 1 pt** (c) Minor error

### Visual Description
A digital grading interface showing the student's name, total score, and a breakdown of points for the first two questions of a homework assignment. Each question has a list of potential point deductions for errors, all of which are marked as 0 points deducted.

---

## Page 2
### Content
**Question 3**
**Normal MLE 2** **15 / 15 pts**
*   **- 0 pts** Correct
*   **- 1 pt** (a) Minor error
*   **- 2.5 pts** (a) Major error
*   **- 2.5 pts** (b) Major error
*   **- 1 pt** (b) Minor error
*   **- 2.5 pts** (c) Major error
*   **- 1 pt** (c) Minor error

**Question 4**
**Normalizing Constants** **15 / 15 pts**
*   **- 0 pts** Correct
*   **- 2 pts** 1 incorrect
*   **- 4 pts** 2 incorrect
*   **- 10 pts** 3 incorrect
*   **- 15 pts** All incorrect or missing.

**Question 5**
**Absolute Error** **15 / 15 pts**
*   **- 0 pts** Correct
*   **- 3 pts** (a) Minor error
*   **- 6 pts** (a) Major error/incomplete
*   **- 3 pts** (b) Minor error
*   **- 6 pts** (b) Major error/incomplete

**Question 6**
**Wasserman 9.9** **15 / 15 pts**
*   **- 0 pts** Correct
*   **- 3 pts** (a) Minor error
*   **- 6 pts** (a) Major error
*   **- 3 pts** (b) Minor error
*   **- 6 pts** (b) Major error
*   **- 15 pts** Missing

### Visual Description
Continuation of the digital grading interface from the previous page, showing scores and rubric items for questions 3 through 6. All questions are marked as correct with 0 points deducted.

---

## Page 3
### Content
No questions assigned to the following page.

Homework 7

### Visual Description
A light yellow page with the handwritten title "Homework 7" at the top. A banner at the top left states "No questions assigned to the following page."

---

## Page 4
### Content
Question assigned to the following page: 1

$$P(X_i > 0) = P(Z > -\theta) = \Phi(\theta)$$
(standard normal CDF)

(a) MLE of $\theta$ for $X_i \sim N(\theta, 1)$ is $\hat{\theta} = \bar{X}$.
By invariance of MLE, MLE of $r(\theta)$ is $r(\hat{\theta})$. Taking $r(\theta) = \Phi(\theta)$, the MLE of $\psi$ is
$$\boxed{\hat{\psi} = \Phi(\bar{X})}$$

(b) From asymptotic normality of MLE, $\hat{\theta} = \bar{X}$ has $se(\hat{\theta}) = \frac{1}{\sqrt{n}}$
So, $se(\hat{\psi}) \approx \frac{\phi(\theta)}{\sqrt{n}} \implies \hat{se}(\hat{\psi}) = \frac{\phi(\hat{\theta})}{\sqrt{n}} = \frac{\phi(\bar{X})}{\sqrt{n}}$
$$\boxed{\hat{\psi} \pm 1.96 \frac{\phi(\bar{X})}{\sqrt{n}}}$$

(c) Conditional on $\theta$, $Y_i \overset{iid}{\sim} \text{Bernoulli}(\psi)$ w/ $E[Y_i] = \psi$
By weak LLN, $\bar{\psi} \xrightarrow{p} \psi$. $\boxed{\text{Hence, } \bar{\psi} \text{ is consistent.}}$

### Visual Description
Handwritten mathematical derivations on a light yellow background. The page includes calculations for the Maximum Likelihood Estimator (MLE) of a parameter $\psi$, its standard error, a confidence interval, and a proof of consistency using the Law of Large Numbers.

---

## Page 5
### Content
Question assigned to the following page: 1

$avar(\hat{\psi}) = \frac{\phi(\theta)^2}{n}$ (from (b))

For Bernoulli sample mean,
$avar(\tilde{\psi}) = \frac{\psi(1-\psi)}{n} = \frac{\Phi(\theta)\{1-\Phi(\theta)\}}{n}$

$$\boxed{ARE = \frac{avar(\hat{\psi})}{avar(\tilde{\psi})} = \frac{\phi(\theta)^2}{\Phi(\theta)\{1-\Phi(\theta)\}}}$$

(e) If model $X_i \sim N(\theta, 1)$ is false, the relation $\psi = \Phi(\theta)$ need not hold.
But $\hat{\theta} = \bar{X}$ still satisfies $\bar{X} \xrightarrow{p} \mu = E[X]$ by LLN, so by continuous mapping theorem,
$$\hat{\psi} = \Phi(\bar{X}) \xrightarrow{p} \Phi(\mu)$$
In general $\Phi(\mu) \neq P(X > 0)$, so $\hat{\psi}$ is **not consistent** for $\psi = P(X > 0)$ under misspecification.

### Visual Description
Handwritten mathematical derivations continuing from the previous page. It calculates the Asymptotic Relative Efficiency (ARE) and discusses the consistency of the estimator under model misspecification.

---

## Page 6
### Content
Question assigned to the following page: 2

$$l(\mu, \sigma^2) = -\frac{n}{2} \log(\sigma^2) - \frac{1}{2\sigma^2} \sum_{i=1}^n (x_i - \mu)^2$$

Derive w.r.t. $\mu$: $\frac{d}{d\mu} \left( -\frac{1}{2\sigma^2} ((x_1 - \mu)^2 + (x_2 - \mu)^2 + \dots + (x_n - \mu)^2) \right)$
$= \frac{1}{\sigma^2} ((x_1 - \mu) + (x_2 - \mu) + \dots + (x_n - \mu))$
$= \frac{1}{\sigma^2} \sum_{i=1}^n (x_i - \mu) = 0 \implies \boxed{\hat{\mu} = \bar{x}}$

Derive w.r.t. $\sigma^2$:
$\frac{\partial l}{\partial \sigma^2} = -\frac{n}{2\sigma^2} + \frac{1}{2\sigma^4} \sum_{i=1}^n (x_i - \mu)^2 = 0$
$\frac{1}{2\sigma^4} \sum_{i=1}^n (x_i - \mu)^2 = \frac{n}{2\sigma^2}$
$\sum_{i=1}^n (x_i - \mu)^2 = n\sigma^2$
$$\boxed{\frac{1}{n} \sum_{i=1}^n (x_i - \mu)^2 = \sigma^2}$$

### Visual Description
Handwritten derivation of the Maximum Likelihood Estimators (MLE) for the mean ($\mu$) and variance ($\sigma^2$) of a normal distribution, starting from the log-likelihood function.

---

## Page 7
### Content
Question assigned to the following page: 2

$s_{\mu}(x) = \frac{\partial}{\partial \mu} \log f = \frac{x-\mu}{\sigma^2}$
$s_{\sigma^2}(x) = \frac{\partial}{\partial \sigma^2} \log f = -\frac{1}{2\sigma^2} + \frac{(x-\mu)^2}{2\sigma^4}$

$I_1(\theta) = E[s(\theta)s(\theta)^T] = -E[\nabla^2 \log f]$
$I_{11}^{(1)} = Var(s_{\mu}) = E[(x-\mu)^2]/\sigma^4 = \frac{\sigma^2}{\sigma^4} = \frac{1}{\sigma^2}$
$I_{22}^{(1)} = -E\left[\frac{\partial^2}{\partial (\sigma^2)^2} \log f\right] = \frac{1}{2\sigma^4}$

Cross Term
$I_{12}^{(1)} = -E\left[\frac{\partial^2}{\partial \mu \partial (\sigma^2)} \log f\right] = 0$

$$\boxed{I_1(\theta) = \begin{pmatrix} \frac{1}{\sigma^2} & 0 \\ 0 & \frac{1}{2\sigma^4} \end{pmatrix}}$$
$$\boxed{I_n(\theta) = n \begin{pmatrix} 1/\sigma^2 & 0 \\ 0 & \frac{1}{2\sigma^4} \end{pmatrix}}$$

### Visual Description
Handwritten derivation of the Fisher Information matrix for a normal distribution with parameters $\mu$ and $\sigma^2$. It shows the calculation of individual components and the final matrix form.

---

## Page 8
### Content
Question assigned to the following page: 2

Matrix inversion formula: $\frac{1}{ad-bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$
$= \frac{1}{(\frac{1}{\sigma^2})(\frac{1}{2\sigma^4}) - 0} \begin{pmatrix} \frac{1}{2\sigma^4} & 0 \\ 0 & \frac{1}{\sigma^2} \end{pmatrix}$
$= 2\sigma^6 \begin{pmatrix} \frac{1}{2\sigma^4} & 0 \\ 0 & \frac{1}{\sigma^2} \end{pmatrix} = \begin{pmatrix} \sigma^2 & 0 \\ 0 & 2\sigma^4 \end{pmatrix}$

So, $\sqrt{n}(\hat{\sigma}^2 - \sigma^2) \xrightarrow{d} N(0, 2\sigma^4)$
So asymptotic SE is
$se(\hat{\sigma}^2) \approx \sqrt{\frac{2\sigma^4}{n}} \approx \sqrt{\frac{2\hat{\sigma}^4}{n}} = \hat{\sigma}^2 \sqrt{\frac{2}{n}}$

$(1-\alpha)$ CI is:
$$\boxed{\hat{\sigma}^2 \pm z_{\alpha/2} \hat{\sigma}^2 \sqrt{\frac{2}{n}}}$$

### Visual Description
Handwritten derivation of the asymptotic distribution and confidence interval for the variance estimator $\hat{\sigma}^2$. It uses the inverse of the Fisher Information matrix to find the asymptotic variance.
## Page 9
### Content
```python
import matplotlib.pyplot as plt
import numpy as np
# from math import sqrt, pi, exp

rng = np.random.default_rng(42)
mu = 0.0
sigma2 = 1.0
sigma = np.sqrt(sigma2)
B = 500
ns = [10, 100, 1000]

def mle_variance(x):
    xbar = np.mean(x)
    return np.mean((x - xbar)**2)

def compute_T_hat(sample):
    n = len(sample)
    s2_hat = mle_variance(sample)
    num = np.sqrt(n) * (s2_hat - sigma2)
    den = np.sqrt(2 * sigma2)
    return num / den

def std_norm_pdf(x):
    return (1.0 / np.sqrt(2 * np.pi)) * np.exp(-0.5 * x**2)

t_results = {}
for n in ns:
    Ts = []
    for _ in range(B):
        x = rng.normal(loc=mu, scale=sigma, size=n)
        Ts.append(compute_T_hat(x))
    t_results[n] = np.array(Ts)

for idx, n in enumerate(ns):
    data = t_results[n]
    
    plt.figure()
    plt.hist(data, bins=25, density=True, alpha=0.7)
    
    xs = np.linspace(-4, 4, 400)
    ys = std_norm_pdf(xs)
    plt.plot(xs, ys, linewidth=2)
    plt.title(f"Distribution of T_hat_n (n={n}, B={B})")
    plt.xlabel("T_hat_n")
    plt.ylabel("Density")
    plt.show()
```

$n=10$: mean $\approx -0.239$, sd $\approx 0.918$

$n=100$: mean $\approx -0.047$, sd $\approx 0.970$

$n=1000$: mean $\approx -0.0001$, sd $\approx 1.004$

$\rightarrow (0, 1)$ as expected.

### Visual Description
A slide containing a block of Python code on the left and three histograms on the right showing the distribution of $\hat{T}_n$ for different sample sizes ($n=10, 100, 1000$). Handwritten notes at the bottom summarize the mean and standard deviation for each case, showing convergence to a standard normal distribution.

---

## Page 10
### Content
MLE of $\theta$ and $r$ is any function, then MLE of $r(\theta)$ is $r(\hat{\theta})$

$\theta = (\mu, \sigma^2)$, $\hat{\mu} = \bar{X}$, $\hat{\sigma} = \sqrt{\hat{\sigma}^2}$, so
$$\hat{\eta}_n = \frac{\hat{\sigma}}{\hat{\mu}} = \frac{\sqrt{\hat{\sigma}^2}}{\bar{X}}$$

(c) $\sqrt{n}((\hat{\mu}, \hat{\sigma}^2) - (\mu, \sigma^2)) \xrightarrow{d} N(0, I(\mu, \sigma^2)^{-1}) = N(0, \begin{pmatrix} \sigma^2 & 0 \\ 0 & 2\sigma^4 \end{pmatrix})$

Gradient of $g$ at $(\mu, \sigma^2)$
$$\nabla g(\mu, v) = \left(\frac{\partial}{\partial \mu} \frac{\sqrt{v}}{\mu}, \frac{\partial}{\partial v} \frac{\sqrt{v}}{\mu}\right) = \left(-\frac{\sigma}{\mu^2}, \frac{1}{2\mu\sigma}\right)$$

Delta method variance
$AVAR(\hat{\eta}_n) = \frac{1}{n} \nabla g^T I(\mu, \sigma^2)^{-1} \nabla g = \frac{1}{n} \left[ \left(-\frac{\sigma}{\mu^2}\right)^2 \sigma^2 + \left(\frac{1}{2\mu\sigma}\right)^2 (2\sigma^4) \right]$
$= \frac{1}{n} \left(\frac{\sigma^4}{\mu^4} + \frac{\sigma^2}{2\mu^2}\right) = \frac{1}{n} \left(\eta^4 + \frac{1}{2}\eta^2\right)$

$$\boxed{\sqrt{n}(\hat{\eta}_n - \eta) \xrightarrow{d} N(0, \eta^4 + \frac{1}{2}\eta^2)}$$

### Visual Description
Handwritten mathematical derivation using the Delta method to find the asymptotic distribution of the estimator for the coefficient of variation $\eta = \sigma/\mu$. The final result is boxed at the bottom.

---

## Page 11
### Content
Solve the problem by recognizing the kernel and plugging in the family's normalizing constant.

(a) $h(x) = C e^{-x^2/2}, x \in \mathbb{R}$
* $e^{-x^2/2}$ is standard normal pdf without constant
* standard normal pdf is $\frac{1}{\sqrt{2\pi}} e^{-x^2/2}$
$$\boxed{C = \frac{1}{\sqrt{2\pi}}}$$

(b) $h(x) = C e^{-x^2}, x \in \mathbb{R}$
Kernel $e^{-x^2}$ is normal w/ variance $1/2$, whose PDF is
$\frac{1}{\sqrt{2\pi\sigma^2}} e^{-x^2/(2\sigma^2)}$ with $\sigma^2 = \frac{1}{2} \Rightarrow \frac{1}{\sqrt{\pi}} e^{-x^2}$
$$\boxed{C = \frac{1}{\sqrt{\pi}}}$$

### Visual Description
Handwritten notes solving for normalizing constants $C$ for two different kernels related to the normal distribution. The final values for $C$ are highlighted in yellow.

---

## Page 12
### Content
$x^2(1-x)^3, x \in [0, 1]$

Kernel $x^{\alpha-1}(1-x)^{\beta-1}$ on $[0, 1]$ is $Beta(\alpha, \beta)$
$\alpha-1 = 2 \implies \alpha = 3, \beta-1 = 3 \implies \beta = 4$.

$$\frac{1}{B(\alpha, \beta)} x^{\alpha-1} (1-x)^{\beta-1}$$
$$B(\alpha, \beta) = \frac{(\alpha-1)!(\beta-1)!}{(\alpha+\beta-1)!}$$

Here: $B(3, 4) = \frac{2! 3!}{6!} = \frac{12}{720} = \frac{1}{60}$
$\frac{1}{B(3, 4)} = 60$.

$$\boxed{C = 60}$$

### Visual Description
Handwritten mathematical derivation for the normalizing constant of a Beta distribution kernel. The final result $C=60$ is boxed and highlighted in yellow.

---

## Page 13
### Content
$\frac{3^x}{x!}, x \in \mathbb{N}$

Kernel $\frac{\lambda^x}{x!}$ over $x = 0, 1, 2, \dots$ is $Poisson(\lambda)$
Normalized PMF: $e^{-\lambda} \frac{\lambda^x}{x!}$

With $\lambda = 3$, constant is $e^{-3}$
$$\boxed{C = e^{-3}}$$

This is the Bayesian "$\propto$" idea, where we write an unnormalized posterior $p(\theta|x) \propto L(\theta)p(\theta)$ and drop constants while working. The missing factor is the normalizing constant that turns a kernel into a proper distribution.

### Visual Description
Handwritten notes explaining the concept of kernels and normalizing constants in the context of a Poisson distribution and Bayesian statistics. The constant $C = e^{-3}$ is boxed and highlighted in yellow.

---

## Page 14
### Content
$R(c) = \int_{-\infty}^{\infty} |y-c| dF(y) =$
$\int_{-\infty}^{c} (c-y) dF(y) + \int_{c}^{\infty} (y-c) dF(y)$

Where $F$ is cdf of $Y$.
$R'_+(c) = \frac{d}{dc} \left[ \int_{-\infty}^{c} (c-y) dF(y) \right]_+ + \frac{d}{dc} \left[ \int_{c}^{\infty} (y-c) dF(y) \right]_+ =$
$F(c) - (1-F(c)) = 2F(c) - 1$

$R'_-(c) = 2F(c^-) - 1, F(c^-) = \lim_{t \to c^-} F(t)$

At minimizer $c^*$, we need $R'_-(c^*) \le 0 \le R'_+(c^*)$
$2F(c^*-) - 1 \le 0 \le 2F(c^*) - 1 \iff F(c^*-) \le \frac{1}{2} \le F(c^*)$

Set of $c$ satisfying $F(c^-) \le \frac{1}{2} \le F(c)$ is set of medians of $Y$. If $f$ is strictly increasing at median, minimizer is unique. If $F$ has flat part at level $1/2$, every point minimizes $R(c)$.

### Visual Description
Handwritten mathematical proof showing that the median minimizes the expected absolute error loss $R(c) = E[|Y-c|]$.

---

## Page 15
### Content
minimizes $E[|Y-c|]$

(b) Posterior risk of decision $t$ is
$r(t|x) = \int |\theta - t| f(\theta|x) d\theta$.

Let $\Theta|X=x$ be a random variable with cdf $F_x(t) = P(\Theta \le t | X=x)$

By steps in (a), minimizers $t^*(x)$ of $r(t|x)$ are those satisfying
$F_x(t^*(x)^-) \le \frac{1}{2} \le F_x(t^*(x))$

The Bayes estimator under absolute error loss is:
$\hat{\theta}_{Bayes}(x) = \text{any posterior median of } \Theta|X=x$.

### Visual Description
Handwritten notes concluding that the Bayes estimator for absolute error loss is the posterior median, based on the proof from the previous page.

---

## Page 16
### Content
(a)

| | 95% CI | SE |
| :--- | :--- | :--- |
| Delta | (113.474, 168.800) | 14.114 |
| Non-parametric | (121.347, 163.459) | 10.898 |
| Parametric | (115.701, 172.531) | 14.224 |

The non-parametric approach yields the lowest SE, while parametric yields the highest. All CI intervals contain $\hat{\theta} = e^5 = 148.413$

### Visual Description
A handwritten table comparing 95% confidence intervals and standard errors for Delta, Non-parametric, and Parametric bootstrap methods, followed by a brief summary of the results.

---
==End of PDF==
## Page 17
### Content
The delta method appears closest to the true distribution.

The parametric and non-parametric methods were both biased to the left.

![Three histograms comparing different estimation methods to a true simulated distribution.]

1. **True vs Nonparametric Bootstrap Distribution of $\theta = \exp(\bar{X})$**: Shows the "True (simulated)" distribution in blue and the "Nonparametric Bootstrap" in orange. The orange distribution is shifted slightly to the left of the true distribution.
2. **True vs Parametric Bootstrap Distribution of $\theta = \exp(\bar{X})$**: Shows the "True (simulated)" distribution in blue and the "Parametric Bootstrap" in orange. Similar to the nonparametric version, it is shifted to the left.
3. **True vs Delta-method (Normal Approximation) Distribution of $\theta = \exp(\bar{X})$**: Shows the "True (simulated)" distribution in blue and the "Delta-method (Normal Approximation)" in orange. The two distributions overlap significantly more than the bootstrap methods.

All plots include a vertical dashed line at $\theta$ (true) $\approx 148.4$.

### Visual Description
The page contains handwritten notes on the left and three vertically stacked histograms on the right. Each histogram compares a simulated "True" distribution (blue) with an approximation method (orange). A vertical dashed line represents the true value of $\theta$.

---
## Page 18
### Content
```python
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

rng = np.random.default_rng(42)

mu_true = 5.0
theta_true = np.exp(mu_true)
n = 100
B = 5000 # bootstrap reps
R = 20000 # repetitions for "true" sampling distribution

X = rng.normal(mu_true, 1.0, size=n)
xbar = X.mean()
theta_hat = float(np.exp(xbar))

se_delta = theta_hat / np.sqrt(n)
ci_delta = (theta_hat - 1.96 * se_delta, theta_hat + 1.96 * se_delta)

boot_param = np.empty(B)
for b in range(B):
    Xb = rng.normal(xbar, 1.0, size=n)
    boot_param[b] = np.exp(Xb.mean())
se_param = float(np.std(boot_param, ddof=1))
ci_param = (np.percentile(boot_param, 2.5), np.percentile(boot_param, 97.5))

boot_nonparam = np.empty(B)
for b in range(B):
    Xb = rng.choice(X, size=n, replace=True)
    boot_nonparam[b] = np.exp(Xb.mean())
se_nonparam = float(np.std(boot_nonparam, ddof=1))
ci_nonparam = (np.percentile(boot_nonparam, 2.5), np.percentile(boot_nonparam, 97.5))

theta_samp = np.empty(R)
for r in range(R):
    Xr = rng.normal(mu_true, 1.0, size=n)
    theta_samp[r] = np.exp(Xr.mean())

delta_mean_true = theta_true
delta_sd_true = theta_true / np.sqrt(n)
delta_sample = rng.normal(delta_mean_true, delta_sd_true, size=R)

summary_df = pd.DataFrame([
    {
        "Method": "Delta (plug-in)",
        "Point estimate theta_hat": theta_hat,
        "SE": se_delta,
        "CI Lower (95%)": ci_delta[0],
        "CI Upper (95%)": ci_delta[1],
        "Mean (approx dist)": delta_mean_true,
        "SD (approx dist)": delta_sd_true,
    },
    {
        "Method": "Parametric bootstrap",
        "Point estimate theta_hat": theta_hat,
        "SE": se_param,
        "CI Lower (95%)": ci_param[0],
        "CI Upper (95%)": ci_param[1],
        "Mean (approx dist)": float(boot_param.mean()),
        "SD (approx dist)": float(boot_param.std(ddof=1)),
    },
    {
        "Method": "Nonparametric bootstrap",
        "Point estimate theta_hat": theta_hat,
        "SE": se_nonparam,
        "CI Lower (95%)": ci_nonparam[0],
        "CI Upper (95%)": ci_nonparam[1],
        "Mean (approx dist)": float(boot_nonparam.mean()),
        "SD (approx dist)": float(boot_nonparam.std(ddof=1)),
    },
    {
        "Method": "True (simulated)",
        "Point estimate theta_hat": theta_true,
        "SE": float(theta_samp.std(ddof=1)),
        "CI Lower (95%)": float(np.percentile(theta_samp, 2.5)),
        "CI Upper (95%)": float(np.percentile(theta_samp, 97.5)),
        "Mean (approx dist)": float(theta_samp.mean()),
        "SD (approx dist)": float(theta_samp.std(ddof=1)),
    }
])

summary_df.to_csv("theta_estimation_summary.csv", index=False)
```

### Visual Description
A screenshot of a code editor showing Python code. The code uses `numpy`, `matplotlib`, and `pandas` to perform statistical simulations (Delta method, Parametric Bootstrap, Nonparametric Bootstrap) and saves the results into a summary CSV file.

---
## Page 19
### Content
Code for (b)

```python
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

rng = np.random.default_rng(42)

mu_true = 5.0
theta_true = np.exp(mu_true)
n = 100
B = 5000 # bootstrap reps
R = 20000 # repetitions for "true" sampling distribution

X = rng.normal(mu_true, 1.0, size=n)
xbar = X.mean()
theta_hat = float(np.exp(xbar))

# Delta-method CI
se_delta = theta_hat / np.sqrt(n)
ci_delta = (theta_hat - 1.96 * se_delta, theta_hat + 1.96 * se_delta)

# Parametric bootstrap
boot_param = np.empty(B)
for b in range(B):
    Xb = rng.normal(xbar, 1.0, size=n)
    boot_param[b] = np.exp(Xb.mean())

# Nonparametric bootstrap
boot_nonparam = np.empty(B)
for b in range(B):
    Xb = rng.choice(X, size=n, replace=True)
    boot_nonparam[b] = np.exp(Xb.mean())

# True sampling distribution
theta_samp = np.empty(R)
for r in range(R):
    Xr = rng.normal(mu_true, 1.0, size=n)
    theta_samp[r] = np.exp(Xr.mean())

# Delta normal approximation
delta_mean_true = theta_true
delta_sd_true = theta_true / np.sqrt(n)
delta_sample = rng.normal(delta_mean_true, delta_sd_true, size=R)

def plot_comparison(approx, approx_name, filename):
    plt.figure(figsize=(8, 5))
    bins = 60
    plt.hist(theta_samp, bins=bins, alpha=0.5, density=True, label="True (simulated)")
    plt.hist(approx, bins=bins, alpha=0.5, density=True, label=f"{approx_name}")
    plt.axvline(theta_true, color='k', linestyle='--', label=r"$\theta$ (true)")
    plt.xlabel(r"$\theta$")
    plt.ylabel("Density")
    plt.title(f"True vs {approx_name} Distribution of $\hat{\theta} = \exp(\bar{X})$")
    plt.legend()
    plt.tight_layout()
    plt.savefig(filename, dpi=200)
    plt.close()

plot_comparison(delta_sample, "Delta-method (Normal Approximation)", "plot_delta_vs_true.png")
plot_comparison(boot_param, "Parametric Bootstrap", "plot_param_vs_true.png")
plot_comparison(boot_nonparam, "Nonparametric Bootstrap", "plot_nonparam_vs_true.png")

print("Saved 3 plots:")
print("- plot_delta_vs_true.png")
print("- plot_param_vs_true.png")
print("- plot_nonparam_vs_true.png")
```

### Visual Description
A screenshot of a code editor showing Python code. This script includes a function `plot_comparison` that generates histograms comparing the true sampling distribution to various approximation methods. Handwritten text "Code for (b)" is visible at the top left.

---
## Page 20
### Content

### Visual Description
Blank page.
