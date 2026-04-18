# 6. Newton Method

## Table of Contents

- [[#6.0 Where This Topic Came From in the Course]]
- [[#6.1 Two Different Newton Methods]]
- [[#6.2 Newton for Root Finding]]
- [[#6.3 Newton for Unconstrained Minimization]]
- [[#6.4 Deriving the Newton Step]]
    - [[#6.4.1 Linearizing the gradient]]
    - [[#6.4.2 Quadratic-model viewpoint]]
- [[#6.5 Why the Newton Step Is a Descent Direction]]
- [[#6.6 Local Quadratic Convergence]]
- [[#6.7 Why Newton Is Not Globally Reliable]]
- [[#6.8 Damped Newton]]
    - [[#6.8.1 One-dimensional example of damping]]
- [[#6.9 Newton Fractals and Initialization Sensitivity]]
- [[#6.10 HW4 Connection: A Convex Counterexample to Global Convergence]]
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

Given a scalar equation `$\phi(x)=0$`, Newton's method is

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

## 6.2 Newton for Root Finding

The scalar update

$$
x_{k+1} = x_k - \frac{\phi(x_k)}{\phi'(x_k)}
$$

comes from linearizing `$\phi$` around `$x_k$`:

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

This derivation matters because the minimization derivation is structurally the same, just with the gradient and Hessian replacing `$\phi$` and `$\phi'$`.

## 6.3 Newton for Unconstrained Minimization

For optimization, we want to find a point where

$$
\nabla f(x)=0.
$$

At iteration `$k$`, linearize the gradient around `$x_k$`:

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

## 6.4 Deriving the Newton Step

### 6.4.1 Linearizing the gradient

The derivation above is the root-finding-on-the-gradient viewpoint.

This is the one most often emphasized in the lecture notes because it connects directly to the scalar Newton method.

### 6.4.2 Quadratic-model viewpoint

There is also a minimization interpretation.

Use the second-order Taylor approximation of `$f$` near `$x_k$`:

$$
f(x_k+\Delta x)
\approx
f(x_k)
+
\nabla f(x_k)^T \Delta x
+
\frac12 \Delta x^T \nabla^2 f(x_k)\Delta x.
$$

Now minimize this quadratic model with respect to `$\Delta x$`.

Set its gradient with respect to `$\Delta x$` to zero:

$$
\nabla f(x_k)+\nabla^2 f(x_k)\Delta x = 0,
$$

which gives the same step:

$$
\Delta x_k = -[\nabla^2 f(x_k)]^{-1}\nabla f(x_k).
$$

So you should know both viewpoints:

- Newton as root finding on `$\nabla f(x)=0$`
- Newton as minimizing a local quadratic model

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

Since `$\,[\nabla^2 f(x_k)]^{-1}\,$` is positive definite, the quadratic form

$$
\nabla f(x_k)^T [\nabla^2 f(x_k)]^{-1}\nabla f(x_k)
$$

is strictly positive whenever `$\nabla f(x_k)\neq 0$`.

Therefore

$$
\nabla f(x_k)^T \Delta x_k < 0.
$$

That is exactly the definition of a descent direction.

This is one of the proof-style results you should be able to write cleanly in a few lines.

## 6.6 Local Quadratic Convergence

Near a nondegenerate local minimizer `$x^*$`, Newton converges quadratically:

$$
\|x_{k+1}-x^*\|
\le
C\|x_k-x^*\|^2.
$$

Quadratic convergence is dramatically faster than linear convergence.

Very roughly:

- if the current error is about `$10^{-2}$`
- the next error behaves like a constant times `$10^{-4}$`
- then `$10^{-8}$`, and so on

This is the main reason Newton is so attractive.

But it is a **local** theorem, not a global one.

## 6.7 Why Newton Is Not Globally Reliable

There are several failure modes away from the minimizer:

- the Hessian may be singular, so the step is undefined
- the Hessian may be indefinite, so the step may fail to be a descent direction
- the local quadratic model may be a poor approximation far away
- the method can overshoot or diverge

This is why the phrase to remember is:

`Newton is local.`

That one word explains most of the edge cases.

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
- near the solution, often recover the full Newton step with `$h_k=1$`

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

- if the raw Newton step is too aggressive, reduce `$h_k$`
- if the local model is accurate, let `$h_k$` move back toward `1`

So you should think of damping as:

`keep the curvature-aware Newton direction, but be less trusting about the step length.`

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

## 6.11 Common Traps

- mixing up root-finding Newton with minimization Newton
- forgetting the Hessian inverse in the minimization update
- claiming Newton always converges globally on convex problems
- stating the quadratic rate as a global rate instead of a local one
- saying the Newton step is always a descent direction without requiring a positive-definite Hessian

The single most useful sentence to remember is:

`Newton is extremely fast locally, but the method is not automatically globally stable.`
