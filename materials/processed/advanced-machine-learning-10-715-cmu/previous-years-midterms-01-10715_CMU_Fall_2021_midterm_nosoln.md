# previous-years-midterms-01-10715_CMU_Fall_2021_midterm_nosoln

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/previous-years-midterms-01-10715_CMU_Fall_2021_midterm_nosoln.pdf`
Duplicate equivalents: `previous-years-midterms-01-10715_CMU_Fall_2021_midterm_nosoln.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 7

## Page 1
### Content
# CMU 10-715 Fall 2021: Midterm Exam

**Name:**

**Andrew ID:**

### Instructions:
* This is an 80 minute exam during the lecture time, from 10:10 AM to 11:30 AM.
* You are **NOT** allowed to refer to notes, homework solutions, the textbook, lecture videos or any other outside resources.
* You are **NOT** allowed to discuss the exam with anyone in the duration of the exam.
* We recommend taking a brief look at all questions first and then starting to answer them. You may find some questions easier than others.
* We have ordered the problems in increasing order of (our envisaged) time required to solve them.
* **For all questions, assume binary classification, that is, $\mathcal{Y} = \{-1, 1\}$.**

### Distribution of Marks
| Question | Points | Score |
| :--- | :--- | :--- |
| **1** | 5 | |
| **2** | 10 | |
| **3** | 15 | |
| **4** | 14 | |
| **5** | 19 | |
| **6** | 17 | |
| Total: | 80 | |

### Visual Description
The page is the cover sheet for a midterm exam. It contains the course title, fields for name and ID, a list of instructions in bullet points, and a table for the distribution of marks across six questions.

---
## Page 2
### Content
### 1) PAC learning definition [5 points]

Consider the i.i.d. assumption, the realizable setting, and the 0-1 loss. Write down the definition of PAC learnability of a given hypothesis class $\mathcal{H}$.

[Learning objective: This question just makes sure you know the basic definition. If you do, then this is a freebie :)]

Page 2

### Visual Description
Text-only slide.

---
## Page 3
### Content
### 2) Choosing $C$ in soft-SVM [5+5=10 points]

Consider soft-SVM (primal form). Recall that there is a parameter $C$ in the objective that multiplies the slack terms $\sum_{i \in [n]} \xi_i$. What happens if $C = 0$? What if $C < 0$? Please justify your answers.

[Learning objective: To help you understand what can go wrong if an inappropriate choice is made.]

Page 3

### Visual Description
Text-only slide.

---
## Page 4
### Content
### 3) Known distribution [5+5+5=15 points]

Consider the i.i.d. assumption, 0-1 loss, but there may **not** be any "true classifier" $h^*$. Instead, suppose you **know** the distribution $D$ on $\mathcal{X} \times \mathcal{Y}$ from which all $(x, y)$-pairs are drawn. Measure the risk of any hypothesis $h$ as $\mathbb{E}_{(x,y) \sim D}[\mathbf{1}\{h(x) \neq y\}]$. You are given $n$ training data points $\{(x_i, y_i)\}_{i \in [n]}$. Suppose you have (uncountably) infinite computation and storage: you have access to a magical optimization package that will solve any optimization problem that you give it, and furthermore, assume you can store and display any amount of data. Consider the following three questions, and please justify your answer for each of them. For parts a and b below, feel free to write your answers simply in the form of an optimization problem (i.e., as argmin blah subject to blah).

(a) Present a classification algorithm to predict the label of any new point such that the risk is as small as possible.

(b) Suppose you are given a hypothesis class $\mathcal{H}$ and are required to output a hypothesis in this class. Now present a classification algorithm under this restriction.

(c) In both the above settings, quantify the dependence between the risk of your algorithm and the number of training points $n$.

[Learning objective: This question requires you to evaluate what happens if we move away from the assumptions studied in the lectures. Such an exercise aims to give you a broader perspective of the formulations we discussed in the lectures.]

Page 4

### Visual Description
Text-only slide.

---
## Page 5
### Content
### 4) Kernelizing the Perceptron [5+9=14 points]

In this question, we will discuss the key ingredients for Kernelizing the Perceptron.

(a) Show that the Perceptron training algorithm (assuming it stops after a finite number of iterations) results in a $w$ of the form $w = \sum_{i \in [n]} \alpha_i x_i$ for some $\alpha_1, \dots, \alpha_n \in \mathbb{R}$.

(b) Re-write the Perceptron algorithm in a manner that the training depends on $x_i$'s only in terms of their inner products.

[Learning objective: To help you get your hands dirty – via an algorithm you have studied in class – on "Kernelizing" a linear-classification algorithm. We had also encouraged you to try this yourself earlier, so hopefully this will be an exercise that you've already done.]

Page 5

### Visual Description
Text-only slide.

---
## Page 6
### Content
### 5) Average margin [4+5+5+5=19 points]

Suppose that instead of defining the margin as the distance of the nearest point to the hyperplane, you define it as the average of distances across all points. Then maximizing this notion of margin would amount to writing down the following optimization problem:
$\max_{w \in \mathbb{R}^d, b \in \mathbb{R}} \frac{1}{n} \sum_{i \in [n]} y_i(w^T x_i + b)$ subject to $\|w\|_2 = 1$. In order to make our life simpler in this exam, fix $b = 0$ so that we are only optimizing over $w$.

(a) Is this problem guaranteed to have at least one feasible solution?

(b) Write down the update steps of the projected stochastic gradient descent algorithm (i.e., stochastic gradient descent with a projection onto the constraint set after every iteration) for this problem.

(c) Does this reduce to the Perceptron algorithm or is there a difference?

(d) Please comment (qualitatively and briefly) on your perception of how well the output will perform as a classifier.

[Learning objective: To evaluate how projected stochastic gradient descent works in a toy-ish example, and qualitatively understanding an algorithm.]

Page 6

### Visual Description
Text-only slide.

---
## Page 7
### Content
### 6) Sample complexity [5+12=17 points]

In this question you cannot use VC dimensions or the fundamental theorem of statistical learning theory or the sample complexity result on finite-sized hypothesis class that we had studied in the lecture. We would like you to take a first-principles approach by using the PAC learning formulation itself as a starting point. Consider the realizability and i.i.d. assumptions.

(a) Suppose $\mathcal{X} = \{0\}$ and $\mathcal{Y} = \{-1, 1\}$. Let $\mathcal{H}$ be all possible mappings from $\mathcal{X}$ to $\mathcal{Y}$. Consider the 0-1 loss. Find $n^*(\epsilon = 0.1, \delta = 0.1)$.

(b) Answer the same question as in part (a) but now with $\mathcal{X} = \{-1, 1\}$. You can feel free to derive upper and/or lower bounds on $n^*(\epsilon = 0.1, \delta = 0.1)$. (You can restrict attention to only deterministic learning algorithms.)

[Learning objective: A hands-on, first-principles task often gives the best learning experience. It forces you to deeply think about the definitions and the formulation. That is the objective of this question.]

Page 7

### Visual Description
Text-only slide.
