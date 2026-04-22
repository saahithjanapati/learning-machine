# 6. Variational Inference, EM, and VAEs

## Table of Contents

- [[#Big Picture]]
- [[#0. How To Use This Section]]
- [[#6.0 What Problem VI Is Solving]]
- [[#6.1 Two Variational Stories in This Course]]
- [[#6.2 Gibbs Variational Principle, Slowly]]
- [[#6.3 Inner Relaxations, Outer Relaxations, and Bethe]]
- [[#6.4 The ELBO, Slowly]]
- [[#6.5 Mean-Field VI and Coordinate Updates]]
- [[#6.6 Why KL Direction Matters]]
- [[#6.7 EM]]
- [[#6.8 Variational EM]]
- [[#6.9 VAEs]]
- [[#6.10 REINFORCE vs Reparameterization]]
- [[#6.11 What You Should Be Able To Say Out Loud]]
- [[#Formal Anchors]]
- [[#Worked Problems]]

## Big Picture

This section is about the optimization-based answer to hard inference.

Earlier in the course, when exact inference was hard, one answer was:

- build a Markov chain
- sample from it long enough
- use samples to approximate the target distribution

That was the MCMC story.

Variational inference is a different answer.

It says:

- do not try to represent the hard distribution exactly
- pick a simpler family of distributions
- optimize inside that family to get the best approximation you can

So the central sentence of the section is:

`variational inference turns hard probabilistic inference into optimization`

That sentence is short, but it hides a lot of moving parts.

This section is really about learning to keep four objects separate:

- the hard distribution you actually want
- the simpler family you are allowed to search over
- the optimization objective you can compute
- the tradeoff you pay for using a restricted family

If those four objects stay clear in your head, the rest of the formulas become much less intimidating.

## 0. How To Use This Section

Primary lecture coverage:

- `Lecture 13`
- `Lecture 15`
- `Lecture 16`

This section is one of the easiest places in the course to get lost in notation.

The reason is not that the ideas are impossible.
The reason is that multiple different distributions are floating around at the same time, and students often blur them together.

As you read, keep asking these questions repeatedly:

1. What is the hard distribution I wish I had?
2. What is the simpler distribution I am optimizing over?
3. What quantity is fixed and what quantity is being optimized?
4. Is this section about approximating a posterior, or about approximating a partition function?

If those four questions stay alive, the symbols stop feeling like random decoration.

## 6.0 What Problem VI Is Solving

Start with the most common setup.

You have:

- observed data $x$
- latent variables $z$
- model parameters $\theta$

The model specifies a joint distribution
$$
p_\theta(x,z).
$$

What would you often like to know?

Usually the posterior:
$$
p_\theta(z \mid x).
$$

That posterior answers the question:

if I have observed $x$, what should I believe about the hidden variables $z$?

### Why the posterior is often hard

By Bayes' rule,
$$
p_\theta(z \mid x)=\frac{p_\theta(x,z)}{p_\theta(x)}.
$$

The numerator is usually manageable.
The denominator is the difficult part:
$$
p_\theta(x)=\sum_z p_\theta(x,z)
\qquad\text{or}\qquad
p_\theta(x)=\int p_\theta(x,z)\,dz.
$$

That denominator is called the **evidence** or **marginal likelihood**.
It requires summing or integrating over all hidden-variable configurations.

So the core problem is:

`the posterior is conceptually simple, but the normalization needed to compute it exactly is often intractable`

### What VI does instead

Variational inference says:

- pick a simpler family of distributions $q$
- search inside that family for one that is close to the true posterior

So instead of computing $p_\theta(z \mid x)$ exactly, you solve an approximation problem:
$$
\text{choose } q(z) \text{ from an easy family to approximate } p_\theta(z \mid x).
$$

### The price and the benefit

The price is:

- you no longer search over all possible posteriors
- you only search inside a restricted family

The benefit is:

- optimization in a restricted family can be far easier than exact inference

### Three objects beginners often confuse

These are worth separating very explicitly.

#### 1. The model joint

$$
p_\theta(x,z)
$$

This is the generative model.
It tells you how data and latent variables fit together.

#### 2. The true posterior

$$
p_\theta(z \mid x)
$$

This is the ideal inference target.

#### 3. The variational approximation

$$
q(z)
\qquad\text{or}\qquad
q_\phi(z \mid x)
$$

This is the simpler approximation family you are optimizing over.

If you keep those three objects separate, the rest of the section becomes much easier.

### One concrete mental model

If the notation still feels slippery, imagine a simple mixture model.

- $x$ is an observed datapoint
- $z$ is the hidden cluster assignment
- $p_\theta(x,z)$ is the model saying how clusters generate observations
- $p_\theta(z \mid x)$ is the posterior question: which cluster probably generated this datapoint?
- $q(z)$ is your simplified approximation to that posterior when the exact answer is too hard

That is not the only model in the course, but it is a good mental picture for what all of this notation is trying to do.

## 6.1 Two Variational Stories in This Course

There are actually two related variational stories in the class.

Students often think "VI just means posterior approximation," but the course uses variational ideas in two places.

### Story 1: partition functions in undirected models

For an undirected model,
$$
p(x)=\frac{1}{Z}\exp(E(x)),
$$
the hard quantity is often the log partition function
$$
\log Z.
$$

That is not a posterior.
It is a normalization problem.

### Story 2: approximate posterior inference

For a latent-variable model,
$$
p_\theta(x,z),
$$
the hard quantity is often the posterior
$$
p_\theta(z \mid x).
$$

That is a posterior approximation problem.

### What is common between the two stories

They look different, but the same basic trick appears in both:

- introduce an auxiliary distribution $q$
- write a hard probabilistic quantity as an optimization problem involving expectations and entropy

So the unifying theme is:

`use optimization over distributions to cope with a hard probabilistic object`

That is why the section groups these topics together.

## 6.2 Gibbs Variational Principle, Slowly

This is the cleanest place to see the energy-plus-entropy viewpoint.

Suppose
$$
p(x)=\frac{1}{Z}\exp(E(x)).
$$

Then the Gibbs variational principle says
$$
\log Z
=
\max_q \left\{\mathbb{E}_q[E(x)] + H(q)\right\}.
$$

### What this means in plain English

The log partition function, which at first looks like a nasty global normalization constant, can be rewritten as the optimum of an optimization problem over distributions $q$.

That is the conceptual move:

`hard normalization quantity -> optimization problem over distributions`

### What the two terms are doing

The objective contains two pieces:

- $\mathbb{E}_q[E(x)]$
- $H(q)$

Read them slowly.

#### The expectation term

$$
\mathbb{E}_q[E(x)]
$$

This rewards putting probability mass on states with high score under the model's exponential form.

If you prefer the alternative notation
$$
p(x)\propto \exp(-\mathcal{E}(x)),
$$
then the same principle becomes
$$
\log Z=\max_q \left\{-\mathbb{E}_q[\mathcal{E}(x)] + H(q)\right\}.
$$

So the exact sign depends on whether the model is written with a positive score $E(x)$ or a negative energy $-\mathcal{E}(x)$.

#### The entropy term

$$
H(q)
$$

This rewards spread.
It discourages the optimizer from collapsing too aggressively onto a tiny set of states.

### The balancing act

So the optimizer is balancing two pressures:

- put mass on good states
- do not collapse too sharply unless the model really wants that

That energy-plus-entropy competition is one of the deepest recurring patterns in the whole class.

### Why this matters later

Even if you do not use the Gibbs variational principle directly on an exam, it teaches a way of thinking that keeps showing up:

- free energy
- mean-field variational inference
- Bethe approximations
- ELBO derivations

All of them are variations on the same general optimization template.

## 6.3 Inner Relaxations, Outer Relaxations, and Bethe

The Gibbs variational principle is elegant, but still too hard if you optimize over **all** distributions.

So the course relaxes the optimization problem.

This is where students often lose the lower-bound versus upper-bound story, so slow down here.

### Inner relaxation

An inner relaxation means:

- keep only a smaller feasible set
- optimize over fewer candidate distributions than the true problem allows

If the original problem is
$$
\max_q F(q),
$$
and you restrict to some smaller family $Q$, then you solve
$$
\max_{q\in Q} F(q).
$$

Because you are optimizing over fewer choices, the value cannot go above the true optimum.

So inner relaxations typically give **lower bounds**.

This is where mean-field lives.

### Why mean-field is an inner approximation

Mean-field says:

I will only consider factorized distributions, such as
$$
q(z)=\prod_i q_i(z_i).
$$

That is a restriction.
You are throwing away many possible joint distributions.

So the family becomes easier to optimize over, but the best value you get is lower than what you could get if you optimized over all distributions.

### Outer relaxation

An outer relaxation means:

- enlarge the feasible set
- allow objects that are easier to optimize over, even if they are not all valid full distributions

In graphical models, a common example is:

- instead of optimizing over globally consistent marginals
- optimize over locally consistent pseudomarginals

That set can be larger than the set of truly realizable marginals.

So the optimum can move above the true one.
That is why outer relaxations often give **upper bounds**.

### Bethe

Bethe is the subtle case.

On trees, the Bethe free-energy picture is exact.
On loopy graphs, it becomes approximate.

This is why Bethe often feels slippery:

- mean-field is easy to classify as an inner approximation
- Bethe is tied to belief propagation and is exact on trees
- but on loopy graphs it is not a clean always-lower-bound or always-upper-bound approximation

### What to remember for exams

If a question asks you to compare these three:

- mean-field: inner approximation, lower-bound behavior
- outer pseudomarginal relaxations: upper-bound behavior
- Bethe: exact on trees, approximate and less clean on loopy graphs

That is the conceptual summary you want.

## 6.4 The ELBO, Slowly

Now move from partition functions to posterior approximation.

This is the central derivation of the whole section.

Suppose you have:

- data $x$
- latent variables $z$
- model joint $p_\theta(x,z)$
- variational distribution $q(z)$

Define
$$
\mathcal{L}(q,\theta)=\mathbb{E}_q[\log p_\theta(x,z)-\log q(z)].
$$

This is the ELBO.

### Why is it called a lower bound?

Because of the identity
$$
\log p_\theta(x)
=
\mathcal{L}(q,\theta)
+
\mathrm{KL}\bigl(q(z)\,\|\,p_\theta(z \mid x)\bigr).
$$

Since KL divergence is always nonnegative,
$$
\mathcal{L}(q,\theta)\le \log p_\theta(x).
$$

So the ELBO is literally a lower bound on the log evidence.

### Slow derivation from Jensen

This derivation is worth understanding, not just memorizing.

Start with the evidence:
$$
\log p_\theta(x)=\log \int p_\theta(x,z)\,dz.
$$

Now multiply and divide by $q(z)$:
$$
\log p_\theta(x)
=
\log \int q(z)\frac{p_\theta(x,z)}{q(z)}\,dz.
$$

Now read that as an expectation under $q$:
$$
\log p_\theta(x)
=
\log \mathbb{E}_q\left[\frac{p_\theta(x,z)}{q(z)}\right].
$$

Now apply Jensen's inequality to the concave function $\log$:
$$
\log \mathbb{E}_q\left[\frac{p_\theta(x,z)}{q(z)}\right]
\ge
\mathbb{E}_q\left[\log \frac{p_\theta(x,z)}{q(z)}\right].
$$

So
$$
\log p_\theta(x)
\ge
\mathbb{E}_q[\log p_\theta(x,z)-\log q(z)].
$$

That right-hand side is exactly the ELBO:
$$
\mathcal{L}(q,\theta)=\mathbb{E}_q[\log p_\theta(x,z)-\log q(z)].
$$

### What this means conceptually

The ELBO is not an arbitrary objective somebody invented.
It is the Jensen lower bound that appears when you try to lower-bound the log evidence using an auxiliary distribution $q$.

### The KL-gap identity

The even more useful identity is
$$
\log p_\theta(x)
=
\mathcal{L}(q,\theta)
+
\mathrm{KL}\bigl(q(z)\,\|\,p_\theta(z \mid x)\bigr).
$$

This tells you exactly what the gap is.

It is not "some unknown slack."
It is:

- precisely the KL divergence between the variational distribution and the true posterior

### Why maximizing the ELBO makes sense

For fixed $x$ and fixed model parameters $\theta$, the quantity
$$
\log p_\theta(x)
$$
does not depend on $q$.

So if you maximize the ELBO over $q$, you are doing exactly the same thing as minimizing
$$
\mathrm{KL}\bigl(q(z)\,\|\,p_\theta(z \mid x)\bigr).
$$

That is the whole variational inference story in one sentence:

`maximize ELBO <=> minimize KL from q to the true posterior`

### How to read the ELBO itself

The ELBO is
$$
\mathcal{L}(q,\theta)=\mathbb{E}_q[\log p_\theta(x,z)]-\mathbb{E}_q[\log q(z)].
$$

So it is:

- expected log-joint under the variational distribution
- plus entropy of the variational distribution

That is the same energy-plus-entropy pattern again.

### One very common confusion

Students often ask:

"Are we optimizing only over $q$, or also over $\theta$?"

The answer depends on the task.

#### In pure inference

If the model parameters $\theta$ are already fixed, then you optimize over $q$ to approximate the posterior.

#### In learning with latent variables

If the model parameters are also unknown, then you often optimize over both:

- update $q$ so it better approximates the posterior under the current model
- update $\theta$ so the model fits the data better

That is exactly the bridge to EM, variational EM, and VAEs.

So keep this distinction in mind:

- inference only: optimize $q$
- learning with latent variables: optimize $q$ and $\theta$

## 6.5 Mean-Field VI and Coordinate Updates

Now suppose you make the approximation family especially simple:
$$
q(z)=\prod_i q_i(z_i).
$$

This is mean-field.

### Why people use mean-field

Because it gives you a tractable family and often turns one hard global optimization into many smaller updates.

### What you lose

You force the approximate posterior to factorize.
So if the true posterior has strong dependencies between latent variables, mean-field cannot represent them exactly.

That is the main approximation error built into the method.

### The coordinate update

The standard result is
$$
\log q_i^*(z_i)
=
\mathbb{E}_{q_{-i}}[\log p(x,z)] + \text{const}.
$$

This formula is famous because it looks intimidating even though its meaning is simple.

Read it slowly:

1. pick one factor $q_i$
2. pretend all the other variational factors are temporarily fixed
3. average the log-joint over those other factors
4. keep only the part that depends on $z_i$
5. exponentiate and normalize

### Why exponentiate appears

The coordinate update is written for
$$
\log q_i^*(z_i).
$$

Once you solve for the log of the optimal factor, you exponentiate to get the factor itself:
$$
q_i^*(z_i)\propto \exp\left(\mathbb{E}_{q_{-i}}[\log p(x,z)]\right).
$$

That is why these updates often look like:

- take an expected log-joint
- exponentiate
- normalize

It is not a mysterious ritual.
It is just because the clean coordinate solution is for the log of the factor.

### What "const" means

The term `const` means:

- anything that does not depend on $z_i$

It is there because after exponentiating and normalizing, terms independent of $z_i$ get absorbed into the normalization constant for $q_i$.

### Why graphical models help here

If the log-joint factorizes into local terms, then many terms do not involve $z_i$ at all.
So the coordinate update only needs the local terms that touch $z_i$.

That is why graphical structure and variational updates fit together naturally.

### The most important intuition

Mean-field is doing coordinate ascent on a lower bound.
Each factor takes a turn becoming the best response to all the others.

That is why the updates have a "local negotiation" feel:

- fix everyone else
- update one piece
- repeat

## 6.6 Why KL Direction Matters

One of the most important conceptual points in all of approximate inference is:

`the direction of KL matters`

The ELBO corresponds to minimizing
$$
\mathrm{KL}(q\,\|\,p),
$$
not
$$
\mathrm{KL}(p\,\|\,q).
$$

Those are genuinely different objectives.

### Why they are different

Remember the definition:
$$
\mathrm{KL}(q\,\|\,p)=\mathbb{E}_q\left[\log \frac{q}{p}\right].
$$

This means the expectation is taken under $q$.
So the objective mainly cares about regions where $q$ itself places mass.

That makes it strongly dislike placing mass where the true posterior $p$ is tiny.

### Practical consequence

When the true posterior is multimodal but the variational family is too simple, minimizing
$$
\mathrm{KL}(q\,\|\,p)
$$
often gives a **mode-seeking** approximation:

- it may sit on top of one mode
- it may underestimate uncertainty
- it may ignore other modes

### Contrast with $\mathrm{KL}(p\,\|\,q)$

If instead you minimize
$$
\mathrm{KL}(p\,\|\,q),
$$
the objective tends to be more **mass-covering**:

- it tries harder not to miss regions where the true distribution has mass
- it may end up spreading out too much

### The classic exam example

Suppose the true posterior is a symmetric mixture of two well-separated Gaussians, but the approximation family is a single Gaussian.

Then:

- minimizing $\mathrm{KL}(q\,\|\,p)$ often puts the single Gaussian on one mode
- minimizing $\mathrm{KL}(p\,\|\,q)$ often places a broad Gaussian between the modes

That exact contrast showed up in the practice exam material.

### Why this matters emotionally

Students often think:

"my variational approximation is bad, so VI must be broken."

Usually the right diagnosis is:

- the variational family was too simple
- the KL direction encouraged a particular kind of approximation error

That is a much more precise explanation.

## 6.7 EM

Expectation-Maximization is an alternating optimization method for latent-variable models.

It is easier to understand if you first remember the learning problem.

Suppose you want to optimize model parameters $\theta$ in a latent-variable model
$$
p_\theta(x,z).
$$

If the latent variables $z$ were observed, parameter learning would often be much easier.

If the parameters $\theta$ were fixed, posterior inference over $z$ would often be easier.

So EM alternates between those two easier subproblems.

### E-step

Compute the posterior over latent variables under the current parameters:
$$
p_{\theta^{old}}(z \mid x).
$$

### M-step

Update the parameters by maximizing the expected complete-data log-likelihood:
$$
Q(\theta,\theta^{old})
=
\mathbb{E}_{p_{\theta^{old}}(z \mid x)}[\log p_\theta(x,z)].
$$

### Why this is called "complete-data"

Because
$$
\log p_\theta(x,z)
$$
is the log-likelihood you would write if both observed variables and latent variables were visible.

The E-step fills in a distribution over the missing latent variables.
The M-step then optimizes as if you had that soft latent assignment information available.

### The big picture of EM

EM is:

- infer hidden variables under current parameters
- improve parameters under that inferred hidden-variable distribution
- repeat

### Why EM belongs in this section

Because EM can be understood as coordinate ascent on a lower-bound-style objective.
So it is very closely related to variational thinking, even though it is often taught separately.

### Soft assignments intuition

A very useful way to think about EM is:

- the E-step computes soft assignments of datapoints to latent explanations
- the M-step re-estimates parameters using those soft assignments

So EM is not pretending the hidden variable has been fully observed.
It is using a distribution over hidden possibilities and then learning from that distribution.

## 6.8 Variational EM

Now ask the obvious question:

what if the E-step itself is intractable?

That is exactly where variational EM enters.

### Ordinary EM

In ordinary EM, the E-step uses the exact posterior
$$
p_{\theta^{old}}(z \mid x).
$$

### Variational EM

In variational EM, you replace that exact posterior by a tractable approximation
$$
q(z).
$$

So the algorithm becomes:

1. update the variational distribution to better approximate the posterior
2. update the parameters using that variational distribution
3. repeat

### Why this is such a natural extension

EM already had the alternating structure:

- latent-variable update
- parameter update

Variational EM just says:

- if the latent-variable update is too hard, approximate it

So it is not a totally different worldview.
It is EM with a variational E-step.

### Why this matters practically

This is often the real reason VI shows up in machine learning systems:

- exact EM would be elegant
- but the posterior needed in the E-step is too hard
- so variational EM becomes the tractable replacement

### A good exam sentence

`EM uses the exact posterior in the E-step when that is tractable; variational EM uses an approximate posterior when it is not`

That sentence is short, but it is very high yield.

## 6.9 VAEs

A variational autoencoder is a neural latent-variable model trained using the ELBO.

To really understand VAEs, keep three objects separate.

### 1. The prior

Usually something simple, such as
$$
p(z)=\mathcal{N}(0,I).
$$

### 2. The decoder / generative model

This is
$$
p_\theta(x \mid z).
$$

It tells you how latent variables generate observations.

### 3. The encoder / variational posterior

This is
$$
q_\phi(z \mid x).
$$

It predicts an approximate posterior over $z$ given an observation $x$.

### Why VAEs are special

Classical variational inference often imagines doing a separate optimization over $q$ for each datapoint.

That is expensive.

A VAE uses **amortization**:

- instead of solving a fresh optimization problem for each datapoint
- learn a neural network that maps $x$ directly to the parameters of $q_\phi(z \mid x)$

So the encoder is a learned inference machine.

### The usual VAE ELBO

For one datapoint $x$, the ELBO is often written as
$$
\mathbb{E}_{q_\phi(z \mid x)}[\log p_\theta(x \mid z)]
-
\mathrm{KL}\bigl(q_\phi(z \mid x)\,\|\,p(z)\bigr).
$$

This decomposition is very useful conceptually.

#### The first term

$$
\mathbb{E}_{q_\phi(z \mid x)}[\log p_\theta(x \mid z)]
$$

This is the reconstruction or data-fit term.
It says:

- choose latent variables that help explain the observation well

#### The second term

$$
\mathrm{KL}\bigl(q_\phi(z \mid x)\,\|\,p(z)\bigr)
$$

This is the regularization term.
It says:

- do not let the approximate posterior drift too far from the prior

### What is being optimized over a dataset

For a whole dataset $x^{(1)},\dots,x^{(N)}$, training usually sums the per-datapoint ELBOs:
$$
\sum_{n=1}^N
\left[
\mathbb{E}_{q_\phi(z \mid x^{(n)})}[\log p_\theta(x^{(n)} \mid z)]
-
\mathrm{KL}\bigl(q_\phi(z \mid x^{(n)})\,\|\,p(z)\bigr)
\right].
$$

So a VAE is not doing one isolated inference problem.
It is learning:

- global decoder parameters $\theta$
- global encoder parameters $\phi$

across many datapoints at once.

### Why the name "autoencoder" can mislead people

The word "autoencoder" makes some students think the model is just learning to copy input to output.

That is too shallow.

A VAE is doing something much more probabilistic:

- posit a latent-variable generative story
- learn an approximate posterior over latent variables
- train both pieces through an ELBO objective

So the name is historically useful, but the underlying idea is probabilistic latent-variable modeling, not just compression-and-reconstruction.

### So what is a VAE, in one sentence?

A VAE is:

- a latent-variable generative model
- trained with the ELBO
- using an encoder network to amortize posterior approximation

That is the compact, correct summary.

## 6.10 REINFORCE vs Reparameterization

Once you write down the VAE objective, the next question is:

how do you differentiate it with respect to the encoder parameters $\phi$?

The difficulty is that the ELBO contains an expectation over a random latent variable.

There are two main estimator families in this section.

### REINFORCE / score-function estimator

The key identity is
$$
\nabla_\phi \mathbb{E}_{q_\phi(z)}[f(z)]
=
\mathbb{E}_{q_\phi(z)}[f(z)\nabla_\phi \log q_\phi(z)].
$$

This is powerful because it does not require differentiating through the sampled value $z$ itself.

So REINFORCE is very general.

### What REINFORCE needs

You need to be able to:

- sample from $q_\phi$
- evaluate $\log q_\phi$
- differentiate $\log q_\phi$ with respect to $\phi$

### Strength and weakness

Strength:

- works even for discrete latent variables

Weakness:

- often has high variance

### Reparameterization trick

The other strategy is to rewrite the random variable as
$$
z=g_\phi(\epsilon,x),
\qquad
\epsilon \sim p(\epsilon),
$$
where $\epsilon$ comes from a fixed, parameter-free noise distribution.

Then the randomness is isolated in $\epsilon$, and the map from $(\epsilon,x)$ to $z$ is differentiable.

This lets you backpropagate through the sample path itself.

### Why reparameterization is usually nicer

When available, it often gives lower-variance gradients because it turns the stochastic node into a differentiable transformation.

### When it is available

It is especially natural for continuous latent variables such as Gaussians.

For example, if
$$
q_\phi(z \mid x)=\mathcal{N}(\mu_\phi(x), \Sigma_\phi(x)),
$$
you can sample by writing
$$
z=\mu_\phi(x)+L_\phi(x)\epsilon,
\qquad
\epsilon\sim \mathcal{N}(0,I).
$$

### The practice-exam takeaway

The practice exam was testing this exact logic.

If the latent variable is discrete and there is no continuous differentiable reparameterization, REINFORCE applies directly and reparameterization does not.

If there is a clean differentiable reparameterization, then pathwise gradients are usually the preferred tool.

### A fast exam decision rule

When deciding which estimator applies, ask:

1. Can I write the latent variable as a differentiable transformation of fixed noise?
2. Can gradients flow through that transformation?

If yes, reparameterization is usually the clean answer.

If no, but I can still sample from $q_\phi$ and differentiate $\log q_\phi$, then REINFORCE is the fallback.

### One clean summary

- REINFORCE: more general, often noisier
- reparameterization: less general, often cleaner and lower variance when available

## 6.11 What You Should Be Able To Say Out Loud

By the end of this section, you should be able to explain the following in plain English:

- Variational inference replaces a hard inference problem by an optimization problem over a simpler family of distributions.
- The hard object is usually the posterior $p_\theta(z \mid x)$ or the log partition function $\log Z$.
- The ELBO is a lower bound on $\log p_\theta(x)$, and its gap to the true log evidence is exactly a KL divergence to the posterior.
- Mean-field VI uses a factorized family, which makes optimization easier but can badly miss posterior dependencies.
- The direction of KL matters; $\mathrm{KL}(q\|p)$ and $\mathrm{KL}(p\|q)$ do not encourage the same approximation behavior.
- EM alternates between latent-variable inference and parameter updates.
- Variational EM is EM with an approximate posterior in the E-step.
- A VAE is a neural latent-variable model trained with the ELBO and amortized inference.
- REINFORCE and reparameterization are two different gradient-estimation strategies for objectives with latent-variable expectations.

## Formal Anchors

These are the formal identities and statements that hold the section together.

### Gibbs variational principle

For
$$
p(x)=\frac{1}{Z}\exp(E(x)),
$$
we have
$$
\log Z=\max_q \left\{\mathbb{E}_q[E(x)] + H(q)\right\}.
$$

If instead
$$
p(x)\propto \exp(-\mathcal{E}(x)),
$$
the equivalent form is
$$
\log Z=\max_q \left\{-\mathbb{E}_q[\mathcal{E}(x)] + H(q)\right\}.
$$

### ELBO from Jensen

Starting from
$$
\log p_\theta(x)
=
\log \int q(z)\frac{p_\theta(x,z)}{q(z)}\,dz,
$$
Jensen gives
$$
\log p_\theta(x)
\ge
\mathbb{E}_q[\log p_\theta(x,z)-\log q(z)].
$$

The right-hand side is the ELBO.

### KL-gap identity

$$
\log p_\theta(x)
=
\mathcal{L}(q,\theta)
+
\mathrm{KL}\bigl(q(z)\,\|\,p_\theta(z \mid x)\bigr).
$$

So maximizing the ELBO is equivalent to minimizing the KL from $q$ to the true posterior.

### Mean-field coordinate update

For
$$
q(z)=\prod_i q_i(z_i),
$$
the coordinate optimum satisfies
$$
\log q_i^*(z_i)
=
\mathbb{E}_{q_{-i}}[\log p(x,z)] + \text{const}.
$$

### EM Q-function

The EM M-step maximizes
$$
Q(\theta,\theta^{old})
=
\mathbb{E}_{p_{\theta^{old}}(z \mid x)}[\log p_\theta(x,z)].
$$

### VAE ELBO

For one datapoint,
$$
\mathbb{E}_{q_\phi(z \mid x)}[\log p_\theta(x \mid z)]
-
\mathrm{KL}\bigl(q_\phi(z \mid x)\,\|\,p(z)\bigr).
$$

### REINFORCE identity

$$
\nabla_\phi \mathbb{E}_{q_\phi(z)}[f(z)]
=
\mathbb{E}_{q_\phi(z)}[f(z)\nabla_\phi \log q_\phi(z)].
$$

## Worked Problems

### Problem 6.1

What is the difference in philosophy between MCMC and variational inference?

### Solution

MCMC approximates a target distribution by building a Markov chain whose long-run samples come from that target.

Variational inference instead chooses a simpler family of distributions and optimizes inside that family to approximate the target.

So MCMC is sampling-based, while VI is optimization-based.

### Problem 6.2

Why is the ELBO a lower bound on $\log p_\theta(x)$?

### Solution

Because
$$
\log p_\theta(x)
=
\mathcal{L}(q,\theta)
+
\mathrm{KL}\bigl(q(z)\,\|\,p_\theta(z \mid x)\bigr),
$$
and KL divergence is always nonnegative.

So
$$
\mathcal{L}(q,\theta)\le \log p_\theta(x).
$$

### Problem 6.3

Why does maximizing the ELBO improve the variational approximation?

### Solution

For fixed $x$ and fixed $\theta$, the quantity $\log p_\theta(x)$ does not depend on $q$.
So increasing the ELBO is exactly the same as decreasing
$$
\mathrm{KL}\bigl(q(z)\,\|\,p_\theta(z \mid x)\bigr).
$$

That means the variational approximation gets closer to the true posterior in the KL sense used by VI.

### Problem 6.4

Why is mean-field VI usually easier computationally but weaker statistically?

### Solution

It is easier because the factorized family
$$
q(z)=\prod_i q_i(z_i)
$$
reduces a hard global optimization over arbitrary distributions to a structured optimization over simpler factors.

It is weaker because the factorization may destroy dependencies that are actually present in the true posterior.

### Problem 6.5

What practical behavior can result when the true posterior is multimodal but the approximation family is unimodal and VI minimizes $\mathrm{KL}(q\|p)$?

### Solution

The approximation may lock onto one mode and ignore the others.

This happens because $\mathrm{KL}(q\|p)$ strongly penalizes placing mass where the true posterior is tiny, but is more tolerant of failing to cover all regions where the true posterior has mass.

### Problem 6.6

What is the conceptual difference between EM and variational EM?

### Solution

EM uses the exact posterior in the E-step when that posterior is tractable.

Variational EM keeps the same alternating structure but replaces the exact posterior with a variational approximation because the exact E-step is intractable.

### Problem 6.7

What makes a VAE different from plain classical variational inference?

### Solution

A VAE combines:

- a latent-variable generative model
- ELBO-based training
- an encoder network that amortizes inference across datapoints

So instead of solving a fresh optimization problem for each datapoint's variational distribution, the encoder learns to predict approximate posterior parameters directly from the observation.

### Problem 6.8

When is REINFORCE preferred conceptually, and when is reparameterization preferred conceptually?

### Solution

REINFORCE is the direct option when you can sample from $q_\phi$ and differentiate $\log q_\phi$, even if the latent variable is discrete or not continuously reparameterizable.

Reparameterization is preferred when the latent variable can be written as a differentiable transformation of fixed noise, because this usually gives lower-variance gradients.

### Problem 6.9

What do the two terms in the usual VAE ELBO mean?

### Solution

The term
$$
\mathbb{E}_{q_\phi(z \mid x)}[\log p_\theta(x \mid z)]
$$
is the data-fit or reconstruction term.

The term
$$
\mathrm{KL}\bigl(q_\phi(z \mid x)\,\|\,p(z)\bigr)
$$
keeps the approximate posterior from wandering too far from the prior.

So the VAE balances:

- explaining the data well
- keeping the latent representation organized relative to the prior
