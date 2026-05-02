# lecture-notes-07-proofs of representer and mercer theorems

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/lecture-notes-07-proofs of representer and mercer theorems.pdf`
Duplicate equivalents: `lecture-notes-07-proofs of representer and mercer theorems.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 3

## Page 1
### Content
**10-715 Advanced Introduction to Machine Learning**  
**Fall 2019**  
**Lecture 6: September 16, 2019**  
**Lecturer:** Nihar B. Shah  
**Scribes:** Danlei Zhu, Artidoro Pagnoni

**Note:** *LaTeX template courtesy of UC Berkeley EECS dept.*  
**Disclaimer:** *These notes have not been subjected to the usual scrutiny reserved for formal publications. They may be distributed outside this class only with the permission of the Instructor.*

### 6.1 Representer Theorem and its proof

**Theorem 6.1** Let $\psi : \mathcal{X} \to \mathcal{F}$ where $\mathcal{F}$ is Hilbert space. Consider $f : \mathbb{R}^n \to \mathbb{R}$ and nondecreasing function $R : \mathbb{R}_{\ge 0} \to \mathbb{R}$. Consider the following optimization
$$\min_{w \in \mathcal{F}} f(\langle w, \psi(x_1) \rangle, \dots, \langle w, \psi(x_n) \rangle) + R(\|w\|) \tag{6.1}$$
Then there exists optimal solution of the form
$$w^* = \sum_{i=1}^n \alpha_i \psi(x_i) \tag{6.2}$$
for some $\alpha_1, \dots, \alpha_n \in \mathbb{R}$.

**Proof:** Since $\mathcal{F}$ is Hilbert space and optimal solution lies in $\mathcal{F}$, let $w_1 =$ an optimal solution then,
$$w_1 = \sum_{i=1}^n \alpha_i \psi(x_i) + u$$
for some $u$ such that $\langle u, \psi(x_i) \rangle = 0 \ \forall i \in [n]$. Set $w_0 = \sum_{i=1}^n \alpha_i \psi(x_i)$, want to show $w_0$ is optimal.

Since $\langle w_0, u \rangle = 0$, it implies
$$\|w_1\|^2 = \|w_0\|^2 + \|u\|^2$$
$$\|w_0\| \le \|w_1\|$$
$$R(\|w_0\|) \le R(\|w_1\|)$$

Also $\forall i \in [n]$
$$\begin{aligned} \langle w_0, \psi(x_i) \rangle &= \langle w_1 - u, \psi(x_i) \rangle \\ &= \langle w_1, \psi(x_i) \rangle - \langle u, \psi(x_i) \rangle \\ &= \langle w_1, \psi(x_i) \rangle \end{aligned}$$

Hence $f(\langle w_1, \psi(x_1) \rangle, \dots, \langle w_1, \psi(x_n) \rangle) = f(\langle w_0, \psi(x_1) \rangle, \dots, \langle w_0, \psi(x_n) \rangle)$

Thus $w_0$ is also an optimal. ■

6-1

### Visual Description
Text-only slide.

---

## Page 2
### Content
6-2 Lecture 6: September 16, 2019

### 6.2 Proof of Mercer’s Theorem

The theorem is stated in the previous lecture. Here is the statement of the theorem to help follow the proof.

**Theorem 6.2** *Mercer’s: A symmetric function $K : \mathcal{X} \times \mathcal{X} \longrightarrow \mathbb{R}$ is a kernel if and only if, for every integer $m \ge 1$ and every $x_1, \dots, x_m \in \mathcal{X}$, the “gram matrix” $G \in \mathbb{R}^{m \times m}$ defined as $G_{i,j} = K(x_i, x_j)$ is positive semi-definite.*

**Proof:** We will split the proof in two parts, one for each direction of the equivalence.

**Part 1:** $K$ is a kernel $\implies G$ is positive semi-definite.
Since $K$ implements inner product in some Hilbert space $\mathcal{F}$ with some mapping $\phi$. We know that $G$ is PSD if and only if $\alpha^T G \alpha \ge 0, \forall \alpha \in \mathbb{R}^m$. Hence we check for all $\alpha \in \mathbb{R}^m$
$$\begin{aligned} \alpha^T G \alpha &= \sum_{i,j=1}^m \alpha_i \alpha_j G_{i,j} \\ &= \sum_{i,j=1}^m \alpha_i \alpha_j \langle \phi(x_i), \phi(x_j) \rangle \\ &= \left\langle \sum_{i=1}^m \alpha_i \phi(x_i), \sum_{j=1}^m \alpha_j \phi(x_j) \right\rangle \\ &= \left\langle \sum_{i=1}^m \alpha_i \phi(x_i), \sum_{i=1}^m \alpha_i \phi(x_i) \right\rangle \\ &\ge 0 \end{aligned}$$

**Part 2:** $G$ is positive semi-definite $\implies K$ is a kernel.
Consider any $m \ge 1$ and any $x_1, \dots, x_m \in \mathcal{X}$. Let $\mathcal{F}' = \{f : \mathcal{X} \longrightarrow \mathbb{R}\}$ and define the mapping $\psi : \mathcal{X} \longrightarrow \mathcal{F}'$ which takes any $x \in \mathcal{X}$ to the function $K(\cdot, x)$.

Define a vector space in $\mathcal{F}'$ as $\mathcal{F} = \{ \sum_{i=1}^m \alpha_i K(\cdot, x_i) \mid m \in \mathbb{Z}_{\ge 1}, x_1, \dots, x_m \in \mathcal{X}, \alpha \in \mathbb{R}^m \}$

It’s not hard to show that this is a vector space (recall a vector space is a set closed under finite addition and scalar multiplication). But we need to show that there is an inner product.

Define inner product as:
$$\left\langle \sum_{i=1}^m \alpha_i K(\cdot, x_i), \sum_{i=1}^m \alpha'_i K(\cdot, x'_i) \right\rangle = \sum_{i=1}^m \sum_{j=1}^{m'} \alpha_i \alpha'_j K(x_i, x'_j)$$

Now we prove that this is an inner product:
*   **Symmetry:** trivial from symmetry of $K$.
*   **Scalar factor and linearity.**
*   $\langle v, v \rangle \ge 0$ and it is 0 if and only if $v = 0$. This comes down to proving three things:
    1. $\langle v, v \rangle \ge 0$.
       The entries of the "gram matrix" are $G_{ij} = K(x_i, x_j)$. Substituting in the formula for the inner

### Visual Description
Text-only slide.

---

## Page 3
### Content
Lecture 6: September 16, 2019 6-3

product of a vector with itself:
$$\langle v, v \rangle = \left\langle \sum_{i=1}^m \alpha_i K(\cdot, x_i), \sum_{i=1}^m \alpha_i K(\cdot, x_i) \right\rangle = \sum_{i=1}^m \sum_{j=1}^m \alpha_i \alpha_j K(x_i, x_j) = \alpha^T G \alpha \ge 0$$
Where the last step is coming from the assumption of Part 2 that $G$ is positive semi-definite.

2. $v = 0 \implies \langle v, v \rangle = 0$.
   If $v$ is the zero function, then evaluating it at any point and multiplying still gives zero.

3. $\langle v, v \rangle = 0 \implies v = 0$.
   Consider any $x \in \mathcal{X}$ and any $\sum_{i=1}^m \alpha_i K(\cdot, x_i) \in \mathcal{F}$.
   $$\begin{aligned} 0 \le \left| \sum_{i=1}^m \alpha_i K(x, x_i) \right|^2 &= \left| \left\langle K(\cdot, x), \sum_{i=1}^m \alpha_i K(\cdot, x_i) \right\rangle \right|^2 \\ &\le \langle K(\cdot, x), K(\cdot, x) \rangle \left\langle \sum_{i=1}^m \alpha_i K(\cdot, x_i), \sum_{i=1}^m \alpha_i K(\cdot, x_i) \right\rangle \\ &= K(x, x) \left\langle \sum_{i=1}^m \alpha_i K(\cdot, x_i), \sum_{i=1}^m \alpha_i K(\cdot, x_i) \right\rangle \end{aligned}$$
   Where in the first line we are using the definition of inner product, and in the second line we use Cauchy Schwartz. Now let’s focus on the second term in the last line of the equation which is $\langle v, v \rangle$. If it is 0, this means that
   $$\sum_{i=1}^m \alpha_i K(x, x_i) = 0$$
   ■

### Visual Description
Text-only slide.
