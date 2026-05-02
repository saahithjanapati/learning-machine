# canvas-15-09-13643779-added_TrainTest

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-15-09-13643779-added_TrainTest.pdf`
Duplicate equivalents: `canvas-15-09-13643779-added_TrainTest.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 2

## Page 1
### Content
Lecture 7A: Bias-Variance Decomposition of Prediction Error

ADDED: Oct 12, 2021

**Training and Test Errors**

Q: *How are we going to quantify this (overfitting vs underfitting)?*

Let’s call $(X_1, Y_1), \dots, (X_n, Y_n)$, the sample of data that we used to fit $\hat{r}$, our *training sample*. What’s wrong with looking at how well we do in fitting the training points themselves, i.e., the *training error* or *expected training error*, defined as

> **Notes:** We define
> $$\text{TrainErr}(\hat{r}) = \frac{1}{n} \sum_{i=1}^{n} (Y_i - \hat{Y}_i)^2$$
> $$= \frac{1}{n} \sum_{i=1}^{n} (Y_i - \hat{r}(X_i))^2,$$
> using our prediction. Hence
> $$\mathbb{E}[\text{TrainErr}(\hat{r})] = \mathbb{E} \left[ \frac{1}{n} \sum_{i=1}^{n} (Y_i - \hat{r}(X_i))^2 \right].$$
> This tells us something, but not necessarily what we want. If we want to know how well $\hat{r}(x)$ will work for predicting *new* data, it is way too optimistic. Notice that $Y_i$ and $\hat{Y}_i$ are correlated here, because $\hat{r}$ is estimated using the data $Y_i$.
>
> Typically, $\hat{Y}_i$ “predicts” $Y_i$ better than it predicts a new $Y$ corresponding to a new $r(x) + \epsilon$.
>
> Question: If we let $k = 1$ in the $k$-nearest-neighbors regression example, what happens to the training error?

36-707 Regression Analysis • Fall 2021 • Lee Page 10 of 29

### Visual Description
Text-only slide. The main content is contained within a large rectangular box labeled "Notes".

---
## Page 2
### Content
Lecture 7A: Bias-Variance Decomposition of Prediction Error

Now, suppose that we an independent *test sample* $(X'_1, Y'_1), (X'_2, Y'_2), \dots, (X'_m, Y'_m)$ (following the same distribution as our training sample). We could then look at the *expected test error*, defined as

> **Notes:**
> $$\mathbb{E}[\text{TestErr}(\hat{r})] = \mathbb{E} \left[ \frac{1}{m} \sum_{i=1}^{m} (Y'_i - \hat{r}(X'_i))^2 \right].$$
> Notice what is random here. $Y'_i$ is random, because we drew a new test sample at random, *and* $\hat{r}$ is random, because it was built using the original random data.
>
> In fact, we can show (when the covariate values $x'_i = x_i$ are fixed) that
> $$\mathbb{E}[\text{TrainErr}(\hat{r})] = \mathbb{E}[\text{TestErr}(\hat{r})] - 2\text{Cov}(Y_i, \hat{Y}_i),$$
> which is a statement about the cost of using more flexible models.

Note that the expectation here is taken over *all* that is random (both training and test samples). This really does capture what we want, and has the right behavior with $k$!

> **Notes:** The covariate values $x_i$ are often treated as fixed in regression, and the observations are written as $(x_1, Y_1), (x_2, Y_2), \dots, (x_n, Y_n)$. Later in the course, we will mostly take the “fixed x” approach except where noted.

Exercise: *Summarize how underfitting and overfitting relate to training and test errors.*
[See R Demo 7.1]

> **Notes:** In short, underfitting leads to bad training error, but overfitting leads to good training error; both underfitting and overfitting lead to bad test errors (which is really we care about). Our goal is to find the right balance. We will see soon how to do this without access to test data. We will also see that underfitting and overfitting are related to two quantities called estimation bias and estimation variance (or just bias and variance)

36-707 Regression Analysis • Fall 2021 • Lee Page 11 of 29

### Visual Description
Text-only slide. The content is organized into several distinct rectangular boxes labeled "Notes".

---
