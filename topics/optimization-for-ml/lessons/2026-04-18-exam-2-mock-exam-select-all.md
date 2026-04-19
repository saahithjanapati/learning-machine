# Exam 2 Mock Exam - Part II

## Select All That Apply

No need to justify. Multiple answers may be correct.

Total: `33 points`

### 2.1

[3 pts] For convex nonsmooth SGD with unbiased stochastic subgradients and bounded second moment, which statements are true?

a. The standard theorem usually controls an averaged quantity, not necessarily the last iterate.  
b. Choosing $\eta \propto 1/\sqrt{k}$ gives an $O(1/\sqrt{k})$ bound.  
c. In the conditional-expectation step, $x^t-x^*$ is fixed given $x^t$.  
d. The constant $G$ is typically a deterministic bound on stochastic-gradient size / second moment, not itself a random noise term.  
e. None of the above.

### 2.2

[3 pts] Which of the following statements about proximal gradient are true?

a. If $h=\mathbb{I}_C$, then

$$
\operatorname{prox}_{\eta,h}(v)=\Pi_C(v).
$$

b. If $h=0$, then the gradient mapping satisfies

$$
G_\eta(x)=\nabla g(x).
$$

c. The condition $G_\eta(x)=0$ is equivalent to

$$
x=\operatorname{prox}_{\eta,h}(x-\eta \nabla g(x)).
$$

d. In the standard convex-composite setup, $g$ is smooth and convex while $h$ is convex and possibly nonsmooth.  
e. The gradient mapping is only defined when $h$ is differentiable.

### 2.3

[3 pts] Which of the following statements about duality are true?

a. For a minimization problem, any dual-feasible point gives a lower bound on the primal optimum.  
b. The dual function is the pointwise supremum of affine functions of the dual variables.  
c. In LP duality, a primal equality constraint typically corresponds to a dual variable that is free in sign.  
d. Strong duality automatically holds for every nonconvex problem that has KKT points.  
e. The dual function is concave even when the primal problem itself is not convex.

### 2.4

[3 pts] Which of the following KKT statements are true?

a. Complementary slackness means

$$
\lambda_i g_i(x^*)=0
$$

for each inequality constraint.  
b. If an inequality constraint is inactive at the optimum, meaning $g_i(x^*)<0$, then necessarily $\lambda_i=0$.  
c. Stationarity alone is enough to conclude constrained convex optimality.  
d. In nonconvex problems, KKT points need not be global optima.  
e. Dual feasibility for inequality multipliers means $\lambda_i \ge 0$.

### 2.5

[3 pts] Which of the following SDP statements are true?

a. The standard SDP primal uses linear equality constraints and a PSD matrix variable:

$$
A_i \bullet X = b_i,
\qquad
X \succeq 0.
$$

b. The standard SDP dual includes a slack matrix

$$
S=C-\sum_i y_i A_i,
\qquad
S \succeq 0.
$$

c. For primal-feasible $X$ and dual-feasible $(y,S)$, the gap identity is

$$
C \bullet X - b^T y = S \bullet X.
$$

d. If $X \succeq 0$ and $S \succeq 0$, then the matrix product $XS$ must itself be PSD.  
e. The Schur complement is a standard tool for certifying PSD of block matrices.

### 2.6

[3 pts] Which of the following Newton-method statements are true?

a. The Newton step can be derived by linearizing the stationarity equation

$$
\nabla f(x)=0.
$$

b. The same step can also be derived by minimizing a local quadratic model of $f$.  
c. Positive-definite Hessian at the current point guarantees global convergence from any initialization.  
d. Damped Newton keeps the Newton direction but scales the step length.  
e. Local quadratic convergence means the error behaves like

$$
\|x_{k+1}-x^*\| \le C\|x_k-x^*\|.
$$

### 2.7

[3 pts] Which of the following ICA / FastICA statements are true?

a. Whitening is expressed by

$$
E[zz^T]=I.
$$

b. For whitened data,

$$
E[(w^T z)^2]=\|w\|^2.
$$

c. The normalization step in FastICA is enforcing the unit-norm constraint on $w$.  
d. PCA and ICA become the same method after whitening.  
e. At a stationary point of the kurtosis objective, the vector

$$
E[(w^T z)^3 z]
$$

must align with $w$.

### 2.8

[3 pts] Which of the following momentum / acceleration statements are true?

a. Polyak momentum introduces a velocity-like dependence on previous updates.  
b. NAG differs from Polyak momentum in where the gradient is evaluated.  
c. One intuition for acceleration is reducing zig-zagging while keeping useful motion across iterations.  
d. In the standard smooth-convex setting, NAG achieves an $O(1/k^2)$ function-gap rate.  
e. None of the above.

### 2.9

[3 pts] Which of the following adaptive-method statements are true?

a. AdaGrad uses a cumulative sum of squared gradients.  
b. RMSProp replaces that cumulative sum by an exponential moving average.  
c. AdaDelta introduces a running average of update magnitudes as well.  
d. Adam combines first-moment and second-moment exponential moving averages.  
e. The existence of Adam failure examples means bias correction itself is mathematically invalid.

### 2.10

[3 pts] Which of the following advanced-optimizer statements are true?

a. AdamW decouples weight decay from adaptive gradient scaling.  
b. Shampoo uses left and right matrix accumulators for matrix-valued parameters.  
c. SOAP can be viewed as Shampoo-style structure plus more Adam-like adaptivity in the preconditioner eigenbasis.  
d. AdaNGD is motivated by normalized / adaptive online-to-offline ideas.  
e. Shampoo is just a diagonal method written in matrix notation.

### 2.11

[3 pts] Which of the following rate / quantity statements are true?

a. Smooth convex gradient descent achieves an $O(1/k)$ function-gap rate.
b. Smooth convex NAG achieves an $O(1/k^2)$ function-gap rate.
c. Convex nonsmooth subgradient / SGD-style methods give an $O(1/\sqrt{k})$ objective-gap style rate.
d. Fixed-step strongly convex SGD converges geometrically all the way to zero error with no stochastic error floor.
e. Convex proximal gradient achieves an $O(1/k)$ objective-gap rate under the standard smooth + convex assumptions.