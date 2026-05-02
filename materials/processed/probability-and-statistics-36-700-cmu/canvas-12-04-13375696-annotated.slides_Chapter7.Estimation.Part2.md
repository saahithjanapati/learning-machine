# canvas-12-04-13375696-annotated.slides_Chapter7.Estimation.Part2

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-12-04-13375696-annotated.slides_Chapter7.Estimation.Part2.pdf`
Duplicate equivalents: `canvas-12-04-13375696-annotated.slides_Chapter7.Estimation.Part2.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 6

## Page 1
### Content
**CHAPTER 7 Point Estimation (Part 2): Properties of MLEs - Overview**

**Contents**
1. Consistency — 1
2. Fisher Information — 2
3. Asymptotic Normality of the MLE — 5

Reference: Wasserman Sections 9.4-9.10

---
**1 Consistency**

Under regularity conditions, MLEs are consistent.

MOMEs are not always consistent.

**Regularity conditions:** the space of possible parameters is compact, the true parameter is in the interior of the space of possible parameters, the likelihood function is smooth.

---
**Handwritten Notes:**
* Part I: Constructing a point estimator $\rightarrow$ MoME, MLE, Bayes est.
* Statistical Properties of MLEs (incl. sampling distr of the MLE)
* $\hat{\theta}_n(X_1, \dots, X_n) \xrightarrow{P} \theta$ as $n \to \infty$
* In Euclidean space $\mathbb{R}^p$: closed and bounded subset
* Ex. of compact spaces: $Ber(\theta) \implies \theta \in [0, 1]$ or $\theta \in [0, 1/2] \cup \{0.8\}$
* real line $\mathbb{R}$ not compact, but the "extension" $\overline{\mathbb{R}} = \mathbb{R} \cup \{-\infty, +\infty\}$ is compact (incl. limiting values of pts)

### Visual Description
The slide contains typed text with extensive handwritten annotations in blue and red ink. A red box highlights "Under regularity conditions," and a yellow highlight is on "Consistency" and "MLEs are consistent." There are arrows and underlines connecting the typed text to the handwritten explanations about compact spaces and convergence in probability.

---

## Page 2
### Content
**2 Fisher Information**

Useful to systematically obtain the asymptotic variance of MLEs.

**Score function:** Let $X_1$ be a single RV with pdf/pmf $f_\theta(X)$.

**Def.** $s_\theta(X_1) = \frac{\partial \log f_\theta(X_1)}{\partial \theta} = \frac{\partial \ell(\theta | X_1)}{\partial \theta}$.

**Fact:** Under regularity conditions, $E_\theta[s_\theta(X_1)] = 0$.

Given an i.i.d. sample, the MLE satisfies the sample analog:
$$\frac{1}{n} \sum_{i=1}^n s_{\hat{\theta}}(X_i) = 0$$

---
**Handwritten Notes:**
* F.I. crucial in determining the quality of the MLE
* score function
* $var(\hat{\theta}_n)$ as $n$ large
* Q: Why this function? What does it mean?
* Think: What it is
* Theorem: random $X_1 \sim f_\theta(x)$
* $\implies MLE \hat{\theta}$
* $\theta$: true parameter (unknown)
* $E_\theta$: averages over $X_1$ using pdf $f_\theta(X_1)$

### Visual Description
The slide features typed definitions and facts about Fisher Information and the score function. It is heavily annotated with blue and red handwriting. A red box surrounds the expectation fact. Yellow highlights are used on "Fisher Information", "Score function", and the summation formula. Arrows link the sample analog formula to the MLE.

---

## Page 3
### Content
**Handwritten Notes:**

$L(\theta) \stackrel{def}{=} f(X_1, \dots, X_n; \theta)$
(joint pdf/pmf, $\theta$ fixed unknown parameter(s))

$= \prod_{i=1}^n f(X_i | \theta)$ if $X_1, \dots, X_n \stackrel{iid}{\sim} f(x; \theta)$

$\ell(\theta) = \log L(\theta) = \sum_{i=1}^n \log f(X_i; \theta) = \sum_{i=1}^n \log f_\theta(X_i)$

$\frac{\partial}{\partial \theta} \ell(\theta) = 0 \implies \hat{\theta}_{MLE} = \dots$

$0 = \frac{\partial}{\partial \theta} \sum_{i=1}^n \log f_\theta(X_i) = \sum_{i=1}^n \frac{\partial}{\partial \theta} \log f_\theta(X_i) = \sum_{i=1}^n s_\theta(X_i)$

That is, $\sum_{i=1}^n s_{\hat{\theta}}(X_i) = 0 \implies \hat{\theta}_{MLE}$

$\frac{1}{n} \sum_{i=1}^n s \dots$

### Visual Description
This page is entirely handwritten in blue and red ink on a light blue grid background. It derives the relationship between the log-likelihood derivative and the score function. Key terms like "joint pdf/pmf" and "R.V." are labeled. Some parts are highlighted in yellow.

---

## Page 4
### Content
**Proof of $E_\theta[s_\theta(X)] = 0$ :**

We know that $1 = \int f_\theta(x) dx$, for fixed $\theta$.

Now differentiate wrt $\theta$:
$$0 = \int \frac{\partial f_\theta(x)}{\partial \theta} dx$$
$$= \int \frac{\partial \log f_\theta(x)}{\partial \theta} f_\theta(x) dx$$
$$= E_\theta[s_\theta(X)].$$

---
**Handwritten Notes:**
* $\theta \implies$ [arrow pointing to expectation]

### Visual Description
The slide contains a typed mathematical proof. There are minor blue annotations (underlines and circles) and a yellow highlight on the final expectation term. The background is a light blue grid.

---

## Page 5
### Content
**Fisher information = variance of the score:**

**Def**
$$I_1(\theta) = Var_\theta(s_\theta(X_1)) = E_\theta[(s_\theta(X_1))^2].$$

Under some mild regularity conditions:

**Theorem**
$$I_1(\theta) = -E_\theta \left[ \frac{\partial^2}{\partial \theta^2} \log f_\theta(X_1) \right] = -E_\theta \left[ \frac{\partial^2}{\partial \theta^2} \ell_\theta(X_1) \right].$$

(Prove later as an exercise)

**Intuition:**
So the Fisher information measures the variance of the score function, but also the Hessian or the curvature of the log-likelihood. One can intuitively imagine that the curvature of the log-likelihood is related to how well we can estimate the unknown parameter. Roughly, if the log-likelihood is very flat then even if our estimate $\hat{\theta}$ is very close in likelihood it need not be the case that $\hat{\theta}$ is close to $\theta^*$. We will try to further formalize this intuition in the next section.

---
**Handwritten Notes:**
* $var(Y) = E(Y^2) - (E(Y))^2$
* $E[s_\theta(X_1)] = 0$
* averages over $X_1 \sim f_\theta(x)$
* curvature of $\ell_\theta(x)$ at $\theta = \theta^*$
* [Sketch of two curves, one flatter than the other]

### Visual Description
Typed text defines Fisher Information and provides a theorem and intuition. A red box surrounds the definition and the theorem. Blue and red handwritten notes explain the variance formula and the concept of curvature, accompanied by a simple drawing of two bell-shaped curves with different widths.

---

## Page 6
### Content
**3 Asymptotic Normality of the MLE**

Under regularity conditions:
$$\sqrt{n I_1(\theta^*)}(\hat{\theta} - \theta^*) \xrightarrow{d} N(0, 1)$$

yielding, for large $n$:
$$\hat{\theta} \sim N(\theta^*, (n I_1(\theta^*))^{-1}).$$

Also,
$$\sqrt{n I_1(\hat{\theta})}(\hat{\theta} - \theta^*) \xrightarrow{d} N(0, 1).$$

and
$$\sqrt{n \hat{I}_1(\hat{\theta})}(\hat{\theta} - \theta^*) \xrightarrow{d} N(0, 1).$$

where $\hat{I}_1(\hat{\theta})$ is the **observed information**:
$$\hat{I}_1(\hat{\theta}) = -\frac{1}{n} \sum_{i=1}^n \left[ \frac{\partial^2}{\partial \theta^2} \log f_\theta(X_i) \right]_{\theta = \hat{\theta}},$$

---
**Handwritten Notes:**
* Distribution of R.V. $\hat{\theta}_n(X_1, \dots, X_n)$ for Large $n$
* $\hat{\theta}_n \xrightarrow{P} \theta^*$
* asymptotic variance of MLE
* true parameter
* $\hat{\theta} \approx N(\theta^*, \frac{1}{n I(\theta^*)})$
* estimated variance of MLE (for large n)
* Compare w. theoretical/true F.I.

### Visual Description
The slide presents the asymptotic normality properties of the MLE using typed formulas. Red boxes highlight the main distributional results and the definition of observed information. Blue and red handwritten notes clarify the meaning of the terms (e.g., "asymptotic variance", "true parameter") and provide a simplified normal approximation. Yellow highlights emphasize key terms like "Asymptotic Normality" and "observed information".
