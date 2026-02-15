# Jan29_GD

Source: `materials/archive/Jan29_GD.pdf`
Duplicate equivalents: `Jan29_GD.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `strict full-PDF single-call conversion`
Finish reason: `STOP`
Pages: 85
## Page 1
### Content
Optimization for Machine Learning
Gradient Descent
Slide 1
Carnegie Mellon University

### Visual Description
The slide is a title page with text only. The main title "Optimization for Machine Learning" is in blue, and the subtitle "Gradient Descent" is in red. The Carnegie Mellon University logo is in the bottom right corner.

---

## Page 2
### Content
Goal
We will focus on the unconstrained minimization problem:
Let $f : \mathbb{R}^n \to \mathbb{R}$ be differentiable.
We want to solve
$$\min_{x \in \mathbb{R}^n} f(x),$$
i.e., find $x^\star$ such that $f(x^\star) = \min_{x \in \mathbb{R}^n} f(x)$
Slide 2
Carnegie Mellon University

### Visual Description
The slide contains text and mathematical equations defining the goal of unconstrained minimization. There are no notable visuals beyond the text.

---

## Page 3
### Content
Gradient Descent
Gradient Descent Method:
Choose initial $x^{(0)} \in \mathbb{R}^n$
Repeat:
$$x^{(t)} = x^{(t-1)} - \eta_t \cdot \nabla f(x^{(t-1)}), \quad t = 1, 2, 3, \dots$$
Stop at some point
Definition [step size]
$\eta_t > 0$ is the step size at iteration $t$.
Slide 3
Carnegie Mellon University

### Visual Description
The slide presents the algorithm for Gradient Descent and defines the step size. It contains text and mathematical equations. There are no notable visuals beyond the text.

---

## Page 4
### Content
Gradient Descent Examples
Slide 4
Carnegie Mellon University

### Visual Description
The slide shows two 3D surface plots illustrating gradient descent paths.
- **Left Plot:** A saddle-shaped surface with four colored paths (green, red, blue, purple) starting from different points on the upper edges and converging toward a central low point. Each path consists of a series of connected line segments with a circle at the starting point.
- **Right Plot:** A more complex, wavy surface with four colored paths (green, red, blue, orange) starting from various points and moving toward local or global minima. The paths follow the contours of the surface.
Both plots are enclosed in a 3D wireframe box.

---

## Page 5
### Content
Motivation for Gradient Descent
If we were at a point $x$ and moved in a direction $v$ with a small step-size $\eta > 0$,
$$f(x + \eta v) \approx f(x) + \eta v^T \nabla f(x) \quad \text{[Using 1st order Taylor series]}$$
If we want $f(x + \eta v)$ to be less than $f(x)$, then we want
$$\eta v^T \nabla f(x) < 0$$
Definition [descent directions]:
A direction $v$ which makes a larger than 90-degree angle with the gradient (i.e. where $v^T \nabla f(x) < 0$) is typically called a "descent direction".
Slide 5
Carnegie Mellon University

### Visual Description
The slide provides a mathematical motivation for gradient descent using Taylor series expansion. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 6
### Content
Motivation for Gradient Descent
If we want $f(x + \eta v)$ to be less than $f(x)$, then we want $\eta v^T \nabla f(x) < 0$
Lemma [ Negative gradient is a descent direction]:
The negative gradient ($v = -\nabla f(x)$) is a descent direction.
and for this direction the term $v^T \nabla f(x)$ is most negative (amongst vectors $v$ with a given norm)
Slide 6
Carnegie Mellon University

### Visual Description
The slide continues the motivation for gradient descent, stating that the negative gradient is the steepest descent direction. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 7
### Content
Gradient Descent as Minimizing the Local Linear Approximation
A more interesting way to motivate GD is to consider minimizing a regularized linear approximation to our function (locally):
$$x^{t+1} = \arg \min_{y \in \mathbb{R}^d} f(x^t) + \nabla f(x^t)^T (y - x^t) + \frac{1}{2\eta} \|y - x^t\|_2^2$$
Quadratic approximation, replacing the $\nabla^2 f(x)$ in the Taylor series by $\frac{1}{\eta} I$
The second term behaves as a regularizer to ensure that (for small $\eta$) our update $y$ remains close to our current iterate $x^t$
Slide 7
Carnegie Mellon University

### Visual Description
The slide presents an alternative motivation for gradient descent as minimizing a regularized local linear approximation. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 8
### Content
Gradient Descent as Minimizing the Local Linear Approximation
$$x^{t+1} = \arg \min_{y \in \mathbb{R}^d} f(x^t) + \nabla f(x^t)^T (y - x^t) + \frac{1}{2\eta} \|y - x^t\|_2^2$$
This local optimization problem has a closed form solution:
$$0 = \nabla f(x^t) + \frac{1}{\eta} (x^{t+1} - x^t)$$
$$\Rightarrow x^{t+1} = x^t - \eta \nabla f(x^t)$$
This is the Gradient Descent update rule.
Slide 8
Carnegie Mellon University

### Visual Description
The slide derives the gradient descent update rule from the local optimization problem introduced on the previous page. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 9
### Content
Quadratic Approximation
Blue point is $x^t$, red point is
$$x^{t+1} = \arg \min_{y \in \mathbb{R}^n} f(x^t) + \nabla f(x^t)^T (y - x^t) + \|y - x^t\|_2^2 / (2\eta)$$
Slide 9
Carnegie Mellon University

### Visual Description
The slide features a 2D plot illustrating the quadratic approximation concept.
- A solid black curve represents the function $f(x)$.
- A dashed black parabola represents the quadratic approximation of the function at a specific point.
- A blue dot on the solid curve marks the current iterate $x^t$.
- A red dot at the minimum of the dashed parabola marks the next iterate $x^{t+1}$.
- A solid black line tangent to the curve at the blue point represents the linear part of the approximation.

---

## Page 10
### Content
Outline
- How to choose step size $\eta_t$
- Definition of Convergence Rates
- Example: GD for the Least Squares Problem
- Convergence under Lipschitz gradient (nonconvex functions)
- Convergence under Lipschitz gradient (convex functions)
- Convergence under strong convexity
Slide 10
Carnegie Mellon University

### Visual Description
The slide provides an outline of the lecture topics in a bulleted list. There are no notable visuals beyond the text.

---

## Page 11
### Content
Choosing the Step Size
Slide 11
Carnegie Mellon University

### Visual Description
This is a section header slide with text only.

---

## Page 12
### Content
Fixed Step Size
Here we simply select a fixed step-size $\eta$, and run the algorithm with that fixed step-size.
Issues:
- If you select the step-size too large, then GD can diverge.
- If you select the step-size too small, it might take a very long time to converge.
Slide 12
Carnegie Mellon University

### Visual Description
The slide discusses the use of a fixed step size and its potential issues. It contains text only.

---

## Page 13
### Content
Fixed Step Size
Suppose we have $f(x) = x^2/2$. Initialize GD at $x^0 = 1$.
$$x^{t+1} = x^t - \eta \nabla f(x^t) = x^t - \eta x^t = (1 - \eta) x^t$$
- Let step-size $\eta = 3$. The iterates will be $x^t = 1, -2, 4, -8, \dots$ (i.e. GD will diverge).
- Let $\eta = 0.00001$. Then GD would take $10^5$ steps to converge.
- If $\eta = 1$, the GD would converge in 1 step. $x^t = 1, 0, 0, \dots$
We would like to
1) understand this issue better (i.e. what properties of a function make certain step-sizes "too big", "too small", or "best"), and
2) find different ways to tune the step-size.
Slide 13
Carnegie Mellon University

### Visual Description
The slide provides a simple numerical example to illustrate how different fixed step sizes affect convergence. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 14
### Content
Too Big Fixed Step Size
Simply take $\eta_t = \eta$ for all $t = 1, 2, 3, \dots$, can diverge if $\eta$ is too big.
Consider $f(x) = (10x_1^2 + x_2^2)/2$, gradient descent after 8 steps:
Slide 14
Carnegie Mellon University

### Visual Description
The slide shows a contour plot of an elliptical function $f(x) = (10x_1^2 + x_2^2)/2$.
- The x and y axes range from -20 to 20.
- The center of the ellipses, the optimum, is marked with an asterisk (*).
- A path of 8 gradient descent steps is shown starting from the top right.
- The path zig-zags wildly across the narrow dimension of the ellipses, moving further away from the center with each step, illustrating divergence due to a step size that is too large.
- Iterates are marked with open circles connected by straight lines.

---

## Page 15
### Content
Too Small Fixed Step Size
Can be slow if $\eta$ is too small.
Same example, gradient descent after 100 steps:
Slide 15
Carnegie Mellon University

### Visual Description
The slide shows the same contour plot as Page 14.
- A path of 100 gradient descent steps is shown starting from the top.
- The path appears as a thick, solid black line because the steps are very small and closely spaced.
- The path moves very slowly toward the center and has not reached the optimum (*) after 100 steps, illustrating slow convergence due to a step size that is too small.

---

## Page 16
### Content
Correct Fixed Step Size
Same example, gradient descent after 40 appropriately sized steps:
Slide 16
Carnegie Mellon University

### Visual Description
The slide shows the same contour plot as Page 14.
- A path of 40 gradient descent steps is shown starting from the top right.
- The path moves directly and efficiently toward the center.
- Iterates are marked with open circles that get progressively closer together as they approach the optimum (*), illustrating successful convergence with an appropriate step size.

---

## Page 17
### Content
Exact Line Search
Once we've committed to a direction (in GD this is the direction of the negative gradient), one might consider solving the following 1D optimization problem to determine the best step-size:
$$\eta^t = \arg \min_{s \ge 0} f(x^t - s \nabla f(x^t))$$
It's often computationally not possible to do this minimization exactly, so we resort to approximations.
A popular approximation is the "back-tracking".
[See the slides in the Appendix]
Slide 17
Carnegie Mellon University

### Visual Description
The slide introduces the concept of exact line search for choosing the step size. It contains text and an equation. There are no notable visuals beyond the text.

---

## Page 18
### Content
Definition of Convergence Rates
Slide 18
Carnegie Mellon University

### Visual Description
This is a section header slide with text only.

---

## Page 19
### Content
Convergence Rates
Definition [Linear/geometric convergence rate]:
A sequence $\{s_i\}$ exhibits linear (a.k.a geometric) convergence if
$$\lim_{i \to \infty} s_i = \bar{s}, \text{ and}$$
$$0 < \delta \doteq \lim_{i \to \infty} \frac{|s_{i+1} - \bar{s}|}{|s_i - \bar{s}|} < 1$$
Example:
$s_i = cq^i, \quad 0 < q < 1 \quad$ **exponential** (log is linear)
Proof:
$$\frac{|s_{i+1} - \bar{s}|}{|s_i - \bar{s}|} = \frac{cq^{i+1}}{cq^i} = q < 1$$
Slide 19
Carnegie Mellon University

### Visual Description
The slide defines linear convergence rate and provides an exponential sequence as an example. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 20
### Content
Convergence Rates
Linear rate:
$$0 < \delta \doteq \lim_{i \to \infty} \frac{|s_{i+1} - \bar{s}|}{|s_i - \bar{s}|} < 1$$
Superlinear rate: $\delta = 0$ Example: $s_i = \frac{c}{i!}$
[faster than linear]
Proof: $\frac{|s_{i+1} - \bar{s}|}{|s_i - \bar{s}|} = \frac{ci!}{c(i+1)!} = \frac{1}{i+1} \to 0$
Sublinear rate: $\delta = 1$ Example: $s_i = \frac{c}{i^a}, \quad a > 0 \quad$ **polynomial**
[slower than linear]
Proof: $\frac{|s_{i+1} - \bar{s}|}{|s_i - \bar{s}|} = \frac{ci^a}{c(i+1)^a} = \left(\frac{i}{i+1}\right)^a \to 1$
Slide 20
Carnegie Mellon University

### Visual Description
The slide defines superlinear and sublinear convergence rates with examples and proofs. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 21
### Content
Convergence Rates
Linear rate: $0 < \lim_{i \to \infty} \frac{|s_{i+1} - \bar{s}|}{|s_i - \bar{s}|} = \delta < 1$
Example: $s_i = q^i, \quad 0 < q < 1 \quad$ **exponential**
Quadratic rate: (log-log is linear)
$$\lim_{i \to \infty} \frac{|s_{i+1} - \bar{s}|}{|s_i - \bar{s}|^2} < \infty$$
Example: $s_i = q^{2^i}, \quad 0 < q < 1 \quad$ **double-exponential**
Proof: $\frac{|s_{i+1} - \bar{s}|}{|s_i - \bar{s}|^2} = \frac{q^{2^{i+1}}}{(q^{2^i})^2} = \frac{q^{2 \cdot 2^i}}{q^{2 \cdot 2^i}} = 1 < \infty$
Slide 21
Carnegie Mellon University

### Visual Description
The slide defines quadratic convergence rate and provides a double-exponential sequence as an example. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 22
### Content
Intuition for Linear and Quadratic Convergence
Linear rate:
$$0 < \lim_{i \to \infty} \frac{|s_{i+1} - \bar{s}|}{|s_i - \bar{s}|} = \delta < 1$$
Therefore,
$$|s_{i+1} - \bar{s}| \approx \delta |s_i - \bar{s}|$$
Quadratic rate:
$$\lim_{i \to \infty} \frac{|s_{i+1} - \bar{s}|}{|s_i - \bar{s}|^2} = \delta < \infty$$
Therefore,
$$|s_{i+1} - \bar{s}| \approx \delta |s_i - \bar{s}|^2$$
Slide 22
Carnegie Mellon University

### Visual Description
The slide provides intuitive approximations for linear and quadratic convergence. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 23
### Content
GD for the Least Squares Problem
Slide 23
Carnegie Mellon University

### Visual Description
This is a section header slide with text only.

---

## Page 24
### Content
Reminder
Let $f(x) \doteq x^T Qx + a^T x + b$ where $Q \succeq 0$.
$f$ is strongly convex iff $\alpha \le 2\lambda_{min}(Q)$
$f$ if $\beta$ smooth iff $\beta \ge 2\lambda_{max}(Q)$
Slide 24
Carnegie Mellon University

### Visual Description
The slide provides a reminder of the conditions for strong convexity and smoothness for quadratic functions. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 25
### Content
The Least Squares Problem
It is worth studying gradient descent in simple examples to understand the type of behavior we might expect.
Suppose we are solving a least squares problem:
$$\min_x \frac{1}{2} \|Ax - b\|_2^2$$
where $S \doteq A^T A$ has a bigger than 1 condition number, i.e.
$$1 < \kappa(S) \doteq \frac{\lambda_{max}(S)}{\lambda_{min}(S)}$$
Since $\lambda_{min} > 0$, the function is strongly convex
Since $\lambda_{max} < \infty$, the function is $\beta$ smooth.
Our problem is both smooth and strongly convex (the most favorable case for GD).
Slide 25
Carnegie Mellon University

### Visual Description
The slide introduces the least squares problem as an example for studying gradient descent behavior. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 26
### Content
The Least Squares Problem
Here we know the solution in closed form:
$$\hat{x} \doteq \arg \min_x \frac{1}{2} \|Ax - b\|_2^2$$
$$\hat{x} = (A^T A)^{-1} A^T b$$
In particular, $\hat{x}$ is the only solution to the linear system $(A^T A)x = A^T b$.
Here we want to avoid computing and inverting the covariance matrix, and instead we simply use GD on the least squares objective.
Slide 26
Carnegie Mellon University

### Visual Description
The slide discusses the closed-form solution for the least squares problem and the motivation for using gradient descent instead. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 27
### Content
The Least Squares Problem
$$\hat{x} \doteq \arg \min_x \frac{1}{2} \|Ax - b\|_2^2 \quad \hat{x} = (A^T A)^{-1} A^T b \quad (A^T A)\hat{x} - A^T b = 0.$$
The gradient of the objective, is $\nabla f(x) = A^T (Ax - b) = -A^T (b - Ax)$
The gradient descent iteration is simply, $x^{t+1} = x^t + \eta A^T (b - Ax^t)$
$$\Rightarrow x^{t+1} - \hat{x} = x^t - \hat{x} + \eta A^T (b - Ax^t)$$
$$= x^t - \hat{x} + \eta A^T (b - Ax^t) + \underbrace{\eta ((A^T A)\hat{x} - A^T b)}_{0}$$
$$= x^t - \hat{x} + \eta A^T b - \eta A^T Ax^t + \eta (A^T A)\hat{x} - \eta A^T b$$
$$= x^t - \hat{x} - \eta A^T Ax^t + \eta (A^T A)\hat{x}$$
$$= [I - \eta A^T A](x^t - \hat{x})$$
Slide 27
Carnegie Mellon University

### Visual Description
The slide derives the error update rule for gradient descent on the least squares problem. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 28
### Content
The Least Squares Problem
$$x^{t+1} - \hat{x} = [I - \eta A^T A](x^t - \hat{x})$$
After $k$ iterations:
$$x^k - \hat{x} = [I - \eta A^T A]^k (x^0 - \hat{x})$$
Therefore, (since $\|AB\|_2 \le \|A\|_2 \|B\|_2$)
$$\|x^k - \hat{x}\|_2 \le \|I - \eta A^T A\|_2^k \cdot \|x^0 - \hat{x}\|_2$$
So if we can ensure that the operator norm term $< 1$, we will have a rapid (linear = geometric) decay of the distance between our iterate and the optimal solution.
Slide 28
Carnegie Mellon University

### Visual Description
The slide analyzes the convergence of gradient descent for the least squares problem in terms of the distance to the optimal solution. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 29
### Content
The Least Squares Problem
Lemma Let $S \doteq A^T A$
If $\eta = \frac{2}{\lambda_{max}(S) + \lambda_{min}(S)}$ fixed, then
$$\|x^k - \hat{x}\|_2 \le \|I - \eta A^T A\|_2^k \cdot \|x^0 - \hat{x}\|_2$$
$$\le \left(\frac{\kappa(S) - 1}{\kappa(S) + 1}\right)^k \|x^0 - \hat{x}\|_2 \quad \text{Linear convergence rate}$$
Proof [Appendix]
Slide 29
Carnegie Mellon University

### Visual Description
The slide presents a lemma regarding the linear convergence rate of gradient descent for the least squares problem with an optimal fixed step size. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 30
### Content
The Least Squares Problem
Sometimes we care about the value of the objective function at our iterates, i.e. we would like to upper bound $f(x_k) - f(\hat{x})$.
Lemma
Let $f(x) = \frac{1}{2} \|Ax - b\|_2^2 = \frac{1}{2} (x^T A^T Ax + b^T b - 2b^T Ax) \quad \hat{x} = (A^T A)^{-1} A^T b$
If $\eta = \frac{2}{\lambda_{max}(S) + \lambda_{min}(S)}$ fixed, then
$f(x_k) - f(\hat{x}) = \frac{1}{2} (x_k - \hat{x})^T A^T A (x_k - \hat{x})$ Proof: [Next slides]
$\le \frac{\lambda_{max}(S)}{2} \|x_k - \hat{x}\|_2^2 \quad \text{[Since } z^T A^T Az \le \lambda_{max}(A^T A) z^T z, \forall z \text{]}$
$\le \frac{\lambda_{max}(S)}{2} \left(\frac{\kappa(S) - 1}{\kappa(S) + 1}\right)^{2k} \|x^0 - \hat{x}\|_2^2 \quad \text{Linear convergence rate}$
Slide 30
Carnegie Mellon University

### Visual Description
The slide provides an upper bound on the objective function error for gradient descent on the least squares problem. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 31
### Content
Number of Steps Needed
$$f(x_k) - f(\hat{x}) \le \frac{\lambda_{max}(S)}{2} \left(\frac{\kappa(S) - 1}{\kappa(S) + 1}\right)^{2k} \|x^0 - \hat{x}\|_2^2 = O(c^{2k}) \quad \text{Linear convergence rate}$$
A consequence of the linear convergence rate is that if we want the error to be less than $\epsilon$, then it suffices to take $k \sim \log(1/\epsilon)$ steps.
Proof
$$f(x_k) - f(\hat{x}) = O(c^{2k}) < \epsilon \quad 0 < c < 1$$
$$2k \log(c) < \log(\epsilon) \quad \text{here } \log(c) < 0$$
$$k > \frac{1}{2 \log(c)} \log(\epsilon) = O \log(\frac{1}{\epsilon})$$
Slide 31
Carnegie Mellon University

### Visual Description
The slide derives the number of steps needed to reach a certain error level $\epsilon$ given a linear convergence rate. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 32
### Content
Proof of Lemma $f(x_k) - f(\hat{x}) = \frac{1}{2} (x_k - \hat{x})^T A^T A (x_k - \hat{x})$
Proof: $f(x_k) = \frac{1}{2} (x_k^T A^T Ax_k + b^T b - 2b^T Ax_k)$
$f(\hat{x}) = \frac{1}{2} (\hat{x}^T A^T A\hat{x} + b^T b - 2b^T A\hat{x})$
Therefore,
$f(x_k) - f(\hat{x}) = \frac{1}{2} (x_k^T A^T Ax_k + b^T b - 2b^T Ax_k) - \frac{1}{2} (\hat{x}^T A^T A\hat{x} + b^T b - 2b^T A\hat{x})$
$= \frac{1}{2} x_k^T A^T Ax_k - b^T Ax_k - \frac{1}{2} \hat{x}^T A^T A\hat{x} + b^T A\hat{x}$
$= \left[\frac{1}{2} (x_k - \hat{x})^T A^T A (x_k - \hat{x}) + x_k^T A^T A\hat{x} - \frac{1}{2} \hat{x}^T A^T A\hat{x}\right] - b^T Ax_k - \frac{1}{2} \hat{x}^T A^T A\hat{x} + b^T A\hat{x}$
$= \frac{1}{2} (x_k - \hat{x})^T A^T A (x_k - \hat{x}) + x_k^T A^T A\hat{x} - \hat{x}^T A^T A\hat{x} - b^T Ax_k + b^T A\hat{x}$
$\Rightarrow$ It is enough to prove that $x_k^T A^T A\hat{x} - \hat{x}^T A^T A\hat{x} - b^T Ax_k + b^T A\hat{x} = 0$
Slide 32
Carnegie Mellon University

### Visual Description
The slide begins the proof of the lemma regarding the objective function error for the least squares problem. It contains mathematical derivations. There are no notable visuals beyond the text.

---

## Page 33
### Content
Proof [Continued]
$\Rightarrow$ It is enough to prove that $x_k^T A^T A\hat{x} - \hat{x}^T A^T A\hat{x} - b^T Ax_k + b^T A\hat{x} = 0$
Let us use the fact that $\hat{x} = (A^T A)^{-1} A^T b$.
$x_k^T A^T A\hat{x} - \hat{x}^T A^T A\hat{x} - b^T Ax_k + b^T A\hat{x} =$
$= x_k^T A^T A(A^T A)^{-1} A^T b - b^T A(A^T A)^{-1} A^T A(A^T A)^{-1} A^T b - b^T Ax_k + b^T A(A^T A)^{-1} A^T b$
$= x_k^T A^T b - b^T A(A^T A)^{-1} A^T b - b^T Ax_k + b^T A(A^T A)^{-1} A^T b$
$= x_k^T A^T b - b^T Ax_k$
$= 0$ ■
Slide 33
Carnegie Mellon University

### Visual Description
The slide completes the proof started on the previous page. It contains mathematical derivations. There are no notable visuals beyond the text.

---

## Page 34
### Content
GD on Smooth Functions
Slide 34
Carnegie Mellon University

### Visual Description
This is a section header slide with text only.

---

## Page 35
### Content
Nonsmooth Problem:
Example when Decaying Step Size Needed
Let $f(x) = |x| \quad \nabla f(x) = \begin{cases} 1 & \text{if } x > 0 \\ -1 & \text{if } x < 0 \end{cases}$
GD: $x^{t+1} = x^t - \eta \nabla f(x^t) = \begin{cases} x^t - \eta & \text{if } x^t > 0 \\ x^t + \eta & \text{if } x^t < 0 \end{cases}$
In this case, $f$ is not a smooth function [i.e. the gradient is not continuous.]
The GD iterates will bounce around the optimum, and will never converge.
To get convergence, we need $\eta = \eta_t \to 0$.
Slide 35
Carnegie Mellon University

### Visual Description
The slide provides an example of a non-smooth function where a fixed step size fails to converge, necessitating a decaying step size. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 36
### Content
GD on Smooth Functions
Assume that our objective function $f$ is twice-differentiable and $\beta$-smooth.
Goal: try to understand the behaviour of GD in three settings which are increasingly "nicer":
1) Possibly non-convex function $f$ which is twice-differentiable and $\beta$-smooth.
2) Convex function $f$ which is twice-differentiable and $\beta$-smooth.
3) Convex function $f$ which is twice-differentiable, $\beta$-smooth, and is additionally $\alpha$-strongly convex.
Note: Most of these results don't require twice-differentiability, but the proofs are sometimes a bit easier when we have twice-differentiability.
Slide 36
Carnegie Mellon University

### Visual Description
The slide outlines the goals for analyzing gradient descent on smooth functions under different assumptions. It contains text only.

---

## Page 37
### Content
Smooth, Possibly Non-Convex Functions
Slide 37
Carnegie Mellon University

### Visual Description
This is a section header slide with text only.

---

## Page 38
### Content
Smooth, Possibly Non-Convex Functions
For a not necessarily convex problem, we should not expect to be able to find a global optimum point with GD.
Instead we will settle for finding a point with small gradient norm, i.e. a point $x$ for which $\|\nabla f(x)\|^2 \le \epsilon$
Slide 38
Carnegie Mellon University

### Visual Description
The slide discusses the objective of gradient descent for non-convex functions. It contains text and an equation. There are no notable visuals beyond the text.

---

## Page 39
### Content
The main descent lemma
The main descent lemma:
Let $f$ be differentiable, $\beta$-smooth, possibly non-convex function.
For any fixed step-size $\eta \le 2/\beta$, the GD algorithm is a descent algorithm.
i.e. $f(x^{t+1}) \le f(x^t)$
For any $\eta \le 1/\beta$ it further satisfies,
$$f(x^{t+1}) \le f(x^t) - \frac{\eta}{2} \|\nabla f(x^t)\|_2^2$$
Proof : [Appendix]
Slide 39
Carnegie Mellon University

### Visual Description
The slide presents the main descent lemma for smooth functions. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 40
### Content
Smooth, Possibly Non-Convex Functions
$$f(x^{t+1}) \le f(x^t) - \frac{\eta}{2} \|\nabla f(x^t)\|_2^2$$
Remarks:
1) If $\|\nabla f(x^t)\|_2 > 0$, then we have strict descent, i.e. $f(x^{t+1}) < f(x^t)$
2) If the gradient is large (in norm), then an iteration of GD decreases the function by a large amount.
3) Just by smoothness (no convexity), we already see that even with a fixed step-size, GD doesn't suffer from the "bouncing around" problem it encounters when applied to the (non-smooth) function $|x|$.
Slide 40
Carnegie Mellon University

### Visual Description
The slide provides remarks on the implications of the descent lemma. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 41
### Content
Smooth, Possibly Non-Convex Functions
Main Theorem [smooth, possibly nonconvex]:
Let $f$ be a differentiable, $\beta$-smooth, possibly non-convex function.
Let $x^*$ be any minimizer of $f$
Then GD with fixed step-size $\eta = \frac{1}{\beta}$ has the property that for any $k > 0$, within $k$ iterations it will reach a point $\tilde{x}$ such that
$$\|\nabla f(\tilde{x})\|_2 \le \sqrt{\frac{2\beta}{k} (f(x^0) - f(x^*))}. \quad \text{sublinear convergence!}$$
In other words,
$$\min_{i=0,\dots,k} \|\nabla f(x^{(i)})\|_2 \le \sqrt{\frac{2\beta}{k} (f(x^0) - f(x^*))} = O\left(\frac{\sqrt{\beta}}{\sqrt{k}}\right)$$
Proof: [Appendix]
Slide 41
Carnegie Mellon University

### Visual Description
The slide presents a theorem on the sublinear convergence rate of gradient descent for smooth, possibly non-convex functions. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 42
### Content
Smooth, Possibly Non-Convex Functions
$$\min_{i=0,\dots,k} \|\nabla f(x^{(i)})\|_2 \le \sqrt{\frac{2\beta}{k} (f(x^0) - f(x^*))} = O\left(\frac{\sqrt{\beta}}{\sqrt{k}}\right)$$
Note:
The result is completely dimension-free, i.e. the error rate doesn't depend at all on the dimension of $x$.
Slide 42
Carnegie Mellon University

### Visual Description
The slide highlights that the convergence rate for smooth functions is dimension-free. It contains text and an equation. There are no notable visuals beyond the text.

---

## Page 43
### Content
Gradient Descent on Smooth Convex Functions
Slide 43
Carnegie Mellon University

### Visual Description
This is a section header slide with text only.

---

## Page 44
### Content
GD on Smooth Convex Functions
It's worth understanding how convexity might help us.
We have already shown that GD will find a point with a small gradient norm.
We know that for convex functions we have the upper bound:
$f(x) + \nabla f(x)^T (y - x) \le f(y), \forall x, \forall y.$
$f(x) \le f(y) - \nabla f(x)^T (y - x)$
$f(x) \le f(y) + \nabla f(x)^T (x - y),$
$f(x) - f(y) \le \nabla f(x)^T (x - y),$
Slide 44
Carnegie Mellon University

### Visual Description
The slide introduces the first-order condition for convexity and its implications.
- A plot shows a convex function $f(y)$ as a curved line.
- A tangent line at point $(x, f(x))$ represents the linear approximation $f(x) + \nabla f(x)^T (y - x)$.
- The plot visually demonstrates that for a convex function, the linear approximation always lies below the function itself.

---

## Page 45
### Content
GD on Smooth Convex Functions
$f(x) - f(y) \le \nabla f(x)^T (x - y),$
Therefore,
$f(x) - f(x^*) \le \nabla f(x)^T (x - x^*) \le \|\nabla f(x)\| \cdot \|x - x^*\|, \quad$ by Cauchy-Schwarz
We can see that if the gradient is small, and the domain is bounded $\|x - x^*\| < K < \infty$, then we must be close to the optimum (in function value) - this is one of the key properties of convex functions.
Slide 45
Carnegie Mellon University

### Visual Description
The slide explains how convexity relates small gradient norms to proximity to the optimum in terms of function value. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 46
### Content
GD on Smooth Convex Functions
Main Theorem [GD Converge rate on smooth convex functions]:
Let $f$ be a differentiable, $\beta$-smooth, convex function.
Let $x^*$ be any minimizer of $f$.
Then GD with step-size $\eta = \frac{1}{\beta}$ has the property that for any $k > 0$, within $k$ iterations it will reach a point $x^k$ such that
$$f(x^k) - f(x^*) \le \frac{\beta \|x^0 - x^*\|^2}{2k} = O\left(\frac{\beta}{k}\right) \quad \text{sublinear convergence!}$$
Proof: [Appendix]
Slide 46
Carnegie Mellon University

### Visual Description
The slide presents a theorem on the sublinear convergence rate of gradient descent for smooth convex functions. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 47
### Content
GD on Smooth Convex Functions
$$f(x^k) - f(x^*) \le \frac{\beta \|x^0 - x^*\|^2}{2k} = O\left(\frac{\beta}{k}\right)$$
Remarks:
Now we obtain a global guarantee (i.e. GD will find a point as good as the best point $x^*$)
The guarantee, $O(\frac{1}{k})$, is faster than the non-convex rate ($O(\frac{1}{\sqrt{k}})$), but still much slower than the one we derived earlier for quadratics ($O(c^{2k})$).
To obtain $\epsilon$-error we need to take roughly $1/\epsilon$ steps.
Slide 47
Carnegie Mellon University

### Visual Description
The slide provides remarks on the convergence rate for smooth convex functions compared to other cases. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 48
### Content
Gradient Descent on Smooth, Strongly Convex Functions
Slide 48
Carnegie Mellon University

### Visual Description
This is a section header slide with text only.

---

## Page 49
### Content
Reminder
A twice differentiable function $f$ having $\beta$ Lipschitz continuous gradient and being $\alpha$ strongly convex can be summarized as:
$$\alpha I \preceq \nabla^2 f(x) \preceq \beta I \text{ for all } x \in \mathbb{R}^n,$$
for constants $0 < \alpha$ and $0 < \beta$
Corollary
$0 < \alpha < \beta$
$1 < \frac{\beta}{\alpha}$
Slide 49
Carnegie Mellon University

### Visual Description
The slide provides a reminder of the definition of strong convexity and smoothness in terms of the Hessian matrix. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 50
### Content
GD on Smooth, Strongly Convex Functions
Let $f$ be a $\beta$-smooth, and $\alpha$-strongly convex function.
The condition number of $f$ is defined by $1 < \kappa \doteq \frac{\beta}{\alpha}$.
Main Theorem [GD convergence rate for strongly convex functions]:
Let $f$ be a differentiable, $\beta$-smooth, $\alpha$-strongly convex function.
Let $x^*$ be the minimizer of $f$.
[Strongly convex functions have unique minimum].
Then GD with step-size $\eta = \frac{1}{\beta}$ has the property that for any $k > 0$, within $k$ iterations it will reach a point $x^k$ such that
$$\|x^k - x^*\|_2^2 \le \left(1 - \frac{1}{\kappa}\right)^k \|x^0 - x^*\|_2^2 = O(c^k) \quad \text{linear convergence!}$$
Proof [Appendix]
Slide 50
Carnegie Mellon University

### Visual Description
The slide presents a theorem on the linear convergence rate of gradient descent for smooth, strongly convex functions. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 51
### Content
GD on Smooth, Strongly Convex Functions
$$\|x^k - x^*\|_2^2 \le \left(1 - \frac{1}{\kappa}\right)^k \|x^0 - x^*\|_2^2 = O(c^k) \quad \text{(B1)}$$
Remark
This linear convergence is much faster than GD under just smoothness and convexity (i.e. without strong convexity)
Slide 51
Carnegie Mellon University

### Visual Description
The slide emphasizes the speed of linear convergence for strongly convex functions. It contains text and an equation. There are no notable visuals beyond the text.

---

## Page 52
### Content
GD on Strongly Convex Functions
Corollary:
Let $f$ be a differentiable, $\beta$-smooth, $\alpha$-strongly convex function.
Let $x^*$ be any minimizer of $f$.
Then GD with step-size $\eta = \frac{1}{\beta}$ has the property that for any $k > 0$, within $k$ iterations it will reach a point $x^k$ such that
$$f(x^k) - f(x^*) \le \frac{\beta}{2} \|x^k - x^*\|_2^2 \le \frac{\beta}{2} \left(1 - \frac{1}{\kappa}\right)^k \|x^0 - x^*\|_2^2 = O(c^k)$$
linear convergence!
Proof of Corollary: [Next slide]
Slide 52
Carnegie Mellon University

### Visual Description
The slide presents a corollary regarding the linear convergence of the objective function value for strongly convex functions. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 53
### Content
GD on Strongly Convex Functions
We already know:
$$\|x^k - x^*\|_2^2 \le \left(1 - \frac{1}{\kappa}\right)^k \|x^0 - x^*\|_2^2 = O(c^k) \quad \text{(B1)}$$
Proof of Corollary:
We already know: $|f(y) - f(x) - \nabla f(x)^T (y - x)| \le \frac{\beta}{2} \|x - y\|^2, \forall x, y$
Therefore, $|f(x^k) - f(x^*) - \nabla f(x^*)^T (x^k - x^*)| \le \frac{\beta}{2} \|x^k - x^*\|^2$
$\Rightarrow |f(x^k) - f(x^*)| \le \frac{\beta}{2} \|x^k - x^*\|^2 \quad$ (since $\nabla f(x^*) = 0$)
$\Rightarrow |f(x^k) - f(x^*)| \le \frac{\beta}{2} \|x^k - x^*\|_2^2 \le \frac{\beta}{2} \left(1 - \frac{1}{\kappa}\right)^k \|x^0 - x^*\|_2^2 = O(c^k)$
Because of (B1) ■
Slide 53
Carnegie Mellon University

### Visual Description
The slide provides the proof for the corollary presented on the previous page. It contains mathematical derivations. There are no notable visuals beyond the text.

---

## Page 54
### Content
Thanks for your Attention ☺
Slide 54
Carnegie Mellon University

### Visual Description
This is a concluding slide with text and a smiley face icon.

---

## Page 55
### Content
Appendix
Slide 55
Carnegie Mellon University

### Visual Description
This is a section header slide for the appendix.

---

## Page 56
### Content
The Least Squares Problem
Lemma Let $S \doteq A^T A$
If $\eta = \frac{2}{\lambda_{max}(S) + \lambda_{min}(S)}$ fixed, then
$$\|x^k - \hat{x}\|_2 \le \|I - \eta A^T A\|_2^k \cdot \|x^0 - \hat{x}\|_2$$
$$\le \left(\frac{\kappa(S) - 1}{\kappa(S) + 1}\right)^k \|x^0 - \hat{x}\|_2 \quad \text{Linear convergence rate}$$
Proof [Next Slides]
Slide 56
Carnegie Mellon University

### Visual Description
The slide repeats the lemma for the least squares problem convergence rate, signaling the start of its proof in the appendix. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 57
### Content
The Least Squares Problem
$$\|x^k - \hat{x}\|_2 \le \|I - \eta A^T A\|_2^k \cdot \|x^0 - \hat{x}\|_2$$
Since $S = A^T A$ is symmetric, $\|S\|_2 = \lambda_{max}(S)$
Lemma If $\eta = \frac{2}{\lambda_{max}(S) + \lambda_{min}(S)}$, then
$\|I - \eta(A^T A)\|_2 = \lambda_{max}(1 - \eta S) = 1 - \eta \lambda_{min}(S) = 1 - \frac{2\lambda_{min}(S)}{\lambda_{max}(S) + \lambda_{min}(S)}$
$= \frac{\lambda_{max}(S) - \lambda_{min}(S)}{\lambda_{max}(S) + \lambda_{min}(S)}$
$= \frac{\kappa(S) - 1}{\kappa(S) + 1} \quad$ where $\kappa(S) = \frac{\lambda_{max}(S)}{\lambda_{min}(S)}$
$\kappa(S) + 1 = \frac{\lambda_{max}(S) + \lambda_{min}(S)}{\lambda_{min}(S)} \quad \kappa(S) - 1 = \frac{\lambda_{max}(S) - \lambda_{min}(S)}{\lambda_{min}(S)}$
Slide 57
Carnegie Mellon University

### Visual Description
The slide provides the mathematical derivation for the operator norm term in the least squares convergence lemma. It contains equations. There are no notable visuals beyond the text.

---

## Page 58
### Content
The Least Squares Problem
$$\|x^k - \hat{x}\|_2 \le \|I - \eta A^T A\|_2^k \cdot \|x^0 - \hat{x}\|_2$$
$$\|I - \eta(A^T A)\|_{op} = \frac{\kappa(S) - 1}{\kappa(S) + 1} \quad \text{where } \kappa(S) = \frac{\lambda_{max}(S)}{\lambda_{min}(S)}$$
Corollary
If $\eta = \frac{2}{\lambda_{max}(S) + \lambda_{min}(S)}$ fixed, then
$$\|x^k - \hat{x}\|_2 \le \|I - \eta A^T A\|_2^k \cdot \|x^0 - \hat{x}\|_2$$
$$\le \left(\frac{\kappa(S) - 1}{\kappa(S) + 1}\right)^k \|x^0 - \hat{x}\|_2 \quad \text{Linear convergence rate}$$
■
Slide 58
Carnegie Mellon University

### Visual Description
The slide concludes the proof for the least squares convergence lemma. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 59
### Content
Backtracking line search
Slide 59
Carnegie Mellon University

### Visual Description
This is a section header slide for backtracking line search.

---

## Page 60
### Content
Backtracking line search
▪ One way to adaptively choose the step size is to use backtracking line search
▪ The idea of backtracking line-search is to:
try a large step-size, and reduce it by some factor if it’s too big
We pick two parameters: $0 < \alpha \le 1/2$ [threshold to check if $\eta$ is too big]
and $0 < \beta < 1$ [factor to reduce $\eta$].
At each iteration $t$, we initialize step-size $\eta = 1$.
(a) If $f(x^t - \eta \nabla f(x^t)) > f(x^t) - \alpha \eta \|\nabla f(x^t)\|_2^2$,
then $f$ wouldn’t decrease enough in this iteration,
reduce $\eta$, i.e. let $\eta := \beta \eta$ and go back to step (a).
(b) Otherwise, take a step, i.e. set $x^{t+1} = x^t - \eta \nabla f(x^t)$
Often in practice, taking $\alpha = 0.3$ and $\beta = 0.5$ works reasonably well.
Slide 60
Carnegie Mellon University

### Visual Description
The slide explains the algorithm for backtracking line search. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 61
### Content
Intuition Behind Backtracking Line Search
If $f(x^t - \eta \nabla f(x^t)) > f(x^t) - \alpha \eta \|\nabla f(x^t)\|_2^2$, then reduce $\eta$.
We will see later that if your function is “nice”, then you should expect to make about $\eta \|\nabla f(x^t)\|_2^2$ amount of progress in one step of GD if $\eta$ is small enough.
The backtracking line search simply says if you are making up to an $\alpha$ factor of this amount of progress, you should be content and take a step.
Slide 61
Carnegie Mellon University

### Visual Description
The slide provides intuition for the condition used in backtracking line search. It contains text and an equation. There are no notable visuals beyond the text.

---

## Page 62
### Content
Backtracking Results
Backtracking picks up roughly the right step size (13 steps):
Here $\beta = 0.8$ (B & V recommend $\beta \in (0.1, 0.8)$)
Slide 62
Carnegie Mellon University

### Visual Description
The slide shows the same contour plot as Page 14.
- A path of 13 gradient descent steps using backtracking line search is shown starting from the top right.
- The path zig-zags slightly but converges quickly and efficiently to the optimum (*), illustrating the effectiveness of backtracking.
- Iterates are marked with open circles connected by straight lines.

---

## Page 63
### Content
Intuition Behind Backtracking Line Search
$0 < \beta < 1, 0 < \alpha \le 1/2$ fixed. At each iteration, start with step-size $t = 1$
while $f(x - t \nabla f(x)) > f(x) - \alpha t \|\nabla f(x)\|_2^2$ (step-size is too big), update $t = \beta t$
step-size is too big
(From B & V page 465)
Slide 63
Carnegie Mellon University

### Visual Description
The slide features a 2D plot illustrating the backtracking condition.
- The x-axis represents the step size $t$, and the y-axis represents the function value.
- A solid curve represents the function $f(x - t \nabla f(x))$.
- A dashed line starting from $t=0$ represents the linear approximation $f(x) - t \|\nabla f(x)\|_2^2$.
- Another dashed line with a shallower slope represents the threshold $f(x) - \alpha t \|\nabla f(x)\|_2^2$.
- The point $t_0$ on the x-axis marks where the function curve intersects the threshold line.
- A red bracket on the x-axis to the right of $t_0$ is labeled "step-size is too big", indicating the region where the backtracking condition is met and the step size must be reduced.

---

## Page 64
### Content
Multivariate Taylor’s Theorem
Lemma [Multivariate Taylor’s Theorem]
For any $x, y \in \mathbb{R}^d$, there is a $z$ on the line joining $x$ to $y$ such that,
$$f(y) = f(x) + \nabla f(x)^T (y - x) + \frac{1}{2} (y - x)^T \nabla^2 f(z) (y - x).$$
Slide 64
Carnegie Mellon University

### Visual Description
The slide states the multivariate version of Taylor's theorem. It contains text and an equation. There are no notable visuals beyond the text.

---

## Page 65
### Content
Proof of “The main descent lemma”
Slide 65
Carnegie Mellon University

### Visual Description
This is a section header slide for the proof of the main descent lemma.

---

## Page 66
### Content
The main descent lemma
The main descent lemma:
Let $f$ be differentiable, $\beta$-smooth, possibly non-convex function.
For any fixed step-size $\eta \le 2/\beta$, the GD algorithm is a descent algorithm.
i.e. $f(x^{t+1}) \le f(x^t)$
For any $\eta \le 1/\beta$ it further satisfies,
$$f(x^{t+1}) \le f(x^t) - \frac{\eta}{2} \|\nabla f(x^t)\|_2^2$$
Proof : [Next slides]
Slide 66
Carnegie Mellon University

### Visual Description
The slide repeats the main descent lemma, signaling the start of its proof. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 67
### Content
Proof of “The main descent lemma”
Proof of “The main descent lemma”:
We need to prove: $f(x^{t+1}) \le f(x^t) - \frac{\eta}{2} \|\nabla f(x^t)\|_2^2$
From $\beta$-smoothness: $f(y) \le f(x) + \nabla f(x)^T (y - x) + \frac{\beta}{2} \|y - x\|^2$
Therefore,
$f(x^{t+1}) \le f(x^t) + \nabla f(x^t)^T (x^{t+1} - x^t) + \frac{\beta}{2} \|x^{t+1} - x^t\|^2$
By the GD update: $x^{t+1} = x^t - \eta \nabla f(x^t)$
$f(x^{t+1}) \le f(x^t) - \eta \nabla f(x^t)^T \nabla f(x^t) + \frac{\beta}{2} \|\eta \nabla f(x^t)\|^2$
$= f(x^t) - \eta \|\nabla f(x^t)\|^2 + \frac{\beta \eta^2}{2} \|\nabla f(x^t)\|^2$
$= f(x^t) - \left(\eta - \frac{\beta \eta^2}{2}\right) \|\nabla f(x^t)\|^2$
Slide 67
Carnegie Mellon University

### Visual Description
The slide begins the proof of the main descent lemma using the smoothness property. It contains mathematical derivations. There are no notable visuals beyond the text.

---

## Page 68
### Content
Proof of “The main descent lemma”
We need to prove: $f(x^{t+1}) \le f(x^t) - \frac{\eta}{2} \|\nabla f(x^t)\|_2^2$
We already know: $f(x^{t+1}) \le f(x^t) - \left(\eta - \frac{\beta \eta^2}{2}\right) \|\nabla f(x^t)\|^2$
Therefore, if $0 < \eta \le \frac{2}{\beta}$, then $0 < \beta \le \frac{2}{\eta} \quad \left(\eta - \frac{\beta \eta^2}{2}\right) \ge \left(\eta - \frac{2\eta^2}{2\eta}\right) \ge 0$
$\Rightarrow f(x^{t+1}) \le f(x^t)$ ■
Similarly, if $0 < \eta \le \frac{1}{\beta}$, then $0 < \beta \le \frac{1}{\eta} \quad \left(\eta - \frac{\beta \eta^2}{2}\right) \ge \left(\eta - \frac{\eta^2}{2\eta}\right) \ge \frac{\eta}{2}$
$\Rightarrow f(x^{t+1}) \le f(x^t) - \frac{\eta}{2} \|\nabla f(x^t)\|_2^2$ ■
Slide 68
Carnegie Mellon University

### Visual Description
The slide completes the proof of the main descent lemma for different step size ranges. It contains mathematical derivations. There are no notable visuals beyond the text.

---

## Page 69
### Content
Proof of the Main Theorem for
Smooth, Possibly Non-Convex Functions
Slide 69
Carnegie Mellon University

### Visual Description
This is a section header slide for the proof of the main theorem for smooth, possibly non-convex functions.

---

## Page 70
### Content
Smooth, Possibly Non-Convex Functions
Main Theorem [smooth, possibly nonconvex]:
Let $f$ be a differentiable, $\beta$-smooth, possibly non-convex function.
Let $x^*$ be any global minimizer of $f$.
Then GD with fixed step-size $\eta = \frac{1}{\beta}$ has the property that for any $k > 0$, within $k$ iterations it will reach a point $\tilde{x}$ such that
$$\|\nabla f(\tilde{x})\|_2 \le \sqrt{\frac{2\beta}{k} (f(x^0) - f(x^*))}. \quad \text{sublinear convergence!}$$
In other words,
$$\min_{i=0,\dots,k} \|\nabla f(x^{(i)})\|_2 \le \sqrt{\frac{2\beta}{k} (f(x^0) - f(x^*))} = O\left(\frac{\sqrt{\beta}}{\sqrt{k}}\right)$$
Proof: [Next slides]
Slide 70
Carnegie Mellon University

### Visual Description
The slide repeats the main theorem for smooth, possibly non-convex functions, signaling the start of its proof. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 71
### Content
Proof of Main Theorem
[Smooth, Possibly Non-Convex Functions]
Proof of the Main Theorem:
We want to prove that for some $t \in \{0, 1, \dots, k\} : \|\nabla f(x^t)\|_2 \le \sqrt{\frac{2\beta}{k} (f(x^0) - f(x^*))}$.
For contradiction, assume that in all iterations from $t \in \{0, 1, \dots, k\}$ we have that,
$\|\nabla f(x^t)\|_2 > \sqrt{\frac{2\beta}{k} (f(x^0) - f(x^*))}$. Therefore, $\frac{\|\nabla f(x^t)\|_2^2}{2\beta} > \frac{1}{k} (f(x^0) - f(x^*))$.
By the 'descent lemma' with $\eta = 1/\beta : f(x^{t+1}) \le f(x^t) - \frac{1}{2\beta} \|\nabla f(x^t)\|_2^2$
And thus, in each iteration $t \in \{0, \dots, k - 1\}$
$f(x^{t+1}) < f(x^t) - \frac{f(x^0) - f(x^*)}{k}$
$f(x^{t+1}) - f(x^t) < -\frac{f(x^0) - f(x^*)}{k}$
Slide 71
Carnegie Mellon University

### Visual Description
The slide begins a proof by contradiction for the convergence theorem of smooth, possibly non-convex functions. It contains mathematical derivations. There are no notable visuals beyond the text.

---

## Page 72
### Content
Proof of Main Theorem
[Smooth, Possibly Non-Convex Functions]
Proof of the Main Theorem (continued):
For each iteration $t \in \{0, \dots, k - 1\} \quad f(x^{t+1}) - f(x^t) < -\frac{f(x^0) - f(x^*)}{k}$
Calculating the telescoping sum from $t = 0$ through $k - 1$, we have,
$f(x^k) - f(x^0) < -(f(x^0) - f(x^*))$
$f(x^k) < f(x^*)$
which means that $x^k$ must better than a global minimizer $x^*$. This is a contradiction.
So it cannot be the case that the gradient was large in each iteration [i.e. $\|\nabla f(x^t)\|_2 > \sqrt{\frac{2\beta}{k} (f(x^0) - f(x^*))}$]. ■
Slide 72
Carnegie Mellon University

### Visual Description
The slide completes the proof by contradiction started on the previous page. It contains mathematical derivations. There are no notable visuals beyond the text.

---

## Page 73
### Content
Proof of the Main Theorem for
Smooth Convex Functions
Slide 73
Carnegie Mellon University

### Visual Description
This is a section header slide for the proof of the main theorem for smooth convex functions.

---

## Page 74
### Content
GD on Smooth Convex Functions
Main Theorem [GD Converge rate on smooth convex functions]:
Let $f$ be a differentiable, $\beta$-smooth, convex function.
Let $x^*$ be any minimizer of $f$.
Then GD with step-size $\eta = \frac{1}{\beta}$ has the property that for any $k > 0$, within $k$ iterations it will reach a point $x^k$ such that
$$f(x^k) - f(x^*) \le \frac{\beta \|x^0 - x^*\|^2}{2k} = O\left(\frac{\beta}{k}\right) \quad \text{sublinear convergence!}$$
Proof: [Next slides]
Slide 74
Carnegie Mellon University

### Visual Description
The slide repeats the main theorem for smooth convex functions, signaling the start of its proof. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 75
### Content
Proof of Main Theorem [Smooth Convex Functions]
Proof of the Main Theorem:
By the Decent lemma: $f(x^t) \le f(x^{t-1}) - \frac{\eta}{2} \|\nabla f(x^{t-1})\|_2^2$
$\frac{\eta}{2} \|\nabla f(x^{t-1})\|_2^2 \le f(x^{t-1}) - f(x^t)$
$\|\nabla f(x^{t-1})\|_2^2 \le \frac{2}{\eta} (f(x^{t-1}) - f(x^t)) \quad \text{(A2)}$
From convexity:
$f(x) - f(y) \le \nabla f(x)^T (x - y)$
$f(x^{t-1}) - f(x^*) \le \nabla f(x^{t-1})^T (x^{t-1} - x^*) \quad \text{(A3)}$
Slide 75
Carnegie Mellon University

### Visual Description
The slide begins the proof of the convergence theorem for smooth convex functions, establishing two key inequalities (A2 and A3). It contains mathematical derivations. There are no notable visuals beyond the text.

---

## Page 76
### Content
Proof of Main Theorem [Smooth Convex Functions]
Proof of the Main Theorem (Continued):
Notice that, for any $t \in \{1, \dots, k\}$
$\|x^t - x^*\|_2^2 = \|x^{t-1} - \eta \nabla f(x^{t-1}) - x^*\|_2^2$
$= \|x^{t-1} - x^*\|_2^2 - 2\eta \nabla f(x^{t-1})^T (x^{t-1} - x^*) + \eta^2 \|\nabla f(x^{t-1})\|_2^2$
$\Rightarrow 2\eta \nabla f(x^{t-1})^T (x^{t-1} - x^*) = \|x^{t-1} - x^*\|_2^2 + \eta^2 \|\nabla f(x^{t-1})\|_2^2 - \|x^t - x^*\|_2^2$
$\nabla f(x^{t-1})^T (x^{t-1} - x^*) = \frac{1}{2\eta} (\|x^{t-1} - x^*\|_2^2 + \eta^2 \|\nabla f(x^{t-1})\|_2^2 - \|x^t - x^*\|_2^2) \quad \text{(A4)}$
Slide 76
Carnegie Mellon University

### Visual Description
The slide continues the proof, deriving a third key equality (A4) based on the gradient descent update rule. It contains mathematical derivations. There are no notable visuals beyond the text.

---

## Page 77
### Content
Proof of Main Theorem [Smooth Convex Functions]
Proof of the Main Theorem (Continued):
From (A3): $f(x^{t-1}) - f(x^*) \le \nabla f(x^{t-1})^T (x^{t-1} - x^*)$
From (A4): $= \frac{1}{2\eta} (\|x^{t-1} - x^*\|_2^2 + \eta^2 \|\nabla f(x^{t-1})\|_2^2 - \|x^t - x^*\|_2^2)$
From (A2): $\le \frac{1}{2\eta} (\|x^{t-1} - x^*\|_2^2 - \|x^t - x^*\|_2^2 + 2\eta (f(x^{t-1}) - f(x^t)))$
$= \frac{1}{2\eta} (\|x^{t-1} - x^*\|_2^2 - \|x^t - x^*\|_2^2) + f(x^{t-1}) - f(x^t)$
Therefore,
$f(x^{t-1}) - f(x^*) \le \frac{1}{2\eta} (\|x^{t-1} - x^*\|_2^2 - \|x^t - x^*\|_2^2) + f(x^{t-1}) - f(x^t)$
$= \frac{\beta}{2} (\|x^{t-1} - x^*\|_2^2 - \|x^t - x^*\|_2^2) + f(x^{t-1}) - f(x^t)$
Slide 77
Carnegie Mellon University

### Visual Description
The slide combines the previously established inequalities and equalities to derive a new bound on the function error at each step. It contains mathematical derivations. There are no notable visuals beyond the text.

---

## Page 78
### Content
Proof of Main Theorem [Smooth Convex Functions]
Proof of the Main Theorem (Continued):
$f(x^{t-1}) - f(x^*) \le \frac{\beta}{2} (\|x^{t-1} - x^*\|_2^2 - \|x^t - x^*\|_2^2) + f(x^{t-1}) - f(x^t)$
$\Rightarrow f(x^t) - f(x^*) \le \frac{\beta}{2} (\|x^{t-1} - x^*\|_2^2 - \|x^t - x^*\|_2^2)$
Summing from $t = 1, \dots, k$ and dividing by $k$:
$\frac{1}{k} \sum_{t=1}^k (f(x^t) - f(x^*)) \le \frac{1}{k} \sum_{t=1}^k \frac{\beta}{2} (\|x^{t-1} - x^*\|_2^2 - \|x^t - x^*\|_2^2)$
$= \frac{\beta}{2k} (\|x^0 - x^*\|_2^2 - \|x^k - x^*\|_2^2)$
$\le \frac{\beta}{2k} \|x^0 - x^*\|_2^2 \quad \text{(A5)}$
Slide 78
Carnegie Mellon University

### Visual Description
The slide uses a telescoping sum to bound the average function error over $k$ iterations. It contains mathematical derivations. There are no notable visuals beyond the text.

---

## Page 79
### Content
Proof of Main Theorem [Smooth Convex Functions]
Since $f(x^k) \le f(x^t) \forall t \in \{1, \dots, k\}$ by our step size:
$f(x^k) - f(x^*) \le \frac{1}{k} \sum_{t=1}^k (f(x^t) - f(x^*)) \le \frac{\beta}{2k} \|x^0 - x^*\|_2^2$
$\Rightarrow f(x^k) - f(x^*) \le \frac{\beta \|x^0 - x^*\|_2^2}{2k} = O\left(\frac{\beta}{k}\right)$ ■
sublinear convergence!
Slide 79
Carnegie Mellon University

### Visual Description
The slide completes the proof of the convergence theorem for smooth convex functions. It contains mathematical derivations. There are no notable visuals beyond the text.

---

## Page 80
### Content
Proof of the Main Theorem for
Smooth, Strongly Convex Functions
Slide 80
Carnegie Mellon University

### Visual Description
This is a section header slide for the proof of the main theorem for smooth, strongly convex functions.

---

## Page 81
### Content
GD on Smooth, Strongly Convex Functions
Let $f$ be a $\beta$-smooth, and $\alpha$-strongly convex function.
The condition number of $f$ is defined by $\kappa = \frac{\beta}{\alpha}$.
Main Theorem [GD convergence rate for strongly convex functions]:
Let $f$ be a differentiable, $\beta$-smooth, $\alpha$-strongly convex function.
Let $x^*$ be the minimizer of $f$.
[Strongly convex functions have unique minimum].
Then GD with step-size $\eta = \frac{1}{\beta}$ has the property that for any $k > 0$, within $k$ iterations it will reach a point $x^k$ such that
$$\|x^k - x^*\|_2^2 \le \left(1 - \frac{1}{\kappa}\right)^k \|x^0 - x^*\|_2^2 = O(c^k) \quad \text{linear convergence!}$$
Proof [Next Slides]
Slide 81
Carnegie Mellon University

### Visual Description
The slide repeats the main theorem for smooth, strongly convex functions, signaling the start of its proof. It contains text and equations. There are no notable visuals beyond the text.

---

## Page 82
### Content
Proof of Main Theorem [Strongly Convex Functions]
Proof of Main Theorem [Strongly convex]:
by strong convexity
$f(y) \ge f(x) + \nabla f(x)^T (y - x) + \frac{\alpha}{2} \|y - x\|_2^2$
$f(x^*) \ge f(x^{t-1}) + \nabla f(x^{t-1})^T (x^* - x^{t-1}) + \frac{\alpha}{2} \|x^* - x^{t-1}\|_2^2$
$f(x^*) - f(x^{t-1}) - \frac{\alpha}{2} \|x^* - x^{t-1}\|_2^2 \ge \nabla f(x^{t-1})^T (x^* - x^{t-1})$
$\frac{2}{\beta} (f(x^*) - f(x^{t-1}) - \frac{\alpha}{2} \|x^* - x^{t-1}\|_2^2) \ge \frac{2}{\beta} \nabla f(x^{t-1})^T (x^* - x^{t-1})$
(B2) $\frac{2}{\beta} (f(x^*) - f(x^{t-1}) - \frac{\alpha}{2} \|x^* - x^{t-1}\|_2^2) \ge -\frac{2}{\beta} \nabla f(x^{t-1})^T (x^{t-1} - x^*)$
(without strong convexity we can’t get this good bound)
Slide 82
Carnegie Mellon University

### Visual Description
The slide begins the proof of the convergence theorem for strongly convex functions, establishing a key inequality (B2) based on the strong convexity property. It contains mathematical derivations. There are no notable visuals beyond the text.

---

## Page 83
### Content
Proof of Main Theorem [Strongly Convex Functions]
(B2) $-\frac{2}{\beta} \nabla f(x^{t-1})^T (x^{t-1} - x^*) \le \frac{2}{\beta} (f(x^*) - f(x^{t-1}) - \frac{\alpha}{2} \|x^* - x^{t-1}\|_2^2)$
Proof of Main Theorem [Strongly convex] (continued):
Notice that, for any $t \in \{1, \dots, k\}$
$\|x^t - x^*\|_2^2 = \|x^{t-1} - \eta \nabla f(x^{t-1}) - x^*\|_2^2$
$= \|x^{t-1} - x^*\|_2^2 - 2\eta \nabla f(x^{t-1})^T (x^{t-1} - x^*) + \eta^2 \|\nabla f(x^{t-1})\|_2^2$
$= \|x^{t-1} - x^*\|_2^2 - \frac{2}{\beta} \nabla f(x^{t-1})^T (x^{t-1} - x^*) + \frac{1}{\beta^2} \|\nabla f(x^{t-1})\|_2^2$
$\le \|x^{t-1} - x^*\|_2^2 + \frac{1}{\beta^2} \|\nabla f(x^{t-1})\|_2^2 + \frac{2}{\beta} (f(x^*) - f(x^{t-1}) - \frac{\alpha}{2} \|x^* - x^{t-1}\|_2^2)$
[by using (B2)]
Slide 83
Carnegie Mellon University

### Visual Description
The slide continues the proof, combining the gradient descent update rule with the inequality (B2). It contains mathematical derivations. There are no notable visuals beyond the text.

---

## Page 84
### Content
Proof of Main Theorem [Strongly Convex Functions]
Proof of Main Theorem [Strongly convex] (continued):
From (A2): $\|\nabla f(x^{t-1})\|_2^2 \le 2\beta (f(x^{t-1}) - f(x^t))$
$\|x^t - x^*\|_2^2 \le \|x^{t-1} - x^*\|_2^2 + \frac{1}{\beta^2} \|\nabla f(x^{t-1})\|_2^2 + \frac{2}{\beta} (f(x^*) - f(x^{t-1}) - \frac{\alpha}{2} \|x^* - x^{t-1}\|_2^2)$
$\le \|x^{t-1} - x^*\|_2^2 + \frac{2}{\beta} (f(x^{t-1}) - f(x^t)) + \frac{2}{\beta} (f(x^*) - f(x^{t-1}) - \frac{\alpha}{2} \|x^* - x^{t-1}\|_2^2)$
$= \|x^{t-1} - x^*\|_2^2 + \frac{2}{\beta} (f(x^*) - f(x^t) - \frac{\alpha}{2} \|x^* - x^{t-1}\|_2^2)$
$\le \|x^{t-1} - x^*\|_2^2 - \frac{\alpha}{\beta} \|x^* - x^{t-1}\|_2^2 \quad$ (since $f(x^*) - f(x^t) \le 0$)
$= \left(1 - \frac{\alpha}{\beta}\right) \|x^{t-1} - x^*\|_2^2$ ■
Slide 84
Carnegie Mellon University

### Visual Description
The slide completes the proof of the linear convergence theorem for smooth, strongly convex functions. It contains mathematical derivations. There are no notable visuals beyond the text.

---

## Page 85
### Content
Thanks for your Attention ☺
Slide 85
Carnegie Mellon University

### Visual Description
This is a concluding slide with text and a smiley face icon, identical to Page 54.\n