# gradescope-06-homework-5-graded-copy

Source: `materials/archive/probability-and-statistics-36-700-cmu/gradescope-graded-copies/gradescope-06-homework-5-graded-copy.pdf`
Duplicate equivalents: `gradescope-06-homework-5-graded-copy.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 14

## Page 1
### Content
# Homework 5
**Graded**

**Student:** Saahith Janapati
**Total Points:** 100 / 100 pts

### Question 1
**Wasserman 5.1** (25 / 25 pts)
*   **- 0 pts** Correct
*   **- 5 pts** (a) Minor error
*   **- 10 pts** (a) Major error
*   **- 2 pts** (b) Minor error
*   **- 5 pts** (b) Major error
*   **- 15 pts** (a) Missing
*   **- 10 pts** (b) Missing

### Question 2
**Wasserman 5.9** (10 / 10 pts)
*   **- 0 pts** Correct
*   **- 2 pts** Minor error
*   **- 5 pts** Major error
*   **- 10 pts** Missing

### Question 3
**Wasserman 5.14** (15 / 15 pts)
*   **- 0 pts** Correct
*   **- 3 pts** Minor error
*   **- 8 pts** Major error
*   **- 15 pts** Missing

### Visual Description
Text-only slide showing a Gradescope grading summary for the first three questions of Homework 5.

---
## Page 2
### Content
### Question 4
**Wasserman 14.5** (15 / 15 pts)
*   **- 0 pts** Correct
*   **- 3 pts** Minor error
*   **- 8 pts** Major error
*   **- 15 pts** Missing

### Question 5
**Wasserman 5.15** (10 / 10 pts)
*   **- 0 pts** Correct
*   **- 2 pts** Minor error/incomplete calculation
*   **- 5 pts** Major error
*   **- 10 pts** Missing

### Question 6
**Wasserman 6.2** (15 / 15 pts)
*   **- 0 pts** Correct
*   **- 3 pts** Minor error
*   **- 8 pts** Major error
*   **- 15 pts** Missing
*   **- 0.5 pts** didn't simplify the result
*   **- 0.5 pts** minor minor error

### Question 7
**Wasserman 6.3** (10 / 10 pts)
*   **- 0 pts** Correct
*   **- 2 pts** Minor error
*   **- 5 pts** Major error
*   **- 10 pts** Missing

### Visual Description
Text-only slide showing the continuation of the Gradescope grading summary for questions 4 through 7.

---
## Page 3
### Content
a) $\sum_{i=1}^n (X_i - \bar{X}_n)^2 = \sum_{i=1}^n X_i^2 - n\bar{X}_n^2$

so

$s_n^2 = \frac{1}{n-1} \left( \sum_{i=1}^n X_i^2 - n\bar{X}_n^2 \right) = \frac{n}{n-1} \left( \frac{1}{n} \sum_{i=1}^n X_i^2 - \bar{X}_n^2 \right)$

$c_n = d_n = \frac{n}{n-1} \xrightarrow{n \to \infty} 1$

$E[A_n] = E\left[ \frac{1}{n} \sum_{i=1}^n X_i^2 \right] = E[X_i^2] = \sigma^2 + \mu^2$

$E[B_n] = E[\bar{X}_n^2] = V(\bar{X}_n) + (E[\bar{X}_n])^2 = \frac{\sigma^2}{n} + \mu^2$

$E[s_n^2] = \frac{n}{n-1} \left( (\sigma^2 + \mu^2) - \left( \frac{\sigma^2}{n} + \mu^2 \right) \right) = \left( \frac{n}{n-1} \right) \left( \sigma^2 \left( 1 - \frac{1}{n} \right) \right) = \sigma^2$ ✓

### Visual Description
Handwritten mathematical derivation on a light yellow background showing the proof that the sample variance $s_n^2$ is an unbiased estimator of $\sigma^2$.

---
## Page 4
### Content
$A_n = \frac{1}{n} \sum_{i=1}^n X_i^2 \xrightarrow{P} E[X_i^2] = \sigma^2 + \mu^2$
(By LLN)

By LLN, $\bar{X}_n \xrightarrow{P} \mu$, and we have
$B_n = \bar{X}_n^2 \xrightarrow{P} \mu^2$

$c_n, d_n \to 1$. Applying Slutsky's Thm, we have
$s_n^2 = c_n A_n - d_n B_n \xrightarrow{P} 1^2(\sigma^2 + \mu^2) - 1 \cdot \mu^2 = \sigma^2$ ✓

So, $s_n^2 \xrightarrow{P} \sigma^2$

### Visual Description
Handwritten mathematical proof on a light yellow background showing the consistency of the sample variance $s_n^2$ using the Law of Large Numbers (LLN) and Slutsky's Theorem.

---
## Page 5
### Content
**Probability**
For any fixed $\epsilon > 0$, for all large $n$ we have $|e^n - X| > \epsilon$. Hence,
$Pr(|X_n - X| > \epsilon) = Pr(X_n = e^n) = \frac{1}{n} \to 0$.
So, $X_n \xrightarrow{P} X$

b. **Converges in distribution**
Convergence in probability implies convergence in distribution. Therefore, $X_n \xrightarrow{d} X$.

c. $E[(X - X_n)^2] = (1 - \frac{1}{n}) E[(X - X)^2] + \frac{1}{n} E[(X - e^n)^2] = \frac{1}{n} E[(X - e^n)^2]$
$E[(X - e^n)^2] = E[X^2] - 2e^n E[X] + e^{2n} = 1 + e^{2n}$
Thus, $E[(X - X_n)^2] = \frac{1 + e^{2n}}{n} \to \infty$.
So, it does NOT converge to 0.

### Visual Description
Handwritten mathematical work on a light yellow background analyzing the convergence of a sequence of random variables $X_n$ in probability, distribution, and quadratic mean. Key conclusions are highlighted in yellow.

---
## Page 6
### Content
$E[X_i] = \frac{1}{2}$, $Var(X) = \frac{1}{12}$
By LLN, $\bar{X}_n \xrightarrow{P} \frac{1}{2}$

From the CLT,
$\sqrt{n} \left( \bar{X}_n - \frac{1}{2} \right) \Rightarrow N(0, \frac{1}{12})$

$g(x) = x^2$ with $g'(x) = 2x$, so $g'(\mu) = 1$

By delta method,
$\sqrt{n} (Y_n - g(\mu)) = \sqrt{n} \left( \bar{X}_n^2 - \frac{1}{4} \right) \Rightarrow N(0, (g'(\mu))^2 \sigma^2) = N(0, \frac{1}{12})$
$\sqrt{n} \left( Y_n - \frac{1}{4} \right) \Rightarrow N(0, \frac{1}{12})$

Therefore,
$Y_n \approx N\left( \frac{1}{4}, \frac{1}{12n} \right)$

### Visual Description
Handwritten mathematical derivation on a light yellow background applying the Central Limit Theorem (CLT) and the Delta Method to find the asymptotic distribution of $Y_n = \bar{X}_n^2$. The final result is boxed and highlighted in yellow.

---
## Page 7
### Content
$\bar{X} = [2.9505, 8.0657]$

**Covariance matrix estimate**
$S = \begin{pmatrix} 1.0484 & 1.1157 \\ 1.1157 & 2.1986 \end{pmatrix}$

**True correlation**
$\frac{\Sigma_{12}}{\sqrt{\Sigma_{11}}\sqrt{\Sigma_{22}}} = \frac{1}{\sqrt{1}\sqrt{2}} = \frac{1}{\sqrt{2}} = 0.7071$

**Sample correlation**
$0.7349$

* Code and plot on next page

### Visual Description
Handwritten notes on a light yellow background showing calculated values for sample mean, covariance matrix estimate, true correlation, and sample correlation. Key terms and final values are highlighted in yellow.

---
## Page 8
### Content
**Scatterplot of 100 draws from $N(\mu, \Sigma)$**

```python
import numpy as np
import matplotlib.pyplot as plt

# Parameters
rng = np.random.default_rng(20251011)

mu = np.array([3.0, 8.0])
Sigma = np.array([[1.0, 1.0],
                  [1.0, 2.0]])

n = 100
X = rng.multivariate_normal(mu, Sigma, size=n) # shape (n,2)

xbar = X.mean(axis=0)
S = np.cov(X, rowvar=False, ddof=1)

rho_true = Sigma[0,1] / np.sqrt(Sigma[0,0]*Sigma[1,1])
rho_hat = np.corrcoef(X.T)[0,1]

print("Sample mean (x):", xbar)
print("\nSample covariance matrix (S):\n", S)
print("\nTrue correlation p:", rho_true)
print("Sample correlation r:", rho_hat)

plt.figure()
plt.scatter(X[:,0], X[:,1])
plt.scatter([xbar[0]], [xbar[1]], marker='x', s=100) # mark sample mean
plt.title("Scatterplot of 100 draws from N(mu, Sigma)")
plt.xlabel("X1")
plt.ylabel("X2")
plt.show()
```

### Visual Description
The top half of the page shows a scatter plot of 100 data points with axes labeled X1 and X2, showing a positive correlation. A red 'x' marks the sample mean. The bottom half contains a block of Python code used to generate the data and the plot.

---
## Page 9
### Content
$\bar{X}_n = (\bar{X}_1, \bar{X}_2)^T$ w/ mean $\mu = (\mu_1, \mu_2)^T$
and covariance matrix $\Sigma = \begin{pmatrix} \sigma_{11} & \sigma_{12} \\ \sigma_{12} & \sigma_{22} \end{pmatrix}$

<u>Multivariate CLT</u>
$\sqrt{n} (\bar{X}_n - \mu) \Rightarrow N(0, \Sigma)$

transform $g(s_1, s_2) = s_1 / s_2$
We want $Y_n = g(\bar{X}_1, \bar{X}_2)$

$\nabla g(s_1, s_2) = \left( \frac{\partial}{\partial s_1} \frac{s_1}{s_2}, \frac{\partial}{\partial s_2} \frac{s_1}{s_2} \right) = \left( \frac{1}{s_2}, -\frac{s_1}{s_2^2} \right)$
at $\mu$,
$\nabla g(\mu) = \left( \frac{1}{\mu_2}, -\frac{\mu_1}{\mu_2^2} \right)$, assume $\mu_2 \neq 0$

<u>Multivariate Delta Method</u>
$\sqrt{n} (Y_n - g(\mu)) \Rightarrow N(0, \nabla g(\mu)^T \Sigma \nabla g(\mu))$

$\nabla g(\mu)^T \Sigma \nabla g(\mu) = \frac{\sigma_{11}}{\mu_2^2} - \frac{2\mu_1 \sigma_{12}}{\mu_2^3} + \frac{\mu_1^2 \sigma_{22}}{\mu_2^4}$

### Visual Description
Handwritten notes on a light yellow background. The page contains mathematical derivations for the Multivariate Central Limit Theorem and the Multivariate Delta Method applied to a ratio of means.

---
## Page 10
### Content
$\sqrt{n} (Y_n - \frac{\mu_1}{\mu_2}) \Rightarrow N(0, \frac{\sigma_{11}}{\mu_2^2} - \frac{2\mu_1 \sigma_{12}}{\mu_2^3} + \frac{\mu_1^2 \sigma_{22}}{\mu_2^4})$

So
$$Y_n \approx N\left( \frac{\mu_1}{\mu_2}, \frac{1}{n} \left[ \frac{\sigma_{11}}{\mu_2^2} - \frac{2\mu_1 \sigma_{12}}{\mu_2^3} + \frac{\mu_1^2 \sigma_{22}}{\mu_2^4} \right] \right)$$

### Visual Description
Handwritten notes continuing from the previous page. The final result for the approximate distribution of $Y_n$ is highlighted in yellow.

---
## Page 11
### Content
For $0 < x < \theta$,
$F_{X_{(n)}}(x) = Pr(X_{(n)} \le x) = \left( \frac{x}{\theta} \right)^n$
$f_{X_{(n)}}(x) = \frac{n}{\theta^n} x^{n-1}$

$E[X_{(n)}] = \int_0^\theta x f_{X_{(n)}}(x) dx =$
$\int_0^\theta x \frac{n x^{n-1}}{\theta^n} dx = \frac{n}{\theta^n} \int_0^\theta x^n dx = \frac{n}{n+1} \theta$

<u>Second moment</u>
$E[X_{(n)}^2] = \frac{n}{\theta^n} \int_0^\theta x^{n+1} dx = \frac{n}{n+2} \theta^2$

<u>Variance</u>
$Var[(X_{(n)})] = E[X_{(n)}^2] - (E[X_{(n)}])^2 =$
$\left( \frac{n}{n+2} \right) \theta^2 - \left( \frac{n}{n+1} \theta \right)^2 = \frac{n}{(n+1)^2(n+2)} \theta^2$

### Visual Description
Handwritten notes on a light yellow background showing the derivation of the mean and variance for the maximum order statistic $X_{(n)}$ from a uniform distribution.

---
## Page 12
### Content
$E[\hat{\theta}] - \theta = \frac{n}{n+1} \theta - \theta =$

$Bias(\hat{\theta}) = \boxed{-\frac{\theta}{n+1}}$

$SE(\hat{\theta}) = \sqrt{Var(\hat{\theta})} = \boxed{\theta \sqrt{\frac{n}{(n+1)^2(n+2)}}}$

$MSE(\hat{\theta}) = Var(\hat{\theta}) + Bias(\hat{\theta})^2$
$= \frac{n}{(n+1)^2(n+2)} \theta^2 + \left( -\frac{\theta}{n+1} \right)^2 =$
$\frac{n \theta^2 + (\theta^2)(n+2)}{(n+1)^2(n+2)} = \boxed{\frac{2 \theta^2}{(n+1)(n+2)}}$

$(n+1)^2(n+2)$
$(\theta)^2(n+2) + \theta^2(n)$
$2(2n+2)$

### Visual Description
Handwritten notes on a light yellow background. The page shows the calculation of Bias, Standard Error (SE), and Mean Squared Error (MSE) for an estimator. Key results are boxed and highlighted in yellow. There are some scratch calculations at the bottom.

---
## Page 13
### Content
$Var(\bar{X}) = \frac{1}{n} Var(X_i) = \frac{\theta^2}{12n}$

Transform to $\hat{\theta} = 2\bar{X}$
$E[\hat{\theta}] = 2 \cdot \frac{\theta}{2} = \theta$
$\Rightarrow \boxed{Bias(\hat{\theta}) = E[\hat{\theta}] - \theta = 0}$ (unbiased)

$Var(\hat{\theta}) = 4 \cdot Var(\bar{X}) = 4 \cdot \frac{\theta^2}{12n} = \frac{\theta^2}{3n}$

$SE(\hat{\theta}) = \sqrt{Var(\hat{\theta})} = \frac{\theta}{\sqrt{3n}}$

$MSE(\hat{\theta}) = Var(\hat{\theta}) + Bias(\hat{\theta})^2 = \frac{\theta^2}{3n}$

### Visual Description
Handwritten notes on a light yellow background. The page derives properties for the estimator $\hat{\theta} = 2\bar{X}$, including its bias, variance, standard error, and MSE. Several results are highlighted in yellow.

---
## Page 14
### Content
[Empty Page]
### Visual Description
Blank white page.

---
