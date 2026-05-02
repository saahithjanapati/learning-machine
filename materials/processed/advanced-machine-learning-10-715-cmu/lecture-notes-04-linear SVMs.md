# lecture-notes-04-linear SVMs

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/lecture-notes-04-linear SVMs.pdf`
Duplicate equivalents: `lecture-notes-04-linear SVMs.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `MAX_TOKENS`
Pages: 3

## Page 1
### Content
**10-715 Advanced Introduction to Machine Learning**  
**Fall 2019**  
**Lecture 4: September 9, 2019**  
**Lecturer: Nihar B. Shah**  
**Scribes: Saurabh Garg**

**Note:** LaTeX template courtesy of UC Berkeley EECS dept.  
**Disclaimer:** These notes have not been subjected to the usual scrutiny reserved for formal publications. They may be distributed outside this class only with the permission of the Instructor.

Today, we will begin our discussion on Support Vector Machines.

**Lemma 4.1** *Consider a hyperplane defined as $\{v \in \mathbb{R}^d | v^T w + b = 0\}$ for some $(w, b) \in \mathbb{R}^d \times \mathbb{R}$ with $\|w\|_2 = 1$, then the distance from any point $x \in \mathbb{R}^d$ to the hyperplane is given by $|w^T x + b|$.*

**Proof:** Distance of any point $x \in \mathbb{R}^d$ to the hyperplane is $\min_{v \in \mathbb{R}^d} \|x - v\|_2$ s.t. $w^T v + b = 0$. Let $v_0 = x - (w^T x + b)w$. Clearly, $\|x - v_0\|_2 = |w^T x + b|$. Now for any other point $u \in \mathbb{R}^d$ s.t. $u^T w + b = 0$,
$$
\begin{aligned}
\|x - u\|_2^2 &= \|x - v_0 + v_0 - u\|_2^2 \\
&= \|x - v_0\|_2^2 + \|v_0 - u\|_2^2 + 2(x - v_0)^T(v_0 - u) \\
&\ge \|x - v_0\|_2^2 + 2(w^T x + b)w^T(v_0 - u) \\
&= \|x - v_0\|_2^2
\end{aligned}
$$
Finally, one can verify that $v_0$ lies in the hyperplane, thereby completing the proof. $\blacksquare$

For intuition please refer to the figure-4.1.

![Figure 4.1: Distance of a point v from the plane with b=0]

**Figure 4.1:** Distance of a point $v$ from the plane with $b=0$

4-1

### Visual Description
A geometric diagram illustrating the distance from a point to a hyperplane. It shows a 2D coordinate system with axes. A solid line passing through the origin represents the hyperplane (since $b=0$). A point labeled $x$ is shown in the space. A vector $w$ is drawn starting from the origin, perpendicular to the hyperplane. The projection of $x$ onto the hyperplane is labeled $v_0$. A dashed line connects $x$ and $v_0$. Another dashed line connects $x$ to its projection on the vector $w$, labeled $w^T x$.

---

## Page 2
### Content
4-2  
Lecture 4: September 9, 2019

### 4.1 Support Vector Machines (SVMs)
Under the assumption that the data is linearly separable, hard SVM problem is
$$
\begin{aligned}
(w, b) = \arg \max_{w,b \in \mathbb{R}^d \times \mathbb{R}} \min_{i \in [n]} |w^T x_i + b| \quad (4.1) \\
\text{s.t. } \|w\|_2 = 1, \quad y_i(w^T x_i + b) > 0 \quad \forall i \in [n]
\end{aligned}
$$

#### 4.1.1 Primal form (Hard SVM)
$$
\begin{aligned}
(w_0, b_0) = \arg \min_{w,b \in \mathbb{R}^d \times \mathbb{R}} \frac{1}{2} \|w\|_2^2 \quad (4.2) \\
\text{s.t. } y_i(w^T x_i + b) \ge 1 \quad \forall i \in [n]
\end{aligned}
$$
The output is $\hat{w} = \frac{w_0}{\|w_0\|_2} \quad \hat{b} = \frac{b_0}{\|w_0\|_2}$

**Lemma 4.2** *Solution to 4.2 i.e. $(\hat{w}, \hat{b})$ is optimal for 4.1*

**Proof:** Let $(w_1, b_1)$ be an optimal solution for 4.1 and $\gamma^* = \min_{i \in [n]} y_i(w_1^T x_i + b_1)$. As $\|\hat{w}\| = 1$, $\hat{w}$ satisfies constraints of 4.1.
From 4.2, we have $y_i(\|w_0\|\hat{w}^T x + \|w_0\|\hat{b}) \ge 1$ and hence $\min_{i \in [n]} y_i(\hat{w}^T x + \hat{b}) \ge \frac{1}{\|w_0\|}$. Suppose $(\hat{w}, \hat{b})$ are suboptimal for 4.1, then $\gamma^* > \frac{1}{\|w_0\|}$.
Thus in 4.2 with $w = \frac{w_1}{\gamma^*}, b = \frac{b_1}{\gamma^*}$ and the objective becomes $\|w\|_2^2 = \frac{\|w_1\|_2^2}{\gamma^{*2}} = \frac{1}{\gamma^{*2}} < \|w_0\|_2^2$ which contradicts the optimality of $w_0$ for 4.2. $\blacksquare$

**Note:** Using 4.2 is more useful as the objective is convex.

#### 4.1.2 Lagrangian and the Dual form
$$
\mathcal{L}(w, b, \alpha) = \frac{1}{2} \|w\|_2^2 + \sum_{i=1}^n \alpha_i(1 - y_i(w^T x_i + b))
$$
with $\alpha_i \ge 0$. The constraints are linear and the primal is convex, and thus Slater's conditions hold true implying strong duality. The dual is of the form $\max_{\alpha} \min_{w,b \in \mathbb{R}^{d+1}} \mathcal{L}(w, b, \alpha)$. As the Lagrangian is convex function, we obtain the minima but taking its derivative and equating with zero i.e. $\frac{\partial \mathcal{L}(w,b,\alpha)}{\partial [w,b]} = 0$. Solving we get
$$
w - \sum_{i=1}^n \alpha_i y_i x_i = 0 \quad (4.3)
$$
$$
\sum_{i=1}^n \alpha_i y_i = 0 \quad (4.4)
$$
From KKT conditions we have, $\alpha_i(y_i(x_i^T w + b) - 1) = 0 \quad \forall i \in [n]$.

### Visual Description
Text-only slide.

---

## Page 3
### Content
Lecture 4: September 9, 2019  
4-3

**Note:** The points for which $y_i(x_i^T w + b) \neq 1$, we have $\alpha_i = 0$ and hence these points don't show up in $w$. And the points with $\alpha_i \neq 0$ are called Support Vectors.

Substitute $w = \sum_{i=1}^n \alpha_i x_i y_i$ in $\mathcal{L}$, we get
$$
\mathcal{L}(w, b, \alpha) = \frac{1}{2} \|\sum_{i=1}^n \alpha_i x_i y_i\|_2^2 + \sum_{i=1}^n \alpha_i - \sum_{i, j} y_i y_j \alpha_i \alpha_j x_i^T x_j
$$

**Dual Form:**
$$
\begin{aligned}
\max_{\alpha \in \mathbb{R
