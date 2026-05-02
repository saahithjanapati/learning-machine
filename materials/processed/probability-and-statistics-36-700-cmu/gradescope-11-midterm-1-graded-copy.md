# gradescope-11-midterm-1-graded-copy

Source: `materials/archive/probability-and-statistics-36-700-cmu/gradescope-graded-copies/gradescope-11-midterm-1-graded-copy.pdf`
Duplicate equivalents: `gradescope-11-midterm-1-graded-copy.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 16

## Page 1
### Content
**Midterm 1**
**Graded**

**Student:** Saahith Janapati
**Total Points:** 64 / 100 pts

**Question 1**
**Ratio Probability Calculation** 5 / 15 pts
- 0 pts Correct
- -2 pts (a) Incorrect approach
- -0.5 pts (a) Correct approach but minor calculation error/incomplete calculation
- -2 pts (b) Incorrect approach
- -0.5 pts (b) Correct approach but minor calculation error/incomplete calculation
- -2 pts (c) Incorrect approach
- -0.5 pts (c) Correct approach but minor calculation error/incomplete calculation
- -5 pts (a) Missing/incomplete
- [Checked] -5 pts (b) Missing/incomplete
- [Checked] -5 pts (c) Missing/incomplete

**Question 2**
**Covariance of Reflection** 10 / 10 pts
- [Checked] - 0 pts Correct
- -2 pts (a) correctly arrives at $Cov(X, Y) = 0$ but without proper justification
- -2 pts (b) Incorrect/incomplete explanation
- -5 pts (a) Missing
- -5 pts (b) Missing

**Question 3**
**Uniform with Exponential Upper Bound** 9 / 15 pts
- 0 pts Correct
- [Checked] - 3 pts Incorrect approach for $E(U)$
- -1 pt Correctly applies iterated expectations but has a calculation error
- [Checked] - 3 pts Incorrect approach for $Var(U)$
- -1 pt Correctly applies variance decomposition but has a calculation error

### Visual Description
This is a digital grading summary page from Gradescope. It lists the student's name, total score, and a breakdown of points for the first three questions of a midterm exam. Each question shows a rubric with point deductions and checkmarks indicating which rubric items were applied.

---
## Page 2
### Content
**Question 4**
**Even Function Probability Bound** 12.5 / 15 pts
- 0 pts Correct
- [Checked] - 2 pts (a) Incorrect approach
- -0.5 pts (a) Minor reasoning error
- -2 pts (b) Incorrect approach
- [Checked] - 0.5 pts (b) Minor reasoning error
- -15 pts Missing
- -5 pts Missing (a)

**Question 5**
**Bernoulli Convergence** 10 / 10 pts
- [Checked] - 0 pts Correct
- -2 pts Convergence in distribution: incorrect conclusion and incorrect/missing reasoning
- -0.5 pts Convergence in distribution: incorrect conclusion and correct reasoning or correct conclusion and incorrect/missing reasoning
- -2 pts Convergence in probability: incorrect conclusion and incorrect/missing reasoning
- -0.5 pts Convergence in probability: incorrect conclusion and correct reasoning or correct conclusion and incorrect/missing reasoning
- -10 pts Missing

**Question 6**
**Limiting Distribution of Transformed Max** 7.5 / 15 pts
- 0 pts Correct
- -2 pts Mostly correct approach but incorrect final answer
- -5 pts Writing things logically linked to the target probability statement but has major reasoning problem.
- [Checked] - 7.5 pts Writing things relevant but things aren't well organized to link to the target probability statement
- -15 pts Missing

### Visual Description
This is the second page of the digital grading summary. It continues the point breakdown for Questions 4, 5, and 6, showing rubric items and applied deductions.

---
## Page 3
### Content
**Question 7**
**Empirical CDF** 4 / 20 pts
- 0 pts Correct
- -2 pts (a) Expected value: Incorrect approach and incorrect final answer
- -1 pt (a) Expected value: Minor error
- [Checked] - 2 pts (a) Variance: Incorrect or incomplete approach and incorrect final answer
- -1 pt (a) Variance: Minor error
- -6 pts (a) missing
- -3 pts (b) write relevant things, but doesn't have logically valid derivations or misunderstand the definition of consistency
- -5 pts (b) write things irrelevant or with major reasoning gap.
- [Checked] - 6 pts (b) missing
- -4 pts (c) don't have CLT or the CLT is used without logic, or give a wrong answer abruptly
- -3 pts (c) have relevant derivation but don't have CLT
- -2 pts (c) have the CLT, but doesn't have correct rescaling
- -1 pt (c) Minor error
- [Checked] - 5 pts (c) missing
- -2 pts (d) Incorrect approach or major reasoning problem
- -1 pt (d) Minor error
- [Checked] - 3 pts (d) missing

**Question 8**
**Additional points** 6 / 0 pts
- [Checked] + 6 pts Correct
- - 0 pts None

### Visual Description
This is the third page of the digital grading summary. It provides the point breakdown for Question 7 and Question 8. Question 8 appears to be for extra credit as it shows a score of 6 / 0 pts.

---
## Page 4
### Content
**36-700 Probability and Mathematical Statistics**
**Midterm 1 - Fall 2025**

**Printed Name:** Saahith Janapati
**Andrew ID:** sjanapat

This exam is closed book/notes. I have neither given nor received assistance on this exam.
**Signature:** [Signature]

- Please legibly write all parts of your solutions inside the boxes. We will not read or grade things outside of boxes.
- Calculators are not allowed or needed. Show all work for full credit. You may leave your final answer in fractions, combination/permutation numbers, exponential functions, and $\Phi(\cdot)$, the CDF of standard normal. Integrals need to be simplified.
- You can find the official formula sheet and a table of distributions at the back of the exam. You can use the last page as scratch paper.

### Visual Description
This is the cover page of the physical exam paper. It contains the course title, exam name, student identification fields (name, ID, signature), and general instructions for the exam. The student's name and ID are handwritten.

---
## Page 5
### Content
1. Let $X$ and $Y$ be independent continuous random variables, $X$ with density $f_X(x) = e^{-x}, x > 0$, $Y$ uniformly distributed on $(0, 1)$. Let $V = X/(X+Y)$.
(a) Find $P(V > v | Y = y)$ for $v \in (0, 1)$. $0 < v < 1$

**Handwritten Work:**
$V = \frac{X}{X+y}$
$P(V > v | Y = y) = P(\frac{X}{X+y} > v | Y = y)$
$= P(X > \frac{y}{\frac{1}{v}-1} | Y = y) = $
Boxed answer:
$\begin{cases} 0 & v < 0 \\ 1 - e^{-(\frac{y}{1/v - 1})} & \text{for } v \in (0, 1) \\ 1 & \text{when } v > 1 \end{cases}$

**Scratch work on side:**
$(\frac{X}{X+y}) > v$
$\frac{X+y}{X} < \frac{1}{v}$
$1 + \frac{y}{X} < \frac{1}{v}$
$\frac{y}{X} < \frac{1}{v} - 1$
$\frac{y}{\frac{1}{v}-1} < X$
$X > \frac{y}{\frac{1}{v}-1}$

(b) Compute $P(V > v)$.

**Handwritten Work:**
$P(V > v) = $
[A coordinate axis is drawn, but no further work is shown.]

### Visual Description
This page contains the first question of the exam. Part (a) shows the student's handwritten derivation and a boxed final answer for a conditional probability. Part (b) is mostly blank except for the start of a probability statement and a small sketch of a graph.

---
## Page 6
### Content
(c) What is the pdf of $V$?

[The box for the answer is empty.]

**Handwritten at bottom:**
Saahith Janapati
sjanapat
[Signature]

### Visual Description
This page contains part (c) of Question 1, which is left blank by the student. At the bottom of the page, the student has rewritten their name, Andrew ID, and signature.

---
## Page 7
### Content
2. Let $X$ be a non-degenerate random variable with mean $E[X^2] < \infty$, and let $Y = SX$, where $S$ is an independent random variable such that $P(S = 1) = P(S = -1) = \frac{1}{2}$.
(a) Show that $Cov(X, Y) = 0$.

**Handwritten Work:**
$Cov[X, Y] = E[XY] - E[X]E[Y]$
$= E[(X - \mu_X)(Y - \mu_Y)]$
$\mu_Y = (\mu_X)(1)(\frac{1}{2}) + (\mu_X)(-1)(\frac{1}{2}) = 0$
Also note, $E[XY] = E[X S X] = E[X^2 S] = E[X^2]E[S] = 0$
So, $Cov[X, Y] = 0 - 0 = 0$. $\square$

(b) Explain why $X$ and $Y$ are not independent.

**Handwritten Work:**
$P(Y = y) = P(X = y)P(S = 1) + P(X = -y)P(S = -1)$
$= \frac{1}{2}(P(X = y) + P(X = -y))$
$P(Y = y | X) = \begin{cases} 0 & \text{if } X \neq \pm y \\ \frac{1}{2} & \text{if } X = y \\ \frac{1}{2} & \text{if } X = -y \end{cases}$
Boxed section:
$P(X | y) = \begin{cases} 0 & \text{if } |y| \neq |x| \\ 1/2 & \text{if } |y| = |x| \end{cases}$
$P(X) = P(X)$ (no relationship on $y$)
[Arrow pointing to the two statements above]: "These two are in general not the same; so $X, Y$ must be independent" [Note: Student likely meant 'dependent'].

### Visual Description
This page contains Question 2. Part (a) shows a handwritten proof that the covariance is zero. Part (b) shows a handwritten explanation attempting to show that $X$ and $Y$ are not independent by comparing conditional and marginal probabilities.

---
## Page 8
### Content
3. Let $T$ be an exponential random variable with parameter $\beta$ and let $U$ be uniform on $[0, T]$. Find $E(U)$ and $Var(U)$.

**Handwritten Work:**
$T = \frac{e^{-x/\beta}}{\beta}$
$U = Uni[0, \frac{e^{-x/\beta}}{\beta}]$
$E[U] = E_T[E_U[U | T]]$
$= E_T[\frac{0 + T}{2}]$
$\int_{-\infty}^{\infty} (\frac{e^{-x/\beta}/\beta}{2}) (e^{-x/\beta}/\beta) dx$
Boxed: $E[U] = \int_{-\infty}^{\infty} (\frac{e^{-x^2/\beta}}{2\beta}) dx$

$Var[U] = E[V[U | T]] + V[E[U | T]] \quad ?$

### Visual Description
This page contains Question 3. The student has written out the law of iterated expectations for $E[U]$ and the law of total variance for $Var[U]$. There is an attempt at an integral for $E[U]$ which is boxed, and the variance calculation is left as a formula with a question mark.

---
==End of PDF==
## Page 9
### Content
4. Suppose that $X$ is a random variable. Let $g$ be a nonnegative even function ($g(x) = g(-x)$) that is increasing on $[0, \infty)$ and supposed that $\mathbb{E}[g(X)] < \infty$.
(a) Show that
$$\mathbb{P}[|X| > \epsilon] \le \frac{\mathbb{E}[g(X)]}{g(\epsilon)}$$
for any $\epsilon > 0$.

[Handwritten box]
By Markov, we have
$P(X \ge t) \le \frac{\mu}{t}$.
Define $Y = g(X)$. Because $g$ is nonnegative even, we have
[unreadable]

(b) Let $\{X_n\}$ be a sequence of random variables such that $\mathbb{E}[|X_n|^r] \to 0$ as $n \to \infty$. Show that $X_n \xrightarrow{P} 0$.

[Handwritten box]
WTS $\lim_{n \to \infty} P(|X_n - 0| > \epsilon) = 0$
we know $\lim_{n \to \infty} \frac{1}{n} \sum_{i=1}^n |X_n|^r = 0$.
WLLN implies $|X_n|^r \to 0$!!
Taking $r^{th}$ root, we get $|X_n| \to 0$, which is what we wanted to show.

### Visual Description
The page contains two parts of a probability problem (4a and 4b) with handwritten solutions in boxes. The handwriting is somewhat messy. Part (a) is incomplete, and part (b) contains some mathematical notation and a brief argument.

---
## Page 10
### Content
5. Let $X_n \sim \text{Bernoulli}(1/2 + 1/n)$ and let $X \sim \text{Bernoulli}(1/2)$. Does $X_n$ converge to $X$ in distribution? Does it converge to $X$ in probability?

[Handwritten box]
$P(|X_n - X| < \epsilon) \to 0$ as $\lim_{n \to \infty}$

$X_n \sim \begin{cases} 1 & \text{w/ prob } \frac{1}{2} + \frac{1}{n} \\ 0 & \text{w/ prob } \frac{1}{2} \end{cases}$
$X \sim \begin{cases} 1 & \text{w/ prob } 1/2 \\ 0 & \text{w/ prob } 1/2 \end{cases}$

Note PDF of $X_n = P_{X_n}(x) = (\frac{1}{2} + \frac{1}{n})^x (1 - (\frac{1}{2} + \frac{1}{n}))^{1-x}$.
As $n \to \infty$, $P_{X_n}(x) \to (\frac{1}{2})^x (1 - \frac{1}{2})^{1-x} = P_X(x)$
So, the CDF will match too, and $X_n$ converges to $X$ in distribution.

They do not converge in probability because no matter how large $n$ is, there is $\sim 1/2$ chance that $|X_n - X| = 1 > \epsilon$.

### Visual Description
A single probability problem with a handwritten solution. The solution is divided into two sections by a horizontal line, addressing convergence in distribution and convergence in probability separately.

---
## Page 11
### Content
6. Let $X_1, \dots, X_n$ be a collection of continuous random variables with cdf $F(x)$ and pdf $f(x)$. Let $Y_n = \max\{X_1, \dots, X_n\}$. Find the limiting distribution of $Z_n = n[1 - F(Y_n)]$.

[Handwritten box]
$F_{Y_n}(y) = (1 - F_X(y))^n$
$Z_n = n[1 - (1 - F_X(y))^n]$

as $n \to \infty$,
$(1 - F_X(y))^n \to 0$

### Visual Description
A probability problem about the limiting distribution of a function of the maximum of a sample. The handwritten solution is brief and contains some mathematical derivations.

---
## Page 12
### Content
7. Let $X_1, \dots, X_n \sim F$ be an IID sample where $F$ is a CDF on the real line; i.e., $F(x) = \mathbb{P}(X_1 \le x)$ where $x$ is a real number. Consider the so called empirical distribution function $\hat{F}_n$ defined by
$$\hat{F}_n(x) = \frac{\sum_{i=1}^n I(X_i \le x)}{n}$$
where the indicator function
$$I(X_i \le x) = \begin{cases} 1 & \text{if } X_i \le x \\ 0 & \text{otherwise.} \end{cases}$$
(a) Find $\mathbb{E}(\hat{F}_n(x))$ and $\mathbb{V}(\hat{F}_n(x))$.

[Handwritten box]
$\mathbb{E}(\hat{F}_n(x)) = \frac{n \cdot F(x)}{n} = F(x)$

$\mathbb{V}(\hat{F}_n(x)) = \mathbb{E}[X^2] - \mathbb{E}[X]^2 = \mathbb{E}[(\frac{\sum_{i=1}^n I(X_i \le x)}{n})^2] - F(x)^2$

let
(1)(1/
$F(x)$
$\mathbb{E}[X^2]$

### Visual Description
The start of a multi-part problem on empirical distribution functions. The handwritten solution for part (a) shows the calculation for the expectation and the beginning of the variance calculation, though the latter part is fragmented and messy.

---
## Page 13
### Content
(b) Show that $\hat{F}_n(x)$ is a consistent estimator of $F(x)$.
[Empty box]

(c) For any fixed value of $x$, find the limiting distribution of $\hat{F}_n(x)$. (Remember to rescale your answer so that the limit does not depend on $n$.)
[Empty box]

### Visual Description
Parts (b) and (c) of question 7. Both answer boxes are empty.

---
## Page 14
### Content
(d) Use your answer in part c, to construct an approximate 95% confidence interval for $F(x)$ at fixed $x$.
[Empty box]

### Visual Description
Part (d) of question 7. The answer box is empty.

---
## Page 15
### Content
[Blank page]

### Visual Description
Blank page.

---
## Page 16
### Content
[Blank page]

### Visual Description
Blank page.
