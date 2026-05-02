# canvas-15-06-13643294-slides_Chapter10.npreg.Part2

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-15-06-13643294-slides_Chapter10.npreg.Part2.pdf`
Duplicate equivalents: `canvas-15-06-13643294-slides_Chapter10.npreg.Part2.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 18

## Page 1
### Content
**CHAPTER 10 – Non-parametric Regression, Part II**

**Goal:** estimate the regression function $r(x) = \mathbb{E}[Y|X = x]$

**Regressogram**

### Visual Description
Four scatter plots are shown, each displaying "log ratio" vs "range". Overlaid on each scatter plot is a "regressogram," which is a piecewise constant step function. The four plots show the effect of different bin widths: the top-left has the fewest/widest bins, and the bottom-right has the most/narrowest bins, showing increasing levels of detail (and potential noise) in the fit.

---
## Page 2
### Content
**Notation**

$m$ bins of equal length: $B_1, \dots, B_m$

$k_j$: number of observations in bin $B_j$

$\bar{Y}_j$: mean of the $Y_i$'s in bin $B_j$

The fitted regression function is
$$\forall x \in B_j, \quad \hat{r}_n(x) = \frac{1}{k_j} \sum_{i: X_i \in B_j} Y_i = \bar{Y}_j$$

or
$$\forall x, \quad \hat{r}_n(x) = \sum_{i=1}^n w_i(x) Y_i$$

where 
$$\begin{cases} w_i(x) = 1/k_j & \text{if } x \in B_j \\ w_i(x) = 0 & \text{otherwise} \end{cases}$$

### Visual Description
Text-only slide with mathematical notation and formulas for the regressogram estimator.

---
## Page 3
### Content
**Kernel Regression**

As before
$$\hat{r}_n(x) = \sum_{i=1}^n w_i(x) Y_i$$

where
$$w_i(x) = \frac{K\left(\frac{X_i - x}{h}\right)}{\sum_{i=1}^n K\left(\frac{X_i - x}{h}\right)}$$

$K$ is a kernel such that:
1. $K(x) \ge 0$
2. $\int K(x) dx = 1$
3. $\int x K(x) dx = 0$

and $h$ is the bandwidth that controls the amount of smoothing

Common kernels are Uniform and Gaussian:
$$K(x) = \frac{1}{2} I\{x \in [-1, 1]\} \quad \text{and} \quad K(x) = \frac{1}{\sqrt{2\pi}} \exp(-x^2/2)$$

### Visual Description
Text-only slide defining kernel regression, the weight function, kernel properties, and common kernel types.

---
## Page 4
### Content
[No text on this page]

### Visual Description
Four plots showing the results of kernel regression on the same dataset with different bandwidths ($h$). 
- Top-left: Very small bandwidth, resulting in a very jagged, wiggly line that follows the noise (overfitting).
- Top-right: Small bandwidth, still somewhat wiggly.
- Bottom-left: Moderate bandwidth, providing a smooth curve that captures the general trend of the data.
- Bottom-right: Large bandwidth, resulting in a very flat, overly smooth curve that misses the peak of the data (underfitting).

---
## Page 5
### Content
*Recall:*
**Choosing the Smoothing Parameter**

Prediction risk:
$$R(h) = \mathbb{E}(Y - \hat{r}_n(X))^2$$

decomposed as:
$$R(h) = \sigma^2 + \int b^2(x) f_X(x) dx + \int v(x) f_X(x) dx$$

where
$$b(x) = \mathbb{E}(\hat{r}_n(x)) - r(x)$$
$$v(x) = \mathbb{E}(\hat{r}_n(x) - \mathbb{E}[\hat{r}_n(x)])^2$$

### Visual Description
Text-only slide with mathematical formulas for prediction risk and its decomposition into bias and variance components. There is a handwritten blue note at the top left that says "Recall:".

---
## Page 6
### Content
[No text on this page]

### Visual Description
A graph illustrating the bias-variance tradeoff. The x-axis represents the amount of smoothing, labeled with "Less smoothing" on the left and "More smoothing" on the right. 
- A dotted line labeled "Variance" decreases as smoothing increases.
- A dotted line labeled "Bias squared" increases as smoothing increases.
- A solid U-shaped curve labeled "Risk" represents the sum of these components.
- A vertical line marks the "Optimal smoothing" point at the minimum of the Risk curve.

---
## Page 7
### Content
Choose $h$ to minimize $R(h) \stackrel{\text{def}}{=} \mathbb{E}[(Y - \hat{r}_n(X))^2]$

but $R(h)$ depends on $r(x)$ to calculate $b(x)$ and $v(x)$

So minimize an estimate $\hat{R}(h)$ of $R(h)$

**Method 1**

**training error**
$$R_{\text{training}} = \frac{1}{n} \sum_{i=1}^n (Y_i - \hat{r}_n(X_i))^2$$

**leave-one-out cross-validation score**
$$CV(h) = \frac{1}{n} \sum_{i=1}^n (Y_i - \hat{r}_{(-i)}(X_i))^2$$

### Visual Description
Text-only slide explaining the goal of minimizing risk and introducing training error and cross-validation as methods. There are handwritten blue notes: a definition of $R(h)$ at the top and "Method 1" above the training error section.

---
## Page 8
### Content
[No text on this page]

### Visual Description
Two plots are shown.
- The top plot shows a U-shaped curve, likely representing the Cross-Validation score $CV(h)$ as a function of the bandwidth $h$. The x-axis has values like 24, 26, 28, 30, with the minimum of the curve appearing around 28.
- The bottom plot shows a scatter plot of data points with a fitted kernel regression curve. The curve is smooth in the dense region of data (left side) and becomes more erratic/wiggly in the sparse region (right side). The x-axis ranges from 0 to 800, and the y-axis ranges from 1000 to 5000.

---
## Page 9
### Content
(From ESL by Hastie, Tibshirani/Friedman)
**2.2 Assessing Model Accuracy** 31

![Figure 2.9: Left: Data simulated from $f$, shown in black. Three estimates of $f$ are shown: the linear regression line (orange curve), and two smoothing spline fits (blue and green curves). Right: Training MSE (grey curve), test MSE (red curve), and minimum possible test MSE over all methods (dashed line). Squares represent the training and test MSEs for the three fits shown in the left-hand panel.](figure_2_9.png)

**FIGURE 2.9.** Left: Data simulated from $f$, shown in black. Three estimates of $f$ are shown: the linear regression line (orange curve), and two smoothing spline fits (blue and green curves). Right: Training MSE (grey curve), test MSE (red curve), and minimum possible test MSE over all methods (dashed line). Squares represent the training and test MSEs for the three fits shown in the left-hand panel.

### Visual Description
The slide features two plots side-by-side. The left plot shows a scatter of data points with three fitted curves: an orange straight line, a smooth blue curve, and a wiggly green curve. The right plot shows Mean Squared Error (MSE) on the y-axis versus Flexibility on the x-axis. It contains a grey curve (Training MSE) decreasing with flexibility, a red U-shaped curve (Test MSE), and a horizontal dashed line representing the irreducible error. Colored squares on the curves correspond to the three models shown in the left plot. There is a handwritten note at the top left: "(From ESL by Hastie, Tibshirani/Friedman)".

---
## Page 10
### Content
**Method 2**

### Visual Description
Text-only slide. The words "Method 2" are handwritten in blue ink at the top left of a page with a light yellow grid (graph paper) background.

---
## Page 11
### Content
**Note:**

Instead of prediction risk (if not interested in making predictions), look at risk of estimating $r$ with $\hat{r}$, using some loss (KL, L1, L2, ... distances).

E.g. *integrated* squared loss:
$$L(\hat{r}, r) = \int (\hat{r}(x) - r(x))^2 dx$$

Risk = expected loss:
$$R(\hat{r}, r) = \mathbb{E} \left( \int (\hat{r}(x) - r(x))^2 dx \right)$$

We can prove:
$$R(\hat{r}, r) = \int b^2(x) dx + \int v(x) dx$$

where (same as before)
$$b(x) = \mathbb{E}(\hat{r}(x)) - r^*(x)$$
$$v(x) = \mathbb{E}(\hat{r}(x) - \mathbb{E}(\hat{r}(x)))^2$$

9

### Visual Description
Text and mathematical formulas presented on a light yellow grid background. The slide is numbered "9" at the bottom center.

---
## Page 12
### Content
.

We know how to estimate the risk so that we can choose a bandwidth and other tuning parameters

But what can we say about the efficiency of regression estimators? That is, how does the risk behave as a function of $n$?

10

### Visual Description
Text-only slide. Two paragraphs of text are centered on a light yellow grid background. The slide is numbered "10" at the bottom center.

---
## Page 13
### Content
**Analysis of the Regressogram**

**Recall:**
$m$ bins $B_1, \dots, B_m$ of equal length
$k_j$: number of observations in bin $B_j$
$$\hat{r}_n(x) = \sum_{i=1}^n w_i(x) Y_i$$
where $\begin{cases} w_i(x) = 1/k_j & \text{if } (x, X_i) \in B_j \\ w_i(x) = 0 & \text{otherwise} \end{cases}$

**Assume:**
$$y_i = r^*(x_i) + \epsilon_i$$
where:
* $x_i$'s are 1D equally spaced on $[0, 1] \implies$ bins have $k = n/m$ points and the bin width is $h = 1/m$
* $r^*(x) = \mathbb{E}[Y|X = x]$ is such that $\exists L$:
$$\left| \frac{d}{dx} r^*(x) \right| \le L$$
* i.i.d noise with $\mathbb{E}[\epsilon_i] = 0, \text{Var}[\epsilon_i] = \sigma^2$

11

### Visual Description
Text and mathematical formulas on a light yellow grid background. It outlines the setup and assumptions for analyzing a regressogram. The slide is numbered "11" at the bottom center.

---
## Page 14
### Content
**Main result:**

$$b(x) = \mathbb{E}[\hat{r}(x)] - r^*(x) \le Lh$$

$$\text{Var}(\hat{r}(x)) = \mathbb{E}(\hat{r}(x) - \mathbb{E}(\hat{r}(x)))^2 \le \frac{\sigma^2}{nh}$$

The integrated risk is:
$$R(\hat{r}, r) = \int b^2(x) dx + \int v(x) dx \le L^2 h^2 + \frac{\sigma^2}{nh}$$

minimized at:
$$h = \left( \frac{\sigma^2}{2nL^2} \right)^{1/3}$$

so min risk is:
$$R(\hat{r}, r) \le \frac{2L^{2/3} \sigma^{4/3}}{n^{2/3}} = 2 \left( \frac{L\sigma^2}{n} \right)^{2/3} = O(n^{-2/3})$$

12

### Visual Description
Text and mathematical formulas on a light yellow grid background. It presents the main theoretical results for the bias, variance, and risk of the regressogram, including the optimal bandwidth and convergence rate. The slide is numbered "12" at the bottom center.

---
## Page 15
### Content
**Proof:**
$|b(x)| = |\mathbb{E}(\hat{r}(x)) - r(x)|$
$= \left| \mathbb{E} \left( \sum_i w_i(x) Y_i \right) - r(x) \left( \sum_i w_i(x) \right) \right|$ since $\sum_i w_i(x) = 1$
$= \left| \sum_i w_i(x) \mathbb{E}(Y_i) - r(x) \left( \sum_i w_i(x) \right) \right|$
$= \left| \sum_i w_i(x) (r^*(X_i) - r^*(x)) \right| \le \sum_i w_i(x) |r^*(X_i) - r^*(x)|$ since $w_i(x) \ge 0$
$\le \sum_i w_i(x) L |X_i - x|$ since the slope of $r$ is bounded
$\le \sum_i w_i(x) Lh$, since $X_i$ and $x$ are in the same bin, so that $|X_i - x| \le h$
$= Lh \sum_i w_i(x) = Lh$

$$v(x) = \frac{\sigma^2}{k} = \frac{m\sigma^2}{n} = \frac{\sigma^2}{nh} \text{ since } k = n/m = nh$$

$\implies \text{MSE}(x) \le h^2 L^2 + \frac{\sigma^2}{nh}$ and integrate w.r.t. $x$ QED

13

### Visual Description
Mathematical proof presented step-by-step on a light yellow grid background. It derives the bias and variance bounds for the regressogram. The slide is numbered "13" at the bottom center.

---
## Page 16
### Content
**Analysis of Kernel Regression**

The risk (using integrated squared error loss) is
$$R(h) \approx \frac{h^4}{4} C + \frac{D}{nh}$$
as $n \to \infty, h \to 0$ and $nh \to \infty$

where $C$ and $D$ are some constants involving $K$ and the unknown $r$ and its derivatives (so we cannot calculate $C$ and $D$)

$R(h)$ minimized at:
$$h = \left( \frac{1}{n} \right)^{1/5} \left( \frac{D}{C} \right)^{1/5}$$

So min risk is $O(n^{-4/5})$

14

### Visual Description
Text and mathematical formulas on a light yellow grid background. It provides the risk analysis for kernel regression, showing the optimal bandwidth and the $O(n^{-4/5})$ convergence rate. The slide is numbered "14" at the bottom center.
## Page 17
### Content
(From Györfi, "A distribution-free theory of nonparametric regression")

1.7. Rate of Convergence 13

**Definition 1.1.** A sequence of regression function estimates $\{m_n\}$ is called **weakly consistent for a certain distribution of $(X, Y)$**, if
$$\lim_{n \to \infty} \mathbf{E} \left\{ \int (m_n(x) - m(x))^2 \mu(dx) \right\} = 0.$$

**Definition 1.2.** A sequence of regression function estimates $\{m_n\}$ is called **strongly consistent for a certain distribution of $(X, Y)$**, if
$$\lim_{n \to \infty} \int (m_n(x) - m(x))^2 \mu(dx) = 0 \quad \text{with probability one.}$$

It may be that a regression function estimate is consistent for a certain class of distributions of $(X, Y)$, but not consistent for others. It is clearly desirable to have estimates that are consistent for a large class of distributions. In this monograph we are interested in properties of $m_n$ that are valid for all distributions of $(X, Y)$, that is, in distribution-free or universal properties. The concept of universal consistency is important in nonparametric regression because the mere use of a nonparametric estimate is normally a consequence of the partial or total lack of information about the distribution of $(X, Y)$. Since in many situations we do not have any prior information about the distribution, it is essential to have estimates that perform well for *all* distributions. This very strong requirement of universal goodness is formulated as follows:

**Definition 1.3.** A sequence of regression function estimates $\{m_n\}$ is called **weakly universally consistent** if it is weakly consistent for all distributions of $(X, Y)$ with $\mathbf{E}\{Y^2\} < \infty$.

**Definition 1.4.** A sequence of regression function estimates $\{m_n\}$ is called **strongly universally consistent** if it is strongly consistent for all distributions of $(X, Y)$ with $\mathbf{E}\{Y^2\} < \infty$.

We will later give many examples of estimates that are weakly and strongly universally consistent.

### 1.7 Rate of Convergence

If an estimate is universally consistent, then, regardless of the true underlying distribution of $(X, Y)$, the $L_2$ error of the estimate converges to zero for a sample size tending to infinity. But this says nothing about how fast this happens. Clearly, it is desirable to have estimates for which the $L_2$ error converges to zero as fast as possible.

To decide about the rate of convergence of an estimate $m_n$, we will look at the expectation of the $L_2$ error,
$$\mathbf{E} \int |m_n(x) - m(x)|^2 \mu(dx). \tag{1.10}$$

### Visual Description
Text-heavy page containing mathematical definitions and formulas related to the consistency and rate of convergence of regression function estimates. There is a handwritten note in blue ink at the top: "(From Györfi, "A distribution-free theory of nonparametric regression)".

---
## Page 18
### Content
14 1. Why Is Nonparametric Regression Important?

A natural question to ask is whether there exist estimates for which (1.10) converges to zero at some fixed, nontrivial rate for all distributions of $(X, Y)$. Unfortunately, as we will see in Chapter 3, such estimates do not exist, i.e., for any estimate the rate of convergence may be arbitrarily slow. In order to get nontrivial rates of convergence, one has to restrict the class of distributions, e.g., by imposing some smoothness assumptions on the regression function.

In Chapter 3 we will define classes $\mathcal{F}_p$ of the distributions of $(X, Y)$ where the corresponding regression function satisfies some smoothness condition depending on a parameter $p$ (e.g., $m$ is $p$ times continuously differentiable). We then use the classical minimax approach to define the optimal rate of convergence for such classes $\mathcal{F}_p$. This means that we will try to minimize the maximal value of (1.10) within the class $\mathcal{F}_p$ of the distributions of $(X, Y)$, i.e., we will look at
$$\inf_{\hat{m}_n} \sup_{(X,Y) \in \mathcal{F}_p} \mathbf{E} \int |\hat{m}_n(x) - m(x)|^2 \mu(dx), \tag{1.11}$$
where the infimum is taken over all estimates $\hat{m}_n$. We are interested in optimal estimates $m_n$, for which the maximal value of (1.10) within $\mathcal{F}_p$, i.e.,
$$\sup_{(X,Y) \in \mathcal{F}_p} \mathbf{E} \int |m_n(x) - m(x)|^2 \mu(dx), \tag{1.12}$$
is close to (1.11).

To simplify our analysis, we will only look at the asymptotic behavior of (1.11) and (1.12), i.e., we will determine the rate of convergence of (1.11) to zero for a sample size tending to infinity, and we will construct estimates which achieve (up to some constant factor) the same rate of convergence. For classes $\mathcal{F}_p$, where $m$ is $p$ times continuously differentiable, the optimal rate of convergence will be $n^{-\frac{2p}{2p+d}}$.

### 1.8 Adaptation

Often, estimates which achieve the optimal minimax rate of convergence for a given class $\mathcal{F}_{p_0}$ of distributions (where, e.g., $m$ is $p_0$ times continuously differentiable) require the knowledge of $p_0$ and are adjusted perfectly to this class of distributions. Therefore they don't achieve the optimal rate of convergence for other classes $\mathcal{F}_p, p \neq p_0$.

If one could find out in an application to which classes of distributions the true underlying distribution belongs, then one could choose that class which has the best rate of convergence (which will be the smallest class in the case of nested classes), and could choose an estimate which achieves the optimal minimax rate of convergence within this class. This, however,

### Visual Description
Text-only slide. This page continues the discussion on the rate of convergence in nonparametric regression, introducing the minimax approach and the concept of adaptation to unknown smoothness classes. It contains several mathematical expressions and formulas.
