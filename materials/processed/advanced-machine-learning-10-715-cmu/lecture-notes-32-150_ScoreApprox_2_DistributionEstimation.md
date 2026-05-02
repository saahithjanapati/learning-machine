# lecture-notes-32-150_ScoreApprox_2_DistributionEstimation

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/lecture-notes-32-150_ScoreApprox_2_DistributionEstimation.pdf`
Duplicate equivalents: `lecture-notes-32-150_ScoreApprox_2_DistributionEstimation.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 30

## Page 1
### Content
# From Score Approximation to Distribution Estimation

**Barnabas Poczos**
bapoczos@cs.cmu.edu

Convex Optimization Slide 1
Carnegie Mellon University

### Visual Description
Text-only slide. The title "From Score Approximation to Distribution Estimation" is in large red font. The author's name and email are in blue. The footer contains the course name, slide number, and university logo.

---

## Page 2
### Content
# Paper to Read

### Unveil Conditional Diffusion Models with Classifier-free Guidance: A Sharp Statistical Theory
**Fu et al, 2024**
[https://arxiv.org/abs/2403.11968](https://arxiv.org/abs/2403.11968)

[We will often follow the notation and Equation numbers of this paper]

Convex Optimization Slide 2
Carnegie Mellon University

### Visual Description
Text-only slide. The title "Paper to Read" is in blue. The paper title is in red. The footer contains the course name, slide number, and university logo.

---

## Page 3
### Content
# Contents

* **Score estimation with empirical risk minimization:**
  $$\ell(\mathbf{x}, \mathbf{y}; \mathbf{s}) = \int_{t_0}^T \frac{1}{T - t_0} \mathbb{E}_{\tau, \mathbf{x}' \sim N(\alpha_t \mathbf{x}, \sigma_t^2 I)} \left[ \left\| \mathbf{s}(\mathbf{x}', \tau \mathbf{y}, t) - \nabla_{\mathbf{x}'} \log \phi_t(\mathbf{x}' \mid \mathbf{x}) \right\|_2^2 \right] \tag{2.5}$$
  where $\nabla \log \phi_t(\mathbf{x}' \mid \mathbf{x}_0) = -(\mathbf{x}' - \alpha_t \mathbf{x}_0) / \sigma_t^2$ with $\alpha_t = e^{-t/2}$ and $\sigma_t^2 = 1 - e^{-t}$.
  $$\hat{\mathbf{s}} \in \underset{\mathbf{s} \in \mathcal{F}}{\text{argmin}} \frac{1}{n} \sum_{i=1}^n \ell(\mathbf{x}_i, \mathbf{y}_i; \mathbf{s})$$

* **ESM risk:**
  $$\mathcal{R}(\hat{\mathbf{s}}) = \int_{t_0}^T \frac{1}{T - t_0} \mathbb{E}_{(\mathbf{x}_t, \mathbf{y})} \left\| \hat{\mathbf{s}}(\mathbf{x}_t, \mathbf{y}, t) - \nabla \log p_t(\mathbf{x}_t \mid \mathbf{y}) \right\|_2^2 dt$$

* **Theorem 4.1. [ESM error rate as a function of sample size n]**
  $$\mathbb{E}_{\{\mathbf{x}_i, \mathbf{y}_i\}_{i=1}^n} [\mathcal{R}(\hat{\mathbf{s}})] = \mathcal{O} \left( \frac{1}{t_0} \cdot n^{-\frac{\beta}{d+d_y+\beta}} (\log n)^{\max(17, d+\beta/2+1)} \right)$$

* **Theorem 4.2. [Diffusion TV distance distribution estimation error]**
  $$\mathbb{E}_{\{\mathbf{x}_i, \mathbf{y}_i\}_{i=1}^n} \left[ \mathbb{E}_{\mathbf{y}} \left[ \text{TV} \left( \hat{P}_{t_0}(\cdot \mid \mathbf{y}), P(\cdot \mid \mathbf{y}) \right) \right] \right] = \mathcal{O} \left( n^{-\frac{\beta}{4(d+d_y+\beta)}} (\log n)^{\max(9, d/2+\beta/4+1)} \right)$$

Convex Optimization Slide 3
Carnegie Mellon University

### Visual Description
Text-only slide containing a summary of the lecture's contents, including definitions of loss functions, empirical risk minimization, and two key theorems with their respective error rates in big-O notation.

---

## Page 4
### Content
# Reminder: Classifier-free guidance

**We already know [loss function for denoising score matching (DSM)]:**
$$\ell(\mathbf{x}, \mathbf{y}; \mathbf{s}) = \int_{t_0}^T \frac{1}{T - t_0} \mathbb{E}_{\tau, \mathbf{x}' \sim N(\alpha_t \mathbf{x}, \sigma_t^2 I)} \left[ \left\| \mathbf{s}(\mathbf{x}', \tau \mathbf{y}, t) - \nabla_{\mathbf{x}'} \log \phi_t(\mathbf{x}' \mid \mathbf{x}) \right\|_2^2 \right]$$
where $\nabla \log \phi_t(\mathbf{x}' \mid \mathbf{x}_0) = -(\mathbf{x}' - \alpha_t \mathbf{x}_0) / \sigma_t^2$ with $\alpha_t = e^{-t/2}$ and $\sigma_t^2 = 1 - e^{-t}$.

We minimize the following empirical risk for DSM:
$$\hat{\mathbf{s}} \in \underset{\mathbf{s} \in \mathcal{F}}{\text{argmin}} \hat{\mathcal{L}}(\mathbf{s}) = \frac{1}{n} \sum_{i=1}^n \ell(\mathbf{x}_i, \mathbf{y}_i; \mathbf{s}) \quad \text{[DSM]}$$

We denote the **population risk** function by $\mathcal{L}(\mathbf{s})$.

Convex Optimization Slide 4
Carnegie Mellon University

### Visual Description
Text-only slide reviewing the loss function and empirical risk minimization for Denoising Score Matching (DSM). The term "[DSM]" is highlighted in red.

---

## Page 5
### Content
# Measuring the quality of score estimation

**Measuring the quality of score estimation for explicit score matching (ESM):**

We measure the quality of the estimator $\hat{\mathbf{s}}$ by its mean-squared deviation to the ground-truth conditional score function:
$$\mathcal{R}(\hat{\mathbf{s}}) = \int_{t_0}^T \frac{1}{T - t_0} \mathbb{E}_{(\mathbf{x}_t, \mathbf{y})} \left\| \hat{\mathbf{s}}(\mathbf{x}_t, \mathbf{y}, t) - \nabla \log p_t(\mathbf{x}_t \mid \mathbf{y}) \right\|_2^2 dt \quad \text{[ESM]}$$

Here the expectation is taken over the joint distribution of $\mathbf{x}_t$ and $\mathbf{y}$.

Convex Optimization Slide 5
Carnegie Mellon University

### Visual Description
Text-only slide defining the Explicit Score Matching (ESM) risk as a measure of the quality of score estimation. The term "[ESM]" is highlighted in red.

---

## Page 6
### Content
# Reminder: Theorem 3.2

**Theorem 3.2. [score estimation error vs complexity of the ReLU net]**

Suppose Assumption 3.1 holds.

For sufficiently large $N$ and constants $C_\sigma, C_\alpha > 0$, by taking the early-stopping time $t_0 = N^{-C_\sigma}$ and the terminal time $T = C_\alpha \log N$,

$$
\begin{array}{|l|}
\hline
M_t = \mathcal{O}(\sqrt{\log N / \sigma_t^2}), W = \mathcal{O}(N \log^7 N) \\
\kappa = \exp(\mathcal{O}(\log^4 N)), L = \mathcal{O}(\log^4 N), \\
K = \mathcal{O}(N \log^9 N) \\
\hline
\end{array}
$$

there exists $\mathbf{s}^\star \in \mathcal{F}(M_t, W, \kappa, L, K)$ such that for any $\mathbf{y} \in [0, 1]^{d_y}$ and $t \in [t_0, T]$, it holds that
$$\color{red}{\int_{\mathbb{R}^d} \left\| \mathbf{s}^\star(\mathbf{x}, \mathbf{y}, t) - \nabla \log p_t(\mathbf{x} \mid \mathbf{y}) \right\|_2^2 \cdot p_t(\mathbf{x} \mid \mathbf{y}) d\mathbf{x} = \mathcal{O} \left( \frac{B^2}{\sigma_t^4} \cdot N^{-\frac{\beta}{d+d_y}} \cdot (\log N)^{d+\beta/2+1} \right)}$$

Here, variance $\sigma_t^2 = Var(X_t \mid X_0) = (1 - e^{-t})$
and $\mathcal{O}$ hides all other polynomial factors depending on $d, d_y, \beta, C_1, C_2, C_\alpha$ and $C_\sigma$.

Convex Optimization Slide 6
Carnegie Mellon University

### Visual Description
This slide presents Theorem 3.2 regarding score estimation error. It includes a box containing complexity parameters ($M_t, W, \kappa, L, K$) for a ReLU network. The main error bound equation is highlighted in red.

---

## Page 7
### Content
# Need for Early Stopping

$$\color{red}{\int_{\mathbb{R}^d} \left\| \mathbf{s}(\mathbf{x}, \mathbf{y}, t) - \nabla \log p_t(\mathbf{x} \mid \mathbf{y}) \right\|_2^2 \cdot p_t(\mathbf{x} \mid \mathbf{y}) d\mathbf{x} = \mathcal{O} \left( \frac{B^2}{\sigma_t^4} \cdot N^{-\frac{\beta}{d+d_y}} \cdot (\log N)^{d+\beta/2+1} \right)}$$

Since $\sigma_t^2 = Var(X_t \mid X_0) = (1 - e^{-t})$, we have that $\frac{1}{\sigma_t^4} = \frac{1}{(1 - e^{-t})^2}$

**This blows up** when $t_0 \to 0$, therefore, in practice we will let the diffusion between $[t_0, T]$ only. $t_0$ is an early stopping time.

Convex Optimization Slide 7
Carnegie Mellon University

### Visual Description
Text-only slide explaining the motivation for early stopping. It shows how the error bound from the previous slide contains a term that goes to infinity as $t$ approaches 0.

---

## Page 8
### Content
# Conditional Score Estimation

$$\color{red}{\mathcal{R}(\hat{\mathbf{s}}) = \int_{t_0}^T \frac{1}{T - t_0} \mathbb{E}_{(\mathbf{x}_t, \mathbf{y})} \left\| \hat{\mathbf{s}}(\mathbf{x}_t, \mathbf{y}, t) - \nabla \log p_t(\mathbf{x}_t \mid \mathbf{y}) \right\|_2^2 dt \quad \text{[ESM error]}}$$

The following theorem presents upper bounds on $\mathcal{R}(\hat{\mathbf{s}})$ when the score network $\mathcal{F}$ is chosen based on Theorem 3.2.

**Theorem 4.1. [ESM error rate as a function of sample size n]**

Suppose Assumption 3.1 holds and we choose the score network $\mathcal{F}(M_t, W, \kappa, L, K)$ as in Theorem 3.2.

By taking the network size parameter $N = n^{\frac{d+d_y}{d+d_y+\beta}}$, the early-stopping time $t_0 < 1$, and the terminal time $T = \mathcal{O}(\log n)$, it holds that
$$\color{red}{\mathbb{E}_{\{\mathbf{x}_i, \mathbf{y}_i\}_{i=1}^n} [\mathcal{R}(\hat{\mathbf{s}})] = \mathcal{O} \left( \frac{1}{t_0} \cdot n^{-\frac{\beta}{d+d_y+\beta}} (\log n)^{\max(17, d+\beta/2+1)} \right)}$$

**Proof: Appendix D.2**

Convex Optimization Slide 8
Carnegie Mellon University

### Visual Description
Text-only slide presenting Theorem 4.1, which provides the ESM error rate as a function of the sample size $n$. Key equations are highlighted in red.

---
## Page 9
### Content
# Theorem 4.1. [Continued]

## Theorem 4.1. [Continued]

Moreover, when Assumption 3.3 holds, taking $N = n^{\frac{d+d_y}{d+d_y+2\beta}}$, we have

$$\mathbb{E}_{\{\mathbf{x}_i, \mathbf{y}_i\}_{i=1}^n} [\mathcal{R}(\widehat{\mathbf{s}})] = \mathcal{O} \left( \log \frac{1}{t_0} \cdot n^{-\frac{2\beta}{d+d_y+2\beta}} (\log n)^{\max(17, \beta)} \right)$$

### Visual Description
Text-only slide.

---
## Page 10
### Content
# 4.2 Distribution Estimation

### Visual Description
Text-only slide.

---
## Page 11
### Content
# 4.2 Distribution Estimation

For a given guidance $\mathbf{y}$, we denote the early-stopped generated data distribution as $\widehat{P}_{t_0}(\cdot \mid \mathbf{y})$ using the estimated score $\widehat{\mathbf{s}}$.

We bound the divergence between $\widehat{P}_{t_0}(\cdot \mid \mathbf{y})$ to the ground-truth conditional data distribution $P(\cdot \mid \mathbf{y})$ in the following theorem.

## Theorem 4.2. [Diffusion TV distance distribution estimation error]

Suppose Assumption 3.1 holds.

Assume that there exists a constant $C$ such that $\text{KL}(P(\cdot \mid \mathbf{y}) \mid \text{N}(\mathbf{0}, \mathbf{I})) \leq C < \infty$ for all $\mathbf{y}$.

Taking the early-stopping time $t_0 = n^{-\frac{\beta}{4(d+d_y+\beta)}}$ and the terminal time $T = \frac{2\beta}{d+d_y+2\beta} \log n$, it holds that

$$\mathbb{E}_{\{\mathbf{x}_i, \mathbf{y}_i\}_{i=1}^n} \left[ \mathbb{E}_{\mathbf{y}} \left[ \text{TV} \left( \widehat{P}_{t_0}(\cdot \mid \mathbf{y}), P(\cdot \mid \mathbf{y}) \right) \right] \right] = \mathcal{O} \left( n^{-\frac{\beta}{4(d+d_y+\beta)}} (\log n)^{\max(9, d/2+\beta/4+1)} \right)$$

**Proof: Appendix D.3**

### Visual Description
Text-only slide.

---
## Page 12
### Content
# Theorem 4.2. [Continued]

## Theorem 4.2. [Continued]

On the other hand, assume that the stronger assumption, Assumption 3.3, holds.

Taking $t_0 = n^{-\frac{4\beta}{d+d_y+2\beta}-1}$, it holds that

$$\mathbb{E}_{\{\mathbf{x}_i, \mathbf{y}_i\}_{i=1}^n} \left[ \mathbb{E}_{\mathbf{y}} \left[ \text{TV} \left( \widehat{P}_{t_0}(\cdot \mid \mathbf{y}), P(\cdot \mid \mathbf{y}) \right) \right] \right] = \mathcal{O} \left( n^{-\frac{\beta}{d+d_y+2\beta}} (\log n)^{\max(19/2, (\beta+2)/2)} \right)$$

**Proof: Appendix D.3**

### Visual Description
Text-only slide.

---
## Page 13
### Content
# Minimax optimality

Theorem 4.2 also applies to unconditional distribution estimation by removing $\mathbf{y}$ and setting $d_y = 0$.

The obtained distribution estimation error rate is $n^{-\frac{\beta}{d+2\beta}}$.

In the next slide, we will show that this matches the minimax optimal rate for estimating Hölder distributions.

### Visual Description
Text-only slide.

---
## Page 14
### Content
# Minimax optimality

## Proposition 4.3 [Minimax Rate]

Fix a constant $C_2 > 0$ and a Hölder index $\beta > 0$.

Consider estimating a distribution $P(\mathbf{x})$ with a density function belonging to the space

$$\mathcal{P} = \left\{ p(\mathbf{x}) = f(\mathbf{x}) \exp(-C_2 \|\mathbf{x}\|_2^2) : f(\mathbf{x}) \in \mathcal{H}^\beta(\mathbb{R}^d, B), f(\mathbf{x}) \geq C > 0 \right\}$$

Given $n$ i.i.d. data $\{\mathbf{x}_i\}_{i=1}^n$, we have

$$\inf_{\widehat{\mu}} \sup_{P \in \mathcal{P}} \mathbb{E}_{\{\mathbf{x}_i\}_{i=1}^n} [\text{TV}(\widehat{\mu}, P)] \gtrsim n^{-\frac{\beta}{d+2\beta}}$$

where the infimum is taken over all possible estimators $\widehat{\mu}$ based on the data.

**Proof: Appendix D.4**

### Visual Description
Text-only slide.

---
## Page 15
### Content
# Open Questions

### Visual Description
Text-only slide.

---
## Page 16
### Content
# Convergence Rate

## Theorem [Diffusion TV distance distribution estimation error] (Fu et al, 2024)

Suppose Assumption (*) holds.

Taking the early-stopping time $t_0 = n^{-\frac{\beta}{4(d+d_y+\beta)}}$ and the terminal time $T = \frac{2\beta}{d+d_y+2\beta} \log n$, it holds that

$$\mathbb{E}_{\{\mathbf{x}_i, \mathbf{y}_i\}_{i=1}^n} \left[ \mathbb{E}_{\mathbf{y}} \left[ \text{TV} \left( \widehat{P}_{t_0}(\cdot \mid \mathbf{y}), P(\cdot \mid \mathbf{y}) \right) \right] \right] = \mathcal{O} \left( n^{-\frac{\beta}{4(d+d_y+\beta)}} (\log n)^{\max(9, d/2+\beta/4+1)} \right)$$

**With a bit stronger assumptions:** $= \mathcal{O} \left( n^{-\frac{\beta}{d+d_y+2\beta}} (\log n)^{\max(19/2, (\beta+2)/2)} \right)$

## Theorem: [The lower bound is about the same, ... so diffusion is minimax optimal] ... just like GANs... [Curse of dimensionality]

## Question: Why does diffusion perform with so much better rate in practice?

### Visual Description
Text-only slide with some text highlighted in red and bold for emphasis.

---
## Page 17
### Content
**Open Question: Neural Networks are not needed**

* **In theory, neural networks are not needed for diffusion**

$$ \mathbf{x}_T \longrightarrow \dots \longrightarrow \mathbf{x}_t \xrightarrow{p_\theta(\mathbf{x}_{t-1}|\mathbf{x}_t)} \mathbf{x}_{t-1} \longrightarrow \dots \longrightarrow \mathbf{x}_0 $$
$$ \mathbf{x}_{t-1} \xrightarrow{q(\mathbf{x}_t|\mathbf{x}_{t-1})} \mathbf{x}_t $$

* We just need to train T regression models: $\{\text{Input: } x_t, \text{ output: } x_{t-1}\}_{t=1}^T$
* We could use XGBoost, SVM, kNN, local-polynomial regression, etc
* We don’t even need to use parametric regression methods.
* We don’t need to use Gaussian noise either. It can be any kinds of noise, e.g. Uniform.

### Visual Description
A diagram illustrates the diffusion process. It shows a sequence of states from $\mathbf{x}_T$ (pure noise) to $\mathbf{x}_0$ (a clear image of a person). Between $\mathbf{x}_t$ and $\mathbf{x}_{t-1}$, there are arrows representing the forward process $q(\mathbf{x}_t|\mathbf{x}_{t-1})$ and the reverse process $p_\theta(\mathbf{x}_{t-1}|\mathbf{x}_t)$. Small thumbnail images show the transition from noise to a recognizable face.

---
## Page 18
### Content
**Open Question: Neural Networks are not needed**

* **In theory, neural networks are not needed for diffusion**

$$ \mathbf{x}_T \longrightarrow \dots \longrightarrow \mathbf{x}_t \xrightarrow{p_\theta(\mathbf{x}_{t-1}|\mathbf{x}_t)} \mathbf{x}_{t-1} \longrightarrow \dots \longrightarrow \mathbf{x}_0 $$
$$ \mathbf{x}_{t-1} \xrightarrow{q(\mathbf{x}_t|\mathbf{x}_{t-1})} \mathbf{x}_t $$

* We just need to train T regression models: $\{\text{Input: } x_t, \text{ output: } x_{t-1}\}_{t=1}^T$
* **Question:** Applications where other regression methods would work better?
* **Question:** What will be the convergence rate of those algorithms?
* **Question:** Can we use these other regression methods to generate other kinds of objects? [Graphs, time-series, functions, sets, …]

### Visual Description
The same diagram from page 17 is repeated, showing the diffusion process from noise to a clear image of a person's face.

---
## Page 19
### Content
# How to Generate Infinite Dimensional Objects?

### Visual Description
Text-only slide.

---
## Page 20
### Content
**Open Question 2: Gaussian Process Diffusion**

We could potentially use a similar diffusion approach to generate (multi-dimensional) functions.

$$ \mathbf{x}_T \longrightarrow \dots \longrightarrow \mathbf{x}_t \xrightarrow{p_\theta(\mathbf{x}_{t-1}|\mathbf{x}_t)} \mathbf{x}_{t-1} \longrightarrow \dots \longrightarrow \mathbf{x}_0 $$
$$ \mathbf{x}_{t-1} \xrightarrow{q(\mathbf{x}_t|\mathbf{x}_{t-1})} \mathbf{x}_t $$

We had $\mathbf{x}_t = \sqrt{1 - \beta_t}\mathbf{x}_{t-1} + \boldsymbol{\epsilon}_t$ where $\boldsymbol{\epsilon}_t \sim \mathcal{N}(\mathbf{0}, \beta_t\mathbf{I})$

Let $\mathbf{x}_t : [0, 1]^2 \to \mathbb{R}^3$ be a function

**We could still define a diffusion:**
$$\mathbf{x}_t(u) = \sqrt{1 - \beta_t}\mathbf{x}_{t-1}(u) + \boldsymbol{\epsilon}_t(u) \text{ where } \boldsymbol{\epsilon}_t \sim \mathcal{GP}(\mathbf{0}, \beta_t k(\cdot, \cdot))$$

The only difference is that the reverse diffusion has to solve a function-to-function regression:
Input: $\mathbf{x}_t(\cdot)$, Output: $\mathbf{x}_{t-1}(\cdot)$

**Convergence rate?**

### Visual Description
The slide contains the diffusion process diagram from previous pages along with mathematical formulations for Gaussian Process diffusion.

---
## Page 21
### Content
# How to Generate More Complicated Objects?

### Visual Description
Text-only slide.

---
## Page 22
### Content
**Point Cloud Diffusion / GAN**

The previous methods generated a sample point from a distribution.

**Question: Best ways to create a hierarchical data generation process with diffusion?**
* Generate a sample point x
* Based on x, generate sample points from another conditional distribution $p(y|x)$
* Based on y, generate sample points $p(z|y)$, and so on

**Applications:**
* Point cloud generation
* 3D mesh generation
* Autoregressive data generation
* Interpretable data generation
* ...

### Visual Description
Text-only slide.

---
## Page 23
### Content
**Point Cloud Diffusion / GAN**

**Goal: Given a set of point clouds of objects,**
* **generate a new object,**
* **and then draw samples from that new object to create a new point cloud**

$$ p(X, \theta) = \underbrace{p(\theta)}_{\text{object}} \underbrace{\prod_{i=1}^n p(x_i|\theta)}_{\text{points for object}} $$

### Visual Description
The slide shows three images of 3D point clouds representing an airplane, a vase, and a chair. Below the images is a mathematical formula for the joint probability of a point cloud $X$ and an object parameter $\theta$.

---
## Page 24
### Content
**Point Cloud Diffusion / GAN**

$$ p(X, \theta) = \underbrace{p(\theta)}_{\text{object}} \underbrace{\prod_{i=1}^n p(x_i|\theta)}_{\text{points for object}} $$

**Solution:**

When we don’t know vector $\theta$, we need to infer it from the point clouds:

We need to create an inference network $Q$, that takes a point cloud as input $X = \{x_1, \dots, x_n\}$, and outputs a vector $\theta \in \mathbb{R}^{d_2}$.

Luckily such neural network exists: DeepSets.

**Question: Convergence rate of point cloud diffusion/GAN?**

### Visual Description
Text-only slide.
## Page 25
### Content
# Point Cloud Diffusion / GAN

Interpolating between a table and a chair point clouds using the latent space representation.

### Visual Description
A sequence of seven point cloud images showing a smooth transition (interpolation) from a chair on the left to a table on the right. The point clouds are rendered in a blueish-green color.

---
## Page 26
### Content
# Point Cloud Diffusion / GAN

Interpolating between different rotations of an airplane, using the latent space representation.

### Visual Description
Two rows of point cloud images showing an airplane rotating. 
- The top row contains seven images of an airplane rotating in a side-profile view.
- The bottom row contains seven images of an airplane rotating in a top-down view.
The point clouds are rendered in a blueish-green color.

---
## Page 27
### Content
# More Generally: Structured Generation

* **Goal:** Generate 3D mesh structure and texture too.
* **Goal:** Create a Hierarchical Diffusion/GAN based data generation process

**Question: Convergence rate?**

### Visual Description
- At the top right, there is a visual equation: a "TEXTURE MAP" image + a "3D MESH" of a stylized dog-like creature = a final rendered image of the creature with texture in three different poses.
- At the bottom, there is a diagram of a hierarchical model. It is a tree-like graph with a root node $y$ at the top. $y$ is connected to two hidden nodes $h_2$ and $h_1$. These hidden nodes are connected to four leaf nodes $x_4, x_3, x_2, x_1$ at the bottom, with some cross-connections (e.g., $h_2$ connects to $x_4, x_3, x_2$ and $h_1$ connects to $x_3, x_2, x_1$).

---
## Page 28
### Content
# More Generally

**Goal:** Using generative AI, generate short programs that can generate objects in 3D simulators

### Visual Description
The slide features logos and screenshots from popular 3D creation and simulation software:
- **Unity:** A screenshot of the Unity editor showing a mountainous landscape with a lake.
- **Unreal Engine:** The Unreal Engine logo superimposed over a cinematic render of a rocky, mountainous environment.
- **Blender:** The Blender logo next to a high-quality 3D render of a planet with rings surrounded by an asteroid field.

---
## Page 29
### Content
# Other Open Questions

* How to add physics prior knowledge and constraints to these methods?
* How much can physics prior knowledge improve on the convergence rates?
* GANs / Diffusion based generative methods on manifolds?
* Rare event generation?
* Generate uniform distribution on the support of the data?

### Visual Description
Text-only slide.

---
## Page 30
### Content
# Thanks for your Attention! ☺

### Visual Description
Text-only slide.
