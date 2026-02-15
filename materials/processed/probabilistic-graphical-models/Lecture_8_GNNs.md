# Lecture_8_GNNs

Source: `materials/archive/probabilistic graphical models/Lecture_8_GNNs.pdf`
Duplicate equivalents: `Lecture_8_GNNs (1).pdf`, `Lecture_8_GNNs.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `strict full-PDF single-call conversion`
Finish reason: `STOP`
Pages: 73
## Page 1
### Content
10708
Probabilistic Graphical Models: 
Spring 2026

Andrej Risteski
Machine Learning Department

Lecture 8:
Brief overview of graph neural networks

### Visual Description
This is a title slide with dark blue text on a white background. It includes the course number and name, the semester, the instructor's name and department, and the lecture number and title. There are no diagrams or images.

## Page 2
### Content
Neural network basics: 
the artificial neuron

Neuron pre-activation:
$a(x) = b + \sum_i w_i x_i = b + \mathbf{w}^T \mathbf{x}$

Neuron post-activation:
$h(x) = \sigma(b + \mathbf{w}^T \mathbf{x})$

Where:
$\mathbf{w}$ are the weights (parameters) 
$b$ is the bias term 
$\sigma(\cdot)$ is called the activation function

### Visual Description
The slide explains the basic unit of a neural network, the artificial neuron. 
- On the right, there is a diagram of a neuron. 
- Input nodes are labeled $x_1$ and $x_d$, with an ellipsis between them. 
- Arrows point from these inputs to a central circular node representing the neuron. 
- The arrows are labeled with weights $w_1$ and $w_d$. 
- A separate input node labeled "1" points to the neuron with an arrow labeled $b$ (the bias). 
- Inside the neuron circle, there is a small plot of a sigmoid-like S-curve, representing the activation function.

## Page 3
### Content
Popular activations

Linear activation function: 
$\sigma(a) = a$

֍ No nonlinear transformation
֍ No output squashing
֍ Poor representational power (linear composed w/ linear = linear)

### Visual Description
The slide presents the linear activation function. 
- On the right, there is a square plot showing a straight blue line passing through the origin with a slope of 1 ($y=x$). 
- The x-axis and y-axis both range from -3.0 to 3.0. 
- Grid lines are visible on the plot.

## Page 4
### Content
Popular activations

Sigmoid activation function: 
$\sigma(a) = \frac{1}{1 + \exp(-a)}$

֍ Squashes the neuron’s output between 0 and 1: can be interpreted as $P(\text{output} = 1|a)$ (i.e. logistic classifier) 
֍ Always positive
֍ Bounded
֍ Strictly Increasing

### Visual Description
The slide presents the sigmoid activation function. 
- On the right, there is a square plot showing a blue S-shaped curve. 
- The curve starts near 0 for negative x-values, passes through 0.5 at $x=0$, and approaches 1 for positive x-values. 
- The x-axis ranges from -3 to 3, and the y-axis ranges from -3.0 to 3.0, though the function itself is bounded between 0 and 1.

## Page 5
### Content
Popular activations

Hyperbolic tangent (“tanh”) activation function:
$\sigma(a) = \tanh(a)$
$= \frac{\exp(a) - \exp(-a)}{\exp(a) + \exp(-a)} = \frac{\exp(2a) - 1}{\exp(2a) + 1}$

֍ Squashes neuron’s output between -1 and 1 
֍ Can be positive or negative 
֍ Bounded
֍ Strictly increasing

### Visual Description
The slide presents the tanh activation function. 
- On the right, there is a square plot showing a blue S-shaped curve. 
- The curve starts near -1 for negative x-values, passes through 0 at $x=0$, and approaches 1 for positive x-values. 
- The x-axis ranges from -3 to 3, and the y-axis ranges from -1.0 to 1.0. 
- A horizontal orange line is drawn at $y=0$.

## Page 6
### Content
Popular activations

Rectified linear (“ReLU”) activation function:
$\sigma(a) = \max(a, 0)$

֍ Bounded below by 0 (always non-negative)
֍ Tends to produce units with sparse activities
֍ Not upper bounded
֍ Strictly increasing

### Visual Description
The slide presents the ReLU activation function. 
- On the right, there is a square plot showing a blue line. 
- The line is flat at $y=0$ for all $x < 0$ and then follows $y=x$ for all $x \ge 0$. 
- The x-axis ranges from -3 to 3, and the y-axis ranges from -3.0 to 3.0.

## Page 7
### Content
Softmax output activation 

In multi-way classification, we need multiple outputs (1 per class) 

Natural: model calculates conditional probabilities $P(\text{output} = c|\mathbf{x})$

Softmax activation function at the output
$\mathbf{o}(\mathbf{a}) = \text{softmax}(\mathbf{a}) = \left[ \frac{\exp(a_1)}{\sum_c \exp(a_c)} \dots \frac{\exp(a_C)}{\sum_c \exp(a_C)} \right]^T$

֍ strictly positive
֍ sums to one 

Predict class with the highest estimated class conditional probability.

### Visual Description
This slide contains text and a mathematical formula for the softmax function. There are no diagrams or plots.

## Page 8
### Content
Single Hidden Layer Neural Net

Hidden layer pre-activation:
$a(x) = b^{(1)} + W^{(1)}x$
$a(x)_i = b_i^{(1)} + \sum_j W_{i,j}^{(1)}x_j$

Hidden layer post-activation:
$h(x) = \sigma(a(x))$

Output layer activation:
$f(x) = o(b^{(2)} + \mathbf{w}^{(2)T} \mathbf{h}^{(1)}(x))$
(Blue arrow points to $o$: Output activation function)

### Visual Description
The slide shows a diagram of a neural network with one hidden layer.
- **Input Layer**: Nodes at the bottom labeled $x_1, x_j, x_d$ and a bias node "1".
- **Hidden Layer**: Nodes in the middle containing S-curves, labeled $h(\mathbf{x})_i$, and a bias node "1".
- **Output Layer**: A single node at the top labeled $f(\mathbf{x})$.
- **Connections**: Gray arrows represent weights. 
    - Arrows from input nodes to hidden nodes are labeled $W_{i,j}^{(1)}$.
    - Arrows from hidden nodes to the output node are labeled $w_i^{(2)}$.
    - Bias nodes "1" have arrows labeled $b_i^{(1)}$ and $b^{(2)}$ pointing to the next layer.

## Page 9
### Content
Multilayer Neural Net

Consider a network with L hidden layers. 

Layer pre-activations:
$\mathbf{a}^{(k)}(\mathbf{x}) = \mathbf{b}^{(k)} + \mathbf{W}^{(k)}\mathbf{h}^{(k-1)}(\mathbf{x})$

Hidden layer post-activations:
$\mathbf{h}^{(k)}(\mathbf{x}) = \sigma(\mathbf{a}^{(k)}(\mathbf{x}))$

Output layer activation: 
$\mathbf{h}^{(L+1)}(\mathbf{x}) = o(\mathbf{a}^{(L+1)}(\mathbf{x})) = f(\mathbf{x})$

$(\mathbf{h}^{(0)}(\mathbf{x}) = \mathbf{x})$

### Visual Description
The slide shows a diagram of a deep neural network with multiple hidden layers.
- **Input Layer**: Nodes at the bottom labeled $x_1, x_j, x_d$.
- **Hidden Layers**: Multiple layers of nodes with S-curves, labeled $\mathbf{h}^{(1)}(\mathbf{x})$ and $\mathbf{h}^{(2)}(\mathbf{x})$.
- **Output Layer**: A final layer of nodes at the top.
- **Bias Nodes**: Each layer has a bias node "1" pointing to the next layer.
- **Weight Matrices**: Labeled $\mathbf{W}^{(1)}, \mathbf{W}^{(2)}, \mathbf{W}^{(3)}$ for connections between layers.
- **Bias Vectors**: Labeled $\mathbf{b}^{(1)}, \mathbf{b}^{(2)}, \mathbf{b}^{(3)}$ for bias connections.

## Page 10
### Content
Neural networks for vision

Prototypical task in vision is object recognition: given an input 
image, identify what kind of object it contains. 

(Image of a sunflower)
112 pixels (height)
150 pixels (width)
(Arrow pointing to text: "sun flower")

Are feedforward networks the right architecture for this?

### Visual Description
The slide introduces neural networks for computer vision. 
- It features a color photograph of a yellow sunflower. 
- Dimension lines indicate the image is 112 pixels high and 150 pixels wide. 
- A thick gray arrow points from the image to the text "sun flower" in quotes, representing a classification task.

## Page 11
### Content
Desiderata for networks for vision

֍ Inputs are very high-dimensional: 150 x 150 pixels = 22500 inputs, or 3 x 22500 if RGB pixels instead of grayscale. 
֍ Should leverage the spatial locality (in the pixel sense) of data 
֍ Build in invariance to natural variations: translation, illumination, etc. 

Convolutional architectures are designed for this:
֍ Local connectivity (reflects spatial locality and decreases # params)
֍ Parameter sharing (further decreases # params) 
֍ Convolution
֍ Pooling / subsampling hidden units

### Visual Description
This slide lists requirements and design principles for vision-based neural networks. It is entirely text-based with bullet points.

## Page 12
### Content
Local Connectivity

Use local connectivity of hidden units
֍ Each hidden unit is connected only to a sub region (patch) of the input image. 
It is connected to all channels: 1 if grayscale, 3 (R, G, B) if color image

Why this is a good idea:
֍ Fully connected layer has a lot of parameters to fit, which requires a lot of training data
֍ Image data isn’t arbitrary: neighboring pixels are “meaningfully related” – e.g. if a node is to be a “dog nose” detector – need to look at small patch of pixels. 

### Visual Description
The slide illustrates local connectivity.
- On the right, the sunflower image from page 10 is shown.
- Three small square patches are highlighted on the image.
- Gray arrows point from each patch to a corresponding hidden unit (circle with an S-curve) above the image.
- A legend at the bottom shows a gray square with height $r$ labeled "= receptive field". This indicates that each hidden unit only "sees" a small local part of the input.

## Page 13
### Content
Decrease in # of parameters

Fully connected: 200x200 image, 40K hidden units, ~2B parameters!

Convolutional: 200x200 image, 40K hidden units, window size 10x10, ~4M parameters!

### Visual Description
The slide compares parameter counts between fully connected and convolutional layers using two diagrams.
- **Left Diagram (Fully Connected)**: A grayscale image of Albert Einstein is shown. A dense forest of black lines connects every part of the image to a single hidden unit (white circle). This represents a massive number of parameters.
- **Right Diagram (Convolutional)**: The same image is shown. Three hidden units (white circles) are connected to the image. Each unit is connected only to a small local patch via a bundle of colored lines (red, green, and blue). This illustrates local connectivity and a significant reduction in parameters.

## Page 14
### Content
Parameter Sharing

Prior approach makes weights sensitive to translations: e.g. 

(Image of three dog noses)
(Red circle and arrows pointing to the left nose): Might learn weights for nose detector here 
(Purple circle and arrows pointing to the right nose): But not learn weights for a nose detector here

### Visual Description
The slide uses a photo of three dog noses peeking out from under a striped blanket to explain the need for parameter sharing.
- A red circle at the bottom is connected by two red arrows to the leftmost dog nose. Text says "Might learn weights for nose detector here".
- A purple circle at the bottom is connected by two purple arrows to the rightmost dog nose. Text says "But not learn weights for a nose detector here".
- This illustrates that without parameter sharing, a feature detector learned in one part of an image won't automatically work in another part.

## Page 15
### Content
Parameter Sharing

Prior approach makes weights sensitive to translations: e.g. 

(Image of three dog noses)
(Red arrow pointing right): If I shift the image, I should produce the same (shifted) set of activations 
"Translation equivariance" (in red)

### Visual Description
This slide continues the dog nose example. 
- A long red arrow points to the right across the bottom of the image, representing a translation or shift.
- The text "Translation equivariance" highlights the goal: the network's response should shift in the same way the input shifts.

## Page 16
### Content
Parameter Sharing

Share matrix of parameters across some units
֍ Units that are organized into the “feature map” share parameters
֍ Hidden units within a feature map cover different positions in the image 

(Diagram of sunflower and feature maps)
$W_{ij}$ is the matrix connecting the $i^{th}$ input channel with the $j^{th}$ feature map
same color = same matrix of connection

### Visual Description
The slide illustrates how parameter sharing works in practice.
- The sunflower image is at the bottom.
- Above it are three boxes labeled "feature map 1" (blue), "feature map 2" (orange), and "feature map 3" (red).
- Each box contains several hidden units (circles with S-curves).
- Blue arrows connect different patches of the image to different units in feature map 1. Because the arrows are the same color, they represent the same set of shared weights.
- Similarly, orange arrows connect to feature map 2, and red arrows connect to feature map 3.
- This shows that each feature map is produced by sliding the same filter (set of weights) across the entire image.

## Page 17
### Content
Desiderata for networks for vision

Our goal is to design neural networks that are specifically adapted for such problems
֍ Must deal with very high-dimensional inputs: 150 x 150 pixels = 22500 inputs, or 3 x 22500 if RGB pixels 
֍ Can exploit the 2D topology of pixels (or 3D for video data)
֍ Can build in invariance to certain variations: translation, illumination, etc. 

Convolutional networks leverage these ideas
֍ Local connectivity
֍ Parameter sharing
֍ **Convolution** (highlighted with a green box)
֍ Pooling / subsampling hidden units

### Visual Description
This slide is a recap of the vision network requirements, now highlighting "Convolution" as the next topic. It is text-based.

## Page 18
### Content
Discrete Convolution

Each feature map forms a 2D grid of features
Can be computed with a discrete convolution ($*$) of a kernel matrix $k_{ij}$

$y_j = g_j \tanh(\sum_i k_{ij} * x_i)$

- $x_i$ is the $i^{th}$ channel of input
- $k_{ij}$ is the convolution kernel
- $g_j$ is a learned scaling factor
- $y_j$ is the hidden layer

Jarret et al. 2009
Can add bias 

### Visual Description
The slide introduces the mathematical operation of convolution.
- On the left, there is a diagram titled "Convolutions". 
- It shows an "Input Image" (a grayscale picture of a dinosaur). 
- Small colored squares (kernels) are shown on the input image. 
- Lines project from these kernels to larger, semi-transparent colored squares (feature maps) on the right. 
- This visualizes how a small kernel is applied across the input to generate a full feature map.

## Page 19
### Content
Discrete Convolution 

$(x * k)_{ij} = \sum_{pq} x_{i+p, j+q} k_{r-p, r-q}$

Example:
(Matrix $x$):
0 80 40
20 40 0
0 0 40

$*$

(Matrix $k$):
0 0.25
0.5 1

=

### Visual Description
The slide provides a numerical example of 2D discrete convolution.
- It shows a $3 \times 3$ input matrix $x$ with various grayscale values (0, 80, 40, 20, 40, 0, 0, 0, 40).
- It shows a $2 \times 2$ kernel matrix $k$ with values (0, 0.25, 0.5, 1).
- An equals sign indicates the result is to be calculated.

## Page 20
### Content
Discrete Convolution 

$(x * k)_{ij} = \sum_{pq} x_{i+p, j+q} k_{r-p, r-q}$

Example:
(Matrix $x$ with flipped kernel $\tilde{k}$ overlaid):
1 0.5 (top-left $2 \times 2$ area)
0.25 0
(Original values underneath: 0 80, 20 40)

$*$

(Matrix $k$):
0 0.25
0.5 1

=

$\tilde{k} = k$ with rows and columns flipped

### Visual Description
This slide continues the example, showing the first step of the calculation.
- A gray arrow shows the kernel $k$ being transformed into $\tilde{k}$ by flipping its rows and columns.
- The flipped kernel $\tilde{k}$ (values: 1, 0.5, 0.25, 0) is placed over the top-left $2 \times 2$ sub-matrix of the input $x$.

## Page 21
### Content
Discrete Convolution 

$(x * k)_{ij} = \sum_{pq} x_{i+p, j+q} k_{r-p, r-q}$

Example:
$1 \times 0 + 0.5 \times 80 + 0.25 \times 20 + 0 \times 40 = 45$

(Diagram showing the calculation for the first output element)
Result matrix:
45

### Visual Description
The slide shows the arithmetic for the first element of the output matrix. The flipped kernel is multiplied element-wise with the top-left patch of the input, and the products are summed to get 45. This value is placed in the top-left corner of a new output matrix.

## Page 22
### Content
Discrete Convolution 

$(x * k)_{ij} = \sum_{pq} x_{i+p, j+q} k_{r-p, r-q}$

Example:
$1 \times 80 + 0.5 \times 40 + 0.25 \times 40 + 0 \times 0 = 110$

(Diagram showing the calculation for the second output element)
Result matrix:
45 110

### Visual Description
The slide shows the calculation for the second output element. The flipped kernel has shifted one position to the right on the input matrix. The sum of element-wise products is 110, which is placed in the top-right of the output matrix.

## Page 23
### Content
Discrete Convolution 

$(x * k)_{ij} = \sum_{pq} x_{i+p, j+q} k_{r-p, r-q}$

Example:
$1 \times 20 + 0.5 \times 40 + 0.25 \times 0 + 0 \times 0 = 40$

(Diagram showing the calculation for the third output element)
Result matrix:
45 110
40

### Visual Description
The slide shows the calculation for the third output element. The flipped kernel has shifted down to the bottom-left patch of the input matrix. The sum of element-wise products is 40, which is placed in the bottom-left of the output matrix.

## Page 24
### Content
Discrete Convolution 

$(x * k)_{ij} = \sum_{pq} x_{i+p, j+q} k_{r-p, r-q}$

Example:
$1 \times 40 + 0.5 \times 0 + 0.25 \times 0 + 0 \times 40 = 40$

(Diagram showing the calculation for the fourth output element)
Result matrix:
45 110
40 40

### Visual Description
The slide shows the final calculation for the $2 \times 2$ output matrix. The flipped kernel is now at the bottom-right patch of the input. The sum is 40, completing the output matrix as (45, 110, 40, 40).

## Page 25
### Content
Example of a convolution

(Image of a forest path)
$*$
(Kernel matrix):
-1 0 1
-1 0 1
-1 0 1
=
(Edge-detected image)

### Visual Description
The slide shows a real-world example of convolution for edge detection.
- On the left is a grayscale photo of a path through a dark forest. A small red square highlights a patch of trees.
- In the middle is a $3 \times 3$ kernel matrix with values -1 in the first column, 0 in the second, and 1 in the third. This is a vertical edge detector.
- On the right is the result of the convolution: a high-contrast image where vertical structures like tree trunks are brightly highlighted against a gray background. Red lines show how the highlighted patch in the original image corresponds to a patch in the output.

## Page 26
### Content
Adding non-linearity

With a non-linearity, we get a detector of a feature at any position in 
the image: 
$x * k_{ij}$

(Input image $x_i$): $5 \times 5$ matrix with a white 'L' shape.
(Kernel): $2 \times 2$ matrix (0, 0.5, 0.5, 0).
(Output $x_i * k_{ij}$): $4 \times 4$ matrix with values like 128 and 255.

### Visual Description
The slide shows how convolution can detect features.
- The input image $x_i$ is a $5 \times 5$ black grid with a white 'L' shape (values of 255).
- A $2 \times 2$ kernel is shown with values (0, 0.5, 0.5, 0).
- Orange arrows show the kernel being applied to the top-left $2 \times 2$ patch of the input.
- The resulting $4 \times 4$ matrix $x_i * k_{ij}$ is shown. It has high values (128, 255) in areas where the kernel's pattern matches parts of the 'L' shape, effectively acting as a corner or edge detector.

## Page 27
### Content
Adding non-linearity

With a non-linearity, we get a detector of a feature at any position in 
the image: 

(Input image $x_i$): $5 \times 5$ matrix with a white 'L' shape.
(Kernel): $2 \times 2$ matrix (0, 0.5, 0.5, 0).
(Output matrix):
0.02 0.19 0.19 0.02
0.02 0.19 0.19 0.02
0.02 0.75 0.02 0.02
0.75 0.02 0.02 0.02

$\text{sigm}(0.02 \cdot x_i * k_{ij} - 4)$

### Visual Description
This slide shows the effect of adding a sigmoid non-linearity to the convolution result from the previous page.
- The output matrix now contains values between 0 and 1.
- The highest values (0.75) are in the positions corresponding to the detected features.
- This demonstrates how a convolutional layer with a non-linearity acts as a feature map, where each value indicates the presence/strength of a feature at that location.

## Page 28
### Content
Example of ReLU non-linearity

(Image 1: Convolution output)
Black = negative; white = positive values

(Arrow pointing right)

(Image 2: ReLU output)
Only non-negative values

From Rob Fergus tutorial (http://mlss.tuebingen.mpg.de/2015/slides/fergus/Fergus_1.pdf)

### Visual Description
The slide shows the visual effect of the ReLU activation function on an image.
- The first image is a grayscale edge-detected city skyline where some areas are black (negative values) and some are white (positive values).
- A blue arrow points to the second image.
- The second image shows the same skyline after ReLU. All the black areas from the first image are now a uniform gray (representing zero), while the white areas remain. This illustrates how ReLU "zeros out" negative activations.

## Page 29
### Content
Desiderata for networks for vision

Our goal is to design neural networks that are specifically adapted 
for such problems
֍ Must deal with very high-dimensional inputs: 150 x 150 pixels = 
22500 inputs, or 3 x 22500 if RGB pixels 
֍ Can exploit the 2D topology of pixels (or 3D for video data)
֍ Can build in invariance to certain variations: translation, 
illumination, etc. 

Convolutional networks leverage these ideas
֍ Local connectivity
֍ Parameter sharing
֍ Convolution
֍ **Pooling / subsampling hidden units** (highlighted with a green box)

### Visual Description
This slide is another recap, now highlighting "Pooling / subsampling hidden units" as the next topic. It is text-based.

## Page 30
### Content
Example: Pooling

Illustration of pooling/subsampling operation

(Diagram showing max pooling)
Input $4 \times 4$ matrix -> Output $2 \times 2$ matrix

Why pooling?
֍ Introduces invariance to local translations
֍ Reduces the number of hidden units in hidden layer 

### Visual Description
The slide illustrates the max pooling operation.
- On the left is the $4 \times 4$ feature map from page 27.
- It is divided into four $2 \times 2$ quadrants by blue lines.
- Blue arrows labeled "max" point from each quadrant to a single cell in a smaller $2 \times 2$ output matrix on the right.
- For example, the top-left quadrant contains values (0.02, 0.19, 0.02, 0.19). The maximum value, 0.19, is placed in the top-left cell of the output matrix.
- This shows how pooling reduces the spatial dimensions of the feature map.

## Page 31
### Content
Example: Pooling

By “pooling” (e.g., taking max) filter 
responses at different locations we gain 
robustness to the exact spatial location 
of features.

### Visual Description
The slide provides a more conceptual diagram of pooling.
- A grayscale image is shown on the left.
- A grid is overlaid on a portion of the image.
- Black lines connect a $2 \times 2$ group of nodes in one layer to a single node in the next layer.
- Multiple such groups are shown, all converging to a single pink circle at the far right.
- This illustrates how information from a local neighborhood is summarized into a single value, providing spatial robustness.

## Page 32
### Content
Convolutional Network 

Convolutional neural network alternates between 
convolutional and pooling layers

(Diagram of a full CNN architecture)
input 83x83 -> Layer 1: 9x9 convolution (64 kernels) -> 64@75x75 -> Layer 2: 10x10 pooling, 5x5 subsampling -> 64@14x14 -> Layer 3: 9x9 convolution (4096 kernels) -> 256@6x6 -> Layer 4: 6x6 pooling, 4x4 subsamp -> 256@1x1 -> Output 101 -> fully connected

From Yann LeCun’s slides

### Visual Description
The slide shows a classic CNN architecture diagram.
- It starts with an 83x83 input image.
- **Layer 1**: Performs a 9x9 convolution with 64 kernels, resulting in 64 feature maps of size 75x75.
- **Layer 2**: Performs 10x10 pooling and 5x5 subsampling, reducing the maps to 64@14x14.
- **Layer 3**: Another 9x9 convolution with 4096 kernels, producing 256 maps of size 6x6.
- **Layer 4**: 6x6 pooling and 4x4 subsampling, resulting in 256 maps of size 1x1.
- **Output**: The final 1x1 maps are fully connected to an output layer with 101 units (classes).
- The diagram uses purple squares to represent feature maps and arrows to show the flow of operations.

## Page 33
### Content
A graph view of convolutions

(Diagram of image grid and neighborhood)
Image -> CNN weights -> Output

CNN formulation: $h_v^{(l+1)} = \sigma(\sum_{u \in N(v) \cup \{v\}} W_l^u h_u^{(l)}), \forall l \in \{0, \dots, L-1\}$

**$N(v)$ represents the 8 neighbor pixels of $v$.**

Figures by Jure Leskovec

### Visual Description
The slide reinterprets convolution as a graph operation.
- On the left, a 2D grid (representing an image) is shown. A $3 \times 3$ neighborhood is highlighted, with lines projecting to a single cell in a layer above.
- In the center, a numerical example shows an "Image" patch (a $3 \times 3$ grid of numbers), "CNN weights" (another $3 \times 3$ grid), and the resulting "Output" (a single value, 16).
- This visualizes that a pixel's next-layer value is a weighted sum of its own value and its 8 immediate neighbors' values.

## Page 34
### Content
A graph view of convolutions

(Diagram comparing Image grid and Graph)
Image vs Graph

$h_v^{(l+1)} = \sigma(\sum_{u \in N(v)} W_l^u h_u^{(l)} + B_l h_v^{(l)}), \forall l \in \{0, \dots, L-1\}$

Crucial observation: permuting the order of the neighbors would 
result in a different output. Also, assumes that size of neighborhood is 
fixed.

Figures by Jure Leskovec

### Visual Description
The slide compares a regular image grid to a general graph.
- **Image**: Shown as a regular 2D grid of green squares.
- **Graph**: Shown as a central blue node connected to 8 other blue nodes in a circular arrangement. A yellow self-loop arrow points back to the central node.
- The text points out that standard convolution depends on the specific order and fixed number of neighbors, which is true for grids but not for general graphs.

## Page 35
### Content
A graph view of convolutions

(Same diagram as page 34)

Each neighbor passes a message to neighbor; neighbor aggregates 
messages to calculate $h^{(l+1)}$. 

Figures by Jure Leskovec

### Visual Description
This slide uses the same grid vs. graph diagram to introduce the concept of message passing. It explains that the convolution operation can be seen as neighbors sending "messages" to a central node, which then aggregates them.

## Page 36
### Content
Adapting this idea for arbitrary graphs

Graph tasks we would like to solve: 

֍ **Node classification**
֍ Predict a type of a given node

Slide by Jure Leskovec

### Visual Description
This is the first in a series of slides listing graph-related machine learning tasks. It is text-based.

## Page 37
### Content
Adapting this idea for arbitrary graphs

Graph tasks we would like to solve: 

֍ Node classification
֍ Predict a type of a given node
֍ **Link prediction**
֍ Predict whether two nodes are linked

Slide by Jure Leskovec

### Visual Description
This slide adds "Link prediction" to the list of graph tasks. It is text-based.

## Page 38
### Content
Adapting this idea for arbitrary graphs

Graph tasks we would like to solve: 

֍ Node classification
֍ Predict a type of a given node
֍ Link prediction
֍ Predict whether two nodes are linked
֍ **Community detection**
֍ Identify densely linked clusters of nodes

Slide by Jure Leskovec

### Visual Description
This slide adds "Community detection" to the list of graph tasks. It is text-based.

## Page 39
### Content
Adapting this idea for arbitrary graphs

Graph tasks we would like to solve: 

֍ Node classification
֍ Predict a type of a given node
֍ Link prediction
֍ Predict whether two nodes are linked
֍ Community detection
֍ Identify densely linked clusters of nodes
֍ **Network similarity**
֍ How similar are two (sub)networks

Slide by Jure Leskovec

### Visual Description
This slide adds "Network similarity" to the list of graph tasks. It is text-based.

## Page 40
### Content
Adapting this idea for arbitrary graphs

Some bits of notation: 
֍ $V$ is the **vertex set**
֍ $A$ is the **adjacency matrix** (assume binary)
֍ $X \in \mathbb{R}^{m \times |V|}$ is a matrix of **node features**
֍ $v$: a node in $V$; $N(v)$: the set of neighbors of $v$.

Slide by Jure Leskovec

### Visual Description
This slide defines the basic mathematical notation used for graphs. It is text-based.

## Page 41
### Content
Adapting this idea for arbitrary graphs

Some bits of notation: 
֍ $V$ is the **vertex set**
֍ $A$ is the **adjacency matrix** (assume binary)
֍ $X \in \mathbb{R}^{m \times |V|}$ is a matrix of **node features**
֍ $v$: a node in $V$; $N(v)$: the set of neighbors of $v$.
֍ **Node features:**
֍ Social networks: User profile, User image
֍ Biological networks: Gene expression profiles, gene functional information
֍ When there is no node feature in the graph dataset:
֍ Indicator vectors (one-hot encoding of a node)
֍ Vector of constant 1: [1, 1, ..., 1]

Slide by Jure Leskovec

### Visual Description
This slide expands on the concept of node features with real-world examples and fallback options. It is text-based.

## Page 42
### Content
Adapting this idea for arbitrary graphs

(Diagram comparing Grid and Graph)
**Grid** vs **Graph**

$y_j = w_1 x_{j,1} + \dots + w_4 x_{j,4}$
֍ Constant number of neighbors

$y_j = w_1 x_{j,5} + \dots + w_5 x_{j,2}$
֍ Different number of neighbors

Figures by Michael Bronstein

### Visual Description
The slide highlights a key difference between grids and general graphs.
- **Grid**: A regular $5 \times 5$ grid of nodes is shown. A central red node $j$ is connected to exactly 4 neighbors (labeled 1, 2, 3, 4).
- **Graph**: An irregular graph is shown. A central black node $j$ is connected to 5 neighbors (labeled 1, 2, 3, 4, 5).
- The equations show that for a grid, the number of terms in the weighted sum is constant, whereas for a graph, it varies depending on the node's degree.

## Page 43
### Content
Adapting this idea for arbitrary graphs

(Same diagram as page 42)

**Grid** vs **Graph**
֍ Constant number of neighbors
֍ **Fixed ordering of neighbors**

֍ Different number of neighbors
֍ **No ordering of neighbors**

Figures by Michael Bronstein

### Visual Description
This slide adds another distinction: grids have a natural, fixed ordering of neighbors (e.g., top, bottom, left, right), while general graphs have no inherent ordering. The visual is the same as page 42.

## Page 44
### Content
Adapting this idea for arbitrary graphs

(Diagram showing two different graph neighborhoods)

For arbitrary graph, “neighborhood” looks different at different nodes. 
(Different # of neighbors, can’t “slide” a filter over the graph.)

Often want output to only depend on graph up to isomorphism (i.e. 
only depend on topology; permuting nodes should not change output).

Figures by Jure Leskovec

### Visual Description
The slide illustrates the structural variability of neighborhoods in a graph.
- Two graphs are shown. 
- In the first, a small blue box highlights a node and its 3 neighbors.
- In the second, a larger blue box highlights a node in a much denser part of the graph with many more neighbors.
- This visualizes why a fixed-size "sliding filter" like in CNNs doesn't work for general graphs.

## Page 45
### Content
Permutation invariance

Naïve idea: just feed adjacency network (+ possibly features) into a 
(standard) feedforward/convolutional neural network. 

Problem: this is sensitive to permutation of nodes. 

(Diagram showing two different orderings of the same graph)
Order plan 1 vs Order plan 2

Figures by Jure Leskovec

### Visual Description
The slide explains why node ordering matters.
- It shows two "Order plans" for the same 6-node graph.
- In **Order plan 1**, nodes are labeled A through F in one specific arrangement. This leads to a specific node feature matrix $X_1$ (colored bars) and adjacency matrix $A_1$ (a grid of blue and gray squares).
- In **Order plan 2**, the same graph is shown, but the labels A-F have been permuted (e.g., node A is now where node F was). This results in a different feature matrix $X_2$ and a different adjacency matrix $A_2$.
- The visual point is that $A_1$ and $A_2$ look different even though they represent the same graph structure.

## Page 46
### Content
Permutation invariance

The prediction function f we want to learn is 
**permutation invariant:** 
$f(A_1, X_1) = f(A_2, X_2)$

(Same graph diagram as page 45)
For two order plans, output of f should be the same!

Figures by Jure Leskovec

### Visual Description
This slide defines permutation invariance: the final output of the network should be the same regardless of how the nodes are ordered or labeled. It uses the same graph diagrams as the previous page.

## Page 47
### Content
Permutation equivariance

For intermediate layers calculating features, this is not the right notion. 
We want to learn functions f that represent features for
all nodes that are **permutation equivariant:** 
$F(PX, PAP^T) = PF(X, A)$

(Diagram showing node representations for two orderings)
Order plan 1 vs Order plan 2

Figures by Jure Leskovec

### Visual Description
The slide introduces permutation equivariance for node-level features.
- It uses the same two graph orderings.
- Below each graph, it shows the resulting feature vectors for all nodes as a column of colored boxes.
- In Order plan 1, node C's representation is at the 3rd position.
- In Order plan 2, node D is at the 3rd position, but node C's representation has moved to the 6th position.
- The text explains that if we permute the input nodes, the output node features should be permuted in the exact same way.

## Page 48
### Content
Graph neural networks: repetition of 
equivariant + invariant layer

(Diagram of a multi-layer GNN)
Permutation equivariant -> Permutation equivariant -> Permutation invariant

Figures by Jure Leskovec

### Visual Description
The slide shows the high-level architecture of a GNN.
- It depicts a sequence of three graph layers.
- The first two layers are labeled "Permutation equivariant". They take a graph as input and produce updated node features, maintaining the graph structure.
- The final layer is labeled "Permutation invariant". It aggregates all node features into a single global representation (represented by a single gray dot at the end).
- Dashed lines show how nodes in one layer contribute to nodes in the next.

## Page 49
### Content
How to systematically enforce 
equivariance

Idea: generate embeddings based on neighborhood computation graph 

(Diagram of an input graph and its computation tree for node A)
INPUT GRAPH -> (Computation tree)

Figures by Jure Leskovec

### Visual Description
The slide introduces the concept of a computation graph for a node.
- On the left is an "INPUT GRAPH" with nodes A through F. Node A is the "TARGET NODE".
- On the right is the computation tree for node A. 
- Node A is at the root (left). It receives information from its neighbors B, C, and D (middle layer).
- Each of those neighbors, in turn, receives information from their own neighbors (right layer). For example, B receives from A and C.
- This shows how a node's embedding is built by aggregating information from its local neighborhood.

## Page 50
### Content
How to systematically enforce 
equivariance

Idea: generate embeddings based on neighborhood computation graph 

(Same diagram as page 49 with pink arrows)
**Neural networks**

Figures by Jure Leskovec

### Visual Description
This slide adds pink arrows to the computation tree diagram. The arrows point to the gray boxes where information is aggregated, indicating that these aggregations are performed by neural network layers.

## Page 51
### Content
How to systematically enforce 
equivariance

Embeddings at k-th layer will depend on the k-hop neighborhood of the 
graph:

(Same diagram as page 49 with layer labels)
Layer-2 <- Layer-1 <- Layer-0

Figures by Jure Leskovec

### Visual Description
The slide labels the layers of the computation tree.
- **Layer-0**: The input features for each node ($X_A, X_B, \dots$).
- **Layer-1**: The first level of aggregated embeddings for nodes B, C, and D.
- **Layer-2**: The final aggregated embedding for the target node A.
- This illustrates that a $k$-layer GNN considers information from a node's $k$-hop neighborhood.

## Page 52
### Content
How to systematically enforce 
equivariance

**GNN Layer = Message + Aggregation**
֍ Different instantiations under this perspective
֍ GCN, GraphSAGE, GAT, ...

(Diagram of a single GNN layer)
(2) Aggregation
(1) Message

Slide by Jure Leskovec

### Visual Description
The slide breaks down a GNN layer into two steps.
- A diagram shows a target node (yellow) at the top.
- Below it is a gray box labeled "(2) Aggregation".
- Below that are three smaller gray boxes labeled "(1) Message", each receiving input from a neighbor node (blue, green, red).
- This visualizes the flow: neighbors compute messages, which are then aggregated to update the target node.

## Page 53
### Content
How to systematically enforce 
equivariance

֍ **(1) Message:** each node computes a message
$\mathbf{m}_u^{(l)} = \text{MSG}^{(l)}(\mathbf{h}_u^{(l-1)}), u \in \{N(v) \cup v\}$

Slide by Jure Leskovec

### Visual Description
This slide provides the mathematical definition for the "Message" step. It is text-based.

## Page 54
### Content
How to systematically enforce 
equivariance

֍ **(1) Message:** each node computes a message
$\mathbf{m}_u^{(l)} = \text{MSG}^{(l)}(\mathbf{h}_u^{(l-1)}), u \in \{N(v) \cup v\}$
֍ **(2) Aggregation:** aggregate messages from neighbors
$\mathbf{h}_v^{(l)} = \text{AGG}^{(l)}(\{\mathbf{m}_u^{(l)}, u \in N(v)\}, \mathbf{m}_v^{(l)})$

Slide by Jure Leskovec

### Visual Description
This slide adds the mathematical definition for the "Aggregation" step. It is text-based.

## Page 55
### Content
How to systematically enforce 
equivariance

֍ **(1) Message:** each node computes a message
$\mathbf{m}_u^{(l)} = \text{MSG}^{(l)}(\mathbf{h}_u^{(l-1)}), u \in \{N(v) \cup v\}$
֍ **(2) Aggregation:** aggregate messages from neighbors
$\mathbf{h}_v^{(l)} = \text{AGG}^{(l)}(\{\mathbf{m}_u^{(l)}, u \in N(v)\}, \mathbf{m}_v^{(l)})$
֍ **Nonlinearity (activation):** Adds expressiveness
֍ Often written as $\sigma(\cdot)$: ReLU($\cdot$), Sigmoid($\cdot$), ... 
֍ Can be added to **message or aggregation**

(Small diagram of GNN layer)

Slide by Jure Leskovec

### Visual Description
This slide adds the concept of non-linear activation functions to the GNN layer definition. A small version of the message/aggregation diagram from page 52 is included at the bottom.

## Page 56
### Content
How to systematically enforce 
equivariance

֍ **(1) Message computation**
֍ **Message function:** $\mathbf{m}_u^{(l)} = \text{MSG}^{(l)}(\mathbf{h}_u^{(l-1)})$
֍ **Intuition:** Each node will create a message, which will be sent to other nodes later
֍ **Example:** A Linear layer $\mathbf{m}_u^{(l)} = \mathbf{W}^{(l)}\mathbf{h}_u^{(l-1)}$
֍ Multiply node features with weight matrix $\mathbf{W}^{(l)}$

(Diagram highlighting the message step)

Slide by Jure Leskovec

### Visual Description
The slide focuses on the message step. 
- It shows the input graph on the left.
- On the right, it shows the GNN layer diagram with a red dashed box around the "(1) Message" part, highlighting that this is where individual node features are transformed before being sent.

## Page 57
### Content
How to systematically enforce 
equivariance

֍ **(2) Aggregation**
֍ **Intuition:** Each node will aggregate the messages from node $v$’s neighbors
$\mathbf{h}_v^{(l)} = \text{AGG}^{(l)}(\{\mathbf{m}_u^{(l)}, u \in N(v)\})$
֍ **Example:** Sum($\cdot$), Mean($\cdot$) or Max($\cdot$) aggregator
֍ $\mathbf{h}_v^{(l)} = \text{Sum}(\{\mathbf{m}_u^{(l)}, u \in N(v)\})$

(Diagram highlighting the aggregation step)

Slide by Jure Leskovec

### Visual Description
The slide focuses on the aggregation step.
- It shows the input graph on the left.
- On the right, it shows the GNN layer diagram with a red dashed box around the "(2) Aggregation" part, highlighting where the incoming messages are combined.

## Page 58
### Content
Some examples of GNN layers

֍ **(1) Graph Convolutional Networks (GCN)**
$\mathbf{h}_v^{(l)} = \sigma\left( \mathbf{W}^{(l)} \sum_{u \in N(v)} \frac{\mathbf{h}_u^{(l-1)}}{|N(v)|} \right)$

֍ **How to write this as Message + Aggregation?**
(Formula broken down):
$\mathbf{h}_v^{(l)} = \sigma\left( \text{Aggregation: } \sum_{u \in N(v)} \text{Message: } \mathbf{W}^{(l)} \frac{\mathbf{h}_u^{(l-1)}}{|N(v)|} \right)$

Slide by Jure Leskovec

### Visual Description
The slide shows how the popular GCN model fits into the message-passing framework. 
- The main formula is shown at the top.
- Below, the same formula is repeated with colored boxes: an orange box around the summation labeled "Aggregation" and a red dashed box around the term inside labeled "Message".
- A small GNN layer diagram is shown on the right.

## Page 59
### Content
Some examples of GNN layers

֍ **(2) GraphSAGE**
$\mathbf{h}_v^{(l)} = \sigma\left( \mathbf{W}^{(l)} \cdot \text{CONCAT}\left( \mathbf{h}_v^{(l-1)}, \text{AGG}(\{\mathbf{h}_u^{(l-1)}, \forall u \in N(v)\}) \right) \right)$

֍ **How to write this as Message + Aggregation?**
֍ **Message** is computed within the AGG($\cdot$)
֍ **Two-stage aggregation**
֍ **Stage 1:** Aggregate from node neighbors
$\mathbf{h}_{N(v)}^{(l)} \leftarrow \text{AGG}(\{\mathbf{h}_u^{(l-1)}, \forall u \in N(v)\})$
֍ **Stage 2:** Further aggregate over the node itself
$\mathbf{h}_v^{(l)} \leftarrow \sigma(\mathbf{W}^{(l)} \cdot \text{CONCAT}(\mathbf{h}_v^{(l-1)}, \mathbf{h}_{N(v)}^{(l)}))$

Slide by Jure Leskovec

### Visual Description
This slide explains the GraphSAGE model. It is entirely text-based with mathematical formulas.

## Page 60
### Content
Some examples of GNN layers

֍ **Mean:** Take a weighted average of neighbors
$\text{AGG} = \text{Aggregation: } \sum_{u \in N(v)} \text{Message computation: } \frac{\mathbf{h}_u^{(l-1)}}{|N(v)|}$

֍ **Pool:** Transform neighbor vectors and apply symmetric vector function Mean($\cdot$) or Max($\cdot$)
$\text{AGG} = \text{Aggregation: Mean}(\{\text{Message computation: MLP}(\mathbf{h}_u^{(l-1)})\}, \forall u \in N(v)\})$

֍ **LSTM:** Apply LSTM to reshuffled of neighbors
$\text{AGG} = \text{Aggregation: LSTM}([\mathbf{h}_u^{(l-1)}, \forall u \in \pi(N(v))])$

Slide by Jure Leskovec

### Visual Description
The slide lists different types of aggregation functions used in GNNs. Each formula has colored boxes identifying the "Aggregation" and "Message computation" parts. It is text-based.

## Page 61
### Content
How expressive can GNNs be?

**Key restriction:** if node features are the same, 
and two nodes (e.g. 1 and 2) have identical 
computation graph, GNN cannot distinguish 
them. 

(Diagram of a graph and its node embeddings)
Graph with nodes 1-5 -> Embeddings

Slide by Jure Leskovec

### Visual Description
The slide discusses the expressive power of GNNs.
- At the top right is a simple graph with 5 nodes.
- Below it, the computation trees for each of the 5 nodes are shown.
- Nodes 1 and 2 have identical tree structures.
- At the top, a long horizontal box labeled "Embedding" shows colored dots. 
- Both node 1 and node 2 are mapped to the same pink dot, indicating that the GNN cannot distinguish them because their local neighborhoods are structurally identical.
- Nodes 3, 4, and 5 have different tree structures and are mapped to different colored dots (blue, green, purple).

## Page 62
### Content
How expressive can GNNs be?

**Key restriction:** if node features are the same, 
and two nodes (e.g. 1 and 2) have identical 
computation graph, GNN cannot distinguish 
them. 

(Diagram highlighting nodes 1 and 2)

Slide by Jure Leskovec

### Visual Description
This slide uses the same visual as page 61 but focuses specifically on nodes 1 and 2. It shows their identical computation trees side-by-side to emphasize why they result in the same embedding.

## Page 63
### Content
How expressive can GNNs be?

**Maximizing expressiveness:** most expressive 
GNNs should map subtrees injectively (i.e. map 
different subtrees to different embeddings). 

(Diagram showing injective mapping to embedding space)
Subtrees -> Embedding space $\mathbb{R}^d$

Slide by Jure Leskovec

### Visual Description
The slide illustrates the goal of a highly expressive GNN.
- At the bottom, a box labeled "Subtrees" contains the computation trees for all 5 nodes.
- Pink arrows point from each tree to a distinct colored dot in a box above labeled "Embedding space $\mathbb{R}^d$".
- This visualizes an injective mapping where every unique neighborhood structure gets a unique embedding.

## Page 64
### Content
Maximizing expressiveness

֍ **Observation:** Neighbor aggregation can be abstracted as **a function over a multi-set** (a set with repeating elements).

(Diagram of neighbor aggregation as a multi-set function)
Neighbor aggregation <-> Equivalent <-> Multi-set function

(Examples of multi-sets)
Same color indicates the same features.

Slide by Jure Leskovec

### Visual Description
The slide links neighbor aggregation to multi-set functions.
- On the left, a "Neighbor aggregation" diagram shows a node receiving information from two identical neighbors (yellow circles).
- A double-headed gray arrow labeled "Equivalent" points to a "Multi-set function" diagram, which shows a box containing two yellow circles.
- On the right, "Examples of multi-set" are shown as boxes containing different combinations of colored circles (e.g., one yellow and one blue, or two yellow and one blue).
- This shows that aggregation must handle sets where the same feature vector can appear multiple times.

## Page 65
### Content
Maximizing expressiveness

**Theorem** [Xu et al. ICLR 2019]
Any injective multi-set function can be expressed 
as:
$\Phi\left( \sum_{x \in S} f(x) \right)$
- $\Phi$: Some non-linear function
- $f(x)$: Some non-linear function
- $\sum$: Sum over multi-set

$S$: multi-set
(Example): Multi-set with one yellow and two blue circles -> $\Phi(f(\text{yellow}) + f(\text{blue}) + f(\text{blue}))$

Slide by Jure Leskovec

### Visual Description
The slide presents a key theorem for GNN expressiveness. 
- It shows the mathematical form of a function that can injectively map any multi-set. 
- Pink arrows label the components of the formula: two non-linear functions $\Phi$ and $f$, and a summation over the multi-set $S$.
- An example at the bottom shows how a multi-set of colored circles is transformed into this sum-of-functions form.

## Page 66
### Content
Maximizing expressiveness

**Proof Intuition:** [Xu et al. ICLR 2019]
$f$ produces one-hot encodings of colors. Summation of 
the one-hot encodings retains all the information about 
the input multi-set.
$\Phi\left( \sum_{x \in S} f(x) \right)$

Example: $\Phi(f(\text{yellow}) + f(\text{blue}) + f(\text{blue}))$
One-hot: $\begin{pmatrix} 1 \\ 0 \end{pmatrix} + \begin{pmatrix} 0 \\ 1 \end{pmatrix} + \begin{pmatrix} 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$

Slide by Jure Leskovec

### Visual Description
The slide provides an intuitive proof for the theorem. 
- It shows that if $f$ maps each unique feature to a one-hot vector, then summing these vectors creates a count of each feature type. 
- In the example, the final vector $(1, 2)^T$ perfectly represents the multi-set containing one yellow and two blue items.

## Page 67
### Content
Maximizing expressiveness

A sequence of injective multi-set layers is equivalent in power to the 
**Weisfeiler-Lehman** test for graph isomorphism: 

(Diagram of the WL test process)

Slide by Michael Bronstein

### Visual Description
The slide connects GNNs to the Weisfeiler-Lehman (WL) graph isomorphism test.
- It shows two different graphs being processed through several iterations.
- In each step, nodes are colored based on their own color and their neighbors' colors (represented by formulas like $\phi(\text{color}, \{\text{neighbor colors}\})$).
- After several steps, the distribution of colors in each graph is shown as a histogram.
- If the histograms are different, the test has proven the graphs are not isomorphic.

## Page 68
### Content
Maximizing expressiveness

**Weisfeiler-Lehman** test is necessary but not sufficient to determine 
isomorphism: 

(Diagram of two non-isomorphic graphs that WL cannot distinguish)
GNNs are equivalent to Weisfeiler-Lehman test
**cannot count triangles**

Slide by Michael Bronstein

### Visual Description
The slide shows the limitations of the WL test and, by extension, standard GNNs.
- Two graphs are shown: a $2 \times 2$ square grid on the left, and two triangles joined at a single vertex on the right.
- Both graphs have the same number of nodes and the same degree for every node.
- The text states that the WL test cannot distinguish these two graphs and specifically mentions that it "cannot count triangles".

## Page 69
### Content
Maximizing expressiveness

Various ways to “pre-color” graph (i.e. start with 0-th layer features 
that are not uniform), of varying success. 

֍ Random node features
֍ Graph Laplacian eigenvectors
֍ Graph substructure counts
֍ Bags of subgraphs

(Diagram of a graph with highlighted substructures)
1 triangle, 1 5-cycle
1 4-clique, 1 triangle, 3 5-cycles
3 triangles, 2 4-cycles

Slide by Michael Bronstein

### Visual Description
The slide discusses methods to improve GNN expressiveness by adding more informative initial node features.
- On the right, a complex graph is shown with various sub-structures highlighted in different colors (red triangles, yellow cycles, blue cliques).
- Labels point to different nodes, listing the number of specific sub-structures they are part of (e.g., "1 triangle, 1 5-cycle").
- This illustrates the "Graph substructure counts" approach.

## Page 70
### Content
Many practical training issues

Increasing depth by just adding more layers is frequently problematic:

(Table of node classification accuracy)
Model | 2-Layer | 4-Layer | 8-Layer | 16-Layer | 32-Layer | 64-Layer
--- | --- | --- | --- | --- | --- | ---
GCN-res | 88.18 | 86.50 | 84.83 | 78.60 | 59.82 | 39.71
PairNorm | 79.98 | 82.32 | 81.52 | 82.29 | 81.91 | 81.72
NodeNorm | 89.53 | 88.60 | 88.02 | 88.41 | 88.30 | 87.40

Typical results of node classification accuracy on CoautorCS dataset

Slide by Michael Bronstein

### Visual Description
The slide presents empirical evidence that deep GNNs are hard to train.
- A table shows accuracy on the "CoautorCS dataset" for three models across different depths.
- For the standard "GCN-res" model, accuracy drops drastically as depth increases, falling from ~88% at 2 layers to ~40% at 64 layers.
- "PairNorm" and "NodeNorm" are shown as techniques that help maintain performance at greater depths.

## Page 71
### Content
Many practical training issues

Increasing depth by just adding more layers is frequently problematic:

(Three scatter plots showing oversmoothing)
$D_M=1.7285, d=0$ | $D_M=0.4535, d=2$ | $D_M=0.0115, d=99$

(d = depth, “component” = connected component, size indicates degree of node)

What happens is that at deeper layers, node embeddings get 
progressively more similar at different nodes (**oversmoothing**). 

Figure adapted from KDD 2020 tutorial on GNNs 

### Visual Description
The slide visualizes the "oversmoothing" problem.
- Three scatter plots show node embeddings in a 2D space at different depths ($d$).
- At **$d=0$**, the embeddings are widely spread out, showing distinct features for different nodes.
- At **$d=2$**, the embeddings have started to cluster together.
- At **$d=99$**, all node embeddings have collapsed into a single tight line or point.
- This visualizes how deep GNNs can lose the ability to distinguish between nodes as their representations become identical.

## Page 72
### Content
Many practical training issues

Increasing depth by just adding more layers is frequently problematic:

(Diagrams of graph volume growth and bottlenecks)
In small-world graphs metric ball volume $vol(B_k) = \sum_{j \in B_k} d_j$ 
grows exponentially with ball radius $k$

Long-distance dependency + Fast volume growth = **Over-squashing**

(Diagram labeled "Bottleneck")

Slide by Michael Bronstein

### Visual Description
The slide explains "over-squashing".
- At the top left, a small-world graph is shown.
- At the top right, a tree-like diagram shows how the number of reachable nodes grows exponentially with each step (radius $k$).
- At the bottom right, a "Bottleneck" diagram shows many information paths (red arrows) from a large set of nodes on the left being forced through a single narrow connection to reach a node on the right.
- This illustrates that a single node's fixed-size embedding cannot possibly store all the information from its exponentially growing neighborhood.

## Page 73
### Content
Many practical training issues

“Graph rewiring” strategies attempt to fix this: 

**Decouple input graph from information propagation graph**
֍ Neighbourhood sampling (GraphSAGE)
֍ Multi-hop filters (SIGN)
֍ Complete graph
֍ Topology diffusion (DIGL)
֍ Learnable graph (Dynamic Graph CNN)

(Diagram showing a graph before and after rewiring)

Slide by Michael Bronstein

### Visual Description
The slide introduces "graph rewiring" as a solution to training issues.
- It shows two versions of a complex graph.
- The graph on the left is the original input graph.
- The graph on the right is a "rewired" version with many additional red edges.
- This visualizes the idea of changing the graph's connectivity (e.g., making it more like a complete graph or adding long-range shortcuts) to improve the flow of information during training.\n