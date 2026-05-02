# previous-years-midterms-08-10715_CMU_Fall_2020_midterm_soln

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/previous-years-midterms-08-10715_CMU_Fall_2020_midterm_soln.pdf`
Duplicate equivalents: `previous-years-midterms-08-10715_CMU_Fall_2020_midterm_soln.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 12

## Page 1
### Content
# CMU 10-715: Midterm Exam
**DUE: Oct. 8, 2020, 11:40 AM Eastern time.**

### Instructions:
* It is a 24-hour exam. The submission site will close at 11:40 AM, Oct 8.
* You can refer to your own notes, the scribe notes, homework solutions, the text book, and lecture videos. You are **NOT** allowed to use any other resources (e.g., no searching on the Internet).
* You are **NOT** allowed to discuss the exam with anyone in the duration of the exam. For any questions, please post on Diderot.
* For the programming question(s), you can feel free to use any code you wrote for any of the homeworks.
* Submit your solutions in a pdf file to Gradescope. Handwritten or typed solutions are both accepted. Start **each question on a new page** and make sure you select the corresponding page(s) for each question during submission to Gradescope.
* We recommend taking a brief look at all questions first and then starting to answer them. You may find some questions easier than others. Good luck!

### Distribution of Marks
| Question | Points | Score |
| :--- | :--- | :--- |
| **1** | 10 | |
| **2** | 10 | |
| **3** | 25 | |
| **4** | 10 | |
| **5** | 10 | |
| **6** | 15 | |
| **7** | 15 | |
| **8** | 15 | |
| Total: | 110 | |

### Visual Description
The page contains the title of the exam, the due date, a list of six instructions, and a table showing the distribution of marks for eight questions totaling 110 points.

---

## Page 2
### Content
## 1) Enthusiastic Data Augmentation [10 pts]

This is a "conceptual" question. You don't need to give formal proofs. Giving a text-based description, examples and/or pictures is fine.

Consider binary classification, with $\mathcal{X} = \mathbb{R}^d$ for some $d \ge 2$ and $\mathcal{Y} = \{-1, 1\}$ and a training dataset $\{(x_i, y_i)\}_{i \in [n]}$.

An enthusiastic student tries the following new approach towards training.
* The student creates a new training dataset of $nd$ samples as follows. For each $i \in [n]$ and $j \in [d]$ define $z_{ij} \in \mathbb{R}^d$ whose $j^{th}$ coordinate equals the $j^{th}$ coordinate of $x_i$ and all other coordinates are zero. The following figure shows an example:

![Projection Example](https://placeholder.com/diagram1)
*(Diagram shows $x_i = (x_{i1}, x_{i2})$ projected onto axes as $z_{i1} = (x_{i1}, 0)$ and $z_{i2} = (0, x_{i2})$)*

Now consider the modified training dataset: $\{(z_{ij}, y_{ij})\}_{i \in [n], j \in [d]}$ where $y_{ij} = y_i$ in the original training dataset.
* The enthusiastic student trains a perceptron on this modified training set and obtains $w \in \mathbb{R}^d, b \in \mathbb{R}$.
* Given a new point $x \in \mathbb{R}^d$, the prediction is $f(x) = \text{sign}(\langle w, x \rangle + b)$.

What do you think about this idea? Are there settings where the perceptron algorithm can classify the original training data perfectly, but fails to do so on the modified training data?

### Solution
<span style="color:red">This is not a good idea. Consider the following example,</span>

![Transformation Example](https://placeholder.com/diagram2)
*(Diagram shows a 2D scatter plot of red and blue points that are linearly separable. An arrow points to a second plot where these points are projected onto the x and y axes, becoming overlapping and non-linearly separable.)*

<span style="color:red">The new data is clearly not linearly separable but it was linearly separable before the transformation.</span>

### Visual Description
The page describes a data augmentation problem. It includes a diagram showing how a 2D point is decomposed into its axial components. The solution section, written in red text, includes a conceptual diagram showing how linearly separable data in 2D can become non-linearly separable when projected onto the axes.

---

## Page 3
### Content
## 2) Perceptron on Non Linearly Separable Data [10 pts]

Consider a binary classification problem, with $\mathcal{X} = \mathbb{R}^d$ and $\mathcal{Y} = \{-1, 1\}$ and a training dataset $\{(x_i, y_i)\}_{i \in [n]}$. Consider the perceptron algorithm seen in class.

---
**Algorithm 1:** Perceptron algorithm
Initialize parameters $w_0 = 0, b_0 = 0$, step $t = 0$;
**while** $\exists i \in [n]$ such that $y_i(w_t^\top x_i + b_t) \le 0$ **do**
&nbsp;&nbsp;&nbsp;&nbsp;$w_{t+1} = w_t + y_i x_i$;
&nbsp;&nbsp;&nbsp;&nbsp;$b_{t+1} = b_t + y_i$;
&nbsp;&nbsp;&nbsp;&nbsp;$t = t + 1$;
**end**
Output $w_t$ and $b_t$
---

(a) (5 pts) With this context, what does it mean for a training dataset $\{(x_i, y_i)\}_{i \in [n]}$ to not be linearly separable in terms of $w$ and $b$? Please write down the formal mathematical meaning of it.

(b) (5 pts) Prove or give a counter example: The perceptron algorithm will never terminate when the training data is not linearly separable.

### Solution
<span style="color:red">A training dataset is not linearly separable if $\exists i \in [n]$ such that $y_i(\langle w, x_i \rangle + b) \le 0, \forall (w, b) \in \mathbb{R}^d \times \mathbb{R}$</span>

<span style="color:red">The perceptron algorithm will never terminate when the training data is not linearly separable because the while condition will always be true.</span>

### Visual Description
The page presents a problem about the Perceptron algorithm. It includes a pseudocode block for the algorithm and two sub-questions (a and b). The solutions are provided in red text at the bottom.

---

## Page 4
### Content
## 3) Kernel Soft SVM implementation [25 pts]

Consider the soft SVM objective:
$$
\begin{aligned}
& \text{minimize}_{w, \xi_i} & & \frac{1}{2} \|w\|_2^2 + C \sum_{i=1}^n \xi_i \\
& \text{subject to} & & y_i(w^\top \psi(x_i) + b) \ge 1 - \xi_i, \quad i = 1, \dots, n \\
& & & \xi_i \ge 0, \quad i = 1, \dots, n
\end{aligned} \tag{1}
$$

Equation 1 has its dual form:
$$
\begin{aligned}
& \text{maximize}_{\alpha} & & \mathbf{1}^\top \alpha - \frac{1}{2} \alpha^\top \tilde{K} \alpha \\
& \text{subject to} & & 0 \le \alpha_i \le C \text{ for all } i, \quad \alpha^\top y = 0
\end{aligned} \tag{2}
$$
where $\alpha$ is the dual variable, $K_{ij} = \langle \psi(x_i), \psi(x_j) \rangle$, and $\tilde{K}_{ij} = y_i y_j K_{ij}$.

In this question you will implement your own Kernel Soft SVM and test it on the data `data.txt` using the CVXOPT library `https://cvxopt.org/`.
You should use the Radial Basis Function kernel:
$$ \langle \psi(x_i), \psi(x_j) \rangle = K_{ij} = \exp(-\gamma \|x_i - x_j\|_2^2) $$

You are not allowed to use packages that directly implement the kernel SVM algorithm. Please append your code to the end of your pdf submission. Your code will **NOT** be evaluated by the Autograder.

(a) (5 pts) The quadratic programming solver method from CVXOPT `solvers.qp()` uses as input the matrices $\mathbf{Q, p, G, h, A, b}$. Write the correspondence between these inputs and the matrices of Equation 2.

(b) (20 pts) Fit the classifier with $\gamma = \{1/4, 1/100\}$ and $C = 1$ on the training data using CVXOPT. After you fit your classifier, plot the original data and the decision boundaries for $\gamma = \{1/4, 1/100\}$. You can use the python function `contourf` on a fine meshgrid to plot the decision boundary.

---
$^1$The data is provided to you on this link `https://github.com/ShenghaoWu/10715/`
$^2$Documentation: `https://cvxopt.org/userguide/coneprog.html#quadratic-programming`.
The $\preceq$ symbol represents componentwise inequality.

### Visual Description
Text-only slide containing mathematical formulations for the primal and dual Soft SVM objectives, the RBF kernel definition, and two sub-questions (a and b) regarding implementation using CVXOPT.

---

## Page 5
### Content
### Solution
(a) The mapping between the inputs of the quadratic programming solver and the soft svm notation is given by:
$$
\begin{aligned}
\mathbf{P} &= \tilde{\mathbf{K}} \in \mathbb{R}^{n \times n} \\
\mathbf{q} &= -\mathbf{1} \in \mathbb{R}^n \\
\mathbf{G} &= [\mathbf{I}_n | -\mathbf{I}_n]^\top \in \mathbb{R}^{2n \times n} \\
\mathbf{h} &= [C * \mathbf{1}, \mathbf{0}]^\top \in \mathbb{R}^{2n} \\
\mathbf{A} &= \mathbf{y}^\top \in \mathbb{R}^{1 \times n} \\
b &= 0
\end{aligned}
$$

(b) The decision boundaries of the soft SVM classifier on the data:

![SVM Boundary Gamma 0.25](https://placeholder.com/plot1)
*(Plot titled "Soft SVM classifier gamma=0.25" showing a complex decision boundary separating blue and orange points.)*

![SVM Boundary Gamma 0.01](https://placeholder.com/plot2)
*(Plot titled "Soft SVM classifier gamma=0.01" showing a smoother, simpler decision boundary separating the same points.)*

### Visual Description
The page provides the solution to Question 3. Part (a) lists the matrix mappings for the CVXOPT solver in red text. Part (b) displays two scatter plots with decision boundaries generated by the SVM for different values of the $\gamma$ parameter.

---

## Page 6
### Content
```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.metrics.pairwise import rbf_kernel
from cvxopt import matrix, solvers
solvers.options['show_progress'] = False

def read_data():
    data = np.loadtxt('./data/data.txt')
    X = data[:, :2]
    y = data[:, 2]
    y[y==0] = -1 # Change zeros to negative ones
    return X, y

class SoftSVM(object):
    def __init__(self, C, gamma):
        self.C = C
        self.gamma = gamma

    def define_cvxopt_inputs(self, X, y):
        n_train = len(y)
        P = np.diag(y) @ rbf_kernel(X, gamma=self.gamma) @ np.diag(y)
        q = -np.ones((n_train, 1))
        G = np.concatenate((np.eye(n_train), -np.eye(n_train)))
        h = np.concatenate((self.C*np.ones((n_train, 1)), np.zeros((n_train, 1))))
        A = y.transpose()[None, :]
        b = np.array([0.0])
        return P, q, G, h, A, b

    def predict(self, x):
        score = self.alphas * self.y_train * rbf_kernel(self.X_train, x)
        score = np.sum(score, axis=0)
        return np.sign(score)

    def fit(self, X, y):
        self.X_train = X
        self.y_train = y[:, None]
        P, q, G, h, A, b = self.define_cvxopt_inputs(X, y)
        cvx_opt_sol = solvers.qp(P=matrix(P), q=matrix(q), G=matrix(G),
                                 h=matrix(h), A=matrix(A), b=matrix(b))
        self.alphas = np.array(cvx_opt_sol['x'])
        return self

def plot_decision_boundaries(X, y, clf, n_mesh=80):
    x1, x2 = np.meshgrid(np.linspace(-40, 40, n_mesh),
                         np.linspace(-40, 40, n_mesh))
    y_hat = clf.predict(np.c_[x1.ravel(), x2.ravel()])
    y_hat = y_hat.reshape(x1.shape)

    plt.contourf(x1, x2, y_hat)
    plt.scatter(X[y==-1, 0], X[y==-1, 1])
    plt.scatter(X[y==1, 0], X[y==1, 1])
    plt.title(f"Soft SVM classifier gamma={clf.gamma}")
    plt.show()
```

### Visual Description
Text-only slide containing a Python code implementation of a Soft SVM using the CVXOPT library. The code includes a class `SoftSVM` with methods for defining inputs, fitting the model, and making predictions, as well as helper functions for reading data and plotting results.

---

## Page 7
### Content
## 4) Kernelizable Objectives and the Representer Theorem [10 pts]

Recall the Representer Theorem (and assume it as a given). Let $\psi : \mathcal{X} \to \mathcal{F}$ where $\mathcal{F}$ is Hilbert space. Consider $f : \mathbb{R}^n \to \mathbb{R}$. Now, there are many algorithms which optimize over the squared norm $\|w\|^2$. Moreover, when trying to write down some algorithms in the form required by Mercer's theorem, they have some other function of $x_i$'s as well in their objective. With this motivation, your goal is to prove that algorithms that optimize the following objective are also kernelizable:
$$ \arg \min_{w \in \mathcal{F}} f(\langle w, \psi(x_1) \rangle, \dots, \langle w, \psi(x_n) \rangle) + \tilde{R}(\|w\|, \|w\|^2) + g(x_1, \dots, x_n). $$
where $f(\langle w, \psi(x_1) \rangle, \dots, \langle w, \psi(x_n) \rangle)$ and $g(x_1, \dots, x_n)$ are arbitrary functions, $\tilde{R}(\|w\|, \|w\|^2)$ is coordinatewise non-decreasing.

### Solution
<span style="color:red">We can first define a new function, $R(\|w\|) = \tilde{R}(\|w\|, \|w\|^2)$. This function $R$ is non-decreasing:</span>
<span style="color:red">Let $w_1, w_2 \in \mathcal{X}$ such that $\|w_1\| \ge \|w_2\|$, then</span>
$$ \color{red} R(\|w_1\|) = \tilde{R}(\|w_1\|, \|w_1\|^2) \ge \tilde{R}(\|w_1\|, \|w_2\|^2) \ge \tilde{R}(\|w_2\|, \|w_2\|^2) = R(\|w_2\|) $$
<span style="color:red">Then note that $g(x_1, \dots, x_n)$ does not depend on $w$. So we can rewrite the original problem as</span>
$$ \color{red} \arg \min_{w \in \mathcal{F}} f(\langle w, \psi(x_1) \rangle, \dots, \langle w, \psi(x_n) \rangle) + R(\|w\|). $$
<span style="color:red">Finally, this is kernelizable by the Representer Theorem.</span>

### Visual Description
The page presents a problem about the Representer Theorem and kernelizable objectives. It includes a mathematical objective function to be proven kernelizable. The solution is provided in red text, showing the steps to simplify the objective to a form where the Representer Theorem directly applies.

---

## Page 8
### Content
## 5) Validity of a Kernel [10 pts]

Consider $\mathcal{X} = \mathbb{R}^d$ for some $d \ge 2$. Consider the function $K : \mathcal{X} \times \mathcal{X} \to \mathbb{R}$ as:
$$ K(x, \tilde{x}) = \log \left( \frac{1}{d} \right), \text{ for all } x, \tilde{x} \in \mathcal{X} $$
Prove or disprove: $K$ is a valid kernel.

### Solution
<span style="color:red">The induced quadratic form of the proposed Kernel is:</span>
$$ \color{red} x^\top \mathbf{K} x = x^\top \log \left( \frac{1}{d} \right) \mathbf{1} \mathbf{1}^\top x = \log \left( \frac{1}{d} \right) (\mathbf{1}^\top x)^2 \le 0 $$
<span style="color:red">Since the Gram matrix is not positive semidefinite, the proposed function $K : \mathcal{X} \times \mathcal{X} \to \mathbb{R}$ cannot be a Kernel.</span>

### Visual Description
The page presents a problem asking to prove or disprove the validity of a specific constant kernel function. The solution, in red text, uses the quadratic form of the Gram matrix to show it is not positive semidefinite, thus disproving that the function is a valid kernel.

---==End of PDF==
## Page 9
### Content
6) **Epsilon-net Arguments [15 pts]**

Although the epsilon-net argument works in many other problems, there are flaws in the arguments below. Your goal is to identify any one of the five steps below which does NOT work and justify your answer. To be clear, you do not have to show whether other steps work or not – just need to identify one step and show that the claim in that step is false.

Consider the realizability and i.i.d. assummptions. In the lecture, we proved a bound on the sample complexity of PAC learning when the hypothesis class $\mathcal{H}$ is a finite-sized class. In particular, we showed that $\mathcal{H}$ is $(\epsilon, \delta)$-PAC learnable as long as the number of samples is at least $\lceil \frac{\log(|\mathcal{H}|/\delta)}{\epsilon} \rceil$. However, if the class $\mathcal{H}$ is infinite-sized, then however simple this class may be, simply substituting it in the bound above gives a vaccuous result.

A common trick for using such results for finite settings in order to get results for infinite settings is called ‘epsilon-net arguments’. The high-level idea is to (i) quantize the infinite setting to obtain a finite setting, (ii) use the finite result, and (iii) show that the quantization doesn’t hurt too much.

Let us try that approach here.
Consider $\mathcal{X} = [0, 1]$ and $\mathcal{H} = \{h(x) = \text{sign}(x - \beta) | \beta \in [0, 1]\}$. Clearly, $|\mathcal{H}| = \infty$. The goal is to use the above PAC learning result (which was derived for finite-sized $\mathcal{H}$) to obtain PAC learnability for this class via an epsilon-net argument.

1. For some (finite) positive integer $k$, define $\mathcal{H}_k$ as the hypotheses have thresholds $0, 1/k, 2/k, \dots, 1$, that is, $\mathcal{H}_k = \{h(x) = \text{sign}(x - \beta) | \beta \in \{0, 1/k, 2/k, \dots, 1\}\}$. Thus we have $\mathcal{H}_k \subseteq \mathcal{H}$.
2. Since $|\mathcal{H}_k| = k + 1 < \infty$, we can use the aforementioned result to get a sufficient sample size for $(\epsilon/2, \delta)$-PAC learnability of $\mathcal{H}_k$ as $\lceil \frac{2 \log((k+1)/\delta)}{\epsilon} \rceil$.
3. We can then show that there exists a large enough finite value of $k$ such that for every $h^* \in \mathcal{H}$, there exists some $h_k \in \mathcal{H}_k$ such that $R_{(D,h^*)}(h_k) \leq \epsilon/2$ for every distribution $D$. Denote this value of $k$ as $\xi$.
4. Finally consider the Empirical Risk Minizer (ERM) on class $\mathcal{H}_\xi$ and denote the output as $h_{ERM}$. Consider any true classifier $h^* \in \mathcal{H}$ and any distribution $D$. From point 3 above, let $h_{approx} \in \mathcal{H}_\xi$ be a hypothesis such that $R_{(D,h^*)}(h_{approx}) \leq \epsilon/2$. Show that $R_{(D,h^*)}(h_{ERM}) \leq R_{(D,h^*)}(h_{approx}) + R_{(D,h_{approx})}(h_{ERM})$.
5. Conclude that $\mathcal{H}$ is $(\epsilon, \delta)$-PAC learnable if the number of samples is at least $\lceil \frac{2 \log(|\mathcal{H}_\xi|/\delta)}{\epsilon} \rceil = \lceil \frac{2 \log((\xi+1)/\delta)}{\epsilon} \rceil$.

**Solution**

### Visual Description
Text-only slide.

---
## Page 10
### Content
Step 3 may not work. For any given $\epsilon$, let $\xi$ be the $k$ defined in step 3: for every $h^* \in \mathcal{H}$, there exists some $h_\xi \in \mathcal{H}_\xi$ such that $R_{(D,h^*)}(h_\xi) \leq \epsilon/2$ for any $D$. Now let $D = \text{Unif}[1/\xi, 2/\xi]$ and $h^* = \text{sign}(x - 1.5/\xi)$. However, $\inf_{h_\xi \in \mathcal{H}_\xi} R_{(D,h^*)}(h_\xi) = 0.5$ where the argmin can be $h_\xi = \text{sign}(x - 1/\xi)$ or $\text{sign}(x - 2/\xi)$. If we make $\epsilon = 0.5$, $\inf_{h_\xi \in \mathcal{H}_\xi} R_{(D,h^*)}(h_\xi) > \epsilon/2$, a contradiction!

### Visual Description
Text-only slide.

---
## Page 11
### Content
7) **PAC Learnable [15 pts]**

Let a classification problem be defined by $\mathcal{X} = \mathbb{R}^d$ for some $d \geq 1$ and $\mathcal{Y} = \{-1, 1\}$.
For any value of integer $m \geq 1$ and any $\mathbf{x}_1, \dots, \mathbf{x}_m \in \mathcal{X}$, define the hypothesis class:
$\mathcal{H}(\mathbf{x}_1, \dots, \mathbf{x}_m) = \{h : \mathcal{X} \to \mathcal{Y} | h(\mathbf{x}_1) = \dots = h(\mathbf{x}_m) = 1, \text{ and } h(\mathbf{x}) = -1 \text{ for other } \mathbf{x} \in \mathcal{X}\}$.

Now define,
$$\mathcal{H}_m = \bigcup_{\mathbf{x}_1, \dots, \mathbf{x}_m \in \mathcal{X}} \mathcal{H}(\mathbf{x}_1, \dots, \mathbf{x}_m).$$

Finally define,
$$\mathcal{H} = \bigcup_{\text{all integers } m \geq 1} \mathcal{H}_m.$$

Is the class $\mathcal{H}$ PAC learnable (under realizability)? If yes, derive an upper bound on its sample complexity. Supplement your responses with proofs.

**Solution**

$\mathcal{H}$ is not PAC learnable under realizability because its VC dimension is infinite. To show this we just need to show any finite set $\{x_1, \dots, x_m\} \subset \mathcal{X}$ is shattered by $\mathcal{H}$. For any $\{x_1, \dots, x_m\}$ with labels $\{y_1, \dots, y_m\}$, let $I = \{i \in [m] : y_i = 1\}$, any $h \in \mathcal{H}(x_{i \in I}) \subset \mathcal{H}$ will satisfy $h(x_i) = y_i$ (if $y_i$'s all equal to $-1$, pick $x^* \notin \{x_1, \dots, x_m\}, h \in \mathcal{H}(x^*) \subset \mathcal{H}$). By the fundamental theorem of statistical learning theory, $\mathcal{H}$ is not PAC learnable.

### Visual Description
Text-only slide.

---
## Page 12
### Content
8) **No Free Lunch Theorem [15 pts]**

Consider any hypothesis class $\mathcal{H}$.
(a) (10 pts) Recall the no free lunch theorem: If the sample size $n$ and the feature space $\mathcal{X}$ satisfy $n < \frac{|\mathcal{X}|}{2}$ then, for any learning algorithm (whose output is denoted by $h$) it must be that
$$\mathbb{P}(R(h) \geq \frac{1}{8}) \geq \frac{1}{7}.$$
Use the statement of the no free lunch theorem to prove that if the VC dimension of $\mathcal{H}$ is infinite, then $\mathcal{H}$ is not PAC learnable under realizability.

(b) (5 pts) Prove that if $\mathcal{H}$ is not PAC learnable under the realizability assumption then it is not agnostically PAC learnable.

**Solution**

(a) We prove by contradiction. Let $\epsilon = \delta = 0.1$ and assume $\mathcal{H}$ is PAC learnable under realizability with sample complexity $n^*$. Since the VC-dimension of $\mathcal{H}$ is infinite, there exists $2n^* + 1$ points, $\{x_1, \dots, x_{2n^*+1}\}$ that are shattered by $\mathcal{H}$. Let $\mathcal{X} = \{x_1, \dots, x_{2n^*+1}\}$, then there exists $h^* \in \mathcal{H}$ such that $h^*(x_i) = y_i$ for any set of labels $\{y_1, \dots, y_{2n^*+1}\}$. Apply the no free lunch theorem, the output $h$ with any learning algorithm on $n^*$ samples will yield a significant risk:
$$\mathbb{P}(R(h) \geq \frac{1}{8}) \geq \frac{1}{7}.$$
However, since $\mathcal{H}$ is PAC learnable, there exists a learning algorithm on $n^*$ samples such that:
$$\mathbb{P}(R(h) \geq 0.1) \leq 0.1.$$
A contradiction!

(b) We prove the contrapositive: if $\mathcal{H}$ is agnostically PAC learnable then it is PAC learnable under realizability. If $\mathcal{H}$ is agnostically PAC learnable, there exists a learning algorithm such that for every $\epsilon > 0, \delta > 0$, there exists some positive integer $n^*(\epsilon, \delta)$ such that for every distribution $D$ on $\mathcal{X} \times \mathcal{Y}$, the output $h$ from running the algorithm on $n \geq n^*(\epsilon, \delta)$ samples from $D$ satisfies: $R_{(D)}(h) \leq \min_{h' \in \mathcal{H}} R_{(D)}(h') + \epsilon$ with probability at least $1 - \delta$. Now under the realizability setting, we can restrict $D$ on $\mathcal{X}$ (this works because $(x, h^*(x))$ is a special case of $\mathcal{X} \times \mathcal{Y}$), and we have $\min_{h' \in \mathcal{H}} R_{(D)}(h') = R_{(D)}(h^*) = 0$. That is, for every distribution $D$ on $\mathcal{X}$, running the algorithm on $n \geq n^*(\epsilon, \delta)$ samples from $D$, the output $h$ satisfies: $R_{(D)}(h) \leq \epsilon$ with probability at least $1 - \delta$. This shows that $\mathcal{H}$ is also PAC learnable under realizability.

### Visual Description
Text-only slide.
