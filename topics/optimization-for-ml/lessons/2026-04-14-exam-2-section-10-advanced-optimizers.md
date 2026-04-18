# 10. Advanced Neural-Net Optimization

## Table of Contents

- [[#10.0 Where This Topic Came From in the Course]]
- [[#10.1 Unifying View: Preconditioning]]
- [[#10.2 Newton as the Prototype]]
- [[#10.3 Shampoo]]
    - [[#10.3.1 Why the exponent is -1/4]]
- [[#10.4 Why Shampoo Looks Like Structured AdaGrad]]
- [[#10.5 SOAP]]
- [[#10.6 AdaNGD]]
- [[#10.7 AdamW]]
- [[#10.8 Muon and the Late-Lecture High-Level Methods]]
- [[#10.9 What You Are Most Likely to Be Asked]]
- [[#10.10 Common Traps]]

## 10.0 Where This Topic Came From in the Course

This section comes from the `April 14` lecture on advanced gradient-based optimization.

By this point in the course, you had already seen:

- gradient descent
- momentum and NAG
- diagonal adaptive methods such as AdaGrad, RMSProp, AdaDelta, Adam

So the April 14 lecture pushed one level further:

- richer preconditioners
- structured adaptation
- decoupled regularization
- optimizer design for large neural networks

This material is newer and less proof-heavy than the earlier course topics, so the likely exam emphasis is:

- definitions
- update structure
- comparison questions
- high-level understanding

## 10.1 Unifying View: Preconditioning

The lecture organizes many modern optimizers through the update

$$
w_{t+1} = w_t - \eta_t H_t(w_t)\nabla f_t(w_t),
$$

where `$H_t$` is a positive-definite transformation or preconditioner.

The interpretation is:

- ordinary gradient descent uses `$H_t = I$`
- second-order and adaptive methods try to choose a smarter `$H_t$`

So the big unifying idea is:

`do not just follow the raw gradient; reshape it before stepping.`

That reshaping can come from:

- curvature information
- accumulated gradient geometry
- matrix/tensor structure

## 10.2 Newton as the Prototype

Newton is the classical example of preconditioning.

The update

$$
w_{t+1}
=
w_t - \eta_t [\nabla^2 f_t(w_t)]^{-1}\nabla f_t(w_t)
$$

uses the inverse Hessian as the preconditioner.

So when the lecture introduces generalized updates of the form

$$
w_{t+1}=w_t-\eta_t H_t(w_t)\nabla f_t(w_t),
$$

Newton is the template:

- a smart matrix `$H_t$`
- modifies both scale and direction of the gradient

Modern methods such as Shampoo can be viewed as more practical structured approximations to that dream.

## 10.3 Shampoo

For a matrix-valued parameter `$W_t$` with gradient `$G_t$`, Shampoo builds left and right accumulators:

$$
L_t = L_{t-1} + G_t G_t^T,
\qquad
R_t = R_{t-1} + G_t^T G_t.
$$

Then the update is

$$
W_{t+1}
=
W_t - \eta L_t^{-1/4} G_t R_t^{-1/4}.
$$

This is the formula you should be able to recognize and explain.

Why are there two matrices?

Because `$W_t$` is itself a matrix. So instead of flattening everything into one giant vector and building one huge preconditioner, Shampoo uses:

- a left factor for row geometry
- a right factor for column geometry

That is what makes it structured and scalable relative to a full dense second-order method.

### 10.3.1 Why the exponent is $-1/4$

At first glance, the Shampoo update

$$
W_{t+1}
=
W_t - \eta L_t^{-1/4} G_t R_t^{-1/4}
$$

looks strange because of the `-1/4` powers.

The rough reason is that Shampoo is using two-sided preconditioning:

- one matrix acts on the left
- one matrix acts on the right

If you think of a full vectorized preconditioner, the combined effect of the left and right factors is analogous to splitting a larger matrix inverse across two sides of the gradient tensor.

So each side contributes part of the scaling, which is why the power is `-1/4` rather than the more familiar `-1/2` from diagonal AdaGrad-style normalization.

For exam purposes, the main point is not the full derivation. It is the interpretation:

`the left and right factors share the normalization burden.`

## 10.4 Why Shampoo Looks Like Structured AdaGrad

AdaGrad uses accumulated squared gradients coordinatewise.

Shampoo does something analogous, but at matrix level:

- it accumulates row and column gradient geometry
- then uses matrix inverse powers to rescale the update

So the key phrase from lecture is:

`Shampoo is like structured AdaGrad.`

That phrase is worth remembering because it explains both:

- why Shampoo belongs in the adaptive-method family
- why it is more expressive than diagonal methods

The lecture also states a regret bound of the form

$$
\sum_{t=1}^T f_t(W_t) - \sum_{t=1}^T f_t(W^*)
\le
\sqrt{2rD}\operatorname{Tr}(L_T^{1/4})\operatorname{Tr}(R_T^{1/4}).
$$

Under bounded spectral norms of the gradients, the traces scale like `$T^{1/4}$`, so the regret behaves like `$O(T^{1/2})$`.

For exam purposes, you likely do **not** need the full proof, but you should know:

- Shampoo has a no-regret style guarantee
- it preserves the same broad online-learning scaling theme as AdaGrad

## 10.5 SOAP

SOAP is presented as a refinement of Shampoo.

The main idea is:

- keep the structured preconditioner flavor of Shampoo
- but combine it with more Adam-like adaptive behavior in the eigenbasis of the preconditioner

So conceptually:

- Shampoo gives the geometric basis
- SOAP adds a more adaptive scaling mechanism inside that basis

I would not expect a deep derivation here on the exam. I would expect a recognition-level comparison:

`SOAP = Shampoo-style structure plus Adam-style adaptivity.`

## 10.6 AdaNGD

AdaNGD is presented as a method that bridges:

- adaptive online-learning ideas
- offline convergence guarantees

The main high-level point is that it tries to adapt automatically to problem scale or gradient geometry, instead of needing those constants in advance.

So the exam-safe understanding is:

- AdaNGD adapts to gradient norms / smoothness information
- it is motivated by the connection between online adaptive regret and offline optimization performance

Unless your instructor explicitly emphasized the detailed theorem, a high-level description is likely enough here.

## 10.7 AdamW

AdamW is one of the most conceptually important late-course topics.

The key claim is:

- for standard SGD, weight decay and `$L_2$` regularization are effectively the same
- for adaptive methods, they are **not** the same

That is the whole reason AdamW exists.

In ordinary SGD, adding `$L_2$` regularization and applying multiplicative weight decay line up algebraically.

But in Adam, because the gradient is rescaled coordinatewise by `$\sqrt{\hat v_t}+\epsilon$`, an `$L_2$` penalty gets mixed into the adaptive scaling in a way that is no longer equivalent to plain weight decay.

So AdamW decouples the shrinkage from the adaptive-gradient update.

The decoupled form is

$$
\theta_t
=
(1-\lambda_w)\theta_{t-1}
-
\frac{\eta_t}{\sqrt{\hat v_t}+\epsilon}\hat m_t.
$$

This means:

- one part explicitly shrinks the parameter
- the other part performs the Adam-style adaptive update

That separation is the entire conceptual point.

If the exam asks only one fresh April 14 conceptual question, `AdamW vs Adam + L_2` is one of the most likely candidates.

## 10.8 Muon and the Late-Lecture High-Level Methods

The later part of the lecture also mentions methods like `Muon`.

For these very recent methods, the exam burden is likely high-level:

- recognize that the lecture is exploring alternatives to standard diagonal adaptation
- understand the broad themes of normalization, preconditioning, and geometry-aware updates

So unless your instructor explicitly drilled a formula, do not over-invest in proving these from first principles. Focus on the organizing themes.

## 10.9 What You Are Most Likely to Be Asked

The realistic question types here are:

1. write the Shampoo update
2. explain why Shampoo is “structured AdaGrad”
3. explain the meaning of preconditioning
4. explain why AdamW decouples weight decay from the adaptive update
5. compare one advanced method against Adam/AdaGrad/Newton at a high level

The least likely question type is a long theorem proof from this section.

So your study priority should be:

- update forms
- organizing ideas
- comparison language

not:

- deep regret-proof reconstruction

## 10.10 Common Traps

- treating Shampoo as if it were just Adam with different notation
- forgetting that Shampoo uses left and right matrix accumulators
- forgetting why the exponent is `-1/4` in the Shampoo update
- saying weight decay and `$L_2$` regularization are always equivalent
- giving a vague answer like “AdamW regularizes better” without explaining the decoupling idea

The single most useful sentence to remember is:

`The April 14 lecture is about richer ways to precondition gradient updates, and AdamW is the key example where decoupling matters conceptually.`
