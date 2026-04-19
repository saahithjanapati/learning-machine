# 10. Advanced Neural-Net Optimization

## Table of Contents

- [[#10.0 Where This Topic Came From in the Course]]
- [[#10.1 Unifying View: Preconditioning]]
    - [[#10.1.1 What preconditioning means in plain language]]
    - [[#10.1.2 A simple picture to keep in mind]]
    - [[#10.1.3 What the matrix-times-gradient actually means]]
- [[#10.2 Newton as the Prototype]]
    - [[#10.2.1 Why Newton is the prototype]]
    - [[#10.2.2 How Newton fits the same template exactly]]
- [[#10.3 Shampoo]]
    - [[#10.3.1 Why the exponent is -1/4]]
    - [[#10.3.2 What Shampoo is doing step by step]]
    - [[#10.3.3 A tiny matrix walkthrough]]
- [[#10.4 Why Shampoo Looks Like Structured AdaGrad]]
- [[#10.5 SOAP]]
    - [[#10.5.1 Slower intuition for SOAP]]
- [[#10.6 AdaNGD]]
    - [[#10.6.1 What AdaNGD is trying to normalize]]
- [[#10.7 AdamW]]
    - [[#10.7.1 Why ordinary SGD makes L2 and weight decay look the same]]
    - [[#10.7.2 Why Adam breaks that equivalence]]
    - [[#10.7.3 AdamW step by step]]
- [[#10.8 Muon and the Late-Lecture High-Level Methods]]
    - [[#10.8.1 How to study the very recent methods]]
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

where $H_t$ is a positive-definite transformation or preconditioner.

The interpretation is:

- ordinary gradient descent uses $H_t = I$
- second-order and adaptive methods try to choose a smarter $H_t$

So the big unifying idea is:

`do not just follow the raw gradient; reshape it before stepping.`

That reshaping can come from:

- curvature information
- accumulated gradient geometry
- matrix/tensor structure

### 10.1.1 What preconditioning means in plain language

Suppose the gradient says:

$$
\nabla f(w_t)=g_t.
$$

Plain gradient descent uses that vector directly:

$$
w_{t+1}=w_t-\eta_t g_t.
$$

So plain gradient descent asks only one question:

`what direction does the gradient point?`

Preconditioning asks a second question:

`should I trust all coordinates and directions equally?`

The matrix $H_t$ is the answer to that second question.

It can:

- shrink directions that seem too unstable
- enlarge directions that seem too small
- rotate the step so it better matches local geometry

So a preconditioner is best thought of as a `gradient reshaper`.

You still start from the gradient, but you do not necessarily use it in raw form.

### 10.1.2 A simple picture to keep in mind

In beginner terms, imagine the loss surface is shaped like a long narrow valley.

Then the raw gradient often points in a direction that causes:

- too much zig-zagging across the narrow direction
- too little progress along the long direction

Preconditioning is trying to fix that mismatch.

It tries to make the update more consistent with the shape of the problem.

That is why this whole section belongs naturally after:

- Newton
- AdaGrad
- RMSProp
- Adam

All of those methods are, in one way or another, trying to say:

`not every direction should be treated equally.`

### 10.1.3 What the matrix-times-gradient actually means

The notation

$$
H_t \nabla f_t(w_t)
$$

is easy to read too quickly, so it helps to unpack it.

Let

$$
g_t = \nabla f_t(w_t).
$$

Then the actual direction used by the optimizer is

$$
p_t = H_t g_t.
$$

So the method is not stepping in the raw gradient direction $g_t$. It is stepping in the reshaped direction $p_t$.

That reshaping can do three different things:

1. change scale

If one coordinate is too unstable, the preconditioner can make the step smaller there.

2. change relative emphasis

If another coordinate has been moving too cautiously, the preconditioner can enlarge the step there.

3. mix coordinates

If $H_t$ is not diagonal, then one component of the step can depend on several components of the gradient. That is how the method can encode interactions between parameters instead of treating every coordinate in isolation.

So the phrase `precondition the gradient` just means:

$$
\text{raw gradient } g_t
\quad \longrightarrow \quad
\text{reshaped gradient } H_t g_t.
$$

That is the main conceptual move behind this whole section.

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

- a smart matrix $H_t$
- modifies both scale and direction of the gradient

Modern methods such as Shampoo can be viewed as more practical structured approximations to that dream.

### 10.2.1 Why Newton is the prototype

Newton is worth revisiting here because it is the cleanest example of the whole idea.

In ordinary gradient descent, the step is based only on first-order information:

$$
\nabla f(w_t).
$$

Newton also uses second-order information:

$$
\nabla^2 f(w_t).
$$

Why does that matter?

Because the Hessian tells you about local curvature:

- which directions are steep
- which directions are flat
- how coordinates interact with each other

So Newton does not just say “go downhill.” It says:

`go downhill, but scale the step using local curvature information.`

That is exactly the kind of story the later methods are trying to approximate in cheaper ways.

So when you see Shampoo or other structured methods, a good mental model is:

`this is a more practical, more structured, less exact version of the same dream that Newton had.`

### 10.2.2 How Newton fits the same template exactly

The general preconditioned update is

$$
w_{t+1} = w_t - \eta_t H_t(w_t)\nabla f_t(w_t).
$$

For plain gradient descent, the choice is

$$
H_t = I.
$$

For Newton, the choice is

$$
H_t = [\nabla^2 f_t(w_t)]^{-1}.
$$

So Newton is not a separate family that has nothing to do with the later methods. It is one very special answer to the question

$$
\text{what should the preconditioner } H_t \text{ be?}
$$

That gives a useful hierarchy:

- gradient descent: no geometric correction
- diagonal adaptive methods: coordinatewise correction
- structured methods like Shampoo: richer but still tractable correction
- Newton: full local curvature correction

This is why Newton is the prototype for the April 14 lecture.

## 10.3 Shampoo

For a matrix-valued parameter $W_t$ with gradient $G_t$, Shampoo builds left and right accumulators:

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

Because $W_t$ is itself a matrix. So instead of flattening everything into one giant vector and building one huge preconditioner, Shampoo uses:

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

looks strange because of the $-1/4$ powers.

The rough reason is that Shampoo is using two-sided preconditioning:

- one matrix acts on the left
- one matrix acts on the right

If you think of a full vectorized preconditioner, the combined effect of the left and right factors is analogous to splitting a larger matrix inverse across two sides of the gradient tensor.

So each side contributes part of the scaling, which is why the power is $-1/4$ rather than the more familiar $-1/2$ from diagonal AdaGrad-style normalization.

For exam purposes, the main point is not the full derivation. It is the interpretation:

`the left and right factors share the normalization burden.`

### 10.3.2 What Shampoo is doing step by step

This method is easier to understand if you separate it into four steps.

Step 1: look at the current gradient matrix

$$
G_t.
$$

This is the analogue of the gradient vector in ordinary optimization, except now the parameter itself is a matrix.

Step 2: accumulate information about rows and columns

$$
L_t = L_{t-1}+G_tG_t^T,
\qquad
R_t = R_{t-1}+G_t^TG_t.
$$

These matrices summarize past gradient geometry.

Very loosely:

- $L_t$ says something about interactions among rows
- $R_t$ says something about interactions among columns

Step 3: convert those accumulators into scaling matrices

$$
L_t^{-1/4},
\qquad
R_t^{-1/4}.
$$

These are the matrices that actually reshape the gradient.

Step 4: form the update

$$
W_{t+1}=W_t-\eta L_t^{-1/4}G_tR_t^{-1/4}.
$$

So the gradient is not just multiplied by one scalar learning rate. It is being adjusted on the left and right before the step is taken.

That is the main thing to remember:

`Shampoo treats the gradient as a matrix with structure, not as a long flat vector.`

### 10.3.3 A tiny matrix walkthrough

Suppose the parameter is a $2 \times 2$ matrix, so the gradient is also a $2 \times 2$ matrix:

$$
G_t =
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}.
$$

Then the left accumulator is

$$
G_t G_t^T
=
\begin{pmatrix}
a^2+b^2 & ac+bd \\
ac+bd & c^2+d^2
\end{pmatrix}.
$$

This is summarizing how the **rows** of the gradient behave.

The right accumulator is

$$
G_t^T G_t
=
\begin{pmatrix}
a^2+c^2 & ab+cd \\
ab+cd & b^2+d^2
\end{pmatrix}.
$$

This is summarizing how the **columns** of the gradient behave.

So Shampoo is not merely tracking “how big is each entry?” It is tracking structured interactions:

- row-side geometry through $L_t$
- column-side geometry through $R_t$

Then the update

$$
L_t^{-1/4} G_t R_t^{-1/4}
$$

means:

- reshape from the left using row information
- keep the gradient matrix in the middle
- reshape from the right using column information

That is why the preconditioning is naturally two-sided.

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

Under bounded spectral norms of the gradients, the traces scale like $T^{1/4}$, so the regret behaves like $O(T^{1/2})$.

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

If that still feels abstract, the safe memory version is:

- Shampoo gives a matrix-geometry view
- Adam gives a strong adaptive-scaling view
- SOAP is trying to combine those two strengths

So if the exam asks for the point of SOAP, do not panic and try to reconstruct every formula. The concept is enough:

`keep Shampoo's structure, but make the adaptation feel more Adam-like.`

### 10.5.1 Slower intuition for SOAP

The easiest way to understand SOAP is to start from two extremes:

1. Shampoo says:
   `use matrix structure; do not flatten everything into a purely diagonal rule.`

2. Adam says:
   `adapt strongly to the recent scale of gradients.`

SOAP is trying to sit between those two:

- keep the structured geometry idea from Shampoo
- keep a stronger adaptive-scaling flavor, more like Adam

So if Shampoo feels “geometry-heavy” and Adam feels “adaptivity-heavy,” SOAP is trying to combine those strengths rather than choosing only one.

That is the main exam-safe picture.

## 10.6 AdaNGD

AdaNGD is presented as a method that bridges:

- adaptive online-learning ideas
- offline convergence guarantees

The main high-level point is that it tries to adapt automatically to problem scale or gradient geometry, instead of needing those constants in advance.

So the exam-safe understanding is:

- AdaNGD adapts to gradient norms / smoothness information
- it is motivated by the connection between online adaptive regret and offline optimization performance

Unless your instructor explicitly emphasized the detailed theorem, a high-level description is likely enough here.

The slow version of the story is:

- ordinary methods often need problem constants chosen ahead of time
- in practice, those constants are often unknown
- AdaNGD tries to adapt to the scale of the problem automatically

So the main selling point is not “a magical new update rule.” The selling point is:

`less manual tuning, more automatic adaptation to the geometry seen during optimization.`

### 10.6.1 What AdaNGD is trying to normalize

The slow intuition is that different problems naturally produce gradients at very different scales.

For example:

- one problem may produce gradients around $10^{-3}$
- another may produce gradients around $10^2$

If you use the same learning-rate logic in both settings, the update can be much too small in one case and much too large in the other.

AdaNGD is trying to reduce that sensitivity.

So conceptually it asks:

$$
\text{can we use the gradients we observe to infer the right scale automatically?}
$$

That is why it belongs near the adaptive and online-learning material.

The big idea is not one magical formula. The big idea is:

- rely less on perfectly chosen constants in advance
- rely more on scale information revealed during optimization

## 10.7 AdamW

AdamW is one of the most conceptually important late-course topics.

The key claim is:
- for standard SGD, weight decay and $L_2$ regularization are effectively the same
- for adaptive methods, they are **not** the same

That is the whole reason AdamW exists.

In ordinary SGD, adding $L_2$ regularization and applying multiplicative weight decay line up algebraically.

But in Adam, because the gradient is rescaled coordinatewise by $\sqrt{\hat v_t}+\epsilon$, an $L_2$ penalty gets mixed into the adaptive scaling in a way that is no longer equivalent to plain weight decay.

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

If the exam asks only one fresh April 14 conceptual question, AdamW vs Adam + $L_2$ is one of the most likely candidates.

### 10.7.1 Why ordinary SGD makes $L_2$ and weight decay look the same

This is worth slowing down because it is one of the easiest places to get lost.

Start with ordinary SGD on an objective with $L_2$ regularization:

$$
f(\theta)+\frac{\lambda}{2}\|\theta\|^2.
$$

Its gradient is

$$
\nabla f(\theta)+\lambda \theta.
$$

So one SGD step is

$$
\theta_t
=
\theta_{t-1}
-\eta_t\bigl(\nabla f(\theta_{t-1})+\lambda \theta_{t-1}\bigr).
$$

Now distribute the step:

$$
\theta_t
=
(1-\eta_t\lambda)\theta_{t-1}
-\eta_t \nabla f(\theta_{t-1}).
$$

This looks like two separate actions:

- first shrink the old parameter by $(1-\eta_t\lambda)$
- then take the usual gradient step

That is why, in plain SGD, people often say:

`L_2 regularization and weight decay are effectively the same thing.`

They produce the same algebraic update.

### 10.7.2 Why Adam breaks that equivalence

Now replace SGD by Adam.

Adam does not use the raw gradient directly. It rescales coordinates by something like

$$
\frac{1}{\sqrt{\hat v_t}+\epsilon}.
$$

So if you add an $L_2$ penalty into the gradient, the penalty term

$$
\lambda \theta
$$

also gets fed through that adaptive scaling.

That means the shrinkage is no longer a clean uniform multiplicative decay.

Instead, different coordinates get shrunk differently depending on the adaptive statistics.

That is the key mismatch.

So AdamW says:

- do the Adam adaptive update on the gradient information
- apply weight decay separately, outside that adaptive scaling

That is what `decoupled weight decay` means.

If you remember only one sentence, remember this:

`In SGD, the regularization term and shrinkage line up algebraically; in Adam, the adaptive scaling breaks that clean equivalence, so AdamW separates them again.`

### 10.7.3 AdamW step by step

Here is the slow operational picture.

Step 1: compute the gradient

$$
g_t = \nabla f(\theta_{t-1}).
$$

Step 2: update Adam's first and second moment estimates

$$
m_t = \beta_1 m_{t-1} + (1-\beta_1) g_t,
\qquad
v_t = \beta_2 v_{t-1} + (1-\beta_2) g_t^2.
$$

Step 3: bias-correct them

$$
\hat m_t = \frac{m_t}{1-\beta_1^t},
\qquad
\hat v_t = \frac{v_t}{1-\beta_2^t}.
$$

Step 4: form the Adam adaptive step

$$
\Delta_{\text{Adam}}
=
-\frac{\eta_t}{\sqrt{\hat v_t}+\epsilon}\hat m_t.
$$

Step 5: apply separate decay

$$
\theta_t = (1-\lambda_w)\theta_{t-1} + \Delta_{\text{Adam}}.
$$

This decomposition is useful because it cleanly separates the two jobs:

- the Adam term decides how to move using gradient information
- the decay term shrinks the parameter regardless of the current gradient direction

That is why the word `decoupled` matters so much. The shrinkage is no longer hidden inside the adaptive gradient transformation.

## 10.8 Muon and the Late-Lecture High-Level Methods

The later part of the lecture also mentions methods like `Muon`.

For these very recent methods, the exam burden is likely high-level:

- recognize that the lecture is exploring alternatives to standard diagonal adaptation
- understand the broad themes of normalization, preconditioning, and geometry-aware updates

So unless your instructor explicitly drilled a formula, do not over-invest in proving these from first principles. Focus on the organizing themes.

### 10.8.1 How to study the very recent methods

For the newest methods in this lecture, a good study rule is:

1. identify the method family
   - diagonal adaptive
   - structured preconditioning
   - decoupled regularization
   - geometry-aware normalization

2. identify the selling point
   - what weakness of older optimizers is this method trying to fix?

3. identify the closest familiar ancestor
   - “this is like Adam, but...”
   - “this is like Shampoo, but...”
   - “this is like Newton in spirit, but cheaper...”

If you can answer those three questions, you usually know enough for a late-lecture exam question even if you do not remember every constant.

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
- forgetting why the exponent is $-1/4$ in the Shampoo update
- saying weight decay and $L_2$ regularization are always equivalent
- giving a vague answer like “AdamW regularizes better” without explaining the decoupling idea

The single most useful sentence to remember is:

`The April 14 lecture is about richer ways to precondition gradient updates, and AdamW is the key example where decoupling matters conceptually.`
