# lecture-notes-15-NeuralNetworks

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/lecture-notes-15-NeuralNetworks.pdf`
Duplicate equivalents: `lecture-notes-15-NeuralNetworks.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 36

## Page 1
### Content
10-715 Fall 2025: 
Neural Networks

Nihar B. Shah

ML Machine Learning Department | Carnegie Mellon University School of Computer Science

### Visual Description
Title slide with the course number, title, instructor name, and institutional logos for the Machine Learning Department and Carnegie Mellon University School of Computer Science.

---

## Page 2
### Content
Eight key ideas in deep learning success
* Very large models can work well (nonparametric statistics)
* Use huge (sometimes simulated) data sets, and distributed compute
* Use automatic differentiation (and software to do it)
* Staying close to identity helps make models deep (ReLU, ResNets...)
* Stochastic optimization works surprisingly well (SGD and adaptive variants)
* Better initialization matters
* Parameter tying / symmetry (convolution, recurrent nets, graph NNs)
* Internal representations are reusable (multi-task, few-shot learning)

Zoubin Ghahramani, MLD 25th anniversary celebration

### Visual Description
Text-only slide listing eight bullet points summarizing key factors in the success of deep learning. A footer attributes the content to Zoubin Ghahramani.

---

## Page 3
### Content
Limitations of deep learning
* Very **data hungry** (millions to billions of examples)
* Very **compute-intensive** to train and deploy (datacenters of GPU/TPUs)
* Easily **fooled** by adversarial examples; unintuitive extrapolation
* **Finicky to optimize** (non-convex, learning rate schedules, instabilities, architecture choices...)
* **Uninterpretable black-boxes**, lacking in transparency, difficult to trust
* Non-trivial to incorporate **prior knowledge** and **symbolic representations**
* Poor at representing **uncertainty**

Zoubin Ghahramani, MLD 25th anniversary celebration

### Visual Description
Text-only slide listing seven bullet points describing the limitations of deep learning, with key terms in bold. A footer attributes the content to Zoubin Ghahramani.

---

## Page 4
### Content
Image data:
Convolutional Neural Networks 
(CNNs)

FAKE NEWS

### Visual Description
The slide contains text introducing Convolutional Neural Networks (CNNs) for image data. Below the text is a popular meme image of Donald Trump pointing, with the caption "FAKE NEWS" in bold white impact font.

---

## Page 5
### Content
* Recall Photoshop “filters”
* At least until a few years back, they used

CONVOLUTION

?

https://helpx.adobe.com/photoshop/using/blur-gallery.html

### Visual Description
The slide features two bullet points about Photoshop filters and their historical use of convolution. To the right is a comparison image showing a man playing a guitar; the left version is clear, while the right version has a radial blur filter applied. A large question mark is centered below the text.

---

## Page 6
### Content
Convolution

Input Grid:
$$
\begin{matrix}
.5 & .1 & .1 & .1 & .2 & .3 \\
.5 & .1 & .1 & .1 & .2 & .3 \\
.6 & .1 & .1 & .1 & .2 & .9 \\
.6 & .7 & .1 & .1 & .6 & .9 \\
.6 & .7 & .1 & .1 & .6 & .9 \\
.6 & .7 & .9 & .8 & .6 & .9 \\
.2 & .7 & .4 & .8 & .6 & .7 \\
.3 & .7 & .6 & .8 & .6 & .5
\end{matrix}
$$

Kernel:
$$
\begin{matrix}
.25 & .25 \\
.25 & .25
\end{matrix}
$$

Calculation:
$.5 \cdot .25 + .1 \cdot .25 + .5 \cdot .25 + .1 \cdot .25 = .3$

Output Grid:
The first cell (top-left) is filled with $.3$.

### Visual Description
A diagram illustrating the convolution operation. On the left is a blurry grayscale image of a face. In the center is an $8 \times 6$ grid of numerical values representing the image. A $2 \times 2$ red kernel with values $.25$ is overlaid on the top-left corner of the grid. An arrow points to the calculation showing how the values are multiplied and summed. On the right is a pink output grid where the result $.3$ is placed in the corresponding top-left cell.

---

## Page 7
### Content
Convolution

Input Grid:
The $2 \times 2$ kernel (values $.25$) has shifted one column to the right, covering the values:
$$
\begin{matrix}
.1 & .1 \\
.1 & .1
\end{matrix}
$$

Output Grid:
The first row now contains $.3$ and $.1$.

### Visual Description
This slide continues the convolution example from the previous page. The red $2 \times 2$ kernel has moved one position to the right on the input grid. The output grid on the right now shows two values in the first row: $.3$ and $.1$.

---

## Page 8
### Content
Convolution

Input Grid:
The $2 \times 2$ kernel (values $.25$) has shifted another column to the right, covering the values:
$$
\begin{matrix}
.1 & .1 \\
.1 & .1
\end{matrix}
$$

Output Grid:
The first row now contains $.3$, $.1$, and $.1$.

### Visual Description
The convolution example continues. The red $2 \times 2$ kernel has moved another position to the right on the input grid. The output grid on the right now shows three values in the first row: $.3$, $.1$, and $.1$.
## Page 9
### Content
# Convolution

**Input Image Grid:**
| | | | | | |
|---|---|---|---|---|---|
| .5 | .1 | .1 | .1 | .2 | .3 |
| .5 | .1 | .1 | .1 | .2 | .3 |
| .6 | .1 | .1 | .1 | .2 | .9 |
| .6 | .7 | .1 | .1 | .6 | .9 |
| .6 | .7 | .1 | .1 | .6 | .9 |
| .6 | .7 | .9 | .8 | .6 | .9 |
| .2 | .7 | .4 | .8 | .6 | .7 |
| .3 | .7 | .6 | .8 | .6 | .5 |

**Filter (Kernel):**
| .25 | .25 |
| .25 | .25 |

**Output Grid (Partial):**
| .3 | .1 | .1 | .15 | | |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

### Visual Description
An image of a face is shown on the left. In the center is an 8x6 grid of numerical values representing the image. A 2x2 red square highlights a portion of the grid (top row, columns 4 and 5). On the right is a pink grid representing the output, with the first four values of the first row filled: .3, .1, .1, and .15. The value .15 is the result of applying the 2x2 average filter to the highlighted region.

---

## Page 10
### Content
# Convolution

**Input Image Grid:**
| | | | | | |
|---|---|---|---|---|---|
| .5 | .1 | .1 | .1 | .2 | .3 |
| .5 | .1 | .1 | .1 | .2 | .3 |
| .6 | .1 | .1 | .1 | .2 | .9 |
| .6 | .7 | .1 | .1 | .6 | .9 |
| .6 | .7 | .1 | .1 | .6 | .9 |
| .6 | .7 | .9 | .8 | .6 | .9 |
| .2 | .7 | .4 | .8 | .6 | .7 |
| .3 | .7 | .6 | .8 | .6 | .5 |

**Filter (Kernel):**
| .25 | .25 |
| .25 | .25 |

**Output Grid (Partial):**
| .3 | .1 | .1 | .15 | .25 | |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

### Visual Description
Same as page 9, but the 2x2 red square has shifted one column to the right (top row, columns 5 and 6). A fifth value, .25, is added to the first row of the output grid, representing the result of the convolution at this new position.

---

## Page 11
### Content
# Convolution

**Input Image Grid:**
| | | | | | |
|---|---|---|---|---|---|
| .5 | .1 | .1 | .1 | .2 | .3 |
| .5 | .1 | .1 | .1 | .2 | .3 |
| .6 | .1 | .1 | .1 | .2 | .9 |
| .6 | .7 | .1 | .1 | .6 | .9 |
| .6 | .7 | .1 | .1 | .6 | .9 |
| .6 | .7 | .9 | .8 | .6 | .9 |
| .2 | .7 | .4 | .8 | .6 | .7 |
| .3 | .7 | .6 | .8 | .6 | .5 |

**Filter (Kernel):**
| .25 | .25 |
| .25 | .25 |

**Output Grid (Partial):**
| .3 | .1 | .1 | .15 | .25 | |
|---|---|---|---|---|---|
| .325 | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

### Visual Description
The 2x2 red square has moved to the start of the second row of the input grid (covering rows 2-3, columns 1-2). The first value of the second row in the output grid is now filled with .325.

---

## Page 12
### Content
# Convolution

**Input Image Grid:**
| | | | | | |
|---|---|---|---|---|---|
| .5 | .1 | .1 | .1 | .2 | .3 |
| .5 | .1 | .1 | .1 | .2 | .3 |
| .6 | .1 | .1 | .1 | .2 | .9 |
| .6 | .7 | .1 | .1 | .6 | .9 |
| .6 | .7 | .1 | .1 | .6 | .9 |
| .6 | .7 | .9 | .8 | .6 | .9 |
| .2 | .7 | .4 | .8 | .6 | .7 |
| .3 | .7 | .6 | .8 | .6 | .5 |

**Filter (Kernel):**
| .25 | .25 |
| .25 | .25 |

**Output Grid (Partial):**
| .3 | .1 | .1 | .15 | .25 | |
|---|---|---|---|---|---|
| .325 | .1 | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

### Visual Description
The 2x2 red square has shifted one column to the right on the second row (covering rows 2-3, columns 2-3). The second value of the second row in the output grid is now filled with .1.

---

## Page 13
### Content
# Convolution
### and so on...

**Input Image Grid:**
| | | | | | |
|---|---|---|---|---|---|
| .5 | .1 | .1 | .1 | .2 | .3 |
| .5 | .1 | .1 | .1 | .2 | .3 |
| .6 | .1 | .1 | .1 | .2 | .9 |
| .6 | .7 | .1 | .1 | .6 | .9 |
| .6 | .7 | .1 | .1 | .6 | .9 |
| .6 | .7 | .9 | .8 | .6 | .9 |
| .2 | .7 | .4 | .8 | .6 | .7 |
| .3 | .7 | .6 | .8 | .6 | .5 |

**Filter (Kernel):**
| .25 | .25 |
| .25 | .25 |

### Visual Description
The slide shows the final step of the convolution process. The 2x2 red square is at the bottom right of the input grid (covering rows 7-8, columns 5-6). The output grid on the right is now replaced by a blurred version of the original face image, demonstrating the effect of the averaging filter.

---

## Page 14
### Content
# Classical “image processing”

* AI was rule based
* If horizontal edges $\leftarrow$ Define manually designed filters (e.g., edge detection filters) and then convolve
    * Then do blah...

### Visual Description
Text-only slide. A bulleted list describes classical image processing as rule-based. An arrow connects the rule "If horizontal edges" to a note about defining manually designed filters (like edge detection) and then performing convolution.

---

## Page 15
### Content
# ML approach

* Learn the filters (and other things) using data

| $w_1$ | $w_2$ |
|---|---|
| $w_3$ | $w_4$ |

### Visual Description
Text slide explaining the machine learning approach to image processing. It states that filters are learned from data rather than being manually designed. Below the text is a 2x2 red grid containing weight variables $w_1, w_2, w_3, w_4$, representing a learnable filter.

---

## Page 16
### Content
# LeNet

![LeNet Architecture Diagram](lenet_diagram.png)

* **INPUT:** 32x32
* **C1:** feature maps 6@28x28 (Convolutions)
* **S2:** f. maps 6@14x14 (Subsampling)
* **C3:** f. maps 16@10x10 (Convolutions)
* **S4:** f. maps 16@5x5 (Subsampling)
* **C5:** layer 120 (Full connection)
* **F6:** layer 84 (Full connection)
* **OUTPUT:** 10 (Gaussian connections)

“Gradient-based learning applied to document recognition”, Y LeCun, L Bottou, Y Bengio, P Haffner, 1998

### Visual Description
A detailed diagram of the LeNet-5 convolutional neural network architecture. It shows the sequence of layers starting from an input image of the letter 'A' (32x32 pixels). The process flows through alternating Convolutional (C) and Subsampling/Pooling (S) layers, followed by fully connected layers, and finally an output layer with 10 units. Red circles highlight the labels "Convolutions" and "Subsampling" under the first two stages. A citation for the original 1998 paper by LeCun et al. is provided at the bottom.
## Page 17
### Content
# LeNet

Do this multiple times (with possibly different filters):
Capture different aspects of the image

| $w_1$ | $w_2$ |
| :---: | :---: |
| $w_3$ | $w_4$ |

**Convolve then activation function**

* Fully connected architecture does not have sequential structure built in
* Invariant to translation
    * E.g., to detect a dog, its position can be anywhere
* Filter also often called "Kernel" or "Receptive field"

### Visual Description
The slide shows the architecture of LeNet-5. It starts with an INPUT (32x32) image of the letter 'A'. A green circle highlights the first convolution layer C1 (feature maps 6@28x28). The diagram continues through S2 (subsampling, 6@14x14), C3 (convolutions, 16@10x10), S4 (subsampling, 16@5x5), C5 (full connection, 120), F6 (full connection, 84), and finally OUTPUT (Gaussian connections, 10). A small $2 \times 2$ weight matrix with entries $w_1, w_2, w_3, w_4$ is shown as a filter being applied to the input image.

---
## Page 18
### Content
# LeNet

**Too much memory!!**

* Less memory
* Less computation in subsequent layers
* Mitigate overfitting
    * (fitting unnecessarily too tightly to training data – next lecture)

### Visual Description
The slide repeats the LeNet architecture diagram from the previous page, but now a red box highlights the transition from the C1 convolution layer to the S2 subsampling layer. Below the diagram, there is a photo of a laptop with smoke coming out of it, accompanied by the text "Too much memory!!" in a red box. The bullet points list the benefits of subsampling.

---
## Page 19
### Content
# Average pooling

Take mean of entries $\rightarrow$

| .5 | .1 | .1 | .1 | .2 | .3 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| .5 | .1 | .1 | .1 | .2 | .3 |
| .6 | .1 | .1 | .1 | .2 | .9 |
| .6 | .7 | .1 | .1 | .6 | .9 |
| .6 | .7 | .1 | .1 | .6 | .9 |
| .6 | .7 | .9 | .8 | .6 | .9 |
| .2 | .7 | .4 | .8 | .6 | .7 |
| .3 | .7 | .6 | .8 | .6 | .5 |

$\downarrow$

| .3 | | |
| :---: | :---: | :---: |
| | | |
| | | |
| | | |

### Visual Description
The slide illustrates average pooling. A $2 \times 2$ red square highlights the top-left corner of an $8 \times 6$ grid of numbers (values: 0.5, 0.1, 0.5, 0.1). An arrow points from this selection to a new pink grid where the first cell contains the value 0.3, which is the average of the four selected numbers.

---
## Page 20
### Content
# Max pooling

Take max of entries (non linear) $\rightarrow$

| .5 | .1 | .1 | .1 | .2 | .3 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| .5 | .1 | .1 | .1 | .2 | .3 |
| .6 | .1 | .1 | .1 | .2 | .9 |
| .6 | .7 | .1 | .1 | .6 | .9 |
| .6 | .7 | .1 | .1 | .6 | .9 |
| .6 | .7 | .9 | .8 | .6 | .9 |
| .2 | .7 | .4 | .8 | .6 | .7 |
| .3 | .7 | .6 | .8 | .6 | .5 |

$\downarrow$

| .5 | | |
| :---: | :---: | :---: |
| | | |
| | | |
| | | |

### Visual Description
The slide illustrates max pooling. Similar to the previous page, a $2 \times 2$ red square highlights the top-left corner of an $8 \times 6$ grid of numbers (values: 0.5, 0.1, 0.5, 0.1). An arrow points to a pink grid where the first cell contains the value 0.5, which is the maximum of the four selected numbers.

---
## Page 21
### Content
# Stride

| .5$_{.25}$ | .1$_{.25}$ | .1 | .1 | .2 | .3 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| .5$_{.25}$ | .1$_{.25}$ | .1 | .1 | .2 | .3 |
| .6 | .1 | .1 | .1 | .2 | .9 |
| .6 | .7 | .1 | .1 | .6 | .9 |
| .6 | .7 | .1 | .1 | .6 | .9 |
| .6 | .7 | .9 | .8 | .6 | .9 |
| .2 | .7 | .4 | .8 | .6 | .7 |
| .3 | .7 | .6 | .8 | .6 | .5 |

$\downarrow$

| .3 | | |
| :---: | :---: | :---: |
| | | |
| | | |
| | | |

### Visual Description
The slide introduces the concept of stride. It shows a grayscale image of a face on the left. In the center is the $8 \times 6$ grid of numbers. A $2 \times 2$ red square covers the top-left corner. Inside each of these four cells, a weight of $.25$ is written in small text. The resulting value in the pink grid on the right is 0.3.

---
## Page 22
### Content
# Stride

Jump 2 places $\rightarrow$

| .5 | .1 | .1$_{.25}$ | .1$_{.25}$ | .2 | .3 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| .5 | .1 | .1$_{.25}$ | .1$_{.25}$ | .2 | .3 |
| .6 | .1 | .1 | .1 | .2 | .9 |
| .6 | .7 | .1 | .1 | .6 | .9 |
| .6 | .7 | .1 | .1 | .6 | .9 |
| .6 | .7 | .9 | .8 | .6 | .9 |
| .2 | .7 | .4 | .8 | .6 | .7 |
| .3 | .7 | .6 | .8 | .6 | .5 |

$\downarrow$

| .3 | .1 | |
| :---: | :---: | :---: |
| | | |
| | | |
| | | |

### Visual Description
The slide shows the stride operation moving horizontally. The $2 \times 2$ red square has jumped 2 places to the right, now covering four cells with the value 0.1. Each cell has the weight $.25$ applied. The resulting value in the second cell of the pink grid is 0.1.

---
## Page 23
### Content
# Stride

Jump 2 places $\rightarrow$

| .5 | .1 | .1 | .1 | .2$_{.25}$ | .3$_{.25}$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| .5 | .1 | .1 | .1 | .2$_{.25}$ | .3$_{.25}$ |
| .6 | .1 | .1 | .1 | .2 | .9 |
| .6 | .7 | .1 | .1 | .6 | .9 |
| .6 | .7 | .1 | .1 | .6 | .9 |
| .6 | .7 | .9 | .8 | .6 | .9 |
| .2 | .7 | .4 | .8 | .6 | .7 |
| .3 | .7 | .6 | .8 | .6 | .5 |

$\downarrow$

| .3 | .1 | .25 |
| :---: | :---: | :---: |
| | | |
| | | |
| | | |

### Visual Description
The stride operation continues. The $2 \times 2$ red square has jumped another 2 places to the right, now covering the last two columns of the first two rows (values: 0.2, 0.3, 0.2, 0.3). With weights of $.25$ applied, the resulting value in the third cell of the pink grid is 0.25.

---
## Page 24
### Content
# Stride

* Can specify a vertical and horizontal stride
* First example where it moved only 1 row and column: stride of 1 both vertically and horizontally
* Next example "Jump 2 places $\rightarrow$" but cover each row: stride of 2 horizontally and 1 vertically
* Applicable to convolution and subsampling layers

### Visual Description
Text-only slide.

---
## Page 25
### Content
# Padding

$$
\begin{matrix}
.5 & .1 & .1 & .1 & .2 & .3 \\
.5 & .1 & .1 & .1 & .2 & .3 \\
.6 & .1 & .1 & .1 & .2 & .9 \\
.6 & .7 & .1 & .1 & .6 & .9 \\
.6 & .7 & .1 & .1 & .6 & .9 \\
.6 & .7 & .9 & .8 & .6 & .9 \\
.2 & .7 & .4 & .8 & .6 & .7 \\
.3 & .7 & .6 & .8 & .6 & .5
\end{matrix}
\rightarrow
\begin{matrix}
0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & .5 & .1 & .1 & .1 & .2 & .3 & 0 \\
0 & .5 & .1 & .1 & .1 & .2 & .3 & 0 \\
0 & .6 & .1 & .1 & .1 & .2 & .9 & 0 \\
0 & .6 & .7 & .1 & .1 & .6 & .9 & 0 \\
0 & .6 & .7 & .1 & .1 & .6 & .9 & 0 \\
0 & .6 & .7 & .9 & .8 & .6 & .9 & 0 \\
0 & .2 & .7 & .4 & .8 & .6 & .7 & 0 \\
0 & .3 & .7 & .6 & .8 & .6 & .5 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 0
\end{matrix}
\rightarrow \text{Convolution}
$$

* This example pads with zeros.
* Other types of padding possible, e.g., mean of nearest cells

### Visual Description
The slide illustrates the concept of padding in image processing. On the left is an $8 \times 6$ matrix of decimal values. An arrow points to a larger $10 \times 8$ matrix where the original values are centered and surrounded by a border of zeros. A final arrow points from the padded matrix to the word "Convolution".

---
## Page 26
### Content
# LeNet

![LeNet Architecture Diagram](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/LeNet_Architecture.png/1200px-LeNet_Architecture.png)

* **INPUT**: 32x32
* **C1**: feature maps 6@28x28 (Convolutions)
* **S2**: f. maps 6@14x14 (Subsampling)
* **C3**: f. maps 16@10x10 (Convolutions)
* **S4**: f. maps 16@5x5 (Subsampling)
* **C5**: layer 120 (Full connection)
* **F6**: layer 84 (Full connection)
* **OUTPUT**: 10 (Gaussian connections)

### Visual Description
A diagram showing the architecture of the LeNet-5 neural network. It starts with an input image of the letter 'A' and progresses through several layers: two sets of alternating convolution and subsampling (pooling) layers, followed by two fully connected layers, and finally an output layer. Lines indicate how small regions in one layer map to units in the next.

---
## Page 27
### Content
# Going deeper and deeper: Unstable gradients and ResNet

[https://arxiv.org/pdf/1512.03385.pdf](https://arxiv.org/pdf/1512.03385.pdf)

### Visual Description
Title slide for a new section. It features a background image of an anchor underwater on a seabed. The text "Going deeper and deeper: Unstable gradients and ResNet" is prominently displayed, along with a link to the original ResNet research paper.

---
## Page 28
### Content
# Vanilla CNN error increases with increasing depth

![Training and Test Error Graphs](https://production-media.paperswithcode.com/methods/Screen_Shot_2020-06-08_at_11.45.55_PM_S86Yf9q.png)

* Left graph: **training error (%)** vs **iter. (1e4)**
* Right graph: **test error (%)** vs **iter. (1e4)**
* Red line: 56-layer network
* Yellow line: 20-layer network

### Visual Description
Two line graphs comparing the performance of a 20-layer (yellow) and a 56-layer (red) vanilla CNN. Both graphs show that the 56-layer network has a higher error rate (both training and test) than the 20-layer network, illustrating the degradation problem where adding more layers to a plain network leads to higher training error.

---
## Page 29
### Content
# But isn’t the shallow network a special case of the deeper network?

Image $\rightarrow$ [Convolutional cell] $\rightarrow$ [Subsampling cell] $\rightarrow$ **[Set as identity: Convolutional cell $\rightarrow$ Subsampling cell]** $\rightarrow$ [Convolutional cell] $\rightarrow$ [Subsampling cell] $\rightarrow$ Softmax

### Visual Description
A flow diagram of a deep neural network. A sequence of blocks represents layers: Image, Convolutional cell, Subsampling cell, another Convolutional cell, another Subsampling cell, a third Convolutional cell, a third Subsampling cell, and finally Softmax. The middle pair of Convolutional and Subsampling cells is enclosed in a pink box labeled "Set as identity" in red text. In the top right corner, there is a "Philosoraptor" meme image.

---
## Page 30
### Content
# Training issues such as unstable (vanishing or exploding) gradients

Image $\rightarrow$ [Conv cell] $\rightarrow$ [Sub cell] $\rightarrow$ [Conv cell] $\rightarrow$ [Sub cell] $\rightarrow$ [Conv cell] $\rightarrow$ [Sub cell] $\rightarrow$ Softmax
$\leftarrow$ Gradient $\leftarrow$ Gradient $\leftarrow$ Gradient $\leftarrow$ Gradient $\leftarrow$ Gradient $\leftarrow$ Gradient

* Gradient on left part of network obtained from product of gradients to the right
* If right gradients are small (or large) this gradient becomes vanishingly small (explosively large) as #layers increase
* Weights here don’t move in gradient descent!
* Training deeper network doesn’t reduce to the shallow network, even if the shallow network had a lower training error.

### Visual Description
The slide shows the same network flow diagram as the previous page, but with arrows pointing backwards from the Softmax output towards the input, labeled "Gradient". This illustrates backpropagation. The text explains that because gradients are multiplied, they can become extremely small (vanishing) or large (exploding) in deep networks, preventing effective training of the early layers.

---
## Page 31
### Content
# Shallow network as a special case of deeper network

Image $\rightarrow$ [Conv cell] $\rightarrow$ [Sub cell] $\xrightarrow{\text{skip}} \text{ (into next layer) } \rightarrow$ [Conv cell] $\rightarrow$ [Sub cell] $\rightarrow$ [Conv cell] $\rightarrow$ [Sub cell] $\rightarrow$ Softmax

* **Observation**: Easier to “learn” an all zero set of weights than an identity mapping
* **Idea**: Explicitly facilitate identity!
* Add “skip” connections

### Visual Description
The network flow diagram is shown again, but now with a "skip connection" represented by a curved arrow that bypasses a pair of Convolutional and Subsampling cells. This visualizes the core idea of Residual Networks (ResNet).

---
## Page 32
### Content
# Vanilla network vs ResNet

![Vanilla vs ResNet Error Graphs](https://miro.medium.com/v2/resize:fit:1400/1*6hF97s_67_sc_80_7Z7A6Q.png)

* **Thin line**: Training error
* **Thick line**: Validation error

**Vanilla network (Left):**
* plain-18 (cyan)
* plain-34 (red) - *Higher error than 18-layer*

**ResNet (Right):**
* ResNet-18 (cyan)
* ResNet-34 (red) - *Lower error than 18-layer*

### Visual Description
Two sets of graphs comparing "Vanilla network" (left) and "ResNet" (right). In the vanilla network, the 34-layer version (red) has higher training and validation error than the 18-layer version (cyan). In the ResNet graphs, the 34-layer version (red) successfully achieves lower error than the 18-layer version (cyan), demonstrating that skip connections solve the degradation problem. Legend indicates thin lines are training error and thick lines are validation error.
## Page 33

### Content
Model selection in neural networks:
How to choose an architecture?
Neural architecture search (NAS)

### Visual Description
The slide features a parody of the "Finding Dory" movie poster. The title on the poster has been modified to read "FINDING NEURAL ARCHITECTURE" with "NEURAL" in a large white box and "ARCHITECTURE" in a blue box below it. The characters Dory and Nemo are visible in the background.

---

## Page 34

### Content
GoogLeNet

### Visual Description
The slide shows a complete, high-level architectural diagram of GoogLeNet (Inception v1). It is a very long, horizontal sequence of interconnected blocks, starting from an input on the left and ending with a softmax output on the right. The diagram consists of many colored boxes representing different layer types: blue for convolutions, red for pooling, green for concatenation, and yellow for softmax/loss. A specific repeating section in the middle of the network is highlighted with a dashed black rectangular border.

---

## Page 35

### Content
GoogLeNet

### Visual Description
This slide provides a zoomed-in view of the "Inception" modules within the GoogLeNet architecture shown on the previous page. It displays two stacked Inception modules. Each module shows an input branching into four parallel paths:
1. A $1\times1$ convolution.
2. A $1\times1$ convolution followed by a $3\times3$ convolution.
3. A $1\times1$ convolution followed by a $5\times5$ convolution.
4. A $3\times3$ max pooling layer followed by a $1\times1$ convolution.
All four paths then feed into a "DepthConcat" layer, which serves as the input for the next stage.

---

## Page 36

### Content
## Neural architecture search

* Let $\mathcal{A}$ be a set of neural network architectures (each architecture in $\mathcal{A}$ is a hypothesis class)
* **Goal:** $\text{argmin}_{a \in \mathcal{A}} \text{ValidationLoss}(w_a, a)$ such that $w_a \in \text{argmin}_w \text{TrainingLoss}(w, a)$
* Naïve approach:
    * For every architecture $a \in \mathcal{A}$, train the neural network under architecture $a$ and compute the validation loss
    * Choose the architecture with the smallest validation loss
* **Computationally inefficient!**
* Key research questions center around how to do it faster

### Visual Description
Text-only slide. The mathematical goal is highlighted with red boxes around the "argmin" terms and the loss functions to emphasize the nested optimization problem (bi-level optimization).
