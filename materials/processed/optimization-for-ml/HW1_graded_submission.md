# Homework 1 (Graded Submission)

Source: `materials/archive/submission_385591771.pdf`
Duplicate equivalents: `submission_385591771.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 15

## Page 1
### Content
**Homework 1** 🟢 Graded

**Student**
Saahith Janapati

**Total Points**
86.5 / 88 pts

**Question 1**
Convex Sets **20 / 20 pts**

**1.1 The polytope 5 / 5 pts**
*   ✅ **- 0 pts** Correct
*   **- 1 pt** Can you be more detailed about how you get the "finite set of linear inequalities"
*   **- 2 pts** need more details about explanations on l1 ball
*   **- 2 pts** uses both $\langle a_i, x \rangle$ and $a_i \cdot x$ notation inconsistently, which can be confusing.
*   **- 1 pt** The proof of $\ell_1$ ball's convexity is correct but you did not use the argument of linear constraints.
*   **- 2 pts** The correct set of constraints for the $\ell_1$ ball is $\langle a_i, x \rangle \le 1$ for all $a_i \in \{-1, 1\}^d$. There are $2^d$ many constraints.
*   **- 2 pts** Missed the proof for the convexity of $\ell_1$ ball

**1.2 The Unit Ball 5 / 5 pts**
*   ✅ **- 0 pts** Correct
*   **- 2 pts** Calculation error
*   **- 3 pts** Error in interpreting the $\ell_2$ ball constraint.

**1.3 The Linear Transformation 5 / 5 pts**
*   ✅ **- 0 pts** Correct

**1.4 The Ellipsoid 5 / 5 pts**
*   ✅ **- 0 pts** Correct
*   **- 2 pts** "This concludes the proof" by how so?
*   **- 1 pt** Unit ball and? should say refer to Q1.2

### Visual Description
This is a digital grading summary page from a learning management system (like Gradescope). It shows the student's name, total score, and a breakdown of points for Question 1. Each sub-question has a score and a list of possible point deductions with feedback comments. A green "Graded" badge is in the top right corner.

---

## Page 2
### Content
**Question 2**
Convex Functions **28.5 / 30 pts**

**2.1 The max Operation 5 / 5 pts**
*   ✅ **- 0 pts** Correct
*   **- 5 pts** Incorrect
*   **- 2 pts** $g(x)$ missing or incorrect.
*   **- 3 pts** $f(x)$ missing or incorrect.

**2.2 1-D Convex Function 10 / 10 pts**
*   ✅ **- 0 pts** All correct
*   **- 2 pts** Incorrect $f(x) = xe^x$
*   **- 2 pts** Incorrect $f(x) = (\text{ReLU}(x))^c$
*   **- 2 pts** Incorrect $f(x) = \log(1+e^x)$
*   **- 2 pts** Incorrect $f(x) = x \log x$
*   **- 2 pts** Incorrect $f(x) = x \sin x$

**2.3 Products and Quotients 3.5 / 5 pts** 💬
*   **- 0 pts** Correct
*   **- 1 pt** Incorrect counter example
*   **- 1 pt** Incorrect proof for part 3
*   ✅ **- 1.5 pts** Minor error in part 2: logical leap, incorrectly assuming that $f, g$ are differentiable, not rigorous
*   **- 3 pts** Missing / wrong argument for part 2
*   **- 0.5 pts** Minor mistake in part 3
*   **1** cannot assume differentiability

**2.4 Properties of KL-Divergence 5 / 5 pts**
*   ✅ **- 0 pts** Correct
*   **- 2.5 pts** Missing/Incorrectly showed that $KL \ge 0$
*   **- 2.5 pts** Missing/Incorrectly showed definiteness of $KL$
*   **- 1 pt** Only showed one way of if and only if of definiteness of $KL$
*   **- 1 pt** Other problems with rigor, confusing notation, leaping logic, faulty assumptions

### Visual Description
This page continues the grading summary for Question 2. It lists sub-questions 2.1 through 2.4 with scores and feedback. Question 2.3 has a blue comment icon and a specific numbered note "1" indicating a grader's comment about not assuming differentiability.

---

## Page 3
### Content
**2.5 Logistic Regression 5 / 5 pts**
*   ✅ **- 0 pts** Correct
*   **- 1 pt** Leaping logic, lack of rigor
*   **- 2 pts** Did not show that non-negative sum of convex functions is convex
*   **- 2 pts** Did not show that summand is convex
*   **- 5 pts** Incorrect or incomplete

**Question 3**
Characterizations of Convexity **10 / 10 pts**

**3.1 Question 1 3 / 3 pts**
*   ✅ **- 0 pts** Correct
*   **- 0.5 pts** Minor error
*   **- 1.5 pts** Partially incorrect
*   **- 3 pts** Incorrect

**3.2 Question 2 4 / 4 pts**
*   ✅ **- 0 pts** Correct
*   **- 1 pt** Minor mistake, e.g. missing justification
*   **- 2 pts** Partially Correct
*   **- 4 pts** Incorrect

**3.3 Question 3 3 / 3 pts**
*   ✅ **- 0 pts** Correct
*   **- 0.5 pts** Minor Mistake
*   **- 1.5 pts** Partially incorrect
*   **- 3 pts** Incorrect/Missing

### Visual Description
This page continues the grading summary, covering sub-question 2.5 and the entirety of Question 3. It follows the same format as previous pages, showing scores and feedback options.

---

## Page 4
### Content
**Question 4**
Partial Minimization **8 / 8 pts**

**4.1 Question 1 3 / 3 pts**
*   ✅ **- 0 pts** correct
*   **- 1.5 pts** Minor Mistake
*   **- 3 pts** Incorrect/Missing
*   **- 0 pts** $-\epsilon$
*   **- 2.5 pts** egregious

**4.2 Question 2 2 / 2 pts**
*   ✅ **- 0 pts** Correct
*   **- 2 pts** Incorrect
*   **- 1 pt** Minor Mistake

**4.3 Question 3 3 / 3 pts**
*   ✅ **+ 1.5 pts** Correct concave or convex
*   ✅ **+ 1.5 pts** Correct convexity of $f(x)$
*   **+ 0 pts** Incorrect/Missing
*   **- 0 pts** $-\epsilon$
*   **+ 0.5 pts** egregious

### Visual Description
This page shows the grading summary for Question 4. Sub-question 4.3 shows a positive point breakdown ($+1.5$ and $+1.5$) to reach the total of 3 points.

---

## Page 5
### Content
**Question 5**
Optimization with CVX **20 / 20 pts**

**5.1 Question 1 5 / 5 pts**
*   ✅ **- 0 pts** Correct
*   **- 2 pts** Incomplete
*   **- 1 pt** Small numerical error
*   **- 5 pts** Missing
*   **- 0.5 pts** Partial credit. The code was executed to verify, but the pdf should be self-contained.

**5.2 Question 2 5 / 5 pts**
*   ✅ **- 0 pts** Correct
*   **- 5 pts** Missing
*   **- 2 pts** Small mistake
*   **- 0.5 pts** Partial credit. The code was executed to verify, but the pdf should be self-contained.

**5.3 Question 3 5 / 5 pts**
*   ✅ **- 0 pts** Correct
*   **- 2 pts** Reporting an intercept
*   **- 1 pt** Reporting betas
*   **- 2 pts** Incomplete
*   **- 1 pt** Small numeric error
*   **- 5 pts** Missing
*   **- 0.5 pts** Partial credit. The code was executed to verify, but the pdf should be self-contained.

**5.4 Question 4 5 / 5 pts**
*   ✅ **- 0 pts** Correct
*   **- 3 pts** Wrong plot
*   **- 1 pt** To few points tested for a hyperparameter optimization
*   **- 5 pts** Missing
*   **- 0.5 pts** Partial credit. The code was executed to verify, but the pdf should be self-contained.

**Question 6**
Collaboration **0 / 0 pts**
*   **- 0 pts** Incomplete
*   ✅ **- 0 pts** Complete

### Visual Description
This page shows the grading summary for Question 5 and Question 6. Question 5 is about CVX optimization, and Question 6 is a zero-point check for a collaboration statement.

---

## Page 6
### Content
No questions assigned to the following page.

# HOMEWORK 1

### CMU 10-725: OPTIMIZATION FOR MACHINE LEARNING
OUT: Tuesday, Jan 20th, 2026
DUE: Tuesday, February 3rd, 2026, 11:59pm

### START HERE: Instructions

*   **Collaboration policy:** Collaboration on solving the homework is allowed, after you have thought about the problems on your own. To remind you, many questions in this HW have solutions that are very easy to find online (and many are from previous versions of this course). It is also OK to get clarification (but not solutions) from books or online resources, again after you have thought about the problems on your own. There are two requirements: first, cite your collaborators fully and completely (e.g., "Jane explained to me what is asked in Question 2.1"). Second, write your solution *independently*: close the book and all of your notes, and send collaborators out of the room, so that the solution comes from you only.
*   **Submitting your work:**
    *   **Gradescope:** For the written problems such as short answer, multiple choice, derivations, proofs, or plots, we will be using the Gradescope. The best way to format your homework is by using the Latex template released in the handout and writing your solutions in Latex. However, submissions can be handwritten onto the template, but should be labeled and clearly legible. If your writing is not legible, you will not be awarded marks. Regrade requests can be made after the homework grades are released, however this gives the TA the opportunity to regrade your entire paper, meaning if additional mistakes are found then points will be deducted.
    *   **Programming:** You should submit all code used to solve the programming aspect of the homework to the corresponding 'Programming' submission slot on Gradescope. If you do not do this, you will not get any credit for any of the programming section irrespective of the plots and values submitted to the 'Written' submission slot.

1

### Visual Description
This is the cover page of the actual homework assignment. It contains the course title, homework number, dates, and detailed instructions regarding collaboration and submission policies. It is a formal, text-heavy document.

---

## Page 7
### Content
Questions assigned to the following page: 1.1, 1.2, and 1.3

# 1 Convex sets - Michael

### 1.1 The polytope
**Solution** To show $\mathcal{P}$ is convex, pick any $x, y \in \mathcal{P}$ and $\theta \in [0, 1]$. We must show $z = \theta x + (1 - \theta)y \in \mathcal{P}$. Since $x, y \in \mathcal{P}$, they satisfy $\langle a_i, x \rangle \le b_i$ and $\langle a_i, y \rangle \le b_i$ for all $i \in [m]$. For the point $z$:
$$
\begin{aligned}
\langle a_i, \theta x + (1 - \theta)y \rangle &= \theta \langle a_i, x \rangle + (1 - \theta) \langle a_i, y \rangle \\
&\le \theta b_i + (1 - \theta) b_i = b_i
\end{aligned}
$$
Since $z$ satisfies all $m$ constraints, $z \in \mathcal{P}$. Thus, the polytope is convex.

**$\ell_1$ ball:** The set $\{x \mid \|x\|_1 \le 1\}$ can be expressed as a collection of linear inequalities: $\sum_{i=1}^d \pm x_i \le 1$ for all $2^d$ combinations of signs. Since this is a finite intersection of half-spaces (making it a polytope), it is a convex set.

### 1.2 The unit ball
**Solution** Pick $x, y \in \mathcal{B}$ and $\theta \in [0, 1]$. We check if $z = \theta x + (1 - \theta)y$ satisfies $\sum z_i^2 \le 1$. Using the hint $2ab \le a^2 + b^2$:
$$
\begin{aligned}
\sum_{i=1}^d (\theta x_i + (1 - \theta)y_i)^2 &= \sum (\theta^2 x_i^2 + (1 - \theta)^2 y_i^2 + 2\theta(1 - \theta)x_i y_i) \\
&\le \sum (\theta^2 x_i^2 + (1 - \theta)^2 y_i^2 + \theta(1 - \theta)(x_i^2 + y_i^2)) \\
&= (\theta^2 + \theta - \theta^2) \sum x_i^2 + ((1 - \theta)^2 + \theta - \theta^2) \sum y_i^2 \\
&= \theta \sum x_i^2 + (1 - \theta) \sum y_i^2
\end{aligned}
$$
Since $\sum x_i^2 \le 1$ and $\sum y_i^2 \le 1$, we have $\theta(1) + (1 - \theta)(1) = 1$. Thus $z \in \mathcal{B}$, and the unit ball is convex.

### 1.3 The linear transformation
**Solution** Let $x_1, x_2 \in \mathcal{C}$ and $\theta \in [0, 1]$. By definition, $Ax_1 + b = d_1$ and $Ax_2 + b = d_2$ for some $d_1, d_2 \in \mathcal{D}$. Let $z = \theta x_1 + (1 - \theta)x_2$. We check if $Az + b \in \mathcal{D}$:
$$
\begin{aligned}
A(\theta x_1 + (1 - \theta)x_2) + b &= \theta Ax_1 + (1 - \theta)Ax_2 + (\theta + 1 - \theta)b \\
&= \theta(Ax_1 + b) + (1 - \theta)(Ax_2 + b) \\
&= \theta d_1 + (1 - \theta)d_2
\end{aligned}
$$
Since $\mathcal{D}$ is a convex set, the convex combination $\theta d_1 + (1 - \theta)d_2$ is also in $\mathcal{D}$. Therefore, $z \in \mathcal{C}$, so $\mathcal{C}$ is convex.

2

### Visual Description
This page contains the student's handwritten-style (but likely LaTeX-formatted) solutions for questions 1.1, 1.2, and 1.3. The text is in red. It includes mathematical proofs for the convexity of a polytope, the $\ell_1$ ball, the unit ball, and a set defined by a linear transformation.

---

## Page 8
### Content
Question assigned to the following page: 1.4

### 1.4 Ellipsoid
**Solution** The ellipsoid can be rewritten as $\mathcal{E} = \{x \in \mathbb{R}^d \mid \|A(x - b)\|_2^2 \le 1\}$. This is the set of points $x$ such that the linear transformation $f(x) = Ax - Ab$ maps $x$ into the unit ball $\mathcal{B}$. From section 1.2, we know the unit ball $\mathcal{B}$ is convex. From section 1.3, we know that the inverse image of a convex set under a linear transformation is also convex. Since $\mathcal{E}$ is the inverse image of $\mathcal{B}$ under $f(x)$, $\mathcal{E}$ is convex.

3

### Visual Description
This page contains the solution for question 1.4, written in red text. It provides a proof for the convexity of an ellipsoid by relating it to the unit ball and linear transformations discussed in previous sections.

---
## Page 9
### Content
Questions assigned to the following page: 2.2, 2.3, 2.4, and 2.1

# 2 Convex Functions

## 2.1 The max Operation
**Solution** Let $f(x) = \max_i \{f_i(x)\}$. For any $x, y \in \mathbb{R}^d$ and $\theta \in [0, 1]$:
$$
\begin{aligned}
f(\theta x + (1 - \theta)y) &= \max_i f_i(\theta x + (1 - \theta)y) \\
&\le \max_i (\theta f_i(x) + (1 - \theta) f_i(y)) \quad \text{(by convexity of each } f_i \text{)} \\
&\le \theta \max_i f_i(x) + (1 - \theta) \max_i f_i(y) \\
&= \theta f(x) + (1 - \theta) f(y)
\end{aligned}
$$
Thus, $f(x)$ is convex. For $g(x) = \min_i \{f_i(x)\}$, it is **not** necessarily convex. For example, if $f_1(x) = x^2$ and $f_2(x) = (x - 2)^2$, the minimum of these two convex parabolas creates a non-convex hump at their intersection.

## 2.2 1-d Convex Functions
**Solution**
* $f(x) = xe^x$: $f'(x) = (x + 1)e^x$, $f''(x) = (x + 2)e^x$. For $x < -2$, $f'' < 0$. **Not convex.**
* $f(x) = \text{ReLU}(x)^c$: For $c \ge 1$, this is a non-decreasing convex function composed with a convex function. $f''(x) \ge 0$ where defined. **Convex.**
* $f(x) = \log(1 + e^x)$: $f'(x) = \frac{e^x}{1+e^x}$, $f''(x) = \frac{e^x}{(1+e^x)^2} > 0$. **Convex.**
* $f(x) = x \log x$: $f'(x) = 1 + \log x$, $f''(x) = 1/x$. Since $x > 0$, $f'' > 0$. **Convex.**
* $f(x) = x \sin x$: $f''(x) = 2 \cos x - x \sin x$, which changes signs periodically. **Not convex.**

## 2.3 Products and Quotients
**Solution**
1. Let $f(x) = 1$ and $g(x) = x^2 + 1$. Both are positive and convex, but $f/g = \frac{1}{x^2+1}$ is a "bell curve" shape, which is concave near $x = 0$.
2. $(fg)'' = f''g + 2f'g' + fg''$. Since $f, g > 0$ and $f, g$ are convex ($f'', g'' \ge 0$), and $f', g'$ have the same sign (both non-decreasing or non-increasing), all terms are $\ge 0$. Thus $fg$ is convex.
3. Let $h(x) = 1/g(x)$. Since $g$ is positive, concave, and non-increasing, $h$ is positive, convex, and non-decreasing. Since $f$ is also positive, convex, and non-decreasing, their product $f \cdot h = f/g$ is convex by part 2.

## 2.4 Properties of KL-Divergence
**Solution** Using the hint $D_{KL}(u||v) = f(u) - f(v) - \nabla f(v)^T(u - v)$ where $f(u) = \sum u_i \log u_i$: The Hessian $\nabla^2 f(u)$ is a diagonal matrix with entries $1/u_i$. Since $u_i > 0$, the Hessian is

4

### Visual Description
Text-only slide. The content consists of mathematical proofs and solutions related to convex functions, organized into numbered subsections. There is a small yellow circle with the number '1' near the bottom of section 2.3.

---

## Page 10
### Content
Questions assigned to the following page: 2.4 and 2.5

positive definite, so $f(u)$ is strictly convex. A property of convex functions is that the first-order Taylor approximation is a lower bound: $f(u) \ge f(v) + \nabla f(v)^T(u - v)$. Rearranging gives $f(u) - f(v) - \nabla f(v)^T(u - v) \ge 0$, so $D_{KL}(u||v) \ge 0$. By strict convexity, the equality $f(u) = f(v) + \nabla f(v)^T(u - v)$ holds if and only if $u = v$.

## 2.5 Logistic Regression
**Solution** $f(x) = \sum_{i=1}^m \log(1 + \exp(-y_i \langle a_i, x \rangle))$. Let $g(z) = \log(1 + e^z)$, which we showed is convex in 2.2. The term $z_i(x) = -y_i \langle a_i, x \rangle$ is an affine (and thus convex) function of $x$. The composition of a convex, non-decreasing function $g$ with a convex function $z_i$ is convex. Since $f(x)$ is the sum of these convex compositions, $f(x)$ is convex.

5

### Visual Description
Text-only slide. Continuation of the mathematical solutions from the previous page, specifically finishing section 2.4 and providing the solution for section 2.5.

---

## Page 11
### Content
Questions assigned to the following page: 3.1, 3.2, 3.3, 4.1, 4.2, and 4.3

# 3 Characterizations of Convexity

1. **Solution** By convexity, for any $t \in [0, 1]$, $f(x + t(y - x)) \le (1 - t)f(x) + tf(y)$. Rearranging: $\frac{f(x+t(y-x))-f(x)}{t} \le f(y) - f(x)$. Taking the limit as $t \to 0$: $\nabla f(x)^T(y - x) \le f(y) - f(x) \implies f(y) \ge f(x) + \nabla f(x)^T(y - x)$.
2. **Solution** From the hint, $f(y) - f(x) = \int_0^1 \nabla f(x + t(y - x))^T(y - x) dt$. Subtracting the first-order term: $f(y) - f(x) - \nabla f(x)^T(y - x) = \int_0^1 (\nabla f(x + t(y - x)) - \nabla f(x))^T(y - x) dt$. Let $z_t = x + t(y - x)$. Then $z_t - x = t(y - x)$. The integrand is $\frac{1}{t}(\nabla f(z_t) - \nabla f(x))^T(z_t - x)$. By monotone gradient property, $(\nabla f(z_t) - \nabla f(x))^T(z_t - x) \ge 0$. The integral of a non-negative function is non-negative, so $f(y) \ge f(x) + \nabla f(x)^T(y - x)$.
3. **Solution** Pick $x, y \in \text{dom}(f)$. Then $(x, f(x)) \in \text{Epi}(f)$ and $(y, f(y)) \in \text{Epi}(f)$. Since $\text{Epi}(f)$ is convex, the segment $\theta(x, f(x)) + (1 - \theta)(y, f(y))$ is in $\text{Epi}(f)$ for $\theta \in [0, 1]$. The point is $(\theta x + (1 - \theta)y, \theta f(x) + (1 - \theta)f(y))$. By definition of the epigraph, the height component must be $\ge f(\text{position component})$: $f(\theta x + (1 - \theta)y) \le \theta f(x) + (1 - \theta)f(y)$. This is the definition of convexity for $f$.

# 4 Partial Minimization

1. **Solution** Let $x_1, x_2 \in \mathbb{R}^d$. For any $\epsilon > 0$, there exist $y_1, y_2 \in C$ such that $f(x_1, y_1) \le g(x_1) + \epsilon$ and $f(x_2, y_2) \le g(x_2) + \epsilon$. Let $x_\theta = \theta x_1 + (1 - \theta)x_2$ and $y_\theta = \theta y_1 + (1 - \theta)y_2$. Since $C$ is convex, $y_\theta \in C$. $g(x_\theta) = \inf_{y \in C} f(x_\theta, y) \le f(x_\theta, y_\theta)$. By convexity of $f$: $g(x_\theta) \le \theta f(x_1, y_1) + (1 - \theta)f(x_2, y_2) \le \theta g(x_1) + (1 - \theta)g(x_2) + \epsilon$. Since this holds for all $\epsilon > 0$, $g$ is convex.
2. **Solution** Yes. Define $f(x, u) = h_1(u) + h_2(x - u)$. $h_1(u)$ is convex in $(x, u)$ and $h_2(x - u)$ is a convex function of a linear transformation of $(x, u)$, so $f$ is convex in $(x, u)$. By the partial minimization rule from part 1, $h_1 \square h_2(x) = \inf_u f(x, u)$ is convex.
3. **Solution** $f^*(y) = \sup_x (xy - f(x))$. For a fixed $x$, $h(y) = xy - f(x)$ is a linear (affine) function of $y$. Linear functions are convex. The pointwise supremum of any collection of convex functions is convex. Thus, $f^*(y)$ is **convex**. The convexity of the original $f(x)$ was **not necessary** for this conclusion.

6

### Visual Description
Text-only slide. Contains mathematical proofs for sections 3 (Characterizations of Convexity) and 4 (Partial Minimization).

---

## Page 12
### Content
No questions assigned to the following page.

# 5 Optimization with CVX (20 points) (Canary)

CVX is a framework for disciplined convex programming: it's rarely the fastest tool for the job, but it's widely applicable, and so it's a great tool to be comfortable with. In this exercise we will set up the CVX environment and solve a convex optimization problem.

Generally speaking, for homeworks in this class, your solution to programming-based problems should include plots and whatever explanation necessary to answer the questions asked. In addition, your full code should be submitted to the Homework 1 Gradescope submission slot otherwise you will not get credit for the programming section.

CVX variants are available for each of the major numerical programming languages. There are some minor syntactic and functional differences between the variants but all provide essentially the same functionality. Download the CVX variant of your choosing:

* Matlab: [http://cvxr.com/cvx/](http://cvxr.com/cvx/)
* Python: [http://www.cvxpy.org/](http://www.cvxpy.org/)
* R: [https://cvxr.rbind.io](https://cvxr.rbind.io)
* Julia: [https://github.com/JuliaOpt/Convex.jl](https://github.com/JuliaOpt/Convex.jl)

and consult the documentation to understand the basic functionality. Make sure that you can solve the least squares problem $\min_\beta \|y - X\beta\|_2^2$ for an arbitrary vector $y$ and matrix $X$. Check your answer by comparing with the closed-form solution $(X^T X)^{-1} X^T y$.

**Note:** There are certain quirks of CVX that may result in you getting strange errors even if your code is technically correct. We strongly recommend setting your solver to the Splitting Conic Solver (SCS) and sticking to CVX specific functions such as `sum_squares` and `quad_form` if you encounter such errors when attempting the problems below.

Given labels $y \in \{-1, 1\}^n$, and a feature matrix $X \in \mathbb{R}^{n \times p}$ with rows $x_1, \dots, x_n$, recall the support vector machine (SVM) problem
$$
\begin{aligned}
\min_{\beta, \beta_0, \xi} \quad & \frac{1}{2} \|\beta\|_2^2 + C \sum_{i=1}^n \xi_i \\
\text{subject to} \quad & \xi_i \ge 0, \quad i = 1, \dots, n \\
& y_i(x_i^T \beta + \beta_0) \ge 1 - \xi_i, \quad i = 1, \dots, n.
\end{aligned}
$$

1. **(5 pts)** Load the training data in `xy_train.csv`. This is a matrix of $n = 200$ row and 3 columns. The first two columns give the first $p = 2$ features, and the third column gives the labels. Using CVX, solve the SVM problem with $C = 1$. Report the optimal criterion value, and the optimal coefficients $\beta \in \mathbb{R}^2$ and intercept $\beta_0 \in \mathbb{R}$.
2. **(5 pts)** Recall that the SVM solution defines a hyperplane
$$
\beta_0 + \beta^T x = 0,
$$

7

### Visual Description
Text-only slide. Introduces an optimization problem using CVX, specifically focusing on Support Vector Machines (SVM). It provides links to CVX libraries for different languages and defines the SVM optimization problem.

---

## Page 13
### Content
Questions assigned to the following page: 5.1, 5.2, 5.3, and 5.4

which serves as the decision boundary for the SVM classifier. Plot the training data and color the points from the two classes differently. Draw the decision boundary on top.

3. **(5 pts)** Now define $\tilde{X} \in \mathbb{R}^{n \times p}$ to have rows $\tilde{x}_i = y_i x_i, i = 1, \dots, n$, and solve using CVX the problem
$$
\begin{aligned}
\max_w \quad & -\frac{1}{2} w^T \tilde{X} \tilde{X}^T w + 1^T w \\
\text{subject to} \quad & 0 \le w \le C1, \quad w^T y = 0,
\end{aligned}
$$
(Above, we use 1 to denote the vector of all 1s.) Report the optimal criterion value; it should match that from part (1). Also report $\tilde{X}^T w$ at the optimal $w$; this should match the optimal $\beta$ from part (1). Note: this is not a coincidence, and is an example of *duality*, as we will study in detail later in the course.

4. **(5 pts)** Investigate many values of the cost parameter $C = 2^a$, as $a$ varies from $-5$ to $5$. For each one, solve the SVM problem, form the decision boundary, and calculate the misclassification error on the test data in `xy_test.csv`. Make a plot of misclassification error (y-axis) versus $C$ (x-axis), which you will probably want to put a log scale). Evaluate at least 50 points in the discretization.

**Solution (1)** Using CVXPY with the SCS solver and $C = 1$, the primal SVM solution is
$$
\beta = \begin{bmatrix} 1.41967209 \\ 1.24607492 \end{bmatrix}, \quad \beta_0 = -2.82372750,
$$
with optimal objective value
$$
\frac{1}{2} \|\beta\|_2^2 + C \sum_i \xi_i = 36.74893271.
$$

**(2)** The decision boundary is
$$
\beta_0 + \beta^T x = 0 \implies 1.4197 x_1 + 1.2461 x_2 - 2.8237 = 0,
$$
or equivalently
$$
x_2 = -1.1393 x_1 + 2.2661.
$$
Figure 1 shows the training data and the separating hyperplane.

**(3)** Solving the dual with $\tilde{X}$ and $C = 1$ yields optimal objective value
$$
36.74893264,
$$
matching the primal up to numerical precision. The recovered vector is
$$
\tilde{X}^T w = \begin{bmatrix} 1.41967191 \\ 1.24607477 \end{bmatrix},
$$
which matches the primal $\beta$ within solver tolerance, confirming duality.

**(4)** I evaluated 50 values of $C = 2^a$ for $a \in [-5, 5]$. The error is nearly flat (about 0.08-0.09). Figure 2 shows the curve.

8

### Visual Description
Text-only slide. Continues the SVM problem description with parts 3 and 4, and then provides the numerical solutions for all four parts of the problem.

---

## Page 14
### Content
Questions assigned to the following page: 5.3 and 5.4

SVM Decision Boundary (C=1)
![SVM Decision Boundary Plot](SVM_Decision_Boundary.png)
Figure 1: SVM Decision Boundary (C=1)

Test Error vs C
![Test Error vs C Plot](Test_Error_vs_C.png)
Figure 2: Test Error vs C

**Important:** Remember that you **MUST** submit all code used in this part to the Programming submission slot on Gradescope otherwise you will not get credit for this section.

9

### Visual Description
This page contains two plots.
- **Figure 1: SVM Decision Boundary (C=1)** is a scatter plot of two classes of data points (blue dots for Class 1, red dots for Class -1) in a 2D feature space. A dashed black line represents the decision boundary separating the two classes.
- **Figure 2: Test Error vs C** is a line graph showing the misclassification error on the y-axis against the cost parameter $C$ on a logarithmic x-axis. The error fluctuates between approximately 0.080 and 0.090 as $C$ increases from $10^{-1}$ to $10^1$.

---

## Page 15
### Content
Question assigned to the following page: 6

# 6 Collaboration Questions

1. (a) Did you receive any help whatsoever from anyone in solving this assignment?
**Solution** No.
(b) If you answered 'yes', give full details (e.g. "Jane Doe explained to me what is asked in Question 3.4")
**Solution** No
[Empty Box]

2. (a) Did you give any help whatsoever to anyone in solving this assignment? **Solution** No.
(b) If you answered 'yes', give full details (e.g. "I pointed Joe Smith to section 2.3 since he didn't know how to proceed with Question 2")
**Solution**
[Empty Box]

3. (a) Did you find or come across code that implements any part of this assignment?
**Solution** No.
(b) If you answered 'yes', give full details (book & page, URL & location within the page, etc.).
**Solution**
[Empty Box]

10

### Visual Description
Text-only slide. A standard collaboration disclosure form with questions about receiving help, giving help, or finding code. The answers provided are "No" or left blank in large rectangular boxes.

---
