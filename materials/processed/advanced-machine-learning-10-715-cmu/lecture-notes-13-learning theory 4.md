# lecture-notes-13-learning theory 4

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/lecture-notes-13-learning theory 4.pdf`
Duplicate equivalents: `lecture-notes-13-learning theory 4.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 3

## Page 1
### Content
**10-715 Advanced Introduction to Machine Learning**  
**Fall 2019**  
**Lecture 11: October 2, 2019**  
**Lecturer: Nihar B. Shah**  
**Scribes: Tim Hsieh**

Previously, we looked at the realizable setting, where there is a true hypothesis $h^* \in \mathcal{H}$ such that $x \sim D$ over $\mathcal{X}$ and $y = h^*(x)$. However, this is often not the case in practice:
* Maybe there is a "perfect" $h^*$, but $h^* \notin \mathcal{H}$.
* Maybe there is no perfect classifier.

For example, suppose $x$ is a submitted paper and $y$ indicates whether it is accepted or not. Since the peer review process is random, $p(y|x) \neq 0$ or $1$, or in other words, there is no groundtruth for $y$ such that $y = h^*(x)$. In this case, we would like to analyze the population risk over the joint distribution $(x, y)$ over $\mathcal{X} \times \mathcal{Y}$.

### 11.1 Agnostic PAC Learnability

**Definition 11.1** A hypothesis class $\mathcal{H}$ is agnostically PAC learnable if there is a learning algorithm such that for every $\epsilon > 0, \delta > 0$, there exists some positive integer $n^*(\epsilon, \delta)$ such that for every distribution $D$ on $\mathcal{X} \times \mathcal{Y}$, running the algorithm on $n \geq n^*(\epsilon, \delta)$ samples from $D$ outputs $h$ such that
$$R_{(D)}(h) \leq \min_{h' \in \mathcal{H}} R_{(D)}(h') + \epsilon$$
with probability at least $1 - \delta$.

Here $R_{(D)}(h)$ is the loss of $h$ over $D$,
$$R_{(D)}(h) = \mathbb{E}_{(x,y) \sim D}[\mathbb{I}(h(x) \neq y)] \text{ or } \mathbb{E}_{(x,y) \sim D}[\ell(h(x), y)]$$

**Poll in class:** If a class $\mathcal{H}$ is agnostic PAC learnable then $\mathcal{H}$ is also learnable in the realizable setting?

**Answer:** True. In the realizability setting, $\min_{h' \in \mathcal{H}} R_{(D)}(h') = 0$. Moreover, $(x, h^*(x))$ is a special case of distributions over $\mathcal{X} \times \mathcal{Y}$. So, agnostic PAC learning is harder!

#### 11.1.1 Bias-Complexity tradeoff

The bias-complexity or bias-variance tradeoff:
$$\text{Error} = (\text{how well do you estimate compared to the "best" hypothesis in } \mathcal{H})$$
$$+ (\text{How well does the "best" hypothesis in } \mathcal{H} \text{ perform})$$

The first term is called the **estimation error**, denoted $\epsilon$. The second term is called the **approximation error** (or **bias**), which is $\min_{h' \in \mathcal{H}} R_{(D)}(h')$. Recall that in the realizable setting, given sample size $n$, $\epsilon$

11-1

### Visual Description
Text-only slide.

---

## Page 2
### Content
11-2
Lecture 11: October 2, 2019

increases with $VC(\mathcal{H})$. Thus, if we make $\mathcal{H}$ larger, we may decrease the bias but increase the estimation error.

Our goal: minimize $R_{(D)}(h)$. Two steps:
1. Agnostic learning: Suppose you have chosen $\mathcal{H}$ (the approximation error is fixed). Make $R_{(D)}(h) - \min_{h' \in \mathcal{H}} R_{(D)}(h')$ as small as possible.
2. Choose $\mathcal{H}$ carefully to also account for approximation error.

For this lecture, we focus on the first step.

#### 11.1.2 Agnostic Learning

Recall that we use ERM in the realizability setting. Intuitively, ERM will work well if the training set $S = \{x_i, y_i\}_{i=1}^n$ is representative of the true distribution $D$. We define it formally.

**Definition 11.2** A training set $S = \{x_i, y_i\}_{i=1}^n$ is called $\epsilon$-representative w.r.t. $\mathcal{H}$ and distribution $D$ if
$$|R_S(h) - R_{(D)}(h)| \leq \epsilon \quad \forall h \in \mathcal{H}$$
Here $R_S(h)$ is the loss over the samples,
$$R_S(h) = \frac{1}{n} \sum_{i=1}^n \ell(h(x_i), y_i)$$

**Proposition 11.3** If a training set $S$ is $\frac{\epsilon}{2}$-representative w.r.t. $\mathcal{H}$ and $D$, then the output of ERM $h_{ERM} \in \arg \min_{h' \in \mathcal{H}} R_S(h')$ satisfies
$$R_{(D)}(h_{ERM}) \leq \min_{h' \in \mathcal{H}} R_{(D)}(h') + \epsilon$$

**Proof:** For any $h' \in \mathcal{H}$,
$$R_{(D)}(h_{ERM}) \leq R_S(h_{ERM}) + \frac{\epsilon}{2} \leq R_S(h') + \frac{\epsilon}{2} \leq R_{(D)}(h') + \epsilon \leq \min_{h' \in \mathcal{H}} R_{(D)}(h') + \epsilon$$
$\blacksquare$

Proposition ?? basically says that ERM is good when the training set is representative. Remaining step is to quantify when the training set is representative. To do this, we first define the **uniform convergence**.

**Definition 11.4** A hypothesis class $\mathcal{H}$ has uniform convergence property if: for every $\epsilon > 0, \delta > 0$, there exists some positive integer $n^{uc}(\epsilon, \delta)$ such that for every distribution $D$ on $\mathcal{X} \times \mathcal{Y}$, if $S$ is a set of $n \geq n^{uc}(\epsilon, \delta)$ samples drawn from $D$, then with probability at least $1 - \delta$, $S$ is $\epsilon$-representative.

**Note:** uniform convergence is useful in many other different areas such as statistics.

**Proposition 11.5** If $\mathcal{H}$ has uniform convergence with sample complexity $n^{uc}(\epsilon, \delta)$, then $\mathcal{H}$ is agnostically PAC learnable with sample complexity at most $n^{uc}(\epsilon/2, \delta)$.

**Proof:** Put everything together. $\blacksquare$

### Visual Description
Text-only slide.

---

## Page 3
### Content
Lecture 11: October 2, 2019
11-3

#### 11.1.3 Fundamental Theorem of Statistical Learning Theory

(Agnostic, i.i.d.) case.

**Theorem 11.6** A hypothesis class $\mathcal{H}$ with $VC(\mathcal{H}) = \infty$ is not agnostically PAC learnable. Otherwise, $\mathcal{H}$ is agnostically PAC learnable with sample complexity
$$c_1 \cdot \frac{VC(\mathcal{H}) + \log(1/\delta)}{\epsilon^2} \leq n^*(\epsilon, \delta) \leq c_2 \cdot \frac{VC(\mathcal{H}) + \log(1/\delta)}{\epsilon^2}$$
where $c_1 > 0, c_2 > 0$ are universal constants.

We will prove a weaker version in the next lecture.

### Visual Description
Text-only slide.

---
