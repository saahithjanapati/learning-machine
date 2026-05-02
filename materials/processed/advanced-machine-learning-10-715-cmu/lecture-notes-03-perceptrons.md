# lecture-notes-03-perceptrons

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/lecture-notes-03-perceptrons.pdf`
Duplicate equivalents: `lecture-notes-03-perceptrons.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 4

## Page 1
### Content
**10-715 Advanced Introduction to Machine Learning**  
**Fall 2019**  
**Lecture 2: August 28, 2019**  
**Lecturer:** Nihar B. Shah  
**Scribes:** Srinivasa Pranav

**Note:** LaTeX template courtesy of UC Berkeley EECS dept.  
**Disclaimer:** These notes have not been subjected to the usual scrutiny reserved for formal publications. They may be distributed outside this class only with the permission of the Instructor.

**Summary:** Perceptron algorithm and proofs.

### 2.1 Perceptron Overview
* The perceptron is one of the earliest approaches to machine learning and approximates a biological neuron.
* Binary Classification: $\mathcal{X} = \mathbb{R}^d$ and $\mathcal{Y} = \{-1, 1\}$
* Weights: $w_i$ where $\forall i, w_i \in \mathbb{R}$
* Bias: $b \in \mathbb{R}$
* Consider $sign(x)$ as the step function, where we don't worry about $x = 0$

![Figure 2.1: Perceptron Example (with bias as $w_0$)](figure_2_1.png)

* Assume data is linearly separable: $\exists (w^*, b^*) \in \mathbb{R}^d \times \mathbb{R}$ such that $y = sign(\langle w^*, x \rangle + b^*)$

2-1

### Visual Description
The page contains a diagram (Figure 2.1) illustrating a Perceptron. On the left, there are input nodes: a "Constant 1" node and feature nodes $x_1, \dots, x_{n-1}, x_n$. Arrows point from these nodes to weight nodes $w_0, w_1, \dots, w_{n-1}, w_n$ respectively. These weights then point to a central summation node labeled $\Sigma$ (Weighted Sum). The output of the summation node goes into a "Step Function" node (represented by a graph icon), which then produces the final "Out" signal.

---

## Page 2
### Content
2-2 Lecture 2: August 28, 2019

### 2.2 Perceptron Training Algorithm and Convergence Proof
**Perceptron Training Algorithm:**

**Initialize** with $w = b = 0$  
**while** $\exists i \in [n]$ such that $y_i(\langle w, x_i \rangle + b) \le 0$  
$\quad w \leftarrow w + x_i y_i$ and $b \leftarrow b + y_i$

* **Intuition:** Consider $i \in [n]$ such that $y_i(\langle w, x_i \rangle + b) \le 0$. Then $w' = w + x_i y_i$ and $b' = b + y_i$. In the next iteration:
$$y_i(\langle w', x_i \rangle + b') - y_i(\langle w, x_i \rangle + b) = y_i(\langle x_i y_i, x_i \rangle + y_i)$$
$$= \|x_i\|_2^2 + 1$$
$$> 0$$

**Theorem 2.1** *The perceptron training algorithm stops after*
$$\frac{(R^2 + 1)(b^{*2} + 1)}{\gamma^2}$$
*iterations and, at the end, we have $\forall i \ y_i(\langle w, x_i \rangle + b) > 0$. Here,*
$$R = \max_{i \in [n]} \|x_i\|_2$$
$$\gamma = \max_{\substack{w \in \mathbb{R}^d, \|w\|_2=1 \\ b \in \mathbb{R}}} \min_{i \in [n]} y_i(\langle w, x_i \rangle + b)$$
*Let $(w^*, b^*)$ denote its argmax. (Note that $\gamma$ is the "margin")*

**Proof:** Suppose there exists a misclassified example at the beginning of iteration $T$ and let $i \in [n]$ be the misclassified example. Let $w^{(i)}$ and $b^{(i)}$ denote the values on the $i$th iteration and note that $w^{(1)} = b^{(1)} = 0$.

**Lemma 2.2**
$$\langle [w^*, b^*], [w^{(T+1)}, b^{(T+1)}] \rangle \ge \gamma T$$

**Lemma 2.3**
$$\|[w^{(T+1)}, b^{(T+1)}]\|_2 \le \sqrt{T(R^2 + 1)}$$

(square brackets denote concatenation) Cauchy-Schwarz inequality implies:
$$1 \ge \frac{\langle [w^*, b^*], [w^{(T+1)}, b^{(T+1)}] \rangle}{\|[w^*, b^*]\|_2 \|[w^{(T+1)}, b^{(T+1)}]\|_2} \ge \frac{\gamma T}{\sqrt{T}\sqrt{R^2 + 1}\sqrt{1 + b^{*2}}}$$
(the $\sqrt{1 + b^{*2}}$ is from the definition of $w^*$) This implies the desired bound:
$$T \le \frac{(R^2 + 1)(1 + b^{*2})}{\gamma^2}$$

### Visual Description
Text-only slide.

---

## Page 3
### Content
Lecture 2: August 28, 2019 2-3

**Proof: Proof of Lemma 2.2:**
$$\langle [w^*, b^*], [w^{(T+1)}, b^{(T+1)}] \rangle = \langle [w^*, b^*], [w^{(T)} + x_i y_i, b^{(T)} + y_i] \rangle$$
$$= \langle [w^*, b^*], [w^{(T)}, b^{(T)}] \rangle + (\langle w^*, x_i y_i \rangle + y_i b^*)$$
$$= y_i(\langle w^*, x_i \rangle + b^*) + \langle [w^*, b^*], [w^{(T)}, b^{(T)}] \rangle$$
$$\ge \gamma + \langle [w^*, b^*], [w^{(T)}, b^{(T)}] \rangle$$
... (by recursing until $w^{(1)} = b^{(1)} = 0$)
$$\ge \gamma T$$
$\blacksquare$

**Proof: Proof of Lemma 2.3:**
$$\|[w^{(T+1)}, b^{(T+1)}]\|_2^2 = \|[w^{(T)}, b^{(T)}] + [x_i y_i, y_i]\|_2^2$$
$$= \|[w^{(T)}, b^{(T)}]\|_2^2 + \|[x_i y_i, y_i]\|_2^2 + 2\langle [w^{(T)}, b^{(T)}], [x_i y_i, y_i] \rangle$$
$$\le \|[w^{(T)}, b^{(T)}]\|_2^2 + \|[x_i y_i, y_i]\|_2^2 \quad (\text{since } 2\langle [w^{(T)}, b^{(T)}], [x_i y_i, y_i] \rangle \le 0)$$
$$= \|[w^{(T)}, b^{(T)}]\|_2^2 + \|x_i\|_2^2 + 1$$
$$\le \|[w^{(T)}, b^{(T)}]\|_2^2 + R^2 + 1 \quad (\text{by definition of } R^2)$$
... (by recursing until $w^{(1)} = b^{(1)} = 0$)
$$\le T(R^2 + 1)$$
$\blacksquare$

### 2.3 Limitations of Perceptrons
**Theorem 2.4** *Perceptrons cannot learn XORs. For example, consider the $d = 2$ case:*
$$(x_1 = \begin{bmatrix} -1 \\ -1 \end{bmatrix}, y_1 = -1), (x_2 = \begin{bmatrix} -1 \\ 1 \end{bmatrix}, y_2 = 1), (x_3 = \begin{bmatrix} 1 \\ -1 \end{bmatrix}, y_3 = 1), (x_4 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}, y_4 = -1)$$
*There is no $(w, b) \in \mathbb{R}^2 \times \mathbb{R}$ which can represent this relationship.*

**Proof:**
$w = \begin{bmatrix} w_1 \\ w_2 \end{bmatrix}, b, y = sign(\langle w, x \rangle + b)$
$$\langle w, x_1 \rangle + b = -w_1 - w_2 + b \quad y_1 = -1$$
$$\langle w, x_2 \rangle + b = -w_1 + w_2 + b \quad y_2 = 1$$
$$\langle w, x_3 \rangle + b = w_1 - w_2 + b \quad y_3 = 1$$
$$\langle w, x_4 \rangle + b = w_1 + w_2 + b \quad y_4 = -1$$
The remainder is left as an exercise to the student... $\blacksquare$

### Visual Description
Text-only slide.

---

## Page 4
### Content
2-4 Lecture 2: August 28, 2019

Further limitations:
* If data is separable but not *linearly* separable, perceptrons fail. This led to the development of kernel methods and neural networks.

![Figure 2.2: Nonlinearly Separable Data](figure_2_2.png)

* If data is linearly separable, can we learn the "best" separator? This led to the development of support vector machines (SVMs)
* If data is noisy, what do we do? This led to the development of soft SVM

![Figure 2.3: Nonlinearly Separable Data. Source: University of Granada](figure_2_3.png)

### Visual Description
The page contains two figures. 

**Figure 2.2** consists of two plots. The left plot shows 2D data points forming two concentric circles (red outer, blue inner), which are not linearly separable in $\mathbb{R}^2$. The right plot shows the same data projected into $\mathbb{R}^3$, where the two classes become linearly separable by a horizontal plane.

**Figure 2.3** shows a 2D scatter plot of blue and red points. A wavy, non-linear blue line separates most of the blue points from the red points. Labels indicate "Safe examples" (points far from the boundary), "Borderline examples" (points near the boundary), and "Noisy examples" (points that are on the wrong side of the boundary or deep within the other class's territory).
