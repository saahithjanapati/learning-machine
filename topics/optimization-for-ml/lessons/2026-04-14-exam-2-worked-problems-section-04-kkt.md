# 4. KKT Worked Problems

## Table of Contents

- [[#Problem 4.1]]
- [[#Problem 4.2]]
- [[#Problem 4.3]]
- [[#Problem 4.4]]
- [[#Problem 4.5]]

### Problem 4.1

Solve

$$
\min_x x^2
\quad \text{s.t. } x \ge 1
$$

using KKT.

### Solution

Write the constraint as

$$
1-x \le 0.
$$

Then

$$
L(x,\nu)=x^2+\nu(1-x),\qquad \nu \ge 0.
$$

KKT conditions are:

Primal feasibility:

$$
x \ge 1.
$$

Dual feasibility:

$$
\nu \ge 0.
$$

Complementary slackness:

$$
\nu(1-x)=0.
$$

Stationarity:

$$
2x-\nu=0.
$$

From stationarity,

$$
\nu=2x.
$$

If $x>1$, complementary slackness forces $\nu=0$, which would imply $x=0$, impossible.

So the constraint must be active:

$$
x=1.
$$

Then stationarity gives

$$
\nu=2.
$$

Thus

$$
x^*=1,\qquad \nu^*=2.
$$

Since the problem is convex, this KKT point is optimal.

### Problem 4.2

Consider

$$
\max_x -x^4+x^2.
$$

Find the stationary points and explain why KKT-style first-order conditions alone do not identify the global optimum in general nonconvex problems.

### Solution

The derivative is

$$
f'(x)=-4x^3+2x=2x(1-2x^2).
$$

So the stationary points are

$$
x=0,\qquad x=\pm \frac{1}{\sqrt{2}}.
$$

Evaluate:

$$
f(0)=0,
$$

and

$$
f\left(\pm \frac{1}{\sqrt{2}}\right)
=
-\frac14+\frac12
=
\frac14.
$$

So the global maximizers are

$$
x=\pm \frac{1}{\sqrt{2}}.
$$

The point $x=0$ is stationary but not globally optimal. This is why first-order stationarity in a nonconvex problem only gives candidate points.

### Problem 4.3

Solve

$$
\min_{x,y} x^2+y^2
\quad \text{s.t. } x+y=1,\; x \ge 0
$$

using KKT. Identify whether the inequality is active or inactive at the optimum.

### Solution

Write the inequality as

$$
-x \le 0.
$$

The Lagrangian is

$$
L(x,y,u,\nu)=x^2+y^2+u(x+y-1)+\nu(-x),
\qquad \nu \ge 0.
$$

KKT conditions:

Primal feasibility:

$$
x+y=1,
\qquad
x \ge 0.
$$

Dual feasibility:

$$
\nu \ge 0.
$$

Complementary slackness:

$$
\nu x=0.
$$

Stationarity:

$$
2x+u-\nu=0,
\qquad
2y+u=0.
$$

First try the case where the inequality is inactive, so

$$
x>0.
$$

Then complementary slackness gives

$$
\nu=0.
$$

So stationarity becomes

$$
2x+u=0,
\qquad
2y+u=0,
$$

which implies

$$
x=y.
$$

Using the equality constraint,

$$
x+y=1,
$$

we get

$$
x=y=\frac12.
$$

This point is feasible and satisfies $x>0$, so the case is self-consistent.

Thus

$$
x^*=\frac12,
\qquad
y^*=\frac12,
\qquad
\nu^*=0.
$$

So the inequality is **inactive** at the optimum.

### Problem 4.4

Solve

$$
\min_{x,y} x^2+y^2
\quad \text{s.t. } x+y=1,\; x \le 0
$$

using KKT. Identify the active set.

### Solution

The Lagrangian is

$$
L(x,y,u,\nu)=x^2+y^2+u(x+y-1)+\nu x,
\qquad \nu \ge 0.
$$

KKT conditions:

Primal feasibility:

$$
x+y=1,
\qquad
x \le 0.
$$

Dual feasibility:

$$
\nu \ge 0.
$$

Complementary slackness:

$$
\nu x=0.
$$

Stationarity:

$$
2x+u+\nu=0,
\qquad
2y+u=0.
$$

If the inequality were inactive, then

$$
x<0
\implies
\nu=0.
$$

Stationarity would imply

$$
2x+u=0,
\qquad
2y+u=0,
$$

so again

$$
x=y.
$$

But the equality constraint would then give

$$
x=y=\frac12,
$$

which violates $x \le 0$.

So the inequality must be active:

$$
x=0.
$$

Then primal feasibility gives

$$
y=1.
$$

From stationarity in $y$,

$$
2y+u=0
\implies
u=-2.
$$

From stationarity in $x$,

$$
2x+u+\nu=0
\implies
0-2+\nu=0
\implies
\nu=2.
$$

Thus

$$
x^*=0,
\qquad
y^*=1,
\qquad
\nu^*=2.
$$

So the active set consists of the equality constraint and the inequality

$$
x \le 0.
$$

### Problem 4.5

Consider the nonconvex problem

$$
\min_x -x^2
\quad \text{s.t. } x^2-1 \le 0.
$$

Find all KKT points and show that not every KKT point is globally optimal.

### Solution

The Lagrangian is

$$
L(x,\lambda)=-x^2+\lambda(x^2-1),
\qquad
\lambda \ge 0.
$$

KKT conditions:

Primal feasibility:

$$
x^2 \le 1.
$$

Dual feasibility:

$$
\lambda \ge 0.
$$

Complementary slackness:

$$
\lambda(x^2-1)=0.
$$

Stationarity:

$$
\frac{dL}{dx}=-2x+2\lambda x=2x(\lambda-1)=0.
$$

So either

$$
x=0
$$

or

$$
\lambda=1.
$$

Case 1:

$$
x=0.
$$

Then complementary slackness gives

$$
\lambda(-1)=0,
$$

so

$$
\lambda=0.
$$

Thus

$$
(x,\lambda)=(0,0)
$$

is a KKT point.

Case 2:

$$
\lambda=1.
$$

Then complementary slackness forces

$$
x^2-1=0
\implies
x=\pm 1.
$$

So

$$
(x,\lambda)=(1,1),
\qquad
(x,\lambda)=(-1,1)
$$

are also KKT points.

Now evaluate the objective:

$$
-x^2=
\begin{cases}
0, & x=0, \\
-1, & x=\pm 1.
\end{cases}
$$

Since we are minimizing, the global optima are

$$
x=\pm 1.
$$

The point

$$
x=0
$$

is a KKT point but not globally optimal.

That is the key lesson for nonconvex problems: KKT gives candidate points, not guaranteed global optima.
