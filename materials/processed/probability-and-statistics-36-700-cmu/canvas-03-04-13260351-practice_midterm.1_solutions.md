# canvas-03-04-13260351-practice_midterm.1_solutions

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-03-04-13260351-practice_midterm.1_solutions.pdf`
Duplicate equivalents: `canvas-03-04-13260351-practice_midterm.1_solutions.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 6

## Page 1
### Content
# 36-700 Practice Midterm 1

1. Let $X$ be a random variable with a continuous and strictly increasing c.d.f. function $F_X$ (so that the inverse $F_X^{-1}$ is well defined). Let $Y = F_X(X)$. Show that $Y$ has a uniform distribution on the interval $[a, b]$; specify $a$ and $b$.

**Answer:**
Let $F_Y$ denote the CDF of $Y$. Note that $F_X(x) \in [0, 1]$ for all $x \in \mathbb{R}$, so $Y$ takes values in $[0, 1]$. Thus we must have $a = 0$ and $b = 1$.

Pick any $x < 0$. $F_Y(x) = \mathbb{P}(Y \le x) = 0$ since $Y$ is always non-negative. Similarly, for any $x \ge 1$, $F_Y(x) = \mathbb{P}(Y \le x) = 1$ since $Y \le 1$ always.

Now pick $x \in [0, 1)$. Then
$$F_Y(x) = \mathbb{P}(Y \le x) = \mathbb{P}(F_X(X) \le x) = \mathbb{P}(X \le F_X^{-1}(x)) = F_X(F_X^{-1}(x)) = x.$$

In summary,
$$F_Y(x) = \begin{cases} 0 & x < 0 \\ x & x \in [0, 1) \\ 1 & x \ge 1. \end{cases}$$
Differentiating, the PDF is therefore given by $f_Y(x) = 1$ on $(0, 1)$ and 0 elsewhere, i.e., $Y \sim U[0, 1]$.

2. Let $X_1, \dots, X_n \stackrel{iid}{\sim} \text{Bernoulli}(1/2)$. Let $Y_i = e^{3X_i}$. Let
$$W_n = \frac{1}{n} \sum_{i=1}^n Y_i.$$

(a) The sequence $W_n$ converges in probability to a number $\mu$. What is $\mu$?
**Answer:** By the weak law of large numbers, $W_n \xrightarrow{p} \mu = \mathbb{E}(Y_1)$ and we calculate
$$\mathbb{E}[Y_1] = \mathbb{P}(X_1 = 0) \cdot e^{0 \cdot 3} + \mathbb{P}(X_1 = 1) \cdot e^{3 \cdot 1} = \frac{1}{2} + \frac{e^3}{2}.$$

(b) State the limiting distribution of $\sqrt{n}(W_n - \mu)$ and write your answer in terms of $\sigma^2$, where $\sigma^2$ is the variance of $Y_i = e^{3X_i}$. Then compute $\sigma^2$ explicitly.
**Answer:** By the Central Limit Theorem, $\sqrt{n}(W_n - \mu) \rightsquigarrow \mathcal{N}(0, \sigma^2)$, where $\sigma^2 = \mathbb{V}(Y_1)$. Now,
$$\mathbb{E}[Y_1^2] = \mathbb{P}(X_1 = 0) \cdot (e^{0 \cdot 3})^2 + \mathbb{P}(X_1 = 1) \cdot (e^{3 \cdot 1})^2 = \frac{1}{2} + \frac{e^6}{2}.$$
therefore
$$\begin{aligned} \sigma^2 &= \mathbb{E}(Y_1^2) - \mathbb{E}^2(Y_1) = \left(\frac{1}{2} + \frac{e^6}{2}\right) - \left(\frac{1}{2} + \frac{e^3}{2}\right)^2 \\ &= \frac{1}{4} - \frac{e^3}{2} + \frac{e^6}{4} = \frac{1}{4}(1 - 2e^3 + e^6) \\ &= \frac{(e^3 - 1)^2}{4}. \end{aligned}$$

### Visual Description
Text-only slide.

---
## Page 2
### Content
(c) Let $Z_n = \sqrt{W_n}$. Show that $\sqrt{n}(Z_n - a) \rightsquigarrow N(0, b)$ for some $a$ and $b$. Find $a$ and $b$ explicitly. You may leave your answer in terms of $\sigma^2$ (the variance of $Y_i = e^{3X_i}$). Note: $N(a,b)$ means a normal distribution with mean $a$ and variance $b$.

**Answer:** $Z_n = g(W_n)$ with $g(t) = \sqrt{t}$. Then $g'(t) = \frac{1}{2\sqrt{t}}$. By the Delta Method, $\sqrt{n}(Z_n - g(\mu)) \rightsquigarrow N(0, \sigma^2 [g'(\mu)]^2)$ where recall we computed $\mu = \frac{e^6+1}{2}$ and $\sigma^2 = \frac{(e^3-1)^2}{4}$. Thus,
$$\begin{cases} a = g(\mu) = \sqrt{\frac{e^6+1}{2}} \\ b = \sigma^2 [g'(\mu)]^2 = \frac{(e^3-1)^2}{4} \cdot \frac{1}{4\mu} = \frac{(e^3-1)^2}{4} \cdot \frac{1}{4} \cdot \frac{2}{e^6+1} = \frac{(e^3-1)^2}{8(e^6+1)} \end{cases}$$

### Visual Description
Text-only slide.

---
## Page 3
### Content
3. Let $X$ be a continuous uniform random variable on $[0, 1]$.
(a): Show that for any $x \in [0, 1]$, $\mathbb{P}(X = x) = 0$.
Hint: You can use that $A \subset B \Rightarrow \mathbb{P}(A) \le \mathbb{P}(B)$.
**Answer:** Pick any $x$. Take $\epsilon > 0$. Let $A_{x,\epsilon}$ be the event that $X \in (x - \epsilon, x + \epsilon) \cap [0, 1]$. Write $\mathbb{1}$ to be the indicator function. Then
$$\mathbb{P}(X = x) \le \mathbb{P}(A_{x,\epsilon}) = \int_{x-\epsilon}^{x+\epsilon} \mathbb{1}(t \in [0, 1]) \cdot dt \le \int_{x-\epsilon}^{x+\epsilon} dt = 2\epsilon.$$
Thus we have $0 \le \mathbb{P}(X = x) \le 2\epsilon$ for all $\epsilon > 0$, which implies $\mathbb{P}(X = x) = 0$.

(b): Let $A$ be the event that $X = 1/2$. Show that $A$ is independent of any other event $B$.
**Answer:** By (a), $\mathbb{P}(A) = 0$. Let $B$ be any other event. Then $A \cap B \subset A$, so $0 \le \mathbb{P}(A \cap B) \le \mathbb{P}(A) = 0$, proving $\mathbb{P}(A \cap B) = 0$, and clearly $\mathbb{P}(A)\mathbb{P}(B) = 0 \cdot \mathbb{P}(B) = 0$. So $\mathbb{P}(A \cap B) = \mathbb{P}(A)\mathbb{P}(B)$, verifying independence.

(c): Derive the PDF of $(X + 1)^5$. Be sure to define the PDF for all real numbers.
**Answer:** Note that $Y = (X + 1)^5$ takes values from 1 to $2^5$. For $t < 1$, $\mathbb{P}(Y \le t) = 0$. For $t \ge 2^5$, $\mathbb{P}(Y \le t) = 1$. Pick $t \in [1, 2^5)$. Note that $t^{1/5} - 1 \in [0, 1)$. Then
$$\mathbb{P}(Y \le t) = \mathbb{P}((X + 1)^5 \le t) = \mathbb{P}(X + 1 \le t^{1/5}) = \mathbb{P}(X \le t^{1/5} - 1) = t^{1/5} - 1.$$
Thus the CDF of $Y$ is given by
$$F_Y(t) = \begin{cases} 0 & t < 1 \\ t^{1/5} - 1 & t \in [1, 2^5) \\ 1 & t \ge 2^5. \end{cases}$$
Differentiating, the PDF is given by $f_Y(t) = t^{-4/5}/5$ for $t \in (1, 2^5)$ and $f_Y(t) = 0$ for $t \notin (1, 2^5)$.

4. Let $X$ and $Z$ be two continuous random variables with PDFs $f_X$ and $f_Z$. Let $g_{X|Z}(x|z)$ be the conditional PDF of $X$ given $Z = z$ (note that this is a function of $x$, and $z$ is fixed).
(a): State the definition of $\mathbb{E}[X|Z = z]$ and $\mathbb{V}[X|Z = z]$ in terms of the conditional PDF $g_{X|Z}$.
**Answer:**
$$\mathbb{E}[X|Z = z] = \int_{\mathbb{R}} x \cdot g_{X|Z}(x|z)dx$$
$$\mathbb{V}[X|Z = z] = \int_{\mathbb{R}} (x - \mathbb{E}[X|Z = z])^2 \cdot g_{X|Z}(x|z)dx$$

(b): Explain in 1-2 sentences whether $\mathbb{E}[X|Z]$ in general is a random variable or fixed constant and why.
**Answer:** It is a random variable. A random variable is a mapping from the sample space $\Omega$ to $\mathbb{R}$. The random variable $\mathbb{E}[X|Z]$ is the composition $\omega \mapsto Z(\omega) \mapsto \mathbb{E}[X|Z = Z(\omega)] \in \mathbb{R}$. For different values of $\omega$, we obtain possibly different values of $Z(\omega)$ and thus possibly different values of $\mathbb{E}[X|Z = Z(\omega)]$.

### Visual Description
Text-only slide.

---
## Page 4
### Content
5. Suppose we generate a random variable $X$ in the following way. First we flip a coin with a 60% chance of heads. If the coin is heads, take $X$ to have constant value 10. If the coin is tails, take $X$ to have a $N(100, 200)$ distribution (that is, mean 100, variance 200). Let $Y$ take value 1 if the coin is heads and 0 otherwise.
(a): Compute $\mathbb{E}[X|Y = 0]$ and $\mathbb{V}[X|Y = 0]$.
**Answer:** The conditional RV $X|\{Y = 0\}$ is $N(100, 200)$, so $\mathbb{E}[X|Y = 0] = 100$ and $\mathbb{V}[X|Y = 0] = 200$.
*(Note: The original text in the answer key for (a) and (b) seems to have swapped the definitions of Y=1 and Y=0 compared to the question prompt. Following the prompt: Y=1 is heads (X=10), Y=0 is tails (X~N(100,200)). The provided solution text has a typo in its labels but the calculations below use the correct logic.)*

(b): Compute $\mathbb{E}[X|Y = 1]$ and $\mathbb{V}[X|Y = 1]$.
**Answer:** The conditional RV $X|\{Y = 1\}$ is the constant RV 10, so $\mathbb{E}[X|Y = 1] = 10$ and $\mathbb{V}[X|Y = 1] = 0$.

(c): Use (a) and (b) to compute $\mathbb{E}[X]$ and $\mathbb{V}[X]$.
**Answer:** By the law of iterated expectation:
$$\begin{aligned} \mathbb{E}[X] &= \mathbb{E}[\mathbb{E}[X|Y]] \\ &= \mathbb{P}(Y = 1)\mathbb{E}[X|Y = 1] + \mathbb{P}(Y = 0)\mathbb{E}[X|Y = 0] \\ &= (0.6)(10) + (0.4)(100) \\ &= 6 + 40 = 46. \end{aligned}$$
By the law of conditional variance:
$$\mathbb{V}[X] = \mathbb{E}[\mathbb{V}[X|Y]] + \mathbb{V}[\mathbb{E}[X|Y]].$$
Now we compute
$$\begin{aligned} \mathbb{E}[\mathbb{V}[X|Y]] &= \mathbb{P}(Y = 1) \cdot \mathbb{V}[X|Y = 1] + \mathbb{P}(Y = 0) \cdot \mathbb{V}[X|Y = 0] \\ &= (0.6)(0) + (0.4)(200) = 80. \end{aligned}$$
Next, noting that $\mathbb{E}[\mathbb{E}[X|Y]] = \mathbb{E}[X] = 46$,
$$\begin{aligned} \mathbb{V}[\mathbb{E}[X|Y]] &= \mathbb{E}[(\mathbb{E}[X|Y])^2] - (\mathbb{E}[\mathbb{E}[X|Y]])^2 \\ &= \mathbb{P}(Y = 1) \cdot (\mathbb{E}[X|Y = 1])^2 + \mathbb{P}(Y = 0) \cdot (\mathbb{E}[X|Y = 0])^2 - 46^2 \\ &= (0.6)(10^2) + (0.4)(100^2) - 46^2 = 1944. \end{aligned}$$
Hence
$$\mathbb{V}[X] = 80 + 1944 = 2024.$$

6. Prove that if $X_n \rightsquigarrow 0$ then $X_n \xrightarrow{P} 0$.
**Answer:** Let $\epsilon$ be an arbitrary positive number.
$$\mathbb{P}(|X_n - 0| \ge \epsilon) = \mathbb{P}(X_n \le -\epsilon) + \mathbb{P}(X_n \ge \epsilon)$$
It suffices to show $\mathbb{P}(X_n \le -\epsilon) \to 0$ and $\mathbb{P}(X_n \ge \epsilon) \to 0$.
Let $F_0$ be the CDF of a point mass at 0. So $F_0(x) = 0$ if $x < 0$ and $F_0(x) = 1$ if $x \ge 0$. Let $F_n$ be the CDF of $X_n$. By assumption, $F_n(x) \to 0$ for $x < 0$ and $F_n(x) \to 1$ for $x > 0$.
First, $\mathbb{P}(X_n \le -\epsilon) = F_n(-\epsilon) \to 0$.
Second, $\mathbb{P}(X_n \ge \epsilon) \le \mathbb{P}(X_n > \epsilon/2) = 1 - F_n(\epsilon/2) \to 1 - 1 = 0$.

### Visual Description
Text-only slide.

---
## Page 5
### Content
7. One important application of concentration inequalities is in quantifying performance in classification problems in machine learning. In the classification problem, suppose we are given $n$ i.i.d samples $(X_i, Y_i)$ and a fixed classifier $h$ which maps $X$s to $Y$s, and the $Y$s are binary $\{0, 1\}$.
We can define the *empirical risk* of a classifier as:
$$\widehat{R}(h) = \frac{1}{n} \sum_{i=1}^n \mathbb{I}(h(X_i) \neq Y_i),$$
this simply counts the number of mistakes made by our classifier on the training data. To remind you $\mathbb{I}(h(X_i) \neq Y_i) = 1$, if $h(X_i) \neq Y_i$ and 0 otherwise. (That is, it is a Bernoulli random variable.) Its expected value is the *true risk* of the classifier which we denote $R(h)$. Ideally, we would like that the empirical risk is close to the true risk so we can use our training data to get a sense of how good our classifier is. We will use concentration inequalities to show this.
(a): Compute the variance of $\widehat{R}(h)$. This can depend on $R(h)$.
Hint: Note that $\mathbb{I}(\cdot)^2 = \mathbb{I}(\cdot)$. Use the i.i.d. assumption to simplify your calculations.

**Answer:**
$$\begin{aligned} \mathbb{E}(\widehat{R}(h)) &= \mathbb{E}\left(\frac{1}{n} \sum_{i=1}^n \mathbb{I}(h(X_i) \neq Y_i)\right) \\ &= \frac{1}{n} \sum_{i=1}^n \mathbb{P}(h(X_i) \neq Y_i) \\ &= \mathbb{P}(h(X_1) \neq Y_1) = \int \mathbb{I}(h(X) \neq Y) dP_{XY}, \quad (\because \text{iid samples}) \end{aligned}$$
The variance of $\widehat{R}(h)$ is, again by iid samples,
$$\begin{aligned} \mathbb{V}(\widehat{R}(h)) &= \frac{\mathbb{V}_{(X,Y) \sim P_{XY}}(\mathbb{I}(h(X) \neq Y))}{n} = \frac{\mathbb{E}[\mathbb{I}(h(X) \neq Y)^2] - [\mathbb{E}(\mathbb{I}(h(X) \neq Y))]^2}{n} \\ &= \frac{\mathbb{E}[\mathbb{I}(h(X) \neq Y)] - [\mathbb{E}(\mathbb{I}(h(X) \neq Y))]^2}{n}, \quad (\because \mathbb{I}(\cdot)^2 = \mathbb{I}(\cdot)) \\ &= \frac{R(h)(1 - R(h))}{n}. \end{aligned}$$

(b): Write out Chebyshev’s inequality to bound the deviation $|\widehat{R}(h) - R(h)|$ in probability.
**Answer:**
Chebyshev’s inequality implies, for any $\epsilon > 0$,
$$\mathbb{P}(|\widehat{R}(h) - R(h)| \ge \epsilon) \le \frac{\mathbb{V}(\widehat{R}(h))}{\epsilon^2}$$
$$\implies \mathbb{P}(|\widehat{R}(h) - R(h)| \le \epsilon) \ge 1 - \frac{\mathbb{V}(\widehat{R}(h))}{\epsilon^2} = 1 - \frac{R(h)(1 - R(h))}{n\epsilon^2}.$$

(c): Use Chebyshev’s inequality to bound the sample size needed to ensure that this deviation is at most 0.01 with probability at least 0.95. You may need to upper bound the variance of $\widehat{R}(h)$ to do this: use as tight a bound as you can think of. Hint: Recall $x(1 - x) \le 1/4$ for $x \in [0, 1]$.

### Visual Description
Text-only slide.

---
## Page 6
### Content
**Answer:**
Using part (b), we require $1 - \frac{R(h)(1-R(h))}{n\epsilon^2} \ge 0.95$ for $\epsilon = 0.01$, which implies $\mathbb{P}(|\widehat{R}(h) - R(h)| \le \epsilon) \ge 0.95$ as required. This rearranges to
$$n \ge \frac{R(h)(1 - R(h))}{\epsilon^2 \cdot (0.05)}. \quad (1)$$
But since $R(h) \in [0, 1]$, $R(h)(1 - R(h)) \le 1/4$ for all $h$. So if $n \ge \frac{1}{4\epsilon^2 \cdot (0.05)}$, then (1) holds. Hence the minimum sample size is
$$n \ge \frac{1}{4\epsilon^2 \cdot (0.05)} = \frac{1}{4(0.01)^2(0.05)} = 50000.$$

(d): Write out Hoeffding’s inequality for the deviation.
**Answer:** Since $\mathbb{I}(h(X_i) \neq Y_i) \in [0, 1]$,
$$\mathbb{P}(|\widehat{R}(h) - R(h)| \ge \epsilon) \le 2 \exp(-2n\epsilon^2) \iff \mathbb{P}(|\widehat{R}(h) - R(h)| \le \epsilon) \ge 1 - 2 \exp(-2n\epsilon^2).$$

(e): Use Hoeffding’s inequality to give a $1 - \delta$ confidence interval for the unknown true risk $R(h)$ (centered around the empirical risk).
**Answer:** Solving $\delta = 2 \exp(-2n\epsilon^2)$ yields $\epsilon = \sqrt{\log(2/\delta)/(2n)}$. Therefore, a $1 - \delta$ confidence interval for $R(h)$ is $\widehat{R}(h) \pm \sqrt{\log(2/\delta)/(2n)}$.

### Visual Description
Text-only slide.

---
