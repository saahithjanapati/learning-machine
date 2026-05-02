# lecture-notes-20-100_Intro_to_Denoising_Diffusion_1

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/lecture-notes-20-100_Intro_to_Denoising_Diffusion_1.pdf`
Duplicate equivalents: `lecture-notes-20-100_Intro_to_Denoising_Diffusion_1.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `MIXED`
Pages: 89

## Page 1
### Content
# Introduction to Denoising Diffusion
Barnabás Póczos
### Visual Description
The slide has a large red rectangular block on the top half and a black rectangular block on the bottom half. The title "Introduction to Denoising Diffusion" is written in white text within the black block. The author's name, "Barnabás Póczos", is written in black text below the blocks on a white background.

---
## Page 2
### Content
# How to Draw Anything
[ https://andys.page/posts/how-to-draw/ ]
### Visual Description
The slide shows a "before and after" comparison. On the left is a crude, hand-drawn sketch of a futuristic city with a mountain and a spaceship. On the right is a highly detailed, professional-looking digital painting of a similar scene, featuring a post-apocalyptic Seattle skyline with the Space Needle and a large hovering spaceship. A blue arrow points from the sketch to the finished painting.

---
## Page 3
### Content
# How to Draw Anything
[ https://andys.page/posts/how-to-draw/ ]

Digital Matte painting. Hyper detailed. City in ruins. Post-apocalyptic, crumbling buildings. Science fiction. Seattle skyline. Star Wars Imperial Star Destroyer hovers. Birds fly in the distance. Golden hour, dusk. Beautiful sky at sunset. High quality digital art. Hyper realistic.
### Visual Description
This slide illustrates the concept of text-to-image generation. On the left is a text prompt describing a scene in detail. A blue arrow points from this text to the same high-quality digital painting of a futuristic, ruined Seattle seen on the previous page.

---
## Page 4
### Content
# Cathedral of Learning
Carnegie Mellon University
### Visual Description
The slide features a large, AI-generated image of a post-apocalyptic city. In the background, a tall, gothic-style tower resembling the Cathedral of Learning stands among other skyscrapers. In the foreground, there are large, weathered mechanical structures or vehicles. The sky is cloudy with birds or debris flying. The Carnegie Mellon University logo is in the bottom right corner.

---
## Page 5
### Content
# Midjourney Showcase
* https://www.midjourney.com/showcase/recent/
* https://prompthero.com/midjourney-prompts

Carnegie Mellon University
### Visual Description
The slide displays three diverse AI-generated images from Midjourney. 
1. Left: A vertical composition of a surreal library where stacks of books form a path leading up into a swirling, starry cosmic void.
2. Center: A humanoid figure in intricate, glowing purple and blue armor with large feathered wings.
3. Right: A close-up portrait of a cat in a steampunk style, wearing elaborate brass goggles and mechanical headgear.
The Carnegie Mellon University logo is in the bottom right corner.

---
## Page 6
### Content
# Music Video
[ https://www.youtube.com/watch?v=0fDJXmqdN-A ]
### Visual Description
The slide shows a screenshot from a music video. The image is a colorful, stylized digital painting of a cozy house at night, surrounded by glowing plants and under a vibrant, starry sky. Large white text overlaid on the image reads "AI MADE THIS".

---
## Page 7
### Content
# Stable Diffusion in Blender by Ben
[ https://github.com/benrugg/AI-Render ]
### Visual Description
The slide shows a screenshot of the Blender 3D software interface. It demonstrates a tool called "AI-Render". On the left side of the interface is a simple 3D model of three spheres on sticks in a pot. On the right side, a panel shows a high-quality AI-generated image of realistic pink tulips in a white pot, based on the simple 3D geometry and a text prompt.

---
## Page 8
### Content
# Mapping on 3D Model
[ https://www.artstation.com/artwork/5B2gmz ]

“I mapped the Midjourney concept image onto a half sphere deformed into an egg shape. I then relaxed the UVs to avoid stretching at the edges and added a symmetry modifier. Next was turbosmooth and displacement, which I pulled out of Knald, again based on the original image. Final renders are in Toolbag 4.”
### Visual Description
The slide features a high-quality 3D render of an ornate, metallic, egg-shaped object with glowing green highlights and intricate symmetrical patterns. The object looks like a piece of alien technology or a decorative artifact. The background is dark and blurred, showing other similar objects. Below the image is a quote describing the technical process of using an AI-generated image as a basis for 3D modeling and rendering.
## Page 9
### Content
# Denoising Diffusion Models

Slide 9
Carnegie Mellon University

### Visual Description
Text-only slide.

---
## Page 10
### Content
# References

* Ho et al, **Denoising Diffusion Probabilistic Models**, 2020, https://arxiv.org/abs/2006.11239
* Sohl-Dickstein et al, **Deep Unsupervised Learning using Nonequilibrium Thermodynamics**, 2015, https://arxiv.org/abs/1503.03585

Slide 10
Carnegie Mellon University

### Visual Description
Text-only slide.

---
## Page 11
### Content
# Denoising Diffusion Models

**Goal:**
Given a data set, generate mode data points from the distribution of the data set

* **Applications:**
    * Image synthesis
    * Video synthesis
    * Music synthesis
    * Molecule generation
    * Galaxy generation and astro symulations
    * ...

Slide 11
Carnegie Mellon University

### Visual Description
Text-only slide.

---
## Page 12
### Content
# Generative Models

We will discuss **diffusion** based generative models.

**Other generative models:**
* Generative adversarial networks (GANs),
* Autoregressive models,
* Flow based generative models,
* Variational autoencoders (VAEs)

Slide 12
Carnegie Mellon University

### Visual Description
Text-only slide.

---
## Page 13
### Content
# Main Ideas of Denoising Diffusion Models

Slide 13
Carnegie Mellon University

### Visual Description
Text-only slide.

---
## Page 14
### Content
# Multivariate Gaussian

$$\mathbf{x} \in \mathbb{R}^d, \boldsymbol{\mu} \in \mathbb{R}^d, \boldsymbol{\Sigma} \in \mathbb{R}^{d \times d}$$

$$\mathcal{N}(\mathbf{x}; \boldsymbol{\mu}, \boldsymbol{\Sigma}) = \frac{1}{\sqrt{|2\pi\boldsymbol{\Sigma}|}} \exp \left\{ -\frac{1}{2} (\mathbf{x} - \boldsymbol{\mu})^T \boldsymbol{\Sigma}^{-1} (\mathbf{x} - \boldsymbol{\mu}) \right\}$$

Slide 14
Carnegie Mellon University

### Visual Description
A 3D surface plot of a bivariate Gaussian distribution is shown above the equations. The plot features a bell-shaped curve with a color gradient ranging from dark blue at the base to red at the peak. The axes are labeled $x$, $y$, and the vertical axis represents the probability density.

---
## Page 15
### Content
# Diffusion with Markov Chains

* We create a diffusion process with a Markov chain: $q(\mathbf{x}_t | \mathbf{x}_{t-1})$
    this Markov chain gradually adds more and more noise to the data until the signal is destroyed and the distribution becomes Gaussian.

$$q(\mathbf{x}_t | \mathbf{x}_{t-1}) := \mathcal{N}(\mathbf{x}_t; \sqrt{1 - \beta_t} \mathbf{x}_{t-1}, \beta_t \mathbf{I})$$

* `beta_start = 0.0001`
* `beta_end = 0.02`
* `t=0,...200`

Slide 15
Carnegie Mellon University

### Visual Description
A line graph is shown on the right side of the slide. The x-axis is labeled "t" (ranging from 0 to 200) and the y-axis is labeled "beta" (ranging from 0.00 to 0.02). The graph shows a straight line starting near 0 at $t=0$ and ending at 0.02 at $t=200$, representing a linear schedule for the noise parameter $\beta$.

---
## Page 16
### Content
# Diffusion with Markov Chains

$$q(\mathbf{x}_t | \mathbf{x}_{t-1}) := \mathcal{N}(\mathbf{x}_t; \sqrt{1 - \beta_t} \mathbf{x}_{t-1}, \beta_t \mathbf{I})$$

Why do we use exactly the $\sqrt{1 - \beta_t}$ and $\beta_t$ multipliers?

$$\mathbf{x}_1 = \sqrt{1 - \beta_1} \mathbf{x}_0 + \sqrt{\beta_1} \boldsymbol{\epsilon}_1, \text{ where } \boldsymbol{\epsilon}_1 \sim \mathcal{N}(0, I)$$

We have that,

$$\mathbb{E}[\mathbf{x}_1^T \mathbf{x}_1 | \mathbf{x}_0] = \mathbb{E}[(1 - \beta_1) \mathbf{x}_0^T \mathbf{x}_0 + \beta_1 \boldsymbol{\epsilon}_1^T \boldsymbol{\epsilon}_1 + 2\sqrt{1 - \beta_1} \sqrt{\beta_1} \mathbf{x}_0^T \boldsymbol{\epsilon}_1 | \mathbf{x}_0]$$
$$= (1 - \beta_1) \mathbf{x}_0^T \mathbf{x}_0 + \beta_1$$

Therefore, if $\mathbb{E}[\mathbf{x}_0^T \mathbf{x}_0] = 1$, then $\mathbb{E}[\mathbf{x}_1^T \mathbf{x}_1] = 1$ too.

**"We preserve the variance" during diffusion**

Slide 16
Carnegie Mellon University

### Visual Description
Text-only slide containing mathematical derivations.
## Page 17
### Content
# Calculating $q(\mathbf{x}_T|\mathbf{x}_0)$

**Definition:** $q(\mathbf{x}_t|\mathbf{x}_{t-1}) := \mathcal{N}(\mathbf{x}_t; \sqrt{1 - \beta_t}\mathbf{x}_{t-1}, \beta_t\mathbf{I})$

**Lemma:**
$q(\mathbf{x}_T|\mathbf{x}_0) = \mathcal{N}(\mathbf{x}_T; (\prod_{t=1}^T \sqrt{1 - \beta_t})\mathbf{x}_0, (1 - (\prod_{t=1}^T (1 - \beta_t)))\mathbf{I})$

The proofs are in the Appendix:
[Thumbnail of Slide 76: Calculating $q(\mathbf{x}_T|\mathbf{x}_0)$]

**Corollary:**
Let $\alpha_t \doteq 1 - \beta_t$, $\bar{\alpha}_T \doteq \prod_{t=1}^T \alpha_t = \prod_{t=1}^T (1 - \beta_t)$
Then,
$$q(\mathbf{x}_T|\mathbf{x}_0) = \mathcal{N}(\mathbf{x}_T; \sqrt{\bar{\alpha}_T}\mathbf{x}_0, (1 - \bar{\alpha}_T)\mathbf{I})$$
$$\Rightarrow \mathbf{x}_T = \sqrt{\bar{\alpha}_T}\mathbf{x}_0 + \sqrt{1 - \bar{\alpha}_T}\boldsymbol{\epsilon}_T \text{ where } \boldsymbol{\epsilon}_T \sim \mathcal{N}(0, I)$$

### Visual Description
The slide presents mathematical definitions and derivations for the diffusion process. It includes a small thumbnail image of another slide (Slide 76) from the appendix. The Carnegie Mellon University logo is in the bottom right corner.

---

## Page 18
### Content
# The Evolution of Mean and Variance

$\alpha_t \doteq 1 - \beta_t, \bar{\alpha}_T \doteq \prod_{t=1}^T \alpha_t \quad q(\mathbf{x}_T|\mathbf{x}_0) = \mathcal{N}(\mathbf{x}_T; \sqrt{\bar{\alpha}_T}\mathbf{x}_0, (1 - \bar{\alpha}_T)\mathbf{I})$

* beta_start = 0.0001
* beta_end = 0.02
* t = 0, ... 200

[Plot 1: beta vs t]
[Plot 2: $\sqrt{\bar{\alpha}_T}$ vs T]
[Plot 3: $1 - \bar{\alpha}_T$ vs T]

### Visual Description
The slide shows three graphs illustrating how parameters change over time steps $t$ or $T$ up to 200.
1. **beta vs t**: A linear increase from approximately 0 to 0.02.
2. **$\sqrt{\bar{\alpha}_T}$ vs T**: A downward curve starting at 1.00 and decreasing towards 0.3.
3. **$1 - \bar{\alpha}_T$ vs T**: An upward curve starting at 0.0 and increasing towards 0.9.
The Carnegie Mellon University logo is in the bottom right corner.

---

## Page 19
### Content
# Generating $X_T$ from $X_0$

$$q(\mathbf{x}_T|\mathbf{x}_0) = \mathcal{N}(\mathbf{x}_T; \sqrt{\bar{\alpha}_T}\mathbf{x}_0, (1 - \bar{\alpha}_T)\mathbf{I})$$
$$\mathbf{x}_T = \sqrt{\bar{\alpha}_T}\mathbf{x}_0 + \sqrt{(1 - \bar{\alpha}_T)}\boldsymbol{\epsilon}_T \quad \text{where } \boldsymbol{\epsilon}_T \sim \mathcal{N}(0, \mathbf{I})$$

t = 0, ..., 200

[Sequence of images showing a cat image becoming noisier]
0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 50 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 100 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 199

### Visual Description
The slide demonstrates the forward diffusion process on an image of two cats. A series of six images shows the progression from a clear image at $t=0$ to pure Gaussian noise at $t=199$. Intermediate steps at $t=5, 10, 50, 100$ show increasing levels of noise. The Carnegie Mellon University logo is in the bottom right corner.

---

## Page 20
### Content
# 2D Example
$$q(\mathbf{x}_T|\mathbf{x}_0) = \mathcal{N}(\mathbf{x}_T; \sqrt{\bar{\alpha}_T}\mathbf{x}_0, (1 - \bar{\alpha}_T)\mathbf{I})$$

[Six 2D scatter plots showing a spiral distribution diffusing into a Gaussian blob]
* t=0
* t=4
* t=10
* t=15
* t=50
* t=100

### Visual Description
The slide shows the diffusion process applied to a 2D toy dataset. At $t=0$, the data points form a clear spiral shape. As $t$ increases through 4, 10, 15, 50, and 100, the spiral structure gradually dissolves and the points spread out until they form a standard circular Gaussian distribution centered at the origin. The Carnegie Mellon University logo is in the bottom right corner.

---

## Page 21
### Content
# Denoising Diffusion

### Visual Description
Text-only slide. Large blue text "Denoising Diffusion" centered on a white background. The Carnegie Mellon University logo is in the bottom right corner.

---

## Page 22
### Content
# Denoising Diffusion Models

* We created the diffusion process $q(\mathbf{x}_t|\mathbf{x}_{t-1})$
* Our goal is to **learn the reverse process** of this Markov chain: $p_\theta(\mathbf{x}_{t-1}|\mathbf{x}_t)$

    * This reverse process can generate new sample points from the data distribution using Gaussian samples as inputs.
    * After some time, it can produce samples matching the training data distribution.

[Diagram of the diffusion and reverse process]
$\mathbf{x}_T \longrightarrow \dots \longrightarrow \mathbf{x}_t \xrightarrow{p_\theta(\mathbf{x}_{t-1}|\mathbf{x}_t)} \mathbf{x}_{t-1} \longrightarrow \dots \longrightarrow \mathbf{x}_0$
(Reverse arrow: $p_\theta(\mathbf{x}_{t-1}|\mathbf{x}_t)$, Forward dashed arrow: $q(\mathbf{x}_t|\mathbf{x}_{t-1})$)

### Visual Description
The slide introduces the concept of learning the reverse diffusion process. A diagram shows a chain of states from $\mathbf{x}_T$ (noise) to $\mathbf{x}_0$ (data). Solid arrows point from right to left representing the reverse process $p_\theta$, while a dashed arrow points from left to right representing the forward process $q$. Small images are included: pure noise at $\mathbf{x}_T$, a noisy face at $\mathbf{x}_{t-1}$, and a clear face at $\mathbf{x}_0$. The Carnegie Mellon University logo is in the bottom right corner.

---

## Page 23
### Content
# Denoising Diffusion Models

* Interestingly, when the diffusion $q$ consists of small amounts of Gaussian noise, then the transitions of **the reverse Markov chain $p$ will be approximately Gaussian** too, so it is enough to learn the mean and variance of it.
[This is not obvious, but can be proved]

* These mean and variance functions will be represented by a neural network.

[Diagram of the diffusion and reverse process]
$\mathbf{x}_T \longrightarrow \dots \longrightarrow \mathbf{x}_t \xrightarrow{p_\theta(\mathbf{x}_{t-1}|\mathbf{x}_t)} \mathbf{x}_{t-1} \longrightarrow \dots \longrightarrow \mathbf{x}_0$
(Reverse arrow: $p_\theta(\mathbf{x}_{t-1}|\mathbf{x}_t)$, Forward dashed arrow: $q(\mathbf{x}_t|\mathbf{x}_{t-1})$)

### Visual Description
This slide continues the explanation from the previous page, highlighting that the reverse transitions are approximately Gaussian. It uses the same diagram as Page 22, showing the Markov chain from noise $\mathbf{x}_T$ to data $\mathbf{x}_0$. The Carnegie Mellon University logo is in the bottom right corner.

---

## Page 24
### Content
# The Reverse Process [=Denoising Diffusion]

The forward process is given by $q(\mathbf{x}_t|\mathbf{x}_{t-1}) := \mathcal{N}(\mathbf{x}_t; \sqrt{1 - \beta_t}\mathbf{x}_{t-1}, \beta_t\mathbf{I})$

When $\beta_t$ is small enough, then the reverse Markov chain $q(\mathbf{x}_{t-1}|\mathbf{x}_t)$ is approximately Gaussian too.

We will approximate this distribution with $p_\theta(\mathbf{x}_{t-1}|\mathbf{x}_t) := \mathcal{N}(\mathbf{x}_{t-1}; \boldsymbol{\mu}_\theta(\mathbf{x}_t, t), \boldsymbol{\Sigma}_\theta(\mathbf{x}_t, t))$

Here $\boldsymbol{\mu}_\theta(\mathbf{x}_t, t)$ and $\boldsymbol{\Sigma}_\theta(\mathbf{x}_t, t)$ are neural networks with parameter $\theta$.

[Neural Network Diagram]
Inputs: $\mathbf{x}_t$ and $t$
Outputs: $\boldsymbol{\mu}_\theta(\mathbf{x}_t, t)$ and $\boldsymbol{\Sigma}_\theta(\mathbf{x}_t, t)$

Using the training data, our goal is to learn the parameters $\theta$ of the neural networks $\boldsymbol{\mu}_\theta(\mathbf{x}_t, t)$ and $\boldsymbol{\Sigma}_\theta(\mathbf{x}_t, t)$ for each $t = 0, 1, \dots, T$.

### Visual Description
The slide details the mathematical formulation of the reverse process using neural networks. A diagram shows a multi-layer perceptron (neural network) that takes the current state $\mathbf{x}_t$ and the time step $t$ as inputs and outputs the mean $\boldsymbol{\mu}_\theta$ and variance $\boldsymbol{\Sigma}_\theta$ of the reverse Gaussian distribution. The Carnegie Mellon University logo is in the bottom right corner.

---
## Page 25
### Content
# U-Net
When we want to generate images, we often use U-Nets

Convolution & Pooling
De-conv. UpSampling
Skip connections

Input $\mathbf{x}_t \rightarrow$ [U-Net Architecture] $\rightarrow \mu_\theta(\mathbf{x}_t, t)$

### Visual Description
The slide shows a diagram of a U-Net architecture. It features a symmetric "U" shape. The left side (encoder) consists of several blocks representing convolution and pooling operations, decreasing in spatial dimension but increasing in depth. The right side (decoder) consists of blocks representing de-convolution and upsampling, increasing in spatial dimension. Horizontal dashed lines indicate skip connections between corresponding levels of the encoder and decoder. The input is labeled $\mathbf{x}_t$ and the output is labeled $\mu_\theta(\mathbf{x}_t, t)$.

---
## Page 26
### Content
# Time Embedding
* Interestingly, if time $t$ goes directly into a neural net as input, the results often are not very impressive.
* We can get much better results if we encode the time $t$ first and embed it into a high-dim vector:
    * A typical time encoding function:
    $$\gamma(t) = \left( \sin(2^0 \pi t), \cos(2^0 \pi t), \dots, \sin(2^{L-1} \pi t), \cos(2^{L-1} \pi t) \right)$$

### Visual Description
The slide includes a diagram of a simple fully connected neural network. The inputs are grouped into $\mathbf{x}_t$ and $t$. These inputs feed into several hidden layers of neurons. The network has two outputs: $\mu_\theta(\mathbf{x}_t, t)$ and $\Sigma_\theta(\mathbf{x}_t, t)$. Below the diagram, the text explains the necessity of time embedding and provides a mathematical formula for a sinusoidal time encoding function.

---
## Page 27
### Content
# Encoding Positions with Random Fourier Features Works too!

$$\gamma(\mathbf{v}) = [\cos(2\pi \mathbf{b}_1^\top \mathbf{v}), \sin(2\pi \mathbf{b}_1^\top \mathbf{v}), \dots, \cos(2\pi \mathbf{b}_m^\top \mathbf{v}), \sin(2\pi \mathbf{b}_m^\top \mathbf{v})]^\top$$
$$\mathbf{b}_i \sim \mathcal{N}(0, \sigma^2 I)$$

Identity | Random Fourier Features
---|---
[Blurry Image] | [Sharp/Detailed Image]

[Graph: Test PSNR vs Training iteration]
* No mapping (blue line, lower PSNR)
* Gaussian Fourier features (orange line, higher PSNR)

### Visual Description
The slide discusses using Random Fourier Features for positional encoding. It shows a mathematical definition for the encoding function $\gamma(\mathbf{v})$. There is a visual comparison between an "Identity" mapping (resulting in a blurry, low-detail image) and "Random Fourier Features" (resulting in a much sharper, detailed image). A graph plots Test PSNR against Training iteration, showing that Gaussian Fourier features lead to significantly higher PSNR and faster convergence compared to no mapping. A small diagram on the right shows a coordinate input $\mathbf{v}=(x,y)$ being mapped by $\gamma(\mathbf{v})$ before entering a neural network that outputs RGB values.

---
## Page 28
### Content
# Motivation: Positional Encoding

Tancik et al, Fourier Features Let Networks Learn High Frequency Functions in Low Dimensional Domains

$\gamma(\mathbf{v}) = \mathbf{v}$
[Blurry nutcracker image]
[Blurry 3D dragon model]

$\gamma(\mathbf{v}) = \text{High dim, high frequency features}$
[Sharp nutcracker image]
[Sharp 3D dragon model]

### Visual Description
This slide provides motivation for positional encoding by referencing a paper by Tancik et al. It compares the results of using a simple identity mapping ($\gamma(\mathbf{v}) = \mathbf{v}$) versus high-dimensional, high-frequency features. The identity mapping results in blurry reconstructions of a nutcracker photo and a 3D dragon model. The high-frequency features result in much sharper and more detailed reconstructions for both. A neural network diagram on the left illustrates the process of mapping coordinates $(x, y)$ to RGB values.

---
## Page 29
### Content
# Denoising Diffusion Models Pseudo Code for
* training
* sampling

### Visual Description
Text-only slide.

---
## Page 30
### Content
# Training

**Algorithm 1 Training**
1: **repeat**
2: $\quad \mathbf{x}_0 \sim q(\mathbf{x}_0)$ **Select an image from the training data**
3: $\quad t \sim \text{Uniform}(\{1, \dots, T\})$ **Select a time point**
4: $\quad \epsilon \sim \mathcal{N}(\mathbf{0}, \mathbf{I})$ **Generate a random noise from standard Gaussian**
5: $\quad$ Take gradient descent step on
$$\nabla_\theta \| \epsilon - \epsilon_\theta(\sqrt{\bar{\alpha}_t}\mathbf{x}_0 + \sqrt{1 - \bar{\alpha}_t}\epsilon, t) \|^2$$
**Train a neural network that can predict the added noise from a noisy image and time**
6: **until converged**

### Visual Description
The slide presents the pseudo-code for the training process of a Denoising Diffusion Model. It lists a 6-step algorithm with red explanatory text for each step. Step 5 contains the loss function used for gradient descent, which aims to minimize the difference between the added noise $\epsilon$ and the noise predicted by the network $\epsilon_\theta$.

---
## Page 31
### Content
# Sampling

$p_\theta(\mathbf{x}_{t-1}|\mathbf{x}_t) \doteq \mathcal{N}(\mathbf{x}_{t-1}; \mu_\theta(\mathbf{x}_t, t), \sigma_t^2 \mathbf{I})$ **Reverse (denoising) diffusion**

$\mu_\theta(\mathbf{x}_t, t) \doteq \frac{1}{\sqrt{\alpha_t}} \mathbf{x}_t - \frac{1 - \alpha_t}{\sqrt{\alpha_t}\sqrt{1 - \bar{\alpha}_t}} \epsilon_\theta(\mathbf{x}_t, t)$ $\leftarrow$ **Error predicting neural network**

$\Rightarrow \mathbf{x}_{t-1} = \mu_\theta(\mathbf{x}_t, t) + \sigma_t \mathbf{z}$ where $\mathbf{z} \sim \mathcal{N}(0, I)$
$= \frac{1}{\sqrt{\alpha_t}} \mathbf{x}_t - \frac{1 - \alpha_t}{\sqrt{\alpha_t}\sqrt{1 - \bar{\alpha}_t}} \epsilon_\theta(\mathbf{x}_t, t) + \sigma_t \mathbf{z}$ where $\sigma_t \doteq \sqrt{\frac{\beta_t(1-\bar{\alpha}_{t-1})}{1-\bar{\alpha}_t}}$ **Reverse/denoising diffusion**

Therefore, the sampling algorithm is:

**Algorithm 2 Sampling**
1: $\mathbf{x}_T \sim \mathcal{N}(\mathbf{0}, \mathbf{I})$ **Starting Gaussian noise**
2: **for** $t = T, \dots, 1$ **do**
3: $\quad \mathbf{z} \sim \mathcal{N}(\mathbf{0}, \mathbf{I})$ if $t > 1$, else $\mathbf{z} = \mathbf{0}$
4: $\quad \mathbf{x}_{t-1} = \frac{1}{\sqrt{\alpha_t}} \left( \mathbf{x}_t - \frac{1 - \alpha_t}{\sqrt{1 - \bar{\alpha}_t}} \epsilon_\theta(\mathbf{x}_t, t) \right) + \sigma_t \mathbf{z}$ **Reverse/denoising diffusion**
5: **end for**
6: **return** $\mathbf{x}_0$ **Generated new image**

### Visual Description
The slide details the sampling process for Denoising Diffusion Models. It provides the mathematical derivation for the reverse diffusion step, showing how the mean $\mu_\theta$ is calculated using the noise-predicting network $\epsilon_\theta$. It then presents "Algorithm 2 Sampling" in a structured format, with red annotations explaining each step, starting from pure Gaussian noise and iteratively denoising to generate a new image.

---
## Page 32
### Content
# Results

### Visual Description
Text-only slide.
## Page 33
### Content
# Progressive Data Generation

![Progressive Data Generation Grid]

### Visual Description
A grid of images showing the progressive generation of data from noise to clear images. There are 7 rows, each representing a different generated sample (airplane, bird, airplane, deer, frog, deer, dog). Each row has 20 columns, showing the transition from pure Gaussian noise on the far left to a sharp, recognizable image on the far right.

---
## Page 34
### Content
# Results: Denoising Diffusion Models

Generated samples on CelebA-HQ

![Generated Face Samples]

### Visual Description
Four high-resolution, realistic portraits of diverse individuals (two men and two women) generated by a denoising diffusion model trained on the CelebA-HQ dataset. The images are arranged in a 2x2 grid.

---
## Page 35
### Content
# Interpolation

![Interpolation Examples and Diagram]

### Visual Description
The top half of the slide shows three rows of face image interpolations. Each row starts with a "Source" image, followed by a "Rec." (reconstruction), then nine intermediate images with interpolation weights $\lambda$ from 0.1 to 0.9, another "Rec.", and a final "Source" image. The transitions between the two source faces are smooth.

The bottom half contains a conceptual diagram. It shows an "Image manifold" as a curved black line. Two source images, $x_0$ and $x'_0$, are points on this manifold. A red dashed line labeled "Pixel-space interpolation" connects them directly, going off the manifold. A green path labeled "Denoised interpolation" shows the process of diffusing a source to a latent state $x_t \sim q(x_t | x_0)$ and then denoising it back towards the manifold to reach the other source.

---
## Page 36
### Content
# Details of Training

### Visual Description
Text-only slide.

---
## Page 37
### Content
# Maximum Likelihood Training Objective

Let $\mathbf{x}_0^1, \dots, \mathbf{x}_0^n$ be samples from the data distribution $q$, e.g. a set of $n$ images.

**The maximum log-likelihood training objective is:**

$$\max_\theta J(\theta)$$

where $J(\theta) = \mathbb{E}_{\mathbf{x}_0 \sim q} [\log p_\theta(\mathbf{x}_0)] \approx \frac{1}{n} \sum_{i=1}^n \log p_\theta(\mathbf{x}_0^i)$

The difficulty is that we don't know $p_\theta(\mathbf{x}_0^i)$.

We need to calculate it from the Gaussian backward Markov transitions:

$$p_\theta(\mathbf{x}_{t-1} | \mathbf{x}_t) := \mathcal{N}(\mathbf{x}_{t-1}; \boldsymbol{\mu}_\theta(\mathbf{x}_t, t), \boldsymbol{\Sigma}_\theta(\mathbf{x}_t, t))$$

### Visual Description
Text-only slide.

---
## Page 38
### Content
# Maximum Likelihood Training Objective

Since $p_\theta(\mathbf{x}_0) = \int p_\theta(\mathbf{x}_{0:T}) d\mathbf{x}_{1:T}$,

and the joint distribution of the reverse process is $p_\theta(\mathbf{x}_{0:T}) := p(\mathbf{x}_T) \prod_{t=1}^T p_\theta(\mathbf{x}_{t-1} | \mathbf{x}_t)$,

where $p(\mathbf{x}_T) := q(\mathbf{x}_T) := \mathcal{N}(\mathbf{x}_T; \mathbf{0}, \mathbf{I})$, and $p_\theta(\mathbf{x}_{t-1} | \mathbf{x}_t) := \mathcal{N}(\mathbf{x}_{t-1}; \boldsymbol{\mu}_\theta(\mathbf{x}_t, t), \boldsymbol{\Sigma}_\theta(\mathbf{x}_t, t))$

Therefore, the log likelihood function has the following form:

$$J(\theta) = \frac{1}{n} \sum_{i=1}^n \log p_\theta(\mathbf{x}_0^i)$$
$$= \frac{1}{n} \sum_{i=1}^n \log \int p_\theta(\mathbf{x}_0^i, \mathbf{x}_{1:T}) d\mathbf{x}_{1:T}$$
$$= \frac{1}{n} \sum_{i=1}^n \log \int p(\mathbf{x}_T) p_\theta(\mathbf{x}_0^i | \mathbf{x}_1) \prod_{t=2}^T p_\theta(\mathbf{x}_{t-1} | \mathbf{x}_t) d\mathbf{x}_{1:T}$$
$$= \frac{1}{n} \sum_{i=1}^n \log \int \mathcal{N}(\mathbf{x}_T; \mathbf{0}, \mathbf{I}) \mathcal{N}(\mathbf{x}_0^i; \boldsymbol{\mu}_\theta(\mathbf{x}_1, 1), \boldsymbol{\Sigma}_\theta(\mathbf{x}_1, 1)) \prod_{t=2}^T \mathcal{N}(\mathbf{x}_{t-1}; \boldsymbol{\mu}_\theta(\mathbf{x}_t, t), \boldsymbol{\Sigma}_\theta(\mathbf{x}_t, t)) d\mathbf{x}_{1:T}$$

**This looks complicated because of the high-dim integral, and we need to do some tricks to be able to maximize it...**

### Visual Description
Text-only slide. The final sentence is highlighted in red.

---
## Page 39
### Content
# Variational Method for Bounding the Likelihood Function

### Visual Description
Text-only slide.

---
## Page 40
### Content
# Main Ideas for Variational (ELBO) Bound

**Evidence:**

The **evidence** is the marginal likelihood of the observed data: $p_\theta(x_0)$.

For Denoising Diffusion Probabilistic Models (DDPMs) this quantity is **intractable** to evaluate directly because

$$p_\theta(x_0) = \int p_\theta(x_{0:T}) dx_{1:T},$$

where $x_{1:T}$ are latent variables introduced by the diffusion process.

### Visual Description
Text-only slide.

---
## Page 41
### Content
# Main Ideas for Variational (ELBO) Bound

To obtain a tractable training objective, we introduce a variational distribution.

In diffusion models this is the forward noising process $q(x_{1:T} | x_0)$.

We can rewrite the marginal likelihood as
$$\log p_\theta(x_0) = \log \int q(x_{1:T} | x_0) \frac{p_\theta(x_{0:T})}{q(x_{1:T} | x_0)} dx_{1:T}.$$

Applying Jensen's inequality gives the evidence lower bound (ELBO):
$$\log p_\theta(x_0) \geq \mathbb{E}_{q(x_{1:T}|x_0)} \left[ \log \frac{p_\theta(x_{0:T})}{q(x_{1:T} | x_0)} \right] \equiv \mathcal{L}_{\text{ELBO}}.$$

This quantity is called the **Evidence Lower BOund** because it is a computable lower bound on the true evidence $p_\theta(x_0)$.

### Visual Description
Text-only slide with mathematical derivations for the Evidence Lower Bound (ELBO) using Jensen's inequality. The main equations are highlighted in red.

---
## Page 42
### Content
# Maximizing The Likelihood Function

**Goal:**
$$\max_\theta J(\theta), \text{ where } J(\theta) = \mathbb{E}_{\mathbf{x}_0 \sim q}[\log p_\theta(\mathbf{x}_0)] = \int d\mathbf{x}_0 q(\mathbf{x}_0) \log p_\theta(\mathbf{x}_0)$$

This is not tractable in this form, so we will lower bound it with something more tractable

**Lemma:** We can prove that $J(\theta) \geq K(\theta)$
$$\text{where } K(\theta) = \mathbb{E}_{q(\mathbf{x}_{0:T})} \left[ \log p_\theta(\mathbf{x}_T) + \sum_{t=1}^T \log \frac{p_\theta(\mathbf{x}_{t-1} | \mathbf{x}_t)}{q(\mathbf{x}_t | \mathbf{x}_{t-1})} \right]$$
$$= \int d\mathbf{x}_{0:T} q(\mathbf{x}_{0:T}) \left[ \log p_\theta(\mathbf{x}_T) + \sum_{t=1}^T \log \frac{p_\theta(\mathbf{x}_{t-1} | \mathbf{x}_t)}{q(\mathbf{x}_t | \mathbf{x}_{t-1})} \right]$$

**Proof: ([Appendix](#))**

We will maximize $K(\theta)$, which is a lower bound on $J(\theta)$
It will be easier to maximize $K(\theta)$ than $J(\theta)$

**This is the so called variational bound optimization.**

### Visual Description
The slide outlines the goal of maximizing the likelihood function by introducing a more tractable lower bound $K(\theta)$. It includes a small thumbnail image of a previous slide titled "Variational (ELBO) Bound". Key points are highlighted in red.

---
## Page 43
### Content
# Maximizing The Variational Bound

After some further calculations [[Appendix](#)]:
$$K(\theta) = - \int q(\mathbf{x}_0) D_{\text{KL}}(q(\mathbf{x}_T | \mathbf{x}_0) \parallel p(\mathbf{x}_T))$$
$$- \sum_{t=2}^T \int q(\mathbf{x}_0, \mathbf{x}_t) D_{\text{KL}}(q(\mathbf{x}_{t-1} | \mathbf{x}_t, \mathbf{x}_0) \parallel p_\theta(\mathbf{x}_{t-1} | \mathbf{x}_t))$$
$$+ \int q(\mathbf{x}_0, \mathbf{x}_1) \log p_\theta(\mathbf{x}_0 | \mathbf{x}_1)$$

* Here each KL term is a KL term between Gaussian distributions, and **they can be calculated in a closed form!**
* After these calculations, the derivative with respect to $\theta$ can be calculated.

### Visual Description
The slide presents a decomposed version of the variational bound $K(\theta)$ into three distinct integral terms involving KL divergence and log-likelihood. It includes a small thumbnail image of a slide titled "The Variational Bound can be Rewritten". Important notes are bulleted and partially highlighted in red.

---
## Page 44
### Content
# The Objective Function

$$K(\theta) = - \int q(\mathbf{x}_0) D_{\text{KL}}(q(\mathbf{x}_T | \mathbf{x}_0) \parallel p(\mathbf{x}_T))$$
$$- \sum_{t=2}^T \int q(\mathbf{x}_0, \mathbf{x}_t) D_{\text{KL}}(q(\mathbf{x}_{t-1} | \mathbf{x}_t, \mathbf{x}_0) \parallel p_\theta(\mathbf{x}_{t-1} | \mathbf{x}_t))$$
$$+ \int q(\mathbf{x}_0, \mathbf{x}_1) \log p_\theta(\mathbf{x}_0 | \mathbf{x}_1)$$

### Visual Description
Text-only slide showing the full mathematical expression for the objective function $K(\theta)$ in red text.

---
## Page 45
### Content
# The Objective Function

$$K(\theta) = \underbrace{- \int q(\mathbf{x}_0) D_{\text{KL}}(q(\mathbf{x}_T | \mathbf{x}_0) \parallel p(\mathbf{x}_T))}_{K_T} \underbrace{- \sum_{t=2}^T \int q(\mathbf{x}_0, \mathbf{x}_t) D_{\text{KL}}(q(\mathbf{x}_{t-1} | \mathbf{x}_t, \mathbf{x}_0) \parallel p_\theta(\mathbf{x}_{t-1} | \mathbf{x}_t))}_{K_{t-1}} \underbrace{+ \int q(\mathbf{x}_0, \mathbf{x}_1) \log p_\theta(\mathbf{x}_0 | \mathbf{x}_1)}_{K_0}$$

The first term, $K_T$, doesn't have any trainable parameter $\theta$ and can be ignored.

**The second term:** $\int q(\mathbf{x}_0, \mathbf{x}_t) D_{\text{KL}}(q(\mathbf{x}_{t-1} | \mathbf{x}_t, \mathbf{x}_0) \parallel p_\theta(\mathbf{x}_{t-1} | \mathbf{x}_t))$

**Lemma:** $q(\mathbf{x}_{t-1} | \mathbf{x}_t, \mathbf{x}_0) = q(\mathbf{x}_t | \mathbf{x}_{t-1}, \mathbf{x}_0) \frac{q(\mathbf{x}_{t-1} | \mathbf{x}_0)}{q(\mathbf{x}_t | \mathbf{x}_0)}$
$$= \mathcal{N}(\mathbf{x}_{t-1}; \frac{(1 - \bar{\alpha}_{t-1})\sqrt{1 - \beta_t}\mathbf{x}_t + \beta_t\sqrt{\bar{\alpha}_{t-1}}\mathbf{x}_0}{1 - \bar{\alpha}_t}, \frac{\beta_t(1 - \bar{\alpha}_{t-1})}{1 - \bar{\alpha}_t}\mathbf{I})$$

**Proof: ([Appendix](#))**

### Visual Description
The slide breaks down the objective function $K(\theta)$ into three components labeled $K_T$, $K_{t-1}$, and $K_0$ using curly braces. It focuses on the second term and provides a lemma for the conditional distribution $q(\mathbf{x}_{t-1} | \mathbf{x}_t, \mathbf{x}_0)$ as a Gaussian. A small thumbnail titled "Calculating $q(\mathbf{x}_{t-1} | \mathbf{x}_t, \mathbf{x}_0)$" is present.

---
## Page 46
### Content
# The Objective Function

$$q(\mathbf{x}_{t-1} | \mathbf{x}_t, \mathbf{x}_0) = \mathcal{N}(\mathbf{x}_{t-1}; \underbrace{\frac{(1 - \bar{\alpha}_{t-1})\sqrt{1 - \beta_t}\mathbf{x}_t + \beta_t\sqrt{\bar{\alpha}_{t-1}}\mathbf{x}_0}{1 - \bar{\alpha}_t}}_{\tilde{\boldsymbol{\mu}}_t(\mathbf{x}_t, \mathbf{x}_0)}, \underbrace{\frac{\beta_t(1 - \bar{\alpha}_{t-1})}{1 - \bar{\alpha}_t}}_{\tilde{\beta}_t}\mathbf{I})$$

**The second term is:**
$$\int q(\mathbf{x}_0, \mathbf{x}_t) D_{\text{KL}}(q(\mathbf{x}_{t-1} | \mathbf{x}_t, \mathbf{x}_0) \parallel p_\theta(\mathbf{x}_{t-1} | \mathbf{x}_t)) \text{ Here } p_\theta(\mathbf{x}_{t-1} | \mathbf{x}_t) := \mathcal{N}(\mathbf{x}_{t-1}; \boldsymbol{\mu}_\theta(\mathbf{x}_t, t), \boldsymbol{\Sigma}_\theta(\mathbf{x}_t, t))$$

Therefore, the second term can be written as:
$$\int q(\mathbf{x}_0, \mathbf{x}_t) D_{\text{KL}}(\mathcal{N}(\mathbf{x}_{t-1}; \tilde{\boldsymbol{\mu}}_t(\mathbf{x}_t, \mathbf{x}_0), \tilde{\beta}_t\mathbf{I}) \parallel \mathcal{N}(\mathbf{x}_{t-1}; \boldsymbol{\mu}_\theta(\mathbf{x}_t, t), \boldsymbol{\Sigma}_\theta(\mathbf{x}_t, t)))$$

<span style="color:red">Our goal is to choose the right $\boldsymbol{\mu}_\theta(\mathbf{x}_t, t)$ and $\boldsymbol{\Sigma}_\theta(\mathbf{x}_t, t)$ functions (neural networks) and then tune $\theta$ to minimize this term.</span>

### Visual Description
The slide defines the mean $\tilde{\boldsymbol{\mu}}_t$ and variance $\tilde{\beta}_t$ for the Gaussian distribution $q(\mathbf{x}_{t-1} | \mathbf{x}_t, \mathbf{x}_0)$. It then substitutes these into the KL divergence term of the objective function. The goal of parameterizing the reverse process with neural networks is highlighted in red.

---
## Page 47
### Content
# The Objective Function

$$\int q(\mathbf{x}_0, \mathbf{x}_t) D_{\text{KL}}(\mathcal{N}(\mathbf{x}_{t-1}; \tilde{\boldsymbol{\mu}}_t(\mathbf{x}_t, \mathbf{x}_0), \tilde{\beta}_t\mathbf{I}) \parallel \mathcal{N}(\mathbf{x}_{t-1}; \boldsymbol{\mu}_\theta(\mathbf{x}_t, t), \boldsymbol{\Sigma}_\theta(\mathbf{x}_t, t)))$$

<span style="color:red">Our goal is to choose the right $\boldsymbol{\mu}_\theta(\mathbf{x}_t, t)$ and $\boldsymbol{\Sigma}_\theta(\mathbf{x}_t, t)$ functions and then tune $\theta$.</span>

**The variance term:**
It makes sense to set $\boldsymbol{\Sigma}_\theta(\mathbf{x}_t, t) \doteq \tilde{\beta}_t\mathbf{I} = \frac{\beta_t(1 - \bar{\alpha}_{t-1})}{1 - \bar{\alpha}_t}\mathbf{I}$

but $\boldsymbol{\Sigma}_\theta(\mathbf{x}_t, t) \doteq \beta_t\mathbf{I}$ gave similar results too in the experiments.

Let us say $\boldsymbol{\Sigma}_\theta(\mathbf{x}_t, t) \doteq \sigma_t^2\mathbf{I}$, where $\sigma_t^2$ is either of these choices.

### Visual Description
This slide focuses on the variance term $\boldsymbol{\Sigma}_\theta$ of the reverse process. It suggests two possible fixed values for the variance based on experimental results and defines a general notation $\sigma_t^2\mathbf{I}$.

---
## Page 48
### Content
# The Objective Function

$$\int q(\mathbf{x}_0, \mathbf{x}_t) D_{\text{KL}}(\mathcal{N}(\mathbf{x}_{t-1}; \tilde{\boldsymbol{\mu}}_t(\mathbf{x}_t, \mathbf{x}_0), \tilde{\beta}_t\mathbf{I}) \parallel \mathcal{N}(\mathbf{x}_{t-1}; \boldsymbol{\mu}_\theta(\mathbf{x}_t, t), \boldsymbol{\Sigma}_\theta(\mathbf{x}_t, t)))$$
$$\tilde{\boldsymbol{\mu}}_t(\mathbf{x}_t, \mathbf{x}_0) = \frac{(1 - \bar{\alpha}_{t-1})\sqrt{1 - \beta_t}\mathbf{x}_t + \beta_t\sqrt{\bar{\alpha}_{t-1}}\mathbf{x}_0}{1 - \bar{\alpha}_t} \quad \tilde{\beta}_t = \frac{\beta_t(1 - \bar{\alpha}_{t-1})}{1 - \bar{\alpha}_t}$$

<span style="color:red">Our goal is to choose the right $\boldsymbol{\mu}_\theta(\mathbf{x}_t, t)$ and $\boldsymbol{\Sigma}_\theta(\mathbf{x}_t, t)$ functions and then tune $\theta$.</span>

**Lemma:**
$$D_{\text{KL}}(\mathcal{N}(\mathbf{x}_{t-1}; \tilde{\boldsymbol{\mu}}_t(\mathbf{x}_t, \mathbf{x}_0), \tilde{\beta}_t\mathbf{I}) \parallel \mathcal{N}(\mathbf{x}_{t-1}; \boldsymbol{\mu}_\theta(\mathbf{x}_t, t), \boldsymbol{\Sigma}_\theta(\mathbf{x}_t, t))) = \frac{1}{2\sigma_t^2} \lVert \tilde{\boldsymbol{\mu}}_t(\mathbf{x}_t, \mathbf{x}_0) - \boldsymbol{\mu}_\theta(\mathbf{x}_t, t) \rVert^2 + C$$
where $C$ does not depend on $\theta$.

**Proof:** KL divergence between Gaussians is known

We want $\boldsymbol{\mu}_\theta(\mathbf{x}_t, t)$ to be as close to $\tilde{\boldsymbol{\mu}}_t(\mathbf{x}_t, \mathbf{x}_0)$ as possible.
<span style="color:red">The difficulty is that $\boldsymbol{\mu}_\theta$ only receives $\mathbf{x}_t$ and $t$, but not $\mathbf{x}_0$!</span>

Luckily, we will integrate out $\mathbf{x}_0$ in the objective function: $\int q(\mathbf{x}_0, \mathbf{x}_t) D_{\text{KL}}(q(\mathbf{x}_{t-1} | \mathbf{x}_t, \mathbf{x}_0) \parallel p_\theta(\mathbf{x}_{t-1} | \mathbf{x}_t))$

### Visual Description
The slide simplifies the KL divergence term into a squared distance between the target mean $\tilde{\boldsymbol{\mu}}_t$ and the predicted mean $\boldsymbol{\mu}_\theta$. It highlights the challenge that the model does not have access to $\mathbf{x}_0$ during inference, which is addressed by the integration over $\mathbf{x}_0$ in the training objective. Key points are in red.
## Page 49
### Content
# The Objective Function

$$
\int q(\mathbf{x}_0, \mathbf{x}_t) D_{KL}(q(\mathbf{x}_{t-1}|\mathbf{x}_t, \mathbf{x}_0) \parallel p_\theta(\mathbf{x}_{t-1}|\mathbf{x}_t))
$$

$$
= \int q(\mathbf{x}_0, \mathbf{x}_t) \left( \frac{1}{2\sigma_t^2} \|\tilde{\boldsymbol{\mu}}_t(\mathbf{x}_t, \mathbf{x}_0) - \boldsymbol{\mu}_\theta(\mathbf{x}_t, t)\|^2 + C \right)
$$

$$
\color{red}{= \mathbb{E}_{\mathbf{x}_t, \mathbf{x}_0} \left[ \frac{1}{2\sigma_t^2} \|\tilde{\boldsymbol{\mu}}_t(\mathbf{x}_t, \mathbf{x}_0) - \boldsymbol{\mu}_\theta(\mathbf{x}_t, t)\|^2 + C \right]}
$$

where $\tilde{\boldsymbol{\mu}}_t(\mathbf{x}_t, \mathbf{x}_0) = \frac{(1-\bar{\alpha}_{t-1})\sqrt{1-\beta_t}\mathbf{x}_t + \beta_t\sqrt{\bar{\alpha}_{t-1}}\mathbf{x}_0}{1-\bar{\alpha}_t}$

### Visual Description
The slide shows the mathematical derivation of the objective function for a diffusion model. The final expectation form is highlighted in red.

---

## Page 50
### Content
# Rewriting $X_t$ and $X_0$

We have already proved that $q(\mathbf{x}_t|\mathbf{x}_0) = \mathcal{N}(\mathbf{x}_t; \sqrt{\bar{\alpha}_t}\mathbf{x}_0, (1 - \bar{\alpha}_t)\mathbf{I})$

Therefore we can think of $\mathbf{x}_t$ as $\mathbf{x}_t = \sqrt{\bar{\alpha}_t}\mathbf{x}_0 + \sqrt{(1 - \bar{\alpha}_t)}\epsilon$ where $\epsilon \sim \mathcal{N}(0, \mathbf{I})$

We will write
$$
\mathbf{x}_t \doteq \mathbf{x}_t(\mathbf{x}_0, \epsilon) \doteq \sqrt{\bar{\alpha}_t}\mathbf{x}_0 + \sqrt{(1 - \bar{\alpha}_t)}\epsilon \quad (*1)
$$

From this, we also have that
$$
\Rightarrow \mathbf{x}_0 = \frac{1}{\sqrt{\bar{\alpha}_t}}(\mathbf{x}_t(\mathbf{x}_0, \epsilon) - \sqrt{(1 - \bar{\alpha}_t)}\epsilon) \quad (*2)
$$

### Visual Description
Text-only slide.

---

## Page 51
### Content
# Rewriting $\tilde{\boldsymbol{\mu}}_t(\mathbf{x}_t, \mathbf{x}_0)$

**Lemma:**

Since $\tilde{\boldsymbol{\mu}}_t(\mathbf{x}_t, \mathbf{x}_0) = \frac{(1 - \bar{\alpha}_{t-1})\sqrt{1 - \beta_t}\mathbf{x}_t + \beta_t\sqrt{\bar{\alpha}_{t-1}}\mathbf{x}_0}{1 - \bar{\alpha}_t}$

and $\mathbf{x}_0 = \frac{1}{\sqrt{\bar{\alpha}_t}}(\mathbf{x}_t - \sqrt{(1 - \bar{\alpha}_t)}\epsilon)$ From (*2)

We have that
$$
\tilde{\boldsymbol{\mu}}_t(\mathbf{x}_t, \mathbf{x}_0) = \frac{1}{\sqrt{\alpha_t}}\mathbf{x}_t - \frac{1 - \alpha_t}{\sqrt{\alpha_t}\sqrt{1 - \bar{\alpha}_t}}\epsilon \quad \text{where } \epsilon \sim \mathcal{N}(0, \mathbf{I}) \quad (*3)
$$

**Proof:**
([Appendix](Slide_85))

### Visual Description
The slide presents a mathematical lemma for rewriting the mean of the posterior distribution. It includes a small thumbnail image of an appendix slide (Slide 85) where the proof is located.

---

## Page 52
### Content
# The Objective Function

Since $\tilde{\boldsymbol{\mu}}_t(\mathbf{x}_t, \mathbf{x}_0) = \frac{1}{\sqrt{\alpha_t}}\mathbf{x}_t - \frac{1 - \alpha_t}{\sqrt{\alpha_t}\sqrt{1 - \bar{\alpha}_t}}\epsilon$ where $\epsilon \sim \mathcal{N}(0, \mathbf{I})$ From (*3)

Therefore,
$$
\mathbb{E}_{\mathbf{x}_t, \mathbf{x}_0} \left[ \frac{1}{2\sigma_t^2} \|\tilde{\boldsymbol{\mu}}_t(\mathbf{x}_t, \mathbf{x}_0) - \boldsymbol{\mu}_\theta(\mathbf{x}_t, t)\|^2 \right]
$$
$$
= \mathbb{E}_{\mathbf{x}_t, \epsilon} \left[ \frac{1}{2\sigma_t^2} \|\frac{1}{\sqrt{\alpha_t}}\mathbf{x}_t - \frac{1 - \alpha_t}{\sqrt{\alpha_t}\sqrt{1 - \bar{\alpha}_t}}\epsilon - \boldsymbol{\mu}_\theta(\mathbf{x}_t, t)\|^2 \right]
$$

**Motivated by this, let**
$$
\boldsymbol{\mu}_\theta(\mathbf{x}_t, t) \doteq \frac{1}{\sqrt{\alpha_t}}\mathbf{x}_t - \frac{1 - \alpha_t}{\sqrt{\alpha_t}\sqrt{1 - \bar{\alpha}_t}}\epsilon_\theta(\mathbf{x}_t, t) \quad \text{where } \epsilon_\theta(\mathbf{x}_t, t) \text{ is a neural network}
$$

### Visual Description
Text-only slide.

---

## Page 53
### Content
# The Objective Function

$$
\mathbb{E}_{\mathbf{x}_t, \epsilon} \left[ \frac{1}{2\sigma_t^2} \|\frac{1}{\sqrt{\alpha_t}}\mathbf{x}_t - \frac{1 - \alpha_t}{\sqrt{\alpha_t}\sqrt{1 - \bar{\alpha}_t}}\epsilon - \boldsymbol{\mu}_\theta(\mathbf{x}_t, t)\|^2 \right]
$$
$$
\boldsymbol{\mu}_\theta(\mathbf{x}_t, t) \doteq \frac{1}{\sqrt{\alpha_t}}\mathbf{x}_t - \frac{1 - \alpha_t}{\sqrt{\alpha_t}\sqrt{1 - \bar{\alpha}_t}}\epsilon_\theta(\mathbf{x}_t, t)
$$
$$
= \mathbb{E}_{\epsilon, \mathbf{x}_t} \left[ \frac{1}{2\sigma_t^2} \|\frac{1 - \alpha_t}{\sqrt{\alpha_t}\sqrt{1 - \bar{\alpha}_t}}\epsilon_\theta(\mathbf{x}_t, t) - \frac{1 - \alpha_t}{\sqrt{\alpha_t}\sqrt{1 - \bar{\alpha}_t}}\epsilon\|^2 \right] \quad \text{where } \epsilon \sim \mathcal{N}(0, \mathbf{I})
$$
$$
= \mathbb{E}_{\epsilon, \mathbf{x}_t} \left[ \frac{1}{2\sigma_t^2} \frac{(1 - \alpha_t)^2}{\alpha_t(1 - \bar{\alpha}_t)} \|\epsilon_\theta(\mathbf{x}_t, t) - \epsilon\|^2 \right]
$$
$$
= \frac{1}{2\sigma_t^2} \frac{(1 - \alpha_t)^2}{\alpha_t(1 - \bar{\alpha}_t)} \mathbb{E}_{\epsilon, \mathbf{x}_0} [\|\epsilon_\theta(\mathbf{x}_t(\mathbf{x}_0, \epsilon), t) - \epsilon\|^2]
$$
$$
\mathbf{x}_t \doteq \mathbf{x}_t(\mathbf{x}_0, \epsilon) \doteq \sqrt{\bar{\alpha}_t}\mathbf{x}_0 + \sqrt{(1 - \bar{\alpha}_t)}\epsilon \quad \text{from } (*1)
$$
$$
= \frac{1}{2\sigma_t^2} \frac{(1 - \alpha_t)^2}{\alpha_t(1 - \bar{\alpha}_t)} \mathbb{E}_{\epsilon, \mathbf{x}_0} [\|\epsilon_\theta(\sqrt{\bar{\alpha}_t}\mathbf{x}_0 + \sqrt{(1 - \bar{\alpha}_t)}\epsilon, t) - \epsilon\|^2]
$$

Therefore, we want $\epsilon_\theta(\sqrt{\bar{\alpha}_t}\mathbf{x}_0 + \sqrt{(1 - \bar{\alpha}_t)}\epsilon, t)$ to be close to $\epsilon$

### Visual Description
Text-only slide.

---

## Page 54
### Content
# Denoising Diffusion Pseudocode

We want $\epsilon_\theta(\sqrt{\bar{\alpha}_t}\mathbf{x}_0 + \sqrt{(1 - \bar{\alpha}_t)}\epsilon, t)$ to be close to $\epsilon$ where $\epsilon \sim \mathcal{N}(0, \mathbf{I})$

---
**Algorithm 1 Training**
---
1: **repeat**
2: $\quad \mathbf{x}_0 \sim q(\mathbf{x}_0)$
3: $\quad t \sim \text{Uniform}(\{1, \dots, T\})$
4: $\quad \epsilon \sim \mathcal{N}(\mathbf{0}, \mathbf{I})$
5: $\quad$ Take gradient descent step on
$$
\nabla_\theta \|\epsilon - \epsilon_\theta(\sqrt{\bar{\alpha}_t}\mathbf{x}_0 + \sqrt{1 - \bar{\alpha}_t}\epsilon, t)\|^2
$$
6: **until** converged
---

### Visual Description
The slide presents the pseudocode for the training process of a Denoising Diffusion Probabilistic Model.

---

## Page 55
### Content
# Sampling

$p_\theta(\mathbf{x}_{t-1}|\mathbf{x}_t) \doteq \mathcal{N}(\mathbf{x}_{t-1}; \boldsymbol{\mu}_\theta(\mathbf{x}_t, t), \sigma_t^2\mathbf{I})$ **Reverse (denoising) diffusion**

$\boldsymbol{\mu}_\theta(\mathbf{x}_t, t) \doteq \frac{1}{\sqrt{\alpha_t}}\mathbf{x}_t - \frac{1 - \alpha_t}{\sqrt{\alpha_t}\sqrt{1 - \bar{\alpha}_t}}\epsilon_\theta(\mathbf{x}_t, t)$ $\leftarrow$ **Error predicting neural network**

$\Rightarrow \mathbf{x}_{t-1} = \boldsymbol{\mu}_\theta(\mathbf{x}_t, t) + \sigma_t\mathbf{z}$ where $\mathbf{z} \sim \mathcal{N}(0, I)$
$= \frac{1}{\sqrt{\alpha_t}}\mathbf{x}_t - \frac{1 - \alpha_t}{\sqrt{\alpha_t}\sqrt{1 - \bar{\alpha}_t}}\epsilon_\theta(\mathbf{x}_t, t) + \sigma_t\mathbf{z}$ where $\sigma_t \doteq \sqrt{\frac{\beta_t(1-\bar{\alpha}_{t-1})}{1-\bar{\alpha}_t}}$ **Reverse/denoising diffusion**

Therefore, the sampling algorithm is:

---
**Algorithm 2 Sampling**
---
1: $\mathbf{x}_T \sim \mathcal{N}(\mathbf{0}, \mathbf{I})$ **Starting Gaussian noise**
2: **for** $t = T, \dots, 1$ **do**
3: $\quad \mathbf{z} \sim \mathcal{N}(\mathbf{0}, \mathbf{I})$ if $t > 1$, else $\mathbf{z} = 0$
4: $\quad \mathbf{x}_{t-1} = \frac{1}{\sqrt{\alpha_t}} \left( \mathbf{x}_t - \frac{1-\alpha_t}{\sqrt{1-\bar{\alpha}_t}}\epsilon_\theta(\mathbf{x}_t, t) \right) + \sigma_t\mathbf{z}$ **Reverse/denoising diffusion**
5: **end for**
6: **return** $\mathbf{x}_0$ **Generated new image**
---

### Visual Description
The slide details the sampling process, showing the mathematical formulation and the corresponding pseudocode (Algorithm 2). Red text annotations explain the purpose of different parts of the algorithm.

---

## Page 56
### Content
# Extensions

### Visual Description
Text-only slide.
## Page 57
### Content
# Extensions and Applications

* Conditional diffusion
* Stable diffusion ( = Latent diffusion)
* Score-based diffusion / Langevin dynamics
* Cold diffusion

* Text-to-Image generation
* Video generation
* Music generation
* Molecule generation

### Visual Description
Text-only slide.

---

## Page 58
### Content
# Conditional Diffusion

**Goal:** Instead of starting the image generation from a Gaussian noise, start it from
* A text prompt
* Another image

**Applications:**
* Text-to-Image generation
* Image super-resolution
* Image inpainting
* Image outpainting

### Visual Description
Text-only slide.

---

## Page 59
### Content
# Conditional Diffusion

We are given a dataset of $\mathbf{x}, \mathbf{y}$ pairs: $\{\mathbf{x}^i, \mathbf{y}^i\}_{i=1}^n$

For example, image – text description pairs.

![Two images with captions. Left: A baseball player at bat, captioned "The man at bat readies to swing at the pitch while the umpire looks on." Right: A bus on a street, captioned "A large bus sitting next to a very tall building."](image_placeholder)

**Goal:**
Our goal is to generate samples from the $p(x|y)$ conditional distribution.

### Visual Description
The slide contains two example images from a dataset. The first image shows a baseball player at bat with an umpire behind him, accompanied by the caption: "The man at bat readies to swing at the pitch while the umpire looks on." The second image shows a bus parked on a street next to a building, with the caption: "A large bus sitting next to a very tall building."

---

## Page 60
### Content
# Conditional Diffusion

**Method:**

1) Using an encoder, $\tau_\theta(y)$, e.g. a transformer, embed the text $y$ into a matrix:
$$\tau_\theta(y) \in \mathbb{R}^{a \times b}$$

2) Instead of using the previous training objective:
$$\min_\theta \mathbb{E}_{\substack{\mathbf{x}_0 \sim q(\mathbf{x}_0) \\ t \sim U[1, T] \\ \epsilon \sim \mathcal{N}(0, 1)}} \left[ \| \epsilon - \epsilon_\theta(\sqrt{\bar{\alpha}_t}\mathbf{x}_0 + \sqrt{(1 - \bar{\alpha}_t)}\epsilon, t) \|^2 \right]$$

Let us use $\mathbf{y}$ too!
$$\min_\theta \mathbb{E}_{\substack{\mathbf{x}_0, y \sim q(\mathbf{x}_0, y) \\ t \sim U[1, T] \\ \epsilon \sim \mathcal{N}(0, 1)}} \left[ \| \epsilon - \epsilon_\theta(\sqrt{\bar{\alpha}_t}\mathbf{x}_0 + \sqrt{(1 - \bar{\alpha}_t)}\epsilon, t, \tau_\theta(y)) \|^2 \right]$$

Here the neural networks $\epsilon_\theta$ and $\tau_\theta$ are jointly optimized.

### Visual Description
Text-only slide with mathematical formulas detailing the objective function for conditional diffusion models.

---

## Page 61
### Content
# Cold Diffusion

* https://github.com/arpitbansal297/Cold-Diffusion-Models

![A grid of images demonstrating different types of degradation and restoration. Rows are labeled: Noise, Blur, Animorph, Mask, Pixelate, Snow. Columns show the progression from "Original" through "Forward" to "Degraded", then "Reverse" to "Generated".](image_placeholder)

Diffusion into Gaussian noise is not very important!

### Visual Description
The slide features a large grid of images illustrating the "Cold Diffusion" process across various degradation types. The rows are labeled: Noise, Blur, Animorph (changing a human face to a leopard), Mask (inpainting), Pixelate (super-resolution), and Snow. The columns track the "Forward" process from an "Original" image to a "Degraded" state, and then the "Reverse" process back to a "Generated" image.

---

## Page 62
### Content
# Cold Diffusion

* Diffusion models are trained to remove random noise

* At test time, the denoising network is used to convert pure Gaussian noise into an image using an update rule that alternates between applying the denoiser and adding Gaussian noise:
$$\mathbf{x}_{t-1} = \mu_\theta(\mathbf{x}_t, t) + \sigma_t \mathbf{z}$$

* Rather than limit ourselves to models using Gaussian noise, we consider models that use image transformations like blurring, downsampling, etc. We can train a restoration network to invert these deformations.

### Visual Description
Text-only slide explaining the concept of Cold Diffusion as a generalization of standard diffusion models to other types of image degradation.

---

## Page 63
### Content
# Score Based Diffusion / Langevin Dynamics

Let $\mathbf{x}_t \leftarrow \mathbf{x}_{t-1} + \alpha \nabla_{\mathbf{x}} \log p(\mathbf{x}_{t-1}) + \sqrt{2\alpha} \mathbf{z}_t, \quad 1 \le t \le T \quad$ where $\mathbf{z}_t \sim \mathcal{N}(\mathbf{0}, \mathbf{I})$.

**Theorem (Langevin Dynamics)**
When $\alpha$ is small and $T$ is large, the distribution of $\mathbf{x}_T$ will be close to $p(\mathbf{x})$

**Difficulty:**
We need to estimate $\nabla_{\mathbf{x}} \log p(\mathbf{x}_{t-1})$ from the data.

This is the so-called **score estimation** problem.

### Visual Description
Text-only slide presenting the mathematical formulation of Langevin Dynamics and its relation to score-based diffusion models.

---

## Page 64
### Content
# Thanks for your Attention! ☺

### Visual Description
Text-only slide with a concluding message and a smiley face.

---
## Page 65
### Content
# Appendix
### Visual Description
Title slide with the word "Appendix" centered in a bold, blue font on a white background. The Carnegie Mellon University logo is in the bottom right corner, and "Slide 65" is in the bottom left.

---
## Page 66
### Content
# The Likelihood Function
Let us try to simplify the objective function:
$$p_\theta(\mathbf{x}_0) = \int d\mathbf{x}_{1:T} \ p_\theta(\mathbf{x}_{0:T})$$
$$= \int d\mathbf{x}_{1:T} \ p_\theta(\mathbf{x}_{0:T}) \frac{q(\mathbf{x}_{1:T} | \mathbf{x}_0)}{q(\mathbf{x}_{1:T} | \mathbf{x}_0)}$$
$$= \int d\mathbf{x}_{1:T} \ q(\mathbf{x}_{1:T} | \mathbf{x}_0) \frac{p_\theta(\mathbf{x}_{0:T})}{q(\mathbf{x}_{1:T} | \mathbf{x}_0)}$$
$$= \int d\mathbf{x}_{1:T} \ q(\mathbf{x}_{1:T} | \mathbf{x}_0) p_\theta(\mathbf{x}_T) \frac{p_\theta(\mathbf{x}_{0:T-1} | \mathbf{x}_T)}{q(\mathbf{x}_{1:T} | \mathbf{x}_0)}$$
$$= \int d\mathbf{x}_{1:T} \ q(\mathbf{x}_{1:T} | \mathbf{x}_0) p_\theta(\mathbf{x}_T) \frac{\prod_{t=1}^T p_\theta(\mathbf{x}_{t-1} | \mathbf{x}_t)}{\prod_{t=1}^T q(\mathbf{x}_t | \mathbf{x}_{t-1})} \quad (*)$$
$$= \int d\mathbf{x}_{1:T} \ q(\mathbf{x}_{1:T} | \mathbf{x}_0) \mathcal{N}(\mathbf{x}_T; \mathbf{0}, \mathbf{I}) \frac{\prod_{t=1}^T \mathcal{N}(\mathbf{x}_{t-1}; \boldsymbol{\mu}_\theta(\mathbf{x}_t, t), \boldsymbol{\Sigma}_\theta(\mathbf{x}_t, t))}{\prod_{t=1}^T \mathcal{N}(\mathbf{x}_t; \sqrt{1-\beta_t}\mathbf{x}_{t-1}, \beta_t\mathbf{I})}$$
$$= \mathbb{E}_{q(\mathbf{x}_{1:T} | \mathbf{x}_0)} \left[ \mathcal{N}(\mathbf{x}_T; \mathbf{0}, \mathbf{I}) \frac{\prod_{t=1}^T \mathcal{N}(\mathbf{x}_{t-1}; \boldsymbol{\mu}_\theta(\mathbf{x}_t, t), \boldsymbol{\Sigma}_\theta(\mathbf{x}_t, t))}{\prod_{t=1}^T \mathcal{N}(\mathbf{x}_t; \sqrt{1-\beta_t}\mathbf{x}_{t-1}, \beta_t\mathbf{I})} \right]$$

It still has the integral, but now this term is an expected value, and we can approximate it with Monte Carlo methods
### Visual Description
A mathematical derivation slide showing the step-by-step expansion of the likelihood function $p_\theta(\mathbf{x}_0)$ into an expectation over the forward process $q(\mathbf{x}_{1:T} | \mathbf{x}_0)$. The final result is highlighted as an expectation. A concluding sentence in red text emphasizes that this can be approximated using Monte Carlo methods.

---
## Page 67
### Content
# Monte Carlo Likelihood Estimation
We already know that
$$p_\theta(\mathbf{x}_0) = \mathbb{E}_{q(\mathbf{x}_{1:T} | \mathbf{x}_0)} \left[ \mathcal{N}(\mathbf{x}_T; \mathbf{0}, \mathbf{I}) \frac{\prod_{t=1}^T \mathcal{N}(\mathbf{x}_{t-1}; \boldsymbol{\mu}_\theta(\mathbf{x}_t, t), \boldsymbol{\Sigma}_\theta(\mathbf{x}_t, t))}{\prod_{t=1}^T \mathcal{N}(\mathbf{x}_t; \sqrt{1-\beta_t}\mathbf{x}_{t-1}, \beta_t\mathbf{I})} \right]$$

This quantity is very easy to estimate using the samples of the forward process:
Let $\mathbf{x}_{1:T}^j$ be the $j^{th}$ trajectory generated from $\mathbf{x}_0$ during the forward process, $q(\mathbf{x}_t | \mathbf{x}_{t-1})$
Let us generate $J$ trajectories from $\mathbf{x}_0$.

![Trajectories Diagram]

Now we have that
$$p_\theta(\mathbf{x}_0) \approx \hat{p}_\theta(\mathbf{x}_0) \doteq \frac{1}{J} \sum_{j=1}^J \left[ \mathcal{N}(\mathbf{x}_T^j; \mathbf{0}, \mathbf{I}) \frac{\prod_{t=1}^T \mathcal{N}(\mathbf{x}_{t-1}^j; \boldsymbol{\mu}_\theta(\mathbf{x}_t^j, t), \boldsymbol{\Sigma}_\theta(\mathbf{x}_t^j, t))}{\prod_{t=1}^T \mathcal{N}(\mathbf{x}_t^j; \sqrt{1-\beta_t}\mathbf{x}_{t-1}^j, \beta_t\mathbf{I})} \right]$$

This is easy to calculate
### Visual Description
The slide explains how to estimate the likelihood using Monte Carlo sampling. It includes a diagram showing a single starting point $\mathbf{x}_0$ branching into multiple red squiggly lines representing $J$ different trajectories ending at $\mathbf{x}_T^1, \mathbf{x}_T^j, \dots, \mathbf{x}_T^J$. Below the diagram, the Monte Carlo estimator formula is presented, with a concluding note in red stating "This is easy to calculate".

---
## Page 68
### Content
# Monte Carlo Likelihood Estimation
Let us use these ideas to estimate the log likelihood function
Let $\mathbf{x}_0^1, \dots, \mathbf{x}_0^n$ be samples from the data distribution $q$, e.g. a set of $n$ images.
Let $\mathbf{x}_{1:T}^{i,j}$ be the $j^{th}$ trajectory generated from $\mathbf{x}_0^i$ during the forward process.
Let us generate $J$ trajectories from $\mathbf{x}_0^i$.

![Multiple Trajectories Diagram]

Since $J(\theta) = \frac{1}{n} \sum_{i=1}^n \log p_\theta(\mathbf{x}_0^i)$ and $\hat{p}_\theta(\mathbf{x}_0) \doteq \frac{1}{J} \sum_{j=1}^J \left[ \mathcal{N}(\mathbf{x}_T^j; \mathbf{0}, \mathbf{I}) \frac{\prod_{t=1}^T \mathcal{N}(\mathbf{x}_{t-1}^j; \boldsymbol{\mu}_\theta(\mathbf{x}_t^j, t), \boldsymbol{\Sigma}_\theta(\mathbf{x}_t^j, t))}{\prod_{t=1}^T \mathcal{N}(\mathbf{x}_t^j; \sqrt{1-\beta_t}\mathbf{x}_{t-1}^j, \beta_t\mathbf{I})} \right]$

We have that
$$\hat{J}(\theta) \doteq \frac{1}{nJ} \sum_{i=1}^n \log \sum_{j=1}^J \left[ \mathcal{N}(\mathbf{x}_T^{i,j}; \mathbf{0}, \mathbf{I}) \frac{\prod_{t=1}^T \mathcal{N}(\mathbf{x}_{t-1}^{i,j}; \boldsymbol{\mu}_\theta(\mathbf{x}_t^{i,j}, t), \boldsymbol{\Sigma}_\theta(\mathbf{x}_t^{i,j}, t))}{\prod_{t=1}^T \mathcal{N}(\mathbf{x}_t^{i,j}; \sqrt{1-\beta_t}\mathbf{x}_{t-1}^{i,j}, \beta_t\mathbf{I})} \right]$$
### Visual Description
This slide extends the Monte Carlo estimation to the log-likelihood over a dataset of $n$ samples. It features a diagram with three sets of trajectories (represented by red squiggly lines) starting from different data points $\mathbf{x}_0^1, \mathbf{x}_0^i, \dots, \mathbf{x}_0^n$. Each data point has $J$ trajectories. The bottom of the slide shows the combined formula for the estimated log-likelihood $\hat{J}(\theta)$.

---
## Page 69
### Content
# Monte Carlo Likelihood Estimation
Let $\mathbf{x}_0^1, \dots, \mathbf{x}_0^n$ be samples from the data distribution $q$, e.g. a set of $n$ images.
Let $\mathbf{x}_{1:T}^{i,j}$ be the $j^{th}$ trajectory generated from $\mathbf{x}_0^i$ during the forward process.

$$\hat{J}(\theta) \doteq \frac{1}{nJ} \sum_{i=1}^n \log \sum_{j=1}^J \left[ \mathcal{N}(\mathbf{x}_T^{i,j}; \mathbf{0}, \mathbf{I}) \frac{\prod_{t=1}^T \mathcal{N}(\mathbf{x}_{t-1}^{i,j}; \boldsymbol{\mu}_\theta(\mathbf{x}_t^{i,j}, t), \boldsymbol{\Sigma}_\theta(\mathbf{x}_t^{i,j}, t))}{\prod_{t=1}^T \mathcal{N}(\mathbf{x}_t^{i,j}; \sqrt{1-\beta_t}\mathbf{x}_{t-1}^{i,j}, \beta_t\mathbf{I})} \right]$$

This is the Monte Carlo Estimate of the likelihood function

We could optimize this with gradient descent
It is still not used in practice.
Instead, a variational bound is optimized that doesn’t require these Monte Carlo trajectories
### Visual Description
A summary slide for Monte Carlo Likelihood Estimation. It repeats the final estimator formula and provides context: while it could be optimized with gradient descent, it is not used in practice. Instead, red text explains that a variational bound is preferred because it avoids the need for these Monte Carlo trajectories.

---
## Page 70
### Content
# Variational (ELBO) Bound
### Visual Description
Section header slide with the title "Variational (ELBO) Bound" centered in a bold, blue font on a white background.

---
## Page 71
### Content
# Jensen’s Inequality
![Jensen's Inequality Graph]

Jensen’s inequality: for any random variable $X$, $\mathbb{E}[\log(X)] \le \log(\mathbb{E}[X])$

Therefore, for any function $f$, and any random variable $Z$, with $X = f(Z)$
$$\mathbb{E}[\log f(Z)] \le \log \mathbb{E}[f(Z)]$$
$$\int d\mathbf{z} \ q(\mathbf{z}) [\log f(\mathbf{z})] \le \log \left[ \int d\mathbf{z} \ q(\mathbf{z}) f(\mathbf{z}) \right]$$
### Visual Description
The slide illustrates Jensen's Inequality. It features a graph of a concave function (red curve, representing $\log(x)$) and a secant line (black chord) connecting two points $(x_1, \log(x_1))$ and $(x_2, \log(x_2))$. Points on the x-axis show $x_1, \mathbb{E}[X],$ and $x_2$. Points on the y-axis show $\mathbb{E}[\log(X)]$ (on the chord) and $\log(\mathbb{E}[X])$ (on the curve), demonstrating that the curve is above the chord. Below the graph, the inequality is stated in general form and then specifically for an integral over a distribution $q(\mathbf{z})$.

---
## Page 72
### Content
# Rewriting the Log-Likelihood Function
$$p_\theta(\mathbf{x}_0) = \int d\mathbf{x}_{1:T} \ p_\theta(\mathbf{x}_{0:T})$$
$$= \int d\mathbf{x}_{1:T} \ p_\theta(\mathbf{x}_{0:T}) \frac{q(\mathbf{x}_{1:T} | \mathbf{x}_0)}{q(\mathbf{x}_{1:T} | \mathbf{x}_0)}$$
$$= \int d\mathbf{x}_{1:T} \ q(\mathbf{x}_{1:T} | \mathbf{x}_0) \frac{p_\theta(\mathbf{x}_{0:T})}{q(\mathbf{x}_{1:T} | \mathbf{x}_0)}$$
$$= \int d\mathbf{x}_{1:T} \ q(\mathbf{x}_{1:T} | \mathbf{x}_0) p_\theta(\mathbf{x}_T) \frac{p_\theta(\mathbf{x}_{0:T-1} | \mathbf{x}_T)}{q(\mathbf{x}_{1:T} | \mathbf{x}_0)}$$
$$= \int d\mathbf{x}_{1:T} \ q(\mathbf{x}_{1:T} | \mathbf{x}_0) p_\theta(\mathbf{x}_T) \frac{\prod_{t=1}^T p_\theta(\mathbf{x}_{t-1} | \mathbf{x}_t)}{\prod_{t=1}^T q(\mathbf{x}_t | \mathbf{x}_{t-1})}$$

$$J(\theta) = \mathbb{E}_{\mathbf{x}_0 \sim q} \log p_\theta(\mathbf{x}_0)$$
$$= \int d\mathbf{x}_0 \ q(\mathbf{x}_0) \log p_\theta(\mathbf{x}_0)$$
$$= \int d\mathbf{x}_0 \ q(\mathbf{x}_0) \log \left[ \int d\mathbf{x}_{1:T} \ q(\mathbf{x}_{1:T} | \mathbf{x}_0) p_\theta(\mathbf{x}_T) \prod_{t=1}^T \frac{p_\theta(\mathbf{x}_{t-1} | \mathbf{x}_t)}{q(\mathbf{x}_t | \mathbf{x
## Page 73
### Content
# Lower Bound on The Likelihood Function

$$J(\theta) = \int d\mathbf{x}_0 q(\mathbf{x}_0) \log \underbrace{\left[ \int d\mathbf{x}_{1:T} q(\mathbf{x}_{1:T}|\mathbf{x}_0) p_\theta(\mathbf{x}_T) \prod_{t=1}^T \frac{p_\theta(\mathbf{x}_{t-1}|\mathbf{x}_t)}{q(\mathbf{x}_t|\mathbf{x}_{t-1})} \right]}_{p_\theta(\mathbf{x}_0)}$$

From Jensen's inequality we know that for any function $f$,
$$\log \left[ \int d\mathbf{x} q(\mathbf{x}) f(\mathbf{x}) \right] \geq \int d\mathbf{x} q(\mathbf{x}) [\log f(\mathbf{x})]$$

Therefore,
$$J(\theta) = \int d\mathbf{x}_0 q(\mathbf{x}_0) \log \underbrace{\left[ \int d\mathbf{x}_{1:T} q(\mathbf{x}_{1:T}|\mathbf{x}_0) p_\theta(\mathbf{x}_T) \prod_{t=1}^T \frac{p_\theta(\mathbf{x}_{t-1}|\mathbf{x}_t)}{q(\mathbf{x}_t|\mathbf{x}_{t-1})} \right]}_{f(\mathbf{x})}$$
$$\geq \int d\mathbf{x}_0 q(\mathbf{x}_0) \int d\mathbf{x}_{1:T} q(\mathbf{x}_{1:T}|\mathbf{x}_0) \log \left[ p_\theta(\mathbf{x}_T) \prod_{t=1}^T \frac{p_\theta(\mathbf{x}_{t-1}|\mathbf{x}_t)}{q(\mathbf{x}_t|\mathbf{x}_{t-1})} \right]$$
$$= \int d\mathbf{x}_{0:T} q(\mathbf{x}_{0:T}) \log \left[ p_\theta(\mathbf{x}_T) \prod_{t=1}^T \frac{p_\theta(\mathbf{x}_{t-1}|\mathbf{x}_t)}{q(\mathbf{x}_t|\mathbf{x}_{t-1})} \right] = K(\theta)$$

We will maximize $K(\theta)$, which is a lower bound on $J(\theta)$

Now inside the log there is a product of terms, so this can be simplified

### Visual Description
Mathematical derivation showing the application of Jensen's inequality to find a lower bound $K(\theta)$ for the likelihood function $J(\theta)$. Braces are used to identify terms within the integral as $p_\theta(\mathbf{x}_0)$ and $f(\mathbf{x})$.

---
## Page 74
### Content
# The Variational Bound can be Rewritten

$$K(\theta) = \mathbb{E}_{q(\mathbf{x}_{0:T})} \left[ \log p(\mathbf{x}_T) + \sum_{t=1}^T \log \frac{p_\theta(\mathbf{x}_{t-1}|\mathbf{x}_t)}{q(\mathbf{x}_t|\mathbf{x}_{t-1})} \right]$$

After some further calculations, we can rewrite this expression:
$$K(\theta) = \mathbb{E}_q \left[ \log p(\mathbf{x}_T) + \sum_{t=1}^T \log \frac{p_\theta(\mathbf{x}_{t-1}|\mathbf{x}_t)}{q(\mathbf{x}_t|\mathbf{x}_{t-1})} \right]$$
$$= \mathbb{E}_q \left[ \log p(\mathbf{x}_T) + \sum_{t=2}^T \log \frac{p_\theta(\mathbf{x}_{t-1}|\mathbf{x}_t)}{q(\mathbf{x}_t|\mathbf{x}_{t-1})} + \log \frac{p_\theta(\mathbf{x}_0|\mathbf{x}_1)}{q(\mathbf{x}_1|\mathbf{x}_0)} \right]$$
$$= \mathbb{E}_q \left[ \log p(\mathbf{x}_T) + \sum_{t=2}^T \log \left[ \frac{p_\theta(\mathbf{x}_{t-1}|\mathbf{x}_t)}{q(\mathbf{x}_{t-1}|\mathbf{x}_t, \mathbf{x}_0)} \cdot \frac{q(\mathbf{x}_{t-1}|\mathbf{x}_0)}{q(\mathbf{x}_t|\mathbf{x}_0)} \right] + \log \frac{p_\theta(\mathbf{x}_0|\mathbf{x}_1)}{q(\mathbf{x}_1|\mathbf{x}_0)} \right]$$

Here we used that since the forward process $q$ is a Markov chain $q(\mathbf{x}_t|\mathbf{x}_{t-1}) = q(\mathbf{x}_t|\mathbf{x}_{t-1}, \mathbf{x}_0)$

Using the Bayes rule, $q(\mathbf{x}_t|\mathbf{x}_{t-1}) = q(\mathbf{x}_t|\mathbf{x}_{t-1}, \mathbf{x}_0) = q(\mathbf{x}_{t-1}|\mathbf{x}_t, \mathbf{x}_0) \cdot \frac{q(\mathbf{x}_t|\mathbf{x}_0)}{q(\mathbf{x}_{t-1}|\mathbf{x}_0)}$

Therefore, $\frac{1}{q(\mathbf{x}_t|\mathbf{x}_{t-1})} = \frac{1}{q(\mathbf{x}_{t-1}|\mathbf{x}_t, \mathbf{x}_0)} \cdot \frac{q(\mathbf{x}_{t-1}|\mathbf{x}_0)}{q(\mathbf{x}_t|\mathbf{x}_0)}$

### Visual Description
Mathematical derivation rewriting the variational bound $K(\theta)$ using properties of Markov chains and Bayes' rule. The top equation is highlighted in red.

---
## Page 75
### Content
# Maximizing The Variational Bound

Continuing the calculations,
$$K(\theta) = \mathbb{E}_q \left[ \log p(\mathbf{x}_T) + \sum_{t=2}^T \log \left[ \frac{p_\theta(\mathbf{x}_{t-1}|\mathbf{x}_t)}{q(\mathbf{x}_{t-1}|\mathbf{x}_t, \mathbf{x}_0)} \cdot \frac{q(\mathbf{x}_{t-1}|\mathbf{x}_0)}{q(\mathbf{x}_t|\mathbf{x}_0)} \right] + \log \frac{p_\theta(\mathbf{x}_0|\mathbf{x}_1)}{q(\mathbf{x}_1|\mathbf{x}_0)} \right]$$
$$= \mathbb{E}_q \left[ \log p(\mathbf{x}_T) + \sum_{t=2}^T \log \left[ \frac{p_\theta(\mathbf{x}_{t-1}|\mathbf{x}_t)}{q(\mathbf{x}_{t-1}|\mathbf{x}_t, \mathbf{x}_0)} \right] + \sum_{t=2}^T \log \frac{q(\mathbf{x}_{t-1}|\mathbf{x}_0)}{q(\mathbf{x}_t|\mathbf{x}_0)} + \log \frac{p_\theta(\mathbf{x}_0|\mathbf{x}_1)}{q(\mathbf{x}_1|\mathbf{x}_0)} \right]$$
$$= \mathbb{E}_q \left[ \log p(\mathbf{x}_T) + \sum_{t=2}^T \log \left[ \frac{p_\theta(\mathbf{x}_{t-1}|\mathbf{x}_t)}{q(\mathbf{x}_{t-1}|\mathbf{x}_t, \mathbf{x}_0)} \right] + \sum_{t=2}^T \log q(\mathbf{x}_{t-1}|\mathbf{x}_0) - \sum_{t=2}^T \log q(\mathbf{x}_t|\mathbf{x}_0) + \log \frac{p_\theta(\mathbf{x}_0|\mathbf{x}_1)}{q(\mathbf{x}_1|\mathbf{x}_0)} \right]$$
$$= \mathbb{E}_q \left[ \log p(\mathbf{x}_T) + \sum_{t=2}^T \log \left[ \frac{p_\theta(\mathbf{x}_{t-1}|\mathbf{x}_t)}{q(\mathbf{x}_{t-1}|\mathbf{x}_t, \mathbf{x}_0)} \right] + \sum_{t=1}^{T-1} \log q(\mathbf{x}_t|\mathbf{x}_0) - \sum_{t=2}^T \log q(\mathbf{x}_t|\mathbf{x}_0) + \log \frac{p_\theta(\mathbf{x}_0|\mathbf{x}_1)}{q(\mathbf{x}_1|\mathbf{x}_0)} \right]$$
$$= \mathbb{E}_q \left[ \log p(\mathbf{x}_T) - \log q(\mathbf{x}_T|\mathbf{x}_0) + \sum_{t=2}^T \log \frac{p_\theta(\mathbf{x}_{t-1}|\mathbf{x}_t)}{q(\mathbf{x}_{t-1}|\mathbf{x}_t, \mathbf{x}_0)} + \log p_\theta(\mathbf{x}_0|\mathbf{x}_1) \right]$$
$$= \mathbb{E}_q \left[ \log \frac{p(\mathbf{x}_T)}{q(\mathbf{x}_T|\mathbf{x}_0)} + \sum_{t=2}^T \log \frac{p_\theta(\mathbf{x}_{t-1}|\mathbf{x}_t)}{q(\mathbf{x}_{t-1}|\mathbf{x}_t, \mathbf{x}_0)} + \log p_\theta(\mathbf{x}_0|\mathbf{x}_1) \right]$$

### Visual Description
Mathematical derivation continuing the simplification of the variational bound $K(\theta)$ through telescoping sums and logarithmic properties.

---
## Page 76
### Content
# Calculating $q(\mathbf{x}_T|\mathbf{x}_0)$

### Visual Description
Text-only slide.

---
## Page 77
### Content
# Calculating $q(\mathbf{x}_T|\mathbf{x}_0)$

$q(\mathbf{x}_t|\mathbf{x}_{t-1}) := \mathcal{N}(\mathbf{x}_t; \sqrt{1 - \beta_t}\mathbf{x}_{t-1}, \beta_t\mathbf{I})$

$q(\mathbf{x}_1|\mathbf{x}_0) := \mathcal{N}(\mathbf{x}_1; \sqrt{1 - \beta_1}\mathbf{x}_0, \beta_1\mathbf{I}) \quad \mathbf{x}_1 = \sqrt{1 - \beta_1}\mathbf{x}_0 + \mu_0, \text{ where } \mu_0 \sim \mathcal{N}(\mu_0; \mathbf{0}, \beta_1\mathbf{I})$

$q(\mathbf{x}_2|\mathbf{x}_1) := \mathcal{N}(\mathbf{x}_2; \sqrt{1 - \beta_2}\mathbf{x}_1, \beta_2\mathbf{I}) \quad \mathbf{x}_2 = \sqrt{1 - \beta_2}\mathbf{x}_1 + \mu_1, \text{ where } \mu_1 \sim \mathcal{N}(\mu_1; \mathbf{0}, \beta_2\mathbf{I})$

$\mathbf{x}_2 = \sqrt{1 - \beta_2}\mathbf{x}_1 + \mu_1 = \sqrt{1 - \beta_2}(\sqrt{1 - \beta_1}\mathbf{x}_0 + \mu_0) + \mu_1$
$= \sqrt{1 - \beta_2}\sqrt{1 - \beta_1}\mathbf{x}_0 + \underbrace{\sqrt{1 - \beta_2}\mu_0 + \mu_1}_{\mathcal{N}(\mathbf{0}, (1 - \beta_2)\beta_1\mathbf{I})}$
$\underbrace{\mathcal{N}(\mathbf{0}, (1 - \beta_2)\beta_1 + \beta_2\mathbf{I})}_{(\beta_1 + \beta_2 - \beta_1\beta_2)\mathbf{I}} = (1 - (1 - \beta_1)(1 - \beta_2))\mathbf{I}$

Therefore, $q(\mathbf{x}_2|\mathbf{x}_0) = \mathcal{N}(\mathbf{x}_2; \sqrt{1 - \beta_2}\sqrt{1 - \beta_1}\mathbf{x}_0, (1 - (1 - \beta_1)(1 - \beta_2))\mathbf{I})$

Using induction, we can see that
$$q(\mathbf{x}_T|\mathbf{x}_0) = \mathcal{N}(\mathbf{x}_T; (\prod_{t=1}^T \sqrt{1 - \beta_t})\mathbf{x}_0, (1 - (\prod_{t=1}^T (1 - \beta_t)))\mathbf{I})$$

### Visual Description
Mathematical derivation using the reparameterization trick and properties of Gaussian distributions to find the closed-form expression for $q(\mathbf{x}_T|\mathbf{x}_0)$ via induction. Braces are used to show the combination of noise terms.

---
## Page 78
### Content
# Calculating $q(\mathbf{x}_T|\mathbf{x}_0)$

Let $\alpha_t \doteq 1 - \beta_t, \bar{\alpha}_T = \prod_{t=1}^T \alpha_t$

Therefore, $q(\mathbf{x}_T|\mathbf{x}_0) = \mathcal{N}(\mathbf{x}_T; (\prod_{t=1}^T \sqrt{1 - \beta_t})\mathbf{x}_0, (1 - (\prod_{t=1}^T (1 - \beta_t)))\mathbf{I})$
$= \mathcal{N}(\mathbf{x}_T; (\prod_{t=1}^T \sqrt{\alpha_t})\mathbf{x}_0, (1 - (\prod_{t=1}^T \alpha_t))\mathbf{I})$
$= \mathcal{N}(\mathbf{x}_T; (\sqrt{\prod_{t=1}^T \alpha_t})\mathbf{x}_0, (1 - (\prod_{t=1}^T \alpha_t))\mathbf{I})$
$= \mathcal{N}(\mathbf{x}_T; \sqrt{\bar{\alpha}_T}\mathbf{x}_0, (1 - \bar{\alpha}_T)\mathbf{I})$

### Visual Description
Mathematical simplification of the expression for $q(\mathbf{x}_T|\mathbf{x}_0)$ using the notation $\alpha_t$ and $\bar{\alpha}_T$.

---
## Page 79
### Content
# Calculating $q(\mathbf{x}_{
## Page 81
### Content
# Calculating $q(\mathbf{x}_{t-1} | \mathbf{x}_t, \mathbf{x}_0)$

$$q(\mathbf{x}_{t-1} | \mathbf{x}_t, \mathbf{x}_0) = \text{const} \times \mathcal{N}(\mathbf{x}_t; \sqrt{1 - \beta_t}\mathbf{x}_{t-1}, \beta_t \mathbf{I}) \mathcal{N}(\mathbf{x}_{t-1}; \sqrt{\bar{\alpha}_{t-1}}\mathbf{x}_0, (1 - \bar{\alpha}_{t-1})\mathbf{I})$$

$$= \text{const} \times \frac{1}{\sqrt{|2\pi\beta_t\mathbf{I}|}} \exp\left(-\frac{1}{2\beta_t}\|\mathbf{x}_t - \sqrt{1 - \beta_t}\mathbf{x}_{t-1}\|^2\right) \times \frac{1}{\sqrt{|2\pi(1 - \bar{\alpha}_{t-1})\mathbf{I}|}} \exp\left(-\frac{1}{2(1 - \bar{\alpha}_{t-1})}\|\mathbf{x}_{t-1} - \sqrt{\bar{\alpha}_{t-1}}\mathbf{x}_0\|^2\right)$$

$$= \text{const} \times \exp\left(-\frac{1}{2\beta_t}\|\mathbf{x}_t - \sqrt{1 - \beta_t}\mathbf{x}_{t-1}\|^2\right) \times \exp\left(-\frac{1}{2(1 - \bar{\alpha}_{t-1})}\|\mathbf{x}_{t-1} - \sqrt{\bar{\alpha}_{t-1}}\mathbf{x}_0\|^2\right)$$

$$= \text{const} \times \exp\left(-\frac{1}{2\beta_t}\|\mathbf{x}_t - \sqrt{1 - \beta_t}\mathbf{x}_{t-1}\|^2 - \frac{1}{2(1 - \bar{\alpha}_{t-1})}\|\mathbf{x}_{t-1} - \sqrt{\bar{\alpha}_{t-1}}\mathbf{x}_0\|^2\right)$$

$$= \text{const} \times \exp\left(-\frac{(1 - \bar{\alpha}_{t-1})}{2\beta_t(1 - \bar{\alpha}_{t-1})}\|\mathbf{x}_t - \sqrt{1 - \beta_t}\mathbf{x}_{t-1}\|^2 - \frac{\beta_t}{2\beta_t(1 - \bar{\alpha}_{t-1})}\|\mathbf{x}_{t-1} - \sqrt{\bar{\alpha}_{t-1}}\mathbf{x}_0\|^2\right)$$

$$= \text{const} \times \exp\left(-\frac{(1 - \bar{\alpha}_{t-1})}{2\beta_t(1 - \bar{\alpha}_{t-1})} \left(\|\mathbf{x}_t\|^2 + (1 - \beta_t)\|\mathbf{x}_{t-1}\|^2 - 2\mathbf{x}_t^T \sqrt{1 - \beta_t}\mathbf{x}_{t-1}\right) \right.$$
$$\left. - \frac{\beta_t}{2\beta_t(1 - \bar{\alpha}_{t-1})} \left(\|\mathbf{x}_{t-1}\|^2 + \bar{\alpha}_{t-1}\|\mathbf{x}_0\|^2 - 2\sqrt{\bar{\alpha}_{t-1}}\mathbf{x}_0^T \mathbf{x}_{t-1}\right)\right)$$

### Visual Description
The slide shows the mathematical derivation for calculating the posterior distribution $q(\mathbf{x}_{t-1} | \mathbf{x}_t, \mathbf{x}_0)$. It starts with the product of two Gaussian distributions and proceeds through several steps of algebraic manipulation of the exponential terms, expanding the squared norms.

---
## Page 82
### Content
# Calculating $q(\mathbf{x}_{t-1} | \mathbf{x}_t, \mathbf{x}_0)$

$$q(\mathbf{x}_{t-1} | \mathbf{x}_t, \mathbf{x}_0) = \text{const} \times \exp\left(-\frac{(1 - \bar{\alpha}_{t-1})}{2\beta_t(1 - \bar{\alpha}_{t-1})} \left(\|\mathbf{x}_t\|^2 + (1 - \beta_t)\|\mathbf{x}_{t-1}\|^2 - 2\mathbf{x}_t^T \sqrt{1 - \beta_t}\mathbf{x}_{t-1}\right) \right.$$
$$\left. - \frac{\beta_t}{2\beta_t(1 - \bar{\alpha}_{t-1})} \left(\|\mathbf{x}_{t-1}\|^2 + \bar{\alpha}_{t-1}\|\mathbf{x}_0\|^2 - 2\sqrt{\bar{\alpha}_{t-1}}\mathbf{x}_0^T \mathbf{x}_{t-1}\right)\right)$$

$$= \text{const} \times \exp\left(-\frac{(1 - \bar{\alpha}_{t-1})}{2\beta_t(1 - \bar{\alpha}_{t-1})} \left((1 - \beta_t)\|\mathbf{x}_{t-1}\|^2 - 2\mathbf{x}_t^T \sqrt{1 - \beta_t}\mathbf{x}_{t-1}\right) - \frac{\beta_t}{2\beta_t(1 - \bar{\alpha}_{t-1})} \left(\|\mathbf{x}_{t-1}\|^2 - 2\sqrt{\bar{\alpha}_{t-1}}\mathbf{x}_0^T \mathbf{x}_{t-1}\right)\right)$$

$$= \text{const} \times \exp\left(-\frac{(1 - \bar{\alpha}_{t-1})(1 - \beta_t) + \beta_t}{2\beta_t(1 - \bar{\alpha}_{t-1})}\|\mathbf{x}_{t-1}\|^2 + \frac{(1 - \bar{\alpha}_{t-1})}{2\beta_t(1 - \bar{\alpha}_{t-1})} 2\mathbf{x}_t^T \sqrt{1 - \beta_t}\mathbf{x}_{t-1} + \frac{\beta_t}{2\beta_t(1 - \bar{\alpha}_{t-1})} 2\sqrt{\bar{\alpha}_{t-1}}\mathbf{x}_0^T \mathbf{x}_{t-1}\right)$$

**Lemma**
$$(1 - \bar{\alpha}_{t-1})(1 - \beta_t) + \beta_t = 1 - \bar{\alpha}_t$$

**Proof**
$$\bar{\alpha}_{t-1}(1 - \beta_t) = \bar{\alpha}_t$$
$$\bar{\alpha}_{t-1} - \bar{\alpha}_{t-1}\beta_t = \bar{\alpha}_t$$
$$1 - \bar{\alpha}_{t-1} + \bar{\alpha}_{t-1}\beta_t = 1 - \bar{\alpha}_t$$
$$1 - \bar{\alpha}_{t-1} + \bar{\alpha}_{t-1}\beta_t - \beta_t + \beta_t = 1 - \bar{\alpha}_t$$
$$(1 - \bar{\alpha}_{t-1})(1 - \beta_t) + \beta_t = 1 - \bar{\alpha}_t$$

### Visual Description
The slide continues the derivation from the previous page. It groups terms related to $\mathbf{x}_{t-1}$ and introduces a Lemma to simplify the coefficient of $\|\mathbf{x}_{t-1}\|^2$. A step-by-step proof for the Lemma is provided at the bottom.

---
## Page 83
### Content
# Calculating $q(\mathbf{x}_{t-1} | \mathbf{x}_t, \mathbf{x}_0)$

$$(1 - \bar{\alpha}_{t-1})(1 - \beta_t) + \beta_t = 1 - \bar{\alpha}_t$$

$$q(\mathbf{x}_{t-1} | \mathbf{x}_t, \mathbf{x}_0)$$
$$= \text{const} \times \exp\left(-\frac{(1 - \bar{\alpha}_{t-1})(1 - \beta_t) + \beta_t}{2\beta_t(1 - \bar{\alpha}_{t-1})}\|\mathbf{x}_{t-1}\|^2 + \frac{(1 - \bar{\alpha}_{t-1})}{2\beta_t(1 - \bar{\alpha}_{t-1})} 2\mathbf{x}_t^T \sqrt{1 - \beta_t}\mathbf{x}_{t-1} + \frac{\beta_t}{2\beta_t(1 - \bar{\alpha}_{t-1})} 2\sqrt{\bar{\alpha}_{t-1}}\mathbf{x}_0^T \mathbf{x}_{t-1}\right)$$

$$= \text{const} \times \exp\left(-\frac{1 - \bar{\alpha}_t}{2\beta_t(1 - \bar{\alpha}_{t-1})}\|\mathbf{x}_{t-1}\|^2 + \frac{(1 - \bar{\alpha}_{t-1})}{\beta_t(1 - \bar{\alpha}_{t-1})} \mathbf{x}_t^T \sqrt{1 - \beta_t}\mathbf{x}_{t-1} + \frac{\beta_t}{\beta_t(1 - \bar{\alpha}_{t-1})} \sqrt{\bar{\alpha}_{t-1}}\mathbf{x}_0^T \mathbf{x}_{t-1}\right)$$

$$= \text{const} \times \exp\left(-\frac{1 - \bar{\alpha}_t}{2\beta_t(1 - \bar{\alpha}_{t-1})}\|\mathbf{x}_{t-1}\|^2 + \frac{(1 - \bar{\alpha}_{t-1})\sqrt{1 - \beta_t}\mathbf{x}_t^T + \beta_t\sqrt{\bar{\alpha}_{t-1}}\mathbf{x}_0^T}{\beta_t(1 - \bar{\alpha}_{t-1})} \mathbf{x}_{t-1}\right)$$

### Visual Description
The slide continues the derivation, applying the Lemma from the previous page to simplify the exponent. It combines the linear terms in $\mathbf{x}_{t-1}$ into a single fraction.

---
## Page 84
### Content
# Calculating $q(\mathbf{x}_{t-1} | \mathbf{x}_t, \mathbf{x}_0)$

$$q(\mathbf{x}_{t-1} | \mathbf{x}_t, \mathbf{x}_0) = \text{const} \times \exp\left(-\frac{1 - \bar{\alpha}_t}{2\beta_t(1 - \bar{\alpha}_{t-1})}\|\mathbf{x}_{t-1}\|^2 + \frac{(1 - \bar{\alpha}_{t-1})\sqrt{1 - \beta_t}\mathbf{x}_t^T + \beta_t\sqrt{\bar{\alpha}_{t-1}}\mathbf{x}_0^T}{\beta_t(1 - \bar{\alpha}_{t-1})} \mathbf{x}_{t-1}\right)$$

$$\mathcal{N}(\mathbf{x}; \mathbf{z}, \lambda \mathbf{I}) = \text{const} \times \exp\left(-\frac{1}{2\lambda}\|\mathbf{x} - \mathbf{z}\|^2\right)$$
$$= \text{const} \times \exp\left(-\frac{1}{2\lambda}(\|\mathbf{x}\|^2 + \|\mathbf{z}\|^2 - 2\mathbf{z}^T \mathbf{x})\right)$$
$$= \text{const} \times \exp\left(-\frac{1}{2\lambda}\|\mathbf{x}\|^2 + \frac{1}{\lambda}\mathbf{z}^T \mathbf{x}\right)$$

$$\Rightarrow \lambda = \frac{\beta_t(1 - \bar{\alpha}_{t-1})}{1 - \bar{\alpha}_t} \quad \frac{1}{\lambda}\mathbf{z}^T = \frac{(1 - \bar{\alpha}_{t-1})\sqrt{1 - \beta_t}\mathbf{x}_t^T + \beta_t\sqrt{\bar{\alpha}_{t-1}}\mathbf{x}_0^T}{\beta_t(1 - \bar{\alpha}_{t-1})}$$

$$\Rightarrow \mathbf{z}^T = \frac{\beta_t(1 - \bar{\alpha}_{t-1})}{1 - \bar{\alpha}_t} \frac{(1 - \bar{\alpha}_{t-1})\sqrt{1 - \beta_t}\mathbf{x}_t^T + \beta_t\sqrt{\bar{\alpha}_{t-1}}\mathbf{x}_0^T}{\beta_t(1 - \bar{\alpha}_{t-1})} = \frac{(1 - \bar{\alpha}_{t-1})\sqrt{1 - \beta_t}\mathbf{x}_t^T + \beta_t\sqrt{\bar{\alpha}_{t-1}}\mathbf{x}_0^T}{1 - \bar{\alpha}_t} \mathbf{x}_{t-1}$$

$$\color{red} \Rightarrow q(\mathbf{x}_{t-1} | \mathbf{x}_t, \mathbf{x}_0) = \mathcal{N}\left(\mathbf{x}_{t-1}; \frac{(1 - \bar{\alpha}_{t-1})\sqrt{1 - \beta_t}\mathbf{x}_t + \beta_t\sqrt{\bar{\alpha}_{t-1}}\mathbf{x}_0}{1 - \bar{\alpha}_t}, \frac{\beta_t(1 - \bar{\alpha}_{t-1})}{1 - \bar{\alpha}_t}\mathbf{I}\right)$$

### Visual Description
The slide completes the derivation by comparing the simplified exponential form to the standard form of a Gaussian distribution $\mathcal{N}(\mathbf{x}; \mathbf{z}, \lambda \mathbf{I})$. It identifies the variance $\lambda$ and the mean $\mathbf{z}$, leading to the final expression for $q(\mathbf{x}_{t-1} | \mathbf{x}_t, \mathbf{x}_0)$ highlighted in red.

---
## Page 85
### Content
# Rewriting $\tilde{\boldsymbol{\mu}}_t(\mathbf{x}_t, \mathbf{x}_0)$

### Visual Description
This is a transition slide with the title "Rewriting $\tilde{\boldsymbol{\mu}}_t(\mathbf{x}_t, \mathbf{x}_0)$" in large blue text in the center.

---
## Page 86
### Content
# Rewriting $\tilde{\boldsymbol{\mu}}_t(\mathbf{x}_t, \mathbf{x}_0)$

Since $\tilde{\boldsymbol{\mu}}_t(\mathbf{x}_t, \mathbf{x}_0) = \frac{(1 - \bar{\alpha}_{t-1})\sqrt{1 - \beta_t}\mathbf{x}_t + \beta_t\sqrt{\bar{\alpha}_{t-1}}\mathbf{x}_0}{1 - \bar{\alpha}_t}$

$$= \frac{(1 - \bar{\alpha}_{t-1})\sqrt{1 - \beta_t}\mathbf{x}_t + \beta_t\sqrt{\bar{\alpha}_{t-1}}\frac{1}{\sqrt{\bar{\alpha}_t}}\left(\mathbf{x}_t - \sqrt{(1 - \bar{\alpha}_t)}\epsilon\right)}{1 - \bar{\alpha}_t} \quad \text{Since } \mathbf{x}_0 = \frac{1}{\sqrt{\bar{\alpha}_t}}\left(\mathbf{x}_t - \sqrt{(1 - \bar{\alpha}_t)}\epsilon\right)$$

$$= \frac{\left((1 - \bar{\alpha}_{t-1})\sqrt{1 - \beta_t} + \beta_t\sqrt{\bar{\alpha}_{t-1}}\frac{1}{\sqrt{\bar{\alpha}_t}}\right)\mathbf{x}_t - \beta_t\sqrt{\bar{\alpha}_{t-1}}\frac{1}{\sqrt{\bar{\alpha}_t}}\sqrt{(1 - \bar{\alpha}_t)}\epsilon}{1 - \bar{\alpha}_t}$$

$$= \frac{\left((1 - \bar{\alpha}_{t-1})\sqrt{1 - \beta_t} + \beta_t\sqrt{\bar{\alpha}_{t-1}}\frac{1}{\sqrt{\bar{\alpha}_t}}\right)\mathbf{x}_t}{1 - \bar{\alpha}_t} - \frac{\beta_t\sqrt{\bar{\alpha}_{t-1}}\frac{1}{\sqrt{\bar{\alpha}_t}}\sqrt{(1 - \bar{\alpha}_t)}\epsilon}{1 - \bar{\alpha}_t}$$

$$\color{red} = \frac{\left((1 - \bar{\alpha}_{t-1})\sqrt{\alpha_t} + (1 - \alpha_t)\sqrt{\bar{\alpha}_{t-1}}\frac{1}{\sqrt{\bar{\alpha}_t}}\right)\mathbf{x}_t}{1 - \bar{\alpha}_t} - \frac{(1 - \alpha_t)\sqrt{\bar{\alpha}_{t-1}}\sqrt{(1 - \bar{\alpha}_t)}\epsilon}{\sqrt{\bar{\alpha}_t}(1 - \bar{\alpha}_t)}$$

### Visual Description
The slide shows the process of rewriting the mean $\tilde{\boldsymbol{\mu}}_t$ by substituting $\mathbf{x}_0$ with its expression in terms of $\mathbf{x}_t$ and noise $\epsilon$. It uses the relations $\sqrt{1 - \beta_t} = \sqrt{\alpha_t}$ and $\beta_t = 1 - \alpha_t$ to reach a final complex expression highlighted in red.

---
## Page 87
### Content
# Rewriting $\tilde{\boldsymbol{\mu}}_t(\mathbf{x}_t, \mathbf{x}_0)$

**Lemma 1**
$$\frac{(1 - \bar{\alpha}_{t-1})\sqrt{\alpha_t} + (1 - \alpha_t)\sqrt{\bar{\alpha}_{t-1}}\frac{1}{\sqrt{\bar{\alpha}_t}}}{1 - \bar{\alpha}_t} = \frac{1}{\sqrt{\alpha_t}}$$

**Proof**
**We need**
$$(1 - \bar{\alpha}_{t-1})\sqrt{\alpha_t} + (1 - \alpha_t)\frac{\sqrt{\bar{\alpha}_{t-1}}}{\sqrt{\bar{\alpha}_t}} = \frac{1 - \bar{\alpha}_t}{\sqrt{\alpha_t}}$$
$$(1 - \bar{\alpha}_{t-1})\sqrt{\alpha_t} + (1 - \alpha_t)\frac{1}{\sqrt{\alpha_t}} = \frac{1 - \bar{\alpha}_t}{\sqrt{\alpha_t}}$$
$$(1 - \frac{\bar{\alpha}_t}{\alpha_t})\sqrt{\alpha_t} + (1 - \alpha_t)\frac{1}{\sqrt{\alpha_t}} = \frac{1 - \bar{\alpha}_t}{\sqrt{\alpha_t}}$$
$$\sqrt{\alpha_t} - \frac{\bar{\alpha}_t}{\sqrt{\alpha_t}} + \frac{1}{\sqrt{\alpha_t}} - \sqrt{\alpha_t} = \frac{1 - \bar{\alpha}_t}{\sqrt{\alpha_t}} \quad \text{This is true}$$

### Visual Description
The slide presents Lemma 1, which simplifies the coefficient of $\mathbf{x}_t$ from the previous page's derivation. It provides a proof by showing that the numerator of the left-hand side equals the numerator of the right-hand side after multiplying by $\sqrt{\alpha_t}$.

---
## Page 88
### Content
# Rewriting $\tilde{\boldsymbol{\mu}}_t(\mathbf{x}_t, \mathbf{x}_0)$

**Lemma 2**
$$\frac{(1 - \alpha_t)\sqrt{\bar{\alpha}_{t-1}}\sqrt{(1 - \bar{\alpha}_t)}}{\sqrt{\bar{\alpha}_t}(1 - \bar{\alpha}_t)} = \frac{1 - \alpha_t}{\sqrt{\alpha_t}\sqrt{1 - \bar{\alpha}_t}}$$

**Proof**
**We need**
$$\frac{(1 - \alpha_t)\sqrt{(1 - \bar{\alpha}_t)}}{\sqrt{\alpha_t}(1 - \bar{\alpha}_t)} = \frac{1 - \alpha_t}{\sqrt{\alpha_t}\sqrt{1 - \bar{\alpha}_t}} \quad \text{since } \frac{\sqrt{\bar{\alpha}_{t-1}}}{\sqrt{\bar{\alpha}_t}} = \frac{1}{\sqrt{\alpha_t}}$$

**This is true**

### Visual Description
The slide presents Lemma 2, which simplifies the coefficient of $\epsilon$ from the derivation on page 86. It provides a brief proof using the relation $\frac{\sqrt{\bar{\alpha}_{t-1}}}{\sqrt{\bar{\alpha}_t}} = \frac{
## Page 89

### Content

# Rewriting $\tilde{\boldsymbol{\mu}}_t(\mathbf{x}_t, \mathbf{x}_0)$

$$
\tilde{\boldsymbol{\mu}}_t(\mathbf{x}_t, \mathbf{x}_0) = \underbrace{\frac{\left((1 - \bar{\alpha}_{t-1})\sqrt{\alpha_t} + (1 - \alpha_t)\sqrt{\bar{\alpha}_{t-1}}\frac{1}{\sqrt{\alpha_t}}\right) \mathbf{x}_t}{1 - \bar{\alpha}_t}}_{\frac{1}{\sqrt{\alpha_t}}} - \underbrace{\frac{(1 - \alpha_t)\sqrt{\bar{\alpha}_{t-1}}\sqrt{(1 - \bar{\alpha}_t)}\epsilon}{\sqrt{\bar{\alpha}_t}(1 - \bar{\alpha}_t)}}_{\frac{1 - \alpha_t}{\sqrt{\alpha_t}\sqrt{1 - \bar{\alpha}_t}}}
$$

**From Lemma 1 and Lemma 2 we have that**

$$
\tilde{\boldsymbol{\mu}}_t(\mathbf{x}_t, \mathbf{x}_0) = \frac{1}{\sqrt{\alpha_t}}\mathbf{x}_t - \frac{1 - \alpha_t}{\sqrt{\alpha_t}\sqrt{1 - \bar{\alpha}_t}}\epsilon
$$

### Visual Description

The slide shows a mathematical derivation for the term $\tilde{\boldsymbol{\mu}}_t(\mathbf{x}_t, \mathbf{x}_0)$. It features a large, complex equation split into two main fractional components, each with an underbrace indicating its simplified form. The first component simplifies to $\frac{1}{\sqrt{\alpha_t}}$ and the second component simplifies to $\frac{1 - \alpha_t}{\sqrt{\alpha_t}\sqrt{1 - \bar{\alpha}_t}}$. Below this derivation, a final simplified equation is presented following the text "From Lemma 1 and Lemma 2 we have that". The Carnegie Mellon University logo is located in the bottom right corner, and "Slide 89" is in the bottom left.

---
