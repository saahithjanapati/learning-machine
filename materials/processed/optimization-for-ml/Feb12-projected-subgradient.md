# Feb12-projected-subgradient

Source: `materials/archive/Feb12-projected-subgradient.pdf`
Duplicate equivalents: `Feb12-projected-subgradient.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `strict full-PDF single-call conversion`
Finish reason: `STOP`
Pages: 25
## Page 1
### Content
Optimization for Machine Learning
Projected Subgradient Method
Slide 1
Carnegie Mellon University

### Visual Description
No notable visual beyond text.

---

## Page 2
### Content
Recall gradient descent
We want to solve
$$\min_{x \in \mathbb{R}^n} f(x),$$
for $f$ convex and differentiable

Gradient descent: choose initial $x^{(0)} \in \mathbb{R}^n$, repeat
$$x^{(k)} = x^{(k-1)} - \eta_k \cdot \nabla f(x^{(k-1)}), \quad k = 1, 2, 3, \dots$$

If $\nabla f$ Lipschitz, gradient descent has convergence rate $O(1/k)$

Downsides:
* Requires $f$ differentiable

Slide 2
Carnegie Mellon University

### Visual Description
No notable visual beyond text.

---

## Page 3
### Content
Subgradient method
Given convex $f : \mathbb{R}^n \to \mathbb{R}$, not necessarily differentiable

Subgradient method: just like gradient descent, but replacing gradients with subgradients.
I.e., initialize $x^{(0)}$, then repeat
$$x^{(k)} = x^{(k-1)} - \eta_k \cdot g^{(k-1)}, \quad k = 1, 2, 3, \dots,$$
where $g^{(k-1)} \in \partial f(x^{(k-1)})$ is any subgradient of $f$ at $x^{(k-1)}$

The subgradient method is not necessarily a descent method, so we keep track of best iterate $x_{\text{best}}^{(k)}$ among $x^{(0)}, \dots, x^{(k)}$ so far, i.e.,
$$f(x_{\text{best}}^{(k)}) = \min_{i=0, \dots, k} f(x^{(i)})$$

Slide 3
Carnegie Mellon University

### Visual Description
No notable visual beyond text.

---

## Page 4
### Content
Constrained Optimization
Suppose our goal is to now minimize a convex function $f$, over a convex set $C$, i.e. we want to solve:
$$\min_{x \in C} f(x)$$

First attempt: Ignore the constraint and run gradient descent (or the subgradient method).

This won't solve our constrained problem in general. Since our iterates could leave the set $C$, we could end up at an infeasible solution.

Slide 4
Carnegie Mellon University

### Visual Description
No notable visual beyond text.

---

## Page 5
### Content
Constrained Optimization
Suppose our goal is to now minimize a convex function $f$, over a convex set $C$, i.e. we want to solve:
$$\min_{x \in C} f(x)$$

Second attempt: Take steps of GD or the subgradient method, but then project iterates back to the set $C$ whenever they leave the set $C$.

Slide 5
Carnegie Mellon University

### Visual Description
No notable visual beyond text.

---

## Page 6
### Content
Projected Gradient Method
If the objective is differentiable, this is the projected GD algorithm, i.e. for a step-size $\eta$, we iterate:
$$y^{t+1} = x^t - \eta_t \nabla f(x^t)$$
$$x^{t+1} = P_C(y^{t+1})$$

Here the projection step finds the point in $C$ closest to $y^{t+1}$, i.e. it solves the optimization problem:
$$x^{t+1} = P_C(y^{t+1}) := \arg \min_{x \in C} \frac{1}{2} \|x - y^{t+1}\|_2^2$$

Slide 6
Carnegie Mellon University

### Visual Description
No notable visual beyond text.

---

## Page 7
### Content
Projected Subgradient Method
If the objective $f$ is not differentiable, we might want to use the projected subgradient method, i.e. for a step-size $\eta$, we iterate:
$$y^{t+1} = x^t - \eta_t g_{x^t}$$
where $g_{x^t} \in \partial f(x^t)$ is any subgradient of $f$ at $x^t$
$$x^{t+1} = P_C(y^{t+1}) := \arg \min_{x \in C} \frac{1}{2} \|x - y^{t+1}\|_2^2$$

Slide 7
Carnegie Mellon University

### Visual Description
No notable visual beyond text.

---

## Page 8
### Content
Projected Gradient Method
$$y^{t+1} = x^t - \eta_t \nabla f(x^t)$$
$$x^{t+1} = P_C(y^{t+1}) := \arg \min_{x \in C} \frac{1}{2} \|x - y^{t+1}\|_2^2$$

Assuming this is a sensible method (it's not clear that it is), the projected (sub)gradient method reduces solving one optimization problem to solving a sequence of optimization problems.

Perhaps the immediate question is for what types of sets can we efficiently project onto.

Slide 8
Carnegie Mellon University

### Visual Description
No notable visual beyond text.

---

## Page 9
### Content
Projected subgradient method
What sets $C$ are easy to project onto? Lots, e.g.,
* Affine images $C = \{Ax + b : x \in \mathbb{R}^n\}$
$$P_C(x) = b + A(A^T A)^{-1} A^T (x - b)$$
* Solution set of linear system $C = \{x \in \mathbb{R}^n : Ax = b\}$
$$P_C(x) = x + A^T (A A^T)^{-1} (b - Ax)$$
* Nonnegative orthant $C = \{x \in \mathbb{R}^n : x \geq 0\} = \mathbb{R}_+^n$
* Norm balls $C = \{x \in \mathbb{R}^n : \|x\|_p \leq 1\}$, for $p = 1, 2, \infty$
[We still use the Euclidean norm for the projection!]
* Some simple polyhedra and simple cones

Slide 9
Carnegie Mellon University

### Visual Description
No notable visual beyond text.

---

## Page 10
### Content
Projected subgradient method
Warning: it is easy to write down seemingly simple set $C$, and $P_C$ can turn out to be very hard!

E.g., it is generally hard to project onto solution set of arbitrary linear inequalities, i.e, arbitrary polyhedron $C = \{x \in \mathbb{R}^n : Ax \leq b\}$

Slide 10
Carnegie Mellon University

### Visual Description
No notable visual beyond text.

---

## Page 11
### Content
Example Application for Projected Gradient Method
Suppose we're solving an optimization problem but would like to constrain all the optimization variables to be positive.
$$\min_{x \geq 0} f(x) \text{ where } f(x) = \frac{1}{2} \|Ax - b\|_2^2 \quad \text{[non-negative least squares]}$$

This has a simple closed form:
$$y^{t+1} = x^t - \eta_t \nabla f(x^t) = x^t - \eta_t A^T (Ax - b)$$
$$x^{t+1} = P_C(y^{t+1}) := \arg \min_{x \in C} \frac{1}{2} \|x - y^{t+1}\|_2^2$$
$$= \max\{0, y^{t+1}\} \text{ [where the max operation is applied elementwise.]}$$

This is a simple example where projected GD is easy to implement.

It's still unclear if the projected (sub)GD inherits any of the properties of (sub)GD in the unconstrained case.

Slide 11
Carnegie Mellon University

### Visual Description
No notable visual beyond text.

---

## Page 12
### Content
Convergence analysis of the Projected Subgradient Method
Slide 12
Carnegie Mellon University

### Visual Description
No notable visual beyond text.

---

## Page 13
### Content
Basic Inequality for Projected Subgradient Method
Lemma (Basic Inequality for Projected Subgradient Method)
Suppose $f : \mathbb{R}^d \to \mathbb{R}$ is convex, and $G$-Lipschitz.
Let $\eta_0, \eta_1, \dots, \eta_k$ be an arbitrary step-size sequence
Let $x^{\text{best}}$ be the best iterate of the projected subgradient method amongst $x^0, \dots, x^k$.
Then we have that
$$f(x^{\text{best}}) - f(x^*) \leq \frac{\|x^0 - x^*\|_2^2 + G^2 \sum_{t=0}^{k-1} \eta_t^2}{2 \sum_{t=0}^{k-1} \eta_t}$$

Proofs [Next slides]:

Slide 13
Carnegie Mellon University

### Visual Description
No notable visual beyond text.

---

## Page 14
### Content
Basic Inequality for Projected Subgradient Method
$$f(x^{\text{best}}) - f(x^*) \leq \frac{\|x^0 - x^*\|_2^2 + G^2 \sum_{t=0}^{k-1} \eta_t^2}{2 \sum_{t=0}^{k-1} \eta_t}$$

Remarks:
This is exactly the same guarantee we had for the subgradient method!
More generally, projected methods often inherit properties of their unconstrained counterparts.

Difficulty in the proof:
Each iteration of the projected algorithm needs to solve a projection step, and that leads to some changes in the proof.

Slide 14
Carnegie Mellon University

### Visual Description
No notable visual beyond text.

---

## Page 15
### Content
Proof of Basic Inequality for Projected Subgradient Method
$$f(x^{\text{best}}) - f(x^*) \leq \frac{\|x^0 - x^*\|_2^2 + G^2 \sum_{t=0}^{k-1} \eta_t^2}{2 \sum_{t=0}^{k-1} \eta_t}$$

Proof:
The proof will be similar to the proof we had for the subgradient method.
We will use the below lemma. [We proved this lemma before]:

Lemma (*1)
Let $f$ be convex. Then $f$ is Lipschitz continuous with constant $G > 0$
$$\iff \|g_x\|_2 \leq G \text{ for any subgradient } g_x \in \partial f(x) \text{ at any } x.$$

Slide 15
Carnegie Mellon University

### Visual Description
No notable visual beyond text.

---

## Page 16
### Content
Proof of Basic Inequality
Proof [Continued]:
$$y^{t+1} = x^t - \eta_t g_{x^t}$$
$$\|y^{t+1} - x^*\|_2^2 = \|x^t - \eta_t g_{x^t} - x^*\|_2^2$$
$$= \|x^t - x^* - \eta_t g_{x^t}\|_2^2$$
$$= \|x^t - x^*\|_2^2 - 2 \eta_t g_{x^t}^T (x^t - x^*) + \eta_t^2 \|g_{x^t}\|_2^2$$
$$\leq \|x^t - x^*\|_2^2 - 2 \eta_t g_{x^t}^T (x^t - x^*) + \eta_t^2 G^2 \quad \text{[By Lemma (*1)]}$$

Slide 16
Carnegie Mellon University

### Visual Description
No notable visual beyond text.

---

## Page 17
### Content
Proof of Basic Inequality [Continued]
Proof [Continued]:
$$\|y^{t+1} - x^*\|_2^2 \leq \|x^t - x^*\|_2^2 - 2 \eta_t g_{x^t}^T (x^t - x^*) + \eta_t^2 G^2$$

By the definition of the subgradient $g_x$ of $f$ at $x$, we have that
$$f(x) + g_x^T (y - x) \leq f(y), \quad \forall y \in \text{dom}(f)$$

Therefore,
$$f(x^t) + g_{x^t}^T (x^* - x^t) \leq f(x^*) \quad \text{[Using } x = x^t, y = x^* \text{]}$$
$$-g_{x^t}^T (x^t - x^*) \leq f(x^*) - f(x^t)$$

Thus,
$$\|y^{t+1} - x^*\|_2^2 \leq \|x^t - x^*\|_2^2 + 2 \eta_t (f(x^*) - f(x^t)) + \eta_t^2 G^2$$
$$2 \eta_t (f(x^t) - f(x^*)) \leq \|x^t - x^*\|_2^2 - \|y^{t+1} - x^*\|_2^2 + \eta_t^2 G^2$$

Slide 17
Carnegie Mellon University

### Visual Description
No notable visual beyond text.

---

## Page 18
### Content
Proof of Basic Inequality [Continued]
Proof [Continued]:
$$2 \eta_t (f(x^t) - f(x^*)) \leq \|x^t - x^*\|_2^2 - \|y^{t+1} - x^*\|_2^2 + \eta_t^2 G^2$$

Summing from $t = \{0, \dots, k - 1\}$, we have that
$$\sum_{t=0}^{k-1} 2 \eta_t (f(x^t) - f(x^*)) \leq \sum_{t=0}^{k-1} \eta_t^2 G^2 + \sum_{t=0}^{k-1} (\|x^t - x^*\|_2^2 - \|y^{t+1} - x^*\|_2^2)$$

Difficulty:
the second term on the right no longer telescopes...
[We have $y^{t+1}$ instead of $x^{t+1}$]

Slide 18
Carnegie Mellon University

### Visual Description
No notable visual beyond text.

---

## Page 19
### Content
Proof of Basic Inequality [Continued]
Proof [Continued]:
$$\sum_{t=0}^{k-1} 2 \eta_t (f(x^t) - f(x^*)) \leq \sum_{t=0}^{k-1} \eta_t^2 G^2 + \sum_{t=0}^{k-1} (\|x^t - x^*\|_2^2 - \|y^{t+1} - x^*\|_2^2)$$

Solution to the non-telescoping issue:
One can prove that projection onto a convex set is a contraction [HW], i.e.
$$\|P_C(y) - P_C(x)\|_2 \leq \|y - x\|_2 \quad \forall x, \forall y$$
$$\implies \|P_C(y^{t+1}) - P_C(x^*)\|_2 \leq \|y^{t+1} - x^*\|_2$$

Therefore,
$$\|x^{t+1} - x^*\|_2 = \|P_C(y^{t+1}) - P_C(x^*)\|_2 \leq \|y^{t+1} - x^*\|_2$$

Slide 19
Carnegie Mellon University

### Visual Description
No notable visual beyond text.

---

## Page 20
### Content
Proof of Basic Inequality [Continued]
$$\sum_{t=0}^{k-1} 2 \eta_t (f(x^t) - f(x^*)) \leq \sum_{t=0}^{k-1} \eta_t^2 G^2 + \sum_{t=0}^{k-1} (\|x^t - x^*\|_2^2 - \|y^{t+1} - x^*\|_2^2)$$
$$\|x^{t+1} - x^*\|_2 = \|P_C(y^{t+1}) - P_C(x^*)\|_2 \leq \|y^{t+1} - x^*\|_2$$

Therefore, after replacing $\|y^{t+1} - x^*\|_2^2$ with the smaller $\|x^{t+1} - x^*\|_2^2$,
$$\sum_{t=0}^{k-1} 2 \eta_t (f(x^t) - f(x^*)) \leq \sum_{t=0}^{k-1} \eta_t^2 G^2 + \sum_{t=0}^{k-1} (\|x^t - x^*\|_2^2 - \|x^{t+1} - x^*\|_2^2)$$
$$= \sum_{t=0}^{k-1} \eta_t^2 G^2 + \|x^0 - x^*\|_2^2 - \|x^k - x^*\|_2^2$$
$$\leq \sum_{t=0}^{k-1} \eta_t^2 G^2 + \|x^0 - x^*\|_2^2$$

Slide 20
Carnegie Mellon University

### Visual Description
No notable visual beyond text.

---

## Page 21
### Content
Proof of Basic Inequality [Continued]
$$\sum_{t=0}^{k-1} 2 \eta_t (f(x^t) - f(x^*)) \leq \|x^0 - x^*\|_2^2 + \sum_{t=0}^{k-1} \eta_t^2 G^2$$

Thus,
$$(f(x^{\text{best}}) - f(x^*)) \sum_{t=0}^{k-1} 2 \eta_t \leq \sum_{t=0}^{k-1} 2 \eta_t (f(x^t) - f(x^*)) \leq \|x^0 - x^*\|_2^2 + G^2 \sum_{t=0}^{k-1} \eta_t^2$$
$$f(x^{\text{best}}) - f(x^*) \leq \frac{\|x^0 - x^*\|_2^2 + G^2 \sum_{t=0}^{k-1} \eta_t^2}{2 \sum_{t=0}^{k-1} \eta_t} \quad \blacksquare$$

In essence, the projection operation at each step only pushes us closer to the optimal point $x^*$, which can only help the algorithm.

Slide 21
Carnegie Mellon University

### Visual Description
No notable visual beyond text.

---

## Page 22
### Content
Application
Slide 22
Carnegie Mellon University

### Visual Description
No notable visual beyond text.

---

## Page 23
### Content
Basis pursuit
Recall the basis pursuit problem $\min_{\beta \in \mathbb{R}^p} \|\beta\|_1$ subject to $X\beta = y$
Here $C = \{\beta : X\beta = y\}$
and $P_C(\beta) = \beta + X^T (X X^T)^{-1} (y - X\beta)$ (assuming $X X^T$ is invertible)

Hence, the projected subgradient method repeats
$$\beta^{(k)} = P_C(\beta^{(k-1)} - \eta_k s^{(k-1)})$$
$$\beta^{(k)} = (\beta^{(k-1)} - \eta_k s^{(k-1)}) + X^T (X X^T)^{-1} (y - X(\beta^{(k-1)} - \eta_k s^{(k-1)}))$$
where $s^{(k-1)} \in \partial \|\beta^{(k-1)}\|_1$,
that is, $s_i^{(k-1)} \in \begin{cases} \{\text{sign}(\beta_i^{(k-1)})\} & \beta_i^{(k-1)} \neq 0 \\ [-1, 1] & \text{otherwise} \end{cases}$

Slide 23
Carnegie Mellon University

### Visual Description
No notable visual beyond text.

---

## Page 24
### Content
Basis pursuit
$$\min_{\beta \in \mathbb{R}^p} \|\beta\|_1 \text{ subject to } X\beta = y$$
$$\beta^{(k)} = (\beta^{(k-1)} - \eta_k s^{(k-1)}) + X^T (X X^T)^{-1} (y - X(\beta^{(k-1)} - \eta_k s^{(k-1)}))$$

This can be further simplified:
$$\beta^{(k)} = (\beta^{(k-1)} - \eta_k s^{(k-1)}) + X^T (X X^T)^{-1} (y - X\beta^{(k-1)}) + \eta_k X^T (X X^T)^{-1} X s^{(k-1)}$$
$$= (\beta^{(k-1)} - \eta_k s^{(k-1)}) + \eta_k X^T (X X^T)^{-1} X s^{(k-1)} \quad \text{since } (y - X\beta^{(k-1)}) = 0$$
$$= \beta^{(k-1)} - \eta_k (I - X^T (X X^T)^{-1} X) s^{(k-1)}$$

We got a simple update rule. $\blacksquare$

Slide 24
Carnegie Mellon University

### Visual Description
No notable visual beyond text.

---

## Page 25
### Content
References
* S. Boyd, Lecture Notes for EE 264B, Stanford University, Spring 2010-2011
* Y. Nesterov (2004), “Introductory lectures on convex optimization: a basic course”, Chapter 3
* B. Polyak (1987), “Introduction to optimization”, Chapter 5
* L. Vandenberghe, Lecture Notes for EE 236C, UCLA, Spring 2011-2012

Slide 25
Carnegie Mellon University

### Visual Description
No notable visual beyond text.\n