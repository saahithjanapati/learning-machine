# Jan27_matrix_norms

Source: `materials/archive/Jan27_matrix_norms.pdf`
Duplicate equivalents: `Jan27_matrix_norms.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `strict full-PDF single-call conversion`
Finish reason: `STOP`
Pages: 45
## Page 1
### Content
**Optimization for Machine Learning**

**Matrix Norms**

Slide 1
Carnegie Mellon University

### Visual Description
This is a title slide. It features the text "Optimization for Machine Learning" in large blue font at the top, followed by "Matrix Norms" in large red font in the center. The bottom left corner says "Slide 1" and the bottom right corner contains the "Carnegie Mellon University" logo in red.

---

## Page 2
### Content
**Contents**
* Eigenvalues and Eigenvectors
* Singular values and Singular vectors
* Matrix factorization:
    * Jordan form
    * Singular Value Decomposition
* Matrix Norms

Slide 2
Carnegie Mellon University

### Visual Description
This is a table of contents slide. It lists four main bullet points: Eigenvalues and Eigenvectors, Singular values and Singular vectors, Matrix factorization (with sub-bullets for Jordan form and Singular Value Decomposition), and Matrix Norms. The layout is a simple bulleted list on a white background.

---

## Page 3
### Content
**Eigenvalues and Eigenvectors**

Slide 3
Carnegie Mellon University

### Visual Description
This is a section header slide. It contains the text "Eigenvalues and Eigenvectors" in large blue font centered on the page.

---

## Page 4
### Content
**Eigenvalues and Eigenvectors**

**Definition [Eigenvector and eigenvalue]:**

An **eigenvalue** and **eigenvector** of a **square matrix** $A \in \mathbb{R}^{n \times n}$ are a scalar $\lambda \in \mathbb{R}$ and a nonzero vector $x \in \mathbb{R}^n$ so that
$$Ax = \lambda x$$

Sometimes we will use complex numbers, and assume:
$A \in \mathbb{C}^{n \times n}$, $\lambda \in \mathbb{C}$, $x \in \mathbb{C}^n$, and $Ax = \lambda x$.

Slide 4
Carnegie Mellon University

### Visual Description
This slide provides the mathematical definition of eigenvalues and eigenvectors. The core equation $Ax = \lambda x$ is highlighted in red. It specifies that the matrix must be square and the vector must be nonzero. It also notes that the definitions extend to the complex field.

---

## Page 5
### Content
**Spectral Radius**

**Definition [Characteristic Polynomial]:**
Let $A \in \mathbb{C}^{n \times n}$
$p_A(\lambda) = \det(\lambda I_n - A)$ This is an $n$-order polynomial in $\lambda$.

**Theorem:**
The $n$ complex roots of $p_A(\lambda)$ are the eigenvalues of matrix $A$.
$\lambda$ is an eigenvalue of $A \iff p_A(\lambda) = 0$

[so every square matrix $A \in \mathbb{C}^{n \times n}$ has $n$ eigenvalues in $\mathbb{C}$, but some of them might be counted multiple times, i.e. eigenvalues can have different multiplicity]

Slide 5
Carnegie Mellon University

### Visual Description
This slide defines the characteristic polynomial and its relationship to eigenvalues. It states that eigenvalues are the roots of this polynomial. A note at the bottom explains that an $n \times n$ matrix always has $n$ complex eigenvalues when accounting for multiplicity.

---

## Page 6
### Content
**Spectrum and Spectral Radius**

**Definition [Spectrum]:**
$\Lambda(A)$ is the set of all eigenvalues of $A$ (without multiplicity).

**Definition [Spectral radius]:**
$$\rho(A) = \max\{|\lambda| : \lambda \in \Lambda(A)\}$$

**Theorem [Matrix Power Convergence]**
Let $A \in \mathbb{C}^{n \times n}$
$$\rho(A) < 1 \iff \lim_{t \to \infty} A^t = 0 \in \mathbb{C}^{n \times n}.$$

Slide 6
Carnegie Mellon University

### Visual Description
This slide defines the "Spectrum" as the set of unique eigenvalues and the "Spectral Radius" as the maximum absolute value among those eigenvalues. It also presents a theorem stating that a matrix's powers converge to zero if and only if its spectral radius is less than 1.

---

## Page 7
### Content
**Jordan Form**

**Theorem [Jordan form]:**
For every matrix $A \in \mathbb{C}^{n \times n}$, there exists a non singular matrix $P \in \mathbb{C}^{n \times n}$ such that
$$PAP^{-1} = J,$$
where $J$ has Jordan canonical form. $\lambda_i \in \mathbb{C}$ are the eigenvalues of $A$ (and $J$).

$$J = \begin{pmatrix} \begin{array}{|ccc|} \hline \lambda_1 & 1 & \\ & \lambda_1 & 1 \\ & & \lambda_1 \\ \hline \end{array} & & & \\ & \begin{array}{|cc|} \hline \lambda_2 & 1 \\ & \lambda_2 \\ \hline \end{array} & & \\ & & \begin{array}{|c|} \hline \lambda_3 \\ \hline \end{array} & \\ & & & \ddots & \\ & & & & \begin{array}{|cc|} \hline \lambda_n & 1 \\ & \lambda_n \\ \hline \end{array} \end{pmatrix}$$

Slide 7
Carnegie Mellon University

### Visual Description
This slide introduces the Jordan canonical form. It shows the decomposition $PAP^{-1} = J$. A large matrix $J$ is depicted, containing block-diagonal structures (Jordan blocks). Each block has an eigenvalue $\lambda_i$ on its main diagonal and 1s on the super-diagonal. The blocks are outlined with thin gray boxes to emphasize their structure.

---

## Page 8
### Content
**Trace = sum of Eigenvalues**

**Lemma [Trace = sum of Eigenvalues]:**
For a square matrix $B \in \mathbb{R}^{n \times n}$, $Tr(B) = \sum_{i=1}^n \lambda_i$, where $\lambda_i$ is the $i^{th}$ eigenvalue of $B$.

**Proof:**
Let's use the Jordan form of $B$.
$$J = \begin{pmatrix} \begin{array}{|ccc|} \hline \lambda_1 & 1 & \\ & \lambda_1 & 1 \\ & & \lambda_1 \\ \hline \end{array} & & & \\ & \begin{array}{|cc|} \hline \lambda_2 & 1 \\ & \lambda_2 \\ \hline \end{array} & & \\ & & \begin{array}{|c|} \hline \lambda_3 \\ \hline \end{array} & \\ & & & \ddots & \\ & & & & \begin{array}{|cc|} \hline \lambda_n & 1 \\ & \lambda_n \\ \hline \end{array} \end{pmatrix}$$

Therefore, we have $tr(A) = tr(P^{-1}JP) = tr(PP^{-1}J) = tr(J) = \sum_i \lambda_i$, where $\lambda_i$ are the eigenvalues of $A$.

Slide 8
Carnegie Mellon University

### Visual Description
This slide presents a lemma stating that the trace of a matrix equals the sum of its eigenvalues. The proof utilizes the Jordan form shown on the previous slide. It uses the cyclic property of the trace operator: $tr(ABC) = tr(BCA)$. The Jordan matrix $J$ is shown again to illustrate that its trace is clearly the sum of the diagonal elements, which are the eigenvalues.

---

## Page 9
### Content
**Determinant = product of Eigenvalues**

**Lemma [Determinant = product of Eigenvalues]:**
For a square matrix $B \in \mathbb{R}^{n \times n}$, $Det(B) = \prod_{i=1}^n \lambda_i$, where $\lambda_i$ is the $i^{th}$ eigenvalue of $B$.

**Proof:**
Let's use the Jordan form of $B$.
$$J = \begin{pmatrix} \begin{array}{|ccc|} \hline \lambda_1 & 1 & \\ & \lambda_1 & 1 \\ & & \lambda_1 \\ \hline \end{array} & & & \\ & \begin{array}{|cc|} \hline \lambda_2 & 1 \\ & \lambda_2 \\ \hline \end{array} & & \\ & & \begin{array}{|c|} \hline \lambda_3 \\ \hline \end{array} & \\ & & & \ddots & \\ & & & & \begin{array}{|cc|} \hline \lambda_n & 1 \\ & \lambda_n \\ \hline \end{array} \end{pmatrix}$$

Therefore, we have $Det(A) = Det(P^{-1}JP) = Det(PP^{-1}J) = Det(J) = \prod_i \lambda_i$, where $\lambda_i$ are the eigenvalues of $A$.

Slide 9
Carnegie Mellon University

### Visual Description
This slide presents a lemma stating that the determinant of a matrix equals the product of its eigenvalues. The proof uses the Jordan form and the property that the determinant of a product is the product of determinants ($Det(AB) = Det(A)Det(B)$). The Jordan matrix $J$ is shown again; since it is upper triangular, its determinant is the product of its diagonal elements.

---

## Page 10
### Content
**Spectral Theorem**

Let $A \in \mathbb{R}^{n \times n}$ be a symmetric matrix, i.e. $A = A^\top$. Then the following statements hold:

1. All $n$ eigenvalues of $A$ are real.
2. $A$ is orthogonally diagonalizable:
$$A = Q \Lambda Q^\top,$$
where $Q \in \mathbb{R}^{n \times n}$ is orthogonal ($Q^\top Q = I$) and $\Lambda = \text{diag}(\lambda_1, \dots, \lambda_n)$ with $\lambda_i \in \mathbb{R}$.
3. The column vectors of $Q$ contain the eigenvectors of $A$.

Slide 10
Carnegie Mellon University

### Visual Description
This slide details the Spectral Theorem for real symmetric matrices. It lists three key properties: real eigenvalues, orthogonal diagonalizability (highlighted in red: $A = Q \Lambda Q^\top$), and that the columns of the orthogonal matrix $Q$ are the eigenvectors.

---

## Page 11
### Content
**Spectral Theorem [Counterexample]**

**Counterexample:**
We can create a matrix $A$, that is not symmetric, but all of its eigenvalues are still real.
$$A = \begin{pmatrix} 3 & 1 \\ 0 & 3 \end{pmatrix} \quad \text{[The Jordan block]}$$
eigenvalue: $\lambda = 3$
eigenvector: $x = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$

Slide 11
Carnegie Mellon University

### Visual Description
This slide provides a counterexample to show that while symmetric matrices have real eigenvalues, the converse isn't necessarily true. It shows a $2 \times 2$ Jordan block matrix which is not symmetric but has a real eigenvalue of 3 (with multiplicity 2). It also shows the single eigenvector associated with this eigenvalue.

---

## Page 12
### Content
**Singular values and Singular vectors**

Slide 12
Carnegie Mellon University

### Visual Description
This is a section header slide for "Singular values and Singular vectors" in large blue font.

---

## Page 13
### Content
**Singular values and Singular vectors**

**Definition [Singular value, singular vectors]:**
A singular value and corresponding pair of singular vectors of a **rectangular matrix** $A \in \mathbb{R}^{m \times n}$ are
* a nonnegative scalar $\sigma \ge 0$
* and two nonzero vectors $u \in \mathbb{R}^m$ and $v \in \mathbb{R}^n$ so that
$$Av = \sigma u$$
$$A^\top u = \sigma v$$

Ref: https://www.mathworks.com/content/dam/mathworks/mathworks-dot-com/moler/eigs.pdf

Slide 13
Carnegie Mellon University

### Visual Description
This slide defines singular values and vectors for rectangular matrices. It specifies that singular values are non-negative and defines the relationship between the matrix $A$, its transpose $A^\top$, and the singular vectors $u$ and $v$ through two equations highlighted in red. A reference link is provided at the bottom.

---

## Page 14
### Content
**Singular values in Matrix Form**

Using the $Av_i = \sigma_i u_i$, $A^\top u_i = \sigma_i v_i$ definitions, we can get the following matrix forms:

**Definition [Singular values in matrix form]:**
$$AV = U\Sigma \quad A, \Sigma \in \mathbb{R}^{m \times n}$$
$$A^\top U = V\Sigma^\top \quad U \in \mathbb{R}^{m \times m} \quad V \in \mathbb{R}^{n \times n}$$

Here $\Sigma \in \mathbb{R}^{m \times n}$ is zero except possibly on its main diagonal.

It turns out that singular vectors can always be chosen to be orthogonal to each other, i.e. the matrices $U$ and $V$ satisfy $U^\top U = UU^\top = I$ and $V^\top V = VV^\top = I$.

Consequently, $A = U\Sigma V^\top$ **[SVD]**

Slide 14
Carnegie Mellon University

### Visual Description
This slide translates the vector definitions of singular values into matrix form. It introduces the Singular Value Decomposition (SVD) formula $A = U\Sigma V^\top$ in red. It defines the properties of the matrices $U$ (orthogonal), $V$ (orthogonal), and $\Sigma$ (diagonal-like).

---

## Page 15
### Content
**Singular Value Decomposition**

**Style 1**
$$A = U \Sigma V^\top$$
Dimensions:
$A: m \times n$
$U: m \times m$
$\Sigma: m \times n$
$V^\top: n \times n$

**Style 2**
$$A = U \Sigma V^\top$$
Dimensions:
$A: m \times n$
$U: m \times k$
$\Sigma: k \times k$
$V^\top: k \times n$

$Av_i = \sigma_i u_i, A^\top u_i = \sigma_i v_i \quad i = 1, \dots, k.$
$A \in \mathbb{R}^{m \times n} \quad \Sigma \in \mathbb{R}^{k \times k}, k \le \min(m, n)$
$u_i \in \mathbb{R}^m \quad v_i \in \mathbb{R}^n$

Box on right:
$AV = U\Sigma$
$A^\top U = V\Sigma^\top$
$U^\top U = I$
$V^\top V = I$
$A = U\Sigma V^\top$

Slide 15
Carnegie Mellon University

### Visual Description
This slide visually compares two "styles" of SVD.
- **Style 1 (Full SVD):** Shows $A$ as a tall rectangle ($m \times n$), $U$ as a large square ($m \times m$), $\Sigma$ as a tall rectangle ($m \times n$), and $V^\top$ as a small square ($n \times n$).
- **Style 2 (Reduced/Economy SVD):** Shows $A$ as a tall rectangle ($m \times n$), $U$ as a thin tall rectangle ($m \times k$), $\Sigma$ as a small square ($k \times k$), and $V^\top$ as a thin wide rectangle ($k \times n$).
Labels $m, n, k$ indicate dimensions. A summary box on the right lists the key SVD equations.

---

## Page 16
### Content
**Singular Value Decomposition**

**Style 2**
$$A = U \Sigma V^\top$$
Dimensions:
$A: m \times n$
$U: m \times k$
$\Sigma: k \times k$
$V^\top: k \times n$

$A \in \mathbb{R}^{m \times n} \quad u_i \in \mathbb{R}^m \quad \Sigma \in \mathbb{R}^{k \times k}, k \le \min(m, n)$
$v_i \in \mathbb{R}^n$

$Av_i = \sigma_i u_i, A^\top u_i = \sigma_i v_i, i = 1, \dots, k.$

The columns of $U$ and the columns of $V$ (= rows of $V^\top$) are the singular vectors, $u_i, v_i, i = 1, \dots, k$.

Slide 16
Carnegie Mellon University

### Visual Description
This slide focuses on "Style 2" (Reduced SVD). It repeats the diagram from the previous slide showing $A = U \Sigma V^\top$ with dimensions $m, n, k$. It explicitly states that the columns of $U$ and $V$ are the singular vectors.

---

## Page 17
### Content
**Eigenvalues of $AA^\top$ and $A^\top A$**

**Lemma** Let $\lambda$ be an eigenvalue of $AA^\top$ with eigenvector $x$
Assume that $A^\top x \ne 0$.
Then $\lambda$ is an eigenvalue of $A^\top A$, too, with eigenvector $A^\top x$.

**Proof**
$$AA^\top x = \lambda x$$
$$\Rightarrow A^\top AA^\top x = A^\top (\lambda x)$$
$$\Rightarrow A^\top A(A^\top x) = \lambda (A^\top x)$$
$$\Rightarrow \lambda \text{ is an eigenvalue of } A^\top A \text{ with eigenvector } A^\top x$$

Slide 17
Carnegie Mellon University

### Visual Description
This slide presents a lemma and its proof regarding the relationship between the eigenvalues of $AA^\top$ and $A^\top A$. The proof is a straightforward algebraic derivation showing that if $x$ is an eigenvector of $AA^\top$, then $A^\top x$ is an eigenvector of $A^\top A$ with the same eigenvalue.

---

## Page 18
### Content
**Eigenvalues and Singular values**

**Lemma [Calculating singular values]:**
For $A \in \mathbb{R}^{m \times n}$, and $i = 1, 2, \dots, \min\{m, n\}$, we have that
$$\sigma_i^2(A) = \lambda_i(AA^\top) = \lambda_i(A^\top A)$$

**Proof:** Let $A = U\Sigma V^\top$ [SVD of $A$], where $\Sigma \in \mathbb{R}^{k \times k}$, $V^\top V = I$, $U^\top U = I$.
$AA^\top = (U\Sigma V^\top)(V\Sigma U^\top) = U\Sigma^2 U^\top$
$AA^\top U = U\Sigma^2 U^\top U = U\Sigma^2$
$\Rightarrow \Sigma^2$ are the eigenvalues of $A^\top A$ ■.

**Corollary:** $\sum_i \sigma_i^2(A) = \sum_i \lambda_i(A^\top A) = Tr(A^\top A)$

Slide 18
Carnegie Mellon University

### Visual Description
This slide connects singular values to eigenvalues. It states that the squared singular values of $A$ are the eigenvalues of $AA^\top$ and $A^\top A$. The proof uses the SVD. A corollary at the bottom relates the sum of squared singular values to the trace of $A^\top A$.

---

## Page 19
### Content
**Eigenvalues and Singular values**

**Lemma [When A is symmetric, singular values = |eigenvalues|]:**
If $A = A^\top$, then $\sigma_i(A) = |\lambda_i(A)|$

**Proof:**
$Av = \lambda v$
$A^2 v = A\lambda v$
$= \lambda Av$
$= \lambda^2 v \Rightarrow \lambda(A^2) = \lambda^2(A)$

Using the $\sigma_i^2(A) = \lambda_i(AA^\top)$ from the previous slide.
Therefore, $\sigma_i^2(A) = \lambda_i(A^\top A) = \lambda_i(A^2) = \lambda_i^2(A)$
$\Rightarrow \sigma_i(A) = |\lambda_i(A)|$ ■

Slide 19
Carnegie Mellon University

### Visual Description
This slide proves that for a symmetric matrix, the singular values are simply the absolute values of the eigenvalues. The proof shows that $A^2$ has eigenvalues $\lambda^2$, and since for symmetric $A$, $A^\top A = A^2$, the result follows from the previous lemma. An arrow points from the text "Using the $\sigma_i^2(A) = \lambda_i(AA^\top)$..." to the start of the final derivation.

---

## Page 20
### Content
**Matrix Norms**

Slide 20
Carnegie Mellon University

### Visual Description
This is a section header slide for "Matrix Norms" in large blue font.

---

## Page 21
### Content
**Matrix Norm Definition**

**Definition [Matrix Norm]:**
For all scalars $\alpha \in \mathbb{R}$ and matrices $A, B \in \mathbb{R}^{m \times n}$,
* $\|A\| \ge 0$ ("positive-valued")
* $\|A\| = 0 \iff A = 0_{m,n}$ ("definite")
* $\|\alpha A\| = |\alpha| \|A\|$ ("absolutely homogeneous")
* $\|A + B\| \le \|A\| + \|B\|$ ("sub-additive" or satisfying the "triangle inequality")

Slide 21
Carnegie Mellon University

### Visual Description
This slide lists the four axiomatic properties that define a matrix norm: non-negativity, definiteness, absolute homogeneity, and the triangle inequality. Each property is given its mathematical expression and a descriptive name in quotes.

---

## Page 22
### Content
**Matrix norms are Convex Functions**

**Theorem [Matrix Norms are convex functions]:**
For any matrices $A, B$, and all $\theta \in [0, 1]$,
$$\|\theta A + (1 - \theta)B\| \le \theta \|A\| + (1 - \theta) \|B\|.$$

**Proof:**
Using triangle equality and homogeneity properties of norms:
$$\|\theta A + (1 - \theta)B\| \le \|\theta A\| + \|(1 - \theta)B\| = \theta \|A\| + (1 - \theta) \|B\|.$$
Hence $\|\cdot\|$ is convex. ■

Slide 22
Carnegie Mellon University

### Visual Description
This slide states and proves that any matrix norm is a convex function. The proof is a one-line derivation using the triangle inequality and absolute homogeneity properties defined on the previous slide. The main theorem statement is highlighted in red.

---

## Page 23
### Content
**Matrix Norms Induced by Vector Norms**

Suppose a vector norm $\|\cdot\|_\alpha$ on $\mathbb{R}^n$ and a vector norm $\|\cdot\|_\beta$ on $\mathbb{R}^m$ are given.

**Definition [Induced norm, Operator norm]:**
$$\|A\|_{\alpha,\beta} \doteq \sup\{\|Ax\|_\beta : x \in \mathbb{R}^n \text{ with } \|x\|_\alpha = 1\}$$
$$= \sup \left\{ \frac{\|Ax\|_\beta}{\|x\|_\alpha} : x \in \mathbb{R}^n \text{ with } x \ne 0 \right\}.$$

**Definition [p-norm]:** Let $1 \le p \le \infty \quad A \in \mathbb{R}^{m \times n}$
$$\|A\|_p \doteq \sup_{x \ne 0} \frac{\|Ax\|_p}{\|x\|_p}$$

Slide 23
Carnegie Mellon University

### Visual Description
This slide defines induced matrix norms (also called operator norms) based on vector norms. It provides two equivalent supremum-based definitions. It then specifically defines the matrix $p$-norm as the operator norm induced by the vector $p$-norm.

---

## Page 24
### Content
**Matrix Norms Induced by Vector p-Norms**

**Definition [1-norm]:**
$$\|A\|_1 = \sup_{x \ne 0} \frac{\|Ax\|_1}{\|x\|_1} = \sup_{x \ne 0} \frac{\sum_{i=1}^m |\sum_{j=1}^n A_{ij}x_j|}{\sum_{j=1}^n |x_j|}$$

**Lemma [1-norm]:** Let $A \in \mathbb{R}^{m \times n}$
$$\|A\|_1 = \max_{1 \le j \le n} \underbrace{\sum_{i=1}^m |A_{ij}|}_{\text{sum of the } j^{th} \text{ column}}$$
[The maximum absolute column sum of the matrix]

Slide 24
Carnegie Mellon University

### Visual Description
This slide defines the matrix 1-norm and provides a practical way to calculate it. The lemma states that the matrix 1-norm is the maximum absolute column sum. A curly brace under the summation term in the lemma points to the text "sum of the $j^{th}$ column".

---

## Page 25
### Content
**Matrix Norms Induced by Vector p-Norms**

**Definition [Infinite-norm]:**
$$\|A\|_\infty = \sup_{x \ne 0} \frac{\|Ax\|_\infty}{\|x\|_\infty} = \sup_{x \ne 0} \frac{\max_{1 \le i \le m} |\sum_{j=1}^n A_{ij}x_j|}{\max_{1 \le j \le n} |x_j|}$$

**Lemma [Infinite-norm]:** Let $A \in \mathbb{R}^{m \times n}$
$$\|A\|_\infty = \max_{1 \le i \le m} \underbrace{\sum_{j=1}^n |A_{ij}|}_{\text{sum of the } i^{th} \text{ row}}$$
[The maximum absolute row sum of the matrix]

Slide 25
Carnegie Mellon University

### Visual Description
This slide defines the matrix $\infty$-norm and provides a practical way to calculate it. The lemma states that the matrix $\infty$-norm is the maximum absolute row sum. A curly brace under the summation term in the lemma points to the text "sum of the $i^{th}$ row".

---

## Page 26
### Content
**Matrix Norms Induced by Vector p-Norms**

**Definition [2-norm, spectral norm, operator norm]:**
$$\|A\|_2 = \sup_{x \ne 0} \frac{\|Ax\|_2}{\|x\|_2} = \sup_{x \ne 0} \frac{\sqrt{x^\top A^\top Ax}}{\sqrt{x^\top x}} = \sup_{x \ne 0} \sqrt{\frac{x^\top A^\top Ax}{x^\top x}}$$

**Lemma [2-norm, spectral norm, operator norm]:**
Let $A \in \mathbb{R}^{m \times n} \Rightarrow \|A\|_2 = \sqrt{\lambda_{\max}(A^\top A)} = \sigma_{\max}(A)$
where $\sigma_{\max}(A)$ represents the largest singular value of matrix $A$.

**Proof:** proof of $1^{st}$ equation on next slide, $2^{nd}$ equation already proved.

**Notation:** We often use $\|A\|$ and $\|A\|_{op}$ to denote $\|A\|_2$.

Slide 26
Carnegie Mellon University

### Visual Description
This slide defines the matrix 2-norm, also known as the spectral norm or operator norm. It provides the supremum definition and a lemma relating it to the largest eigenvalue of $A^\top A$ and the largest singular value of $A$. The key result is highlighted in red.

---

## Page 27
### Content
**Proof: 2-norm, spectral norm**

**Lemma [2-norm, spectral norm]:** $\|A\|_2 = \sqrt{\lambda_{\max}(A^\top A)}$

**Proof:** By definition, $\|A\|_2 = \sup_{x \ne 0} \sqrt{\frac{x^\top A^\top Ax}{x^\top x}}$.
First, we will prove that $\sup_{x \ne 0} \frac{x^\top A^\top Ax}{x^\top x}$ can only happen in the eigenvectors of $A^\top A$.
Let $f(x) = \frac{x^\top A^\top Ax}{x^\top x}$ We want to maximize this function.

**Part 1:**
We will prove that if $f'(x) = 0$, then $x$ is eigenvector of $A^\top A$.

Slide 27
Carnegie Mellon University

### Visual Description
This slide begins the proof for the matrix 2-norm lemma. It sets up the problem as maximizing the Rayleigh quotient $f(x) = \frac{x^\top A^\top Ax}{x^\top x}$ and states that the first part of the proof will show that critical points of this function are eigenvectors of $A^\top A$.

---

## Page 28
### Content
**Proof [Continued]**

$$\nabla \frac{h(x)}{g(x)} = \frac{h'(x)g(x) - g'(x)h(x)}{g^2(x)}$$
$$f'(x) = \nabla \frac{x^\top A^\top Ax}{x^\top x} = \nabla \frac{h(x)}{g(x)} = \frac{h'(x)g(x) - g'(x)h(x)}{g^2(x)}$$
$$= \frac{2(A^\top Ax)(x^\top x) - (2x)(x^\top A^\top Ax)}{g^2(x)}$$
This can be 0 only if $(A^\top Ax)(x^\top x) - (x)(x^\top A^\top Ax) = 0$
$$A^\top Ax = x \frac{(x^\top A^\top Ax)}{(x^\top x)}$$
$$A^\top Ax = x \lambda$$
$\Rightarrow x$ is indeed an eigenvector of $A^\top A$. ■

Slide 28
Carnegie Mellon University

### Visual Description
This slide continues the proof by using calculus. It applies the quotient rule for gradients to find where the derivative of the Rayleigh quotient is zero. The derivation shows that at such points, $A^\top Ax$ is a scalar multiple of $x$, confirming that $x$ is an eigenvector.

---

## Page 29
### Content
**Proof [Continued]**

**Part 2:**
We will prove that if $x^*$ is the max eigenvector of $A^\top A$ with eigenvalue $\lambda_{\max}$, then we have that $\sqrt{\frac{x^{*\top} A^\top Ax^*}{x^{*\top} x^*}} = \sqrt{\lambda_{\max}(A^\top A)}$

Since $A^\top Ax^* = \lambda_{\max}x^*$,
$$\sqrt{\frac{x^{*\top} A^\top Ax^*}{x^{*\top} x^*}} = \sqrt{\frac{x^{*\top} \lambda_{\max}x^*}{x^{*\top} x^*}} = \sqrt{\lambda_{\max}}$$
$\Rightarrow \|A\|_2 = \sqrt{\lambda_{\max}(A^\top A)}$ ■

Slide 29
Carnegie Mellon University

### Visual Description
This slide completes the proof. It shows that evaluating the Rayleigh quotient at the eigenvector corresponding to the maximum eigenvalue yields the square root of that maximum eigenvalue, which matches the definition of the matrix 2-norm.

---

## Page 30
### Content
**Important Properties**

$$\|A\|_{op} \doteq \|A\|_2 = \sup_{x \ne 0} \frac{\|Ax\|_2}{\|x\|_2}$$

**Corollary: [Cauchy-Schwarz]**
$$\frac{\|Ax\|_2}{\|x\|_2} \le \|A\|_2 \quad \forall x$$
And therefore,
$$\|Ax\|_2 \le \|A\|_2 \cdot \|x\|_2 \quad \forall x$$
[This is a generalization of $|\langle a, b \rangle| \le \|a\| \cdot \|b\|$]

Slide 30
Carnegie Mellon University

### Visual Description
This slide presents an important property of the operator norm: it acts as a bound for the norm of the matrix-vector product. This is presented as a generalization of the Cauchy-Schwarz inequality. The final inequality is highlighted in red.

---

## Page 31
### Content
**Important Properties**

$$\|A\|_{op} \doteq \|A\|_2 = \sup_{x \ne 0} \frac{\|Ax\|_2}{\|x\|_2}$$

**Lemma [Spectral radius]:**
$\rho(A) \le \|A\|_{op}$, where $\rho(A) = \max\{|\lambda_1|, \dots, |\lambda_n|\}$ [Spectral radius] and $\lambda_1, \dots, \lambda_n$ are the eigenvalues of $A$.

**Proof:**
Let $(\lambda, v)$ be an eigenvalue and eigenvector of $A$.
$\Rightarrow |\lambda| \cdot \|v\|_2 = \|Av\|_2 \le \|A\|_2 \cdot \|v\|_2$
Therefore, $|\lambda| \le \|A\|_2$ for all $\lambda$ eigenvalues.
$\Rightarrow \rho(A) \le \|A\|_2 = \|A\|_{op}$ ■

Slide 31
Carnegie Mellon University

### Visual Description
This slide proves that the spectral radius of a matrix is always less than or equal to its operator norm. The proof uses the definition of an eigenvalue/eigenvector pair and the property derived on the previous slide. The main lemma is highlighted in red.

---

## Page 32
### Content
**Important Properties**

$$\|A\|_{op} \doteq \|A\|_2 = \sup_{x \ne 0} \frac{\|Ax\|_2}{\|x\|_2}$$

**We proved in the previous slide:**
$\rho(A) \le \|A\|_{op}$, where $\rho(A) = \max\{|\lambda_1|, \dots, |\lambda_n|\}$ [Spectral radius]

**Lemma:** If $A$ is symmetric, then $\|A\|_{op} = \rho(A)$

**Proof:**
We already proved that $\|A\|_{op} = \sqrt{\lambda_{\max}(A^\top A)} = \sigma_{\max}(A)$
When $A$ is symmetric, then
$$\|A\|_{op} = \sqrt{\lambda_{\max}(A^\top A)} = \sqrt{\lambda_{\max}(A^2)} = \lambda_{\max}(A) = \rho(A)$$

Slide 32
Carnegie Mellon University

### Visual Description
This slide shows that for symmetric matrices, the operator norm is exactly equal to the spectral radius. The proof relies on the fact that for symmetric $A$, $A^\top A = A^2$, and the eigenvalues of $A^2$ are the squares of the eigenvalues of $A$. The main lemma is highlighted in red.

---

## Page 33
### Content
**Example where $\rho(A) < \|A\|_2$**

Consider the Jordan block: $A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$.
$p_A(\lambda) = \det(\lambda I_2 - A) = \det \begin{pmatrix} \lambda & -1 \\ 0 & \lambda \end{pmatrix} = \lambda^2$
char poly $= \lambda^2 \Rightarrow$ eig. values $= 0 \Rightarrow$ spectral radius: $\rho(A) = 0$.

We already know $\|A\|_2 = \sqrt{\lambda_{\max}(A^\top A)}$. $A^\top A = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$
$p_{A^\top A}(\lambda) = \det(\lambda I_2 - A^\top A) = \det \begin{pmatrix} \lambda & 0 \\ 0 & \lambda - 1 \end{pmatrix} = \lambda(\lambda - 1)$
Its eigenvalues are 0 and 1. Therefore $\|A\|_2 = \sqrt{1} = 1$.
Consequently, $\rho(A) = 0 < 1 = \|A\|_2$.

Slide 33
Carnegie Mellon University

### Visual Description
This slide provides a concrete example of a non-symmetric matrix where the spectral radius is strictly less than the matrix 2-norm. It uses a $2 \times 2$ Jordan block matrix, calculates its eigenvalues (both 0), and then calculates the eigenvalues of $A^\top A$ (0 and 1) to find the norm.

---

## Page 34
### Content
**Positive Semidefinite Matrix**

Let $A$ be a symmetric matrix.
From the Spectral Theorem, we already know that all of its eigenvalues are real.

**Definition [PSD matrix]**
If all of the eigenvalues of the symmetric matrix $A$ are nonnegative, $(\lambda_i \ge 0 \forall i)$, then we say that $A$ **is positive semi-definite (PSD)**.

**Notation**
$A$ is PSD $\iff A \succeq 0$
$A \succeq B \iff A - B \succeq 0 \iff A - B$ is PSD.

Slide 34
Carnegie Mellon University

### Visual Description
This slide defines Positive Semidefinite (PSD) matrices in terms of their eigenvalues. It also introduces the standard notation $\succeq$ used for PSD matrices and for the Loewner partial order between matrices. The notation definitions are highlighted in red.

---

## Page 35
### Content
**Positive Semidefinite Matrix**

**Lemma [PSD matrix]**
Let $A \in \mathbb{R}^{n \times n}$
Let $A$ be symmetric, i.e. $A = A^\top$
$$A \text{ is PSD } \iff x^\top Ax \ge 0 \forall x$$

Slide 35
Carnegie Mellon University

### Visual Description
This slide provides an alternative, equivalent definition of a PSD matrix: a symmetric matrix $A$ is PSD if and only if the quadratic form $x^\top Ax$ is non-negative for all vectors $x$. The main equivalence is highlighted in red.

---

## Page 36
### Content
**Important Properties**

**Lemma:** Let $A$ be a symmetric matrix, $\beta \ge 0$.
$$\|A\|_{op} \le \beta \iff -\beta I \preceq A \preceq \beta I.$$

**Proof:**
We already know if $A$ is symmetric, then $\|A\|_{op} = \rho(A)$.
It is enough to prove: $\rho(A) \le \beta \iff 0 \preceq \beta I + A$ and $0 \preceq \beta I - A$.
That is, $\rho(A) \le \beta \iff x^\top (\beta I - A)x \ge 0 \forall x$,
and $x^\top (\beta I + A)x \ge 0 \forall x$.

The right hand side together can be written as $\beta x^\top x \ge |x^\top Ax| \forall x$.
We will prove $\rho(A) \le \beta \iff \beta x^\top x \ge |x^\top Ax| \forall x$

Slide 36
Carnegie Mellon University

### Visual Description
This slide presents a lemma relating the operator norm of a symmetric matrix to a matrix inequality involving the identity matrix. The proof begins by translating the norm condition into conditions on the eigenvalues and then into quadratic form inequalities. The main lemma is highlighted in red.

---

## Page 37
### Content
**Important Properties**

We will prove $\rho(A) \le \beta \iff \beta x^\top x \ge |x^\top Ax| \forall x$

**Part 1:**
Assume $\rho(A) \le \beta$, $A$ is symmetric.
From Cauchy-Schwarz, $|x^\top Ax| \le \|x\|_2 \|Ax\|_2$
$$\le \|x\|_2 \cdot \|A\|_2 \cdot \|x\|_2$$
$$= \|x\|_2^2 \rho(A) \quad \text{[Since } \rho(A) = \|A\|_2 \text{ when } A \text{ is symmetric.]}$$
$$\le x^\top x \beta$$ ■

Slide 37
Carnegie Mellon University

### Visual Description
This slide contains Part 1 of the proof from the previous slide. It shows that if the spectral radius is bounded by $\beta$, then the absolute value of the quadratic form is bounded by $\beta x^\top x$. It uses the Cauchy-Schwarz inequality and the property that for symmetric matrices, the norm equals the spectral radius.

---

## Page 38
### Content
**Important Properties**

**Part 2:**
Assume $\beta x^\top x \ge |x^\top Ax| \forall x$. We need $\rho(A) \le \beta$.
Assume by contradiction, that there is an eigenvalue $\lambda$ s.t $|\lambda| > \beta$.
Let the corresponding eigenvector be $x^*$
$$\Rightarrow |x^{*\top} Ax^*| = |x^{*\top} \lambda x^*|$$
$$= |\lambda| x^{*\top} x^*$$
$$> x^\top x \beta \quad \text{This is a contradiction } \text{■}$$

Slide 38
Carnegie Mellon University

### Visual Description
This slide contains Part 2 of the proof, using a proof by contradiction. It shows that if the quadratic form is bounded by $\beta x^\top x$, then no eigenvalue can have an absolute value greater than $\beta$, thus the spectral radius must be bounded by $\beta$.

---

## Page 39
### Content
**Nuclear Norm, Trace Norm**

**Definition [nuclear norm, trace norm]:**
$$\|A\|_{Tr} = \text{trace} \left( \sqrt{A^\top A} \right)$$
Here if $B = U\Sigma U^\top$, then $\sqrt{B} \doteq U\Sigma^{1/2}U^\top$
[Indeed, $\sqrt{B}\sqrt{B} = (U\Sigma^{1/2}U^\top)(U\Sigma^{1/2}U^\top) = U\Sigma U^\top = B$]

**Lemma [nuclear norm, trace norm]:**
$$\|A\|_{Tr} = \sum_{i=1}^{\min\{m,n\}} \sigma_i(A)$$

Slide 39
Carnegie Mellon University

### Visual Description
This slide defines the nuclear norm (also called the trace norm). It provides a definition based on the trace of the square root of $A^\top A$ and a lemma stating it is equal to the sum of the singular values. The main definition and lemma are highlighted in red.

---

## Page 40
### Content
**"Entry-wise" norms:**
**Frobenius Norm, Hilbert–Schmidt norm**

**Definition [Frobenius norm, Hilbert–Schmidt norm]:**
$$\|A\|_F = \sqrt{\sum_i^m \sum_j^n |a_{ij}|^2}$$

**Lemma [Frobenius norm, Hilbert–Schmidt norm]:**
$$\|A\|_F = \sqrt{\text{trace}(A^\top A)} = \sqrt{\sum_{i=1}^{\min\{m,n\}} \sigma_i^2(A)}$$

Slide 40
Carnegie Mellon University

### Visual Description
This slide defines the Frobenius norm (also called the Hilbert-Schmidt norm). It gives the entry-wise definition and a lemma relating it to the trace of $A^\top A$ and the sum of squared singular values. The main definition and lemma are highlighted in red.

---

## Page 41
### Content
**Summary**

**[2-norm, spectral norm, operator norm]:**
Let $A \in \mathbb{R}^{m \times n} \Rightarrow \|A\|_2 = \sup_{x \ne 0} \frac{\|Ax\|_2}{\|x\|_2} = \sqrt{\lambda_{\max}(A^\top A)} = \sigma_{\max}(A)$
If $A \in \mathbb{R}^{n \times n}, A = A^\top \Rightarrow \|A\|_2 = \rho(A) = |\lambda_{\max}|(A) = \sigma_{\max}(A)$

**[nuclear norm, trace norm]:**
$$\|A\|_{Tr} = \text{trace} \left( \sqrt{A^\top A} \right) = \sum_{i=1}^{\min\{m,n\}} \sigma_i(A)$$

**[Frobenius norm, Hilbert–Schmidt norm]:**
$$\|A\|_F = \sqrt{\sum_i^m \sum_j^n |a_{ij}|^2} = \sqrt{\text{trace}(A^\top A)} = \sqrt{\sum_{i=1}^{\min\{m,n\}} \sigma_i^2(A)}$$

Slide 41
Carnegie Mellon University

### Visual Description
This slide provides a summary of the three main matrix norms discussed: the 2-norm (spectral norm), the nuclear norm (trace norm), and the Frobenius norm. It lists their definitions and key properties side-by-side for comparison.

---

## Page 42
### Content
**Monotone Norms**

**Definition [Monotone norm]:**
A matrix norm $\|\cdot\|$ is called "monotone" if
$$A \preceq B \Rightarrow \|A\| \le \|B\|$$

**Lemma [Monotone norms]:**
The spectral and Frobenius norms are monotone norms.

Slide 42
Carnegie Mellon University

### Visual Description
This slide defines "monotone" matrix norms in the context of the PSD partial order. It states that both the spectral (2-norm) and Frobenius norms possess this property. The definition is highlighted in red.

---

## Page 43
### Content
**Schatten norms**

**Definition [Schatten norm]:**
The Schatten $p$-norm of matrix $A$ is the $p$-norm of the vector of singular values of a matrix $A$.
$$\|A\|_{Sch_p} = \left( \sum_{i=1}^{\min\{m,n\}} \sigma_i^p(A) \right)^{1/p}$$

Slide 43
Carnegie Mellon University

### Visual Description
This slide introduces Schatten $p$-norms, which are defined as the vector $p$-norm applied to the singular values of the matrix. The mathematical formula is highlighted in red.

---

## Page 44
### Content
**Schatten norms**
$$\|A\|_{Sch_p} = \left( \sum_{i=1}^{\min\{m,n\}} \sigma_i^p(A) \right)^{1/p}$$

**Observations:**
* The case $p = \infty$ yields the spectral norm, which is the operator norm induced by the vector 2-norm:
$$\|A\|_{Sch_\infty} = \max_{1 \le i \le \min\{m,n\}} \sigma_i(A) = \|A\|_2$$
* The case $p = 2$ yields the Frobenius norm:
$$\|A\|_{Sch_2} = \left( \sum_{i=1}^{\min\{m,n\}} \sigma_i^2(A) \right)^{1/2} = \|A\|_F = \sqrt{\text{trace}(A^\top A)}$$
* The case $p = 1$ yields the nuclear norm (also known as the trace norm):
$$\|A\|_{Sch_1} = \sum_{i=1}^{\min\{m,n\}} \sigma_i(A) = \|A\|_{Tr} = \text{trace} \left( \sqrt{A^\top A} \right)$$

Slide 44
Carnegie Mellon University

### Visual Description
This slide shows how the previously discussed matrix norms are special cases of the Schatten $p$-norm. It explicitly links $p=\infty$ to the spectral norm, $p=2$ to the Frobenius norm, and $p=1$ to the nuclear norm.

---

## Page 45
### Content
**Thanks for your Attention ☺**

Slide 45
Carnegie Mellon University

### Visual Description
This is the final slide of the presentation. It contains the text "Thanks for your Attention" followed by a smiley face emoji, centered on the page in blue font. The university logo is in the bottom right.\n