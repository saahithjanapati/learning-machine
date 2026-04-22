# 7. GANs, Score Matching, NCE, and Diffusion

## Table of Contents

- [[#Big Picture]]
- [[#0. How To Use This Section]]
- [[#7.0 The Common Problem Behind This Whole Section]]
- [[#7.1 GANs, Slowly and Rigorously]]
- [[#7.2 Why Wasserstein Changes the Geometry]]
- [[#7.3 Score Matching, Slowly and Rigorously]]
- [[#7.4 Sliced and Denoising Score Matching]]
- [[#7.5 Noise Contrastive Estimation, Slowly and Rigorously]]
- [[#7.6 Diffusion and Score-Based Generative Modeling]]
- [[#7.7 Annealed Langevin and Predictor-Corrector Sampling]]
- [[#7.8 Probability Flow ODE]]
- [[#7.9 Comparing the Methods]]
- [[#7.10 What You Should Be Able To Say Out Loud]]
- [[#Formal Anchors]]
- [[#Worked Problems]]

## Big Picture

This section looks messy at first because the methods seem unrelated.

You see:

- adversarial games
- score fields
- data-vs-noise classification
- forward and reverse stochastic differential equations

and it is easy to think this is just a bag of unrelated tricks.

It is not.

These methods are all reacting to the same family of problems:

- normalized likelihood may be intractable
- likelihood may be awkward to optimize
- the partition function may be hard to compute
- a simple pointwise distance between samples may not reflect perceptual similarity
- sampling may be easier to phrase than density evaluation

So the real organizing question of the section is:

`if maximum likelihood is hard or not the best route, what alternative training signal can we use for generative modeling?`

Each method gives a different answer:

- GANs: compare generated samples to real ones through a learned discriminator
- score matching: learn the score field instead of the density itself
- NCE: reduce density learning to classification against a reference noise distribution
- diffusion: learn how to reverse a noising process, using score information along the way

The key to not getting lost is to keep three objects separate:

1. What is the model trying to represent?
2. What loss is actually being optimized?
3. What hard quantity is the method avoiding?

If those are clear, the section becomes much more coherent.

## 0. How To Use This Section

Primary lecture coverage:

- `Lecture 17`
- `Lecture 19`
- `Lecture 20`
- `Lecture 21`

The biggest danger in this section is objective-function blur.

Students often end up with a vague memory like:

- “GANs have a min-max thing”
- “score matching uses gradients”
- “diffusion adds noise”

That is not enough for an exam.

For each method, keep asking:

1. What object is being learned: density, score, generator, critic, classifier?
2. What quantity does the method avoid: partition function, explicit likelihood, direct density comparison?
3. How do we generate samples once the method is trained?

That checklist is the simplest way to keep the methods distinct.

## 7.0 The Common Problem Behind This Whole Section

Start from the classical ideal.

In a generative model, we would like to learn a distribution $p_\theta(x)$ that matches the data distribution $p_{\text{data}}(x)$.

If everything were easy, we would maximize
$$
\mathbb{E}_{x \sim p_{\text{data}}}[\log p_\theta(x)].
$$

That is maximum likelihood.

But several things can go wrong.

### Problem 1: normalization may be hard

In energy-based models,
$$
p_\theta(x)=\frac{1}{Z_\theta}\exp(-E_\theta(x)),
$$
and the partition function
$$
Z_\theta=\int \exp(-E_\theta(x))\,dx
$$
is hard to compute.

### Problem 2: likelihood may not be the most useful geometric signal

The GAN lecture begins with a perceptual point:

- simple distances in data space, like pixel-wise $L_2$, can be a terrible notion of similarity for images

So even if likelihood is principled, it may not line up with the kind of “looks realistic” signal we care about in some applications.

### Problem 3: learning the density may be harder than learning some derivative or comparison statistic

Sometimes it is easier to learn:

- a discriminator
- a score field
- a classifier against noise

than to learn a fully normalized density directly.

### Problem 4: generation may be easier to express as a process

Diffusion models are the cleanest example.

Instead of directly learning a normalized data density in one shot, they learn how to undo progressive corruption.

So the entire section is about replacing “direct normalized likelihood” with alternative training views.

## 7.1 GANs, Slowly and Rigorously

GANs start from a very operational idea:

- rather than fit the density explicitly
- train a generator to produce samples that are hard to distinguish from real data

### The setup

A GAN has two players.

#### Generator

The generator maps latent noise $z$ to a sample:
$$
z \sim p(z), \qquad x=G(z).
$$

This induces a model distribution $p_G$ over $x$.

#### Discriminator

The discriminator $D(x)\in[0,1]$ tries to say whether $x$ came from:

- the real data distribution
- or the generator

So it is a classifier.

### The classical minimax objective

The original GAN objective is
$$
\min_G \max_D
\left[
\mathbb{E}_{x\sim p_{\text{data}}}\log D(x)
+
\mathbb{E}_{z\sim p(z)}\log(1-D(G(z)))
\right].
$$

If we rewrite the second expectation directly over $x \sim p_G$, this becomes
$$
\min_G \max_D
\left[
\mathbb{E}_{x\sim p_{\text{data}}}\log D(x)
+
\mathbb{E}_{x\sim p_G}\log(1-D(x))
\right].
$$

### Plain-English meaning

The discriminator is rewarded for:

- outputting something near $1$ on real data
- outputting something near $0$ on fake data

The generator is rewarded when fake data is hard to classify as fake.

So GAN training is not direct density fitting.
It is a game:

- the discriminator tries to tell the two distributions apart
- the generator tries to erase that distinction

### The optimal discriminator for a fixed generator

This is the first theorem-level fact you should understand conceptually.

If $G$ is fixed, the discriminator objective decomposes pointwise in $x$.
At a particular $x$, it wants to maximize
$$
p_{\text{data}}(x)\log D(x) + p_G(x)\log(1-D(x)).
$$

The maximizing choice is
$$
D^*(x)=\frac{p_{\text{data}}(x)}{p_{\text{data}}(x)+p_G(x)}.
$$

This makes intuitive sense:

- if $x$ is much more likely under real data than fake data, output something near $1$
- if $x$ is much more likely under fake data, output something near $0$

So the optimal discriminator is the Bayes classifier between real and generated samples.

### Plugging the optimal discriminator back in

When we substitute $D^*$ into the value function, the generator objective becomes
$$
2\,\mathrm{JS}(p_{\text{data}},p_G)-\log 4,
$$
where $\mathrm{JS}$ is Jensen-Shannon divergence.

This is one of the main formal facts from the GAN lecture.

So the classical GAN story is:

- the discriminator solves a classification problem
- the induced generator objective is minimizing Jensen-Shannon divergence in the idealized infinite-capacity setting

### Why this is theoretically appealing

Jensen-Shannon divergence is nonnegative and is zero exactly when the two distributions match.

So in the idealized story:

- if GAN training reaches the global optimum
- and the model class is expressive enough

then the generator distribution equals the data distribution.

That is the clean mathematical promise.

### Why practice is harder than the clean theory

Real GAN training is not just “minimize JS.”

It is:

- nonconvex
- a min-max game rather than an ordinary minimization problem
- sensitive to optimization dynamics

This causes well-known pathologies:

- oscillation and instability
- mode collapse
- vanishing gradients when the discriminator becomes too strong

So the clean theory is important, but it is not the full practical story.

## 7.2 Why Wasserstein Changes the Geometry

The GAN lecture then asks a deeper question:

what if the problem is not only optimization difficulty, but the divergence itself?

### The support-mismatch problem

Suppose the generator distribution and the data distribution live on disjoint supports.

Then Jensen-Shannon divergence can become flat in a way that gives the generator almost no gradient signal.

The practice exam made this extremely concrete with the shifted-interval example:

- true distribution $p = \mathrm{Unif}[0,1]$
- model distribution $p_m = \mathrm{Unif}[m,m+1]$

For $|m| \ge 1$, the supports are disjoint.
In that regime:

- the JS loss is constant
- its derivative with respect to $m$ is zero

So the generator gets no direction telling it how to move toward the data.

### Integral probability metric viewpoint

Wasserstein GAN replaces the original discriminator class with a critic class $F$, and considers
$$
d_F(P,Q)
=
\sup_{f\in F}
\left|
\mathbb{E}_P[f]-\mathbb{E}_Q[f]
\right|.
$$

If $F$ is the set of 1-Lipschitz functions, this becomes Wasserstein-1 distance:
$$
W_1(P,Q)
=
\sup_{\|f\|_{\mathrm{Lip}}\le 1}
\left[
\mathbb{E}_P[f]-\mathbb{E}_Q[f]
\right].
$$

So WGAN changes the distance notion.

### Why Wasserstein helps

Wasserstein distance cares about how much “mass transport” is needed to move one distribution onto the other.

That means it still changes continuously as supports move around, even when they are disjoint.

In the shifted-interval example from the practice exam:
$$
W_1(p,p_m)=|m|.
$$

So:

- the loss is not flat
- the derivative is nonzero for $m \neq 0$
- the generator gets a meaningful direction of improvement

That is the key geometric gain.

### What the critic is doing

The WGAN critic is not a probabilistic classifier in the original GAN sense.

Instead it is a 1-Lipschitz test function chosen to maximally separate the two distributions in expectation.

So the conceptual story shifts from:

- “real or fake classifier”

to

- “best Lipschitz witness to the difference between the two distributions”

### Practical takeaway

Wasserstein does not magically solve all GAN problems.

But it changes the geometry of the learning signal in an important way:

- under severe support mismatch, it can still provide useful gradients

That is the exam-level point.

## 7.3 Score Matching, Slowly and Rigorously

Score matching addresses a different obstacle:

- the model may be easy to write down up to normalization
- but hard to train by maximum likelihood because of the partition function

### Energy-based setup

Suppose
$$
q_\theta(x)\propto \exp(f_\theta(x))
\qquad\text{or equivalently}\qquad
q_\theta(x)\propto \exp(-E_\theta(x)).
$$

Then
$$
\log q_\theta(x)=f_\theta(x)-\log Z_\theta.
$$

Likelihood-based learning would involve derivatives of $\log Z_\theta$ with respect to $\theta$, which are difficult.

### The score function

The **score** of a density is
$$
\nabla_x \log p(x).
$$

This is a vector field on data space.

Intuitively it points toward directions of increasing log density.

The score is a local geometric object:

- it tells you how the density changes nearby
- not the absolute density value itself

### Why the partition function disappears

For the model,
$$
\nabla_x \log q_\theta(x)
=
\nabla_x f_\theta(x)-\nabla_x \log Z_\theta.
$$

But $\log Z_\theta$ does not depend on $x$, so
$$
\nabla_x \log Z_\theta = 0.
$$

Therefore
$$
\nabla_x \log q_\theta(x)=\nabla_x f_\theta(x)
\qquad
\text{or}
\qquad
\nabla_x \log q_\theta(x)=-\nabla_x E_\theta(x).
$$

This is the key trick.

Differentiating with respect to $x$ removes the normalizing constant.

### The ideal score-matching objective

The dream objective would be:
$$
\min_\theta
\mathbb{E}_{p_{\text{data}}}
\left\|
\nabla_x \log q_\theta(x)-\nabla_x \log p_{\text{data}}(x)
\right\|^2.
$$

This says:

- match the model score field to the data score field

### But there is an immediate problem

We do not know $\nabla_x \log p_{\text{data}}(x)$.

We only have samples from the data distribution.

So we need to rewrite the objective into a form that does not explicitly require the unknown data score.

### Hyvarinen’s integration-by-parts trick

Expand the square:
$$
\mathbb{E}_{p_{\text{data}}}\|s_\theta(x)-s_{\text{data}}(x)\|^2
=
\mathbb{E}_{p_{\text{data}}}\|s_\theta(x)\|^2
+
\mathbb{E}_{p_{\text{data}}}\|s_{\text{data}}(x)\|^2
-2\mathbb{E}_{p_{\text{data}}}\langle s_\theta(x),s_{\text{data}}(x)\rangle.
$$

The middle term does not depend on $\theta$, so we can ignore it for optimization.

The key difficulty is the cross term.

The lecture’s main identity is:
$$
\mathbb{E}_{p}\langle f(x), \nabla_x \log p(x)\rangle
=
-\mathbb{E}_{p}[\nabla \cdot f(x)],
$$
assuming boundary terms vanish.

Applying this with $f=s_\theta$ converts the cross term into a divergence term involving only model quantities.

This leads to the Hyvarinen score-matching objective:
$$
J(\theta)
=
\mathbb{E}_{p_{\text{data}}}
\left[
\frac{1}{2}\|s_\theta(x)\|^2+\nabla \cdot s_\theta(x)
\right].
$$

### Why this is such a big deal

Because now the expectation is with respect to data samples, but the integrand depends only on:

- the model score $s_\theta(x)$
- derivatives of that score

So the objective can be estimated from data samples without ever evaluating the partition function or the data score directly.

That is the core logic of score matching.

### What score matching learns and what it does not learn directly

It learns:

- the score field

It does **not** directly learn:

- a normalized density value at each point

This distinction matters.

The score determines the density up to an additive normalization constant in log space, but training and sampling are organized around the score field itself.

### Important limitations

The lectures and practice material highlight several limitations:

- the objective involves divergence or Hessian-like terms, which can be expensive in high dimension
- good score estimates are hardest in low-density regions
- sampling still requires an MCMC-like procedure such as Langevin dynamics

So score matching avoids the partition function, but it does not make the whole generative problem trivial.

## 7.4 Sliced and Denoising Score Matching

The next lecture question is:

how do we make score matching more practical and more stable?

Two important variants appear in the course.

### Sliced score matching

The obstacle in standard score matching is the divergence term:
$$
\nabla \cdot s_\theta(x),
$$
which involves summing derivatives across dimensions.

In high dimension, this can be expensive.

Sliced score matching uses random projection directions to rewrite the objective in terms of directional derivatives.

Plain English:

- instead of measuring the full derivative structure directly
- probe it through random one-dimensional slices

This makes computation cheaper while still targeting the score.

### Denoising score matching

Denoising score matching starts by corrupting the data with noise.

If $x \sim p_{\text{data}}$ and $\tilde{x}$ is a noisy version of $x$, then we train a score model on the perturbed distribution.

Why might this help?

- the perturbed density is smoother
- low-density holes get filled in
- the score becomes easier to estimate more reliably

This is a big conceptual point.

The lecture explicitly contrasts:

- raw data distribution: harder score estimation away from the data manifold
- noised distribution: smoother, easier score estimation

### Why it is called “denoising”

For Gaussian perturbations, the score of the perturbed density is closely related to the direction from a noisy point back toward the clean point.

So the learned score field tells you how to denoise a corrupted sample.

That is why denoising score matching becomes the conceptual bridge to diffusion models.

### Annealed idea

The lecture also introduces multiple noise levels:

- high noise: easier score estimation, but less data fidelity
- low noise: harder score estimation, but closer to the actual data distribution

So training across a range of noise scales gives score information at many levels of corruption.

This multi-scale idea is central to diffusion and annealed Langevin sampling later.

## 7.5 Noise Contrastive Estimation, Slowly and Rigorously

NCE gives yet another way around hard normalization.

Its key move is:

`turn density estimation into a classification problem against a known noise distribution`

### The setup

Choose:

- data samples from $p_{\text{data}}$
- noise samples from a known distribution $q$

Suppose for each data sample we include $k$ noise samples.

Then the optimal discriminator between “data” and “noise” is
$$
D^*(x)=\frac{p_{\text{data}}(x)}{p_{\text{data}}(x)+kq(x)}.
$$

This is the exact same Bayes-classifier logic we saw in GANs, but now the second class is fixed noise rather than a learned generator.

### Where the model enters

In NCE we posit an unnormalized model, often written through an energy or score function plus a learnable normalizing constant parameter $c$.

The lecture writes the discriminator in the form
$$
D_{\theta,c}(x)=r_k(E_\theta(x)-c-\log q(x)),
$$
where $r_k$ is a shifted sigmoid-like function.

The point is that the model defines the log-odds of data versus noise.

### Why this helps with unnormalized models

We do not directly maximize $\log p_\theta(x)$.

Instead we optimize a logistic-regression-style objective:
$$
L_{\text{NCE}}(\theta,c)
=
\mathbb{E}_{x\sim p_{\text{data}}}[\log D_{\theta,c}(x)]
+
k\mathbb{E}_{x\sim q}[\log(1-D_{\theta,c}(x))].
$$

So training is framed as binary classification.

### What the optimum means

In the nonparametric idealized analysis from the lecture, optimizing over a sufficiently rich function class gives
$$
D^*(x)=\frac{p_{\text{data}}(x)}{p_{\text{data}}(x)+kq(x)},
$$
which implies the learned score function recovers the data density up to the appropriate normalization.

So NCE uses classification to indirectly recover a density model.

### Why the method is called self-normalizing

The lecture emphasizes this property:

- NCE forces the model to learn a normalization parameter $c$ that is consistent with its energy function

So unlike plain unnormalized fitting, the normalization is folded into the classification problem.

### Why the noise choice matters

There is a tempting but wrong intuition:

- choose noise distribution $q$ to be as different from the data as possible

That can make the classification problem too easy.

If real data and noise are trivially separable, the model may get a weak or uninformative training signal about the fine structure of the data distribution.

So good NCE uses noise that is:

- known
- easy to sample from
- but not so absurdly far from the data that the task becomes useless

### Relationship to GANs

GANs also involve discrimination.

But the two roles are very different:

- in a GAN, the “negative” distribution is a learned generator that changes during training
- in NCE, the “negative” distribution is a fixed known noise distribution

That distinction is critical.

## 7.6 Diffusion and Score-Based Generative Modeling

Diffusion models look very different at first, but conceptually they are a synthesis of earlier ideas:

- denoising score matching
- annealing across noise levels
- stochastic differential equations

### The forward process

Start with data and gradually corrupt it with noise.

In continuous-time form, the lecture writes an Ito SDE:
$$
dx = f(x,t)\,dt + g(t)\,dw,
$$
where:

- $f(x,t)$ is the drift
- $g(t)$ scales the noise
- $w$ is Brownian motion

The forward process is chosen by us.
Its job is to gradually transform data into a simple noise distribution.

### The generative idea

If the forward process turns data into noise, then generation should be possible by reversing that process:

- start from noise
- run an appropriate reverse-time dynamics
- end up at a data-like sample

That is the central conceptual move in diffusion modeling.

### Why score functions appear

The lecture states Anderson’s remarkable reverse-SDE result:
if the forward process is
$$
dx = f(x,t)\,dt + g(t)\,dw,
$$
then the reverse dynamics involve the time-dependent score:
$$
dx=
\left[
f(x,t)-g^2(t)\nabla_x \log p_t(x)
\right]dt
+
g(t)\,dw.
$$

This is the key formula.

The reverse drift is not determined just by the forward SDE.
It also needs the score of the noisy distribution $p_t$ at each time.

So diffusion becomes a score-learning problem.

### What the model actually learns

A score network $s_\theta(x,t)$ is trained to approximate
$$
\nabla_x \log p_t(x)
$$
for many noise levels or times $t$.

The lecture writes a continuous-time training objective of the form
$$
\mathbb{E}_{t \sim \mathcal{U}(0,T)}
\mathbb{E}_{x \sim p_t}
\left[
\lambda(t)\|s_\theta(x,t)-\nabla_x \log p_t(x)\|_2^2
\right].
$$

So a diffusion model is not directly trained as a normalized density estimator.
It is trained as a time-dependent score estimator.

### Why this is conceptually powerful

The forward process is simple.

The hard reverse process becomes tractable once we know the score at each noise level.

So diffusion says:

- learn denoising directions at many scales
- then integrate those directions backward from noise to data

That is much more intuitive than treating the model as a mysterious black box.

## 7.7 Annealed Langevin and Predictor-Corrector Sampling

The lectures present two important score-based sampling strategies.

### Annealed Langevin dynamics

Before the full SDE viewpoint, the course motivates sampling by gradually moving across noise levels.

At a fixed noise level, a Langevin step looks like
$$
x \leftarrow x + \epsilon s_\theta(x,\sigma) + \sqrt{2\epsilon}\,z,
\qquad
z \sim \mathcal{N}(0,I).
$$

Across many noise scales:

- start at a high-noise distribution
- run a few Langevin steps
- use the result as a warm start for a lower-noise level
- repeat

This is annealed Langevin dynamics.

The lecture emphasizes why this helps:

- high noise smooths the landscape
- high-temperature exploration improves mode coverage
- lower noise gradually sharpens the sample toward the data distribution

### Predictor-corrector sampling

Once we have the reverse-SDE view, a natural numerical method is:

- take a reverse-SDE discretization step
- then locally refine it with a few Langevin steps

That is predictor-corrector sampling.

#### Predictor

The predictor uses something like Euler-Maruyama on the reverse SDE:
$$
\Delta x
\leftarrow
\left[f(x,t)-g^2(t)s_\theta(x,t)\right]\Delta t
+
g(t)\sqrt{|\Delta t|}\,z.
$$

This moves the sample in the global reverse-time direction.

#### Corrector

The corrector then runs a few local Langevin updates at the current noise level:

- use the learned score
- inject some noise
- locally re-equilibrate/refine

The practice exam explicitly tests this point:

- the corrector is a few iterations of Langevin or related MCMC at fixed noise level
- it does **not** require training a separate neural network

### Intuition for predictor-corrector

The predictor is:

- globally right
- but numerically imperfect

The corrector is:

- locally stabilizing
- and geometry-refining

So predictor-corrector combines:

- diffusion-style reverse dynamics
- with an MCMC-style local repair step

## 7.8 Probability Flow ODE

One of the most surprising lecture results is that the stochastic reverse process has a deterministic counterpart.

The reverse SDE is
$$
dx=
\left[
f(x,t)-g^2(t)\nabla_x \log p_t(x)
\right]dt
+
g(t)\,dw.
$$

The corresponding probability-flow ODE is
$$
dx=
\left[
f(x,t)-\frac{1}{2}g^2(t)\nabla_x \log p_t(x)
\right]dt.
$$

### Why this matters

The lecture’s key claim is:

- if you start both processes from the same initial distribution
- they induce the same marginal density evolution over time

So the ODE is a deterministic process whose one-time marginals match the SDE’s.

### Why that is useful

It gives:

- a deterministic alternative for sampling
- a route to likelihood / change-of-variables reasoning
- a different conceptual interpretation of score-based generation

So the score model is not tied only to stochastic simulation.
It can also define a deterministic flow of probability mass.

### Tradeoff intuition

The lecture notes mention a typical practical tradeoff:

- ODE-style sampling can be faster or cleaner
- SDE-style sampling often gives better sample quality

You do not need to memorize that as a universal law.
You do need to know why the ODE is conceptually important.

## 7.9 Comparing the Methods

At this point, it helps to line up the methods side by side.

### GANs

Learns:

- a generator distribution through adversarial training

Avoids:

- explicit likelihood maximization

Training signal:

- discriminator/critic comparison between real and generated samples

### Score matching

Learns:

- a score field $s_\theta(x)$

Avoids:

- direct partition-function handling in energy-based models

Training signal:

- match model score to data score after integration-by-parts rewriting

### NCE

Learns:

- parameters of an unnormalized density model

Avoids:

- direct maximum-likelihood normalization

Training signal:

- data-vs-noise classification with fixed noise distribution

### Diffusion / score-based models

Learns:

- a time-dependent score field $s_\theta(x,t)$

Avoids:

- direct normalized density learning in one shot

Training signal:

- denoising score estimation across noise levels

Generation mechanism:

- solve reverse SDE or probability-flow ODE

### Unifying sentence

All of these methods replace direct density fitting with some other object that is easier to learn:

- a discriminator
- a critic
- a score
- a classifier against noise
- a reverse denoising field

That is the cleanest way to remember the section.

## 7.10 What You Should Be Able To Say Out Loud

By the end of this section, you should be able to say:

> These methods are alternative routes to generative modeling when direct normalized likelihood is hard, unstable, or not the most useful learning signal. GANs train a generator by trying to fool a discriminator; in the idealized classical analysis this corresponds to minimizing Jensen-Shannon divergence, while Wasserstein GAN changes the geometry to avoid flat gradients under support mismatch. Score matching learns the score $\nabla_x \log p(x)$ instead of the density and avoids the partition function because differentiation with respect to $x$ removes the normalizer. NCE turns density estimation into classification against a fixed noise distribution and can estimate unnormalized models in a self-normalizing way. Diffusion models learn score information for noisy versions of the data and then generate by reversing a noising process through an SDE or its deterministic probability-flow ODE counterpart.

If you can say that slowly and clearly, the section has stopped being a blur.

## Formal Anchors

These are the core mathematical statements worth recognizing and being able to explain.

### Classical GAN objective

The standard GAN minimax objective is
$$
\min_G \max_D
\left[
\mathbb{E}_{x\sim p_{\text{data}}}\log D(x)
+
\mathbb{E}_{x\sim p_G}\log(1-D(x))
\right].
$$

For fixed $G$, the optimal discriminator is
$$
D^*(x)=\frac{p_{\text{data}}(x)}{p_{\text{data}}(x)+p_G(x)}.
$$

Plugging $D^*$ back into the objective yields a generator objective proportional to Jensen-Shannon divergence:
$$
2\,\mathrm{JS}(p_{\text{data}},p_G)-\log 4.
$$

### Wasserstein GAN

For a critic class $F$, define
$$
d_F(P,Q)
=
\sup_{f\in F}
\left|
\mathbb{E}_P[f]-\mathbb{E}_Q[f]
\right|.
$$

If $F$ is the set of 1-Lipschitz functions, this gives Wasserstein-1 distance:
$$
W_1(P,Q)
=
\sup_{\|f\|_{\mathrm{Lip}}\le 1}
\left[
\mathbb{E}_P[f]-\mathbb{E}_Q[f]
\right].
$$

### Score function

The score of a density $p$ is
$$
\nabla_x \log p(x).
$$

For an unnormalized model $q_\theta(x)\propto \exp(f_\theta(x))$,
$$
\nabla_x \log q_\theta(x)=\nabla_x f_\theta(x),
$$
because the normalizing constant does not depend on $x$.

### Hyvarinen score matching

One standard score-matching objective can be written as
$$
J(\theta)
=
\mathbb{E}_{p_{\text{data}}}
\left[
\frac{1}{2}\|s_\theta(x)\|^2+\nabla\cdot s_\theta(x)
\right].
$$

This follows from integration by parts applied to the ideal score-matching loss.

### NCE

With $k$ noise samples per data sample and noise distribution $q$, the Bayes-optimal data-vs-noise classifier is
$$
D^*(x)=\frac{p_{\text{data}}(x)}{p_{\text{data}}(x)+kq(x)}.
$$

The NCE objective takes the logistic-regression form
$$
L_{\text{NCE}}(\theta,c)
=
\mathbb{E}_{p_{\text{data}}}[\log D_{\theta,c}(x)]
+
k\mathbb{E}_{q}[\log(1-D_{\theta,c}(x))].
$$

### Reverse SDE for diffusion

If the forward process is
$$
dx=f(x,t)\,dt+g(t)\,dw,
$$
then the reverse SDE involves the time-dependent score:
$$
dx=
\left[
f(x,t)-g^2(t)\nabla_x\log p_t(x)
\right]dt
+
g(t)\,dw.
$$

### Probability flow ODE

The deterministic counterpart is
$$
dx=
\left[
f(x,t)-\frac{1}{2}g^2(t)\nabla_x\log p_t(x)
\right]dt.
$$

It has the same marginal density evolution as the corresponding diffusion process.

## Worked Problems

### Problem 7.1

For a fixed generator $G$, what is the optimal discriminator in the original GAN objective, and what is its intuition?

### Solution

The optimal discriminator is
$$
D^*(x)=\frac{p_{\text{data}}(x)}{p_{\text{data}}(x)+p_G(x)}.
$$

This is exactly the Bayes classifier for distinguishing real from generated samples.

It outputs a high value when $x$ is much more likely under real data than under the generator, and a low value when the reverse is true.

### Problem 7.2

Why can the classical JS-based GAN objective give poor gradient information when the model and data supports are disjoint?

### Solution

In that regime, Jensen-Shannon divergence can become flat as a function of the generator parameters.

The practice-exam shifted-interval example shows this explicitly: once the two supports no longer overlap, the JS loss is constant, so its derivative is zero.

That means gradient descent does not know which direction to move the generator.

### Problem 7.3

Why does score matching avoid the partition function problem in an energy-based model?

### Solution

If
$$
q_\theta(x)\propto \exp(-E_\theta(x)),
$$
then
$$
\log q_\theta(x)=-E_\theta(x)-\log Z_\theta.
$$

Differentiating with respect to $x$ gives
$$
\nabla_x \log q_\theta(x)=-\nabla_x E_\theta(x),
$$
because $\log Z_\theta$ is constant with respect to $x$.

So the score can be learned without directly computing the partition function.

### Problem 7.4

Why is integration by parts central to score matching rather than a minor algebra trick?

### Solution

The ideal loss depends on the unknown data score $\nabla_x \log p_{\text{data}}(x)$, which we cannot evaluate directly from samples.

Integration by parts rewrites the troublesome cross term into a divergence of model quantities.

That transforms the objective into one that can be estimated from samples of the data alone.

So without integration by parts, ordinary score matching would not be practical in the way the lecture presents it.

### Problem 7.5

What is the conceptual difference between GAN discrimination and NCE discrimination?

### Solution

In a GAN, the negative class is a learned generator distribution that changes during training.

In NCE, the negative class is a fixed known noise distribution $q$.

So GANs use adversarial comparison against a moving opponent, while NCE uses classification against a static reference distribution to learn an unnormalized density model.

### Problem 7.6

Why is denoising score matching a natural precursor to diffusion models?

### Solution

Denoising score matching learns score information for noisy versions of the data distribution.

Diffusion models also work across a family of noisy intermediate distributions and require the score $\nabla_x \log p_t(x)$ at different noise levels to construct the reverse process.

So diffusion can be understood as extending denoising score estimation into a full generative procedure.

### Problem 7.7

What is the role of the corrector step in predictor-corrector sampling?

### Solution

The predictor step follows the reverse SDE numerically and gives a coarse global move.

The corrector step then performs a few local Langevin-style refinements at the current noise level using the learned score.

Its purpose is to locally improve or re-equilibrate the sample, not to introduce a separate learned model.

### Problem 7.8

What is the conceptual significance of the probability-flow ODE?

### Solution

It shows that score-based diffusion models are not tied only to a stochastic reverse SDE.

There is also a deterministic dynamical system whose marginal density evolution matches the diffusion process.

This provides:

- a deterministic sampling perspective
- a change-of-variables / likelihood interpretation
- a cleaner view of how the learned score field transports probability mass over time
