# 3. LP Duality Worked Problems

## Table of Contents

- [[#Problem 3.1]]
- [[#Problem 3.2]]
- [[#Problem 3.3]]
- [[#Problem 3.4]]
- [[#Problem 3.5]]

### Problem 3.1

Derive the dual of

$$
\min_x x
\quad \text{s.t. } x \ge 2.
$$

### Solution

Rewrite the constraint as

$$
-x \le -2.
$$

The Lagrangian is

$$
L(x,\nu)=x+\nu(-x+2),
\qquad \nu \ge 0.
$$

Simplify:

$$
L(x,\nu)=(1-\nu)x+2\nu.
$$

The dual function is finite iff the coefficient of $x$ is zero:

$$
1-\nu=0 \iff \nu=1.
$$

Then

$$
g(\nu)=2\nu=2.
$$

Otherwise the infimum is $-\infty$.

So the dual is

$$
\max_{\nu \ge 0} 2\nu
\quad \text{s.t. } \nu=1.
$$

Its value is `2`, matching the primal optimum.

### Problem 3.2

Derive the dual of

$$
\min_x c^T x
\quad \text{s.t. } Ax=b,\; Gx\le h.
$$

### Solution

The Lagrangian is

$$
L(x,u,\nu)=c^T x + u^T(Ax-b)+\nu^T(Gx-h),
\qquad \nu \ge 0.
$$

Rearrange:

$$
L(x,u,\nu)
=
(c+A^T u+G^T \nu)^T x - b^T u - h^T \nu.
$$

Thus

$$
g(u,\nu)=\inf_x L(x,u,\nu)
$$

is finite iff

$$
c+A^T u+G^T \nu=0.
$$

Under that condition,

$$
g(u,\nu)=-b^T u-h^T \nu.
$$

Otherwise $g(u,\nu)=-\infty$.

Therefore the dual is

$$
\max_{u,\nu} -b^T u-h^T \nu
\quad \text{s.t. } A^T u+G^T \nu+c=0,\; \nu \ge 0.
$$

### Problem 3.3

Quiz 3 asked about this as a true/false question: explain why the dual function is always concave, even if the primal problem is not convex.

### Solution

Fix any primal problem and its Lagrangian

$$
L(x,u,\nu).
$$

For each fixed $x$, the Lagrangian is affine in the dual variables $(u,\nu)$.

The dual function is defined by

$$
g(u,\nu)=\inf_x L(x,u,\nu).
$$

So $g$ is the pointwise infimum of a family of affine functions of $(u,\nu)$.

A pointwise infimum of affine functions is always concave.

That is the whole reason the dual problem is a concave maximization problem regardless of whether the primal is convex.

So the correct conclusion is:

- the **dual function** is always concave
- but that does **not** by itself imply strong duality

### Problem 3.4

Derive the dual of

$$
\min_{x_1,x_2} x_1+2x_2
\quad \text{s.t. } x_1+x_2=1,\; x_1 \ge 0,\; x_2 \ge 0.
$$

### Solution

Rewrite the inequality constraints as

$$
-x_1 \le 0,
\qquad
-x_2 \le 0.
$$

Introduce one equality multiplier $u \in \mathbb{R}$ and inequality multipliers

$$
\nu_1,\nu_2 \ge 0.
$$

The Lagrangian is

$$
L(x_1,x_2,u,\nu_1,\nu_2)
=
x_1+2x_2+u(x_1+x_2-1)+\nu_1(-x_1)+\nu_2(-x_2).
$$

Group terms:

$$
L
=
(1+u-\nu_1)x_1+(2+u-\nu_2)x_2-u.
$$

The dual function is finite only if the coefficients of both primal variables vanish:

$$
1+u-\nu_1=0,
\qquad
2+u-\nu_2=0.
$$

So

$$
\nu_1=1+u,
\qquad
\nu_2=2+u.
$$

Because $\nu_1,\nu_2 \ge 0$, we need

$$
1+u \ge 0,
\qquad
2+u \ge 0.
$$

The tighter condition is

$$
u \ge -1.
$$

Under these constraints,

$$
g(u,\nu_1,\nu_2)=-u.
$$

So the dual is

$$
\max_u -u
\quad \text{s.t. } u \ge -1.
$$

The maximum occurs at

$$
u^*=-1,
$$

with value

$$
-u^*=1.
$$

This matches the primal optimum, achieved at

$$
x_1=1,\qquad x_2=0.
$$

### Problem 3.5

Use the LP from Problem 3.4 to verify weak duality directly.

Take the primal-feasible point

$$
x=(1,0)
$$

and the dual-feasible point

$$
u=-\frac12,\qquad \nu_1=\frac12,\qquad \nu_2=\frac32.
$$

Check that

$$
g(u,\nu) \le c^T x.
$$

### Solution

First compute the primal objective:

$$
c^T x = x_1+2x_2 = 1.
$$

Now check dual feasibility. The coefficient conditions from Problem 3.4 are

$$
\nu_1=1+u,
\qquad
\nu_2=2+u.
$$

With

$$
u=-\frac12,
$$

we get

$$
\nu_1=\frac12,
\qquad
\nu_2=\frac32,
$$

which are both nonnegative, so the point is dual-feasible.

The dual value is

$$
g(u,\nu)=-u=\frac12.
$$

Therefore

$$
g(u,\nu)=\frac12 \le 1=c^T x.
$$

This is weak duality in action: every dual-feasible point gives a lower bound on every primal-feasible objective value for a minimization problem.
