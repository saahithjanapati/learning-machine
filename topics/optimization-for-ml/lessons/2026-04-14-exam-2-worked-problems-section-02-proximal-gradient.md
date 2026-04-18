# 2. Proximal Gradient Worked Problems

## Table of Contents

- [[#Problem 2.1]]
- [[#Problem 2.2]]
- [[#Problem 2.3]]
- [[#Problem 2.4]]
- [[#Problem 2.5]]
- [[#Problem 2.6]]
- [[#Problem 2.7]]

### Problem 2.1

Let

$$
g(x)=\frac12(x-3)^2,
\qquad
h(x)=\lambda |x|.
$$

Write one proximal-gradient step from $x_t$ with step size $\eta$.

### Solution

First compute the gradient of the smooth part:

$$
\nabla g(x)=x-3.
$$

The gradient step is

$$
y_{t+1}=x_t-\eta(x_t-3)=(1-\eta)x_t+3\eta.
$$

Now apply the proximal operator of the $\ell_1$ term:

$$
x_{t+1}
=
\operatorname{prox}_{\eta \lambda |\cdot|}(y_{t+1})
=
\operatorname{sign}(y_{t+1})\max(|y_{t+1}|-\eta\lambda,0).
$$

Therefore

$$
x_{t+1}
=
\operatorname{sign}((1-\eta)x_t+3\eta)\max(|(1-\eta)x_t+3\eta|-\eta\lambda,0).
$$

This is exactly the soft-thresholding form.

### Problem 2.2

Let $h(x)=|x|$. Compute

$$
\operatorname{prox}_{\eta h}(v).
$$

### Solution

We must solve

$$
\min_z \frac{1}{2\eta}(z-v)^2+|z|.
$$

Consider cases.

If $z>0$, then $|z|=z$, so

$$
\frac{d}{dz}\left(\frac{1}{2\eta}(z-v)^2+z\right)
=
\frac{1}{\eta}(z-v)+1.
$$

Setting this to zero gives

$$
z=v-\eta.
$$

But this candidate came from the case assumption $z>0$. So after solving for the critical point, we must check that it really lies in the region we assumed:

- original case assumption:
$$
z>0
$$
- candidate from setting derivative to zero:
$$
z=v-\eta
$$
- substitution being made:
$$
v-\eta>0
$$

which is equivalent to

$$
v>\eta.
$$

So $z=v-\eta$ is valid only in the regime $v>\eta$.

If $z<0$, then $|z|=-z$, so

$$
\frac{d}{dz}\left(\frac{1}{2\eta}(z-v)^2-z\right)
=
\frac{1}{\eta}(z-v)-1,
$$

hence

$$
z=v+\eta,
$$

and again we must check that this agrees with the case assumption $z<0$:

$$
v+\eta<0
\iff
v<-\eta.
$$

So $z=v+\eta$ is valid only if $v<-\eta$.

It remains to explain where the middle case comes from.

We split the problem into three cases:

1. $z>0$
2. $z<0$
3. $z=0$

The first two cases gave candidate minimizers:

- from $z>0$: $z=v-\eta$, valid only if $v>\eta$
- from $z<0$: $z=v+\eta$, valid only if $v<-\eta$

So if neither of those validity conditions holds, the minimizer cannot lie in the positive or negative branch. That leaves the middle point $z=0$.

Formally, we check the slope on each side of $0$.

For $z>0$, the objective is

$$
\phi(z)=\frac{1}{2\eta}(z-v)^2+z,
$$

so

$$
\phi'(z)=\frac{1}{\eta}(z-v)+1.
$$

At the right side of $0$,

$$
\phi'(0^+)=1-\frac{v}{\eta}.
$$

This is nonnegative exactly when

$$
v\le \eta.
$$

For $z<0$, the objective is

$$
\phi(z)=\frac{1}{2\eta}(z-v)^2-z,
$$

so

$$
\phi'(z)=\frac{1}{\eta}(z-v)-1.
$$

At the left side of $0$,

$$
\phi'(0^-)= -\frac{v}{\eta}-1.
$$

This is nonpositive exactly when

$$
v\ge -\eta.
$$

So if

$$
-\eta \le v \le \eta,
$$

then the function is decreasing as we approach $0$ from the left and increasing as we move right from $0$. That means the minimum occurs at

$$
z=0.
$$

Equivalently, the middle case is

$$
|v|\le \eta.
$$

So

$$
\operatorname{prox}_{\eta |\cdot|}(v)
=
\operatorname{sign}(v)\max(|v|-\eta,0).
$$

### Problem 2.3

Let

$$
C=[0,\infty),
\qquad
h(x)=\mathbb{I}_C(x),
\qquad
g(x)=\frac12(x+1)^2.
$$

1. Compute $\operatorname{prox}_{\eta,h}(v)$.
2. Write one proximal-gradient step from $x_t$.
3. Explain why this is exactly projected gradient descent.

### Solution

By definition,

$$
\operatorname{prox}_{\eta,h}(v)
=
\arg\min_z \frac{1}{2\eta}(z-v)^2+\mathbb{I}_C(z).
$$

Since $\mathbb{I}_C(z)=\infty$ outside $C$, this is equivalent to

$$
\arg\min_{z \ge 0} \frac{1}{2\eta}(z-v)^2.
$$

So the indicator is enforcing feasibility in a very hard way:

- if $z \in C$, it contributes $0$
- if $z \notin C$, it contributes $\infty$

That means the prox problem is really asking:

$$
\text{among all feasible } z \in C,\text{ which one is closest to } v?
$$

So the prox is just Euclidean projection onto $[0,\infty)$:

$$
\operatorname{prox}_{\eta,h}(v)=\max(v,0).
$$

Now compute the gradient of the smooth part:

$$
\nabla g(x)=x+1.
$$

The raw gradient step is

$$
y_{t+1}=x_t-\eta(x_t+1).
$$

Applying the prox gives

$$
x_{t+1}
=
\operatorname{prox}_{\eta,h}(y_{t+1})
=
\max(x_t-\eta(x_t+1),0).
$$

Equivalently, writing the projection operator as $\Pi_C$,

$$
x_{t+1}
=
\Pi_C\bigl(x_t-\eta \nabla g(x_t)\bigr)
=
\Pi_C\bigl((1-\eta)x_t-\eta\bigr).
$$

This is exactly projected gradient descent because:

1. take the usual gradient step on $g$
2. project the result back into the feasible set $C$

So when $h=\mathbb{I}_C$, proximal gradient descent reduces to projected gradient descent. This is the main bridge between the earlier projected-method material and the later prox lectures.

### Problem 2.4

Show that if

$$
x=\operatorname{prox}_{\eta,h}(x-\eta \nabla g(x)),
$$

then

$$
0 \in \nabla g(x)+\partial h(x).
$$

### Solution

Let

$$
v=x-\eta \nabla g(x).
$$

The proximal optimality condition says that if

$$
u=\operatorname{prox}_{\eta,h}(v),
$$

then

$$
0 \in \frac{1}{\eta}(u-v)+\partial h(u).
$$

In this problem, the fixed-point assumption says

$$
u=x,
\qquad
v=x-\eta \nabla g(x).
$$

Substitute these into the prox optimality condition:

$$
0 \in \frac{1}{\eta}\bigl(x-(x-\eta \nabla g(x))\bigr)+\partial h(x).
$$

Simplify the first term:

$$
\frac{1}{\eta}\bigl(x-(x-\eta \nabla g(x))\bigr)
=
\frac{1}{\eta}\bigl(\eta \nabla g(x)\bigr)
=
\nabla g(x).
$$

So

$$
0 \in \nabla g(x)+\partial h(x).
$$

This is why fixed points of proximal gradient correspond to stationary points of the composite problem.

### Problem 2.5

HW3 asked you to prove a strong-convexity version of the proximal-gradient descent lemma. Suppose you already know that for

$$
x^+=x-\eta G_\eta(x),
$$

the following bound holds:

$$
f(x^+)
\le
f(x^*)+G_\eta(x)^T(x-x^*)-\frac{\eta}{2}\|G_\eta(x)\|^2-\frac{\alpha}{2}\|x-x^*\|^2.
$$

Use this to show

$$
\|x^+-x^*\|^2 \le (1-\alpha \eta)\|x-x^*\|^2.
$$

Then specialize to $\eta=1/\beta$ and $\kappa=\beta/\alpha$.

### Solution

Since $x^*$ is optimal, we know

$$
f(x^*)\le f(x^+).
$$

So the given inequality implies

$$
0
\le
G_\eta(x)^T(x-x^*)-\frac{\eta}{2}\|G_\eta(x)\|^2-\frac{\alpha}{2}\|x-x^*\|^2.
$$

Multiply by $2\eta$:

$$
0
\le
2\eta G_\eta(x)^T(x-x^*)
-\eta^2\|G_\eta(x)\|^2
-\alpha \eta \|x-x^*\|^2.
$$

Rearrange:

$$
2\eta G_\eta(x)^T(x-x^*)
\ge
\eta^2\|G_\eta(x)\|^2+\alpha \eta \|x-x^*\|^2.
$$

Now expand the next-iterate distance:

$$
\|x^+-x^*\|^2
=
\|x-\eta G_\eta(x)-x^*\|^2.
$$

Using $\|a-b\|^2=\|a\|^2-2a^Tb+\|b\|^2$ with

$$
a=x-x^*,
\qquad
b=\eta G_\eta(x),
$$

gives

$$
\|x^+-x^*\|^2
=
\|x-x^*\|^2
-2\eta G_\eta(x)^T(x-x^*)
+\eta^2\|G_\eta(x)\|^2.
$$

Now use the lower bound we just derived for the middle term:

$$
-2\eta G_\eta(x)^T(x-x^*)
+\eta^2\|G_\eta(x)\|^2
\le
-\alpha \eta \|x-x^*\|^2.
$$

Substituting into the distance expansion yields

$$
\|x^+-x^*\|^2
\le
\|x-x^*\|^2-\alpha \eta \|x-x^*\|^2
=
(1-\alpha \eta)\|x-x^*\|^2.
$$

Finally, with

$$
\eta=\frac{1}{\beta},
\qquad
\kappa=\frac{\beta}{\alpha},
$$

we have

$$
1-\alpha \eta
=
1-\frac{\alpha}{\beta}
=
1-\frac{1}{\kappa}.
$$

So after iterating the one-step bound,

$$
\|x^k-x^*\|^2
\le
\left(1-\frac{1}{\kappa}\right)^k \|x^0-x^*\|^2.
$$

This is the strong-convexity linear-rate result that HW3 was pointing you toward.

### Problem 2.6

Let

$$
g(x)=\frac12(x+1)^2,
\qquad
h(x)=\mathbb{I}_{[0,\infty)}(x),
\qquad
\eta=\frac12.
$$

1. Write one proximal-gradient step explicitly.
2. Compute the gradient mapping $G_\eta(x)$.
3. Find the fixed points of the iteration.

### Solution

First compute the gradient:

$$
\nabla g(x)=x+1.
$$

The raw gradient step is

$$
v=x-\eta \nabla g(x)
=
x-\frac12(x+1)
=
\frac{x-1}{2}.
$$

Since $h$ is the indicator of $[0,\infty)$, the prox is projection onto that set:

$$
\operatorname{prox}_{\eta,h}(v)=\max(v,0).
$$

So the proximal-gradient update is

$$
x^+
=
\max\left(\frac{x-1}{2},0\right).
$$

Now compute the gradient mapping:

$$
G_\eta(x)
=
\frac{1}{\eta}(x-x^+)
=
2\left(x-\max\left(\frac{x-1}{2},0\right)\right).
$$

This is piecewise:

If

$$
x \le 1,
$$

then

$$
x^+=0,
\qquad
G_\eta(x)=2x.
$$

If

$$
x>1,
$$

then

$$
x^+=\frac{x-1}{2},
\qquad
G_\eta(x)=2\left(x-\frac{x-1}{2}\right)=x+1.
$$

To find fixed points, solve

$$
x=\max\left(\frac{x-1}{2},0\right).
$$

If $x \le 1$, the right-hand side is $0$, so

$$
x=0.
$$

If $x>1$, then

$$
x=\frac{x-1}{2}
\iff
2x=x-1
\iff
x=-1,
$$

which contradicts $x>1$.

So the only fixed point is

$$
x=0.
$$

That matches the stationarity condition for the constrained problem.

### Problem 2.7

Quiz 3 asked for the convergence rate of proximal gradient descent under the standard convex assumptions. State the theorem carefully:

1. assumptions
2. step size
3. what quantity is controlled
4. the exact bound

### Solution

The standard assumptions are:

- $g$ is convex and $\beta$-smooth
- $h$ is convex
- $f(x)=g(x)+h(x)$

Use the step size

$$
\eta=\frac{1}{\beta}.
$$

The quantity controlled is the **objective suboptimality**:

$$
f(x^k)-f(x^*),
$$

not the squared distance $\|x^k-x^*\|^2$.

The theorem-style bound is

$$
f(x^k)-f(x^*)
\le
\frac{\beta}{2k}\|x^0-x^*\|^2.
$$

So the shorthand rate is

$$
O\left(\frac{\beta}{k}\right).
$$

This is exactly the kind of precision the quizzes and exam care about: if you only write “$1/k$” without saying which quantity is converging, the answer is incomplete.
