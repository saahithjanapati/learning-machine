# canvas-09-04-13224311-annotated.slides_Chapter4.overview

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-09-04-13224311-annotated.slides_Chapter4.overview.pdf`
Duplicate equivalents: `canvas-09-04-13224311-annotated.slides_Chapter4.overview.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 9

## Page 1
### Content
**Think: What are we doing, and why?**

# CHAPTER 4 Overview – Probability Inequalities
"conc ineqs"

**Motivation and Intuition** We saw in the last chapter that averages of many independent random variables tend to have much smaller variance than the individual random variables. In some sense this is comforting, but what we’d really like are **quantitative bounds**.
*   w/o knowing the distr
*   w/o asymptotic assumptions

**Ex.** Particularly, we could always get unlucky and have the mean of a bunch of random variables be quite far from their expectation. We want to be able to say concretely that **most of the time** the **average** (sample mean) of many independent random variables is **very close** to their **expectation** (population) within some deviation with high prob.

Probability inequalities allow you to know something about a probability when you cannot actually calculate it exactly because you have **not assumed** a distribution for the RVs. This is very useful in **nonparametric statistics**.

**Q:** (Side remark/question: How do you think these results will compare to results using the CLT?)

conc ineq. = "non-asymptotic CLT" i.e. Valid for small sample sizes.
But gives "less control over" the average compared to CLT.

**SIMPLE CASE STUDY** (where we know how to calculate a required probability)
Suppose I toss a fair coin $n = 16$ times.
Denote the outcome of the $i^{th}$ toss $X_i$, where $X_i = -1$ if tails and $X_i = +1$ if heads.

$$E(X_1) = 0$$
$$V(X_1) = E(X_1^2) - E(X_1)^2 = \frac{1}{2} \cdot 1^2 + \frac{1}{2} \cdot (-1)^2 = 1$$

**Mean and Variance.**
$Y = \bar{X}_n$ is a good estimate of $E(X_1)$ because ...
$Y$ is an RV, "statistic" = function of data $\Rightarrow$ estimator.

$$\begin{cases} E(Y) = \frac{1}{n} \sum E(X_i) = 0 \\ Var(Y) = Var(\frac{1}{n} \sum X_i) = \frac{1}{n^2} Var(X_i) = \frac{1}{n} \end{cases}$$
($X_i$'s independent and identically distr.)

**But is $Y$ close to $E(Y)$ with high prob.?**

### Visual Description
The slide is on a grid background with printed text and extensive blue and red handwritten annotations. Arrows point from handwritten notes to specific parts of the text (e.g., "sample mean" points to "average", "population" points to "expectation"). Mathematical derivations for the mean and variance of a coin toss are written in blue ink at the bottom.

---
## Page 2
### Content
**The best case.**
We might get really lucky and have exactly $n/2$ heads and $n/2$ tails. In this case, we would have that $Y = 0$

**The worst case.**
On the other hand, we could be unlucky and observe $n$ heads or $n$ tails, yielding $|y| = 1$, which is as far away from $E(X_1) = 0$ as could be. We obtain this disastrous estimate of $E(Y)$ with probability
$$P(|Y| = 1) = P(n \text{ heads or } n \text{ tails}) = 2 \times (1/2)^n = 3 \cdot 10^{-5}.$$
(for $n=16$)

### Visual Description
Text-only slide on a grid background with a small blue handwritten note "$n=16$" and underlines under "n heads", "n tails", and the probability result.

---
## Page 3
### Content
**Chebyshev’s inequality** Assume that $E[X] = \mu_X$ and $V(X) = \sigma_X^2$ both exist. (1st and 2nd moments exist). Then $\forall t \ge 0$:
$$P(|X - \mu_X| \ge t\sigma_X) \le \frac{1}{t^2}.$$

The deviation from the mean of any random variable is of the order of the standard deviation, and more concretely the probability that a random variable is more than $t$ standard deviations away from its mean is at most $1/t^2$.

In particular, if $X$ is the average of $n$ iid RVs, $X = \frac{1}{n} \sum_{i=1}^n Y_i$, we know that $X = \bar{Y}_n$ is a good estimate of $\mu_Y$. Chebyshev gives us some way of evaluating/quantifying that “goodness”.

### Visual Description
Text slide on a grid background. The inequality is highlighted with yellow, and there is a blue handwritten note stating "1st and 2nd moments exist".

---
## Page 4
### Content
**Chebyshev’s inequality** Assume that $E[X] = \mu_X$ and $V(X) = \sigma_X^2$ both exist. Then $\forall t \ge 0$:
$$P(|X - \mu_X| \ge t\sigma_X) \le \frac{1}{t^2}.$$

**Mill’s inequality** (spec. case) Let $X \sim N(\mu_X, \sigma_X^2)$. Then $\forall t > 0$:
$$P(|X - \mu_X| \ge t\sigma_X) \le \sqrt{2/\pi} \frac{\exp(-t^2/2)}{t}.$$
(exp. ineq.)

### Visual Description
The slide contains text and a plot. The plot shows three curves representing different bounds: Chebyshev (black solid line), Mill (red dotted line), and Hoeffding (green dashed line). The x-axis is labeled '$t$' (ranging from 2.0 to 4.0) and the y-axis is labeled 'bound' (ranging from 0.00 to 0.25). Blue handwritten notes point to the curves, labeling "Chebyshev" and noting "tighter bounds" for the lower curves.

---
## Page 5
### Content
**Hoeffding’s inequality** Let $Y_1, \dots, Y_n$ be independent, **bounded** s.t. $a_i \le Y_i \le b_i$, and $E[Y_i] = 0$. Let $X = \bar{Y}_n$. Then $\forall t > 0$,
$$P\left(|X - 0| \ge t \sqrt{\frac{\sum_{i=1}^n (b_i - a_i)^2}{4n^2}}\right) \le 2 \exp(-t^2/2).$$

(deviation) $\le$ (prob)
"exponential ineq."

### Visual Description
Text slide on a grid background. The word "bounded" and the right side of the inequality are highlighted in yellow. Blue handwritten annotations label the parts of the inequality as "deviation" and "prob", and identify it as an "exponential ineq.".

---
## Page 6
### Content
**Recall: RV $X$ is "close to" $E(X)$ with high prob.** (9/15/25)

**Quest: Non-asymptotic quantitative bounds on tail prob. with a minimum of distr. assumptions?**

**SUMMARY**
**Chebyshev’s inequality** Assume that $E[X] = \mu_X$ and $V(X) = \sigma_X^2$ both exist. Then $\forall t \ge 0$:
$$P(|X - \mu_X| \ge t\sigma_X) \le \frac{1}{t^2}.$$
$\rightarrow$ exponential

**Mill’s inequality** Let $X \sim N(\mu_X, \sigma_X^2)$. Then $\forall t > 0$:
$$P(|X - \mu_X| \ge t\sigma_X) \le \sqrt{2/\pi} \frac{\exp(-t^2/2)}{t}.$$
Spec case: With high prob, the sample mean is within typical dev $const/\sqrt{n}$ from the true mean.

**Hoeffding’s inequality** Let $Y_1, \dots, Y_n$ be independent, bounded s.t. $a_i \le Y_i \le b_i$, and $E[Y_i] = 0$. Let $X = \bar{Y}_n$. Then $\forall t > 0$,
$$P\left(|X - 0| \ge t \sqrt{\frac{\sum_{i=1}^n (b_i - a_i)^2}{4n^2}}\right) \le 2 \exp(-t^2/2).$$
Can show: If $a_i \le Y_i \le b_i$, then $Var(Y_i) \le \frac{(b_i - a_i)^2}{4}$.
$Var(X) = Var(\frac{1}{n} \sum Y_i) = \frac{1}{n^2} \sum Var(Y_i)$.
$\rightarrow$ order of $SD(X)$.

1) don't know what the distr is (but may know some of its properties, e.g. whether its moments exist and their values)
2) don't use asymptotic approx.

**Pay attention to:**
*   assumptions
*   size of deviation (s.t.d. of RV)
*   form of prob. conc.

### Visual Description
A summary slide on a grid background with printed text and extensive blue and red handwritten notes. It includes the same plot from Page 4, with a yellow highlighted region between the Chebyshev and Mill/Hoeffding curves. Handwritten notes emphasize key takeaways like "non-asymptotic", "minimum of distr. assumptions", and "order of SD(X)".

---
## Page 7
### Content
**RETURN TO CASE STUDY** (where we know how to calculate a required probability)
Suppose I toss a fair coin $n = 16$ times.
Denote the outcome of the $i^{th}$ toss $X_i$, where $X_i = -1$ if tails and $X_i = +1$ if heads.
$X_1, \dots, X_n \sim f_X$
Let $Y = \bar{X}_n = \frac{1}{n} \sum_{i=1}^n X_i$

**Recall: worst case.** We could be unlucky and observe $n$ heads or $n$ tails, yielding $|y| = 1$, which is as far away from $E(X_1) = 0$ as could be. We obtain this disastrous estimate of $E(Y)$ with probability
$$P(|Y| = 1) = P(n \text{ heads or } n \text{ tails}) = 2 \times (1/2)^n = 3 \cdot 10^{-5}.$$

Let’s see if how tight bounds we can compute with previous prob inequalities (Chebyshev, Mill, Hoeffding)...

We start with **Chebyshev’s inequality**:
$E[Y] = \mu_Y = 0$ and $V(Y) = \sigma_Y^2 = 1/n = 1/16$ both exist.
($\mu_Y = \mu_X$, $\sigma_Y^2 = \sigma_X^2/n$)
Then, $\forall t \ge 0$:
$$P(|Y - \mu_Y| \ge t\sigma_Y) \le \frac{1}{t^2}$$
$$P(|Y| \ge t/4) \le \frac{1}{t^2}$$
(Let $t/4 = 1$)

I am interested in $P(|Y| = 1)$. So I must choose the value of $t$ so that $P(|Y| \ge t/4) = P(|Y| = 1)$. Take $t = 4$.

Then from Chebyshev I get $P(|Y| = 1) \le 0.0625$, which is quite small but not super tight.

### Visual Description
Text slide on a grid background with blue handwritten annotations. The annotations define $Y$ as the sample mean and show the relationship between the population parameters and the sample mean parameters ($\mu_Y = \mu_X$, $\sigma_Y^2 = \sigma_X^2/n$). An arrow points to the substitution $t/4 = 1$.

---
## Page 8
### Content
**Mill’s inequality** assume If $Y \sim N(\mu_Y, \sigma_Y^2) = N(0, 1/16)$, then $\forall t > 0$:
$$P(|Y - \mu_Y| \ge t\sigma_Y) \le \sqrt{2/\pi} \frac{\exp(-t^2/2)}{t}$$
$$P(|Y| \ge t/4) \le \sqrt{2/\pi} \frac{\exp(-t^2/2)}{t}$$

Again, I take $t = 4$ and obtain $P(|Y| = 1) = P(|Y| \ge t/4) \le 6.7 \cdot 10^{-5}$ – very tight!
cf. exact prob $3 \cdot 10^{-5}$
$n=16$

**Think: Why?**

### Visual Description
Text slide on a grid background with blue handwritten annotations. The word "assume" is written above Mill's inequality. At the bottom, the result is compared to the "exact prob $3 \cdot 10^{-5}$" for $n=16$, followed by the prompt "Think: Why?".

---
==End of PDF==
## Page 9
### Content
**Hoeffding's inequality** Let $X_1, \dots, X_n$ be independent, bounded s.t. $-1 \le X_i \le 1$, and $\mathbb{E}[X_i] = 0$. Let $Y = \overline{X}_n$. Then $\forall t > 0$,

$$\mathbb{P} \left( |Y| \ge t \sqrt{\frac{\sum_{i=1}^n (b_i - a_i)^2}{4n^2}} \right) \le 2 \exp(-t^2/2).$$

$$\mathbb{P}(|Y| \ge t/4) \le 2 \exp(-t^2/2).$$

Again, I take $t = 4$ and obtain $\mathbb{P}(|Y| = 1) = \mathbb{P}(|Y| > t/4) \le 1.5 \cdot 10^{-3}$ - not as tight as Mill's (but fewer assumptions) but tighter than Chebyshev's.

**Handwritten Annotations:**
*   Top right: $\begin{cases} a_i = -1 \\ b_i = 1 \end{cases}$ for $i=1, \dots, n$
*   Bottom right: cf. $3 \cdot 10^{-5}$
*   Blue underlining on "bounded", "$\mathbb{P}(|Y| \ge t/4)$", and "$1.5 \cdot 10^{-3}$".
*   A blue circle around the term $2 \exp(-t^2/2)$.

### Visual Description
The slide is presented on a light blue grid background. It contains typed mathematical text and formulas regarding Hoeffding's inequality. There are several blue handwritten notes and markings: a bracketed definition for $a_i$ and $b_i$ in the top right corner, a circle around the exponential bound in the second formula, and a comparison value "cf. $3 \cdot 10^{-5}$" at the bottom right. Some key terms and values in the text are underlined in blue.

---
