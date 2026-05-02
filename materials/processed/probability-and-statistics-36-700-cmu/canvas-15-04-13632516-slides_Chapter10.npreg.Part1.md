# canvas-15-04-13632516-slides_Chapter10.npreg.Part1

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-15-04-13632516-slides_Chapter10.npreg.Part1.pdf`
Duplicate equivalents: `canvas-15-04-13632516-slides_Chapter10.npreg.Part1.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 8

## Page 1
### Content
**CHAPTER 10 — Non-Parametric Regression, Part I**

In regression, we study the relationship between a response variable $Y$, and a predictor, feature or covariate $X$. One way to understand the relationship between the predictor and covariate is through the regression function

$$r(x) = \mathbb{E}[Y|X = x] = \int_y y f(y|x)dy.$$

Broadly, the goal of regression is to *estimate* the regression function from observations, i.e. we observe pairs $(X_1, Y_1), \dots, (X_n, Y_n) \sim F_{X,Y}$, and we would like to estimate the regression function.

1
### Visual Description
Text-only slide.

---
## Page 2
### Content
**AIM:** estimate the regression function $r(x) = \mathbb{E}[Y|X = x]$

Regression useful for
* explaining data
* estimating a data generating model
* estimating causal effects
* <span style="color:magenta">prediction</span>

2
### Visual Description
Text-only slide.

---
## Page 3
### Content
![Father-son Height Data Plot]
![Non-linear Data Plot]

Parametric model for these data?

3
### Visual Description
The slide contains two scatter plots. 
1. The top plot is titled "Father-son Height Data" and shows a positive linear correlation between the "Height of father" (x-axis) and "Height of son" (y-axis), with a red linear regression line fitted through the data points.
2. The bottom plot shows a more complex, non-linear relationship between two variables. A wavy black line is fitted through a dense cloud of data points that shows multiple peaks and valleys. The x-axis has labels 0, 400, 800, and the y-axis has labels 1000, 3000, 5000.

---
## Page 4
### Content
**Example: Regressogram**

cf. histogram estimator in nonparametric density estimation

The fitted regression function is
$$\forall x \in B_j, \quad \hat{r}_n(x) = \frac{1}{k_j} \sum_{i:X_i \in B_j} Y_i = \bar{Y}_j$$

![Four Regressogram Plots]

Note the bias-variance tradeoff

4
### Visual Description
The slide contains four scatter plots of "log ratio" vs "range". Each plot shows the same data points but with a different "regressogram" (a step function) fitted to them. 
- The top-left plot has very wide bins (3 steps), showing high bias and low variance.
- Moving to the right and then down, the number of bins increases, making the step function more complex and better fitting the local fluctuations of the data.
- The bottom-right plot has the most bins, showing lower bias but higher variance as it follows the noise in the data more closely.

---
## Page 5
### Content
**Prediction Risk and Bias-Variance Tradeoff**

Say we observe $X$. Using squared error loss, the risk of predicting $Y$ with $g(X)$ is
$$R(g) = \mathbb{E}(Y - g(X))^2$$

The risk is minimized at the regression function $g(x) = r(x) = \mathbb{E}(Y|X = x)$.

5
### Visual Description
Text-only slide.

---
## Page 6
### Content
**The Bias-Variance Decomposition**

Let $\hat{r}(x)$ be a (random) predictor estimated using $(X_i, Y_i)_{i=1 \dots n}$

Let $(X, Y)$ be a new datum. The risk of predicting $Y$ with $\hat{r}(X)$ is
$$R = \mathbb{E}(Y - \hat{r}(X))^2$$

We rewrite
$$R = \mathbb{E}(Y - \hat{r}(X))^2 = \int R(x)f(x)dx$$
where $R(x) = \mathbb{E}((Y - \hat{r}(x))^2 | X = x)$

6
### Visual Description
Text-only slide.

---
## Page 7
### Content
Define
$$\bar{r}(x) = \mathbb{E}(\hat{r}(x))$$
$$V(x) = \mathbb{V}(\hat{r}(x))$$
$$\sigma^2(x) = \mathbb{V}(Y|X = x)$$

Then
$$R(x) = \mathbb{E}[(Y - \hat{r}(X))^2 | X = x]$$
$$= \mathbb{E} \left( [(Y - r(x)) + (r(x) - \bar{r}(x)) + (\bar{r}(x) - \hat{r}(x))]^2 \middle| X = x \right)$$

7
### Visual Description
Text-only slide.

---
## Page 8
### Content
**Summary (bias-variance decomposition of prediction risk):**

$$R(x) = \underbrace{\sigma^2(x)}_{\text{irreducible error}} + \underbrace{(r(x) - \bar{r}(x))^2}_{\text{bias squared}} + \underbrace{V(x)}_{\text{variance}}$$
$$= \sigma^2(x) + \text{MSE}(\hat{r}(x))$$

where $\text{MSE}(\hat{r}(x)) = \mathbb{E}((\hat{r}(X) - r(X))^2 | X = x)$,

and the risk is $R = \int R(x)f(x)dx$

8
### Visual Description
Text-only slide.
