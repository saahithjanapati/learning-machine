# lecture-notes-30-135_summary

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/lecture-notes-30-135_summary.pdf`
Duplicate equivalents: `lecture-notes-30-135_summary.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 10

## Page 1
### Content
# Summary so Far

**Barnabas Poczos**
bapoczos@cs.cmu.edu

Slide 1
Carnegie Mellon University

### Visual Description
Title slide with the text "Summary so Far" in large red font in the center. The author's name and email are below it in blue. The Carnegie Mellon University logo is in the bottom right corner.

---

## Page 2
### Content
# Forward Markov Chain

$$q(\mathbf{x}_t | \mathbf{x}_{t-1}) := \mathcal{N}(\mathbf{x}_t; \sqrt{1 - \beta_t} \mathbf{x}_{t-1}, \beta_t \mathbf{I})$$

$$q(\mathbf{x}_T | \mathbf{x}_0) = \mathcal{N}(\mathbf{x}_T; (\prod_{t=1}^T \sqrt{1 - \beta_t}) \mathbf{x}_0, (1 - (\prod_{t=1}^T (1 - \beta_t))) \mathbf{I})$$

Let $\alpha_t \doteq 1 - \beta_t, \bar{\alpha}_T \doteq \prod_{t=1}^T \alpha_t = \prod_{t=1}^T (1 - \beta_t)$

$$q(\mathbf{x}_T | \mathbf{x}_0) = \mathcal{N}(\mathbf{x}_T; \sqrt{\bar{\alpha}_T} \mathbf{x}_0, (1 - \bar{\alpha}_T) \mathbf{I})$$

Slide 2
Carnegie Mellon University

### Visual Description
Text-only slide containing mathematical definitions and derivations for a Forward Markov Chain in the context of diffusion models.

---

## Page 3
### Content
# Denoising Diffusion

$$ \mathbf{x}_T \longrightarrow \dots \longrightarrow \mathbf{x}_t \xrightarrow{p_\theta(\mathbf{x}_{t-1}|\mathbf{x}_t)} \mathbf{x}_{t-1} \longrightarrow \dots \longrightarrow \mathbf{x}_0 $$
$$ \mathbf{x}_t \xleftarrow[q(\mathbf{x}_t|\mathbf{x}_{t-1})]{} \mathbf{x}_{t-1} $$

Slide 3
Carnegie Mellon University

### Visual Description
A diagram illustrating the denoising diffusion process. It shows a sequence of states from $\mathbf{x}_T$ (a noisy image) to $\mathbf{x}_0$ (a clear face image). Solid arrows pointing right represent the backward denoising process $p_\theta(\mathbf{x}_{t-1}|\mathbf{x}_t)$. A dashed arrow pointing left represents the forward noising process $q(\mathbf{x}_t|\mathbf{x}_{t-1})$. Small thumbnail images show the transition from pure noise to a recognizable face.

---

## Page 4
### Content
# Discrete Time Diffusion Training

**Algorithm 1 Training**
1: **repeat**
2: $\quad \mathbf{x}_0 \sim q(\mathbf{x}_0)$ **Select an image from the training data**
3: $\quad t \sim \text{Uniform}(\{1, \dots, T\})$ **Select a time point**
4: $\quad \epsilon \sim \mathcal{N}(\mathbf{0}, \mathbf{I})$ **Generate a random noise from standard Gaussian**
5: $\quad$ Take gradient descent step on
$$\nabla_\theta \| \epsilon - \epsilon_\theta(\sqrt{\bar{\alpha}_t} \mathbf{x}_0 + \sqrt{1 - \bar{\alpha}_t} \epsilon, t) \|^2$$
**Train a neural network that can predict the added noise from a noisy image and time**
6: **until converged**

Slide 4
Carnegie Mellon University

### Visual Description
The slide presents "Algorithm 1 Training" for discrete time diffusion. Red text annotations explain each step of the algorithm. Blue circles highlight the noise variable $\epsilon$ in the gradient descent step.

---

## Page 5
### Content
# Discrete Time Diffusion Sampling

$p_\theta(\mathbf{x}_{t-1} | \mathbf{x}_t) \doteq \mathcal{N}(\mathbf{x}_{t-1}; \mu_\theta(\mathbf{x}_t, t), \sigma_t^2 \mathbf{I})$ **Reverse (denoising) diffusion**

$\mu_\theta(\mathbf{x}_t, t) \doteq \frac{1}{\sqrt{\alpha_t}} \mathbf{x}_t - \frac{1 - \alpha_t}{\sqrt{\alpha_t} \sqrt{1 - \bar{\alpha}_t}} \epsilon_\theta(\mathbf{x}_t, t)$ $\leftarrow$ **Error predicting neural network**

$\Rightarrow \mathbf{x}_{t-1} = \mu_\theta(\mathbf{x}_t, t) + \sigma_t \mathbf{z}$ where $\mathbf{z} \sim \mathcal{N}(0, I)$
$= \frac{1}{\sqrt{\alpha_t}} \mathbf{x}_t - \frac{1 - \alpha_t}{\sqrt{\alpha_t} \sqrt{1 - \bar{\alpha}_t}} \epsilon_\theta(\mathbf{x}_t, t) + \sigma_t \mathbf{z}$ where $\sigma_t \doteq \sqrt{\frac{\beta_t(1 - \bar{\alpha}_{t-1})}{1 - \bar{\alpha}_t}}$ **Reverse/denoising diffusion**

**Therefore, the sampling algorithm is**

**Algorithm 2 Sampling**
1: $\mathbf{x}_T \sim \mathcal{N}(\mathbf{0}, \mathbf{I})$ **Starting Gaussian noise**
2: **for** $t = T, \dots, 1$ **do**
3: $\quad \mathbf{z} \sim \mathcal{N}(\mathbf{0}, \mathbf{I})$ if $t > 1$, else $\mathbf{z} = 0$
4: $\quad \mathbf{x}_{t-1} = \frac{1}{\sqrt{\alpha_t}} \left( \mathbf{x}_t - \frac{1 - \alpha_t}{\sqrt{1 - \bar{\alpha}_t}} \epsilon_\theta(\mathbf{x}_t, t) \right) + \sigma_t \mathbf{z}$ **Reverse/denoising diffusion**
5: **end for**
6: **return** $\mathbf{x}_0$ **Generated new image**

Slide 5
Carnegie Mellon University

### Visual Description
The slide details the sampling process for discrete time diffusion. It includes mathematical derivations for the reverse step and "Algorithm 2 Sampling" in a box. Red text annotations explain the components and steps of the algorithm.

---

## Page 6
### Content
# Time Reversal when Time is Discrete

$$p_{k+1|k}(\mathbf{x}_{k+1} | \mathbf{x}_k) = \mathcal{N}(\mathbf{x}_{k+1}; \mathbf{x}_k + \gamma_{k+1} f(\mathbf{x}_k), 2\gamma_{k+1} \mathbf{I})$$

**Remark:** $q(\mathbf{x}_{k+1} | \mathbf{x}_k) := \mathcal{N}(\mathbf{x}_{k+1}; \sqrt{1 - \beta_{k+1}} \mathbf{x}_k, \beta_{k+1} \mathbf{I})$ is a special case of this.

**Results:**
* Calculated the distribution of time reversal process: $p_{k|k+1}(\mathbf{x}_k | \mathbf{x}_{k+1})$
* Showed that although this reverse distribution is usually not Gaussian, it is approximately Gaussian (under some conditions when the diffusion is slow)
* Showed that the score function will appear in the mean of the reverse distribution.

$$p_{k|k+1}(\mathbf{x}_k | \mathbf{x}_{k+1}) \approx \mathcal{N}(\mathbf{x}_k; \mathbf{x}_{k+1} - \gamma_{k+1} f(\mathbf{x}_{k+1}) + 2\gamma_{k+1} \nabla \log p_{k+1}(\mathbf{x}_{k+1}), 2\gamma_{k+1} \mathbf{I})$$

**This opens a new way for diffusion-based generation:**
**Estimate the score function for the reverse diffusion!**

Slide 6
Carnegie Mellon University

### Visual Description
Text-only slide discussing time reversal in discrete time. It provides a general Gaussian transition, notes that the standard diffusion forward step is a special case, lists key results about the reverse distribution, and highlights the importance of the score function for generation.

---

## Page 7
### Content
# Continuous-time Diffusion

**We use the Ornstein-Uhlenbeck (OU) process for the noising Markov chain:**
$$dX_t = -\frac{1}{2} X_t dt + dW_t \quad \text{with} \quad X_0 \sim P(\cdot | \mathbf{y})$$

**mean:** $\mathbb{E}(X_t | X_0) = X_0 e^{-\frac{1}{2}t}$
**variance:** $\sigma_t^2 = (1 - e^{-t})$

**Therefore,**
In the $t \rightarrow \infty$ limit:
**mean:** $\mu_\infty := \mathbb{E}(X_\infty | X_0) = 0$
**variance:** $\sigma_\infty^2 = \text{cov}(X_\infty, X_\infty | X_0) = 1$
$$P(X_\infty | X_0) = \mathcal{N}(0, 1)$$
**Standard Gaussian!**

Slide 7
Carnegie Mellon University

### Visual Description
Text-only slide introducing continuous-time diffusion using the Ornstein-Uhlenbeck process. It shows the stochastic differential equation (SDE) and the evolution of mean and variance, concluding that the process converges to a standard Gaussian distribution.

---

## Page 8
### Content
# Continuous-time Diffusion

**Forward diffusion:**
$$dX_t = -\frac{1}{2} X_t dt + dW_t \quad \text{with} \quad X_0 \sim P(\cdot | \mathbf{y}), \quad (2.1)$$

**Backward diffusion:**
$$dX_t^\leftarrow = \left[ \frac{1}{2} X_t^\leftarrow + \nabla \log p_{T-t}(X_t^\leftarrow | \mathbf{y}) \right] dt + d\bar{W}_t \quad \text{with} \quad X_0^\leftarrow \sim P_T(\cdot | \mathbf{y}) \quad (2.2)$$

**Backward diffusion with estimated score:**
$$d\tilde{X}_t^\leftarrow = \left[ \frac{1}{2} \tilde{X}_t^\leftarrow + \hat{s}(\tilde{X}_t^\leftarrow, \mathbf{y}, T-t) \right] dt + d\bar{W}_t \quad \text{with} \quad \tilde{X}_0^\leftarrow \sim \mathcal{N}(0, I) \quad (2.3)$$

The marginal distribution of $\tilde{X}_t^\leftarrow$ (conditioned on $\mathbf{y}$) is written as $\tilde{P}_{T-t}(\cdot | \mathbf{y})$.

Slide 8
Carnegie Mellon University

### Visual Description
Text-only slide presenting the SDEs for forward diffusion, backward diffusion, and backward diffusion using an estimated score function in a continuous-time setting. Equations are numbered (2.1), (2.2), and (2.3).
## Page 9
### Content
# Explicit score matching [ESM] and Denoising score matching [DSM]

Score estimation seems to be difficult, but luckily: **ESM = DSM + C**

$$\int_{x_t} \|s\left(x_t, t\right)-\nabla \log p_t\left(x_t\right)\|^2 p_t\left(x_t\right) \mathrm{d} x_t = \int_{x_0} \int_{x_t}\left\|s\left(x_t, t\right)-\nabla \log p_t\left(x_t \mid x_0\right)\right\|^2 p_t\left(x_t \mid x_0\right) p_0\left(x_0\right) \mathrm{d} x_t \mathrm{~d} x_0+C,$$

### Visual Description
Text-only slide presenting a mathematical identity that relates Explicit Score Matching (ESM) to Denoising Score Matching (DSM) via a constant $C$. The main content is a large integral equation.

---

## Page 10
### Content
# Classifier-free score estimation in Continuous Time

* **DSM Loss function:**
$$\ell(x, y ; s)=\int_{t_0}^T \frac{1}{T-t_0} \mathbb{E}_{\tau, x^{\prime} \sim \mathrm{N}\left(\alpha_t x, \sigma_t^2 I\right)}\left[\left\|s\left(x^{\prime}, \tau y, t\right)-\nabla_{x^{\prime}} \log \phi_t\left(x^{\prime} \mid x\right)\right\|_2^2\right] \quad (2.5)$$

* **DSM Population risk:**
$$s^{\star} \in \underset{s \in \mathcal{F}}{\operatorname{argmin}} \underbrace{\mathbb{E}_{\left(x_0, y\right)}\left[\ell\left(x_0, y ; s\right)\right]}_{\mathcal{L}(s)}$$

* **DSM Empirical risk:**
$$\widehat{s} \in \underset{s \in \mathcal{F}}{\operatorname{argmin}} \underbrace{\frac{1}{n} \sum_{i=1}^n \ell\left(x^i, y^i ; s\right)}_{\widehat{\mathcal{L}}(s)} \text{ where we recall } n \text{ is the sample size.}$$

### Visual Description
Text-only slide defining the loss function, population risk, and empirical risk for classifier-free score estimation in a continuous-time framework. The equations use standard notation for expectations, argmin, and underbraces to define risk functionals.
