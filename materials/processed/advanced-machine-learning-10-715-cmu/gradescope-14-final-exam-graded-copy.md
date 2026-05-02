# gradescope-14-final-exam-graded-copy

Source: `materials/archive/advanced-machine-learning-10-715-cmu/gradescope-graded-copies/gradescope-14-final-exam-graded-copy.pdf`
Duplicate equivalents: `gradescope-14-final-exam-graded-copy.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `MIXED`
Pages: 30

## Page 1
### Content
**Final Exam**
**Graded**

**Student**
Saahith Janapati

**Total Points**
138 / 195 pts

**Question 1**
Neural Networks **30 / 30 pts**

**1.1 1.a 10 / 10 pts**
*   **- 0 pts Correct:**
    No; with 2 neurons, there are only $2^2 = 4$ possible outputs from the hidden layers, meaning that for a fixed set of weights, only four possible outputs are possible, and so is unable to represent the identity function.
*   **- 7 pts** Incorrect
*   **- 5 pts** No explanation given
*   **- 0.2 pts** Prediction cannot reach a close estimation

**1.2 1.b 10 / 10 pts**
*   **- 0 pts Correct:**
    No; with $m$ neurons, there are only $2^m$ possible outputs from the hidden layers; this neural network can only perfect learn functions with less than $2^m$ possible points in its range, which prevents it from learning the identity function.
*   **- 7 pts** Incorrect

**1.3 1.c 10 / 10 pts**
*   **- 0 pts Correct:**
    No matter what the output activation is, it will map at most $2^m$ points to another $2^m$ points; one point cannot be mapped to two outputs. Therefore, as before, it cannot learn the identity function as it contains more than $2^m$ points in its range.
*   **- 7 pts** Incorrect

### Visual Description
Text-only slide.

---

## Page 2
### Content
**Question 2**
Rock, Paper, Scissors **30 / 30 pts**

*   **- 0 pts Correct:**
    You could model this problem through a multi-armed bandit framework. Arms represent each potential action you take (e.g., rock, paper, and scissor). At each timestep, you select one arm, which corresponds to one action, and receive a reward dependent on what the opposing player selects. Specifically, if you play rock and the opponent plays scissors, you receive reward 1, if both play rock, you receive 0.5, and if the opponent plays paper, you receive 0. Similar reward structures apply for playing paper or scissors. Over time, these rewards accumulate, and you get a better sense for the value of each arm.
    The key reason this framework works here is that the opponent's strategy is iid with fixed probabilities $\nu_R, \nu_P, \nu_S$. This means each arm has a stationary expected reward. For example, the expected reward for playing rock is $0.5\nu_R + 1\nu_S + 0\nu_P = 0.5\nu_R + \nu_S$, which remains constant over time.
    You can use algorithms such as UCB to solve such a problem, which iteratively selects arms based on an exploitation and exploration factor.
    If the opponent were strategic and adapted their strategy based on your actions (not iid), then the expected reward for each arm would change over time, violating the stationarity assumption of the MAB framework, and this approach would fail.

*   **- 2 pts** Missing an explicit mention of the relevant framework from class such as "multi-armed bandits" or "reinforcement learning"
*   **- 7 pts** Missing the specific details for setting up the problem (e.g., not specifying the actions, the reward values, etc)

### Visual Description
Text-only slide.

---

## Page 3
### Content
**Question 3**
Graphical Models **15 / 20 pts**

**3.1 3.a 8 / 10 pts**
*   **- 0 pts Correct:**
    Picture of Collider graph; talent (T) and attractiveness (A) have two outward edges into node S (for selected for Figure 1)
    (1) Yes, the directed graphical model can successfully model the joint distribution for this problem. Here, for the directed graph, because talent and attractiveness are marginally independent, they don't require an edge.
    (2a) Yes, T and A will always be unconditionally independent.
    (2b) No, since the edge weights can be 0 leaving T and A uncorrelated.
*   **- 0.5 pts** (Very minor error) The edges A -> S and T -> S in the directed graph does not enforce that T is dependent on A, as the edge weight can be 0 (or missing answer to this part).
*   **- 2 pts** T and A will always be unconditionally independent.
*   **- 2 pts** The directed graphical model can successfully model the joint distribution for this problem.
*   **- 3 pts** Missing answer to part (2)
*   **- 3 pts** Graph is incorrect
*   **- 0.5 pts** Very minor error (see comments)

**3.2 3.b 7 / 10 pts**
*   **- 0 pts Correct:**
    For undirected graph, make
    Picture of a fully-connected graph (triangle).
    (1) Yes, a fully-connected undirected graphical model can successfully model any joint distribution over the variables.
    (2b) No, T and A can be dependent on each other.
    (2b) No, T and A conditioned on S do not have to be dependent on each other
*   **- 3 pts** T and A can be dependent on each other
*   **- 1 pt** T and A are not necessarily conditionally dependent on each other.
*   **- 3 pts** Incorrect graph.
*   **- 5 pts** Missing answer to part 2

### Visual Description
Text-only slide.

---

## Page 4
### Content
**Question 4**
Sliding Window Attention **43 / 55 pts**

**4.1 4.a 7 / 15 pts**
*   **- 0 pts Correct:**
    We first compute the memory complexity. Here, we have $h$ heads for each attention matrix; each head consists of $T$ rows, with at most $s$ non-zero items. Therefore, if we take the sparsity of $A$ into account, this would add up to storing $O(hTs)$ values at the end.
    We next compute the memory cost for computing $Q_i K_i^T$.
    We note that both have $T$ rows, but that, at the end, only $s$ non-zero values matter (according to $M$); therefore, for each of the $T$ rows, we need to store $s$ values, which when summed across $h$ heads, gives us the same $O(hTs)$ computational complexity for memory.
    Next, we compute the computational complexity per-head, then sum across all $h$ heads.
    There are $Ts$ elements of $A$ we need to compute (per head).
    Each element is the inner-product of two $d/h$ length vectors, and the inner product of two $d/h$ length vectors takes $O(d/h)$ time.
    Therefore, computing this across all elements and heads gives us a total time complexity of $O(Tsd)$.
*   **- 4 pts** Wrong memory complexity
*   **- 4 pts** Wrong computation complexity
*   **- 1 pt** Did not mention per head
*   **- 2 pts** Mistake in taking into account heads
*   **- 1 pt** Slight error in time complexity
*   **- 15 pts** Missing
*   **- 4 pts** Dimension error in K

### Visual Description
Text-only slide.

---

## Page 5
### Content
**4.2 4.b 11.5 / 15 pts**
*   **- 0 pts Correct:**
    We first note that $A_i$ is a $T \times T$ matrix, and $V_i$ is a $T \times d/h$ matrix.
    Each row of $A_i$ has $s$ non-zero entries, and those $s$ entries are multiplied with the $d/h$ columns of $V_i$.
    That is, the total time complexity would be $O(Tsd/h)$ because each pair of column in $V_i$ and row in $A_i$ takes $s$ time.
    Summing over heads gives $O(Tsd)$.
    Similarly, the memory per-head would be the cost of storing each matrix, which would be $O(Td/h)$; multiplied by $h$ heads gives the memory complexity is also $O(Td)$.
    We assume that we already stored the $A_i$ so that adds no cost
*   **- 1 pt** Need to compute memory and computational complexity for all heads. Therefore, needed to multiply by 'h' term.
*   **- 1 pt** Error in dimension of V_i
*   **- 2.5 pts** Error in memory computation.
*   **- 2.5 pts** Error in computational complexity
*   **- 0.5 pts** Minor error
*   **- 5 pts** Not considered sparse nature of matrix.
*   **- 5 pts** Error
*   **- 5 pts** Missing memory computation
*   **V_i is T x d/h not T x d.**

**4.3 4.c 15 / 15 pts**
*   **- 0 pts Correct:**
    At the first layer, each token can see the previous $s - 1$ tokens.
    At the second layer, each token can now see not only its previous $s - 1$ tokens, but also the $s - 1$ tokens preceding that.
    For example, if $s = 3$, then at layer 1, we can see tokens 5, 6, 7 (for token 7).
    Then in layer 2, we can see tokens 5, 6, 7 from layer 1, while 5 can see 3 in layer 2.
    Each layer increases the total amount that can be seen by $s - 1$, totaling to $D(s - 1)$ across all $D$ layers.
    The answer is $D(s - 1)$ if counting the number of previous positions that can influence the current token, or $D(s - 1) + 1$ if counting the total number of positions (including the current token itself).
    We accept both answers with appropriate justification.
*   **- 3 pts** Logical/Mathematical Error
*   **- 7 pts** Error
*   **- 1 pt** Minor error
*   **- 10 pts** Major Error
*   **- 15 pts** Missing/Incorrect

### Visual Description
Text-only slide.

---

## Page 6
### Content
**4.4 4.d 9.5 / 10 pts**
*   **- 0 pts Correct:**
    For each token, you would need to store the previous $s - 1$ tokens (and itself).
    The KV-cache stores the keys and values for these $s$ tokens, and each key/value costs $d/h$ per-head.
    Summing over heads gives $2ds$ total values to store.
    If considering a $D$ layer transformer, each layer would have its own KV cache, so you would have $2Dds$ elements. Note: you cannot have a shared cache across layers here.
*   **- 2 pts** Did not account for the number of elements the cache tensors need to store, i.e., each key/value costs d/h per-head, hence summing over heads gives 2ds total elements.
*   **- 2 pts** Logical Error / missing final value
*   **- 1 pt** Did not account for current token
*   **- 0.5 pts** V_i is T x d/h not T x d
*   **- 1 pt** Expected a value in terms of d and s, not a bound
*   **- 0.5 pts** Minor error
*   **- 1 pt** Minor logical error
*   **- 10 pts** Missing/Incorrect

### Visual Description
Text-only slide.

---

## Page 7
### Content
**Question 5**
Diffusion Models **20 / 60 pts**

**5.1 5.a 5 / 15 pts**
*   **- 0 pts Correct:**
    $$q(\mathbf{x}_1 | \mathbf{x}_0) = \mathcal{N}(\mathbf{x}_1; \sqrt{1-\beta_1}\mathbf{x}_0, \beta_1 \mathbf{I})$$
    $$\mathbf{x}_1 = \sqrt{1-\beta_1}\mathbf{x}_0 + \mu_0, \text{ where } \mu_0 \sim \mathcal{N}(\mu_0; \mathbf{0}, \beta_1 \mathbf{I})$$
    $$q(\mathbf{x}_2 | \mathbf{x}_1) = \mathcal{N}(\mathbf{x}_2; \sqrt{1-\beta_2}\mathbf{x}_1, \beta_2 \mathbf{I})$$
    $$\mathbf{x}_2 = \sqrt{1-\beta_2}\mathbf{x}_1 + \mu_1, \text{ where } \mu_1 \sim \mathcal{N}(\mu_1; \mathbf{0}, \beta_2 \mathbf{I})$$
    Therefore,
    $$\mathbf{x}_2 = \sqrt{1-\beta_2}\mathbf{x}_1 + \mu_1 = \sqrt{1-\beta_2}(\sqrt{1-\beta_1}\mathbf{x}_0 + \mu_0) + \mu_1$$
    $$= \sqrt{1-\beta_2}\sqrt{1-\beta_1}\mathbf{x}_0 + \underbrace{\sqrt{1-\beta_2}\mu_0 + \mu_1}_{\mathcal{N}(\mathbf{0}, (1-\beta_2)\beta_1 + \beta_2 \mathbf{I})}$$
    $$(1-\beta_2)\beta_1 + \beta_2 = \beta_1 + \beta_2 - \beta_1\beta_2 = 1 - (1-\beta_1)(1-\beta_2)$$
    Therefore, $q(\mathbf{x}_2 | \mathbf{x}_0) = \mathcal{N}(\mathbf{x}_2; \sqrt{1-\beta_2}\sqrt{1-\beta_1}\mathbf{x}_0, (1 - (1-\beta_1)(1-\beta_2))\mathbf{I})$
    Using induction, we can see that $q(\mathbf{x}_T | \mathbf{x}_0) = \mathcal{N}(\mathbf{x}_T; (\prod_{t=1}^T \sqrt{1-\beta_t})\mathbf{x}_0, (1 - (\prod_{t=1}^T (1-\beta_t)))\mathbf{I})$

*   **- 4 pts** Did not check base case
*   **- 4 pts** Incorrect simplification of \epsilon terms
*   **- 15 pts** No answer
## Page 9
### Content
5.3 **5.c** 15 / 15 pts

$\checkmark$ **- 0 pts** Correct:

**Answer:** Fix $x \in [a, b]$. For small $h \neq 0$ we have
$$\left| \frac{f(x+h) - f(x)}{h} \right| = \frac{|f(x+h) - f(x)|}{|h|} \leq C \frac{|h|^\gamma}{|h|} = C|h|^{\gamma-1}.$$
Because $\gamma > 1$, we have $|h|^{\gamma-1} \to 0$ as $h \to 0$. Thus
$$\lim_{h \to 0} \frac{f(x+h) - f(x)}{h} = 0,$$
so $f'(x)$ exists and equals 0.
Since $x$ was arbitrary, $f'(x) = 0$ for all $x \in [a, b]$.
Hence $f(y) = f(x)$, so $f$ is constant on $[a, b]$.

**- 4 pts** Does not show that $f'(x) = 0$ for all $x \in [a, b]$
**- 6 pts** Does not show that for small $h \neq 0$, $\frac{|f(x+h)-f(x)|}{|h|} \leq C|h|^{\gamma-1}$
**- 15 pts** Incorrect/Missing

### Visual Description
A screenshot of a graded online assignment interface (Gradescope). The main answer is written in red text within a box. Grading rubrics with point deductions are listed below the answer box.

---
## Page 10
### Content
**CMU 10-715 Fall 2025: Final Exam**

**Name:** Sauhith Janapati
**Andrew ID:** sjanapat

**Here is a hitchhiker’s guide to this final:**
* This is an 180 minute exam during the final exam block, from 1:00 PM to 4:00 PM.
* You are **NOT** allowed to refer to notes, homework solutions, the textbook, lecture videos or any other outside resources.
* You are **NOT** allowed to discuss the exam with anyone in the duration of the exam.
* We suggest taking a brief look at all questions first and then starting to answer them. You may find some questions easier than others.
* For each question, if not specified, assume the following:
    - Binary classification with $\mathcal{Y} = \{-1, 1\}$
    - i.i.d. assumption

**Distribution of Marks**
| Question | Points | Score |
| :---: | :---: | :---: |
| **1** | 30 | - |
| **2** | 30 | |
| **3** | 20 | |
| **4** | 55 | |
| **5** | 60 | |
| **Total:** | 195 | |

### Visual Description
The cover page of a final exam paper. It includes the course title, fields for the student's name and Andrew ID (filled in by hand), a list of exam rules and assumptions, and a table for the distribution of marks across five questions.

---
## Page 11
### Content
### 1) Neural Networks [30 pts]

Consider a neural network $\mathcal{X} \to \mathcal{Y}$, where $\mathcal{X} = \mathbb{R}$ and $\mathcal{Y} = \mathbb{R}$. The neural network has one hidden layer with $m$ neurons. Consider the function $f : \mathbb{R} \to \mathbb{R}$ as simply the identity function $f(x) = x$.

a) [10 pts] Suppose the hidden layer consists of $m = 2$ neurons, each with the sign function as its activation function. Suppose the neuron in the output layer has the identity activation function. In this case, can the aforementioned neural network architecture *exactly* represent this function $f$? Please justify your answer.

**Handwritten Answer:**
[Diagram of a neural network with 1 input node, 2 hidden nodes with weights $w_a, w_b$, and 1 output node with weights $w_c, w_d$ from the hidden layer.]

$sign(w_a x + b_1) + sign(w_b x + b_1) = x$ [Note: student likely meant $w_c sign(w_a x + b_1) + w_d sign(w_b x + b_2) = x$]

No. Since the activation function for the hidden layer nodes is sign, their outputs are constrained to $\{-1, 1\}$. So, the only possible outputs of the network are:
$-(w_c) + (w_d)$
$+(w_c) + (w_d)$
$-(w_c) - (w_d)$
$+(w_c) - (w_d)$

So, we cannot represent identity for $\mathbb{R}$.

Page 2

### Visual Description
An exam page containing a printed question about the representational power of a simple neural network with sign activations. Below the question is a handwritten response that includes a small network diagram and a logical justification for why the network cannot represent the identity function.

---
## Page 12
### Content
b) [10 pts] Now, suppose there are $k$ hidden layers, each with $m$ neurons, where $m$ and $k$ can be chosen however you would like, as long as it is finite. The activation function is still the sign function for hidden neurons and the identity function for the output neuron. Can this neural network architecture *exactly* represent the identity function $f$? Please justify your answer.

**Handwritten Answer:**
No. We still have a finite set of nodes in the last hidden layer before the output layer, that can only output $\{-1, 1\}$.

The output node value then must be in $S = \{ x \text{ where } x = \sum_{i=1}^N (w_i) \pm 1 \}$, where $w_i$ is the weight connecting neuron $i$ in last hidden layer to output layer.

Note, $|S| \leq 2^N$, where $N$ is number of nodes in hidden layer. So $2^N < |\mathbb{R}|$, so we still can't represent identity function.

Page 3

### Visual Description
An exam page with a printed question (part b) continuing from the previous page. It asks if adding more hidden layers with sign activations allows the network to represent the identity function. The handwritten response argues that the output space remains finite and thus cannot represent the continuous identity function on $\mathbb{R}$.

---
## Page 13
### Content
c) [10 pts] Finally, consider a scenario where you can set the output activation to be any function. Is there a choice of output activation function so the neural network architecture in part (b) exactly represents this function $f$? Why or why not? Please justify your answer.

**Handwritten Answer:**
No. Regardless of the output activation $\sigma$ function, the output of $NN(x), x \in \mathbb{R}$ will lie in $\sigma(S)$ (where $S$ is same defn. as previous question), and since $\sigma(S)$ is a function, we know $|\sigma(S)| \leq |S| \leq 2^N$ where $N$ is number of nodes in last hidden layer. So, we can't cover all of $\mathbb{R}$.

Page 4

### Visual Description
An exam page with a printed question (part c) asking if a custom output activation function would change the result. The handwritten response explains that even with a custom output activation, the range of the network remains finite because the input to the output activation comes from a finite set of possible values.

---
## Page 14
### Content
### 2) Rock, Paper, Scissors [30 pts]

A hot topic of research and practice is settings where there are multiple, possibly competing agents. In this question, you will model a simple instantiation of such a setting. Suppose there are two agents, one that you control and another agent that is a competitor. The two agents compete in a game of repeated rock paper scissors. In each round, both agents play rock paper scissors — they both simultaneously and independently make a choice between “rock,” “paper,” and “scissors.” If both make the same choice, both get half a point. Otherwise rock beats scissors, scissors beats paper, paper beats rock — the winner in the round gets 1 point and the loser gets 0 points. Both agents keep playing rounds of rock paper scissors for a long time. The goal of your agent is to accumulate as many points as possible.

Also suppose that the opposite agent has some values $v_R, v_P, v_S$ in $[0, 1]$, such that (i) they sum to 1, (ii) in each round, the opposite agent chooses rock with probability $v_R$, paper with probability $v_P$, and scissors with probability $v_S$, (iii) the opposite agent’s choices are independent and identically distributed in each round, and (iv) you have no idea about the values of $v_R, v_P, v_S$.

How will you go about solving this problem? Describe the specific paradigm you would use to model the problem, why such a paradigm would work in this scenario, and how you would set up the problem within this paradigm. You don’t need to solve the problem or ensure any optimality of your approach — just discuss conceptually how you would go about modeling and solving it.

Hint: The key in developing this framework is that the opposite agent is i.i.d. each round and is not strategic.

**Handwritten Answer:**
I can model this as a multi-arm bandit problem.
Let $r_t$ be reward for round $t$.
If I play rock for round $t$, $\mathbb{E}[r_t | rock] = 0.5 v_R + 1 v_S = \mu_{rock}$
If I play paper for round $t$, $\mathbb{E}[r_t | paper] = 0.5 v_P + 1 v_R = \mu_{paper}$
If I play scissors for round $t$, $\mathbb{E}[r_t | scissors] = 0.5 v_S + 1 v_P = \mu_{scissors}$

Note that the expected per-round reward conditioned on choice is a constant (i.e. doesn't depend on round). Thus, we can use the UCB algorithm to balance exploration and exploitation to estimate $\mu_{rock}, \mu_{paper}, \mu_{scissors}$ and exploit to maximize the reward. As our estimates stabilize, our algorithm will exploit the move that yields the [highest] expected per-round reward, thus satisfying the goal of accumulating as many points as possible.

Page 5

### Visual Description
An exam page with a printed question about modeling a non-strategic opponent in Rock, Paper, Scissors. The handwritten response identifies the problem as a Multi-Armed Bandit problem and suggests using the UCB algorithm, providing the expected reward calculations for each move.

---
## Page 15
### Content
Page 6

### Visual Description
Text-only slide. This page is blank except for the page number "Page 6" at the bottom.

---
## Page 16
### Content
### 3) Graphical Models [20 pts]

In this question, we will study a paradox known as Berkson’s paradox. Let us first describe this using an example that is most commonly used for it. Consider two attributes of any individual — talent and attractiveness. It has often been measured that talent and attractiveness have the following relationship (figures taken from Wikipedia), where each dot is a person:

[Scatter plot 1: Talent vs Attractiveness showing a negative correlation]

This suggests that talent and attractiveness are anti-correlated. However, some other studies put forward this plot

[Scatter plot 2: Talent vs Attractiveness showing no correlation]

which suggests there is no correlation. So what is going on? The initial study looked at “famous people”. The second figure pertains to the general population [unreadable] becomes famous if there is talent and/or attractiveness, and hence the first figur[e] [unreadable] top-right slice of the second figure. This selection bias leads to the false concl[usion] [unreadable] the first study that talent and attractiveness are anti-correlated.

Page 7

### Visual Description
An exam page introducing Berkson's paradox using the example of talent vs. attractiveness. It features two scatter plots: the first shows a negative correlation in a selected group, and the second shows no correlation in the general population. The text explains that selection bias (looking only at famous people) creates the illusion of negative correlation. Some text on the right margin is cut off.

---
## Page 17
### Content
In this question, you are asked to model this scenario using graphical models. Consider three nodes - talent (call it T), attractiveness (call it A), and "selected for figure 1" (call it S). Throughout this problem, we shall assume that talent and attractiveness are (unconditionally) independent.

a) [10 pts] Construct a **directed** graphical model to capture this setting with the three variables T, A and S. Then explain whether 1) there exists a choice of potential functions over the graph such that the model realizes the true joint distribution over talent, attractiveness, and selection, and 2) whether **all possible** choices of potential functions on the graph enforce the marginal independence of talent and attractiveness, and the dependence of talent on attractiveness when conditioned on selectivity.

[Student's hand-drawn directed graph: A box containing nodes T and A, both with arrows pointing to node S.]

1) No, there does not exist a choice of potential function because we don't model the dependence of talent on attractiveness when conditioned on selectivity.

2) No,

Page 8

### Visual Description
The page contains a printed exam question about directed graphical models. A student has hand-drawn a directed graph where nodes 'T' (talent) and 'A' (attractiveness) both have arrows pointing to node 'S' (selection). Below the graph, the student has handwritten answers to parts 1 and 2. There is a small, unrelated sketch of an undirected graph in the upper right and a "Page 8" stamp at the bottom with a decorative illustration.

---
## Page 18
### Content
b) [10 pts] Construct an **undirected** graphical model to capture this setting with the three variables T, A and S. Then explain whether 1) there exists a choice of potential functions over the graph such that the model realizes the true joint distribution over talent, attractiveness, and selection, and 2) whether **all possible** choices of potential functions on the graph enforce the marginal independence of talent and attractiveness, and the dependence of talent on attractiveness when conditioned on selectivity.

[Student's hand-drawn undirected graph: Nodes T, A, and S connected in a triangle.]

1) Yes, all the nodes are connected so we can model true joint distribution (including dependencies).

2) Yes.

Page 9

### Visual Description
The page contains a printed exam question about undirected graphical models. A student has hand-drawn an undirected graph where nodes 'T', 'A', and 'S' are all connected to each other, forming a triangle. Below the graph, the student has handwritten "Yes" for both parts 1 and 2, with a brief explanation for part 1. A "Page 9" stamp is at the bottom.

---
## Page 20
### Content
Page 11

### Visual Description
This is a blank page with only the text "Page 11" printed at the bottom center.

---
## Page 19
### Content
4) Sliding Window Attention [55 pts]

Consider a variant of attention where instead of computing a fully lower-triangular attention matrix, at each head, we form a sparse attention matrix of the following form

$$A = \begin{bmatrix} \bullet & 0 & 0 & \dots & 0 \\ \bullet & \bullet & 0 & \dots & 0 \\ \bullet & \bullet & \bullet & \dots & 0 \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 0 & \dots & \bullet & \dots & \bullet \\ 0 & 0 & \dots & \dots & \bullet \end{bmatrix}, \quad A_{ij} = \begin{cases} \bullet, & 0 \le i - j \le s - 1, \\ 0, & \text{otherwise.} \end{cases}$$

i.e., the $s$ lower diagonals (including the main diagonal) are non-zero, but everything else is zero. In practice, this would correspond to using a masking matrix $M$ inside the softmax of the corresponding form with $-\infty$ for the zero entries and $0$ for the non-zero entries.

a) [15 pts] In terms of $s$ (sliding window size), $T$ (sequence length), $d$ (embedding dimension) and $h$ (number of heads), what is the memory and computational complexity of forming the attention matrices
$$A_i = \text{softmax}(Q_i K_i^T - M)$$
for all heads $i = 1, \dots, h$. You can assume that the computational complexity matrix multiplication of $m \times n$ and $n \times p$ matrices is $O(mnp)$ and memory complexity is $O(mn + np)$. You can assume you only need to form and store the non-zero entries of the matrix (i.e., you don't need to worry about the practical efficiency of computing only some entries). Please justify your answer.

Note, each entry in $A_i$ is product of $Q$ vector $(1 \times d)$ and $K$ vector $(d \times 1)$. Assuming there are $\sim s$ non-zero entries in each row $A_i$ and $T$ total rows, we have,
compute complexity: $O((1 \times d)(d \times 1) \cdot s \cdot T \cdot h) = O(d \cdot s \cdot T \cdot h)$
Memory complexity: $O((1d) + (d) \cdot s \cdot T \cdot h) = O(d \cdot s \cdot T \cdot h)$ - assuming you're doing all the operations at once.

Page 10

### Visual Description
The page contains a printed exam question about "Sliding Window Attention". It includes a mathematical definition of a sparse attention matrix $A$. A student has handwritten a derivation for the computational and memory complexity of forming these matrices, concluding with $O(d \cdot s \cdot T \cdot h)$ for both. A "Page 10" stamp is at the bottom.

---
## Page 21
### Content
b) [15 pts] What is the memory and computational complexity of computing the attention-value products $A_i V_i$ again for all heads $i = 1, \dots, h$. You can similarly assume that you only need to pay the computational cost of multiplying by the non-zero entries. Do not worry about the memory cost of storing $A_i$ or $V_i$. Please justify your answer.

$V_i \to (T \times d)$
$A_i \to (T \times T)$

Note that each output row in the final $T \times d$ matrix is the result of multiplying a $(1 \times s)$ vector from the sparse attention matrix, with $(s \times d)$ matrix in $V_i$.

Computational Complexity:
Each head $O((1)(s)(d) \cdot (T) \cdot h) = O(sdTh)$

Memory Complexity:
$O(((1s) + (sd)) \cdot T \cdot h) = O((s + sd)Th)$ (assuming you're doing all the operations at once). If you were not, drop the $Th$.

Page 12

### Visual Description
The page contains part (b) of the sliding window attention question. A student has handwritten a justification and formulas for computational and memory complexity. There are sketches of matrices showing the multiplication process. The final answers are boxed: $O(sdTh)$ for computational complexity and $O((s + sd)Th)$ for memory complexity. A "Page 12" stamp is at the bottom.

---
## Page 22
### Content
c) [15 pts] Assume you use this sliding window attention in a $D$ layer transformer. What is the effective length of the context window for this network, i.e., how far back in a sequence can there be some degree of influence in predicting the next token? Please justify your answer.
Hint: Try a finite case, (e.g., $D = 2$ with $s = 3$) and write out the attention at every layer.

[Student's hand-drawn diagram showing layers of a transformer and how connections expand the receptive field.]
Note, in the diagram above, after 2 layers, the token rep. for mat (pos 6) has signal from layer 1 token rep on (pos(3)), which has signal from input token cat (pos 2). So, eff context width 5.

Each layer, you seem to increase effective context window by $(s-1)$. So
eff. context window $= s + \sum_{i=2}^D (s-1)$

Page 13

### Visual Description
The page contains part (c) of the sliding window attention question. A student has drawn a diagram with nodes representing tokens across different layers, showing how the "receptive field" or context window grows. Below the diagram, the student explains the growth and provides a formula: $s + \sum_{i=2}^D (s-1)$. A "Page 13" stamp is at the bottom.

---
## Page 23
### Content
d) [10 pts] If you were to implement a KV-cache for sliding window attention, to generate tokens sequentially, how many elements would the cache tensors need to store in order to generate the same results as if you re-parsed the entire sequence each time you generated a token? Please justify your answer.

At every step, you just need the K's and V's for the last $s$ tokens.
You have $2 \cdot s \cdot h$ total vectors for each attention module, and since each vector has $d$ elements, you have a total of $2 \cdot s \cdot h \cdot d$ elements.

Page 14

### Visual Description
The page contains part (d) of the sliding window attention question. A student has handwritten an explanation stating that only the last $s$ tokens' K and V vectors are needed. The final answer is given as $2 \cdot s \cdot h \cdot d$ elements. A "Page 14" stamp is at the bottom.

---
## Page 24
### Content
5) Diffusion Models [60 pts]

The questions will use the same notation that we used in the lectures.
$\mathcal{N}(x; \mu, \Sigma)$ denotes the density of a Gaussian distribution at location $x$ with mean $\mu$ and covariance matrix $\Sigma$

a) [15 pts] Let a Markov chain, $x_0, x_1, \dots, x_T$, be generated by the $q(x_t | x_{t-1}) = \mathcal{N}(x_t; \sqrt{1-\beta_t} x_{t-1}, \beta_t I)$ transition probabilities. Here $x_t \in \mathbb{R}^d$ is a $d$-dim random variable, $\beta_t \in [0, 1]$ is a parameter of the Markov transition, and $I$ is the $d$-dim identity matrix.
Prove that
$$q(x_T | x_0) = \mathcal{N}\left(x_T; \left(\prod_{t=1}^T \sqrt{1-\beta_t}\right) x_0, \left(1 - \prod_{t=1}^T (1-\beta_t)\right) I\right).$$
That is, the conditional distribution of $x_T | x_0$ is a Gaussian distribution with mean $(\prod_{t=1}^T \sqrt{1-\beta_t}) x_0$ and covariance $(1 - \prod_{t=1}^T (1-\beta_t)) I$.
Hint 1: Induction is your friend
Hint 2: Use the fact that
$$(1 - \beta_2)\beta_1 + \beta_2 = \beta_1 + \beta_2 - \beta_1\beta_2 = 1 - (1 - \beta_1)(1 - \beta_2)$$

$q(x_1 | x_0) = \mathcal{N}(x_1; \sqrt{1-\beta_1} x_0, \beta_1 I)$
Now, assume $q(x_{t-1} | x_0) = \mathcal{N}\left(x_{t-1}; \left(\prod_{i=1}^{t-1} \sqrt{1-\beta_i}\right) x_0, \left(1 - \prod_{i=1}^{t-1} (1-\beta_i)\right) I\right)$
Then, $q(x_t | x_0) = q(x_{t-1} | x_0) \cdot q(x_t | x_{t-1}) = q(x_{t-1} | x_0) \cdot \mathcal{N}(x_t; \sqrt{1-\beta_t} x_{t-1}, \beta_t I)$

$\frac{1}{[1 - \prod_{t=1}^{t-1} (1-\beta_t)]^2} + \frac{1}{(\beta_t)^2} = \frac{1}{\sigma^2} \to \frac{(1 - \prod \beta_i)^2 + (\beta_t)^2}{[1 - \prod (1-\beta_t)]^2 (\beta_t)^2}$

Page 15

### Visual Description
The page contains a printed exam question about Diffusion Models, specifically asking for a proof by induction regarding the conditional distribution $q(x_T | x_0)$. A student has started the proof by induction, writing out the base case and the inductive step, along with some scratch work involving Gaussian parameters. A "Page 15" stamp is at the bottom.
## Page 25
### Content
b) [30 pts] Similarly to the previous problem, let a Markov chain, $x_0, x_1, \dots, x_T$, be generated by the $q(x_t | x_{t-1}) = \mathcal{N}(x_t; \sqrt{1 - \beta_t} x_{t-1}, \beta_t I)$ transition probabilities.
Assume that the starting point $x_0$ has a $q(x_0)$ data distribution, and the distribution of $x_T$ is a standard Gaussian.
We assume that the reverse process is Gaussian and our goal is to learn the parameters $\theta$ of the reverse process $p_\theta(x_{t-1} | x_t)$.
We only have training data from $x_0$, the $x_1, \dots, x_T$ variables are latent variables.
Therefore,
$$p_\theta(x_0) = \int p_\theta(x_{0:T}) dx_{1:T}$$
and the expected likelihood is
$$J(\theta) = \int q(x_0) \log p_\theta(x_0) dx_0 = \int q(x_0) \left( \log \int p_\theta(x_{0:T}) dx_{1:T} \right) dx_0$$
The second integral in $J(\theta)$ is not tractable. Therefore, we maximize the ELBO lower bound instead:
$$K(\theta) = \int q(x_{0:T}) \log \left[ p_\theta(x_T) \prod_{t=1}^T \frac{p_\theta(x_{t-1} | x_t)}{q(x_t | x_{t-1})} \right] dx_{0:T}$$
Here, $q(x_{1:T} | x_0) = \prod_{t=1}^T q(x_t | x_{t-1})$.
We will show that we can maximize $K(\theta)$ rather than $J(\theta)$, which is easier due to the tractability of $K(\theta)$.
Your tasks:
1. Using the previous part, prove that
$$p_\theta(x_0) = \int q(x_{1:T} | x_0) p_\theta(x_T) \frac{\prod_{t=1}^T p_\theta(x_{t-1} | x_t)}{\prod_{t=1}^T q(x_t | x_{t-1})} dx_{1:T}$$
2. Prove that
$$J(\theta) \ge K(\theta)$$
Hint: [Jensen's inequality] As a reminder, Jensen's inequality states:
$$\phi \left[ \int q(x) f(x) dx \right] \ge \int q(x) [\phi(f(x))] dx$$
for any concave function $\phi$.

Page 16

### Visual Description
Printed exam page with mathematical formulas. Some formulas are circled in pencil.

---

## Page 26
### Content
1.
$p_\theta(x_0) = \int p_\theta(x_{0:T}) dx_{1:T}$

2. Note that $J(\theta) = \mathbb{E}_{q(x_0)} \left( \log \int p_\theta(x_{0:T}) dx_{1:T} \right)$
By Jensen's we have [crossed out] $J(\theta) \ge \log (\mathbb{E} [\int p_\theta(x_{0:T}) dx_{1:T}])$
Note [unreadable]

Page 17

### Visual Description
Handwritten notes in blue ink on a mostly blank page.

---

## Page 27
### Content
Page 18

### Visual Description
Mostly blank page with "Page 18" printed at the bottom.

---

## Page 28
### Content
c) [15 pts] Hölder continuous functions are commonly used when studying score functions for diffusion models. Here, we'll prove a property of these functions. Let $f : [a, b] \to \mathbb{R}$ be Hölder-$\gamma$ continuous for some $\gamma > 1$; that is $|f(x) - f(y)| \le C |x - y|^\gamma$ for all $x, y \in [a, b]$. Prove that $f$ is constant on $[a, b]$.

We have $|f(x) - f(y)| \le C |x - y|^\gamma$. Since $\gamma > 1$
We can write $\frac{|f(x) - f(y)|}{|x - y|} \le C |x - y|^{\gamma - 1}$
Consider $\lim_{x \to y} \frac{|f(x) - f(y)|}{|x - y|} = |f'(y)|$
Also, note that $C |
