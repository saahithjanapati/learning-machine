# Homework 2 (Graded Submission)

Source: `materials/archive/submission_392216540.pdf`
Duplicate equivalents: `submission_392216540.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `MIXED`
Pages: 26

## Page 1
### Content
# Homework 2
**Graded**

**Student**
Saahith Janapati

**Total Points**
73 / 76 pts

**Question 1**
Implications of Smoothness and Strong Convexity **20 / 20 pts**

**1.1** 1.1 **10 / 10 pts**
*   $\checkmark$ - 0 pts Correct
*   - 2 pts a-b
*   - 2 pts b-c
*   - 2 pts c-d
*   - 2 pts d-b
*   - 2 pts c-a
*   - 1 pt (*≧ω≦)

**1.2** 1.2 **10 / 10 pts**
*   $\checkmark$ - 0 pts Correct
*   - 2.5 pts a-b
*   - 0.5 pts those of you who got marked points off for this subpart commonly did something like d->b, b->c, c->d, d->a, but wrongly claimed that the d->b statement is a->b. Review the zeroth order definition of convexity guys (EDIT: if you read a certain piazza post and got confused on what the first statement implied, submit a regrade request)
*   - 2.5 pts b-c
*   - 2.5 pts c-d
*   - 2.5 pts d-a
*   - 1 pt (*≧ω≦)
*   - 0.001 pts SELECT PAGES >:(

**Question 2**
Projection to the PSD Cone **6 / 6 pts**
*   $\checkmark$ - 0 pts Correct
*   - 1 pt Minor error
*   - 2 pts Found the correct protection but its optimality is not proven
*   - 6 pts missing

### Visual Description
This is a grading summary page from an online platform (likely Gradescope). It shows the student's name, total score, and a breakdown of points for Questions 1 and 2. Green checkmarks indicate correct answers, and red text lists potential point deductions that were not applied in this case.

---
## Page 2
### Content
**Question 3**
Convex-Concave Functions and Saddle-Points **10 / 10 pts**

**3.1 a** **3 / 3 pts**
*   $\checkmark$ - 0 pts Correct
*   - 1 pt You should write in a more mathematical format of $\Delta_{xx}^2 f(x, z)$

**3.2 b** **3 / 3 pts**
*   $\checkmark$ - 0 pts Correct

**3.3 c** **4 / 4 pts**
*   $\checkmark$ - 0 pts Correct
*   - 0.5 pts Minor mistake
*   - 1.5 pts Mistake

**Question 4**
Step-Sizes and Optimization Algorithms **15 / 15 pts**

**4.1 Polyak Step-Sizes** **10 / 10 pts**
*   $\checkmark$ - 0 pts Correct
*   - 1 pt Please provide the mathematical derivation for 4.1 (2).
*   - 0.5 pts For 4.1 (3), please provide more detail
*   - 0.5 pts Click here to replace this description.

**4.2 Step-Size Schedule** **5 / 5 pts**
*   $\checkmark$ - 0 pts Correct
*   - 1 pt uses theorem without clearly stating
*   - 2 pts Major issue

### Visual Description
This page continues the grading summary, showing point breakdowns for Questions 3 and 4. It includes specific feedback comments in red for potential deductions.

---
## Page 3
### Content
**Question 5**
Effects of Learning Rate Schedulers on Optimization Performance **22 / 25 pts**

**5.1 5.1.1** **2 / 2 pts**
*   $\checkmark$ - 0 pts Correct
*   - 1 pt Did not identify that $f$ is 2-strongly convex and 4-smooth AND did not identify that $f$ is least-squares.
*   - 1 pt Incorrect learning rate. Either $1/4$ or $1/3$ is acceptable.

**5.2 5.1.2** **2 / 2 pts**
*   $\checkmark$ - 0 pts Correct
*   - 2 pts Incorrect implementation.
*   [1] yeah you should expand out what a and b are, if i see this again i'm taking points off :)

**5.3 5.1.3** **2 / 2 pts**
*   $\checkmark$ - 0 pts Correct
*   - 1 pt Did not find that the "optimal" learning rate is $\sim 1/3$.
*   - 1 pt If answered 1/4 in previous questions, did NOT identify that this does NOT align with theory. Did not discuss that theory is worst-case.

**5.4 5.1.4** **1 / 2 pts**
*   - 0 pts Correct
*   - 1 pt Did not discuss contour plot / no contour plot
*   $\checkmark$ - 1 pt Did not discuss rate of convergence along $x, y$ directions in relation to the steepness of $f$.

**5.5 5.1.5** **1 / 1 pt**
*   $\checkmark$ - 0 pts Correct
*   - 1 pt Did not discuss increased steepness along the $y$-direction or no plot

**5.6 5.1.6** **2 / 2 pts**
*   $\checkmark$ - 0 pts Correct
*   - 1 pt Did not identify that the learning rate should be 1/40 AND did not identify that learning rate should be 1/21 (from LS)
*   - 1 pt Did not discuss smoothness of new $f$

**5.7 5.1.7** **1 / 1 pt**
*   $\checkmark$ - 0 pts Correct
*   - 1 pt Did not discuss the rate of convergence with respect to the contour plot. Did not discuss new contour plot and how the shape of $f$ changed.

### Visual Description
This page continues the grading summary for Question 5. It shows a point deduction for sub-question 5.1.4 and includes several grader comments, including one highlighted in a yellow circle with the number '1'.

---
## Page 4
### Content
**5.8 5.1.Finale** **2 / 2 pts**
*   $\checkmark$ - 0 pts Correct
*   - 2 pts Did not "vectorize" learning rate, or did not use momentum, etc.

**5.9 5.2.1** **3 / 3 pts**
*   $\checkmark$ - 0 pts Correct subgradient up to scalar factor
*   - 2 pts Incorrect subgradient should be $\frac{1}{n} X^T(Xw - y) - \alpha \text{sign}(w)$
*   - 3 pts Missing

**5.10 5.2.2** **2 / 2 pts**
*   $\checkmark$ - 0 pts Correct
*   - 2 pts Incorrect
*   - 0 pts Incorrect constant

**5.11 5.2.3** **1 / 3 pts**
*   - 0 pts Correct
*   - 1 pt Missing training / test loss plot or missing train / test $R^2$ plot
*   $\checkmark$ - 2 pts Results look off: incorrect heatmap, cannot get the target $R^2$,
*   - 3 pts missing
*   [2] plot looks off

**5.12 5.2.4** **1 / 1 pt**
*   $\checkmark$ - 0 pts Correct
*   - 1 pt Missing

**5.13 5.2.5** **2 / 2 pts**
*   $\checkmark$ - 0 pts Correct
*   - 1 pt Constructed counterexample does not work for all $\alpha > 0$
*   - 2 pts Counterexample is incorrect
*   - 2 pts Missing

### Visual Description
This page concludes the grading summary for Question 5, showing a significant point deduction for sub-question 5.2.3. It includes a grader comment highlighted in a yellow circle with the number '2'.

---
## Page 5
### Content
**Question 6**
Collaboration Questions **0 / 0 pts**

**6.1 (no title)** **0 / 0 pts**
*   - 0 pts Received Help
*   $\checkmark$ - 0 pts Did Not Receive Help
*   - 0 pts Blank

**6.2 (no title)** **0 / 0 pts**
*   - 0 pts Gave Help
*   $\checkmark$ - 0 pts Did Not Give Help
*   - 0 pts Blank

**6.3 (no title)** **0 / 0 pts**
*   - 0 pts Found Code
*   $\checkmark$ - 0 pts Did Not Find Code
*   - 0 pts Blank

### Visual Description
This page shows the grading summary for Question 6, which consists of standard collaboration disclosure questions. All are marked as 0/0 points.

---
## Page 6
### Content
No questions assigned to the following page.

# HOMEWORK 2
## CMU 10-725: CONVEX OPTIMIZATION
OUT: Tuesday, Feb 3rd, 2025
DUE: Thursday, Feb 24th, 2025, 11:59pm

### START HERE: Instructions
*   **Collaboration policy:** Collaboration on solving the homework is allowed, after you have thought about the problems on your own. To remind you, many questions in this HW have solutions that are very easy to find online (and many are from previous versions of this course). It is also OK to get clarification (but not solutions) from books or online resources, again after you have thought about the problems on your own. There are two requirements: first, cite your collaborators fully and completely (e.g., "Jane explained to me what is asked in Question 2.1"). Second, write your solution *independently*: close the book and all of your notes, and send collaborators out of the room, so that the solution comes from you only.
*   **Submitting your work:**
    *   **Gradescope:** For the written problems such as short answer, multiple choice, derivations, proofs, or plots, we will be using the Gradescope. The best way to format your homework is by using the Latex template released in the handout and writing your solutions in Latex. However, submissions can be handwritten onto the template, but should be labeled and clearly legible. If your writing is not legible, you will not be awarded marks. Regrade requests can be made after the homework grades are released, however this gives the TA the opportunity to regrade your entire paper, meaning if additional mistakes are found then points will be deducted.
    *   **Programming:** You should submit all code used to solve the programming aspect of the homework to the corresponding 'Programming' submission slot on Gradescope. If you do not do this, you will not get any credit for any of the programming section irrespective of the plots and values submitted to the 'Written' submission slot.

1

### Visual Description
Text-only slide. This is the cover page of the homework assignment, containing course information, deadlines, and instructions regarding collaboration and submission.

---
## Page 7
### Content
Question assigned to the following page: 1.1

# 1 Implications of Smoothness and Strong Convexity (20 points) - Julia

Let $f$ be convex and twice differentiable.

1. (10 pts) Show that the following statements are equivalent.
    (a) $\nabla f$ is Lipschitz with constant $\beta$;
    (b) $(\nabla f(x) - \nabla f(y))^T(x - y) \le \beta \|x - y\|_2^2$ for all $x, y$;
    (c) $\nabla^2 f(x) \preceq \beta I$ for all $x$;
    (d) $f(y) \le f(x) + \nabla f(x)^T(y - x) + \frac{\beta}{2} \|y - x\|_2^2$ for all $x, y$.

We suggest that you prove (a) $\implies$ (b), (b) $\implies$ (c), (c) $\implies$ (d), (d) $\implies$ (b), and (c) $\implies$ (a). You are welcome to try alternative approaches, but your response will be graded with respect to these 5 parts.

**Hints:** You can use the following property of the directional derivative of $g : \mathbb{R}^n \to \mathbb{R}$ at $h$, where $\|h\|_2 = 1$:
$$\nabla g(x)^T h = \lim_{t \to 0} \frac{g(x + th) - g(x)}{t}.$$
As an application of this, we have that
$$\nabla^2 f(x) h = \lim_{t \to 0} \frac{\nabla f(x + th) - \nabla f(x)}{t}.$$
Also recall the Taylor expansion with Lagrange form for the remainder:
$$f(y) = f(x) + \nabla f(x)^T(y - x) + \frac{1}{2}(y - x)^T \nabla^2 f(\lambda x + (1 - \lambda)y)(y - x).$$
Finally, recall the integral form of the mean-value theorem: we have that for all $x, y$:
$$\nabla f(y) - \nabla f(x) = \int_0^1 \nabla^2 f(x + t(y - x))(y - x) dt.$$

**Solution (a) $\implies$ (b):** By the definition of the Lipschitz constant, we know $\|\nabla f(x) - \nabla f(y)\|_2 \le \beta \|x - y\|_2$. By Cauchy-Schwarz, we have:
$$(\nabla f(x) - \nabla f(y))^T(x - y) \le \|\nabla f(x) - \nabla f(y)\|_2 \|x - y\|_2$$
Substituting the Lipschitz property into the right side gives:
$$(\nabla f(x) - \nabla f(y))^T(x - y) \le (\beta \|x - y\|_2) \|x - y\|_2 = \beta \|x - y\|_2^2$$

**(b) $\implies$ (c):** Let $y = x + th$ where $\|h\|_2 = 1$ and $t > 0$. Plugging this into the inequality in (b):
$$(\nabla f(x + th) - \nabla f(x))^T(th) \le \beta \|th\|_2^2 = \beta t^2$$

2

### Visual Description
This page contains the problem statement for Question 1 and the beginning of the student's solution. It includes mathematical definitions, hints, and the first part of a proof. The student's solution is written in red text.

---
## Page 8
### Content
Question assigned to the following page: 1.1

Now we divide both sides by $t^2$:
$$\frac{(\nabla f(x + th) - \nabla f(x))^T h}{t} \le \beta$$
Taking the limit as $t \to 0$ and using the directional derivative hint provided in the problem:
$$h^T \nabla^2 f(x) h \le \beta$$
Since this holds for any $h$ with $\|h\|_2 = 1$, it follows that $\nabla^2 f(x) \preceq \beta I$.

**(c) $\implies$ (d):** Using the Taylor expansion with Lagrange remainder, there exists some $z$ on the line between $x$ and $y$ such that:
$$f(y) = f(x) + \nabla f(x)^T(y - x) + \frac{1}{2}(y - x)^T \nabla^2 f(z)(y - x)$$
From part (c), we have $\nabla^2 f(z) \preceq \beta I$, so we can bound the quadratic term:
$$\frac{1}{2}(y - x)^T \nabla^2 f(z)(y - x) \le \frac{1}{2}(y - x)^T (\beta I)(y - x) = \frac{\beta}{2} \|y - x\|_2^2$$
Substituting this back into the Taylor expansion gives the result:
$$f(y) \le f(x) + \nabla f(x)^T(y - x) + \frac{\beta}{2} \|y - x\|_2^2$$

**(d) $\implies$ (b):** We write the inequality in (d) twice, once for $f(y)$ and once for $f(x)$:
(a) $f(y) \le f(x) + \nabla f(x)^T(y - x) + \frac{\beta}{2} \|y - x\|_2^2$
(b) $f(x) \le f(y) + \nabla f(y)^T(x - y) + \frac{\beta}{2} \|x - y\|_2^2$
Adding these two inequalities together, the $f(x)$ and $f(y)$ terms cancel out:
$$0 \le \nabla f(x)^T(y - x) + \nabla f(y)^T(x - y) + \beta \|x - y\|_2^2$$
Rearranging the terms:
$$-(\nabla f(y) - \nabla f(x))^T(x - y) \le \beta \|x - y\|_2^2$$
Which is the same as:
$$(\nabla f(x) - \nabla f(y))^T(x - y) \le \beta \|x - y\|_2^2$$

**(c) $\implies$ (a):** Using the integral form of the mean value theorem from the hint:
$$\nabla f(y) - \nabla f(x) = \int_0^1 \nabla^2 f(x + t(y - x))(y - x) dt$$
Taking the norm of both sides:
$$\|\nabla f(y) - \nabla f(x)\|_2 = \left\| \int_0^1 \nabla^2 f(x + t(y - x))(y - x) dt \right\|_2 \le \int_0^1 \|\nabla^2 f(x + t(y - x))(y - x)\|_2 dt$$

3

### Visual Description
This page continues the student's proof for Question 1, showing the derivations for parts (b) $\implies$ (c), (c) $\implies$ (d), (d) $\implies$ (b), and the start of (c) $\implies$ (a). The solution is written in red text and contains several mathematical expressions and inequalities.
## Page 9
### Content
Since $\nabla^2 f(z) \preceq \beta I$, the induced 2-norm (spectral norm) of the Hessian is at most $\beta$.
So:
$$\|\nabla f(y) - \nabla f(x)\|_2 \le \int_0^1 \beta \|y - x\|_2 dt = \beta \|y - x\|_2$$
This shows $\nabla f$ is Lipschitz with constant $\beta$.

2. **(10 pts)** Show that the following statements are equivalent.
    (a) $f$ is strongly convex with constant $\alpha$;
    (b) $(\nabla f(x) - \nabla f(y))^T(x - y) \ge \alpha \|x - y\|_2^2$ for all $x, y$;
    (c) $\nabla^2 f(x) \succeq \alpha I$ for all $x$;
    (d) $f(y) \ge f(x) + \nabla f(x)^T(y - x) + \frac{\alpha}{2}\|y - x\|_2^2$ for all $x, y$.

We suggest that you prove (a) $\implies$ (b), (b) $\implies$ (c), (c) $\implies$ (d), and (d) $\implies$ (a). You are welcome to try alternative approaches, but your response will be graded with respect to these 4 parts.

**Solution** We show the equivalence using the 4 parts suggested in the problem:

**(a) $\implies$ (b):** By the definition of strong convexity, the function $g(x) = f(x) - \frac{\alpha}{2}\|x\|^2$ is convex. For a convex function, we know that $(\nabla g(x) - \nabla g(y))^T(x - y) \ge 0$. Calculating the gradient of $g(x)$: $\nabla g(x) = \nabla f(x) - \alpha x$. Plugging this into the inequality:
$$(\nabla f(x) - \alpha x - (\nabla f(y) - \alpha y))^T(x - y) \ge 0$$
$$(\nabla f(x) - \nabla f(y) - \alpha(x - y))^T(x - y) \ge 0$$
$$(\nabla f(x) - \nabla f(y))^T(x - y) - \alpha(x - y)^T(x - y) \ge 0$$
So, $(\nabla f(x) - \nabla f(y))^T(x - y) \ge \alpha \|x - y\|_2^2$.

**(b) $\implies$ (c):** Let $y = x + th$ for some vector $h$ where $\|h\|_2 = 1$ and $t > 0$. Subbing this into the part (b) inequality:
$$(\nabla f(x + th) - \nabla f(x))^T(th) \ge \alpha \|th\|_2^2 = \alpha t^2$$
Divide both sides by $t^2$:
$$\frac{(\nabla f(x + th) - \nabla f(x))^T h}{t} \ge \alpha$$
If we take the limit as $t \to 0$, the LHS becomes the directional derivative of the gradient, which is $h^T \nabla^2 f(x) h$. So $h^T \nabla^2 f(x) h \ge \alpha$ for all unit vectors $h$, which means $\nabla^2 f(x) \succeq \alpha I$.

**(c) $\implies$ (d):** Using the Taylor expansion with Lagrange form of the remainder, there is some $z$ on the segment between $x$ and $y$ such that:
$$f(y) = f(x) + \nabla f(x)^T(y - x) + \frac{1}{2}(y - x)^T \nabla^2 f(z)(y - x)$$

### Visual Description
Text-only slide.

---
## Page 10
### Content
Since we know from (c) that $\nabla^2 f(z) \succeq \alpha I$ for all $z$, the quadratic term can be bounded below:
$$\frac{1}{2}(y - x)^T \nabla^2 f(z)(y - x) \ge \frac{1}{2}(y - x)^T (\alpha I)(y - x) = \frac{\alpha}{2}\|y - x\|_2^2$$
Plugging this back into the expansion gives:
$$f(y) \ge f(x) + \nabla f(x)^T(y - x) + \frac{\alpha}{2}\|y - x\|_2^2$$

**(d) $\implies$ (a):** We need to show $g(x) = f(x) - \frac{\alpha}{2}\|x\|^2$ is convex. A function is convex if $g(y) \ge g(x) + \nabla g(x)^T(y - x)$. LHS: $f(y) - \frac{\alpha}{2}\|y\|^2$ RHS using $\nabla g(x) = \nabla f(x) - \alpha x$:
$$f(x) - \frac{\alpha}{2}\|x\|^2 + (\nabla f(x) - \alpha x)^T(y - x)$$
From (d), we have $f(y) \ge f(x) + \nabla f(x)^T(y - x) + \frac{\alpha}{2}\|y - x\|_2^2$. So we check if:
$$f(x) + \nabla f(x)^T(y - x) + \frac{\alpha}{2}\|y - x\|_2^2 - \frac{\alpha}{2}\|y\|^2 \ge f(x) - \frac{\alpha}{2}\|x\|^2 + \nabla f(x)^T(y - x) - \alpha x^T(y - x)$$
Cancelling $f(x)$ and the gradient terms, we just need to see if:
$$\frac{\alpha}{2}(\|y - x\|^2 - \|y\|^2) \ge -\frac{\alpha}{2}\|x\|^2 - \alpha x^T(y - x)$$
Expanding the LHS: $\|y\|^2 - 2x^T y + \|x\|^2 - \|y\|^2 = \|x\|^2 - 2x^T
## Page 17
### Content
Question assigned to the following page: 4.2

Since $\epsilon$ can be arbitrarily small, the limit of the ratio is indeed 0:
$$\lim_{T \to \infty} \frac{\sum_{t=0}^T \eta_t^2}{\sum_{t=0}^T \eta_t} = 0$$

Sending $T \to \infty$ in our original bound, both terms vanish, so $f(x^{best}) - f(x^*) \to 0$, which proves convergence.

12

### Visual Description
Text-only slide with a centered mathematical limit formula.

---
## Page 18
### Content
Questions assigned to the following page: 5.1, 5.2, and 5.3

# 5 Effects of Learning Rate on Optimization Performance (25 Pts) - Michael

In this problem, we will further explore (stochastic) gradient descent, some failure modes, and the crucial role that learning rate plays.

## 5.1 Quadratic Bowl Function (15 Pts)

In this subpart, we will consider the following function (called the "quadratic bowl")
$$f(x, y) = ax^2 + by^2.$$

Two or three sentences for each of the following questions is sufficient.

**For the questions below suppose that $a = 1, b = 2$.**

1. What are the relevant convexity and smoothness properties of $f$? (eg: is it strictly/strongly convex, is it Lipschitz, etc.?) As a result, using the bound of gradient descent that we proved in class for this function family, what does the theory tell us the learning rate should be? Given this learning rate, what do we expect the convergence rate to be?

**Solution** The function $f(x, y) = x^2 + 2y^2$ is a quadratic with a Hessian $\nabla^2 f(x, y) = \text{diag}(2, 4)$. Since the eigenvalues of the Hessian are bounded between 2 and 4, the function is 2-strongly convex ($\alpha = 2$) and its gradient is 4-Lipschitz smooth ($\beta = 4$).

The optimal fixed learning rate should be $\eta = 1/\beta = 1/4$ (or $2/(\alpha + \beta) = 1/3$). Since the function is also strongly convex, we expect a linear convergence rate where the error $f(x^t) - f(x^*)$ decreases as $O(c^t)$ for some $c < 1$.

2. For a given $(x, y)$, manually derive the gradient of $f$. Then, implement the `gd_f` function in `bowl.py`: gradient descent of $f$ from any starting point $x_0$ given any learning rate $\alpha$

**Solution** The gradient is derived as follows:
$$\nabla f(x, y) = \begin{bmatrix} \frac{\partial f}{\partial x} \\ \frac{\partial f}{\partial y} \end{bmatrix} = \begin{bmatrix} 2ax \\ 2by \end{bmatrix}$$

3. For $x_0 = (3, -2)$, find a fixed learning rate such that `gd_f` converges extremely quickly ($\sim 3$ steps). For full credit, you need to be within 5% of the optimal value. Does the learning rate you found align with what the theory predicts should work well?

**Solution** Using $x_0 = (3, -2)$, I searched fixed learning rates and found that $\alpha \approx 0.327$ is empirically best for minimizing $f(x^3)$; the theory value $\alpha^* = \frac{2}{\mu + L} = \frac{2}{2 + 4} = \frac{1}{3} \approx 0.333$ is within 2% of this and gives essentially the same behavior.

With $\alpha = \frac{1}{3}$, after 3 steps I get $f(x^3) \approx 2.33 \times 10^{-2}$ (very close to the optimum value 0), so convergence is extremely fast and matches the strongly-convex smoothness theory.

13

### Visual Description
Text-heavy slide containing problem descriptions and solutions for a quadratic optimization task. Includes mathematical notation for functions, gradients, and learning rates.

---
## Page 19
### Content
Questions assigned to the following page: 5.4 and 5.5

4. Plot (1) the level sets of $f$; (2) the trajectories of $x_t$ overlaid on the level set plot. What do you observe? (some questions to think about: *what if we increased $b$ to 20 and kept the same learning rate? how does the shape of the curve affect convergence of gradient descent assuming we use the "optimal" learning rate?*)

**Solution** The contour plot for $a = 1, b = 2$ is an ellipse, and the GD trajectory with $\alpha = \frac{1}{3}$ quickly contracts toward $(0, 0)$ with a mild zig-zag pattern. This is because the two coordinates have different curvature, so one coordinate flips sign while both shrink geometrically.

If we keep the same learning rate but increase $b$ to 20, the trajectory diverges (the $y$-update multiplier becomes $1 - 2b\alpha = 1 - \frac{40}{3} \approx -12.33$), showing how anisotropic curvature makes a previously good scalar step size unstable.

![Figure 1: Level sets and GD trajectory for a=1,
## Page 25
### Content
Question assigned to the following page: 5.13

**Solution** Counterexample (1D): let $n = d = 1, X = 0, y = 0$, and $\alpha > 0$. Then
$$\tilde{L}(w) = \alpha \mathbb{1}(|w| > 0).$$
Take $w_1 = 0$ and $w_2 = 1$. For $\lambda = \frac{1}{2}$,
$$\tilde{L}\left(\frac{w_1+w_2}{2}\right) = \tilde{L}(0.5) = \alpha,$$
while
$$\frac{1}{2}\tilde{L}(w_1) + \frac{1}{2}\tilde{L}(w_2) = \frac{1}{2}(0) + \frac{1}{2}(\alpha) = \frac{\alpha}{2}.$$
Since $\alpha > \alpha/2$, the convexity inequality fails:
$$\tilde{L}\left(\frac{w_1+w_2}{2}\right) > \frac{1}{2}\tilde{L}(w_1) + \frac{1}{2}\tilde{L}(w_2).$$
Therefore $\tilde{L}$ is not convex.

20

### Visual Description
Text-only slide. The mathematical proof is written in red text on a white background.

---
## Page 26
### Content
Questions assigned to the following page: 6.1, 6.2, and 6.3

# 6 Collaboration Questions

1. (a) Did you receive any help whatsoever from anyone in solving this assignment? **Solution** No.
   (b) If you answered 'yes', give full details (e.g. "Jane Doe explained to me what is asked in Question 3.4")
   
   **Solution**
   | |
   | :--- |
   | |

2. (a) Did you give any help whatsoever to anyone in solving this assignment? **Solution** No.
   (b) If you answered 'yes', give full details (e.g. "I pointed Joe Smith to section 2.3 since he didn't know how to proceed with Question 2")
   
   **Solution**
   | |
   | :--- |
   | |

3. (a) Did you find or come across code that implements any part of this assignment? **Solution** No.
   (b) If you answered 'yes', give full details (book & page, URL & location within the page, etc.).
   
   **Solution**
   | |
   | :--- |
   | |

21

### Visual Description
Text-only slide. It contains a numbered list of questions regarding collaboration, with empty rectangular boxes provided for detailed solutions. The word "Solution" is highlighted in red.
