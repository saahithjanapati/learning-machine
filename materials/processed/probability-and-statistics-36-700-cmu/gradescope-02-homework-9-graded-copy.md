# gradescope-02-homework-9-graded-copy

Source: `materials/archive/probability-and-statistics-36-700-cmu/gradescope-graded-copies/gradescope-02-homework-9-graded-copy.pdf`
Duplicate equivalents: `gradescope-02-homework-9-graded-copy.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `MIXED`
Pages: 11

## Page 1
### Content
**Homework 9**
**Graded**

**Student**
Saahith Janapati

**Total Points**
100 / 100 pts

**Question 1**
**Power of the Wald Test** 20 / 20 pts
*   $\checkmark$ - 0 pts Correct
*   - 2 pts (a) Minor error
*   - 4 pts (a) Major error
*   - 2 pts (b) Minor error
*   - 4 pts (b) Major error
*   - 20 pts Missing

**Question 2**
**Asymptotic distribution of the LRT** 15 / 15 pts
*   $\checkmark$ - 0 pts Correct
*   - 4 pts Minor error
*   - 8 pts Major error
*   - 15 pts Missing

**Question 3**
**Equivalence between hypothesis tests and confidence sets** 15 / 15 pts
*   $\checkmark$ - 0 pts Correct
*   - 4 pts Minor error
*   - 8 pts Major error
*   - 15 pts Missing

### Visual Description
This is a summary page from a grading platform (Gradescope). It shows the student's name, total score (100/100), and a breakdown of the first three questions, all of which received full marks. Each question has a list of possible point deductions that were not applied.

---
## Page 2
### Content
**Question 4**
**Counting degrees of freedom** 15 / 15 pts
*   $\checkmark$ - 0 pts Correct
*   - 1 pt (a) Minor error
*   - 2 pts (a) Major error
*   - 1 pt (b) Minor error
*   - 2 pts (b) Major error
*   - 1 pt (c) Minor error
*   - 2 pts (c) Major error
*   - 1 pt (d) Minor error
*   - 2 pts (d) Major error
*   - 1 pt (e) Minor error
*   - 2 pts (e) Major error
*   - 1 pt (f) Minor error
*   - 2 pts (f) Major error
*   - 1 pt (g) Minor error
*   - 2 pts (g) Major error
*   - 15 pts Missing

**Question 5**
**Normal LRT** 15 / 15 pts
*   $\checkmark$ - 0 pts Correct
*   - 3.5 pts Minor error
*   - 7 pts Major error
*   - 15 pts Missing

**Question 6**
**Pareto GLRT** 20 / 20 pts
*   $\checkmark$ - 0 pts Correct
*   - 5 pts Minor error
*   - 10 pts Major error
*   - 20 pts Missing

### Visual Description
This is the second page of the grading summary, showing the scores for questions 4, 5, and 6. All questions received full marks. Similar to the first page, it lists potential point deductions for various types of errors that were not incurred.

---
## Page 3
### Content
Question assigned to the following page: 1

# Homework 9
Saahith Janapati
November 2025

## Problem 1: Power of the Wald Test
(a) **Prove Theorem 10.6 in Wasserman page 153.**
Let the null hypothesis be $H_0 : \theta = \theta_0$ and the true parameter value be $\theta_* \neq \theta_0$. The Wald test statistic is defined as:
$$W = \frac{\hat{\theta} - \theta_0}{\widehat{se}}$$
We reject the null hypothesis if $|W| > z_{\alpha/2}$. The power function $\beta(\theta_*)$ is the probability of rejecting $H_0$ when the true parameter is $\theta_*$:
$$\beta(\theta_*) = P_{\theta_*}(|W| > z_{\alpha/2}) = P_{\theta_*}(W > z_{\alpha/2}) + P_{\theta_*}(W < -z_{\alpha/2})$$
Under the assumption that $\hat{\theta}$ is asymptotically normal, we have $\hat{\theta} \approx N(\theta_*, \widehat{se}^2)$. Therefore, $Z = \frac{\hat{\theta} - \theta_*}{\widehat{se}}$ follows a standard normal distribution $N(0, 1)$.
We analyze the first term (rejection in the right tail):
$$P_{\theta_*} \left( \frac{\hat{\theta} - \theta_0}{\widehat{se}} > z_{\alpha/2} \right) = P_{\theta_*} \left( \hat{\theta} > \theta_0 + z_{\alpha/2} \widehat{se} \right)$$
$$= P_{\theta_*} \left( \frac{\hat{\theta} - \theta_*}{\widehat{se}} > \frac{\theta_0 - \theta_* + z_{\alpha/2} \widehat{se}}{\widehat{se}} \right)$$
$$= P \left( Z > \frac{\theta_0 - \theta_*}{\widehat{se}} + z_{\alpha/2} \right)$$
$$= 1 - \Phi \left( \frac{\theta_0 - \theta_*}{\widehat{se}} + z_{\alpha/2} \right)$$

### Visual Description
Text-only slide. This page contains the beginning of a mathematical proof for the power of the Wald test, including definitions of the test statistic, rejection rule, and the derivation for the right-tail probability.

---
## Page 4
### Content
Question assigned to the following page: 1

Now, we analyze the second term (rejection in the left tail):
$$P_{\theta_*} \left( \frac{\hat{\theta} - \theta_0}{\widehat{se}} < -z_{\alpha/2} \right) = P_{\theta_*} \left( \hat{\theta} < \theta_0 - z_{\alpha/2} \widehat{se} \right)$$
$$= P_{\theta_*} \left( \frac{\hat{\theta} - \theta_*}{\widehat{se}} < \frac{\theta_0 - \theta_* - z_{\alpha/2} \widehat{se}}{\widehat{se}} \right)$$
$$= P \left( Z < \frac{\theta_0 - \theta_*}{\widehat{se}} - z_{\alpha/2} \right)$$
$$= \Phi \left( \frac{\theta_0 - \theta_*}{\widehat{se}} - z_{\alpha/2} \right)$$
Combining both terms, the power function is approximately:
$$\beta(\theta_*) \approx 1 - \Phi \left( \frac{\theta_0 - \theta_*}{\widehat{se}} + z_{\alpha/2} \right) + \Phi \left( \frac{\theta_0 - \theta_*}{\widehat{se}} - z_{\alpha/2} \right)$$
This proves Theorem 10.6.

(b) **Comparison with alternative Wald statistic.**
Consider the alternative test statistic $W' = \frac{\hat{\theta} - \theta_0}{se_0}$, where $se_0$ is the standard error computed at $\theta = \theta_0$. The rejection rule is $|W'| > z_{\alpha/2}$.
To find the power, we standardize using the *true* standard error $\widehat{se}$ (since the distribution of $\hat{\theta}$ depends on the true parameter $\theta_*$):
$$P_{\theta_*} \left( \frac{\hat{\theta} - \theta_0}{se_0} > z_{\alpha/2} \right) = P_{\theta_*} \left( \hat{\theta} > \theta_0 + z_{\alpha/2} se_0 \right)$$
$$= P_{\theta_*} \left( \frac{\hat{\theta} - \theta_*}{\widehat{se}} > \frac{\theta_0 - \theta_* + z_{\alpha/2} se_0}{\widehat{se}} \right)$$
$$= 1 - \Phi \left( \frac{\theta_0 - \theta_*}{\widehat{se}} + z_{\alpha/2} \frac{se_0}{\widehat{se}} \right)$$
Similarly for the left tail:
$$P_{\theta_*} \left( \frac{\hat{\theta} - \theta_0}{se_0} < -z_{\alpha/2} \right) = \Phi \left( \frac{\theta_0 - \theta_*}{\widehat{se}} - z_{\alpha/2} \frac{se_0}{\widehat{se}} \right)$$
**Conclusion:** No, the power function is not the same. The term $z_{\alpha/2}$ is scaled by the ratio of the standard errors, $\frac{se_0}{\widehat{se}}$. If the standard error varies significantly with $\theta$, this ratio deviates from 1, changing the power of the test.

### Visual Description
Text-only slide. This page completes the proof from the previous page and provides a comparison with an alternative Wald statistic, concluding that the power functions are different due to the scaling of the critical value.

---
## Page 5
### Content
Question assigned to the following page: 2

## Problem 2: Asymptotic Distribution of LRT (Exercise 10.33)
(a) **Proving the Asymptotic Normality**
From Theorem 10.1.12 (Asymptotic efficiency of MLEs), we know that:
$$\sqrt{n}(\hat{\theta} - \theta_0) \xrightarrow{d} n \left( 0, \frac{1}{I(\theta_0)} \right)$$
We also know by the Weak Law of Large Numbers (WLLN) that the observed information converges to the expected Fisher Information:
$$-\frac{1}{n} l''(\hat{\theta} | \mathbf{x}) \xrightarrow{p} I(\theta_0)$$
By the Continuous Mapping Theorem, the square root also converges:
$$\sqrt{-\frac{1}{n} l''(\hat{\theta} | \mathbf{x})} \xrightarrow{p} \sqrt{I(\theta_0)}$$
Let $W$ be the statistic we are analyzing. We can rearrange terms to introduce $n$:
$$W = \frac{\theta_0 - \hat{\theta}}{\sqrt{(-l''(\hat{\theta} | \mathbf{x}))^{-1}}} = (\theta_0 - \hat{\theta}) \sqrt{-l''(\hat{\theta} | \mathbf{x})}$$
Multiply and divide by $\sqrt{n}$:
$$W = \underbrace{\sqrt{n}(\theta_0 - \hat{\theta})}_{\xrightarrow{d} n(0, 1/I(\theta_0))} \cdot \underbrace{\sqrt{\frac{1}{n} -l''(\hat{\theta} | \mathbf{x})}}_{\xrightarrow{p} \sqrt{I(\theta_0)}}$$
By Slutsky's Theorem, the product converges in distribution to:
$$W \xrightarrow{d} Z \cdot \sqrt{I(\theta_0)}$$
where $Z \sim n(0, 1/I(\theta_0))$. The variance of this limiting distribution is:
$$Var(W) = \frac{1}{I(\theta_0)} \cdot (\sqrt{I(\theta_0)})^2 = 1$$
Thus, $W \xrightarrow{d} n(0, 1)$.

(b) **Proving the Chi-Square Convergence**
Recall the Taylor expansion of the log-likelihood $l(\theta | \mathbf{x})$ around the MLE $\hat{\theta}$:
$$l(\theta_0 | \mathbf{x}) \approx l(\hat{\theta} | \mathbf{x}) + (\theta_0 - \hat{\theta}) l'(\hat{\theta} | \mathbf{x}) + \frac{(\theta_0 - \hat{\theta})^2}{2} l''(\hat{\theta} | \mathbf{x})$$

### Visual Description
Text-only slide. This page presents the first part of a proof regarding the asymptotic distribution of the Likelihood Ratio Test (LRT), specifically proving the asymptotic normality of a related statistic $W$.

---
## Page 6
### Content
Questions assigned to the following page: 2 and 3

Since $\hat{\theta}$ is the MLE, $l'(\hat{\theta} | \mathbf{x}) = 0$. Substituting this into the likelihood ratio statistic $-2 \log \lambda(\mathbf{x})$:
$$-2 \log \lambda(\mathbf{x}) = -2(l(\theta_0 | \mathbf{x}) - l(\hat{\theta} | \mathbf{x}))$$
$$\approx -2 \left( \frac{(\theta_0 - \hat{\theta})^2}{2} l''(\hat{\theta} | \mathbf{x}) \right)$$
$$= (\theta_0 - \hat{\theta})^2 (-l''(\hat{\theta} | \mathbf{x}))$$
$$= \left( (\theta_0 - \hat{\theta}) \sqrt{-l''(\hat{\theta} | \mathbf{x})} \right)^2$$
The term in the parentheses is exactly the statistic $W$ from part (a). Since we proved $W \xrightarrow{d} n(0, 1)$, the square of a standard normal variable follows a Chi-square distribution with 1 degree of freedom:
$$-2 \log \lambda(\mathbf{x}) \approx W^2 \xrightarrow{d} \chi^2_1$$

## Problem 3: Equivalence of Wald Test and Confidence Intervals
The Wald test statistic is defined as $W = \frac{\hat{\theta} - \theta_0}{\widehat{se}}$. The test rejects $H_0$ at level $\alpha$ if and only if:
$$|W| > z_{\alpha/2}$$
Substituting the definition of $W$, this inequality holds if and only if:
$$\left| \frac{\hat{\theta} - \theta_0}{\widehat{se}} \right| > z_{\alpha/2}$$
We can unfold the absolute value into two separate inequalities:
$$\frac{\hat{\theta} - \theta_0}{\widehat{se}} > z_{\alpha/2} \quad \text{OR} \quad \frac{\hat{\theta} - \theta_0}{\widehat{se}} < -z_{\alpha/2}$$
Now, we solve each inequality for $\theta_0$.
**Case 1 (Right tail):**
$$\frac{\hat{\theta} - \theta_0}{\widehat{se}} > z_{\alpha/2}$$
$$\hat{\theta} - \theta_0 > \widehat{se} z_{\alpha/2}$$
$$\hat{\theta} - \widehat{se} z_{\alpha/2} > \theta_0 \implies \theta_0 < \hat{\theta} - \widehat{se} z_{\alpha/2}$$

### Visual Description
Text-only slide. This page completes the proof for the Chi-square convergence of the LRT and begins a new problem demonstrating the equivalence between the Wald test and confidence intervals.

---
## Page 7
### Content
Questions assigned to the following page: 3 and 4

**Case 2 (Left tail):**
$$\frac{\hat{\theta} - \theta_0}{\widehat{se}} < -z_{\alpha/2}$$
$$\hat{\theta} - \theta_0 < -\widehat{se} z_{\alpha/2}$$
$$\hat{\theta} + \widehat{se} z_{\alpha/2} < \theta_0 \implies \theta_0 > \hat{\theta} + \widehat{se} z_{\alpha/2}$$
Combining these two cases, the test rejects $H_0$ if and only if $\theta_0$ is strictly less than the lower bound of the confidence interval or strictly greater than the upper bound of the confidence interval.
The $(
## Page 9
### Content
Questions assigned to the following page: 6 and 5

To ensure the test has size $\alpha$, we compute the critical value $c$ under $H_0$ (where $\bar{X} \sim N(\theta_1, 1/n)$):
$$P(\bar{X} > c \mid \theta = \theta_1) = P\left(Z > \frac{c - \theta_1}{1/\sqrt{n}}\right) = \alpha$$
Thus, $\frac{c - \theta_1}{1/\sqrt{n}} = z_\alpha$, which implies $c = \theta_1 + \frac{z_\alpha}{\sqrt{n}}$. The rejection region is:
$$\bar{X} > \theta_1 + \frac{z_\alpha}{\sqrt{n}}$$

**Question 6: GLRT Critical Region**

**1. Likelihood Function**
The probability density function is given by:
$$p(x|\theta, \nu) = \frac{\theta \nu^\theta}{x^{\theta+1}} I_{[\nu, \infty)}(x)$$
The joint likelihood function for a sample of size $n$ is:
$$L(\theta, \nu) = \theta^n \nu^{n\theta} \left(\prod_{i=1}^n x_i\right)^{-(\theta+1)} I(x_{(1)} \ge \nu)$$
The log-likelihood is:
$$\ell(\theta, \nu) = n \ln \theta + n\theta \ln \nu - (\theta + 1) \sum_{i=1}^n \ln x_i, \quad \text{for } \nu \le x_{(1)}$$

**2. MLEs under $H_1$ (Unrestricted)**
Since $L$ is increasing in $\nu$ for $\nu \le x_{(1)}$, the MLE for $\nu$ is:
$$\hat{\nu} = X_{(1)}$$
Substituting $\hat{\nu}$ into the log-likelihood and maximizing with respect to $\theta$:
$$\frac{\partial \ell}{\partial \theta} = \frac{n}{\theta} + n \ln X_{(1)} - \sum_{i=1}^n \ln X_i = 0$$
Solving for $\theta$:
$$\hat{\theta} = \frac{n}{\sum_{i=1}^n \ln(X_i/X_{(1)})}$$

**3. MLEs under $H_0$ ($\theta = 1$)**
The parameter $\theta$ is fixed at 1. The MLE for $\nu$ remains the same due to the indicator constraint:
$$\hat{\nu}_0 = X_{(1)}, \quad \hat{\theta}_0 = 1$$

7

### Visual Description
Text-only slide. It contains mathematical derivations for a hypothesis test and the first three steps of finding a Generalized Likelihood Ratio Test (GLRT) critical region. There is a Gradescope header at the top.

---
## Page 10
### Content
Question assigned to the following page: 6

**4. The GLRT Statistic**
The likelihood ratio statistic is $\lambda = \frac{L(1, \hat{\nu})}{L(\hat{\theta}, \hat{\nu})}$. We compute $-2 \ln \lambda$:
$$-2 \ln \lambda = 2[\ell(\hat{\theta}, \hat{\nu}) - \ell(1, \hat{\nu})]$$
$$= 2 \left[ \left( n \ln \hat{\theta} + n\hat{\theta} \ln X_{(1)} - (\hat{\theta} + 1) \sum \ln X_i \right) - \left( n \ln X_{(1)} - 2 \sum \ln X_i \right) \right]$$
Let $T = \sum \ln(X_i/X_{(1)})$. Note that $\hat{\theta} = n/T$. Simplifying the expression yields:
$$-2 \ln \lambda = 2n \left( \ln \hat{\theta} - 1 + \frac{1}{\hat{\theta}} \right)$$

**5. Critical Region**
Under Wilks' Theorem, $-2 \ln \lambda \xrightarrow{d} \chi^2_k$, where $k = \dim(\Theta_1) - \dim(\Theta_0) = 2 - 1 = 1$. Thus, for a significance level $\alpha$, the critical region is:
$$\left\{ \mathbf{x} : 2n \left( \ln \hat{\theta} - 1 + \frac{1}{\hat{\theta}} \right) > \chi^2_{1, 1-\alpha} \right\}$$

8

### Visual Description
Text-only slide. It continues the derivation of the GLRT critical region from the previous page, specifically steps 4 and 5. There is a Gradescope header at the top.

---
## Page 11
### Content

### Visual Description
A completely blank white page.

---
