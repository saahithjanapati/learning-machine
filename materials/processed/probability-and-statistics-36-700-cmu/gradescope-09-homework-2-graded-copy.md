# gradescope-09-homework-2-graded-copy

Source: `materials/archive/probability-and-statistics-36-700-cmu/gradescope-graded-copies/gradescope-09-homework-2-graded-copy.pdf`
Duplicate equivalents: `gradescope-09-homework-2-graded-copy.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 15

## Page 1
### Content
**Homework 2**
**Student:** Saahith Janapati
**Total Points:** 99 / 100 pts

**Question 1: Raining in October** (15 / 15 pts)
*   $\checkmark$ - 0 pts Correct
*   - 1 pt Minor error in computation of transition probabilities.
*   - 2 pts Did not use law of conditional probability correctly in Problem 1a (need an initial term). To see this, write the probability out fully using the conditional probability rules we learned.
*   - 2 pts Minor error in computation of probability of "no rain" (could be in either part).
*   - 3 pts Did not estimate "probability of no rain" term correctly, only in Problem 1b.
*   - 3 pts Did not estimate "probability of no rain" term correctly. This should be the total number of days it rained, divided by the total number of days (by exchangeability).
*   - 5 pts Did not estimate "probability of no rain" term correctly. This should be the total number of days it rained, divided by the total number of days (by exchangeability).
*   - 15 pts Missing

**Question 2: Valid CDF** (10 / 10 pts)
*   $\checkmark$ - 0 pts Correct
*   - 1 pt a) Mostly correct reasoning
*   - 2 pts a) Major reasoning error
*   - 1 pt b) Mostly correct reasoning
*   - 2 pts b) Major reasoning error
*   - 1 pt c) Mostly correct reasoning
*   - 2 pts c) Major reasoning error
*   - 10 pts Missing

### Visual Description
Text-only slide.

---
## Page 2
### Content
**Question 3: Uniform Distribution on Square** (14 / 15 pts)
*   - 0 pts Correct
*   - 2 pts a) Incorrect answer
*   - 1 pt b) Minor calculation error
*   - 2 pts b) Major reasoning error
*   - 1 pt c) Minor calculation error
*   - 2 pts c) Major reasoning error
*   $\checkmark$ - 1 pt d) Minor calculation error
*   - 2 pts d) Major reasoning error
*   - 15 pts Missing

**Question 4: Uniform Distribution on Ball** (10 / 10 pts)
*   $\checkmark$ - 0 pts Correct
*   - 1 pt Minor calculation error
*   - 2 pts Calculus mistake
*   - 5 pts Major reasoning error

**Question 5: Quartic uniform distribution** (10 / 10 pts)
*   $\checkmark$ - 0 pts Correct
*   - 2 pts Incorrect CDF
*   - 2 pts Incorrect PDF
*   - 5 pts Major reasoning error
*   - 2 pts Minor calculation error
*   - 10 pts Missing

### Visual Description
Text-only slide.

---
## Page 3
### Content
**Question 6: CDF of a Max** (10 / 10 pts)
*   $\checkmark$ - 0 pts Correct
*   - 2 pts Attempted to break up into cases where Y is bigger than or smaller than 0 but did not arrive at the correct answer.
*   - 2 pts The graph is incorrect
*   - 5 pts Incorrect or missing reasoning.
*   - 5 pts Missing plot.
*   - 10 pts Missing

**Question 7: Wasserman 2.21** (10 / 10 pts)
*   $\checkmark$ - 0 pts Correct
*   - 2 pts Minor error
*   - 5 pts Missing key step (e.g., recognizing max as intersection events, correctly applying independence, differentiation)
*   - 10 pts Missing

**Question 8: Probability Integral Transform** (10 / 10 pts)
*   $\checkmark$ - 0 pts Correct
*   - 1 pt a) Correct approach but minor error
*   - 3 pts a) Major reasoning error
*   - 1 pt b) Correct approach but minor error
*   - 3 pts b) Major reasoning error
*   - 10 pts Missing

**Question 9: Jacobian Change of Variables** (10 / 10 pts)
*   $\checkmark$ - 0 pts Correct
*   - 2 pts Minor error (missing absolute value, not mentioning invertibility of T)
*   - 5 pts Major reasoning error
*   - 10 pts Missing

### Visual Description
Text-only slide.

---
## Page 4
### Content
Question assigned to the following page: 1

[Handwritten work based on calendar data]

$P(A_i) = \frac{7+7+9+14}{31 \cdot 4} = \frac{37}{124}$

$P(A_i | A_{i-1}) = \frac{2+1+4+8}{35} = \frac{17}{35}$
$\rightarrow 35$
only using september data

(a) $P(\text{Rain in Sept.}) = P(A_1) \cdot \prod_{i=2}^{31} P(A_i | A_{i-1})$
$= (\frac{37}{124}) (\frac{17}{35})^{30}$
$= 1.165 \times 10^{-10}$

### Visual Description
The page contains handwritten calculations and four screenshots of calendar views for October 2024, 2023, 2022, and 2021. Rainy days are circled in red on the calendars. Handwritten notes indicate the number of rainy days and pairs of consecutive rainy days for each year.

---
## Page 5
### Content
Question assigned to the following page: 1

[Handwritten work]

all are independent,

$P(A_i) = \frac{37}{124}$

$P(\neg A_i) = 1 - \frac{37}{124}$

$P(\text{no rain in Sept.}) = (1 - \frac{37}{124})^{31}$
$= 1.694 \times 10^{-5}$

The result from (a) is likely more accurate because rainfall on day $i$ is likely somewhat dependent on day $i-1$ due to the overall climate.

### Visual Description
Handwritten text and mathematical calculations on a plain white background. The final numerical result is highlighted in yellow.

---
## Page 6
### Content
Question assigned to the following page: 2

[Handwritten work]

**Conditions for CDF**

1. **Limits at $\pm \infty$**
$F_X(x) = \begin{cases} 1 - \exp(-x) & \text{for } x \in (0, \infty) \\ 0 & \text{for } x \le 0 \end{cases}$
$\lim_{x \to -\infty} F_X(x) = 0$
$\lim_{x \to \infty} F_X(x) = 1 - 0 = 1$

2. Note that $F_X(x)$ is constant on $(-\infty, 0]$, so it is non-decreasing. Also, note $\exp(-x)$ is decreasing, so $1 - \exp(-x)$ is increasing. Lastly note that $\exp(-x) < 1$ $\forall x \in (0, \infty)$, so $1 - \exp(-x) > 0$ on $(0, \infty)$. So, $F_X(x)$ is non-decreasing.

3. Note that $F_X(x)$ is continuous on $(-\infty, 0)$ (since it is constant), and continuous on $(0, \infty)$, since $F'_X(x) = e^{-x}$. Also note that $F_X(0) = 0 = \lim_{x \to 0^+} 1 - \exp(-x) = 1 - 1 = 0$. So $F_X(x)$ is right-continuous on $(-\infty, \infty)$.

### Visual Description
Handwritten mathematical proof showing that a given function satisfies the three properties of a Cumulative Distribution Function (CDF).

---
## Page 7
### Content
Question assigned to the following page: 3

[Handwritten work]

(b) $P(0.5 \le X \le 1) = 0.25$
(c) $P(0.5 \le X \le 1.5) = 0.25$
(d) $\int_{-1}^1 [1 - (-x + 1/2)] dx$
$y = -x + 1/2$
$= \int_{-1}^1 (1 + x - 1/2) dx$
$= \int_{-1}^1 (1/2 + x) dx = \frac{1}{2}x + \frac{x^2}{2} \Big|_{-1}^1 =$
$(1/2 + 1/2) - (-1/2 + 1/2) = 1$
$1/4 = 0.25$

### Visual Description
Handwritten calculations for probability problems. Includes a small graph of a square centered at the origin with side length 2 (from -1 to 1 on both axes). A line $y = -x + 1/2$ is drawn through the square, and the region above the line within the square is shaded with diagonal lines. Several final answers are highlighted in yellow.

---
## Page 8
### Content
Question assigned to the following page: 4

[Handwritten work]

Area of unit disk $= \pi r^2$

$$P(x,y) = \begin{cases} 1/\pi r^2 & \text{if } x^2 + y^2 \le 1 \\ 0 & \text{otherwise} \end{cases}$$

### Visual Description
Handwritten work showing a drawing of a shaded unit circle on a Cartesian coordinate system. To the right of the drawing, the area formula for a disk is written, followed by a boxed piecewise function defining the probability density function $P(x,y)$ for a uniform distribution on that disk.

---
## Page 9
### Content
Question assigned to the following page: 5

$P_X(x) = \begin{cases} \frac{1}{6} & \text{for } -5 \le x \le 1 \\ 0 & \text{otherwise} \end{cases}$

$P(x \le 0)$
Number line diagram: A line from -5 to 1, with a segment from -1 to 1 labeled "2" and the total segment from -5 to 1 labeled "6".

$F_Y(y) = \begin{cases} P(-y^{1/4} \le x \le y^{1/4}) & 0 \le y \le 1 \\ P(-y^{1/4} \le x \le 1) & 1 < y \le 625 \end{cases}$

$= \begin{cases} \int_{-y^{1/4}}^{y^{1/4}} 1/6 \, dx = \frac{1}{6} (y^{1/4} - (-y^{1/4})) = \frac{1}{6} (2y^{1/4}) = \frac{y^{1/4}}{3} \\ \int_{-y^{1/4}}^{1} 1/6 \, dx = \frac{1}{6} x \Big|_{-y^{1/4}}^{1} = \frac{1}{6} (1 - (-y^{1/4})) = \frac{1}{6} (1 + y^{1/4}) \end{cases}$

Final CDF:
$F_Y(y) = \begin{cases} 0 & y < 0 \\ y^{1/4}/3 & 0 \le y \le 1 \\ \frac{1}{6}(1 + y^{1/4}) & 1 < y \le 625 \\ 1 & y > 625 \end{cases}$

Final PDF:
$p_Y(y) = \begin{cases} 0 & y < 0 \\ (\frac{1}{12})y^{-3/4} & 0 \le y \le 1 \\ (\frac{1}{24})y^{-3/4} & 1 \le y \le 625 \\ 0 & y > 625 \end{cases}$

### Visual Description
Handwritten mathematical derivation of the CDF and PDF for a transformed random variable. It includes a number line diagram at the top right and several piecewise functions, some of which are highlighted in yellow.

---
## Page 10
### Content
Question assigned to the following page: 6

$\forall y < 0, f_Y(y) = 0$.
For $y \ge 0$, $F_Y(y) = F_X(y)$ (highlighted).

Red box = CDF of $X$
Blue box = CDF of $Y$

$\frac{1}{2}(1 + \text{erf}(\frac{x}{\sqrt{2}}))$
$f(x) = \{x < 0: 0, x \ge 0: \frac{1}{2}(1 + \text{erf}(\frac{x}{\sqrt{2}}))\}$

Graph: A coordinate plane showing a curve that is 0 for $x < 0$ (red) and follows a sigmoid-like shape for $x \ge 0$ (blue), approaching a horizontal asymptote at $y=1$.

### Visual Description
Handwritten notes explaining a relationship between two CDFs, accompanied by a graph showing a piecewise function involving the error function.

---
## Page 11
### Content
Question assigned to the following page: 7

Let $X_1, \dots, X_n \sim \text{Exp}(\beta)$ be IID. Let $Y = \max\{X_1, \dots, X_n\}$. Find the PDF of $Y$.
Hint: $Y \le y$ iff $X_i \le y$ for $i = 1, \dots, n$.

$P(X_i \le y) = \begin{cases} 1 - e^{-\beta y} & y \ge 0 \\ 0 & y < 0 \end{cases}$

Since $Y = \max\{X_1, \dots, X_n\}$, and $X_1, \dots, X_n$ are IID, we have
$P(Y \le y) = \begin{cases} (1 - e^{-\beta y})^n & y \ge 0 \\ 0 & y < 0 \end{cases}$

This is the CDF, so we need derivative to get PDF.

$f_Y(y) = \frac{d}{dy} P(Y \le y) = \begin{cases} \beta n e^{-\beta y} (1 - e^{-\beta y})^{n-1} & y \ge 0 \\ 0 & y < 0 \end{cases}$ (highlighted)

### Visual Description
Handwritten derivation of the PDF for the maximum of $n$ independent and identically distributed exponential random variables.

---
## Page 12
### Content
Question assigned to the following page: 8

$P(F(X) \le y)$
Note, if a function is continuous and strictly increasing, that means it has an inverse on its range $[0, 1]$.

Graph: A sketch of a strictly increasing function $F$ mapping from the x-axis to the interval $[0, 1]$ on the y-axis.

Let $x = F^{-1}(y)$. $P(Y \le y) = P(X \le x) = F(x) = F(F^{-1}(y)) = y$

$P(Y \le y) = \begin{cases} y & 0 \le y \le 1 \\ 0 & \text{otherwise} \end{cases}$

$f_Y(y) = \begin{cases} 1 & 0 \le y \le 1 \\ 0 & \text{otherwise} \end{cases}$ (highlighted)

### Visual Description
Handwritten notes and a small graph proving that the probability integral transform of a continuous random variable follows a Uniform(0,1) distribution.

---
## Page 13
### Content
Question assigned to the following page: 8

WTS: $P(Z \le z) = P(F^{-1}(U) \le z) = P(X \le z) = F(z)$

Graph: A sketch of a strictly increasing function $F$ mapping to the interval $[0, 1]$.

Note that because $F$ is strictly increasing and continuous, and $U \in [0, 1]$, we have
$F^{-1}(U) \le z \implies U \le F(z)$

$P(U \le F(z)) = \begin{cases} 0 & \text{for } F(z) < 0 \\ F(z) & \text{for } 0 \le F(z) \le 1 \\ 1 & \text{for } F(z) > 1 \end{cases}$

So,
$F_Z(z) = P(F^{-1}(U) \le z) = P(U \le F(z)) = F(z)$

So, $Z \sim F$.

### Visual Description
Handwritten proof of the inverse transform sampling method, showing how to generate a random variable with a specific distribution $F$ from a Uniform(0,1) variable.

---
## Page 14
### Content
Question assigned to the following page: 9

$r(x) = ax + b$, so
$s(y) = \frac{y-b}{a}$, $\frac{ds(y)}{dy} = \frac{1}{a}$

$f_Y(y) = f_X(s(y)) \cdot \left| \frac{ds(y)}{dy} \right| = f_X\left(\frac{y-b}{a}\right) \cdot \left| \frac{1}{a} \right|$ (boxed)

We can use the Jacobian method because $r(x) = ax + b$ is invertible, and $s$ is differentiable.

### Visual Description
Handwritten notes demonstrating the transformation of a random variable under a linear function using the Jacobian method.

---
## Page 15
### Content
[Blank page]

### Visual Description
Blank page.

---
