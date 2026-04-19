# HW3 and HW4 Topic Summary

## Table of Contents

- [[#Purpose]]
- [[#Inputs]]
- [[#HW3 Overview]]
    - [[#HW3 Problem 1 Proximal Algorithms]]
    - [[#HW3 Problem 2 Approximating MaxCut with LP QP SDP]]
    - [[#HW3 Problem 3 KKT]]
    - [[#HW3 Problem 4 Convex Approximations]]
    - [[#HW3 Problem 5 Logistic Regression with SGD]]
- [[#HW4 Overview]]
    - [[#HW4 Problem 1 Testing Sum-of-Squares via SDP]]
    - [[#HW4 Problem 2 Momentum Method for a Quadratic]]
    - [[#HW4 Problem 3 Global Convergence of Newton's Method]]
    - [[#HW4 Problem 4 Adam Failure Example]]
    - [[#HW4 Problem 5 Lagrange Multipliers]]
    - [[#HW4 Problem 6 FastICA on Mixed Images]]
- [[#Cross-Homework Themes]]
- [[#Exam Relevance]]

## Purpose

This note is not just a list of homework topics. The goal is to explain what each homework problem was actually trying to test.

That matters because these assignments were usually doing one of four things:

1. testing whether you can reproduce a theorem proof from lecture in a slightly changed setting
2. testing whether you can model a problem as an LP, QP, or SDP rather than only solve a pre-given formulation
3. testing whether you understand the limitations of an algorithm, not just its happy-path guarantee
4. testing whether you can connect abstract optimization theory to an implementation or application

## Inputs

- [HW3 prompt](../../../materials/processed/optimization-for-ml/HW3_prompt.md)
- [HW4 processed submission](../../../materials/processed/optimization-for-ml/S26_10_725_HW4_student_3__1___1_.md)

Note on HW4:

The available processed artifact is the student-submission extraction rather than a clean prompt-only file, so the topic summary below is based on the actual questions visible there. That is still enough to recover what the homework was testing.

## HW3 Overview

HW3 was the bridge homework from proximal methods into duality, KKT, SDP, and then a practical SGD experiment.

At a high level, HW3 was testing whether you could do all of the following:

- work with the gradient mapping and prox optimality at proof level
- reason about the quality of relaxations, not just write them down
- derive and interpret LP, QP, and SDP formulations
- solve a concrete KKT system carefully
- move between theory and implementation in SGD

### HW3 Problem 1: Proximal Algorithms

This problem was centered on the composite objective

$$
f(x)=g(x)+h(x),
$$

with $g$ smooth and strongly convex, and $h$ convex but possibly nonsmooth.

#### What the problem asked you to do

- prove a strong-convexity version of the proximal descent lemma
- use smoothness for the $g$ part
- use prox optimality / convexity for the $h$ part
- combine the pieces into a single descent inequality
- then prove a linear convergence rate for proximal gradient with step size $1/\beta$

#### What it was really testing

1. Whether you can decompose a proof across the smooth and nonsmooth parts.

This is one of the core skills in proximal-gradient analysis. You are not supposed to treat $f$ as one monolithic object. You split:

- the smooth term using the usual smoothness upper bound
- the nonsmooth term using the proximal step and subgradient inequality

2. Whether you understand the gradient mapping as the right generalized gradient.

The proof is not really about “proximal gradient descent” as a buzzword. It is about being able to manipulate

$$
G_\eta(x)
$$

as the object that replaces $\nabla f(x)$ in the composite setting.

3. Whether you can transfer lecture logic into a slightly stronger theorem.

The strong-convexity part is the key twist. The homework is checking that you can take the lecture's non-strongly-convex proof skeleton and insert the extra

$$
\frac{\alpha}{2}\|x-z\|^2
$$

term in the right place, then use it to upgrade sublinear convergence to linear convergence.

#### If this showed up on an exam

The exam version would likely be shorter, but it would test the same moves:

- write the right descent inequality
- identify which theorem is used on which term
- state the linear rate with the right quantity and condition number dependence

So the exam skill here is not “memorize the whole homework proof.” It is:

`know which inequality is supposed to be used at each line.`

### HW3 Problem 2: Approximating MaxCut with LP, QP, SDP

This was one of the most conceptually rich problems in the course.

#### What the problem asked you to do

- analyze an LP relaxation of MaxCut
- show that it preserves order on cuts but is too loose
- analyze a tighter quadratic formulation
- reason about convexity via the adjacency matrix
- examine a concrete small graph where the quadratic relaxation actually recovers the maximum cut
- then write the vector relaxation as an SDP using a Gram matrix

#### What it was really testing

1. Whether you understand the difference between a valid relaxation and a useful relaxation.

The LP was not just there so you could write inequalities. It was there to force you to recognize:

- yes, every cut maps to a feasible LP point
- but the LP optimum becomes graph-insensitive and therefore uninformative

That is a very important modeling lesson:

`a relaxation can be correct in a formal sense and still be useless algorithmically.`

2. Whether you can compare LP, QP, and SDP as modeling tools.

This problem was walking you through a ladder:

- LP: easy but too weak
- QP: tighter, but nonconvex / harder
- SDP: richer geometric relaxation with a meaningful approximation guarantee

So the homework was not just about MaxCut. It was about understanding why one would ever introduce semidefinite programs in the first place.

3. Whether you understand Gram-matrix lifting.

The SDP step is the most important conceptual move:

- replace vectors $u_i$ by their pairwise inner products
- collect those inner products into a matrix $X$
- use
  $$
  X_{ij}=u_i \cdot u_j
  $$
  and
  $$
  X \succeq 0
  $$
  because $X$ is a Gram matrix

That is a canonical SDP modeling pattern, and the homework was training you to recognize it.

4. Whether you can reason about randomized rounding as a bridge from continuous solutions back to discrete objects.

The LP and SDP parts both asked you to think not only about optimization, but about recovering a combinatorial object from a relaxed solution.

#### If this showed up on an exam

The exam is unlikely to ask you to redo the full MaxCut problem. But it could absolutely ask one of these:

- why the LP relaxation is “too relaxed”
- why the QP is not convex
- how to derive the SDP from unit vectors and a Gram matrix
- why $X \succeq 0$ appears naturally

So the main exam takeaway is:

`HW3 Problem 2 was really a crash course in relaxation quality and SDP modeling.`

### HW3 Problem 3: KKT

This was a concrete nonlinear constrained optimization problem with both inequality and equality constraints.

#### What the problem asked you to do

- form the Lagrangian
- write the KKT conditions
- solve for candidate points and multipliers
- identify the optimal KKT point
- then argue that it is actually a maximum

#### What it was really testing

1. Whether you can set up KKT cleanly under sign and feasibility pressure.

This is where students often lose points:

- wrong sign on the multiplier term
- forgetting primal feasibility
- forgetting dual feasibility
- forgetting complementary slackness
- solving stationarity but not the full system

The homework was testing whether you can keep all of those pieces straight in one concrete problem.

2. Whether you understand that solving KKT and verifying optimality are not always the same thing.

The remark in the problem explicitly pointed out that the setting was not convex. That means:

- KKT is not automatically sufficient
- you may have to compare candidate points
- you may have to reason more carefully about whether the KKT point is actually a maximum

So the deeper lesson was:

`nonconvex KKT gives candidates, not automatic global certificates.`

3. Whether you can handle KKT in a realistic symbolic problem instead of just a toy quadratic.

The logs, the product constraint, and the equality constraint were all there to make the setup feel less mechanical.

#### If this showed up on an exam

Very plausible. The exam version could easily be:

- write down KKT conditions for a given problem
- solve for the multipliers
- decide whether a candidate is globally optimal, locally optimal, or only stationary

So the exam skill here is:

`solve KKT completely, then interpret what the answer actually means.`

### HW3 Problem 4: Convex Approximations

This problem asked you to approximate sampled function values by a convex piecewise-linear function while minimizing absolute error.

#### What the problem asked you to do

- formulate an LP for best convex approximation in absolute loss
- encode convexity of the piecewise-linear approximation
- linearize the absolute values
- derive the dual LP
- interpret the dual variables in relation to convexity

#### What it was really testing

1. Whether you can turn a verbal modeling constraint into linear constraints.

The crucial modeling move is:

`how do I say “piecewise-linear and convex” using only linear inequalities?`

This usually means encoding monotonicity of slopes or nonnegativity of discrete second differences.

That is a core LP-modeling skill.

2. Whether you can linearize absolute values correctly.

The absolute-error objective is not linear in raw form, so the homework was also checking whether you know the standard trick:

- introduce slack variables
- upper-bound the positive and negative deviations separately

3. Whether you can interpret the dual, not just derive it.

This is the higher-level part of the problem. The dual variables are not random symbols. They correspond to:

- local fit pressure
- convexity constraints
- tradeoffs between data fidelity and shape restrictions

So the real test was whether you understand duality as a lens on a model, not only a symbolic derivation.

#### If this showed up on an exam

The exam version would probably be shorter, but very plausible:

- formulate an LP with convexity constraints
- derive a dual
- explain what the dual variables mean

So the main skill here is:

`translate geometry and shape constraints into LP language.`

### HW3 Problem 5: Logistic Regression with SGD

This was the main implementation problem in HW3.

#### What the problem asked you to do

- implement mini-batch SGD for logistic regression
- compare four batch sizes and four learning rates
- run multiple independent trials
- compute the full objective value over the whole dataset
- compare trajectories to the optimum found by CVX
- interpret the resulting plots

#### What it was really testing

1. Whether you actually understand what mini-batch SGD is computationally.

The homework was explicit about:

- sampling with replacement
- using the full objective for evaluation
- not cheating with premade gradient or SGD packages

So the assignment was checking whether you understand the algorithm, not just the theorem statement.

2. Whether you understand the tradeoff between batch size and noise.

The point of the grid over $(b,\eta)$ was to make you see:

- small batch: noisier but cheaper / more stochastic
- large batch: less noisy but more expensive and more deterministic

3. Whether you understand the practical role of step size.

The plots were not just a programming chore. They were meant to force interpretation:

- too-large step sizes may oscillate or diverge
- smaller step sizes may be stable but slower
- the best choice depends on the batch size

4. Whether you can connect theory to empirical curves.

The comparison to $f^*$ and the repeated runs were there so you could talk about:

- optimization speed
- variance across runs
- convergence quality

#### If this showed up on an exam

Likely in conceptual form rather than coding form:

- why larger batch size changes the curves
- why different learning rates behave differently
- why the objective is evaluated on the full dataset rather than the current mini-batch

So HW3 Problem 5 was really testing:

`do you understand SGD as an algorithmic object, not just as a theorem on paper?`

## HW4 Overview

HW4 moved more heavily into late-course material:

- SOS / SDP connections
- momentum via spectral radius
- failure of Newton global convergence
- failure modes of Adam
- Lagrange multipliers beyond finite-dimensional vectors
- FastICA implementation

At a high level, HW4 was much more about:

- counterexamples
- structural reformulations
- deeper interpretations of methods
- applications of advanced topics

### HW4 Problem 1: Testing Sum-of-Squares via SDP

#### What the problem asked you to do

- prove that a polynomial is SOS iff it has a PSD Gram-matrix representation
- then write an SDP feasibility formulation for a quartic polynomial

#### What it was really testing

1. Whether you understand the Gram-matrix idea behind SOS.

The key equivalence

$$
p(x) \text{ is SOS}
\iff
p(x) = [x]_d^T Q [x]_d
\text{ for some } Q \succeq 0
$$

is one of the central conceptual bridges in the whole course.

This problem was testing whether you can go both directions:

- from explicit sum of squares to PSD matrix
- from PSD matrix factorization back to sum of squares

2. Whether you can convert algebra into SDP constraints.

The quartic case forces you to do coefficient matching. That is exactly the modeling skill:

- decision variable: symmetric matrix $Q$
- PSD constraint: $Q \succeq 0$
- linear constraints: coefficient equalities

So the homework was teaching:

`an SOS question becomes an SDP feasibility problem.`

#### If this showed up on an exam

Very likely in some form:

- state the Gram-matrix representation
- derive the quartic SDP
- explain why PSD is the right condition

### HW4 Problem 2: Momentum Method for a Quadratic

#### What the problem asked you to do

- write the momentum iteration on $f(x)=x^2$ as a linear system
- choose $\gamma(\eta)$ so the method converges
- bound convergence via the spectral radius
- identify the linear convergence rate
- notice the special finite-time case when the spectral radius becomes zero

#### What it was really testing

1. Whether you can stop viewing momentum as a vague heuristic.

On a quadratic, the method becomes a concrete linear dynamical system. That lets you analyze it with exact linear algebra.

2. Whether you understand spectral radius as a convergence criterion.

This is the core lesson:

- rewrite the update as
  $$
  z_{t+1}=Az_t
  $$
- then convergence is governed by
  $$
  \rho(A)
  $$

That is a powerful general pattern, not just a homework trick.

3. Whether you can tune parameters analytically rather than experimentally.

The choice

$$
\gamma = \frac{2}{1+2\eta}
$$

was not arbitrary. The homework wanted you to see how one can shape the dynamics by choosing parameters to control the trace, determinant, and ultimately the eigenvalues.

#### If this showed up on an exam

Very plausible as a short conceptual question:

- why does spectral radius matter?
- what does it mean for momentum to converge linearly on a quadratic?
- why is this a more exact analysis than the generic lecture intuition?

### HW4 Problem 3: Global Convergence of Newton's Method

#### What the problem asked you to do

- show that convexity does not imply global convergence of Newton's method
- construct a specific smooth convex function with bounded derivatives
- show that for every learning rate there is an initialization that makes damped Newton fail globally

#### What it was really testing

1. Whether you understand the difference between local and global theory.

This is the most important conceptual lesson:

- Newton can have beautiful local behavior
- but that does not mean it is globally reliable from arbitrary initialization

2. Whether you can prove failure, not just success.

The course is not only about proving rates for good cases. HW4 was explicitly testing whether you can reason through a counterexample and show divergence or failure of global convergence.

3. Whether you understand why line search / damping does not magically fix everything.

Even the damped form was not globally safe in general. That is a subtle but important message.

#### If this showed up on an exam

Likely as a conceptual statement or short proof:

- “Does convexity guarantee global convergence of Newton?”
- “What does local quadratic convergence not tell you?”
- “Why can Newton still fail far from the optimum?”

So this problem was really testing:

`do you understand the scope and limits of Newton theory?`

### HW4 Problem 4: Adam Failure Example

The extraction does not show the clean section title, but the content is clearly the standard “Adam can fail” construction.

#### What the problem asked you to do

- work inside a generic adaptive-method framework
- specialize it to Adam
- analyze a periodic linear-loss sequence on $[-1,1]$
- compute gradients and cumulative objective
- identify the true minimizer and a bad point
- prove, via induction, that Adam keeps visiting the bad point and stays away from the optimum

#### What it was really testing

1. Whether you understand that adaptive methods can fail even when they look reasonable.

This is the main conceptual lesson. The homework is pushing back against the idea that “Adam works in practice, therefore its behavior must be universally safe.”

2. Whether you understand the mechanics of Adam updates.

To follow the proof, you need to understand:

- first moment
- second moment
- decaying averages
- projection
- how the sign and magnitude of updates interact with the chosen loss sequence

3. Whether you can trace a failure through an inductive argument.

This is what makes the problem harder than a pure definition check. It is not enough to know that Adam can fail. You must show how the recurrence keeps the iterates in the bad region.

#### If this showed up on an exam

The exam is unlikely to reproduce the whole construction, but it could ask:

- what the counterexample is supposed to show
- why Adam failure examples do not mean bias correction is invalid
- why adaptive scaling can create unintuitive dynamics

So the real lesson was:

`late-course optimizers are not just about better performance; they are also about understanding when standard adaptive rules break.`

### HW4 Problem 5: Lagrange Multipliers

This had two very different subproblems.

#### 5.1 Ridge regression

##### What it asked

- treat ridge regression as a constrained problem
- form the Lagrangian
- solve the stationarity condition
- recover the closed-form ridge solution
- interpret the role of the multiplier and complementary slackness

##### What it was testing

- whether you can connect constrained and penalized formulations
- whether you recognize
  $$
  (X^T X + \lambda I)^{-1}X^T y
  $$
  as a Lagrange-multiplier outcome, not just a memorized formula
- whether you understand boundary activation through complementary slackness

#### 5.2 Maximum entropy with fixed mean and variance

##### What it asked

- maximize entropy over all continuous distributions with fixed moments
- use functional Lagrange multipliers
- derive the optimal density
- identify it as a Gaussian

##### What it was testing

This is one of the most conceptually sophisticated uses of Lagrange multipliers in the course.

It was checking whether you understand that:

- Lagrange multipliers are not limited to vectors in finite-dimensional spaces
- the same logic can be applied to functionals
- the Gaussian is not just a famous distribution; it emerges from an optimization principle

So this part was really testing:

`can you generalize optimization ideas beyond standard finite-dimensional parameter vectors?`

#### If this showed up on an exam

The ridge part is more likely than the entropy part, but both are conceptually important.

### HW4 Problem 6: FastICA on Mixed Images

#### What the problem asked you to do

- implement FastICA
- center and whiten the mixed signals
- run a fixed-point iteration
- recover source images up to sign and permutation

#### What it was really testing

1. Whether you understand ICA as an algorithmic pipeline.

This problem was not only about the final fixed-point formula. It was also about the steps around it:

- flatten the observed mixtures
- center the data
- whiten the data
- run ICA
- reshape and interpret the recovered sources

2. Whether you understand why sign and ordering are ambiguous.

This is a hallmark ICA fact. The problem was implicitly checking whether you know that source recovery is only identifiable up to sign and permutation.

3. Whether you can connect the lecture theory to a real separation task.

This is the same pattern as the logistic-regression SGD problem in HW3:

`theory should cash out in an actual algorithm that works on data.`

#### If this showed up on an exam

Likely as conceptual or short-answer questions:

- what whitening does
- why unit-norm constraints appear
- why recovered sources are only defined up to sign / permutation
- how FastICA fits the Newton / constrained-optimization story

## Cross-Homework Themes

If you zoom out, HW3 and HW4 together were repeatedly testing the same deeper abilities.

### 1. Structured reformulation

Many problems were really asking:

`can you rewrite the problem in the language that makes it solvable?`

Examples:

- nonsmooth composite problem -> proximal-gradient analysis
- MaxCut -> LP / QP / SDP relaxations
- SOS polynomial test -> SDP feasibility
- momentum on a quadratic -> linear dynamical system

### 2. Proof transfer

The homeworks often took a lecture theorem and asked you to adapt it:

- prox-GD descent lemma under strong convexity
- strong-convexity rate upgrade
- Newton failure outside the local regime

That means the course values:

`recognizing the proof pattern and knowing how to modify it.`

### 3. Limits of methods

Several problems were not about why a method works, but why it can fail:

- LP relaxation too weak
- Newton not globally convergent
- Adam failure example

This is a major theme of the course. You are expected to know both guarantees and failure modes.

### 4. Theory-to-algorithm translation

Both homeworks included serious implementation/application components:

- logistic-regression SGD
- FastICA on mixed images

So the course is also checking whether you can turn theoretical updates into actual procedures and then interpret the results.

## Exam Relevance

If you are studying for an exam, here is the clean map.

### HW3 is especially relevant for

- proximal gradient / gradient mapping
- SDP modeling
- KKT setup and verification
- LP duality and interpretation
- practical SGD behavior

### HW4 is especially relevant for

- SOS / SDP connection
- momentum spectral-radius analysis
- Newton limitations
- Adam failure interpretation
- Lagrange-multiplier generalizations
- ICA / FastICA pipeline

### Most exam-likely homework skills

If I compress both homeworks down to the most exam-relevant skills, I get:

1. prove or explain one key line in a proximal-gradient or SGD proof
2. derive or interpret a dual / KKT / SDP formulation
3. explain why a method can fail even though its local theory looks good
4. compare related methods precisely
5. state the right converging quantity, not just the big-$O$ rate

That is the real content of HW3 and HW4.
