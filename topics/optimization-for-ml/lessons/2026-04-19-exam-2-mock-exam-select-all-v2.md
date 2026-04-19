# Exam 2 Mock Exam - Part II - Version B

## Select All That Apply

No need to justify. Multiple answers may be correct.

Total: `33 points`

This version is meant to be in the same general difficulty band as the first select-all set, but with different statement traps and a bit more pressure on:

- duality precision
- KKT completeness
- ICA whitening facts
- AdamW / decoupled weight decay
- rate-versus-quantity precision

### 2.1

[3 pts] For SGD and subgradient-style methods, which of the following statements are true?

a. In fixed-step strongly convex SGD, the expected squared-distance error can converge to a nonzero stochastic error floor. 
	Yes, it can generally converge to a stochastic floor, which is due to the variance of sampling minibatches...

b. In the standard convex nonsmooth SGD theorem, the clean bound is usually on an averaged objective quantity rather than necessarily the last iterate.  
	yes, this is true... averaged function suboptimality uses the average function value of x_k
	
	
c. In the conditional-expectation step, $x^t-x^*$ can be treated as fixed when conditioning on $x^t$.
		yes this is true. you can move it out of the expectation, because once you know x^t, this vector is fixed...

d. The strong-convexity parameter is usually denoted by $\beta$, while the smoothness parameter is $\alpha$. 
		false, it's the other way around


e. Mini-batch averaging preserves unbiasedness if the sampled component gradients are individually unbiased for the full gradient.
		True, I think... if your samples are individually unbiased, then I think your average of those unbiased gradients will also be unbiased (because the averaging does not introduce new bias)

---
### 2.2

[3 pts] Which of the following proximal-gradient statements are true?

a. If $h=\mathbb{I}_C$, then the proximal step becomes Euclidean projection onto $C$.  
	True, because the cost of not being in C becomes infinity, so you try to find the closest point.

b. The gradient mapping is

$$
G_\eta(x)=\frac{1}{\eta}(x-x^+),
\qquad
x^+=\operatorname{prox}_{\eta,h}(x-\eta \nabla g(x)).
$$
yes this is correct...


c. If $h=0$, then proximal gradient reduces to ordinary gradient descent and $G_\eta(x)=\nabla g(x)$.  
yes this is correct
d. In the standard convex-composite setup, $g$ is smooth and convex while $h$ is convex and possibly nonsmooth.  
yes
e. If $G_\eta(x)=0$, then $x$ cannot be a stationary point unless $h$ is differentiable.
false. x can be a stationary point if we are not moving after following the generalized gradient

---
### 2.3

[3 pts] Which of the following duality statements are true?

a. For a primal minimization problem, the dual function is defined by

$$
q(\lambda,\nu)=\inf_x L(x,\lambda,\nu).
$$
- yes, this is correct

b. For each fixed primal point $x$, the Lagrangian $L(x,\lambda,\nu)$ is affine in the dual variables.  
	- yes this is correct
	
c. The dual function is the pointwise supremum of affine functions of $(\lambda,\nu)$.  
- it is the pointwise infimum, because for a given value of lambda and v, we find the value of x that minimizes the value of the lagrangian.

d. The dual function is concave because it is the pointwise infimum of affine functions of $(\lambda,\nu)$.
	- true it is it the pointwise infimum, and because of that, it is concave...


e. In LP duality, a primal equality constraint typically corresponds to a dual variable that is free in sign.
- true

---
### 2.4

[3 pts] Which of the following KKT statements are true?

a. Stationarity in KKT means the gradient of the Lagrangian with respect to the primal variable vanishes, or the corresponding subgradient condition holds in nonsmooth settings.  
- I think the first part is correct, because by definition, stationarity is when gradient = 0. but im not sure about the last part.

b. Complementary slackness for inequality constraints is

$$
\lambda_i g_i(x^*)=0.
$$
- True


c. In constrained convex optimization, stationarity alone is enough for optimality.  
	- False. Stationarity is just one of the KKT conditions needed to demonstrate optimality

d. If an inequality constraint is inactive at the optimum, then complementary slackness forces its multiplier to be zero.  
- True

e. In convex problems with an appropriate constraint qualification such as Slater's condition, KKT conditions are sufficient for global optimality.
- True

---
### 2.5

[3 pts] Which of the following SDP / SOS statements are true?

a. The standard SDP primal has linear equality constraints together with a PSD matrix variable.  
- true
b. If $X \succeq 0$ and $S \succeq 0$, then
$$
X \bullet S \ge 0.
$$
- true
c. If $X \succeq 0$, then every diagonal entry of $X$ is nonnegative.  
	true
d. If $X \succeq 0$ and $X_{ii}=0$, then the entire $i$th row and column of $X$ must be zero.  
	true
e. If $p(x)=[x]_d^T Q [x]_d$ with $Q \succeq 0$, then $p$ is a sum of squares.
	true, (this was shown in )

---
### 2.6

[3 pts] Which of the following Newton-method statements are true?

a. The Newton step solves the linear system

$$
\nabla^2 f(x_k)\Delta x_k = -\nabla f(x_k).
$$
true (this is basically the same as the first order one used for minimization, but we take another gradient because we want to find the root of the gradient function)

b. The Newton step can also be derived by minimizing the local quadratic model of $f$.
true

c. If $\nabla^2 f(x_k)\succ 0$ and $\nabla f(x_k)\neq 0$, then the Newton step is a descent direction.
true (since inverse of hessian will also be psd)
d. Local quadratic convergence means an estimate of the form

$$
\|x_{k+1}-x^*\| \le C\|x_k-x^*\|^2
$$

near the solution.  
this is true, this is the definition of quadratic convergence

e. Positive-definite Hessian at one iterate guarantees global convergence from any starting point.
False... newtons' method depends on starting point and can have bad behavior if we're not close enough

### 2.7

[3 pts] Which of the following ICA / FastICA statements are true?

a. Whitening means

$$
E[zz^T]=I.
$$
False. It's actually z^t z (the current version just goes to a scalar...)

b. Whitening alone implies the coordinates of $z$ are independent.  
False, whitening just decorrelated them, it doesn't make them independet

c. For whitened data,

$$
E[(w^T z)^2]=w^T E[zz^T] w=\|w\|^2.
$$
True, this is because 

(wTz) (wTz) = wTz zTw = wT (z zT) w = wT w = ||w||^2


d. If $\|w\|=1$ and the data are whitened, then $E[(w^T z)^2]=1$.  


e. At a stationary point of the kurtosis objective, the vector

$$
E[(w^T z)^3 z]
$$

must align with $w$. 

yes, because the stationary point must satisfy E\[(wTz)^3 z\] - 2 \lambda w = 0

### 2.8

[3 pts] Which of the following momentum / acceleration statements are true?

a. Polyak momentum adds a term proportional to the previous displacement $x_t-x_{t-1}$.  
	true
b. NAG differs from Polyak momentum mainly in that it evaluates the gradient at a look-ahead point.  
	- True.
c. In the standard smooth-convex setting, NAG has an $O(1/k^2)$ function-gap rate. 
	- true	
	
d. In the HW4 quadratic analysis, momentum can be studied through the spectral radius of a small linear update matrix.  
	idk...
e. Polyak momentum and NAG are exactly the same method written in different notation.
	no


### 2.9

[3 pts] Which of the following adaptive-method statements are true?

a. AdaGrad uses a cumulative sum of squared gradients in its denominator.  
	True
b. RMSProp replaces AdaGrad's cumulative sum by an exponential moving average.  
	True
c. AdaDelta keeps a moving average of update magnitudes in addition to gradient information.
	True (i think), not super familiar with AdaDelta
d. Bias correction in Adam is mainly relevant because the moment estimates start at zero.  
	True
e. The existence of Adam failure examples means bias correction itself is mathematically invalid.
	False (it's not invalid, it's pretty helpful, it just has bad cases sometimes)

### 2.10

[3 pts] Which of the following advanced-optimizer statements are true?

a. In AdamW, weight decay is applied separately from the adaptive gradient normalization.  
true
b. In ordinary SGD, adding $L_2$ regularization to the objective gives the same algebraic update as multiplicative weight decay.  
true
c. Shampoo uses separate left and right accumulators for matrix-valued parameters.  
true
d. SOAP can be understood as trying to combine Shampoo-style structure with more Adam-like adaptivity.  
true
e. Newton can be viewed as a preconditioned method with

$$
H_t=[\nabla^2 f_t(w_t)]^{-1}.
$$
true

### 2.11

[3 pts] Which of the following rate / quantity statements are true?

a. Smooth convex gradient descent controls the function-value gap at rate $O(1/k)$.  
	true

b. Smooth convex NAG controls the function-value gap at rate $O(1/k^2)$.  
- True

c. Convex proximal gradient under the standard smooth + convex assumptions has an $O(1/k)$ objective-gap rate.  
- True

d. Fixed-step strongly convex SGD converges geometrically all the way to zero error with no stochastic error floor.  
- false, sgd will have a floor set by the variance of the sampling...

e. For convex nonsmooth subgradient / SGD-style methods, it is important to distinguish the rate itself from the quantity being controlled.
- true
