# lecture-22-part-1

Source: `materials/archive/survey-of-algebra/local-pdfs/lecture-22-part-1.pdf`
Duplicate equivalents: `lecture-22-part-1.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 4

## Page 1
### Content
**Lecture 22: Other properties of Brownian Motions, Borel-Cantelli’s lemma**

A Brownian motion is a time-continuous stochastic process $(X_t)_{t \ge 0}$ that models random continuous motions. Brownian motion that starts at $x$ with variance parameter $\sigma^2$:
(i) $X_0 = x$;
(ii) for any $s_1 \le t_1 \le s_2 \le t_2 \le \dots \le s_n \le t_n$ the random variables
$$X_{t_1} - X_{s_1}, \dots, X_{t_n} - X_{s_n}$$
are independent;
(iii) For any $s < t$ the random variable $X_t - X_s$ has a normal distribution with mean 0 and variance $\sigma^2(t - s)$.
(iv) With probability 1, the function $t \mapsto X_t$ is continuous in $t$.

**Reflection principle (strong form):** If $T$ is a stopping time then
$$X^T(t) := \begin{cases} X_t, & t \le T; \\ 2X_T - X_t, & t > T, \end{cases}$$
is also a Brownian motion.

**Example:** Let $X_t$ be the standard Brownian motion. Then almost surely
$$\lim_{t \to \infty} \frac{X_t}{t} = 0.$$
This property is used to show $t X_{1/t}$ is also a std BM if $X_t$ is a std BM.
To show this we will use

**Borel–Cantelli lemma** — If $E_1, E_2, \dots$ is a sequence of events such that
$$\sum_{n=1}^\infty P(E_n) < \infty,$$
then with probability 1, only a finite number of events in this sequence occur.
In other words, let $A$ be the event that only a finite number of such events occur, then $P(A) = 1$.

Note: the set of outcomes such that an infinite numbers of events in $E_1, E_2, \dots$ occur is
$$\bigcap_{n=1}^\infty \left( \bigcup_{k \ge n} E_k \right)$$
This is often denoted by $\limsup_{n \to \infty} E_n = \bigcap_{n=1}^\infty \bigcup_{k=n}^\infty E_k$.
Then the lemma says
$$Pr \left( \limsup_{n \to \infty} E_n \right) = 0.$$

### Visual Description
The slide contains several definitions and theorems related to Brownian motion and the Borel-Cantelli lemma. Key sections like the "Reflection principle" and "Borel-Cantelli lemma" are enclosed in double-lined boxes. Mathematical formulas are centered.

---

## Page 2
### Content
**Proof:**
The given assumption implies that there is some finite $L$ such that
$$\lim_{n \to \infty} \sum_{k=1}^n P(E_k) = L.$$
The event $A^c$ is the event where there is a number $n$ such that $E_n, E_{n+1}, \dots$ all occur. In other words, $A^c = \bigcap_{n=1}^\infty \bigcup_{k=n}^\infty E_k$. (Typically written as $A^c = \limsup_{n \to \infty} E_n$).
Let $F_n = \bigcup_{k=n}^\infty E_k$. Then $A^c = \bigcap_{n=1}^\infty F_n$.
Therefore
$Pr(A^c) \le P(F_n) \le \sum_{k=n}^\infty P(E_k)$ for each $k$.
Thus
$$P(A^c) \le \lim_{n \to \infty} \sum_{k=n}^\infty P(E_k) = \lim_{n \to \infty} |L - \sum_{k=1}^{n-1} P(E_k)| = 0$$

Now, we may argue as follows.
First we write, for integers $n \ge 1$
$$X_n = (X_n - X_{n-1}) + \dots + (X_1 - X_0) + X_0$$
$$= (X_n - X_{n-1}) + \dots + (X_1 - X_0)$$
This is a sum of independent and identically distributed random variables (all standard Gaussian) with mean 0, therefore by the law of large numbers, with probability 1 we have
$$\lim_{n \to \infty} \frac{X_n}{n} = 0$$
For any $t$, let $n = \lfloor t \rfloor$ be the largest integer that does not exceed $t$. Note that as $t \to \infty$ we have $n \to \infty$. We write
$$|X_t| = |X_t - X_n| + |X_n|$$
$$\le M_n + |X_n|$$
where
$$M_n = \sup_{n \le t \le n+1} |X_t - X_n|$$
Thus
$$\left| \frac{X_t}{t} \right| \le \frac{|X_t|}{n} \le \frac{M_n}{n} + \frac{|X_n|}{n}$$

### Visual Description
The top half of the slide contains a proof of the Borel-Cantelli lemma inside a large box. The bottom half continues with a proof related to the limit of $X_t/t$, using the Law of Large Numbers and defining a supremum $M_n$.

---

## Page 3
### Content
Since $X_n/n \to 0$ almost surely, it suffices to show that
$$\lim_{n \to \infty} \frac{M_n}{n} = 0$$
almost surely.
Now using the reflection principle, for any $a > 0$ and any $x$
$$P(M_n \ge a | X_n = x) \le 2P(\sup_{n \le t \le n+1} X_t \ge a + x | X_n = x)$$
$$= 4P(X_{n+1} \ge a + x | X_n = x)$$
$$= 4 \int_{a+x}^\infty \frac{1}{\sqrt{2\pi}} e^{-(u-x)^2/2} du$$
$$= 4 \int_a^\infty \frac{1}{\sqrt{2\pi}} e^{-u^2/2} du$$
$$\le 4 \int_a^\infty \frac{1}{\sqrt{2\pi}} e^{-au/2} du$$
$$= \frac{8}{a\sqrt{2\pi}} e^{-a^2/2}.$$
Thus
$$P(M_n \ge a) \le \frac{8}{a\sqrt{2\pi}} e^{-a^2/2}.$$
Taking $a = 2\sqrt{\log(1 + n)}$ we obtain
$$P(M_n \ge 2\sqrt{\log(1 + n)}) \le \frac{4}{\sqrt{2\pi \log(1 + n)}} e^{-2 \log(1+n)} = \frac{4}{\sqrt{2\pi}(1 + n)^2 \sqrt{\log(1 + n)}}$$
Let $E_n$ be the event that $M_n \ge 2\sqrt{\log(1 + n)}$. Then
$$\sum_n P(E_n) < \infty.$$
Thus with probability 1 we know that there are only a finite number of $n$ for which $M_n \ge 2\sqrt{\log(1 + n)}$.
In other words, with probability 1 the following holds for $n$ sufficiently large
$$M_n < 2\sqrt{\log(1 + n)}$$
Since $M_n \ge 1$, it follows that
$$\lim_{n \to \infty} \frac{M_n}{n} = 0$$

### Visual Description
Text-only slide. The slide contains a mathematical derivation using the reflection principle and Gaussian integrals to bound the probability of $M_n$ being large, eventually applying the Borel-Cantelli lemma.

---

## Page 4
### Content
almost surely.
**Sample path of Brownian motion**
We know that the sample paths are continuous (with probability 1).
It turns out that the sample path is nowhere differentiable (with probability 1).
A function $X(t)$ is differentiable at $t$ if the limit
$$\lim_{h \to 0} \frac{X(t + h) - X(t)}{h}$$
exists. (In the limit $h$ could be negative as long as $t + h$ is in the domain of $X$).
The above claim says that almost surely the path $X_t = X(t)$ is not differentiable at **all** $t \ge 0$.
**P(as a function of $t, X_t$ is not differentiable at all $t \ge 0$) = 1.**
This can be showed using Borel-Cantelli’s lemma and the reflection property of BM.

**Recurrence property of BM**
1D: transient [Note: likely a typo, as the following text describes recurrence]
If $Z$ is the set of zeros then
$$P(Z \cap [1, t] \neq \emptyset) = 1 - \frac{2}{\pi} \arctan\left(\frac{1}{\sqrt{t - 1}}\right) \to 1$$
as $t \to \infty$. Thus
$$P(Z \cap [1, \infty) \neq \emptyset) = 1.$$
Showing that with probability 1 the 1D standard BW will return to 0. Thus it is point recurrent.
In 2D: Neighborhood recurrent but not point recurrent.
In d-D, $d \ge 3$: transient.

**Neighborhood recurrent at 0:** For any $r > 0$, let $B_r = \{|x| < r\}$, then it holds that
$$P(X_t \text{ never visits } B_r | X_0 = x) = 0$$
for any $x$.

### Visual Description
The slide discusses the differentiability and recurrence properties of Brownian motion. It includes a boxed statement about non-differentiability and another boxed definition for "Neighborhood recurrent at 0" at the bottom. Mathematical limits and probabilities are used to describe these properties.

---
