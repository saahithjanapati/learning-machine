# canvas-12-09-13329053-slides_Chapter7.Estimation.Part2

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-12-09-13329053-slides_Chapter7.Estimation.Part2.pdf`
Duplicate equivalents: `canvas-12-09-13329053-slides_Chapter7.Estimation.Part2.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 5

## Page 1
### Content
# CHAPTER 7 Point Estimation (Part 2): Properties of MLEs - Overview

### Contents
1. **Consistency** — 1
2. **Fisher Information** — 2
3. **Asymptotic Normality of the MLE** — 5

Reference: Wasserman Sections 9.4-9.10

---

## 1 Consistency

Under regularity conditions, MLEs are consistent.

MOMEs are not always consistent.

<u>Regularity conditions:</u> the space of possible parameters is compact, the true parameter is in the interior of the space of possible parameters, the likelihood function is smooth.

### Visual Description
Text-only slide with a table of contents and an introduction to Consistency. The background is a light gray grid pattern.

---

## Page 2
### Content
## 2 Fisher Information

Useful to <u>systematically</u> obtain the asymptotic variance of MLEs.

**Score function:** Let $X_1$ be a single RV with pdf/pmf $f_\theta(X)$.

$$s_\theta(X_1) = \frac{\partial \log f_\theta(X_1)}{\partial \theta} = \frac{\partial \ell(\theta|X_1)}{\partial \theta}.$$

**Fact:** Under regularity conditions, $\mathbb{E}_\theta [s_\theta(X_1)] = 0$.

Given an i.i.d. sample, the MLE satisfies the sample analog:
$$\frac{1}{n} \sum_{i=1}^n s_{\hat{\theta}}(X_i) = 0,$$

### Visual Description
Text and mathematical formulas defining the score function and its properties. The background is a light gray grid pattern.

---

## Page 3
### Content
**Proof of $\mathbb{E}_\theta [s_\theta(X)] = 0$ :**

We know that $1 = \int f_\theta(x)dx$, for fixed $\theta$.

Now differentiate wrt $\theta$:
$$0 = \int \frac{\partial f_\theta(x)}{\partial \theta} dx$$
$$= \int \frac{\frac{\partial \log f_\theta(x)}{\partial \theta}}{\partial \theta} f_\theta(x)dx$$
$$= \mathbb{E}_\theta [s_\theta(X)].$$

### Visual Description
A mathematical proof showing why the expected value of the score function is zero. The background is a light gray grid pattern.

---

## Page 4
### Content
**Fisher information** = variance of the score:
$$I_1(\theta) = \text{Var}_\theta (s_\theta(X_1)) = \mathbb{E} \left[ (s_\theta(X_1))^2 \right].$$

Under some mild regularity conditions:
$$I_1(\theta) = -\mathbb{E}_\theta \left[ \frac{\partial^2}{\partial \theta^2} \log f_\theta(X_1) \right] = -\mathbb{E}_\theta \left[ \frac{\partial^2}{\partial \theta^2} \ell_\theta(X_1) \right].$$
(Prove later as an exercise)

So the Fisher information measures the variance of the score function, but also the Hessian or the curvature of the log-likelihood. One can intuitively imagine that the curvature of the log-likelihood is related to how well we can estimate the unknown parameter. Roughly, if the log-likelihood is very flat then even if our estimate $\hat{\theta}$ is very close in likelihood it need not be the case that $\hat{\theta}$ is close to $\theta^*$. We will try to further formalize this intuition in the next section.

### Visual Description
Text and mathematical formulas defining Fisher information and providing intuition about its relationship to the curvature of the log-likelihood. The background is a light gray grid pattern.

---

## Page 5
### Content
## 3 Asymptotic Normality of the MLE

Under regularity conditions:
$$\sqrt{n I_1(\theta^*)}(\hat{\theta} - \theta^*) \xrightarrow{d} N(0, 1)$$

yielding, for large $n$:
$$\hat{\theta} \dot{\sim} N\left(\theta^*, \frac{1}{n I_1(\theta^*)}\right).$$

Also,
$$\sqrt{n I_1(\hat{\theta})}(\hat{\theta} - \theta^*) \xrightarrow{d} N(0, 1).$$

and
$$\sqrt{n \widehat{I}_1(\hat{\theta})}(\hat{\theta} - \theta^*) \xrightarrow{d} N(0, 1).$$

where $\widehat{I}_1(\hat{\theta})$ is the *observed information*:
$$\widehat{I}_1(\hat{\theta}) = -\frac{1}{n} \sum_{i=1}^n \left[ \frac{\partial^2}{\partial \theta^2} \log f_\theta(X_i) \Big|_{\theta=\hat{\theta}} \right],$$

### Visual Description
Mathematical formulas describing the asymptotic normality of the Maximum Likelihood Estimator (MLE) and defining observed information. The background is a light gray grid pattern.
