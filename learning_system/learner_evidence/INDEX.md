# Learner Evidence Index

Concept-level evidence about doubts, incorrect answers, and recurring confusion.

Generated: 2026-04-18T22:40:33-04:00

## Summary

- Total evidence entries: 23
- Topics with evidence: 1
- Event types: `doubt`=16, `incorrect-answer`=4, `proof-gap`=3
- Review states: `addressed`=22, `open`=1

## Topics

| Topic | Entries | Last Seen | Topic File |
|---|---:|---|---|
| `optimization-for-ml` | 23 | 2026-04-18T22:40:32-0400 | [by_topic/optimization-for-ml.md](by_topic/optimization-for-ml.md) |

## Most Frequent Concepts

- `decoupled-weight-decay`: 3
- `dual-function-infimum-vs-supremum`: 2
- `variance-after-whitening`: 2
- `quadratic-form-expansion`: 2
- `dual-function-as-lower-envelope`: 1
- `pointwise-infimum-over-x`: 1
- `order-of-min-and-max`: 1
- `lower-envelope-of-affine-functions`: 1
- `subgradient-method-rate-quantity`: 1
- `objective-gap-vs-iterate`: 1
- `whitening-second-moment-identity`: 1
- `adamw-review-needed`: 1
- `stationarity-not-sufficient`: 1
- `kkt-condition-completeness`: 1
- `lp-duality-precision`: 1
- `adamw-update-rule`: 1
- `first-vs-second-moment`: 1
- `bias-correction-in-adam`: 1
- `whitening-vs-independence`: 1
- `uncorrelated-vs-independent`: 1

## Recent Evidence

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
- 2026-04-18T14:46:04-04:00 | `optimization-for-ml` / `sdp` | `doubt` / `addressed` | Needed clarification that the SOS formulation is an SDP feasibility problem rather than a meaningful minimization problem.
- 2026-04-18T14:46:04-04:00 | `optimization-for-ml` / `sdp` | `doubt` / `addressed` | Had not seen the PSD matrix square-root trick before in the SDP weak-duality proof.
- 2026-04-18T14:46:04-04:00 | `optimization-for-ml` / `proximal-gradient` | `proof-gap` / `addressed` | Needed the case-split logic in the soft-thresholding prox derivation explained more slowly.
- 2026-04-18T14:46:04-04:00 | `optimization-for-ml` / `advanced-optimizers` | `doubt` / `addressed` | Advanced-optimizer explanations were too compressed; needed a slower first-principles version.
- 2026-04-18T14:46:03-04:00 | `optimization-for-ml` / `sgd` | `doubt` / `addressed` | Asked whether alpha in strongly convex SGD is the smoothness coefficient.
- 2026-04-18T14:46:03-04:00 | `optimization-for-ml` / `sgd` | `proof-gap` / `addressed` | Needed the mini-batch unbiasedness derivation expanded term by term.
