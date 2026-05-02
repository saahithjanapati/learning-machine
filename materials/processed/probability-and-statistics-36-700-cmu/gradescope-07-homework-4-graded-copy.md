# gradescope-07-homework-4-graded-copy

Source: `materials/archive/probability-and-statistics-36-700-cmu/gradescope-graded-copies/gradescope-07-homework-4-graded-copy.pdf`
Duplicate equivalents: `gradescope-07-homework-4-graded-copy.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 19

## Page 1
### Content
**Homework 4**
**Graded**

**Student**
Saahith Janapati

**Total Points**
97 / 100 pts

**Question 1**
**Choosing Sample Size for Error Bound** 10 / 10 pts
*   $\checkmark$ - 0 pts Correct
*   - 2 pts Minor error
*   - 5 pts Major error
*   - 10 pts Missing

**Question 2**
**Chebyshev is Tight** 10 / 10 pts
*   $\checkmark$ - 0 pts Correct
*   - 2 pts Minor error
*   - 5 pts Major error
*   - 10 pts Missing

**Question 3**
**Coin Flipping Test** 10 / 10 pts
*   $\checkmark$ - 0 pts Correct
*   - 2 pts Minor error
*   - 5 pts Major error
*   - 10 pts Missing

### Visual Description
This is a summary page from a grading platform (Gradescope). It shows the student's name, total score, and a breakdown of the first three questions with their respective scores and rubric items.

---

## Page 2
### Content
**Question 4**
**Confidence Intervals** 25 / 25 pts
*   $\checkmark$ - 0 pts Correct
*   - 1 pt a) Minor reasoning error
*   - 3 pts a) Major error
*   - 1 pt b) Minor error
*   - 3 pts b) Major error
*   - 1 pt c) Minor error
*   - 3 pts c) Major error
*   - 1 pt d) Minor error
*   - 3 pts d) Major error
*   - 1 pt e) Minor error
*   - 3 pts e) Major error

**Question 5**
**Poisson Approximation** 12 / 15 pts
*   - 0 pts Correct
*   - 1 pt a) Minor error
*   - 3 pts a) Major error
*   - 1 pt b) Minor error
*   - 3 pts b) Major error
*   - 1 pt c) Minor error
*   $\checkmark$ - 3 pts c) Major error

**Question 6**
**Converge of L_a norm implies convergence in probability** 10 / 10 pts
*   $\checkmark$ - 0 pts Correct
*   - 2 pts Minor error
*   - 5 pts Major error

**Question 7**
**Convergence of RV in Probability to 1** 10 / 10 pts
*   $\checkmark$ - 0 pts Correct
*   - 2 pts Minor error
*   - 5 pts Major error

### Visual Description
Continuation of the Gradescope summary page, showing scores and rubric items for Questions 4 through 7. Question 5 shows a 3-point deduction for a major error in part (c).

---

## Page 3
### Content
**Question 8**
**Wasserman 5.13** 10 / 10 pts
*   $\checkmark$ - 0 pts Correct
*   - 2 pts Minor error
*   - 5 pts Major error
*   - 10 pts missing

### Visual Description
Continuation of the Gradescope summary page, showing the score and rubric items for Question 8.

---

## Page 4
### Content
Question assigned to the following page: 1

$$P(|X - \mu| \ge t\sigma) \le 1/t^2$$

$$Var[\bar{X}] = \frac{\sigma}{\sqrt{n}}$$
(Note: Student likely meant standard deviation $SD[\bar{X}]$)

$$P(|\bar{X} - \mu| \ge t \frac{\sigma}{\sqrt{n}}) \le \frac{1}{t^2}$$

$$P(|\bar{X} - \mu| \ge a) \le \frac{\sigma^2}{a^2 n}$$

Let $a = t \frac{\sigma}{\sqrt{n}} \implies t = \frac{a\sqrt{n}}{\sigma} \implies \frac{1}{t^2} = \frac{\sigma^2}{a^2 n}$

$a = 2$
$\sigma^2 = 25$

$$\frac{\sigma^2}{a^2 n} = 0.1 \implies \frac{25}{(4)(n)} = 0.1 \implies \frac{25}{0.4} = n$$
$$n = 62.5 \implies \boxed{63}$$

1b) Using Hoeffding
$$0.05 = 2e^{\left(-\frac{2(n^2)(2)^2}{(100)n}\right)}$$
(Note: simplifies to $2e^{-8n/100}$)

$$\ln(0.05) = \ln(2) + -\frac{8n}{100}$$
$$\frac{8n}{100} = \ln(2) - \ln(0.05)$$
$$n = \frac{\ln(2) - \ln(0.05)}{8} \cdot (100) = 46.1 \implies \boxed{47}$$

### Visual Description
Handwritten mathematical calculations on a light yellow background. The page shows two methods for calculating sample size $n$: one using Chebyshev's inequality and another using Hoeffding's inequality. Final answers 63 and 47 are boxed and highlighted in yellow.

---

## Page 5
### Content
Question assigned to the following page: 2

Chebyshev follows directly from Markov property.

$$P(|X - \mu| \ge t) = P((X - \mu)^2 \ge t^2) \le \frac{E[(X - \mu)^2]}{t^2} = \frac{\sigma^2}{t^2}$$

Let $Y = (X - \mu)^2$
Markov is tight only when $(X - \mu)^2 \in \{0, t^2\}$

$$Y = (X - \mu)^2 = \begin{cases} 0 & \text{w/ prob } 1-p \\ t^2 & \text{w/ prob } p \end{cases}$$

also need $E[(X - \mu)^2] = \sigma^2$
$$t^2 p = \sigma^2 \implies p = \frac{\sigma^2}{t^2}$$

Consider $X = \begin{cases} \mu & \text{w/ prob } 1-p \\ \mu + t & \text{w/ prob } p/2 \\ \mu - t & \text{w/ prob } p/2 \end{cases}$
where $p = \frac{\sigma^2}{t^2}$

### Visual Description
Handwritten mathematical proof on a light yellow background. It demonstrates that Chebyshev's inequality is tight by constructing a specific discrete random variable. A box at the bottom right, highlighted in yellow, summarizes the distribution of $X$.

---

## Page 6
### Content
Question assigned to the following page: 3

$$Var(X) = p(1-p)$$
$$\bar{X}_n = \frac{1}{n} \sum_{i=1}^n X_i$$
$$Z_n = \frac{\sqrt{n}(\bar{X}_n - \mu)}{\sigma}$$
$$\sigma = \sqrt{p(1-p)}$$

let $\begin{cases} \text{tails} \to 0 \\ \text{heads} \to 1 \end{cases}$

expected $\mu = (0.5)(0) + (0.5)(1) = 0.5$
observed $\bar{X}_n = 0.6$

$$Z_n = \frac{\sqrt{100}(0.6 - 0.5)}{\sqrt{(0.5)(0.5)}} = \frac{\sqrt{100}(0.1)}{(0.5)} = 2$$

$$P(Z_n \ge 2) = 1 - \Phi(2) = 0.4207$$
(Note: $1 - \Phi(2)$ is actually $\approx 0.0228$; the student corrects this in the text below.)

The probability of 60 or more heads is 0.0228 or 2.28%, so I would be suspicious.

### Visual Description
Handwritten solution for a coin-flipping problem on a light yellow background. It uses the Central Limit Theorem to calculate a Z-score and the corresponding p-value to test if a coin is fair.

---

## Page 7
### Content
Question assigned to the following page: 3

**code for problem 3**

```python
import math

def main():
    x = 2
    # Standard normal CDF via erf
    cdf_val = 0.5 * (1 + math.erf(x / math.sqrt(2)))
    result = 1 - cdf_val
    print("1 - CDF_normal_gaussian(1/5) =", result)

if __name__ == "__main__":
    main()
```

### Visual Description
A screenshot of a Python code snippet in a dark-themed code editor, placed on a light yellow background. The code calculates the tail probability of a standard normal distribution at $x=2$.

---

## Page 8
### Content
Question assigned to the following page: 4

(a) $\boxed{\mu \in [0, 1]}$
$$\sigma^2 = E[X^2] - \mu^2 \le E[X] - \mu^2$$
$$= \mu - \mu^2 = \mu(1 - \mu)$$

max variance occurs when $\mu = 0.5$
Then $\sigma^2 \le (0.5)(0.5) = 0.25$
so $\sigma \le 0.5$
So, $\boxed{\sigma \in [0, 0.5]}$

(b) $Z_n = \frac{\sqrt{n}(\bar{X}_n - \mu)}{\sigma} = \frac{\sqrt{16}(0.5)}{\sqrt{1/12}} = 6.93$

$$P(Z_n \ge 6.93) = 2.1311 e^{-12}$$

$$P(|\bar{X}_n - \mu| \ge 5) = 2 \cdot P(Z_n \ge 6.93)$$
$$= \boxed{4.262 e^{-12}}$$

### Visual Description
Handwritten mathematical solution for Question 4 on a light yellow background. Part (a) derives the range for the standard deviation $\sigma$ given $\mu \in [0,1]$. Part (b) calculates a probability using a Z-score. Key results are boxed and highlighted in yellow.

---
## Page 9
### Content
$$P(|\bar{X} - \mu| \ge t\sigma_{\bar{X}}) \le 1/t^2$$
$\uparrow$ here $\sigma_{\bar{X}} = \frac{\sigma}{\sqrt{n}}$

$t \frac{\sigma}{\sqrt{n}} = 0.5$

$\frac{t\sigma}{4} = 0.5$

$t\sigma = 2$

$t = \frac{2}{\sigma} = \frac{2}{\sqrt{1/12}} \approx 6.928$

$\frac{1}{t^2} = 0.020833$

$$P(|\bar{X} - \mu| \ge 0.5) \le 0.020833$$

### Visual Description
Handwritten mathematical derivation on a light yellow background. The final probability inequality is boxed and highlighted in yellow.

---
## Page 10
### Content
... inequality

$$P(|Z| \ge t) \le \frac{\sqrt{(2/\pi)} e^{(-\frac{t^2}{2})}}{t}$$

$t = \frac{0.5}{\sqrt{\frac{1/12}{n}}} = 6.928$

$$P(|Z| \ge t) \le \frac{\sqrt{(2/\pi)} e^{(-\frac{t^2}{2})}}{t}$$

$$\le 4.348 \times 10^{-12}$$

### Visual Description
Handwritten mathematical derivation showing the application of Mill's inequality. The final numerical result is boxed.

---
## Page 11
### Content
... Inequality

$Y_i \in [-1, 1]$ and $E[Y_i] = 0$

let $Y_i = X_i - \mu$

Note, $Y_i \in [-1, 1]$ and $E[Y_i] = 0$.

$|\bar{X}_n - \mu| \ge 0.5 = |(\frac{1}{n} \sum X_i) - \mu| \ge 0.5$
$= |\frac{1}{n} (\sum X_i - n\mu)| \ge 0.5$
$= |\frac{1}{n} \sum_{i=1}^n (X_i - \mu)| \ge 0.5$

Then $P(|\bar{Y}| \ge 0.5) \le 2 \exp(-\frac{2(16)^2(0.5)^2}{(1)^2(16)})$

$= 6.709 \times 10^{-4}$

$\min: 0 - \mu = -\mu$
$\max: 1 - \mu = 1 - \mu$
$\max - \min: (1 - \mu) - (-\mu) = 1$

### Visual Description
Handwritten mathematical derivation for Hoeffding's Inequality. The final result is boxed. There are some scratch notes at the bottom regarding the range calculation.

---
## Page 12
### Content
Estimate:
$P(|\bar{X} - \mu| \le 0.5) = 1.0$
$P(|\bar{X} - \mu| \ge 0.5) = 0$

Ranking the probabilities
1. Chebyshev: $(0.020833)$
2. Hoeffding: $(6.709 \times 10^{-4})$
3. CLT: $(4.262 \times 10^{-12})$
4. Mill's: $(4.348 \times 10^{-12})$

Program Estimate: $(0)$

### Visual Description
Handwritten list ranking different probability estimation methods (Chebyshev, Hoeffding, CLT, Mill's) by their calculated upper bounds, compared to a program estimate.

---
## Page 13
### Content
part (e)

```python
import numpy as np
rng = np.random.default_rng(42)

n = 16
mu = 0.5
trials = 1000

# Part (e): estimate P(|X_n - mu| <= 0.5) with Xi ~ U[0,1]
means = rng.uniform(0, 1, size=(trials, n)).mean(axis=1)
prob_estimate = (np.abs(means - mu) <= 0.5).mean()
print("Estimated probability:", prob_estimate) # approx 1.0
```

### Visual Description
A screenshot of a code editor with a dark theme is embedded in the slide. The code uses the `numpy` library to perform a Monte Carlo simulation to estimate a probability.

---
## Page 14
### Content
5) a) $N(\lambda, \lambda)$ since mean and variance of poisson are both $\lambda$.

(b) $X > 950 \rightarrow Z \ge \frac{950 - 900}{\sqrt{900}} = 1.667$

$P(Z \ge 1.667) = P(Z \le -1.667)$

$= 0.04779$

### Visual Description
Handwritten solution to a statistics problem. Part (a) identifies a Normal distribution approximation for a Poisson distribution. Part (b) calculates a Z-score and the corresponding probability. The final answer is boxed and highlighted in yellow.

---
## Page 15
### Content
$|X_n - X|^a \to 0$

WTS that $\forall \epsilon > 0, P(|X_n - X| \ge \epsilon) \to 0$

let $Y = |X_n - X|^a$

$P(|X_n - X| \ge \epsilon) =$
$P(|X_n - X|^a \ge \epsilon^a) \le \frac{E[|X_n - X|^a]}{\epsilon^a}$
$\underbrace{\hspace{15em}}_{\text{Markov inequality}}$

Since we know $E[|X_n - X|^a] \to 0$, the right-side goes to zero. So,
$P(|X_n - X| \ge \epsilon) \to 0$.

### Visual Description
Handwritten proof showing that convergence in $L^a$ norm implies convergence in probability using Markov's inequality.

---
## Page 16
### Content
(a) $|Y_n - 1| = |(1 + nX_n) - 1| = |nX_n|$

prob. $(1/n)$ when $X_n = 1 \to |Y_n - 1| = |n|$
prob. $(1 - 1/n)$ when $X_n = 0 \to |Y_n - 1| = 0$

So, when $n > \epsilon$, we have
$Pr(|Y_n - 1| > \epsilon) = \frac{1}{n} \to 0$

So, $Y_n \to 1$ in probability.

(b) let $Z_i := X_i^2$. Then $Z_i$ are i.i.d. w/ $E[Z_i] = E[X_i^2] = 1$. By the weak Law,
$Y_n = \frac{1}{n} \sum_{i=1}^n Z_i \xrightarrow{p} E[Z_1] = 1$

### Visual Description
Handwritten solutions for parts (a) and (b) of a problem regarding convergence in probability. Part (a) uses the definition of convergence in probability, and part (b) uses the Weak Law of Large Numbers. The conclusion for part (a) is boxed.

---
## Page 17
### Content
[unreadable] be the CDF of $Z_i$. Since $P(Z_i > 0)$, for $h > 0$,
$$F(h) = \int_0^h f(u) du.$$

For $t > 0$, $P(\min_{1 \le i \le n} Z_i > t) = (1 - F(t))^n$

Take $t = \frac{x}{n}$ (fixed $x > 0$).

$$P(X_n > x) = P(\min Z_i > \frac{x}{n}) = (1 - F(\frac{x}{n}))^n$$

Because $f(u) \to \lambda$ as $u \to 0$, for every $\epsilon > 0$, $\exists \delta > 0$ s.t. for $0 < u < \delta$,
$$\lambda - \epsilon \le f(u) \le \lambda + \epsilon.$$

Integrating from 0 to $u < \delta$ gives
$$(\lambda - \epsilon)h \le F(h) \le (\lambda + \epsilon)h$$
$$(\lambda - \epsilon)x \le n F(\frac{x}{n}) \le (\lambda + \epsilon)x$$
letting $\epsilon \downarrow 0$ yields $n F(x/n) \to \lambda x$.

### Visual Description
Handwritten mathematical derivation on a light yellow background. The text explains the convergence of the minimum of random variables to an exponential distribution.

---
## Page 18
### Content
[unreadable] Then, since $n a_n \to \lambda x$,
$$(1 - a_n)^n \to e^{-\lambda x}$$
so
$$P(X_n > x) \to e^{-\lambda x} \quad (x > 0)$$

limiting tail $P(Z > x) = e^{-\lambda x}$ corresponds to $Z \sim \text{Exp}(\lambda)$.

So, $X_n \implies \text{Exp}(\lambda)$

### Visual Description
Handwritten mathematical notes continuing the derivation from the previous page. It concludes that the sequence of random variables $X_n$ converges in distribution to an exponential distribution with parameter $\lambda$.

---
## Page 19
### Content
(Blank page)
### Visual Description
Blank page.

---
