# recitations-01-Opti_Recitation

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/recitations-01-Opti_Recitation.pdf`
Duplicate equivalents: `recitations-01-Opti_Recitation.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 23

## Page 1
### Content
**Optimization for ML**

$$\arg \min_{h \in \mathcal{H}} \sum_{i \in [n]} \ell(h(x_i), y_i)$$
*   $\mathcal{H}$: linear hypothesis class
*   Note: "linearly separable is what we did last time, this time we will be more general"

Given a function $f: \mathbb{R}^d \to \mathbb{R}$ and a set $S \subseteq \mathbb{R}^d$, the goal is to
$$\text{minimize}_{v \in \mathbb{R}^d} f(v) \quad \text{subject to } v \in S$$
*   $f(v)$: objective
*   $v \in S$: constraint
*   Every $v \in S$ is called "feasible"
*   Note: "some stuff like this (ERM)"

Broadly 2 types of optimization problems:
1.  Unconstrained: $S = \mathbb{R}^d \to$ then the constraint above is vacuous
2.  Constrained: $S \neq \mathbb{R}^d$

*Note: if we want to maximize, min the $-f(v)$.*

**Convex Optimization**
*   **Convex set:** A set $S \subseteq \mathbb{R}^d$ is convex if $\theta x + (1-\theta)y \in S \quad \forall x, y \in S, \theta \in [0, 1]$
*   **Convex function:** A function $f: S \to \mathbb{R}$ is convex if $S$ is convex and $f(\theta x + (1-\theta)y) \leq \theta f(x) + (1-\theta)f(y) \quad \forall x, y \in S, \theta \in [0, 1]$.
    *   Note: "domain should be convex"
    *   Note: "take convex combination of $f(x)$ & $f(y)$ the right side; left side take convex optimization then take $f$; the line should never be below the curve"

### Visual Description
Handwritten lecture notes on lined paper. It includes a mathematical formulation of Empirical Risk Minimization (ERM) and general optimization. There are two diagrams:
1.  A comparison of a convex set (an oval with a line segment between two points inside it) and a non-convex set (a crescent shape where a line segment between two points goes outside the set).
2.  A graph of a convex function (a parabola-like curve) showing that the line segment connecting $(x, f(x))$ and $(y, f(y))$ lies above the function curve.

---

## Page 2
### Content
*   Visual note: A graph showing a concave-looking curve where the line segment between two points is below the curve. Label: "not convex b/c line is below curve".
*   Note: $-f$ is concave if $f$ is convex.

**Convex opt.** $S$ is a convex set, $f$ is a convex function.

*   Visual note: A graph of a non-convex function with multiple valleys.
    *   Labels: "local min", "local min & global min", "not convex".
    *   Note: "this is optimal, local minimum", "frequently get stuck in local min", "convex functions are nice that a local min is also global min".
    *   Note: "random starting points w/ convex algo on whole area, then we may get global min $\downarrow$ many modifications like this to make it better".

*   Visual note: A graph of a convex function (parabola) with a single point marked as the global minimum.

*   A differentiable function $f: \mathbb{R}^d \to \mathbb{R}$ is convex iff $f(y) \geq f(x) + (\nabla f(x))^T (y-x) \quad \forall x, y \in \mathbb{R}^d$
    *   $\nabla f(x)$: gradient of $f(x)$
    *   Visual note: A convex curve with a tangent line at point $x$. Note: "it should be growing slower @ $x$ than $y$".

### Visual Description
Handwritten lecture notes continuing from the previous page. It features several hand-drawn plots of functions to illustrate convexity, non-convexity, and local vs. global minima. One plot specifically shows the first-order condition for convexity using a tangent line.

---

## Page 3
### Content
*   A twice differentiable function is convex iff $\nabla^2 f(x) \succeq 0 \quad \forall x$.
    *   $\nabla^2 f(x)$: Hessian (matrix of 2nd differentials)
    *   $\succeq 0$: positive semi-definite
    *   Definition: $A \in \mathbb{R}^{d \times d}$ is psd if $z^T A z \geq 0 \quad \forall z \in \mathbb{R}^d$.

**Gradient descent algo - Unconstrained**
$$\min_{v \in \mathbb{R}^d} f(v)$$
*   At time 0, choose initialization $v^0$ (eg, $v^0 \sim N(0, I_d)$)
*   At time $t=1, 2, 3, \dots$:
    $$v^t = v^{t-1} - \eta_t \nabla f(v^{t-1})$$
    *   $\eta_t$: learning rate/step size (function of iteration or constant). Ex: $\eta_t = \frac{1}{\sqrt{t}}$. Note: "initially make bigger jumps, then make smaller jumps".
    *   $\nabla f(v^{t-1})$: gradient at prev iteration. Note: "direction of increase", "but now we want to decrease".
*   If a stopping condition is met, stop & output $v^t$.
*   Note: "iterative algo - initialize @ 0 or a point @ random".
*   Note: "convex w/ parameters/specifics you can know the # of time steps".
*   Note: "waiting for all gradients to compute, then move". "better for compute time (wall clock)".

**Stochastic Gradient Descent**
$f(v) = \frac{1}{n} \sum_{i=1}^n g_i(v)$ for some $g_1, \dots, g_n: \mathbb{R}^d \to \mathbb{R}$
*   Ex: empirical risk minimization $\to g$ was loss @ each indiv sample $g_i = \ell(h(x_i), y_i)$.
*   Note: "much similar than $f$". "write however you want, vanilla standard way is 1 at a time".
*   At time $t=0$, initialize $v^0$.
*   At time $t=1, 2, 3, \dots$:
    *   Choose $a \sim \text{Unif}\{1, 2, \dots, n\}$
    *   $v^t = v^{t-1} - \eta_t \nabla g_a(v^{t-1})$
    *   Stop if stopping condition is met.
*   Note: "gradient w/ $f$ requires a lot of compute if $n=1$ million". "can do more iterations b/c of stochastic gradient even if it is a bit more noisy b/c could point in wrong dir but you take MANY steps".
*   Note: "expected val of $\nabla g_a(v^{t-1}) = \text{expected val of } \nabla f(v^{t-1})$".
*   Note: "choose $k$ of these $g$'s $\to$ then it is even closer to $f$ $\uparrow$ called 'batch' then".

### Visual Description
Handwritten lecture notes. It includes mathematical definitions for the Hessian and positive semi-definiteness. It outlines the algorithms for Gradient Descent and Stochastic Gradient Descent with various annotations explaining the intuition behind learning rates, batching, and computational efficiency. A small graph shows the steps of gradient descent on a convex function.

---

## Page 4
### Content
**Constrained optimization problem:** $v \in S$
*   Note: "we may not be in the sample space, algo doesn't have $S$ anywhere".

**Projected GD/SGD**
*   At end of each iteration, update $v^t \leftarrow \text{projection of } v^t \text{ on } S$.
*   At $v^t = v^{t-1} - \eta_t \nabla f(v^{t-1})$, we do this projection step.
*   Note: "if structure is nice, projection is easy".
*   Projection: $\arg \min_{v \in S} \text{distance}(v, v^t)$.
    *   Note: "smallest distance". "choose distance metric, $\ell_2$ for ex". "$\|v - v^t\|_2$ is the most common choice".
*   Example: $S = \{x \mid \|x\|_2 \leq 1\}$. $v^t \leftarrow \frac{v^t}{\|v^t\|_2}$ gives closest point in $\ell_2$ normal.
*   Formula: $\min_{v' \in \mathbb{R}^d} \|v^t - v'\|_2 \text{ s.t. } v' \in S$.

For example, in empirical risk minimization, we have the following problem: $\min_{w, b \in \mathbb{R}^d \times \mathbb{R}} \sum_{i=1}^n \ell(y_i, w^T x_i + b)$.
Since the 0-1 loss function is not convex, we can try using the Hinge loss instead: $\ell(y, w) = \max\{0, 1 - y_i(w^T x_i + b)\}$.
Because the Hinge loss is not differentiable at every point, we can use its subgradient:
$$\nabla g_i(w, b) = \begin{cases} \begin{bmatrix} -y_i x_i \\ -y_i \end{bmatrix} & \text{if } y_i(w^T x_i + b) < 1 \\ \begin{bmatrix} 0 \\ 0 \end{bmatrix} & \text{if } y_i(w^T x_i + b) \geq 1 \end{cases}$$

When dealing with **constrained** problems, one alternative is to use projections. In this scenario, each iteration has an extra step: $v^t \leftarrow \text{Proj}(v^t, S)$. For example, the projection of a point $v$ on the set $S = \{v \in \mathbb{R}^d : \|v\|_2 \leq 1\}$ is $\frac{v^t}{\|v^t\|_2}$.

*Handwritten note:* Generally, $\min_{v' \in \mathbb{R}^d} \|v^t - v'\|_2 \text{ s.t. } v' \in S$

### Visual Description
A mix of handwritten notes and typed text. It explains Projected Gradient Descent with a diagram showing a point $v^t$ outside a circular set $S$ being projected to the nearest point on the boundary. The typed section provides a concrete example using Hinge loss and its subgradient, as well as projection onto a unit ball.

---

## Page 5
### Content
**Neural Networks**

**Perceptron**
*   $\mathcal{X} = \mathbb{R}^d$
*   $\mathcal{Y} = \{-1, 1\}$
*   Diagram: $x \to [w_1, w_2, \dots, w_d] \to \Sigma \to \text{sign}(w^T x + b)$
*   Note: "instead of sign, let's use a general function $\sigma(w^T x + b)$ $\uparrow$ activation function $\sigma: \mathbb{R} \to \mathbb{R}$ e.g. sign, sigmoid, ReLU ($\sigma(u) = \max\{x, 0\}$)".

**Multi layer Perceptrons**

**Feed Forward Neural Network**
*   DAG (Directed Acyclic Graph)
*   Note: "Graph structure & $\sigma$ specify the hypothesis class 'neural network architecture'". "Each choice of parameters specifies a hypothesis".

**Feed Forward Layered Neural Networks**
*   Note: "go from one layer to the next". "perceptron is a layered neural network w/ 0 hidden layers".
*   **Fully connected neural network:** Feed forward, where all neurons (nodes) in any layer $i$ are connected to all neurons (nodes) in layer $i+1$.
*   **Depth** = total # layers excluding input layer (4 in our example).
*   **Width** = # nodes in largest hidden/output layer (12).

### Visual Description
Handwritten notes on neural network basics. It includes a simple diagram of a perceptron and two diagrams of multi-layer networks. The first multi-layer diagram is a general DAG, and the second is a structured layered network with an input layer (10 nodes), two hidden layers (12 and 3 nodes respectively), and an output layer (1 node). There is also a small hand-drawn smiley face in the top right corner.

---

## Page 6
### Content
*   Consider $\mathcal{X} = \mathbb{R}^d, \mathcal{Y} = \{-1, 1\}$, fully connected neural network
*   Consider differentiable loss, e.g., $\ell(y, \hat{y}) = (y - \hat{y})^2$ for simplicity
*   Want to compute ERM:
    $$\arg \min_{h \in \mathcal{H}} \sum_{i=1}^n (h(x_i) - y_i)^2$$

**Idea 1:** Notice that this is a parameterized hypothesis class
$$\arg \min_{w} \sum_{i=1}^n (h_w(x_i) - y_i)^2$$

**Idea 2:** Network has a nice structure. Exploit it to compute gradients. Use SGD.

# Backpropagation

CMU 10-715 Fall 2024 © Nihar B. Shah

### Visual Description
A clean, typed slide with bullet points and mathematical formulas. It introduces the idea of training neural networks using ERM with a squared loss function and transitions into the topic of Backpropagation. There are two "lightbulb" icons next to the "Idea 1" and "Idea 2" sections.

---

## Page 7
### Content
**Input layer**
$k_0 = d+1$
$\mathbf{x}$
$1$
$W_0 \in \mathbb{R}^{k_1 \times k_0}$

**Hidden layers**
$k_1$
$k_2$
$\dots$
$W_1 \in \mathbb{R}^{k_2 \times k_1}$

**Output layer**
$k_{T-1}$
$k_T = 1$
$W_{T-1} \in \mathbb{R}^{k_T \times k_{T-1}}$

*Blue note:* after inner product $a_1 \in \mathbb{R}^{k_1}$ (pointing to the first hidden layer)

CMU 10-715 Fall 2024 © Nihar B. Shah

### Visual Description
A diagram of a multi-layer neural network. It shows an input layer with vector $\mathbf{x}$ and a bias term $1$, followed by several hidden layers and a single output node. Weight matrices $W_i$ are labeled between the layers. A blue arrow points to the first hidden layer nodes, indicating the state after the inner product calculation.

---

## Page 8
### Content
**Input layer**
$k_0 = d+1$
$\mathbf{x}$
$1$
$W_0 \in \mathbb{R}^{k_1 \times k_0}$

**Hidden layers**
$k_1$
$k_2$
$\dots$
$W_1 \in \mathbb{R}^{k_2 \times k_1}$

**Output layer**
$k_{T-1}$
$k_T = 1$
$W_{T-1} \in \mathbb{R}^{k_T \times k_{T-1}}$

*Blue note:* output of activation $a_1 \in \mathbb{R}^{k_1}, o_1 \in \mathbb{R}^{k_1}$ (pointing to the first hidden layer)

CMU 10-715 Fall 2024 © Nihar B. Shah

### Visual Description
The same neural network diagram as Page 7. The blue annotation has been updated to label both the pre-activation vector $a_1$ (after inner product) and the post-activation vector $o_1$ (output of activation) for the first hidden layer.
## Page 9
### Content
**Input layer**
$k_0 = d+1$
$\mathbf{X}$
$1$

**Hidden layers**
$k_1$
$k_2$
$\dots$
$k_{T-1}$

**Output layer**
$k_T = 1$

$W_0 \in \mathbb{R}^{k_1 \times k_0}$
$W_1 \in \mathbb{R}^{k_2 \times k_1}$
$W_{T-1} \in \mathbb{R}^{k_T \times k_{T-1}}$

$a_1 \in \mathbb{R}^{k_1}, o_1 \in \mathbb{R}^{k_1}$
after inner product

### Visual Description
A diagram of a multi-layer neural network. It shows an input layer with $k_0 = d+1$ nodes (labeled $\mathbf{X}$ and $1$), followed by hidden layers with $k_1, k_2, \dots, k_{T-1}$ nodes, and an output layer with $k_T = 1$ node. Weight matrices $W_0, W_1, \dots, W_{T-1}$ connect the layers. A blue arrow indicates that $a_1, o_1$ are associated with the first hidden layer after the inner product.

---

## Page 10
### Content
**Input layer**
$k_0 = d+1$
$\mathbf{X}$
$1$

**Hidden layers**
$k_1$
$k_2$
$\dots$
$k_{T-1}$

**Output layer**
$k_T = 1$

$W_0 \in \mathbb{R}^{k_1 \times k_0}$
$W_1 \in \mathbb{R}^{k_2 \times k_1}$
$W_{T-1} \in \mathbb{R}^{k_T \times k_{T-1}}$

$a_1 \in \mathbb{R}^{k_1}, o_1 \in \mathbb{R}^{k_1}$
$a_2 \in \mathbb{R}^{k_2}, o_2 \in \mathbb{R}^{k_2}$
output of activation

### Visual Description
Similar to the previous page, the diagram now includes $o_2 \in \mathbb{R}^{k_2}$ for the second hidden layer, labeled as the "output of activation".

---

## Page 11
### Content
**Input layer**
$k_0 = d+1$
$\mathbf{X}$
$1$

**Hidden layers**
$k_1$
$k_2$
$\dots$
$k_{T-1}$

**Output layer**
$k_T = 1$

$W_0 \in \mathbb{R}^{k_1 \times k_0}$
$W_1 \in \mathbb{R}^{k_2 \times k_1}$
$W_{T-1} \in \mathbb{R}^{k_T \times k_{T-1}}$

$a_1 \in \mathbb{R}^{k_1}, o_1 \in \mathbb{R}^{k_1}$
$a_2 \in \mathbb{R}^{k_2}, o_2 \in \mathbb{R}^{k_2}$
$o_T \in \mathbb{R}$
final output

### Visual Description
Similar to the previous page, the diagram now labels the output of the final layer as $o_T \in \mathbb{R}$, the "final output".

---

## Page 12
### Content
**Input layer**
$k_0 = d+1$
$\mathbf{X}$
$1$

**Hidden layers**
$k_1$
$k_2$
$\dots$
$k_{T-1}$

**Output layer**
$k_T = 1$

$W_0 \in \mathbb{R}^{k_1 \times k_0}$
$W_1 \in \mathbb{R}^{k_2 \times k_1}$
$W_{T-1} \in \mathbb{R}^{k_T \times k_{T-1}}$

Red labels for nodes:
- $o_0$ at the input layer
- $a_1, o_1$ at the first hidden layer
- $a_2, o_2$ at the second hidden layer
- $a_{T-1}, o_{T-1}$ at the penultimate layer
- $a_T$ at the output layer
- $o_T \in \mathbb{R}$ as the final output

### Visual Description
The neural network diagram is now annotated with red jagged circles labeling the intermediate values: $o_0$ at the input, $a_1, o_1$ at the first hidden layer, $a_2, o_2$ at the second, $a_{T-1}, o_{T-1}$ at the penultimate layer, and $a_T$ at the output layer.

---

## Page 13
### Content
* Output of the linear combinations for the $t^{th}$ layer:
$$[a_t]_i = \sum_{j=1}^{k_{t-1}} [W_{t-1}]_{ij} [o_{t-1}]_j \quad \forall i \in [k_t]$$

* After applying the activation function:
$$[o_t]_i = \sigma([a_t]_i) \quad \forall i \in [k_t]$$

* $$\begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_d \\ 1 \end{bmatrix} =: o_0 \in \mathbb{R}^{k_0}$$

* If an edge is absent in the architecture, then set $[W_t]_{ij} = 0$ permanently

### Visual Description
Text-only slide.

---

## Page 14
### Content
* Consider SGD for computing ERM
* Consider any one iteration
* Let $(x,y)$ be the chosen datapoint for that iteration
* Let $W$ denote the parameters at the beginning of that iteration
* Want to compute:
$$\nabla_W (o_T - y)^2 = 2(o_T - y) \nabla_W (o_T)$$
$\uparrow$
function of $x$ and $W$

### Visual Description
Text-only slide.

---

## Page 15
### Content
Two sets of steps:

* **Forward pass:** First, we compute $a_t$ and $o_t$ for $t = 1, \dots, T$
* **Backward pass:** Move leftwards through the network, compute partial derivatives, and then put them together to compute desired gradient.
    * Backpropagation uses chain rule to do it in a computationally more efficient fashion

**Two main ideas...**

### Visual Description
Text-only slide.

---

## Page 16
### Content
**Idea #1. Break up each derivative into simpler components**

$$\frac{\partial o_T}{\partial [W_{T-1}]_{ij}} = \boxed{\frac{\partial o_T}{\partial a_T}}_{\text{blue}} \boxed{\frac{\partial a_T}{\partial [W_{T-1}]_{ij}}}_{\text{red}}$$

Blue box component:
$$\begin{bmatrix} \sigma'([a_T]_1) & 0 & \dots & 0 \\ 0 & \sigma'([a_T]_2) & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \sigma'([a_T]_{k_T}) \end{bmatrix} \in \mathbb{R}^{k_T \times k_T}$$

Red box component:
$$[0 \dots 0 [o_{T-1}]_j 0 \dots 0]^T \in \mathbb{R}^{k_T}$$
($i^{th}$ position)

### Visual Description
A slide showing the decomposition of a partial derivative using the chain rule. A blue box and a red box highlight the two components of the derivative, with arrows pointing to their respective matrix and vector representations. The first component is a diagonal matrix of activation function derivatives, and the second is a vector with the value $[o_{T-1}]_j$ at the $i^{th}$ position and zeros elsewhere.
## Page 17
### Content
**Idea #1. Break up each derivative into simpler components**

$$ \frac{\partial o_T}{\partial [W_{T-1}]_{ij}} = \frac{\partial o_T}{\partial a_T} \frac{\partial a_T}{\partial [W_{T-1}]_{ij}} $$

$$ \frac{\partial o_T}{\partial [W_{T-2}]_{ij}} = \frac{\partial o_T}{\partial a_T} \frac{\partial a_T}{\partial o_{T-1}} \frac{\partial o_{T-1}}{\partial a_{T-1}} \frac{\partial a_{T-1}}{\partial [W_{T-2}]_{ij}} $$

$$ \frac{\partial o_T}{\partial [W_{T-3}]_{ij}} = \frac{\partial o_T}{\partial a_T} \frac{\partial a_T}{\partial o_{T-1}} \frac{\partial o_{T-1}}{\partial a_{T-1}} \frac{\partial a_{T-1}}{\partial o_{T-2}} \frac{\partial o_{T-2}}{\partial a_{T-2}} \frac{\partial a_{T-2}}{\partial [W_{T-3}]_{ij}} $$

and so on.

### Visual Description
Text-only slide showing the expansion of partial derivatives using the chain rule for different weight indices in a sequence.

---
## Page 18
### Content
**Idea #1. Break up each derivative into simpler components**

Can separately compute the individual components:

$$ \frac{\partial o_t}{\partial a_t} = \begin{bmatrix} \sigma'([a_t]_1) & 0 & \cdots & 0 \\ 0 & \sigma'([a_t]_2) & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & \sigma'([a_t]_{k_t}) \end{bmatrix} \in \mathbb{R}^{k_t \times k_t} $$

$$ \frac{\partial a_t}{\partial o_{t-1}} = W_{t-1} \in \mathbb{R}^{k_t \times k_{t-1}} $$

$$ \frac{\partial a_t}{\partial [W_{t-1}]_{ij}} = [0 \cdots 0 \underbrace{[o_{t-1}]_j}_{i^{\text{th}} \text{ position}} 0 \cdots 0]^T \in \mathbb{R}^{k_t} $$

### Visual Description
The slide shows the mathematical definitions for the individual components of the chain rule derivatives. It includes a diagonal matrix for the activation derivative, a weight matrix for the pre-activation derivative with respect to the previous output, and a sparse vector for the pre-activation derivative with respect to a specific weight element.

---
## Page 19
### Content
**Idea #2. Reuse computation**

$$ \frac{\partial o_T}{\partial [W_{T-1}]_{ij}} = \boxed{\frac{\partial o_T}{\partial a_T}} \frac{\partial a_T}{\partial [W_{T-1}]_{ij}} $$
$\downarrow$
$$ \frac{\partial o_T}{\partial [W_{T-2}]_{ij}} = \boxed{\frac{\partial o_T}{\partial a_T} \frac{\partial a_T}{\partial o_{T-1}} \frac{\partial o_{T-1}}{\partial a_{T-1}}} \frac{\partial a_{T-1}}{\partial [W_{T-2}]_{ij}} $$
$\downarrow$
$$ \frac{\partial o_T}{\partial [W_{T-3}]_{ij}} = \boxed{\frac{\partial o_T}{\partial a_T} \frac{\partial a_T}{\partial o_{T-1}} \frac{\partial o_{T-1}}{\partial a_{T-1}} \frac{\partial a_{T-1}}{\partial o_{T-2}} \frac{\partial o_{T-2}}{\partial a_{T-2}}} \frac{\partial a_{T-2}}{\partial [W_{T-3}]_{ij}} $$

and so on.

### Visual Description
This slide repeats the equations from Page 17 but uses red boxes and arrows to illustrate how parts of the derivative calculation for one layer are reused in the calculation for the preceding layer, demonstrating the principle of backpropagation.

---
## Page 20
### Content
**More generally: Automatic differentiation**

* Write your function as a computation graph (DAG)
* Backpropagation
* https://arxiv.org/pdf/1502.05767.pdf
* Example...

### Visual Description
Text-only slide introducing the concept of automatic differentiation and computation graphs.

---
## Page 21
### Content
**More generally: Automatic differentiation**

$$ f(x_1, x_2) = \ln(x_1) + x_1 x_2 - \sin(x_2) $$

Goal is to compute $\frac{\partial f}{\partial x_1}$ and $\frac{\partial f}{\partial x_2}$

$$ v_1 = \ln x_1 $$
$$ v_2 = x_1 x_2 $$
$$ v_3 = \sin(x_2) $$
$$ v_4 = v_1 + v_2 $$
$$ y = v_4 - v_3 $$

### Visual Description
Text-only slide defining a function $f(x_1, x_2)$ and breaking it down into a sequence of intermediate elementary operations ($v_1$ through $v_4$ and $y$).

---
## Page 22
### Content
**More generally: Automatic differentiation**

$$ f(x_1, x_2) = \ln(x_1) + x_1 x_2 - \sin(x_2) $$

$$ v_1 = \ln x_1 $$
$$ v_2 = x_1 x_2 $$
$$ v_3 = \sin(x_2) $$
$$ v_4 = v_1 + v_2 $$
$$ y = v_4 - v_3 $$

(Computation Graph)
* $x_1 \rightarrow v_1 \rightarrow v_4 \rightarrow y \rightarrow f(x_1, x_2)$
* $x_1 \rightarrow v_2 \rightarrow v_4$
* $x_2 \rightarrow v_2$
* $x_2 \rightarrow v_3 \rightarrow y$

### Visual Description
The slide shows the same function and intermediate variables as Page 21, but adds a directed acyclic graph (DAG) representing the computation. Nodes represent variables ($x_1, x_2, v_1, v_2, v_3, v_4, y$) and arrows represent the flow of computation.

---
## Page 23
### Content
**More generally: Automatic differentiation**

$$ f(x_1, x_2) = \ln(x_1) + x_1 x_2 - \sin(x_2) $$

$$ v_1 = \ln x_1, \quad v_2 = x_1 x_2, \quad v_3 = \sin(x_2), \quad v_4 = v_1 + v_2, \quad y = v_4 - v_3 $$

(Backpropagation on Graph)

* At node $v_4$: $\frac{\partial y}{\partial v_4}$
* At node $v_3$: $\frac{\partial y}{\partial v_3}$
* At node $v_1$: $\frac{\partial y}{\partial v_1} = \frac{\partial y}{\partial v_4} \frac{\partial v_4}{\partial v_1}$
* At node $v_2$: $\frac{\partial y}{\partial v_2} = \frac{\partial y}{\partial v_4} \frac{\partial v_4}{\partial v_2}$
* At node $x_1$: $\frac{\partial y}{\partial x_1} = \frac{\partial y}{\partial v_1} \frac{\partial v_1}{\partial x_1} + \frac{\partial y}{\partial v_2} \frac{\partial v_2}{\partial x_1}$
* At node $x_2$: $\frac{\partial y}{\partial x_2} = \frac{\partial y}{\partial v_2} \frac{\partial v_2}{\partial x_2} + \frac{\partial y}{\partial v_3} \frac{\partial v_3}{\partial x_2}$

### Visual Description
The slide shows the computation graph from Page 22 with added mathematical expressions for the partial derivatives at each node, illustrating the backward pass of automatic differentiation. Summation of gradients is shown at nodes $x_1$ and $x_2$ where multiple paths originate.
