# lecture-23

Source: `materials/archive/survey-of-algebra/local-pdfs/lecture-23.pdf`
Duplicate equivalents: `lecture-23.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 5

## Page 1
### Content
# Lecture 23: Recurrent and transient properties of Brownian Motions.
April 18, 2024

A Brownian motion is a time-continuous stochastic process $(X_t)_{t \ge 0}$ that models random continuous motions. The standard 1D Brownian motion has the following properties:
(i) $X_0 = 0$;
(ii) for any $s_1 \le t_1 \le s_2 \le t_2 \le \dots \le s_n \le t_n$ the random variables
$$X_{t_1} - X_{s_1}, \dots, X_{t_n} - X_{s_n}$$
are independent;
(iii) For any $s < t$ the random variable $X_t - X_s$ has a normal distribution with mean 0 and variance $t - s$.
(iv) With probability 1, the function $t \mapsto X_t$ is continuous in $t$.
The standard BM in $\mathbb{R}^d$ is a vector of $d$ independent standard 1D BM.

In 1D: recurrent. In other words, given any $x$, if the BM starts at $x$ then with probability 1 it will visit $x$ in the future.

Without loss of generality we may assume $x = 0$ (simply subtract the entire BM by $x$ to go back to the std case).
If $Z$ is the set of zeros of the standard BM then
$$P(Z \cap [1, t] \neq \emptyset) = 1 - \frac{2}{\pi} \arctan\left(\frac{1}{\sqrt{t-1}}\right) \to 1$$
as $t \to \infty$. Thus
$$P(Z \cap [1, \infty) \neq \emptyset) = 1.$$
Showing that with probability 1 the 1D standard BM will return to 0. Thus it is point recurrent.

More is true: for a standard BM that starts at 0, with probability 1 it will visit any given $x \in \mathbb{R}$.
Indeed, we already consider $x = 0$. If $x \neq 0$ then without loss of generality we may assume $x > 0$ (by symmetry).

### Visual Description
The slide contains text and mathematical formulas. The definition of Brownian motion and the statement about 1D recurrence are enclosed in boxes with drop shadows. The overall layout is a standard academic lecture slide.

---
## Page 2
### Content
Then given any $M > 0$, using the reflection principle,
$$P(\max_{0 \le t \le M} X_t \ge 2x | X_0 = 0)$$
$$= 2P(X_M \ge 2x | X_0 = 0)$$
$$= 2 \int_{2x}^\infty \frac{1}{\sqrt{2\pi M}} e^{-t^2/(2M)} dt$$
$$= 2 \int_{2x/\sqrt{M}}^\infty \frac{1}{\sqrt{2\pi}} e^{-s^2/2} ds$$
($s = \frac{t}{\sqrt{M}}$). When $M \to \infty$, this converges to
$$2 \int_0^\infty \frac{1}{\sqrt{2\pi}} e^{-s^2/2} ds = 1$$
Thus
$$P(\sup_{t \ge 0} X_t \ge 2x | X_0 = 0) \ge \lim_{M \to \infty} P(\max_{0 \le t \le M} X_t \ge 2x | X_0 = 0) = 1$$
and therefore with probability 1 we have $\sup_{t \ge 0} X_t \ge 2x$, so by continuity $X_t = x$ for some finite $t$.

In $\mathbb{R}^d$: if $d = 2$ then neighborhood recurrent but not point recurrent.
If $d \ge 3$: transient.

Neighborhood recurrent at 0: For $r > 0$, let $B_r(0) = \{y \in \mathbb{R}^d : |y| \le r\}$, then the standard BM is neighborhood recurrent at 0 if for any $r > 0$ it holds that
$$P(\text{for some } t \ge 0, X_t \in B_r(0)) = 1.$$

In fact, in 2D we can show that
Let $X_t$ be a standard BM in $\mathbb{R}^2$. For any nonempty open set $S \subset \mathbb{R}^2$,
$$P(\text{for some } t \ge 0, X_t \in S) = 1.$$

Since any nonempty open set contains a nonempty (closed/open) disk, it suffices show the above claim for $S$ being a nonempty closed disk. We can even assume that this disk has center $x \neq 0$ and the radius is small enough so that 0 is not in the disk.
Thus, consider
$$B_r(x) = \{y : \|y - x\| \le r\}$$
then we need to show: for any $x \in \mathbb{R}^2 \setminus \{0\}$, and any $r < |x|$,

### Visual Description
The slide contains mathematical derivations and definitions. Two key definitions/statements are highlighted in boxes with drop shadows: one defining neighborhood recurrence at 0 and another stating the property for 2D Brownian motion.

---
## Page 3
### Content
$$P(\text{for some } t \ge 0, X_t \in B_r(x)) = 1.$$
Let
$$T_r = \inf \{t \ge 0 : |X_t - x| = r\}$$
We want to show
$$P(T_r < \infty) = 1$$
To see this, fix $R > r$ and view this as a problem about $x$ in the region $r \le |x| \le R$, we first show that
$$P(T_r < T_R) = \frac{\ln(R/\|x\|)}{\ln(R/r)},$$
where again
$$T_R = \inf \{t \ge 0 : |X_t - x| = R\}.$$
Since
$$\lim_{R \to \infty} \frac{\ln(R/\|x\|)}{\ln(R/r)} = 1,$$
the desired claim follows from this claim.

**Computation:**
If we let $U$ be the region between $B_R(x)$ and $B_r(x)$ and let $S$ be the first time that the BM (which starts at $0 \in U$) hits the boundary of $U$ then $T$ is a stopping time, and when it leaves $U$ it could either hit the boundary at $\partial B_r$ or the boundary at $\partial B_R$. Then
$$P(T_r < \infty) = \lim_{R \to \infty} P(T_r < T_R),$$
$$P(T_r < T_R) = P(|X_S - x| = R)$$
$$= E[1_{|X_S-x|=R}]$$
$$= E[g(Y_T) | Y_0 = x]$$
where $g(z) = 1_{|z|=R}$ and $Y_t = x - X_t$ is a standard BM that starts at $x$. And
$$T = \inf \{t \ge 0 : |Y_t| = r \text{ or } R\}$$

### Visual Description
Text-only slide with mathematical formulas. One central goal statement is enclosed in a box with a drop shadow.

---
## Page 4
### Content
is also a stopping time for $(Y_t)$.
Then by similar argument as in a previous lecture we can show that
$$g(x, t) = E[g(Y_t) | Y_0 = x]$$
satisfies
$$\partial_t g = \frac{1}{2} \Delta g$$
in fact we use this same argument to show that for
$$f(x) = E[g(Y_T) | Y_0 = x]$$
satisfies
$$\Delta f = 0.$$
Furthermore,
$$f(x) = 1, \|x\| = r$$
$$f(x) = 0, \|x\| = R$$
Then we can solve and find $f$. Note that $f$ is radially symmetric, i.e. depends on $\|x\|$ and not the angle. Convert to eqn for $\|x\|$ by letting
$$\phi(|x|) = f(x),$$
and obtain
$$\Delta f = \phi''(r) + \phi'(r)/r.$$
$$\phi''(r) + \frac{1}{r} \phi'(r) = 0$$
$$f(x) = \phi(|x|) = \frac{\ln(R/\|x\|)}{\ln(R/r)}$$

### Visual Description
Text-only slide. Contains mathematical derivations involving partial differential equations (heat equation and Laplace equation) and their solutions in radial coordinates.

---
## Page 5
### Content
In higher dimension $d \ge 3$, we obtain similarly
$$f(x) = \phi(\|x\|),$$
and obtain
$$\Delta f = \phi''(r) + (d - 1)\phi'(r)/r.$$
$$\phi''(r) + \frac{d - 1}{r} \phi'(r) = 0$$
$$f(x) = \frac{|x|^{2-d} - R^{2-d}}{r^{2-d} - R^{2-d}}, d \ge 3$$
But then
$$\lim_{R \to \infty} \frac{|x|^{2-d} - R^{2-d}}{r^{2-d} - R^{2-d}} = \frac{|x|^{2-d}}{r^{2-d}} < 1.$$

### Visual Description
The slide contains mathematical formulas and text enclosed in a large rectangular box. It details the derivation for higher dimensions $d \ge 3$, showing the transience of Brownian motion.

---
