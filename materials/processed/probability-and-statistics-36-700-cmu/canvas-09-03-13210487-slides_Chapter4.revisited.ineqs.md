# canvas-09-03-13210487-slides_Chapter4.revisited.ineqs

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-09-03-13210487-slides_Chapter4.revisited.ineqs.pdf`
Duplicate equivalents: `canvas-09-03-13210487-slides_Chapter4.revisited.ineqs.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 7

## Page 1
### Content
**CHAPTER 4 – Probability Inequalities Revisited**

**The Weak Law of Large Numbers (WLLN)** (*Quick preview of convergence results*)

Assume that $X_1, \dots, X_n$ are i.i.d with $\mu_X = \mathbb{E}(X_1)$ and $\sigma_X^2 = \text{Var}(X_1) < \infty$. Then,
$$\forall \epsilon > 0, \quad \mathbb{P}(|\overline{X}_n - \mu_X| > \epsilon) \to 0$$
as $n \to \infty$.

The WLLN essentially says that the average of independent and identically distributed random variables “converges” to their expectation.

**Proof:** Apply Chebyshev’s inequality:
$$\forall t \geq 0, \quad \mathbb{P}(|Y - \mu_Y| > t\sigma_Y) \leq \frac{1}{t^2},$$
Let $\epsilon = t\sigma_Y$ and rearrange the equation...

### Visual Description
Text-only slide. The content is presented on a light gray grid background.

---

## Page 2
### Content
**Confidence Intervals** (*Quick preview*) Hoeffding’s inequality gives us a simple way to create a confidence interval for a binomial parameter $p$. Let $\hat{p} = n^{-1} \sum_i X_i$ be the fraction of tosses that are heads. By Hoeffding’s inequality,
$$\mathbb{P}(|\hat{p} - p| \geq u) \leq 2 \exp(-2nu^2).$$

*Exercise:* Verify that Hoeffding’s equation can be written in this form (see next page)

Now let $\alpha = 2 \exp(-2nu^2) > 0$, or equivalently $u = \sqrt{\frac{1}{2n} \log(2/\alpha)}$. Then
$$\mathbb{P}\left(|\hat{p} - p| \geq \sqrt{\frac{1}{2n} \log(2/\alpha)}\right) \leq \alpha$$
or equivalently
$$\mathbb{P}\left(|\hat{p} - p| < \sqrt{\frac{1}{2n} \log(2/\alpha)}\right) \geq (1 - \alpha)$$

Let $C$ be the random set $C = \left(\hat{p} - \sqrt{\frac{1}{2n} \log(2/\alpha)}, \hat{p} + \sqrt{\frac{1}{2n} \log(2/\alpha)}\right)$.
Then $C$ traps the true parameter $p$ with probability at least $1 - \alpha$.
We call $C$ a $1 - \alpha$ confidence interval.

### Visual Description
Text-only slide. The content is presented on a light gray grid background.

---

## Page 3
### Content
**Hoeffding’s Inequality:** Let $Y_1, \dots, Y_n$ be independent, bounded s.t. $a_i \leq Y_i \leq b_i$, and $\mathbb{E}[Y_i] = 0$. Let $X = \overline{Y}$. Then $\forall t > 0$,
$$\mathbb{P}\left(|X - 0| \geq t \sqrt{\frac{\sum_{i=1}^n (b_i - a_i)^2}{4n^2}}\right) \leq 2 \exp(-t^2/2).$$

### Visual Description
Text-only slide. The content is presented on a light gray grid background.

---

## Page 4
### Content
**Markov’s Inequality** Suppose $X$ is a non-negative random variable and that $\mu = \mathbb{E}[X]$ exists. Then for any $t \geq 0$:
$$\mathbb{P}(X > t) \leq \frac{\mu}{t}, \quad \text{or equivalently,} \quad \mathbb{P}(X > t\mu) \leq \frac{1}{t}.$$
$\equiv$ a positive random variable is unlikely to be much larger than its mean.

**Proof:** Since $X > 0$,
$$\begin{aligned} \mathbb{E}[X] &= \int_0^\infty x f_X(x) dx \\ &= \int_0^t x f_X(x) dx + \int_t^\infty x f_X(x) dx \\ &\geq \int_t^\infty x f_X(x) dx \\ &\geq t \int_t^\infty f_X(x) dx \\ &= t \mathbb{P}(X \geq t). \end{aligned}$$

### Visual Description
Text-only slide. The content is presented on a light gray grid background.

---

## Page 5
### Content
Markov’s inequality only applies to positive RVs but only needs that the RV have a finite mean. Chebyshev’s inequality requires a finite mean **and** variance. More generally, if we can bound higher moments (or the MGF) of a RV, then we can get even tighter inequalities, e.g., Hoeffding’s inequality.

**Chebyshev’s Inequality** Assume that $\mathbb{E}(X) = \mu$ and $\text{Var}(X) = \sigma^2$ both exist. For any $t \geq 0$:
$$\mathbb{P}(|X - \mu| > t\sigma) \leq \frac{1}{t^2}.$$

**Proof:** Chebyshev’s inequality is a simple consequence of Markov’s inequality:
$$\mathbb{P}(|X - \mu| \geq t\sigma) = \mathbb{P}((X - \mu)^2 \geq t^2\sigma^2)$$
By Markov’s inequality, ...

### Visual Description
Text-only slide. The content is presented on a light gray grid background.

---

## Page 6
### Content
**Mill’s inequality:** Let $X \sim N(\mu_X, \sigma_X^2)$. Then, $\forall t > 0$:
$$\mathbb{P}(|X - \mu_X| > t\sigma_X) \leq \sqrt{2/\pi} \frac{\exp(-t^2/2)}{t}.$$
In particular, if $Z \sim N(0, 1)$,
$$\mathbb{P}(|Z| > t) \leq \sqrt{2/\pi} \frac{\exp(-t^2/2)}{t}.$$
We prove the latter result first.

**Proof:**
For standard normal RVs: $\mathbb{P}(|Z| > t) = 2 \cdot \int_t^\infty \frac{1}{\sqrt{2\pi}} \exp\left(-\frac{x^2}{2}\right) dx$
$$= \frac{2}{\sqrt{2\pi}} \int_t^\infty \exp\left(-\frac{x^2}{2}\right) dx$$
$$= \sqrt{\frac{2}{\pi}} \frac{1}{t} \int_t^\infty t \exp\left(-\frac{x^2}{2}\right) dx$$
$$\leq \sqrt{\frac{2}{\pi}} \frac{1}{t} \int_t^\infty x \exp\left(-\frac{x^2}{2}\right) dx$$
$$= \sqrt{\frac{2}{\pi}} \frac{1}{t} \int_{t^2/2}^\infty \exp(-u) du,$$
by a change of variables $u = x^2/2$. Integrating gives:
$$\mathbb{P}(|Z| > t) \leq \sqrt{\frac{2}{\pi}} \frac{\exp(-t^2/2)}{t} \quad QED$$

Now, if $X \sim N(\mu, \sigma^2)$ then
$$Z = \frac{X - \mu}{\sigma} \sim N(0, 1).$$
We apply Mill’s inequality to $Z$ and do some simple algebra to obtain the required result.

### Visual Description
Text-only slide. The content is presented on a light gray grid background.

---

## Page 7
### Content
The main drawback is that Mill’s inequality only applies to Gaussian random variables. Another commonly useful exponential concentration applies to bounded random variables.

**Hoeffding’s inequality:** Let $Y_1, \dots, Y_n$ be independent, bounded s.t. $a_i \leq Y_i \leq b_i$, and $\mathbb{E}[Y_i] = 0$. Let $X = \overline{Y}$. Then $\forall t > 0$,
$$\mathbb{P}\left(|X - 0| \geq t \sqrt{\frac{\sum_{i=1}^n (b_i - a_i)^2}{4n^2}}\right) \leq 2 \exp(-t^2/2).$$

Check Wasserman’s book for a proof if you are curious.

### Visual Description
Text-only slide. The content is presented on a light gray grid background.

---
