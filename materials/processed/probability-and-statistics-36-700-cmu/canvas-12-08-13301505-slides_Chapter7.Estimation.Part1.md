# canvas-12-08-13301505-slides_Chapter7.Estimation.Part1

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-12-08-13301505-slides_Chapter7.Estimation.Part1.pdf`
Duplicate equivalents: `canvas-12-08-13301505-slides_Chapter7.Estimation.Part1.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 16

## Page 1
### Content
**CHAPTER 7 Point Estimation (Part 1): Finding Estimators**

**Contents**
1. Method of Moments Estimators (1)
2. Maximum Likelihood Estimators (5)
3. Bayes Estimators (10)

Reference: Wasserman Sections 9.1-9.3, 11.1-11.3

**1 Method of Moments Estimators**

Let $X_1, \dots, X_n$ be an iid sample from a distribution with parameter $\theta = (\theta_1, \dots, \theta_k)$

e.g. $\theta = (\mu, \sigma^2)$ for the Gaussian distribution.

MOME: Estimate $\theta$ by matching $k$ true/theoretical/population moments and $k$ sample moments.

Recall:
$\mu = \mu_1 = \mathbb{E}(X)$ true mean
$m_1 = \frac{1}{n} \sum X_i$ sample mean

$\mu_k = \mathbb{E}(X^k)$ true $k$th moment
$k$th sample moment?

### Visual Description
The slide has a light gray grid background. The text is organized with a title, a table of contents, and the beginning of the first section. It uses standard mathematical notation.

---
## Page 2
### Content
Sample moments:
$$m_1 = \frac{1}{n} \sum_{i=1}^n X_i$$
$$m_2 = \frac{1}{n} \sum_{i=1}^n X_i^2$$
$$\dots$$
$$m_k = \frac{1}{n} \sum_{i=1}^n X_i^k,$$

True moments:
$$\mu_j = \mu_j(\theta) = \mathbb{E}(X^j) = \int x^j dF_\theta(x), \quad j = 1, \dots, k$$

Estimate $\theta$ by matching $k$ true/theoretical/population moments and $k$ sample moments.

$$\mu_1(\theta_1, \dots, \theta_k) = m_1$$
$$\vdots$$
$$\mu_k(\theta_1, \dots, \theta_k) = m_k.$$

Solve system of $k$ equations with $k$ unknowns.

### Visual Description
The slide has a light gray grid background. It contains mathematical formulas for sample and true moments and the system of equations used for the Method of Moments.

---
## Page 3
### Content
**Example 1:** $X_1, \dots, X_n \sim N(\mu, \sigma^2) \longrightarrow \theta = (\theta_1, \theta_2) = (\mu, \sigma^2)$

True moments:
$$\mu_1(\theta) = \mathbb{E}(X) = \mu \quad \text{and} \quad \mu_2(\theta) = \mathbb{E}(X^2) = \mu^2 + \sigma^2$$

Solve for $\mu$ and $\sigma^2$:
$$\mu_1(\theta) = \frac{1}{n} \sum_{i=1}^n X_i \quad \text{and} \quad \mu_2(\theta) = \frac{1}{n} \sum_{i=1}^n X_i^2$$

Obtain:
$$\hat{\mu} = \frac{1}{n} \sum_{i=1}^n X_i = \bar{X}_n$$
$$\hat{\sigma}^2 = \frac{1}{n} \sum_{i=1}^n X_i^2 - \left( \frac{1}{n} \sum_{i=1}^n X_i \right)^2$$
$$= \frac{1}{n} \sum_{i=1}^n (X_i - \bar{X}_n)^2,$$

### Visual Description
The slide has a light gray grid background. It shows a worked example of finding Method of Moments estimators for the parameters of a Normal distribution.

---
## Page 4
### Content
**Example 2:** $X_1, \dots, X_n \sim \text{Bin}(k, p) \longrightarrow \theta = (k, p)$

Used to e.g. model reported crimes, where the total number of crimes $k$ and reporting rate $p$ are both unknown.

Solve:
$$\mu_1(\theta) = \frac{1}{n} \sum_{i=1}^n X_i \quad \text{and} \quad \mu_2(\theta) = \frac{1}{n} \sum_{i=1}^n X_i^2$$

where
$$\mu_1(\theta) = \mathbb{E}(X) = kp \quad \text{and} \quad \mu_2(\theta) = \mathbb{E}(X^2) = kp(1 - p) + (kp)^2$$

Obtain:
$$\hat{p} = \frac{\bar{X} - \frac{1}{n} \sum_{i=1}^n (X_i - \bar{X})^2}{\bar{X}} \quad \text{and} \quad \hat{k} = \frac{\bar{X}^2}{\bar{X} - \frac{1}{n} \sum_{i=1}^n (X_i - \bar{X})^2}.$$

Could be negative!

### Visual Description
The slide has a light gray grid background. It presents a second example of Method of Moments estimation, this time for the Binomial distribution parameters $k$ and $p$.

---
## Page 5
### Content
**2 Maximum Likelihood Estimators**

Unlike MOMEs, MLEs have the same range as the parameter.

Let $X_1, \dots, X_n \sim f_\theta$ i.i.d.

Likelihood function: $L(\theta) \equiv L(\theta|X_1, \dots, X_n)$
$= \text{joint distribution of the observed data}$
$$= \prod_{i=1}^n f_\theta(X_i).$$

**MLE:**
$$\hat{\theta} \equiv \hat{\theta}(X_1, \dots, X_n) = \text{argmax } L(\theta)$$

value of $\theta$ most likely to have generated the data

e.g. $X \sim N(\mu, 1)$

### Visual Description
The slide has a light gray grid background. It introduces Maximum Likelihood Estimators (MLE). The text "Unlike MOMEs, MLEs have the same range as the parameter." is in blue. The text "Likelihood function:" is in red.

---
## Page 6
### Content
**Example:** Let $X_1, \dots, X_n \overset{iid}{\sim} N(\theta, 1)$. Derive the MLE of $\theta$.

### Visual Description
The slide has a light gray grid background. It contains a single line of text posing an example problem, with the rest of the page left blank for derivation.

---
## Page 7
### Content
**Example:** Let $X_1, \dots, X_n \overset{iid}{\sim} \text{Ber}(p)$. Derive the MLE of $p$.

### Visual Description
The slide has a light gray grid background. It contains a single line of text posing an example problem for a Bernoulli distribution, with the rest of the page left blank for derivation.

---
## Page 8
### Content
These two examples were easy. However, MLEs can be difficult to find in practice...

**Computational difficulties:** How do we find the global maximum? How do we verify that we have in fact found the global maximum?

**Numerical sensitivity:**
(1) We can often only approximately maximize the likelihood (using a numerical procedure like gradient descent), so we need a well-behaved likelihood function (as a function of the parameters).

(2) It is also natural to hope that the estimator is a well-behaved function of the data; that is, we would hope that a slightly different sample would not result in a vastly different MLE.

### Visual Description
Text-only slide. The slide has a light gray grid background.

---
## Page 9
### Content
**Invariance of the MLE**

We are often interested in making inferences about something else than the parameters of the data distribution.

e.g. $\delta = \text{logit}(p)$

e.g. $\delta = \text{Interquartile range}$

The MLE is invariant to transformations
$\rightarrow$ MLE of $\delta = r(\theta)$ is $\hat{\delta} = r(\hat{\theta})$

**Note:** if you know the distribution of $\hat{\theta}$, you can find the distribution of $r(\hat{\theta})$ using one of the methods we have learned, e.g. the delta method.

9
### Visual Description
Text-only slide.

---
## Page 10
### Content
### 3 Bayes Estimators

We have the likelihood function ($L(\theta) =$ the joint distribution of the data given parameter value $\theta$), which summarizes the information about $\theta$ in the data.

We further treat $\theta$ as a random variable with distribution $p(\theta)$ called the **prior distribution**.

10
### Visual Description
Text-only slide.

---
## Page 11
### Content
**Bayes Estimators**

We have $L(\theta)$ and $p(\theta)$

To make inference about $\theta$, we update the prior information about $\theta$ by calculating $p(\theta|x_1, \dots, x_n)$, the **posterior distribution** of $\theta$.

Using Bayes theorem:
$$p(\theta|x_1, \dots, x_n) = \frac{p(\theta, x_1, \dots, x_n)}{p(x_1, \dots, x_n)} = \frac{p(x_1, \dots, x_n|\theta)p(\theta)}{\int p(x_1, \dots, x_n|\theta)p(\theta)d\theta}$$
$$= \frac{L(\theta)p(\theta)}{\int L(\theta)p(\theta)d\theta} \propto L(\theta)p(\theta).$$

We take the **Bayes estimator** of $\theta$ to be the mean/median/mode of $p(\theta|x_1, \dots, x_n)$.

e.g. posterior mean:
$$\hat{\theta} = \int \theta p(\theta|X_1, \dots, X_n)d\theta.$$

11
### Visual Description
Text-only slide.

---
## Page 12
### Content
**Example:** Let $X_1, \dots, X_n \overset{iid}{\sim} \text{Ber}(\theta)$.

Let $\theta \sim \text{Beta}(\alpha, \beta)$ (Beta distribution prior):
$$p(\theta) = \frac{\Gamma(\alpha + \beta)}{\Gamma(\alpha)\Gamma(\beta)} \theta^{\alpha-1}(1 - \theta)^{\beta-1} \propto \theta^{\alpha-1}(1 - \theta)^{\beta-1},$$
$\alpha > 0$
$\beta > 0$
$\theta \in [0, 1]$
$\Gamma(\alpha) = \int x^{\alpha-1}e^{-x}dx.$

Some facts:
The mean of the Beta distribution is: $\alpha/(\alpha + \beta)$.
$\alpha = \beta = 1$ yields the $U[0, 1]$ distribution.

12
### Visual Description
Text-only slide.

---
## Page 13
### Content
Posterior distribution?

13
### Visual Description
Text-only slide.

---
## Page 14
### Content
Posterior distribution:
$$p(\theta|X_1, \dots, X_n) \propto \theta^{S+\alpha-1}(1 - \theta)^{n-S+\beta-1},$$
where $S = \sum X_i$.

The posterior distribution is $\text{Beta}(S + \alpha, n - S + \beta)$.

We write
$$\theta|X_1, \dots, X_n \sim \text{Beta}(S + \alpha, n - S + \beta).$$

When the prior and the posterior are in the same family (as for the previous Bernoulli example), we say that the prior is **conjugate** w.r.t the model.

Recall the Beta distribution:
$$p(\theta) = \frac{\Gamma(\alpha + \beta)}{\Gamma(\alpha)\Gamma(\beta)} \theta^{\alpha-1}(1 - \theta)^{\beta-1} \propto \theta^{\alpha-1}(1 - \theta)^{\beta-1},$$

14
### Visual Description
Text-only slide.

---
## Page 15
### Content
The posterior mean is $(S + \alpha)/(n + \alpha + \beta)$.

Thus, Bayes estimate:
$$\hat{\theta}_n = \frac{S + \alpha}{n + \alpha + \beta}.$$

A common choice is $\alpha = \beta = 1$ ($\theta$ is uniform).
Then
$$\hat{\theta} = \frac{n\bar{X} + 1}{n + 2}$$
$$= \frac{n}{n + 2}\bar{X} + \frac{2}{n + 2}\frac{1}{2}$$
$$= w\bar{X} + (1 - w)\frac{1}{2},$$
convex combination of the MLE and the prior mean $1/2$.

When $n$ is large, $\hat{\theta} \approx \bar{X}_n =$ the MLE

15
### Visual Description
Text-only slide.

---
## Page 16
### Content
**Exercise:** Let $X_1, \dots, X_n \overset{iid}{\sim} N(\theta, \sigma^2)$, $\sigma^2$ known.

Let $\theta \sim N(\mu, \tau^2)$.

Then $\theta | (X_1, \dots, X_n) \sim N(a, b^2)$

where
$$a = \left(\frac{n\tau^2}{\sigma^2 + n\tau^2}\right)\bar{X}_n + \left(\frac{\sigma^2}{\sigma^2 + n\tau^2}\right)\mu, \quad b^2 = \frac{\sigma^2\tau^2}{\sigma^2 + n\tau^2}.$$

The Bayes estimator is
$$\hat{\mu} = w\bar{X}_n + (1 - w)\mu$$
where $w = \frac{n\tau^2}{\sigma^2 + n\tau^2}$.

When $n$ is large, $w \approx 1$ and $\hat{\mu} \approx \bar{X}_n$.

16
### Visual Description
Text-only slide.
