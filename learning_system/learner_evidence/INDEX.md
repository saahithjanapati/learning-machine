# Learner Evidence Index

Concept-level evidence about doubts, incorrect answers, and recurring confusion.

Generated: 2026-04-19T12:44:29-04:00

## Summary

- Total evidence entries: 29
- Topics with evidence: 1
- Event types: `doubt`=21, `incorrect-answer`=5, `proof-gap`=3
- Review states: `addressed`=26, `open`=3

## Topics

| Topic | Entries | Last Seen | Topic File |
|---|---:|---|---|
| `optimization-for-ml` | 29 | 2026-04-19T12:42:12-04:00 | [by_topic/optimization-for-ml.md](by_topic/optimization-for-ml.md) |

## Most Frequent Concepts

- `whitening-second-moment-identity`: 3
- `decoupled-weight-decay`: 3
- `weight-decay`: 2
- `l2-regularization`: 2
- `adamw`: 2
- `whitening-vs-independence`: 2
- `dual-function-infimum-vs-supremum`: 2
- `variance-after-whitening`: 2
- `quadratic-form-expansion`: 2
- `adaptive-scaling`: 1
- `kkt-sufficiency-necessity`: 1
- `slater-condition`: 1
- `nonconvex-candidate-points`: 1
- `spectral-radius-linear-system-view`: 1
- `hw4-momentum-quadratic-analysis`: 1
- `whitening-definition`: 1
- `optimizer-equivalence`: 1
- `quadratic-form-expectation`: 1
- `expectation-of-scalar-vs-matrix`: 1
- `dual-function-as-lower-envelope`: 1

## Recent Evidence

- 2026-04-19T12:42:12-04:00 | `optimization-for-ml` / `adaptive-methods` | `doubt` / `addressed` | Confused about why L2 regularization and weight decay are equivalent in plain SGD but diverge under Adam-style adaptive scaling, especially AdamW.
- 2026-04-19T12:31:13-04:00 | `optimization-for-ml` / `kkt` | `doubt` / `open` | Confused about when KKT is sufficient versus necessary, especially convex problems with Slater conditions versus nonconvex candidate points.
- 2026-04-19T10:16:40-04:00 | `optimization-for-ml` / `momentum-nag` | `doubt` / `open` | On select-all Version B, was unsure whether the HW4 momentum analysis uses spectral radius of a small linear update matrix.
- 2026-04-19T10:16:40-04:00 | `optimization-for-ml` / `ica` | `incorrect-answer` / `addressed` | On select-all Version B, marked the whitening definition statement E[zz^T]=I as false and showed continuing instability around whitening facts.
- 2026-04-19T00:00:00-04:00 | `optimization-for-ml` / `adaptive-methods` | `doubt` / `addressed` | Repeated confusion about whether weight decay and L2 regularization are the same thing, revisiting the AdamW distinction.
- 2026-04-18T23:41:42-04:00 | `optimization-for-ml` / `ica` | `doubt` / `addressed` | Asked for a step-by-step explanation of why E[(w^T z)^2] = w^T E[zz^T] w = w^T I w = ||w||^2 in the ICA whitening argument.
- 2026-04-18T22:40:32-0400 | `optimization-for-ml` / `duality` | `doubt` / `addressed` | Asked follow-up confusion about what it means that the dual function is the pointwise infimum of affine functions, mixing up minimizing over x for fixed dual variables with minimizing across all dual-variable choices.
- 2026-04-18T22:27:12-04:00 | `optimization-for-ml` / `duality` | `doubt` / `addressed` | Asked again why the dual is the pointwise infimum rather than the supremum after missing that select-all statement.
- 2026-04-18T21:15:58-04:00 | `optimization-for-ml` / `sgd` | `doubt` / `open` | Annotated uncertainty about the subgradient-method row in select-all 2.11.
- 2026-04-18T21:15:58-04:00 | `optimization-for-ml` / `ica` | `incorrect-answer` / `addressed` | Missed the whitened-data identity E[(w^T z)^2] = ||w||^2 on select-all 2.7.
- 2026-04-18T21:15:58-04:00 | `optimization-for-ml` / `advanced-optimizers` | `doubt` / `addressed` | Annotated AdamW as a topic to review while working the select-all section.
- 2026-04-18T21:15:57-04:00 | `optimization-for-ml` / `kkt` | `incorrect-answer` / `addressed` | Included stationarity-alone statement as true on KKT select-all 2.4.
- 2026-04-18T21:15:57-04:00 | `optimization-for-ml` / `duality` | `incorrect-answer` / `addressed` | Selected the dual-function affine-family direction incorrectly on select-all 2.3.
- 2026-04-18T20:22:11-04:00 | `optimization-for-ml` / `advanced-optimizers` | `doubt` / `addressed` | Asked for a slower explanation of what AdamW actually does operationally.
- 2026-04-18T20:09:11-04:00 | `optimization-for-ml` / `ica` | `incorrect-answer` / `addressed` | Marked whitening implying independence as true; needs the uncorrelated-versus-independent distinction.
- 2026-04-18T20:09:11-04:00 | `optimization-for-ml` / `advanced-optimizers` | `doubt` / `addressed` | Shaky on whether AdamW decoupled weight decay is equivalent to adding L2 regularization inside Adam.
- 2026-04-18T16:46:37-04:00 | `optimization-for-ml` / `sdp` | `doubt` / `addressed` | Asked why the expansion of (e_i + t e_j)^T X (e_i + t e_j) produces 2t e_i^T X e_j instead of two separate cross terms.
- 2026-04-18T16:30:31-04:00 | `optimization-for-ml` / `sdp` | `doubt` / `addressed` | Asked how the basis-vector quadratic-form terms in SDP Problem 5.4 rewrite into matrix entries X_ii, X_ij, X_jj.
- 2026-04-18T16:08:46-04:00 | `optimization-for-ml` / `ica` | `doubt` / `addressed` | Asked why the ICA Lagrangian uses ||w||^2 - 1 instead of ||w|| - 1.
- 2026-04-18T15:01:59-04:00 | `optimization-for-ml` / `newton` | `doubt` / `addressed` | Asked what it means to linearize the gradient in Newton's method at x_k.
