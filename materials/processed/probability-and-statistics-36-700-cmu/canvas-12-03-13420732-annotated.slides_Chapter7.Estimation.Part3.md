# canvas-12-03-13420732-annotated.slides_Chapter7.Estimation.Part3

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-12-03-13420732-annotated.slides_Chapter7.Estimation.Part3.pdf`
Duplicate equivalents: `canvas-12-03-13420732-annotated.slides_Chapter7.Estimation.Part3.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 29

## Page 1
### Content
**CHAPTER 7, Part 3: Properties of MLEs (cont’d)**

Reference: Wasserman Sections 9.4-9.10

**Recall: MLE**
Assume $X_1, \dots, X_n \overset{iid}{\sim} f(x; \theta^*)$

Likelihood function
$\mathcal{L}(X_1, \dots, X_n; \theta) = \text{joint distr of observed data } X_1, \dots, X_n \text{ (treated as a function of } \theta)$
$\underset{iid \text{ data}}{=} \prod_{i=1}^n f(X_i; \theta)$

NLL (Negative Log-Likelihood)
$-\ell_n(\theta) = -\log f(X^n; \theta)$

### Visual Description
The slide features handwritten notes in blue and red on a light gray grid background. There is a plot of the likelihood function $\mathcal{L}(X_1, \dots, X_n; \theta)$ against $\theta$, showing a bell-shaped curve with its peak labeled as $\hat{\theta}$. The term $X^n$ is used as shorthand for the sequence $X_1, \dots, X_n$.

---
## Page 2
### Content
**Taylor expansion of $\ell_n(\theta)$ Near $\theta = \theta_*$**

$\underbrace{\ell_n'(\hat{\theta})}_{=0} \approx \ell_n'(\theta_*) + \ell_n''(\theta_*)(\hat{\theta}_n - \theta_*)$

$\sqrt{n}(\hat{\theta}_n - \theta_*) = \frac{\frac{1}{\sqrt{n}}\ell_n'(\theta_*)}{-\frac{1}{n}\ell_n''(\theta_*)}$

*   **Top:** $\frac{1}{\sqrt{n}}\ell_n'(\theta_*) = \frac{1}{\sqrt{n}}\sum_{i=1}^n S_1(X_i; \theta_*) \xrightarrow{d} N(0, I_1(\theta_*))$ by CLT
*   **Bottom:** $-\frac{1}{n}\ell_n''(\theta_*) \xrightarrow{P} I_1(\theta_*)$ by LLN

**Recall:**
*   $E[S_1(X_i; \theta)] = 0$
*   $Var[S_1(X_i; \theta)] = I_1(\theta)$
*   $E[-\ell_1''(\theta)] = I_1(\theta)$

Apply Slutsky's th.

### Visual Description
Handwritten notes on a grid background. A graph at the top shows the negative log-likelihood $-\ell_n(\theta)$ as a convex curve with a minimum at $\hat{\theta}(X^n)$, which is near the true parameter $\theta_*$. Mathematical derivations in blue and red explain the asymptotic distribution of the MLE using Taylor expansion, Central Limit Theorem (CLT), and Law of Large Numbers (LLN).

---
## Page 3
### Content
[From AOS]
**Properties of MLEs:**

1.  The MLE is **consistent**: $\hat{\theta}_n \xrightarrow{P} \theta_*$ where $\theta_*$ denotes the true value of the parameter $\theta$;
2.  The MLE is **equivariant**: if $\hat{\theta}_n$ is the MLE of $\theta$ then $g(\hat{\theta}_n)$ is the MLE of $g(\theta)$;
3.  The MLE is **asymptotically Normal**: $(\hat{\theta} - \theta_*)/se \rightsquigarrow N(0, 1)$; also, the estimated standard error $\hat{se}$ can often be computed analytically; (large $n$)
4.  The MLE is **asymptotically optimal or efficient**: roughly, this means that among all well-behaved estimators, the MLE has the smallest variance, at least for large samples; (**asymptotically unbiased**)
5.  The MLE is approximately the Bayes estimator. (This point will be explained later.)

We will spend some time explaining what these properties mean and why they are good things... The properties we discuss only hold if the model satisfies certain **regularity conditions**. These are essentially smoothness conditions on $f(x; \theta)$.

**9.5 Consistency of Maximum Likelihood Estimators**
Consistency means that the MLE converges in probability to the true value. To proceed, we need a definition. If $f$ and $g$ are PDFs, define the **Kullback-Leibler distance** between $f$ and $g$ to be
$$D(f, g) = \int f(x) \log \left( \frac{f(x)}{g(x)} \right) dx. \quad (9.6)$$
It can be shown that $D(f, g) \ge 0$ and $D(f, f) = 0$. For any $\theta, \psi \in \Theta$ write $D(\theta, \psi)$ to mean $D(f(x; \theta), f(x; \psi))$.
We will say that the model $\mathcal{F}$ is **identifiable** if $\theta \neq \psi$ implies that $D(\theta, \psi) > 0$. This means that different values of the parameter correspond to different distributions.

### Visual Description
This slide contains a scan of a textbook page (likely "All of Statistics" by Wasserman) with blue handwritten annotations. Key terms like "consistent", "equivariant", "asymptotically Normal", and "regularity conditions" are highlighted or pointed to with arrows. A handwritten note on the side says "$\hat{\theta}$ intercept of $\theta$".

---
## Page 4
### Content
**Score function.** Let $X$ be a **single** RV with pdf/pmf $f(X; \theta)$.
**Def:** $s(X; \theta) \overset{def}{=} \frac{\partial \ell_1(\theta)}{\partial \theta} = \frac{\partial \log f(X; \theta)}{\partial \theta}$.

Under regularity conditions, $E_{\theta^*}[s(X; \theta)] = 0$. (where $X \sim f(x; \theta^*)$)

Given an i.i.d. sample, the MLE satisfies the sample analog:
$$\frac{1}{n} \sum_{i=1}^n s(X_i; \hat{\theta}) = 0,$$

Handwritten note:
$\frac{1}{n} \sum_{i=1}^n s(X_i; \theta) \big|_{\theta=\hat{\theta}} \xrightarrow{P} E_{\theta^*}[s(X; \theta)] \big|_{\theta=\hat{\theta}}$ by LLN
$\hat{\theta}(X_1, \dots, X_n)$

### Visual Description
The slide contains typed definitions and equations for the score function on a grid background. Blue and red handwritten annotations clarify that $X$ is a random variable (RV) and show the application of the Law of Large Numbers (LLN) to the sample score function evaluated at the MLE.

---
## Page 5
### Content
**Q: Quality of the MLE?**

**Fisher Information.** Variance of the score:
**Def:** $I_1(\theta) \overset{def}{=} Var_{\theta}[s(X; \theta)] = E_{\theta}[s(X; \theta)^2]$.
(where $X \sim f(x; \theta)$)

Under some mild regularity conditions:
**Theorem:** $I_1(\theta) = -E_{\theta} \left[ \frac{\partial^2}{\partial \theta^2} \ell_1(\theta) \right] = -E_{\theta} \left[ \frac{\partial^2}{\partial \theta^2} \log f(X; \theta) \right]$.
(see e.g. printed notes for proof)

**Q: Fisher info for $X^n = (X_1, \dots, X_n)$ for IID data?**

So the Fisher information measures the variance of the score function, but also the Hessian or the curvature of the log-likelihood. One can intuitively imagine that the curvature of the log-likelihood is related to how well we can estimate the unknown parameter. Roughly, if the log-likelihood is very flat then even if our estimate $\hat{\theta}$ is very close in likelihood it need not be the case that $\hat{\theta}$ is close to $\theta^*$. We will try to further formalize this intuition in the next section.

### Visual Description
Typed text on a grid background with blue handwritten questions and annotations. A red box highlights the definition of Fisher Information. An arrow points from the theorem to a note about finding the proof in printed notes. A yellow highlight emphasizes the relationship between curvature and estimation quality.

---
## Page 6
### Content
$I_n(\theta) \overset{def}{=} Var_{\theta}(S(X^n; \theta))$
$= Var_{\theta} \left( \frac{\partial}{\partial \theta} \log f(X^n; \theta) \right)$

iid data:
$= Var_{\theta} \left( \sum_{i=1}^n s(X_i; \theta) \right)$

by independence:
$= \sum_{i=1}^n Var_{\theta}[s(X_i; \theta)]$

$X_1, \dots, X_n$ identically dist:
$= n I_1(\theta)$

**$I_n(\theta) = n I_1(\theta)$**

### Visual Description
Handwritten derivation in blue and red on a grid background. It shows the step-by-step proof that the Fisher Information for a sample of size $n$ is $n$ times the Fisher Information of a single observation, utilizing the properties of independent and identically distributed (iid) data.

---
## Page 7
### Content
**Asymptotic normality of the MLE.** Under regularity conditions:
$$\sqrt{n I_1(\theta^*)}(\hat{\theta} - \theta^*) \xrightarrow{d} N(0, 1)$$
(will prove later)

yielding, for large $n$:
$\hat{\theta}_n$ asymptotically unbiased
asymptotic var $var(\hat{\theta}_n) = \frac{1}{n I_1(\theta^*)} \approx \frac{1}{n I_1(\hat{\theta})}$
$$\hat{\theta} \sim N(\theta^*, (n I_1(\theta^*))^{-1})$$

Also,
$$\sqrt{n I_1(\hat{\theta})}(\hat{\theta} - \theta^*) \xrightarrow{d} N(0, 1)$$

### Visual Description
Typed text on a grid background with blue handwritten annotations. A red box highlights the asymptotic normal distribution of the MLE. Arrows and notes explain that the MLE is asymptotically unbiased and provide the formula for its asymptotic variance.

---
## Page 8
### Content
[From C.B.]
**PROPERTIES OF A RANDOM SAMPLE** Section 5.5
a. $Y_n X_n \to aX$ in distribution.
b. $X_n + Y_n \to X + a$ in distribution.

The proof of Slutsky's Theorem is omitted... A typical application is illustrated by the following example.

**Example 5.5.18 (Normal approximation with estimated variance)** Suppose that
**By CLT,** $\frac{\sqrt{n}(\bar{X}_n - \mu)}{\sigma} \to N(0, 1)$,
but the value of $\sigma$ is unknown. We have seen in Example 5.5.3 that, if $\lim_{n \to \infty} Var S_n^2 = 0$, then $S_n^2 \xrightarrow{P} \sigma^2$ in probability. By Exercise 5.32, $\sigma/S_n \to 1$ in probability. Hence, Slutsky's Theorem tells us
$$\frac{\sqrt{n}(\bar{X}_n - \mu)}{S_n} = \frac{\sigma}{S_n} \frac{\sqrt{n}(\bar{X}_n - \mu)}{\sigma} \xrightarrow{d} N(0, 1).$$
(Note: $\frac{\sigma}{S_n} \xrightarrow{P} 1$ and $\frac{\sqrt{n}(\bar{X}_n - \mu)}{\sigma} \xrightarrow{d} N(0, 1)$ by cont. mapping th.)

**5.5.4 The Delta Method**
...

### Visual Description
A scan of a textbook page (likely Casella & Berger) with blue and red handwritten annotations. The annotations identify the source as "C.B.", highlight the application of the Central Limit Theorem (CLT), and explain the convergence steps using Slutsky's Theorem and the Continuous Mapping Theorem.

---==End of PDF==
## Page 9
### Content
**Example:** Let $X_1, \dots, X_n \sim \text{Bernoulli}(p)$ i.i.d. Compute an asymptotic CI for $p$.

*Handwritten notes:*
$p \in [0, 1]$
using properties of MLEs.
From previous class we derived MLE of $\hat{p}$
$\hat{p}_{MLE} = \frac{1}{n} \sum_{i=1}^n X_i = \bar{X}_n$

### Visual Description
The slide has a blue grid background. It contains typed text for the example prompt and blue handwritten notes providing additional context and the formula for the Maximum Likelihood Estimator (MLE) of $p$.

---

## Page 10
### Content
$X_1, \dots, X_n \overset{iid}{\sim} \text{Ber}(\theta)$

Score function:
$$s(X_1; \theta) = \frac{\partial \ell_1(\theta)}{\partial \theta} = \frac{\partial \log f(X_1; \theta)}{\partial \theta}$$

*Handwritten derivation:*
$f(x_i; \theta) = \theta^{X_i}(1-\theta)^{1-X_i}$
$s(X_i; \theta) = \frac{\partial}{\partial \theta} \log f(X_i; \theta) = \frac{\partial}{\partial \theta} (X_i \log \theta + (1-X_i) \log(1-\theta))$
$s(X_i; \theta) = \frac{X_i}{\theta} - \frac{1-X_i}{1-\theta}$

Fisher information:
$$I_1(\theta) = -\mathbb{E}_\theta \left[ \frac{\partial^2}{\partial \theta^2} \ell_1(\theta) \right] = -\mathbb{E}_\theta \left[ \frac{\partial^2}{\partial \theta^2} \log f(X_1; \theta) \right]$

*Handwritten derivation continued:*
$\frac{\partial}{\partial \theta} s(X_i; \theta) = -\frac{X_i}{\theta^2} - \frac{1-X_i}{(1-\theta)^2}$
$I_1(\theta) = \mathbb{E} \left[ \frac{X_1}{\theta^2} + \frac{1-X_1}{(1-\theta)^2} \right] = \frac{\mathbb{E}[X_1]}{\theta^2} + \frac{\mathbb{E}[1-X_1]}{(1-\theta)^2}$
$= \frac{\theta}{\theta^2} + \frac{1-\theta}{(1-\theta)^2} = \frac{1}{\theta} + \frac{1}{1-\theta}$
$= \frac{1}{\theta(1-\theta)} = \frac{1}{p(1-p)}$

### Visual Description
The slide has a blue grid background. It features typed definitions for the score function and Fisher information, heavily annotated with blue and red handwritten math showing the step-by-step derivation for a Bernoulli distribution.

---

## Page 11
### Content
Asymptotic distribution:
$$\hat{\theta} \approx N(\theta^*, (n I_1(\theta^*))^{-1})$$
*Handwritten:* $\hat{p} \approx N(p, \frac{p(1-p)}{n})$

Also,
$$\hat{\theta} \approx N(\theta^*, (n I_1(\hat{\theta}))^{-1})$$
*Handwritten:* $\hat{p} \approx N(p^*, \frac{\hat{p}(1-\hat{p})}{n})$ (estimated var)

(Asymptotic) confidence interval:
*Handwritten:* normal-based C.I.
$$\hat{p} \pm z_{\alpha/2} \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$$

### Visual Description
The slide has a blue grid background. It presents typed formulas for the asymptotic distribution of an estimator and the resulting confidence interval, with blue handwritten notes applying these general formulas to the Bernoulli parameter $p$.

---

## Page 12
### Content
*Remark:* note that the inverse of the MLE variance is
$$n I_1(\theta) = -n \mathbb{E}_\theta \left[ \frac{\partial^2}{\partial \theta^2} \log f(\theta; X_1) \right]$$
$$= \sum_{i=1}^n \left( -\mathbb{E}_\theta \left[ \frac{\partial^2}{\partial \theta^2} \log f(\theta; X_1) \right] \right)$$
$$= \sum_{i=1}^n \left( -\mathbb{E}_\theta \left[ \frac{\partial^2}{\partial \theta^2} \log f(\theta; X_i) \right] \right)$$
$$= - \left( \sum_{i=1}^n \mathbb{E}_\theta \left[ \frac{\partial^2}{\partial \theta^2} \log f(\theta; X_i) \right] \right)$$
$$= - \left( \mathbb{E}_\theta \left[ \frac{\partial^2}{\partial \theta^2} \sum_{i=1}^n \log f(\theta; X_i) \right] \right)$$
$$= - \left( \mathbb{E}_\theta \left[ \frac{\partial^2}{\partial \theta^2} \log f(\theta; X_1, \dots, X_n) \right] \right)$$

### Visual Description
Text-only slide with a blue grid background. It shows a mathematical proof that the Fisher information for a sample of size $n$ is $n$ times the Fisher information of a single observation.

---

## Page 13
### Content
To summarize: In the previous example, the log-likelihood is:
$$\ell(p) = S \log p + (n - S) \log(1 - p)$$
where $S = \sum_i X_i$.

Its first derivative (wrt $p$) is:
$$s = \frac{S}{p} - \frac{n - S}{1 - p}$$

Its second derivative is:
$$s' = -\frac{S}{p^2} - \frac{n - S}{(1 - p)^2}$$

Take minus the expectation to get:
$$I_n(p) = n I_1(p) = \frac{np}{p^2} + \frac{n - np}{(1 - p)^2} = \frac{n}{p(1 - p)}$$

Thus the standard error of the MLE for large $n$ is $se = \sqrt{p(1 - p)/n}$
which we can approximate with $\hat{se} = \sqrt{\hat{p}(1 - \hat{p})/n}$, since $p$ is unknown.

### Visual Description
The slide has a blue grid background. It provides a typed summary of the log-likelihood, its derivatives, and the resulting Fisher information and standard error for the Bernoulli example. There are minor blue handwritten underlines.

---

## Page 14
### Content
**Observed Fisher information**
$$I_1(\theta) = -\mathbb{E}_\theta \left[ \frac{\partial^2}{\partial \theta^2} \log f(X_1; \theta) \right]$$

observed information:
$$\hat{I}_1(\hat{\theta}) = -\frac{1}{n} \sum_{i=1}^n \left[ \frac{\partial^2}{\partial \theta^2} \log f(X_i; \theta) \big|_{\theta=\hat{\theta}} \right]$$

### Visual Description
The slide has a blue grid background. It defines the expected Fisher information and the observed Fisher information using typed formulas, with blue circles and arrows highlighting key parts of the notation.

---

## Page 15
### Content
**Asymptotic Normality of the MLE - recap**
$$\sqrt{n I_1(\theta^*)} (\hat{\theta} - \theta^*) \xrightarrow{d} N(0, 1)$$

Also,
$$\sqrt{n I_1(\hat{\theta})} (\hat{\theta} - \theta^*) \xrightarrow{d} N(0, 1)$$

and
$$\sqrt{n \hat{I}_1(\hat{\theta})} (\hat{\theta} - \theta^*) \xrightarrow{d} N(0, 1)$$

*Handwritten notes:*
Prove this.
Under reg. conditions, $\hat{\theta} \xrightarrow{p} \theta^*$, $I(\hat{\theta}) \xrightarrow{p} I(\theta^*)$ assuming $I(\theta)$ is a continuous function of $\theta$.

### Visual Description
The slide has a blue grid background. It recaps three forms of the asymptotic normality result for MLEs. Blue and red handwritten notes add a prompt to "Prove this" and state the regularity conditions required for the result.

---

## Page 16
### Content
(From AOS)
136 9. Parametric Inference

**9.31 Lemma.** *The score function satisfies*
$$\mathbb{E}_\theta [s(X; \theta)] = 0.$$

PROOF. Note that $1 = \int f(x; \theta) dx$. Differentiate both sides of this equation to conclude that
$$0 = \frac{\partial}{\partial \theta} \int f(x; \theta) dx = \int \frac{\partial}{\partial \theta} f(x; \theta) dx$$
$$= \int \frac{\frac{\partial f(x;\theta)}{\partial \theta}}{f(x;\theta)} f(x;\theta) dx = \int \frac{\partial \log f(x;\theta)}{\partial \theta} f(x;\theta) dx$$
$$= \int s(x; \theta) f(x; \theta) dx = \mathbb{E}_\theta s(X; \theta). \blacksquare$$

PROOF OF THEOREM 9.18. Let $\ell(\theta) = \log \mathcal{L}(\theta)$. Then,
$0 = \ell'(\hat{\theta}) \approx \ell'(\theta) + (\hat{\theta} - \theta) \ell''(\theta)$. (by Taylor exp, $\hat{\theta}$ maximized the log likelihood)
Rearrange the above equation to get $\hat{\theta} - \theta = -\ell'(\theta)/\ell''(\theta)$ or, in other words,
$$\sqrt{n}(\hat{\theta} - \theta) = \frac{\frac{1}{\sqrt{n}} \ell'(\theta)}{-\frac{1}{n} \ell''(\theta)} = \frac{\text{TOP}}{\text{BOTTOM}}.$$
Let $Y_i = \frac{\partial \log f(X_i; \theta)}{\partial \theta}$. Recall that $\mathbb{E}(Y_i) = 0$ from the previous lemma and also $\mathbb{V}(Y_i) = I(\theta)$. Hence,
$\text{TOP} = n^{-1/2} \sum_i Y_i = \sqrt{n} \bar{Y} = \sqrt{n}(\bar{Y} - 0) \rightsquigarrow W \sim N(0, I(\theta))$
by the central limit theorem. Let $A_i = -\frac{\partial^2 \log f(X_i; \theta)}{\partial \theta^2}$. Then $\mathbb{E}(A_i) = I(\theta)$ and
$\text{BOTTOM} = \bar{A} \xrightarrow{p} I(\theta)$
by the law of large numbers. Apply Theorem 5.5 part (e), to conclude that
$\sqrt{n}(\hat{\theta} - \theta) \rightsquigarrow \frac{W}{I(\theta)} \xrightarrow{d} N\left(0, \frac{1}{I(\theta)}\right)$. (By Slutsky's th.)
Assuming that $I(\theta)$ is a continuous function of $\theta$, it follows that $I(\hat{\theta}_n) \xrightarrow{p} I(\theta)$.

*Handwritten notes:*
$\sqrt{n I_1(\theta)}(\hat{\theta} - \theta) \xrightarrow{d} N(0, 1)$ for $x^n = (X_1, \dots, X_n)$
$\sqrt{n I_1(\hat{\theta})}(\hat{\theta} - \theta) \xrightarrow{d} N(0, 1)$

### Visual Description
This page is a scan from a textbook (All of Statistics) with blue handwritten annotations. It contains a lemma about the score function and a proof for the asymptotic normality of the MLE using Taylor expansion, the CLT, and Slutsky's Theorem. Blue handwriting highlights key steps and final results.
## Page 17
### Content
9.13 Appendix 137

The first term tends in distribution to $N(0,1)$. The second term tends in probability to 1. The result follows from Theorem 5.5 part (e). $\blacksquare$

OUTLINE OF PROOF OF THEOREM 9.24. Write
$$\widehat{\tau}_n = g(\widehat{\theta}_n) \approx g(\theta) + (\widehat{\theta}_n - \theta)g'(\theta) = \tau + (\widehat{\theta}_n - \theta)g'(\theta).$$
Thus,
$$\sqrt{n}(\widehat{\tau}_n - \tau) \approx \sqrt{n}(\widehat{\theta}_n - \theta)g'(\theta),$$
and hence
$$\frac{\sqrt{nI(\theta)}(\widehat{\tau}_n - \tau)}{g'(\theta)} \approx \sqrt{nI(\theta)}(\widehat{\theta}_n - \theta).$$
Theorem 9.18 tells us that the right-hand side tends in distribution to a $N(0,1)$. Hence,
$$\frac{\sqrt{nI(\theta)}(\widehat{\tau}_n - \tau)}{g'(\theta)} \rightsquigarrow N(0,1)$$
or, in other words,
$$\widehat{\tau}_n \approx N(\tau, \text{se}^2(\widehat{\tau}_n)),$$
where
$$\text{se}^2(\widehat{\tau}_n) = \frac{(g'(\theta))^2}{nI(\theta)}.$$
The result remains true if we substitute $\widehat{\theta}_n$ for $\theta$ by Theorem 5.5 part (e). $\blacksquare$

9.13.2 Sufficiency
A statistic is a function $T(x^n)$ of the data. A sufficient statistic is a statistic that contains all the information in the data. To make this more formal, we need some definitions.

> **9.32 Definition.** Write $x^n \leftrightarrow y^n$ if $f(x^n; \theta) = c f(y^n; \theta)$ for some constant $c$ that might depend on $x^n$ and $y^n$ but not $\theta$. A statistic $T(x^n)$ is **sufficient** if $T(x^n) \leftrightarrow T(y^n)$ implies that $x^n \leftrightarrow y^n$.

Notice that if $x^n \leftrightarrow y^n$, then the likelihood function based on $x^n$ has the same shape as the likelihood function based on $y^n$. Roughly speaking, a statistic is sufficient if we can calculate the likelihood function knowing only $T(x^n)$.

**9.33 Example.** Let $X_1, \dots, X_n \sim \text{Bernoulli}(p)$. Then $\mathcal{L}(p) = p^S(1-p)^{n-S}$ where $S = \sum_i X_i$, so $S$ is sufficient. $\blacksquare$

### Visual Description
Text-only slide containing mathematical proofs and definitions. Definition 9.32 is enclosed in a black rectangular box.

---
## Page 18
### Content
**Summary** The MLE is a great estimator when appropriate regularity conditions hold: it is
- invariant (equivariant),
- consistent,
- asymptotically normal with a variance that we (sometimes) can compute.

Often the MLE is also "optimal" in the sense that amongst all unbiased estimators with an asymptotic Gaussian limit it has the lowest variance (this follows from the **Cramer-Rao lower bound**).

Much of modern statistical theory tries to understand cases when:
(1) the regularity conditions fail,
(2) the asymptotic theory above is not valid (a common example of this is high-dimensional statistics, where the number of parameters greatly exceeds the number of data points)
(3) the MLE is intractable to compute (in for instance graphical models and latent variable models).

13

### Visual Description
Text slide on a light gray grid background. A blue box highlights the paragraph about MLE optimality and the Cramer-Rao lower bound. The phrase "Cramer-Rao lower bound" is underlined in red and yellow.

---
## Page 19
### Content
<u>Cramer-Rao Lower Bound</u>

Suppose $X_1, \dots, X_n \overset{iid}{\sim} f(x; \theta)$
and $\widehat{\theta}$ is an **unbiased** estimator

Then $$\text{Var}(\widehat{\theta}) \geq \frac{1}{n I(\theta)}$$

It follows that the MLE is asymptotically optimal (efficient)

### Visual Description
Handwritten notes on a light gray grid background. The variance inequality is enclosed in a blue box, and the Fisher information term $I(\theta)$ is circled in red.

---
## Page 20
### Content
[From AoS]

130 9. Parametric Inference

When you read an opinion poll in the newspaper, you often see a statement like: the poll is accurate to within one point, 95 percent of the time. They are simply giving a 95 percent confidence interval of the form $\widehat{\theta}_n \pm 2 \text{ se}$.

**9.20 Example.** Let $X_1, \dots, X_n \sim \text{Bernoulli}(p)$. The MLE is $\widehat{p}_n = \sum_i X_i/n$ and $f(x;p) = p^x(1-p)^{1-x}$, $\log f(x;p) = x \log p + (1-x) \log(1-p)$,
$$s(X;p) = \frac{X}{p} - \frac{1-X}{1-p},$$
and
$$-s'(X;p) = \frac{X}{p^2} + \frac{1-X}{(1-p)^2}.$$
Thus,
$$I(p) = \mathbb{E}_p(-s'(X;p)) = \frac{p}{p^2} + \frac{(1-p)}{(1-p)^2} = \frac{1}{p(1-p)}.$$
Hence,
$$\text{se} = \frac{1}{\sqrt{nI(\widehat{p}_n)}} = \frac{1}{\sqrt{nI(\widehat{p}_n)}} = \left\{ \frac{\widehat{p}(1-\widehat{p})}{n} \right\}^{1/2}.$$
An approximate 95 percent confidence interval is
$$\widehat{p}_n \pm 2 \left\{ \frac{\widehat{p}_n(1-\widehat{p}_n)}{n} \right\}^{1/2}. \blacksquare$$

**9.21 Example.** Let $X_1, \dots, X_n \sim N(\theta, \sigma^2)$ where $\sigma^2$ is known. The score function is $s(X;\theta) = (X-\theta)/\sigma^2$ and $s'(X;\theta) = -1/\sigma^2$ so that $I_1(\theta) = 1/\sigma^2$. The MLE is $\widehat{\theta}_n = \bar{X}_n$. According to Theorem 9.18, $\bar{X}_n \approx N(\theta, \sigma^2/n)$. In this case, the Normal approximation is actually exact. $\blacksquare$

**9.22 Example.** Let $X_1, \dots, X_n \sim \text{Poisson}(\lambda)$. Then $\widehat{\lambda}_n = \bar{X}_n$ and some calculations show that $I_1(\lambda) = 1/\lambda$, so
$$\text{se} = \frac{1}{\sqrt{nI(\widehat{\lambda}_n)}} = \sqrt{\frac{\widehat{\lambda}_n}{n}}.$$
Therefore, an approximate $1-\alpha$ confidence interval for $\lambda$ is $\bar{X}_n \pm z_{\alpha/2} \sqrt{\bar{X}_n/n}$. $\blacksquare$

**9.8 Optimality**
Suppose that $X_1, \dots, X_n \sim N(\theta, \sigma^2)$. The MLE is $\widehat{\theta}_n = \bar{X}_n$. Another reasonable estimator of $\theta$ is the sample median $\tilde{\theta}_n$. The MLE satisfies
$$\sqrt{n}(\widehat{\theta}_n - \theta) \rightsquigarrow N(0, \sigma^2).$$

### Visual Description
A scanned page from a textbook (likely "All of Statistics" by Wasserman, as indicated by the blue handwritten note "[From AoS]"). The page contains examples of calculating standard errors and confidence intervals for Bernoulli, Normal, and Poisson distributions.

---
## Page 21
### Content
9.9 The Delta Method 131

It can be proved that the median satisfies
$$\sqrt{n}(\tilde{\theta}_n - \theta) \rightsquigarrow N\left(0, \sigma^2 \frac{\pi}{2}\right).$$
This means that the median converges to the right value but has a larger variance than the MLE.
More generally, consider two estimators $T_n$ and $U_n$ and suppose that
$$\sqrt{n}(T_n - \theta) \rightsquigarrow N(0, t^2),$$
and that
$$\sqrt{n}(U_n - \theta) \rightsquigarrow N(0, u^2).$$
We define the asymptotic relative efficiency of $U$ to $T$ by $\text{ARE}(U, T) = t^2/u^2$. In the Normal example, $\text{ARE}(\tilde{\theta}_n, \widehat{\theta}_n) = 2/\pi \approx .63$. The interpretation is that if you use the median, you are effectively using only a fraction of the data.

**9.23 Theorem.** *If $\widehat{\theta}_n$ is the MLE and $\tilde{\theta}_n$ is any other estimator then* $^3$
$$\text{ARE}(\tilde{\theta}_n, \widehat{\theta}_n) \leq 1.$$
Thus, the MLE has the smallest (asymptotic) variance and we say that the MLE is **efficient** or **asymptotically optimal**.

This result is predicated upon the assumed model being correct. If the model is wrong, the MLE may no longer be optimal. We will discuss optimality in more generality when we discuss decision theory in Chapter 12.

**9.9 The Delta Method**
Let $\tau = g(\theta)$ where $g$ is a smooth function. The maximum likelihood estimator of $\tau$ is $\widehat{\tau} = g(\widehat{\theta})$. Now we address the following question: what is the distribution of $\widehat{\tau}$?

> **9.24 Theorem (The Delta Method).** *If $\tau = g(\theta)$ where $g$ is differentiable and $g'(\theta) \neq 0$ then*
> $$\frac{(\widehat{\tau}_n - \tau)}{\text{se}(\widehat{\tau})} \rightsquigarrow N(0, 1) \tag{9.15}$$

$^3$The result is actually more subtle than this but the details are too complicated to consider here.

### Visual Description
A scanned page from a textbook continuing the discussion on optimality and introducing the Delta Method. Theorem 9.24 is enclosed in a black rectangular box.

---
## Page 22
### Content
**Multiparameter Problems** Assume $\theta = (\theta_1, \dots, \theta_k)$.

$L(\theta)$ and $\ell(\theta)$ defined as before.

The score function $S(\theta)$ is now a vector of length $k$ with $j^{\text{th}}$ component $\partial \ell_n(\theta)/\partial \theta_j$.

The Fisher information $I(\theta)$ is now a $k \times k$ matrix; it is the variance-covariance matrix of the score:
$$I(r, s) = -\mathbb{E}_\theta \left[ \frac{\partial^2 \ell(\theta)}{\partial \theta_r \partial \theta_s} \right].$$
(wrt $X_1, \dots, X_n \overset{iid}{\sim} f(x; \theta)$)

We then have that
$$\sqrt{n}(\widehat{\theta} - \theta) \rightsquigarrow N(0, J)$$
where $J = I^{-1}(\theta)$.

The SE of $\widehat{\theta}_j$ is $\text{se}(\widehat{\theta}_j) = \sqrt{J_{jj}(\theta)/n}$.

The confidence interval for $\theta_j$ is $\widehat{\theta}_j \pm z_{\alpha/2} \text{se}(\widehat{\theta}_j)$.

14

### Visual Description
Text slide on a light gray grid background with blue handwritten annotations. Arrows point to the expectation operator in the Fisher information formula and the covariance matrix $J$ in the asymptotic normality result.

---
## Page 23
### Content
**Example:** Let $X_1, \dots, X_n \overset{iid}{\sim} N(\theta, 1)$. Compute an approximate confidence interval for $\tau = e^\theta = g(\theta)$.

| | |
| :--- | :--- |
| Compute $\widehat{\theta}_{MLE}$ | $\widehat{\tau}_{MLE} = g(\widehat{\theta}_{MLE})$ |
| Fisher info $-\mathbb{E}_\theta[\ell''_n(\theta)]$ | Taylor exp Delta method to comp. var($\widehat{\tau}_{MLE}$) |
| $\widehat{\theta}$ asymptotically normal | $\widehat{\tau}$ asymptotically normal |

[See Wasserman p. 147]

15

### Visual Description
Handwritten notes on a light gray grid background. The page is divided into two columns by a vertical blue line, showing the steps for finding the MLE and its properties for $\theta$ on the left, and for the transformed parameter $\tau$ on the right.

---
## Page 24
### Content
Suppose $X_1, \dots, X_n \sim F$ (assume $F_\theta$)
$F$ is complicated but can sample from e.g. $P_\theta$ given $\theta$ (but do not know $\theta_*$, the true parameter $\theta$)

Some statistic
$T_n = g(X_1, \dots, X_n)$
known but complicated ($= X^n$)

---
**Bootstrap** Key idea

Simulate from <u>approx</u> of $F$

Two flavors:
(1) (Nonparametric) bootstrap
sample from $\widehat{F}_n$, empirical distr
(Resample data <u>with</u> replacement)

### Visual Description
Handwritten notes on a light gray grid background. The page introduces the concept of the Bootstrap method, distinguishing between the unknown true distribution $F$ and its approximation. A horizontal blue line separates the problem setup from the "Bootstrap Key idea".

--- ==End of PDF==
## Page 25
### Content
$\hat{F}_n$ empirical CDF

[Graph showing a step function $\hat{F}_n$ starting at 0 and jumping by $1/n$ at each sample point $X_1, X_2, \dots, X_n$ up to 1.]

Def. CDF of $X$
$F(x) = P(X \le x)$

$$\hat{F}_n(x) \stackrel{\text{def}}{=} \frac{1}{n} \sum_{i=1}^n I(X_i \le x)$$
empirical CDF

corresponding p.m.f.
[Graph showing spikes of height $1/n$ at each sample point $X_1, X_2, \dots, X_n$.]

$\hat{F}_n$ puts mass $1/n$ at each sample pt $X_1, X_2, \dots, X_n$

### Visual Description
Handwritten notes on a grid background. The top half features a plot of an empirical cumulative distribution function (CDF) as a step function. To the right, the definition of a CDF and the formula for the empirical CDF are written, with the latter enclosed in a red box. Below this, there is a second plot labeled "corresponding p.m.f." showing discrete probability mass at points $X_1, X_2, \dots, X_n$. The bottom text explains that the empirical CDF assigns a mass of $1/n$ to each sample point.

---
## Page 26
### Content
(II) Parametric bootstrap

Assume $F$ from parametric family $F_\theta$
Draw sample from $F_{\hat{\theta}}$

Draw $\begin{cases} X_1^{*(1)}, \dots, X_n^{*(1)} \sim F_{\hat{\theta}} \Rightarrow T_n^{*(1)} \\ X_1^{*(2)}, \dots, X_n^{*(2)} \sim F_{\hat{\theta}} \Rightarrow T_n^{*(2)} \\ \vdots \\ X_1^{*(B)}, \dots, X_n^{*(B)} \sim F_{\hat{\theta}} \Rightarrow T_n^{*(B)} \end{cases}$
$B$ simulations

Bootstrap replications of $T_n$
$T_n^{*(1)}, \dots, T_n^{*(B)}$ | $var(T_n) \approx ?$

### Visual Description
Handwritten notes on a grid background describing the process of a parametric bootstrap. It outlines assuming a parametric family, drawing samples from the estimated distribution $F_{\hat{\theta}}$, and performing $B$ simulations to generate bootstrap replications of a statistic $T_n$. A large curly bracket groups the simulation steps.

---
## Page 27
### Content
$var(T_n) \approx \widehat{var} \{ T_n^{*(1)}, \dots, T_n^{*(B)} \} = var_{boot}$

Think: Errors in $var_{boot}$?

$var_{boot} \stackrel{\text{def}}{=} \widehat{var} \{ T_n^{*(1)}, \dots, T_n^{*(B)} \}$ (sample variance)
$\approx var(T_n^*)$ (true variance of bootstrap replications)
$\rightarrow$ error $O(1/\sqrt{B})$ small for large $B$

$\approx var(T_n)$ (true variance of statistic of interest)
$\rightarrow$ error $O(1/\sqrt{n})$ large error

### Visual Description
Handwritten notes on a grid background analyzing the errors in bootstrap variance estimation. It breaks down the total error into two parts: the simulation error (related to $B$) and the statistical error (related to $n$). Arrows and brackets are used to link the mathematical terms to their descriptions and error orders.

---
## Page 28
### Content
**36-700: Homework Set 6**
Due Thursday October 23 at 3 pm — no late homework
Submit on Gradescope

1. Suppose we have i.i.d. samples $X_1, \dots, X_n \sim U[0, \theta]$.
   (a) Sketch the likelihood function for $\theta \in [0, 10]$. (It is a function of $\theta$ — what shape does it have?)
   (b) Compute the MLE of $\theta$. [Annotation: $\hat{\theta}_{MLE}$]
   (c) Compute the MOME of $\theta$.
   (d) Is the distribution of the MOME at least approximately Gaussian? Explain.
   (e) Investigate by simulation whether or not the MLE of $\theta$ is asymptotically Gaussian. [Annotation: "parametric bootstrap", $\hat{\theta}^{(1)}, \dots, \hat{\theta}^{(B)}$]
   To do that, assume that the true value of $\theta$ is, say, $\theta = 10$. Then for a fixed $n$, simulate an i.i.d. sample $X_1, \dots, X_n \sim U[0, \theta]$ and obtain the MLE $\hat{\theta}$. Then repeat this $B = 500$ times, so that for this fixed $n$, you have generated $B$ realizations of the MLE. Produce a histogram of these $B$ values (or a Normal QQ plot if you know how to interpret it).
   Now repeat this entire process for $n \in \{10, 100, 1000\}$, so that you have 3 histograms (you can either plot them separately or overlaid on one plot). Make sure to clearly label your plots and include your code.
   Does it appear that the distribution of the MLE tends to a Gaussian distribution as $n$ increases? Explain what you see.

2. The exponential distribution (in its scale parameterization) has density
   $$p(x; \beta) = \begin{cases} \frac{1}{\beta} \exp(-x/\beta) & x \ge 0 \\ 0 & x < 0, \end{cases}$$
   where $\beta > 0$ is our parameter of interest. Suppose we are given a sample of size $n$ from an exponential distribution with unknown parameter $\beta$. Compute the MLE for $\beta$, compute the Fisher information, use this to determine the asymptotic distribution of the MLE, and construct an asymptotically valid $1 - \alpha$ confidence interval for $\beta$.
   Explain why the limiting distribution you obtained is reasonable (how else could you have obtained this limiting distribution?).

3. The exponential distribution (in its rate parameterization) has density
   $$p(x; \lambda) = \begin{cases} \lambda \exp(-\lambda x) & x \ge 0 \\ 0 & x < 0, \end{cases}$$
   where $\lambda > 0$ is our parameter of interest. [Annotation: $\lambda = 1/\beta$]
   Suppose we are given a sample of size $n$ from an exponential distribution with unknown parameter $\lambda$. Compute the MLE for $\lambda$, compute the Fisher information, use this to determine the asymptotic distribution of the MLE, and construct an asymptotically valid $1 - \alpha$ confidence interval for $\lambda$.
   Explain why the limiting distribution you obtained is reasonable (how else could you have obtained this limiting distribution?). It might be helpful to recall the delta method.

### Visual Description
A printed homework assignment sheet with blue handwritten annotations. Annotations include labels like "MLE", "parametric bootstrap", and a relationship formula $\lambda = 1/\beta$. Arrows point from handwritten notes to specific parts of the text.

---
## Page 29
### Content
4. Let $X_1, \dots, X_n \sim Poisson(\lambda)$. [Annotation: $E[X_1] = \lambda$, $V[X_1] = \lambda$]
   (a) Find the method of moments estimator, the maximum likelihood estimator (MLE) and the Fisher information $I(\lambda)$.
   (b) Use the fact that the mean and variance of the Poisson distribution are both $\lambda$ to propose two unbiased estimators of $\lambda$. Show that one of these estimators has a larger variance than the other. Explain why the result makes sense based on your answer in (a).

Hint: 
$\hat{\lambda}$ sample mean
$\tilde{\lambda}$ (unbiased) sample variance

Recall: Cramer-Rao's Ineq.

### Visual Description
Continuation of the homework assignment from the previous page. It contains problem 4 about the Poisson distribution. Blue handwritten notes provide the expected value and variance of the distribution, a hint identifying the two unbiased estimators as the sample mean and sample variance, and a reminder to recall the Cramer-Rao Inequality.

---
