# 9. AdaGrad, RMSProp, AdaDelta, and Adam

## Table of Contents

- [[#9.0 Where This Topic Came From in the Course]]
- [[#9.1 Why Adaptive Methods Were Introduced]]
- [[#9.2 Generic Adaptive-Method Picture]]
- [[#9.3 AdaGrad]]
- [[#9.4 RMSProp]]
- [[#9.5 AdaDelta]]
- [[#9.6 Adam]]
- [[#9.7 Why Bias Correction Is Needed]]
- [[#9.8 HW4 Connection: A Generic Adaptive Framework and Adam Failure]]
    - [[#9.8.1 What the Adam failure example is really showing]]
- [[#9.9 How to Compare the Methods]]
- [[#9.10 Common Traps]]

## 9.0 Where This Topic Came From in the Course

This material came from the adaptive/momentum lecture sequence:

- `April 7`: adaptive and momentum-based optimization methods
- `HW4`: generic adaptive-method setup and an example where Adam fails

So the course did not want you to memorize only update rules. It also wanted you to understand:

- why each method was introduced
- what problem it fixes relative to earlier methods
- and where adaptive methods can fail

## 9.1 Why Adaptive Methods Were Introduced

Plain gradient descent uses the same learning-rate scale in every direction.

But in machine learning problems:

- different coordinates can have very different gradient scales
- sparse coordinates may need larger effective steps
- frequently active coordinates may need smaller effective steps

Adaptive methods address this by rescaling the update coordinatewise or through a preconditioner built from gradient history.

So the high-level story is:

`instead of one scalar stepsize, use gradient history to decide how large each coordinate update should be.`

## 9.2 Generic Adaptive-Method Picture

Your `HW4` makes this especially clear by introducing a generic adaptive framework:

$$
x_{t+1} = x_t - \alpha_t \frac{m_t}{\sqrt{V_t}},
$$

possibly followed by projection.

Interpretation:

- `$m_t$` is a first-moment or smoothed-gradient term
- `$V_t$` is a second-moment or scale estimate
- dividing by `$\sqrt{V_t}$` rescales coordinates based on recent gradient magnitudes

This framework includes:

- SGD as a special case
- Adam as a specific choice of moving averages

That is the right lens for this whole topic:

`adaptive methods are gradient methods with learned rescaling.`

## 9.3 AdaGrad

AdaGrad keeps a cumulative history of squared gradients.

Coordinatewise, the lecture formula is

$$
h_{t,i} = \sqrt{\sum_{\tau=1}^t g_{\tau,i}^2},
\qquad
x_{t+1,i}
=
x_{t,i} - \eta \frac{g_{t,i}}{h_{t,i}}.
$$

Interpretation:

- if coordinate `$i$` has seen many large gradients, its denominator grows
- so future steps in that coordinate shrink

This is why AdaGrad is good for sparse features:

- rare coordinates keep relatively small denominators
- so they can still get meaningful updates

But the method has a built-in problem:

- the denominator never decreases
- it only keeps accumulating

So eventually AdaGrad can become too conservative.

That is the main limitation you should remember.

## 9.4 RMSProp

RMSProp fixes AdaGrad’s unbounded denominator growth by replacing the cumulative sum with an exponentially decaying average.

The update is

$$
h_{t,i} = \gamma h_{t-1,i} + (1-\gamma) g_{t,i}^2,
\qquad
x_{t+1,i}
=
x_{t,i} - \frac{\eta}{\sqrt{h_{t,i}+\epsilon}} g_{t,i}.
$$

The important conceptual shift is:

- AdaGrad remembers all past squared gradients equally
- RMSProp emphasizes recent squared gradients more heavily

So RMSProp adapts to changing gradient scales instead of shrinking forever.

That is why RMSProp is usually presented as the practical fix for AdaGrad’s over-shrinking behavior.

## 9.5 AdaDelta

AdaDelta goes one step further.

Instead of tracking only squared gradients, it tracks:

1. squared gradients
2. squared parameter updates

The running averages are

$$
E[g^2]_t = \rho E[g^2]_{t-1} + (1-\rho) g_t^2,
$$

and

$$
E[\Delta x^2]_t = \rho E[\Delta x^2]_{t-1} + (1-\rho) (\Delta x_t)^2.
$$

The update uses the ratio of RMS quantities:

$$
\Delta x_t
=
-\frac{RMS[\Delta x]_{t-1}}{RMS[g]_t} g_t.
$$

Why is this interesting?

Because AdaDelta is trying to make the update scale more self-adjusting:

- if recent gradients are large, the denominator increases
- if recent updates have been small, the numerator stays small

So AdaDelta tries to calibrate the update using both:

- gradient scale
- update scale

Compared with RMSProp:

- RMSProp uses only gradient history
- AdaDelta uses both gradient history and update history

## 9.6 Adam

Adam combines two ideas:

1. momentum-style averaging of gradients
2. RMSProp-style averaging of squared gradients

The first-moment and second-moment recursions are

$$
m_t = \beta_1 m_{t-1} + (1-\beta_1) g_t,
$$

$$
v_t = \beta_2 v_{t-1} + (1-\beta_2) g_t^2.
$$

These are both initialized at zero, which creates an early-iteration bias.

So Adam applies bias correction:

$$
\hat m_t = \frac{m_t}{1-\beta_1^t},
\qquad
\hat v_t = \frac{v_t}{1-\beta_2^t}.
$$

Then the update is

$$
x_{t+1}
=
x_t - \eta \frac{\hat m_t}{\sqrt{\hat v_t}+\epsilon}.
$$

So the structure is:

- momentum in the numerator
- adaptive second-moment scaling in the denominator

That is why Adam often feels like “RMSProp plus momentum.”

## 9.7 Why Bias Correction Is Needed

This is one of the most likely short conceptual questions.

The issue is simple:

- both `$m_t$` and `$v_t$` start at zero
- therefore the moving averages are biased toward zero in early iterations

Without correction, the method would systematically underestimate:

- the first moment
- the second moment

especially at small `$t$`.

The bias-corrected quantities

$$
\hat m_t = \frac{m_t}{1-\beta_1^t},
\qquad
\hat v_t = \frac{v_t}{1-\beta_2^t}
$$

undo that initialization bias.

The short sentence to remember is:

`bias correction is needed because the exponential moving averages start at zero and therefore underestimate the true moments early on.`

## 9.8 HW4 Connection: A Generic Adaptive Framework and Adam Failure

Your `HW4` is especially valuable here because it goes beyond the usual lecture-level “Adam works well in practice” story.

It presents:

- a generic adaptive optimization framework
- and then an explicit example where Adam fails

The generic setup has:

$$
g_t = \nabla f_t(x_t),
\qquad
x_{t+1} = x_t - \alpha_t \frac{m_t}{\sqrt{V_t}},
$$

possibly followed by projection.

Then Adam is recovered through specific exponential averages for the first and second moments.

The failure example matters because it teaches a deeper lesson:

`good empirical performance does not mean unconditional convergence guarantees.`

So for exam purposes, be ready for a conceptual question like:

- why was RMSProp introduced after AdaGrad?
- why does Adam use bias correction?
- can Adam fail even on simple convex problems?

The answer to the last one is `yes`; that is exactly why the homework includes the example.

### 9.8.1 What the Adam failure example is really showing

The HW4 example is more informative than just “Adam can fail.”

The setup uses linear losses on the interval `$[-1,1]$`:

$$
f_t(x)=
\begin{cases}
Cx, & t \equiv 1 \pmod 3,\\
-x, & \text{otherwise,}
\end{cases}
\qquad C>2.
$$

The empirical objective over time is minimized at the left endpoint `$x^*=-1$`, while the right endpoint `$x_{\text{BAD}}=1$` is the worst point.

The homework then shows that for a specific Adam parameter choice, the iterates can:

- stay positive forever
- repeatedly return to `$x=1$`
- fail to get arbitrarily close to the true optimizer `$x^*<0$`

So the deeper lesson is not just “Adam is imperfect.” It is:

`the adaptive scaling can interact with the gradient sequence in a way that systematically favors the wrong region of the domain.`

That is why convergence analysis for adaptive methods is subtle.

## 9.9 How to Compare the Methods

Here is the clean comparison to keep in mind:

- AdaGrad:
  - cumulative squared gradients
  - good for sparse settings
  - can become too conservative

- RMSProp:
  - exponential moving average of squared gradients
  - fixes AdaGrad’s endlessly growing denominator

- AdaDelta:
  - tracks both squared gradients and squared updates
  - tries to self-scale the update more automatically

- Adam:
  - combines momentum-style first moment with RMSProp-style second moment
  - uses bias correction because both moving averages start at zero

If a question asks for “the main difference,” answer at that level first before giving formulas.

## 9.10 Common Traps

- forgetting where the `$\epsilon$` appears in RMSProp or Adam
- writing Adam without bias-correction terms
- saying AdaGrad’s denominator is an exponential moving average
- saying RMSProp and AdaDelta are the same
- claiming Adam is always guaranteed to converge because it works well in practice

The single most useful sentence to remember is:

`Adaptive methods rescale updates using gradient history; the main differences are in how they estimate that scale and whether they also smooth the gradient itself.`
