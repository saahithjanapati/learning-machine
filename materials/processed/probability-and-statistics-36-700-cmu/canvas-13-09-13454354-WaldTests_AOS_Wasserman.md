# canvas-13-09-13454354-WaldTests_AOS_Wasserman

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-13-09-13454354-WaldTests_AOS_Wasserman.pdf`
Duplicate equivalents: `canvas-13-09-13454354-WaldTests_AOS_Wasserman.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 6

## Page 1
### Content
150 10. Hypothesis Testing and p-values

| | Retain Null | Reject Null |
| :--- | :--- | :--- |
| $H_0$ true | $\checkmark$ | type I error |
| $H_1$ true | type II error | $\checkmark$ |

TABLE 10.1. Summary of outcomes of hypothesis testing.

region. If $X \in R$ we reject the null hypothesis, otherwise, we do not reject the null hypothesis:

$$X \in R \implies \text{reject } H_0$$
$$X \notin R \implies \text{retain (do not reject) } H_0$$

Usually, the rejection region $R$ is of the form
$$R = \{x : T(x) > c\} \tag{10.2}$$
where $T$ is a **test statistic** and $c$ is a **critical value**. The problem in hypothesis testing is to find an appropriate test statistic $T$ and an appropriate critical value $c$.

**Warning!** There is a tendency to use hypothesis testing methods even when they are not appropriate. Often, estimation and confidence intervals are better tools. Use hypothesis testing only when you want to test a well-defined hypothesis.

Hypothesis testing is like a legal trial. We assume someone is innocent unless the evidence strongly suggests that he is guilty. Similarly, we retain $H_0$ unless there is strong evidence to reject $H_0$. There are two types of errors we can make. Rejecting $H_0$ when $H_0$ is true is called a **type I error**. Retaining $H_0$ when $H_1$ is true is called a **type II error**. The possible outcomes for hypothesis testing are summarized in Tab. 10.1.

> **10.1 Definition.** The **power function** of a test with rejection region $R$ is defined by
> $$\beta(\theta) = \mathbb{P}_\theta(X \in R). \tag{10.3}$$
> The **size** of a test is defined to be
> $$\alpha = \sup_{\theta \in \Theta_0} \beta(\theta). \tag{10.4}$$
> A test is said to have **level** $\alpha$ if its size is less than or equal to $\alpha$.

### Visual Description
The page contains a table (Table 10.1) summarizing hypothesis testing outcomes (Type I and Type II errors). Below the table, there is text explaining rejection regions and a 'Warning!' paragraph. At the bottom, there is a boxed definition (10.1) for the power function and size of a test.

---
## Page 2
### Content
10. Hypothesis Testing and p-values 151

A hypothesis of the form $\theta = \theta_0$ is called a **simple hypothesis**. A hypothesis of the form $\theta > \theta_0$ or $\theta < \theta_0$ is called a **composite hypothesis**. A test of the form
$$H_0 : \theta = \theta_0 \quad \text{versus} \quad H_1 : \theta \neq \theta_0$$
is called a **two-sided test**. A test of the form
$$H_0 : \theta \le \theta_0 \quad \text{versus} \quad H_1 : \theta > \theta_0$$
or
$$H_0 : \theta \ge \theta_0 \quad \text{versus} \quad H_1 : \theta < \theta_0$$
is called a **one-sided test**. The most common tests are two-sided.

**10.2 Example.** Let $X_1, \dots, X_n \sim N(\mu, \sigma)$ where $\sigma$ is known. We want to test $H_0 : \mu \le 0$ versus $H_1 : \mu > 0$. Hence, $\Theta_0 = (-\infty, 0]$ and $\Theta_1 = (0, \infty)$. Consider the test:
$$\text{reject } H_0 \text{ if } T > c$$
where $T = \bar{X}$. The rejection region is
$$R = \{(x_1, \dots, x_n) : T(x_1, \dots, x_n) > c\}.$$
Let $Z$ denote a standard Normal random variable. The power function is
$$\begin{aligned} \beta(\mu) &= \mathbb{P}_\mu(\bar{X} > c) \\ &= \mathbb{P}_\mu\left(\frac{\sqrt{n}(\bar{X} - \mu)}{\sigma} > \frac{\sqrt{n}(c - \mu)}{\sigma}\right) \\ &= \mathbb{P}\left(Z > \frac{\sqrt{n}(c - \mu)}{\sigma}\right) \\ &= 1 - \Phi\left(\frac{\sqrt{n}(c - \mu)}{\sigma}\right). \end{aligned}$$
This function is increasing in $\mu$. See Figure 10.1. Hence
$$\text{size} = \sup_{\mu \le 0} \beta(\mu) = \beta(0) = 1 - \Phi\left(\frac{\sqrt{n}c}{\sigma}\right).$$
For a size $\alpha$ test, we set this equal to $\alpha$ and solve for $c$ to get
$$c = \frac{\sigma \Phi^{-1}(1 - \alpha)}{\sqrt{n}}.$$
We reject when $\bar{X} > \sigma \Phi^{-1}(1 - \alpha)/\sqrt{n}$. Equivalently, we reject when
$$\frac{\sqrt{n}(\bar{X} - 0)}{\sigma} > z_\alpha$$
where $z_\alpha = \Phi^{-1}(1 - \alpha)$. $\blacksquare$

### Visual Description
Text-only slide. It contains definitions of simple/composite hypotheses and one-sided/two-sided tests, followed by a detailed mathematical example (10.2) involving a Normal distribution.

---
## Page 3
### Content
152 10. Hypothesis Testing and p-values

![Figure 10.1: The power function for Example 10.2. The size of the test is the largest probability of rejecting $H_0$ when $H_0$ is true. This occurs at $\mu = 0$ hence the size is $\beta(0)$. We choose the critical value $c$ so that $\beta(0) = \alpha$.](graph_placeholder)

FIGURE 10.1. The power function for Example 10.2. The size of the test is the largest probability of rejecting $H_0$ when $H_0$ is true. This occurs at $\mu = 0$ hence the size is $\beta(0)$. We choose the critical value $c$ so that $\beta(0) = \alpha$.

It would be desirable to find the test with highest power under $H_1$, among all size $\alpha$ tests. Such a test, if it exists, is called **most powerful**. Finding most powerful tests is hard and, in many cases, most powerful tests don't even exist. Instead of going into detail about when most powerful tests exist, we'll just consider four widely used tests: the Wald test,¹ the $\chi^2$ test, the permutation test, and the likelihood ratio test.

### 10.1 The Wald Test

Let $\theta$ be a scalar parameter, let $\hat{\theta}$ be an estimate of $\theta$ and let $\widehat{\text{se}}$ be the estimated standard error of $\hat{\theta}$.

---
¹The test is named after Abraham Wald (1902–1950), who was a very influential mathematical statistician. Wald died in a plane crash in India in 1950.

### Visual Description
The page features a graph (Figure 10.1) showing a sigmoid-like power function $\beta(\mu)$ plotted against $\mu$. The y-axis has a marker for $\alpha$ and the x-axis has markers for $H_0$ and $H_1$. Below the graph is explanatory text and the beginning of section 10.1 on the Wald Test, including a historical footnote.

---
## Page 4
### Content
10.1 The Wald Test 153

> **10.3 Definition. The Wald Test**
> Consider testing
> $$H_0 : \theta = \theta_0 \quad \text{versus} \quad H_1 : \theta \neq \theta_0.$$
> Assume that $\hat{\theta}$ is asymptotically Normal:
> $$\frac{(\hat{\theta} - \theta_0)}{\widehat{\text{se}}} \rightsquigarrow N(0, 1).$$
> The size $\alpha$ **Wald test** is: reject $H_0$ when $|W| > z_{\alpha/2}$ where
> $$W = \frac{\hat{\theta} - \theta_0}{\widehat{\text{se}}}. \tag{10.5}$$

**10.4 Theorem.** *Asymptotically, the Wald test has size $\alpha$, that is,*
$$\mathbb{P}_{\theta_0}(|W| > z_{\alpha/2}) \to \alpha$$
*as $n \to \infty$.*

PROOF. Under $\theta = \theta_0$, $(\hat{\theta} - \theta_0)/\widehat{\text{se}} \rightsquigarrow N(0, 1)$. Hence, the probability of rejecting when the null $\theta = \theta_0$ is true is
$$\begin{aligned} \mathbb{P}_{\theta_0}(|W| > z_{\alpha/2}) &= \mathbb{P}_{\theta_0}\left(\left|\frac{\hat{\theta} - \theta_0}{\widehat{\text{se}}}\right| > z_{\alpha/2}\right) \\ &\to \mathbb{P}(|Z| > z_{\alpha/2}) \\ &= \alpha \end{aligned}$$
where $Z \sim N(0, 1)$. $\blacksquare$

**10.5 Remark.** An alternative version of the Wald test statistic is $W = (\hat{\theta} - \theta_0)/\text{se}_0$ where $\text{se}_0$ is the standard error computed at $\theta = \theta_0$. Both versions of the test are valid.

Let us consider the power of the Wald test when the null hypothesis is false.

**10.6 Theorem.** *Suppose the true value of $\theta$ is $\theta_* \neq \theta_0$. The power $\beta(\theta_*)$ — the probability of correctly rejecting the null hypothesis — is given (approximately) by*
$$1 - \Phi\left(\frac{\theta_0 - \theta_*}{\widehat{\text{se}}} + z_{\alpha/2}\right) + \Phi\left(\frac{\theta_0 - \theta_*}{\widehat{\text{se}}} - z_{\alpha/2}\right). \tag{10.6}$$

### Visual Description
The page contains a boxed definition (10.3) for the Wald Test. Below it are Theorem 10.4 with its proof, Remark 10.5, and Theorem 10.6 which provides the power function for the Wald test.

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
$$\delta = \mathbb{E}(D_i) = \mathbb{E}(X_i) - \mathbb{E}(Y_i) = \mathbb{P}(X_i = 1) - \mathbb{P}(Y_i = 1).$$
The nonparametric plug-in estimate of $\delta$ is $\hat{\delta} = \bar{D} = n^{-1} \sum_{i=1}^n D_i$ and $\widehat{\text{se}}(\hat{\delta}) = S/\sqrt{n}$, where $S^2 = n^{-1} \sum_{i=1}^n (D_i - \bar{D})^2$. To test $H_0 : \delta = 0$ versus $H_1 : \delta \neq 0$

### Visual Description
The page discusses the power of the Wald test and provides Example 10.7 about comparing two prediction algorithms. It includes formulas for independent samples and a table for a paired comparison dataset.

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

Thus, testing the hypothesis is equivalent to checking whether the null value is in the confidence interval.

**Warning!** When we reject $H_0$ we often say that the result is **statistically significant**. A result might be statistically significant and yet the size of the effect might be small. In such a case we have a result that is statistically significant but not scientifically or practically significant. The difference between statistical significance and scientific significance is easy to understand in light of Theorem 10.10. Any confidence interval that excludes $\theta_0$ corresponds to rejecting $H_0$. But the values in the interval could be close to $\theta_0$ (not scientifically significant) or far from $\theta_0$ (scientifically significant). See Figure 10.2.

### Visual Description
Text-only slide. It continues Example 10.7, provides Examples 10.8 (Comparing Two Means) and 10.9 (Comparing Two Medians), and presents Theorem 10.10 relating the Wald test to confidence intervals. It concludes with a 'Warning!' about statistical vs. scientific significance.

---
