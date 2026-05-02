# zip-extracted-homework-03-HW3-HW3

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/zip-extracted-homework-03-HW3-HW3.pdf`
Duplicate equivalents: `zip-extracted-homework-03-HW3-HW3.pdf`, `zip-extracted-homework-03-HW3-._HW3.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 4

## Page 1
### Content
CMU 10-715: Homework 3
Neural Networks
Released: Sep. 26, 2025.
Due: Oct. 10, 2025, 11:59 PM.

**Instructions:**

* **Collaboration policy:** Collaboration on solving the homework is allowed, after you have thought about the problems on your own. It is also OK to get clarification (but not solutions) from books, again after you have thought about the problems on your own. Please don’t search for answers on the web, previous years’ homeworks, etc. (please ask the TAs if you are not sure if you can use a particular reference). There are two requirements: first, cite your collaborators fully and completely (e.g., “Alice explained to me what is asked in Question 4.3”). Second, write your solution *independently*: close the book and all of your notes, and send collaborators out of the room, so that the solution comes from you only.
* **Submitting your work:** On Gradescope:
    * Submit your completed python file, `q1_mnist.py` and `q2_cifar10.py`, to the assignment titled “HW3 Code”.
    * Submit your PDF report file, named `[your andrew id].pdf`, to the assignment titled “HW3 Report”. Upon submission, please follow Gradescope instructions to match the question numbers with the page numbers of your report.
    There is no limit on the number of submissions to Gradescope.
* **Gradescope access:** The link to this course is https://www.gradescope.com/courses/1082583.
* **Auto-grader:** Your code will be evaluated with the Gradescope auto-grader and you only need to submit `q1_mnist.py` and `q2_cifar10.py` for the python file. We encourage you to start early and use the auto-grader to check that your implementation is correct.
* **Late days:** For each homework you get three late days to be used only when anything urgent comes up. No points will be deducted for using these late days. We will consider an honor system where we will rely on you to use the late days appropriately.
* **Training NNs:** You will be using Google Colab $^1$, a free GPU service provided by Google to train these models with GPUs. Copy over the scripts provided for the questions to a Colab notebook, and under the Runtime tab, select “Change runtime type” and choose GPU.

---
$^1$https://colab.research.google.com/notebooks/intro.ipynb

### Visual Description
Text-only slide.

---

## Page 2
### Content
### 1 Implementing a simple Neural Network with PyTorch [50 points]

In this homework you are going to gain familiarity with **PyTorch** which is one of the most popular, open source deep learning frameworks. Its simple modules help users implement complex models in a pythonic and terse fashion. In this question, we will be building a simple classifier for the MNIST dataset (details can be found here). It is a dataset containing fixed size images of handwritten digits (0-9) along with the respective labels; with 60k and 10k pairs respectively in the training and test sets. Please use the `q1_mnist.py` file for the skeleton code and fill out the respective parts.

1. (5 points) We must first convert the PIL images of the dataset to tensors, and then normalise them before using them for training/evaluation. The pixel values of the MNIST images are set in the $[0, 1]$ range, and for the purposes of this exercise, we want to normalise these values by subtracting the mean $(0.5)$ and then dividing by the standard deviation $(0.5)$.
**TODO:** Fill out the transform used to create the train/test datasets, and in your report, explain the use of normalisation when training models.

2. (10 points) Our classifier “WarmupNN” will be a simple feed forward neural network with 2 hidden layers of output dimension 256, 128 respectively and ReLU activation.
**TODO:** From the dataset, deduce the input and output dimensions of this NN, and fill out the init and forward methods of the WarmupNN.

3. (25 points) Now it’s time to train our classifier! We will follow a typical training flow for our NN:
    * Define the function for the loss metric (so as to quantify how poorly/well the model does during different steps). We will use the Cross Entropy loss. Implement the function using PyTorch operations and without using `nn.CrossEntropyLoss()`.
    * Define an optimizer. At a high level, an optimizer’s role is to adjust the parameters of a model (weights in the case of a NN) so as to achieve a goal; in this case, to decrease the training loss. We will use the simple Stochastic Gradient Descent (SGD) optimizer.
    * Initialise the model by passing any relevant parameters (none at the moment).
    * For a certain number of epochs, we perform the following sequence of steps:
        * Iterate through the training dataset in batches.
        * For each batch, pass the X (i.e. data) through the NN and calculate the loss between the predictions and the Y (i.e. the labels).
        * Perform back-propagation of the loss so as to calculate the gradient of the loss w.r.t. the individual weights.
        * Take a step with the optimizer so as to adjust the weights in accordance with their gradient.
    * Practitioners are often interested in certain quantities while training their models. We will thus maintain the trajectories of two such measures for both the training and test datasets: “average batch loss” and “accuracy”.
    **Note:** To avoid duplicated iteration of the training dataset, calculate the average batch loss and accuracy for the training dataset while iterating through the batches, and for the test dataset, calculate these at the end of a training epoch.
**TODO:** Implement all these aspects of the training loop by following the provided comments.

4. (10 points) Now let’s train our model with 3 separate learning rates: $4 \times 10^{-3}$, $4 \times 10^{-2}$, and $4 \times 10^{-1}$, keeping the number of epochs as 10.
**TODO:** Create 4 plots in your report, 2 showing the training data accuracy and loss (metric on y-axis and # of epochs on the x-axis, 3 curves total corresponding to the 3 learning rates), and 2 for the test data. Briefly explain your observations in the report.

### Visual Description
Text-only slide.

---

## Page 3
### Content
### 2 Implementing a Dropout CNN [50 points]

In this question, we will study dropout, a regularisation technique for NNs, and hopefully we’ll be able to observe the results of the original dropout paper $^2$.

As you already learned in class, deep neural networks are extremely expressive models which can learn complicated relations. They are also therefore prone to overfit, that is, fit to the noise rather than the true separator. Dropout regularization is one of the most popular techniques to prevent deep neural networks to overfit, improving their performance on unseen test data.

The main idea of the dropout is to randomly drop neurons and their connections from the neural network during training. This prevents units from *co-adapting* too much. During training, dropout samples from an exponential number of different “thinned” networks.

![Diagram showing a standard neural network vs one with dropout applied.](image_placeholder)
(a) Standard Neural Net (b) After applying dropout.

In this question, we will be building a CNN based classifier for the CIFAR10 dataset (details can be found here). It is a dataset containing fixed size images of 10 classes [‘airplanes’, ‘cars’, ‘birds’, ‘cats’, ‘deer’, ‘dogs’, ‘frogs’, ‘horses’, ‘ships’, and ‘trucks’] along with the respective labels; with 50k and 10k pairs respectively in the training and test sets. Please use the `q2_cifar10.py` file for the skeleton code and fill out the respective parts.

1. (0 points) Each image in the CIFAR10 dataset is sized $(3 \times 32 \times 32)$, where 3 represents the RGB channels.
**TODO:** Implement a similar data transform for the CIFAR10 dataset as we did in the last question (using the *per-channel* mean and standard deviation as 0.5).

2. (15 points) Our “CNNModel” should have the following architecture:
    * 3 convolutional layers with output channel dimension as 64, 128, and 128 respectively. Each should have kernel size = 3 and padding = 1, followed by ReLU activation and a Max Pooling layer with kernel size = 2 and stride = 2.
    * 1 hidden layer on top of the convolutional layers with output dimension as 512, followed by ReLU activation and Dropout regularization (with dropout rate passed by the user during model initialization).
    * An output layer with the appropriate output dimension.
**TODO:** Fill in the init and forward methods of CNNModel as per the above specification.

3. (10 points) We will implement our own Dropout module. Read the Dropout paper to understand how the nature of Dropout differs between training and test time.
**TODO:** Complete the Dropout module by implementing dropout regularization using PyTorch functions and without using `nn.Dropout()`.

---
$^2$Srivastava, N., Hinton, G., Krizhevsky, A., Sutskever, I., & Salakhutdinov, R. (2014). Dropout: a simple way to prevent neural networks from overfitting. The journal of machine learning research, 15(1), 1929-1958. Available at https://www.cs.toronto.edu/~hinton/absps/JMLRdropout.pdf

### Visual Description
The page contains two diagrams illustrating the concept of dropout in neural networks. 
- Diagram (a) "Standard Neural Net" shows a fully connected neural network with an input layer, two hidden layers, and an output layer. All neurons in adjacent layers are connected by lines representing weights.
- Diagram (b) "After applying dropout" shows the same network structure, but several neurons and their associated connections have been "dropped" (indicated by an 'X' over the neuron and missing connection lines), resulting in a "thinned" network.

---

## Page 4
### Content
Explain how the nature of Dropout differs between training and test time, and include a mathematical justification for the same.

4. (5 points) For the training, let’s use Cross Entropy Loss and the SGD optimizer with learning rate 0.01 and momentum 0.9.
**TODO:** Just like in question 1, fill out the training loop and other helper methods so as to keep track of the average loss and accuracy for the training and test datasets while training. You can directly use `nn.CrossEntropyLoss()` in this question.

5. (10 points) We will first consider another regularization method, the $l_2$ regularization. Let’s train our model with 3 separate $\lambda$s: $10^{-2}$, $10^{-3}$, and $10^{-4}$, while keeping dropout rate as 0 and the number of epochs as 20.
**TODO:** Create 4 plots in your report, 2 showing the training accuracy and loss (metric on y-axis and # of epochs on the x-axis, 3 curves total corresponding to the 3 $\lambda$ values), and 2 for the test data. Briefly explain your observations.

6. (10 points) Now let’s train our model with 4 separate dropout rates: 0, 0.2, 0.5, and 0.8 while keeping the number of epochs as 20. Set $\lambda = 0$ here.
**TODO:** Create 4 plots in your report, 2 showing the training data accuracy and loss (metric on y-axis and # of epochs on the x-axis, 4 curves total corresponding to the 4 dropout rates), and 2 for the test data. Briefly explain your observations.

### Visual Description
Text-only slide.
