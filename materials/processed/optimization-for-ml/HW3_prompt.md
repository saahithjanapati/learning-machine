# Homework 3: Optimization for Machine Learning

Source: `materials/archive/S26_10_725_HW3_Student.pdf`
Duplicate equivalents: `S26_10_725_HW3_Student.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 10

## Page 1
### Content
# Homework 3
## CMU 10-725: Optimization for Machine Learning
OUT: Tuesday, Mar 10th, 2026
DUE: Tuesday, Mar 31st, 2026, 11:59pm

### START HERE: Instructions
* **Collaboration policy:** Collaboration on solving the homework is allowed, after you have thought about the problems on your own. To remind you, many questions in this HW have solutions that are very easy to find online (and many are from previous versions of this course). It is also OK to get clarification (but not solutions) from books or online resources, again after you have thought about the problems on your own. There are two requirements: first, cite your collaborators fully and completely (e.g., "Jane explained to me what is asked in Question 2.1"). Second, write your solution *independently*: close the book and all of your notes, and send collaborators out of the room, so that the solution comes from you only.
* **Submitting your work:**
    * **Gradescope:** For the written problems such as short answer, multiple choice, derivations, proofs, or plots, we will be using the Gradescope. The best way to format your homework is by using the Latex template released in the handout and writing your solutions in Latex. However, submissions can be handwritten onto the template, but should be labeled and clearly legible. If your writing is not legible, you will not be awarded marks.
    Regrade requests can be made after the homework grades are released, however this gives the TA the opportunity to regrade your entire paper, meaning if additional mistakes are found then points will be deducted.
    * **Programming:** You should submit all code used to solve the programming aspect of the homework to the corresponding 'Programming' submission slot on Gradescope. If you do not do this, you will not get any credit for any of the programming section irrespective of the plots and values submitted to the 'Written' submission slot.

1

### Visual Description
Text-only slide.

---
## Page 2
### Content
# 1 Proximal Algorithms [15 points] (Nuoya)
Suppose our goal is to minimize $f(x) = g(x) + h(x)$ where $h$ is convex, but possibly non-smooth, and $g$ is $\beta$-smooth and $\alpha$-strongly-convex.

## 1.1 The Descent Lemma [10 points]
Show the following analogue to the main descent lemma holds under strong convexity. Recall the definition of the gradient mapping $G_\eta(x)$. Suppose $\eta \le 1/\beta$, we can try to prove that for any $x, z$,
$$f(x - \eta G_\eta(x)) \le f(z) + G_\eta(x)^T(x - z) - \frac{\eta}{2}\|G_\eta(x)\|_2^2 - \frac{\alpha}{2}\|x - z\|_2^2. \quad (1)$$
We will decompose this problem into several subproblems.

(a) [3 points] Using the smoothness property, prove that
$$g(x - \eta G_\eta(x)) \le g(x) + \nabla g(x)^T(-\eta G_\eta(x)) + \frac{\eta^2 \beta}{2}\|G_\eta(x)\|_2^2.$$

(b) [3 points] Using convexity at the prox point to show that
$$h(x - \eta G_\eta(x)) \le h(z) - \eta\|G_\eta(x)\|_2^2 + \eta \nabla g(x)^T G_\eta(x) - (G_\eta(x) - \nabla g(x))^T(z - x).$$

(c) [4 points] Finally, prove the original question (1) by combining (a) and (b).

## 1.2 Convergence Rate [5 points]
Now, show that the proximal iterations with step-size $\eta = 1/\beta$ have a linear rate of convergence, i.e. letting $\kappa = \beta/\alpha$, we have the guarantee that,
$$\|x^k - x^*\|_2^2 \le (1 - 1/\kappa)^k \|x^0 - x^*\|_2^2.$$

**Hint:** This proof should be similar to the analysis of proximal-GD convergence rate covered in class in the non-strongly-convex case, and to the GD convergence rate covered in class in the strongly-convex case.

It is once again worth appreciating the gains of using the prox. method. The function $f$ is non-smooth, but structured. The prox. method gives us the same guarantees that we would obtain from optimizing just $g$ (which is smooth and strongly convex), and is a useful method provided we can compute the prox. for $h$ quickly.

2

### Visual Description
Text-only slide.

---
## Page 3
### Content
# 2 Approximating MaxCut with SDPs [28 pts] (Zixin)
In this problem, we will explore a very cool and surprising application of semidefinite programming: creating an approximation to MaxCut. This result is due to Goemans and Williamson (1994). Herein, we'll explore a simplified version of the problem to see just how powerful semidefinite programming is. We first describe the (simplified) problem of MaxCut. **Please be consistent with the use of the following definitions and notations in your solution to facilitate grading.**

Let $G = (V, E)$ be an undirected graph, a **cut** of $G$, is a tuple $C = (S, \bar{S})$, such that $S \subset V$ and $\bar{S} = V \setminus S$. We say that the **value** of a cut $C$, denoted as $|C|$, is the number of edges that travel between $S$ and $\bar{S}^1$. Formally,
$$|C| \triangleq \frac{1}{2} \sum_{(u,v) \in E} \mathbf{1}_{\{u \in S\}} \mathbf{1}_{\{v \in \bar{S}\}}.$$
Then, the **maximum cut** is $\max_{\text{Cut } C} |C| = \max_{S \subset V} |(S, V \setminus S)|$. For example, the maximum cut of the following graphs is 3.

![Graph examples showing cuts](graph_cut_example.png)

It is known that MaxCut is NP-hard. Thus, in this problem, we will explore a series continuous relaxations to MaxCut: an LP, QP, and SDP.

## A First Attempt [12 pts]
Let us first consider an LP to solve MaxCut:
$$\begin{aligned} \text{maximize} \quad & \sum_{(i,j) \in E} e_{ij}, \\ \text{s.t.} \quad & e_{ij} \le v_i + v_j, \\ & e_{ij} \le 2 - v_i - v_j, \\ & e_{ij}, v_i \in [0, 1]. \end{aligned} \quad (2)$$

(a) [2 pts] Show that any cut of $G$ can be represented as a feasible point of this LP.
(b) [2 pts] Show that the LP preserves order. For cuts $C_1, C_2$, if $|C_1| \le |C_2|$, then there exists settings $e_{ij}$ such that the LP objective values satisfy the same ordering.
(c) [3 pts] What is the solution to this LP? Make explicit both the optimal value and the settings $e_{ij}, v_i$.
(d) [3 pts] A caveat to our LP is when $v_i \in (0, 1)$. It is unclear an actual cut can be constructed. One approach to do *randomized rounding* (RR) where we independently place vertex $i$ in $S$ with probability $v_i$ (and in $\bar{S}$ with probability $1 - v_i$). Show that

---
$^1$To build intuition about the problem, it may be helpful to think about which types of graphs allow the maximum cut to be achieved. (i.e. the maximum cut is equal to $|E|$).

3

### Visual Description
The page contains text and two small diagrams of graphs. Each graph has four nodes. A red dashed line passes through the edges of the graph, illustrating a "cut" that separates the nodes into two sets. The text explains the MaxCut problem and introduces a Linear Programming (LP) relaxation.

---
## Page 4
### Content
RR applied to the optimal LP solution achieves (in expectation) at least 50% of the objective of the maximum cut.
(e) [2 pts] Based on these results, comment on the quality of our LP relaxation. [*Hint: Does solving this LP really finds a maximum cut?*]

## A Second Attempt [9 pts]
Intuitively, our previous relaxation was "too relaxed." Our LP can be solved in polynomial time, but the resulting solution is not useful: by widening the feasible space, the optimal solution became invariant to $G$, which makes no sense! As a result, we now continue in the other direction, we tighten the feasible space by reducing the degrees-of-freedom and making more complex the optimization objective. Consider now the following optimization program:
$$\begin{aligned} \text{minimize} \quad & \sum_{(i,j) \in E} u_i u_j, \\ \text{s.t.} \quad & u_i \in [-1, 1]. \end{aligned} \quad (3)$$

(a) [1 pts] Is Equation 3 a reasonable relaxation? i.e. Argue that any cut of $G$ can be represented as a feasible point of this program.
(b) [3 pts] Show that Equation 3 can be written as a quadratic program: there exists $Q, G_1, G_2 \in \mathbb{R}^{|V| \times |V|}$ and $g_1, g_2 \in \mathbb{R}$ such that
$$\begin{aligned} \text{minimize} \quad & u^T Q u, \\ \text{s.t.} \quad & G_1 u \le g_1, \\ & G_2 u \le g_2. \end{aligned} \quad (4)$$
Is this a convex optimization problem? [*Hint: It will be helpful to consider the adjacency matrix*]
(c) [3 pts] Consider the following graph $G$ on three vertices with adjacency matrix
$$A = \begin{pmatrix} 0 & 1 & 1 \\ 1 & 0 & 0 \\ 1 & 0 & 0 \end{pmatrix}.$$
Show that the optimal solution to Equation 3 recovers the maximum cut *without* any randomized rounding (RR), by explicitly exhibiting an optimal $u$ and verifying its optimality.
(d) [2 pts] For the graph from the previous part, comment on where its maximum cut solution sits relative to the feasible region of Equation 3. Then compare this quadratic relaxation with our previous LP relaxation: what is one advantage and one drawback? [*Hint: If we were optimizing (3) using projected gradient descent, why might it be troublesome if the optimum is on/near the boundary?*]

4

### Visual Description
Text-only slide.

---
## Page 5
### Content
## Third Time's the Charm [7 pts]
It turns out that we are *almost there*. If we re-parameterize the problem and allow $u_i$ to be a unit vector, we obtain the following relaxation of MaxCut:
$$\begin{aligned} \text{maximize} \quad & \sum_{(i,j) \in E} (1 - u_i \cdot u_j), \\ \text{s.t.} \quad & \|u_i\|_2 = 1 \quad \forall i \in V, \end{aligned} \quad (5)$$
where $u_i \in \mathbb{R}^d$ for some $d > 1$. Write (5) as a semidefinite program in terms of a matrix variable $X \in \mathbb{R}^{|V| \times |V|}$. *Hint: Consider the Gram matrix $X$ with entries $X_{ij} = u_i \cdot u_j$. Explain why $X \succeq 0$ and how the unit-norm constraints translate into linear constraints on $X$.*

## Randomized Rounding of $u_i$
Now that we have solved this beautifully formulated SDP, you might be wondering
1. How do we translate these vectors back into an actual cut of $G$?
2. Can we guarantee that this procedure yields a better solution than the LP?

The answers to these questions are bit out of scope, but for the curious:
1. We can perform a variant of randomized rounding: first, uniformly at random sample a random unit vector $v$. We put $i \in S$ if $v \cdot u_i \ge 0$ and in $\bar{S}$, otherwise.
2. We can actually show that in expectation our SDP can achieve $\approx 87.8\%$ of the maximum cut (the proof of this requires further re-parameterizing the SDP a little bit). This constant is actually called the *Goemans-Williamson Constant*. Notably, if $P \neq NP$, this is in some sense the best approximation achievable in polynomial time.

5

### Visual Description
Text-only slide.

---
## Page 6
### Content
# 3 KKT [15 Points] (Michael)
Consider the following problem:
$$\begin{aligned} \text{max} \quad & -x_1^2 + 4x_1 - \frac{3}{2}x_2^2 + 7x_2 - x_1x_2 - 9 + \ln(x_1) + \ln(x_2) \\ \text{s.t.} \quad & x_1x_2 \ge 4 \\ & 2x_1 = x_2 \end{aligned}$$
Find the optimal solution with Lagrange multipliers and using the KKT conditions. Can you verify the KKT point is indeed a maximum?

*(Remark: notice that the problem is not convex, so Slater's condition may not apply. This problem is designed to let you practice solving for KKT conditions, and you may get full points by finding all KKT points and selecting the optimal one. If you want to apply some alternatives to Slater's condition, we suggest looking into Linear Independence Constraint Qualification (LICQ). )*

6

### Visual Description
Text-only slide.

---
## Page 7
### Content
# 4 Convex Approximations [20 pts] (Canary)
You are given the *samples* of a function $f$ at certain points, for e.g. assume you are given the values $f(0), f(1), f(2), \dots, f(N - 1)$. Our goal is to approximate $f$ with a **convex** function $g$. It turns out (though we will not prove it) that the best convex approximation, given just the $N$ function values, will be piecewise linear, so we will take $g$ to a be piecewise linear function defined by it's values $g_i = g(i)$ at the points $i = 0, \dots, N - 1$, this problem can now be solved with a linear program. Lastly, we concretely aim to minimize the absolute error of $g$ with respect to $f$.
$$\text{Error} = \sum_{i=0}^{N-1} |g_i - f(i)|$$

(a) (10 pts) Formulate the linear program that solves this problem. (Hint: *Think about how you can represent convexity with a piecewise linear function*)

(b) (10 pts) Formulate the corresponding dual to the linear program from part (a) and give an interpretation of the the dual variables and how they relate to convexity.

7

### Visual Description
Text-only slide.

---
## Page 8
### Content
# 5 Implementation [25 points] (Johnna, Julia)
**Note:** Your full code should be submitted to the Homework 3 Programming Gradescope submission slot otherwise you will not get credit for the programming section.

Consider the following logistic regression objective: Given training data points and labels $\{x_i, y_i\}_{i=1}^N$ where $x_i \in \mathbb{R}^d$ and $y_i \in \{-1, 1\}$, define the logistic regression function as:
$$f(w) = \frac{1}{N} \sum_{i=1}^N \log(1 + e^{-y_i \langle w, x_i \rangle})$$
Now, you will implement stochastic gradient descent algorithm to optimize this objective function. The dataset is provided along with the handout as `samples.csv` which has $N$ rows and $d + 1$ columns (the last columns are the labels). Here $d = 100$ and $N = 1000$.

Implement the stochastic gradient descent algorithm (starting from $w_0 = 0$). You will consider four different batch sizes $b \in \{1, 10, 100, 1000\}$ and four different learning rates $\eta \in \{1, 0.3, 0.1, 0.03\}$ (there are 16 total combinations). For each combination, run (mini-batch) SGD for 500 iterations, 25 times. Plot the average function value versus the number of iterations, where the average is computed over the 25 runs. Specifically, say at iteration $t$, you observe function values $f_t^{(1)}, f_t^{(2)}, \dots, f_t^{(25)}$, the average function value is given by:
$$\hat{f}_t = \frac{1}{25} \sum_{i=1}^{25} f_t^{(i)}$$
Now answer the following questions:
1. [5 points] Compute the optimum value $f^* = \text{argmin}_w f(w)$ using CVX. Report this value.
2. [10 points] Fill in the table with the average value observed at the end of 500 iterations (up to the first 6 decimals). By the notation above, this is $\hat{f}_{500}$.

| $b \downarrow / \eta \rightarrow$ | 1 | 0.3 | 0.1 | 0.03 |
| :--- | :--- | :--- | :--- | :--- |
| 1 | | | | |
| 10 | | | | |
| 100 | | | | |
| 1000 | | | | |

3. [5 points] For each setting of $\eta$, plot 4 curves. Each curve is the variation of the difference between the average function value and $f^*$ with iterations (i.e., $\hat{f}_t - f^*$ with $t$) for a specific batch size $b$. You need to show 4 plots for this part. Briefly explain your results.
4. [5 points] For each setting of $b$, plot 4 curves. Each curve is the variation of the difference between the average function value and $f^*$ with iterations (i.e., $\hat{f}_t - f^*$ with $t$) for a specific step size $\eta$. You need to show 4 plots for this part. Briefly explain why you might be seeing the curves that you do.

8

### Visual Description
The page contains text describing a programming implementation task for logistic regression using SGD. It includes a mathematical formula for the objective function and the average function value. There is also a 4x4 table for students to fill in their results for different batch sizes ($b$) and learning rates ($\eta$).

---
## Page 9
### Content
5. Add the code you wrote for this section to the verbatim section below as well as uploading it to the Programming section of Gradescope:

Your code here

Some further specifications / answers to FAQs:
* Do not import any premade packages that implement SGD or other such gradient calculations.
* For any given run, at every iteration, you are expected to sample a subset of data points from a uniform distribution over the complete set *with replacement*. The number of points you sample is equal to the size of the mini-batch for that run.
* The function value is to be computed over the whole dataset i.e., you have to compute $f$ above. You should not compute it over the current mini-batch alone.
* It is fine to *check* your solution with an autodiff package, but your Python code should explicitly compute the gradient at each step based on your computation.
* All plots must be in log-scale on the y-axis, with proper labelling and legends.

9

### Visual Description
Text-only slide.

---

## Page 10
### Content
# 6 Collaboration Questions

1. (a) Did you receive any help whatsoever from anyone in solving this assignment? **Solution** Yes / No.
(b) If you answered ‘yes’, give full details (e.g. “Jane Doe explained to me what is asked in Question 3.4”)
    
    **Solution**
    | |
    | :--- |
    | |

2. (a) Did you give any help whatsoever to anyone in solving this assignment? **Solution** Yes / No.
(b) If you answered ‘yes’, give full details (e.g. “I pointed Joe Smith to section 2.3 since he didn’t know how to proceed with Question 2”)

    **Solution**
    | |
    | :--- |
    | |

3. (a) Did you find or come across code that implements any part of this assignment? **Solution** Yes / No.
(b) If you answered ‘yes’, give full details (book & page, URL & location within the page, etc.).

    **Solution**
    | |
    | :--- |
    | |

10

### Visual Description
This page contains three numbered questions regarding collaboration and external resources. Each question includes a "Yes / No" selection and a large rectangular box labeled "Solution" for providing detailed explanations.

---
