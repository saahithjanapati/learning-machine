# recitations-04-Recitation_3_Tail_Bounds

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/recitations-04-Recitation_3_Tail_Bounds.pdf`
Duplicate equivalents: `recitations-04-Recitation_3_Tail_Bounds.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `MAX_TOKENS`
Pages: 5

## Page 1
### Content
**RECITATION 3: TAIL BOUNDS**

[**PUNCHLINE:** Averages of independent random variables concentrate around their expectation]

**1) What are tail bounds?**
Tail bounds are inequalities that bound the probability that a random variable (rv) deviates far from its typical value (a.k.a. its mean).
We want to bound $P(X \text{ is in the tails})$

Formally: $P(|X - E[X]| \ge t) \le ??$

**2) How does this relate to ML?**
Simple example:
In ML, we care about true risk $R(h) = E[l(h(X), Y)]$ but we only observe empirical risk $\hat{R}(h) = \frac{1}{n} \sum_{i=1}^n l(h(x_i), y_i)$

How close is $R(h)$ to $\hat{R}(h)$?
Using Hoeffding's inequality, we can see that
$P(|\hat{R}(h) - R(h)| \ge \epsilon) \le 2 \cdot \exp(-2n\epsilon^2)$ { assuming loss $\in [0, 1]$ }

**3) Markov Inequality - (The most elementary tail bound)**
Let $X$ be a non-negative rv and $t > 0$ a real number.
$P(X \ge t) \le \frac{E[X]}{t}$

Proof:
We can see that $t \cdot \mathbb{I}_{\{X \ge t\}} \le X$
$\therefore t \cdot E[\mathbb{I}_{\{X \ge t\}}] \le E[X]$
$\Rightarrow P(X \ge t) \le \frac{E[X]}{t}$

Markov's Inequality only applies to non-negative rvs. We need to derive more general inequalities.

### Visual Description
Handwritten notes on grid paper. The title is in blue. A "PUNCHLINE" is enclosed in a red bracket. There is a sketch of a bell-shaped probability distribution curve with the tails shaded in purple and the mean labeled as $E[X]$.
---
## Page 2
### Content
**4) Chebyshev's Inequality**
Let $X$ be a rv with variance $\sigma^2$. Then, for any $t > 0$,
$P(|X - E[X]| \ge t\sigma) \le \frac{1}{t^2}$

In words: The probability that a rv is more than $t$ standard deviations away from its mean is at most $1/t^2$.

Example: Suppose we have iid rvs $X_1, \dots, X_n$ where $E[X_i] = \mu$, $var(X_i) = \sigma^2$
Let $Y_n = \frac{1}{n} \sum_{i=1}^n X_i$ be the sample mean.
* $E[Y_n] = \mu$
* $var(Y_n) = \sigma^2/n$

By Chebyshev's inequality,
$P(|Y_n - \mu| \ge \frac{t\sigma}{\sqrt{n}}) \le \frac{1}{t^2}$
i.e., the probability that the sample mean deviates from the true mean by more than $t$ standard deviations of the sample mean is at most $1/t^2$.

Let us set $\epsilon = \frac{t\sigma}{\sqrt{n}}$. Then $\frac{1}{t^2} = \frac{\sigma^2}{n\epsilon^2}$ ($\epsilon > 0$)
$\therefore P(|Y_n - \mu| \ge \epsilon) \le \frac{\sigma^2}{n\epsilon^2}$

As $n \to \infty$, sample mean converges in probability to true mean. } **WEAK LAW OF LARGE NUMBERS**

Proof:
$P(|X - \mu| \ge t\sigma) = P((X - \mu)^2 \ge t^2\sigma^2) \le \frac{E[(X - \mu)^2]}{t^2\sigma^2} = \frac{1}{t^2}$ ($\mu = E[X]$)

Exercise - Try at home:
Let $X_1, \dots, X_n$ be iid rvs $\sim Exp(1)$ and $S_n = X_1 + \dots + X_n$.
Show that $P(S_n > 2n) \le \frac{1}{n}$

### Visual Description
Handwritten notes on grid paper. A large red bracket on the right side groups the derivation of the sample mean bound under the label "WEAK LAW OF LARGE NUMBERS".
---
## Page 3
### Content
**5) Chernoff Method**
There are several refinements to the Chebyshev Inequality.
Eg. If rv $X$ has a finite $k^{th}$ central moment,
$P(|X - E[X]| \ge t) \le \frac{E[|X - E[X]|^k]}{t^k}$

We can also derive tail bounds based on the **MOMENT GENERATING FUNCTION**

Quick Recap:
The moment generating function (MGF) of a rv is $M_X(t) = E[\exp(tX)]$
We can use MGF to "generate" all moments of a distribution by taking derivatives of the MGF w.r.t. $t$ evaluated at $t=0$.
$n^{th}$ moment: $M_X^{(n)}(t) \big|_{t=0} = E[X^n]$

* Chebyshev's inequality gives a bound, but it's usually loose because it only uses the variance (a second moment).
* Chernoff method gives exponentially decaying bounds.

Goal: Bound $P(X - \mu \ge u)$; $\mu = E[X]$
For any $t > 0$, if $X - \mu \ge u$, $\exp(t(X - \mu)) \ge \exp(tu)$
$\therefore P(X - \mu \ge u) = P(\exp(t(X - \mu)) \ge \exp(tu)) \le \frac{E[\exp(t(X - \mu))]}{\exp(tu)}$
$\therefore P(X - \mu \ge u) \le \exp(-t(u + \mu)) E[\exp(tX)]$

[Green margin note: Notice it is a one-sided tail bound because MGF trick needs it to be one-sided. Can easily find union of 2 one-sided bounds]

The above holds for any $t > 0$, hence we can choose a value of $t$ to get a tight upper bound.
$P(X - \mu \ge u) \le \inf_{t > 0} \exp(-t(u + \mu)) E[\exp(tX)]$ } **CHERNOFF'S BOUND**

**5.1) Gaussian Tail Bounds via Chernoff Method**
Let $X \sim N(\mu, \sigma^2)$
We can show that $M_X(t) = E[\exp(tX)] = \exp(t\mu + \frac{t^2\sigma^2}{2})$
To apply the Chernoff method, we need to compute $\inf_{t > 0} \exp(-t(u + \mu)) \exp(t\mu + \frac{t^2\sigma^2}{2}) = \inf_{t > 0} \exp(-tu + \frac{t^2\sigma^2}{2})$

### Visual Description
Handwritten notes on grid paper. Key terms like "MOMENT GENERATING FUNCTION" and "CHERNOFF'S BOUND" are highlighted in purple and red respectively. There are green handwritten notes in the right margin explaining the one-sided nature of the bound.
---
## Page 4
### Content
Easy to see that the minimizer is $t = \frac{u}{\sigma^2}$
Plugging this in, we get
$P(X - \mu \ge u) \le \exp(-\frac{u^2}{2\sigma^2})$ } one-sided or upper tail bound
Similarly $P(-X + \mu \ge u) \le \exp(-\frac{u^2}{2\sigma^2})$

Combining, we get the Gaussian tail bound:
$P(|X - \mu| \ge u) \le 2 \exp(-\frac{u^2}{2\sigma^2})$ ] **CHERNOFF**

Comparing to Chebyshev,
$P(|X - \mu| \ge u) \le \frac{\sigma^2}{u^2}$ ] **CHEBYSHEV**

It can be seen that Chernoff is much tighter.

**6) Hoeffding's Inequality**
Is used for bounded rvs.
Suppose $X_1, \dots, X_n$ are iid, $a_i \le X_i \le b_i$, $E[X_i] = \mu$ $\forall i \in [n]$
Then, for any $t > 0$,
$P(|\frac{1}{n} \sum_{i=1}^n X_i - \mu| \ge t) \le 2 \exp(-\frac{2n^2t^2}{\sum_{i=1}^n (b_i - a_i)^2})$

Proof:
Use Hoeffding's lemma:
If a rv $Y$ satisfies $a \le Y \le b$,
$E
