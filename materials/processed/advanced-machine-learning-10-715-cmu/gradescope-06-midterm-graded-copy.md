# gradescope-06-midterm-graded-copy

Source: `materials/archive/advanced-machine-learning-10-715-cmu/gradescope-graded-copies/gradescope-06-midterm-graded-copy.pdf`
Duplicate equivalents: `gradescope-06-midterm-graded-copy.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `MIXED`
Pages: 25

## Page 1
### Content
**Midterm Graded**
**Student:** Saahith Janapati
**Total Points:** 49.5 / 80 pts

**Question 1**
**SVM and Kernel methods** (20 / 20 pts)

**1.1 1.a. Kernel Function** (5 / 5 pts)
*   **Correct** ($-0$ pts)
    The Kernel function $K$ is given by $K(x, \hat{x}) = \langle \Psi(x), \Psi(\hat{x}) \rangle = \sum_{i=0}^k x^i \hat{x}^i$.
*   **Incorrect** ($-5$ pts)
*   **Writes out dot product, but does not take sum** ($-2.5$ pts)

**1.2 1.b. Valid Kernel** (6 / 6 pts)
*   **Correct** ($-0$ pts)
    1) Yes, the kernel is valid because it is a valid inner product in some feature space.
    2) Yes, the kernel is valid because for every integer $m \ge 1$ and every $z_1, \dots, z_m \in \mathbb{R}$, the Gram matrix $G \in \mathbb{R}^{m \times m}$ given by $G_{ij} = K(z_i, z_j) \forall i, j$ is **symmetric** and **positive semidefinite**.
    Symmetry: $K(x, y) = K(y, x)$ for all $x, y \in \mathbb{R}$ is true because an inner product is symmetric.
    Positive semidefiniteness: Let $\Phi = [\Psi(z_1) \ \Psi(z_2) \ \dots \ \Psi(z_m)]^\top$. Then $G = \Phi \Phi^\top$ and $v^\top G v = v^\top \Phi \Phi^\top v = (v^\top \Phi)^\top (v^\top \Phi) = \|v^\top \Phi\|^2 \ge 0$.
*   **Only states definition of kernel validity through PSD** ($-5$ pts)
*   **No justification** ($-6$ pts)
*   **Incorrect** ($-6$ pts)

**1.3 1.c. Feasibility** (9 / 9 pts)
*   **Correct** ($-0$ pts)
    Yes, the Hard SVM optimization problem is feasible when the data is linearly separable. If $h(x) = \text{sign}(w^\top x + b)$ is a linear hypothesis that separates the training data in the original space $\mathcal{X}$, then $h'(x) = \text{sign}(\Psi(x)^\top [0 \ w \ 0 \ \dots \ 0] + b) = \text{sign}(wx + b)$ is a linear hypothesis that separates the training data in the feature space $\mathbb{R}^{k+1}$.
*   **Incorrect or Insufficient Explanation** ($-9$ pts)
*   **Correct explanation, but a lack of formality** ($-4.5$ pts)
*   **Correctly dualizes the constraints** ($-0$ pts)

### Visual Description
A graded exam page showing Question 1 with three sub-parts (1.1, 1.2, 1.3). Each part shows the student's score, a checkmark for the correct answer, and a list of possible point deductions. The top of the page displays the student's name and total score.

---

## Page 2
### Content
**Question 2**
**PAC learning** (0 / 7 pts)

*   **Correct** ($-0$ pts)
    i. Decrease or remain constant if $\epsilon$ increases and decrease or remain constant if $\delta$ increases. Assume for a given $\epsilon$ and $\delta$, the sample complexity is $n^*(\epsilon, \delta)$, which implies that $n^*(\epsilon, \delta)$ is the smallest such that for all $n \ge n^*(\epsilon, \delta)$, $P(h_n(x) \neq h^*(x)) \le \epsilon$ with probability at least $1 - \delta$ over the training set. For any $\epsilon' > \epsilon$ and $\delta' > \delta$, it is also true that $P(h_n(x) \neq h^*(x)) \le \epsilon'$ with probability at least $1 - \delta'$ over the training set, and so $n^*(\epsilon', \delta') \le n^*(\epsilon, \delta)$.
*   **Very very minor error (see comments)** ($-0.25$ pts)
*   **Very minor error (see comments)** ($-0.5$ pts)
*   **Minor error (see comments)** ($-1.75$ pts)
*   **Error (see comments)** ($-3.5$ pts)
*   **Major error (see comments)** ($-5.25$ pts)
*   **Incorrect answer** ($-7$ pts)
*   **See correct answer in rubric.**

### Visual Description
A graded exam page for Question 2. It shows the correct answer in a box, followed by a list of point deductions. A checkmark is next to the "-7 pts Incorrect answer" option, indicating the student's grade for this question.

---

## Page 3
### Content
**Question 3**
**VC dimension** (15 / 24 pts)

**3.1 3.a.** (0 / 4 pts)
*   **Correct** ($-0$ pts)
    The VC dimension is $v = 2n$; this implies that there is a set of $v = 2n$ points $z_1, \dots, z_{2n}$ in $\mathcal{X}$ that is shattered by $\mathcal{H}$.
*   **No attempt** ($-4$ pts)

**3.2 3.b.** (5 / 5 pts)
*   **Correct** ($-0$ pts)
    By the definition of shattering, there exists $z_1, z_2, \dots, z_{2n}$, such that for any $y \in \{-1, 1\}^{2n}$, there exists some $h \in \mathcal{H}$ where $(h(z_1), h(z_2), \dots, h(z_{2n})) = y$.
    For each $y$, let $h_y$ be the corresponding hypothesis.
    Then let $\mathcal{H}_1 = \{h_y \mid y \in \{-1, 1\}^{2n}\}$ solves the problem.
*   **Missing definition of $\mathcal{H}_1 = \{h_y \mid y \in \{-1, 1\}^{2n}\}$** ($-1$ pt)

**3.3 3.c.** (5 / 5 pts)
*   **Correct** ($-0$ pts)
    Let $T = \{x_1, x_2, \dots, x_n\}$ denote the training set (note that $T$ is a random variable). Since $|T| = n$, we have that for any possible draw of $T$,
    $P(z_{\text{test}} \in T \mid T) = \sum_{i=1}^n P(z_{\text{test}} = x_i)$ by the law of total probability
    $\le \sum_{i=1}^n \frac{1}{2n}$ since $P(z_{\text{test}} = x)$ is either $1/(2n)$ or $0$ for any $x \in \mathcal{X}$
    $= 1/2$,
    $P(z_{\text{test}} \in T) = \sum_{T \in \mathcal{T}} P(z_{\text{test}} \in T \mid T) P(T)$, where $\mathcal{T}$ is the set of all possible training sets
    $\le \sum_{T \in \mathcal{T}} \frac{1}{2} P(T)$
    $= \frac{1}{2} \sum_{T \in \mathcal{T}} P(T)$
    $= \frac{1}{2}$.
    This gives us that $P(z_{\text{test}} \notin T) \ge 1/2$.
*   **Error in sign (we required $\ge$) or missing justification for sign** ($-1$ pt)
*   **Incomplete solution** ($-2$ pts)
*   **Majorly incomplete solution** ($-4$ pts)

### Visual Description
A graded exam page for Question 3, parts 3.1, 3.2, and 3.3. Each part shows the correct answer and point deductions. Part 3.1 has a checkmark next to "No attempt", while parts 3.2 and 3.3 have checkmarks next to "Correct".

---

## Page 4
### Content
**3.4 3.d.** (5 / 5 pts)
*   **Correct** ($-0$ pts)
    Since $h^*$ is chosen uniformly at random from $\mathcal{H}_1$, we have that for any point $x \in T$ and $z \notin T$, $h^*(x)$ is independent of $h^*(z)$. $g_T$ can only depend on the training dataset $T$, and thus for any unseen point $z \notin T$, $g_T$ and $h^*$ are independent. For conciseness, let $\mathbb{Q}(\cdot) = \mathbb{P}_{h^* \sim \text{Unif}\{\mathcal{H}_1\}, z_{\text{test}} \sim D}(\cdot \mid z_{\text{test}} \notin T)$. Then,
    $\mathbb{Q}(g_T(z_{\text{test}}) \neq h^*(z_{\text{test}})) = \mathbb{Q}(g_T(z_{\text{test}}) = 1 \wedge h^*(z_{\text{test}}) = -1) + \mathbb{Q}(g_T(z_{\text{test}}) = -1 \wedge h^*(z_{\text{test}}) = 1)$
    $= \mathbb{Q}(g_T(z_{\text{test}}) = 1)\mathbb{Q}(h^*(z_{\text{test}}) = -1) + \mathbb{Q}(g_T(z_{\text{test}}) = -1)\mathbb{Q}(h^*(z_{\text{test}}) = 1)$
    $= \frac{1}{2}\mathbb{Q}(g_T(z_{\text{test}}) = 1) + \frac{1}{2}(1 - \mathbb{Q}(g_T(z_{\text{test}}) = 1))$
    $= 0.5$.
*   **Incomplete solution** ($-1$ pt)
*   **Majorly incomplete solution** ($-3$ pts)
*   **No attempt** ($-5$ pts)

**3.5 3.e.** (0 / 5 pts)
*   **Correct** ($-0$ pts)
    First, we have that in expectation over $h^* \sim \text{Unif}\{\mathcal{H}_1\}$ and $z \sim D$ for the $D$ above,
    $\mathbb{P}_{h^* \sim \mathcal{H}_1, z \sim D}(g_T(z) \neq h^*(z)) \ge \mathbb{P}_{h^* \sim \mathcal{H}_1, z \sim D}(g_T(z) \neq h^*(z) \mid z \notin T) \mathbb{P}_{z \sim D}(z \notin T)$
    $= 0.5 \cdot \mathbb{P}_{h^* \sim \mathcal{H}_1, z \sim D}(g_T(z) \neq h^*(z) \mid z \notin T)$ (by part (c))
    $= 0.5 \cdot 0.5$ (by part (d))
    $= 0.25$.
    Therefore, there must exist at least one $h^* \in \mathcal{H}_1$ such that $\mathbb{P}_{h^* \sim \mathcal{H}_1, z \sim D}(g_T(z) \neq h^*(z)) \ge 0.25$.
*   **Error in sign (required $\ge$)** ($-1$ pt)
*   **Incorrect final answer** ($-3$ pts)
*   **No attempt** ($-5$ pts)

### Visual Description
A graded exam page for Question 3, parts 3.4 and 3.5. Part 3.4 shows a correct answer with a checkmark. Part 3.5 shows the correct answer but has a checkmark next to "No attempt", resulting in 0 points.

---

## Page 5
### Content
**Question 4**
**Agnostic learning** (0 / 7 pts)

*   **Correct** ($-0$ pts)
    The problem formulation in the agnostic case demands more than in the realizable case. Specifically: (a) in the agnostic case, the learning algorithm must work for all distributions $D$ on $\mathcal{X} \times \mathcal{Y}$, whereas the realizable case needs to consider only a restricted subset of such distributions (one where, for some $h^* \in \mathcal{H}$, $P(y \mid x) = \mathbf{1}\{h^*(x) = y\} \forall (x, y) \in \mathcal{X} \times \mathcal{Y}$); and furthermore (b) if we consider the requirement in the agnostic case for the special case of $D$ satisfying for some $h^* \in \mathcal{H}$, $P(y \mid x) = \mathbf{1}\{h^*(x) = y\} \forall (x, y) \in \mathcal{X} \times \mathcal{Y}$, then the requirement is identical to the requirement in the realizable case. Consequently, if a learning algorithm ensures PAC learnability with $a^*$ samples in the agnostic case, then it also ensures PAC learnability with $a^*$ samples in the realizable case. Hence we have $r^* \le a^*$.
*   **Very very minor error (see comments)** ($-0.5$ pts)
*   **Very minor error (see comments)** ($-1$ pt)
*   **Minor error (see comments)** ($-1.75$ pts)
*   **Error (see comments)** ($-3.5$ pts)
*   **Major error (see comments)** ($-5.25$ pts)
*   **Incorrect** ($-7$ pts)
*   **Incorrect answer but some correct reasoning.** ($-6$ pts)
*   **Please see correct answer in rubric.**

### Visual Description
A graded exam page for Question 4. It shows the correct answer and a list of point deductions. A checkmark is next to the "-7 pts Incorrect" option.

---

## Page 6
### Content
**Question 5**
**Linear-like hypothesis classes** (14.5 / 22 pts)

**5.1 5.a.** (6.75 / 7 pts)
*   **Correct** ($-0$ pts)
    No, if $\sigma$ is non-decreasing, then $\sigma$ can either be constant, in which case the VC dimension is $0$, or it can have the form $x \mapsto \text{sign}(x - c)$, in which case the neural network has the form $x \mapsto \text{sign}(w^\top x + b - c) = \text{sign}(w^\top x + (b - c))$ which is equivalent to the linear hypothesis class with VC dimension $d + 1$.
*   **Missing case where $\sigma$ is constant** ($-0.25$ pts)
*   **Very minor error (see notes)** ($-0.5$ pts)
*   **Minor error (see notes)** ($-1.75$ pts)
*   **Error (see notes)** ($-3.5$ pts)
*   **Major error (see notes)** ($-5.25$ pts)
*   **Incorrect or missing (see notes)** ($-7$ pts)

**5.2 5.b.** (4 / 4 pts)
*   **Correct** ($-0$ pts)
    $d + 1$. See above.
*   **Minor mistake** ($-1$ pt)
*   **Incorrect or missing** ($-4$ pts)

### Visual Description
A graded exam page for Question 5, parts 5.1 and 5.2. Part 5.1 has a checkmark next to "Missing case where $\sigma$ is constant", resulting in a small deduction. Part 5.2 is marked as correct.

---

## Page 7
### Content
**5.3 5.c.** (1.75 / 7 pts)
*   **Correct** ($-0$ pts)
    Yes, and in fact we will show that the VC dimension can in fact even be infinite.
    Let us prove this by contradiction. Suppose (for the sake of contradiction) that the VC dimension of $\mathcal{H}_\sigma$ is at most $v$ for all functions $\sigma$, where $v$ is some finite positive integer. Now we will construct a set of $v + 1$ points and a $\sigma$ which are shattered by the hypothesis class $\mathcal{H}_\sigma$.
    Let $\{x_j\}_{j=1}^{v+1}$ be a set of $v + 1$ points in $\mathbb{R}^d$ such that the first coordinate of $x_j$ is $1/j$. Now, consider the set of all possible labelings of these $v + 1$ points, $\mathcal{Z} = \{-1, 1\}^{v+1}$. Let us enumerate each element in $\mathcal{Z}$ as $z^{(1)}, z^{(2)}, \dots, z^{(2^{v+1})} \in \{-1, 1\}^{v+1}$.
    We will construct $\sigma$ as follows:
    $\sigma(k + 1/j) = z_j^{(k)} \forall k \in [2^{v+1}], j \in [v+1]$
    For completeness, will define $\sigma(x) = 1$ for all points $x$ which are not of the form $k + 1/j$ for some $k \in [2^{v+1}]$ and $j \in [v+1]$.
    Let $w_1 = [1 \ 0 \ \dots \ 0]$ denote a projection vector onto the first coordinate. For any labeling $z^{(k)}$, the hypothesis $h_{z^{(k)}}(x) = \sigma(w_1^\top x + k)$ has the property that $h_{z^{(k)}}(x_j) = z_j^{(k)}$ for all $j \in [v+1]$. Therefore, our set of hypotheses $\mathcal{H}_\sigma = \{\sigma(w^\top x + b) \mid w \in \mathbb{R}^d, b \in \mathbb{R}\}$ shatters $\{x_j\}_{j=1}^{v+1}$, a contradiction. Thus, the VC dimension must be greater than $v$ for all $v \in \mathbb{N}$.
*   **Minor error** ($-1
## Page 9
### Content
**CMU 10-715 Fall 2025: Midterm Exam**

**Name:** Saahith Janapati
**Andrew ID:** sjanapat

**Here is a hitchhiker's guide to this midterm:**
* This is an 80 minute exam during the lecture time, from 2:00 PM to 3:20 PM.
* You are **NOT** allowed to refer to notes, homework solutions, the textbook, lecture videos or any other outside resources.
* You are **NOT** allowed to discuss the exam with anyone in the duration of the exam.
* We suggest taking a brief look at all questions first and then starting to answer them. You may find some questions easier than others.
* For each question, if not specified, assume the following:
    - Binary classification with $\mathcal{Y} = \{-1, 1\}$
    - i.i.d. assumption

**Distribution of Marks**
| Question | Points | Score |
| :---: | :---: | :---: |
| 1 | 20 | |
| 2 | 7 | |
| 3 | 24 | |
| 4 | 7 | |
| 5 | 22 | |
| **Total:** | **80** | |

### Visual Description
The cover page of a midterm exam. It contains the course title, fields for name and Andrew ID (filled in by hand), a list of exam rules, and a grading table.

---
## Page 10
### Content
**1) SVM and Kernel methods**

Let $\mathcal{X} = \mathbb{R}, \mathcal{Y} = \{-1, 1\}$. Consider some integer $k \ge 1$. Define the function $\Psi : \mathbb{R} \to \mathbb{R}^{k+1}$ as $\Psi(x) = [1, x, x^2, \dots, x^k]$.

a) For this mapping $\Psi$, what is the associated Kernel function $K$? [5 points]

$\langle \Psi(x), \Psi(\tilde{x}) \rangle =$
$\langle [1, x, x^2, \dots, x^k], [1, \tilde{x}, \tilde{x}^2, \dots, \tilde{x}^k] \rangle =$

$$K(x, \tilde{x}) = \sum_{i=0}^k x^i \tilde{x}^i$$

Page 2
### Visual Description
The page contains the first part of Question 1. The student has handwritten the derivation of the kernel function as the inner product of the feature mappings, resulting in a summation formula which is boxed.

---
## Page 11
### Content
b) Is this a valid kernel? **Justify your answer.** (Recall that a Kernel is valid if there is an underlying mapping such that the Kernel is simply an inner product of those mappings.) [6 points]

Yes, we can express the inner product as $\langle \Psi(x), \Psi(\tilde{x}) \rangle =$
$\langle 1, x, x^2, \dots, x^k \rangle \langle 1, \tilde{x}, \tilde{x}^2, \dots, \tilde{x}^k \rangle = K(x, \tilde{x}) = \sum_{i=0}^k x^i \tilde{x}^i$, so it is a valid Kernel.

Page 3
### Visual Description
The page contains Question 1b. The student has handwritten a justification stating that since the kernel can be expressed as an inner product of the given mapping, it is valid.

---
## Page 12
### Content
c) Recall the SVM optimization problem ("hard SVM") we discussed in class:
$$(w_0, b_0) = \arg \min_{w, b \in \mathbb{R}^d, b \in \mathbb{R}} \frac{1}{2} \|w\|_2^2$$
$$\text{s.t. } y_i(w^T x_i + b) \ge 1 \quad \forall i \in [n],$$
where the output is defined to be $\hat{w} = \frac{w_0}{\|w_0\|_2}$ and $\hat{b} = \frac{b_0}{\|w_0\|_2}$.
Now, suppose one kernelizes this SVM and uses the kernel from part (a) of this question. Further, suppose the training data is linearly separable in the original space $\mathcal{X}$. Then is the resulting optimization problem feasible? Feasibility means that there exists a solution that satisfies all the constraints. **Please make sure to formally justify your answer.** [9 points]

Yes. Note that information from the original term $x$ still lies within the vector (at the second element of $\Psi(x) = [1, x, \dots]$). So, we can set the second term in the weight vector $w$ to the same value as $w^*$ and $b$ to $b^*$, where $w^*$ and $b^*$ were the values that linearly separated the data in the original space $\mathcal{X}$, and set all other entries of the weight vector to zero. This should yield the same outputs as the original separator, and also satisfy the constraints, so we know a solution exists.

Page 4
### Visual Description
The page contains Question 1c. The student has handwritten a justification for why the kernelized SVM problem is feasible if the original problem was linearly separable, by constructing a weight vector that uses the original linear separator's parameters.

---
## Page 13
### Content
**2) PAC learning**

$n^*$ guarantees that:
$$P(R(h) \ge \epsilon) \le \delta$$
$$P(R(h) \le \epsilon) \ge 1 - \delta$$

In the PAC learning formulation (realizable setting), the sample complexity $n^*$ should [select one option and most importantly, rigorously justify your answer]: [7 points]

(i) Decrease or remain constant if $\epsilon$ increases, and decrease or remain constant if $\delta$ increases.
(ii) Increase or remain constant if $\epsilon$ increases, and increase or remain constant if $\delta$ increases.
(iii) **Decrease or remain constant if $\epsilon$ increases, and increase or remain constant if $\delta$ increases.** (Circled)
(iv) Increase or remain constant if $\epsilon$ increases, and decrease or remain constant if $\delta$ increases.
(v) None of the above

**Justification:**
iii
If $\epsilon$ increases, we are being less strict on the allowed error that our hypothesis can have, so the required number of samples need should either drop or be constant (we can do a worse job). $\rightarrow$ decrease

If $\delta$ increases, we are increasing the required strictness of our output hypothesis, to be more likely to have error lower than $\epsilon$, so we need more samples (or save #) to achieve this. $\rightarrow$ increase

Page 5
### Visual Description
The page contains Question 2 about PAC learning. The student has circled option (iii) and provided a handwritten justification for how sample complexity changes with respect to $\epsilon$ and $\delta$. There are handwritten notes at the top defining the guarantee of $n^*$.

---
## Page 14
### Content
**3) VC dimension**

Consider binary classification with $\mathcal{Y} = \{-1, 1\}$, some $\mathcal{X}$, and a hypothesis class $\mathcal{H}$. Consider the realizable setting. Let $v$ denote the **VC dimension of $\mathcal{H}$** and assume that $v$ is finite. Consider any learning algorithm, whose output we will denote as $g_T : \mathcal{X} \to \{-1, 1\}$, which depends on a training dataset $T$. Let $n$ denote the number of training points in the training dataset $T$. We will show that there is some distribution $D$ on $\mathcal{X}$ and some $h^* \in \mathcal{H}$ such that if the training set $T$ has $n = \lfloor \frac{v}{2} \rfloor$ training points drawn i.i.d. from $D$, then the learning algorithm incurs a risk $\mathbb{P}_{z \sim D}(g_T(z) \neq h^*(z)) \ge 0.25$. To prove this, answer the following sub-questions.

$v = VC(\mathcal{H})$
$\mathcal{H}$ can obtain any set of labellings on a group of at most $v$ points.

a) Justify the following statement: there exists a set of $2n$ points, $z_1, \dots, z_{2n} \in \mathcal{X}$ that is shattered by $\mathcal{H}$. [4 points]

We are in a realizable setting, so [unreadable]

Page 6
### Visual Description
The page introduces Question 3 on VC dimension. It provides the setup for a proof about risk bounds. The student has added handwritten notes about the definition of VC dimension. Part (a) is at the bottom with a partially unreadable handwritten response.

---
## Page 15
### Content
b) Justify the following statement: there exists $\mathcal{H}_1 \subseteq \mathcal{H}$ such that $|\mathcal{H}_1| = 2^{2n}$ and $\{(h(z_1), h(z_2), \dots, h(z_{2n})) \mid h \in \mathcal{H}_1\} = \{-1, 1\}^{2n}$. [5 points]

By part (a) we know there exists a set of $2n$ points that is shattered by $\mathcal{H}$. This implies that $|\mathcal{H}| \ge 2^{2n}$ (which is the number of possible labellings of a set of size $2n$). We also know that the projection of Hypothesis class $\mathcal{H}$ onto the set $z_1, \dots, z_{2n}$ must cover all the possible labellings. So, there must be some subset $\mathcal{H}_1 \subseteq \mathcal{H}$ s.th. $|\mathcal{H}_1| = 2^{2n}$ and $\{(h(z_1), h(z_2), \dots, h(z_{2n})) \mid h \in \mathcal{H}_1\} = \{-1, 1\}^{2n}$. We can construct this set by picking one hypothesis that achieves the labelling for every possible labelling.

Page 7
### Visual Description
The page contains Question 3b. The student has provided a handwritten justification based on the definition of shattering and the existence of a subset of hypotheses that covers all possible labelings for the $2n$ points.

---
## Page 16
### Content
c) Let $D$ be the uniform distribution over $\{z_1, \dots, z_{2n}\}$ and let a test point $z_{test}$ be drawn independently from $D$. Justify the statement: there is at least a 50% chance that the $z_{test}$ is not in the training set, i.e., $\mathbb{P}(z_{test} \notin T) \ge 0.5$. [5 points]

We know the training set has $n$ points. So, at most, $\{z_1, \dots, z_{2n}\}$ has $n$ points from training set. So, in this case there is $\frac{n}{2n} = \frac{1}{2}$ chance that a randomly selected point $z_i$ is not in training. In other cases, $\{z_1, \dots, z_{2n}\}$ has fewer than $n$ points from training, so our prob that we select non-train will be higher than $\frac{n}{2n}$.

So, $P(z_{test} \notin T) \ge 0.5$

Page 8
### Visual Description
The page contains Question 3c. The student has provided a handwritten justification using a counting argument to show that the probability of a test point not being
## Page 17
### Content
d) Let us choose $h^*$ in a stochastic fashion: let $h^*$ be chosen uniformly at random from $\mathcal{H}_1$. Justify the statement: When the test point $z_{test}$ is not in the training data, $g_T$ makes an error with probability 0.5, i.e., $\mathbb{P}_{h^* \sim \text{Unif}(\mathcal{H}_1), z_{test} \sim D}(g_T(z_{test}) \neq h^*(z_{test}) \mid z_{test} \notin T) = 0.5$. [5 points]

By our defn. of $\mathcal{H}_1$, $\frac{1}{2}|\mathcal{H}_1|$ will label $z_{test}$ as 1 and $\frac{1}{2}|\mathcal{H}_1|$ will label $z_{test}$ as -1. Since $z_{test}$ is drawn independently and $D$ is uniform, there is $\frac{1}{2}$ Prob that $g_T(z_{test}) = 1$ and $\frac{1}{2}$ prob that $g_T(z_{test}) = -1$. So, the cases where $g_T(z_{test}) \neq h^*(z_{test})$ under our conditions are when
- $h^*(z_{test}) = 1$ and $g_T(z_{test}) = -1$ — 1/4 prob
- $h^*(z_{test}) = -1$ and $g_T(z_{test}) = 1$ — 1/4 prob

giving total prob. of $\frac{1}{2}$.

### Visual Description
Handwritten text on a printed exam page. The handwritten text provides a justification for the probability statement given in the question. At the bottom, it says "Page 9".

---
## Page 18
### Content
e) Using parts (a)–(d), complete the proof of the following statement: There is some distribution $D$ on $\mathcal{X}$ and some $h^* \in \mathcal{H}$ such that the learning algorithm $g_T$ incurs a risk $\mathbb{P}_{z \sim D}(g_T(z) \neq h^*(z)) \geq 0.25$. [5 points]

### Visual Description
Text-only slide. This is a printed exam question with no handwritten answer provided on this page. At the bottom, it says "Page 10".

---
## Page 19
### Content
4) Agnostic learning

Consider some hypothesis class $\mathcal{H}$ with finite VC dimension. Consider some $(\epsilon, \delta)$. Let us denote the sample complexity of learning $\mathcal{H}$ in the realizable setting as $r^*$ and in the agnostic setting as $a^*$ (both of which will be functions of $\epsilon, \delta$ and $\mathcal{H}$ itself). Then is (i) $r^* \leq a^*$ or (ii) $r^* \geq a^*$ or (iii) none of the above? Importantly, justify your answer. [7 points]

Agnostic implies PAC
Agnostic is harder than PAC

$r^* \geq a^*$ because in realizable setting, we need to provide a hypothesis that takes within $\epsilon$ of 0 error with prob. $\delta$, whereas in agnostic setting, we need to obtain within $\epsilon$ of $R(h^*)$, where $R(h^*)$ is the inf. of penalty/loss. $0 \leq R(h^*)$ (because penalty $\geq 0$), so $r^*$ will require $\geq$ # of samples.

### Visual Description
Handwritten text on a printed exam page. The student has circled "finite VC dimension" and "realizable setting as $r^*$ and in the agnostic setting as $a^*$". The handwritten answer argues that $r^* \geq a^*$. At the bottom, it says "Page 11".

---
## Page 20
### Content
VC dim = largest number of points where we can shatter

5) Linear-like hypothesis classes

Consider $\mathcal{X} = \mathbb{R}^d$ and $\mathcal{Y} = \{-1, 1\}$. Consider the hypothesis class of "linear-like" functions parameterized by $(w, b) \in \mathbb{R}^d \times \mathbb{R}$ with an activation function $\sigma : \mathbb{R} \rightarrow \{-1, 1\}$:
$$\mathcal{H}_\sigma = \{ \sigma(w^T x + b) \mid w \in \mathbb{R}^d, b \in \mathbb{R} \}$$
Note that if $\sigma$ is the sign function, then $\mathcal{H}_\sigma$ is simply the linear hypothesis class whose VC dimension is $d + 1$. In this problem, we will investigate how different activation functions $\sigma$ affect the VC dimension of $\mathcal{H}_\sigma$.

a) If $\sigma : \mathbb{R} \rightarrow \{-1, 1\}$ can be any non-decreasing function, then can the VC dimension of hypothesis class $\mathcal{H}_\sigma$ ever be greater than $d + 1$? Why or why not? [7 points]

The reason VC dim w/ sign function = $d+1$ is that we are creating a $d$ dimensional hyperplane.
![Diagram showing a line with points at (-1,0), (0,1), and (1,0)]

No. A non-decreasing function that always outputs $\{-1, 1\}$ is just the sign function which has been shifted. This is essentially the same as adjusting the bias term while keeping $\sigma$ the sign function. So, it will have same of $d+1$.

### Visual Description
Handwritten text and a small diagram on a printed exam page. The diagram shows a 1D axis with points labeled. The handwritten text explains why the VC dimension remains $d+1$ for non-decreasing functions. At the bottom, it says "Page 12".

---
## Page 21
### Content
![Step function diagram]

b) If $\sigma : \mathbb{R} \rightarrow \{-1, 1\}$ can be any non-decreasing function, then what is the maximum value of the VC dimension that this hypothesis class $\mathcal{H}_\sigma$ can have? [4 points]

$d+1$

A non-decreasing function that outputs $\{-1, 1\}$ will be a shifted sign function, and this will be equivalent to some $w^*, b^*$ w/ regular sign function, which has VC dim of $d+1$.

### Visual Description
Handwritten text on a printed exam page. There is a small sketch of a step function at the top. The answer "$d+1$" is boxed. At the bottom, it says "Page 13".

---
## Page 22
### Content
c) If $\sigma : \mathbb{R} \rightarrow \{-1, 1\}$ can be any function (not restricted to being non decreasing), then can the VC dimension of such a hypothesis class $\mathcal{H}_\sigma$ be greater than $d + 1$? Why or why not? [7 points]

Yes. You can map each unique value from $\mathbb{R}$ to some value, and achieve any possible labelling of that point by flipping the sign of the weight.

### Visual Description
Handwritten text on a printed exam page. The student answers "Yes" and provides a brief justification. At the bottom, it says "Page 14".

---
## Page 23
### Content
![Sketch of points in space]

d) If $\sigma : \mathbb{R} \rightarrow \{-1, 1\}$ can be any function (not restricted to being non decreasing), what is the maximum value of the VC dimension that such a hypothesis class $\mathcal{H}_\sigma$ can have? [4 points]

$\infty$

You can map any labeling to any output value w/ freedom over the function.

### Visual Description
Handwritten text on a printed exam page. There is a small sketch of points at the top. The answer "$\infty$" is boxed. At the bottom, it says "Page 15".

---
## Page 24
### Content
[Blank page]

### Visual Description
Blank page.

---
## Page 25
### Content
[Blank Page]
### Visual Description
Blank page.
---
