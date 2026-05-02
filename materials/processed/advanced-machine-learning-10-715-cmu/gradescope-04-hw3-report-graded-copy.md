# gradescope-04-hw3-report-graded-copy

Source: `materials/archive/advanced-machine-learning-10-715-cmu/gradescope-graded-copies/gradescope-04-hw3-report-graded-copy.pdf`
Duplicate equivalents: `gradescope-04-hw3-report-graded-copy.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 10

## Page 1
### Content
# HW3 Report
**Graded**
1 Day, 13 Hours Late

**Student**
Saahith Janapati

**Total Points**
40 / 40 pts

**Question 1**
**1.1 Normalization** **5 / 5 pts**
*   **- 0 pts** Correct
*   **- 1 pt** Minor error
*   **- 3 pts** Error

### Visual Description
A Gradescope grading report header page showing the assignment title "HW3 Report", the student's name "Saahith Janapati", a total score of 40/40, and the score for the first sub-question "1.1 Normalization".

---
## Page 2
### Content
**Question 2**
**1.4 Training Plots** **10 / 10 pts**

![Training Plots](https://placeholder_for_plots)
*   **- 0 pts** Correct
*   **- 1 pt** 4 plots in total were expected. Please see the question.
*   **- 2 pts** Missing/Incorrect Explanation
*   **- 1 pt** Discrepancy in 1 plot (see rubric for correct plot)
*   **- 2 pts** Plots seem a bit off (see rubric for correct plot)
*   **- 4 pts** Plots are quite off (see rubric for correct plot)

**Question 3**
**2.3 Dropout Explanation** **5 / 5 pts**
*   **- 0 pts** Correct
*   **- 2.5 pts** Does not explain how we scale neurons by 1-p during training
*   **- 5 pts** Incorrect

### Visual Description
A Gradescope grading report page. It contains four small line graphs under the heading "1.4 Training Plots": Training Loss, Training Accuracy, Test Loss, and Test Accuracy. Each graph compares three learning rates: LR = 0.004, LR = 0.04, and LR = 0.4 over 10 epochs. Below the plots are the rubric items for Question 2 and the score for Question 3.

---
## Page 3
### Content
**Question 4**
**2.5 Training Plots with L2 Regularization** **10 / 10 pts**

![L2 Regularization Plots](https://placeholder_for_plots)
*   **- 0 pts** Correct
*   **- 1 pt** 4 plots in total were expected. Please see the question.
*   **- 2 pts** Missing/Incorrect Explanation
*   **- 1 pt** Discrepancy in 1 plot (see rubric for correct plot)
*   **- 2 pts** Plots seem a bit off (see rubric for correct plot)
*   **- 4 pts** Plots are quite off (see rubric for correct plot)

### Visual Description
A Gradescope grading report page for Question 4. It features four line graphs: Training Loss, Training Accuracy, Test Loss, and Test Accuracy. These graphs compare three L2 regularization strengths (lambda = 0.01, 0.001, 0.0001) over 20 epochs. Rubric items with point deductions are listed below the plots.

---
## Page 4
### Content
**Question 5**
**2.6 Training Plots with Dropout** **10 / 10 pts**

![Dropout Plots](https://placeholder_for_plots)
*   **- 0 pts** Correct
*   **- 1 pt** 4 plots in total were expected. Please see the question.
*   **- 2 pts** Missing/Incorrect Explanation
*   **- 1 pt** Discrepancy in 1 plot (see rubric for correct plot)
*   **- 2 pts** Plots seem a bit off (see rubric for correct plot)
*   **- 4 pts** Plots are quite off (see rubric for correct plot)

### Visual Description
A Gradescope grading report page for Question 5. It displays four line graphs: Training Loss, Training Accuracy, Test Loss, and Test Accuracy. The graphs compare four different dropout rates (0.0, 0.2, 0.5, 0.8) over 20 epochs. Rubric items are listed at the bottom.

---
## Page 5
### Content
Question assigned to the following page: 1

**Use of Normalization**

Normalizing the MNIST images (subtracting 0.5 and dividing by 0.5) centers the pixel values around zero and scales them to roughly unit variance. This ensures that inputs to each layer lie within a similar range, helping the network train faster and more reliably by improving gradient stability and convergence.

It also reduces the risk of vanishing or exploding gradients, which can occur when activation functions like Sigmoid or Tanh saturate for large positive or negative inputs. Centering and scaling the inputs keeps activations in their sensitive, high-gradient regions, allowing for more effective learning.

### Visual Description
Text-only slide.

---
## Page 6
### Content
Question assigned to the following page: 2

![MNIST Training and Test Plots](https://placeholder_for_plots)

**Observation:**
I see that the middle learning rate of 0.04 is most effective, as it learns the quickest and yields the lowest loss and highest accuracy on both training and test sets.

The lowest learning rate of 0.004 also is able to learn, but not as quickly and as well as the middle rate. By the end of the 10 epochs, it is almost on par with the network trained with a learning rate of 0.04.

The highest learning rate of 0.4 is not able to learn effectively. It is most likely making weight updates that are too large. Its best accuracy is only slightly better than random guessing.

### Visual Description
A page containing four line graphs showing MNIST performance: Train Accuracy, Train Loss, Test Accuracy, and Test Loss. Each graph plots three learning rates (0.004, 0.04, 0.4) over 10 epochs. Below the graphs is a text section titled "Observation" explaining the results.

---
## Page 7
### Content
Question assigned to the following page: 3

During training, dropout randomly sets each neuron's activation to zero with probability $p$ (the dropout rate). Let the original activation be $a_i$. The expected value of the activation after dropout is:

$E[\tilde{a}_i] = (1 - p) * a_i$

because each neuron remains active with probability $(1 - p)$.

This means that, on average, the input to the next layer is scaled down by $(1 - p)$. To keep the expected activation magnitude consistent between training and testing, we scale the surviving activations during training by $1 / (1 - p)$:

$\tilde{a}_i = (a_i * m_i) / (1 - p)$, where $m_i$ is sampled from a Bernoulli$(1 - p)$ distribution.

Then the expected value becomes:

$E[\tilde{a}_i] = a_i$

Thus, the expected input to the next layer remains the same at training and testing time.

During testing, dropout is disabled (that is, $m_i = 1$ for all neurons), and no rescaling is needed since the network already learned with rescaled activations during training.

### Visual Description
Text-only slide.

---
## Page 8
### Content
Question assigned to the following page: 4

![CIFAR10 L2 Regularization Plots](https://placeholder_for_plots)

The lower regularization (0.001 and 0.0001) weights lead to improved training accuracy, but it is clear there is some over-fitting because the test accuracy is significantly lower (and the loss is significantly higher) with these lower weights.

The higher regularization weight of 0.01 leads to worse performance on the training set, but its performance on the test set is closely matched to its training performance.

I also see that the loss for lambda of 0.0001 and 0.001 start increasing at the end of the training run, which is a clear sign of clear overfitting.

### Visual Description
A page containing four line graphs showing CIFAR10 performance with L2 regularization: Train Accuracy (L2), Train Loss (L2), Test Accuracy (L2), and Test Loss (L2). Each graph plots three lambda values (0.01, 0.001, 0.0001) over 20 epochs. Below the graphs is a text analysis of the results.

---
## Page 9
### Content
Question assigned to the following page: 5

**CIFAR10 Train Accuracy (Dropout)**
(Graph showing accuracy vs. epoch for dropout rates 0.0, 0.2, 0.5, 0.8)

**CIFAR10 Train Loss (Dropout)**
(Graph showing loss vs. epoch for dropout rates 0.0, 0.2, 0.5, 0.8)

**CIFAR10 Test Accuracy (Dropout)**
(Graph showing accuracy vs. epoch for dropout rates 0.0, 0.2, 0.5, 0.8)

**CIFAR10 Test Loss (Dropout)**
(Graph showing loss vs. epoch for dropout rates 0.0, 0.2, 0.5, 0.8)

On the training set, there is a clear correlation that higher dropout rate leads to worse training performance. However, on the test set, we see similar final accuracies, with a dropout rate of 0.8 achieving the best performance.

On the test loss graph, we can clearly see loss starting to increase in the later epochs, for lower dropout rates, which may be a sign of overfitting. The highest dropout rate of 0.8 seems to keep a low test loss throughout the epochs, suggesting that it effectively reduces overfitting.

### Visual Description
The page contains four line graphs arranged in a 2x2 grid, followed by two paragraphs of text. 
- The top-left graph shows "CIFAR10 Train Accuracy (Dropout)" with accuracy increasing over 20 epochs; lower dropout rates achieve higher training accuracy.
- The top-right graph shows "CIFAR10 Train Loss (Dropout)" with loss decreasing over 20 epochs; lower dropout rates achieve lower training loss.
- The bottom-left graph shows "CIFAR10 Test Accuracy (Dropout)" where all dropout rates converge to a similar accuracy range (approx 0.75-0.80).
- The bottom-right graph shows "CIFAR10 Test Loss (Dropout)" where lower dropout rates (0.0, 0.2) show a clear "U-shape" indicating overfitting, while the 0.8 dropout rate maintains the lowest and most stable test loss.
Each graph uses a color-coded legend: blue (dropout=0.0), orange (dropout=0.2), green (dropout=0.5), and red (dropout=0.8).

---
## Page 10
### Content
[Blank page]
### Visual Description
Blank page.
