# canvas-02-04-13501939-solutions_Practice.Midterm.Two

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-02-04-13501939-solutions_Practice.Midterm.Two.pdf`
Duplicate equivalents: `canvas-02-04-13501939-solutions_Practice.Midterm.Two.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 11

## Page 1
### Content
**36-700 – Probability and Mathematical Statistics**
*Practice Midterm 2 Solutions*
*Do not share, even after the class is over.*

**Printed Name:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**Andrew ID:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**This exam is closed book/notes. I have neither given nor received assistance on this exam.**

**Signature:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

* Please legibly write all parts of your solutions inside the boxes. **We will not read or grade things outside of boxes.**
* You will get a **bonus point** for writing your name at the top of each page.
* Calculators are not allowed or needed. **Show all work for full credit.** You may leave your final answer in fractions, combination/permutation numbers, exponential functions, and $\Phi(\cdot)$, the CDF of standard normal. Integrals need to be simplified.
* You can find the official formula sheet and a table of distributions at the back of the exam. You can use the last page as scratch paper.
* Clearly fill in the multiple choice bubbles with your desired answer: $\bigcirc \rightarrow \bullet$. Avoid writing these: $\bigcirc \times$ $\bigcirc \checkmark$ $\bigcirc /$. If you can't cleanly erase, then do your best to **clearly** indicate your final answer.

1

### Visual Description
Text-only slide. This is the cover page of a practice exam for a Probability and Mathematical Statistics course. It includes fields for name, Andrew ID, and signature, along with a set of instructions for the exam.

---
## Page 2
### Content
**Part I: Include your solutions for full credit.**

1. Suppose we observe i.i.d. samples $X_1, \dots, X_n \sim U[-\beta, \beta]$ where $\beta > 0$. Use $X_{(i)}$ to denote the order statistics of the $X_i$, i.e., $X_{(1)} \le X_{(2)} \le \dots \le X_{(n)}$.

(a) Compute the likelihood $L(\beta; X_1, \dots, X_n)$ for all $\beta > 0$.

> **Solution:** Note that each of the $X_i \in [-\beta, \beta]$ is equivalent to the largest being $\le \beta$ and smallest being $\ge -\beta$.
> $$L(\beta) = \prod_{i=1}^n \frac{1}{\beta - (-\beta)} \cdot \mathbb{1}(-\beta \le X_i \le \beta)$$
> $$= \frac{1}{2^n \beta^n} \mathbb{1}(X_{(1)} > -\beta) \mathbb{1}(X_{(n)} < \beta)$$
> $$= 2^{-n} \beta^{-n} \cdot \mathbb{1}(\beta > \max(-X_{(1)}, X_{(n)}))$$

(b) Find the maximum likelihood estimator (MLE) for $\beta$ (maximizing over all $\beta > 0$).

> **Solution:** Note that $\max(-X_{(1)}, X_{(n)})$ is non-negative (strictly positive unless all $X_i = 0$). The likelihood is strictly positive only for $\mathbb{1}(\beta > \max(-X_{(1)}, X_{(n)}))$. For any strictly smaller $\beta > 0$, the likelihood is 0. For all $\beta > \max(-X_{(1)}, X_{(n)})$, the likelihood is decreasing in $\beta$. Thus the MLE is $\hat{\beta}_{MLE} = \max(-X_{(1)}, X_{(n)})$.
> If all the $X_i = 0$ (a probability 0 event), then the likelihood reduces to $(2\beta)^{-n}$, which is maximized by setting $\beta = 0$. [We won't require your solution to handle this scenario]

(c) Find the method of moments estimator (MOME) for $\beta$ using the second moment (*not* the first moment).

> **Solution:** We set $n^{-1} \sum_{i=1}^n X_i^2$ equal to $\mathbb{E}[X_1^2] = \mathbb{V}[X_1] = \beta^2/3$. Thus, the MOME estimator is $\hat{\beta}_{MOME} = \sqrt{\frac{3}{n} \sum_{i=1}^n X_i^2}$.

(d) Let $\hat{\beta}_{MLE}$ be your answer to (b). What is the MLE of $\sqrt{\exp(\beta^{1/5})}$, where $\exp(a) = e^a$ is the usual exponential function? Leave your answer in terms of $\hat{\beta}_{MLE}$.

> **Solution:** By equivariance of the MLE, $\sqrt{\exp(\hat{\beta}_{MLE}^{1/5})}$. In the edge-case where $\hat{\beta}_{MLE} = 0$, this is still the correct answer.

2

### Visual Description
Text-only slide. This page contains the first problem of the practice exam, which deals with the Uniform distribution $U[-\beta, \beta]$. It includes four sub-questions (a through d) with their respective solutions provided in blue-bordered boxes.

---
## Page 3
### Content
2. Draw $X_1, \dots, X_n \sim U[0, \theta]$ where $\theta > 0$. We test
$$H_0 : 3 \le \theta \le 4 \quad \text{versus} \quad H_1 : \theta < 3 \text{ or } \theta > 4$$
We use the MLE of $\theta$ as a test statistic, $T_n(X_1, \dots, X_n) = \max\{X_1, \dots, X_n\}$. We define a test that rejects when $T_n \le 2.9$ or $T \ge 4$.

(a) Find the power function $\beta(\theta)$ of this test, for all $\theta > 0$, and sketch the function.
*Hint: Consider three different cases: (i) $\theta \le 2.9$, (ii) $2.9 < \theta < 4$, and (iii) $\theta \ge 4$.*

> **Solution:** We begin with $0 < \theta \le 2.9$. Since each of the $X_i$ take values on $[0, \theta] \subseteq [0, 2.9]$, this means we will always reject the null hypothesis! Thus $\beta(\theta) = 1$.
> Next, suppose $\theta \in (2.9, 4)$. Since the $X_i$ takes values on $[0, \theta] \subseteq [0, 4)$, this means we will reject if and only if $T_n \le 2.9$. Thus
> $$\beta(\theta) = \mathbb{P}_\theta(T_n \le 2.9)$$
> $$= \mathbb{P}_\theta(X_1 \le 2.9, X_2 \le 2.9, \dots, X_n \le 2.9)$$
> $$= \mathbb{P}_\theta(X_1 \le 2.9) \cdot \mathbb{P}_\theta(X_2 \le 2.9) \cdots \mathbb{P}_\theta(X_n \le 2.9)$$
> $$= \left( \frac{2.9}{\theta} \right)^n.$$
> Lastly, suppose $\theta \ge 4$. We reject in two scenarios, if $T_n \le 2.9$ or $T_n \ge 4$, noting these are mutually exclusive events. Hence
> $$\beta(\theta) = \mathbb{P}_\theta(T_n \le 2.9) + \mathbb{P}_\theta(T_n \ge 4)$$
> $$= \mathbb{P}_\theta(X_1 \le 2.9, \dots, X_n \le 2.9) + [1 - P_\theta(T_n \le 4)]$$
> $$= \mathbb{P}_\theta(X_1 \le 2.9) \cdots \mathbb{P}_\theta(X_n \le 2.9) + [1 - \mathbb{P}_\theta(X_1 \le 4, \dots, X_n \le 4)]$$
> $$= \left( \frac{2.9}{\theta} \right)^n + [1 - \mathbb{P}_\theta(X_1 \le 4) \cdots \mathbb{P}(X_n \le 4)]$$
> $$= 1 + \underbrace{\left[ \left( \frac{2.9}{\theta} \right)^n - \left( \frac{4}{\theta} \right)^n \right]}_{<0}.$$
> Thus, the power function is first a flat line at 1 for $\theta \in [0, 2.9]$, decreases from 1 to $(2.9/4)^n$ on $\theta \in [2.9, 4]$, then increases to 1 in the limit of $\theta$. To see the final part, note that $\left( \frac{2.9}{\theta} \right)^n < \left( \frac{4}{\theta} \right)^n$, and as $\theta \rightarrow \infty$ both terms tend to 0. Thus, the power function is 1 minus some positive quantity that is decreasing in magnitude in $\theta$. Moreover, one can check that there are no discontinuities, since $\left( \frac{2.9}{2.9} \right)^n = 1$ and $1 + \left[ \left( \frac{2.9}{4} \right)^n - \left( \frac{4}{4} \right)^n \right] = \left( \frac{2.9}{4} \right)^n$. See Figure 1 for a plot.

3

### Visual Description
Text-only slide. This page presents the second problem, a hypothesis test for the parameter $\theta$ of a Uniform distribution $U[0, \theta]$. It includes the derivation of the power function $\beta(\theta)$ for different ranges of $\theta$, with the solution presented in a blue-bordered box.

---
## Page 4
### Content
Figure 1: Power function
![Power function graph showing beta(theta) vs theta. The function is constant at 1 until theta=2.9, then drops sharply to a minimum at theta=4, and then increases asymptotically back towards 1.](graph)

(b) What is the level (that is, the maximum Type I error) of this test? Explain what happens as $n \rightarrow \infty$.

> **Solution:** Recall the level is $\sup_{\theta \in \Theta_0} \beta(\theta)$, where $\Theta_0 = [3, 4]$ is the subset of the parameter space corresponding to the null $H_0$. Noting that we verified the power function is continuous at $\theta = 4$, we have from the previous part that $\beta(\theta) = \left( \frac{2.9}{\theta} \right)^n$ on $[3, 4]$. Hence the level is $\sup_{\theta \in [3,4]} \left( \frac{2.9}{\theta} \right)^n = \left( \frac{2.9}{3} \right)^n$ since the power function is decreasing on this interval.

(c) What sample size is needed to control the Type I error at level 0.05?

> **Solution:** We require $\left( \frac{2.9}{3} \right)^n \le 0.05$, which after taking the logarithm becomes $n \log \left[ \frac{2.9}{3} \right] \le \log(0.05)$, if and only if $n \log \left( \frac{3}{2.9} \right) \ge \log(20)$ (multiplying by $-1$ and applying logarithm rules) if and only if $n \ge \log \left( \frac{3}{2.9} \right)^{-1} \cdot \log(20) \approx 88.4$. Thus $n = 89$ suffices to be precise.

4

### Visual Description
The page contains a graph labeled "Figure 1: Power function" showing $\beta(\theta)$ on the y-axis and $\theta$ on the x-axis. The curve starts at 1 for $\theta \in [0, 2.9]$, drops to its lowest point at $\theta=4$, and then rises back towards 1. Below the graph are parts (b) and (c) of Problem 2 with their solutions in blue-bordered boxes.

---
## Page 5
### Content
3. Suppose that $X_1, X_2, \dots$ are i.i.d. Poisson($\lambda$), and we are interested in estimating the 0 probability; that is, the probability $\psi = \mathbb{P}(X = 0) = e^{-\lambda}$

(a) Find the MLE $\hat{\psi}$ of $\psi$, and use the delta method to get the standard error of the MLE. You may use that the MLE for $\lambda$ is the sample mean.

> **Solution:** Let $\hat{\lambda} = \bar{X}_n$ be the MLE for $\lambda$, where $\bar{X}_n$ is the sample mean. By the equivariance property of the MLE, $\hat{\psi} = e^{-\hat{\lambda}} = e^{-\bar{X}_n}$.
> Now recall $\hat{se}(\hat{\lambda}) = \sqrt{\hat{\lambda}/n}$ (either from the Fisher information derived in HW or just using the fact that the variance of a Poisson($\lambda$) random variable is $\lambda$). Set $g(t) = e^{-t}$ and apply the Delta method. We compute $g'(t) = -e^{-t}$, hence
> $$\hat{se}(\hat{\psi}) = |g'(\hat{\lambda})| \cdot \hat{se}(\hat{\lambda}) = e^{-\hat{\lambda}} \cdot \sqrt{\hat{\lambda}/n}.$$

(b) What is the asymptotic distribution of the MLE? (yes, you can assume that various regularity conditions hold)

> **Solution:** We have from the previous part that
> $$\frac{\sqrt{n}(\hat{\psi} - e^{-\lambda})}{e^{-\hat{\lambda}} \cdot \sqrt{\hat{\lambda}}} \rightsquigarrow N(0, 1).$$
> One can also use the actual value of $\lambda$ in the standard error and write
> $$\frac{\sqrt{n}(\hat{\psi} - e^{-\lambda})}{e^{-\lambda} \cdot \sqrt{\lambda}} \rightsquigarrow N(0, 1).$$

(c) Define an alternative estimator $\tilde{\psi} = \frac{1}{n} \sum_i Y_i$, where $Y_i = I(X_i = 0)$. Compute $\mathbb{E}[\tilde{\psi}]$ and $\mathbb{V}ar[\tilde{\psi}]$. Explain briefly why $\tilde{\psi}$ might be a sensible estimator of $\psi$.

> **Solution:** Using linearity of expectation, we compute
> $$\mathbb{E}[\tilde{\psi}] = \mathbb{E}[Y_1] = \mathbb{P}(X_i = 0) = e^{-\lambda}$$
> and
> $$\mathbb{V}ar[\tilde{\psi}] = \frac{\mathbb{V}ar(Y_i)}{n} = \frac{e^{-\lambda}(1 - e^{-\lambda})}{n},$$
> where we used the fact that $Y_i$ is a Bernoulli($e^{-\lambda}$) random variable.
> Since $\tilde{\psi}$ is an average of IID random variables, we can simply invoke the Central Limit Theorem (CLT), making it a sensible estimator.

5

### Visual Description
Text-only slide. This page presents Problem 3, which involves estimating the probability of zero for a Poisson distribution. It includes parts (a), (b), and (c) with their solutions in blue-bordered boxes, covering MLE, the Delta method, asymptotic distributions, and an alternative estimator.

---
## Page 6
### Content
(d) Compute the asymptotic relative efficiency of $\tilde{\psi}$ to $\hat{\psi}$.
*Recall (definition of ARE): Consider two estimators $T_n$ and $U_n$, and suppose that $\sqrt{n}(T_n - \theta) \rightsquigarrow N(0, t^2)$ and that $\sqrt{n}(U_n - \theta) \rightsquigarrow N(0, u^2)$. We define the ARE of $U$ to $T$ by $ARE(U, T) = t^2/u^2$.*

> **Solution:** Above we wrote
> $$\frac{\sqrt{n}(\hat{\psi} - e^{-\lambda})}{e^{-\lambda} \cdot \sqrt{\lambda}} \rightsquigarrow N(0, 1),$$
> and we can rearrange this to
> $$\sqrt{n}(\hat{\psi} - e^{-\lambda}) \rightsquigarrow N(0, e^{-2\lambda} \cdot \lambda).$$
> Similarly, from the previous portion we have $\frac{\sqrt{n}(\tilde{\psi} - e^{-\lambda})}{\sqrt{e^{-\lambda}(1 - e^{-\lambda})}} \rightsquigarrow N(0, 1)$ by the CLT, or rearranging,
> $$\sqrt{n}(\tilde{\psi} - e^{-\lambda}) \rightsquigarrow N(0, e^{-\lambda}(1 - e^{-\lambda})).$$
> Thus,
> $$ARE(\tilde{\psi}, \hat{\psi}) = \frac{e^{-2\lambda} \cdot \lambda}{e^{-\lambda}(1 - e^{-\lambda})} = \frac{\lambda}{e^\lambda(1 - e^{-\lambda})} = \frac{\lambda}{e^\lambda - 1}.$$

(e) Briefly explain whether your result was expected or not.

> **Solution:** The ARE tends to 0 very rapidly as $\lambda$ grows, showing that for relatively large $\lambda$, the asymptotic (in $n$) variance of $\tilde{\psi}$ is much larger than that of $\hat{\psi}$, the MLE. This confirms our familiar results about the MLE being efficient, i.e., asymptotically optimal. The naive estimator $\tilde{\psi}$ does best for $\lambda$ near 0.

6

### Visual Description
Text-only slide. This page continues Problem 3, focusing on the Asymptotic Relative Efficiency (ARE) between the two estimators derived previously. Solutions are provided in blue-bordered boxes.

---
## Page 7
### Content
**Part II: Short answers – no derivations needed**

4. You are given an estimator $\hat{\theta}(X_1, \dots, X_n)$. You are trying to estimate the mean $\mathbb{E}[X_1] = \theta$. You have a prior $\pi(\theta)$ over $\Theta$.

(a) True or False, and justify your answer. The risk function $R(\hat{\theta}, \theta)$ function (after evaluating any integrals) depends on $X_1, \dots, X_n$, i.e., is still random.

> **Solution:** False. We take the expectation of $L(\hat{\theta}(X_1, \dots, X_n), \theta)$ with respect to $X$, so no randomness remains. That is, we compute
> $$\mathbb{E}_{X \sim \theta}[L(\hat{\theta}(X), \theta)] = \int L(\hat{\theta}(x^n), \theta) p_\theta(x^n) dx^n$$
> where $\theta$ is fixed in advance.

(b) True or False, and justify your answer. The risk function $R(\theta, \hat{\theta})$ depends on $\theta$.

> **Solution:** True. For each possible value of $\theta$, we measure the average error our estimator $\hat{\theta}$ achieves. The formula itself depends on the probability density of $X$ which is parametrized by $\theta$.
> We accepted False if you interpreted this question as claiming that *every* risk function depends on $\theta$ and gave a concrete counterexample where the risk function is purely a function of the sample size $n$, as we saw in the lecture notes / textbook. We intended the statement to really be "In general, the risk function $R(\theta, \hat{\theta})$ depends on $\theta$."

(c) True or False, and justify your answer. The risk function $R(\theta, \hat{\theta})$ depends on the prior $\pi(\theta)$.

> **Solution:** False. The risk function is not a Bayesian concept and a prior is irrelevant. Contrast this with the Bayes risk of an estimator.

(d) Suppose $\pi$ is the uniform distribution on $[5, 8]$. What is the *Bayes risk* of this estimator using this prior and the risk $R(\hat{\theta}, \theta)$? [Write an integral with the bounds of integration clearly specified]

> **Solution:** We integrate the risk function with respect to this prior. The Bayes risk is
> $$\frac{1}{3} \int_5^8 R(\hat{\theta}, \theta) d\theta.$$

7

### Visual Description
Text-only slide. This page starts Part II of the exam, which consists of short-answer questions about the risk function and Bayes risk. Solutions are provided in blue-bordered boxes.

---
## Page 8
### Content
(e) Suppose your estimator is the Bayes estimator. Now say I change the prior to some other function $\psi(\theta)$ over $\Theta$. True or False, and explain: This estimator is guaranteed to still be the Bayes estimator. *Note: If your answer is false, you don’t need to provide a formal counter-example—reason from the definition.*

> **Solution:** False. The Bayes estimator is defined as the estimator that minimizes the Bayes risk, and the definition of Bayes risk uses a fixed choice of prior. Change the prior, and you change the Bayes risk function, and thus possibly the optimal estimator.

**Part III: Multiple Choice Questions. Choose one answer only – fill in the circle**

5. Let $\Theta$ be the parameter space. Assume we observe i.i.d. data $X_1, \dots, X_n \sim P_\theta$, where $\{P_\theta : \theta \in \Theta\}$ is a class of distributions. Let $\mathcal{E}$ be the class of all possible estimators. Let $L(\hat{\theta}, \theta)$ be some loss function that takes as an input an estimator $\hat{\theta} \in \mathcal{E}$ and $\theta \in \Theta$. Which of the following options correctly defines the minimax risk (the expected error achieved by the minimax estimator)? *Note: For simplicity, we will write ‘min’ and ‘max’ in place of ‘inf ’ or ‘sup’, respectively.*

$\bigcirc \max_{\hat{\theta} \in \mathcal{E}} \min_{\theta \in \Theta} \mathbb{E}_\theta L(\hat{\theta}(X), \theta)$
$\checkmark \min_{\hat{\theta} \in \mathcal{E}} \max_{\theta \in \Theta} \mathbb{E}_\theta L(\hat{\theta}(X), \theta)$
$\bigcirc \min_{\theta \in \Theta} \max_{\hat{\theta} \in \mathcal{E}} \mathbb{E}_\theta L(\hat{\theta}(X), \theta)$
$\bigcirc \max_{\theta \in \Theta} \min_{\hat{\theta} \in \mathcal{E}} \mathbb{E}_\theta L(\hat{\theta}(X), \theta)$

> **Solution:** Fix an estimator $\hat{\theta}$. To measure its *worst* case (i.e., maximal) risk across all possible values of $\theta$, we compute $\max_{\theta \in \Theta} \mathbb{E}_\theta L(\hat{\theta}(X), \theta)$. If we used a minimum, we’d instead be finding the best case risk, but that’s not our goal.
> The minimax estimator is found by picking the estimator $\hat{\theta}$ whose worst case risk (whose formula we just stated) is minimal. I.e., $\min_{\hat{\theta} \in \mathcal{E}} \max_{\theta \in \Theta} \mathbb{E}_\theta L(\hat{\theta}(X), \theta)$.
> Option 1 has the right order of optimizations ($\hat{\theta}$ on the outside, $\theta$ on the inside), but swaps maximizations/minimizations. We don’t want the best case risk across $\theta$. Option 3 and 4 both use the wrong order of optimizations as well. That means we would be fixing $\theta$, and finding an estimator that does best or worst for that $\theta$, and then varying the $\theta$ to min/max this quantity.

6. Consider the same set-up/notation as before. Let $f_\theta(x)$ denote the PDF corresponding to the distribution $P_\theta$ from which the data is drawn. Moreover, let $\pi(\theta)$ define some prior distribution on $\Theta$. We wrote earlier the quantity $\mathbb{E}_\theta L(\hat{\theta}(X), \theta)$

8

### Visual Description
Text-only slide. This page concludes Part II with a question on Bayes estimators and begins Part III with a multiple-choice question on the definition of minimax risk. Solutions and explanations are provided in blue-bordered boxes. The second option in the multiple-choice question is marked with a checkmark.
## Page 9
### Content
for a given estimator $\hat{\theta}$ and parameter $\theta$. Which of the following correctly defines $\mathbb{E}_\theta L(\hat{\theta}(X), \theta)$ in the context of the minimax risk?
$\bigcirc \int L(\hat{\theta}(x), \theta)\pi(\theta)d\theta$
$\checkmark \int L(\hat{\theta}(x), \theta)f_\theta(x)dx$
$\bigcirc \int L(\hat{\theta}(x), \theta)\pi(\theta)dx$
$\bigcirc \int L(\hat{\theta}(x), \theta)f_\theta(x)d\theta$

**Solution:** When we write $\mathbb{E}_\theta$, this is a shorthand for $\mathbb{E}_{X \sim \mathcal{P}_\theta}$, that is, we are computing the expectation of some random variable $g(X)$ where $X \sim \mathcal{P}_\theta$ for a *fixed* choice of $\theta$, and $g$ is some function. So when we translate $\mathbb{E}_\theta$ to an integral notation, we are integrating in $x$, where $x$ is the input to the PDF $f_\theta$ and to the estimator $\hat{\theta}$. We rule out the third option because the prior is irrelevant in this problem entirely (the minimax risk is a frequentist concept).

7. Consider a parameter space $\Theta$. You observe i.i.d. samples $X_1, \dots, X_n \sim \mathcal{P}_\theta$ where you are given that $\mathbb{V}[X_1] = 1$ but the mean $\mathbb{E}[X_1] = \theta$ is unknown. Let $\pi(\theta)$ be a prior over $\Theta$. You compute the posterior density $f(\theta|X_1, \dots, X_n)$ and obtain a function proportional to $\exp\left(-\frac{(\theta-(2\overline{X}_n+1))^2}{2}\right)$. What is the Bayes estimator with respect to *absolute* error loss? *Hint: Think back to your HW.*
$\bigcirc \hat{\theta} = \theta$
$\checkmark \hat{\theta} = 2\overline{X} + 1$.
$\bigcirc \hat{\theta} = (\theta - 1)/2$

**Solution:** Without even knowing any of the Bayesian concepts asked in this problem, you can correctly pick option 2 because options 1 and 3 are not even valid estimators! An estimator should *not* depend on the true value $\theta$ which is unknown to you, since that's what we are trying to find. It should only depend on your data.
To see why option 2 is correct, recall that the Bayes estimator with absolute error loss is the posterior median. This posterior distribution for $\theta$ is clearly a Gaussian distribution with mean $2\overline{X}_n + 1$. The mean and median of a Gaussian are the same by symmetry, giving the answer. If we used squared error loss instead, the answer would be the same.

8. The Fisher information matrix is independent of the parametrization you pick, since the actual distribution of the data is the same but we're just writing it differently.
$\bigcirc$ True $\checkmark$ **False**

9

### Visual Description
The page contains multiple-choice questions and their corresponding solutions in blue boxes. Question 7 involves a mathematical expression for a posterior density. Question 8 is a True/False question. Correct answers are indicated with a blue checkmark.

---
## Page 10
### Content
**Solution:** For a simple counter-example, consider the $N(\mu, \sigma^2)$ model with $\mu$ known, and compare the Fisher information obtained using a $\sigma$ parametrization versus a $\sigma^2$ parametrization, i.e., differentiate with respect to $\sigma$ rather than with respect to $\sigma^2$. You will obtain a Fisher information of $I_n(\sigma) = 2n/\sigma^2$ (as found in Wasserman on page 132) as opposed to $I_n(\sigma^2) = n/(2\sigma^4)$ (which can be found re-using calculations from problem 4 on HW 7, albeit that problem assumed unknown $\mu$). A more general formula for handling changes of parametrization can be found using the chain rule.

9. True or False (no justification needed): You obtain a p-value of 0.01. This means the probability that the null hypothesis is true is 1%.
$\bigcirc$ True $\checkmark$ **False**

**Solution:** See pages 156-159 of Wasserman's text. The p-value is the probability of seeing a test statistic as extreme as you did under the null.

10. Suppose you run a level $\alpha$ hypothesis test. Assuming the alternative is true, what is the probability that you (correctly) reject the test?
$\bigcirc \alpha$
$\bigcirc 1 - \alpha$
$\checkmark$ **Not enough information to answer**

**Solution:** The level $\alpha$ controls the Type I error, i.e., the probability of incorrectly rejecting the null hypothesis when the null is true. In terms of the power function $\beta(\theta)$, it's the quantity $\sup_{\theta \in \Theta_0} \beta(\theta)$ where $\Theta_0$ is the parameter space under the null hypothesis. This doesn't tell me anything about $\beta(\theta)$ for $\theta \in \Theta_1$, where $\Theta_1$ is the parameter space under the alternative.

11. Suppose we are estimating $\theta$ on a parameter space $\Theta = [0, 10]$, and that there are only three estimators, $\hat{\theta}_1, \hat{\theta}_2$, and $\hat{\theta}_3$. In Fig. 2, we plot the risks of each estimator for all $\theta \in \Theta = [0, 10]$. Which estimator is the minimax estimator, assuming no other estimator exists?
$\bigcirc \hat{\theta}_1 \quad \bigcirc \hat{\theta}_2 \quad \checkmark \hat{\theta}_3$

10

### Visual Description
Text-only slide containing solutions and multiple-choice questions. The solutions are enclosed in blue rectangular boxes. Correct answers are marked with blue checkmarks.

---
## Page 11
### Content
**Solution:** For each estimator, compute the worst case risk across all $\theta \in [0, 10]$. For $\hat{\theta}_1$ and $\hat{\theta}_2$, they are approximately 7 and 5, respectively, while for $\hat{\theta}_3$ it is about 3. Thus, the minimax estimator is $\hat{\theta}_3$ in this set-up. It does not matter that the other two estimators have very low risk near $\theta = 0$ or $\theta = 10$.

Figure 2: Three different estimators and their risks on $[0, 10]$. We use a different line thickness for each risk function.

![Graph showing three risk functions $R(\cdot, \theta)$ plotted against $\theta$ from 0 to 10. $\hat{\theta}_1$ is a thin-lined parabola peaking at $\theta=5$ with a risk of about 7. $\hat{\theta}_2$ is a thick-lined parabola peaking at $\theta=5$ with a risk of about 5. $\hat{\theta}_3$ is a horizontal line at a risk level of approximately 3.](graph_placeholder)

12. Consider testing $H_0 : \theta = 0$ vs $H_1 : \theta = 1$ using a *one-sided* Wald test statistic for a Gaussian model $X_1, \dots, X_n \sim N(\theta, 1)$. The truth is $\theta = 0$. You decide to test at a 5% level of significance for this problem. You obtain a p-value of 0.051 with your observed data. What happens to the p-value (with the same data and the same test/cutoff) if you change the alternative to $\theta = 10$?
$\bigcirc$ Strictly decreases
$\bigcirc$ Strictly increases
$\checkmark$ **Is unchanged**
$\bigcirc$ Not enough information to answer

**Solution:** We aren't changing the test statistic, the threshold of rejection, or the data. We have the same test statistic. We just care about the probability of seeing a more extreme statistic under the null, which is unchanged.
Note: if your test statistic depends on the alternative or larger parameter space, then it may matter. Here, the Wald Test Statistic is independent of the alternative.

11

### Visual Description
The page includes a solution box, a graph (Figure 2), and a final multiple-choice question with its solution. The graph plots risk $R(\cdot, \theta)$ on the y-axis against $\theta$ on the x-axis. It shows three curves: a thin parabola ($\hat{\theta}_1$), a thick parabola ($\hat{\theta}_2$), and a horizontal line ($\hat{\theta}_3$). The horizontal line has the lowest maximum value. The final question has a blue checkmark next to "Is unchanged".
