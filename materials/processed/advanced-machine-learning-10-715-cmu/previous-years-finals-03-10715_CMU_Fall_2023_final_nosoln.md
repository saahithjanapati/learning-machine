# previous-years-finals-03-10715_CMU_Fall_2023_final_nosoln

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/previous-years-finals-03-10715_CMU_Fall_2023_final_nosoln.pdf`
Duplicate equivalents: `previous-years-finals-03-10715_CMU_Fall_2023_final_nosoln.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 12

## Page 1
### Content
CMU 10-715 Fall 2023: Final Exam

**Name:**

**Andrew ID:**

**Distribution of Marks**

| Question | Points | Score |
| :--- | :--- | :--- |
| **1** | 10 | |
| **2** | 10 | |
| **3** | 10 | |
| **4** | 10 | |
| **5** | 10 | |
| Total: | 50 | |

### Visual Description
A cover page for an exam with a title, identification fields for Name and Andrew ID, and a grading table showing five questions worth 10 points each for a total of 50 points.

---

## Page 2
### Content
### 1) Single-layer network

Consider $\mathcal{X} = \mathbb{R}^2, \mathcal{Y} = \mathbb{R}$.

Consider a neural network with the following architecture: zero hidden layers, one neuron in the output layer, and some non-decreasing activation function sigma. Let $\mathcal{H}$ denote this hypothesis class. Let $h : \mathbb{R}^2 \to \mathbb{R}$ denote the function that simply takes the product of its two arguments, that is, $h(x_1, x_2) = x_1x_2$. Show that $h \notin \mathcal{H}$. You can feel free to assume that there is no bias term in the neural network architecture (although note that the result actually holds even if there is one).

Hint: Recall an exercise about the XOR function (with inputs $\pm 1$) I had mentioned in the first lecture of depth and again in the first lecture of breadth. Do that exercise and use it to answer the question.

[Learning objective: Further understand limitations of "shallow" networks.]

Page 2

### Visual Description
Text-only slide.

---

## Page 3
### Content
Page 3

### Visual Description
Blank page.

---

## Page 4
### Content
### 2) Neural hypothesis class

Recall that for a hypothesis class $\mathcal{H}$, an algorithm is said to be a proper learning algorithm if its output is always guaranteed to lie in $\mathcal{H}$.

Consider some neural network architecture represented by $\mathcal{H}$. Let $\mathcal{W}$ be the set of possible values of the weights under this architecture. That is, we consider the hypothesis class $\mathcal{H} = \{h_w : \mathbb{R}^d \to \mathbb{R} | w \in \mathcal{W}\}$. Let $x_i \in \mathbb{R}^d, y_i \in \mathbb{R}, i = 1, 2, ..., n$ be our training data. Instead of conventional ERM, consider the following objective:

$$\arg \min_{w \in \mathcal{W}} \frac{1}{n} \left( \sum_{i \in [n]} (h_w(x_i) - y_i)^2 + 4||w||_2^2 \right),$$

where $h_w$ is the neural network hypothesis with weights set as $w$. You optimize this objective via stochastic gradient descent, where you initialize each entry of $w$ as independent Gaussians with mean 0 and variance 1. Let $w_0$ denote the output of SGD. The final output of your machine learning algorithm is obtained by setting weights $w_0$ in the aforementioned architecture.

Then please state true or false, most importantly with a justification: "This is a proper learning algorithm."

[Learning objective: This sheds a tiny bit of light, in a certain way, on regularization in ERM.]

Page 4

### Visual Description
Text-only slide.

---

## Page 5
### Content
### 3) Neural architecture "search"

Consider $\mathcal{X} = \mathbb{R}^d$ for some positive integer $d$ and $\mathcal{Y} = \{-1, 1\}$.

An MIT student wanted to design a binary classifier. The student had some training data, wanted to use neural networks, but did not know what architecture to use. The student decided to use the sigmoid activation function: $\sigma(x) = \frac{1}{1+e^{-x}}$. Since the output of this function is real valued, the student took the sign of the output (or equivalently, at the output layer, computed $\text{sign}(\frac{1}{1+e^{-x}})$ as the activation). The student also decided to use a feed-forward, layered, fully connected DAG.

Finally, in order to decide the depth of the network and the number of neurons at each layer, the student used neural architecture search. To this end, the student randomly split the data into two equal halves – a training half and a validation half. For various values of depth and #neurons, the student trained the architecture on the training data. However, the student found that the validation error (in terms of the 0-1 loss) was consistently around 50% for every architecture.

The student thought maybe something is wrong with their optimization algorithm or their code. The student checked these thoroughly and found no problem in these. The student then thought the data may be crazy. The data comprised 300,000 labeled samples, with about 50% having a label $+1$ and 50% labeled $-1$. The student eyeballed the data and that was also ok.

Finally, the student decided to expand the neural architecture search to also search over activation functions. The student then tried the sign activation function ($\text{sign}(x) = +1$ if $x > 0$ and $-1$ if $x \le 0$) and it started resulting in a significantly smaller and reasonable training error!

Based on this information, can you guess what is happening?

[Learning objective: To train yourself to be careful, and have a keen eye to identify potential problems.]

Page 5

### Visual Description
Text-only slide.

---

## Page 6
### Content
Page 6

### Visual Description
Blank page.

---

## Page 7
### Content
### 4) Pre-training, fine-tuning, and decision trees

* **Pre-training.** Let $\mathcal{X} = \{0, 1\}^3$ and $\mathcal{Y} = \{0, 1\}$. You receive twenty samples of this data from setting $\mathcal{A}$ in Table 1. Use this data to construct a decision tree (label this as Tree A). Use the ID3 Algorithm we learned in class. The gain function should be training error. There is no restriction on the depth of the tree (i.e., run the algorithm to completion). Note that this data is noisy so the decision tree may not be a perfect classifier. Feel free to break any ties at random.

* **Fine tuning.** Next, we will move to a different setting, setting $\mathcal{B}$. First, prune your decision tree to depth at most 2 (i.e., there should be at most 2 edges and 3 nodes along any path in the tree). Please redraw this pruned decision tree. Then, use the training data from setting $\mathcal{B}$ in Table 2 to build the lower levels of your tree based on your starting pruned tree. Again, use the ID3 algorithm, with training error as the gain function, and no restrictions on the depth of the tree. Label this pruned + rebuilt tree as Tree B.

* **Evaluation** Now use the test data from setting $\mathcal{B}$ in Table 3. Evaluate the performance of the test data on Tree A and on Tree B. What do you observe?

To be clear, a complete answer to this question will include a drawing of Tree A, a separate drawing of Tree B, the test error on Tree A, the test error on Tree B, and a comment on the two test error values. Make sure to show your work for the potential to earn partial credit.

[Learning objective: In the class, we have discussed the idea of pre-training and fine tuning in the context of neural networks. In this question, we expand our horizon to also think about it for decision trees. This will help un-tunnel-vision us from neural networks, in order to grasp the concept of pre-training and fine tuning decoupled from a specific machine learning algorithm.]

Page 7

### Visual Description
Text-only slide.

---

## Page 8
### Content
| $X_1$ | $X_2$ | $X_3$ | $Y$ |
| :--- | :--- | :--- | :--- |
| 0 | 0 | 0 | 1 |
| 0 | 0 | 0 | 1 |
| 0 | 0 | 0 | 1 |
| 0 | 0 | 1 | 0 |
| 0 | 0 | 1 | 0 |
| 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 1 |
| 0 | 1 | 0 | 1 |
| 0 | 1 | 0 | 1 |
| 0 | 1 | 0 | 1 |
| 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 1 |
| 1 | 0 | 0 | 1 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 1 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 0 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 |
| 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 |
| 1 | 1 | 1 | 0 |
| 1 | 1 | 1 | 0 |
| 1 | 1 | 1 | 0 |

**Table 1: Pre-training data in Setting $\mathcal{A}$**

| $X_1$ | $X_2$ | $X_3$ | $Y$ |
| :--- | :--- | :--- | :--- |
| 0 | 0 | 1 | 1 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 0 |

**Table 2: Training data from Setting $\mathcal{B}$**

| $X_1$ | $X_2$ | $X_3$ | $Y$ |
| :--- | :--- | :--- | :--- |
| 0 | 0 | 0 | 1 |
| 0 | 0 | 1 | 1 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 1 |

**Table 3: Test data from Setting $\mathcal{B}$**

Page 8

### Visual Description
Three tables containing binary data for features $X_1, X_2, X_3$ and label $Y$. Table 1 contains 25 rows of pre-training data. Table 2 contains 8 rows of training data for setting B. Table 3 contains 7 rows of test data for setting B.

---
## Page 9
### Content
Page 9
### Visual Description
Blank page with "Page 9" centered at the bottom.

---
## Page 10
### Content
Page 10
### Visual Description
Blank page with "Page 10" centered at the bottom.

---
## Page 11
### Content
### 5) Ensemble methods

Consider the following setting. Let $\mathcal{X} = [0, 1]$ and $\mathcal{Y} = \{-1, 1\}$. Consider three hypotheses $h_1, h_2, h_3 : \mathcal{X} \to \mathcal{Y}$. In class, we learned about ensemble methods which use multiple such hypothesis, and the output hypothesis is some aggregate of their outputs. Consider simple majority voting as the aggregate, that is, consider the hypothesis $h : \mathcal{X} \to \mathcal{Y}$ as $h(x) = \text{sign}(\frac{1}{3}(h_1(x) + h_2(x) + h_3(x)))$. Finally, consider the realizable setting with some $h^* : \mathcal{X} \to \mathcal{Y}$, and assume that the distribution from which the $x$s are drawn is a uniform distribution over $[0, 1]$.

Can you construct some $h^* : \mathcal{X} \to \mathcal{Y}$ and $h_1, h_2, h_3$ such that the risk of $h$ is strictly higher than the risks of all their individual hypotheses $h_1, h_2, h_3$.

**Hint:** Divide $\mathcal{X} = [0, 1]$ into three regions. Assume the risk of $h_1, h_2, h_3$ are constant within each region.

[Learning objective: In class we discussed various benefits of ensemble methods. This question completes the picture by helping us understand its limitations and where things can go wrong.]

Page 11
### Visual Description
Text-only slide.

---
## Page 12
### Content
Page 12
### Visual Description
Blank page with "Page 12" centered at the bottom.

---
