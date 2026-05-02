# gradescope-12-hw7-report-graded-copy

Source: `materials/archive/advanced-machine-learning-10-715-cmu/gradescope-graded-copies/gradescope-12-hw7-report-graded-copy.pdf`
Duplicate equivalents: `gradescope-12-hw7-report-graded-copy.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 12

## Page 1
### Content
# HW7 Report
**Graded**

**Student**
Saahith Janapati

**Total Points**
99.99 / 100 pts

**Question 1**
**1.2) Data Setup** **24.99 / 25 pts**
- **- 0 pts** Correct
- ** - 0.01 pts** After applying the forward process, distribution is expected to look like a **standard** normal distribution.
- **- 2 pts** Missing/Incorrect answer for "after applying the forward process, what are these distributions expected to look like?"
- **- 1 pt** Missing answer for "The device you used for training"
- **- 3 pts** Missing "7 versions"
- **- 3 pts** Missing frequency distribution plot

**Question 2**
**1.3) Forward Process** **30 / 30 pts**
- ** - 0 pts** Correct
- **- 10 pts** Missing forward process animation

**Question 3**
**1.4) Denoising** **45 / 45 pts**
- ** - 0 pts** Correct

### Visual Description
This is a grading report summary page for a homework assignment titled "HW7 Report". It displays the student's name, Saahith Janapati, and a total score of 99.99 out of 100 points. The page breaks down the points for three questions: "Data Setup", "Forward Process", and "Denoising", listing specific point deductions and feedback for the first question.

---
## Page 2
### Content
Question assigned to the following page: 1

1.2
**Device:** I used A100 on Google Colab to do training

**Show 7 versions of the first 3 pokemon;**
![Grid of 3 rows and 7 columns showing augmented images of Meowth, Torchic, and Shinx]

Before the transformations, the pokemon look like standard pokemons that you might see on cards. After the transformations, they appear different in contrast/saturation, and orientation.

The transformations sometimes flip the original image horizontally, and sometimes adjusts the contrast of the image such that the darkest pixels are mapped to pure black (0) and the lightest pixels are mapped to pure white (255).

**Visualize the frequency distribution of each RGB value in the image dataset (prior to augmentation)**

Color distribution of original images
![Line plot showing color distribution. The x-axis ranges from -1.0 to 1.0, and the y-axis is labeled 'Density'. There is a very sharp peak near 1.0.]

After the forward process, I would expect the distributions to look roughly Gaussian, since we add random noise to the image during this process.

### Visual Description
This page details the data setup for the assignment. It specifies the hardware used (A100 on Google Colab) and displays a grid of 21 images showing 7 augmented versions of three different Pokemon. Below the images, there is a text description of the transformations applied. At the bottom, there is a line graph titled "Color distribution of original images" showing a high density of pixel values near 1.0, followed by a prediction that the distribution will become Gaussian after the forward process.

---
## Page 3
### Content
Question assigned to the following page: 2

**Show the forward animation plot, using the create_forward_animation function**
![Sequence of 10 images showing a Meowth Pokemon gradually being obscured by increasing amounts of colorful noise until it is unrecognizable.]

**Visualize the frequency distribution of each RGB value in the image dataset**
Color distribution of images after forward pass
![Line plot showing a bell-shaped curve. The x-axis ranges from -3 to 4, and the y-axis is labeled 'Density'. The peak is centered around 0.5.]

### Visual Description
This page illustrates the forward diffusion process. It features a horizontal sequence of 10 images where a Pokemon (Meowth) is progressively transformed into random noise. Below this sequence is a line plot titled "Color distribution of images after forward pass," which shows a Gaussian-like distribution of pixel values, confirming the student's prediction from the previous page.

---
## Page 4
### Content
Question assigned to the following page: 3

# Training run 1 (default hyperparameters)

![Loss curve plot. The x-axis ranges from 0 to 500, and the y-axis ranges from 0.2 to 1.2. The curve shows a sharp initial drop followed by a gradual decline, leveling off around 0.1.]

Final Loss: 0.11403

<Figure size 640x480 with 0 Axes>
![Row of 11 images consisting of mostly random colorful noise.]
Loss in epoch 0 is: 1.1902275085449219

<Figure size 640x480 with 0 Axes>
![Row of 11 images showing slightly more structured but still very noisy patterns.]
Loss in epoch 50 is: 0.4644745960831642

### Visual Description
This page presents the results of the first training run using default hyperparameters. It includes a plot of the loss curve over 500 epochs. Below the plot, it shows the "Final Loss" value and two rows of generated images corresponding to epoch 0 and epoch 50, along with their respective loss values, demonstrating the beginning of the denoising process.

---
## Page 5
### Content
Question assigned to the following page: 3

<Figure size 640x480 with 0 Axes>
![Row of 11 images showing emerging shapes.]
Loss in epoch 100 is: 0.26854725182056427

<Figure size 640x480 with 0 Axes>
![Row of 11 images with more defined Pokemon-like shapes.]
Loss in epoch 150 is: 0.15626371651887894

<Figure size 640x480 with 0 Axes>
![Row of 11 images showing recognizable Pokemon silhouettes.]
Loss in epoch 200 is: 0.13465652987360954

<Figure size 640x480 with 0 Axes>
![Row of 11 images with clearer details.]
Loss in epoch 250 is: 0.12467915005981922

<Figure size 640x480 with 0 Axes>
![Row of 11 images.]
Loss in epoch 300 is: 0.12416196428239346

<Figure size 640x480 with 0 Axes>
![Row of 11 images.]
Loss in epoch 350 is: 0.11678532883524895

<Figure size 640x480 with 0 Axes>
![Row of 11 images.]
Loss in epoch 400 is: 0.11908682435750961

### Visual Description
This page continues the visualization of the first training run's progress. It displays seven rows of generated images, each corresponding to a specific epoch (from 100 to 400 in increments of 50). Each row is accompanied by its loss value. The images show a clear progression from noisy blobs to recognizable Pokemon-like figures.

---
## Page 6
### Content
Question assigned to the following page: 3

<Figure size 640x480 with 0 Axes>
![Row of 11 images.]
Loss in epoch 450 is: 0.1159787718206644

<Figure size 640x480 with 0 Axes>
![Row of 11 images.]
Loss in epoch 499 is: 0.11403445340692997

### Visual Description
This page shows the final two sets of generated images for the first training run at epoch 450 and the final epoch 499, along with their respective loss values. The images are now relatively stable and represent various Pokemon.

---
## Page 7
### Content
Question assigned to the following page: 3

# Training Run 2

![Loss curve plot for Training Run 2. The x-axis ranges from 0 to 1000, and the y-axis ranges from 0.0 to 0.8. The curve drops very quickly and stabilizes at a much lower level than the first run.]

**Final loss: 0.04211968556046486**

Changed
- EPOCHS = 1000
- and
- TIMESTEPS = 1000
- and
- BATCH_SIZE = 512

I wanted to let the model train for longer (so I increased EPOCHS) and make it easier for the model to learn transitions between timesteps effectively (so I increased TIMESTEPS). I also increased BATCH_SIZE for more stable updates (and faster training time).

These changes led to achieving a loss less than half the final loss of the previous training run with default hyperparameters.

I believe increasing the TIMESTEPS leads to the most noticeable improvement out of the three, since the loss at each epoch for this run was lower than the loss at the same epoch for the previous run with default hyperparameters. In my experimentation, I found that increasing the timesteps leads to faster loss decrease in the initial stages of training.

### Visual Description
This page introduces "Training Run 2," where hyperparameters were modified. It features a loss curve plot showing a more significant decrease in loss over 1000 epochs compared to the first run. The text highlights the specific changes made (increased epochs, timesteps, and batch size) and provides a qualitative analysis of why these changes improved the model's performance, specifically noting the impact of increased timesteps.

---
## Page 8
### Content
Question assigned to the following page: 3

**Generations for Training Run 2**

<Figure size 640x480 with 0 Axes>
![Row of 11 images.]
Loss in epoch 0 is: 0.6377446353435516

<Figure size 640x480 with 0 Axes>
![Row of 11 images.]
Loss in epoch 50 is: 0.1866861656308174

<Figure size 640x480 with 0 Axes>
![Row of 11 images.]
Loss in epoch 100 is: 0.1688249409198761

<Figure size 640x480 with 0 Axes>
![Row of 11 images.]
Loss in epoch 150 is: 0.14067654311656952

<Figure size 640x480 with 0 Axes>
![Row of 11 images.]
Loss in epoch 200 is: 0.11465603858232498

<Figure size 640x480 with 0 Axes>
![Row of 11 images.]
Loss in epoch 250 is: 0.09261519461870193

### Visual Description
This page displays the generation results for the early stages of Training Run 2. It shows six rows of images from epoch 0 to epoch 250. Compared to the first run, the images at similar epoch markers appear to have more defined structure and lower loss values, visually supporting the claim that the hyperparameter changes improved training efficiency.
## Page 9
### Content
Question assigned to the following page: 3

`<Figure size 640x480 with 0 Axes>`
Loss in epoch 300 is: 0.07804983109235764

`<Figure size 640x480 with 0 Axes>`
Loss in epoch 350 is: 0.07035601511597633

`<Figure size 640x480 with 0 Axes>`
Loss in epoch 400 is: 0.06313821487128735

`<Figure size 640x480 with 0 Axes>`
Loss in epoch 450 is: 0.051870767027139664

`<Figure size 640x480 with 0 Axes>`
Loss in epoch 500 is: 0.050805386155843735

`<Figure size 640x480 with 0 Axes>`
Loss in epoch 550 is: 0.049022311344742775

### Visual Description
Six horizontal rows of images. Each row contains a sequence of 11 small, colorful, pixelated square images that appear to show a diffusion process, transitioning from a recognizable shape on the left to random noise on the right. Below each row is a text label indicating the epoch number and the corresponding loss value.

---
## Page 10
### Content
Question assigned to the following page: 3

`<Figure size 640x480 with 0 Axes>`
Loss in epoch 600 is: 0.055191054940223694

`<Figure size 640x480 with 0 Axes>`
Loss in epoch 650 is: 0.049336330965161324

`<Figure size 640x480 with 0 Axes>`
Loss in epoch 700 is: 0.05025392584502697

`<Figure size 640x480 with 0 Axes>`
Loss in epoch 750 is: 0.04395034722983837

`<Figure size 640x480 with 0 Axes>`
Loss in epoch 800 is: 0.042637698352336884

`<Figure size 640x480 with 0 Axes>`
Loss in epoch 850 is: 0.044704362750053406

### Visual Description
Six horizontal rows of images, continuing the sequence from the previous page for epochs 600 through 850. Each row contains 11 small images depicting a denoising or diffusion process, with corresponding epoch and loss information provided below each row.

---
## Page 11
### Content
Question assigned to the following page: 3

`<Figure size 640x480 with 0 Axes>`
Loss in epoch 900 is: 0.04262501560151577

`<Figure size 640x480 with 0 Axes>`
Loss in epoch 950 is: 0.04777305945754051

`<Figure size 640x480 with 0 Axes>`
Loss in epoch 999 is: 0.04211968556046486

### Visual Description
Three horizontal rows of images, showing the final stages of the training process for epochs 900, 950, and 999. Each row contains 11 small images illustrating the diffusion/denoising steps, along with the epoch number and loss value.

---
## Page 12
### Content

### Visual Description
Blank page.

---
