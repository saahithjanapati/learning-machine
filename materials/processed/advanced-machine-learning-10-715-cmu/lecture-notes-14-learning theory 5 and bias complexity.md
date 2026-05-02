# lecture-notes-14-learning theory 5 and bias complexity

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/lecture-notes-14-learning theory 5 and bias complexity.pdf`
Duplicate equivalents: `lecture-notes-14-learning theory 5 and bias complexity.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 5

## Page 1
### Content
**10-715 Advanced Introduction to Machine Learning**  
**Fall 2019**  
**Lecture 10: October 14, 2019**  
**Lecturer:** Nihar B. Shah  
**Scribes:** Ziyan Wang and Shikhar Bahl

**Note:** LaTeX template courtesy of UC Berkeley EECS dept.  
**Disclaimer:** These notes have not been subjected to the usual scrutiny reserved for formal publications. They may be distributed outside this class only with the permission of the Instructor.

### 10.1 Fundamental Theorem of PAC Learning
**Theorem:** $VC(\mathcal{H}) < \infty \iff$ agnostic PAC learnable (via ERM)

**Proof:**  
$VC(\mathcal{H}) = \infty \implies$ not learnable (by no free lunch theorem)  
Let $VC(\mathcal{H}) < \infty$

Informal:  
"small" VC-dim $\implies$ small growth function (Sauer's Lemma)  
$\implies$ uniform convergence (key lemma)  
$\implies$ agnostic learnability (last lecture)

**key lemma:** For every distribution $D$ and every $\delta \in (0, 1)$, with probability at least $1 - \delta$ over the choice of the $n$ training points $S$, for $\forall h \in \mathcal{H}$,
$$|R_D(h) - R_{uniform,S}(h)| \le \frac{4 + \sqrt{\log 2n}}{\delta \sqrt{2n}}$$

**Proof:** See Theorem 6.11. in book.

Consider $n > VC(\mathcal{H}) + 1$, then
$$\Pi_{\mathcal{H}}(2n) \le \left( \frac{2en}{VC(\mathcal{H})} \right)^{VC(\mathcal{H})}$$

Consider $n$ large enough so that $\sqrt{\log \Pi_{\mathcal{H}}(2n)} \ge 4$, then
$$|R_D(h) - R_{uniform,S}(h)| \le \frac{1}{\delta} \sqrt{\frac{2VC(\mathcal{H}) \log(\frac{2en}{VC(\mathcal{H})})}{n}}$$

RHS of previous inequality is $< \epsilon$ when $n >$ some function of $\epsilon, \delta, VC(\mathcal{H})$. Finally, use VC $\implies$ agnostic learning (via ERM).

10-1

### Visual Description
Text-only slide containing mathematical definitions, theorems, and proofs related to PAC learning and VC dimension.

---

## Page 2
### Content
10-2  
Lecture 10: October 14, 2019

### 10.2 Bias Complexity Tradeoff

![Figure 10.1: Bias Complexity Tradeoff/Classical Regime](figure_10_1.png)

**Recall:** Error = Estimation error($\epsilon$) + Approximation error ($\min_{h' \in \mathcal{H}} R_D(h')$). Typically as $\mathcal{H}$ grows, estimation error $\uparrow$ and bias (approx error) $\downarrow$.

A version representing this tradeoff can be seen in figure 1. We see that as the complexity of $\mathcal{H}$ increases, the estimation error/variance increases and the approximation error/bias decreases. The total error is a sum of the two, and looks parabolic. We can see that there is some *sweet spot*, where total error is minimal. Anything more complex than that, we start to overfit; anything less complex than that, then we are underfitting (our hypothesis class doesn't have the representational power).

The typical approach to this is to consider a sequence of nested hypothesis classes
$$\mathcal{H}_1 \subset \mathcal{H}_2 \subset \mathcal{H}_3 \subset \dots$$

### Visual Description
The page features a hand-drawn graph (Figure 10.1) plotting 'error' on the y-axis against 'complexity ($\mathcal{H}$)' on the x-axis. 
- A dashed line sloping downwards represents 'approximation error'.
- A solid line sloping upwards represents 'estimation error'.
- A red solid line forming a U-shape represents 'total / test error'.
- A circle highlights the minimum of the red curve, labeled "Sweet spot".
The text below explains the bias-complexity tradeoff and introduces nested hypothesis classes.

---

## Page 3
### Content
Lecture 10: October 14, 2019  
10-3

We will solve our problem via ERM with an additional penalty on the complexity of the hypothesis class. We want to solve:
$$\min_{j \in \{1,2,3,\dots\}} \min_{h \in \mathcal{H}_j} \frac{1}{n} \sum_{i=1}^n l(y_i, h(x_i)) + C(\mathcal{H}_j)$$

Here $C(\mathcal{H}_j)$ is some function of the complexity of $\mathcal{H}_j$. If the set of hypotheses is a singleton set, we have just ERM, in the case above. An example of $C$, for classes of decision trees, might be the number of nodes in a tree. Deciding what this complexity function is an "art" in itself.

In figure 1., consider $\mathcal{H}_1$ vs $\mathcal{H}_{100}$. The total error in both might be same, however estimation error for $\mathcal{H}_1$ is lower than that of $\mathcal{H}_{100}$ while its approximation error is much higher.

### 10.3 Nonuniform Learnability
The bounds we studied in earlier lectures might not apply in this case as they are for some fixed $\mathcal{H}$, however, chapter 7 of the textbook provides some careful analysis. We can design algorithms that have sample complexity/error as a function of the "best" but unknown $\mathcal{H}_j$. This is called Adaptivity (in statistics) or Non-Uniform Learning (in ML). The algorithm might know a good $\mathcal{H}$ but we can adapt to it.

### 10.4 Selecting a "Complexity" Function
There are many ways to choose a complexity function. Some of the commonly used ones are:
1. **Structured Risk Minimization (SRM):** for a given $\mathcal{H}$, if we know the sample complexity and the error behaves given the number of samples. We can use this to figure out a complexity function.
2. **Minimum Description Length (MDL):** Given that we have some representation of $\mathcal{H}$, we can use the number of bits used to represent $\mathcal{H}$ as a complexity function.
3. **Akaike Information Criterion (AIC) and Bayesian Information Criterion (BIC):** These are both information theoretical approaches to the complexity function.
4. **Regularization/Regularized Loss Minimization (RLM)**

**RLM:** Consider parameterized hypothesis classes, with each hypothesis described by a vector of parameters $\omega \in \mathbb{R}^d$
$$\text{argmin}_{\omega \in \mathbb{R}^d} \left( \frac{1}{n} \sum_{i=1}^n l(y_i, h_\omega(x_i)) + R(\omega) \right)$$
where $R(\omega)$ is the regularizer.

### Visual Description
Text-only slide. It contains mathematical formulations for penalized ERM and RLM, and a numbered list of methods for selecting complexity functions.

---

## Page 4
### Content
10-4  
Lecture 10: October 14, 2019

An example of RLM can be seen in Soft-SVM (in terms of Hinge-Loss). Let $b = 0$, the objective of Soft-SVM is:
$$\text{argmin}_{w \in \mathbb{R}^d} \sum_{i=1}^n \max\{0, 1 - y_i(w^T x_i)\} + \frac{1}{2C} ||w||_2^2$$

We can view $\sum_{i=1}^n \max\{0, 1 - y_i(w^T x_i)\}$ as the ERM loss. Consider for $j \in \mathbb{R}_{\ge 0}$
$$\mathcal{H}_j = \{ \text{sign}(w^T x), ||w||_2 \le j \}$$

With these set of classes,
$$\mathcal{H}_j \subset \mathcal{H}_{j'} \forall j < j'$$

This means that a class with a higher $j$ will have a larger size, hence a larger complexity. In Soft-SVM, we penalize the complexity of $\mathcal{H}_j$ via the function
$$\frac{1}{2C} j^2$$
here $complexity(\mathcal{H}_j) = \frac{1}{2C} j^2$ is Tikhonov regularization.

### 10.5 Interpolation Regime
In class we discussed the generalizability of Neural Networks and how, in the beginning as complexity rises the generalization error of Neural Nets decreases and after a certain complexity it starts increasing. This is known as the classic regime and can be seen in figure 1. However, recently, papers like (link) have found that after a certain complexity the generalization error starts decreasing again. This is called the interpolation regime. This can be seen in figure 2.

### Visual Description
Text-only slide. It provides a mathematical example of Regularized Loss Minimization using Soft-SVM and introduces the concept of the Interpolation Regime in neural networks.

---

## Page 5
### Content
Lecture 10: October 14, 2019  
10-5

![Figure 10.2: Interpolation Regime](figure_10_2.png)

### Visual Description
The page contains a hand-drawn graph (Figure 10.2) titled "Interpolation Regime". 
- The y-axis is labeled "error" and the x-axis is labeled "model complexity $\rightarrow$".
- A dashed line labeled "training error" decreases steadily towards zero as complexity increases.
- A solid line labeled "test error" initially follows a U-shape (the classical regime) but then, after passing a vertical dashed line (the interpolation threshold), it begins to decrease again, illustrating the "double descent" phenomenon.

---
