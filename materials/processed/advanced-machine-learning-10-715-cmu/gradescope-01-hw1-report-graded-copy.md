# gradescope-01-hw1-report-graded-copy

Source: `materials/archive/advanced-machine-learning-10-715-cmu/gradescope-graded-copies/gradescope-01-hw1-report-graded-copy.pdf`
Duplicate equivalents: `gradescope-01-hw1-report-graded-copy.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 11

## Page 1
### Content
# HW1 Report
**Student**
Saahith Janapati

**Total Points**
50 / 50 pts

● Graded
### Visual Description
A cover page for a homework report. It contains the title "HW1 Report", the student's name "Saahith Janapati", the total score "50 / 50 pts", and a green dot indicating the status is "Graded".

---

## Page 2
### Content
**Question 1**
**Soft SVM and Optimization** **20 / 20 pts**

**1.1 (e)-(i)** **5 / 5 pts**
*   $\checkmark$ - 0 pts Correct
*   - 1 pt Train and test curve swapped
*   - 1 pt Curves too smooth for C=50
*   - 1.5 pts Wrong train/test loss values for C=50
*   - 2.5 pts Wrong/missing final loss values
*   - 2.5 pts Wrong/missing plots
*   - 2 pts Missing plots, losses for C=50
*   - 2.5 pts Missing test values
*   - 5 pts Missing response

**1.2 (e)-(ii)** **5 / 5 pts**
*   $\checkmark$ - 0 pts Correct
*   - 1 pt Curve too smooth for C=50
*   - 1.5 pts Wrong/missing accuracy for C=50
*   - 5 pts Wrong/missing accuracies
*   - 1 pt Wrong plot for C=50
*   - 0.001 pts Please do not round the accuracies from next time
*   - 1.5 pts Missing curve for C=50
*   - 2.5 pts Missing test plots and values
*   - 0.001 pts Accuracy values must be less than 100%
*   - 2.5 pts Wrong/missing plots

**1.3 (e)-(iii)** **5 / 5 pts**
*   $\checkmark$ - 0 pts Correct
*   - 2.5 pts Missing/wrong final loss values
*   - 2.5 pts Missing/wrong plots
*   - 1.5 pts Wrong values for C=50
*   - 2.5 pts Logical error in code led to different values
### Visual Description
A grading rubric page from Gradescope. It lists sub-questions 1.1, 1.2, and 1.3 under Question 1, showing full marks awarded for each and the list of possible point deductions for common errors.

---

## Page 3
### Content
**1.4 (e)-(iv)** **5 / 5 pts**
*   $\checkmark$ - 0 pts Correct
*   - 1 pt Missing accuracy values for C=0.1
*   - 1 pt No plateaus and jumps visible for C=0.1
*   - 2.5 pts Wrong/missing plots
*   - 2.5 pts Wrong/missing accuracy values
*   - 1.5 pts Wrong/missing values for C=50
*   - 2.5 pts Wrong/missing train plots and values
*   - 2.5 pts Logical error in code led to different values

**Question 2**
**Kernelized Perceptron** **10 / 10 pts**

**2.1 (a)** **5 / 5 pts**
*   $\checkmark$ - 0 pts Correct
*   - 2.5 pts Testing data with labels is missing

**2.2 (e)** **5 / 5 pts**
*   $\checkmark$ - 0 pts Correct
*   - 1 pt Missing accuracy
*   - 3 pts Missing test predictions plot
*   - 0.01 pts Plotting correctness of predictions rather than predictions themselves
### Visual Description
Continuation of the Gradescope grading rubric. It shows the scoring and rubric items for sub-question 1.4 and Question 2 (sub-questions 2.1 and 2.2).

---

## Page 4
### Content
**Question 3**
**Evaluations** **20 / 20 pts**

**3.1 (a)** **5 / 5 pts**
*   $\checkmark$ - 0 pts Correct
*   - 2 pts Partially Incorrect
*   - 5 pts Fully Incorrect

**3.2 (b)** **5 / 5 pts**
*   $\checkmark$ - 0 pts Correct
*   - 2 pts Partial Mistake
*   - 5 pts Incorrect

**3.3 (c)** **5 / 5 pts**
*   $\checkmark$ - 0 pts Correct

**3.4 (d)** **5 / 5 pts**
*   $\checkmark$ - 0 pts Correct
*   - 0.1 pts Missing key terms like bias and inconsistency, prompt sensitivity
### Visual Description
Continuation of the Gradescope grading rubric for Question 3, covering sub-questions 3.1 through 3.4.

---

## Page 5
### Content
Question assigned to the following page: 1.1

# Full - Loss

(Three plots showing Training vs Test Loss for different C values)

**C: 0.1**
*   Plot: Training vs Test Loss - full - C: 0.1
*   Final values:
    ```json
    "run_name": "outputs/full_0.1",
    "final_train_loss": 71.36587873825735,
    "final_test_loss": 9.845665730636526,
    ```

**C: 1**
*   Plot: Training vs Test Loss - full - C: 1
*   Final values:
    ```json
    "run_name": "outputs/full_1",
    "final_train_loss": 666.903614274678,
    "final_test_loss": 82.90819995103165,
    ```

**C: 50**
*   Plot: Training vs Test Loss - full - C: 50
*   Final values:
    ```json
    "run_name": "outputs/full_50",
    "final_train_loss": 53976.43260345139,
    "final_test_loss": 7146.466889100146,
    ```
### Visual Description
This page displays the results for "Full - Loss". It includes three line graphs plotting Loss vs. Iteration for both Train and Test sets at hyperparameter values $C=0.1$, $C=1$, and $C=50$. Below the plots are three black code blocks containing JSON-formatted output for the final training and test loss values for each run.

---

## Page 6
### Content
Question assigned to the following page: 1.2

# Full - Accuracy

**Full batch gradient descent, C = 0.1**

(Three plots showing Training vs Test Accuracy for different C values)

**C: 0.1**
*   Plot: Training vs Test Accuracy - full - C: 0.1
*   Final values:
    ```json
    "run_name": "outputs/full_0.1",
    "final_train_acc": 0.9743,
    "final_test_acc": 0.968
    ```

**C: 1**
*   Plot: Training vs Test Accuracy - full - C: 1
*   Final values:
    ```json
    "run_name": "outputs/full_1",
    "final_train_acc": 0.9748,
    "final_test_acc": 0.967
    ```

**C: 50**
*   Plot: Training vs Test Accuracy - full - C: 50
*   Final values:
    ```json
    "run_name": "outputs/full_50",
    "final_train_acc": 0.9737,
    "final_test_acc": 0.966
    ```
### Visual Description
This page displays the results for "Full - Accuracy". It includes three line graphs plotting Accuracy vs. Iteration for both Train and Test sets at $C=0.1$, $C=1$, and $C=50$. Below the plots are three black code blocks containing JSON-formatted output for the final training and test accuracy values for each run.

---

## Page 7
### Content
Question assigned to the following page: 1.3

# Stochastic - Loss

(Three plots showing Training vs Test Loss - stochastic for different C values)

**C: 0.1**
*   Plot: Training vs Test Loss - stochastic - C: 0.1
*   Final values:
    ```json
    {
      "run_name": "outputs/stochastic_0.1",
      "final_train_loss": 807.1812470488808,
      "final_test_loss": 76.43987907396378,
    }
    ```

**C: 1**
*   Plot: Training vs Test Loss - stochastic - C: 1
*   Final values:
    ```json
    {
      "run_name": "outputs/stochastic_1",
      "final_train_loss": 6308.413050545824,
      "final_test_loss": 586.8703042746916,
    }
    ```

**C: 50**
*   Plot: Training vs Test Loss - stochastic - C: 50
*   Final values:
    ```json
    {
      "run_name": "outputs/stochastic_50",
      "final_train_loss": 116258.65179688616,
      "final_test_loss": 11474.509328575363,
    }
    ```
### Visual Description
This page displays the results for "Stochastic - Loss". It includes three line graphs plotting Loss vs. Iteration for stochastic gradient descent at $C=0.1$, $C=1$, and $C=50$. Below the plots are three black code blocks containing JSON-formatted output for the final training and test loss values.

---

## Page 8
### Content
Question assigned to the following page: 1.4

# Stochastic - Accuracy

(Three plots showing Training vs Test Accuracy - stochastic for different C values)

**C: 0.1**
*   Plot: Training vs Test Accuracy - stochastic - C: 0.1
*   Final values:
    ```json
    {
      "run_name": "outputs/stochastic_0.1",
      "final_train_acc": 0.7293,
      "final_test_acc": 0.749
    }
    ```

**C: 1**
*   Plot: Training vs Test Accuracy - stochastic - C: 1
*   Final values:
    ```json
    {
      "run_name": "outputs/stochastic_1",
      "final_train_acc": 0.78,
      "final_test_acc": 0.798
    }
    ```

**C: 50**
*   Plot: Training vs Test Accuracy - stochastic - C: 50
*   Final values:
    ```json
    {
      "run_name": "outputs/stochastic_50",
      "final_train_acc": 0.9127,
      "final_test_acc": 0.922
    }
    ```
### Visual Description
This page displays the results for "Stochastic - Accuracy". It includes three line graphs plotting Accuracy vs. Iteration for stochastic gradient descent at $C=0.1$, $C=1$, and $C=50$. Below the plots are three black code blocks containing JSON-formatted output for the final training and test accuracy values.
## Page 9
### Content
Questions assigned to the following page: 2.1 and 2.2

**Kernelized Perceptron**

**(a) (Training and testing plots)**

![Training Data and Test Data scatter plots]

**(e)**

**Test Data (color=true, marker=pred) — acc=0.913**

![Large scatter plot showing true vs predicted labels]

**Accuracy: 91.3%**

### Visual Description
The page features three scatter plots visualizing data points in a 2D feature space (Feature 1 vs. Feature 2). The data is distributed in two concentric circles. 
- The top left plot, "Training Data", shows blue points in the inner circle (Label -1) and red points in the outer circle (Label 1).
- The top right plot, "Test Data", shows a similar distribution with more noise/overlap.
- The bottom large plot, titled "Test Data (color=true, marker=pred) — acc=0.913", uses color to represent the true label (blue for -1, red for 1) and marker shape to represent the predicted label (circle for pred -1, triangle for pred 1). Most points are correctly classified, but some red triangles appear in the inner circle and some blue circles appear in the outer circle, indicating errors.

---

## Page 10
### Content
Questions assigned to the following page: 3.1, 3.2, 3.3, and 3.4

**Evaluations**

(a) BLEU was developed to address the problem of efficient evaluation for machine translation. Prior to BLEU, researchers often used humans to judge the quality of translation systems, which caused issues because of long evaluation times and subjectivity and inconsistency between evaluators. By measuring the n-gram overlap between a machine translation and one or more human translations, BLEU provided a consistent and effective evaluation method that often correlated well with human judgement. This allowed researchers to effectively benchmark and improve machine translation systems.

(b) One critical shortcoming in the BLEU metric is that it does not take into account semantic similarity between a reference text and a generated text. This can cause it to heavily penalize generations that don't contain the same exact words/tokens as the reference text. One area where this is a drawback is machine translation. If a reference summary is "The video discussed the early development of airplanes" but a generated translation was "This lecture explained the creation of the first flying machines", the generated translation would score poorly, even though it is quite close to the reference translation in meaning.

(c) LLM-as-a-judge is a scalable framework to perform automated evaluation of generations using LLMs as verifiers. This framework goes beyond the simple n-gram metric that BLEU employs and instead relies on LLM's, which have rich semantic and world understanding, to assess an output. This allows it to evaluate texts more holistically, according to their semantics. It can be used in multiple ways such as:
(i) Pairwise comparison: the judge chooses one response over another. This can be used in environments like ChatBot Arena, which scores and ranks different LLM chatbots based on their responses.
(ii) Single-answer grading: the judge scores a response according to a provided rubric. This can be used to score answers to free response questions (such as those that appear on AP Biology exams).
(iii) Reference-guided grading: the judge scores a response according to a reference answer.

(d) There are numerous drawbacks to LLM-as-a-judge. Some include:
(i) Position Bias: LLM judges often favor a response that appears first in the prompt. This can be fixed by randomizing order, or doing the grading twice with flipped order and ensuring consistency in the output grade.
(ii) Verbosity Bias: LLM's tend to prefer generations that are longer, even if a more concise answer. This can be improved by making it explicit to the judge to prefer concise responses, or having a second judge assess the conciseness and combine that with other score metrics.
(iii) Limited grading performance on reasoning and math: At the time of the paper, leading models often graded complex math answers incorrectly. This likely has improved with improved math performance via reasoning models such as OpenAI o3 and DeepSeek-R1, and the capability of verifiers will increase as general model capability improves.

### Visual Description
Text-only slide.

---

## Page 11
### Content

### Visual Description
Blank page.

---
