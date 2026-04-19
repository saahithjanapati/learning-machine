# Exam 2 Mock Exam - Part I

## True / False

No need to justify.

Total: `24 points`

### 1.1

[2 pts] Suppose $f$ is $\alpha$-strongly convex and the stochastic gradients satisfy a bounded-second-moment assumption. If we run SGD with a fixed step size $\eta > 0$, then

$$
\mathbb{E}\|x^k-x^*\|^2 \to 0
$$

must hold as $k \to \infty$.

- True
- False

### 1.2

[2 pts] If $h = \mathbb{I}_C$ in proximal gradient, then the update becomes gradient descent followed by Euclidean projection onto $C$.

- True
- False

### 1.3

[2 pts] The dual function

$$
q(\lambda,\nu)=\inf_x L(x,\lambda,\nu)
$$

is always concave in the dual variables.

- True
- False

### 1.4

[2 pts] For a convex differentiable constrained optimization problem, if $(x^*,\lambda^*,\nu^*)$ satisfies primal feasibility, dual feasibility, complementary slackness, and stationarity, then $x^*$ is globally optimal.

- True
- False

### 1.5

[2 pts] If $X \succeq 0$ and $S \succeq 0$, then

$$
X \bullet S \ge 0.
$$

- True
- False

### 1.6

[2 pts] If $\nabla^2 f(x_k) \succ 0$ and $\nabla f(x_k)\neq 0$, then the Newton step is a descent direction.

- True
- False

### 1.7

[2 pts] Whitening is correctly expressed by

$$
E[zz^T]=I,
$$

and this by itself implies that the coordinates of $z$ are independent.

- True
- False

### 1.8

[2 pts] Polyak momentum and Nesterov accelerated gradient evaluate the gradient at the same point.

- True
- False

### 1.9

[2 pts] In AdaGrad, coordinates with larger accumulated squared gradients receive smaller effective step sizes.

- True
- False

### 1.10

[2 pts] Bias correction in Adam mainly matters in early iterations because the moving-average estimates are initialized at zero.

- True
- False

### 1.11

[2 pts] In AdamW, adding $L_2$ regularization to the objective is exactly the same as decoupled weight decay inside Adam.

- True
- False

### 1.12

[2 pts] Shampoo uses separate row and column accumulators for a matrix-valued parameter instead of only a diagonal coordinatewise scaling.

- True
- False
