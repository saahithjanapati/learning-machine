# canvas-15-08-13643778-added_Optimism

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-15-08-13643778-added_Optimism.pdf`
Duplicate equivalents: `canvas-15-08-13643778-added_Optimism.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 1

## Page 1
### Content
Lecture 7A: Bias-Variance Decomposition of Prediction Error

ADDED: Oct 12, 2021

**The Optimism of the Training Error**

Define the training error as in an earlier Demo:

> **Notes:**
> $$\hat{R}_{\text{training}} = \frac{1}{n} \sum_{j=1}^{n} (Y_j - \hat{r}(x_j))^2$$

What’s wrong with the training error or expected training error? (As before, we will condition on $x_1, \dots, x_n$, the specific training set, here. If you need unconditional results, you can use the law of total expectations and law of total variance.)

We might guess that $\hat{R}_{\text{training}}$ estimates the prediction error $R$ well but this is not true. The reason is that we used the observed pairs $(x_i, Y_i)$ to obtain $\hat{Y}_i = \hat{r}(x_i)$. As a consequence $Y_i$ and $\hat{Y}_i$ are correlated. Typically $\hat{Y}_i$ “predicts” $Y_i$ better than it predicts a new $Y$ at the same $x_i$. Let us explore this formally. Let $\bar{r}_i(x_i) = \mathbb{E}(\hat{r}(x_i))$ and compute

$$\mathbb{E} [(Y_i - \hat{Y}_i)^2] = \mathbb{E} [(Y_i - r(x_i) + r(x_i) - \bar{r}(x_i) + \bar{r}(x_i) - \hat{Y}_i)^2]$$
$$= \sigma^2 + \mathbb{E}(r(x_i) - \bar{r}(x_i))^2 + \mathbb{V}(\hat{r}(x_i)) - 2\text{Cov}(\hat{Y}_i, Y_i).$$

Note: this time the cross-product involving the 1st and 3rd terms is not 0 because $\text{Cov}(\hat{Y}_i, Y_i) \neq 0$. This is because $Y_i$ is a particular observation from which we calculated $\hat{Y}_i$, hence the two terms are correlated. This introduces a bias into the estimate of risk:

> **Notes:**
> $$\mathbb{E}[\hat{R}_{\text{training}}] = R_{\text{in}} - \frac{2}{n} \sum_{i=1}^n \text{Cov}(\hat{Y}_i, Y_i).$$

Typically, $\text{Cov}(\hat{Y}_i, Y_i) > 0$ and so $\hat{R}_{\text{training}}$ underestimates the risk. Later, we shall see how to estimate the prediction risk.

36-707 Regression Analysis • Fall 2021 • Lee Page 28 of 29

### Visual Description
Text-heavy slide with two boxed formulas labeled "Notes" and a mathematical derivation in the center. The layout is clean with a header and footer.

---
