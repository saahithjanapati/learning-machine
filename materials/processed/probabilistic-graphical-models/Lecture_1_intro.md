# Lecture_1_intro

Source: `materials/archive/probabilistic graphical models/Lecture_1_intro (1).pdf`
Duplicate equivalents: `Lecture_1_intro (1).pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `strict full-PDF single-call conversion`
Finish reason: `STOP`
Pages: 39
## Page 1
### Content
10708
Probabilistic Graphical Models:
Spring 2026

Andrej Risteski
Machine Learning Department

Lecture 1:
Introduction to course,
recap of probability

### Visual Description
This is a title slide with dark blue text on a white background. It contains the course number, title, semester, instructor's name, department, and the lecture topic. There are no diagrams or images.

## Page 2
### Content
# Course logistics

**Time and location:** MW 2:00-3:20 pm, DH2315.
Recitations will happen some weeks
(see schedule, announcements on Piazza).

**Course website:** https://andrejristeski.github.io/10708S26
(last offering: https://andrejristeski.github.io/10708F25)

**Piazza:** http://piazza.com/cmu/spring2026/10708/home

**Contact Information:** to get a quick response to questions from the teaching staff we strongly encourage you to post to **Piazza**. For private matters, make a private note visible only to course instructors.

For longer discussions with TAs and to get help in person, we strongly encourage you to come to office hours. (Posted on course website.)

### Visual Description
This page contains text information regarding course logistics. There are no notable visuals beyond the text.

## Page 3
### Content
# The team

**Instructors:**
Andrej Risteski

**Educational associate:**
Joshmin Ray

**Teaching Assistants**
Justin Lin
James Ngai
Stephan Xie
Kadin Zhang

### Visual Description
This page introduces the course staff with their names and portrait photos.
- **Andrej Risteski (Instructor):** A man with dark hair and a beard.
- **Joshmin Ray (Educational associate):** A man with dreadlocks and a beard, smiling.
- **Justin Lin (TA):** A young man with dark hair.
- **James Ngai (TA):** A young man with dark hair, smiling.
- **Stephan Xie (TA):** A young man with dark hair, smiling.
- **Kadin Zhang (TA):** A young man with dark hair, smiling.

## Page 4
### Content
# Prerequisites

**MOST IMPORTANT !!:** Mathematical maturity

**Mathematical prerequisites:** strong background in calculus, linear algebra, machine learning, statistics and probability theory.

**Course prerequisites:** 10315 or 10401 or 10715 or 10701 or 10601

**Coding prerequisites:** a basic understanding of coding (Python preferred) there will be a substantial coding component.

### Visual Description
This page lists the prerequisites for the course in text format. There are no notable visuals beyond the text.

## Page 5
### Content
# Course materials

**Readings:** (self-contained) slides will be posted periodically on the course website (under Schedule). The instructors will try to upload slides before class.

We will not strictly follow a textbook, and additional readings will be posted whenever relevant.

**Homeworks:** Homework assignments will be announced on Piazza when released.

Tentative release/due dates are on the website calendar.

### Visual Description
This page provides information about course materials in text format. There are no notable visuals beyond the text.

## Page 6
### Content
# Assignments and grading

**Assignments:** the assignments will have written, mathematical problems as well as coding problems.

The *tentative* schedule of release and due dates can be seen in the Schedule. Latex templates will be released with the homework for students to complete with their solutions.

**Exams:** there will be a midterm and final exam. Tentative date for mid-term is on the schedule, final will happen during finals week.

**Grading:** assignments contribute **40%** in total, midterm contributes **25%**, final contributes **35%**. Extra-credit for class attendance (**3%**).

### Visual Description
This page details the grading scheme and assignment structure in text format. There are no notable visuals beyond the text.

## Page 7
### Content
# Assignment policies

**LLMs:** you may use LLMs as a learning aid when doing so supports your understanding—e.g., to clarify concepts, help you reflect on your approach, or even generate practice questions. You should not rely on an LLM to produce solutions for the homework assignments: it undermines your learning, reduces your ability to acquire mastery of the material, and will leave you unprepared for exams, where you will be expected to solve problems on your own.

**Collaboration:** you may discuss the general idea of the questions with anyone you like, but your discussion may not include the specific answers to any of the problems and when writing your solutions you must close all notes and write the answer entirely yourself.

**Submitting:** assignments will be submitted through **Gradescope**. Writeups should be typeset in Latex and should be submitted in PDF form. Code should be submitted w/ a README file w/ instructions on how to execute code. You will receive an invite to Gradescope.

### Visual Description
This page outlines policies regarding LLMs, collaboration, and submission in text format. There are no notable visuals beyond the text.

## Page 8
### Content
# Assignment policies

**Regrades:** submit a regrade request on Gradescope.

**Late policy:** each student will have a total of **6 grace days** that a student may choose to apply to the homework assignments. No more than **2 grace days** can be used on any single assignment.

Late homeworks when the student has no Grace days remaining or 2 days past the deadline will be given a score of 0.

**Extensions:** in general, we do not grant extensions on assignments. There are several exceptions: medical emergencies, family/personal emergencies, university-approved absences. (See website).

**Academic integrity policies:** please check website!

### Visual Description
This page continues the assignment policies in text format. There are no notable visuals beyond the text.

## Page 9
### Content
# Goals of this course

**Overview of core topics in graphical models**
Mathematical foundations, algorithmic toolkit, applications

**Algorithmic toolkit from Bayesian machine learning**
Techniques from variational inference and Markov Chain Monte Carlo

**Modern topics, deep-learning inspired/augmented models**
Deep generative models (VAEs, GANs, non-likelihood training, diffusion models)
Graph Neural Networks
Causality

### Visual Description
This page lists the course goals in text format. There are no notable visuals beyond the text.

## Page 10
### Content
# Module 1: Fundamentals and exact inference

* Directed and undirected graphical models.
* Representation, learning, inference: tradeoffs between directed and undirected models.
* Algorithms for exact inference: variable elimination, message passing/belief propagation.
* Connections between message passing and graph neural networks.

### Visual Description
This page lists the topics for Module 1 in text format. There are no notable visuals beyond the text.

## Page 11
### Content
# Module 2: Markov Chain Monte Carlo

* **Algorithmic primitive:** sampling from distributions given up to a constant of proportionality, i.e. $p(x) \propto \exp(f(x))$. Examples: sampling from MRFs, posteriors in latent-variable Bayesian networks, etc.
* **Common approach:** Markov Chain (Monte Carlo). Set up a random process, whose “equilibrium” distribution equals the desired one.

**We will see:** Metropolis Hastings, Gibbs sampling, tools for understanding mixing time, tools for dealing with multimodal and high-dimensional distributions (tempering, HMC…)

https://www.math.mcgill.ca/dstephens/MySite/index.html

### Visual Description
The page contains two square images side-by-side showing simulations of an Ising-like model:
1.  **Gibbs sampler: Step 5:** A square grid filled with a pixelated pattern of red and black. The red regions appear somewhat clustered but still very noisy.
2.  **Swendsen-Wang: Step 5:** A similar square grid with red and black pixels. The red regions are much more clearly defined and clustered compared to the Gibbs sampler at the same step, illustrating faster convergence/mixing.

## Page 12
### Content
# Module 3: Variational methods

* **Frequent algorithmic primitive:** estimate marginals and normalizing constants. (e.g. probability that a subset of nodes has a particular value)
* **Common approach:** Write quantities of interest as the solution of an optimization problem. (Then use tools from optimization to solve.)

**We will see:** Gibbs variational principle, expectation maximization (EM), variational inference (+variants), variational autoencoders and the reparametrization trick, …

### Visual Description
The page includes a conceptual diagram for variational inference:
- On the left, a green bell curve is labeled "true posterior".
- To its right, a large light-blue oval is labeled "'Nice' class". Inside this oval are several smaller grey bell curves representing candidate distributions.
- A red dashed arrow labeled "divergence" points from the "true posterior" toward one of the grey curves inside the oval, which is labeled "best proxy".
- This visualizes the idea of finding the distribution within a tractable class that is closest (minimizes divergence) to the true, complex posterior.

## Page 13
### Content
# Module 4: Likelihood-free Methods

* Maximum likelihood (+ approximations via MCMC and variational inference) is by far most common way to learn/use graphical models, but is often computationally intractable.
* **Likelihood-free** methods (NCE, score matching) avoid likelihood altogether, and instead use surrogates to match the input distribution.

**We will see:** Generative Adversarial Networks, score matching, diffusion models, noise contrastive estimation,…

### Visual Description
The page contains several images related to generative modeling:
1.  **GAN Diagram:** A flowchart showing "White noise" going into a "Generator" box, which produces a generated image of the Mona Lisa. This generated image and a "Real" Mona Lisa image both point to a "Discriminator" box. The Discriminator outputs "Real or generated? (0/1)".
2.  **Cartoon:** A humorous illustration of a person painting a copy of the Mona Lisa while looking at the original, representing the generator's task.
3.  **Noise Image:** A square of random colored static.
4.  **Diffusion Heatmap:** A horizontal plot showing a transition from a concentrated yellow/green band on the right to a more dispersed, noisy pattern on the left, labeled "Reverse stochastic process". This represents the denoising process in diffusion models.

## Page 14
### Content
# Module 5: Causality, other topics

* Structural causal models, interventions, causal identification/discovery.

Figure from Brenas et al. ‘20

### Visual Description
The page features a Directed Acyclic Graph (DAG) representing causal relationships:
- **Nodes:** Education, Income, Age of first cigarette, Number of cigarettes per week, Peer smoking habits, Ease of smoking cessation.
- **Edges (Arrows):**
    - Education $\rightarrow$ Income
    - Education $\rightarrow$ Age of first cigarette
    - Income $\rightarrow$ Number of cigarettes per week
    - Age of first cigarette $\rightarrow$ Number of cigarettes per week
    - Age of first cigarette $\rightarrow$ Ease of smoking cessation
    - Peer smoking habits $\rightarrow$ Number of cigarettes per week
    - Number of cigarettes per week $\rightarrow$ Ease of smoking cessation

## Page 15
### Content
# Brief recap of basic notions in probability

For distributions over a discrete space (e.g. throws of coin), we can **describe** them by the probabilities of the *atomic events* in the state space:

| Outcome of throw | Probability |
| :--- | :--- |
| T | 0.8 |
| H | 0.2 |

Note, an “event” need not be atomic: e.g. the event could be “throw heads or tails” or “roll neither heads nor tails”.

### Visual Description
The page includes a simple two-column table:
- **Outcome of throw:** Rows for 'T' (Tails) and 'H' (Heads).
- **Probability:** Corresponding values of 0.8 and 0.2.
This table represents a discrete probability distribution for a biased coin.

## Page 16
### Content
# Brief recap of basic notions in probability

For distributions over a discrete space (e.g. throws of coin), we can **describe** them by the probabilities of the *atomic events* in the state space:

| Outcome of throw | Probability |
| :--- | :--- |
| T | 0.8 |
| H | 0.2 |

For distributions over a continuous space (e.g. the real line), we can describe them using a **probability density function (PDF)** p.

A real-valued distribution can also be described by **cumulative density function (CDF)**:
$$F(x) = \int_0^x p(y) dy$$

### Visual Description
The page contains:
1.  The same discrete probability table from Page 15.
2.  A plot of several Normal (Gaussian) distributions.
    - **X-axis:** Values from -5 to 5.
    - **Y-axis:** Density $\phi_{\mu, \sigma^2}(x)$ from 0.0 to 1.0.
    - **Curves:** Four bell curves with different parameters:
        - Blue: $\mu=0, \sigma^2=0.2$ (tall and narrow).
        - Red: $\mu=0, \sigma^2=1.0$ (standard normal).
        - Yellow: $\mu=0, \sigma^2=5.0$ (short and wide).
        - Green: $\mu=-2, \sigma^2=0.5$ (shifted to the left).

## Page 17
### Content
# Brief recap of basic notions in probability

A joint distribution of any two random variables factorizes as
$$p(X = x, Y = y) = p(X = x)p(Y = y | X = x)$$

$p(Y = y | X = x)$ is the **conditional distribution** of Y given X=x.

Two random variables X,Y are **independent** if they satisfy
$$p(X = x, Y = y) = p(X = x)p(Y = y)$$

Equivalently, variables X,Y are **independent** if $p(Y = y | X = x) = p(Y = y)$
(In other words, conditioning on X doesn’t change the distribution of Y)

*When two random variables are dependent, there are many ways to describe “how” dependent they are.*

### Visual Description
This page presents fundamental probability definitions and equations regarding joint distributions, conditional distributions, and independence. There are no notable visuals beyond the text and equations.

## Page 18
### Content
# Brief recap of basic notions in probability

Recall, the **expectation** of a random variable is
$$\mathbb{E}[X] = \sum_x x p(X = x) \text{ or } \mathbb{E}[X] = \int_x x p(x) dx$$

The **variance** of a random variable is $\mathbb{V}[X] = \mathbb{E}[X^2] - \mathbb{E}[X]^2$
$= \mathbb{E}[(X - \mathbb{E}[X])^2]$

Variance measures the spread of the random variable X. This can be formalized as **Chebyshev’s inequality**:
$$\text{Pr}[|X - \mathbb{E}[X]| \ge c \sqrt{\mathbb{V}(X)}] \le \frac{1}{c^2}$$

*(In English, with prob at least 1-1/100, no more than 10 standard deviations away from expectation.)*

### Visual Description
This page defines expectation and variance, and presents Chebyshev's inequality in a blue-bordered box. There are no notable visuals beyond the text and equations.

## Page 19
### Content
# Brief recap of basic notions in probability

Recall, the **(Shannon) entropy** of a random variable is
$$H[X] = -\sum_x p(X = x) \log P(X = x) = -\mathbb{E}_p \log p(X)$$

Amount of **“disorder”/”spread”** of the distribution:
1) Uniform distribution: $-\sum_x \frac{1}{n} \log \frac{1}{n} = n \frac{1}{n} \log(n) = \log(n)$
2) Point mass: $1 \log(1) = 0$
3) Uniform distribution is most spread out:

Recall **Jensen’s inequality**: for any concave function $\phi$ and random variable X with distribution p it holds that
$$\mathbb{E}_p \phi(X) \le \phi(\mathbb{E}_p(X))$$

### Visual Description
This page defines Shannon entropy and Jensen's inequality. Jensen's inequality is highlighted in a blue-bordered box. There are no notable visuals beyond the text and equations.

## Page 20
### Content
# Brief recap of basic notions in probability

Recall, the **(Shannon) entropy** of a random variable is
$$H[X] = -\sum_x p(X = x) \log P(X = x) = -\mathbb{E}_p \log p(X)$$

Amount of **“disorder”/”spread”** of the distribution:
1) Uniform distribution: $-\sum_x \frac{1}{n} \log \frac{1}{n} = n \frac{1}{n} \log(n) = \log(n)$
2) Point mass: $1 \log(1) = 0$
3) Uniform distribution is most spread out:

Applying this to $\phi(x) = \log(x)$ and the random variable $1/p(x)$
$$\mathbb{E}_p \log \frac{1}{p(x)} \le \log \mathbb{E}_p \left( \frac{1}{p(x)} \right) = \log \sum_x p(x) \frac{1}{p(x)} = \log n$$

### Visual Description
This page continues the discussion on entropy, showing a derivation using Jensen's inequality to prove that the uniform distribution maximizes entropy. There are no notable visuals beyond the text and equations.

## Page 21
### Content
# Brief recap of basic notions in probability

Recall, the **(Shannon) entropy** of a random variable is
$$H[X] = -\sum_x p(X = x) \log P(X = x) = -\mathbb{E}_p \log p(X)$$

Also measures the amount of **“information content”** in a random variable:
For sequences $(x_1, x_2, \dots, x_n), x_i \sim p$ as $n \rightarrow \infty$ we need $n H(p)$ bits to encode them.

Optimal encoding for symbol x uses $\sim \log 1/p(x)$ bits.

Amount of **“disorder”/”spread”** of the distribution:

### Visual Description
This page discusses entropy as a measure of information content and its relation to encoding. There are no notable visuals beyond the text and equations.

## Page 22
### Content
# Brief recap of basic notions in probability

Recall, the **(Shannon) entropy** of a random variable is
$$H[X] = -\sum_x p(X = x) \log P(X = x) = -\mathbb{E}_p \log p(X)$$

Amount of **“disorder”/”spread”** of the distribution:
1) Uniform distribution: **Lots of uncertainty / information**
2) Point mass: **No uncertainty / information**
3) Uniform distribution is **most uncertain**

### Visual Description
This page summarizes the conceptual meaning of entropy for uniform and point mass distributions. There are no notable visuals beyond the text and equations.

## Page 23
### Content
# Brief recap of basic notions in probability

**Conditional entropy** of Y given X is defined as
$$H[Y|X] = \sum_x p(X = x) H(Y | X = x)$$
$$= -\sum_{x,y} p(X = x) p(Y = y | X = x) \log p(Y = y | X = x)$$

Captures how much “extra” uncertainty there is in Y, if X is revealed.

**Chain rule of entropy:**
$$H(X, Y) = H(X) + H(Y|X) = H(Y) + H(X|Y)$$

### Visual Description
This page defines conditional entropy and the chain rule of entropy. The chain rule is highlighted in a blue-bordered box. There are no notable visuals beyond the text and equations.

## Page 24
### Content
# Brief recap of basic notions in probability

**Conditional entropy** of Y given X is defined as
$$H[Y|X] = \sum_x p(X = x) H(Y | X = x)$$

**Chain rule of entropy:** $H(X, Y) = H(X) + H(Y|X) = H(Y) + H(X|Y)$

$$H(X) + H(Y|X) = -\sum_x p(x) \log p(x) - \sum_x p(x) \sum_y p(y|x) \log p(y|x)$$
$$= -\sum_x \sum_y p(x, y) \log p(x) - \sum_{x,y} p(x, y) \log p(y|x)$$
$$= -\sum_{x,y} p(x, y) (\log p(x) + \log p(y|x)) = -\sum_{x,y} p(x, y) \log p(x, y) = H(X, Y)$$

### Visual Description
This page provides a mathematical proof for the chain rule of entropy. There are no notable visuals beyond the text and equations.

## Page 25
### Content
# Brief recap of basic notions in probability

Conditional entropy can be used to define a notion of **mutual information** between two random variables:
$$I(X; Y) := H(X) - H(X|Y)$$
$$= H(Y) - H(Y|X)$$
$$= H(X) + H(Y) - H(X, Y)$$

Captures how much “leftover” uncertainty there is in X after conditioning on Y. (Or vice versa.)

Extreme 1: perfectly correlated $I(X; Y) = H(X)$
Extreme 2: independent $I(X; Y) = 0$

### Visual Description
This page defines mutual information and its properties. There are no notable visuals beyond the text and equations.

## Page 26
### Content
# Brief recap of basic notions in probability

A closely related quantity is **relative entropy** or **KL divergence**:
$$KL(p||q) = \sum_x p(X = x) \log \left( \frac{p(X = x)}{q(X = x)} \right) = \mathbb{E}_p \log \left( \frac{p(X = x)}{q(X = x)} \right)$$

Some interpretations:
**Coding:** If using optimal encoding for q, how much extra “bits” are needed to encode symbols from p.

### Visual Description
This page defines KL divergence and provides a coding-based interpretation. There are no notable visuals beyond the text and equations.

## Page 27
### Content
# Brief recap of basic notions in probability

$$KL(p||q) = \sum_x p(X = x) \log \left( \frac{p(X = x)}{q(X = x)} \right) = \mathbb{E}_p \log \left( \frac{p(X = x)}{q(X = x)} \right)$$

**Coding:** If using optimal encoding for q, how much extra “bits” are needed to encode symbols from p. (Alternatively, how much extra “information is gained” about p.)

**Mathematical formalization:** $I(X; Y) := \mathbb{E}_Y KL(p_{X|Y} || p_X)$

Mutual information = expected “information gain”

### Visual Description
This page continues the discussion on KL divergence, relating it to mutual information as expected information gain. There are no notable visuals beyond the text and equations.

## Page 28
### Content
# Brief recap of basic notions in probability

A closely related quantity is **relative entropy** or **KL divergence**:
$$KL(p||q) = \sum_x p(X = x) \log \left( \frac{p(X = x)}{q(X = x)} \right) = \mathbb{E}_p \log \left( \frac{p(X = x)}{q(X = x)} \right)$$

Some interpretations:
**Coding:** If using optimal encoding for q, how much extra “bits” are needed to encode symbols from p.

**Neyman-Pearson:** “most powerful” test to distinguish between two distributions is to use statistic $\log \frac{p(X)}{q(X)}$. KL is the expectation of this statistic.

### Visual Description
This page provides another interpretation of KL divergence based on the Neyman-Pearson lemma. There are no notable visuals beyond the text and equations.

## Page 29
### Content
# KL is a kind of distance

$KL(p||q) \ge 0$: (KL is always non-negative)

$$\mathbb{E}_p \log \left( \frac{p(X = x)}{q(X = x)} \right) = -\mathbb{E}_p \log \left( \frac{q(X = x)}{p(X = x)} \right)$$
$$\ge -\log \left( \sum_x p(X = x) \frac{q(X = x)}{p(X = x)} \right)$$
$$= 0$$

Equality holds if q = p.

So, we can think of KL as a “kind of” distance.

### Visual Description
This page proves the non-negativity of KL divergence using Jensen's inequality. The main property is highlighted in a blue-bordered box. There are no notable visuals beyond the text and equations.

## Page 30
### Content
# KL is a kind of distance

However, unlike a “standard” distance, KL divergence is **not symmetric!**

Ex. Consider two univariate Gaussians, $p = N(0, \sigma_1^2), q = N(0, \sigma_2^2)$

Gaussian density: $p(x) = \frac{1}{\sqrt{2\pi} \sigma_1} e^{-\frac{1x^2}{2\sigma_1^2}}$

$$\log \left( \frac{p(x)}{q(x)} \right) = \log \left( \frac{\sigma_2}{\sigma_1} e^{-\frac{1}{2} \left( \frac{x^2}{\sigma_1^2} - \frac{x^2}{\sigma_2^2} \right)} \right) = \log \left( \frac{\sigma_2}{\sigma_1} \right) - \frac{1}{2} \left( \frac{1}{\sigma_1^2} - \frac{1}{\sigma_2^2} \right) x^2$$

$$KL(p||q) = \mathbb{E}_p \log \left( \frac{p}{q} \right) = \log \left( \frac{\sigma_2}{\sigma_1} \right) - \frac{1}{2} \left( \frac{1}{\sigma_1^2} - \frac{1}{\sigma_2^2} \right) \mathbb{E}_p x^2$$

$$KL(p||q) = \log \left( \frac{\sigma_2}{\sigma_1} \right) + \frac{\sigma_1^2}{2\sigma_2^2} - \frac{1}{2}$$

### Visual Description
This page demonstrates the non-symmetry of KL divergence using an example with two Gaussian distributions. The non-symmetry property is highlighted in a blue-bordered box. There are no notable visuals beyond the text and equations.

## Page 31
### Content
# KL is a kind of distance

However, unlike a “standard” distance, KL divergence is **not symmetric!**

Ex. Consider two univariate Gaussians, $p = N(0, \sigma_1^2), q = N(0, \sigma_2^2)$

$$KL(p||q) = \log \left( \frac{\sigma_2}{\sigma_1} \right) + \frac{\sigma_1^2}{2\sigma_2^2} - \frac{1}{2}$$

Expression is not symmetric:
$\sigma_1 = 1, \sigma_2 \rightarrow \infty$: Grows like $\log(\sigma_2)$
$\sigma_1 \rightarrow \infty, \sigma_2 = 1$: Grows like $\frac{1}{2} \sigma_1^2$

### Visual Description
This page continues the Gaussian example to show how the growth rates of $KL(p||q)$ differ depending on which variance is increased, further illustrating non-symmetry. There are no notable visuals beyond the text and equations.

## Page 32
### Content
# KL is a kind of distance

KL divergence also does not satisfy triangle inequality.

In mathematical language, KL is a **divergence**:
$d(p, q) \ge 0$, and $d(p, q) = 0$ iff p=q.

If is an instance of an **f-divergence**:
$$D_f(p, q) := \mathbb{E}_q f \left( \frac{p(X = x)}{q(X = x)} \right)$$

(Take $f(x) = x \log x$)

For any convex f, $D_f$ is a divergence.

### Visual Description
This page defines f-divergences and notes that KL divergence is a specific instance. The f-divergence formula is highlighted in a blue-bordered box. There are no notable visuals beyond the text and equations.

## Page 33
### Content
# Other distances

There are other notions of distance between distributions that satisfy **triangle inequality** and are **symmetric**, e.g. total variation distance:
$$TV(p, q) = \frac{1}{2} \sum_x |p(x) - q(x)| = \sup_{\text{event } e} |p(e) - q(e)|$$

**Observation 1:** total shaded area (I + II) = $\sum_x |p(x) - q(x)|$

**Observation 2:** I = II.

**Proof:** I + III = 1
II + III = 1
$\Rightarrow$ I = II

### Visual Description
The page contains a hand-drawn plot of two overlapping probability distributions:
- **P (blue curve):** A distribution with two peaks.
- **Q (red curve):** A distribution with two peaks, slightly shifted and shaped differently from P.
- **Shaded Regions:**
    - **Region I (blue vertical stripes):** Areas where $P(x) > Q(x)$.
    - **Region II (red vertical stripes):** Areas where $Q(x) > P(x)$.
    - **Region III (unshaded area under both curves):** The intersection area where both distributions overlap.
- The text explains that the total variation distance is related to these shaded areas.

## Page 34
### Content
# Other distances

There are other notions of distance between distributions that satisfy **triangle inequality** and are **symmetric**, e.g. total variation distance:
$$TV(p, q) = \frac{1}{2} \sum_x |p(x) - q(x)| = \sup_{\text{event } e} |p(e) - q(e)|$$

**Observation 1:** total shaded area (I + II) = $\sum_x |p(x) - q(x)|$

**Observation 2:** I = II.
$\Rightarrow I = II = \frac{1}{2} \sum_x |p(x) - q(x)|$

### Visual Description
This page repeats the hand-drawn plot from Page 33 and adds a mathematical conclusion to Observation 2, showing that each shaded region (I or II) is equal to half the sum of absolute differences.

## Page 35
### Content
# Other distances

There are other notions of distance between distributions that satisfy **triangle inequality** and are **symmetric**, e.g. total variation distance:
$$TV(p, q) = \frac{1}{2} \sum_x |p(x) - q(x)| = \sup_{\text{event } e} |p(e) - q(e)|$$

**Observation 1:** total shaded area (I + II) = $\sum_x |p(x) - q(x)|$

**Observation 2:** I = II.

**Observation 3:** x’s corresponding to I (or II) define event e achieving sup on RHS.

### Visual Description
This page repeats the hand-drawn plot from Page 33 and adds Observation 3, which links the regions where one distribution dominates the other to the event that achieves the supremum in the TV distance definition.

## Page 36
### Content
# Other distances

There are other notions of distance between distributions that satisfy **triangle inequality** and are **symmetric**, e.g. total variation distance:
$$TV(p, q) = \frac{1}{2} \sum_x |p(x) - q(x)| = \sup_{\text{event } e} |p(e) - q(e)|$$

$$= \sup_{f: D \rightarrow [0,1]} |\mathbb{E}_p(f) - \mathbb{E}_q(f)|$$

(Equality holds when f is the indicator function where $p(x) \ge q(x)$ )

### Visual Description
This page repeats the hand-drawn plot from Page 33 and provides an alternative variational definition of TV distance as a supremum over functions bounded between 0 and 1.

## Page 37
### Content
# Other distances

There are other notions of distance between distributions that satisfy **triangle inequality** and are **symmetric**, e.g. total variation distance:
$$TV(p, q) = \frac{1}{2} \sum_x |p(x) - q(x)| = \sup_{\text{event } e} |p(e) - q(e)|$$

$$= \sup_{f: D \rightarrow [0,1]} |\mathbb{E}_p(f) - \mathbb{E}_q(f)|$$

Is an instance of an integral probability metric:
$$\gamma_{\mathcal{F}}(p, q) := \sup_{f \in \mathcal{F}} |\mathbb{E}_p(f) - \mathbb{E}_q(f)|$$

(Take $\mathcal{F}$ all functions bounded in [0,1].)

### Visual Description
This page introduces the general concept of an Integral Probability Metric (IPM), highlighted in a blue-bordered box. It notes that TV distance is a specific type of IPM. There are no new diagrams.

## Page 38
### Content
# Other distances

Several types of IPMs useful in machine learning:

**Total Variation (TV):**
$\mathcal{F}$ = all functions bounded in [0,1]

**Maximum mean discrepancy (MMD):**
$\mathcal{F}$ = unit ball in a reproducing kernel Hilbert space

**Wasserstein distance:**
$\mathcal{F}$ = 1-Lipschitz functions

Is an instance of an integral probability metric:
$$\gamma_{\mathcal{F}}(p, q) := \sup_{f \in \mathcal{F}} |\mathbb{E}_p(f) - \mathbb{E}_q(f)|$$

### Visual Description
This page lists different types of IPMs (TV, MMD, Wasserstein) based on the choice of the function class $\mathcal{F}$. The general IPM formula is repeated in a blue-bordered box. There are no notable visuals beyond the text and equations.

## Page 39
### Content
# Dependence between variables

Remember **mutual information:** $I(X; Y) := H(X) - H(X|Y)$

It can be also rewritten as:
$$I[X, Y] = KL(p_{x,y} || p_x \otimes p_y)$$

Can also measure how “dependent” X, Y are in the sense of expectations:
$$Cov[X, Y] = \mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y]$$

(For independent variables: $\mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y] = 0$ )

### Visual Description
This final page summarizes ways to measure dependence between variables, including mutual information (as a KL divergence) and covariance. There are no notable visuals beyond the text and equations.\n