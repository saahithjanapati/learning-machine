# 5. MCMC and Advanced Sampling

## Table of Contents

- [[#Big Picture]]
- [[#0. How To Use This Section]]
- [[#5.0 What Problem MCMC Is Solving]]
- [[#5.1 From Monte Carlo to MCMC]]
- [[#5.2 What a Markov Chain Actually Is]]
- [[#5.3 Stationarity, Irreducibility, Aperiodicity, and Why They Matter]]
- [[#5.4 Detailed Balance and Reversibility]]
- [[#5.5 Metropolis-Hastings, Slowly and Rigorously]]
- [[#5.6 Gibbs Sampling, Slowly and Rigorously]]
- [[#5.7 Burn-In, Mixing, Autocorrelation, and Practical Accuracy]]
- [[#5.8 Why Mixing Can Be Slow]]
- [[#5.9 Langevin, MALA, and Gradient-Informed Proposals]]
- [[#5.10 Hamiltonian Monte Carlo]]
- [[#5.11 Tempering and Annealing Ideas]]
- [[#5.12 What You Should Be Able To Say Out Loud]]
- [[#Formal Anchors]]
- [[#Worked Problems]]

## Big Picture

This section is about the sampling-based answer to hard inference.

Earlier in the course, the ideal story was:

- write down the target distribution you care about
- compute marginals or expectations from it

But in many realistic graphical models, that is too expensive.

The target distribution may be:

- a posterior distribution $p(z \mid x)$
- an undirected model $p(x) \propto \tilde{p}(x)$ with an intractable partition function
- a very high-dimensional distribution where direct summation or exact sampling is impossible

MCMC says:

- do not try to sample independently from the target in one shot
- instead, build a random process that moves through state space
- design that process so that its long-run distribution is the target

So the central sentence of the section is:

`MCMC approximates hard inference by building a Markov chain whose long-run behavior matches the target distribution`

That sounds short, but there are really two separate questions hiding inside it:

1. **Correctness:** does the chain have the right stationary distribution?
2. **Efficiency:** does the chain get there fast enough to be useful?

Most beginner confusion comes from mixing up those two questions.

A chain can be:

- mathematically correct
- but practically terrible

because it mixes too slowly.

So as you read, keep asking:

- why does this chain preserve the target?
- why might it still explore the target badly?

That distinction is the backbone of the whole section.

## 0. How To Use This Section

Primary lecture coverage:

- `Lecture 9`
- `Lecture 11`

This section introduces a lot of vocabulary that can feel abstract on first contact:

- stationary distribution
- irreducible
- aperiodic
- detailed balance
- Metropolis-Hastings
- Gibbs
- Langevin / MALA
- HMC
- tempering

The safest way to stay oriented is to keep the following mental checklist alive.

For any sampling method, ask:

1. What target distribution am I trying to sample from?
2. What transition rule moves me from the current state to the next state?
3. Why does this transition rule preserve the target?
4. Why might the chain still mix slowly?

If those four questions are clear, the formulas stop feeling like disconnected tricks.

## 5.0 What Problem MCMC Is Solving

Suppose there is a target distribution $\pi(x)$ you care about.

You might want:

- a marginal probability
- an expectation $\mathbb{E}_\pi[f(X)]$
- a probability of an event
- a posterior summary

If you had i.i.d. samples
$x^{(1)}, \dots, x^{(N)} \sim \pi$,
then many of these quantities would be easy to estimate.

For example,
$$
\mathbb{E}_\pi[f(X)]
\approx
\frac{1}{N}\sum_{i=1}^N f(x^{(i)}).
$$

So the hard inference problem often becomes a sampling problem:

**How do we obtain samples from the target distribution $\pi$?**

### Why direct sampling is often unavailable

In easy cases, we can sample directly:

- inverse-CDF sampling in simple one-dimensional settings
- ancestral sampling in a DAG when all conditionals are tractable
- exact sampling from simple standard distributions

But many graphical-model targets are not like that.

Common obstacles:

- the distribution is only known up to a normalizing constant
- the state space is enormous
- the conditionals are coupled in a complicated way
- the target is concentrated on a tiny region of a high-dimensional space

This is exactly where MCMC enters.

## 5.1 From Monte Carlo to MCMC

Before MCMC, it helps to remember the plain Monte Carlo story.

### Ordinary Monte Carlo

If $X \sim \pi$, then
$$
\mathbb{E}_\pi[f(X)]
=
\int f(x)\pi(x)\,dx
$$
can be approximated by averaging $f(X)$ over samples from $\pi$.

That is conceptually simple.

The difficult part is not the averaging.
The difficult part is getting the samples.

### Why importance sampling is not always enough

Another standard idea is:

- sample from some easier proposal $q$
- reweight by $\pi(x)/q(x)$

This can work well in moderate dimension if $q$ is close to $\pi$.

But it can fail badly if:

- $q$ misses important high-probability regions of $\pi$
- the weights become extremely variable
- the dimension is high and “typical” regions under $q$ and $\pi$ barely overlap

The advanced-MCMC lecture emphasized this exact issue in high dimension:

- proposals must match the target reasonably well
- otherwise successful moves or informative weights become rare

### What MCMC changes

MCMC does not try to generate a perfect i.i.d. sample from $\pi$ in one shot.

Instead it builds a sequence:
$$
X_0, X_1, X_2, \dots
$$
where each new sample is generated from the previous one.

That dependence sounds like a disadvantage, and in some ways it is.
But it is also what makes the method flexible.

The chain can:

- locally explore high-probability regions
- use the current position to propose more plausible next positions
- avoid needing an explicit global sampler

So the price is dependence.
The reward is tractable sampling in hard problems.

## 5.2 What a Markov Chain Actually Is

A Markov chain is a random process whose next state depends only on the current state.

If the current state is $x$, the transition rule gives a distribution over the next state $y$.

In discrete notation:
$$
P(x,y)=\Pr(X_{t+1}=y \mid X_t=x).
$$

In continuous spaces, we speak of a transition kernel rather than a finite matrix, but the idea is the same.

### Plain-English interpretation

At each step:

- you are currently at $x$
- you apply a randomized transition rule
- you move to some next state $y$

That is all.

### Why the Markov property is useful

If the next move depended on the whole history, analyzing the process would be much harder.

The Markov property gives a clean local description:

- current state
- local transition rule
- repeated indefinitely

This is exactly why MCMC methods are usually specified as “at state $x$, propose or sample the next state in the following way.”

### Transition rule versus target distribution

One of the most important conceptual separations in MCMC is this:

- $\pi$ is the target distribution we want
- $P$ is the transition rule we design

We do **not** choose the target.
The problem gives us the target.

We choose the chain.

So MCMC design is the art of choosing $P$ so that $\pi$ emerges as the long-run distribution.

## 5.3 Stationarity, Irreducibility, Aperiodicity, and Why They Matter

These words matter because they answer the correctness question.

### Stationarity

A distribution $\pi$ is stationary for transition kernel $P$ if one step of the chain leaves $\pi$ unchanged.

In symbols:
$$
\pi P = \pi.
$$

In the discrete case, that means
$$
\sum_x \pi(x)P(x,y)=\pi(y)
\quad\text{for every } y.
$$

### What stationarity means in plain English

If the current state already has distribution $\pi$, then after one more step it still has distribution $\pi$.

So $\pi$ is an equilibrium distribution of the chain.

This is the minimum correctness property we need.

If $\pi$ is not stationary, then the chain is not even preserving the target we care about.

### But stationarity alone is not enough

A chain can have a stationary distribution and still be useless.

Why?

Because we do not start in stationarity.

We start from some arbitrary initial state $X_0$.

So we also need the chain to actually move toward its stationary behavior from where we begin.

This is where irreducibility and aperiodicity enter.

### Irreducibility

Irreducible means:

- from any state, the chain can eventually reach any other state with positive probability

Plain English:

the state space is all one communicating piece.

If the chain is not irreducible, then different parts of the state space may be permanently disconnected.

That is disastrous for sampling, because the chain may get trapped in the component where it started.

### Aperiodicity

Aperiodic means:

- the chain is not locked into a rigid cycle

Plain English:

it is not forced to alternate forever in a clock-like rhythm.

A simple bad example is a chain that deterministically flips between two states every step.
That chain may have a stationary distribution, but the actual trajectory oscillates.

### Standard theorem-level takeaway

For finite-state chains, irreducibility plus aperiodicity gives the familiar convergence story:

- there is a unique stationary distribution
- the chain converges to it from any starting state

This is the basic ergodic picture the course keeps leaning on.

### Why exam questions ask about these properties

Because they are a shortcut for the big conceptual question:

`does this chain actually converge to one well-defined long-run target, from wherever I start?`

That is the real meaning behind the vocabulary.

## 5.4 Detailed Balance and Reversibility

Detailed balance is the condition
$$
\pi(x)P(x,y)=\pi(y)P(y,x).
$$

At first glance this can look like a random algebra trick.
It is better to interpret it as a probability-flow statement.

### Flow interpretation

Under the distribution $\pi$:

- the amount of probability mass flowing from $x$ to $y$
- exactly matches the amount flowing from $y$ to $x$

So every pairwise flow is perfectly balanced.

That is why the chain is called **reversible** when detailed balance holds:

- forward-time flow
- and reverse-time flow

match under stationarity.

### Why detailed balance is useful

Because it gives an easy proof of stationarity.

Indeed, summing the detailed-balance identity over $x$ gives
$$
\sum_x \pi(x)P(x,y)
=
\sum_x \pi(y)P(y,x)
=
\pi(y)\sum_x P(y,x)
=
\pi(y).
$$

So detailed balance implies stationarity.

### Important warning

Detailed balance is:

- a very convenient sufficient condition
- not a necessary condition

Some valid chains preserve the target without being reversible.

This matters because students sometimes overlearn the wrong sentence:

“A valid MCMC method must satisfy detailed balance.”

That is false.

The correct sentence is:

“Detailed balance is a common and very useful way to prove stationarity.”

### Why reversibility is so common in MCMC

Because it makes design easier.

Instead of checking the full stationarity equation directly, we can often engineer a transition rule so that the pairwise balance equation holds.

Metropolis-Hastings is the canonical example of this design strategy.

## 5.5 Metropolis-Hastings, Slowly and Rigorously

Metropolis-Hastings is one of the most important generic MCMC constructions.

It solves a very practical problem:

- you know a target $\pi(x)$
- you know how to propose moves from an easier proposal $q(x,y)$
- but that proposal alone does not preserve $\pi$

So MH adds an accept/reject correction.

### Step 1: propose

At current state $x$, draw a candidate $y$ from proposal distribution $q(x,y)$.

### Step 2: accept or reject

Accept the proposal with probability
$$
\alpha(x,y)
=
\min\left(1,\frac{\pi(y)q(y,x)}{\pi(x)q(x,y)}\right).
$$

If accepted, move to $y$.
If rejected, stay at $x$.

### Why “stay put” matters

Students often mentally erase the reject case, but it is essential.

The true transition rule is:

- move to $y$ with probability $q(x,y)\alpha(x,y)$
- remain at $x$ with the leftover probability

That self-loop is part of the chain.
Without it, the row probabilities would not sum to one.

### Why the acceptance ratio has this shape

It is chosen so that detailed balance holds.

For $x \neq y$, the off-diagonal transition probability is
$$
P(x,y)=q(x,y)\alpha(x,y).
$$

Now compare the two flows:
$$
\pi(x)q(x,y)\alpha(x,y)
\quad\text{and}\quad
\pi(y)q(y,x)\alpha(y,x).
$$

The specific choice
$$
\alpha(x,y)
=
\min\left(1,\frac{\pi(y)q(y,x)}{\pi(x)q(x,y)}\right)
$$
makes these equal.

That is the whole design principle.

### Intuition behind the ratio

The ratio
$$
\frac{\pi(y)q(y,x)}{\pi(x)q(x,y)}
$$
compares:

- how much the target prefers $y$ over $x$
- and how asymmetric the proposal is between $x \to y$ and $y \to x$

If $y$ is much better under the target, it will often be accepted.
If $q$ proposes $x \to y$ much more often than $y \to x$, the correction compensates for that asymmetry.

So MH is:

- propose according to something convenient
- correct for the mismatch so the target is preserved

### Why MH is especially useful for undirected models

Often the target is only known up to proportionality:
$$
\pi(x)=\frac{1}{Z}\tilde{\pi}(x).
$$

Then the acceptance ratio becomes
$$
\frac{\pi(y)q(y,x)}{\pi(x)q(x,y)}
=
\frac{\tilde{\pi}(y)q(y,x)}{\tilde{\pi}(x)q(x,y)},
$$
because $Z$ cancels.

This is one of the most important practical facts in the course.

You do **not** need the partition function to run MH.

### Symmetric proposal special case

If $q(x,y)=q(y,x)$, then
$$
\alpha(x,y)
=
\min\left(1,\frac{\pi(y)}{\pi(x)}\right).
$$

That is random-walk Metropolis-Hastings.

So in the symmetric case:

- propose a local move
- accept it if it raises probability
- maybe still accept it if it lowers probability, but only with the appropriate probability

That controlled willingness to move downhill is exactly what prevents the method from collapsing into optimization.

### Independence sampler special case

If the proposal does not depend on the current state, so
$$
q(x,y)=r(y),
$$
then
$$
\alpha(x,y)
=
\min\left(1,\frac{\pi(y)r(x)}{\pi(x)r(y)}\right).
$$

This looks simple algebraically, but in high dimension it can fail badly if $r$ is not close to the target.

That is one of the recurring course themes:

- correctness is easy to write down
- good mixing is much harder

## 5.6 Gibbs Sampling, Slowly and Rigorously

Gibbs sampling is the cleanest special case of MCMC in this section.

It assumes:

- the full target $\pi(x_1,\dots,x_d)$ is hard to sample from directly
- but the conditional distributions $\pi(x_i \mid x_{-i})$ are easy to sample from

Then Gibbs updates one block at a time.

### Single-coordinate Gibbs

Let the current state be
$$
x=(x_1,\dots,x_d).
$$

Pick coordinate $i$, and sample
$$
x_i' \sim \pi(x_i \mid x_{-i}).
$$

Then set
$$
x'=(x_1,\dots,x_{i-1},x_i',x_{i+1},\dots,x_d).
$$

So Gibbs says:

- freeze all other coordinates
- resample one coordinate from the exact conditional given the rest

### Why Gibbs feels simpler than MH

Because there is no explicit accept/reject step.

The move is already perfectly matched to the target conditional.

That is why Gibbs often feels like:

- less algebra
- more direct use of model structure

### Why the acceptance probability is effectively 1

The lecture explicitly frames Gibbs as a special case of MH.

If the proposal for coordinate $i$ is
$$
q(x,y)=\pi(y_i \mid x_{-i})
$$
for states $x$ and $y$ that differ only in coordinate $i$, then the MH ratio becomes
$$
\frac{\pi(y)q(y,x)}{\pi(x)q(x,y)}
=
\frac{\pi(y)\pi(x_i \mid y_{-i})}{\pi(x)\pi(y_i \mid x_{-i})}.
$$

But $x_{-i}=y_{-i}$, so both conditionals refer to the same conditioning context.

Using
$$
\pi(x)=\pi(x_i \mid x_{-i})\pi(x_{-i}),
\qquad
\pi(y)=\pi(y_i \mid x_{-i})\pi(x_{-i}),
$$
the ratio simplifies to $1$.

So Gibbs can be viewed as MH with always-accepted proposals.

### Random-scan versus systematic-scan

There are two common ways to choose the coordinate:

- random-scan Gibbs: choose a coordinate at random each step
- systematic-scan Gibbs: cycle through coordinates in a fixed order

Random-scan is easier to analyze as a single reversible kernel.
Systematic-scan often still preserves the target, but the composed full sweep need not be reversible.

This is exactly the sort of subtlety the course likes:

- preserving the target
- and satisfying detailed balance

are not the same thing.

### Block Gibbs

Sometimes updating one coordinate at a time mixes too slowly.

Then we may resample a block:
$$
x_B' \sim \pi(x_B \mid x_{-B}).
$$

This is block Gibbs.

The same idea applies:

- hold the rest fixed
- exactly sample a conditional

but now for a larger chunk of the state.

This can help when variables are strongly coupled.

## 5.7 Burn-In, Mixing, Autocorrelation, and Practical Accuracy

Now we move from correctness to usefulness.

Even if a chain has the right stationary distribution, practical estimation still has three major issues:

- initial bias
- slow exploration
- correlated samples

### Burn-in

If the chain starts at a strange initial state, the early samples may reflect the starting point more than the target.

That is why practitioners often discard an initial segment of the trajectory.

This is called **burn-in**.

The purpose is:

- not to “make the method correct”
- but to reduce initialization bias before averaging

### Mixing

Mixing refers to how fast the chain forgets where it started and begins to behave like draws from stationarity.

Fast mixing means:

- from different starting states
- after a modest number of steps
- the chain’s distribution looks close to $\pi$

Slow mixing means the opposite.

### Autocorrelation

Even after burn-in, MCMC samples are usually dependent.

If the chain moves only a little at each step, then

- $X_t$
- and $X_{t+1}$

look similar.

That means the sample average
$$
\frac{1}{N}\sum_{t=1}^N f(X_t)
$$
uses $N$ dependent observations, not $N$ independent ones.

So the estimator can still be consistent, but its variance is worse than in the i.i.d. case.

### Effective sample size intuition

People often say a highly correlated chain has a small effective sample size.

The idea is:

- you may have generated many states
- but because they are strongly correlated
- they contain much less information than the same number of i.i.d. draws

This is why “more MCMC samples” is not automatically the same as “more useful information.”

### The practical moral

Correct MCMC requires:

- the right stationary distribution

Useful MCMC requires:

- decent mixing
- tolerable autocorrelation
- enough computation to average meaningfully

That is why advanced proposals like MALA and HMC matter.
They are not fixing correctness.
They are trying to fix exploration.

## 5.8 Why Mixing Can Be Slow

The advanced-sampling lecture emphasizes that there is no universal silver bullet for mixing analysis.
But there are recurring structural reasons chains mix slowly.

### 1. Multimodality

Suppose the target has multiple separated high-probability regions.

Then a local sampler may:

- wander around one mode for a long time
- almost never cross the low-probability barrier to another mode

This is a bottleneck.

The lecture phrases this in terms of poor conductance:

- a set $S$ has large stationary mass
- but the transition rule rarely leaves $S$

That kind of geometry causes slow global exploration.

### 2. High dimensionality

In high dimension, a proposal must be surprisingly well matched to the target to succeed often.

Why?

Because “typical” points under the target live in a very special region.

If the proposal ignores that geometry, it may keep suggesting states that are:

- too far away
- off the typical set
- or simply implausible under the target

Then acceptance probabilities become tiny, or the moves become so small that exploration is painfully slow.

The lecture puts this nicely:

- in high dimension there are many directions to move
- blindly moving in all directions equally is often a bad idea

### 3. Bad step-size choices

For random-walk proposals:

- too large a step means most proposals land in bad regions and are rejected
- too small a step means almost every proposal is accepted, but the chain crawls

So a high acceptance rate is not automatically good.
You also need the moves to go somewhere meaningful.

### 4. Strong dependence structure

If coordinates are strongly coupled, then one-at-a-time local updates can be very inefficient.

This is a common reason Gibbs slows down:

- each coordinate update is easy
- but the chain changes the global configuration only very gradually

### 5. Local methods see only local geometry

Random-walk MH and ordinary Gibbs are local.

They ask:

- where can I move next from here?

But the hard problem is often global:

- where are the other important regions of the target?

That mismatch is why local MCMC can get trapped.

## 5.9 Langevin, MALA, and Gradient-Informed Proposals

The lecture’s next idea is:

if the target lives in continuous space and we can differentiate its energy, why should we keep proposing moves blindly?

Suppose
$$
\pi(x)\propto \exp(-E(x)).
$$

Then lower energy means higher probability.

So it is natural to try proposals that move in the direction of lower energy.

### Pure gradient descent is not a sampler

The most naive idea would be:
$$
x_{t+1}=x_t-\eta \nabla E(x_t).
$$

That is optimization, not sampling.

It deterministically pushes the state toward a mode.

If you run only this rule, you do not explore the full target distribution.
You collapse toward high-probability regions and stay there.

So we need randomness as well.

### Langevin idea

Add Gaussian noise:
$$
x_{t+1}
=
x_t-\eta \nabla E(x_t)+\sqrt{2\eta}\,\xi_t,
\qquad
\xi_t \sim \mathcal{N}(0,I).
$$

Now the proposal has two pieces:

- a drift term pulling toward lower energy
- a noise term preventing deterministic collapse

This is the basic Langevin idea.

### Why this makes intuitive sense

The gradient term improves proposal quality.

Instead of moving equally in all directions, it biases the move toward regions where the target density is larger.

So compared with a blind random walk:

- proposals are more informed
- acceptance can improve
- exploration can be less wasteful

### Unadjusted Langevin versus MALA

There are two related stories students often blur together.

#### Unadjusted Langevin

Treat the Langevin step itself as the chain.

In the infinitesimal-step limit, the corresponding continuous-time process has the desired stationary distribution.

But for finite step size, discretization error means the exact target is no longer preserved.

#### MALA

Use the Langevin move only as a **proposal**, then apply a Metropolis-Hastings accept/reject correction.

That is MALA:

- propose using gradient plus noise
- correct with MH

So MALA gets:

- smarter proposals than random-walk MH
- exact target preservation via the MH correction

### Why MALA can still struggle

MALA is better than a blind random walk, but it is still a local method.

It still can suffer from:

- multimodal bottlenecks
- bad step-size tuning
- poor global exploration

That is the bridge to HMC.

## 5.10 Hamiltonian Monte Carlo

HMC is one of the most important “fix the random-walk behavior” ideas in modern MCMC.

The lecture’s conceptual move is:

- if local random proposals are too diffusive and inefficient
- enlarge the state space and move through it in a more coherent way

### Step 1: lift the state space

Suppose our target is
$$
\pi(x)\propto \exp(-E(x)).
$$

Introduce an auxiliary momentum variable $v$, and define an extended density
$$
\pi(x,v)\propto \exp(-H(x,v)),
$$
where
$$
H(x,v)=E(x)+K(v).
$$

Usually $K(v)$ is chosen so that $v$ is Gaussian.

Then the extended density factorizes into:

- the original target over $x$
- an easy momentum distribution over $v$

So if we can sample from $\pi(x,v)$, then by discarding $v$ we recover samples from the desired $\pi(x)$.

This is why the practice exam emphasizes that HMC lives on an **extended state space**, but the marginal of $x$ is still the original target.

### Step 2: use Hamiltonian dynamics

The Hamiltonian equations are
$$
\frac{dv}{dt}=-\frac{\partial H}{\partial x},
\qquad
\frac{dx}{dt}=\frac{\partial H}{\partial v}.
$$

These dynamics have two crucial properties in the idealized continuous setting:

- they preserve the Hamiltonian $H$
- they preserve volume in phase space

### Why those two properties matter

If $H(x,v)$ is preserved, then
$$
\exp(-H(x,v))
$$
is preserved along the trajectory.

If volume is preserved as well, then the deterministic flow preserves the extended density.

That is the geometric heart of HMC.

### Why HMC makes longer moves

Random-walk MH proposes a small local perturbation and hopes for acceptance.

HMC instead:

- samples a fresh momentum
- follows a long structured trajectory through state space
- lands far away, but in a geometry-aware way

So the chain can move a long distance while keeping acceptance probability reasonable.

That is why HMC often dramatically reduces random-walk behavior.

### Why momentum helps

Momentum gives the trajectory persistence.

Instead of forgetting its direction every step, the chain keeps moving in a coherent way before refreshing the momentum again.

This is the intuitive reason the method can traverse long valleys rather than jitter locally.

### Discretization and leapfrog

In practice we cannot solve the Hamiltonian ODE exactly.

So we simulate it numerically.

The lecture contrasts:

- Euler-style methods, which accumulate bad error
- leapfrog, a symplectic integrator that better preserves the geometric structure

The basic leapfrog update is:
$$
v \leftarrow v-\frac{\epsilon}{2}\nabla E(x),
$$
$$
x \leftarrow x+\epsilon v,
$$
$$
v \leftarrow v-\frac{\epsilon}{2}\nabla E(x).
$$

This is repeated for $L$ steps.

The tuning parameters are:

- step size $\epsilon$
- number of leapfrog steps $L$

### Why HMC still uses MH in practice

Because discretization is imperfect.

The simulated trajectory approximately preserves the Hamiltonian, not exactly.

So practical HMC adds an MH accept/reject correction at the end of the trajectory.

That restores exactness.

### The most important conceptual summary

HMC is not just “physics-themed MH.”

It is:

- an extended-state-space construction
- using structured deterministic dynamics
- to generate far more coherent proposals than local random walks

That is why it is so powerful.

## 5.11 Tempering and Annealing Ideas

The lecture also introduces methods based on changing the distribution temporarily.

The core intuition is very simple:

- hard targets are often too sharp or too multimodal
- flatter intermediate distributions are easier to explore

### Simulated tempering

Tempering introduces a temperature or inverse-temperature index.

At higher temperature, the target becomes flatter:

- peaks are less sharp
- barriers between modes are lower

So the chain can:

- sometimes live in the original target
- sometimes move to an easier, flatter distribution
- then return

This can help the chain travel between modes that would otherwise be separated by severe bottlenecks.

The practice exam explicitly emphasizes the structural point:

- simulated tempering is an extended-state-space Markov chain
- the extra state variable is the temperature index

So its deepest similarity to HMC is not the mechanics.
It is the design philosophy:

- augment the state space
- use that augmentation to improve exploration

### Annealed importance sampling

AIS is not an ordinary MCMC sampler for one fixed target in the same sense as MH or Gibbs, but it belongs to the same annealing family.

It builds a sequence of intermediate distributions:
$$
p_0, p_1, \dots, p_m,
$$
starting from an easy distribution and ending at the hard target.

Then it:

- transitions gradually through these intermediate distributions
- accumulates an importance weight along the path

The lecture’s key conclusion is that averaging those weights estimates the ratio of partition functions:
$$
\frac{Z_m}{Z_0}.
$$

So AIS is especially useful when you care about normalization constants, not just sample generation.

### Why annealing helps at a high level

Directly jumping from an easy reference distribution to a difficult target can cause severe mismatch.

Intermediate distributions reduce that mismatch step by step.

This is the same broad idea as tempering:

- introduce easier bridge distributions
- move through them gradually

### What to remember for exams

If asked to compare HMC and simulated tempering:

- both enlarge the state space
- HMC augments with momentum
- simulated tempering augments with temperature

If asked about annealed methods more generally:

- their purpose is to bridge hard distributions through easier intermediate ones

## 5.12 What You Should Be Able To Say Out Loud

By the end of this section, you should be able to say:

> MCMC solves hard inference by building a Markov chain whose stationary distribution is the target distribution. Stationarity is the correctness condition, while mixing tells us whether the method is practically useful. Detailed balance is a common way to prove stationarity. Metropolis-Hastings proposes a move and corrects it with an acceptance ratio. Gibbs sampling is a special case that resamples exact conditionals and therefore has acceptance probability 1. Mixing can be slow because of multimodality, high dimension, bottlenecks, and strong dependence. MALA uses gradients to make better local proposals. HMC augments the state with momentum and uses Hamiltonian dynamics to make long, coherent moves. Tempering and annealing improve exploration by introducing easier intermediate distributions.

If you can say that cleanly, the conceptual skeleton of the section is in place.

## Formal Anchors

These are the mathematical statements and definitions worth knowing precisely.

### Stationarity

A distribution $\pi$ is stationary for transition kernel $P$ if
$$
\pi P=\pi.
$$

In the discrete case:
$$
\sum_x \pi(x)P(x,y)=\pi(y)
\quad\text{for all } y.
$$

### Ergodic finite-state picture

For a finite-state Markov chain, irreducibility plus aperiodicity implies:

- existence of a unique stationary distribution
- convergence to that stationary distribution from any starting state

### Detailed balance

If
$$
\pi(x)P(x,y)=\pi(y)P(y,x)
\quad\text{for all } x,y,
$$
then $\pi$ is stationary.

### Metropolis-Hastings kernel

Given proposal $q(x,y)$, the MH acceptance probability is
$$
\alpha(x,y)
=
\min\left(1,\frac{\pi(y)q(y,x)}{\pi(x)q(x,y)}\right).
$$

For $x \neq y$,
$$
P(x,y)=q(x,y)\alpha(x,y),
$$
and
$$
P(x,x)=1-\sum_{y\neq x}P(x,y).
$$

If $\pi(x)\propto \tilde{\pi}(x)$, then the normalizing constant cancels in the acceptance ratio.

### Gibbs sampling

For coordinate $i$, Gibbs sampling updates
$$
x_i' \sim \pi(x_i \mid x_{-i}).
$$

It can be viewed as a special case of MH in which the acceptance ratio equals $1$.

### Langevin proposal and MALA

For $\pi(x)\propto \exp(-E(x))$, a Langevin-style proposal is
$$
Y=x-\eta \nabla E(x)+\sqrt{2\eta}\,\xi,
\qquad
\xi\sim \mathcal{N}(0,I).
$$

Using this as an MH proposal gives MALA.

### Hamiltonian Monte Carlo

HMC introduces momentum $v$ and extended density
$$
\pi(x,v)\propto \exp(-H(x,v)),
\qquad
H(x,v)=E(x)+K(v).
$$

Hamiltonian dynamics satisfy
$$
\frac{dv}{dt}=-\frac{\partial H}{\partial x},
\qquad
\frac{dx}{dt}=\frac{\partial H}{\partial v}.
$$

The continuous-time flow preserves:

- the Hamiltonian $H$
- phase-space volume

which is why it preserves the extended target density.

### Simulated tempering

Simulated tempering augments the state with a temperature index.
Its purpose is to improve movement across energy barriers by allowing the chain to visit flatter versions of the target.

### Annealed importance sampling

AIS uses a sequence of intermediate distributions and importance weights to estimate ratios of partition functions such as
$$
\frac{Z_m}{Z_0}.
$$

## Worked Problems

### Problem 5.1

What is the difference between saying “$\pi$ is stationary for the chain” and saying “the chain mixes quickly to $\pi$”?

### Solution

Stationarity is a correctness property:
if the chain is already distributed as $\pi$, one more step leaves it distributed as $\pi$.

Mixing speed is a convergence property:
it asks how quickly the chain approaches $\pi$ from an arbitrary starting point.

So a chain can be correct in principle but still be practically poor if it mixes slowly.

### Problem 5.2

Why does detailed balance imply stationarity?

### Solution

If
$$
\pi(x)P(x,y)=\pi(y)P(y,x)
$$
for all $x,y$, then summing over $x$ gives
$$
\sum_x \pi(x)P(x,y)
=
\pi(y)\sum_x P(y,x)
=
\pi(y),
$$
because the transition probabilities out of state $y$ sum to $1$.

That is exactly the stationarity condition.

### Problem 5.3

Why is Metropolis-Hastings especially convenient when the target is only known up to a normalizing constant?

### Solution

If
$$
\pi(x)=\frac{1}{Z}\tilde{\pi}(x),
$$
then the acceptance ratio is
$$
\frac{\pi(y)q(y,x)}{\pi(x)q(x,y)}
=
\frac{\tilde{\pi}(y)q(y,x)}{\tilde{\pi}(x)q(x,y)}.
$$

The unknown $Z$ cancels.

So MH can be implemented using only unnormalized target values, which is crucial for undirected models and posteriors with hard evidence integrals.

### Problem 5.4

Why is Gibbs sampling a special case of Metropolis-Hastings with acceptance probability $1$?

### Solution

In Gibbs, the proposal for coordinate $i$ is the exact conditional
$$
q(x,y)=\pi(y_i \mid x_{-i})
$$
for states differing only in coordinate $i$.

Plugging this proposal into the MH ratio, the joint terms factor through the same conditioning context $x_{-i}$, and the ratio simplifies to $1$.

So every Gibbs proposal is accepted.

### Problem 5.5

Give two structural reasons an MCMC chain may mix slowly.

### Solution

Two major reasons are:

- **multimodality:** low-probability barriers separate important regions, so local moves rarely switch modes
- **high-dimensional mismatch:** the proposal distribution suggests states that are not typical under the target, so informative moves are rare

Other common reasons include strong variable dependence and poor step-size choices.

### Problem 5.6

Why is pure gradient descent not a valid replacement for MCMC sampling from $\pi(x)\propto \exp(-E(x))$?

### Solution

Pure gradient descent
$$
x_{t+1}=x_t-\eta \nabla E(x_t)
$$
deterministically moves toward lower energy, which means toward a mode.

That performs optimization rather than sampling.

It does not produce draws from the full target distribution because it removes the randomness needed to explore the full probability landscape.

### Problem 5.7

What is the main conceptual advantage of HMC over random-walk Metropolis-Hastings?

### Solution

HMC augments the state with momentum and uses Hamiltonian dynamics to propose long, coherent moves through an extended state space.

This reduces inefficient random-walk behavior.

So the main advantage is not just “using gradients,” but using gradients in a structured dynamical system that can travel far while still preserving the target after correction.

### Problem 5.8

What is the common conceptual theme shared by HMC and simulated tempering?

### Solution

Both methods improve exploration by enlarging the state space:

- HMC adds momentum
- simulated tempering adds a temperature index

The purpose in both cases is to make the chain move through the hard target more effectively than a simple local sampler would.
