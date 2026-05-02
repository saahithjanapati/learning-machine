# canvas-14-04-13634119-Overview_Chapter9_DensEst

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-14-04-13634119-Overview_Chapter9_DensEst.pdf`
Duplicate equivalents: `canvas-14-04-13634119-Overview_Chapter9_DensEst.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 2

## Page 1
### Content
Lecture 9 Overview: Nonparametric Density Estimation

# LECTURE 9 OVERVIEW: NONPARAMETRIC DENSITY ESTIMATION

### REFERENCES
Wasserman Sections 20.1-20.3

### OVERVIEW
Here we turn our attention to density estimation; that is, estimating the marginal distribution $F_X$ (or its density $f_X$) given $X_1, \dots, X_n$, or more generally, estimating the joint distribution $F_{X,Y}$ given $(X_1, Y_1), \dots, (X_n, Y_n)$.

You’ve already seen parametric solutions to the problem of density estimation in this course: posit a parametric model for the density (Gaussian, exponential, and so on) and estimate the parameters. In this lecture, we discuss fully nonparametric approaches to density estimation with pros and cons.

### DEFINITIONS AND NOTATION
1. Mean Integrated Squared Error (MISE)
2. The Bias/Variance Tradeoff
3. Histogram
4. Kernel Density Estimator
5. Least-Squares Cross-Validation
6. Curse of Dimensionality (Parametric versus Non-Parametric Rates)

### KEY RESULTS AND IDEAS
1. **Performance of Histograms:**
For histograms,
$$\text{MISE} = \mathbb{E} \left( \int (f(x) - \widehat{f}(x))^2 dx \right) \approx \frac{h^2}{12} \int (f'(u))^2 du + \frac{1}{nh}$$
The value $h^*$ that minimizes this is
$$h^* = \frac{1}{n^{1/3}} \left( \frac{6}{\int (f'(u))^2 du} \right)^{1/3}$$
and then
$$\text{MISE} \sim \frac{C_2}{n^{2/3}}$$

36-700 Probability and Mathematical Statistics • Fall 2025 • Lee Page 1 of 2
### Visual Description
Text-only slide.

---
## Page 2
### Content
Lecture 9 Overview: Nonparametric Density Estimation

2. **Performance of Kernel Density Estimator:**
For kernel density estimator,
$$\text{MISE} \approx \frac{1}{4} c_1^2 h^4 \int (f''(x))^2 dx + \frac{\int K^2(x) dx}{nh}$$
The optimal bandwidth is
$$h^* = \left( \frac{c_2}{c_1^2 A(f) n} \right)^{1/5}$$
where $c_1 = \int x^2 K(x) dx$, $c_2 = \int K(x)^2 dx$ and $A(f) = \int (f''(x))^2 dx$.
Then,
$$\text{MISE} \sim \frac{C_3}{n^{4/5}}$$
*Question: Can you derive the optimal nonparametric rate in $d$ dimensions by balancing bias versus variance?*

3. **Least Squares Cross-Validation:**
Let
$$J(h) = \int \widehat{f}^2(x) dx - 2 \int \widehat{f}(x) f(x) dx$$
Then
$$\text{MISE} = \mathbb{E}(J(h)) + \text{constant which does not depend on } h$$
and
$$\widehat{J}(h) = \int \widehat{f}^2(x) dx - \frac{2}{n} \sum_{i=1}^n \widehat{f}_{(-i)}(X_i)$$
is such that $\mathbb{E}(\widehat{J}(h)) \approx \mathbb{E}(J(h))$. In fact, for kernel density estimators, $\mathbb{E}(\widehat{J}(h)) = \mathbb{E}(J(h))$.
Here, $\widehat{f}_{(-i)}$ is the estimate of $f$ formed by leaving out the $i^{th}$ observation.
This motivates choosing $h$ to minimize $\widehat{J}(h)$, which can be calculated using only the observed data.

36-700 Probability and Mathematical Statistics • Fall 2025 • Lee Page 2 of 2
### Visual Description
Text-only slide.

---
