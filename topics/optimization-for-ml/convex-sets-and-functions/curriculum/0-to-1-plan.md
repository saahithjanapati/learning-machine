# Convex Sets and Functions 0 to 1 Curriculum

Topic Path: `topics/optimization-for-ml/convex-sets-and-functions`

## Source Trace

- Canonical manifest: `learning_system/SOURCE_MAP.json`
- Topic locator: [topics/optimization-for-ml/convex-sets-and-functions/curriculum/0-to-1-plan.md](0-to-1-plan.md)
- Transcript links: see source sections in this curriculum.

## Outcome

By the end of this topic, you should be able to determine whether sets and functions are convex, justify your answer formally, and use first-order convexity conditions in short proof sketches.

## Source Materials

- [materials/processed/optimization-for-ml/Jan15_ConvexSets.md](../../../../materials/processed/optimization-for-ml/Jan15_ConvexSets.md)
- [materials/processed/optimization-for-ml/Jan20_ConvexFunctions.md](../../../../materials/processed/optimization-for-ml/Jan20_ConvexFunctions.md)

## Transcript Anchors

- Why convex inequality constraints are written as `f_i(x) <= b_i` (not `>=`) for convex feasible sets.
- Why equality constraints are required to be affine in convex optimization standard form.
- Convex-function definition via chord inequality and convex-domain requirement.
- Zeroth-order convexity checks, including one-dimensional slice/projection characterization.
- Epigraph definition and geometric interpretation for convexity reasoning.

## Starting Assumption

Learner needs strong conceptual buildup and examples before proofs.

## Lesson Sequence

1. Lesson 1: Convex sets from intuition to definition
- Learn line-segment definition and geometric intuition.
- Cover basic set families (affine sets, balls, halfspaces, polyhedra).
- Practice: classify examples and provide one-line justifications.

2. Lesson 2: Convex-set operations and construction rules
- Study intersections, affine images, and operations preserving convexity.
- Use closure rules to avoid brute-force geometric arguments.
- Practice: derive convexity of new sets using composition rules.

3. Lesson 3: Convex functions and epigraph perspective
- Define convex functions via Jensen/line inequality and epigraphs.
- Connect visual shape intuition to formal inequalities.
- Practice: prove convexity for standard scalar and vector-valued examples.

4. Lesson 4: First-order characterization and differentiable case
- Use gradient inequality as a practical convexity test.
- Distinguish convex, strongly convex, smooth, and non-smooth concepts.
- Practice: prove or disprove convexity using derivatives/gradients.

5. Lesson 5: Applied proof workshop (practice-heavy)
- Mixed proofs: set convexity, function convexity, and counterexample design.
- Build reusable proof templates for homework/exam speed.
- Practice: timed question set with short proof sketches.

## Practice Ladder

- Level 1: Intuitive geometric classification.
- Level 2: Definition-based proofs for sets/functions.
- Level 3: First-order and composition-rule arguments.
- Level 4: Multi-step proof sketches under time pressure.

## Mastery Checks

- Can prove convexity of common sets/functions using clean argument structure.
- Can identify non-convex cases and provide concrete counterexamples.
- Can apply first-order convexity condition correctly with dimensions.
- Can explain why convexity changes optimization tractability.

## Progression

Next topic: `topics/optimization-for-ml/matrix-norms`.
