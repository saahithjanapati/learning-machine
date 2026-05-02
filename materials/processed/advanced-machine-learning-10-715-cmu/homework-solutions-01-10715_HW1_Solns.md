# homework-solutions-01-10715_HW1_Solns

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/homework-solutions-01-10715_HW1_Solns.pdf`
Duplicate equivalents: `homework-solutions-01-10715_HW1_Solns.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 9

## Page 1
### Content
# CMU 10-715: Homework 1
## Soft SVM, Optimization, Kernel Method, and Evaluations
**Released:** Sept. 3, 2025.
**Due:** Sept. 15, 2025, 11:59 PM.

### Instructions:
* **Collaboration policy:** Collaboration on solving the homework is allowed, after you have thought about the problems on your own. It is also OK to get clarification (but not solutions) from books, again after you have thought about the problems on your own. Please don’t search for answers on the web, previous years’ homeworks, etc. (please ask the TAs if you are not sure if you can use a particular reference). There are two requirements: first, cite your collaborators fully and completely (e.g., “Alice explained to me what is asked in Question 4.3”). Second, write your solution *independently*: close the book and all of your notes, and send collaborators out of the room, so that the solution comes from you only.
* **Submitting your work:** On Gradescope:
    * Submit your completed python file, `soft_svm.py` and `perceptron.py`, to the assignment titled “HW1 Code”.
    * Submit your PDF report file, named `[your andrew id].pdf`, to the assignment titled “HW1 Report”. Upon submission, please follow Gradescope instructions to match the question numbers with the page numbers of your report.
    There is no limit on the number of submissions to Gradescope.
* **Gradescope access:** The link to this course is https://www.gradescope.com/courses/1082583.
* **Auto-grader:** Your code will be evaluated with the Gradescope auto-grader and you only need to submit `soft_svm.py` and `perceptron.py` for the python file. We encourage you to start early and use the auto-grader to check that your implementation is correct.
* **Late days:** For each homework you get three late days to be used only when anything urgent comes up. No points will be deducted for using these late days. We will consider an honor system where we will rely on you to use the late days appropriately.
* **Skeleton code:** For problem 1, use the python files `data.py` and `soft_svm.py` to complete the questions. For problem 2, use `X_train.csv`, `X_test.csv`, `y_train.csv`, `y_test.csv`, and `perceptron.py` to complete the questions.

1

### Visual Description
Text-only slide.

---
## Page 2
### Content
# 1 Soft SVM and Optimization [40 points]
In the class (on Wednesday, Aug 27), we introduced the Support Vector Machine (SVM) under the assumption that the data is perfectly lineary separable. The goal was to find the “best” linear classifier, i.e., the hyperplane with the maximum margin between the two classes. This led to the following optimization problem, known as the Hard SVM.

$$
\begin{aligned}
& \text{minimize}_{\mathbf{w}} && \frac{1}{2} ||\mathbf{w}||_2^2 \\
& \text{subject to} && y_i(\mathbf{w}^T \mathbf{x}_i) \geq 1 \quad i = 1, \dots, n
\end{aligned} \tag{1}
$$

This is a convex optimization problem. The constraints enforce that every training example is classified correctly (i.e., empirical risk must be 0) with a margin of at least 1.

The formulation above works only if the data is perfectly linearly separable. In this homework we consider settings where (i) you think the linear hypothesis class is reasonable for your problem setting, but (ii) the training data may have some noise or other issues due to which it is not perfectly linearly separable. To handle non-linearly separable data while still preferring large margins, we relax the constraints. Specifically, we introduce “slack” variables $\xi_i \in \mathbb{R}_+$ that measure the degree of constraint violation for each data point:

$$y_i(\mathbf{w}^T \mathbf{x}_i) \geq 1 - \xi_i \quad i = 1, \dots, n \tag{2}$$

* If $\xi_i = 0$, the point is correctly classified with margin at least 1.
* If $0 < \xi_i < 1$, the point is on the correct side but within the margin.
* If $\xi_i \geq 1$, the point is misclassified.

This relaxed version is called the Soft SVM and this is what we will study in this homework. Simply introducing slack variables is not enough — we must also penalize large violations. Therefore, our Soft SVM formulation becomes

$$
\begin{aligned}
& \text{minimize}_{\mathbf{w}, \xi_i} && \frac{1}{2} ||\mathbf{w}||_2^2 + C \sum_{i=1}^n \xi_i \\
& \text{subject to} && y_i(\mathbf{w}^T \mathbf{x}_i) \geq 1 - \xi_i \quad i = 1, \dots, n \\
& && \xi_i \geq 0 \quad i = 1, \dots, n
\end{aligned} \tag{3}
$$

Here, $C > 0$ is a regularization parameter that controls the trade-off between maximizing the margin and allowing misclassifications. With the two constraints, the soft SVM problem can be re-written as a regularized Hinge Loss problem:

$$\text{minimize}_{\mathbf{w}} \quad \frac{1}{2} ||\mathbf{w}||_2^2 + C \sum_{i=1}^n \max(0, 1 - y_i(\mathbf{w}^T \mathbf{x}_i)) \tag{4}$$

Furthermore, if we let $L = \frac{1}{2} ||\mathbf{w}||_2^2 + C \sum_{i=1}^n \max(0, 1 - y_i(\mathbf{w}^T \mathbf{x}_i))$, then the subgradient of the regularized Hinge Loss problem from equation (4) is:

$$\nabla L(\mathbf{w}) = \mathbf{w} - C \sum_{i=1}^n y_i \mathbf{x}_i \mathbb{1}(1 - y_i \mathbf{w}^T \mathbf{x}_i \geq 0) \tag{5}$$

where $\mathbb{1}$ is the indicator function. This means that

$$\mathbb{1}(1 - y_i \mathbf{w}^T \mathbf{x}_i \geq 0) = \begin{cases} 1 & \text{if } 1 - y_i \mathbf{w}^T \mathbf{x}_i \geq 0 \\ 0 & \text{otherwise} \end{cases}$$

2

### Visual Description
Text-only slide containing mathematical formulations for Hard SVM and Soft SVM, including slack variables and subgradient calculations.

---
## Page 3
### Content
**Algorithm 1: Gradient Descent**
**Input:** Number of steps $T$, learning rate $\alpha$
Initialize parameter $\mathbf{w}_0 = 0$ (weights which already implicitly include the bias)
**for** $t \in 0, \dots, T - 1$ **do**
    Compute the subgradient $\nabla f(\mathbf{w}_t)$ according to (1.b).
    Update the parameters $\mathbf{w}_{t+1} = \mathbf{w}_t - \alpha \nabla f(\mathbf{w}_t)$;
**end**

(a) (5 points) Complete the code of the **Soft SVM Loss** method. This method computes the regularized Hinge Loss shown in equation 4 using all examples. The Hinge Loss term is **summed** across examples, not averaged. Expected input and output sizes are given in code comments. When loading the data, keep in mind that the bias term is already implicitly included.

(b) (5 points) Complete the code of the **subgradient** method. This method computes the subgradient of the **regularized** hinge loss problem (equation 5). Expected input and output sizes are given in code comments.

(c) (5 points) Complete the code of the **predict** method, which predicts labels in $\{-1, 1\}$ for all examples. Expected input and output sizes are given in code comments.

(d) (5 points) Complete the **train** method of the soft SVM using the gradient descent algorithm. Expected input sizes are given in code comments.

(e) Train your soft SVM classifiers on the data from **data.py**. You can use `get_data` to get the data. Notably, this function will automatically append a constant 1 to the start of each $x_i$, allowing for the inclusion of the bias in the weight vector.

We will begin with **full batch** gradient descent. This is the setting for Algorithm 1 in this assignment. Plot and report the following in your pdf for each of **C=0.1, C=1, C=50** (keep random_seed at 1, use 10,000 training iterations, and learning rate 1e-5):

(i) (5 points) The train and test loss trajectories over iterations and the final train and test losses.
*(Note: This will be six plots and six numbers)*

(ii) (5 points) The train and test accuracy trajectories over iterations and the final train and test accuracies.
*(Note: This will be six plots and six numbers)*

Next, we will do **stochastic** gradient descent on the same algorithm. Use a batch size of 1 for the same values of **C=0.1, C=1, C=50**. Plot and report the following:

(iii) (5 points) The train and test loss trajectories over iterations and the final train and test losses.
*(Note: This will be six plots and six numbers)*

(iv) (5 points) The train and test accuracy trajectories over iterations and the final train and test accuracies.
*(Note: This will be six plots and six numbers)*

For Problem 1, you only need to include question (e) in your pdf submission. The rest will be graded with the auto-grader.

**1.e Solution**

3

### Visual Description
Text-only slide containing a pseudocode box for Gradient Descent and a list of homework tasks (a) through (e) related to implementing and evaluating Soft SVM.

---
## Page 4
### Content
### Train Loss, Batch: 10000

| (a) C: 0.1 | (b) C: 1 | (c) C: 50 |
| :---: | :---: | :---: |
| ![Train Loss C=0.1](unreadable) | ![Train Loss C=1](unreadable) | ![Train Loss C=50](unreadable) |
| Final Loss: 71.37 | Final Loss: 666.90 | Final Loss: 53976.43 |

**Figure 1: Train Loss, Batch: 10000**

### Test Loss, Batch: 10000

| (a) C: 0.1 | (b) C: 1 | (c) C: 50 |
| :---: | :---: | :---: |
| ![Test Loss C=0.1](unreadable) | ![Test Loss C=1](unreadable) | ![Test Loss C=50](unreadable) |
| Final Loss: 9.85 | Final Loss: 82.91 | Final Loss: 7146.47 |

**Figure 2: Test Loss, Batch: 10000**

### Train Accuracy, Batch: 10000

| (a) C: 0.1 | (b) C: 1 | (c) C: 50 |
| :---: | :---: | :---: |
| ![Train Accuracy C=0.1](unreadable) | ![Train Accuracy C=1](unreadable) | ![Train Accuracy C=50](unreadable) |
| Final Accuracy: 97.43 | Final Accuracy: 97.48 | Final Accuracy: 97.37 |

**Figure 3: Train Accuracy, Batch: 10000**

4

### Visual Description
The page contains three rows of plots, each row having three subplots labeled (a), (b), and (c) corresponding to C values 0.1, 1, and 50. 
- The first row shows "Train Loss, Batch: 10000" plots. The curves generally decrease and flatten.
- The second row shows "Test Loss, Batch: 10000" plots. The curves also decrease and flatten.
- The third row shows "Train Accuracy, Batch: 10000" plots. The curves increase and plateau around 97%.
All plots use blue dots/lines on a white background with grid lines.

---
## Page 5
### Content
### Test Accuracy, Batch: 10000

| (a) C: 0.1 | (b) C: 1 | (c) C: 50 |
| :---: | :---: | :---: |
| ![Test Accuracy C=0.1](unreadable) | ![Test Accuracy C=1](unreadable) | ![Test Accuracy C=50](unreadable) |
| Final Accuracy: 96.80 | Final Accuracy: 96.70 | Final Accuracy: 96.60 |

**Figure 4: Test Accuracy, Batch: 10000**

### Train Loss, Batch: 1

| (a) C: 0.1 | (b) C: 1 | (c) C: 50 |
| :---: | :---: | :---: |
| ![Train Loss Batch 1 C=0.1](unreadable) | ![Train Loss Batch 1 C=1](unreadable) | ![Train Loss Batch 1 C=50](unreadable) |
| Final Loss: 807.18 | Final Loss: 6308.41 | Final Loss: 116258.65 |

**Figure 5: Train Loss, Batch: 1**

### Test Loss, Batch: 1

| (a) C: 0.1 | (b) C: 1 | (c) C: 50 |
| :---: | :---: | :---: |
| ![Test Loss Batch 1 C=0.1](unreadable) | ![Test Loss Batch 1 C=1](unreadable) | ![Test Loss Batch 1 C=50](unreadable) |
| Final Loss: 76.44 | Final Loss: 586.87 | Final Loss: 11474.51 |

**Figure 6: Test Loss, Batch: 1**

5

### Visual Description
The page contains three rows of plots, each row having three subplots labeled (a), (b), and (c) for C values 0.1, 1, and 50.
- The first row shows "Test Accuracy, Batch: 10000" plots, showing an upward trend to a plateau.
- The second row shows "Train Loss, Batch: 1" plots, showing a downward trend.
- The third row shows "Test Loss, Batch: 1" plots, also showing a downward trend.
The plots for Batch 1 appear smoother or have different scales compared to the Batch 10000 plots on the previous page.

---
## Page 6
### Content
### Train Accuracy, Batch: 1

| (a) C: 0.1 | (b) C: 1 | (c) C: 50 |
| :---: | :---: | :---: |
| ![Train Accuracy Batch 1 C=0.1](unreadable) | ![Train Accuracy Batch 1 C=1](unreadable) | ![Train Accuracy Batch 1 C=50](unreadable) |
| Final Accuracy: 72.93 | Final Accuracy: 78.00 | Final Accuracy: 91.27 |

**Figure 7: Train Accuracy, Batch: 1**

### Test Accuracy, Batch: 1

| (a) C: 0.1 | (b) C: 1 | (c) C: 50 |
| :---: | :---: | :---: |
| ![Test Accuracy Batch 1 C=0.1](unreadable) | ![Test Accuracy Batch 1 C=1](unreadable) | ![Test Accuracy Batch 1 C=50](unreadable) |
| Final Accuracy: 74.90 | Final Accuracy: 79.80 | Final Accuracy: 92.20 |

**Figure 8: Test Accuracy, Batch: 1**

6

### Visual Description
The page contains two rows of plots, each with three subplots for C values 0.1, 1, and 50.
- The first row shows "Train Accuracy, Batch: 1" plots. The accuracy increases over iterations, with higher C values reaching higher final accuracies.
- The second row shows "Test Accuracy, Batch: 1" plots, following a similar increasing trend.
The plots for C=0.1 and C=1 show more step-like or linear increases compared to the more rapid curve for C=50.

---
## Page 7
### Content
# 2 Kernelized Perceptron [40 points]
We will implement a kernelized version of the perceptron algorithm to classify datapoints $\mathbf{x}_i \in \mathbb{R}^2$ into $y_i = \{-1, 1\}$ for all $i = 1, 2, \dots, n$. Remember that a kernel is used to classify linearly non-separable data by converting the datapoints into higher dimensions. The kernel trick is useful in that we have no need to calculate the feature map $\psi$ and only need to compute the kernel $K$. However, there is a tradeoff. During test time on new datapoints, instead of predicting the labels with a set of learned weights, we have to sum over the training data to avoid computing $\psi$. Thus, we always need the training data for inference even after training.

For the kernel, we will be using a Radial Basis Function (RBF). For $\mathbf{x}, \mathbf{x}' \in \mathbb{R}^d$ and constant $\sigma$, the RBF kernel is given as follows:

$$K(\mathbf{x}, \mathbf{x}') = \exp\left(-\frac{||\mathbf{x} - \mathbf{x}'||^2}{2\sigma^2}\right)$$

Let’s implement the Kernelized Perceptron.

**Algorithm 2: Kernelized (RBF) Perceptron**
**Input:** Training data $\{\mathbf{x}, \mathbf{y}\}$
**Output:** Parameter $\alpha$
Initialize parameter $\alpha \leftarrow \mathbf{0}$;
**for** $t \leftarrow 0$ **to** $T - 1$ **do**
    **if** there exists $(\mathbf{x}_i, y_i) \in (\mathbf{x}, \mathbf{y})$ such that $\text{sign}\left(\sum_{j=1}^n \alpha_j y_j K(\mathbf{x}_j, \mathbf{x}_i)\right) \neq y_i$ **then**
        $\alpha_i \leftarrow \alpha_i + 1$;
    **end**
**end**

(a) (5 points) Load the data from **X_train.csv, X_test.csv, y_train.csv, and y_test.csv**. Plot the training data and test data on a 2d graph and color the data based on their labels. There should be two plots.

(b) (10 points) Using the RBF kernel, in **perceptron.py**, complete the **predict** method which returns the prediction of the perceptron before the sign function. **predict** takes as input the training data $(\mathbf{x}, \mathbf{y})$ and one datapoint $(\mathbf{x}')$, and returns a predicted value. In other words, implement $\sum_{j=1}^n \alpha_j y_j K(\mathbf{x}_j, \mathbf{x}')$. No bias term is needed ($b = 0$).

(c) (10 points) Using the **predict** method, complete the **train** method which implements Algorithm 2. **train** takes as input the training data $(\mathbf{x}, \mathbf{y})$ and updates $\alpha$.

(d) (10 points) Using the **predict** method, compute and return all predictions for the test data by completing **get_predictions**. As mentioned above, because of the kernel trick, the training data is given as input to **get_predictions** for inferencing on the test data.

(e) (5 points) Calculate and report the accuracy of the kernelized perceptron on the test data. Also, plot the predictions of the test data with your trained perceptron.

For Problem 2, you only need to include question (a) and (e) in your pdf submission. The rest will be graded with the auto-grader.

7

### Visual Description
Text-only slide containing mathematical definitions for the RBF kernel, a pseudocode box for the Kernelized Perceptron algorithm, and a list of homework tasks (a) through (e).

---
## Page 8
### Content
**(a) Solution** Plots

| (a) Train data | (b) Test data |
| :---: | :---: |
| ![Train data plot](unreadable) | ![Test data plot](unreadable) |

**Figure 9: Data plots**

**(e) Solution** Accuracy is 0.886 or any number near it. The value of the accuracy is not important. The decision boundary must be elliptic in that there is no noisy points (i.e., no purple points and yellow points mixed together).

![Decision boundary plot](unreadable)

8

### Visual Description
The page contains three scatter plots.
- Figure 9(a) shows "Train data" with two concentric rings of points: an inner ring of purple points and an outer ring of yellow points.
- Figure 9(b) shows "Test data" with a similar concentric ring structure, but the points are more scattered and noisy.
- The bottom plot shows the predictions on the test data. It shows a clear separation where the inner points are purple and the outer points are yellow, forming an elliptical decision boundary. The points are colored based on their predicted labels.

---
==End of PDF==
## Page 9

### Content
## 3 Evaluations [20 points]

This question is designed to help you think about machine learning in a more holistic manner by reading up on a trending topic — **evaluations**. Try reading up to understand what the two topics below mean, but then critically think and answer them yourself. About a paragraph or two on each sub-bullet will suffice. We’ll be lenient in grading – we just want you to think!

(a) (5 points) Read up on BLEU$^1$ and explain the problem it was designed to solve. What made it revolutionary at the time?

(b) (5 points) Explain why BLEU became less suitable as an evaluation metric as NLP evolved. Provide an example where BLEU fails in a non-Machine Translation case.

(c) (5 points) A modern evaluation approach is LLM-as-a-judge$^2$. Explain how this addresses many limitations of BLEU and provide some examples of how it can be used.

(d) (5 points) What are the limitations of LLM-as-a-judge? How can we overcome these limitations?

**(a) Solution**
* Designed to solve the evaluation problem in machine translation. Prior to this, human evaluations were used — slow, expensive, not scalable, etc.
* Used a method based on n-gram overlap to compare between machine generated translation and expert human translations.
* Revolutionary because: (a) first widely adopted automatic metric for machine translation (b) enabled rapid benchmarking thereby boosting machine translation research (c) supported multi-reference evaluation, i.e., multiple translations could be correct.

**(b) Solution**
* NLP evolved into tasks like summarization, question-answering, reasoning, etc.
* BLEU relies only on surface n-gram overlap with a reference text. It cannot detect semantic correctness (i.e., not robust to synonyms, paraphrases), BLEU cannot detect hallucinations, incorrect text, etc., BLEU has poor correlation with humans on open-ended tasks where there are large number of valid answers.
* Example can be anything that shows how BLEU score would be low in a valid outcome.

**(c) Solution**
* LLM-as-a-judge can understand semantics, correctness, style and fluency, can handle open-ended tasks, can be used to evaluate based on task-specific rubrics, etc.
* Can be used for summarization, question-answering, code-generation, reasoning, etc.

**(d) Solution**
* Bias and inconsistency, prompt sensitivity, domain limitations, lack of ground truth, etc.
* Can overcome these limitations by hybrid evaluations, multiple judges, rubrics and structured prompts, etc.
* Very open-ended question; would be interesting to see if students propose some great ideas w.r.t what is next after LLM-as-a-judge as opposed to above “simpler” solutions.

---
$^1$Papineni, Kishore, et al. ”Bleu: a method for automatic evaluation of machine translation.” Proceedings of the 40th annual meeting of the Association for Computational Linguistics. 2002.
$^2$Zheng, Lianmin, et al. ”Judging llm-as-a-judge with mt-bench and chatbot arena.” Advances in neural information processing systems 36 (2023): 46595-46623.

<p align="center">9</p>

### Visual Description
Text-only slide. The page contains a homework question about machine learning evaluations, followed by detailed solutions for each sub-part (a through d). The solutions are highlighted in blue text with bullet points. Two academic citations are provided as footnotes at the bottom of the page.
