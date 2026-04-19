# Exam 2 Mock Exam - Platonic Short-Answer Answers

Use with:

- [[2026-04-18-exam-2-mock-exam-short-answer]]

This note is meant to give the polished, exam-ready version of the short-answer solutions. The goal is not just to be correct, but to model the kind of compact proof I would actually want to write under time pressure.

## 3.1 Fixed Point of the Proximal Update

Let
$$
v=x-\eta \nabla g(x).
$$

The assumption
$$
x=\operatorname{prox}_{\eta,h}(x-\eta \nabla g(x))
$$
becomes
$$
x=\operatorname{prox}_{\eta,h}(v).
$$

By proximal optimality,
$$
0\in \frac{1}{\eta}(x-v)+\partial h(x).
$$

Substituting $v=x-\eta \nabla g(x)$ gives
$$
0\in \frac{1}{\eta}\bigl(x-(x-\eta \nabla g(x))\bigr)+\partial h(x)
=
\nabla g(x)+\partial h(x).
$$

Therefore
$$
0\in \nabla g(x)+\partial h(x).
$$

## 3.2 Weak Duality for SDP

Let $X$ be primal-feasible and $(y,S)$ dual-feasible. Then
$$
C \bullet X-b^T y
=
C \bullet X-\sum_i y_i b_i.
$$

Since $X$ is primal-feasible,
$$
b_i=A_i\bullet X,
$$
so
$$
C \bullet X-b^Ty
=
C \bullet X-\sum_i y_i(A_i\bullet X)
=
\left(C-\sum_i y_i A_i\right)\bullet X.
$$

By dual feasibility,
$$
S=C-\sum_i y_i A_i,
\qquad
S\succeq 0.
$$

Hence
$$
C \bullet X-b^Ty=S\bullet X.
$$

Since also $X\succeq 0$, the PSD inner-product fact gives
$$
S\bullet X\ge 0.
$$

Therefore
$$
C \bullet X-b^T y=S\bullet X\ge 0.
$$

## 3.3 Newton Step Is a Descent Direction

Take the inner product of the Newton step with the gradient:
$$
\nabla f(x_k)^T \Delta x_k
=
\nabla f(x_k)^T\Bigl(-[\nabla^2 f(x_k)]^{-1}\nabla f(x_k)\Bigr).
$$

So
$$
\nabla f(x_k)^T \Delta x_k
=
-\nabla f(x_k)^T[\nabla^2 f(x_k)]^{-1}\nabla f(x_k).
$$

Because $\nabla^2 f(x_k)\succ 0$, its inverse is also positive definite. Since $\nabla f(x_k)\neq 0$, we have
$$
\nabla f(x_k)^T[\nabla^2 f(x_k)]^{-1}\nabla f(x_k)>0.
$$

Therefore
$$
\nabla f(x_k)^T \Delta x_k<0.
$$

So $\Delta x_k$ is a descent direction.

## 3.4 KKT Solve-and-Verify

Write the constraint as
$$
g(x,y)=1-x-y\le 0.
$$

The Lagrangian is
$$
L(x,y,\lambda)=x^2+y^2+\lambda(1-x-y),
\qquad \lambda\ge 0.
$$

Stationarity gives
$$
2x-\lambda=0,
\qquad
2y-\lambda=0,
$$
so
$$
x=y=\lambda/2.
$$

Complementary slackness says
$$
\lambda(1-x-y)=0.
$$

If $\lambda=0$, then $x=y=0$, which is infeasible since $1-0-0=1>0$. Hence the constraint must be active:
$$
1-x-y=0.
$$

Substituting $x=y=\lambda/2$ gives
$$
1-\lambda=0,
$$
so
$$
\lambda^*=1.
$$

Therefore
$$
x^*=y^*=\frac12.
$$

Thus the KKT point is
$$
\left(\frac12,\frac12,1\right).
$$

Because the problem is convex and the KKT conditions are satisfied, this is the global optimum.

## What Makes These "Platonic"

- They are short enough to write in an exam setting.
- Every major theorem invocation is explicit.
- They avoid unnecessary algebra.
- They end with the exact target statement, not just an intermediate condition.
