# zip-extracted-homework-05-HW5-hw5__dup1

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/zip-extracted-homework-05-HW5-hw5__dup1.pdf`
Duplicate equivalents: `zip-extracted-homework-05-HW5-hw5__dup1.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 10

## Page 1
### Content
# CMU 10-715: Homework 5
## Reinforcement Learning
**Released:** Oct. 31, 2025.
**Due:** Nov. 10, 2025, 11:59 PM.

### Instructions:
* **Collaboration policy:** Collaboration on solving the homework is allowed, after you have thought about the problems on your own. It is also OK to get clarification (but not solutions) from books, again after you have thought about the problems on your own. Please don’t search for answers on the web, previous years’ homeworks, etc. (please ask the TAs if you are not sure if you can use a particular reference). There are two requirements: first, cite your collaborators fully and completely (e.g., “Alice explained to me what is asked in Question 4.3”). Second, write your solution *independently*: close the book and all of your notes, and send collaborators out of the room, so that the solution comes from you only.
* **Submitting your work:** On Gradescope:
    - Submit your completed python file, `q3_qlearning.py`, to the assignment titled “HW5 Code”.
    - Submit your PDF report file, named `[your andrew id].pdf`, to the assignment titled “HW6 Report”. Upon submission, please follow Gradescope instructions to match the question numbers with the page numbers of your report.
    There is no limit on the number of submissions to Gradescope.
* **Gradescope access:** The link to this course is https://www.gradescope.com/courses/1082583.
* **Auto-grader:** There is no autograder for this assignment.
* **Late days:** For each homework you get three late days to be used only when anything urgent comes up. No points will be deducted for using these late days. We will consider an honor system where we will rely on you to use the late days appropriately.

1
### Visual Description
Text-only slide.

---
## Page 2
### Content
# 1 Graphical Models (40 points)

In this question, we will demonstrate the effectiveness of graphical models for a toy example. Throughout the question, consider the following example: “Suppose that car accidents depend on two factors: 1) road slipperiness, and 2) visibility issues. Additionally, suppose that both of these independently depend on a single factor: whether it has rained today.”

(a) (20 points) Let $Z$ be the event that there is a car accident, $Y$ represent the event that the road is slippery, $X$ the event that there are visibility issues, and $W$ the event that it rains. Draw a directed graphical model representing the dependencies among these variables. What does the equivalent undirected model look like?

(b) (10 points) Marginalize the joint probability distribution $P(W, X, Y, Z)$ into a product of factors.

(c) (10 points) Why is a graphical model helpful when representing or computing joint distributions in this situation?

2
### Visual Description
Text-only slide.

---
## Page 3
### Content
# 2 Markov Decision Process (20 points)

Consider an MDP as defined below:
$$S = \{S_1, S_2, S_3, S_4, S_5\}$$
$$A = \{a_1, a_2\}$$
The state transition probabilities are as follows, where the entry at location $(i, j)$ denotes the probability of transition from $S_i$ to $S_j$.

| | $S_1$ | $S_2$ | $S_3$ | $S_4$ | $S_5$ |
|---|---|---|---|---|---|
| $S_1$ | 0 | 1 | 0 | 0 | 0 |
| $S_2$ | 0 | 0 | 0 | 0 | 1 |
| $S_3$ | 0.5 | 0 | 0 | 0 | 0.5 |
| $S_4$ | 0 | 0 | 1 | 0 | 0 |
| $S_5$ | 0 | 0 | 1 | 0 | 0 |

Table 1: $T(S, a_1, S')$

| | $S_1$ | $S_2$ | $S_3$ | $S_4$ | $S_5$ |
|---|---|---|---|---|---|
| $S_1$ | 0 | 0 | 0 | 0 | 1 |
| $S_2$ | 0 | 0 | 1 | 0 | 0 |
| $S_3$ | 0 | 1 | 0 | 0 | 0 |
| $S_4$ | 0 | 0 | 0 | 0.7 | 0.3 |
| $S_5$ | 0 | 0 | 1 | 0 | 0 |

Table 2: $T(S, a_2, S')$

The reward function $R$ indicates getting a reward $R(s)$ on reaching state $s$. Please note that this is an infinite horizon problem with no terminal state.
$$R(S_1) = 1$$
$$R(S_2) = 1$$
$$R(S_3) = -1$$
$$R(S_4) = 0$$
$$R(S_5) = -1$$

Assume that all state values are initially set to 0. Take discount factor $\gamma = 0.9$.
In this question, we will compute the value function over the states of our MDP using the value iteration algorithm. We will perform parallel (aka synchronous) updates, which means that all value updates in an iteration happen simultaneously. In other words, all updates in iteration $i$ will use the values from iteration $i - 1$.

3
### Visual Description
The page contains text describing a Markov Decision Process problem, including two tables (Table 1 and Table 2) representing state transition probabilities for actions $a_1$ and $a_2$ across five states.

---
## Page 4
### Content
After the first iteration of updates, what are the values $V_1(S_i)$ of states $S_i$:

1. $V_1(S_1)$ [Box]
2. $V_1(S_2)$ [Box]
3. $V_1(S_3)$ [Box]
4. $V_1(S_4)$ [Box]
5. $V_1(S_5)$ [Box]

After the second iteration of updates, what are the values $V_2(S_i)$ of states $S_i$:

6. $V_2(S_1)$ [Box]
7. $V_2(S_2)$ [Box]
8. $V_2(S_3)$ [Box]
9. $V_2(S_4)$ [Box]
10. $V_2(S_5)$ [Box]

[Note: You only need to fill in the boxes above. You don’t need to write out the entire solution.]

4
### Visual Description
The page contains a list of ten numbered items, each asking for a value $V_n(S_i)$ and providing a rectangular box for the answer.

---
## Page 5
### Content
# 3 Q-Learning (40 points)

In this question, we will implement the Q Learning algorithm.

**Algorithm 1** Q Learning
**Require:** $\alpha, \epsilon, \gamma, ENV$
**while** $episode \le MAX\_ITERATIONS$ **do**
  Reset $ENV$ and get initial state $s$
  **while** $episode$ not done **do**
    Sample action $a$ $\triangleright$ according to $\epsilon$-greedy strategy
    Get new state $s'$, reward $r$
    Update $Q[s, a] = (1 - \alpha)Q[s, a] + \alpha(r + \gamma \max_{a'} Q[s', a'])$
    update State $s$ to new state $s'$
  **end while**
**end while**
**return** $Q$

We have provided the starter code in `q3_qlearning.py`, where you will be using FrozenLake environment from gym. To install gym, simply run `pip install gym` or `pip3 install gym`
For more details about gym, please refer to https://github.com/openai/gym. For the following questions, the start code has outlined `TODO` blocks. Don’t forget to submit your code to Gradescope.

(a) (20 points) Run the Q Learning algorithm using the default hyperparameters given ($\alpha = 0.8, \gamma = 0.9, \epsilon = 0.7$). You’ll also need to write the $\epsilon$-greedy algorithm in order to sample the action at each time step.

(b) (20 points) Evaluate the environment using an $\epsilon$-greedy strategy.
* For each $\epsilon$ in $\{0, 0.25, 0.5\}$, report three episodes of the game (see example in Figure 4). You can use `env.render()` and plot the whole game trajectory.
* Describe the difference among the three episodes, and provide your interpretation.

5
### Visual Description
The page contains a section header for Q-Learning, a pseudocode block for the Q-Learning algorithm, and instructions for a programming task involving the OpenAI Gym FrozenLake environment.

---
## Page 6
### Content
[Image Placeholder 1] [Image Placeholder 2] [Image Placeholder 3]

Figure 1: Episodes of the game with $\epsilon = 0$

6
### Visual Description
The page contains three large, identical gray boxes with diagonal lines crossing them and the word "Image" in the center. Below them is a caption: "Figure 1: Episodes of the game with $\epsilon = 0$".

---
## Page 7
### Content
[Image Placeholder 1] [Image Placeholder 2] [Image Placeholder 3]

Figure 2: Episodes of the game with $\epsilon = 0.25$

7
### Visual Description
The page contains three large, identical gray boxes with diagonal lines crossing them and the word "Image" in the center. Below them is a caption: "Figure 2: Episodes of the game with $\epsilon = 0.25$".

---
## Page 8
### Content
[Image Placeholder 1] [Image Placeholder 2] [Image Placeholder 3]

Figure 3: Episodes of the game with $\epsilon = 0.5$

8
### Visual Description
The page contains three large, identical gray boxes with diagonal lines crossing them and the word "Image" in the center. Below them is a caption: "Figure 3: Episodes of the game with $\epsilon = 0.5$".
## Page 9
### Content
[Empty Page / Placeholder]

9
### Visual Description
A large, empty rectangular box with a thin black border is centered in the upper half of the page. The page number "9" is centered at the bottom.

---
## Page 10
### Content
Figure 4: Example of an episode

10
### Visual Description
A vertical sequence of seven $4 \times 4$ grid-world diagrams illustrating an episode in a reinforcement learning environment. Each grid contains light blue squares representing a frozen surface, dark blue circular icons representing holes, and a treasure chest icon in the bottom-right corner representing the goal. 

The sequence shows a small character icon (the agent) starting at the top-left corner and moving through the grid:
1. Agent is at (0,0).
2. Agent moves to (1,0).
3. Agent moves to (2,0).
4. Agent moves to (2,1).
5. Agent moves to (3,1).
6. Agent moves to (3,2).
7. Agent reaches the goal at (3,3).

The caption "Figure 4: Example of an episode" is centered below the diagrams, and the page number "10" is at the bottom.

---
