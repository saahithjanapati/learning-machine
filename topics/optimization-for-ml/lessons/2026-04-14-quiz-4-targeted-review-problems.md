# Quiz 4 Targeted Review Problems

These problems focus on the areas that were least stable in the live review:

- SDP duality and the gap identity
- Schur complement recall
- Newton minimization vs root-finding
- NAG formulas and rates
- AdaGrad / RMSProp / Adam details

The style matches the earlier mini quizzes: short, exact, and formula-sensitive.

## Problems

1. State the primal SDP and the dual SDP in standard form.

2. What does $X \succeq 0$ mean? Give the mathematical definition.

3. State the Schur complement condition for

$$
\begin{pmatrix}
A & B \\
B^T & C
\end{pmatrix} \succeq 0.
$$

4. State weak duality for SDP, including the exact primal-dual gap identity.

5. Explain in one sentence why $S \bullet X \ge 0$ when $S \succeq 0$ and $X \succeq 0$.

6. Write the Newton update for unconstrained minimization.

7. Write the scalar Newton update for root finding, and state in one sentence how it differs from the minimization update.

8. Why is the Newton step a descent direction when the Hessian is positive definite?

9. State the local convergence rate of Newton's method near a nondegenerate local minimizer.

10. What does whitening do in ICA?

11. In the FastICA setup, what are the dimensions of $z$, $w$, and $y = w^T z$?

12. What is the difference between PCA and ICA?

13. State the FastICA optimization problem, including the constraint on $w$.

14. State the FastICA first-order condition from the Lagrangian derivation.

15. State the final FastICA fixed-point update, including normalization.

16. Write the Polyak momentum update.

17. Write the NAG update.

18. In one sentence, what is the difference between Polyak momentum and NAG?

19. State the convex smooth convergence rate of NAG, including the converging quantity.

20. State the strongly convex smooth convergence rate of NAG, including the converging quantity.

21. Write the coordinatewise AdaGrad update.

22. Why can AdaGrad become too conservative later in training?

23. Write the RMSProp update, including where the $\epsilon$ appears.

24. Write the Adam update, including the bias-correction terms.

25. Why are the bias-correction terms needed in Adam?

26. True or False: Adam is guaranteed to converge even for simple convex problems.

27. In one sentence, why is RMSProp introduced after AdaGrad?

## Short answer key

1.

$$
\min_X C \bullet X
\quad \text{s.t.} \quad
A_i \bullet X = b_i,\; X \succeq 0
$$

$$
\max_{y,S} y^T b
\quad \text{s.t.} \quad
S = C - \sum_i y_i A_i,\; S \succeq 0
$$

2.

$$
X \succeq 0 \iff v^T X v \ge 0 \quad \forall v
$$

3.

$$
\begin{pmatrix}
A & B \\
B^T & C
\end{pmatrix} \succeq 0
\iff
A \succeq 0 \text{ and } C - B^T A^{-1} B \succeq 0
$$

4.

$$
C \bullet X - y^T b = S \bullet X \ge 0
$$

5. Because the lecture theorem says the inner product of two PSD matrices is nonnegative.

6.

$$
x_{k+1} = x_k - [\nabla^2 f(x_k)]^{-1}\nabla f(x_k)
$$

7.

$$
x_{k+1} = x_k - \frac{\phi(x_k)}{\phi'(x_k)}
$$

Minimization applies Newton to $\nabla f(x)=0$, so it uses the Hessian.

8.

$$
\nabla f(x_k)^T \Delta x
=
-\nabla f(x_k)^T[\nabla^2 f(x_k)]^{-1}\nabla f(x_k) < 0
$$

9.

$$
\|x_{k+1}-x^*\| \le C\|x_k-x^*\|^2
$$

local quadratic convergence.

10. It transforms the data so that $E[zz^T] = I$, removing second-order correlations.

11.

$$
z \in \mathbb{R}^n,\qquad w \in \mathbb{R}^n,\qquad y = w^T z \in \mathbb{R}
$$

12. PCA decorrelates and explains variance; ICA seeks statistically independent components.

13.

$$
\max_{\|w\|=1} E[(w^T z)^4] - 3
$$

14.

$$
4E[(w^T z)^3 z] + 2\lambda w = 0
$$

15.

$$
\tilde w \leftarrow E[(w^T z)^3 z] - 3w,
\qquad
w \leftarrow \tilde w / \|\tilde w\|
$$

16.

$$
x_{t+1} = x_t - \eta \nabla F(x_t) + \gamma(x_t-x_{t-1})
$$

17.

$$
x_{t+1} = x_t - \eta \nabla F(x_t + \gamma(x_t-x_{t-1})) + \gamma(x_t-x_{t-1})
$$

18. NAG evaluates the gradient at a look-ahead point; Polyak uses the current point.

19.

$$
f(x_k)-f(x^*) = O\left(\frac{\beta \|x_0-x^*\|^2}{k^2}\right)
$$

20.

$$
f(x_k)-f(x^*) = O\left(\left(1-\sqrt{\frac{\alpha}{\beta}}\right)^k\right)
$$

21.

$$
h_{t,i} = \sqrt{\sum_{\tau=1}^t g_{\tau,i}^2},
\qquad
x_{t+1,i} = x_{t,i} - \eta \frac{g_{t,i}}{h_{t,i}}
$$

22. The denominator keeps growing, so the effective step sizes can become too small.

23.

$$
h_{t,i} = \gamma h_{t-1,i} + (1-\gamma)g_{t,i}^2,
\qquad
x_{t+1,i} = x_{t,i} - \frac{\eta}{\sqrt{h_{t,i}+\epsilon}}g_{t,i}
$$

24.

$$
m_t = \beta_1 m_{t-1} + (1-\beta_1)g_t,
\qquad
v_t = \beta_2 v_{t-1} + (1-\beta_2)g_t^2
$$

$$
\hat m_t = \frac{m_t}{1-\beta_1^t},
\qquad
\hat v_t = \frac{v_t}{1-\beta_2^t}
$$

$$
x_{t+1} = x_t - \frac{\eta}{\sqrt{\hat v_t}+\epsilon}\hat m_t
$$

25. Because the moving averages start at zero and are biased downward early on.

26. False.

27. RMSProp replaces AdaGrad's cumulative sum with an exponentially decaying average so the steps do not shrink too aggressively.
