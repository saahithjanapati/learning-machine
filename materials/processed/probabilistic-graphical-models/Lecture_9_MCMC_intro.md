# Lecture_9_MCMC_intro

Source: `materials/archive/probabilistic graphical models/Lecture_9_MCMC_intro.pdf`
Duplicate equivalents: `Lecture_9_MCMC_intro (1).pdf`, `Lecture_9_MCMC_intro (2).pdf`, `Lecture_9_MCMC_intro.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `strict full-PDF single-call conversion`
Finish reason: `STOP`
Pages: 63
## Page 1
### Content
10708
Probabilistic Graphical Models:
Spring 2026

Andrej Risteski
Machine Learning Department

Lecture 9+10:
Introduction to sampling.
Markov Chain Monte Carlo (MCMC)

### Visual Description
This is a title slide with centered text. There are no diagrams or images.

---

## Page 2
### Content
# Inference tasks

Inference: answering “probabilistic queries” about a known model

**Sampling:** drawing samples from a given model

**Marginal Inference:** compute marginals of variables (e.g. $p(x_i), p(x_C)$)

**MAP (Maximum A-Posteriori Probability) Inference:** compute variable assignment with highest probability
$$\hat{\mathbf{x}} = \text{argmax}_{\mathbf{x}} p(\mathbf{x} | \boldsymbol{\theta})$$

**Partition Function (for a UGM):** Compute the normalization constant
$$Z(\boldsymbol{\theta}) = \sum_{\mathbf{x}} \prod_{C \in \mathcal{C}} \psi_C(\mathbf{x}_C)$$

*All are hard in general.*

### Visual Description
The slide lists various inference tasks with their definitions and associated mathematical formulas for MAP inference and the partition function.

---

## Page 3
### Content
# Inference tasks

Sampling, marginal inference, and calculating partition functions are of “comparable” hardness most of the time. (Interreducible.)

These resemble “counting” tasks: in general #P-hard.

#P-hard problems: as hard as counting satisfying assignments to a given SAT formula.

MAP has an “optimization” flavor. In general NP-hard.

NP-hard problems: as hard as solving a SAT instance.

*We will see two families of approximate inference approaches:*
*Markov Chain Monte Carlo (MCMC) and Variational Inference (VI)*

### Visual Description
This slide explains the computational complexity of different inference tasks, categorizing them as #P-hard or NP-hard. It concludes by introducing MCMC and VI as approximate inference methods.

---

## Page 4
### Content
# Monte Carlo estimation

We wish to approximate $F = \mathbb{E}_{x \sim p} f(x)$ by $\frac{1}{N} \sum_{i=1}^N f(x_i), x_i \sim p$

How large does N need to get a good estimate?

*What governs N?*

Denote $X = \frac{1}{N} \sum_{i=1}^N f(x_i)$. Then, $\mathbb{E}[X] = F$ and $Var(X) = \frac{1}{N} Var(f(x_i))$

Recall **Chebyshev’s inequality**: $Pr[|X - F| \geq c \sqrt{Var(X)}] \leq \frac{1}{c^2}$

(In English, with prob at least 1-1/100, no more than 10 standard deviations away from F.)

### Visual Description
The slide introduces Monte Carlo estimation and uses Chebyshev's inequality to discuss the relationship between the number of samples $N$ and the quality of the estimate. Chebyshev's inequality is highlighted in a blue-bordered box.

---

## Page 5
### Content
# Monte Carlo estimation

Suppose we wish to approximate $F = \mathbb{E}_{x \sim p} f(x)$ by $\frac{1}{N} \sum_{i=1}^N f(x_i), x_i \sim p$

Denote $X = \frac{1}{N} \sum_{i=1}^N f(x_i)$.

Recall **Chebyshev’s inequality**: $Pr[|X - F| \geq c \sqrt{Var(X)}] \leq \frac{1}{c^2}$

Suppose we want to get an estimate which is within $\epsilon$ of F, with probability 99/100:

Set c=10. Set $10 \sqrt{Var(X)} = \epsilon \rightarrow N = \frac{100}{\epsilon^2} Var(f(x_i))$

### Visual Description
This slide continues the Monte Carlo estimation topic, deriving a formula for the required number of samples $N$ to achieve a certain precision $\epsilon$ with high probability. The final formula for $N$ is enclosed in a blue-bordered box.

---

## Page 6
### Content
# Importance sampling

What if we can draw samples from some distribution q, but can evaluate p,q at any point x?

$$F = \mathbb{E}_{x \sim p} f(x) = \int_x p(x)f(x) dx = \int_x q(x) \left( f(x) \frac{p(x)}{q(x)} \right) dx = \mathbb{E}_q \left( f(x) \frac{p(x)}{q(x)} \right)$$

Hence, estimate $F$ by $\frac{1}{N} \sum_{i=1}^N f(x_i) \frac{p(x_i)}{q(x_i)}, x_i \sim q$

**Beware:** if p,q are very different, $\frac{p(x_i)}{q(x_i)}$ will vary a lot, so $f(x_i) \frac{p(x_i)}{q(x_i)}$ will have huge variance. (Hence, N needs to be huge.)

### Visual Description
The slide explains importance sampling, showing the mathematical derivation for changing the expectation from distribution $p$ to distribution $q$. A warning about high variance when $p$ and $q$ are dissimilar is highlighted in a blue-bordered box.

---

## Page 7
### Content
# Example: calculating a partition function

$$Z_\theta = \mathbb{E}_q \frac{\exp(-E_\theta(x))}{q(x)} \approx \frac{1}{N} \sum_{i=1}^N \frac{\exp(-E_\theta(x_i))}{q(x_i)}, x_i \sim q$$

Q: When do we need N to not be too large?
A: When the variance of $\frac{\exp(-E_\theta(x))}{q(x)}$ is not too large.

Note that $\frac{\exp(-E_\theta(x))}{q(x)} = Z_\theta \frac{p_\theta(x)}{q(x)}$. Hence, we want $\frac{p_\theta(x)}{q(x)} \approx 1$.

*Hence: if we can sample from q, s.t. $q \approx p_\theta$: we can use samples to estimate Z via importance sampling!*

*Remark:* In general, drawing samples from $p_\theta$ is no easier than estimating partition functions, which is #P-hard. Both tasks are basically interreducible. (See HW.)

### Visual Description
This slide provides an example of using importance sampling to estimate a partition function $Z_\theta$. It discusses the conditions for sample efficiency and notes the inherent difficulty of the task.

---

## Page 8
### Content
# What distributions are easy to sample from?

*Most univariate distributions:*

**Uniform[0,1]:** np.random() (Mersenne Twister based)

**Bernoulli(1/2):** (if np.random() < ½, output 1; else output 0)

**Bernoulli(p):** (if np.random() < p, output 1; else output 0)

**Standard univariate Gaussian:** (Box-Muller transform of uniform)

…. (bruteforce transforms work in 1d)

### Visual Description
The slide lists common univariate probability distributions that are computationally easy to sample from, providing simple algorithmic logic for some.

---

## Page 9
### Content
# Bruteforce: inverse CDF transform

### Visual Description
The slide contains a plot with two curves:
- A red curve representing a bimodal probability density function $p(y)$.
- A blue curve representing the corresponding cumulative distribution function (CDF) $h(y)$, which starts at 0 and approaches 1.
- The x-axis is labeled $y$. The y-axis has markers for 0 and 1.
- A dashed horizontal line is at $y=1$.

### Content (continued)
$$h(y) = \int_{-\infty}^y p(y') dy'$$

**Algorithm:**
Generate sample u from unif(0,1)
Return $y = h^{-1}(u)$

**Why it works?**
$P(X \leq x) = P(h^{-1}(U) \leq x) = P(U \leq h(x)) = h(x)$

---

## Page 10
### Content
# What distributions are easy to sample from?

*Extremely few multivariate distributions:*

**Product distributions:** $P(x_1, x_2, \dots, x_n) = \prod_i P(x_i)$ (sample coordinates independently)

**“Tractably factorized” distributions:** $P(x_1, x_2, \dots, x_n) = \prod_i P(x_i | x_{<i})$ for which factors are some easy to sample distribution (e.g. Bernoulli, Gaussian, etc.)

**Standard Gaussian** (product of standard univariate Gaussians)

**Any Gaussian:** a sample from $\mathbf{y} \sim \mathcal{N}(\boldsymbol{\mu}, \boldsymbol{\Sigma})$ can be generated as follows:
Sample $\mathbf{x} \sim \mathcal{N}(0, \mathbf{I})$. Output $\mathbf{y} = \boldsymbol{\mu} + \boldsymbol{\Sigma}^{1/2} \mathbf{x}$.

### Visual Description
The slide lists multivariate distributions that are easy to sample from, including product distributions, factorized distributions, and Gaussian distributions.

---

## Page 11
### Content
# Rejection sampling: simplest way to sample

**Input:** target density f, proposal density g, a constant c, s.t. $f(x) \leq cg(x)$

### Visual Description
A plot shows:
- A green shaded area representing the target density $f(x)$, which is bimodal.
- An orange curve representing $cg(x)$, which envelopes the green area.
- The x-axis ranges from -100 to 100. The y-axis ranges from 0.00 to 0.05.

### Content (continued)
**Algorithm:**
Generate sample x from g
Generate sample u from unif(0, 1)
Accept if $u \leq \frac{f(x)}{cg(x)}$

**How often do we accept?**
$\mathbb{P}(X \text{ accepted}) = \mathbb{P} \left( U \leq \frac{f(X)}{cg(X)} \right) = \int \mathbb{P} \left( U \leq \frac{f(x)}{cg(x)} \middle| X = x \right) g(x) dx$
$= \int_x \frac{f(x)}{cg(x)} g(x) = \frac{1}{c}$

---

## Page 12
### Content
# Rejection sampling: simplest way to sample

**Why does it work?**
$p(X = x | X \text{ accepted}) = \frac{p(X = x, X \text{ accepted})}{1/c}$
$= \frac{\int_u p(X = x, X \text{ accepted}, U = u) du}{1/c} = \frac{\int_u g(x) \mathbb{1} \left( u \leq \frac{f(x)}{cg(x)} \right) du}{1/c}$
$= \frac{\int_{u \leq \frac{f(x)}{cg(x)}} g(x) du}{1/c} = \frac{g(x) \frac{f(x)}{cg(x)}}{1/c} = f(x)$

### Visual Description
The slide provides a mathematical proof showing that the distribution of samples accepted by the rejection sampling algorithm matches the target distribution $f(x)$.

---

## Page 13
### Content
# Basic Markov Chain concepts

### Visual Description
This is a section header slide. There are no diagrams or images.

---

## Page 14
### Content
# Sampling via random walks

**Goal:** Sample from distribution given up to constant of proportionality.

**Definition:** A set of random variables $(X_1, X_2, \dots, X_T)$ is **Markov** if $\forall t: P(X_t | X_{<t}) = P(X_t | X_{t-1})$
It is homogeneous if $P(X_t | X_{t-1})$ doesn’t depend on t.

We can describe a homogeneous Markov process on a discrete domain $\mathcal{X}$ by a **transition matrix** $T \in \mathbb{R}_+^{|\mathcal{X}| \times |\mathcal{X}|} : T_{ij} = P(X_{t+1} = j | X_t = i)$
Clearly, $\forall i, \sum_j T_{ij} = 1$. We will also call such process a Markov Chain/Markov random walk.

### Visual Description
The slide defines Markov chains and transition matrices within three light-orange colored boxes.

---

## Page 15
### Content
# Example

**Markov chain** with three states ($s = 3$)

**Transition matrix**
$$T = \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0.1 & 0.9 \\ 0.6 & 0.4 & 0 \end{bmatrix}$$

### Visual Description
The slide shows a **Transition graph** for a 3-state Markov chain:
- Three nodes labeled $X_1, X_2, X_3$ arranged in a triangle.
- Directed edges with weights:
    - $X_1 \rightarrow X_2$ with weight 1.
    - $X_2 \rightarrow X_2$ (self-loop) with weight 0.1.
    - $X_2 \rightarrow X_3$ with weight 0.9.
    - $X_3 \rightarrow X_1$ with weight 0.6.
    - $X_3 \rightarrow X_2$ with weight 0.4.
The transition matrix $T$ corresponds to these edge weights.

---

## Page 16
### Content
# Stationary distribution

**Stationary distribution:** a distribution $\pi = (\pi_1, \dots \pi_{|\mathcal{X}|})$ is stationary for a Markov walk if $\pi T = \pi$.

In other words: if we start with a sample of $\pi$ and transition according to T, we end with a sample following $\pi$ as well.

$$(0.22, 0.41, 0.37) \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0.1 & 0.9 \\ 0.6 & 0.4 & 0 \end{bmatrix} = (0.22, 0.41, 0.37)$$

Stationary distribution need not be unique: e.g. T is the identity matrix.
Many Markov Chains have unique stationary distributions: after taking many steps, starting with any distribution, we get to the same distribution
$\forall p_0, \lim_{t \to \infty} p_0 T^t = \pi$ In other words, eventually, the chain “forgets” the starting point.

### Visual Description
The slide defines the stationary distribution and provides a numerical example using the transition matrix from the previous page. It also discusses the uniqueness and convergence properties of stationary distributions.

---

## Page 17
### Content
# Stationary distribution

**Stationary distribution:** a distribution $\pi = (\pi_1, \dots \pi_{|\mathcal{X}|})$ is stationary for a Markov walk if $\pi T = \pi$.

Many Markov Chains have unique stationary distributions: after taking many steps, starting with any distribution, we get to the same distribution
$\forall p_0, \lim_{t \to \infty} p_0 T^t = \pi$

**Name of the game:** if we wish to sample from some $\pi$, design a Markov Chain which has $\pi$ as stationary distribution.

If we run chain long enough (??), we can draw samples from something close to $\pi$

### Visual Description
The slide reiterates the definition of stationary distribution and convergence. It highlights the core strategy of MCMC: designing a chain whose stationary distribution is the target distribution. The main strategy is highlighted in a light-green box.

---

## Page 18
### Content
# Conditions for having a unique stationary distribution

**These are all the possible problems!**

**Irreducibility:** there is a path that transitions from any state to any other.
For each pairs of states (i,j), there is a positive probability, starting in state i, that the process will ever enter state j.
= Transition graph is connected;

### Visual Description
The slide defines irreducibility. It includes two diagrams:
1. A connected graph with nodes A, B, and C. Arrows show paths between all nodes (A to B, B to A, B to C, C to B).
2. A disconnected graph with two separate components. One component has node A with a self-loop. The other component has node B with a self-loop. There is no path between A and B. This illustrates a non-irreducible chain.

---

## Page 19
### Content
# Conditions for having a unique stationary distribution

**These are all the possible problems!**

**Aperiodicity:** random walk doesn’t get trapped in cycles.
A state i is aperiodic if there exists n s.t., $\forall n' \geq n, P(X_{n'} = i | X_0 = i) > 0$.
If all states are aperiodic, chain is called aperiodic.

### Visual Description
The slide defines aperiodicity. It includes a diagram of a periodic chain:
- Two nodes, A and B.
- A directed edge from A to B with weight 1.
- A directed edge from B to A with weight 1.
This chain is periodic because it can only return to state A at even time steps.

---

## Page 20
### Content
# Conditions for having a unique stationary distribution

**These are all the possible problems!**

**Irreducibility:** there is a path that transitions from any state to any other.
For each pairs of states (i,j), there is a positive probability, starting in state i, that the process will ever enter state j.
= Transition graph is connected;

**Aperiodicity:** random walk doesn’t get trapped in cycles.
A state i is aperiodic if there exists n s.t., $\forall n' \geq n, P(X_{n'} = i | X_0 = i) > 0$.
If all states are aperiodic, chain is called aperiodic.

**Thm:** for any *irreducible+aperiodic* Markov chain there is a unique $\pi$, s.t.
$\forall p_0, \lim_{t \to \infty} p_0 T^t = \pi$

### Visual Description
The slide summarizes the conditions (irreducibility and aperiodicity) required for a Markov chain to have a unique stationary distribution and converge to it. The theorem is highlighted in a light-orange box.

---

## Page 21
### Content
# Detailed balance

**Useful sufficient condition** for $\pi$ to be a stationary distribution: detailed balance.
$$\pi_i T_{ij} = \pi_j T_{ji}, \forall (i, j)$$

**Proof:**
$(\pi T)_i = \sum_j \pi_j T_{ji} = \sum_j \pi_i T_{ij}$
$= \pi_i \sum_j T_{ij}$
$= \pi_i$

### Visual Description
The slide introduces the detailed balance condition and provides a short mathematical proof showing that detailed balance implies stationarity.

---

## Page 22
### Content
# Metropolis Hastings

### Visual Description
This is a section header slide. There are no diagrams or images.

---

## Page 23
### Content
# Metropolis-Hastings

Suppose we are trying to sample from $\pi$ defined over a domain of size m (think m is very large, like in Ising models), up to a constant of proportionality:
$$\pi_i = \frac{b(i)}{Z}, Z = \sum_{i=1}^m b(i)$$

Metropolis-Hastings: random walk assuming an “easy-to-sample from” transition kernel q(i,j), along with “corrections”.

### Visual Description
The slide introduces the Metropolis-Hastings algorithm, defining the target distribution $\pi$ in terms of an unnormalized distribution $b(i)$ and a partition function $Z$. The problem setup is in a light-green box.

---

## Page 24
### Content
# Metropolis-Hastings

Suppose we have an easy to sample from “transition kernel” q(i,j).
Consider the following random walk, for some $\alpha(i,j)$ we will pick:

$Pr(X_n = j | X_{n-1} = i) =$
1. from state $i$ go to state $j$ with prob. $q(i,j)$
2. $\begin{cases} \text{with prob } 1 - \alpha(i,j) \text{ go back to state } i, \\ \text{with prob } \alpha(i,j) \text{ stay in state } j. \end{cases}$

Then, we have:
$P(X_{n+1} = j | X_n = i) = q(i,j)\alpha(i,j) \quad \forall j \neq i$
$P(X_{n+1} = i | X_n = i) = q(i,i) + \sum_{k \neq i} q(i,k)(1 - \alpha(i,k))$

### Visual Description
The slide describes the two-step process of the Metropolis-Hastings algorithm: proposing a move using $q(i,j)$ and then accepting it with probability $\alpha(i,j)$. It then gives the resulting transition probabilities.

---

## Page 25
### Content
# Metropolis-Hastings

https://chi-feng.github.io/mcmc-demo/app.html

### Visual Description
The slide shows a screenshot of an interactive MCMC demo.
- It features a 2D contour plot of a probability distribution (a "banana" distribution).
- A blue-shaded region represents the density.
- A circle represents a proposal distribution centered at a current point.
- A line with an arrow indicates a proposed move.
- Several dots represent previous samples in the chain.
- A "Random walk Metropolis-Hastings" label is in the top left.
- An "Open Controls" button is in the top right.

---

## Page 26
### Content
# Metropolis-Hastings

**Observation**
$\pi_i P_{ij} = \pi_j P_{ji} \quad \forall j \neq i \iff \pi_i q(i,j)\alpha(i,j) = \pi_j q(j,i)\alpha(j,i) \quad \forall j \neq i \quad (*)$

**Proof:** $P_{ij} = P(X_{n+1} = j | X_n = i) = q(i,j)\alpha(i,j) \quad \forall j \neq i$

**Theorem**
If $\alpha(i,j) = \min \left( \frac{\pi_j q(j,i)}{\pi_i q(i,j)}, 1 \right) = \min \left( \frac{b(j) q(j,i)}{b(i) q(i,j)}, 1 \right)$
$\Rightarrow (\pi_1, \dots \pi_m)$ stationary distribution

**Proof:**
If $\alpha(i,j) = \frac{\pi_j q(j,i)}{\pi_i q(i,j)} \iff \alpha(j,i) = 1$
=> Detailed balance (*) holds

*Note, this only depends on unnormalized distribution (b(i) values)*

### Visual Description
The slide presents the theorem for the acceptance probability $\alpha(i,j)$ in Metropolis-Hastings and proves that it satisfies detailed balance. A blue arrow points from the formula for $\alpha(i,j)$ to a note explaining that it only depends on unnormalized values.

---

## Page 27
### Content
# Gibbs sampling

### Visual Description
This is a section header slide. There are no diagrams or images.

---

## Page 28
### Content
# Gibbs sampling

Consider sampling a distribution over n variables $\mathbf{x} = (x_1, x_2, \dots, x_n)$, s.t. each of the conditional distributions $P(x_i | \mathbf{x}_{-i})$ is easy to sample. :

e.g. recall Ising models: $P_\theta(x_i = 1 | \mathbf{x}_{-i}) = \frac{1}{1 + \exp(-\theta_i - \sum_{ij \in E} x_j \theta_{ij})}$

A common way to do this is using **Gibbs sampling**:

**Repeat:**
Let current state be $\mathbf{x} = (x_1, x_2, \dots, x_n)$
Pick $i \in [n]$ uniformly at random.
Sample $x \sim P(X_i = x | \mathbf{x}_{-i})$
Update state to $\mathbf{y} = (x_1, x_2, \dots, x_{i-1}, x, x_{i+1}, \dots, x_n)$

### Visual Description
The slide introduces Gibbs sampling, providing the algorithm steps in a light-orange box. It uses the Ising model as an example of a distribution where conditional distributions are easy to sample.

---

## Page 29
### Content
# Gibbs sampling

### Visual Description
The slide contains a plot illustrating one step of Gibbs sampling in 2D:
- Elliptical contours represent a 2D probability distribution $p(\mathbf{x})$.
- The axes are labeled $x_1$ and $x_2$.
- A blue curve represents the conditional distribution $p(x_1 | x_2^{(t)})$.
- Two black dots on a horizontal blue line represent the current state $\mathbf{x}^{(t)}$ and the next state $\mathbf{x}^{(t+1)}$ after updating $x_1$.
- The update is horizontal, meaning only $x_1$ changes while $x_2$ remains fixed.

---

## Page 30
### Content
# Gibbs sampling

### Visual Description
The slide shows the second step of the Gibbs sampling illustration:
- The same elliptical contours for $p(\mathbf{x})$ are shown.
- A red curve represents the conditional distribution $p(x_2 | x_1^{(t+1)})$.
- A vertical red line shows the update from $\mathbf{x}^{(t+1)}$ to $\mathbf{x}^{(t+2)}$.
- A dashed horizontal line connects $\mathbf{x}^{(t)}$ to $\mathbf{x}^{(t+1)}$.
- The update is vertical, meaning only $x_2$ changes while $x_1$ remains fixed at its new value.

---

## Page 31
### Content
# Gibbs sampling

### Visual Description
The slide shows the trajectory of several steps of Gibbs sampling:
- The elliptical contours for $p(\mathbf{x})$ are shown.
- A dashed "staircase" path connects points $\mathbf{x}^{(t)}, \mathbf{x}^{(t+1)}, \mathbf{x}^{(t+2)}, \mathbf{x}^{(t+3)}, \mathbf{x}^{(t+4)}$.
- Each segment of the path is either perfectly horizontal or perfectly vertical, illustrating that only one coordinate is updated at each step.

---

## Page 32
### Content
# Ex: UGM and DGMs w/ small neighborhoods

**Full conditionals** only need to condition on the **Markov Blanket** (small probability table to describe)

### Visual Description
The slide contains two graphical model diagrams:
1. **UGM (Undirected Graphical Model):** A network of nodes $X_1$ to $X_{13}$. Node $X_6$ is green. Its neighbors $X_3, X_4, X_9, X_{10}$ are red, representing its Markov Blanket.
2. **DGM (Directed Graphical Model):** A similar network with directed edges. Node $X_6$ is green. Its Markov Blanket (parents $X_1, X_3$, children $X_9, X_{10}$, and children's other parents $X_5, X_7$) are red.

Below the diagrams:
- Bullet points: "Must be 'easy' to sample from conditionals", "Many conditionals are log-concave and are amenable to adaptive rejection sampling".
- A small plot shows a log-concave density $\ln p(x)$ being approximated by linear segments (adaptive rejection sampling).

---

## Page 33
### Content
# Ex: generating samples from Masked Language Models (MLMs)

### Visual Description
A diagram shows a Masked Language Model (MLM) like BERT:
- A green box labeled "MLM".
- Input arrows from words: "All", "the", "MASK", "best".
- An output arrow from the MLM box to the word "very", which is the predicted word for the "MASK" position.

### Content (continued)
MLMs like BERT (Devlin et al ‘18) are trained to predict words in sentence, given rest. (In other words, they learn *conditional probs.*)

Though BERT is typically used as feature learner, learned conditionals can be used in a Gibbs sampler to generate samples. (Wang-Cho ’19, Goyal et al ‘22).

---

## Page 34
### Content
# Why does Gibbs sampling work?

**Repeat:**
Let current state be $\mathbf{x} = (x_1, x_2, \dots, x_n)$
Pick $i \in [n]$ uniformly at random.
Sample $x \sim P(X_i = x | \mathbf{x}_{-i})$
Update state to $\mathbf{y} = (x_1, x_2, \dots, x_{i-1}, x, x_{i+1}, \dots, x_n)$

Why does it work? Metropolis-Hastings with appropriate kernel!

**Let**
$q(\mathbf{x}, \mathbf{y}) = q(\overbrace{(x_1, \dots, x_n)}^{\mathbf{x}}, \overbrace{(x_1, \dots, x_{i-1}, x, x_{i+1}, x_n)}^{\mathbf{y}})$
$\doteq \frac{1}{n} P(X_i = x | X_j = x_j, \forall j \neq i)$
$= \frac{1}{n} \frac{P(\mathbf{y})}{P(X_j = x_j, \forall j \neq i)}$

### Visual Description
The slide starts explaining why Gibbs sampling works by framing it as a special case of Metropolis-Hastings. It defines the proposal kernel $q(\mathbf{x}, \mathbf{y})$ used in Gibbs sampling.

---

## Page 35
### Content
# Why does Gibbs sampling work?

Why does it work? Metropolis-Hastings with appropriate kernel!

**Let**
$q(\mathbf{x}, \mathbf{y}) = q((x_1, \dots, x_n), (x_1, \dots, x_{i-1}, x, x_{i+1}, x_n))$
$\doteq \frac{1}{n} P(X_i = x | X_j = x_j, \forall j \neq i)$
$= \frac{1}{n} \frac{P(\mathbf{y})}{P(X_j = x_j, \forall j \neq i)}$

Shouldn’t we reject occasionally? **No:**

**Theorem**
If $\alpha(i,j) = \min \left( \frac{\pi_j q(j,i)}{\pi_i q(i,j)}, 1 \right) = \min \left( \frac{b(j) q(j,i)}{b(i) q(i,j)}, 1 \right)$
$\Rightarrow (\pi_1, \dots \pi_m)$ stationary distribution

$\frac{p(\mathbf{y})q(\mathbf{y}, \mathbf{x})}{p(\mathbf{x})q(\mathbf{x}, \mathbf{y})} = \frac{p(\mathbf{y}) \frac{1}{n} \frac{P(\mathbf{x})}{P(Y_j = y_j, \forall j \neq i)}}{p(\mathbf{x}) \frac{1}{n} \frac{P(\mathbf{y})}{P(X_j = x_j, \forall j \neq i)}}$

### Visual Description
The slide continues the proof, showing the ratio used in the Metropolis-Hastings acceptance probability for the Gibbs sampling kernel.

---

## Page 36
### Content
# Why does Gibbs sampling work?

Why does it work? Metropolis-Hastings with appropriate kernel!

**Let**
$q(\mathbf{x}, \mathbf{y}) = q((x_1, \dots, x_n), (x_1, \dots, x_{i-1}, x, x_{i+1}, x_n))$
$\doteq \frac{1}{n} P(X_i = x | X_j = x_j, \forall j \neq i)$
$= \frac{1}{n} \frac{P(\mathbf{y})}{P(X_j = x_j, \forall j \neq i)}$

Shouldn’t we reject occasionally? **No:**

$\frac{p(\mathbf{y})q(\mathbf{y}, \mathbf{x})}{p(\mathbf{x})q(\mathbf{x}, \mathbf{y})} = \frac{p(\mathbf{y}) \frac{1}{n} \frac{P(\mathbf{x})}{P(Y_j = y_j, \forall j \neq i)}}{p(\mathbf{x}) \frac{1}{n} \frac{P(\mathbf{y})}{P(X_j = x_j, \forall j \neq i)}} = \frac{p(\mathbf{y})p(\mathbf{x})}{p(\mathbf{x})p(\mathbf{y})} = 1$
since $P(X_j = x_j, j \neq i) = P(Y_j = y_j, j \neq i)$

### Visual Description
The slide completes the proof, showing that the acceptance ratio for Gibbs sampling is always 1, meaning no proposals are ever rejected.

---

## Page 37
### Content
# Sample runs on Ising models

### Visual Description
The slide shows three black-and-white pixelated images representing samples from Ising models at different temperatures:
1. **Top image:** "Weak interactions (high temperature)". The image looks like random salt-and-pepper noise with no clear structure.
2. **Bottom left image:** "Strong interactions (low temperature)". The image shows large, distinct clusters of black and white pixels.
3. **Bottom right image:** "Strong interactions (low temperature)". Similar to the bottom left, showing large-scale structure and clustering.
All images are labeled "Time=0" at the top.

---

## Page 38
### Content
# Lots of variants exist

Cycle through coordinates deterministically

Resample larger sets of coordinates (k-Gibbs)

Partition coordinates into blocks and cycle through blocks (or randomly pick a block)

…

### Visual Description
The slide lists several common variations of the basic Gibbs sampling algorithm.

---

## Page 39
### Content
# Application of MCMC: Training fully observed UGMs using maximum likelihood

### Visual Description
This is a section header slide. There are no diagrams or images.

---

## Page 40
### Content
# Training UGMs using maximum likelihood

**Maximum likelihood optimization:** maximize the likelihood of the data under the model
$$\max_\theta \sum_{\text{samples } x_i} \log p_\theta(x_i)$$

The simplest way to maximize a function $f(\theta)$: **gradient ascent!**
$$\theta_{t+1} = \theta_t + \eta \nabla f(\theta)$$

**Need to be able to evaluate**
$$\nabla \log p_\theta(x)$$

### Visual Description
The slide introduces maximum likelihood training for UGMs and identifies the need to calculate the gradient of the log-likelihood. The key requirement is highlighted in a blue-bordered box.

---

## Page 41
### Content
# Training UGMs using maximum likelihood

### Visual Description
The slide features a 3D surface plot of a convex function (a paraboloid).
- The axes are labeled X, Y, and Z.
- The surface is colored with a gradient from blue (low values) to red (high values).
- The plot illustrates the type of function one might optimize using gradient ascent.

---

## Page 42
### Content
# Training UGMs using maximum likelihood

For brevity, let us write a UGM as:
$$p_\theta(x) \propto \exp(-E_\theta(x))$$
where $E_\theta(x)$ has some easy to evaluate form.

What is the gradient? Denoting the partition function $Z_\theta$, we have:
$$\nabla \log p_\theta(x) = -\nabla E_\theta(x) + \nabla \log Z_\theta$$
$$\nabla_\theta \log Z_\theta = \frac{1}{Z_\theta} \nabla_\theta Z_\theta = \frac{1}{Z_\theta} \int_x \exp(-E_\theta(x)) \nabla_\theta (-E_\theta(x))$$
$$= \mathbb{E}_{p_\theta} [-\nabla_\theta E_\theta(x)]$$

### Visual Description
The slide derives the gradient of the log-likelihood for a UGM. It shows that the gradient of the log-partition function is the expectation of the negative gradient of the energy function. A blue arrow points from the expectation term to a note: "If we could draw samples from $p_\theta$, can approximate this with Monte Carlo".

---

## Page 43
### Content
# Training UGMs using maximum likelihood

For brevity, let us write a UGM as:
$$p_\theta(x) \propto \exp(-E_\theta(x))$$
where $E_\theta(x)$ has some easy to evaluate form.

Hence, full gradient-based algorithm for learning a UGM:
$$\theta_{t+1} = \theta_t + \eta \left( \frac{1}{n} \left( \sum_{\text{samples } x_i} -\nabla E_{\theta_t}(x_i) \right) + \mathbb{E}_{x \sim p_{\theta_t}} [-\nabla_{\theta_t} E_{\theta_t}(x)] \right)$$

**Remarks:**
In general, likelihood is **not concave** (so no guarantees of converging to global max)

In general, drawing samples from $p_{\theta_t}$ is no easier than estimating partition functions, which is #P-hard. (See HW.)

### Visual Description
The slide presents the full gradient ascent update rule for learning UGM parameters. It also notes the challenges: non-concavity of the objective and the #P-hardness of sampling.

---

## Page 44
### Content
# Bonus: nice interpretation of gradient ascent for maximum likelihood

$$\nabla_\theta \left( \frac{1}{n} \sum_{i=1}^n \log p_\theta(x_i) \right) = \frac{1}{n} \left( \sum_i -\nabla_\theta E_\theta(x_i) \right) - \mathbb{E}_{p_\theta} [-\nabla_\theta E_\theta(x)]$$
$$\approx \mathbb{E}_{p_{data}} [-\nabla_\theta E_\theta(x)] - \mathbb{E}_{p_\theta} [-\nabla_\theta E_\theta(x)]$$

**Goal of the algorithm:** Try to make the expectation of the energy match

### Visual Description
The slide provides an intuitive interpretation of the gradient ascent update: it aims to match the expected gradient of the energy under the data distribution with its expectation under the model distribution. The derivation is in a light-green box.

---

## Page 45
### Content
# Application of MCMC : Training RBM’s using maximum likelihood

### Visual Description
This is a section header slide. There are no diagrams or images.

---

## Page 46
### Content
# Restricted Boltzmann Machines

The prototypical UGM-based **latent-variable model**.
We denote visible and hidden variables with vectors **v, h** respectively:

### Visual Description
A diagram shows the **Bipartite Structure** of an RBM:
- A top layer of nodes labeled "hidden variables" (**h**).
- A bottom layer of nodes on a tilted plane labeled "Image visible variables" (**v**).
- A matrix of weights **W** connects every hidden node to every visible node.
- There are no connections between nodes within the same layer.

### Content (continued)
Visible variables $\mathbf{v} \in \{0, 1\}^D$ are connected to hidden variables $\mathbf{h} \in \{0, 1\}^F$.

The energy of the joint configuration:
$E(\mathbf{v}, \mathbf{h}; \theta) = -\sum_{ij} W_{ij}v_ih_j - \sum_i b_iv_i - \sum_j a_jh_j$
$\theta = \{W, a, b\}$ model parameters.

Probability of the joint configuration is given by the Boltzmann distribution:
$P_\theta(\mathbf{v}, \mathbf{h}) = \frac{1}{Z(\theta)} \exp(-E(\mathbf{v}, \mathbf{h}; \theta)) = \frac{1}{Z(\theta)} \prod_{ij} e^{W_{ij}v_ih_j} \prod_i e^{b_iv_i} \prod_j e^{a_jh_j}$
$Z(\theta) = \sum_{\mathbf{h}, \mathbf{v}} \exp(-E(\mathbf{v}, \mathbf{h}; \theta))$

---

## Page 47
### Content
# Restricted Boltzmann Machines

### Visual Description
The same bipartite graph from the previous page is shown. A red arrow points to the connections, with the text: "**Restricted:** No interaction between hidden variables".

### Content (continued)
The **posterior** over the hidden variables is easy to sample from! (Conditional independence!)

$P(\mathbf{h}|\mathbf{v}) = \prod_j P(h_j|\mathbf{v})$ (Factorizes)
$P(h_j = 1|\mathbf{v}) = \frac{1}{1 + \exp(-\sum_i W_{ij}v_i - a_j)}$

Similarly:
$P(\mathbf{v}|\mathbf{h}) = \prod_i P(v_i|\mathbf{h})$
$P(v_i = 1|\mathbf{h}) = \frac{1}{1 + \exp(-\sum_j W_{ij}h_j - b_i)}$

### Visual Description (continued)
The slide shows that due to the bipartite structure, the conditional distributions $P(\mathbf{h}|\mathbf{v})$ and $P(\mathbf{v}|\mathbf{h})$ factorize, making them easy to sample from using sigmoid functions.

---

## Page 48
### Content
# How to learn RBM’s

### Visual Description
The bipartite graph of an RBM is shown on the left. On the right, a simpler graphical model shows a layer of hidden nodes **h** connected to a layer of visible nodes **x**.

### Content (continued)
Given data $x_1, x_2, \dots, x_n$, solve
$$\max_{\theta \in \Theta} \sum_{i=1}^n \log p_\theta(x_i)$$

Since we have latent variables, we need to express the likelihood when we marginalize out the latents:

### Visual Description (continued)
The slide sets up the learning problem for RBMs as maximizing the marginal log-likelihood of the visible data.

---

## Page 49
### Content
# How to learn RBM’s

$p(\mathbf{x}) = \sum_{\mathbf{h} \in \{0,1\}^H} \exp(\mathbf{h}^T \mathbf{W} \mathbf{x} + \mathbf{c}^T \mathbf{x} + \mathbf{b}^T \mathbf{h}) / Z$

### Visual Description
This slide begins the derivation of the marginal probability $p(\mathbf{x})$ for an RBM by summing over all possible hidden configurations.

---

## Page 50
### Content
# How to learn RBM’s

$p(\mathbf{x}) = \sum_{\mathbf{h} \in \{0,1\}^H} \exp(\mathbf{h}^T \mathbf{W} \mathbf{x} + \mathbf{c}^T \mathbf{x} + \mathbf{b}^T \mathbf{h}) / Z$
$= \exp(\mathbf{c}^T \mathbf{x}) \sum_{h_1 \in \{0,1\}} \dots \sum_{h_H \in \{0,1\}} \exp \left( \sum_j h_j \mathbf{W}_{j \cdot} \mathbf{x} + b_j h_j \right) / Z$

### Visual Description
The derivation continues by factoring out terms that don't depend on the hidden variables and expanding the summation over hidden units.

---

## Page 51
### Content
# How to learn RBM’s

$p(\mathbf{x}) = \sum_{\mathbf{h} \in \{0,1\}^H} \exp(\mathbf{h}^T \mathbf{W} \mathbf{x} + \mathbf{c}^T \mathbf{x} + \mathbf{b}^T \mathbf{h}) / Z$
$= \exp(\mathbf{c}^T \mathbf{x}) \sum_{h_1 \in \{0,1\}} \dots \sum_{h_H \in \{0,1\}} \exp \left( \sum_j h_j \mathbf{W}_{j \cdot} \mathbf{x} + b_j h_j \right) / Z$
$= \exp(\mathbf{c}^T \mathbf{x}) \left( \sum_{h_1 \in \{0,1\}} \exp(h_1 \mathbf{W}_{1 \cdot} \mathbf{x} + b_1 h_1) \right) \dots \left( \sum_{h_H \in \{0,1\}} \exp(h_H \mathbf{W}_{H \cdot} \mathbf{x} + b_H h_H) \right) / Z$

### Visual Description
The derivation shows how the joint summation over all hidden units can be decomposed into a product of individual summations for each hidden unit.

---

## Page 52
### Content
# How to learn RBM’s

$p(\mathbf{x}) = \sum_{\mathbf{h} \in \{0,1\}^H} \exp(\mathbf{h}^T \mathbf{W} \mathbf{x} + \mathbf{c}^T \mathbf{x} + \mathbf{b}^T \mathbf{h}) / Z$
$= \exp(\mathbf{c}^T \mathbf{x}) \sum_{h_1 \in \{0,1\}} \dots \sum_{h_H \in \{0,1\}} \exp \left( \sum_j h_j \mathbf{W}_{j \cdot} \mathbf{x} + b_j h_j \right) / Z$
$= \exp(\mathbf{c}^T \mathbf{x}) \left( \sum_{h_1 \in \{0,1\}} \exp(h_1 \mathbf{W}_{1 \cdot} \mathbf{x} + b_1 h_1) \right) \dots \left( \sum_{h_H \in \{0,1\}} \exp(h_H \mathbf{W}_{H \cdot} \mathbf{x} + b_H h_H) \right) / Z$
$= \exp(\mathbf{c}^T \mathbf{x}) (1 + \exp(b_1 + \mathbf{W}_{1 \cdot} \mathbf{x})) \dots (1 + \exp(b_H + \mathbf{W}_{H \cdot} \mathbf{x})) / Z$

### Visual Description
The individual summations are evaluated (since $h_j$ can only be 0 or 1), resulting in a product of $(1 + \exp(\dots))$ terms.

---

## Page 53
### Content
# How to learn RBM’s

$p(\mathbf{x}) = \sum_{\mathbf{h} \in \{0,1\}^H} \exp(\mathbf{h}^T \mathbf{W} \mathbf{x} + \mathbf{c}^T \mathbf{x} + \mathbf{b}^T \mathbf{h}) / Z$
$= \exp(\mathbf{c}^T \mathbf{x}) \sum_{h_1 \in \{0,1\}} \dots \sum_{h_H \in \{0,1\}} \exp \left( \sum_j h_j \mathbf{W}_{j \cdot} \mathbf{x} + b_j h_j \right) / Z$
$= \exp(\mathbf{c}^T \mathbf{x}) \left( \sum_{h_1 \in \{0,1\}} \exp(h_1 \mathbf{W}_{1 \cdot} \mathbf{x} + b_1 h_1) \right) \dots \left( \sum_{h_H \in \{0,1\}} \exp(h_H \mathbf{W}_{H \cdot} \mathbf{x} + b_H h_H) \right) / Z$
$= \exp(\mathbf{c}^T \mathbf{x}) (1 + \exp(b_1 + \mathbf{W}_{1 \cdot} \mathbf{x})) \dots (1 + \exp(b_H + \mathbf{W}_{H \cdot} \mathbf{x})) / Z$
$= \exp(\mathbf{c}^T \mathbf{x}) \exp(\log(1 + \exp(b_1 + \mathbf{W}_{1 \cdot} \mathbf{x}))) \dots \exp(\log(1 + \exp(b_H + \mathbf{W}_{H \cdot} \mathbf{x}))) / Z$

### Visual Description
The terms are rewritten using the identity $a = \exp(\log(a))$ to prepare for combining them into a single exponential.

---

## Page 54
### Content
# How to learn RBM’s

$p(\mathbf{x}) = \sum_{\mathbf{h} \in \{0,1\}^H} \exp(\mathbf{h}^T \mathbf{W} \mathbf{x} + \mathbf{c}^T \mathbf{x} + \mathbf{b}^T \mathbf{h}) / Z$
$= \exp(\mathbf{c}^T \mathbf{x}) \sum_{h_1 \in \{0,1\}} \dots \sum_{h_H \in \{0,1\}} \exp \left( \sum_j h_j \mathbf{W}_{j \cdot} \mathbf{x} + b_j h_j \right) / Z$
$= \exp(\mathbf{c}^T \mathbf{x}) \left( \sum_{h_1 \in \{0,1\}} \exp(h_1 \mathbf{W}_{1 \cdot} \mathbf{x} + b_1 h_1) \right) \dots \left( \sum_{h_H \in \{0,1\}} \exp(h_H \mathbf{W}_{H \cdot} \mathbf{x} + b_H h_H) \right) / Z$
$= \exp(\mathbf{c}^T \mathbf{x}) (1 + \exp(b_1 + \mathbf{W}_{1 \cdot} \mathbf{x})) \dots (1 + \exp(b_H + \mathbf{W}_{H \cdot} \mathbf{x})) / Z$
$= \exp(\mathbf{c}^T \mathbf{x}) \exp(\log(1 + \exp(b_1 + \mathbf{W}_{1 \cdot} \mathbf{x}))) \dots \exp(\log(1 + \exp(b_H + \mathbf{W}_{H \cdot} \mathbf{x}))) / Z$
$= \exp \underbrace{\left( \mathbf{c}^T \mathbf{x} + \sum_{j=1}^H \log(1 + \exp(b_j + \mathbf{W}_{j \cdot} \mathbf{x})) \right)}_{= F(\mathbf{x})} / Z$

### Visual Description
The final expression for the marginal probability $p(\mathbf{x})$ is derived, defining a "free energy" function $F(\mathbf{x})$.

---

## Page 55
### Content
# How to learn RBM’s

$p(\mathbf{x}) = \sum_{\mathbf{h} \in \{0,1\}^H} \exp(\mathbf{h}^T \mathbf{W} \mathbf{x} + \mathbf{c}^T \mathbf{x} + \mathbf{b}^T \mathbf{h}) / Z$
$= \exp(\mathbf{c}^T \mathbf{x}) \sum_{h_1 \in \{0,1\}} \dots \sum_{h_H \in \{0,1\}} \exp \left( \sum_j h_j \mathbf{W}_{j \cdot} \mathbf{x} + b_j h_j \right) / Z$
$= \exp(\mathbf{c}^T \mathbf{x}) \left( \sum_{h_1 \in \{0,1\}} \exp(h_1 \mathbf{W}_{1 \cdot} \mathbf{x} + b_1 h_1) \right) \dots \left( \sum_{h_H \in \{0,1\}} \exp(h_H \mathbf{W}_{H \cdot} \mathbf{x} + b_H h_H) \right) / Z$
$= \exp(\mathbf{c}^T \mathbf{x}) (1 + \exp(b_1 + \mathbf{W}_{1 \cdot} \mathbf{x})) \dots (1 + \exp(b_H + \mathbf{W}_{H \cdot} \mathbf{x})) / Z$
$= \exp(\mathbf{c}^T \mathbf{x}) \exp(\log(1 + \exp(b_1 + \mathbf{W}_{1 \cdot} \mathbf{x}))) \dots \exp(\log(1 + \exp(b_H + \mathbf{W}_{H \cdot} \mathbf{x}))) / Z$
$= \exp \underbrace{\left( \mathbf{c}^T \mathbf{x} + \sum_{j=1}^H \log(1 + \exp(b_j + \mathbf{W}_{j \cdot} \mathbf{x})) \right)}_{= F(\mathbf{x})} / Z$
$= \exp(F(\mathbf{x})) / Z$

### Visual Description
The slide concludes the derivation, showing $p(\mathbf{x})$ as a simple exponential of the free energy $F(\mathbf{x})$ divided by the partition function $Z$.

---

## Page 56
### Content
# How to learn RBM’s

### Visual Description
The bipartite graph of an RBM is shown.

### Content (continued)
Given data $x_1, x_2, \dots, x_n$, solve
$$\max_{\theta \in \Theta} \sum_{i=1}^n \log p_\theta(x_i)$$

With this reduction, the undirected model calculations imply:
$$\nabla_\theta \left( \frac{1}{n} \sum_{i=1}^n \log p_\theta(x_i) \right) = \frac{1}{n} \left( \sum_i -\nabla_\theta F_\theta(x_i) \right) - \mathbb{E}_{p_\theta} [-\nabla_\theta F_\theta(x)]$$

$\nabla_{W_{ij}} F_\theta(\mathbf{x}) = \nabla_{W_{ij}} \left( \mathbf{c}^T \mathbf{x} + \sum_{j=1}^H \log(1 + \exp(b_j + \mathbf{W}_{j \cdot} \mathbf{x})) \right) = \frac{\exp(b_j + \mathbf{W}_{j \cdot} \mathbf{x})}{1 + \exp(b_j + \mathbf{W}_{j \cdot} \mathbf{x})} x_i$
$= \frac{1}{1 + \exp(-(b_j + \mathbf{W}_{j \cdot} \mathbf{x}))} x_i = P(h_j = 1 | \mathbf{x}) x_i$

### Visual Description (continued)
The slide calculates the gradient of the free energy with respect to the weights $W_{ij}$, showing it equals the product of the conditional probability $P(h_j=1|\mathbf{x})$ and the input $x_i$.

---

## Page 57
### Content
# How to learn RBM’s

### Visual Description
The bipartite graph of an RBM is shown.

### Content (continued)
Given data $x_1, x_2, \dots, x_n$, solve
$$\max_{\theta \in \Theta} \sum_{i=1}^n \log p_\theta(x_i)$$

With this reduction, the undirected model calculations imply:
$$\nabla_\theta \left( \frac{1}{n} \sum_{i=1}^n \log p_\theta(x_i) \right) = \frac{1}{n} \left( \sum_i -\nabla_\theta F_\theta(x_i) \right) - \mathbb{E}_{p_\theta} [-\nabla_\theta F_\theta(x)]$$

$\nabla_{W_{ij}} F_\theta(\mathbf{x}) = P(h_j = 1 | \mathbf{x}) x_i \Rightarrow \nabla_W F_\theta(\mathbf{x}) = \mathbf{h}(\mathbf{x}) \mathbf{x}^T$
$\nabla_b F_\theta(\mathbf{x}) = \mathbf{h}(\mathbf{x})$
$\nabla_c F_\theta(\mathbf{x}) = \mathbf{x}$

### Visual Description (continued)
A green-bordered box defines the vector $\mathbf{h}(\mathbf{x})$:
$\mathbf{h}(\mathbf{x}) \overset{\text{def}}{=} \begin{pmatrix} p(h_1=1|\mathbf{x}) \\ \dots \\ p(h_H=1|\mathbf{x}) \end{pmatrix} = \text{sigm}(\mathbf{b} + \mathbf{W}\mathbf{x})$

The slide summarizes the gradients of the free energy with respect to all model parameters ($W, b, c$).

---

## Page 58
### Content
# How to learn RBM’s

### Visual Description
The bipartite graph of an RBM is shown.

### Content (continued)
Given data $x_1, x_2, \dots, x_n$, solve
$$\max_{\theta \in \Theta} \sum_{i=1}^n \log p_\theta(x_i)$$

$$\nabla_\theta \left( \frac{1}{n} \sum_{i=1}^n \log p_\theta(x_i) \right) = \frac{1}{n} \left( \sum_i -\nabla_\theta F_\theta(x_i) \right) - \mathbb{E}_{p_\theta} [-\nabla_\theta F_\theta(x)]$$

The hard term is again: $\mathbb{E}_{p_\theta} [-\nabla_\theta F_\theta(x)]$ --- we need to draw samples from $p_\theta$

We will draw samples using a Markov random walk: **Gibbs sampler!**

### Visual Description (continued)
The slide identifies the expectation term as the computationally difficult part of the gradient and proposes using Gibbs sampling to approximate it.

---

## Page 59
### Content
# Gibbs sampling

Consider sampling a distribution over n variables $\mathbf{x} = (x_1, x_2, \dots, x_n)$, s.t. each of the conditional distributions $P(x_i | \mathbf{x}_{-i})$ is easy to sample. :

A common way to do this is using **Gibbs sampling**:

**Repeat:**
Let current state be $\mathbf{x} = (x_1, x_2, \dots, x_n)$
Pick $i \in [n]$ uniformly at random.
Sample $x \sim P(X_i = x | \mathbf{x}_{-i})$
Update state to $\mathbf{y} = (x_1, x_2, \dots, x_{i-1}, x, x_{i+1}, \dots, x_n)$

### Visual Description
The slide provides a general recap of the Gibbs sampling algorithm in two colored boxes.

---

## Page 60
### Content
# Gibbs sampling for RBM’s

### Visual Description
The bipartite graph of an RBM is shown.

### Content (continued)
**Repeat:**
Sample $\mathbf{h} \sim P(\mathbf{h}|\mathbf{v})$
Sample $\mathbf{v} \sim P(\mathbf{v}|\mathbf{h})$

**Pictorially:**

### Visual Description (continued)
A diagram illustrates the sampling process:
- An initial data point $\mathbf{x}$ (represented by a layer of nodes) is used to sample a hidden layer $\mathbf{h}$ via $p(\mathbf{h}|\mathbf{x})$.
- This $\mathbf{h}$ is then used to sample a new visible layer $\mathbf{x}^1$ via $p(\mathbf{x}|\mathbf{h})$.
- This process repeats for $k$ steps, resulting in a sequence $\mathbf{x} \rightarrow \mathbf{h} \rightarrow \mathbf{x}^1 \rightarrow \dots \rightarrow \mathbf{x}^k = \tilde{\mathbf{x}}$.
- Each layer is shown as a row of circles, with some shaded to represent active units.

---

## Page 61
### Content
# Contrastive Divergence

Key idea behind Contrastive Divergence:
➢ Replace the expectation by a point estimate at $\tilde{\mathbf{x}}$
➢ Obtain the point $\tilde{\mathbf{x}}$ by Gibbs sampling
➢ Start sampling chain at $\mathbf{x}$

### Visual Description
The same pictorial diagram from the previous page is shown, illustrating the $k$-step Gibbs sampling process starting from a data point $\mathbf{x}$ and ending at a "negative sample" $\tilde{\mathbf{x}}$.
- A label "negative sample" points to the final sampled visible layer $\mathbf{x}^k = \tilde{\mathbf{x}}$.
- Text at the bottom: "k is often taken to be just 1."
- Reference: "Hinton, Neural Computation, 2002"

---

## Page 62
### Content
# CD-k Algorithm

For each training example $\mathbf{x}$
➢ Generate a negative sample $\tilde{\mathbf{x}}$ using k steps of Gibbs sampling, starting at the data point $\mathbf{x}$
➢ Update model parameters:
$\mathbf{W} \Longleftarrow \mathbf{W} + \alpha (\mathbf{h}(\mathbf{x})\mathbf{x}^T - \mathbf{h}(\tilde{\mathbf{x}})\tilde{\mathbf{x}}^T)$
$\mathbf{b} \Longleftarrow \mathbf{b} + \alpha (\mathbf{h}(\mathbf{x}) - \mathbf{h}(\tilde{\mathbf{x}}))$
$\mathbf{c} \Longleftarrow \mathbf{c} + \alpha (\mathbf{x} - \tilde{\mathbf{x}})$
➢ Go back to 1 until stopping criteria

### Visual Description
The slide presents the CD-k algorithm pseudocode.
- A blue bracket groups the parameter update equations with the label "Gradients we derived before".
- A blue arrow points to the parameter $\alpha$ with the label "Step size".

---

## Page 63
### Content
# CD-k Algorithm

• CD-k: contrastive divergence with k iterations of Gibbs sampling

• In general, the bigger k is, the less biased the estimate of the gradient will be

• In practice, k=1 works well for learning good features

### Visual Description
The slide provides summary points about the CD-k algorithm, discussing the trade-off between bias and computational cost, and noting the practical effectiveness of $k=1$.\n