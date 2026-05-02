# canvas-12-01-13460560-annotated.slides_Chapter7.Estimation.Part4

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-12-01-13460560-annotated.slides_Chapter7.Estimation.Part4.pdf`
Duplicate equivalents: `canvas-12-01-13460560-annotated.slides_Chapter7.Estimation.Part4.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `MIXED`
Pages: 36

## Page 1

### Content

**CHAPTER 7 Point Estimation (Part 4): Evaluating/Comparing Estimators**

**Contents**
1. Decision Theory — 2
2. Admissibility — 7
3. Bayes Estimator — 8
4. Minimax Estimators — 13
5. Connections — 14

Reference: Wasserman Sections 12.1-12.3

1

### Visual Description

The slide is on a light-colored grid background. The title "CHAPTER 7 Point Estimation (Part 4): Evaluating/Comparing Estimators" is at the top, with the subtitle highlighted in yellow. Below is a table of contents with five sections and their corresponding page numbers. Sections 1 and 3 are highlighted in yellow. A reference to Wasserman is at the bottom of the content area. The page number "1" is at the bottom center.

---

## Page 2

### Content

1 **Decision Theory** (Handwritten: formal theory for comparing statistical procedures)

$X_1, \dots, X_n \stackrel{iid}{\sim} f_\theta$

Estimator $\hat{\theta} = \hat{\theta}(X_1, \dots, X_n)$ (Handwritten: "decision rule", $= X^n$)

**Loss function:** $L(\hat{\theta}, \theta)$ – measures the loss of estimating $\theta$ with $\hat{\theta}$

E.g.
1. Squared loss: $L(\hat{\theta}, \theta) = (\hat{\theta} - \theta)^2$. (Handwritten: $\hat{\theta}$ is random, $\theta$ is fixed)
2. Absolute loss: $L(\hat{\theta}, \theta) = |\hat{\theta} - \theta|$.
3. Kullback-Leibler loss: $L(\hat{\theta}, \theta) = KL(\hat{\theta}, \theta) \equiv \int f_\theta(u) \log \left( \frac{f_\theta(u)}{f_{\hat{\theta}}(u)} \right) du$.

(Handwritten notes):
- $X \sim f_\theta(x)$ (true distr)
- Approximate $f_\theta(x)$ with $f_{\hat{\theta}}(x)$
- 0-1 loss: $L(\theta, \hat{\theta}) = \begin{cases} 0 & \text{if } \hat{\theta} = \theta \\ 1 & \text{if } \hat{\theta} \neq \theta \end{cases}$
- $KL(f_\theta || f_{\hat{\theta}}) = KL(P_{all} || f_{\hat{\theta}})$ (data model)
- $\mathbb{E}_{X \sim f_\theta(x)} \left[ \log \frac{f_\theta(X)}{f_{\hat{\theta}}(X)} \right]$
- $\mathbb{E}_{X \sim f_\theta(x)} \left[ \log \left( \frac{1}{f_{\hat{\theta}}} \right) - \log \left( \frac{1}{f_\theta} \right) \right]$
- "excess encoding cost when making encoding $f_\theta$ with $f_{\hat{\theta}}$"
- Think (loss functions): What's random? What's fixed? scalars, vector, "function" (depends on $\theta$)

2

### Visual Description

The slide contains printed text about Decision Theory and Loss functions on a grid background. It is heavily annotated with blue and red handwritten notes. The notes clarify that decision theory is a formal theory for comparing procedures, define 0-1 loss, and provide an information-theoretic interpretation of Kullback-Leibler loss as excess encoding cost. There are circles and arrows connecting the printed text to the handwritten explanations.

---

## Page 3

### Content

$$D_{KL}(P || Q) = \sum_{x \in \mathcal{X}} P(x) \log \frac{P(x)}{Q(x)}$$

(Handwritten note): discrete prob $P, Q$

### Visual Description

This is a mostly blank grid page containing a single handwritten formula in blue ink for the Kullback-Leibler divergence between two discrete probability distributions $P$ and $Q$.

---

## Page 4

### Content

**Risk function:** (Handwritten: average loss)

$R(\theta, \hat{\theta}) = \mathbb{E}_\theta[L(\hat{\theta}, \theta)] = \int L(\hat{\theta}, \theta) f_\theta(x_1) f_\theta(x_2) \dots f_\theta(x_n) dx_1 \dots dx_n$

measures the average loss over all the data sets we could observe from the data distribution. (Handwritten: data $X_1, \dots, X_n \stackrel{iid}{\sim} f_\theta(x)$, $X^n$)

E.g., when $L(\hat{\theta}, \theta) = (\hat{\theta} - \theta)^2$, $R = \mathbb{E}[(\hat{\theta} - \theta)^2]$ is the MSE.

3

### Visual Description

The slide defines the Risk function on a grid background. The term "Risk function" is highlighted in yellow. There are blue handwritten annotations: "average loss" next to the title, and a clarification that the integral is over the data $X^n$ where $X_i \stackrel{iid}{\sim} f_\theta(x)$. The page number "3" is at the bottom.

---

## Page 5

### Content

**RECAP (one page)**

$X_1, \dots, X_n \sim f_\theta$

Estimator $\hat{\theta} = \hat{\theta}(X_1, \dots, X_n)$

**Loss function:** $L(\hat{\theta}, \theta)$ – measures the loss of estimating $\theta$ with $\hat{\theta}$

1. Squared loss: $L(\hat{\theta}, \theta) = (\hat{\theta} - \theta)^2$.
2. Absolute loss: $L(\hat{\theta}, \theta) = |\hat{\theta} - \theta|$.
3. Kullback-Leibler loss: $L(\hat{\theta}, \theta) = KL(\hat{\theta}, \theta) \equiv \int f_\theta(u) \log \left( \frac{f_\theta(u)}{f_{\hat{\theta}}(u)} \right) du$.

**Risk function:**
$R(\theta, \hat{\theta}) = \mathbb{E}_\theta[L(\hat{\theta}, \theta)] = \int L(\hat{\theta}, \theta) f_\theta(x_1) f_\theta(x_2) \dots f_\theta(x_n) dx_1 \dots dx_n$

measures the average loss over all the data sets we could observe from the data distribution.

4

### Visual Description

Text-only slide. This is a summary page on a grid background, recapping the definitions of estimator, loss function (with three examples), and risk function. The text is printed in black and blue. The page number "4" is at the bottom.

---

## Page 6

### Content

We want an estimator $\hat{\theta}$ whose risk function is small.

**Example 1:** Let $X \sim N(\theta, 1)$
We want $\hat{\theta}$ that minimizes the squared error risk (the MSE).
Consider two estimators: $\hat{\theta}_1 = X$ and $\hat{\theta}_2 = 0$.

(Handwritten notes):
$\hat{\theta}_1$: (MLE)
$bias(\hat{\theta}_1) \stackrel{def}{=} \mathbb{E}[\hat{\theta}_1] - \theta = \theta - \theta = 0$
$var(\hat{\theta}_1) = 1$
$R = \mathbb{E}[(\hat{\theta} - \theta)^2] = bias^2 + var = 1$

$\hat{\theta}_2$:
$bias(\hat{\theta}_2) = 0 - \theta = -\theta$ (neg. bias)
$var(\hat{\theta}_2) = 0$
$R = \theta^2$

(Handwritten graph):
A plot of Risk $R(\theta, \hat{\theta})$ vs $\theta$.
- $R(\theta, \hat{\theta}_1)$ is a horizontal line at 1 (labeled MLE).
- $R(\theta, \hat{\theta}_2)$ is a parabola $\theta^2$ passing through the origin.
- Note: "Neither estimator uniformly dominates the other at all values of $\theta$".
- Note: "$\hat{\theta}_2$ better" in the region where $\theta^2 < 1$ (between -1 and 1).

5

### Visual Description

The slide presents an example comparing two estimators for a Normal mean. It includes printed text and extensive blue and red handwritten annotations. A graph at the bottom plots the risk functions of the two estimators: a constant risk for the MLE and a quadratic risk for the zero-estimator. The graph shows that the zero-estimator has lower risk near zero, but higher risk elsewhere.

---

## Page 7

### Content

**Example 2:** Consider the Bernoulli estimation problem.

MLE:
$$\hat{p}_1 = \frac{1}{n} \sum_{i=1}^n X_i,$$

Bayes estimator using a $Beta(\alpha, \beta)$ prior: (Handwritten: $L_2$-loss (see previous notes))
$$\hat{p}_B = \frac{\sum_{i=1}^n X_i + \alpha}{n + \alpha + \beta}.$$

Risk using the squared error loss:
(Handwritten):
MLE: $R(p, \hat{p}_1) = (p - p)^2 + \frac{p(1-p)}{n} = \frac{p(1-p)}{n}$ (Note: $var(X_i)$)

Bayes: $R(p, \hat{p}_B) = \dots$

6

### Visual Description

The slide introduces a second example involving Bernoulli estimation. It shows the formulas for the Maximum Likelihood Estimator (MLE) and a Bayes estimator. Handwritten notes in blue and red add details about the loss function and start the calculation for the risk of the MLE, showing it equals the variance $p(1-p)/n$. The page number "6" is at the bottom.

---

## Page 8

### Content

Ex. $X_1, \dots, X_n \sim Ber(p)$ [AoS pp 194-196]
Risk $R(p, \hat{p}) = \mathbb{E}_p[L(p, \hat{p})] = \mathbb{E}_p[(p - \hat{p})^2] = MSE = bias^2 + var$

$\hat{p}_1 = \bar{X}_n$ (MLE), $R(p, \hat{p}_1) = \frac{p(1-p)}{n}$
$\hat{p}_2$ Bayes w. constant risk:
$R(p, \hat{p}_2) = \frac{n}{4(n+\sqrt{n})^2} = \frac{1}{4n(1+\frac{1}{\sqrt{n}})^2} < \frac{1}{4n}$

(Handwritten graph):
Plot of Risk $R(p, \hat{p})$ vs $p$ on the interval $[0, 1]$.
- $R(p, \hat{p}_1)$ is a downward-opening parabola with a maximum of $\frac{1}{4n}$ at $p=1/2$.
- $R(p, \hat{p}_2)$ is a horizontal line slightly below $\frac{1}{4n}$.
- Label: [Fig 12.2 in AoS p. 196]

Think:
- Which estimator has the smallest maximum risk? $\sup_{\theta \in \Theta} R(\theta, \hat{\theta})$
- Which estimator has the smallest weighted risk? (averaged w.r.t. $\pi(\theta)$)
- What happens as $n \to \infty$?

### Visual Description

This page is entirely handwritten in blue and red ink on a grid background. it continues the Bernoulli example from the previous page. It includes a graph comparing the risk of the MLE (a parabola) with a constant-risk Bayes estimator (a horizontal line). Below the graph, there are three "Think" questions regarding minimax risk, weighted risk, and asymptotic behavior.

---
## Page 9
### Content
**2 Admissibility**
*weed out inadmissible estimators*

$\hat{\theta}_1$ is inadmissible if there is another estimator $\hat{\theta}_2$ such that,
$\forall \theta \in \Theta, R(\theta, \hat{\theta}_2) \le R(\theta, \hat{\theta}_1)$, *for all $\theta$* ($\hat{\theta}_2$ at least as good as $\hat{\theta}_1$)
and
$\exists \theta \in \Theta, R(\theta, \hat{\theta}_2) < R(\theta, \hat{\theta}_1)$. *for some $\theta$* ($\hat{\theta}_2$ is better than $\hat{\theta}_1$)

Otherwise, we say that $\hat{\theta}_1$ is admissible.

Admissibility is a weak property. It does not guarantee that the estimator is good.

$R(\theta, \hat{\theta})$ is a function of $\theta$.
Need a one-number summary of the risk.

Next:
* Bayes risk $\implies$ Bayes estimator
* maximum risk $\implies$ minimax estimator

### Visual Description
The slide contains printed text with extensive blue and yellow handwritten annotations. The definition of admissibility is presented formally with mathematical symbols ($\forall, \exists, \le, <$). Handwritten notes clarify the meaning of the symbols and the motivation for the next topics. A footer indicates this is page 7 of the original document.

---
## Page 10
### Content
**3 Bayes Estimator**

Previously, we called the mean of a posterior distribution, the Bayes estimator.

Now we introduce a more general notion of Bayes estimator.

Given a prior $\pi$ define the **Bayes risk** of $\hat{\theta}$ by
$$R_\pi(\hat{\theta}) = \int R(\theta, \hat{\theta})\pi(\theta)d\theta$$
*Def: $\mathbb{E}[R(\theta, \hat{\theta})]$ where $\theta \sim \pi(\theta)$ and $X \sim f_X(\theta)$*

The **Bayes estimator** is the $\hat{\theta}$ that minimizes $R_\pi(\hat{\theta})$.

| Loss function | Bayes estimator (that minimizes corresp. Bayes risk) |
| :--- | :--- |
| $L_2$ squared error loss | posterior mean |
| $L_1$ absolute error | median |
| 0-1 error | mode (Maximum a posteriori, MAP) |
| KL-divergence | MLE (for many models) |

### Visual Description
The slide defines Bayes risk and Bayes estimator. The formula for Bayes risk is boxed in red. A table at the bottom maps different loss functions to their corresponding Bayes estimators. Blue handwritten notes add definitions and clarify terms like "prior/weight". A footer indicates this is page 8 of the original document.

---
## Page 11
### Content
Closer look at the Bayes risk:
*Intuition: Average of the loss over both $\theta$ and $X$*

Note that
$$\int R(\theta, \hat{\theta})\pi(\theta)d\theta = \int \left[ \int L(\hat{\theta}, \theta)f(x_1, \dots, x_n|\theta)dx_1 \dots dx_n \right] \pi(\theta)d\theta$$
$$= \int \int L(\hat{\theta}, \theta)f(x_1, \dots, x_n|\theta)\pi(\theta)d\theta dx_1 \dots dx_n$$
*Recall: $P(A|B) \cdot P(B) = P(A,B)$*
$$= \int \int L(\hat{\theta}, \theta)f(x_1, \dots, x_n, \theta)d\theta dx_1 \dots dx_n$$
*$P(A,B)$ joint distr over $X$ and $\theta$*
*$= P(B|A) \cdot P(A)$*
$$= \int \int L(\hat{\theta}, \theta)\pi(\theta|x_1, \dots, x_n)f(x_1, \dots, x_n)d\theta dx_1 \dots dx_n$$
$$= \int \left[ \int L(\hat{\theta}, \theta)\pi(\theta|x_1, \dots, x_n)d\theta \right] f(x_1, \dots, x_n)dx_1 \dots dx_n$$
$$= \int \mathbb{E}(L(\hat{\theta}, \theta) | x_1, \dots, x_n) f(x_1, \dots, x_n)dx_1 \dots dx_n$$
*$\mathbb{E}_{\theta \sim \pi(\theta|x_1, \dots, x_n)}$ is the posterior risk*

*Think: Why is this helpful?*

### Visual Description
This slide presents a mathematical derivation showing that Bayes risk is the expectation of the loss over the joint distribution of the data and the parameter. It uses several integral steps and probability identities. Blue and red handwritten notes provide intuition and highlight key terms like "posterior risk". A footer indicates this is page 9 of the original document.

---
## Page 12
### Content
*Compare regression*
$(X_1, Y_1), \dots, (X_n, Y_n) \sim P_{X,Y}$

$R = \mathbb{E}_{X,Y} \left[ (Y - r(X))^2 \right]$

$\mathbb{E}_{X,Y} \left[ (Y - r(X))^2 \right] = \mathbb{E}_X \left[ \mathbb{E}_{Y|X} \left[ (Y - r(X))^2 | X \right] \right]$

$r(X) = \mathbb{E}[Y|X]$
$r(x) = \mathbb{E}[Y|X=x]$

Minimizing the MSE $\mathbb{E}_{X,Y} \left[ (Y - r(X))^2 \right]$
$\implies$ regression function $r(X) = \mathbb{E}[Y|X]$

### Visual Description
Handwritten slide on a grid background comparing Bayes estimation to regression. It includes a sketch of a coordinate system with $X$ and $Y$ axes, showing data points and conditional distributions at specific $X$ values, with a regression curve $y = r(x)$ passing through the means. Mathematical formulas derive the regression function as the conditional expectation that minimizes mean squared error.

---
## Page 13
### Content
Bayes risk
$$\mathbb{E} \left[ L(\theta, \hat{\theta}) \right]$$
where:
$\hat{\theta} = \hat{\theta}(X^n)$
$\theta \sim \pi(\theta)$
$X \sim f_\theta(x)$

e.g. $L(\theta, \hat{\theta}) = (\theta - \hat{\theta})^2$

### Visual Description
Handwritten slide on a grid background summarizing the components of Bayes risk. It defines the expectation over the prior distribution of $\theta$ and the data distribution $f_\theta(x)$, and gives squared error loss as an example.

---
## Page 14
### Content
$$\int R(\theta, \hat{\theta})\pi(\theta)d\theta = \int \mathbb{E}(L(\hat{\theta}, \theta) | x_1, \dots, x_n) f(x_1, \dots, x_n)dx_1 \dots dx_n$$

To minimize the Bayes risk, it suffices to choose $\hat{\theta}$ to minimize $\mathbb{E}(L(\hat{\theta}, \theta) | x_1, \dots, x_n)$.

### Visual Description
The slide contains a single mathematical identity and a highlighted conclusion. The integral expression for Bayes risk is shown to be equal to the integral of the posterior risk over the marginal distribution of the data. The conclusion states that minimizing the posterior risk at each point $x$ minimizes the overall Bayes risk. A footer indicates this is page 10 of the original document.

---
## Page 15
### Content
**Ex:** Let $L(\hat{\theta}, \theta) = (\hat{\theta} - \theta)^2$.
*c.f. $r(X)$*

Then
$$\mathbb{E}(L(\hat{\theta}, \theta) | x_1, \dots, x_n) = \int (\hat{\theta} - \theta)^2 \pi(\theta|x_1, \dots, x_n)d\theta.$$

Take the derivative w.r.t. $\hat{\theta}$ and set it equal to 0,
$$\frac{\partial}{\partial \hat{\theta}} \int \dots = \int 2(\hat{\theta} - \theta) \pi(\theta|x^n)d\theta = 0$$
$$\implies \int \hat{\theta} \pi(\theta|x^n)d\theta = \int \theta \pi(\theta|x^n)d\theta$$
we get
$$\hat{\theta} = \frac{\int \theta \pi(\theta|x_1, \dots, x_n)d\theta}{\int \pi(\theta|x_1, \dots, x_n)d\theta} = \mathbb{E}(\theta|x_1, \dots, x_n)$$

which is the posterior mean. Therefore, the posterior mean is the Bayes estimator under squared error loss; by definition, it minimizes the Bayes risk.

### Visual Description
The slide works through an example of finding the Bayes estimator for squared error loss. It shows the calculus steps (taking the derivative of the posterior risk) to arrive at the posterior mean. Blue handwritten notes provide additional derivation steps. A footer indicates this is page 11 of the original document.

---
## Page 16
### Content
**Ex:** Let $L(\theta, \hat{\theta}) = w(\theta)(\theta - \hat{\theta})^2$, where $w(\theta) \ge 0$ is some positive weighting function.

The Bayes rule minimizes the posterior risk:
$$\hat{\theta}(X) = \arg \min_{\hat{\theta}} \mathbb{E} \left[ w(\theta)(\theta - \hat{\theta})^2 | X \right].$$

Taking the derivative and setting it to 0, we obtain that the Bayes rule is:
$$\hat{\theta}(X) = \frac{\mathbb{E}[\theta w(\theta)|X]}{\mathbb{E}[w(\theta)|X]},$$

The Bayes rule is a weighted conditional expectation.

### Visual Description
The slide presents an example of a weighted squared error loss function. It states the minimization problem and provides the resulting formula for the Bayes estimator as a weighted conditional expectation. A footer indicates this is page 12 of the original document.

---
## Page 17
### Content
# 4 Minimax Estimators

The minimax estimator $\hat{\theta}$ minimizes the maximum risk, i.e. it satisfies
$$\sup_{\theta \in \Theta} R(\theta, \hat{\theta}) = \inf_{\theta'} \sup_{\theta \in \Theta} R(\theta, \theta')$$
where the infimum is over all estimators.

**Example 2 (revisited):** Revisit the two Bernoulli estimators from the standpoint of maximum risk and Bayes risk. Suppose we take the uniform prior, then:
*   **MLE:** $R_p(\hat{\theta}_1) = \int \frac{\theta(1 - \theta)}{n} d\theta = \frac{1}{6n}$
*   **Bayes w. const risk:** $R_p(\hat{\theta}_2) = \frac{n}{4(n + \sqrt{n})^2} \sim \frac{1}{4n}$ for $n$ large

For $n > 20$, $R_p(\hat{\theta}_1) < R_p(\hat{\theta}_2)$ (MLE is better in terms of Bayes risk with uniform prior).
$$\frac{1}{6n} < \frac{1}{4n(1 + \frac{1}{\sqrt{n}})^2}$$

Why look at the max risk as the number to summarize the risk? Because we can find minimax or approximately minimax estimators (there is no general theory to find the minimum total risk estimator).

### Visual Description
The slide is on a grid paper background. It contains printed text and formulas with blue handwritten annotations. A blue circle highlights the term $\sup_{\theta \in \Theta} R(\theta, \theta')$ in the minimax definition. There are handwritten labels identifying the MLE and Bayes estimators and comparing their risks for large $n$.

---
## Page 18
### Content
# 5 Connections

In general, finding exactly minimax estimators is difficult but sometimes we can find approximately minimax (or rate minimax) estimators. There are however some key results that are worth knowing.

*   For any estimator the Bayes risk with respect to any prior $\pi$ lower bounds its maximum risk.
    *   *Handwritten note:* Bayes risk $\int R(\theta, \hat{\theta}) \pi(\theta) d\theta \le \sup_\theta R(\theta, \hat{\theta})$
*   Suppose that for some prior $\pi$, we have that the corresponding Bayes rule $\hat{\theta}_\pi$ has the property that:
    $$R(\theta, \hat{\theta}_\pi) \le R_\pi(\hat{\theta}_\pi),$$
    for every $\theta$. Then $\pi$ is called a **least favorable prior** and $\hat{\theta}_\pi$ is minimax.
*   A simple consequence of the above is that if for some $\pi$ we have that $R(\theta, \hat{\theta}_\pi)$ is a constant (as a function of $\theta$) then $\hat{\theta}_\pi$ is a minimax estimator. In words, **a Bayes rule with constant risk is minimax.**

### Visual Description
The slide is on a grid paper background. Key points are bulleted. The first bullet point has a yellow highlight on "lower bounds its maximum risk" and a blue handwritten formula for the inequality. The final sentence "a Bayes rule with constant risk is minimax" is also highlighted in yellow. Blue arrows indicate the connection between the Bayes risk and the supremum of the risk.

---
## Page 19
### Content
**Example:** Recall the Binomial Bayes estimator with $\alpha = \beta = \sqrt{n}/2$. We saw that its MSE is:
$$R(p, \hat{p}) = \frac{n}{4(n + \sqrt{n})^2}$$
Since the Bayes estimator has constant risk it is minimax.

In most **parametric models with large samples** (and the dimension of the $\Theta$ fixed), the **MLE is approximately minimax and Bayes.**

This result however breaks down when the number of parameters is large; for example, when there are as many parameters as observations.

*   $n = \# \text{observ.}, p = \# \text{parameters}$
*   **Trad. Stats:** $p$ fixed, $n \to \infty$
*   **High-dim inf:** $\{p(n)\} \to \infty, n \to \infty$ ("small $n$, large $p$")

### Visual Description
The slide is on a grid paper background. It contains printed text and formulas. A section of text about MLE being approximately minimax is highlighted in yellow. There are blue handwritten notes at the bottom comparing traditional statistics (fixed $p$) with high-dimensional inference (growing $p$).

---
## Page 20
### Content
Next: Excerpts from Wasserman.

### Visual Description
Text-only slide on a grid paper background. The text is handwritten in blue ink.

---
## Page 21
### Content
194 12. Statistical Decision Theory

Bear in mind in what follows that an estimator $\hat{\theta}$ is a function of the data. To emphasize this point, sometimes we will write $\hat{\theta}$ as $\hat{\theta}(X)$. To assess an estimator, we evaluate the average loss or risk.

**12.1 Definition.** The *risk* of an estimator $\hat{\theta}$ is
$$R(\theta, \hat{\theta}) = E_\theta(L(\theta, \hat{\theta})) = \int L(\theta, \hat{\theta}(x)) f(x; \theta) dx.$$

When the loss function is squared error, the risk is just the MSE (mean squared error):
$$R(\theta, \hat{\theta}) = E_\theta(\theta - \hat{\theta})^2 = \text{MSE} = V_\theta(\hat{\theta}) + \text{bias}_\theta^2(\hat{\theta}).$$

In the rest of the chapter, if we do not state what loss function we are using, assume the loss function is squared error.

### 12.2 Comparing Risk Functions
To compare two estimators we can compare their risk functions. However, this does not provide a clear answer as to which estimator is better. Consider the following examples.

**12.2 Example.** Let $X \sim N(\theta, 1)$ and assume we are using squared error loss. Consider two estimators: $\hat{\theta}_1 = X$ and $\hat{\theta}_2 = 3$. The risk functions are $R(\theta, \hat{\theta}_1) = E_\theta(X - \theta)^2 = 1$ and $R(\theta, \hat{\theta}_2) = E_\theta(3 - \theta)^2 = (3 - \theta)^2$. If $2 < \theta < 4$ then $R(\theta, \hat{\theta}_2) < R(\theta, \hat{\theta}_1)$, otherwise, $R(\theta, \hat{\theta}_1) < R(\theta, \hat{\theta}_2)$. Neither estimator uniformly dominates the other; see Figure 12.1. ■

**12.3 Example.** Let $X_1, \dots, X_n \sim \text{Bernoulli}(p)$. Consider squared error loss and let $\hat{p}_1 = \bar{X}$. Since this has 0 bias, we have that
$$R(p, \hat{p}_1) = V(\bar{X}) = \frac{p(1 - p)}{n}.$$ (Handwritten note: **MLE**)

Another estimator is
$$\hat{p}_2 = \frac{Y + \alpha}{\alpha + \beta + n}$$ (Handwritten note: **posterior mean (Bayes est.)**)
where $Y = \sum_{i=1}^n X_i$ and $\alpha$ and $\beta$ are positive constants. This is the posterior mean using a Beta($\alpha, \beta$) prior. Now,
$$R(p, \hat{p}_2) = V_p(\hat{p}_2) + (\text{bias}_p(\hat{p}_2))^2$$

### Visual Description
This page is a scan from a textbook (Wasserman's "All of Statistics"). It contains formal definitions and examples. There are blue handwritten annotations: an arrow pointing to Example 12.3, "MLE" next to the first estimator, and "posterior mean (Bayes est.)" next to the second.

---
## Page 22
### Content
12.2 Comparing Risk Functions 195

[Graph showing $R(\theta, \hat{\theta}_1) = 1$ as a horizontal line and $R(\theta, \hat{\theta}_2) = (3 - \theta)^2$ as a parabola centered at $\theta=3$.]
**FIGURE 12.1.** Comparing two risk functions. Neither risk function dominates the other at all values of $\theta$.

$$= V_p\left(\frac{Y + \alpha}{\alpha + \beta + n}\right) + \left(E_p\left(\frac{Y + \alpha}{\alpha + \beta + n}\right) - p\right)^2$$
$$= \frac{np(1 - p)}{(\alpha + \beta + n)^2} + \left(\frac{np + \alpha}{\alpha + \beta + n} - p\right)^2.$$

Let $\alpha = \beta = \sqrt{n}/2$. (In Example 12.12 we will explain this choice.) The resulting estimator is
$$\hat{p}_2 = \frac{Y + \sqrt{n}/2}{n + \sqrt{n}}$$
and the risk function is
$$R(p, \hat{p}_2) = \frac{n}{4(n + \sqrt{n})^2}.$$ (Handwritten note: **constant risk (const. w.r.t p)**)

The risk functions are plotted in figure 12.2. As we can see, neither estimator uniformly dominates the other.

These examples highlight the need to be able to compare risk functions. To do so, we need a one-number summary of the risk function. Two such summaries are the maximum risk and the Bayes risk.

**12.4 Definition.** The **maximum risk** is
$$\bar{R}(\hat{\theta}) = \sup_\theta R(\theta, \hat{\theta})$$ (12.1)
and the **Bayes risk** is
$$r(f, \hat{\theta}) = \int R(\theta, \hat{\theta}) f(\theta) d\theta$$ (12.2)
where $f(\theta)$ is a prior for $\theta$.

*   *Handwritten notes:*
    *   risk = average loss
    *   still functions of $\theta$ (true parameter)
    *   prior = weight funct.

### Visual Description
Continuation of the textbook scan. Includes a plot (Figure 12.1) and mathematical derivations. Blue handwritten notes clarify that the risk for $\hat{p}_2$ is constant and provide intuitive definitions for risk, prior, and the dependence on $\theta$.

---
## Page 23
### Content
196 12. Statistical Decision Theory

[Graph showing $R(p, \hat{p}_1)$ as a parabola and $R(p, \hat{p}_2)$ as a horizontal dotted line.]
**FIGURE 12.2.** Risk functions for $\hat{p}_1$ and $\hat{p}_2$ in Example 12.3. The solid curve is $R(\hat{p}_1)$. The dotted line is $R(\hat{p}_2)$.

*   *Handwritten notes on graph:*
    *   $R(p, \hat{p}_1) = \frac{p(1-p)}{n}$ (MLE)
    *   $R(p, \hat{p}_2)$ where $\hat{\theta}_2$ is a Bayes estimator (with constant risk)
    *   Peak of parabola at $p=1/2$ is $1/(4n)$
    *   $\hat{p}_2$ risk is $\frac{1}{4n(1 + \frac{1}{\sqrt{n}})^2} \sim \frac{1}{4n}$ for large $n$

**12.5 Example.** Consider again the two estimators in Example 12.3. We have
$$\bar{R}(\hat{p}_1) = \max_{0 \le p \le 1} \frac{p(1 - p)}{n} = \frac{1}{4n}$$
and
$$\bar{R}(\hat{p}_2) = \max_p \frac{n}{4(n + \sqrt{n})^2} = \frac{n}{4(n + \sqrt{n})^2}.$$

Based on maximum risk, $\hat{p}_2$ is a better estimator since $\bar{R}(\hat{p}_2) < \bar{R}(\hat{p}_1)$. However, when $n$ is large, $R(\hat{p}_1)$ has smaller risk except for a small region in the parameter space near $p = 1/2$. Thus, many people prefer $\hat{p}_1$ to $\hat{p}_2$. This illustrates that one-number summaries like maximum risk are imperfect. Now consider the Bayes risk. For illustration, let us take $f(p) = 1$. Then
$$r(f, \hat{p}_1) = \int R(p, \hat{p}_1) dp = \int \frac{p(1 - p)}{n} dp = \frac{1}{6n}$$
and
$$r(f, \hat{p}_2) = \int R(p, \hat{p}_2) dp = \frac{n}{4(n + \sqrt{n})^2}.$$
For $n \ge 20$, $r(f, \hat{p}_2) > r(f, \hat{p}_1)$ which suggests that $\hat{p}_1$ is a better estimator. This might seem intuitively reasonable but this answer depends on the choice of prior. The advantage of using maximum risk, despite its problems, is that it does not require one to choose a prior. ■

### Visual Description
Continuation of the textbook scan. Includes Figure 12.2 comparing the risk of the MLE and the constant-risk Bayes estimator. Extensive blue and red handwritten annotations on the graph and text highlight the comparison between the two estimators under different risk criteria (minimax vs. Bayes risk with uniform prior).

---
## Page 24
### Content
12.3 Bayes Estimators 197

minimax estimators; choosing $\hat{\theta}$ to minimize the Bayes risk leads to Bayes estimators.

**12.6 Definition.** A decision rule that minimizes the Bayes risk is called a **Bayes rule**. Formally, $\hat{\theta}$ is a Bayes rule with respect to the prior $f$ if
$$r(f, \hat{\theta}) = \inf_{\tilde{\theta}} r(f, \tilde{\theta})$$ (12.3)
where the infimum is over all estimators $\tilde{\theta}$. An estimator that minimizes the maximum risk is called a **minimax rule**. Formally, $\hat{\theta}$ is minimax if
$$\sup_\theta R(\theta, \hat{\theta}) = \inf_{\tilde{\theta}} \sup_\theta R(\theta, \tilde{\theta})$$ (12.4)
where the infimum is over all estimators $\tilde{\theta}$.

### 12.3 Bayes Estimators
Let $f$ be a prior. From Bayes' theorem, the posterior density is
$$f(\theta|x) = \frac{f(x|\theta)f(\theta)}{m(x)} = \frac{f(x|\theta)f(\theta)}{\int f(x|\theta)f(\theta)d\theta}$$ (12.5)
where $m(x) = \int f(x, \theta)d\theta = \int f(x|\theta)f(\theta)d\theta$ is the **marginal distribution** of $X$. Define the **posterior risk** of an estimator $\hat{\theta}(x)$ by
$$r(\theta|x) = \int L(\theta, \hat{\theta}(x)) f(\theta|x) d\theta.$$ (12.6)

**12.7 Theorem.** *The Bayes risk $r(f, \hat{\theta})$ satisfies*
$$r(f, \hat{\theta}) = \int r(\theta|x) m(x) dx.$$
Let $\hat{\theta}(x)$ be the value of $\theta$ that minimizes $r(\theta|x)$. Then $\hat{\theta}$ is the Bayes estimator.

**PROOF.** We can rewrite the Bayes risk as follows:
$$r(f, \hat{\theta}) = \int R(\theta, \hat{\theta}) f(\theta) d\theta = \int \left( \int L(\theta, \hat{\theta}(x)) f(x|\theta) dx \right) f(\theta) d\theta$$
$$= \int \int L(\theta, \hat{\theta}(x)) f(x, \theta) dx d\theta = \int \int L(\theta, \hat{\theta}(x)) f(\theta|x) m(x) dx d\theta$$
$$= \int \left( \int L(\theta, \hat{\theta}(x)) f(\theta|x) d\theta \right) m(x) dx = \int r(\theta|x) m(x) dx.$$

### Visual Description
Continuation of the textbook scan. It defines Bayes and minimax rules and presents a theorem relating Bayes risk to posterior risk, including a formal proof. Text-heavy with mathematical derivations.

---
## Page 25
### Content
198 12. Statistical Decision Theory

If we choose $\hat{\theta}(x)$ to be the value of $\theta$ that minimizes $r(\hat{\theta}|x)$ then we will minimize the integrand at every $x$ and thus minimize the integral $\int r(\hat{\theta}|x)m(x)dx$.
$\blacksquare$

Now we can find an explicit formula for the Bayes estimator for some specific loss functions.

**12.8 Theorem.** If $L(\theta, \hat{\theta}) = (\theta - \hat{\theta})^2$ then the Bayes estimator is
$$\hat{\theta}(x) = \int \theta f(\theta|x)d\theta = \mathbb{E}(\theta|X = x). \quad (12.7)$$

If $L(\theta, \hat{\theta}) = |\theta - \hat{\theta}|$ then the Bayes estimator is the median of the posterior $f(\theta|x)$. If $L(\theta, \hat{\theta})$ is zero-one loss, then the Bayes estimator is the mode of the posterior $f(\theta|x)$.

PROOF. We will prove the theorem for squared error loss. The Bayes rule $\hat{\theta}(x)$ minimizes $r(\hat{\theta}|x) = \int (\theta - \hat{\theta}(x))^2 f(\theta|x)d\theta$. Taking the derivative of $r(\hat{\theta}|x)$ with respect to $\hat{\theta}(x)$ and setting it equal to 0 yields the equation $2 \int (\theta - \hat{\theta}(x))f(\theta|x)d\theta = 0$. Solving for $\hat{\theta}(x)$ we get 12.7. $\blacksquare$

**12.9 Example.** Let $X_1, \dots, X_n \sim N(\mu, \sigma^2)$ where $\sigma^2$ is known. Suppose we use a $N(a, b^2)$ prior for $\mu$. The Bayes estimator with respect to squared error loss is the posterior mean, which is
$$\hat{\theta}(X_1, \dots, X_n) = \frac{b^2}{b^2 + \frac{\sigma^2}{n}}\bar{X} + \frac{\frac{\sigma^2}{n}}{b^2 + \frac{\sigma^2}{n}}a. \quad \blacksquare$$

### 12.4 Minimax Rules
Finding minimax rules is complicated and we cannot attempt a complete coverage of that theory here but we will mention a few key results. The main message to take away from this section is: Bayes estimators with a constant risk function are minimax.

**12.10 Theorem.** Let $\hat{\theta}^f$ be the Bayes rule for some prior $f$:
$$r(f, \hat{\theta}^f) = \inf_{\hat{\theta}} r(f, \hat{\theta}). \quad (12.8)$$
Suppose that
$$R(\theta, \hat{\theta}^f) \le r(f, \hat{\theta}^f) \text{ for all } \theta. \quad (12.9)$$
Then $\hat{\theta}^f$ is minimax and $f$ is called a **least favorable prior**.

### Visual Description
Text-only slide.

---
## Page 26
### Content
12.4 Minimax Rules 199

PROOF. Suppose that $\hat{\theta}^f$ is not minimax. Then there is another rule $\hat{\theta}_0$ such that $\sup_\theta R(\theta, \hat{\theta}_0) < \sup_\theta R(\theta, \hat{\theta}^f)$. Since the average of a function is always less than or equal to its maximum, we have that $r(f, \hat{\theta}_0) \le \sup_\theta R(\theta, \hat{\theta}_0)$. Hence,
$$r(f, \hat{\theta}_0) \le \sup_\theta R(\theta, \hat{\theta}_0) < \sup_\theta R(\theta, \hat{\theta}^f) \le r(f, \hat{\theta}^f)$$
which contradicts (12.8). $\blacksquare$

**12.11 Theorem.** *Suppose that $\hat{\theta}$ is the Bayes rule with respect to some prior $f$. Suppose further that $\hat{\theta}$ has constant risk: $R(\theta, \hat{\theta}) = c$ for some $c$. Then $\hat{\theta}$ is minimax.*

PROOF. The Bayes risk is $r(f, \hat{\theta}) = \int R(\theta, \hat{\theta})f(\theta)d\theta = c$ and hence $R(\theta, \hat{\theta}) \le r(f, \hat{\theta})$ for all $\theta$. Now apply the previous theorem. $\blacksquare$

**12.12 Example.** Consider the Bernoulli model with squared error loss. In example 12.3 we showed that the estimator
$$\hat{p}(X^n) = \frac{\sum_{i=1}^n X_i + \sqrt{n}/4}{n + \sqrt{n}}$$
has a constant risk function. This estimator is the posterior mean, and hence the Bayes rule, for the prior $\text{Beta}(\alpha, \beta)$ with $\alpha = \beta = \sqrt{n}/4$. Hence, by the previous theorem, this estimator is minimax. $\blacksquare$

**12.13 Example.** Consider again the Bernoulli but with loss function
$$L(p, \hat{p}) = \frac{(p - \hat{p})^2}{p(1 - p)}.$$
Let
$$\hat{p}(X^n) = \hat{p} = \frac{\sum_{i=1}^n X_i}{n}.$$
The risk is
$$R(p, \hat{p}) = E\left(\frac{(p - \hat{p})^2}{p(1 - p)}\right) = \frac{1}{p(1 - p)}\left(\frac{p(1 - p)}{n}\right) = \frac{1}{n}$$
which, as a function of $p$, is constant. It can be shown that, for this loss function, $\hat{p}(X^n)$ is the Bayes estimator under the prior $f(p) = 1$. Hence, $\hat{p}$ is minimax. $\blacksquare$

A natural question to ask is: what is the minimax estimator for a Normal model?

### Visual Description
Text-only slide. Theorem 12.11 is enclosed in a black rectangular box.

---
## Page 27
### Content
9.14 Exercises 147

4. Let $X_1, \dots, X_n \sim \text{Uniform}(0, \theta)$. Show that the MLE is consistent. Hint: Let $Y = \max\{X_1, \dots, X_n\}$. For any $c$, $\mathbb{P}(Y < c) = \mathbb{P}(X_1 < c, X_2 < c, \dots, X_n < c) = \mathbb{P}(X_1 < c)\mathbb{P}(X_2 < c) \dots \mathbb{P}(X_n < c)$.

5. Let $X_1, \dots, X_n \sim \text{Poisson}(\lambda)$. Find the method of moments estimator, the maximum likelihood estimator and the Fisher information $I(\lambda)$.

6. Let $X_1, \dots, X_n \sim N(\theta, 1)$. Define
$$Y_i = \begin{cases} 1 & \text{if } X_i > 0 \\ 0 & \text{if } X_i \le 0. \end{cases}$$
Let $\psi = \mathbb{P}(Y_1 = 1)$.
(a) Find the maximum likelihood estimator $\hat{\psi}$ of $\psi$.
(b) Find an approximate 95 percent confidence interval for $\psi$.
(c) Define $\tilde{\psi} = (1/n) \sum_i Y_i$. Show that $\tilde{\psi}$ is a consistent estimator of $\psi$.
(d) Compute the asymptotic relative efficiency of $\tilde{\psi}$ to $\hat{\psi}$. Hint: Use the delta method to get the standard error of the MLE. Then compute the standard error (i.e. the standard deviation) of $\tilde{\psi}$.
(e) Suppose that the data are not really normal. Show that $\hat{\psi}$ is not consistent. What, if anything, does $\hat{\psi}$ converge to?

7. (Comparing two treatments.) $n_1$ people are given treatment 1 and $n_2$ people are given treatment 2. Let $X_1$ be the number of people on treatment 1 who respond favorably to the treatment and let $X_2$ be the number of people on treatment 2 who respond favorably. Assume that $X_1 \sim \text{Binomial}(n_1, p_1)$ and $X_2 \sim \text{Binomial}(n_2, p_2)$. Let $\psi = p_1 - p_2$.
(a) Find the MLE $\hat{\psi}$ for $\psi$.
(b) Find the Fisher information matrix $I(p_1, p_2)$.
(c) Use the multiparameter delta method to find the asymptotic standard error of $\hat{\psi}$.
(d) Suppose that $n_1 = n_2 = 200$, $X_1 = 160$ and $X_2 = 148$. Find $\hat{\psi}$. Find an approximate 90 percent confidence interval for $\psi$ using (i) the delta method and (ii) the parametric bootstrap.

8. Find the Fisher information matrix for Example 9.29.

9. Let $X_1, \dots, X_n \sim \text{Normal}(\mu, 1)$. Let $\theta = e^\mu$ and let $\hat{\theta} = e^{\bar{X}}$ be the MLE. Create a data set (using $\mu = 5$) consisting of $n=100$ observations.

### Visual Description
Text-only slide containing a list of exercises. There is a blue handwritten note "HW exercise" with an arrow pointing to exercise 9.

---
## Page 28
### Content
148 9. Parametric Inference

(a) Use the delta method to get $\hat{se}$ and a 95 percent confidence interval for $\theta$. Use the parametric bootstrap to get $\hat{se}$ and 95 percent confidence interval for $\theta$. Use the nonparametric bootstrap to get $\hat{se}$ and 95 percent confidence interval for $\theta$. Compare your answers.
(b) Plot a histogram of the bootstrap replications for the parametric and nonparametric bootstraps. These are estimates of the distribution of $\hat{\theta}$. The delta method also gives an approximation to this distribution namely, $\text{Normal}(\hat{\theta}, \hat{se}^2)$. Compare these to the true sampling distribution of $\hat{\theta}$ (which you can get by simulation). Which approximation — parametric bootstrap, bootstrap, or delta method — is closer to the true distribution?

10. Let $X_1, \dots, X_n \sim \text{Uniform}(0, \theta)$. The MLE is $\hat{\theta} = X_{(n)} = \max\{X_1, \dots, X_n\}$. Generate a dataset of size 50 with $\theta = 1$.
(a) Find the distribution of $\hat{\theta}$ analytically. Compare the true distribution of $\hat{\theta}$ to the histograms from the parametric and nonparametric bootstraps.
(b) This is a case where the nonparametric bootstrap does very poorly. Show that for the parametric bootstrap $\mathbb{P}(\hat{\theta}^* = \hat{\theta}) = 0$, but for the nonparametric bootstrap $\mathbb{P}(\hat{\theta}^* = \hat{\theta}) \approx .632$. Hint: show that, $\mathbb{P}(\hat{\theta}^* = \hat{\theta}) = 1 - (1 - (1/n))^n$ then take the limit as $n$ gets large. What is the implication of this?

### Visual Description
Text-only slide continuing the exercises from the previous page.

---
## Page 29
### Content
108 8. The Bootstrap

### 8.1 Simulation
Suppose we draw an IID sample $Y_1, \dots, Y_B$ from a distribution $G$. By the law of large numbers,
$$\bar{Y}_n = \frac{1}{B} \sum_{j=1}^B Y_j \xrightarrow{P} \int y dG(y) = \mathbb{E}(Y)$$
as $B \to \infty$. So if we draw a large sample from $G$, we can use the sample mean $\bar{Y}_n$ to approximate $\mathbb{E}(Y)$. In a simulation, we can make $B$ as large as we like, in which case, the difference between $\bar{Y}_n$ and $\mathbb{E}(Y)$ is negligible. More generally, if $h$ is any function with finite mean then
$$\frac{1}{B} \sum_{j=1}^B h(Y_j) \xrightarrow{P} \int h(y) dG(y) = \mathbb{E}(h(Y))$$
as $B \to \infty$. In particular,
$$\frac{1}{B} \sum_{j=1}^B (Y_j - \bar{Y})^2 = \frac{1}{B} \sum_{j=1}^B Y_j^2 - \left( \frac{1}{B} \sum_{j=1}^B Y_j \right)^2 \xrightarrow{P} \int y^2 dF(y) - \left( \int y dF(y) \right)^2 = \mathbb{V}(Y).$$
Hence, we can use the sample variance of the simulated values to approximate $\mathbb{V}(Y)$.

### 8.2 Bootstrap Variance Estimation
According to what we just learned, we can approximate $\mathbb{V}_{\hat{F}_n}(T_n)$ by simulation. Now $\mathbb{V}_{\hat{F}_n}(T_n)$ means "the variance of $T_n$ if the distribution of the data is $\hat{F}_n$." How can we simulate from the distribution of $T_n$ when the data are assumed to have distribution $\hat{F}_n$? The answer is to simulate $X_1^*, \dots, X_n^*$ from $\hat{F}_n$ and then compute $T_n^* = g(X_1^*, \dots, X_n^*)$. This constitutes one draw from the distribution of $T_n$. The idea is illustrated in the following diagram:

Real world $F \implies X_1, \dots, X_n \implies T_n = g(X_1, \dots, X_n)$
Bootstrap world $\hat{F}_n \implies X_1^*, \dots, X_n^* \implies T_n^* = g(X_1^*, \dots, X_n^*)$

How do we simulate $X_1^*, \dots, X_n^*$ from $\hat{F}_n$? Notice that $\hat{F}_n$ puts mass $1/n$ at each data point $X_1, \dots, X_n$. Therefore,

### Visual Description
Text-only slide.

---
## Page 30
### Content
8.2 Bootstrap Variance Estimation 109

**drawing an observation from $\hat{F}_n$ is equivalent to drawing one point at random from the original data set.**

Thus, to simulate $X_1^*, \dots, X_n^* \sim \hat{F}_n$ it suffices to draw $n$ observations with replacement from $X_1, \dots, X_n$. Here is a summary:

> **Bootstrap Variance Estimation**
> 1. Draw $X_1^*, \dots, X_n^* \sim
## Page 33
### Content
112 8. The Bootstrap

**8.5 Example (The Plasma Cholesterol Data).** Let us return to the cholesterol data. Suppose we are interested in the difference of the medians. Pseudocode for the bootstrap analysis is as follows:

```r
x1 <- first sample
x2 <- second sample
n1 <- length(x1)
n2 <- length(x2)
th.hat <- median(x2) - median(x1)
B <- 1000
Tboot <- vector of length B
for(i in 1:B){
  xx1 <- sample of size n1 with replacement from x1
  xx2 <- sample of size n2 with replacement from x2
  Tboot[i] <- median(xx2) - median(xx1)
}
se <- sqrt(variance(Tboot))
Normal <- (th.hat - 2*se, th.hat + 2*se)
percentile <- (quantile(Tboot, .025), quantile(Tboot, .975))
pivotal <- (2*th.hat - quantile(Tboot, .975), 2*th.hat - quantile(Tboot, .025))
```

The point estimate is 18.5, the bootstrap standard error is 7.42 and the resulting approximate 95 percent confidence intervals are as follows:

| Method | 95% Interval |
| :--- | :--- |
| Normal | (3.7, 33.3) |
| Pivotal | (5.0, 34.0) |
| Percentile | (5.0, 33.3) |

Since these intervals exclude 0, it appears that the second group has higher cholesterol although there is considerable uncertainty about how much higher as reflected in the width of the intervals. ■

The next two examples are based on small sample sizes. In practice, statistical methods based on very small sample sizes might not be reliable. We include the examples for their pedagogical value but we do want to sound a note of caution about interpreting the results with some skepticism.

**8.6 Example.** Here is an example that was one of the first used to illustrate the bootstrap by Bradley Efron, the inventor of the bootstrap. The data are LSAT scores (for entrance to law school) and GPA.

### Visual Description
Text-only slide containing a header, an example description, a block of R-like pseudocode for bootstrap analysis, a results table, and introductory text for the next example.

---
## Page 34
### Content
8.3 Bootstrap Confidence Intervals 113

| | | | | | | | | |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **LSAT** | 576 | 635 | 558 | 578 | 666 | 580 | 555 | 661 |
| | 651 | 605 | 653 | 575 | 545 | 572 | 594 | |
| **GPA** | 3.39 | 3.30 | 2.81 | 3.03 | 3.44 | 3.07 | 3.00 | 3.43 |
| | 3.36 | 3.13 | 3.12 | 2.74 | 2.76 | 2.88 | 3.96 | |

Each data point is of the form $X_i = (Y_i, Z_i)$ where $Y_i = \text{LSAT}_i$ and $Z_i = \text{GPA}_i$. The law school is interested in the correlation
$$\theta = \frac{\iint (y - \mu_Y)(z - \mu_Z) dF(y,z)}{\sqrt{\int (y - \mu_Y)^2 dF(y) \int (z - \mu_Z)^2 dF(z)}}.$$

The plug-in estimate is the sample correlation
$$\hat{\theta} = \frac{\sum_i (Y_i - \bar{Y})(Z_i - \bar{Z})}{\sqrt{\sum_i (Y_i - \bar{Y})^2 \sum_i (Z_i - \bar{Z})^2}}.$$

The estimated correlation is $\hat{\theta} = .776$. The bootstrap based on $B = 1000$ gives $\widehat{se} = .137$. Figure 8.1 shows the data and a histogram of the bootstrap replications $\hat{\theta}^*_1, \dots, \hat{\theta}^*_B$. This histogram is an approximation to the sampling distribution of $\hat{\theta}$. The Normal-based 95 percent confidence interval is $.78 \pm 2\widehat{se} = (.51, 1.00)$ while the percentile interval is $(.46, .96)$. In large samples, the two methods will show closer agreement. ■

**8.7 Example.** This example is from Efron and Tibshirani (1993). When drug companies introduce new medications, they are sometimes required to show bioequivalence. This means that the new drug is not substantially different than the current treatment. Here are data on eight subjects who used medical patches to infuse a hormone into the blood. Each subject received three treatments: placebo, old-patch, new-patch.

| subject | placebo | old | new | old - placebo | new - old |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 9243 | 17649 | 16449 | 8406 | -1200 |
| 2 | 9671 | 12013 | 14614 | 2342 | 2601 |
| 3 | 11792 | 19979 | 17274 | 8187 | -2705 |
| 4 | 13357 | 21816 | 23798 | 8459 | 1982 |
| 5 | 9055 | 13850 | 12560 | 4795 | -1290 |
| 6 | 6290 | 9806 | 10157 | 3516 | 351 |
| 7 | 12412 | 17208 | 16570 | 4796 | -638 |
| 8 | 18806 | 29044 | 26325 | 10238 | -2719 |

### Visual Description
Text-heavy slide containing two data tables (LSAT/GPA and medical patch data), mathematical formulas for correlation and its estimate, and descriptive text for examples 8.6 and 8.7.

---
## Page 35
### Content
114 8. The Bootstrap

![Figure 8.1: Top panel shows a scatter plot of GPA vs LSAT. Bottom panel shows a histogram of bootstrap samples for correlation.](figure_8_1_placeholder)

**FIGURE 8.1.** Law school data. The top panel shows the raw data. The bottom panel is a histogram of the correlations computed from each bootstrap sample.

Let $Z = \text{old} - \text{placebo}$ and $Y = \text{new} - \text{old}$. The Food and Drug Administration (FDA) requirement for bioequivalence is that $|\theta| \le .20$ where
$$\theta = \frac{\mathbb{E}_F(Y)}{\mathbb{E}_F(Z)}.$$

The plug-in estimate of $\theta$ is
$$\hat{\theta} = \frac{\bar{Y}}{\bar{Z}} = \frac{-452.3}{6342} = -0.0713.$$

The bootstrap standard error is $\widehat{se} = 0.105$. To answer the bioequivalence question, we compute a confidence interval. From $B = 1000$ bootstrap replications we get the 95 percent interval (-0.24, 0.15). This is not quite contained

### Visual Description
The page contains two plots labeled Figure 8.1. The top plot is a scatter plot with LSAT on the x-axis (ranging from 560 to 660) and GPA on the y-axis (ranging from 2.8 to 3.4). The bottom plot is a histogram of "Bootstrap Samples" on the x-axis (ranging from 0.2 to 1.0) and frequency on the y-axis. Below the figures is text continuing Example 8.7 with mathematical formulas for bioequivalence.

---
## Page 36
### Content
8.4 Bibliographic Remarks 115

in (-0.20, 0.20) so at the 95 percent level we have not demonstrated bioequivalence. Figure 8.2 shows the histogram of the bootstrap values. ■

![Figure 8.2: Histogram of bootstrap samples for patch data.](figure_8_2_placeholder)

**FIGURE 8.2.** Patch data.

### 8.4 Bibliographic Remarks
The bootstrap was invented by Efron (1979). There are several books on these topics including Efron and Tibshirani (1993), Davison and Hinkley (1997), Hall (1992) and Shao and Tu (1995). Also, see section 3.6 of van der Vaart and Wellner (1996).

### 8.5 Appendix
#### 8.5.1 The Jackknife
There is another method for computing standard errors called the **jackknife**, due to Quenouille (1949). It is less computationally expensive than the boot-

### Visual Description
The page contains a histogram labeled Figure 8.2, showing the distribution of "Bootstrap Samples" for the patch data, centered around -0.1. Above the figure is the conclusion of the bioequivalence example. Below the figure are sections for Bibliographic Remarks and an Appendix starting with the Jackknife method.

---
==End of PDF==
