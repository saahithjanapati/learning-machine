# canvas-01-03-13645713-Solutions.practice.final.exam

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-01-03-13645713-Solutions.practice.final.exam.pdf`
Duplicate equivalents: `canvas-01-03-13645713-Solutions.practice.final.exam.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `MIXED`
Pages: 23

## Page 1
### Content
**36-700 – Probability and Mathematical Statistics**
*Practice Exam*

**Printed Name:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**Andrew ID:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**This exam is closed book/notes. I have neither given nor received assistance on this exam.**

**Signature:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

* Please legibly write all parts of your solutions inside the boxes. We will not read or grade things outside of boxes.
* You will get a **bonus point** for writing your name at the top of each page.
* **Show all work for full credit.** You may leave your final answer in fractions, combination/permutation numbers, exponential functions, and $\Phi(\cdot)$, the CDF of standard normal. Integrals need to be simplified.
* You can find the official formula sheet and a table of distributions at the back of the exam. You can use the last page as scratch paper. Calculators are not allowed or needed.
* Clearly fill in the multiple choice bubbles with your desired answer: $\bigcirc \to \bullet$. Avoid writing these: $\bigcirc \times$, $\bigcirc \checkmark$, $\bigcirc /$. If you can't cleanly erase, then do your best to **clearly** indicate your final answer.

1

### Visual Description
Text-only slide.

---
## Page 2
### Content
**Part I: Include your solutions for full credit.**

1. Let $X_1, \dots, X_n \stackrel{iid}{\sim} F$ for some (continuous and strictly increasing) CDF $F$. Let $\hat{F}_n(x) = \frac{1}{n} \sum_{i=1}^n \mathbb{I}(X_i \le x)$. Prove $E[\hat{F}_n(x)]$ is an unbiased estimator of $F(x)$ for each $x$. Then use Hoeffding's inequality (include a justification) to show that, for any $t > 0$,
$$\mathbb{P}(|\hat{F}_n(x) - F(x)| > t) \to 0, \text{ as } n \to \infty$$

> **Solution:** Observe that $E[\hat{F}_n(x)] = E[\mathbb{I}(X_i \le x)] = P(X_i \le x) = F(x)$. Moreover, $\hat{F}_n(x) \in [0, 1]$. Thus we may apply Hoeffding's inequality:
> $$\mathbb{P}(|\hat{F}_n(x) - F(x)| > t) \le 2 \cdot \exp\left(-\frac{2n^2t^2}{n}\right) = 2 \exp(-2nt^2) \to 0.$$
>
> Note: There is a typo in this problem, we meant to write 'Prove $\hat{F}_n(x)$ is an unbiased estimator of $F(x)$ for each $x$.' We pointed out this typo during the exam.

2

### Visual Description
Text-only slide.

---
## Page 3
### Content
2. Let $X \sim \text{Uniform}(0, 1)$. Let $0 < a < b < 1$. Let
$$Y = \begin{cases} 1 & \text{if } 0 < X < b \\ 0 & \text{otherwise,} \end{cases} \quad Z = \begin{cases} 1 & \text{if } a < X < 1 \\ 0 & \text{otherwise.} \end{cases}$$

(a) Calculate the joint distribution of $Y$ and $Z$.

> **Solution:** From the definition of $Y$ and $Z$, we have the following joint distribution table:
>
> | $\mathbb{P}(Y = y, Z = z)$ | $Z = 0$ | $Z = 1$ |
> | :--- | :--- | :--- |
> | $Y = 0$ | $0$ | $\mathbb{P}(X \ge b)$ |
> | $Y = 1$ | $\mathbb{P}(0 < X \le a)$ | $\mathbb{P}(a < X < b)$ |
>
> By using that $X \sim U[0, 1]$, we get the following results:
>
> | $\mathbb{P}(Y = y, Z = z)$ | $Z = 0$ | $Z = 1$ |
> | :--- | :--- | :--- |
> | $Y = 0$ | $0$ | $1 - b$ |
> | $Y = 1$ | $a$ | $b - a$ |

(b) Are $Y$ and $Z$ independent? Why/Why not?

> **Solution:** We can compute the conditional distribution of $Y$ given $Z$ from
> $$\mathbb{P}(Y = y|Z = z) = \frac{\mathbb{P}(Y = y, Z = z)}{\mathbb{P}(Z = z)}.$$
>
> | $\mathbb{P}(Y = y|Z = z)$ | $Z = 0$ | $Z = 1$ |
> | :--- | :--- | :--- |
> | $Y = 0$ | $0$ | $\frac{1-b}{1-a}$ |
> | $Y = 1$ | $1$ | $\frac{b-a}{1-a}$ |
>
> Hence $Y$ and $Z$ are not independent, since $\mathbb{P}(Y = 0|Z = 0) = 0$ while $\mathbb{P}(Y = 0) = 1 - b \neq 0$.

3

### Visual Description
The page contains two solution boxes, each featuring a mathematical table representing joint and conditional probability distributions.

---
## Page 4
### Content
(c) Find $\mathbb{E}(Z|Y)$.

> **Solution:**
> $\mathbb{E}(Z|Y = 0) = 0 \cdot \mathbb{P}(Z = 0|Y = 0) + 1 \cdot \mathbb{P}(Z = 1|Y = 0)$
> $= \mathbb{P}(Z = 1|Y = 0) = \frac{\mathbb{P}(Y = 0, Z = 1)}{\mathbb{P}(Y = 0)} = \frac{1 - b}{1 - b} = 1.$
>
> $\mathbb{E}(Z|Y = 1) = 0 \cdot \mathbb{P}(Z = 0|Y = 1) + 1 \cdot \mathbb{P}(Z = 1|Y = 1)$
> $= \mathbb{P}(Z = 1|Y = 1) = \frac{\mathbb{P}(Y = 1, Z = 1)}{\mathbb{P}(Y = 1)} = \frac{b - a}{b}.$
>
> We can rewrite this in multiple equivalent ways, including:
> $$\mathbb{E}(Z|Y) = \begin{cases} 1 & \text{if } Y = 0 \\ \frac{b-a}{b} & \text{if } Y = 1 \end{cases} = \left(\frac{b - a}{b}\right)^Y = (1 - Y) + \frac{b - a}{b} \cdot Y.$$

(d) Find $\text{Var}(Z|Y)$

> **Solution:** Since $Z^2 = Z$, we clearly have $\mathbb{E}(Z^2|Y) = \mathbb{E}(Z|Y)$. Hence
> $\text{Var}(Z|Y) = \mathbb{E}(Z^2|Y) - [\mathbb{E}(Z|Y)]^2$
> $= \mathbb{E}(Z|Y) - [\mathbb{E}(Z|Y)]^2$
> $= \mathbb{E}(Z|Y) [1 - \mathbb{E}(Z|Y)]$
> $= \left((1 - Y) + \frac{b - a}{b} \cdot Y\right) \cdot \left(Y - \frac{b - a}{b} Y\right)$
> $= \left(1 - \frac{a}{b} \cdot Y\right) \cdot \frac{a}{b} \cdot Y.$
>
> More explicitly, $\text{Var}(Z|Y = 0) = 0$, and $\text{Var}(Z|Y = 1) = \left(1 - \frac{a}{b}\right) \cdot \frac{a}{b}$.
> [Note to double check this]

4

### Visual Description
Text-only slide.

---
## Page 5
### Content
3. Let $X_1, \dots, X_n \stackrel{iid}{\sim} \text{Uniform}(0, 1)$. Let $Y = \min(X_1, \dots, X_n)$.

(a) Find the CDF of $Y$.

> **Solution:** $Y$ is supported on $[0,1]$. For $y \in [0, 1]$ we have
> $F_Y(y) = \mathbb{P}(Y \le y)$
> $= 1 - \mathbb{P}(Y > y)$
> $= 1 - \mathbb{P}(X_1 > y, X_2 > y, \dots, X_n > y)$
> $= 1 - (1 - y)^n$
> and $F_Y(y) = 0$ if $y < 0$, $F_Y(y) = 1$ if $y > 1$.

(b) Let $Y_n = nY$. Find the CDF of $Y_n$ (remember to state the support).

> **Solution:** $Y_n$ is supported on $[0, n]$. For $y \in [0, n]$ we have
> $F_{Y_n}(y) = \mathbb{P}(Y_n \le y) = \mathbb{P}(nY \le y)$
> $= \mathbb{P}(Y \le y/n) = F_Y(y/n) = 1 - (1 - y/n)^n$
> and $F_{Y_n}(y) = 0$ if $y < 0$, $F_{Y_n}(y) = 1$ if $y > n$.

5

### Visual Description
Text-only slide.

---
## Page 6
### Content
(c) Find the limit of $Y_n$ as $n \to \infty$ and clearly state the mode of convergence (“$\xrightarrow{P}$” or “$\rightsquigarrow$”?).

> **Solution:** For arbitrary $y \ge 0$
> $$\lim_{n \to \infty} F_{Y_n}(y) = \lim_{n \to \infty} [1 - (1 - y/n)^n] = 1 - e^{-y}$$
> and $F_{Y_n}(y) = 0$ for all $n$ and all $y < 0$.
> The function $F(y) = (1 - e^{-y})\mathbf{1}(y \ge 0)$ is a CDF (continuous, non-decreasing, $F(-\infty) = 0, F(\infty) = 1$). Therefore, $Y_n$ converges in distribution to a random variable with CDF $F$.

6

### Visual Description
Text-only slide.

---
## Page 7
### Content
4. Suppose that $X_1, \dots, X_n \stackrel{iid}{\sim} N(\theta, 1)$, Hence, the density is
$$p_\theta(x) = \frac{1}{\sqrt{2\pi}} e^{-(x-\theta)^2/2}.$$

(a) Find the MLE.

> **Solution:**
> $L(\theta|x_1, x_2, \dots, x_n) = \prod_{i=1}^n p_\theta(x_i)$
> $= \prod_{i=1}^n \frac{1}{\sqrt{2\pi}} \exp\left(-\frac{1}{2}(x_i - \theta)^2\right)$
> $= (2\pi)^{-n/2} \exp\left(-\frac{1}{2} \sum_{i=1}^n (x_i - \theta)^2\right)$
> $\implies l(\theta|x_1, x_2, \dots, x_n) = -\frac{n}{2} \log(2\pi) - \frac{1}{2} \sum_{i=1}^n (x_i - \theta)^2$
> $\implies \frac{\partial l(\theta|x_1, x_2, \dots, x_n)}{\partial \theta} = \sum_{i=1}^n (x_i - \theta) = \sum_{i=1}^n x_i - n\theta$
>
> Setting this to 0 we have that
> $n\theta = \sum_{i=1}^n x_i \implies \hat{\theta} = \frac{\sum_{i=1}^n x_i}{n}.$
>
> Differentiating the log-likelihood, we have that
> $\frac{\partial^2 l(\theta|x_1, x_2, \dots, x_n)}{\partial \theta^2} = -n < 0, \quad \forall \theta \in \mathbb{R}$
>
> So $\hat{\theta}_{MLE} = \bar{x}_n$.

7

### Visual Description
Text-only slide.

---
## Page 8
### Content
(b) Find the Fisher information. [Hint: Reuse your calculations from part (a)]

> **Solution:** Observe that
> $\frac{\partial l(\theta|x_1, x_2, \dots, x_n)}{\partial \theta} = \sum_{i=1}^n x_i - n\theta,$
> $\implies \frac{\partial^2 l(\theta|x_1, x_2, \dots, x_n)}{\partial \theta^2} = -n.$
>
> Hence
> $\mathcal{I}_n(\theta) = -\mathbb{E}\left(\frac{\partial^2 l}{\partial \theta^2}\right) = -\mathbb{E}(-n) = n.$

(c) Construct an asymptotic $1 - \alpha$ confidence interval for $\theta$.

> **Solution:** (c) By the asymptotic normality of MLE estimators we have that $\hat{\theta}_{MLE} \approx N(\theta, \mathcal{I}_n^{-1}) = N(\theta, 1/n)$ (for large $n$). In this case we then have
> $$\sqrt{n}(\hat{\theta}_{MLE} - \theta) \xrightarrow{d} N(0, 1).$$
> Note that we can directly get this result from the CLT here. Hence, the $1 - \alpha$ asymptotic confidence interval for $\theta$ is:
> $$\theta \in \left[\hat{\theta}_{MLE} - \frac{1}{\sqrt{n}} z_{\alpha/2}, \hat{\theta}_{MLE} + \frac{1}{\sqrt{n}} z_{\alpha/2
## Page 9
### Content
(d) Construct an asymptotic $1 - \alpha$ confidence interval for $e^\theta$.

**Solution:** Let $p := \exp(\theta) = g(\theta)$. Since $g$ is a continuous function of $\theta$ $\forall \theta \in \mathbb{R}$ by the equivariance principle of the MLE we have that:
$$\hat{p}_{MLE} = \exp(\hat{\theta}_{MLE}) = \exp(\bar{X})$$
By the Delta method we have for large $n$
$$\hat{\theta}_{MLE} \approx \mathcal{N}(\theta, \frac{1}{n})$$
$$\implies \hat{p}_{MLE} = \exp(\hat{\theta}_{MLE}) \approx \mathcal{N}(\exp(\theta), \frac{\theta^2}{n}(g'(\theta)^2)) = \mathcal{N}\left(\exp(\theta), \frac{\exp(2\theta)}{n}\right)$$
Hence, the $1 - \alpha$ asymptotic confidence interval for $\log(\theta)$ is:
$$\exp(\theta) \in \left[ \exp(\hat{\theta}_{MLE}) - z_{\alpha/2} \frac{\exp(\hat{\theta})}{\sqrt{n}}, \exp(\hat{\theta}_{MLE}) + z_{\alpha/2} \frac{\exp(\hat{\theta})}{\sqrt{n}} \right]$$

(e) Find the PDF of $Y = e^X$ where $X \sim N(\theta, 1)$. Make sure to state the support.

**Solution:** Let $F_Y$ be the CDF of $Y$ and $F_X$ the CDF of $X$. Let $f_Y$ be the PDF of $Y$ and recall we wrote $p_\theta$ for the PDF of $X$. Observe that $Y$ takes values on $(0, \infty)$, hence for any $y \le 0, F_Y(y) = 0$. Pick any $y > 0$. Then
$$F_Y(y) = P(Y \le y) = P(e^X \le y) = P(X \le \log y) = F_X(\log y).$$
Differentiating and applying the chain rule,
$$f_Y(y) = \frac{d}{dy} F_Y(y) = p_\theta(\log y) \cdot \frac{1}{y} = \frac{1}{\sqrt{2\pi}} \cdot \exp\left( -\frac{(\log y - \theta)^2}{2} \right) \cdot \frac{1}{y}.$$
Hence $f_Y(y) = 0$ for all $y \le 0$ and $f_Y(y) = \frac{1}{\sqrt{2\pi}} \cdot \exp\left( -\frac{(\log y - \theta)^2}{2} \right) \cdot \frac{1}{y}$ for all $y > 0$.
Note: this is **not** a Gaussian random variable! And it cannot be for a simple reason: *any* Gaussian $X$ has non-zero probability mass on $(-\infty, 0)$, but $e^X$ has 0 probability mass on this set.

### Visual Description
Text-only slide. The solutions are contained within two separate blue-bordered boxes.

---
## Page 10
### Content
5. Let $X_1, X_2, \dots, X_n$ be I.I.D random variables such that $\mathbb{E}(X_i) = \mu$ and $\text{Var}(X_i) = \sigma^2$. Assume that $\mu$ and $\sigma$ are finite. First **state**, and then **prove** the weak law of large numbers (WLLN).

**Solution:** The WLLN states that $n^{-1} \sum_{i=1}^n X_i$ converges in probability to $\mathbb{E}[X] = \mu$.
**Proof:** Pick $\epsilon > 0$. Then by Chebyshev's Inequality,
$$0 \le \mathbb{P}\left( \left| n^{-1} \sum_{i=1}^n X_i - \mu \right| > \epsilon \right) \le \frac{\text{Var}(n^{-1} \sum_{i=1}^n X_i)}{\epsilon^2} = \frac{\sigma^2}{n\epsilon^2}.$$
Since $\lim_{n \to \infty} \frac{\sigma^2}{n\epsilon^2} = 0$, it follows by the Squeeze Theorem that
$$\lim_{n \to \infty} \mathbb{P}\left( \left| n^{-1} \sum_{i=1}^n X_i - \mu \right| > \epsilon \right) = 0.$$

### Visual Description
Text-only slide. The solution and proof are contained within a blue-bordered box.

---
## Page 11
### Content
6. Let $X_1, \dots, X_n \overset{iid}{\sim} \text{Exp}(\beta)$, and we want to test the hypotheses:
$$H_0 : \beta = 4 \quad \text{vs.} \quad H_1 : \beta = 7.$$
(a) Write down the Neyman-Pearson test statistic. Specify the critical value: you do not need to compute the critical value precisely but you should give an expression for it or describe clearly how you might compute it. [Hint: If $X_i \sim \text{Exp}(\beta)$ are independent, then $\sum_{i=1}^n X_i \sim \text{Gamma}(n, \beta)$.]

**Solution:**
Recall the PDF is $f_\beta(x) = \frac{1}{\beta} \exp(-x/\beta)$. Let $L(\beta|X_1, \dots, X_n)$ denote the likelihood, so that
$$L(\beta|X_1, \dots, X_n) = \prod_{i=1}^n f_\beta(X_i) = \beta^{-n} \cdot \exp\left( -\beta^{-1} \sum_i X_i \right).$$
Then the Neyman-Pearson test statistic $\Lambda$ is
$$\Lambda(X_1, \dots, X_n) = \frac{L(\beta = 4|X_1, \dots, X_n)}{L(\beta = 7|X_1, \dots, X_n)} = \frac{4^{-n} \exp(-4^{-1} \sum_i X_i)}{7^{-n} \exp(-7^{-1} \sum_i X_i)}$$
$$= \left(\frac{7}{4}\right)^n \cdot \exp\left( -(4^{-1} - 7^{-1}) \sum_i X_i \right)$$
$$= \left(\frac{7}{4}\right)^n \cdot \exp\left( -\frac{11}{28} \sum_i X_i \right)$$
We reject when $\lambda \le c$ for some $c$ iff $n \log(7/4) - \frac{11}{28} \sum_i X_i \le \log c$ iff
$$\sum_i X_i \ge \frac{28}{11} [n \log(7/4) - \log c].$$
Under the null, $\sum_i X_i \sim \text{Gamma}(n, 4)$, so to obtain a size $\alpha$ test, we choose $c$ so that
$$\frac{28}{11} [n \log(7/4) - \log c] = g_\alpha,$$
where $g_\alpha$ is the number such that
$$P(\text{Gamma}(n, 4) > g_\alpha) = \alpha.$$

### Visual Description
Text-only slide. The solution is contained within a blue-bordered box.

---
## Page 12
### Content
(b) Compute the MLE and the Fisher Information for the Exponential distribution, and use this to describe the Wald test for the hypotheses $H_0 : \beta = 4$ versus $H_1 : \beta \neq 4$.

**Solution:** [We want the students to demonstrate a correct understanding of the Wald test statistic, a null distribution/critical values, and asymptotic normality]
We compute
$$L(\beta|X_1, \dots, X_n) = \prod_{i=1}^n f_\beta(X_i) = \beta^{-n} \cdot \exp\left( -\beta^{-1} \sum_i X_i \right)$$
$$\implies \log L(\beta|X_1, \dots, X_n) = -n \log \beta - \beta^{-1} \sum_i X_i$$
$$\implies \frac{\partial \log L(\beta|X_1, \dots, X_n)}{\partial \beta} = -\frac{n}{\beta} + \frac{\sum_i X_i}{\beta^2}.$$
Setting this equal to 0, we have $\frac{\sum_i X_i}{\beta^2} = \frac{n}{\beta}$, so $\beta = n^{-1} \sum_i X_i$. The MLE is therefore $\hat{\beta}_{MLE} = \bar{X}_n$.
Taking one more derivative,
$$\frac{\partial^2 \log L(\beta|X_1, \dots, X_n)}{\partial \beta^2} = \frac{n}{\beta^2} - 2 \frac{\sum_i X_i}{\beta^3}.$$
This is $< 0$ if and only if $\frac{n}{\beta^2} < 2 \cdot \frac{\sum_i X_i}{\beta^3}$ iff $\beta < 2\bar{X}_n$. But clearly $\hat{\beta}_{MLE} = \bar{X}_n < 2\bar{X}_n$, so indeed, this is the MLE.
Then taking an expectation of the second derivative, we obtain the Fisher information
$$I_n(\beta) = -\mathbb{E}\left[ \frac{n}{\beta^2} - 2 \frac{\sum_i X_i}{\beta^3} \right] = -\left[ \frac{n}{\beta^2} - \frac{2n\beta}{\beta^3} \right] = \frac{n}{\beta^2}.$$
The Wald Test statistic is defined by
$$T(X_1, \dots, X_n) = \frac{\hat{\beta}_{MLE} - 4}{\sqrt{1/I_n(\hat{\beta})}} = \frac{\sqrt{n}(\hat{\beta}_{MLE} - 4)}{\hat{\beta}_{MLE}} = \frac{\sqrt{n}(\bar{X}_n - 4)}{\bar{X}_n}.$$
We reject when $T(X_1, \dots, X_n) > z_{\alpha/2}$ for a two-sided, size $\alpha$ test, since $T(X_1, \dots, X_n)$ converges in distribution to $N(0, 1)$ under the null.

### Visual Description
Text-only slide. The solution is contained within a blue-bordered box.

---
## Page 13
### Content
7. For a histogram density estimator with bin width $h$, we define the mean integrated squared error as
$$\text{MISE}_h = \int b^2(x) dx + \int v(x) dx$$
where the bias at $x$ is $b_h(x) = \mathbb{E}(\hat{f}(x)) - f(x)$ and the variance at $x$ is $v_h(x) = \text{Var}(\hat{f}(x))$.
(a) Illustrate schematically how the (integrated) bias squared, (integrated) variance, and the MISE depend on $h$ for a fixed, finite sample size $n$; i.e. draw 3 curves to show how these quantities depend on $h$. Which value of $h$ in your plot represents the optimal smoothing?

**Solution:**
![Schematic plot of bias squared, variance, and risk (MISE) vs bin width h. The variance curve (dashed) decreases as h increases. The bias squared curve (dotted) increases as h increases. The risk curve (solid) is U-shaped, representing the sum of the other two. The minimum of the risk curve is marked as "optimal smoothing".]

### Visual Description
The slide contains a schematic graph in a blue-bordered box. The horizontal axis is labeled $h$ and has three regions marked: "less smoothing" (left), "optimal smoothing" (center), and "more smoothing" (right). The vertical axis is unlabeled but represents error magnitude. 
- A dashed blue curve labeled "**variance**" starts high on the left and decreases towards the right.
- A dotted blue curve labeled "**bias$^2$**" starts low on the left and increases towards the right.
- A solid blue curve labeled "**risk**" is U-shaped, representing the sum of the variance and bias squared. It has a minimum point marked with a black dot, which aligns vertically with the intersection of the variance and bias squared curves (also marked with a black dot) and the "optimal smoothing" label on the x-axis.

---
## Page 14
### Content
(b) How do these results change if we consider a **smaller** sample size $m < n$? (Specifically, how do the 3 curves shift left-right and up-down? What can you say about the optimal choice of $h$?)

**Solution:** The bias is unaffected by the sample size, so its curve does not shift. The variance *increases* when the sample size is *smaller*. Thus, the risk curve will shift up for any $h$.
The optimal $h$ should be slightly higher (recall also you derived that the optimal bandwidth $h^* = \mathcal{O}(n^{-1/3})$, ignoring constants).

### Visual Description
Text-only slide. The solution is contained within a blue-bordered box.

---
## Page 15
### Content
### Part II: Short answers – no derivations needed
8. I am estimating the mean $\lambda$ for $X_1, \dots, X_n \sim \text{Poisson}(\lambda)$. I take the ‘silly’ estimator $\hat{\lambda} = 5$. The variance of this estimator is 0, while the Cramer-Rao Lower Bound (CRLB) on the variance is $\lambda/n$ (as derived in your HW). Did I just disprove the CRLB and overturn decades of statistical theory? Give the precise reason why not.

**Solution:** CRLB requires the estimator to be unbiased in order to have the given lower bound. This estimator is clearly biased for any $\lambda \neq 5$.
The CRLB is not an asymptotic claim, so consistency is irrelevant. (For any $n$, I can generate an unbiased estimator that achieves the CRLB for that $n$ but is not consistent—for example, for any $n \ge 5$, take $T(X_1, \dots, X_n) = \frac{1}{5} \sum_{i=1}^5 X_i$. In other words, throw out all data after $X_5$.)

### Part III: Multiple Choice Questions. Choose one answer only – fill in the circle
**Fundamental Probability Theory**
In the following questions, we use the following notation: $\Omega$ to denote an arbitrary sample space (unless otherwise specified), $\mathcal{E}$ the set of all events, and $P$ our probability measure (or probability function).

9. A real-valued random variable is, in general:
$\bigcirc$ A mapping from our event space $\mathcal{E}$ to $\mathbb{R}$
$\bigcirc$ A mapping from our sample space $\Omega$ to the event space $\mathcal{E}$
$\bigcirc$ A mapping from $\mathbb{R} \to \mathbb{R}$
$\sqrt{}$ **A mapping from our sample space $\Omega$ to $\mathbb{R}$**

**Solution:** The event space is the set of subsets of the sample space and not the domain of a random variable by definition. Option 2 is wrong because the output of a real-valued RV then isn’t a real number but sets belonging to some space. Option 3 is false because the sample space doesn’t need to be $\mathbb{R}$.
For a particular $\omega \in \Omega$ and a random variable $X$ defined on $\Omega$, $X(\omega)$ is the realized valued of $X$. An example of an event would be $\{X \in [3, 5]\}$, which is a shorthand for $\{\omega \in \Omega : X(\omega) \in [3, 5]\}$.

10. Suppose you have two events $A$ and $B$ such that $P(A) \le P(B)$. **True or False:** The event $A$ must be a subset of the event $B$.

### Visual Description
Text-only slide. Solutions are contained within blue-bordered boxes. Multiple-choice options use circles, with a checkmark indicating the correct answer for question 9.

---
## Page 16
### Content
$\bigcirc$ True
$\sqrt{}$ **False**

**Solution:** Let $X \sim N(0, 1)$. Set $A = \{X = 0\}$ and $B = \{X = 1\}$. Then $P(A) = 0 \le 0 = P(B)$, but clearly $A$ and $B$ are disjoint.

11. Which *one* of the following six options correctly describes how different stochastic convergence properties generally relate to each other? We write q.m. for convergence in quadratic mean, $P$ for convergence in probability, and $d$ for convergence in distribution.
Note: $A \implies B$ means that if $A$ is true, then $B$ is true.
$\sqrt{}$ **q.m. $\implies P \implies d$**
$\bigcirc$ $P \implies d \implies$ q.m.
$\bigcirc$ $P \implies$ q.m. $\implies d$.
$\bigcirc$ $d \implies P \implies$ q.m.
$\bigcirc$ We **only** have $P \implies d$. But q.m. does **not** imply either of the other two.
$\bigcirc$ We **only** have $d \implies P$. But q.m. does **not** imply either of the other two.

**Solution:** See Theorem 5.4 and Figure 5.2 of Wasserman.

12. Suppose $W$ is a Poisson($\lambda$) random variable. Let $Y|W \sim N(W, 5)$, i.e., given the outcome of $W$, $Y$ follows a Gaussian distribution with expected value $W$ and variance 5. Then $\mathbb{E}[Y|W]$ is:
$\bigcirc$ A continuous random variable with an associated PDF
$\bigcirc$ A discrete random variable that may take only finitely many possible values
$\sqrt{}$ **A discrete random variable that can take an infinite number of distinct values**
$\bigcirc$ Neither

**Solution:** By definition of $Y|W$ as a Gaussian with mean $W$, we have $\mathbb{E}[Y|W] = W$, and $W$ is a discrete random variable that has positive probability mass at every non-negative integer.

### Visual Description
Text-only slide. Solutions are contained within blue-bordered boxes. Multiple-choice options use circles, with checkmarks indicating the correct answers.

---
## Page 17
### Content
**Parametric Estimation**

13. Suppose you have an estimator $\hat{\theta}$ for a parameter $\theta \in \Theta$ that takes in data $X_1, \dots, X_n \sim \mathcal{P}_\theta$. Assume $\hat{\theta}$ is well-defined for any sample size $n \in \mathbb{N}$. Consider the two claims and decide on their correctness using one of the subsequent 4 options.
1. If $\hat{\theta}$ is a consistent estimator of any $\theta \in \Theta$, then it is unbiased for any sample size and $\theta \in \Theta$.
2. If $\hat{\theta}$ is unbiased for any $\theta \in \Theta$ and for any sample size, then it is a consistent estimator.

$\bigcirc$ Both claims are true.
$\bigcirc$ Claim 1 is true; claim 2 is false.
$\bigcirc$ Claim 1 is false; claim 2 is true.
$\checkmark$ **Both claims are false.**

> **Solution:** The estimator $T(X_1, \dots, X_n) = \frac{1}{n-1} \bar{X}_n$ is a consistent estimator of the population mean but is biased. The estimator $T(X_1, \dots, X_n) = X_1$, regardless of how many observations you have, is unbiased but not consistent.

14. Suppose you observe $X_1, \dots, X_n$ from some parametric model. You are told the $X_i$ are real-valued, i.e., their output is one dimensional. **True/False:** The Fisher information must be a scalar, not a matrix with strictly more than 1 row or column.
$\bigcirc$ True
$\checkmark$ **False**

> **Solution:** The emphasis on ‘one-dimensional’ regarding the range on the $X_i$ is a red herring. For example, the univariate Gaussian $N(\mu, \sigma^2)$ with unknown $\mu$ and unknown $\sigma^2$ is a 2-parameter model for a one-dimensional random variable, hence we need a 2 by 2 matrix for the Fisher information.

15. Suppose your data is **not** independent. **True/False:** The Fisher information does **not**, in general, satisfy $I_n(\theta) = nI(\theta)$, where $\theta$ is the parameter of interest.
$\checkmark$ **True**
$\bigcirc$ False

> **Solution:** Using the expectation of a square formulation, we need independence to apply linearity of variance properties. Using the expectation of a second derivative formulation, we need independence to factor a joint PDF into a product and split up the second derivatives into $n$ equal pieces.

17

### Visual Description
Text-based slide containing three multiple-choice/true-false questions (13, 14, 15) about parametric estimation. Each question is followed by a blue-bordered box containing the solution and explanation.

---
## Page 18
### Content
16. Consider estimating a parameter $\theta$ given some data $X_1, \dots, X_n \sim \mathcal{P}_\theta$. You come up with two estimators $\hat{\theta}$ and $\tilde{\theta}$. You somehow have access $E_\theta(\hat{\theta} - \theta)^2$ and $E_\theta(\tilde{\theta} - \theta)^2$. **True or False:** If $\hat{\theta}$ is biased for a given $\theta$ while $\tilde{\theta}$ is unbiased for that $\theta$, then $E_\theta(\hat{\theta} - \theta)^2 \ge E_\theta(\tilde{\theta} - \theta)^2$ is guaranteed.
$\bigcirc$ True
$\checkmark$ **False**

> **Solution:** The MSE has a bias and a variance component. The variance of $\tilde{\theta}$ can overcome the contribution from the bias.

17. **True or False:** The Cramer-Rao Lower Bound (CRLB) on the variance only holds asymptotically, and not for small sample sizes.
$\bigcirc$ True
$\checkmark$ **False**

> **Solution:** The CRLB holds for every $n$.

**Decision Theory**

18. **True/False:** Given a loss function $L$, a fixed parameter $\theta$, an estimator $\hat{\theta}$, and data $X_1, \dots, X_n$ drawn from some $\mathcal{P}_\theta$, the quantity $L(\hat{\theta}(X_1, \dots, X_n), \theta)$ is, in general, a random variable. *If applicable, assume you have evaluated any integrals or expected values.*
$\checkmark$ **True**
$\bigcirc$ False

> **Solution:** This is not the risk, and we have not yet integrated out the randomness. The ‘if applicable’ note is therefore irrelevant. Each draw of data $X_1, \dots, X_n$ leads to a different value of the loss function evaluated at $\hat{\theta}(X_1, \dots, X_n)$ and $\theta$.

19. Given a prior $\pi(\theta)$, a PDF $f_\theta(\cdot)$ when $\theta$ is the truth, a loss function $L$, an estimator $\hat{\theta}$, frequentist risk function $R$, which one of the following defines the Bayes risk of $\hat{\theta}$?
$\bigcirc$ $E_\theta[L(\hat{\theta}, \theta)\pi(\theta)]$
$\bigcirc$ $\int L(\hat{\theta}, \theta)\pi(\theta) d\theta$
$\bigcirc$ $\int L(\hat{\theta}, \theta)\pi(\theta)f_\theta(x^n) dx$

18

### Visual Description
Text-based slide containing questions 16 and 17 under Parametric Estimation, and starting the Decision Theory section with questions 18 and 19. Blue-bordered solution boxes follow questions 16, 17, and 18.

---
## Page 19
### Content
$\checkmark$ $\int R(\hat{\theta}, \theta)\pi(\theta) d\theta$
$\bigcirc$ $\int R(\hat{\theta}, \theta)\pi(\theta)f_\theta(x^n) dx$

> **Solution:** First option does not integrate out the $\theta$. If you put an integral in $\theta$ in front, it is actually correct, noting $E_\theta$ integrates out the randomness in $X \sim f_\theta$ for a fixed $\theta$. The second option integrates the loss, not the risk. This is wrong since the loss is still a random quantity (see previous question)–Bayes risk should be a deterministic property about an estimator. The third option is the same as the first option, and could be correct with another integral in $\theta$ added. The fifth option does not integrate out $\theta$, and the PDF is irrelevant at this point.

20. Given a prior $\pi(\theta)$ over some parameter space $\Theta$ and data $X_1, \dots, X_n \sim \mathcal{P}_\theta$ which take values in $\mathcal{X}$, you compute the posterior distribution. The posterior distribution is a distribution over:
$\bigcirc$ $\mathcal{X}$
$\checkmark$ $\Theta$

> **Solution:** A posterior updates our belief about $\theta$ from the prior.

21. Which is the most accurate description of a minimax optimal estimator, given a parameter space $\Theta$? By best case risk, we mean lowest risk, and by worst case risk, we mean highest risk.
$\bigcirc$ The estimator whose best case risk across all $\theta \in \Theta$ is maximal
$\checkmark$ **The estimator whose worst case risk across all $\theta \in \Theta$ is minimal**
$\bigcirc$ The estimator whose best case risk across all $\theta \in \Theta$ is minimal
$\bigcirc$ The estimator whose worst case risk across all $\theta \in \Theta$ is maximal

> **Solution:** This is just a rewriting of $\min_{\hat{\theta}} \max_{\theta \in \Theta} R(\hat{\theta}, \theta)$. ‘Worst case risk across all $\theta \in \Theta$’ corresponds to writing $\max_{\theta \in \Theta} R(\hat{\theta}, \theta)$, and then we pick the estimator that minimizes this quantity.

**Hypothesis Testing**

22. Suppose you have a null parameter space $\Theta_0$ and an alternative parameter space $\Theta_1$, with $\Theta_0 \cap \Theta_1 = \emptyset$. You propose some testing procedure whose power function you can calculate. Which pair of conditions on the power function $\beta(\theta)$ is most desirable, if you want to minimize both Type I and Type II error. *Note: sup and inf are the analogues of max and min, respectively.*

19

### Visual Description
Text-based slide continuing question 19 and presenting questions 20 and 21 under Decision Theory. It then starts the Hypothesis Testing section with question 22. Blue-bordered solution boxes follow questions 19, 20, and 21.

---
## Page 20
### Content
$\bigcirc$ $\sup_{\theta \in \Theta_0} \beta(\theta) = 0.01$ and $\sup_{\theta \in \Theta_1} \beta(\theta) = 0.99$
$\checkmark$ $\sup_{\theta \in \Theta_0} \beta(\theta) = 0.01$ and $\inf_{\theta \in \Theta_1} \beta(\theta) = 0.99$
$\bigcirc$ $\inf_{\theta \in \Theta_0} \beta(\theta) = 0.01$ and $\sup_{\theta \in \Theta_1} \beta(\theta) = 0.99$
$\bigcirc$ $\inf_{\theta \in \Theta_0} \beta(\theta) = 0.01$ and $\inf_{\theta \in \Theta_1} \beta(\theta) = 0.99$

> **Solution:** To control the Type I error, we want to keep probability of rejection low for all $\theta$ under the null. Making $\sup_{\theta \in \Theta_0} \beta(\theta)$ as low as possible guarantees this. The infimum condition only guarantees there is one point in the null with low rejection probability, e.g., you could have $\beta(0) = 0$ (good) but $\beta(1/2) = 1$ (bad, rejection with 100% probability) in a scenario with $\Theta_0 = \{0, 1/2\}$. On the other hand, under the alternative, we want the probability of rejection high. The answer $\sup_{\theta \in \Theta_1} \beta(\theta) = 0.99$ only tells it is high for some $\theta$ in the alternative, but we want it to be high for all $\theta$ in the alternative, hence we force the infimum to be high.

23. Consider testing $H_0 : \theta = 0$ vs $H_1 : \theta = 1$ using a *one-sided* Wald test statistic for a Gaussian model $X_1, \dots, X_n \sim N(\theta, 1)$. How does the power function $\beta(1)$ compare to $\beta(2)$?
$\checkmark$ **$\beta(1)$ is strictly smaller than $\beta(2)$**
$\bigcirc$ $\beta(1)$ is strictly larger than $\beta(2)$
$\bigcirc$ $\beta(1) = \beta(2)$
$\bigcirc$ Not enough information to answer

> **Solution:** To see the logic, pretend we swapped out 2 with 1000. If we draw data from a $N(1000, 1)$ model, would you be more likely to reject $H_0 : \theta = 0$ than if you drew data from a $N(1, 1)$ model? Yes, as your Wald Test statistic will be huge!

24. Consider testing $H_0 : \theta = 0$ vs $H_1 : \theta = 1$ using a *one-sided* Wald test statistic for a Gaussian model $X_1, \dots, X_n \sim N(\theta, 1)$. You are interested in testing at a 5% level of significance. Assume the truth is $\theta = 0$. You decide to repeatedly perform this procedure 100 times, i.e., drawing 100 different datasets, each of size $n$, and then obtaining 100 different p-values. What is the expected number of times you expect to see a p-value under 0.25?
$\bigcirc$ 0
$\bigcirc$ 5
$\checkmark$ **25**
$\bigcirc$ Not enough information to answer

20

### Visual Description
Text-based slide continuing question 22 and presenting questions 23 and 24 under Hypothesis Testing. Blue-bordered solution boxes follow questions 22 and 23.

---
## Page 21
### Content
> **Solution:** The null is actually true, so the p-value is uniform, so has a 25% chance of being under 0.25. 100 tests mean 25 of them will be under 0.25, on average. The 5% level of significance is irrelevant—we didn’t ask how often you would reject the null!

25. Suppose you are testing a $H_0 : \theta = \theta_0$ versus $H_1 : \theta = \theta_1$, where $\theta_0 \neq \theta_1$. You are given data $X^n = (X_1, \dots, X_n)$. You consider the following test statistic: $\psi = \frac{L(\theta_1; X^n)}{L(\theta_0; X^n)}$, where $L$ is the likelihood function. Assume this ratio $\psi$ is well-defined. Under which of the following scenarios would you be more likely to reject the null?
$\bigcirc$ $\psi$ is very small
$\checkmark$ **$\psi$ is very large**

> **Solution:** We reject the null if $L(\theta_0; X^n)$ is small relative to $L(\theta_1; X^n)$. So we want the given ratio to be large.

26. In the previous question, you decide to change your null hypothesis from $\theta = \theta_0$ to $\theta \in \Theta_0$, where $\Theta_0$ is a non-singleton subset of your parameter space $\Theta$ that contains $\theta_0$. However, $\theta_1$ does not belong to $\Theta_0$. You change your test statistic from $\psi = \frac{L(\theta_1; X^n)}{L(\theta_0; X^n)}$ to $\tilde{\psi} = \frac{L(\theta_1; X^n)}{\sup_{\theta \in \Theta_0} L(\theta; X^n)}$. How does $\tilde{\psi}$ compare to $\psi$ using the same data/model, assuming it is not equal for simplicity.
$\checkmark$ **$\tilde{\psi}$ is strictly smaller**
$\bigcirc$ $\tilde{\psi}$ is strictly larger
$\bigcirc$ $\tilde{\psi}$ could be either strictly smaller or strictly larger

> **Solution:** We are taking a supremum over a larger set, so if it is not equal, the denominator must be strictly larger. Hence the ratio is strictly smaller.

**Non-Parametric Density/Regression**

27. A non-parametric model means that:
$\bigcirc$ Your statistical procedures is guaranteed to perform poorly in higher dimensions
$\bigcirc$ You are not imposing any smoothness conditions on your models
$\bigcirc$ Your parameters of interest can take uncountably infinitely many values
$\checkmark$ **You cannot index your model with a finite dimensional vector**

21

### Visual Description
Text-based slide containing the solution to question 24, followed by questions 25 and 26 under Hypothesis Testing, and starting the Non-Parametric Density/Regression section with question 27. Blue-bordered solution boxes follow questions 24, 25, and 26.

---
## Page 22
### Content
$\bigcirc$ It is impossible to index your model whatsoever

> **Solution:** Statement 1 is an over-generalization. Statement 2 is wrong since, for example, you can assume the derivatives are bounded in absolute value. Statement 3 is false since even in the simplest parametric models, this is the case! For example, estimating a Bernoulli($p$) random variable for $p \in (0, 1)$. While $(0, 1)$ is an uncountably infinite set, it is one-dimensional. Similarly, estimating $(\mu, \sigma^2)$ for a univariate Gaussian is two-dimensional, but there are uncountably many pairs. Non-parametric models mean for any $k$, you cannot parametrize it with a vector in $\mathbb{R}^k$. That’s why statement 4 is true. But we can certainly index it, e.g., consider all continuous functions $f \in \mathcal{F}$, which is an infinite dimensional set. So statement 5 is false.

28. Suppose you are looking to estimate the density of some distribution, and you are told it is the equally weighted mixture of at most $K$ distinct Gaussian distributions, each with known variance 1 but distinct, unknown means. That is, for some $1 \le k \le K$, there are $k$ Gaussian distributions $N(\mu_i, 1)$ and each observation is uniformly and randomly chosen from one of the $k$ Gaussians. This is an example of a:
$\checkmark$ **parametric density estimation problem**
$\bigcirc$ non-parametric density estimation problem

> **Solution:** There are at most $K$ parameters here to estimate.

29. Parametric models in density estimation, when they are the correct model, tend to have mean integrated square errors that decay:
$\bigcirc$ Slower in $n$ relative to non-parametric models
$\checkmark$ **Faster in $n$ relative to non-parametric models**

> **Solution:** See page 309 of Wasserman, for instance.

30. Which of the following best describes a consequence of the curse of dimensionality, as a statistician (or your textbook) would use that term in the context of non-parametric theory?
$\bigcirc$ Your sample size $n$ is too large relative to your dimension $d$
$\checkmark$ **Your dimension $d$ is too large relative to your sample size $n$**
$\bigcirc$ Both $n$ and $d$ are too large, so it is difficult to process the data without high computational power

22

### Visual Description
Text-based slide continuing question 27 and presenting questions 28, 29, and 30 under Non-Parametric Density/Regression. Blue-bordered solution boxes follow questions 27, 28, and 29.

---
## Page 23
### Content
> **Solution:** Having too big of a sample size is a blessing, not a curse. It’s the dimension that poses a problem. The curse of dimensionality means that the risk is some function $f(n, d)$ that grows very quickly in $d$. For example, suppose $f(n, d) = 2^d/n$. To make the risk $\le C$, you would need $n \ge 2^d/C$. This quantity becomes astronomically large for relatively small number of dimensions. For a typical sample, your $n$ will be far too small relative to $d$, or put another way, $d$ is too large relative to $n$.
>
> Statement 3 is technically true in isolation, but it is not what we mean as statisticians.

23

### Visual Description
Text-only slide containing the blue-bordered solution box for question 30 and the page number 23 at the bottom.

---
