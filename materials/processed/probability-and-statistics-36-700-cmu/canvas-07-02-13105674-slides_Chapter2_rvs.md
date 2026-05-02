# canvas-07-02-13105674-slides_Chapter2_rvs

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-07-02-13105674-slides_Chapter2_rvs.pdf`
Duplicate equivalents: `canvas-07-02-13105674-slides_Chapter2_rvs.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 30

## Page 1
### Content
**36700 CHAPTER 2: Random Variables and Distributions**

**Contents**
1. **Random Variables** (2)
2. **Distribution Functions** (6)
3. **Density Functions and Mass Functions** (10)
4. **Some Famous Univariate Distributions** (13)
    4.1 Famous Continuous Distributions (14)
    4.2 Famous Discrete Distributions (15)
5. **Multivariate Distributions** (17)
    5.1 Marginal and Conditional Distributions (19)
    5.2 Independence (21)
6. **Calculating Probabilities of Events** (23)
7. **Transformations of Random Variables** (25)
    7.1 Discrete Case (25)
    7.2 Continuous Case (27)

Reading: Wasserman Sec 2.1-2.12. Recommend CB as an additional reference.

1
### Visual Description
Text-only slide. Table of contents for Chapter 2.

---

## Page 2
### Content
### 1 Random Variables

Often we are interested in dealing with summaries of experiments rather than the actual outcome. For instance, suppose we flip a coin 100 times. Then $|\Omega| = 2^{100}$. But we may only be interested in a summary such as the number of heads. These summary statistics are called random variables.

**Definition:** A **random variable** is a function from a sample space $\Omega$ into the real numbers.

One way of thinking about a random variable is as a mapping between a distribution on $\Omega$ to a distribution on the reals (i.e. the range of the random variable). Formally, we have that for some subset $A \subset \mathbb{R}$,
$$\mathbb{P}_X(X \in A) = \mathbb{P}(\{\omega \in \Omega : X(\omega) \in A\}).$$
$\mathbb{P}_X$ is usually called the **induced** probability distribution.

2
### Visual Description
Text-only slide.

---

## Page 3
### Content
**Revisit example in Chapter 1 sec 1.4:** There are two black balls and three white balls in a bag. Two balls are randomly drawn, without replacement, from the bag. What is the probability that the two balls have different colors?

We could define a random variable $X = \text{number of black balls drawn}$ and calculate the required probability as $\mathbb{P}(X = 1)$. $X$ can take value 0, 1, or 2 with probabilities:

$\mathbb{P}_X(X = 0) = \mathbb{P}(\{\omega = WW\}) = 6/20$
$\mathbb{P}_X(X = 1) = \mathbb{P}(\{(\omega = WB) \cup (\omega = BW)\}) = 6/20 + 6/20$
$\mathbb{P}_X(X = 2) = \mathbb{P}(\{\omega = BB\}) = 2/20$

$\square$

3
### Visual Description
Text-only slide.

---

## Page 4
### Content
**Example:** Toss a fair coin three times. Let $X$ be the number of heads. The sample space of the experiment is
$$\Omega = \{HHH, HHT, HTH, THH, TTH, THT, HTT, TTT\}.$$
All these outcomes are equally likely and disjoint. Then
$$\mathbb{P}_X(X = 0) = \frac{1}{8} \quad \mathbb{P}_X(X = 1) = \frac{3}{8}$$
$$\mathbb{P}_X(X = 2) = \frac{3}{8} \quad \mathbb{P}_X(X = 3) = \frac{1}{8}.$$

$\square$

4
### Visual Description
Text-only slide.

---

## Page 5
### Content
In some cases, we are able to write down $\mathbb{P}_X$ directly — whereas it might be difficult to first write down $\mathbb{P}$ and then compute the induced $\mathbb{P}_X$.

**Example:** Suppose we toss a coin with $\mathbb{P}(\text{heads}) = p$, and $\mathbb{P}(\text{tails}) = 1 - p$. The outcome of any particular toss has what we call a *Bernoulli distribution*.

The number of heads in $n$ tosses is a random variable which has an induced distribution:
$$\mathbb{P}_X(X = k) = \binom{n}{k} p^k (1 - p)^{n-k}.$$
This is known as the *binomial distribution*. $\square$

L. Wasserman: "At a certain point in most probability courses, the sample space is rarely mentioned anymore and we work directly with the random variables. But you should keep in mind that the sample space is really there, lurking in the background."

5
### Visual Description
Text-only slide.

---

## Page 6
### Content
### 2 Distribution Functions

Every random variable is associated with a cumulative distribution function (CDF).

**Definition:** The CDF of a random variable is:
$$F_X(x) = \mathbb{P}_X(X \le x), \quad \forall x.$$

**Revisit example in Chapter 1 sec 1.4:** There are two black balls and three white balls in a bag. Two balls are randomly drawn, without replacement, from the bag. Let $X = \text{number of black balls}$.

We already calculated
$\mathbb{P}_X(X = 0) = \mathbb{P}(\{\omega = WW\}) = 6/20$
$\mathbb{P}_X(X = 1) = \mathbb{P}(\{(\omega = WB) \cup (\omega = BW)\}) = 6/20 + 6/20$
$\mathbb{P}_X(X = 2) = \mathbb{P}(\{\omega = BB\}) = 2/20$

Then, the CDF is:

6
### Visual Description
Text-only slide.

---

## Page 7
### Content
More generally, any function $F$ is a CDF if and only if:
1. $\lim_{x \to -\infty} F(x) = 0$, and $\lim_{x \to \infty} F(x) = 1$.
2. It is a non-decreasing function of $x$.
3. The CDF is right-continuous, i.e. for every number $x_0$
$$\lim_{x \to x_0^+} F(x) = F(x_0).$$

The CDF of any random variable will satisfy these conditions. Check the examples above. Conversely, if $F$ satisfies these three conditions then there exists a random variable with this distribution.

**Example:** Suppose that for any real number $x$,
$$F_X(x) = \frac{1}{1 + \exp(-x)}.$$
Is this a valid CDF? That is, does there exist a random variable with this distribution?

We need to verify the three conditions.
1. Since, $\exp(-x)$ tends to $\infty$ as $x \to -\infty$ and $0$ as $x \to \infty$, it is clear that the first property holds.
2. $\exp(-x)$ is a decreasing function of $x$, so $1 + \exp(-x)$ is a decreasing function of $x$ and so $F_X(x) = \frac{1}{1 + \exp(-x)}$ is an increasing function of $x$.
3. Since, it is differentiable it is clear that the distribution function is continuous not just right-continuous. $\square$

7
### Visual Description
Text-only slide.

---

## Page 8
### Content
**Continuous and Discrete Random Variables** We say that $X$ is a **continuous** random variable if its CDF $F_X(x)$ is a continuous function of $x$, and analogously it is **discrete** if its CDF $F_X(x)$ is a step function of $x$, i.e., it can be written as a linear combination of indicators of intervals.

For a continuous random variable $X$, the probability that $X = x$ is 0 for every $x$. *Exercise:* Show this.

There are many ways to think about this, but here is the mathematically rigorous way: note that $\{X = x\} \subset \{x - \epsilon < X \le x\}$ for any $\epsilon > 0$, so that
$$\mathbb{P}(X = x) \le \mathbb{P}(x - \epsilon < X \le x) = F_X(x) - F_X(x - \epsilon).$$
Now we just note that the RHS tends to 0 since the CDF of a continuous RV is continuous.

8
### Visual Description
Text-only slide. The bottom section of text (the rigorous explanation) is written in blue font.

---
## Page 9
### Content
**Identically distributed random variables** Two random variables $X$ and $Y$ are identically distributed iff for any set $A$,
$$\mathbb{P}_X(X \in A) = \mathbb{P}_Y(Y \in A).$$

Equivalently, two random variables $X$ and $Y$ are identically distributed iff their distribution functions are equal, i.e. $F_X(x) = F_Y(x)$ for all $x$.

Note: Identically distributed does not mean equal. Toss a fair coin $n$ times, where $n$ is even, and let $X$ be the number of heads and $Y$ be the number of tails. These are identically distributed random variables but are clearly unequal since $Y = n - X$.

9
### Visual Description
Text-only slide.

---
## Page 10
### Content
### 3 Density Functions and Mass Functions
For a **discrete random variable**, we associate a **probability mass function** (pmf), which is given by:
$$f_X(x) = \mathbb{P}_X(X = x).$$

We have seen several examples (number of black balls, number of heads, etc).

For a **continuous random variable**, this definition does not really make sense since the probability that $X = x$ is 0 for every $x$. Instead we define the **probability density function** $f_X$ as the function that satisfies:
$$F_X(x) = \mathbb{P}_X(X \le x) = \int_{-\infty}^x f_X(t)dt \quad \forall x.$$

An alternative definition is:
$$f_X(x) = F'_X(x).$$

10
### Visual Description
Text-only slide.

---
## Page 11
### Content
**Example:** the continuous Uniform Distribution on $[a, b]$ has pdf:
$$p_X(x) = \frac{1}{b - a} \mathbb{I}(x \in [a, b]).$$

We will use the notation $X \sim U[a, b]$.

What is the CDF?

11
### Visual Description
Text-only slide.

---
## Page 12
### Content
**Example:** the Gaussian Distribution is the classic bell-curve distribution. It has a location (mean) and scale (standard deviation) parameter, usually denoted as $\mu$ and $\sigma$. It has pdf
$$p_X(x) = \frac{1}{\sqrt{2\pi}\sigma} \exp \left( -\frac{(x - \mu)^2}{2\sigma^2} \right).$$

We will use the notation $X \sim N(\mu, \sigma^2)$.

We use $\Phi(x)$ to denote the CDF. Note that it cannot be obtained in closed form.

12
### Visual Description
Text-only slide.

---
## Page 13
### Content
### 4 Some Famous Univariate Distributions
Just as with CDFs, there is a one-to-one correspondence between PDFs/PMFs and functions that satisfy some basic properties: any function $f_X(x)$ is a PDF/PMF if and only if:
1. $f_X(x) \ge 0$ for all $x$.
2. $\sum_x f_X(x) = 1$ (pmf) in the discrete case or $\int_{-\infty}^\infty f_X(x)dx = 1$ (pdf) in the continuous case.

Because particular density/mass functions keep popping up in the probability and statistics fields, they were given names to make it easier to refer to them.

13
### Visual Description
Text-only slide.

---
## Page 14
### Content
### 4.1 Famous Continuous Distributions
**Continuous Uniform Distribution:** see above.

**Gaussian Distribution:** $X \sim N(\mu, \sigma^2)$ has PDF
$$p_X(x) = \frac{1}{\sqrt{2\pi}\sigma} \exp \left( -\frac{(x - \mu)^2}{2\sigma^2} \right).$$

A standard Normal distribution has $\mu = 0, \sigma = 1$.

The Normal distribution is a "location-scale" family of distribution, because

1 - if $X \sim N(\mu, \sigma^2)$, then the shifted and rescaled RV $Z = (X - \mu)/\sigma$ is standard Normal

2 - conversely, if $Z$ is a standard normal RV, then $\forall (a, b), X = a + bZ \sim N(a, b^2)$

14
### Visual Description
Text-only slide.

---
## Page 15
### Content
### 4.2 Famous Discrete Distributions
**Discrete Uniform Distribution:** On $k$ categories $\{x_1, x_2, \dots, x_k\}$ the distribution
$$p_X(x) = \frac{1}{k} \text{ if } x \in \{x_1, \dots, x_k\},$$
is the discrete uniform distribution on $\{x_1, x_2, \dots, x_k\}$. For example, fair coin or die.

What is the CDF?

**The Bernoulli Distribution:** This is the distribution of a coin toss when the coin has bias $p$, we use $X = 1$ to denote heads and $X = 0$ to denote tails. The Bernoulli PMF is:
$$p_X(x) = p^x(1 - p)^{1-x}, x \in \{0, 1\}.$$

We will use the notation $X \sim \text{Ber}(p)$.

Ex (connection to the indicator function of an event; see also AOS p.27):

15
### Visual Description
Text-only slide.

---
## Page 16
### Content
**The Binomial Distribution:** This is the distribution of the number of heads in $n$ tosses. $X \sim \text{Bin}(n, p)$ has PMF:
$$p_X(x) = \binom{n}{x} p^x(1 - p)^{n-x} \mathbb{I}(x \in \{0, 1, \dots, n\}).$$

Note that $\text{Ber}(p) = \text{Bin}(1, p)$.

**The Geometric Distribution:** This is the distribution of the number of tosses to see 1 head. $X \sim \text{Geom}(p)$ has pmf:
$$p_X(x) = p(1 - p)^{x-1} \quad x \in \{1, 2, \dots\}.$$

**The Poisson Distribution:** The Poisson distribution is discrete with pmf:
$$\mathbb{P}(X = k) = \exp(-\lambda) \frac{\lambda^k}{k!} \quad x \in \{0, 1, \dots\}.$$

(Or use the indicator function.) We will use the notation $\text{Poi}(\lambda)$.

16
### Visual Description
Text-only slide.

---
## Page 17
### Content
**TABLE OF COMMON DISTRIBUTIONS**

[A complex flowchart showing relationships between various probability distributions including: Geometric, Negative binomial, Poisson, Normal, Lognormal, Cauchy, F, t, Chi-squared, Exponential, Weibull, Double exponential, Gamma, Beta, Uniform, Bernoulli, Binomial, Beta-binomial, Hypergeometric, and Discrete uniform.]

**Relationships among common distributions.** Solid lines represent transformations and special cases, dashed lines represent limits. Adapted from Leemis (1986).

### Visual Description
A detailed flowchart diagram from a textbook (page 627) illustrating the connections between common probability distributions. Arrows are labeled with mathematical transformations (e.g., $\sum X_i$, $e^X$, $\log X$, $X^2$) or limit conditions (e.g., $n \to \infty$, $\alpha = \beta = 1$).

---

## Page 18
### Content
### 5 Multivariate Distributions

* Suppose we have a pair of **discrete random variables** $X, Y$ (definitions below extend to more than two RVs). We can define their **joint** PMF by:
$$f_{XY}(x, y) = \mathbb{P}(X = x \cap Y = y) = \mathbb{P}(X = x \text{ and } Y = y) = \mathbb{P}(X = x, Y = y).$$

* In the **continuous case** the joint PDF is the non-negative function $f_{XY}$ that integrates to give us probabilities, i.e.
$$\iint_{(x,y) \in \mathcal{S}} f_{XY}(x, y) \, dx \, dy = \mathbb{P}((X, Y) \in \mathcal{S})$$
for any set $\mathcal{S} \subset \mathbb{R} \times \mathbb{R}$.

* **Example:** Suppose $(X, Y)$ are jointly uniform over the unit square. Then it has density:
$$f_{XY}(x, y) = 1,$$
if $0 \le x \le 1$ and $0 \le y \le 1$; otherwise $f_{XY}(x, y) = 0$.

$\rightarrow$ Check that it is a density.

$\rightarrow$ Calculate the probability that rain falls in the pond in my garden.

### Visual Description
Text on a grid background.

---

## Page 19
### Content
We defined joint PMF and PDF. What about joint CDF?

### Visual Description
Text-only slide.

---

## Page 20
### Content
### 5.1 Marginal and Conditional Distributions

In the **continuous case**, we can obtain the marginal PDF of $X$ by summing/integrating the joint PDF of $(X, Y)$:
$$f_X(x) = \int f_{XY}(x, y) \, dy,$$
and similarly for $Y$. For **discrete RVs**, replace the integral sign by a summation sign over all values of $y$. This generalizes to more than two RVs.

### Visual Description
Text on a grid background.

---

## Page 21
### Content
For **continuous RVs**, the conditional distribution of $X$ given $Y$ can be obtained as:
$$f_{X|Y}(x | y) = f_{XY}(x, y) / f_Y(y).$$

For **discrete RVs**,
$$\mathbb{P}(Y = y | X = x) = p(y|x) = \frac{p(x, y)}{p(x)} = \frac{\mathbb{P}(Y = y, X = x)}{\mathbb{P}(X = x)}.$$

Check that conditionals are proper densities.

### Visual Description
Text on a grid background.

---

## Page 22
### Content
### 5.2 Independence

$X$ and $Y$ are independent iff for every pair of sets $A, B$ we have:
$$\mathbb{P}(X \in A, Y \in B) = \mathbb{P}(X \in A)\mathbb{P}(Y \in B)$$

or equivalently iff, for all $(x, y)$,
$$f_{XY}(x, y) = f_X(x)f_Y(y),$$

or equivalently iff, for all $(x, y)$,
(use conditionals)

or equivalently iff, for all $(x, y)$ and some pair of functions $h, g$
$$f_{XY}(x, y) = h(x)g(y).$$

More generally, a set of RVs $X_1, \dots, X_n$ are mutually independent iff
$$f_{X_1 X_2 \dots X_n}(x_1, x_2, \dots, x_n) = \prod_{i=1}^n f_{X_i}(x_i).$$

### Visual Description
Text on a grid background.

---

## Page 23
### Content
**Example:** Suppose $X$ and $Y$ have density:
$$f_{XY}(x, y) = 2 \exp(-(x + 2y)),$$
for $x \ge 0, y \ge 0$. Are $X$ and $Y$ independent?

### Visual Description
Text on a grid background.

---

## Page 24
### Content
### 6 Calculating Probabilities of Events

We can calculate the probability that $X$ is in some set $\mathcal{S}$ as:
$$\mathbb{P}(X \in \mathcal{S}) = \int_{x \in \mathcal{S}} f_X(x) \, dx \quad \text{or} \quad \sum_{x \in \mathcal{S}} f_X(x)$$
for continuous and discrete random variables, respectively. For example, if $\mathcal{S}$ is the interval $[a, b]$ then,
$$\mathbb{P}(a < X \le b) = \int_a^b f_X(x) \, dx \quad \text{or} \quad \sum_{x > a}^{x=b} \mathbb{P}(X = x)$$
for continuous and discrete random variables, respectively, where the sum runs over the points $x$ for which $\mathbb{P}(X = x)$ is non-zero. We can also use the CDF to obtain the required probability:
$$\mathbb{P}(a < X \le b) = F_X(b) - F_X(a),$$
which is valid for both discrete and continuous random variables.

This extends to multivariate random variables. For example, in the continuous bivariate case,
$$\mathbb{P}((X, Y) \in \mathcal{S}) = \iint_{(x,y) \in \mathcal{S}} f_{XY}(x, y) \, dx \, dy$$
for any set $\mathcal{S} \subset \mathbb{R} \times \mathbb{R}$. The double integral would be replaced by a double summation in the discrete case.

If the required probability involves $n$ random variables, then you need to integrate or sum over a joint pmf/pdf, which involves $n$ integrations or summations.

### Visual Description
Text on a grid background.
## Page 25
### Content
**Example:** Suppose $(X, Y)$ are jointly uniform over the unit square, i.e. with joint PDF
$$f_{XY}(x, y) = 1,$$
if $0 \le x \le 1$ and $0 \le y \le 1$; otherwise $f_{XY}(x, y) = 0$. To calculate the probability $\mathbb{P}(X \le 1/4, Y \le 1/2)$, we integrate the joint density:
$$\mathbb{P}(X \le 1/4, Y \le 1/2) = \int_0^{1/4} \int_0^{1/2} 1 \, dx \, dy = \frac{1}{8}.$$
$\square$

### Visual Description
Text-only slide. There is a small square symbol (QED) at the end of the example.

---
## Page 26
### Content
# 7 Transformations of Random Variables
Suppose $X$ has pdf/pmf $f_X$ and CDF $F_X$. Let $Y = r(X)$, for some function $r$. For instance, $r(X)$ might be something like $X^2$ or $\exp(X)$. How do I compute the pdf/pmf or CDF of $Y$? The first thing you should figure out is whether $Y$ is discrete or continuous, because methods are different for one and the other, and what values it can take.

## 7.1 Discrete Case
If $X$ is discrete and $Y$ is discrete, then the pmf of $Y$ is given by:
$$\mathbb{P}(Y = y) = \mathbb{P}(r(X) = y) = \mathbb{P}(X \in r^{-1}(y)).$$

**Example:** Suppose $X \in \{-1, 0, 1\}$, with probabilities $1/4, 1/2$ and $1/4$, and consider the random variable $Y = X^2$.

### Visual Description
Text-only slide.

---
## Page 27
### Content
You can also have the case $X$ continuous and $Y$ discrete, for example $X$ is standard Normal, and $Y$ is defined as $Y = 0$ if $X < 0$, and $Y = 1$ if $X \ge 0$. Again, all you need to do is calculate $\mathbb{P}(Y = y)$ for all the possible values $y$ that $Y$ can take, and express $\mathbb{P}(Y = y)$ in terms of $X$. Here,
$$\mathbb{P}(Y = 0) = \mathbb{P}(X < 0) = 1/2$$
$$\mathbb{P}(Y = 1) = \mathbb{P}(X \ge 0) = 1/2.$$

### Visual Description
Text-only slide.

---
## Page 28
### Content
## 7.2 Continuous Case
Transformations for continuous RVs are substantially more involved, and there are several methods.

**The CDF method** Easiest method but result not always tractable.

Once you have determined that $Y$ is continuous with values $y$ in some set, calculate its CDF $F_Y(y) = \mathbb{P}(Y \le y)$ for all $y$ in that set, by expressing $\mathbb{P}(Y \le y)$ in terms of $X$ and using the distribution of $X$ to complete the derivation, i.e.:
$$\mathbb{P}(Y \le y) = \mathbb{P}(r(X) \le y) = \mathbb{P}(X \in r^{-1}(y)),$$
then differentiate $F_Y(y)$ wrt $y$ to obtain the pdf of $Y$. i.e. $f_Y(y) = F'_Y(y)$.

**Example 1:** Let $X = U[-1, 1]$ and $Y = X^2$.

### Visual Description
Text-only slide.

---
## Page 29
### Content
**Example 2:** The Cauchy distribution is the distribution of the ratio of two independent standard Gaussian random variables, i.e., if I draw $X_1 \sim N(0, 1)$ and $X_2 \sim N(0, 1)$ independently and compute $Y = X_1/X_2$ it will have a Cauchy distribution, with pdf:
$$f_Y(y) = \frac{1}{\pi(1 + y^2)}.$$
Let's prove this (to practice transformations and probability calculations). First, we determine that $Y = r(X_1, X_2) = X_1/X_2$ is continuous with values in $(-\infty, +\infty)$. So we need to calculate the PDF for all $y$:
$$F_Y(y) = \mathbb{P}(Y \le y) = \mathbb{P}(r(X_1, X_2) \le y) = \iint_{A_y} f(x_1, x_2) \, dx_1 \, dx_2$$
where $A_y = \{(x_1, x_2) : r(x_1, x_2) \le y\}$.

### Visual Description
Text-only slide.

---
## Page 30
### Content
**The Jacobian Method.** There is one case when things simplify: **suppose that the transformation $r$ is invertible**, $s = r^{-1}$, with $s$ differentiable, then we have the formula:
$$f_Y(y) = f_X(s(y)) \left| \frac{ds(y)}{dy} \right|,$$
where the last term is the determinant of the matrix of the derivatives of the old variables with respect to the new variables. This formula is valid for univariate and multivariate random variables.

### Visual Description
Text-only slide.
