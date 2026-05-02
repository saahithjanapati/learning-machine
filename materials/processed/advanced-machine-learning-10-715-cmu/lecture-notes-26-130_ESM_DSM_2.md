# lecture-notes-26-130_ESM_DSM_2

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/lecture-notes-26-130_ESM_DSM_2.pdf`
Duplicate equivalents: `lecture-notes-26-130_ESM_DSM_2.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 36

## Page 1
### Content
# Explicit score matching [ESM] vs Denoising score matching [DSM]

Barnabas Poczos
bapoczos@cs.cmu.edu

Slide 1
### Visual Description
Title slide with the main title in large red bold text. The author's name and email are in blue text below.

---
## Page 2
### Content
# Paper to Read

**Unveil Conditional Diffusion Models with Classifier-free Guidance: A Sharp Statistical Theory**

Fu et al, 2024
https://arxiv.org/abs/2403.11968

[We will often follow the notation and Equation numbers of this paper]

Slide 2
### Visual Description
Text-only slide.

---
## Page 3
### Content
# Contents

* **Explicit score matching [ESM] and Denoising score matching [DSM]**
* **ESM = DSM + C**
$$\int_{x_t} \|s(x_t, t) - \nabla \log p_t(x_t)\|^2 p_t(x_t) dx_t = \int_{x_0} \int_{x_t} \|s(x_t, t) - \nabla \log p_t(x_t | x_0)\|^2 p_t(x_t | x_0) p_0(x_0) dx_t dx_0 + C$$

* **Objective for classifier-free score estimation**
$$s^\star \in \text{argmin}_{s \in \mathcal{F}} \int_{t_0}^T \frac{1}{T-t_0} \mathbb{E}_{(x_0, y)} \left[ \mathbb{E}_{\tau, x' \sim \mathcal{N}(\alpha_t x_0, \sigma_t^2 I)} \left[ \|s(x', \tau y, t) - \nabla_{x'} \log \phi_t(x' | x_0)\|^2 \right] \right] dt \quad (2.4)$$

* **DSM Loss function:**
$$\ell(x, y; s) = \int_{t_0}^T \frac{1}{T-t_0} \mathbb{E}_{\tau, x' \sim \mathcal{N}(\alpha_t x, \sigma_t^2 I)} \left[ \|s(x', \tau y, t) - \nabla_{x'} \log \phi_t(x' | x)\|^2 \right] \quad (2.5)$$
$$s^\star \in \text{argmin}_{s \in \mathcal{F}} \underbrace{\mathbb{E}_{(x_0, y)} [\ell(x_0, y; s)]}_{\mathcal{L}(s)}$$

* **DSM Empirical risk:**
$$\hat{s} \in \text{argmin}_{s \in \mathcal{F}} \underbrace{\frac{1}{n} \sum_{i=1}^n \ell(x^i, y^i; s)}_{\hat{\mathcal{L}}(s)} \text{ where we recall } n \text{ is the sample size.}$$

Slide 3
### Visual Description
A slide containing a list of topics and several complex mathematical equations related to score matching and empirical risk.

---
## Page 4
### Content
# Explicit score matching [ESM] vs Denoising score matching [DSM]

Slide 4
### Visual Description
Section header slide with the title centered in blue bold text.

---
## Page 5
### Content
# Reminder: Forward and Backward Diffusion processes

**Forward diffusion:**
$$dX_t = -\frac{1}{2} X_t dt + dW_t \quad \text{with} \quad X_0 \sim P(\cdot | y), \quad (2.1)$$
$$X_t | X_0 \sim \mathcal{N}\left(X_0 e^{-\frac{t}{2}}, (1 - e^{-t})\right) = \mathcal{N}(\alpha_t X_0, \sigma_t^2).$$

**Backward diffusion:**
$$dX_t^\leftarrow = \left[ \frac{1}{2} X_t^\leftarrow + \nabla \log p_{T-t}(X_t^\leftarrow | y) \right] dt + d\bar{W}_t \quad \text{with} \quad X_0^\leftarrow \sim P_T(\cdot | y) \quad (2.2)$$

**Backward diffusion with estimated score:**
$$d\tilde{X}_t^\leftarrow = \left[ \frac{1}{2} \tilde{X}_t^\leftarrow + \hat{s}(\tilde{X}_t, y, T-t) \right] dt + d\bar{W}_t \quad \text{with} \quad \tilde{X}_0^\leftarrow \sim \mathcal{N}(0, I) \quad (2.3)$$

The marginal distribution of $\tilde{X}_t^\leftarrow$ (conditioned on $y$) is written as $\tilde{P}_{T-t}(\cdot | y)$.

Slide 5
### Visual Description
Text and mathematical formulas describing forward and backward diffusion processes. Key terms like "estimated score" are highlighted in red.

---
## Page 6
### Content
# Goal of Score Estimation

**Backward diffusion:**
$$dX_t^\leftarrow = \left[ \frac{1}{2} X_t^\leftarrow + \nabla \log p_{T-t}(X_t^\leftarrow | y) \right] dt + d\bar{W}_t \quad \text{with} \quad X_0^\leftarrow \sim P_T(\cdot | y) \quad (2.2)$$

**Backward diffusion with estimated score:**
$$d\tilde{X}_t^\leftarrow = \left[ \frac{1}{2} \tilde{X}_t^\leftarrow + \hat{s}(\tilde{X}_t, y, T-t) \right] dt + d\bar{W}_t \quad \text{with} \quad \tilde{X}_0^\leftarrow \sim \mathcal{N}(0, I) \quad (2.3)$$

**Goal:**
We want $\|\hat{s}(x_t, y, t) - \nabla \log p_t(x_t | y)\|$ to be small for all $t, y, x_t$

Slide 6
### Visual Description
Text and mathematical formulas defining the goal of score estimation by comparing the true score and the estimated score. The goal statement is in red.

---
## Page 7
### Content
# Score Estimation as a Regression Problem

**Goal:** We want $\|\hat{s}(x_t, y, t) - \nabla \log p_t(x_t | y)\|$ to be small for all $t, y, x_t$

**Solution idea:** Learn $\hat{s}(x_t, y, t)$ as a solution of a **regression** problem!

**The training set of input-output pairs:**
$$\left\{ (x_t^i, y^i, t) \to \nabla \log p_t(x_t^i | y^i) \right\}_{t=0, i=1}^{T, n}$$

**A reasonable objective function:**
$$\min_\theta \sum_{i=1}^n \sum_{t=1}^T \|\hat{s}_\theta(x_t^i, y^i, t) - \nabla \log p_t(x_t^i | y^i)\|^2$$

**Difficulty:** $\nabla \log p_t(x_t^i | y^i)$ is not known...

Slide 7
### Visual Description
Text and mathematical formulas framing score estimation as a regression problem and identifying the primary difficulty.

---
## Page 8
### Content
# Unconditional Version

[There is no $y$]

Slide 8
### Visual Description
Section header slide with the title centered in blue bold text.

---
## Page 9
### Content
# Equivalence of explicit score matching and denoising score matching

**Lemma [Equivalence of explicit score matching and denoising score matching (Vincent 2011, Oko 2023)]**

The following equality holds for all $s(x_t, t)$ and $t > 0$:

$$
\underbrace{\int_{x_t} \|s(x_t, t) - \nabla \log p_t(x_t)\|^2 p_t(x_t) dx_t}_{\text{[explicit score matching (ESM)]}} = \underbrace{\int_{x_0} \int_{x_t} \|s(x_t, t) - \nabla \log p_t(x_t | x_0)\|^2 p_t(x_t | x_0) p_0(x_0) dx_t dx_0}_{\text{[denoising score matching (DSM)]}} + C,
$$

where $C = \int_{x_t} \|\nabla \log p_t(x_t)\|^2 p_t(x_t) dx_t - \int_{x_0} \int_{x_t} \|\nabla \log p_t(x_t | x_0)\|^2 p_t(x_t | x_0) p_0(x_0) dx_t dx_0$

$C$ does not depend on $s$!

**Proof: Appendix**

### Visual Description
The slide presents a mathematical lemma with a large equation. The left side of the equation is labeled "[explicit score matching (ESM)]" with a curly brace, and the right side (the double integral term) is labeled "[denoising score matching (DSM)]" with another curly brace. Below the main equation, the constant $C$ is defined. A red note on the right emphasizes that $C$ does not depend on $s$. A small thumbnail of the same slide is visible at the bottom.

---

## Page 10
### Content
# Equivalence of explicit score matching and denoising score matching

**We already know:**
$$
\int_{x_t} \|s(x_t, t) - \nabla \log p_t(x_t)\|^2 p_t(x_t) dx_t = \int_{x_0} \int_{x_t} \|s(x_t, t) - \nabla \log p_t(x_t | x_0)\|^2 p_t(x_t | x_0) p_0(x_0) dx_t dx_0 + C,
$$

**We can also use the below form:**

The following equality holds for all $s(x_t, t)$ and $t > 0$:

$$
\underbrace{\mathbb{E}_{x_t} \|s(x_t, t) - \nabla \log p_t(x_t)\|^2}_{\text{[explicit score matching]}} = \underbrace{\mathbb{E}_{x_0} \mathbb{E}_{x_t | x_0} \|s(x_t, t) - \nabla \log p_t(x_t | x_0)\|^2}_{\text{[denoising score matching]}} + C
$$

$C$ does not depend on $s$!

### Visual Description
This slide reformulates the equivalence from the previous page using expectation notation. It shows the integral form first, then the expectation form. Curly braces label the left side as "[explicit score matching]" and the right side as "[denoising score matching]". A red note on the right repeats that $C$ does not depend on $s$.

---

## Page 11
### Content
# Objective Function for Denoising Score Estimation

$$ \mathbb{E}_{x_t} \|s(x_t, t) - \nabla \log p_t(x_t)\|^2 = \mathbb{E}_{x_0} \mathbb{E}_{x_t | x_0} \|s(x_t, t) - \nabla \log p_t(x_t | x_0)\|^2 + C $$

**How can we learn the Denoising Score Function?**

**The training set of input-output pairs:**
$$ \left\{ (x_t^i, t) \to \nabla \log p_t(x_t^i | x_0^i) \right\}_{t=0, i=1}^{T, n} $$

**A new objective function candidate:**
$$ \min_\theta \frac{1}{n} \sum_{i=1}^n \frac{1}{T} \sum_{t=1}^T \|\hat{s}_\theta(x_t^i, t) - \nabla \log p_t(x_t^i | x_0^i)\|^2 $$

**We already know:**
$$ X_t | X_0 \sim \mathcal{N}(X_0 e^{-t/2}, (1 - e^{-t})) = \mathcal{N}(\alpha_t X_0, \sigma_t^2). $$

Therefore, $\nabla \log p_t(x_t^i | x_0^i)$ is known!

### Visual Description
The slide discusses the objective function for learning the denoising score function. It presents the expectation equivalence, defines a training set of input-output pairs, and proposes a minimization objective over parameters $\theta$. It concludes by showing that the target gradient is known because the forward process transition kernel is Gaussian.

---

## Page 12
### Content
# Gaussian transition kernel of the forward process

**Reminder [Forward process]:**
$$ X_t | X_0 \sim \mathcal{N}(X_0 e^{-t/2}, (1 - e^{-t})) = \mathcal{N}(\alpha_t X_0, \sigma_t^2). $$

**Notation [Gaussian transition kernel of the forward process]:**
$$ p_t(x_t | x_0) = \frac{1}{(2\pi\sigma_t^2)^{d/2}} \exp \left( -\frac{1}{2\sigma_t^2} (x_t - \alpha_t x_0)^2 \right) \text{ with } \alpha_t = e^{-t/2} \text{ and } \sigma_t^2 = 1 - e^{-t}. $$

$$ \Rightarrow \log p_t(x_t | x_0) = -\frac{1}{2\sigma_t^2} (x_t - \alpha_t x_0)^2 + \log(2\pi\sigma_t^2)^{d/2} $$

$$ \Rightarrow \nabla \log p_t(x_t | x_0) = -(x_t - \alpha_t x_0) / \sigma_t^2 \text{ with } \alpha_t = e^{-t/2} \text{ and } \sigma_t^2 = 1 - e^{-t}. $$

### Visual Description
This slide provides a mathematical derivation for the score of the Gaussian transition kernel. It starts with the definition of the forward process, writes out the probability density function, takes the logarithm, and then takes the gradient with respect to $x_t$. The final result for the score is highlighted in red.

---

## Page 13
### Content
# Conditional Version
$$ X_0 \sim P(\cdot | y) $$

### Visual Description
Text-only slide. It features the title "Conditional Version" and a single mathematical expression centered on the page.

---

## Page 14
### Content
# Equivalence of explicit score matching and denoising score matching

**We can also use the below form:**

The following equality holds for all $s(x_t, t)$ and $t > 0$:

$$ \underbrace{\mathbb{E}_{x_t} \|s(x_t, t) - \nabla \log p_t(x_t)\|^2}_{\text{[explicit score matching]}} = \underbrace{\mathbb{E}_{x_0} \mathbb{E}_{x_t | x_0} \|s(x_t, t) - \nabla \log p_t(x_t | x_0)\|^2}_{\text{[denoising score matching]}} + C $$

**More generally for $x|y$ conditional distributions:**
$$ \mathbb{E}_{x_t | y} \|s(x_t, y, t) - \nabla \log p_t(x_t | y)\|^2 = \mathbb{E}_{x_0} \mathbb{E}_{x_t | x_0, y} \|s(x_t, y, t) - \nabla \log p_t(x_t | x_0, y)\|^2 + C $$

**After taking expectation w.r.t y:**
$$ \underbrace{\mathbb{E}_{x_t, y} \|s(x_t, y, t) - \nabla \log p_t(x_t | y)\|^2}_{\text{[explicit score matching]}} = \underbrace{\mathbb{E}_{x_0, y} \mathbb{E}_{x_t | x_0, y} \|s(x_t, y, t) - \nabla \log p_t(x_t | x_0, y)\|^2}_{\text{[denoising score matching]}} + C $$

$C$ does not depend on $s$!

### Visual Description
This slide extends the equivalence between explicit and denoising score matching to the conditional case. It shows the standard expectation form, then the form conditional on $y$, and finally the form after taking the expectation over $y$. Curly braces label the final terms as "[explicit score matching]" and "[denoising score matching]".

---

## Page 15
### Content
# Objective Function for Conditional Score Estimation

$$ \mathbb{E}_{x_t, y} \|s(x_t, y, t) - \nabla \log p_t(x_t | y)\|^2 = \mathbb{E}_{x_0, y} \mathbb{E}_{x_t | x_0, y} \|s(x_t, y, t) - \nabla \log p_t(x_t | x_0, y)\|^2 + C $$

**How can we learn the Conditional Denoising Score Function?**

**The training set of input-output pairs:**
$$ \left\{ (x_t^i, y^i, t) \to \nabla \log p_t(x_t^i | x_0^i, y^i) \right\}_{t=0, i=1}^{T, n} $$

**A new objective function candidate:**
$$ \min_\theta \frac{1}{n} \sum_{i=1}^n \frac{1}{T} \sum_{t=1}^T \|\hat{s}_\theta(x_t^i, y^i, t) - \nabla \log p_t(x_t^i | x_0^i, y^i)\|^2 $$

**We already know:**
$$ X_t | X_0, y \sim \mathcal{N}(X_0 e^{-t/2}, (1 - e^{-t})) = \mathcal{N}(\alpha_t X_0, \sigma_t^2). $$

Therefore, $\nabla \log p_t(x_t^i | x_0^i, y^i)$ is known!

$$ p_t(x_t | x_0, y) = \exp \left( -\frac{1}{2\sigma_t^2} (x_t - \alpha_t x_0)^2 \right) $$

### Visual Description
The slide details the objective function for conditional score estimation. It mirrors the structure of page 11 but includes the conditioning variable $y$. It defines the training set, the objective function, and notes that the conditional transition kernel is still Gaussian, making the target score known.

---

## Page 16
### Content
# Conditional Diffusion

### Visual Description
Text-only slide. It contains the title "Conditional Diffusion" centered in large blue text.

---
==End of PDF==
## Page 17
### Content
# Conditional Diffusion with and without Classifier-guidance

* Diffusion models learn to **denoise** data step-by-step — turning noise into structured samples (images, audio, text, etc.).
* During sampling, you can "**guide**" the model to produce outputs that better satisfy some **condition** (e.g., a text prompt, a class label, an input image).
* Originally, guidance required a **separate classifier** trained to tell how likely a sample matches the condition.
* **Classifier-free guidance** removes that dependency — hence the name.

### Visual Description
Text-only slide.

---
## Page 18
### Content
# Conditional Diffusion

We would like to sample from the conditional distribution $p(x_0 | y)$.

**Two different ways:**

* **With trained classifiers (Classifier guidance)**
    It needs:
    * unconditional diffusion / unconditional score estimation
    * A trained classifier
* **Without classifiers (Classifier-free guidance)**
    * It needs conditional score estimation
    * It does NOT need a trained classifier

### Visual Description
Text-only slide.

---
## Page 19
### Content
# Conditional Diffusion with Classifiers

We would like to sample from the conditional distribution $p(x_0 | y)$ using a diffusion model that is trained unconditionally. Let $x_t$ denote a noisy sample at diffusion time $t$. The key identity is
$$\log p(x_t | y) + \log p(y) = \log p(x_t) + \log p(y | x_t).$$
$$\Rightarrow \nabla_{x_t} \log p(x_t | y) + \nabla_{x_t} \log p(y) = \nabla_{x_t} \log p(x_t) + \nabla_{x_t} \log p(y | x_t).$$
$$\Rightarrow \nabla_{x_t} \log p(x_t | y) = \nabla_{x_t} \log p(x_t) + \nabla_{x_t} \log p(y | x_t).$$

* $\nabla_{x_t} \log p(x_t)$ is the *unconditional score*, which is approximated by the unconditional diffusion model's denoiser.
* $\nabla_{x_t} \log p(y | x_t)$ is obtained from a classifier trained on noisy samples $(x_t, t)$.

Thus, the guided score can be written as
$$s_{\text{guided}}(x_t, t, y) = s_{\text{uncond}}(x_t, t) + \lambda \nabla_{x_t} \log p(y | x_t), \quad (1)$$
where $\lambda$ is a user-defined guidance scale.

### Visual Description
Text-only slide.

---
## Page 20
### Content
# Classifier-free guidance

### Visual Description
Text-only slide.

---
## Page 21
### Content
# Classifier-free guidance

Our goal is to be able to generate samples from $p_t(x_t)$ and from $p_t(x_t | y)$

**We discussed before:**
$$\mathbb{E}_{x_t} \|s(x_t, t) - \nabla \log p_t(x_t)\|^2 = \mathbb{E}_{x_0} \mathbb{E}_{x_t | x_0} \|s(x_t, t) - \nabla \log p_t(x_t | x_0)\|^2 + C$$
$$\mathbb{E}_{x_t, y} \|s(x_t, y, t) - \nabla \log p_t(x_t | y)\|^2 = \mathbb{E}_{x_0, y} \mathbb{E}_{x_t | x_0, y} \|s(x_t, y, t) - \nabla \log p_t(x_t | x_0, y)\|^2 + C$$

Therefore, we will need to create $s(x_t, t)$ and $s(x_t, y, t)$ (unconditional and conditional) score estimators.

**We also know:**
$$p_t(x_t | x_0) = \phi_t(x_t | x_0) := \exp\left(-\frac{1}{2\sigma_t^2} (x_t - \alpha_t x_0)^2\right) \text{ with } \alpha_t = e^{-t/2} \text{ and } \sigma_t^2 = 1 - e^{-t}.$$
$$p_t(x_t | x_0, y) = \phi_t(x_t | x_0, y) := \exp\left(-\frac{1}{2\sigma_t^2} (x_t - \alpha_t x_0)^2\right)$$

### Visual Description
Text-only slide.

---
## Page 22
### Content
# Classifier-free guidance

**Classifier-free guidance**, proposed in Ho and Salimans [2022], is a widely adopted method for **training** $\hat{s}(x, y, t)$.

Here, we **learn both the conditional and unconditional score functions simultaneously**, whose **estimators** are $s_1(x, y, t)$ and $s_2(x, t)$, respectively.

**Informally, we want these quantities to be small:**
**Conditioning DSM error:** $\|s_1(x, y, t) - \nabla_x \log \phi_t(x | x_0)\|_2^2$
**Non-Conditioning DSM error:** $\|s_2(x, t) - \nabla_x \log \phi_t(x | x_0)\|_2^2$

To unify the notations, let $\tau \in \{\emptyset, \text{id}\}$ be a **mask signal**, where $\emptyset$ means that we ignore the guidance $y$ and $\text{id}$ means that we keep the guidance.

### Visual Description
Text-only slide.

---
## Page 23
### Content
# Score Matching Objective Function
# Integration over Time

Formally, according to the value of $\tau$, we consider the following two cases:

**Conditioning DSM:**
$$\tau = \text{id} : \int_{t_0}^T \frac{1}{T - t_0} \mathbb{E}_{(x_0, y)} \left[ \underbrace{\mathbb{E}_{x' \sim N(\alpha_t x_0, \sigma_t^2 I)}}_{\mathbb{E}_{x' | x_0, y, t}} \left[ \|s_1(x', y, t) - \nabla_{x'} \log \phi_t(x' | x_0)\|_2^2 \right] \right] dt$$

**No-Conditioning DSM:**
$$\tau = \emptyset : \int_{t_0}^T \frac{1}{T - t_0} \mathbb{E}_{x_0} \left[ \underbrace{\mathbb{E}_{x' \sim N(\alpha_t x_0, \sigma_t^2 I)}}_{\mathbb{E}_{x' | x_0, t}} \left[ \|s_2(x', t) - \nabla_{x'} \log \phi_t(x' | x_0)\|_2^2 \right] \right] dt$$

Here $t_0$ is an **early-stopping time** to prevent the blow-up of score functions when $t_0 \to 0$. This is often used in practice [Song and Ermon, 2020, Nichol and Dhariwal, 2021].
**[We will discuss why this blow-up happens later]**

$T$ is the **terminal time**, i.e. the time when the forward diffusion stops.

### Visual Description
Text-only slide.

---
## Page 24
### Content
# Classifier-free guidance

We **unify these two cases** by writing a tri-variate score function $s(x', \cdot, t)$ where the second argument is either $\emptyset$ or $y$.

We define the score estimator $s$ as
$$s(x, y, t) = \begin{cases} s_1(x, y, t) & \text{if } y \in \mathbb{R}^{d_y} \\ s_2(x, t) & \text{if } y = \emptyset \end{cases}$$
where $s_1 \in \mathcal{F}_1$ and $s_2 \in \mathcal{F}_2$ are the conditional and unconditional score estimators, respectively.

The function classes $\mathcal{F}_1$ and $\mathcal{F}_2$ are two ReLU neural networks defined later.

As can be seen, when $\tau = \emptyset$, the objective function reduces to that of score estimation in unconditional diffusion models.

### Visual Description
Text-only slide.

---
## Page 25

### Content
# Unified Classifier-free guidance score estimation

**Reminder [ESM = DSM + C]:**
$$\mathbb{E}_{x_t, y} \|s(x_t, y, t) - \nabla \log p_t(x_t \mid y)\|^2 = \mathbb{E}_{x_0, y} \mathbb{E}_{x_t \mid x_0, y} \|s(x_t, y, t) - \nabla \log p_t(x_t \mid x_0, y)\|^2 + C$$

$$p_t(x_t \mid x_0, y) = \phi_t(x_t \mid x_0) = \exp \left(-\frac{1}{2 \sigma_t^2}(x_t - \alpha_t x_0)^2\right) \text{ with } \alpha_t = e^{-t/2} \text{ and } \sigma_t^2 = 1 - e^{-t}.$$

**Then we have a unified objective for classifier-free score estimation [DSM]:**
$$s^\star \in \underset{s \in \mathcal{F}}{\operatorname{argmin}} \int_{t_0}^T \frac{1}{T-t_0} \mathbb{E}_{(x_0, y)} \underbrace{\left[\mathbb{E}_{\tau, x^{\prime} \sim \mathrm{N}\left(\alpha_t x_0, \sigma_t^2 I\right)}\left[\left\|s\left(x^{\prime}, \tau y, t\right)-\nabla_{x^{\prime}} \log \phi_t\left(x^{\prime} \mid x_0\right)\right\|_2^2\right]\right]}_{\mathbb{E}_{x^{\prime} \mid x_0, \tau y}} \mathrm{d} t \quad (2.4)$$

where the inner expectation is taken with respect to $\tau \sim \operatorname{Unif}\{\varnothing, \mathrm{id}\}$.

We stick to the uniform prior on $\tau$ for simplicity, i.e., $\mathbb{P}(\tau = \varnothing) = \mathbb{P}(\tau = \mathrm{id}) = 0.5$.

The function class $\mathcal{F}$ is a ReLU neural network [defined later].

### Visual Description
The slide contains mathematical formulas for unified classifier-free guidance score estimation. It includes a reminder of the ESM = DSM + C relationship, the definition of the conditional probability density function $p_t$, and the unified objective function (2.4) with an underbrace indicating the expectation over $x'$ given $x_0$ and $\tau y$.

---

## Page 26

### Content
# Denoising Score Matching (DSM) Objective [Population version]

$$s^\star \in \underset{s \in \mathcal{F}}{\operatorname{argmin}} \int_{t_0}^T \frac{1}{T-t_0} \mathbb{E}_{(x_0, y)}\left[\mathbb{E}_{\tau, x^{\prime} \sim \mathrm{N}\left(\alpha_t x_0, \sigma_t^2 I\right)}\left[\left\|s\left(x^{\prime}, \tau y, t\right)-\nabla_{x^{\prime}} \log \phi_t\left(x^{\prime} \mid x_0\right)\right\|_2^2\right]\right] \mathrm{d} t$$

We denote the new **DSM loss function** at $x$ and $y$:
$$\ell(x, y ; s) = \int_{t_0}^T \frac{1}{T-t_0} \mathbb{E}_{\tau, x^{\prime} \sim \mathrm{N}\left(\alpha_t x, \sigma_t^2 I\right)}\left[\left\|s\left(x^{\prime}, \tau y, t\right)-\nabla_{x^{\prime}} \log \phi_t\left(x^{\prime} \mid x\right)\right\|_2^2\right] \mathrm{d} t \quad (2.5)$$

$$s^\star \in \underset{s \in \mathcal{F}}{\operatorname{argmin}} \underbrace{\mathbb{E}_{(x_0, y)}\left[\ell\left(x_0, y ; s\right)\right]}_{\mathcal{L}(s)}$$

For future usage, we denote the **population risk** function (=expected loss) by $\mathcal{L}(s)$.

### Visual Description
The slide defines the population version of the Denoising Score Matching (DSM) objective. It introduces a loss function $\ell(x, y; s)$ in equation (2.5) and defines the population risk $\mathcal{L}(s)$ as the expectation of this loss over the data distribution $(x_0, y)$.

---

## Page 27

### Content
# Score Matching Objective [Empirical version]

**We already know the DSM objective:**
$$\ell(x, y ; s) = \int_{t_0}^T \frac{1}{T-t_0} \mathbb{E}_{\tau, x^{\prime} \sim \mathrm{N}\left(\alpha_t x, \sigma_t^2 I\right)}\left[\left\|s\left(x^{\prime}, \tau y, t\right)-\nabla_{x^{\prime}} \log \phi_t\left(x^{\prime} \mid x\right)\right\|_2^2\right] \mathrm{d} t \quad (2.5)$$

$$s^\star \in \underset{s \in \mathcal{F}}{\operatorname{argmin}} \underbrace{\mathbb{E}_{(x_0, y)}\left[\ell\left(x_0, y ; s\right)\right]}_{\mathcal{L}(s)}$$

where $\nabla \log \phi_t\left(x^{\prime} \mid x_0\right) = -\left(x^{\prime}-\alpha_t x_0\right) / \sigma_t^2$ with $\alpha_t = e^{-t/2}$ and $\sigma_t^2 = 1 - e^{-t}$.

In practice, (2.5) is implemented using collected i.i.d. **training data points** $\{(x_0^i, y^i)\}_{i=1}^n$, which essentially replaces the expectation over $(x_0, y)$ by its empirical counterpart.

### Visual Description
The slide transitions from the population version to the empirical version of the score matching objective. It restates the DSM loss and population risk, provides the explicit form for the gradient of the log-density, and explains that in practice, the expectation is replaced by an empirical average over training data.

---

## Page 28

### Content
# Classifier-free guidance

**We already know the DSM loss:**
$$\ell(x, y ; s) = \int_{t_0}^T \frac{1}{T-t_0} \mathbb{E}_{\tau, x^{\prime} \sim \mathrm{N}\left(\alpha_t x, \sigma_t^2 I\right)}\left[\left\|s\left(x^{\prime}, \tau y, t\right)-\nabla_{x^{\prime}} \log \phi_t\left(x^{\prime} \mid x\right)\right\|_2^2\right] \mathrm{d} t \quad (2.5)$$

where $\nabla \log \phi_t\left(x^{\prime} \mid x_0\right) = -\left(x^{\prime}-\alpha_t x_0\right) / \sigma_t^2$ with $\alpha_t = e^{-t/2}$ and $\sigma_t^2 = 1 - e^{-t}$.

Note that we have assumed sufficient sampling on $x^{\prime}$ and the mask signal $\tau$ in (2.5).

Then the classifier-free guidance is to **minimize the following DSM empirical risk**

**DSM Empirical risk:** $$\hat{s} \in \underset{s \in \mathcal{F}}{\operatorname{argmin}} \underbrace{\frac{1}{n} \sum_{i=1}^n \ell\left(x_0^i, y_i ; s\right)}_{\widehat{\mathcal{L}}(s)} \quad (2.6)$$

where we recall $n$ is the sample size.

**Reminder [DSM Population risk]:** $$s^\star \in \underset{s \in \mathcal{F}}{\operatorname{argmin}} \underbrace{\mathbb{E}_{(x_0, y)}\left[\ell\left(x_0, y ; s\right)\right]}_{\mathcal{L}(s)}$$

### Visual Description
The slide formally defines the DSM empirical risk for classifier-free guidance in equation (2.6). It shows the empirical risk $\widehat{\mathcal{L}}(s)$ as an average of the loss over $n$ samples and provides a reminder of the population risk $\mathcal{L}(s)$ for comparison.

---

## Page 29

### Content
# Thanks for your Attention! ☺

### Visual Description
Text-only slide.

---

## Page 30

### Content
# Appendix

### Visual Description
Text-only slide.

---

## Page 31

### Content
# Equivalence of explicit score matching and denoising score matching

**Lemma [Equivalence of explicit score matching and denoising score matching (Vincent (2011))].**

The following equality holds for all $s(x_t, t)$ and $t > 0$:

$$\int_{x_t} \|s(x_t, t) - \nabla \log p_t(x_t)\|^2 p_t(x_t) \mathrm{d}x_t = \int_{x_0} \int_{x_t} \|s(x_t, t) - \nabla \log p_t(x_t \mid x_0)\|^2 p_t(x_t \mid x_0) p_0(x_0) \mathrm{d}x_t \mathrm{d}x_0 + C,$$

where $C = \int_{x_t} \|\nabla \log p_t(x_t)\|^2 p_t(x_t) \mathrm{d}x_t - \int_{x_0} \int_{x_t} \|\nabla \log p_t(x_t \mid x_0)\|^2 p_t(x_t \mid x_0) p_0(x_0) \mathrm{d}x_t \mathrm{d}x_0$

### Visual Description
The slide presents a lemma from Vincent (2011) stating the equivalence between explicit score matching and denoising score matching. It provides the integral equation relating the two objectives and defines the constant $C$.

---

## Page 32

### Content
# Proof of Lemma

$$\int_{x_t} \|s(x_t, t) - \nabla \log p_t(x_t)\|^2 p_t(x_t) \mathrm{d}x_t$$
$$= -2 \int_{x_t} p_t(x_t) s(x_t, t)^\top \nabla \log p_t(x_t) \mathrm{d}x_t + \int_{x_t} \|s(x_t, t)\|^2 p_t(x_t) \mathrm{d}x_t + \int_{x_t} \|\nabla \log p_t(x_t)\|^2 p_t(x_t) \mathrm{d}x_t$$
$$= -2 \int_{x_t} s(x_t, t)^\top \nabla p_t(x_t) \mathrm{d}x_t + \int_{x_t} \|s(x_t, t)\|^2 p_t(x_t) \mathrm{d}x_t + \int_{x_t} \|\nabla \log p_t(x_t)\|^2 p_t(x_t) \mathrm{d}x_t$$

where we used $\nabla \log p_t(x_t) = (\nabla p_t(x_t)) / p_t(x_t)$

Since $p_t(x_t) = \int_{x_0} p_t(x_t \mid x_0) p_0(x_0) \mathrm{d}x_0$, we have that

$$-2 \int_{x_t} s(x_t, t)^\top \nabla p_t(x_t) \mathrm{d}x_t + \int_{x_t} \|s(x_t, t)\|^2 p_t(x_t) \mathrm{d}x_t + \int_{x_t} \|\nabla \log p_t(x_t)\|^2 p_t(x_t) \mathrm{d}x_t$$
$$= -2 \int_{x_t} s(x_t, t)^\top \nabla \left(\int_{x_0} p_t(x_t \mid x_0) p_0(x_0) \mathrm{d}x_0\right) \mathrm{d}x_t + \int_{x_t} \|s(x_t, t)\|^2 p_t(x_t) \mathrm{d}x_t + \int_{x_t} \|\nabla \log p_t(x_t)\|^2 p_t(x_t) \mathrm{d}x_t$$
$$= -2 \int_{x_t} s(x_t, t)^\top \left(\int_{x_0} p_0(x_0) \nabla p_t(x_t \mid x_0) \mathrm{d}x_0\right) \mathrm{d}x_t + \int_{x_t} \|s(x_t, t)\|^2 p_t(x_t) \mathrm{d}x_t + \int_{x_t} \|\nabla \log p_t(x_t)\|^2 p_t(x_t) \mathrm{d}x_t$$

### Visual Description
The slide begins the proof of the lemma presented on the previous page. It expands the squared norm in the integral and uses the definition of the gradient of the log-density and the marginalization property of $p_t(x_t)$ to rewrite the expression.
## Page 33
### Content
# Proof of Lemma

**We already know:**

$$
\int_{x_t} \|s(x_t, t) - \nabla \log p_t(x_t)\|^2 p_t(x_t) dx_t
$$
$$
= -2 \int_{x_t} s(x_t, t)^\top \left( \int_{x_0} p_0(x_0) \nabla p_t(x_t | x_0) dx_0 \right) dx_t + \int_{x_t} \|s(x_t, t)\|^2 p_t(x_t) dx_t + \int_{x_t} \|\nabla \log p_t(x_t)\|^2 p_t(x_t) dx_t
$$
$$
= -2 \int_{x_t} \int_{x_0} p_t(x_t | x_0) p_0(x_0) s(x_t, t)^\top \nabla \log p_t(x_t | x_0) dx_0 dx_t + \int_{x_t} \|s(x_t, t)\|^2 p_t(x_t) dx_t + \int_{x_t} \|\nabla \log p_t(x_t)\|^2 p_t(x_t) dx_t
$$

where we used $\nabla \log p_t(x_t | x_0) = (\nabla p_t(x_t | x_0)) / p_t(x_t | x_0)$

and therefore $p_t(x_t | x_0) \nabla \log p_t(x_t | x_0) = \nabla p_t(x_t | x_0)$

### Visual Description
The slide contains a mathematical derivation for the proof of a lemma. It starts with an integral of a squared norm and expands it into three terms. The second equality substitutes a term using a logarithmic derivative identity, which is explained in text at the bottom.

---
## Page 34
### Content
# Proof of Lemma

**We already know:**

$$
\int_{x_t} \|s(x_t, t) - \nabla \log p_t(x_t)\|^2 p_t(x_t) dx_t
$$
$$
= -2 \int_{x_t} \int_{x_0} p_t(x_t | x_0) p_0(x_0) s(x_t, t)^\top \nabla \log p_t(x_t | x_0) dx_0 dx_t + \int_{x_t} \|s(x_t, t)\|^2 p_t(x_t) dx_t + \int_{x_t} \|\nabla \log p_t(x_t)\|^2 p_t(x_t) dx_t
$$

$$
\underbrace{\int_{x_0} \int_{x_t} p_t(x_t | x_0) p_0(x_0) s(x_t, t)^\top \nabla \log p_t(x_t | x_0) dx_t dx_0} \quad \underbrace{\int_{x_0} \int_{x_t} p_{x_t}(x_t | x_0) p_0(x_0) \|s(x_t, t)\|^2 dx_t dx_0}
$$

$$
= - 2 \int_{x_0} \int_{x_t} p_t(x_t | x_0) p_0(x_0) s(x_t, t)^\top \nabla \log p_t(x_t | x_0) dx_t dx_0
$$
$$
+ \int_{x_0} \int_{x_t} p_{x_t}(x_t | x_0) p_0(x_0) \|s(x_t, t)\|^2 dx_t dx_0
$$
$$
+ \int_{x_t} \|\nabla \log p_t(x_t)\|^2 p_t(x_t) dx_t
$$

### Visual Description
This slide continues the mathematical derivation. It uses curly braces to indicate how the terms from the previous step are being rewritten by swapping the order of integration and expanding the marginal distribution $p_t(x_t)$ into its joint form.

---
## Page 35
### Content
# Proof of Lemma

**We already know:**

$$
\int_{x_t} \|s(x_t, t) - \nabla \log p_t(x_t)\|^2 p_t(x_t) dx_t
$$
$$
= - 2 \int_{x_0} \int_{x_t} p_t(x_t | x_0) p_0(x_0) s(x_t, t)^\top \nabla \log p_t(x_t | x_0) dx_t dx_0
$$
$$
+ \int_{x_0} \int_{x_t} p_{x_t}(x_t | x_0) p_0(x_0) \|s(x_t, t)\|^2 dx_t dx_0
$$
$$
+ \int_{x_t} \|\nabla \log p_t(x_t)\|^2 p_t(x_t) dx_t
$$

$$
= \int_{x_0} \int_{x_t} p_t(x_t | x_0) p_0(x_0) \|s(x_t, t) - \nabla \log p_t(x_t | x_0)\|^2 dx_t dx_0
$$
$$
- \int_{x_0} \int_{x_t} p_t(x_t | x_0) p_0(x_0) \|\nabla \log p_t(x_t | x_0)\|^2 dx_t dx_0
$$
$$
+ \int_{x_t} \|\nabla \log p_t(x_t)\|^2 p_t(x_t) dx_t
$$

### Visual Description
The derivation continues by completing the square for the first two terms. The result is expressed as a new squared norm term minus a correction term, plus the original third term.

---
## Page 36
### Content
# Proof of Lemma

**Therefore, we proved**

$$
\int_{x_t} \|s(x_t, t) - \nabla \log p_t(x_t)\|^2 p_t(x_t) dx_t
$$
$$
= \int_{x_0} \int_{x_t} p_t(x_t | x_0) p_0(x_0) \|s(x_t, t) - \nabla \log p_t(x_t | x_0)\|^2 dx_t dx_0
$$
$$
- \int_{x_0} \int_{x_t} p_t(x_t | x_0) p_0(x_0) \|\nabla \log p_t(x_t | x_0)\|^2 dx_t dx_0
$$
$$
+ \int_{x_t} \|\nabla \log p_t(x_t)\|^2 p_t(x_t) dx_t
$$

$$
= \int_{x_0} \int_{x_t} \|s(x_t, t) - \nabla \log p_t(x_t | x_0)\|^2 p_t(x_t | x_0) p_0(x_0) dx_t dx_0 + C,
$$

where $C = \int_{x_t} \|\nabla \log p_t(x_t)\|^2 p_t(x_t) dx_t - \int_{x_0} \int_{x_t} \|\nabla \log p_t(x_t | x_0)\|^2 p_t(x_t | x_0) p_0(x_0) dx_t dx_0$ ■

### Visual Description
This is the final slide of the derivation. It summarizes the result by grouping the last two terms into a constant $C$ that does not depend on the score function $s(x_t, t)$. A black square (QED symbol) marks the end of the proof.

---
