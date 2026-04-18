# 1. Stochastic Gradient Descent Worked Problems

## Table of Contents

- [[#Problem 1.1]]
- [[#Problem 1.2]]
- [[#Problem 1.3]]
- [[#Problem 1.4]]
- [[#Problem 1.5]]
- [[#Problem 1.6]]
- [[#Problem 1.7]]
- [[#Problem 1.8]]
- [[#Problem 1.9]]
- [[#Problem 1.10]]
- [[#Problem 1.11]]

### Problem 1.1

Let

$$
f(x)=\frac{1}{2}\mathbb{E}(X-x)^2,
$$

where $X$ is a scalar random variable with mean $\mu$. Define

$$
g(x;X)=x-X.
$$

Show that $g$ is an unbiased stochastic gradient and write the SGD update.

### Solution

Expand the objective:

$$
f(x)=\frac12 \mathbb{E}(X^2-2xX+x^2).
$$

Differentiate:

$$
\nabla f(x)=x-\mathbb{E}[X]=x-\mu.
$$

Now check unbiasedness:

$$
\mathbb{E}[g(x;X)\mid x]
=
\mathbb{E}[x-X\mid x]
=
x-\mathbb{E}[X]
=
x-\mu
=
\nabla f(x).
$$

So $g$ is unbiased.

The SGD update is

$$
x^{t+1}=x^t-\eta_t(x^t-X_t)
=(1-\eta_t)x^t+\eta_t X_t.
$$

If one chooses $\eta_t=1/(t+1)$, this becomes the running-average recursion.

### Problem 1.2

Explain mathematically why fixed-step SGD usually does not converge exactly, even on a strongly convex objective.

### Solution

A standard strongly-convex bound with fixed step size is

$$
\mathbb{E}\|x^k-x^*\|^2
\le
(1-\alpha \eta)^k\|x^0-x^*\|^2+\frac{\eta G^2}{\alpha}.
$$

The first term contracts to zero, but the second term does not. Therefore the iterates approach a neighborhood of the optimum whose radius is controlled by the step size and the gradient noise. This is the stochastic error floor. Exact convergence would require that residual term to vanish, which typically requires decreasing step sizes.

### Problem 1.3

Let

$$
f(x)=\frac{1}{n}\sum_{i=1}^n f_i(x),
$$

and let $\xi$ be uniform on $\{1,\dots,n\}$. Show that

$$
g(x;\xi)=\nabla f_\xi(x)
$$

is an unbiased stochastic gradient.

### Solution

Take expectation over the random index:

$$
\mathbb{E}_\xi[g(x;\xi)]
=
\mathbb{E}_\xi[\nabla f_\xi(x)]
=
\frac{1}{n}\sum_{i=1}^n \nabla f_i(x).
$$

But

$$
\nabla f(x)
=
\nabla \left(\frac{1}{n}\sum_{i=1}^n f_i(x)\right)
=
\frac{1}{n}\sum_{i=1}^n \nabla f_i(x).
$$

Therefore

$$
\mathbb{E}_\xi[g(x;\xi)] = \nabla f(x).
$$

So a single randomly chosen component gradient is an unbiased stochastic gradient. This is exactly the short derivation style that could plausibly appear as a small proof or short-answer question.

### Problem 1.4

Show that the recursion

$$
x^{t+1}=x^t-\frac{1}{t+1}(x^t-X_{t+1})
$$

produces the running average of the samples.

### Solution

Rewrite the update as

$$
x^{t+1}
=
\left(1-\frac{1}{t+1}\right)x^t+\frac{1}{t+1}X_{t+1}
=
\frac{t}{t+1}x^t+\frac{1}{t+1}X_{t+1}.
$$

Now check the first few iterates:

$$
x^1=X_1,
\qquad
x^2=\frac12(X_1+X_2),
\qquad
x^3=\frac13(X_1+X_2+X_3).
$$

The inductive step is

$$
x^{t+1}
=
\frac{t}{t+1}\left(\frac{1}{t}\sum_{i=1}^t X_i\right)+\frac{1}{t+1}X_{t+1}
=
\frac{1}{t+1}\sum_{i=1}^{t+1} X_i.
$$

So the SGD iterate is exactly the sample mean. This problem is exam-relevant because it is short, computational, and conceptually central to the lecture.

### Problem 1.5

In the convex nonsmooth SGD proof, suppose one arrives at

$$
\mathbb{E}[f(\bar x_k)]-f(x^*)
\le
\frac{R}{2\eta k}+\frac{G^2\eta}{2}.
$$

Choose $\eta$ to optimize the right-hand side.

### Solution

Define

$$
\phi(\eta)=\frac{R}{2\eta k}+\frac{G^2\eta}{2}.
$$

Differentiate:

$$
\phi'(\eta)=-\frac{R}{2k\eta^2}+\frac{G^2}{2}.
$$

Set $\phi'(\eta)=0$:

$$
-\frac{R}{2k\eta^2}+\frac{G^2}{2}=0
\quad \Longrightarrow \quad
G^2=\frac{R}{k\eta^2}.
$$

Hence

$$
\eta^2=\frac{R}{G^2k},
\qquad
\eta=\frac{\sqrt{R}}{G\sqrt{k}}.
$$

Substituting back gives

$$
\mathbb{E}[f(\bar x_k)]-f(x^*) \le \frac{G\sqrt{R}}{\sqrt{k}}.
$$

This is the kind of compact derivation that is realistic for an exam proof part: a few lines, but you need to know what is being optimized.

### Problem 1.6

State exactly what converges in the following three SGD settings:

1. convex nonsmooth SGD
2. strongly convex SGD with fixed step size
3. strongly convex SGD with $\eta_t=1/(\alpha(t+1))$

### Solution

1. In the convex nonsmooth case, the standard theorem controls averaged function value:

$$
\mathbb{E}[f(\bar x_k)]-f(x^*) = O(1/\sqrt{k}).
$$

2. In the strongly convex fixed-step case, the standard theorem controls squared distance to the optimizer:

$$
\mathbb{E}\|x^k-x^*\|^2
\le
(1-\alpha\eta)^k\|x^0-x^*\|^2+\frac{\eta G^2}{\alpha}.
$$

3. In the strongly convex decaying-step case, the theorem again controls averaged function value:

$$
\mathbb{E}[f(\bar x_k)]-f(x^*) = O((1+\log k)/k).
$$

This problem is intentionally exam-style. On Exam 1, several points were lost by stating only a rate and not the quantity that converges. SGD is exactly the kind of section where that mistake is easy to make.

### Problem 1.7

The HW3 programming problem used logistic regression:

$$
f(w)=\frac{1}{N}\sum_{i=1}^N \log(1+e^{-y_i\langle w,x_i\rangle}).
$$

Let

$$
f_i(w)=\log(1+e^{-y_i\langle w,x_i\rangle}).
$$

1. Compute $\nabla f_i(w)$.
2. If $B_t$ is a mini-batch of size $b$ sampled uniformly with replacement, define

$$
g(w;B_t)=\frac{1}{b}\sum_{j \in B_t} \nabla f_j(w).
$$

Show that $g(w;B_t)$ is an unbiased stochastic gradient.
3. What happens in the special case $b=N$ with the full dataset?

### Solution

Let

$$
a_i(w)=-y_i\langle w,x_i\rangle.
$$

Then

$$
f_i(w)=\log(1+e^{a_i(w)}).
$$

By the chain rule,

$$
\nabla f_i(w)
=
\frac{e^{a_i(w)}}{1+e^{a_i(w)}}\nabla a_i(w).
$$

Since

$$
\nabla a_i(w)=-y_i x_i,
$$

we get

$$
\nabla f_i(w)
=
-\frac{e^{-y_i\langle w,x_i\rangle}}{1+e^{-y_i\langle w,x_i\rangle}} y_i x_i
=
-\frac{y_i x_i}{1+e^{y_i\langle w,x_i\rangle}}.
$$

Now take expectation over the random mini-batch. Because the batch is formed by uniform sampling with replacement,

$$
\mathbb{E}[g(w;B_t)]
=
\frac{1}{b}\sum_{\ell=1}^b \mathbb{E}[\nabla f_{\xi_\ell}(w)]
=
\frac{1}{b}\sum_{\ell=1}^b \frac{1}{N}\sum_{i=1}^N \nabla f_i(w)
=
\frac{1}{N}\sum_{i=1}^N \nabla f_i(w)
=
\nabla f(w).
$$

Here is what is happening in slower motion.

The mini-batch

$$
B_t=(\xi_1,\dots,\xi_b)
$$

is a list of random indices, where each

$$
\xi_\ell
$$

is sampled uniformly from

$$
\{1,\dots,N\}
$$

with replacement.

So for each fixed position $\ell$ in the batch, the random vector

$$
\nabla f_{\xi_\ell}(w)
$$

takes the values

$$
\nabla f_1(w),\dots,\nabla f_N(w)
$$

each with probability

$$
\frac{1}{N}.
$$

That is why

$$
\mathbb{E}[\nabla f_{\xi_\ell}(w)]
=
\frac{1}{N}\sum_{i=1}^N \nabla f_i(w).
$$

Now use the fact that expectation is linear:

$$
\mathbb{E}\left[\frac{1}{b}\sum_{\ell=1}^b \nabla f_{\xi_\ell}(w)\right]
=
\frac{1}{b}\sum_{\ell=1}^b \mathbb{E}[\nabla f_{\xi_\ell}(w)].
$$

So:

- original version:
$$
\mathbb{E}[g(w;B_t)]
$$
- substitute the definition of the mini-batch gradient:
$$
\mathbb{E}\left[\frac{1}{b}\sum_{\ell=1}^b \nabla f_{\xi_\ell}(w)\right]
$$
- use linearity of expectation:
$$
\frac{1}{b}\sum_{\ell=1}^b \mathbb{E}[\nabla f_{\xi_\ell}(w)]
$$
- use that each sampled index is uniform:
$$
\frac{1}{b}\sum_{\ell=1}^b \frac{1}{N}\sum_{i=1}^N \nabla f_i(w)
$$

That last substitution comes from applying the definition of expectation to one fixed random index $\xi_\ell$:

$$
\mathbb{E}[\nabla f_{\xi_\ell}(w)]
=
\sum_{i=1}^N \mathbb{P}(\xi_\ell=i)\,\nabla f_i(w)
=
\sum_{i=1}^N \frac{1}{N}\nabla f_i(w)
=
\frac{1}{N}\sum_{i=1}^N \nabla f_i(w).
$$

The inner quantity

$$
\frac{1}{N}\sum_{i=1}^N \nabla f_i(w)
$$

does not depend on $\ell$, so the same term is being added

$$
b
$$

times and then divided by

$$
b.
$$

That is why the outer average disappears:

$$
\frac{1}{b}\sum_{\ell=1}^b \frac{1}{N}\sum_{i=1}^N \nabla f_i(w)
=
\frac{1}{N}\sum_{i=1}^N \nabla f_i(w).
$$

And by definition of the full objective,

$$
f(w)=\frac{1}{N}\sum_{i=1}^N f_i(w),
$$

so

$$
\nabla f(w)=\frac{1}{N}\sum_{i=1}^N \nabla f_i(w).
$$

So the mini-batch gradient is unbiased.

In the special case $b=N$ with the full dataset,

$$
g(w;B_t)=\nabla f(w),
$$

so SGD reduces to full-batch gradient descent. This is exactly the batch-size endpoint that showed up in the HW3 implementation question.

### Problem 1.8

Suppose the strongly convex SGD proof gives the recursion

$$
a_{t+1}\le (1-\alpha \eta)a_t+\eta^2 G^2,
$$

where

$$
a_t=\mathbb{E}\|x^t-x^*\|^2.
$$

Unroll this recursion and show that

$$
a_k
\le
(1-\alpha \eta)^k a_0+\frac{\eta G^2}{\alpha}.
$$

### Solution

The goal is to understand what happens if we keep substituting the recursion into itself.

Start from the one-step recursion at time $k-1$:

$$
a_k
\le
(1-\alpha \eta)a_{k-1}+\eta^2 G^2.
$$

To make the pattern easier to see, set

$$
\rho = 1-\alpha \eta.
$$

Then the recursion becomes

$$
a_k \le \rho a_{k-1}+\eta^2 G^2.
$$

So each step says:

- shrink the previous error by a factor $\rho$
- then add the new noise term $\eta^2 G^2$

Now apply the same recursion one step earlier:

$$
a_{k-1}\le \rho a_{k-2}+\eta^2 G^2.
$$

Substitute this into the formula for $a_k$.

- original version:
$$
a_k \le \rho a_{k-1}+\eta^2 G^2
$$
- new version for $a_{k-1}$:
$$
a_{k-1}\le \rho a_{k-2}+\eta^2 G^2
$$
- substitution being made:
$$
a_k \le \rho(\rho a_{k-2}+\eta^2 G^2)+\eta^2 G^2
$$

Now expand:

$$
a_k
\le
\rho^2 a_{k-2}+\rho \eta^2 G^2+\eta^2 G^2
=
\rho^2 a_{k-2}+\eta^2 G^2(1+\rho).
$$

Do it one more time so the pattern is visible.

Using

$$
a_{k-2}\le \rho a_{k-3}+\eta^2 G^2,
$$

we get

$$
a_k
\le
\rho^2(\rho a_{k-3}+\eta^2 G^2)+\eta^2 G^2(1+\rho).
$$

Expanding gives

$$
a_k
\le
\rho^3 a_{k-3}+\eta^2 G^2(\rho^2+\rho+1).
$$

Now the pattern is:

$$
a_k
\le
\rho^m a_{k-m}+\eta^2 G^2(1+\rho+\rho^2+\cdots+\rho^{m-1}).
$$

If we continue all the way back to the initial time, then $m=k$, so

$$
a_k
\le
\rho^k a_0+\eta^2 G^2(1+\rho+\rho^2+\cdots+\rho^{k-1}).
$$

That finite sum is a geometric series:

$$
1+\rho+\rho^2+\cdots+\rho^{k-1}
=
\frac{1-\rho^k}{1-\rho}.
$$

Now substitute back

$$
\rho=1-\alpha \eta.
$$

Then

$$
1-\rho = 1-(1-\alpha \eta)=\alpha \eta.
$$

So

$$
1+\rho+\rho^2+\cdots+\rho^{k-1}
=
\frac{1-(1-\alpha \eta)^k}{\alpha \eta}.
$$

Plug this into the bound for $a_k$:

$$
a_k
\le
(1-\alpha \eta)^k a_0
+
\eta^2 G^2 \cdot \frac{1-(1-\alpha \eta)^k}{\alpha \eta}.
$$

Now simplify the coefficient:

$$
\eta^2 G^2 \cdot \frac{1}{\alpha \eta}
=
\frac{\eta G^2}{\alpha}.
$$

So

$$
a_k
\le
(1-\alpha \eta)^k a_0
+
\frac{\eta G^2}{\alpha}\bigl(1-(1-\alpha \eta)^k\bigr).
$$

This is already a valid bound. The final simplification is just

$$
1-(1-\alpha \eta)^k \le 1,
$$

which gives the cleaner but slightly looser form

$$
a_k
\le
(1-\alpha \eta)^k a_0+\frac{\eta G^2}{\alpha}.
$$

Interpretation:

- the term
$$
(1-\alpha \eta)^k a_0
$$
is the part of the error coming from the initialization, and it decays geometrically
- the term
$$
\frac{\eta G^2}{\alpha}
$$
is the persistent stochastic floor coming from gradient noise

So fixed-step strongly convex SGD contracts toward the optimum, but only down to a nonzero neighborhood.

### Problem 1.9

In the convex nonsmooth SGD proof, suppose

$$
x^{t+1}=x^t-\eta g(x^t;\xi_t),
$$

and assume

$$
\mathbb{E}[g(x^t;\xi_t)\mid x^t]=g_t \in \partial f(x^t),
\qquad
\mathbb{E}\|g(x^t;\xi_t)\|^2 \mid x^t \le G^2.
$$

Show that

$$
\mathbb{E}\bigl[\|x^{t+1}-x^*\|^2 \mid x^t\bigr]
\le
\|x^t-x^*\|^2-2\eta\bigl(f(x^t)-f(x^*)\bigr)+\eta^2 G^2.
$$

### Solution

Start from the update:

$$
x^{t+1}-x^*=(x^t-x^*)-\eta g(x^t;\xi_t).
$$

Expand the squared norm:

$$
\|x^{t+1}-x^*\|^2
=
\|x^t-x^*\|^2
-2\eta g(x^t;\xi_t)^T(x^t-x^*)
+\eta^2 \|g(x^t;\xi_t)\|^2.
$$

Now take conditional expectation given $x^t$:

$$
\mathbb{E}\bigl[\|x^{t+1}-x^*\|^2 \mid x^t\bigr]
=
\|x^t-x^*\|^2
-2\eta \mathbb{E}\bigl[g(x^t;\xi_t)^T(x^t-x^*) \mid x^t\bigr]
+\eta^2 \mathbb{E}\bigl[\|g(x^t;\xi_t)\|^2 \mid x^t\bigr].
$$

Since $x^t-x^*$ is fixed after conditioning on $x^t$, we may pull it out:

$$
\mathbb{E}\bigl[g(x^t;\xi_t)^T(x^t-x^*) \mid x^t\bigr]
=
\mathbb{E}[g(x^t;\xi_t)\mid x^t]^T(x^t-x^*)
=
g_t^T(x^t-x^*).
$$

Also,

$$
\mathbb{E}\bigl[\|g(x^t;\xi_t)\|^2 \mid x^t\bigr]\le G^2.
$$

So

$$
\mathbb{E}\bigl[\|x^{t+1}-x^*\|^2 \mid x^t\bigr]
\le
\|x^t-x^*\|^2
-2\eta g_t^T(x^t-x^*)
+\eta^2 G^2.
$$

Now use the subgradient inequality at $x^t$ with $x^*$:

$$
f(x^*)\ge f(x^t)+g_t^T(x^*-x^t).
$$

Rearranging gives

$$
g_t^T(x^t-x^*)\ge f(x^t)-f(x^*).
$$

Substitute this lower bound into the previous display:

$$
\mathbb{E}\bigl[\|x^{t+1}-x^*\|^2 \mid x^t\bigr]
\le
\|x^t-x^*\|^2
-2\eta\bigl(f(x^t)-f(x^*)\bigr)
+\eta^2 G^2.
$$

This is one of the key one-step inequalities in the lecture proof, and it is exactly the kind of short derivation that could appear in an exam proof part.

### Problem 1.10

In the convex SGD proof, justify the step

$$
\mathbb{E}\bigl[g(x^t;\xi_t)^T(x^t-x^*) \mid x^t\bigr]
=
\mathbb{E}[g(x^t;\xi_t)\mid x^t]^T(x^t-x^*).
$$

Why is this valid?

### Solution

Once we condition on $x^t$, the vector

$$
x^t-x^*
$$

is no longer random. The only remaining randomness is in $\xi_t$, and therefore in

$$
g(x^t;\xi_t).
$$

That means we should think of the expression as:

- one random vector:
$$
g(x^t;\xi_t)
$$
- dotted with one fixed vector:
$$
x^t-x^*.
$$

So this is just the rule that fixed vectors can be pulled out of conditional expectation:

$$
\mathbb{E}[a(\xi)^T b \mid x^t]
=
\mathbb{E}[a(\xi)\mid x^t]^T b
$$

whenever $b$ is fixed given $x^t$.

Here:

- original version:
$$
\mathbb{E}\bigl[g(x^t;\xi_t)^T(x^t-x^*) \mid x^t\bigr]
$$
- fixed term:
$$
x^t-x^*
$$
- new version:
$$
\mathbb{E}[g(x^t;\xi_t)\mid x^t]^T(x^t-x^*)
$$

Here is the same step written even more mechanically.

Let

$$
b = x^t-x^*.
$$

Since we are conditioning on $x^t$, this vector $b$ is fixed. Write its coordinates as

$$
b=(b_1,\dots,b_d).
$$

Also write

$$
g(x^t;\xi_t)=(g_1,\dots,g_d).
$$

Then the dot product is

$$
g(x^t;\xi_t)^T(x^t-x^*)
=
\sum_{j=1}^d g_j b_j.
$$

Now take conditional expectation:

$$
\mathbb{E}\bigl[g(x^t;\xi_t)^T(x^t-x^*) \mid x^t\bigr]
=
\mathbb{E}\left[\sum_{j=1}^d g_j b_j \,\middle|\, x^t\right].
$$

Because each

$$
b_j
$$

is fixed once $x^t$ is known, you can pull it outside:

$$
\mathbb{E}\left[\sum_{j=1}^d g_j b_j \,\middle|\, x^t\right]
=
\sum_{j=1}^d b_j\,\mathbb{E}[g_j\mid x^t].
$$

Now rewrite that sum back as a dot product:

$$
\sum_{j=1}^d b_j\,\mathbb{E}[g_j\mid x^t]
=
\mathbb{E}[g(x^t;\xi_t)\mid x^t]^T(x^t-x^*).
$$

So the step is valid for exactly the same reason that, for an ordinary scalar random variable $Z$ and constant $c$,

$$
\mathbb{E}[cZ]=c\,\mathbb{E}[Z].
$$

The only difference is that here the “constant” is a whole vector, and it appears inside an inner product.

The most important mental picture is:

- before conditioning, both the next stochastic gradient and anything depending on it are random
- after conditioning on $x^t$, the current iterate is frozen
- so $x^t-x^*$ acts like a constant vector
- only the stochastic gradient term is still random

This is a small step, but it is one of the most common places to get stuck in SGD proofs.

### Problem 1.11

HW3 asked you to compare batch sizes in mini-batch SGD. Let

$$
g_b(w)=\frac{1}{b}\sum_{j \in B_t} \nabla f_j(w),
$$

where $B_t$ is a mini-batch of size $b$ sampled uniformly with replacement.

1. Is $g_b(w)$ unbiased for every batch size $b$?
2. What happens when $b=N$?
3. Why does increasing $b$ not automatically guarantee the fastest wall-clock convergence?

### Solution

For every batch size $b$, the mini-batch gradient is still unbiased:

$$
\mathbb{E}[g_b(w)]
=
\nabla f(w).
$$

So changing $b$ does not change the expected gradient direction.

When

$$
b=N,
$$

there are two slightly different interpretations:

1. If you literally use the entire dataset once, then you recover the full gradient:

$$
g_N(w)=\nabla f(w).
$$

So in that interpretation the method becomes full-batch gradient descent.

2. But in HW3, the mini-batch was sampled **with replacement**. In that case, even when

$$
b=N,
$$

the sampled batch can contain repeats and can omit some examples. So on a single iteration

$$
g_N(w)
$$

is not necessarily equal to the exact full gradient. It is still an unbiased estimator of the full gradient, just with much lower variance than a tiny batch.

However, increasing $b$ does not automatically make optimization fastest in wall-clock time because two effects compete:

1. larger batches reduce gradient variance, which can make the iterates more stable
2. larger batches cost more computation per iteration

That is exactly why stochastic methods are attractive in empirical risk minimization: they often make less progress per iteration in theory, but much cheaper iterations can still lead to faster practical optimization.
