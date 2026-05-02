# lecture-notes-28-140_ScroreApprox_with_ReLU

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/lecture-notes-28-140_ScroreApprox_with_ReLU.pdf`
Duplicate equivalents: `lecture-notes-28-140_ScroreApprox_with_ReLU.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 41

## Page 1
### Content
# Score Approximation with ReLU Networks

**Barnabas Poczos**
bapoczos@cs.cmu.edu

Carnegie Mellon University
Slide 1

### Visual Description
Title slide with the main title "Score Approximation with ReLU Networks" in large red bold text. Below it, the author's name and email are in blue. The Carnegie Mellon University logo is in the bottom right corner.

---

## Page 2
### Content
## Paper to Read

### Unveil Conditional Diffusion Models with Classifier-free Guidance: A Sharp Statistical Theory
**Fu et al, 2024**
[https://arxiv.org/abs/2403.11968](https://arxiv.org/abs/2403.11968)

[We will often follow the notation and Equation numbers of this paper]

Slide 2
Carnegie Mellon University

### Visual Description
Text-only slide providing a reference to a specific research paper by Fu et al. (2024) on conditional diffusion models.

---

## Page 3
### Content
## Contents

* Hölder Functions
* ReLU network
* Theorem 3.2. [score estimation error vs complexity of the ReLU net]

$$\int_{\mathbb{R}^d} \|s^\star(\mathbf{x}, \mathbf{y}, t) - \nabla \log p_t(\mathbf{x} \mid \mathbf{y})\|_2^2 \cdot p_t(\mathbf{x} \mid \mathbf{y}) d\mathbf{x} = \mathcal{O}\left(\frac{B^2}{\sigma_t^4} \cdot N^{-\frac{\beta}{d+d_y}} \cdot (\log N)^{d+\beta/2+1}\right)$$

$$\int_{\mathbb{R}^d} \|s^\star(\mathbf{x}, t) - \nabla \log p_t(\mathbf{x})\|^2 p_t(\mathbf{x}) d\mathbf{x} = \mathcal{O}\left(\frac{B^2}{\sigma_t^4} N^{-\frac{\beta}{d}} (\log N)^{d+\beta/2+1}\right)$$

Slide 3
Carnegie Mellon University

### Visual Description
A slide listing the contents of the lecture with three bullet points. Below the bullets, there are two large mathematical equations in red representing score estimation error bounds.

---

## Page 4
### Content
# Hölder Functions

Slide 4
Carnegie Mellon University

### Visual Description
Text-only slide serving as a section header for "Hölder Functions".

---

## Page 5
### Content
## Lipschitz Continuity

**Definition [Lipschitz continuous function]:**
A function $f : \mathbb{R}^d \to \mathbb{R}$, is **Lipschitz continuous** if $\exists C < \infty$ finite number such that
$$|f(\mathbf{x}) - f(\mathbf{y})| \le C \|\mathbf{x} - \mathbf{y}\| \quad \forall \mathbf{x}, \mathbf{y}$$

**Equivalently,**
$$\sup_{\mathbf{x} \neq \mathbf{z}} \frac{|f(\mathbf{x}) - f(\mathbf{z})|}{\|\mathbf{x} - \mathbf{z}\|} = C < \infty$$

**Note:** There are continuous functions that are not Lipschitz continuous

**Generalization [Hölder continuous function]:**
Let $\gamma \in [0, 1]$.
A function $f : \mathbb{R}^d \to \mathbb{R}$, is **$\gamma$-Hölder continuous** if $\exists C < \infty$ finite number such that
$$|f(\mathbf{x}) - f(\mathbf{y})| \le C \|\mathbf{x} - \mathbf{y}\|^\gamma \quad \forall \mathbf{x}, \mathbf{y}$$

**Equivalently,**
$$\sup_{\mathbf{x} \neq \mathbf{z}} \frac{|f(\mathbf{x}) - f(\mathbf{z})|}{\|\mathbf{x} - \mathbf{z}\|^\gamma} = C < \infty$$

Slide 5
Carnegie Mellon University

### Visual Description
Text-only slide defining Lipschitz continuity and its generalization to Hölder continuity with corresponding mathematical formulas.

---

## Page 6
### Content
## Lipschitz Continuity

**Hölder continuous function:**
A function $f : \mathbb{R}^d \to \mathbb{R}$, is **$\gamma$-Hölder continuous** if $\exists C < \infty$ finite number such that
$$|f(\mathbf{x}) - f(\mathbf{y})| \le C \|\mathbf{x} - \mathbf{y}\|^\gamma \quad \forall \mathbf{x}, \mathbf{y}$$

**Equivalently,**
$$\sup_{\mathbf{x} \neq \mathbf{z}} \frac{|f(\mathbf{x}) - f(\mathbf{z})|}{\|\mathbf{x} - \mathbf{z}\|^\gamma} = C < \infty$$

**Special cases**
* $\gamma = 0 \Rightarrow f$ is bounded. (any two values of $f$ are at most $C$ apart.)
* $\gamma = 1 \Rightarrow f$ is Lipschitz continuous.
* $\gamma > 1 \Rightarrow f$ is constant.

**Generalization**
$$\max_{\mathbf{s}: \|\mathbf{s}\|_1 = s} \sup_{\mathbf{x} \neq \mathbf{z}} \frac{|\partial^{\mathbf{s}} f(\mathbf{x}) - \partial^{\mathbf{s}} f(\mathbf{z})|}{\|\mathbf{x} - \mathbf{z}\|^\gamma} = C \le \infty$$
where $\mathbf{s}$ is a multi-index.
[e.g. $\mathbf{s} = (3, 5, 7, 2)$, $s = 17 = 3 + 5 + 7 + 2$]

Slide 6
Carnegie Mellon University

### Visual Description
Text-only slide continuing the discussion on Hölder continuity, detailing special cases for different values of $\gamma$ and providing a generalization using multi-index notation for derivatives.

---

## Page 7
### Content
## Hölder Functions

**Definition 2.1 [Hölder norm]**
Let $\beta = s + \gamma > 0$ be a **degree of smoothness**, where $s = \lfloor \beta \rfloor$ is an **integer** and $\gamma \in [0, 1)$.
For a function $f : \mathbb{R}^d \to \mathbb{R}$, its **Hölder norm** is defined as
$$\|f\|_{\mathcal{H}^\beta(\mathbb{R}^d)} := \max_{\mathbf{s}: \|\mathbf{s}\|_1 \le s} \sup_{\mathbf{x}} |\partial^{\mathbf{s}} f(\mathbf{x})| + \max_{\mathbf{s}: \|\mathbf{s}\|_1 = s} \sup_{\mathbf{x} \neq \mathbf{z}} \frac{|\partial^{\mathbf{s}} f(\mathbf{x}) - \partial^{\mathbf{s}} f(\mathbf{z})|}{\|\mathbf{x} - \mathbf{z}\|_\infty^\gamma}$$
where $\mathbf{s}$ is a multi-index.
[e.g. $\beta = 17.82, \gamma = 0.82, s = \lfloor \beta \rfloor = \|\mathbf{s}\|_1 = 17, \mathbf{s} = (3, 5, 7, 2), 3 + 5 + 7 + 2 = 17$]

The first term measures boundedness of all derivatives up to order $s$: $(\|\mathbf{s}\|_1 \le s)$

The second term measures Hölder continuity only of the top-order derivatives $\|\mathbf{s}\|_1 = s$.
Lower-order derivatives $(\|\mathbf{s}\|_1 < s)$ do not need Hölder continuity.

If we used $\|\mathbf{s}\|_1 \le s$ in both, we would define a smaller function space

Slide 7
Carnegie Mellon University

### Visual Description
Text-only slide defining the Hölder norm mathematically, including an example of multi-index calculation and explanations of the two terms in the definition.

---

## Page 8
### Content
## Hölder Functions

**Definition 2.1 [Hölder norm]**
Let $\beta = s + \gamma > 0$ be a **degree of smoothness**, where $s = \lfloor \beta \rfloor$ is an **integer** and $\gamma \in [0, 1)$.
For a function $f : \mathbb{R}^d \to \mathbb{R}$, its **Hölder norm** is defined as
$$\|f\|_{\mathcal{H}^\beta(\mathbb{R}^d)} := \max_{\mathbf{s}: \|\mathbf{s}\|_1 \le s} \sup_{\mathbf{x}} |\partial^{\mathbf{s}} f(\mathbf{x})| + \max_{\mathbf{s}: \|\mathbf{s}\|_1 = s} \sup_{\mathbf{x} \neq \mathbf{z}} \frac{|\partial^{\mathbf{s}} f(\mathbf{x}) - \partial^{\mathbf{s}} f(\mathbf{z})|}{\|\mathbf{x} - \mathbf{z}\|_\infty^\gamma}$$
where $\mathbf{s}$ is a multi-index.

**Definition [Hölder ball]**
We define a Hölder ball of radius $B > 0$ for some constant $B$ as
$$\mathcal{H}^\beta(\mathbb{R}^d, B) = \left\{ f : \mathbb{R}^d \to \mathbb{R} \mid \|f\|_{\mathcal{H}^\beta(\mathbb{R}^d)} < B \right\}$$

Slide 8
Carnegie Mellon University

### Visual Description
Text-only slide repeating the Hölder norm definition and introducing the definition of a Hölder ball as a set of functions whose Hölder norm is bounded by a constant $B$.
## Page 9
### Content
# Hölder Functions
Let $\beta = s + \gamma > 0$ be a degree of smoothness, where $s = \lfloor \beta \rfloor \geq 0$ is an integer and $\gamma \in [0, 1)$.

$$ \|f\|_{\mathcal{H}^\beta(\mathbb{R}^d)} := \max_{s: \|s\|_1 \leq s} \sup_{\mathbf{x}} |\partial^s f(\mathbf{x})| + \max_{s: \|s\|_1 = s} \sup_{\mathbf{x} \neq \mathbf{z}} \frac{|\partial^s f(\mathbf{x}) - \partial^s f(\mathbf{z})|}{\|\mathbf{x} - \mathbf{z}\|_\infty^\gamma} $$

### Some properties
If $0 < \beta \leq 1$, then $s = 0, \gamma = \beta$ and the norm simplifies to:
$$ \|f\|_{\mathcal{H}^\beta(\mathbb{R}^d)} := \sup_{\mathbf{x}} |f(\mathbf{x})| + \sup_{\mathbf{x} \neq \mathbf{z}} \frac{|f(\mathbf{x}) - f(\mathbf{z})|}{\|\mathbf{x} - \mathbf{z}\|_\infty^\gamma} $$

---
Let $\beta = s + \gamma > 0$ be a degree of smoothness, where $s = \lfloor \beta \rfloor$ is an integer and $\gamma \in [0, 1)$.

if $f \in \mathcal{H}^\beta(\mathbb{R}^d, B)$, that is $\|f\|_{\mathcal{H}^\beta(\mathbb{R}^d)} < B$, then
* $\sup_{\mathbf{x}} |f(\mathbf{x})| \leq B$ function $f$ is bounded by $B$
* $\max_{s: \|s\|_1 < s} \sup_{\mathbf{x}} |\partial^s f(\mathbf{x})| \leq B$ all derivatives up to order $s$ are bounded by $B$

### Visual Description
Text-only slide containing mathematical definitions and properties of Hölder functions.

---

## Page 10
### Content
# Hölder Continuity with gamma > 1

### Theorem
Let $f : [a, b] \to \mathbb{R}$ be Hölder-$\gamma$ continuous for some $\gamma > 1$, i.e. there exists $C > 0$ such that
$$ |f(x) - f(y)| \leq C|x - y|^\gamma \quad \text{for all } x, y \in [a, b]. $$

Then $f$ is constant on $[a, b]$.

The same conclusion holds for $f : \Omega \subset \mathbb{R}^d \to \mathbb{R}^m$ on any connected domain $\Omega$.

### Proof [Next slide]

### Visual Description
Text-only slide stating a theorem about Hölder continuity when the exponent $\gamma$ is greater than 1.

---

## Page 11
### Content
# Hölder Continuity with gamma > 1

### Proof [1d case]:
Fix $x \in [a, b]$. For small $h \neq 0$ we have
$$ \left| \frac{f(x + h) - f(x)}{h} \right| = \frac{|f(x + h) - f(x)|}{|h|} \leq C \frac{|h|^\gamma}{|h|} = C|h|^{\gamma-1}. $$

Because $\gamma > 1$, we have $|h|^{\gamma-1} \to 0$ as $h \to 0$. Thus
$$ \lim_{h \to 0} \frac{f(x + h) - f(x)}{h} = 0, $$
so $f'(x)$ exists and equals 0.

Since $x$ was arbitrary, $f'(x) = 0$ for all $x \in [a, b]$.

Hence $f(y) = f(x)$, so $f$ is constant on $[a, b]$.

### Visual Description
Text-only slide providing the mathematical proof for the 1D case of the theorem presented on the previous page.

---

## Page 12
### Content
# Hölder Continuity with gamma > 1

### Proof [d-dim case]:
For higher dimensions, let $f : \Omega \subset \mathbb{R}^d \to \mathbb{R}^m$ be Hölder-$\gamma$ with $\gamma > 1$ on a connected set $\Omega$.

Given $x, y \in \Omega$, connect them by a polygonal path lying in $\Omega$.

On each line segment, the restriction of $f$ is Hölder-$\gamma$ with $\gamma > 1$ in one dimension.

Hence constant on that segment by the first part of the proof.

Chaining the segments shows $f(x) = f(y)$, so $f$ is constant on $\Omega$.

### Visual Description
Text-only slide providing the mathematical proof for the d-dimensional case of the theorem.

---

## Page 13
### Content
# 3 Conditional Score Approximation with ReLU networks

### Visual Description
Title slide for section 3, "Conditional Score Approximation with ReLU networks". Text is centered in blue.

---

## Page 14
### Content
# ReLU network architecture

### Visual Description
Title slide for the subsection "ReLU network architecture". Text is centered in blue.

---

## Page 15
### Content
# ReLU network architecture
Let $\sigma(\cdot)$ denote the ReLU activation function.

Let $\|\cdot\|_\infty$ denote the maximum value and $\|\cdot\|_0$ be the number of nonzero entries.

**We use neural networks to approximate score functions.**

We consider the following class of ReLU neural networks, denoted by $\mathcal{F}$:

$$ \mathcal{F}(M_t, W, \kappa, L, K) := \left\{ \mathbf{s}(\mathbf{x}, \mathbf{y}, t) = (A_L \sigma(\cdot) + \mathbf{b}_L) \circ \dots \circ (A_1 [\mathbf{x}^\top, \mathbf{y}^\top, t]^\top + \mathbf{b}_1) : \right. $$
$$ A_i \in \mathbb{R}^{d_i \times d_{i+1}}, \mathbf{b}_i \in \mathbb{R}^{d_{i+1}}, $$
$$ \max d_i \leq W, $$
$$ \sup_{\mathbf{x}, \mathbf{y}} \|\mathbf{s}(\mathbf{x}, \mathbf{y}, t)\|_\infty \leq M_t \quad [M_t \text{ magnitude is allowed to depend on } t] $$
$$ \max_i \|A_i\|_\infty \vee \|\mathbf{b}_i\|_\infty \leq \kappa, $$
$$ \left. \sum_{i=1}^L (\|A_i\|_0 + \|\mathbf{b}_i\|_0) \leq K \right\} $$

### Visual Description
Text-only slide defining the architecture and constraints of the ReLU neural network class $\mathcal{F}$ used for score approximation.

---

## Page 16
### Content
# ReLU network architecture

$$ \mathcal{F}(M_t, W, \kappa, L, K) := \left\{ \mathbf{s}(\mathbf{x}, \mathbf{y}, t) = (A_L \sigma(\cdot) + \mathbf{b}_L) \circ \dots \circ (A_1 [\mathbf{x}^\top, \mathbf{y}^\top, t]^\top + \mathbf{b}_1) : \dots \right\} $$

### The complexity of this network class is controlled by the:
* $\star$ number of layers: $L$,
* $\star$ the number of neurons of each layer: $d_i \times d_{i+1} + d_{i+1}$,
* $\star$ the magnitude of the network parameters: $\kappa$,
* $\star$ the number of nonzero parameters: $K$
* $\star$ and the magnitude of the neural network output: $M_t$

### Visual Description
Text-only slide summarizing the parameters that control the complexity of the defined ReLU network class. It repeats the set definition from the previous page at the top.

---
## Page 17
### Content
# ReLU Score Approximation Question

**Question:**

If we choose a conditional distribution with density
$$p(\mathbf{x} \mid \mathbf{y}) \in \mathcal{H}^\beta \left(\mathbb{R}^d \times [0, 1]^{d_y}, B\right),$$

**how large and complex** ReLU network do we need to approximate the **corresponding score**
$$\nabla \log p_t(\mathbf{x} \mid \mathbf{y})$$
with a small error?

Slide 17
Carnegie Mellon University

### Visual Description
Text-only slide. The main question and the score function are highlighted in red.

---

## Page 18
### Content
# Main Theorems

Slide 18
Carnegie Mellon University

### Visual Description
Text-only slide.

---

## Page 19
### Content
# Main Theorems [Informal]

Let $p(\mathbf{x} \mid \mathbf{y}) \in \mathcal{H}^\beta \left(\mathbb{R}^d \times [0, 1]^{d_y}, B\right)$, $\sigma_t^2 = (1 - e^{-t})$, and we will need some more assumptions.

Then, for any sufficiently large $N$, there exists a ReLU network $s^\star$ (growing with $N$) such that for any $\mathbf{y} \in [0, 1]^{d_y}$ and $t \in [t_0, T]$, it holds that

**Conditional score approximation:**
$$\int_{\mathbb{R}^d} \|s^\star(\mathbf{x}, \mathbf{y}, t) - \nabla \log p_t(\mathbf{x} \mid \mathbf{y})\|_2^2 \cdot p_t(\mathbf{x} \mid \mathbf{y}) d\mathbf{x} = \mathcal{O}\left(\frac{B^2}{\sigma_t^4} \cdot N^{-\frac{\beta}{d+d_y}} \cdot (\log N)^{d+\beta/2+1}\right)$$

**Unconditional score approximation:**
$$\int_{\mathbb{R}^d} \|s^\star(\mathbf{x}, t) - \nabla \log p_t(\mathbf{x})\|^2 p_t(\mathbf{x}) d\mathbf{x} = \mathcal{O}\left(\frac{B^2}{\sigma_t^4} N^{-\frac{\beta}{d}} (\log N)^{d+\beta/2+1}\right)$$

**Under some stronger assumptions:**
$$\int_{\mathbb{R}^d} \|s^\star(\mathbf{x}, \mathbf{y}, t) - \nabla \log p_t(\mathbf{x} \mid \mathbf{y})\|_2^2 \cdot p_t(\mathbf{x} \mid \mathbf{y}) d\mathbf{x} = \mathcal{O}\left(\frac{B^2}{\sigma_t^2} \cdot N^{-\frac{2\beta}{d+d_y}} \cdot (\log N)^{\beta+1}\right)$$
$$\int_{\mathbb{R}^d} \|s^\star(\mathbf{x}, t) - \nabla \log p_t(\mathbf{x})\|^2 p_t(\mathbf{x}) d\mathbf{x} = \mathcal{O}\left(\frac{B^2}{\sigma_t^2} N^{-\frac{2\beta}{d}} (\log N)^{\beta+1}\right)$$

Slide 19
Carnegie Mellon University

### Visual Description
Text-only slide containing several mathematical formulas for score approximation error bounds.

---

## Page 20
### Content
# Technical Details

Slide 20
Carnegie Mellon University

### Visual Description
Text-only slide.

---

## Page 21
### Content
# Conditional Score Approximation with ReLU networks

**Assumption 3.1.**

The **conditional distribution** has a **density** $p(\mathbf{x} \mid \mathbf{y}) \in \mathcal{H}^\beta \left(\mathbb{R}^d \times [0, 1]^{d_y}, B\right)$ for a **Hölder index** $\beta > 0$ and constant $B > 0$.

Moreover, there exist positive constants $C_1, C_2$ such that for all $\mathbf{y} \in [0, 1]^{d_y}$, the density function
$$p(\mathbf{x} \mid \mathbf{y}) \leq C_1 \exp(-C_2 \|\mathbf{x}\|_2^2 / 2)$$
[A Gaussian tail upper bounds $p(\mathbf{x} \mid \mathbf{y})$]

Assumption 3.1 only concerns the **regularity of the original data distribution**. It **does not impose conditions on the induced conditional score function**.

Slide 21
Carnegie Mellon University

### Visual Description
Text-only slide defining Assumption 3.1 regarding the density of the conditional distribution.

---

## Page 22
### Content
# Approximation theory for using ReLU neural networks to approximate the conditional score.

**Theorem 3.2. [score estimation error vs complexity of the ReLU net]**

Suppose Assumption 3.1 holds.

For sufficiently large $N$ and constants $C_\sigma, C_\alpha > 0$, by taking the early-stopping time $t_0 = N^{-C_\sigma}$ and the terminal time $T = C_\alpha \log N$, there exists $s^\star \in \mathcal{F}(M_t, W, \kappa, L, K)$
$$
\begin{aligned}
M_t &= \mathcal{O}(\sqrt{\log N} / \sigma_t^2), & W &= \mathcal{O}(N \log^7 N) \\
\kappa &= \exp(\mathcal{O}(\log^4 N)), & L &= \mathcal{O}(\log^4 N) \\
K &= \mathcal{O}(N \log^9 N) & &
\end{aligned}
$$
such that for any $\mathbf{y} \in [0, 1]^{d_y}$ and $t \in [t_0, T]$, it holds that
$$\int_{\mathbb{R}^d} \|s^\star(\mathbf{x}, \mathbf{y}, t) - \nabla \log p_t(\mathbf{x} \mid \mathbf{y})\|_2^2 \cdot p_t(\mathbf{x} \mid \mathbf{y}) d\mathbf{x} = \mathcal{O}\left(\frac{B^2}{\sigma_t^4} \cdot N^{-\frac{\beta}{d+d_y}} \cdot (\log N)^{d+\beta/2+1}\right)$$

Here, variance $\sigma_t^2 = Var(X_t \mid X_0) = (1 - e^{-t})$
**and $\mathcal{O}$ hides all other polynomial factors depending on $d, d_y, \beta, C_1, C_2, C_\alpha$ and $C_\sigma$.**

Slide 22
Carnegie Mellon University

### Visual Description
Text-only slide presenting Theorem 3.2, which relates score estimation error to the complexity of the ReLU network. A box contains the complexity parameters $M_t, W, \kappa, L, K$.

---

## Page 23
### Content
# Approximation theory for using ReLU neural networks to approximate the conditional score.

**Summary**
$$
\begin{aligned}
M_t &= \mathcal{O}(\sqrt{\log N} / \sigma_t^2), & W &= \mathcal{O}(N \log^7 N) \\
\kappa &= \exp(\mathcal{O}(\log^4 N)), & L &= \mathcal{O}(\log^4 N) \\
K &= \mathcal{O}(N \log^9 N) & &
\end{aligned}
$$

$$\Rightarrow \int_{\mathbb{R}^d} \|s^\star(\mathbf{x}, \mathbf{y}, t) - \nabla \log p_t(\mathbf{x} \mid \mathbf{y})\|_2^2 \cdot p_t(\mathbf{x} \mid \mathbf{y}) d\mathbf{x} = \mathcal{O}\left(\frac{B^2}{\sigma_t^4} \cdot N^{-\frac{\beta}{d+d_y}} \cdot (\log N)^{d+\beta/2+1}\right)$$

Since $\sigma_t^2 = Var(X_t \mid X_0) = (1 - e^{-t})$, we have that $\frac{1}{\sigma_t^4} = \frac{1}{(1 - e^{-t})^2}$

**This blows up** when $t_0 \to 0$, therefore, in practice we will let the diffusion between $[t_0, T]$ only. $t_0$ is an **early stopping time**.

Slide 23
Carnegie Mellon University

### Visual Description
Text-only slide summarizing the results of Theorem 3.2 and explaining the necessity of an early stopping time $t_0$.

---

## Page 24
### Content
# C.1. Extension to Unconditional Score Approximation

The previous approximation theory also applies to unconditional score approximation, where we just need to set $d_y = 0$.

**Proposition C.1 [Unconditional Counterpart of Theorem 3.2].**

Suppose Assumption 3.1 holds.

For sufficiently large integer $N > 0$ and constants $C_\sigma, C_\alpha > 0$, by taking $t_0 = N^{-C_\sigma}$ and $T = C_\alpha \log N$, there exists $s^\star \in \mathcal{F}(M_t, W, \kappa, L, K)$ such that for any and $t \in [t_0, T]$,
$$\int_{\mathbb{R}^d} \|s^\star(\mathbf{x}, t) - \nabla \log p_t(\mathbf{x})\|^2 p_t(\mathbf{x}) d\mathbf{x} = \mathcal{O}\left(\frac{B^2}{\sigma_t^4} N^{-\frac{\beta}{d}} (\log N)^{d+\beta/2+1}\right) \quad \text{(C.1)}$$

The hyperparameters in the network class $\mathcal{F}$ satisfy:
$$
\begin{aligned}
M_t &= \mathcal{O}(\sqrt{\log N} / \sigma_t^2), & W &= \mathcal{O}(N \log^7 N) \\
\kappa &= \exp(\mathcal{O}(\log^4 N)), & L &= \mathcal{O}(\log^4 N) \\
K &= \mathcal{O}(N \log^9 N) & &
\end{aligned}
$$

Slide 24
Carnegie Mellon University

### Visual Description
Text-only slide presenting Proposition C.1, which extends the approximation theory to the unconditional case. A box contains the network complexity parameters.

---
## Page 25
### Content
# Faster Approximation

### Visual Description
Text-only slide.

---
## Page 26
### Content
# Faster Approximation

In the following analysis, we present a **faster approximation result** under a **slightly stronger assumption**.

**Reminder [Assumption 3.1]** $p(\mathbf{x} \mid \mathbf{y}) \leq C_1 \exp \left(-C_2\|\mathbf{x}\|_2^2 / 2\right)$

**Assumption 3.3. [Stronger assumption for faster rate]**

Let $f \in \mathcal{H}^\beta\left(\mathbb{R}^d \times[0,1]^{d_y}, B\right)$ for a constant radius $B$.

Let $C_1$ and $C_2$ be two positive constants.

We assume $f(\mathbf{x}, \mathbf{y}) \geq C_1 > 0$ for all $(\mathbf{x}, \mathbf{y})$ and the conditional density function
$$p(\mathbf{x} \mid \mathbf{y}) = \exp \left(-C_2\|\mathbf{x}\|_2^2 / 2\right) \cdot f(\mathbf{x}, \mathbf{y})$$

Assumption 3.3 strengthens Assumption 3.1 by imposing lower ($C_1$) and upper bound ($B$) on $f(\mathbf{x}, \mathbf{y})$.

[Assumption 3.1 only has an upper bound. It doesn't have lower bound]

### Visual Description
Text-heavy slide with mathematical definitions and assumptions. The formula for the conditional density function is highlighted in red.

---
## Page 27
### Content
# Faster Score Approximation

**Theorem 3.4**

Suppose Assumption 3.3 holds. For sufficiently large $N$ and constants $C_\sigma, C_\alpha > 0$, by taking early-stopping time $t_0 = N^{-C_\sigma}$ and terminal time $T = C_\alpha \log N$, there exists $\mathbf{s}^\star \in \mathcal{F}\left(M_t, W, \kappa, L, K\right)$ such that for all $\mathbf{y} \in[0,1]^{d_y}$ and $t \in\left[t_0, T\right]$, it holds that
$$\int_{\mathbb{R}^d}\left\|\mathbf{s}^\star(\mathbf{x}, \mathbf{y}, t)-\nabla \log p_t(\mathbf{x} \mid \mathbf{y})\right\|_2^2 \cdot p_t(\mathbf{x} \mid \mathbf{y}) \mathrm{d} \mathbf{x} = \mathcal{O}\left(\frac{B^2}{\sigma_t^2} \cdot N^{-\frac{2 \beta}{d+d_y}} \cdot(\log N)^{\beta+1}\right)$$

The ReLU network $\mathcal{F}$ satisfy:
$$
\begin{aligned}
M_t = \mathcal{O}\left(\sqrt{\log N} / \sigma_t\right), W = \mathcal{O}\left(N \log ^7 N\right) \\
\kappa = \exp \left(\mathcal{O}\left(\log ^4 N\right)\right), L = \mathcal{O}\left(\log ^4 N\right), \\
K = \mathcal{O}\left(N \log ^9 N\right)
\end{aligned}
$$

and $\mathcal{O}$ hides all other polynomial factors depending on $d, d_y, \beta, C_1, C_2, C_\alpha$ and $C_\sigma$.

**Improved rate of approximation**

The approximation rate here is $N^{-\frac{2 \beta}{d+d_y}}$, which is substantially faster than $N^{-\frac{\beta}{d+d_y}}$.
We also improved the dependence on $\sigma_t$ and $\log N$.

### Visual Description
Slide containing a formal mathematical theorem (Theorem 3.4) with an error bound formula in red. A box contains the complexity parameters for the ReLU network.

---
## Page 28
### Content
# C.2. Extension to Unconditional Score Approximation

**Proposition C.2 [Unconditional Counterpart of Theorem 3.4]**

Suppose Assumption 3.3 holds. For sufficiently large integer $N>0$ and constants $C_\sigma, C_\alpha>0$, by taking $t_0=N^{-C_\sigma}$ and $T=C_\alpha \log N$, there exists $\mathbf{s}^\star \in \mathcal{F}\left(M_t, W, \kappa, L, K\right)$ such that for any and $t \in\left[t_0, T\right]$,
$$\int_{\mathbb{R}^d}\left\|\mathbf{s}^\star(\mathbf{x}, t)-\nabla \log p_t(\mathbf{x})\right\|^2 p_t(\mathbf{x}) d \mathbf{x}=\mathcal{O}\left(\frac{B^2}{\sigma_t^2} N^{-\frac{2 \beta}{d}}(\log N)^{\beta+1}\right) \quad (C.2)$$

The ReLU network $\mathcal{F}$ satisfy:
$$
\begin{aligned}
M_t = \mathcal{O}\left(\sqrt{\log N} / \sigma_t\right), W = \mathcal{O}\left(N \log ^7 N\right) \\
\kappa = \exp \left(\mathcal{O}\left(\log ^4 N\right)\right), L = \mathcal{O}\left(\log ^4 N\right), \\
K = \mathcal{O}\left(N \log ^9 N\right)
\end{aligned}
$$

### Visual Description
Slide presenting Proposition C.2, which is the unconditional version of Theorem 3.4. It includes a red formula for the approximation error and a box with network parameters.

---
## Page 29
### Content
# Score Estimation Summary

**Theorem 3.2 + Proposition C.1 + Assumption 3.1**
$$\int_{\mathbb{R}^d}\left\|\mathbf{s}^\star(\mathbf{x}, \mathbf{y}, t)-\nabla \log p_t(\mathbf{x} \mid \mathbf{y})\right\|_2^2 \cdot p_t(\mathbf{x} \mid \mathbf{y}) \mathrm{d} \mathbf{x} = \mathcal{O}\left(\frac{B^2}{\sigma_t^4} \cdot N^{-\frac{\beta}{d+d_y}} \cdot(\log N)^{d+\beta / 2+1}\right)$$
$$\int_{\mathbb{R}^d}\left\|\mathbf{s}^\star(\mathbf{x}, t)-\nabla \log p_t(\mathbf{x})\right\|^2 p_t(\mathbf{x}) d \mathbf{x} = \mathcal{O}\left(\frac{B^2}{\sigma_t^4} N^{-\frac{\beta}{d}}(\log N)^{d+\beta / 2+1}\right)$$
$$
\begin{aligned}
M_t = \mathcal{O}\left(\sqrt{\log N} / \sigma_t^2\right), W = \mathcal{O}\left(N \log ^7 N\right) \\
\kappa = \exp \left(\mathcal{O}\left(\log ^4 N\right)\right), L = \mathcal{O}\left(\log ^4 N\right), \\
K = \mathcal{O}\left(N \log ^9 N\right)
\end{aligned}
$$

**Theorem 3.4 + Proposition C.2 + Assumption 3.3**
$$\int_{\mathbb{R}^d}\left\|\mathbf{s}^\star(\mathbf{x}, \mathbf{y}, t)-\nabla \log p_t(\mathbf{x} \mid \mathbf{y})\right\|_2^2 \cdot p_t(\mathbf{x} \mid \mathbf{y}) \mathrm{d} \mathbf{x} = \mathcal{O}\left(\frac{B^2}{\sigma_t^2} \cdot N^{-\frac{2 \beta}{d+d_y}} \cdot(\log N)^{\beta+1}\right)$$
$$\int_{\mathbb{R}^d}\left\|\mathbf{s}^\star(\mathbf{x}, t)-\nabla \log p_t(\mathbf{x})\right\|^2 p_t(\mathbf{x}) d \mathbf{x} = \mathcal{O}\left(\frac{B^2}{\sigma_t^2} N^{-\frac{2 \beta}{d}}(\log N)^{\beta+1}\right)$$
$$
\begin{aligned}
M_t = \mathcal{O}\left(\sqrt{\log N} / \sigma_t\right), W = \mathcal{O}\left(N \log ^7 N\right) \\
\kappa = \exp \left(\mathcal{O}\left(\log ^4 N\right)\right), L = \mathcal{O}\left(\log ^4 N\right), \\
K = \mathcal{O}\left(N \log ^9 N\right)
\end{aligned}
$$

### Visual Description
A summary slide comparing two sets of results. The top half shows results under Assumption 3.1 (slower rate), and the bottom half shows results under Assumption 3.3 (faster rate). Formulas are in red, and network parameters are in boxes.

---
## Page 30
### Content
# Thanks for your Attention! ☺

### Visual Description
Text-only slide.

---
## Page 31
### Content
# 3.2 Proof Overview of Theorem 3.2

## Score approximation with ReLU Network

### [Detailed Proof in Appendix A]

### Visual Description
Text-only slide serving as a section header for the proof overview.

---
## Page 32
### Content
# 3.2 Proof Overview of Theorem 3.2

**The key steps consist of**
* a proper truncation of the data density function and domain,
* and a diffused Taylor polynomial approximation.

To begin with, we rewrite the score function as
$$\nabla \log p_t(\mathbf{x} \mid \mathbf{y}) = \frac{\nabla p_t(\mathbf{x} \mid \mathbf{y})}{p_t(\mathbf{x} \mid \mathbf{y})}$$
where we develop approximations to the numerator and denominator separately.

The construction of the approximations to the numerator and denominator is almost identical.

In the following, we focus on the approximation of $p_t(\mathbf{x} \mid \mathbf{y})$.

### Visual Description
Slide outlining the strategy for proving Theorem 3.2, highlighting truncation and Taylor approximation as key steps. It includes the mathematical identity for the score function in red.
## Page 33
### Content
# Approximating the Numerator and Denominator

**Forward process:** $dX_t = -\frac{1}{2}X_t dt + dW_t$ with $X_0 \sim P(\cdot \mid \mathbf{y})$, (2.1)

**We already know:**
$$P(X_t|X_0) = \mathcal{N}\left(X_0 e^{-\frac{t}{2}}, (1 - e^{-t})\right) = \mathcal{N}(\alpha_t X_0, \sigma_t^2) \quad \alpha_t = e^{-t/2} \text{ and } \sigma_t^2 = 1 - e^{-t}.$$

Following the forward process (2.1) of conditional diffusion models, we have
$$
\begin{aligned}
p_t(\mathbf{x} \mid \mathbf{y}) &= \int_{\mathbb{R}^d} p(X_t = \mathbf{x} \mid X_0 = \mathbf{z})p(X_0 = \mathbf{z} \mid \mathbf{y})d\mathbf{z} \\
&= \int_{\mathbb{R}^d} \frac{1}{\sigma_t^d (2\pi)^{d/2}} \exp\left( -\frac{\|\alpha_t \mathbf{z} - \mathbf{x}\|^2}{2\sigma_t^2} \right) p(X_0 = \mathbf{z} \mid \mathbf{y}) d\mathbf{z} \quad (3.1)
\end{aligned}
$$

*   The first term in the integral is the **forward density after t steps**.
*   The second term in the integral is the **initial conditional density of the data**.

Recall that the initial conditional density function $p(X_0 = \mathbf{z} \mid \mathbf{y})$ is Hölder continuous.

### Visual Description
The slide contains mathematical formulas defining the forward process and the resulting conditional density $p_t(\mathbf{x} \mid \mathbf{y})$. Two arrows point to specific parts of the integral in equation (3.1): one points to the Gaussian kernel term labeled "forward density after t steps", and the other points to $p(X_0 = \mathbf{z} \mid \mathbf{y})$ labeled "initial conditional density of the data".

---
## Page 34
### Content
# Approximating the Numerator and Denominator

$$p_t(\mathbf{x} \mid \mathbf{y}) = \int_{\mathbb{R}^d} p(X_0 = \mathbf{z} \mid \mathbf{y}) \frac{1}{\sigma_t^d (2\pi)^{d/2}} \exp\left( -\frac{\|\alpha_t \mathbf{z} - \mathbf{x}\|^2}{2\sigma_t^2} \right) d\mathbf{z} \quad (3.1)$$

To approximate $p_t(\mathbf{x} \mid \mathbf{y})$, a naïve idea is to use a **Taylor polynomial** $h_{\text{Taylor}}^{\text{density}}(\mathbf{z}, \mathbf{y})$ to approximate $p(X_0 = \mathbf{z} \mid \mathbf{y})$.

This leads to an approximator in the form of
$$p_t(\mathbf{x} \mid \mathbf{y}) \approx \int_{\mathbb{R}^d} h_{\text{Taylor}}^{\text{density}}(\mathbf{z}, \mathbf{y}) \frac{1}{\sigma_t^d (2\pi)^{d/2}} \exp\left( -\frac{\|\alpha_t \mathbf{z} - \mathbf{x}\|^2}{2\sigma_t^2} \right) d\mathbf{z}$$

### Visual Description
The slide presents a mathematical approach to approximating the conditional density using a Taylor polynomial. The main approximation formula is highlighted in red text.

---
## Page 35
### Content
# Approximating the Numerator and Denominator

$$p_t(\mathbf{x} \mid \mathbf{y}) = \int_{\mathbb{R}^d} p(\mathbf{z} \mid \mathbf{y}) \frac{1}{\sigma_t^d (2\pi)^{d/2}} \exp\left( -\frac{\|\alpha_t \mathbf{z} - \mathbf{x}\|^2}{2\sigma_t^2} \right) d\mathbf{z} \quad (3.1)$$

We want to approximate this with
$$\int_{\mathbb{R}^d} h_{\text{Taylor}}^{\text{density}}(\mathbf{z}, \mathbf{y}) \frac{1}{\sigma_t^d (2\pi)^{d/2}} \exp\left( -\frac{\|\alpha_t \mathbf{z} - \mathbf{x}\|^2}{2\sigma_t^2} \right) d\mathbf{z}$$

### Challenges

1. Since the data domain is unbounded, it can be difficult to uniformly approximate the conditional density $p(\mathbf{z} \mid \mathbf{y})$ using $h_{\text{Taylor}}^{\text{density}}$;

2. Although the Taylor polynomial $h_{\text{Taylor}}^{\text{density}}(\mathbf{z}, \mathbf{y})$ can be implemented using a neural network, the integration over $\mathbf{z}$ is prohibitively difficult to handle. Moreover, the exponential function and the time $t$ dependence make the approximation more obscure.

### Visual Description
The slide lists two main challenges associated with the proposed Taylor polynomial approximation method. It includes the integral equations from the previous slide for reference.

---
## Page 36
### Content
# Addressing Challenge 1

### Challenge 1:
Since the data domain is unbounded, it can be difficult to uniformly approximate the conditional density $p(\mathbf{z} \mid \mathbf{y})$ using $h_{\text{Taylor}}^{\text{density}}$;

### Solution Ideas:
To address the first challenge, for any time $t$, we truncate the data domain by an $\ell_\infty$-ball of radius $R$,

that is, we denote $\mathcal{D}_1 = \{\mathbf{z} : \|\mathbf{z}\|_\infty \leq R\}$ and only ensure $h_{\text{Taylor}}^{\text{density}}$ approximates $p(\mathbf{z} \mid \mathbf{y})$ on $\mathcal{D}_1$ for any $\mathbf{y}$.

Such a domain truncation is reasonable when the conditional density function has a light tail. (see details in Lemma A.1).

### Visual Description
Text-only slide.

---
## Page 37
### Content
# Addressing Challenge 2

### Challenge 2:
$$p_t(\mathbf{x} \mid \mathbf{y}) = \int_{\mathbb{R}^d} p(\mathbf{z} \mid \mathbf{y}) \frac{1}{\sigma_t^d (2\pi)^{d/2}} \exp\left( -\frac{\|\alpha_t \mathbf{z} - \mathbf{x}\|^2}{2\sigma_t^2} \right) d\mathbf{z} \quad (3.1)$$

Although the Taylor polynomial $h_{\text{Taylor}}^{\text{density}}(\mathbf{z}, \mathbf{y})$ can be implemented using a neural network, the integration over $\mathbf{z}$ is prohibitively difficult to handle. Moreover, the exponential function and the time $t$ dependence make the approximation more obscure.

### Solution Ideas:
For this challenge, we propose **diffused local polynomials** for approximation of $p_t(\mathbf{x} \mid \mathbf{y})$.

Let $h_{\text{Taylor}}^{\text{kernel}}(\mathbf{z}, \mathbf{x}, t)$ be a Taylor polynomial for approximating the exponential transition kernel in (3.1): $\exp\left( -\frac{\|\alpha_t \mathbf{z} - \mathbf{x}\|^2}{2\sigma_t^2} \right)$. Then we define

$$\text{Diffused-local-poly}(\mathbf{x}, \mathbf{y}, t) = \int_{\mathbb{R}^d} \frac{1}{\sigma_t^d (2\pi)^{d/2}} h_{\text{Taylor}}^{\text{density}}(\mathbf{z}, \mathbf{y}) h_{\text{Taylor}}^{\text{kernel}}(\mathbf{z}, \mathbf{x}, t) d\mathbf{z}$$

### Visual Description
The slide details the solution for the second challenge by introducing "diffused local polynomials". The final definition of the diffused-local-poly is highlighted in red text.

---
## Page 38
### Content
# Approximating the score function with a fraction

### Visual Description
This is a transition slide with the title "Approximating the score function with a fraction" centered in blue text.

---
## Page 39
### Content
# Approximating the score function with a fraction

We **approximate the score function by the fraction**
$$\nabla \log p_t(\mathbf{x} \mid \mathbf{y}) = \frac{\nabla p_t(\mathbf{x} \mid \mathbf{y})}{p_t(\mathbf{x} \mid \mathbf{y})}$$

There is an additional caveat: $p_t(\mathbf{x} \mid \mathbf{y})$ can be arbitrarily small so that the reciprocal $1/p_t(\mathbf{x} \mid \mathbf{y})$ can explode to infinity.

The reason behind this exploding issue is that the initial data distribution fails to have good coverage uniformly.

That is, the density of the initial data distribution can be small (or even zero) in some areas.

As a result, estimating the density in these regions is fundamentally difficult [Tsybakov, 2008].

### Visual Description
Text-only slide.

---
## Page 40
### Content
# Approximating the score function with a fraction

$$\nabla \log p_t(\mathbf{x} \mid \mathbf{y}) = \frac{\nabla p_t(\mathbf{x} \mid \mathbf{y})}{p_t(\mathbf{x} \mid \mathbf{y})}$$
$$p_t(\mathbf{x} \mid \mathbf{y}) = \int_{\mathbb{R}^d} p(\mathbf{z} \mid \mathbf{y}) \frac{1}{\sigma_t^d (2\pi)^{d/2}} \exp\left( -\frac{\|\alpha_t \mathbf{z} - \mathbf{x}\|^2}{2\sigma_t^2} \right) d\mathbf{z} \quad (3.1)$$

Here we introduce a threshold $\epsilon_{\text{low}}$ to alleviate the exploding reciprocal issue.

The idea is to replace the denominator in the above equation by $\max\{p_t(\mathbf{x} \mid \mathbf{y}), \epsilon_{\text{low}}\}$.

We choose a proper $\epsilon_{\text{low}}$ balancing two criteria:

1) $\epsilon_{\text{low}}$ should not be too small so that $1/\epsilon_{\text{low}}$ is controlled;

2) $\epsilon_{\text{low}}$ should not be too large to deviate heavily from the original score function.

### Visual Description
The slide explains the use of a threshold $\epsilon_{\text{low}}$ to handle the numerical instability of the score function approximation when the density is very small. It includes the relevant mathematical formulas.

---
## Page 41
### Content
Detailed Proofs are in Appendix A

### Visual Description
Text-only slide.
