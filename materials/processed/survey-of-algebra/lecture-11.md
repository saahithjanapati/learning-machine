# lecture-11

Source: `materials/archive/survey-of-algebra/local-pdfs/lecture-11.pdf`
Duplicate equivalents: `lecture-11.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 4

## Page 1
### Content
# Lecture 11: Continuous-time Markov chain
February 22, 2024

For us, the state space $S$ could be finite or countably infinite.
The state of the chain at time $t \ge 0$ is $X_t$, a random variable that takes value in $S$.
The distribution at time $t$ is given by the probability mass function, $p_{X_t}(k) = P(X_t = k)$ for each $k \in S$.
**Irreducible** means one can go from any one state to any other state in some finite time with positive probability.

**Example:** The Poisson process describes, says, the number customers that has arrived at a store.
- Assume that the rate of incoming customer is $\lambda$, a constant (i.e. for each interval of length $s$ the average number of customer arriving in this interval is $\lambda s$).
- Assume that the number of customers for disjoint time intervals are independent random variables. And no two customers arrive at an exact time.
- Let $X_t$ be the number of customers that has visited at the store within the time interval $[0, t]$. Then $(X_t)_{t \ge 0}$ **is a continuous time-homogeneous Markov chain** and the state spaces is $S = \{0, 1, 2, \dots \}$.

**Transition probability matrix:**
$$ \mathbf{P}_t = (p_t(x, y))_{x,y \in S} $$
where $p_t(x, y) = P(X_t = y | X_0 = x)$ is the probability that $X_t = y$ when the chain starts at $X_0 = x$.
Note that if $S$ is finite then $\mathbf{P}_t$ is indeed a finite square matrix, otherwise we think of it as an infinite matrix, or a function on $S \times S$.
Assume time-homogeneous and Markov properties. So, for any $s \ge 0$
$$ P(X_{t+s} = y | X_s = x) = P(X_t = y | X_0 = x) $$
and for any $u_1 > u_2 > \dots \ge 0$
$$ P(X_{u_1} = x_1 | X_{u_2} = x_2, X_{u_3} = x_3, \dots) = P(X_{u_1} = x_1 | X_{u_2} = x_2) $$

### Visual Description
The slide contains introductory text about continuous-time Markov chains, including definitions and an example of a Poisson process. A black-bordered box at the bottom highlights the definition and properties of the transition probability matrix.

---
## Page 2
### Content
**Basic property 1:** for $s, t \ge 0$
$$ \mathbf{P}_{t+s} = \mathbf{P}_t \mathbf{P}_s $$

**Basic property 2:** It turns out that the transition matrix $\mathbf{P}_t$ for a continuous time-homogeneous MC will satisfy an equation of the form
$$ \frac{d}{dt} \mathbf{P}_t = \mathbf{P}_t \mathbf{A} $$
for some matrix $\mathbf{A}$ indexed by $(x, y) \in S \times S$.
The matrix $\mathbf{A}$ is independent of $t$ and is called the **infinitesimal generator** for the MC.

**Poisson process revisit:** It is well known that for each $X_t$ has the Poisson distribution. Furthermore,
$$ \frac{d}{dt} \mathbf{P}_t = \mathbf{P}_t \mathbf{A} $$
where $\frac{d}{dt}$ is differentiation with respect to $t$, applied to all entries of $\mathbf{P}_t$, while $\mathbf{A}$ is the constant matrix
$$ \mathbf{A} = \begin{pmatrix} -\lambda & \lambda & 0 & \dots \\ 0 & -\lambda & \lambda & \dots \\ 0 & 0 & -\lambda & \dots \\ \vdots & \vdots & \vdots & \ddots \end{pmatrix} $$
and $\mathbf{P}_t \mathbf{A}$ is matrix multiplication.
To see this, we want to show
$$ \lim_{s \to 0} \frac{1}{s} (\mathbf{P}_{t+s} - \mathbf{P}_t) = \mathbf{P}_t \mathbf{A} $$
Now, LHS is
$$ \lim_{s \to 0} \frac{1}{s} \mathbf{P}_t (\mathbf{P}_s - \mathbf{I}) $$
so it suffices to show that
$$ \lim_{s \to 0} \frac{1}{s} (\mathbf{P}_s - \mathbf{I}) = \mathbf{A} $$
Let $s > 0$. For each $x \in S$,
$$ p_s(x, x) = P(X_s = x | X_0 = x) $$
$$ = Probability(\text{no customer arriving in } (0, s] | X_0 = x) $$
$$ = Probability(\text{no customer arriving in } (0, s]) $$

### Visual Description
The slide presents two basic properties of continuous-time Markov chains, each enclosed in a black-bordered box. Below these, it revisits the Poisson process to illustrate the infinitesimal generator matrix $\mathbf{A}$ and begins a mathematical derivation for the derivative of the transition matrix.

---
## Page 3
### Content
$$ = e^{-\lambda s} $$
and
$$ \lim_{s \to 0} \frac{1}{s} (p_s(x, x) - 1) = \lim_{s \to 0} \frac{1}{s} (e^{-\lambda s} - 1) = -\lambda $$
Similarly, for $k \ge 1$
$$ p_s(x, x + k) = Probability(k \text{ customer arriving in } (0, s]) $$
$$ = e^{-\lambda s} \frac{(\lambda s)^k}{k!} $$
$$ \lim_{s \to 0} \frac{1}{s} (p_s(x, x + k) - 0) = \begin{cases} \lambda, & k = 1 \\ 0, & k \ge 2 \end{cases} $$
Thus $\lim_{s \to 0} \frac{1}{s} (\mathbf{P}_s - \mathbf{I}) = \mathbf{A}$ and so this proves
$$ \frac{d}{dt} \mathbf{P}_t = \mathbf{P}_t \mathbf{A} $$
Among many properties, one key property for $\mathbf{A}$ is that the sum of entries along each row of $\mathbf{A}$ is equal to 0. Another property is that the diagonal entries of $\mathbf{A}$ are $\le 0$, while other entries are $\ge 0$. These properties are true in general, not just for Poisson processes.

**Solving the differential equations/evolution equation for MC:**
The general solution of the equation $\frac{d}{dt} \mathbf{Q}(t) = \mathbf{Q}(t) \mathbf{A}$ has the form
$$ \mathbf{Q}(t) = \mathbf{C} e^{t\mathbf{A}} $$
where matrix exponential (of a square matrix) is defined by
$$ e^{\mathbf{M}} = \mathbf{I} + \mathbf{M} + \frac{\mathbf{M}^2}{2!} + \dots $$
Note that for diagonal matrices $D$, the matrix $e^D$ is also diagonal and obtained by simply exponentiating the diagonal entries of $D$. If $\mathbf{M}$ is diagonalizable $\mathbf{M} = \mathbf{P} \mathbf{D} \mathbf{P}^{-1}$ then $e^{\mathbf{M}} = \mathbf{P} e^{\mathbf{D}} \mathbf{P}^{-1}$.
For us we actually have $\mathbf{C} = \mathbf{I}$, simply because $P(X_0 = x | X_0 = x) = 1$ and $P(X_0 = y | X_0 = x) = 0$ if $y \neq x$. Thus

**The transition matrix for continuous time-homogeneous MC has the form**
$$ \mathbf{P}_t = e^{t\mathbf{A}} $$

### Visual Description
This slide continues the derivation from the previous page, showing how the infinitesimal generator $\mathbf{A}$ relates to the Poisson process. It then introduces the matrix exponential as the solution to the differential equation for the transition matrix. The final result, $\mathbf{P}_t = e^{t\mathbf{A}}$, is highlighted in a black-bordered box.

---
## Page 4
### Content
**Example:**
Consider a two state continuous MC. The states are 0 and 1 and assume that
$A = \begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix}$. Then we can diagonalize $A = QDQ^{-1}$ where
$Q = \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix}, D = \begin{pmatrix} 0 & 0 \\ 0 & -3 \end{pmatrix}, Q^{-1} = \begin{pmatrix} 2/3 & 1/3 \\ 1/3 & -1/3 \end{pmatrix}$

Then
$$ \mathbf{P}_t = e^{t\mathbf{A}} = \mathbf{I} + (t\mathbf{A}) + \frac{(t\mathbf{A})^2}{2!} + \dots = $$
$$ = \mathbf{I} + \mathbf{Q}(t\mathbf{D})\mathbf{Q}^{-1} + \mathbf{Q}\frac{(t\mathbf{D})^2}{2!}\mathbf{Q}^{-1} + \dots = $$
$$ = \mathbf{Q}(\mathbf{I} + t\mathbf{D} + \frac{(t\mathbf{D})^2}{2!} + \dots)\mathbf{Q}^{-1} = \mathbf{Q}e^{t\mathbf{D}}\mathbf{Q}^{-1} = $$
$$ = \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 0 & e^{-3t} \end{pmatrix} \begin{pmatrix} 2/3 & 1/3 \\ 1/3 & -1/3 \end{pmatrix} $$
Sending $t \to \infty$
$$ \lim_{t \to \infty} \mathbf{P}_t = \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} 2/3 & 1/3 \\ 1/3 & -1/3 \end{pmatrix} = \begin{pmatrix} 2/3 & 1/3 \\ 2/3 & 1/3 \end{pmatrix} $$
Which implies the existence of a stationary distribution. Given any initial distribution for $X_0$, which can be written as a vector $V_0$ of the probability masses (indexed by $S$) we can see that the distribution for $X_t$
$$ V_t = V_0 \mathbf{P}_t $$
$$ \lim_{t \to \infty} V_t = V_0 (\lim_{t \to \infty} \mathbf{P}_t) = V_0 \begin{pmatrix} 2/3 & 1/3 \\ 2/3 & 1/3 \end{pmatrix} = \begin{pmatrix} 2/3 & 1/3 \end{pmatrix} $$
since the entries of the vector $V_0$ add up to 1.

**Generating a discrete MC from continuous MC.**
We can take $X_0, X_1, \dots X_n$ from the continuous MC $(X_t)$. Then the transition matrix for this chain is $\mathbf{P} = e^{\mathbf{A}}$. Indeed, the transition matrix from $X_n$ to $X_{n+1}$ is the same as the transition matrix from $X_0$ to $X_1$, thanks to time-homogeneity. Which is exactly $\mathbf{P}_t = e^{\mathbf{A}}$, as claimed.
Note: generally speaking not all stochastic matrices $P$ will have the form $e^{\mathbf{A}}$ where $\mathbf{A}$ has the above mentioned properties.
If the continuous time MC has a limiting distribution then the discrete time MC also have a limiting distribution. Thus one may ask what conditions should we impose on $A$ that would guarantee existence of the limiting distribution. So maybe translate condition on $P = e^{\mathbf{A}}$ to condition on $A$?

### Visual Description
The entire content of this slide is contained within a large black-bordered box. It provides a detailed numerical example of a two-state continuous Markov chain, showing diagonalization and the limit as $t$ approaches infinity to find the stationary distribution. It concludes with a discussion on generating discrete Markov chains from continuous ones.

---
