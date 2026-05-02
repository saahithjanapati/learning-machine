# canvas-12-06-13405873-slides_Chapter7.Estimation.Part3.

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-12-06-13405873-slides_Chapter7.Estimation.Part3..pdf`
Duplicate equivalents: `canvas-12-06-13405873-slides_Chapter7.Estimation.Part3..pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 20

## Page 1
### Content
**CHAPTER 7, Part 3: Properties of MLEs (cont’d)**

Reference: Wasserman Sections 9.4-9.10

**Recall: MLE**

1
### Visual Description
Text-only slide with a light gray grid background. The title and reference are centered at the top.

---

## Page 2
### Content
[From AOS]
**Properties of MLEs :**

126 9. Parametric Inference

1. The MLE is **consistent**: $\hat{\theta}_n \xrightarrow{P} \theta_*$ where $\theta_*$ denotes the true value of the parameter $\theta$;
2. The MLE is **equivariant**: if $\hat{\theta}_n$ is the MLE of $\theta$ then $g(\hat{\theta}_n)$ is the MLE of $g(\theta)$;
3. The MLE is **asymptotically Normal**: $(\hat{\theta} - \theta_*)/\widehat{\text{se}} \rightsquigarrow N(0, 1)$; also, the estimated standard error $\widehat{\text{se}}$ can often be computed analytically;
4. The MLE is **asymptotically optimal** or **efficient**: roughly, this means that among all well-behaved estimators, the MLE has the smallest variance, at least for large samples;
5. The MLE is approximately the Bayes estimator. (This point will be explained later.)

We will spend some time explaining what these properties mean and why they are good things. In sufficiently complicated problems, these properties will no longer hold and the MLE will no longer be a good estimator. For now we focus on the simpler situations where the MLE works well. The properties we discuss only hold if the model satisfies certain **regularity conditions**. These are essentially smoothness conditions on $f(x; \theta)$. Unless otherwise stated, we shall tacitly assume that these conditions hold.

### 9.5 Consistency of Maximum Likelihood Estimators

Consistency means that the MLE converges in probability to the true value. To proceed, we need a definition. If $f$ and $g$ are PDF's, define the **Kullback-Leibler distance**$^2$ between $f$ and $g$ to be
$$D(f, g) = \int f(x) \log \left( \frac{f(x)}{g(x)} \right) dx. \quad (9.6)$$
It can be shown that $D(f, g) \geq 0$ and $D(f, f) = 0$. For any $\theta, \psi \in \Theta$ write $D(\theta, \psi)$ to mean $D(f(x; \theta), f(x; \psi))$.

We will say that the model $\mathfrak{F}$ is **identifiable** if $\theta \neq \psi$ implies that $D(\theta, \psi) > 0$. This means that different values of the parameter correspond to different distributions. We will assume from now on the the model is identifiable.

---
$^2$This is not a distance in the formal sense because $D(f, g)$ is not symmetric.

### Visual Description
A scan of a textbook page (likely "All of Statistics" by Wasserman) with blue handwritten notes at the top saying "[From AOS] Properties of MLEs :". The text is organized into numbered points and a section header.

---

## Page 3
### Content
**Score function.** Let $X$ be a **single** RV with pdf/pmf $f(X; \theta)$.

$$s(X; \theta) = \frac{\partial \ell_1(\theta)}{\partial \theta} = \frac{\partial \log f(X; \theta)}{\partial \theta}.$$

Under regularity conditions, $\mathbb{E}_\theta [s(X; \theta)] = 0$.

Given an i.i.d. sample, the MLE satisfies the sample analog:
$$\frac{1}{n} \sum_{i=1}^n s(X_i; \hat{\theta}) = 0,$$

2
### Visual Description
Text-only slide with a light gray grid background. Mathematical formulas are centered.

---

## Page 4
### Content
**Fisher Information.** Variance of the score:
$$I_1(\theta) = \text{Var}_\theta [s(X; \theta)] = \mathbb{E}_\theta [s(X; \theta)^2].$$

Under some mild regularity conditions:
$$I_1(\theta) = -\mathbb{E}_\theta \left[ \frac{\partial^2}{\partial \theta^2} \ell_1(\theta) \right] = -\mathbb{E}_\theta \left[ \frac{\partial^2}{\partial \theta^2} \log f(X; \theta) \right].$$

So the Fisher information measures the variance of the score function, but also the Hessian or the curvature of the log-likelihood. One can intuitively imagine that the curvature of the log-likelihood is related to how well we can estimate the unknown parameter. Roughly, if the log-likelihood is very flat then even if our estimate $\hat{\theta}$ is very close in likelihood it need not be the case that $\hat{\theta}$ is close to $\theta^*$. We will try to further formalize this intuition in the next section.

3
### Visual Description
Text-only slide with a light gray grid background. Mathematical formulas are centered, followed by a paragraph of explanatory text.

---

## Page 5
### Content
**Asymptotic normality of the MLE.** Under regularity conditions:
$$\sqrt{n I_1(\theta^*)} (\hat{\theta} - \theta^*) \xrightarrow{d} N(0, 1)$$

yielding, for large $n$:
$$\hat{\theta} \sim N(\theta^*, (n I_1(\theta^*))^{-1})$$

Also,
$$\sqrt{n I_1(\hat{\theta})} (\hat{\theta} - \theta^*) \xrightarrow{d} N(0, 1)$$

4
### Visual Description
Text-only slide with a light gray grid background. Mathematical formulas showing convergence in distribution and normal approximation are centered.

---

## Page 6
### Content
[From C.B.]

240 PROPERTIES OF A RANDOM SAMPLE Section 5.5

a. $Y_n X_n \to aX$ in distribution.
b. $X_n + Y_n \to X + a$ in distribution.

The proof of Slutsky's Theorem is omitted, since it relies on a characterization of convergence in distribution that we have not discussed. A typical application is illustrated by the following example.

**Example 5.5.18 (Normal approximation with estimated variance)** Suppose that
$$\frac{\sqrt{n}(\bar{X}_n - \mu)}{\sigma} \to n(0, 1),$$
but the value of $\sigma$ is unknown. We have seen in Example 5.5.3 that, if $\lim_{n \to \infty} \text{Var } S_n^2 = 0$, then $S_n^2 \to \sigma^2$ in probability. By Exercise 5.32, $\sigma/S_n \to 1$ in probability. Hence, Slutsky's Theorem tells us
$$\frac{\sqrt{n}(\bar{X}_n - \mu)}{S_n} = \frac{\sigma}{S_n} \frac{\sqrt{n}(\bar{X}_n - \mu)}{\sigma} \to n(0, 1).$$

**5.5.4 The Delta Method**
The previous section gives conditions under which a standardized random variable has a limit normal distribution. There are many times, however, when we are not specifically interested in the distribution of the random variable itself, but rather some function of the random variable.

**Example 5.5.19 (Estimating the odds)** Suppose we observe $X_1, X_2, \dots, X_n$ independent Bernoulli($p$) random variables. The typical parameter of interest is $p$, the success probability, but another popular parameter is $\frac{p}{1-p}$, the *odds*. For example, if the data represent the outcomes of a medical treatment with $p = 2/3$, then a person has odds $2:1$ of getting better. Moreover, if there were another treatment with success probability $r$, biostatisticians often estimate the *odds ratio* $\frac{p}{1-p} / \frac{r}{1-r}$, giving the relative odds of one treatment over another.

As we would typically estimate the success probability $p$ with the observed success probability $\hat{p} = \sum_i X_i/n$, we might consider using $\frac{\hat{p}}{1-\hat{p}}$ as an estimate of $\frac{p}{1-p}$. But what are the properties of this estimator? How might we estimate the variance of $\frac{\hat{p}}{1-\hat{p}}$? Moreover, how can we approximate its sampling distribution?

Intuition abandons us, and exact calculation is relatively hopeless, so we have to rely on an approximation. The Delta Method will allow us to obtain reasonable, approximate answers to our questions.

One method of proceeding is based on using a Taylor series approximation, which allows us to approximate the mean and variance of a function of a random variable. We will also see that these rather straightforward approximations are good enough to obtain a CLT. We begin with a short review of Taylor series.

### Visual Description
A scan of a textbook page (likely "Statistical Inference" by Casella & Berger) with a blue handwritten note at the top saying "[From C.B.]". The page contains mathematical text, theorems, and examples related to Slutsky's Theorem and the Delta Method.

---

## Page 7
### Content
**Example:** Let $X_1, \dots, X_n \sim \text{Bernoulli}(p)$ i.i.d.. Compute an asymptotic CI for $p$.

5
### Visual Description
Text-only slide with a light gray grid background. A single example problem is stated at the top.

---

## Page 8
### Content
Score function:
$$s(X_1; \theta) = \frac{\partial \ell_1(\theta)}{\partial \theta} = \frac{\partial \log f(X_1; \theta)}{\partial \theta}.$$

Fisher information:
$$I_1(\theta) = -\mathbb{E}_\theta \left[ \frac{\partial^2}{\partial \theta^2} \ell_1(\theta) \right] = -\mathbb{E}_\theta \left[ \frac{\partial^2}{\partial \theta^2} \log f(X_1; \theta) \right].$$

6
### Visual Description
Text-only slide with a light gray grid background. Mathematical definitions for the score function and Fisher information are centered.

---
## Page 9
### Content
Asymptotic distribution:
$$\widehat{\theta} \approx N(\theta^*, (nI_1(\theta^*))^{-1})$$

Also,
$$\widehat{\theta} \approx N(\theta^*, (nI_1(\widehat{\theta}))^{-1})$$

(Asymptotic) confidence interval:

7

### Visual Description
Text and mathematical formulas are presented on a light gray grid background. The page number "7" is centered at the bottom.

---
## Page 10
### Content
*Remark*: note that the inverse of the MLE variance is
$$
\begin{aligned}
nI_1(\theta) &= -n \mathbb{E}_\theta \left[ \frac{\partial^2}{\partial \theta^2} \log f(\theta; X_1) \right] \\
&= \sum_{i=1}^n \left( -\mathbb{E}_\theta \left[ \frac{\partial^2}{\partial \theta^2} \log f(\theta; X_1) \right] \right) \\
&= \sum_{i=1}^n \left( -\mathbb{E}_\theta \left[ \frac{\partial^2}{\partial \theta^2} \log f(\theta; X_i) \right] \right) \\
&= - \left( \sum_{i=1}^n \mathbb{E}_\theta \left[ \frac{\partial^2}{\partial \theta^2} \log f(\theta; X_i) \right] \right) \\
&= - \left( \mathbb{E}_\theta \left[ \frac{\partial^2}{\partial \theta^2} \sum_{i=1}^n \log f(\theta; X_i) \right] \right) \\
&= - \left( \mathbb{E}_\theta \left[ \frac{\partial^2}{\partial \theta^2} \log f(\theta; X_1, \dots, X_n) \right] \right)
\end{aligned}
$$

8

### Visual Description
A mathematical derivation showing the relationship between the Fisher information of a single observation and the Fisher information of a sample of size $n$. The content is on a light gray grid background with the page number "8" at the bottom.

---
## Page 11
### Content
To summarize: In the previous example, the log-likelihood is:
$$\ell(p) = S \log p + (n - S) \log(1 - p)$$
where $S = \sum_i X_i$.

Its first derivative (wrt $p$) is:
$$s = \frac{S}{p} - \frac{n - S}{1 - p}.$$

Its second derivative is:
$$s' = -\frac{S}{p^2} - \frac{n - S}{(1 - p)^2}$$

Take minus the expectation to get:
$$I_n(p) = nI_1(p) = \frac{np}{p^2} + \frac{n - np}{(1 - p)^2} = \frac{n}{p(1 - p)}.$$

Thus the standard error of the MLE for large $n$ is $\text{se} = \sqrt{p(1 - p)/n}$

which we can approximate with $\widehat{\text{se}} = \sqrt{\widehat{p}(1 - \widehat{p})/n}$, since $p$ is unknown.

9

### Visual Description
Text and mathematical formulas summarizing the calculation of Fisher information and standard error for a Bernoulli parameter $p$. The content is on a light gray grid background with the page number "9" at the bottom.

---
## Page 12
### Content
**Observed Fisher information**
$$I_1(\theta) = -\mathbb{E}_\theta \left[ \frac{\partial^2}{\partial \theta^2} \log f(X_1; \theta) \right].$$

*observed information*:
$$\widehat{I}_1(\widehat{\theta}) = -\frac{1}{n} \sum_{i=1}^n \left[ \left. \frac{\partial^2}{\partial \theta^2} \log f(X_i; \theta) \right|_{\theta=\widehat{\theta}} \right],$$

11

### Visual Description
Text and mathematical formulas defining the Fisher information and the observed Fisher information. The content is on a light gray grid background with the page number "11" at the bottom.

---
## Page 13
### Content
**Asymptotic Normality of the MLE - recap**
$$\sqrt{nI_1(\theta^*)}(\widehat{\theta} - \theta^*) \xrightarrow{d} N(0, 1)$$

Also,
$$\sqrt{nI_1(\widehat{\theta})}(\widehat{\theta} - \theta^*) \xrightarrow{d} N(0, 1)$$

and
$$\sqrt{n\widehat{I}_1(\widehat{\theta})}(\widehat{\theta} - \theta^*) \xrightarrow{d} N(0, 1)$$

12

### Visual Description
Mathematical formulas recapping the asymptotic normality of the Maximum Likelihood Estimator using different versions of the Fisher information. The content is on a light gray grid background with the page number "12" at the bottom.

---
## Page 14
### Content
**Summary** The MLE is a great estimator when appropriate regularity conditions hold: it is
- invariant (equivariant),
- consistent,
- asymptotically normal with a variance that we (sometimes) can compute.

Often the MLE is also "optimal" in the sense that amongst all unbiased estimators with an asymptotic Gaussian limit it has the lowest variance (this follows from the Cramer-Rao lower bound).

Much of modern statistical theory tries to understand cases when:
(1) the regularity conditions fail,
(2) the asymptotic theory above is not valid (a common example of this is high-dimensional statistics, where the number of parameters greatly exceeds the number of data points)
(3) the MLE is intractable to compute (in for instance graphical models and latent variable models).

13

### Visual Description
Text-only slide.

---
## Page 15
### Content
[From AoS]

130 9. Parametric Inference

When you read an opinion poll in the newspaper, you often see a statement like: the poll is accurate to within one point, 95 percent of the time. They are simply giving a 95 percent confidence interval of the form $\widehat{\theta}_n \pm 2 \widehat{\text{se}}$.

**9.20 Example.** Let $X_1, \dots, X_n \sim \text{Bernoulli}(p)$. The MLE is $\widehat{p}_n = \sum_i X_i/n$ and $f(x;p) = p^x(1-p)^{1-x}$, $\log f(x;p) = x \log p + (1-x) \log(1-p)$,
$$s(X;p) = \frac{X}{p} - \frac{1-X}{1-p},$$
and
$$-s'(X;p) = \frac{X}{p^2} + \frac{1-X}{(1-p)^2}.$$
Thus,
$$I(p) = \mathbb{E}_p(-s'(X;p)) = \frac{p}{p^2} + \frac{(1-p)}{(1-p)^2} = \frac{1}{p(1-p)}.$$
Hence,
$$\widehat{\text{se}} = \frac{1}{\sqrt{nI(\widehat{p}_n)}} = \frac{1}{\sqrt{n/\widehat{p}_n(1-\widehat{p}_n)}} = \left\{ \frac{\widehat{p}_n(1-\widehat{p}_n)}{n} \right\}^{1/2}.$$
An approximate 95 percent confidence interval is
$$\widehat{p}_n \pm 2 \left\{ \frac{\widehat{p}_n(1-\widehat{p}_n)}{n} \right\}^{1/2}.$$ $\blacksquare$

**9.21 Example.** Let $X_1, \dots, X_n \sim N(\theta, \sigma^2)$ where $\sigma^2$ is known. The score function is $s(X;\theta) = (X-\theta)/\sigma^2$ and $s'(X;\theta) = -1/\sigma^2$ so that $I_1(\theta) = 1/\sigma^2$. The MLE is $\widehat{\theta}_n = \bar{X}_n$. According to Theorem 9.18, $\bar{X}_n \approx N(\theta, \sigma^2/n)$. In this case, the Normal approximation is actually exact. $\blacksquare$

**9.22 Example.** Let $X_1, \dots, X_n \sim \text{Poisson}(\lambda)$. Then $\widehat{\lambda}_n = \bar{X}_n$ and some calculations show that $I_1(\lambda) = 1/\lambda$, so
$$\widehat{\text{se}} = \frac{1}{\sqrt{nI(\widehat{\lambda}_n)}} = \sqrt{\frac{\widehat{\lambda}_n}{n}}.$$
Therefore, an approximate $1-\alpha$ confidence interval for $\lambda$ is $\bar{X}_n \pm z_{\alpha/2} \sqrt{\bar{X}_n/n}$. $\blacksquare$

### 9.8 Optimality
Suppose that $X_1, \dots, X_n \sim N(\theta, \sigma^2)$. The MLE is $\widehat{\theta}_n = \bar{X}_n$. Another reasonable estimator of $\theta$ is the sample median $\widetilde{\theta}_n$. The MLE satisfies
$$\sqrt{n}(\widehat{\theta}_n - \theta) \rightsquigarrow N(0, \sigma^2).$$

### Visual Description
A scan of page 130 from a textbook titled "Parametric Inference". It includes examples 9.20, 9.21, and 9.22, and starts section 9.8 on Optimality. There is a blue handwritten note "[From AoS]" at the top left.

---
## Page 16
### Content
9.9 The Delta Method 131

It can be proved that the median satisfies
$$\sqrt{n}(\widetilde{\theta}_n - \theta) \rightsquigarrow N\left(0, \sigma^2 \frac{\pi}{2}\right).$$
This means that the median converges to the right value but has a larger variance than the MLE.
More generally, consider two estimators $T_n$ and $U_n$ and suppose that
$$\sqrt{n}(T_n - \theta) \rightsquigarrow N(0, t^2),$$
and that
$$\sqrt{n}(U_n - \theta) \rightsquigarrow N(0, u^2).$$
We define the asymptotic relative efficiency of $U$ to $T$ by $\text{ARE}(U, T) = t^2/u^2$. In the Normal example, $\text{ARE}(\widetilde{\theta}_n, \widehat{\theta}_n) = 2/\pi \approx .63$. The interpretation is that if you use the median, you are effectively using only a fraction of the data.

**9.23 Theorem.** *If $\widehat{\theta}_n$ is the MLE and $\widetilde{\theta}_n$ is any other estimator then* $^3$
$$\text{ARE}(\widetilde{\theta}_n, \widehat{\theta}_n) \le 1.$$
Thus, the MLE has the smallest (asymptotic) variance and we say that the MLE is **efficient** or **asymptotically optimal**.

This result is predicated upon the assumed model being correct. If the model is wrong, the MLE may no longer be optimal. We will discuss optimality in more generality when we discuss decision theory in Chapter 12.

### 9.9 The Delta Method
Let $\tau = g(\theta)$ where $g$ is a smooth function. The maximum likelihood estimator of $\tau$ is $\widehat{\tau} = g(\widehat{\theta})$. Now we address the following question: what is the distribution of $\widehat{\tau}$?

**9.24 Theorem (The Delta Method).** *If $\tau = g(\theta)$ where $g$ is differentiable and $g'(\theta) \neq 0$ then*
$$\frac{(\widehat{\tau}_n - \tau)}{\widehat{\text{se}}(\widehat{\tau})} \rightsquigarrow N(0, 1)$$ (9.15)

---
$^3$The result is actually more subtle than this but the details are too complicated to consider here.

### Visual Description
A scan of page 131 from a textbook. It continues the discussion on optimality, comparing the median to the MLE, and introduces Section 9.9 on The Delta Method, including Theorem 9.24.

---
## Page 17
### Content
**Multiparameter Problems** Assume $\theta = (\theta_1, \dots, \theta_k)$.

$L(\theta)$ and $\ell(\theta)$ defined as before.

The score function $S(\theta)$ is now a vector of length $k$ with $j^{\text{th}}$ component $\partial \ell_n(\theta)/\partial \theta_j$.

The Fisher information $I(\theta)$ is now a $k \times k$ matrix; it is the variance-covariance matrix of the score:
$$I(r, s) = -\mathbb{E}_\theta \left[ \frac{\partial^2 \ell(\theta)}{\partial \theta_r \partial \theta_s} \right].$$

We then have that
$$\sqrt{n}(\widehat{\theta} - \theta) \rightsquigarrow N(0, J)$$
where $J = I^{-1}(\theta)$.

The SE of $\widehat{\theta}_j$ is $\text{se}(\widehat{\theta}_j) = \sqrt{J_{jj}(\theta)/n}$.

The confidence interval for $\theta_j$ is $\widehat{\theta}_j \pm z_{\alpha/2} \widehat{\text{se}}(\widehat{\theta}_j)$.

14

### Visual Description
Text-only slide with mathematical formulas presented on a light gray grid background.

---
## Page 18
### Content
**Example:** Let $X_1, \dots, X_n \sim N(\theta, 1)$ i.i.d.. Compute an approximate confidence interval for $\tau = e^\theta$.

15

### Visual Description
Text-only slide on a light gray grid background.

---
## Page 19
### Content
**36-700: Homework Set 6**
Due Thursday October 23 at 3 pm — no late homework
Submit on Gradescope

1. Suppose we have i.i.d. samples $X_1, \dots, X_n \sim U[0, \theta]$.
    (a) Sketch the likelihood function for $\theta \in [0, 10]$. (It is a function of $\theta$ — what shape does it have?)
    (b) Compute the MLE of $\theta$.
    (c) Compute the MOME of $\theta$.
    (d) Is the distribution of the MOME at least approximately Gaussian? Explain.
    (e) Investigate by simulation whether or not the MLE of $\theta$ is asymptotically Gaussian. To do that, assume that the true value of $\theta$ is, say, $\theta = 10$. Then for a fixed $n$, simulate an i.i.d. sample $X_1, \dots, X_n \sim U[0, \theta]$ and obtain the MLE $\widehat{\theta}$. Then repeat this $B = 500$ times, so that for this fixed $n$, you have generated $B$ realizations of the MLE. Produce a histogram of these $B$ values (or a Normal QQ plot if you know how to interpret it).
    Now repeat this entire process for $n \in \{10, 100, 1000\}$, so that you have 3 histograms (you can either plot them separately or overlaid on one plot). Make sure to clearly label your plots and include your code.
    Does it appear that the distribution of the MLE tends to a Gaussian distribution as $n$ increases? Explain what you see.

2. The exponential distribution (in its **scale** parameterization) has density
$$p(x; \beta) = \begin{cases} \frac{1}{\beta} \exp(-x/\beta) & x \ge 0 \\ 0 & x < 0, \end{cases}$$
where $\beta > 0$ is our parameter of interest. Suppose we are given a sample of size $n$ from an exponential distribution with unknown parameter $\beta$. Compute the MLE for $\beta$, compute the Fisher information, use this to determine the asymptotic distribution of the MLE, and construct an asymptotically valid $1 - \alpha$ confidence interval for $\beta$.
Explain why the limiting distribution you obtained is reasonable (how else could you have obtained this limiting distribution?).

3. The exponential distribution (in its **rate** parameterization) has density
$$p(x; \lambda) = \begin{cases} \lambda \exp(-\lambda x) & x \ge 0 \\ 0 & x < 0, \end{cases}$$
where $\lambda > 0$ is our parameter of interest. Suppose we are given a sample of size $n$ from an exponential distribution with unknown parameter $\lambda$. Compute the MLE for $\lambda$, compute the Fisher information, use this to determine the asymptotic distribution of the MLE, and construct an asymptotically valid $1 - \alpha$ confidence interval for $\lambda$.
Explain why the limiting distribution you obtained is reasonable (how else could you have obtained this limiting distribution?). It might be helpful to recall the delta method.

1

### Visual Description
Text-only slide containing homework problems.

---
## Page 20
### Content
4. Let $X_1, \dots, X_n \sim \text{Poisson}(\lambda)$.
    (a) Find the method of moments estimator, the maximum likelihood estimator (MLE) and the Fisher information $I(\lambda)$.
    (b) Use the fact that the mean and variance of the Poisson distribution are both $\lambda$ to propose *two unbiased* estimators of $\lambda$. Show that one of these estimators has a larger variance than the other. Explain why the result makes sense based on your answer in (a).

2

### Visual Description
Text-only slide containing the continuation of homework problems.
