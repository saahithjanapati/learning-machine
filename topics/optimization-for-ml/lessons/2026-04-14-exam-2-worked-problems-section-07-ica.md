# 7. ICA / FastICA Worked Problems

## Table of Contents

- [[#Problem 7.1]]
- [[#Problem 7.2]]
- [[#Problem 7.3]]
- [[#Problem 7.4]]
- [[#Problem 7.5]]
- [[#Problem 7.6]]
- [[#Problem 7.7 True / False]]

### Problem 7.1

Starting from

$$
\max_{\|w\|=1} E[(w^T z)^4]-3,
$$

derive the stationarity condition.

### Solution

Introduce the Lagrangian

$$
\mathcal{L}(w,\lambda)=E[(w^T z)^4]-3+\lambda(\|w\|^2-1).
$$

Differentiate with respect to $w$:

$$
\nabla_w E[(w^T z)^4]
=
E[4(w^T z)^3 z].
$$

Also,

$$
\nabla_w \lambda(\|w\|^2-1)=2\lambda w.
$$

Therefore the stationarity condition is

$$
4E[(w^T z)^3 z] + 2\lambda w = 0.
$$

### Problem 7.2

Explain why whitening is expressed as

$$
E[zz^T]=I
$$

rather than $E[z^T z]=I$.

### Solution

The covariance of a vector-valued random variable is a matrix. Whitening means the covariance becomes the identity:

$$
\operatorname{Cov}(z)=E[zz^T]=I.
$$

By contrast,

$$
E[z^T z]
$$

is only a scalar, namely the expected squared norm of the vector. It does not encode the coordinatewise covariance structure. So whitening must be written in matrix form as $E[zz^T]=I$.

### Problem 7.3

Explain why the unit-norm constraint

$$
\|w\|=1
$$

is necessary in the ICA kurtosis objective

$$
\max E[(w^T z)^4]-3.
$$

### Solution

Without a norm constraint, the objective can be changed just by rescaling $w$.

Take any scalar $a$. Then

$$
(aw)^T z = a(w^T z).
$$

So

$$
E[((aw)^T z)^4]
=
E[(a(w^T z))^4]
=
a^4 E[(w^T z)^4].
$$

That means the quartic term grows like $a^4$.

So if some direction $w$ gives a positive kurtosis objective, then by scaling $w$ larger and larger, the objective can be made arbitrarily large.

Therefore the problem is not well-posed without a normalization constraint.

The constraint

$$
\|w\|=1
$$

removes that trivial scaling freedom and forces the optimization to choose a direction, not just a magnitude.

### Problem 7.4

Assume the data are whitened, so

$$
E[zz^T]=I.
$$

Show that

$$
E[(w^T z)^2]=\|w\|^2.
$$

### Solution

Start with the scalar square:

$$
(w^T z)^2 = (w^T z)(w^T z).
$$

Rewrite it as a quadratic form:

$$
(w^T z)^2 = w^T zz^T w.
$$

Now take expectation:

$$
E[(w^T z)^2]
=
E[w^T zz^T w].
$$

Because $w$ is deterministic with respect to the expectation, pull it outside:

$$
E[(w^T z)^2]
=
w^T E[zz^T] w.
$$

Now use whitening:

$$
E[zz^T]=I.
$$

So

$$
E[(w^T z)^2]
=
w^T I w
=
w^T w
=
\|w\|^2.
$$

This is one reason the constraint

$$
\|w\|^2=1
$$

is so natural after whitening: it is exactly the unit-variance condition for the extracted scalar component $w^T z$.

### Problem 7.5

Starting from the stationarity condition

$$
4E[(w^T z)^3 z] + 2\lambda w = 0,
$$

show why one can rewrite it in the form

$$
E[(w^T z)^3 z] = c\, w
$$

for some scalar $c$.

### Solution

Start with

$$
4E[(w^T z)^3 z] + 2\lambda w = 0.
$$

Move the multiplier term to the other side:

$$
4E[(w^T z)^3 z] = -2\lambda w.
$$

Now divide by $4$:

$$
E[(w^T z)^3 z] = -\frac{\lambda}{2} w.
$$

So if we define

$$
c=-\frac{\lambda}{2},
$$

then

$$
E[(w^T z)^3 z] = c\, w.
$$

The meaning of this equation is important:

at a stationary point, the nonlinear moment vector

$$
E[(w^T z)^3 z]
$$

must be parallel to $w$.

That is exactly the structure that motivates a fixed-point style update.

### Problem 7.6

Explain why the normalization step

$$
w \leftarrow \tilde w / \|\tilde w\|
$$

appears in FastICA.

### Solution

The optimization problem itself has the constraint

$$
\|w\|=1.
$$

But the intermediate vector

$$
\tilde w \leftarrow E[(w^T z)^3 z] - 3w
$$

does not automatically satisfy that constraint.

So after computing the update direction, the method renormalizes:

$$
w \leftarrow \tilde w / \|\tilde w\|.
$$

This does two things:

- it puts the iterate back on the unit sphere
- it removes arbitrary scaling from the update

So the normalization step is not an extra trick. It is simply the algorithmic way of enforcing the same unit-norm constraint that appeared in the optimization problem.

### Problem 7.7 True / False

For each statement, answer true or false and give a one-line justification.

1. If $E[zz^T]=I$, then the coordinates of $z$ are independent.
2. PCA and ICA become the same method after whitening.
3. The constraint $\|w\|=1$ prevents trivial rescaling of the kurtosis objective.
4. The equation $E[(w^T z)^3 z]=c\,w$ says the moment vector must align with $w$ at a stationary point.
5. The scalar quantity $E[z^T z]$ is enough to express whitening.

### Solution

1. False.

Whitening removes second-order correlation, but it does not by itself imply statistical independence.

2. False.

PCA uses second-order structure, while ICA uses higher-order information such as kurtosis.

3. True.

Without the norm constraint, scaling $w$ changes the quartic objective by a factor of $a^4$.

4. True.

That equation says the nonlinear expectation vector is parallel to $w$.

5. False.

$E[z^T z]$ is only a scalar; whitening is the matrix statement

$$
E[zz^T]=I.
$$
