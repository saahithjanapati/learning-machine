# Proximal Gradient Memory Sheet

Use with [[2026-04-14-exam-2-section-02-proximal-gradient]].

## Table of Contents

- [[#Core Setup]]
- [[#Core Definitions]]
- [[#Key Interpretations]]
- [[#Rates and Quantities]]
- [[#Proof Logic To Memorize]]
- [[#Likely Exam Traps]]


## Core Setup
- Composite objective: $f(x)=g(x)+h(x)$.
- $g$ is the smooth part.
- $h$ is convex and possibly nonsmooth.
- Standard convex theory usually assumes both are convex, but broader proximal-gradient methods allow nonconvex $g$.

## Core Definitions
- Proximal operator:
$$
\operatorname{prox}_{\eta,h}(v)=\arg\min_z \left\{\frac{1}{2\eta}\|z-v\|^2+h(z)\right\}.
$$
- Proximal-gradient update:
$$
y_{t+1}=x_t-\eta \nabla g(x_t),\qquad x_{t+1}=\operatorname{prox}_{\eta,h}(y_{t+1}).
$$
- Gradient mapping:
$$
G_\eta(x)=\frac{1}{\eta}\left(x-\operatorname{prox}_{\eta,h}(x-\eta\nabla g(x))\right).
$$
- Rearranged update: $x_{t+1}=x_t-\eta G_\eta(x_t)$.

## Key Interpretations
- $G_\eta(x)$ is the composite analogue of the gradient.
- If $h=0$, then $G_\eta(x)=\nabla g(x)$.
- Stationarity is expressed as $G_\eta(x)=0$.
- The actual step added to the iterate is $-\eta G_\eta(x)$.

## Rates and Quantities

| Setting | Assumptions | Step size | Quantity controlled | Full inequality | Rate shorthand |
| --- | --- | --- | --- | --- | --- |
| Pure proximal step ($g=0$) | $h$ convex | any $\eta>0$ | one-step decrease in $h$ | $h(x^{t+1}) \le h(x^t)-\eta\|G_\eta(x^t)\|^2$ | monotone descent |
| Prox-GD descent lemma | $g$ convex and $\beta$-smooth, $h$ convex | $\eta\le 1/\beta$ | one-step decrease in $f$ | $f(x-\eta G_\eta(x)) \le f(x)-\frac{\eta}{2}\|G_\eta(x)\|^2$ | monotone descent |
| Convex proximal gradient | $g$ convex and $\beta$-smooth, $h$ convex | $\eta=1/\beta$ | $f(x^k)-f(x^*)$ | $f(x^k)-f(x^*) \le \frac{\beta}{2k}\|x^0-x^*\|^2$ | $O(1/k)$ |
| Strongly convex proximal gradient | $g$ $\alpha$-strongly convex and $\beta$-smooth, $h$ convex | $\eta=1/\beta$ | $\|x^k-x^*\|^2$ | $\|x^k-x^*\|^2 \le (1-\alpha/\beta)^k\|x^0-x^*\|^2 = (1-1/\kappa)^k\|x^0-x^*\|^2$ | linear convergence |

- The convex theorem controls function-value error.
- The strongly convex theorem here is written as a contraction in squared distance to the optimizer.
- The first two rows are one-step descent statements, not long-horizon $k$-step rates.

## Proof Logic To Memorize
- Apply smoothness to $g$.
- Use prox optimality / convexity for $h$.
- Combine the two inequalities.
- Rewrite the result in terms of $G_\eta(x)$.

## Likely Exam Traps
- Forgetting that $g$ is the smooth part and $h$ is the nonsmooth part.
- Saying the gradient mapping is just notation, rather than the generalized gradient object.
- Forgetting that the update can be written as $x_{k+1}=x_k-\eta G_\eta(x_k)$.
- Mixing up convex composite theory with broader nonconvex proximal-gradient use.
