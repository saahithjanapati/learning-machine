# Feb10_subgradient-method

Source: `materials/archive/Feb10_subgradient-method.pdf`
Duplicate equivalents: `Feb10_subgradient-method.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `strict full-PDF single-call conversion`
Finish reason: `STOP`
Pages: 55
## Page 1
### Content
Slide 1
Optimization for Machine Learning
Subgradient Method
Carnegie Mellon University

### Visual Description
This is a title slide with the text "Optimization for Machine Learning" in blue and "Subgradient Method" in red. The Carnegie Mellon University logo is in the bottom right corner.

## Page 2
### Content
Slide 2
The Subgradient Method
* Previously we discussed subgradients, and now we will discuss the **subgradient method**.
* It is common to use the term subgradient method (instead of subgradient descent), since often the subgradient method is not a descent method.
(i.e. in most cases where we apply the method, and for reasonable choices of the step-size, the function values can go up between iterations).
Carnegie Mellon University

### Visual Description
Text-based slide with bullet points explaining the terminology and nature of the subgradient method. No notable visual beyond text.

## Page 3
### Content
Slide 3
Recall gradient descent
We want to solve
$$\min_{x \in \mathbb{R}^n} f(x),$$
for $f$ convex and differentiable
Gradient descent: choose initial $x^{(0)} \in \mathbb{R}^n$, repeat
$$x^{(k)} = x^{(k-1)} - \eta_k \cdot \nabla f(x^{(k-1)}), \quad k = 1, 2, 3, \dots$$
If $f$ is convex, $\nabla f$ is Lipschitz, then GD has convergence rate $O(1/k)$
Downsides:
* Requires $f$ differentiable
Carnegie Mellon University

### Visual Description
Text-based slide recalling the gradient descent algorithm and its properties. No notable visual beyond text and equations.

## Page 4
### Content
Slide 4
Subgradient method
Given $f : \mathbb{R}^n \to \mathbb{R}$, convex, not necessarily differentiable.
Subgradient method: just like GD, but replacing gradients with subgradients.
I.e., initialize $x^{(0)}$, then repeat
$$x^{(k)} = x^{(k-1)} - \eta_k \cdot g^{(k-1)}, \quad k = 1, 2, 3, \dots$$
where $g^{(k-1)} \in \partial f(x^{(k-1)})$ is any subgradient of $f$ at $x^{(k-1)}$
**The subgradient method is not necessarily a descent method**, so we keep track of best iterate $x_{\text{best}}^{(k)}$ among $x^{(0)}, \dots, x^{(k)}$ so far, i.e.,
$$f(x_{\text{best}}^{(k)}) = \min_{i=0, \dots, k} f(x^{(i)})$$
Carnegie Mellon University

### Visual Description
Text-based slide defining the subgradient method and noting that it is not necessarily a descent method. No notable visual beyond text and equations.

## Page 5
### Content
Slide 5
Subgradient method
Remark 1a
* Subgradient directions need not be descent directions, i.e. they can be directions such that for any step-size $\eta > 0$, the function value increases.
* We already know the example of $f(x) = |x|$, where at the point 0, we calculated that $-1$ (for instance) is a valid subgradient, but moving in that direction will only increase the objective function.
Carnegie Mellon University

### Visual Description
Text-based slide providing a remark on subgradient directions not being descent directions. No notable visual beyond text.

## Page 6
### Content
Slide 6
Subgradient method
Remark 1b
A slightly more interesting example is to take the function
$$f(x_1, x_2) = |x_1| + 10|x_2|,$$
then at the point $(1, 0)$ (which is not the minimizer)
$$f(x_1, x_2) = 1 + 10 \cdot 0 = 1$$
One can prove that the vector $(1, 10)$ is a valid subgradient,
For an $\eta > 0$, the next location is
$$(x_1^{\text{new}}, x_2^{\text{new}}) = (1, 0) - \eta(1, 10)$$
$$= (1 - \eta, -10\eta)$$
Carnegie Mellon University

### Visual Description
Text-based slide providing a numerical example where a subgradient step increases the function value. No notable visual beyond text and equations.

## Page 7
### Content
Slide 7
Subgradient method
Remark 1b [continued]
$$f(x_1, x_2) = |x_1| + 10|x_2|, \quad f(1, 0) = 1$$
The next location is $(1 - \eta, -10\eta)$
Therefore, for any $\eta > 0$, our next iterate value would be
$$f(1 - \eta, -10\eta) = |1 - \eta| + 10 \cdot |-10\eta|$$
$$= |1 - \eta| + 100\eta$$
$$> 1$$
which would be a strictly worse point.
(i.e. the negative subgradient direction is a direction of increase in this case).
Carnegie Mellon University

### Visual Description
Continuation of the example from the previous page, showing mathematically that the function value increases. No notable visual beyond text and equations.

## Page 8
### Content
Slide 8
Subgradient method
Remark 2
It will turn out that if you chose a specific subgradient,
(the direction which has minimum $l_2$ norm in the subdifferential set $\partial f(x_t)$)
then this **special subgradient direction is a descent direction**, and one could hope to design a subgradient descent method based on this.
Carnegie Mellon University

### Visual Description
Text-based slide mentioning that the minimum norm subgradient is a descent direction. No notable visual beyond text.

## Page 9
### Content
Slide 9
Subgradient method
Remark 3
Finding the full sub-differential, and then finding the minimum norm element is hard in a lot of examples.
So our goal will instead be to show that
a naive algorithm that simply follows an **arbitrary subgradient** at each iteration will in fact converge to a globally optimal solution, under some assumptions, provided we are careful about step-size choice.
Carnegie Mellon University

### Visual Description
Text-based slide explaining the practical approach of using an arbitrary subgradient. No notable visual beyond text.

## Page 10
### Content
Slide 10
Step size choices
Carnegie Mellon University

### Visual Description
Section header slide for "Step size choices". No notable visual beyond text.

## Page 11
### Content
Slide 11
Step size choices
One of the basic differences between GD and the subgradient method is that we typically use different methods for choosing the step-size:
Since, subgradient directions need not be descent directions, we usually don't use adaptive step-sizes (e.g. backtracking line searches), since those are based on finding step-sizes which ensure "sufficient descent".
Carnegie Mellon University

### Visual Description
Text-based slide explaining why adaptive step-sizes are not typically used in subgradient methods. No notable visual beyond text.

## Page 12
### Content
Slide 12
Step size choices
Fixed step size:
If we're going to run $k$ iterations of the subgradient method, one can use a fixed step-size $\eta$ for all iterations.
$$\eta_k = \eta \quad \forall k = 1, 2, 3, \dots$$
If we know that we are going to do $k$ iterations, a typical choice will be a **fixed** $\eta \sim 1/\sqrt{k}$, i.e. if we're going to do more steps, we'll choose a smaller step-size.
Carnegie Mellon University

### Visual Description
Text-based slide describing the fixed step size choice. No notable visual beyond text and equations.

## Page 13
### Content
Slide 13
Step size choices
Diminishing step size:
Choose $\eta_k$ to satisfy
$$\sum_{k=1}^\infty \eta_k^2 < \infty, \quad \sum_{k=1}^\infty \eta_k = \infty,$$
i.e., square summable but not summable
Important that **step sizes go to zero, but not too fast.**
There are other options too, but important difference to gradient descent: all step sizes options are pre-specified, **not adaptively computed**
Carnegie Mellon University

### Visual Description
Text-based slide describing the diminishing step size choice. No notable visual beyond text and equations.

## Page 14
### Content
Slide 14
Lipschitz Functions
Carnegie Mellon University

### Visual Description
Section header slide for "Lipschitz Functions". No notable visual beyond text.

## Page 15
### Content
Slide 15
Convex Lipschitz Functions
Definition [Lipschitz continuous function]
$f : \mathbb{R}^n \to \mathbb{R}$ is Lipschitz continuous with constant $G > 0$,
$$\iff |f(x) - f(y)| \le G \|x - y\|_2 \text{ for all } x, y$$
Carnegie Mellon University

### Visual Description
Text-based slide defining Lipschitz continuity. No notable visual beyond text and equations.

## Page 16
### Content
Slide 16
Convex Lipschitz Functions
Lemma [Lipschitz continuous = Bounded subgradients] (*1)
Let $f : \mathbb{R}^n \to \mathbb{R}$ be convex.
$f$ is Lipschitz continuous with constant $G > 0$
$$\iff \|g\|_2 \le G \text{ for any subgradient of } f \text{ at any } x.$$
Proof: [Appendix]
We do not assume the function is smooth (or even differentiable). Rather we assume that the subgradients are bounded.
Note: For this lemma, we don't actually need convexity [See Appendix], but we will apply the subgradient method only for convex functions.
Carnegie Mellon University

### Visual Description
Text-based slide stating a lemma relating Lipschitz continuity to bounded subgradients. No notable visual beyond text and equations.

## Page 17
### Content
Slide 17
Convergence analysis of the Subgradient Method
Carnegie Mellon University

### Visual Description
Section header slide for "Convergence analysis of the Subgradient Method". No notable visual beyond text.

## Page 18
### Content
Slide 18
Convergence analysis
Let $x^* = \arg \min_{x \in \mathbb{R}^n} f(x)$
Theorem [Convergence error with constant step size]
Suppose $f$ is convex, and $G$-Lipschitz.
Let $x^{\text{best}}$ be the best iterate of the subgradient method amongst $x^0, \dots, x^k$.
Let $\|x^0 - x^*\|_2 \le R$
Let the step-size chosen to be a constant $\eta = \frac{R}{G\sqrt{k}}$.
Then the subgradient method satisfies
$$f(x^{\text{best}}) \le f(x^*) + \frac{GR}{\sqrt{k}}$$
Proof [next few slides]
Carnegie Mellon University

### Visual Description
Text-based slide stating a convergence theorem for constant step size. No notable visual beyond text and equations.

## Page 19
### Content
Slide 19
Convergence analysis
Theorem [Convergence with diminishing step size]
Suppose $f$ is convex, and $G$-Lipschitz.
Let $x^{\text{best}}$ be the best iterate of the subgradient method amongst $x^0, \dots, x^k$.
Let $\|x^0 - x^*\|_2 \le R$
For diminishing step sizes,
$$\sum_{k=1}^\infty \eta_k^2 < \infty, \quad \sum_{k=1}^\infty \eta_k = \infty,$$
the subgradient method satisfies
$$\lim_{k \to \infty} f(x^{\text{best}}) = f(x^*)$$
We don't need to know $R$ and $G$!
Proof [next few slides]
Carnegie Mellon University

### Visual Description
Text-based slide stating a convergence theorem for diminishing step sizes. No notable visual beyond text and equations.

## Page 20
### Content
Slide 20
Basic Inequality
Lemma (Basic Inequality)
Suppose $f$ is convex, and $G$-Lipschitz.
Let $\eta_0, \eta_1, \dots, \eta_k$ be an arbitrary step-size sequence.
Let $x^{\text{best}}$ be the best iterate of the subgradient method amongst $x^0, \dots, x^k$.
Then the subgradient method satisfies,
$$f(x^{\text{best}}) - f(x^*) \le \frac{\|x^0 - x^*\|_2^2 + G^2 \sum_{t=0}^{k-1} \eta_t^2}{2 \sum_{t=0}^{k-1} \eta_t}$$
Proof: [Appendix]
Carnegie Mellon University

### Visual Description
Text-based slide stating the basic inequality lemma used for convergence proofs. No notable visual beyond text and equations.

## Page 21
### Content
Slide 21
Proofs of the Main Theorems
$$f(x^{\text{best}}) - f(x^*) \le \frac{\|x^0 - x^*\|_2^2 + G^2 \sum_{t=0}^{k-1} \eta_t^2}{2 \sum_{t=0}^{k-1} \eta_t}$$
we can prove both the Constant step size' and 'Diminishing step size' theorems.
Proof of the Theorem with Constant step size:
Let $\|x^0 - x^*\|_2 \le R$. The step-size is chosen to be a constant $\eta = \frac{R}{G\sqrt{k}}$.
We want to prove $f(x^{\text{best}}) \le f(x^*) + \frac{GR}{\sqrt{k}}$
Using the basic inequality, we have that
$$f(x^{\text{best}}) - f(x^*) \le \frac{R^2 + G^2 k \frac{R^2}{G^2 k}}{2k \frac{R}{G\sqrt{k}}} = \frac{2R^2}{2k \frac{R}{G\sqrt{k}}} = \frac{R}{\frac{\sqrt{k}}{G}} = \frac{RG}{\sqrt{k}}$$
$$f(x^{\text{best}}) - f(x^*) \le \frac{GR}{\sqrt{k}} \quad \blacksquare$$
Carnegie Mellon University

### Visual Description
Text-based slide showing the proof of the constant step size theorem using the basic inequality. No notable visual beyond text and equations.

## Page 22
### Content
Slide 22
Proofs of the Main Theorems
$$f(x^{\text{best}}) - f(x^*) \le \frac{\|x^0 - x^*\|_2^2 + G^2 \sum_{t=0}^{k-1} \eta_t^2}{2 \sum_{t=0}^{k-1} \eta_t}$$
Proof of the Theorem with Diminishing step size:
Let $A = \sum_{k=1}^\infty \eta_k^2 < \infty, \quad B_t = \sum_{k=1}^t \eta_k, \quad \lim_{t \to \infty} B_t = \infty,$
We want to prove $\lim_{k \to \infty} f(x^{\text{best}}) - f(x^*) = 0$
Let $\|x^0 - x^*\|_2 \le R$.
$$f(x^{\text{best}}) - f(x^*) \le \frac{R^2 + G^2 A}{2B_t}$$
Therefore, $\lim_{k \to \infty} f(x^{\text{best}}) - f(x^*) = 0 \quad \blacksquare$
Carnegie Mellon University

### Visual Description
Text-based slide showing the proof of the diminishing step size theorem using the basic inequality. No notable visual beyond text and equations.

## Page 23
### Content
Slide 23
Unknown Parameters
If we don't know
* the number of steps in advance
* the parameters $R$ and $G$
then we might choose, $\eta_t = \frac{1}{\sqrt{t+1}}$ to obtain a similar guarantee:
Proof:
$$f(x^{\text{best}}) - f(x^*) \le \frac{\|x^0 - x^*\|_2^2 + G^2 \sum_{t=0}^{k-1} \eta_t^2}{2 \sum_{t=0}^{k-1} \eta_t} \le \frac{R^2 + G^2 \sum_{t=1}^k \frac{1}{t}}{2 \sum_{t=1}^k \frac{1}{\sqrt{t}}}$$
$$\left[ \sum_{t=1}^k \frac{1}{\sqrt{t}} \sim \int_1^k \frac{1}{\sqrt{t}} dt \sim O(\sqrt{k}) \right] \quad \left[ \sum_{t=1}^k \frac{1}{t} \sim \int_1^k \frac{1}{t} dt \sim O(\log k) \right]$$
$$\le O \left( \frac{R^2 + G^2 \log(k)}{2 \sum_{t=0}^{k-1} \frac{1}{\sqrt{t}}} \right) = O \left( \frac{R^2 + G^2 \log(k)}{\sqrt{k}} \right)$$
If the parameters are unknown then the rate is worse by a $\log k$ factor.
Carnegie Mellon University

### Visual Description
Text-based slide analyzing the convergence rate when parameters are unknown and a specific step size sequence is used. No notable visual beyond text and equations.

## Page 24
### Content
Slide 24
Polyak step sizes
Polyak step sizes: when the optimal value $f(x^*)$ is known, take
$$\eta_k = \frac{f(x^{(k-1)}) - f(x^*)}{\|g^{(k-1)}\|_2^2}, \quad k = 1, 2, 3, \dots$$
Can be motivated from first step in the proof of Basic Inequality [see Appendix]:
$$\|x^{(k)} - x^*\|_2^2 \le \|x^{(k-1)} - x^*\|_2^2 - 2\eta_k (f(x^{(k-1)}) - f(x^*)) + \eta_k^2 \|g^{(k-1)}\|_2^2$$
Polyak step size minimizes the right-hand side
With this choice of step size, error complexity after $k$ iterations is
$$f(x_{\text{best}}^{(k)}) - f(x^*) = O(1/\sqrt{k}) \quad \text{[Proof: HW]}$$
I.e., to get $f(x_{\text{best}}^{(k)}) - f(x^*) \le \epsilon$, need $O(1/\epsilon^2)$ iterations
Carnegie Mellon University

### Visual Description
Text-based slide introducing Polyak step sizes and their motivation. No notable visual beyond text and equations.

## Page 25
### Content
Slide 25
Subgradient Method Example
Carnegie Mellon University

### Visual Description
Section header slide for "Subgradient Method Example". No notable visual beyond text.

## Page 26
### Content
Slide 26
Intersection of sets
Example (from Boyd's lecture notes):
Suppose we want to find $x^* \in C_1 \cap \dots \cap C_m$,
where $C_1, \dots, C_m$ are closed convex sets.
[i.e., find point in the intersection of closed, convex sets $C_1, \dots, C_m$.]
First define
$$f(x) = \max_{i=1, \dots, m} \text{dist}(x, C_i),$$
and now solve
$$\min_{x \in \mathbb{R}^n} f(x)$$
Note that $f(x^*) = 0 \Rightarrow x^* \in C_1 \cap \dots \cap C_m$
Recall distance to set $C$,
$$\text{dist}(x, C) = \min \{ \|x - u\|_2 : u \in C \}$$
Carnegie Mellon University

### Visual Description
This slide contains a diagram of three overlapping circles labeled $C_1, C_2, C_3$. A point outside the circles is shown with three arrows pointing to the closest point on each circle. These arrows are labeled $f_1(x), f_2(x), f_3(x)$, representing the distance from the point to each set. The text explains how to find a point in the intersection of sets by minimizing the maximum distance to any set.

## Page 27
### Content
Slide 27
Intersection of sets
We need: $\min_{x \in \mathbb{R}^n} f(x)$ where $f(x) = \max_{i=1, \dots, m} \text{dist}(x, C_i)$,
For closed, convex $C$, there is a unique $u^*$ minimizing $\|x - u\|_2$ over $u \in C$.
Let $P_C(x) = u^*$, so $\text{dist}(x, C) = \|x - P_C(x)\|_2$
Optimality characterization: Proof: [HW, Appendix]
$$u^* = P_C(x) \iff \langle x - u^*, u - u^* \rangle \le 0 \text{ for all } u \in C$$
Consider $h(x) = \text{dist}(x, C)$.
Theorem [Derivative of the distance function]
For $x \notin C, \nabla h(x) = \frac{x - P_C(x)}{\|x - P_C(x)\|_2}$
Proof: [Appendix]
Carnegie Mellon University

### Visual Description
The slide features a diagram of a convex set $C$. A point $x$ is outside the set, and its projection onto the set is labeled $u^*$. A vector $x - u^*$ is drawn. A dashed blue line represents a supporting hyperplane at $u^*$. Another point $u$ is shown inside the set $C$. The diagram illustrates the optimality condition for projection: the angle between $x - u^*$ and $u - u^*$ is obtuse (greater than or equal to 90 degrees), meaning their inner product is non-positive.

## Page 28
### Content
Slide 28
Subgradient with Polyak Step
We need: $\min_{x \in \mathbb{R}^n} f(x)$ where $f(x) = \max_{i=1, \dots, m} \text{dist}(x, C_i)$,
Now write $f_i(x) = \text{dist}(x, C_i)$ for $i = 1, \dots, m$, and $f(x) = \max_{i=1, \dots, m} f_i(x)$
We know how to compute subgradient $g \in \partial f(x)$ for a given $x$:
First find an active function with $f_i(x) = f(x) = \max_{i=1, \dots, m} \text{dist}(x, C_i)$,
Since the sub-differential $\partial f(x)$ is the convex hull of the subgradients of the active functions,
let $g = \nabla f_i(x) = \frac{x - P_{C_i}(x)}{\|x - P_{C_i}(x)\|_2}$ be a selected subgradient from this convex hull.
Carnegie Mellon University

### Visual Description
Text-based slide explaining how to compute a subgradient for the maximum distance function. No notable visual beyond text and equations.

## Page 29
### Content
Slide 29
Subgradient with Polyak Step
Let $g = \nabla f_i(x) = \frac{x - P_{C_i}(x)}{\|x - P_{C_i}(x)\|_2}$ be a selected subgradient at $x$.
Note: $\|g\| = 1$.
We can apply subgradient method, with Polyak step:
$$\eta_k = \frac{f(x^{(k-1)}) - f(x^*)}{\|g^{(k-1)}\|_2^2}, \quad k = 1, 2, 3, \dots$$
$$= f(x^{(k-1)}) \quad \text{(Since } \|g\| = 1 \text{ and } f(x^*) = 0. \text{)}$$
$$= \max_{i=1, \dots, m} \text{dist}(x^{(k-1)}, C_i)$$
Carnegie Mellon University

### Visual Description
Text-based slide showing the application of the Polyak step size to the intersection of sets problem. No notable visual beyond text and equations.

## Page 30
### Content
Slide 30
Subgradient with Polyak Step
At iteration $k$, when $x^{(k-1)}$ has been already calculated,
we first find an active set $C_i$ so that $x^{(k-1)}$ is farthest from this $C_i$.
Let $\eta_k = f(x^{(k-1)}) = \max_{i=1, \dots, m} \text{dist}(x^{(k-1)}, C_i)$,
Then update
$$x^{(k)} = x^{(k-1)} - \eta_k g_i \text{ where } g_i = \frac{x - P_{C_i}(x)}{\|x - P_{C_i}(x)\|_2} \text{ is a subgradient}$$
$$= x^{(k-1)} - f(x^{(k-1)}) \frac{x^{(k-1)} - P_{C_i}(x^{(k-1)})}{\|x^{(k-1)} - P_{C_i}(x^{(k-1)})\|_2}$$
$$= x^{(k-1)} - f(x^{(k-1)}) \frac{x^{(k-1)} - P_{C_i}(x^{(k-1)})}{f(x^{(k-1)})}$$
$$= P_{C_i}(x^{(k-1)}) \text{ [i.e. we keep projecting to the most distant set]}$$
Carnegie Mellon University

### Visual Description
Text-based slide deriving that the subgradient method with Polyak step for this problem is equivalent to projecting onto the farthest set. No notable visual beyond text and equations.

## Page 31
### Content
Slide 31
Subgradient with Polyak Step
For two sets, this is exactly the famous alternating projections algorithm,
i.e., just keep projecting back and forth.
Carnegie Mellon University

### Visual Description
The slide contains a diagram of two overlapping convex sets, $C_1$ and $C_2$. A sequence of points $x^{(1)}, x^{(2)}, x^{(3)}, x^{(4)}$ is shown, where each point is the projection of the previous point onto the other set. The sequence converges to a point $x^*$ in the intersection of $C_1$ and $C_2$. This illustrates the alternating projections algorithm.

## Page 32
### Content
Slide 32
References
* S. Boyd, Lecture Notes for EE 264B, Stanford University, Spring 2010-2011
* Y. Nesterov (2004), “Introductory lectures on convex optimization: a basic course”, Chapter 3
* B. Polyak (1987), “Introduction to optimization”, Chapter 5
* L. Vandenberghe, Lecture Notes for EE 236C, UCLA, Spring 2011-2012
Carnegie Mellon University

### Visual Description
Text-based slide listing references for the lecture. No notable visual beyond text.

## Page 33
### Content
Slide 33
Appendix
Carnegie Mellon University

### Visual Description
Section header slide for "Appendix". No notable visual beyond text.

## Page 34
### Content
Slide 34
Proof of “Lipschitz continuous = Bounded subgradients”
First, we will prove it for convex functions, and then for nonconvex functions
Carnegie Mellon University

### Visual Description
Text-based slide introducing the proofs in the appendix. No notable visual beyond text.

## Page 35
### Content
Slide 35
Convex Lipschitz Functions with Bounded Subgradients
Lemma
Let $f : \mathbb{R}^n \to \mathbb{R}$ be convex.
$f$ is Lipschitz continuous with constant $G > 0$
$$\iff \|g_x\|_2 \le G \text{ for any subgradient } g_x \in \partial f(x) \text{ at any } x.$$
Proof “$\Rightarrow$” By the definition of subgradient: $f(x) + g_x^T(y - x) \le f(y) \quad \forall x, y$
$$g_x^T(y - x) \le f(y) - f(x) \quad \forall x, y \quad (*1)$$
For a given $x$ and subgradient $g_x$, let $y \doteq x + g_x$
$$\|g_x\|_2^2 = g_x^T g_x = g_x^T(x + g_x - x) = g_x^T(y - x) \le f(y) - f(x) \quad \forall x \quad \text{[using (*1)]}$$
$$= f(x + g_x) - f(x) \le |f(x + g_x) - f(x)| \le G \cdot \|g_x\|_2 \quad \forall x$$
[Since by our assumptions $f$ is Lipschitz-$G$]
$$\Rightarrow \|g_x\|_2^2 \le G \|g_x\|_2 \quad \forall x \Rightarrow \|g_x\|_2 \le G \quad \forall x \quad \blacksquare$$
Carnegie Mellon University

### Visual Description
Text-based slide showing the first part of the proof for the lemma relating Lipschitz continuity and bounded subgradients for convex functions. No notable visual beyond text and equations.

## Page 36
### Content
Slide 36
Convex Lipschitz Functions with Bounded Subgradients
Lemma
Let $f : \mathbb{R}^n \to \mathbb{R}$ be convex.
$f$ is Lipschitz continuous with constant $G > 0$
$$\iff \|g_x\|_2 \le G \text{ for any subgradient } g_x \in \partial f(x) \text{ at any } x.$$
Proof “$\Leftarrow$” Let $\|g_x\|_2 \le G$ for any subgradient $g_x \in \partial f(x)$ at any $x$.
By the definition of subgradient: $f(x) + g_x^T(y - x) \le f(y) \quad \forall x, y$
$$\Rightarrow f(x) - f(y) \le -g_x^T(y - x) \quad \forall x, y$$
$$f(x) - f(y) \le g_x^T(x - y) \le \|g_x\| \cdot \|x - y\| \quad \text{(Cauchy-Schwarz)}$$
$$f(x) - f(y) \le G \|x - y\|, \quad \forall x, y \quad \text{(since by assumption } \|g_x\|_2 \le G \text{)}$$
Similarly, $f(y) - f(x) \le G \|x - y\|$, also holds.
$$\Rightarrow |f(x) - f(y)| \le G \|x - y\|, \quad \forall x, y \Rightarrow f \text{ is Lipschitz continuous } \blacksquare$$
Carnegie Mellon University

### Visual Description
Text-based slide showing the second part of the proof for the lemma relating Lipschitz continuity and bounded subgradients for convex functions. No notable visual beyond text and equations.

## Page 37
### Content
Slide 37
Nonconvex Lipschitz continuous functions with Bounded subgradients
Theorem [Bounded Gradient => Lipschitz continuous]
$f : \mathbb{R}^n \to \mathbb{R}$ doesn't need to be convex here!
Let $f : \mathbb{R}^n \to \mathbb{R}$ be differentiable, and suppose there exists a constant $L > 0$ such that
$$\|\nabla f(x)\| \le L \text{ for all } x \in \mathbb{R}^n.$$
Then $f$ is Lipschitz continuous with constant $L$, i.e., for all $x, y \in \mathbb{R}^n$,
$$|f(x) - f(y)| \le L \|x - y\|.$$
Proof: [Next slide]
Carnegie Mellon University

### Visual Description
Text-based slide stating a theorem for nonconvex functions relating bounded gradients to Lipschitz continuity. No notable visual beyond text and equations.

## Page 38
### Content
Slide 38
Proof
Proof
Let $x, y \in \mathbb{R}^n$, and define the straight line from $x$ to $y$:
$$\gamma(t) = x + t(y - x), \quad t \in [0, 1],$$
Define the scalar function
$$g(t) = f(\gamma(t)) = f(x + t(y - x)).$$
Then $g$ is differentiable on $[0, 1]$, and by the chain rule:
$$g'(t) = \nabla f(\gamma(t))^T(y - x).$$
Carnegie Mellon University

### Visual Description
Text-based slide starting the proof of the theorem from the previous page using a parameterized line segment. No notable visual beyond text and equations.

## Page 39
### Content
Slide 39
Proof Continued
Therefore,
$$f(y) - f(x) = g(1) - g(0) = \int_0^1 g'(t) dt = \int_0^1 \nabla f(\gamma(t))^T(y - x) dt.$$
Taking absolute value and using the Cauchy-Schwarz inequality:
$$|f(y) - f(x)| \le \int_0^1 |\nabla f(\gamma(t))^T(y - x)| dt \le \int_0^1 \|\nabla f(\gamma(t))\| \cdot \|y - x\| dt.$$
Since $\|\nabla f(\gamma(t))\| \le L$ for all $t \in [0, 1]$, we get:
$$|f(y) - f(x)| \le \int_0^1 L \cdot \|y - x\| dt = L \|y - x\|. \quad \blacksquare$$
Carnegie Mellon University

### Visual Description
Text-based slide completing the proof using the fundamental theorem of calculus and Cauchy-Schwarz inequality. No notable visual beyond text and equations.

## Page 40
### Content
Slide 40
Converse Theorem
The converse is also true [assuming the function is differentiable]:
Theorem [Lipschitz continuous, Differentiable => Bounded Gradient]
$f : \mathbb{R}^n \to \mathbb{R}$ doesn't need to be convex here!
Let $f : \mathbb{R}^n \to \mathbb{R}$ be differentiable everywhere.
If $f$ is Lipschitz continuous with constant $L > 0$, then for all $x \in \mathbb{R}^n$,
$$\|\nabla f(x)\| \le L.$$
Proof: [Next slide]
Carnegie Mellon University

### Visual Description
Text-based slide stating the converse theorem for differentiable functions. No notable visual beyond text and equations.

## Page 41
### Content
Slide 41
Proof of the Converse Theorem
We are given that for all $x, y \in \mathbb{R}^n$,
$$|f(x) - f(y)| \le L \|x - y\|.$$
We want to show that $\|\nabla f(x)\| \le L$ for all $x \in \mathbb{R}^n$.
Let $x \in \mathbb{R}^n$ be arbitrary, and let $v \in \mathbb{R}^n$ be any unit vector, i.e., $\|v\| = 1$.
Consider the directional derivative of $f$ at $x$ in the direction $v$:
$$D_v f(x) = \lim_{t \to 0} \frac{f(x + tv) - f(x)}{t}.$$
Using the Lipschitz condition:
$$\left| \frac{f(x + tv) - f(x)}{t} \right| \le \frac{L \|tv\|}{t} = L \|v\| = L.$$
Taking the limit as $t \to 0$, we obtain:
$$|D_v f(x)| \le L.$$
Carnegie Mellon University

### Visual Description
Text-based slide starting the proof of the converse theorem using directional derivatives. No notable visual beyond text and equations.

## Page 42
### Content
Slide 42
Proof of the Converse Theorem
We already know:
$$|D_v f(x)| \le L.$$
Since $f$ is differentiable, the directional derivative exists and satisfies:
$$D_v f(x) = \nabla f(x)^T v.$$
Therefore, for all unit vectors $v$,
$$|\nabla f(x)^T v| \le L.$$
Taking the supremum over all such $v$, we obtain:
$$\|\nabla f(x)\| = \sup_{\|v\|=1} |\nabla f(x)^T v| \le L. \quad \blacksquare$$
Carnegie Mellon University

### Visual Description
Text-based slide completing the proof of the converse theorem. No notable visual beyond text and equations.

## Page 43
### Content
Slide 43
Proof of Basic Lemma
Carnegie Mellon University

### Visual Description
Section header slide for "Proof of Basic Lemma". No notable visual beyond text.

## Page 44
### Content
Slide 44
Basic Inequality
Lemma (Basic Inequality)
Suppose $f$ is convex, and $G$-Lipschitz.
Let $\eta_0, \eta_1, \dots, \eta_k$ be an arbitrary step-size sequence.
Let $x^{\text{best}}$ be the best iterate of the subgradient method amongst $x^0, \dots, x^k$.
Then the subgradient method satisfies,
$$f(x^{\text{best}}) - f(x^*) \le \frac{\|x^0 - x^*\|_2^2 + G^2 \sum_{t=0}^{k-1} \eta_t^2}{2 \sum_{t=0}^{k-1} \eta_t}$$
Proof: [Next slides]
Carnegie Mellon University

### Visual Description
Text-based slide restating the basic inequality lemma before its proof. No notable visual beyond text and equations.

## Page 45
### Content
Slide 45
Proof of Basic Inequality
We want to prove that subgradient method satisfies
$$f(x^{\text{best}}) - f(x^*) \le \frac{\|x^0 - x^*\|_2^2 + G^2 \sum_{t=0}^{k-1} \eta_t^2}{2 \sum_{t=0}^{k-1} \eta_t}$$
Proof:
$$\|x^{t+1} - x^*\|_2^2 = \|x^t - \eta_t g_{x^t} - x^*\|_2^2$$
$$= \|x^t - x^* - \eta_t g_{x^t}\|_2^2$$
$$= \|x^t - x^*\|_2^2 - 2\eta_t g_{x^t}^T(x^t - x^*) + \eta_t^2 \|g_{x^t}\|_2^2$$
$$\le \|x^t - x^*\|_2^2 - 2\eta_t g_{x^t}^T(x^t - x^*) + \eta_t^2 G^2 \quad \text{By Lemma (*1)}$$
Therefore,
$$\|x^{t+1} - x^*\|_2^2 \le \|x^t - x^*\|_2^2 - 2\eta_t g_{x^t}^T(x^t - x^*) + \eta_t^2 G^2$$
Carnegie Mellon University

### Visual Description
Text-based slide starting the proof of the basic inequality by expanding the squared distance to the optimum. No notable visual beyond text and equations.

## Page 46
### Content
Slide 46
Proof of Basic Inequality
Proof [continued]
$$\|x^{t+1} - x^*\|_2^2 \le \|x^t - x^*\|_2^2 - 2\eta_t g_{x^t}^T(x^t - x^*) + \eta_t^2 G^2$$
By the definition of subgradient of convex $f$:
$$f(x) + g_x^T(y - x) \le f(y) \quad \forall y \in \text{dom}(f)$$
$$\Rightarrow f(x^t) + g_{x^t}^T(x^* - x^t) \le f(x^*) \quad \text{[Using } x = x^t, y = x^* \text{]}$$
$$-g_{x^t}^T(x^t - x^*) \le f(x^*) - f(x^t)$$
$$-2\eta_t g_{x^t}^T(x^t - x^*) \le 2\eta_t(f(x^*) - f(x^t))$$
Therefore,
$$\|x^{t+1} - x^*\|_2^2 \le \|x^t - x^*\|_2^2 + 2\eta_t(f(x^*) - f(x^t)) + \eta_t^2 G^2$$
Carnegie Mellon University

### Visual Description
Text-based slide continuing the proof by using the subgradient property to bound the inner product term. No notable visual beyond text and equations.

## Page 47
### Content
Slide 47
Proof of Basic Inequality
Proof [continued]
$$\|x^{t+1} - x^*\|_2^2 \le \|x^t - x^*\|_2^2 + 2\eta_t(f(x^*) - f(x^t)) + \eta_t^2 G^2$$
Summing from $t = \{0, \dots, k - 1\}$, we have that
$$\|x^k - x^*\|_2^2 \le \|x^0 - x^*\|_2^2 + 2 \sum_{t=0}^{k-1} \eta_t(f(x^*) - f(x^t)) + \sum_{t=0}^{k-1} \eta_t^2 G^2$$
$$-2 \sum_{t=0}^{k-1} \eta_t(f(x^*) - f(x^t)) \le \|x^0 - x^*\|_2^2 + \sum_{t=0}^{k-1} \eta_t^2 G^2 - \|x^k - x^*\|_2^2$$
$$2 \sum_{t=0}^{k-1} \eta_t(f(x^t) - f(x^*)) \le \|x^0 - x^*\|_2^2 + G^2 \sum_{t=0}^{k-1} \eta_t^2$$
$$2 \sum_{t=0}^{k-1} \eta_t(f(x^{\text{best}}) - f(x^*)) \le 2 \sum_{t=0}^{k-1} \eta_t(f(x^t) - f(x^*)) \le \|x^0 - x^*\|_2^2 + G^2 \sum_{t=0}^{k-1} \eta_t^2$$
Carnegie Mellon University

### Visual Description
Text-based slide continuing the proof by summing the inequalities over iterations and using the definition of the best iterate. No notable visual beyond text and equations.

## Page 48
### Content
Slide 48
Proof of Basic Inequality
Proof [continued]
$$2 \sum_{t=0}^{k-1} \eta_t(f(x^{\text{best}}) - f(x^*)) \le 2 \sum_{t=0}^{k-1} \eta_t(f(x^t) - f(x^*)) \le \|x^0 - x^*\|_2^2 + G^2 \sum_{t=0}^{k-1} \eta_t^2$$
Therefore,
$$2 \sum_{t=0}^{k-1} \eta_t(f(x^{\text{best}}) - f(x^*)) \le \|x^0 - x^*\|_2^2 + G^2 \sum_{t=0}^{k-1} \eta_t^2$$
$$(f(x^{\text{best}}) - f(x^*)) 2 \sum_{t=0}^{k-1} \eta_t \le \|x^0 - x^*\|_2^2 + G^2 \sum_{t=0}^{k-1} \eta_t^2$$
$$f(x^{\text{best}}) - f(x^*) \le \frac{\|x^0 - x^*\|_2^2 + G^2 \sum_{t=0}^{k-1} \eta_t^2}{2 \sum_{t=0}^{k-1} \eta_t} \quad \blacksquare$$
Carnegie Mellon University

### Visual Description
Text-based slide completing the proof of the basic inequality. No notable visual beyond text and equations.

## Page 49
### Content
Slide 49
Derivative of the Distance Function
Carnegie Mellon University

### Visual Description
Section header slide for "Derivative of the Distance Function". No notable visual beyond text.

## Page 50
### Content
Slide 50
Attempt 1: Derivative of the Distance Function
Theorem Let $h(x) \doteq \|P_C(x) - x\|$. For $x \notin C, \nabla h(x) = \frac{x - P_C(x)}{\|x - P_C(x)\|_2}$
Proof:
$h$ is differentiable at $x \iff$ then $h(y) = h(x) + v^T(y - x) + o(\|x - y\|)$ for some $v$
$h(x) = \|P_C(x) - x\|$ Let $y \doteq (1 - \epsilon)x + \epsilon P_C(x)$. $y - x = \epsilon P_C(x) - \epsilon x$.
Note that $h(y) = (1 - \epsilon)h(x)$
$\Rightarrow h(y) = (1 - \epsilon)h(x) = h(x) + v^T(\epsilon P_C(x) - \epsilon x) + o(\|\epsilon P_C(x) - \epsilon x\|)$ for some $v$
$-\epsilon h(x) = \epsilon v^T(P_C(x) - x) + o(\|\epsilon P_C(x) - \epsilon x\|)$ for some $v$
$-h(x) = v^T(P_C(x) - x) + o(\|P_C(x) - x\|)$ for some $v$
$-\|P_C(x) - x\| = v^T(P_C(x) - x) + o(\|P_C(x) - x\|)$ for some $v$
$-1 = v^T \frac{(P_C(x) - x)}{\|P_C(x) - x\|}$ for some $v \Rightarrow v = \frac{x - P_C(x)}{\|P_C(x) - x\|}$ looks like a good candidate.
Carnegie Mellon University

### Visual Description
Text-based slide showing a first attempt at proving the derivative of the distance function using a specific choice of $y$. No notable visual beyond text and equations.

## Page 51
### Content
Slide 51
Attempt 1: Derivative of the Distance Function
$$h(x) \doteq \|P_C(x) - x\|.$$
$v \doteq \frac{x - P_C(x)}{\|P_C(x) - x\|}$ looks like a good candidate for $\nabla h(x)$
Since $\nabla h(x) = v \iff h(y) = h(x) + v^T(y - x) + o(\|x - y\|), \quad (*)$
all that's left is to show that $v$ satisfies $(*)$, i.e.
We need: $\|P_C(y) - y\| = \|P_C(x) - x\| + \frac{(x - P_C(x))^T}{\|P_C(x) - x\|}(y - x) + o(\|x - y\|)$
We will omit the details, but it can be done with some calculations.
After this, we can conclude that
$$\nabla h(x) = \frac{x - P_C(x)}{\|x - P_C(x)\|} \quad \blacksquare$$
Carnegie Mellon University

### Visual Description
Text-based slide concluding the first attempt at the proof. No notable visual beyond text and equations.

## Page 52
### Content
Slide 52
Attempt 2: Derivative of the Distance Function
Let us try another proof with subgradients
$$h(x) = \|P_C(x) - x\| = \min_{y \in C} \|x - y\|$$
It is easy to see that this is a convex function. Let us now derive its subgradients.
We will show that $\frac{x - P_C(x)}{\|x - P_C(x)\|} \in \partial h(x)$
(We should also show that this is the only element in $\partial h(x)$ )
By properties of projection,
$$u^* = P_C(x) \iff \langle u^* - x, y - u^* \rangle \ge 0 \text{ for all } y \in C$$
Let $H \doteq \{y \mid \langle u^* - x, y - u^* \rangle \ge 0\}$ where $u^* = P_C(x)$.
Observation: $C \subseteq H$
Carnegie Mellon University

### Visual Description
The slide contains the same diagram as page 27, showing a convex set $C$, a point $x$, its projection $u^*$, and a supporting hyperplane. The text introduces a second attempt at the proof using subgradients and defining a half-space $H$ that contains $C$.

## Page 53
### Content
Slide 53
Attempt 2: Derivative of the Distance Function
$$h(x) = \|P_C(x) - x\| = \min_{y \in C} \|x - y\| \quad H \doteq \{y \mid (u^* - x)^T(y - u^*) \ge 0\}$$
Lemma $h(y) = \text{dist}(y, C) \ge \frac{(x - u^*)^T(y - u^*)}{\|x - u^*\|} \quad \forall y \in \mathbb{R}^d$
Proof: If $y \in H$, then $(x - u^*)^T(y - u^*) \le 0$
If $y \notin H$, then $(x - u^*)^T(y - u^*) = \|x - u^*\| \cdot \|y - u^*\| \cos(\theta)$
where $\theta$ is the angle between $x - u^*$ and $y - u^*$
$$\frac{(x - u^*)^T(y - u^*)}{\|x - u^*\|} = \frac{\|x - u^*\| \cdot \|y - u^*\| \cos(\theta)}{\|x - u^*\|} = \|y - u^*\| \cos(\theta)$$
Carnegie Mellon University

### Visual Description
Text-based slide starting the proof of a lemma for the second attempt. No notable visual beyond text and equations.

## Page 54
### Content
Slide 54
Attempt 2: Derivative of the Distance Function
Proof [continued]:
$H \doteq \{y \mid (u^* - x)^T(y - u^*) \ge 0\}$
This is a half-space.
$$\frac{(x - u^*)^T(y - u^*)}{\|x - u^*\|} = \frac{\|x - u^*\| \cdot \|y - u^*\| \cos(\theta)}{\|x - u^*\|} = \|y - u^*\| \cos(\theta) = \text{dist}(y, H)$$
Carnegie Mellon University

### Visual Description
The slide features a diagram with a purple oval representing set $C$ and a light blue region representing the half-space $H$. A point $x$ is shown outside $H$, and its projection onto $C$ is $u^*$. Two points labeled $y$ are shown, one inside $H$ and one outside. For the point $y$ outside $H$, a dashed line shows its distance to the boundary of $H$, which is labeled as $\|y - u^*\| \cos(\theta)$. The angle $\theta$ is indicated between the vector $y - u^*$ and the vector $x - u^*$.

## Page 55
### Content
Slide 55
Attempt 2: Derivative of the Distance Function
Proof [continued]:
$$\frac{(x - u^*)^T(y - u^*)}{\|x - u^*\|} = \frac{\|x - u^*\| \cdot \|y - u^*\| \cos(\theta)}{\|x - u^*\|} = \|y - u^*\| \cos(\theta) = \text{dist}(y, H)$$
$$\le \text{dist}(y, C) \text{ (since } C \subseteq H \text{)} \quad \blacksquare$$
Therefore, forall $y \in \mathbb{R}^d$
$$\text{dist}(y, C) \ge \frac{(x - u^*)^T(y - u^*)}{\|x - u^*\|} = \frac{(x - u^*)^T(y - x + x - u^*)}{\|x - u^*\|}$$
$$= \|x - u^*\| + \left( \frac{(x - u^*)}{\|x - u^*\|} \right)^T(y - x)$$
$$= \text{dist}(x, C) + \left( \frac{(x - u^*)}{\|x - u^*\|} \right)^T(y - x)$$
$$\Rightarrow \left( \frac{x - u^*}{\|x - u^*\|} \right) \in \partial \text{dist}(x, C) \quad \blacksquare$$
Carnegie Mellon University

### Visual Description
Text-based slide completing the second attempt at the proof, showing that the candidate vector is indeed a subgradient of the distance function. No notable visual beyond text and equations.\n