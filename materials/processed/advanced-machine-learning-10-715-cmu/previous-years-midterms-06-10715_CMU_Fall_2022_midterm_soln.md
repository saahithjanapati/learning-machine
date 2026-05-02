# previous-years-midterms-06-10715_CMU_Fall_2022_midterm_soln

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/previous-years-midterms-06-10715_CMU_Fall_2022_midterm_soln.pdf`
Duplicate equivalents: `previous-years-midterms-06-10715_CMU_Fall_2022_midterm_soln.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 10

## Page 1
### Content
CMU 10-715 Fall 2022: Midterm Exam

**DO NOT PRINT, SOLUTIONS ARE BEING DISPLAYED!**

**Name:**

**Andrew ID:**

**Instructions:**
* This is an 80 minute exam during the lecture time, from 10:10 AM to 11:30 AM.
* You are **NOT** allowed to refer to notes, homework solutions, the textbook, lecture videos or any other outside resources.
* You are **NOT** allowed to discuss the exam with anyone in the duration of the exam.
* We recommend taking a brief look at all questions first and then starting to answer them. You may find some questions easier than others.
* If you need additional space for any question, please use the back of that page **and indicate that you are doing so on the front**. If you need even more space, please let course staff know and we will provide additional paper.
* Unless specified otherwise, consider binary classification with $\mathcal{X} = \mathbb{R}^d$ for some positive integer $d$ and $\mathcal{Y} = \{-1, +1\}$.

**Distribution of Marks**
| Question | Points | Score |
| :--- | :--- | :--- |
| **1** | 15 | |
| **2** | 22 | |
| **3** | 16 | |
| **4** | 21 | |
| **5** | 26 | |
| Total: | 100 | |

### Visual Description
The page is the cover sheet of a midterm exam. It contains the course title, a warning that solutions are being displayed, fields for Name and Andrew ID, a list of instructions, and a table for the distribution of marks across five questions.

---
## Page 2
### Content
### 1) Perceptron [5+5+5=15 points]

1. Consider the set of hypotheses that can be represented by the perceptron:
$$\mathcal{H} = \{h_{\mathbf{w},b} : \mathbb{R}^d \to \{-1, +1\} | h_{\mathbf{w},b}(\mathbf{x}) = \text{sign}(\mathbf{w}^\top \mathbf{x} + b), \mathbf{w} \in \mathbb{R}^d, b \in \mathbb{R}\}$$
Here, we define $\text{sign}(z) = \begin{cases} +1 & \text{when } z \ge 0 \\ -1 & \text{when } z < 0 \end{cases}$.

(a) (5 points) Let $d = 2$. The AND function is given by $\text{AND}(\mathbf{x}) = \min(x_1, x_2)$, for $\mathbf{x} = [x_1, x_2]$, where $x_1, x_2 \in \{-1, +1\}$.
Does there exist a set of parameters $(\mathbf{w}, b)$ such that $h_{\mathbf{w},b}(\mathbf{x}) = \text{AND}(x_1, x_2)$ when $x_1, x_2 \in \{-1, +1\}$? We don't care what the output is for any other values of $x_1, x_2$.
If yes, please specify values of parameters $(\mathbf{w}, b)$ of the perceptron that represents this function. If no, prove why not.

<span style="color:blue">Yes. $\mathbf{w} = [1, 1]^\top, b = -0.5$</span>

(b) (5 points) Let $d = 2$. The OR function is given by $\text{OR}(\mathbf{x}) = \max(x_1, x_2)$, for $\mathbf{x} = [x_1, x_2]$, where $x_1, x_2 \in \{-1, +1\}$.
Does there exist a set of parameters $(\mathbf{w}, b)$ such that $h_{\mathbf{w},b}(\mathbf{x}) = \text{OR}(x_1, x_2)$ when $x_1, x_2 \in \{-1, +1\}$? We don't care what the output is for any other values of $x_1, x_2$.
If yes, please specify values of parameters $(\mathbf{w}, b)$ of the perceptron that represents this function. If no, prove why not.

<span style="color:blue">Yes. $\mathbf{w} = [1, 1]^\top, b = +0.5$</span>

(c) (5 points) Let $d = 1$. The NOT function is given by $\text{NOT}(x) = \begin{cases} +1 & \text{when } x = -1 \\ -1 & \text{when } x = +1 \end{cases}$, where $x \in \{-1, +1\}$.
Does there exist a set of parameters $(w, b)$ such that $h_{w,b}(x) = \text{NOT}(x)$ when $x \in \{-1, +1\}$? We don't care what the output is for any other values of $x$.
If yes, please specify values of parameters $(w, b)$ of the perceptron that represents this function. If no, prove why not.

<span style="color:blue">Yes. $w = -1, b = 0$</span>

Page 2
### Visual Description
Text-only slide containing the first question of the exam about Perceptrons. It includes three sub-questions (a, b, c) asking for parameter values to represent AND, OR, and NOT functions. Solutions are written in blue text.

---
## Page 3
### Content
[Learning objective: The AND, OR, and NOT functions form the basic building blocks of all circuits. Here we will learn whether the perceptron is able to form these building blocks. If yes, then multiple such perceptrons can form any function. If no, then even combinations of perceptrons may be quite weak.]

Page 3
### Visual Description
Text-only slide containing a learning objective note related to the previous question on Perceptrons.

---
## Page 4
### Content
### 2) Optimization [7+15=22 points]

Consider the hypothesis class $\mathcal{H} = \{h_{\mathbf{w}} : \mathbb{R}^d \to \mathbb{R} | h_{\mathbf{w}}(\mathbf{x}) = \mathbf{w}^\top \mathbf{x}, \mathbf{w} \in \mathbb{R}^d\}$. In words, each hypothesis in this class outputs a real value (not necessarily a binary value). This is a linear hypothesis class but with no bias term (i.e., $b = 0$). Finally, consider the loss function $\ell : \{-1, +1\} \times \mathbb{R}$ as $\ell(y, \hat{y}) = (y - \hat{y})^2$.

(a) (7 points) Given $n$ samples $(\mathbf{x}_1, y_1), \dots, (\mathbf{x}_n, y_n) \in \mathbb{R}^d \times \{-1, +1\}$, write down empirical risk minimization under this $\mathcal{H}$ as an optimization problem.
ERM:
$$\min_{\mathbf{w} \in \mathbb{R}^d} \frac{1}{n} \sum_{i=1}^n (y_i - \mathbf{w}^\top \mathbf{x}_i)^2$$

(b) (15 points) Now, show that the optimization problem you derived is a convex optimization problem. **For this subproblem, consider only the case when $d = 1$, which should simplify your calculations.**
You can use the following facts:
(i) The function $f : \mathbb{R} \to \mathbb{R}$ given by $f(v) = v^2$ is convex.
(ii) The function $g : \mathbb{R} \to \mathbb{R}$ given by $g(v) = cv$ for any constant $c \in \mathbb{R}$ is both concave and convex. By concave we mean that the function $-g$ is convex.
(iii) The function $h : \mathbb{R} \to \mathbb{R}$, where $h(v) = ck(v)$ for any *non-negative* constant $c \in \mathbb{R}^+ \cup \{0\}$ and any convex function $k : \mathbb{R} \to \mathbb{R}$, is convex.
(iv) The sum of any number of convex functions is convex.

[Learning objective: Work out an instance of empirical risk minimization to get a hands-on experience. Then think about the optimization side of it in order to get a handle on linking ML to optimization.]

<span style="color:blue">
$$\min_{w \in \mathbb{R}} \frac{1}{n} \sum_{i=1}^n (y_i - \hat{y}_i)^2 \equiv \min_{w \in \mathbb{R}} \frac{1}{n} \sum_{i=1}^n (y_i - wx_i)^2 \equiv \min_{w \in \mathbb{R}} \frac{1}{n} \sum_{i=1}^n [y_i^2 - 2wx_iy_i + w^2x_i^2]$$
Consider each summand $y_i^2 - 2wx_iy_i + w^2x_i^2$. This term is the sum of $y_i^2$ (a constant function, and therefore convex), $-2wx_iy_i$ (the scalar constant $-2x_iy_i$ multiplied by $w$, which is convex according to the second hint above), and $w^2x_i^2$, a non-negative scalar times the function $w^2$, which is convex considering the first and third hints. As the sum of convex functions, this term is convex.
</span>

Page 4
### Visual Description
Text-only slide containing the second question of the exam about Optimization. It includes sub-questions (a) and (b) regarding Empirical Risk Minimization and a proof of convexity for the $d=1$ case. Solutions and explanations are provided in blue text.

---
## Page 5
### Content
<span style="color:blue">
The overall optimization objective $\frac{1}{n} \sum_{i=1}^n [y_i^2 - 2wx_iy_i + w^2x_i^2]$ is a positive constant multiplied by the sum of convex functions, and is convex by the third and fourth hints.

$\therefore \frac{1}{n} \sum_{i=1}^n (y_i - wx_i)^2$ is convex, there are no constraints, and $\min_{w \in \mathbb{R}} \frac{1}{n} \sum_{i=1}^n (y_i - wx_i)^2$ is a convex problem.
</span>

Page 5
### Visual Description
Text-only slide continuing the solution to the optimization problem from the previous page. The text is entirely in blue.

---
## Page 6
### Content
### 3) Support Vector Machines (SVM) [16 points]

Recall soft SVM:
$$\text{argmin}_{(\mathbf{w},b,\xi_1,\dots,\xi_n) \in \mathbb{R}^d \times \mathbb{R} \times (\mathbb{R}^+ \cup \{0\})^n} \frac{1}{2} \|\mathbf{w}\|_2^2 + C \sum_{i=1}^n \xi_i$$
$$\text{s.t. } y_i(\mathbf{w}^\top \mathbf{x}_i + b) \ge 1 - \xi_i \quad \forall i \in [n], \quad \xi_i \ge 0 \quad \forall i \in [n]$$

You don't like to give too much slack, so suppose you put an additional set of constraints $\xi_i \le 10 \quad \forall i \in [n]$. But now, by mistake, you choose some $C < 0$. Then what values of $\mathbf{w}$ and the slack variables $\{\xi_i\}$ will the optimization program output? Does this result in a sensible classifier?

[Learning objective: Critically think about the behavior of this classical method when the setting is slightly changed.]

<span style="color:blue">
Because $C$ is negative, the optimization will encourage slacks that are as large as possible.

$\therefore \forall i, \xi_i = 10$, which is the largest possible value given the constraint. $\mathbf{w} = \mathbf{0}$. $b$ might be anywhere in $[-9, +9]$, in order to satisfy the equation $y_i(0 + b) \ge -9$ for any $y_i$ (as $y_i$ can take values in $\{-1, +1\}$).

In this way, $\frac{1}{2} \|\mathbf{w}\|_2^2 + C \sum_{i=1}^n \xi_i$ reaches its minimum ($-10nC$) and is feasible.

This classifier doesn't make sense in general as it outputs the same value for any input.
</span>

Page 6
### Visual Description
Text-only slide containing the third question of the exam about Support Vector Machines. It presents a scenario with a negative $C$ parameter and additional slack constraints. The solution and explanation are provided in blue text.

---
## Page 7
### Content
### 4) Kernel Methods [21 points]

Let $d = 1$. Consider the realizable setting. Consider
$$\mathcal{H} = \left\{ h_{t_1,t_2} : \mathbb{R} \to \{-1, +1\} \middle| h_{t_1,t_2}(x) = \begin{cases} +1 & \text{if } x \in [t_1, t_2] \\ -1 & \text{otherwise} \end{cases}, t_1 \in \mathbb{R}, t_2 \in \mathbb{R}, t_1 < t_2 \right\}.$$
In words, there are two latent values $t_1 \in \mathbb{R}, t_2 \in \mathbb{R}$ (with $t_1 < t_2$) such that the label is 1 whenever $x \in [t_1, t_2]$ and -1 otherwise. Given some $n$ training samples, you wish to design a binary classifier. Consider the kernel $K : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$ given by $K(x, \tilde{x}) = x\tilde{x} + (x\tilde{x})^2$. Show that using this kernel, the perceptron or hard-SVM will yield a classifier that makes no errors on the training points. **Note:** you may disregard the edge cases $\{t_1, t_2\}$ entirely.

**Hint 1:** You may think about this in terms of the mapping $\psi$ that pertains to the given kernel. If you can show that the training data is linearly separable in the $\mathcal{F}$ space to which this $\psi$ maps, you can then directly claim that when using this kernel, the perceptron / hard-SVM will work.

**Hint 2:** Consider two points $(x_1, y_1), (x_2, y_2)$, where $x_1, x_2, y_1, y_2 \in \mathbb{R}$. The equation of the line passing through these two points is
$$y = \frac{y_2 - y_1}{x_2 - x_1}(x - x_1) + y_1$$

[Learning objective: We did such an example pictorially in the beginning of the Kernel methods lecture. This makes you think mathematically about it, by asking you to prove it formally.]

<span style="color:blue">
The kernel is $K(x, \tilde{x}) = x\tilde{x} + (x\tilde{x})^2 = \langle [x, x^2]^\top, [\tilde{x}, \tilde{x}^2]^\top \rangle$, so this can be obtained from the mapping $\psi : \mathbb{R} \to \mathbb{R}^2$ given by $\psi(x) = [x, x^2]^\top$.

We will now show that in the space induced by $\psi$, the training data can be classified perfectly by a linear separator. Informally, if we draw a classification boundary line (in the space induced by $\psi$) between $(t_1, t_1^2)$ and $(t_2, t_2^2)$, it will classify any point $(x, x^2)$ where $x \in (t_1, t_2)$ in one class, and any point $(x, x^2)$ where $x \notin (t_1, t_2)$ in the other class. We disregard the edge cases $x \in \{t_1, t_2\}$ on the line.

Using the formula for a line between two points given in Hint 2, and disregarding edge cases, we propose the hypothesis $h(x) = \begin{cases} +1 & \text{when } x^2 < \frac{t_2^2 - t_1^2}{t_2 - t_1}(x - t_1) + t_1^2 \\ -1 & \text{when } x^2 > \frac{t_2^2 - t_1^2}{t_2 - t_1}(x - t_1) + t_1^2 \end{cases}$, which acts only on $\psi(x) = [x, x^2]^\top$.
</span>

Page 7
### Visual Description
Text-only slide containing the fourth question of the exam about Kernel Methods. It defines a hypothesis class for interval classification and asks to show linear separability using a specific kernel. Hints and the beginning of the solution (in blue) are provided.

---
## Page 8
### Content
<span style="color:blue">
Using some basic algebra (using the formula $a^2 - b^2 = (a - b)(a + b)$), can simplify this to: $h(x) = \begin{cases} +1 & \text{when } (x + t_1)(x - t_1) < (t_2 + t_1)(x - t_1) \\ -1 & \text{when } (x + t_1)(x - t_1) > (t_2 + t_1)(x - t_1) \end{cases}$.

* Note that if $x > t_1$, the inequality $(x + t_1)(x - t_1) < (t_2 + t_1)(x - t_1)$ simplifies to $x < t_2$. If $x < t_1$, the inequality $(x + t_1)(x - t_1) < (t_2 + t_1)(x - t_1)$ simplifies to $x > t_2$.
* Similarly, if $x > t_1$, the inequality $(x + t_1)(x - t_1) > (t_2 + t_1)(x - t_1)$ simplifies to $x > t_2$. If $x < t_1$, the inequality $(x + t_1)(x - t_1) > (t_2 + t_1)(x - t_1)$ simplifies to $x < t_2$.

Consequently, we can write $h(x) = \begin{cases} +1 & \text{when } (x > t_1 \text{ and } x < t_2) \text{ or } (x < t_1 \text{ and } x > t_2) \\ -1 & \text{when } (x > t_1 \text{ and } x > t_2) \text{ or } (x < t_1 \text{ and } x < t_2) \end{cases}$.

Combining overlapping cases and eliminating vacuous cases, we have
$$h(x) = \begin{cases} +1 & \text{when } (x > t_1 \text{ and } x < t_2) \\ -1 & \text{when } (x > t_2 \text{ or } x < t_1) \end{cases}.$$

We also show explicitly that the linear classifier is of the form $\text{sign}(\mathbf{w}^\top \psi(x) + b)$. We rewrite $h(x) = \begin{cases} +1 & \text{when } 0 \le \left[ \frac{t_2^2 - t_1^2}{t_2 - t_1}, -1 \right]^\top [x, x^2]^\top + \left( t_1^2 - \frac{t_2^2 - t_1^2}{t_2 - t_1} t_1 \right) \\ -1 & \text{otherwise} \end{cases}$.

We can then rewrite $h(x)$ to make it in the form of a traditional linear hypothesis acting on $\psi(x) = [x, x^2]^\top$:
$$h(x) = \text{sign} \left( \left\langle \left[ \frac{t_2^2 - t_1^2}{t_2 - t_1}, -1 \right]^\top, \psi(x) \right\rangle + \left( t_1^2 - \frac{t_2^2 - t_1^2}{t_2 - t_1} t_1 \right) \right).$$

Because the above linear hypothesis classifies everything correctly, the data is linearly separable in the space induced by mapping through $\psi$, and kernelized perceptron or kernel hard margin SVM can therefore find a hypothesis with 0 training error.
</span>

Page 8
### Visual Description
Text-only slide continuing the solution to the Kernel Methods problem. It uses algebraic steps to show that the proposed hypothesis correctly classifies the data and can be written in the standard linear form $\text{sign}(\mathbf{w}^\top \psi(x) + b)$. The text is entirely in blue.

---
## Page 9
### Content
5) Learning Theory [7+4+15=26 points]

Consider PAC learning under the realizability assumption.

(a) (7 points) Define “sample complexity” of learning a given hypothesis class.

Sample complexity $n^*$ of learning a hypothesis class $\mathcal{H}$ is the minimum number of sample needed to ensure the PAC learnability of $\mathcal{H}$, i.e., for every $\epsilon > 0, \delta$ and $n \geq n^*$, there exists a learning algorithm s.t. running the learning algorithm on $n$ samples outputs $h : \mathcal{X} \to \mathcal{Y}$ s.t. $P_{x_1, \dots, x_n \in D}(R(h) > \epsilon) \leq \delta$, for every distribution $D$ on $\mathcal{X}$ and every $h^* \in \mathcal{H}$

(b) (4 points) The fundamental theorem of statistical learning theory shows that the sample complexity is non-increasing as $\epsilon$ and/or $\delta$ increase. Please explain why this is so? (We are not looking for a formal proof, but just a 1 sentence intuition.)

As $\epsilon$ and/or $\delta$ increases, we allow for greater risk. Therefore, we need smaller number of samples to attain PAC learnability. Therefore the sample complexity decreases as $\epsilon$ and/or $\delta$ increases.

(c) (15 points) More precisely, the fundamental theorem says that the sample complexity is roughly
$$\frac{1}{\text{poly}(\epsilon)} \log \frac{1}{\delta}.$$

In this question, we will get intuition about this expression by proving an analogous result for a simpler problem. Consider random variables $Z_1, Z_2, \dots, Z_n$ all drawn i.i.d. from some distribution with support $[0, 1]$. Let $\mu_Z$ denote the mean of this distribution. Suppose your goal is to estimate the mean $\mu_Z$ based on realizations of $Z_1, Z_2, \dots, Z_n$. Consider the sample mean estimator $\bar{Z} = \frac{1}{n} \sum_{i=1}^n Z_i$. Consider the loss $\ell : \mathbb{R} \times \mathbb{R} \to \mathbb{R}_{\geq 0}$ as $\ell(\bar{Z}, \mu_Z) = |\bar{Z} - \mu_Z|$. In what follows, we will compute an analogue of the $(\epsilon, \delta)$-sample complexity for this estimator.

**Hoeffding’s Bound**
Given $Z_1, Z_2, \dots, Z_n$ drawn i.i.d. from some distribution with support $[0, 1]$, by Hoeffding’s Bound we have for any $\nu > 0$:
$$P(|\bar{Z} - \mu_Z| \geq \nu) \leq 2 \exp(-2n\nu^2)$$

Please relate Hoeffding’s bound to $\epsilon, \delta$ and $n$ in PAC learning, and then use Hoeffding’s bound to derive an upper bound, in terms of $\epsilon$ and $\delta$, on the sample complexity of estimation of $\mu_Z$.

Page 9

### Visual Description
Text-only slide.

---
## Page 10
### Content
[Learning objective: To develop better intuition about the important notion of sample complexity.]

To ensure that with probability at least $1 - \delta$ we have no more than $\epsilon$ absolute error in our estimate of $\mu_Z$, we bound $P(|\bar{Z} - \mu_Z| \geq \epsilon)$ by $\delta$, i.e., we let
$$P(|\bar{Z} - \mu_Z| \geq \epsilon) \leq 2 \exp(-2n\epsilon^2) \leq \delta$$

$\therefore$ with $n \geq \frac{1}{2\epsilon^2} \log \frac{2}{\delta}$, we will ensure that with probability at least $1 - \delta$ we have no more than $\epsilon$ absolute error in our estimate of $\mu_Z$.

$\therefore$ sample complexity is at most $\frac{1}{2\epsilon^2} \log \frac{2}{\delta}$

Page 10

### Visual Description
Text-only slide.
