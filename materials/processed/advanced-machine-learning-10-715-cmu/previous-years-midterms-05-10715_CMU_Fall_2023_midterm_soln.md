# previous-years-midterms-05-10715_CMU_Fall_2023_midterm_soln

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/previous-years-midterms-05-10715_CMU_Fall_2023_midterm_soln.pdf`
Duplicate equivalents: `previous-years-midterms-05-10715_CMU_Fall_2023_midterm_soln.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 8

## Page 1
### Content
CMU 10-715 Fall 2023: Midterm Exam

Answer: **DO NOT PRINT, SOLUTIONS ARE BEING DISPLAYED!**

Name:
Andrew ID:

* This is an 80 minute exam during the lecture time, from 2:00 PM to 3:20 PM.
* You are **NOT** allowed to refer to notes, homework solutions, the textbook, lecture videos or any other outside resources.
* You are **NOT** allowed to discuss the exam with anyone in the duration of the exam.
* We recommend taking a brief look at all questions first and then start to answer them. You may find some questions easier than others.
* For each question, if not specified, assume the following:
    - Binary classification with $\mathcal{Y} = \{-1, 1\}$
    - $\mathcal{X} = \mathbb{R}^d$ for some positive integer $d$
    - i.i.d. data
    - If there is an arg min (e.g., in ERM) then assume there is some magical method to actually find the arg min.

**Distribution of Marks**

### Visual Description
Text-only slide. The title and instructions are in black, while a warning message at the top is in bold red.

---

## Page 2
### Content
| Question | Points | Score |
| :--- | :--- | :--- |
| **1** | 10 | |
| **2** | 10 | |
| **3** | 10 | |
| **4** | 10 | |
| **5** | 5 | |
| Total: | 45 | |

Page 2

### Visual Description
A simple table showing the distribution of marks for five questions, totaling 45 points.

---

## Page 3
### Content
### 1) Perceptron

Consider some data $\{(x_i, y_i)\}_{i \in [n]}$. Assume that all the $x_i$’s are distinct. Further, suppose that there exists some $i \in [n]$ such that $y_i = 1$ and there also exists some $i \in [n]$ such that $y_i = -1$. Assume this data is linearly separable.

Let us assume that the data is normalized in the following two ways: (i) The data is centered, that is, $\sum_{i \in [n]} x_i = \vec{0}$. (This can be achieved by shifting all the $x_i$’s by a constant offset.) (ii) The scale is normalized, that is, $\max_{i \in [n]} \|x_i\|_2 = 1$. (This can be achieved by rescaling all $x_i$’s by the norm of the vector with the largest magnitude.)

Recall the definition of the margin $\gamma$:
$$\gamma = \max_{\substack{w \in \mathbb{R}^d, b \in \mathbb{R} \\ \|w\|_2=1}} \min_{i \in [n]} y_i(\langle w, x_i \rangle + b).$$

Let $(w^*, b^*)$ denote the values that attain the optimum value. Also recall our notation from class: $R = \max_{i \in [n]} \|x_i\|_2$. It is easy to see that $R = 1$ for our normalized data.

Finally, recall the main theoretical result about the Perceptron algorithm: it terminates after at most $\frac{(R^2+1)(b^{*2}+1)}{\gamma^2}$ iterations, after which $y_i(\langle w, x_i \rangle + b) > 0$ $\forall i \in [n]$. With $R$ fixed at 1, in this question, we will derive a bound on $b^*$.

(a) Consider a hyperplane defined by some $(w, b)$ such that it does not intersect or touch the hypersphere $H$ where
$$H = \{x \in \mathbb{R}^d \mid \|x\|_2 \leq 1\}.$$
Argue that this hyperplane cannot be a perfect classifier for this data. [Hint: To get intuition, think about $d = 2$ and draw a picture in your rough notes.]

**Answer:** The high level idea of the proof is to show that for a hyperplane that does not touch or intersect $H$, $\forall i \in [n]$, $\langle w, x_i \rangle + b$ has the same sign.
Suppose there exists a perfect classifier. Then $\exists i, j \in [n]$ such that $(\langle w, x_i \rangle + b) > 0$ and $(\langle w, x_j \rangle + b) < 0$. Hence, there is some $x$ which lies on the line joining $x_i$ and $x_j$ such that $(\langle w, x \rangle + b) = 0$. From the normalization of the data, we have $x_i \in H$ $\forall i \in [n]$. Since $H$ is convex, we must have this $x \in H$. Thus this hyperplane intersects or touches $H$, thereby leading to a contradiction.

(b) Consider any hyperplane defined by some $(w, b)$ such that $\|w\|_2 = 1$ and $|b| > 1$. Show that this hyperplane does not intersect or touch the hypersphere $H$, where again
$$H = \{x \in \mathbb{R}^d \mid \|x\|_2 \leq 1\}.$$

**Answer:** Again, we prove this by contradiction. Essentially, this problem asks us to prove that, if $\|w\|_2 = 1$ and $|b| > 1$, then for $\forall x \in \mathbb{R}^d$, and $\|x\|_2 \leq 1$, $\langle w, x \rangle + b \neq 0$. Assume that for some $x \in \mathbb{R}^d$, and $\|x\|_2 \leq 1$, $\langle w, x \rangle + b = 0$. Then according to

Page 3

### Visual Description
Text-only slide containing a problem description for the Perceptron algorithm and two sub-questions (a and b) with their respective solutions in red text.

---

## Page 4
### Content
Cauchy-Schwartz inequality, $|b| = |\langle w, x \rangle| \leq \|w\| \|x\| \leq 1$, which is contradictory with the condition in the problem.

(c) Using the arguments in (a) and (b), derive an upper bound on $b^*$.

**Answer:** Assume that $\|w\| = 1$. According to (a) and (b), it is necessary that the hyperplane either touches upon or intersects the hypersphere, which means there is at least one $x \in \mathbb{R}^d$, such that $\|x\| \leq 1$ and $\langle w, x \rangle + b = 0$. so that $|b| = |\langle w, x \rangle| \leq \|w\| \|x\| \leq 1$, where the first inequality stands due to Cauchy-Schwartz inequality.

[Learning objective: In the class, there were a lot of questions about the dependence of the bound on $R$ and $b^*$. This derivation helps answer those questions.]

Page 4

### Visual Description
Text-only slide continuing the solution from the previous page and providing the answer to sub-question (c) in red text.

---

## Page 5
### Content
### 2) Kernel methods

Consider the function $K : \mathbb{R}^d \times \mathbb{R}^d \to \mathbb{R}$ defined as
$$K(x, \tilde{x}) = \begin{cases} 2 & \text{if } x = \tilde{x} \\ -3 & \text{otherwise.} \end{cases}$$

Our goal is to show that the function $K$ is not a valid Kernel. To this end, recall Mercer’s theorem: A symmetric function $K : \mathcal{X} \times \mathcal{X} \to \mathbb{R}$ is a valid kernel if and only if for every integer $m \geq 1$ and every $z_1, \dots, z_m \in \mathcal{X}$, the Gram matrix $G \in \mathbb{R}^{m \times m}$ given by $G_{ij} = K(z_i, z_j)$ $\forall i, j$ is positive semidefinite. Note that an $m \times m$ matrix $M$ is PSD if and only if $\forall v \in \mathbb{R}^m, v^T M v \geq 0$.

Let us now apply Mercer’s theorem. Consider some arbitrary pair of vectors $x, \tilde{x} \in \mathbb{R}^d$ such that $x \neq \tilde{x}$. Then the Gram matrix equals $G := \begin{bmatrix} 2 & -3 \\ -3 & 2 \end{bmatrix}$. Letting $v = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$, it is easy to compute and show that $v^T G v < 0$.

Our objective in this question is to understand what happens under the hood in the ‘only if’ part of Mercer’s theorem. To this end, we will use the construction of $v$ and $G$ above to directly show the non-existence of any Hilbert space and mapping that can yield the function $K$. We will do so without actually using Mercer’s theorem.

To show this, we will first suppose that there does exist some Hilbert space $\mathcal{F}$ and mapping $\Psi : \mathbb{R}^d \to \mathcal{F}$ such that for any pair $x, \tilde{x} \in \mathbb{R}^d$, $K(x, \tilde{x}) = \langle \Psi(x), \Psi(\tilde{x}) \rangle$. Then, for any $x \neq \tilde{x} \in \mathbb{R}^d$, we have the following series of relations:
$$0 \leq \|\Psi(x) + \Psi(\tilde{x})\|^2$$
$$\vdots$$
?

Complete the rest of the argument.
[Learning objective: Get a better understanding of Kernels and Mercer’s theorem by getting your hands dirty with its intricacies (via a simple example).]

**Answer:**
$$0 \leq \|\Psi(x) + \Psi(\tilde{x})\|^2$$
$$= \langle \Psi(x) + \Psi(\tilde{x}), \Psi(x) + \Psi(\tilde{x}) \rangle$$
$$= \langle \Psi(x), \Psi(x) \rangle + \langle \Psi(x), \Psi(\tilde{x}) \rangle + \langle \Psi(\tilde{x}), \Psi(x) \rangle + \langle \Psi(\tilde{x}), \Psi(\tilde{x}) \rangle$$
$$= K(x, x) + K(x, \tilde{x}) + K(\tilde{x}, x) + K(\tilde{x}, \tilde{x})$$
$$= 2 - 3 - 3 + 2$$
$$= -2$$
This is a contradiction. Hence, such an $\mathcal{F}$ cannot exist.

Page 5

### Visual Description
Text-only slide presenting a problem on Kernel methods and its solution in red text. It includes mathematical definitions and a step-by-step derivation.

---

## Page 6
### Content
### 3) Empirical Risk Minimization with a Twist

Consider the realizable setting and the PAC learning framework for hypothesis class $\mathcal{H}$. Suppose that $|\mathcal{H}|$ is finite. Then recall the result for the sample complexity of this hypothesis class, in terms of $|\mathcal{H}|$, that we had derived in class: If $|\mathcal{H}|$ is finite then $\mathcal{H}$ is PAC learnable with sample complexity at most $\lceil \frac{\log(|\mathcal{H}|/\delta)}{\epsilon} \rceil$. Also recall that we had achieved this result by using the algorithm “ERM over $\mathcal{H}$”.

a) Consider some other hypothesis class $\mathcal{H}_1$ such that $|\mathcal{H}_1|$ is finite and $\mathcal{H}_1 \supseteq \mathcal{H}$. Then state whether the following statement is true or false, along with a justification (via proof or counter example): The algorithm which does ERM over $\mathcal{H}_1$ can also guarantee $(\epsilon, \delta)$-PAC learning for $\mathcal{H}$ as long as you have at least $\lceil \frac{\log(|\mathcal{H}_1|/\delta)}{\epsilon} \rceil$ samples.

**Answer: True.**
Since $|\mathcal{H}_1|$ is finite, we know it is $(\epsilon, \delta)$-PAC learnable as long as we have at least $\lceil \frac{\log(|\mathcal{H}_1|/\delta)}{\epsilon} \rceil$ samples. Now, consider any $h^* \in \mathcal{H}$. Since $\mathcal{H} \subseteq \mathcal{H}_1, h^* \in \mathcal{H}_1$. By PAC-learnability of $\mathcal{H}_1$, we know that ERM over $\mathcal{H}_1$ can find an $h$ s.t. $\mathbb{P}(R(h) > \epsilon) \leq \delta$ as long as it has the aforementioned number of samples. Since we have this for any $h^* \in \mathcal{H}$, ERM over $\mathcal{H}_1$ also guarantees $(\epsilon, \delta)$-PAC learning for $\mathcal{H}$ as long as we have at least $\lceil \frac{\log(|\mathcal{H}_1|/\delta)}{\epsilon} \rceil$ samples.

b) Consider some other hypothesis class $\mathcal{H}_2$ such that $|\mathcal{H}_2|$ is finite and $\mathcal{H}_2 \subseteq \mathcal{H}$. Then state whether the following statement is true or false, along with a justification (via proof or counter example): The algorithm which does ERM over $\mathcal{H}_2$ can also guarantee $(\epsilon, \delta)$-PAC learning for $\mathcal{H}$ as long as you have at least $\lceil \frac{\log(|\mathcal{H}_2|/\delta)}{\epsilon} \rceil$ samples.

[Learning objective: In the class, we have been considering ERM over the hypothesis class $\mathcal{H}$ from which $h^*$ is assumed to lie. But what if you end up doing ERM over a different hypothesis class? This question is aimed to understand that. In general, it is often insightful to ask such ‘what if’ questions :-)]

**Answer: False.**
Consider the case where $h^* \in \mathcal{H} \setminus \mathcal{H}_2$. Then ERM over $\mathcal{H}_2$ cannot guarantee we can get arbitrarily close to $h^*$ as the number of samples increase.
Example: For $\mathcal{Y} = \{-1, +1\}$, consider $\mathcal{H}$ that consists of two functions, one that always outputs $+1$, and the other than always outputs $-1$. Then, if $\mathcal{H}_2$ consists of just the former, its risk when $h^*$ is the latter is always 1, regardless of the number of samples. Hence, ERM over $\mathcal{H}_2$ cannot guarantee $(\epsilon, \delta)$-PAC learning for $\mathcal{H}$.

Page 6

### Visual Description
Text-only slide discussing Empirical Risk Minimization (ERM) in the context of PAC learning, with two sub-questions and their solutions in red.

---

## Page 7
### Content
### 4) VC dimension

Suppose $\mathcal{H}_1$ is a hypothesis class of finite size, i.e., $|\mathcal{H}_1| < \infty$. Suppose $\mathcal{H}_2$ is a hypothesis class of infinite size, i.e., $|\mathcal{H}_2| = \infty$. Then:

* Option 1: It must be that $VC(\mathcal{H}_1) = VC(\mathcal{H}_2)$
* Option 2: It must be that $VC(\mathcal{H}_1) \leq VC(\mathcal{H}_2)$, and we can have $VC(\mathcal{H}_1) < VC(\mathcal{H}_2)$
* Option 3: It must be that $VC(\mathcal{H}_1) \geq VC(\mathcal{H}_2)$, and we can have $VC(\mathcal{H}_1) > VC(\mathcal{H}_2)$
* Option 4: None of the above

Please indicate which option you think is correct. Most importantly, formally justify (with proofs or counter examples) your answer.

[Learning objective: This is another natural ‘what if’ question. What if one hypothesis class is finite and another is infinite – how can one compare their complexities?]

**Answer: Option 4.** If $\mathcal{H}_1$ is a finite set of rules that has VC dimension 3 (i.e. the rules can shatter three points), for example, $\mathcal{H}_1$ could be a function $\mathcal{X} \to \{0, 1\}^2$, where $\mathcal{X} = \{(0, 0), (0, 1), (1, 0), (1, 1)\}$, and $\forall x \in \mathcal{X}, h(x) = (\sum_{i \in I} x_i) \mod 2$, where $I \in \{\{1\}, \{2\}, \{1, 2\}\}$. Then $\mathcal{H}_2$ could be the set of all degree 5 polynomials which has VC dimension 6, so $VC(\mathcal{H}_2) > VC(\mathcal{H}_1)$. Alternatively, if $\mathcal{H}_2$ is the set of linear classifiers with degree 1, then $VC(\mathcal{H}_1) > VC(\mathcal{H}_2)$. Since both can be true, none of the first three options hold.

Page 7

### Visual Description
Text-only slide about VC dimension, presenting a multiple-choice question and its detailed justification in red text.

---

## Page 8
### Content
### 5) Agnostic PAC learning

Consider the i.i.d. assumption, the agnostic setting, and the 0-1 loss. Write down the definition of PAC learnability of a given hypothesis class $\mathcal{H}$.

[Learning objective: Straightforward question, ensuring you understand the basic definition of agnostic PAC learnability.]

**Answer:** A hypothesis class $\mathcal{H}$ is agnostically PAC learnable if there is a learning algorithm such that: for every $\epsilon > 0$ and $\delta > 0$, there exists a $n^*(\epsilon, \delta)$ such that for every distribution $D$ on $\mathcal{X} \times \mathcal{Y}$, running the algorithm on $n \geq n^*$ samples outputs hypothesis $h$ s.t. wp $1 - \delta$
$$R_D(h) \leq \min_{h' \in \mathcal{H}} R_D(h') + \epsilon$$

Page 8

### Visual Description
Text-only slide asking for the definition of Agnostic PAC learning, with the formal definition provided in red text.
