# Jan13_Intro

Source: `materials/archive/Jan13_Intro.pdf`
Duplicate equivalents: `Jan13_Intro.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `strict full-PDF single-call conversion`
Finish reason: `STOP`
Pages: 16
## Page 1

### Content
**10725-Optimization for Machine Learning**

**Introduction**

Optimization for ML Slide 1
Carnegie Mellon University

### Visual Description
This is a title slide with a white background. The main title "10725-Optimization for Machine Learning" is in large blue bold text. Below it, the word "Introduction" is in large red bold text. The bottom left corner contains the text "Optimization for ML Slide 1" in a small grey font. The bottom right corner features the "Carnegie Mellon University" logo in red.

---

## Page 2

### Content
**Books To Read**

[Image of book cover: Convex Optimization by Stephen Boyd and Lieven Vandenberghe]

Boyd & Vandenberghe: Convex Optimization
https://web.stanford.edu/~boyd/cvxbook/

Optimization for ML Slide 2
Carnegie Mellon University

### Visual Description
This slide lists recommended reading. It features an image of the book cover for "Convex Optimization". The cover is dark blue with the title "Convex Optimization" and authors "Stephen Boyd and Lieven Vandenberghe" in yellow text. The publisher "CAMBRIDGE" is at the bottom. Below the image, the author names and book title are repeated in black text, followed by a red URL link. The footer contains the slide number and university logo.

---

## Page 3

### Content
**Books To Read**

[Image of book cover: Lectures on Convex Optimization by Yurii Nesterov]
Nesterov: Lectures on Convex Optimization

[Image of book cover: Introductory Lectures on Convex Optimization, A Basic Course by Yurii Nesterov]
Nesterov: Introductory Lectures on Convex Optimization, A Basic Course

Optimization for ML Slide 3
Carnegie Mellon University

### Visual Description
This slide shows two more book recommendations by Yurii Nesterov. 
- On the left is the cover of "Lectures on Convex Optimization" (Second Edition, Springer), which has a yellow and pink gradient background with red and blue text. 
- On the right is the cover of "Introductory Lectures on Convex Optimization: A Basic Course" (Kluwer Academic Publishers), which is blue with yellow and white text and has "APPLIED OPTIMIZATION" written vertically on the left side. 
The titles and author are transcribed below each image. The footer contains the slide number and university logo.

---

## Page 4

### Content
**(Mathematical) optimization problems**

An optimization problem of the form:

$$\min_{x \in C} f_0(x)$$
$$\text{subject to } f_i(x) \leq b_i, i \in \{1, \dots, m\}.$$

Optimization for ML Slide 4
Carnegie Mellon University

### Visual Description
This slide introduces the general form of a mathematical optimization problem. It presents a standard minimization problem with an objective function $f_0(x)$ to be minimized over a set $C$, subject to $m$ inequality constraints $f_i(x) \leq b_i$. There are no diagrams or images beyond the text and equations.

---

## Page 5

### Content
**Some Terminology**

$$\min_{x \in C} f_0(x)$$
$$\text{subject to } f_i(x) \leq b_i, i \in \{1, \dots, m\}.$$

1. **Optimization variables:** $x \in \mathbb{R}^d$.
2. **Objective function:** $f_0 : \mathbb{R}^d \to \mathbb{R}$.
3. **Constraint functions:** $f_i : \mathbb{R}^d \to \mathbb{R}$.
4. **Feasible solution:** $x$ satisfies all the constraints (including $x \in C$).
5. **Optimal solution:** $x^*$ has the smallest value of $f_0$ amongst all vectors which satisfy the constraints.

Optimization for ML Slide 5
Carnegie Mellon University

### Visual Description
This slide defines key terms related to the optimization problem shown at the top. It lists five numbered points explaining optimization variables, objective function, constraint functions, feasible solution, and optimal solution. No additional visuals are present.

---

## Page 6

### Content
**Some Terminology**

$$\min_{x \in C} f_0(x)$$
$$\text{subject to } f_i(x) \leq b_i, i \in \{1, \dots, m\}.$$

6. **Optimal value:**
   $$p^* = \inf \{f_0(x) : x \in C, f_i(x) \leq b_i, i \in \{1, \dots, m\}\}.$$

* $p^*$ may not be attained, i.e. there may not be an $x^*$ for which $f_0(x^*) = p^*$.
* $p^* = \infty$ if the problem is infeasible.
* $p^* = -\infty$ if the problem is unbounded from below.

Optimization for ML Slide 6
Carnegie Mellon University

### Visual Description
This slide continues the terminology from the previous page, focusing on the "Optimal value" $p^*$. It provides the mathematical definition using the infimum and lists three bullet points describing cases where the optimal value might not be attained, or where it is infinite or negative infinite. No diagrams are present.

---

## Page 7

### Content
**Important Optimization Problems**

* 1. Maximum likelihood estimation
  - Mixture of Gaussians
  - Hidden Markov Models
* 2. Least squares optimization $\min_x \|Ax - b\|^2$
  - PCA
  - Matrix completion
* 3. Empirical risk minimization
  - Neural network training
  - SVM training
* 4. ... combinatorial optimization, optimal transport, optimization on graphs, optimization over functions or random variables, and many others

Optimization for ML Slide 7
Carnegie Mellon University

### Visual Description
This slide lists examples of important optimization problems in machine learning and related fields. It uses a bulleted list with sub-bullets to categorize problems like MLE, Least Squares, and ERM, providing specific examples for each. No diagrams are present.

---

## Page 8

### Content
**Standard Form**

Instead of this:
$$\min f_0(x)$$
$$\text{subject to } f_i(x) \leq b_i, i \in \{1, \dots, m\}.$$

some authors refer to programs in standard form as also additionally allowing equality constraints, i.e:

$$\min f_0(x)$$
$$\text{subject to } f_i(x) \leq b_i, i \in \{1, \dots, m\}.$$
$$h_j(x) = 0, j \in \{1, \dots, p\}.$$

Optimization for ML Slide 8
Carnegie Mellon University

### Visual Description
This slide explains the "Standard Form" of an optimization problem. It shows the transition from a problem with only inequality constraints to one that also includes equality constraints $h_j(x) = 0$. No diagrams are present.

---

## Page 9

### Content
**Implicit versus explicit constraints**

$$\min f_0(x)$$
$$\text{subject to } f_i(x) \leq b_i, i \in \{1, \dots, m\}.$$
$$h_j(x) = 0, j \in \{1, \dots, p\}.$$

The above optimization problems have some explicit (inequality and equality) constraints. It is worth noting that they also have implicit constraints, i.e. that,

$$x \in \mathcal{D} = \text{dom}(f_0) \cap \bigcap_{i=1}^m \text{dom}(f_i) \cap \bigcap_{i=1}^p \text{dom}(h_i).$$

These functions may not be defined everywhere, in which case our optimization problem is defined implicitly only over vectors where all the criterion and constraint functions are defined.

Optimization for ML Slide 9
Carnegie Mellon University

### Visual Description
This slide discusses the difference between explicit constraints (given in the problem statement) and implicit constraints (arising from the domains of the functions involved). It defines the set $\mathcal{D}$ as the intersection of the domains of the objective function and all constraint functions. No diagrams are present.

---

## Page 10

### Content
**Standard Form**

Instead of this:
$$\min f_0(x)$$
$$\text{subject to } f_i(x) \leq b_i, i \in \{1, \dots, m\}.$$
$$h_j(x) = 0, j \in \{1, \dots, p\}.$$

If we wanted to be more explicit, we might write the standard form optimization problem as:

$$\min_{x \in \mathcal{D}} f_0(x)$$
$$\text{subject to } f_i(x) \leq b_i, i \in \{1, \dots, m\}.$$
$$h_j(x) = 0, j \in \{1, \dots, p\}.$$

Optimization for ML Slide 10
Carnegie Mellon University

### Visual Description
This slide shows a more explicit way to write the standard form optimization problem by incorporating the domain $\mathcal{D}$ directly into the minimization notation. No diagrams are present.

---

## Page 11

### Content
**Convex Optimization**

Optimization for ML Slide 11
Carnegie Mellon University

### Visual Description
This is a transition slide with a white background and the title "Convex Optimization" in large blue bold text in the center.

---

## Page 12

### Content
**Convex Optimization Problems – Standard Form**

$$\min_{x \in \mathcal{D}} f_0(x)$$
$$\text{subject to } f_i(x) \leq b_i, i \in \{1, \dots, m\}.$$
$$h_j(x) = 0, j \in \{1, \dots, p\}.$$

where
1. $\mathcal{D}$ is a convex set.
2. $f_0, f_1, \dots, f_m$ are convex functions.
3. $h_j(x) = a_j^T x + b_j$, are affine functions.

To make sense of this definition we’ll need to understand what convex sets and convex functions are.

Optimization for ML Slide 12
Carnegie Mellon University

### Visual Description
This slide defines the standard form of a convex optimization problem. It lists three specific requirements: the domain $\mathcal{D}$ must be a convex set, the objective and inequality constraint functions must be convex, and the equality constraint functions must be affine. No diagrams are present.

---

## Page 13

### Content
**Convex Optimization Problems – Standard Form**

$$\min_{x \in \mathcal{D}} f_0(x)$$
$$\text{subject to } f_i(x) \leq b_i, i \in \{1, \dots, m\}.$$
$$h_j(x) = 0, j \in \{1, \dots, p\}.$$

For now, it is worth noting (and re-visiting once the definitions are in place), that the constraints define a convex set, and their intersection with the convex domain $\mathcal{D}$ is also a convex set.

If we denote this convex set by $C$, then our convex optimization problem can be equivalently, described as:

$$\min_{x \in C} f_0(x)$$

Optimization for ML Slide 13
Carnegie Mellon University

### Visual Description
This slide explains that the combination of convex constraints and a convex domain results in a feasible set $C$ that is itself convex. This allows the problem to be simplified to minimizing the objective function over this convex set $C$. No diagrams are present.

---

## Page 14

### Content
**Remarks**

$$\min_{x \in \mathcal{D}} f_0(x)$$
$$\text{subject to } f_i(x) \leq b_i, i \in \{1, \dots, m\}.$$

1. $\mathcal{D}$ is a convex set.
2. $f_0, f_1, \dots, f_m$ are convex functions.

**Question 1:** If the constraints are given in $f_i(x) \geq b_i$ forms, then is it still a convex optimization problem?

**Answer:** No, because then the domain of feasible points wouldn't be convex.

[Plot of a convex function $f_i(x)$ intersecting a horizontal line $b_i$]

Optimization for ML Slide 14
Carnegie Mellon University

### Visual Description
This slide addresses why inequality constraints must be in the form $f_i(x) \leq b_i$. 
The visual is a 2D Cartesian plot. 
- The y-axis is vertical, and the x-axis is horizontal. 
- A red U-shaped curve represents a convex function $f_i(x)$. 
- A horizontal dashed line is labeled $b_i$. 
- The curve intersects the line at two points. 
- Vertical dashed lines drop from these intersection points to the x-axis. 
- The regions on the x-axis where the function is *above* the line ($f_i(x) \geq b_i$) are highlighted with thick red lines. 
- Because there are two separate red segments on the x-axis with a gap between them, the set of points satisfying $f_i(x) \geq b_i$ is not convex.

---

## Page 15

### Content
**Remarks**

$$\min_{x \in \mathcal{D}} f_0(x)$$
$$\text{subject to } f_i(x) \leq b_i, i \in \{1, \dots, m\}.$$
$$h_j(x) = a_j^T x + b_j \text{, are affine functions.}$$

**Question 2:** Why does $h_j(x)$ have to be affine?

**Answer:** If $h_j$ is convex, then the domain of feasible points $\{x | h_j(x) = b_j\}$ might not be convex!

[Plot of a convex function $h_j(x)$ intersecting a horizontal line $b_j$]

Optimization for ML Slide 15
Carnegie Mellon University

### Visual Description
This slide explains why equality constraints must be affine. 
The visual is a 2D Cartesian plot similar to the previous page.
- A red U-shaped curve represents a convex function $h_j(x)$.
- A horizontal dashed line is labeled $b_j$.
- The curve intersects the line at two distinct points.
- Vertical dashed lines drop from these intersection points to the x-axis.
- Two large red dots are placed on the x-axis at these locations, representing the set of points where $h_j(x) = b_j$.
- Since the set consists of two isolated points, it is not convex, illustrating why a general convex function cannot be used for an equality constraint in a convex optimization problem.

---

## Page 16

### Content
**The Key Feature of Convex Optimization Problems**

The most important structural feature of convex optimization problems is that 

**every local minima is a global minima.**

This in turn, makes **local search algorithms effective** for convex optimization.

In what follows, we’ll need to define convex sets, functions, and a few other things to make sense of this claim.

Optimization for ML Slide 16
Carnegie Mellon University

### Visual Description
This concluding slide highlights the fundamental property of convex optimization: that any local minimum is also a global minimum. This property is presented in bold red text. The slide also notes that this makes local search algorithms effective. No diagrams are present.\n