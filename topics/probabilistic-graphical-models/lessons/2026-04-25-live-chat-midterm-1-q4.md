# PGM Live Chat: Midterm 1 Q4-Q5

## Scope

This live chat is scoped to `Midterm 1, Question 4 (MALA)` and `Midterm 1, Question 5 (Metropolis-Hastings conductance)` in a clean markdown transcript.

## Transcript

---
### Turn 1

**User asked:**

> can you make a new live chat, and restate M1-Q4 in the live chat?

**Assistant response:**

Yes. Here is `M1-Q4` restated in the live chat.

`M1-Q4` is:

> **True or False:** We can remove the Gaussian noise in Metropolis Adjusted Langevin Algorithm to make it converge faster to the stationary distribution.

If you want, the next turn in this live chat can be:

- just the answer
- the intuition for why the answer is what it is
- or a fuller explanation of how MALA differs from plain gradient descent

---
### Turn 2

**User asked:**

> my answer would be false. in MALA, the noise is actually important so that we can actualy sample from the distribution, rather just go straight to the highest density point. is that correct?

**Assistant response:**

Yes, `False` is the correct answer, and your intuition is basically right.

The main idea is:

- MALA is a **sampling** algorithm, not an optimization algorithm.
- The Gaussian noise is what keeps the update stochastic, so the chain can **explore** the distribution instead of just climbing toward a mode.
- If you remove the noise, the update becomes much more like **gradient ascent on $\log \pi(x)$**, which is trying to find a high-density point rather than generate samples from the full target distribution.

One important refinement:

- it does **not** necessarily go to the single global highest-density point
- more typically, it gets pulled toward a **nearby local mode**

So the clean exam answer is something like:

> **False.** Removing the Gaussian noise turns MALA from a sampler into something closer to a deterministic optimization procedure. The noise is important for exploration and for producing samples from the target distribution, rather than collapsing toward a local high-density region.

---
### Turn 3

**User asked:**

> if so can you mark it with some color coding on the topic maps?

**Assistant response:**

Yes. I marked `M1-Q4` in green on all three assessment-map sheets and added a small legend at the top of each sheet so the color is interpretable later.

The updated sheets are:

- `Question -> Topic Map`
- `Difficulty -> Question Map`
- `Topic -> Assessment Reverse Map`

The green coding means:

- reviewed together
- currently marked as answered correctly

For `M1-Q4`, the note now explicitly records that your answer `False` was correct.

---
### Turn 4

**User asked:**

> can you give me m1-q5 next

**Assistant response:**

Yes. Here is `M1-Q5` restated in the live chat.

`M1-Q5` is:

> **True or False:** If we use two different proposal distributions in Metropolis Hastings that result in the same stationary distribution, the conductance of both chains will necessarily be the same.

If you want, the next step can be:

- just the answer
- your intuition checked
- or a slower explanation of why proposal choice can change conductance even when the stationary distribution stays the same

---
### Turn 5

**User asked:**

> what does conductance mean here?

**Assistant response:**

Here, **conductance** means a measure of how easily the Markov chain can move probability mass across its own bottlenecks.

The rough picture is:

- pick some subset of states $S$
- imagine the chain is currently distributed according to stationarity inside that set
- ask: **how easily does the chain leave $S$ and move to $S^c$?**

One standard definition is

$$
\Phi(S) = \frac{Q(S,S^c)}{\pi(S)},
$$

where

$$
Q(S,S^c) = \sum_{x \in S,\, y \in S^c} \pi(x) P(x,y),
$$

and $\pi$ is the stationary distribution and $P$ is the transition matrix of the chain.

Then the **conductance of the chain** is the worst bottleneck:

$$
\Phi = \min_{S:\,\pi(S)\le 1/2} \Phi(S).
$$

So:

- **high conductance** = the chain can escape sets reasonably easily, so mixing is better
- **low conductance** = there is some bottleneck or “sticky region,” so mixing can be slow

Why this matters for `M1-Q5`:

- two Metropolis-Hastings chains can have the **same stationary distribution** $\pi$
- but different proposal distributions give different transition kernels $P$
- and conductance depends on **$P$**, not just on $\pi$

So same stationary distribution does **not** force same conductance.

---
### Turn 6

**User asked:**

> can you go into detaisl about this, and also mark the question as red?

**Assistant response:**

Yes. I marked `M1-Q5` red on the assessment maps to mean:

- reviewed together
- currently needs more practice
- specifically, the weak point is the meaning of **conductance** and why it depends on the transition rule, not just the stationary distribution

Now let us go more slowly.

`M1-Q5` says:

> **True or False:** If we use two different proposal distributions in Metropolis-Hastings that result in the same stationary distribution, the conductance of both chains will necessarily be the same.

The answer is:

> **False.**

The reason is:

> The stationary distribution tells us **where the chain should spend time in the long run**. Conductance tells us **how easily the chain moves around while trying to get there**.

Those are different properties.

## 1. The stationary distribution is the destination

For a Markov chain with transition matrix $P$, a distribution $\pi$ is stationary if

$$
\pi P = \pi.
$$

That means: if the chain is already distributed like $\pi$, then after one transition it is still distributed like $\pi$.

In Metropolis-Hastings, we often design the acceptance rule so that the chain has a desired stationary distribution $\pi$. This target $\pi$ might be a posterior distribution, an Ising model distribution, or some unnormalized density we want to sample from.

But many different chains can have the same stationary distribution.

That is the key idea.

Two chains can both preserve the same $\pi$, but one chain might move efficiently while another chain gets stuck.

## 2. The proposal distribution affects the transition kernel

In Metropolis-Hastings, the proposal distribution $q(y \mid x)$ suggests a possible move from current state $x$ to candidate state $y$.

Then the algorithm accepts the proposal with probability

$$
\alpha(x,y)
=
\min\left\{
1,\,
\frac{\pi(y)q(x \mid y)}{\pi(x)q(y \mid x)}
\right\}.
$$

So the actual probability of moving from $x$ to $y$ depends on both:

- the proposal $q(y \mid x)$
- the acceptance probability $\alpha(x,y)$

Together these define the transition kernel $P(x,y)$.

For $y \ne x$, roughly:

$$
P(x,y) = q(y \mid x)\alpha(x,y).
$$

There is also leftover probability of staying at $x$ when a proposal is rejected.

So even if two different proposal distributions lead to the same stationary distribution $\pi$, they usually produce different transition kernels $P$.

And conductance depends on $P$.

## 3. Conductance measures bottlenecks

Imagine the state space is split into two regions:

- $S$
- $S^c$, meaning "everything not in $S$"

Conductance asks:

> If the chain is currently inside $S$, how easily can it escape from $S$ into $S^c$?

To make this precise, define the stationary mass of $S$:

$$
\pi(S) = \sum_{x \in S} \pi(x).
$$

This is the total probability that the target distribution assigns to the set $S$.

Now define the probability flow from $S$ to $S^c$:

$$
Q(S,S^c)
=
\sum_{x \in S}
\sum_{y \in S^c}
\pi(x)P(x,y).
$$

Read this as:

> Add up, over all states $x$ inside $S$ and all states $y$ outside $S$, the probability of being at $x$ under stationarity times the probability of moving from $x$ to $y$.

Then the conductance of this particular cut $S$ is

$$
\Phi(S)
=
\frac{Q(S,S^c)}{\pi(S)}.
$$

This ratio means:

> Among the probability mass sitting in $S$, what fraction flows out of $S$ in one step?

Then the conductance of the whole chain is the worst-case bottleneck:

$$
\Phi
=
\min_{S:\,\pi(S)\le 1/2}
\Phi(S).
$$

We only look at sets with $\pi(S)\le 1/2$ so that we are measuring escape from a smaller-side bottleneck rather than double-counting the same split from both sides.

## 4. Why proposal choice changes conductance

Suppose the target distribution $\pi$ puts probability mass on two separated regions:

- left mode
- right mode

Both regions have meaningful probability under $\pi$.

Now compare two Metropolis-Hastings proposals.

Proposal A: local random walk.

- From the left mode, it proposes tiny moves near the left mode.
- It almost never proposes a jump all the way to the right mode.
- The chain can have the correct stationary distribution eventually.
- But it may take a very long time to cross from left to right.

Proposal B: bigger or more global proposal.

- From the left mode, it sometimes proposes moves near the right mode.
- Some of those moves are accepted.
- The chain crosses the bottleneck more often.
- It can have the same stationary distribution as Proposal A, but better movement between regions.

The stationary distribution can be the same in both cases.

But the transition kernels are different:

$$
P_A \ne P_B.
$$

Therefore their conductances can be different:

$$
\Phi_A \ne \Phi_B.
$$

## 5. Small discrete example intuition

Imagine a simple state space:

$$
\{1,2,3,4\}.
$$

Suppose the target distribution is uniform:

$$
\pi(1)=\pi(2)=\pi(3)=\pi(4)=\frac14.
$$

Now take the cut

$$
S = \{1,2\},
\qquad
S^c = \{3,4\}.
$$

Chain A only proposes local moves:

$$
1 \leftrightarrow 2 \leftrightarrow 3 \leftrightarrow 4.
$$

To get from $S$ to $S^c$, it basically has to cross the narrow bridge between $2$ and $3$.

Chain B sometimes proposes jumps between any pair of states:

$$
1 \leftrightarrow 3,
\quad
1 \leftrightarrow 4,
\quad
2 \leftrightarrow 3,
\quad
2 \leftrightarrow 4,
\quad
\text{etc.}
$$

Both chains can be designed to have the same uniform stationary distribution.

But Chain B sends more probability flow across the cut from $\{1,2\}$ to $\{3,4\}$.

So Chain B has higher conductance across that cut.

The important lesson:

> Same destination. Different roads. Different bottlenecks.

## 6. Exam-ready version

For `M1-Q5`, the clean answer is:

> **False.** Conductance is a property of the Markov chain's transition kernel, not just its stationary distribution. In Metropolis-Hastings, changing the proposal distribution changes the transition probabilities $P(x,y)$, even if the acceptance rule still gives the same stationary distribution $\pi$. Since conductance depends on the probability flow $\pi(x)P(x,y)$ across bottlenecks, two chains with the same stationary distribution can have different conductance.

The phrase to remember:

> **Stationary distribution says where the chain ends up. Conductance says how well it moves between regions on the way.**
