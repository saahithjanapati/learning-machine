# canvas-14-01-13652546-annotated.slides_Chapter9_DensEst

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-14-01-13652546-annotated.slides_Chapter9_DensEst.pdf`
Duplicate equivalents: `canvas-14-01-13652546-annotated.slides_Chapter9_DensEst.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 39

## Page 1
### Content
# Density Estimation

As before, observed data are modelled as sample from underlying (unknown) distribution.

$X_1, \dots, X_n \sim F$ (unknown distr.)

Estimation of this distribution $F$ (or its density $f$) is a common goal in statistics, in fact, this is what we’ve been doing all along when estimating parameters $\theta = T(F)$.

Sample of 303 TC’s since 1980. Their initial latitudes:
7.2 8.3 8.6 8.8 8.9 9.0 9.0 9.0 9.5 9.5 9.6 9.7 9.7
9.8 9.8 9.8 10.0 10.1 10.1 10.2 10.4 10.4 10.4 10.4 ....

Note that $\bar{x} = 20.18, s = 7.93$

Lecture 19 – p. 1/28

### Visual Description
The slide introduces density estimation. It includes text and handwritten annotations in blue ink. The annotations define the sample $X_1, \dots, X_n$ coming from an unknown distribution $F$ with density $f$, and link parameter estimation to a functional of the distribution $\theta = T(F)$. A list of numerical data points for tropical cyclone (TC) latitudes is provided at the bottom.

---

## Page 2
### Content
Recall Density estimation approaches (Dec 1, 2025)

Assume
* Parametric model $\mathcal{F} = \{f(x; \theta) : \theta \in \Theta\}$
    * $\Theta$ is the parameter space
    * finite (fixed) number of parameters

* Non-parametric model
    * is a set $\mathcal{F}$ that cannot be parametrized by a finite number of parameters

Nonparametric density estimation
e.g. $\mathcal{F} = \mathcal{F}_{DENS} \cap \mathcal{F}_{SOB}$
$\mathcal{F}_{SOB} = \{f : \int (f''(x))^2 dx < \infty\}$ (Sobolev space)

### Visual Description
Handwritten notes on a light yellow grid background. The notes distinguish between parametric models (fixed number of parameters) and non-parametric models (cannot be parametrized by a finite number). It defines a Sobolev space as an example for non-parametric density estimation.

---

## Page 3
### Content
# The “Normal” Assumption

Ex. of parametric model
$\mathcal{F} = \{f(x; \theta) : \theta \in \Theta\}$
Estimate $\theta$ from data $D$
e.g. MLE, MoMe, plugin $\Rightarrow \hat{\theta}$

$\hat{f}(x; \theta) = f(x; \hat{\theta})$
Alt. notation: $\hat{f}_\theta = f_{\hat{\theta}}$

$\theta = (\mu, \sigma)$

The normal distribution with $\mu = 20.18$ and $\sigma = 7.93$.

Lecture 19 – p. 2/28

### Visual Description
The slide shows a plot of a normal distribution (red curve) representing density vs. Latitude of Initial Point. A portion of the tail (above 30) is shaded in blue. Handwritten blue notes explain the parametric model approach, mentioning methods like Maximum Likelihood Estimation (MLE) and Method of Moments (MoMe) to find $\hat{\theta}$.

---

## Page 4
### Content
# The “Normal” Assumption

Compared with the histogram estimate of the density.

$D = \{X_1, \dots, X_n\} \overset{iid}{\sim} F$
$\hat{f}_n(x; D)$ is random
Train data $X_1, \dots, X_n \sim f$
$x$ is the "evaluation point"

$bias(x) = \mathbb{E}[\hat{f}_n(x)] - f(x)$

non-parametric (referring to histogram)

Lecture 19 – p. 3/28

### Visual Description
The slide displays a histogram of the data with the previously shown red normal distribution curve overlaid. Handwritten annotations identify the red curve as the "true pdf $f(\cdot)$" and the histogram as a "non-parametric" estimate. It points out an evaluation point $x$ on the horizontal axis and labels the corresponding density values from the true pdf and the estimator.

---

## Page 5
### Content
# Advantages of Parametric Forms

* Simple to fit
* Functional form $\Rightarrow$ interpretability
* Smaller errors, on average, **provided assumption is correct**

Q: How do we quantify errors?
Need to define loss function and risk (= expected loss)

Keep track of what quantities are random vs. fixed!
(why? where does the randomness come from?)

Lecture 19 – p. 4/28

### Visual Description
Text-based slide with handwritten additions. The main points are the simplicity, interpretability, and potential for smaller errors of parametric models. Handwritten notes in blue and red pose questions about quantifying errors and emphasize distinguishing between random and fixed quantities.

---

## Page 6
### Content
# Errors in Density Estimators

Error at one value $x$:
$(f(x) - \hat{f}(x))^2$
($x$ is the evaluation pt; there not random)
Compare Point estimator $\theta \approx \hat{\theta}(X_1, \dots, X_n)$ (random)

Error accumulated over all $x$:
Loss: $ISE = \int (f(x) - \hat{f}(x))^2 dx$
$ISE$ is a (scalar) random variable
c.f. $ASE \int (f(x) - \hat{f}(x))^2 d\hat{F}(x) \approx \sum_j (f(X_j) - \hat{f}(X_j))^2$

Mean Integrated Squared Error (MISE):
Risk = expected loss
$MISE = \mathbb{E} \left( \int (f(x) - \hat{f}(x))^2 dx \right)$ (fixed quantity, not R.V.)

$M(ISE) = \int \mathbb{E}[(f(x) - \hat{f}(x))^2] dx = \int MSE(x) dx$
Note: $M(ISE) = I(MSE)$, that is, if you choose the ISE as a loss function, then you can just compute the MSE at fixed $x$ and integrate.

Lecture 19 – p. 5/28

### Visual Description
The slide defines different error metrics for density estimation. It uses printed formulas for squared error at a point, Integrated Squared Error (ISE), and Mean Integrated Squared Error (MISE). Extensive handwritten notes explain that ISE is a random variable while MISE is a fixed risk quantity, and shows the relationship between MISE and the integral of the Mean Squared Error (MSE).

---

## Page 7
### Content
At fixed $x$,
$MSE(x) = \mathbb{E} \left[ (\hat{f}(x) - f(x))^2 \right] = bias^2(x) + var(x)$
where
$\begin{cases} bias(x) = \mathbb{E}[\hat{f}(x)] - f(x) \\ var(x) = Var(\hat{f}(x)) \end{cases}$

Note: $\hat{f}(x)$ corresponds to $\hat{\theta}$ and $f(x)$ corresponds to $\theta$.

### Visual Description
Handwritten notes on a grid background showing the decomposition of Mean Squared Error (MSE) at a fixed point $x$ into squared bias and variance.

---

## Page 8
### Content
# The Bias–Variance Tradeoff

Can write
$$MISE = \int b^2(x) dx + \int v(x) dx$$
where the bias at $x$ is
$$b(x) = \mathbb{E}(\hat{f}(x)) - f(x)$$
and the variance at $x$ is
$$v(x) = \mathbb{V}(\hat{f}(x))$$

See Lemma 20.1, page 304 in AOS.

Lecture 19 – p. 6/28

### Visual Description
Text-only slide. It presents the mathematical formulation of the Bias-Variance tradeoff for the Mean Integrated Squared Error (MISE), expressing it as the sum of the integrated squared bias and the integrated variance. It references "AOS" (likely All of Statistics).
## Page 9
### Content
# Histograms

Create bins $B_1, B_2, \dots, B_m$ of width $h$. Define
$$\hat{f}_n(x) = \sum_{j=1}^m \frac{\hat{p}_j}{h} I(x \in B_j).$$
where $\hat{p}_j$ is proportion of observations in $B_j$. Note that
$$\int \hat{f}_n(x) dx = 1.$$

A histogram is an example of a nonparametric density estimator. Note that it is controlled by the **tuning parameter** $h$, the bin width.

**Handwritten Annotations:**
* $N_j \sim \text{Binomial}(n, p_j)$
* $\hat{p}_j = \frac{N_j}{n}$
* $p_j = \int_{x \in B_j} f(x) dx$
* A sketch shows a smooth curve $f(x)$ with a rectangular bin $B_j$ of width $h$ underneath it.
* "Check this?" written next to the integral equation.
* $h = h_n$ (not model parameter)

### Visual Description
The slide contains text and mathematical formulas for defining a histogram as a density estimator. It features several blue handwritten notes and a small diagram illustrating a bin under a density curve. There is yellow highlighting on the term "tuning parameter" and the variable $\hat{p}_j$.

---
## Page 10
### Content
# The Bias–Variance Tradeoff

Can write
$$\begin{aligned} \text{MISE}_h &= \mathbb{E} \left( \int (f(x) - \hat{f}_h(x))^2 dx \right) \\ &= \int b_h^2(x) dx + \int v_h(x) dx \end{aligned}$$
where the **bias at $x$** is
$$b_h(x) = \mathbb{E}(\hat{f}_h(x)) - f(x)$$
and the **variance at $x$** is
$$v_h(x) = \mathbb{V}(\hat{f}_h(x))$$

### Visual Description
Text-only slide presenting the mathematical decomposition of Mean Integrated Squared Error (MISE) into integrated bias squared and integrated variance.

---
## Page 11
### Content
# The Bias–Variance Tradeoff

[Graph showing the relationship between smoothing and error]

* **MISE** (solid black curve, U-shaped)
* **Bias squared** (dotted curve, increasing with more smoothing)
* **Variance** (dotted curve, decreasing with more smoothing)
* **Optimal smoothing** (marked at the minimum of the MISE curve)

**Handwritten Annotations:**
* $X_1, \dots, X_n \sim F \implies \hat{f}_n(x)$
* "Fixed $n$. What happens as $n$ increases?"
* "need to estimate" pointing to MISE.
* "integrated" added to "Bias squared" and "Variance" labels.
* $h_{opt}(n)$ labeled under "Optimal smoothing".
* "More smoothing (smaller $h$)" noted on the right side of the x-axis.
* Red lines and arrows indicate how the curves shift (downward and leftward) as $n$ increases.

### Visual Description
A conceptual plot illustrating the bias-variance tradeoff. The x-axis represents the amount of smoothing (from "Less" to "More"), and the y-axis represents error. The MISE curve is the sum of the bias squared and variance curves. Extensive handwritten notes in blue and red explain the dynamics of the tradeoff as sample size $n$ changes.

---
## Page 12
### Content
# Histograms

[Histogram of Latitude of Initial Point]
* X-axis: Latitude of Initial Point (10 to 40)
* Y-axis: Density (0.00 to 0.06)

Seems like too many bins, i.e. $h$ is too small. (Undersmoothing)

**Handwritten Annotation:**
* "don't choose by eye"

### Visual Description
A histogram with many very narrow bars, resulting in a "spiky" appearance. This is used as an example of undersmoothing due to a bin width $h$ that is too small. A blue handwritten note is at the bottom right.

---
## Page 13
### Content
# Histograms

[Histogram of Latitude of Initial Point]
* X-axis: Latitude of Initial Point (0 to 50)
* Y-axis: Density (0.00 to 0.04)

Seems like too few bins, i.e. $h$ is too large. (Oversmoothing)

### Visual Description
A histogram with very few, wide bars, resulting in a "blocky" appearance that loses detail. This is used as an example of oversmoothing due to a bin width $h$ that is too large.

---
## Page 14
### Content
# Histograms

[Histogram of Latitude of Initial Point]
* X-axis: Latitude of Initial Point (10 to 40)
* Y-axis: Density (0.00 to 0.07)

Seems better. (Optimal Smoothing)

**Handwritten Annotation:**
* "don't choose by eye"

### Visual Description
A histogram with a moderate number of bins that appears to capture the general shape of the data distribution without being too spiky or too blocky. A blue handwritten note is at the bottom right.

---
## Page 15
### Content
# Histograms

[Histogram of Latitude of Initial Point with a red normal curve overlaid]
* X-axis: Latitude of Initial Point (10 to 40)
* Y-axis: Density (0.00 to 0.07)

Normal curve does not seem to be a good fit.

### Visual Description
The same "optimal" histogram from the previous page, but with a red bell-shaped normal distribution curve superimposed. The curve does not match the bimodal or skewed shape of the histogram bars.

---
## Page 16
### Content
# Histograms

For histograms,
$$\text{MISE} = \mathbb{E} \left( \int (f(x) - \hat{f}(x))^2 dx \right) \approx \frac{h^2}{12} \int (f'(u))^2 du + \frac{1}{nh}$$

The value $h^*$ that minimizes this is
$$h^* = \frac{1}{n^{1/3}} \left( \frac{6}{\int (f'(u))^2 du} \right)^{1/3}.$$
and then
$$\text{MISE} \sim \frac{C_2}{n^{2/3}}$$

See Theorem 20.4, page 309 in AOS

**Handwritten Annotations:**
* $\int (bias^2(x) + var(x)) dx$ written at the top.
* Circled "1" over the first term ($\approx O(h^2)$) and circled "2" over the second term ($\approx O(\frac{1}{nh})$).
* "Balance bias$^2$ and variance"
* Derivation: $h^2 \sim \frac{1}{nh} \implies h^3 \sim \frac{1}{n} \implies h \sim \frac{1}{n^{1/3}}$
* $\text{MISE} = O(h^2) + O(\frac{1}{nh}) = O(\frac{1}{n^{2/3}}) + O(\frac{1}{n^{2/3}}) = O(\frac{1}{n^{2/3}})$
* Yellow highlighting on $n^{1/3}$, $n^{2/3}$, and the variance term $\frac{1}{nh}$.

### Visual Description
A slide containing mathematical formulas for the asymptotic MISE of a histogram and the derivation of the optimal bin width $h^*$. It includes several handwritten notes in blue and red that explain the order of magnitude ($O$) of the terms and how to balance them to find the optimal rate.

---
## Page 17
### Content
$$
\begin{cases}
\text{bias}(x) \stackrel{\text{def}}{=} \mathbb{E}[\hat{f}(x)] - f(x) \\
\text{var}(x) \stackrel{\text{def}}{=} \text{var}[\hat{f}(x)]
\end{cases}
$$

where $\hat{f}(x) \stackrel{\text{def}}{=} \sum_{j=1}^m \frac{\hat{P}_j}{h} I(x \in B_j)$

$$
\begin{cases}
\hat{P}_j = \frac{N_j}{n} \\
P_j = \int_{x \in B_j} f(x) dx
\end{cases}
$$

$N_j \sim \text{Binomial}(n, P_j)$
$\mathbb{E}[N_j] = n P_j \quad \text{var}(N_j) = n P_j (1 - P_j)$

For $x \in B_j$:
$$
\begin{cases}
\mathbb{E}[\hat{f}_n(x)] = \frac{\mathbb{E}[\hat{P}_j]}{h} = \frac{P_j}{h} \approx f(x) \\
\text{var}(\hat{f}_n(x)) = \frac{1}{n h^2} P_j (1 - P_j)
\end{cases}
$$

For $x \in B_j$:
$f(u) \approx f(x) + (u - x) f'(x)$
$b(x) = \mathbb{E}[\hat{f}(x)] - f(x) = \frac{P_j}{h} - f(x) = \frac{1}{h} \int_{u \in B_j} f(u) du - f(x)$

### Visual Description
Handwritten notes on a grid background detailing the mathematical derivation of bias and variance for a histogram-based density estimator. The notes include definitions of bias and variance, the estimator formula, properties of the binomial distribution for bin counts, and a Taylor expansion for the density function.

---
## Page 18
### Content
# The Bias–Variance Tradeoff

[Graph showing the relationship between smoothing and error]

- **MISE** (Mean Integrated Squared Error) - solid curve
- **Bias squared** - dotted curve increasing with more smoothing
- **Variance** - dotted curve decreasing with more smoothing
- **Optimal smoothing** - marked at the minimum of the MISE curve

<--- Less | Optimal smoothing | More --->

Lecture 19 – p. 9/28
Recall

### Visual Description
A plot illustrating the bias-variance tradeoff. The x-axis represents the amount of smoothing (from "Less" to "More"). The y-axis represents error. Three curves are shown: "Variance" (decreasing as smoothing increases), "Bias squared" (increasing as smoothing increases), and "MISE" (a U-shaped curve representing the sum of the two). A vertical line marks the "Optimal smoothing" point at the minimum of the MISE curve.

---
## Page 19
### Content
# Kernel Density Estimation

We can improve histograms by introducing **smoothing**.

$$\hat{f}(x) = \frac{1}{nh} \sum_{i=1}^n K\left(\frac{x - X_i}{h}\right)$$

Here, $K(\cdot)$ is the **kernel function**, itself a smooth density.

Handwritten notes:
$K$ is any smooth function s.t.
- $K(x) \ge 0$
- $\int K(x) dx = 1$
- $\int x K(x) dx = 0$
- $\sigma_x^2 = \int x^2 K(x) dx > 0$

Lecture 19 – p. 15/28

### Visual Description
A slide introducing Kernel Density Estimation (KDE). It features the mathematical formula for the KDE estimator. There is a small handwritten sketch of two overlapping bell curves (kernels) centered at data points $X_1$ and $X_2$. Additional handwritten notes list the standard properties required for a function to be a valid kernel (non-negativity, integrates to 1, zero mean, and positive variance).

---
## Page 20
### Content
# Kernel Density Estimation

This amounts to placing a smoothed out lump of mass of size $1/n$ over each data point $X_i$.

[Plot of individual kernels and their sum]

The width of the “lumps” is controlled by $h$.

Lecture 19 – p. 16/28

### Visual Description
A plot demonstrating the concept of KDE. Several small red bell-shaped curves (kernels) are centered over data points (indicated by green dots on the x-axis). A larger black curve represents the sum of these individual kernels, forming the overall density estimate. The x-axis ranges from -10 to 10.

---
## Page 21
### Content
# Kernel Density Estimation

[Histogram with a very smooth red curve overlaid]

$h$ chosen too large.

Lecture 19 – p. 17/28

### Visual Description
A plot showing a histogram of data ("Latitude of Initial Point") with a red KDE curve overlaid. The red curve is very smooth and does not capture the peaks and valleys of the histogram well, illustrating the effect of choosing a bandwidth $h$ that is too large (oversmoothing).

---
## Page 22
### Content
# Kernel Density Estimation

[Histogram with a very wiggly red curve overlaid]

$h$ chosen too small.

Lecture 19 – p. 18/28

### Visual Description
A plot showing the same histogram as the previous page, but with a very wiggly red KDE curve. The curve follows the individual data points too closely, creating many small peaks, illustrating the effect of choosing a bandwidth $h$ that is too small (undersmoothing).

---
## Page 23
### Content
# Kernel Density Estimation

[Histogram with a well-fitting red curve overlaid]

Just right.

Lecture 19 – p. 19/28

### Visual Description
A plot showing the same histogram with a red KDE curve that fits the data well, capturing the main modes of the distribution without being overly wiggly or overly smooth. This illustrates an appropriately chosen bandwidth $h$.

---
## Page 24
### Content
# Kernel Density Estimation

$$MISE \approx \underbrace{\frac{1}{4} c_1^2 h^4 \int (f''(x))^2 dx}_{\int b(x)^2 dx, \text{ } O(h^4)} + \underbrace{\frac{\int K^2(x) dx}{nh}}_{\int \text{var}(x) dx, \text{ } O(\frac{1}{nh})}$$

Handwritten note: "effective sample size" points to $nh$.

Optimal bandwidth is
$$h_* = \left( \frac{c_2}{c_1^2 A(f) n} \right)^{1/5}$$

where $c_1 = \int x^2 K(x) dx$, $c_2 = \int K(x)^2 dx$ and $A(f) = \int (f''(x))^2 dx$.

Handwritten notes on rates:
$h^4 \sim \frac{1}{nh} \implies h^5 \sim \frac{1}{n} \implies h \sim \frac{1}{n^{1/5}}$

Then,
$$MISE \sim \frac{C_3}{n^{4/5}}$$

Handwritten note: $MISE \sim \dots \sim \frac{1}{n^{4/5}}$

Lecture 19 – p. 20/28

### Visual Description
A slide presenting the mathematical analysis of MISE for KDE. It shows the approximation of MISE as a sum of integrated squared bias and integrated variance. Handwritten annotations identify the order of magnitude for each term ($O(h^4)$ and $O(1/nh)$) and derive the optimal bandwidth rate $h \sim n^{-1/5}$, leading to the optimal MISE rate of $n^{-4/5}$.

---
## Page 25
### Content
# The Bias–Variance Tradeoff

For many smoothers:
$$MISE \approx c_1h^4 + \frac{c_2}{nh}$$

which is minimized at
$$h = O\left(\frac{1}{n^{1/5}}\right)$$

Hence,
$$MISE = O\left(\frac{1}{n^{4/5}}\right)$$

whereas, for parametric problems
$$MISE = O\left(\frac{1}{n}\right)$$

Lecture 19 – p. 21/28

### Visual Description
Text-only slide containing mathematical formulas related to the Mean Integrated Squared Error (MISE) and its optimization with respect to the bandwidth $h$ and sample size $n$.

---
## Page 26
### Content
# Comparisons

So, for parametric form, if it’s correct,
$$MISE \sim \frac{C_1}{n}$$

For histograms,
$$MISE \sim \frac{C_2}{n^{2/3}}$$

For kernel density estimators,
$$MISE \sim \frac{C_3}{n^{4/5}}$$

Lecture 19 – p. 22/28

### Visual Description
Text-only slide comparing the convergence rates of MISE for parametric models, histograms, and kernel density estimators.

---
## Page 27
### Content
[Handwritten notes on grid paper]

*   **Diagram:** A geometric representation of function space. A large circle represents the "Model space $\mathcal{F}$". Outside the circle is a point labeled "true pdf $f(\cdot)$". On the boundary of the circle is a point labeled "best fit $f^*$". Inside the circle is a point labeled $\hat{f}_n$. Lines connect these points to form a triangle.

*   **Equations:**
    $$\|f_{true} - \hat{f}\|^2 \leq \|f_{true} - f^*\|^2 + \|f^* - \hat{f}\|^2$$
    $$Risk = \mathbb{E}(\|\hat{f} - f_{true}\|^2) \leq \|f_{true} - f^*\|^2 + \mathbb{E}(\|f^* - \hat{f}\|^2)$$

*   **Labels:**
    *   $\|f_{true} - f^*\|^2$ is labeled as "model bias".
    *   $\mathbb{E}(\|f^* - \hat{f}\|^2)$ is labeled as "estimation 'bias' + estimation variance".

### Visual Description
A hand-drawn diagram on a grid background illustrating the decomposition of risk into model bias and estimation error (bias and variance) using a geometric analogy in function space.

---
## Page 28
### Content
# Comparisons

![Graph of truth vs closest normal](truth_vs_normal_plot)

Truth is standard normal.

Lecture 19 – p. 23/28

### Visual Description
The slide shows a plot of a probability density function $f(x)$ against $x$ ranging from -4 to 4. Two curves are plotted: a solid red line labeled "truth" and a dashed blue line labeled "closest normal". Since the truth is a standard normal distribution, the two curves overlap perfectly.

---
## Page 29
### Content
# Comparisons

![Graph of MSE vs sample size](mse_vs_n_normal_truth)

Assuming normality has its advantages.

Lecture 19 – p. 24/28

### Visual Description
A plot showing Mean Squared Error (MSE) on the y-axis (ranging from 0 to $4e-05$) versus sample size $n$ on the x-axis (ranging from 0 to 1000). Two lines are shown: a solid red line for the "normal" (parametric) estimator and a dashed blue line for the "kernel" (non-parametric) estimator. The red line is consistently lower than the blue line, indicating lower error for the parametric model when the underlying distribution is indeed normal. There are some red handwritten marks on the graph.

---
## Page 30
### Content
# Comparisons

![Graph of truth vs closest normal for t-distribution](truth_vs_normal_t_dist)

Truth is $t$-distribution with 5 degrees of freedom.

Lecture 19 – p. 25/28

### Visual Description
A plot of $f(x)$ versus $x$ from -4 to 4. A solid red line represents the "truth" (a $t$-distribution with 5 degrees of freedom), and a dashed blue line represents the "closest normal" distribution. The $t$-distribution has a higher peak and heavier tails than the normal approximation.

---
## Page 31
### Content
# Comparisons

![Graph of MSE vs sample size for t-distribution](mse_vs_n_t_dist)

Normal assumption costs, even for moderate sample size.

[Handwritten note pointing to the red line's plateau]: "non-vanishing model bias"

Lecture 19 – p. 26/28

### Visual Description
A plot of MSE versus sample size $n$. The solid red line (normal estimator) initially has lower error but plateaus at a non-zero value. The dashed blue line (kernel estimator) starts higher but continues to decrease, crossing below the red line at approximately $n=300$. A handwritten note indicates that the red line's failure to reach zero is due to "non-vanishing model bias".

---
## Page 32
### Content
# Cross-Validation

[Handwritten at top]: $f(y|x)$, $\int \int (f(y|x) - \hat{f}(y|x))^2 dy dP(x)$, $\hat{f}(y|x)$

The MISE can be estimated using only the data, via cross-validation:
$$\int (\hat{f}(x))^2 dx - \frac{2}{n} \sum_{i=1}^n \hat{f}_{(-i)}(X_i)$$

where $\hat{f}_{(-i)}$ is the density estimator obtained after removing the $i^{th}$ observation.

The point: objective choice of $h$ is possible.

Lecture 19 – p. 27/28

### Visual Description
The slide presents the formula for estimating MISE using leave-one-out cross-validation. It includes a mathematical expression with an integral and a summation. There are handwritten annotations at the top and a circle around "MISE" in the text.
## Page 33
### Content
How to choose smoothing parameter $h$

Recall loss function:
$$ISE = \int (f(x) - \hat{f}(x))^2 dx$$
$$= \int (f(x)^2 - 2f(x)\hat{f}(x) + \hat{f}(x)^2) dx$$
$$= \underbrace{\int \hat{f}(x)^2 dx - 2 \int \hat{f}(x)f(x) dx}_{\text{Score } J(h)} + \underbrace{\int f(x)^2 dx}_{\text{const that doesn't depend on } h}$$

Note: $\int \hat{f}(x)f(x) dx = E[\hat{f}(X)]$ where $X \sim f$ (randomness from $X$, consider fixed $\hat{f}$).

LOOCV $\equiv$ n-fold
$$\hat{J}(h) = \int \hat{f}^2(x) dx - \frac{2}{n} \sum_{i=1}^n \hat{f}_{(-i)}(X_i)$$
for $X_1, \dots, X_n$ validation sample $\sim f$.

### Visual Description
Handwritten notes on a grid background. The page derives the score function $J(h)$ for density estimation and introduces the Leave-One-Out Cross-Validation (LOOCV) estimator $\hat{J}(h)$. There is a small diagram at the bottom right showing a row of boxes with one circled, labeled "hold-out".

---
## Page 34
### Content
$$E[\hat{J}(h)] \approx J(h)$$

LOOCV: nearly unbiased estimator of $J(h)$

### Visual Description
Handwritten notes on a grid background. The slide contains a single mathematical statement and a brief explanatory note in blue ink.

---
## Page 35
### Content
# Nonparametric Curve Estimation

If a *parametric* model is "correct", then it converges faster to the truth with the rate $MISE \sim C_1/n$.

Parametric approaches are however less flexible because of the structural assumptions. So even as $n \to \infty$, we may end up with a nonvanishing "model bias".

*Handwritten note:* $MISE(h) = O(h^4) + O\left(\frac{1}{nh^d}\right)$

Nonparametric approaches are more flexible but have slower rates, especially in high dimensions. The optimal nonparametric rate in $d$ dimensions is $MISE \sim \frac{C_2}{n^{4/(4+d)}}$. *Handwritten note:* "check this!"

In practice, we use *cross-validation* to estimate risk. We choose the model (including tuning parameters) with the lowest *estimated* risk.

Lecture 19 – p. 28/28

### Visual Description
A formal lecture slide with the title "Nonparametric Curve Estimation" in blue. The main text is printed in black. There are several handwritten annotations in blue and red ink, including a formula for MISE and a circled rate with the comment "check this!".

---
## Page 36
### Content
$$R(h) = O(h^4) + O\left(\frac{1}{nh^d}\right)$$

$$h^4 \sim \frac{1}{nh^d}$$
$$h^{4+d} \sim \frac{1}{n}$$
$$h_* \sim n^{-\frac{1}{4+d}}$$

Boxed result:
$$R(h^*) \sim n^{-\frac{4}{4+d}}$$

### Visual Description
Handwritten notes on a grid background. The page shows the derivation of the optimal bandwidth $h_*$ and the resulting risk rate $R(h^*)$ by balancing the bias and variance terms. There is a small sketch of a circle with radius $h$ in the top left.

---
## Page 37
### Content
Exponent: $\frac{4}{4+d}$

$d=1 \implies 4/5$
$d=100 \implies 4/104$

Suppose we need $N$ pts for $MISE = \delta$.
Then we need $N^{104/5}$ pts for $MISE = \delta$ in $d=100$.

Example:
$d=1$: $N=100$ observations
$d=100$: $N \approx 100^{104/5} \approx 4 \cdot 10^{41}$ observations.

**curse of dimensionality**

### Visual Description
Handwritten notes on a grid background. The page illustrates the "curse of dimensionality" by comparing the number of observations needed to maintain a certain MISE as the dimension $d$ increases from 1 to 100.

---
## Page 38
### Content
Lecture 9 Overview: Nonparametric Density Estimation

# LECTURE 9 OVERVIEW: NONPARAMETRIC DENSITY ESTIMATION

### REFERENCES
Wasserman Sections 20.1-20.3

### OVERVIEW
Here we turn our attention to density estimation; that is, estimating the marginal distribution $F_X$ (or its density $f_x$) given $X_1, \dots, X_n$, or more generally, estimating the joint distribution $F_{X,Y}$ given $(X_1, Y_1), \dots, (X_n, Y_n)$.

You've already seen parametric solutions to the problem of density estimation in this course: posit a parametric model for the density (Gaussian, exponential, and so on) and estimate the parameters. In this lecture, we discuss fully nonparametric approaches to density estimation with pros and cons.

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
$$MISE = E\left(\int (f(x) - \hat{f}(x))^2 dx\right) \approx \frac{h^2}{12} \int (f'(u))^2 du + \frac{1}{nh}$$
The value $h^*$ that minimizes this is
$$h^* = \frac{1}{n^{1/3}} \left( \frac{6}{\int (f'(u))^2 du} \right)^{1/3}$$
and then
$$MISE \sim \frac{C_2}{n^{2/3}}$$

36-700 Probability and Mathematical Statistics • Fall 2025 • Lee | Page 1 of 2

### Visual Description
Text-only slide. This is a formal summary document titled "Lecture 9 Overview: Nonparametric Density Estimation". It contains structured sections for References, Overview, Definitions, and Key Results.

---
## Page 39
### Content
Lecture 9 Overview: Nonparametric Density Estimation

2. **Performance of Kernel Density Estimator:**
For kernel density estimator,
$$MISE \approx \frac{1}{4} c_1^2 h^4 \int (f''(x))^2 dx + \frac{\int K^2(x) dx}{nh}$$
The optimal bandwidth is
$$h_* = \left( \frac{c_2}{c_1^2 A(f) n} \right)^{1/5}$$
where $c_1 = \int x^2 K(x) dx$, $c_2 = \int K(x)^2 dx$ and $A(f) = \int (f''(x))^2 dx$.
Then,
$$MISE \sim \frac{C_3}{n^{4/5}}$$
*Question: Can you derive the optimal nonparametric rate in d dimensions by balancing bias versus variance?*

3. **Least Squares Cross-Validation:**
Let
$$J(h) = \int \hat{f}^2(x) dx - 2 \int \hat{f}(x) f(x) dx$$
Then
$$MISE = E(J(h)) + \text{constant which does not depend on } h$$
and
$$\hat{J}(h) = \int \hat{f}^2(x) dx - \frac{2}{n} \sum_{i=1}^n \hat{f}_{(-i)}(X_i)$$
is such that $E(\hat{J}(h)) \approx E(J(h))$. In fact, for kernel density estimators, $E(\hat{J}(h)) = E(J(h))$.
Here, $\hat{f}_{(-i)}$ is the estimate of $f$ formed by leaving out the $i^{th}$ observation.
This motivates choosing $h$ to minimize $\hat{J}(h)$, which can be calculated using only the observed data.

36-700 Probability and Mathematical Statistics • Fall 2025 • Lee | Page 2 of 2

### Visual Description
Text-only slide. This is the second page of the formal summary document. It continues the "Key Results and Ideas" section, focusing on Kernel Density Estimators and Least Squares Cross-Validation. There is a small blue handwritten mark at the bottom.
