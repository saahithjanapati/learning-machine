# previous-years-midterms-02-10715_CMU_Fall_2023_midterm_nosoln

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/previous-years-midterms-02-10715_CMU_Fall_2023_midterm_nosoln.pdf`
Duplicate equivalents: `previous-years-midterms-02-10715_CMU_Fall_2023_midterm_nosoln.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 12

## Page 1
### Content
CMU 10-715 Fall 2023: Midterm Exam

Name:

Andrew ID:

* This is an 80 minute exam during the lecture time, from 2:00 PM to 3:20 PM.
* You are **NOT** allowed to refer to notes, homework solutions, the textbook, lecture videos or any other outside resources.
* You are **NOT** allowed to discuss the exam with anyone in the duration of the exam.
* We recommend taking a brief look at all questions first and then starting to answer them. You may find some questions easier than others.
* For each question, if not specified, assume the following:
    * Binary classification with $\mathcal{Y} = \{-1, 1\}$
    * $\mathcal{X} = \mathbb{R}^d$ for some positive integer $d$
    * i.i.d. data
    * If there is an arg min then assume there is some magical method to actually find the arg min.

**Distribution of Marks**

| Question | Points | Score |
| :---: | :---: | :---: |
| **1** | 10 | |
| **2** | 10 | |
| **3** | 10 | |
| **4** | 10 | |
| **5** | 5 | |
| Total: | 45 | |

### Visual Description
Text-only slide containing exam instructions and a table for the distribution of marks.

---
## Page 2
### Content
### 1) Perceptron

Consider some data $\{(x_i, y_i)\}_{i \in [n]}$. Assume that all the $x_i$'s are distinct. Further, suppose that there exists some $i \in [n]$ such that $y_i = 1$ and there also exists some $i \in [n]$ such that $y_i = -1$. Assume this data is linearly separable.

Let us assume that the data is normalized in the following two ways: (i) The data is centered, that is, $\sum_{i \in [n]} x_i = \vec{0}$. (This can be achieved by shifting all the $x_i$'s by a constant offset.) (ii) The scale is normalized, that is, assume $\max_{i \in [n]} \|x_i\|_2 = 1$. (This can be achieved by rescaling all $x_i$'s by the norm of the vector with the largest magnitude.)

Recall the definition of the margin $\gamma$:
$$\gamma = \max_{\substack{w \in \mathbb{R}^d, b \in \mathbb{R} \\ \|w\|_2=1}} \min_{i \in [n]} y_i(\langle w, x_i \rangle + b)$$

Let the above maximum be attained by $(w^*, b^*)$. Also recall, $R = \max_{i \in [n]} \|x_i\|_2$. It is easy to see that $R = 1$ for our normalized data.

Finally, also recall the main theoretical result about the Perceptron algorithm: it terminates after at most $\frac{(R^2+1)(b^{*2}+1)}{\gamma^2}$ iterations, after which $y_i(\langle w, x_i \rangle + b) > 0 \forall i \in [n]$. With $R$ fixed at 1, in this question, we will derive a bound on $b^*$.

(a) Consider a hyperplane defined by some $(w, b)$ such that it does not intersect or touch the hypersphere $H$ where
$$H = \{x \in \mathbb{R}^d \mid \|x\|_2 \le 1\}$$
Argue that this hyperplane cannot be a perfect classifier. [Hint: To get intuition, think about $d = 2$ and draw a picture in your rough notes.]

Page 2
### Visual Description
Text-only slide.

---
## Page 3
### Content
Page 3
### Visual Description
Blank page.

---
## Page 4
### Content
(b) Consider any hyperplane defined by some $(w, b)$ such that $\|w\|_2 = 1$ and $|b| > 1$. Show that this hyperplane does not intersect or touch the hypersphere $H$ where
$$H = \{x \in \mathbb{R}^d \mid \|x\|_2 \le 1\}$$
.

Page 4
### Visual Description
Text-only slide.

---
## Page 5
### Content
(c) Using the arguments in (a) and (b), derive an upper bound on $b^*$.

[Learning objective for Q1: In the class, there were a lot of questions about the dependence of the bound on $R$ and $b^*$. This derivation helps answer those questions.]

Page 5
### Visual Description
Text-only slide.

---
## Page 6
### Content
### 2) Kernel Methods

Consider the function $K : \mathbb{R}^d \times \mathbb{R}^d \to \mathbb{R}$ defined as
$$K(x, \tilde{x}) = \begin{cases} 2 & \text{if } x = \tilde{x} \\ -3 & \text{otherwise.} \end{cases}$$

Our goal is to show that the function $K$ is not a valid Kernel. To this end, recall Mercer's theorem: A symmetric function $K : \mathcal{X} \times \mathcal{X} \to \mathbb{R}$ is a valid kernel if and only if for every integer $m \ge 1$ and every $z_1, \dots, z_m \in \mathcal{X}$, the Gram matrix $G \in \mathbb{R}^{m \times m}$ given by $G_{ij} = K(z_i, z_j) \forall i, j$ is positive semidefinite. Note that an $m \times m$ matrix $M$ is PSD if and only if $\forall v \in \mathbb{R}^m, v^T M v \ge 0$.

Let us now apply Mercer's theorem. Consider some arbitrary pair of vectors $x, \tilde{x} \in \mathbb{R}^d$ such that $x \neq \tilde{x}$. Then the Gram matrix equals $G := \begin{bmatrix} 2 & -3 \\ -3 & 2 \end{bmatrix}$. Letting $v = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$, it is easy to compute and show that $v^T G v < 0$.

Our objective in this question is to understand what happens under the hood in the 'negative result' (i.e., 'only if') part of Mercer's theorem. To this end, we will use the construction of $v$ and $G$ above to directly show the non-existence of any Hilbert space and mapping that can yield the function $K$. We will do so without actually using Mercer's theorem.

To show this, we will first suppose that there does exist some Hilbert space $\mathcal{F}$ and mapping $\Psi : \mathbb{R}^d \to \mathcal{F}$ such that for any pair $x, \tilde{x} \in \mathbb{R}^d$, $K(x, \tilde{x}) = \langle \Psi(x), \Psi(\tilde{x}) \rangle$. Then, for any $x \neq \tilde{x} \in \mathbb{R}^d$, we have the following series of relations:
$$0 \le \|\Psi(x) + \Psi(\tilde{x})\|^2$$
$$\vdots$$
?

Complete the rest of the argument.

[Learning objective for Q2: Get a better understanding of Kernels and Mercer's theorem by getting your hands dirty with its intricacies (via a simple example).]

Page 6
### Visual Description
Text-only slide.

---
## Page 7
### Content
Page 7
### Visual Description
Blank page.

---
## Page 8
### Content
### 3) Empirical Risk Minimization with a Twist

Consider the realizable setting and the PAC learning framework for hypothesis class $\mathcal{H}$. Suppose that $|\mathcal{H}|$ is finite. Then recall the result for the sample complexity of this hypothesis class, in terms of $|\mathcal{H}|$, that we had derived in class: If $|\mathcal{H}|$ is finite then $\mathcal{H}$ is PAC learnable with sample complexity at most $\lceil \frac{\log(|\mathcal{H}|/\delta)}{\epsilon} \rceil$. Also recall that we had achieved this result by using the algorithm "ERM over $\mathcal{H}$".

a) Consider some other hypothesis class $\mathcal{H}_1$ such that $|\mathcal{H}_1|$ is finite and $\mathcal{H}_1 \supseteq \mathcal{H}$. Then state whether the following statement is true or false, along with a justification (via proof or counter example): The algorithm which does ERM over $\mathcal{H}_1$ can also guarantee $(\epsilon, \delta)$-PAC learning for $\mathcal{H}$ as long as you have at least $\lceil \frac{\log(|\mathcal{H}_1|/\delta)}{\epsilon} \rceil$ samples.

Page 8
### Visual Description
Text-only slide.

---
## Page 9
### Content
b) Consider some other hypothesis class $\mathcal{H}_2$ such that $|\mathcal{H}_2|$ is finite and $\mathcal{H}_2 \subseteq \mathcal{H}$. Then state whether the following statement is true or false, along with a justification (via proof or counter example): The algorithm which does ERM over $\mathcal{H}_2$ can also guarantee $(\epsilon, \delta)$-PAC learning for $\mathcal{H}$ as long as you have at least $\left\lceil \frac{\log(|\mathcal{H}_2|/\delta)}{\epsilon} \right\rceil$ samples.

[Learning objective for Q3: In the class, we have been considering ERM over the hypothesis class $\mathcal{H}$ from which $h^*$ is assumed to lie. But what if you end up doing ERM over a different hypothesis class? This question is aimed to understand that. In general, it is often insightful to ask such ‘what if’ questions :-)]

### Visual Description
Text-only slide.

---
## Page 10
### Content
4) VC Dimension

Suppose $\mathcal{H}_1$ is a hypothesis class of finite size, i.e., $|\mathcal{H}_1| < \infty$. Suppose $\mathcal{H}_2$ is a hypothesis class of infinite size, i.e., $|\mathcal{H}_2| = \infty$. Then:

* Option 1: It must be that $VC(\mathcal{H}_1) = VC(\mathcal{H}_2)$
* Option 2: It must be that $VC(\mathcal{H}_1) \le VC(\mathcal{H}_2)$, and we can have $VC(\mathcal{H}_1) < VC(\mathcal{H}_2)$
* Option 3: It must be that $VC(\mathcal{H}_1) \ge VC(\mathcal{H}_2)$, and we can have $VC(\mathcal{H}_1) > VC(\mathcal{H}_2)$
* Option 4: None of the above

Please indicate which option you think is correct. Most importantly, formally justify (with proofs or counter examples) your answer.

[Learning objective for Q4: This is another natural ‘what if’ question. What if one hypothesis class is finite and another is infinite – how can one compare their complexities?]

### Visual Description
Text-only slide.

---
## Page 11
### Content
(This page is intentionally left blank.)

### Visual Description
Blank page with "Page 11" at the bottom.

---
## Page 12
### Content
5) Agnostic PAC Learning

Consider the i.i.d. assumption, the agnostic setting, and the 0-1 loss. Write down the definition of PAC learnability of a given hypothesis class $\mathcal{H}$.

[Learning objective for Q5: Straightforward question, ensuring you understand the basic definition of agnostic PAC learnability.]

### Visual Description
Text-only slide.
