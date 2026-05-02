# zip-extracted-homework-04-HW4-715_HW4

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/zip-extracted-homework-04-HW4-715_HW4.pdf`
Duplicate equivalents: `zip-extracted-homework-04-HW4-715_HW4.pdf`, `zip-extracted-homework-04-HW4-._715_HW4.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 4

## Page 1
### Content
# CMU 10-715: Homework 4
## Convolutional Neural Networks
**Released:** Oct. 20, 2025.
**Due:** Oct. 31, 2025, 11:59 PM.

### Instructions:
* **Collaboration policy:** Collaboration on solving the homework is allowed, after you have thought about the problems on your own. It is also OK to get clarification (but not solutions) from books, again after you have thought about the problems on your own. Please don't search for answers on the web, previous years' homeworks, etc. (please ask the TAs if you are not sure if you can use a particular reference). There are two requirements: first, cite your collaborators fully and completely (e.g., "Alice explained to me what is asked in Question 4.3"). Second, write your solution *independently*: close the book and all of your notes, and send collaborators out of the room, so that the solution comes from you only.

* **Submitting your work:** On Gradescope:
    - Submit your completed python file, `q1_resnet.py`, to the assignment titled "HW4 Code".
    - Submit your PDF report file, named `[your andrew id].pdf`, to the assignment titled "HW4 Report". Upon submission, please follow Gradescope instructions to match the question numbers with the page numbers of your report.
    There is no limit on the number of submissions to Gradescope.

* **Gradescope access:** The link to this course is `https://www.gradescope.com/courses/819351`.

* **Auto-grader:** Your code will be evaluated with the Gradescope auto-grader and you only need to submit `q1_resnet.py` for the python file. We encourage you to start early and use the auto-grader to check that your implementation is correct.

* **Late days:** For each homework you get three late days to be used only when anything urgent comes up. No points will be deducted for using these late days. We will consider an honor system where we will rely on you to use the late days appropriately.

* **Training NNs:** You will be using Google Colab$^1$, a free GPU service provided by Google to train these models with GPUs. Copy over the scripts provided for the questions to a Colab notebook, and under the Runtime tab, select "Change runtime type" and choose GPU.

---
$^1$https://colab.research.google.com/notebooks/intro.ipynb

1

### Visual Description
Text-only slide.

---

## Page 2
### Content
# 1 Implementing ResNets with PyTorch [100 points]

In this homework, we will implement and train ResNets, a seminal model for image classification, using PyTorch. Please use the `q1_resnet.py` file for the skeleton code and fill out the respective parts.

a. (10 points) First, we will try building some intuition to the advantages of ResNets. One of their key components is the addition of "Residual/Skip Connections". Explain the problem of vanishing gradients in the context of training deep neural networks, and how such connections alleviate the issue.

b. (30 points) In the last homework, we briefly touched upon Convolutional Neural Networks (CNNs). Our ResNet model will also use convolutions, so we will next cover some background on convolutions:
    (a) Explain "kernels" and "convolutions". Give an example, and further explain why they're useful in tasks such as image classification.
    (b) Given a kernel of size $K \times K$ and an image of size $W \times W$, what would the output size when the kernel is applied to the image with padding $P$ and stride $S$?
    (c) Consider the kernels given below:
    $$K_1 = \begin{bmatrix} 1 & 0 & -1 \\ 2 & 0 & -2 \\ 1 & 0 & -1 \end{bmatrix} \quad K_2 = \begin{bmatrix} 1 & 2 & 1 \\ 0 & 0 & 0 \\ -1 & -2 & -1 \end{bmatrix}$$
    Apply the kernels $K_1$ and $K_2$ over two images from the CIFAR-10 dataset, and present your results for both images alongside the originals. You may select any two images from the dataset, and the code for loading the CIFAR-10 dataset can be found in the last homework. Describe the patterns or effects that you observe in the outputs after applying the kernels. What could these kernels be potentially used for?

c. (20 points) Besides implementing the ResNet model, we will also experiment with a technique commonly used while training neural networks: **Momentum**
    (a) Visit the PyTorch documentation$^2$ of the SGD optimisation algorithm, and write the formula of the weight update with Nesterov momentum.
    (b) Now consider the SGD optimisation (minimisation) of the function $y = \frac{x^2}{2}$. Specifically, consider $x_0 = 5, \eta = 0.01, N = 100, \text{momentum} = 0.9$, where $x_0, \eta, N$ represent the starting $x$, learning rate, and number of steps respectively. Using the programming language of your choice, plot the values of $x$ taken over the course of SGD optimisation with and without momentum. Overlay these trajectories over the actual function. Write down your observations.
    (c) Consider a non-convex function, let's say $y = x^3$, that we'd like to minimise it over the range $[-1, +1]$. Explain a potential issue with using vanilla SGD, and whether momentum could help.

d. (40 points) Now we will begin our implementation of a ResNet model.
    (a) The fundamental residual learning block of our ResNet model will be implemented in the "ResNetBlock" class which should look as follows:

---
$^2$https://pytorch.org/docs/stable/generated/torch.optim.SGD.html

2

### Visual Description
The page contains text and two mathematical matrices representing convolution kernels $K_1$ and $K_2$. $K_1$ is a $3 \times 3$ matrix with values $[1, 0, -1; 2, 0, -2; 1, 0, -1]$. $K_2$ is a $3 \times 3$ matrix with values $[1, 2, 1; 0, 0, 0; -1, -2, -1]$.

---

## Page 3
### Content
![ResNet Block Diagram](resnet_block.png)
**x**

1. Fill in the code for the "ResNetBlock" class which accepts the following for initialisation:
    i. `in_channels`: number of input channels
    ii. `out_channels`: number of output channels
    iii. `stride`: the stride value to be used for the convolutions
    iv. `downsample`: this is a transform that will map the input $x$ to a value that can be added to the output of the convolution; because as you might've noticed, the dimensions of $F(x)$ and $x$ can be different, where $F$ represents the layers in the dotted box.

(b) Using the above "ResNetBlock", we will make the composite "ResNet", specifically ResNet18, which should look like the following:
![ResNet18 Architecture Diagram](resnet18_arch.png)

We can look at each of the blocks individually:
    i. Layer A: A simple convolution [`in_channels` = 3, `out_channels` = 64, kernel size = 7, stride = 2, padding = 3, bias = False] followed by BatchNorm, ReLU, and MaxPool [kernel size = 3, stride = 2, padding = 1]
![Block A Diagram](block_a.png)

3

### Visual Description
The page contains three diagrams:
1. A flowchart of a Residual Block: Input $x$ splits into two paths. One path goes through a dotted box containing "3 x 3 Conv" -> "Batch norm" -> "ReLU" -> "3 x 3 Conv" -> "Batch norm". The other path is a skip connection that adds $x$ to the output of the dotted box. The combined result then passes through a "ReLU" layer.
2. A high-level architecture diagram of ResNet18 showing a sequence of blocks: Input -> Block A -> Block B -> Block C -> Block D -> Block E -> Pool -> FC.
3. A detailed view of "Block A": Input -> "7x7 Conv, 64 / 2" -> "Pool".

---

## Page 4
### Content
    ii. Layer B: (just like layers C, D, E) consists of multiple "ResNetBlock" blocks. The number of such blocks in each of these 4 layers is what differentiates the ResNet architectures (see table 1 of the paper). For example, in ResNet18 (the one we will consider in this homework), layer B has 2 "ResNetBlock" blocks with `in_channels` = 64 and `out_channels` = 64. This is followed by layer C which has 2 "ResNetBlock", the first with `in_channels` = 64 and `out_channels` = 128. See the next page for the details for each of these layers.
    **Note:** Depending on the layer configuration, the first block may need a downsample, which is a simple convolution from the `in_channels` to `out_channels` (kernel size = 1, stride = given stride), followed by an apt BatchNorm.
![Blocks B, C, D, E Diagram](blocks_bcde.png)

    iii. The last layer is an average pool followed by Fully-Connected layer (FC)
![Pool and FC Diagram](pool_fc.png)

For the implementation, follow along the comments in the starter code and complete the respective TODOs, including the training loop.

(c) In addition to the accuracy and loss metrics used by us in the previous homeworks, we will explore three additional metrics for performance: Precision, Recall and F1 Score. Implement these metrics by completing the respective TODOs. Briefly explain the intuition behind each metric and provide the formulas to calculate them.

(d) We will consider two settings of the optimizer: without momentum, and with momentum = 0.9. Create 4 plots in your report, 2 showing the training data accuracy and loss (metric on y-axis and #epochs on the x-axis, 2 curves total corresponding to the 2 optimizer settings), and 2 for the test data. Report the final accuracy, Precision, Recall and F1 Score metrics for both the settings. Briefly explain your observations in the report.

4

### Visual Description
The page contains two diagrams:
1. A diagram showing Blocks B, C, D, and E. Each block contains multiple sub-blocks (e.g., Block B has two "3x3 Conv, 64" units, Block C has "3x3 Conv, 128 / 2" and "3x3 Conv, 128" units, etc.).
2. A diagram of the final layers: "Pool" -> "FC".
The rest of the page is text describing the implementation details and required metrics/plots.

---
