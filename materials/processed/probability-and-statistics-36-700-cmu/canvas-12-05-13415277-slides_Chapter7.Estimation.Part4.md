# canvas-12-05-13415277-slides_Chapter7.Estimation.Part4

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-12-05-13415277-slides_Chapter7.Estimation.Part4.pdf`
Duplicate equivalents: `canvas-12-05-13415277-slides_Chapter7.Estimation.Part4.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 15

## Page 1
### Content
**CHAPTER 7 Point Estimation (Part 4): Evaluating/Comparing Estimators**

**Contents**
1. Decision Theory (2)
2. Admissibility (7)
3. Bayes Estimator (8)
4. Minimax Estimators (13)
5. Connections (14)

Reference: Wasserman Sections 12.1-12.3

1
### Visual Description
The slide is a table of contents for Chapter 7, Part 4 of a lecture on Point Estimation. The text is centered on a light gray grid background. The page number '1' is at the bottom center.

---
## Page 2
### Content
### 1 Decision Theory

$X_1, \dots, X_n \sim f_\theta$

Estimator $\hat{\theta} = \hat{\theta}(X_1, \dots, X_n)$

**Loss function:** $L(\theta, \hat{\theta})$ – measures the loss of estimating $\theta$ with $\hat{\theta}$

E.g.
1. Squared loss: $L(\theta, \hat{\theta}) = (\hat{\theta} - \theta)^2$.
2. Absolute loss: $L(\theta, \hat{\theta}) = |\theta - \hat{\theta}|$.
3. Kullback-Leibler loss: $L(\hat{\theta}, \theta) = KL(\hat{\theta}, \theta) \equiv \int f_\theta(u) \log \left( \frac{f_\theta(u)}{f_{\hat{\theta}}(u)} \right) du$.

2
### Visual Description
Text-only slide on a light gray grid background. It introduces Decision Theory and defines loss functions with three examples: squared loss, absolute loss, and Kullback-Leibler loss.

---
## Page 3
### Content
**Risk function:**
$$R(\theta, \hat{\theta}) = \mathbb{E}_\theta[L(\theta, \hat{\theta})] = \int L(\theta, \hat{\theta}) f_\theta(x_1) f_\theta(x_2) \cdots f_\theta(x_n) dx_1 \cdots dx_n$$

measures the average loss over all the data sets we could observe from the data distribution.

E.g., when $L(\theta, \hat{\theta}) = (\hat{\theta} - \theta)^2$, $R = \mathbb{E}[(\hat{\theta} - \theta)^2]$ is the MSE.

3
### Visual Description
Text-only slide on a light gray grid background. It defines the risk function as the expected loss and provides the Mean Squared Error (MSE) as an example.

---
## Page 4
### Content
**RECAP (one page)**

$X_1, \dots, X_n \sim f_\theta$

Estimator $\hat{\theta} = \hat{\theta}(X_1, \dots, X_n)$

**Loss function:** $L(\theta, \hat{\theta})$ – measures the loss of estimating $\theta$ with $\hat{\theta}$

1. Squared loss: $L(\theta, \hat{\theta}) = (\hat{\theta} - \theta)^2$.
2. Absolute loss: $L(\theta, \hat{\theta}) = |\theta - \hat{\theta}|$.
3. Kullback-Leibler loss: $L(\hat{\theta}, \theta) = KL(\hat{\theta}, \theta) \equiv \int f_\theta(u) \log \left( \frac{f_\theta(u)}{f_{\hat{\theta}}(u)} \right) du$.

**Risk function:**
$$R(\theta, \hat{\theta}) = \mathbb{E}_\theta[L(\theta, \hat{\theta})] = \int L(\theta, \hat{\theta}) f_\theta(x_1) f_\theta(x_2) \cdots f_\theta(x_n) dx_1 \cdots dx_n$$

measures the average loss over all the data sets we could observe from the data distribution.

4
### Visual Description
Text-only slide on a light gray grid background. It summarizes the definitions of estimator, loss function, and risk function from the previous pages. The terms "Loss function" and "Risk function" are highlighted in blue.

---
## Page 5
### Content
We want an estimator $\hat{\theta}$ whose risk function is small.

**Example 1:** Let $X \sim N(\theta, 1)$

We want $\hat{\theta}$ that minimizes the squared error risk (the MSE).

Consider two estimators: $\hat{\theta}_1 = X$ and $\hat{\theta}_2 = 0$.

5
### Visual Description
Text-only slide on a light gray grid background. It presents an example comparing two estimators for a normal distribution based on minimizing MSE. The first sentence is in blue.

---
## Page 6
### Content
**Example 2:** Consider the Bernoulli estimation problem.

MLE:
$$\hat{p}_1 = \frac{1}{n} \sum_{i=1}^n X_i,$$

Bayes estimator using a $Beta(\alpha, \beta)$ prior:
$$\hat{p}_B = \frac{\sum_{i=1}^n X_i + \alpha}{n + \alpha + \beta}.$$

Risk using the squared error loss:

$R(p, \hat{p}_1) =$

$R(p, \hat{p}_B) =$

6
### Visual Description
Text-only slide on a light gray grid background. It introduces a second example involving Bernoulli estimation, showing the MLE and Bayes estimator formulas, with placeholders for calculating their respective risks.

---
## Page 7
### Content
### 2 Admissibility

$\hat{\theta}_1$ is inadmissible if there is another estimator $\hat{\theta}_2$ such that,
$$\forall \theta \in \Theta, R(\theta, \hat{\theta}_2) \leq R(\theta, \hat{\theta}_1),$$
and
$$\exists \theta \in \Theta, R(\theta, \hat{\theta}_2) < R(\theta, \hat{\theta}_1).$$

Otherwise, we say that $\hat{\theta}_1$ is admissible.

Admissibility is a weak property. It does not guarantee that the estimator is good.

7
### Visual Description
Text-only slide on a light gray grid background. It defines the concept of admissibility in the context of estimators and risk functions.

---
## Page 8
### Content
### 3 Bayes Estimator

Previously, we called the mean of a posterior distribution, the Bayes estimator.

Now we introduce a more general notion of Bayes estimator.

Given a prior $\pi$ define the **Bayes risk** of $\hat{\theta}$ by
$$R_\pi(\hat{\theta}) = \int R(\theta, \hat{\theta}) \pi(\theta) d\theta.$$

The **Bayes estimator** is the $\hat{\theta}$ that minimizes $R_\pi(\hat{\theta})$.

8
### Visual Description
Text-only slide on a light gray grid background. It introduces a more general definition of the Bayes estimator based on minimizing the Bayes risk.

---
## Page 9
### Content
Note that

$$ \int R(\theta, \widehat{\theta}) \pi(\theta) d\theta = \int \left[ \int L(\widehat{\theta}, \theta) f(x_1, \dots, x_n | \theta) dx_1 \dots dx_n \right] \pi(\theta) d\theta $$

$$ = \int \int L(\widehat{\theta}, \theta) f(x_1, \dots, x_n | \theta) \pi(\theta) d\theta dx_1 \dots dx_n $$

$$ = \int \int L(\widehat{\theta}, \theta) f(x_1, \dots, x_n, \theta) d\theta dx_1 \dots dx_n $$

$$ = \int \int L(\widehat{\theta}, \theta) \pi(\theta | x_1, \dots, x_n) f(x_1, \dots, x_n) d\theta dx_1 \dots dx_n $$

$$ = \int \int L(\widehat{\theta}, \theta) \pi(\theta | x_1, \dots, x_n) d\theta f(x_1, \dots, x_n) dx_1 \dots dx_n $$

$$ = \int \mathbb{E}(L(\widehat{\theta}, \theta) | x_1, \dots, x_n) f(x_1, \dots, x_n) dx_1 \dots dx_n $$

### Visual Description
Text-only slide. The content consists of a mathematical derivation on a light gray grid background.

---
## Page 10
### Content
$$ \int R(\theta, \widehat{\theta}) \pi(\theta) d\theta = \int \mathbb{E}(L(\widehat{\theta}, \theta) | x_1, \dots, x_n) f(x_1, \dots, x_n) dx_1 \dots dx_n $$

To minimize the Bayes risk, it suffices to choose $\widehat{\theta}$ to minimize $\mathbb{E}(L(\widehat{\theta}, \theta) | x_1, \dots, x_n)$.

### Visual Description
Text-only slide. The content consists of a mathematical equation and a concluding statement on a light gray grid background.

---
## Page 11
### Content
**Ex:** Let $L(\widehat{\theta}, \theta) = (\widehat{\theta} - \theta)^2$.

Then
$$ \mathbb{E}(L(\widehat{\theta}, \theta) | x_1, \dots, x_n) = \int (\widehat{\theta} - \theta)^2 \pi(\theta | x_1, \dots, x_n) d\theta. $$

Take the derivative w.r.t. $\widehat{\theta}$ and set it equal to 0,

we get
$$ \widehat{\theta} = \frac{\int \theta \pi(\theta | x_1, \dots, x_n) d\theta}{\int \pi(\theta | x_1, \dots, x_n) d\theta} = \mathbb{E}(\theta | x_1, \dots, x_n) $$

which is the posterior mean. Therefore, <span style="color:blue">the posterior mean is the Bayes estimator under squared error loss; by definition, it minimizes the Bayes risk.</span>

### Visual Description
Text-only slide. The content consists of a mathematical example and a conclusion highlighted in blue text, all on a light gray grid background.

---
## Page 12
### Content
**Ex:** Let $L(\theta, \widehat{\theta}) = w(\theta)(\theta - \widehat{\theta})^2$, where $w(\theta) \ge 0$ is some positive weighting function.

The Bayes rule minimizes the posterior risk:
$$ \widehat{\theta}(X) = \arg \min_{\widehat{\theta}} \mathbb{E} \left[ w(\theta)(\theta - \widehat{\theta})^2 | X \right]. $$

Taking the derivative and setting it to 0, we obtain that the Bayes rule is:
$$ \widehat{\theta}(X) = \frac{\mathbb{E}[\theta w(\theta) | X]}{\mathbb{E}[w(\theta) | X]}, $$

The Bayes rule is a weighted conditional expectation.

### Visual Description
Text-only slide. The content consists of a mathematical example and its derivation on a light gray grid background.

---
## Page 13
### Content
### 4 Minimax Estimators

The minimax estimator $\widehat{\theta}$ minimizes the maximum risk, i.e. it satisfies
$$ \sup_{\theta \in \Theta} R(\theta, \widehat{\theta}) = \inf_{\theta'} \sup_{\theta \in \Theta} R(\theta, \theta') $$
where the infimum is over all estimators.

**Example 2 (revisited):** Revisit the two Bernoulli estimators from the standpoint of maximum risk and Bayes risk. Suppose we take the uniform prior, then:
$$ R_p(\widehat{\theta}_1) = \int \frac{\theta(1 - \theta)}{n} d\theta = \frac{1}{6n}, $$
$$ R_p(\widehat{\theta}_2) = \frac{n}{4(n + \sqrt{n})^2}. $$

Why look at the max risk as the number to summarize the risk? Because we can find minimax or approximately minimax estimators (there is no general theory to find the minimum total risk estimator).

### Visual Description
Text-only slide. The content introduces minimax estimators and revisits a previous example, presented on a light gray grid background.

---
## Page 14
### Content
### 5 Connections

In general, finding exactly minimax estimators is difficult but sometimes we can find approximately minimax (or rate minimax) estimators. There are however some key results that are worth knowing.

* For any estimator the Bayes risk with respect to any prior $\pi$ lower bounds its maximum risk.
* Suppose that for some prior $\pi$, we have that the corresponding Bayes rule $\widehat{\theta}_\pi$ has the property that:
$$ R(\theta, \widehat{\theta}_\pi) \le R_\pi(\widehat{\theta}_\pi), $$
for every $\theta$. Then $\pi$ is called a **least favorable prior** and $\widehat{\theta}_\pi$ is minimax.
* A simple consequence of the above is that if for some $\pi$ we have that $R(\theta, \widehat{\theta}_\pi)$ is a constant (as a function of $\theta$) then $\widehat{\theta}_\pi$ is a minimax estimator. In words, **a Bayes rule with constant risk is minimax.**

### Visual Description
Text-only slide. The content discusses connections between Bayes and minimax estimators using bullet points and equations on a light gray grid background.

---
## Page 15
### Content
**Example:** Recall the Binomial Bayes estimator with $\alpha = \beta = \sqrt{n}/2$. We saw that its MSE is:
$$ R(\widehat{p}, p) = \frac{n}{4(n + \sqrt{n})^2}. $$
Since the Bayes estimator has constant risk it is minimax.

In most **parametric models with large samples** (and the dimension of the $\Theta$ fixed), the MLE is approximately minimax and Bayes.

This result however breaks down when the number of parameters is large; for example, when there as many parameters as observations.

### Visual Description
Text-only slide. The content provides an example of a minimax estimator and discusses the behavior of MLE in large samples, all on a light gray grid background.

---
