# canvas-09-05-13224313-annotated.slides_Chapter4.revisited.ineqs

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-09-05-13224313-annotated.slides_Chapter4.revisited.ineqs.pdf`
Duplicate equivalents: `canvas-09-05-13224313-annotated.slides_Chapter4.revisited.ineqs.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 6

## Page 1
### Content
**Pay attention to which mean and which distribution!**
**The (sample) mean of a large sample is close to the (population) mean of the data distribution.**

# CHAPTER 4 – Probability Inequalities Revisited

### The Weak Law of Large Numbers (WLLN) (Quick preview of convergence results)

Assume that $X_1, \dots, X_n$ are i.i.d with $\mu_X = \mathbb{E}(X_1)$ and $\sigma_X^2 = \text{Var}(X_1) < \infty$.
Then,
$$\forall \epsilon > 0, \quad \mathbb{P}(|\bar{X}_n - \mu_X| > \epsilon) \to 0$$
as $n \to \infty$.

The WLLN essentially says that the average of independent and identically distributed random variables “converges” to their expectation.

**Proof:** Apply Chebyshev’s inequality:
$$\mathbb{P}(|\bar{X}_n - \mu_X| \ge \epsilon) \le \frac{\sigma_Y^2}{\epsilon^2} = \frac{\sigma_X^2}{n\epsilon^2} \to 0$$
(where $\mu_Y = \mu_X$)

$\forall t \ge 0, \quad \mathbb{P}(|Y - \mu_Y| > t\sigma_Y) \le \frac{1}{t^2}$
Let $\epsilon = t\sigma_Y$ and rearrange the equation... ($t = \epsilon / \sigma_Y$)

**Do not confuse the distr of data $F_X$ with --- of the statistic**

*   **Sample Data:** $X_1, \dots, X_n \sim F_X$ (unknown data distr)
*   **RVs:**
    *   $\mu_X = \mathbb{E}[X_i]$
    *   $\sigma_X^2 = \text{V}[X_i]$
*   **Statistic:** $\bar{X}_n = \frac{1}{n} \sum_{i=1}^n X_i$
    *   "statistic" (function of data) R.V.
    *   "sampling distr" $\to$ distr of a statistic $F_{\bar{X}_n}$

### Visual Description
The slide is a mix of printed text and extensive hand-written annotations in blue and red ink on a grid background. Annotations emphasize the difference between sample data distributions and the sampling distribution of a statistic. A formula for the proof of WLLN using Chebyshev's inequality is handwritten in blue.

---

## Page 2
### Content
### Confidence Intervals (Quick preview)
Hoeffding’s inequality gives us a simple way to create a confidence interval for a binomial parameter $p$. Let $\hat{p} = n^{-1} \sum_i X_i$ be the fraction of tosses that are heads. By Hoeffding’s inequality,
$$\mathbb{P}(|\hat{p} - p| \ge u) \le 2 \exp(-2nu^2)$$
**Exercise: show this**

*Exercise:* Verify that Hoeffding’s equation can be written in this form (see next page)

Now let $\alpha = 2 \exp(-2nu^2) > 0$, or equivalently $u = \sqrt{\frac{1}{2n} \log(2/\alpha)}$.
Then
$$\mathbb{P}\left(|\hat{p} - p| \ge \sqrt{\frac{1}{2n} \log(2/\alpha)}\right) \le \alpha$$
or equivalently
$$\mathbb{P}\left(|\hat{p} - p| < \sqrt{\frac{1}{2n} \log(2/\alpha)}\right) \ge (1 - \alpha)$$

$-\sqrt{} < \hat{p} - p < +\sqrt{}$
$\hat{p} - \sqrt{} < p < \hat{p} + \sqrt{}$
$(1-\alpha)$ C.I. Random interval based on data

Let $C$ be the random set $C = \left(\hat{p} - \sqrt{\frac{1}{2n} \log(2/\alpha)}, \hat{p} + \sqrt{\frac{1}{2n} \log(2/\alpha)}\right)$.
Then $C$ traps the true parameter $p$ with probability at least $1 - \alpha$.
We call $C$ a $1 - \alpha$ confidence interval.

$$\mathbb{P}(\theta \in C_n) \ge 1 - \alpha$$
*   $C_n$: interval estimator (set) of e.g. a parameter $\theta$
*   $\hat{p}$: point est. of $\theta$
*   $1 - \alpha$: conf level for prespecified $\alpha$
*   $\theta$: quantity of interest, e.g. scalar parameter $\mathbb{E}[X]$ (fixed)

### Visual Description
The slide contains printed text about Confidence Intervals and Hoeffding's inequality, heavily annotated with blue and red ink. Annotations define terms like "interval estimator," "point estimator," and "confidence level," and show the algebraic steps to derive the confidence interval bounds from the inequality.

---

## Page 3
### Content
**Hoeffding’s Inequality:** Let $Y_1, \dots, Y_n$ be independent, bounded s.t. $a_i \le Y_i \le b_i$, and $\mathbb{E}[Y_i] = 0$. Let $\bar{X} = \bar{Y}$. Then $\forall t > 0$,
$$\mathbb{P}\left(|\bar{X} - 0| \ge t \sqrt{\frac{\sum_{i=1}^n (b_i - a_i)^2}{4n^2}}\right) \le 2 \exp(-t^2/2)$$

$Y_1, \dots, Y_n \overset{iid}{\sim} \text{Ber}(p)$
$\sum_{i=1}^n Y_i \sim \text{Binomial}(n, p)$
$\hat{p} = \bar{Y}_n$

$Y_i \in \{0, 1\} \quad \mathbb{E}[Y_i] = p$
Let $X_i = Y_i - p$
indep. bounded RVs:
$\begin{cases} X_i \in [-p, 1-p] \\ \mathbb{E}(X_i) = \mathbb{E}(Y_i) - p = 0 \end{cases}$

**Apply Hoeffding to $\bar{X} = \frac{1}{n} \sum_{i=1}^n X_i$ !**

### Visual Description
The slide presents the formal statement of Hoeffding's Inequality. Hand-written blue and red annotations show how to apply this inequality to Bernoulli random variables by centering them (subtracting the mean $p$) to satisfy the $\mathbb{E}[Y_i] = 0$ condition.

---

## Page 4
### Content
**Next: How do we derive Chebyshev's and Mill's ineqs?**

**Markov’s Inequality** Suppose $X$ is a non-negative random variable and that $\mu = \mathbb{E}[X]$ exists. Then for any $t \ge 0$:
$$\mathbb{P}(X > t) \le \frac{\mu}{t}, \quad \text{or equivalently, } \mathbb{P}(X > t\mu) \le \frac{1}{t}$$
$\equiv$ a positive random variable is unlikely to be much larger than its mean.

**Proof:** Since $X > 0$,
$$\begin{aligned} \mathbb{E}[X] &\overset{\text{def}}{=} \int_0^\infty x f_X(x) dx \\ &= \int_0^t x f_X(x) dx + \int_t^\infty x f_X(x) dx \\ &\ge \int_t^\infty x f_X(x) dx \quad (\text{since } t \le x < \infty) \\ &\ge t \int_t^\infty f_X(x) dx \\ &= t \mathbb{P}(X \ge t) \end{aligned}$$

### Visual Description
The slide explains Markov's Inequality. It includes a hand-drawn graph of a distribution "Distr of X" with the tail area $P(X > t)$ shaded. The proof is shown using integrals, with blue annotations highlighting key steps and definitions.

---

## Page 5
### Content
Markov’s inequality only applies to positive RVs but only needs that the RV have a finite mean. Chebyshev’s inequality requires a finite mean **and** variance. More generally, if we can bound higher moments (or the MGF) of a RV, then we can get even tighter inequalities, e.g., Hoeffding’s inequality.

**Chebyshev’s Inequality** Assume that $\mathbb{E}(X) = \mu$ and $\text{Var}(X) = \sigma^2$ both exist. For any $t \ge 0$:
$$\mathbb{P}(|X - \mu| > t\sigma) \le \frac{1}{t^2}$$

**Proof:** Chebyshev’s inequality is a simple consequence of Markov’s inequality:
$$\mathbb{P}(|X - \mu| \ge t\sigma) = \mathbb{P}((X - \mu)^2 \ge t^2\sigma^2)$$
By Markov’s inequality, ...

Let $Z = (X - \mu)^2$ (non-neg RV)
$\mathbb{E}(Z) \overset{\text{by def}}{=} \text{Var}(X)$

Recall Markov:
For any $s \ge 0, \quad \mathbb{P}(Z \ge s) \le \frac{\mathbb{E}(Z)}{s}$
$\begin{cases} Z = (X - \mu)^2 \\ s = t^2 \sigma_X^2 \end{cases}$
$$\mathbb{P}((X - \mu)^2 \ge t^2 \sigma_X^2) \le \frac{\mathbb{E}[(X - \mu)^2]}{t^2 \sigma_X^2} = \frac{1}{t^2}$$
That is, $\mathbb{P}(|X - \mu| > t\sigma) \le \frac{1}{t^2}$

### Visual Description
The slide discusses Chebyshev's Inequality and provides a proof derived from Markov's Inequality. Hand-written blue and red annotations detail the substitution of $Z = (X - \mu)^2$ into Markov's formula to reach the final result.

---

## Page 6
### Content
**Mill’s inequality:** Let $X \sim N(\mu_X, \sigma_X^2)$. Then, $\forall t > 0$:
$$\mathbb{P}(|X - \mu_X| > t\sigma_X) \le \sqrt{2/\pi} \frac{\exp(-t^2/2)}{t}$$
In particular, if $Z \sim N(0, 1)$,
$$\mathbb{P}(|Z| > t) \le \sqrt{2/\pi} \frac{\exp(-t^2/2)}{t}$$
We prove the latter result first.

**Proof:**
For standard normal RVs: $\mathbb{P}(|Z| > t) = 2 \int_t^\infty \frac{1}{\sqrt{2\pi}} \exp\left(-\frac{x^2}{2}\right) dx$
$$= \frac{2}{\sqrt{2\pi}} \int_t^\infty \exp\left(-\frac{x^2}{2}\right) dx$$
$$= \sqrt{\frac{2}{\pi}} \frac{1}{t} \int_t^\infty t \exp\left(-\frac{x^2}{2}\right) dx$$
$$\le \sqrt{\frac{2}{\pi}} \frac{1}{t} \int_t^\infty x \exp\left(-\frac{x^2}{2}\right) dx \quad (\text{since } t \le x < \infty)$$
$$= \sqrt{\frac{2}{\pi}} \frac{1}{t} \int_{t^2/2}^\infty \exp(-u) du$$
by a change of variables $u = x^2/2$. Integrating gives:
$$\mathbb{P}(|Z| > t) \le \sqrt{\frac{2}{\pi}} \frac{\exp(-t^2/2)}{t} \quad QED$$

Now, if $X \sim N(\mu, \sigma^2)$ then $Z = \frac{X - \mu}{\sigma} \sim N(0, 1)$.
We apply Mill’s inequality to $Z$ and do some simple algebra to obtain the required result.

### Visual Description
The slide presents Mill's inequality for normal distributions. It includes a hand-drawn graph of the standard normal distribution "Distr of $Z \sim N(0, 1)$" with both tails shaded. The proof involves integral calculus and a change of variables, with blue and red annotations highlighting the inequality step where $t$ is replaced by $x$ inside the integral.

---
==End of PDF==
