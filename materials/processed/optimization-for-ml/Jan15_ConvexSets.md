# Jan15_ConvexSets

Source: `materials/archive/Jan15_ConvexSets.pdf`
Duplicate equivalents: `Jan15_ConvexSets.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `strict full-PDF single-call conversion`
Finish reason: `STOP`
Pages: 77
## Page 1
### Content
Optimization for Machine Learning
Convex Sets, Functions, Optimization
Optimization for ML Slide 1
Carnegie Mellon University

### Visual Description
This is the title slide of a lecture presentation. The main title "Optimization for Machine Learning" is in large blue font at the top. The subtitle "Convex Sets, Functions, Optimization" is in large red font in the middle. The footer contains "Optimization for ML Slide 1" on the left and "Carnegie Mellon University" in red on the right.

## Page 2
### Content
Convex Optimization
Optimization for ML Slide 2
Carnegie Mellon University

### Visual Description
This is a section header slide. The text "Convex Optimization" is centered in large blue font. The footer contains "Optimization for ML Slide 2" on the left and "Carnegie Mellon University" in red on the right.

## Page 3
### Content
Convex Optimization Problems – Standard Form
$$\min_{x \in \mathcal{D}} f_0(x)$$
subject to $f_i(x) \leq b_i, i \in \{1, \dots, m\}$.
$h_j(x) = 0, j \in \{1, \dots, p\}$.
where
1. $\mathcal{D}$ is a convex set.
2. $f_0, f_1, \dots, f_m$ are convex functions.
3. $h_j(x) = a_j^T x + b_j$, are affine functions.
To make sense of this definition we’ll need to understand what convex sets and convex functions are.
Optimization for ML Slide 3
Carnegie Mellon University

### Visual Description
This slide presents the standard form of a convex optimization problem. It includes the mathematical formulation of minimizing an objective function $f_0(x)$ over a domain $\mathcal{D}$, subject to inequality constraints $f_i(x) \leq b_i$ and equality constraints $h_j(x) = 0$. Three conditions for the problem to be convex are listed. The layout is primarily text and equations.

## Page 4
### Content
Convex Optimization Problems – Standard Form
$$\min_{x \in \mathcal{D}} f_0(x)$$
subject to $f_i(x) \leq b_i, i \in \{1, \dots, m\}$.
$h_j(x) = 0, j \in \{1, \dots, p\}$.
For now, it is worth noting (and re-visiting once the definitions are in place), that the constraints define a convex set, and their intersection with the convex domain $\mathcal{D}$ is also a convex set.
If we denote this convex set by $\mathcal{C}$, then our convex optimization problem can be equivalently, described as:
$$\min_{x \in \mathcal{C}} f_0(x)$$
Optimization for ML Slide 4
Carnegie Mellon University

### Visual Description
This slide continues the discussion on the standard form of convex optimization problems. It explains that the constraints and domain together define a single convex set $\mathcal{C}$, allowing the problem to be simplified to minimizing $f_0(x)$ over $x \in \mathcal{C}$. The content is entirely text and mathematical equations.

## Page 5
### Content
Remarks
$$\min_{x \in \mathcal{D}} f_0(x)$$
subject to $f_i(x) \leq b_i, i \in \{1, \dots, m\}$.
1. $\mathcal{D}$ is a convex set.
2. $f_0, f_1, \dots, f_m$ are convex functions.
Question 1: If the constraints are given in $f_i(x) \geq b_i$ forms, then is it still a convex optimization problem?
Answer: No, because then the domain of feasible points wouldn't be convex.
(Plot showing a convex function $f_i(x)$ and a horizontal line $b_i$. The region where $f_i(x) \geq b_i$ is highlighted in red on the x-axis as two disjoint segments.)
Optimization for ML Slide 5
Carnegie Mellon University

### Visual Description
This slide addresses a common question about convex constraints. It features a plot of a U-shaped convex function $f_i(x)$ in red. A horizontal dashed line represents the value $b_i$. The intersection of the function and the line defines a region. The slide shows that the set of points where $f_i(x) \geq b_i$ consists of two separate, disjoint segments on the horizontal axis (highlighted with thick red lines), which is a non-convex set. This visually explains why "greater than or equal to" constraints with convex functions do not generally result in a convex feasible set.

## Page 6
### Content
Remarks
$$\min_{x \in \mathcal{D}} f_0(x)$$
subject to $f_i(x) \leq b_i, i \in \{1, \dots, m\}$.
$h_j(x) = a_j^T x + b_j$, are affine functions.
Question 2: Why does $h_j(x)$ have to be affine?
Answer: If $h_j$ is convex, then the domain of feasible points $\{x | h_j(x) = b_j\}$ might not be convex!
(Plot showing a convex function $h_j(x)$ and a horizontal line $b_j$. The intersection points are marked with red dots on the x-axis.)
Optimization for ML Slide 6
Carnegie Mellon University

### Visual Description
This slide explains why equality constraints must be affine in convex optimization. It shows a plot of a convex function $h_j(x)$ in red and a horizontal dashed line at $b_j$. The set of points where $h_j(x) = b_j$ consists of only two discrete points on the x-axis, marked with large red dots. A set containing only two discrete points is not convex (the line segment between them is not in the set), illustrating why general convex equality constraints are not allowed.

## Page 7
### Content
The Key Feature of Convex Optimization Problems
The most important structural feature of convex optimization problems is that
every local minima is a global minima.
This in turn, makes local search algorithms effective for convex optimization.
In what follows, we’ll need to define convex sets, functions, and a few other things to make sense of this claim.
Optimization for ML Slide 7
Carnegie Mellon University

### Visual Description
This slide highlights the fundamental advantage of convex optimization: local minima are global minima. The key claim is written in bold red text. The rest of the slide is explanatory text.

## Page 8
### Content
Local & Global Optima
Definition [local optimum]:
A point $x$ is a local optimum of function $f$,
* if $x$ is a feasible point (i.e. it is in the domain of $f$),
* and minimizes $f$ in a local neighborhood,
i.e. for some $\rho > 0, f(x) \leq f(y)$,
for all $y$ which are feasible, and $\|x - y\|_2 \leq \rho$.
Definition [global optimum]:
A point $x^*$ is a global optimum of function $f$,
* if $x^*$ is feasible,
* and $f(x^*) \leq f(y)$, for all $y$ which are feasible
Optimization for ML Slide 8
Carnegie Mellon University

### Visual Description
This slide provides formal mathematical definitions for local and global optima. It uses bullet points and equations to define each term. There are no diagrams.

## Page 9
### Content
Basic Definitions
Optimization for ML Slide 9
Carnegie Mellon University

### Visual Description
This is a section header slide with the text "Basic Definitions" centered in blue.

## Page 10
### Content
Line and Line Segments
Definition [Line]:
$\{x \in \mathbb{R}^n | x = \theta x_1 + (1 - \theta)x_2, \theta \in \mathbb{R}\}$
(Diagram of a line passing through two points $x_1$ and $x_2$)
Definition [Line segment]:
$\{x \in \mathbb{R}^n | x = \theta x_1 + (1 - \theta)x_2, \theta \in [0, 1]\}$
(Diagram of a line segment connecting two points $x_1$ and $x_2$)
Optimization for ML Slide 10
Carnegie Mellon University

### Visual Description
The slide defines lines and line segments mathematically.
- The first diagram shows a long red line passing through two blue circular nodes labeled $x_1$ and $x_2$. This represents the set of all linear combinations of the two points.
- The second diagram shows a shorter red line segment that starts at blue node $x_1$ and ends at blue node $x_2$. This represents the convex combinations of the two points.

## Page 11
### Content
Convex Sets
(Diagram labeled "Convex" showing an oval with a line segment between two points inside it.)
(Diagram labeled "Nonconvex" showing a kidney-bean shape with a line segment between two points that passes outside the shape.)
Definition [Convex set]:
set $C$ is convex $\iff \begin{cases} \forall x_1, x_2 \in C, \forall \theta \in [0, 1] \\ \theta x_1 + (1 - \theta)x_2 \in C \end{cases}$
Optimization for ML Slide 11
Carnegie Mellon University

### Visual Description
This slide illustrates the concept of a convex set.
- On the left, a "Convex" set is shown as a simple oval. Two blue dots inside are connected by a red line segment that stays entirely within the oval.
- On the right, a "Nonconvex" set is shown as a kidney-bean shape. Two blue dots inside are connected by a red line segment, but part of this segment lies outside the shape's boundary.
- Below the diagrams is the formal mathematical definition of a convex set using the notation for a line segment.

## Page 12
### Content
Convex Functions
Definition [chord]:
A line segment between two points on the function:
$\theta f(x) + (1 - \theta)f(y)$
Definition [convex function]:
A function $f : \mathbb{R}^n \to \mathbb{R}$ is a convex function if:
* $\text{Dom}(f)$ is a convex set
* $f(\theta x + (1 - \theta)y) \leq \theta f(x) + (1 - \theta)f(y)$
$\forall x, y \in \text{Dom}(f) \quad \forall \theta \in [0, 1]$
Intuition: The chords are above the function values
(Plot of a convex function with a chord)
Optimization for ML Slide 12
Carnegie Mellon University

### Visual Description
This slide defines convex functions.
- It features a plot of a red U-shaped curve representing a convex function $f$.
- Two points on the curve are identified at horizontal positions $x$ and $y$.
- A straight black line (the "chord") connects the points $(x, f(x))$ and $(y, f(y))$.
- A point between $x$ and $y$ on the horizontal axis is labeled $\theta x + (1 - \theta)y$.
- Vertical lines show that the value of the function at this intermediate point, $f(\theta x + (1 - \theta)y)$, is lower than the corresponding point on the chord, $\theta f(x) + (1 - \theta)f(y)$.
- Blue dots and arrows emphasize these two values, visually demonstrating the inequality in the definition.

## Page 13
### Content
Convex Functions: Local Optima are Global Optima
Theorem [Local optimum = Global optimum]: For a convex optimization problem, any local optimum is a global optimum.
Proof: Let $x$ be a local optimum.
[i.e. in some small enough $\rho$ neighborhood of $x, f(x)$ has the smallest value]
We want to prove that $x$ is also a global optimum.
Suppose for contradiction that there is some $x^*$ (outside of the $\rho$-neighborhood of $x$) which is feasible, and has the property that,
$f(x^*) < f(x)$ (i.e. $x^*$ is better than $x$)
Since $x^*$ is outside of the $\rho > 0$, neighborhood, we have that $0 < \rho < \|x - x^*\|_2$
Let’s examine a new point: $x_0 \doteq (1 - \frac{\rho}{\|x - x^*\|_2})x + \frac{\rho}{\|x - x^*\|_2}x^*$
Optimization for ML Slide 13
Carnegie Mellon University

### Visual Description
This slide begins a formal proof of the theorem that for convex problems, local optima are global optima. It sets up a proof by contradiction, assuming a better global point $x^*$ exists outside a local neighborhood of $x$, and defines a new point $x_0$ as a specific convex combination of $x$ and $x^*$. The content is text and equations.

## Page 14
### Content
Proof (Continued)
$$x_0 \doteq (1 - \frac{\rho}{\|x - x^*\|_2})x + \frac{\rho}{\|x - x^*\|_2}x^*$$
Notice that,
1. $x_0$ is feasible.
(The set of feasible points is a convex set by definition in any convex optimization problem. $x_0$ is a convex combination of two feasible points $x$ and $x^*$, hence $x_0$ is also feasible)
2. $x_0$ is within a $\rho$-neighborhood of the local optima $x$, because
$$x - x_0 = x - (1 - \frac{\rho}{\|x - x^*\|_2})x - \frac{\rho}{\|x - x^*\|_2}x^* = \frac{\rho}{\|x - x^*\|_2}x - \frac{\rho}{\|x - x^*\|_2}x^*$$
Therefore, $\|x - x_0\|_2 = \frac{\rho}{\|x - x^*\|_2} \|x - x^*\|_2 = \rho$
Optimization for ML Slide 14
Carnegie Mellon University

### Visual Description
This slide continues the proof from the previous page. It mathematically demonstrates two properties of the point $x_0$: it is feasible due to the convexity of the feasible set, and it lies exactly at distance $\rho$ from $x$, meaning it is in the local neighborhood where $x$ is supposed to be the minimum. The content is text and equations.

## Page 15
### Content
Proof (Continued)
$$x_0 \doteq \underbrace{\frac{\rho}{\|x - x^*\|_2}}_{\theta}x^* + \underbrace{(1 - \frac{\rho}{\|x - x^*\|_2})}_{1 - \theta}x$$
3. Using convexity, $f$ can be upper bounded as
$$f(\theta x + (1 - \theta)y) \leq \theta f(x) + (1 - \theta)f(y)$$
Therefore, $f(x_0) = f(\frac{\rho}{\|x - x^*\|_2}x^* + (1 - \frac{\rho}{\|x - x^*\|_2})x)$
$\leq \frac{\rho}{\|x - x^*\|_2}f(x^*) + (1 - \frac{\rho}{\|x - x^*\|_2})f(x)$
$< \frac{\rho}{\|x - x^*\|_2}f(x) + (1 - \frac{\rho}{\|x - x^*\|_2})f(x) = f(x)$
since $f(x^*) < f(x)$ by assumption. We got that $f(x_0) < f(x)$
Optimization for ML Slide 15
Carnegie Mellon University

### Visual Description
This slide continues the proof, using the definition of a convex function to show that the value of $f$ at $x_0$ must be strictly less than the value at $x$. It uses under-braces to map the components of $x_0$ to the $\theta$ and $1-\theta$ terms in the convexity definition. An arrow points to the final inequality $f(x_0) < f(x)$.

## Page 16
### Content
Proof (Continued)
$$x_0 \doteq \underbrace{\frac{\rho}{\|x - x^*\|_2}}_{\theta}x^* + \underbrace{(1 - \frac{\rho}{\|x - x^*\|_2})}_{1 - \theta}x$$
$$f(x_0) < f(x)$$
However, since $x_0$ is in the $\rho$-neighborhood of $x$, this final claim contradicts the local optimality of $x$. ■
Optimization for ML Slide 16
Carnegie Mellon University

### Visual Description
This is the final slide of the proof. It states the contradiction: $x_0$ is in the local neighborhood of $x$ but has a lower function value, which contradicts the assumption that $x$ is a local optimum. The proof concludes with a black square symbol (Q.E.D.).

## Page 17
### Content
Convex Sets
Why are they so important in optimization?
(Diagram 1: Convex oval with an arrow pointing inside and a dotted line continuing the path.)
(Diagram 2: Nonconvex kidney-bean shape with an arrow pointing towards a "wall" and a dotted line showing a better point "across the wall".)
Suppose we are optimizing a function over a set $C$ and the function takes smaller values in the direction of the arrow.
* Convex domain: we can follow the “good direction” till we converge to a local optimum or hit a wall.
* Nonconvex domain: there could be some “juicy” points (with much better objective value) somewhere “across the wall”, and there is no easy way to optimize the function.
Optimization for ML Slide 17
Carnegie Mellon University

### Visual Description
This slide provides intuition for why convex sets are important.
- The first diagram shows a convex oval. A red arrow starts inside and points towards the interior. A dotted green line shows that following this direction keeps you within the set, allowing for continuous optimization.
- The second diagram shows a non-convex kidney-bean shape. A red arrow points towards a boundary "wall". A dotted green line continues past the wall to a point outside the set, then back into another part of the set. This illustrates how non-convexity can create barriers that prevent local search algorithms from reaching better points (the "juicy" points) in other parts of the feasible region.

## Page 18
### Content
Creating Convex Sets with the Convex hull
Definition [Convex hull]:
(Diagram 1: A set of discrete points and their convex hull, a shaded polygon.)
(Diagram 2: A non-convex shape and its convex hull, the shape with its "dent" filled in.)
Set of all convex combinations of elements of $C$.
$$\text{conv}(C) \doteq \{ \sum_{i=1}^k \theta_i x_i | x_i \in C, \theta_i \geq 0, \sum_{i=1}^k \theta_i = 1, k = 2, 3, \dots \}$$
This is always a convex set (even if $C$ is not), and it is the smallest convex set that contains $C$.
Optimization for ML Slide 18
Carnegie Mellon University

### Visual Description
This slide defines and illustrates the convex hull.
- The first diagram shows several black dots. Their convex hull is shown as a light gray shaded polygon that has these points as its vertices.
- The second diagram shows a non-convex, kidney-bean-like shape. Its convex hull is shown as a larger, light gray shaded convex shape that completely encloses the original shape, effectively "filling in" the concave part.
- The mathematical definition of the convex hull as the set of all convex combinations is provided below the diagrams.

## Page 19
### Content
Convex hull properties
$$\text{conv}(C) \doteq \{ \sum_{i=1}^k \theta_i x_i | x_i \in C, \theta_i \geq 0, \sum_{i=1}^k \theta_i = 1, k = 2, 3, \dots \}$$
* $\text{conv}(C)$ is convex
* $C \subseteq \text{conv}(C)$
* Let $C$ be an arbitrary set, and let $C'$ be a convex set. If $C \subseteq C' \implies \text{conv}(C) \subseteq C'$
* $\text{conv}(C)$ is the smallest convex set that contains $C$
* Any closed convex set can be represented this way (a convex hull of possibly infinitely many points, but often less is enough.)
Optimization for ML Slide 19
Carnegie Mellon University

### Visual Description
This slide lists several key properties of the convex hull. It is entirely text-based, using bullet points and mathematical notation.

## Page 20
### Content
Infinite Many Sums in Convex Combinations
$$\text{conv}(C) \doteq \{ \sum_{i=1}^k \theta_i x_i | x_i \in C, \theta_i \geq 0, \sum_{i=1}^k \theta_i = 1 \}$$
Infinitely many sums (finite dimensionality is critical!)
If $C \subseteq \mathbb{R}^n$ is convex,
$x_1, x_2, \dots \in C$
$\theta_1, \theta_2, \dots \geq 0$
$\sum_{i=1}^\infty \theta_i = 1$
$\implies \sum_{i=1}^\infty \theta_i x_i \in C$ (assuming this series converges)
Integrals (Expected value) (finite dimensional)
Let $p : C \to \mathbb{R}_+$ be a density function.
$C$ is a convex set.
$\implies \mathbb{E}_p[X] = \int_C p(x)x \, dx \in C$ (assuming this integral exists)
Optimization for ML Slide 20
Carnegie Mellon University

### Visual Description
This slide extends the concept of convex combinations to infinite sums and integrals. It shows that for a convex set in finite dimensions, an infinite convex combination of points or the expected value of a distribution over the set will also be within the set, provided they exist/converge. The content is text and equations.

## Page 21
### Content
Infinite Many Sums in Convex Combinations
If $C \subseteq \mathbb{R}^n$ is convex,
$x_1, x_2, \dots \in C$
$\theta_1, \theta_2, \dots \geq 0$
$\sum_{i=1}^\infty \theta_i = 1$
$\implies \sum_{i=1}^\infty \theta_i x_i \in C$ (assuming this series converges)
Example Why do we need to assume that $\sum_{i=1}^\infty \theta_i x_i$ converges?
Let $C = \{x | x \geq 0\} \subseteq \mathbb{R}$ convex set.
Let $\mu = \sum_{i=1}^\infty \frac{1}{i^2} < \infty$
Let $\theta_i = \frac{1}{\mu i^2}$
Let $x_1 = 1, x_2 = 2, \dots, x_i = i, \dots (x_i \in C)$
$\implies \sum_{i=1}^\infty \theta_i x_i = \sum_{i=1}^\infty \frac{1}{\mu i^2} i = \sum_{i=1}^\infty \frac{1}{\mu i} = \infty$
Optimization for ML Slide 21
Carnegie Mellon University

### Visual Description
This slide provides a counterexample to show why the convergence assumption is necessary for infinite convex combinations. It defines a convex set $C$ (non-negative real numbers) and a set of weights $\theta_i$ that sum to 1. By choosing points $x_i = i$, it shows that the resulting infinite sum diverges to infinity, which is not a point in the set. The content is text and equations.

## Page 22
### Content
Examples of Convex Sets
* empty set: $\emptyset$
* singleton set: $\{x_0\}$
* complete space: $\mathbb{R}^d$
* lines: $\{x \in \mathbb{R}^n | x = \theta x_1 + (1 - \theta)x_2, \theta \in \mathbb{R}\}$
* line segments: $\{x \in \mathbb{R}^n | x = \theta x_1 + (1 - \theta)x_2, \theta \in [0, 1]\}$
* hyperplanes: $\{x \in \mathbb{R}^n | a^T x = b\}, a \in \mathbb{R}^n, b \in \mathbb{R}$
* halfspaces: $\{x \in \mathbb{R}^n | a^T x \leq b\}, a \in \mathbb{R}^n, b \in \mathbb{R}$
Optimization for ML Slide 22
Carnegie Mellon University

### Visual Description
This slide lists common examples of convex sets, providing their mathematical definitions. It is entirely text-based.

## Page 23
### Content
Examples of Convex Sets: Affine Sets
Definition [Affine set]:
A set $C$ is affine if for any $x_1, x_2 \in C$ the line through $x_1$ and $x_2$ is in $C$,
i.e. $\theta x_1 + (1 - \theta)x_2 \in C, (\theta \in \mathbb{R})$
Definition [Affine hull of set C]:
Let $C \subseteq \mathbb{R}^n$
$\text{Aff}(C) \doteq \{ \theta_1 x_1 + \dots + \theta_k x_k | x_1, \dots, x_k \in C, \sum_{i=1}^k \theta_i = 1, k = 2, 3, \dots \}$
Theorem [Affine hull]:
The $\text{Aff}(C)$ is the smallest affine set that contains $C$.
Theorem: Affine sets are convex
Optimization for ML Slide 23
Carnegie Mellon University

### Visual Description
This slide defines affine sets and affine hulls. It notes that an affine set contains the entire line passing through any two of its points. It also states that affine sets are a subset of convex sets. The content is text and equations.

## Page 24
### Content
Affine Set Example
Example [Solutions of linear equations]:
The solution set of a system of linear equations is an affine set
Solution set:
$C = \{x | Ax = b\}$, where $A \in \mathbb{R}^{m \times n}, b \in \mathbb{R}^m$
Proof:
If $Ax_1 = b$
$Ax_2 = b$
$\theta \in \mathbb{R}$
$\implies A(\theta x_1 + (1 - \theta)x_2) = b$
Optimization for ML Slide 24
Carnegie Mellon University

### Visual Description
This slide provides a concrete example of an affine set: the solution set to a system of linear equations. It includes a short mathematical proof showing that any linear combination of two solutions where the weights sum to 1 is also a solution. The content is text and equations.

## Page 25
### Content
Examples of Convex Sets: Norm Balls
Definition [Norm ball]:
$\{x : \|x\| \leq r\}$, where $r > 0$ and $\|\cdot\|$ is a given norm.
Theorem:
A norm ball is convex for any given norm $\|\cdot\|$ and radius $r \geq 0$.
* Euclidian balls: $B(x_0, r) \doteq \{x \in \mathbb{R}^n | \|x - x_0\|_2 \leq r\}$
* $L_p$ balls for $p \geq 1$: $\{x \in \mathbb{R}^n | \|x - x_0\|_p \leq r\}$
$\|x\|_p \doteq (\sum_{i=1}^n |x_i|^p)^{1/p}$
$\|x\|_\infty \doteq \max_{i=1, \dots, n} |x_i|$
(Plot showing unit balls for different $L_p$ norms in 2D)
Optimization for ML Slide 25
Carnegie Mellon University

### Visual Description
This slide discusses norm balls as examples of convex sets.
- It features a plot showing the boundaries of unit balls in 2D for various $L_p$ norms.
- The $p=1$ norm ball is a diamond shape (purple).
- The $p=2$ norm ball is a circle (blue).
- As $p$ increases ($p=3, 6, 15$), the shape becomes more like a square with rounded corners.
- The $p=\infty$ norm ball is a perfect square (red dashed line).
- All these shapes are convex. The mathematical definitions for $L_p$ and $L_\infty$ norms are provided.

## Page 26
### Content
Nonconvex Lp balls
Note: $L_p$ balls for $0 < p < 1$ are not convex!
When $0 < p < 1, \|x\|_p \doteq (\sum_{i=1}^n |x_i|^p)^{1/p}$ is not a norm, because the triangle inequality doesn't hold.
(Plot titled "Unit ball of p-norm in 2D" showing shapes for $p=0, 0.5, 1, 2, \infty$)
Note: $L_p$ balls for $p < 0$ are not defined. (since $|0|^p = \infty$)
Optimization for ML Slide 26
Carnegie Mellon University

### Visual Description
This slide illustrates non-convex $L_p$ "balls" for $p < 1$.
- The plot shows that for $p=0.5$, the shape is a four-pointed star with concave sides (orange dashed line), which is clearly non-convex.
- For $p=0$, the "ball" consists only of the axes (blue lines).
- The plot also includes the convex cases $p=1$ (diamond), $p=2$ (circle), and $p \to \infty$ (square) for comparison.
- The text explains that for $p < 1$, the mathematical expression does not define a proper norm.

## Page 27
### Content
Examples of Convex Sets: Polyhedron and Polytope
Polyhedron: the solution set of a finite number of linear equalities and inequalities
$\mathcal{P} = \{x \in \mathbb{R}^n | a_j^T x \leq b_j, j = 1, \dots, m$
$c_k^T x = d_k, k = 1, \dots, p\}$
Intersection of halfspaces & hyperplanes
Matrix notation: $\mathcal{P} = \{x \in \mathbb{R}^n | Ax \leq b, Cx = d\}$
Polytope: bounded polyhedron
(Diagram of a 2D polytope formed by intersecting halfspaces)
Optimization for ML Slide 27
Carnegie Mellon University

### Visual Description
This slide defines polyhedra and polytopes.
- A diagram shows a shaded gray polygon labeled $\mathcal{P}$ in 2D.
- Five lines represent the boundaries of halfspaces.
- Arrows labeled $a_1, a_2, a_3, a_4, a_5$ point outwards from each edge of the polygon, representing the normal vectors of the defining linear inequalities.
- The polygon is the intersection of these five halfspaces.
- The text provides mathematical definitions in both summation and matrix notation.

## Page 28
### Content
Examples of Convex Sets: Solutions to Convex Problems
Theorem:
The set of optimal solutions $X_{opt}$ to a convex optimization problem is a convex set.
Proof:
Suppose we consider, $x_1, x_2 \in X_{opt}. f(x_1) = f(x_2)$
Now, consider $x_0 = \theta x_1 + (1 - \theta)x_2$, where $0 \leq \theta \leq 1$.
$x_0$ is feasible [the set of feasible solutions is convex by definition].
Further, by convexity of the objective we see that,
$f(x_0) \leq \theta f(x_1) + (1 - \theta)f(x_2) = f(x_1)$,
and so $x_0 \in X_{opt}$ also. ■
Optimization for ML Slide 28
Carnegie Mellon University

### Visual Description
This slide presents a theorem stating that the set of all optimal solutions to a convex problem is itself a convex set. It provides a concise mathematical proof using the definitions of convex sets and convex functions. The proof ends with a black square symbol.

## Page 29
### Content
Cones
A set $C$ is a cone if for every $x \in C, \theta x \in C$ for any $\theta \geq 0$, i.e. for any point in $C$ the ray joining that point to the origin must also be in $C$.
(Diagram of a 2D cone starting from the origin '0' and containing points $x_1$ and $x_2$)
Definition [Cone]: $C$ is a cone $\iff \{x \in C, \theta \geq 0 \implies \theta x \in C\}$
Definition [“shifted” cone]:
$C_s$ is a shifted cone $\iff C_s = C + b$ where $C$ is a cone, $b \in \mathbb{R}^d$
Optimization for ML Slide 29
Carnegie Mellon University

### Visual Description
This slide introduces the concept of a cone.
- A diagram shows a shaded gray wedge-shaped region in 2D.
- The vertex of the wedge is at the origin, labeled '0'.
- Two points, $x_1$ and $x_2$, are shown within the shaded region.
- The diagram illustrates that for any point in the set, the entire ray from the origin through that point is also in the set.
- Mathematical definitions for a standard cone and a "shifted" cone (translated by a vector $b$) are provided.

## Page 30
### Content
Convex Cones
Cones are not convex in general, so we will refer to convex cones as cones which are additionally convex
Definition [Convex Cone]: Cone & Convex
Theorem [Property of Convex Cones]:
Convex cones additionally satisfy the property that if $x_1, x_2 \in C$ then for any $\theta_1, \theta_2 \geq 0, \theta_1 x_1 + \theta_2 x_2 \in C$.
These are called conic combinations
Optimization for ML Slide 30
Carnegie Mellon University

### Visual Description
This slide defines convex cones. It explains that a convex cone is a set that is both a cone and a convex set. It introduces the term "conic combination," which is a linear combination with non-negative weights. The content is entirely text-based.

## Page 31
### Content
Conic hulls
Definition [Conic combination]:
For $x_1, \dots, x_k$, a conic combination is any point of the form:
$\sum_{i=1}^k \theta_i x_i$ with $\theta_i \geq 0$
Definition [Conic hull]: $\text{cone}(C) = \{ x | x = \sum_{i=1}^k \theta_i x_i, x_i \in C, \theta_i \geq 0, k = 1, 2, \dots \}$
The conic hull of a set $C$ collects all conic combinations of points in $C$, and is the smallest convex cone containing $C$.
(Diagram 1: Conic hull of a set of discrete points)
(Diagram 2: Conic hull of a non-convex shape)
Optimization for ML Slide 31
Carnegie Mellon University

### Visual Description
This slide defines and illustrates the conic hull.
- The first diagram shows several black dots. Their conic hull is a shaded gray wedge starting from the origin '0' that encloses all the points.
- The second diagram shows a non-convex shape. Its conic hull is a shaded gray wedge starting from the origin '0' that encloses the entire shape.
- The mathematical definition of the conic hull as the set of all conic combinations is provided.

## Page 32
### Content
Cone Example: PSD matrices
Definition [Positive semi-definite matrix]:
$A \in \mathbb{R}^{n \times n}$ matrix is PSD $\iff \begin{cases} x^T Ax \geq 0, \forall x \in \mathbb{R}^n \\ A = A^T \end{cases}$
Theorem [eigenvalues]:
A symmetric matrix A is positive definite iff all its eigenvalues are positive
Partial ordering of square matrices:
For arbitrary square matrices $M$ and $N$, we write $M \succeq N$ if $M - N \succeq 0$; i.e., $M - N$ is positive semidefinite.
Optimization for ML Slide 32
Carnegie Mellon University

### Visual Description
This slide provides definitions related to positive semi-definite (PSD) matrices, which are an important example of a convex cone. It includes the definition of a PSD matrix, a theorem relating PSD to eigenvalues, and the definition of partial ordering for matrices. The content is text and equations.

## Page 33
### Content
Cone Example: PSD matrices
Theorem [Cone of PSD matrices]:
The set of symmetric, PSD matrices form a convex cone:
$$S^n_+ \doteq \{A \in \mathbb{R}^{n \times n} | A \succeq 0\}$$
Proof:
Part 1: $A \in S^n_+, \theta \geq 0 \implies \theta A \in S^n_+$
Part 2: $A, B \in S^n_+, 0 \leq \theta \leq 1 \implies x^T [\theta A + (1 - \theta)B]x$
$= \theta x^T Ax + (1 - \theta)x^T Bx$
$\geq 0$ ■
Optimization for ML Slide 33
Carnegie Mellon University

### Visual Description
This slide proves that the set of symmetric PSD matrices forms a convex cone. The proof has two parts: showing it's a cone (closed under non-negative scaling) and showing it's convex (closed under convex combinations). The proof ends with a black square symbol.

## Page 34
### Content
Cone Example: Norm cone
Definition [Norm cone]:
$$C = \{(x, t) : \|x\| \leq t\}.$$
Theorem [Norm cone is a cone]:
Proof:
$C$ is a cone $\iff \{(x, t) \in C, \theta \geq 0 \implies \theta(x, t) = (\theta x, \theta t) \in C\}$
$(x, t) \in C \iff \|x\| \leq t \iff \|\theta x\| \leq \theta t \iff (\theta x, \theta t) \in C$
For the Euclidean norm, this cone is called the second-order cone (sometimes called the “ice cream” cone).
Optimization for ML Slide 34
Carnegie Mellon University

### Visual Description
This slide defines the norm cone and proves it is indeed a cone. It mentions that when the Euclidean norm is used, it's known as the second-order or "ice cream" cone. The content is text and equations.

## Page 35
### Content
Topology Terminology
* Boundary
* Interior
* Open sets
* Closed sets
Optimization for ML Slide 35
Carnegie Mellon University

### Visual Description
This is a section header slide listing topological terms that will be defined: Boundary, Interior, Open sets, and Closed sets.

## Page 36
### Content
Boundary
Definition [interior of C]:
$\text{Int}(C) = \{x \in C | B(x, \epsilon) \subseteq C$
for some small enough $\epsilon = \epsilon(x) > 0.\}$
Definition [relative interior, relInt(C)]:
$\text{relInt}(C) = \{x \in C | B(x, \epsilon) \cap \text{AFF}(C) \subseteq C$
for some small enough $\epsilon = \epsilon(x) > 0.\}$
(Diagram illustrating relative interior for a line segment in 2D)
Optimization for ML Slide 36
Carnegie Mellon University

### Visual Description
This slide defines the interior and relative interior of a set.
- A diagram shows a red line segment labeled $C$ in a 2D space.
- A point $x$ is chosen on the segment.
- A light blue circle represents a ball $B(x, \epsilon)$ around $x$.
- The ball itself is not contained in $C$ because $C$ is just a 1D line.
- However, the intersection of the ball and the affine hull of $C$ (the entire line containing the segment) is a smaller segment (highlighted in brown) that is contained within $C$. This illustrates the concept of relative interior for sets that don't have a full-dimensional interior.

## Page 37
### Content
Boundary
Definition [complement set of C]:
Let $C \subseteq \mathbb{R}^n$
$C^c \doteq \mathbb{R}^n \setminus C$
Definition 1 [$x$ is on the boundary of $C$ ($\partial C$)]:
$\partial C \doteq \{x \in \mathbb{R}^d |$
for all $\epsilon > 0$ we have that
$B(x, \epsilon) \cap C \neq \emptyset$ and $B(x, \epsilon) \cap C^c \neq \emptyset \}$
Intuition:
$x \in \partial C \iff x$ is not an interior point of $C$, and there is a $x_1, x_2, \dots$ sequence such that $\lim_{n \to \infty} x_n = x$ where $x_i \in C$ for all $i = 1, 2, \dots$
(Diagram of a point on the boundary of a set)
Optimization for ML Slide 37
Carnegie Mellon University

### Visual Description
This slide defines the boundary of a set.
- A diagram shows a light blue oval representing set $C$.
- A red dot $x$ is placed exactly on the edge of the oval.
- A circle representing a ball $B(x, \epsilon)$ is drawn around $x$.
- The diagram shows that the ball contains points both inside $C$ and outside $C$ (in $C^c$), which is the defining property of a boundary point.
- The text provides a formal definition and an intuitive sequence-based explanation.

## Page 38
### Content
Boundary
Definition 2 [$x$ is on the boundary of $C$ ($\partial C$)]:
$\partial C \doteq \{x \in \mathbb{R}^d |$
where for $x$ we can find a $\tilde{\epsilon}(x) > 0$ such that
for all $\epsilon$, where $0 < \epsilon < \tilde{\epsilon}(x)$, we have that
$B(x, \epsilon) \cap C \neq \emptyset$ and $B(x, \epsilon) \cap C^c \neq \emptyset \}$
Intuition:
Definition 1 is simpler, but definition 2 shows that being a boundary point is a local property, and large epsilons are irrelevant.
(Same diagram as page 37)
Optimization for ML Slide 38
Carnegie Mellon University

### Visual Description
This slide provides an alternative, more localized definition of a boundary point. It uses the same diagram as the previous page to show that a point is on the boundary if every sufficiently small ball around it intersects both the set and its complement.

## Page 39
### Content
Boundary
Definition [closure of C (cl C) ]:
$\text{cl}(C) = C \cup \partial C$
Definition [relative boundary of C (rel $\partial C$) ]:
$\text{cl}(C) \setminus \text{relInt}(C)$
Optimization for ML Slide 39
Carnegie Mellon University

### Visual Description
This slide defines the closure and relative boundary of a set. It is entirely text-based.

## Page 40
### Content
Open and Closed Sets
Definition [C closed]:
$\partial C \subseteq C$
Definition [C open]:
$\partial C \cap C = \emptyset$
Definition [C compact]:
C is closed and bounded (in $\mathbb{R}^n$)
Optimization for ML Slide 40
Carnegie Mellon University

### Visual Description
This slide provides formal definitions for closed, open, and compact sets based on their relationship with their boundary. It is entirely text-based.

## Page 41
### Content
Strictly Convex Sets
Definition [Convex set]:
$\forall x_1, x_2 \in C, \forall \theta \in [0, 1] \implies \theta x_1 + (1 - \theta)x_2 \in C$
Definition [Strictly convex set]:
A set $C$ is strictly convex if every point on the line segment connecting $x$ and $y$ other than the endpoints is inside the topological interior of $C$.
$\forall x_1 \neq x_2 \in C, \forall \theta \in (0, 1) \implies \theta x_1 + (1 - \theta)x_2 \in \text{Int}(C)$
Example [Convex, closed, but not strictly convex]:
(Diagram of a cyan triangle)
[Strictly convex]
(Diagram of a light green circle)
Optimization for ML Slide 41
Carnegie Mellon University

### Visual Description
This slide defines strictly convex sets and provides examples.
- A cyan triangle is shown as an example of a set that is convex but not strictly convex. This is because a line segment connecting two points on one of its edges lies entirely on the boundary, not in the interior.
- A light green circle is shown as an example of a strictly convex set. Any line segment connecting two distinct points in the circle will have its interior points strictly inside the circle's interior.

## Page 42
### Content
Back to Cones …
Optimization for ML Slide 42
Carnegie Mellon University

### Visual Description
This is a transition slide with the text "Back to Cones ..." centered in blue.

## Page 43
### Content
Polar Cone
Definition [Polar cone]:
For any set $C$, the polar cone $C^\circ$ is defined as the collection of vectors which make an at least 90-degree angle with all vectors in $C$, i.e.
$C^\circ \doteq \{x : x^T y \leq 0, \text{ for all } y \in C\}.$
(Diagram showing a set $C$ and its polar cone $C^\circ$)
Theorem [polar cone is closed, convex]:
The polar cone is always a closed convex cone even if C is not convex or not closed.
https://www.tutorialspoint.com/convex_optimization/convex_optimization_polar_cone.htm
Origin
Optimization for ML Slide 43
Carnegie Mellon University

### Visual Description
This slide defines the polar cone.
- A diagram shows a blue shape labeled $C$ starting from the origin '0'.
- A red wedge-shaped region labeled $C^\circ$ also starts from the origin.
- The boundaries of the red wedge are perpendicular to the "outermost" rays of the blue set $C$, as indicated by square right-angle symbols.
- A green arrow points to the origin '0'.
- The diagram visually represents the set of all vectors that form an angle of 90 degrees or more with every vector in $C$.

## Page 44
### Content
Polar Cone Properties
$C^\circ \doteq \{x : x^T y \leq 0, \text{ for all } y \in C\}.$
Lemma
If $C = \{0\}$, then $C^\circ = \mathbb{R}^n$
If $C = \mathbb{R}^n$, then $C^\circ = \{0\}$
Lemma
Let $C \subseteq \mathbb{R}^n$ be an arbitrary set.
Then $C^\circ$ is a convex cone (even if C is not convex).
Proof
Let $x_1, x_2 \in C^\circ$. Then $x_1^T x \leq 0, x_2^T x \leq 0 \forall x \in C$
For any $\lambda \in [0, 1], [\lambda x_1 + (1 - \lambda)x_2]^T x = \lambda x_1^T x + (1 - \lambda)x_2^T x \leq 0$
Therefore $\lambda x_1 + (1 - \lambda)x_2 \in C^\circ$ ■
(Same diagram as page 43)
Optimization for ML Slide 44
Carnegie Mellon University

### Visual Description
This slide lists properties of the polar cone and provides a proof that it is always convex. It reuses the diagram from the previous page to maintain visual context. The proof uses the definition of the polar cone and shows it's closed under convex combinations.

## Page 45
### Content
Normal and Polar Cones
There is a fundamental reason why cones will be important to us:
We will use them to characterize optimality.
Two cones are important in this context:
* the normal cone
* and its polar cone (which has its own name, the tangent cone)
Optimization for ML Slide 45
Carnegie Mellon University

### Visual Description
This slide explains the importance of normal and tangent cones in characterizing optimality in optimization problems. It is entirely text-based.

## Page 46
### Content
Normal Cone
Definition [Normal Cone]:
Given a set $C$ (doesn’t need to be convex), and a point $x \in C$ the normal cone of $C$ at $x$ is defined as:
$N_C(x) \doteq \{g : g^T(y - x) \leq 0, \text{ for all } y \in C\}$
The normal cone defines all directions which points “straight out” from the set, i.e., starting the vectors from location x, the angle between any vector in the cone and any vector in C is at least 90 degrees.
(Diagram of a set $C$ with normal cones at different points)
Optimization for ML Slide 46
Carnegie Mellon University

### Visual Description
This slide defines the normal cone.
- A diagram shows a large circle representing set $C$.
- Three points on its boundary are labeled $x_1, x_2, x_3$.
- At $x_2$ and $x_3$, where the boundary is smooth, the normal cones $N_C(x_2)$ and $N_C(x_3)$ are shown as single dashed rays pointing directly away from the center.
- At $x_1$, there is a sharp corner on the boundary. The normal cone $N_C(x_1)$ is shown as a shaded gray wedge, representing a range of directions that point "out" from the set.
- This illustrates how the normal cone generalizes the concept of a surface normal to non-smooth boundaries.

## Page 47
### Content
Normal Cone
$N_C(x) \doteq \{g : g^T(y - x) \leq 0, \text{ for all } y \in C\}$
There are three different types of points for which we should understand what the normal cone looks like:
* Interior points
    * the normal cone is the zero vector
* Boundary points where the boundary is smooth
    * the normal cone is a single ray
* Boundary points where the boundary is not smooth
    * the normal cone is a “fat” cone
(Same diagram as page 46)
Optimization for ML Slide 47
Carnegie Mellon University

### Visual Description
This slide categorizes the appearance of the normal cone based on the point's location. It reuses the diagram from the previous page to illustrate the "single ray" and "fat cone" cases for boundary points.

## Page 48
### Content
Normal Cone
$N_C(x) \doteq \{g : g^T(y - x) \leq 0, \text{ for all } y \in C\}$
Theorem [Normal Cones are convex]:
Even if $C$ is not convex, the normal cone is a convex cone for all $x \in C$.
Proof:
Let $g_1, g_2 \in N_C(x)$
$v_1(y) \doteq g_1^T(y - x) \leq 0, \forall y \in C$
$v_2(y) \doteq g_2^T(y - x) \leq 0, \forall y \in C$
Let $\lambda \in [0, 1]$
$\implies (\lambda g_1 + (1 - \lambda)g_2)^T(y - x) = \lambda g_1^T(y - x) + (1 - \lambda)g_2^T(y - x)$
$= \lambda v_1(y) + (1 - \lambda)v_2(y)$
$\leq 0, \forall y \in C$ ■
Optimization for ML Slide 48
Carnegie Mellon University

### Visual Description
This slide provides a mathematical proof that the normal cone is always convex, regardless of whether the underlying set $C$ is convex. The proof shows that a convex combination of two vectors in the normal cone also satisfies the defining inequality.

## Page 49
### Content
Tangent Cone
Definition [Tangent Cone]:
The tangent cone at a point $x \in C$ is defined to be the set of feasible directions we can move and stay in the set $C$ [and including the limits of these directions].
(Diagram showing a set $C$, its normal cone $N(r_0)$, and its tangent cone at point $r_0$)
Optimization for ML Slide 49
Carnegie Mellon University

### Visual Description
This slide defines the tangent cone.
- A diagram shows a circle representing set $C$.
- A point $r_0$ is on the boundary.
- A shaded gray wedge pointing outwards from $r_0$ is labeled $N(r_0)$, the normal cone.
- Two tangent lines are drawn at $r_0$. The region between these lines that points "into" or along the boundary of the set is labeled "tangent cone".
- The diagram visually shows that the tangent cone consists of directions that keep you within the set locally.

## Page 50
### Content
Tangent Cone
(Same diagram as page 49)
Theorem
For convex sets, the tangent cone is a convex cone.
For general sets $C$, the tangent cone need not be convex.
For convex sets, the polar of the normal cone is the tangent cone: $T_C(x) = N_C(x)^\circ$
Optimization for ML Slide 50
Carnegie Mellon University

### Visual Description
This slide presents theorems about the tangent cone, specifically its relationship with the normal cone for convex sets. It reuses the diagram from the previous page to maintain visual context.

## Page 51
### Content
Punchline in Convex Optimization
Punchline [to be clarified and proved later]:
Let $f : \mathbb{R}^n \to \mathbb{R}$ be convex, differentiable. Let $C$ be convex.
In a convex optimization problem,
$$\min_{x \in C} f(x)$$
a point $x$ will be optimal, if and only if the negative gradient of the point belongs to $N_C(x)$.
Optimization for ML Slide 51
Carnegie Mellon University

### Visual Description
This slide presents a key "punchline" or takeaway: the optimality condition for constrained convex optimization. It states that a point is optimal if its negative gradient is contained within the normal cone of the feasible set at that point. The text is highlighted in red.

## Page 52
### Content
Separating and Supporting Hyperplanes
Optimization for ML Slide 52
Carnegie Mellon University

### Visual Description
This is a section header slide with the text "Separating and Supporting Hyperplanes" centered in blue.

## Page 53
### Content
Separating hyperplane thm I
Theorem: [Separating hyperplane theorem]
If $C$ and $D$ are non-empty convex sets which are disjoint, i.e. $C \cap D = \emptyset$, then there exists a separating hyperplane between them.
$\begin{cases} C, D \text{ are convex sets.} \\ C \cap D = \emptyset \end{cases} \implies \begin{cases} \exists a \in \mathbb{R}^n, b \in \mathbb{R} \\ \text{s.t. } a^T x \leq b, \forall x \in C \\ a^T y \geq b, \forall y \in D. \end{cases}$
(Diagram showing two disjoint convex sets $C$ and $D$ separated by a line)
Optimization for ML Slide 53
Carnegie Mellon University

### Visual Description
This slide presents the Separating Hyperplane Theorem.
- A diagram shows two shaded gray convex shapes labeled $C$ and $D$.
- A straight line passes between them.
- A vector $a$ is shown perpendicular to the line, pointing away from $C$ and towards $D$.
- The regions on either side of the line are labeled $a^T x \leq b$ (containing $C$) and $a^T x \geq b$ (containing $D$).
- This visually demonstrates that a hyperplane can always be placed between two disjoint convex sets.

## Page 54
### Content
Strong vs Strict Separation
Definition: [Strong separation]
$a^T[C_1 + B(0, \epsilon)] > b$
$a^T[C_2 + B(0, \epsilon)] < b$
Definition: [Strict separation]
$a^T x > b \quad \forall x \in C_1$
$a^T x < b \quad \forall x \in C_2$
It "strictly separates" them if neither one touches the hyperplane.
Optimization for ML Slide 54
Carnegie Mellon University

### Visual Description
This slide defines two types of separation between sets: strong and strict. Strong separation implies a "buffer zone" of size $\epsilon$ between the sets and the hyperplane, while strict separation just means no point in either set lies on the hyperplane. The content is entirely text and equations.

## Page 55
### Content
Separating hyperplane thm I
Theorem: [Strong separation theorem I]
Let $C_1, C_2 \subseteq \mathbb{R}^n, C_1, C_2 \neq \emptyset$
$\text{cl}(C_1) \cap \text{cl}(C_2) = \emptyset$
either $C_1$ or $C_2$ is bounded
$\implies \exists$ strongly separating hyperplane between $C_1$ and $C_2$
Counterexample:
Why do we need at least one bounded set?
(Hand-drawn plot showing two disjoint closed sets that cannot be strongly separated)
Optimization for ML Slide 55
Carnegie Mellon University

### Visual Description
This slide discusses strong separation and provides a counterexample for when it fails.
- A hand-drawn plot shows two sets in the first quadrant of a 2D plane.
- One set is the region above the curve $x_2 \geq 1/x_1$ (labeled "CLOSED").
- The other set is the region below the x-axis, $x_2 < 0$ (labeled "OPEN").
- The line $x_2 = 0$ is a separating hyperplane.
- However, as $x_1$ goes to infinity, the first set gets arbitrarily close to the x-axis. Therefore, no matter how small a buffer $\epsilon$ is chosen, a strongly separating hyperplane cannot be found. This illustrates why boundedness is a necessary condition for strong separation.

## Page 56
### Content
Separating hyperplane thm II
Theorem: [Strong separation theorem II]
Let $C_1, C_2$ be convex, nonempty sets.
$C_1, C_2 \subseteq \mathbb{R}^n$
$\exists$ strongly separating hyperplane between $C_1$ and $C_2$
$\iff \inf_{x_1 \in C_1, x_2 \in C_2} \{|x_1 - x_2|\} > 0$
$\iff \text{dist}(C_1, C_2) > 0$
$\iff 0 \notin \text{cl}(C_1 - C_2)$
Optimization for ML Slide 56
Carnegie Mellon University

### Visual Description
This slide provides equivalent conditions for the existence of a strongly separating hyperplane between two convex sets. It uses mathematical notation to show that strong separation is possible if and only if the distance between the sets is strictly positive.

## Page 57
### Content
Supporting hyperplane thm
Theorem: [Supporting hyperplane theorem]
For any point $x_0$ on the boundary of convex $C$ (i.e. $x_0 \in \partial C$),
$\exists$ hyperplane $\{x | a^T x = b, a \neq 0\}$ s.t. $\forall x \in C \quad a^T x \leq a^T x_0, a^T x_0 = b$
(Diagram of a convex set with a supporting hyperplane at point $x_0$)
Optimization for ML Slide 57
Carnegie Mellon University

### Visual Description
This slide presents the Supporting Hyperplane Theorem.
- A diagram shows a large oval representing a convex set $C$.
- A point $x_0$ is marked on its boundary.
- A straight line is drawn tangent to the oval at $x_0$.
- This line is the supporting hyperplane, which contains $x_0$ and has the entire set $C$ on one side of it.

## Page 58
### Content
Converse of the Supporting hyperplane thm
Theorem: [Partial converse of the supporting hyperplane theorem]
Let set $C$ be closed
$\text{int}(C) \neq \emptyset$
For all $x_0 \in \partial C$ there is a supporting hyperplane of $C$ at $x_0$
$\implies$ set $C$ is convex
(Diagram of a non-convex set where a supporting hyperplane does not exist at a certain boundary point)
This set $C$ is not convex. We can find a point on $\partial C$ where there is no supporting hyperplane.
Optimization for ML Slide 58
Carnegie Mellon University

### Visual Description
This slide discusses the converse of the supporting hyperplane theorem.
- A diagram shows a non-convex kidney-bean shape labeled $C$.
- A point $x_0$ is chosen in the "dent" or concave part of the boundary.
- A line is drawn through $x_0$ and a vector $a$ is shown.
- The diagram shows that any line passing through $x_0$ in this concave region will inevitably cut through the interior of the set elsewhere. Thus, no supporting hyperplane exists at this point, which is consistent with the set being non-convex.

## Page 59
### Content
Convex set representation with convex hull
Theorem: [Representation of a closed convex set with a convex hull]
Let $S \subseteq \mathbb{R}^n$ be an arbitrary set. [It doesn’t need to be convex]
Let $C \doteq \text{cl}(\text{conv}(S))$ be a closed convex set generated by $S$.
$\implies C$ is the convex hull of possibly infinite many points in $S$.
(Diagram of a set of points and their convex hull)
Optimization for ML Slide 59
Carnegie Mellon University

### Visual Description
This slide states that any closed convex set can be represented as the convex hull of some set of points. It reuses the diagram from page 18 showing several black dots and their shaded gray polygonal convex hull to illustrate this concept.

## Page 60
### Content
Dual representation
Theorem: [Representation of a closed convex set with half spaces]
Let $S \subseteq \mathbb{R}^n$ be an arbitrary set.
Let $C \doteq \text{cl}(\text{conv}(S))$ be a closed convex set generated by $S$.
$\implies C$ is the intersection of all the closed half-spaces which contain $S$.
$\{x \in \mathbb{R}^n | a_i^T x \leq b_i\}, a_i \in \mathbb{R}^n, b_i \in \mathbb{R}$
(Diagram of a convex set being enclosed by multiple half-spaces)
Any closed convex set can be represented this way (possibly with infinitely many half-spaces)
Optimization for ML Slide 60
Carnegie Mellon University

### Visual Description
This slide presents the "dual" representation of a convex set.
- A diagram shows a shaded gray convex shape.
- Several straight lines are drawn around it, each representing the boundary of a half-space that contains the shape.
- The shape itself is the intersection of all such half-spaces.
- This visually demonstrates that any closed convex set can be defined by a collection of linear inequalities.

## Page 61
### Content
Convexity-preserving operations
Optimization for ML Slide 61
Carnegie Mellon University

### Visual Description
This is a section header slide with the text "Convexity-preserving operations" centered in blue.

## Page 62
### Content
Convexity-preserving set operations
* Translation: $C + b$
* Scaling: $\alpha C, \alpha \in \mathbb{R}$
* Intersection $C, D$ convex $\implies C \cap D$ convex
This can be extended to infinite many sets:
If $C_\alpha$ is convex $\forall \alpha \in \mathcal{A}$, then $\bigcap_{\alpha \in \mathcal{A}} C_\alpha$ is also convex.
Optimization for ML Slide 62
Carnegie Mellon University

### Visual Description
This slide lists basic operations that preserve the convexity of sets: translation, scaling, and intersection (including infinite intersections). It is entirely text-based.

## Page 63
### Content
Convexity-preserving set operations
* Affine images: E.g. projection, dropping coordinates
Let $f(x) = Ax + b$ be an affine function, where $A \in \mathbb{R}^{m \times n}, b \in \mathbb{R}^n$.
If $C \subseteq \mathbb{R}^n$ is convex, then
$f(C) \doteq AC + b = \{Ax + b | x \in C\} \subseteq \mathbb{R}^n$ is also convex.
* Affine pre-images:
If $C \subseteq \mathbb{R}^n$ is convex, $f(x) = Ax + b$, then
$f^{-1}(C) \doteq \{x : f(x) \in C\}$ is also convex.
Optimization for ML Slide 63
Carnegie Mellon University

### Visual Description
This slide explains that the image and pre-image of a convex set under an affine transformation are also convex. It provides mathematical definitions for both cases. The content is entirely text-based.

## Page 64
### Content
Convexity-preserving set operations
* Set sum:
$C_1 + C_2 = \{c_1 + c_2 | c_1 \in C_1, c_2 \in C_2\}$
* Direct sum:
Let $C_1 \subseteq \mathbb{R}^n, C_2 \subseteq \mathbb{R}^m$ convex sets.
$C_1 \times C_2 \doteq \{(c_1, c_2) | c_1 \in C_1, c_2 \in C_2\} \subseteq \mathbb{R}^{n+m}$
Optimization for ML Slide 64
Carnegie Mellon University

### Visual Description
This slide lists set sum (Minkowski sum) and direct product (Cartesian product) as operations that preserve convexity. It is entirely text-based.

## Page 65
### Content
Convexity-preserving set operations
* Perspective projection:
Let $P(x) = P(x_1, \dots, x_n, t) \doteq (\frac{x_1}{t}, \frac{x_2}{t}, \dots, \frac{x_n}{t}) \in \mathbb{R}^n$
If $C \subseteq \mathbb{R}^n \times \mathbb{R}_{++}$ is convex, then $P(C)$ is also convex.
Similarly, if $D$ is convex, then $P^{-1}(D)$ is also convex.
(Hand-drawn 3D diagram illustrating perspective projection)
Optimization for ML Slide 65
Carnegie Mellon University

### Visual Description
This slide defines perspective projection and states that it preserves convexity.
- A hand-drawn 3D diagram shows three axes: $x_1, x_2, x_3$.
- A set of points in the 3D space is projected onto a 2D plane at $x_3 = -1$.
- Red lines originate from the origin and pass through points in the 3D set to their corresponding locations on the projection plane.
- One projected point is labeled with coordinates $(-\frac{x_1}{x_3}, -\frac{x_2}{x_3}, -1)$.
- This visually explains the mathematical operation of dividing by one of the coordinates.

## Page 66
### Content
Convexity-preserving set operations
* Linear-fractional function:
Let $f(x) = \frac{Ax + b}{c^T x + d} \quad A \in \mathbb{R}^{m \times n}, b \in \mathbb{R}^m, c \in \mathbb{R}^n, d \in \mathbb{R}$
$\text{dom}(f) = \{x | c^T x + d > 0\}$
If $C \subseteq \mathbb{R}^n$ is convex, then $f(C) \subseteq \mathbb{R}^m$ is also convex.
Similarly, if $D$ is convex, then $f^{-1}(D)$ is also convex.
Optimization for ML Slide 66
Carnegie Mellon University

### Visual Description
This slide defines linear-fractional functions and states that they preserve convexity for both images and pre-images. It is entirely text-based.

## Page 67
### Content
Convexity-preserving set operations
* Conditional Probability Set:
Let $U, V$ be discrete random variables over $\{1, \dots, n\}$ and $\{1, \dots, m\}$.
Let $C \subseteq \mathbb{R}^{nm}$ be a set of joint distributions for $U, V$
i.e., each $p \in C$ defines joint probabilities:
$p_{ij} = \mathbb{P}(U = i, V = j) \quad C = \{c = (p_{11}, p_{12}, \dots, p_{mn}) \in [0, 1]^{m \times n}\}$
Let $D \subseteq \mathbb{R}^{nm}$ contain the corresponding conditional distributions,
$f_{ij} \doteq \frac{p_{ij}}{\sum_{k=1}^n p_{kj}} = \mathbb{P}(U = i | V = j) \quad D \doteq \{d = (f_{11}, f_{12}, \dots, f_{mn}) \in [0, 1]^{m \times n}\}$
Theorem: If $C$ is convex $\implies D$ is convex.
Proof: The linear-fractional image preserves convexity.
Optimization for ML Slide 67
Carnegie Mellon University

### Visual Description
This slide provides an application of convexity-preserving operations in probability. It shows that if a set of joint probability distributions is convex, then the corresponding set of conditional distributions is also convex. The proof relies on the fact that the transformation from joint to conditional probability is a linear-fractional function. The content is entirely text and equations.

## Page 68
### Content
Convexity-preserving set operations
Union does not preserve convexity!
(Diagram showing the union of two overlapping ovals)
Optimization for ML Slide 68
Carnegie Mellon University

### Visual Description
This slide provides a counterexample to show that the union of convex sets is not necessarily convex.
- A diagram shows a red oval and a light blue oval that overlap.
- Their union is the combined shape.
- A line segment connecting a point in the red part to a point in the blue part would pass through the "waist" or "dent" of the combined shape, which is outside the union. This visually demonstrates non-convexity.

## Page 69
### Content
Reading Material
* Boyd and Vandenberghe: Convex Optimization, Chapters 2 & 3
* Rockafellar: Convex Analysis
* Separation Theorems:
    * https://www.akshayagrawal.com/files/separation-theorems.pdf
Optimization for ML Slide 69
Carnegie Mellon University

### Visual Description
This slide lists recommended reading materials for the topics covered. It is entirely text-based.

## Page 70
### Content
Summary
Optimization for ML Slide 70
Carnegie Mellon University

### Visual Description
This is a section header slide with the text "Summary" centered in blue.

## Page 71
### Content
Summary: Proving that a set is convex
* Use the definition directly
* Represent the set as a convex hull
* Represent it as the intersection of half-spaces
* Supporting hyperplane partial converse:
    * C closed, nonempty interior, has supporting hyperplane at all boundary points $\implies$ C convex
* Build C up from simpler sets using convexity-preserving operations
Optimization for ML Slide 71
Carnegie Mellon University

### Visual Description
This slide summarizes different strategies for proving that a given set is convex. It is entirely text-based.

## Page 72
### Content
Need to Know
Definitions:
line, line segment, convex set, nonconvex set, convex combination, feasible point, local optimum, global optimum, convex hull, hyperplanes, half spaces, affine sets, affine hulls, norm balls, Lp balls, convex and nonconvex Lp balls, polyhedron, polytope, convex and nonconvex cones, rays, conic combinations, conic hulls, eigenvalue, eigenvector, PSD matrix, partial ordering of square matrices, norm cone, boundary of a set, interior of a set, relative interior of a set, set is closed, set is open, closure of a set, set is compact in R^d, strictly convex set, polar cone, normal cone, tangent cone, strong separation, strict separation
Optimization for ML Slide 72
Carnegie Mellon University

### Visual Description
This slide lists all the key terms and definitions introduced in the lecture that students are expected to know. It is a dense list of text.

## Page 73
### Content
Need to Know
Theorems:
* For a convex optimization problem, any local optima is a global optima.
* Convex hull of C set is always a convex set (even if C is not), and it is the smallest convex set that contains C.
* The Aff(C) is the smallest affine set that contains C
* Affine sets are convex
* The set of optimal solutions to a convex optimization problem is a convex set.
* A symmetric matrix A is positive definite iff all its eigenvalues are positive
* The set of symmetric, PSD matrices form a convex cone
* The polar cone is always a closed convex cone even if C is not convex.
* The normal cones are convex
Optimization for ML Slide 73
Carnegie Mellon University

### Visual Description
This slide lists the first set of key theorems covered in the lecture. It is entirely text-based.

## Page 74
### Content
Need to Know
Theorems:
* For convex sets, the tangent cone is a convex cone.
* For convex sets, the polar of the normal cone is the tangent cone.
* In a convex optimization problem, a point x will be optimal if the negative gradient of the point belongs to the normal cone at x
* Separating hyperplane theorem
* Strong separation theorem I
* Strong separation theorem II
* Supporting hyperplane theorem
* Partial converse of the supporting hyperplane theorem
* Representation of a closed convex set with a convex hull
* Representation of a closed convex set with half spaces
Optimization for ML Slide 74
Carnegie Mellon University

### Visual Description
This slide lists the second set of key theorems covered in the lecture. It is entirely text-based.

## Page 75
### Content
Need to Know
* Why convex optimization problems are important.
* Properties of convex hulls
* Examples of convex sets
* Properties of affine sets
* Examples of affine sets
* Polar cone properties
* Normal cone properties
* Convexity-preserving operations
* Union does not preserve convexity
Optimization for ML Slide 75
Carnegie Mellon University

### Visual Description
This slide lists key concepts and properties that students should understand after the lecture. It is entirely text-based.

## Page 76
### Content
Thanks For Your Attention ☺
Optimization for ML Slide 76
Carnegie Mellon University

### Visual Description
This is a closing slide with a "thank you" message and a smiley face icon.

## Page 77
### Content
Credits
Some of the contents have been taken from:
* Ryan Tibshirani
* Sivaraman Balakrishnan
Optimization for ML Slide 77
Carnegie Mellon University

### Visual Description
This slide provides credits for the lecture content, mentioning Ryan Tibshirani and Sivaraman Balakrishnan. It is entirely text-based.\n