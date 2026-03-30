# Lecture_13_variational

Source: `materials/archive/Lecture_13_variational.pdf`
Duplicate equivalents: `Lecture_13_variational.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 49

## Page 1
### Content
# 10708 Probabilistic Graphical Models: Spring 2026
**Andrej Risteski**
Machine Learning Department

## Lecture 13: Fundamentals of variational methods. Inner and outer approximations

### Visual Description
Title slide with centered text. The course number "10708" and title "Probabilistic Graphical Models: Spring 2026" are at the top in a large, dark blue font. The instructor's name and department are in the middle. The lecture number and specific topic are at the bottom.

---

## Page 2
### Content
# Algorithmic approaches to inference

When faced with a difficult to calculate probabilistic quantity (partition function, difficult posterior), there are two families of approaches:

### MARKOV CHAIN MONTE CARLO
* **Random walk** w/ equilibrium distribution the one we are trying to sample from.
* **Pros:** Eventually, you will get samples from the intended distribution.
* **Cons:** Might need to run the algorithm very long; v. difficult to diagnose if the Markov Chain has converged.

### VARIATIONAL METHODS
* Based on solving an **optimization** problem.
* **Pros:** Convergence is v. fast (lots of packages with v. efficient implementations)
* **Cons:** The optimization problems we are trying to solve are typically non-convex; unclear how good the solution we’ve converged to.

### Visual Description
The slide is divided into two columns comparing "MARKOV CHAIN MONTE CARLO" on the left and "VARIATIONAL METHODS" on the right. Each section lists a basic description followed by pros and cons.

---

## Page 3
### Content
# Variational methods for partition functions

> **Gibbs variational principle:** Let $p(x) = \frac{1}{Z} \exp(E(x))$ be a distribution over a domain $\mathcal{X}$. Then, $Z$ is the solution to the following optimization problem:
> $$\log Z = \max_{q: \text{ distribution over } \mathcal{X}} H(q) + \mathbb{E}_{x \sim q}[E(x)]$$

Find the distribution that has both high entropy, and high expected energy value

$$H(q) := - \sum_{x \in \mathcal{X}} q(x) \log q(x)$$

### Visual Description
The Gibbs variational principle is presented in a light blue rounded box. Below the box, there is a text explanation and the definition of entropy $H(q)$. An arrow points from the text "Find the distribution..." to the optimization formula in the box. On the right side, there is a black and white portrait of Josiah Willard Gibbs.

---

## Page 4
### Content
# Variational methods for partition functions

> **Gibbs variational principle:** Let $p(x) = \frac{1}{Z} \exp(E(x))$ be a distribution over a domain $\mathcal{X}$. Then, $Z$ is the solution to the following optimization problem:
> $$\log Z = \max_{q: \text{ distribution over } \mathcal{X}} H(q) + \mathbb{E}_{x \sim q}[E(x)]$$

Compare to MAP problem:
$$x^* = \text{argmax}_x E(x)$$

### Visual Description
This slide maintains the same structure as Page 3, with the Gibbs variational principle in a blue box and the portrait of Gibbs on the right. The text below the box now compares the principle to the Maximum A Posteriori (MAP) problem.

---

## Page 5
### Content
# Variational methods for partition functions

> **Gibbs variational principle:** Let $p(x) = \frac{1}{Z} \exp(E(x))$ be a distribution over a domain $\mathcal{X}$. Then, $Z$ is the solution to the following optimization problem:
> $$\log Z = \max_{q: \text{ distribution over } \mathcal{X}} H(q) + \mathbb{E}_{x \sim q}[E(x)]$$

**Proof:**
$$0 \le KL(q || p) = \mathbb{E}_q \log q - \mathbb{E}_q \log p$$
$$= -H(q) - \mathbb{E}_{x \sim q}[E(x)] + \log Z$$
$$H(q) + \mathbb{E}_{x \sim q}[E(x)] = \log Z - KL(q || p) \le \log Z$$

Hence,
$$\max_{q: \text{ distribution over } \mathcal{X}} H(q) + \mathbb{E}_{x \sim q}[E(x)] \le \log Z$$

### Visual Description
This slide continues with the same header and Gibbs portrait. It provides the first part of the mathematical proof for the Gibbs variational principle using KL divergence.

---

## Page 6
### Content
# Variational methods for partition functions

> **Gibbs variational principle:** Let $p(x) = \frac{1}{Z} \exp(E(x))$ be a distribution over a domain $\mathcal{X}$. Then, $Z$ is the solution to the following optimization problem:
> $$\log Z = \max_{q: \text{ distribution over } \mathcal{X}} H(q) + \mathbb{E}_{x \sim q}[E(x)]$$

**Proof:**
$$0 \le KL(q || p) = \mathbb{E}_q \log q - \mathbb{E}_q \log p$$
$$= -H(q) - \mathbb{E}_{x \sim q}[E(x)] + \log Z$$
$$H(q) + \mathbb{E}_{x \sim q}[E(x)] = \log Z - KL(q || p) \le \log Z$$

Equality is attained if $p = q$: $KL(q || p) = 0$, so
$$H(q) + \mathbb{E}_{x \sim q}[E(x)] = \log Z$$

### Visual Description
This slide completes the proof from Page 5 by showing the condition for equality (when $p=q$). The layout remains consistent with the previous pages.

---

## Page 7
### Content
# Variational methods for partition functions

> **Gibbs variational principle:** Let $p(x) = \frac{1}{Z} \exp(E(x))$ be a distribution over a domain $\mathcal{X}$. Then, $Z$ is the solution to the following optimization problem:
> $$\log Z = \max_{q: \text{ distribution over } \mathcal{X}} H(q) + \mathbb{E}_{x \sim q}[E(x)]$$

Hence, we’ve reduced calculating partition function to an optimization problem!

> But, there is a **serious issue**: how do we solve an optimization over the set of distributions over $\mathcal{X}$?

Even if $\mathcal{X}$ is a really simple domain, e.g. $\mathcal{X} = \{\pm 1\}^n$, the trivial way to solve the problem would involve introducing a variable $q(x), \forall x \in \{\pm 1\}^n$: there are $2^n$ of them.

*In fact, you can’t be clever – this can be #P hard even for Ising models!*

### Visual Description
The slide presents the Gibbs variational principle at the top. Below it, a green highlighted box emphasizes a "serious issue" regarding the complexity of optimizing over all distributions. It notes that the number of variables grows exponentially ($2^n$) and mentions that the problem is #P hard.

---

## Page 8
### Content
# Variational methods for partition functions

> **Gibbs variational principle:** Let $p(x) = \frac{1}{Z} \exp(E(x))$ be a distribution over a domain $\mathcal{X}$. Then, $Z$ is the solution to the following optimization problem:
> $$\log Z = \max_{q: \text{ distribution over } \mathcal{X}} H(q) + \mathbb{E}_{x \sim q}[E(x)]$$

Hence, we’ve reduced calculating partition function to an optimization problem!

> But, there is a **serious issue**: how do we solve an optimization over the set of distributions over $\mathcal{X}$?

Even if $\mathcal{X}$ is a really simple domain, e.g. $\mathcal{X} = \{\pm 1\}^n$, the trivial way to solve the problem would involve introducing a variable $q(x), \forall x \in \{\pm 1\}^n$: there are $2^n$ of them.

*We have to somehow solve a “simpler problem”. Two approaches to do so.*

### Visual Description
This slide is nearly identical to Page 7, but the final italicized sentence is changed to introduce the need for "simpler problems" and mentions there are two approaches to achieve this.
## Page 9
### Content
# The physics approach: inner relaxation

**Gibbs variational principle:** Let $p(x) = \frac{1}{Z} \exp(E(x))$ be a distribution over a domain $\mathcal{X}$. Then, $Z$ is the solution to the following optimization problem:
$$\log Z = \max_{q: \text{ distribution over } \mathcal{X}} H(q) + \mathbb{E}_{x \sim q}[E(x)]$$

What can we do to try to approximate this expression?

**Inspiration from physics:** solve a *simpler* optimization problem over a *restricted class* of distributions we can explicitly parametrize.
$$\log Z \approx \max_{q \in Q} H(q) + \mathbb{E}_{x \sim q}[E(x)]$$

**Example:** naïve mean-field approximation: $Q$ consists of product distribs
Consider again $\mathcal{X} = \{\pm 1\}^n$. A *product distribution* depends on $n$ parameters only: since $q(x) = \prod_i q_i(x_i)$, for each $i \in [n]$, we only need to specify $q_i(x_i = 1)$.

### Visual Description
The slide contains text and mathematical formulas. Two main sections are highlighted in light blue and light green rounded boxes. The first box defines the Gibbs variational principle, and the second box explains the inspiration from physics for approximation.

---
## Page 10
### Content
# The physics approach: inner relaxation

**Gibbs variational principle:** Let $p(x) = \frac{1}{Z} \exp(E(x))$ be a distribution over a domain $\mathcal{X}$. Then, $Z$ is the solution to the following optimization problem:
$$\log Z = \max_{q: \text{ distribution over } \mathcal{X}} H(q) + \mathbb{E}_{x \sim q}[E(x)]$$

**Inspiration from physics:** solve a *simpler* optimization problem over a *restricted class* of distributions we can explicitly parametrize.

This is called an "inner approximation": it yields an approximation for $\log Z$ that is *less* than the true value (since we are maximizing over a smaller set than the original problem).

The maximization is generally not concave: so, optimization can get trapped in bad minima, saddle points, etc.

### Visual Description
Text-only slide. It features two highlighted boxes (light blue and light green) containing the core mathematical definitions and the conceptual inspiration, followed by bullet points explaining the nature of the "inner approximation".

---
## Page 11
### Content
# The physics approach: inner relaxation

**Gibbs variational principle:** Let $p(x) = \frac{1}{Z} \exp(E(x))$ be a distribution over a domain $\mathcal{X}$. Then:
$$KL(q || p) = -(H(q) + \mathbb{E}_{x \sim q}[E(x)]) + \log Z$$

**Inspiration from physics:** solve a *simpler* optimization problem over a *restricted class* of distributions we can explicitly parametrize.

Since $KL(q || p) = -(H(q) + \mathbb{E}_{x \sim q}[E(x)]) + \log Z$, we have:
$$\begin{aligned} &\text{argmax}_{q \in Q} H(q) + \mathbb{E}_{x \sim q}[E(x)] \\ &= \text{argmin}_{q \in Q} KL(q || p) \end{aligned}$$

We are finding the closest distribution $q \in Q$ to $p$, in the KL divergence sense.

### Visual Description
The slide includes text, formulas, and a diagram. The diagram on the right shows a green curve representing $p(x)$ and a large gray oval labeled "Nice" class $Q$ containing several gray curves (candidate distributions). An arrow points from one of these gray curves ("best proxy") to the green curve, labeled "divergence" and $KL(q || p)$.

---
## Page 12
### Content
# Solving the mean-field relaxation via coordinate ascent (CAVI)

*How do we solve a mean field relaxation?*
A popular way to do so is **coordinate ascent**:

$$\begin{aligned} &\text{argmax}_{q \in Q} H(q) + \mathbb{E}_{x \sim q}[E(x)] \\ &= \text{argmin}_{q \in Q} \mathbb{E}_q \log q(x) - \mathbb{E}_q E(x) \\ &= \text{argmin}_{q \in Q} \sum_i \mathbb{E}_{q_i} \log q_i(x_i) - \mathbb{E}_{q_i} [\mathbb{E}_{q_{-i}(x_{-i})} E(x)] \end{aligned}$$

Consider holding $q_j$ fixed for all $j \neq i$ and just updating $q_i$.
Dropping all terms not depending on $q_i$ we are solving:
$$\text{argmin}_{q_i} \mathbb{E}_{q_i} \log q_i(x_i) - \mathbb{E}_{q_i} [\mathbb{E}_{q_{-i}(x_{-i})} E(x)]$$

### Visual Description
The slide contains mathematical derivations for coordinate ascent. On the right, there is a plot showing concentric elliptical contour lines of an objective function. A red line with horizontal and vertical segments illustrates the path of coordinate ascent steps towards the center (minimum) of the contours. The axes are labeled $w_0$ and $w_1$.

---
## Page 13
### Content
# Solving the mean-field relaxation via coordinate ascent (CAVI)

$$\text{argmin}_{q_i} \mathbb{E}_{q_i} \log q_i(x_i) - \mathbb{E}_{q_i} [\mathbb{E}_{q_{-i}(x_{-i})} E(x)]$$

*What is the optimal $q_i$ (among all univariate distributions)?*

Let $Z_i := \int_{x_i} \exp(\mathbb{E}_{q_{-i}(x_{-i})} E(x))$. Let $\hat{p}_i(x_i) := \frac{\exp(\mathbb{E}_{q_{-i}(x_{-i})} E(x))}{Z_i}$

$$\begin{aligned} &\mathbb{E}_{q_i} \log q_i(x_i) - \mathbb{E}_{q_i} [\mathbb{E}_{q_{-i}(x_{-i})} E(x)] \\ &= \mathbb{E}_{q_i} \log q_i(x_i) - \mathbb{E}_{q_i} [\log \hat{p}_i(x_i)] - \log Z_i \\ &= KL(q_i || \hat{p}_i) - \log Z_i \end{aligned}$$

The optimal $q_i$ is $q_i = \hat{p}_i$. Can be efficiently calculated very often.

### Visual Description
Text-only slide. It continues the mathematical derivation from the previous page, showing how the optimal update for a single coordinate $q_i$ is found by minimizing a KL divergence. The final result $q_i = \hat{p}_i$ is highlighted in red.

---
## Page 14
### Content
# Example: coordinate ascent updates for a pairwise UGM

Let's consider applying this strategy to $p(x) \propto \exp\left(\sum_{i \sim j} \phi_{ij}(x_i, x_j)\right)$

Then, $E(x) = \sum_{i \sim j} \phi_{ij}(x_i, x_j)$. Let's assume $x_i \in \{+1, -1\}$.

The updates involve setting $q_i(X_i = x_i) := \frac{\exp(\mathbb{E}_{q_{-i}(x_{-i})} E(x))}{Z_i}$

We can calculate, for $x_i \in \{1, -1\}$, the value of $\mathbb{E}_{q_{-i}(x_{-i})} E(x)$

$$\begin{aligned} \mathbb{E}_{q_{-i}(x_{-i})} E(x) &= \mathbb{E}_{q_{-i}(x_{-i})} \left( \sum_{j \in N(i)} \phi_{ij}(x_i, x_j) + \sum_{k,l: k \neq i, l \neq i} \phi_{kl}(x_k, x_l) \right) \\ &= \mathbb{E}_{q_{-i}(x_{-i})} \left( \sum_{j \in N(i)} \phi_{ij}(x_i, x_j) \right) + C(x_{-i}) \end{aligned}$$

### Visual Description
Text-only slide. It provides a concrete example of coordinate ascent updates for a pairwise Undirected Graphical Model (UGM), showing the decomposition of the energy function $E(x)$ into terms that depend on $x_i$ and terms that do not.

---
## Page 15
### Content
# Example: coordinate ascent updates for a pairwise UGM

Let's consider applying this strategy to $p(x) \propto \exp\left(\sum_{i \sim j} \phi_{ij}(x_i, x_j)\right)$

Then, $E(x) = \sum_{i \sim j} \phi_{ij}(x_i, x_j)$. Let's assume $x_i \in \{+1, -1\}$.

The updates involve setting $q_i(X_i = x_i) := \frac{\exp(\mathbb{E}_{q_{-i}(x_{-i})} E(x))}{Z_i}$

We can calculate, for $x_i \in \{1, -1\}$, the value of $\mathbb{E}_{q_{-i}(x_{-i})} E(x)$

$$\mathbb{E}_{q_{-i}(x_{-i})} E(x) = \mathbb{E}_{q_{-i}(x_{-i})} \left( \sum_{j \in N(i)} \phi_{ij}(x_i, x_j) \right) + C(x_{-i})$$

Hence, $q_i(X_i = x_i) \propto \exp \left( \mathbb{E}_{q_{N(i)}(x_{N(i)})} \left( \sum_{j \in N(i)} \phi_{ij}(x_i, x_j) \right) \right)$

### Visual Description
Text-only slide. It concludes the derivation from the previous page, showing the final proportional form of the update for $q_i$ in a pairwise UGM.

---
## Page 16
### Content
# Example: coordinate ascent updates for a pairwise UGM

Let's consider applying this strategy to $p(x) \propto \exp\left(\sum_{i \sim j} \phi_{ij}(x_i, x_j)\right)$

Then, $E(x) = \sum_{i \sim j} \phi_{ij}(x_i, x_j)$. Let's assume $x_i \in \{+1, -1\}$.

The updates involve setting $q_i(X_i = x_i) := \frac{\exp(\mathbb{E}_{q_{-i}(x_{-i})} E(x))}{Z_i}$

We can calculate, for $x_i \in \{1, -1\}$, the value of $\mathbb{E}_{q_{-i}(x_{-i})} E(x)$

Hence, $q_i(X_i = x_i) \propto \exp \left( \mathbb{E}_{q_{N(i)}(x_{N(i)})} \left( \sum_{j \in N(i)} \phi_{ij}(x_i, x_j) \right) \right)$

*Note: the partition function $Z_i$ only involves calculating the expression for $x_i = 1, -1$ !*

### Visual Description
Text-only slide. It repeats the final update formula for the pairwise UGM example and adds a concluding note about the simplicity of calculating the local partition function $Z_i$ for binary variables.

---
## Page 17
### Content
# Example: coordinate ascent updates for a pairwise UGM

Let’s consider applying this strategy to $p(x) \propto \exp\left(\sum_{i \sim j} \phi_{ij}(x_i, x_j)\right)$

Then, $E(x) = \sum_{i \sim j} \phi_{ij}(x_i, x_j)$. Let’s assume $x_i \in \{+1, -1\}$.

The updates involve setting $q_i(X_i = x_i) := \frac{\exp(\mathbb{E}_{q_{-i}(x_{-i})} E(x))}{Z_i}$

We can calculate, for $x_i \in \{1, -1\}$, the value of $\mathbb{E}_{q_{-i}(x_{-i})} E(x)$

Hence, $q_i(X_i = x_i) \propto \exp\left(\mathbb{E}_{q_{i,N(i)}(x_{i,N(i)})} \left(\sum_{j \in N(i)} \phi_{ij}(x_i, x_j)\right)\right)$

*Somewhat reminiscent of Gibbs sampling, but deterministic.*
*(You set it to the expectation of some quantity)*

### Visual Description
Text-only slide with mathematical derivations for coordinate ascent updates in a pairwise undirected graphical model (UGM).

---
## Page 18
### Content
# The computer science approach: outer relaxation

**Gibbs variational principle:** Let $p(x) = \frac{1}{Z} \exp(E(x))$ be a distribution over a domain $\mathcal{X}$. Then, $Z$ is the solution to the following optimization problem:
$$\log Z = \max_{q: \text{ distribution over } \mathcal{X}} H(q) + \mathbb{E}_{x \sim q}[E(x)]$$

What can we do to try to approximate this expression?

**Inspiration from computer science:** solve a *simpler* optimization problem over a *larger set* of mathematical objects that’s easier to maximize over.

For example, often when we want to solve an integer program where the variables are required to be $\{0,1\}$, we instead solve a relaxed *linear program*, where the variables are required to be in $[0,1]$.

### Visual Description
Text-only slide with two highlighted boxes. The first box contains the Gibbs variational principle formula. The second box contains the "Inspiration from computer science" text.

---
## Page 19
### Content
# The computer science approach: outer relaxation

**Gibbs variational principle:** Let $p(x) = \frac{1}{Z} \exp(E(x))$ be a distribution over a domain $\mathcal{X}$. Then, $Z$ is the solution to the following optimization problem:
$$\log Z = \max_{q: \text{ distribution over } \mathcal{X}} H(q) + \mathbb{E}_{x \sim q}[E(x)]$$

Let’s focus on UGMs: $p(x) \propto \exp\left(\sum_C \phi_C(x_C)\right)$

We can rewrite: $\mathbb{E}_q \left[ \sum_C \phi_C(x_C) \right] = \sum_C \mathbb{E}_{q_C} [\phi_C(x_C)] = \sum_C \sum_{x_C} q_C(x_C) \phi_C(x_C)$

Objective can be rewritten as:
$$\max_{\{q_C(x_C)\}_C} \left\{ \sum_C \mathbb{E}_{q_C}[\phi_C(x_C)] + \max_{\tilde{q}: \tilde{q}_C(x_C) = q_C(x_C), \forall C} H(\tilde{q}) \right\}$$

### Visual Description
Text-only slide with mathematical derivations. A highlighted box at the bottom contains the rewritten objective function for the Gibbs variational principle applied to UGMs.

---
## Page 20
### Content
# The computer science approach: outer relaxation

Objective can be rewritten as:
$$\max_{\{q_C(x_C)\}_C} \left\{ \sum_C \mathbb{E}_{q_C}[\phi_C(x_C)] + \max_{\tilde{q}: \tilde{q}_C(x_C) = q_C(x_C), \forall C} H(\tilde{q}) \right\}$$

We seemingly gained something: we are now only optimizing over the set of all $q_C$. If there are $K$ maximal cliques, each of size $\le M$, and each variable $x_i$ can take $L$ values, we only need $K L^M$ variables to describe $q_C$. (As opposed to $L^d$.)

We have a different problem though: the set $\{q_C(x_C)\}_C$ needs to be such that there exists a distribution $\tilde{q}$, s.t. $\tilde{q}_C(x_C) = q_C(x_C)$. In other words, these $q_C$ satisfy some (implicit) constraints.

What are these constraints?

### Visual Description
Text-only slide continuing the discussion on outer relaxation, highlighting the reduction in variables and the introduction of implicit constraints.

---
## Page 21
### Content
# The computer science approach: outer relaxation

Objective can be rewritten as:
$$\max_{\{q_C(x_C)\}_C} \left\{ \sum_C \mathbb{E}_{q_C}[\phi_C(x_C)] + \max_{\tilde{q}: \tilde{q}_C(x_C) = q_C(x_C), \forall C} H(\tilde{q}) \right\}$$

Let’s consider pairwise potentials, s.t. $|C| \le 2$. Some obvious constraints:
$$\sum_{x_i} q_i(x_i) = 1, \quad q_i(x_i) \ge 0, \forall x_i$$
$$\sum_{x_i} q_{i,j}(x_i, x_j) = q_j(x_j), \quad q_{i,j}(x_i, x_j) \ge 0, \forall x_i, x_j$$

The polytope described by these (in)equalities is called the **local polytope**.

Is this all of them?
Must there be a distribution $\tilde{q}$, s.t. $\tilde{q}_{ij} = q_{ij}, \tilde{q}_i = q_i$?

### Visual Description
Text-only slide defining the local polytope through a set of normalization and marginal consistency constraints for pairwise potentials.

---
## Page 22
### Content
# The computer science approach: outer relaxation

Objective can be rewritten as:
$$\max_{\{q_C(x_C)\}_C} \left\{ \sum_C \mathbb{E}_{q_C}[\phi_C(x_C)] + \max_{\tilde{q}: \tilde{q}_C(x_C) = q_C(x_C), \forall C} H(\tilde{q}) \right\}$$

**Example:**
Consider an Ising model on a triangle graph as shown on the left.

Easy to check all the constraints on the previous slide are satisfied.

**Fishy:** 1 and 2, 2 and 3 have strong tendency to be the same; 1 and 3 do not.
Can this **actually** happen?

### Visual Description
The slide contains a diagram of a triangle graph with nodes 1, 2, and 3. 
- Each node has a marginal distribution $[0.5, 0.5]$.
- Edges (1,2) and (2,3) have joint distributions $\begin{bmatrix} 0.4 & 0.1 \\ 0.1 & 0.4 \end{bmatrix}$, indicating a high probability of being the same.
- Edge (1,3) has a joint distribution $\begin{bmatrix} 0.1 & 0.4 \\ 0.4 & 0.1 \end{bmatrix}$, indicating a high probability of being different.

---
## Page 23
### Content
# The computer science approach: outer relaxation

Objective can be rewritten as:
$$\max_{\{q_C(x_C)\}_C} \left\{ \sum_C \mathbb{E}_{q_C}[\phi_C(x_C)] + \max_{\tilde{q}: \tilde{q}_C(x_C) = q_C(x_C), \forall C} H(\tilde{q}) \right\}$$

Not quite. Notice:
$$1(x_1 \ne x_2) + 1(x_2 \ne x_3) + 1(x_1 = x_3) \ge 1$$
If $x_1 \ne x_3$, cannot be the case that both $x_1 = x_2$ and $x_2 = x_3$.

Taking expectations wrt $\tilde{q}$:
$$P_{\tilde{q}}(x_1 \ne x_2) + P_{\tilde{q}}(x_2 \ne x_3) + P_{\tilde{q}}(x_1 = x_3) \ge 1$$

But, for distribution on picture: LHS = $0.2 + 0.2 + 0.2 < 1$

### Visual Description
The slide repeats the triangle graph diagram from the previous page and provides a mathematical proof using indicator functions and expectations to show that the proposed local marginals are globally inconsistent.

---
## Page 24
### Content
# The computer science approach: outer relaxation

Objective can be rewritten as:
$$\max_{\{q_C(x_C)\}_C} \left\{ \sum_C \mathbb{E}_{q_C}[\phi_C(x_C)] + \max_{\tilde{q}: \tilde{q}_C(x_C) = q_C(x_C), \forall C} H(\tilde{q}) \right\}$$

The local polytope constitutes an “outer approximation” of the marginal polytope. (The polytope of $q_C$ that are valid marginals of some distribution $\tilde{q}$.)

This approach yields an approximation for $\log Z$ that is *more* than the true value (since we are maximizing over a bigger set than the original problem).

### Visual Description
The slide features two geometric diagrams:
1. **Marginal polytope (global consistency):** A red pentagon representing the set of globally consistent marginals.
2. **Local polytope:** A larger green hexagon that completely contains the red marginal polytope, illustrating that the local polytope is an outer approximation.

---
==End of PDF==
## Page 25
### Content
# The computer science approach: outer relaxation

Objective can be rewritten as:
$$\max_{\{q_C(x_C)\}_C} \left\{ \sum_C \mathbb{E}_{q_C}[\phi_C(x_C)] + \max_{\tilde{q}: \tilde{q}_C(x_C)=q_C(x_C), \forall C} H(\tilde{q}) \right\}$$

In fact, this problem is more severe: in general, deciding whether $\{q_C(x_C)\}_C$ are valid marginals is NP-hard. (In other words, checking membership in the marginal polytope is NP-hard.)

Sometimes, the local approximation can be very good.

In fact, if UGM is a tree: it is exact.

### Visual Description
A diagram of a simple path graph (a tree) with 6 nodes labeled 1 through 6. The edges between nodes are labeled with interaction terms: $J_{12}$ between 1 and 2, $J_{23}$ between 2 and 3, $J_{34}$ between 3 and 4, $J_{45}$ between 4 and 5, and $J_{56}$ between 5 and 6.

---
## Page 26
### Content
# Dealing with the entropy term

Objective can be rewritten as:
$$\max_{\{q_C(x_C)\}_C} \left\{ \sum_C \mathbb{E}_{q_C}[\phi_C(x_C)] + \max_{\tilde{q}: \tilde{q}_C(x_C)=q_C(x_C), \forall C} H(\tilde{q}) \right\}$$

Before we turn to trees, how do we deal with the term $\max_{\tilde{q}: \tilde{q}_C(x_C)=q_C(x_C), \forall C} H(\tilde{q})$?

As written, evaluating the term seems to require solving an optimization problem.

In fact, it seems to require optimizing over all distributions $\tilde{q}$. This was the problem we started out with ....

With an eye towards trees: what is the entropy $H(\tilde{q})$ for a tree?

### Visual Description
Text-only slide. The main optimization objective is highlighted in a light green box.

---
## Page 27
### Content
# Dealing with the entropy term

**Claim:** For a distribution $\tilde{q}$ following an (undirected) tree, and any rooting of the tree, we have
$$H(\tilde{q}) = H(\tilde{q}(x_{\text{root}})) + \sum_i H(\tilde{q}(x_i | x_{\text{parent}(i)}))$$

Moreover, for **any** distribution $\tilde{q}$ (not necessarily coming from a tree),
$$H(\tilde{q}) \leq H(\tilde{q}(x_{\text{root}})) + \sum_i H(\tilde{q}(x_i | x_{\text{parent}(i)}))$$

For any distribution $\tilde{q}$, we have $\tilde{q}(x_1, \dots, x_n) = \tilde{q}(x_1)\tilde{q}(x_2|x_1) \dots \tilde{q}(x_n|x_1, \dots, x_{n-1})$

For a tree $\tilde{q}$, by the global Markov property, rooting it at any node, we have
$$\tilde{q}(x_1, \dots, x_n) = \tilde{q}(x_{\text{root}}) \prod_i \tilde{q}(x_i | x_{\text{parent}(i)})$$

> Recall chain rule for entropy: $H(X, Y) = H(X) + H(Y|X)$, where
> $$H(Y|X) := \sum_x p(X=x)H(Y|X=x)$$

### Visual Description
Text-only slide. The claim and its inequality version are in a light green box. The recall note about the chain rule for entropy is in a light orange box.

---
## Page 28
### Content
# Dealing with the entropy term

**Claim:** For a distribution $\tilde{q}$ following an (undirected) tree, and any rooting of the tree, we have
$$H(\tilde{q}) = H(\tilde{q}(x_{\text{root}})) + \sum_i H(\tilde{q}(x_i | x_{\text{parent}(i)}))$$

Moreover, for **any** distribution $\tilde{q}$ (not necessarily coming from a tree),
$$H(\tilde{q}) \leq H(\tilde{q}(x_{\text{root}})) + \sum_i H(\tilde{q}(x_i | x_{\text{parent}(i)}))$$

For any distribution $\tilde{q}$, we have $\tilde{q}(x_1, \dots, x_n) = \tilde{q}(x_1)\tilde{q}(x_2|x_1) \dots \tilde{q}(x_n|x_1, \dots, x_{n-1})$

For a tree $\tilde{q}$, by the global Markov property, rooting it at any node, we have
$$\tilde{q}(x_1, \dots, x_n) = \tilde{q}(x_{\text{root}}) \prod_i \tilde{q}(x_i | x_{\text{parent}(i)})$$

By the *chain rule for entropy*, $H(\tilde{q}) = H(\tilde{q}(x_{\text{root}})) + \sum_i H(\tilde{q}(x_i | x_{\text{parent}(i)}))$

### Visual Description
Text-only slide. This is a continuation of the previous slide, adding a concluding sentence about the chain rule.

---
## Page 29
### Content
# Dealing with the entropy term

**Claim:** For a distribution $\tilde{q}$ following an (undirected) tree, and any rooting of the tree, we have
$$H(\tilde{q}) = H(\tilde{q}(x_{\text{root}})) + \sum_i H(\tilde{q}(x_i | x_{\text{parent}(i)}))$$

Moreover, for **any** distribution $\tilde{q}$ (not necessarily coming from a tree),
$$H(\tilde{q}) \leq H(\tilde{q}(x_{\text{root}})) + \sum_i H(\tilde{q}(x_i | x_{\text{parent}(i)}))$$

For any distribution $\tilde{q}$, we have $\tilde{q}(x_1, \dots, x_n) = \tilde{q}(x_1)\tilde{q}(x_2|x_1) \dots \tilde{q}(x_n|x_1, \dots, x_{n-1})$

Also by the chain rule for entropy, $H(\tilde{q}) = H(\tilde{q}(x_1)) + \sum_i H(\tilde{q}(x_i | x_{<i}))$

> Conditioning can only **decrease** entropy: $H(X|Y, Z) \leq H(X|Y)$

Hence, $H(\tilde{q}) \leq H(\tilde{q}(x_{\text{root}})) + \sum_i H(\tilde{q}(x_i | x_{\text{parent}(i)}))$ (take ordering $x_1, x_2, \dots, x_n$ to follow the ancestral ordering of the rooted tree).

### Visual Description
Text-only slide. Includes a highlighted orange box stating that conditioning decreases entropy.

---
## Page 30
### Content
# Exactness on trees

We are optimizing:
$$\max_{\{q_{ij}(x_{ij})\} \in \mathbb{L}} \left\{ \sum_{i \sim j} \mathbb{E}_{q_{ij}}[\phi_{ij}(x_{ij})] + H(q(x_{\text{root}})) + \sum_i H(q(x_i | x_{\text{parent}(i)})) \right\} \dots (1)$$

And trying to show it is equal to:
$$\max_{\{q_{ij}(x_{ij})\} \in \mathbb{M}} \left\{ \sum_{i \sim j} \mathbb{E}_{q_{ij}}[\phi_{ij}(x_{ij})] + \max_{\tilde{q}: \tilde{q}_{ij}(x_{ij})=q_{ij}(x_{ij}), \forall C} H(\tilde{q}) \right\} \dots (2)$$

Since $\mathbb{M} \subseteq \mathbb{L}$ and *Claim*: $(1) \geq (2)$. How to prove $(1) \leq (2)$?

*Strategy*: Given the best solution to (1), produce a feasible solution to (2), that has the same value as (1). (Hence, $(1) \leq (2)$).

**How to do this?**
(1) We will produce a **distribution** $q$, whose pairwise marginals match $q_{ij}$
(2) Moreover, the entropy of $q$ satisfies $H(q) = \max_{\tilde{q}: \tilde{q}_{ij}(x_{ij})=q_{ij}(x_{ij}), \forall C} H(\tilde{q})$

### Visual Description
Text-only slide. The optimization problems (1) and (2) are in a light green box. The strategy is in a light orange box.

---
## Page 31
### Content
# Exactness on trees

We are optimizing:
$$\max_{\{q_{ij}(x_{ij})\} \in \mathbb{L}} \left\{ \sum_{i \sim j} \mathbb{E}_{q_{ij}}[\phi_{ij}(x_{ij})] + H(q(x_{\text{root}})) + \sum_i H(q(x_i | x_{\text{parent}(i)})) \right\} \dots (1)$$

And trying to show it is equal to:
$$\max_{\{q_{ij}(x_{ij})\} \in \mathbb{M}} \left\{ \sum_{i \sim j} \mathbb{E}_{q_{ij}}[\phi_{ij}(x_{ij})] + \max_{\tilde{q}: \tilde{q}_{ij}(x_{ij})=q_{ij}(x_{ij}), \forall C} H(\tilde{q}) \right\} \dots (2)$$

Since $\mathbb{M} \subseteq \mathbb{L}$ and *Claim*: $(1) \geq (2)$. How to prove $(1) \leq (2)$?

*Strategy*: Given the best solution to (1), produce a feasible solution to (2), that has the same value as (1). (Hence, $(1) \leq (2)$).

**How to do this?** An algorithm to produce $q$:
- Iterate through the nodes in the ancestral order.
- For each node, produce sample for $x_i$ by sampling from $q(x_i | x_{\text{parent}(i)})$

### Visual Description
Text-only slide. Similar to the previous slide, but replaces the "How to do this?" points with an algorithm description.

---
## Page 32
### Content
# Exactness on trees

We are optimizing:
$$\max_{\{q_{ij}(x_{ij})\} \in \mathbb{L}} \left\{ \sum_{i \sim j} \mathbb{E}_{q_{ij}}[\phi_{ij}(x_{ij})] + H(q(x_{\text{root}})) + \sum_i H(q(x_i | x_{\text{parent}(i)})) \right\} \dots (1)$$

And trying to show it is equal to:
$$\max_{\{q_{ij}(x_{ij})\} \in \mathbb{M}} \left\{ \sum_{i \sim j} \mathbb{E}_{q_{ij}}[\phi_{ij}(x_{ij})] + \max_{\tilde{q}: \tilde{q}_{ij}(x_{ij})=q_{ij}(x_{ij}), \forall C} H(\tilde{q}) \right\} \dots (2)$$

**How to do this?** An algorithm to produce $q$:
- Iterate through the nodes in the ancestral order.
- For each node, produce sample for $x_i$ by sampling from $q(x_i | x_{\text{parent}(i)})$

**Marginals are preserved:** For any two nodes $i \sim j$,
$q(x_i, x_j) = q_{ij}(x_i, x_j)$

(Proof by induction)

### Visual Description
Text-only slide. Adds the claim that marginals are preserved and mentions a proof by induction.

---
## Page 33
### Content
# Exactness on trees

We are optimizing:
$$\max_{\{q_{ij}(x_{ij})\} \in L} \left\{ \sum_{i \sim j} \mathbb{E}_{q_{ij}}[\phi_{ij}(x_{ij})] + H(q(x_{\text{root}})) + \sum_i H(q(x_i | x_{\text{parent}(i)})) \right\} .. (1)$$

And trying to show it is equal to:
$$\max_{\{q_{ij}(x_{ij})\} \in M} \left\{ \sum_{i \sim j} \mathbb{E}_{q_{ij}}[\phi_{ij}(x_{ij})] + \max_{\tilde{q}: \tilde{q}_{ij}(x_C) = q_{ij}(x_C), \forall C} H(\tilde{q}) \right\} .. (2)$$

**How to do this?** An algorithm to produce $q$:
* Iterate through the nodes in the ancestral order.
* For each node, produce sample for $x_i$ by sampling from $q(x_i | x_{\text{parent}(i)})$

**Entropy is preserved:** The entropy of the distribution $q$ is (by *Claim*)
$$H(q) = H(q(x_{\text{root}})) + \sum_i H(q(x_i | x_{\text{parent}(i)}))$$

Also by *Claim*: $\max_{\tilde{q}: \tilde{q}_{ij}(x_C) = q_{ij}(x_C), \forall C} H(\tilde{q}) \leq H(q)$.

### Visual Description
The slide contains two main mathematical optimization problems in a light green box at the top. Below the box, there is text explaining an algorithm and two claims regarding entropy preservation and maximization.

---
## Page 34
### Content
# What if the graph is not a tree?

The expression for entropy we chose
$$H(\tilde{q}) = H(\tilde{q}(x_{\text{root}})) + \sum_i H(\tilde{q}(x_i | x_{\text{parent}(i)}))$$
does not even make sense: you cannot “root” a graph with loops.

How do we even approximate the term $\max_{\tilde{q}: \tilde{q}_{ij}(x_C) = q_{ij}(x_C), \forall C} H(\tilde{q})$ ?

### Visual Description
Text-only slide.

---
## Page 35
### Content
# Rewriting the entropy

**Claim:** If the graph is a **tree**, the entropy $H(q)$ can be written as follows:
$$H(q) = \sum_{i \sim j} H(q_{ij}) - \sum_i (d_i - 1) H(q_i)$$

For a tree, we had $H(\tilde{q}) = H(\tilde{q}(x_{\text{root}})) + \sum_i H(\tilde{q}(x_i | x_{\text{parent}(i)}))$

By the chain rule for entropy, we have
$$H(\tilde{q}(x_i | x_{\text{parent}(i)})) = H(\tilde{q}(x_i, x_{\text{parent}(i)})) - H(\tilde{q}(x_{\text{parent}(i)}))$$

Hence, every “edge” entropy is added once; every “node” entropy is added once, and subtracted $d_i$ times.

Thus, the claim follows.

### Visual Description
The slide presents a claim in a light green box followed by a mathematical derivation using the chain rule for entropy to prove the claim.

---
## Page 36
### Content
# Rewriting the entropy

**Claim:** If the graph is a **tree**, the entropy $H(q)$ can be written as follows:
$$H(q) = \sum_{i \sim j} H(q_{ij}) - \sum_i (d_i - 1) H(q_i)$$

*Interpretation:* every “edge” entropy is added once. Each “node” is “counted” for every edge it participates in, so we should “subtract” the extra $(d_i - 1)$ times it’s counted.

*Benefit of rewrite:* the above expression is well-defined **for any graph**.
(Whether it is a tree or not.)

![Grid graph with 8 nodes X1 to X8](graph_diagram)

$$H_{\text{Bethe}}(q) = H(q_{12}) + H(q_{23}) + ... + H(q_{67}) + H(q_{78}) - H(q_1) - 2H(q_2) - 2H(q_6) ...$$

### Visual Description
The slide repeats the claim from the previous page and provides an interpretation. It includes a diagram of a 2x4 grid graph with nodes labeled $X_1$ through $X_8$. Dashed ellipses highlight the edges between nodes. At the bottom, an example of the Bethe entropy calculation for this graph is shown.

---
## Page 37
### Content
# Rewriting the entropy

**Claim:** If the graph is a **tree**, the entropy $H(q)$ can be written as follows:
$$H(q) = \sum_{i \sim j} H(q_{ij}) - \sum_i (d_i - 1) H(q_i)$$

*Interpretation:* every “edge” entropy is added once. Each “node” is “counted” for every edge it participates in, so we should “subtract” the extra $(d_i - 1)$ times it’s counted.

*Benefit of rewrite:* the above expression is well-defined **for any graph**.
(Whether it is a tree or not.)

$$H_{\text{Bethe}}(q) := \sum_{i \sim j} H(q_{ij}) - \sum_i (d_i - 1) H(q_i)$$
is called the **Bethe entropy**, after the physicist Hans Bethe.

![Portrait of Hans Bethe](hans_bethe_photo)

### Visual Description
The slide defines the Bethe entropy in a light orange box. It includes the same claim and interpretation as the previous page and features a black-and-white portrait photo of the physicist Hans Bethe in the bottom right corner.

---
## Page 38
### Content
# The Bethe relaxation

Regardless if the graph is a tree or not, we can write down the following relaxation to the variational principle for the log partition function:

$$\max_{\{q_{ij}(x_{ij})\} \in M} \left\{ \sum_{i \sim j} \mathbb{E}_{q_{ij}}[\phi_{ij}(x_{ij})] + H_{\text{Bethe}}(q) \right\}$$

The above quantity is also called the **Bethe free energy**.

It is not guaranteed to be either a lower or upper bound of log Z:
$H_{\text{Bethe}}(q)$ can be both less and more than log Z.

*It is generally not going to equal the entropy.*
*It is generally not going to be concave.*

### Visual Description
The slide introduces the Bethe relaxation and Bethe free energy. The main optimization formula is highlighted in a light green box. Several bullet points describe the properties of this relaxation, noting it's not necessarily a bound and is generally not concave.

---
## Page 39
### Content
# The Bethe relaxation

Regardless if the graph is a tree or not, we can write down the following relaxation to the variational principle for the log partition function:

$$\max_{\{q_{ij}(x_{ij})\} \in M} \left\{ \sum_{i \sim j} \mathbb{E}_{q_{ij}}[\phi_{ij}(x_{ij})] + H_{\text{Bethe}}(q) \right\}$$

We can rewrite the Bethe entropy in a slightly more convenient form:

$$H_{\text{Bethe}}(q) = -\sum_{i \sim j} \sum_{x_i, x_j} q_{ij}(x_i, x_j) \log \frac{q_{ij}(x_i, x_j)}{q_i(x_i)q_j(x_j)} - \sum_i \sum_{x_i} q_i(x_i) \log q_i(x_i)$$

### Visual Description
The slide shows a more convenient mathematical form for the Bethe entropy, expressed using sums over nodes and edges and logarithms of probability distributions. The top part repeats the Bethe relaxation formula in a light green box.

---
## Page 40
### Content
# Can we try to solve it despite non concavity?

Since this is a constrained maximization problem, one reasonable way to solve it is via introducing Lagrange multipliers:

$$\max_{q_i(x_i), q_{ij}(x_{ij}), \lambda_i, \lambda_{ij}(x_j)} \sum_{i \sim j} \mathbb{E}_{q_{ij}}[\phi_{ij}(x_{ij})] + H_{\text{Bethe}}(q) + \sum_{i=1}^d \lambda_i \left( \sum_{x_i} q_i(x_i) - 1 \right)$$
$$+ \sum_{i \sim j} \left( \sum_{x_j} \lambda_{ij}(x_j) \left( \sum_{x_i} q_{ij}(x_i, x_j) - q_j(x_j) \right) + \sum_{x_i} \lambda_{ji}(x_i) \left( \sum_{x_j} q_{ij}(x_i, x_j) - q_i(x_i) \right) \right)$$

What are the stationary points of this objective? (i.e. points where grad = 0)

$$0 = \frac{\partial L}{\partial q_{ij}(x_i, x_j)} = \phi_{ij}(x_i, x_j) - \log q_{ij}(x_i, x_j) + \log(q_i(x_i)q_j(x_j)) + (\lambda_{ij}(x_j) + \lambda_{ji}(x_i)) + \text{const}$$

$$\Rightarrow q_{ij}(x_i, x_j) \propto q_i(x_i)q_j(x_j) \exp \left( \phi_{ij}(x_i, x_j) + (\lambda_{ij}(x_j) + \lambda_{ji}(x_i)) \right)$$

### Visual Description
The slide details the use of Lagrange multipliers to find stationary points for the Bethe free energy optimization. It shows a large Lagrangian expression followed by its partial derivative with respect to $q_{ij}$ and the resulting proportional relationship for $q_{ij}$.

---
## Page 41
### Content
# Can we try to solve it despite non-concavity?

Since this is a constrained maximization problem, one reasonable way to solve it is via introducing Lagrange multipliers:

$$
\max_{q_i(x_i), q_{ij}(x_{ij}), \lambda_i, \lambda_{i,j}(x_j)} \sum_{i \sim j} \mathbb{E}_{q_{ij}}[\phi_{ij}(x_{ij})] + H_{\text{Bethe}}(q) + \sum_{i=1}^d \lambda_i \left( \sum_{x_i} q_i(x_i) - 1 \right)
$$
$$
+ \sum_{i \sim j} \left( \sum_{x_j} \lambda_{ij}(x_j) \left( \sum_{x_i} q_{ij}(x_i, x_j) - q_j(x_j) \right) + \sum_{x_i} \lambda_{ji}(x_i) \left( \sum_{x_j} q_{ij}(x_i, x_j) - q_i(x_i) \right) \right)
$$

What are the stationary points of this objective? (i.e. points where grad = 0)

$$
0 = \frac{\partial L}{\partial q_i(x_i)} = -\log q_i(x_i) + \sum_{i \sim j} \sum_{x_j} \frac{q_{ij}(x_i, x_j)}{q_i(x_i)} + \lambda_i - \sum_j \lambda_{ji}(x_i) + \text{const}
$$
$$
\Rightarrow q_i(x_i) \propto \exp \left( -\sum_{i \sim j} \lambda_{ji}(x_i) \right)
$$

### Visual Description
Text-only slide containing mathematical derivations for solving a constrained maximization problem using Lagrange multipliers.

---
## Page 42
### Content
# Can we try to solve it despite non-concavity?

> $$q_{ij}(x_i, x_j) \propto q_i(x_i) q_j(x_j) \exp \left( \phi_{ij}(x_{ij}) + (\lambda_{ij}(x_j) + \lambda_{ji}(x_i)) \right)$$
> $$q_i(x_i) \propto \exp \left( -\sum_{i \sim j} \lambda_{ji}(x_i) \right)$$

Additionally, we have $\sum_{x_j} q_{ij}(x_i, x_j) = q_i(x_i)$:

$$q_i(x_i) \propto q_i(x_i) \exp(\lambda_{ji}(x_i)) \sum_{x_j} q_j(x_j) \exp(\phi_{ij}(x_{ij}) + \lambda_{ij}(x_j))$$
$$\exp(-\lambda_{ji}(x_i)) \propto \sum_{x_j} q_j(x_j) \exp(\phi_{ij}(x_{ij}) + \lambda_{ij}(x_j))$$
$$\exp(-\lambda_{ji}(x_i)) \propto \sum_{x_j} \exp \left( -\sum_{k \sim j} \lambda_{kj}(x_j) + \phi_{ij}(x_{ij}) + \lambda_{ij}(x_j) \right)$$

### Visual Description
Mathematical derivation slide. Key equations for $q_{ij}$ and $q_i$ are highlighted in a light orange box at the top. The rest of the slide shows the algebraic steps following a marginalization constraint.

---
## Page 43
### Content
# Can we try to solve it despite non-concavity?

> $$q_{ij}(x_i, x_j) \propto q_i(x_i) q_j(x_j) \exp \left( \phi_{ij}(x_{ij}) + (\lambda_{ij}(x_j) + \lambda_{ji}(x_i)) \right)$$
> $$q_i(x_i) \propto \exp \left( -\sum_{i \sim j} \lambda_{ji}(x_i) \right)$$

Additionally, we have $\sum_{x_j} q_{ij}(x_i, x_j) = q_i(x_i)$:

$$q_i(x_i) \propto q_i(x_i) \exp(\lambda_{ji}(x_i)) \sum_{x_j} q_j(x_j) \exp(\phi_{ij}(x_{ij}) + \lambda_{ij}(x_j))$$
$$\exp(-\lambda_{ji}(x_i)) \propto \sum_{x_j} q_j(x_j) \exp(\phi_{ij}(x_{ij}) + \lambda_{ij}(x_j))$$

> $$\exp(-\lambda_{ji}(x_i)) \propto \sum_{x_j} \exp \left( -\sum_{k \sim j, k \neq i} \lambda_{kj}(x_j) + \phi_{ij}(x_{ij}) \right)$$

### Visual Description
Mathematical derivation slide, continuing from the previous page. It features two highlighted light orange boxes: one at the top with the initial proportionalities and one at the bottom showing the final simplified expression for $\exp(-\lambda_{ji}(x_i))$.

---
## Page 44
### Content
# Can we try to solve it despite non-concavity?

> $$q_{ij}(x_i, x_j) \propto q_i(x_i) q_j(x_j) \exp \left( \phi_{ij}(x_{ij}) + (\lambda_{ij}(x_j) + \lambda_{ji}(x_i)) \right)$$
> $$q_i(x_i) \propto \exp \left( -\sum_{i \sim j} \lambda_{ji}(x_i) \right)$$
> $$\exp(-\lambda_{ji}(x_i)) \propto \sum_{x_j} \exp \left( -\sum_{k \sim j, k \neq i} \lambda_{kj}(x_j) + \phi_{ij}(x_{ij}) \right)$$

Potential idea: keep updating the LHS by the value of the RHS, until you (hopefully?) reach a fixed point.

*Remind you of something?*

### Visual Description
The slide presents three key equations in a large light orange box. Below the box, text suggests an iterative update approach and asks a rhetorical question to prompt a connection to a known algorithm.

---
## Page 45
### Content
# Recall: Message Passing

[Diagram of stick figures passing messages]

*   **7 here**
*   **3 here**
*   **3 here**
*   **Belief: Must be 14 of us**

*wouldn't work correctly with a 'loopy' (cyclic) graph*

### Visual Description
A conceptual diagram illustrating message passing. Several stick figures (nodes) are connected in a network. Red arrows indicate numerical "messages" (7, 3, 3) being sent to a central figure. The central figure has a thought bubble representing its "Belief" (14), which is the sum of the incoming messages plus itself. A blue caption at the bottom notes that this simple logic fails in graphs with cycles. The Carnegie Mellon University logo is in the bottom right.

---
## Page 46
### Content
# Can we try to solve it despite non-concavity?

> $$q_{ij}(x_i, x_j) \propto q_i(x_i) q_j(x_j) \exp \left( \phi_{ij}(x_{ij}) + (\lambda_{ij}(x_j) + \lambda_{ji}(x_i)) \right)$$
> $$q_i(x_i) \propto \exp \left( -\sum_{i \sim j} \lambda_{ji}(x_i) \right)$$
> $$\exp(-\lambda_{ji}(x_i)) \propto \sum_{x_j} \exp \left( -\sum_{k \sim j, k \neq i} \lambda_{kj}(x_j) + \phi_{ij}(x_{ij}) \right)$$

Remember message passing?

$$m_{j \to i}(x_i) = \sum_{x_j} \exp(\phi_{ij}(x_i, x_j)) \prod_{k \in N(j) \setminus i} m_{k \to j}(x_j).$$

> Set $m_{j \to i}(x_i) = \exp(-\lambda_{ji}(x_i))$

### Visual Description
This slide links the previously derived equations (in the top box) to the standard message passing update equation. A small highlighted box at the bottom explicitly defines the mapping between the message $m_{j \to i}$ and the Lagrange multiplier term.

---
## Page 47
### Content
# Can we try to solve it despite non-concavity?

$$\exp(-\lambda_{ji}(x_i)) \propto \sum_{x_j} \exp \left( -\sum_{k \sim j, k \neq i} \lambda_{kj}(x_j) + \phi_{ij}(x_{ij}) \right) \quad m_{j \to i}(x_i) = \sum_{x_j} \exp(\phi_{ij}(x_i, x_j)) \prod_{k \in N(j) \setminus i} m_{k \to j}(x_j).$$

> Set $m_{j \to i}(x_i) = \exp(-\lambda_{ji}(x_i))$

Formal connection between running belief propagation on graphs with loops and Bethe relaxation:

Stationary point of the Lagrangian formulation of Bethe relaxation are in **one-to-one correspondence** with fixed points of the belief propagation updates.

(By mapping $m_{j \to i}(x_i)$ to $\exp(-\lambda_{ji}(x_i))$ )

Gives us license to run loopy belief propagation: it would correspond to trying to find stationary points of Bethe relaxation.

### Visual Description
Text-heavy slide explaining the formal connection between Loopy Belief Propagation and Bethe relaxation. It shows the mathematical equivalence of their update rules through a specific mapping, highlighted in a central box.

---
## Page 48
### Content
# Can we try to solve it despite non-concavity?

$$\exp(-\lambda_{ji}(x_i)) \propto \sum_{x_j} \exp \left( -\sum_{k \sim j, k \neq i} \lambda_{kj}(x_j) + \phi_{ij}(x_{ij}) \right) \quad m_{j \to i}(x_i) = \sum_{x_j} \exp(\phi_{ij}(x_i, x_j)) \prod_{k \in N(j) \setminus i} m_{k \to j}(x_j).$$

> Set $m_{j \to i}(x_i) = \exp(-\lambda_{ji}(x_i))$

Caveats:

*   May or may not converge. (No formal characterization when.)
*   Even if it converges, it only does so to a stationary point. (May or may not be close to the global optimum, no formal characterization when.)

Some empirical studies on a few famous graphical models like QMR-DT:

> **Loopy-belief Propagation for Approximate Inference: An Empirical Study**
> Kevin Murphy, Yair Weiss, and Michael Jordan.
> UAI '99 (Uncertainty in AI).

### Visual Description
Slide listing caveats for using Loopy Belief Propagation, such as convergence issues and the potential to reach only local stationary points. It concludes with a reference to a seminal empirical study by Murphy, Weiss, and Jordan (1999) in a blue-highlighted box.
## Page 49
### Content
# A short glimpse of relaxations

We saw the most “basic” relaxations. Lots of further work over the years.

*Definitive reference:*

**Graphical Models, Exponential Families, and Variational Inference**

Martin J. Wainwright$^1$ and Michael I. Jordan$^2$

There’s approaches to “convexify” Bethe entropy (e.g. tree-reweighted BP, sum-of-squares and convex programming hierarchies, etc.) .

There’s approaches to “increase” the locality (e.g. Kikuchi approximations).

There’s approaches to “correct” the Bethe entropy (e.g. loop series expansions; usually work when there’s not too many / short loops).

### Visual Description
Text-heavy slide with a centered title. It includes a reference to a book by Wainwright and Jordan, shown as a centered image of the title page. The rest of the slide consists of several paragraphs of text detailing different research directions in variational inference relaxations.

---
