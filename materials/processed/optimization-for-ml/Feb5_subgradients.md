# Feb5_subgradients

Source: `materials/archive/Feb5_subgradients.pdf`
Duplicate equivalents: `Feb5_subgradients.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `strict full-PDF single-call conversion`
Finish reason: `STOP`
Pages: 23
## Page 1
### Content
Optimization for Machine Learning
Subgradients
Slide 1
Carnegie Mellon University

### Visual Description
This is a title slide. It features the text "Optimization for Machine Learning" in large blue font at the top, followed by "Subgradients" in large red font in the center. The bottom left corner says "Slide 1" and the bottom right corner has the "Carnegie Mellon University" logo in red.

---

## Page 2
### Content
Outline
* Subgradients
* Examples
* Subgradient rules
Slide 2
Carnegie Mellon University

### Visual Description
This is an outline slide. It has the title "Outline" in blue at the top. Below it is a bulleted list with three items: "Subgradients", "Examples", and "Subgradient rules". The footer contains "Slide 2" and the university logo.

---

## Page 3
### Content
Recall gradient descent
We want to solve
$$\min_{x \in \mathbb{R}^n} f(x),$$
for $f$ convex and differentiable
Gradient descent: choose initial $x^{(0)} \in \mathbb{R}^n$, repeat
$$x^{(k)} = x^{(k-1)} - \eta_k \cdot \nabla f(x^{(k-1)}), \quad k = 1, 2, 3, \dots$$
If $\nabla f$ Lipschitz, gradient descent has convergence rate $O(1/k)$
Downsides:
* Requires $f$ to be differentiable
Slide 3
Carnegie Mellon University

### Visual Description
This slide reviews gradient descent. It presents the optimization problem, the update rule, and the convergence rate. It highlights a downside: the requirement for differentiability. There are no diagrams or images.

---

## Page 4
### Content
Review of Subgradients
Remember that for convex differentiable $f: \mathbb{R}^n \to \mathbb{R}$,
$$f(y) \geq f(x) + \nabla f(x)^T(y - x) \quad \text{all } x, y$$
i.e., linear approximation always underestimates $f$
We have defined subgradients before. We will stick to a convex function $f$ (although one can define subgradients more generally).
A subgradient of convex $f: \mathbb{R}^n \to \mathbb{R}$ at $x \in \text{dom}(f)$ is any $g_x \in \mathbb{R}^n$ such that
$$f(y) \geq f(x) + g_x^T(y - x), \quad \forall y \in \text{dom}(f)$$
Slide 4
Carnegie Mellon University

### Visual Description
The slide contains a plot on the right side illustrating subgradients.
* **Axes:** The horizontal axis is $x$ (ranging from -4 to 4) and the vertical axis is $y$ (ranging from -5 to 15).
* **Function:** A solid black curve represents a convex function $f(x)$ with a sharp "kink" at $x=1$.
* **Gradient:** At a smooth point on the curve (around $x=3$), a blue dashed line represents the tangent line, corresponding to the unique gradient.
* **Subgradients:** At the non-differentiable point $x=1$, three red dotted lines pass through the point $(1, f(1))$. These lines represent different subgradients, all of which remain below the function curve, satisfying the definition $f(y) \geq f(x) + g_x^T(y - x)$.

---

## Page 5
### Content
Review of Subgradients and Subdifferential
Notes:
* Same definition works for nonconvex $f$ (however, subgradients might not exist for some nonconvex functions)
* $\nabla f(x)$ is a local property of function $f$ at $x$
* subgradient $g_x$ is a global property of function $f$ at $x$ since we have to have that $f(y) \geq f(x) + \langle g_x, y - x \rangle, \forall y \in \text{dom}(f)$
Definition [subdifferential]:
The set of all subgradients at a point $x$ is called the subdifferential of $f$ at $x$ and it is denoted as $\partial f(x)$.
$$\partial f(x) = \{g \in \mathbb{R}^n : g \text{ is a subgradient of } f \text{ at } x\}$$
Slide 5
Carnegie Mellon University

### Visual Description
This slide provides notes on subgradients and defines the subdifferential. It emphasizes that while gradients are local, subgradients are global properties. There are no visual diagrams beyond the text and equations.

---

## Page 6
### Content
Subgradient and Subdifferential
Lemma [existence]:
If $x \in \text{relInt}(\text{dom}(f))$, and $f$ is convex, then the subgradient $g_x$ of $f$ exists at $x$. (even if $f$ is not differentiable at $x$)
Proof:
Uses supporting hyperplane theorem and epigraph representation, see Boyd's EE 364b notes:
https://web.stanford.edu/class/ee364b/lectures/subgradients_notes.pdf
Slide 6
Carnegie Mellon University

### Visual Description
This slide states a lemma regarding the existence of subgradients for convex functions and provides a link for the proof. There are no visual diagrams.

---

## Page 7
### Content
Subgradient and Subdifferential
Subgradient: $f(y) \geq f(x) + \langle g_x, y - x \rangle$ for any $y \in \text{dom}(f)$
Lemma [uniqueness for differentiable functions]:
If $f$ is differentiable at $x$, then there is only one vector which will satisfy the above definition and it will coincide with the usual gradient, i.e. $g_x = \nabla f(x)$.
Proof:
* https://maunamn.wordpress.com/7-subgradients-of-convex-functions/
* Rockafellar Theorem 25.1
Reverse theorem: When the subgradient is unique, the subgradient is equal to the gradient and the function is differentiable
Slide 7
Carnegie Mellon University

### Visual Description
This slide discusses the relationship between subgradients and gradients for differentiable functions, noting that the subgradient is unique and equal to the gradient in such cases. No visual diagrams are present.

---

## Page 8
### Content
Subdifferential Properties
* $\partial f(x)$ is closed and convex (even for nonconvex $f$)
* $\partial f(x)$ is nonempty in $x \in \text{relInt}(\text{dom}(f))$ for convex $f$ (can be empty for nonconvex $f$)
* If $f$ is differentiable at $x$, then $\partial f(x) = \{\nabla f(x)\}$
* If $\partial f(x) = \{g\}$, then $f$ is differentiable at $x$ and $\nabla f(x) = g$
Slide 8
Carnegie Mellon University

### Visual Description
This slide lists several mathematical properties of the subdifferential set $\partial f(x)$. There are no visual diagrams.

---

## Page 9
### Content
Example: $|x|$
subgradient: $f(y) \geq f(x) + g_x^T(y - x), \quad \forall y$
Consider $f : \mathbb{R} \to \mathbb{R}, f(x) = |x|$
Here if $x \neq 0$, then the function $f$ is differentiable and $g_x = \text{sign}(x)$.
At $x = 0, f(x)$ is not differentiable
* For $x = 0$, subgradient $g_x$ is any element of $[-1, 1]$
* For $x \neq 0$, unique subgradient $g = \text{sign}(x)$
Proof: $f(y) \geq 0 + g_x^T(y - 0), \quad \forall y$
$|y| \geq 0 + g_x^T y, \quad \forall y$ (This is true if $g_x \in [-1, 1]$)
Slide 9
Carnegie Mellon University

### Visual Description
The slide contains a 2D plot on the right.
* **Axes:** Horizontal axis $x$ (-2 to 2), vertical axis $f(x)$ (-0.5 to 2.0).
* **Function:** A solid black V-shaped line represents $f(x) = |x|$.
* **Subgradients at origin:** At $x=0$, several dashed lines pass through the origin. These lines have slopes ranging from -1 to 1 (specifically, slopes of 1, -1, and some intermediate values are shown). These dashed lines illustrate the set of subgradients at the non-differentiable point $x=0$, showing they all stay below the V-shape.

---

## Page 10
### Content
Example: 1-norm
subgradient: $f(y) \geq f(x) + g_x^T(y - x), \quad \forall y$
Consider $f : \mathbb{R}^n \to \mathbb{R}, f(x) = \|x\|_1 = \sum_{i=1}^n |x_i|$
When $\exists i$ s.t. $x_i = 0 \Rightarrow f(x)$ is not differentiable.
$$\sum_{i=1}^n |y_i| \geq \sum_{i=1}^n |x_i| + \sum_{i=1}^n g_{xi}(y_i - x_i), \quad \forall y$$
$g_x$ can be found coordinatewise.
$$|y_i| \geq |x_i| + g_{xi}(y_i - x_i), \quad \forall y_i \in \mathbb{R}$$
* For $x_i \neq 0$, unique $i$th component $g_{xi} = \text{sign}(x_i)$
* For $x_i = 0$, $i$th component $g_{xi}$ is an element of $[-1, 1]$
Proof: use the previous result about $|x|$ elementwise
Slide 10
Carnegie Mellon University

### Visual Description
The slide features a 3D plot on the right.
* **Axes:** Labeled $x1$, $x2$, and $f(x)$.
* **Surface:** The plot shows the surface of the 1-norm function in two dimensions, $f(x_1, x_2) = |x_1| + |x_2|$. It looks like an inverted four-sided pyramid or a "diamond-shaped" bowl. The surface has sharp ridges along the $x1$ and $x2$ axes where the function is not differentiable.

---

## Page 11
### Content
Example: 2-norm
Consider $f : \mathbb{R}^n \to \mathbb{R}, f(x) = \|x\|_2$
$f(x) = (x^T x)^{1/2}$
$\nabla f(x) = \frac{1}{2}(x^T x)^{-1/2} 2x = \frac{x}{\sqrt{x^T x}}$
At $x = 0, f(x)$ is not differentiable
subgradient: we need to check which $g_0$ vectors satisfy $f(y) \geq f(0) + g_0^T(y - 0), \quad \forall y$
i.e. find $g_0$ s.t. $\|y\| \geq g_0^T y, \quad \forall y$
Slide 11
Carnegie Mellon University

### Visual Description
The slide features a 3D plot on the right.
* **Axes:** Labeled $x1$, $x2$, and $f(x)$.
* **Surface:** The plot shows the surface of the 2-norm function in two dimensions, $f(x_1, x_2) = \sqrt{x_1^2 + x_2^2}$. This is a circular cone with its vertex at the origin $(0,0,0)$. The surface is smooth everywhere except at the origin.

---

## Page 12
### Content
Example: 2-norm
Consider $f : \mathbb{R}^n \to \mathbb{R}, f(x) = \|x\|_2$
$\nabla f(x) = \frac{1}{2}(x^T x)^{-1/2} 2x = \frac{x}{\sqrt{x^T x}}$
We need to find $g_0$ s.t. $\|y\| \geq g_0^T y, \quad \forall y$
$\|g_0\| \cdot \|y\| \cdot \cos(g_0, y) = g_0^T y, \quad \forall y, g_0$
We need to find $g_0$ s.t. $1 \geq \|g_0\| \cdot \cos(g_0, y), \quad \forall y$
Idea: Lets consider $\{g_0 : \|g_0\| \leq 1\}$
[These are subgradients. We can also see if $\|g_0\| > 1$, it cannot be subgradient.
* For $x = 0$, subgradient $g_0$ is any element of $\{z : \|z\|_2 \leq 1\}$
* For $x \neq 0$, unique subgradient $g_x = x/\|x\|_2$
Slide 12
Carnegie Mellon University

### Visual Description
This slide continues the 2-norm example. It includes the same 3D cone plot as Page 11, showing the surface of the 2-norm. The text explains how to derive the subdifferential at the origin, which is the unit ball.

---

## Page 13
### Content
Reminder: Normal Cone
Definition [Normal Cone]:
Given a set $C$ (doesn't need to be convex), and a point $x \in C$ the normal cone of $C$ at $x$ is defined as:
$$N_C(x) \doteq \{g : g^T(y - x) \leq 0, \text{ for all } y \in C\}$$
Theorem [Normal Cones are convex]:
Even if $C$ is not convex, the normal cone is a convex cone for all $x \in C$.
Slide 13
Carnegie Mellon University

### Visual Description
The slide contains a diagram of a set $C$ and its normal cones at various points.
* **Set C:** Represented as a large, roughly oval-shaped region.
* **Point $x_3$:** Located on a smooth part of the boundary. The normal cone $N_C(x_3)$ is shown as a single dashed ray pointing directly outward, perpendicular to the boundary.
* **Point $x_2$:** Also on a smooth boundary part. $N_C(x_2)$ is another single dashed ray pointing outward.
* **Point $x_1$:** Located at a sharp corner (kink) of the set. The normal cone $N_C(x_1)$ is shown as a shaded gray "fat" cone region pointing outward, representing multiple possible normal vectors.
* **Point $x$ and $y$:** A point $x$ is on the boundary with a red arrow labeled $N_C(x)$ pointing outward. Another red arrow labeled $y$ points from $x$ into the interior of $C$. This illustrates the definition $g^T(y-x) \leq 0$, as the angle between the normal vector $g$ and the vector $(y-x)$ is obtuse.

---

## Page 14
### Content
Reminder: Normal Cone
$$N_C(x) \doteq \{g : g^T(y - x) \leq 0, \text{ for all } y \in C\}$$
Assume that $C$ is convex
There are three different types of points for which we should understand what the normal cone looks like:
* Interior points
    * the normal cone is the zero vector
* Boundary points where the boundary is smooth
    * the normal cone is a single ray
* Boundary points where the boundary is not smooth
    * the normal cone is a “fat” cone
Slide 14
Carnegie Mellon University

### Visual Description
This slide uses the same diagram as Page 13 (without the red $x$ and $y$ arrows) to categorize normal cones based on the location and smoothness of the boundary at point $x$. It highlights that for interior points, the normal cone is just the origin, for smooth boundary points it's a ray, and for sharp corners it's a wider cone.

---

## Page 15
### Content
Example: Indicator Function of a Convex Set
Consider the function $f(x) = \mathbb{I}_C(x) \doteq \begin{cases} 0 & \text{if } x \in C \\ \infty & \text{if } x \notin C \end{cases} \quad \mathbb{I}_C : \mathbb{R}^n \to \mathbb{R},$
the indicator function for a convex set $C \subseteq \mathbb{R}^n$.
Note: If $C \subseteq \mathbb{R}^n$ is convex, then $\mathbb{I}_C(x)$ is convex in $\mathbb{R}^n$
that is, $\mathbb{I}_C(\theta x + (1 - \theta)y) \leq \theta \mathbb{I}_C(x) + (1 - \theta)\mathbb{I}_C(y) \quad \forall \theta \in [0, 1], \forall x, y \in \mathbb{R}^n$
[Proof: This follows from the definitions]
Lemma: [The subdifferential of the indicator function = normal cone]
Assume $C$ is a convex set. Then $\mathbb{I}_C(x)$ is convex, and for any $x \in C$,
$$\partial \mathbb{I}_C(x) = N_C(x),$$
i.e. the subdifferential of the indicator function is the same as the normal cone.
Proof: [Next slide]
Slide 15
Carnegie Mellon University

### Visual Description
This slide introduces the indicator function of a convex set and states a lemma that its subdifferential at a point $x \in C$ is exactly the normal cone of the set at that point. There are no visual diagrams.

---

## Page 16
### Content
Example: Indicator Function of a Convex Set
Proof of $\partial \mathbb{I}_C(x) = N_C(x), \forall x \in C$
Fix a point $x \in C \quad N_C(x) \doteq \{g : g^T(y - x) \leq 0, \text{ for all } y \in C\}$
a) Let us prove that if $g_x \in \partial \mathbb{I}_C(x)$, then $g_x \in N_C(x)$
Observe that if $g_x \in \partial \mathbb{I}_C(x)$, then by definition we must have that,
subgradient: $\mathbb{I}_C(y) \geq \mathbb{I}_C(x) + g_x^T(y - x), \quad \forall y$
Now, there are two possibilities: if $y \notin C$, then the above condition is satisfied (since the LHS is $\infty$).
So the only interesting possibility is when $y \in C$. Vector $g_x$ must thus satisfy,
$0 \geq 0 + g_x^T(y - x), \quad \forall y \in C$
(since for $x \in C$, we have that $\mathbb{I}_C(x) = 0$)
which is the same as requiring that $g_x \in N_C(x)$
Slide 16
Carnegie Mellon University

### Visual Description
This slide provides the first part of the proof showing that any subgradient of the indicator function must be in the normal cone. There are no visual diagrams.

---

## Page 17
### Content
Example: Indicator Function of a Convex Set
Proof of $\partial \mathbb{I}_C(x) = N_C(x), \forall x \in C$
Fix a point $x \in C \quad N_C(x) \doteq \{g : g^T(y - x) \leq 0, \text{ for all } y \in C\}$
b) Let us prove that if $x \in C, g_x \in N_C(x)$, then $g_x \in \partial \mathbb{I}_C(x)$
If $g_x \in N_C(x)$, then $0 \geq g_x^T(y - x), \quad \forall y \in C$
then $0 \geq 0 + g_x^T(y - x), \quad \forall y \in C$
$\Rightarrow \mathbb{I}_C(y) \geq \mathbb{I}_C(x) + g_x^T(y - x), \quad \forall y$
$\Rightarrow g_x \in \partial \mathbb{I}_C(x) \quad \blacksquare$
Slide 17
Carnegie Mellon University

### Visual Description
This slide provides the second part of the proof, showing that any vector in the normal cone is a subgradient of the indicator function. There are no visual diagrams.

---

## Page 18
### Content
Example: Max of Functions
Let $f_1, f_2 : \mathbb{R}^n \to \mathbb{R}$ be convex, differentiable
Consider $f(x) = \max\{f_1(x), f_2(x)\}$
* For $f_1(x) > f_2(x)$, unique subgradient $g = \nabla f_1(x)$
* For $f_2(x) > f_1(x)$, unique subgradient $g = \nabla f_2(x)$
* For $f_1(x) = f_2(x)$, subgradient $g$ is any point on the line segment between $\nabla f_1(x)$ and $\nabla f_2(x)$
Slide 18
Carnegie Mellon University

### Visual Description
The slide contains a 2D plot on the right.
* **Axes:** Horizontal axis $x$ (-2 to 2), vertical axis $f(x)$ (0 to 15).
* **Functions:** Two dashed curves represent $f_1(x)$ and $f_2(x)$. One is a steep parabola, and the other is a shallower curve.
* **Max Function:** A solid black curve represents $f(x) = \max\{f_1(x), f_2(x)\}$. It follows the upper envelope of the two dashed curves.
* **Kink:** At the point where the two dashed curves intersect (around $x=0.5$), the solid curve has a sharp corner. This illustrates where the subdifferential is a set (the line segment between the two gradients) rather than a single point.

---

## Page 19
### Content
Subgradient calculus
Basic rules for convex functions:
* Scaling: $\partial(af) = a \cdot \partial f$ provided $a > 0$
* Addition: $\partial(f_1 + f_2) = \partial f_1 + \partial f_2$
* Affine composition: if $g(x) = f(Ax + b)$, then $\partial g(x) = A^T \partial f(Ax + b)$
Slide 19
Carnegie Mellon University

### Visual Description
This slide lists basic calculus rules for subdifferentials, including scaling, addition, and affine composition. There are no visual diagrams.

---

## Page 20
### Content
Subgradient calculus
* Finite pointwise maximum: if $f(x) = \max_{i=1,\dots,m} f_i(x)$, then
$$\partial f(x) = \text{conv} \left( \bigcup_{i:f_i(x)=f(x)} \partial f_i(x) \right),$$
the convex hull of union of subdifferentials of all active functions at $x$
* General pointwise maximum: if $f(x) = \max_{s \in \mathcal{S}} f_s(x)$, then
$$\partial f(x) \supseteq \text{cl} \left\{ \text{conv} \left( \bigcup_{s:f_s(x)=f(x)} \partial f_s(x) \right) \right\}$$
and under some regularity conditions (on $\mathcal{S}, f_s$), we get $=$
Slide 20
Carnegie Mellon University

### Visual Description
This slide presents rules for the subdifferential of a pointwise maximum of functions, both for finite and general sets of functions. There are no visual diagrams.

---

## Page 21
### Content
Example: Subgradient of Lp norm
Important special case: $f(x) = \|x\|_p$.
Let $q$ be such that $1/p + 1/q = 1$, then $\|x\|_p = \max_{\|z\|_q \leq 1} z^T x$
Lemma
$$\partial f(x) = \left\{ y : \|y\|_q \leq 1 \text{ and } y^T x = \max_{\|z\|_q \leq 1} z^T x \right\}$$
Proof
Let $f_y(x) = y^T x$. From the subdifferential of the max function:
$$\partial f(x) = \text{cl} \left\{ \text{conv} \left( \bigcup_{y:f_y(x)=f(x)} \partial f_y(x) \right) \right\}$$
$$= \text{cl} \left\{ \text{conv} \left( \partial y^T x \mid \text{s.t. } y^T x = f(x), \|y\|_q \leq 1 \right) \right\}$$
$$= \text{cl} \left\{ \text{conv} \left( y \mid \text{s.t. } y^T x = \max_{\|z\|_q \leq 1} z^T x, \|y\|_q \leq 1 \right) \right\}$$
Slide 21
Carnegie Mellon University

### Visual Description
This slide derives the subdifferential of the $L_p$ norm using the property of dual norms and the subdifferential rule for the maximum of functions. There are no visual diagrams.

---

## Page 22
### Content
Why Subgradients?
Subgradients are important for two reasons:
* Convex analysis: optimality characterization via subgradients, monotonicity, relationship to duality
* Optimization: if you can compute subgradients of functions, then (usually) you can minimize those functions.
Slide 22
Carnegie Mellon University

### Visual Description
This slide summarizes the importance of subgradients in convex analysis and optimization. There are no visual diagrams.

---

## Page 23
### Content
Thanks for your Attention ☺
Slide 23
Carnegie Mellon University

### Visual Description
This is a concluding slide with the text "Thanks for your Attention" and a smiley face icon. The footer contains "Slide 23" and the university logo.\n