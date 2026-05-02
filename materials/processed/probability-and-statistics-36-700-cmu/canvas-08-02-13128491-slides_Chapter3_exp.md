# canvas-08-02-13128491-slides_Chapter3_exp

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-08-02-13128491-slides_Chapter3_exp.pdf`
Duplicate equivalents: `canvas-08-02-13128491-slides_Chapter3_exp.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 36

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

**Reading:** Wasserman Sec 3.1-3.6, Sec 4.2. Recommend CB as an additional reference.

## 1 Expectation

$$\mathbb{E}[X] = \int x dF_X(x) = \int x f_X(x) dx \quad \text{or} \quad \sum_x x f_X(x),$$

for continuous and discrete RVs, respectively.

Suppose you can repeat the experiment many times in order to obtain many copies of the random variable $X_1, \dots, X_n$. In this case, the expectation is $\mathbb{E}(X) \approx \frac{1}{n} \sum_{i=1}^n X_i$. This is called the law of large numbers and we will re-visit this in a few lectures.

### Visual Description
Text-only slide.

---

## Page 2
### Content
**Examples:**
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

“Rule of the lazy statistician” because we can obtain the mean of $Y = r(X)$ without having to derive its distribution.

### Visual Description
Text-only slide.

---

## Page 5
### Content
**Example:** Let $X$ take values 1 and 2 with equal probability.
$\mathbb{E}(X^2) =$

**Example:** Calculate 4th moments of $X$ as a HW exercise:
$\mathbb{E}(X^4) =$

### Visual Description
Text-only slide.

---

## Page 6
### Content
**Careful:** $r(\mathbb{E}[X]) \neq \mathbb{E}[r(X)]$.

### Visual Description
Text-only slide.

---

## Page 7
### Content
The rule of the lazy statistician rule applies to multivariate distributions too:
$$\mathbb{E}[r(X, Y, Z)] = \iiint r(x, y, z) f_{X,Y,Z}(x, y, z) dx dy dz.$$

E.g. let $r(x, y, z) = xy/z$.
$\mathbb{E}[r(X, Y, Z)] = ?$

**Note:** remember that there are as many integral or summation signs as there are RVs involved in the calculation.

### Visual Description
Text-only slide.

---

## Page 8
### Content
**Expectation of indicator function:** let $Y = \mathbb{I}_A(X)$, i.e, $Y = 1$ if $X \in A$ and 0 otherwise.

$\mathbb{E}[Y] =$

That is, a probability can be expressed as an expectation, which could be handy.

### Visual Description
Text-only slide.

---
## Page 9
### Content
**Linearity**

$$\mathbb{E} \left[ \sum_{i} a_i X_i \right] = \sum_{i} a_i \mathbb{E}[X_i].$$

We use that result all the time.

Prove as a HW exercise.

9
### Visual Description
Text-only slide. The content is presented on a light gray grid background.

---
## Page 10
### Content
**Example 1:** We can calculate the mean of binomial using a direct calculation, or use the fact that a $\text{Bin}(n, p)$ random variable is a sum of $n$ independent Bernoulli's.

Hence if $X \sim \text{Bin}(n, p)$ and $Y_i \sim \text{Ber}(p)$ then:

$$\mathbb{E}[X] = \sum_{i=1}^{n} \mathbb{E}[Y_i] = np.$$

10
### Visual Description
Text-only slide. The content is presented on a light gray grid background.

---
## Page 11
### Content
**Example 2:** If you square and add $k$ independent standard Gaussian RVs, you obtain a chi-squared random variable with $k$ degrees of freedom.

Chi-squared RVs often arise in statistical hypothesis tests. The chi-square distribution has a complicated pdf; check a book or wikipedia. How would you derive it?

Let $X_i$ be $n$ independent standard Gaussian RVs. Then the chi-squared distribution has mean:

$$\mathbb{E}[\chi^2_k] = \mathbb{E} \left[ \sum_{i=1}^{k} X_i^2 \right] = \sum_{i=1}^{k} \mathbb{E}[X_i^2] = k,$$

because $\mathbb{E}[X_i^2] = \mathbb{V}(X_i) + \mathbb{E}^2(X_i) = 1 + 0^2$.

11
### Visual Description
Text-only slide. The content is presented on a light gray grid background.

---
## Page 12
### Content
**Independence** If $X$ and $Y$ are independent, then for any functions $f$ and $g$,

$$\mathbb{E}[f(X)g(Y)] = \mathbb{E}[f(X)]\mathbb{E}[g(Y)].$$

More generally, for jointly independent random variables $X_i$:

$$\mathbb{E}(g_1(X_1)g_2(X_2) \dots g_k(X_k)) = \mathbb{E}(g_1(X_1)) \dots \mathbb{E}(g_k(X_k)).$$

12
### Visual Description
Text-only slide. The content is presented on a light gray grid background.

---
## Page 13
### Content
**1.2 Inequalities for Expectations**

When we can't calculate expectations, we can sometimes upper bound them.

1. **Cauchy-Schwarz inequality:**
$$\mathbb{E}|XY| \leq \sqrt{\mathbb{E}[X^2]\mathbb{E}[Y^2]}.$$
(Can be used to verify that the correlation between two random variables is bounded between $-1$ and $1$.)

2. **Jensen's inequality:** for a convex $r$,
$$r(\mathbb{E}[X]) \leq \mathbb{E}[r(X)].$$

Recall: a function $r$ is convex if for every $x_1, x_2$ and $\alpha \in [0, 1]$,
$$r(\alpha x_1 + (1 - \alpha)x_2) \leq \alpha r(x_1) + (1 - \alpha)r(x_2).$$

Pictorially, convex functions are ones for which the line joining any two points on the curve lies entirely above the curve.

13
### Visual Description
Text-only slide. The content is presented on a light gray grid background.

---
## Page 14
### Content
.

14
### Visual Description
A nearly blank slide with a single dot at the top left and the page number 14 at the bottom center, all on a light gray grid background.

---
## Page 15
### Content
**2 Variance and Covariance**

Variance of $X$:
$$\sigma_X^2 = \mathbb{E}(X - \mu)^2 = \mathbb{E}[X^2 + \mu^2 - 2\mu X] = \mathbb{E}(X^2) - \mu^2.$$

The variance of a distribution measures its spread – roughly how far it is on average from its mean.

The variance is not in the same scale as the data since we squared the deviations. The square root of the variance is called the standard deviation. It is comparable in scale to the data.

15
### Visual Description
Text-only slide. The content is presented on a light gray grid background.

---
## Page 16
### Content
**Property:** for constants $a, b$, we have
$$\sigma_{aX+b}^2 = a^2 \sigma_X^2.$$

16
### Visual Description
Text-only slide. The content is presented on a light gray grid background.
## Page 17
### Content
**Covariance** of/between $X$ and $Y$:
$$\text{Cov}(X, Y) = \mathbb{E}((X - \mu_X)(Y - \mu_Y)) = \mathbb{E}(XY) - \mu_X\mu_Y.$$
The covariance of a random variable and itself is just its variance.

A standardized form of the covariance is the **correlation**:
$$\text{Cor}(X, Y) = \frac{\text{Cov}(X, Y)}{\sigma_X\sigma_Y}.$$
The correlation is always $\in [-1, 1]$.

Both are **measures of association**.

### Visual Description
Text-only slide.

---
## Page 18
### Content
**Variance of averages of independent random variables** Let $X_1, \dots, X_n$ be $n$ independent and identically distributed random variables.

Then
$$\mathbb{E}\left(\frac{1}{n} \sum_{i=1}^n X_i\right) = \mu_X$$
and
$$\text{Var}\left(\frac{1}{n} \sum_{i=1}^n X_i\right) = \frac{1}{n^2} \sum_{i=1}^n \text{Var}(X_i) = \frac{\sigma_X^2}{n}.$$

The variance of the average is much smaller than the variance of the individual random variables: this is one of the core principles of statistics and helps us estimate various quantities reliably by making repeated measurements.

### Visual Description
Text-only slide.

---
## Page 19
### Content
More generally:
$$\text{Var}\left(\sum_{i=1}^n a_i X_i\right) = \sum_{i=1}^n \sum_{j=1}^n a_i a_j \text{Cov}(X_i, X_j).$$
Proof is simple but tedious.

Independent measurements are useful. The extreme case of non-independence is when $X_1 = X_2 = \dots = X_n$, in which case we have:
$$\text{Var}\left(\frac{1}{n} \sum_{i=1}^n X_i\right) = \sigma_X^2.$$
There is no reduction of variance by taking repeated measurements if they strongly influence each other.

### Visual Description
Text-only slide.

---
## Page 20
### Content
### 3 Conditional Expectation and Variance

Here we have two random variables $X$ and $Y$ and we want to compute the average value of $Y$ when $X = x$ is fixed.

The conditional expectation of a random variable is just the average with respect to the conditional distribution, i.e.,
$$\mathbb{E}[Y | X = x] = \sum_y y f_{Y|X}(y|x) \quad \text{or} \quad = \int_y y f_{Y|X}(y|x) dy.$$

### Visual Description
Text-only slide.

---
## Page 21
### Content
**Example:** $X \sim U[0, 1]$ and $Y | X = x \sim U[x, 1]$.

Guess $\mathbb{E}[Y | X] = ?$

### Visual Description
Text-only slide.

---
## Page 22
### Content
$\mathbb{E}[Y | X]$ **is a function of** $X$, unlike the expectation of a random variable, which is just a number.

We use $\mathbb{E}[Y | X]$ to denote the random value whose value is $\mathbb{E}[Y | X = x]$, when $X = x$.

### Visual Description
Text-only slide.

---
## Page 23
### Content
**Independence** If (NOT IFF) two random variables $X$ and $Y$ are independent, then
$$\mathbb{E}[Y | X = x] = \mathbb{E}[Y].$$

### Visual Description
Text-only slide.

---
## Page 24
### Content
**Law of total expectation**
$$\mathbb{E}[\mathbb{E}[Y | X]] = \mathbb{E}[Y].$$

This expression has a divide and conquer flavour: to compute the average of a random variable $Y$, you can first compute its average over a bunch of partitions of the sample space (where some other random variable $X$ is fixed to different values), and then average the resulting averages.

### Visual Description
Text-only slide.

---
## Page 25
### Content
**Example:** Suppose I had a population of people, 47% of whom were men and the remaining 53% were women, and that the average height of the men was 70 inches, and the women was 71 inches. What is the average height of the entire population?

Note: the law also applies to transformations of RVs: $E[r(Y)] = E[E[r(Y)|X]]$;
For example, $E[\log Y] = E[E[\log Y|X]]$;

25
### Visual Description
Text-only slide.

---
## Page 26
### Content
**Conditional variance and the law of total variance** One can similarly define the conditional variance as:

$$V(Y|X = x) = E[(Y - E[Y|X = x])^2 | X = x].$$

26
### Visual Description
Text-only slide.

---
## Page 27
### Content
Law of total variance:

$$V(Y) = E(V(Y|X)) + V(E(Y|X)).$$

27
### Visual Description
Text-only slide.

---
## Page 28
### Content
# 4 Moment generating functions

MGF of $X$:
$$M_X(t) = E(e^{tX}).$$

**Example 1:** Compute the MGF of a Bernoulli RV
$M_X(t) =$

28
### Visual Description
Text-only slide.

---
## Page 29
### Content
**Example 2:** MGF of an Exponential RV with mean 1.
The exponential RV with mean $\lambda$ has pdf:
$$f_X(x) = \lambda \exp(-\lambda x), x \ge 0$$

$M_X(t) =$

29
### Visual Description
Text-only slide.

---
## Page 30
### Content
The MGF "generates" the moments of $X$: for all $k = 1, 2, 3, \dots$,
$$M_X^{(k)}(0) = E[X^k].$$

Recall, $M_X(t) = E(e^{tX})$

Then $M'_X(0) = \left[ \frac{d}{dt} E \exp(tX) \right]_{t=0}$

30
### Visual Description
Text-only slide.

---
## Page 31
### Content
**Example:** Bernoulli MGF $M_X(t) = p \exp(t) + (1-p)$. Calculate the mean.

31
### Visual Description
Text-only slide.

---
## Page 32
### Content
Two important properties of MGFs:

1. **Sums of independent RVs:** Let $X_1, \dots, X_n$ be independent RVs and $Y = \sum_{i=1}^n X_i$ then
$$M_Y(t) = \prod_{i=1}^n M_{X_i}(t).$$

Basically, this gives us a very easy way to calculate every moment of a sum of independent random variables.

**Sometimes**, we can even calculate the distribution of sums of independent variables.

32
### Visual Description
Text-only slide.
## Page 33
### Content
**Example 1 :** The MGF of a $N(\mu, \sigma^2)$ RV is
$$M(t) = \exp(\mu t + \sigma^2 t^2 / 2).$$

Let $X_i$ be $N(\mu_i, \sigma_i^2)$ independent, and $Y = \sum_{i=1}^n X_i$. Then
$M_Y(t) = \dots$

### Visual Description
Text-only slide.

---
## Page 34
### Content
**Example 2 :** The MGF of a Chi-square RV with $k$ degrees of freedom ($\chi^2_k$) is
$$M(t) = (1 - 2t)^{-k/2}, t < 1/2.$$

If you add $n$ $\chi^2_1$ independent RVs, you obtain a chi-squared random variable with $n$ degrees of freedom.

### Visual Description
Text-only slide.

---
## Page 35
### Content
I wrote **sometimes** because it is easy to obtain the MGF of a sum of indep RVs, but we may not recognize the result as the MGF of a well known distribution. In that case, we can obtain the PDF/PMF by doing an inverse MGF transform, but that is not easy, and often does not have a closed form solution.

E.g let $X$ be Normal and $Y$ be $\chi^2_k$ independent RVs, Then the MGF of the sum is:

### Visual Description
Text-only slide.

---
## Page 36
### Content
2. **Equality of MGFs:** We have seen that the MGF can give us a lot of information about a random variable. A basic question is whether the MGF completely determines a random variable. The answer (somewhat surprisingly) turns out to be yes:

If the MGF of $X$ and $Y$ exist in a neighbourhood around 0 and are equal then $X$ and $Y$ have the same distribution.

### Visual Description
Text-only slide.
