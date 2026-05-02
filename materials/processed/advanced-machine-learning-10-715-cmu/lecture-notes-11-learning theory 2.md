# lecture-notes-11-learning theory 2

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/lecture-notes-11-learning theory 2.pdf`
Duplicate equivalents: `lecture-notes-11-learning theory 2.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 2

## Page 1
### Content
**10-715 Advanced Introduction to Machine Learning**  
**Fall 2019**  
**Lecture 10: September 25, 2019**  
*Lecturer: Nihar B. Shah*  
*Scribes: Jiaqiang Ruan*

---

**Note:** LaTeX template courtesy of UC Berkeley EECS dept.  
**Disclaimer:** *These notes have not been subjected to the usual scrutiny reserved for formal publications. They may be distributed outside this class only with the permission of the Instructor.*

This lecture's notes illustrate some uses of various $\LaTeX$ macros. Take a look at this and imitate.

### 10.1 Recall on last lecture

**Realizability assumption** There is some (unknown) $h^* \in \mathcal{H}$, such that $y = h^*(x)$ for every point $(x, y)$.

**I.I.D. assumption** all data points are independent and identically distributed from some (unknown) distribution $D$ on $\mathcal{X}$.

**Risk**
$$R_{D,h^*}(h) \text{ or } R(h) = P_{x \sim D}(h(x) \neq h^*(x))$$

**Intuition of defining the Risk:** given training data, optimize $h : \mathcal{X} \to \mathcal{Y}$, such that $error(h, h^*)$ (w.r.t a new point) is small with high probability (w.r.t training data).

### 10.2 PAC Learning

**Probably Approximately Correct (PAC) Learning**

A hypothesis class $\mathcal{H}$ is PAC learnable if there is a learning algorithm such that: for every $\epsilon > 0$ and $\delta$, there exists a positive integer $n^*(\epsilon, \delta)$, for every distribution $D$ on $\mathcal{X}$ and every $h^* \in \mathcal{H}$, running the algorithm on $n \geq n^*(\epsilon, \delta)$ samples outputs $h : \mathcal{X} \to \mathcal{Y}$ such that $P_{x_1,x_2...x_n \sim D}(R(h) > \epsilon) \leq \delta$.

For any $(\epsilon, \delta)$, the smallest such $n^*(\epsilon, \delta)$ is called **sample complexity**.

**PAC learnability on finite hypothesis class**

**Theorem 10.1** *if $\mathcal{H}$ is finite then it is PAC learnable with sample complexity at most $\lceil \frac{\log(|\mathcal{H}|/\delta)}{\epsilon} \rceil$.*

**Proof:** Suppose the learning algorithm is ERM. Note that the empirical risk for the output hypothesis would be 0. Let $T = x_1, x_2...x_n$ be training set drawn from some $D$. Let bad hypothesis class be $\mathcal{H}_B = \{h \in \mathcal{H} | R_{(D,h^*)}(h) > \epsilon\}$. Let bad training set be $\cup_{h \in \mathcal{H}_B} \{(x_1, x_2...x_n) \in \mathcal{X}^n | h(x_i) = h^*(x_i) \forall i\}$.

### Visual Description
Text-only slide.

---

## Page 2
### Content
10-2
Lecture 10: September 25, 2019

$$
\begin{aligned}
P(R(h) > \epsilon) &\leq P_{D^n} (\cup_{h \in \mathcal{H}_B} \{(x_1, x_2...x_n) \in \mathcal{X}^n | h(x_i) = h^*(x_i) \forall i\}) \\
&\leq \sum_{h \in \mathcal{H}_B} P(\{(x_1, x_2...x_n) \in \mathcal{X}^n | h(x_i) = h^*(x_i) \forall i\}) \\
&= \sum_{h \in \mathcal{H}_B} \prod_{i=1}^n P(h(x_i) = h^*(x_i)) \\
&\leq \sum_{h \in \mathcal{H}_B} \prod_{i=1}^n (1 - \epsilon) \\
&= |\mathcal{H}_B|(1 - \epsilon)^n \\
&\leq |\mathcal{H}|e^{-n\epsilon}
\end{aligned}
$$

By bounding the probability with $P(R(h) \geq \epsilon) \leq \delta$, we have $n \geq \frac{\log(|\mathcal{H}|/\delta)}{\epsilon}$. The sample complexity would be at most $\lceil \frac{\log(|\mathcal{H}|/\delta)}{\epsilon} \rceil$. $\blacksquare$

### 10.3 VC Dimension

**Shatter** A set $\{x_1, x_2...x_m\} \subseteq \mathcal{X}$ is shattered by $\mathcal{H}$ if $\{(h(x_1), h(x_2)...h(x_m)) | h \in \mathcal{H}\} = \{0, 1\}^m$

**VC Dimension** the VC dimension of $\mathcal{H}$ is the size of the largest set shattered by $\mathcal{H}$.

**Fundamental theorem of statistical learning theory (under realizability)**

A hypothesis class $\mathcal{H}$ with $VC(\mathcal{H}) = \infty$ is NOT PAC learnable. Otherwise, $\mathcal{H}$ is learnable with sample complexity:

$$c_1 \frac{VC(\mathcal{H}) + \log(1/\delta)}{\epsilon} \leq n^*(\epsilon, \delta) \leq c_2 \frac{VC(\mathcal{H})\log(1/\epsilon) + \log(1/\delta)}{\epsilon}$$

where $c_1 > 0, c_2 > 0$ are universal constants.

### Visual Description
Text-only slide.

---
