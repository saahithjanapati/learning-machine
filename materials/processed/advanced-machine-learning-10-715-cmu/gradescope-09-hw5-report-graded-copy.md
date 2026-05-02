# gradescope-09-hw5-report-graded-copy

Source: `materials/archive/advanced-machine-learning-10-715-cmu/gradescope-graded-copies/gradescope-09-hw5-report-graded-copy.pdf`
Duplicate equivalents: `gradescope-09-hw5-report-graded-copy.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 10

## Page 1
### Content
# HW5 Report
**Graded**
2 Days, 15 Hours Late

**Student**
Saahith Janapati

**Total Points**
84 / 100 pts

**Question 1**
Question 1: **40 / 40 pts**

1.1 **1a**: **20 / 20 pts**
*   $\checkmark$ - 0 pts Correct
*   - 3 pts One missing edge

1.2 **1b**: **10 / 10 pts**
*   $\checkmark$ - 0 pts Correct
*   - 5 pts $P(W, X, Y, Z) = P(W)P(X|W)P(Y|W)P(Z|X, Y)$,

1.3 **1c**: **10 / 10 pts**
*   $\checkmark$ - 0 pts Correct
*   - 2 pts Graphical models help reduce the complexity of joint distributions, so we can represent it without having to enumerate all $2^4$ combinations in this case.
*   - 2 pts It helps with computing marginals, as this can be written in more concise notation using graphical models.

**Question 2**
Question 2: **4 / 20 pts**

2.1 **2a**: **4 / 10 pts**
*   - 0 pts Correct (1,-1,1,-0.3,-1)
*   $\checkmark$ - 6 pts Incorrect; got (1,1-1,0,-1)
*   - 10 pts Incorrect

2.2 **2b**: **0 / 10 pts**
*   - 0 pts Correct (0.1,-0.1,0.1,-0.1,-0.1)
*   $\checkmark$ - 10 pts Incorrect (1.9,0.1,-0.1,-0.27,-1.9)

### Visual Description
This is a summary report page from Gradescope showing the student's name, total score, and a breakdown of points for Questions 1 and 2. It includes specific feedback and point deductions for various sub-questions.

---

## Page 2
### Content
**Question 3**
Question 3: **40 / 40 pts**

3.1 **3a**: **20 / 20 pts**
*   $\checkmark$ - 0 pts Correct
*   - 10 pts Partially Correct
*   - 20 pts Incorrect

3.2 **3b**: **20 / 20 pts**
*   $\checkmark$ - 0 pts Correct
*   - 6 pts Missing interpretation
*   - 6 pts Missing episodes
*   - 3 pts Missing some of the episodes
*   - 3 pts Minor mistake / incomplete interpretation
*   - 20 pts Missing

### Visual Description
This is a continuation of the Gradescope summary report, showing the point breakdown and grading criteria for Question 3.

---

## Page 3
### Content
Question assigned to the following page: 1.1

# Problem 1

**(a)**
Directed:
[Hand-drawn directed graph with nodes W, X, Y, Z. Edges: $W \rightarrow Y$, $W \rightarrow X$, $Y \rightarrow Z$, $X \rightarrow Z$]

Undirected:
[Hand-drawn undirected graph with nodes W, X, Y, Z. Edges: $W-Y$, $W-X$, $X-Z$, $Y-Z$, $X-Y$]

### Visual Description
The page contains hand-drawn diagrams for Problem 1(a). The top diagram is a directed acyclic graph (DAG) with four nodes. The bottom diagram is an undirected graph, which appears to be the moralized version of the DAG above, featuring an additional edge between X and Y.

---

## Page 4
### Content
Questions assigned to the following page: 1.2 and 1.3

**(b)**
$$P(w, x, y, z) = P(w)P(x|w)P(y|w)P(z|x, y)$$

**(c)** - A graphical model is helpful because it makes the structure of the joint distribution explicit. It shows which variables directly depend on which other variables and let's us easily read conditional independences, and gives a compact factorization of the joint into small local terms.

This reduces the number of parameters we need and makes inference more efficient.

### Visual Description
The page contains a hand-written probability factorization formula for part (b) and typed text explaining the advantages of graphical models for part (c).

---

## Page 5
### Content
Questions assigned to the following page: 2.1 and 2.2

# Problem 2

$V_1(S_1) = 1$
$V_1(S_2) = 1$
$V_1(S_3) = -1$
$V_1(S_4) = 0$
$V_1(S_5) = -1$

$V_2(S_1) = 1.9$
$V_2(S_2) = 0.1$
$V_2(S_3) = -0.1$
$V_2(S_4) = -0.27$
$V_2(S_5) = -1.9$

### Visual Description
Text-only slide.

---

## Page 6
### Content
Question assigned to the following page: 3.1

# Problem 3

**3a)**
I implemented the Q-learning algorithm as described in the assignment. The Q-table was initialized to zeros with dimensions equal to the number of states and actions in the FrozenLake environment. At each step, I selected an action using an epsilon-greedy policy with epsilon = 0.7, meaning the agent explored randomly 70% of the time and exploited the current Q-values 30% of the time.

After executing the action, I received the next state and reward from the environment and updated the Q-table using the standard Q-learning update rule. I used the hyperparameters alpha = 0.8 and gamma = 0.9 as specified. The algorithm was trained for 500 episodes on the deterministic (non-slippery) FrozenLake environment.

### Visual Description
Text-only slide.

---

## Page 7
### Content
Question assigned to the following page: 3.2

**3b)**
[Visualizations of FrozenLake episodes]

epsilon=0.0, episode=1
epsilon=0.0, episode=2
epsilon=0.0, episode=3

Episode 1: total_reward=1.0, steps=6
Episode 2: total_reward=1.0, steps=6
Episode 3: total_reward=1.0, steps=6

epsilon=0.25, episode=1
epsilon=0.25, episode=2

### Visual Description
The page shows several sequences of $4 \times 4$ grid images representing the FrozenLake environment. Each sequence tracks the agent's path (represented by a small character icon) from a starting point to a goal (chest icon) while avoiding holes (circular blue icons). The first set shows three episodes with $\epsilon=0.0$, all taking 6 steps. The second set starts showing episodes with $\epsilon=0.25$.

---

## Page 8
### Content
Question assigned to the following page: 3.2

[Visualizations of FrozenLake episodes continued]

epsilon=0.25, episode=3

Evaluating epsilon = 0.25
Episode 1: total_reward=1.0, steps=6
Episode 2: total_reward=1.0, steps=2
Episode 3: total_reward=1.0, steps=6

epsilon=0.5, episode=1
epsilon=0.5, episode=2
epsilon=0.5, episode=3

Evaluating epsilon = 0.5

### Visual Description
This page continues the FrozenLake visualizations from the previous page. It shows the third episode for $\epsilon=0.25$ and then three episodes for $\epsilon=0.5$. The grids show the agent's movement through the environment. Text below the grids summarizes the performance (total reward and steps) for the $\epsilon=0.25$ evaluation.

---
## Page 9
### Content
Question assigned to the following page: 3.2

Episode 1: total_reward=0.0, steps=4
Episode 2: total_reward=0.0, steps=6
Episode 3: total_reward=0.0, steps=8

With $\epsilon = 0.0$, the agent always exploits its learned Q-values and follows the optimal path deterministically, succeeding in every episode. With $\epsilon = 0.25$, the agent still succeeds most of the time, but occasional exploratory actions lead to early failures when it randomly steps into a hole. With $\epsilon = 0.5$, exploration dominates, and the agent can no longer reliably follow the optimal path, resulting in zero successful episodes. Overall, higher $\epsilon$ during evaluation injects more randomness, and because FrozenLake punishes mistakes via the holes, success rates drop sharply as $\epsilon$ increases.

### Visual Description
Text-only slide.

---
## Page 10
### Content

### Visual Description
Blank page.
