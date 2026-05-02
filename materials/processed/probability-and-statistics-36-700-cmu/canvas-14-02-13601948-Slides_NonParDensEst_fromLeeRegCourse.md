# canvas-14-02-13601948-Slides_NonParDensEst_fromLeeRegCourse

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-14-02-13601948-Slides_NonParDensEst_fromLeeRegCourse.pdf`
Duplicate equivalents: `canvas-14-02-13601948-Slides_NonParDensEst_fromLeeRegCourse.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 28

## Page 1
### Content
# Density Estimation

As before, observed data are modelled as sample from underlying (unknown) distribution.

Estimation of this distribution (or its density) is a common goal in statistics, in fact, this is what we’ve been doing all along when estimating parameters

Sample of 303 TC’s since 1980. Their initial latitudes:
7.2 8.3 8.6 8.8 8.9 9.0 9.0 9.0 9.5 9.5 9.6 9.7 9.7
9.8 9.8 9.8 10.0 10.1 10.1 10.2 10.4 10.4 10.4 10.4 ....

Note that $\bar{x} = 20.18, s = 7.93$

### Visual Description
Text-only slide with some numerical data listed.

---

## Page 2
### Content
# The “Normal” Assumption

[Plot of a normal distribution curve]

The normal distribution with $\mu = 20.18$ and $\sigma = 7.93$.

### Visual Description
A plot showing a normal distribution curve in red. The x-axis is labeled "Latitude of Initial Point" and the y-axis is labeled "density". The region under the curve between x=30 and x=40 is shaded in blue.

---

## Page 3
### Content
# The “Normal” Assumption

[Plot of a histogram with an overlaid normal curve]

Compared with the histogram estimate of the density.

### Visual Description
A histogram of data points with a red normal distribution curve overlaid on top to show the fit. The x-axis is labeled "Latitude of Initial Point" and the y-axis is labeled "Density".

---

## Page 4
### Content
# Advantages of Parametric Forms

* Simple to fit
* Functional form
* Smaller errors, on average, provided assumption is correct

### Visual Description
Text-only slide.

---

## Page 5
### Content
# Errors in Density Estimators

Error at one value $x$:
$$ (f(x) - \hat{f}(x))^2 $$

Error accumulated over all $x$:
$$ ISE = \int (f(x) - \hat{f}(x))^2 dx $$

Mean Integrated Squared Error (MISE):
$$ MISE = \mathbb{E} \left( \int (f(x) - \hat{f}(x))^2 dx \right) $$

### Visual Description
Text-only slide with mathematical formulas for error metrics.

---

## Page 6
### Content
# The Bias–Variance Tradeoff

Can write
$$ MISE = \int b^2(x) dx + \int v(x) dx $$

where the bias at $x$ is
$$ b(x) = \mathbb{E}(\hat{f}(x)) - f(x) $$

and the variance at $x$ is
$$ v(x) = \mathbb{V}(\hat{f}(x)) $$

See Lemma 20.1, page 304 in AOS.

### Visual Description
Text-only slide with mathematical formulas.

---

## Page 7
### Content
# Histograms

Create bins $B_1, B_2, \dots, B_m$ of width $h$. Define
$$ \hat{f}_n(x) = \sum_{j=1}^m \frac{\hat{p}_j}{h} I(x \in B_j) $$

where $\hat{p}_j$ is proportion of observations in $B_j$. Note that
$$ \int \hat{f}_n(x) dx = 1 $$

A histogram is an example of a nonparametric density estimator. Note that it is controlled by the tuning parameter $h$, the bin width.

### Visual Description
Text-only slide with mathematical definitions for histogram density estimation.

---

## Page 8
### Content
# The Bias–Variance Tradeoff

Can write
$$ MISE_h = \mathbb{E} \left( \int (f(x) - \hat{f}_h(x))^2 dx \right) $$
$$ = \int b_h^2(x) dx + \int v_h(x) dx $$

where the bias at $x$ is
$$ b_h(x) = \mathbb{E}(\hat{f}_h(x)) - f(x) $$

and the variance at $x$ is
$$ v_h(x) = \mathbb{V}(\hat{f}_h(x)) $$

### Visual Description
Text-only slide with mathematical formulas showing the bias-variance decomposition for a density estimator with parameter $h$.

---
## Page 9
### Content
# The Bias–Variance Tradeoff

![Graph showing the tradeoff between Bias squared, Variance, and MISE relative to smoothing level.](image)

*   **MISE** (Mean Integrated Squared Error) is represented by the solid U-shaped curve.
*   **Bias squared** is represented by the dotted line that increases as smoothing increases.
*   **Variance** is represented by the dotted line that decreases as smoothing increases.
*   **Optimal smoothing** occurs at the point where MISE is minimized.

<--- Less ... Optimal smoothing ... More --->

Lecture 19 – p. 9/28
### Visual Description
A conceptual graph illustrating the bias-variance tradeoff. The x-axis represents the degree of smoothing, ranging from "Less" to "More". The y-axis is unlabeled but represents error magnitude. Three curves are shown: a decreasing dotted line for "Variance", an increasing dotted line for "Bias squared", and a solid U-shaped curve for "MISE" which is the sum of the two. A vertical line marks the "Optimal smoothing" point at the minimum of the MISE curve.

---
## Page 10
### Content
# Histograms

![Histogram with many narrow bins.](image)

Seems like too many bins, i.e. $h$ is too small.
(Undersmoothing)

Lecture 19 – p. 10/28
### Visual Description
A histogram plot showing the density of "Latitude of Initial Point". The x-axis ranges from 10 to 40, and the y-axis (Density) ranges from 0.00 to 0.06. The histogram has many very thin bars, creating a jagged appearance, which the text identifies as "undersmoothing" due to a bin width $h$ that is too small.

---
## Page 11
### Content
# Histograms

![Histogram with very few wide bins.](image)

Seems like too few bins, i.e. $h$ is too large. (Oversmoothing)

Lecture 19 – p. 11/28
### Visual Description
A histogram plot of the same data as the previous page ("Latitude of Initial Point"). The x-axis ranges from 0 to 50, and the y-axis (Density) ranges from 0.00 to 0.04. The histogram has only five very wide bars, resulting in a blocky appearance. The text identifies this as "oversmoothing" because the bin width $h$ is too large.

---
## Page 12
### Content
# Histograms

![Histogram with an appropriate number of bins.](image)

Seems better. (Optimal Smoothing)

Lecture 19 – p. 12/28
### Visual Description
A histogram plot of the same data ("Latitude of Initial Point"). The x-axis ranges from 10 to 40, and the y-axis (Density) ranges from 0.00 to 0.07. The number and width of the bins appear balanced, capturing the general shape of the distribution without being too jagged or too blocky. The text labels this as "Optimal Smoothing".

---
## Page 13
### Content
# Histograms

![Histogram from the previous page with a red normal distribution curve overlaid.](image)

Normal curve does not seem to be a good fit.

Lecture 19 – p. 13/28
### Visual Description
The "optimally smoothed" histogram from page 12 is shown again, but with a smooth red curve representing a normal distribution overlaid on top. The red curve peaks around 20, while the histogram has its highest peak around 15 and another smaller peak near 30, showing that the normal distribution does not match the data well.

---
## Page 14
### Content
# Histograms

For histograms,
$$MISE = \mathbb{E} \left( \int (f(x) - \hat{f}(x))^2 dx \right) \approx \frac{h^2}{12} \int (f'(u))^2 du + \frac{1}{nh}$$

The value $h^*$ that minimizes this is
$$h^* = \frac{1}{n^{1/3}} \left( \frac{6}{\int (f'(u))^2 du} \right)^{1/3}.$$

and then
$$MISE \sim \frac{C_2}{n^{2/3}}$$

See Theorem 20.4, page 309 in AOS

Lecture 19 – p. 14/28
### Visual Description
Text-only slide containing mathematical formulas for the Mean Integrated Squared Error (MISE) of histograms and the optimal bin width $h^*$ that minimizes it. It also provides the asymptotic rate of convergence for MISE and a reference to a textbook (AOS).

---
## Page 15
### Content
# Kernel Density Estimation

We can improve histograms by introducing smoothing.
$$\hat{f}(x) = \frac{1}{nh} \sum_{i=1}^n K \left( \frac{x - X_i}{h} \right).$$

Here, $K(\cdot)$ is the kernel function, itself a smooth density.

Lecture 19 – p. 15/28
### Visual Description
Text-only slide introducing Kernel Density Estimation (KDE). It presents the general formula for a kernel density estimator $\hat{f}(x)$ as a sum of kernel functions $K$ centered at each data point $X_i$, scaled by a bandwidth $h$.

---
## Page 16
### Content
# Kernel Density Estimation

This amounts to placing a smoothed out lump of mass of size $1/n$ over each data point $X_i$.

![Plot showing individual kernels (red) at data points (green dots) and their sum (black curve).](image)

The width of the “lumps” is controlled by $h$.

Lecture 19 – p. 16/28
### Visual Description
A plot illustrating the concept of Kernel Density Estimation. Along the x-axis (ranging from -10 to 10), several data points are marked with green dots and vertical green lines. Over each point, a small red bell-shaped curve (the kernel) is drawn. A larger black curve represents the sum of these individual kernels, showing the resulting smooth density estimate. The text explains that $h$ controls the width of these individual "lumps".

---
## Page 17
### Content
# Kernel Density Estimation

[Graph showing a histogram with a smooth red curve overlaid. The curve is relatively flat and does not capture the peaks of the histogram well.]

$h$ chosen too large.

Lecture 19 – p. 17/28

### Visual Description
A plot titled "Kernel Density Estimation" shows a histogram of "Latitude of Initial Point" with a red density curve. The x-axis ranges from 10 to 40, and the y-axis (Density) ranges from 0.00 to 0.07. The red curve is overly smooth, indicating an oversmoothed estimate where the bandwidth $h$ is too large.

---
## Page 18
### Content
# Kernel Density Estimation

[Graph showing a histogram with a very wiggly red curve overlaid. The curve has many small peaks corresponding to individual data points.]

$h$ chosen too small.

Lecture 19 – p. 18/28

### Visual Description
A plot titled "Kernel Density Estimation" shows the same histogram as the previous page. The red density curve is now very jagged and wiggly, following the noise in the data. This indicates an undersmoothed estimate where the bandwidth $h$ is too small.

---
## Page 19
### Content
# Kernel Density Estimation

[Graph showing a histogram with a red curve that smoothly follows the general shape of the data distribution.]

Just right.

Lecture 19 – p. 19/28

### Visual Description
A plot titled "Kernel Density Estimation" shows the same histogram. The red density curve is smooth but captures the main bimodal features of the distribution. The caption "Just right" indicates that this bandwidth $h$ provides a good balance between bias and variance.

---
## Page 20
### Content
# Kernel Density Estimation

$$\text{MISE} \approx \frac{1}{4} c_1^2 h^4 \int (f''(x))^2 dx + \frac{\int K^2(x) dx}{nh}$$

Optimal bandwidth is
$$h_* = \left( \frac{c_2}{c_1^2 A(f) n} \right)^{1/5}$$
where $c_1 = \int x^2 K(x) dx$, $c_2 = \int K(x)^2 dx$ and $A(f) = \int (f''(x))^2 dx$.

Then,
$$\text{MISE} \sim \frac{C_3}{n^{4/5}}.$$

Lecture 19 – p. 20/28

### Visual Description
Text-only slide containing mathematical formulas for the Mean Integrated Squared Error (MISE) and the optimal bandwidth $h_*$ in kernel density estimation. It shows that the optimal MISE scales with $n^{-4/5}$.

---
## Page 21
### Content
# The Bias–Variance Tradeoff

For many smoothers:
$$\text{MISE} \approx c_1 h^4 + \frac{c_2}{nh}$$
which is minimized at
$$h = O\left( \frac{1}{n^{1/5}} \right)$$

Hence,
$$\text{MISE} = O\left( \frac{1}{n^{4/5}} \right)$$
whereas, for parametric problems
$$\text{MISE} = O\left( \frac{1}{n} \right)$$

Lecture 19 – p. 21/28

### Visual Description
Text-only slide discussing the bias-variance tradeoff. It presents the general form of MISE for smoothers and compares the convergence rate of nonparametric methods ($n^{-4/5}$) to parametric methods ($n^{-1}$).

---
## Page 22
### Content
# Comparisons

So, for parametric form, if it’s correct,
$$\text{MISE} \sim \frac{C_1}{n}$$

For histograms,
$$\text{MISE} \sim \frac{C_2}{n^{2/3}}$$

For kernel density estimators,
$$\text{MISE} \sim \frac{C_3}{n^{4/5}}$$

Lecture 19 – p. 22/28

### Visual Description
Text-only slide comparing the convergence rates (MISE) of three different estimation methods: parametric (fastest at $1/n$), kernel density estimators (middle at $1/n^{4/5}$), and histograms (slowest at $1/n^{2/3}$).

---
## Page 23
### Content
# Comparisons

[Graph showing a standard normal distribution curve.]

Truth is standard normal.

Lecture 19 – p. 23/28

### Visual Description
A plot titled "Comparisons" showing a probability density function. The x-axis ranges from -4 to 4, and the y-axis $f(x)$ ranges from 0.0 to 0.4. A solid red line labeled "truth" and a dashed blue line labeled "closest normal" are plotted; they overlap perfectly, representing a standard normal distribution.

---
## Page 24
### Content
# Comparisons

[Graph showing Mean Squared Error (MSE) decreasing as sample size (n) increases for two different methods.]

Assuming normality has its advantages.

Lecture 19 – p. 24/28

### Visual Description
A plot titled "Comparisons" showing MSE on the y-axis (from 0e+00 to 4e-05) versus sample size $n$ on the x-axis (from 0 to 1000). Two curves are shown: a solid red line labeled "normal" and a dashed blue line labeled "kernel". Both curves decrease as $n$ increases, but the "normal" curve (parametric assumption) consistently has a lower MSE than the "kernel" curve (nonparametric estimation).
## Page 25
### Content
# Comparisons

[Graph showing a comparison between a true distribution and the closest normal distribution]

Truth is $t$-distribution with 5 degrees of freedom.

Lecture 19 – p. 25/28

### Visual Description
The slide contains a plot with the x-axis labeled 'x' ranging from -4 to 4 and the y-axis labeled '$f(x)$' ranging from 0.0 to 0.3. There are two curves: a solid red line labeled "truth" and a dashed blue line labeled "closest normal". The red curve is slightly taller and narrower at the peak than the blue curve, and has heavier tails. The text below the graph states that the "truth" is a $t$-distribution with 5 degrees of freedom.

---
## Page 26
### Content
# Comparisons

[Graph showing MSE vs sample size (n) for normal and kernel estimators]

Normal assumption costs, even for moderate sample size.

Lecture 19 – p. 26/28

### Visual Description
The slide contains a plot with the x-axis labeled 'sample size (n)' ranging from 0 to 1000 and the y-axis labeled 'MSE' (Mean Squared Error) with values like $5.0e-06$, $1.5e-05$, and $2.5e-05$. There are two curves: a solid red line labeled "normal" and a dashed blue line labeled "kernel". The kernel curve starts much higher than the normal curve at small sample sizes but crosses it around $n=200$ and continues to decrease below the normal curve, which levels off. The text below the graph notes that the normal assumption has a cost even for moderate sample sizes.

---
## Page 27
### Content
# Cross-Validation

The MISE can be estimated using only the data, via cross-validation:

$$\int \left(\hat{f}(x)\right)^2 dx - \frac{2}{n} \sum_{i=1}^n \hat{f}_{(-i)}(X_i)$$

where $\hat{f}_{(-i)}$ is the density estimator obtained after removing the $i^{th}$ observation.

The point: objective choice of $h$ is possible.

Lecture 19 – p. 27/28

### Visual Description
Text-only slide containing a mathematical formula for estimating MISE (Mean Integrated Squared Error) using cross-validation. The formula involves an integral of the squared density estimator and a summation of the leave-one-out density estimator evaluated at the data points.

---
## Page 28
### Content
# Nonparametric Curve Estimation

If a *parametric* model is “correct”, then it converges faster to the truth with the rate $\text{MISE} \sim C_1/n$.

Parametric approaches are however less flexible because of the structural assumptions. So even as $n \to \infty$, we may end up with a nonvanishing “model bias”.

*Nonparametric* approaches are more flexible but have slower rates, especially in high dimensions. The optimal nonparametric rate in $d$ dimensions is $\text{MISE} \sim \frac{C_2}{n^{4/(4+d)}}$.

In practice, we use *cross-validation* to estimate risk. We choose the model (including tuning parameters) with the lowest *estimated* risk.

Lecture 19 – p. 28/28

### Visual Description
Text-only slide summarizing the trade-offs between parametric and nonparametric curve estimation, highlighting convergence rates and the use of cross-validation for model selection.
