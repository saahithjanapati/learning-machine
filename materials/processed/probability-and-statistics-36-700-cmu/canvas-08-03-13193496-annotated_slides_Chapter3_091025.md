# canvas-08-03-13193496-annotated_slides_Chapter3_091025

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-08-03-13193496-annotated_slides_Chapter3_091025.pdf`
Duplicate equivalents: `canvas-08-03-13193496-annotated_slides_Chapter3_091025.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 44

## Page 1
### Content
# 36700 CHAPTER 3: Expectation, Variance, Covariance

### Contents
1. **Expectation** (1)
   1.1 Properties of Expectations (4)
   1.2 Inequalities for Expectations (13)
2. **Variance and Covariance** (15)
3. **Conditional Expectation and Variance** (20)
4. **Moment generating functions** (28)

Reading: Wasserman Sec 3.1-3.6, Sec 4.2. Recommend CB as an additional reference.

---

## 1 Expectation

**Def.** $\mathbb{E}[X] = \int x dF_X(x) = \int x f_X(x) dx$ or $\sum_x x f_X(x)$, for continuous and discrete RVs, respectively.
*Handwritten note:* "fixed quantity"
*Handwritten note:* "assuming $\mathbb{E}(X)$ is well-defined, i.e. $\int_X |x| dF_X(x) < \infty$"

**Note:** $\mu$ is a "statistical functional"
$$\mu = T(F)$$
*Handwritten note:* "function of a function", "CDF"

Suppose you can repeat the experiment many times in order to obtain many copies of the random variable $X_1, \dots, X_n$. In this case, the expectation is $\mathbb{E}(X) \approx \frac{1}{n} \sum_{i=1}^n X_i$. This is called the **law of large numbers** and we will revisit this in a few lectures.

*Handwritten note:* $\hat{\mu} = T(\hat{F}_n)$
*Handwritten note:* "RV.", "empirical CDF (more later)"

### Visual Description
The slide is a lecture note on a grid background. It contains a table of contents and the start of Section 1 on Expectation. There are several blue and yellow handwritten annotations. A blue circle highlights the integral definition of expectation. A yellow highlight is on "Conditional Expectation and Variance" in the contents. Another yellow highlight is on "Def." and the integral formula. A blue arrow points from the law of large numbers formula to a handwritten formula for the empirical mean as a functional of the empirical CDF.

---

## Page 2
### Content
### Examples:
1. Assume that $X$ takes only 2 values, 1 and 2, with equal probability. Then if we sample $X$ many times, the average of the observed values will be approximately....
.

Now if $X$ takes values 1 and 2 with probabilities 1/4 and 3/4, the average of many repetitions will be larger since $X$ takes value 2 more often. Specifically, the average will be ....

It may be a bit disconcerting that the mean is not a value that $X$ can take, but this happens often with discrete RVs.

### Visual Description
Text-only slide.

---

## Page 3
### Content
2. Suppose that $X \sim U[-2, 4]$.
$\mathbb{E}[X] = ?$

Check other examples in the notes, as well as the definitions/terminology for moments and central moments.

### Visual Description
Text-only slide.

---

## Page 4
### Content
### 1.1 Properties of Expectations

**Expectation of transformation** Let $Y = r(X)$. Then
$$\mathbb{E}[Y] = \mathbb{E}[r(X)] = \int_x r(x) dF_X(x).$$

"Rule of the lazy statistician" because we can obtain the mean of $Y = r(X)$ without having to derive its distribution.

*Handwritten note:* $\stackrel{def}{=} \int y dF_Y(y)$
*Handwritten note:* "need pdf/pmf of Y"

### Visual Description
The slide contains printed text about the expectation of a transformation. A blue line connects $\mathbb{E}[Y]$ to a handwritten definition using the distribution of $Y$, noting that the "lazy" rule avoids needing the pdf/pmf of $Y$.

---

## Page 5
### Content
**Example:** Let $X$ take values 1 and 2 with equal probability.
$\mathbb{E}(X^2) =$
*Handwritten calculation:* $1^2 \cdot \frac{1}{2} + 2^2 \cdot \frac{1}{2} = \frac{5}{2}$
*Handwritten note:* "new RV" (pointing to $X^2$)

**Example:** Calculate 4th moments of $X$ as a HW exercise:
$\mathbb{E}(X^4) =$

### Visual Description
The slide contains two examples. The first example has blue handwritten steps showing the calculation of the second moment. The second example is left as an exercise.

---

## Page 6
### Content
**Careful:** $r(\mathbb{E}[X]) \neq \mathbb{E}[r(X)]$.

**Ex.** Suppose $X \sim U[0, 1]$
Let $Y = r(X) = X^2$

$$\mathbb{E}(X^2) = \int_0^1 x^2 \frac{f(x)}{1} dx = \frac{1}{3}$$
$$(\mathbb{E}(X))^2 = (\frac{1}{2})^2 = \frac{1}{4}$$
$$\frac{1}{3} > \frac{1}{4}$$

**For any convex func. $r(x)$, $\mathbb{E}(r(X)) \geq r(\mathbb{E}(X))$**
**Jensen's eq.**

### Visual Description
The slide is mostly handwritten in blue ink. It includes a counter-example to show that the expectation of a function is not the function of the expectation. It features a graph in the top right corner showing a convex curve $y=x^2$ on the interval $[0, 1]$, with points marked at $x=1/2$ and $x=1$. A large blue circle with a ">" sign compares $1/3$ and $1/4$.

---

## Page 7
### Content
The rule of the lazy statistician rule applies to multivariate distributions too:
$$\mathbb{E}[r(X, Y, Z)] = \iiint r(x, y, z) f_{X,Y,Z}(x, y, z) dx dy dz.$$

E.g. let $r(x, y, z) = xy/z$.
$\mathbb{E}[r(X, Y, Z)] = ?$

**Note:** remember that there are as many integral or summation signs as there are RVs involved in the calculation.

### Visual Description
Text-only slide with some blue underlining and a circle around the joint density function $f_{X,Y,Z}(x, y, z)$.

---

## Page 8
### Content
**Expectation of indicator function:** let $Y = \mathbb{I}_A(X)$, i.e., $Y = 1$ if $X \in A$ and 0 otherwise.

$$\mathbb{E}[Y] = \int \mathbb{I}_A(x) dF_X(x) = \int_{x \in A} f_X(x) dx = \mathbb{P}(X \in A)$$

*Handwritten note:* "Think: practical applications"

**Another ex.** $A = [q, +\infty)$
Then, $\mathbb{E}[\mathbb{I}_A(X)] = \mathbb{P}(X \in A)$
*Handwritten note:* "tail prob"

That is, a probability can be expressed as an expectation, which could be handy.

### Visual Description
The slide contains printed text and blue handwritten derivations. The main derivation shows how the expectation of an indicator function equals the probability of the set $A$. A second handwritten example relates this to tail probabilities. There are yellow highlights on "$\mathbb{E}[Y]$" and "$\mathbb{P}(X \in A)$".

---
## Page 9
### Content
**Linearity**

$$\mathbb{E} \left[ \sum_{i} a_i X_i \right] = \sum_{i} a_i \mathbb{E}[X_i].$$

*   We use that result all the time.
*   Prove as a HW exercise.

[Handwritten note]: does not assume independent RVs

### Visual Description
The slide has a grid background. The title "Linearity" and the main formula are highlighted in yellow. There is a handwritten note in blue ink pointing to the formula, stating "does not assume independent RVs".

---
## Page 10
### Content
**Example 1:** We can calculate the mean of binomial using a direct calculation, or use the fact that a $\text{Bin}(n, p)$ random variable is a sum of $n$ independent Bernoulli's.

Hence if $X \sim \text{Bin}(n, p)$ and $Y_i \sim \text{Ber}(p)$ then:
$$\mathbb{E}[X] = \sum_{i=1}^n \mathbb{E}[Y_i] = np.$$

[Handwritten notes]:
Note: $X = \sum_{i=1}^n Y_i$, $Y_i \sim \text{Bernoulli}(p)$, $i = 1, \dots, n$

Hence, $\mathbb{E}(X) = \mathbb{E} \left[ \sum_{i=1}^n Y_i \right]$
$= \sum_{i=1}^n \mathbb{E}(Y_i)$
$= n \cdot \mathbb{E}(Y_1)$
$= n \cdot p$

### Visual Description
The slide has a grid background. It contains printed text and formulas, supplemented by extensive handwritten derivations in blue ink that show the step-by-step calculation of the mean of a binomial distribution.

---
## Page 11
### Content
**Example 2:** If you square and add $k$ independent standard Gaussian RVs, you obtain a chi-squared random variable with $k$ degrees of freedom.

[Handwritten note]: $Y = \sum_{i=1}^k X_i^2$ where $X_1, \dots, X_k \overset{iid}{\sim} N(0, 1)$. Then, $Y \sim \chi^2_k$

Chi-squared RVs often arise in statistical hypothesis tests. The chi-square distribution has a complicated pdf; check a book or wikipedia. How would you derive it?

Let $X_i$ be $n$ independent standard Gaussian RVs. Then the chi-squared distribution has mean:
$$\mathbb{E}[\chi^2_k] = \mathbb{E} \left[ \sum_{i=1}^k X_i^2 \right] = \sum_{i=1}^k \mathbb{E}[X_i^2] = k,$$
[Handwritten note next to $=k$]: increases with $k$

because $\mathbb{E}[X_i^2] = \mathbb{V}(X_i) + \mathbb{E}^2(X_i) = 1 + 0^2$.

### Visual Description
The slide has a grid background. It includes printed text and a formula highlighted in yellow. There are blue handwritten notes defining the chi-squared variable and a graph at the bottom showing the PDF of $\chi^2$ distributions for different degrees of freedom ($k=1, 2$ and $k=3, 4, 5$).

---
## Page 12
### Content
**Independence** If $X$ and $Y$ are independent, then for any functions $f$ and $g$,
$$\mathbb{E}[f(X)g(Y)] = \mathbb{E}[f(X)]\mathbb{E}[g(Y)].$$

More generally, for jointly independent random variables $X_i$:
$$\mathbb{E}(g_1(X_1)g_2(X_2) \dots g_k(X_k)) = \mathbb{E}(g_1(X_1)) \dots \mathbb{E}(g_k(X_k)).$$

[Handwritten note]: Note: summation rule does **not** require independence but the multiplication rule does.

### Visual Description
The slide has a grid background. Printed text is annotated with red circles and underlines to emphasize the independence requirement. A large handwritten note in blue ink at the bottom clarifies the difference between the summation and multiplication rules regarding independence.

---
## Page 13
### Content
### 1.2 Inequalities for Expectations
When we can't calculate expectations, we can sometimes upper bound them.

1.  **Cauchy-Schwarz inequality:**
    $$\mathbb{E}|XY| \le \sqrt{\mathbb{E}[X^2]\mathbb{E}[Y^2]}.$$
    (Can be used to verify that the correlation between two random variables is bounded between -1 and 1.)
    [Handwritten note]: Recall from LA for inner product spaces $|\langle u, v \rangle|^2 \le \langle u, u \rangle \langle v, v \rangle$. $\langle X, Y \rangle \overset{def}{=} \mathbb{E}[XY]$

2.  **Jensen's inequality:** for a convex $r$,
    $$r(\mathbb{E}[X]) \le \mathbb{E}[r(X)].$$

Recall: a function $r$ is convex if for every $x_1, x_2$ and $\alpha \in [0, 1]$,
$$r(\alpha x_1 + (1 - \alpha)x_2) \le \alpha r(x_1) + (1 - \alpha)r(x_2).$$

Pictorially, convex functions are ones for which the line joining any two points on the curve lies entirely above the curve.

### Visual Description
The slide has a grid background. Key terms and formulas are highlighted in yellow. Blue handwritten notes relate the Cauchy-Schwarz inequality to linear algebra inner products. At the bottom, there is a handwritten graph of a convex function $y=r(x)$ with a line segment connecting two points $(x_1, r(x_1))$ and $(x_2, r(x_2))$ to illustrate the definition of convexity.

---
## Page 14
### Content
[Handwritten page]

Show that $r(\mathbb{E}(X)) \le \mathbb{E}(r(X))$ for any convex func $r(\cdot)$.

**Proof:**
Def. tangent line at $\mathbb{E}(X)$:
$$L(X) = a + bX$$
That is, $r(\mathbb{E}(X)) = L(\mathbb{E}(X))$

$\mathbb{E}(r(X)) \ge \mathbb{E}(L(X)) = \mathbb{E}(a + bX)$ by convexity
$= a + b\mathbb{E}(X) = L(\mathbb{E}(X))$ by linearity of expectations
$= r(\mathbb{E}(X))$
$\square$

### Visual Description
This is a fully handwritten slide in blue ink on a grid background. It contains a graph of a convex function with a tangent line at the point $\mathbb{E}(X)$, followed by a formal proof of Jensen's inequality using the properties of the tangent line and linearity of expectations.

---
## Page 15
### Content
### 2 Variance and Covariance
Variance of $X$:
$$\sigma^2_X = \mathbb{E}(X - \mu)^2 = \mathbb{E}[X^2 + \mu^2 - 2\mu X] = \mathbb{E}(X^2) - \mu^2.$$
[Handwritten notes]: "def" is written over $\mathbb{E}(X - \mu)^2$ and "useful result" is circled around $\mathbb{E}(X^2) - \mu^2$.

The variance of a distribution measures its spread – roughly how far it is on average from its mean.

The variance is not in the same scale as the data since we squared the deviations. The square root of the variance is called the standard deviation. It is comparable in scale to the data.

[Handwritten note]: Def. $var(X) = \mathbb{E}[(X - \mathbb{E}(X))^2]$

### Visual Description
The slide has a grid background. The section title is highlighted in yellow. Blue handwritten annotations identify the definition and a "useful result" within the printed variance formula. A large handwritten definition of variance is added at the bottom.

---
## Page 16
### Content
**Property:** for constants $a, b$, we have
$$\sigma^2_{aX+b} = a^2 \sigma^2_X.$$

[Handwritten note]: $var(aX + b) = a^2 var(X)$

### Visual Description
The slide has a grid background. It contains a single printed property about the variance of a linear transformation. A blue handwritten note repeats the formula using "var" notation, with the "$+b$" crossed out on the left side to emphasize that the constant shift does not affect variance.

---
==End of PDF==
## Page 17
### Content
**Covariance** of/between $X$ and $Y$:
$$\text{Cov}(X, Y) = \mathbb{E}((X - \mu_X)(Y - \mu_Y)) = \mathbb{E}(XY) - \mu_X\mu_Y$$
*   Handwritten note: "def" above the first equality, "useful result" above the second.

The covariance of a random variable and itself is just its variance.
*   Handwritten note: **Note:** $\begin{cases} \text{cov}(X, X) = \text{var}(X) \\ \text{cov}(X, Y) = \text{cov}(Y, X) \end{cases}$

A standardized form of the covariance is the **correlation**:
$$\text{Cor}(X, Y) = \frac{\text{Cov}(X, Y)}{\sigma_X\sigma_Y}$$

The correlation is always $\in [-1, 1]$.

Both are **measures of association**.

*   Handwritten note: $X, Y$ independent RVs $\implies \text{cov}(X, Y) = 0$
*   Handwritten note: A crossed-out reverse arrow $\nLeftarrow$ indicates the converse is not necessarily true.
*   Handwritten note: **Exercise:** find a "counter-example"

### Visual Description
The slide contains printed text and formulas on a grid background, with several blue handwritten annotations. The annotations define covariance properties, note the symmetry of covariance, and state that independence implies zero covariance but not vice versa, prompting the student for a counter-example.

---
## Page 18
### Content
**Variance of averages of independent random variables** Let $X_1, \dots, X_n$ be $n$ independent and identically distributed random variables.
*   Handwritten note: "i.i.d." written above "independent and identically distributed".

Then
$$\mathbb{E}\left( \frac{1}{n} \sum_{i=1}^n X_i \right) = \mu_X$$
*   Handwritten note: arrow pointing to $\mu_X$ with "$= \mathbb{E}(X_1)$".

and
$$\text{Var}\left( \frac{1}{n} \sum_{i=1}^n X_i \right) = \frac{1}{n^2} \sum_{i=1}^n \text{Var}(X_i) = \frac{\sigma_X^2}{n}$$

The variance of the average is much smaller than the variance of the individual random variables: this is one of the core principles of statistics and helps us estimate various quantities reliably by making repeated measurements.

*   Handwritten note: **What are the implications for statistical inference?**

### Visual Description
The slide presents the formulas for the mean and variance of a sample average of i.i.d. random variables. It includes a blue star in the top left corner and handwritten notes clarifying the i.i.d. assumption and posing a question about statistical inference.

---
## Page 19
### Content
More generally:
$$\text{Var}\left( \sum_{i=1}^n a_i X_i \right) = \sum_{i=1}^n \sum_{j=1}^n a_i a_j \text{Cov}(X_i, X_j)$$

Proof is simple but tedious.
*   Handwritten note: **Recall:** $\begin{cases} \text{cov}(X, X) = \text{var}(X) \\ \text{cov}(X, Y) = \text{cov}(Y, X) \end{cases}$

Independent measurements are useful. The extreme case of non-independence is when $X_1 = X_2 = \dots = X_n$, in which case we have:
$$\text{Var}\left( \frac{1}{n} \sum_{i=1}^n X_i \right) = \sigma_X^2$$

There is no reduction of variance by taking repeated measurements if they strongly influence each other.

*   Handwritten note:
$$\text{var}\left( \sum_{i=1}^n a_i X_i \right) = \sum_{i=1}^n a_i^2 \text{var}(X_i) + 2 \sum \sum_{i>j} a_i a_j \text{cov}(X_i, X_j)$$

### Visual Description
The slide discusses the variance of a linear combination of random variables. It highlights that independence is crucial for variance reduction. Handwritten notes provide a more explicit expansion of the variance of a sum, separating the variance and covariance terms.

---
## Page 20
### Content
### 3 Conditional Expectation and Variance

Here we have two random variables $X$ and $Y$ and we want to compute the average value of $Y$ when $X = x$ is fixed.

The conditional expectation of a random variable is just the average with respect to the conditional distribution, i.e.,
$$\mathbb{E}[Y|X = x] = \sum_y y f_{Y|X}(y|x) \text{ or } = \int_y y f_{Y|X}(y|x) dy$$

*   Handwritten note: **In regression:** Data $(X_1, Y_1), \dots, (X_n, Y_n) \overset{iid}{\sim} F_{X,Y}$ (unknown distribution).
*   Handwritten note: Want the relationship between inputs $X$ ("covariates") and output variable $Y$ ("response").
*   Handwritten note: A plot shows $Y$ vs $X$. It depicts several vertical conditional density curves $f_{Y|X}$ at different $x$ values ($x_1, x_2$). A blue curve $r(x) = \mathbb{E}(Y|X=x)$ passes through the means of these distributions.
*   Handwritten note: **The problem of regression is to estimate $\mathbb{E}(Y|X=x)$ from data / mean response of $Y$ given $x$.**

### Visual Description
This slide introduces conditional expectation, specifically in the context of regression. It includes a handwritten diagram illustrating how the regression function $r(x)$ represents the conditional mean of $Y$ for different values of $X$.

---
## Page 21
### Content
**Example:** $X \sim U[0, 1]$ and $Y|X = x \sim U[x, 1]$.
Guess $\mathbb{E}[Y|X] = ?$

*   Handwritten note: First draw $X \sim U[0, 1]$. After we observe $X=x$, we draw $Y|X=x \sim \text{Unif}[x, 1]$.
*   Handwritten note: A graph shows the region $0 \le x \le 1$ and $x \le y \le 1$. The line $y=x$ and $y=1$ bound the possible values.
*   Handwritten note: Intuitively, $\mathbb{E}(Y|X=x) = \frac{1+x}{2}$ for all $x \in [0, 1]$.
*   Handwritten note: Using def of cond. expectations:
$$f_{Y|X}(y|x) = \begin{cases} \frac{1}{1-x} & x < y < 1 \\ 0 & \text{otherwise} \end{cases}$$
$$\mathbb{E}(Y|X=x) \overset{def}{=} \int y f_{Y|X}(y|x) dy = \int_x^1 y \frac{1}{1-x} dy = \dots = \frac{1+x}{2}$$
*   Handwritten note: Labels: $\mathbb{E}(Y|X=x)$ is a "fixed function $g(x)$"; $x$ is the "realized value of R.V. X".
*   Handwritten note:
$$\mathbb{E}(Y|X) = \frac{1+X}{2}$$
*   Handwritten note: Labels: $\mathbb{E}(Y|X)$ is a "random function $g(X)$"; $X$ is a "R.V.".
*   Handwritten note: **Q: What is random? What is fixed?**

### Visual Description
The slide works through an example of conditional expectation with uniform distributions. It uses a coordinate plot to visualize the support of the joint distribution and provides a step-by-step derivation, emphasizing the difference between the conditional expectation given a specific value $x$ (a number/function) and the conditional expectation as a random variable (a function of $X$).

---
## Page 22
### Content
**Note:**
$\mathbb{E}[Y|X]$ **is a function of $X$**, unlike the expectation of a random variable, which is just a number.

We use $\mathbb{E}[Y|X]$ to denote the random value whose value is $\mathbb{E}[Y|X = x]$, when $X = x$.

### Visual Description
Text-only slide. The main point is highlighted in yellow: "$\mathbb{E}[Y|X]$ is a function of $X$".

---
## Page 23
### Content
**Independence** If (NOT IFF) two random variables $X$ and $Y$ are independent, then
$$\mathbb{E}[Y|X = x] = \mathbb{E}[Y]$$

*   Handwritten note: $f_{Y|X}(y|x) = f_Y(y) \implies \mathbb{E}[Y|X=x] = \mathbb{E}[Y]$.
*   Handwritten note: A crossed-out reverse arrow $\nLeftarrow$ indicates the converse is not necessarily true.
*   Handwritten note: **exercise: come up with an example**
*   Handwritten note: Similar example common in reg. $X, \epsilon$ RVs. e.g. $\epsilon = Y - r(X)$, $\epsilon(X)$ "errors" in regression.
*   Handwritten note: $\mathbb{E}(\epsilon|X=x) = 0 \implies \mathbb{E}(\epsilon) = 0$. Again, $\nLeftarrow$ (converse not true).
*   Handwritten note: A plot shows a regression curve $y=r(x)$ with data points and a red line segment representing an error $\epsilon(x)$ between a point $Y$ and the curve $r(x)$.

### Visual Description
The slide discusses the relationship between independence and conditional expectation. Handwritten notes extend this to regression "errors" ($\epsilon$), showing that zero conditional mean implies zero marginal mean, but not vice versa, and provides a visual representation of errors in a regression plot.

---
## Page 24
### Content
**Law of total expectation**
$$\mathbb{E}[\mathbb{E}[Y|X]] = \mathbb{E}[Y]$$

*   Handwritten note: **Important!**
*   Handwritten note: $\int \dots dF_X \int \dots dF_{Y|X}$
*   Handwritten note: $\mathbb{E}_X[\mathbb{E}_{Y|X}[Y|X]] = \mathbb{E}[Y]$
*   Handwritten note: $\mathbb{E}_X[g(X)] = \mathbb{E}_Y[Y]$ where $g(X)$ is a "function of RV X".
*   Handwritten note: **What are you averaging?**

This expression has a divide and conquer flavour: to compute the average of a random variable $Y$, you can first compute its average over a bunch of partitions of the sample space (where some other random variable $X$ is fixed to different values), and then average the resulting averages.

*   Handwritten note: **Ex. clusters or subpopulations**. A scatter plot shows three distinct clusters of points, each with a central red dot representing the cluster mean.

### Visual Description
The slide presents the Law of Total Expectation. Handwritten notes provide a more formal notation using subscripts for expectations and integrals. A conceptual diagram of clusters illustrates the "divide and conquer" intuition: finding the overall mean by averaging the means of individual subpopulations.
## Page 25

### Content

**Example:** Suppose I had a population of people, 47% of whom were men and the remaining 53% were women, and that the average height of the men was 70 inches, and the women was 71 inches. What is the average height of the entire population?

$H = \text{height of individual}$
$G = \text{gender (M or F)}$
$X$ discrete R.V.

$$E(H) = E(E(H|G))$$
$$= E(H | \text{males}) \cdot P(\text{male}) + E(H | \text{female}) \cdot P(\text{female})$$
$$= 70 \cdot 0.47 + 71 \cdot 0.53$$
$$= 70.5 \text{ inches}$$

Note: the law also applies to transformations of RVs: $E[r(Y)] = E[E[r(Y)|X]]$;
For example, $E[\log Y] = E[E[\log Y | X]]$;

### Visual Description
The slide contains printed text for the example and a note at the bottom. Extensive blue handwritten notes show the step-by-step calculation using the law of iterated expectations. A red bracket highlights the note at the bottom. The background is a light gray grid.

---

## Page 26

### Content

**Conditional variance and the law of total variance** One can similarly define the conditional variance as:

**Def** $V(Y|X = x) = E[(Y - E[Y|X = x])^2 | X = x]$.

Note: Variance of $Y$ at fixed $x$

### Visual Description
The slide features printed text with a definition highlighted in yellow. Blue handwritten annotations include "Def" and a note explaining that it represents the variance of $Y$ at a fixed $x$. The background is a light gray grid.

---

## Page 27

### Content

**Ex.** Draw $X \sim F_X$, $Y|X=x \sim F_{Y|X}$
"hierarchical" model of the d.g.p.

**Law of total variance:**
$$V(Y) = E(V(Y|X)) + V(E(Y|X))$$
(1) (2)

Note: these quantities are functions of $X$, **random**

Again, divide-and-conquer flavor:
(1) First compute variance of each "partition" (for fixed $x$) "given $x$"
**But** note that each variance is computed around a **different** mean.
(2) Hence, also need to compute the variance of the means **across** the "partitions"

**Q: What is random?**
**What is fixed?**

### Visual Description
The slide contains the printed formula for the Law of Total Variance, with terms labeled (1) and (2) in red circles. Extensive blue and red handwritten notes explain the intuition behind the formula, describing it as a "divide-and-conquer" approach involving variances within and across partitions. The background is a light gray grid.

---

## Page 28

### Content

### 4 Moment generating functions

MGF of $X$:
**Def.** $M_X(t) = E(e^{tX})$. $t \in \mathbb{R}$ (real number)

**Example 1:** Compute the MGF of a Bernoulli RV
$X \sim \text{Bernoulli}(p)$, $x = 0, 1$
$$M_X(t) = E[e^{tX}]$$
$$= e^{t \cdot 1} \cdot P(X=1) + e^{t \cdot 0} \cdot P(X=0)$$
$$= p e^t + (1-p) \text{ for all } t \in \mathbb{R}$$

Can show that the MGF uniquely determines a RV if well-defined (in some open interval around $t=0$)

What is the MGF used for?
1) To find moments of RV $X$
2) To find distr. of sums of **independent** RVs (when possible)

### Visual Description
The slide introduces Moment Generating Functions (MGFs) with printed text and blue handwritten annotations. It includes the definition and a worked example for a Bernoulli random variable. Handwritten notes also explain the uniqueness property and the primary uses of MGFs. The background is a light gray grid.

---

## Page 29

### Content

**Example 2:** MGF of an Exponential RV with mean 1.
The exponential RV with mean $\lambda$ has pdf:
$$f_X(x) = \lambda \exp(-\lambda x), x \ge 0$$

$M_X(t) =$

### Visual Description
Text-only slide. The slide presents a printed example prompt for calculating the MGF of an exponential random variable, but the solution space is left blank. The background is a light gray grid.

---

## Page 30

### Content

The MGF "generates" the moments of $X$: for all $k = 1, 2, 3, \dots$,
**(Theorem)** $M_X^{(k)}(0) = E[X^k]$. (evaluate at $t=0$)

Recall, $M_X(t) = E(e^{tX})$

$k=1$
Then $M_X'(0) = [\frac{d}{dt} E \exp(tX)]_{t=0}$
$$= E \frac{d}{dt} \exp(tX) \Big|_{t=0}$$
$$= E [X \exp(tX)] \Big|_{t=0}$$
$$= E(X)$$
etc.

### Visual Description
The slide explains how MGFs generate moments. It includes a printed theorem and a handwritten derivation for the first moment ($k=1$) using blue ink. The background is a light gray grid.

---

## Page 31

### Content

**Example:** Bernoulli MGF $M_X(t) = p \exp(t) + (1-p)$. Calculate the mean.

$M_X'(t) = p e^t$
$E(X) = M_X'(t=0) = p$

### Visual Description
The slide shows a printed example for calculating the mean of a Bernoulli distribution using its MGF. The solution is handwritten in blue ink. The background is a light gray grid.

---

## Page 32

### Content

Two important properties of MGFs:

1. **Sums of independent RVs:** Let $X_1, \dots, X_n$ be independent RVs and $Y = \sum_{i=1}^n X_i$ then
$$M_Y(t) = \prod_{i=1}^n M_{X_i}(t).$$

Basically, this gives us a very easy way to calculate every moment of a sum of independent random variables.
**Sometimes**, we can even calculate the distribution of sums of independent variables.

**Proof:**
$M_Y(t) \stackrel{\text{def}}{=} E(e^{tY}) = E(e^{t \sum X_i})$
$= E(e^{\sum t X_i})$
$= E(\prod_{i=1}^n e^{t X_i})$
Note: $X_i$'s indep. RVS $\implies Z_i = e^{t X_i}$ indep.
$= \prod_{i=1}^n E(e^{t X_i})$
$= \prod_{i=1}^n M_{X_i}(t)$
MGF of each comp $X_i$

### Visual Description
The slide presents a property of MGFs regarding the sum of independent random variables. The main formula is boxed in blue. Below the printed text, a handwritten proof is provided in blue and red ink on a light gray grid background.
## Page 33
### Content
**Example 1:** The MGF of a $N(\mu, \sigma^2)$ RV is
$$M(t) = \exp(\mu t + \sigma^2 t^2 / 2) \text{ for all } t \in \mathbb{R}$$
Let $X_i$ be $N(\mu_i, \sigma_i^2)$ independent, and $Y = \sum_{i=1}^n X_i$. Then
$M_Y(t) = \dots$

*Handwritten derivation:*
$= \prod_{i=1}^n \exp\left(\mu_i t + \sigma_i^2 \frac{t^2}{2}\right)$
$= \exp\left(\sum_{i=1}^n \left(\mu_i t + \sigma_i^2 \frac{t^2}{2}\right)\right)$
$= \exp\left(t \sum_{i=1}^n \mu_i + \frac{t^2}{2} \sum_{i=1}^n \sigma_i^2\right)$

Let $M = \sum \mu_i$ and $V = \sum \sigma_i^2$.
This is the MGF of $N(M, V)$.

By the uniqueness of MGF:
$$\sum_{i=1}^n X_i \sim N\left(\sum_{i=1}^n \mu_i, \sum_{i=1}^n \sigma_i^2\right)$$
Note: true for all $n$ (not asymptotic result).

That is, the sum of independent normal RVs is a normal R.V.

### Visual Description
The slide contains printed text and formulas on a light blue grid background, supplemented with extensive handwritten derivations in blue and red ink. Red circles and arrows highlight key terms like "independent" and the final result.

---
## Page 34
### Content
**Do yourself.**

**Example 2:** The MGF of a Chi-square RV with $k$ degrees of freedom ($\chi_k^2$) is
$$M(t) = (1 - 2t)^{-k/2}, \quad t < 1/2.$$

If you add $n$ $\chi_1^2$ independent RVs, you obtain a chi-squared random variable with $n$ degrees of freedom.

### Visual Description
Text-only slide on a light blue grid background, with a handwritten note "Do yourself." in blue ink at the top.

---
## Page 35
### Content
I wrote **sometimes** because it is easy to obtain the MGF of a sum of indep RVs, but we may not recognize the result as the MGF of a well known distribution. In that case, we can obtain the PDF/PMF by doing an inverse MGF transform, but that is not easy, and often does not have a closed form solution.

E.g. let $X$ be Normal and $Y$ be $\chi_k^2$ independent RVs, Then the MGF of the sum is:

### Visual Description
Text-only slide on a light blue grid background.

---
## Page 36
### Content
2. **Equality of MGFs:** We have seen that the MGF can give us a lot of information about a random variable. A basic question is whether the MGF completely determines a random variable. The answer (somewhat surprisingly) turns out to be yes:

If the MGF of $X$ and $Y$ exist in a neighbourhood around 0 and are equal then $X$ and $Y$ have the same distribution.

*(Handwritten note: $t=0$)*

### Visual Description
Text-only slide on a light blue grid background with a small handwritten note "$t=0$" in blue ink.

---
## Page 37
### Content
[From "All of Statistics"]

**Table of Distributions**

| Distribution | PDF or probability function | mean | variance | MGF |
| :--- | :--- | :--- | :--- | :--- |
| Point mass at $a$ | $I(x = a)$ | $a$ | $0$ | $e^{at}$ |
| Bernoulli($p$) | $p^x(1 - p)^{1-x}$ | $p$ | $p(1 - p)$ | $pe^t + (1 - p)$ |
| Binomial($n, p$) | $\binom{n}{x} p^x(1 - p)^{n-x}$ | $np$ | $np(1 - p)$ | $(pe^t + (1 - p))^n$ |
| Geometric($p$) | $p(1 - p)^{x-1}I(x \ge 1)$ | $1/p$ | $\frac{1-p}{p^2}$ | $\frac{pe^t}{1-(1-p)e^t} (t < -\log(1-p))$ |
| Poisson($\lambda$) | $\frac{\lambda^x e^{-\lambda}}{x!}$ | $\lambda$ | $\lambda$ | $e^{\lambda(e^t-1)}$ |
| Uniform($a, b$) | $I(a < x < b)/(b - a)$ | $\frac{a+b}{2}$ | $\frac{(b-a)^2}{12}$ | $\frac{e^{bt}-e^{at}}{(b-a)t}$ |
| **Normal($\mu, \sigma^2$)** | $\frac{1}{\sigma\sqrt{2\pi}} e^{-(x-\mu)^2/(2\sigma^2)}$ | $\mu$ | $\sigma^2$ | **$\exp\{\mu t + \frac{\sigma^2 t^2}{2}\}$** |
| Exponential($\beta$) | $\frac{e^{-x/\beta}}{\beta}$ | $\beta$ | $\beta^2$ | $\frac{1}{1-\beta t} (t < 1/\beta)$ |
| Gamma($\alpha, \beta$) | $\frac{x^{\alpha-1}e^{-x/\beta}}{\Gamma(\alpha)\beta^\alpha}$ | $\alpha\beta$ | $\alpha\beta^2$ | $(\frac{1}{1-\beta t})^\alpha (t < 1/\beta)$ |
| Beta($\alpha, \beta$) | $\frac{\Gamma(\alpha+\beta)}{\Gamma(\alpha)\Gamma(\beta)} x^{\alpha-1}(1 - x)^{\beta-1}$ | $\frac{\alpha}{\alpha+\beta}$ | $\frac{\alpha\beta}{(\alpha+\beta)^2(\alpha+\beta+1)}$ | $1 + \sum_{k=1}^\infty \left(\prod_{r=0}^{k-1} \frac{\alpha+r}{\alpha+\beta+r}\right) \frac{t^k}{k!}$ |
| $t_\nu$ | $\frac{\Gamma(\frac{\nu+1}{2})}{\Gamma(\frac{\nu}{2})} \frac{1}{(1+\frac{x^2}{\nu})^{(\nu+1)/2}}$ | $0$ (if $\nu > 1$) | $\frac{\nu}{\nu-2}$ (if $\nu > 2$) | does not exist |
| $\chi_p^2$ | $\frac{1}{\Gamma(p/2)2^{p/2}} x^{(p/2)-1} e^{-x/2}$ | $p$ | $2p$ | $(\frac{1}{1-2t})^{p/2} (t < 1/2)$ |

### Visual Description
A comprehensive table of common probability distributions. The "Normal($\mu, \sigma^2$)" row is highlighted in yellow, and its MGF is specifically pointed to with a blue arrow. A handwritten note at the top says "[From 'All of Statistics']".

---
## Page 38
### Content
**36-700: Homework Set 2**
Due Thursday September 11 at 3 pm — no late homework
Submit on Gradescope

The point of the homework is to practice what you have learned in class. You should feel free to collaborate on the homework, but the solutions that you write up and submit has to be your own. It is strictly forbidden to search the web for prior homeworks, or to use ChatGPT or equivalent to do the homework for you.

1. Fall is here! I lost my umbrella so I would like to estimate the probability that it will not rain during the whole month of October.

(a) Assuming that the climate has not changed in the past 4 years and assuming that we have no effects such as La Nina or El Nino, which could affect rainfall dramatically, estimate the probability of no rainfall in October 2025 using the data below. The data consist of the rainfall numbers in Pittsburgh in October 2024, 2023, 2022 and 2021, courtesy of wunderground.com.

*Hint: as discussed during lecture (see Chapter 1 lecture slides), use the chain rule, then assume that the rain process is first-order Markov, i.e. that the future only depends on the most recent past. Also assume a stationary process for the month of October, so that, for example, the probability of rain on Oct 1 is the same as the probability of rain on Oct 2, 3, 4, etc...*

(b) As a comparison, calculate the probability of no rainfall in October, assuming that the rainfall process is random, i.e. that the chance of rain on any day is independent of the past. In the class notes jargon, I am asking you to assume that all the days are mutually independent.

Which result, (a) or (b), do you think is likely to be closer to the truth? Explain.

### Visual Description
Text-only slide.

---
## Page 39
### Content
[Weather calendar for October 2024 in Pittsburgh]
*   Oct 1: Cloudy, 0.75 in
*   Oct 2: Cloudy, 0.03 in
*   Oct 3: Mostly Sunny, 0 in
*   Oct 4: Partly Cloudy, 0 in
*   Oct 5: Mostly Sunny, 0 in
*   Oct 7: Cloudy, 1.07 in
*   Oct 14: Cloudy, 0.07 in
*   Oct 16: Scattered Showers, 0.06 in
*   Oct 17: Mostly Sunny, 0.01 in
*   Oct 31: Mostly Cloudy, 0 in
*   (Other days show 0 in rainfall)

### Visual Description
A screenshot of a monthly weather calendar from wunderground.com for October 2024, showing daily conditions (icons like sun, clouds, rain), actual high/low temperatures, and precipitation amounts in inches.

---
## Page 40
### Content
[Weather calendar for October 2023 in Pittsburgh]
*   Oct 6: Cloudy, 0.16 in
*   Oct 7: Mostly Cloudy, 0.03 in
*   Oct 13: Scattered Showers, 0.29 in
*   Oct 15: Cloudy, 0.32 in
*   Oct 16: Cloudy, 0.09 in
*   Oct 20: Scattered Showers, 0.23 in
*   Oct 21: Cloudy, 0.32 in
*   Oct 22: Mostly Cloudy, 0.03 in
*   Oct 28: Cloudy, 0.02 in
*   Oct 29: Scattered Showers, 0.29 in
*   Oct 30: Scattered Showers, 0.58 in
*   Oct 31: Cloudy, 0.18 in
*   (Other days show 0 in rainfall)

### Visual Description
A screenshot of a monthly weather calendar from wunderground.com for October 2023, showing daily conditions, temperatures, and precipitation amounts. Several days show significant rainfall.
## Page 41
### Content
![Weather calendar for October 2022]

4
### Visual Description
A calendar view for October 2022 showing daily weather conditions. Each day includes a weather icon (e.g., Mostly Cloudy, Sunny, Scattered Showers), the actual high and low temperatures in Fahrenheit (e.g., $69^\circ \mid 55^\circ$), and the amount of precipitation in inches (e.g., 0 in, 0.22 in). The calendar starts on a Sunday and ends on a Monday (October 31st).

---
## Page 42
### Content
![Weather calendar for October 2021]

5
### Visual Description
A calendar view for October 2021 showing daily weather conditions. Similar to the previous page, each day includes a weather icon, actual high/low temperatures, and precipitation. The calendar starts on a Sunday and ends on a Saturday (October 30th), with October 31st appearing on the next row.

---
## Page 43
### Content
2. Prove that the function: $F_X(x) = 1 - \exp(-x)$ for $x \in (0, \infty)$, and $F_X(x) = 0$ for $x \le 0$, is a valid CDF.

3. Let $(X, Y)$ have the uniform distribution on $[-1, 1] \times [-1, 1]$. Find the probability that
    (a) $X = 1$.
    (b) $0.5 \le X \le 1$.
    (c) $0.5 \le X \le 1.5$.
    (d) $X + Y \ge 1/2$.

4. Let $(X, Y)$ have the uniform distribution on the set $\{(x, y) : x^2 + y^2 \le 1\}$. Write down an expression for the joint density function of $(X, Y)$.

5. Let $X$ be uniformly distributed on $[-5, 1]$. Let $Y = X^4$. Find the cdf and pdf of $Y$.
    *Hint: determine first if $Y$ is continuous or discrete, then determine what values the new RV takes. This will help you identify the appropriate method to calculate PDF and CDF.*

6. Let $X$ have CDF $F$.
    (a) Find the CDF of $Y = \max\{0, X\}$.
        *Hint: The answer should start as:*
        $\forall y < 0, F_Y(y) = 0$.
        *For $y \ge 0, F_Y(y) = \dots$ etc*
        *(For your own sanity, check that your calculation yields a valid CDF.)*
    (b) Let $X$ be standard Normal. Overlay the CDF of $X$ and $Y$ on the same graph. If you draw a graph by hand, make sure it is legible.

7. Do **Exercise 2.21** in Wasserman’s book page 46.

8. (**A universal random generator.**) Let $X$ have a continuous, strictly increasing CDF $F$.
    (a) Let $Y = F(X)$. Find the density of $Y$. This is called the *probability integral transform*.
    (b) Now let $U \sim \text{Uniform}(0, 1)$ and let $Z = F^{-1}(U)$. Show that $Z \sim F$.
        Effectively this result lets us draw samples from any distribution whose CDF is known, via samples from the uniform distribution on $[0, 1]$. (Try for example writing a program that takes Uniform(0, 1) random variables and generates random variables from an Exponential(1) distribution; no need to hand in this last part)

6
### Visual Description
Text-only slide.

---
## Page 44
### Content
9. Suppose that a random variable $X$ has a continuous distribution on an interval $I \subseteq \mathbb{R}$, with density $f_X$. Find the density of $Y = aX + b$, where $a \in \mathbb{R} \setminus \{0\}$ (i.e. $a$ is not 0) and $b \in \mathbb{R}$. Use the Jacobian method, and justify why you can use the method here. (Remark: The Jacobian method won’t occur on the exam, but I’ve included it in the HW so you can review your multivariable calculus and practice change of variables)

7
### Visual Description
Text-only slide.
