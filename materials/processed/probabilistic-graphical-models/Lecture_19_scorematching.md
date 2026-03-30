# Lecture_19_scorematching

Source: `materials/archive/Lecture_19_scorematching.pdf`
Duplicate equivalents: `Lecture_19_scorematching.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 37

## Page 1
### Content
10708
Probabilistic Graphical Models:
Spring 2026

Andrej Risteski
Machine Learning Department

Lecture 19:
Beyond likelihood II: score matching

### Visual Description
Text-only slide.

---

## Page 2
### Content
Recap: Training UGMs using maximum likelihood

Maximum likelihood optimization: maximize the likelihood of the data under the model

$$\max_{\theta} \sum_{\text{samples } x_i} \log p_{\theta}(x_i)$$

The simplest way to maximize a function $f(\theta)$: gradient ascent!

$$\theta_{t+1} = \theta_t + \eta \nabla f(\theta)$$

Need to be able to evaluate
$$\nabla \log p_{\theta}(x)$$

### Visual Description
Text-only slide with a blue highlighted box at the bottom containing the requirement to evaluate the gradient of the log-likelihood.

---

## Page 3
### Content
Recap: Training UGMs using maximum likelihood

For brevity, let us write a UGM as:
$$p_{\theta}(x) \propto \exp(-E_{\theta}(x))$$
where $E_{\theta}(x)$ has some easy to evaluate form.

What is the gradient? Denoting the partition function $Z_{\theta}$, we have:
$$\nabla \log p_{\theta}(x) = -\nabla E_{\theta}(x) - \nabla \log Z_{\theta}$$

$$\nabla_{\theta} \log Z_{\theta} = \frac{1}{Z_{\theta}} \nabla_{\theta} Z_{\theta} = \frac{1}{Z_{\theta}} \int_x \exp(-E_{\theta}(x)) \nabla_{\theta}(-E_{\theta}(x))$$
$$= \mathbb{E}_{p_{\theta}} [-\nabla_{\theta} E_{\theta}(x)]$$

If we could draw samples from $p_{\theta}$, can approximate this with Monte Carlo.

### Visual Description
Text slide with a light orange box at the top defining the UGM form. An arrow points from the expectation formula to a note about Monte Carlo sampling.

---

## Page 4
### Content
Recap: Restricted Boltzmann Machines

The prototypical UGM-based **latent-variable model**.

We denote visible and hidden variables with vectors $\mathbf{v}, \mathbf{h}$ respectively:
* Visible variables $\mathbf{v} \in \{0, 1\}^D$ are connected to hidden variables $\mathbf{h} \in \{0, 1\}^F$.
* Bipartite Structure.

The energy of the joint configuration:
$$E(\mathbf{v}, \mathbf{h}; \theta) = -\sum_{ij} W_{ij} v_i h_j - \sum_i b_i v_i - \sum_j a_j h_j$$
$\theta = \{W, a, b\}$ model parameters.

Probability of the joint configuration is given by the Boltzmann distribution:
$$P_{\theta}(\mathbf{v}, \mathbf{h}) = \frac{1}{Z(\theta)} \exp(-E(\mathbf{v}, \mathbf{h}; \theta)) = \frac{1}{Z(\theta)} \prod_{ij} e^{W_{ij} v_i h_j} \prod_i e^{b_i v_i} \prod_j e^{a_j h_j}$$
$$Z(\theta) = \sum_{\mathbf{h}, \mathbf{v}} \exp(-E(\mathbf{v}, \mathbf{h}; \theta))$$

### Visual Description
The slide includes a diagram of a Restricted Boltzmann Machine (RBM). It shows two layers of nodes: "hidden variables" (top) and "Image visible variables" (bottom). The nodes are connected in a bipartite graph structure where every node in one layer is connected to nodes in the other layer, but no nodes within the same layer are connected.

---

## Page 5
### Content
Recap: continuous-space energy-based models (EBMs)

If the distribution $p_{\theta}(x) \propto \exp(-E_{\theta}(x))$ has as domain $\mathbb{R}^d$, an easy choice is $E_{\theta}$ is a neural net of some kind.

These have scaled up *only very recently* to real-life data, e.g. images.

Figure from (Du, Mordatch ’20)

### Visual Description
The slide features a large grid of small, diverse images (e.g., animals, objects, textures). The caption below the grid reads: "Figure 18: MCMC samples from conditional ImageNet 128x128 models".

---

## Page 6
### Content
Score matching

Can we avoid calculating $\nabla_{\theta} \log Z_{\theta}$ at every step?

**Idea:** we will be fitting instead
$$\min_{\theta} \mathbb{E}_{p_{data}} ||\nabla_x \log p_{\theta}(x) - \nabla_x \log p_{data}(x)||^2$$

The function $\nabla_x \log p_{data}(x) : \mathbb{R}^d \to \mathbb{R}^d$ is called the **score function**.

Figure from https://yang-song.github.io/blog/2021/score/

### Visual Description
The slide contains a plot showing a vector field (represented by small black arrows) overlaid on top of red contour lines. The caption explains: "Score function (the vector field) and density function (contours) of a mixture of two Gaussians."

---

## Page 7
### Content
Score matching

Can we avoid calculating $\nabla_{\theta} \log Z_{\theta}$ at every step?

**Idea:** we will be fitting instead
$$\min_{\theta} \mathbb{E}_{p_{data}} ||\nabla_x \log p_{\theta}(x) - \nabla_x \log p_{data}(x)||^2$$

The function $\nabla_x \log p_{data}(x) : \mathbb{R}^d \to \mathbb{R}^d$ is called the **score function**.

Note that $\nabla_x \log p_{\theta}(x) = \nabla_x (-E_{\theta}(x))$, since $\nabla_x \log Z_{\theta} = 0$

$$\nabla_x \log p_{\theta}(x) = -\nabla_x E_{\theta}(x) - \nabla_x \log Z_{\theta}$$

### Visual Description
Text-only slide. It repeats the core idea from the previous page and adds a mathematical derivation showing why the gradient of the log partition function with respect to $x$ is zero.

---

## Page 8
### Content
Score matching

Can we avoid calculating $\nabla_{\theta} \log Z_{\theta}$ at every step?

**Idea:** we will be fitting instead
$$\min_{\theta} \mathbb{E}_{p_{data}} ||\nabla_x \log p_{\theta}(x) - \nabla_x \log p_{data}(x)||^2$$

The function $\nabla_x \log p_{data}(x) : \mathbb{R}^d \to \mathbb{R}^d$ is called the **score function**.

Note that $\nabla_x \log p_{\theta}(x) = \nabla_x (-E_{\theta}(x))$, since $\nabla_x \log Z_{\theta} = 0$

So, we don’t need to calculate $\nabla_x \log Z_{\theta}$.

But, another problem: how do we calculate $\nabla_x \log p_{data}(x)$?!
(We don’t even know $p_{data}(x)$, we just have samples coming from it.)

### Visual Description
Text-only slide. It adds a final point in a light orange box highlighting the problem of not knowing the true data distribution's score function.

---
## Page 9
### Content
# Score matching

We will rewrite the loss slightly:

$$ \mathbb{E}_{p_{data}} ||\nabla_x \log p_\theta(x) - \nabla_x \log p_{data}(x)||^2 $$
$$ = \mathbb{E}_{p_{data}} ||\nabla_x \log p_\theta(x)||^2 + \mathbb{E}_{p_{data}} ||\nabla_x \log p_{data}(x)||^2 - 2\mathbb{E}_{p_{data}} \langle \nabla_x \log p_\theta(x), \nabla_x \log p_{data}(x) \rangle $$

$$ ||x - y||^2 = \langle x - y, x - y \rangle = \langle x, x \rangle + \langle y, y \rangle - 2\langle x, y \rangle $$

### Visual Description
The slide shows the mathematical expansion of the score matching loss function. A blue box at the bottom contains the standard algebraic identity for the squared norm of a difference between two vectors.

---
## Page 10
### Content
# Score matching

We will rewrite the loss slightly:

$$ \mathbb{E}_{p_{data}} ||\nabla_x \log p_\theta(x) - \nabla_x \log p_{data}(x)||^2 $$
$$ = \mathbb{E}_{p_{data}} ||\nabla_x \log p_\theta(x)||^2 + \mathbb{E}_{p_{data}} ||\nabla_x \log p_{data}(x)||^2 - 2\mathbb{E}_{p_{data}} \langle \nabla_x \log p_\theta(x), \nabla_x \log p_{data}(x) \rangle $$

First term is quadratic in $\nabla_x \log p_\theta(x)$. This is fine!
Second term doesn’t depend on $\theta$. What about third one?

**Main trick: integration by parts (vector version):**
$$ \mathbb{E}_p \langle f(x), \nabla_x \log p(x) \rangle = -\mathbb{E}_p [div f(x)], \text{ where} $$
$$ div f(x) = \sum_i \frac{\partial}{\partial x_i} f_i(x) $$

### Visual Description
The slide continues the derivation from the previous page. It identifies that the first term is manageable and the second term is constant with respect to the parameters. A light orange box highlights the "Main trick," which is a vector version of integration by parts involving the divergence operator.

---
## Page 11
### Content
# Score matching

**Main trick: integration by parts (vector version):**
$$ \mathbb{E}_p \langle f(x), \nabla_x \log p(x) \rangle = -\mathbb{E}_p [div f(x)], \text{ where} $$
$$ div f(x) = \sum_i \frac{\partial}{\partial x_i} f_i(x) $$

**Proof:**
$$ \int_x p(x) \langle \nabla_x \log p(x), f(x) \rangle = \int_x \langle \nabla_x p(x), f(x) \rangle dx $$
$$ = \int_x p(x) \frac{1}{p(x)} \langle \nabla_x p(x), f(x) \rangle dx = \int_x \sum_i \left( \frac{\partial}{\partial x_i} p(x) \right) f_i(x) dx $$

Integrating by parts*, we get: $\int_x \frac{\partial}{\partial x_i} p(x) f_i(x) dx = -\int_x p(x) \frac{\partial}{\partial x_i} f_i(x) dx$

(Assuming $p(x)f_i(x) \to 0$ as $||x|| \to \infty$)

### Visual Description
This slide begins the proof for the integration by parts trick shown in the previous slide. It shows the initial steps of converting the expectation into an integral and then into a sum of partial derivatives. A note at the bottom specifies the boundary condition assumption required for integration by parts.

---
## Page 12
### Content
# Score matching

**Main trick: integration by parts (vector version):**
$$ \mathbb{E}_p \langle f(x), \nabla_x \log p(x) \rangle = -\mathbb{E}_p [div f(x)], \text{ where} $$
$$ div f(x) = \sum_i \frac{\partial}{\partial x_i} f_i(x) $$

**Proof:**
$$ \int_x p(x) \langle \nabla_x \log p(x), f(x) \rangle = \int_x \langle \nabla_x p(x), f(x) \rangle dx $$
$$ = \int_x p(x) \frac{1}{p(x)} \langle \nabla_x p(x), f(x) \rangle dx = \int_x \sum_i \left( \frac{\partial}{\partial x_i} p(x) \right) f_i(x) dx $$
$$ = -\sum_i \int_x p(x) \left( \frac{\partial}{\partial x_i} f_i(x) \right) dx = -\int_x p(x) (div f(x)) dx $$
$$ = -\mathbb{E}_p [div f(x)] $$

### Visual Description
This slide completes the proof started on the previous page, showing how the summation and integral rearrange to result in the negative expectation of the divergence of $f(x)$.

---
## Page 13
### Content
# Score matching

We will rewrite the loss slightly:

$$ \mathbb{E}_{p_{data}} ||\nabla_x \log p_\theta(x) - \nabla_x \log p_{data}(x)||^2 $$
$$ = \mathbb{E}_{p_{data}} ||\nabla_x \log p_\theta(x)||^2 + \mathbb{E}_{p_{data}} ||\nabla_x \log p_{data}(x)||^2 - 2\mathbb{E}_{p_{data}} \langle \nabla_x \log p_\theta(x), \nabla_x \log p_{data}(x) \rangle $$

**Main trick: integration by parts (vector version):**
$$ \mathbb{E}_p \langle f(x), \nabla_x \log p(x) \rangle = -\mathbb{E}_p [div f(x)], \text{ where} $$
$$ div f(x) = \sum_i \frac{\partial}{\partial x_i} f_i(x) $$

### Visual Description
The slide revisits the expanded loss function. A large red "X" is drawn through the second term, $\mathbb{E}_{p_{data}} ||\nabla_x \log p_{data}(x)||^2$, indicating it can be ignored during optimization because it does not depend on $\theta$. The integration by parts trick is shown again at the bottom.

---
## Page 14
### Content
# Score matching

We will rewrite the loss slightly:

$$ \mathbb{E}_{p_{data}} ||\nabla_x \log p_\theta(x) - \nabla_x \log p_{data}(x)||^2 $$
$$ = \mathbb{E}_{p_{data}} ||\nabla_x \log p_\theta(x)||^2 + \mathbb{E}_{p_{data}} ||\nabla_x \log p_{data}(x)||^2 - 2\mathbb{E}_{p_{data}} \langle \nabla_x \log p_\theta(x), \nabla_x \log p_{data}(x) \rangle $$

Integrating by parts, the third term becomes,
$$ -2\mathbb{E}_{p_{data}} [div \nabla_x \log p_\theta(x)] = 2\mathbb{E}_{p_{data}} [Tr(\nabla_x^2 \log p_\theta(x))] $$

**So, the loss can be equivalently written as:**
$$ \mathbb{E}_{p_{data}} ||\nabla_x \log p_\theta(x)||^2 + 2\mathbb{E}_{p_{data}} [Tr(\nabla_x^2 \log p_\theta(x))] $$

### Visual Description
The slide shows the final step of the derivation. By applying integration by parts to the third term of the loss, it is transformed into a term involving the trace of the Hessian of the log-probability. The final simplified loss function is presented in a light orange box.

---
## Page 15
### Content
# Score matching

**So, the loss can be equivalently written as:**
$$ \mathbb{E}_{p_{data}} ||\nabla_x \log p_\theta(x)||^2 + 2\mathbb{E}_{p_{data}} [Tr(\nabla_x^2 \log p_\theta(x))] $$

So, instead of parametrizing $\log p_\theta(x)$ we parametrize $\nabla_x \log p_\theta(x)$, for example as a neural network $s_\theta(x)$.

**The training loss then becomes:**
$$ \frac{1}{N} \sum_{\text{training data } x_i} ||s_\theta(x_i)||^2 + 2 [Tr(Ds_\theta(x_i))] $$

### Visual Description
The slide explains that we can directly parametrize the score function $s_\theta(x)$ using a neural network. It provides the empirical training loss formula. An arrow points from the term $Ds_\theta(x_i)$ to the text "Jacobian of $s_\theta$".

---
## Page 16
### Content
# Score matching

**So, the loss can be equivalently written as:**
$$ \frac{1}{N} \sum_{\text{training data } x_i} ||s_\theta(x_i)||^2 + 2 [Tr(Ds_\theta(x_i))] $$

**Pros:**
* If we parametrize $s_\theta(x)$ as a function which is easy to take gradients of (e.g. a neural network), we can train by just gradient descent.
* No need to calculate expensive partition functions at every step.

**Cons:**
* $tr(Ds_\theta(x))$ requires calculating $d$ entries of $Ds_\theta(x)$ --- i.e. $\Theta(d)$ more expensive than just calculating $\nabla_x \log p_\theta(x)$.

### Visual Description
The slide lists the advantages and disadvantages of score matching. On the bottom right, there is a visual representation of a Jacobian matrix $\nabla_x s_\theta(x)$ with its diagonal elements highlighted in red dashed boxes. Above this matrix, it says "$O(D)$ Backprops!". A caption credits the figure to Stefano Ermon.
## Page 17
### Content
# Sliced score matching

**Main idea:** Consider a vector $a \in \mathbb{R}^d$, and a distribution $p_v$ over $v \in \mathbb{R}^d$, s.t. $\mathbb{E}_{v \sim p_v} vv^T = I_d$. Then:

$$
\begin{aligned}
\mathbb{E}_{v \sim p_v} (v^T a)^2 &= \mathbb{E}_{v \sim p_v} v^T a a^T v \\
&= \mathbb{E}_{v \sim p_v} Tr(v^T a a^T v) = \mathbb{E}_{v \sim p_v} Tr(a a^T v v^T) \quad \text{(cyclic property of trace)} \\
&= Tr(a a^T) = Tr(a^T a) \\
&= \|a\|_2^2
\end{aligned}
$$

**Intuition:** If $v_1, v_2, \dots, v_d$ are orthonormal basis, then $\sum (v^T a)^2 = \|a\|^2$

Orthonormal says $VV^T = I_d$ - Holds in expectation for isotropic distribution

### Visual Description
A 3D scatter plot shows a sphere formed by many blue points. To the right, the mathematical derivation for sliced score matching is shown, with an arrow pointing from the trace operation to the text "cyclic property of trace".

---
## Page 18
### Content
# Sliced score matching

*Sliced score sampling:* score matching loss can be rewritten as

$$
\begin{aligned}
&\text{argmin}_\theta \mathbb{E}_{p_{data}} \|s_\theta(x) - \nabla_x \log p_{data}(x)\|^2 \\
= &\text{argmin}_\theta \mathbb{E}_{x \sim p_{data}} \mathbb{E}_{v \sim p_v} \|(v^T s_\theta(x) - v^T \nabla_x \log p_{data}(x))\|^2
\end{aligned}
$$

*Monte Carlo estimate expectation over v by sampling few random directions!*

*For a particular v, cheap to evaluate/take gradients of. (It’s a 1d problem.)*

### Visual Description
Text-only slide.

---
## Page 19
### Content
# Inference: How to sample?

So, the loss can be equivalently written as:
$$ \frac{1}{N} \sum_{\text{training data } x_i} \|s_\theta(x_i)\|^2 + 2 [tr(Ds_\theta(x_i))] $$

Training’s done, now what - how do we draw samples?!
Unfortunately, still need to run a Markov Chain (albeit **only for inference**).

**Remember Langevin?**
$$ x_{t+1} = \underbrace{x_t - \eta s_\theta(x)}_{\text{Gradient descent}} + \underbrace{\sqrt{2\eta} \xi_k}_{\text{Gaussian noise}} $$
$$ \xi_k \sim N(0, I) $$

**Stationary (equilibrium) distr.**
$$ p(x) = p_\theta(x) $$

Since $s_\theta(x) = \nabla_x \log p_\theta(x)$, hence we are running Langevin with energy function $E_\theta(x) = \nabla_x \log p_\theta(x)$.

### Visual Description
The slide contains text and formulas. The Langevin equation is annotated with curly braces identifying the "Gradient descent" and "Gaussian noise" components.

---
## Page 20
### Content
# Inference: How to sample?

So, the loss can be equivalently written as:
$$ \frac{1}{N} \sum_{\text{training data } x_i} \|s_\theta(x_i)\|^2 + 2 [tr(Ds_\theta(x_i))] $$

Figure from https://yang-song.github.io/blog/2021/score/

### Visual Description
The slide shows two large grids of small, noisy, colorful square images, likely representing early-stage samples or noise from a generative process.

---
## Page 21
### Content
# Practical issues

When applying this to complex data (e.g. images), there are several obstacles to be overcome:

### 1. Poor estimates of gradients in data-poor regions

Want: $\mathbb{E}_{p_{data}} \|s_\theta(x) - \nabla_x \log p_{data}(x)\|^2 \approx \frac{1}{N} \sum_i \|s_\theta(x_i) - \nabla_x \log p_{data}(x_i)\|^2$

Intuitively, if $p_{data}$ doesn't put mass, no incentive for $s_\theta(x)$ to fit $\nabla_x \log p_{data}(x)$

This can bias Langevin into bad regions.

Estimated scores are only accurate in high density regions.
Figure from https://yang-song.github.io/blog/2021/score/

### Visual Description
Three panels illustrate the issue:
1. **Data density**: A heatmap showing two distinct high-density spots.
2. **Data scores**: A vector field showing the true score function, with regions labeled "Accurate" (near density) and "Inaccurate" (far from density).
3. **Estimated scores**: A vector field showing the learned score function, also labeled with "Accurate" and "Inaccurate" regions corresponding to the data density.

---
## Page 22
### Content
# Practical issues

When applying this to complex data (e.g. images), there are several obstacles to be overcome:

### 1. Poor estimates of gradients in data-poor regions

In 1D, can even exactly calculate pdf from score via fundamental thm of calculus:

**MLE (green, indistinguishable from truth) vs. score matching (blue)**

| small separation | large separation |
| :---: | :---: |
| [Plot showing two close peaks where green and blue curves overlap] | [Plot showing two distant peaks where the blue curve fails to match the relative height of the green curve] |

### Visual Description
Two plots compare MLE (green) and score matching (blue) for 1D density estimation. In the "small separation" case, the two methods are nearly identical. In the "large separation" case, score matching fails to correctly estimate the relative heights of the two modes.

---
## Page 23
### Content
# Practical issues

When applying this to complex data (e.g. images), there are several obstacles to be overcome:

### 1. Poor estimates of gradients in data-poor regions

Want: $\mathbb{E}_{p_{data}} \|s_\theta(x) - \nabla_x \log p_{data}(x)\|^2 \approx \frac{1}{N} \sum_i \|s_\theta(x_i) - \nabla_x \log p_{data}(x_i)\|^2$

Intuitively, if $p_{data}$ doesn't put mass, no incentive for $s_\theta(x)$ to fit $\nabla_x \log p_{data}(x)$

*Areas of low-mass are common, e.g. due to multimodality, distributions are (approximately) supported on a low-dimensional manifold, …*

### Visual Description
The slide includes the density heatmap from page 21 and a new 3D scatter plot of a "Swiss roll" manifold, illustrating data that is concentrated on a low-dimensional structure within a higher-dimensional space.

---
## Page 24
### Content
# Practical issues

When applying this to complex data (e.g. images), there are several obstacles to be overcome:

### 2. Drawing samples still requires running Langevin

Langevin can take a long time to mix, when needing to transition between different modes.

**Recall, peaks of p = valleys of $-s_\theta$**

(Bovier ’02,’04) $\Rightarrow$ time to get from A to B (through C) can be exponential!

### Visual Description
A 3D surface plot shows a potential energy landscape with two deep valleys labeled 'A' and 'B', separated by a high ridge labeled 'C'. A point 'x' is shown on the slope. The vertical axis is labeled $-s_\theta(x)$. A horizontal arrow above the plot indicates the difficulty of transitioning from A to B.

---
==End of PDF==
## Page 25
### Content
# Denoising score matching
The fix due to Song-Ermon ’20: **Annealing!**

We will fit several “smoothed” versions of $p_{data}$. Precisely, we will fit:
$$p_{\sigma_i, data}(x) = p_{data}(x) * N(0, \sigma_i) = \int_{\delta} p_{data}(x - \delta) N(x; \delta, \sigma_i) d\delta$$
for several “temperatures” $\sigma_1, \sigma_2, \dots, \sigma_T$.

![Denoising process diagram]
$x \sim p_{data}(x)$
Data distribution

$\xrightarrow{q_\sigma(\tilde{x} | x)}$
Perturbation distribution/kernel

$\tilde{x} \sim q_\sigma(\tilde{x})$
Noise-perturbed data distribution

Figure by Stefano Ermon.

### Visual Description
A diagram showing the process of adding noise to an image. On the left is a clear image of a small dog, labeled as the data distribution $x \sim p_{data}(x)$. An arrow representing the perturbation kernel $q_\sigma(\tilde{x} | x)$ points to the right, where a noisy, pixelated version of the same image is shown, labeled as the noise-perturbed data distribution $\tilde{x} \sim q_\sigma(\tilde{x})$.

---
## Page 26
### Content
# Denoising score matching
The fix due to Song-Ermon ’20: **Annealing!**

We will fit several “smoothed” versions of $p_{data}$. Precisely, we will fit:
$$p_{\sigma_i, data}(x) = p_{data}(x) * N(0, \sigma_i) = \int_{\delta} p_{data}(x - \delta) N(x; \delta, \sigma_i) d\delta$$
for several “temperatures” $\sigma_1, \sigma_2, \dots, \sigma_T$.

$$\sigma_1 > \sigma_2 > \dots > \sigma_{L-1} > \sigma_L$$

![Sequence of smoothed distributions]

Figure by Stefano Ermon.

### Visual Description
Four heatmaps are arranged horizontally, showing a probability distribution becoming increasingly concentrated and less "smoothed" from left to right. This sequence corresponds to the decreasing values of $\sigma$ listed above them, illustrating the annealing process.

---
## Page 27
### Content
# Denoising score matching
The fix due to Song-Ermon ’20: **Annealing!**

We will fit several “smoothed” versions of $p_{data}$. Precisely, we will fit:
$$p_{\sigma_i, data}(x) = p_{data}(x) * N(0, \sigma_i) = \int_{\delta} p_{data}(x - \delta) N(x; \delta, \sigma_i) d\delta$$
for several “temperatures” $\sigma_1, \sigma_2, \dots, \sigma_T$.

![Multi-layer visualization of density and scores]
(Red encodes error)
$\leftarrow$ Worse data quality!
Better score estimation! $\rightarrow$

Figure by Stefano Ermon.

### Visual Description
A complex 3D-style stack of diagrams. The front layers show "Data density" and "Perturbed density" as heatmaps. Behind these are layers for "Data scores", "Perturbed scores", and "Estimated scores" represented as vector fields. Red highlights in the vector fields indicate areas of error. Arrows at the bottom indicate that moving towards higher noise (front) results in worse data quality but better score estimation.

---
## Page 28
### Content
# Denoising score matching
The fix due to Song-Ermon ’20: **Annealing!**

We will fit several “smoothed” versions of $p_{data}$. Precisely, we will fit:
$$p_{\sigma_i, data}(x) = p_{data}(x) * N(0, \sigma_i) = \int_{\delta} p_{data}(x - \delta) N(x; \delta, \sigma_i) d\delta$$
for several “temperatures” $\sigma_1, \sigma_2, \dots, \sigma_T$.

Why this instead of “temperature annealing”? $p(x) \propto \exp\left(\frac{f(x)}{\tau}\right)$
We only can access samples from $p_{data}$ (not the unnormalized pdf as in temperature annealing).

To draw samples from $p_{\sigma_i, data}$:
- take a sample $x$ from $p_{data}$,
- a sample $z$ from $N(0, \sigma_i)$,
- output $x' = x + z$.

### Visual Description
Text-only slide.

---
## Page 29
### Content
# Denoising score matching
The fix due to Song-Ermon ’20: **Annealing!**

We will fit several “smoothed” versions of $p_{data}$. Precisely, we will fit:
$$p_{\sigma_i, data}(x) = p_{data}(x) * N(0, \sigma_i) = \int_{\delta} p_{data}(x - \delta) N(x; \delta, \sigma_i) d\delta$$
for several “temperatures” $\sigma_1, \sigma_2, \dots, \sigma_T$.

The new loss:
$$\text{argmin}_\theta \sum_i \lambda(\sigma_i) \mathbb{E}_{x \sim p_{\sigma_i, data}} ||s_\theta(x, i) - \nabla_x \log p_{\sigma_i, data}(x)||^2$$
$\uparrow$
Relative “weighting” of different noise levels.

### Visual Description
Text-only slide with a mathematical formula and an arrow pointing to the $\lambda(\sigma_i)$ term.

---
## Page 30
### Content
# Denoising score matching
The fix due to Song-Ermon ’20: **Annealing!**

How does this help?
- Helps w data paucity: The smoothed distribution is less peaky (less “low-mass” areas)

![Perturbed density and scores comparison]
Estimated scores are accurate everywhere for the noise-perturbed data distribution due to reduced low data density regions.

Figure from https://yang-song.github.io/blog/2021/score/

### Visual Description
Three panels showing:
1. **Perturbed density**: A smooth, broad heatmap.
2. **Perturbed scores**: A vector field corresponding to the density, labeled "Accurate".
3. **Estimated scores**: A vector field produced by the model, also labeled "Accurate", showing it closely matches the perturbed scores.

---
## Page 31
### Content
# Denoising score matching
The fix due to Song-Ermon ’20: **Annealing!**

How does this help?
- Helps with sampling: smoothed distributions are less peaky / easier to sample.

![3D visualization of annealed distributions]

### Visual Description
A 3D visualization showing a probability distribution at three different levels of smoothing. The bottom level is highly multimodal with sharp peaks. The middle level is smoother, and the top level is a single, broad, smooth peak. Vertical arrows indicate the transition between these levels (annealing), and horizontal arrows suggest sampling or movement within a level.

---
## Page 32
### Content
# Denoising score matching

Loss is actually **simpler** (which helps with scaling to large models):

Let $q_\sigma(\cdot | \tilde{x})$ be a Gaussian w mean $\tilde{x}$ and variance $\sigma^2 I$. (Describes distribution of “noised” version of $\tilde{x}$.)

**Claim:**
$$\text{argmin}_\theta \mathbb{E}_{x \sim p_{\sigma, data}} ||s_\theta(x) - \nabla_x \log p_{\sigma, data}(x)||^2 = \text{argmin}_\theta \mathbb{E}_{\tilde{x} \sim p_{data}} \mathbb{E}_{x \sim q_\sigma(\cdot | \tilde{x})} ||s_\theta(x) - \nabla_x \log q_\sigma(x | \tilde{x})||^2$$

Since $q_\sigma(\cdot | \tilde{x})$ is a Gaussian density, $\log q_\sigma(\cdot | \tilde{x})$ is quadratic:
$$\log q_\sigma(x | \tilde{x}) = -\frac{1}{2\sigma^2} ||x - \tilde{x}||^2 + const$$

Hence, $\nabla_x \log q_\sigma(x | \tilde{x})$ is explicit: $\nabla_x \log q_\sigma(x | \tilde{x}) = \frac{1}{\sigma^2} (\tilde{x} - x)$

### Visual Description
Text-only slide.
## Page 33
### Content
# Denoising score matching

Loss is actually **simpler** (which helps with scaling to large models):

Let $q_\sigma(\cdot | \tilde{x})$ be a Gaussian w mean $\tilde{x}$ and variance $\sigma^2 I$. (Describes distribution of "noised" version of $\tilde{x}$.)

**Claim:**
$$ \text{argmin}_\theta \mathbb{E}_{x \sim p_{\sigma, data}} ||s_\theta(x) - \nabla_x \log p_{\sigma, data}(x)||^2 $$
$$ = \text{argmin}_\theta \mathbb{E}_{\tilde{x} \sim p_{data}} \mathbb{E}_{x \sim q_\sigma(\cdot | \tilde{x})} ||s_\theta(x) - \nabla_x \log q_\sigma(x | \tilde{x})||^2 $$

Hence, $s_\theta(x)$ tries to "denoise", by fitting the direction $\tilde{x} - x$.

### Visual Description
The slide contains text and a mathematical claim highlighted in a light orange rounded box. The claim shows the equivalence between two objective functions for score matching.

---

## Page 34
### Content
# Denoising score matching

**Claim:**
$$ \text{argmin}_\theta \mathbb{E}_{x \sim p_{\sigma, data}} ||s_\theta(x) - \nabla_x \log p_{\sigma, data}(x)||^2 $$
$$ = \text{argmin}_\theta \mathbb{E}_{\tilde{x} \sim p_{data}} \mathbb{E}_{x \sim q_\sigma(\cdot | \tilde{x})} ||s_\theta(x) - \nabla_x \log q_\sigma(x | \tilde{x})||^2 $$

**Proof:**
$$ \text{argmin}_\theta \mathbb{E}_{x \sim p_{\sigma, data}} ||s_\theta(x) - \nabla_x \log p_{\sigma, data}(x)||^2 $$
$$ = \text{argmin}_\theta \mathbb{E}_{x \sim p_{\sigma, data}} ||s_\theta(x)||^2 - 2 \mathbb{E}_{x \sim p_{\sigma, data}} \langle s_\theta(x), \nabla_x \log p_{\sigma, data}(x) \rangle $$

We will rewrite last term: $\mathbb{E}_{x \sim p_{\sigma, data}} \langle s_\theta(x), \nabla_x \log p_{\sigma, data}(x) \rangle$
$$ = \int_x \langle s_\theta(x), \nabla_x \log p_{\sigma, data}(x) \rangle p_{\sigma, data}(x) dx = \int_x \int_{\tilde{x}} \langle s_\theta(x), \nabla_x (p_{data}(\tilde{x}) q_\sigma(x | \tilde{x})) \rangle $$
$$ = \int_x \int_{\tilde{x}} \langle s_\theta(x), p_{data}(\tilde{x}) \nabla_x q_\sigma(x | \tilde{x}) \rangle = \int_x \int_{\tilde{x}} p_{data}(\tilde{x}) \langle s_\theta(x), \nabla_x \log q_\sigma(x | \tilde{x}) \rangle q_\sigma(x | \tilde{x}) $$
$$ = \mathbb{E}_{\tilde{x} \sim p_{data}} \mathbb{E}_{x \sim q_\sigma(\cdot | \tilde{x})} \langle s_\theta(x), \nabla_x \log q_\sigma(x | \tilde{x}) \rangle $$

### Visual Description
The slide presents a mathematical proof for the claim introduced on the previous page. It uses integral notation and expectation operators to derive the equivalence of the cross-term in the expansion of the L2 loss.

---

## Page 35
### Content
# Denoising score matching

**Claim:**
$$ \text{argmin}_\theta \mathbb{E}_{x \sim p_{\sigma, data}} ||s_\theta(x) - \nabla_x \log p_{\sigma, data}(x)||^2 $$
$$ = \text{argmin}_\theta \mathbb{E}_{\tilde{x} \sim p_{data}} \mathbb{E}_{x \sim q_\sigma(\cdot | \tilde{x})} ||s_\theta(x) - \nabla_x \log q_\sigma(x | \tilde{x})||^2 $$

**Proof:**
$$ \text{argmin}_\theta \mathbb{E}_{x \sim p_{\sigma, data}} ||s_\theta(x) - \nabla_x \log p_{\sigma, data}(x)||^2 $$
$$ = \text{argmin}_\theta \mathbb{E}_{x \sim p_{\sigma, data}} ||s_\theta(x)||^2 - 2 \mathbb{E}_{x \sim p_{\sigma, data}} \langle s_\theta(x), \nabla_x \log p_{\sigma, data}(x) \rangle $$

Substitute $\mathbb{E}_{x \sim p_{\sigma, data}} \to \mathbb{E}_{\tilde{x} \sim p_{data}} \mathbb{E}_{x \sim q_\sigma(\cdot | \tilde{x})}$ and $\nabla_x \log p_{\sigma, data}(x) \to \nabla_x \log q_\sigma(x | \tilde{x})$

$$ = \text{argmin}_\theta \mathbb{E}_{\tilde{x} \sim p_{data}} \mathbb{E}_{x \sim q_\sigma(\cdot | \tilde{x})} (||s_\theta(x)||^2 - 2 \langle s_\theta(x), \nabla_x \log q_\sigma(x | \tilde{x}) \rangle) $$
$$ = \text{argmin}_\theta \mathbb{E}_{\tilde{x} \sim p_{data}} \mathbb{E}_{x \sim q_\sigma(\cdot | \tilde{x})} ||s_\theta(x) - \nabla_x \log q_\sigma(x | \tilde{x})||^2 $$
$\leftarrow$ Completing the square

### Visual Description
This slide completes the proof started on the previous page. It shows the final substitution and the "completing the square" step to arrive at the denoising score matching objective. An arrow points to the final equation with the text "Completing the square".

---

## Page 36
### Content
# Sampling from DSM estimator

Go through temperatures from high to low;
Use convergence point of prior temperature as a warm start.

**Algorithm 1** Annealed Langevin dynamics.
**Require:** $\{\sigma_i\}_{i=1}^L, \epsilon, T$.
1: Initialize $\tilde{\mathbf{x}}_0$
2: **for** $i \leftarrow 1$ **to** $L$ **do**
3: $\quad \alpha_i \leftarrow \epsilon \cdot \sigma_i^2 / \sigma_L^2 \quad \triangleright \alpha_i$ is the step size.
4: $\quad$ **for** $t \leftarrow 1$ **to** $T$ **do**
5: $\quad \quad$ Draw $\mathbf{z}_t \sim \mathcal{N}(0, I)$
6: $\quad \quad \tilde{\mathbf{x}}_t \leftarrow \tilde{\mathbf{x}}_{t-1} + \frac{\alpha_i}{2} \mathbf{s}_\theta(\tilde{\mathbf{x}}_{t-1}, \sigma_i) + \sqrt{\alpha_i} \mathbf{z}_t$
7: $\quad$ **end for**
8: $\quad \tilde{\mathbf{x}}_0 \leftarrow \tilde{\mathbf{x}}_T$
9: **end for**
**return** $\tilde{\mathbf{x}}_T$

Figure from Song-Ermon ‘19

### Visual Description
The slide presents the "Annealed Langevin dynamics" algorithm in pseudocode format. It includes nested loops for iterating through noise levels (temperatures) and time steps, with a Langevin update step inside.

---

## Page 37
### Content
# Sampling from DSM estimator

(a) i.i.d samples
(b) Langevin dynamics samples
(c) Annealed Langevin dynamics samples

![Three scatter plots showing (a) i.i.d samples, (b) Langevin dynamics samples, and (c) Annealed Langevin dynamics samples. Plot (b) shows a significant imbalance between the two clusters compared to (a) and (c).](screenshot)

**Figure 3:** Samples from a mixture of Gaussian with different methods. (a) Exact sampling. (b) Sampling using Langevin dynamics with the exact scores. (c) Sampling using annealed Langevin dynamics with the exact scores. Clearly Langevin dynamics estimate the relative weights between the two modes incorrectly, while annealed Langevin dynamics recover the relative weights faithfully.

Figure from Song-Ermon ‘19

### Visual Description
The slide contains three scatter plots labeled (a), (b), and (c), each showing samples from a two-component Gaussian mixture. 
- (a) "i.i.d samples" shows two balanced clusters of points.
- (b) "Langevin dynamics samples" shows two clusters, but one is much sparser than the other, indicating poor mode coverage.
- (c) "Annealed Langevin dynamics samples" shows two balanced clusters, similar to the ground truth in (a).
A caption below explains that annealed Langevin dynamics better recovers the relative weights of the modes.

---
