# canvas-15-02-13652554-annotated.slides_Chapter10.npreg.Part2

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-15-02-13652554-annotated.slides_Chapter10.npreg.Part2.pdf`
Duplicate equivalents: `canvas-15-02-13652554-annotated.slides_Chapter10.npreg.Part2.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 22

## Page 1
### Content
**CHAPTER 10 – Non-parametric Regression, Part II**

**Goal:** estimate the regression function $r(x) = \mathbb{E}[Y|X = x]$

**Ex 1. Regressogram**

[Four plots showing scatter data with step-function regression estimates (regressograms) using different bin widths.]

### Visual Description
The slide contains four scatter plots arranged in a 2x2 grid. Each plot shows "log ratio" on the y-axis (from -1.0 to -0.2) versus "range" on the x-axis (from 400 to 700). Overlaid on the scatter points are black step functions representing regressograms. The top-left plot has the largest bins (coarsest estimate), and the bins become progressively smaller (finer estimate) moving to the right and then down. There is a handwritten "Ex 1." in blue next to the title "Regressogram".

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

where $\begin{cases} w_i(x) = 1/k_j & \text{if } x \in B_j \\ w_i(x) = 0 & \text{otherwise} \end{cases}$

[Handwritten notes in blue:]
"linear smoother"
$\underline{Y} = \begin{bmatrix} Y_1 \\ \vdots \\ Y_n \end{bmatrix}$
$\underline{\hat{Y}} = \begin{bmatrix} \hat{r}(X_1) \\ \vdots \\ \hat{r}(X_n) \end{bmatrix}$
$\underline{\hat{Y}} = S \underline{Y}$
"linear smoother"

### Visual Description
Text-heavy slide with mathematical definitions for a regressogram. It includes blue handwritten annotations defining the regression function as a "linear smoother" and expressing the fitted values in vector-matrix form $\underline{\hat{Y}} = S \underline{Y}$.

---
## Page 3
### Content
**Ex 2. Kernel Regression**

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

[Handwritten notes in blue:]
"linear smoother"
$\Rightarrow \underline{\hat{Y}} = S \underline{Y}$
$S$ is an $n \times n$ matrix

### Visual Description
Text-heavy slide defining Kernel Regression. It lists the properties of a kernel and provides examples of common kernels. Blue handwritten notes identify this as another "linear smoother" and show the matrix representation $\underline{\hat{Y}} = S \underline{Y}$, noting that $S$ is an $n \times n$ matrix.

---
## Page 4
### Content
[Four plots showing kernel regression with different bandwidths.]

[Handwritten note in red:]
$r(x) \stackrel{?}{=} \mathbb{E}[Y|X=x]$

### Visual Description
The slide displays four plots in a 2x2 grid. 
- Top-left: A dense, noisy scatter plot forming a triangular/mountain shape.
- Top-right: The same data with a very wiggly black line (low bandwidth kernel estimate).
- Bottom-left: The same data with a smoother black line (medium bandwidth).
- Bottom-right: The same data with three different curves (a smooth black line, a blue line, and a red dashed line) representing different levels of smoothing. 
There is a red handwritten formula at the top right of the grid: $r(x) \stackrel{?}{=} \mathbb{E}[Y|X=x]$.

---
## Page 5
### Content
**Recall:**
**Choosing the Smoothing Parameter**

Prediction risk:
$$R(h) = \mathbb{E}(Y - \hat{r}_n(X))^2$$

decomposed as:
$$R(h) = \sigma^2 + \int b^2(x) f_X(x) dx + \int v(x) f_X(x) dx$$

where
$$b(x) = \mathbb{E}(\hat{r}_n(x)) - r(x)$$
$$v(x) = \mathbb{E}(\hat{r}_n(x) - \mathbb{E}[\hat{r}_n(x)])^2$$

### Visual Description
Text-only slide. It presents the mathematical decomposition of prediction risk into bias and variance components for choosing a smoothing parameter. There is a blue handwritten "Recall:" at the top left.

---
## Page 6
### Content
[Graph showing the Bias-Variance Tradeoff]

### Visual Description
The slide contains a single graph illustrating the bias-variance tradeoff. The x-axis represents the amount of smoothing, labeled with "Less smoothing" on the left, "Optimal smoothing" in the middle, and "More smoothing" on the right. Three curves are shown:
- **Variance:** A dotted line that decreases as smoothing increases.
- **Bias squared:** A dotted line that increases as smoothing increases.
- **Risk:** A solid U-shaped curve representing the sum of bias squared and variance.
A vertical line indicates the "Optimal smoothing" point at the minimum of the Risk curve.

---
## Page 7
### Content
Choose $h$ to minimize $R(h)$ [Handwritten: $\stackrel{\text{def}}{=} \mathbb{E}[(Y - \hat{r}_n(X))^2]$]

but $R(h)$ depends on $r(x)$ to calculate $b(x)$ and $v(x)$

So minimize an estimate $\hat{R}(h)$ of $R(h)$

**Method 1 Cross-validation or Data splitting** [Handwritten title]

**training error**
$$R_{\text{training}} = \frac{1}{n} \sum_{i=1}^n (Y_i - \hat{r}_n(X_i))^2$$
[Handwritten note:] $\mathbb{E}[R_{\text{train}}] < R$ because $Y_i$ included in train data. [Arrow pointing to $\hat{r}_n(X_i)$ with note $\hat{r}(X_i; D)$]

**leave-one-out cross-validation score**
$$CV(h) = \frac{1}{n} \sum_{i=1}^n (Y_i - \hat{r}_{(-i)}(X_i))^2$$

### Visual Description
Text-heavy slide explaining how to choose the bandwidth $h$. It introduces training error and leave-one-out cross-validation. Blue handwritten notes add definitions and explain why training error is a biased estimate of risk.

---
## Page 8
### Content
[Two plots related to cross-validation and final regression fit.]

### Visual Description
The slide contains two plots:
- **Top plot:** A U-shaped curve on a graph with an x-axis ranging from 24 to 30. This likely represents the cross-validation score $CV(h)$ as a function of bandwidth $h$, showing a minimum around 27-28.
- **Bottom plot:** A scatter plot with a fitted kernel regression curve. The x-axis ranges from 0 to 800, and the y-axis ranges from 1000 to 5000. The fitted curve follows the main trend of the data but becomes very wiggly at the right end where data points are sparse.
## Page 9
### Content
Lecture 7A: Bias-Variance Decomposition of Prediction Error

ADDED: Oct 12, 2021

**Training and Test Errors**

Q: *How are we going to quantify this (overfitting vs underfitting)?*

Let’s call $(X_1, Y_1), \dots, (X_n, Y_n)$, the sample of data that we used to fit $\hat{r}$, our *training sample*. What’s wrong with looking at how well we do in fitting the training points themselves, i.e., the *training error* or *expected training error*, defined as

**Notes:** We define
$$\text{TrainErr}(\hat{r}) = \frac{1}{n} \sum_{i=1}^n (Y_i - \hat{Y}_i)^2 = \frac{1}{n} \sum_{i=1}^n (Y_i - \hat{r}(X_i))^2,$$
using our prediction. Hence
$$\mathbb{E}[\text{TrainErr}(\hat{r})] = \mathbb{E} \left[ \frac{1}{n} \sum_{i=1}^n (Y_i - \hat{r}(X_i))^2 \right].$$

This tells us something, but not necessarily what we want. If we want to know how well $\hat{r}(x)$ will work for predicting *new* data, it is way too optimistic. Notice that $Y_i$ and $\hat{Y}_i$ are correlated here, because $\hat{r}$ is estimated using the data $Y_i$.

Typically, $\hat{Y}_i$ “predicts” $Y_i$ better than it predicts a new $Y$ corresponding to a new $r(x) + \epsilon$.

Question: If we let $k = 1$ in the $k$-nearest-neighbors regression example, what happens to the training error?

36-707 Regression Analysis • Fall 2021 • Lee
Page 10 of 29

### Visual Description
Text-heavy slide with a central boxed section containing mathematical definitions for training error and its expectation. Some text is highlighted in yellow, specifically the note about $Y_i$ and $\hat{Y}_i$ being correlated and the typical behavior of $\hat{Y}_i$ predictions. There is a blue underline under the sample notation $(X_1, Y_1), \dots, (X_n, Y_n)$.

---
## Page 10
### Content
Lecture 7A: Bias-Variance Decomposition of Prediction Error

Now, suppose that we an independent *test sample* $(X'_1, Y'_1), (X'_2, Y'_2), \dots, (X'_m, Y'_m)$ (following the same distribution as our training sample). We could then look at the *expected test error*, defined as

**Notes:**
$$\mathbb{E}[\text{TestErr}(\hat{r})] = \mathbb{E} \left[ \frac{1}{m} \sum_{i=1}^m (Y'_i - \hat{r}(X'_i))^2 \right].$$

Notice what is random here. $Y'_i$ is random, because we drew a new test sample at random, and $\hat{r}$ is random, because it was built using the original random data.

In fact, we can show (when the covariate values $x'_i = x_i$ are fixed) that
$$\mathbb{E}[\text{TrainErr}(\hat{r})] = \mathbb{E}[\text{TestErr}(\hat{r})] - 2\text{Cov}(Y_i, \hat{Y}_i),$$
which is a statement about the cost of using more flexible models.

Note that the expectation here is taken over *all* that is random (both training and test samples). This really does capture what we want, and has the right behavior with $k$!

**Notes:** The covariate values $x_i$ are often treated as fixed in regression, and the observations are written as $(x_1, Y_1), (x_2, Y_2), \dots, (x_n, Y_n)$. Later in the course, we will mostly take the “fixed $x$” approach except where noted.

Exercise: *Summarize how underfitting and overfitting relate to training and test errors.*
[See R Demo 7.1]

**Notes:** In short, underfitting leads to bad training error, but overfitting leads to good training error; both underfitting and overfitting lead to bad test errors (which is really we care about). Our goal is to find the right balance. We will see soon how to do this without access to test data. We will also see that underfitting and overfitting are related to two quantities called estimation bias and estimation variance (or just bias and variance).

36-707 Regression Analysis • Fall 2021 • Lee
Page 11 of 29

### Visual Description
Text-heavy slide with several boxed "Notes" sections. The first note contains the formula for expected test error, highlighted in yellow. The second note discusses the relationship between training and test error via covariance. There are some blue handwritten annotations on the right side of the second box, including a formula fragment $-2 \frac{1}{n} \sum \text{Cov}(Y_i, \hat{Y}_i)$.

---
## Page 11
### Content
(From ESL by Hastie, Tibshirani, Friedman)
**2.2 Assessing Model Accuracy**

[Visual Plot: Left panel shows data points with three fitted curves: a linear regression line (orange), and two smoothing splines (blue and green). Right panel shows Mean Squared Error vs Flexibility.]

**FIGURE 2.9.** Left: Data simulated from $f$, shown in black. Three estimates of $f$ are shown: the linear regression line (orange curve), and two smoothing spline fits (blue and green curves). Right: Training MSE (grey curve), test MSE (red curve), and minimum possible test MSE over all methods (dashed line). Squares represent the training and test MSEs for the three fits shown in the left-hand panel.

Handwritten annotations on the right plot:
- "test error" pointing to the red curve.
- "optimism" pointing to the gap between the red and grey curves.
- "train error" pointing to the grey curve.
- "EDF" written under the "Flexibility" axis.

### Visual Description
The slide features two side-by-side plots from a textbook. The left plot shows a scatter of points with a true function (black) and three fits of varying flexibility. The right plot shows the corresponding training MSE (decreasing with flexibility) and test MSE (U-shaped). Handwritten blue annotations label the curves and the gap between them as "optimism".

---
## Page 12
### Content
Lecture 7A: Bias-Variance Decomposition of Prediction Error

ADDED: Oct 12, 2021

**The Optimism of the Training Error**

Define the training error as in an earlier Demo:

**Notes:**
$$\hat{R}_{\text{training}} = \frac{1}{n} \sum_{j=1}^n (Y_j - \hat{r}(x_j))^2.$$

What’s wrong with the training error or expected training error? (As before, we will condition on $x_1, \dots, x_n$, the specific training set, here. If you need unconditional results, you can use the law of total expectations and law of total variance.)

We might guess that $\hat{R}_{\text{training}}$ estimates the prediction error $R$ well but this is not true. The reason is that we used the observed pairs $(x_i, Y_i)$ to obtain $\hat{Y}_i = \hat{r}(x_i)$. As a consequence $Y_i$ and $\hat{Y}_i$ are correlated. Typically $\hat{Y}_i$ “predicts” $Y_i$ better than it predicts a new $Y$ at the same $x_i$. Let us explore this formally. Let $\bar{r}_i(x_i) = \mathbb{E}(\hat{r}(x_i))$ and compute
$$\mathbb{E}[(Y_i - \hat{Y}_i)^2] = \mathbb{E}[(Y_i - r(x_i) + r(x_i) - \bar{r}_i(x_i) + \bar{r}_i(x_i) - \hat{Y}_i)^2]$$
$$= \sigma^2 + \mathbb{E}(r(x_i) - \bar{r}_i(x_i))^2 + \mathbb{V}(\hat{r}(x_i)) - 2\text{Cov}(\hat{Y}_i, Y_i).$$

Note: this time the cross-product involving the 1st and 3rd terms is not 0 because $\text{Cov}(\hat{Y}_i, Y_i) \neq 0$. This is because $Y_i$ is a particular observation from which we calculated $\hat{Y}_i$, hence the two terms are correlated. This introduces a bias into the estimate of risk:

**Notes:**
$$\mathbb{E}[\hat{R}_{\text{training}}] = R_{\text{in}} - 2\text{Cov}(\hat{Y}_i, Y_i).$$

Typically, $\text{Cov}(\hat{Y}_i, Y_i) > 0$ and so $\hat{R}_{\text{training}}$ underestimates the risk. Later, we shall see how to estimate the prediction risk.

Handwritten annotations:
- "check this!"
- "What is random? Which RVs are correlated?"
- Labels A, B, C over terms in the expectation expansion.
- $\mathbb{E}[AC] \neq \mathbb{E}[A]\mathbb{E}[C] = 0$
- "$Y_i$ and $\hat{Y}_i$ are correlated"
- $\mathbb{E}[(Y_i - r(x_i))(\hat{Y}_i - \mathbb{E}[\hat{Y}_i])] = \text{Cov}(Y_i, \hat{Y}_i)$

36-707 Regression Analysis • Fall 2021 • Lee
Page 28 of 29

### Visual Description
Text-heavy slide with mathematical derivations. It includes boxed formulas for training error and its expectation. There are extensive red and blue handwritten annotations explaining the correlation between $Y_i$ and $\hat{Y}_i$ and why certain cross-terms in the expansion do not vanish.

---
## Page 13
### Content
**Method 2 (for estimating prediction risk)**

$$R_{\text{in}} = \mathbb{E} \left[ \frac{1}{n} \sum_{i=1}^n (Y_i^{\text{new}} - \hat{r}(X_i))^2 \right]$$
$$Y_i^{\text{new}} = r(X_i) + \epsilon_i$$

$$\hat{R}_{\text{train}} = \frac{1}{n} \sum_{i=1}^n (Y_i - \hat{r}(X_i))^2$$

$$R_{\text{in}} = \mathbb{E}(\hat{R}_{\text{train}}) + \frac{2\sigma^2}{n} \text{EDF}(\hat{r})$$

Boxed formula:
$$\text{EDF}(\hat{r}) = \frac{1}{\sigma^2} \sum_i \text{Cov}(Y_i, \hat{Y}_i)$$

### Visual Description
Handwritten notes on a yellow grid background. The page defines $R_{\text{in}}$ using new observations $Y_i^{\text{new}}$ and relates it to the expected training error plus a term involving the Effective Degrees of Freedom (EDF). A small sketch of a curve with data points is on the right.

---
## Page 14
### Content
$$R_{\text{in}} = \mathbb{E}[\hat{R}_{\text{tr}}] + \frac{2\sigma^2}{n} \text{EDF}(\hat{r})$$

$$\hat{R}_{\text{in}} = \underbrace{\frac{1}{n} \sum_{i=1}^n (Y_i - \hat{r}(x_i))^2}_{\text{empirical error}} + \underbrace{\frac{2\hat{\sigma}^2}{n} \hat{\text{EDF}}(\hat{r})}_{\text{complexity term}}$$

### Visual Description
Handwritten notes on a yellow grid background. It shows the decomposition of the estimated in-sample risk into an "empirical error" term and a "complexity term".

---
## Page 15
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
Text-only slide on a white grid background. It defines integrated squared loss and its corresponding risk, showing a decomposition into integrated squared bias and integrated variance.

---
## Page 16
### Content
.

We know how to estimate the risk so that we can choose a bandwidth and other tuning parameters

But what can we say about the efficiency of regression estimators? That is, how does the risk behave as a function of $n$?

10

### Visual Description
Text-only slide on a white grid background. It contains two centered paragraphs of text posing a question about the efficiency of regression estimators as a function of sample size $n$.

==End of PDF==
## Page 17
### Content
**Analysis of the Regressogram**

**Recall:**
$m$ bins $B_1, \dots, B_m$ of equal length
$k_j$: number of observations in bin $B_j$

$$\hat{r}_n(x) = \sum_{i=1}^n w_i(x) Y_i$$

where $w_i(x) = \begin{cases} 1/k_j & \text{if } (x, X_i) \in B_j \\ 0 & \text{otherwise} \end{cases}$

**Assume:**
$$y_i = r^*(x_i) + \epsilon_i$$
where:
* $x_i$'s are 1D equally spaced on $[0, 1] \implies$ bins have $k = n/m$ points and the bin width is $h = 1/m$
* $r^*(x) = \mathbb{E}[Y|X = x]$ is such that $\exists L$:
$$\left| \frac{d}{dx} r^*(x) \right| \le L$$ (bounded 1st derivative)
* i.i.d noise with $\mathbb{E}[\epsilon_i] = 0, \text{Var}[\epsilon_i] = \sigma^2$

11

### Visual Description
Slide with a grid background. Contains text and mathematical formulas. There is blue handwriting next to the derivative inequality that says "bounded 1st derivative".

---
## Page 18
### Content
**Main result:**

$$b(x) = \mathbb{E}[\hat{r}(x)] - r^*(x) \le Lh$$

$$\text{Var}(\hat{r}(x)) = \mathbb{E}(\hat{r}(x) - \mathbb{E}(\hat{r}(x)))^2 \le \frac{\sigma^2}{nh}$$

The integrated risk is:
$$R(\hat{r}, r) = \int b^2(x) dx + \int v(x) dx \le L^2 h^2 + \frac{\sigma^2}{nh}$$

minimized at:
$$h = \left( \frac{\sigma^2}{2nL^2} \right)^{1/3}$$

so min risk is:
$$R(\hat{r}, r) \le \frac{2L^{2/3}\sigma^{4/3}}{n^{2/3}} = 2 \left( \frac{L\sigma^2}{n} \right)^{2/3} = O(n^{-2/3})$$

12

### Visual Description
Slide with a grid background. Contains text and mathematical formulas showing the derivation of the optimal bin width and minimum risk for a regressogram.

---
## Page 19
### Content
**Proof:**
$|b(x)| = |\mathbb{E}(\hat{r}(x)) - r(x)|$
$= \left| \mathbb{E} \left( \sum_i w_i(x) Y_i \right) - r(x) \left( \sum_i w_i(x) \right) \right|$ since $\sum_i w_i(x) = 1$
$= \left| \sum_i w_i(x) \mathbb{E}(Y_i) - r(x) \left( \sum_i w_i(x) \right) \right|$
$= \left| \sum_i w_i(x) (r^*(X_i) - r^*(x)) \right| \le \sum_i w_i(x) |r^*(X_i) - r^*(x)|$ since $w_i(x) \ge 0$
$\le \sum_i w_i(x) L |X_i - x|$ since the slope of $r$ is bounded
$\le \sum_i w_i(x) Lh$, since $X_i$ and $x$ are in the same bin, so that $|X_i - x| \le h$
$= Lh \sum_i w_i(x) = Lh$

$$v(x) \le \frac{\sigma^2}{k} = \frac{m\sigma^2}{n} = \frac{\sigma^2}{nh} \text{ since } k = n/m = nh$$

$\implies \text{MSE}(x) \le h^2 L^2 + \frac{\sigma^2}{nh}$ and integrate w.r.t. $x$ QED

13

### Visual Description
Slide with a grid background. Contains a step-by-step mathematical proof for the bias and variance bounds. There are blue handwritten annotations: a circle around "Proof", a blue inequality sign written over an equals sign in the $v(x)$ formula, and a blue arrow pointing to the MSE conclusion.

---
## Page 20
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
Slide with a grid background. Contains text and mathematical formulas analyzing the risk of kernel regression, showing the optimal bandwidth $h$ and the resulting convergence rate.

---
## Page 21
### Content
(From Györfi, "A distribution-free theory of nonparametric regression")

1.7. Rate of Convergence 13

**Definition 1.1.** A sequence of regression function estimates $\{m_n\}$ is called **weakly consistent** for a certain distribution of $(X, Y)$, if
$$\lim_{n \to \infty} \mathbb{E} \left\{ \int (m_n(x) - m(x))^2 \mu(dx) \right\} = 0.$$

**Definition 1.2.** A sequence of regression function estimates $\{m_n\}$ is called **strongly consistent** for a certain distribution of $(X, Y)$, if
$$\lim_{n \to \infty} \int (m_n(x) - m(x))^2 \mu(dx) = 0 \text{ with probability one.}$$

It may be that a regression function estimate is consistent for a certain class of distributions of $(X, Y)$, but not consistent for others. It is clearly desirable to have estimates that are consistent for a large class of distributions. In this monograph we are interested in properties of $m_n$ that are valid for all distributions of $(X, Y)$, that is, in distribution-free or universal properties. The concept of universal consistency is important in nonparametric regression because the mere use of a nonparametric estimate is normally a consequence of the partial or total lack of information about the distribution of $(X, Y)$. Since in many situations we do not have any prior information about the distribution, it is essential to have estimates that perform well for *all* distributions. This very strong requirement of universal goodness is formulated as follows:

**Definition 1.3.** A sequence of regression function estimates $\{m_n\}$ is called **weakly universally consistent** if it is weakly consistent for all distributions of $(X, Y)$ with $\mathbb{E}\{Y^2\} < \infty$.

**Definition 1.4.** A sequence of regression function estimates $\{m_n\}$ is called **strongly universally consistent** if it is strongly consistent for all distributions of $(X, Y)$ with $\mathbb{E}\{Y^2\} < \infty$.

We will later give many examples of estimates that are weakly and strongly universally consistent.

### 1.7 Rate of Convergence
If an estimate is universally consistent, then, regardless of the true underlying distribution of $(X, Y)$, the $L_2$ error of the estimate converges to zero for a sample size tending to infinity. But this says nothing about how fast this happens. Clearly, it is desirable to have estimates for which the $L_2$ error converges to zero as fast as possible.

To decide about the rate of convergence of an estimate $m_n$, we will look at the expectation of the $L_2$ error,
$$\mathbb{E} \int |m_n(x) - m(x)|^2 \mu(dx). \quad (1.10)$$

### Visual Description
A scan of a book page (page 13) titled "1.7. Rate of Convergence". It contains formal definitions for weak/strong consistency and universal consistency. There is blue handwriting at the top identifying the source as Györfi's book.

---
## Page 22
### Content
14 1. Why Is Nonparametric Regression Important?

A natural question to ask is whether there exist estimates for which (1.10) converges to zero at some fixed, nontrivial rate for all distributions of $(X, Y)$. Unfortunately, as we will see in Chapter 3, such estimates do not exist, i.e., for any estimate the rate of convergence may be arbitrarily slow. In order to get nontrivial rates of convergence, one has to restrict the class of distributions, e.g., by imposing some smoothness assumptions on the regression function.

In Chapter 3 we will define classes $\mathcal{F}_p$ of the distributions of $(X, Y)$ where the corresponding regression function satisfies some smoothness condition depending on a parameter $p$ (e.g., $m$ is $p$ times continuously differentiable). We then use the classical minimax approach to define the optimal rate of convergence for such classes $\mathcal{F}_p$. This means that we will try to minimize the maximal value of (1.10) within the class $\mathcal{F}_p$ of the distributions of $(X, Y)$, i.e., we will look at
$$\inf_{\hat{m}_n} \sup_{(X,Y) \in \mathcal{F}_p} \mathbb{E} \int |\hat{m}_n(x) - m(x)|^2 \mu(dx), \quad (1.11)$$
where the infimum is taken over all estimates $\hat{m}_n$. We are interested in optimal estimates $m_n$, for which the maximal value of (1.10) within $\mathcal{F}_p$, i.e.,
$$\sup_{(X,Y) \in \mathcal{F}_p} \mathbb{E} \int |m_n(x) - m(x)|^2 \mu(dx), \quad (1.12)$$
is close to (1.11).

To simplify our analysis, we will only look at the asymptotic behavior of (1.11) and (1.12), i.e., we will determine the rate of convergence of (1.11) to zero for a sample size tending to infinity, and we will construct estimates which achieve (up to some constant factor) the same rate of convergence.

For classes $\mathcal{F}_p$, where $m$ is $p$ times continuously differentiable, the optimal rate of convergence will be $n^{-\frac{2p}{2p+d}}$.

### 1.8 Adaptation
Often, estimates which achieve the optimal minimax rate of convergence for a given class $\mathcal{F}_{p_0}$ of distributions (where, e.g., $m$ is $p_0$ times continuously differentiable) require the knowledge of $p_0$ and are adjusted perfectly to this class of distributions. Therefore they don't achieve the optimal rate of convergence for other classes $\mathcal{F}_p, p \neq p_0$.

### Visual Description
A scan of a book page (page 14) discussing the minimax approach to convergence rates. There are blue handwritten annotations: "maximum risk" pointing to equation (1.12), and "minimax rate" pointing to the optimal rate formula. The formula (1.11) is circled in blue, and the sentence stating the optimal rate $n^{-\frac{2p}{2p+d}}$ is highlighted in yellow.

---
==End of PDF==
