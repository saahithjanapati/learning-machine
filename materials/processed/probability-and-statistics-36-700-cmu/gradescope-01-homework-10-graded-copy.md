# gradescope-01-homework-10-graded-copy

Source: `materials/archive/probability-and-statistics-36-700-cmu/gradescope-graded-copies/gradescope-01-homework-10-graded-copy.pdf`
Duplicate equivalents: `gradescope-01-homework-10-graded-copy.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 9

## Page 1
### Content
# Homework 10
🟢 Graded

**Student**
Saahith Janapati

**Total Points**
100 / 100 pts

**Question 1**
**Chi-squared test** 25 / 25 pts
- ✅ **- 0 pts** Correct
- **- 3 pts** (a) Minor error
- **- 6 pts** (a) Major error
- **- 3 pts** (b) Minor error
- **- 6 pts** (b) Major error

**Question 2**
**Permutation test** 25 / 25 pts
- ✅ **- 0 pts** Correct
- **- 3 pts** (a) Minor error
- **- 6 pts** (a) Major error
- **- 3 pts** (b) Minor error
- **- 6 pts** (b) Major error

**Question 3**
**Histograms** 25 / 25 pts
- ✅ **- 0 pts** Correct
- **- 2 pts** (a) Minor error
- **- 4 pts** (a) Major error
- **- 2 pts** (b) Minor error
- **- 4 pts** (b) Major error
- **- 2 pts** (c) Minor error
- **- 4 pts** (c) Major error
- **- 25 pts** Missing

### Visual Description
This is a Gradescope grading summary page for "Homework 10". It shows the student's name, total score (100/100), and a breakdown of points for the first three questions: Chi-squared test, Permutation test, and Histograms. Each question has a rubric with point deductions for minor or major errors, but the student received full marks for all.

---

## Page 2
### Content
**Question 4**
**Kernel Density Estimation** 25 / 25 pts
- ✅ **- 0 pts** Correct
- **- 2 pts** (a) Minor error
- **- 4 pts** (a) Major error
- **- 2 pts** (b) Minor error
- **- 4 pts** (b) Major error
- **- 2 pts** (c) Minor error
- **- 4 pts** (c) Major error
- **- 25 pts** Click here to replace this description.

### Visual Description
This is the second page of the Gradescope grading summary, showing the point breakdown for Question 4: Kernel Density Estimation. The student received 25/25 points. The rubric lists potential deductions for errors in parts (a), (b), and (c).

---

## Page 3
### Content
Question assigned to the following page: 1

# Homework 10
Saahith Janapati
December 2025

## Problem 1: The $\chi^2$ test
(a) **Show that the test statistic can be equivalently written as:**
$$T = \frac{(X_1 - np_1)^2}{np_1(1 - p_1)}$$

*Solution:*
We have $X_1 + X_2 = n$ and $p_1 + p_2 = 1$. Thus, $X_2 = n - X_1$ and $p_2 = 1 - p_1$.
First, observe that the numerator of the second term is equal to the numerator of the first term:
$$(X_2 - np_2)^2 = ((n - X_1) - n(1 - p_1))^2 = (n - X_1 - n + np_1)^2 = (-X_1 + np_1)^2 = (X_1 - np_1)^2$$

Substituting this into the expression for $T$:
$$T = \frac{(X_1 - np_1)^2}{np_1} + \frac{(X_2 - np_2)^2}{np_2}$$
$$= (X_1 - np_1)^2 \left( \frac{1}{np_1} + \frac{1}{np_2} \right)$$

Simplifying the term in the parentheses:
$$\frac{1}{np_1} + \frac{1}{np_2} = \frac{1}{n} \left( \frac{p_2 + p_1}{p_1 p_2} \right) = \frac{1}{np_1 p_2}$$

Since $p_2 = 1 - p_1$, we have:
$$T = \frac{(X_1 - np_1)^2}{np_1(1 - p_1)}$$
$\square$

### Visual Description
Text-only slide. It contains the first part of Problem 1, showing a mathematical proof to rewrite a $\chi^2$ test statistic.

---

## Page 4
### Content
Questions assigned to the following page: 1 and 2

(b) **Argue that the distribution of $T$ under the null is a $\chi^2_1$ distribution (asymptotically).**
*Solution:*
Under the null hypothesis, $X_1 \sim \text{Binomial}(n, p_1)$. The mean and variance are $E[X_1] = np_1$ and $\text{Var}(X_1) = np_1(1 - p_1)$.
Let $Z$ be the standardized variable. By the Central Limit Theorem, as $n \to \infty$, $Z$ converges to a standard normal distribution:
$$Z = \frac{X_1 - np_1}{\sqrt{np_1(1 - p_1)}} \xrightarrow{d} \mathcal{N}(0, 1)$$

From part (a), we can rewrite $T$ as the square of $Z$:
$$T = \frac{(X_1 - np_1)^2}{np_1(1 - p_1)} = \left( \frac{X_1 - np_1}{\sqrt{np_1(1 - p_1)}} \right)^2 = Z^2$$

Since the square of a standard normal random variable follows a Chi-squared distribution with 1 degree of freedom, $T \sim \chi^2_1$.

## Problem 2: Twain vs. Snodgrass (Problem 7, Wasserman, Page 171)
(a) **Perform a Wald test for equality of the means. Report the p-value and a 95 per cent confidence interval. What do you conclude?**
*Solution:*
Let $X$ denote the Twain essays and $Y$ denote the Snodgrass essays.
- Twain ($n = 8$): $\bar{X} = 0.2319$, $\hat{\sigma}^2_X = 0.0001856$
- Snodgrass ($m = 10$): $\bar{Y} = 0.2097$, $\hat{\sigma}^2_Y = 0.0000840$

The estimated difference is $\hat{\delta} = \bar{X} - \bar{Y} = 0.0222$. Using the nonparametric plug-in estimator for the standard error:
$$\widehat{se} = \sqrt{\frac{\hat{\sigma}^2_X}{n} + \frac{\hat{\sigma}^2_Y}{m}} = \sqrt{\frac{0.0001856}{8} + \frac{0.0000840}{10}} \approx 0.00562$$

The Wald statistic is:
$$W = \frac{\hat{\delta}}{\widehat{se}} = \frac{0.0222}{0.00562} \approx 3.94$$

The p-value is calculated using the standard normal distribution:
$$\text{p-value} = 2(1 - \Phi(|W|)) = 2(1 - \Phi(3.94)) \approx 0.00008$$

### Visual Description
Text-only slide. It contains the conclusion of Problem 1 and the beginning of Problem 2, involving statistical tests (Chi-squared and Wald test).

---

## Page 5
### Content
Questions assigned to the following page: 2 and 3

The 95% confidence interval is:
$$\hat{\delta} \pm 1.96\widehat{se} = 0.0222 \pm 1.96(0.00562) = (0.0112, 0.0332)$$

**Conclusion:** Since the p-value is very small ($< 0.05$) and the confidence interval does not contain 0, we reject the null hypothesis. There is strong evidence that the proportions of three-letter words are different for the two authors.

(b) **Now use a permutation test to avoid the use of large sample methods. What is your conclusion?**
*Solution:*
We performed a permutation test by pooling the 18 data points and randomly assigning them to two groups of size 8 and 10. We repeated this process 100,000 times to estimate the distribution of the difference in means under the null hypothesis.
The observed difference of 0.0222 was exceeded in approximately 0.01% of the random permutations.
$$\text{p-value} \approx 0.0001$$

**Conclusion:** The permutation test yields a similar result to the Wald test. The extremely low p-value suggests that the observed difference is unlikely to be due to chance, supporting the conclusion that Mark Twain was likely not the author of the Snodgrass essays.

## Problem 3: Histograms
(a) **Explain the bias-variance tradeoff. In particular, what happens to the bias and variance as we vary the bandwidth?**
*Solution:*
The risk bound contains two competing terms dependent on $h$: the squared bias term $(Lh)^2$ and the variance term $\frac{1}{nh}$ (part of the bracketed expression).
- **Bias:** As the bandwidth $h$ increases, the bias increases. Larger bins smooth out the density too much, leading to a loss of detail.
- **Variance:** As the bandwidth $h$ increases, the variance decreases. Larger bins capture more data points, resulting in a more stable estimate.

The tradeoff involves finding a value of $h$ that balances these two effects to minimize the total Mean Integrated Squared Error (MISE).

### Visual Description
Text-only slide. It concludes Problem 2 with a confidence interval and a permutation test, then starts Problem 3 by explaining the bias-variance tradeoff in the context of histograms.

---

## Page 6
### Content
Question assigned to the following page: 3

(b) **Derive the optimal bandwidth and the minimum risk in terms of $n$ and $L$.**
*Solution:*
Let the upper bound on the risk be $J(h) = (Lh)^2 + \frac{1}{nh} + \frac{L}{n}$. To find the optimal bandwidth, we differentiate $J(h)$ with respect to $h$ and set it to zero:
$$\frac{dJ}{dh} = 2L^2h - \frac{1}{nh^2} = 0$$
$$2L^2h = \frac{1}{nh^2} \implies h^3 = \frac{1}{2nL^2}$$
Solving for $h$, we get the optimal bandwidth $h^*$:
$$h^* = (2nL^2)^{-1/3}$$

Substituting $h^*$ back into the risk equation to find the minimum risk:
$$J(h^*) = L^2(2nL^2)^{-2/3} + \frac{1}{n(2nL^2)^{-1/3}} + \frac{L}{n}$$
$$= L^2(2^{-2/3}n^{-2/3}L^{-4/3}) + \frac{1}{n}(2^{1/3}n^{1/3}L^{2/3}) + \frac{L}{n}$$
$$= 2^{-2/3}n^{-2/3}L^{2/3} + 2^{1/3}n^{-2/3}L^{2/3} + \frac{L}{n}$$
$$= (2^{-2/3} + 2^{1/3})L^{2/3}n^{-2/3} + \frac{L}{n}$$
$$= 3 \cdot 2^{-2/3}L^{2/3}n^{-2/3} + \frac{L}{n}$$
Thus, the minimum risk scales as $O(n^{-2/3})$.

(c) **Derive sufficient conditions on $h_n$ and $n$ to ensure consistency, followed by a sub-optimal example.**
*Solution:*
For the density estimator to be consistent, the risk $R(\hat{f}, f)$ must converge to 0 as $n \to \infty$. Looking at the bound, this requires both the bias and variance terms to vanish.
(a) Bias term: $(Lh_n)^2 \to 0 \implies h_n \to 0$.
(b) Variance term: $\frac{1}{nh_n} \to 0 \implies nh_n \to \infty$.
Therefore, sufficient conditions are $h_n \to 0$ and $nh_n \to \infty$ as $n \to \infty$.
**Example of a sub-optimal bandwidth:** The optimal bandwidth derived in part (b) is $h \propto n^{-1/3}$. A different choice that still satisfies the consistency conditions is:
$$h_n = \frac{1}{\sqrt{n}} = n^{-1/2}$$
Checking the conditions:

### Visual Description
Text-only slide. It contains mathematical derivations for the optimal bandwidth and minimum risk of a histogram, and discusses consistency conditions.

---

## Page 7
### Content
Questions assigned to the following page: 3 and 4

- $h_n = n^{-1/2} \to 0$ as $n \to \infty$.
- $nh_n = n \cdot n^{-1/2} = n^{1/2} \to \infty$ as $n \to \infty$.

This bandwidth leads to a consistent estimator, but with a slower convergence rate than the optimal choice.

## Problem 4: Kernel Density Estimation
(a) **Show that:**
$$E(\hat{f}(x)) = \frac{1}{h} \int_{x-(h/2)}^{x+(h/2)} f(y) dy$$

*Solution:*
The kernel density estimator is given by $\hat{f}_n(x) = \frac{1}{nh} \sum_{i=1}^n K\left(\frac{x-X_i}{h}\right)$.
Taking the expectation:
$$E[\hat{f}_n(x)] = \frac{1}{nh} \sum_{i=1}^n E\left[ K\left(\frac{x-X_i}{h}\right) \right] = \frac{1}{h} E\left[ K\left(\frac{x-X_1}{h}\right) \right]$$

For the boxcar kernel, $K(u) = 1$ if $-1/2 < u < 1/2$ and 0 otherwise. The condition $-1/2 < \frac{x-X_1}{h} < 1/2$ is equivalent to $x - h/2 < X_1 < x + h/2$.
Thus, the expectation is the probability that $X_1$ falls in this interval:
$$E\left[ K\left(\frac{x-X_1}{h}\right) \right] = P\left(x - \frac{h}{2} < X_1 < x + \frac{h}{2}\right) = \int_{x-h/2}^{x+h/2} f(y) dy$$

Substituting this back:
$$E[\hat{f}_n(x)] = \frac{1}{h} \int_{x-h/2}^{x+h/2} f(y) dy$$
$\square$

(b) **Show the expression for the variance.**
*Solution:*
Since the $X_i$ are independent, the variance of the sum is the sum of the variances:
$$\text{Var}(\hat{f}_n(x)) = \text{Var}\left( \frac{1}{nh} \sum_{i=1}^n K_i \right) = \frac{1}{n^2h^2} \sum_{i=1}^n \text{Var}(K_i) = \frac{1}{nh^2} \text{Var}\left( K\left(\frac{x-X_1}{h}\right) \right)$$

Let $Y = K\left(\frac{x-X_1}{h}\right)$. $Y$ is an indicator variable (Bernoulli) that is 1 with probability $p = \int_{x-h/2}^{x+h/2} f(y) dy$ and 0 otherwise.

### Visual Description
Text-only slide. It concludes Problem 3 and starts Problem 4, providing proofs for the expectation and variance of a Kernel Density Estimator using a boxcar kernel.

---

## Page 8
### Content
Question assigned to the following page: 4

The variance of a Bernoulli variable is $p(1 - p) = p - p^2$.
$$\text{Var}(Y) = \int_{x-h/2}^{x+h/2} f(y) dy - \left( \int_{x-h/2}^{x+h/2} f(y) dy \right)^2$$

Substituting this back into the variance expression:
$$\text{Var}(\hat{f}_n(x)) = \frac{1}{nh^2} \left[ \int_{x-h/2}^{x+h/2} f(y) dy - \left( \int_{x-h/2}^{x+h/2} f(y) dy \right)^2 \right]$$
$\square$

(c) **Show that if $h \to 0$ and $nh \to \infty$, then $\hat{f}(x) \to f(x)$ in probability.**
*Solution:*
We check the bias and variance as $n \to \infty$.
**Bias:** As $h \to 0$, by the fundamental theorem of calculus (differentiation of integrals), the average value of the density over the small interval approaches the value at the center:
$$E[\hat{f}(x)] = \frac{1}{h} \int_{x-h/2}^{x+h/2} f(y) dy \to f(x)$$
Thus, the bias goes to 0.
**Variance:** From part (b), let $p_h = \int_{x-h/2}^{x+h/2} f(y) dy \approx h f(x)$.
$$\text{Var}(\hat{f}(x)) = \frac{1}{nh^2}(p_h - p_h^2) \approx \frac{1}{nh^2}(h f(x)) = \frac{f(x)}{nh}$$
Since $nh \to \infty$, the variance approaches 0.
Since both the bias and variance converge to 0, the Mean Squared Error (MSE) converges to 0. Convergence in MSE implies convergence in probability (Chebyshev's inequality). Therefore, $\hat{f}(x) \xrightarrow{P} f(x)$.

### Visual Description
Text-only slide. It concludes Problem 4 by finishing the variance derivation and proving convergence in probability for the Kernel Density Estimator.

---
## Page 9
### Content
[Blank page]
### Visual Description
The page is completely blank.
---
