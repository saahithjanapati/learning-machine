# Exam 2 Mock Exam - Answer Key

Use with:

- [[2026-04-18-exam-2-mock-exam-true-false]]
- [[2026-04-18-exam-2-mock-exam-select-all]]
- [[2026-04-18-exam-2-mock-exam-short-answer]]

## Part I: True / False

| Question | Answer |
|---|---|
| 1.1 | False |
| 1.2 | True |
| 1.3 | True |
| 1.4 | True |
| 1.5 | True |
| 1.6 | True |
| 1.7 | False |
| 1.8 | False |
| 1.9 | True |
| 1.10 | True |
| 1.11 | False |
| 1.12 | True |

## Part II: Select All That Apply

| Question | Correct Choices |
|---|---|
| 2.1 | a, b, c, d |
| 2.2 | a, b, c, d |
| 2.3 | a, c, e |
| 2.4 | a, b, d, e |
| 2.5 | a, b, c, e |
| 2.6 | a, b, d |
| 2.7 | a, b, c, e |
| 2.8 | a, b, c, d |
| 2.9 | a, b, c, d |
| 2.10 | a, b, c, d |
| 2.11 | a, b, c, e |

## Part III: Short Answer / Proof

### 3.1

Let

$$
v=x-\eta \nabla g(x).
$$

The fixed-point assumption says

$$
x=\operatorname{prox}_{\eta,h}(v).
$$

By proximal optimality,

$$
0 \in \frac{1}{\eta}(x-v)+\partial h(x).
$$

Now substitute

$$
v=x-\eta \nabla g(x):
$$

$$
0 \in \frac{1}{\eta}\bigl(x-(x-\eta \nabla g(x))\bigr)+\partial h(x)
=
\nabla g(x)+\partial h(x).
$$

Therefore

$$
0 \in \nabla g(x)+\partial h(x).
$$

### 3.2

Let $X$ be primal-feasible and $(y,S)$ dual-feasible. Then

$$
C \bullet X - b^T y
=
C \bullet X - \sum_i y_i b_i.
$$

Since $X$ is primal-feasible,

$$
b_i = A_i \bullet X,
$$

so

$$
C \bullet X - b^T y
=
C \bullet X - \sum_i y_i (A_i \bullet X)
=
\left(C-\sum_i y_i A_i\right)\bullet X.
$$

By dual feasibility,

$$
S=C-\sum_i y_i A_i,
\qquad
S \succeq 0.
$$

Hence

$$
C \bullet X - b^T y = S \bullet X.
$$

Since also $X \succeq 0$, the PSD inner-product fact gives

$$
S \bullet X \ge 0.
$$

Therefore

$$
C \bullet X - b^T y = S \bullet X \ge 0.
$$

### 3.3

Take the inner product of the Newton step with the gradient:

$$
\nabla f(x_k)^T \Delta x_k
=
\nabla f(x_k)^T\Bigl(-[\nabla^2 f(x_k)]^{-1}\nabla f(x_k)\Bigr)
$$

so

$$
\nabla f(x_k)^T \Delta x_k
=
-\nabla f(x_k)^T [\nabla^2 f(x_k)]^{-1}\nabla f(x_k).
$$

Because $\nabla^2 f(x_k)\succ 0$, its inverse is also positive definite. Therefore for any nonzero vector $v$,

$$
v^T [\nabla^2 f(x_k)]^{-1} v > 0.
$$

Now choose

$$
v=\nabla f(x_k)\neq 0.
$$

Then

$$
\nabla f(x_k)^T [\nabla^2 f(x_k)]^{-1}\nabla f(x_k)>0,
$$

which implies

$$
\nabla f(x_k)^T \Delta x_k < 0.
$$

So $\Delta x_k$ is a descent direction.

### 3.4

Write the constraint as

$$
g(x,y)=1-x-y \le 0.
$$

The Lagrangian is

$$
L(x,y,\lambda)=x^2+y^2+\lambda(1-x-y),
\qquad
\lambda \ge 0.
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

Primal feasibility says

$$
1-x-y \le 0.
$$

Complementary slackness gives

$$
\lambda(1-x-y)=0.
$$

The origin is infeasible, so the constraint must be active at optimum:

$$
x+y=1.
$$

Using $x=y=\lambda/2$,

$$
\lambda/2+\lambda/2=1
\implies
\lambda=1.
$$

Hence

$$
x^*=y^*=\frac12,
\qquad
\lambda^*=1.
$$

Because the problem is convex and the KKT conditions hold, this is the global optimum.
