# Subgradients and Projected Methods 0 to 1 Curriculum

Topic Path: `topics/optimization-for-ml/subgradients-and-projected-methods`

## Source Trace

- Canonical manifest: `learning_system/SOURCE_MAP.json`
- Topic locator: `topics/optimization-for-ml/subgradients-and-projected-methods/curriculum/0-to-1-plan.md`
- Transcript links: see source sections in this curriculum.

## Outcome

By the end of this topic, you should be able to compute subgradients for common non-smooth functions, run subgradient and projected methods, and choose methods for constrained non-smooth problems.

## Source Materials

- `materials/processed/optimization-for-ml/Feb5_subgradients.md`
- `materials/processed/optimization-for-ml/Feb10_subgradient-method.md`
- `materials/processed/optimization-for-ml/Feb12-projected-subgradient.md`

## Transcript Anchors

- Subgradient definition and subdifferential notation `partial f(x)` for convex functions.
- Subgradient method update and the warning that it is not always a descent method.
- Best-iterate tracking idea for non-monotone subgradient trajectories.
- Constrained objective setup `min_{x in C} f(x)` and infeasibility of unconstrained updates.
- Euclidean projection step and projected subgradient update formula.

## Starting Assumption

Learner is new to non-smooth analysis and constrained optimization methods.

## Lesson Sequence

1. Lesson 1: Subgradients and subdifferentials
- Build intuition at non-differentiable points.
- Compute subdifferentials for `|x|`, max-functions, and norm terms.
- Practice: pointwise subgradient calculation drills.

2. Lesson 2: Subgradient method mechanics
- Derive update and compare to gradient descent.
- Discuss step-size schedules and slower convergence intuition.
- Practice: hand-simulate short runs on piecewise-linear objectives.

3. Lesson 3: Constrained optimization and projections
- Define Euclidean projection and projection operator properties.
- Show how projection enforces feasibility at every step.
- Practice: compute projections onto common sets.

4. Lesson 4: Projected subgradient algorithm
- Combine non-smooth update with projection step.
- Analyze practical design choices for constrained objectives.
- Practice: algorithm tracing on toy constrained examples.

5. Lesson 5: Method selection and failure analysis
- Decide between GD, subgradient, and projected subgradient by problem structure.
- Diagnose divergence, oscillation, and infeasibility issues.
- Practice: case-based method selection with justification.

## Practice Ladder

- Level 1: Subgradient set computations.
- Level 2: Projection calculations and feasibility checks.
- Level 3: Full update-step execution for small problems.
- Level 4: Method selection and troubleshooting.

## Mastery Checks

- Can compute valid subgradients at smooth and non-smooth points.
- Can perform projection operations onto basic convex sets.
- Can explain why projected methods keep iterates feasible.
- Can choose a suitable first-order method for a constrained non-smooth objective.

## Progression

Next topic: `topics/optimization-for-ml/course-catchup`.
