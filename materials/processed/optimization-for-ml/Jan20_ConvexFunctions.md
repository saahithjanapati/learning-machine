# Jan20_ConvexFunctions

Source: `materials/archive/Jan20_ConvexFunctions.pdf`
Duplicate equivalents: `Jan20_ConvexFunctions.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `strict full-PDF single-call conversion`
Finish reason: `STOP`
Pages: 36
## Page 1
### Content
Optimization for ML Slide 1

**Optimization for Machine Learning**

**Convex Functions**

Carnegie Mellon University

### Visual Description
This is a title slide. It features the main title "Optimization for Machine Learning" in blue, bold text at the top. Below it, the subtitle "Convex Functions" is in red, bold text. The footer contains "Optimization for ML Slide 1" on the left and the "Carnegie Mellon University" logo in red on the right.

---

## Page 2
### Content
Optimization for ML Slide 2

**Contents**

**Review of Convex functions**
* Definition
* Examples
* Basic properties

Carnegie Mellon University

### Visual Description
This slide lists the contents of the lecture. The title "Contents" is in blue at the top. Below it, a section titled "Review of Convex functions" contains three bullet points: "Definition", "Examples", and "Basic properties". The footer is consistent with the first slide.

---

## Page 3
### Content
Optimization for ML Slide 3

**Convex Functions**

**Definition [convex function]:**
A function $f : \mathbb{R}^n \to \mathbb{R}$ is a convex function if:
* $\text{Dom}(f)$ is a convex set
* $f(\theta x + (1 - \theta)y) \leq \theta f(x) + (1 - \theta)f(y)$
  $\forall x, y \in \text{Dom}(f) \quad \forall \theta \in [0, 1]$

**Intuition:** [All chords are above the function]

**Lemma [equivalent definition]:**
An equivalent definition:
$f(\mathbb{E}[x]) \leq \mathbb{E}[f(x)]$ for any distribution over $\text{dom}(f)$.

Carnegie Mellon University

### Visual Description
The slide contains a mathematical definition and a supporting plot.
* **Plot:** A 2D graph shows a red convex curve. Two points $x$ and $y$ are marked on the horizontal axis. A straight black line segment (chord) connects the points $(x, f(x))$ and $(y, f(y))$ on the curve. A point between $x$ and $y$ on the horizontal axis is labeled $\theta x + (1 - \theta)y$. Above this point, there are two blue dots: one on the red curve representing $f(\theta x + (1 - \theta)y)$ and one on the chord representing $\theta f(x) + (1 - \theta)f(y)$. An arrow points from the chord point down to the curve point, visually demonstrating that the chord is above the function.

---

## Page 4
### Content
Optimization for ML Slide 4

**Concave functions**

**Definition [concave function]:**
$-f$ is convex

Carnegie Mellon University

### Visual Description
No notable visual beyond text.

---

## Page 5
### Content
Optimization for ML Slide 5

**Characterizations of convexity**

* Zeroth order
* First order
* Second order

Carnegie Mellon University

### Visual Description
This slide lists three characterizations of convexity as bullet points.

---

## Page 6
### Content
Optimization for ML Slide 6

**Zeroth-order characterizations of convexity**

1. **(Zeroth-Order):** $f$ is convex if
   * its domain is a convex set
   * and for any $x, y \in \text{dom}(f)$,
     $f(\theta x + (1 - \theta)y) \leq \theta f(x) + (1 - \theta)f(y)$

[This is just the definition]

Carnegie Mellon University

### Visual Description
No notable visual beyond text and equations.

---

## Page 7
### Content
Optimization for ML Slide 7

**Zeroth-order characterizations of convexity**

2. **(Zeroth-order with projections)**
   $f : \mathbb{R}^n \to \mathbb{R}$ is convex $\iff \begin{cases} g(t) \doteq f(x + tv) \text{ is convex} \\ \text{on } \text{dom}(g) = \{t : x + tv \in \text{dom}(f)\} \\ \forall x \in \text{dom}(f) \text{ and } \forall v \in \mathbb{R}^n \end{cases}$
   (i.e. all the 1D function slices are convex)

This is useful because we only need to check the convexity of 1D functions.

Graph courtesy of Prof. Robert Freund

Carnegie Mellon University

### Visual Description
The slide includes a 3D surface plot of a convex function $f(x_1, x_2)$.
* **Plot:** The surface is bowl-shaped, opening upwards. Below the surface, contour lines are projected onto the $x_1, x_2$ plane. A straight line is drawn across the domain in the $x_1, x_2$ plane. Above this line, a "slice" of the 3D surface is highlighted as a 1D curve, which is also convex. This illustrates that a multivariate function is convex if all its 1D slices are convex.

---

## Page 8
### Content
Optimization for ML Slide 8

**Extended Reals**

We can extend $f$ from $\text{dom}(f)$ to $\mathbb{R}^n$ without changing its convexity
Let $\tilde{f} : \mathbb{R}^n \to \mathbb{R} \cup \{\infty\}$.
$\tilde{f}(x) \doteq \begin{cases} f(x) & \text{if } x \in \text{dom}(f) \\ \infty & \text{if } x \notin \text{dom}(f) \end{cases}$

**Theorem:**
$f$ is convex $\iff \tilde{f}$ is convex.
$\iff \tilde{f}(\theta x + (1 - \theta)y) \leq \theta \tilde{f}(x) + (1 - \theta)\tilde{f}(y)$

**Implication:**
This way we will not need to write for "$x, y \in \text{dom}(f)$", since after extension $\text{dom}(\tilde{f})$ is the whole space.

Carnegie Mellon University

### Visual Description
No notable visual beyond text and equations.

---

## Page 9
### Content
Optimization for ML Slide 9

**Epigraph**

**Definition [epigraph]:** $\text{Epi}(f) = \{(x, t) : x \in \text{dom}(f), t \geq f(x)\}$

**Theorem [convexity of the epigraph]:**
$f : \mathbb{R}^n \to \mathbb{R}$ is convex $\iff \text{Epi}(f)$ is convex.

**Corollary:** To check if $f$ is convex, it's enough to check if set $\text{Epi}(f)$ is convex.

Carnegie Mellon University

### Visual Description
The slide contains a 2D plot illustrating the concept of an epigraph.
* **Plot:** A blue curve represents a function $f(x)$. The horizontal axis ranges from -3 to 3, and the vertical axis from -2 to 6. The region above the blue curve is filled with diagonal black hash marks. This shaded region represents the epigraph of the function, which is the set of all points $(x, t)$ where $t$ is greater than or equal to $f(x)$.

---

## Page 10
### Content
Optimization for ML Slide 10

**1st-order characterizations of convexity**

3. **(First-Order):** Let $f$ be a differentiable function.
   $\text{dom}(f)$ open and convex
   Then we have that
   $f$ is convex $\iff f(y) \geq f(x) + \nabla f(x)^T(y - x)$, for all $x, y \in \text{dom}(f)$

**Proof: [HW, Appendix]**

**Intuitive meaning:**
$f$ is convex $\iff$ The 1st-order Taylor approximation is a global underestimator of $f$.

Carnegie Mellon University

### Visual Description
The slide features a plot illustrating the first-order condition for convexity.
* **Plot:** A grey convex curve is shown. A tangent line is drawn at a point labeled $(x, f(x))$. The tangent line is labeled with the equation $f(x) + \nabla f(x)^T(y - x)$. Another point on the curve is labeled $f(y)$. The plot visually shows that the function curve always lies above its tangent line at any point, meaning the linear approximation is a global underestimator.

---

## Page 11
### Content
Optimization for ML Slide 11

**Corollary of 1st order characterization**

$f$ is convex $\iff f(y) \geq f(x) + \nabla f(x)^T(y - x), \forall x, \forall y$.

**Corollary:**
$\left. \begin{array}{l} f \text{ is convex} \\ \nabla f(x) = 0 \end{array} \right\} \implies \begin{array}{l} f(y) \geq f(x) \forall y \\ \text{(i.e. } x \text{ is a global optimum)} \end{array}$

Carnegie Mellon University

### Visual Description
This slide repeats the plot from Page 10, showing a convex function and its tangent line to support the corollary that a point with a zero gradient in a convex function is a global minimum.

---

## Page 12
### Content
Optimization for ML Slide 12

**Strictly Convex Functions**

**Definition [strictly convex function]:**
A function $f : \mathbb{R}^n \to \mathbb{R}$ is **strictly convex** if:
* $\text{dom}(f)$ is convex
* $f(\theta x + (1 - \theta)y) < \theta f(x) + (1 - \theta)f(y)$
  $\forall x \neq y \in \text{Dom}(f) \quad \forall 0 < \theta < 1$

**Example:**
$f(x) = x^4$ is strictly convex.
$f(x) = |x|$ is not strictly convex.
$f(\frac{1}{2}2 + \frac{1}{2}4) \not< \frac{1}{2}f(2) + \frac{1}{2}f(4)$
$3 \not< 3$

Carnegie Mellon University

### Visual Description
The slide repeats the plot from Page 3, which shows a convex curve and a chord above it. This visual is used here to illustrate the definition of strict convexity, where the function value must be strictly less than the chord value (except at the endpoints).

---

## Page 13
### Content
Optimization for ML Slide 13

**2nd-order characterizations of convexity**

4. **(Second-Order):**
   $\left. \begin{array}{l} \text{Let } f \text{ be twice differentiable everywhere in } \text{dom}(f) \\ \text{dom}(f) \text{ open, convex} \end{array} \right\} \implies$
   Then we have that
   $f$ is convex $\iff \nabla^2 f(x) \succeq 0, \forall x \in \text{dom}(f)$
   (The Hessian matrix is PSD)

**Proof: [HW, Appendix]**

**Lemma**
If $\nabla^2 f(x) \succ 0, \forall x \in \text{dom}(f) \implies f$ is strictly convex.
$\not\Leftarrow$ for example $f(x) = x^4$

Carnegie Mellon University

### Visual Description
No notable visual beyond text and equations.

---

## Page 14
### Content
Optimization for ML Slide 14

**Subgradient**

The first order definition of convex functions was this:
$f(y) \geq f(x) + \langle \nabla f(x), y - x \rangle, \quad \forall x, y$

$\exists$ an analogous definition when the function is not differentiable everywhere:
We know that a function $f$ is convex if
* its domain is a convex set
* $\forall x \in \text{dom}(f), \exists g_x$ such that
  $f(y) \geq f(x) + \langle g_x, y - x \rangle$ for any $y \in \text{dom}(f)$
  (i.e. $f$ is lower bounded with a linear function)

**Definition: [subgradient]:**
Any $g_x$ which satisfies the above property is called a **subgradient** of $f$ at $x$.

Carnegie Mellon University

### Visual Description
The slide contains a plot of a non-differentiable convex function.
* **Plot:** A black curve with a sharp "kink" or corner is shown. At this corner point, several dotted red lines are drawn. Each of these lines passes through the corner point and stays entirely below the black curve. These red lines represent different linear lower bounds, and their slopes correspond to different subgradients at that point. A blue dashed line is also shown, representing a tangent line at a differentiable part of the curve.

---

## Page 15
### Content
Optimization for ML Slide 15

**Subgradient**

**Note:**
* $\nabla f(x)$ is a **local** property of function $f$ at $x$
* subgradient $g_x$ is a **global** property of function $f$ at $x$
  since we have to have that $f(y) \geq f(x) + \langle g_x, y - x \rangle, \forall y \in \text{dom}(f)$
  [We will use this definition for nonconvex functions too]

**Definition [subdifferential]:**
The set of all subgradients at a point $x$ is called the **subdifferential** of $f$ at $x$ and it is denoted as $\partial f(x)$.

We will discuss subgradients and subdifferentials in more detail later

Carnegie Mellon University

### Visual Description
This slide repeats the plot from Page 14, showing a non-differentiable convex function and multiple subgradients at a corner point.

---

## Page 16
### Content
Optimization for ML Slide 16

**Examples**

Carnegie Mellon University

### Visual Description
This is a transition slide with the title "Examples" in blue.

---

## Page 17
### Content
Optimization for ML Slide 17

**Examples: Quadratic functions**

**Theorem [quadratic functions with PSD Q]:**
The quadratic function $f(x) = \frac{1}{2}x^T Qx + a^T x + b$ where $Q \succeq 0$ is convex.

**Proof 1 [Using second order condition]:**
$\nabla^2 f(x) = Q \succeq 0$. ■

Carnegie Mellon University

### Visual Description
No notable visual beyond text and equations.

---

## Page 18
### Content
Optimization for ML Slide 18

**Examples: Quadratic functions**

**Theorem [quadratic functions with PSD Q]:**
The quadratic function $f(x) = \frac{1}{2}x^T Qx + a^T x + b$ where $Q \succeq 0$ is convex.

**Proof 2 [Using first-order condition]:**
$\nabla f(x) = Qx + a$.
We need to check if $f(y) \geq f(x) + \nabla f(x)^T(y - x)$, for all $x, y \in \text{dom}(f)$
$f(y) = \frac{1}{2}y^T Qy + a^T y + b \stackrel{?}{\geq} \frac{1}{2}x^T Qx + a^T x + b + (Qx + a)^T(y - x)$
$\frac{1}{2}y^T Qy \stackrel{?}{\geq} \frac{1}{2}x^T Qx + a^T x + x^T Q^T y - x^T Q^T x - a^T x$
$\frac{1}{2}y^T Qy + \frac{1}{2}x^T Qx - x^T Q^T y \stackrel{?}{\geq} 0$
$\frac{1}{2}(y - x)^T Q(y - x) \stackrel{?}{\geq} 0$ This is true! ■

Carnegie Mellon University

### Visual Description
No notable visual beyond text and equations.

---

## Page 19
### Content
Optimization for ML Slide 19

**Examples: Quadratic functions**

**Theorem [quadratic functions with PSD Q]:**
The quadratic function $f(x) = \frac{1}{2}x^T Qx + a^T x + b$ where $Q \succeq 0$ is convex.

**Proof 3 [Using zero order condition]:**
We need to verify that $f(\theta x + (1 - \theta)y) \leq \theta f(x) + (1 - \theta)f(y)$
for all $\theta \in [0, 1]$, $x, y \in \text{dom}(f)$
$\frac{1}{2}(\theta x + (1 - \theta)y)^T Q(\theta x + (1 - \theta)y) + a^T (\theta x + (1 - \theta)y) + b$
$\stackrel{?}{\leq} \theta(\frac{1}{2}x^T Qx + a^T x + b) + (1 - \theta)(\frac{1}{2}y^T Qy + a^T y + b)$
$\frac{1}{2}(\theta x + (1 - \theta)y)^T Q(\theta x + (1 - \theta)y) \stackrel{?}{\leq} \theta \frac{1}{2}x^T Qx + (1 - \theta) \frac{1}{2}y^T Qy$
$\theta^2 x^T Qx + (1 - \theta)^2 y^T Qy + 2\theta(1 - \theta)x^T Qy \stackrel{?}{\leq} \theta x^T Qx + (1 - \theta)y^T Qy \quad (\times 2)$

Carnegie Mellon University

### Visual Description
No notable visual beyond text and equations.

---

## Page 20
### Content
Optimization for ML Slide 20

**Examples: Quadratic functions**

**Proof 3 continued:**
$\theta^2 x^T Qx + (1 - \theta)^2 y^T Qy + 2\theta(1 - \theta)x^T Qy \stackrel{?}{\leq} \theta x^T Qx + (1 - \theta)y^T Qy$
Let us use the fact that $2x^T Qy \leq x^T Qx + y^T Qy$
$\theta^2 x^T Qx + (1 - \theta)^2 y^T Qy + \theta(1 - \theta)(x^T Qx + y^T Qy) \stackrel{?}{\leq} \theta x^T Qx + (1 - \theta)y^T Qy$
Let us move everything to the left side:
$-\theta(1 - \theta)x^T Qx - \theta(1 - \theta)y^T Qy + \theta(1 - \theta)(x^T Qx + y^T Qy) \stackrel{?}{\leq} 0$
$-x^T Qx - y^T Qy + (x^T Qx + y^T Qy) \stackrel{?}{\leq} 0 \quad (/\theta(1 - \theta))$
$-x^T Qx - y^T Qy + (x^T Qx + y^T Qy) = 0$ This is true! ■

Carnegie Mellon University

### Visual Description
No notable visual beyond text and equations.

---

## Page 21
### Content
Optimization for ML Slide 21

**Examples of Convex and Concave Functions**

1. $f(x) = \exp(ax)$ is convex for any $a \in \mathbb{R}$
2. $\log(x)$ is concave on $\mathbb{R}_{++}$
3. $a^T x + b$ is both convex and concave.
4. The least squares loss $f(x) = \|Ax - b\|^2$ is convex (for any $A, b$)
5. The spectral norm of a matrix is convex $\|X\|_{op} = \sqrt{\lambda_{max}(X^T X)} = \sigma_1(X)$
   Here $\sigma_i(X)$ denotes the $i^{th}$ singular value of $X$.
6. The trace norm of a matrix is convex $\|X\|_{tr} = \sum_i \sigma_i(X)$
7. Indicator functions of convex sets are convex $I_C(x) = \begin{cases} 0 & \text{if } x \in C \\ \infty & \text{if } x \notin C \end{cases}$

Carnegie Mellon University

### Visual Description
No notable visual beyond text and equations.

---

## Page 22
### Content
Optimization for ML Slide 22

**Examples of Convex and Concave Functions**

**Convex functions:**
* $f(x) = |x|^p, p \geq 1, x \in \mathbb{R}$
* $f(x) = \max(x_1, \dots, x_n), x_i \in \mathbb{R}$
* $f(x) = \|x\|$ for any norm

**Concave functions:**
* The geometric mean: $f(x) = \left( \prod_{i=1}^n x_i \right)^{1/n}, x \in \mathbb{R}^n_{++}$
* $\log \det(x)$ is concave on $S^n_{++}$
  ($S^n_{++} = \text{cone of positive definite matrices}$)

Carnegie Mellon University

### Visual Description
No notable visual beyond text and equations.

---

## Page 23
### Content
Optimization for ML Slide 23

**Convexity and Monotone (Sub)gradients**

A nice property of convex functions is that their gradient $f'$ is monotone:
In 1-dim: If $f$ is convex, $x \geq y$, then $f'(x) \geq f'(y)$
Equivalently, we can say that $(x - y) \times (f'(x) - f'(y)) \geq 0$

**Theorem: [The gradient of a convex function is monotone]**
A multivariate generalization also holds: Let $f$ be differentiable.
$f$ is convex $\iff (f'(x) - f'(y))^T(x - y) \geq 0$.

**Proof: [HW, Appendix]**

**Theorem: [The subgradients of convex functions are also monotone]**
If $f$ is convex, $x, y \in \text{dom}(f)$, then we have that for any $g_x \in \partial f(x)$ and $g_y \in \partial f(y)$, $(x - y)^T(g_x - g_y) \geq 0$.

**Proof: [Next slide]**

Carnegie Mellon University

### Visual Description
No notable visual beyond text and equations.

---

## Page 24
### Content
Optimization for ML Slide 24

**Convexity and Monotone (Sub)gradients**

**Theorem: [The subgradients of convex functions are also monotone]**
If $f$ is convex, $x, y \in \text{dom}(f)$, then we have that for any $g_x \in \partial f(x)$ and $g_y \in \partial f(y)$, $(x - y)^T(g_x - g_y) \geq 0$.

**Proof: by the first-order characterization of convexity we know that:**
$f(y) \geq f(x) + g_x^T(y - x)$
$f(x) \geq f(y) + g_y^T(x - y)$

**Add these 2 equations:** $0 \geq g_x^T(y - x) + g_y^T(x - y)$
$0 \leq g_x^T(x - y) + g_y^T(y - x) = (x - y)^T(g_x - g_y)$ ■

**Theorem:**
The converse is also true: If the subgradients are monotone, then the function is convex.

**Proof: [HW, Appendix, and see the next slide for details]**

Carnegie Mellon University

### Visual Description
No notable visual beyond text and equations.

---

## Page 25
### Content
Optimization for ML Slide 25

**HW**

Show that if $f$ is differentiable, and has monotone gradient, then it is convex by the first-order characterization, i.e. satisfies that for any $x, y$,
$f(y) \geq f(x) + \nabla f(x)^T(y - x)$.

Show that if $f$ is convex, then the fact that $\nabla^2 f(x) \succeq 0$ for every $x$ implies that $f$ has monotone gradient.

Carnegie Mellon University

### Visual Description
No notable visual beyond text and equations.

---

## Page 26
### Content
Optimization for ML Slide 26

**Jensen’s inequality**

**Theorem 1** Let $f : \mathbb{R}^n \to (-\infty, \infty]$.
$f$ is convex $\iff$
$f(\lambda_1 x_1 + \dots \lambda_m x_m) \leq \lambda_1 f(x_1) + \dots + \lambda_m f(x_m)$
$\forall \lambda_1 \geq 0, \dots, \lambda_m \geq 0 \quad \sum_{i=1}^m \lambda_i = 1$

**Theorem 2** Let $f : \mathbb{R}^n \to (-\infty, \infty]$.
$f$ is convex $\iff \mathbb{E}_{x \sim p}[f(x)] \geq f(\mathbb{E}_{x \sim p}[x])$
$\forall p$ distribution over $\text{dom}(f)$.

Carnegie Mellon University

### Visual Description
The slide repeats the plot from Page 3, showing a convex curve and a chord above it. The inequality $f(\theta x + (1 - \theta)y) \leq \theta f(x) + (1 - \theta)f(y)$ is written next to the plot to illustrate Jensen's inequality for two points.

---

## Page 27
### Content
Optimization for ML Slide 27

**Proving a function convex**

* [ ] Use definition directly
* [ ] Prove that epigraph is convex via set methods
* [ ] $0^{th}, 1^{st}, 2^{nd}$ order convexity properties
* [ ] Construct $f$ from simpler convex functions using convexity-preserving operations

Carnegie Mellon University

### Visual Description
This slide presents a checklist of methods for proving a function is convex.

---

## Page 28
### Content
Optimization for ML Slide 28

**Convexity-preserving function operations**

Carnegie Mellon University

### Visual Description
This is a transition slide with the title "Convexity-preserving function operations" in blue.

---

## Page 29
### Content
Optimization for ML Slide 29

**Convexity-preserving function operations**

**Nonnegative linear combination:**
If $f_1, \dots, f_m$, are convex, $w_i \geq 0 \implies h(x) = \sum_{i=1}^m w_i f_i(x)$ is convex

**Pointwise max/sup:**
If $f_\alpha, \alpha \in S$ are convex functions $\implies m(x) = \sup_{\alpha \in S} f_\alpha(x)$ is convex.
[$S$ doesn't need to be convex]

**Partial minimization:**
If $g(x, y)$ is a convex function, and $C$ is a convex set, then $f(x) = \min_{y \in C} g(x, y)$ is a convex function.

Carnegie Mellon University

### Visual Description
No notable visual beyond text and equations.

---

## Page 30
### Content
Optimization for ML Slide 30

**Applications of Convexity Preserving Rules**

**Theorem [Distance to farthest point in an arbitrary set C]**
Suppose $C$ is an arbitrary set. Let $f(x) \doteq \max_{y \in C} \|x - y\|$. Then $f$ is a convex function.

**Proof:**
To see this, we can view $f$ as a maximum of convex functions $f_y(x) \doteq \|x - y\|$.
$f(x) = \max_{y \in C} f_y(x)$

Carnegie Mellon University

### Visual Description
No notable visual beyond text and equations.

---

## Page 31
### Content
Optimization for ML Slide 31

**Applications of Convexity Preserving Rules**

**Theorem [distance to a convex set is a convex function]:**
Let $C$ be a convex set, then $f(x) = \min_{y \in C} \|x - y\|$ is a convex function.

**Proof:**
We can view this as a partial minimization of the function $g(x, y) = \|x - y\|$, which is a convex function in $(x, y)$.

Carnegie Mellon University

### Visual Description
No notable visual beyond text and equations.

---

## Page 32
### Content
Optimization for ML Slide 32

**Function Compositions**

**Affine composition**
If $f : \mathbb{R}^n \to \mathbb{R}$ is convex, $\implies g(x) = f(Ax + b)$ is also convex, where $A \in \mathbb{R}^{n \times m}, b \in \mathbb{R}^n$.

**Perspective map**
If $f(x)$ is convex, $\implies g(x, t) = tf(x/t)$ is convex.

Carnegie Mellon University

### Visual Description
No notable visual beyond text and equations.

---

## Page 33
### Content
Optimization for ML Slide 33

**Function Compositions**

**General composition**
Let $h$ be convex and nondecreasing, $g$ convex.
$\implies f(x) = h(g(x))$ is convex.

**Proof [when h and g are twice differentiable]:**
$f'(x) = h'(g(x))g'(x)$
$f''(x) = h''(g(x))(g'(x))^2 + h'(g(x))g''(x)$
$\geq 0$ since $h''(\cdot) \geq 0, h'(\cdot) \geq 0, g''(x) \geq 0$ ■

Carnegie Mellon University

### Visual Description
No notable visual beyond text and equations.

---

## Page 34
### Content
Optimization for ML Slide 34

**Summary**

**Convex functions**
* epigraph
* 0 orders, 1st order, 2nd order conditions
* operations that preserve convexity

Carnegie Mellon University

### Visual Description
This slide provides a summary of the topics covered in the lecture.

---

## Page 35
### Content
Optimization for ML Slide 35

**Need To Know**

* Definitions of convex and concave functions
  * Zeroth-order characterization, chords are above functions values, 1D function slices are convex
  * First-order characterization, 1st-order Taylor approximation is a global underestimator
  * Second order characterization of convexity, Hessian matrix is PSD
* Jensen’s inequality
* Extended reals, epigraph
* Strictly convex functions
* Subgradient and subdifferential
* Convexity of quadratic functions
* Examples of convex and concave functions
* Convexity and Monotone (Sub)gradients
* Convexity-preserving function operations

Carnegie Mellon University

### Visual Description
This slide lists the key concepts students should know after the lecture.

---

## Page 36
### Content
Optimization for ML Slide 36

**Credits**

Some of the contents have been taken from:
* Ryan Tibshirani
* Sivaraman Balakrishnan

Carnegie Mellon University

### Visual Description
This is a credits slide acknowledging the sources of the lecture content.\n