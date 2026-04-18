# Gradient Descent 0 to 1 Curriculum

Topic Path: `topics/optimization-for-ml/gradient-descent`

## Source Trace

- Canonical manifest: `learning_system/SOURCE_MAP.json`
- Topic locator: [topics/optimization-for-ml/gradient-descent/curriculum/0-to-1-plan.md](0-to-1-plan.md)
- Transcript links: see source sections in this curriculum.

## Outcome

By the end of this topic, you should be able to derive gradient descent updates, choose step-size strategies, and reason about convergence behavior for smooth convex objectives.

## Source Materials

- [materials/processed/optimization-for-ml/Jan29_GD.md](../../../../materials/processed/optimization-for-ml/Jan29_GD.md)

## Transcript Anchors

- Step-size definition and role across gradient descent iterations.
- Derivation of update direction from Taylor/local linear approximation arguments.
- Alternative derivation via minimizing linearized objective with quadratic regularization.
- Fixed step-size behavior illustrated by convergence/divergence examples on quadratics.
- Convergence discussion topics: Lipschitz gradients, convex vs nonconvex settings, strong convexity.

## Starting Assumption

Learner understands basic gradients but needs algorithm-level understanding and convergence intuition.

## Lesson Sequence

1. Lesson 1: From local linearization to GD update
- Derive update rule from first-order approximation.
- Interpret step direction and step size geometrically.
- Practice: derive updates for quadratic and logistic-style objectives.

2. Lesson 2: Step sizes and stability
- Compare constant step size, decays, and backtracking intuition.
- Diagnose under-stepping vs overshooting from trajectory behavior.
- Practice: parameter sensitivity drills on toy objectives.

3. Lesson 3: Smoothness and convergence intuition
- Introduce Lipschitz gradient assumptions and why they matter.
- Explain high-level convergence-rate statements without overproofing.
- Practice: map assumptions to expected behavior in examples.

4. Lesson 4: Debugging and implementation checklist
- Build a practical checklist: gradient correctness, scaling, stopping criteria.
- Learn common failure modes in first implementations.
- Practice: given logs/plots, identify likely bug sources.

5. Lesson 5: Mixed exam-style practice
- Solve short derivation + conceptual justification questions.
- Emphasize argument clarity over symbolic complexity.
- Practice: timed set with post-mortem error analysis.

## Practice Ladder

- Level 1: Manual one-step updates.
- Level 2: Multi-step behavior interpretation.
- Level 3: Assumption-aware convergence reasoning.
- Level 4: Debugging flawed optimization runs.

## Mastery Checks

- Can derive GD cleanly and explain every term.
- Can justify a step-size choice for a given setting.
- Can predict and explain common convergence pathologies.
- Can propose practical fixes based on observed optimization traces.

## Progression

Next topic: `topics/optimization-for-ml/subgradients-and-projected-methods`.
