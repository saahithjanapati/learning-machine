# canvas-09-02-13180383-slides_Chapter4.Part1.overview

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-09-02-13180383-slides_Chapter4.Part1.overview.pdf`
Duplicate equivalents: `canvas-09-02-13180383-slides_Chapter4.Part1.overview.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 9

## Page 1
### Content
**CHAPTER 4 Overview – Probability Inequalities**

**Motivation and Intuition** We saw in the last chapter that averages of many independent random variables tend to have much smaller variance than the individual random variables. In some sense this is comforting, but what we’d really like are **quantitative bounds**.

Particularly, we could always get unlucky and have the mean of a bunch of random variables be quite far from their expectation. We want to be able to say concretely that most of the time the average of many independent random variables is very close to their expectation.

Probability inequalities allow you to know something about a probability when you cannot actually calculate it exactly because you have not assumed a distribution for the RVs. This is very useful in nonparametric statistics.

(Side remark/question: How do you think these results will compare to results using the CLT?)

**SIMPLE CASE STUDY** (where we know how to calculate a required probability)

Suppose I toss a fair coin $n = 16$ times.

Denote the outcome of the $i^{th}$ toss $X_i$, where $X_i = -1$ if tails and $X_i = +1$ if heads.

**Mean and Variance.**
$Y = \bar{X}_n$ is a good estimate of $E(X_1)$ because ...

### Visual Description
Text-only slide.

---
## Page 2
### Content
**The best case.**
We might get really lucky and have exactly $n/2$ heads and $n/2$ tails. In this case, we would have that $Y = 0$

**The worst case.**
On the other hand, we could be unlucky and observe $n$ heads or $n$ tails, yielding $|y| = 1$, which is as far away from $E(X_1) = 0$ as could be. We obtain this disastrous estimate of $E(Y)$ with probability

$$\mathbb{P}(|Y| = 1) = P(n \text{ heads or } n \text{ tails}) = 2 \times (1/2)^n = 3 \cdot 10^{-5}.$$

### Visual Description
Text-only slide.

---
## Page 3
### Content
**Chebyshev’s inequality** Assume that $\mathbb{E}[X] = \mu_X$ and $\mathbb{V}(X) = \sigma_X^2$ both exist. Then $\forall t \ge 0$:

$$\mathbb{P}(|X - \mu_X| \ge t\sigma_X) \le \frac{1}{t^2}.$$

The deviation from the mean of any random variable is of the order of the standard deviation, and more concretely the probability that a random variable is more than $t$ standard deviations away from its mean is at most $1/t^2$.

In particular, if $X$ is the average of $n$ iid RVs, $X = \frac{1}{n} \sum_{i=1}^n Y_i$, we know that $X = \bar{Y}_n$ is a good estimate of $\mu_Y$. Chebyshev gives us some way of evaluating/quantifying that “goodness”.

### Visual Description
Text-only slide.

---
## Page 4
### Content
**Chebyshev’s inequality** Assume that $\mathbb{E}[X] = \mu_X$ and $\mathbb{V}(X) = \sigma_X^2$ both exist. Then $\forall t \ge 0$:

$$\mathbb{P}(|X - \mu_X| \ge t\sigma_X) \le \frac{1}{t^2}.$$

**Mill’s inequality** Let $X \sim N(\mu_X, \sigma_X^2)$. Then $\forall t > 0$:

$$\mathbb{P}(|X - \mu_X| \ge t\sigma_X) \le \sqrt{2/\pi} \frac{\exp(-t^2/2)}{t}.$$

[Graph comparing bounds]

### Visual Description
A line graph comparing three probability bounds as a function of $t$ (from 2.0 to 4.0). The y-axis is labeled "bound" (from 0.00 to 0.25). 
- The **Chebyshev** bound is represented by a solid black line, which is the highest of the three.
- The **Hoeffding** bound is represented by a green dotted line, which is in the middle.
- The **Mill** bound is represented by a red dotted line, which is the lowest (tightest) bound shown.

---
## Page 5
### Content
**Hoeffding’s inequality** Let $Y_1, \dots, Y_n$ be independent, bounded s.t. $a_i \le Y_i \le b_i$, and $\mathbb{E}[Y_i] = 0$. Let $X = \bar{Y}_n$. Then $\forall t > 0$,

$$\mathbb{P}\left(|X - 0| \ge t \sqrt{\frac{\sum_{i=1}^n (b_i - a_i)^2}{4n^2}}\right) \le 2 \exp(-t^2/2).$$

### Visual Description
Text-only slide.

---
## Page 6
### Content
**SUMMARY**

**Chebyshev’s inequality** Assume that $\mathbb{E}[X] = \mu_X$ and $\mathbb{V}(X) = \sigma_X^2$ both exist. Then $\forall t \ge 0$:
$$\mathbb{P}(|X - \mu_X| \ge t\sigma_X) \le \frac{1}{t^2}.$$

**Mill’s inequality** Let $X \sim N(\mu_X, \sigma_X^2)$. Then $\forall t > 0$:
$$\mathbb{P}(|X - \mu_X| \ge t\sigma_X) \le \sqrt{2/\pi} \frac{\exp(-t^2/2)}{t}.$$

**Hoeffding’s inequality** Let $Y_1, \dots, Y_n$ be independent, bounded s.t. $a_i \le Y_i \le b_i$, and $\mathbb{E}[Y_i] = 0$. Let $X = \bar{Y}_n$. Then $\forall t > 0$,
$$\mathbb{P}\left(|X - 0| \ge t \sqrt{\frac{\sum_{i=1}^n (b_i - a_i)^2}{4n^2}}\right) \le 2 \exp(-t^2/2).$$

[Graph comparing bounds]

### Visual Description
A line graph comparing three probability bounds as a function of $t$ (from 2.0 to 4.0). The y-axis is labeled "bound" (from 0.00 to 0.25). 
- The **Chebyshev** bound is represented by a solid black line.
- The **Hoeffding** bound is represented by a green dotted line.
- The **Mill** bound is represented by a red dotted line.
This is the same graph as on Page 4.

---
## Page 7
### Content
**RETURN TO CASE STUDY** (where we know how to calculate a required probability)

Suppose I toss a fair coin $n = 16$ times.

Denote the outcome of the $i^{th}$ toss $X_i$, where $X_i = -1$ if tails and $X_i = +1$ if heads.

**Recall: worst case.** We could be unlucky and observe $n$ heads or $n$ tails, yielding $|y| = 1$, which is as far away from $E(X_1) = 0$ as could be. We obtain this disastrous estimate of $E(Y)$ with probability

$$\mathbb{P}(|Y| = 1) = P(n \text{ heads or } n \text{ tails}) = 2 \times (1/2)^n = 3 \cdot 10^{-5}.$$

Let’s see if how tight bounds we can compute with previous prob inequalities (Chebyshev, Mill, Hoeffding)...

We start with **Chebyshev’s inequality**:
$\mathbb{E}[Y] = \mu_Y = 0$ and $\mathbb{V}(Y) = \sigma_Y^2 = 1/n = 1/16$ both exist.

Then, $\forall t \ge 0$:
$$\mathbb{P}(|Y - \mu_Y| \ge t\sigma_Y) \le \frac{1}{t^2}$$
$$\mathbb{P}(|Y| \ge t/4) \le \frac{1}{t^2}$$

I am interested in $\mathbb{P}(|Y| = 1)$. So I must choose the value of $t$ so that $\mathbb{P}(|Y| \ge t/4) = \mathbb{P}(|Y| = 1)$. Take $t = 4$.

Then from Chebyshev I get $\mathbb{P}(|Y| = 1) \le 0.0625$, which is quite small but not super tight.

### Visual Description
Text-only slide.

---
## Page 8
### Content
**Mill’s inequality** If $Y \sim N(\mu_Y, \sigma_Y^2) = N(0, 1/16)$, then $\forall t > 0$:

$$\mathbb{P}(|Y - \mu_Y| \ge t\sigma_Y) \le \sqrt{2/\pi} \frac{\exp(-t^2/2)}{t}$$
$$\mathbb{P}(|Y| \ge t/4) \le \sqrt{2/\pi} \frac{\exp(-t^2/2)}{t}$$

Again, I take $t = 4$ and obtain $\mathbb{P}(|Y| = 1) = \mathbb{P}(|Y| \ge t/4) \le 6.7 \cdot 10^{-5}$ – very tight!

### Visual Description
Text-only slide.
## Page 9
### Content
**Hoeffding's inequality** Let $X_1, \dots, X_n$ be independent, bounded s.t. $a_i \leq X_i \leq b_i$, and $\mathbb{E}[X_i] = 0$. Let $Y = \overline{X}_n$. Then $\forall t > 0$,

$$\mathbb{P} \left( |Y| \geq t \sqrt{\frac{\sum_{i=1}^n (b_i - a_i)^2}{4n^2}} \right) \leq 2 \exp \left( -t^2/2 \right).$$

$$\mathbb{P} (|Y| \geq t/4) \leq 2 \exp \left( -t^2/2 \right).$$

Again, I take $t = 4$ and obtain $\mathbb{P}(|Y| \geq 1) = \mathbb{P} (|Y| \geq t/4) \leq 1.5 \cdot 10^{-3}$ – not as tight as Mill's (but fewer assumptions) but tighter than Chebyshev's.

### Visual Description
Text-only slide.
