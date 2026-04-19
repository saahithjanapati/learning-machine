# Exam 2 Mock Exam - Part III

## Short Answer / Proof

Try to keep each answer to roughly `6-10 lines`, like the old exam.

Total: `20 points`

### 3.1

[5 pts] Let

$$
F(x)=g(x)+h(x),
$$

where $g$ is differentiable and $h$ is proper closed convex.

Show that if

$$
x=\operatorname{prox}_{\eta,h}(x-\eta \nabla g(x)),
$$

then

$$
0 \in \nabla g(x)+\partial h(x).
$$

### 3.2

[5 pts] Prove weak duality for the standard SDP primal-dual pair by showing that for primal-feasible $X$ and dual-feasible $(y,S)$,

$$
C \bullet X - b^T y = S \bullet X \ge 0.
$$

### 3.3

[5 pts] Assume $\nabla^2 f(x_k)\succ 0$ and $\nabla f(x_k)\neq 0$. Show that the Newton step

$$
\Delta x_k = -[\nabla^2 f(x_k)]^{-1}\nabla f(x_k)
$$

is a descent direction.

### 3.4

[5 pts] Consider the convex problem

$$
\min_{x,y} x^2+y^2
\qquad
\text{s.t. }
1-x-y \le 0.
$$

Use the KKT conditions to find the optimizer and the corresponding multiplier.
