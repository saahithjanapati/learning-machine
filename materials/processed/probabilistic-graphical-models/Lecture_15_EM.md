# Lecture_15_EM

Source: `materials/archive/Lecture_15_EM.pdf`
Duplicate equivalents: `Lecture_15_EM.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 44

## Page 1
### Content
10708
Probabilistic Graphical Models: 
Spring 2026

Andrej Risteski
Machine Learning Department

Lecture 15: 
Variational methods for 
latent-variable models
### Visual Description
Title slide with centered text. The course number "10708" and title "Probabilistic Graphical Models: Spring 2026" are at the top in dark blue. The instructor's name and department are in the middle. The lecture number and title are at the bottom.

---
## Page 2
### Content
# Canonical tasks with graphical models

### Inference
**Given values** for the parameters $\theta$ of the model, *sample/calculate marginals* (e.g. sample $p_\theta(x_1), p_\theta(x_4, x_5), p_\theta(z|x)$, etc.)

### Learning
**Find values** for the parameters $\theta$ of the model, that give a *high likelihood* for the observed data. (e.g. canonical way is solving maximum likelihood optimization)
$$\max_{\theta \in \Theta} \sum_{i=1}^n \log p(x_i)$$

*We’ll see another instance of: inference primitives can be used for learning!*
### Visual Description
Text-only slide.

---
## Page 3
### Content
# Recall: latent-variable directed models

Sampling from Bayesian networks is easy.

$$P(\text{Diseases, Symptoms}) = P(\text{Diseases}) P(\text{Symptoms|Diseases})$$
*   **Latent Z**: Diseases
*   **Data X**: Symptoms
*   **Simple, explicit**

But: sampling/approximating the **posterior distribution** $P(Z|X)$ is **hard**:

By Bayes rule, $P(\text{Diseases|Symptoms}) \propto P(\text{Diseases, Symptoms})$

**Complicated partition function:**
$$\sum_{\text{Diseases}} P(\text{Diseases, Symptoms})$$
*(Up to normalizing const, simple...)*
### Visual Description
The slide contains a bipartite directed graph at the top right. The top layer has purple nodes labeled $d_1, d_i, d_m$ (Diseases). The bottom layer has blue nodes labeled $s_1, s_j, s_n$ (Symptoms). Arrows point from the disease nodes to the symptom nodes. A weight $W_{ij}$ is indicated for one of the edges. There are callout bubbles and arrows explaining the components of the probability formula.

---
## Page 4
### Content
# Recall: learning latent-variable directed models

The most obvious strategy: maximum likelihood estimation

> **Given data $x_1, x_2, \dots, x_n$, solve the optimization problem**
> $$\max_{\theta \in \Theta} \sum_{i=1}^n \log p_\theta(x_i)$$

How would you evaluate $p_\theta(x_i)$?

Same partition function problem as in unnormalized models...
$$\sum_{\text{Diseases}} P(\text{Diseases, Symptoms})$$
### Visual Description
The slide repeats the bipartite graph from Page 3 in the bottom right. The main content is a blue-shaded box containing the maximum likelihood optimization formula.

---
## Page 5
### Content
# Recall: learning latent-variable directed models

The most obvious strategy: maximum likelihood estimation

> **Given data $x_1, x_2, \dots, x_n$, solve the optimization problem**
> $$\max_{\theta \in \Theta} \sum_{i=1}^n \log p_\theta(x_i)$$

How would you evaluate $p_\theta(x_i)$?

Same partition function problem as in unnormalized models...

$$p_\theta(x) = \int_h p_\theta(h) p_\theta(x|h)$$
**Again, can be #P-hard to approximate.**
### Visual Description
This slide is an update of Page 4. It includes the same bipartite graph and the same boxed optimization problem. It adds a new formula for $p_\theta(x)$ in a light orange box and a note about #P-hardness.

---
## Page 6
### Content
# Recall: Training UGMs using MCMC

For brevity, let us write a UGM as:
$$p_\theta(x) \propto \exp(-E_\theta(x))$$
where $E_\theta(x)$ has some easy to evaluate form.

Hence, full gradient-based algorithm for learning a UGM:
$$\theta_{t+1} = \theta_t + \eta \left( \frac{1}{n} \left( \sum_{\text{samples } x_i} -\nabla E_{\theta_t}(x_i) \right) + \mathbb{E}_{x \sim p_{\theta_t}} [-\nabla_{\theta_t} E_{\theta_t}(x)] \right)$$

**Remarks:**
*   In general, likelihood is **not concave** (so no guarantees of converging to global max)
*   In general, drawing samples from $p_{\theta_t}$ is no easier than estimating partition functions, which is #P-hard. (See HW 2.)
### Visual Description
Text-only slide with mathematical formulas. The UGM definition is in a light orange box.

---
## Page 7
### Content
# Variational methods for partition functions

> **Gibbs variational principle:** Let $p(x) = \frac{1}{Z} \exp(E(x))$ be a distribution over a domain $\mathcal{X}$. Then, $p(x)$ and $Z$ solve the optimization problem:
> $$p(x) = \text{argmax}_{q: \text{ distribution over } \mathcal{X}} H(q) + \mathbb{E}_{x \sim q} [E(x)]$$
> $$\log Z = \max_{q: \text{ distribution over } \mathcal{X}} H(q) + \mathbb{E}_{x \sim q} [E(x)]$$

*Find the distribution that has both high entropy, and high expected energy value*

$$H(q) := -\sum_{x \in \mathcal{X}} q(x) \log q(x)$$
### Visual Description
The slide contains text and formulas. A blue-shaded box contains the Gibbs variational principle. To the right of the text is a black and white portrait of Josiah Willard Gibbs.

---
## Page 8
### Content
# Variational methods for approximating posteriors

> **Gibbs variational principle:** Let $p(z, x)$ be a joint distribution over latent variables and observables. Then,
> $$p(z|x) = \text{argmax}_{q(z|x): \text{ distribution over } Z} H(q(z|x)) + \mathbb{E}_{z \sim q(z|x)} [\log p(z, x)]$$

Furthermore, for every $q(z|x)$, we have
$$\log p(x) = KL(q(z|x) || p(z|x)) + H(q(z|x)) + \mathbb{E}_{z \sim q(z|x)} [\log p(z, x)]$$
$$= \max_{q(z|x): \text{ distribution over } Z} H(q(z|x)) + \mathbb{E}_{z \sim q(z|x)} [\log p(z, x)]$$
### Visual Description
Text-only slide. The main content is enclosed in a large blue-shaded box with rounded corners. It contains mathematical derivations related to the Gibbs variational principle applied to posterior distributions.
## Page 9
### Content
# Variational methods for approximating posteriors

**Gibbs variational principle:** Let $p(z, x)$ be a joint distribution over latent variables and observables. Then,
$$p(z|x) = \underset{q(z|x):\text{distribution over } Z}{\text{argmax}} H(q(z|x)) + \mathbb{E}_{z \sim q(z|x)}[\log p(z,x)]$$
In fact, for every $q(z|x)$, we have
$$\log p(x) = KL(q(z|x) || p(z|x)) + H(q(z|x)) + \mathbb{E}_{z \sim q(z|x)}[\log p(z,x)]$$
$$= \max_{q(z|x):\text{distribution over } Z} H(q(z|x)) + \mathbb{E}_{z \sim q(z|x)}[\log p(z,x)]$$

**Why:**
$$0 \le KL(q(z|x) || p(z|x)) = \mathbb{E}_{q(z|x)} \log q(z|x) - \mathbb{E}_{q(z|x)} \log p(z|x)$$
$$= -H(q(z|x)) - \mathbb{E}_{q(z|x)} \log \frac{p(z,x)}{p(x)}$$
$$= -H(q(z|x)) - \mathbb{E}_{q(z|x)} \log p(z,x) + \log p(x)$$
$$\Rightarrow \log p(x) = H(q(z|x)) + \mathbb{E}_{q(z|x)} \log p(z,x) + KL(q(z|x) || p(z|x))$$

Equality is attained if and only if $KL(q(z|x) || p(z|x)) = 0$ i.e. $q(z|x) = p(z|x)$

### Visual Description
Text-heavy slide. A blue rounded box contains the definition of the Gibbs variational principle. Below the box, a mathematical derivation labeled "Why:" shows how the log marginal likelihood $\log p(x)$ relates to the KL divergence, entropy, and expected joint log-likelihood.

---
## Page 10
### Content
# Variational methods for approximating posteriors

**Gibbs variational principle:** Let $p(z, x)$ be a joint distribution over latent variables and observables. Then,
$$p(z|x) = \underset{q(z|x):\text{distribution over } Z}{\text{argmax}} H(q(z|x)) + \mathbb{E}_{z \sim q(z|x)}[\log p(z,x)]$$
In fact, for every $q(z|x)$, we have
$$\log p(x) = KL(q(z|x) || p(z|x)) + H(q(z|x)) + \mathbb{E}_{z \sim q(z|x)}[\log p(z,x)]$$
$$= \max_{q(z|x):\text{distribution over } Z} H(q(z|x)) + \mathbb{E}_{z \sim q(z|x)}[\log p(z,x)]$$

**Exercise:** Can show this by applying vanilla Gibbs variational principle on the distribution $p(z|x) = \frac{1}{p(x)} \exp(\log(p(z,x)))$

*   $\frac{1}{p(x)}$ is the **Partition function**
*   $\log(p(z,x))$ is the **Energy function**

### Visual Description
The slide repeats the blue box from the previous page. Below it, an exercise is presented with a formula for $p(z|x)$. Arrows point from the terms in the formula to labels: "Partition function" for $1/p(x)$ and "Energy function" for $\log(p(z,x))$.

---
## Page 11
### Content
# Variational methods for approximating posteriors

**Gibbs variational principle:** Let $p(z, x)$ be a joint distribution over latent variables and observables. Then,
$$p(z|x) = \underset{q(z|x):\text{distribution over } Z}{\text{argmax}} H(q(z|x)) + \mathbb{E}_{z \sim q(z|x)}[\log p(z,x)]$$
In fact, for every $q(z|x)$, we have
$$\log p(x) = KL(q(z|x) || p(z|x)) + H(q(z|x)) + \mathbb{E}_{z \sim q(z|x)}[\log p(z,x)]$$

**Why is this useful?**

(1) **Approximating posteriors:** Instead of finding the argmax over **all** distributions over Z, we can maximize over some **simpler** parametric family $Q$, i.e. we can solve
$$\max_{q(z|x) \in Q} H(q(z|x)) + \mathbb{E}_{z \sim q(z|x)}[\log p(z,x)]$$
The argmax of the above distribution solves $\min_{q(z|x) \in Q} KL(q(z|x) || p(z|x))$.
In other words, we are finding the **projection** of $p(z|x)$ onto $Q$.

### Visual Description
The slide repeats the blue box with the Gibbs principle. Below it, text explains the utility of approximating posteriors by maximizing over a simpler parametric family $Q$, which is equivalent to minimizing the KL divergence (projecting onto $Q$).

---
## Page 12
### Content
# Variational methods for approximating posteriors

**Gibbs variational principle:** Let $p(z, x)$ be a joint distribution over latent variables and observables. Then,
$$p(z|x) = \underset{q(z|x):\text{distribution over } Z}{\text{argmax}} H(q(z|x)) + \mathbb{E}_{z \sim q(z|x)}[\log p(z,x)]$$
In fact, for every $q(z|x)$, we have
$$\log p(x) = KL(q(z|x) || p(z|x)) + H(q(z|x)) + \mathbb{E}_{z \sim q(z|x)}[\log p(z,x)]$$

![Projection Diagram](diagram)
*   **true posterior** $p(z|x)$
*   **"Nice" class** $Q$
*   **best proxy**
*   **divergence** $KL(q(z|x) || p(z|x))$

### Visual Description
The slide repeats the blue box. Below it is a diagram. On the left, a complex green distribution represents the "true posterior" $p(z|x)$. On the right, a large gray oval represents a "Nice" class $Q$ containing several simpler Gaussian-like distributions. A red dashed arrow points from one of these distributions (labeled "best proxy") to the true posterior, with the label "divergence $KL(q(z|x) || p(z|x))$".

---
## Page 13
### Content
# Variational methods for approximating posteriors

**Gibbs variational principle:** Let $p(z, x)$ be a joint distribution over latent variables and observables. Then,
$$p(z|x) = \underset{q(z|x):\text{distribution over } Z}{\text{argmax}} H(q(z|x)) + \mathbb{E}_{z \sim q(z|x)}[\log p(z,x)]$$
In fact, for every $q(z|x)$, we have
$$\log p(x) = KL(q(z|x) || p(z|x)) + H(q(z|x)) + \mathbb{E}_{z \sim q(z|x)}[\log p(z,x)]$$

**Why is this useful?**

(1) **Approximating posteriors:** Instead of finding the argmax over **all** distributions over Z, we can maximize over some **simpler** parametric family $Q$, i.e. we can solve
$$\max_{q(z|x) \in Q} H(q(z|x)) + \mathbb{E}_{z \sim q(z|x)}[\log p(z,x)]$$
There are several common families $Q$ that are used for which the above optimization is solveable – we will see **mean-field** families and **neural-net** parametrized families.

### Visual Description
Text-only slide. It repeats the utility of approximating posteriors and mentions that common families $Q$ include mean-field and neural-net parametrized families.

---
## Page 14
### Content
# Variational methods for approximating posteriors

**Gibbs variational principle:** Let $p(z, x)$ be a joint distribution over latent variables and observables. Then,
$$p(z|x) = \underset{q(z|x):\text{distribution over } Z}{\text{argmax}} H(q(z|x)) + \mathbb{E}_{z \sim q(z|x)}[\log p(z,x)]$$
In fact, for every $q(z|x)$, we have
$$\log p(x) = KL(q(z|x) || p(z|x)) + H(q(z|x)) + \mathbb{E}_{z \sim q(z|x)}[\log p(z,x)]$$
$$= \max_{q(z|x):\text{distribution over } Z} H(q(z|x)) + \mathbb{E}_{z \sim q(z|x)}[\log p(z,x)]$$

**Why is this useful?**

(2) **Approximate likelihood-based learning:** provides a lower bound on $\log p(x)$ -- sometimes called the **ELBO (evidence lower bound)**, since
$$\log p(x) \ge \max_{q(z|x) \in Q} H(q(z|x)) + \mathbb{E}_{z \sim q(z|x)}[\log p(z,x)]$$
This will be useful for learning latent-variable directed models (stay tuned !).

### Visual Description
Text-only slide. It introduces the second use case: approximate likelihood-based learning via the Evidence Lower Bound (ELBO).

---
## Page 15
### Content
# Variational methods for approximating posteriors

**Gibbs variational principle:** Let $p(z, x)$ be a joint distribution over latent variables and observables. Then,
$$p(z|x) = \underset{q(z|x):\text{distribution over } Z}{\text{argmax}} H(q(z|x)) + \mathbb{E}_{z \sim q(z|x)}[\log p(z,x)]$$
In fact, for every $q(z|x)$, we have
$$\log p(x) = KL(q(z|x) || p(z|x)) + H(q(z|x)) + \mathbb{E}_{z \sim q(z|x)}[\log p(z,x)]$$
$$= \max_{q(z|x):\text{distribution over } Z} H(q(z|x)) + \mathbb{E}_{z \sim q(z|x)}[\log p(z,x)]$$

![ELBO Decomposition Diagram](diagram)
*   Top segment: $KL(q||p)$
*   Bottom segment: $H(q(z|x)) + \mathbb{E}_{z \sim q}[\log p(z,x)]$
*   Total height: $\log p(x)$

### Visual Description
The slide repeats the blue box. Below it is a vertical bar diagram. A total height is marked as $\log p(x)$. This height is partitioned into two segments: a bottom segment representing the ELBO ($H(q(z|x)) + \mathbb{E}_{z \sim q}[\log p(z,x)]$) and a top segment representing the KL divergence ($KL(q||p)$).

---
## Page 16
### Content
# A tale of two KL divergences

![KL Divergence Comparison](plots)
(a) $KL(q||p)$
Approximation is too compact.

(b) $KL(p||q)$
Approximation is too spread.

### Visual Description
The slide shows two plots comparing different KL divergence objectives for approximating a correlated 2D Gaussian (green elongated ellipse) with an uncorrelated Gaussian (red circular contours). 
- Plot (a) shows $KL(q||p)$, where the red approximation is small and fits inside the high-probability region of the green ellipse ("too compact").
- Plot (b) shows $KL(p||q)$, where the red approximation is large and covers the entire extent of the green ellipse ("too spread").

---
## Page 17
### Content
# The “variational” KL divergence

$$KL(q||p) = -\int q(Z) \ln \frac{p(Z)}{q(Z)} dZ.$$

There is a large positive contribution to the KL divergence from regions of Z space in which:
- $p(Z)$ is near zero
- unless $q(Z)$ is also close to zero.

Minimizing $KL(q||p)$ leads to distributions $q(Z)$ that **avoid regions in which $p(Z)$ is small.**

### Visual Description
A 2D plot with axes $z_1$ and $z_2$ (ranging from 0 to 1). It shows green elliptical contours representing a distribution $p(Z)$ that is elongated along a diagonal. Inside one of the modes of this distribution, there are red circular contours representing an approximating distribution $q(Z)$. The red distribution is concentrated in a high-density region of $p(Z)$, avoiding the low-density regions. The plot is labeled (a).

---

## Page 18
### Content
# The “maximum likelihood” KL divergence

$$KL(p||q) = -\int p(Z) \ln \frac{q(Z)}{p(Z)} dZ.$$

There is a large positive contribution to the KL divergence from regions of Z space in which:
- $q(Z)$ is near zero,
- unless $p(Z)$ is also close to zero.

Minimizing $KL(p||q)$ leads to distributions $q(Z)$ that **are nonzero in regions where $p(Z)$ is nonzero.**

### Visual Description
A 2D plot with axes $z_1$ and $z_2$ (ranging from 0 to 1). It shows green elliptical contours representing a distribution $p(Z)$ elongated along a diagonal. A large set of red circular contours representing $q(Z)$ covers the entire area where $p(Z)$ has significant density. Unlike the previous page, $q(Z)$ here is broad to ensure it covers all regions where $p(Z)$ is nonzero.

---

## Page 19
### Content
# What happens when distribution class for Q is not rich enough?

| $KL(p||q)$ | $KL(q||p)$ | $KL(q||p)$ |
| :---: | :---: | :---: |
| ![Plot 1] | ![Plot 2] | ![Plot 3] |

Blue contours show bimodal distribution, red contours single Gaussian distribution that best approximates it.

$KL(q||p)$ will tend to find a single mode, whereas $KL(p||q)$ will average across all of the modes.

### Visual Description
Three plots comparing different KL divergence minimizations for a bimodal distribution (blue contours).
- Left plot ($KL(p||q)$): The red contours (a single Gaussian) are centered between the two blue modes, effectively averaging over both.
- Middle plot ($KL(q||p)$): The red contours are centered on the bottom-left mode of the blue distribution.
- Right plot ($KL(q||p)$): The red contours are centered on the top-right mode of the blue distribution.

---

## Page 20
### Content
# Expectation-maximization/ variational inference

The canonical algorithm for learning a single-layer latent-variable Bayesian network is an iterative algorithm as follows.

$$\max_{\theta \in \Theta} \sum_i \log p_\theta(x_i)$$
**max-likelihood objective**

### Visual Description
A bipartite graph diagram. The top layer has purple nodes labeled $d_1, \dots, d_i, \dots, d_m$. The bottom layer has blue nodes labeled $s_1, \dots, s_j, \dots, s_n$. Directed edges (arrows) point from the top nodes to the bottom nodes, representing weights $W_{ij}$. This represents a latent variable model where $d$ are latent variables and $s$ are observed variables.

---

## Page 21
### Content
# Expectation-maximization/ variational inference

The canonical algorithm for learning a single-layer latent-variable Bayesian network is an iterative algorithm as follows.

$$\max_{\theta \in \Theta} \sum_i \log p_\theta(x_i) = \max_{\theta \in \Theta} \sum_{i=1}^n \max_{\{q_i(z|x_i) \in \mathcal{Q}\}} H(q_i(z|x_i)) + \mathbb{E}_{q_i(z|x_i)}[\log p_\theta(x_i, z)]$$

Algorithm maintains iterates $\theta^t, \{q_i^t(z|x_i)\}$, and updates them iteratively:

**(1) Expectation (E)-step:**
Keep $\theta^t$ fixed, set $q_i^{t+1}(z|x_i) \in \mathcal{Q}$, s.t. they maximize the objective above.

**(2) Maximization (M)-step:**
Keep $q_i^{t+1}(z|x_i)$ fixed, set $\theta^{t+1} \in \Theta$ s.t. it maximizes the objective above.

Clearly, every step cannot make the objective worse!
Does *not* mean it converges to global optimum – could, e.g. get stuck in a local minimum.

### Visual Description
Text-only slide with a large mathematical equation at the top and a highlighted box containing the steps of the algorithm.

---

## Page 22
### Content
# Expectation-maximization/ variational inference

The canonical algorithm for learning a single-layer latent-variable Bayesian network is an iterative algorithm as follows.

$$\max_{\theta \in \Theta} \sum_i \log p_\theta(x_i) = \max_{\theta \in \Theta} \sum_{i=1}^n \max_{\{q_i(z|x_i) \in \mathcal{Q}\}} H(q_i(z|x_i)) + \mathbb{E}_{q_i(z|x_i)}[\log p_\theta(x_i, z)]$$

Algorithm maintains iterates $\theta^t, q_i^t(z|x_i)$, and updates them iteratively:

**(1) Expectation step:**
Keep $\theta^t$ and set $q_i^{t+1}(z|x_i) \in \mathcal{Q}$, s.t. they maximize the objective above.

If the class is infinitely rich, the optimum is $q_i^{t+1}(z|x_i) = p_{\theta^t}(z|x_i)$

This is called **expectation-maximization (EM).**
If class is not infinitely rich, it’s called **variational inference.**

### Visual Description
Text-only slide. It repeats the objective function and the E-step from the previous page, adding a condition for when the algorithm is called EM versus variational inference.

---

## Page 23
### Content
# Example: Mixture of Gaussians

- When modeling real-world data, Gaussian assumption may not be appropriate.
- Consider the following example: Old Faithful Dataset

| Single Gaussian | Mixture of two Gaussians |
| :---: | :---: |
| ![Single Gaussian Plot] | ![Mixture Plot] |

### Visual Description
Two scatter plots of the "Old Faithful" dataset (eruption time vs. waiting time). The data points are green.
- Left plot ("Single Gaussian"): A single large blue elliptical contour is drawn around the entire dataset, which clearly consists of two distinct clusters.
- Right plot ("Mixture of two Gaussians"): Two separate blue elliptical contours are drawn, one around each of the two clusters, providing a much better fit to the data.

---

## Page 24
### Content
# Example: Mixture of Gaussians

- We can combine simple models into a complex model by defining a superposition of $K$ Gaussian densities of the form:

$$p(\mathbf{x}) = \sum_{k=1}^K \pi_k \mathcal{N}(\mathbf{x} | \boldsymbol{\mu}_k, \boldsymbol{\Sigma}_k)$$

In the equation above:
- $\pi_k$ is the **Mixing coefficient**
- $\mathcal{N}(\mathbf{x} | \boldsymbol{\mu}_k, \boldsymbol{\Sigma}_k)$ is the **Component**

Constraints:
$$\forall k : \pi_k \ge 0 \quad \quad \sum_{k=1}^K \pi_k = 1$$

- Note that each Gaussian component has its own mean $\boldsymbol{\mu}_k$ and covariance $\boldsymbol{\Sigma}_k$. The parameters $\pi_k$ are called mixing coefficients.
- More generally, mixture models can comprise linear combinations of other distributions.

### Visual Description
A plot showing a mixture of three Gaussians ($K=3$). Three blue bell-shaped curves represent the individual components. A single red curve represents the sum (the mixture distribution), which has three distinct peaks of varying heights. The x-axis is labeled $x$ and the y-axis is labeled $p(x)$.
## Page 25
### Content
# Example: Mixture of Gaussians

* We can combine simple models into a complex model by defining a superposition of $K$ Gaussian densities of the form:

$$p(\mathbf{x}) = \sum_{k=1}^{K} \underbrace{\pi_k}_{\text{Mixing coefficient}} \underbrace{\mathcal{N}(\mathbf{x} | \boldsymbol{\mu}_k, \boldsymbol{\Sigma}_k)}_{\text{Component}}$$

$$\forall k : \pi_k \ge 0 \quad \sum_{k=1}^{K} \pi_k = 1$$

* Note that each Gaussian component has its own mean $\boldsymbol{\mu}_k$ and covariance $\boldsymbol{\Sigma}_k$. The parameters $\pi_k$ are called mixing coefficients.

$$p(Z = k) = \pi_k$$
$$p(X = x | Z = k) = \mathcal{N}(\boldsymbol{\mu}_k, \boldsymbol{\Sigma}_k)$$

### Visual Description
A graph on the right shows a probability density function $p(x)$ against $x$. It displays three individual blue Gaussian curves (representing components for $K=3$) and a single red curve which is the sum (superposition) of these three Gaussians. On the left, the mathematical definition of a Mixture of Gaussians is provided with labels for "Mixing coefficient" and "Component".

---
## Page 26
### Content
# EM for Mixtures of Gaussians

### Mixture of spherical Gaussians

Consider a mixture of $K$ Gaussians with unknown means $p = \sum_{i=1}^{K} \frac{1}{K} \mathcal{N}(\mu_i, I_d)$

Let's try to calculate the E and M steps.

**E-step:** the optimal $q_i^{t+1}(z|x_i)$ is $p_{\theta^t}(z|x_i)$. Can we calculate this?

By Bayes rule, $p_{\theta^t}(z = k|x_i) \propto p(z = k)p(x_i|z = k) \propto p(x_i|z = k) \propto e^{-\|x_i - \mu_k^t\|^2}$

Writing out the normalizing constant, we have
$$q_i^{t+1}(z = k|x_i) = \frac{e^{-\|x_i - \mu_k^t\|^2}}{\sum_{k'} e^{-\|x_i - \mu_{k'}^t\|^2}}$$
$\rightarrow$ "Soft" version of assigning point to nearest cluster

### Visual Description
The slide contains mathematical derivations for the E-step of EM applied to a mixture of spherical Gaussians. A blue arrow points from the final formula to the text "Soft" version of assigning point to nearest cluster.

---
## Page 27
### Content
# EM for Mixtures of Gaussians

### Mixture of spherical Gaussians

Consider a mixture of $K$ Gaussians with unknown means $p = \sum_{i=1}^{K} \frac{1}{K} \mathcal{N}(\mu_i, I_d)$

Let's try to calculate the E and M steps.

**M-step:** given a guess $q_i^t(z|x_i)$, we can rewrite the maximization for $\theta$ as:

$$\max_{\theta \in \Theta} \sum_{i=1}^{n} \underbrace{H(q_i^t(z|x_i))}_{\text{Doesn't depend on } \theta} + \mathbb{E}_{q_i^t(z|x_i)}[\log p_{\theta}(x_i, z)]$$

$$= \mathbb{E}_{q_i^t(z|x_i)} [\text{[blue X over log } p_{\theta}(z)\text{]} + \log p_{\theta}(x_i|z)]$$
$$\mathbb{E}_{q_i^t(z|x_i)} [\log p_{\theta}(x_i|z)]$$

### Visual Description
The slide shows the mathematical derivation for the M-step. An arrow points to the entropy term $H(q_i^t(z|x_i))$ noting it doesn't depend on $\theta$. In the expansion, a large blue 'X' is placed over $\log p_{\theta}(z)$ to indicate it is treated as a constant (since the prior is uniform $1/K$).

---
## Page 28
### Content
# EM for Mixtures of Gaussians

**M-step:** given a guess $q_i^t(z|x_i)$, we can rewrite the maximization for $\theta$ as:

$$\max_{\theta} \sum_{i=1}^{n} \mathbb{E}_{q_i^t(z|x_i)} [\log p_{\theta}(x|z)] = \max_{\theta} - \sum_{i=1}^{n} \sum_{k=1}^{K} q_i^t(z = k|x_i) \|x_i - \mu_k\|^2$$

Want to maximize for $\theta = \mu_1, \dots, \mu_K$. Convex in each $\mu_k$.

Setting the derivative w.r.t. $\mu_k$ to 0, we have:
$$\nabla_{\mu_k} \left( \sum_{i=1}^{n} \sum_{k=1}^{K} q_i^t(z = k|x_i) \|x_i - \mu_k\|^2 \right) = 0$$
$$\sum_{i=1}^{n} q_i^t(z = k|x_i)(x_i - \mu_k) = 0$$
$$\mu_k = \sum_{i=1}^{n} \frac{q_i^t(z = k|x_i)}{\sum_{i'} q_{i'}^t(z = k|x_{i'})} x_i$$

### Visual Description
Text-only slide containing mathematical derivations for solving the M-step by setting the gradient with respect to the means $\mu_k$ to zero.

---
## Page 29
### Content
# EM for Mixtures of Gaussians

### Mixture of spherical Gaussians

Consider a mixture of $K$ Gaussians with unknown means $p = \sum_{i=1}^{K} \frac{1}{K} \mathcal{N}(\mu_i, I_d)$

Let's try to calculate the E and M steps.

**M-step:** given a guess $q_i^t(z|x_i)$, we can rewrite the maximization for $\theta$ as:

$$\max_{\theta} \mathbb{E}_{q_i^t(z|x_i)} [\log p_{\theta}(x|z)] = \max_{\theta} - \sum_{i=1}^{n} \sum_{k=1}^{K} q_i^t(z = k|x_i) \|x_i - \mu_k\|^2$$

Setting the derivative w.r.t. $\mu_k$ to 0, we have:
$$\mu_k = \sum_{i=1}^{n} \frac{q_i^t(z = k|x_i)}{\sum_{i'} q_{i'}^t(z = k|x_{i'})} x_i$$
$\rightarrow$ Average points, weighing nearby points more

### Visual Description
The slide summarizes the M-step result for spherical Gaussians. A blue arrow points from the final formula for $\mu_k$ to the text "Average points, weighing nearby points more".

---
## Page 30
### Content
# Unknown covariances and weights

Full updates when weights $\phi$, covariances $\Sigma$, means $\mu$ are all unknown:

**Randomly initialize parameters,** $\phi, \mu, \Sigma$
**while** not converged **do**
&nbsp;&nbsp;&nbsp;&nbsp;E-Step:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$c_k^{(i)} \leftarrow p(z^{(i)} = k | x^{(i)}; \phi, \mu, \Sigma)$
&nbsp;&nbsp;&nbsp;&nbsp;M-Step:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\phi_k \leftarrow \frac{1}{N} \sum_{i=1}^{N} c_k^{(i)}, \forall k$
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\mu_k \leftarrow \frac{\sum_{i=1}^{N} c_k^{(i)} x^{(i)}}{\sum_{i=1}^{N} c_k^{(i)}}, \forall k$
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\Sigma_k \leftarrow \frac{\sum_{i=1}^{N} c_k^{(i)} (x^{(i)} - \mu_k)(x^{(i)} - \mu_k)^T}{\sum_{i=1}^{N} c_k^{(i)}}, \forall k$
**return** $(\phi, \mu, \Sigma)$

### Visual Description
The slide presents the full EM algorithm for Gaussian Mixture Models in an orange box. It includes initialization, a while loop for convergence, and the specific update rules for the E-step (responsibilities $c_k^{(i)}$) and M-step (weights $\phi_k$, means $\mu_k$, and covariances $\Sigma_k$).

---
## Page 31
### Content
# Relationship to the clustering literature

**Goal:** group the data into clusters of "nearby" points.

**What's needed for clustering?**

1. **Proximity measure,** *either*
    * similarity measure $s(x_i, x_k)$: large if $x_i, x_k$ are similar
    * dissimilarity (or distance) measure $d(x_i, x_k)$: small if $x_i, x_k$ are similar
    * [Visual: large d, small s (points far apart) vs large s, small d (points close together)]

2. **Criterion function** to evaluate a clustering
    * [Visual: "good clustering" with tight groups vs "bad clustering" with overlapping groups]

3. **Algorithm** to compute clustering
    * For example, by optimizing the criterion function

### Visual Description
On the left, there is a scatter plot showing data points grouped into three distinct clusters colored green, blue, and red. On the right, the text outlines the requirements for clustering, accompanied by small diagrams: one showing two points with varying distance/similarity, and another comparing "good clustering" (well-separated groups) to "bad clustering" (poorly separated groups).

---
## Page 32
### Content
# Relationship to the clustering literature

If the distance metric is the **Euclidean distance**, and the measure of "goodness" of the cluster is the **average distance from the centroid**: we get the **k-means objective.**

$$\text{argmin}_{\{r_{nk}, \boldsymbol{\mu}_k\}} \sum_{n=1}^{N} \sum_{k=1}^{K} r_{nk} \| \mathbf{x}_n - \boldsymbol{\mu}_k \|^2$$

$\uparrow$ **Is point n in cluster k?**
$\uparrow$ **Centroid of k-th cluster**

### Visual Description
The slide defines the k-means objective function mathematically. Two blue arrows point to components of the formula: one points to $r_{nk}$ with the label "Is point n in cluster k?", and the other points to $\boldsymbol{\mu}_k$ with the label "Centroid of k-th cluster".

---
==End of PDF==
## Page 33
### Content
# Relationship to the clustering literature

The **K-means** algorithm tries to optimize this objective by alternatingly optimizing the cluster assignments and means:

**while** not converged **do**
&nbsp;&nbsp;&nbsp;&nbsp;E-Step:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$z^{(i)} \leftarrow \text{argmax}_z \log p(x^{(i)} | z; \mu, \Sigma) + \log p(z; \phi)$

&nbsp;&nbsp;&nbsp;&nbsp;M-Step:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\phi_k \leftarrow \frac{1}{N} \sum_{i=1}^N \mathbb{I}(z^{(i)} = k), \forall k$
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\mu_k \leftarrow \frac{\sum_{i=1}^N \mathbb{I}(z^{(i)} = k)x^{(i)}}{\sum_{i=1}^N \mathbb{I}(z^{(i)} = k)}, \forall k$

### Visual Description
A yellow box contains pseudocode for the K-means algorithm, structured into an E-Step for cluster assignment and an M-Step for parameter updates (cluster proportions $\phi_k$ and means $\mu_k$).

---
## Page 34
### Content
# Relationship to the clustering literature

The **K-means** algorithm tries to optimize this objective by alternatingly optimizing the cluster assignments and means:

[Visual of K-means iterations]

### Visual Description
A series of eight scatter plots illustrating the steps of the K-means algorithm:
1. **Input data**: Unlabeled points in three clusters.
2. **Initialization**: Three initial cluster centers (triangles) are placed.
3. **Assign Points (1)**: Points are colored based on the nearest center (blue, red, green).
4. **Recompute Centers (1)**: Centers move to the mean of their assigned points.
5. **Reassign Points (2)**: Points are reassigned to the updated centers.
6. **Recompute Centers (2)**: Centers move again.
7. **Reassign Points (3)**: Final point assignments.
8. **Recompute Centers (3)**: Final center positions.
A legend indicates Cluster 0 (blue triangle), Cluster 1 (red triangle), and Cluster 2 (green triangle).

---
## Page 35
### Content
# Relationship to the clustering literature

The **EM algorithm** for learning **Gaussian mixture models (GMM)** is intuitively **"soft K-means"**

[Visual of K-means iterations]

### Visual Description
The same series of eight scatter plots from the previous page is shown, illustrating the iterative process of K-means (Input data, Initialization, Assign Points, Recompute Centers, etc.) to provide a visual comparison for the EM algorithm.

---
## Page 36
### Content
# Example 3: Topic models (LDA)

**Latent Dirichlet Allocation**: famous model for modeling topic structure of documents of text. (Blei, Ng, Jordan ‘03)

[Visual of LDA concept]

### Visual Description
An image showing a scientific article titled "Seeking Life's Bare (Genetic) Necessities" with various words highlighted in different colors (pink, green, blue, yellow). To the right, a diagram shows these colors mapping to different topics, represented by colored circles and a bar chart indicating the distribution of topics within the document.

---
## Page 37
### Content
# Recall: Dirichlet Distribution

Consider a distribution over simplex, namely over points $\{\mu_i\}_{i=1}^K$
$$\forall k : \mu_k \ge 0 \text{ and } \sum_{k=1}^K \mu_k = 1$$

The Dirichlet distribution (with params $\{\alpha_i \ge 0\}_{i=1}^K$) is defined as:
$$Dir(\mu | \alpha) \propto \prod_{k=1}^K \mu_k^{\alpha_k - 1}$$

[Visual of a 3-simplex]

### Visual Description
A 3D coordinate system with axes $\mu_1, \mu_2, \mu_3$. A pink triangular plane (a 2-simplex) is drawn connecting the points $(1,0,0), (0,1,0),$ and $(0,0,1)$, representing the constraint that the sum of the variables equals 1.

---
## Page 38
### Content
# Recall: Dirichlet Distribution

Plots of the Dirichlet distribution over three variables.

[Visual of Dirichlet density plots]

### Visual Description
Three 3D plots showing the density of the Dirichlet distribution on a triangular simplex for different parameter values:
1. $\alpha_k = 10^{-1}$: The density is highly concentrated at the corners of the triangle.
2. $\alpha_k = 10^0$: The density is uniform across the triangle.
3. $\alpha_k = 10^1$: The density is concentrated in the center of the triangle.

---
## Page 39
### Content
# Example: Topic models (LDA)

Defines a distribution over documents, involving K topics.

The **parameters** are: $\{\alpha_i\}_{i=1}^K$ (Dirichlet parameters) and **matrix** $\beta \in \mathbb{R}_+^{V \times K}$, where $V$ is the size of the vocabulary.

The columns of $\beta$ satisfy $\sum_{j=1}^V \beta_{ij} = 1$ (the **distribution of words** in a topic $i$)

To produce document:
* First, sample $\theta \sim Dir(\cdot | \alpha)$: this will be the **topic proportion vector** for the document.
* Each word in the document is generated in order, independently.
* To generate word $i$:
    * **Sample topic** $z_i$ with categorical distribution with parameters $\theta$
    * **Sample word** $w_i$ with categorical distribution with parameters $\beta_{z_i}$

[Plate notation diagram for LDA]

### Visual Description
A plate notation diagram for Latent Dirichlet Allocation (LDA). It shows a parameter $\alpha$ pointing to $\theta$, which points to $z$, which in turn points to $w$. A parameter $\beta$ also points to $w$. There is a plate labeled $N$ around $z$ and $w$ (representing words in a document) and a larger plate labeled $M$ around $\theta, z,$ and $w$ (representing documents in a corpus). Below the diagram is the same highlighted article image from page 36.

---
## Page 40
### Content
# Example: Topic models (LDA)

[Visual of topic word lists and color-coded text]

### Visual Description
The top half of the slide shows a table with four topics and their most frequent words:
- **"Arts"**: NEW, FILM, SHOW, MUSIC, MOVIE, PLAY, MUSICAL, etc.
- **"Budgets"**: MILLION, TAX, PROGRAM, BUDGET, BILLION, FEDERAL, YEAR, etc.
- **"Children"**: CHILDREN, WOMEN, PEOPLE, CHILD, YEARS, FAMILIES, WORK, etc.
- **"Education"**: SCHOOL, STUDENTS, SCHOOLS, EDUCATION, TEACHERS, HIGH, PUBLIC, etc.

The bottom half shows a paragraph of text where words are color-coded according to these topics (e.g., "Lincoln Center" in blue for Arts, "$1.25 million" in green for Budgets, "children" in purple for Children, "School" in pink for Education).

---
==End of PDF==
## Page 41
### Content
# Example: Topic models (LDA)

The E-step cannot be done in closed form:
$$p(\vec{\theta}_{1:D}, z_{1:D,1:N}, \vec{\beta}_{1:K} \mid w_{1:D,1:N}, \alpha, \eta) = \frac{p(\vec{\theta}_{1:D}, \vec{z}_{1:D}, \vec{\beta}_{1:K} \mid \vec{w}_{1:D}, \alpha, \eta)}{\int_{\vec{\beta}_{1:K}} \int_{\vec{\theta}_{1:D}} \sum_{\vec{z}} p(\vec{\theta}_{1:D}, \vec{z}_{1:D}, \vec{\beta}_{1:K} \mid \vec{w}_{1:D}, \alpha, \eta)}$$

(In fact, can be shown to be #P-hard to perform in the worst case.)

The variational family to approximate the posterior is commonly chosen to be a mean-field family:
$$q(\vec{\theta}_{1:D}, z_{1:D,1:N}, \vec{\beta}_{1:K}) = \prod_{k=1}^K q(\vec{\beta}_k \mid \vec{\lambda}_k) \prod_{d=1}^D \left( q(\vec{\theta}_d \mid \vec{\gamma}_d) \prod_{n=1}^N q(z_{d,n} \mid \vec{\phi}_{d,n}) \right)$$

- **Probability of topic $z$ given document $d$**: $q(\theta_d \mid \gamma_d)$
  Each document has its own Dirichlet prior $\gamma_d$
- **Probability of word $w$ given topic $z$**: $q(\beta_z \mid \lambda_z)$
  Each topic has its own Dirichlet prior $\lambda_z$
- **Probability of topic assignment to word $w_{d,n}$**: $q(z_{d,n} \mid \phi_{d,n})$
  Each word position $word[d][n]$ has its own prior $\phi_{d,n}$

### Visual Description
The slide contains the title "Example: Topic models (LDA)" followed by text explaining the difficulty of the E-step in LDA. It presents the mathematical formula for the posterior and the mean-field variational family approximation. Below the formulas, there are bullet points defining the components of the variational distribution.

---
## Page 42
### Content
# Example: Topic models (LDA)

$$q(\vec{\theta}_{1:D}, z_{1:D,1:N}, \vec{\beta}_{1:K}) = \prod_{k=1}^K q(\vec{\beta}_k \mid \vec{\lambda}_k) \prod_{d=1}^D \left( q(\vec{\theta}_d \mid \vec{\gamma}_d) \prod_{n=1}^N q(z_{d,n} \mid \vec{\phi}_{d,n}) \right)$$

- **Probability of topic $z$ given document $d$**: $q(\theta_d \mid \gamma_d)$
  Each document has its own Dirichlet prior $\gamma_d$
- **Probability of word $w$ given topic $z$**: $q(\beta_z \mid \lambda_z)$
  Each topic has its own Dirichlet prior $\lambda_z$
- **Probability of topic assignment to word $w_{d,n}$**: $q(z_{d,n} \mid \phi_{d,n})$
  Each word position $word[d][n]$ has its own prior $\phi_{d,n}$

| One iteration of mean field variational inference for LDA | Parameter updates: |
| :--- | :--- |
| (1) For each topic $k$ and term $v$:<br>(8) $\lambda_{k,v}^{(t+1)} = \eta + \sum_{d=1}^D \sum_{n=1}^N 1(w_{d,n} = v) \phi_{n,k}^{(t)}$<br>(2) For each document $d$:<br>&nbsp;&nbsp;&nbsp;&nbsp;(a) Update $\gamma_d$:<br>(9) $\gamma_{d,k}^{(t+1)} = \alpha_k + \sum_{n=1}^N \phi_{d,n,k}^{(t)}$<br>&nbsp;&nbsp;&nbsp;&nbsp;(b) For each word $n$, update $\vec{\phi}_{d,n}$:<br>(10) $\phi_{d,n,k}^{(t+1)} \propto \exp \left\{ \Psi(\gamma_{d,k}^{(t+1)}) + \Psi(\lambda_{k,w_n}^{(t+1)}) - \Psi(\sum_{v=1}^V \lambda_{k,v}^{(t+1)}) \right\}$,<br>&nbsp;&nbsp;&nbsp;&nbsp;where $\Psi$ is the digamma function, the first derivative of the $\log \Gamma$ function. | $\beta_{ij} \propto \sum_{d=1}^M \sum_{n=1}^{N_d} \phi_{dni} w_{dn}^j$ |

### Visual Description
The slide continues the LDA example, repeating the mean-field family formula and definitions from the previous page. It adds a boxed algorithm titled "One iteration of mean field variational inference for LDA" containing update equations (8), (9), and (10). To the right of the box, there is a section labeled "Parameter updates:" with a corresponding proportionality formula.

---
## Page 43
### Content
# Quite tedious generally

Every new model generally requires re-deriving the variational EM updates. Even for moderately complicated models, this is quite tedious.

Some recent attempts at leveraging automatic differentiation (quite popular in DL). ADVI appeared in Kucukelbir et al (2011), and is incorporated in Stan.

Loose idea: have the user specify the model only.

The variational distribution is a (learned) pushforward of a Gaussian, so it can be estimated in a Monte Carlo fashion. (Similar as reparametrization trick, stay tuned.)

Gradients are then taken using ideas from automatic differentiation.

### Visual Description
The slide title is "Quite tedious generally". The text discusses the difficulty of manually deriving variational EM updates and introduces Automatic Differentiation Variational Inference (ADVI) as a solution. A red stylized 'S' logo (the Stan logo) is featured on the left side of the lower half of the slide.

---
## Page 44
### Content
# Variants of EM

- **Generalized EM**: Replace the M-Step by a single gradient-step that improves the likelihood
- **Monte Carlo EM**: Approximate the E-Step by sampling
- **Sparse EM**: Keep an "active list" of points (updated occasionally) from which we estimate the expected counts in the E-Step
- **Incremental EM / Stepwise EM**: If standard EM is described as a *batch* algorithm, these are the *online* equivalent
- **etc.**

Slide by Matt Gormley.

### Visual Description
Text-only slide. It lists several variants of the Expectation-Maximization algorithm with brief descriptions for each. A footer note attributes the slide to Matt Gormley.

---
