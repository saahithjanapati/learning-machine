# Exam 2 Mock Exam - Part II - Version B - Answer Key

Use with:

- [[2026-04-19-exam-2-mock-exam-select-all-v2]]

## Select All That Apply

| Question | Correct Choices |
|---|---|
| 2.1 | a, b, c, e |
| 2.2 | a, b, c, d |
| 2.3 | a, b, d, e |
| 2.4 | a, b, d, e |
| 2.5 | a, b, c, d, e |
| 2.6 | a, b, c, d |
| 2.7 | a, c, d, e |
| 2.8 | a, b, c, d |
| 2.9 | a, b, c, d |
| 2.10 | a, b, c, d, e |
| 2.11 | a, b, c, e |

## Notes

- `2.1d` is false because the usual notation is the opposite: $\alpha$ for strong convexity, $\beta$ for smoothness.
- `2.2e` is false because $G_\eta(x)=0$ is exactly the fixed-point / stationarity-style condition in the convex-composite setup.
- `2.3c` is false because the dual function is the pointwise **infimum**, not supremum, of affine functions of the dual variables.
- `2.4c` is false because stationarity alone is not enough; constrained convex optimality also needs feasibility and the rest of KKT.
- `2.6e` is false because positive-definite Hessian at one iterate does not by itself guarantee global convergence from arbitrary initialization.
- `2.7b` is false because whitening gives uncorrelated unit-variance coordinates, not independence.
- `2.8e` is false because the gradient-evaluation point difference is a real algorithmic difference, not just notation.
- `2.9e` is false because Adam failure examples do not imply bias correction is invalid; they show the overall method can still fail in some settings.
- `2.11d` is false because fixed-step strongly convex SGD generally has a stochastic error floor.
