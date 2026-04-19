# 6. Newton Method

## Table of Contents

- [[#6.0 Where This Topic Came From in the Course]]
- [[#6.1 Two Different Newton Methods]]
    - [[#6.1.1 Why the course keeps separating these two]]
- [[#6.2 Newton for Root Finding]]
    - [[#6.2.1 Geometric picture for root finding]]
- [[#6.3 Newton for Unconstrained Minimization]]
    - [[#6.3.1 What equation the Newton step is actually solving]]
- [[#6.4 Deriving the Newton Step]]
    - [[#6.4.1 Linearizing the gradient]]
    - [[#6.4.2 Quadratic-model viewpoint]]
    - [[#6.4.3 Why the two derivations agree]]
- [[#6.5 Why the Newton Step Is a Descent Direction]]
    - [[#6.5.1 Slow version of the proof]]
- [[#6.6 Local Quadratic Convergence]]
    - [[#6.6.1 What quadratic convergence really means]]
- [[#6.7 Why Newton Is Not Globally Reliable]]
    - [[#6.7.1 A concrete failure mode to picture]]
- [[#6.8 Damped Newton]]
    - [[#6.8.1 One-dimensional example of damping]]
    - [[#6.8.2 How damping is chosen in practice]]
- [[#6.9 Newton Fractals and Initialization Sensitivity]]
- [[#6.10 HW4 Connection: A Convex Counterexample to Global Convergence]]
    - [[#6.10.1 Why convexity alone is not enough]]
- [[#6.11 Common Traps]]

## 6.0 Where This Topic Came From in the Course

Newton appeared in two stages:

1. `March 19`: Newton method and Newton fractals
2. `March 26`: Newton method for minimization and related applications

Then `HW4` added a very important warning:

- even for convex functions, Newton is not globally convergent in general

So the course did not present Newton as “always better than gradient descent.” It presented Newton as:

- mathematically elegant
- extremely fast locally
- but potentially unstable globally

## 6.1 Two Different Newton Methods

One of the easiest mistakes in this unit is mixing up the two versions.

### Root finding

Given a scalar equation $\phi(x)=0$, Newton's method is

$$
x_{k+1} = x_k - \frac{\phi(x_k)}{\phi'(x_k)}.
$$

### Minimization

For unconstrained minimization, the goal is to solve

$$
\nabla f(x)=0.
$$

Applying Newton to that vector equation gives

$$
x_{k+1}
=
x_k - [\nabla^2 f(x_k)]^{-1}\nabla f(x_k).
$$

The formulas look similar, but they are not interchangeable.

The exam-safe sentence is:

`Root finding uses the derivative of a scalar function; minimization applies Newton to the gradient equation and therefore uses the Hessian.`

### 6.1.1 Why the course keeps separating these two

It is easy to feel like these are “the same method with different notation.” They are related, but the objects are different enough that the distinction matters.

In root finding, the thing you want to make zero is a scalar function:

$$
\phi(x)=0.
$$

In minimization, the thing you want to make zero is the gradient:

$$
\nabla f(x)=0.
$$

So the minimization version is really:

`apply root-finding Newton to the stationarity equation.`

That is why the derivative becomes the Hessian:

- scalar root finding uses $\phi'(x)$
- minimization uses the derivative of $\nabla f(x)$, which is $\nabla^2 f(x)$

If you keep that one sentence straight, most Newton formulas become easier to remember.

## 6.2 Newton for Root Finding

The scalar update

$$
x_{k+1} = x_k - \frac{\phi(x_k)}{\phi'(x_k)}
$$

comes from linearizing $\phi$ around $x_k$:

$$
\phi(x_k+\Delta x)\approx \phi(x_k)+\phi'(x_k)\Delta x.
$$

Then force this approximation to equal zero:

$$
\phi(x_k)+\phi'(x_k)\Delta x = 0,
$$

so

$$
\Delta x = -\frac{\phi(x_k)}{\phi'(x_k)}.
$$

Then update by

$$
x_{k+1}=x_k+\Delta x.
$$

This derivation matters because the minimization derivation is structurally the same, just with the gradient and Hessian replacing $\phi$ and $\phi'$.

### 6.2.1 Geometric picture for root finding

The geometric picture is worth knowing because it makes the formula feel much less mysterious.

At the current point $x_k$, draw the tangent line to the graph of $\phi$.

That tangent line is

$$
\phi(x_k)+\phi'(x_k)(x-x_k).
$$

Newton's method asks:

`where does that tangent line hit the x-axis?`

Set the tangent-line approximation equal to zero:

$$
\phi(x_k)+\phi'(x_k)(x-x_k)=0.
$$

Solving gives

$$
x=x_k-\frac{\phi(x_k)}{\phi'(x_k)}.
$$

So Newton is:

- replace the nonlinear function by its local linear approximation
- solve the easier linear problem exactly
- use that solution as the next iterate

That same philosophy is what carries over to minimization.

## 6.3 Newton for Unconstrained Minimization

For optimization, we want to find a point where

$$
\nabla f(x)=0.
$$

At iteration $k$, linearize the gradient around $x_k$:

$$
\nabla f(x_k+\Delta x)
\approx
\nabla f(x_k)+\nabla^2 f(x_k)\Delta x.
$$

Now force this approximation to zero:

$$
\nabla f(x_k)+\nabla^2 f(x_k)\Delta x = 0.
$$

Solving for the step gives

$$
\Delta x_k = -[\nabla^2 f(x_k)]^{-1}\nabla f(x_k).
$$

So the Newton update is

$$
x_{k+1}=x_k+\Delta x_k
=
x_k-[\nabla^2 f(x_k)]^{-1}\nabla f(x_k).
$$

### 6.3.1 What equation the Newton step is actually solving

This is a good place to slow down.

At iteration $k$, the true stationarity equation is

$$
\nabla f(x)=0.
$$

But solving that equation exactly is usually hard. So Newton says:

`I will not solve the true gradient equation. I will solve a local linear approximation to it.`

The local approximation around $x_k$ is

$$
\nabla f(x_k+\Delta x)
\approx
\nabla f(x_k)+\nabla^2 f(x_k)\Delta x.
$$

Then Newton chooses $\Delta x$ so that this approximation becomes zero:

$$
\nabla f(x_k)+\nabla^2 f(x_k)\Delta x=0.
$$

So the Newton step is the exact solution of a locally linearized stationarity equation.

That is the main conceptual point:

`Newton replaces a hard nonlinear equation by an easier linear one at each step.`

## 6.4 Deriving the Newton Step

### 6.4.1 Linearizing the gradient

The derivation above is the root-finding-on-the-gradient viewpoint.

This is the one most often emphasized in the lecture notes because it connects directly to the scalar Newton method.

### 6.4.2 Quadratic-model viewpoint

There is also a minimization interpretation.

Use the second-order Taylor approximation of $f$ near $x_k$:

$$
f(x_k+\Delta x)
\approx
f(x_k)
+
\nabla f(x_k)^T \Delta x
+
\frac12 \Delta x^T \nabla^2 f(x_k)\Delta x.
$$

Now minimize this quadratic model with respect to $\Delta x$.

Set its gradient with respect to $\Delta x$ to zero:

$$
\nabla f(x_k)+\nabla^2 f(x_k)\Delta x = 0,
$$

which gives the same step:

$$
\Delta x_k = -[\nabla^2 f(x_k)]^{-1}\nabla f(x_k).
$$

So you should know both viewpoints:

- Newton as root finding on $\nabla f(x)=0$
- Newton as minimizing a local quadratic model

### 6.4.3 Why the two derivations agree

At first it can feel surprising that two different stories give the same formula.

But they are really telling the same story from two angles.

The root-finding viewpoint says:

- approximate the gradient equation linearly
- solve that linear approximation

The quadratic-model viewpoint says:

- approximate the objective quadratically
- minimize that quadratic approximation

Why do they match?

Because the gradient of the quadratic Taylor model is exactly the linearized gradient.

Start with the quadratic model:

$$
m_k(\Delta x)
=
f(x_k)
+
\nabla f(x_k)^T\Delta x
+
\frac12 \Delta x^T \nabla^2 f(x_k)\Delta x.
$$

Differentiate with respect to $\Delta x$:

$$
\nabla_{\Delta x} m_k(\Delta x)
=
\nabla f(x_k)+\nabla^2 f(x_k)\Delta x.
$$

But that is exactly the linearized gradient expression from the other derivation.

So:

- minimizing the quadratic model means setting its gradient to zero
- that gradient is the linearized stationarity equation

That is why the two viewpoints produce the same Newton step.

## 6.5 Why the Newton Step Is a Descent Direction

Assume the Hessian is positive definite:

$$
\nabla^2 f(x_k) \succ 0.
$$

Then its inverse is also positive definite.

The Newton step is

$$
\Delta x_k = -[\nabla^2 f(x_k)]^{-1}\nabla f(x_k).
$$

Take the inner product with the gradient:

$$
\nabla f(x_k)^T \Delta x_k
=
-\nabla f(x_k)^T [\nabla^2 f(x_k)]^{-1}\nabla f(x_k).
$$

Since $[\nabla^2 f(x_k)]^{-1}$ is positive definite, the quadratic form

$$
\nabla f(x_k)^T [\nabla^2 f(x_k)]^{-1}\nabla f(x_k)
$$

is strictly positive whenever $\nabla f(x_k)\neq 0$.

Therefore

$$
\nabla f(x_k)^T \Delta x_k < 0.
$$

That is exactly the definition of a descent direction.

This is one of the proof-style results you should be able to write cleanly in a few lines.

### 6.5.1 Slow version of the proof

Let us rewrite the proof in a slower way.

We want to show that the Newton step points downhill, meaning

$$
\nabla f(x_k)^T \Delta x_k < 0
$$

whenever $\nabla f(x_k)\ne 0$.

Start with the Newton step:

$$
\Delta x_k = -[\nabla^2 f(x_k)]^{-1}\nabla f(x_k).
$$

Now take inner product with the gradient.

- original version:

$$
\nabla f(x_k)^T \Delta x_k
$$

- substitute the Newton step:

$$
\nabla f(x_k)^T\Bigl(-[\nabla^2 f(x_k)]^{-1}\nabla f(x_k)\Bigr)
$$

- simplify:

$$
-\nabla f(x_k)^T[\nabla^2 f(x_k)]^{-1}\nabla f(x_k)
$$

Now use the assumption

$$
\nabla^2 f(x_k)\succ 0.
$$

If a matrix is positive definite, then its inverse is also positive definite. So

$$
[\nabla^2 f(x_k)]^{-1}\succ 0.
$$

That means for every nonzero vector $v$,

$$
v^T [\nabla^2 f(x_k)]^{-1} v > 0.
$$

Now choose

$$
v=\nabla f(x_k).
$$

If $\nabla f(x_k)\ne 0$, then

$$
\nabla f(x_k)^T[\nabla^2 f(x_k)]^{-1}\nabla f(x_k)>0.
$$

So our earlier expression becomes

$$
\nabla f(x_k)^T \Delta x_k
=
-\text{(positive number)}
<
0.
$$

That is exactly the descent-direction condition.

## 6.6 Local Quadratic Convergence

Near a nondegenerate local minimizer $x^*$, Newton converges quadratically:

$$
\|x_{k+1}-x^*\|
\le
C\|x_k-x^*\|^2.
$$

Quadratic convergence is dramatically faster than linear convergence.

Very roughly:

- if the current error is about $10^{-2}$
- the next error behaves like a constant times $10^{-4}$
- then $10^{-8}$, and so on

This is the main reason Newton is so attractive.

But it is a **local** theorem, not a global one.

### 6.6.1 What quadratic convergence really means

The phrase `quadratic convergence` sounds technical, but the idea is simple:

`once you are close enough, the number of correct digits can grow very quickly.`

The formal statement

$$
\|x_{k+1}-x^*\|
\le
C\|x_k-x^*\|^2
$$

means the next error is proportional to the square of the current error.

So if the current error is small, squaring it makes it much smaller.

For intuition:

- error around $10^{-1}$ can become size $10^{-2}$
- then about $10^{-4}$
- then about $10^{-8}$

up to constants

Compare that with linear convergence, where the error only gets multiplied by a fixed factor:

$$
\|x_{k+1}-x^*\| \le \rho \|x_k-x^*\|,
\qquad 0<\rho<1.
$$

Linear convergence is steady reduction. Quadratic convergence is slow-to-fast behavior:

- not impressive when you are far away
- extremely impressive when you are already close

That is why Newton is so powerful near the solution and so unreliable as a global method.

## 6.7 Why Newton Is Not Globally Reliable

There are several failure modes away from the minimizer:

- the Hessian may be singular, so the step is undefined
- the Hessian may be indefinite, so the step may fail to be a descent direction
- the local quadratic model may be a poor approximation far away
- the method can overshoot or diverge

This is why the phrase to remember is:

`Newton is local.`

That one word explains most of the edge cases.

### 6.7.1 A concrete failure mode to picture

A useful concrete picture is the case where the Hessian is not positive definite.

Suppose at some point $x_k$ the Hessian has a negative-curvature direction. Then the local quadratic model does not look like a bowl. It may look like a saddle.

In that case:

- the Newton equation is still algebraically solvable
- but the resulting step need not point toward a minimizer
- it can even point toward a saddle or move in a direction that increases the objective

So the slogan is:

`Newton solves the local quadratic model, but the local quadratic model may itself be misleading.`

That is one of the deepest differences from plain gradient descent. Gradient descent always uses the negative gradient direction, which is downhill locally. Newton uses more structure, but that extra structure can help or hurt depending on the quality of the local model.

## 6.8 Damped Newton

To improve stability, introduce a step-size factor:

$$
x_{k+1}
=
x_k - h_k[\nabla^2 f(x_k)]^{-1}\nabla f(x_k),
\qquad
0<h_k\le 1.
$$

This is damped Newton.

Interpretation:

- far from the solution, use a smaller step to avoid instability
- near the solution, often recover the full Newton step with $h_k=1$

So damped Newton gives up some of Newton’s raw aggressiveness in exchange for better global behavior.

### 6.8.1 One-dimensional example of damping

In one dimension, the difference between full Newton and damped Newton is especially easy to see.

Full Newton for minimization is

$$
x_{k+1}
=
x_k - \frac{f'(x_k)}{f''(x_k)}.
$$

Damped Newton inserts a scalar factor:

$$
x_{k+1}
=
x_k - h_k \frac{f'(x_k)}{f''(x_k)},
\qquad
0<h_k\le 1.
$$

So damping does not change the direction of the Newton step. It only changes how far you move along it.

That is why damping is a natural globalization device:

- if the raw Newton step is too aggressive, reduce $h_k$
- if the local model is accurate, let $h_k$ move back toward $1$

So you should think of damping as:

`keep the curvature-aware Newton direction, but be less trusting about the step length.`

### 6.8.2 How damping is chosen in practice

In practice, damping is usually not chosen arbitrarily. A common strategy is:

1. compute the full Newton direction
2. try the full step length $h_k=1$
3. if that step does not decrease the objective enough, shrink $h_k$
4. keep shrinking until a descent condition is satisfied

So damping is often paired with line search or backtracking.

The reason is simple:

- Newton's direction may be excellent
- but the full step length may be too optimistic

This is a useful separation to remember:

- direction choice: use curvature information
- step length choice: use damping / line search for safety

## 6.9 Newton Fractals and Initialization Sensitivity

The lecture title explicitly mentioned Newton fractals, which is a clue that the instructor wanted you to appreciate how initialization-sensitive Newton can be.

For Newton applied to complex polynomials:

- different initial points can converge to different roots
- the plane splits into basins of attraction
- the basin boundaries can have fractal structure

The exam is unlikely to ask for a full derivation here, but the conceptual point matters:

`Newton can be highly sensitive to initialization.`

That sensitivity is the visual/geometric version of “Newton is not globally reliable.”

## 6.10 HW4 Connection: A Convex Counterexample to Global Convergence

Your `HW4` contains an especially useful calibration problem:

- show there exists a convex function for which damped Newton fails to converge globally

That is important because many students informally believe:

`convex + second order = globally safe`.

HW4 tells you that is false.

The homework constructs a convex function with bounded derivatives where the damped Newton iteration

$$
x_{t+1}
=
x_t-\eta [\nabla^2 f(x_t)]^{-1}\nabla f(x_t)
$$

can still diverge for a bad initialization.

So the refined lesson is:

- convexity helps with optimization structure
- but it does not by itself guarantee global convergence of Newton iterates

That is exactly why line search, damping, trust-region ideas, and other globalization strategies exist.

### 6.10.1 Why convexity alone is not enough

This is a subtle but important lesson.

Convexity tells you something about the shape of the objective globally:

- every local minimizer is global
- the function has no spurious local minima

But Newton's method is not only about the objective itself. It is about the dynamics of the iteration

$$
x_{t+1}
=
x_t-\eta [\nabla^2 f(x_t)]^{-1}\nabla f(x_t).
$$

Those dynamics depend on:

- the gradient
- the Hessian
- how well the local quadratic model behaves at the current point
- the size of the step you actually take

So convexity does **not** automatically imply:
- safe step sizes
- good local quadratic approximations far away
- global convergence of raw or damped Newton iterates

That is why the HW4 example matters so much. It breaks the naive belief that “convex should make Newton automatically safe.”

## 6.11 Common Traps

- mixing up root-finding Newton with minimization Newton
- forgetting the Hessian inverse in the minimization update
- claiming Newton always converges globally on convex problems
- stating the quadratic rate as a global rate instead of a local one
- saying the Newton step is always a descent direction without requiring a positive-definite Hessian

The single most useful sentence to remember is:

`Newton is extremely fast locally, but the method is not automatically globally stable.`
