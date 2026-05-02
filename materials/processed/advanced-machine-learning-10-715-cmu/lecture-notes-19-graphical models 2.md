# lecture-notes-19-graphical models 2

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/lecture-notes-19-graphical models 2.pdf`
Duplicate equivalents: `lecture-notes-19-graphical models 2.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 4

## Page 1
### Content
**10-715 Advanced Introduction to Machine Learning**  
**Fall 2019**  
**Lecture 22: November 25, 2019**  
*Lecturer: Nihar B. Shah*  
*Scribes: Jason Zhang and Jianing Yang*

**Note:** LaTeX template courtesy of UC Berkeley EECS dept.  
**Disclaimer:** These notes have not been subjected to the usual scrutiny reserved for formal publications. They may be distributed outside this class only with the permission of the Instructor.

### 22.1 Graphical Models
Recap from last time: we have random variables $X_1, \dots, X_m$ and joint distribution
$$\mathbb{P}(X_1, \dots, X_m) = \frac{1}{Z} \prod_{c \in \mathcal{C}} \psi_c(X_c).$$
We want to compute the marginal distributions $\mathbb{P}(X_i) \quad \forall i \in [m]$.

Where does this structure arise:
* Directed $\rightarrow$ Undirected graphical models
* $X_1, \dots, X_m$ are unknown parameters drawn iid from $\text{Unif}(\mathcal{X})$. We have data that is a noisy function of $X_i$'s, and want to estimate the $X_i$'s from this data. Applications: error correcting codes or telecommunication where we want to recover the original message.
  We can use MAP to compute $\mathbb{P}(X_i) \quad \forall i \in [m]$ as well as quantify the certainty.
  $$\begin{aligned} \mathbb{P}(X_1, \dots, X_m \mid \text{data}) &= \frac{\mathbb{P}(\text{data} \mid X_1, \dots, X_m)\mathbb{P}(X_1, \dots, X_m)}{\mathbb{P}(\text{data})} \\ &= \frac{1}{Z} \prod_{c \in \mathcal{C}} \psi_c(X_c) \end{aligned}$$
* Specify certain independence properties. Consider any disjoints sets $S_1, S_2, S_3 \subseteq [m]$. If all paths from any vertex in $S_1$ to any vertex in $S_2$ must pass through at least one vertex in $S_3$, then $X_{S_1} \perp \perp X_{S_2} \mid X_{S_3}$.

#### 22.1.1 Sum-Product Algorithm
The Sum-Product algorithm computes the marginal distributions for a graphical model. Suppose graph $\mathcal{G}$ is a tree. Then, each max clique is an edge and vice-versa.

**Intuition:** (Refer to Figure 22.1)
$$\mathbb{P}(X_{[m]}) = \frac{1}{Z} \psi_{12}(X_1 X_2) \psi_{23}(X_2 X_3) \psi_{24}(X_2 X_4) \dots$$

### Visual Description
Text-only slide.

---

## Page 2
### Content
22-2 Lecture 22: November 25, 2019

![Figure 22.1: A Simple Tree.](figure_22_1.png)
**Figure 22.1: A Simple Tree.**

Since $X_1$ is a leaf, the only term with $X_1$ is $\psi_{12}(X_1 X_2)$. Thus, we can marginalize out $X_1$ by summing over values of $X_2$:
$$\begin{aligned} \sum_{X_1} \mathbb{P}(X_{[m]}) &= \frac{1}{Z} \left( \sum_{X_1} \psi_{12}(X_1 X_2) \right) \psi_{23}(X_2 X_3) \psi_{24}(X_2 X_4) \dots \\ &= \frac{1}{Z} M_{12}(X_2) \psi_{23}(X_2 X_3) \psi_{24}(X_2 X_4) \dots \end{aligned}$$
Once we marginalize out the leaf $X_3$:
$$\sum_{X_3} \sum_{X_1} \mathbb{P}(X_{[m]}) = \frac{1}{Z} M_{12}(X_2) M_{32}(X_2) \psi_{24}(X_2 X_4) \dots$$
$X_2$ also becomes a leaf, and so on.

**Sum-Product Algorithm:**
Let $N(v)$ denote all neighbors of $v$.
**loop**
  **for** $u \in [m]$ and $v \in N(u)$ **do**
    **if** $u$ has received messages from all $N(u) \setminus \{v\}$ **then**
      $$M_{uv}(X_v) = \sum_{X_u} \psi(X_u X_v) \prod_{w \in N(u) \setminus \{v\}} M_{wu}(X_u)$$
      Pass message $M_{uv}(X_v)$ to $v$
    **end if**
  **end for**
  **if** All nodes have received messages from all of their neighbors **then**
    **break**
  **end if**
**end loop**
Compute
$$\mathbb{P}'(X_u) \propto \prod_{v \in N(u)} M_{vu}(X_u) \quad \forall u \in V$$

### Visual Description
A diagram of a simple tree graph with four nodes labeled $X_1, X_2, X_3, X_4$. Node $X_2$ is the central hub, connected to $X_1$ above it, $X_3$ to its bottom-left, and $X_4$ to its bottom-right. Ellipses indicate the tree continues beyond $X_4$.

---

## Page 3
### Content
Lecture 22: November 25, 2019 22-3

**Output**
$$\mathbb{P}(X_u) = \frac{\mathbb{P}'(X_u)}{\sum_{X_u} \mathbb{P}'(X_u)} \quad \forall u \in V$$

Given a general graph instead of tree:
* **Junction tree algorithm:** computes exact marginals. Joint distribution is a function of the cliques, so we can group cliques into random variables until you have a tree.
* **Loopy belief propagation:** computes approximate marginals. Similar idea to sum-product algorithm run directly on the graph.

### 22.2 Fairness
**Approach:** Penalize/constrain algorithms towards more equitable decisions.

**Task settings:**
Set of People (e.g. loan applicants). Each person belongs either group 1 or group 2.

**Algorithm:**
- Take profile of a person as input
- Estimate if person is worthy of loan ("+") or not ("-")
- Output number in $[0, 1]$ which is estimate of $\mathbb{P}(\text{person is } +)$

We want to make algorithm both fair and accurate.

Consider the following three conditions:
1. **Balance for positive class:** Average score received by true "+" people in group 1 = in group 2.
2. **Balance for negative class:** same as above for "-" people.
3. **Well-calibrated:** If algorithm outputs $Z \in [0, 1]$ on average for a set of people then fraction of people who are truly positive in this set should be $Z$.

**Theorem 22.1** *No algorithm can achieve these 3 conditions simultaneously, unless it can perfectly identify positive from negative.*

**Proof:** Assume group 1 and 2 each has $N$ people. There are $\mu_1$ positives in group 1 and $N - \mu_1$ negatives in group 1; there are $\mu_2$ positives in group 2 and $N - \mu_2$ negatives in group 2. $\mu_1 \neq \mu_2$.

Let
$$\begin{aligned} a &= \text{the average score for people in "1 +" } & (22.1) \\ &= \text{the average score for people in "2 +" } & (22.2) \\ b &= \text{the average score for people in "1 -" } & (22.3) \\ &= \text{the average score for people in "2 -" } & (22.4) \end{aligned}$$
(22.5)

### Visual Description
Text-only slide.

---

## Page 4
### Content
22-4 Lecture 22: November 25, 2019

We have
$$a\mu_1 + b(N - \mu_1) = \mu_1 \quad (22.6)$$
$$a\mu_2 + b(N - \mu_2) = \mu_2 \quad (22.7)$$
(22.8)

With some algebra, we have
$$a(\mu_1 - \mu_2) - b(\mu_1 - \mu_2) = \mu_1 - \mu_2 \quad (22.9)$$
$$a - b = 1 \quad (22.10)$$

Since $a \in [0, 1]$ and $b \in [0, 1] \implies a = 1, b = 0 \implies$. The classifier must perfectly identify positives from negatives.
$\blacksquare$

### Visual Description
Text-only slide.

---
