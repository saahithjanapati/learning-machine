# Lecture_18_applications

Source: `materials/archive/Lecture_18_applications.pdf`
Duplicate equivalents: `Lecture_18_applications.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 25

## Page 1
### Content
# 10708 Probabilistic Graphical Models: Spring 2026
## Andrej Risteski
### Machine Learning Department

## Lecture 18: Applications of GANs

### Visual Description
Text-only slide.

---

## Page 2
### Content
## Conditional GANs (Mirza-Osindero ’14)

What if we want to have a notion of “class” and have class-labeled data?

![Generated MNIST digits grid](grid_mnist.png)
Figure 2: Generated MNIST digits, each row conditioned on one label
Figure from Mirza-Osindero ‘14

### Visual Description
A grid of handwritten digits (MNIST) arranged in 10 rows, where each row corresponds to a digit from 0 to 9. The digits are generated and show variations within each class.

---

## Page 3
### Content
## Conditional GANs (Mirza-Osindero ’14)

Discriminator and generator receive an image as well as a class label. The loss is then:

$$\min_G \max_D V(D, G) = \mathbb{E}_{\mathbf{x} \sim p_{\text{data}}(\mathbf{x})}[\log D(\mathbf{x}|\mathbf{y})] + \mathbb{E}_{\mathbf{z} \sim p_z(\mathbf{z})}[\log(1 - D(G(\mathbf{z}|\mathbf{y})))]$$

![Conditional GAN Architecture and MNIST Example](cgan_diagram.png)

### Visual Description
On the left, a block diagram shows the architecture of a Conditional GAN: noise $Z$ and class $C$ are inputs to the Generator $G$, which produces $X_{\text{fake}}$. Both $X_{\text{real}}$ and $X_{\text{fake}}$, along with the class label $C$, are inputs to the Discriminator $D$, which outputs a real/fake classification. On the right, the MNIST digit grid from the previous page is shown again, with an arrow pointing from a one-hot vector $[0, 1, 0, 0, 0, 0, 0, 0, 0, 0]$ to the row of generated '1's.

---

## Page 4
### Content
## Auxillary classifier GANs (Odena et al ‘16)

**Idea:** give discriminator **only** image, and ask it to both predict label, and tell real/fake.

Let us define the “distinguishing” loss and the class prediction loss:
$$L_S = \mathbb{E}[\log P(S = \text{real} \mid X_{\text{real}})] + \mathbb{E}[\log P(S = \text{fake} \mid X_{\text{fake}})]$$
$$L_C = \mathbb{E}[\log P(C = c \mid X_{\text{real}})] + \mathbb{E}[\log P(C = c \mid X_{\text{fake}})]$$

Discriminator is trained to maximize $L_S + L_C$
Generator is trained to maximize $L_C - L_S$

(i.e. discriminator tries to both distinguish and predict label; generator tries to fool discriminator and generate “classifiable” images)

**Main benefit:** stabler training

### Visual Description
A block diagram on the left shows the AC-GAN architecture: noise $Z$ and class $C$ enter the Generator $G$ to produce $X_{\text{fake}}$. The Discriminator $D$ receives either $X_{\text{real}}$ or $X_{\text{fake}}$ and has two output heads: one for the real/fake decision and another for predicting the class label $c$.

---

## Page 5
### Content
## Auxillary classifier GANs (Odena et al ‘16)

![AC-GAN generated ImageNet samples](acgan_samples.png)
Figure 1. $128 \times 128$ resolution samples from 5 classes taken from an AC-GAN trained on the ImageNet dataset. Note that the classes shown have been selected to highlight the success of the model and are not representative. Samples from all ImageNet classes are linked later in the text.

Figure from Odena et al ‘16

### Visual Description
Five sets of $2 \times 2$ image grids showing generated samples for specific ImageNet classes: monarch butterfly, goldfinch, daisy, redshank, and grey whale. The images are colorful and recognizable as the intended classes.

---

## Page 6
### Content
## Superresolution from a single image (Ledig et al ‘17)

**Task:** estimate a high-resolution version of an image, given a low-resolution version of it.

**Training data:** high-resolution images, along with manually created low-res versions (e.g. by Gaussian filtering).

### Visual Description
Text-only slide.

---

## Page 7
### Content
## Superresolution from a single image (Ledig et al ‘17)

Outperforms approaches based on “pre-designed” features/losses.

![Superresolution comparison](sr_comparison.png)
Figure 2: From left to right: bicubic interpolation, deep residual network optimized for MSE, deep residual generative adversarial network optimized for a loss more sensitive to human perception, original HR image. Corresponding PSNR and SSIM are shown in brackets. [4x upscaling]

### Visual Description
Four versions of the same image (a person in traditional attire) are shown side-by-side to compare super-resolution methods:
1. **bicubic (21.59dB/0.6423):** Very blurry.
2. **SRResNet (23.53dB/0.7832):** Sharper but lacks fine texture.
3. **SRGAN (21.15dB/0.6868):** Shows much more realistic fine detail and texture, though PSNR is lower.
4. **original:** The high-resolution ground truth.

---

## Page 8
### Content
## Superresolution from a single image (Ledig et al ‘17)

Combines l2 loss on VGG-19 features with adversarial loss:

$$l_{VGG/i,j}^{SR} = \frac{1}{W_{i,j} H_{i,j}} \sum_{x=1}^{W_{i,j}} \sum_{y=1}^{H_{i,j}} (\phi_{i,j}(I^{HR})_{x,y} - \phi_{i,j}(G_{\theta_G}(I^{LR}))_{x,y})^2$$

$\phi_{i,j}$ The feature map for the j-th convolution (after activation) before the i-th maxpooling layer.

$$\min_{\theta_G} \max_{\theta_D} \mathbb{E}_{I^{HR} \sim p_{\text{train}}(I^{HR})}[\log D_{\theta_D}(I^{HR})] + \mathbb{E}_{I^{LR} \sim p_G(I^{LR})}[\log(1 - D_{\theta_D}(G_{\theta_G}(I^{LR})))]$$

![Superresolution comparison repeated](sr_comparison_small.png)
Figure 2: From left to right: bicubic interpolation, deep residual network optimized for MSE, deep residual generative adversarial network optimized for a loss more sensitive to human perception, original HR image. Corresponding PSNR and SSIM are shown in brackets. [4x upscaling]

### Visual Description
The slide contains mathematical formulas for the VGG-based content loss and the adversarial loss used in SRGAN. Below the math, the same comparison image from Page 7 is repeated at a smaller scale.
## Page 9
### Content
# Superresolution from a single image (Ledig et al ‘17)

Combines **l2 loss on VGG-19 features** with adversarial loss:

**Reconstruction loss**
- Encourage image features to be the same
- Capture coarse details

$$l_{VGG/i,j}^{SR} = \frac{1}{W_{i,j} H_{i,j}} \sum_{x=1}^{W_{i,j}} \sum_{y=1}^{H_{i,j}} (\phi_{i,j}(I^{HR})_{x,y} - \phi_{i,j}(G_{\theta_G}(I^{LR}))_{x,y})^2$$

$\phi_{i,j}$ The feature map for the j-th convolution (after activation) before the i-th maxpooling layer.

$$\min_{\theta_G} \max_{\theta_D} \mathbb{E}_{I^{HR} \sim p_{train}(I^{HR})}[\log D_{\theta_D}(I^{HR})] + \mathbb{E}_{I^{LR} \sim p_G(I^{LR})}[\log(1 - D_{\theta_D}(G_{\theta_G}(I^{LR})))]$$

Figure 2: From left to right: bicubic interpolation (21.59dB/0.6423), SRResNet (23.53dB/0.7832), SRGAN (21.15dB/0.6868), original HR image. Corresponding PSNR and SSIM are shown in brackets. [4x upscaling]

### Visual Description
The slide presents the mathematical formulation for reconstruction loss in a superresolution task. It features a comparison of four images of a person in traditional dress: a blurry bicubic interpolation, a smoother SRResNet result, a sharper but slightly different SRGAN result, and the original high-resolution image. The "l2 loss on VGG-19 features" and "Reconstruction loss" sections are highlighted.

---

## Page 10
### Content
# Superresolution from a single image (Ledig et al ‘17)

Combines l2 loss on VGG-19 features with **adversarial loss**:

**Photorealism loss**
- Distributional loss
- Fine grained details

$$l_{VGG/i,j}^{SR} = \frac{1}{W_{i,j} H_{i,j}} \sum_{x=1}^{W_{i,j}} \sum_{y=1}^{H_{i,j}} (\phi_{i,j}(I^{HR})_{x,y} - \phi_{i,j}(G_{\theta_G}(I^{LR}))_{x,y})^2$$

$\phi_{i,j}$ The feature map for the j-th convolution (after activation) before the i-th maxpooling layer.

$$\boxed{\min_{\theta_G} \max_{\theta_D} \mathbb{E}_{I^{HR} \sim p_{train}(I^{HR})}[\log D_{\theta_D}(I^{HR})] + \mathbb{E}_{I^{LR} \sim p_G(I^{LR})}[\log(1 - D_{\theta_D}(G_{\theta_G}(I^{LR})))]}$$

Figure 2: From left to right: bicubic interpolation, SRResNet, SRGAN, original. [4x upscaling]

### Visual Description
This slide is nearly identical to Page 9 but shifts focus to the adversarial loss component. The terms "adversarial loss" and "Photorealism loss" are highlighted, and the adversarial loss equation is enclosed in a blue box. The same image comparison from the previous page is shown at the bottom.

---

## Page 11
### Content
# Image-to-image translation (Pix2Pix, Isola et al ‘17)

**Goal:** “translate” one “style” of image to another, given as training paired images of the styles.

Example results on several image-to-image translation problems. In each case we use the same architecture and objective, simply training on different data:
- **Labels to Street Scene:** Semantic map input $\rightarrow$ Photo output
- **Labels to Facade:** Architectural labels input $\rightarrow$ Photo output
- **BW to Color:** Black and white photo input $\rightarrow$ Color photo output
- **Aerial to Map:** Satellite image input $\rightarrow$ Map output
- **Day to Night:** Daytime landscape input $\rightarrow$ Nighttime landscape output
- **Edges to Photo:** Line drawing input $\rightarrow$ Realistic photo output

### Visual Description
The slide displays six pairs of images demonstrating various image-to-image translation tasks. Each pair consists of an "input" image (e.g., a label map, a sketch, or a B&W photo) and a corresponding "output" image generated by the Pix2Pix model.

---

## Page 12
### Content
# Image-to-image translation (Pix2Pix, Isola et al ‘17)

**Loss:** generator tries to “translate”; discriminator tries to distinguish whether it’s a “real” translation or “fake” translation.

$$\arg \min_G \max_D \mathbb{E}_{\mathbf{x,y}} [ \log D(\mathbf{x, G(x)}) + \log(1 - D(\mathbf{x, y})) ]$$

### Visual Description
The slide illustrates the Pix2Pix GAN architecture with a diagram. On the left, a generator $G$ takes a sketch $x$ of a shoe and produces a colored version $G(x)$. This generated pair $(x, G(x))$ is fed into a discriminator $D$, which classifies it as "fake". On the right, a real pair $(x, y)$ consisting of the sketch and the actual photo is fed into the discriminator $D$, which classifies it as "real". The minimax loss function is provided at the bottom.

---

## Page 13
### Content
# Image-to-image translation (Pix2Pix, Isola et al ‘17)

Figure 16: Example results of our method on automatically detected edges $\rightarrow$ handbags, compared to ground truth.

- **Input:** Edge-detected sketches of various handbags and backpacks.
- **Ground truth:** The original photographs from which the edges were detected.
- **Output:** The images generated by the model from the edge inputs.

### Visual Description
A grid of images showing six examples of handbag/backpack generation. Each example has three columns: the edge-detected "Input", the "Ground truth" photo, and the model's "Output". The outputs closely resemble the ground truth in shape and color.

---

## Page 14
### Content
# Image-to-image translation (Pix2Pix, Isola et al ‘17)

Figure 11: Example applications developed by online community based on our pix2pix codebase:
- **#edges2cats** by Christopher Hesse
- **Background removal** by Kaihu Chen
- **Palette generation** by Jack Qiao
- **Sketch $\rightarrow$ Portrait** by Mario Klingemann
- **Sketch $\rightarrow$ Pokemon** by Bertrand Gondouin
- **“Do As I Do”** pose transfer by Brannon Dorsey
- **#fotogenerator** by Bosman et al.

### Visual Description
The slide showcases a collage of creative applications of the Pix2Pix model developed by the community. Examples include turning a simple box sketch into a realistic cat, removing backgrounds from portraits, generating color palettes, and transferring human poses.

---

## Page 15
### Content
# Unpaired image-to-image translation (CycleGAN, Zhu et al ‘17)

Major problem with prior approach: we need **paired** samples.

(How do you “translate” a photograph to the style of Van Gogh? No “paired” up photos…)

Can we solve “unpaired” version of problem?

- **Paired:** Training data consists of pairs $\{x_i, y_i\}$ (e.g., a sketch and its corresponding shoe photo).
- **Unpaired:** Training data consists of two independent sets $X$ (e.g., photos of landscapes) and $Y$ (e.g., Van Gogh paintings) with no direct correspondence between individual images.

### Visual Description
The slide contrasts "Paired" and "Unpaired" data. On the left, "Paired" shows sets of sketches and their matching shoe photos. On the right, "Unpaired" shows a set $X$ of landscape photos and a set $Y$ of various landscape paintings, with no one-to-one mapping between them.

---

## Page 16
### Content
# Unpaired image-to-image translation (CycleGAN, Zhu et al ‘17)

Major problem with prior approach: we need **paired** samples.

(How do you “translate” a photograph to the style of Van Gogh? No “paired” up photos…)

**Examples of Unpaired Translation:**
- **Monet $\leftrightarrow$ Photos:** Converting paintings to photos and vice versa.
- **Zebras $\leftrightarrow$ Horses:** Changing the species of animals in a scene.
- **Summer $\leftrightarrow$ Winter:** Changing the season of a landscape.
- **Style Transfer:** A single photograph translated into the styles of Monet, Van Gogh, Cezanne, and Ukiyo-e.

### Visual Description
The slide displays several successful results from CycleGAN. The top rows show bidirectional translations between Monet paintings and photos, zebras and horses, and summer and winter scenes. The bottom row shows one original photograph of a field transformed into four different artistic styles.
## Page 17
### Content
# Unpaired image-to-image translation (CycleGAN, Zhu et al ‘17)

**Main idea:**

* Train *two* generators $F, G$, s.t.
    * $F$ translates from domain X to domain Y,
    * $G$ translates from domain Y to domain X.
* **Requirement:** $F(G(x)) \approx x, G(F(y)) \approx y$
* Discriminators $D_X, D_Y$ trying to recognize domains X, Y.

**“Cycle consistency”**

### Visual Description
The slide features a diagram illustrating the CycleGAN architecture. On the left, a box labeled $X$ contains a stack of horse images. On the right, a box labeled $Y$ contains a stack of zebra images. Between them are two cartoon figures representing generators: one dressed as a British Royal Guard (representing domain X) and one dressed as a stereotypical Frenchman (representing domain Y). Arrows show a cycle: from $X$ to $Y$ and back to $X$, and from $Y$ to $X$ and back to $Y$. Below each domain box is a discriminator ($D_X$ and $D_Y$) represented by an arrow pointing down from the domain label.

---
## Page 18
### Content
# Unpaired image-to-image translation (CycleGAN, Zhu et al ‘17)

**The CycleGAN loss:**

### Visual Description
The slide shows two flow diagrams for the cycle consistency loss.
* **Left diagram (Forward cycle):** An input image $x$ (horse) goes through generator $G$ to produce $\hat{Y}$ (zebra). This $\hat{Y}$ is checked by discriminator $D_Y$ and also passed through generator $F$ to produce $\hat{x}$ (reconstructed horse). The loss is $\|F(G(x)) - x\|_1$.
* **Right diagram (Backward cycle):** An input image $y$ (zebra) goes through generator $F$ to produce $\hat{X}$ (horse). This $\hat{X}$ is checked by discriminator $D_X$ and also passed through generator $G$ to produce $\hat{y}$ (reconstructed zebra). The loss is $\|G(F(y)) - y\|_1$.
* **Bottom diagrams:** Abstract representations of domains $X$ and $Y$ as boxes. Points represent images, and arrows show the mapping and reconstruction. The distance between the original point and the reconstructed point is labeled "reconstruction error".

---
## Page 19
### Content
# Unpaired image-to-image translation (CycleGAN, Zhu et al ‘17)

**The CycleGAN loss:**

$$\mathcal{L}_{GAN}(G, D_Y, X, Y) = \mathbb{E}_{y \sim p_{data}(y)}[\log D_Y(y)] + \mathbb{E}_{x \sim p_{data}(x)}[\log(1 - D_Y(G(x)))]$$

$$\mathcal{L}_{cyc}(G, F) = \mathbb{E}_{x \sim p_{data}(x)}[\|F(G(x)) - x\|_1] + \mathbb{E}_{y \sim p_{data}(y)}[\|G(F(y)) - y\|_1]$$

**Putting them together, we get:**

$$\mathcal{L}(G, F, D_X, D_Y) = \mathcal{L}_{GAN}(G, D_Y, X, Y) + \mathcal{L}_{GAN}(F, D_X, Y, X) + \lambda \mathcal{L}_{cyc}(G, F)$$

**We are trying to optimize:**

$$G^*, F^* = \arg \min_{G, F} \max_{D_X, D_Y} \mathcal{L}(G, F, D_X, D_Y)$$

### Visual Description
Text-only slide containing mathematical formulas for the GAN loss, cycle consistency loss, total loss, and the final optimization objective.

---
## Page 20
### Content
# Unpaired image-to-image translation (CycleGAN, Zhu et al ‘17)

### Visual Description
The slide displays a grid of images demonstrating style transfer. 
* The first column is labeled "Input" and shows four different landscape photographs.
* The subsequent columns are labeled "Monet", "Van Gogh", "Cezanne", and "Ukiyo-e", showing the input photographs transformed into the respective artistic styles.

---
## Page 21
### Content
# Unpaired image-to-image translation (CycleGAN, Zhu et al ‘17)

### Visual Description
The slide shows several pairs of "Input" and "Output" images demonstrating object transfiguration:
* **horse $\to$ zebra:** Three pairs showing horses in fields being transformed into zebras.
* **zebra $\to$ horse:** Three pairs showing zebras being transformed into horses.
* **apple $\to$ orange:** Three pairs showing piles of apples being transformed into oranges.
* **orange $\to$ apple:** Three pairs showing oranges being transformed into apples.

---
## Page 22
### Content
# Unpaired image-to-image translation (CycleGAN, Zhu et al ‘17)

Can definitely fail…

### Visual Description
The slide shows a failure case of the "horse $\to$ zebra" translation. 
* **Input:** A famous photo of Vladimir Putin riding a horse shirtless.
* **Output:** The horse has been given zebra stripes, but Putin's shirtless torso and arms have also been covered in zebra stripes, creating a surreal and incorrect result.

---
## Page 23
### Content
# Unpaired image-to-image translation (CycleGAN, Zhu et al ‘17)

Can definitely fail…

### Visual Description
The slide presents a $3 \times 3$ grid of image translation examples, some of which show artifacts or imperfect results:
* **apple $\to$ orange:** An apple becomes orange-colored but retains its exact apple shape.
* **zebra $\to$ horse:** A zebra's stripes are replaced by a blurry brown texture.
* **winter $\to$ summer:** A snowy forest is turned green, but the lighting and textures look artificial.
* **dog $\to$ cat:** A dog's face is warped to resemble a cat's features.
* **cat $\to$ dog:** A cat's face is warped to resemble a dog's features.
* **Monet $\to$ photo:** A painting is transformed into a realistic-looking photograph.
* **photo $\to$ Ukiyo-e:** A photo of a bridge at night is transformed into a Japanese woodblock print style.
* **photo $\to$ Van Gogh:** A photo is transformed into a style with thick, swirling brushstrokes.
* **iPhone photo $\to$ DSLR photo:** A photo of leaves is processed to have a shallower depth of field (blurred background).

---
## Page 24
### Content
# Applications to other domains too

Brain lesion segmentation (Bowles et al 2018)

### Visual Description
The slide shows a figure from a research paper (Bowles et al 2018). It contains three sets of brain MRI scans labeled (a) 5 training images, (b) 25 training images, and (c) 50 training images. Each set shows pairs of images: synthetic images on top and their nearest neighbors from the training set on the bottom. 
* **Caption:** "Fig. 3: Synthetic images (top of pair) with their nearest neighbours in the training set (bottom of pair) from GANs trained on patches from 5, 25 and 50 real MR images. Some local signs of successful augmentation are indicated using green (same lesions, different anatomy) and yellow (same anatomy, different lesions) arrows, and novel images (new anatomy and lesions) are shown with blue dots."
* Small colored arrows (green, yellow) and dots (blue) are visible on the MRI scans to highlight specific features as described in the caption.

---
## Page 25

### Content

# Applications to other domains too

CT scan segmentation (Sanfort et al, Nature 2019)

**Figure 1**

Examples of true IV contrast CT scans (left column) and synthetic non-contrast CT scans generated by a CycleGAN. The rightmost column shows unrelated example non-contrast images. Overall the synthetic non-contrast images appear convincing - even when significant abnormalities are present in the contrast CT scans.

### Visual Description

The slide features a large image labeled "Figure 1" showing a grid of medical CT scan cross-sections. The images are organized into columns comparing "True Contrast CT" with "Synthetic Non-Contrast CT" for several cases labeled A through F. A final column on the right shows "True Non-Contrast CT" images for reference. Small colored arrows (green, orange, white) point to specific anatomical features or abnormalities within the scans to demonstrate how the CycleGAN translation preserves or modifies these features.

---
