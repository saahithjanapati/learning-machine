# Lecture_3_4_undirected

Source: `materials/archive/probabilistic graphical models/Lecture_3_4_undirected (1).pdf`
Duplicate equivalents: `Lecture_3_4_undirected (1).pdf`, `Lecture_3_4_undirected (2).pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `strict full-PDF single-call conversion`
Finish reason: `STOP`
Pages: 54
## Page 1
### Content
10708
Probabilistic Graphical Models: 
Spring 2026

Andrej Risteski
Machine Learning Department

Lecture 3+4:
Undirected graphical models: 
definitions and motivations

### Visual Description
This is a title slide for a lecture. The text is centered on a plain white background. The course number "10708" and the title "Probabilistic Graphical Models: Spring 2026" are in a large, bold, dark blue font. Below this, the instructor's name "Andrej Risteski" and department "Machine Learning Department" are in a smaller, grey font. At the bottom, the lecture number "Lecture 3+4:" and the specific topic "Undirected graphical models: definitions and motivations" are in a medium-sized, dark grey font.

---

## Page 2
### Content
Basic motivation: representing 
high-dimensional distributions

More generally, if we have a distribution over d variables, each 
taking c possible values, we need a table of size $c^d$ : prohibitively 
large for large d

However, in general, many distributions we are interested will 
have some structure:
(1) Instead of lookup table, we may want to have postulate some 
compact functional form. 
(2) Some variables have some correlation: it’s much more likely 
that it’s cloudy if it rains. 
(3) We may have some mechanistic knowledge of domain: a 
sprinkler causes the grass to be wet. 
(4) Some variables are independent: the sprinkler being on and 
rain are independent events.

### Visual Description
This slide uses text to explain the motivation for graphical models. The title is at the top in a large, dark blue font. The main body text is in a dark grey font, with some key terms like "d", "c", "$c^d$", and "structure" highlighted in a brownish-orange color. There is a numbered list from (1) to (4) detailing different types of structure in distributions. There are no diagrams or images.

---

## Page 3
### Content
Basic motivation: representing 
high-dimensional distributions

### Visual Description
This slide contains a Bayesian Network diagram representing a "Wet Grass" example. 
- There are four oval nodes: **Cloudy**, **Sprinkler**, **Rain**, and **WetGrass**.
- Directed arrows show the dependencies: **Cloudy** points to both **Sprinkler** and **Rain**. Both **Sprinkler** and **Rain** point to **WetGrass**.
- Each node has an associated probability table in a callout box:
    - **Cloudy**: A simple table showing $P(C=T) = 0.5$ and $P(C=F) = 0.5$.
    - **Sprinkler**: A conditional probability table $P(S|C)$ showing values for $S=T$ and $S=F$ given $C=T$ or $C=F$.
    - **Rain**: A conditional probability table $P(R|C)$ showing values for $R=T$ and $R=F$ given $C=T$ or $C=F$.
    - **WetGrass**: A conditional probability table $P(W|S,R)$ showing values for $W=T$ and $W=F$ for all four combinations of $S$ and $R$ being True or False.

---

## Page 4
### Content
The three pillars

**Representation**: is the representation compact and/or captures some 
structural semantics about distribution of choice. 
The latter is a little open-ended: we’ll see things like conditional 
dependence, maximum-entropy principles, etc. 

**Inference**: can we efficiently draw samples from the model and/or 
calculate marginals in the model. 

**Learning**: can the model be fit from data in an efficient manner. 
What loss do we optimize? How do we optimize it? Can we use 
gradient-based methods to do so?

### Visual Description
This is a text-heavy slide defining the "three pillars" of probabilistic graphical models: Representation, Inference, and Learning. The title is centered at the top. Each pillar is a bolded heading followed by a brief explanatory paragraph. There are no visual elements beyond the text.

---

## Page 5
### Content
The three pillars: DGMs

**Representation**: is the representation compact and/or captures some 
structural semantics about distribution of choice. 
Directed graphical models: captures mechanisms/causal intuitions, 
compact if nodes have few parents 

**Inference**: can we efficiently draw samples from the model and/or 
calculate marginals in the model. 
Intuitive and efficient sampling: go in order of 
topological sort (top-to-bottom)

**Examples**: Latent variable Bayesian networks
1. Mixture distributions
2. Noisy-OR networks
3. Topic models, e.g. Latent Dirichlet Allocation (LDA)
4. Variational Autoencoder
5. Hidden Markov Models

### Visual Description
This slide focuses on Directed Graphical Models (DGMs) within the framework of the "three pillars". 
- The "Representation" and "Inference" sections have blue-bordered boxes containing specific details for DGMs. 
- The "Representation" box notes that DGMs capture causal intuitions and are compact with few parents. 
- The "Inference" box mentions intuitive sampling via topological sort. 
- A list of five examples of latent variable Bayesian networks is provided at the bottom.

---

## Page 6
### Content
The three pillars: UGMs

**Representation**: is the representation compact and/or captures some 
structural semantics about distribution of choice. 
Undirected graphical models: soft constraints / local interactions, 
max-entropy, conditional independences

**Inference**: can we efficiently draw samples from the model and/or 
calculate marginals in the model. 
More difficult! Will see later… 
(variable elimination, belief propagation, MCMC, etc.)

### Visual Description
This slide focuses on Undirected Graphical Models (UGMs). Similar to the previous page, it uses blue-bordered boxes to highlight UGM-specific points.
- The "Representation" box describes UGMs in terms of soft constraints, local interactions, maximum entropy, and conditional independences.
- The "Inference" box notes that inference is "More difficult!" and lists several techniques like variable elimination and MCMC that will be covered later.

---

## Page 7
### Content
First view of undirected graphical 
models: soft constraints/energy 

A frequent paradigm is for probabilistic models to have the form:
$p_\theta(x) \propto \exp(-E_\theta(x))$
where $E_\theta(x)$ has some easy to evaluate form. 

It’s an easy way to convert an **energy** $E_\theta$ to a **probability distribution**. 

$E_\theta(x)$ can be seen as “energy” or “soft constraint”: tells us what 
configurations are “lower energy” and the distribution prefers. 

Furthermore, by scaling $E_\theta(x)$ you 
can regulate the “sharpness” of the 
distribution.

### Visual Description
This slide introduces the energy-based view of UGMs. 
- The main formula $p_\theta(x) \propto \exp(-E_\theta(x))$ is presented in a large, light-blue rounded box.
- To the right of the bottom text, there is a 3D surface plot. It shows a probability density function $p(x) \propto e^{-f(x)}$ over a 2D space (axes labeled x and y). The plot features two distinct, sharp peaks (modes) of different heights, colored with a rainbow gradient (blue at the base, red at the peaks). This visualizes how lower energy regions in $f(x)$ correspond to higher probability peaks in $p(x)$.

---

## Page 8
### Content
First view of undirected graphical 
models: soft constraints/energy 

A pairwise **undirected graphical model** expresses a distribution as 
product of local **potentials** $\phi_{ij}$ 
(**interactions**), for example
$p(x) \propto \exp \left( \sum_{ij} \phi_{ij}(x_i, x_j) \right)$

“Soft constraint”: the distribution tries to find a good balance in 
satisfying the (possibly conflicting) influences of the potentials.

Not clear how to draw samples efficiently… 
(It will turn out to be hard to do so in general.)

### Visual Description
This slide continues the energy-based view, focusing on pairwise interactions.
- On the left, there is an undirected graph with four nodes labeled: 1. **sprinkler**, 2. **rain**, 3. **wet pavement**, and 4. **clouds**. 
- Edges connect (1,4), (1,3), (2,4), and (2,3). 
- Each edge is labeled with a potential function: $\phi_{1,4}(x_1, x_4)$, $\phi_{1,3}(x_1, x_3)$, $\phi_{2,4}(x_2, x_4)$, and $\phi_{2,3}(x_2, x_3)$.
- On the right, the formula $p(x) \propto \exp \left( \sum_{ij} \phi_{ij}(x_i, x_j) \right)$ is shown, with a blue arrow pointing to the summation term labeled "potential".

---

## Page 9
### Content
First view of undirected graphical 
models: soft constraints/energy 

A pairwise **undirected graphical model** expresses a distribution as 
product of local **potentials** $\phi_{ij}$ 
(**interactions**), for example
$p(x) \propto \exp \left( \sum_{ij} \phi_{ij}(x_i, x_j) \right)$

“Soft constraint”: the distribution tries to find a good balance in 
satisfying the (possibly conflicting) influences of the potentials.

**Partition function**: $Z := \sum_x \exp \left( \sum_{ij} \phi_{ij}(x_i, x_j) \right)$

Naively calculating above quantity takes time $O(2^d)$

### Visual Description
This slide is nearly identical to page 8 but adds the definition of the partition function $Z$ and its naive computational complexity $O(2^d)$. The undirected graph from page 8 is repeated on the left.

---

## Page 10
### Content
Example 1: multivariate Gaussian

Recall the multivariate Gaussian
$\mathcal{N}(\mathbf{x}|\boldsymbol{\mu}, \boldsymbol{\Sigma}) = \frac{1}{(2\pi)^{D/2}} \frac{1}{|\boldsymbol{\Sigma}|^{1/2}} \exp \left\{ -\frac{1}{2} (\mathbf{x}-\boldsymbol{\mu})^T \boldsymbol{\Sigma}^{-1} (\mathbf{x}-\boldsymbol{\mu}) \right\}$

### Visual Description
This slide presents the multivariate Gaussian as the first example of a UGM.
- The standard formula for the multivariate Gaussian distribution is shown in a light-blue rounded box.
- Below the formula, there are two plots:
    - **Left**: A 3D surface plot of a bivariate Gaussian distribution. It shows a single, smooth, bell-shaped peak colored with a rainbow gradient (blue at the base, red at the top).
    - **Right**: A 2D visualization of a bivariate Gaussian. It includes a central scatter plot of black points representing samples. A green ellipse represents a contour of constant probability. On the top and right sides of the scatter plot, the 1D marginal distributions $p(X)$ and $p(Y)$ are plotted as blue curves with vertical bars (histograms).

---

## Page 11
### Content
Example 1: multivariate Gaussian

Recall the multivariate Gaussian
$\mathcal{N}(\mathbf{x}|\boldsymbol{\mu}, \boldsymbol{\Sigma}) = \frac{1}{(2\pi)^{D/2}} \frac{1}{|\boldsymbol{\Sigma}|^{1/2}} \exp \left\{ -\frac{1}{2} (\mathbf{x}-\boldsymbol{\mu})^T \boldsymbol{\Sigma}^{-1} (\mathbf{x}-\boldsymbol{\mu}) \right\}$

The term inside the exponential is **quadratic**: namely, we can write
$P(\mathbf{x}) = \frac{1}{Z} \exp(-\frac{1}{2} \mathbf{x}^T \mathbf{J} \mathbf{x} + \mathbf{g}^T \mathbf{x})$,
where $\mathbf{J} = \boldsymbol{\Sigma}^{-1}$, $\boldsymbol{\mu} = \mathbf{J}^{-1}\mathbf{g}$.
$\mathbf{x}^T \mathbf{J} \mathbf{x} = \sum_i J_{ii} x_i^2 + 2 \sum_{ij \in E} J_{ij} x_i x_j$,
$\phi_{ij}(x_i, x_j) = 2 J_{ij} x_i x_j$

Thus, the interactions are given by the precision matrix J. 
(Note: precision mx being sparse **does not** imply the covariance mx is sparse.)

### Visual Description
This slide explains how the multivariate Gaussian fits the UGM framework.
- It shows the quadratic form of the exponent and defines the precision matrix $\mathbf{J}$ as the inverse of the covariance matrix $\boldsymbol{\Sigma}$.
- A small undirected graph is shown on the left: a central red-outlined circle connected to four other red-outlined circles. One edge is labeled $J_{ij}$, indicating that the entries of the precision matrix represent the strengths of pairwise interactions between variables.
- The pairwise potential $\phi_{ij}(x_i, x_j) = 2 J_{ij} x_i x_j$ is highlighted in a black-bordered box.

---

## Page 12
### Content
Example 2: Ising models

MRFs with binary variables are sometimes called **Ising models** in statistical 
mechanics, and **Boltzmann machines** in machine learning literature. 

Denoting the binary valued variable at node j by $x_j \in \{\pm 1\}$, the **Ising model** for the joint probabilities is 
given by:
$P_\theta(\mathbf{x}) = \frac{1}{Z(\theta)} \exp \left( \sum_{ij \in E} x_i x_j \theta_{ij} + \sum_{i \in V} x_i \theta_i \right)$

The conditional distribution is given by logistic (*only depends on nbrhood!*): 
$P_\theta(x_i = 1 | \mathbf{x}_{-i}) = \frac{1}{1 + \exp(-\theta_i - \sum_{ij \in E} x_j \theta_{ij})}$, where $\mathbf{x}_{-i}$ denotes all 
nodes except for i. 

If $\theta_{ij} \ge 0$: the nodes i,j, prefer to be the same. If $\theta_{ij} \le 0$: they prefer to be 
different.

### Visual Description
This slide introduces the Ising model.
- On the left, there is a diagram of a 2D grid graph (a lattice). It consists of a $5 \times 5$ grid of circles (nodes) connected by horizontal and vertical lines (undirected edges). This represents a common structure for Ising models where interactions are local.
- The joint probability formula and the conditional probability formula (which has a logistic form) are presented.
- The text explains the meaning of the interaction parameters $\theta_{ij}$.

---

## Page 13
### Content
Example 3: Image Denoising

Noise removal from a binary image:
Let the observed noisy image be described by an array of binary pixel 
values: $y_j \in \{-1, +1\}$, i=1,...,D. 

We take a noise-free image $x_j \in \{-1, +1\}$, 
and randomly flip the sign of pixels with 
some small probability.

Original | Noised | Denoised

### Visual Description
This slide introduces image denoising as an application of UGMs.
- It shows three versions of the same image:
    - **Original**: A clean, black-and-white image of a handwritten mathematical formula $p(x) = \frac{1}{Z} e^{-E(x)}$.
    - **Noised**: The same image but heavily corrupted with "salt and pepper" noise (random black and white dots scattered throughout).
    - **Denoised**: A restored version of the image where most of the noise has been removed, making the formula legible again.

---

## Page 14
### Content
Example 3: Image Denoising

Noise removal from a binary image:
Let the observed noisy image be described by an array of binary pixel 
values: $y_j \in \{-1, +1\}$, i=1,...,D. 

We take a noise-free image $x_j \in \{-1, +1\}$, 
and randomly flip the sign of pixels with 
some small probability.

$E(\mathbf{x}, \mathbf{y}) = h \sum_i x_i - \beta \sum_{\{i,j\}} x_i x_j - \eta \sum_i x_i y_i$
$p(\mathbf{x}, \mathbf{y}) = \frac{1}{Z} \exp\{-E(\mathbf{x}, \mathbf{y})\}$

**Bias term**: $h \sum_i x_i$
**Neighboring pixels are likely to have the same sign**: $-\beta \sum_{\{i,j\}} x_i x_j$
**Noisy and clean pixels are likely to have the same sign**: $-\eta \sum_i x_i y_i$

### Visual Description
This slide provides the mathematical model for image denoising.
- On the left, there is a graphical model diagram. It shows a grid of white circles (representing unobserved clean pixel variables $x_i$) connected to each other in a lattice. Each white circle is also connected to a corresponding blue-filled circle (representing observed noisy pixel variables $y_i$).
- The energy function $E(\mathbf{x}, \mathbf{y})$ is shown with blue arrows pointing to its three components, explaining their conceptual roles: a bias term, a term encouraging smoothness between neighbors, and a term encouraging consistency between noisy and clean pixels.

---

## Page 15
### Content
Example 3: Image Denoising

Noise removal from a binary image:
Let the observed noisy image be described by an array of binary pixel 
values: $y_j \in \{-1, +1\}$, i=1,...,D. 

We take a noise-free image $x_j \in \{-1, +1\}$, 
and randomly flip the sign of pixels with 
some small probability.

Original | Noised | Denoised

y: observed (noisy) variables | x: unobserved variables

### Visual Description
This slide repeats the three images from page 13 (Original, Noised, Denoised) and explicitly labels the variables: $y$ for the observed noisy pixels and $x$ for the unobserved clean pixels that the model aims to recover.

---

## Page 16
### Content
Second view: maximum entropy 
principle

Suppose we know, for a distribution p, only some statistics: 
$\mathbb{E}_p \phi_i(x) = \mu_i, i \in N$ where $\phi_i$ is some function. 

Example: $\phi_i(x) = x_i$ is the mean of the i-th coordinate. 

What is the distribution that “assumes the least” other than p 
matching these statistics? 

**Principle of maximum entropy (Jaynes, ‘57)**: pick the p that 
maximizes H(p), subject to matching these statistics. 
(Aka Occam’s razor.)

What is this distribution p?

### Visual Description
This slide introduces the second perspective on UGMs: the maximum entropy principle. It's a text-based slide explaining the problem setup: finding a distribution that matches known statistics while being as "unbiased" as possible by maximizing entropy. There are no diagrams.

---

## Page 17
### Content
Second view: maximum entropy 
principle

We are trying to solve the optimization problem: 
$\max_p H(p)$, s.t. $\mathbb{E}_p \phi_i(x) = \mu_i, i \in N$

(The variables are values of $p(x), x \in \mathcal{D}$ for a discrete-space 
distribution.) 

Can be rewritten in the Lagrangian form: 
$\max_{p, \lambda_i, \lambda_0} \left\{ H(p) + \sum_i \lambda_i (\mathbb{E}_p \phi_i(x) - \mu_i) + \lambda_0 (\sum_x p(x) - 1) \right\}$

### Visual Description
This slide formalizes the maximum entropy problem as a constrained optimization problem.
- The initial problem statement is in a light-blue rounded box.
- The Lagrangian formulation, which includes Lagrange multipliers $\lambda_i$ for the statistics constraints and $\lambda_0$ for the normalization constraint, is shown in a larger light-blue rounded box at the bottom.

---

## Page 18
### Content
Second view: maximum entropy 
principle

Taking derivatives: 
$\frac{\partial}{\partial \lambda_0} = 0: \sum_x p(x) = 1$
$\frac{\partial}{\partial \lambda_i} = 0: \mathbb{E}_p \phi_i(x) = \mu_i$
$\frac{\partial}{\partial p(x)} = 0: -\log p(x) - 1 + \sum_i \lambda_i \phi_i(x) + \lambda_0 = 0$

$\max_{p, \lambda_i, \lambda_0} \left\{ H(p) + \sum_i \lambda_i (\mathbb{E}_p \phi_i(x) - \mu_i) + \lambda_0 (\sum_x p(x) - 1) \right\}$

### Visual Description
This slide shows the process of solving the optimization problem by taking partial derivatives of the Lagrangian with respect to the variables and setting them to zero. The Lagrangian from the previous page is repeated at the bottom for reference.

---

## Page 19
### Content
Second view: maximum entropy 
principle

Taking derivatives: 
$\frac{\partial}{\partial \lambda_0} = 0: \sum_x p(x) = 1$
$\frac{\partial}{\partial \lambda_i} = 0: \mathbb{E}_p \phi_i(x) = \mu_i$
$\frac{\partial}{\partial p(x)} = 0: -\log p(x) - 1 + \sum_i \lambda_i \phi_i(x) + \lambda_0 = 0$

$\max_{p, \lambda_i, \lambda_0} \left\{ \boxed{H(p)} + \sum_i \lambda_i (\mathbb{E}_p \phi_i(x) - \mu_i) + \lambda_0 (\sum_x p(x) - 1) \right\}$

$H(p) = -\sum_x p(x) \log p(x)$

### Visual Description
This slide highlights the entropy term $H(p)$ in the Lagrangian with a red box and provides its definition: $H(p) = -\sum_x p(x) \log p(x)$. In the derivative equation for $\frac{\partial}{\partial p(x)}$, the term $-\log p(x) - 1$ is also highlighted with a red box, showing it's the derivative of the entropy term.

---

## Page 20
### Content
Second view: maximum entropy 
principle

Taking derivatives: 
$\frac{\partial}{\partial \lambda_0} = 0: \sum_x p(x) = 1$
$\frac{\partial}{\partial \lambda_i} = 0: \mathbb{E}_p \phi_i(x) = \mu_i$
$\frac{\partial}{\partial p(x)} = 0: -\log p(x) - 1 + \sum_i \lambda_i \phi_i(x) + \lambda_0 = 0$

$\max_{p, \lambda_i, \lambda_0} \left\{ H(p) + \boxed{\sum_i \lambda_i (\mathbb{E}_p \phi_i(x) - \mu_i)} + \lambda_0 (\sum_x p(x) - 1) \right\}$

$\mathbb{E}_p \phi_i(x) = \sum_x p(x) \phi_i(x)$

### Visual Description
This slide highlights the summation term involving the statistics constraints in the Lagrangian with a red box. It also provides the definition of the expectation: $\mathbb{E}_p \phi_i(x) = \sum_x p(x) \phi_i(x)$. In the derivative equation for $\frac{\partial}{\partial p(x)}$, the term $\sum_i \lambda_i \phi_i(x)$ is highlighted with a red box, showing it's the derivative of the highlighted Lagrangian term.

---

## Page 21
### Content
Second view: maximum entropy 
principle

Taking derivatives: 
$\frac{\partial}{\partial \lambda_0} = 0: \sum_x p(x) = 1$
$\frac{\partial}{\partial \lambda_i} = 0: \mathbb{E}_p \phi_i(x) = \mu_i$
$\frac{\partial}{\partial p(x)} = 0: -\log p(x) - 1 + \sum_i \lambda_i \phi_i(x) + \boxed{\lambda_0} = 0$

$\max_{p, \lambda_i, \lambda_0} \left\{ H(p) + \sum_i \lambda_i (\mathbb{E}_p \phi_i(x) - \mu_i) + \boxed{\lambda_0 (\sum_x p(x) - 1)} \right\}$

### Visual Description
This slide highlights the normalization constraint term in the Lagrangian with a red box. In the derivative equation for $\frac{\partial}{\partial p(x)}$, the term $\lambda_0$ is highlighted with a red box, showing it's the derivative of the highlighted Lagrangian term.

---

## Page 22
### Content
Second view: maximum entropy 
principle

Taking derivatives: 
$\frac{\partial}{\partial \lambda_0} = 0: \sum_x p(x) = 1$
$\frac{\partial}{\partial \lambda_i} = 0: \mathbb{E}_p \phi_i(x) = \mu_i$
$\frac{\partial}{\partial p(x)} = 0: -\log p(x) - 1 + \sum_i \lambda_i \phi_i(x) + \lambda_0 = 0$

$\Rightarrow p(x) \propto \exp \left( \sum_i \lambda_i \phi_i(x) \right)$

$\max_{p, \lambda_i, \lambda_0} \left\{ H(p) + \sum_i \lambda_i (\mathbb{E}_p \phi_i(x) - \mu_i) + \lambda_0 (\sum_x p(x) - 1) \right\}$

### Visual Description
This slide shows the final result of the derivation: the maximum entropy distribution has an exponential form $p(x) \propto \exp \left( \sum_i \lambda_i \phi_i(x) \right)$. This connects the maximum entropy principle back to the energy-based view of UGMs.

---

## Page 23
### Content
Second view: maximum entropy 
principle

$p(x) \propto \exp \left( \sum_i \lambda_i \phi_i(x) \right)$

In English: The distribution with potentials $\phi_i$ 
appropriately weighed, has maximum entropy 
given the values of the expectations of the potentials.

The potentials $\{\phi_i\}$ are also called **sufficient statistics**, and the above 
family of distributions an **exponential family**
(w/ sufficient statistics $\{\phi_i\}$)

### Visual Description
This slide summarizes the maximum entropy result. The exponential form is shown in a light-blue rounded box. The text explains the conceptual meaning and introduces the terms "sufficient statistics" and "exponential family".

---

## Page 24
### Content
Third view: conditional independence

**Global Markov Property**: Consider 
pairwise UGM. The independence structure 
of variables is “captured” by the graph.

Nodes in A, B are independent, given a 
set of nodes C separating A, B
$p(x_A | x_C, x_B) = p(x_A | x_C)$
Equivalently: 
$p(x_A, x_B | x_C) = p(x_A | x_C) p(x_B | x_C)$
$x_A \perp x_B | x_C$

**Special case (Local Markov Property)**: node is independent 
of the rest of the graph, given values of the neighbors
$p(x_v | x_{N(v)}, x_{V/\{N(v), v\}}) = p(x_v | x_{N(v)})$

### Visual Description
This slide introduces the third perspective: conditional independence.
- **Top left**: An undirected graph with several nodes. Three sets of nodes are circled with dashed green lines and labeled A, B, and C. Set C (containing two blue-filled nodes) physically separates set A from set B in the graph. This illustrates the Global Markov Property.
- **Bottom left**: A diagram showing a central light-blue node $v$ surrounded by a shaded pink region containing its immediate neighbors (dark red nodes). This illustrates the Local Markov Property, where a node is independent of the rest of the graph given its neighbors.

---

## Page 25
### Content
Third view: conditional independence

**Global Markov Property**: Consider 
pairwise UGM. The independence structure 
of variables is “captured” by the graph.

Nodes in A, B are independent, given a 
set of nodes C separating A, B
$p(x_A | x_C, x_B) = p(x_A | x_C)$
Equivalently: 
$p(x_A, x_B | x_C) = p(x_A | x_C) p(x_B | x_C)$
$x_A \perp x_B | x_C$

The neighbors of v are the (minimal) **Markov Blanket** of 
v: the smallest set of nodes S, s.t. v is conditionally 
independent of all other nodes, given S.

### Visual Description
This slide is very similar to page 24 but replaces the text for the Local Markov Property with a definition of the "Markov Blanket". The same two diagrams from page 24 are present.

---

## Page 26
### Content
Third view: conditional independence

Claim: If A, B are separated by C, then $p(x_A, x_B | x_C) = p(x_A | x_C) p(x_B | x_C)$

Example:
$A = \{1\}$
$B = \{5\}$
$C = \{3\}$

$p(X_A = x_A, X_B = x_B | X_C = x_C) = \frac{p(X_A = x_A, X_B = x_B, X_C = x_C)}{p(X_C = x_C)}$
$= \frac{\sum_{x_2, x_4} p(X_A = x_A, X_B = x_B, X_C = x_C, X_2 = x_2, X_4 = x_4)}{p(X_C = x_C)}$
$= \frac{(\sum_{x_2} \phi_{12}(x_1, x_2) \phi_{23}(x_2, x_3)) (\sum_{x_4} \phi_{34}(x_3, x_4) \phi_{35}(x_3, x_5) \phi_{45}(x_4, x_5))}{p(X_C = x_C)}$
$= \psi_{A, x_C}(x_A) \psi_{B, x_C}(x_B)$
$= p(x_A | x_C) p(x_B | x_C)$

### Visual Description
This slide provides a mathematical example to prove the conditional independence claim.
- On the left, there is an undirected graph with nodes 1, 2, 3, 4, and 5. 
- Node 1 is circled in red and labeled A. 
- Node 5 is circled in red and labeled B. 
- Node 3 is circled in red and labeled C. 
- The edges are (1,2), (2,3), (3,4), (3,5), and (4,5). 
- Node 3 (C) separates node 1 (A) from node 5 (B).
- The equations show how the joint probability factorizes into terms that only depend on A and C, and terms that only depend on B and C, leading to the conditional independence result.

---

## Page 27
### Content
Example 4: Restricted Boltzmann Machines

A **latent-variable model**: some of the variables the distribution models are 
not observed (hidden). 

We denote visible and hidden variables with vectors **v**, **h** respectively: 

**Visible variables** $\mathbf{v} \in \{0, 1\}^D$
are connected to hidden variables $\mathbf{h} \in \{0, 1\}^F$. 

**Bipartite Structure**

The energy of the joint configuration: 
$E(\mathbf{v}, \mathbf{h}; \theta) = -\sum_{ij} W_{ij} v_i h_j - \sum_i b_i v_i - \sum_j a_j h_j$
$\theta = \{W, a, b\}$ model parameters.

Probability of the joint configuration is given by the Boltzmann distribution:
$P_\theta(\mathbf{v}, \mathbf{h}) = \frac{1}{Z(\theta)} \exp(-E(\mathbf{v}, \mathbf{h}; \theta)) = \frac{1}{Z(\theta)} \prod_{ij} e^{W_{ij} v_i h_j} \prod_i e^{b_i v_i} \prod_j e^{a_j h_j}$
$Z(\theta) = \sum_{\mathbf{h}, \mathbf{v}} \exp(-E(\mathbf{v}, \mathbf{h}; \theta))$

### Visual Description
This slide introduces Restricted Boltzmann Machines (RBMs).
- On the left, there is a diagram of an RBM. It's a bipartite graph with two layers:
    - **Bottom layer**: "Image visible variables" represented by a grid of white circles labeled **v**.
    - **Top layer**: "hidden variables" represented by three circles (one black, one blue, one red) labeled **h**.
    - **Edges**: Every visible node is connected to every hidden node, but there are no connections within a layer. This is labeled "Bipartite Structure". The weight matrix $W$ is associated with these edges.
- The energy function and joint probability distribution formulas are provided.

---

## Page 28
### Content
Example 4: Restricted Boltzmann Machines

**Restricted**: No interaction between 
hidden variables

The **posterior** over the hidden variables is easy 
to sample from! (Conditional independence!)

$P(\mathbf{h}|\mathbf{v}) = \prod_j P(h_j|\mathbf{v})$
**Factorizes**

$P(h_j = 1 | \mathbf{v}) = \frac{1}{1 + \exp(-\sum_i W_{ij} v_i - a_j)}$

Similarly:
$P(\mathbf{v}|\mathbf{h}) = \prod_i P(v_i|\mathbf{h})$
$P(v_i = 1 | \mathbf{h}) = \frac{1}{1 + \exp(-\sum_j W_{ij} h_j - b_i)}$

### Visual Description
This slide explains why RBMs are "restricted" and the consequence for inference.
- The RBM diagram from page 27 is repeated. A red arrow points to the hidden layer, emphasizing the lack of intra-layer connections.
- The formulas show that the conditional distributions $P(\mathbf{h}|\mathbf{v})$ and $P(\mathbf{v}|\mathbf{h})$ factorize completely, making it easy to sample from them. The conditional probabilities for individual nodes have a logistic sigmoid form.

---

## Page 29
### Content
Example: learning alphabets using RBMs

**Observed Data**
Subset of 25,000 characters

**Learned W: “edges”**
Subset of 1000 features

### Visual Description
This slide shows an application of RBMs to character recognition.
- **Left**: A $6 \times 6$ grid of small black-and-white images showing various handwritten characters from different alphabets. This is the "Observed Data".
- **Center**: A large blue arrow points from the data to the learned features.
- **Right**: A $6 \times 6$ grid of small grey-scale images. These represent the learned weights $W$, which act as feature detectors. They look like small, localized strokes or "edges" that the model has discovered are useful for representing the characters.

---

## Page 30
### Content
Example: RBMs for image data

$P_\theta(\mathbf{v}, \mathbf{h}) = \frac{1}{Z(\theta)} \exp \left( \sum_{i=1}^D \sum_{j=1}^F W_{ij} h_j \frac{v_i}{\sigma_i} + \sum_{i=1}^D \frac{(v_i - b_i)^2}{2\sigma_i^2} + \sum_{j=1}^F a_j h_j \right)$
$\theta = \{W, a, b\}$

$P_\theta(\mathbf{v}|\mathbf{h}) = \prod_{i=1}^D P_\theta(v_i|\mathbf{h}) = \prod_{i=1}^D \mathcal{N} \left( b_i + \sum_{j=1}^F W_{ij} h_j, \sigma_i^2 \right)$

**4 million unlabelled images**
**Learned features (out of 10,000)**

### Visual Description
This slide shows RBMs applied to natural image data.
- **Top left**: The RBM diagram is repeated.
- **Top right**: The joint probability formula for a Gaussian-Bernoulli RBM is shown. Red brackets highlight the "Pair-wise" interaction term and the "Unary" bias terms.
- **Bottom left**: A $4 \times 8$ grid of small, colorful natural images (faces, animals, objects, scenes).
- **Center**: A blue arrow points to the right.
- **Bottom right**: A $4 \times 8$ grid of learned features. These look like Gabor filters or small, oriented edge/texture patches, which are characteristic of early visual processing.

---

## Page 31
### Content
Conditional independence: 
a more general principle

So far: defined a specific common case of 
pairwise undirected graphical model 
through **energy function** and **potentials** $\phi_{ij}$
$p(x) \propto \exp \left( \sum_{ij} \phi_{ij}(x_i, x_j) \right)$

Three ways to interpret it:
1. Soft constraints
2. Maximum entropy
3. **Conditional independences**

**Markov random field** (with respect to graph G):
A probably distribution over a collection of random variables that satisfy the 
Global Markov Property with respect to the structure of G 

$x_A \perp x_B | x_C$
$p(x_A, x_B | x_C) = p(x_A | x_C) p(x_B | x_C)$

### Visual Description
This slide summarizes the three interpretations of UGMs and formally defines a Markov Random Field (MRF) based on the Global Markov Property. The "Conditional independences" point is highlighted with a red box. The mathematical notation for conditional independence is shown at the bottom.

---

## Page 32
### Content
Conditional independence: 
a more general principle

More generally, we can describe the family of 
distributions whose conditional independence 
structure “tracks” a given (undirected) graph. 

The way to formalize this is in terms of **maximal cliques C** 
(clique = fully connected subset of nodes) of the graph:
$p(x) \propto \prod_C \phi_C(x_C)$

For example, the joint distribution above factorizes as:
$p(A, B, C, D) \propto \phi_{AC}(A, C) \phi_{BC}(B, C) \phi_{BD}(B, D) \phi_{AD}(A, D)$

### Visual Description
This slide generalizes the factorization of UGMs from pairwise potentials to clique potentials.
- On the left, there is a diamond-shaped undirected graph with four nodes labeled A, B, C, and D. The edges are (A,C), (C,B), (B,D), and (D,A). 
- In this graph, the maximal cliques are just the edges. 
- The formula at the bottom shows how the joint distribution factorizes into a product of potentials over these maximal cliques (edges).

---

## Page 33
### Content
Maximal cliques

The subsets that are used to define the potential functions are represented 
by maximal cliques in the undirected graph.

**Clique**: a subset of nodes such that 
there exists an edge between all pairs 
of nodes in a subset.

**Maximal Clique**: a clique such that it is not 
possible to include any other nodes in the 
set without it ceasing to be a clique. 

This graph has 5 cliques:
$\{x_1, x_2\}, \{x_2, x_3\}, \{x_3, x_4\}, \{x_4, x_2\}, \{x_1, x_3\}$.

Two maximal cliques:
$\{x_1, x_2, x_3\}, \{x_2, x_3, x_4\}$.

### Visual Description
This slide defines "clique" and "maximal clique" with a visual example.
- On the right, there is an undirected graph with four nodes: $x_1, x_2, x_3$, and $x_4$. 
- The edges are $(x_1, x_2), (x_2, x_3), (x_3, x_4), (x_4, x_2)$, and $(x_1, x_3)$. 
- A green-outlined shape encloses nodes $x_1, x_2$, and $x_3$, which form a maximal clique (a triangle). 
- A blue-outlined shape encloses nodes $x_2, x_3$, and $x_4$, which form another maximal clique (another triangle). 
- The two triangles share the edge $(x_2, x_3)$.

---

## Page 34
### Content
How are pairwise graphical models a 
special case of this?

$p(x) \propto \exp \left( \sum_{ij} \phi_{ij}(x_i, x_j) \right)$

$\phi_{AC} + \phi_{BC} + \phi_{AB} + \phi_{AD} + \phi_{BD}$
$\downarrow$
$\phi_{ABC} + \phi_{ABD}$

### Visual Description
This slide shows how pairwise models are a subset of general clique-based models.
- On the right, there is an undirected graph with nodes A, B, C, and D. It consists of two triangles, ABC and ABD, sharing the edge AB.
- Blue arrows show how a sum of pairwise potentials on the edges can be grouped into potentials over the maximal cliques (the two triangles). Specifically, $\phi_{AC}, \phi_{BC}$, and $\phi_{AB}$ can be part of a larger potential $\phi_{ABC}$.

---

## Page 35
### Content
Hammersley-Clifford theorem

Consider the following two sets of distributions:

– The set of distributions consistent with the **conditional 
independence relationships** defined by separations in an 
undirected graph G.

– The set of distributions consistent with the **factorization** defined by 
potential functions on **maximal cliques** of the graph G.

**Hammersley-Clifford theorem**: these two sets of distributions are the same.

### Visual Description
This slide states the Hammersley-Clifford theorem, which establishes the equivalence between the conditional independence view (Markov properties) and the factorization view (clique potentials) for UGMs. The theorem statement is highlighted in a light-blue rounded box.

---

## Page 36
### Content
Hammersley-Clifford theorem

Part 1 (Easier): Distribution consistent w/ **factorization** defined by potential fns 
on **maximal cliques** of a graph => distribution consistent w/ **conditional 
independence relationships** given by separations in an undirected graph.

### Visual Description
This slide begins the proof of the Hammersley-Clifford theorem.
- It features a complex diagram with several overlapping circles and shapes representing sets of nodes: $A, \tilde{A}, B, \tilde{B}, C$, and $D$. 
- Inside the circles for $A$ and $B$, there are 3D tetrahedral structures, likely representing cliques within those sets. 
- Set $C$ is shown as an oval separating the $A$ side from the $B$ side. 
- Dotted lines represent potential edges between different sets. 
- This diagram is a high-level visualization of the separation property in a graph.

---

## Page 37
### Content
Hammersley-Clifford theorem

To prove: $\forall x_A, x_B, x_C$:
$p(X_A = x_A, X_B = x_B | X_C = x_C) = p(X_A = x_A | X_C = x_C) p(X_B = x_B | X_C = x_C)$

$p(X_A = x_A, X_B = x_B | X_C = x_C) = \frac{p(X_A = x_A, X_B = x_B, X_C = x_C)}{p(X_C = x_C)}$
$= \frac{\sum_{x_{\tilde{A}/A}, x_{\tilde{B}/B}} p(X_A = x_A, X_B = x_B, X_{\tilde{A}/A} = x_{\tilde{A}/A}, X_{\tilde{B}/B} = x_{\tilde{B}/B}, X_C = x_C)}{p(X_C = x_C)}$
$= \frac{(\sum_{x_{\tilde{A}/A}} \prod_{m \in \tilde{A} \cup C} \phi_m(x_m)) (\sum_{x_{\tilde{B}/B}} \prod_{m \in \tilde{B} \cup C} \phi_m(x_m))}{p(X_C = x_C)}$
$= \psi_{A, x_C}(x_A) \psi_{B, x_C}(x_B)$
$= p(x_A | x_C) p(x_B | x_C)$

### Visual Description
This slide provides the mathematical derivation for Part 1 of the Hammersley-Clifford theorem. It uses the factorization property to show that if a distribution factorizes over cliques, then any two sets of nodes $A$ and $B$ separated by $C$ are conditionally independent. The diagram from page 36 is repeated in the top left corner.

---

## Page 38
### Content
Hammersley-Clifford theorem

Part 2 (harder): A distribution consistent w/ **conditional independence 
relationships** given by separations in an undirected graph => Distribution 
consistent w/ **factorization** defined by potential fns on **maximal cliques** of a graph 

(See link in schedule, not covered in class.)

### Visual Description
This slide mentions the second, more difficult part of the Hammersley-Clifford theorem. It states the direction of the implication but notes that the proof is not covered in class. There are no visual elements.

---

## Page 39
### Content
What independencies does a DGM 
represent?

By **definition**: Each variable is conditionally independent of all its 
non-descendants in the graph given the value of all its parents.
$p(\mathbf{x}) = \prod_{k=1}^K p(x_k | pa_k)$

But what other dependencies are encoded?

**Not the same as 
removing directions and 
looking at UGM!**

### Visual Description
This slide transitions to discussing independencies in Directed Graphical Models (DGMs). It gives the basic definition of independence in DGMs and emphasizes that they are not equivalent to simply removing the arrows and treating them as UGMs.

---

## Page 40
### Content
Some special cases

**Cascade (chain)**
$Z \rightarrow Y \rightarrow X$

**Common Parent (fork)**
$X \leftarrow Y \rightarrow Z$

**V-Structure (collider)**
$X \rightarrow Y \leftarrow Z$

### Visual Description
This slide presents three fundamental 3-node directed graph structures. Each is shown in a green box:
- **Cascade (chain)**: Node $Z$ points to $Y$, and $Y$ points to $X$. Node $Y$ is shaded grey.
- **Common Parent (fork)**: Node $Y$ points to both $X$ and $Z$. Node $Y$ is shaded grey.
- **V-Structure (collider)**: Both nodes $X$ and $Z$ point to $Y$. Node $Y$ is shaded grey.

---

## Page 41
### Content
Some special cases

**Cascade (chain)**
$Z \rightarrow Y \rightarrow X$
$X \perp Z | Y$

**Common Parent (fork)**
$X \leftarrow Y \rightarrow Z$
$X \perp Z | Y$

**V-Structure (collider)**
$X \rightarrow Y \leftarrow Z$
$X \not\perp Z | Y$

Knowing Y **decouples** X and Z
Knowing Y **couples** X and Z

### Visual Description
This slide adds independence information to the three structures from page 40.
- For the **Cascade** and **Common Parent**, knowing $Y$ makes $X$ and $Z$ independent ($X \perp Z | Y$). A purple box below them says "Knowing Y decouples X and Z".
- For the **V-Structure**, knowing $Y$ makes $X$ and $Z$ dependent ($X \not\perp Z | Y$). A purple box below it says "Knowing Y couples X and Z".

---

## Page 42
### Content
Proof of conditional independence in 
fork

$X \perp Z | Y$

$P(X, Z | Y) = \frac{P(X, Z, Y)}{P(Y)}$
$= \frac{P(Y) P(X|Y) P(Z|Y)}{P(Y)} = P(X|Y) P(Z|Y)$

**Common Parent**
$X \leftarrow Y \rightarrow Z$

### Visual Description
This slide provides a simple algebraic proof for conditional independence in the "Common Parent" (fork) structure. The diagram of the fork is shown on the right in a green box, with node $Y$ shaded grey.

---

## Page 43
### Content
Proof of conditional independence in 
chain

$X \perp Z | Y$

$P(X, Z | Y) = \frac{P(X, Z, Y)}{P(Y)}$
$= \frac{P(Z) P(Y|Z) P(X|Y)}{P(Y)} = \frac{P(Z, Y) P(X|Y)}{P(Y)}$
$= \frac{P(Y) P(Z|Y) P(X|Y)}{P(Y)} = P(X|Y) P(Z|Y)$

**Cascade (chain)**
$Z \rightarrow Y \rightarrow X$

### Visual Description
This slide provides a simple algebraic proof for conditional independence in the "Cascade" (chain) structure. The diagram of the chain is shown on the right in a green box, with node $Y$ shaded grey.

---

## Page 44
### Content
Conditional dependence in collider 
(“explaining away”)

$X \not\perp Z | Y$

Example:
• X, Z coinflips {0,1}
• Y = (X+Z) % 2

Y encodes whether X=Z, 
so X and Z are not 
independent given Y

**V-Structure (collider)**
$X \rightarrow Y \leftarrow Z$

### Visual Description
This slide explains the conditional dependence in a "V-Structure" (collider) using a coin-flip example. The diagram of the collider is shown on the right in a green box, with node $Y$ shaded grey. The text explains that if you know the result of the XOR-like operation $Y$, then knowing $X$ tells you exactly what $Z$ must be, thus they are dependent.

---

## Page 45
### Content
Conditional dependence in collider 
(“explaining away”)

$X \not\perp Z | Y$

Example:
• X = raining
• Z = sprinklers
• Y = wet grass

If Y is observed (e.g. grass is wet), 
then information about X (e.g. not 
raining) tells us something about Z 
(e.g. sprinklers are on)

**V-Structure (collider)**
$X \rightarrow Y \leftarrow Z$

### Visual Description
This slide provides another example of conditional dependence in a collider, often called "explaining away". The diagram of the collider is shown on the right. The example uses "raining", "sprinklers", and "wet grass". If the grass is wet, and we find out it's not raining, the probability that the sprinklers were on increases.

---

## Page 46
### Content
General principle: moralization

X and Z are **conditionally independent** given the **set** E, if X and Z 
are separated in the undirected moralized graph. 

**Definition**: $X \perp Z | E$ iff X and Z are separated by E in the 
**undirected ancestral moral** graph.

1. **Ancestral graph**: keep only X, Z, E and their ancestors
2. **Moral graph**: add undirected edge between all pairs of each 
node’s parents
3. **Undirected graph**: convert all directed edges to undirected
4. **Givens Removed**: delete any nodes in E

### Visual Description
This slide introduces "moralization", a general procedure to determine conditional independence in DGMs by converting them to UGMs. The four-step process is listed. The main definition is highlighted in a brownish-orange box at the top.

---

## Page 47
### Content
Moralization: example

Is X ⫫ Y | Z ?

**Original graph**

### Visual Description
This slide starts a moralization example.
- It shows an "Original graph" which is a DGM with 6 nodes.
- Node $X$ points to $Z$.
- An unlabeled node points to $Z$ and another unlabeled node.
- That second unlabeled node points to $Y$.
- Both $Z$ and $Y$ point to a final unlabeled node at the bottom.
- Node $Z$ is shaded grey, indicating it's in the conditioning set.

---

## Page 48
### Content
Moralization: example

Is X ⫫ Y | Z ?

**Original graph** | **ancestral** | **Moral ancestral**

### Visual Description
This slide shows the first two steps of the moralization process for the previous example.
- **Original graph**: Repeated from page 47.
- **ancestral**: The bottom node is removed because it's not an ancestor of $X, Y$, or $Z$.
- **Moral ancestral**: An undirected edge is added between $X$ and its "co-parent" (the node that also points to $Z$). All directed edges are converted to undirected lines.

---

## Page 49
### Content
Moralization: example

Is A ⫫ B | {D, E}?

**Original**:

### Visual Description
This slide starts another moralization example.
- The "Original" DGM has nodes A, B, C, D, E, and F.
- A and B both point to C.
- C points to both D and E.
- D and E both point to F.
- Nodes D and E are shaded red, indicating they are in the conditioning set.

---

## Page 50
### Content
Moralization: example

Is A ⫫ B | {D, E}?

**Original** | **Ancestral** | **Moral** | **Undirected** | **Givens Removed**

$\Rightarrow$ A and B connected
$\Rightarrow$ not d-separated

### Visual Description
This slide shows the full moralization process for the example on page 49.
- **Original**: Repeated.
- **Ancestral**: Node F is removed.
- **Moral**: An undirected edge is added between A and B (parents of C).
- **Undirected**: All arrows become lines.
- **Givens Removed**: Nodes D and E are deleted.
- **Result**: In the final graph, there is still a path between A and B (the edge added in the "Moral" step). Therefore, A and B are not conditionally independent given {D, E}.

---

## Page 51
### Content
Why does moralization work?

1. **Ancestral graph** suffices : $P(X, Z | E) = \sum_y P(X, Z, Y=y | E)$
Y which are not parents of X,Z or E can be ignored (X,Z,E are 
conditionally independent given value of parents).

2. **Moral undirected** graph suffices:
$P(X, Z | E) = \frac{P(X, Z, E)}{P(E)}$
$\propto \prod_i p(X_i = x_i | pa(X_i))$

Can view as potential $\phi(X_i, pa(X_i))$

### Visual Description
This slide provides a mathematical justification for why the moralization procedure works. It explains that non-ancestors can be marginalized out and that the conditional probability can be viewed as a product of potentials over cliques in the moralized graph.

---

## Page 52
### Content
Why does moralization work?

1. **Ancestral graph** suffices : $P(X, Z | E) = \sum_y P(X, Z, Y=y | E)$
Y which are not parents of X,Z or E can be ignored (X,Z,E are 
conditionally independent given value of parents).

2. **Moral undirected** graph suffices:
$P(X, Z | E) = \frac{P(X, Z, E)}{P(E)}$
$\propto \prod_i p(X_i = x_i | pa(X_i))$

Can be viewed as factors of an undirected 
graphical model, which obey maximal 
clique factorization of moralized graph. 

Conditional 
independence follows 
by Hammersley-Clifford

### Visual Description
This slide completes the justification from page 51. It explicitly links the product of conditional probabilities to the maximal clique factorization of an MRF and invokes the Hammersley-Clifford theorem to conclude that conditional independence holds.

---

## Page 53
### Content
Markov blankets in DGMs

The (minimal) **Markov Blanket** of a 
node in a directed graphical model 
is the set containing the node’s 
**parents**, **children**, and **co-parents**. 

Recall: Markov Blanket of a node in 
an undirected graphical model are 
its neighbors

These are just its neighbors in the 
moralized graph!

### Visual Description
This slide defines the Markov Blanket for a node in a DGM.
- On the right, there is a complex DGM with nodes $X_1$ through $X_{13}$. 
- A central node $X_6$ is colored green. 
- Its Markov Blanket is highlighted with red-filled nodes and blue arrows:
    - **Parents**: $X_3$ and $X_4$.
    - **Children**: $X_9$ and $X_{10}$.
    - **Co-parents**: $X_2, X_5, X_7$, and $X_8$ (nodes that share a child with $X_6$).
- The text explains that this set of nodes corresponds exactly to the neighbors of $X_6$ in the moralized version of the graph.

---

## Page 54
### Content
Another principle: D-separation 

**If** variables X and Z are **d-separated** given a **set** of variables E
**Then** X and Z are **conditionally independent** given the **set** E

**Definition**: Variables X and Z are **d-separated** given a **set** of evidence 
vars E iff every (undirected) path from X to Z is blocked.

A path is **blocked** whenever:
1. $\exists Y$ on path s.t. $Y \in E$ and Y is a “common parent”
2. $\exists Y$ on path s.t. $Y \in E$ and Y is in a “cascade”
3. $\exists Y$ on path s.t. $\{Y, descendants(Y)\} \notin E$ and Y is in a “v-structure”

### Visual Description
This slide introduces "D-separation", an alternative graphical method for determining conditional independence in DGMs.
- The main theorem is in a brownish-orange box at the top.
- Three small diagrams illustrate the "blocked" conditions:
    1. **Common parent**: $X \leftarrow Y \rightarrow Z$, where $Y$ is green-filled (observed).
    2. **Cascade**: $X \rightarrow Y \rightarrow Z$, where $Y$ is green-filled (observed).
    3. **V-structure**: $X \rightarrow Y \leftarrow Z$, where $Y$ is white (unobserved) and has no observed descendants.\n