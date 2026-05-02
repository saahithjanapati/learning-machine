# lecture-notes-05-kernel methods

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/lecture-notes-05-kernel methods.pdf`
Duplicate equivalents: `lecture-notes-05-kernel methods.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 4

## Page 1
### Content
**10-715 Advanced Introduction to Machine Learning**  
**Fall 2019**  
**Lecture 5: September 11, 2019**  
**Lecturer: Nihar B. Shah**  
**Scribes: Euxhen Hasanaj**

**Note:** *LaTeX template courtesy of UC Berkeley EECS dept.*  
**Disclaimer:** *These notes have not been subjected to the usual scrutiny reserved for formal publications. They may be distributed outside this class only with the permission of the Instructor.*

---

### 5.1 Kernel Methods. A High-Level Overview

It is often the case that some given training set is not linearly separable. As such, it is not possible to learn a halfspace that perfectly separates the data using the techniques we have studied so far. Kernel methods allow us to do so by first mapping the data into some high-dimensional feature space $\mathcal{F}$ where the data is hopefully separable, and then learn a halfspace in $\mathcal{F}$. Roughly, the algorithm is as follows:

Let $\mathcal{X}$ be the domain set and $\mathcal{Y}$ be the label set.

1. Consider some space $\mathcal{F}$ and a mapping $\psi : \mathcal{X} \to \mathcal{F}$
2. Given a sequence of labeled examples $S = \{(x_i, y_i)\}_{i=1}^n$, construct the sequence $\hat{S} = \{(\psi(x_i), y_i)\}_{i=1}^n$
3. Train a linear classifier on $\hat{S}$ and call this classifier $h : \mathcal{F} \to \mathcal{Y}$
4. Given a new data point $x \in \mathcal{X}$, output $h(\psi(x))$

The space $\mathcal{F}$ is called a feature space and will usually be $\mathbb{R}^n$, however, it can be any Hilbert space.

Two questions arise.
*   **Q1.** How do you choose $\psi$?
*   **Q2.** How do you efficiently compute the values of $\psi$?

Let us try and answer these questions.

**A1.** The success of kernel methods depends on a good choice of $\psi$ that will allow us to embed the domain set into a space where the data is linearly separable. Choosing $\psi$ usually requires some prior knowledge about the task in hand. However, it is possible to consider some popular choices of $\psi$ that extend the expressivity of the input space. One such example are polynomial mappings.

**Example 1. (Polynomial Mapping)** For simplicity, assume $\mathcal{X} = \mathbb{R}$, and let $\mathcal{F} = \mathbb{R}^{k+1}$. Define $\psi : \mathcal{X} \to \mathcal{F}$ by $\psi(x) = [1, x, \dots, x^k]$. In this case, we could train a linear classifier $h$, which is defined as $h(x) = \langle \mathbf{w}, \psi(x) \rangle$ where $\mathbf{w}$ is the vector of coefficients we are trying to learn. Therefore, learning a degree $k$ polynomial can be done by learning a linear mapping in $\mathcal{F}$.

Note that if the data is originally linearly separable, then we do not lose the separability when we travel to $\mathcal{F}$. This is because we can always set $\mathbf{w} = [0, w, 0, \dots, 0]$ and hence, $\langle \mathbf{w}, \psi(x) \rangle = wx$ and this would be the original classifier in the space $\mathcal{X}$.

### Visual Description
Text-only slide.

---

## Page 2
### Content
5-2 Lecture 5: September 11, 2019

**A2.** To achieve a rich feature space, it might sometimes be necessary to choose $\mathcal{F}$ as a high-dimensional space, however, this could lead to computability issues. This is where the kernel trick comes into play. We make two observations:

(a) **Perceptron:** Since at every step we update $\mathbf{w}_{t+1} = \mathbf{w}_t + \mathbf{x}_i y_i$, then the final $\mathbf{w}$ will be a linear combination of $\mathbf{x}_i$. In other words, $\mathbf{w} = \sum_{i=1}^n \alpha_i \mathbf{x}_i$. When we get a new point $\mathbf{x}$, we infer its label as
$$y = \text{sign}(\langle \mathbf{w}, \mathbf{x} \rangle + b) = \text{sign}\left(\left\langle \sum_{i=1}^n \alpha_i \mathbf{x}_i, \mathbf{x} \right\rangle + b\right).$$

(b) **SVM:** It is also the case that $\mathbf{w} = \sum_{i=1}^n y_i \alpha_i \mathbf{x}_i$ and when we solve the dual problem we want
$$\max_{\alpha \ge 0} \left( \sum_{i=1}^n \alpha_i - \frac{1}{2} \sum_{i,j} y_i y_j \alpha_i \alpha_j \langle \mathbf{x}_i, \mathbf{x}_j \rangle \right).$$
Inferring the label of a new point $\mathbf{x}$ is done in the same manner as the perceptron
$$y = \text{sign}(\langle \mathbf{w}, \mathbf{x} \rangle + b) = \text{sign}\left(\left\langle \sum_{i=1}^n y_i \alpha_i \mathbf{x}_i, \mathbf{x} \right\rangle + b\right).$$

We see that in both these cases, the sign function depends only on the inner product of the $\mathbf{x}_i$. This means that if we know how to compute inner products in the space $\mathcal{F}$, there is no need to compute $\psi(x)$ for individual points.

### 5.2 The Kernel Trick

**Definition 5.1** *Given some mapping $\psi : \mathcal{X} \to \mathcal{F}$, we define the kernel function $K(\mathbf{x}, \hat{\mathbf{x}}) := \langle \psi(\mathbf{x}), \psi(\hat{\mathbf{x}}) \rangle$.*

**Example 2. (Gaussian Kernel)** Let $\mathcal{X} = \mathbb{R}$ and set $\mathcal{F} = \mathbb{R}^\infty$. For every integer $i \ge 1$, the $i^{th}$ element of $\psi(x)$ is given by
$$[\psi(x)]_i = \frac{1}{\sqrt{(i-1)!}} \exp \left\{ -\frac{x^2}{2} \right\} x^{i-1}.$$
Then
$$K(x, \hat{x}) = \sum_{i=1}^\infty \left( \frac{1}{\sqrt{(i-1)!}} \exp \left\{ -\frac{x^2}{2} \right\} x^{i-1} \right) \left( \frac{1}{\sqrt{(i-1)!}} \exp \left\{ -\frac{\hat{x}^2}{2} \right\} \hat{x}^{i-1} \right)$$
$$= \exp \left\{ -\frac{|x - \hat{x}|^2}{2} \right\}$$
using the Taylor expansion of the exponential. More generally, if $\mathcal{X} = \mathbb{R}^d$, then
$$K(\mathbf{x}, \hat{\mathbf{x}}) = \exp \left\{ -\frac{\|\mathbf{x} - \hat{\mathbf{x}}\|_2^2}{2\sigma} \right\} \tag{5.1}$$
where $\sigma > 0$ is some scalar. Intuitively, the Gaussian Kernel sets the value of the inner product close to 0 if the two instances are far away from each-other. This can be seen by letting the norm approach infinity. Otherwise, the value is closer to 1 if the points are close to each-other. The scalar $\sigma$ specifies what exactly we mean by "distance."

### Visual Description
Text-only slide.

---

## Page 3
### Content
Lecture 5: September 11, 2019 5-3

**Example 3. (Polynomial Kernel)** The $k$ degree polynomial kernel is defined as
$$K(\mathbf{x}, \hat{\mathbf{x}}) = (1 + \langle \mathbf{x}, \hat{\mathbf{x}} \rangle)^k.$$
Going back to (A2) and the example of the Perceptron and the SVM, one could replace all $\langle \mathbf{x}_i, \mathbf{x}_j \rangle$ with $K(\mathbf{x}_i, \mathbf{x}_j)$ and solve the kernelized problem instead.

### 5.3 Validity of a Kernel

The Kernel trick is a powerful method that allows us to make halfspace learning more expressive, however, not all functions can be kernels. Furthermore, we got lucky in that the implementations of the perceptron and the SVM only depend on the dot product in $\mathcal{F}$, but not all learning algorithms may have this property. Hence, we face two important questions:

*   **Q3.** How general is this phenomenon? What algorithms can be kernelized?
*   **Q4.** What are valid choices of $k$?

To answer these questions we will need two theorems: Representer Theorem and Mercer’s Theorem.

**A3.** Given a function $f : \mathbb{R}^n \to \mathbb{R}$ and a non-decreasing function $R : \mathbb{R}_+ \to \mathbb{R}$, consider the general problem
$$\min_{\mathbf{w}} \left( f(\langle \mathbf{w}, \psi(\mathbf{x}_1) \rangle, \dots, \langle \mathbf{w}, \psi(\mathbf{x}_n) \rangle) + R(\|\mathbf{w}\|) \right). \tag{5.2}$$
It is possible to show that all variants of the SVM we have studied are instances of this problem. The Soft-SVM can be derived by letting $R(a) = \lambda a^2$ and $f(a_1, \dots, a_n) = \frac{1}{n} \sum_i \max\{0, 1 - y_i a_i\}$. Similarly, the Hard-SVM can be derived by letting $R(a) = a^2$ and letting $f(a_1, \dots, a_n)$ be 0 if there exists $b$ such that $y_i(a_i + b) \ge 1$ for all $i$, and $f(a_1, \dots, a_n) = \infty$ otherwise (See [1]).

**Theorem 5.2 (Representer Theorem)** *Assume that $\psi$ is a mapping from $\mathcal{X}$ to a Hilbert space $\mathcal{F}$. Then, there exists a vector $\alpha \in \mathbb{R}^n$ such that $\mathbf{w} = \sum_{i=1}^n \alpha_i \psi(\mathbf{x}_i)$ is an optimal solution of (5.2).*

Letting $K$ be the function that implements the kernel with respect to $\psi$, i.e., $K(\mathbf{x}_i, \mathbf{x}_j) = \langle \psi(\mathbf{x}_i), \psi(\mathbf{x}_j) \rangle$ and using the result of the Representer Theorem, we can rewrite (5.2) as the equivalent problem
$$\min_{\alpha} f\left(\sum_{i=1}^n \alpha_i K(\mathbf{x}_1, \mathbf{x}_i), \dots, \sum_{i=1}^n \alpha_i K(\mathbf{x}_n, \mathbf{x}_i)\right) + R\left(\sqrt{\sum_{i,j=1}^n \alpha_i \alpha_j K(\mathbf{x}_i, \mathbf{x}_j)}\right). \tag{5.3}$$
Here we simply plugged $\mathbf{w} = \sum_{i=1}^n \alpha_i \psi(\mathbf{x}_i)$ into (5.2) and grouped dot products into their kernel analogues. One thing to notice is that (5.3) requires all terms of the form $K(\mathbf{x}_i, \mathbf{x}_j)$. Again, this is useful because we do not need to know the values of $\psi$ as long as we know what happens to the dot products. The matrix $G$ whose $(i, j)$ entry equals $K(\mathbf{x}_i, \mathbf{x}_j)$ is called the Gram matrix.

Once we learn the coefficients $\alpha$, we can predict on a new point by
$$\langle \mathbf{w}, \psi(\mathbf{x}) \rangle = \sum_{i=1}^n \alpha_i K(\mathbf{x}_i, \mathbf{x}).$$

### Visual Description
Text-only slide.

---

## Page 4
### Content
5-4 Lecture 5: September 11, 2019

**A4.** For a function $K : \mathcal{X} \times \mathcal{X} \to \mathbb{R}$ to be a valid kernel we require it to represent an inner product $\langle \psi(\mathbf{x}_i), \psi(\mathbf{x}_j) \rangle$ for some mapping $\psi$. Since this may be a difficult task to show, we use the following characterization of a kernel function instead:

**Theorem 5.3 (Mercer’s Theorem)** *A symmetric function $K : \mathcal{X} \times \mathcal{X} \to \mathbb{R}$ is a kernel if and only if for every positive integer $m \ge 1$ and every sequence of $m$ vectors $\{\mathbf{x}_i\}_{i=1}^m \in \mathcal{X}^m$, the Gram matrix $G$ with $G_{i,j} = K(\mathbf{x}_i, \mathbf{x}_j)$ is positive semi-definite.*

Assuming that $K_1$ and $K_2$ are valid kernels, and $c_1, c_2 \ge 0$ are real constants, we can use Mercer’s Theorem to construct more kernels. It is standard linear algebra to show that the following kernels $K$ are also valid:

(a) $K(\mathbf{u}, \mathbf{v}) = c_1 K_1(\mathbf{u}, \mathbf{v}) + c_2 K_2(\mathbf{u}, \mathbf{v})$
(b) $K(\mathbf{u}, \mathbf{v}) = K_1(\mathbf{u}, \mathbf{v}) K_2(\mathbf{u}, \mathbf{v})$
(c) $K(\mathbf{u}, \mathbf{v}) = p(K_1(\mathbf{u}, \mathbf{v}))$ where $p$ is a polynomial with positive coefficients.
(d) $K(\mathbf{u}, \mathbf{v}) = e^{K_1(\mathbf{u}, \mathbf{v})}$

### References

[1] SCHWARTZ, SHALEV AND DAVID, BEN, “Understanding Machine Learning: From Theory to Algorithms,” 2014, pp. 218.

### Visual Description
Text-only slide.
