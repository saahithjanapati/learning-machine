# canvas-10-04-13294257-annotated.slides_Chapter5.cvg.092625

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-10-04-13294257-annotated.slides_Chapter5.cvg.092625.pdf`
Duplicate equivalents: `canvas-10-04-13294257-annotated.slides_Chapter5.cvg.092625.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview) + Local PyMuPDF (fitz fallback)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `MIXED`
Pages: 54

## Page 1
### Content
RECAP 9/17/25
Last Lecture (Prob. Ineqs)

* non-asymptotic quantitative bounds with a minimum of assumptions
* recall two aspects of the ineqs.
    * typical deviation
    * probability

e.g. Chebyshev's ineq.
For any $t \ge 0$, $\mathbb{P}(|X - \mu_X| \ge t\sigma_X) \le \frac{1}{t^2}$
Recall: Hoeffding example, example with conf. intervals

* Special case: RV of interest is the mean of independent RVs.
Most of the time (i.e. with high prob), the sample mean is within $c/\sqrt{n}$ from the true mean for some small const $c$.

### Visual Description
Handwritten notes in blue and red ink on a yellow grid paper background. The word "RECAP" is written in red at the top left.

---

## Page 2
### Content
RECAP
**CHAPTER 4 Probability Inequalities: Summary**

In this chapter, we show that most of the time (i.e. with high probability), the sample mean is within $c/\sqrt{n}$ from the true mean, for some small constant $c$.

**Chebyshev** Assume that $\mathbb{E}[X] = \mu_X$ and $\mathbb{V}(X) = \sigma_X^2$ both exist. Then $\forall t \ge 0$:
$$\mathbb{P}(|X - \mu_X| \ge t\sigma_X) \le \frac{1}{t^2}.$$

The deviation from the mean of any random variable is of the order of the standard deviation, and more concretely the probability that a random variable is more than $t$ standard deviations away from its mean is at most $1/t^2$.

**Mill** Let $X \sim N(\mu_X, \sigma_X^2)$. Then $\forall t > 0$:
$$\mathbb{P}(|X - \mu_X| \ge t\sigma_X) \le \sqrt{2/\pi} \frac{\exp(-t^2/2)}{t}.$$

For Mill's inequality, the deviation is again of the order of the standard deviation but the probability is exponential. This is much sharper than what we would get from Chebyshev's inequality.

**Hoeffding** Let $Y_1, \dots, Y_n$ be independent, bounded s.t. $a_i \le Y_i \le b_i$, and $\mathbb{E}[Y_i] = 0$. Let $X = \bar{Y}$. Then $\forall t > 0$,
$$\mathbb{P}\left(|X - 0| \ge t \sqrt{\frac{\sum_{i=1}^n (b_i - a_i)^2}{4n^2}}\right) \le 2 \exp(-t^2/2).$$

Here, it is not obvious that the deviation is of the order of the standard deviation (it is – see later) but like Mill's, the probability is exponential.

+ Markov's Inequality

### Visual Description
A slide containing typed text and mathematical formulas. At the bottom, there is a line graph comparing the bounds of Chebyshev (black line), Mill (red line), and Hoeffding (green line) as a function of $t$ (ranging from 2.0 to 4.0). The y-axis is labeled "bound" (ranging from 0.00 to 0.25). There is a handwritten note in red and blue at the top and bottom right: "RECAP" and "+ Markov's Inequality".

---

## Page 3
### Content
Reminders Mon Sept 22, 2025

* HW 4 Extended due date to Monday Sept 29, 6 pm
* Office hours every day this week
* Midterm 1 in class (Lectures 1-6)
Info sheet & other material will be posted later today

Last lectures:
* Stochastic conv. basics
    * Conv. in prob.
    * Conv. in distr.
    * WLLN, CLT

This lecture:
* work through examples
* how this works in practice

### Visual Description
Handwritten notes in blue and red ink on a yellow grid paper background. A horizontal line separates the "Reminders" section from the "Last lectures" and "This lecture" sections.

---

## Page 4
### Content
Next: large-sample results

**CHAPTER 5 – Stochastic Convergence**

**Contents**
1. Stochastic Convergence Basics (2)
2. More on the Central Limit Theorem (CLT) (11)
3. Stronger Modes of Convergence (16)
4. The Delta Method (24)

Reading: Wasserman Sec 5.1-5.5

First recall how we say that a sequence of numbers converges to a limit, i.e. we say a sequence of numbers $x_1, \dots, x_n$ has limit $x$, if for every $\epsilon > 0$, there is some $N(\epsilon)$ such that, for all $n \ge N(\epsilon)$, we have that $|x - x_n| < \epsilon$.

We then write $\lim_{n \to \infty} x_n = x$, and say that the sequence converges to $x$.

We would like to ask an analogous question for random variables, i.e. given a sequence of RVs $X_1, \dots, X_n$ can we say that they have a “limit” $X$? What does it mean for a sequence of random variables to converge to some random variable $X$?

Recall from Real Analysis:
Convergence of a seq. of real numbers
$x_1 \quad x_2 \quad x_3 \dots x_n \to x$

### Visual Description
A slide with typed text and a table of contents. There are handwritten annotations in blue ink, including the title "Next: large-sample results" and a section at the bottom titled "Recall from Real Analysis" with a small diagram showing points $x_1, x_2, x_3, \dots, x_n$ approaching a point $x$.

---

## Page 5
### Content
Motivation
**1 Stochastic Convergence Basics**

In statistics we estimate parameters using data, e.g. we estimate a true mean $\mu$ using the sample average of observations that have mean $\mu$.

We want to know something about the limiting behavior of our estimators, as the sample size $n$ increases:
* do estimates “converge” to the truth?
* what is their distribution around the truth?
* and so on.

This is what we refer to as **large sample theory**.

Note on notation: this chapter concerns the limiting behavior of the sequence of random variables $Y_n$, where for example:
$$Y_n = \frac{1}{n} \sum_{i=1}^n X_i$$

statistical functional $T(F)$
e.g. $\mu = \mathbb{E}[X] = \int x dF_x$ of distr
$\theta = T(F)$ P.O.I
$\hat{\theta}_n(X_1, \dots, X_n)$ where $X_1, \dots, X_n \sim F$

Spec-case
$Y_n$ RV estimator $\hat{\mu}$ of $\mu = \mathbb{E}[X_1]$

Limiting behavior of $Y_n$?
seq. $Y_1, Y_2, \dots$

### Visual Description
A slide with typed text and handwritten annotations in blue and red ink. The annotations define statistical functionals and parameters of interest, and specify $Y_n$ as a sample mean estimator.

---

## Page 6
### Content
Suppose we have a sequence of random variables $Y_1, \dots, Y_n$, and another random variable $Y$. The two most basic forms of stochastic convergence are:

1. **Convergence in Probability**: The sequence $Y_n$ converges to $Y$ if:
$$\forall \epsilon > 0, \lim_{n \to \infty} \mathbb{P}(|Y_n - Y| \ge \epsilon) = 0,$$
and we write $Y_n \xrightarrow{P} Y$.

An important special case is when $Y = c$ constant, for example in the WLLN where $Y_n = \frac{1}{n} \sum_{i=1}^n X_i$ and $c = \mu = \mathbb{E}(X_1) = \mathbb{E}(Y_n)$.

**The Weak Law of Large Numbers (WLLN)** Let $X_1, \dots, X_n$ be i.i.d RVs with finite $\mathbb{E}(X_1) = \mu$ and $\text{Var}(X_1) = \sigma^2$. Then
$$\forall \epsilon > 0, \mathbb{P}(|Y_n - \mu| > \epsilon) \to 0$$
as $n \to \infty$.

Interpretation of WLLN: "conc. of measure" phenomena
The distr of $\bar{X}_n$ becomes more concentr. around $\mu = \mathbb{E}[X_1]$ as $n$ gets larger.

Recall: proof by Chebyshev's ineq.

### Visual Description
A slide with typed text and handwritten annotations. Annotations label parts of the convergence formula (e.g., "event", "R.V", "Prob of an event"). There are small handwritten plots of a pmf and CDF for a constant $c$. At the bottom, there is a handwritten interpretation of the WLLN.

---

## Page 7
### Content
2. **Convergence in Distribution**: Let $F_n$ and $F$ be the CDFs of $Y_n$ and $Y$. The sequence $Y_n$ converges in distribution to $Y$ if:
$$\lim_{n \to \infty} F_n(t) = F(t),$$
at all points $t$ where $F$ is continuous, and we write $Y_n \xrightarrow{d} Y$ or $Y_n \rightsquigarrow Y$.

An important example is the central limit theorem.

**The Central Limit Theorem (CLT)** Let $X_1, \dots, X_n$ be i.i.d. with mean $\mu$ and variance $\sigma^2$, both finite. Define:
$$Y_n = \bar{X}_n = \frac{1}{n} \sum_{i=1}^n X_i.$$
$\mathbb{E}[Y_n] = \mu$
$\mathbb{V}[Y_n] = \frac{\sigma^2}{n}$

Then the standardized variable:
$$Z_n = \frac{Y_n - \mu}{\sigma/\sqrt{n}} = \frac{\sqrt{n}(Y_n - \mu)}{\sigma} \rightsquigarrow N(0, 1).$$

$Y_n \approx N(\mu, \frac{\sigma^2}{n})$ for large $n$
~~$Y_n \xrightarrow{d} N(\mu, \frac{\sigma^2}{n})$~~ limits cannot depend on $n$

### Visual Description
A slide with typed text and handwritten annotations. Annotations highlight the CDFs $F_n$ and $F$, and provide additional details for the CLT, including the mean and variance of $Y_n$. At the bottom, there is a note clarifying that the limit in convergence in distribution cannot depend on $n$, with a crossed-out formula.

---

## Page 8
### Content
Convergence in distribution only makes a statement about the distribution of the random variables.

Convergence in probability is a statement about the value of the random variables.

Convergence in probability $\implies$ convergence in distribution. The reverse is not, in general, true.

$X_n \xrightarrow{P} X \implies X_n \rightsquigarrow X$
$X_n \rightsquigarrow X \not\implies X_n \xrightarrow{P} X$

### Visual Description
A slide with typed text and handwritten annotations. The main text is highlighted in yellow. Handwritten notes at the bottom right show the implication between convergence in probability and convergence in distribution, with a crossed-out arrow for the reverse direction.

---
## Page 9
### Content
**Motivation:**

We care about convergence in probability because it is a desirable property of estimators. (Handwritten: *Think why?*)

Terminology: **consistent** = "converges in probability".

When we do estimation, we will see that MLEs, for example, are consistent.

(Handwritten: Consistent estimator $\hat{\Theta}_n(X_1, \dots, X_n) \xrightarrow{P} \Theta$)

We care about convergence in distribution because it facilitates or even allows probability calculations.

### Visual Description
Text-only slide with blue handwritten annotations.

---
## Page 10
### Content
**Ex:** Let $X_n, n = 1, 2, \dots$ be a sequence of i.i.d $N(0, 1)$ RVs and let $X \sim N(0, 1)$.

As $n \to \infty$, does $X_n$ converge to $X$ in distribution? In probability?

(Handwritten notes):
- In distribution? **Yes**
  $X_n \sim N(0, 1)$ for all $n$.
  Hence, trivially $X_n \xrightarrow{D} N(0, 1)$
- In probability? **No, show this!**
  Given $\epsilon > 0$
  $P(|X_n - X| > \epsilon)$ where $Y = X_n - X \sim N(0, 2)$
  Recall: Linear comb. of IID normal RVs (independent) is still normal (proof via MGF)
  $\begin{cases} Var(Y) = Var(X_n - X) \stackrel{\text{indep.}}{=} Var(X_n) + Var(X) = 1^2 + 1^2 = 2 \\ E(Y) = E(X_n) - E(X) = 0 - 0 = 0 \end{cases}$
  $P(|Y| > \epsilon) \neq 0$ for $Y \sim N(0, 2)$

### Visual Description
Slide with typed text and extensive blue and red handwritten mathematical derivations. It includes a small sketch of a normal distribution curve for $Y \sim N(0, 2)$ with shaded tails representing $P(|Y| > \epsilon)$.

---
## Page 11
### Content
**Ex:** Let $Y_n \sim N(0, \frac{1}{n})$ for $n = 1, 2, \dots$.

Note: $\sqrt{n}Y_n \sim N(0, 1)$ for all $n$. Hence, trivially, $\sqrt{n}Y_n \xrightarrow{D} N(0, 1)$.

Does $Y_n$ converge, and if so to what? In distribution? In probability?

(Handwritten notes):
- Does $Y_n \xrightarrow{D} 0$? **Yes**, because $F_n(t) \to F(t)$ for all $t \neq 0$.
- CDF of $Y_n$: $F_n(t) \stackrel{\text{def}}{=} P(Y_n \le t) = P(\sqrt{n}Y_n \le \sqrt{n}t) = P(Z \le \sqrt{n}t)$ where $Z \sim N(0, 1)$
- For $t > 0, F_n(t) \to 1$ as $n \to \infty$
- For $t < 0, F_n(t) \to 0$ as $n \to \infty$
- However $F_n(t=0) = P(Z \le 0) = \frac{1}{2} \neq 0$

### Visual Description
Slide with typed text and blue/red handwritten notes. It features two plots: one showing a sequence of CDFs $F_n(t)$ approaching a step function, and another showing the limit step function $F(t)$ with a jump at $t=0$.

---
## Page 12
### Content
(Handwritten notes):
Show that $Y_n \xrightarrow{P} 0$.

Given $\epsilon > 0$,
$$P(|Y_n - 0| > \epsilon) = P(Y_n^2 > \epsilon^2) \quad \text{(non-neg RV)}$$
$$\le \frac{E(Y_n^2)}{\epsilon^2} = \frac{Var(Y_n)}{\epsilon^2} = \frac{1}{n\epsilon^2} \to 0 \text{ as } n \to \infty$$
$\square$

### Visual Description
Handwritten mathematical proof using Markov's/Chebyshev's inequality on a grid background.

---
## Page 13
### Content
**Ex:** Let $Y_n \sim N(n, 1)$.

Note: $Y_n - n \sim N(0, 1)$ for all $n$ so obviously, $Y_n - n \xrightarrow{D} N(0, 1)$.
(Handwritten: conv. in distr to $Z$ standard normal)
(Handwritten: does not conv in prob to $Z$)

Does $Y_n$ converge, and if so to what? In distribution? In probability?

### Visual Description
Text-only slide with some blue handwritten annotations.

---
## Page 14
### Content
[From AOS]
5.2 Types of Convergence

Relationship between types of convergence:
quadratic mean $\longrightarrow$ probability $\longrightarrow$ distribution
(Dashed arrow from point-mass distribution to probability)

**CONVERGENCE IN DISTRIBUTION DOES NOT IMPLY CONVERGENCE IN PROBABILITY.** Let $X \sim N(0, 1)$. Let $X_n = -X$ for $n = 1, 2, 3, \dots$; hence $X_n \sim N(0, 1)$. $X_n$ has the same distribution function as $X$ for all $n$ so, trivially, $\lim_n F_n(x) = F(x)$ for all $x$. Therefore, $X_n \xrightarrow{D} X$. But $P(|X_n - X| > \epsilon) = P(|2X| > \epsilon) = P(|X| > \epsilon/2) \neq 0$. So $X_n$ does not converge to $X$ in probability.

**Warning!** One might conjecture that if $X_n \xrightarrow{P} b$, then $E(X_n) \to b$. This is not true. (Example provided in text).

**Summary.** Some convergence properties are preserved under transformations.

**5.5 Theorem.** Let $X_n, X, Y_n, Y$ be random variables. Let $g$ be a continuous function.
(a) If $X_n \xrightarrow{P} X$ and $Y_n \xrightarrow{P} Y$, then $X_n + Y_n \xrightarrow{P} X + Y$.
(b) If $X_n \xrightarrow{qm} X$ and $Y_n \xrightarrow{qm} Y$, then $X_n + Y_n \xrightarrow{qm} X + Y$.
(c) If $X_n \xrightarrow{D} X$ and $Y_n \xrightarrow{P} c$, then $X_n + Y_n \xrightarrow{D} X + c$.
(d) If $X_n \xrightarrow{P} X$ and $Y_n \xrightarrow{P} Y$, then $X_n Y_n \xrightarrow{P} XY$.
(e) If $X_n \xrightarrow{D} X$ and $Y_n \xrightarrow{P} c$, then $X_n Y_n \xrightarrow{D} cX$.
(f) If $X_n \xrightarrow{P} X$, then $g(X_n) \xrightarrow{P} g(X)$.
(g) If $X_n \xrightarrow{D} X$, then $g(X_n) \xrightarrow{D} g(X)$.

Parts (c) and (e) are known as **Slutzky's theorem**. (f) and (g) are the **continuous mapping theorem**.

(Handwritten notes):
- Since $g$ is cont. For any $\epsilon > 0$, we can find $\delta > 0$ s.t. $|g(X_n) - g(X)| < \epsilon$ if $|X_n - X| < \delta$. Now translate into a prob statement.
- $X_n \to g(X_n)$ for cont. func. $g$
- $X_n \pm Y_n$
- $X_n \cdot Y_n$

### Visual Description
A page from a textbook ("All of Statistics") with highlights and handwritten annotations in blue and red.

---
## Page 15
### Content
**Ex:** Let $X \sim Poi(n)$. Prove that the sequence $Y_n = \frac{X - n}{\sqrt{n}} \xrightarrow{D} N(0, 1)$ as $n \to \infty$.

(Handwritten notes):
- $E[X] = n$, $Var(X) = n$
- $n = 1, 2, 3, \dots$
- Hard to show that Poisson PMF converges to a Gaussian PDF
- **Trick:** Easy to show that the Poisson MGF converges to the Gaussian MGF

**Useful result:** Can show conv. in distr. by conv. of the MGFs.
Let $X_1, \dots, X_n$ be a seq. of RVs with MGFs $M_{X_1}, \dots, M_{X_n}$.
Let $X$ be a RV with MGF $M_X$.
If for all $t$ around a neighborhood around 0, $M_{X_n}(t) \to M_X(t)$, then $X_n \xrightarrow{D} X$.

### Visual Description
Slide with typed text and extensive blue handwritten notes explaining the strategy of using Moment Generating Functions (MGFs) for the proof.

---
## Page 16
### Content
(Handwritten notes):
$Y = \frac{X - n}{\sqrt{n}}$ where $X \sim Poi(n)$. $E[Y] = 0, V(Y) = 1$.

$$M_Y(t) = E[e^{tY}] = E\left[e^{t\left(\frac{X-n}{\sqrt{n}}\right)}\right]$$
$$= E\left[e^{\frac{tX}{\sqrt{n}}} e^{-\frac{tn}{\sqrt{n}}}\right] = e^{-t\sqrt{n}} E\left[e^{tX/\sqrt{n}}\right]$$
$$= e^{-t\sqrt{n}} E\left[e^{X\left(\frac{t}{\sqrt{n}}\right)}\right] = e^{-t\sqrt{n}} M_X\left(\frac{t}{\sqrt{n}}\right)$$

Poisson($\lambda$) MGF is $e^{\lambda(e^t - 1)}$.
$$= e^{-t\sqrt{n}} \exp\left(n\left(e^{t/\sqrt{n}} - 1\right)\right) = \exp\left(n\left(e^{t/\sqrt{n}} - 1\right) - t\sqrt{n}\right)$$

Taylor exp: $e^x = 1 + x + \frac{x^2}{2!} + \dots$
$$e^{t/\sqrt{n}} = 1 + \frac{t}{\sqrt{n}} + \frac{t^2}{2n} + O\left(\frac{1}{n^{3/2}}\right)$$

$$M_Y(t) = \exp\left(n\left(1 + \frac{t}{\sqrt{n}} + \frac{t^2}{2n} + O\left(\frac{1}{n^{3/2}}\right) - 1\right) - t\sqrt{n}\right)$$
$$= \exp\left(t\sqrt{n} + \frac{t^2}{2} + O\left(\frac{1}{\sqrt{n}}\right) - t\sqrt{n}\right)$$
$$M_Y(t) \to \exp\left(\frac{t^2}{2}\right) \text{ as } n \to \infty \text{ for all } t$$
$\exp\left(\frac{t^2}{2}\right)$ is the MGF of $N(0, 1)$.

### Visual Description
Handwritten mathematical derivation on a grid background showing the step-by-step limit of the MGF.

---
## Page 17
### Content
Milt)
-> Myo, (t)
for allt
as no w
Then
Y @ N10, 1)
&

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 18
### Content
Table of Distributions 
Distribution 
PDF or probability function 
mean 
variance 
MGF 
Point mass at a 
I(x = a) 
a 
0 
eat 
Bernoulli(p) 
pX(l _ p)I-X 
P 
p(l - p) 
pet +(l-p) 
Binomial( n, p) 
p)n-x 
np 
np(l - p) 
(pet + (1 _ p))n 
Geometric (p) 
p(l - p)x-l I(x 
1) 
lip 
I-p 
pel 
( 
) 
r 
1-(I-p)el t < -log(l - p) 
Poisson(>.) 
)..;c e-).. 
>. 
>. 
eA(e'-I) 
-x!-
Uniform(a, b) 
I(a < X < b)/(b - a) 
a+b 
(b-a)2 
e bt _eat 
-2-
-1-2-
(b-a)t 
Normal(IL,0-2) 
_1_e-(x-I")2/(20-2) 
o-yI21f 
IL 
0-2 
exp {{Lt + 
} 
Exponential(;3) 
e-;P/O 
;3 
;32 
(t < 1/;3) 
-13-
Gamma(a,;3) 
xu-1e-:r/,a 
a;3 
a;32 
(t < 1/;3) 
r(a)f3" 
s: 
(f) 
r(oo+f3) 
00-1(1 _, )13-1 
1 
2.: 00 (rt-1 oo+r ) t k 
c+ 
Beta(a, ;3) 
a 
af3 
0 
r(a)r(f3) x 
X 
a+f3 
(a+f3)2(a+f3+ 1) 
+ 
k=1 
r=O a+f3+r 
kT 
,...., 
rn 
« 
r(vt") 
S 
tu 
1 
o (if V> 1) 
(if v> 2) 
does not exist 
r::r 
r(!f) ( 
") (v+l)/2 . 
0 
1+:1; 
u-2 
W 
( 
y/2 
"'" 
1 
x(p/2)-le-x/2 
2p 
(t < 1/2) 
w 
r(p/2)2 P / 2 
p 
W 
r

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 19
### Content
2
More on the Central Limit Theorem (CLT)
Let X1, . . . , Xn be i.i.d. with ﬁnite µ and ω2. Then
Zn =
→n( ¯Xn ↑ µ)
ω
↭ N(0, 1) .
1. We could use MGF to prove the CLT (see Wasserman). Here we
will just do a sanity check:
Does Zn have the correct mean and variance?
• E[Zn] =
• E[Z2
n] =
11
independent
E(Xi]
-VarLXi]
I O
indep
↓ideatically
immit
distr
---
-
=
0
check
this !
--
= 1 VantEn) = 1

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 20
### Content
5.4 The Central Limit Theorem 
77 
5.4 
The Central Lirnit Them'ern 
The law of large numbers says that the distribution of X n piles up near JL. 
This isn't enough to help us approximate probability statements about X n' 
For this we need the central limit theorem. 
Suppose that Xl, ... ,Xn are lID with mean JL and variance 172. The central 
limit theorem (CLT) says that Xn = 71.- 1 L:i Xi has a distribution which is 
approximately Normal with mean JL and variance 172/71.. This is remarkable 
since nothing is assumed about the distribution of Xi, except the existence of 
the mean and variance. 
5.8 Theorem (The Central Limit Theorem (CLT)). Let Xl, ... ,Xn be lID 
with mean JL and variance 172 . Let Xn = 71.-1 
Xi' Then 
where Z rv N(O, 1). In other words, 
/
z 
1 
2 
lim IP'(Zn =:; z) = <I>(z) = 
m=e- x /2dx. 
n-+= 
_= v21f 
Interpretation: Probability statements about Xn can be approximated 
using a Normal distribution. It's the probability statements that we 
are approximating, not the random variable itself. 
In addition to Zn 
N(O, 1), there are several forms of notation to denote 
the fact that the distribution of Zn is converging to a Normal. They all mean 
the same thing. Here they are: 
vn(X n -
JL) 
fo(Xn - JL) 
:::::: 
N(O,l) 
:::::: 
N (JL' 
:::::: 
N (0, :2) 
:::::: 
N(0,172) 
:::::: 
N(O,l). 
5.9 Example. Suppose that the number of errors per computer program has a 
Poisson distribution with mean 5. We get 125 programs. Let Xl, . .. , X 125 be 
[From Aos]
Or
-
②
>
O
=>M
O
(Can prove CLT using MGFs)

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 21
### Content
2. There are two common ways to think of the CLT (and more
broadly convergence in distribution):
• Say I repeat the experiment many times:
{X1
1, . . . , X1
n}
{X2
1, . . . , X2
n}
. . .
{Xk
1, . . . , Xk
n}
and computed their centered and normalized averages Z1
n, . . . , Zk
n.
The central limit theorem then tells us that these normal-
ized averages will (approximately) have a standard Gaussian
distribution.
12
#
Twointerpretations/applications
ofthe e
Statistic
ind sample
=>
compute Yn4) (1)
of size n
O
h
i
i
i
!
=>
- 11)(k)
↑
k I
.E.D.
samples of size
n
=>↑") +k),.... Tk
approx. distr of these RVS
is
normal

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 22
### Content
3.8 Exercises 
61 
square and take the expectation. You then have to take the expectation 
of three terms. In each case, use the rule of the iterated expectation: 
lE(stuff) = lE(lE(stuffIX)). 
18. Show that if lE(XIY = y) = c for some constant c, then X and Yare 
uncorrelated. 
19. This question is to help you understand the idea of a sampling dis-
tribution. Let Xl, . .. ,Xn be lID with mean f.L and variance (}2. Let 
Xn = n-l 
Xi. Then Xn is a statistic, that is, a function of the 
data. Since X n is a random variable, it has a distribution. This distri-
bution is called the sampling distribution of the statistic. Recall from 
Theorem 3.17 that lE(Xn) = It and V(Xn) = (}2/n. Don't confuse the 
distribution of the data fx and the distribution of the statistic fx,,' To 
make this clear, let Xl, ... ,Xn '" Uniform(O, 1). Let fx be the density 
of the Uniform(O, 1). Plot fx. Now let Xn = n-l 
Xi' Find lE(Xn) 
and V(Xn). Plot them as a function of n. Interpret. Now simulate the 
distribution of Xn for n = 1,5,25,100. Check that the simulated values 
oflE(Xn) and V(Xn) agree with your theoretical calculations. What do 
you notice about the sampling distribution of X n as n increases? 
20. Prove Lemma 3.21. 
21. Let X and Y be random variables. Suppose that lE(YIX) = X. Show 
that Cov(X, Y) = V(X). 
22. Let X '" Uniform(O, 1). Let 0 < a < b < 1. Let 
and let 
Z = { 
O<x<b 
otherwise 
a<x<l 
otherwise 
(a) Are Y and Z independent? Why/Why not? 
(b) Find lE(YIZ). Hint: What values z can Z take? Now find lE(YIZ = z). 
23. Find the moment generating function for the Poisson, Normal, and 
Gamma distributions. 
24. Let Xl,"" Xn '" Exp(p). Find the moment generating function of Xi' 
Prove that 
Xi'" Gamma(n, p). 
(From AOS]

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 23
### Content
original
(populationdatadi se
n=5
n=30
-
-
What does this look like inhighea

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 24
### Content
• The second way is to suppose that before I did the experi-
ment I asked the question what is the probability of a certain
outcome:
P(a → X → b).
Then the CLT tells us:
P(a → X → b) =
= P
�↑n(a ↓ µ)
ω
→ Zn →
↑n(b ↓ µ)
ω
�
↔ P
�↑n(a ↓ µ)
ω
→ Z →
↑n(b ↓ µ)
ω
�
= !
�↑n(b ↓ µ)
ω
�
↓ !
�↑n(a ↓ µ)
ω
�
where ! is the cdf of a standard Normal.
13
⑪
"Prediction
↳
creat
I In-M
N
T
CDF of
O
N(ol)O)
Na

### Visual Description
Text extraction fallback; original layout not preserved.

---
## Page 25
### Content
**Q: How does CLT comp. w. conc. ineq.?**

**Example:** Let $X_i$ be iid RVs with $\mu = 0.5$ and $\sigma^2 = 1/4$.
Note: no distribution assumption.

$\mathbb{P}(0.4 < \bar{X}_n < 0.6) = \mathbb{P}(-0.1 < \bar{X}_n - \mu < 0.1)$
$= \mathbb{P}\left(\frac{-0.1 \times \sqrt{n}}{\sigma} < \frac{\sqrt{n}(\bar{X}_n - \mu)}{\sigma} < \frac{0.1 \times \sqrt{n}}{\sigma}\right)$
$\approx \Phi(0.2\sqrt{n}) - \Phi(-0.2\sqrt{n})$, (approx. prob statement for large $n$)

When $n = 100$, $\mathbb{P}(0.4 < \bar{X}_n < 0.6) \approx 0.9545$.

---
Compare to Chebyshev:
$\mathbb{P}(0.4 < \bar{X}_n < 0.6) = \mathbb{P}(|\bar{X}_n - \mu| < 0.1)$
$= 1 - \mathbb{P}(|\bar{X}_n - \mu| \ge 0.1)$
$\ge 1 - \frac{25}{n}$. (non-asymptotic bound (true for any $n$), lower bound)

When $n = 100$, $\mathbb{P}(0.4 < \bar{X}_n < 0.6) \ge 0.75$.

Recall Chebyshev: $\forall t \ge 0, \mathbb{P}(|X - \mu| \ge t\sigma) \le \frac{1}{t^2}$.

### Visual Description
The slide contains printed mathematical examples comparing the Central Limit Theorem (CLT) and Chebyshev's inequality. There are extensive handwritten annotations in blue and red. Blue ink is used for the title question and underlining. Red ink is used for circling terms, drawing arrows, and adding notes like "approx. prob statement for large n", "non-asymptotic bound (true for any n)", and "lower bound". The background is a light grid pattern.

---

## Page 26
### Content
**But, how do we apply CLT in practice? Usually, don't know $var(X_i)$**

To apply the CLT, we need $\sigma$
Often $\sigma^2$ is unknown
Def. $var(X) = \mathbb{E}[(X - \mathbb{E}(X))^2]$

Estimate it: $S_n^2 = \frac{1}{n-1} \sum_{i=1}^n (X_i - \bar{X}_n)^2$.
Unbiased est. $\mathbb{E}[S_n^2] = \sigma^2$
RV "statistic"

One can show that $S_n^2 \xrightarrow{P} \sigma^2$, i.e. $S_n^2$ is consistent for $\sigma^2$.
(prove by Chebyshev's or Markov's ineq.) $\mathbb{P}(|S_n^2 - \sigma^2| \ge \epsilon) \le \dots$

Using Slutsky's theorem we obtain the following version of the CLT:
$$\frac{\sqrt{n}(\bar{X}_n - \mu)}{S_n} \rightsquigarrow N(0, 1).$$

$S_n^2 \xrightarrow{P} \sigma^2$ see above
$S_n \xrightarrow{P} \sigma$
$\frac{\sigma}{S_n} \xrightarrow{P} 1$ By cont. mapping th.

$\le \frac{\mathbb{E}[(S_n^2 - \sigma^2)^2]}{\epsilon^2} = \frac{var(S_n^2)}{\epsilon^2} \to 0$ if $var(S_n^2) \to 0$ as $n \to \infty$

### Visual Description
The slide discusses the practical application of CLT when the variance is unknown. It introduces the sample variance $S_n^2$. There are many handwritten notes in blue ink, including a definition of variance, notes on unbiased estimators, and a sketch of a proof using Slutsky's theorem and the continuous mapping theorem. A red box highlights the modified CLT formula. The background is a light grid pattern.

---

## Page 27
### Content
Normal approx with estimated var.

$$\frac{\sqrt{n}(\bar{X}_n - \mu)}{S_n} = \underbrace{\frac{\sigma}{S_n}}_{\xrightarrow{P} 1 \text{ by cont. mapping th.}} \underbrace{\left( \frac{\sqrt{n}(\bar{X}_n - \mu)}{\sigma} \right)}_{\xrightarrow{d} N(0,1)}$$

By Slutsky's th.
$$\frac{\sqrt{n}(\bar{X}_n - \mu)}{S_n} \rightsquigarrow N(0,1)$$

### Visual Description
This is a handwritten slide on a grid background. It provides a step-by-step derivation of the normal approximation with estimated variance, showing how Slutsky's theorem is applied by breaking the expression into two parts: one converging in probability to 1 and the other converging in distribution to a standard normal.

---

## Page 28
### Content
RV $X: \Omega \to \mathbb{R}$
Recall: A r.v. is a map that assigns a real number $X(\omega)$ to each outcome $\omega \in \Omega$.

### 3 Stronger Modes of Convergence

**Almost-sure convergence.** A sequence $X_n$ almost surely converges to $X$ if:
$$\mathbb{P}(\lim_{n \to \infty} X_n = X) = 1,$$
and denoted as $X_n \xrightarrow{a.s.} X$.

Alt. terminology: $X_n \to X$ almost everywhere, $X_n \to X$ w. prob 1.

The two RVs become the same at the limit, i.e. they have the same values with probability 1.
For every $\epsilon > 0, \mathbb{P}(\lim_{n \to \infty} |X_n - X| < \epsilon) = 1$

Compare to **Convergence in Probability:**
$$\forall \epsilon > 0, \lim_{n \to \infty} \mathbb{P}(|X_n - X| \ge \epsilon) = 0,$$

At the limit most values $X_n$ are quite close to $X$, but we can still have rare erratic value of $X_n$.

### Visual Description
The slide introduces "Stronger Modes of Convergence," specifically almost-sure convergence. It includes formal definitions and notation. Handwritten blue notes define a random variable and provide alternative terminology for almost-sure convergence. A red handwritten note provides an epsilon-based probability statement. The background is a light grid pattern.

---

## Page 29
### Content
We will not use a.s. convergence again.

I only mention it because its most famous example is

**The Kolmogorov's Strong Law of Large Numbers:** Let $Y_1, \dots, Y_n, \dots$ be iid random variables with finite mean $\mathbb{E}(Y_1) = \mu$, then
$$\frac{1}{n} \sum_{i=1}^n Y_i \xrightarrow{a.s.} \mu.$$

The SLLN is harder to prove than the WLLN.

### Visual Description
Text-only slide. It presents the Strong Law of Large Numbers (SLLN) as an example of almost-sure convergence. The background is a light grid pattern.

---

## Page 30
### Content
**Convergence in quadratic mean (convergence in $L_2$).** A sequence $X_n$ converges to $X$ in quadratic mean if:
$$\lim_{n \to \infty} \mathbb{E}(X_n - X)^2 = 0,$$
denoted as $X_n \xrightarrow{L_2} X$ or $X_n \xrightarrow{qm} X$.
(average squared magnitude of deviation for $X_1, X_2, \dots$ as $n \to \infty$)

**Convergence in $L_1$.** A sequence $X_n$ converges to $X$ in $L_1$ if:
$$\lim_{n \to \infty} \mathbb{E}|X_n - X| = 0,$$
denoted as $X_n \xrightarrow{L_1} X$.

$L_1$ and $L_2$ convergence modes are convergences of values (magnitude of the deviation) of a sequence of random variables, as opposed to convergence in probability and a.s. convergence (frequency of deviations).

### Visual Description
The slide defines convergence in quadratic mean ($L_2$) and $L_1$ convergence. Handwritten blue notes clarify the meaning of these modes, contrasting "magnitude of deviation" with "frequency of deviations." The background is a light grid pattern.

---

## Page 31
### Content
![Forms of convergence diagram](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Convergence_of_random_variables.svg/500px-Convergence_of_random_variables.svg.png)
*Note: The image in the slide is a simplified version of the one above.*

Figure 1: Forms of convergence that imply other forms of convergence (source: wikipedia).

The diagram shows:
- $L^s \implies L^r$ for $s > r \ge 1$
- $L^r \implies p$ (convergence in probability)
- $a.s. \implies p$ (almost sure convergence)
- $p \implies d$ (convergence in distribution)

### Visual Description
The slide features a diagram from Wikipedia illustrating the relationships between different modes of convergence. Arrows indicate which mode implies another. Yellow highlighting is used on the $L^s \to L^r$ path and the $p \to d$ path. A blue dashed arrow is hand-drawn at the bottom. The background is a light grid pattern.

---

## Page 32
### Content
In statistics we are typically concerned with convergence in q.m. to a constant $c$:
$\mathbb{E}(Y_n - c)^2 \to 0$ where $c = \mu = \mathbb{E}(Y_n)$ as $n \to \infty$.
$\mathbb{E}[(\hat{\theta}_n - \theta)^2]$ MSE in point estimation

E.g.
Let $Y_1, \dots, Y_n$ be iid RVs with $\mathbb{E}(Y_1) = \mu$ and $Var(Y_1) = \sigma^2$
Let $X_n = \frac{1}{n} \sum_{i=1}^n Y_i$.
Then $\mathbb{E}(X_n - \mu)^2 = Var(X_n) = \sigma^2/n \to 0$
That is, $X_n$ converges to its mean in quadratic mean.

Convergence in q.m. is interesting because it is often easy to prove, and it implies convergence in probability.

### Visual Description
The slide discusses the relevance of quadratic mean convergence in statistics, linking it to Mean Squared Error (MSE). It provides an example using the sample mean of iid variables. Handwritten blue notes mention MSE in point estimation. Yellow highlighting is used on the final summary statement. The background is a light grid pattern.
## Page 33
### Content
**Exercise:** Prove that convergence in quadratic mean $\implies$ convergence in probability. (The reverse is not, in general, true.)

We know $\mathbb{E}(X_n - X)^2 \to 0$

We want $\mathbb{P}(|X_n - X| \ge \epsilon) \to 0$.

20
### Visual Description
Text-only slide with some blue underlining under the expectation term and a blue bracket under the probability term.

---

## Page 34
### Content
We know $\mathbb{E}(X_n - X)^2 \to 0$. We want $\mathbb{P}(|X_n - X| \ge \epsilon) \to 0$.

**Chebyshev**
$$\forall t > 0, \quad \mathbb{P}(|X - \mu_X| \ge t\sigma_X) \le \frac{1}{t^2}.$$

**Mill** Let $X \sim N(\mu_X, \sigma_X^2)$.
$$\forall t > 0, \quad \mathbb{P}(|X - \mu_X| \ge t\sigma_X) \le \sqrt{2/\pi} \frac{\exp(-t^2/2)}{t}.$$

**Hoeffding**
$$\forall t > 0, \quad \mathbb{P}\left(|X - 0| \ge t\sqrt{\frac{\sum_{i=1}^n (b_i - a_i)^2}{4n^2}}\right) \le 2 \exp(-t^2/2).$$

**Markov** Let $X \ge 0$.
$$\forall t > 0, \quad \mathbb{P}(X \ge t) \le \frac{\mu}{t}, \quad \text{or equivalently,} \quad \mathbb{P}(X \ge \mu) \le \frac{1}{t}.$$

21
### Visual Description
Text-only slide containing mathematical formulas for various probability inequalities.

---

## Page 35
### Content
**Exercise:** Prove that convergence in quadratic mean $\implies$ convergence in probability. (The reverse is not, in general, true.)

We know $\mathbb{E}(X_n - X)^2 \to 0$ (by def. of conv. in q.m.)

We want $\mathbb{P}(|X_n - X| \ge \epsilon) \to 0$.

**Proof:**
$\mathbb{P}(|X_n - X| \ge \epsilon) = \mathbb{P}((X_n - X)^2 \ge \epsilon^2) \le \frac{\mathbb{E}(X_n - X)^2}{\epsilon^2} \to 0$ as $n \to \infty$.
*(Note: $(X_n - X)^2$ is a nonneg R.V., so we can use Markov's inequality)*

**Next: counter-ex. to reverse**
That is, conv in prob. does **not** imply conv in q.m. in general.

**Spec. case (conv. in prob & conv. in q.m.)**
$Y_1, \dots, Y_n \overset{IID}{\sim} F$
Let $X_n = \frac{1}{n} \sum_{i=1}^n Y_i$
By LLN, $X_n \xrightarrow{P} \mathbb{E}[Y_1] = X$
$\mathbb{E}(X_n) = \mathbb{E}(Y_1) = X$
$Var(X_n) = Var(Y_1)/n$
$\mathbb{E}[(X_n - X)^2] = \mathbb{E}[(X_n - \mathbb{E}X_n)^2] = Var(X_n) \to 0$

22
### Visual Description
Handwritten blue and yellow annotations over the text from page 33, providing a proof using Markov's inequality and discussing a special case where both types of convergence hold.

---

## Page 36
### Content
**Counter-ex. (to show conv. in prob. does not imply conv. in q.m. in general)**

**PMF of $X_n$**
*   $\mathbb{P}(X_n = \sqrt{n}) = \frac{1}{n}$
*   $\mathbb{P}(X_n = 0) = 1 - \frac{1}{n}$

[Graph showing a spike at $x=0$ with probability $1-1/n$ and a spike at $x=\sqrt{n}$ with probability $1/n$]

*   conv. in prob? **yes**
*   conv. in $L_2$? **no**
*   conv. in $L_1$? **yes** (show this)

**Freq. of dev. (conc. of measure):**
$\mathbb{P}(|X_n - 0| > \epsilon) = \frac{1}{n} \to 0$ as $n \to \infty$.
Hence $X_n \xrightarrow{P} 0$.

**Magnitude of deviation:**
But $\mathbb{E}(|X_n - 0|^2) = (\sqrt{n})^2 \cdot \frac{1}{n} + 0 = 1$ for all $n$.
Hence, $X_n$ does **not** converge to zero in q.m. ($L_2$).

### Visual Description
Handwritten notes on a grid background. Includes a probability mass function (PMF) plot with two spikes and calculations for convergence in probability versus quadratic mean.

---

## Page 37
### Content
Similarly, $X_n \xrightarrow{P} X$ does **not** imply $X_n \xrightarrow{L_1} X$.

**PMF of $X_n$**
[Graph showing a spike at $x=0$ with probability $1-1/n$ and a spike at $x=n^2$ with probability $1/n$]

For any $\epsilon > 0$,
$\mathbb{P}(|X_n| < \epsilon) = \mathbb{P}(X_n = 0) = 1 - \frac{1}{n} \to 1$ as $n \to \infty$.
Hence, $X_n \xrightarrow{P} 0$.

But $\mathbb{E}(|X_n - 0|) = n^2 \cdot \frac{1}{n} + 0 = n \to \infty$.
That is, $X_n$ does **not** converge to 0 in $L_1$.

### Visual Description
Handwritten notes on a grid background. Similar to the previous page, it uses a PMF example to show that convergence in probability does not imply convergence in $L_1$ mean.

---

## Page 38
### Content
[From AOS]
5.2 Types of Convergence 75

**Relationship between types of convergence:**
quadratic mean $\longrightarrow$ probability $\longrightarrow$ distribution
*(Special case: point-mass distribution)*

**5.5 Theorem.** Let $X_n, X, Y_n, Y$ be random variables. Let $g$ be a continuous function.
(a) If $X_n \xrightarrow{P} X$ and $Y_n \xrightarrow{P} Y$, then $X_n + Y_n \xrightarrow{P} X + Y$.
(b) If $X_n \xrightarrow{qm} X$ and $Y_n \xrightarrow{qm} Y$, then $X_n + Y_n \xrightarrow{qm} X + Y$.
(c) If $X_n \xrightarrow{d} X$ and $Y_n \xrightarrow{P} c$, then $X_n + Y_n \xrightarrow{d} X + c$. (Slutzky's theorem)
(d) If $X_n \xrightarrow{P} X$ and $Y_n \xrightarrow{P} Y$, then $X_n Y_n \xrightarrow{P} XY$.
(e) If $X_n \xrightarrow{d} X$ and $Y_n \xrightarrow{P} c$, then $X_n Y_n \xrightarrow{d} cX$. (Slutzky's theorem)
(f) If $X_n \xrightarrow{P} X$, then $g(X_n) \xrightarrow{P} g(X)$. (Continuous mapping theorem)
(g) If $X_n \xrightarrow{d} X$, then $g(X_n) \xrightarrow{d} g(X)$. (Continuous mapping theorem)

**Summary:** Some convergence properties are preserved under transformations.
*   $X_n \to g(X_n)$ for cont. func. $g$
*   $X_n + Y_n$
*   $X_n \cdot Y_n$

### Visual Description
A screenshot of a textbook page (All of Statistics) with handwritten annotations. A diagram shows the hierarchy of convergence types. Theorem 5.5 is highlighted with notes identifying Slutzky's theorem and the Continuous Mapping Theorem.

---

## Page 39
### Content
**Recall LLN:**
Let $Y_1, \dots, Y_n$ be IID rvs with finite mean $\mathbb{E}[Y_1] = \mu$.
Then $\frac{1}{n} \sum_i Y_i \xrightarrow{P} \mu$.
($\frac{1}{n} \sum_i Y_i \xrightarrow{a.s.} \mu$) Kolmogorov's strong law of large numbers.

**Q1: What about seq. $\frac{1}{n} \sum g(Y_i)$ for some function $g$?**
Let $Z_i = g(Y_i), i=1, \dots, n$.
If $Y_1, \dots, Y_n$ are IID, then $g(Y_1), \dots, g(Y_n)$ are also IID.
Hence, if $\mathbb{E}[|g(Y_1)|] < \infty$, then $\frac{1}{n} \sum_i g(Y_i) \xrightarrow{P} \mathbb{E}[g(Y_1)]$ by LLN.

**Q2: How about $g\left(\frac{1}{n} \sum_i Y_i\right)$?**
If $g$ is a cont. func., then $g\left(\frac{1}{n} \sum_i Y_i\right) \xrightarrow{P} g(\mu)$ by continuous mapping thm.

### Visual Description
Handwritten notes on a grid background discussing the Law of Large Numbers (LLN) and its application to functions of random variables.

---

## Page 40
### Content
**Q:** Suppose seq. of RVS, $Y_n \xrightarrow{d} N(0,1)$ and $g(\cdot)$ is a differentiable function.

What can we say about $g(Y_n)$ as $n \to \infty$?

### Visual Description
Handwritten notes on a grid background posing a question about the convergence of a function of a sequence of random variables that converges in distribution.
## Page 41
### Content
"error of propagation"
linear approx around $Y_n = \mu$

**4 The Delta Method**
(First-order delta method)

If
$$\frac{\sqrt{n}(Y_n - \mu)}{\sigma} \rightsquigarrow N(0, 1)$$
and $g$ is a differentiable function such that $g'(\mu) \neq 0$. Then
$$\frac{\sqrt{n}(g(Y_n) - g(\mu))}{g'(\mu)\sigma} \rightsquigarrow N(0, 1).$$

*Handwritten notes:*
- $Y_n$ is asymptotically normal: $Y_n \approx N(\mu, \frac{\sigma^2}{n})$
- $g(Y_n) \approx N(g(\mu), [g'(\mu)]^2 \frac{\sigma^2}{n})$
- $Y_n \xrightarrow{P} \mu$ as $n \to \infty$

**Think:** When is the delta method good? When is the linear approx good?
- When $n$ is large, $Y_n$ is close to $\mu$.
- When $g$ is 'flatter' around $\mu$, etc.

### Visual Description
The slide contains printed text and handwritten annotations on a grid background. A graph shows a blue curve $Z = g(Y)$ on a coordinate system with axes $Y$ and $Z$. A point $\mu$ is marked on the $Y$-axis, and its projection $g(\mu)$ is on the $Z$-axis. A normal distribution curve is drawn along the $Z$-axis to represent the distribution of $g(Y_n)$ when $n$ is large. Red arrows and circles highlight key parts of the formulas and the graph.

---

## Page 42
### Content
**Sketch of proof:**

Taylor expansion of $g(Y_n)$ around $Y_n = \mu$:
$$g(Y_n) = g(\mu) + g'(\mu)(Y_n - \mu) + \text{Remainder}$$
where $\text{Remainder} \to 0$ as $Y_n \to \mu$ ($\text{Rem} = o_p(1)$)

$$g(Y_n) \approx g(\mu) + g'(\mu)(Y_n - \mu)$$
$$\frac{g(Y_n) - g(\mu)}{\sigma/\sqrt{n}} \approx \underbrace{g'(\mu)}_{\text{const}} \cdot \underbrace{\frac{(Y_n - \mu)}{\sigma/\sqrt{n}}}_{\rightsquigarrow N(0, 1)}$$

$$\frac{\sqrt{n}(g(Y_n) - g(\mu))}{\sigma} \rightsquigarrow g'(\mu) \cdot N(0, 1)$$

$$sd(g(Y_n)) = |g'(\mu)| \cdot \frac{\sigma}{\sqrt{n}}$$

### Visual Description
Handwritten notes on a grid background detailing the mathematical derivation of the Delta Method using a Taylor expansion. Red circles and brackets are used to highlight specific terms in the equations, such as the constant term and the term that converges to a standard normal distribution.

---

## Page 43
### Content
**Ex:** Let $X_1, \dots, X_n$ be iid with finite mean $\mu$ and variance $\sigma^2$. By the CLT we have $\sqrt{n}(\bar{X}_n - \mu) \rightsquigarrow N(0, \sigma^2)$.

Let $W_n = e^{\bar{X}_n}$, then the Delta Method implies that $\sqrt{n}(W_n - e^\mu) \rightsquigarrow N(0, \sigma^2 e^{2\mu})$.

*Handwritten derivation:*
- $\bar{X}_n \approx N(\mu, \frac{\sigma^2}{n})$
- $W_n = e^{\bar{X}_n}$, distribution of $W_n$?
- Let $g(s) = e^s \implies g'(s) = e^s$, and $g'(\mu) \neq 0$.
- Taylor expansion of $g$ around $\bar{X}_n = \mu$:
  $$g(\bar{X}_n) \approx g(\mu) + g'(\mu)(\bar{X}_n - \mu)$$
  $$\sqrt{n}(g(\bar{X}_n) - g(\mu)) \approx g'(\mu) \underbrace{\sqrt{n}(\bar{X}_n - \mu)}_{\rightsquigarrow N(0, \sigma^2)}$$
  $$\sqrt{n}(g(\bar{X}_n) - g(\mu)) \rightsquigarrow e^\mu N(0, \sigma^2)$$
  $$\sqrt{n}(e^{\bar{X}_n} - e^\mu) \rightsquigarrow N(0, \sigma^2 e^{2\mu})$$

### Visual Description
The slide contains a printed example followed by a handwritten step-by-step derivation on a grid background. Red circles highlight the transformation $W_n = e^{\bar{X}_n}$ and the term $\bar{X}_n$ in the CLT formula. Yellow highlighting is used on the term $\sqrt{n}(\bar{X}_n - \mu)$ and the exponent $2\mu$ in the final result.

---

## Page 44
### Content
**What if $g'(\mu) = 0$?**

2nd order Taylor expansion:
$$g(Y_n) \approx g(\mu) + \underbrace{g'(\mu)(Y_n - \mu)}_{=0} + \frac{g''(\mu)}{2!} (Y_n - \mu)^2$$

$$\frac{n}{\sigma^2} (g(Y_n) - g(\mu)) \approx \frac{g''(\mu)}{2} \underbrace{\frac{(Y_n - \mu)^2}{\sigma^2/n}}_{\rightsquigarrow \chi^2_1}$$

Apply Slutsky's theorem $\implies$ **2nd order Delta Method** (see CB)
$$n(g(Y_n) - g(\mu)) \rightsquigarrow \sigma^2 \frac{g''(\mu)}{2} \chi^2_1$$

**Recall:** square of a $N(0, 1)$ RV is a $\chi^2_1$ RV.
$$\frac{n(Y_n - \mu)^2}{\sigma^2} \rightsquigarrow \chi^2_1$$
$$\frac{(Y_n - \mu)^2}{\sigma^2/n}$$

### Visual Description
Handwritten notes on a grid background exploring the case where the first derivative is zero. It derives the second-order Delta Method. A red line underlines the second-order term of the Taylor expansion. Brackets indicate terms converging to a Chi-squared distribution with 1 degree of freedom.

---

## Page 45
### Content
[From AOS]

232 14. Multivariate Models
**14.1 Random Vectors**

Multivariate models involve a random vector $X$ of the form
$$X = \begin{pmatrix} X_1 \\ \vdots \\ X_k \end{pmatrix}.$$

The mean of a random vector $X$ is defined by
$$\mu = \begin{pmatrix} \mu_1 \\ \vdots \\ \mu_k \end{pmatrix} = \begin{pmatrix} E(X_1) \\ \vdots \\ E(X_k) \end{pmatrix}. \quad (14.1)$$

The **covariance matrix** $\Sigma$, also written $V(X)$, is defined to be
$$\Sigma = \begin{bmatrix} V(X_1) & Cov(X_1, X_2) & \dots & Cov(X_1, X_k) \\ Cov(X_2, X_1) & V(X_2) & \dots & Cov(X_2, X_k) \\ \vdots & \vdots & \ddots & \vdots \\ Cov(X_k, X_1) & Cov(X_k, X_2) & \dots & V(X_k) \end{bmatrix}. \quad (14.2)$$

This is also called the variance matrix or the variance-covariance matrix. The inverse $\Sigma^{-1}$ is called the **precision matrix**.

**14.1 Theorem.** *Let $a$ be a vector of length $k$ and let $X$ be a random vector of the same length with mean $\mu$ and variance $\Sigma$. Then $E(a^T X) = a^T \mu$ and $V(a^T X) = a^T \Sigma a$. If $A$ is a matrix with $k$ columns, then $E(AX) = A\mu$ and $V(AX) = A\Sigma A^T$.*

Now suppose we have a random sample of $n$ vectors:
$$\begin{pmatrix} X_{11} \\ X_{21} \\ \vdots \\ X_{k1} \end{pmatrix}, \begin{pmatrix} X_{12} \\ X_{22} \\ \vdots \\ X_{k2} \end{pmatrix}, \dots, \begin{pmatrix} X_{1n} \\ X_{2n} \\ \vdots \\ X_{kn} \end{pmatrix}. \quad (14.3)$$

The sample mean $\bar{X}$ is a vector defined by
$$\bar{X} = \begin{pmatrix} \bar{X}_1 \\ \vdots \\ \bar{X}_k \end{pmatrix}$$

### Visual Description
Text-only slide. This page appears to be a scan from a textbook titled "Multivariate Models," specifically section 14.1 on Random Vectors. It contains formal definitions and a theorem presented in a standard academic layout. A blue handwritten note at the top says "[From AOS]".

---

## Page 46
### Content
14.2 Estimating the Correlation 233

where $\bar{X}_i = n^{-1} \sum_{j=1}^n X_{ij}$. The sample variance matrix, also called the covariance matrix or the variance-covariance matrix, is
$$S = \begin{bmatrix} s_{11} & s_{12} & \dots & s_{1k} \\ s_{12} & s_{22} & \dots & s_{2k} \\ \vdots & \vdots & \ddots & \vdots \\ s_{1k} & s_{2k} & \dots & s_{kk} \end{bmatrix} \quad (14.4)$$
where
$$s_{ab} = \frac{1}{n-1} \sum_{j=1}^n (X_{aj} - \bar{X}_a)(X_{bj} - \bar{X}_b).$$
It follows that $E(\bar{X}) = \mu$ and $E(S) = \Sigma$.

**14.2 Estimating the Correlation**

Consider $n$ data points from a bivariate distribution:
$$\begin{pmatrix} X_{11} \\ X_{21} \end{pmatrix}, \begin{pmatrix} X_{12} \\ X_{22} \end{pmatrix}, \dots, \begin{pmatrix} X_{1n} \\ X_{2n} \end{pmatrix}.$$

Recall that the correlation between $X_1$ and $X_2$ is
$$\rho = \frac{E((X_1 - \mu_1)(X_2 - \mu_2))}{\sigma_1 \sigma_2} \quad (14.5)$$
where $\sigma_j^2 = V(X_j), j = 1, 2$. The nonparametric plug-in estimator is the sample correlation$^1$
$$\hat{\rho} = \frac{\sum_{i=1}^n (X_{1i} - \bar{X}_1)(X_{2i} - \bar{X}_2)}{s_1 s_2} \quad (14.6)$$
where
$$s_j^2 = \frac{1}{n-1} \sum_{i=1}^n (X_{ji} - \bar{X}_j)^2.$$

We can construct a confidence interval for $\rho$ by applying the delta method. However, it turns out that we get a more accurate confidence interval by first constructing a confidence interval for a function $\theta = f(\rho)$ and then applying...

---
$^1$More precisely, the plug-in estimator has $n$ rather than $n-1$ in the formula for $s_j$ but this difference is small.

### Visual Description
Text-only slide. Continuation of the textbook scan, focusing on the sample variance matrix and the estimation of correlation in bivariate distributions.

---

## Page 47
### Content
234 14. Multivariate Models

the inverse function $f^{-1}$. The method, due to Fisher, is as follows: Define $f$ and its inverse by
$$f(r) = \frac{1}{2} (\log(1+r) - \log(1-r))$$
$$f^{-1}(z) = \frac{e^{2z} - 1}{e^{2z} + 1}.$$

> **Approximate Confidence Interval for The Correlation**
> 1. Compute
>    $$\hat{\theta} = f(\hat{\rho}) = \frac{1}{2} (\log(1+\hat{\rho}) - \log(1-\hat{\rho})).$$
> 2. Compute the approximate standard error of $\hat{\theta}$ which can be shown to be
>    $$\widehat{se}(\hat{\theta}) = \frac{1}{\sqrt{n-3}}.$$
> 3. An approximate $1 - \alpha$ confidence interval for $\theta = f(\rho)$ is
>    $
## Page 49
### Content
14.4 Multinomial 235

**14.2 Theorem.** *The following properties hold:*
1. *If $Z \sim N(0, I)$ and $X = \mu + \Sigma^{1/2}Z$, then $X \sim N(\mu, \Sigma)$.*
2. *If $X \sim N(\mu, \Sigma)$, then $\Sigma^{-1/2}(X - \mu) \sim N(0, I)$.*
3. *If $X \sim N(\mu, \Sigma)$ and $a$ is a vector of the same length as $X$, then $a^T X \sim N(a^T \mu, a^T \Sigma a)$.*
4. *Let*
$$V = (X - \mu)^T \Sigma^{-1} (X - \mu).$$
*Then $V \sim \chi^2_k$.*

**14.3 Theorem.** *Given a random sample of size $n$ from a $N(\mu, \Sigma)$, the log-likelihood is (up to a constant not depending on $\mu$ or $\Sigma$) given by*
$$\ell(\mu, \Sigma) = -\frac{n}{2}(\bar{X} - \mu)^T \Sigma^{-1} (\bar{X} - \mu) - \frac{n}{2} \text{tr}(\Sigma^{-1} S) - \frac{n}{2} \log |\Sigma|.$$
*The MLE is*
$$\hat{\mu} = \bar{X} \quad \text{and} \quad \hat{\Sigma} = \left( \frac{n-1}{n} \right) S. \quad (14.8)$$

### 14.4 Multinomial
Let us now review the Multinomial distribution. The data take the form $X = (X_1, \dots, X_k)$ where each $X_j$ is a count. Think of drawing $n$ balls (with replacement) from an urn which has balls with $k$ different colors. In this case, $X_j$ is the number of balls of the $j$th color. Let $p = (p_1, \dots, p_k)$ where $p_j \ge 0$ and $\sum_{j=1}^k p_j = 1$ and suppose that $p_j$ is the probability of drawing a ball of color $j$.

**14.4 Theorem.** *Let $X \sim \text{Multinomial}(n, p)$. Then the marginal distribution of $X_j$ is $X_j \sim \text{Binomial}(n, p_j)$. The mean and variance of $X$ are*
$$\mathbb{E}(X) = \begin{pmatrix} np_1 \\ \vdots \\ np_k \end{pmatrix}$$
*and*
$$\mathbb{V}(X) = \begin{pmatrix} np_1(1 - p_1) & -np_1p_2 & \dots & -np_1p_k \\ -np_1p_2 & np_2(1 - p_2) & \dots & -np_2p_k \\ \vdots & \vdots & \ddots & \vdots \\ -np_1p_k & -np_2p_k & \dots & np_k(1 - p_k) \end{pmatrix}.$$

### Visual Description
Text-only slide.

---
## Page 50
### Content
Multivariate case: let $Y_n = (Y_{n1}, \dots, Y_{nk})^T$ be a sequence of random vectors and $g : \mathbb{R}^k \mapsto \mathbb{R}$ be a differentiable function with derivative
$$\nabla g(y) = \begin{pmatrix} \frac{\partial g}{\partial y_1} \\ \frac{\partial g}{\partial y_2} \\ \vdots \\ \frac{\partial g}{\partial y_k} \end{pmatrix}.$$

If
$$\sqrt{n}(Y_n - \mu) \rightsquigarrow N(0, \Sigma)$$
then
$$\sqrt{n}(g(Y_n) - g(\mu)) \rightsquigarrow N(0, [\nabla g(\mu)]^T \Sigma [\nabla g(\mu)]),$$

### Visual Description
Handwritten-style text on a light gray grid background.

---
## Page 51
### Content
**Example :** Let $X_n = \begin{pmatrix} X_{n1} \\ X_{n2} \end{pmatrix}$ be iid bivariate random variables with mean $\mu = \begin{pmatrix} \mu_1 \\ \mu_2 \end{pmatrix}$ and covariance $\Sigma$. By the multivariate CLT,
$$\sqrt{n} \begin{pmatrix} \bar{X}_{\cdot 1} - \mu_1 \\ \bar{X}_{\cdot 2} - \mu_2 \end{pmatrix} \rightsquigarrow N(0, \Sigma).$$

Let $Y_n = \bar{X}_{\cdot 1} \bar{X}_{\cdot 2}$, that is $Y_n = g(\bar{X}_{\cdot 1}, \bar{X}_{\cdot 2})$ with $g(s_1, s_2) = s_1 s_2$.

Then $\mathbb{E}(Y_n) = g(\mu) = \mu_1 \mu_2$, $\nabla g(s) = \begin{pmatrix} \frac{\partial g}{\partial s_1} \\ \frac{\partial g}{\partial s_2} \end{pmatrix} = \begin{pmatrix} s_2 \\ s_1 \end{pmatrix}$,
and
$$\nabla g(\mu)^T \Sigma \nabla g(\mu) = (\mu_2, \mu_1) \begin{pmatrix} \sigma_{11} & \sigma_{12} \\ \sigma_{21} & \sigma_{22} \end{pmatrix} \begin{pmatrix} \mu_2 \\ \mu_1 \end{pmatrix} = \mu_2^2 \sigma_{11} + 2\mu_1 \mu_2 \sigma_{12} + \mu_1^2 \sigma_{22}.$$

By the Multivariate Delta Method,
$$\sqrt{n}(\bar{X}_{\cdot 1} \bar{X}_{\cdot 2} - \mu_1 \mu_2) \rightsquigarrow N(0, \mu_2^2 \sigma_{11} + 2\mu_1 \mu_2 \sigma_{12} + \mu_1^2 \sigma_{22}).$$

### Visual Description
Handwritten-style text on a light gray grid background.

---
## Page 52
### Content
432 List of Symbols

#### Convergence Symbols
*   $\xrightarrow{P}$ : convergence in probability
*   $\rightsquigarrow$ : convergence in distribution
*   $\xrightarrow{qm}$ : convergence in quadratic mean
*   $X_n \approx N(\mu, \sigma_n^2)$ : $(X_n - \mu)/\sigma_n \rightsquigarrow N(0, 1)$
*   $x_n = o(a_n)$ : $x_n/a_n \to 0$
*   $x_n = O(a_n)$ : $|x_n/a_n|$ is bounded for large $n$
*   $X_n = o_P(a_n)$ : $X_n/a_n \xrightarrow{P} 0$
*   $X_n = O_P(a_n)$ : $|X_n/a_n|$ is bounded in probability for large $n$

#### Statistical Models
*   $\mathfrak{F}$ : statistical model; a set of distribution functions, density functions or regression functions
*   $\theta$ : parameter
*   $\hat{\theta}$ : estimate of parameter
*   $T(F)$ : statistical functional (the mean, for example)
*   $\mathcal{L}_n(\theta)$ : likelihood function

#### Useful Math Facts
*   $e^x = \sum_{k=0}^\infty \frac{x^k}{k!} = 1 + x + \frac{x^2}{2!} + \dots$
*   $\sum_{j=k}^\infty r^j = \frac{r^k}{1-r}$ for $0 < r < 1$
*   $\lim_{n \to \infty} (1 + \frac{a}{n})^n = e^a$
*   Stirling's approximation: $n! \approx n^n e^{-n} \sqrt{2\pi n}$
*   THE GAMMA FUNCTION. The Gamma function is defined by
$$\Gamma(\alpha) = \int_0^\infty y^{\alpha-1} e^{-y} dy$$
for $\alpha \ge 0$. If $\alpha > 1$ then $\Gamma(\alpha) = (\alpha - 1)\Gamma(\alpha - 1)$. If $n$ is a positive integer then $\Gamma(n) = (n - 1)!$. Some special values are: $\Gamma(1) = 1$ and $\Gamma(1/2) = \sqrt{\pi}$.

[From AOS]

### Visual Description
Text-only slide. This appears to be a scanned page from a textbook (likely "All of Statistics" by Larry Wasserman), with a blue handwritten note "[From AOS]" in the top left corner.

---
## Page 53
### Content
# 36-700: Homework Set 4
Extended Due Date to Monday September 29 at 6 pm
Submit on Gradescope

1. Suppose that $X \sim F$ (some unspecified distribution) and that $\mathbb{E}[X] = \mu$ and $\text{Var}[X] = \sigma^2$. Suppose, further, that $\sigma \le 5$. We draw $n$ iid samples $X_1, \dots, X_n \sim F$.
    (a) How large should the sample size $n$ be so that with probability at least 0.90, the sample average satisfies $|\bar{X}_n - \mu| \le 2$?
    (b) Now suppose that $|X| \le 5$. How large should the sample size $n$ be so that with probability at least 0.95, the sample average satisfies $|\bar{X}_n - \mu| \le 2$?

2. Construct a random variable $X$ for which Chebyshev's inequality is tight, that is, $\mathbb{P}(|X - \mu| > t) = \sigma^2/t^2$.

3. **CLT:** A Binomial RV is the sum of independent Bernoullis and is thus well approximated by a Gaussian by the central limit theorem. We will use this to perform a rudimentary hypothesis test.
    We believe a coin is fair and toss it 100 times. It lands heads up 60 times. Use moment matching (or the CLT) to approximate the probability $\mathbb{P}(X \ge 60)$ assuming the coin is fair in terms of the standard Gaussian CDF.
    Use R (or any package you prefer) to give a numerical value. Roughly, our intuition is that if this value is small then we should be "suspicious" of our initial hypothesis that the coin is fair. Are you suspicious?
    (Include your code in your submission.)

4. **Confidence Intervals:** Suppose that $X_1, \dots, X_n$ are repeated measurements of a quantity $\mu$, and that $\mathbb{E}[X_i] = \mu$, and $\text{Var}(X_i) = \sigma^2$. Further, let us suppose that $X_i \in [0, 1]$. Let $\bar{X}_n$ denote the average of the measurements.
    (a) Use the fact that $X_i \in [0, 1]$ to give some bounds on $\mu$ and $\sigma$.
    (b) Suppose that we take 16 measurements and that $\sigma^2 = \frac{1}{12}$. Use the CLT to approximate the probability that $\bar{X}_n$ deviates from $\mu$ by more than 0.5.
    (c) Use Chebyshev's inequality to give an upper bound on the same quantity.
    (d) Repeat the above calculation but now use Mill's and Hoeffding's inequalities.
    (e) Now use R (or any package you prefer) to estimate this probability in the following way. Suppose that each $X_i$ is $U[0, 1]$. The mean is 0.5 and the variance is exactly 1/12. Draw 16 measurements and track if the sample mean is within 0.5 of the true mean. Repeat this 1000 times to get an accurate estimate.
    Compare the answer to what you obtained analytically.

### Visual Description
Text-only slide. This is a homework assignment sheet.

---
## Page 54
### Content
Particularly, order the intervals by their coverage.
(Include your code in your submission)

5. **Approximating distributions:** The Poisson distribution with parameter $\lambda$, has pmf:
$$\mathbb{P}(X = k) = \frac{\exp(-\lambda)\lambda^k}{k!}.$$
For large values of $\lambda$, the Poisson distribution is well approximated by a Gaussian distribution.
    (a) Use moment matching to find the Gaussian that best approximates a $\text{Poi}(\lambda)$ distribution. In other words, we can use $N(\mu, \sigma^2)$ to approximate the Poisson, and we choose $\mu$ and $\sigma^2$ to match the mean and variance of the Poisson.
    (b) Suppose that we have a system that emits a random variable $X$ particles according to a Poisson distribution with mean $\lambda = 900$ per hour. Use the above approximation to calculate the probability $\mathbb{P}(X > 950)$. You should express this in terms of an appropriate standard Gaussian quantile, i.e., express your answer in terms of the function $\Phi(z) = \mathbb{P}(Z \le z)$ where $Z$ has a standard normal distribution.
    (c) Use R (or any package you prefer) to compute the value of $\mathbb{P}(X > 950)$, approximately using the Gaussian quantile and exactly using the Poisson CDF. There are built-in functions in R for each of these computations.
    (Include your code in your submission)

6. **Convergence I:** In lecture we will show that convergence in quadratic mean implies convergence in probability. Suppose we have a sequence $X_1, \dots, X_n$. Fix $a > 0$. Show that if $\mathbb{E}|X_n - X|^a \to 0$ then $X_n$ converges to $X$ in probability.

7. **Convergence II:** Show that the following RVs converge in probability to 1.
    (a) $Y_n = 1 + nX_n$ where $X_n \sim \text{Ber}(1/n)$.
    (b) $Y_n = \frac{1}{n} \sum_{i=1}^n X_i^2$ where $X_i \sim N(0, 1)$.

8. **Convergence III:** (Order statistic) Wasserman Exercise 5.13 on page 84

### Visual Description
Text-only slide. This is the second page of the homework assignment sheet.

---==End of PDF==
