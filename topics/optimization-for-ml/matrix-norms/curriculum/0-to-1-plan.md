# Matrix Norms 0 to 1 Curriculum

Topic Path: `topics/optimization-for-ml/matrix-norms`

## Source Trace

- Canonical manifest: `learning_system/SOURCE_MAP.json`
- Topic locator: `topics/optimization-for-ml/matrix-norms/curriculum/0-to-1-plan.md`
- Transcript links: see source sections in this curriculum.

## Outcome

By the end of this topic, you should be able to compute and compare key vector/matrix norms, explain singular-value-based intuition, and connect norm bounds to optimization behavior.

## Source Materials

- `materials/processed/optimization-for-ml/Jan27_matrix_norms.md`

## Transcript Anchors

- Singular value and singular vector definitions for rectangular matrices.
- SVD decomposition `A = U Sigma V^T` and orthogonality structure.
- Link between squared singular values and eigenvalues of `A A^T` / `A^T A`.
- Symmetric-matrix special case: singular values equal absolute eigenvalues.
- Matrix norm axioms and theorem that matrix norms are convex functions.

## Starting Assumption

Learner needs gentle linear algebra refresh with optimization-motivated examples.

## Lesson Sequence

1. Lesson 1: Vector and matrix norm essentials
- Refresh norm axioms and common norms (`l1`, `l2`, `linf`, Frobenius, spectral).
- Clarify when each norm is used in optimization or regularization.
- Practice: compute norms by hand for small vectors/matrices.

2. Lesson 2: Singular values and operator norm intuition
- Link spectral norm to largest singular value and worst-case amplification.
- Build geometric interpretation of matrix action on vectors.
- Practice: small SVD-based reasoning questions.

3. Lesson 3: Norm inequalities and useful bounds
- Cover inequality patterns used in proof steps.
- Relate Lipschitz constants to matrix norm bounds in gradient methods.
- Practice: bound derivation drills with clear assumptions.

4. Lesson 4: Optimization relevance workshop
- Apply norms to conditioning, step-size intuition, and stability diagnostics.
- Compare how norm choice changes interpretation of errors.
- Practice: short coding-style reasoning prompts without full implementation.

## Practice Ladder

- Level 1: Direct numeric norm calculations.
- Level 2: Identify appropriate norm for a modeling context.
- Level 3: Prove simple inequalities and bounds.
- Level 4: Use norm bounds to justify optimization choices.

## Mastery Checks

- Can compute and interpret major norms without confusion.
- Can explain spectral norm and singular values in plain language.
- Can use norm inequalities in short derivations.
- Can connect norm magnitudes to optimization stability and convergence intuition.

## Progression

Next topic: `topics/optimization-for-ml/gradient-descent`.
