# canvas-15-05-13635737-Gyorfi_nonparametric_rates

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-15-05-13635737-Gyorfi_nonparametric_rates.pdf`
Duplicate equivalents: `canvas-15-05-13635737-Gyorfi_nonparametric_rates.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 2

## Page 1
### Content
1.7. Rate of Convergence 13

**Definition 1.1.** A sequence of regression function estimates $\{m_n\}$ is called **weakly consistent** for a certain distribution of $(X, Y)$, if
$$\lim_{n \to \infty} \mathbf{E} \left\{ \int (m_n(x) - m(x))^2 \mu(dx) \right\} = 0.$$

**Definition 1.2.** A sequence of regression function estimates $\{m_n\}$ is called **strongly consistent** for a certain distribution of $(X, Y)$, if
$$\lim_{n \to \infty} \int (m_n(x) - m(x))^2 \mu(dx) = 0 \quad \text{with probability one.}$$

It may be that a regression function estimate is consistent for a certain class of distributions of $(X, Y)$, but not consistent for others. It is clearly desirable to have estimates that are consistent for a large class of distributions. In this monograph we are interested in properties of $m_n$ that are valid for all distributions of $(X, Y)$, that is, in distribution-free or universal properties. The concept of universal consistency is important in nonparametric regression because the mere use of a nonparametric estimate is normally a consequence of the partial or total lack of information about the distribution of $(X, Y)$. Since in many situations we do not have any prior information about the distribution, it is essential to have estimates that perform well for all distributions. This very strong requirement of universal goodness is formulated as follows:

**Definition 1.3.** A sequence of regression function estimates $\{m_n\}$ is called **weakly universally consistent** if it is weakly consistent for all distributions of $(X, Y)$ with $\mathbf{E}\{Y^2\} < \infty$.

**Definition 1.4.** A sequence of regression function estimates $\{m_n\}$ is called **strongly universally consistent** if it is strongly consistent for all distributions of $(X, Y)$ with $\mathbf{E}\{Y^2\} < \infty$.

We will later give many examples of estimates that are weakly and strongly universally consistent.

### 1.7 Rate of Convergence

If an estimate is universally consistent, then, regardless of the true underlying distribution of $(X, Y)$, the $L_2$ error of the estimate converges to zero for a sample size tending to infinity. But this says nothing about how fast this happens. Clearly, it is desirable to have estimates for which the $L_2$ error converges to zero as fast as possible.

To decide about the rate of convergence of an estimate $m_n$, we will look at the expectation of the $L_2$ error,
$$\mathbf{E} \int |m_n(x) - m(x)|^2 \mu(dx). \quad (1.10)$$

### Visual Description
Text-only slide.

---
## Page 2
### Content
14 1. Why Is Nonparametric Regression Important?

A natural question to ask is whether there exist estimates for which (1.10) converges to zero at some fixed, nontrivial rate for all distributions of $(X, Y)$. Unfortunately, as we will see in Chapter 3, such estimates do not exist, i.e., for any estimate the rate of convergence may be arbitrarily slow. In order to get nontrivial rates of convergence, one has to restrict the class of distributions, e.g., by imposing some smoothness assumptions on the regression function.

In Chapter 3 we will define classes $\mathcal{F}_p$ of the distributions of $(X, Y)$ where the corresponding regression function satisfies some smoothness condition depending on a parameter $p$ (e.g., $m$ is $p$ times continuously differentiable). We then use the classical minimax approach to define the optimal rate of convergence for such classes $\mathcal{F}_p$. This means that we will try to minimize the maximal value of (1.10) within the class $\mathcal{F}_p$ of the distributions of $(X, Y)$, i.e., we will look at
$$\inf_{\hat{m}_n} \sup_{(X,Y) \in \mathcal{F}_p} \mathbf{E} \int |\hat{m}_n(x) - m(x)|^2 \mu(dx), \quad (1.11)$$
where the infimum is taken over all estimates $\hat{m}_n$. We are interested in optimal estimates $m_n$, for which the maximal value of (1.10) within $\mathcal{F}_p$, i.e.,
$$\sup_{(X,Y) \in \mathcal{F}_p} \mathbf{E} \int |m_n(x) - m(x)|^2 \mu(dx), \quad (1.12)$$
is close to (1.11).

To simplify our analysis, we will only look at the asymptotic behavior of (1.11) and (1.12), i.e., we will determine the rate of convergence of (1.11) to zero for a sample size tending to infinity, and we will construct estimates which achieve (up to some constant factor) the same rate of convergence.

For classes $\mathcal{F}_p$, where $m$ is $p$ times continuously differentiable, the optimal rate of convergence will be $n^{-\frac{2p}{2p+d}}$.

### 1.8 Adaptation

Often, estimates which achieve the optimal minimax rate of convergence for a given class $\mathcal{F}_{p_0}$ of distributions (where, e.g., $m$ is $p_0$ times continuously differentiable) require the knowledge of $p_0$ and are adjusted perfectly to this class of distributions. Therefore they don't achieve the optimal rate of convergence for other classes $\mathcal{F}_p, p \neq p_0$.

If one could find out in an application to which classes of distributions the true underlying distribution belongs, then one could choose that class which has the best rate of convergence (which will be the smallest class in the case of nested classes), and could choose an estimate which achieves the optimal minimax rate of convergence within this class. This, however,

### Visual Description
Text-only slide.

---
