# PGM Memory Sheet 5: MCMC

Use with [[2026-04-20-pgm-exam-prep-section-05-mcmc]].

This is one of the highest-yield exam sections. The maps show repeated questions on stationarity, irreducibility, aperiodicity, detailed balance, conductance, Gibbs, MALA, HMC, simulated tempering, and slow mixing.

## Assessed Sources

- `HW2-Q1`: MCMC concept checks.
- `HW2-Q2`: rejection-sampling proposal validity.
- `HW2-Q3`: Gibbs sampling for a bivariate Gaussian.
- `HW2-Q4`: finite-chain spectral gap and conductance.
- `HW2-PROG`: Gibbs, AIS, and tempering on Ising grids.
- `M1-Q3`: irreducibility and aperiodicity.
- `M1-Q4`: MALA noise concept check.
- `M1-Q5`: conductance and bottlenecks.
- `M1-Q6`: Gibbs stationarity vs ergodicity.
- `M1-Q7-M1-Q8`: simulated tempering.
- `M1-Q9`: systematic-scan Gibbs stationarity and non-reversibility.
- `M1-Q10`: independent MH, acceptance, irreducibility, aperiodicity, slow mixing.
- `PF-SQ5`: HMC and simulated tempering as extended-state chains.
- `PF-SQ6`: VI vs MCMC.
- `PF-P2`: finite-chain graph, aperiodicity, stationary distribution.
- `WP5.1-WP5.8`: stationarity, detailed balance, MH, Gibbs, slow mixing, gradient descent vs sampling, HMC, tempering.

## Core Goal

MCMC builds a Markov chain with target stationary distribution $\pi$.

If the chain is also irreducible and aperiodic on a finite state space, then it converges to $\pi$ from any starting point.

Memory:

> Stationary means correct if already there. Mixing means getting there.

## Stationarity

$\pi$ is stationary for transition matrix $P$ if

$$
\pi P=\pi.
$$

Expanded:

$$
\sum_x \pi(x)P(x,y)=\pi(y).
$$

This does not say the chain mixes quickly. It only says $\pi$ is preserved by one transition.

## Detailed Balance

Detailed balance:

$$
\pi(x)P(x,y)=\pi(y)P(y,x).
$$

Detailed balance implies stationarity because summing over $x$ gives:

$$
\sum_x \pi(x)P(x,y)
=
\sum_x \pi(y)P(y,x)
=
\pi(y).
$$

Detailed balance is sufficient for stationarity, not necessary. A chain can be stationary but non-reversible, as in systematic-scan Gibbs examples.

## Irreducible And Aperiodic

Irreducible:

> Every state can eventually reach every other state.

Aperiodic:

> Return times do not all share a common divisor bigger than 1.

For state $i$, period is:

$$
d(i)=\gcd\{t\ge 1:P^t(i,i)>0\}.
$$

A state is aperiodic if $d(i)=1$.

In an irreducible finite chain, all states share the same period.

Exam trap from `M1-Q3`:

> Finding one return time is not enough. You need the greatest common divisor of all possible return times.

## Metropolis-Hastings

Proposal:

$$
y\sim q(x,\cdot).
$$

Acceptance probability:

$$
\alpha(x,y)
=
\min\left(
1,
\frac{\pi(y)q(y,x)}{\pi(x)q(x,y)}
\right).
$$

If $\pi(x)=\tilde{\pi}(x)/Z$, then $Z$ cancels:

$$
\frac{\pi(y)}{\pi(x)}
=
\frac{\tilde{\pi}(y)}{\tilde{\pi}(x)}.
$$

That is why MH is useful for EBMs, Ising models, and Bayesian posteriors.

## Independent MH

Independent proposal:

$$
q(x,y)=q(y).
$$

Acceptance ratio:

$$
\frac{\pi(y)q(x)}{\pi(x)q(y)}.
$$

It can mix badly in high dimensions if $q$ misses important target regions or has poor typical-set overlap with $\pi$.

## Gibbs Sampling

Gibbs updates one coordinate from its exact conditional:

$$
x_i'\sim \pi(x_i\mid x_{-i}).
$$

Gibbs is a special case of MH with acceptance probability 1.

Important subtlety from `M1-Q6`:

> Updating only one coordinate can still preserve $\pi$ as stationary, but it may fail to be ergodic if other coordinates never change.

So distinguish:

- stationary distribution
- irreducibility
- aperiodicity
- convergence/mixing

## Ergodic

In this course context, an ergodic finite Markov chain is usually:

- irreducible
- aperiodic
- has the target stationary distribution

Then long-run averages and distributions converge appropriately to the target.

## MALA

MALA combines gradient drift with noise:

$$
y=x+\frac{\epsilon^2}{2}\nabla \log \pi(x)+\epsilon \xi,
\qquad \xi\sim \mathcal{N}(0,I).
$$

The noise matters. Without noise, this becomes optimization toward high-density points, not sampling from the full distribution.

MALA also needs an MH correction because the proposal is biased by the gradient.

## HMC

HMC augments the state:

$$
(x,v)
$$

where $v$ is momentum.

It uses Hamiltonian dynamics to make long coherent proposals rather than local random-walk moves.

Target on extended space:

$$
\pi(x,v)=\pi(x)p(v).
$$

The marginal over $x$ remains the desired target.

## Simulated Tempering

Simulated tempering augments the state with a temperature index:

$$
(x,T).
$$

Higher temperature flattens the target, making mode switching easier.

At $T=1$, the conditional distribution over $x$ is the original target:

$$
\Pi(x\mid T=1)=\pi(x).
$$

Memory from `M1-Q8`:

> Changing behavior at higher temperatures does not change the fact that the $T=1$ slice is the original target when the joint is constructed correctly.

## HMC vs Simulated Tempering

Both enlarge the state space:

- HMC adds momentum.
- Simulated tempering adds temperature.

Both are Markov chains on an extended space whose marginal or conditional recovers the desired target.

This was the key point in `PF-SQ5`.

## Conductance

Conductance measures bottlenecks.

Informal definition:

> If the chain is inside a set $S$ with substantial probability mass, conductance measures how easily it leaves $S$.

Low conductance means:

- the chain gets stuck in regions
- mode switching is rare
- mixing is slow

Exam memory from `M1-Q5`:

> Conductance is about probability flow across cuts, not just whether transitions exist.

## Spectral Gap

For reversible finite chains, the spectral gap is tied to mixing speed.

Larger spectral gap usually means faster mixing.

Smaller spectral gap usually means slower mixing.

Conductance and spectral gap are both ways of formalizing bottlenecks and slow exploration.

## Rejection / Importance Proposal Warning

If sampling from an easier proposal $q$ and reweighting by $\pi/q$:

- works best when $q$ covers $\pi$ well
- fails when weights have high variance
- fails when high-probability regions under $\pi$ are rare under $q$
- gets worse in high dimensions because typical sets may barely overlap

This is the key lesson behind many proposal-quality questions.

## Exam Traps

- Do not confuse stationary with fast mixing.
- Do not confuse irreducible with aperiodic.
- Do not decide aperiodicity from only one possible return time.
- Do not remove MALA noise and still call it sampling.
- Do not say all stationary chains are reversible.
- Do not say Gibbs must be ergodic just because it preserves $\pi$.
- Do not treat high temperature as the target distribution; $T=1$ is the original target.
- Do not describe conductance as just “number of edges.”

## Quick Self-Test

- Need target preserved? Check stationarity or detailed balance.
- Need convergence from any start? Check irreducible + aperiodic + stationary.
- Need MH acceptance? Write target ratio times reverse-proposal/proposal.
- Need Gibbs? Full conditional, acceptance 1.
- Need MALA? Gradient plus noise plus MH correction.
- Need HMC? Momentum-augmented chain.
- Need tempering? Temperature-augmented chain.
- Need slow mixing explanation? Mention bottlenecks, low conductance, multimodality, or high-dimensional typical-set mismatch.
