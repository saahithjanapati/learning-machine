# lecture-notes-10-learning theory 1

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/lecture-notes-10-learning theory 1.pdf`
Duplicate equivalents: `lecture-notes-10-learning theory 1.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 3

## Page 1
### Content
**10-715 Advanced Introduction to Machine Learning**  
**Fall 2019**  
**Lecture 8: September 23, 2019**  
*Lecturer: Nihar B. Shah*  
*Scribes: Vineet Jain*

**Note:** LaTeX template courtesy of UC Berkeley EECS dept.  
**Disclaimer:** These notes have not been subjected to the usual scrutiny reserved for formal publications. They may be distributed outside this class only with the permission of the Instructor.

**Last lecture:** Decision trees, overfitting, cross-validation

### 8.1 Random forests
Random forest is a modified way to construct a tree.  
Let $S$ be the set of all samples in training data and $A$ be the set of features.

1. From $S$, sample $n$ points uniformly at random with replacement. Call this $S'$. This sampling method is known as **bootstrapping**.
2. Construct tree using $S'$.
3. When deciding to split at any node, instead of choosing attribute from $A$ which maximizes gain over $S$, choose $k$ features uniformly at random from $A$ and call this $A'$. Now choose that feature from $A'$ which maximizes gain over the sample set $S'$.
$$\text{argmax}_{i \in A} \text{Gain}(S, i) \to \text{argmax}_{i \in A'} \text{Gain}(S', i)$$
This is done independently at each node.
4. Construct $m$ trees $T_1, T_2, \dots, T_m$ using this procedure. When given input $x \in \mathcal{X}$, output
$$y = \text{sign} \left( \frac{1}{m} \sum_{i=1}^m T_i(x) \right)$$

### 8.2 Interpretability and Explainability
**Motivation:**
* We know self-driving cars perform well in most situations, but what if some specific situation occurs such as pedestrian wearing a costume, obscured roadsign etc.
* Using AI in healthcare for diagnosing illness. The doctor needs to understand on what basis the algorithm gave the specific diagnosis for it be actually helpful.

**Interpretability:** If we give the algorithm certain inputs or change its parameters to certain values, then the human can reason about what the output will be.

**Explainability:** Human understands internal mechanism of the model\algorithm to answer why it is doing something.

8-1

### Visual Description
Text-only slide.

---
## Page 2
### Content
8-2  
Lecture 8: September 23, 2019

Often these terms are used interchangeably. Key difference: Interpretability requires being able to reason about the outputs given a change in the inputs or parameters without necessarily understanding why. Explainability requires understanding the mechanism fully.

**Class poll:** Linear models and decision trees (if not too big) are examples of explainable models.

#### 8.2.1 Local Interpretable Model Agnostic Explanations (LIME)
Framework to help understand the predictions of a classifier. This is just a rough sketch of the main ideas, for details see [1].  
Take an data point $x$ near the decision boundary, and create lots of samples in its neighbourhood.  
If we consider a small neighbourhood of $x$, the decision boundary can be considered to be approximately linear (note that this requires the boundary to be smooth). We can now fit a sparse linear model to this approximation of the decision boundary in the neighbourhood of $x$. The weight vector can help us reason about the decisions made by the model.

### 8.3 Additional Topics
**Bagging:** This refers to "bootstrapped aggregation". It creates several subsets of the training data $S$ by sampling with replacement (bootstrapping) from $S$. Each subset of $S$ is used to train a different version of the model and their outputs are then aggregated. Usually the same algorithm is used for each of these models.

**Ensemble methods:** A very general technique in which multiple algorithms or models aggregate their outputs.

### 8.4 Learning Theory
Consider some hypothesis class $\mathcal{H}$. Recall that $\mathcal{H}$ is a set of functions $h : \mathcal{X} \to \mathcal{Y}$ and we generally assume that the true function lies in $\mathcal{H}$. The realizability assumption formalizes this idea.

**Realizability:** There is some (unknown) $h^* \in \mathcal{H}$ such that every point $(x, y) \in \mathcal{X} \times \mathcal{Y}$ satisfies $y = h^*(x)$.

Note that in our analysis of the perceptron, we started by assuming that the data is linearly separable (in other words, there exists a 'true' linear separator for the given data). This is the realizability assumption over the class of linear predictors.

#### 8.4.1 Probably Approximately Correct (PAC) Learning
Given $n$ training points $\{(x_i, y_i)\}_{i=1}^n$, our goal is to output some $h \in \mathcal{H}$ such that $h^* = h$.  
This goal, however is not very realistic, since usually $\mathcal{H}$ is not finite. Even in cases where it is finite, it may be difficult to find the true hypothesis exactly.

Hence, we reformulate our goal to output some $h \in \mathcal{H}$ such that the error, $err(h, h^*)$, is small.  
This is again not a viable goal, since there may always be some adversarial subset of samples of the data which make impossible to guarantee a small error. Therefore, we can only guarantee a small error with some

### Visual Description
Text-only slide.

---
## Page 3
### Content
Lecture 8: September 23, 2019  
8-3

probability.

So, the informal idea now is:  
Given $n$ training points $\{(x_i, y_i)\}_{i=1}^n$, our goal is to output some $h \in \mathcal{H}$ such that the error, $err(h, h^*)$, is small with high probability. We use two parameters to define the requirements,
* $\epsilon \to$ small error (corresponds to "approximately")
* $\delta \to$ with high probability (corresponds to "probably")

**Note:** In this course we generally consider the IID assumption, that is, every $x$ is drawn independently from some unknown distribution $\mathcal{D}$ over $\mathcal{X}$.

The error used in this framework is usually the risk under 0-1 loss.  
**Definition: Risk under 0-1 loss (for binary classification)**  
For any distribution $\mathcal{D}$ over $\mathcal{X}$ and hypothesis $h^* : \mathcal{X} \to \mathcal{Y}$, the risk of a hypothesis $h : \mathcal{X} \to \mathcal{Y}$ is given by,
$$R_{(\mathcal{D}, h^*)}(h) = \mathbb{P}_{x \sim \mathcal{D}}(h(x) \neq h^*(x))$$
Note that this is evaluated for a 'test' data point $x$, that is, for some $x$ which is not drawn from training set $S$.

In the next lecture, we will formalize the PAC learning framework.

### References
[1] MARCO TÚLIO RIBEIRO and SAMEER SINGH and CARLOS GUESTRIN, ""Why Should I Trust You?": Explaining the Predictions of Any Classifier" *ACM SIGKDD International Conference on Knowledge Discovery and Data Mining (KDD)*, 2016

### Visual Description
Text-only slide.
