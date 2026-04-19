# Exam 2 Key Properties, Identities, and Facts To Remember

Use this as the highest-signal recall sheet across the exam topics. It is not a replacement for the section notes. It is the compact place to remember:

- core assumptions
- key identities
- exact quantities that theorems control
- proof facts that get used repeatedly
- common traps

## Table of Contents

- [[#0. How To Use This Sheet]]
- [[#1. Convex Optimization Basics]]
- [[#2. Stochastic Gradient Descent]]
- [[#3. Proximal Gradient and Gradient Mapping]]
- [[#4. Duality]]
- [[#5. KKT Conditions]]
- [[#6. Semidefinite Programming]]
- [[#7. Newton Method]]
- [[#8. ICA and FastICA]]
- [[#9. Momentum and Nesterov Acceleration]]
- [[#10. Adaptive Methods]]
- [[#11. Advanced Neural-Net Optimization]]
- [[#12. Global Proof Toolbox]]

## 0. How To Use This Sheet

- If you are doing flash review, focus on the displayed equations and the bolded “remember” lines.
- If you are doing proof review, jump to [[#12. Global Proof Toolbox]] after reviewing the topic-specific section.
- If you blank on a topic, use the corresponding full note from [[2026-04-14-exam-2-comprehensive-notes]].

## 1. Convex Optimization Basics

Reference note: [[2026-04-14-convex-optimization-basics-for-proofs]]

### 1.1 Convex sets and convex functions

- A set $C$ is convex if
$$
\theta x + (1-\theta)y \in C
\qquad
\forall x,y \in C,\; \theta \in [0,1].
$$

- A function $f$ is convex if
$$
f(\theta x+(1-\theta)y)
\le
\theta f(x)+(1-\theta)f(y).
$$

### 1.2 First-order and second-order tests

- Differentiable convexity:
$$
f(y)\ge f(x)+\nabla f(x)^T(y-x).
$$

- Twice-differentiable convexity:
$$
\nabla^2 f(x)\succeq 0.
$$

- **Remember:** the first-order inequality is the tangent-plane-underestimator fact. It is one of the most reused inequalities on the exam.

### 1.3 Smoothness and strong convexity

- $\beta$-smoothness:
$$
\|\nabla f(x)-\nabla f(y)\|\le \beta \|x-y\|.
$$

- Smoothness upper bound:
$$
f(y)\le f(x)+\nabla f(x)^T(y-x)+\frac{\beta}{2}\|y-x\|^2.
$$

- $\alpha$-strong convexity:
$$
f(y)\ge f(x)+\nabla f(x)^T(y-x)+\frac{\alpha}{2}\|y-x\|^2.
$$

- Hessian characterizations:
$$
\nabla^2 f(x)\preceq \beta I
\qquad\text{and}\qquad
\nabla^2 f(x)\succeq \alpha I.
$$

- Condition number:
$$
\kappa=\frac{\beta}{\alpha}.
$$

### 1.4 Subgradients

- Subgradient inequality:
$$
f(y)\ge f(x)+g^T(y-x)
\qquad \forall g\in \partial f(x).
$$

- **Remember:** for convex nonsmooth proofs, ordinary gradients get replaced by subgradients, but the logic is the same.

## 2. Stochastic Gradient Descent

Reference notes:

- [[2026-04-14-exam-2-section-01-sgd]]
- [[2026-04-14-exam-2-memory-01-sgd]]

### 2.1 Core update and meaning of symbols

$$
x^{t+1}=x^t-\eta_t g(x^t;\xi_t).
$$

- $\eta_t$ is the stepsize.
- $\xi_t$ is the fresh randomness.
- $g(x^t;\xi_t)$ is the stochastic gradient.

### 2.2 Unbiasedness

- Smooth case:
$$
\mathbb{E}[g(x;\xi)\mid x]=\nabla f(x).
$$

- Nonsmooth convex case:
$$
\mathbb{E}[g(x;\xi)\mid x]\in \partial f(x).
$$

- **Remember:** $g(x;\xi)$ is an estimate of the gradient, not an estimate of $f(x)$.

### 2.3 Canonical finite-sum identity

If
$$
f(x)=\frac1n\sum_{i=1}^n f_i(x)
$$
and $\xi\sim \mathrm{Unif}\{1,\dots,n\}$, then
$$
\mathbb{E}[\nabla f_\xi(x)]
=
\frac1n\sum_{i=1}^n \nabla f_i(x)
=
\nabla f(x).
$$

### 2.4 Distance expansion used in proofs

Starting from the SGD update:
$$
x^{t+1}-x^*=(x^t-x^*)-\eta_t g(x^t;\xi_t),
$$
so
$$
\|x^{t+1}-x^*\|^2
=
\|x^t-x^*\|^2
-2\eta_t g(x^t;\xi_t)^T(x^t-x^*)
+\eta_t^2\|g(x^t;\xi_t)\|^2.
$$

### 2.5 Conditional expectation move

$$
\mathbb{E}[g(x^t;\xi_t)^T(x^t-x^*)\mid x^t]
=
\mathbb{E}[g(x^t;\xi_t)\mid x^t]^T(x^t-x^*).
$$

- **Remember:** once you condition on $x^t$, the vector $x^t-x^*$ is fixed.

### 2.6 Main rates and controlled quantities

- Convex nonsmooth SGD:
$$
\mathbb{E}[f(\bar x_k)]-f(x^*)
\le
\frac{G\sqrt{R}}{\sqrt{k}}.
$$

- Strongly convex SGD, fixed step:
$$
\mathbb{E}\|x^k-x^*\|^2
\le
(1-\alpha\eta)^k\|x^0-x^*\|^2+\frac{\eta G^2}{\alpha}.
$$

- Strongly convex SGD, decaying step:
$$
\mathbb{E}[f(\bar x_k)]-f(x^*)
\le
\frac{G^2(1+\log k)}{2\alpha k}.
$$

- **Remember:** always say what quantity is converging, not just the rate.

### 2.7 Error-floor identity

$$
\mathbb{E}\|g(x,\xi)\|^2
=
\|\nabla f(x)\|^2+\operatorname{Var}(g(x,\xi)).
$$

- **Remember:** fixed-step SGD usually converges only to a neighborhood because stochastic-gradient variance does not vanish.

## 3. Proximal Gradient and Gradient Mapping

Reference notes:

- [[2026-04-14-exam-2-section-02-proximal-gradient]]
- [[2026-04-14-exam-2-memory-02-proximal-gradient]]

### 3.1 Composite setup

$$
f(x)=g(x)+h(x),
$$
where:

- $g$ is smooth
- $h$ is convex and possibly nonsmooth

### 3.2 Proximal operator

$$
\operatorname{prox}_{\eta,h}(v)
=
\arg\min_z \left\{
\frac{1}{2\eta}\|z-v\|^2+h(z)
\right\}.
$$

- **Remember:** prox is “stay near $v$ while paying $h$.”

### 3.3 Proximal-gradient update

$$
x_{t+1}
=
\operatorname{prox}_{\eta,h}(x_t-\eta \nabla g(x_t)).
$$

### 3.4 Gradient mapping

$$
G_\eta(x)
=
\frac{1}{\eta}
\left(
x-\operatorname{prox}_{\eta,h}(x-\eta \nabla g(x))
\right).
$$

Then
$$
x_{t+1}=x_t-\eta G_\eta(x_t).
$$

- If $h=0$, then
$$
G_\eta(x)=\nabla g(x).
$$

- **Remember:** $G_\eta(x)=0$ is the composite stationarity condition.

### 3.5 Prox optimality condition

If
$$
u=\operatorname{prox}_{\eta,h}(v),
$$
then
$$
0\in \frac{1}{\eta}(u-v)+\partial h(u)
\qquad\Longleftrightarrow\qquad
\frac{1}{\eta}(v-u)\in \partial h(u).
$$

This is one of the most important identities in the unit.

### 3.6 Projected gradient descent as a special case

Indicator of a set $C$:
$$
\mathbb{I}_C(x)=
\begin{cases}
0, & x\in C,\\
\infty, & x\notin C.
\end{cases}
$$

Then
$$
\operatorname{prox}_{\eta,\mathbb{I}_C}(v)=\Pi_C(v),
$$
so proximal gradient becomes projected gradient descent:
$$
x_{t+1}=\Pi_C(x_t-\eta \nabla g(x_t)).
$$

### 3.7 Descent facts and rates

- Pure proximal step:
$$
h(x^{t+1})\le h(x^t)-\eta \|G_\eta(x^t)\|^2.
$$

- One-step prox-GD descent:
$$
f(x-\eta G_\eta(x))
\le
f(x)-\frac{\eta}{2}\|G_\eta(x)\|^2
\qquad (\eta\le 1/\beta).
$$

- Convex proximal gradient:
$$
f(x^k)-f(x^*)
\le
\frac{\beta}{2k}\|x^0-x^*\|^2.
$$

- Strongly convex proximal gradient:
$$
\|x^k-x^*\|^2
\le
\left(1-\frac{\alpha}{\beta}\right)^k
\|x^0-x^*\|^2.
$$

- **Remember:** the convex rate is on function value; the strongly convex statement is often written as contraction in squared distance.

## 4. Duality

Reference notes:

- [[2026-04-14-exam-2-section-03-duality]]
- [[2026-04-14-exam-2-memory-03-duality]]

### 4.1 Lagrangian form

For
$$
\min_x c^Tx
\quad \text{s.t. } Ax=b,\; Gx\le h,
$$
the Lagrangian is
$$
L(x,u,\nu)
=
c^Tx+u^T(Ax-b)+\nu^T(Gx-h),
\qquad \nu\ge 0.
$$

### 4.2 Dual function

$$
q(u,\nu)=\inf_x L(x,u,\nu).
$$

- **Remember:** for a primal minimization problem, the dual function is built with an infimum because it is supposed to be a lower bound.

- **Pointwise infimum fact:** for each fixed $x$, $L(x,u,\nu)$ is affine in $(u,\nu)$. The dual function is the pointwise infimum over that family of affine functions, so it is concave.

### 4.3 Finiteness condition

Expand:
$$
L(x,u,\nu)
=
(c+A^Tu+G^T\nu)^T x-b^Tu-h^T\nu.
$$

The infimum over $x$ is finite iff
$$
c+A^Tu+G^T\nu=0.
$$

Then
$$
q(u,\nu)=-b^Tu-h^T\nu.
$$

Otherwise
$$
q(u,\nu)=-\infty.
$$

### 4.4 Weak duality

For primal-feasible $x$ and dual-feasible $(u,\nu)$,
$$
q(u,\nu)\le f(x).
$$

- **Remember:** dual objective gives a lower bound on the primal optimum.

## 5. KKT Conditions

Reference notes:

- [[2026-04-14-exam-2-section-04-kkt]]
- [[2026-04-14-exam-2-memory-04-kkt]]

### 5.1 KKT system

For
$$
\min_x f(x)
\quad \text{s.t. } h_i(x)\le 0,\; \ell_j(x)=0,
$$
the KKT conditions are:

- primal feasibility:
$$
h_i(x^*)\le 0,\qquad \ell_j(x^*)=0
$$

- dual feasibility:
$$
\nu_i^*\ge 0
$$

- complementary slackness:
$$
\nu_i^* h_i(x^*)=0
$$

- stationarity:
$$
\nabla f(x^*)
+\sum_i \nu_i^*\nabla h_i(x^*)
+\sum_j u_j^*\nabla \ell_j(x^*)=0.
$$

### 5.2 What stationarity means

- Unconstrained problem:
$$
\nabla f(x^*)=0.
$$

- Constrained problem:
stationarity means gradient of the Lagrangian with respect to the primal variable is zero.

### 5.3 Sufficiency vs necessity

This is one of the easiest places on the exam to say something almost right but still false.

The correct answer depends on:

- whether the problem is convex or nonconvex
- whether you are asking about sufficiency or necessity
- whether a constraint qualification such as Slater is available

#### 5.3.1 Sufficiency in the convex case

In the standard convex setting

- $f$ convex
- each inequality function $h_i$ convex
- each equality function $\ell_j$ affine

if a triple $(x^*,\nu^*,u^*)$ satisfies the KKT conditions, then $x^*$ is a global minimizer.

So in convex problems:

$$
\text{KKT} \;\Longrightarrow\; \text{global optimality}.
$$

- **Remember:** this is the `sufficiency` direction.
- **Important nuance:** for this direction, you do not invoke Slater first. If you already have a KKT point in a convex problem, that is enough to certify optimality.

#### 5.3.2 Necessity in the convex case

The reverse direction is more delicate.

If $x^*$ is a primal optimum, you do **not** automatically get KKT for free in every constrained problem. You usually need a regularity condition to guarantee that there exist multipliers making the KKT system hold.

In this course, the standard regularity condition is Slater:

$$
\text{convex problem} + \text{Slater}
\;\Longrightarrow\;
\text{strong duality}
\;\Longrightarrow\;
\text{KKT is necessary at the optimum.}
$$

So in the exam-safe convex statement, the full story is:

$$
\text{convex} + \text{Slater}
\;\Longrightarrow\;
\text{KKT is necessary and sufficient.}
$$

#### 5.3.3 Necessity in the nonconvex case

In nonconvex problems, KKT is usually only a first-order necessary condition for a local optimum, assuming an appropriate constraint qualification.

So the logic becomes:

$$
\text{local minimizer} + \text{regularity}
\;\Longrightarrow\;
\text{KKT}.
$$

But the reverse implication fails badly:

$$
\text{KKT} \centernot\Longrightarrow \text{global minimizer}
$$

and often not even

$$
\text{KKT} \centernot\Longrightarrow \text{local minimizer}.
$$

A KKT point in a nonconvex problem can be:

- a local minimum
- a local maximum
- a saddle point
- just a stationary candidate that still needs classification

That is why in nonconvex KKT problems, solving the equations is only the first step.

#### 5.3.4 Stationarity alone is weaker than full KKT

In constrained problems, stationarity by itself is not enough.

You still need:

- primal feasibility
- dual feasibility
- complementary slackness

So the chain to remember is:

$$
\text{stationarity}
\subsetneq
\text{full KKT system}.
$$

- **Exam-safe summary:**
  - convex + KKT $\Rightarrow$ global optimum
  - convex + Slater $\Rightarrow$ optimum implies KKT
  - nonconvex + KKT $\Rightarrow$ candidate point, not certificate

### 5.4 Important logic facts

- If an inequality constraint is inactive, its multiplier must be zero by complementary slackness.
- If an inequality constraint is active, its multiplier may be zero or positive.
- **Remember:** stationarity alone is not enough in constrained problems. You also need feasibility and the rest of KKT.

## 6. Semidefinite Programming

Reference notes:

- [[2026-04-14-exam-2-section-05-sdp]]
- [[2026-04-14-exam-2-memory-05-sdp]]

### 6.1 PSD notation and basic identities

- $X\succeq 0$ means symmetric positive semidefinite.
- Inner product:
$$
A\bullet B=\operatorname{Tr}(A^TB).
$$

### 6.2 Standard SDP primal-dual pair

- Primal:
$$
\min_X C\bullet X
\quad \text{s.t. } A_i\bullet X=b_i,\; X\succeq 0.
$$

- Dual:
$$
\max_y b^Ty
\quad \text{s.t. } C-\sum_i y_i A_i=S,\; S\succeq 0.
$$

### 6.3 Weak-duality gap identity

$$
C\bullet X-b^Ty=S\bullet X\ge 0.
$$

- **Remember:** this is the one SDP identity most worth memorizing.

### 6.4 Why PSD inner products are nonnegative

If $A,B\succeq 0$, then
$$
A\bullet B\ge 0.
$$

Useful proof idea:

- write
$$
\operatorname{Tr}(AB)=\operatorname{Tr}(A^{1/2}BA^{1/2})
$$
- note that
$$
A^{1/2}BA^{1/2}\succeq 0
$$
- a PSD matrix has nonnegative trace

### 6.5 $2\times 2$ PSD test

For
$$
\begin{pmatrix}
a & b\\
b & c
\end{pmatrix},
$$
PSD is equivalent to:
$$
a\ge 0,\qquad c\ge 0,\qquad ac-b^2\ge 0.
$$

### 6.6 SOS connection

A polynomial is sum of squares if it can be written as
$$
p(x)=\sum_j q_j(x)^2.
$$

Equivalent Gram-matrix form:
$$
p(x)=[x]_d^T Q [x]_d
\qquad \text{for some } Q\succeq 0.
$$

- **Remember:** coefficient matching gives linear constraints on $Q$, and $Q\succeq 0$ is the SDP constraint. That is why SOS can be turned into an SDP feasibility problem.

## 7. Newton Method

Reference notes:

- [[2026-04-14-exam-2-section-06-newton]]
- [[2026-04-14-exam-2-memory-06-newton]]

### 7.1 Root-finding Newton

$$
x_{k+1}=x_k-\frac{\phi(x_k)}{\phi'(x_k)}.
$$

### 7.2 Minimization Newton

Apply Newton to $\nabla f(x)=0$:
$$
x_{k+1}=x_k-[\nabla^2 f(x_k)]^{-1}\nabla f(x_k).
$$

Equivalent step form:
$$
\nabla^2 f(x_k)\Delta x_k=-\nabla f(x_k),
\qquad
x_{k+1}=x_k+\Delta x_k.
$$

### 7.3 Linearization identity

$$
\nabla f(x_k+\Delta x)
\approx
\nabla f(x_k)+\nabla^2 f(x_k)\Delta x.
$$

- **Remember:** Newton chooses $\Delta x$ so that this linearized gradient becomes zero.

### 7.4 Descent-direction fact

If $\nabla^2 f(x_k)\succ 0$, then the Newton direction
$$
d_k=-[\nabla^2 f(x_k)]^{-1}\nabla f(x_k)
$$
is a descent direction because
$$
\nabla f(x_k)^T d_k
=
-\nabla f(x_k)^T[\nabla^2 f(x_k)]^{-1}\nabla f(x_k)
<0.
$$

### 7.5 Main qualitative facts

- Newton is local.
- Near the optimum, it can converge quadratically.
- Far away, it can diverge.
- Damping/backtracking helps globalization:
$$
x_{k+1}=x_k-h_k[\nabla^2 f(x_k)]^{-1}\nabla f(x_k),
\qquad 0<h_k\le 1.
$$

## 8. ICA and FastICA

Reference notes:

- [[2026-04-14-exam-2-section-07-ica]]
- [[2026-04-14-exam-2-memory-07-ica]]

### 8.1 Whitening identity

After whitening,
$$
E[zz^T]=I.
$$

- **Remember:** this is not the same as $E[z^T z]=I$.

### 8.2 Projection second moment

$$
E[(w^T z)^2]
=
w^T E[zz^T] w
=
w^T I w
=
\|w\|^2.
$$

- So if $\|w\|=1$, then
$$
E[(w^T z)^2]=1.
$$

### 8.3 Kurtosis objective and constraint

A standard ICA objective is
$$
E[(w^T z)^4]-3
\quad \text{subject to } \|w\|=1.
$$

- **Remember:** $\|w\|=1$ and $\|w\|^2=1$ define the same feasible set, but $\|w\|^2$ is easier to differentiate.

### 8.4 Stationarity shape

The Lagrangian stationarity condition has the form
$$
E[z(w^T z)^3]=\lambda w.
$$

- **Remember:** this is what motivates the FastICA fixed-point form.

### 8.5 Conceptual distinction

- PCA removes second-order correlation structure.
- ICA goes after higher-order non-Gaussian structure after whitening.

## 9. Momentum and Nesterov Acceleration

Reference notes:

- [[2026-04-14-exam-2-section-08-momentum-nag]]
- [[2026-04-14-exam-2-memory-08-momentum-nag]]

### 9.1 Polyak / heavy-ball momentum

$$
x_{t+1}=x_t-\eta \nabla F(x_t)+\gamma(x_t-x_{t-1}).
$$

### 9.2 Nesterov acceleration

$$
y_t=x_t+\gamma(x_t-x_{t-1}),
\qquad
x_{t+1}=y_t-\eta \nabla F(y_t).
$$

### 9.3 Key distinction

- Polyak uses the gradient at the current point.
- NAG uses the gradient at the look-ahead point.

### 9.4 Rates to remember

- Smooth convex NAG:
$$
f(x_k)-f(x^*)
=
O\left(\frac{\beta\|x_0-x^*\|^2}{k^2}\right).
$$

- Smooth strongly convex NAG:
$$
f(x_k)-f(x^*)
=
O\left(\left(1-\sqrt{\alpha/\beta}\right)^k\right).
$$

- **Remember:** standard NAG statements are usually about function-value gap.

### 9.5 HW4 momentum viewpoint

- On quadratics, momentum can often be written as a linear dynamical system in a small state vector.
- The convergence question becomes a spectral-radius question for that update matrix.

## 10. Adaptive Methods

Reference notes:

- [[2026-04-14-exam-2-section-09-adaptive-methods]]
- [[2026-04-14-exam-2-memory-09-adaptive-methods]]

### 10.1 AdaGrad

- Accumulator:
$$
G_t=\sum_{s=1}^t g_s^2
$$
coordinatewise

- Update shape:
$$
x_{t+1}=x_t-\eta \frac{g_t}{\sqrt{G_t}+\epsilon}.
$$

- **Remember:** denominator grows monotonically, so effective steps shrink over time.

### 10.2 RMSProp

- Replace the cumulative sum by an exponential moving average of squared gradients.
- **Remember:** this avoids AdaGrad’s permanently shrinking denominator.

### 10.3 AdaDelta

- Tracks both squared gradients and squared updates.
- **Remember:** it tries to self-scale updates rather than rely only on a global stepsize.

### 10.4 Adam

$$
m_t=\beta_1 m_{t-1}+(1-\beta_1)g_t,
\qquad
v_t=\beta_2 v_{t-1}+(1-\beta_2)g_t^2.
$$

Bias-corrected moments:
$$
\hat m_t=\frac{m_t}{1-\beta_1^t},
\qquad
\hat v_t=\frac{v_t}{1-\beta_2^t}.
$$

Update:
$$
x_{t+1}=x_t-\eta \frac{\hat m_t}{\sqrt{\hat v_t}+\epsilon}.
$$

- **Remember:** Adam mixes momentum-like first moments with RMSProp-like second moments.

### 10.5 AdamW distinction

- In plain SGD, weight decay and $L_2$ regularization coincide.
- In Adam-like methods, they do not coincide.
- AdamW uses decoupled shrinkage:
$$
w_{t+1}
=
w_t-\eta \frac{\hat m_t}{\sqrt{\hat v_t}+\epsilon}-\eta \lambda w_t.
$$

- Equivalent form:
$$
w_{t+1}
=
(1-\eta\lambda)w_t-\eta \frac{\hat m_t}{\sqrt{\hat v_t}+\epsilon}.
$$

## 11. Advanced Neural-Net Optimization

Reference notes:

- [[2026-04-14-exam-2-section-10-advanced-optimizers]]
- [[2026-04-14-exam-2-memory-10-advanced-optimizers]]

### 11.1 Preconditioning viewpoint

General shape:
$$
w_{t+1}=w_t-\eta H_t \nabla f_t(w_t).
$$

- **Remember:** $H_t$ changes the geometry of the step. It rescales different directions differently.

### 11.2 Newton as the model case

If
$$
H_t=[\nabla^2 f(w_t)]^{-1},
$$
then this becomes Newton’s method.

### 11.3 Shampoo

For matrix parameters:
$$
W_{t+1}=W_t-\eta L_t^{-1/4}G_t R_t^{-1/4}.
$$

- **Remember:** Shampoo is structured preconditioning, not just coordinatewise scaling.

### 11.4 SOAP

- SOAP adds Adam-style adaptation in the eigenbasis induced by the Shampoo-style preconditioner.

### 11.5 AdaNGD

- **Remember:** AdaNGD is about normalized adaptive updates and the bridge between online-regret guarantees and offline optimization guarantees.

### 11.6 Muon / AdamW lecture theme

- The main exam-relevant point is usually conceptual:
  different optimizers change the geometry of the update by using different normalization and preconditioning schemes.

## 12. Global Proof Toolbox

These are the facts that show up repeatedly across many sections.

### 12.1 Norm expansion

$$
\|a-b\|^2=\|a\|^2-2a^Tb+\|b\|^2.
$$

Used in:

- SGD
- gradient/proximal-gradient descent proofs
- contraction proofs

### 12.2 Tower property

$$
\mathbb{E}[\mathbb{E}[Z\mid x^t]]=\mathbb{E}[Z].
$$

Used in:

- SGD proofs
- conditional expectation arguments

### 12.3 Convexity of averages

For
$$
\bar x_k=\frac1k\sum_{t=1}^k x^t,
$$
convexity gives
$$
f(\bar x_k)\le \frac1k\sum_{t=1}^k f(x^t).
$$

Used in:

- convex SGD
- averaging arguments

### 12.4 Geometric-series formula

If $|\rho|<1$, then
$$
1+\rho+\rho^2+\cdots+\rho^{k-1}
=
\frac{1-\rho^k}{1-\rho}.
$$

Used in:

- solving strongly convex SGD recursions
- linear-convergence recursions

### 12.5 Standard basis vector identity

$$
e_a^T X e_b = X_{ab}.
$$

Used in:

- SDP entry-picking arguments
- matrix quadratic-form manipulations

### 12.6 Trace cyclicity

$$
\operatorname{Tr}(ABC)=\operatorname{Tr}(BCA)=\operatorname{Tr}(CAB).
$$

Used in:

- SDP weak duality
- PSD inner-product proofs
- SOS / Gram-matrix manipulations

### 12.7 Scalar-to-matrix quadratic-form identity

$$
(w^T z)^2 = w^T (zz^T) w.
$$

Used in:

- ICA whitening identities
- covariance manipulations

### 12.8 Exam-level reminders

- Always state the quantity being controlled.
- Do not confuse stationarity with optimality in constrained or nonconvex settings.
- Keep sign conventions straight in duality and KKT.
- When the course uses a theorem statement, learn both the assumptions and the conclusion.
