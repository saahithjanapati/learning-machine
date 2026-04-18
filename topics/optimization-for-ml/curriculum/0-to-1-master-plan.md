# Optimization for ML: 0 -> 1 Master Curriculum

Topic path: `topics/optimization-for-ml`

## Source Trace

- Canonical manifest: `learning_system/SOURCE_MAP.json`
- Topic locator: [topics/optimization-for-ml/curriculum/0-to-1-master-plan.md](0-to-1-master-plan.md)
- Transcript links: see source sections in this curriculum.

## Starting Assumption

You are currently behind and close to 0 familiarity with course content.

## Transcript Coverage Map

- `Jan13_Intro.md` and `Jan13_Logistics.md`: optimization problem form, feasibility terminology, constraints, prerequisites.
- `Jan15_ConvexSets.md` and `Jan20_ConvexFunctions.md`: convex sets/functions, structural constraints, epigraph and characterization views.
- `Jan27_matrix_norms.md`: SVD, singular values, matrix norm properties and convexity.
- `Jan29_GD.md`: gradient-descent derivations, step-size behavior, convergence-condition framing.
- `Feb5_subgradients.md`, `Feb10_subgradient-method.md`, `Feb12-projected-subgradient.md`: subgradients, method mechanics, constrained projections.
- `Feb17_Optimiality_Conditions.md` and `Feb19_stoch_gd.md`: optimality conditions, KKT framing, stochastic-gradient dynamics, and rate intuition.
- `Feb17+24_proximal_gd.md` and `Feb24_proximal_gd_examples.md`: proximal operators, composite objectives, and worked proximal-gradient updates.
- `March10_LP_Duality.md`, `March12_Part1_LagrangianFunction.md`, `March12_Part2_SaddlePoints_Minimax_Slater.md`, `March17_KKT.md`: LP duality, Lagrangian dual construction, saddle-point and Slater conditions, and KKT systems.
- `March19_Newton_method.md`: second-order local models, Newton updates, and when quadratic information changes the optimization regime.
- [materials/processed/optimization-for-ml/HW1_prompt.md](../../../materials/processed/optimization-for-ml/HW1_prompt.md), [materials/processed/optimization-for-ml/HW3_prompt.md](../../../materials/processed/optimization-for-ml/HW3_prompt.md), [materials/processed/optimization-for-ml/HW1_graded_submission.md](../../../materials/processed/optimization-for-ml/HW1_graded_submission.md), [materials/processed/optimization-for-ml/HW2_graded_submission.md](../../../materials/processed/optimization-for-ml/HW2_graded_submission.md), [materials/processed/optimization-for-ml/Quiz1_graded_submission.md](../../../materials/processed/optimization-for-ml/Quiz1_graded_submission.md), [materials/processed/optimization-for-ml/Quiz2_graded_submission.md](../../../materials/processed/optimization-for-ml/Quiz2_graded_submission.md), [materials/processed/optimization-for-ml/Quiz3_graded_submission.md](../../../materials/processed/optimization-for-ml/Quiz3_graded_submission.md): assignment and quiz artifacts for gap mining, proof rigor review, and exam-oriented remediation.

## 0 -> 1 Definition

By the end, you should be able to:
- explain core convex optimization concepts in your own words,
- solve medium-difficulty derivation and proof-sketch questions,
- implement and debug gradient/subgradient/projection algorithms,
- choose and justify optimization methods for constrained/nonsmooth problems.

## Phase Plan

1. Phase A: Foundations (2 sessions)
- objective: language + notation fluency
- content: optimization problem forms, convexity intuition, basic probability refresh as needed
- output: concept map and glossary

2. Phase B: Convex geometry + convex functions (3 sessions)
- objective: identify convex sets/functions and apply first-order characterizations
- content: definitions, examples, closures/compositions, sublevel sets
- output: solved identification drills and short proof templates

3. Phase C: Linear algebra toolkit (2 sessions)
- objective: spectral/eigen/SVD/norm intuition for optimization analysis
- content: matrix norms, spectral radius, singular values, operator norms
- output: reference sheet mapping norm properties to algorithm analysis

4. Phase D: Gradient methods (3 sessions)
- objective: run and analyze gradient descent variants
- content: step-size choices, smoothness assumptions, backtracking, convergence rates
- output: working implementations + convergence-check checklist

5. Phase E: Nonsmooth + constrained methods (4 sessions)
- objective: handle subgradients and projections
- content: subdifferentials, subgradient method, projected gradient/subgradient, constrained formulation
- output: derivation drills + coding exercises + method selection heuristics

6. Phase F: Catch-up integration (2 sessions)
- objective: combine concepts under exam-style constraints
- content: mixed problem sets and algorithm design questions
- output: personalized weak-point remediation set

## Session Style Ramp

- Early (A-B): 70% exposition, 30% guided practice
- Middle (C-D): 45% exposition, 55% practice
- Late (E-F): 25% exposition, 75% practice

## Assessment Gates

- Gate 1: correctly classify convex/non-convex examples and justify
- Gate 2: derive GD update and explain step-size consequences
- Gate 3: compute subgradients for standard nonsmooth functions
- Gate 4: implement projected subgradient on a constrained toy problem

## Extended Course Coverage

1. Proximal and composite optimization
- source transcripts: `Feb17+24_proximal_gd.md`, `Feb24_proximal_gd_examples.md`
- outcome: derive proximal-gradient updates and reason about operator-based fixes for non-smooth composite terms

2. Duality and optimality conditions
- source transcripts: `March10_LP_Duality.md`, `March12_Part1_LagrangianFunction.md`, `March12_Part2_SaddlePoints_Minimax_Slater.md`, `March17_KKT.md`
- outcome: derive dual objectives, interpret Slater and saddle-point conditions, and solve KKT systems with clear case analysis

3. Newton and second-order methods
- source transcript: `March19_Newton_method.md`
- outcome: derive Newton steps, explain local quadratic modeling, and contrast second-order convergence behavior with first-order methods

## Assessment And Feedback Corpus

- Problem statements: [materials/processed/optimization-for-ml/HW1_prompt.md](../../../materials/processed/optimization-for-ml/HW1_prompt.md), [materials/processed/optimization-for-ml/HW3_prompt.md](../../../materials/processed/optimization-for-ml/HW3_prompt.md)
- Graded feedback artifacts: [materials/processed/optimization-for-ml/HW1_graded_submission.md](../../../materials/processed/optimization-for-ml/HW1_graded_submission.md), [materials/processed/optimization-for-ml/HW2_graded_submission.md](../../../materials/processed/optimization-for-ml/HW2_graded_submission.md), [materials/processed/optimization-for-ml/Quiz1_graded_submission.md](../../../materials/processed/optimization-for-ml/Quiz1_graded_submission.md), [materials/processed/optimization-for-ml/Quiz2_graded_submission.md](../../../materials/processed/optimization-for-ml/Quiz2_graded_submission.md), [materials/processed/optimization-for-ml/Quiz3_graded_submission.md](../../../materials/processed/optimization-for-ml/Quiz3_graded_submission.md)
- Use these artifacts to mine recurring rigor gaps, formula-recall slips, and timed-reasoning errors for future review sessions
