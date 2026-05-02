# lecture-notes-17-RL2 and graphical models 1

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/lecture-notes-17-RL2 and graphical models 1.pdf`
Duplicate equivalents: `lecture-notes-17-RL2 and graphical models 1.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 4

## Page 1
### Content
**10-715 Advanced Introduction to Machine Learning**  
**Fall 2019**

**Lecture 21: November 20, 2019**  
*Lecturer: Nihar B. Shah*  
*Scribes: Shangbang Long, Cristian Challu*

**Note:** LaTeX template courtesy of UC Berkeley EECS dept.  
**Disclaimer:** These notes have not been subjected to the usual scrutiny reserved for formal publications. They may be distributed outside this class only with the permission of the Instructor.

This lecture's notes illustrate some uses of various $\LaTeX$ macros. Take a look at this and imitate.

### 21.1 Reinforcement Learning
**Definition:** In a nutshell, reinforcement learning considers Markov Decision Process (MDP) where the reward function, $R(s, a)$, and the state transfer probabilities, $T(s, a)$ is unknown.

There are mainly two categories:
1. **Model-based** methods that learn the reward and state transfer probability function, and then infer a policy from them.
2. **Model-free** methods that learn a mapping from state to action directly, i.e. learning a policy function.

#### 21.1.1 Q-Learning
There is also a some what in-between method, called Q-learning, that learns the $Q : \mathcal{S} \times \mathcal{A} \to \mathbb{R}$ functions:

1. Initialize: $Q(s, a) = 0, \forall s, a$
2. For each time step, sample $(s, a, r, s')$
3. Update: $Q(s, a) \leftarrow (1 - \alpha)Q(s, a) + \alpha(r + \gamma \max_{a'} Q(s', a'))$

where $\alpha$ is the learning/update rate. Step 2&3 are repeated until convergence or meeting some stopping criteria.

**Which action to take when?**
1. **Naive Algorithm:** At each time step, take $a = \text{argmax}_{a \in \mathcal{A}} Q(s, a)$, which only exploits, and makes no exploration.
2. **$\epsilon$-greedy:** With probability of $1 - \epsilon$, follows the naive way; with probability $\epsilon$, takes random actions.

**What if the state space is very large?**
Recall that we want to learn a function $Q$. When the state/action space is too large, we can approximate $Q$ using function approximators such as neural networks.

21-1

### Visual Description
Text-only slide.

---

## Page 2
### Content
21-2  
Lecture 21: November 20, 2019

![Figure 21.1: Example 1](figure_21_1.png)
**Figure 21.1: Example 1**

### 21.2 Graphical Models
#### 21.2.1 Task Definition
Graphical models are solving the following task:
* $m$ random variables: $X_1, \dots, X_m$
* Known joint distribution: $P(X_1, \dots, X_m)$
* Goal: compute marginals, $P(\{X_i\}_{i \in S \subset [m]})$, and conditionals, $P(\{X_i\}_{i \in S \subset [m]} | \{X_j\}_{j \in S' \subset [m]})$

**Example 1:**
Consider the example shown in Fig. 21.1,
* known: $P(W, R, S, E) = P(W|R, S)P(S|E)P(E)P(R)$
* Goal: e.g., $P(R = 1|W = 1)$ and $P(W = 1)$

The point of graphical models is that, with a graph structure, it is easier to marginalize a probability function by reducing the number of terms to summarize.

#### 21.2.2 Formal Definition
For any set $S \subseteq [m]$, let $X_S = \{X_i\}_{i \in S}$

**Directed Graphical Model:** $G = (V, E), V = [m], E$ are directed, $G$ is DAG, $P(X_{[m]}) = \prod_{i \in [m]} P(X_i | X_{parents(i)})$

**Undirected Graphical Model:** $G = (V, E), V = [m], e(C) \subseteq 2^{[m]}$ denotes the set of all maximal cliques in $G$. $P(X_r) = \frac{1}{Z} \prod_{c \in e(G)} \psi(X_c)$, where the denominator $Z$ is a normalization term, and $\psi$ is some "potential" function.

**Example 2:**
Consider the example shown in Fig. 21.2, we have:

### Visual Description
The page contains a directed acyclic graph (DAG) labeled Figure 21.1. The graph has four nodes: 'E' points to 'S', 'S' points to 'W', and 'R' points to 'W'.

---

## Page 3
### Content
Lecture 21: November 20, 2019  
21-3

![Figure 21.2: Example 2](figure_21_2.png)
**Figure 21.2: Example 2**

![Figure 21.3: Example 3](figure_21_3.png)
**Figure 21.3: Example 3**

$$e(G) = \{\{2, 3, 4\}, \{1, 2\}\}$$

$$P(X_1, \dots, X_4) = \frac{1}{Z} \psi(X_2, X_3, X_4) \psi(X_1, X_2)$$

#### 21.2.2.1 Conversion from directed to undirected graph models
Note that, we can convert any directed graphical models to undirected graphical models. This process will incur loss of structural inofrmation, but no loss of accuracy.

To convert a DGM to undirected graphs, for each node, we connect all its parent nodes, and remove directions from all edges, as shown in Fig. 21.3.

### Visual Description
The page contains two figures. 
Figure 21.2 is an undirected graph with four nodes: $X_1$ is connected to $X_2$; $X_2$ is connected to $X_3$ and $X_4$; $X_3$ and $X_4$ are connected to each other, forming a triangle with $X_2$.
Figure 21.3 shows a conversion process. On the left is a directed graph: $E \to S$, $S \to W$, and $R \to W$. An arrow points to the right, showing the converted undirected graph: $E-S$, $S-W$, $R-W$, and a new edge $S-R$ (moralization), with all arrows removed.

---

## Page 4
### Content
21-4  
Lecture 21: November 20, 2019

In this example, $\psi(W, R, S) \leftarrow P(W|R, S)P(R)$, and $\psi(E, S) \leftarrow P(S|E)P(S)$.

### Visual Description
Text-only slide.

---
==End of PDF==
