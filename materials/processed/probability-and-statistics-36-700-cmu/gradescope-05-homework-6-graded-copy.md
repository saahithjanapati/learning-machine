# gradescope-05-homework-6-graded-copy

Source: `materials/archive/probability-and-statistics-36-700-cmu/gradescope-graded-copies/gradescope-05-homework-6-graded-copy.pdf`
Duplicate equivalents: `gradescope-05-homework-6-graded-copy.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 14

## Page 1
### Content
**Homework 6**
**Graded**

**Student**
Saahith Janapati

**Total Points**
100 / 100 pts

**Question 1**
**Uniform** **30 / 30 pts**
*   **- 0 pts** Correct
*   **- 3 pts** (a) Major error
*   **- 1 pt** (a) Minor error
*   **- 3 pts** (b) Major error
*   **- 1 pt** (b) Minor error
*   **- 3 pts** (c) Major error
*   **- 1 pt** (c) Minor error
*   **- 3 pts** (d) Major error
*   **- 1 pt** (d) Minor error
*   **- 3 pts** (e) Major error
*   **- 1 pt** (e) Minor error

**Question 2**
**Exponential (scale)** **25 / 25 pts**
*   **- 0 pts** Correct
*   **- 5 pts** Minor error
*   **- 10 pts** Major error
*   **- 25 pts** Missing

**Question 3**
**Exponential (rate)** **25 / 25 pts**
*   **- 0 pts** Correct
*   **- 5 pts** Minor error
*   **- 10 pts** Major error
*   **- 25 pts** Missing

### Visual Description
This is a Gradescope grading summary page. It displays the student's name, total score of 100/100, and a breakdown of points for the first three questions. Each question shows a list of rubric items with point deductions, all of which are zero for this student.

---

## Page 2
### Content
**Question 4**
**Poisson** **20 / 20 pts**
*   **- 0 pts** Correct
*   **- 2 pts** (a) Minor error
*   **- 5 pts** (a) Major error
*   **- 2 pts** (b) Minor error
*   **- 5 pts** (b) Major error

### Visual Description
Continuation of the Gradescope grading summary page, showing the score and rubric for Question 4. The student received full marks.

---

## Page 3
### Content
No questions assigned to the following page.

HW #6

### Visual Description
A mostly blank page with the handwritten text "HW #6" in the upper center. A small notification box at the top left says "No questions assigned to the following page."

---

## Page 4
### Content
Question assigned to the following page: 1

(a) PDF is $f(x|\theta) = \frac{1}{\theta} \mathbb{1}\{0 \le x \le \theta\}$
Let $M = \max_i X_i$. The likelihood is
$$L(\theta) = \theta^{-n} \mathbb{1}\{\theta \ge M\}$$

[Hand-drawn graph of $L(\theta)$ vs $\theta$. The x-axis has points $M$ and $10$. The curve is zero for $\theta < M$, has a vertical jump at $\theta = M$, and then follows a decreasing curve $\theta^{-n}$ for $\theta > M$.]

*   $L(\theta) = 0$ for all $\theta < M$
*   At $\theta = M$, likelihood jumps to $M^{-n}$
*   For $\theta > M$, it decreases as $\theta^{-n}$

---
(b) Because $L(\theta) = \theta^{-n}$ on $[M, \infty)$ is decreasing in $\theta$, the maximizer is the smallest allowable $\theta$.
$$\hat{\theta}_{MLE} = M = \max\{X_1, \dots, X_n\}$$

### Visual Description
Handwritten solution for parts (a) and (b) of Question 1. It includes the mathematical definition of the PDF and likelihood function, a plot of the likelihood function with annotations in red, and the derivation of the Maximum Likelihood Estimator (MLE).

---

## Page 5
### Content
Question assigned to the following page: 1

PROBLEM 1
Population Moment
For $X \sim \text{Unif}(0, \theta): E[X] = \theta/2$
$$\bar{x} = \frac{\hat{\theta}}{2} \implies \boxed{\hat{\theta}_{MOM} = 2\bar{x}}$$

(d) $\sqrt{n}(\bar{x} - \frac{\theta}{2}) \xrightarrow{d} N(0, \text{var}(X)), \quad \text{var}(X) = \frac{\theta^2}{12}$
Because $\hat{\theta}_{MOM}$ is a linear transform,
$$\sqrt{n}(\hat{\theta}_{MOM} - \theta) = 2\sqrt{n}(\bar{x} - \frac{\theta}{2}) \xrightarrow{d} N(0, 4 \cdot \frac{\theta^2}{12}) = N(0, \frac{\theta^2}{3})$$
So $\hat{\theta}_{MOM} \approx N(\theta, \frac{\theta^2}{3n})$

### Visual Description
Handwritten solution for parts (c) and (d) of Question 1. It shows the derivation of the Method of Moments (MOM) estimator and its asymptotic distribution using the Central Limit Theorem. The final MOM estimator formula is boxed.

---

## Page 6
### Content
Question assigned to the following page: 1

PROBLEM 1

[Three histograms showing the distribution of MLE $\hat{\theta} = \max(X_1, \dots, X_n)$ for $n=10, 100, 1000$ with $B=500$ simulations each. All histograms are strongly left-skewed, peaking near $\theta=10$.]

No, the distribution of the MLE does **NOT** tend to Gaussian as $n$ increases.

The histograms of $\hat{\theta}$ become more concentrated near 10 as $n$ increases, but they remain strongly left-skewed.

```python
# Simulation for part (e): MLE of theta for Uniform(0, theta) with theta=10
import numpy as np
import matplotlib.pyplot as plt
from math import sqrt, log

np.random.seed(42)

theta = 10.0
B = 500
n_values = [10, 100, 1000]

results = {}

for n in n_values:
    samples = np.random.uniform(0, theta, size=(B, n))
    theta_hats = samples.max(axis=1)
    results[n] = theta_hats

    # Histogram of theta_hat
    plt.figure(figsize=(6,4))
    plt.hist(theta_hats, bins=30, density=True, edgecolor='black')
    plt.title(f'Histogram of MLE theta = max(X1,...,Xn) (theta=10, n={n}, B={B})')
    plt.xlabel('theta_hat')
    plt.ylabel('Density')
    plt.tight_layout()
    plt.show()
```

### Visual Description
Handwritten explanation for part (e) of Question 1, stating that the MLE distribution is not Gaussian. It is supported by three generated histograms and the Python code used to create them.

---

## Page 7
### Content
Question assigned to the following page: 2

PROBLEM 2
Let $X_1, \dots, X_n \overset{iid}{\sim} \text{Exp}(\beta)$ with scale $\beta > 0$, i.e.
$f(x; \beta) = \beta^{-1} \exp(-x/\beta)$ for $x \ge 0$

1) **MLE for $\beta$**
$$L(\beta) = \prod_{i=1}^n \frac{1}{\beta} e^{-x_i/\beta} = \beta^{-n} \exp(-\frac{1}{\beta} \sum_i x_i)$$
$$l(\beta) = -n \log \beta - \frac{1}{\beta} \sum_i x_i$$
$$\frac{dl}{d\beta} = -\frac{n}{\beta} + \frac{\sum_i x_i}{\beta^2} = 0 \implies \boxed{\hat{\beta} = \bar{x}}$$
(And $l''(\hat{\beta}) = \frac{-n}{\beta^2} < 0$, so it's a max.)

2) **Fisher information**
$$\frac{\partial}{\partial \beta} \log f(x; \beta) = -\frac{1}{\beta} + \frac{x}{\beta^2}$$
$$\frac{\partial^2}{\partial \beta^2} \log f(x; \beta) = \frac{1}{\beta^2} - \frac{2x}{\beta^3}$$
$$I_1(\beta) = -E\left[\frac{\partial^2}{\partial \beta^2} \log f(x; \beta)\right] = -\left(\frac{1}{\beta^2} - \frac{2E[X]}{\beta^3}\right) = \frac{1}{\beta^2}$$
$$I_n(\beta) = n/\beta^2 \quad \text{(for } n \text{ i.i.d samples)}$$

### Visual Description
Handwritten solution for parts 1 and 2 of Question 2. It derives the MLE for the scale parameter of an exponential distribution and calculates the Fisher information. Key results are boxed or highlighted in yellow.

---

## Page 8
### Content
Question assigned to the following page: 2

PROBLEM 2
3) **Asymptotic Distribution of MLE**
General MLE Theory gives
$$\sqrt{n I_1(\beta)} (\hat{\beta} - \beta) \xrightarrow{d} N(0, 1) \implies$$
$$\sqrt{n} (\hat{\beta} - \beta) \xrightarrow{d} N(0, \beta^2)$$
Equivalently, $\hat{\beta} \overset{approx}{\sim} N(\beta, \beta^2/n)$

4) **Asymptotic valid $1-\alpha$ CI for $\beta$**
$$\hat{SE}(\hat{\beta}) = \frac{\hat{\beta}}{\sqrt{n}} \longrightarrow \boxed{\hat{\beta} \pm z_{\alpha/2} \frac{\hat{\beta}}{\sqrt{n}}}$$

5) **Explanation:** Because $\hat{\beta} = \bar{x}$ is just the sample mean of iid experiments with $E[X] = \beta$ and $\text{Var}(X) = \beta^2$. The CLT therefore gives $\sqrt{n}(\bar{x} - \beta) \implies N(0, \beta^2)$ matching MLE theory.

### Visual Description
Handwritten solution for parts 3, 4, and 5 of Question 2. It details the asymptotic distribution of the MLE, provides a formula for the confidence interval (boxed and highlighted in yellow), and explains how the result aligns with the Central Limit Theorem.
## Page 9
### Content
**PROBLEM 3**

1) MLE for $\lambda$
**Log likelihood**
$$L(\lambda) = \sum_{i=1}^n (\log \lambda - \lambda x_i) = n \log \lambda - \lambda \sum_{i=1}^n x_i$$

$$\frac{dl}{d\lambda} = \frac{n}{\lambda} - \sum_{i=1}^n x_i = 0 \implies \hat{\lambda} = \frac{n}{\sum_{i=1}^n x_i} = \frac{1}{\bar{x}}$$

$$\frac{d^2l}{d\lambda^2} = -\frac{n}{\lambda^2} < 0, \text{ so it's a max. } \checkmark$$

**Fisher Information**
For one observation:
$$\log f(x; \lambda) = \log \lambda - \lambda x \quad \frac{\partial}{\partial \lambda} = \frac{1}{\lambda} - x$$

Per-obs Fisher information is
$$\frac{\partial^2}{\partial \lambda^2} = -\frac{1}{\lambda^2}$$
$$I_1(\lambda) = -E\left[\frac{\partial^2}{\partial \lambda^2} \log f(x; \lambda)\right] = 1/\lambda^2$$

For $n$ iid samples, $I_n(\lambda) = n I_1(\lambda) = \frac{n}{\lambda^2}$

### Visual Description
Handwritten notes on a light yellow background. Key results like the MLE estimator $\hat{\lambda} = 1/\bar{x}$ and the Fisher information values $I_1(\lambda)$ and $I_n(\lambda)$ are highlighted in yellow.

---
## Page 10
### Content
**PROBLEM 3**

3) Asymptotic distribution of $\hat{\lambda}$
$$\sqrt{n I_1(\lambda)} (\hat{\lambda} - \lambda) \xrightarrow{d} N(0,1)$$
or equivalently,
$$\hat{\lambda} \approx N\left(\lambda, \frac{1}{n I_1(\lambda)}\right) = N\left(\lambda, \frac{\lambda^2}{n}\right)$$

4) Asymptotically valid $1-\alpha$ CI for $\lambda$
$$\hat{\lambda} \pm z_{\alpha/2} \frac{\hat{\lambda}}{\sqrt{n}}$$
since $\hat{se}(\hat{\lambda}) = \frac{\hat{\lambda}}{\sqrt{n}}$

5) $\bar{x}$ has mean $1/\lambda$ and var $1/(n\lambda^2)$.
By CLT, $\bar{x} \approx N(1/\lambda, 1/(n\lambda^2))$. Since $\hat{\lambda} = 1/\bar{x} = g(\bar{x})$ with $g(x) = 1/x$, the delta method gives $var(\hat{\lambda}) = (g'(1/\lambda))^2 \cdot var(\bar{x}) = \lambda^4 \cdot (1/(n\lambda^2)) = \lambda^2/n$, which matches the MLE.

### Visual Description
Handwritten notes continuing from the previous page. The page is divided into sections by horizontal lines.

---
## Page 11
### Content
**PROBLEM 4**

(a) $E[x] = \lambda$.
$$\hat{\lambda}_{MOM} = \bar{x} = \frac{1}{n} \sum_{i=1}^n x_i$$

$$L(\lambda) = \prod_{i=1}^n \frac{e^{-\lambda} \lambda^{x_i}}{x_i!} = e^{-n\lambda} \lambda^{\sum x_i} \prod_{i=1}^n \frac{1}{x_i!}$$

$$l(\lambda) = -n\lambda + S \log \lambda - \sum \log(x_i!), \text{ where } S = \sum x_i$$

$$l'(\lambda) = -n + \frac{S}{\lambda} = 0 \implies \hat{\lambda}_{MLE} = \frac{S}{n} = \bar{x}$$

So, $MOM = MLE = \bar{x}$

**Fisher Information**
$$\frac{\partial}{\partial \lambda} \log f(x; \lambda) = -1 + \frac{x}{\lambda} \quad \frac{\partial^2}{\partial \lambda^2} \log f(x; \lambda) = -\frac{x}{\lambda^2}$$

Then
$$I_1(\lambda) = -E\left[\frac{\partial^2}{\partial \lambda^2} \log f(x; \lambda)\right] = -\left(-\frac{E[x]}{\lambda^2}\right) = \frac{1}{\lambda}$$

For $n$ iid samples, $I_n(\lambda) = n/\lambda$

### Visual Description
Handwritten notes on a light yellow background. The conclusion $MOM = MLE = \bar{x}$ and the Fisher information $I_1(\lambda) = 1/\lambda$ are highlighted in yellow.

---
## Page 12
### Content
**PROBLEM 4**

$\hat{\lambda}_1 = \bar{x}, E[\bar{x}] = \lambda, Var(\bar{x}) = \frac{\lambda}{n}$

unbiased sample variance
$$\hat{\lambda}_2 = S^2 = \frac{1}{n-1} \sum_{i=1}^n (x_i - \bar{x})^2, E[S^2] = \lambda$$

$$Var(S^2) = \frac{1}{n} \left(\mu_4 - \frac{n-3}{n-1} \sigma^4\right)$$

$\sigma^2 = Var(X) = \lambda$
$\mu_4 = E[(X-\lambda)^4] = \lambda + 3\lambda^2$

$$Var(S^2) = \frac{1}{n} \left[(\lambda + 3\lambda^2) - \frac{n-3}{n-1} \lambda^2\right]$$
$$= \frac{\lambda}{n} + \frac{1}{n} \left[3 - \frac{n-3}{n-1}\right] \lambda^2$$
$$= \frac{\lambda}{n} + \frac{1}{n} \cdot \frac{3(n-1) - (n-3)}{n-1} \lambda^2$$
$$= \frac{\lambda}{n} + \frac{1}{n} \cdot \frac{3n-3-n+3}{n-1} \lambda^2$$
$$= \frac{\lambda}{n} + \frac{1}{n} \cdot \frac{2n}{n-1} \lambda^2$$
$$= \frac{\lambda}{n} + \frac{2\lambda^2}{n-1} > Var(\bar{x}) \text{ for } n \ge 2, \lambda > 0$$

### Visual Description
Handwritten derivation showing that the variance of the sample variance estimator is greater than the variance of the sample mean estimator for a Poisson distribution.

---
## Page 13
### Content
**PROBLEM 4**

this result aligns with the Cramer-Rao bound that
$$Var(\hat{\lambda}) \ge \frac{1}{I_n(\lambda)} = \frac{\lambda}{n}$$

The MLE attains this bound for the poisson model, which means it is efficient.

Any other unbiased estimator must have variance at least as large.

### Visual Description
Handwritten notes concluding the comparison of estimators using the Cramer-Rao lower bound.

---
## Page 14
### Content
[Blank Page]
### Visual Description
The page is completely blank.
