# lecture-notes-24-115_Reverse_diffusion_1

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/lecture-notes-24-115_Reverse_diffusion_1.pdf`
Duplicate equivalents: `lecture-notes-24-115_Reverse_diffusion_1.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 13

## Page 1
### Content
# Reverse Diffusion

**Barnabas Poczos**
**bapoczos@cs.cmu.edu**

Convex Optimization Slide 1
Carnegie Mellon University

### Visual Description
Title slide with the main title "Reverse Diffusion" in large red font. The author's name and email are in blue below. The footer contains "Convex Optimization Slide 1" and the "Carnegie Mellon University" logo.

---

## Page 2
### Content
# Paper to Read

### Diffusion Schroedinger Bridge with Applications to Score-Based Generative Modeling
**Valentin De Bortoli, James Thornton, Jeremy Heng, and Arnaud Doucet**

https://arxiv.org/abs/2106.01357

Convex Optimization Slide 2
Carnegie Mellon University

### Visual Description
Text-only slide providing a reference to a research paper. The title is in blue, the paper title in red, and the authors and link in blue and black respectively.

---

## Page 3
### Content
# Discrete-Time Markov Chains

**Consider:**
* a **data distribution** with positive density $p_{\text{data}}$ on $\mathbb{R}^d$,
* and a Markov chain with initial density $p_0 = p_{\text{data}}$ on $\mathbb{R}^d$ evolving according to the **forward transition** densities $p_{k+1|k}$ for $k \in \{0, \dots, N - 1\}$.

**[Forward: transition from data to noise]**

We assume that the **forward transition probabilities** are given by:
$$p_{k+1|k} (x_{k+1} \mid x_k) = \mathcal{N} (x_{k+1}; x_k + \gamma_{k+1} f(x_k), 2\gamma_{k+1} \mathbf{I}),$$
with drift $f : \mathbb{R}^d \to \mathbb{R}^d$ and stepsize $\gamma_{k+1} > 0$.

Convex Optimization Slide 3
Carnegie Mellon University

### Visual Description
Text and math slide defining the setup for discrete-time Markov chains in the context of forward transitions from data to noise.

---

## Page 4
### Content
# Our Goal: Time Reversal

$$p_{k+1|k} (x_{k+1} \mid x_k) = \mathcal{N} (x_{k+1}; x_k + \gamma_{k+1} f(x_k), 2\gamma_{k+1} \mathbf{I}),$$

**Our goals:**
* Calculate the distribution of time reversal process: $p_{k|k+1} (x_k \mid x_{k+1})$
* Show that this reverse distribution is Gaussian (under some conditions)
* Show that the score function will appear in the mean of the reverse distribution.

$$p_{k|k+1} (x_k \mid x_{k+1}) \approx \mathcal{N} (x_k; x_{k+1} - \gamma_{k+1} f(x_{k+1}) + 2\gamma_{k+1} \nabla \log p_{k+1} (x_{k+1}), 2\gamma_{k+1} \mathbf{I})$$

Convex Optimization Slide 4
Carnegie Mellon University

### Visual Description
Text and math slide outlining the objectives for time reversal, showing the target Gaussian approximation for the reverse distribution.

---

## Page 5
### Content
# Joint Density and Backward Decomposition

**Joint density:**
For any $x_{0:N} = \{x_k\}_{k=0}^N \in \mathcal{X} = (\mathbb{R}^d)^{N+1}$, the joint density can be written as
$$p(x_{0:N}) = p_0(x_0) \prod_{k=0}^{N-1} p_{k+1|k} (x_{k+1} \mid x_k).$$

**This joint density also admits the backward decomposition:**
$$p(x_{0:N}) = p_N(x_N) \prod_{k=0}^{N-1} p_{k|k+1} (x_k \mid x_{k+1}), \text{ with } p_{k|k+1} (x_k \mid x_{k+1}) = \frac{p_k(x_k) p_{k+1|k} (x_{k+1} \mid x_k)}{p_{k+1}(x_{k+1})}$$

where $p_k(x_k) = \int p_{k|k-1} (x_k \mid x_{k-1}) p_{k-1}(x_{k-1}) \text{d}x_{k-1}$ is the marginal density at step $k \ge 1$.

Convex Optimization Slide 5
Carnegie Mellon University

### Visual Description
Text and math slide explaining the joint density of the process and its decomposition into forward and backward components.

---

## Page 6
### Content
# The Forward Transition

**The forward transition density is Gaussian:**
$$p_{k+1|k} (x_{k+1} \mid x_k) = \mathcal{N} (x_{k+1}; x_k + \gamma_{k+1} f(x_k), 2\gamma_{k+1} \mathbf{I}),$$
$$= c \exp \left( -\frac{1}{4\gamma_{k+1}} \|x_{k+1} - \mu_k\|^2 \right) \text{ where } \mu_k = x_k + \gamma_{k+1} f(x_k)$$
with drift $f : \mathbb{R}^d \to \mathbb{R}^d$ and stepsize $\gamma_{k+1} > 0$.

Convex Optimization Slide 6
Carnegie Mellon University

### Visual Description
Text and math slide detailing the Gaussian form of the forward transition density.

---

## Page 7
### Content
# Approximate Reverse-Time Sampling

**Forward transition:**
$$p_{k+1|k} (x_{k+1} \mid x_k) = c \exp \left( -\frac{1}{4\gamma_{k+1}} \|x_{k+1} - \mu_k\|^2 \right) \text{ where } \mu_k = x_k + \gamma_{k+1} f(x_k)$$

**Backward transition:**
$$p_{k|k+1} (x_k \mid x_{k+1}) = \frac{p_k(x_k) p_{k+1|k} (x_{k+1} \mid x_k)}{p_{k+1}(x_{k+1})}$$

**Therefore,**
$$p_{k|k+1} (x_k \mid x_{k+1}) = \frac{p_k(x_k) p_{k+1|k} (x_{k+1} \mid x_k)}{p_{k+1}(x_{k+1})}$$
$$= p_{k+1|k} (x_{k+1} \mid x_k) \exp [\log p_k(x_k) - \log p_{k+1}(x_{k+1})]$$
$$= c \exp \left( -\frac{1}{4\gamma_{k+1}} \|x_{k+1} - \mu_k\|^2 \right) \exp [\log p_k(x_k) - \log p_{k+1}(x_{k+1})]$$
where $\mu_k = x_k + \gamma_{k+1} f(x_k)$

Convex Optimization Slide 7
Carnegie Mellon University

### Visual Description
Text and math slide deriving the expression for the backward transition density using the forward transition and marginal densities.

---

## Page 8
### Content
# Approximate Reverse-Time Sampling

We will use the approximation: $p_k \approx p_{k+1}$.

**Therefore,**
$$p_{k|k+1} (x_k \mid x_{k+1}) = c \exp \left( -\frac{1}{4\gamma_{k+1}} \|x_{k+1} - \mu_k\|^2 \right) \exp [\log p_k(x_k) - \log p_{k+1}(x_{k+1})]$$
$$\approx c \exp \left( -\frac{1}{4\gamma_{k+1}} \|x_{k+1} - \mu_k\|^2 \right) \exp [\log p_{k+1}(x_k) - \log p_{k+1}(x_{k+1})]$$

**Using Taylor series:**
$$\log p_{k+1}(x_k) \approx \log p_{k+1}(x_{k+1}) + \nabla \log p_{k+1}(x_{k+1})^\top (x_k - x_{k+1})$$

Convex Optimization Slide 8
Carnegie Mellon University

### Visual Description
Text and math slide showing the approximation steps for reverse-time sampling, including the use of a Taylor series expansion for the log-density.

---
## Page 9
### Content
# Approximate Reverse-Time Sampling

**Since,**
$$\log p_{k+1}(x_k) \approx \log p_{k+1}(x_{k+1}) + \nabla \log p_{k+1}(x_{k+1})^\top (x_k - x_{k+1})$$

**Therefore,**
$$p_{k|k+1}(x_k | x_{k+1}) \approx c \exp \left( -\frac{1}{4\gamma_{k+1}} \|x_{k+1} - \mu_k\|^2 \right) \exp \left[ \log p_{k+1}(x_k) - \log p_{k+1}(x_{k+1}) \right]$$
$$\approx c \exp \left( -\frac{1}{4\gamma_{k+1}} \|x_{k+1} - \mu_k\|^2 \right) \exp \left[ \log p_{k+1}(x_{k+1}) + \nabla \log p_{k+1}(x_{k+1})^\top (x_k - x_{k+1}) - \log p_{k+1}(x_{k+1}) \right]$$
$$\approx c \exp \left( -\frac{1}{4\gamma_{k+1}} \|x_{k+1} - \mu_k\|^2 + \log p_{k+1}(x_{k+1}) + \nabla \log p_{k+1}(x_{k+1})^\top (x_k - x_{k+1}) - \log p_{k+1}(x_{k+1}) \right)$$
$$\approx c \exp \left( -\frac{1}{4\gamma_{k+1}} \|x_{k+1} - \mu_k\|^2 + \nabla \log p_{k+1}(x_{k+1})^\top x_k + d \right)$$
where $c, d$ are constants that don't depend on $x_k$
$$\approx c \exp \left( -\frac{1}{4\gamma_{k+1}} \|x_{k+1} - \mu_k\|^2 + \nabla \log p_{k+1}(x_{k+1})^\top x_k \right) \text{ using a different } c$$

Convex Optimization Slide 9
Carnegie Mellon University

### Visual Description
Text-only slide. It contains a series of mathematical derivations for approximate reverse-time sampling, starting from a first-order Taylor expansion of the log-density.

---
## Page 10
### Content
# Approximate Reverse-Time Sampling

**We know**
$$p_{k|k+1}(x_k | x_{k+1}) \approx c \exp \left( -\frac{1}{4\gamma_{k+1}} \|x_{k+1} - \mu_k\|^2 + \nabla \log p_{k+1}(x_{k+1})^\top x_k \right)$$
where $\mu_k = x_k + \gamma_{k+1} f(x_k)$

**Therefore,**
$$p_{k|k+1}(x_k | x_{k+1}) \approx c \exp \left( -\frac{1}{4\gamma_{k+1}} (\|x_{k+1}\|^2 + \|\mu_k\|^2 - 2x_{k+1}^\top \mu_k - 4\gamma_{k+1} \nabla \log p_{k+1}(x_{k+1})^\top x_k) \right)$$
$$= c \exp \left( -\frac{1}{4\gamma_{k+1}} (\|\mu_k\|^2 - 2x_{k+1}^\top \mu_k - 4\gamma_{k+1} \nabla \log p_{k+1}(x_{k+1})^\top x_k) \right)$$
using a different $c$ since $\|x_{k+1}\|^2$ does not depend on $x_k$.
$$= c \exp \left( -\frac{1}{4\gamma_{k+1}} (\|x_k + \gamma_{k+1} f(x_k)\|^2 - 2x_{k+1}^\top (x_k + \gamma_{k+1} f(x_k)) - 4\gamma_{k+1} \nabla \log p_{k+1}(x_{k+1})^\top x_k) \right)$$

We will use the approximation: $f(x_k) \approx f(x_{k+1})$.
$$\approx c \exp \left( -\frac{1}{4\gamma_{k+1}} (\|x_k + \gamma_{k+1} f(x_{k+1})\|^2 - 2x_{k+1}^\top (x_k + \gamma_{k+1} f(x_{k+1})) - 4\gamma_{k+1} \nabla \log p_{k+1}(x_{k+1})^\top x_k) \right)$$

Convex Optimization Slide 10
Carnegie Mellon University

### Visual Description
Text-only slide. It continues the mathematical derivation from the previous page, substituting the definition of $\mu_k$ and applying an approximation for the function $f$.

---
## Page 11
### Content
# Approximate Reverse-Time Sampling

**We know**
$$p_{k|k+1}(x_k | x_{k+1}) \approx c \exp \left( -\frac{1}{4\gamma_{k+1}} (\|x_k + \gamma_{k+1} f(x_{k+1})\|^2 - 2x_{k+1}^\top (x_k + \gamma_{k+1} f(x_{k+1})) - 4\gamma_{k+1} \nabla \log p_{k+1}(x_{k+1})^\top x_k) \right)$$

**Therefore,**
$$p_{k|k+1}(x_k | x_{k+1}) \approx$$
$$= c \exp \left( -\frac{1}{4\gamma_{k+1}} (\|x_k\|^2 + 2\gamma_{k+1} f(x_{k+1})^\top x_k - 2x_{k+1}^\top x_k - 4\gamma_{k+1} \nabla \log p_{k+1}(x_{k+1})^\top x_k) \right)$$
using a different $c$ and ignoring the terms that only depend on $x_{k+1}$ but not on $x_k$.
$$= c \exp \left( -\frac{1}{4\gamma_{k+1}} \|x_k + \gamma_{k+1} f(x_{k+1}) - x_{k+1} - 2\gamma_{k+1} \nabla \log p_{k+1}(x_{k+1})\|^2 \right)$$
using a different $c$ and ignoring the terms that only depend on $x_{k+1}$ but not on $x_k$.

Convex Optimization Slide 11
Carnegie Mellon University

### Visual Description
Text-only slide. It continues the derivation by expanding the square and completing the square again to identify a Gaussian form.

---
## Page 12
### Content
# Approximate Reverse-Time Sampling

**We know**
$$p_{k|k+1}(x_k | x_{k+1}) \approx c \exp \left( -\frac{1}{4\gamma_{k+1}} \|x_k + \gamma_{k+1} f(x_{k+1}) - x_{k+1} - 2\gamma_{k+1} \nabla \log p_{k+1}(x_{k+1})\|^2 \right)$$

**Therefore,**
$$p_{k|k+1}(x_k | x_{k+1}) \approx \mathcal{N}(x_k; x_{k+1} - \gamma_{k+1} f(x_{k+1}) + 2\gamma_{k+1} \nabla \log p_{k+1}(x_{k+1}), 2\gamma_{k+1} \mathbf{I})$$

**We can conclude that the backward transition is approximately also Gaussian**

In practice, the approximation holds if $\|x_{k+1} - x_k\|$ is small which is ensured by choosing $\gamma_{k+1}$ small enough.

Although $\nabla \log p_{k+1}$ is not available, one may obtain an approximation using denoising scorematching methods (Hyvärinen and Dayan, 2005; Vincent, 2011; Song et al., 2021).

Convex Optimization Slide 12
Carnegie Mellon University

### Visual Description
Text-only slide. It concludes the derivation by showing that the backward transition is approximately Gaussian and discusses the practical conditions and methods for approximating the score function.

---
## Page 13
### Content
# Thanks for your Attention! ☺

Convex Optimization Slide 13
Carnegie Mellon University

### Visual Description
Text-only slide. A simple concluding slide with a "Thanks for your Attention!" message and a smiley face icon in the center.
