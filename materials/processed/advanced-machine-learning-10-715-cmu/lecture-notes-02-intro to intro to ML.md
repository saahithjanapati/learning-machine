# lecture-notes-02-intro to intro to ML

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/lecture-notes-02-intro to intro to ML.pdf`
Duplicate equivalents: `lecture-notes-02-intro to intro to ML.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 4

## Page 1
### Content
**10-715 Advanced Introduction to Machine Learning**  
**Fall 2019**  
**Lecture 1: August 26, 2019**  
Lecturer: Nihar B. Shah  
Scribes: Vincent J. Monardo

**Note:** LaTeX template courtesy of UC Berkeley EECS dept.

**Disclaimer:** *These notes have not been subjected to the usual scrutiny reserved for formal publications. They may be distributed outside this class only with the permission of the Instructor.*

**Summary:** High level intuition regarding machine learning, with more details on supervised learning approaches.

### 1.1 Intro to intro to ML
Example task: Transcribe hand written numbers
* Approach 1: Rule based methods (if, else, if, else, ..)
* Approach 2: Data-driven approach/models (i.e. ML!)
    * Accumulate many examples
    * Label them
    * Train an algorithm that relies on data (examples) rather than explicit rules (instructions) to “learn” to perform tasks over time

### 1.2 Broad Taxonomy of ML
#### 1.2.1 Supervised
In the supervised learning regime, we are given both data points and corresponding labels.
* **Classification:** Given data points/examples/etc. and labels for each item, predict the class of a new item
    * Know set of classes a priori
    * In transcribing numbers example, acquire a large number of handwritten digits and label them. Then, wish to identify future images of digits to label them with our algorithm
* **Regression:** Given data, recover information of interest
    * In some general sense, a continuous extension of classification
    * An example is to document the outdoor temperature and the amount of energy that each home uses, in order to predict in the future how much energy will be expended given the outdoor temperature

1-1
### Visual Description
Text-only slide.

---

## Page 2
### Content
1-2  
Lecture 1: August 26, 2019

#### 1.2.2 Unsupervised
In the unsupervised learning regime, we are given data points but NOT corresponding labels.
* **Clustering**
    * Identify groups of images that are similar (as we do not have knowledge of exactly what a digit it)
* **Embedding**

#### 1.2.3 Other example of ML
Outside of supervised vs. unsupervised learning, we can think about...
* semi-supervised
* online
* reinforcement
* active
* rankings
* meta
* ...

### 1.3 More on Supervised Learning
We will consider 3 main components of supervised learning: training data/examples, hypothesis classes, and loss functions

#### 1.3.1 Training data/examples
Given a set of data-label pairs, $(x^1, y^1), (x^2, y^2), \dots, (x^n, y^n)$, where each $x^i \in \mathcal{X}, \forall i \in [n]$ and $y^i \in \mathcal{Y}, \forall i \in [n]$.
* In digit recognition, $\mathcal{X} = \mathbb{R}^d$, where $d$ is the number of pixels, and $\mathcal{Y} = \{0, 1, \dots, 9\}$
* In regression, $\mathcal{X} = \mathbb{R}$ and $\mathcal{Y} = \mathbb{R}$.

#### 1.3.2 Hypothesis class
Suppose that $\mathcal{H}$ is a set of functions from $\mathcal{X}$ to $\mathcal{Y}$,
* Example: Linear.

### Visual Description
Text-only slide.

---

## Page 3
### Content
Lecture 1: August 26, 2019  
1-3

* Regression: $\mathcal{H} = \{h_{w,b} : \mathbb{R}^d \to \mathbb{R} \mid h_{w,b} = w^\top x + b, w \in \mathbb{R}^d, b \in \mathbb{R}\}$
* Classification: $\mathcal{H} = \{h_{w,b} : \mathbb{R}^d \to \{-1, 1\} \mid h_{w,b} = \text{sign}(w^\top x + b), w \in \mathbb{R}^d, b \in \mathbb{R}\}$
* These are referred to as *parameterized* classes, e.g. we have $(d + 1)$ parameters: $w, b$.

#### 1.3.3 Loss function
We define a loss function $l : \mathcal{Y} \times \mathcal{Y} \to \mathbb{R}$ which takes the true label and the predicted label and maps to a scalar which we will refer to as the *loss*.

Let $y$ be the true label and $\hat{y}$ be the predicted label. Then $l(\hat{y}, y)$ is our loss for our prediction.

Given training data $\{x^{(i)}, y^{(i)}\}_{i=1}^n$, choose $h \in \mathcal{H}$ such that for a new data point $x$, $l(h(x), y)$ is minimized.

Often we assume that all data is generated i.i.d. from some (unknown) distribution $P_{x,y}$. Now, the goal is to minimize $\mathbb{E}_{x,y} [l(h(x), y)]$, where $x, y \sim P_{x,y}$. We refer to this expectation as *risk*.

$P_{x,y}$ is unknown; however, if $n$ is somewhat large, then $\{x^{(i)}, y^{(i)}\}_{i=1}^n$ can be used to form a reasonable approximation of $P_{x,y}$. Then, we can think about computing the expectation over the observed part, i.e. minimize $\frac{1}{n} \sum_{i=1}^n l(h(x^{(i)}), y^{(i)})$. We refer to this as *empirical risk minimization*.

We will use tools from optimization for ERM. We can also discuss going from ERM back to risk, think about generalization, overfitting, etc.

### 1.4 Examples of loss functions
For binary classification, $\mathcal{Y} = \{-1, 1\}$, we introduced the indicator loss function,
$$\ell(\hat{y}, y) = \mathbf{1}_{\{y \neq \hat{y}\}} = \mathbf{1}_{\{y \cdot \hat{y} \leq 0\}}$$

In general, the above is difficult to optimize. We will soon seen some polynomial approximations that are more tractable.

Some other loss functions:
$$\ell^{\text{Hinge}}(\hat{y}, y) = \max \{0, 1 - \hat{y} \cdot y\}$$
$$\ell^{\text{Logistic}}(\hat{y}, y) = \log(1 + \exp(-\hat{y} \cdot y))$$
$$\ell^{\text{Exp}}(\hat{y}, y) = \exp(-\hat{y} \cdot y)$$

### Visual Description
Text-only slide.

---

## Page 4
### Content
1-4  
Lecture 1: August 26, 2019

### 1.5 Mini problem: min-max’s of bivariate functions
Let $f : \mathcal{X} \times \mathcal{Y} \to \mathbb{R}$ be any real function. Prove that
$$\max_{y \in \mathcal{Y}} \min_{x \in \mathcal{X}} f(x, y) \leq \min_{x \in \mathcal{X}} \max_{y \in \mathcal{Y}} f(x, y).$$

**Proof:** First, assume the existence of every relevant quantity. Define $g(y) := \min_x f(x, y) \forall y \in \mathcal{Y}$. Then, we know that $g(y) \leq f(x, y) \forall x, \forall y$. As this holds for every $x$ and $y$, we know that $\max_y g(y) \leq \max_y f(x, y) \forall x$. Plugging back in the original definition of $g(y)$, we have that $\max_y \min_x f(x, y) \leq \max_y f(x, y) \forall x$. As we know that this holds for every $x$, we have the desired result, $\max_{y \in \mathcal{Y}} \min_{x \in \mathcal{X}} f(x, y) \leq \min_{x \in \mathcal{X}} \max_{y \in \mathcal{Y}} f(x, y)$.

### Visual Description
Text-only slide.
