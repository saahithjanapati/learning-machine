# canvas-13-02-13570927-slides_Chapter8.Testing.Part3.famous.tests

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-13-02-13570927-slides_Chapter8.Testing.Part3.famous.tests.pdf`
Duplicate equivalents: `canvas-13-02-13570927-slides_Chapter8.Testing.Part3.famous.tests.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 24

## Page 1
### Content
**CHAPTER 8, Part 3 Hypothesis Testing (cont’d)**

**Contents**

**1 Comparing Two Distributions Using Wald Tests 2**

**2 Examples of Other Famous Tests 3**
2.1 Pearson’s $\chi^2$ Test for Multinomial Data . . . . . . . . 3
2.2 Testing Independence . . . . . . . . . . . . . . . . 5
2.3 Goodness-of-Fit Testing . . . . . . . . . . . . . . . . 7
2.4 The Permutation Test . . . . . . . . . . . . . . . . 8

**3 Equivalence Between Hypothesis Tests and Confidence Intervals 12**

1

### Visual Description
Text-only slide. This is a table of contents for Chapter 8, Part 3 of a lecture on Hypothesis Testing.

---

## Page 2
### Content
**1 Comparing Two Distributions Using Wald Tests**

[Reference: Wasserman Section 10.1]

2

### Visual Description
Text-only slide. This is a section header slide for "Comparing Two Distributions Using Wald Tests".

---

## Page 3
### Content
(From AoS)

152 10. Hypothesis Testing and p-values

![Power function graph showing beta(mu) vs mu. The curve starts at alpha when mu is at H0 and increases as mu moves into H1.](graph)

**FIGURE 10.1.** The power function for Example 10.2. The size of the test is the largest probability of rejecting $H_0$ when $H_0$ is true. This occurs at $\mu = 0$ hence the size is $\beta(0)$. We choose the critical value $c$ so that $\beta(0) = \alpha$.

It would be desirable to find the test with highest power under $H_1$, among all size $\alpha$ tests. Such a test, if it exists, is called **most powerful**. Finding most powerful tests is hard and, in many cases, most powerful tests don't even exist. Instead of going into detail about when most powerful tests exist, we'll just consider four widely used tests: the Wald test,$^1$ the $\chi^2$ test, the permutation test, and the likelihood ratio test.

**10.1 The Wald Test**

Let $\theta$ be a scalar parameter, let $\hat{\theta}$ be an estimate of $\theta$ and let $\widehat{\text{se}}$ be the estimated standard error of $\hat{\theta}$.

---
$^1$The test is named after Abraham Wald (1902–1950), who was a very influential mathematical statistician. Wald died in a plane crash in India in 1950.

### Visual Description
This page appears to be a scan from a textbook (likely "All of Statistics" by Wasserman, as indicated by the handwritten note "(From AoS)"). It features a graph of a power function $\beta(\mu)$ and introductory text for the Wald test.

---

## Page 4
### Content
10.1 The Wald Test 153

> **10.3 Definition. The Wald Test**
>
> Consider testing
> $$H_0 : \theta = \theta_0 \quad \text{versus} \quad H_1 : \theta \neq \theta_0.$$
> Assume that $\hat{\theta}$ is asymptotically Normal:
> $$\frac{(\hat{\theta} - \theta_0)}{\widehat{\text{se}}} \rightsquigarrow N(0, 1).$$
> The size $\alpha$ **Wald test** is: reject $H_0$ when $|W| > z_{\alpha/2}$ where
> $$W = \frac{\hat{\theta} - \theta_0}{\widehat{\text{se}}}.$$ (10.5)

**10.4 Theorem.** *Asymptotically, the Wald test has size $\alpha$, that is,*
$$P_{\theta_0}(|W| > z_{\alpha/2}) \to \alpha$$
*as $n \to \infty$.*

**PROOF.** Under $\theta = \theta_0$, $(\hat{\theta} - \theta_0)/\widehat{\text{se}} \rightsquigarrow N(0, 1)$. Hence, the probability of rejecting when the null $\theta = \theta_0$ is true is
$$P_{\theta_0}(|W| > z_{\alpha/2}) = P_{\theta_0}\left( \left| \frac{\hat{\theta} - \theta_0}{\widehat{\text{se}}} \right| > z_{\alpha/2} \right)$$
$$\to P(|Z| > z_{\alpha/2})$$
$$= \alpha$$
where $Z \sim N(0, 1)$. $\blacksquare$

**10.5 Remark.** An alternative version of the Wald test statistic is $W = (\hat{\theta} - \theta_0)/\text{se}_0$ where $\text{se}_0$ is the standard error computed at $\theta = \theta_0$. Both versions of the test are valid.

Let us consider the power of the Wald test when the null hypothesis is false.

**10.6 Theorem.** *Suppose the true value of $\theta$ is $\theta_* \neq \theta_0$. The power $\beta(\theta_*)$ — the probability of correctly rejecting the null hypothesis — is given (approximately) by*
$$1 - \Phi\left( \frac{\theta_0 - \theta_*}{\widehat{\text{se}}} + z_{\alpha/2} \right) + \Phi\left( \frac{\theta_0 - \theta_*}{\widehat{\text{se}}} - z_{\alpha/2} \right).$$ (10.6)

### Visual Description
Text-only slide. This is a page from a textbook containing formal definitions, theorems, and proofs related to the Wald test, including its size and power.

---

## Page 5
### Content
154 10. Hypothesis Testing and p-values

Recall that $\widehat{\text{se}}$ tends to 0 as the sample size increases. Inspecting (10.6) closely we note that: (i) the power is large if $\theta_*$ is far from $\theta_0$, and (ii) the power is large if the sample size is large.

**10.7 Example (Comparing Two Prediction Algorithms).** We test a prediction algorithm on a test set of size $m$ and we test a second prediction algorithm on a second test set of size $n$. Let $X$ be the number of incorrect predictions for algorithm 1 and let $Y$ be the number of incorrect predictions for algorithm 2. Then $X \sim \text{Binomial}(m, p_1)$ and $Y \sim \text{Binomial}(n, p_2)$. To test the null hypothesis that $p_1 = p_2$ write
$$H_0 : \delta = 0 \quad \text{versus} \quad H_1 : \delta \neq 0$$
where $\delta = p_1 - p_2$. The MLE is $\hat{\delta} = \hat{p}_1 - \hat{p}_2$ with estimated standard error
$$\widehat{\text{se}} = \sqrt{\frac{\hat{p}_1(1 - \hat{p}_1)}{m} + \frac{\hat{p}_2(1 - \hat{p}_2)}{n}}.$$
The size $\alpha$ Wald test is to reject $H_0$ when $|W| > z_{\alpha/2}$ where
$$W = \frac{\hat{\delta} - 0}{\widehat{\text{se}}} = \frac{\hat{p}_1 - \hat{p}_2}{\sqrt{\frac{\hat{p}_1(1 - \hat{p}_1)}{m} + \frac{\hat{p}_2(1 - \hat{p}_2)}{n}}}.$$
The power of this test will be largest when $p_1$ is far from $p_2$ and when the sample sizes are large.

What if we used the same test set to test both algorithms? The two samples are no longer independent. Instead we use the following strategy. Let $X_i = 1$ if algorithm 1 is correct on test case $i$ and $X_i = 0$ otherwise. Let $Y_i = 1$ if algorithm 2 is correct on test case $i$, and $Y_i = 0$ otherwise. Define $D_i = X_i - Y_i$. A typical dataset will look something like this:

| Test Case | $X_i$ | $Y_i$ | $D_i = X_i - Y_i$ |
| :--- | :--- | :--- | :--- |
| 1 | 1 | 0 | 1 |
| 2 | 1 | 1 | 0 |
| 3 | 1 | 1 | 0 |
| 4 | 0 | 1 | -1 |
| 5 | 0 | 0 | 0 |
| $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ |
| n | 0 | 1 | -1 |

Let
$$\delta = E(D_i) = E(X_i) - E(Y_i) = P(X_i = 1) - P(Y_i = 1).$$
The nonparametric plug-in estimate of $\delta$ is $\hat{\delta} = \bar{D} = n^{-1} \sum_{i=1}^n D_i$ and $\widehat{\text{se}}(\hat{\delta}) = S/\sqrt{n}$, where $S^2 = n^{-1} \sum_{i=1}^n (D_i - \bar{D})^2$. To test $H_0 : \delta = 0$ versus $H_1 : \delta \neq 0$

### Visual Description
Textbook page continuing the discussion on the Wald test. It includes an example of comparing two prediction algorithms and introduces the concept of paired comparisons with a data table.

---

## Page 6
### Content
10.1 The Wald Test 155

we use $W = \hat{\delta}/\widehat{\text{se}}$ and reject $H_0$ if $|W| > z_{\alpha/2}$. This is called a **paired comparison**. $\blacksquare$

**10.8 Example (Comparing Two Means).** Let $X_1, \dots, X_m$ and $Y_1, \dots, Y_n$ be two independent samples from populations with means $\mu_1$ and $\mu_2$, respectively. Let's test the null hypothesis that $\mu_1 = \mu_2$. Write this as $H_0 : \delta = 0$ versus $H_1 : \delta \neq 0$ where $\delta = \mu_1 - \mu_2$. Recall that the nonparametric plug-in estimate of $\delta$ is $\hat{\delta} = \bar{X} - \bar{Y}$ with estimated standard error
$$\widehat{\text{se}} = \sqrt{\frac{s_1^2}{m} + \frac{s_2^2}{n}}$$
where $s_1^2$ and $s_2^2$ are the sample variances. The size $\alpha$ Wald test rejects $H_0$ when $|W| > z_{\alpha/2}$ where
$$W = \frac{\hat{\delta} - 0}{\widehat{\text{se}}} = \frac{\bar{X} - \bar{Y}}{\sqrt{\frac{s_1^2}{m} + \frac{s_2^2}{n}}}. \quad \blacksquare$$

**10.9 Example (Comparing Two Medians).** Consider the previous example again but let us test whether the medians of the two distributions are the same. Thus, $H_0 : \delta = 0$ versus $H_1 : \delta \neq 0$ where $\delta = \nu_1 - \nu_2$ where $\nu_1$ and $\nu_2$ are the medians. The nonparametric plug-in estimate of $\delta$ is $\hat{\delta} = \hat{\nu}_1 - \hat{\nu}_2$ where $\hat{\nu}_1$ and $\hat{\nu}_2$ are the sample medians. The estimated standard error $\widehat{\text{se}}$ of $\hat{\delta}$ can be obtained from the bootstrap. The Wald test statistic is $W = \hat{\delta}/\widehat{\text{se}}$. $\blacksquare$

There is a relationship between the Wald test and the $1 - \alpha$ asymptotic confidence interval $\hat{\theta} \pm \widehat{\text{se}} z_{\alpha/2}$.

**10.10 Theorem.** *The size $\alpha$ Wald test rejects $H_0 : \theta = \theta_0$ versus $H_1 : \theta \neq \theta_0$ if and only if $\theta_0 \notin C$ where*
$$C = (\hat{\theta} - \widehat{\text{se}} z_{\alpha/2}, \hat{\theta} + \widehat{\text{se}} z_{\alpha/2}).$$
*Thus, testing the hypothesis is equivalent to checking whether the null value is in the confidence interval.*

**Warning!** When we reject $H_0$ we often say that the result is **statistically significant**. A result might be statistically significant and yet the size of the effect might be small. In such a case we have a result that is statistically significant but not scientifically or practically significant. The difference between statistical significance and scientific significance is easy to understand in light of Theorem 10.10. Any confidence interval that excludes $\theta_0$ corresponds to rejecting $H_0$. But the values in the interval could be close to $\theta_0$ (not scientifically significant) or far from $\theta_0$ (scientifically significant). See Figure 10.2.

### Visual Description
Text-only slide. This textbook page concludes the section on the Wald test with examples of comparing means and medians, and discusses the equivalence between hypothesis tests and confidence intervals, as well as the distinction between statistical and scientific significance.

---

## Page 7
### Content
**2 Examples of Other Famous Tests**

**2.1 Pearson’s $\chi^2$ Test for Multinomial Data**

[Reference: Wasserman Section 10.5]

Let $(X_1, \dots, X_k) \sim Multinomial(n, (p_1, \dots, p_k))$

$$H_0 : p = p_0$$
$$H_1 : p \neq p_0.$$

3

### Visual Description
Text-only slide. This is a section header slide for "Examples of Other Famous Tests", specifically focusing on Pearson's chi-squared test for multinomial data.

---

## Page 8
### Content
**Ex:** Mendel’s theory predicts that the probability of a pea plant in a certain hybrid generation falling in one of four categories is
$p_0 = (9/16, 3/16, 3/16, 1/16)$

The observed count vector is $X = (315, 101, 108, 32)$ with $n = 556$

The predicted counts are $E_0 = n p_0 = (312.75, 104.25, 104.25, 34.75)$

The $\chi^2$ statistic is
$$T = \frac{(315 - 312.75)^2}{312.75} + \frac{(101 - 104.25)^2}{104.25} + \frac{(108 - 104.25)^2}{104.25} + \frac{(32 - 34.75)^2}{34.75}$$
$$= 0.47$$

The 0.05 upper quantile of $\chi^2_3$ is 7.815 $\implies$ retain the null, and conclude that the collected data does not invalidate Mendel’s hypothesis.

4

### Visual Description
Text-only slide. This slide provides a numerical example of Pearson's chi-squared test using Mendel's pea plant theory, showing the calculation of the test statistic and the final conclusion.

---
## Page 9
### Content
164 10. Hypothesis Testing and p-values

In large samples, the permutation test usually gives similar results to a test that is based on large sample theory. The permutation test is thus most useful for small samples.

### 10.6 The Likelihood Ratio Test
The Wald test is useful for testing a scalar parameter. The likelihood ratio test is more general and can be used for testing a vector-valued parameter.

> **10.21 Definition.** Consider testing
> $$H_0 : \theta \in \Theta_0 \quad \text{versus} \quad H_1 : \theta \notin \Theta_0.$$
> The **likelihood ratio statistic** is
> $$\lambda = 2 \log \left( \frac{\sup_{\theta \in \Theta} \mathcal{L}(\theta)}{\sup_{\theta \in \Theta_0} \mathcal{L}(\theta)} \right) = 2 \log \left( \frac{\mathcal{L}(\hat{\theta})}{\mathcal{L}(\hat{\theta}_0)} \right)$$
> where $\hat{\theta}$ is the MLE and $\hat{\theta}_0$ is the MLE when $\theta$ is restricted to lie in $\Theta_0$.

You might have expected to see the maximum of the likelihood over $\Theta_0^c$ instead of $\Theta$ in the numerator. In practice, replacing $\Theta_0^c$ with $\Theta$ has little effect on the test statistic. Moreover, the theoretical properties of $\lambda$ are much simpler if the test statistic is defined this way.

The likelihood ratio test is most useful when $\Theta_0$ consists of all parameter values $\theta$ such that some coordinates of $\theta$ are fixed at particular values.

**10.22 Theorem.** *Suppose that $\theta = (\theta_1, \dots, \theta_q, \theta_{q+1}, \dots, \theta_r)$. Let*
$$\Theta_0 = \{ \theta : (\theta_{q+1}, \dots, \theta_r) = (\theta_{0,q+1}, \dots, \theta_{0,r}) \}.$$
*Let $\lambda$ be the likelihood ratio test statistic. Under $H_0 : \theta \in \Theta_0$,*
$$\lambda(x^n) \rightsquigarrow \chi^2_{r-q}$$
*where $r - q$ is the dimension of $\Theta$ minus the dimension of $\Theta_0$. The p-value for the test is $\mathbb{P}(\chi^2_{r-q} > \lambda)$.*

For example, if $\theta = (\theta_1, \theta_2, \theta_3, \theta_4, \theta_5)$ and we want to test the null hypothesis that $\theta_4 = \theta_5 = 0$ then the limiting distribution has $5 - 3 = 2$ degrees of freedom.

### Visual Description
The slide contains a page from a textbook (page 164). A blue handwritten note at the top says "Compare LRT!". Definition 10.21 is enclosed in a black rectangular box. The text is formal and includes mathematical notation for hypothesis testing and likelihood ratios.

---

## Page 10
### Content
10.7 Multiple Testing 165

**10.23 Example (Mendel's Peas Revisited).** Consider example 10.18 again. The likelihood ratio test statistic for $H_0 : p = p_0$ versus $H_1 : p \neq p_0$ is
$$
\begin{aligned}
\lambda &= 2 \log \left( \frac{\mathcal{L}(\hat{p})}{\mathcal{L}(p_0)} \right) \\
&= 2 \sum_{j=1}^4 X_j \log \left( \frac{\hat{p}_j}{p_{0j}} \right) \\
&= 2 \left( 315 \log \left( \frac{315/556}{9/16} \right) + 101 \log \left( \frac{101/556}{3/16} \right) + 108 \log \left( \frac{108/556}{3/16} \right) + 32 \log \left( \frac{32/556}{1/16} \right) \right) \\
&= 0.48.
\end{aligned}
$$

Under $H_1$ there are four parameters. However, the parameters must sum to one so the dimension of the parameter space is three. Under $H_0$ there are no free parameters so the dimension of the restricted parameter space is zero. The difference of these two dimensions is three. Therefore, the limiting distribution of $\lambda$ under $H_0$ is $\chi^2_3$ and the p-value is
$$\text{p-value} = \mathbb{P}(\chi^2_3 > .48) = .92.$$
The conclusion is the same as with the $\chi^2$ test. ■

When the likelihood ratio test and the $\chi^2$ test are both applicable, as in the last example, they usually lead to similar results as long as the sample size is large.

### 10.7 Multiple Testing
In some situations we may conduct many hypothesis tests. In example 10.20, there were actually 2,638 genes. If we tested for a difference for each gene, we would be conducting 2,638 separate hypothesis tests. Suppose each test is conducted at level $\alpha$. For any one test, the chance of a false rejection of the null is $\alpha$. But the chance of at least one false rejection is much higher. This is the **multiple testing problem**. The problem comes up in many data mining situations where one may end up testing thousands or even millions of hypotheses. There are many ways to deal with this problem. Here we discuss two methods.

### Visual Description
Text-only slide. It is a continuation of the textbook page (page 165), showing a worked example and the beginning of a new section on Multiple Testing.

---

## Page 11
### Content
### 2.2 Testing Independence

$$H_0 : X \perp Y$$
$$H_1 : X \not\perp Y$$

E.g.: In drug trials, is the outcome independent of the treatment?
In regression contexts, are $X$ and $Y$ independent?

Key idea:
if $X \perp Y$ then $f_{X,Y} = f_X f_Y \implies$ use some "distance" between $f_{X,Y}$ and $f_X f_Y$ as test statistic.

5

### Visual Description
Text-only slide with centered hypothesis notation and a "Key idea" section at the bottom. The page number '5' is at the bottom center.

---

## Page 12
### Content
**Independence of two binary variables** Let $(X_1, Y_1), \dots, (X_n, Y_n)$ be $n$ i.i.d. pairs of binary RVs, summarized in the **contingency table**:

| | $Y = 0$ | $Y = 1$ | |
| :--- | :---: | :---: | :---: |
| $X = 0$ | $C_{00}$ | $C_{01}$ | $C_{0\cdot}$ |
| $X = 1$ | $C_{10}$ | $C_{11}$ | $C_{1\cdot}$ |
| | $C_{\cdot 0}$ | $C_{\cdot 1}$ | |

These counts are multinomial with probabilities:

| | $Y = 0$ | $Y = 1$ | |
| :--- | :---: | :---: | :---: |
| $X = 0$ | $p_{00}$ | $p_{01}$ | $p_{0\cdot}$ |
| $X = 1$ | $p_{10}$ | $p_{11}$ | $p_{1\cdot}$ |
| | $p_{\cdot 0}$ | $p_{\cdot 1}$ | |

so $\mathbb{E}(C_{ij}) = n p_{ij}$

Compare observed counts to expected counts under $H_0: E_{ij} = n p_{i\cdot} p_{\cdot j}$

TS $T$?
RR?
Null distribution of $T$?

6

### Visual Description
The slide presents two contingency tables side-by-side (conceptually, though stacked vertically in text). The first table shows counts $C_{ij}$ and marginal totals. The second table shows probabilities $p_{ij}$ and marginal probabilities. The bottom of the slide lists questions about the Test Statistic (TS), Rejection Region (RR), and Null distribution.

---

## Page 13
### Content
### 2.3 Goodness-of-Fit Testing

[Reference: Wasserman Section 10.4]

GoF testing is a broad topic on its own. There are many tests for checking whether the data come from an assumed parametric model; the $\chi^2$ test is one such test.

7

### Visual Description
Text-only slide. It introduces section 2.3 on Goodness-of-Fit Testing with a reference to a textbook.

---

## Page 14
### Content
168 10. Hypothesis Testing and p-values

(From A05)

![Figure 10.6: The Benjamini-Hochberg (BH) procedure.](graph)

**FIGURE 10.6.** The Benjamini-Hochberg (BH) procedure. For uncorrected testing we reject when $P_i < \alpha$. For Bonferroni testing we reject when $P_i < \alpha/m$. The BH procedure rejects when $P_i \le T$. The BH threshold $T$ corresponds to the rightmost undercrossing of the upward sloping line.

With $\alpha = 0.05$, the Bonferroni test rejects any hypothesis whose p-value is less than $0.05/10 = 0.005$. Thus, only the first two hypotheses are rejected. For the BH test, we find the largest $i$ such that $P_{(i)} < i\alpha/m$, which in this case is $i = 5$. Thus we reject the first five hypotheses. ■

### 10.8 Goodness-of-fit Tests
There is another situation where testing arises, namely, when we want to check whether the data come from an assumed parametric model. There are many such tests; here is one.

Let $\mathcal{F} = \{ f(x; \theta) : \theta \in \Theta \}$ be a parametric model. Suppose the data take values on the real line. Divide the line into $k$ disjoint intervals $I_1, \dots, I_k$. For $j = 1, \dots, k$, let
$$p_j(\theta) = \int_{I_j} f(x; \theta) dx$$
be the probability that an observation falls into interval $I_j$ under the assumed model. Here, $\theta = (\theta_1, \dots, \theta_s)$ are the parameters in the assumed model. Let $N_j$ be the number of observations that fall into $I_j$. The likelihood for $\theta$ based

### Visual Description
The slide shows page 168 of a textbook. It includes a graph (Figure 10.6) plotting p-values against their rank, with lines representing the Bonferroni threshold ($\alpha/m$) and the Benjamini-Hochberg threshold line. There is a blue handwritten note "(From A05)" at the top. Below the figure and its explanation, section 10.8 on Goodness-of-fit Tests begins.

---

## Page 15
### Content
10.9 Bibliographic Remarks 169

on the counts $N_1, \dots, N_k$ is the multinomial likelihood
$$Q(\theta) = \prod_{j=1}^k p_j(\theta)^{N_j}.$$
Maximizing $Q(\theta)$ yields estimates $\tilde{\theta} = (\tilde{\theta}_1, \dots, \tilde{\theta}_s)$ of $\theta$. Now define the test statistic
$$Q = \sum_{j=1}^k \frac{(N_j - n p_j(\tilde{\theta}))^2}{n p_j(\tilde{\theta})}. \tag{10.9}$$

**10.29 Theorem.** *Let $H_0$ be the null hypothesis that the data are IID draws from the model $\mathcal{F} = \{ f(x; \theta) : \theta \in \Theta \}$. Under $H_0$, the statistic $Q$ defined in equation (10.9) converges in distribution to a $\chi^2_{k-1-s}$ random variable. Thus, the (approximate) p-value for the test is $\mathbb{P}(\chi^2_{k-1-s} > q)$ where $q$ denotes the observed value of $Q$.*

It is tempting to replace $\tilde{\theta}$ in (10.9) with the MLE $\hat{\theta}$. However, this will not result in a statistic whose limiting distribution is a $\chi^2_{k-1-s}$. However, it can be shown — due to a theorem of Herman Chernoff and Erich Lehmann from 1954 — that the p-value is bounded approximately by the p-values obtained using a $\chi^2_{k-1-s}$ and a $\chi^2_{k-1}$.

Goodness-of-fit testing has some serious limitations. If we reject $H_0$ then we conclude we should not use the model. But if we do not reject $H_0$ we cannot conclude that the model is correct. We may have failed to reject simply because the test did not have enough power. This is why it is better to use nonparametric methods whenever possible rather than relying on parametric assumptions.

### 10.9 Bibliographic Remarks
The most complete book on testing is Lehmann (1986). See also Chapter 8 of Casella and Berger (2002) and Chapter 9 of Rice (1995). The FDR method is due to Benjamini and Hochberg (1995). Some of the exercises are from Rice (1995).

### Visual Description
Text-only slide. It is page 169 of the textbook, concluding the discussion on Goodness-of-fit tests with Theorem 10.29 and providing bibliographic remarks.

---

## Page 16
### Content
### 2.4 The Permutation Test

[Reference: Wasserman Section 10.5]

The permutation test is a nonparametric method for testing whether two distributions are the same. This test is **exact**, meaning that it is not based on large-sample theory approximations.

Let
$$X_1, \dots, X_m \sim F_X \quad \text{and} \quad Y_1, \dots, Y_n \sim F_Y$$
$$H_0 : F_X = F_Y$$
$$H_1 : F_X \neq F_Y.$$

TS? RR?

8

### Visual Description
Text-only slide. It introduces section 2.4 on The Permutation Test, defining the null and alternative hypotheses for comparing two distributions. The page number '8' is at the bottom center.

---
## Page 17
### Content
Let $T$ be the TS and $t_{\text{obs}}$ be the TS computed on the data
Null distribution of $T$?

9
### Visual Description
Text-only slide.

---
## Page 18
### Content
**The Permutation Test**

* Let $N = m + n$
* Consider all $N!$ permutations of the data $\{X_1, \dots, X_m, Y_1, \dots, Y_n\}$
* For each permutation, compute $T$; call these $T_1^*, \dots, T_{N!}^*$

**under $H_0$ each value $T_1^*, \dots, T_{N!}^*$ has the *same* distribution (even if we do not know what it is)**

* Suppose we reject $H_0$ when $T \ge c$. Then
$$\text{p-value} = \frac{1}{N!} \sum_{i=1}^{N!} \mathbb{I}(T_i^* > t_{\text{obs}}).$$

10
### Visual Description
Text-only slide.

---
## Page 19
### Content
**Ex:**
Let $(X_1, X_2, Y_1) = (1, 9, 3)$
Let $T(X_1, X_2, Y_1)$ be the difference in means
Then $t_{\text{obs}}(X_1, X_2, Y_1) = 2$

The permutations are:

| permutation | value of $T$ |
| :--- | :--- |
| (1,9,3) | 2 |
| (9,1,3) | 2 |
| (1,3,9) | 7 |
| (3,1,9) | 7 |
| (3,9,1) | 5 |
| (9,3,1) | 5 |

p-value = proportion of times $T^*$ is larger than $t_{\text{obs}} = 2$:
$$\text{p-value} = \frac{4}{6} = 0.66,$$
so we do not reject $H_0$ at significance level $\alpha = 5\%$.

11
### Visual Description
Text slide containing a small table that lists six permutations of the set (1, 9, 3) and their corresponding test statistic values.

---
## Page 20
### Content
### 3 Equivalence Between Hypothesis Tests and Confidence Intervals

We have already discussed the construction of confidence intervals and asymptotic confidence intervals at various points in the course. Next we will discuss a way to construct a confidence interval by *inverting a hypothesis test*.

Before we do this, let's first review a simple relation between tests and intervals.

**From intervals to tests:** Suppose that
$$P_\theta(\theta \in C_n(x_1, \dots, x_n)) = 1 - \alpha,$$

12
### Visual Description
Text-only slide.

---
## Page 21
### Content
**From tests to intervals:** A natural question is whether we can somehow construct a confidence interval from a procedure that performs hypothesis tests for us. This is called inverting a test. We suppose that for every parameter $\theta_0$, we have a hypothesis tester with level $\alpha$ for the hypothesis test:
$$H_0 : \theta = \theta_0$$
$$H_1 : \theta \neq \theta_0.$$

13
### Visual Description
Text-only slide.

---
## Page 22
### Content
**Example:** Suppose we saw samples $X_1, \dots, X_n \sim N(\theta, 1)$, and our hypothesis test of choice was the Wald test.

14
### Visual Description
Text-only slide.

---
## Page 23
### Content
**36-700: Homework Set 9**
Extended Deadline to *Tuesday November 25 at 6 pm* — no late homework. Submit on Gradescope

1. **[Power of the Wald test]**
    (a) Prove Theorem 10.6 in Wasserman page 153.
    (b) See Remark 10.5 on an alternative version of the Wald test statistic, where we in the denominator replace $\widehat{se}$ with the standard error of $\hat{\theta}$ computed at $\theta = \theta_0$. Is the power function of this version of the Wald test the same as in Part (a)? If not, what changes?

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
    (g) Let $\theta = (p_1, p_2, p_3, p_4, p_5)$ where $\sum_{j=1}^5 p_j = 1$ and $p_j \ge 0, j = 1, \dots, 5$. Suppose $X_1, \dots, X_n$ are iid discrete random variables and $P_\theta(X_i = j) = p_j, j = 1, \dots, 5$. Thus the pmf of $X_i$ is $f(j|\theta) = p_j$ and the likelihood function is
    $$L(\theta|\mathbf{x}) = \prod_{i=1}^n f(x_i|\theta) = p_1^{y_1} p_2^{y_2} p_3^{y_3} p_4^{y_4} p_5^{y_5},$$
    where $y_j = \text{number of } x_1, \dots, x_n \text{ equal to } j$. Consider testing
    $H_0 : p_1 = p_2 = p_3 \text{ and } p_4 = p_5 \quad \text{versus} \quad H_1 : H_0 \text{ is not true.}$

5. **[LRT]** Suppose that $X_1, \dots, X_n \sim N(\theta, 1)$. Describe the size $\alpha$ likelihood ratio test for testing the simple hypotheses: $H_0 : \theta = \theta_1$ versus $H_1 : \theta = \theta_2$.

6. **[More LRT]** Suppose that $X_1, \dots, X_n$ is drawn from a Pareto distribution with density:
    $$p(x|\theta, \nu) = \frac{\theta \nu^\theta}{x^{\theta+1}} \mathbb{I}_{[\nu, \infty)}(x), \quad \theta > 0, \nu > 0.$$

1
### Visual Description
Text-only slide formatted as a homework assignment.

---
## Page 24
### Content
Construct the (generalized) LRT statistic for distinguishing the hypotheses:
$$H_0 : \theta = 1, \nu \text{ unknown,}$$
$$H_1 : \theta \neq 1, \nu \text{ unknown.}$$
Suppose Wilks' approximation was accurate. Derive the critical region for the GLRT.

2
### Visual Description
Text-only slide (continuation of homework).
