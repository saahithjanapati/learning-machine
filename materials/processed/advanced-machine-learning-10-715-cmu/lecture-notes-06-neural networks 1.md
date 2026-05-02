# lecture-notes-06-neural networks 1

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/lecture-notes-06-neural networks 1.pdf`
Duplicate equivalents: `lecture-notes-06-neural networks 1.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 4

## Page 1
### Content
**10-715 Advanced Introduction to Machine Learning**  
**Fall 2019**  
**Lecture 10: October 16, 2019**  
**Lecturer: Nihar B. Shah**  
**Scribes: Yujie Xu, Napol Rachatasumrit**

**Note:** LaTeX template courtesy of UC Berkeley EECS dept.  
**Disclaimer:** These notes have not been subjected to the usual scrutiny reserved for formal publications. They may be distributed outside this class only with the permission of the Instructor.

### 10.1 Neural Networks
A neural network is, roughly speaking, many perceptrons put together. Recall perceptron is of the following structure:

![Figure 10.1: The structure of a perceptron]

Let’s consider $\sigma(\sum_{i=1}^d x_i w_i)$ for some $\sigma : \mathbb{R} \to \mathbb{R}$. Typically $\sigma$ is a non-decreasing function. Some examples of $\sigma$ are sign, sigmoid, and ReLU (Rectified Linear Unit).

$\sigma$ is called the **Activation Function**.

### 10.2 Feedforward Neural Network
A feedforward neural network is a Directed Acyclic Graph (DAG) starting from the inputs, and ending at the outputs. At each edge there’s a scaler parameter. Each neuron just acts like the perceptron above.

![Figure 10.2: feedforward neural network]

### Visual Description
- Figure 10.1: A diagram of a perceptron showing inputs $x_1, \dots, x_d$ pointing to a circular node (neuron), which then outputs to a box labeled "sign" and then the summation $\sum_{i=1}^d x_i w_i$.
- Figure 10.2: A diagram of a feedforward neural network. It shows input nodes $x_1, \dots, x_d$ and a bias input $1$ in $\mathbb{R}^d$ connecting to a hidden layer of neurons, which then connect to an output node. Red arrows highlight a specific "Neuron" and the "Output".

---

## Page 2
### Content
10-2 Lecture 10: October 16, 2019

Following are some terminologies:
* The graph structure and $\sigma$ specifies the **neural network architecture**
* The architecture and the set of all possible parameters specifies a **hypothesis class**
* Each choice of the parameters specifies a **hypothesis**.

### 10.3 Layered Feedforward Neural Network
In a layered feedforward neural network, neurons are in layers, and any edge can only connect adjacent layers. Such a layered network is called **fully connected** if for every pair of neurons in adjacent layers, there is an edge connecting them.

![Figure 10.3: layered feedforward neural network]

The **depth** of a neural network is the total number of layers excluding the input layer, denoted as $T$. There’s four layers in the network above. The **width** of a neural network is the number of nodes in the biggest hidden or output layer. The above network has width 4.

Now we’ll analyze how big the hypothesis class is given a specific network architecture. For example, we know from mini hw 2 that a perceptron can’t represent XOR function. The perceptron hypothesis class is not very rich.

**Proposition 10.1** *For every $d \geq 1$, there is a neural network architecture with depth = 2, width = $2^d + 1$, activation = sign, which can represent all functions $\{-1, 1\}^d \to \{-1, 1\}$*

**Proof:** Consider any arbitrary function $f$, we’ll show that we can find the weights such that the neural network represents the function.

We want the first neuron to capture the value of $f(-1, -1, \dots, -1)$ (the input is a vector of all $-1$). To do this, we’ll set all the weights of the in-coming edges to the first neuron to $-1$. The output of this neuron is
$$\text{sign} \left( \sum_{i=1}^d -1 \cdot x_i + w_0 \cdot 1 \right)$$

### Visual Description
- Figure 10.3: A diagram of a layered feedforward neural network. It shows an "input layer" with nodes $x_1, \dots, x_d$ and $1$, two "hidden layers", and an "output layer". Brackets at the bottom label these sections. The network is fully connected between adjacent layers.

---

## Page 3
### Content
Lecture 10: October 16, 2019 10-3

![Figure 10.4: neural network structure in the proof]

where $w_0$ is the weight on the edge from 1 to the first neuron. Observe that
$$
\sum_{i=1}^d -1 \cdot x_i = 
\begin{cases} 
d & \text{if } \forall i, x_i = -1 \\
\leq d - 1 & \text{otherwise}
\end{cases}
$$
we set $w_0$ of neuron 1 to $-(d - \frac{1}{2})$, then the output of the weighted sum is $\frac{1}{2}$ when all $x_i = -1$, and is no greater than $-\frac{1}{2}$ otherwise. After passing through the activation function, sign, the output of neuron 1 is 1 if the input is the vector of all -1's, and -1 otherwise.

Set the weight of the first neuron in the hidden layer to $\frac{1}{2} f(-1, -1, \dots, -1)$.

For some other neuron $k$ in the hidden layer, representing the result of the $k$th possible input in $\{-1, 1\}^d$ (denote it as $\mathbf{v}_k$). We can follow the same procedure as neuron 1, and set the weights of edges from $x_i$ to neuron $k$ the same as the $i$th entry in $\mathbf{v}_k$.

We can verify that the network output of $(-1, -1, \dots, -1)$ is $f(-1, -1, \dots, -1)$. The same holds for other inputs. $\blacksquare$

For continuous functions, we need some more restrictions to get a similar result as proposition 1.

**L-Lipschitz** $f : [-1, 1]^d \to [-1, 1]$ is said to be L-Lipschitz if $|f(x) - f(y)| \leq L \|x - y\|_2$ for all $x, y \in [-1, 1]^d$.
Lipschitz means close inputs should have close outputs. For example, functions with the first derivative is Lipschitz.

**Proposition 10.2** *Consider any $d \geq 1$ and $\epsilon > 0$. Then there is a DAG and $\sigma = \text{sigmoid}$ s.t. it can represent any function L-Lipschitz functions in $[-1, 1]^d \to [-1, 1]$ with $\epsilon$-accuracy, i.e. for any $f : [-1, 1]^d \to [-1, 1]$ which is L-Lipschitz, there are weights such that the resulting hypothesis $h$ has*
$$|h(x) - f(x)| \leq \epsilon \quad \forall x \in [-1, 1]^d$$

This is not proved in class. The strategy is to discretize the space to regions, within which function values do not change by more than $\epsilon$. Then use the same approach as in proposition 1 and construct a one-hidden-layer neural network with the width of the hidden layer dependent on $\epsilon$ and $d$.

As a result of such expressive power, neural networks are called **universal approximators**.

Note that in proposition 1, with one hidden layer, we need exponential number of nodes. The following proposition shows that no matter what the design of the structure is, we cannot do better.

### Visual Description
- Figure 10.4: A detailed neural network diagram illustrating the proof. It shows inputs $x_1, \dots, x_d$ and bias $1$ connecting to hidden neurons. Red dashed lines indicate specific neurons representing $f(-1, -1, \dots, -1)$ and $f(k\text{th possible input})$. Weights are labeled on edges, such as $-1$ for the first neuron and $-(d - \frac{1}{2})$ for the bias edge. The output node performs a summation $\frac{1}{2} \sum_{l \in \{-1,1\}^d} f(l)$.

---

## Page 4
### Content
10-4 Lecture 10: October 16, 2019

**Proposition 10.3** *If we want to represent all possible functions from $\{-1, 1\}^d \to \{-1, 1\}$ via some DAG (say $\sigma = \text{sign}$ or $\text{sigmoid}$), then it is necessary to have exponential number of neurons.*

A semi-proof is presented in class. The proof uses the following lemma (see Chapter 20 of the textbook for the proof of the lemma).

**Lemma 10.4** *Consider a hypothesis class specified by some DAG $\sigma = \text{sign}$, let $|E|$ be the number of edges. Then the VC dimension of this hypothesis class is $O(|E| \log |E|)$*

**Proof:** Consider an architecture (say $\sigma = \text{sign}$) that represents all functions $\{-1, 1\}^d \to \{-1, 1\}$. The VC dimension of this hypothesis class is $2^d$, as it can label all possible inputs in $\{-1, 1\}^d$ ($2^d$ of them) in all possible ways. By the lemma above, the VC dimension is also $O(|E| \log |E|)$ (polynomial in the number of edges), thus the number of edges needs to be exponential in $d$. $\blacksquare$

Even if in the proofs above, exponentially many nodes are required to represent all possible functions $\{-1, 1\}^d \to \{-1, 1\}$, neural networks are still quite expressive with polynomial number of neurons or edges, see the following:

* theorem 20.3 in the textbook
* lemma 20.4 in the textbook
* recent researches (lots!)

### Visual Description
Text-only slide.
