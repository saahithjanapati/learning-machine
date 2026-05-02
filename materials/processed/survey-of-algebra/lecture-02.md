# lecture-02

Source: `materials/archive/survey-of-algebra/local-pdfs/lecture-02.pdf`
Duplicate equivalents: `lecture-02.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 3

## Page 1
### Content
# Lecture 2: Finite Markov chains

January 28, 2024

Consider discrete-time stochastic process $X_0, X_1, \dots$, which models the change in time of a random system.

Finiteness here referes to the fact that each $X_k$ is a discrete random variable, taking values in a finite set $S$, called the states of the system.

We may enumerate $S$ as $\{1, 2, \dots, N\}$ without loss of generality.

(One may also consider continuous-time stochastic processes $(X_t)$ where each $X_t$ is a discrete random variables. This will be discussed later in the semester.)

$X_n = $ state of the system at time $t = n$, and this is a random variable.

So at $t = 0$ we have $X_0$ and the initial probability distribution of the system is
$$\phi(k) = P(X_0 = k).$$

**Question: what is the distribution of $X_n$. Namely what is $P(X_n = k)$ for a given $n$ and $k$?**

**Transition probability:** $P(X_{n+1} = k_{n+1} | X_n = k_n, \dots, X_0 = k_0)$

We are interested in stochastic processes with time-homogeneity property and Markov property.

**Markov property means:** the transition probability mentioned above only depends on $k_{n+1}$ and $k_n$.
$$P(X_{n+1} = k_{n+1} | X_n = k_n, \dots, X_0 = k_0) = P(X_{n+1} = k_{n+1} | X_n = k_n).$$

**Time homogeneity means: the transition property does not depend on $n$. In other words**
$$P(X_{n+1} = k | X_n = \ell) = P(X_1 = k | X_0 = \ell)$$
for any $k, \ell, n$.

Thus, for time-homogeneous Markov SP there is a function $p : S \times S \to [0, 1]$ such that
$$P(X_{n+1} = k_{n+1} | X_n = k_n, \dots, X_0 = k_0) = p(k_n, k_{n+1})$$

Using the multiplication rule we have
$$P(X_n = k_n, \dots, X_0 = k_0) =$$

1

### Visual Description
Text-only slide.

---

## Page 2
### Content
$$= P(X_0 = k_0) \dots P(X_n = k_n | X_{n-1} = k_{n-1}, \dots, X_0 = k_0)$$
$$= \phi(i_0) p(i_0, i_1) \dots p(i_{n-1}, i_n)$$

**Transition matrix: This is an $N \times N$ matrix given by**
$$\mathbf{P} = (p(i, j))_{i,j \in S}$$

Recall that $N$ is the number of possible states of the given random system.

This is a stochastic matrix, namely the entries are nonnegative and the sum of the entries along each row is 1.
$$p(i, 1) + \dots + p(i, N) = \sum_{j=1}^N P(X_n = j | X_{n-1} = i)$$
$$= \frac{\sum_{j=1}^N P(X_n = j, X_{n-1} = i)}{P(X_{n-1} = i)} = \frac{P(X_{n-1} = i)}{P(X_{n-1} = i)} = 1$$

Note that $\lambda = 1$ is always an eigenvalue for such a matrix.

**Example 1:** Two-state Markov chain. System has two states, say 0 means phone is free and 1 means the phone is busy. Assume
$$p(0, 1) = p$$
(probability that the free phone becomes busy at the next time is $p$).
$$p(1, 0) = q$$
(probability that the busy phone becomes free at the next time is $q$).
$$\mathbf{P} = \begin{pmatrix} 1 - p & p \\ q & 1 - q \end{pmatrix}$$
(Note that this is a time-homogeneous Markov chain based on our assumption).

**Example 2:** Random walk with reflecting boundary
Random walk along $0, 1, \dots, N$ and $p(i, i + 1) = p, p(i, i - 1) = 1 - p$ for all $0 < i < N$. And $p(0, 1) = 1 = p(N, N - 1)$ (reflecting boundary).
$$\mathbf{P} = \begin{pmatrix} 0 & 1 & 0 & \dots & 0 & 0 & 0 \\ 1 - p & 0 & p & \dots & 0 & 0 & 0 \\ 0 & 1 - p & 0 & \dots & 0 & 0 & 0 \\ \vdots & \vdots & \vdots & \ddots & \vdots & \vdots & \vdots \\ 0 & 0 & 0 & \dots & 1 - p & 0 & p \\ 0 & 0 & 0 & \dots & 0 & 1 & 0 \end{pmatrix}$$

2

### Visual Description
The slide contains mathematical derivations and two boxed examples. Example 1 includes a $2 \times 2$ transition matrix. Example 2 includes a large $(N+1) \times (N+1)$ tridiagonal-like transition matrix representing a random walk with reflecting boundaries.

---

## Page 3
### Content
**Example 3:** Random walk on a graph. A graph is $(V, E)$ where $V$ is a finite collection of vertices and $E \subset V \times V$ is a collection of edges. Often assume no vertices is connected to itself and any two vertices has at most one edge.
$v_1 \sim v_2$ if connected.
States of the systems are vertices of the graph.
Transition from one vertice to another vertice given by
$$p(v_i, v_j) = \frac{1}{d(v_i)}$$
if $v_i \sim v_j$, otherwise 0. This means each vertice moves to an adjacent vertice randomly (all adjacent vertices have the same likelihood of being the next vertice).

**Long time behaviour:**
The distribution of $X_n$ can be written as a vector in $\mathbb{R}^N$
$$V_n = (P(X_n = 1), \dots, P(X_n = N))$$
Then $V_n = V_{n-1} \mathbf{P}$. Indeed by Bayes' formula
$$P(X_n = k) = \sum_j P(X_n = k | X_{n-1} = j) P(X_{n-1} = j) = \sum_j p(j, k) P(X_{n-1} = j)$$
as required. In particular,
$$V_1 = V_0 \mathbf{P},$$
$$V_2 = V_1 \mathbf{P} = V_0 \mathbf{P}^2,$$
$$V_n = V_{n-1} \mathbf{P} = \dots = V_0 \mathbf{P}^n$$
We want to understand the large $n$ behaviour of the distribution of $X_n$ (written using $V_n$.).

3

### Visual Description
Text-only slide. The first section is enclosed in a box and describes a random walk on a graph. The second section discusses the long-time behavior of Markov chains using vector-matrix notation.

---
