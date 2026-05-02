# canvas-15-01-13652552-annotated.slides_Chapter10.npreg.Part1

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-15-01-13652552-annotated.slides_Chapter10.npreg.Part1.pdf`
Duplicate equivalents: `canvas-15-01-13652552-annotated.slides_Chapter10.npreg.Part1.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 10

## Page 1
### Content
**CHAPTER 10 — Non-Parametric Regression, Part I**

In regression, we study the relationship between a response variable $Y$, and a predictor, feature or covariate $X$. One way to understand the relationship between the predictor and covariate is through the *regression function*

$$r(x) = \mathbb{E}[Y|X = x] = \int_y y f(y|x) dy.$$

Broadly, the goal of regression is to *estimate* the regression function from observations, i.e. we observe pairs $(X_1, Y_1), \dots, (X_n, Y_n) \sim F_{X,Y}$, and we would like to estimate the regression function.

[Handwritten notes]:
- $r(x) = \mathbb{E}(Y|X=x)$
- $X, Y \sim F_{X,Y}$
- "local approx" of conditioning on $x$
- average $Y_i$'s in a neighborhood of $x$

### Visual Description
The slide is on a grid background. It contains printed text defining the regression function and the goal of regression. There is a hand-drawn plot in blue showing a scatter of points and a curve $r(x)$ passing through them. Vertical red lines indicate a neighborhood around a point $x$ on the horizontal axis. Handwritten annotations in blue and red explain the concept of the regression function as a local average.

---

## Page 2
### Content
**AIM:** estimate the regression function $r(x) = \mathbb{E}[Y|X = x]$

Regression useful for
- explaining data
- estimating a data generating model
- estimating causal effects
- **prediction** (circled in red)

[Handwritten notes]:
- Given "train" data $D = \{(X_1, Y_1), \dots, (X_n, Y_n)\} \stackrel{iid}{\sim} F_{X,Y}$
- $\implies \hat{r}(x; D)$ from some algorithm
- **Goal:** Given new $X$, predict $Y$
- Prediction $\hat{Y} = \hat{r}(X; D)$
- sq. error $(Y - \hat{Y})^2$
- Risk $\mathbb{E}[\dots] = \mathbb{E}_{D,X,Y}[(Y - \hat{r}(X; D))^2]$
- "average over everything that's random"

### Visual Description
The slide continues on a grid background. It lists the uses of regression, with "prediction" highlighted. Extensive handwritten notes in blue and red define the training data $D$, the estimated function $\hat{r}$, and the concept of prediction risk as an expectation over the training data, the new predictor $X$, and the new response $Y$.

---

## Page 3
### Content
[Plot 1: Father-son Height Data. Scatter plot of son's height vs father's height with a red linear regression line.]

[Plot 2: A non-linear curve fitted to a dense scatter plot of data points.]

**Parametric model for these data?**

[Handwritten notes]:
- Maybe linear model
- SLR: $r(x) = \alpha + \beta X$
- $Y = r(x) + \epsilon$
- $\{\mathbb{E}[\epsilon|X=x] = 0, V[\epsilon|X=x] = \sigma^2$ no matter what $x$ is

### Visual Description
The slide shows two plots. The top plot is a classic scatter plot of father-son heights with a linear fit. The bottom plot shows more complex data with a non-linear, wavy curve fitted to it. Handwritten notes suggest a Simple Linear Regression (SLR) model and define the error term $\epsilon$ with its conditional mean and variance assumptions.

---

## Page 4
### Content
**Example: Regressogram**

cf. histogram estimator in nonparametric density estimation

The fitted regression function is
$$\forall x \in B_j, \hat{r}_n(x) = \frac{1}{k_j} \sum_{i: X_i \in B_j} Y_i = \bar{Y}_j$$

[Four plots showing a "log ratio" vs "range". Each plot shows data points and a step-function (regressogram) fit with different bin widths.]

**Note the bias-variance tradeoff**

[Handwritten notes]:
- $r(x) \stackrel{def}{=} \mathbb{E}[Y|X=x]$
- Annotations on the first plot showing $r(x)$ as a smooth curve and $\hat{r}(x; D)$ as the step function.

### Visual Description
The slide introduces the "Regressogram," a piecewise constant estimator. It provides the mathematical formula for the estimator as a bin-wise average. Four sub-plots illustrate how changing the bin width affects the fit, highlighting the bias-variance tradeoff. Handwritten notes clarify the definition of the true regression function $r(x)$.

---

## Page 5
### Content
**Prediction Risk and Bias-Variance Tradeoff**

Say we observe $X$. Using squared error loss, the risk of predicting $Y$ with $g(X)$ is
$$R(g) = \mathbb{E}(Y - g(X))^2$$

[Handwritten notes]:
- averages over $X, Y \sim F_{X,Y}$
- here $g$ is a fixed func
- What is the "optimal predictor" that minimizes $R(g)$?
- $R(g) = \mathbb{E}_X \mathbb{E}_{Y|X} [(Y - g(X))^2 | X]$

The risk is minimized at the regression function $g(x) = r(x) = \mathbb{E}(Y|X = x)$.

**Prove this!**

### Visual Description
This slide discusses prediction risk using squared error loss. It contains a boxed formula for risk $R(g)$. Handwritten notes in red and blue explain that the expectation is over the joint distribution and pose the question of finding the optimal predictor. It concludes that the regression function is the minimizer and challenges the student to prove it.

---

## Page 6
### Content
**The Bias-Variance Decomposition**

Let $\hat{r}(x)$ be a (random) predictor estimated using $(X_i, Y_i)_{i=1 \dots n}$

[Handwritten notes]:
- $D$
- $\hat{r}(x; D)$

Let $(X, Y)$ be a new datum. The risk of predicting $Y$ with $\hat{r}(X)$ is
$$R = \mathbb{E}(Y - \hat{r}(X))^2$$

We rewrite
$$R = \mathbb{E}(Y - \hat{r}(X))^2 = \int R(x) f(x) dx$$
where $R(x) = \mathbb{E}((Y - \hat{r}(x))^2 | X = x)$

[Handwritten notes]:
- marginal density of $X$
- $MSE(x)$
- $\int f(x, y) dy$

### Visual Description
The slide starts the formal bias-variance decomposition. It defines the risk $R$ for a random predictor $\hat{r}$ trained on data $D$. It shows how the total risk can be expressed as an integral of the conditional risk $R(x)$ over the marginal density of $X$. Handwritten notes label $R(x)$ as the Mean Squared Error at $x$.

---

## Page 7
### Content
Define
- $\bar{r}(x) = \mathbb{E}(\hat{r}(x))$
- $V(x) = \mathbb{V}(\hat{r}(x))$
- $\sigma^2(x) = \mathbb{V}(Y|X = x)$

Then
$$R(x) = \mathbb{E}[(Y - \hat{r}(X))^2 | X = x]$$
$$= \mathbb{E}[((Y - r(x)) + (r(x) - \bar{r}(x)) + (\bar{r}(x) - \hat{r}(x)))^2 | X = x]$$

[Handwritten notes]:
- Let $A = (Y - r(x))$, $B = (r(x) - \bar{r}(x))$, $C = (\bar{r}(x) - \hat{r}(x))$
- $A$ is random & independent because $Y, D$ are indep.
- $B$ is fixed if condit. on $x$
- $C$ is random
- Assume $Y = r(x) + \epsilon$ where $\mathbb{E}(\epsilon|X)=0, Var(\epsilon|X)=\sigma^2$
- $\mathbb{E}[A^2|x] = \mathbb{E}[\epsilon^2|x] = \sigma^2$
- $\mathbb{E}[B^2|x] = bias^2(x) = (\mathbb{E}[\hat{r}(x)] - r(x))^2$
- $\mathbb{E}[C^2|x] = Var(\hat{r}(x)) = V(x)$

### Visual Description
This slide breaks down the conditional risk $R(x)$ into three components by adding and subtracting terms. Handwritten notes define these components as $A, B,$ and $C$ and identify them with noise variance, squared bias, and estimation variance, respectively. It also notes which terms are random or fixed.

---

## Page 8
### Content
[Handwritten notes continuing the proof from Page 7]:

- $\mathbb{E}[AB|x] = B \mathbb{E}[A|x] = B \mathbb{E}[Y - r(x)|x] = 0$ (because $Y$ and $D$ are indep.)
- $\mathbb{E}[AC|x] = \mathbb{E}[A|x] \cdot \mathbb{E}[C|x] = 0 \cdot \mathbb{E}[C|x] = 0$
- $\mathbb{E}[BC|x] = B \mathbb{E}[C|x] = B \cdot \mathbb{E}[\mathbb{E}[\hat{r}(x)] - \hat{r}(x) | x] = 0$
  - Since $\mathbb{E}[\mathbb{E}[\hat{r}(x)|x]] - \mathbb{E}[\hat{r}(x)|x] = 0$

**check this!**

### Visual Description
This page consists entirely of handwritten notes on a grid background. It completes the bias-variance decomposition proof by showing that the cross-product terms ($AB, AC, BC$) from the squared expansion on the previous page all have an expectation of zero. It uses properties of independence and the definition of the terms to justify each step.

---
## Page 9
### Content

### Visual Description
A blank page with a light grey grid pattern on an off-white background.

---

## Page 10
### Content
**Summary (bias-variance decomposition of prediction risk):**

$$R(x) = \underbrace{\sigma^2(x)}_{\text{irreducible error}} + \underbrace{(r(x) - \bar{r}(x))^2}_{\text{bias squared}} + \underbrace{V(x)}_{\text{variance}}$$

$$= \sigma^2(x) + \text{MSE}(\hat{r}(x))$$

where $\text{MSE}(\hat{r}(x)) = \mathbb{E}((\hat{r}(X) - r(X))^2 | X = x)$,

and the risk is $R = \int R(x) f(x) dx$

8
### Visual Description
The slide features a grid background and presents mathematical formulas for bias-variance decomposition. Key parts of the text and equations are highlighted in yellow, including the primary decomposition formula, the MSE term, the MSE definition, and the $f(x)$ term in the final integral. A blue hand-drawn bracket is located under the $R(x)$ term in the integral equation. The page number "8" is centered at the bottom.
