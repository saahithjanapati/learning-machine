# 5. Semidefinite Programming Worked Problems

## Table of Contents

- [[#Problem 5.1]]
- [[#Problem 5.2]]
- [[#Problem 5.3]]
- [[#Problem 5.4]]
- [[#Problem 5.5]]
- [[#Problem 5.6]]

### Problem 5.1

Show that

$$
X=
\begin{pmatrix}
2 & 1 \\
1 & 2
\end{pmatrix}
$$

is PSD.

### Solution

This matrix is symmetric. For a $2\times 2$ symmetric matrix, positive definiteness follows if the leading principal minors are positive:

$$
2>0,
\qquad
\det(X)=4-1=3>0.
$$

Hence $X \succ 0$, so in particular $X \succeq 0$.

Equivalently, one can compute

$$
v^T X v
=
2v_1^2+2v_2^2+2v_1v_2
=
(v_1+v_2)^2+v_1^2+v_2^2 \ge 0.
$$

### Problem 5.2

Prove weak duality for the standard SDP primal-dual pair.

### Solution

Let $X$ be primal-feasible and $(y,S)$ dual-feasible. Then

$$
C \bullet X - y^T b
=
C \bullet X - \sum_i y_i b_i.
$$

Since $X$ is primal-feasible,

$$
b_i = A_i \bullet X,
$$

so

$$
C \bullet X - y^T b
=
C \bullet X - \sum_i y_i(A_i \bullet X)
=
\left(C-\sum_i y_iA_i\right)\bullet X.
$$

By dual feasibility,

$$
S=C-\sum_i y_iA_i,
$$

hence

$$
C \bullet X - y^T b = S \bullet X.
$$

Now $S \succeq 0$ and $X \succeq 0$, so

$$
S \bullet X \ge 0.
$$

Therefore

$$
C \bullet X - y^T b \ge 0.
$$

This is weak duality.

### Problem 5.3

Suppose $X$ is primal-feasible and $(y,S)$ is dual-feasible for some SDP, and you are told that

$$
X=
\begin{pmatrix}
1 & 0 \\
0 & 2
\end{pmatrix},
\qquad
S=
\begin{pmatrix}
3 & 1 \\
1 & 4
\end{pmatrix}.
$$

Compute the duality gap

$$
C \bullet X - y^T b.
$$

### Solution

Because $X$ and $(y,S)$ are feasible, we can use the SDP gap identity:

$$
C \bullet X - y^T b = S \bullet X.
$$

So we do not need to know $C$, $A_i$, or $b$ separately. We only need the matrix inner product of $S$ and $X$.

Since both matrices are symmetric,

$$
S \bullet X = \operatorname{Tr}(SX).
$$

First multiply:

$$
SX=
\begin{pmatrix}
3 & 1 \\
1 & 4
\end{pmatrix}
\begin{pmatrix}
1 & 0 \\
0 & 2
\end{pmatrix}
=
\begin{pmatrix}
3 & 2 \\
1 & 8
\end{pmatrix}.
$$

Now take the trace:

$$
\operatorname{Tr}(SX)=3+8=11.
$$

Therefore

$$
C \bullet X - y^T b = 11.
$$

This is a nice concrete reminder of the general fact:

$$
\text{primal objective} - \text{dual objective} = S \bullet X \ge 0.
$$

### Problem 5.4

Suppose $X \succeq 0$ and one of its diagonal entries is zero:

$$
X_{ii}=0.
$$

Show that the entire $i$th row and column must be zero.

### Solution

We will show that every entry $X_{ij}$ must be zero.

Because $X \succeq 0$, its quadratic form is nonnegative for every vector $v$:

$$
v^T X v \ge 0.
$$

Now fix some index $j$, and consider the vector

$$
v=e_i+t e_j,
$$

where $t \in \mathbb{R}$ and $e_i,e_j$ are standard basis vectors.

Since $X$ is PSD,

$$
(e_i+t e_j)^T X (e_i+t e_j)\ge 0
\qquad \text{for all } t.
$$

Expand this:

$$
e_i^T X e_i
+ 2t\, e_i^T X e_j
+ t^2 e_j^T X e_j
\ge 0.
$$

Now rewrite each term in matrix-entry notation:

$$
X_{ii} + 2t X_{ij} + t^2 X_{jj} \ge 0.
$$

We are told that $X_{ii}=0$, so this becomes

$$
2t X_{ij} + t^2 X_{jj} \ge 0
\qquad \text{for all } t.
$$

If $X_{ij} \ne 0$, then by choosing $t$ very small with the opposite sign of $X_{ij}$, the linear term

$$
2tX_{ij}
$$

would be negative and would dominate the quadratic term

$$
t^2 X_{jj}
$$

for sufficiently small $|t|$.

That would make the whole expression negative, contradicting PSD.

So we must have

$$
X_{ij}=0
\qquad \text{for every } j.
$$

That means the entire $i$th row is zero. Since $X$ is symmetric, the $i$th column is zero as well.

### Problem 5.5

For what values of $t$ is the matrix

$$
M=
\begin{pmatrix}
2 & 1 \\
1 & t
\end{pmatrix}
$$

PSD?

Solve this using the Schur-complement idea.

### Solution

Write the matrix in block form:

$$
M=
\begin{pmatrix}
A & B \\
B^T & D
\end{pmatrix}

=
\begin{pmatrix}
2 & 1 \\
1 & t
\end{pmatrix},
$$

so here

$$
A=2,
\qquad
B=1,
\qquad
D=t.
$$

Because $A=2>0$, the Schur complement test says

$$
M \succeq 0
\quad \Longleftrightarrow \quad
A>0
\text{ and }
D-B^T A^{-1} B \ge 0.
$$

Compute the Schur complement:

$$
D-B^T A^{-1} B
=
t-1 \cdot \frac12 \cdot 1
=
t-\frac12.
$$

So the PSD condition is

$$
t-\frac12 \ge 0.
$$

Therefore

$$
M \succeq 0
\quad \Longleftrightarrow \quad
t \ge \frac12.
$$

This agrees with the $2 \times 2$ principal-minor test:

$$
2>0,
\qquad
\det(M)=2t-1 \ge 0.
$$

### Problem 5.6

Let

$$
p(x)=r_4 x^4+r_3 x^3+r_2 x^2+r_1 x+r_0.
$$

Show how to convert the question

$$
\text{“Is } p(x) \text{ SOS?”}
$$

into an SDP feasibility problem using a Gram matrix.

### Solution

Because $p$ has degree $4$, we use the monomial vector

$$
[x]_2=
\begin{pmatrix}
1 \\
x \\
x^2
\end{pmatrix}.
$$

We look for a symmetric matrix

$$
Q=
\begin{pmatrix}
q_{11} & q_{12} & q_{13} \\
q_{12} & q_{22} & q_{23} \\
q_{13} & q_{23} & q_{33}
\end{pmatrix}
\succeq 0
$$

such that

$$
p(x)=[x]_2^T Q [x]_2.
$$

Now expand the quadratic form:

$$
[x]_2^T Q [x]_2
=
q_{11}
+ 2q_{12}x
+ (2q_{13}+q_{22})x^2
+ 2q_{23}x^3
+ q_{33}x^4.
$$

Match coefficients with

$$
r_4 x^4+r_3 x^3+r_2 x^2+r_1 x+r_0.
$$

That gives the linear constraints

$$
q_{11}=r_0,
$$

$$
2q_{12}=r_1,
$$

$$
2q_{13}+q_{22}=r_2,
$$

$$
2q_{23}=r_3,
$$

$$
q_{33}=r_4.
$$

So the SOS question becomes:

find a symmetric matrix $Q$ such that

$$
Q \succeq 0
$$

and the entries of $Q$ satisfy those linear equations.

That is exactly an SDP feasibility problem:

- unknown: the matrix entries of $Q$
- linear constraints: the coefficient-matching equations
- cone constraint: $Q \succeq 0$

This is the core HW4 modeling pattern.
