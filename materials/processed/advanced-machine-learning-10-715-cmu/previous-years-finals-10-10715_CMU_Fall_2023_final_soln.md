# previous-years-finals-10-10715_CMU_Fall_2023_final_soln

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/previous-years-finals-10-10715_CMU_Fall_2023_final_soln.pdf`
Duplicate equivalents: `previous-years-finals-10-10715_CMU_Fall_2023_final_soln.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 12

## Page 1
### Content
CMU 10-715 Fall 2023: Final Exam

Answer: **DO NOT PRINT, SOLUTIONS ARE BEING DISPLAYED!**

Name:

Andrew ID:

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
The cover page of a final exam for CMU course 10-715. It includes fields for Name and Andrew ID, a warning in red text stating that solutions are being displayed, and a grading table showing five questions worth 10 points each for a total of 50 points.

---
## Page 2
### Content
### 1) Single-layer network

Consider $\mathcal{X} = \mathbb{R}^2, \mathcal{Y} = \mathbb{R}$.

Consider a neural network with the following architecture: zero hidden layers, one neuron in the output layer, and some non-decreasing activation function sigma. Let $\mathcal{H}$ denote this hypothesis class. Let $h : \mathbb{R}^2 \to \mathbb{R}$ denote the function that simply takes the product of its two arguments, that is, $h(x_1, x_2) = x_1x_2$. Show that $h \notin \mathcal{H}$. You can feel free to assume that there is no bias term in the neural network architecture (although note that the result actually holds even if there is one).

Hint: Recall an exercise about the XOR function (with inputs $\pm 1$) I had mentioned in the first lecture of depth and again in the first lecture of breadth. Do that exercise and use it to answer the question.

[Learning objective: Further understand limitations of "shallow" networks.]

**Answer:** We will show that it cannot represent the XOR function. XOR is a special case of multiplication, and hence if it can represent the multiplication function, it should also represent the XOR function.

According to the definition, $h(-1, -1) = 1, h(-1, 1) = -1, h(1, -1) = -1, h(1, 1) = 1$. We will prove that there is no function in $\mathcal{H}$, such that it takes exactly these values at these four points respectively so that we will prove $h \notin \mathcal{H}$.

Suppose there is a function $h_1 \in \mathcal{H}$, such that $h_1(-1, -1) = 1, h_1(-1, 1) = -1, h_1(1, -1) = -1, h_1(1, 1) = 1$. According to the definition of this neural network, $h_1(x_1, x_2) = \sigma(w_1x_1 + w_2x_2)$, where $\sigma$ is some non-decreasing function, and $w_1, w_2$ are the input weights. We know that, $h_1(1, 1) = \sigma(w_1 + w_2), h_1(1, -1) = \sigma(w_1 - w_2), h_1(-1, 1) = \sigma(-w_1 + w_2), h_1(-1, -1) = \sigma(-w_1 - w_2)$.

One can observe that $((w_1+w_2)-(w_1-w_2))((-w_1+w_2)-(-w_1-w_2)) = 4w_2^2 \ge 0$. Since $\sigma$ is a non-decreasing function, $(\sigma(w_1 + w_2) - \sigma(w_1 - w_2))$ and $((w_1 + w_2) - (w_1 - w_2))$ are of the same sign, also $(\sigma(-w_1 + w_2) - \sigma(-w_1 - w_2))$ and $((-w_1 + w_2) - (-w_1 - w_2))$ are of the same sign. Thus we have the following:
$$(\sigma(w_1 + w_2) - \sigma(w_1 - w_2))(\sigma(-w_1 + w_2) - \sigma(-w_1 - w_2)) \ge 0$$
i.e.,
$$(h_1(1, 1) - h_1(1, -1))(h_1(-1, 1) - h_1(-1, -1)) \ge 0$$
However, according to the assumption, $(h_1(1, 1) - h_1(1, -1))(h_1(-1, 1) - h_1(-1, -1)) = (h(1, 1) - h(1, -1))(h(-1, 1) - h(-1, -1)) = -4$, leading to contradiction. In conclusion, $h \notin \mathcal{H}$.

Page 2

### Visual Description
Text-only slide. The problem statement is in black text, and the solution is provided in red text.

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
$$\arg \min_{w \in \mathcal{W}} \frac{1}{n} \left( \sum_{i \in [n]} (h_w(x_i) - y_i)^2 + 4\|w\|_2^2 \right),$$
where $h_w$ is the neural network hypothesis with weights set as $w$. You optimize this objective via stochastic gradient descent, where you initialize each entry of $w$ as independent Gaussians with mean 0 and variance 1. Let $w_0$ denote the output of SGD. The final output of your machine learning algorithm is obtained by setting weights $w_0$ in the aforementioned architecture.

Then please state true or false, most importantly with a justification: "This is a proper learning algorithm."

[Learning objective: This sheds a tiny bit of light, in a certain way, on regularization in ERM.]

**Answer:** True. The algorithm optimizes over the weights of the neural network architecture, and thus the output $w_0 \in \mathcal{W} \implies$ this is a proper learning algorithm.

If you considered $\mathcal{W}$ to be some constrained set (e.g., entries in $[-1, 1]$), argued that SGD may yield a value outside this set, and hence it is not a proper learning algorithm, that is also acceptable.

Page 4

### Visual Description
Text-only slide. The problem statement is in black text, and the solution is provided in red text.

---
## Page 5
### Content
### 3) Neural architecture "search"

Consider $\mathcal{X} = \mathbb{R}^d$ for some positive integer $d$ and $\mathcal{Y} = \{-1, 1\}$.

An MIT student wanted to design a binary classifier. The student had some training data, wanted to use neural networks, but did not know what architecture to use. The student decided to use the sigmoid activation function: $\sigma(x) = \frac{1}{1+e^{-x}}$. Since the output of this function is real valued, the student took the sign of the output (or equivalently, at the output layer, computed $\text{sign}(\frac{1}{1+e^{-x}})$ as the activation). The student also decided to use a feed-forward, layered, fully connected DAG.

Finally, in order to decide the depth of the network and the number of neurons at each layer, the student used neural architecture search. To this end, the student randomly split the data into two equal halves – a training half and a validation half. For various values of depth and #neurons, the student trained the architecture on the training data. However, the student found that the validation error (in terms of the 0-1 loss) was consistently around 50% for every architecture.

The student thought maybe something is wrong with their optimization algorithm or their code. The student checked these thoroughly and found no problem in these. The student then thought the data may be crazy. The data comprised 300,000 labeled samples, with about 50% having a label +1 and 50% labeled -1. The student eyeballed the data and that was also ok.

Finally, the student decided to expand the neural architecture search to also search over activation functions. The student then tried the sign activation function ($\text{sign}(x) = +1$ if $x > 0$ and $-1$ if $x \le 0$) and it started resulting in a significantly smaller and reasonable training error!

Based on this information, can you guess what is happening?

[Learning objective: To train yourself to be careful, and have a keen eye to identify potential problems.]

**Answer:** The sigmoid function is always positive, so when we take the sign of the output, the sign will always be positive. This leads to around 50% error since we may expect that around half of the labels are positive and half are negative. Since we label all data as positive, about half of these will be correct by chance.

Page 5

### Visual Description
Text-only slide. The problem statement is in black text, and the solution is provided in red text.

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

*   **Pre-training.** Let $\mathcal{X} = \{0, 1\}^3$ and $\mathcal{Y} = \{0, 1\}$. You receive twenty samples of this data from setting $\mathcal{A}$ in Table 1. Use this data to construct a decision tree (label this as Tree A). Use the ID3 Algorithm we learned in class. The gain function should be training error. There is no restriction on the depth of the tree (i.e., run the algorithm to completion). Note that this data is noisy so the decision tree may not be a perfect classifier. Feel free to break any ties at random.
*   **Fine tuning.** Next, we will move to a different setting, setting $\mathcal{B}$. First, prune your decision tree to depth at most 2 (i.e., there should be at most 2 edges and 3 nodes along any path in the tree). Please redraw this pruned decision tree. Then, use the training data from setting $\mathcal{B}$ in Table 2 to build the lower levels of your tree based on your starting pruned tree. Again, use the ID3 algorithm, with training error as the gain function, and no restrictions on the depth of the tree. Label this pruned + rebuilt tree as Tree B.
*   **Evaluation** Now use the test data from setting $\mathcal{B}$ in Table 3. Evaluate the performance of the test data on Tree A and on Tree B. What do you observe?

To be clear, a complete answer to this question will include a drawing of Tree A, a separate drawing of Tree B, the test error on Tree A, the test error on Tree B, and a comment on the two test error values. Make sure to show your work for the potential to earn partial credit.

[Learning objective: In the class, we have discussed the idea of pre-training and fine tuning in the context of neural networks. In this question, we expand our horizon to also think about it for decision trees. This will help un-tunnel-vision us from neural networks, in order to grasp the concept of pre-training and fine tuning decoupled from a specific machine learning algorithm.]

Page 7

### Visual Description
Text-only slide describing a multi-part problem involving decision trees, pre-training, and fine-tuning.

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
This page contains three tables of binary data ($X_1, X_2, X_3, Y$) used for the decision tree problem on the previous page. Table 1 has 25 rows, Table 2 has 8 rows, and Table 3 has 7 rows.

---
## Page 9
### Content
**Answer:**

![Tree A](tree_a.png)
**Tree A**

Figure 1: Tree A: Decision tree using pretraining data in Setting $\mathcal{A}$. Leaves with 1/0 can have either label and the tree has the same training error.

![Tree B](tree_b.png)
**Tree B**

Figure 2: Tree B: Decision tree pruned and redrawn using the training data data in Setting $\mathcal{B}$.

<span style="color:red">
Test error on Tree A: $4/7$  
Test error on Tree B: $2/7$  
The test error on Tree B is lower since we finetuned on data that was from the setting of the test data.
</span>

Page 9

### Visual Description
The page contains two decision tree diagrams labeled "Tree A" and "Tree B". 
- **Tree A** starts with root node $X_3$. The left branch (0) leads to $X_1$, which further splits into a leaf [1] and another node $X_2$. The right branch (1) leads to $X_2$, which further splits into a node $X_1$ and a leaf [0].
- **Tree B** has an identical structure to Tree A but with different values in the leaf nodes.
Below the diagrams, there is text in red providing the test errors for both trees and a brief explanation.
---
## Page 10
### Content
Page 10

### Visual Description
Text-only slide. The page is blank except for the page number "Page 10" at the bottom.
---
## Page 11
### Content
### 5) Ensemble methods

Consider the following setting. Let $\mathcal{X} = [0, 1]$ and $\mathcal{Y} = \{-1, 1\}$. Consider three hypotheses $h_1, h_2, h_3 : \mathcal{X} \to \mathcal{Y}$. In class, we learned about ensemble methods which use multiple such hypothesis, and the output hypothesis is some aggregate of their outputs. Consider simple majority voting as the aggregate, that is, consider the hypothesis $h : \mathcal{X} \to \mathcal{Y}$ as $h(x) = \text{sign}(\frac{1}{3}(h_1(x) + h_2(x) + h_3(x)))$. Finally, consider the realizable setting with some $h^* : \mathcal{X} \to \mathcal{Y}$, and assume that the distribution from which the $x$s are drawn is a uniform distribution over $[0, 1]$.

Can you construct some $h^* : \mathcal{X} \to \mathcal{Y}$ and $h_1, h_2, h_3$ such that the risk of $h$ is strictly higher than the risks of all their individual hypotheses $h_1, h_2, h_3$.

Hint: Divide $\mathcal{X} = [0, 1]$ into three regions. Assume the risk of $h_1, h_2, h_3$ are constant within each region.

[Learning objective: In class we discussed various benefits of ensemble methods. This question completes the picture by helping us understand its limitations and where things can go wrong.]

Page 11

### Visual Description
Text-only slide.
---
## Page 12
### Content
**Answer:** Consider the case where in each region, only one of $h_1, h_2$, and $h_3$ is correct. Then the majority would always be wrong, leading $h(x)$ to have a risk of 1. On the other hand, if $h_1(x)$ is correct in the first region, $h_2(x)$ is correct in the second region, and $h_3(x)$ is correct in the third region, each of them has a risk of $\frac{2}{3}$, which is strictly lower than that of $h(x)$.

One may think that this construction is pathological because all errors are greater than a half in a binary classificaiton setting. And you are correct. However, this is a smaller example to illustrate a more general phenomenon. Let us extend this example a little bit. More generally, such a situation may occur in part of the region. E.g., all three individual hypotheses and the ensemble may be corect in $[0, 0.9]$, and then within $[0.9, 1]$ there may be three regions where the aforementioend issue occurs. Then the error of each individual hypothesis is $0.1 \times \frac{2}{3}$ and the error of the ensemble is $0.1$.

Page 12

### Visual Description
Text-only slide. The text is written in red font.
