# recitations-02-recitation_2_slides_10715

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/recitations-02-recitation_2_slides_10715.pdf`
Duplicate equivalents: `recitations-02-recitation_2_slides_10715.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 13

## Page 1
### Content
# Linear Regression & Logistic Regression
Naveen Raman 10-715 Fall 2025 Recitation 2
### Visual Description
Text-only slide.

---
## Page 2
### Content
# Recitation 3
* Linear Regression
    * Definition
    * Loss Function & Optimization
    * Extension
        * Polynomial Regression
        * Regularization
* Logistic Regression
    * Definition
    * Loss Function & Optimization
* Multi-class Classification
### Visual Description
Text-only slide.

---
## Page 3
### Content
# Linear Regression
* Hypothesis Class
$$\mathcal{H}_{reg} = L_d = \{\mathbf{x} \mapsto \langle \mathbf{w}, \mathbf{x} \rangle + b : \mathbf{w} \in \mathbb{R}^d, b \in \mathbb{R}\}$$
* Loss Function
    * Squared Loss
$$\ell(h, (\mathbf{x}, y)) = (h(\mathbf{x}) - y)^2$$
    * Absolute Value Loss
$$\ell(h, (\mathbf{x}, y)) = |h(\mathbf{x}) - y|$$
### Visual Description
Text-only slide.

---
## Page 4
### Content
# Linear Regression with Squared Loss
* Loss Function
$$\ell(h, (\mathbf{x}, y)) = (h(\mathbf{x}) - y)^2$$
* Empirical Risk Function
$$L_S(h) = \frac{1}{m} \sum_{i=1}^m (h(\mathbf{x}_i) - y_i)^2$$
* Optimization Problem (Empirical Risk Minimization)
$$\text{argmin}_{\mathbf{w}} L_S(h_{\mathbf{w}}) = \text{argmin}_{\mathbf{w}} \frac{1}{m} \sum_{i=1}^m (\langle \mathbf{w}, \mathbf{x}_i \rangle - y_i)^2$$
### Visual Description
Text-only slide.

---
## Page 5
### Content
# Linear Regression with Squared Loss
* Optimization Problem (Empirical Risk Minimization)
$$\text{argmin}_{\mathbf{w}} L_S(h_{\mathbf{w}}) = \text{argmin}_{\mathbf{w}} \frac{1}{m} \sum_{i=1}^m (\langle \mathbf{w}, \mathbf{x}_i \rangle - y_i)^2$$
* Solving Optimization Problem
    * Option 1: Closed-form Solution
    * Option 2: Gradient Descent
### Visual Description
Text-only slide.

---
## Page 6
### Content
# Linear Regression with Squared Loss
* Option 1: Closed-form Solution
1. Optimization Problem: $\text{argmin}_{\mathbf{w}} L_S(h_{\mathbf{w}}) = \text{argmin}_{\mathbf{w}} \frac{1}{m} \sum_{i=1}^m (\langle \mathbf{w}, \mathbf{x}_i \rangle - y_i)^2$
2. Take derivative, and let it be zero: $\frac{2}{m} \sum_{i=1}^m (\langle \mathbf{w}, \mathbf{x}_i \rangle - y_i)\mathbf{x}_i = 0$
3. Let $A = \left(\sum_{i=1}^m \mathbf{x}_i \mathbf{x}_i^\top\right)$, $\mathbf{b} = \sum_{i=1}^m y_i \mathbf{x}_i \implies \mathbf{Aw} = \mathbf{b}$
4. If A is invertible, we can take its inverse: $\mathbf{w} = A^{-1}\mathbf{b}$
### Visual Description
Text-only slide.

---
## Page 7
### Content
# Linear Regression with Squared Loss
* Option 2: Gradient Descent
1. Optimization Problem: $\text{argmin}_{\mathbf{w}} L_S(h_{\mathbf{w}}) = \text{argmin}_{\mathbf{w}} \frac{1}{m} \sum_{i=1}^m (\langle \mathbf{w}, \mathbf{x}_i \rangle - y_i)^2$
2. Compute Gradient: $\mathbf{g} = \frac{2}{m} \sum_{i=1}^m (\langle \mathbf{w}, \mathbf{x}_i \rangle - y_i)\mathbf{x}_i$
3. Update w: $\mathbf{w} = \mathbf{w} - \alpha \mathbf{g}$
4. While not converge, repeat step 2 & 3
### Visual Description
Text-only slide.

---
## Page 8
### Content
# Linear Regression - Extension
* Polynomial Regression Tasks (non-linear)
e.g. here is an example where input is 1-d: $\mathcal{X} = \mathbb{R}$

* 1-d polynomial function of degree n: $p(x) = a_0 + a_1x + a_2x^2 + \dots + a_nx^n$
* hypothesis class of 1-d polynomial predictor of degree n: $\mathcal{H}_{poly}^n = \{x \mapsto p(x)\}$
* choose mapping -> reduce to linear regression
    * $\psi : \mathbb{R} \to \mathbb{R}^{n+1}$
    * $\psi(x) = (1, x, x^2, \dots, x^n)$
    * $p(\psi(x)) = a_0 + a_1x + a_2x^2 + \dots + a_nx^n = \langle \mathbf{a}, \psi(x) \rangle$
### Visual Description
Two plots showing data points on a grid. The left plot shows a linear fit (a straight red line) through scattered black points, which does not capture the underlying curve. The right plot shows a polynomial fit (a curved blue line) through the same points, which fits the data much more accurately.

---
## Page 9
### Content
# Linear Regression - Extension

* Regularization
    * L2 (Ridge Regression)
    $$\text{argmin}_{\mathbf{w}} L_S(h_{\mathbf{w}}) = \text{argmin}_{\mathbf{w}} \frac{1}{m} \sum_{i=1}^{m} (\langle \mathbf{w}, \mathbf{x}_i \rangle - y_i)^2 + \alpha \|\mathbf{w}\|_2^2$$

    * L1 (LASSO Regression)
    $$\text{argmin}_{\mathbf{w}} L_S(h_{\mathbf{w}}) = \text{argmin}_{\mathbf{w}} \frac{1}{m} \sum_{i=1}^{m} (\langle \mathbf{w}, \mathbf{x}_i \rangle - y_i)^2 + \alpha \|\mathbf{w}\|_1$$

### Visual Description
Text-only slide containing mathematical optimization formulas for Ridge and LASSO regression.

---
## Page 10
### Content
# Logistic Regression

* Sigmoid Function
    $$\phi_{\text{sig}} : \mathbb{R} \to [0, 1]$$
    $$\phi_{\text{sig}}(z) = \frac{1}{1 + \exp(-z)}$$

* Hypothesis Class (composition of sigmoid function over linear function)
    $$H_{\text{sig}} = \phi_{\text{sig}} \circ L_d = \{ \mathbf{x} \mapsto \phi_{\text{sig}}(\langle \mathbf{w}, \mathbf{x} \rangle) : \mathbf{w} \in \mathbb{R}^d \}$$

### Visual Description
The slide includes a plot of the sigmoid function, showing its characteristic S-curve that ranges from 0 to 1, crossing the y-axis at 0.5 when $z=0$.

---
## Page 11
### Content
# Logistic Regression

* Model Prediction
    $$\hat{P}(y = 1 | \mathbf{x}) = h_{\mathbf{w}}(\mathbf{x}) = \phi_{\text{sig}}(\langle \mathbf{w}, \mathbf{x} \rangle) = \frac{1}{1 + \exp(-\langle \mathbf{w}, \mathbf{x} \rangle)}$$

* Loss Function (Binary Cross Entropy loss)
    $$l(h_{\mathbf{w}}, (\mathbf{x}, y)) = -y \log(h_{\mathbf{w}}(\mathbf{x})) - (1 - y) \log(1 - h_{\mathbf{w}}(\mathbf{x}))$$
    $$= y \log(1 + \exp(-\langle \mathbf{w}, \mathbf{x} \rangle)) + (1 - y) \log(1 + \exp(\langle \mathbf{w}, \mathbf{x} \rangle))$$

### Visual Description
Text-only slide.

---
## Page 12
### Content
# Logistic Regression

* Optimization Problem
    $$\text{arg min}_{\mathbf{w}} \frac{1}{m} \sum_{i=1}^{m} y_i \log(1 + \exp(-\langle \mathbf{w}, \mathbf{x}_i \rangle)) + (1 - y_i) \log(1 + \exp(\langle \mathbf{w}, \mathbf{x}_i \rangle))$$

* Solving Optimization Problem
    Refer to scikit-learn documentation for details about solvers
    https://scikit-learn.org/stable/modules/linear_model.html#logistic-regression

### Visual Description
Text-only slide.

---
## Page 13
### Content
# Multi-class Classification

* Softmax Function
    $$\phi_{\text{softmax}} : \mathbb{R} \to [0, 1] \quad \phi_{\text{softmax}}(z_i) = \frac{\exp(z_i)}{\sum_{j=1}^{K} \exp(z_j)}$$

* Loss Function (Cross-entropy Function)
    $$\text{arg min}_{\mathbf{w}} \frac{1}{m} \sum_{i=1}^{m} \sum_{j=1}^{K} \mathbb{I}\{y_i = j\} \log(\hat{P}(y_i = j | \mathbf{x}_i))$$

### Visual Description
Text-only slide.
