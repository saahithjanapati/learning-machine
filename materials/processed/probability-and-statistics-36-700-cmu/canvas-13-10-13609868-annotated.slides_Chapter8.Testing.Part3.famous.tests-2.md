# canvas-13-10-13609868-annotated.slides_Chapter8.Testing.Part3.famous.tests-2

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-13-10-13609868-annotated.slides_Chapter8.Testing.Part3.famous.tests-2.pdf`
Duplicate equivalents: `canvas-13-10-13609868-annotated.slides_Chapter8.Testing.Part3.famous.tests-2.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 29

## Page 1
### Content
**CHAPTER 8, Part 3 Hypothesis Testing (cont’d)**

**Contents**

1. **Comparing Two Distributions Using Wald Tests** ... **2**
2. **Examples of Other Famous Tests** ... **3**
    2.1 Pearson’s $\chi^2$ Test for Multinomial Data . . . . . . . . 3
    2.2 Testing Independence . . . . . . . . . . . . . . . 5
    2.3 Goodness-of-Fit Testing . . . . . . . . . . . . . . . 7
    2.4 The Permutation Test . . . . . . . . . . . . . . . 8
3. **Equivalence Between Hypothesis Tests and Confidence Intervals** ... **12**

1

### Visual Description
This is a table of contents slide for Chapter 8, Part 3. It lists three main sections. There are blue handwritten annotations: a circle around "$\chi^2$ Test", a bracket grouping sections 2.2 through 2.4, an underline under "Permutation Test", and an arrow pointing to section 3.

---

## Page 2
### Content
# 1 Comparing Two Distributions Using Wald Tests

[Reference: Wasserman Section 10.1]

2

### Visual Description
Text-only slide.

---

## Page 3
### Content
(From AoS)

152 10. Hypothesis Testing and p-values

[Graph showing a power function $\beta(\mu)$ starting at $\alpha$ when $\mu=0$ (at $H_0$) and increasing towards 1 as $\mu$ increases (into $H_1$).]

FIGURE 10.1. The power function for Example 10.2. The size of the test is the largest probability of rejecting $H_0$ when $H_0$ is true. This occurs at $\mu = 0$ hence the size is $\beta(0)$. We choose the critical value $c$ so that $\beta(0) = \alpha$.

It would be desirable to find the test with highest power under $H_1$, among all size $\alpha$ tests. Such a test, if it exists, is called **most powerful**. Finding most powerful tests is hard and, in many cases, most powerful tests don't even exist. Instead of going into detail about when most powerful tests exist, we'll just consider four widely used tests: the Wald test,¹ the $\chi^2$ test, the permutation test, and the likelihood ratio test.

### 10.1 The Wald Test
Let $\theta$ be a scalar parameter, let $\hat{\theta}$ be an estimate of $\theta$ and let $\widehat{\text{se}}$ be the estimated standard error of $\hat{\theta}$.

---
¹The test is named after Abraham Wald (1902–1950), who was a very influential mathematical statistician. Wald died in a plane crash in India in 1950.

### Visual Description
This page contains a figure and text from a textbook. Figure 10.1 shows a power function curve. The text introduces the concept of "most powerful" tests and lists common tests, specifically highlighting "The Wald Test" in yellow. There is a blue handwritten note "(From AoS)" at the top.

---

## Page 4
### Content
10.1 The Wald Test 153

> **10.3 Definition.** The Wald Test
> Consider testing
> $$H_0 : \theta = \theta_0 \text{ versus } H_1 : \theta \neq \theta_0.$$
> Assume that $\hat{\theta}$ is asymptotically Normal:
> $$\frac{\hat{\theta} - \theta_0}{\widehat{\text{se}}} \rightsquigarrow N(0,1).$$
> The size $\alpha$ Wald test is: reject $H_0$ when $|W| > z_{\alpha/2}$ where
> $$W = \frac{\hat{\theta} - \theta_0}{\widehat{\text{se}}}. \quad (10.5)$$

**10.4 Theorem.** *Asymptotically, the Wald test has size $\alpha$, that is,*
$$\mathbb{P}_{\theta_0}(|W| > z_{\alpha/2}) \to \alpha$$
*as $n \to \infty$.*

PROOF. Under $\theta = \theta_0$, $(\hat{\theta} - \theta_0)/\widehat{\text{se}} \rightsquigarrow N(0,1)$. Hence, the probability of rejecting when the null $\theta = \theta_0$ is true is
$$\mathbb{P}_{\theta_0}(|W| > z_{\alpha/2}) = \mathbb{P}_{\theta_0} \left( \left| \frac{\hat{\theta} - \theta_0}{\widehat{\text{se}}} \right| > z_{\alpha/2} \right)$$
$$\to \mathbb{P}(|Z| > z_{\alpha/2})$$
$$= \alpha$$
where $Z \sim N(0, 1)$. $\blacksquare$

**10.5 Remark.** An alternative version of the Wald test statistic is $W = (\hat{\theta} - \theta_0)/\text{se}_0$ where $\text{se}_0$ is the standard error computed at $\theta = \theta_0$. Both versions of the test are valid.

Let us consider the power of the Wald test when the null hypothesis is false.

**10.6 Theorem.** *Suppose the true value of $\theta$ is $\theta_* \neq \theta_0$. The power $\beta(\theta_*)$ — the probability of correctly rejecting the null hypothesis — is given (approximately) by*
$$1 - \Phi\left( \frac{\theta_0 - \theta_*}{\widehat{\text{se}}} + z_{\alpha/2} \right) + \Phi\left( \frac{\theta_0 - \theta_*}{\widehat{\text{se}}} - z_{\alpha/2} \right). \quad (10.6)$$

### Visual Description
This page provides the formal definition, theorem, proof, and power calculation for the Wald Test. Key terms like "Wald Test", "$\theta = \theta_0$", "asymptotically Normal", and the formula for $W$ are highlighted in yellow.

---

## Page 5
### Content
Nov 24, 2025

**Next:** Different approaches to comparing two samples
$$\begin{cases} X_1, \dots, X_m \overset{iid}{\sim} F \\ Y_1, \dots, Y_n \overset{iid}{\sim} G \end{cases}$$

**Think:**
* How do these settings differ? (AoS book examples pp. 154-155)
* What are your assumptions?
* What are the pros/cons with the chosen approach?

### Visual Description
Handwritten notes on a grid paper background. It outlines the next topic: comparing two samples from distributions $F$ and $G$, with a list of "Think" questions.

---

## Page 6
### Content
Q: Is the error rate of two prediction algorithms the same?

**Setting I:**
$$\begin{cases} X_1, \dots, X_m \overset{iid}{\sim} \text{Bernoulli}(p_1) \\ Y_1, \dots, Y_n \overset{iid}{\sim} \text{Bernoulli}(p_2) \end{cases} \implies \begin{cases} X \sim \text{Bin}(m, p_1) \\ Y \sim \text{Bin}(n, p_2) \end{cases}$$
$X, Y$ indep. samples. Fixed parameters.

154 10. Hypothesis Testing and p-values

Recall that $\widehat{\text{se}}$ tends to 0 as the sample size increases. Inspecting (10.6) closely we note that: (i) the power is large if $\theta_*$ is far from $\theta_0$, and (ii) the power is large if the sample size is large.

**10.7 Example (Comparing Two Prediction Algorithms).** We test a prediction algorithm on a test set of size $m$ and we test a second prediction algorithm on a second test set of size $n$. Let $X$ be the number of incorrect predictions for algorithm 1 and let $Y$ be the number of incorrect predictions for algorithm 2. Then $X \sim \text{Binomial}(m, p_1)$ and $Y \sim \text{Binomial}(n, p_2)$. To test the null hypothesis that $p_1 = p_2$ write
$$H_0 : \delta = 0 \text{ versus } H_1 : \delta \neq 0$$
where $\delta = p_1 - p_2$. The MLE is $\hat{\delta} = \hat{p}_1 - \hat{p}_2$ with estimated standard error
$$\widehat{\text{se}} = \sqrt{\frac{\hat{p}_1(1 - \hat{p}_1)}{m} + \frac{\hat{p}_2(1 - \hat{p}_2)}{n}}$$
The size $\alpha$ Wald test is to reject $H_0$ when $|W| > z_{\alpha/2}$ where
$$W = \frac{\hat{\delta} - 0}{\widehat{\text{se}}} = \frac{\hat{p}_1 - \hat{p}_2}{\sqrt{\frac{\hat{p}_1(1 - \hat{p}_1)}{m} + \frac{\hat{p}_2(1 - \hat{p}_2)}{n}}} \approx N(0,1)$$
The power of this test will be largest when $p_1$ is far from $p_2$ and when the sample sizes are large.

**Setting II:**
What if we used the same test set to test both algorithms? **The two samples are no longer independent.** Instead we use the following strategy. Let $X_i = 1$ if algorithm 1 is correct on test case $i$ and $X_i = 0$ otherwise. Let $Y_i = 1$ if algorithm 2 is correct on test case $i$, and $Y_i = 0$ otherwise. Define $D_i = X_i - Y_i$. A typical dataset will look something like this:

| Test Case | $X_i$ | $Y_i$ | $D_i = X_i - Y_i$ |
| :--- | :--- | :--- | :--- |
| 1 | 1 | 0 | 1 |
| 2 | 1 | 1 | 0 |
| 3 | 1 | 1 | 0 |
| 4 | 0 | 1 | -1 |
| 5 | 0 | 0 | 0 |
| $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ |
| $n$ | 0 | 1 | -1 |

Let
$$\delta = \mathbb{E}(D_i) = \mathbb{E}(X_i) - \mathbb{E}(Y_i) = \mathbb{P}(X_i = 1) - \mathbb{P}(Y_i = 1).$$
The nonparametric plug-in estimate of $\delta$ is $\hat{\delta} = \bar{D} = n^{-1} \sum_{i=1}^n D_i$ and $\widehat{\text{se}}(\hat{\delta}) = S/\sqrt{n}$, where $S^2 = n^{-1} \sum_{i=1}^n (D_i - \bar{D})^2$. To test $H_0 : \delta = 0$ versus $H_1 : \delta \neq 0$.

Assume $D_1, \dots, D_n$ iid.

### Visual Description
This page compares two settings for testing prediction algorithms. Setting I uses independent samples, while Setting II uses the same test set (paired data). There are extensive blue and red handwritten annotations explaining the parameters of interest (P.O.I), test statistics, and assumptions (like independence and CLT).

---

## Page 7
### Content
By CLT approx normal for large n,
$$W = \frac{\bar{D} - 0}{\widehat{\text{se}}}$$

10.1 The Wald Test 155

we use $W = \hat{\delta}/\widehat{\text{se}}$ and reject $H_0$ if $|W| > z_{\alpha/2}$. This is called a **paired comparison**. $\blacksquare$

**10.8 Example (Comparing Two Means).** Let $X_1, \dots, X_m$ and $Y_1, \dots, Y_n$ be two independent samples from populations with means $\mu_1$ and $\mu_2$, respectively. Let's test the null hypothesis that $\mu_1 = \mu_2$. Write this as $H_0 : \delta = 0$ versus $H_1 : \delta \neq 0$ where $\delta = \mu_1 - \mu_2$. Recall that the nonparametric plug-in estimate of $\delta$ is $\hat{\delta} = \bar{X} - \bar{Y}$ with estimated standard error
$$\widehat{\text{se}} = \sqrt{\frac{s_1^2}{m} + \frac{s_2^2}{n}}$$
where $s_1^2$ and $s_2^2$ are the sample variances. The size $\alpha$ Wald test rejects $H_0$ when $|W| > z_{\alpha/2}$ where
$$W = \frac{\hat{\delta} - 0}{\widehat{\text{se}}} = \frac{\bar{X} - \bar{Y}}{\sqrt{\frac{s_1^2}{m} + \frac{s_2^2}{n}}} \approx N(0,1) \text{ for } m,n \text{ large by CLT}$$

**10.9 Example (Comparing Two Medians).** Consider the previous example again but let us test whether the medians of the two distributions are the same. Thus, $H_0 : \delta = 0$ versus $H_1 : \delta \neq 0$ where $\delta = \nu_1 - \nu_2$ where $\nu_1$ and $\nu_2$ are the medians. The nonparametric plug-in estimate of $\delta$ is $\hat{\delta} = \hat{\nu}_1 - \hat{\nu}_2$ where $\hat{\nu}_1$ and $\hat{\nu}_2$ are the sample medians. The estimated standard error $\widehat{\text{se}}$ of $\hat{\delta}$ can be obtained from the bootstrap. The Wald test statistic is $W = \hat{\delta}/\widehat{\text{se}}$. $\blacksquare$
(use nonparametric bootstrap to obtain null distr)

There is a relationship between the Wald test and the $1 - \alpha$ asymptotic confidence interval $\hat{\theta} \pm \widehat{\text{se}} z_{\alpha/2}$.

**10.10 Theorem.** *The size $\alpha$ Wald test rejects $H_0 : \theta = \theta_0$ versus $H_1 : \theta \neq \theta_0$ if and only if $\theta_0 \notin C$ where*
$$C = (\hat{\theta} - \widehat{\text{se}} z_{\alpha/2}, \hat{\theta} + \widehat{\text{se}} z_{\alpha/2}).$$
*Thus, testing the hypothesis is equivalent to checking whether the null value is in the confidence interval.*

**Warning!** When we reject $H_0$ we often say that the result is **statistically significant**. A result might be statistically significant and yet the size of the effect might be small. In such a case we have a result that is statistically significant but not scientifically or practically significant. The difference between statistical significance and scientific significance is easy to understand in light of Theorem 10.10. Any confidence interval that excludes $\theta_0$ corresponds to rejecting $H_0$. But the values in the interval could be close to $\theta_0$ (not scientifically significant) or far from $\theta_0$ (scientifically significant). See Figure 10.2.

### Visual Description
This page continues with examples of Wald tests for comparing means and medians. It also introduces the equivalence between hypothesis testing and confidence intervals. Handwritten annotations in red and blue emphasize the use of CLT for normality and the bootstrap for medians.

---

## Page 8
### Content
**Ex 10.7 setting I**
Assumptions:
* parametric model
* independent samples
* large-sample th.

**Setting II**
* parametric model
* same test sample $\implies X, Y$ no longer indep.
* However $D_1, D_2, \dots, D_n$ iid
* $D_i = X_i - Y_i$
* large-sample th.

**Ex 10.8**
* non-parametric model
* independent samples
* large-sample th.

**Ex 10.9**
* non-parametric model
* independent samples
* e.g. bootstrap instead of large-sample assumptions

### Visual Description
Handwritten notes on grid paper summarizing the assumptions for the examples discussed in the previous pages (10.7, 10.8, and 10.9). It contrasts parametric vs. non-parametric models and independent vs. paired samples.

---
==End of PDF==
## Page 9
### Content
# 2 Examples of Other Famous Tests
## 2.1 Pearson’s $\chi^2$ Test for Multinomial Data
[Reference: Wasserman Section 10.5]

Let $(X_1, \dots, X_k) \sim Multinomial(n, (p_1, \dots, p_k))$

$$H_0 : p = p_0$$
$$H_1 : p \neq p_0$$

**Handwritten Notes:**
* One constraint: $\sum_k p_k = 1$
* $X_j \sim Binomial(n, p_j)$
* $p(x) = \frac{n!}{x_1! \dots x_k!} p_1^{x_1} \dots p_k^{x_k}$ (pmf of multinomial RV X)
* $T = \sum_{j=1}^k \frac{(X_j - E_j)^2}{E_j} = \sum_{j=1}^k \frac{(X_j - n p_{0j})^2}{n p_{0j}}$
    * $X_j$: observed count in bin $j$
    * $E_j$: expected count
* Under $H_0$, $T \xrightarrow{H_0} \chi^2_\nu$ with $df \nu = k - 1$

### Visual Description
Slide with printed text and extensive blue handwritten annotations. The annotations include a multinomial probability mass function formula, a definition of the test statistic $T$ as a sum of squared differences between observed and expected counts, and the distribution of the test statistic under the null hypothesis. Arrows point from the printed text to the handwritten explanations.

---

## Page 10
### Content
**Ex:** Mendel’s theory predicts that the probability of a pea plant in a certain hybrid generation falling in one of four categories is $\vec{p}_0 = (9/16, 3/16, 3/16, 1/16)$

The observed count vector is $X = (315, 101, 108, 32)$ with $n = 556$

The predicted counts are $\vec{E}_0 = n\vec{p}_0 = (312.75, 104.25, 104.25, 34.75)$

The $\chi^2$ statistic is
$$T = \frac{(315 - 312.75)^2}{312.75} + \frac{(101 - 104.25)^2}{104.25} + \frac{(108 - 104.25)^2}{104.25} + \frac{(32 - 34.75)^2}{34.75}$$
$$= 0.47$$

The 0.05 upper quantile of $\chi^2_3$ is $7.815 \implies$ retain the null, and conclude that the collected data does not invalidate Mendel’s hypothesis.

**Handwritten Notes:**
* Test $H_0$: theory is right
* $\alpha = 0.05$
* Alt: estimate $p$, construct C.I. of $p$
* How about LRT? parametric model

### Visual Description
Slide containing a worked example of Mendel's theory using the $\chi^2$ test. It shows the observed counts, predicted counts, and the calculation of the $T$ statistic. Blue handwritten notes at the top and bottom add context about the null hypothesis, significance level, and alternative approaches like Likelihood Ratio Test (LRT).

---

## Page 11
### Content
164 10. Hypothesis Testing and p-values

In large samples, the permutation test usually gives similar results to a test that is based on large sample theory. The permutation test is thus most useful for small samples.

### 10.6 The Likelihood Ratio Test
The Wald test is useful for testing a scalar parameter. The likelihood ratio test is more general and can be used for testing a vector-valued parameter.

> **10.21 Definition.** Consider testing
> $$H_0 : \theta \in \Theta_0 \text{ versus } H_1 : \theta \notin \Theta_0.$$
> The **likelihood ratio statistic** is
> $$\lambda = 2 \log \left( \frac{\sup_{\theta \in \Theta} \mathcal{L}(\theta)}{\sup_{\theta \in \Theta_0} \mathcal{L}(\theta)} \right) = 2 \log \left( \frac{\mathcal{L}(\hat{\theta})}{\mathcal{L}(\hat{\theta}_0)} \right)$$
> where $\hat{\theta}$ is the MLE and $\hat{\theta}_0$ is the MLE when $\theta$ is restricted to lie in $\Theta_0$.

You might have expected to see the maximum of the likelihood over $\Theta_0^c$ instead of $\Theta$ in the numerator. In practice, replacing $\Theta_0^c$ with $\Theta$ has little effect on the test statistic. Moreover, the theoretical properties of $\lambda$ are much simpler if the test statistic is defined this way.

The likelihood ratio test is most useful when $\Theta_0$ consists of all parameter values $\theta$ such that some coordinates of $\theta$ are fixed at particular values.

> **10.22 Theorem.** Suppose that $\theta = (\theta_1, \dots, \theta_q, \theta_{q+1}, \dots, \theta_r)$. Let
> $$\Theta_0 = \{ \theta : (\theta_{q+1}, \dots, \theta_r) = (\theta_{0,q+1}, \dots, \theta_{0,r}) \}.$$
> Let $\lambda$ be the likelihood ratio test statistic. Under $H_0 : \theta \in \Theta_0$,
> $$\lambda(X^n) \rightsquigarrow \chi^2_{r-q}$$
> where $r - q$ is the dimension of $\Theta$ minus the dimension of $\Theta_0$. The p-value for the test is $\mathbb{P}(\chi^2_{r-q} > \lambda)$.

For example, if $\theta = (\theta_1, \theta_2, \theta_3, \theta_4, \theta_5)$ and we want to test the null hypothesis that $\theta_4 = \theta_5 = 0$ then the limiting distribution has $5 - 3 = 2$ degrees of freedom.

**Handwritten Note:**
* Compare LRT!

### Visual Description
A page from a textbook (likely Wasserman's "All of Statistics") discussing the Likelihood Ratio Test (LRT). It includes Definition 10.21 and Theorem 10.22 in a boxed format. A blue handwritten note at the top says "Compare LRT!".

---

## Page 12
### Content
10.7 Multiple Testing 165

**10.23 Example (Mendel's Peas Revisited).** Consider example 10.18 again. The likelihood ratio test statistic for $H_0 : p = p_0$ versus $H_1 : p \neq p_0$ is
$$\lambda = 2 \log \left( \frac{\mathcal{L}(\hat{p})}{\mathcal{L}(p_0)} \right)$$
$$= 2 \sum_{j=1}^4 X_j \log \left( \frac{\hat{p}_j}{p_{0j}} \right)$$
$$= 2 \left( 315 \log \left( \frac{315/556}{9/16} \right) + 101 \log \left( \frac{101/556}{3/16} \right) + 108 \log \left( \frac{108/556}{3/16} \right) + 32 \log \left( \frac{32/556}{1/16} \right) \right)$$
$$= 0.48.$$

Under $H_1$ there are four parameters. However, the parameters must sum to one so the dimension of the parameter space is three. Under $H_0$ there are no free parameters so the dimension of the restricted parameter space is zero. The difference of these two dimensions is three. Therefore, the limiting distribution of $\lambda$ under $H_0$ is $\chi^2_3$ and the p-value is
$$\text{p-value} = \mathbb{P}(\chi^2_3 > 0.48) = 0.92.$$

The conclusion is the same as with the $\chi^2$ test. $\blacksquare$

When the likelihood ratio test and the $\chi^2$ test are both applicable, as in the last example, they usually lead to similar results as long as the sample size is large.

### 10.7 Multiple Testing
In some situations we may conduct many hypothesis tests. In example 10.20, there were actually 2,638 genes. If we tested for a difference for each gene, we would be conducting 2,638 separate hypothesis tests. Suppose each test is conducted at level $\alpha$. For any one test, the chance of a false rejection of the null is $\alpha$. But the chance of at least one false rejection is much higher. This is the **multiple testing problem**. The problem comes up in many data mining situations where one may end up testing thousands or even millions of hypotheses. There are many ways to deal with this problem. Here we discuss two methods.

### Visual Description
Continuation of the textbook excerpt. It shows the LRT calculation for the Mendel's Peas example, resulting in a p-value of 0.92. A blue handwritten bracket highlights the text stating that LRT and $\chi^2$ tests lead to similar results for large samples. The bottom part of the page introduces the topic of Multiple Testing.

---

## Page 13
### Content
**Handwritten Note:** Application of $\chi^2$-test for binomial data or LRT

## 2.2 Testing Independence

$$H_0 : X \perp Y$$
$$H_1 : X \not\perp Y$$

E.g.: In drug trials, is the outcome independent of the treatment?
In regression contexts, are $X$ and $Y$ independent?

**Handwritten Notes:**
* $X=0$ no treatment exposure, $X=1$ w. treatment
* $Y=0$ no effect, $Y=1$ with effect

Key idea:
if $X \perp Y$ then $f_{X,Y} = f_X f_Y \implies$ use some “distance” between $f_{X,Y}$ and $f_X f_Y$ as test statistic.

### Visual Description
Slide introducing the concept of testing independence between two variables. It defines the null and alternative hypotheses using the independence symbol ($\perp$). Blue handwritten notes provide an example of drug trials (treatment vs. effect) and explain the key idea of comparing the joint distribution to the product of marginal distributions.

---

## Page 14
### Content
**Independence of two binary variables** Let $(X_1, Y_1), \dots, (X_n, Y_n)$ be $n$ i.i.d. pairs of binary RVs, summarized in the contingency table:

**Data:**
| | Y = 0 | Y = 1 | |
| :--- | :--- | :--- | :--- |
| X = 0 | $C_{00}$ | $C_{01}$ | $C_{0\cdot}$ |
| X = 1 | $C_{10}$ | $C_{11}$ | $C_{1\cdot}$ |
| | $C_{\cdot 0}$ | $C_{\cdot 1}$ | |

These counts are multinomial with probabilities:
**Model:**
| | Y = 0 | Y = 1 | |
| :--- | :--- | :--- | :--- |
| X = 0 | $p_{00}$ | $p_{01}$ | $p_{0\cdot}$ |
| X = 1 | $p_{10}$ | $p_{11}$ | $p_{1\cdot}$ |
| | $p_{\cdot 0}$ | $p_{\cdot 1}$ | |

so $\mathbb{E}(C_{ij}) = n p_{ij}$

Compare observed counts to expected counts under $H_0: E_{ij} = n p_{i\cdot} p_{\cdot j}$

TS $T$?
RR?
Null distribution of $T$?

**Handwritten Notes:**
* $I$ categories, $J$ categories
* Under $H_0$, $E_{ij} = n p_{i\cdot} p_{\cdot j}$
* $T = \sum_{i=0}^1 \sum_{j=0}^1 \frac{(C_{ij} - E_{ij})^2}{E_{ij}} \xrightarrow{H_0} \chi^2_\nu$
* $\nu = ?$
* unconstr D.F. $\dim(\Theta) = IJ - 1$
* Under $H_0$: $p_{i\cdot}, p_{\cdot j}$ | $\dim(\Theta_0) = (I-1) + (J-1)$
* # free param. $\nu = \dim(\Theta) - \dim(\Theta_0) = (IJ-1) - (I-1+J-1) = (I-1)(J-1)$

### Visual Description
Slide detailing the test for independence using a $2 \times 2$ contingency table. It shows the data table (counts $C_{ij}$) and the model table (probabilities $p_{ij}$). Extensive blue handwritten notes derive the degrees of freedom ($\nu$) for the $\chi^2$ distribution by subtracting the dimension of the null parameter space from the unconstrained parameter space.

---

## Page 15
### Content
**Handwritten Note:** One more application of $\chi^2$-test

## 2.3 Goodness-of-Fit Testing
[Reference: Wasserman Section 10.4]

GoF testing is a broad topic on its own. There are many tests for checking whether the data come from an assumed parametric model; the $\chi^2$ test is one such test.

**Handwritten Notes:**
* $X_1, \dots, X_n \sim F$ iid, $F$ unknown distr
* Test $H_0: F = F_0$ (known parametric model)
* [Sketch of a density curve with vertical bars dividing it into bins]
* Basic idea: bin data $\implies \chi^2$-test or LRT for multinomial data

### Visual Description
Slide introducing Goodness-of-Fit (GoF) testing. Blue handwritten notes explain that the goal is to test if data follows a specific distribution $F_0$. A hand-drawn diagram shows a continuous distribution being partitioned into discrete bins, illustrating the "basic idea" of converting continuous data into multinomial data for testing.

---

## Page 16
### Content
168 10. Hypothesis Testing and p-values

[Graph showing p-values plotted against their rank, with lines for $\alpha$, $T$, and $\alpha/m$ thresholds.]
**FIGURE 10.6.** The Benjamini-Hochberg (BH) procedure. For uncorrected testing we reject when $P_i < \alpha$. For Bonferroni testing we reject when $P_i < \alpha/m$. The BH procedure rejects when $P_i \leq T$. The BH threshold $T$ corresponds to the rightmost undercrossing of the upward sloping line.

With $\alpha = 0.05$, the Bonferroni test rejects any hypothesis whose p-value is less than $0.05/10 = 0.005$. Thus, only the first two hypotheses are rejected. For the BH test, we find the largest $i$ such that $P_{(i)} < i\alpha/m$, which in this case is $i = 5$. Thus we reject the first five hypotheses. $\blacksquare$

### 10.8 Goodness-of-fit Tests
There is another situation where testing arises, namely, when we want to check whether the data come from an assumed parametric model. There are many such tests; here is one.

Let $\mathcal{F} = \{ f(x; \theta) : \theta \in \Theta \}$ be a parametric model. Suppose the data take values on the real line. Divide the line into $k$ disjoint intervals $I_1, \dots, I_k$. For $j = 1, \dots, k$, let
$$p_j(\theta) = \int_{I_j} f(x; \theta) dx$$
be the probability that an observation falls into interval $I_j$ under the assumed model. Here, $\theta = (\theta_1, \dots, \theta_s)$ are the parameters in the assumed model. Let $N_j$ be the number of observations that fall into $I_j$. The likelihood for $\theta$ based...

**Handwritten Note:**
* [From AOS]

### Visual Description
A page from a textbook showing Figure 10.6, which illustrates the Benjamini-Hochberg procedure for multiple testing. Below the figure, Section 10.8 begins discussing Goodness-of-fit Tests, specifically how to bin continuous data into intervals to calculate probabilities $p_j(\theta)$ based on an integral of the model's density function. A blue handwritten note at the top says "[From AOS]".
## Page 17
### Content
10.9 Bibliographic Remarks 169

on the counts $N_1, \dots, N_k$ is the multinomial likelihood
$$Q(\theta) = \prod_{j=1}^k p_j(\theta)^{N_j}.$$
Maximizing $Q(\theta)$ yields estimates $\tilde{\theta} = (\tilde{\theta}_1, \dots, \tilde{\theta}_s)$ of $\theta$. Now define the test statistic
$$Q = \sum_{j=1}^k \frac{(N_j - n p_j(\tilde{\theta}))^2}{n p_j(\tilde{\theta})}. \quad (10.9)$$

**10.29 Theorem.** *Let $H_0$ be the null hypothesis that the data are IID draws from the model $\mathcal{F} = \{f(x; \theta) : \theta \in \Theta\}$. Under $H_0$, the statistic $Q$ defined in equation (10.9) converges in distribution to a $\chi^2_{k-1-s}$ random variable. Thus, the (approximate) p-value for the test is $\mathbb{P}(\chi^2_{k-1-s} > q)$ where $q$ denotes the observed value of $Q$.*

It is tempting to replace $\tilde{\theta}$ in (10.9) with the MLE $\hat{\theta}$. However, this will not result in a statistic whose limiting distribution is a $\chi^2_{k-1-s}$. However, it can be shown — due to a theorem of Herman Chernoff and Erich Lehmann from 1954 — that the p-value is bounded approximately by the p-values obtained using a $\chi^2_{k-1-s}$ and a $\chi^2_{k-1}$.

Goodness-of-fit testing has some serious limitations. If we reject $H_0$ then we conclude we should not use the model. But if we do not reject $H_0$ we cannot conclude that the model is correct. We may have failed to reject simply because the test did not have enough power. This is why it is better to use nonparametric methods whenever possible rather than relying on parametric assumptions.

### 10.9 Bibliographic Remarks
The most complete book on testing is Lehmann (1986). See also Chapter 8 of Casella and Berger (2002) and Chapter 9 of Rice (1995). The FDR method is due to Benjamini and Hochberg (1995). Some of the exercises are from Rice (1995).

### Visual Description
The page contains printed text and mathematical formulas. There is a blue circle around the term $\chi^2_{k-1-s}$ in the p-value formula within Theorem 10.29.

---

## Page 18
### Content
### 2.4 The Permutation Test
[Reference: Wasserman Section 10.5]

The permutation test is a **nonparametric** method for testing whether two distributions are the same. This test is **exact**, meaning that it is not based on large-sample theory approximations.

Let
$$X_1, \dots, X_m \sim F_X \quad \text{and} \quad Y_1, \dots, Y_n \sim F_Y$$

$$\begin{aligned} H_0 &: F_X = F_Y \\ H_1 &: F_X \neq F_Y. \end{aligned}$$

TS? RR?
two-sample test
null dist of TS?

8

### Visual Description
The slide contains printed text and mathematical notation for a hypothesis test. There are several blue handwritten annotations: a circle around "nonparametric", a underline under "exact", a bracket around the $X$ and $Y$ sample definitions, a box around the null hypothesis, and the phrases "two-sample test", "TS? RR?", and "null dist of TS?".

---

## Page 19
### Content
Let $T$ be the TS and $t_{obs}$ be the TS computed on the data
Null distribution of $T$?

9

### Visual Description
Text-only slide.

---

## Page 20
### Content
### The Permutation Test
* Let $N = m + n$
* Consider all $N!$ permutations of the data $\{X_1, \dots, X_m, Y_1, \dots, Y_n\}$
* For each permutation, compute $T$; call these $T^*_1, \dots, T^*_{N!}$
**under $H_0$ each value $T^*_1, \dots, T^*_{N!}$ has the same distribution (even if we do not know what it is)**
* Suppose we reject $H_0$ when $T \ge c$. Then
$$\text{p-value} = \frac{1}{N!} \sum_{i=1}^{N!} \mathbb{I}(T_i > t_{obs}).$$

10

### Visual Description
The slide contains a bulleted list explaining the steps of a permutation test, followed by a mathematical formula for the p-value.

---

## Page 21
### Content
**Ex:**
Let $(X_1, X_2, Y_1) = (1, 9, 3)$
Let $T(X_1, X_2, Y_1)$ be the difference in means
Then $t_{obs}(X_1, X_2, Y_1) = 2$

The permutations are:
| permutation | value of $T$ |
| :--- | :--- |
| (1, 9, 3) | 2 |
| (9, 1, 3) | 2 |
| (1, 3, 9) | 7 |
| (3, 1, 9) | 7 |
| (3, 9, 1) | 5 |
| (9, 3, 1) | 5 |

p-value = proportion of times $T^*$ is larger than $t_{obs} = 2$:
$$\text{p-value} = \frac{4}{6} = 0.66,$$
so we do not reject $H_0$ at significance level $\alpha = 5\%$.

11

### Visual Description
The slide presents a numerical example of a permutation test, including a table of permutations and their corresponding test statistic values, and a final p-value calculation.

---

## Page 22
### Content
### 3 Equivalence Between Hypothesis Tests and Confidence Intervals
We have already discussed the construction of confidence intervals and asymptotic confidence intervals at various points in the course. Next we will discuss a way to construct a confidence interval by *inverting a hypothesis test*.

Before we do this, let's first review a simple relation between tests and intervals.

**From intervals to tests:** Suppose that
$$P_\theta(\theta \in C_n(x_1, \dots, x_n)) = 1 - \alpha,$$
$\theta$ fixed
$C_n$ random
$\ge 1 - \alpha$
Valid CS.

for every $\theta_0 \in \Theta_0$
Valid test at level $\alpha$
$H_0: \theta \in \Theta_0$
$$Prob(\text{reject } H_0 | H_0 \text{ is true}) \le \alpha$$
$$= Prob_{\theta_0}(\theta_0 \notin C_n(x)) \le \alpha$$

12

### Visual Description
The slide contains printed text about the relationship between tests and confidence intervals. It is heavily annotated with blue handwriting: "Valid CS", "$\theta$ fixed", "$C_n$ random", "$\ge 1 - \alpha$", "for every $\theta_0 \in \Theta_0$", "Valid test at level $\alpha$", "$H_0: \theta \in \Theta_0$", and a box around the probability statement $Prob(\text{reject } H_0 | H_0 \text{ is true}) \le \alpha$.

---

## Page 23
### Content
**From tests to intervals:** A natural question is whether we can somehow construct a confidence interval from a procedure that performs hypothesis tests for us. This is called inverting a test. We suppose that for every parameter $\theta_0$, we have a hypothesis tester with level $\alpha$ for the hypothesis test:
$$\begin{aligned} H_0 &: \theta = \theta_0 \\ H_1 &: \theta \neq \theta_0. \end{aligned}$$

$C_n = \{ \theta : \theta \notin R(X_1, \dots, X_n) \}$
set of all $\theta \in \Theta$ which are not rejected at level $\alpha$

13

### Visual Description
The slide contains printed text and a boxed hypothesis test. There are blue handwritten annotations defining $C_n$ as the set of parameters not rejected by the test at level $\alpha$.

---

## Page 24
### Content
**Example:** Suppose we saw samples $X_1, \dots, X_n \sim N(\theta, 1)$, and our hypothesis test of choice was the Wald test.

Test $H_0: \theta = \theta_0$
$T_n = \sqrt{n} | \bar{X} - \theta_0 | \ge z_{\alpha/2}$

C.I. $C_n(X_1, \dots, X_n) = \{ \theta_0 : \sqrt{n} | \bar{X} - \theta_0 | \le z_{\alpha/2} \}$
Set of all $\theta_0$-values that are not rejected at level $\alpha$
$\implies (1-\alpha)$ confidence set for $\theta$

14

### Visual Description
The slide contains a printed example header and is followed by blue handwritten notes deriving a confidence interval for the mean of a normal distribution by inverting the Wald test. The handwritten notes include the test statistic, the rejection region, and the resulting confidence set.
## Page 25
### Content
10.1 The Wald Test 155

we use $W = \hat{\delta}/\widehat{\text{se}}$ and reject $H_0$ if $|W| > z_{\alpha/2}$. This is called a **paired comparison**. ■

**10.8 Example (Comparing Two Means).** Let $X_1, \dots, X_m$ and $Y_1, \dots, Y_n$ be two independent samples from populations with means $\mu_1$ and $\mu_2$, respectively. Let's test the null hypothesis that $\mu_1 = \mu_2$. Write this as $H_0 : \delta = 0$ versus $H_1 : \delta \neq 0$ where $\delta = \mu_1 - \mu_2$. Recall that the nonparametric plug-in estimate of $\delta$ is $\hat{\delta} = \bar{X} - \bar{Y}$ with estimated standard error
$$\widehat{\text{se}} = \sqrt{\frac{s_1^2}{m} + \frac{s_2^2}{n}}$$
where $s_1^2$ and $s_2^2$ are the sample variances. The size $\alpha$ Wald test rejects $H_0$ when $|W| > z_{\alpha/2}$ where
$$W = \frac{\hat{\delta} - 0}{\widehat{\text{se}}} = \frac{\bar{X} - \bar{Y}}{\sqrt{\frac{s_1^2}{m} + \frac{s_2^2}{n}}}. \text{ ■}$$

**10.9 Example (Comparing Two Medians).** Consider the previous example again but let us test whether the medians of the two distributions are the same. Thus, $H_0 : \delta = 0$ versus $H_1 : \delta \neq 0$ where $\delta = \nu_1 - \nu_2$ where $\nu_1$ and $\nu_2$ are the medians. The nonparametric plug-in estimate of $\delta$ is $\hat{\delta} = \hat{\nu}_1 - \hat{\nu}_2$ where $\hat{\nu}_1$ and $\hat{\nu}_2$ are the sample medians. The estimated standard error $\widehat{\text{se}}$ of $\hat{\delta}$ can be obtained from the bootstrap. The Wald test statistic is $W = \hat{\delta}/\widehat{\text{se}}$. ■

There is a relationship between the Wald test and the $1 - \alpha$ asymptotic confidence interval $\hat{\theta} \pm \widehat{\text{se}} z_{\alpha/2}$.

**10.10 Theorem.** *The size $\alpha$ Wald test rejects $H_0 : \theta = \theta_0$ versus $H_1 : \theta \neq \theta_0$ if and only if $\theta_0 \notin C$ where*
$$C = (\hat{\theta} - \widehat{\text{se}} z_{\alpha/2}, \hat{\theta} + \widehat{\text{se}} z_{\alpha/2}).$$
*Thus, testing the hypothesis is equivalent to checking whether the null value is in the confidence interval.*

**Warning!** When we reject $H_0$ we often say that the result is **statistically significant**. A result might be statistically significant and yet the size of the effect might be small. In such a case we have a result that is statistically significant but not scientifically or practically significant. The difference between statistical significance and scientific significance is easy to understand in light of Theorem 10.10. Any confidence interval that excludes $\theta_0$ corresponds to rejecting $H_0$. But the values in the interval could be close to $\theta_0$ (not scientifically significant) or far from $\theta_0$ (scientifically significant). See Figure 10.2.

### Visual Description
Text-heavy slide containing mathematical definitions and examples. There is a yellow highlight over Theorem 10.10 and its following explanation.

---
## Page 26
### Content
156 10. Hypothesis Testing and p-values

[Diagram showing two horizontal axes for $\theta$. The first axis has a narrow confidence interval (black rectangle) very close to $\theta_0$. The second axis has a wider confidence interval (black rectangle) far from $\theta_0$.]

**FIGURE 10.2. Scientific significance versus statistical significance.** A level $\alpha$ test rejects $H_0 : \theta = \theta_0$ if and only if the $1 - \alpha$ confidence interval does not include $\theta_0$. Here are two different confidence intervals. Both exclude $\theta_0$ so in both cases the test would reject $H_0$. But in the first case, the estimated value of $\theta$ is close to $\theta_0$ so the finding is probably of little scientific or practical value. In the second case, the estimated value of $\theta$ is far from $\theta_0$ so the finding is of scientific value. This shows two things. First, statistical significance does not imply that a finding is of scientific importance. Second, confidence intervals are often more informative than tests.

**Handwritten notes on Figure 10.2:**
*   "Does your result matter?" (pointing to the first diagram)
*   "Is your result a fluke compared to noise?" (pointing to the second diagram)
*   "Always report 'effect size' (in addition to e.g. p-values)"

### 10.2 p-values
Reporting "reject $H_0$" or "retain $H_0$" is not very informative. Instead, we could ask, for every $\alpha$, whether the test rejects at that level. Generally, if the test rejects at level $\alpha$ it will also reject at level $\alpha' > \alpha$. Hence, there is a smallest $\alpha$ at which the test rejects and we call this number the p-value. See Figure 10.3.

**10.11 Definition.** *Suppose that for every $\alpha \in (0,1)$ we have a size $\alpha$ test with rejection region $R_\alpha$. Then,*
$$\text{p-value} = \inf \{ \alpha : T(X^n) \in R_\alpha \}.$$
*That is, the p-value is the smallest level at which we can reject $H_0$.*

Informally, the p-value is a measure of the evidence against $H_0$: the smaller the p-value, the stronger the evidence against $H_0$. Typically, researchers use the following evidence scale:

### Visual Description
The slide contains a figure with two diagrams illustrating the difference between scientific and statistical significance. There are blue handwritten annotations asking "Does your result matter?" and "Is your result a fluke compared to noise?", and a note to "Always report 'effect size'". Yellow highlights are present on the figure title and the term "confidence interval" in the text. A definition box for p-value is at the bottom.

---
## Page 27
### Content
**Recall:**

# 36-700: Homework Set 8
**Extended Deadline to Monday November 10 at 6 pm — no late homework**
**Submit on Gradescope**

1. **[More practice on parametric inference]** Suppose that $X_1, \dots, X_n \sim \text{Geom}(p)$, i.e. the samples have a geometric distribution with parameter $p$. A geometric distribution is the distribution of the number of coin flips needed to see one head.
    (a) Compute the MOME of $p$.
    (b) Compute the MLE of $p$. In order to do this you need to write the likelihood function, simplify it as much as you can and find the (global) maximum of the likelihood or log likelihood; check that it is a maximum.
    (c) Assume that $p$ has a $\text{beta}(\alpha, \beta)$ prior. What is the prior mean of $p$?
    (d) Compute the posterior distribution of $p$.
    (e) Re-write the mean of the posterior distribution (what we call the posterior mean) as a convex combination of the prior mean and the MLE. What happens to the posterior mean if $\alpha, \beta$ are fixed and $n \to \infty$?
    (f) Obtain the Bayes estimator under squared error loss. (Remark: with absolute error loss, we would need to compute the posterior median which typically does not have a closed-form solution)
    (g) Look at the definition of a *posterior interval* (Wasserman p. 178, top). What is the difference between a posterior interval and a (frequentist) confidence interval of $p$? Why would taking level sets of the posterior (that is, computing highest posterior density intervals/sets) generally not give you valid confidence intervals/sets?

2. **[Comparing statistical procedures]** Suppose that we are in a Bernoulli experiment, $X_1, \dots, X_n \sim \text{Ber}(p)$, and we believe that $p$ is close to 0. A natural way to incorporate this knowledge might be to use a $\text{Beta}(1, b)$ prior with a high-value of $b$. In the following, assume we always use the squared error loss.
    (a) Compute the Bayes estimator. *Hint: The posterior density should be a well-known one, saving you some calculations of expected values.*
    (b) Compute the risk of the Bayes estimator $R(p)$. *Hint: With squared error loss, the risk reduces to the MSE.*
    (c) Suppose that $p = 1$ (i.e. our prior was wrong). Compare the risk of the Bayes estimator above to the minimax estimator. What happens as $b$ gets large?
    (d) Suppose that $b$ is fixed, compute the ratio of the maximum risk of the above Bayes estimator to the minimax risk. What happens as $n \to \infty$?

3. **[Wald test]** Suppose that $X_1, \dots, X_n \sim \text{Poisson}(\lambda)$. Let $\lambda_0 > 0$. Find the size $\alpha$ Wald test for $H_0 : \lambda = \lambda_0$ versus $H_1 : \lambda \neq \lambda_0$. (*Hint: With "Wald test" we here mean: use the MLE of $\lambda$ as a test statistic and use large-sample theory.*)

1

### Visual Description
Text-only slide containing a homework assignment. There is a blue handwritten "Recall:" at the top left. A blue arrow and yellow highlight emphasize problem 1(g).

---
## Page 28
### Content
# 36-700: Homework Set 9
**Extended Deadline to Tuesday November 25 at 6 pm — no late homework. Submit on Gradescope**

1. **[Power of the Wald test]**
    (a) Prove Theorem 10.6 in Wasserman page 153.
    (b) See Remark 10.5 on an alternative version of the Wald test statistic, where we in the denominator replace $\widehat{\text{se}}$ with the standard error of $\hat{\theta}$ computed at $\theta = \theta_0$. Is the power function of this version of the Wald test the same as in Part (a)? If not, what changes?

2. **[Asymptotic distribution of the LRT—simple $H_0$]**
    Do Problem 10.33 in Casella-Berger page 513
    (note: this problem is only asking you to complete the last step in the proof; you can find the entire Chapter 10 on Asymptotic Evaluations on Canvas)

3. **[Equivalence between hypothesis tests and confidence sets]**
    Prove Theorem 10.10 in Wasserman page 155.

4. **[Counting degrees of freedom]** In each case below, what are the degrees of freedom of the limiting $\chi^2$ distribution of the LRT $-2 \log \lambda(\mathbf{X})$? Include a brief explanation.
    (a) Example Chapter 8 page 2 (Bernoulli distribution)
    (b) Example Chapter 8 page 5 (two Binomial distributions)
    (c) Gaussian mean vector Chapter 8 page 10
    (d) Testing multinomials Chapter 8 page 11
    (e) Two binary variables Chapter 8 page 13
    (f) Two discrete variables Chapter 8 page 14
    (g) Let $\theta = (p_1, p_2, p_3, p_4, p_5)$ where $\sum_{j=1}^5 p_j = 1$ and $p_j \geq 0, j = 1, \dots, 5$. Suppose $X_1, \dots, X_n$ are iid discrete random variables and $P_\theta(X_i = j) = p_j, j = 1, \dots, 5$. Thus the pmf of $X_i$ is $f(j|\theta) = p_j$ and the likelihood function is
    $$L(\theta|\mathbf{x}) = \prod_{i=1}^n f(x_i|\theta) = p_1^{y_1} p_2^{y_2} p_3^{y_3} p_4^{y_4} p_5^{y_5},$$
    where $y_j = \text{number of } x_1, \dots, x_n \text{ equal to } j$. Consider testing
    $H_0 : p_1 = p_2 = p_3 \text{ and } p_4 = p_5 \quad \text{versus} \quad H_1 : H_0 \text{ is not true.}$

5. **[LRT]** Suppose that $X_1, \dots, X_n \sim N(\theta, 1)$. Describe the size $\alpha$ likelihood ratio test for testing the simple hypotheses: $H_0 : \theta = \theta_1$ versus $H_1 : \theta = \theta_2$.

6. **[More LRT]** Suppose that, $X_1, \dots, X_n$ is drawn from a Pareto distribution with density:
    $$p(x|\theta, \nu) = \frac{\theta \nu^\theta}{x^{\theta+1}} I_{[\nu, \infty)}(x), \quad \theta > 0, \nu > 0.$$

1

### Visual Description
Text-only slide containing a homework assignment. A blue arrow points to problem 4.

---
## Page 29
### Content
Construct the (generalized) LRT statistic for distinguishing the hypotheses:
$$H_0 : \theta = 1, \nu \text{ unknown,}$$
$$H_1 : \theta \neq 1, \nu \text{ unknown.}$$
Suppose Wilks' approximation was accurate. Derive the critical region for the GLRT.

2

### Visual Description
Text-only slide. This is the continuation of problem 6 from the previous page.
