# lecture-notes-22-110_Ornstein-Uhlenbeck_process_1

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/lecture-notes-22-110_Ornstein-Uhlenbeck_process_1.pdf`
Duplicate equivalents: `lecture-notes-22-110_Ornstein-Uhlenbeck_process_1.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 46

## Page 1
### Content
# The Ornstein-Uhlenbeck (OU) process

**Barnabas Poczos**
bapoczos@cs.cmu.edu

Carnegie Mellon University
Slide 1
### Visual Description
Title slide with the main title "The Ornstein-Uhlenbeck (OU) process" in large red text. The author's name and email are in blue below it. The Carnegie Mellon University logo is in the bottom right corner.

---
## Page 2
### Content
# Paper to Read

### Unveil Conditional Diffusion Models with Classifier-free Guidance: A Sharp Statistical Theory
**Fu et al, 2024**
[https://arxiv.org/abs/2403.11968](https://arxiv.org/abs/2403.11968)

[We will often follow the notation and Equation numbers of this paper]

Slide 2
Carnegie Mellon University
### Visual Description
Text-only slide providing a reference to a specific research paper by Fu et al. (2024) regarding conditional diffusion models.

---
## Page 3
### Content
# Contents

* Stationary Gauss-Markov Processes
* The Ornstein-Uhlenbeck (OU) process
    * Properties
    * Forward diffusion
    * Reverse diffusion
    * Need for score estimation
    * Analysis with the Fokker-Planck Equation

Slide 3
Carnegie Mellon University
### Visual Description
Text-only slide listing the table of contents for the lecture.

---
## Page 4
### Content
# Stationary Gauss-Markov Processes

Slide 4
Carnegie Mellon University
### Visual Description
Text-only slide serving as a section header for "Stationary Gauss-Markov Processes".

---
## Page 5
### Content
# Stationary Gauss-Markov Processes

A **stationary Gauss–Markov process** is a stochastic process $\{X_t\}_{t \in \mathbb{R}}$ that satisfies the following properties:

1. **Gaussianity:** Every finite collection of random variables
$$(X_{t_1}, X_{t_2}, \dots, X_{t_n})$$
follows a multivariate normal distribution.

2. **Markov property:** The conditional distribution of the future given the past depends only on the present:
$$P(X_{t_{n+1}} \mid X_{t_n}, X_{t_{n-1}}, \dots, X_{t_1}) = P(X_{t_{n+1}} \mid X_{t_n}) \quad \forall t_1 < t_2 < \dots < t_{n+1}.$$

3. **(Weak) Stationarity:** The process has a constant mean and an autocovariance function depending only on the time lag:
$$\mathbb{E}[X_t] = \mu, \quad \text{Cov}(X_t, X_{t+\tau}) = R(\tau),$$
for all $t$ and $\tau$.

Slide 5
Carnegie Mellon University
### Visual Description
Text-only slide defining the three key properties of a stationary Gauss-Markov process: Gaussianity, Markov property, and (Weak) Stationarity.

---
## Page 6
### Content
# Forward Makov Process

We used these transition probabilities to create a Markov chain:
$$q(\mathbf{x}_t \mid \mathbf{x}_{t-1}) := \mathcal{N}(\mathbf{x}_t; \sqrt{1 - \beta_t}\mathbf{x}_{t-1}, \beta_t \mathbf{I})$$
$$\Rightarrow \mathbf{x}_t = \sqrt{1 - \beta_t}\mathbf{x}_{t-1} + \sqrt{\beta_t}\boldsymbol{\epsilon}_t \text{ where } \boldsymbol{\epsilon}_t \sim \mathcal{N}(0, I)$$

This is a time-varying autoregressive [TV-AR(1)] process.

When $\beta_t = \beta$ is constant, then this is an autoregressive [AR(1)] process.

Slide 6
Carnegie Mellon University
### Visual Description
Text-only slide describing the forward Markov process used in diffusion models, identifying it as a time-varying autoregressive process. Note: "Makov" in the title is a typo for "Markov".

---
## Page 7
### Content
# Discrete-Time: AR(1) Process

In discrete time, an **autoregressive process of order one (AR(1))** can be a stationary Gauss–Markov process under some conditions.
$$X_t = \phi X_{t-1} + c + \epsilon_t$$

Here $\{\epsilon_t\}$ are i.i.d. random variables with
$$\epsilon_t \sim \mathcal{N}(0, \sigma_\epsilon^2),$$
and each $\epsilon_t$ is independent of $\epsilon_s$ for $s \neq t$.

Slide 7
Carnegie Mellon University
### Visual Description
Text-only slide defining the discrete-time AR(1) process and its noise component.

---
## Page 8
### Content
# Conditions for Stationarity [Variance]

$$X_t = \phi X_{t-1} + c + \epsilon_t,$$

**Checking the Variance of an AR(1) Process:**
$$\text{Var}(X_t) = \text{Var}(\phi X_{t-1} + c + \epsilon_t) = \phi^2 \text{Var}(X_{t-1}) + \sigma_\epsilon^2,$$
since $\epsilon_t$ is independent of $X_{t-1}$.

At stationarity, $\text{Var}(X_t) = \text{Var}(X_{t-1}) = \sigma_X^2$, therefore
$$\sigma_X^2 = \phi^2 \sigma_X^2 + \sigma_\epsilon^2 \quad \Rightarrow \quad \sigma_X^2(1 - \phi^2) = \sigma_\epsilon^2 \quad \Rightarrow \quad \sigma_X^2 = \frac{\sigma_\epsilon^2}{1 - \phi^2}.$$

This variance is finite if and only if $|\phi| < 1$.

Slide 8
Carnegie Mellon University
### Visual Description
Text-only slide deriving the condition for stationarity in an AR(1) process by analyzing its variance. The final condition $|\phi| < 1$ is highlighted in red.
## Page 9
### Content
# Conditions for Stationarity [Mean]

$X_t = \phi X_{t-1} + c + \epsilon_t,$

As discussed in the previous slide, let $|\phi| < 1$.

### Checking the Mean of an AR(1) Process

Take expectations of both sides:
$$\mathbb{E}[X_t] = \phi \mathbb{E}[X_{t-1}] + c + \mathbb{E}[\epsilon_t].$$

Since $\mathbb{E}[\epsilon_t] = 0$, we get
$$\mathbb{E}[X_t] = \phi \mathbb{E}[X_{t-1}] + c.$$

At stationarity, the mean must be constant, say $\mathbb{E}[X_t] = \mu$, giving
$$\mu = \phi \mu + c \quad \Rightarrow \quad \mu(1 - \phi) = c \quad \Rightarrow \quad \mu = \frac{c}{1 - \phi}.$$

### Visual Description
Text-only slide.

---
## Page 10
### Content
# Conditions for Stationarity [Auto-covariance]

### Checking the Auto-covariance function

For lag $k \ge 1$, define $R(k) = \text{Cov}(X_t, X_{t-k})$.

Here we only discuss the calculations when the process is centered ($c = 0$).

[When the process is not centered ($c \neq 0$), the auto-covariance function is still the same.]

Using $X_t = \phi X_{t-1} + \epsilon_t$, we have
$$R(1) = \mathbb{E}[X_t X_{t-1}] = \mathbb{E}[(\phi X_{t-1} + \epsilon_t) X_{t-1}] = \phi \mathbb{E}[X_{t-1}^2] + \mathbb{E}[\epsilon_t X_{t-1}].$$

Since $\epsilon_t$ and $X_{t-1}$ are independent, $\mathbb{E}[\epsilon_t X_{t-1}] = 0$, giving $R(1) = \phi R(0)$.

By recursion,
$$R(k) = \phi^k R(0)$$

Thus, $R(k)$ depends only on the lag $k$, not on time $t$.

### Visual Description
Text-only slide.

---
## Page 11
### Content
# Checking the Mean of an AR(1) Process

### Summary

$$X_t = \phi X_{t-1} + c + \epsilon_t,$$

$$\mathbb{E}[X_t] = \frac{c}{1 - \phi},$$

$$\text{Var}(X_t) = \frac{\sigma_\epsilon^2}{1 - \phi^2},$$

$$R(k) = \frac{\sigma_\epsilon^2}{1 - \phi^2} \phi^{|k|}.$$

Therefore, the AR(1) process is stationary if and only if
$$|\phi| < 1.$$

### Visual Description
Text-only slide.

---
## Page 12
### Content
# Conditional Distributions

Let's calculate $P(X_t \mid X_0)$.

$\{P(X_t)\}_{t=0}^\infty$ was stationary. Is $\{P(X_t \mid X_0)\}_{t=0}^\infty$ also stationary?

We can unroll the recursion repeatedly:
$$
\begin{aligned}
X_t &= c + \phi X_{t-1} + \epsilon_t \\
&= c + \phi(c + \phi X_{t-2} + \epsilon_{t-1}) + \epsilon_t \\
&= c(1 + \phi) + \phi^2 X_{t-2} + \phi \epsilon_{t-1} + \epsilon_t \\
&\vdots \\
&= \phi^t X_0 + c(1 + \phi + \dots + \phi^{t-1}) + \sum_{i=0}^{t-1} \phi^i \epsilon_{t-i}.
\end{aligned}
$$

The geometric sum gives $1 + \phi + \dots + \phi^{t-1} = \frac{1 - \phi^t}{1 - \phi}$, so
$$X_t = \phi^t X_0 + \frac{c}{1 - \phi}(1 - \phi^t) + \sum_{i=0}^{t-1} \phi^i \epsilon_{t-i}.$$

### Visual Description
Text-only slide. The final equation is highlighted in red.

---
## Page 13
### Content
# Conditional Distributions

$$X_t = \phi^t X_0 + \frac{c}{1 - \phi}(1 - \phi^t) + \sum_{i=0}^{t-1} \phi^i \epsilon_{t-i}.$$

Given $X_0$, the only random part is the Gaussian sum $\sum_{i=0}^{t-1} \phi^i \epsilon_{t-i}$.

Which has mean zero and variance:
$$\text{Var}\left(\sum_{i=0}^{t-1} \phi^i \epsilon_{t-i}\right) = \sigma_\epsilon^2 \sum_{i=0}^{t-1} \phi^{2i} = \sigma_\epsilon^2 \frac{1 - \phi^{2t}}{1 - \phi^2}.$$

Hence
$$X_t \mid X_0 \sim \mathcal{N}(m_t, s_t^2),$$

where
$$m_t = \phi^t X_0 + \frac{c}{1 - \phi}(1 - \phi^t), \quad s_t^2 = \sigma_\epsilon^2 \frac{1 - \phi^{2t}}{1 - \phi^2}.$$

### Visual Description
Text-only slide. The distributional statement $X_t \mid X_0 \sim \mathcal{N}(m_t, s_t^2)$ is highlighted in red.

---
## Page 14
### Content
# Conditional Distributions

**We already know:**
$$X_t \mid X_0 \sim \mathcal{N}(m_t, s_t^2),$$
$$m_t = \phi^t X_0 + \frac{c}{1 - \phi}(1 - \phi^t), \quad s_t^2 = \sigma_\epsilon^2 \frac{1 - \phi^{2t}}{1 - \phi^2}.$$

Let the stationary mean $\mathbb{E}[X_t] = \mu = \frac{c}{1 - \phi}$.

Then the conditional mean can be expressed more intuitively as
$$m_t = \phi^t X_0 + \mu(1 - \phi^t) = \mu + \phi^t(X_0 - \mu),$$

so that
$$X_t \mid X_0 \sim \mathcal{N}\left(\mu + \phi^t(X_0 - \mu), \sigma_\epsilon^2 \frac{1 - \phi^{2t}}{1 - \phi^2}\right)$$

### Visual Description
Text-only slide. The final distributional result is enclosed in a red box.

---
## Page 15
### Content
# Conditional Distributions

**We already know:**
$$X_t \mid X_0 \sim \mathcal{N}\left(\mu + \phi^t(X_0 - \mu), \sigma_\epsilon^2 \frac{1 - \phi^{2t}}{1 - \phi^2}\right).$$

* As $t \to \infty$, the **conditional variance** converges exponentially to
$$\lim_{t \to \infty} s_t^2 = \frac{\sigma_\epsilon^2}{1 - \phi^2},$$
which is the stationary variance of the process.

* The **conditional mean** converges exponentially to the stationary mean:
$$\lim_{t \to \infty} m_t = \mu.$$

The $P(X_t \mid X_0)$ distribution is not stationary, but it converges to the stationary distribution for any $X_0$!

### Visual Description
Text-only slide. The final concluding sentence is highlighted in red.

---
## Page 16
### Content
# The Ornstein-Uhlenbeck (OU) process

### Visual Description
Title slide with the text "The Ornstein-Uhlenbeck (OU) process" centered in blue.
## Page 17
### Content
# Stochastic Differential Equations

[Image of three book covers]
1. **An Introduction to Stochastic Differential Equations** by Lawrence C. Evans. American Mathematical Society (AMS).
2. **Applied Stochastic Differential Equations** by Simo Särkkä and Arno Solin. Cambridge University Press.
3. **Stochastic Processes and Applications: Diffusion Processes, the Fokker-Planck and Langevin Equations** by Grigorios A. Pavliotis. Springer.

### Visual Description
Three book covers related to Stochastic Differential Equations are displayed side-by-side. The first is blue and green, the second is red, and the third is blue and yellow.

---
## Page 18
### Content
# Ornstein-Uhlenbeck (OU) process

**AR(1) process:** $X_t = \phi X_{t-1} + c + \epsilon_t,$

**Definition [Ornstein-Uhlenbeck (OU) process]:**
$$dX_t = \phi X_t dt + c dt + \sigma dW_t, \quad \text{where } W_t \text{ is a Wiener process.}$$

We will use this form:
$$dX_t = \theta(\mu - X_t) dt + \sigma dW_t$$

The OU process is a **stationary Gauss–Markov process**, which means that it is a Gaussian process, a Markov process, and is temporally homogeneous.

The Ornstein–Uhlenbeck process can be considered as the **continuous-time analogue of the discrete-time AR(1)** process.

### Visual Description
Text-only slide defining the Ornstein-Uhlenbeck process and its relationship to the AR(1) process.

---
## Page 19
### Content
# Ornstein-Uhlenbeck (OU) process

$$dX_t = \theta(\mu - X_t) dt + \sigma dW_t$$

**Notation:**
* $\theta > 0$ is the rate of mean reversion,
* $\mu$ is the long-term mean,
* $\sigma$ is the diffusion coefficient,
* and $W_t$ is standard Brownian motion.

### Visual Description
Text-only slide defining the notation used in the Ornstein-Uhlenbeck process equation.

---
## Page 20
### Content
# Solutions and Conditional Distributions of the Ornstein-Uhlenbeck (OU) process

### Visual Description
Title slide with the text centered in blue on a white background.

---
## Page 21
### Content
# Solution of the Ornstein-Uhlenbeck (OU) SDE

Consider the Ornstein–Uhlenbeck (OU) process defined by
$$dX_t = \theta(\mu - X_t) dt + \sigma dW_t, \quad \theta > 0,$$
where $W_t$ is standard Brownian motion.

**Lemma [Solution of the Ornstein-Uhlenbeck SDE]**
The OU process admits the explicit solution
$$X_t = X_0 e^{-\theta t} + \mu(1 - e^{-\theta t}) + \sigma \int_0^t e^{-\theta(t-s)} dW_s.$$

**Proof: [Appendix]**

### Visual Description
Text-only slide presenting a lemma for the explicit solution of the OU SDE. The solution formula is highlighted in red.

---
## Page 22
### Content
# Variance of Ornstein-Uhlenbeck (OU) process

$$X_t = X_0 e^{-\theta t} + \mu(1 - e^{-\theta t}) + \sigma \int_0^t e^{-\theta(t-s)} dW_s.$$

**Lemma [Variance of Ornstein-Uhlenbeck (OU) process]**
Let
$$Y_t = \sigma \int_0^t e^{-\theta(t-s)} dW_s.$$
Then, we have that
$$\text{Var}(Y_t) = \frac{\sigma^2}{2\theta} (1 - e^{-2\theta t}).$$

**Proof**
Since $Y_t = \sigma \int_0^t e^{-\theta(t-s)} dW_s$ is an Itô integral with deterministic integrand, it is Gaussian with mean 0 and variance
$$\text{Var}(Y_t) = \sigma^2 \int_0^t e^{-2\theta(t-s)} ds = \frac{\sigma^2}{2\theta} (1 - e^{-2\theta t}).$$

### Visual Description
Text-only slide showing the lemma and proof for the variance of the OU process. Key formulas are highlighted in red.

---
## Page 23
### Content
# Conditional Distribution of the Ornstein-Uhlenbeck (OU) process

**We already know:**
$$X_t = X_0 e^{-\theta t} + \mu(1 - e^{-\theta t}) + \sigma \int_0^t e^{-\theta(t-s)} dW_s.$$
$$Y_t = \sigma \int_0^t e^{-\theta(t-s)} dW_s$$
$$\text{Var}(Y_t) = \sigma^2 \int_0^t e^{-2\theta(t-s)} ds = \frac{\sigma^2}{2\theta} (1 - e^{-2\theta t}).$$

Taking conditional expectations,
$$\mathbb{E}[X_t | X_0] = X_0 e^{-\theta t} + \mu(1 - e^{-\theta t}).$$

The conditional variance is given by
$$\text{Var}(X_t | X_0) = \frac{\sigma^2}{2\theta} (1 - e^{-2\theta t}).$$

Thus, the conditional distribution of the OU process:
$$X_t | X_0 \sim \mathcal{N}\left(\mu + (X_0 - \mu)e^{-\theta t}, \frac{\sigma^2}{2\theta} (1 - e^{-2\theta t})\right).$$

### Visual Description
Text-only slide deriving the conditional distribution of the OU process. The final distribution formula is highlighted in red.

---
## Page 24
### Content
# Limit of Ornstein-Uhlenbeck (OU) process

**We already know:**
$$dX_t = \theta(\mu - X_t) dt + \sigma dW_t$$
$$X_t = X_0 e^{-\theta t} + \mu(1 - e^{-\theta t}) + \sigma \int_0^t e^{-\theta(t-s)} dW_s.$$
$$X_t | X_0 \sim \mathcal{N}\left(\mu + (X_0 - \mu)e^{-\theta t}, \frac{\sigma^2}{2\theta} (1 - e^{-2\theta t})\right).$$

Therefore, as $t \to \infty$: $\mathbb{E}[X_t] \to \mu, \text{Var}(X_t) \to \frac{\sigma^2}{2\theta}.$
$$X_t \to \mathcal{N}\left(\mu, \frac{\sigma^2}{2\theta}\right).$$

**Special case:**
$$dX_t = -\frac{1}{2} X_t dt + dW_t$$
$$\mu = 0, \theta = \frac{1}{2}, \sigma = 1 \Rightarrow X_t | X_0 \sim \mathcal{N}\left(X_0 e^{-\frac{t}{2}}, (1 - e^{-t})\right).$$

### Visual Description
Text-only slide showing the long-term limit of the OU process and a specific numerical example. The special case result is highlighted in red.
## Page 25
### Content
# Some Important Properties of The Ornstein-Uhlenbeck (OU) process

Slide 25
Carnegie Mellon University
### Visual Description
Title slide with the text "Some Important Properties of The Ornstein-Uhlenbeck (OU) process" centered in blue. The Carnegie Mellon University logo is in the bottom right corner.

---
## Page 26
### Content
# Ornstein-Uhlenbeck (OU) process

$$dX_t = \theta(\mu - X_t) dt + \sigma dW_t \quad X_t = X_0 e^{-\theta t} + \mu(1 - e^{-\theta t}) + \sigma \int_0^t e^{-\theta(t-s)} dW_s$$

### Lemma [Properties of the Ornstein-Uhlenbeck (OU) process]:
Conditioned on $X_0$, the distribution $P(X_t | X_0)$ is Gaussian, where:
* **mean:** $\mathbb{E}(X_t | X_0) = X_0 e^{-\theta t} + \mu(1 - e^{-\theta t})$
* **covariance:** $cov(X_s, X_t | X_0) = \frac{\sigma^2}{2\theta} (e^{-\theta|t-s|} - e^{-\theta(t+s)})$
* **variance:** $\sigma_t^2 = cov(X_t, X_t | X_0) = \frac{\sigma^2}{2\theta} (e^{-\theta|t-t|} - e^{-\theta(t+t)}) = \frac{\sigma^2}{2\theta} (1 - e^{-2\theta t})$

---
Therefore,
In the $t \to \infty$ limit:
* **mean:** $\mu_\infty := \mathbb{E}(X_\infty | X_0) = \mu$
* **variance:** $\sigma_\infty^2 = cov(X_\infty, X_\infty | X_0) = \frac{\sigma^2}{2\theta}$
* $P(X_\infty | X_0) = \mathcal{N}(\mu, \frac{\sigma^2}{2\theta})$

Slide 26
Carnegie Mellon University
### Visual Description
Text-only slide containing mathematical definitions and a lemma regarding the properties of the Ornstein-Uhlenbeck process, specifically its mean, covariance, and variance, including its limiting behavior as $t \to \infty$.

---
## Page 27
### Content
# Ornstein-Uhlenbeck (OU) process

$$dX_t = \theta(\mu - X_t) dt + \sigma dW_t \quad X_t = X_0 e^{-\theta t} + \mu(1 - e^{-\theta t}) + \sigma \int_0^t e^{-\theta(t-s)} dW_s$$

### Lemma [Properties of the Ornstein-Uhlenbeck (OU) process]:
Conditioned on $X_0$, the distribution $P(X_t | X_0)$ is Gaussian, where:
* **mean:** $\mathbb{E}(X_t | X_0) = X_0 e^{-\theta t} + \mu(1 - e^{-\theta t})$
* **covariance:** $cov(X_s, X_t | X_0) = \frac{\sigma^2}{2\theta} (e^{-\theta|t-s|} - e^{-\theta(t+s)})$
* **variance:** $\sigma_t^2 = cov(X_t, X_t | X_0) = \frac{\sigma^2}{2\theta} (e^{-\theta|t-t|} - e^{-\theta(t+t)}) = \frac{\sigma^2}{2\theta} (1 - e^{-2\theta t})$

---
### Special case: $\mu = 0, \theta = \frac{1}{2}, \sigma = 1 \Rightarrow dX_t = -\frac{1}{2} X_t dt + dW_t$
* **mean:** $\mathbb{E}(X_t | X_0) = X_0 e^{-\frac{1}{2}t}$
* **covariance:** $cov(X_s, X_t | X_0) = \left( e^{-\frac{1}{2}|t-s|} - e^{-\frac{1}{2}(t+s)} \right)$
* **variance:** $\sigma_t^2 = cov(X_t, X_t | X_0) = \left( e^{-\frac{1}{2}|t-t|} - e^{-\frac{1}{2}(t+t)} \right) = (1 - e^{-t})$

Slide 27
Carnegie Mellon University
### Visual Description
Text-only slide that repeats the general properties of the OU process from the previous slide and then applies them to a specific "Special case" where parameters are set to $\mu=0, \theta=1/2, \sigma=1$.

---
## Page 28
### Content
# Ornstein-Uhlenbeck (OU) process

### We will use this Ornstein-Uhlenbeck (OU) process:
$$dX_t = -\frac{1}{2} X_t dt + dW_t \quad \text{with} \quad X_0 \sim P(\cdot | \mathbf{y})$$

### We discussed this before:
* **mean:** $\mathbb{E}(X_t | X_0) = X_0 e^{-\frac{1}{2}t}$
* **variance:** $\sigma_t^2 = (1 - e^{-t})$

---
Therefore,
In the $t \to \infty$ limit:
* **mean:** $\mu_\infty := \mathbb{E}(X_\infty | X_0) = 0$
* **variance:** $\sigma_\infty^2 = cov(X_\infty, X_\infty | X_0) = 1$
* $P(X_\infty | X_0) = \mathcal{N}(0, 1)$
**Standard Gaussian!**

Slide 28
Carnegie Mellon University
### Visual Description
Text-only slide focusing on the specific OU process used in the lecture. It shows that as $t \to \infty$, the process converges to a Standard Gaussian distribution. The text "Standard Gaussian!" is highlighted in red.

---
## Page 29
### Content
# The Forward Diffusion

Slide 29
Carnegie Mellon University
### Visual Description
Title slide with the text "The Forward Diffusion" centered in blue.

---
## Page 30
### Content
# Forward Diffusion

Denote the **initial** conditional distribution as $P(X_0 = \mathbf{x} | \mathbf{y})$ for $\mathbf{x} \in \mathbb{R}^d$ given $\mathbf{y} \in \mathbb{R}^{d_y}$.

We consider adding noise progressively on $X_0$ only, which is described by a **forward Ornstein-Uhlenbeck (OU) process**,
$$\color{red}{dX_t = -\frac{1}{2} X_t dt + dW_t \quad \text{with} \quad X_0 \sim P(\cdot | \mathbf{y})}$$
where $W_t$ is a Wiener process.

By the limit distribution of OU process Lemma, we know that in the infinite-time limit, $X_\infty$ **follows a standard Gaussian** distribution.

Slide 30
Carnegie Mellon University
### Visual Description
Text-only slide defining the forward diffusion process as a forward OU process that starts from an initial conditional distribution and converges to a standard Gaussian distribution in the infinite-time limit. The SDE is highlighted in red.

---
## Page 31
### Content
# Marginal Conditional Distribution

$$\color{red}{dX_t = -\frac{1}{2} X_t dt + dW_t \quad \text{with} \quad X_0 \sim P(\cdot | \mathbf{y})}$$

### Notation [marginal conditional distribution]:
At any finite time $t$, we denote
$$\color{red}{P_t(\cdot | \mathbf{y})}$$
as the **marginal conditional distribution** of this stochastic process.

The forward process will terminate at a sufficiently large time $T$.

Slide 31
Carnegie Mellon University
### Visual Description
Text-only slide introducing the notation $P_t(\cdot | \mathbf{y})$ for the marginal conditional distribution of the forward diffusion process at time $t$. The SDE and the notation are highlighted in red.

---
## Page 32
### Content
# Reverse Diffusion process

$$dX_t = -\frac{1}{2} X_t dt + dW_t \quad \text{with} \quad X_0 \sim P(\cdot | \mathbf{y}), \quad (2.1)$$

### Lemma [Reverse Diffusion]
To generate new samples, we reverse the time of (2.1) to obtain
$$\color{red}{d\overleftarrow{X}_t = \left[ \frac{1}{2} \overleftarrow{X}_t + \nabla \log p_{T-t}(\overleftarrow{X}_t | \mathbf{y}) \right] dt + d\bar{W}_t \quad \text{with} \quad \overleftarrow{X}_0 \sim P_T(\cdot | \mathbf{y}) \quad (2.2)}$$
where $\bar{W}_t$ is a time-reversed Wiener process and we use the arrow on $X$ to emphasize the backward process.

### Proof [... Unfortunately, it is a bit too long... We might come back to it later]

### Definition [Conditional Score Function]
The term $\nabla \log p_{T-t}(\overleftarrow{X}_t | \mathbf{y})$ is the **conditional score** function.

Slide 32
Carnegie Mellon University
### Visual Description
Text-only slide presenting the Reverse Diffusion process. It provides the SDE for the time-reversed process (highlighted in red) and defines the conditional score function. The proof is omitted for being too long.
## Page 33
### Content
# Need for Score Estimation

### Visual Description
Title slide with the text "Need for Score Estimation" in blue centered on a white background. The Carnegie Mellon University logo is in the bottom right corner.

---
## Page 34
### Content
# Need for Score Estimation

**We already know:**

$$dX_t^\leftarrow = \left[ \frac{1}{2} X_t^\leftarrow + \nabla \log p_{T-t}(X_t^\leftarrow \mid y) \right] dt + d\bar{W}_t \quad \text{with} \quad X_0^\leftarrow \sim P_T(\cdot \mid y) \tag{2.2}$$

The term $\nabla \log p_{T-t}(X_t^\leftarrow \mid y)$ is the conditional score function.

Unfortunately, it is **unknown and needs to be estimated** using conditional score networks.

We denote by $\hat{s}(\mathbf{x}, \mathbf{y}, t)$ such an **estimator of the conditional score** $\nabla \log p_t(\mathbf{x} \mid \mathbf{y})$.

$\Rightarrow \hat{s}(\mathbf{x}, \mathbf{y}, T - t)$ is an **estimator of the conditional score** $\nabla \log p_{T-t}(\mathbf{x} \mid \mathbf{y})$.

Then the sample generation is described by the following backward SDE,

$$d\tilde{X}_t^\leftarrow = \left[ \frac{1}{2} \tilde{X}_t^\leftarrow + \hat{s}(\tilde{X}_t, y, T - t) \right] dt + d\bar{W}_t \quad \text{with} \quad \tilde{X}_0^\leftarrow \sim N(0, I) \tag{2.3}$$

### Visual Description
Text and equations slide. Equation (2.3) at the bottom is highlighted in red text. The Carnegie Mellon University logo is in the bottom right corner.

---
## Page 35
### Content
# Summary: Forward and Backward Diffusion processes

**Forward diffusion:**
$$dX_t = -\frac{1}{2} X_t dt + dW_t \quad \text{with} \quad X_0 \sim P(\cdot \mid y), \tag{2.1}$$

**Backward diffusion:**
$$dX_t^\leftarrow = \left[ \frac{1}{2} X_t^\leftarrow + \nabla \log p_{T-t}(X_t^\leftarrow \mid y) \right] dt + d\bar{W}_t \quad \text{with} \quad X_0^\leftarrow \sim P_T(\cdot \mid y) \tag{2.2}$$

**Backward diffusion with estimated score:**
$$d\tilde{X}_t^\leftarrow = \left[ \frac{1}{2} \tilde{X}_t^\leftarrow + \hat{s}(\tilde{X}_t, y, T - t) \right] dt + d\bar{W}_t \quad \text{with} \quad \tilde{X}_0^\leftarrow \sim N(0, I) \tag{2.3}$$

The marginal distribution of $\tilde{X}_t^\leftarrow$ (conditioned on $\mathbf{y}$) is written as $\tilde{P}_{T-t}(\cdot \mid \mathbf{y})$.

### Visual Description
Summary slide listing three stochastic differential equations. Equations (2.2) and (2.3) are written in red text. The Carnegie Mellon University logo is in the bottom right corner.

---
## Page 36
### Content
# Thanks for your Attention! ☺

### Visual Description
Closing slide with the text "Thanks for your Attention! ☺" in blue centered on a white background. The Carnegie Mellon University logo is in the bottom right corner.

---
## Page 37
### Content
# Appendix

### Visual Description
Section divider slide with the text "Appendix" in blue centered on a white background. The Carnegie Mellon University logo is in the bottom right corner.

---
## Page 38
### Content
# Solution of the Ornstein-Uhlenbeck SDE

### Visual Description
Section divider slide with the text "Solution of the Ornstein-Uhlenbeck SDE" in blue centered on a white background. The Carnegie Mellon University logo is in the bottom right corner.

---
## Page 39
### Content
# Proof [Solution of OU SDE]

### Lemma
Consider the OU SDE on $t \ge 0$:
$$dX_t = \theta(\mu - X_t) dt + \sigma dW_t, \quad \theta > 0, \sigma > 0,$$
with initial condition $X_0 \in \mathbb{R}$ and a standard Brownian motion $(W_t)_{t \ge 0}$.

We will prove that its solution is:
$$X_t = \mu + (X_0 - \mu) e^{-\theta t} + \sigma \int_0^t e^{-\theta(t-s)} dW_s$$

### Visual Description
Slide stating a lemma for the solution of the Ornstein-Uhlenbeck SDE. The final solution equation is highlighted in red text. The Carnegie Mellon University logo is in the bottom right corner.

---
## Page 40
### Content
# Proof [Solution of OU SDE]

$$dX_t = \theta(\mu - X_t) dt + \sigma dW_t, \quad \theta > 0, \sigma > 0,$$

### Proof
Define the deterministic integrating factor $f(t) = e^{\theta t}$.

By the product rule, we have that
$$d(f(t)X_t) = f(t) dX_t + X_t df(t).$$

Since $dX_t = \theta(\mu - X_t) dt + \sigma dW_t$ and $df(t) = \theta e^{\theta t} dt$,
$$d(e^{\theta t} X_t) = e^{\theta t} [\theta(\mu - X_t) dt + \sigma dW_t] + X_t \theta e^{\theta t} dt$$
$$= \theta \mu e^{\theta t} dt + \sigma e^{\theta t} dW_t.$$

### Visual Description
Mathematical proof slide showing the initial steps of solving the OU SDE using an integrating factor. The Carnegie Mellon University logo is in the bottom right corner.

---
==End of PDF==
## Page 41
### Content
**Proof [continued]**

**We already know:**
$$d(e^{\theta t} X_t) = \theta \mu e^{\theta t} dt + \sigma e^{\theta t} dW_t$$

Integrating from 0 to $t$ gives
$$e^{\theta t} X_t - X_0 = \theta \mu \int_0^t e^{\theta s} ds + \sigma \int_0^t e^{\theta s} dW_s$$

Because $\int_0^t e^{\theta s} ds = \frac{e^{\theta t}-1}{\theta}$, multiplying both sides by $e^{-\theta t}$ yields the solution
$$e^{\theta t} X_t - X_0 = \theta \mu \frac{e^{\theta t}-1}{\theta} + \sigma \int_0^t e^{\theta s} dW_s$$
$$X_t - e^{-\theta t} X_0 = e^{-\theta t} \theta \mu \frac{e^{\theta t}-1}{\theta} + e^{-\theta t} \sigma \int_0^t e^{\theta s} dW_s$$
$$= e^{-\theta t} \mu (e^{\theta t} - 1) + e^{-\theta t} \sigma \int_0^t e^{\theta s} dW_s$$
$$= \mu (1 - e^{-\theta t}) + \sigma \int_0^t e^{-\theta(t-s)} dW_s$$
$$\Rightarrow X_t = \mu + (X_0 - \mu) e^{-\theta t} + \sigma \int_0^t e^{-\theta(t-s)} dW_s$$

### Visual Description
Text-only slide.

---
## Page 42
### Content
# Ornstein-Uhlenbeck (OU) process
# Analysis with the Fokker-Planck Equation

### Visual Description
Title slide with blue text centered on a white background. The Carnegie Mellon University logo is in the bottom right corner.

---
## Page 43
### Content
**Limit of Ornstein-Uhlenbeck (OU) process**

Consider the one-dimensional Ornstein-Uhlenbeck (OU) SDE
$$dX_t = \theta(\mu - X_t) dt + \sigma dW_t, \quad \theta > 0, \sigma > 0,$$
with $W_t$ standard Brownian motion.

Let $p(t,x)$ denote the density of $X_t$.

The Kolmogorov forward (Fokker-Planck) equation associated with the OU SDE is:
$$\partial_t p(t,x) = -\partial_x (\theta(\mu - x) p(t,x)) + \frac{\sigma^2}{2} \partial_{xx} p(t,x),$$

### Visual Description
Text-only slide. The Fokker-Planck equation is highlighted in red.

---
## Page 44
### Content
**Limit of Ornstein-Uhlenbeck (OU) process**

$$\partial_t p(t,x) = -\partial_x (\theta(\mu - x) p(t,x)) + \frac{\sigma^2}{2} \partial_{xx} p(t,x)$$

A stationary density $p_*(x)$ satisfies $\partial_t p_* = 0$, so $p_*$ solves
$$-\partial_x (\theta(\mu - x) p_*(x)) + \frac{\sigma^2}{2} \partial_{xx} p_*(x) = 0. \quad (2)$$

Introduce the probability current (flux)
$$J(x) := \theta(\mu - x) p_*(x) - \frac{\sigma^2}{2} \partial_x p_*(x).$$
$$\Rightarrow -\partial_x J(x) = \partial_x (-\theta(\mu - x) p_*(x)) + \frac{\sigma^2}{2} \partial_{xx} p_*(x).$$

Then (2) is equivalent to $\partial_x J(x) = 0$, hence $J(x) \equiv C$ for some constant $C$.

### Visual Description
Text-only slide. The first two equations are highlighted in red.

---
## Page 45
### Content
**Limit of Ornstein-Uhlenbeck (OU) process**

$$J(x) = \theta(\mu - x) p_*(x) - \frac{\sigma^2}{2} \partial_x p_*(x).$$

Under some regularity conditions, for a normalizable density on $\mathbb{R}$ with finite mean, we can assume: $\lim_{|x| \to \infty} x p_*(x) = 0$, $\lim_{|x| \to \infty} p_*(x) = 0$, and $\lim_{|x| \to \infty} \partial_x p_*(x) = 0$.

Therefore, $\lim_{|x| \to \infty} J(x) = 0$. This forces $C = 0$, so
$$J(x) = 0$$
$$\frac{\sigma^2}{2} \partial_x p_*(x) = \theta(\mu - x) p_*(x). \quad (3)$$

Rearranging (3),
$$\frac{\partial_x p_*(x)}{p_*(x)} = \frac{2\theta}{\sigma^2} (\mu - x).$$

Integrating,
$$\log p_*(x) = \frac{2\theta}{\sigma^2} \left( \mu x - \frac{x^2}{2} \right) + C_0,$$

### Visual Description
Text-only slide.

---
## Page 46
### Content
**Limit of Ornstein-Uhlenbeck (OU) process**

**We already know:** $\log p_*(x) = \frac{2\theta}{\sigma^2} \left( \mu x - \frac{x^2}{2} \right) + C_0,$

so
$$p_*(x) = C \exp \left[ -\frac{\theta}{\sigma^2} (x - \mu)^2 \right], \quad C := e^{C_0 + \frac{\theta \mu^2}{\sigma^2}}. \quad (4)$$

Since the right-hand side is integrable, $p_*$ is proportional to a Gaussian density.

Normalizing,
$$\int_{\mathbb{R}} p_*(x) dx = 1 \Rightarrow C = \frac{1}{\sqrt{2\pi (\sigma^2 / (2\theta))}} = \sqrt{\frac{\theta}{\pi \sigma^2}}.$$

Hence
$$p_*(x) = \frac{1}{\sqrt{2\pi (\sigma^2 / (2\theta))}} \exp \left( -\frac{(x - \mu)^2}{2 (\sigma^2 / (2\theta))} \right),$$

i.e. $p_* = \mathcal{N}(\mu, \sigma^2 / (2\theta)).$

### Visual Description
Text-only slide.
