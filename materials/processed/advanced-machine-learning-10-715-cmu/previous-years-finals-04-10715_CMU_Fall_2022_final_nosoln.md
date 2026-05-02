# previous-years-finals-04-10715_CMU_Fall_2022_final_nosoln

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/previous-years-finals-04-10715_CMU_Fall_2022_final_nosoln.pdf`
Duplicate equivalents: `previous-years-finals-04-10715_CMU_Fall_2022_final_nosoln.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 14

## Page 1
### Content
**CMU 10-715 Fall 2022: Final Exam**

**Name:**

**Andrew ID:**

**Instructions:**
* This is a 180-minute exam from 8:30 AM to 11:30 AM.
* You are **NOT** allowed to refer to notes, homework solutions, the textbook, lecture videos or any other outside resources.
* You are **NOT** allowed to discuss the exam with anyone in the duration of the exam.
* We recommend taking a brief look at all questions first and then starting to answer them. You may find some questions easier than others.
* If you need more paper, please let course staff know.

**Distribution of Marks**
| Question | Points | Score |
| :---: | :---: | :---: |
| **1** | 3 | |
| **2** | 7 | |
| **3** | 7 | |
| **4** | 7 | |
| **5** | 7 | |
| **6** | 7 | |
| **7** | 12 | |
| **8** | 10 | |
| **9** | 12 | |
| **10** | 20 | |
| Total: | 92 | |

### Visual Description
Exam cover page for CMU 10-715 Fall 2022 Final Exam. It includes fields for Name and Andrew ID, a list of instructions, and a "Distribution of Marks" table listing 10 questions with their respective point values totaling 92.

---

## Page 2
### Content
### 1) Causal inference – another story [3 points]

In the beginning of the COVID pandemic, a researcher in California put out an advertisement saying that they would give a free COVID test (which were not easy to get then) to anyone who is willing to donate their sample for research. They found that 25% of those samples tested positive. They thus concluded that 25% of people in that city had COVID. Is this a legitimate conclusion? Did the researcher mess up something? Please justify your answer in 1-3 sentences (no need for a formal proof).

[*Learning objective:* This is a simplified version of something that actually happened during peak COVID. Think about these issues from a causal inference perspective.]

### 2) Decision tree [7 points]

Suppose $\mathcal{X} = \{0, 1\}^d$, $\mathcal{Y} = \{-1, 1\}$ and consider the ID3 algorithm and suppose you allow it to run it fully (i.e., no pruning etc.). Given $n$ training points such that $x_i \neq x_j$ for all pairs $(i, j)$, what is the empirical risk of the output tree? Please provide a 1-3 line justification for your answer.

[*Learning objective:* To understand an important property of decision trees.]

Page 2

### Visual Description
Text-only slide.

---

## Page 3
### Content
### 3) Clustering [7 points]

State *True* or *False* for the following statement, and importantly, give a formal proof for your answer.

If $\mathcal{X} = \mathbb{R}$ (that is, a 1-dimensional setting) and if the k-means algorithm uses the $\ell_2$ distance, then the initialization does not matter, i.e., it will always output the same clusters irrespective of the initialization.

[*Learning objective:* To understand the dependence or independence on initialization in k-means.]

Page 3

### Visual Description
Text-only slide.

---

## Page 4
### Content
### 4) Bias-complexity tradeoff [7 points]

State *True* or *False* for the following statement. Importantly, justify your answer with a proof.

Consider empirical risk minimization (you can decide how ties are broken). Choosing a bigger hypothesis class will never lead to a higher generalization (test) error.

[*Learning objective:* Think about a fundamental property pertaining to generalization.]

Page 4

### Visual Description
Text-only slide.

---

## Page 5
### Content
### 5) Machine teaching [7 points]

In the guest lecture we learnt about adversarially breaking ML algorithms — manipulating it (e.g., by inserting specific training data) to ensure it learns a certain hypothesis. In this question, we will consider a “good” version of that called machine teaching. In machine teaching, the goal is to teach the machine to do something by giving it a bunch of examples. One question in machine teaching is what is the smallest number of samples needed to make it learn what you want it to learn.

We will consider a toy version of it here pertaining to binary classification. Consider $\mathcal{X} \subset \mathbb{R}^d$ for some $d > 1$ and $\mathcal{Y} = \{-1, 1\}$. Suppose $\mathcal{H} = \{h_1, \dots, h_k\} \subseteq \{\mathcal{X} \to \mathcal{Y}\}$ is a hypothesis class. Assume that $\mathcal{X}$ and $\mathcal{H}$ are both finite-sized sets. Consider a machine learning algorithm, that given $n$ training samples, performs ERM under the 0-1 loss over $\mathcal{H}$. You want to choose some training samples so that it learns hypothesis $h_1$. Note that you can choose the samples and labels anyway you want (i.e. samples do NOT need to come from some distribution). Your job here is to write down an optimization problem to find the smallest number of training points that will lead to hypothesis $h_1$. Don’t worry about how to solve this optimization problem (e.g., you can assume that whoever will solve this has infinite computation power). Here is a template for your convenience:

$$\arg \min_{n \in \mathbb{Z}_{\ge 1}} n$$
$$\text{such that ( there exists } x_1, \dots, x_n \in \mathcal{X} \text{ such that (please fill in this blank)).}$$

Please provide a short justification (not necessarily a formal proof) for your answer.

[*Learning objective:* There are two objectives. The first is to be introduced to ‘machine teaching’. The second objective is as follows. In the lectures, I wrote down the optimization formulations such as ERM. This question is an exercise for you to be able to write down a new problem as an optimization problem.]

Page 5

### Visual Description
Text-only slide.

---

## Page 6
### Content
### 6) Ensemble methods [7]

Let $\mathcal{X} = \mathbb{R}^{42}$, $\mathcal{Y} = \{-1, 1\}$, and let $\mathcal{H}$ be the set of all linear classifiers. You have access to $n = 10,000$ training samples $(x_1, y_1), \dots, (x_n, y_n)$. Now suppose you train $m = 43$ classifiers $h_1, \dots, h_m \in \mathcal{H}$ by bootstrapping the training data and then applying Soft-SVM. Your final classifier $h$ takes a majority vote of the $m$ classifiers $h_1, \dots, h_m$.

State *True* or *False* for the following statement, and importantly, **rigorously** justify your answer:

It must necessarily be that $h \in \mathcal{H}$.

[*Learning objective:* Understand one benefit of ensemble methods by working out a specific setting.]

Page 6

### Visual Description
Text-only slide.

---

## Page 7
### Content
### 7) Neural Networks [4+4+4 = 12 points]

Consider $\mathcal{X} = \mathbb{R}^3$, $\mathcal{Y} = \mathbb{R}$. Consider a feed forward, layered, fully connected neural network architecture with one hidden layer. The hidden layer has two neurons, and the output layer has one neuron. In order to simplify the question, ignore the bias terms (i.e., there is no additional neuron in the input layer to capture the bias, and neither are there separate bias terms in any of the neurons). Consider the activation function $\sigma(z) = z^3$. There is an activation after both hidden layer and output layer.

You are given some training data $(x_1, y_1), \dots, (x_n, y_n)$. You wish to perform empirical risk minimization under the squared loss on the aforementioned architecture. Suppose you choose to do so via stochastic gradient descent (SGD) with learning rate $\eta$, which in turn, you implement via backpropagation. Suppose you initialize all weights to 0. You run $n$ iterations of SGD, where it happens that in iteration $t \in [n]$, the SGD picks sample $(x_t, y_t)$.

Please answer the following questions. Please provide a proof for each answer. You can use the following notation: Let $\hat{y}_t \in \mathbb{R}$ denote the output of the output node at iteration $t$. Let $V^{(t)} \in \mathbb{R}^{2 \times 3}$ denote the weight matrix for the edges connecting the input layer and the hidden layer at the beginning of iteration $t$, and let $W^{(t)} \in \mathbb{R}^{1 \times 2}$ denote the weight matrix for the edges connecting the hidden layer and the output layer at the beginning of iteration $t$. Let $o_V^{(t)} = V^{(t)}x^{(t)}$, $a_V^{(t)} = (o_V)^3$ and $o_W^{(t)} = W^{(t)}a_V$

[*Learning objective:* To get a hands-on understanding of how initialization affects the training.]

i) At the end of the forward pass of the first iteration, what is the value at the output of the output node?

Page 7

### Visual Description
Text-only slide.

---

## Page 8
### Content
ii) At the end of the first iteration of SGD, what are the values of the weights?

iii) At the end of the $n^{th}$ iteration of SGD, what are the values of the weights?

Page 8

### Visual Description
Text-only slide.
## Page 9
### Content
8) Multi-armed bandits [10 points]

---
**Algorithm 1:** UCB algorithm
**for** $j = 1, 2, 3, ..., k$ **do**
&nbsp;&nbsp;&nbsp;&nbsp;Toss coin $j$. Denote outcome as $y \in \{0, 1\}$
&nbsp;&nbsp;&nbsp;&nbsp;Set $N_j = 1, H_j = y$
**for** $t = k + 1, k + 2, ...$ **do**
&nbsp;&nbsp;&nbsp;&nbsp;$a \in \text{argmax}_{j \in [k]} \frac{H_j}{N_j} + \sqrt{\frac{2 \log t}{N_j}}$ (equation *)
&nbsp;&nbsp;&nbsp;&nbsp;Toss coin $a$. Denote outcome as $y \in \{0, 1\}$
&nbsp;&nbsp;&nbsp;&nbsp;Update $N_a \leftarrow N_a + 1, H_a \leftarrow H_a + y$
&nbsp;&nbsp;&nbsp;&nbsp;**if** $t = 100k$ **then**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;output $\text{argmax}_{j \in [k]} \frac{H_j}{N_j} + \sqrt{\frac{2 \log t}{N_j}}$
---

Consider the multi-armed bandits setting where there are $k$ coins. For a coin $i$ ($i \in [k]$), $\mathbb{P}_i(head) = \mu_i$, and the probabilities of heads are independently distributed, with $\mu_1, \mu_2, ..., \mu_k$ unknown. We denote "head" by 1, and "tail" by 0. Recall the UCB algorithm in Algorithm 1.

Focus on equation * where we choose the coin to be tossed during iterations $k+1$ onwards. In the lecture, we have discussed what happens without the second term (i.e., remove the $\frac{1}{\sqrt{N_j}}$ part). Now, can you tell precisely what will happen if we instead remove the first term ($\frac{H_j}{N_j}$) and keep only the second in equation *? That is, in equation *, the argmax expression is $\text{argmax}_{j \in [k]} \sqrt{\frac{2 \log t}{N_j}}$. Note that every other equation, including the final output, is unchanged. Please justify with a proof.

Additionally, comment (no need for a proof) on this in the context of the exploration-exploitation tradeoff.

[Learning objective: To understand the use of both terms in the argmax.]

Page 9

### Visual Description
The page contains a problem description for a multi-armed bandit scenario. It includes "Algorithm 1: UCB algorithm" in a boxed format. In the algorithm, the term $\sqrt{\frac{2 \log t}{N_j}}$ in equation * is highlighted with a red box. Below the algorithm is a text-based question asking about the consequences of removing the first term of the UCB expression.

---
## Page 10
### Content
Page 10

### Visual Description
Blank page.

---
## Page 11
### Content
9) Boosting [12 points]

Consider a weak learner that does ERM over a hypothesis class $\mathcal{H}$. Consider $n$ training points, and suppose that the empirical risk under $\mathcal{H}$ is strictly positive. Consider the $t^{th}$ iteration of AdaBoost as defined in Algorithm 2. Suppose the weak learner is wrong on samples $x_1, ..., x_m$ (for some $m \in \{1, ..., n - 1\}$) and is correct on the rest. Then what probability mass does AdaBoost put on $\{x_1, ..., x_m\}$ in distribution $D^{(t+1)}$ (in other words, if you draw a sample from $\{x_1, ..., x_n\}$ via $D^{(t+1)}$, then what is the probability that the sample comes from $\{x_1, ..., x_m\}$)? Please justify your answer with a proof.

---
**Algorithm 2:** AdaBoost
**Input:** $S = \{(x_i, y_i)\}_{i=1}^n$, a weak learner $WL$ over a hypothesis class $\mathcal{H}$, and the number of rounds $T$.
Initialize $D^{(1)} = [\frac{1}{n}, ..., \frac{1}{n}]$ of length $n$ (distribution over $S$).
**for** $t = 1, 2, ..., T$ **do**
&nbsp;&nbsp;&nbsp;&nbsp;$h_t = WL(D^{(t)}, S)$
&nbsp;&nbsp;&nbsp;&nbsp;$\epsilon_t = \sum_{i=1}^n D_i^{(t)} \mathbb{1}[y_i \neq h_t(x_i)]$
&nbsp;&nbsp;&nbsp;&nbsp;$w_t = \frac{1}{2} \log \frac{1-\epsilon_t}{\epsilon_t}$
&nbsp;&nbsp;&nbsp;&nbsp;$\tilde{D}_i^{(t+1)} = D_i^{(t)} \exp(-w_t)$ if $y_i = h_t(x_i)$; $D_i^{(t)} \exp(w_t)$ if $y_i \neq h_t(x_i), \forall i \in [n]$
&nbsp;&nbsp;&nbsp;&nbsp;$D_i^{(t+1)} = \frac{\tilde{D}_i^{(t+1)}}{\sum_{j=1}^n \tilde{D}_j^{(t+1)}}, \forall i \in [n]$
**Output:** Hypothesis $h_S(X) = \text{sign} \left( \sum_{t=1}^T w_t h_t(X) \right)$
---

[Learning objective: To work out, and thereby internalize, an important property of boosting.]

10) MDP [4+(4+4+4+4) = 20 points]

Consider an MDP setting with $\mathcal{S} = \{0, 1\}$, $\mathcal{A} = \{stay, move\}$. Suppose $T(s, stay, s) = 1$ and $T(s, move, s) = 0$ for each $s \in \{0, 1\}$. Suppose $R(s, stay) = 1$ and $R(s, move) = -1$ for each $s \in \{0, 1\}$.

(1) What is the optimal policy?

Page 11

### Visual Description
The page contains two main sections. Section 9 is about Boosting and includes "Algorithm 2: AdaBoost" in a boxed format. Section 10 introduces a Markov Decision Process (MDP) problem with defined states, actions, transitions, and rewards.

---
## Page 12
### Content
---
**Algorithm 3:** Value Iteration Algorithm
Initialize $V^{(0)}(s)$ arbitrarily, $\forall s$
**for** $t = 1, 2, ..., T$ **do**
&nbsp;&nbsp;&nbsp;&nbsp;**for** $(s, a) \in \mathcal{S} \times \mathcal{A}$ **do**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$Q^{(t)}(s, a) = \mathbb{E}[R(s, a)] + \gamma \sum_{s' \in \mathcal{S}} T(s, a, s') V^{(t-1)}(s')$
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$V^{(t)}(s) = \max_{a \in \mathcal{A}} Q^{(t)}(s, a)$
**Output:** $\Pi(s) = \text{argmax}_{a \in \mathcal{A}} Q^{(T)}(s, a), \forall s$
---

(2) Suppose we execute this value iteration algorithm (in Algorithm 3), where we initialize $V(0) = 10$ and $V(1) = -10$, and choose $\gamma = \frac{1}{2}$. In this question, we will prove that running this algorithm for a large enough amount of time $T$ will yield the optimal policy. In order to do so:

i) Show that for any $t \ge 0$, $Q^{(t)}(0, stay) > Q^{(t)}(0, move)$. What does this imply about the output policy $\Pi$?

Page 12

### Visual Description
The page continues the MDP problem from the previous page. It includes "Algorithm 3: Value Iteration Algorithm" in a boxed format. Below the algorithm, it sets up a specific scenario for value iteration with initial values and a discount factor, followed by sub-question (i).

---
## Page 13
### Content
ii) Show that for any $t \ge 1$, $V^{(t)}(0) - V^{(t)}(1) \le 2$.

iii) Show that for any $t \ge 2$, $V^{(t)}(0) - V^{(t)}(1) \le 1$

Page 13

### Visual Description
Text-only slide. It contains sub-questions (ii) and (iii) for the MDP value iteration problem.

---
## Page 14
### Content
iv) Show that for any $t \ge 3$, $Q^{(t)}(1, stay) > Q^{(t)}(1, move)$. What does this imply about the output policy $\Pi$?

[Learning objective: Work out the value iteration algorithm in a toy setting to really understand how it works.]

Page 14

### Visual Description
Text-only slide. It contains sub-question (iv) for the MDP problem and a learning objective statement.

---
