# previous-years-midterms-09-10715_CMU_Fall_2024_midterm_nosoln

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/previous-years-midterms-09-10715_CMU_Fall_2024_midterm_nosoln.pdf`
Duplicate equivalents: `previous-years-midterms-09-10715_CMU_Fall_2024_midterm_nosoln.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 14

## Page 1
### Content
# CMU 10-715 Fall 2024: Midterm Exam

**Name:**

**Andrew ID:**

### Here is a hitchhiker’s guide to this midterm:
* This is an 80 minute exam during the lecture time, from 2:00 PM to 3:20 PM.
* You are **NOT** allowed to refer to notes, homework solutions, the textbook, lecture videos or any other outside resources.
* You are **NOT** allowed to discuss the exam with anyone in the duration of the exam.
* We recommend taking a brief look at all questions first and then starting to answer them. You may find some questions easier than others.
* For each question, if not specified, assume the following:
    * Binary classification with $\mathcal{Y} = \{-1, 1\}$
    * $\mathcal{X} = \mathbb{R}^d$ for some positive integer $d$
    * i.i.d. data

### Distribution of Marks
| Question | Points | Score |
| :--- | :--- | :--- |
| **1** | 10 | |
| **2** | 7 | |
| **3** | 10 | |
| **4** | 17 | |
| **5** | 9 | |
| Total: | 53 | |

### Visual Description
The page contains the exam title, fields for Name and Andrew ID, a list of instructions/rules for the exam, and a table titled "Distribution of Marks" showing the point values for five questions and a total of 53 points.

---
## Page 2
### Content
## 1) Projections at the end of the universe

Recall that we define the projection of a point $x \in \mathbb{R}^d$ on set $S \subseteq \mathbb{R}^d$ as $\min_{v \in \mathbb{R}^d} ||x - v||_2$ subject to $v \in S$.

Now consider the set $S_+ = \{v \in \mathbb{R}^d \mid v_i \ge 0 \ \forall i \in [d]\}$. This is the set of vectors in $\mathbb{R}^d$ such that each coordinate of the vector is non-negative. This set is called the non-negative orthant (or the first quadrant when in two dimensions).

In many optimization problems, $S_+$ is the constraint set, and thus many algorithms require projection on $S_+$. Here are two candidate algorithms to compute the projection of a given point $x \in \mathbb{R}^d$ on the set $S_+ \subseteq \mathbb{R}^d$:

* **Algorithm 1:** For every $i \in [d]$, let $y_i = |x_i|$. Output $[y_1, \dots, y_d]$.
* **Algorithm 2:** For every $i \in [d]$, let $y_i = \max\{x_i, 0\}$. Output $[y_1, \dots, y_d]$.

(a) Prove or disprove: Algorithm 1 is guaranteed to correctly project any given point $x$ on $S_+$. [5 points]

### Visual Description
Text-only slide.

---
## Page 3
### Content
(b) Prove or disprove: Algorithm 2 is guaranteed to correctly project any given point $x$ on $S_+$. [5 points]

[Learning objective: Projection on to non-negative orthant is a very common task, and the objective here is to develop a better understanding of it.]

### Visual Description
Text-only slide.

---
## Page 4
### Content
## 2) Support Vector Machines

Consider $\mathcal{X} = \mathbb{R}^d$ for some integer $d \ge 1$ and $\mathcal{Y} = \{-1, 1\}$. Let $\{(x_1, y_1), \dots, (x_n, y_n)\}$ be the training dataset, where $(x_i, y_i) \in \mathcal{X} \times \mathcal{Y}$ for each $i \in [n]$. Further, assume the training data contains at least one point with label $-1$ and at least one point with label $1$.

Consider a function $g : \{-1, 1\} \to \mathbb{R}$ with $g(-1) = -1$ and $g(1) = 42$. Assume the training data is linearly separable, that is, there exists a hypothesis in the linear hypothesis class that perfectly separates the training points with label $-1$ from the training points with label $1$. Now consider the following variant of the Hard-SVM problem:

$$ \max_{w \in \mathbb{R}^d, b \in \mathbb{R}} \min_{i \in [n]} g(y_i)(w^\top x_i + b) \quad \text{subject to } ||w||_2 = 1. \quad (1) $$

Explain what this is doing, and in particular, how the outcomes will differ from standard Hard-SVM. You need to give a justification, but it is not necessary to give a proof. [7 points]

[Learning objective: To understand a useful yet simple variant of SVM.]

### Visual Description
Text-only slide.

---
## Page 5
### Content
## 3) PAC learning

Let $\mathcal{X} = \{-1, 1\}$ and $\mathcal{Y} = \{-1, 1\}$. Consider the hypothesis class

$$ \mathcal{H} = \{h : \mathcal{X} \to \mathcal{Y} \mid h(-1) \neq h(1)\}. $$

(a) Prove or give a counterexample for the statement: "The hypothesis class $\mathcal{H}$ can represent every function $\mathcal{X} \to \mathcal{Y}$." [5 points]

### Visual Description
Text-only slide.

---
## Page 6
### Content
(b) Consider the realizable setting with $h^* \in \mathcal{H}$. Consider some $\epsilon = \delta = \frac{1}{42}$. What is the $(\epsilon, \delta)$ PAC learning sample complexity for $\mathcal{H}$? Note that you need to establish the sample complexity only for the aforementioned choice of $\epsilon$ and $\delta$. [5 points]

[Learning objective: To get a better understanding of representation and PAC learning by working it out yourself from first principles in a simple setting.]

### Visual Description
Text-only slide.

---
## Page 7
### Content
## 4) Sample complexity lower bound

Consider $\mathcal{X} = \mathbb{R}^{42}$ and $\mathcal{Y} = \{-1, 1\}$. Consider a Hypothesis class $\mathcal{H}$ with VC dimension at least $v \in \mathbb{Z}_{\ge 1}$. Consider the PAC learning framework under the realizable setting, and the 0-1 loss. In this question, we will prove a lower bound on the sample complexity. *Don't panic*, you don't have to do it all by yourself. The following subparts will gradually lead you to a proof.

(a) We claim that there is some $\mathcal{J} \subseteq \mathcal{H}$ and $x_1, x_2, \dots, x_v \in \mathcal{X}$ such that $|\mathcal{J}| = 2^v$ and $\{(h(x_1), \dots, h(x_v)) \mid h \in \mathcal{J}\} = \{-1, 1\}^v$. Why is this claim true? [3 points]

### Visual Description
Text-only slide.

---
## Page 8
### Content
(b) Consider some values of $(\epsilon, \delta)$ and $n$. Suppose the distribution $\mathcal{D}$ from which the training points and test point are drawn is the uniform distribution on $x_1, x_2, \dots, x_v$. And suppose the true hypothesis $h^*$ is chosen uniformly at random from $\mathcal{J}$. We claim that if one can show inability to $(\epsilon, \delta)$-PAC learn under this setting with $n$ samples, then it implies a lower bound of $n$ on the sample complexity of $(\epsilon, \delta)$-PAC learning of the hypothesis class $\mathcal{H}$. Why is this claim true? [3 points]

### Visual Description
Text-only slide.
## Page 9
### Content
(c) Let $b_n$ be a positive integer (dependent on $n$) such that given $n$ samples chosen uniformly at random with replacement from a collection of $v$ items:
$$\mathbb{P}(\text{there are at least } b_n \text{ points which are never sampled}) \ge 0.1.$$
Let us now condition on the event that there are at least $b_n$ points from $(x_1, \dots, x_v)$ that are not seen in the training data. Give a (simple) lower bound, in terms of $v, n$ and $b_n$, on the probability that the test point is not seen in the training data. [3 points]

Page 9
### Visual Description
Text-only slide.

---
## Page 10
### Content
(d) Let us now condition on the event that there are at least $b_n$ points from $(x_1, \dots, x_v)$ that are not seen in the training data and that the test point is among those not seen in the training data. Also recall the setting of the problem from part (b). Now, for any hypothesis that was chosen by the algorithm based on the training data, what is the probability of error on the test point? [4 points]

Page 10
### Visual Description
Text-only slide.

---
## Page 11
### Content
(e) Put these together to make a claim of the form “If one has fewer than $n$ samples, then it is not possible to $(\epsilon =?, \delta =?)$-PAC learn the hypothesis class $\mathcal{H}$.” What would be the values of $\epsilon$ and $\delta$ based on your calculations above? [4 points]

[Learning objective: To learn an approach towards negative PAC learning results.]

Page 11
### Visual Description
Text-only slide.

---
## Page 12
### Content
5) Agnostic PAC learnability

Consider $\mathcal{X} = \mathbb{R}^{42}, \mathcal{Y} = \{-1, 1\}$ and the i.i.d. assumption. Three students – Arthur Dent, Ford Perfect, and Tricia McMillan – were asked to write down the definition of agnostic PAC learnability. The three subparts of this question below list the definitions they provided. Unfortunately, each of them gave a definition that is **different** from the standard definition (that we studied in class). The aspect that is different from the standard definition is highlighted in bolded text.

For each subpart, explain why the provided definition is problematic, that is, describe the issues or challenges one would face when attempting to apply the definition, or why the definition may not be meaningful.

(a) *Arthur Dent’s definition*: A hypothesis class $\mathcal{H}$ is agnostically PAC learnable if **for every distribution $D$ on $\mathcal{X} \times \mathcal{Y}$**, there is a learning algorithm such that for every $\epsilon > 0, \delta > 0$, there exists some positive integer $n^*(\epsilon, \delta)$ such that running the algorithm on $n \ge n^*(\epsilon, \delta)$ samples from $D$ outputs $h$ such that
$$R_{(D)}(h) \le \min_{h' \in \mathcal{H}} R_{(D)}(h') + \epsilon$$
with probability at least $1 - \delta$. [3 points]

Page 12
### Visual Description
Text-only slide.

---
## Page 13
### Content
(b) *Ford Perfect’s definition*: A hypothesis class $\mathcal{H}$ is agnostically PAC learnable if there is a learning algorithm such that for every $\epsilon > 0, \delta > 0$, there exists some positive integer $n^*(\epsilon, \delta)$ such that for every distribution $D$ on $\mathcal{X} \times \mathcal{Y}$, running the algorithm on $n \ge n^*(\epsilon, \delta)$ samples from $D$ outputs $h$ such that
$$R_{(D)}(h) \le \boldsymbol{\epsilon}$$
with probability at least $1 - \delta$. [3 points]

Page 13
### Visual Description
Text-only slide.

---
## Page 14
### Content
(c) *Tricia McMillan’s definition*: A hypothesis class $\mathcal{H}$ is agnostically PAC learnable if there is a learning algorithm such that for every $\epsilon > 0, \delta > 0$, there exists some positive integer $n^*(\epsilon, \delta)$ such that **for every distribution $D_1$ on $\mathcal{X}$ and every distribution $D_2$ on $\mathcal{Y}$**, running the algorithm on $n \ge n^*(\epsilon, \delta)$ samples from $D_1 \times D_2$ outputs $h$ such that
$$R_{(D_1 \times D_2)}(h) \le \min_{h' \in \mathcal{H}} R_{(D_1 \times D_2)}(h') + \epsilon$$
with probability at least $1 - \delta$. (Note that sampling from $D_1 \times D_2$ means that $x$ is drawn from $D_1$ and $y$ is independently drawn from $D_2$.) [3 points]

[Learning objective: To thoroughly understand the PAC learning formulation by exploring other potential formulations.]

Page 14
### Visual Description
Text-only slide.

---
