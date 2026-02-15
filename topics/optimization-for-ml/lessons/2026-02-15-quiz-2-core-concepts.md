# Optimization Quiz 2 Prep: Core Concepts (Exposition-First)

Date: 2026-02-15  
Mode: learn (exposition-heavy)  
Scope: Gradient Descent, GD convergence proofs, Subgradients, Subgradient Method, Projected (Sub)gradient, Optimality Conditions, Stochastic Gradient

## How To Use This Lesson

This lesson is designed to be as self-contained as possible, with minimal assumptions.  
Goal: build intuition first, then connect to the main formulas and proof ideas you are likely to see on a quiz.

If a symbol feels unfamiliar, pause and restate it in plain English before moving on.

## Quiz Scope Map (From Your Schedule)

1. Gradient Descent
2. Proofs of GD convergence rates
3. Subgradients
4. Subgradient method
5. Projected (sub)gradient
6. Optimality conditions
7. Stochastic gradient

## Quick Notation Warmup

- Objective: `f(x)` (the thing we want to minimize)
- Variable: `x in R^d` (the parameters we control)
- Gradient: `grad f(x)` (direction of steepest increase)
- Step size / learning rate: `eta_t > 0`
- Constraint set (if constrained): `x in C`

Core theme across all topics: choose an update direction, choose a step size, and reason about whether/why that update improves the objective.

## 1) Gradient Descent (GD)

Update rule:

`x_{t+1} = x_t - eta_t grad f(x_t)`

Intuition:

- `grad f(x_t)` points uphill.
- `-grad f(x_t)` points downhill.
- `eta_t` controls how far you move.

Why GD works (high level):

- For smooth enough functions, local linear approximation is reliable.
- Small enough steps move you toward lower objective values.

Common failure mode:

- If `eta_t` is too large, iterates can zig-zag or diverge.

Checkpoint:

1. Why is `-grad f(x_t)` used instead of `grad f(x_t)` for minimization?
2. What is the practical effect of doubling `eta_t`?

## 2) Proof Idea: GD Convergence Rates

You usually prove convergence with two ingredients:

1. A smoothness inequality (often called descent lemma).
2. A telescoping-style argument over iterations.

Typical statements you should recognize:

- Convex + smooth: GD gets suboptimality around `O(1/T)` with a good fixed step size.
- Strongly convex + smooth: GD gets geometric (linear) convergence, often written like `O((1-c)^T)`.

What to remember for quiz proofs:

- You do not need to memorize every constant first.
- You do need to know the structure: one-step decrease bound -> sum over steps -> final rate.

Minimal proof skeleton (convex + smooth):

1. Start from smoothness upper bound on `f(x_{t+1})`.
2. Plug in GD update.
3. Choose `eta` to make the RHS decrease.
4. Sum inequalities from `t=0` to `T-1`.
5. Rearrange to get bound in terms of `T`.

Checkpoint:

1. What extra assumption upgrades `O(1/T)` to linear convergence?
2. In one sentence: what does telescoping buy you?

## 3) Subgradients

Why gradients are not enough:

- Some convex functions are not differentiable everywhere (example: `|x|` at `x=0`).

Subgradient idea:

`g` is a subgradient at `x` if for all `y`,

`f(y) >= f(x) + g^T (y - x)`

Interpretation:

- The affine function on the right is a global under-estimator of `f`.
- At non-smooth points, there may be many valid subgradients.

Subdifferential:

- Set of all subgradients at `x`, written `partial f(x)`.

Checkpoint:

1. For `f(x)=|x|`, what are valid subgradients at `x=0`?
2. Why can there be multiple subgradients at one point?

## 4) Subgradient Method

Update rule (unconstrained):

`x_{t+1} = x_t - eta_t g_t`, where `g_t in partial f(x_t)`

Key difference vs GD:

- Subgradient direction is not guaranteed to be a strict descent direction each step.
- So analysis often tracks best-so-far iterate, not just the latest iterate.

Practical step-size patterns:

- Constant step sizes for speed early on.
- Diminishing step sizes for convergence guarantees (common in theory).

Checkpoint:

1. Why might objective value increase on some subgradient iterations?
2. Why do we often track the best iterate?

## 5) Projected (Sub)Gradient

Now constrained optimization:

`min f(x) subject to x in C`

If you take a normal GD/subgradient step, you might leave feasible set `C`.

Fix: projection back to `C`.

Projected subgradient update:

`y_{t+1} = x_t - eta_t g_t`  
`x_{t+1} = Proj_C(y_{t+1})`

Projection means:

- pick the closest point in `C` to `y_{t+1}` (Euclidean distance by default).

Intuition:

- Gradient-like step improves objective direction.
- Projection restores feasibility.

Checkpoint:

1. Why is projection needed in constrained problems?
2. If `y_{t+1}` is already in `C`, what does projection do?

## 6) Optimality Conditions (High-Yield View)

### Unconstrained, differentiable

- Necessary condition at local optimum: `grad f(x*) = 0`.
- For convex `f`, this is also sufficient for global optimality.

### Constrained, convex

Useful first-order condition:

`<grad f(x*), x - x*> >= 0` for all feasible `x in C`.

Meaning:

- No feasible direction gives first-order decrease at optimum.

### KKT (you likely need conceptual familiarity)

For problems with inequality/equality constraints, KKT combines:

1. Stationarity
2. Primal feasibility
3. Dual feasibility
4. Complementary slackness

Checkpoint:

1. In convex optimization, why is `grad f(x*)=0` especially powerful?
2. What does complementary slackness mean intuitively?

## 7) Stochastic Gradient (SGD)

Why SGD:

- Full gradient can be expensive on large datasets.

SGD update:

`x_{t+1} = x_t - eta_t g_t`,

where `g_t` is a noisy gradient estimate from one sample or mini-batch.

Main tradeoff:

- Cheap, noisy updates vs expensive, accurate full gradients.

Behavior:

- Often much faster per step.
- Noise can cause oscillation near optimum.
- Step-size schedules matter even more than in GD.

Common practical patterns:

- Mini-batches (variance reduction vs compute).
- Learning-rate decay.
- Averaging iterates in some settings.

Checkpoint:

1. What is the core computational advantage of SGD over GD?
2. Why can SGD fail to settle exactly at optimum with a constant learning rate?

## 8) Method Selection Cheat Sheet

If objective is smooth, unconstrained:

- Start with GD (or practical variants in code).

If objective is convex but non-smooth:

- Use subgradient method.

If constraints matter (`x` must stay in a feasible set):

- Use projected GD / projected subgradient.

If dataset is huge:

- Use SGD-style updates.

If quiz asks "why this method?":

- answer using structure: smoothness, non-smoothness, constraints, or data scale.

## 9) What To Memorize vs What To Understand

Memorize:

- Core update rules (GD, subgradient, projected, SGD).
- The names of key assumptions (convex, smooth, strongly convex).
- The convergence-rate headlines (`O(1/T)` vs linear under strong convexity).

Understand:

- Why each method exists.
- Why each assumption changes guarantees.
- Why step size controls stability and convergence speed.

## 10) Light Quiz Checks (Short Answer)

1. Write GD update and explain each term.
2. What assumption gives linear convergence for GD?
3. Define subgradient in one line.
4. Why is subgradient method not always descent each step?
5. Write projected subgradient update in two lines.
6. Give one unconstrained and one constrained optimality condition.
7. What is the biggest computational motivation for SGD?
8. Give one reason step-size decay is common in SGD.
9. In one sentence, contrast GD and SGD.
10. In one sentence, contrast GD and projected GD.

## Suggested Next Step

Next session should be a guided practice set (still beginner-friendly) with:

1. 6 conceptual multiple-choice items,
2. 4 short derivation skeletons (fill missing steps),
3. 2 tiny hand-computation update problems.
