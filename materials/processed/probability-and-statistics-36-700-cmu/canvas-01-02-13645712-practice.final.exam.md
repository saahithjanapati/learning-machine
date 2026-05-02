# canvas-01-02-13645712-practice.final.exam

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-01-02-13645712-practice.final.exam.pdf`
Duplicate equivalents: `canvas-01-02-13645712-practice.final.exam.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 19

## Page 1
### Content
**36-700 – Probability and Mathematical Statistics**
*Practice Exam*

**Printed Name:** ______________________________

**Andrew ID:** ______________________________

**This exam is closed book/notes. I have neither given nor received assistance on this exam.**

**Signature:** ______________________________

* Please legibly write all parts of your solutions inside the boxes. We will not read or grade things outside of boxes.
* You will get a **bonus point** for writing your name at the top of each page.
* **Show all work for full credit.** You may leave your final answer in fractions, combination/permutation numbers, exponential functions, and $\Phi(\cdot)$, the CDF of standard normal. Integrals need to be simplified.
* You can find the official formula sheet and a table of distributions at the back of the exam. You can use the last page as scratch paper. Calculators are not allowed or needed.
* Clearly fill in the multiple choice bubbles with your desired answer: $\bigcirc \to \bullet$. Avoid writing these: $\bigcirc \times$, $\bigcirc \checkmark$, $\bigcirc /$. If you can't cleanly erase, then do your best to **clearly** indicate your final answer.

1

### Visual Description
Text-only slide.

---

## Page 2
### Content
**Part I: Include your solutions for full credit.**

1. Let $X_1, \dots, X_n \stackrel{iid}{\sim} F$ for some (continuous and strictly increasing) CDF $F$. Let $\hat{F}_n(x) = \frac{1}{n} \sum_{i=1}^n \mathbb{I}(X_i \le x)$. Prove $\mathbb{E}[\hat{F}_n(x)]$ is an unbiased estimator of $F(x)$ for each $x$. Then use Hoeffding's inequality (include a justification) to show that, for any $t > 0$,
$$\mathbb{P}(|\hat{F}_n(x) - F(x)| > t) \to 0, \text{ as } n \to \infty$$

2

### Visual Description
The page contains a math problem followed by a large, empty rectangular box intended for the student's solution.

---

## Page 3
### Content
2. Let $X \sim \text{Uniform}(0, 1)$. Let $0 < a < b < 1$. Let
$$Y = \begin{cases} 1 & \text{if } 0 < X < b \\ 0 & \text{otherwise,} \end{cases} \quad Z = \begin{cases} 1 & \text{if } a < X < 1 \\ 0 & \text{otherwise.} \end{cases}$$

(a) Calculate the joint distribution of $Y$ and $Z$.

(b) Are $Y$ and $Z$ independent? Why/Why not?

3

### Visual Description
The page contains a math problem with two parts, (a) and (b). Each part is followed by a large, empty rectangular box for the solution.

---

## Page 4
### Content
(c) Find $\mathbb{E}(Z|Y)$.

(d) Find $\text{Var}(Z|Y)$

4

### Visual Description
The page contains parts (c) and (d) of the previous math problem. Each part is followed by a large, empty rectangular box for the solution.

---

## Page 5
### Content
3. Let $X_1, \dots, X_n \stackrel{iid}{\sim} \text{Uniform}(0, 1)$. Let $Y = \min(X_1, \dots, X_n)$.

(a) Find the CDF of $Y$.

(b) Let $Y_n = nY$. Find the CDF of $Y_n$ (remember to state the support).

5

### Visual Description
The page contains a math problem with two parts, (a) and (b). Each part is followed by a large, empty rectangular box for the solution.

---

## Page 6
### Content
(c) Find the limit of $Y_n$ as $n \to \infty$ and clearly state the mode of convergence ("$\xrightarrow{P}$" or "$\rightsquigarrow$"?).

6

### Visual Description
The page contains part (c) of the previous math problem, followed by a single large, empty rectangular box for the solution.

---

## Page 7
### Content
4. Suppose that $X_1, \dots, X_n \stackrel{iid}{\sim} N(\theta, 1)$, Hence, the density is
$$p_\theta(x) = \frac{1}{\sqrt{2\pi}} e^{-(x-\theta)^2/2}.$$

(a) Find the MLE.

7

### Visual Description
The page contains a math problem about Maximum Likelihood Estimation (MLE), followed by a large, empty rectangular box for the solution.

---

## Page 8
### Content
(b) Find the Fisher information. [Hint: Reuse your calculations from part (a)]

(c) Construct an asymptotic $1 - \alpha$ confidence interval for $\theta$.

8

### Visual Description
The page contains parts (b) and (c) of the previous math problem. Each part is followed by a large, empty rectangular box for the solution.
## Page 9
### Content
(d) Construct an asymptotic $1 - \alpha$ confidence interval for $e^\theta$.

(e) Find the PDF of $Y = e^X$ where $X \sim N(\theta, 1)$. Make sure to state the support.

### Visual Description
The page contains two large empty rectangular boxes intended for handwritten answers to parts (d) and (e) of a problem.

---
## Page 10
### Content
5. Let $X_1, X_2, \dots, X_n$ be I.I.D random variables such that $E(X_i) = \mu$ and $Var(X_i) = \sigma^2$. Assume that $\mu$ and $\sigma$ are finite. First **state**, and then **prove** the weak law of large numbers (WLLN).

### Visual Description
The page contains a large empty rectangular box intended for a handwritten answer to the problem statement.

---
## Page 11
### Content
6. Let $X_1, \dots, X_n \overset{iid}{\sim} \text{Exp}(\beta)$, and we want to test the hypotheses:
$$H_0 : \beta = 4 \quad \text{vs.} \quad H_1 : \beta = 7.$$

(a) Write down the Neyman-Pearson test statistic. Specify the critical value: you do not need to compute the critical value precisely but you should give an expression for it or describe clearly how you might compute it. [Hint: If $X_i \sim \text{Exp}(\beta)$ are independent, then $\sum_{i=1}^n X_i \sim \text{Gamma}(n, \beta)$.]

### Visual Description
The page contains a large empty rectangular box intended for a handwritten answer to part (a) of the problem.

---
## Page 12
### Content
(b) Compute the MLE and the Fisher Information for the Exponential distribution, and use this to describe the Wald test for the hypotheses $H_0 : \beta = 4$ versus $H_1 : \beta \neq 4$.

### Visual Description
The page contains a large empty rectangular box intended for a handwritten answer to part (b) of the problem.

---
## Page 13
### Content
7. For a histogram density estimator with bin width $h$, we define the mean integrated squared error as
$$\text{MISE}_h = \int b^2(x)dx + \int v(x)dx$$
where the bias at $x$ is $b_h(x) = E(\hat{f}(x)) - f(x)$ and the variance at $x$ is $v_h(x) = \text{Var}(\hat{f}(x))$.

(a) Illustrate schematically how the (integrated) bias squared, (integrated) variance, and the MISE depend on $h$ for a fixed, finite sample size $n$; i.e. draw 3 curves to show how these quantities depend on $h$. Which value of $h$ in your plot represents the optimal smoothing?

### Visual Description
The page contains a large empty rectangular box intended for a drawing and explanation in response to part (a).

---
## Page 14
### Content
(b) How do these results change if we consider a **smaller** sample size $m < n$? (Specifically, how do the 3 curves shift left-right and up-down? What can you say about the optimal choice of $h$?)

### Visual Description
The page contains a large empty rectangular box intended for a handwritten answer to part (b).

---
## Page 15
### Content
**Part II: Short answers – no derivations needed**

8. I am estimating the mean $\lambda$ for $X_1, \dots, X_n \sim \text{Poisson}(\lambda)$. I take the ‘silly’ estimator $\hat{\lambda} = 5$. The variance of this estimator is 0, while the Cramer-Rao Lower Bound (CRLB) on the variance is $\lambda/n$ (as derived in your HW). Did I just disprove the CRLB and overturn decades of statistical theory? Give the precise reason why not.

**Part III: Multiple Choice Questions. Choose one answer only – fill in the circle**

**Fundamental Probability Theory**

In the following questions, we use the following notation: $\Omega$ to denote an arbitrary sample space (unless otherwise specified), $\mathcal{E}$ the set of all events, and $P$ our probability measure (or probability function).

9. A real-valued random variable is, in general:
$\bigcirc$ A mapping from our event space $\mathcal{E}$ to $\mathbb{R}$
$\bigcirc$ A mapping from our sample space $\Omega$ to the event space $\mathcal{E}$
$\bigcirc$ A mapping from $\mathbb{R} \to \mathbb{R}$
$\bigcirc$ A mapping from our sample space $\Omega$ to $\mathbb{R}$

10. Suppose you have two events $A$ and $B$ such that $P(A) \le P(B)$. True or False: The event $A$ must be a subset of the event $B$.
$\bigcirc$ True
$\bigcirc$ False

11. Which *one* of the following six options correctly describes how different stochastic convergence properties generally relate to each other? We write q.m. for convergence in quadratic mean, $P$ for convergence in probability, and $d$ for convergence in distribution. Note: $A \Rightarrow B$ means that if $A$ is true, then $B$ is true.
$\bigcirc$ q.m. $\Rightarrow P \Rightarrow d$
$\bigcirc$ $P \Rightarrow d \Rightarrow$ q.m.

### Visual Description
The page contains text for a short answer question with an empty box, followed by a section header for multiple-choice questions and the first three multiple-choice questions with radio buttons.

---
## Page 16
### Content
$\bigcirc$ $P \Rightarrow$ q.m. $\Rightarrow d$.
$\bigcirc$ $d \Rightarrow P \Rightarrow$ q.m.
$\bigcirc$ We **only** have $P \Rightarrow d$. But q.m. does **not** imply either of the other two.
$\bigcirc$ We **only** have $d \Rightarrow P$. But q.m. does **not** imply either of the other two.

12. Suppose $W$ is a $\text{Poisson}(\lambda)$ random variable. Let $Y|W \sim N(W, 5)$, i.e., given the outcome of $W$, $Y$ follows a Gaussian distribution with expected value $W$ and variance 5. Then $E[Y|W]$ is:
$\bigcirc$ A continuous random variable with an associated PDF
$\bigcirc$ A discrete random variable that may take only finitely many possible values
$\bigcirc$ A discrete random variable that can take an infinite number of distinct values
$\bigcirc$ Neither

**Parametric Estimation**

13. Suppose you have an estimator $\hat{\theta}$ for a parameter $\theta \in \Theta$ that takes in data $X_1, \dots, X_n \sim \mathcal{P}_\theta$. Assume $\hat{\theta}$ is well-defined for any sample size $n \in \mathbb{N}$. Consider the two claims and decide on their correctness using one of the subsequent 4 options.
1. If $\hat{\theta}$ is a consistent estimator of any $\theta \in \Theta$, then it is unbiased for any sample size and $\theta \in \Theta$.
2. If $\hat{\theta}$ is unbiased for any $\theta \in \Theta$ and for any sample size, then it is a consistent estimator.
$\bigcirc$ Both claims are true.
$\bigcirc$ Claim 1 is true; claim 2 is false.
$\bigcirc$ Claim 1 is false; claim 2 is true.
$\bigcirc$ Both claims are false.

14. Suppose you observe $X_1, \dots, X_n$ from some parametric model. You are told the $X_i$ are real-valued, i.e., their output is one dimensional. **True/False:** The Fisher information must be a scalar, not a matrix with strictly more than 1 row or column.
$\bigcirc$ True
$\bigcirc$ False

15. Suppose your data is **not** independent. **True or False:** The Fisher information does **not**, in general, satisfy $I_n(\theta) = nI(\theta)$, where $\theta$ is the parameter of interest.
$\bigcirc$ True
$\bigcirc$ False

### Visual Description
Text-only slide containing the remaining options for question 11 and multiple-choice questions 12 through 15 with radio buttons.
## Page 17
### Content
16. Consider estimating a parameter $\theta$ given some data $X_1, \dots, X_n \sim \mathcal{P}_\theta$. You come up with two estimators $\hat{\theta}$ and $\tilde{\theta}$. You somehow have access $\mathbb{E}_\theta(\hat{\theta} - \theta)^2$ and $\mathbb{E}_\theta(\tilde{\theta} - \theta)^2$.
**True or False:** If $\hat{\theta}$ is biased for a given $\theta$ while $\tilde{\theta}$ is unbiased for that $\theta$, then $\mathbb{E}_\theta(\hat{\theta} - \theta)^2 \ge \mathbb{E}_\theta(\tilde{\theta} - \theta)^2$ is guaranteed.
$\bigcirc$ True
$\bigcirc$ False

17. **True or False:** The Cramer-Rao Lower Bound (CRLB) on the variance only holds asymptotically, and not for small sample sizes.
$\bigcirc$ True
$\bigcirc$ False

**Decision Theory**

18. **True/False:** Given a loss function $L$, a fixed parameter $\theta$, an estimator $\hat{\theta}$, and data $X_1, \dots, X_n$ drawn from some $\mathcal{P}_\theta$, the quantity $L(\hat{\theta}(X_1, \dots, X_n), \theta)$ is, in general, a random variable. *If applicable, assume you have evaluated any integrals or expected values.*
$\bigcirc$ True
$\bigcirc$ False

19. Given a prior $\pi(\theta)$, a PDF $f_\theta(\cdot)$ when $\theta$ is the truth, a loss function $L$, an estimator $\hat{\theta}$, frequentist risk function $R$, which one of the following defines the Bayes risk of $\hat{\theta}$?
$\bigcirc$ $\mathbb{E}_\theta[L(\hat{\theta}, \theta)\pi(\theta)]$
$\bigcirc$ $\int L(\hat{\theta}, \theta)\pi(\theta) d\theta$
$\bigcirc$ $\int L(\hat{\theta}, \theta)\pi(\theta)f_\theta(x^n) dx$
$\bigcirc$ $\int R(\hat{\theta}, \theta)\pi(\theta) d\theta$
$\bigcirc$ $\int R(\hat{\theta}, \theta)\pi(\theta)f_\theta(x^n) dx$

20. Given a prior $\pi(\theta)$ over some parameter space $\Theta$ and data $X_1, \dots, X_n \sim \mathcal{P}_\theta$ which take values in $\mathcal{X}$, you compute the posterior distribution. The posterior distribution is a distribution over:
$\bigcirc$ $\mathcal{X}$
$\bigcirc$ $\Theta$

21. Which is the most accurate description of a minimax optimal estimator, given a parameter space $\Theta$? By best case risk, we mean lowest risk, and by worst case risk, we mean highest risk.
$\bigcirc$ The estimator whose best case risk across all $\theta \in \Theta$ is maximal
$\bigcirc$ The estimator whose worst case risk across all $\theta \in \Theta$ is minimal
$\bigcirc$ The estimator whose best case risk across all $\theta \in \Theta$ is minimal
$\bigcirc$ The estimator whose worst case risk across all $\theta \in \Theta$ is maximal

17

### Visual Description
Text-only slide containing multiple-choice and true/false questions related to estimation and decision theory.

---
## Page 18
### Content
**Hypothesis Testing**

22. Suppose you have a null parameter space $\Theta_0$ and an alternative parameter space $\Theta_1$, with $\Theta_0 \cap \Theta_1 = \emptyset$. You propose some testing procedure whose power function you can calculate. Which pair of conditions on the power function $\beta(\theta)$ is most desirable, if you want to minimize both Type I and Type II error. *Note: sup and inf are the analogues of max and min, respectively.*
$\bigcirc$ $\sup_{\theta \in \Theta_0} \beta(\theta) = 0.01$ and $\sup_{\theta \in \Theta_1} \beta(\theta) = 0.99$
$\bigcirc$ $\sup_{\theta \in \Theta_0} \beta(\theta) = 0.01$ and $\inf_{\theta \in \Theta_1} \beta(\theta) = 0.99$
$\bigcirc$ $\inf_{\theta \in \Theta_0} \beta(\theta) = 0.01$ and $\sup_{\theta \in \Theta_1} \beta(\theta) = 0.99$
$\bigcirc$ $\inf_{\theta \in \Theta_0} \beta(\theta) = 0.01$ and $\inf_{\theta \in \Theta_1} \beta(\theta) = 0.99$

23. Consider testing $H_0 : \theta = 0$ vs $H_1 : \theta = 1$ using a *one-sided* Wald test statistic for a Gaussian model $X_1, \dots, X_n \sim N(\theta, 1)$. How does the power function $\beta(1)$ compare to $\beta(2)$?
$\bigcirc$ $\beta(1)$ is strictly smaller than $\beta(2)$
$\bigcirc$ $\beta(1)$ is strictly larger than $\beta(2)$
$\bigcirc$ $\beta(1) = \beta(2)$
$\bigcirc$ Not enough information to answer

24. Consider testing $H_0 : \theta = 0$ vs $H_1 : \theta = 1$ using a *one-sided* Wald test statistic for a Gaussian model $X_1, \dots, X_n \sim N(\theta, 1)$. You are interested in testing at a 5% level of significance. Assume the truth is $\theta = 0$. You decide to repeatedly perform this procedure 100 times, i.e., drawing 100 different datasets, each of size $n$, and then obtaining 100 different p-values. What is the expected number of times you expect to see a p-value under 0.25?
$\bigcirc$ 0
$\bigcirc$ 5
$\bigcirc$ 25
$\bigcirc$ Not enough information to answer

25. Suppose you are testing a $H_0 : \theta = \theta_0$ versus $H_1 : \theta = \theta_1$, where $\theta_0 \neq \theta_1$. You are given data $X^n = (X_1, \dots, X_n)$. You consider the following test statistic: $\psi = \frac{L(\theta_1; X^n)}{L(\theta_0; X^n)}$, where $L$ is the likelihood function. Assume this ratio $\psi$ is well-defined. Under which of the following scenarios would you be more likely to reject the null?
$\bigcirc$ $\psi$ is very small
$\bigcirc$ $\psi$ is very large

26. In the previous question, you decide to change your null hypothesis from $\theta = \theta_0$ to $\theta \in \Theta_0$, where $\Theta_0$ is a non-singleton subset of your parameter space $\Theta$ that contains $\theta_0$. However, $\theta_1$ does *not* belong to $\Theta_0$. You change your test statistic from $\psi = \frac{L(\theta_1; X^n)}{L(\theta_0; X^n)}$ to $\tilde{\psi} = \frac{L(\theta_1; X^n)}{\sup_{\theta \in \Theta_0} L(\theta; X^n)}$. How does $\tilde{\psi}$ compare to $\psi$ using the same data/model, assuming it is not equal for simplicity.

18

### Visual Description
Text-only slide containing multiple-choice questions related to hypothesis testing, power functions, p-values, and likelihood ratio tests.

---
## Page 19
### Content
$\bigcirc$ $\tilde{\psi}$ is strictly smaller
$\bigcirc$ $\tilde{\psi}$ is strictly larger
$\bigcirc$ $\tilde{\psi}$ could be either strictly smaller or strictly larger

**Non-Parametric Density/Regression**

27. A non-parametric model means that:
$\bigcirc$ Your statistical procedures is guaranteed to perform poorly in higher dimensions
$\bigcirc$ You are not imposing any smoothness conditions on your models
$\bigcirc$ Your parameters of interest can take uncountably infinitely many values
$\bigcirc$ You cannot index your model with a finite dimensional vector
$\bigcirc$ It is impossible to index your model whatsoever

28. Suppose you are looking to estimate the density of some distribution, and you are told it is the equally weighted mixture of at most $K$ distinct Gaussian distributions, each with known variance 1 but distinct, unknown means. That is, for some $1 \le k \le K$, there are $k$ Gaussian distributions $N(\mu_i, 1)$ and each observation is uniformly and randomly chosen from one of the $k$ Gaussians. This is an example of a:
$\bigcirc$ parametric density estimation problem
$\bigcirc$ non-parametric density estimation problem

29. Parametric models in density estimation, when they are the correct model, tend to have mean integrated square errors that decay:
$\bigcirc$ Slower in $n$ relative to non-parametric models
$\bigcirc$ Faster in $n$ relative to non-parametric models

30. Which of the following best describes a consequence of the curse of dimensionality, as a statistician (or your textbook) would use that term in the context of non-parametric theory?
$\bigcirc$ Your sample size $n$ is too large relative to your dimension $d$
$\bigcirc$ Your dimension $d$ is too large relative to your sample size $n$
$\bigcirc$ Both $n$ and $d$ are too large, so it is difficult to process the data without high computational power

19

### Visual Description
Text-only slide containing the conclusion of question 26 and multiple-choice questions related to non-parametric density estimation and the curse of dimensionality.

---
