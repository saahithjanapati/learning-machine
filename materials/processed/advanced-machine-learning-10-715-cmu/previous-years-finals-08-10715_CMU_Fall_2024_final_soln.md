# previous-years-finals-08-10715_CMU_Fall_2024_final_soln

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/previous-years-finals-08-10715_CMU_Fall_2024_final_soln.pdf`
Duplicate equivalents: `previous-years-finals-08-10715_CMU_Fall_2024_final_soln.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 14

## Page 1
### Content
# CMU 10-715 Fall 2024: Final Exam

**Name:**

**Andrew ID:**

### Here is a hitchhiker’s guide to this final exam:

* This is an 80 minute exam during the lecture time, from 2:00 PM to 3:20 PM.
* You are **NOT** allowed to refer to notes, homework solutions, the textbook, lecture videos or any other outside resources.
* You are **NOT** allowed to discuss the exam with anyone in the duration of the exam.
* After the exam starts, we recommend taking a brief look at all questions first and then starting to answer them. You may find some questions easier than others.

### Distribution of Marks

| Question | Points | Score |
| :--- | :--- | :--- |
| **1** | 15 | |
| **2** | 10 | |
| **3** | 10 | |
| **4** | 15 | |
| **5** | 10 | |
| Total: | 60 | |

### Visual Description
Exam cover page containing the course title, fields for student name and ID, a list of exam instructions, and a table showing the distribution of marks across five questions.

---
## Page 2
### Content
## 1) Neural Network Training [15 points]

Consider a single layer neural network with activation function $\sigma : \mathbb{R} \to \mathbb{R}$ as $\sigma(z) = z^3$. Let $\mathcal{X} = \mathbb{R}^d$ and let $\mathcal{Y} = \mathbb{R}$ (so note that this is a regression problem). Consider the squared loss function $\ell : \mathcal{Y} \times \mathcal{Y} \to \mathbb{R}$ as $\ell(\hat{y}, y) = (\hat{y} - y)^2$ where $\hat{y}$ is the output of the neural network. Now suppose that the last coordinate of any $x \in \mathcal{X}$ is always fixed at 1 so that, as discussed in class, we can avoid having a separate bias term. Finally, let $w \in \mathbb{R}^d$ denote the set of $d$ parameters of this neural network.

You are given some training data $\{(x_i, y_i)\}_{i \in [n]}$. You wish to train the neural network via stochastic gradient descent using backpropagation. Let $w^{(t)}$ denote the values of the parameters at the beginning of any iteration $t$.

Consider any iteration $t$ and let $(x, y)$ denote the training sample chosen for SGD in this iteration. The forward pass at any iteration will thus first compute intermediate quantities $a_t, o_t \in \mathbb{R}$ defined as $a_t = x^T w^{(t)}$ and $o_t = \sigma(a_t)$. Also, let the output of the neural network at iteration $t$ be $\hat{y}_t$.

Your objective in this question is to write down and evaluate backpropagation. Inspired by the perceptron algorithm, let us initialize the parameters as $w^{(0)} = 0$.

Page 2

### Visual Description
Text-only slide.

---
## Page 3
### Content
(a) At iteration $t$, the weights get updated as follows
$$w^{(t+1)} \leftarrow w^{(t)} - \eta \cdot \nabla_{w^{(t)}} \ell(\hat{y}_t, y)$$
Derive the expression for $\nabla_{w^{(t)}} \ell(\hat{y}_t, y)$ in terms of $o_t, y, a_t$, and $x$. [5 points]

Page 3

### Visual Description
Text-only slide.

---
## Page 4
### Content
(b) Compute $w^{(1)}$, based on part (a). [3 points]

Page 4

### Visual Description
Text-only slide.

---
## Page 5
### Content
(c) Let $T$ be a very large number. Compute $w^{(T)}$, based on part (a). [3 points]

Page 5

### Visual Description
Text-only slide.

---
## Page 6
### Content
(d) Comment on the quality of this training process (based on part (c)). [4 points]

Page 6

### Visual Description
Text-only slide.

---
## Page 7
### Content
## 2) Attention Mechanism [10 points]

Consider the single-query single-head attention mechanism. Let $e \in \mathbb{R}^d$ and $e_1, \dots, e_T \in \mathbb{R}^d$ be the query and context vectors, respectively. Let $W_q, W_k, W_v \in \mathbb{R}^{d \times d}$ be the query, key, value projection matrices. For simplicity, we do not consider bias terms in the linear projections.

The output of the single-query single-head attention is
$$\tilde{v} = \sum_{t \in [T]} \frac{\exp\left(\frac{(W_q e)^\top (W_k e_t)}{\sqrt{d}}\right)}{\sum_{u \in [T]} \exp\left(\frac{(W_q e)^\top (W_k e_u)}{\sqrt{d}}\right)} W_v e_t.$$

Assume that each of $e, e_1, \dots, e_T$ is the token embedding of some token in the vocabulary $V$.

Prove (with a proof) or disprove (with a counterexample):
For any values of matrices $W_q, W_k, W_v$ and query and context vectors, it must necessarily be that the aforementioned output satisfies
$$\tilde{v} \in \{u \in \mathbb{R}^d \mid \exists z \in V \text{ such that token embedding of } z \text{ equals } u\}.$$

Page 7

### Visual Description
Slide containing text and a mathematical formula for the single-query single-head attention mechanism.

---
## Page 8
### Content
Page 8

### Visual Description
Blank page.

---
## Page 9
### Content
3) Transformers, Training, and Loss [10 points]

Consider a vocabulary $V = \{1, 2, \dots, N_V\}$. Let [BoS] (Beginning of Sequence) be a special token in the vocabulary. For a training sequence $x = [x_1, x_2, \dots, x_\ell]$ where each $x_i \in V$, the input to the model during training is the sequence $[[BoS], x_1, \dots, x_{\ell-1}]$, and the model will predict a probability distribution at each position in its output. You want to choose your loss function such that the probabilities output by the (decoder-only) Transformer have $\text{Probability}(x \mid [BoS])$ is as high as possible.

From this objective, derive the loss that is actually used:
$$\mathcal{L}(x) = -\sum_{t \in [\ell]} \log(P(x_t, t)),$$
where $P(\cdot, t)$ denotes the probability distribution over $V$ output by the decoder-only Transformer at position $t$.

Page 9
### Visual Description
Text-only slide.

---
## Page 10
### Content
Page 10
### Visual Description
Blank page.

---
## Page 11
### Content
4) Online Learning [15 points]

Recall the ‘learning from experts’ problem and the randomized weighted majority voting algorithm. Let $d$ denote the number of experts, and assume $d$ is a constant (and does not change with time).

For a pre-specified time horizon $T$, when $T \ge 2 \log d$, we showed that by choosing $\epsilon = \sqrt{\frac{\log d}{T}}$, the average regret is upper bounded as $c\sqrt{\frac{\log d}{T}}$, for a positive universal constant $c$ (for concreteness, you can think of $c = 1000$).

However, this requires a priori knowledge of $T$. A student wanted to design an algorithm that was a no regret algorithm and did not depend on a priori knowledge of $T$. Here is the algorithm that this person came up with:

* Consider some $\tilde{T} \ge 2 \log d$.
* Let $w_1 = w_2 = \dots = w_d = 1$
* For $t = 1, 2, 3, \dots$ (until the actual stopping time $T$ happens and the process stops)
    - Execute the randomized weighted majority algorithm with $\epsilon = \sqrt{(\log d)/\tilde{T}}$
    - If $t$ is a multiple of $\tilde{T}$
        * Reset $w_1 = w_2 = \dots = w_d = 1$

In words, the algorithm runs randomized weighted majority voting for periods of length $\tilde{T}$ and then resets the weight at the beginning of each period.

The student argued that since the algorithm is no regret for each period of length $\tilde{T}$, it is a no regret algorithm for the overall period.

Is the student right or wrong? Please justify your answer.

Page 11
### Visual Description
Text-only slide.

---
## Page 12
### Content
Page 12
### Visual Description
Blank page.

---
## Page 13
### Content
5) Score Based Models [10 points]

One day, a student was thinking conceptually about Langevin dynamics. The student realized that they found a crucial conceptual flaw. They then went and gave the following argument to their friends:

“Let us consider some distribution say $p$ on $\mathbb{R}$. (I’ll consider a single dimension for simplicity, and this suffices to demonstrate the flaw). Let us even suppose that $p$ is known and has all kinds of desirable properties, for instance, a Gaussian with zero mean and unit variance. Now suppose you use Langevin dynamics to sample from $p$. Formally, one would first sample an initial point $x_0$. Then for a large number of steps $t = 1, 2, \dots, T$, one would compute $x_{t+1} = x_t + \frac{\epsilon}{2} \nabla \log p(x_t) + \sqrt{\epsilon} \mathcal{N}(0, 1)$. Now consider some point $x \in \mathbb{R}$ where the peak of $p$ occurs. Since this is near the maximum, the gradient will be very close to zero. Hence $\nabla \log p(x_t)$ will be a negative number with a very large magnitude. Due to these large-magnitude gradients, the next iterate will move away very far from the peak. Hence we may not sample from high probability regions with as high a probability as we want.”

Can you find a key flaw in his arguments?

Page 13
### Visual Description
Text-only slide.

---
## Page 14
### Content
Page 14
### Visual Description
Blank page.
