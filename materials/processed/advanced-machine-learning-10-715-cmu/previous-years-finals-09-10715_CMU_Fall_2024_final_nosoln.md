# previous-years-finals-09-10715_CMU_Fall_2024_final_nosoln

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/previous-years-finals-09-10715_CMU_Fall_2024_final_nosoln.pdf`
Duplicate equivalents: `previous-years-finals-09-10715_CMU_Fall_2024_final_nosoln.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 10

## Page 1

### Content
# CMU 10-715 Fall 2024: Final Exam

**Answer:**
**DO NOT PRINT, SOLUTIONS ARE BEING DISPLAYED!**

**Name:**

**Andrew ID:**

### Here is a hitchhiker’s guide to this final exam:

*   This is an 80 minute exam during the lecture time, from 2:00 PM to 3:20 PM.
*   You are **NOT** allowed to refer to notes, homework solutions, the textbook, lecture videos or any other outside resources.
*   You are **NOT** allowed to discuss the exam with anyone in the duration of the exam.
*   After the exam starts, we recommend taking a brief look at all questions first and then starting to answer them. You may find some questions easier than others.

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
The page contains the exam title, a warning in red text about solutions being displayed, fields for Name and Andrew ID, a list of exam instructions, and a table for the distribution of marks across five questions.

---

## Page 2

### Content
## 1) Neural Network Training [15 points]

Consider a single layer neural network with activation function $\sigma : \mathbb{R} \to \mathbb{R}$ as $\sigma(z) = z^3$. Let $\mathcal{X} = \mathbb{R}^d$ and let $\mathcal{Y} = \mathbb{R}$ (so note that this is a regression problem). Consider the squared loss function $\ell : \mathcal{Y} \times \mathcal{Y} \to \mathbb{R}$ as $\ell(\hat{y}, y) = (\hat{y} - y)^2$ where $\hat{y}$ is the output of the neural network. Now suppose that the last coordinate of any $x \in \mathcal{X}$ is always fixed at 1 so that, as discussed in class, we can avoid having a separate bias term. Finally, let $w \in \mathbb{R}^d$ denote the set of $d$ parameters of this neural network.

You are given some training data $\{(x_i, y_i)_{i \in [n]}\}$. You wish to train the neural network via stochastic gradient descent using backpropagation. Let $w^{(t)}$ denote the values of the parameters at the beginning of any iteration $t$.

Consider any iteration $t$ and let $(x, y)$ denote the training sample chosen for SGD in this iteration. The forward pass at any iteration will thus first compute intermediate quantities $a_t, o_t \in \mathbb{R}$ defined as $a_t = x^T w^{(t)}$ and $o_t = \sigma(a_t)$. Also, let the output of the neural network at iteration $t$ be $\hat{y}_t$.

Your objective in this question is to write down and evaluate backpropagation. Inspired by the perceptron algorithm, let us initialize the parameters as $w^{(0)} = 0$.

(a) At iteration $t$, the weights get updated as follows
$$w^{(t+1)} \leftarrow w^{(t)} - \eta \cdot \nabla_{w^{(t)}} \ell(\hat{y}_t, y)$$
Derive the expression for $\nabla_{w^{(t)}} \ell(\hat{y}_t, y)$ in terms of $o_t, y, a_t$, and $x$. [5 points]

**Answer:**
$$\nabla_{w^{(t)}} \ell(\hat{y}_t, y) = \frac{d\ell(\hat{y}_t, y)}{do_t} \cdot \frac{do_t}{da_t} \cdot \nabla_{w^{(t)}} a_t$$
$$= 2(o_t - y) \cdot 3a_t^2 \cdot x$$

### Visual Description
Text-heavy slide containing the first part of a multi-part problem on neural network training. It includes mathematical definitions for the network architecture, loss function, and SGD update rule. The solution to part (a) is written in red text.

---

## Page 3

### Content
(b) Compute $w^{(1)}$, based on part (a). [3 points]

**Answer:** Let the training datapoint at $t = 0$ be $(x, y)$.
Since $w^{(0)} = 0$, $a_0 = x^T w^{(0)} = 0$. Thus, $\nabla_{w^{(0)}} \ell(\hat{y}_0, y) = 0$.
$$\therefore w^{(1)} = w^{(0)} - \eta \nabla_{w^{(0)}} \ell(\hat{y}_0, y) = w^{(0)}$$

### Visual Description
Text-only slide containing part (b) of the first question and its solution in red text.

---

## Page 4

### Content
(c) Let $T$ be a very large number. Compute $w^{(T)}$, based on part (a). [3 points]

**Answer:**
$$w^{(T)} = w^{(T-1)} - \eta \nabla_{w^{(T-1)}} \ell(\hat{y}_{T-1}, y) = w^{(T-1)} = w^{(T-2)} - \eta \nabla_{w^{(T-2)}} \ell(\hat{y}_{T-2}, y) = w^{(T-2)} = \dots = w^{(0)} = 0$$
Where $(x, y)$ is the training datapoint corresponding to each iteration $t$.

### Visual Description
Text-only slide containing part (c) of the first question and its solution in red text.

---

## Page 5

### Content
(d) Comment on the quality of this training process (based on part c). [4 points]

**Answer:** The weights are never updated so there is no training. The model never learns to predict the output.

### Visual Description
Text-only slide containing part (d) of the first question and its solution in red text.

---

## Page 6

### Content
## 2) Attention Mechanism [10 points]

Consider the single-query single-head attention mechanism. Let $e \in \mathbb{R}^d$ and $e_1, \dots, e_T \in \mathbb{R}^d$ be the query and context vectors, respectively. Let $W_q, W_k, W_v \in \mathbb{R}^{d \times d}$ be the query, key, value projection matrices. For simplicity, we do not consider bias terms in the linear projections.

The output of the single-query single-head attention is
$$\tilde{v} = \sum_{t \in [T]} \frac{\exp\left(\frac{(W_q e)^T (W_k e_t)}{\sqrt{d}}\right)}{\sum_{u \in [T]} \exp\left(\frac{(W_q e)^T (W_k e_u)}{\sqrt{d}}\right)} W_v e_t.$$

Assume that each of $e, e_1, \dots, e_T$ is the token embedding of some token in the vocabulary $V$.

Prove (with a proof) or disprove (with a counterexample):
For any values of matrices $W_q, W_k, W_v$ and query and context vectors, it must necessarily be that the aforementioned output satisfies
$$\tilde{v} \in \{u \in \mathbb{R}^d \mid \exists z \in V \text{ such that token embedding of } z \text{ equals } u\}.$$

**Answer:** The claim is wrong. We disprove it with the following counterexample:
Consider the case where $|V| = 1$, that is, there is only one token in the vocabulary. Let the token embedding of the only token be the $d$-dimensional all-one vector. Set $W_q, W_k, W_v$ to zero matrices. Then, in this case, we must have
$$\tilde{v} = \sum_{t \in [T]} \frac{\exp\left(\frac{(W_q e)^T (W_k e_t)}{\sqrt{d}}\right)}{\sum_{u \in [T]} \exp\left(\frac{(W_q e)^T (W_k e_u)}{\sqrt{d}}\right)} \mathbf{0} = \mathbf{0}.$$
It is clear that $\tilde{v} \notin \{u \in \mathbb{R}^d \mid \exists z \in V \text{ such that token embedding of } z \text{ equals } u\}$.
Note that the aforementioned proof is valid for any vocabulary $V$ as long as no token in $V$ has zero token embedding.

### Visual Description
Text-heavy slide containing the second question about the attention mechanism. It includes the mathematical formula for attention output and a proof/disproof prompt. The solution, disproving the claim with a counterexample, is provided in red text.

---

## Page 7

### Content
## 3) Transformers, Training, and Loss [10 points]

Consider a vocabulary $V = \{1, 2, \dots, N_V\}$. Let $[BoS]$ (Beginning of Sequence) be a special token in the vocabulary. For a training sequence $x = [x_1, x_2, \dots, x_\ell]$ where each $x_i \in V$, the input to the model during training is the sequence $[[BoS], x_1, \dots, x_{\ell-1}]$, and the model will predict a probability distribution at each position in its output. You want to choose your loss function such that the probabilities output by the (decoder-only) Transformer have $Probability(x \mid [BoS])$ is as high as possible.

From this objective, derive the loss that is actually used:
$$\mathcal{L}(x) = -\sum_{t \in [\ell]} \log(P(x_t, t)),$$
where $P(\cdot, t)$ denotes the probability distribution over $V$ output by the decoder-only Transformer at position $t$.

**Answer:** $Probability(x \mid [BoS])$ can be decomposed using the chain rule of probability:
$$Probability(x \mid [BoS]) = \prod_{t=1}^\ell \mathbb{P}(x_t \mid [BoS], x_1, x_2, \dots, x_{t-1}).$$
Taking the logarithm yields
$$\log Probability(x \mid [BoS]) = \sum_{t=1}^\ell \log \mathbb{P}(x_t \mid [BoS], x_1, x_2, \dots, x_{t-1}).$$
Note that in a decoder-only Transformer, the probability distribution at each position $t$ is generated based on the context of the first $t$ input tokens, i.e., $[[BoS], x_1, x_2, \dots, x_{t-1}]$. Therefore, by definition, we have
$$\mathbb{P}(x_t \mid [BoS], x_1, x_2, \dots, x_{t-1}) = P(x_t, t).$$
Therefore,
$$\log Probability(x \mid [BoS]) = \sum_{t=1}^\ell \log P(x_t, t) = -\mathcal{L}(x).$$
By minimizing the actual loss $\mathcal{L}(x)$, we effectively maximize $Probability(x \mid [BoS])$, which aligns with our goal.

### Visual Description
Text-heavy slide containing the third question about Transformer training and loss derivation. It includes a problem description and a derivation of the cross-entropy loss from the maximum likelihood objective. The solution is written in red text.

---

## Page 8

### Content
## 4) Online Learning [15 points]

Recall the ‘learning from experts’ problem and the randomized weighted majority voting algorithm. Let $d$ denote the number of experts, and assume $d$ is a constant (and does not change with time).

For a pre-specified time horizon $T$, when $T \ge 2 \log d$, we showed that by choosing $\epsilon = \sqrt{\frac{\log d}{T}}$, the average regret is upper bounded as $c \sqrt{\frac{\log d}{T}}$, for a positive universal constant $c$ (for concreteness, you can think of $c = 1000$).

However, this requires a priori knowledge of $T$. A student wanted to design an algorithm that was a no regret algorithm and did not depend on a priori knowledge of $T$. Here is the algorithm that this person came up with:

*   Consider some $\tilde{T} \ge 2 \log d$.
*   Let $w_1 = w_2 = \dots = w_d = 1$
*   For $t = 1, 2, 3, \dots$ (until the actual stopping time $T$ happens and the process stops)
    *   Execute the randomized weighted majority algorithm with $\epsilon = \sqrt{(\log d)/\tilde{T}}$
    *   If $t$ is a multiple of $\tilde{T}$
        *   Reset $w_1 = w_2 = \dots = w_d = 1$

In words, the algorithm runs randomized weighted majority voting for periods of length $\tilde{T}$ and then resets the weight at the beginning of each period.

The student argued that since the algorithm is no regret for each period of length $\tilde{T}$, it is a no regret algorithm for the overall period.

Is the student right or wrong? Please justify your answer.

**Answer: Wrong**

The student argues that since the algorithm is no regret for each period of length $\tilde{T}$, it is a no regret algorithm overall. However, even if an algorithm is no regret for $\tilde{T}$, we cannot guarantee the algorithm is no regret for the overall period $T$.

A no regret algorithm should achieve
$$\lim_{T \to \infty} \frac{1}{T}(a(T) - k(T)) = 0$$
If we reset the weights periodically, the average error is not guaranteed to reach the average of the error of best expert for the overall period.

### Visual Description
Text-heavy slide containing the fourth question about online learning and the "learning from experts" problem. It describes a proposed algorithm that resets weights periodically and asks if it is a "no regret" algorithm. The answer and justification are provided in red text.

---
## Page 9
### Content
Formally, let $T = n\tilde{T} + m$ where $m < \tilde{T}$. Then,

$$
\begin{aligned}
\frac{1}{T}(a(T) - k(T)) &= \frac{1}{T} \left( \sum_{i=1}^n a(\tilde{T}) + a(m) - \left( \sum_{i=1}^n k(\tilde{T}) + k(m) \right) \right) \\
&= \frac{1}{T} (na(\tilde{T}) - nk(\tilde{T}) + a(m) - k(m)) \\
&= \frac{n}{n\tilde{T} + m} (a(\tilde{T}) - k(\tilde{T})) + \frac{1}{n\tilde{T} + m} (a(m) - k(m)) \\
&\le \frac{n\tilde{T}}{n\tilde{T} + m} c \sqrt{\frac{\log d}{\tilde{T}}} + \frac{1}{n\tilde{T} + m} (a(m) - k(m))
\end{aligned}
$$

As $T \to \infty, n \to \infty$.

$$
\begin{aligned}
\therefore \lim_{T \to \infty} \frac{1}{T}(a(T) - k(T)) &= \lim_{n \to \infty} \frac{1}{T}(a(T) - k(T)) \\
&\le \lim_{n \to \infty} \frac{n\tilde{T}}{n\tilde{T} + m} c \sqrt{\frac{\log d}{\tilde{T}}} + \frac{1}{n\tilde{T} + m} (a(m) - k(m)) \\
&= c \sqrt{\frac{\log d}{\tilde{T}}}
\end{aligned}
$$

Therefore, just because it is no regret for $\tilde{T}$, does not mean the average regret is guaranteed to converge to 0 for the overall period $T$.

Page 9

### Visual Description
The slide contains mathematical derivations written in red text on a white background. It shows a step-by-step proof regarding average regret over a period $T$.

---
## Page 10
### Content
### 5) Score Based Models [10 points]

One day, a student was thinking conceptually about Langevin dynamics. The student realized that they found a crucial conceptual flaw. They then went and gave the following argument to their friends:
"Let us consider some distribution say $p$ on $\mathbb{R}$. (I'll consider a single dimension for simplicity, and this suffices to demonstrate the flaw). Let us even suppose that $p$ is known and has all kinds of desirable properties, for instance, a Gaussian with zero mean and unit variance. Now suppose you use Langevin dynamics to sample from $p$. Formally, one would first sample an initial point $x_0$. Then for a large number of steps $t = 1, 2, \dots, T$, one would compute $x_{t+1} = x_t + \frac{\epsilon}{2} \log \nabla p(x_t) + \sqrt{\epsilon}\mathcal{N}(0, 1)$. Now consider some point $x \in \mathbb{R}$ where the peak of $p$ occurs. Since this is near the maximum, the gradient will be very close to zero. Hence $\log \nabla p(x_t)$ will be a negative number with a very large magnitude. Due to these large-magnitude gradients, the next iterate will move away very far from the peak. Hence we may not sample from high probability regions with as high a probability as we want."
Can you find a key flaw in his arguments?

**Answer:** Langevin dynamics uses the score function in the updates. The score function is defined as: $\nabla \log p(x)$ and not as $\log \nabla p(x)$. (In fact, $\log \nabla p(x)$ is not even defined when $\nabla p(x)$ is negative.)
Thus, the student is using an incorrect update formula in their arguments. The score function would not be a very large negative number when $p$ peaks. In this case, $p$ is a Gaussian distribution with zero mean and unit variance,

$$ \nabla \log p(x) = \frac{\partial}{\partial x} \left( \frac{-x^2}{2} - \frac{1}{2} \log(2\pi) \right) = -x $$

which is not unbounded at $x = 0$.

Page 10

### Visual Description
Text-only slide. The problem description is in black text, and the answer/explanation is provided in red text below it. There is a mathematical derivation for the score function of a Gaussian distribution at the bottom.
