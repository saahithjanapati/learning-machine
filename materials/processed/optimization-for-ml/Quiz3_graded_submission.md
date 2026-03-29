# Quiz 3 (Graded Submission)

Source: `materials/archive/submission_400400482.pdf`
Duplicate equivalents: `submission_400400482.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 7

## Page 1
### Content
**Quiz 3**
**Graded**

**Student**
Saahith Janapati

**Total Points**
8 / 12 pts

### Visual Description
Text-only slide showing the quiz title, student name, and total score. There is a green dot next to "Graded".

---

## Page 2
### Content
**Question 1**
(no title) **8 / 12 pts**

**1.1 (no title) 1 / 1 pt**
*   **- 0 pts** Correct. answer: SGD is faster per iteration but has worse iteration complexity (no need to mention iteration complexity). But even though it has worse iteration complexity, it converges faster in clock time in practice.
*   **- 0.75 pts** some effort
*   **- 0.01 pts** $-\epsilon$
*   **- 0.25 pts** (*≧ω≦) see comment
*   **- 1 pt** conceptually incorrect

**1.2 (no title) 1 / 1 pt**
*   **- 0 pts** Correct
*   **- 0.5 pts** missing/incorrect convergence quantity
*   **- 1 pt** blank
*   **- 0.5 pts** incorrect rate

**1.3 (no title) 1 / 1 pt**
*   **- 0 pts** Correct
*   **- 1 pt** No detail
*   **- 0.5 pts** detail is not complete or wrong

**1.4 (no title) 1 / 1 pt**
*   **- 0 pts** Correct
*   **- 0.5 pts** The definition is not clear or has issues.

**1.5 (no title) 0 / 2 pts**
*   **- 0 pts** Correct
*   **- 0.5 pts** The domain where the dual equals $-b^\top u - h^\top \nu$ satisfies
    1. $A^\top u + G^\top \nu + c = 0$
    2. $\nu \ge 0$.
    You missed one of them
*   **- 0.5 pts** The range of dual when it's $-\infty$ is exact opposite of above
*   **- 0.1 pts** Slight error of the range when the dual is $-\infty$, for example, only $A^\top u + G^\top \nu + c \neq 0$ is not complete.
*   **- 2 pts** Incorrect
*   **- 1 pt** Incorrect calculation
*   **- 0.01 pts** Slight mistake.
*   **- 0.5 pts** Did not explicitly state the range of feasible set.

### Visual Description
Grading summary page for sub-questions 1.1 through 1.5, showing points awarded and rubric feedback.

---

## Page 3
### Content
**1.6 (no title) 1 / 1 pt**
*   **- 0 pts** Correct: True
*   **- 1 pt** Incorrect / missing

**1.7 (no title) 2 / 2 pts**
*   **- 0 pts** Correct
*   **- 2 pts** Click here to replace this description.
*   **- 1 pt** Click here to replace this description.

**1.8 (no title) 0 / 1 pt**
*   **- 0 pts** True
*   **- 1 pt** Incorrect

**1.9 (no title) 0 / 1 pt**
*   **- 0 pts** Correct: False, we need strong duality to hold for this to be true.
*   **- 1 pt** Incorrect

**1.10 (no title) 1 / 1 pt**
*   **- 0 pts** Correct
*   **- 0.5 pts** Partially correct
*   **- 1 pt** Incorrect

### Visual Description
Grading summary page for sub-questions 1.6 through 1.10, showing points awarded and rubric feedback.

---

## Page 4
### Content
Optimization for ML, 10-725
March 24, 2026
Carnegie Mellon University
Mini Test 3

**INSTRUCTIONS**
*   The total time for the quiz is **20 minutes**.
*   Electronic devices are not to be used.
*   None of the questions should require more than 4 lines to answer. It's OK to be concise if you address the key points. (it should be human-readable, though).

**Name:** Saahith Janapati
**Andrew ID:** sjanapat

1

### Visual Description
The cover page of the quiz containing the course title, date, university name, test title, instructions, and student identification fields.

---

## Page 5
### Content
Optimization for ML, 10-725
March 24, 2026
Carnegie Mellon University
Mini Test 3

### 1 Questions

1. In empirical risk minimization, what are the main advantages of the stochastic subgradient method compared with the full-batch subgradient method?
    > Less compute needed for each step (don't need to compute grad on full dataset), so faster

2. What is the convergence rate of the proximal GD algorithm for a $\beta$-smooth, convex $g$ and a convex $h$, using step size $\eta = 1/\beta$?
    > $O(\frac{\beta}{k})$
    > $\|x_k - x^*\|^2$ is convg.

3. What are the main steps of the Proximal GD algorithm, under the same assumptions as above? (Write all details, including the prox function definition, etc.)
    > $prox_{\eta,h}(v) = \text{argmin}_z \frac{1}{2\eta} \|z - v\|_2^2 + h(z)$
    > $y_{t+1} = x_t - \eta \nabla g(x_t)$
    > $x_{t+1} = prox_{\eta,h}(y_{t+1})$

4. Consider the following LP: $\min_{x \in \mathbb{R}^n} c^\top x$ such that $Ax = b$ and $Gx \le h$. What is its Lagrangian function?
    > $L(x, u, \nu) = c^\top x + u^\top(Ax - b) + \nu^\top(Gx - h)$,
    > $\nu \ge 0$

2

### Visual Description
Page 2 of the quiz containing questions 1 through 4 with handwritten student answers in boxes.

---

## Page 6
### Content
Optimization for ML, 10-725
March 24, 2026
Carnegie Mellon University
Mini Test 3

5. Derive the dual function $g(u, \nu)$ of the above-mentioned LP.
    > $\nabla L(x, u, \nu) = 0 = c^\top + (u^\top A + \nu^\top G)$
    > Find $x$ that satisfies $\nabla L(x, u, \nu)$.
    > Plug into $L(x, u, \nu) = g(u, \nu)$

6. True or False? Even if the objective functions and the constraints of a Primal problem are not convex, its dual function $g(u, \nu)$ is always a concave function. (No need to justify.)
    > True

7. What are the KKT Conditions? (Either the English names of the conditions or their mathematical definitions suffice.)
    > * primal feasibility
    > * dual feasibility
    > * complementary slackness
    > * stationarity

8. True or False? For a convex optimization problem with differentiable objective and constraint functions, if $(\hat{x}, \hat{u}, \hat{\nu})$ is a KKT point, then $\hat{x}$ is primal optimal, $(\hat{u}, \hat{\nu})$ is dual optimal, and strong duality holds. (No need to justify.)
    > False

9. True or False? For a convex optimization problem with differentiable objective and constraint functions, if $x^*$ is a primal optimal solution, $(u^*, \nu^*)$ is a dual optimal solution, then $(x^*, u^*, \nu^*)$ is a KKT point. (No need to justify.)
    > True

10. Consider a nonconvex primal minimization problem and its dual maximization problem. If the dual problem is unbounded, what can we conclude about the primal problem?
    > primal is infeasible

3

### Visual Description
Page 3 of the quiz containing questions 5 through 10 with handwritten student answers in boxes.

---

## Page 7
### Content
[Blank Page]

### Visual Description
Text-only slide. This page is blank.

---
