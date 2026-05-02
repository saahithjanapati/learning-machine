# previous-years-finals-06-10715_CMU_Fall_2022_final_soln

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/previous-years-finals-06-10715_CMU_Fall_2022_final_soln.pdf`
Duplicate equivalents: `previous-years-finals-06-10715_CMU_Fall_2022_final_soln.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 19

## Page 1
### Content
CMU 10-715 Fall 2022: Final Exam

DO NOT PRINT, SOLUTIONS ARE BEING DISPLAYED!

Name:

Andrew ID:

**Instructions:**
* This is a 180-minute exam from 8:30 AM to 11:30 AM.
* You are **NOT** allowed to refer to notes, homework solutions, the textbook, lecture videos or any other outside resources.
* You are **NOT** allowed to discuss the exam with anyone in the duration of the exam.
* We recommend taking a brief look at all questions first and then starting to answer them. You may find some questions easier than others.
* If you need more paper, please let course staff know.

Distribution of Marks

### Visual Description
Text-only slide. The text "DO NOT PRINT, SOLUTIONS ARE BEING DISPLAYED!" is highlighted in red.

---

## Page 2
### Content
| Question | Points | Score |
| :--- | :--- | :--- |
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

Page 2

### Visual Description
A table showing the distribution of marks for 10 questions, with a total of 92 points.

---

## Page 3
### Content
### 1) Causal inference – another story [3 points]

In the beginning of the COVID pandemic, a researcher in California put out an advertisement saying that they would give a free COVID test (which were not easy to get then) to anyone who is willing to donate their sample for research. They found that 25% of those samples tested positive. They thus concluded that 25% of people in that city had COVID. Is this a legitimate conclusion? Did the researcher mess up something? Please justify your answer in 1-3 sentences (no need for a formal proof).

[Learning objective: This is a simplified version of something that actually happened during peak COVID. Think about these issues from a causal inference perspective.]

This is not a legitimate conclusion. There is likely a confounder: potentially the people who felt sick or were concerned they might have COVID were also more likely to donate a sample in favor of getting a free test. Then the propensity of COVID in the respondent population might be higher than the population at large.

### 2) Decision tree [7 points]

Suppose $\mathcal{X} = \{0, 1\}^d$, $\mathcal{Y} = \{-1, 1\}$ and consider the ID3 algorithm and suppose you allow it to run it fully (i.e., no pruning etc.). Given $n$ training points such that $x_i \neq x_j$ for all pairs $(i, j)$, what is the empirical risk of the output tree? Please provide a 1-3 line justification for your answer.

[Learning objective: To understand an important property of decision trees.]

0.
Every datapoint will be separated into its own distinct leaf (or all datapoints in each leaf have the same label) by the tree (since there are no duplicate $x_i$ values). Then each leaf can be assigned the label of that datapoint and empirical risk will reach 0.

Page 3

### Visual Description
Text-only slide. The solutions are written in red text.

---

## Page 4
### Content
### 3) Clustering [7 points]

State *True* or *False* for the following statement, and importantly, give a formal proof for your answer.

If $\mathcal{X} = \mathbb{R}$ (that is, a 1-dimensional setting) and if the k-means algorithm uses the $\ell_2$ distance, then the initialization does not matter, i.e., it will always output the same clusters irrespective of the initialization.

[Learning objective: To understand the dependence or independence on initialization in k-means.]

False.

Counterexample: three datapoints at $-1, 0, 1$. $k = 2$.

Initializing with $\{0, 1\}$ will lead $\{-1, 0\}$ to be grouped in the nearest-centroid partition and $\{1\}$ to be grouped at the first iteration. Then the means will be set at $-0.5$ and at 1. This will lead each point to again be grouped the same way, leading to immediate convergence.

Alternatively, initializing with $\{-1, 0\}$ will lead $\{0, 1\}$ to be grouped in the nearest-centroid partition and $\{-1\}$ to be a separate group. The means will be set at 0.5 and $-1$. Each point will then be grouped the same way in subsequent iterations, leading to immediate convergence.

Clearly, initialization can change the groupings and centroids.

Page 4

### Visual Description
Text-only slide. The solution is written in red text.

---

## Page 5
### Content
### 4) Bias-complexity tradeoff [7 points]

State *True* or *False* for the following statement. Importantly, justify your answer with a proof.

Consider empirical risk minimization (you can decide how ties are broken). Choosing a bigger hypothesis class will never lead to a higher generalization (test) error.

[Learning objective: Think about a fundamental property pertaining to generalization.]

False.

We may overfit to the empirical data, providing worse generalization. For example, in a highly noisy linear problem, choosing a large deep neural network hypothesis class may allow each training example to be memorized and assigned its true label, at the cost of unpredictable behavior on unseen examples.

We prove this claim via a counterexample. Consider $\mathcal{X} = [0, 1], \mathcal{Y} = \{-1, 1\}$, and the realizable setting with the linear hypothesis class. Now consider two scenarios: 1) You choose the linear hypothesis class for ERM. Break ties arbitrarily. From learning theory, we know that this can yield an $(\epsilon, \delta)$-PAC guarantee.

2) You choose the hypothesis class comprising all possible hypotheses for ERM. You break ties by setting label +1 on all points that are labeled +1 in the training data, and -1 everywhere else. Then if the distribution $D$ was uniform on $[0, 1]$, you have a risk of 0.5.

Thus the generalization error in scenario 2 is higher.

Page 5

### Visual Description
Text-only slide. The solution is written in red text.

---

## Page 6
### Content
### 5) Machine teaching [7 points]

In the guest lecture we learnt about adversarially breaking ML algorithms — manipulating it (e.g., by inserting specific training data) to ensure it learns a certain hypothesis. In this question, we will consider a “good” version of that called machine teaching. In machine teaching, the goal is to teach the machine to do something by giving it a bunch of examples. One question in machine teaching is what is the smallest number of samples needed to make it learn what you want it to learn.

We will consider a toy version of it here pertaining to binary classification. Consider $\mathcal{X} \subset \mathbb{R}^d$ for some $d > 1$ and $\mathcal{Y} = \{-1, 1\}$. Suppose $\mathcal{H} = \{h_1, \dots, h_k\} \subseteq \{\mathcal{X} \to \mathcal{Y}\}$ is a hypothesis class. Assume that $\mathcal{X}$ and $\mathcal{H}$ are both finite-sized sets. Consider a machine learning algorithm, that given $n$ training samples, performs ERM under the 0-1 loss over $\mathcal{H}$. You want to choose some training samples so that it learns hypothesis $h_1$. Note that you can choose the samples and labels anyway you want (i.e. samples do NOT need to come from some distribution). Your job here is to write down an optimization problem to find the smallest number of training points that will lead to hypothesis $h_1$. Don’t worry about how to solve this optimization problem (e.g., you can assume that whoever will solve this has infinite computation power). Here is a template for your convenience:

$$\arg \min_{n \in \mathbb{Z}_{\ge 1}} n$$
$$\text{such that ( there exists } x_1, \dots, x_n \in \mathcal{X} \text{ such that (please fill in this blank)).}$$

Please provide a short justification (not necessarily a formal proof) for your answer.

[Learning objective: There are two objectives. The first is to be introduced to ‘machine teaching’. The second objective is as follows. In the lectures, I wrote down the optimization formulations such as ERM. This question is an exercise for you to be able to write down a new problem as an optimization problem.]

The missing condition is “such that $\sum_{i=1}^n \mathbf{1}\{h(x_i) \neq h_1(x_i)\} \ge 1 \quad \forall h \in \{h_2, \dots, h_k\}$.”

It is important to emphasize that only $h_1$ can be in the argmin set. As long as it deviates from every other hypothesis on at least one of the considered points, we can choose the training labels to make $h_1$ have zero empirical risk and every other candidate hypothesis to have positive empirical risk.

Page 6

### Visual Description
Text-only slide. The solution and filled-in blank are written in red text.

---

## Page 7
### Content
### 6) Ensemble methods [7]

Let $\mathcal{X} = \mathbb{R}^{42}$, $\mathcal{Y} = \{-1, 1\}$, and let $\mathcal{H}$ be the set of all linear classifiers. You have access to $n = 10,000$ training samples $(x_1, y_1), \dots, (x_n, y_n)$. Now suppose you train $m = 43$ classifiers $h_1, \dots, h_m \in \mathcal{H}$ by bootstrapping the training data and then applying Soft-SVM. Your final classifier $h$ takes a majority vote of the $m$ classifiers $h_1, \dots, h_m$.

State *True* or *False* for the following statement, and importantly, **rigorously** justify your answer:

It must necessarily be that $h \in \mathcal{H}$.

[Learning objective: Understand one benefit of ensemble methods by working out a specific setting.]

False.

The learned Soft SVM classifiers might vary greatly, in particular because bootstrapping could possibly leave each classifier trained on a distinct set of data.

Imagine all but the first 2 dimensions of data were irrelevant, and every learned boundary classified based only on the first two dimensions.

Now imagine 21 classifiers classify examples according to the rule $\text{sign}[x_1]$ and 21 according to rule $\text{sign}[x_2]$.

When $x_1, x_2$ positive, we always choose 1. When $x_1, x_2$ negative, we choose -1. When the signs differ, the 42 first classifiers are both tied in predictions.

The 43rd classifies according to rule $\mathbb{I}[x_1 \ge 1]$. It acts as a tiebreaker. In the regime where $x_1 \ge 1$, everything is classified as 1. In the regime where $x_1 \in [0, 1)$, examples with $x_2 \ge 0$ are classified as 1, and examples with negative $x_2$ are classified as -1. In the regime where $x_1$ is negative, everything is classified as -1. There is no linear boundary that separates the -1 and 1 regions.

Page 7

### Visual Description
Text-only slide. The solution is written in red text.

---

## Page 8
### Content
### 7) Neural Networks [4+4+4 = 12 points]

Consider $\mathcal{X} = \mathbb{R}^3$, $\mathcal{Y} = \mathbb{R}$. Consider a feed forward, layered, fully connected neural network architecture with one hidden layer. The hidden layer has two neurons, and the output layer has one neuron. In order to simplify the question, ignore the bias terms (i.e., there is no additional neuron in the input layer to capture the bias, and neither are there separate bias terms in any of the neurons). Consider the activation function $\sigma(z) = z^3$. There is an activation after both hidden layer and output layer.

You are given some training data $(x_1, y_1), \dots, (x_n, y_n)$. You wish to perform empirical risk minimization under the squared loss on the aforementioned architecture. Suppose you choose to do so via stochastic gradient descent (SGD) with learning rate $\eta$, which in turn, you implement via backpropagation. Suppose you initialize all weights to 0. You run $n$ iterations of SGD, where it happens that in iteration $t \in [n]$, the SGD picks sample $(x_t, y_t)$.

Please answer the following questions. Please provide a proof for each answer. You can use the following notation: Let $\hat{y}_t \in \mathbb{R}$ denote the output of the output node at iteration $t$. Let $V^{(t)} \in \mathbb{R}^{2 \times 3}$ denote the weight matrix for the edges connecting the input layer and the hidden layer at the beginning of iteration $t$, and let $W^{(t)} \in \mathbb{R}^{1 \times 2}$ denote the weight matrix for the edges connecting the hidden layer and the output layer at the beginning of iteration $t$. Let $o_V^{(t)} = V^{(t)}x^{(t)}$, $a_V^{(t)} = (o_V^{(t)})^3$ and $o_W^{(t)} = W^{(t)}a_V$.

[Learning objective: To get a hands-on understanding of how initialization affects the training.]

i) At the end of the forward pass of the first iteration, what is the value at the output of the output node?

We will make some additional definitions:
$o_V^{(t)} = V^{(t)}x^{(t)}$
$a_V^{(t)} = (o_V^{(t)})^3$
$o_W^{(t)} = W^{(t)}a_V^{(t)}$
$\hat{y} = a_W^{(t)} = (o_W^{(t)})^3$
$L = (\hat{y} - y^{(t)})^2$.

Now at the first iteration, $\hat{y} = \left( W^{(1)} (V^{(1)}x^{(t)})^3 \right)^3$, but because $V^{(1)} = W^{(1)} = 0$, $\hat{y} = 0$.

Page 8

### Visual Description
Text-only slide. The solution is written in red text and includes mathematical derivations.

---
## Page 9
### Content
ii) At the end of the first iteration of SGD, what are the values of the weights?

We must compute several partial derivatives.

$\frac{\partial L}{\partial \hat{y}} = 2(\hat{y} - y^{(t)})$

$\frac{\partial \hat{y}}{\partial o_W} = 3(o_W)^2$

$\frac{\partial o_W}{\partial a_V}, \frac{\partial o_W}{\partial W}, \frac{\partial a_V}{\partial o_V}, \text{ and } \frac{\partial o_V}{\partial V}$ don't need to be expressly computed to make the argument we'll make.

Now, $\frac{\partial L}{\partial W} = \frac{\partial o_W}{\partial W} \frac{\partial \hat{y}}{\partial o_W} \frac{\partial L}{\partial \hat{y}}$. Because the weights were originally zero, every intermediary result of a matrix product was zero, so $\frac{\partial \hat{y}}{\partial o_W} = 3(o_W^{(1)})^2 = 0$. Then $\frac{\partial L}{\partial W} = 0$.

Also, $\frac{\partial L}{\partial V} = \frac{\partial o_V}{\partial V} \frac{\partial a_V}{\partial o_V} \frac{\partial o_W}{\partial a_V} \frac{\partial \hat{y}}{\partial o_W} \frac{\partial L}{\partial \hat{y}}$, but again because $\frac{\partial \hat{y}}{\partial o_W} = 0$, the entire product is 0.

Since a zero gradient is propagated to all of the weights, a gradient step results in no change, keeping the weights at zero.

### Visual Description
Text-only slide.

---
## Page 10
### Content
iii) At the end of the $n^{th}$ iteration of SGD, what are the values of the weights?

The values of the weights are zero.

Here, the proof is a simple induction.

* **Base case:** already shown for $n = 1$.
* **Inductive hypothesis:** assume weights are zero at end of iteration $n = k$.
* **Inductive step:** if weights are zero at end of iteration $k$, then all of the activations output by a matrix product in iteration $k + 1$ will also be zero.

Then by the same argument as before, $\frac{\partial \hat{y}}{\partial o_W} = 0$, so $\frac{\partial L}{\partial V} = \frac{\partial o_V}{\partial V} \frac{\partial a_V}{\partial o_V} \frac{\partial o_W}{\partial a_V} \frac{\partial \hat{y}}{\partial o_W} \frac{\partial L}{\partial \hat{y}} = 0$ and $\frac{\partial L}{\partial W} = \frac{\partial o_W}{\partial W} \frac{\partial \hat{y}}{\partial o_W} \frac{\partial L}{\partial \hat{y}} = 0$.

Then any gradient step will be adding zero to zero, and all weights will remain zero.

### Visual Description
Text-only slide.

---
## Page 11
### Content
8) Multi-armed bandits [10 points]

**Algorithm 1: UCB algorithm**
***
**for** $j = 1, 2, 3, ..., k$ **do**
&nbsp;&nbsp;&nbsp;&nbsp;Toss coin $j$. Denote outcome as $y \in \{0, 1\}$
&nbsp;&nbsp;&nbsp;&nbsp;Set $N_j = 1, H_j = y$
**for** $t = k + 1, k + 2, ...$ **do**
&nbsp;&nbsp;&nbsp;&nbsp;$a \in \text{argmax}_{j \in [k]} \frac{H_j}{N_j} + \sqrt{\frac{2 \log t}{N_j}}$ (equation *)
&nbsp;&nbsp;&nbsp;&nbsp;Toss coin $a$. Denote outcome as $y \in \{0, 1\}$
&nbsp;&nbsp;&nbsp;&nbsp;Update $N_a \leftarrow N_a + 1, H_a \leftarrow H_a + y$
&nbsp;&nbsp;&nbsp;&nbsp;**if** $t = 100k$ **then**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;output $\text{argmax}_{j \in [k]} \frac{H_j}{N_j} + \sqrt{\frac{2 \log t}{N_j}}$
***

Consider the multi-armed bandits setting where there are $k$ coins. For a coin $i$ ($i \in [k]$), $\mathbb{P}_i(\text{head}) = \mu_i$, and the probabilities of heads are independently distributed, with $\mu_1, \mu_2, ..., \mu_k$ unknown. We denote "head" by 1, and "tail" by 0. Recall the UCB algorithm in Algorithm 1.

Focus on equation * where we choose the coin to be tossed during iterations $k+1$ onwards. In the lecture, we have discussed what happens without the second term (i.e., remove the $\sqrt{\frac{1}{N_j}}$ part). Now, can you tell precisely what will happen if we instead remove the first term ($\frac{H_j}{N_j}$) and keep only the second in equation *? That is, in equation *, the argmax expression is $\text{argmax}_{j \in [k]} \sqrt{\frac{2 \log t}{N_j}}$. Note that every other equation, including the final output, is unchanged. Please justify with a proof.

Additionally, comment (no need for a proof) on this in the context of the exploration-exploitation tradeoff.

[Learning objective: To understand the use of both terms in the argmax.]

At any $t \ge k + 1$, $\max_{j \in [k]} \sqrt{\frac{2 \log t}{N_j}} = \sqrt{2 \log t} \max_{j \in [k]} \sqrt{\frac{1}{N_j}} = \sqrt{2 \log t} \sqrt{\frac{1}{\min_{j \in [k]} N_j}}$.

Then $\text{argmax}_{j \in [k]} \sqrt{\frac{2 \log t}{N_j}} = \text{argmin}_{j \in [k]} N_j$

At every iteration $t \ge k + 1$, we will therefore toss some coin in $\text{argmin}_{j \in [k]} N_j$, that is, one of the coins that has been flipped the least number of times. For $t \in [k + 1, 2k]$ that

### Visual Description
The slide contains a title, a pseudocode box for the UCB algorithm, a problem description, and the beginning of a solution in red text.

---
## Page 12
### Content
we will flip all $k$ coins for the second time, before we can begin choosing to flip coins for the third time. We will repeatedly all of the coins until all of them are tied, then select an arbitrary coin and begin the next round.

After $t = 100k$, we have flipped every coin exactly 100 times total. We will therefore output the arm which has the highest empirical frequency of heads after tossing every coin 100 times.

This essentially means we are only doing exploration and not exploiting, at all, good bandit arms.

### Visual Description
Text-only slide.

---
## Page 13
### Content
[Blank Page]

### Visual Description
Blank page.

---
## Page 14
### Content
9) Boosting [12 points]

Consider a weak learner that does ERM over a hypothesis class $\mathcal{H}$. Consider $n$ training points, and suppose that the empirical risk under $\mathcal{H}$ is strictly positive. Consider the $t^{th}$ iteration of AdaBoost as defined in Algorithm 2. Suppose the weak learner is wrong on samples $x_1, ..., x_m$ (for some $m \in \{1, ..., n - 1\}$) and is correct on the rest. Then what probability mass does AdaBoost put on $\{x_1, ..., x_m\}$ in distribution $\mathcal{D}^{(t+1)}$ (in other words, if you draw a sample from $\{x_1, ..., x_n\}$ via $\mathcal{D}^{(t+1)}$, then what is the probability that the sample comes from $\{x_1, ..., x_m\}$)? Please justify your answer with a proof.

**Algorithm 2: AdaBoost**
***
**Input:** $S = \{(x_i, y_i)\}_{i=1}^n$, a weak learner $WL$ over a hypothesis class $\mathcal{H}$, and the number of rounds $T$.
Initialize $\mathcal{D}^{(1)} = [\frac{1}{n}, ..., \frac{1}{n}]$ of length $n$ (distribution over $S$).
**for** $t = 1, 2, ..., T$ **do**
&nbsp;&nbsp;&nbsp;&nbsp;$h_t = WL(\mathcal{D}^{(t)}, S)$
&nbsp;&nbsp;&nbsp;&nbsp;$\epsilon_t = \sum_{i=1}^n \mathcal{D}_i^{(t)} \mathbb{1}[y_i \neq h_t(x_i)]$
&nbsp;&nbsp;&nbsp;&nbsp;$w_t = \frac{1}{2} \log \left( \frac{1-\epsilon_t}{\epsilon_t} \right)$
&nbsp;&nbsp;&nbsp;&nbsp;$\tilde{\mathcal{D}}_i^{(t+1)} = \mathcal{D}_i^{(t)} \exp(-w_t)$ if $y_i = h_t(x_i)$; $\mathcal{D}_i^{(t)} \exp(w_t)$ if $y_i \neq h_t(x_i), \forall i \in [n]$
&nbsp;&nbsp;&nbsp;&nbsp;$\mathcal{D}_i^{(t+1)} = \frac{\tilde{\mathcal{D}}_i^{(t+1)}}{\sum_{j=1}^n \tilde{\mathcal{D}}_j^{(t+1)}}, \forall i \in [n]$
**Output:** Hypothesis $h_S(X) = \text{sign} \left( \sum_{t=1}^T w_t h_t(X) \right)$
***

[Learning objective: To work out, and thereby internalize, an important property of boosting.]

$\epsilon_t = \sum_{i=1}^m \mathcal{D}_i^{(t)}$. Then $w_t = \frac{1}{2} \log \left( \frac{1 - \sum_{i=1}^m \mathcal{D}_i^{(t)}}{\sum_{i=1}^m \mathcal{D}_i^{(t)}} \right) = \frac{1}{2} \log \left( \frac{\sum_{i=m+1}^n \mathcal{D}_i^{(t)}}{\sum_{i=1}^m \mathcal{D}_i^{(t)}} \right)$

The sum of unnormalized distribution weight over misclassified examples $\sum_{j=1}^m \tilde{\mathcal{D}}_j^{(t+1)} =$
$\sum_{j=1}^m \mathcal{D}_j^{(t)} \exp(w_t) = \sum_{j=1}^m \mathcal{D}_j^{(t)} \exp \left( \frac{1}{2} \log \left( \frac{\sum_{i=m+1}^n \mathcal{D}_i^{(t)}}{\sum_{i=1}^m \mathcal{D}_i^{(t)}} \right) \right) = \sum_{j=1}^m \mathcal{D}_j^{(t)} \left( \frac{\sum_{i=m+1}^n \mathcal{D}_i^{(t)}}{\sum_{i=1}^m \mathcal{D}_i^{(t)}} \right)^{(1/2)}$

### Visual Description
The slide contains a title, a problem description, a pseudocode box for the AdaBoost algorithm, and the beginning of a solution in red text.

---
## Page 15
### Content
$= \left( \frac{\sum_{i=m+1}^n \mathcal{D}_i^{(t)}}{\sum_{i=1}^m \mathcal{D}_i^{(t)}} \right)^{(1/2)} \left( \sum_{j=1}^m \mathcal{D}_j^{(t)} \right) = \left( \sum_{i=m+1}^n \mathcal{D}_i^{(t)} \right)^{(1/2)} \left( \sum_{j=1}^m \mathcal{D}_j^{(t)} \right)^{(1/2)} = \sqrt{\left( \sum_{i=m+1}^n \mathcal{D}_i^{(t)} \right) \left( \sum_{j=1}^m \mathcal{D}_j^{(t)} \right)}$

The sum of unnormalized distribution weight over correctly classified examples $\sum_{j=m+1}^n \tilde{\mathcal{D}}_j^{(t+1)} =$
$\sum_{j=m+1}^n \mathcal{D}_j^{(t)} \exp(-w_t) = \sum_{j=m+1}^n \mathcal{D}_j^{(t)} \exp \left( -\frac{1}{2} \log \left( \frac{\sum_{i=m+1}^n \mathcal{D}_i^{(t)}}{\sum_{i=1}^m \mathcal{D}_i^{(t)}} \right) \right) = \sum_{j=m+1}^n \mathcal{D}_j^{(t)} \left( \frac{\sum_{i=1}^m \mathcal{D}_i^{(t)}}{\sum_{i=m+1}^n \mathcal{D}_i^{(t)}} \right)^{(1/2)}$
$= \left( \sum_{j=m+1}^n \mathcal{D}_j^{(t)} \right)^{(1/2)} \left( \sum_{i=1}^m \mathcal{D}_i^{(t)} \right)^{(1/2)} = \sqrt{\left( \sum_{i=m+1}^n \mathcal{D}_i^{(t)} \right) \left( \sum_{j=1}^m \mathcal{D}_j^{(t)} \right)}$

The true distribution weights for each datapoint are found by taking the unnormalized weights and normalizing them, but because the two groups (correctly and incorrectly classified) have equal unnormalized weight, they will remain proportional have equal normalized weight.

Then AdaBoost puts probability mass $\frac{1}{2}$ on $\{x_1, ..., x_m\}$ in $\mathcal{D}^{(t+1)}$.

Hopefully you had done the suggested exercise in the lecture comprising this very question.

10) MDP [4+(4+4+4+4) = 20 points]

Consider an MDP setting with $\mathcal{S} = \{0, 1\}, \mathcal{A} = \{\text{stay, move}\}$. Suppose $T(s, \text{stay}, s) = 1$ and $T(s, \text{move}, s) = 0$ for each $s \in \{0, 1\}$. Suppose $R(s, \text{stay}) = 1$ and $R(s, \text{move}) = -1$ for each $s \in \{0, 1\}$.

(1) What is the optimal policy?

The optimal policy is to stay where you are at all states. You will gain 1 reward (the largest available amount of reward per iteration) for every iteration if you simply do not move. Every move will lose reward.

(2) Suppose we execute this value iteration algorithm (in Algorithm 3), where we initialize $V^{(0)}(0) = 10$ and $V^{(0)}(1) = -10$, and choose $\gamma = \frac{1}{2}$. In this question, we will prove that running this algorithm for a large enough amount of time $T$ will yield the optimal policy. In order to do so:

### Visual Description
The slide continues the solution for the boosting problem in red text, then introduces a new problem on Markov Decision Processes (MDP) with text and math.

---
## Page 16
### Content
**Algorithm 3: Value Iteration Algorithm**
***
Initialize $V^{(0)}(s)$ arbitrarily, $\forall s$
**for** $t = 1, 2, ..., T$ **do**
&nbsp;&nbsp;&nbsp;&nbsp;**for** $(s, a) \in \mathcal{S} \times \mathcal{A}$ **do**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$Q^{(t)}(s, a) = \mathbb{E}[R(s, a)] + \gamma \sum_{s' \in \mathcal{S}} T(s, a, s') V^{(t-1)}(s')$
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$V^{(t)}(s) = \max_{a \in \mathcal{A}} Q^{(t)}(s, a)$
**Output:** $\Pi(s) = \text{argmax}_{a \in \mathcal{A}} Q^{(T)}(s, a), \forall s$
***

i) Show that for any $t \ge 0, Q^{(t)}(0, \text{stay}) > Q^{(t)}(0, \text{move})$. What does this imply about the output policy $\Pi$?

### Visual Description
The slide contains a pseudocode box for the Value Iteration Algorithm and a sub-question for the MDP problem.

---
## Page 17
### Content
ii) Show that for any $t \ge 1, V^{(t)}(0) - V^{(t)}(1) \le 2$.

iii) Show that for any $t \ge 2, V^{(t)}(0) - V^{(t)}(1) \le 1$

Page 17
### Visual Description
Text-only slide.

---
## Page 18
### Content
iv) Show that for any $t \ge 3, Q^{(t)}(1, stay) > Q^{(t)}(1, move)$. What does this imply about the output policy $\Pi$?

[Learning objective: Work out the value iteration algorithm in a toy setting to really understand how it works.]

i) We claim that for any $t \ge 0, V^{(t)}(0) > V^{(t)}(1)$. We prove this by induction. As a

Page 18
### Visual Description
Text-only slide. The last two paragraphs are written in red text.

---
## Page 19
### Content
base case, this is true for $t = 0$. Now consider any $t \ge 1$. Then $V^{(t)}(0) \ge Q^{(t)}(0, stay) = 1 + .5V^{(t-1)}(0)$. On the other hand, $V^{(t)}(1) = \max\{1 + \frac{1}{2}V^{(t-1)}(1), -1 + \frac{1}{2}V^{(t-1)}(0)\} < 1 + .5V^{(t-1)}(0)$.

Consequently we have $Q^{(t)}(0, stay) > Q^{(t)}(0, move)$ for all $t \ge 1$, and hence $\Pi(0) = stay$.

ii) We now claim that for any $t \ge 1, V^{(t)}(0) - V^{(t)}(1) \le 2$. This is because $Q^{(t)}(0, stay) - Q^{(t)}(1, move) \le 2$ and $Q^{(t)}(0, move) - Q^{(t)}(1, stay) \le 2$.

iii) We build on this to show that for any $t \ge 2, V^{(t)}(0) - V^{(t)}(1) \le 1$. To see this, first observe that due to claim (ii) above, $V^{(t)}(0) = Q^{(t)}(0, stay) = 1 + .5V^{(t-1)}(0)$. However, from (iii) we know that $V^{(t-1)}(0) - V^{(t-1)}(1) \le 2$, and hence $V^{(t)}(0) \le 1 + 1 + .5V^{(t-1)}(1)$. Further, we have that $V^{(t)}(1) \ge 1 + .5V^{(t-1)}(1)$, which proves the claim.

iv) Finally, consider any $t \ge 3$. Then $Q^{(t)}(1, stay) = 1 + .5V^{(t-1)}(1)$ and $Q^{(t)}(1, move) = -1 + .5V^{(t-1)}(0)$. Since $V^{(t-1)}(0) - V^{(t-1)}(1) \le 1$ from claim (iii), we thus get $Q^{(t)}(1, stay) > Q^{(t)}(1, move)$. This proves that $\Pi(1) = stay$.

**Alternative proof for ii) iii)** Recall that in part i), we proved that for any $t \ge 0, V^{(t)}(0) > V^{(t)}(1)$.

Then, note that this implies
$$V^{(t)}(0) = \max\{1 + \frac{1}{2}V^{(t-1)}(0), -1 + \frac{1}{2}V^{(t-1)}(1)\} = 1 + \frac{1}{2}V^{(t-1)}(0)$$
$$V^{(t)}(1) = \max\{1 + \frac{1}{2}V^{(t-1)}(1), -1 + \frac{1}{2}V^{(t-1)}(0)\} \ge 1 + \frac{1}{2}V^{(t-1)}(1)$$

Hence by subtracting the above two equations
$$V^{(t)}(0) - V^{(t)}(1) \le \frac{1}{2}(V^{(t-1)}(0) - V^{(t-1)}(1))$$

This result is helpful for proving ii) and iii).

Page 19
### Visual Description
Text-only slide. All text on this page is colored red in the original document.
