# gradescope-08-homework-3-graded-copy

Source: `materials/archive/probability-and-statistics-36-700-cmu/gradescope-graded-copies/gradescope-08-homework-3-graded-copy.pdf`
Duplicate equivalents: `gradescope-08-homework-3-graded-copy.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 18

## Page 1
### Content
**Homework 3**
**Graded**

**Student**
Saahith Janapati

**Total Points**
98 / 100 pts

**Question 1**
**Variance of Linear Combination** **10 / 10 pts**
*   [x] **- 0 pts** Correct
*   [ ] **- 2 pts** Correct approach but minor error
*   [ ] **- 5 pts** Major reasoning error
*   [ ] **- 10 pts** Missing

**Question 2**
**Sample Mean and Variance** **10 / 10 pts**
*   [x] **- 0 pts** Correct
*   [ ] **- 1 pt** a) Minor error
*   [ ] **- 2 pts** a) Major reasoning error
*   [ ] **- 1 pt** b) Minor error
*   [ ] **- 3 pts** b) Major reasoning error
*   [ ] **- 2 pts** c) Minor error
*   [ ] **- 4 pts** c) Major reasoning error
*   [ ] **- 10 pts** Missing

**Question 3**
**Uniform & Normal Mixture** **10 / 10 pts**
*   [x] **- 0 pts** Correct
*   [ ] **- 2 pts** a) Correct approach but minor calculation error
*   [ ] **- 4 pts** a) Major reasoning error
*   [ ] **- 2 pts** b) Correct approach but minor calculation error
*   [ ] **- 4 pts** b) Major reasoning error
*   [ ] **- 10 pts** Missing

### Visual Description
This is a summary page from Gradescope showing the grading results for Homework 3. It lists the student's name, total score, and a breakdown of points for the first three questions, including rubric items for each.

---
## Page 2
### Content
**Question 4**
**MGF of Normal RV** **20 / 20 pts**
*   [x] **- 0 pts** Correct
*   [ ] **- 2 pts** a) Correct approach but minor error
*   [ ] **- 5 pts** a) Major reasoning error
*   [ ] **- 1 pt** b) Minor calculation error
*   [ ] **- 2 pts** b) Missing explanation
*   [ ] **- 1 pt** c) Minor calculation error
*   [ ] **- 3 pts** c) Major reasoning error
*   [ ] **- 20 pts** Missing all
*   [ ] **- 10 pts** Missing two parts
*   [ ] **- 5 pts** Missing one part

**Question 5**
**Wasserman 3.17** **10 / 10 pts**
*   [x] **- 0 pts** Correct
*   [ ] **- 2 pts** Correct expansion but one or more of the terms have a calculation error
*   [ ] **- 5 pts** Major reasoning error
*   [ ] **- 10 pts** Missing

**Question 6**
**Wasserman 3.22** **18 / 20 pts**
*   [ ] **- 0 pts** Correct
*   [ ] **- 2 pts** a) Minor calculation error
*   [ ] **- 5 pts** a) Major reasoning error
*   [x] **- 2 pts** b) Minor calculation error
*   [ ] **- 5 pts** b) Major reasoning error
*   [ ] **- 20 pts** Missing
*   [ ] **- 10 pts** b) Missing

### Visual Description
This is the second page of the Gradescope summary, showing point breakdowns for Questions 4, 5, and 6. Question 6 shows a 2-point deduction for a minor calculation error in part b.

---
## Page 3
### Content
**Question 7**
**Monte Carlo Integration** **20 / 20 pts**
*   [x] **- 0 pts** Correct
*   [ ] **- 1 pt** a) Minor error
*   [ ] **- 3 pts** a) Major reasoning error
*   [ ] **- 1 pt** b) Minor error
*   [ ] **- 3 pts** b) Major reasoning error
*   [ ] **- 1 pt** c) Incorrect numeric answer
*   [ ] **- 3 pts** c) missing/incorrect histogram
*   [ ] **- 1 pt** d) Incorrect numeric answer
*   [ ] **- 3 pts** c) Incorrect approach
*   [ ] **- 20 pts** Missing

### Visual Description
This is the third page of the Gradescope summary, showing the point breakdown for Question 7, which received full marks.

---
## Page 4
### Content
Question assigned to the following page: 1

$$Var \left( \sum_{i=1}^n a_i X_i \right) = \sum_{i=1}^n \sum_{j=1}^n a_i a_j Cov(X_i, X_j)$$

Let $Y = \sum_{i=1}^n a_i X_i$. Then,
$$Var(Y) = E[(Y - E[Y])^2]$$

Also, note by linearity of expectations that
$$E[Y] = \sum_{i=1}^n a_i E[X_i]$$

So, $Var(Y) = E \left[ \left( \sum_{i=1}^n a_i X_i - \sum_{i=1}^n a_i E[X_i] \right)^2 \right]$
$$= E \left[ \left( \sum_{i=1}^n (X_i - E[X_i]) a_i \right)^2 \right]$$
$$= E \left[ \sum_{i=1}^n \sum_{j=1}^n a_i a_j (X_i - E[X_i])(X_j - E[X_j]) \right]$$
$$= \sum_{i=1}^n \sum_{j=1}^n a_i a_j Cov(X_i, X_j) \quad \text{(by linearity of expectations)}$$

### Visual Description
Handwritten mathematical proof on a light yellow background. Certain parts of the equations are highlighted in yellow and green. The proof derives the formula for the variance of a linear combination of random variables.

---
## Page 5
### Content
Question assigned to the following page: 2

(a) $E[Y] = E \left[ \frac{1}{n} \sum_{i=1}^n X_i \right]$
$$= \frac{1}{n} \sum_{i=1}^n E[X_i] = \frac{1}{n} \cdot (n) \cdot (\mu) = \mu$$

(b) $Var[Y] = Var \left( \frac{1}{n} \sum_{i=1}^n X_i \right) = \frac{1}{n^2} Var \left( \sum_{i=1}^n X_i \right)$

Note, from problem 1, we have
$$Var \left( \sum_{i=1}^n X_i \right) = \sum_{i=1}^n \sum_{j=1}^n Cov(X_i, X_j)$$

But also note that since $X_i, X_j$ for $i \neq j$ are i.i.d., $Var \left( \sum_{i=1}^n X_i \right)$ reduces to $\sum_{i=1}^n Var(X_i) = n \sigma$.

So $Var[Y] = \frac{1}{n^2} Var \left( \sum_{i=1}^n X_i \right) = \frac{1}{n^2} \cdot n \sigma = \frac{\sigma}{n}$.

### Visual Description
Handwritten mathematical solution for parts (a) and (b) of Question 2. The student calculates the expected value and variance of the sample mean. Note: the student uses $\sigma$ to represent variance in the final steps.

---
## Page 6
### Content
Question assigned to the following page: 2

$$S = \frac{1}{n-1} \sum_{i=1}^n (X_i - Y)^2$$

Let us write $X_i - Y = (X_i - \mu) - (Y - \mu)$
Then we have
$$(X_i - Y)^2 = [(X_i - \mu) - (Y - \mu)]^2 =$$
$$[(X_i - \mu)^2 - 2(X_i - \mu)(Y - \mu) + (Y - \mu)^2]$$

So, $S = \frac{1}{n-1} \sum_{i=1}^n [(X_i - \mu)^2 - 2(X_i - \mu)(Y - \mu) + (Y - \mu)^2]$
$$= \frac{1}{n-1} \left[ \sum_{i=1}^n (X_i - \mu)^2 - 2 \sum_{i=1}^n (X_i - \mu)(Y - \mu) + \sum_{i=1}^n (Y - \mu)^2 \right]$$

Note, $\sum_{i=1}^n (X_i - \mu) = \sum_{i=1}^n X_i - \sum_{i=1}^n \mu = nY - n\mu = n(Y - \mu)$

So, $S = \frac{1}{n-1} \left[ \sum_{i=1}^n (X_i - \mu)^2 - 2(Y - \mu) n(Y - \mu) + \sum_{i=1}^n (Y - \mu)^2 \right]$

$E[S] = \frac{1}{n-1} [n(\sigma^2) - 2n(\frac{\sigma^2}{n}) + \sigma^2]$
$$= \frac{1}{n-1} [\sigma^2(n-1)] = \sigma^2$$

### Visual Description
Handwritten mathematical proof for part (c) of Question 2, showing that the sample variance is an unbiased estimator of the population variance. The student uses $S$ to denote $S^2$.

---
## Page 7
### Content
Question assigned to the following page: 3

(a) $E[X] = \frac{1}{2}(1.5) + 1(\frac{1}{2})$
$$= 0.75 + 0.5 = 1.25$$

(b) $V(Y) = E(V(Y|X)) + V(E(Y|X))^2$
$$= \frac{1}{2} \left( \frac{1}{12} + 2 \right) + \frac{1}{2} [(1.25 - 1.5)^2 + (1.25 - 1)^2]$$
$$= 1.1042$$

$$\sigma = \sqrt{1.1042} = 1.051 = \sigma$$

### Visual Description
Handwritten mathematical solution for Question 3, parts (a) and (b). The student calculates the expected value and variance for a mixture distribution. Final answers are boxed.

---
## Page 8
### Content
Question assigned to the following page: 4

$$M_X(t) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} \exp(-x^2/2) \exp(tx) dx$$
$$= \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} \exp \left( -\frac{x^2}{2} + tx \right) dx$$

$$tx - \frac{x^2}{2} = -\frac{1}{2}(x^2 - 2tx) =$$
$$-\frac{1}{2}(x^2 - 2tx + t^2) + \frac{1}{2}t^2 =$$
$$-\frac{1}{2}(x-t)^2 + \frac{1}{2}t^2$$

$$= \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} \exp \left( -\frac{1}{2}(x-t)^2 + \frac{1}{2}t^2 \right) dx$$
$$= \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} (e^{t^2/2} \cdot e^{-(x-t)^2/2}) dx$$
$$= \frac{1}{\sqrt{2\pi}} e^{t^2/2} \int_{-\infty}^{\infty} e^{-\frac{(x-t)^2}{2}} dx$$
$$= e^{t^2/2} = M_X(t)$$

### Visual Description
Handwritten mathematical derivation of the Moment Generating Function (MGF) for a standard normal random variable. The student uses the technique of completing the square in the exponent. The final result is boxed.

---
## Page 9
### Content
$$e^{t^2/2} = M_X(t)$$

$$M'_X(0) = (e^{t^2/2})(t) = 0 \text{ — first moment}$$

$$M''_X(0) = \frac{d}{dt} [(e^{t^2/2})(t)] =$$

$$(e^{t^2/2})(t)(t) + e^{t^2/2} =$$

$$(e^{t^2/2})(t^2) + e^{t^2/2} = 0 + 1 = 1 \text{ — second moment}$$

Yes, this result is expected because the mean and variance match those of a standard normal RV.

### Visual Description
Handwritten mathematical derivation on a light yellow background. The results for the first and second moments (0 and 1) are circled in green.

---
## Page 10
### Content
$$Y = a + \sqrt{b} X$$

$$M_X(t) = E[e^{tX}] = e^{t^2/2}$$

$$M_Y(t) = E[e^{tY}] = E[e^{t(a + \sqrt{b} X)}]$$
$$= E[e^{at} \cdot e^{t\sqrt{b}X}]$$
$$= e^{at} \cdot E[e^{X(t\sqrt{b})}]$$
$$= e^{at} \cdot e^{\frac{(t\sqrt{b})^2}{2}} = e^{at + \frac{bt^2}{2}} = M_Y(t)$$

$$e^{t^2/2} = M_X(t)$$

### Visual Description
Handwritten mathematical derivation showing the moment generating function for a transformed random variable. The final formula for $M_Y(t)$ is enclosed in a hand-drawn box.

---
## Page 11
### Content
let $m = E(Y)$ and $b = E(Y|X=x)$.

$$E(b(X)) = E[E(Y|X)] = E(Y) = m$$

$$V(Y) = E[(Y-m)^2] = E[(Y-b(X)) + (b(X)-m)]^2$$
$$E[(Y-b(X))^2 + 2(Y-b(X))(b(X)-m) + (b(X)-m)^2]$$

$$E[E((Y-b(X))^2 | X)] + 2E[E((Y-b(X))(b(X)-m) | X)] + E[E((b(X)-m)^2 | X)]$$

Note: $2E[E((Y-b(X))(b(X)-m) | X)] =$
$$2E[(b(X)-m) E[Y-b(X) | X]] =$$
$$2E[(b(X)-m) \cdot 0] = 0$$

### Visual Description
Handwritten proof of the law of total variance. Different parts of the expanded expectation are highlighted with yellow, green, and pink markers to track terms.

---
## Page 12
### Content
$$E[E((Y-b(X))^2 | X)]$$
$$E[(Y-\mu_y)^2 | X] = E[Var(Y|X)]$$

Last term:
$$E[E((b(X)-m)^2 | X)] = E[(b(X)-m)^2] =$$
$$Var(b(X)) = Var(E[Y|X])$$

So,
$$V(Y) = E[Var(Y|X)] + Var(E[Y|X])$$

### Visual Description
Continuation of the handwritten proof from the previous page. Highlights in yellow and pink correspond to terms from the previous page. The final formula for the law of total variance is enclosed in a hand-drawn box.

---
## Page 13
### Content
(6) (a)
[Number line diagram showing points 0, $a$, $b$, 1]

$$P[Y=1] = \frac{b}{1}$$
$$P[Y=0] = \frac{1-b}{1}$$

$$P[Z=1] = \frac{1-a}{1}$$
$$P[Z=0] = \frac{a}{1}$$

Note, $P(Y=1 \text{ and } Z=1) =$
$$P(Y=1 | Z=1) P(Z=1) =$$
$$\frac{b-a}{(1-a)} (1-a) = (b-a)$$

$$P(Y=1) P(Z=1) = b - ba.$$

So, not independent.

### Visual Description
Handwritten probability problem involving a number line from 0 to 1 with points $a$ and $b$. Calculations show that two events are not independent. The conclusion "So, not independent" is highlighted in pink.

---
## Page 14
### Content
(b) Find $E(Y|Z)$.

If $Z=1 \rightarrow a < x < 1$
$$P(Y=0) = \frac{1-b}{1-a}$$
$$P(Y=1) = \frac{b-a}{1-a}$$
$$E[Y|Z=1] = 0 \cdot \frac{1-b}{1-a} + \frac{b-a}{1-a}(1) = \frac{b-a}{1-a}$$

If $Z=0 \rightarrow 0 < x < a$
$$P(Y=0) = 0$$
$$P(Y=1) = 1$$

$$E[Y|Z] = \left(\frac{b-a}{1-a}\right)(1-a) + a =$$
$$b-a + a = b$$

### Visual Description
Handwritten solution for a conditional expectation problem. Includes a small number line at the top. The final result, $b$, is enclosed in a hand-drawn box.

---
## Page 15
### Content
(a) $E[f(U)] = \int_0^2 f(x) p(x) dx = \frac{1}{2} \int_0^2 f(x) dx$

$$I(f) = \int_0^2 f(x) dx = 2 E[f(U)]$$
$$U \sim Unif(0,2)$$

(b) We can draw several samples from a uniform dist, calculate the value of the function at these points. Then, we can form the sample mean $\bar{f} = \frac{1}{n} \sum_{i=1}^n f(U_i)$, and use unbiased estimator

$$\hat{I}_n = \frac{2}{n} \sum_{i=1}^n f(U_i) = 2\bar{f}_i$$

### Visual Description
Handwritten notes explaining Monte Carlo integration. Key formulas for the integral $I(f)$ and the distribution of $U$ are enclosed in hand-drawn boxes.

---
## Page 16
### Content
...looks bell-shaped with a center around 0.4775.

![Histogram of 100 Monte Carlo estimates]

```python
import numpy as np
import matplotlib.pyplot as plt

def mc_once(n=1000, rng=np.random.default_rng()):
    U = rng.uniform(0.0, 2.0, size=n)
    fU = (1/np.sqrt(2*np.pi)) * np.exp(-0.5 * U**2)
    return 2.0 * fU.mean()

# one estimate with 1000 samples
est = mc_once(1000)
print("One MC estimate (n=1000):", est)

# repeat 100 times
rng = np.random.default_rng(0)
ests = np.array([mc_once(1000, rng) for _ in range(100)])
print("Mean of 100 estimates:", ests.mean())
print("SD of 100 estimates:", ests.std(ddof=1))

plt.hist(ests, bins=15, edgecolor="k")
plt.xlabel("Monte Carlo estimate of I(f)")
plt.ylabel("Count")
plt.title("100 Monte Carlo estimates (n=1000 each)")
plt.show()
```

### Visual Description
Handwritten text at the top, followed by a histogram plot showing the distribution of 100 Monte Carlo estimates. Below the plot is a screenshot of Python code used to generate the simulation and the histogram.
## Page 17
### Content
Question assigned to the following page: 7

$0.47725$

```python
import math
I_exact = 0.5 * math.erf(2 / math.sqrt(2))
print(I_exact) # 0.4772498680518208
```
### Visual Description
A light-colored page featuring a handwritten number $0.47725$ enclosed in a rounded box. Below it is a screenshot of a code editor with a dark background displaying Python code. The code imports the `math` module, calculates a variable `I_exact` using the error function `math.erf`, and prints the result, which is shown in a comment as $0.4772498680518208$.

---
## Page 18
### Content
[Blank Page]
### Visual Description
Blank page.
