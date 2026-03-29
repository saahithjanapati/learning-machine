# Homework 2 (Graded Submission)

Source: `materials/archive/submission_397239545.pdf`
Duplicate equivalents: `submission_397239545.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `MIXED`
Pages: 52

## Page 1

### Content

**Homework 2**
$\bullet$ Graded

**Student**
Saahith Janapati

**Total Points**
105 / 115 pts

### Visual Description
Text-only slide.

---

## Page 2

### Content

**Question 1**
A Written Questions **74 / 84 pts**

1.1 **A.1.1.a** **1 / 1 pt**
*   $\checkmark$ **- 0 pts** Solution: Option B.
*   **- 1 pt** Incorrect/ Blank

1.2 **A.1.1.b** **1 / 1 pt**
*   $\checkmark$ **- 0 pts** Correct
*   **- 1 pt** Incorrect

1.3 **A.1.1.c** **1 / 1 pt**
*   $\checkmark$ **- 0 pts** Correct
*   **- 1 pt** Incorrect

1.4 **A.1.1.d** **0 / 1 pt**
*   **- 0 pts** Correct
*   $\checkmark$ **- 1 pt** Incorrect

1.5 **A.1.1.e** **1 / 1 pt**
*   $\checkmark$ **- 0 pts** Correct
*   **- 1 pt** Incorrect

1.6 **A.1.2** **1 / 2 pts**
*   **- 0 pts** Correct
*   $\checkmark$ **- 1 pt** Incorrect

1.7 **A.1.3** **4 / 4 pts**
*   $\checkmark$ **- 0 pts** Correct
*   **- 4 pts** Incorrect

### Visual Description
Text-only slide.

---

## Page 3

### Content

1.8 **A.1.4.a** **0 / 1 pt**
*   **- 0 pts** Correct
*   $\checkmark$ **- 1 pt** Incorrect transition(s) / probabilities not explicitly written
*   $\text{\small \faComment}$ transition probabilities should be explicitly written in the graph.

**Solution**
![Markov Chain Graph]

1.9 **A.1.4.b** **1 / 1 pt**
*   $\checkmark$ **- 0 pts** Correct
    *   **Solution** Yes, we can construct the path $B \leftrightarrow A \leftrightarrow D \leftrightarrow C \leftrightarrow B \leftrightarrow E$, for which all edges are bidirectional with positive probability. This proves that no matter which node we begin at, we can reach any other node with positive probability. (Alternatively, since there is a clear cycle $A - B - C - D - E - B - A$, the chain is irreducible).
*   **- 0.5 pts** Minimal justification / Only cites definitions
    You must provide a justification that applies to this graph; simply stating the definition of irreducibility / the graph is strongly connected / "it can be verified" is not enough.
*   **
## Page 9
### Content
1.19 **A.1.8.b** 3 / 3 pts
$\checkmark$ - 0 pts
**Solution** We can show this by induction. The base case is trivial. Suppose $k \ge 1$ with the intent to prove it for $k + 1$. Then
$$
\begin{aligned}
\mathbf{T}^{k+1} &= \mathbf{T}^k \mathbf{T} \\
&= \sum_{i=1}^n \lambda_i^k \mathbf{v}_i \mathbf{v}_i^T \left( \sum_{j=1}^n \lambda_j \mathbf{v}_j \mathbf{v}_j^T \right) \\
&= \sum_{i=1}^n \lambda_i^k \mathbf{v}_i \mathbf{v}_i^T (\lambda_i \mathbf{v}_i \mathbf{v}_i^T) \quad (\mathbf{v}_i^T \mathbf{v}_j = 0 \text{ when } i \neq j \text{ since distinct eigenvectors are orthogonal}) \\
&= \sum_{i=1}^n \lambda_i^{k+1} \mathbf{v}_i (1) \mathbf{v}_i^T \quad (\mathbf{v}_i^T \mathbf{v}_i = |\mathbf{v}_i|^2 = 1 \text{ since it has unit norm}) \\
&= \sum_{i=1}^n \lambda_i^{k+1} \mathbf{v}_i \mathbf{v}_i^T.
\end{aligned}
$$
Correct

- 1 pt Minor Mistake(s)
- 2 pts Major Mistake(s)
- 3 pts Incorrect / Missing

1.20 **A.1.8.c** 3 / 3 pts
$\checkmark$ - 0 pts
**Solution** Consider the eigendecomposition of $\mathbf{x}$,
$$ \mathbf{x} = \sum_{i=1}^n \langle \mathbf{x}, \mathbf{v}_i \rangle \mathbf{v}_i. $$
Then
$$
\begin{aligned}
\mathbf{T}^k \mathbf{x} &= \sum_{i=1}^n \lambda_i^k \mathbf{v}_i \mathbf{v}_i^T \sum_{j=1}^n \langle \mathbf{x}, \mathbf{v}_j \rangle \mathbf{v}_j \quad \text{(using eigendecomposition of } \mathbf{x}) \\
&= \sum_{i=1}^n \lambda_i^k \mathbf{v}_i \mathbf{v}_i^T \langle \mathbf{x}, \mathbf{v}_i \rangle \mathbf{v}_i \quad \text{(cross terms are orthogonal)} \\
&= \sum_{i=1}^n \langle \mathbf{x}, \mathbf{v}_i \rangle \lambda_i^k \mathbf{v}_i \quad (\mathbf{v}_i \text{ unit norm}) \\
&= \langle \mathbf{x}, \mathbf{v}_1 \rangle \lambda_1^k \mathbf{v}_1 + \sum_{i=2}^n \langle \mathbf{x}, \mathbf{v}_i \rangle \lambda_i^k \mathbf{v}_i \\
&= \frac{1}{\sqrt{n}} \lambda_1^k \mathbf{v}_1 + \sum_{i=2}^n \langle \mathbf{x}, \mathbf{v}_i \rangle \lambda_i^k \mathbf{v}_i \quad (\mathbf{x} \text{ is a probability distribution so } \langle \mathbf{x}, \mathbf{v}_1 \rangle = \langle \mathbf{x}, \vec{1} \rangle = \frac{1}{\sqrt{n}}) \\
&= \pi + \sum_{i=2}^n \langle \mathbf{x}, \mathbf{v}_i \rangle \lambda_i^k \mathbf{v}_i.
\end{aligned}
$$
Correct

- 1 pt Minor Mistake(s)
- 2 pts Major Mistake(s)
- 3 pts Blank

### Visual Description
The page contains two mathematical solutions for problems A.1.8.b and A.1.8.c, presented in a digital grading interface. The text and equations are in red. Each section includes a "Correct" status and a point deduction rubric.

---
## Page 10
### Content
1.21 **A.1.8.d** 5 / 5 pts
$\checkmark$ - 0 pts Correct
**Solution** By using our result from (f), we have
$$
\begin{aligned}
||\mathbf{T}^k \mathbf{x} - \pi||_2 &= \left\| \sum_{i \ge 2} \langle \mathbf{x}, \mathbf{v}_i \rangle \lambda_i^k \mathbf{v}_i \right\|_2 \\
&= \sqrt{\sum_{i \ge 2} \langle \mathbf{x}, \mathbf{v}_i \rangle \lambda_i^k \mathbf{v}_i^T \left( \sum_{j \ge 2} \langle \mathbf{x}, \mathbf{v}_j \rangle \lambda_j^k \mathbf{v}_j \right)} \\
&= \sqrt{\sum_{i \ge 2} \langle \mathbf{x}, \mathbf{v}_i \rangle \lambda_i^k \left( \langle \mathbf{x}, \mathbf{v}_i \rangle \lambda_i^k \mathbf{v}_i \right)} \quad \text{(cross terms cancel out by orthogonality)} \\
&= \sqrt{\sum_{i \ge 2} \langle \mathbf{x}, \mathbf{v}_i \rangle^2 \lambda_i^{2k}} \\
&\le \sqrt{\sum_{i \ge 2} \langle \mathbf{x}, \mathbf{v}_i \rangle^2 \lambda_{\max}^{2k}} \\
&\le ||\mathbf{x}||_2 \lambda_{\max}^k \\
&\le \lambda_{\max}^k. \quad \text{(since } \mathbf{x} \text{ is a probability distribution, } L^2 \text{ norm at most 1)}
\end{aligned}
$$
Then
$$
\begin{aligned}
||\mathbf{T}^k \mathbf{x} - \pi||_{TV} &= \frac{1}{2} ||\mathbf{T}^k \mathbf{x} - \pi||_1 \\
&\le \frac{1}{2} \sqrt{n} ||\mathbf{T}^k \mathbf{x} - \pi||_2 \\
&\le \frac{1}{2} \sqrt{n} \lambda_{\max}^k.
\end{aligned}
$$

- 1 pt Insufficient justifications (minor)
- 2 pts Minor mistakes
- 3 pts Insufficient justification (major)
- 5 pts No submission

1.22 **A.1.8.e** 2 / 2 pts
$\checkmark$ - 0 pts Correct
**Solution** We want $k$ large enough such that
$$
\begin{aligned}
\frac{1}{2} \sqrt{n} \lambda_{\max}^k &\le \frac{1}{4} \\
\implies \sqrt{n} \lambda_{\max}^k &\le \frac{1}{2} \\
\implies \frac{1}{2} \log n + k \log \lambda_{\max} &\le -1 \\
\implies k &\ge - \frac{1 + \frac{1}{2} \log n}{\log \lambda_{\max}}
\end{aligned}
$$

- 1 pt Minor mistakes
- 2 pts Incorrect / No submission

### Visual Description
The page continues the mathematical solutions for problems A.1.8.d and A.1.8.e. The solutions are written in red text with mathematical derivations. Grading rubrics are listed below each solution.

---
## Page 11
### Content
1.23 **A.1.8.f** 3 / 3 pts
$\checkmark$ - 0 pts Correct
**Solution** We claim that
$$ \lambda_{\max} = \max_{\mathbf{x}, \mathbf{x} \perp \vec{1}} \frac{1}{||\mathbf{x}||_2^2} |\mathbf{x}^T \mathbf{T} \mathbf{x}|. $$
Since we know $\vec{1}$ is the eigenvector for $\lambda_1 = 1$, then since eigenvectors are orthogonal for symmetric matrices, the corresponding eigenvector $\mathbf{v}_{\max}$ that achieves the max for $\lambda_{\max}$ must be orthogonal to $\vec{1}$.

If we expand the RHS,
$$
\begin{aligned}
\min_{\mathbf{x}, \mathbf{x} \perp \vec{1}} \frac{1}{2||\mathbf{x}||_2^2} \sum_{i,j} \mathbf{T}_{i,j}(\mathbf{x}_i - \mathbf{x}_j)^2 &= \min_{\mathbf{x}, \mathbf{x} \perp \vec{1}} \frac{1}{2||\mathbf{x}||_2^2} \sum_{i,j} \mathbf{t}_{i,j}(\mathbf{x}_i^2 - 2\mathbf{x}_i\mathbf{x}_j + \mathbf{x}_j^2) \\
&= \min_{\mathbf{x}, \mathbf{x} \perp \vec{1}} \frac{\sum_i \mathbf{x}_i^2 - \sum_{i,j} \mathbf{T}_{i,j}\mathbf{x}_i\mathbf{x}_j}{||\mathbf{x}||_2^2} \\
&= \min_{\mathbf{x}, \mathbf{x} \perp \vec{1}} \frac{||\mathbf{x}||_2^2 - \mathbf{x}^T \mathbf{T} \mathbf{x}}{||\mathbf{x}||_2^2} \\
&= \min_{\mathbf{x}, \mathbf{x} \perp \vec{1}} 1 - \frac{\mathbf{x}^T \mathbf{T} \mathbf{x}}{||\mathbf{x}||_2^2} \\
&\ge \min_{\mathbf{x}, \mathbf{x} \perp \vec{1}} 1 - \frac{|\mathbf{x}^T \mathbf{T} \mathbf{x}|}{||\mathbf{x}||_2^2} \\
&= 1 - \max_{\mathbf{x}, \mathbf{x} \perp \vec{1}} \frac{|\mathbf{x}^T \mathbf{T} \mathbf{x}|}{||\mathbf{x}||_2^2} \\
&= 1 - \lambda_{\max}.
\end{aligned}
$$

- 1 pt Minor mistakes
- 2 pts Major mistakes
- 3 pts Incorrect / No submission

### Visual Description
The page contains the mathematical solution for problem A.1.8.f, showing a derivation relating the spectral gap to a quadratic form. The text is in red. A grading rubric is at the bottom.

---
## Page 12
### Content
1.24 **A.1.8.g** 3 / 3 pts
$\checkmark$ - 0 pts Correct
**Solution** For the first expression, see that
$$ \frac{d}{2} \sum_{i,j} \mathbf{T}_{i,j} \cdot |\mathbf{x}_i - \mathbf{x}_j| = \frac{1}{2} \sum_{i,j} \mathbf{A}_{i,j} \cdot |\mathbf{x}_i - \mathbf{x}_j| \quad \text{(where } A \text{ is the adjacency matrix)} $$
and therefore this is precisely counting the number of edges which are cut with the factor 1/2 eliminating the double counting.

For the second expression, each term in the summation contributes when $\mathbf{x}_i \neq \mathbf{x}_j$, which occurs when $i \in S$ and $j \in \bar{S}$. So after eliminating double counting this happens $|S| \cdot |\bar{S}|$ times.

To show the last result,
$$
\begin{aligned}
\Phi(S) &= \frac{|E(S, \bar{S})|}{d \cdot |S|} \\
&= \frac{|\bar{S}| |E(S, \bar{S})|}{d \cdot |S| \cdot |\bar{S}|} \\
&\ge \frac{\frac{n}{2} |E(S, \bar{S})|}{d \cdot |S| \cdot |\bar{S}|} \quad \text{(since } |\bar{S}| \ge n/2) \\
&= \frac{n |E(S, \bar{S})|}{2d \cdot |S| \cdot |\bar{S}|}.
\end{aligned}
$$
Correct

- 3 pts No submission / Wrong
- 1 pt Incorrect proof/ Missing A.11
- 1 pt Incorrect proof/ Missing A.12
- 1 pt Incorrect proof/ Missing A.13
- 0.5 pts Incomplete or has some mistakes in proof for A.11
- 0.5 pts Incomplete or has some mistakes in proof for A.12
- 0.5 pts Incomplete or has some mistakes in proof for A.13

### Visual Description
The page contains the mathematical solution for problem A.1.8.g, discussing edge cuts and conductance $\Phi(S)$. The text is in red. A detailed grading rubric is at the bottom.

---
## Page 13
### Content
1.25 **A.1.8.h** In Review 0 / 6 pts
$\checkmark$ - 0 pts **Solution** Let's first show the hint.
$$
\begin{aligned}
\sum_{i,j} (\mathbf{x}_i - \mathbf{x}_j)^2 &= \sum_{i,j} \mathbf{x}_i^2 + \mathbf{x}_j^2 - 2\mathbf{x}_i\mathbf{x}_j \\
&= 2n||\mathbf{x}||^2 - 2 \left( \sum_i \mathbf{x}_i \right)^2 \\
&= 2n||\mathbf{x}||^2 - 2 \langle \mathbf{x}, \vec{1} \rangle^2 \\
&= 2n||\mathbf{x}||^2 - 2(0)^2 \quad \text{(by assumption)} \\
&= 2n||\mathbf{x}||^2.
\end{aligned}
$$
Now,
$$
\begin{aligned}
\Phi_T &= \min_{S, |S| \le |\bar{S}|} \frac{|E(S, \bar{S})|}{d \cdot |S|} \\
&\ge \min_{S, |S| \le |\bar{S}|} \frac{n \cdot |E(S, \bar{S})|}{2d \cdot |S| \cdot |\bar{S}|} \quad \text{(using previous part)} \\
&\ge \min_{S, |S| \in \{0,1\}^n} \frac{n \frac{d}{2} \sum_{i,j} \mathbf{T}_{i,j} |\mathbf{x}_i - \mathbf{x}_j|}{2d \cdot \frac{1}{2} \sum_{i,j} |\mathbf{x}_i - \mathbf{x}_j|} \\
&\text{(substituting previous part, removing constraint that less than half the bits are set in } \mathbf{x}) \\
&= \min_{\mathbf{x} \in \{0,1\}^n} \frac{n \sum_{i,j} \mathbf{T}_{i,j} (\mathbf{x}_i - \mathbf{x}_j)^2}{2 \sum_{i,j} (\mathbf{x}_i - \mathbf{x}_j)^2} \quad \text{(square of 0-1 variables are the same)} \\
&\ge \min_{\mathbf{x} \in \mathbb{R}^n} \frac{n \sum_{i,j} \mathbf{T}_{i,j} (\mathbf{x}_i - \mathbf{x}_j)^2}{2 \sum_{i,j} (\mathbf{x}_i - \mathbf{x}_j)^2}. \quad \text{(relaxation of domain of } \mathbf{x})
\end{aligned}
$$
Then see that we can define $\mathbf{x}' = \mathbf{x} - \mu \vec{1}$ where $\mu = \sum \mathbf{x}_i$, which has mean 0 and therefore satisfies $\mathbf{x}' \perp \vec{1}$. Furthermore, note that $\mathbf{x}'_i - \mathbf{x}'_j = \mathbf{x}_i - \mu - (\mathbf{x}_j - \mu) = \mathbf{x}_i - \mathbf{x}_j$, so the squared values are the same.
So
$$
\begin{aligned}
\min_{\mathbf{x} \in \mathbb{R}^n} \frac{n \sum_{i,j} \mathbf{T}_{i,j} (x_i - x_j)^2}{2 \sum_{i,j} (x_i - x_j)^2} &= \min_{\mathbf{x}' \in \mathbb{R}^n, \mathbf{x}' \perp \vec{1}} \frac{n \sum_{i,j} \mathbf{T}_{i,j} (\mathbf{x}'_i - \mathbf{x}'_j)^2}{2 \sum_{i,j} (\mathbf{x}'_i - \mathbf{x}'_j)^2} \\
&= \min_{\mathbf{x}' \in \mathbb{R}^n, \mathbf{x}' \perp \vec{1}} \frac{n \sum_{i,j} \mathbf
## Page 17
### Content
**Question 2**
**Programming** **31 / 31 pts**

**2.1 B.1.1.a** **1 / 1 pt**

$\checkmark$ **- 0 pts** Correct

> **Solution** Below we denote $N(i, j)$ as the set of neighbors of $\mathbf{X}_{ij}$ ($|N(i, j)| \le 4$).
>
> $p(\mathbf{X}_{ij} = 1 | \{\mathbf{x}_{kl} : (k, l) \neq (i, j)\})$
> $= \frac{p(\mathbf{X}_{ij} = 1, \dots, \mathbf{X}_{kl} = \mathbf{x}_{kl}, \dots)}{\sum_{x=-1,1} p(\mathbf{X}_{ij} = x, \dots, \mathbf{X}_{kl} = \mathbf{x}_{kl}, \dots)}$
> $= \frac{\exp\left(\mathbf{J}_{ij} + \sum_{(k,l) \neq (i,j)} (\mathbf{J}_{kl}\mathbf{x}_{kl} + \mathbf{J}_{ij,kl}\mathbf{x}_{kl}) + \sum_{((i',j'),(k,l)) \in E(G)} \mathbf{J}_{i'j',kl}\mathbf{x}_{i'j'}\mathbf{x}_{kl}\right)}{\sum_{x=-1,1} \exp\left(\mathbf{J}_{ij}x + \sum_{(k,l) \neq (i,j)} (\mathbf{J}_{kl}\mathbf{x}_{kl} + \mathbf{J}_{ij,kl}x\mathbf{x}_{kl}) + \sum_{((i',j'),(k,l)) \in E(G)} \mathbf{J}_{i'j',kl}\mathbf{x}_{i'j'}\mathbf{x}_{kl}\right)}$
> $= \frac{1}{1 + \exp(-2(\mathbf{J}_s + \sum_{(k,l) \in N(i,j)} \mathbf{J}_{st}\mathbf{x}_{kl}))}$
>
> It can also be simplified as
> $$\text{sigmoid}(2(\mathbf{J}_s + \sum_{(k,l) \in N(i,j)} \mathbf{J}_{st}\mathbf{x}_{kl})).$$

**- 1 pt** Missing solution or incorrect/insufficient solution

### Visual Description
Gradescope grading interface showing a correct solution for a programming sub-question. The solution involves a mathematical derivation of the conditional probability for an Ising model node, resulting in a sigmoid function.

---

## Page 18
### Content
**2.2 B.1.1.b** **10 / 10 pts**

$\checkmark$ **- 0 pts** Correct

1. For $J_{st} = 0.25$, the states should be random throughout the experiment.
2. For $J_{st} = 0.5$, the states should converge as taking more steps, but some "stains" keep staying on the plots.
3. For $J_{st} = 1, 10$, the states should converge with clear boundaries and no "stains".
Any similar trend as $J_{st}$ increases is considered correct.

![Ising Model Simulations](grid_of_plots)

**- 10 pts** Missing results or incorrect results
**- 2 pts** Results for T=0 incorrect
**- 2 pts** Incorrect results for $J_{st} = 10$
**- 2 pts** Missing results for iteration 400
**- 5 pts** Incomplete Visualizations
**- 8 pts** Major Errors
**- 3 pts** Plots only in code

### Visual Description
Gradescope grading interface showing a grid of 20 black-and-white images representing Ising model simulations. The grid has 4 rows (likely corresponding to $J_{st}$ values 0.25, 0.5, 1, and 10) and 5 columns (labeled Time: 0, 100, 200, 300, 400). As $J_{st}$ increases, the images transition from random noise to large, smooth black and white regions.

---

## Page 19
### Content
**2.3 B.1.2** **10 / 10 pts**

$\checkmark$ **- 0 pts** Correct

> **Solution** The reference estimation from AIS is around 180, while the variance should be smaller than 5 (this is a pretty lenient range).
> On the other hand, the estimation from IS should be much lower; my estimation is around 120 to 130, but it can vary depending on the random seed.
>
> When sampling from an Ising model, annealed importance sampling (AIS) is generally better than importance sampling because of the complex distribution of Ising model which can be highly multimodal. In contrast to importance sampling, AIS is able to travel through different temperature distributions and not get stuck in certain modes.

**- 4 pts** AIS incorrect.
**- 4 pts** IS incorrect (mean)
**- 1 pt** Missing comparison of differences between AIS and IS.
**- 10 pts** Blank answer / all incorrect
**- 2 pts** AIS standard deviation too high/unreasonable/missing.
**- 1 pt** Importance sampling code is correct but too few samples are used resulting in the wrong IS estimate. The question asks to use 500k samples.

**2.4 B.1.3** **10 / 10 pts**

$\checkmark$ **- 0 pts** Correct:

**- 10 pts** Missing/Incorrect
**- 2 pts** One group of plots incorrect
**- 1 pt** ST temperature favors low temperatures than high ones (or vice versa)
**- 2 pts** Gibbs summation of assignment plots incorrect
**- 2 pts** ST summation of assignment plots incorrect
**- 2 pts** ST samples under $T = 1$ incorrect or missing
**- 2 pts** Plots Missing
**- 8 pts** Partial Credit
**- 2 pts** Final samples summation plots incorrect
**- 3 pts** Plots only in code

### Visual Description
Gradescope grading interface for two sub-questions. The first (B.1.2) contains a text solution comparing Annealed Importance Sampling (AIS) and Importance Sampling (IS) for an Ising model. The second (B.1.3) shows a list of potential point deductions for incorrect or missing visualizations.

---

## Page 20
### Content
**Question 3**
**Collaboration Questions** **0 / 0 pts**

**3.1 1** **0 / 0 pts**
- 0 pts Received Help
$\checkmark$ **- 0 pts** Did Not Receive Help
- 0 pts Blank

**3.2 2** **0 / 0 pts**
- 0 pts Gave Help
$\checkmark$ **- 0 pts** Did Not Give Help
- 0 pts Blank

**3.3 3** **0 / 0 pts**
- 0 pts Found Code
$\checkmark$ **- 0 pts** Did Not Find Code
- 0 pts Blank

### Visual Description
Gradescope collaboration questionnaire where the student has checked "Did Not Receive Help", "Did Not Give Help", and "Did Not Find Code".

---

## Page 21
### Content
Homework 2: Markov Chain Monte Carlo Methods 10-708

# Homework 2
# Markov Chain Monte Carlo Methods$^1$

10-708 Probabilistic Graphical Models (Spring 2026)
https://piazza.com/cmu/spring2026/10708/home

OUT: February 13, 2026
DUE: March 11, 2026 at 11:59 PM
TAs: Nupoor Gandhi, Stephan Xie, Justin Lin

### START HERE: Instructions

*   **Collaboration policy:** The purpose of student collaboration is to facilitate learning, not to circumvent it. Studying the material in groups is strongly encouraged. It is also allowed to seek help from other students in understanding the material needed to solve a particular homework problem, provided no written notes (including code) are shared, or are taken at that time, and provided learning is facilitated, not circumvented. The actual solution must be done by each student alone. The presence or absence of any form of help or collaboration, whether given or received, must be explicitly stated and disclosed in full by all involved. See the Academic Integrity Section on the course site for more information: https://andrejristeski.github.io/10708S26/#:~:text=Academic%20Integrity%20Policies
*   **Late Submission Policy:** See the late submission policy here: https://andrejristeski.github.io/10708S26/#:~:text=Grace%20Day/Late%20Homework%20Policy
*   **Submitting your work to Gradescope:** We use Gradescope (https://www.gradescope.com/courses/1211283/assignments) to collect PDF submissions of open-ended questions on the homework (e.g. mathematical derivations, plots, short answers). The course staff will manually grade your submission, and you'll receive personalized feedback explaining your final marks. The homework template must be used and can be completed in Latex or by hand. Handwritten submissions must be legible otherwise we will not be able to give credit to your solutions. No changes should be made to the template, boxes and choices MUST remain the same size and in the same locations between the template and your completed submission, the document has 32 pages so your submission must contain no more and no less than 32 pages.
*   **Programming Code:** You will also submit your code for the programming questions on the homework to Gradescope, specifically the 'Homework 2 Programming' submission slot. All code written must be submitted in order for you to get any credit for the written components of the programming section.
*   **For multiple choice or select all that apply questions**, shade in the box or circle in the template document corresponding to the correct answer(s) for each of the questions. For \LaTeX users, replace `\choice` with `\CorrectChoice` to obtain a shaded box/circle, and don't change anything else.

---
$^1$Compiled on Wednesday 11$^{th}$ March, 2026 at 21:36

1 of 32

### Visual Description
Title page of a homework assignment for a Probabilistic Graphical Models course. It contains administrative details like due dates, TA names, and detailed instructions regarding collaboration, late submissions, and Gradescope formatting.

---

## Page 22
### Content
Homework 2: Markov Chain Monte Carlo Methods 10-708

# A Written Questions
Answer the following questions in the template provided. Then upload your solutions to Gradescope. You may use \LaTeX or print the template and hand-write your answers then scan it in. Failure to use the template may result in a penalty. In total there are 115 points among both the written and programming questions.

## A.1 Markov Chain Monte Carlo Methods
1. Answer the following questions about MCMC methods:
    (a) (1 point) Consider a Markov chain on the state space $\{A, B\}$ with the following transition matrix $P$:
    $$P = \begin{pmatrix} 0.8 & 0.2 \\ 0.4 & 0.6 \end{pmatrix}$$
    Which of the following $\pi = [\pi_A, \pi_B]$ are a stationary distribution of this chain?
    $\bigcirc$ $[\pi_A, \pi_B] = [0.5, 0.5]$
    $\bullet$ $[\pi_A, \pi_B] = [2/3, 1/3]$
    $\bigcirc$ $[\pi_A, \pi_B] = [7/8, 1/8]$
    $\bigcirc$ $[\pi_A, \pi_B] = [1/8, 7/8]$

    (b) (1 point) Why is Rejection Sampling often computationally infeasible for high-dimensional distributions (e.g., $D > 100$)?
    $\bigcirc$ The gradients of the target distribution become too expensive to calculate.
    $\bullet$ The volume of the "typical set" (where most probability mass lives) becomes a tiny fraction of the proposal's volume, causing the acceptance rate to drop exponentially.
    $\bigcirc$ The Markov chain needs to be run for a very long time to reach the stationarity.
    $\bigcirc$ For any proposal distribution $q$ we pick, the rejection probability $p(x)/q(x)$ becomes hard to compute at some points $x$.

    (c) (1 point) Which of the following statements is wrong?
    $\bigcirc$ The key idea of tempering is increasing the temperature (i.e. making the modes flatter) to make the transition between modes more likely to happen.
    $\bullet$ HMC allows for more efficient sampling from discrete distributions than Gibbs sampling.
    $\bigcirc$ MCMC methods can be used to generate samples from a distribution $p(\mathbf{x}) = \frac{\tilde{p}(\mathbf{x})}{Z}$ when the partition function $Z$ is unknown.
    $\bigcirc$ These statements are all correct.

    (d) (1 point) In the context of Simulated Tempering, what is the effect of increasing the temperature parameter on the target distribution?
    $\bigcirc$ It sharpens the peaks of the distribution, making modes more pronounced.

2 of 32

### Visual Description
A page of multiple-choice questions about MCMC methods. Question 1(a) asks for the stationary distribution of a 2x2 transition matrix. Question 1(b) asks about the curse of dimensionality in rejection sampling. Question 1(c) asks to identify a false statement about HMC and tempering. Question 1(d) starts at the bottom.

---

## Page 23
### Content
Homework 2: Markov Chain Monte Carlo Methods 10-708

$\bullet$ It flattens the distribution, reducing the differences between high and low probability regions.
$\bigcirc$ It shifts the entire distribution towards higher values of $x$.
$\bigcirc$ It has no effect on the target distribution.

(e) (1 point) Which of the following statements about sampling from Ising models is true?
$\bullet$ When the coupling strengths $J_{ij}$ are large and positive, Gibbs sampling may mix slowly because the system tends to remain for a long time in states where most of the spins are the same.
$\bigcirc$ Metropolis-Hastings accepts with probability 1 regardless of the proposal distribution for all Ising models.
$\bigcirc$ The computational cost per Gibbs update is independent of the number of neighbors each node has.
$\bigcirc$ Increasing the number of vertices in the Ising model generally speeds up the mixing time of both Gibbs sampling and Metropolis-Hastings.

2. (2 points) You aim to use rejection sampling to draw samples from $p(x) \sim N(0, \sigma^2)$. Which of the following proposal distributions $q(x)$ results in a finite $c$, hence can be used as a proposal for rejection sampling? Justify your answer in the box provided below.
$\bigcirc$ $q(x) = N(0, \frac{\sigma^2}{2})$
$\bigcirc$ $q(x) = N(1, \sigma^2)$
$\bullet$ $q(x) = N(0, 2\sigma^2)$
$\bigcirc$ $q(x) = U(0, 1)$

> The only one that works is $q(x) = N(0, 2\sigma^2)$.
> For rejection sampling, we need $\sup_x p(x)/q(x) < \infty$. Here,
> $$\frac{p(x)}{q(x)} = \frac{\frac{1}{\sqrt{2\pi}\sigma} e^{-x^2/(2\sigma^2)}}{\frac{1}{\sqrt{4\pi}\sigma} e^{-x^2/(4\sigma^2)}} = \sqrt{2} e^{-x^2/(4\sigma^2)} \le \sqrt{2},$$
> so $c = \sqrt{2}$ works.
> The others all fail for tail/support reasons: $N(0, \sigma^2/2)$ is too narrow so $p(x)/q(x) \to \infty$, $N(1, \sigma^2)$ blows up in one tail, and $U(0, 1)$ is zero outside $[0, 1]$ while the Gaussian target is positive everywhere. Therefore the usable proposal is $N(0, 2\sigma^2)$.

3. (4 points) You wish to use Gibbs sampling on a bivariate normal distribution $(X_1, X_2)$ with mean vector $\mu = [0, 0]^T$ and covariance matrix:
$$\Sigma = \begin{pmatrix} 1 & \rho \\ \rho & 1 \end{pmatrix}$$

3 of 32

### Visual Description
Continuation of multiple-choice questions. Question 1(d) concludes, and 1(e) discusses Ising model sampling. Question 2 asks to identify a valid proposal distribution for rejection sampling of a Gaussian, with a handwritten/typed justification box showing the mathematical derivation of the constant $c$. Question 3 introduces a bivariate normal Gibbs sampling problem.

---

## Page 24
### Content
Homework 2: Markov Chain Monte Carlo Methods 10-708

Suppose the chain is currently at a point $(x_1, x_2)$. What is the conditional distribution $p(X_1 | X_2 = x_2)$ used to sample in the Gibbs sampling update (as a function of the current state coordinates $x_1$ and $x_2$)? In the options below $\mathcal{N}(a, b)$ denotes a Gaussian with mean $a$ and variance $b$.
$\bigcirc$ $p(X_1 | X_2 = x_2) = \mathcal{N}(0, 1)$
$\bigcirc$ $p(X_1 | X_2 = x_2) = \mathcal{N}(\rho x_2, 1)$
$\bullet$ $p(X_1 | X_2 = x_2) = \mathcal{N}(\rho x_2, 1 - \rho^2)$
$\bigcirc$ $p(X_1 | X_2 = x_2) = \mathcal{N}((1 - \rho)x_2, 1 - \rho(1 - \rho))$

> The correct conditional is
> $$X_1 | X_2 = x_2 \sim \mathcal{N}(\rho x_2, 1 - \rho^2).$$
> For a multivariate Gaussian, conditioning still gives a Gaussian, and the standard formula is
> $$\mu_{1|2} = \mu_1 + \Sigma_{12}\Sigma_{22}^{-1}(x_2 - \mu_2), \quad \Sigma_{1|2} = \Sigma_{11} - \Sigma_{12}\Sigma_{22}^{-1}\Sigma_{21}.$$
> Here $\mu_1 =
## Page 25
### Content
Homework 2: Markov Chain Monte Carlo Methods 10-708

4. Consider the Markov Chain with 5 states, $\{A, B, C, D, E\}$. Its transition matrix is
$$ \mathbf{T} = \begin{bmatrix} \frac{1}{3} & \frac{1}{3} & 0 & \frac{1}{3} & 0 \\ \frac{1}{3} & 0 & \frac{1}{3} & 0 & \frac{1}{3} \\ 0 & \frac{1}{2} & 0 & \frac{1}{2} & 0 \\ \frac{1}{3} & 0 & \frac{1}{3} & 0 & \frac{1}{3} \\ 0 & \frac{1}{2} & 0 & \frac{1}{2} & 0 \end{bmatrix} \tag{A.1} $$

(a) (1 point) Draw the transition graph of this Markov chain.
> [Box containing a transition graph with 5 nodes: A, B, C, D, E. Node A has a self-loop. Bidirectional edges exist between: A-B, A-D, B-C, B-E, D-C, D-E. The text below the graph says: "The matrix above specifies the exact transition probabilities; the graph only indicates which transitions are possible."]

(b) (1 point) Is the Markov Chain irreducible? Provide a short justification for your answer.
> [Box containing the answer]: Yes, it is irreducible.
> You can get from $A$ to $B$ or $D$ in one step, and then from there you can reach $C$ and $E$. So $A$ can reach every state.
> Conversely, $C \to B \to A$ and $E \to D \to A$, so every state can reach $A$. Since $A$ can reach every state, all states communicate with one another, and the chain is irreducible.

5 of 32

### Visual Description
The page contains a mathematical problem about a Markov Chain. It includes a transition matrix $\mathbf{T}$ and two sub-questions. Part (a) features a directed graph with five circular nodes (A, B, C, D, E) and arrows indicating possible transitions. Part (
## Page 33
### Content
Homework 2: Markov Chain Monte Carlo Methods
10-708

First, $\mathbf{T}\vec{1} = \vec{1}$ because every row of a transition matrix sums to 1. So 1 is an eigenvalue, with eigenvector $\vec{1}$.
Now let $\mathbf{v}$ be any eigenvector with eigenvalue $\lambda$, and pick an index $i$ such that $|v_i|$ is maximal. Then
$$|\lambda| |v_i| = |(\mathbf{T}\mathbf{v})_i| = \left| \sum_j T_{ij} v_j \right| \le \sum_j T_{ij} |v_j| \le \sum_j T_{ij} |v_i| = |v_i|.$$
So $|\lambda| \le 1$. In particular, $\lambda_1 \le 1$.
But we already showed that 1 is an eigenvalue, so actually
$$\lambda_1 = 1.$$
The corresponding unit-norm eigenvector is the normalized all-ones vector:
$$\mathbf{v}_1 = \frac{1}{\sqrt{n}} \vec{1}.$$
And since the graph is connected, this top eigenvector is unique.

(b) (3 points) We make the same assumptions on $\mathbf{T}$ as previously, with eigenvalues $1 = \lambda_1 \ge \lambda_2 \ge \dots \ge \lambda_n$ and eigenvectors $\mathbf{v}_1 = \frac{1}{\sqrt{n}} \vec{1}, \mathbf{v}_2, \dots, \mathbf{v}_n$ scaled to have unit norm. Since $\mathbf{T}$ is symmetric, it admits a rank-1 decomposition (eigendecomposition)
$$\mathbf{T} = \sum_{i=1}^n \lambda_i \mathbf{v}_i \mathbf{v}_i^T.$$
where the vectors $\{\mathbf{v}_i\}_{i=1}^n$ form an orthonormal basis (that is, they are mutually orthogonal and of norm 1). Show that
$$\mathbf{T}^k = \sum_{i=1}^n \lambda_i^k \mathbf{v}_i \mathbf{v}_i^T.$$
Hint: Symmetric matrices have orthogonal eigenvectors.

13 of 32

### Visual Description
The page contains a boxed proof at the top regarding the eigenvalues of a transition matrix $\mathbf{T}$. Below the box is a problem statement labeled (b) involving the eigendecomposition of $\mathbf{T}$ and its powers.

---
## Page 34
### Content
Homework 2: Markov Chain Monte Carlo Methods
10-708

Start from the eigendecomposition
$$\mathbf{T} = \sum_{i=1}^n \lambda_i \mathbf{v}_i \mathbf{v}_i^T.$$
Because the eigenvectors are orthonormal,
$$\mathbf{v}_i^T \mathbf{v}_j = \begin{cases} 1, & i = j, \\ 0, & i \neq j. \end{cases}$$
So when we square $\mathbf{T}$,
$$\begin{aligned} \mathbf{T}^2 &= \left( \sum_i \lambda_i \mathbf{v}_i \mathbf{v}_i^T \right) \left( \sum_j \lambda_j \mathbf{v}_j \mathbf{v}_j^T \right) \\ &= \sum_{i,j} \lambda_i \lambda_j \mathbf{v}_i (\mathbf{v}_i^T \mathbf{v}_j) \mathbf{v}_j^T \\ &= \sum_i \lambda_i^2 \mathbf{v}_i \mathbf{v}_i^T. \end{aligned}$$
The exact same cancellation happens every time we multiply by another copy of $\mathbf{T}$, so by induction
$$\mathbf{T}^k = \sum_{i=1}^n \lambda_i^k \mathbf{v}_i \mathbf{v}_i^T.$$

(c) (3 points) It can be easily checked that $\boldsymbol{\pi} = \frac{1}{n} \vec{1}$ satisfies detailed balance with respect to $\mathbf{T}$, and is therefore a stationary distribution of $\mathbf{T}$.
Show that for any starting distribution $\mathbf{x}$,
$$\mathbf{T}^k \mathbf{x} = \boldsymbol{\pi} + \sum_{i \ge 2} \langle \mathbf{x}, \mathbf{v}_i \rangle \cdot \lambda_i^k \cdot \mathbf{v}_i.$$
In other words, we can describe the distribution after $k$ steps, starting at $\mathbf{x}$ linear-algebraically in terms of the eigenbasis of $\mathbf{T}$.

14 of 32

### Visual Description
The page features a boxed proof for the power of a matrix $\mathbf{T}^k$ using its eigendecomposition. Below the box is problem part (c) asking to show the expression for the distribution after $k$ steps.

---
## Page 35
### Content
Homework 2: Markov Chain Monte Carlo Methods
10-708

Because $\{\mathbf{v}_i\}$ is an orthonormal basis, we can expand the starting distribution as
$$\mathbf{x} = \sum_{i=1}^n \langle \mathbf{x}, \mathbf{v}_i \rangle \mathbf{v}_i.$$
Now apply the formula from the previous part:
$$\begin{aligned} \mathbf{T}^k \mathbf{x} &= \left( \sum_{i=1}^n \lambda_i^k \mathbf{v}_i \mathbf{v}_i^T \right) \mathbf{x} \\ &= \sum_{i=1}^n \lambda_i^k \mathbf{v}_i \langle \mathbf{x}, \mathbf{v}_i \rangle \\ &= \sum_{i=1}^n \langle \mathbf{x}, \mathbf{v}_i \rangle \lambda_i^k \mathbf{v}_i. \end{aligned}$$
Now separate out the $i = 1$ term. Since
$$\mathbf{v}_1 = \frac{1}{\sqrt{n}} \vec{1},$$
and $\mathbf{x}$ is a distribution, $\sum_j x_j = 1$, so
$$\langle \mathbf{x}, \mathbf{v}_1 \rangle = \left\langle \mathbf{x}, \frac{1}{\sqrt{n}} \vec{1} \right\rangle = \frac{1}{\sqrt{n}}.$$
Also $\lambda_1 = 1$, so the first term is
$$\langle \mathbf{x}, \mathbf{v}_1 \rangle \lambda_1^k \mathbf{v}_1 = \frac{1}{\sqrt{n}} \cdot 1 \cdot \frac{1}{\sqrt{n}} \vec{1} = \frac{1}{n} \vec{1} = \boldsymbol{\pi}.$$
Therefore
$$\mathbf{T}^k \mathbf{x} = \boldsymbol{\pi} + \sum_{i \ge 2} \langle \mathbf{x}, \mathbf{v}_i \rangle \lambda_i^k \mathbf{v}_i.$$
So the non-stationary part is exactly the contribution coming from the non-top eigenvectors.

(d) (5 points) Define the largest magnitude eigenvalue of any transition matrix $\mathbf{T}$ that is not $\lambda_1 = 1, \lambda_{\text{max}}$, by
$$\lambda_{\text{max}} = \max_{i=2, \dots, n} |\lambda_i|. \tag{A.7}$$
Using results from the previous parts, show that we can bound
$$\|\mathbf{T}^k \mathbf{x} - \boldsymbol{\pi}\|_{TV} \le \frac{\sqrt{n}}{2} \lambda_{\text{max}}^k.$$
Hint: First show that $\|\mathbf{T}^k \mathbf{x} - \boldsymbol{\pi}\|_2 \le \lambda_{\text{max}}^k$. Then use Cauchy-Schwarz to relate $L^1$ and $L^2$ distances by $\|\mathbf{x}\|_1 \le \sqrt{n} \|\mathbf{x}\|_2$ for any $\mathbf{x} \in \mathbb{R}^n$.

15 of 32

### Visual Description
The page contains a boxed proof for the expression of $\mathbf{T}^k \mathbf{x}$ in terms of the stationary distribution and other eigenvectors. Below the box is problem part (d) defining $\lambda_{\text{max}}$ and asking for a bound on the Total Variation (TV) distance.

---
## Page 36
### Content
Homework 2: Markov Chain Monte Carlo Methods
10-708

From the previous part,
$$\mathbf{T}^k \mathbf{x} - \boldsymbol{\pi} = \sum_{i \ge 2} \langle \mathbf{x}, \mathbf{v}_i \rangle \lambda_i^k \mathbf{v}_i.$$
Since the $\mathbf{v}_i$ are orthonormal,
$$\begin{aligned} \|\mathbf{T}^k \mathbf{x} - \boldsymbol{\pi}\|_2^2 &= \sum_{i \ge 2} \langle \mathbf{x}, \mathbf{v}_i \rangle^2 \lambda_i^{2k} \\ &\le \lambda_{\text{max}}^{2k} \sum_{i \ge 2} \langle \mathbf{x}, \mathbf{v}_i \rangle^2 \\ &\le \lambda_{\text{max}}^{2k} \|\mathbf{x}\|_2^2. \end{aligned}$$
Because $\mathbf{x}$ is a distribution, $\|\mathbf{x}\|_2 \le \|\mathbf{x}\|_1 = 1$, so
$$\|\mathbf{T}^k \mathbf{x} - \boldsymbol{\pi}\|_2 \le \lambda_{\text{max}}^k.$$
Now relate $L^1$ and $L^2$:
$$\|\mathbf{T}^k \mathbf{x} - \boldsymbol{\pi}\|_{TV} = \frac{1}{2} \|\mathbf{T}^k \mathbf{x} - \boldsymbol{\pi}\|_1 \le \frac{\sqrt{n}}{2} \|\mathbf{T}^k \mathbf{x} - \boldsymbol{\pi}\|_2 \le \frac{\sqrt{n}}{2} \lambda_{\text{max}}^k.$$
So
$$\|\mathbf{T}^k \mathbf{x} - \boldsymbol{\pi}\|_{TV} \le \frac{\sqrt{n}}{2} \lambda_{\text{max}}^k.$$

(e) (2 points) Show that for Equation A.6 to hold, it suffices to take
$$k > -\frac{1 + \frac{1}{2} \log n}{\log \lambda_{\text{max}}}. \tag{A.8}$$
(Note, the RHS is positive, since $\lambda_{\text{max}} < 1$). By Taylor expanding $\log \lambda_{\text{max}} \approx \lambda_{\text{max}} - 1$, this shows the mixing time is $\approx \frac{\log n}{1 - \lambda_{\text{max}}}$, i.e. inversely proportional to the spectral gap $1 - \lambda_{\text{max}}$.

16 of 32

### Visual Description
The page contains a boxed proof for the TV distance bound derived in part (d). Below the box is problem part (e) regarding the number of steps $k$ required for mixing.

---
## Page 37
### Content
Homework 2: Markov Chain Monte Carlo Methods
10-708

From the previous part,
$$\|\mathbf{T}^k \mathbf{x} - \boldsymbol{\pi}\|_{TV} \le \frac{\sqrt{n}}{2} \lambda_{\text{max}}^k.$$
So it is enough to make the right-hand side smaller than 1/4.
A slightly stronger but cleaner condition is to require
$$\lambda_{\text{max}}^k < e^{-1} n^{-1/2}.$$
Then
$$\|\mathbf{T}^k \mathbf{x} - \boldsymbol{\pi}\|_{TV} \le \frac{\sqrt{n}}{2} \cdot e^{-1} n^{-1/2} = \frac{1}{2e} < \frac{1}{4}.$$
Now solve for $k$. Since $0 < \lambda_{\text{max}} < 1$, we have $\log \lambda_{\text{max}} < 0$. If
$$k > -\frac{1 + \frac{1}{2} \log n}{\log \lambda_{\text{max}}},$$
then multiplying by the negative number $\log \lambda_{\text{max}}$ flips the inequality and gives
$$k \log \lambda_{\text{max}} < -1 - \frac{1}{2} \log n.$$
Exponentiating,
$$\lambda_{\text{max}}^k < e^{-1} n^{-1/2}.$$
As shown above, this is enough for the TV distance to be below 1/4.
So the stated condition on $k$ is sufficient.

In class, we saw conductance as a way to measure the mixing time of a random walk. Though this linear algebraic view seems completely different, these two quantities are actually very closely related. We'll see how in this part of the problem.

Let's recall the definition of conductance. Let $S$ denote any subset of the vertices $V$ in a $d$-regular graph. Denote $\bar{S} = V \setminus S$ to be the complement of $S$. For any $S$ where $|S| \le |\bar{S}|$, i.e $|S| \le n/2$, define the conductance $\Phi(S)$ to be
$$\Phi(S) = \frac{|E(S, \bar{S})|}{d \cdot |S|}, \tag{A.9}$$
where $E(S, \bar{S})$ denotes the set of edges that are cut between the two partitions $S$ and $\bar{S}$.
We are interested in the minimum conductance of the graph $\mathbf{T}$ over the choice of $S$, which can be expressed as
$$\Phi_{\mathbf{T}} = \min_{S, |S| \le |\bar{S}|} \frac{|E(S, \bar{S})|}{d \cdot |S|}.$$
Intuitively, you can think of this as finding the most "isolated" set of vertices in terms of how "connected" they are to the rest of the graph. For instance, the minimum conductance of a clique is large, but that of two cliques joined together by a single edge will be small.
In the following parts, you will prove that $\frac{1 - \lambda_{\text{max}}}{2} \le \Phi_{\mathbf{T}}$. (It's also possible to show that $\Phi_{\mathbf{T}} \le \sqrt{2 \cdot (1 - \lambda_{\text{max}})}$, but that's harder, and we will not do it in this problem.)

(f) (3 points) First, prove that
$$1 - \lambda_{\text{max}} \le \min_{\mathbf{x} \perp \vec{1}} \frac{1}{2\|\mathbf{x}\|_2^2} \sum_{i,j} T_{i,j}(x_i - x_j)^2. \tag{A.10}$$

17 of 32

### Visual Description
The page contains a boxed proof for the mixing time condition. Below the box, it introduces the concept of conductance $\Phi(S)$ and minimum conductance $\Phi_{\mathbf{T}}$. It concludes with problem part (f) asking to prove a bound on $1 - \lambda_{\text{max}}$.

---
## Page 38
### Content
Homework 2: Markov Chain Monte Carlo Methods
10-708

where $\perp$ means "orthogonal to".
Hint: Recall the Courant-Fisher characterization of eigenvalues of a symmetric matrix:
https://en.wikipedia.org/wiki/Courant-Fisher_minimax_principle

Because $\mathbf{T}$ is symmetric, Courant-Fisher gives
$$\lambda_2 = \max_{\mathbf{x} \perp \vec{1}, \mathbf{x} \neq 0} \frac{\mathbf{x}^T \mathbf{T} \mathbf{x}}{\|\mathbf{x}\|_2^2}.$$
So
$$1 - \lambda_2 = \min_{\mathbf{x} \perp \vec{1}, \mathbf{x} \neq 0} \frac{\mathbf{x}^T (\mathbf{I} - \mathbf{T}) \mathbf{x}}{\|\mathbf{x}\|_2^2}.$$
Also, by definition, $\lambda_{\text{max}} \ge \lambda_2$, hence
$$1 - \lambda_{\text{max}} \le 1 - \lambda_2.$$
Now expand the quadratic form:
$$\begin{aligned} \frac{1}{2} \sum_{i,j} T_{ij}(x_i - x_j)^2 &= \frac{1}{2} \sum_{i,j} T_{ij}(x_i^2 - 2x_i x_j + x_j^2) \\ &= \sum_i x_i^2 \sum_j T_{ij} - \sum_{i,j} T_{ij} x_i x_j \\ &= \|\mathbf{x}\|_2^2 - \mathbf{x}^T \mathbf{T} \mathbf{x} \\ &= \mathbf{x}^T (\mathbf{I} - \mathbf{T}) \mathbf{x}, \end{aligned}$$
where we used symmetry and that each row sums to 1.
Therefore
$$1 - \lambda_{\text{max}} \le \min_{\mathbf{x} \perp \vec{1}} \frac{\mathbf{x}^T (\mathbf{I} - \mathbf{T}) \mathbf{x}}{\|\mathbf{x}\|_2^2} = \min_{\mathbf{x} \perp \vec{1}} \frac{1}{2\|\mathbf{x}\|_2^2} \sum_{i,j} T_{ij}(x_i - x_j)^2.$$
This is exactly the desired inequality.

(g) (3 points) Let $\mathbf{x} \in \{0, 1\}^n$ be the indicator bitstring of $S$, i.e $x_i = 1$ if and only if $i \in S$. Show that both of the following properties hold:
$$|E(S, \bar{S})| = \frac{d}{2} \sum_{i,j} \mathbf{T}_{i,j} |x_i - x_j|, \tag{A.11}$$
$$|S| \cdot |\bar{S}| = \frac{1}{2} \sum_{i,j} |x_i - x_j|, \tag{A.12}$$
and also prove that for any $S$ where $|S| \le |\bar{S}|$
$$\Phi(S) \ge \frac{n \cdot |E(S, \bar{S})|}{2d \cdot |S| \cdot |\bar{S}|}. \tag{A.13}$$

18 of 32

### Visual Description
The page contains a boxed proof for the inequality in part (f) using the Courant-Fisher principle. Below the box is problem part (g) asking to show properties of the indicator vector $\mathbf{x}$ of a set $S$.

---
## Page 39
### Content
Homework 2: Markov Chain Monte Carlo Methods
10-708

For the indicator vector $\mathbf{x}$, we have $|x_i - x_j| = 1$ exactly when one endpoint is in $S$ and the other is in $\bar{S}$, and 0 otherwise.
Also, because the graph is $d$-regular and transitions are uniform over neighbors,
$$T_{ij} = \begin{cases} 1/d, & (i, j) \in E, \\ 0, & \text{otherwise}. \end{cases}$$
So
$$\sum_{i,j} T_{ij} |x_i - x_j|$$
counts every cut edge twice, each time with weight $1/d$. Hence
$$\sum_{i,j} T_{ij} |x_i - x_j| = \frac{2|E(S, \bar{S})|}{d},$$
which gives
$$|E(S, \bar{S})| = \frac{d}{2} \sum_{i,j} T_{ij} |x_i - x_j|.$$
Similarly,
$$\sum_{i,j} |x_i - x_j|$$
counts all ordered pairs with one vertex in $S$ and the other in $\bar{S}$. There are $2|S||\bar{S}|$ of those, so
$$|S||\bar{S}| = \frac{1}{2} \sum_{i,j} |x_i - x_j|.$$
Finally, if $|S| \le |\bar{S}|$, then $n = |S| + |\bar{S}| \le 2|\bar{S}|$, so
$$\frac{n}{2|\bar{S}|} \le 1.$$
Multiply $\Phi(S) = \frac{|E(S, \bar{S})|}{d|S|}$ by this factor:
$$\Phi(S) \ge \frac{n}{2|\bar{S}|} \cdot \frac{|E(S, \bar{S})|}{d|S|} = \frac{n|E(S, \bar{S})|}{2d|S||\bar{S}|}.$$

(h) (6 points) Use the previous parts to prove the desired claim, i.e
$$\frac{1 - \lambda_{\text{max}}}{2} \le \Phi_{\mathbf{T}}. \tag{A.14}$$
Hint: If $\mathbf{x} \perp \vec{1}$, then $\sum_{i,j} (\mathbf{x}_i - \mathbf{x}_j)^2 = 2n\|\mathbf{x}\|_2^2$. It also might be helpful to note that if $\mathbf{x}' = \mathbf{x} - c\vec{1}$ for any constant $c, \forall i, j$ it holds $\mathbf{x}'_i - \mathbf{x}'_j = \mathbf{x}_i - \mathbf{x}_j$.

19 of 32

### Visual Description
The page contains a boxed proof for the properties in part (g). Below the box is problem part (h) asking to prove the final relation between the spectral gap and conductance.

---
## Page 40
### Content
Homework 2: Markov Chain Monte Carlo Methods
10-708

Fix any set $S$ with $|S| \le |\bar{S}|$, and let $\mathbf{x}$ be its indicator vector. To use the previous part, we need a vector orthogonal to $\vec{1}$, so define
$$\mathbf{x}' = \mathbf{x} - \frac{|S|}{n} \vec{1}.$$
Then
$$\langle \mathbf{x}', \vec{1} \rangle = \sum_i x_i - |S| = |S| - |S| = 0,$$
so indeed $\mathbf{x}' \perp \vec{1}$.
Also, subtracting a constant from every coordinate does not change differences, so
$$x'_i - x'_j = x_i - x_j.$$
Since $x_i \in \{0, 1\}$, we also have
$$(x_i - x_j)^2 = |x_i - x_j|.$$
Now compute the norm of $\mathbf{x}'$:
$$\begin{aligned} \|\mathbf{x}'\|_2^2 &= |S| \left( 1 - \frac{|S|}{n} \right)^2 + |\bar{S}| \left( \frac{|S|}{n} \right)^2 \\ &= \frac{|S|(n - |S|)^2 + |\bar{S}||S|^2}{n^2} \\ &= \frac{|S||\bar{S}|}{n}. \end{aligned}$$
Apply the previous part to $\mathbf{x}'$:
$$1 - \lambda_{\text{max}} \le \frac{1}{2\|\mathbf{x}'\|_2^2} \sum_{i,j} T_{ij}(x'_i - x'_j)^2 = \frac{n}{2|S||\bar{S}|} \sum_{i,j} T_{ij} |x_i - x_j|.$$
Using the identity from the previous part,
$$\sum_{i,j} T_{ij} |x_i - x_j| = \frac{2|E(S, \bar{S})|}{d},$$
so
$$1 - \lambda_{\text{max}} \le \frac{n|E(S, \bar{S})|}{d|S||\bar{S}|}.$$
But from the previous part we also know
$$\Phi(S) \ge \frac{n|E(S, \bar{S})|}{2d|S||\bar{S}|}.$$
So
$$\frac{n|E(S, \bar{S})|}{d|S||\bar{S}|} \le 2\Phi(S).$$
Combining with the bound above,
$$1 - \lambda_{\text{max}} \le 2\Phi(S).$$
And this holds for every $S$ with $|S| \le |\bar{S}|$. Therefore it also holds for the minimum over all such $S$:
$$1 - \lambda_{\text{max}} \le 2\Phi_{\mathbf{T}}.$$
Rearranging,
$$\frac{1 - \lambda_{\text{max}}}{2} \le \Phi_{\mathbf{T}}.$$
This shows that conductance controls the spectral gap from below.

20 of 32

### Visual Description
The page contains a boxed proof for the final inequality in part (h), relating the spectral gap $1 - \lambda_{\text{max}}$ to the minimum conductance $\Phi_{\mathbf{T}}$.

---
## Page 41
### Content
Homework 2: Markov Chain Monte Carlo Methods
10-708

9. In this problem, we'll consider a slightly simplified graph neural network model in which to understand "oversmoothing" — a common training difficulty for deep graph neural networks. As a reminder, this is a phenomenon in which the representations in the $l$-th layer tend to collapse to the same value / direction, as the number of layers grows (i.e. the network grows deeper).

Let us simplify the action of one graph convolutional network (GCN) layer as:
$$h^{(l+1)}(v) := \sum_{w \in n(v)} \frac{1}{|n(v)|} W h^{(l)}(w)$$
where $v$ indexes a node in the graph, and $\forall l, h^{(l)}(v) \in \mathbb{R}^k; W \in \mathbb{R}^{k \times k}$. This is a GCN layer with weight matrix $W$ and no non-linearity. Let $A$ be the normalized adjacency matrix with $A_{vw} = 1/|n(v)|$, if $(v, w)$ are neighbors in the graph, and 0 otherwise.

(a) (3 points) Let $H^{(l)} \in \mathbb{R}^{n \times k}$ be the matrix which has, as its $i$-th row, $h^{(l)}(i)$. Show that $H^{(l)} = A^l H^{(0)} (W^T)^l$.

> For each node $v$, the update rule can be written using $A$ as
> $$h^{(l+1)}(v) = \sum_{w=1}^n A_{vw} W h^{(l)}(w).$$
> Taking transposes,
> $$h^{(l+1)}(v)^T = \sum_{w=1}^n A_{vw} h^{(l)}(w)^T W^T,$$
> since $(W h^{(l)}(w))^T = h^{(l)}(w)^T W^T$.
> But the $v$-th row of $A H^{(l)} W^T$ is exactly
> $$\sum_{w=1}^n A_{vw} h^{(l)}(w)^T W^T,$$
> so the row corresponding to node $v$ in $H^{(l+1)}$ matches the $v$-th row of $A H^{(l)} W^T$. Therefore
> $$H^{(l+1)} = A H^{(l)} W^T.$$
> Now prove the claimed formula by induction on $l$.
> Base case: for $l = 0$,
> $$H^{(0)} = A^0 H^{(0)} (W^T)^0.$$
> Inductive step: assume
> $$H^{(l)} = A^l H^{(0)} (W^T)^l.$$
> Then
> $$H^{(l+1)} = A H^{(l)} W^T = A (A^l H^{(0)} (W^T)^l) W^T = A^{l+1} H^{(0)} (W^T)^{l+1}.$$
> Hence, for all $l \ge 0$,
> $$\boxed{H^{(l)} = A^l H^{(0)} (W^T)^l.}$$

(b) (3 points) Let $\{e_1, e_2, \dots, e_n\}$ be any basis of $\mathbb{R}^n$. Prove that regardless of the choice of the initial features $\{h^{(0)}(v)\}$, there always exist vectors $\{o_1, o_2, \dots, o_n\}$ in $\mathbb{R}^k$, s.t.
$$H^{(0)} = \sum_i e_i o_i^T$$

21 of 32

### Visual Description
The page contains text and mathematical formulas. A large box contains a handwritten-style proof for part (a) using induction. The bottom of the page indicates it is page 21 of 32.

---

## Page 42
### Content
Homework 2: Markov Chain Monte Carlo Methods
10-708

> Let the columns of $H^{(0)}$ be
> $$H^{(0)} = [c_1, \dots, c_k], \quad c_j \in \mathbb{R}^n.$$
> Since $\{e_1, \dots, e_n\}$ is a basis of $\mathbb{R}^n$, every column $c_j$ can be written uniquely as
> $$c_j = \sum_{i=1}^n \alpha_{ij} e_i$$
> for some scalars $\alpha_{ij}$.
> Now define, for each $i = 1, \dots, n$,
> $$o_i = \begin{bmatrix} \alpha_{i1} \\ \alpha_{i2} \\ \vdots \\ \alpha_{ik} \end{bmatrix} \in \mathbb{R}^k.$$
> Then the $j$-th entry of $o_i$ is exactly $\alpha_{ij}$, so
> $$o_i^T = [\alpha_{i1}, \dots, \alpha_{ik}].$$
> Consider the matrix
> $$\sum_{i=1}^n e_i o_i^T.$$
> Its $j$-th column is
> $$\sum_{i=1}^n e_i (o_i)_j = \sum_{i=1}^n \alpha_{ij} e_i = c_j.$$
> So every column of $\sum_i e_i o_i^T$ matches the corresponding column of $H^{(0)}$. Therefore
> $$\boxed{H^{(0)} = \sum_{i=1}^n e_i o_i^T.}$$
> So no matter what the initial node features are, once a basis of $\mathbb{R}^n$ is fixed, we can always choose vectors $o_1, \dots, o_n \in \mathbb{R}^k$ to represent $H^{(0)}$ in this form.

22 of 32

### Visual Description
The page contains a large box with a handwritten-style proof for part (b) of the problem introduced on the previous page. The bottom of the page indicates it is page 22 of 32.

---

## Page 43
### Content
Homework 2: Markov Chain Monte Carlo Methods
10-708

(c) (8 points) Let $\mathbf{1} = (1, 1, \dots, 1)^T \in \mathbb{R}^n$, i.e. the all-ones vector of dimension $n$. Recall from part (a) of the previous problem that when a graph is connected, the eigenvalues of $A$ satisfy: $1 = \lambda_1 > \lambda_2 > \dots > \lambda_n \in \mathbb{R}$. For this problem, assume that $\forall i \neq 1, |\lambda_i| < 1$. Furthermore, we will assume that $W$ is diagonalizable and all eigenvalues of $W$ also lie in $(-1, 1]$.

Show that we have: $\lim_{l \to \infty} H^{(l)} = \mathbf{1} h^T$ for some $h \in \mathbb{R}^k$. Note that this means that the rows all converge to the same vector; in other words, for large $l$ all node representations become the same.

Hint 1: Use the findings from parts (a) and (b) to simplify: $\lim_{l \to \infty} H^{(l)}$.
Hint 2: If an $n \times n$ matrix has $n$ distinct real eigenvalues, then its eigenvectors are linearly independent and form a basis for $\mathbb{R}^n$. You can use this fact without proof.
Hint 3: It might be also useful to recall (you can use without proof) the submultiplicativity of a spectral norm: $\|AB\|_2 \le \|A\|_2 \|B\|_2$.

> Pick the basis in part (b) to be an eigenbasis of $A$. Since the eigenvalues are all distinct and real, $A$ has linearly independent eigenvectors $e_1, \dots, e_n$, and because every row of $A$ sums to 1, we can choose
> $$e_1 = \mathbf{1}, \quad A e_i = \lambda_i e_i.$$
> By part (b), there are vectors $o_1, \dots, o_n \in \mathbb{R}^k$ such that
> $$H^{(0)} = \sum_{i=1}^n e_i o_i^T.$$
> Now plug this into part (a):
> $$H^{(l)} = A^l H^{(0)} (W^T)^l = A^l \left( \sum_{i=1}^n e_i o_i^T \right) (W^T)^l = \sum_{i=1}^n A^l e_i o_i^T (W^T)^l.$$
> Since each $e_i$ is an eigenvector of $A$,
> $$A^l e_i = \lambda_i^l e_i,$$
> so
> $$H^{(l)} = \sum_{i=1}^n \lambda_i^l e_i o_i^T (W^T)^l = \mathbf{1} o_1^T (W^T)^l + \sum_{i=2}^n \lambda_i^l e_i o_i^T (W^T)^l.$$
> It remains to check that:
> * the $i \ge 2$ terms go to 0, and
> * the first term has a limit.

23 of 32

### Visual Description
The page contains text, hints, and a box with the beginning of a handwritten-style proof for part (c). The bottom of the page indicates it is page 23 of 32.

---

## Page 44
### Content
Homework 2: Markov Chain Monte Carlo Methods
10-708

> Because $W$ is diagonalizable, we can write
> $$W^T = SDS^{-1}$$
> with $D = \text{diag}(\mu_1, \dots, \mu_k)$, where every $\mu_j \in (-1, 1]$. Then
> $$(W^T)^l = SD^l S^{-1}.$$
> Each diagonal entry of $D^l$ is $\mu_j^l$, so it either goes to 0 if $|\mu_j| < 1$, or stays equal to 1 if $\mu_j = 1$. That means $D^l$ converges, hence $(W^T)^l$ converges too. Let
> $$\lim_{l \to \infty} (W^T)^l = B.$$
> In particular, the matrices $(W^T)^l$ are uniformly bounded in norm: there is some constant $C$ with
> $$\|(W^T)^l\|_2 \le C \quad \text{for all } l.$$
> Now for each $i \ge 2$, we have $|\lambda_i| < 1$, so
> $$\|\lambda_i^l e_i o_i^T (W^T)^l\|_2 \le |\lambda_i|^l \|e_i o_i^T\|_2 \|(W^T)^l\|_2 \le |\lambda_i|^l \|e_i o_i^T\|_2 C \to 0.$$
> So every term in the sum from $i = 2$ to $n$ vanishes in the limit.
> For the first term,
> $$\mathbf{1} o_1^T (W^T)^l \to \mathbf{1} o_1^T B.$$
> Therefore
> $$\lim_{l \to \infty} H^{(l)} = \mathbf{1} o_1^T B.$$
> If we define $h \in \mathbb{R}^k$ by
> $$h^T := o_1^T B,$$
> then
> $$\boxed{\lim_{l \to \infty} H^{(l)} = \mathbf{1} h^T.}$$
> The matrix $\mathbf{1} h^T$ has the same row repeated $n$ times, so as the depth grows, every node representation converges to the same vector. This is exactly the oversmoothing effect.

24 of 32

### Visual Description
The page contains a box with the continuation and conclusion of the handwritten-style proof for part (c). The bottom of the page indicates it is page 24 of 32.

---

## Page 45
### Content
Homework 2: Markov Chain Monte Carlo Methods
10-708

## B Programming [31 pts]

In the coding assignment, we are going to implement Gibbs sampling, annealed importance sampling (AIS), and Gibbs sampling with tempering on an Ising model. The Ising model $G$ is an $n \times n$ grid and its random variables $\mathbf{X} = \{X_{ij} : i \in [n], j \in [n]\}$ follow the joint distribution below:

$$p_G(\mathbf{X} = \mathbf{x}) = \frac{\hat{p}_G(\mathbf{x})}{Z_G}, \text{ where } \hat{p}_G(\mathbf{x}) = \exp \left( \sum_{(i,j) \in [n] \times [n]} \mathbf{J}_s x_{ij} + \sum_{((i,j),(k,l)) \in E(G)} \mathbf{J}_{ij,kl} x_{ij} x_{kl} \right). \quad (B.1)$$

in which $Z_G$ is the partition function of $G$, $\hat{p}_G(\cdot)$ is an un-normalized distribution, $\mathbf{J}$ are parameters and $E(G) = \{((i, j), (k, l)) \mid i, j, k, l \in [n] \text{ and } ((k = i \pm 1 \text{ and } l = j) \text{ or } (k = i \text{ and } l = j \pm 1))\}$ denotes the set of (undirected) edges on the grid. For brevity, we denote the set of parameters $\{\mathbf{J}_{ij}\}$ as $\mathbf{J}_s$, and the set $\{\mathbf{J}_{ij,kl}\}$ as $\mathbf{J}_{st}$ since we always set all the values in $\mathbf{J}_{st}$ or $\mathbf{J}_s$ to the same value.

In the coding files, we provide a template for the Ising model and some functions you need to implement in utils.py. We also provide some visualization tools for you to use in plot_utils.py. You are welcome to modify them based on your own implementation.

On Gradescope, we provide unit tests for functions conditional and log_unnormalized_p in utils.py. To use these unit tests, make sure your .zip file include utils.py. You can also upload one single file, utils.py, to Gradescope. We note that these unit tests are not required, and your code will not be autograded on Gradescope.

25 of 32

### Visual Description
Text-only slide. It introduces the programming section of the homework, defining the Ising model and its joint distribution.

---

## Page 46
### Content
Homework 2: Markov Chain Monte Carlo Methods
10-708

1. In this question, we are going to implement Gibbs sampling on this Ising model. The pseudo-code for the Gibbs sampling algorithm is provided below.
   1: procedure GibbsSampling($G, \mathbf{x}, T$)
   2: $\quad \hat{\mathbf{x}} \leftarrow []$
   3: $\quad$ for $t \in (1 \dots T)$ do
   4: $\quad \quad$ for $(i, j) \in \text{shuffle}(\{(1, 1), \dots, (N, N)\})$ do
   5: $\quad \quad \quad x_{ij} \sim p_G(\mathbf{X}_{ij} \mid \{\mathbf{X}_{kl} = \mathbf{x}_{kl} : (k, l) \neq (i, j)\})$
   6: $\quad \quad \quad \hat{\mathbf{x}} \leftarrow \hat{\mathbf{x}} + [\mathbf{x}]$ $\quad \triangleright$ Append new sample to the list
   7: $\
## Page 49
### Content
Homework 2: Markov Chain Monte Carlo Methods
10-708

AIS worked way better here than plain IS. Using $M = 1000$ AIS runs with $K = 1000$ temperatures, I got
$$\text{mean}(\log Z) \approx 180.37, \quad \text{std} \approx 1.15.$$
For IS, I split the 500,000 proposal samples into 1000 batches of 500 just to get comparable summary stats, and got
$$\text{mean}(\log Z) \approx 104.78, \quad \text{std} \approx 5.33.$$
That is really bad compared with AIS. As an extra sanity check, an exact transfer-matrix computation gives $\log Z \approx 180.91$, so AIS is quite close while IS severely underestimates it. Even the single IS estimate using all 500,000 samples at once was only about 120.44. So the main story is just that AIS keeps the variance under control by bridging gradually, while IS gets crushed by a few giant weights.

29 of 32

### Visual Description
Text-only slide. The main content is enclosed within a single large rectangular border.

---
## Page 50
### Content
Homework 2: Markov Chain Monte Carlo Methods
10-708

3. (10 points) In this question, we are going to implement Gibbs sampling with tempering.
Denote the state space as $\mathbb{R}^{n \times n} \times [L]$, where $[L]$ is the number of temperatures, and the temperatures as an array $\mathbf{T}$. Let $M_{\mathbf{T}[i]}$ be the Markov chain (i.e. the Gibbs chain) corresponding to temperature $\mathbf{T}[i]$ and let the current state be $(\mathbf{x}, \mathbf{T}[i]) \in \mathbb{R}^{n \times n} \times [L], i \in [L]$.

For the Gibbs sampling with tempering algorithm, you need to first estimate the partition function $\hat{Z}_{\mathbf{T}[i]}$ for each temperature with the AIS algorithm, and then follow the steps below for each iteration:
* Do (1) or (2) with probability 0.5 for each:
    * (1) (Gibbs sampling step) Evolve $\mathbf{x}$ according to $M_{\mathbf{T}[i]}$ to a new point $\mathbf{x}'$ using the Gibbs sampling function in question 1 (so you will update all coordinates of $\mathbf{x}$). Set next point to $(\mathbf{x}', \mathbf{T}[i])$.
    * (2) (Metropolis-Hastings step) Pick a neighbor of the current temperature $\mathbf{T}[i]$, i.e. $\mathbf{T}[i-1]$ or $\mathbf{T}[i+1]$, with probability 0.5 for each. If the chosen neighbor is $\mathbf{T}[j]$, set the next point to $(\mathbf{x}, \mathbf{T}[j])$ with probability $\min \left( \frac{\hat{p}_{\mathbf{T}[j]}(\mathbf{x}) / \hat{Z}_{\mathbf{T}[j]}}{\hat{p}_{\mathbf{T}[i]}(\mathbf{x}) / \hat{Z}_{\mathbf{T}[i]}}, 1 \right)$.

Note: if $\mathbf{T}[i]$ is on the ends of the temperature array, i.e. $i == 0$ or $i == L - 1$, for the Metropolis-Hastings step, simply move it to the only neighbor, i.e. 1 or $L - 2$.

Consider a $5 \times 5$ grid, set
* $\mathbf{J}_s = 0, \mathbf{J}_{st} = 1.0, 1.2, 1.5, 2.0$, and
* $\mathbf{T} = \text{np.linspace}(0.5, 2.0, 31)$, and
* for each AIS estimation, $K = M = 50$ and $\beta_j = 0.02j$ for $j = 0, 1, \dots, K$.

Run both vanilla Gibbs sampling and tempering sampling on the model for 100,000 iterations. Provide two types of plots:
1. the temperature of each iteration (for Gibbs sampling you can simply plot a horizontal line), and
2. the summation of the variable assignments (e.g. +25 for all +1, and -25 for all -1)

versus the number of iterations. In addition, after running the tempering sampling, collect the samples under temperature $T = 1$, and plot the summation of the variable assignments. There should be $\underbrace{(4 \text{ different } \mathbf{J}_{st})}_{4} \times \underbrace{(2 \text{ sampling algorithms} \times 2 \text{ types of plots} + 1 \text{ plot of samples under } T = 1)}_{2 \times 2 + 1} = 20$ plots in total.

30 of 32

### Visual Description
Text-only slide.

---
## Page 51
### Content
Homework 2: Markov Chain Monte Carlo Methods
10-708

The plots below match the usual tempering story pretty well. In each row, the left 4-panel figure shows: vanilla Gibbs temperature, vanilla Gibbs magnetization, tempering temperature, and tempering magnetization. The right plot is the magnetization of the samples collected at $T = 1$ after tempering.
For $\mathbf{J}_{st} = 1.0$ and 1.2, vanilla Gibbs already starts getting sticky, while tempering still moves around enough to switch between positive and negative magnetization. By $\mathbf{J}_{st} = 1.5$ and especially 2.0, vanilla Gibbs is basically trapped in one mode for almost the whole run, but tempering can still escape by moving to higher temperatures and then coming back down. The $T = 1$ samples also reflect this: for moderate coupling they visit both modes, while for very strong coupling they spend most of the time near the fully aligned states $\pm 25$.

[Plots showing simulation results for $J_{st} = 1.0, 1.2, 1.5, 2.0$]

**Code Submission [0 pts]** You must submit all of your code to the appropriate slot on Gradescope. If you have multiple .py or .ipynb files, you must upload all of them. We provide unit tests for functions conditional and log_unnormalized_p in utils.py on Gradescope for you to verify the correctness of your code. However, they are not required, and your code will not be autograded on Gradescope. Instead, we will grade the programming part first by examining the written deliverable; when your result is far from what we expect, we'll look into your code to decide the partial credit. As such, please carefully identify major sections of the code via comments.

31 of 32

### Visual Description
The page contains a grid of plots organized into four rows, corresponding to different values of $J_{st}$ (1.0, 1.2, 1.5, and 2.0). Each row features a 4-panel plot on the left showing time-series data for temperature and magnetization (for both vanilla Gibbs and tempering) and a single plot on the right showing a histogram or time-series of magnetization samples at $T=1$. The plots illustrate how tempering helps the sampler explore different modes compared to vanilla Gibbs sampling, which becomes increasingly "sticky" as $J_{st}$ increases.

---
## Page 52
### Content
Homework 2: Markov Chain Monte Carlo Methods
10-708

### B.1 Collaboration Policy
After you have completed all other components of this assignment, report your answers to the collaboration policy questions detailed in the Academic Integrity Policies for this course.

1. Did you receive any help whatsoever from anyone in solving this assignment? If so, include full details including names of people who helped you and the exact nature of help you received.
   > No.

2. Did you give any help whatsoever to anyone in solving this assignment? If so, include full details including names of people who helped you and the exact nature of help you offered.
   > No.

3. Did you find or come across code that implements any part of this assignment? If so, include full details including the source of the code and how you used it in the assignment.
   > No.

32 of 32

### Visual Description
Text-only slide. The answers to the three collaboration policy questions are provided within rectangular text boxes, each containing the word "No.".
