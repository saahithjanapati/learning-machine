# lecture-notes-16-MAB and RL

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/lecture-notes-16-MAB and RL.pdf`
Duplicate equivalents: `lecture-notes-16-MAB and RL.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 3

## Page 1
### Content
**10-715 Advanced Introduction to Machine Learning**  
**Fall 2019**  
**Lecture 20: November 18, 2019**  
**Lecturer: Nihar B. Shah**  
**Scribes: Xueying Ding, Yue Zhao**

**Note:** *LaTeX template courtesy of UC Berkeley EECS dept.*  
**Disclaimer:** *These notes have not been subjected to the usual scrutiny reserved for formal publications. They may be distributed outside this class only with the permission of the Instructor.*

---

### 20.1 Multi-armed Bandit
Suppose we have $k$ coins. For a coin $i$, $\mathbb{P}(\text{head}) = \mu_i$, and the probabilities of heads are independently distributed, with $\mu_1, \mu_2, \dots, \mu_k$ unknown. We denote "head" by 1, and "tail" by 0.

**Goals:**
i. Identify Coin with the highest $\mathbb{P}(\text{head})$, i.e., $\text{argmax}_{i \in [k]} \mu_i$, using fewest tosses as possible.
ii. OR Minimize $\text{Regret}(t) = T \cdot \max_{i \in [k]} \mu_i - \# \text{ of heads observed}$.

The basic algorithm for multi-armed bandit problem is:

**for** $j = 1, 2, 3, \dots, k$  
&nbsp;&nbsp;&nbsp;&nbsp;Toss coin $j$. Denote outcome as $y \in \{0, 1\}$  
&nbsp;&nbsp;&nbsp;&nbsp;Set $N_j = 1, H_j = y$  
**for** $t = k + 1, k + 2, \dots$  
&nbsp;&nbsp;&nbsp;&nbsp;$a \in \text{argmax}_{j \in [k]} \frac{H_j}{N_j}$  
&nbsp;&nbsp;&nbsp;&nbsp;Toss coin $a$. Denote outcome as $y \in \{0, 1\}$  
&nbsp;&nbsp;&nbsp;&nbsp;Update $N_a \leftarrow N_a + 1, H_a \leftarrow H_a + y$  
&nbsp;&nbsp;&nbsp;&nbsp;**if** some stopping criteria is met **then**  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(For goal i) output $\text{argmax}_{j \in [k]} \frac{H_j}{N_j}$  
&nbsp;&nbsp;&nbsp;&nbsp;**endif**

The above algorithm may not traverse all the possible coins. For example, suppose we have two coins. If the first coin has $\mu_1 = 0.6$, the second coin has $\mu_2 = 0.4$, however the first outcome for $H_1 = 0$ and $H_2 = 1$. Then the first coin never gets picked in the iterations and thus, we cannot identify the optimal coin.

The idea is that we need to combine exploitation with exploration. Exploitation suggests that we should pick the coin with some idea of good or better at any state, while exploration allows us to choose different options. There is always a trade-off between exploitation and exploration. The above algorithm only performs the exploitation step.

20-1

### Visual Description
Text-only slide.

---

## Page 2
### Content
20-2  
Lecture 20: November 18, 2019

#### 20.1.1 Upper Confidence Bound Based Algorithm
The modified algorithm to incorporate both the exploitation and exploration is commonly known as the Upper Confidence Bound Based Algorithm (UCB):

**for** $j = 1, 2, 3, \dots, k$  
&nbsp;&nbsp;&nbsp;&nbsp;Toss coin $j$. Denote outcome as $y \in \{0, 1\}$  
&nbsp;&nbsp;&nbsp;&nbsp;Set $N_j = 1, H_j = y$  
**for** $t = k + 1, k + 2, \dots$  
&nbsp;&nbsp;&nbsp;&nbsp;$a \in \text{argmax}_{j \in [k]} \left( \frac{H_j}{N_j} + \sqrt{\frac{2 \log t}{N_j}} \right)$  
&nbsp;&nbsp;&nbsp;&nbsp;Toss coin $a$. Denote outcome as $y \in \{0, 1\}$  
&nbsp;&nbsp;&nbsp;&nbsp;Update $N_a \leftarrow N_a + 1, H_a \leftarrow H_a + y$  
&nbsp;&nbsp;&nbsp;&nbsp;**if** some stopping criteria is met **then**  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(For goal i) output $\text{argmax}_{j \in [k]} \left( \frac{H_j}{N_j} + \sqrt{\frac{2 \log t}{N_j}} \right)$  
&nbsp;&nbsp;&nbsp;&nbsp;**endif**

Denote $\frac{H_j}{N_j} = \hat{\mu}_j$, and $\frac{H_j}{N_j} + \sqrt{\frac{2 \log t}{N_j}} = \mu_j^*$. Then $\mu_j^*$ is a right upper bound of $\hat{\mu}_j$.

### 20.2 Reinforcement Learning
Reinforcement learning is the problem faced by an agent that learns behavior through some good or bad outcomes in the unknown environment. [1] In these kinds of problems, we usually have a set of states $\mathcal{S}$ (where the agents are currently situated), a set of actions $\mathcal{A}$ that the agents can take, and some rewards $R : \mathcal{S} \times \mathcal{A} \to \mathbb{R}$.

$R(s, a)$ could be a scalar (deterministic), or a probability distribution over the reals (stochastic).

The **transition probabilities** $T : \mathcal{S} \times \mathcal{A} \times \mathcal{S} \to [0, 1]$. $T(s, a, s')$ is the probability of going to state $s'$ if taking action $a$ when in state $s$. This implies the Markov property.

**Goal:** Maximize the reward.

**$\infty$-horizon discounted reward:** Here given $0 \le \gamma \le 1$, our goal is to choose the sequence of actions that the agents take at various time steps, and we want
$$\max \mathbb{E} \sum_{t=0}^{+\infty} \gamma^t r_t$$
where $r_t$ is reward at time $t$. The time $t \in [0, +\infty)$ suggests the infinite horizon the reward. The reward is called discounted because $\gamma \in [0, 1]$, and when $t$ increases, $\gamma^t$ decreases.

#### 20.2.1 Markov Decision Process (MDP)
Usually in reinforcement learning problems, the $R$ and $T$ are unknown. However, we start with a simpler problem called Markov Decision Process (MDP), with known $R$ and $T$. Since there is no learning, this problem reduces to an optimization problem.

### Visual Description
Text-only slide.

---

## Page 3
### Content
Lecture 20: November 18, 2019  
20-3

We want to design a policy $\Pi$: a function $\mathcal{S} \to \mathcal{A}$, which can be random. The policy specifies what action the agent can take at a given state.

Since there is no learning involved, we can write down the optimal value if starting at state $s$:
$$V^*(s) = \max_{\Pi} \mathbb{E} \left[ \sum_{t=0}^{\infty} \gamma^t r_t \right]$$
$$= \max_{\Pi} \mathbb{E} \left[ r_0 + \gamma \sum_{t=0}^{\infty} \gamma^t r_{t+1} \right]$$
$$= \max_{a \in \mathcal{A}} \left[ \mathbb{E}[R(s, a)] + \gamma \sum_{s' \in \mathcal{S}} T(s, a, s') V^*(s') \right]$$

#### 20.2.2 Value Iteration
One way to find an optimal policy is to find the optimal value function, which can be determined by an iterative algorithm called value iteration. The algorithm is given as:

Initialize $V(s)$ arbitrarily, $\forall s$  
**DO** until some stopping criteria is met:  
&nbsp;&nbsp;&nbsp;&nbsp;**for** $s \in \mathcal{S}$  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**for** $a \in \mathcal{A}$  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$Q(s, a) = \mathbb{E}[R(s, a)] + \gamma \sum_{s' \in \mathcal{S}} T(s, a, s') V(s')$  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$V(s) = \max_a Q(s, a)$  
**Output:** $\Pi(s) = \text{argmax}_{a \in \mathcal{A}} Q(s, a), \forall s$

This algorithm is a gradient-descent like algorithm. We can interpret $Q(s, a)$ as the expected long term reward if taking action $a$ in state $s$, assuming $V$ is correct starting at the state $s$. Since the initial $Q(s, a)$ and $V$ may not be correct, we keep updating the $Q(s, a)$ and $V$ until some stopping criteria is met or until convergence.

The value iteration is usually done before the agent is employed. Since there is no learning here, this is also a MDP algorithm.

Notice that
$$Q(s, a) = \mathbb{E}[R(s, a)] + \gamma \sum_{s' \in \mathcal{S}} T(s, a, s') V(s')$$
is a full backup. A simple backup will replace the above function with:
$$Q(s, a) \leftarrow (1 - \alpha) Q(s, a) + \alpha \left( r + \gamma \max_{a'} Q(s', a') \right)$$
where $r$ is a random sample from $R(s, a)$ and $s'$ is sampled from $T(s, a, s')$.

### References
[1] L. KAELBLING, M. LITTMAN and A. MOORE, "Reinforcement Learning: A Survey," *Journal of Artificial Intelligence Research*, 1996, pp. 237–285.

### Visual Description
Text-only slide.
