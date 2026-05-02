# gradescope-03-homework-8-graded-copy

Source: `materials/archive/probability-and-statistics-36-700-cmu/gradescope-graded-copies/gradescope-03-homework-8-graded-copy.pdf`
Duplicate equivalents: `gradescope-03-homework-8-graded-copy.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `MIXED`
Pages: 28

## Page 1
### Content
**Homework 8**
**Graded**

**Student**
Saahith Janapati

**Total Points**
100 / 100 pts

**Question 1**
**Geometric estimation** **20 / 20 pts**

*   **- 0 pts** Correct
*   **- 1 pt** (a) Minor error
*   **- 2 pts** (a) Major error
*   **- 1 pt** (b) Minor error
*   **- 2 pts** (b) Major error
*   **- 1 pt** (c) Minor error
*   **- 2 pts** (c) Major error
*   **- 1 pt** (d) Minor error
*   **- 2 pts** (d) Major error
*   **- 1 pt** (e) Minor error
*   **- 2 pts** (e) Major error
*   **- 1 pt** (f) Minor error
*   **- 2 pts** (f) Major error
*   **- 2 pts** (g) incorrect/missing
*   **- 20 pts** Missing

### Visual Description
This is a screenshot of a Gradescope grading interface. It shows the student's name, total score, and the rubric for Question 1, "Geometric estimation," which has been awarded full points.

---

## Page 2
### Content
**Question 2**
**Bernoulli-Beta** **15 / 15 pts**

*   **- 0 pts** Correct
*   **- 1 pt** (a) Minor error
*   **- 2 pts** (a) Major error
*   **- 1 pt** (b) Minor error
*   **- 2 pts** (b) Major error
*   **- 1 pt** (c) Minor error
*   **- 2 pts** (c) Major error
*   **- 1 pt** (d) Minor error
*   **- 2 pts** (d) Major error
*   **- 15 pts** Missing

**Question 3**
**Poisson Wald Test** **10 / 10 pts**

*   **- 0 pts** Correct
*   **- 2 pts** Minor error
*   **- 4 pts** Major error
*   **- 10 pts** Missing

### Visual Description
This is a continuation of the Gradescope grading interface. It shows the rubrics and scores for Question 2, "Bernoulli-Beta," and Question 3, "Poisson Wald Test," both of which received full marks.

---

## Page 3
### Content
**Question 4**
**Type II Error and Power** **15 / 15 pts**

*   **- 0 pts** (a) $\sqrt{n}\bar{X}_n$
    (b)
    (i) 0.05
    (ii) A. 0.9976
    B. 1
    C. power
    (c)
    (i) 0.95
    (ii) A. 0.0023
    B. 0
    C. Type 2 error
*   **- 1 pt** (a) Minor error
*   **- 2 pts** (a) Major error
*   **- 1 pt** (b) Minor error
*   **- 2 pts** (b) Major error
*   **- 1 pt** (c) Minor error
*   **- 2 pts** (c) Major error
*   **- 15 pts** Missing

**Question 5**
**Test Thresholds** **10 / 10 pts**

*   **- 0 pts** Correct
*   **- 2 pts** Minor error
*   **- 4 pts** Major error

**Question 6**
**p-value simulation** **20 / 20 pts**

*   **- 0 pts** Correct
*   **- 1.5 pts** (a) Minor error
*   **- 3 pts** (a) Major error
*   **- 1.5 pts** (b) Minor error
*   **- 3 pts** (b) Major error
*   **- 1.5 pts** (c) Minor error
*   **- 3 pts** (c) Major error
*   **- 2 pts** Plots not shown
*   **- 4 pts** Missing code
*   **- 20 pts** Missing

### Visual Description
This page continues the Gradescope grading interface, showing rubrics and full scores for Question 4 ("Type II Error and Power"), Question 5 ("Test Thresholds"), and Question 6 ("p-value simulation"). Question 4's rubric includes specific correct answers for sub-parts.

---

## Page 4
### Content
**Question 7**
**p-value distribution** **10 / 10 pts**

*   **- 0 pts** Correct
*   **- 1 pt** (a) Minor error
*   **- 2 pts** (a) Major error
*   **- 1 pt** (b) Minor error
*   **- 2 pts** (b) Major error
*   **- 10 pts** Missing

### Visual Description
This page shows the final part of the Gradescope grading summary for Question 7, "p-value distribution," which also received full marks.

---

## Page 5
### Content
No questions assigned to the following page.

Homework 8

### Visual Description
A handwritten title "Homework 8" is written at the top of a light yellow page. A Gradescope banner at the top left states "No questions assigned to the following page."

---

## Page 6
### Content
Question assigned to the following page: 1

Geometric RV,
a) $P(X=k) = p(1-p)^{k-1}$
$$E[X] = \mu = \frac{1}{p} \quad Var[X] = \frac{1-p}{p^2}$$

$$\frac{1}{p} = \frac{1}{n} \sum_{i=1}^n X_i \quad \text{(moment 1)}$$

$$\boxed{\frac{n}{\sum_{i=1}^n X_i} = \hat{p}}$$

(b) Compute MLE of $p$
$$f(x_i; p) = p(1-p)^{x_i-1}$$
$$L(p) = \prod_{i=1}^n p(1-p)^{x_i-1} = p^n (1-p)^{\sum x_i - n}$$
$$l(p) = n \log(p) + \left(\sum x_i - n\right) \ln(1-p)$$
$$l'(p) = \frac{n}{p} - \frac{\sum x_i - n}{1-p}$$

### Visual Description
Handwritten mathematical derivation on a light yellow background. It covers the Method of Moments and the start of the Maximum Likelihood Estimation (MLE) for a Geometric random variable.

---

## Page 7
### Content
Question assigned to the following page: 1

$$\frac{n(1-p) - p(\sum x_i - n)}{p(1-p)} = 0$$
$$\frac{n - np - p\sum x_i + pn}{p(1-p)} = 0$$
$$\frac{n - p\sum x_i}{p(1-p)} = 0 \implies n = p \sum x_i$$
$$\boxed{\frac{n}{\sum x_i} = \hat{p}_{MLE}}$$

verifying
$$l'(p) = \frac{n}{p} - \frac{\sum x_i - n}{1-p} = np^{-1} - (\sum x_i - n)(1-p)^{-1}$$
$$l''(p) = -np^{-2} - (\sum x_i - n)(1-p)^{-2}$$
$$= -\frac{n}{p^2} - \frac{(\sum x_i - n)}{(1-p)^2} < 0$$

So, $\hat{p}_{MLE}$ is a maximum. $\checkmark$

### Visual Description
Handwritten mathematical derivation continuing from the previous page. It completes the MLE derivation for $p$ and verifies that the result is a maximum using the second derivative test.

---

## Page 8
### Content
Question assigned to the following page: 1

$$\pi(p) = \frac{1}{B(\alpha, \beta)} p^{\alpha-1} (1-p)^{\beta-1}, \quad 0 < p < 1$$
where $B(\alpha, \beta) = \frac{\Gamma(\alpha)\Gamma(\beta)}{\Gamma(\alpha+\beta)}$

$$E[P] = \int_0^1 p \pi(p) dp = \frac{1}{B(\alpha, \beta)} \int_0^1 p^\alpha (1-p)^{\beta-1} dp = \frac{B(\alpha+1, \beta)}{B(\alpha, \beta)}$$

Using the Beta-Gamma identity:
$$B(\alpha, \beta) = \frac{\Gamma(\alpha)\Gamma(\beta)}{\Gamma(\alpha+\beta)}$$
$$\frac{B(\alpha+1, \beta)}{B(\alpha, \beta)} = \frac{\Gamma(\alpha+1)\Gamma(\beta)}{\Gamma(\alpha+\beta+1)} \cdot \frac{\Gamma(\alpha+\beta)}{\Gamma(\alpha)\Gamma(\beta)} = \frac{\alpha}{\alpha+\beta}$$

So, $E[P] = \frac{\alpha}{\alpha+\beta}$

### Visual Description
Handwritten mathematical derivation on a light yellow background. It calculates the expected value of a Beta-distributed random variable using the Beta-Gamma identity.

---
## Page 9
### Content
$(1-p)^{\sum_{i=1}^n X_i - n}$

$$\pi(p) = \frac{1}{B(\alpha, \beta)} p^{\alpha-1} (1-p)^{\beta-1}, \quad 0 < p < 1$$

$$\pi(p|x) \propto L(p|x) \pi(p)$$
$$\pi(p|x) \propto p^n (1-p)^{\sum_{i=1}^n x_i - n} \times p^{\alpha-1} (1-p)^{\beta-1}$$
$$= p^{\alpha+n-1} (1-p)^{\beta + \sum_{i=1}^n x_i - n - 1}$$

$$p | X_1, \dots, X_n \sim \text{Beta}(\alpha + n, \beta + \sum_{i=1}^n x_i - n)$$

---

$$p | X \sim \text{Beta}(\alpha + n, \beta + \sum_{i=1}^n x_i - n)$$
$$E[p|X] = \frac{\alpha+n}{\alpha+\beta+\sum_{i=1}^n x_i}$$

$$E[p|X] = \underbrace{\frac{\alpha+\beta}{\alpha+\beta+\sum_{i=1}^n x_i}}_{w} \cdot \underbrace{\frac{\alpha}{\alpha+\beta}}_{\text{prior mean}} + \underbrace{\frac{\sum_{i=1}^n x_i}{\alpha+\beta+\sum_{i=1}^n x_i}}_{1-w} \cdot \underbrace{\frac{n}{\sum_{i=1}^n x_i}}_{MLE = \frac{1}{\bar{x}}}$$

### Visual Description
Handwritten notes on a light yellow background. The page shows the derivation of a posterior distribution for a parameter $p$ using a Beta prior and a likelihood (likely Geometric based on the exponents). The final result is boxed. Below a horizontal line, the posterior mean is calculated and decomposed into a weighted average of the prior mean and the Maximum Likelihood Estimator (MLE).

---

## Page 10
### Content
$n \to \infty$ so $w \to 0$.

So, $E[p|X] \to \hat{p}_{MLE} \to p$. So the posterior is consistent.

---

(f) Under squared error, the Bayes' Rule is the posterior mean, so
$$\hat{p}_{Bayes} = E[p|X] = \frac{\alpha+n}{\alpha+\beta+\sum x_i}$$

---

(g) A posterior interval for $p$ is any set $C$ with $Pr(p \in C | X) = 1 - \alpha$, meaning that given the observed data, there's a $1-\alpha$ probability that $p$ lies within $C(X)$.

A confidence interval is a frequentist statement:
$$P_p(p \in C(X)) = 1 - \alpha,$$
meaning that over many samples, the procedure $C(X)$ will contain true $p$ $100(1-\alpha)\%$ of the time.

### Visual Description
Handwritten notes continuing from the previous page. It discusses the consistency of the posterior mean as $n$ approaches infinity. It then defines the Bayes estimator under squared error loss and provides definitions for posterior intervals (Bayesian) versus confidence intervals (frequentist).

---

## Page 11
### Content
...s express uncertainty about the parameter given data.

Confidence intervals guarantee long-run coverage across samples.

HPD intervals are not necessarily valid confidence intervals, since they don't ensure frequentist coverage.

### Visual Description
Text-only slide. Handwritten notes continuing the comparison between Bayesian intervals (like HPD) and frequentist confidence intervals.

---

## Page 12
### Content
$X_i \sim \text{Bin}(n, p)$

(a) **Bayes estimator**
$$p | X_{1:n} \sim \text{Beta}(1+S, b+n-S)$$
Bayes estimator under squared error is the posterior mean:
$$\hat{p}_B = E[p | X_{1:n}] = \frac{1+S}{b+n+1}$$

---

(b) **Risk $R(p)$ of the Bayes estimator (MSE)**
$$\hat{p}_B = \frac{1}{b+n+1} (S+1)$$
Because $S \sim \text{Bin}(n, p)$
$$E_p[S] = np, \quad Var_p(S) = np(1-p)$$

**Bias**
$$E_p[\hat{p}_B] = \frac{np+1}{b+n+1}, \quad Bias_p(\hat{p}_B) = E_p[\hat{p}_B] - p = \frac{1-(b+1)p}{b+n+1}$$

**Variance**
$$Var_p(\hat{p}_B) = \frac{Var_p(S)}{(b+n+1)^2} = \frac{np(1-p)}{(b+n+1)^2}$$

### Visual Description
Handwritten notes for a new problem involving a Binomial distribution. Part (a) derives the Bayes estimator (posterior mean) for $p$. Part (b) begins calculating the risk (Mean Squared Error) by finding the bias and variance of the estimator.

---

## Page 13
### Content
$$R(p) = \frac{np(1-p)}{(b+n+1)^2} + \frac{(1-(b+1)p)^2}{(b+n+1)^2} = \frac{np(1-p) + (1-(b+1)p)^2}{(b+n+1)^2}$$

---

(c) $$R(1) = \frac{n \cdot 1 \cdot 0 + (1 - (b+1) \cdot 1)^2}{(b+n+1)^2} = \frac{b^2}{(b+n+1)^2}$$

The minimax risk (under squared error for Bernoulli mean with $n$ samples) is
$$\inf_{\hat{p}} \sup_{p \in [0,1]} E_p(\hat{p}-p)^2 = \frac{1}{4n}$$

Minimax estimator: risk at $p=1$ is $\le \frac{1}{4n}$

As $b \to \infty, R(1) = \frac{b^2}{(b+n+1)^2} \to 1$
which is worse than $O(1/n)$ minimax risk.

### Visual Description
Handwritten notes continuing the risk analysis. It combines variance and squared bias to get the total risk $R(p)$. Part (c) evaluates the risk at $p=1$ and compares it to the known minimax risk for a Bernoulli mean, showing that for large $b$, the Bayes estimator performs poorly compared to the minimax risk.
## Page 17
### Content
Question assigned to the following page: 4

$X_n \overset{iid}{\sim} N(0, 1)$, $n=20$.
Test $H_0: \theta = 0$ vs. $H_1: \theta < 0$

(a) $Z = \frac{\sqrt{n}(\bar{X} - 0)}{1} = \sqrt{n}\bar{X}$
under $H_0$, $Z \sim N(0, 1)$.
left tailed $\alpha = 0.05 \implies$ critical value $z_{0.05} = -1.645$

Rejection region:
$\boxed{Z < -1.645} \iff \bar{X} < \frac{-1.645}{\sqrt{20}} \approx -0.3678$

(b) (i) if $H_0$ is true, rejecting is a type I error.
$P(\text{reject } H_0 | H_0) = \alpha = \boxed{0.05}$

(ii) if $H_1$ is true, rejecting is correct, this probability is the power at the true $\theta$.
Under $\theta$, $Z = \sqrt{n}\bar{X} \sim N(\mu, 1)$ with $\mu = \sqrt{n}\theta$
$\text{Power}(\theta) = P(Z < -1.645 | \theta) = \Phi(-1.645 - \sqrt{n}\theta)$
A. $\theta = -1$: $\Phi(-1.645 - 4.4721(-1)) = \Phi(2.827) \approx \boxed{0.9977}$
B. $\theta = -5$: $\Phi(-1.645 - 4.4721(-5)) = \Phi(20.72) \approx \boxed{1.000}$
C. The power of the test

### Visual Description
Handwritten notes on a light yellow background. The page contains mathematical derivations for a hypothesis test, including the test statistic, rejection region, and power calculations. Some final numerical results are boxed.

---
## Page 18
### Content
Question assigned to the following page: 4

(i) if $H_0$ is true, retaining is correct.
$P(\text{retain } H_0 | H_0) = 1 - \alpha = 0.95$

(ii) If $H_1$ is true, retaining is wrong; this is the Type II error probability $\beta(\theta)$:
$\beta(\theta) = 1 - \text{Power}(\theta) = 1 - \Phi(-1.645 - \sqrt{n}\theta)$
A. $\theta = -1$: $\beta = 1 - 0.9977 \approx 0.00235$
B. $\theta = -5$: $\beta \approx 0.000$
C. Type II error probability $\beta$

### Visual Description
Text-only slide. Handwritten notes continuing the calculations from the previous page, specifically focusing on the probability of retaining the null hypothesis and Type II error.

---
## Page 19
### Content
Question assigned to the following page: 5

The sample $\bar{X} = \frac{1}{n} \sum_{i=1}^n X_i \sim N(\theta, 1/n)$
$H_0: \theta \le 1$ vs $H_1: \theta > 1$

We reject $H_0$ when $\bar{X} \ge t$.
$Pr_{\theta=1}(\bar{X} \ge t) = \alpha$

Under $\theta=1$, $\bar{X} \sim N(1, 1/n)$. Standardize,
$Pr(Z \ge \frac{t-1}{1/\sqrt{n}}) = \alpha$, $Z \sim N(0, 1)$

Thus $\frac{t-1}{1/\sqrt{n}} = z_{1-\alpha} \implies \boxed{t_\alpha = 1 + \frac{z_{1-\alpha}}{\sqrt{n}}}$
So, reject $H_0$ if $\bar{X} \ge 1 + \frac{z_{1-\alpha}}{\sqrt{n}}$

$\beta(\theta) = Pr_\theta(\bar{X} \ge t_\alpha) = Pr(Z \ge \frac{t_\alpha - \theta}{1/\sqrt{n}}) = 1 - \Phi(\sqrt{n}(t_\alpha - \theta))$.
$\sqrt{n}(t_\alpha - \theta) = \sqrt{n}(1 - \theta) + z_{1-\alpha}$
Hence,
$\boxed{\beta(\theta) = 1 - \Phi(z_{1-\alpha} + \sqrt{n}(1 - \theta)) = \Phi(\sqrt{n}(\theta - 1) - z_{1-\alpha})}$

### Visual Description
Handwritten notes on a light yellow background. The page shows the derivation of a rejection threshold $t_\alpha$ and a power function (labeled $\beta(\theta)$) for a one-sided hypothesis test. Key formulas are boxed.

---
## Page 20
### Content
Question assigned to the following page: 6

$H_1: \theta > 0$
MLE of $\theta$ is $\hat{\theta} = \bar{X}$
$Z \equiv \frac{\hat{\theta} - \theta_0}{SE_{H_0}(\hat{\theta})} = \frac{\bar{X} - 0}{1/\sqrt{n}} = \sqrt{n}\bar{X} \sim N(0, 1)$

right-tail p-value is $p = 1 - \Phi(z_{obs})$

(a) Wald test statistic
$Z = \sqrt{n}\bar{X}$
Reject $H_0$ for large positive values of $Z$ i.e.
Reject $H_0$ if $Z > c_\alpha$ equivalently $\bar{X} > \frac{c_\alpha}{\sqrt{n}}$
where $c_\alpha$ is standard normal $(1-\alpha)$ quantile

### Visual Description
Text-only slide. Handwritten notes defining the MLE, the Wald test statistic, and the rejection rule for a right-tailed test.

---
## Page 21
### Content
Question assigned to the following page: 6

$p = 0.9188$

(c) The histogram appears roughly flat.

![Histogram of P-values under H0](histogram_h0.png)

(d) $P(p < 0.05) = 0.05$
$P(0.05 < p < 0.10) = 0.05$
$P(p > 0.20) = 1 - 0.20 = 0.80$

(e) One sample mean: $Z = 4.1998$
$p = 0.000013$

### Visual Description
Handwritten notes accompanied by a blue histogram titled "P-values under H0". The histogram shows a roughly uniform distribution of p-values between 0 and 1, with counts on the y-axis ranging from 0 to 16.

---
## Page 22
### Content
Question assigned to the following page: 6

![Histogram of P-values under H1](histogram_h1.png)

The histogram is heavily skewed towards zero.

(g) $p < \alpha$ iff $Z > c_\alpha$. Under $H_1$, $Z \sim N(\mu, 1)$ with $\mu = \sqrt{10}(\theta_1 - \theta_0) = \sqrt{10} \approx 3.1623$

Prob. $p < 5\%$ (power at $\alpha = 0.05$)
$c_{0.05} = z_{0.95} = 1.6449$
$P(p < 0.05) = P(Z > 1.6449) = 1 - \Phi(1.6449 - \mu)$
$= 1 - \Phi(1.6449 - 3.1623) = \Phi(1.5174) = 0.935$

$P(p > 20\%)$
$p > 0.20$ iff $Z \le z_{0.80} = 0.8416$

### Visual Description
Handwritten notes accompanied by a blue histogram titled "P-values under H1". The histogram shows a distribution heavily concentrated near zero, with the first bin reaching a count of over 160. The text calculates the power of the test and the probability of a large p-value under the alternative hypothesis.

---
## Page 23
### Content
Question assigned to the following page: 6

$\Phi(0.8416 - \mu) = \Phi(0.8416 - 3.1623) = \Phi(-2.3207) \approx 0.010$

With $n=10$ and $\theta_1 = 1$, the test has $\approx 93.5\%$ power at $5\%$ and we see $p > 0.20$ with $1\%$ rate.

(h) If $\theta_1$ is larger, then $\mu = \sqrt{n}(\theta_1 - \theta_0)$ is larger. The distribution of $Z$ shifts further right, so
* more mass crosses the critical value $c_\alpha$
* p-values concentrate even more near 0 and
* Power $P(p < \alpha)$ increases

If $\theta_1$ is smaller, $\mu$ is smaller. $Z$ distribution moves left toward 0.
* p-values become less concentrated near 0.
* power decreases
* $P(p > 0.20)$ increases

### Visual Description
Text-only slide. Handwritten notes discussing how the distribution of the test statistic and p-values changes as the true parameter value $\theta_1$ varies. It uses bullet points to list the effects.

---
## Page 24
### Content
Question assigned to the following page: 6

(i) Yes, the distribution of p-values depends on the true $\theta$.

* Under $H_0$, the p-values are Uniform(0,1), so small p-values occur only $\alpha\%$ of time.
* Under $H_1$, the p-values are smaller and chance of $p < 0.05$ can be very high.

So, observing a small p-value is evidence against $H_0$ because such outcomes are rare if $H_0$ were true, but common if $H_1$ is true.

### Visual Description
Text-only slide. Handwritten notes summarizing the logic of p-values as evidence against the null hypothesis based on their distribution under $H_0$ versus $H_1$.
## Page 25
### Content
Question assigned to the following page: 6

```python
# wald_pvalues_sim.py
import numpy as np
from scipy.stats import norm
import matplotlib.pyplot as plt

rng = np.random.default_rng(42)

def wald_stat_and_pvalue(sample, theta0=0.0):
    xbar = np.mean(sample)
    n = len(sample)
    z = np.sqrt(n) * (xbar - theta0)    # variance known = 1
    p = 1 - norm.cdf(z)                # one-sided (right tail)
    return z, p

# Part (b): one draw under H0
n = 10
theta0 = 0.0
sample_H0 = rng.normal(loc=theta0, scale=1.0, size=n)
z_b, p_b = wald_stat_and_pvalue(sample_H0, theta0)
print("[b] One-sample under H0: Z = %.4f, p = %.4f" % (z_b, p_b))

# Part (c): 200 p-values under H0
B = 200
pvals_H0 = np.empty(B)
for b in range(B):
    s = rng.normal(loc=theta0, scale=1.0, size=n)
    _, p = wald_stat_and_pvalue(s, theta0)
    pvals_H0[b] = p

print("[c] Under H0: mean p = %.3f, fraction p<0.05 = %.3f "
      % (np.mean(pvals_H0), np.mean(pvals_H0 < 0.05)))

# Histogram under H0
plt.figure()
plt.hist(pvals_H0, bins=20, edgecolor="k")
plt.title("P-values under H0")
plt.xlabel("p-value"); plt.ylabel("count")

# Part (d): empirical checks under H0
print("[d] Under H0: P(p<0.05) ~ %.3f ; P(0.05<=p<=0.10) ~ %.3f ; P(p>0.20) ~ %.3f"
      % (np.mean(pvals_H0 < 0.05),
         np.mean((pvals_H0 >= 0.05) & (pvals_H0 <= 0.10)),
         np.mean(pvals_H0 > 0.20)))

# Part (e): one draw under H1
theta1 = 1.0
sample_H1 = rng.normal(loc=theta1, scale=1.0, size=n)
z_e, p_e = wald_stat_and_pvalue(sample_H1, theta0)
print("[e] One-sample under H1: Z = %.4f, p (computed under H0) = %.6f" % (z_e, p_e))

# Part (f): 200 p-values under H1
pvals_H1 = np.empty(B)
for b in range(B):
    s = rng.normal(loc=theta1, scale=1.0, size=n)
    _, p = wald_stat_and_pvalue(s, theta0)
    pvals_H1[b] = p

print("[f] Under H1: mean p = %.3f, fraction p<0.05 = %.3f, fraction p>0.20 = %.3f"
      % (np.mean(pvals_H1),
         np.mean(pvals_H1 < 0.05),
         np.mean(pvals_H1 > 0.20)))

# Histogram under H1
plt.figure()
plt.hist(pvals_H1, bins=20, edgecolor="k")
plt.title("P-values under H1")
plt.xlabel("p-value"); plt.ylabel("count")

plt.show()
```

### Visual Description
A screenshot of a code editor with a dark background displaying Python code for a simulation of Wald statistics and p-values. The code includes imports, a function definition, and several parts (b through f) that perform simulations and plot histograms.

---

## Page 26
### Content
Question assigned to the following page: 7

(a) Let $T$ be a test statistic whose distribution under $H_0$ is continuous with CDF $F_0(t) = Pr_{H_0}(T \le t)$.

$R_\alpha = \{ t \ge t_\alpha \}$, where $Pr_{H_0}(T \ge t_\alpha) = \alpha$.

Because $F_0$ is continuous and strictly increasing, $t_\alpha = F_0^{-1}(1 - \alpha)$. A p-value for the observed statistic $\hat{t}$ is $p(\hat{t}) = \inf \{ \alpha : \hat{t} \in R_\alpha \} = \inf \{ \alpha : \hat{t} \ge t_\alpha \}$.

$\hat{t} \ge t_\alpha \iff \hat{t} \ge F_0^{-1}(1 - \alpha) \iff F_0(\hat{t}) \ge 1 - \alpha \iff 1 - F_0(\hat{t}) \le \alpha$.

$p(\hat{t}) = 1 - F_0(\hat{t})$

$U := p(T) = 1 - F_0(T)$ with $T \sim F_0$. For any $u \in [0, 1]$, $Pr(U \le u) = Pr(1 - F_0(T) \le u) = Pr(F_0(T) \ge 1 - u) = Pr(T \ge F_0^{-1}(1 - u))$.

$Pr(T \ge F_0^{-1}(1 - u)) = 1 - F_0(F_0^{-1}(1 - u)) = 1 - (1 - u) = u$

Thus $Pr(U \le u) = u$ for all $u \in [0, 1]$,
$p(T) \sim \text{Uniform}(0, 1)$ under $H_0$.

### Visual Description
Handwritten mathematical derivation on a light yellow background. The text derives the distribution of a p-value under the null hypothesis, showing it follows a Uniform(0, 1) distribution.

---

## Page 27
### Content
Question assigned to the following page: 7

... reject $H_0$ when $p \le \alpha$, then the Type I error (size) is

$Pr_{H_0}(\text{reject}) = Pr_{H_0}(p \le \alpha) = Pr_{H_0}(\text{Uniform}(0, 1) \le \alpha) = \alpha$

So, the test has exact level $\alpha$.

### Visual Description
Handwritten notes continuing from the previous page on a light yellow background. It concludes the proof that a test based on p-values has an exact significance level $\alpha$.

---

## Page 28
### Content
[Blank Page]
### Visual Description
Blank white page.

---
