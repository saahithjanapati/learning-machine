# Foundations Intro 0 to 1 Curriculum

Topic Path: `topics/optimization-for-ml/foundations-intro`

## Source Trace

- Canonical manifest: `learning_system/SOURCE_MAP.json`
- Topic locator: `topics/optimization-for-ml/foundations-intro/curriculum/0-to-1-plan.md`
- Transcript links: see source sections in this curriculum.

## Outcome

By the end of this topic, you should be able to restate optimization problems in standard mathematical form, explain each symbol, and connect the course notation to simple ML examples.

## Source Materials

- `materials/processed/optimization-for-ml/Jan13_Intro.md`
- `materials/processed/optimization-for-ml/Jan13_Logistics.md`

## Transcript Anchors

- Standard optimization form with objective, inequality constraints, and equality constraints.
- Definitions of feasible solution, optimal solution, infeasible problem, and unbounded objective.
- Explicit vs implicit constraints via domain intersection.
- Convex optimization structural conditions: convex domain, convex objectives/inequalities, affine equalities.
- Logistics prerequisites list (linear algebra and notation readiness).

## Starting Assumption

Learner is near zero background and needs concept-first exposition before heavy problem solving.

## Lesson Sequence

1. Lesson 1: Problem setup and notation (high exposition)
- Learn objective, variable, feasible set, constraints, and minimization vs maximization notation.
- Translate plain-English tasks into `min_x f(x)` or constrained forms.
- Practice: 8 classification drills on notation and problem form.

2. Lesson 2: Geometry intuition and level sets
- Build intuition for contours, minima, and local vs global optima.
- Explain why convexity matters before giving formal definitions.
- Practice: sketch level sets and identify likely optimizer locations.

3. Lesson 3: Calculus and linear algebra warmup for optimization
- Refresh gradients, directional derivatives, matrix-vector notation, and norm basics.
- Identify common mistakes in shape reasoning and gradient sign conventions.
- Practice: gradient computation drills for 1D and low-dimensional functions.

4. Lesson 4: ML grounding and course logistics integration
- Connect optimization forms to linear/logistic regression objectives.
- Explain what parts of the course are theory-heavy vs algorithm-heavy.
- Practice: map each upcoming lecture topic to prerequisite concepts.

## Practice Ladder

- Level 1: Rewrite problem statements into formal notation.
- Level 2: Explain symbols and dimensions for every term in an objective.
- Level 3: Compute gradients and check dimensional consistency.
- Level 4: Build a small optimization formulation from an ML prompt.

## Mastery Checks

- Can correctly parse and restate optimization notation without lookup.
- Can identify optimization variables, fixed data, and constraints.
- Can compute and sanity-check basic gradients with dimensions.
- Can explain where this topic fits into convex methods and first-order algorithms.

## Progression

Next topic: `topics/optimization-for-ml/convex-sets-and-functions`.
