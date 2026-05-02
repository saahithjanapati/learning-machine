# gradescope-07-hw4-report-graded-copy

Source: `materials/archive/advanced-machine-learning-10-715-cmu/gradescope-graded-copies/gradescope-07-hw4-report-graded-copy.pdf`
Duplicate equivalents: `gradescope-07-hw4-report-graded-copy.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 8

## Page 1
### Content
# HW4 Report
**Graded**
2 Days, 20 Hours Late

**Student**
Saahith Janapati

**Total Points**
80 / 80 pts

**Question 1**
**1.a Residual/Skip Connections** 10 / 10 pts
*   $\checkmark$ - 0 pts Correct
*   - 2 pts Missing explanation for how skip connections alleviate the issue

**Question 2**
**1.b.a Kernels/Convolutions** 10 / 10 pts
*   $\checkmark$ - 0 pts Correct
*   - 1 pt Missing details about convolution such as patches/sliding window etc
*   - 3 pts Did not explain convolutions

**Question 3**
**1.b.b Output size of convolution** 5 / 5 pts
*   $\checkmark$ - 0 pts Correct
*   - 3 pts Incorrect

**Question 4**
**1.b.c Effect of given kernels** 15 / 15 pts
*   $\checkmark$ - 0 pts Correct
*   - 1 pt Only one image
*   - 1 pt Needed both filter applied on both images
*   - 1 pt Wrong way of combining channels

**Question 5**
**1.c.a SGD with momentum formula** 5 / 5 pts
*   $\checkmark$ - 0 pts Correct
*   - 1 pt Incorrect, minor error

### Visual Description
This is the first page of a graded homework report from Gradescope. It shows the student's name, total score (80/80), and a breakdown of points for the first five questions. Each question section includes the points earned, a "Correct" status with a checkmark, and a list of potential rubric deductions that were not applied in this case.

---
## Page 2
### Content
**Question 6**
**1.c.b Optimizing quadratic function with SGD** 10 / 10 pts
*   $\checkmark$ - 0 pts Correct
*   - 1 pt Minor error
*   - 3 pts Error

**Question 7**
**1.c.c Problem with cubic function** 5 / 5 pts
*   $\checkmark$ - 0 pts Correct
*   - 2 pts Error

**Question 8**
**1.d.c Precision, Recall and F1** 10 / 10 pts
*   $\checkmark$ - 0 pts Correct Definitions
*   - 3 pts Incorrect Precision
*   - 3 pts Incorrect Recall
*   - 3 pts Incorrect F1 Score

**Question 9**
**1.d.d Plots and final metrics** 10 / 10 pts
*   $\checkmark$ - 0 pts Correct plots
*   - 5 pts Training accuracy better with momentum
*   - 5 pts Test accuracy better without momentum

### Visual Description
This is the second page of the Gradescope report, continuing the point breakdown for questions 6 through 9. Like the first page, it shows full marks for each question and lists rubric items for potential deductions that were not applied.

---
## Page 3
### Content
Questions assigned to the following page: 1, 2, and 3

**Part 1, A**
a. In deep neural networks, gradients can quickly approach zero as we backpropagate to earlier layers. Popular nonlinear activation functions such as sigmoid and tanh have regions where their derivatives are very small. Because gradients are repeatedly multiplied by these small derivatives, the gradients in early layers vanish, making learning difficult. Residual connections address this issue by allowing gradients to flow directly through additive skip paths, bypassing nonlinear transformations. This enables efficient gradient propagation, leading to more stable and faster training of deep networks.

**Part 1, B**
b.
i. Explain "kernels" and "convolutions".
1. A kernel is a small matrix of numbers used to detect specific patterns in data. A convolution is a math operation where we slide a kernel across an image, multiply each value of the kernel with the corresponding value in the image, and add all the products together. This operation produces a resulting feature map which describes where certain patterns lie in the image. Convolutions are useful because they allow the network to learn local spatial patterns and reuse weights (kernels) across the whole image. This is useful because for vision tasks, you often want to process regions of the image together, and you want to reuse weights across the whole image.
    a. A sample kernel is [[1, 0, 0], [1, 0, 0], [1,0,0]]. This kernel would yield high activation when the corresponding part of the image has a left edge.
    b. If we perform a convolution with this kernel on an image with values [[1,1,0,0], [1,1,0,0], [1,1,0,0], [1,1,0,0]], the resulting feature map would be [[3,3],[3,3]].
2. Given a kernel of size $K \times K$ and image of size $W \times W$, the output size would be
    a. $floor((W + 2 * P - K) / (S)) + 1$

### Visual Description
Text-only slide. This page contains the student's written answers for the first three questions, covering vanishing gradients, residual connections, and the definitions/formulas for kernels and convolutions.

---
## Page 4
### Content
Questions assigned to the following page: 4 and 5

![Original (cat), Kernel K1, Kernel K2; Original (frog), Kernel K1, Kernel K2](image_placeholder)

b.
i. These two kernels are Sobel derivative filters and they activate for changes in pixel intensity in the vertical and horizontal directions respectively. These filters are useful for tasks like edge detection in early layers.

**Part 1, C**

ii. $b_t = \mu b_{t-1} + (1 - \tau) g_t$
iii. $\theta_t = \theta_{t-1} - \gamma (g_t + \mu b_t)$
1. $b$ = momentum buffer
2. $mu$ = momentum coefficient
3. $tau$ = dampening factor
4. $gamma$ = learning_rate
5. $g_t$ = current gradient

### Visual Description
This page includes a set of images showing the application of two different kernels (K1 and K2) to original images of a cat and a frog, resulting in edge-detected versions. Below the images, there is text explaining that these are Sobel filters. The bottom half of the page contains mathematical formulas for SGD with momentum and definitions for the variables used.

---
## Page 5
### Content
Questions assigned to the following page: 6 and 7

![SGD on y = x^2 / 2 with and without Momentum plot](image_placeholder)

ii.
b) SGD takes slower and smaller steps towards the minimum. Nesterov starts the same, but quickly picks up the pace and overshoots the minimum, but then stabilizes around the minimum. It appears to be more efficient than SGD in this problem.

c) SGD might get stuck around x=0 because that region of the graph is flat. As a result, it might not descend further down towards x = -1, which is the true minimum for this function. Nesterov momentum could help here, because when you have some residual velocity from previous steps, it can help you push over the x=0, region and towards the true minimum. However, it cannot help if you start at the point where there is zero gradient.

### Visual Description
The page features a plot titled "SGD on $y = x^2 / 2$ with and without Momentum". The plot shows the parabolic curve $y = x^2 / 2$ and the optimization paths of "SGD (no momentum)" and "SGD (momentum=0.9)". Below the plot, there is text comparing the performance of standard SGD and Nesterov momentum, specifically discussing their behavior on flat regions of a function.

---
## Page 6
### Content
Question assigned to the following page: 8

**TP** = true positives
**FP** = false positives
**FN** = False negatives

**Precision** - The formula for precision is $(TP) / (TP + FP)$
**Recall** - The formula for recall is $(TP) / (TP + FN)$.
**F1** = $2 / ((1 / Precision) + (1 / recall))$

Precision asks, out of the ones we classified as a certain label, how many are correct? Recall asks, out of all the elements of a certain class, how many did we correctly classify as that class.

F1 scores provide the geometric mean of both precision and recall, and give us a sense of both of these metrics together.

(Note, since CIFAR-10 has multiple possible labels, to calculate precision, we calculate precision on each class, then perform a weight average of these values according to the proportion of that class in the whole dataset). We do the same procedure for recall as well.

### Visual Description
Text-only slide. This page provides definitions and formulas for classification metrics: True Positives (TP), False Positives (FP), False Negatives (FN), Precision, Recall, and the F1 score. It also includes a brief explanation of what Precision and Recall represent and a note on how to calculate these for multi-class datasets like CIFAR-10.

---
## Page 7
### Content
Question assigned to the following page: 9

![Four plots: Train Accuracy, Train Loss, Test Accuracy, Test Loss comparing Momentum 0.9 and No momentum](image_placeholder)

**Final metrics**

| | Test loss | Test accuracy | precision | recall | f1 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Momentum | 1.1952 | 0.7484 | 0.7486 | 0.7519 | 0.7484 |
| No momentum | 1.5904 | 0.6753 | 0.6756 | 0.6753 | 0.6751 |

I'm observing that not using momentum yields better performance on the training sets, but momentum yields significantly better accuracy on the test sets in terms of both loss and accuracy. Momentum is essentially acting as a regularizer and improves generalization by reducing noise in individual gradient updates.

### Visual Description
This page contains four line graphs comparing "Momentum 0.9" and "No momentum" across 20 epochs for Train Accuracy, Train Loss, Test Accuracy, and Test Loss. Below the graphs is a table summarizing the final metrics (Test loss, Test accuracy, precision, recall, f1) for both cases. At the bottom, there is a short paragraph of text interpreting the results, noting that momentum improves generalization.

---
## Page 8
### Content
[unreadable]

### Visual Description
This page is blank.

---
