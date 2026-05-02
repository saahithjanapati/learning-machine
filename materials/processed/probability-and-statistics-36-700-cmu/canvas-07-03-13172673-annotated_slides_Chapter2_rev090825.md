# canvas-07-03-13172673-annotated_slides_Chapter2_rev090825

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-07-03-13172673-annotated_slides_Chapter2_rev090825.pdf`
Duplicate equivalents: `canvas-07-03-13172673-annotated_slides_Chapter2_rev090825.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 43

## Page 1
### Content
**36700 CHAPTER 2: Random Variables and Distributions**

**Contents**
1. **Random Variables** (Page 2)
2. **Distribution Functions** (Page 6)
3. **Density Functions and Mass Functions** (Page 10)
4. **Some Famous Univariate Distributions** (Page 13)
    4.1 Famous Continuous Distributions (Page 14)
    4.2 Famous Discrete Distributions (Page 15)
5. **Multivariate Distributions** (Page 17)
    5.1 Marginal and Conditional Distributions (Page 19)
    5.2 Independence (Page 21)
6. **Calculating Probabilities of Events** (Page 23)
7. **Transformations of Random Variables** (Page 25)
    7.1 Discrete Case (Page 25)
    7.2 Continuous Case (Page 27)

Reading: Wasserman Sec 2.1-2.12. Recommend CB as an additional reference.

### Visual Description
The slide shows a table of contents for Chapter 2. Several sections are highlighted in yellow: "Random Variables", "Distribution Functions", "Density Functions and Mass Functions", and "Reading: Wasserman Sec 2.1-2.12". Sections 6 and 7 are highlighted in green. A blue handwritten note with a bracket and arrow pointing to sections 6 and 7 says "go through book examples".

---

## Page 2
### Content
### 1 Random Variables
Often we are interested in dealing with summaries of experiments rather than the actual outcome. For instance, suppose we flip a coin 100 times. Then $|\Omega| = 2^{100}$. But we may only be interested in a summary such as the number of heads. These summary statistics are called random variables.

**Definition:** A **random variable** is a function from a sample space $\Omega$ into the real numbers.
$$X : \Omega \to \mathbb{R}$$

One way of thinking about a random variable is as a mapping between a distribution on $\Omega$ to a distribution on the reals (i.e. the range of the random variable). Formally, we have that for some subset $A \subset \mathbb{R}$,
$$\mathbb{P}_X(X \in A) = \mathbb{P}(\{\omega \in \Omega : X(\omega) \in A\}).$$

$\mathbb{P}_X$ is usually called the **induced** probability distribution.

### Visual Description
The slide contains text defining random variables. The definition is highlighted in yellow. Blue handwritten annotations include the mapping $X : \Omega \to \mathbb{R}$, and labels for the formal equation: "event is a subset of $\mathbb{R}$" pointing to $(X \in A)$ and "event is a subset of $\Omega$" pointing to the set on the right. A red handwritten note says "$P_X$ defined in terms of $\mathbb{P}$" with an arrow pointing to the word "induced" which is circled in red.

---

## Page 3
### Content
**Revisit example in Chapter 1 sec 1.4:** There are two black balls and three white balls in a bag. Two balls are randomly drawn, without replacement, from the bag. What is the probability that the two balls have different colors?

We could define a random variable $X = \text{number of black balls drawn}$ and calculate the required probability as $\mathbb{P}(X = 1)$. $X$ can take value 0, 1, or 2 with probabilities:

$$\mathbb{P}_X(X = 0) = \mathbb{P}(\{\omega = WW\}) = 6/20$$
$$\mathbb{P}_X(X = 1) = \mathbb{P}(\{(\omega = WB) \cup (\omega = BW)\}) = 6/20 + 6/20$$
$$\mathbb{P}_X(X = 2) = \mathbb{P}(\{\omega = BB\}) = 2/20$$

### Visual Description
The slide provides a concrete example of a random variable. Blue handwritten annotations clarify the spaces: "Original sample space $\Omega = \{WW, (WB, BW), BB\}$" and "Induced sample space $\mathcal{X} = \{0, 1, 2\} \subset \mathbb{R}$". Arrows connect the outcomes in the original sample space to their corresponding values in the induced sample space.

---

## Page 4
### Content
**Example:** Toss a fair coin three times. Let $X$ be the number of heads. The sample space of the experiment is
$$\Omega = \{HHH, HHT, HTH, THH, TTH, THT, HTT, TTT\}.$$
All these outcomes are equally likely and disjoint. Then
$$\mathbb{P}_X(X = 0) = \frac{1}{8}$$
$$\mathbb{P}_X(X = 1) = \frac{3}{8}$$
$$\mathbb{P}_X(X = 2) = \frac{3}{8}$$
$$\mathbb{P}_X(X = 3) = \frac{1}{8}$$

### Visual Description
Text-only slide showing a coin-tossing example with calculated probabilities for the random variable $X$.

---

## Page 5
### Content
In some cases, we are able to write down $\mathbb{P}_X$ directly — whereas it might be difficult to first write down $\mathbb{P}$ and then compute the induced $\mathbb{P}_X$.

**Example:** Suppose we toss a coin with $\mathbb{P}(\text{heads}) = p$, and $\mathbb{P}(\text{tails}) = 1 - p$. The outcome of any particular toss has what we call a *Bernoulli distribution*.

The number of heads in $n$ tosses is a random variable which has an induced distribution:
$$\mathbb{P}_X(X = k) = \binom{n}{k} p^k (1 - p)^{n-k}.$$
This is known as the *binomial distribution*.

L. Wasserman: "At a certain point in most probability courses, the sample space is rarely mentioned anymore and we work directly with the random variables. But you should keep in mind that the sample space is really there, lurking in the background."

### Visual Description
The slide discusses the Binomial distribution. Blue handwritten annotations break down the formula: "# of such seq." points to the binomial coefficient $\binom{n}{k}$, and "prob of particular seq. with $k$ heads and $(n-k)$ tails" points to the $p^k(1-p)^{n-k}$ part of the expression.

---

## Page 6
### Content
### 2 Distribution Functions
Every random variable is associated with a cumulative distribution function (CDF).

**Definition:** The CDF of a random variable is:
$$F_X(x) = \mathbb{P}_X(X \le x), \quad \forall x.$$

**Revisit example in Chapter 1 sec 1.4:** There are two black balls and three white balls in a bag. Two balls are randomly drawn, without replacement, from the bag. Let $X = \text{number of black balls}$.

We already calculated
$\mathbb{P}_X(X = 0) = \mathbb{P}(\{\omega = WW\}) = 6/20 = 0.3$
$\mathbb{P}_X(X = 1) = \mathbb{P}(\{(\omega = WB) \cup (\omega = BW)\}) = 6/20 + 6/20 = 0.6$
$\mathbb{P}_X(X = 2) = \mathbb{P}(\{\omega = BB\}) = 2/20 = 0.1$

Then, the CDF is:

**Note:**
- right-continuous
- non-decreasing
- defined for all $x \in \mathbb{R}$

### Visual Description
The slide defines the CDF. Red handwritten notes distinguish between "$X$ random variable (use upper-case)" and "$x$ realized value (lower-case)". A blue note identifies the event as $(-\infty, x]$. There is a hand-drawn graph of the CDF, which is a step function starting at 0, jumping to 0.3 at $x=0$, to 0.9 at $x=1$, and to 1.0 at $x=2$. Blue annotations on the graph label the jump sizes (0.3, 0.6, 0.1) and note "cf. string w. some mass density (no point masses)".

---

## Page 7
### Content
More generally, any function $F$ is a CDF **if and only if**:
1. $\lim_{x \to -\infty} F(x) = 0$, and $\lim_{x \to \infty} F(x) = 1$.
2. It is a non-decreasing function of $x$.
3. The CDF is right-continuous, i.e. for every number $x_0$
$$\lim_{x \to x_0^+} F(x) = F(x_0).$$

The CDF of any random variable will satisfy these conditions. Check the examples above. Conversely, if $F$ satisfies these three conditions then there exists a random variable with this distribution.

**Example:** Suppose that for any real number $x$,
$$F_X(x) = \frac{1}{1 + \exp(-x)}.$$
Is this a valid CDF? That is, does there exist a random variable with this distribution?

We need to verify the three conditions.
1. Since $\exp(-x)$ tends to $\infty$ as $x \to -\infty$ and $0$ as $x \to \infty$, it is clear that the first property holds.
2. $\exp(-x)$ is a decreasing function of $x$, so $1 + \exp(-x)$ is a decreasing function of $x$ and so $F_X(x) = \frac{1}{1+\exp(-x)}$ is an increasing function of $x$.
3. Since it is differentiable it is clear that the distribution function is continuous not just right-continuous.

### Visual Description
The slide lists the properties of a CDF and provides an example. Blue handwritten notes include: "Recall def: $F_X(x) = \mathbb{P}_X(X \le x)$", "event $A_i = (-\infty, x_i]$", "sufficient and necessary cond. for a CDF", and "straightforward to prove (see e.g. AoS), harder to prove sufficiency". At the bottom, it says "Yes, F is a valid CDF."

---

## Page 8
### Content
**Continuous and Discrete Random Variables**
We say that $X$ is a **continuous** random variable if its CDF $F_X(x)$ is a continuous function of $x$, and analogously it is **discrete** if its CDF $F_X(x)$ is a step function of $x$, i.e., it can be written as a linear combination of indicators of intervals.

For a continuous random variable $X$, the probability that $X = x$ is 0 for every $x$. *Exercise:* Show this.

There are many ways to think about this, but here is the mathematically rigorous way: note that $\{X = x\} \subset \{x - \epsilon < X \le x\}$ for any $\epsilon > 0$, so that
$$\mathbb{P}(X = x) \le \mathbb{P}(x - \epsilon < X \le x) = F_X(x) - F_X(x - \epsilon).$$
Now we just note that the RHS tends to 0 since the CDF of a continuous RV is continuous.

### Visual Description
The slide defines continuous and discrete random variables. Blue handwritten notes include: "Equivalent def: If $X$ is discrete, it takes countably many values $x_1, x_2, \dots$". In the proof section, the set $\{X=x\}$ is labeled $A$ and $\{x-\epsilon < X \le x\}$ is labeled $B$, with a note "Recall: $A \subset B \implies P(A) \le P(B)$". Another note points to the RHS of the inequality saying "from def of CDF".

---
==End of PDF==
## Page 9
### Content
Ex. (A r.v. which is neither continuous nor discrete)

Toss a fair coin
If head, $X = -1$
If tail, Draw $X \sim \text{Unif}[0, 1]$

---
$\Omega = \{H\} \cup \{(T, x) : 0 \le x \le 1\}$

RV $X$ takes values in $\{-1\} \cup [0, 1]$

What's the CDF $F_X(x) \stackrel{\text{def}}{=} \mathbb{P}(X \le x)$?

[Plot of $F_X(x)$]

Write down the CDF!

### Visual Description
Handwritten notes on a grid background. Includes a plot of a Cumulative Distribution Function (CDF) for a mixed random variable. The plot shows a jump at $x = -1$ from $0$ to $1/2$, a constant value of $1/2$ between $x = -1$ and $x = 0$, a linear increase from $1/2$ to $1$ between $x = 0$ and $x = 1$, and a constant value of $1$ for $x > 1$.

---

## Page 10
### Content
**Identically distributed random variables** Two random variables $X$ and $Y$ are identically distributed iff for any set $A$,
$$\mathbb{P}_X(X \in A) = \mathbb{P}_Y(Y \in A).$$
[Handwritten: Def., hard to verify in practice]

[Handwritten: Useful result]
Equivalently, two random variables $X$ and $Y$ are identically distributed iff their distribution functions are equal, i.e. $F_X(x) = F_Y(x)$ for all $x$.

Note: **Identically distributed does not mean equal.** Toss a fair coin $n$ times, where $n$ is even, and let $X$ be the number of heads and $Y$ be the number of tails. These are identically distributed random variables but are clearly unequal since $Y = n - X$.
[Handwritten: Ex., statement about the distr, statement about the RVs themselves]

### Visual Description
Text slide with blue handwritten annotations. A double-headed arrow connects the formal definition of identically distributed random variables to the "useful result" involving CDFs.

---

## Page 11
### Content
# 3 Density Functions and Mass Functions
For a **discrete random variable**, we associate a **probability mass function** (pmf), which is given by:
$$f_X(x) = \mathbb{P}_X(X = x).$$
[Handwritten: Def. pmf]

We have seen several examples (number of black balls, number of heads, etc).

For a **continuous random variable**, this definition does not really make sense since the probability that $X = x$ is 0 for every $x$. Instead we define the **probability density function** $f_X$ as the function that satisfies:
$$F_X(x) = \mathbb{P}_X(X \le x) = \int_{-\infty}^x f_X(t) dt \quad \forall x.$$
[Handwritten: Def. pdf]

An alternative definition is:
$$f_X(x) = F'_X(x).$$

### Visual Description
Text slide with blue handwritten annotations labeling the definitions of PMF and PDF. A circle is drawn around the $f_X(t)$ term in the integral.

---

## Page 12
### Content
**Example:** the continuous Uniform Distribution on $[a, b]$ has pdf:
$$p_X(x) = \frac{1}{b-a} \mathbb{I}(x \in [a, b]).$$
We will use the notation $X \sim U[a, b]$.

What is the CDF?

[Handwritten plots for pdf and CDF]

### Visual Description
Text slide with two handwritten plots in blue and red. The top plot (pdf) shows a rectangular pulse between $a$ and $b$ with height $1/(b-a)$. The bottom plot (CDF) shows a function that is $0$ for $x < a$, increases linearly from $0$ to $1$ between $x = a$ and $x = b$, and remains at $1$ for $x > b$.

---

## Page 13
### Content
**Example:** the Gaussian Distribution is the classic bell-curve distribution. It has a location (mean) and scale (standard deviation) parameter, usually denoted as $\mu$ and $\sigma$. It has pdf
$$p_X(x) = \frac{1}{\sqrt{2\pi}\sigma} \exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right).$$

We will use the notation $X \sim N(\mu, \sigma^2)$.

We use $\Phi(x)$ to denote the CDF. Note that it cannot be obtained in closed form.

### Visual Description
Text-only slide.

---

## Page 14
### Content
# 4 Some Famous Univariate Distributions
Just as with CDFs, there is a one-to-one correspondence between PDFs/PMFs and functions that satisfy some basic properties: any function $f_X(x)$ is a PDF/PMF if and only if:
1. $f_X(x) \ge 0$ for all $x$.
2. $\sum_x f_X(x) = 1$ (pmf) in the discrete case or $\int_{-\infty}^\infty f_X(x) dx = 1$ (pdf) in the continuous case.

[Handwritten: Recall: 3 sufficient & necessary conditions]
[Handwritten: Sufficient & necessary conditions]

Because particular density/mass functions keep popping up in the probability and statistics fields, they were given names to make it easier to refer to them.

### Visual Description
Text slide with handwritten annotations in blue and red emphasizing that the listed properties are sufficient and necessary conditions.

---

## Page 15
### Content
## 4.1 Famous Continuous Distributions
**Continuous Uniform Distribution:** see above.

**Gaussian Distribution:** $X \sim N(\mu, \sigma^2)$ has PDF
$$p_X(x) = \frac{1}{\sqrt{2\pi}\sigma} \exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right).$$
A standard Normal distribution has $\mu = 0, \sigma = 1$.

The Normal distribution is a "location-scale" family of distribution, because
1 - if $X \sim N(\mu, \sigma^2)$, then the shifted and rescaled RV $Z = (X - \mu)/\sigma$ is standard Normal
2 - conversely, if $Z$ is a standard normal RV, then $\forall (a, b), X = a + bZ \sim N(a, b^2)$

### Visual Description
Text-only slide.

---

## Page 16
### Content
## 4.2 Famous Discrete Distributions
**Discrete Uniform Distribution:** On $k$ categories $\{x_1, x_2, \dots, x_k\}$ the distribution
$$p_X(x) = \frac{1}{k} \text{ if } x \in \{x_1, \dots, x_k\},$$
is the discrete uniform distribution on $\{x_1, x_2, \dots, x_k\}$. For example, fair coin or die.

What is the CDF? [Handwritten: exercise! (remember right-continuous, defined for all $x$)]

**The Bernoulli Distribution:** This is the distribution of a coin toss when the coin has bias $p$, we use $X = 1$ to denote heads and $X = 0$ to denote tails. The Bernoulli PMF is:
$$p_X(x) = p^x(1-p)^{1-x}, \quad x \in \{0, 1\}.$$
We will use the notation $X \sim Ber(p)$.

Ex (connection to the indicator function of an event; see also AOS p.27):

### Visual Description
Text slide with blue handwritten annotations prompting the student to find the CDF as an exercise and reminding them of the properties of a CDF.
## Page 17
### Content
**Important ex.**

$\Omega$ sample space
Event $A \subset \Omega$
$\omega \in A$

Define an **indicator function** for $A$:
$$I_A(\omega) = \begin{cases} 1 & \text{if } \omega \in A \\ 0 & \text{otherwise} \end{cases}$$

Let $Y = I_A(\omega)$ (discrete R.V.)
Then, $Y \sim \text{Ber}(p_A)$ where $p_A = \mathbb{P}(\omega \in A)$

### Visual Description
Hand-drawn notes on a grid background. A blue box represents the sample space $\Omega$. Inside is an oval representing event $A$, containing a point $\omega$. Arrows point to these elements. The text is handwritten in blue ink.

---
## Page 18
### Content
**Q:** Recall RV $X: \Omega \to \mathbb{R}$
Give an example of $\Omega, \mathbb{P}$ s.t. $X \sim \text{Ber}(p)$ for fixed $p \in [0, 1]$

(See AoS p. 27)

### Visual Description
Text-only slide. Handwritten notes in blue ink on a grid background.

---
## Page 19
### Content
**The Binomial Distribution:** This is the distribution of the number of heads in $n$ tosses. $X \sim \text{Bin}(n, p)$ has PMF:
$$p_X(x) = \binom{n}{x} p^x (1-p)^{n-x} \mathbb{I}(x \in \{0, 1, \dots, n\}).$$
Note that $\text{Ber}(p) = \text{Bin}(1, p)$.

**The Geometric Distribution:** This is the distribution of the number of tosses to see 1 head. $X \sim \text{Geom}(p)$ has pmf:
$$p_X(x) = p(1-p)^{x-1} \quad x \in \{1, 2, \dots\}.$$

**The Poisson Distribution:** The Poisson distribution is discrete with pmf:
$$\mathbb{P}(X = k) = \exp(-\lambda) \frac{\lambda^k}{k!} \quad x \in \{0, 1, \dots\}.$$
(Or use the indicator function.) We will use the notation $\text{Poi}(\lambda)$.

*Handwritten notes:*
- Often used to model counts of rare events and arrival processes.
- If we have **indep. arrivals**, then # arrivals in any unit is Poisson distr, $\lambda = \text{rate} \cdot \text{"area"}$.
- $\text{Poi}(\lambda)$ as limit of Binomial $(n, p)$ as $n \to \infty, n \cdot p \to \lambda$ fixed.

### Visual Description
Typed text on a grid background with blue handwritten annotations and checkmarks. At the bottom, there is a hand-drawn diagram of a line divided into "$n$ bins".

---
## Page 20
### Content
**TABLE OF COMMON DISTRIBUTIONS**
[From Casella-Berger]

*Handwritten labels:*
- **discrete R.V.s** (top section)
- **Continuous R.V.s** (bottom section)

*Highlighted distributions (circled in red):*
- Bernoulli $(p)$
- Normal $(0, 1)$
- Uniform
- Exponential $(\lambda)$

*Other distributions shown in the chart:*
- Geometric $(p)$
- Negative binomial $(n, p)$
- Poisson $(\lambda)$
- Binomial $(n, p)$
- Beta-binomial $(n, \alpha, \beta)$
- Hypergeometric $(M, N, K)$
- Discrete uniform
- Lognormal
- Beta $(\alpha, \beta)$
- Gamma $(r, \lambda)$
- Chi-squared $(\nu)$
- Cauchy
- F $(\nu_1, \nu_2)$
- t $(\nu)$
- Weibull $(\gamma, \lambda)$
- Double exponential

**Relationships among common distributions.** Solid lines represent transformations and special cases, dashed lines represent limits. Adapted from Leemis (1986).

### Visual Description
A complex flowchart from a textbook showing the mathematical relationships between various probability distributions. It is annotated with blue handwriting and red circles. A blue line separates the discrete distributions at the top from the continuous ones at the bottom.

---
## Page 21
### Content
### 5 Multivariate Distributions

* Suppose we have a pair of **discrete random variables** $X, Y$ (definitions below extend to more than two RVs). We can define their **joint PMF** by:
$$f_{XY}(x, y) = \mathbb{P}(X = x \cap Y = y) = \mathbb{P}(X = x \text{ and } Y = y) = \mathbb{P}(X = x, Y = y).$$

* In the **continuous case** the **joint PDF** is the non-negative function $f_{XY}$ that integrates to give us probabilities, i.e.
$$\iint_{(x,y) \in \mathcal{S}} f_{XY}(x, y) dx dy = \mathbb{P}((X, Y) \in \mathcal{S})$$
for any set $\mathcal{S} \subset \mathbb{R} \times \mathbb{R}$.

* **Example:** Suppose $(X, Y)$ are jointly uniform over the unit square. Then it has density:
$$f_{XY}(x, y) = 1,$$
if $0 \le x \le 1$ and $0 \le y \le 1$; otherwise $f_{XY}(x, y) = 0$.

$\rightarrow$ Check that it is a density.
$\rightarrow$ Calculate the probability that rain falls in the pond in my garden.

### Visual Description
Typed text on a grid background. Key terms like "Multivariate Distributions", "joint PMF", and "joint PDF" are highlighted in yellow.

---
## Page 22
### Content
We defined joint PMF and PDF. What about joint CDF?

$$F(x, y) = \mathbb{P}(X \le x, Y \le y)$$

### Visual Description
Typed text at the top of a grid background, followed by a large blue handwritten formula in the center.

---
## Page 23
### Content
### 5.1 Marginal and Conditional Distributions

In the **continuous case**, we can obtain the **marginal PDF of $X$** by summing/integrating the joint PDF of $(X, Y)$:
$$f_X(x) = \int f_{XY}(x, y) dy,$$
and similarly for $Y$. For **discrete RVs**, replace the integral sign by a summation sign over all values of $y$. This generalizes to more than two RVs.

### Visual Description
Text-only slide. Typed text on a grid background with blue underlines on the integral formula.

---
## Page 24
### Content
For **continuous RVs**, the conditional distribution of $X$ given $Y$ can be obtained as:
$$f_{X|Y}(x | y) = f_{XY}(x, y) / f_Y(y).$$

For **discrete RVs**,
$$\mathbb{P}(Y = y | X = x) = p(y | x) = \frac{p(x, y)}{p(x)} = \frac{\mathbb{P}(Y = y, X = x)}{\mathbb{P}(X = x)}.$$

Check that conditionals are proper densities.
$\rightarrow$ *exercise*

### Visual Description
Typed text on a grid background with blue underlines. A blue handwritten note "exercise" with an arrow points to the final instruction.
## Page 25
### Content
**5.2 Independence of RVs**

$X$ and $Y$ are independent iff for every pair of sets $A, B$ we have:
$$\mathbb{P}(X \in A, Y \in B) = \mathbb{P}(X \in A)\mathbb{P}(Y \in B)$$
*(Handwritten note: Def. - hard to verify)*

$\Updownarrow$

or equivalently iff, for all $(x, y)$,
$$f_{XY}(x, y) = f_X(x)f_Y(y),$$
*(Handwritten note: Useful result!)*

$\Updownarrow$

or equivalently iff, for all $(x, y)$, (use conditionals)
$$f_{Y|X}(y|x) = f_Y(y) \text{ assuming } f_X(x) > 0$$

$\Downarrow$

or equivalently iff, for all $(x, y)$ and some pair of functions $h, g$
$$f_{XY}(x, y) = h(x)g(y).$$

More generally, a set of RVs $X_1, \dots, X_n$ are mutually independent iff
$$f_{X_1X_2\dots X_n}(x_1, x_2, \dots, x_n) = \prod_{i=1}^n f_{X_i}(x_i).$$

### Visual Description
The slide contains printed text with several blue handwritten annotations and arrows. Blue arrows indicate logical equivalence ($\Updownarrow$) or implication ($\Downarrow$) between different definitions of independence. Key formulas are highlighted in yellow.

---

## Page 26
### Content
**Example:** Suppose $X$ and $Y$ have density:
$$f_{XY}(x, y) = 2 \exp(-(x + 2y)),$$
for $x \ge 0, y \ge 0$. Are $X$ and $Y$ independent?

*(Handwritten solution:)*
Yes. $f_{X,Y}(x,y) = \underbrace{2e^{-x}}_{h(x)} \cdot \underbrace{e^{-2y}}_{g(y)}$

### Visual Description
The slide presents a printed example problem with a handwritten solution in blue ink. The solution shows the joint density factored into two functions, one of $x$ and one of $y$, to prove independence.

---

## Page 27
### Content
**6 Calculating Probabilities of Events**

We can calculate the probability that $X$ is in some set $\mathcal{S}$ as:
$$\mathbb{P}(X \in \mathcal{S}) = \int_{x \in \mathcal{S}} f_X(x)dx \quad \text{or} \quad \sum_{x \in \mathcal{S}} f_X(x)$$
for continuous and discrete random variables, respectively. *(Handwritten note: Recall:)*

For example, if $\mathcal{S}$ is the interval $[a, b]$ then,
$$\mathbb{P}(a < X \le b) = \int_a^b f_X(x)dx \quad \text{or} \quad \sum_{x>a}^{x=b} \mathbb{P}(X = x)$$
for continuous and discrete random variables, respectively, where the sum runs over the points $x$ for which $\mathbb{P}(X = x)$ is non-zero. We can also use the CDF to obtain the required probability:
$$\mathbb{P}(a < X \le b) = F_X(b) - F_X(a),$$
which is valid for both discrete and continuous random variables.

This extends to multivariate random variables. For example, in the continuous bivariate case,
$$\mathbb{P}((X, Y) \in \mathcal{S}) = \iint_{(x,y) \in \mathcal{S}} f_{XY}(x, y) dx dy$$
for any set $\mathcal{S} \subset \mathbb{R} \times \mathbb{R}$. The double integral would be replaced by a double summation in the discrete case.

If the required probability involves $n$ random variables, then you need to integrate or sum over a joint pmf/pdf, which involves $n$ integrations or summations.

*(Handwritten note: See textbook for examples!)*

### Visual Description
The slide contains printed text with yellow highlights on key formulas. There are blue handwritten annotations, including "Recall:" and a note pointing to the textbook for more examples.

---

## Page 28
### Content
**Example:** Suppose $(X, Y)$ are jointly uniform over the unit square, i.e. with joint PDF
$$f_{XY}(x, y) = 1,$$
if $0 \le x \le 1$ and $0 \le y \le 1$; otherwise $f_{XY}(x, y) = 0$. To calculate the probability $\mathbb{P}(X \le 1/4, Y \le 1/2)$, we integrate the joint density:
$$\mathbb{P}(X \le 1/4, Y \le 1/2) = \int_0^{1/4} \int_0^{1/2} 1 dx dy = \frac{1}{8}.$$

### Visual Description
Text-only slide.

---

## Page 29
### Content
**Pointe**

**7 Transformations of Random Variables**

Suppose $X$ has pdf/pmf $f_X$ and CDF $F_X$. Let $Y = r(X)$, for some function $r$. *(Handwritten note: known func.)* For instance, $r(X)$ might be something like $X^2$ or $\exp(X)$. How do I compute the pdf/pmf or CDF of $Y$? The first thing you should figure out is whether $Y$ is discrete or continuous, because methods are different for one and the other, and what values it can take.

**7.1 Discrete Case**

If $X$ is discrete and $Y$ is discrete, then the pmf of $Y$ is given by:
$$\mathbb{P}(Y = y) = \mathbb{P}(r(X) = y) = \mathbb{P}(X \in r^{-1}(y)).$$
*(Handwritten note: inverse? Def. $r^{-1}(y) = \{x : r(x) = y\}$)*

**Example:** Suppose $X \in \{-1, 0, 1\}$, with probabilities $1/4, 1/2$ and $1/4$, and consider the random variable $Y = X^2$.

*(Handwritten solution:)*
$Y = 0, 1$ discrete RV
Find $\mathbb{P}(Y=y)$ for $y=0$ or $y=1$

$y=0: \mathbb{P}(Y=0) = \mathbb{P}(X^2=0) = \mathbb{P}(X=0) = 1/2$

$y=1: \mathbb{P}(Y=1) = \mathbb{P}(X^2=1) = \mathbb{P}(X=1 \text{ or } X=-1) = \mathbb{P}(X=1) + \mathbb{P}(X=-1) = 1/4 + 1/4 = 1/2$
*(Note: disjoint events)*

### Visual Description
The slide contains printed text with yellow highlights and extensive blue handwritten notes. The notes define the inverse set and provide a step-by-step calculation for the discrete transformation example.

---

## Page 30
### Content
You can also have the case $X$ continuous and $Y$ discrete, for example $X$ is standard Normal, and $Y$ is defined as $Y = 0$ if $X < 0$, and $Y = 1$ if $X \ge 0$. Again, all you need to do is calculate $\mathbb{P}(Y = y)$ for all the possible values $y$ that $Y$ can take, and express $\mathbb{P}(Y = y)$ in terms of $X$. Here,

*(Handwritten note: PMF of Y)*
$$\begin{cases} \mathbb{P}(Y = 0) = \mathbb{P}(X < 0) = 1/2 \\ \mathbb{P}(Y = 1) = \mathbb{P}(X \ge 0) = 1/2. \end{cases}$$

### Visual Description
The slide contains printed text and a blue handwritten calculation for the PMF of $Y$. To the right, there is a blue handwritten sketch of a standard normal distribution curve with the area to the left of the y-axis (where $X < 0$) shaded with diagonal lines.

---

## Page 31
### Content
**7.2 Continuous Case**

Transformations for continuous RVs are substantially more involved, and there are several methods.

**The CDF method** Easiest method but result not always tractable.

*(Handwritten steps:)*
1. For each $y$, find the set $A_y \stackrel{\text{def}}{=} \{x : r(x) \le y\}$
2. Find the CDF, $F_Y(y) \stackrel{\text{def}}{=} \mathbb{P}(Y \le y) = \mathbb{P}(A_y) = \int_{x \in A_y} f_X(x) dx$
3. Then differentiate $F_Y(y)$ wrt $y$ to obtain the pdf of $Y$. i.e. $f_Y(y) = F_Y'(y)$.

Once you have determined that $Y$ is continuous with values $y$ in some set, calculate its CDF $F_Y(y) = \mathbb{P}(Y \le y)$ for all $y$ in that set, by expressing $\mathbb{P}(Y \le y)$ in terms of $X$ and using the distribution of $X$ to complete the derivation, i.e.:
$$\mathbb{P}(Y \le y) = \mathbb{P}(r(X) \le y) = \mathbb{P}(X \in r^{-1}(y)),$$
then differentiate $F_Y(y)$ wrt $y$ to obtain the pdf of $Y$. i.e. $f_Y(y) = F_Y'(y)$.

**Example 1:** Let $X = U[-1, 1]$ and $Y = X^2$. *(Handwritten note: Find PDF of Y)*

*(Handwritten notes:)*
$Y$ cont r.v., $Y \in [0, 1]$
Think: what does the pdf look like? (guess)
*   If $y \le 0$: $F_Y(y) = 0, f_Y(y) = 0$
*   If $y \ge 1$: $F_Y(y) = 1, f_Y(y) = 0$

### Visual Description
The slide contains printed text with yellow highlights and blue handwritten annotations. The annotations outline a three-step process for the CDF method and start an example problem, including a small sketch of a coordinate system with a guessed PDF shape.

---

## Page 32
### Content
*(Handwritten notes:)*

For $y \in [0, 1]$ (or $0 < y \le 1$):
$$F_Y(y) = \mathbb{P}(Y \le y) = \mathbb{P}(X^2 \le y)$$
$$= \mathbb{P}(X \in [-\sqrt{y}, \sqrt{y}]) \quad \text{set } A_y$$
$$= \int_{-\sqrt{y}}^{\sqrt{y}} \underbrace{f_X(t)}_{=1/2} dt = \int_0^{\sqrt{y}} dt = \sqrt{y}$$

PDF: $f_Y(y) = F_Y'(y) = \frac{d}{dy}(\sqrt{y})$
$$= \frac{1}{2\sqrt{y}} \quad \text{for } y \in [0, 1]$$

### Visual Description
This page consists entirely of blue handwritten calculations on a light gray grid background, completing the example from the previous page. It derives the CDF and then the PDF for the transformation $Y = X^2$ where $X$ is uniformly distributed on $[-1, 1]$.

---
## Page 33
### Content
Compare HW 2
$$
\begin{cases}
X \sim \text{Unif}[-5, 1] \\
Y = X^4
\end{cases}
$$
Find CDF and PDF of $Y$.

$Y$ continuous R.V. $Y \in [0, 5^4]$

**Hint:**
Find CDF $F_Y(y)$ for different intervals:
$$
\begin{cases}
y < 0 \\
y \in [0, 1) \\
y \in [1, 5^4) \\
y \geq 5^4
\end{cases}
$$

### Visual Description
Handwritten notes in blue ink on a light grid background. The text outlines a probability problem involving a uniform distribution and a transformation.

---
## Page 34
### Content
**Example 2:** The Cauchy distribution is the distribution of the ratio of two independent standard Gaussian random variables, i.e., if I draw $X_1 \sim N(0, 1)$ and $X_2 \sim N(0, 1)$ independently and compute $Y = X_1/X_2$ it will have a Cauchy distribution, with pdf:
$$f_Y(y) = \frac{1}{\pi(1 + y^2)}$$

Let’s prove this (to practice transformations and probability calculations). First, we determine that $Y = r(X_1, X_2) = X_1/X_2$ is continuous with values in $(-\infty, +\infty)$. So we need to calculate the PDF for all $y$:
$$F_Y(y) = P(Y \leq y) = P(r(X_1, X_2) \leq y) = \iint_{A_y} f(x_1, x_2) dx_1 dx_2$$
where $A_y = \{(x_1, x_2) : r(x_1, x_2) \leq y\}$.

*Handwritten annotations:*
$Y$ continuous RV, $Y \in \mathbb{R}$
$A_y = \{(u, v) : \frac{u}{v} \leq y\}$

Know: Joint distribution of $X_1$ and $X_2$
$$f_{X_1, X_2}(u, v) = f_{X_1}(u) \cdot f_{X_2}(v) = \frac{1}{\sqrt{2\pi}} \exp\left(-\frac{u^2}{2}\right) \times \frac{1}{\sqrt{2\pi}} \exp\left(-\frac{v^2}{2}\right)$$
($X_1, X_2$ indep RVs)

$$F_Y(y) \stackrel{\text{def}}{=} P(Y \leq y) = \iint_{u/v \leq y} f_{X_1, X_2}(u, v) du dv$$

For $v \in \mathbb{R}$:
$$
\begin{cases}
v > 0 & u \leq yv \\
v \leq 0 & u \geq yv
\end{cases}
$$
$$= \int_{v=0}^{+\infty} \left( \int_{u=-\infty}^{yv} f_{X_1, X_2}(u, v) du \right) dv + \int_{-\infty}^0 \left( \int_{yv}^\infty f_{X_1, X_2}(u, v) du \right) dv$$

### Visual Description
A mix of typed text and blue/red handwritten annotations on a grid background. The slide details the derivation of the Cauchy distribution PDF from the ratio of two normal variables.

---
## Page 35
### Content
[From Casella-Berger]

**Section 2.4 DIFFERENTIATING UNDER AN INTEGRAL SIGN**

**Theorem 2.4.1 (Leibnitz's Rule)** If $f(x, \theta)$, $a(\theta)$, and $b(\theta)$ are differentiable with respect to $\theta$, then
$$\frac{d}{d\theta} \int_{a(\theta)}^{b(\theta)} f(x, \theta) dx = f(b(\theta), \theta) \frac{d}{d\theta} b(\theta) - f(a(\theta), \theta) \frac{d}{d\theta} a(\theta) + \int_{a(\theta)}^{b(\theta)} \frac{\partial}{\partial\theta} f(x, \theta) dx.$$

Notice that if $a(\theta)$ and $b(\theta)$ are constant, we have a special case of Leibnitz's Rule:
$$\frac{d}{d\theta} \int_{a}^{b} f(x, \theta) dx = \int_{a}^{b} \frac{\partial}{\partial\theta} f(x, \theta) dx.$$

Thus, in general, if we have the integral of a differentiable function over a finite range, differentiation of the integral poses no problem. If the range of integration is infinite, however, problems can arise.

Note that the interchange of derivative and integral in the above equation equates a partial derivative with an ordinary derivative. Formally, this must be the case since the left-hand side is a function of only $\theta$, while the integrand on the right-hand side is a function of both $\theta$ and $x$.

The question of whether interchanging the order of differentiation and integration is justified is really a question of whether limits and integration can be interchanged, since a derivative is a special kind of limit. Recall that if $f(x, \theta)$ is differentiable, then
$$\frac{\partial}{\partial\theta} f(x, \theta) = \lim_{\delta \to 0} \frac{f(x, \theta + \delta) - f(x, \theta)}{\delta},$$
so we have
$$\int_{-\infty}^{\infty} \frac{\partial}{\partial\theta} f(x, \theta) dx = \int_{-\infty}^{\infty} \lim_{\delta \to 0} \left[ \frac{f(x, \theta + \delta) - f(x, \theta)}{\delta} \right] dx,$$
while
$$\frac{d}{d\theta} \int_{-\infty}^{\infty} f(x, \theta) dx = \lim_{\delta \to 0} \int_{-\infty}^{\infty} \left[ \frac{f(x, \theta + \delta) - f(x, \theta)}{\delta} \right] dx.$$

Therefore, if we can justify the interchanging of the order of limits and integration, differentiation under the integral sign will be justified. Treatment of this problem in full generality will, unfortunately, necessitate the use of measure theory, a topic that will not be covered in this book. However, the statements and conclusions of some important results can be given. The following theorems are all corollaries of Lebesgue's Dominated Convergence Theorem (see, for example, Rudin 1976).

**Theorem 2.4.2** Suppose the function $h(x, y)$ is continuous at $y_0$ for each $x$, and there exists a function $g(x)$ satisfying
i. $|h(x, y)| \leq g(x)$ for all $x$ and $y$,
ii. $\int_{-\infty}^{\infty} g(x) dx < \infty$.
Then
$$\lim_{y \to y_0} \int_{-\infty}^{\infty} h(x, y) dx = \int_{-\infty}^{\infty} \lim_{y \to y_0} h(x, y) dx.$$

### Visual Description
Text-only slide. It is a scan of a textbook page (Casella-Berger, page 69) discussing Leibnitz's Rule and the conditions for differentiating under an integral sign.

---
## Page 36
### Content
**The Jacobian Method.** There is one case when things simplify: **suppose that the transformation $r$ is invertible**, $s = r^{-1}$, with $s$ differentiable, then we have the formula:
$$f_Y(y) = f_X(s(y)) \left| \frac{ds(y)}{dy} \right|,$$
where the last term is the determinant of the matrix of the derivatives of the old variables with respect to the new variables. This formula is valid for univariate and multivariate random variables.

*Handwritten annotations:*
Recall previous example:
$X = U[-1, 1]$, $Y = X^2 = r(X)$
[Graph of $y=x^2$ on the interval $[-1, 1]$ is shown. It is noted as "invertible for $x \geq 0$"]
We used the CDF method to find the PDF of $Y$.

**Exercise**
Now use the Jacobian method.
$X \sim U[0, 1]$ and $Y = r(X) = X^2$
Note: $Y$ continuous RV, $Y \in [0, 1]$
$f_Y(y) = 0$ for $y < 0$ and $y > 1$
For $0 \leq y < 1$:
$s(y) = r^{-1}(y) = \sqrt{y}$
$f_Y(y) = f_X(\sqrt{y}) \cdot \left| \frac{ds}{dy} \right| = 1 \cdot \frac{1}{2} y^{-1/2} = \frac{1}{2\sqrt{y}}$

### Visual Description
Typed text with blue handwritten annotations on a grid background. Includes a small hand-drawn graph of a parabola $y=x^2$ on the interval $[-1, 1]$ to illustrate invertibility.

---
## Page 37
### Content
**Order Statistics**

Assume i.i.d. random sample $X_1, \dots, X_n \sim F$
The order statistics are rvs that satisfy $X_{(1)} \leq X_{(2)} \leq \dots \leq X_{(n)}$
In particular, let $U = X_{(n)} = \max\{X_1, \dots, X_n\}$
$V = X_{(1)} = \min\{X_1, \dots, X_n\}$

**Calculate cdf's and densities of $U$ and $V$.**

1) Note: $U \leq u$ iff $X_i \leq u$ for all $i$
Thus, $F_U(u) = P(U \leq u) = P(X_1 \leq u) P(X_2 \leq u) \dots P(X_n \leq u) = [F(u)]^n$
$f_U(u) = n f(u) [F(u)]^{n-1}$

2) Similarly, $V \geq v$ iff $X_i \geq v$ for all $i$
Thus, $F_V(v) = 1 - P(V > v) = 1 - [1 - F(v)]^n$
$f_V(v) = n f(v) [1 - F(v)]^{n-1}$

**Ex. of application:** Lifetime of system with $n$ comps connected in parallel vs. in series.

[Diagram of parallel circuit]
$\max\{X_1, \dots, X_n\}$

[Diagram of series circuit]
$\min\{X_1, \dots, X_n\}$

### Visual Description
Handwritten notes in black, blue, and red ink. The slide explains order statistics, specifically the maximum and minimum of a sample, and provides their CDF and PDF derivations. At the bottom, there are simple circuit diagrams representing parallel and series configurations.

---
## Page 38
### Content
**Reminders**

* **HW 1** due on Thursday by 3pm (submit pdf-file via Gradescope)
* **Office hours:** Mon - Wed (see Canvas)

### Visual Description
Handwritten notes in blue ink on a grid background. The slide contains administrative reminders about homework and office hours.

---
## Page 39
### Content
**36-700: Homework Set 1**
Due Thursday September 4 at 3 pm — no late homework
Submit on Gradescope

The point of the homework is to practice what you have learned in class. You should feel free to collaborate on the homework, but the solutions that you write up and submit has to be your own. It is strictly forbidden to search the web for prior homeworks, or to use ChatGPT or equivalent to do the homework for you.

*Handwritten annotation:* Unless otherwise stated, could use set algebra and calculus in derivations.

1. **DeMorgan’s laws:** Draw Venn diagrams to show that $(A \cup B)^c = A^c \cap B^c$ and $(A \cap B)^c = A^c \cup B^c$.
2. Use the **axioms of probability** to prove all five statements in Wasserman Equation 1.1 on page 6. (Note that these are some properties of $P$ that are *derived* from the axioms, and not part of the axioms themselves)
3. **Union bound:** Consider events $A_1, \dots, A_n$. Prove (using the axioms of probability) that $P(\bigcup_{i=1}^n A_i) \leq \sum_{i=1}^n P(A_i)$.
*Hint:* Define a sequence of events $B_n$ for $n = 1, 2, \dots$, where $B_1 = A_1$ and $B_n = A_n \setminus \bigcup_{i=1}^{n-1} A_i$ for $n > 2$. Argue that these events are disjoint. Show that $P(\bigcup_{n=1}^\infty A_n) = P(\bigcup_{n=1}^\infty B_n)$, and use the countable additivity property of probability measures.
4. The Monty Hall problem: Do **Exercise 1.10** in Wasserman’s book page 14.
5. Do **Exercise 1.20** in Wasserman’s book page 16.
6. Suppose that A and B are independent events. Show that A and $B^c$ are independent events.
7. Suppose that A and B are disjoint events. Give a necessary and sufficient condition for them to be independent. *Handwritten annotation:* See lecture notes.
8. Show that if $P(A) = 0$ or $P(A) = 1$ then A is independent of every other event. Show that if A is independent of itself then $P(A)$ is either 0 or 1.

### Visual Description
A typed homework assignment sheet with some blue handwritten annotations and yellow highlighting on key terms like "axioms of probability", "Union bound", and "disjoint events".

---
## Page 40
### Content
16 1. Probability

18. Suppose $k$ events form a partition of the sample space $\Omega$, i.e., they are disjoint and $\bigcup_{i=1}^k A_i = \Omega$. Assume that $P(B) > 0$. Prove that if $P(A_1|B) < P(A_1)$ then $P(A_i|B) > P(A_i)$ for some $i = 2, \dots, k$.
19. Suppose that 30 percent of computer owners use a Macintosh, 50 percent use Windows, and 20 percent use Linux. Suppose that 65 percent of the Mac users have succumbed to a computer virus, 82 percent of the Windows users get the virus, and 50 percent of the Linux users get the virus. We select a person at random and learn that her system was infected with the virus. What is the probability that she is a Windows user?
20. A box contains 5 coins and each has a different probability of showing heads. Let $p_1, \dots, p_5$ denote the probability of heads on each coin. Suppose that $p_1 = 0, p_2 = 1/4, p_3 = 1/2, p_4 = 3/4$ and $p_5 = 1$. Let $H$ denote "heads is obtained" and let $C_i$ denote the event that coin $i$ is selected.
(a) Select a coin at random and toss it. Suppose a head is obtained. What is the posterior probability that coin $i$ was selected ($i = 1, \dots, 5$)? In other words, find $P(C_i|H)$ for $i = 1, \dots, 5$. *Annotation:* Use Bayes.
(b) Toss the coin again. What is the probability of another head? In other words find $P(H_2|H_1)$ where $H_j = \text{"heads on toss } j\text{."}$
(c) Find $P(C_i|B_4)$ where $B_4 = \text{"first head is obtained on toss 4."}$ *Annotation:* $\{TTTH\}$

*Handwritten annotations for problem 20:*
Know DGP: $P(C_i), i=1, \dots, 5$; $P(H|C_i)$
For (b): $P(H_2|H_1) = \frac{P(H_1, H_2)}{P(H_1)}$
Condition on $C_i$, use law of total prob and cond. indep:
$\sum_{i=1}^5 P(H_1, H_2 | C_i) P(C_i) = \sum_{i=1}^5 P(H_1 | C_i) \cdot P(H_2 | C_i) P(C_i)$

21. (Computer Experiment.) Suppose a coin has probability $p$ of falling heads up...
22. (Computer Experiment.) Suppose we flip a coin $n$ times and let $p$ denote the probability of heads...

### Visual Description
A scan of a textbook page containing probability problems. There are extensive blue handwritten annotations around problem 20, providing hints and formulas for solving parts (a) and (b).
## Page 41
### Content
6 1. Probability

There are many interpretations of $\mathbb{P}(A)$. The two common interpretations are frequencies and degrees of beliefs. In the frequency interpretation, $\mathbb{P}(A)$ is the long run proportion of times that $A$ is true in repetitions. For example, if we say that the probability of heads is 1/2, we mean that if we flip the coin many times then the proportion of times we get heads tends to 1/2 as the number of tosses increases. An infinitely long, unpredictable sequence of tosses whose limiting proportion tends to a constant is an idealization, much like the idea of a straight line in geometry. The degree-of-belief interpretation is that $\mathbb{P}(A)$ measures an observer's strength of belief that $A$ is true. In either interpretation, we require that Axioms 1 to 3 hold. The difference in interpretation will not matter much until we deal with statistical inference. There, the differing interpretations lead to two schools of inference: the frequentist and the Bayesian schools. We defer discussion until Chapter 11.

One can derive many properties of $\mathbb{P}$ from the axioms, such as:

$$
\begin{aligned}
\mathbb{P}(\emptyset) &= 0 \\
A \subset B &\implies \mathbb{P}(A) \leq \mathbb{P}(B) \\
0 \leq \mathbb{P}(A) &\leq 1 \\
\mathbb{P}(A^c) &= 1 - \mathbb{P}(A) \\
A \cap B = \emptyset &\implies \mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B). \quad (1.1)
\end{aligned}
$$

A less obvious property is given in the following Lemma.

**1.6 Lemma.** For any events $A$ and $B$,
$$\mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B) - \mathbb{P}(AB).$$

**PROOF.** Write $A \cup B = (A B^c) \cup (AB) \cup (A^c B)$ and note that these events are disjoint. Hence, making repeated use of the fact that $\mathbb{P}$ is additive for disjoint events, we see that
$$
\begin{aligned}
\mathbb{P}(A \cup B) &= \mathbb{P}((A B^c) \cup (AB) \cup (A^c B)) \\
&= \mathbb{P}(A B^c) + \mathbb{P}(AB) + \mathbb{P}(A^c B) \\
&= \mathbb{P}(A B^c) + \mathbb{P}(AB) + \mathbb{P}(A^c B) + \mathbb{P}(AB) - \mathbb{P}(AB) \\
&= \mathbb{P}((A B^c) \cup (AB)) + \mathbb{P}((A^c B) \cup (AB)) - \mathbb{P}(AB) \\
&= \mathbb{P}(A) + \mathbb{P}(B) - \mathbb{P}(AB). \quad \blacksquare
\end{aligned}
$$

**1.7 Example.** Two coin tosses. Let $H_1$ be the event that heads occurs on toss 1 and let $H_2$ be the event that heads occurs on toss 2. If all outcomes are

### Visual Description
Text-heavy slide containing mathematical definitions, a lemma, and a proof. A yellow vertical highlight appears on the left side next to the list of probability properties.

---

## Page 42
### Content
14 1. Probability

3. Let $\Omega$ be a sample space and let $A_1, A_2, \dots$, be events. Define $B_n = \bigcup_{i=n}^\infty A_i$ and $C_n = \bigcap_{i=n}^\infty A_i$.
   (a) Show that $B_1 \supset B_2 \supset \dots$ and that $C_1 \subset C_2 \subset \dots$.
   (b) Show that $\omega \in \bigcap_{n=1}^\infty B_n$ if and only if $\omega$ belongs to an infinite number of the events $A_1, A_2, \dots$.
   (c) Show that $\omega \in \bigcup_{n=1}^\infty C_n$ if and only if $\omega$ belongs to all the events $A_1, A_2, \dots$ except possibly a finite number of those events.

4. Let $\{A_i : i \in I\}$ be a collection of events where $I$ is an arbitrary index set. Show that
   $$\left(\bigcup_{i \in I} A_i\right)^c = \bigcap_{i \in I} A_i^c \quad \text{and} \quad \left(\bigcap_{i \in I} A_i\right)^c = \bigcup_{i \in I} A_i^c$$
   Hint: First prove this for $I = \{1, \dots, n\}$.

5. Suppose we toss a fair coin until we get exactly two heads. Describe the sample space $S$. What is the probability that exactly $k$ tosses are required?

6. Let $\Omega = \{0, 1, \dots\}$. Prove that there does not exist a uniform distribution on $\Omega$ (i.e., if $\mathbb{P}(A) = \mathbb{P}(B)$ whenever $|A| = |B|$, then $\mathbb{P}$ cannot satisfy the axioms of probability).

7. Let $A_1, A_2, \dots$ be events. Show that
   $$\mathbb{P}\left(\bigcup_{n=1}^\infty A_n\right) \leq \sum_{n=1}^\infty \mathbb{P}(A_n).$$
   Hint: Define $B_n = A_n - \bigcup_{i=1}^{n-1} A_i$. Then show that the $B_n$ are disjoint and that $\bigcup_{n=1}^\infty A_n = \bigcup_{n=1}^\infty B_n$.

8. Suppose that $\mathbb{P}(A_i) = 1$ for each $i$. Prove that
   $$\mathbb{P}\left(\bigcap_{i=1}^\infty A_i\right) = 1.$$

9. For fixed $B$ such that $\mathbb{P}(B) > 0$, show that $\mathbb{P}(\cdot|B)$ satisfies the axioms of probability.

10. You have probably heard it before. Now you can solve it rigorously. It is called the "Monty Hall Problem." A prize is placed at random

### Visual Description
Text-only slide containing a list of exercises (numbered 3 through 10) related to probability theory. A small yellow highlight is present next to the start of exercise 10.

---

## Page 43
### Content
1.10 Exercises 15

behind one of three doors. You pick a door. To be concrete, let's suppose you always pick door 1. Now Monty Hall chooses one of the other two doors, opens it and shows you that it is empty. He then gives you the opportunity to keep your door or switch to the other unopened door. Should you stay or switch? Intuition suggests it doesn't matter. The correct answer is that you should switch. Prove it. It will help to specify the sample space and the relevant events carefully. Thus write $\Omega = \{(\omega_1, \omega_2) : \omega_i \in \{1, 2, 3\}\}$ where $\omega_1$ is where the prize is and $\omega_2$ is the door Monty opens.

11. Suppose that $A$ and $B$ are independent events. Show that $A^c$ and $B^c$ are independent events.

12. There are three cards. The first is green on both sides, the second is red on both sides and the third is green on one side and red on the other. We choose a card at random and we see one side (also chosen at random). If the side we see is green, what is the probability that the other side is also green? Many people intuitively answer 1/2. Show that the correct answer is 2/3.

13. Suppose that a fair coin is tossed repeatedly until both a head and tail have appeared at least once.
    (a) Describe the sample space $\Omega$.
    (b) What is the probability that three tosses will be required?

14. Show that if $\mathbb{P}(A) = 0$ or $\mathbb{P}(A) = 1$ then $A$ is independent of every other event. Show that if $A$ is independent of itself then $\mathbb{P}(A)$ is either 0 or 1.

15. The probability that a child has blue eyes is 1/4. Assume independence between children. Consider a family with 3 children.
    (a) If it is known that at least one child has blue eyes, what is the probability that at least two children have blue eyes?
    (b) If it is known that the youngest child has blue eyes, what is the probability that at least two children have blue eyes?

16. Prove Lemma 1.14.

17. Show that
    $$\mathbb{P}(ABC) = \mathbb{P}(A|BC)\mathbb{P}(B|C)\mathbb{P}(C).$$

### Visual Description
Text-only slide continuing the list of exercises (numbered 10 through 17). A yellow vertical highlight is present next to the text of the Monty Hall problem.
