# recitations-03-recitation_2_10715

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/recitations-03-recitation_2_10715.pdf`
Duplicate equivalents: `recitations-03-recitation_2_10715.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 4

## Page 1
### Content
Linear and Logistic Regression

Outline:
1. Linear Regression
    a. Definition
    b. Loss Function + Optimization
    c. Poly Regression
    d. Regularization
2. Logistic Regression
    a. Definition
    b. Loss + Optimization
3. Multi-class Regression

Linear Regression: $h_{w,b}(x) = w \cdot x + b = \langle w, x \rangle + b$
Informally, all lines.

Question 1: How good is a line for a given set of points?
$l(h, (x, y))$

Two examples:
1. $l(h, (x, y)) = (h(x) - y)^2 \leftarrow$ Squared
2. $l(h, (x, y)) = |h(x) - y| \leftarrow$ Absolute Value

In general, squared loss penalizes larger values more heavily.
Absolute loss is less sensitive to outliers.
* There's also technical justification if losses are Gaussian.

Empirical Risk Function is
$L_S(h) = \frac{1}{m} \sum (h(x_i) - y) = \frac{1}{m} \sum l(h, (x, y))$
Avg. loss.

### Visual Description
Handwritten notes on lined paper. Includes an outline of the lecture topics. There are two small diagrams of coordinate axes: one showing a line in 2D and another showing a line in 3D. At the bottom, there is a larger graph showing two candidate lines ($l_1$ and $l_2$) attempting to fit a set of data points.

---
## Page 2
### Content
Question 2: Given a set of data, how can we find
$\text{argmin}_{w,b} L(h_{w,b}, (X, Y)) = \frac{1}{m} \sum l(h_{w,b}, (x, y))$
$= \frac{1}{m} \sum (w \cdot x + b - y)^2$ or $\frac{1}{m} \sum |w \cdot x + b - y|$.

Option 1: Closed form solution
For now, imagine that $X = \langle x, \dots, 1 \rangle$ so our problem is
$\frac{1}{m} \sum (w \cdot x_i - y_i)^2$
$\frac{1}{m} \sum \nabla_w (w \cdot x_i - y_i)^2 = 0$
$\frac{1}{m} \sum (2)(w \cdot x_i - y_i) x_i = 0$
$\frac{2}{m} \sum \langle w, x_i \rangle x_i = \frac{2}{m} \sum x_i y_i$

Matrix properties:
$(w^T x_i) x_i = x_i (x_i^T w) = (x_i x_i^T) w$
$\rightarrow \sum x_i x_i^T w = (\sum x_i x_i^T) w = \sum x_i y_i$
or $Aw = b$, $A = \sum x_i x_i^T$, $b = \sum x_i y_i$.
Then invert $A$: $w = A^{-1} b$.

Option 2: Gradient Descent
As before, remember gradient is
$\nabla L = \frac{2}{m} \sum \langle w, x_i \rangle x_i - x_i y_i$
So we let $w^{(t)} = w^{(t-1)} - \alpha \nabla L$.

### Visual Description
Text-only slide.

---
## Page 3
### Content
Note: w/ absolute value loss, we get
$\nabla L = - \sum \text{sign}(y_i - w^T x_i) x_i$

Question 3: What isn't covered by linear?
For example, polynomial functions of degree $n$
$p(x) = a_0 + a_1 x \dots$
Here, we have $n \cdot d$ weights in $d$ dimensions
$p(x) = a_0 + a_1 x_1 + a_2 x_1^2 \dots + b_0 + b_1 x_2 + b_2 x_2^2 \dots$
We can also view this as linear regression on a different basis: $\Psi(x) \rightarrow (1, x, x^2 \dots)$

Additionally, other constraints/objectives such as regularization.
We could penalize the weights, e.g., $||w||_2^2 = \sum w_i^2$.
So we solve
$\text{argmin}_w \frac{1}{m} \sum (\langle w, x_i \rangle - y_i)^2 + \alpha ||w||_2^2 \leftarrow$ Ridge Regression
or w/ L1 Lasso this is $||w||_1 = \sum |w_i|$.

Why do this?
1. To avoid overfitting: simpler / smaller weight predictors might be better.
2. Can improve stability.

Logistic Regression: $h_w(x) = \frac{1}{1 + \exp(-w \cdot x)} = \phi_{\text{sig}}(\langle w, x \rangle)$
Looks like:
$\leftarrow$ useful for binary prediction. For example, could represent $Pr[y=1]$.

A natural loss here is Binary Cross Entropy:
$l(h_w, (x, y)) = -y \log(h_w(x)) - (1-y) \log(1 - h_w(x))$
$= y \log(1 + \exp(-\langle w, x \rangle)) + (1-y) \log(1 + \exp(\langle w, x \rangle))$

Where does this come from? Let $\hat{y} = \frac{1}{1 + \exp(-\langle w, x \rangle)}$.
Then likelihood is $\hat{y}^y (1-\hat{y})^{1-y}$
log likelihood is $y \log \hat{y} + (1-y) \log(1-\hat{y})$
We want to minimize negative log likelihood so $-\log \hat{y} = \log(1 + \exp \dots)$

### Visual Description
Handwritten notes on lined paper. Includes two small graphs: one showing a wavy polynomial curve and another showing a sigmoid curve.

---
## Page 4
### Content
Our optimization problem is then
$\text{argmin}_w \frac{1}{m} \sum y_i \log(1 + \exp(-\langle w, x_i \rangle)) + (1-y_i) \log(1 + \exp(\langle w, x_i \rangle))$

With multiple predictors, you can have multi-class classification: one predictor for dog, one for cat, etc.
Then, given probabilities $Z_j = \phi_{\text{sig}}(\langle w_j, x \rangle)$ for a data point $x$, we normalize through softmax:
$\phi_{\text{softmax}}(z_1, \dots) = \frac{\exp(z_i)}{\sum \exp(z_j)}$
This ensures probabilities add to 1.

### Visual Description
Text-only slide.

---
