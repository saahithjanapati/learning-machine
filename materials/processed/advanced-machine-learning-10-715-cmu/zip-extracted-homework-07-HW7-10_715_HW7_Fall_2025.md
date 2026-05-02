# zip-extracted-homework-07-HW7-10_715_HW7_Fall_2025

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/zip-extracted-homework-07-HW7-10_715_HW7_Fall_2025.pdf`
Duplicate equivalents: `zip-extracted-homework-07-HW7-10_715_HW7_Fall_2025.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 3

## Page 1
### Content
# CMU 10-715: Homework 7
## Diffusion Models
**Released: Nov. 22, 2025.**
**Due: Dec. 7, 2025, 11:59 PM.**

### Instructions:

*   **Collaboration policy:** Collaboration on solving the homework is allowed, after you have thought about the problems on your own. It is also OK to get clarification (but not solutions) from books, again after you have thought about the problems on your own. Please don’t search for answers on the web, previous years’ homeworks, etc. (please ask the TAs if you are not sure if you can use a particular reference). There are two requirements: first, cite your collaborators fully and completely (e.g., “Alice explained to me what is asked in Question 4.3”). Second, write your solution *independently*: close the book and all of your notes, and send collaborators out of the room, so that the solution comes from you only.
*   **Submitting your work:** On Gradescope:
    *   Submit your completed Jupyter Notebook file, `pokemon_diffusion.ipynb`, to the assignment titled “HW7 Code”.
    *   Submit your PDF report file, named `[your andrew id].pdf`, to the assignment titled “HW7 Report”. Upon submission, please follow Gradescope instructions to match the question numbers with the page numbers of your report.
    There is no limit on the number of submissions to Gradescope.
*   **Gradescope access:** The link to this course is [https://www.gradescope.com/courses/819351](https://www.gradescope.com/courses/819351).
*   **Auto-grader:** This homework does not have an Auto-grader. The grading will focus mainly on the report, with the code reviewed only if needed.
*   **Late days:** For each homework you get three late days to be used only when anything urgent comes up. No points will be deducted for using these late days. We will consider an honor system where we will rely on you to use the late days appropriately.
*   **Grading:** Please be aware that the quality of the images you generate will not affect your grade. The primary goal of this assignment is to enhance your understanding of Diffusion Models. Given the computational constraints, achieving high-quality image generation may be challenging.
*   **Google Colab:** We suggest using Google Colab for this assignment. Be aware that the free version of Google Colab has a daily limit on computational resources, so it is advisable to begin your work early. If you are new to Google Colab, consider exploring this straightforward tutorial: [https://www.dataquest.io/blog/getting-started-with-google-colab-for-deep-learning/](https://www.dataquest.io/blog/getting-started-with-google-colab-for-deep-learning/). It offers guidance on uploading files and setting your runtime to GPU.

1

### Visual Description
Text-only slide.

---

## Page 2
### Content
# 1 Pokemon Diffusion [100 points]

Diffusion Models are a class of generative models that have seen increasing popularity in recent years. Diffusion Models are generative models, meaning that they are used to generate data similar to the data on which they are trained. Their core mechanism involves gradually corrupting the original data by adding Gaussian noise over multiple steps. The model is then trained to reverse this noising process, learning how to reconstruct the data. Once trained, the Diffusion Model can generate new samples by feeding randomly generated noise through the learned denoising process.

In this assignment, you are required to implement a complete diffusion model using the Pokémon dataset. This homework is adapted from pokemon_diffusion by Gerrit, and it is not permitted to consult online solutions.

Below is an overview of the provided files:

*   `pokemon_diffusion.ipynb`: This is the primary script for execution. It includes all necessary utility functions and is intended to run seamlessly on Google Colab.
*   `pokemon.zip`: This archive contains Pokémon images to be used for training the diffusion models. We use the dataset from pokemon-gan by Zhenye Na.

The assignment is intentionally kept small-scale to ensure it can be completed using a free Google Colab account. However, you are welcome to use your own machine if preferred.

### 1.1 Readings [0 points]

For an introduction to Diffusion Models, refer to Lilian’s Blog at [https://lilianweng.github.io/posts/2021-07-11-diffusion-models/](https://lilianweng.github.io/posts/2021-07-11-diffusion-models/). Additionally, it is recommended to review the DDPM paper, available at [https://arxiv.org/pdf/2006.11239](https://arxiv.org/pdf/2006.11239).

### 1.2 Data Setup [25 points]

First, familiarize yourself with the provided codebase and inspect the data provided. Report the following.

*   (5 points) The device you used for training;
*   (5 points) Implement `__getitem__` and `__len__` methods in `ImageDataset` class.
*   (5 points) Implement data augmentations in `ImageDataset` class (add `RandomHorizontalFlip` with $p = 0.5$ and `RandomAutocontrast` with $p = 0.1$);
*   (5 points) Show 7 versions of the first 3 Pokémon: What do Pokémon look like before and after data augmentations?
*   (5 points) Visualize the frequency distribution of each RGB value in the image dataset (prior to augmentation). After applying the forward process, what are these distributions expected to look like?

### 1.3 Forward Process [30 points]

In this section, we will implement the "Forward Process." Detailed instructions can be found in the accompanying ipython notebook file.

*   (10 points) Implement one step forward function: $X_t = \sqrt{\alpha_t}X_{t-1} + \sqrt{1 - \alpha_t}\epsilon_{t-1}$
*   (10 points) Show the forward animation plot, by using `create_forward_animation` function provided.
*   (10 points) Visualize the frequency distribution of each RGB value in the image dataset after applying the forward process.

2

### Visual Description
Text-only slide.

---

## Page 3
### Content
### 1.4 Denoising [45 points]

In this section, we will implement the "Denoising." Detailed instructions can be found in the accompanying ipython notebook file.

*   (10 points) Implement `denoise_one_step` function, using the "Sampling Algorithm" provided below. Note that this is the sampling algorithm in DDPM ([https://arxiv.org/pdf/2006.11239](https://arxiv.org/pdf/2006.11239)). In this section, we use
    $$\sigma_t^2 = \frac{1 - \bar{\alpha}_{t-1}}{1 - \bar{\alpha}_t} \beta_t$$
    , as outlined in Section 3.2 of the DDPM paper.

---
**Algorithm 2 Sampling**
1: $\mathbf{x}_T \sim \mathcal{N}(\mathbf{0}, \mathbf{I})$
2: **for** $t = T, \dots, 1$ **do**
3: $\quad \mathbf{z} \sim \mathcal{N}(\mathbf{0}, \mathbf{I})$ **if** $t > 1$, **else** $\mathbf{z} = \mathbf{0}$
4: $\quad \mathbf{x}_{t-1} = \frac{1}{\sqrt{\alpha_t}} \left( \mathbf{x}_t - \frac{1-\alpha_t}{\sqrt{1-\bar{\alpha}_t}} \epsilon_\theta(\mathbf{x}_t, t) \right) + \sigma_t \mathbf{z}$
5: **end for**
6: **return** $\mathbf{x}_0$
---
Figure 1: Sampling Algorithm

*   (10 points) Implement `train_epoch` function, using the "Training Algorithm" provided below. Note that this is the training algorithm in DDPM ([https://arxiv.org/pdf/2006.11239](https://arxiv.org/pdf/2006.11239)).

---
**Algorithm 1 Training**
1: **repeat**
2: $\quad \mathbf{x}_0 \sim q(\mathbf{x}_0)$
3: $\quad t \sim \text{Uniform}(\{1, \dots, T\})$
4: $\quad \epsilon \sim \mathcal{N}(\mathbf{0}, \mathbf{I})$
5: $\quad$ Take gradient descent step on
$\quad \quad \nabla_\theta \| \epsilon - \epsilon_\theta(\sqrt{\bar{\alpha}_t}\mathbf{x}_0 + \sqrt{1 - \bar{\alpha}_t}\epsilon, t) \|^2$
6: **until converged**
---
Figure 2: Training Algorithm

*   (20 points) Plot the loss curve with respect to epochs. Additionally, display the generated images every 50 epochs using the provided `generate_example` function.
*   (5 points) Adjust some hyperparameters and compare the loss and the quality of generated images with those obtained using the default hyperparameters. Identify which changes lead to the most noticeable improvement.

3

### Visual Description
This page contains text instructions and two boxed algorithm descriptions. Figure 1 shows "Algorithm 2 Sampling" with 6 steps involving Gaussian noise and a denoising step. Figure 2 shows "Algorithm 1 Training" with 6 steps involving sampling data, time steps, and noise, followed by a gradient descent step on a mean squared error loss.
