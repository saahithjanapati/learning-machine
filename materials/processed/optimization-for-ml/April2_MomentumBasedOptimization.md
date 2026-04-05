# April2_MomentumBasedOptimization

Source: `materials/archive/April2_MomentumBasedOptimization.pdf`
Duplicate equivalents: `April2_MomentumBasedOptimization.pdf`
Extraction engine: `Gemini API (gemini-2.5-flash) + Local PyMuPDF (fitz fallback)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `FALLBACK`
Pages: 47

## Page 1
### Content
1
Optimization for 
Machine Learning
Barnabas Poczos
bapoczos@cs.cmu.edu
Adaptive and Momentum based 
Optimization Methods

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 2
### Content
2
Gradient Descent

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 3
### Content
3
Fixed step size can be too big

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 4
### Content
4
Fixed step size can be too small

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 5
### Content
5
Gradient descent: 
Vanilla gradient descent, aka batch gradient descent (GD), computes the 
gradient of the cost function w.r.t. to the parameters for the entire training 
dataset:
Sum of loss functions, 
Empirical Risk Minimization

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 6
### Content
6
Batch gradient descent (GD)

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 7
### Content
7
Stochastic gradient descent (SGD)

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 8
### Content
8
Momentum Based Methods

### Visual Description
Text extraction fallback; original layout not preserved.

---
## Page 9
### Content
9
Polyak’s Momentum method
Source: Genevieve B. Orr
❑SGD has trouble navigating areas where the surface curves much 
more steeply in one dimension than in another. 
❑Momentum method dampens the oscillation by adding a fraction of 
the update vector of the past time step to the current update vector
❑In these scenarios, SGD oscillates across the slopes making only 
slow progress toward the optimum.

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 10
### Content
10
Polyak’s Momentum method
The update rules can be rewritten:

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 11
### Content
11
Polyak ‘64
Polyak Momentum method
A cheap way to potentially improve gradient descent
Polyak momentum
Also known as the heavy ball method
Intuition:

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 12
### Content
12
Nesterov’s Accelerated Gradient (NAG)
Momentum method:
NAG method [Nesterov ’83]
Source: Hinton’s lecture
Momentum 
update:
NAG update:

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 13
### Content
13
Nesterov’s Accelerated Gradient (NAG)
A “look-ahead” variant of Polyak’s momentum
evaluate gradient at a 
“look-ahead” point

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 14
### Content
14
Nesterov’s Accelerated Gradient (NAG)

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 15
### Content
15
Convergence Rate of NAG
Theorem [NAG convergence rate, convex case]

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 16
### Content
16
Convergence Rate of NAG
Theorem [NAG convergence rate, strongly convex case]

### Visual Description
Text extraction fallback; original layout not preserved.

---
## Page 17
### Content
17
▪
Ward, Wu, Bottou, 2020, AdaGrad stepsizes: sharp 
convergence over nonconvex landscapes, from any 
initialization, https://arxiv.org/abs/1806.01811
▪
J. Duchi, E. Hazan, and Y. Singer. Adaptive subgradient 
methods for online learning and stochastic optimization, 
2011, https://jmlr.org/papers/v12/duchi11a.html
AdaGrad

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 18
### Content
Issue with Gradient Based Methods
What can we do?
Try to use second-order derivatives! (Hessian matrix)
Issue: The gradient might be the same despite varying curvature
18

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 19
### Content
Newton’s Method
Newton’s method uses second order information to estimate the 
curvature of the function being minimized (i.e., the ERM objective)
Gradient descent
Newton’s method
▪
Newton’s method can significantly reduce number of iterations needed 
for convergence 
▪
However, comes at a cost: need to invert k×k matrix → O(k3)
often too expensive for neural networks (k can be in the millions)
19

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 20
### Content
Newton’s Method
Newton’s method
20

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 21
### Content
Gradient Descent vs Newton’s Method
Newton’s method uses second-order information to estimate the 
curvature of the function being minimized.
Gradient descent
Newton’s method
21

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 22
### Content
Gradient Descent vs Newton’s Method
22
GD
Newton

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 23
### Content
Gradient Descent vs Newton’s Method
Newton-step makes more progress
Gradient-step
23

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 24
### Content
24
AdaGrad
Newton’s method
AdaGrad ideas:

### Visual Description
Text extraction fallback; original layout not preserved.

---
## Page 25
### Content
25
AdaGrad, Duchi et al, 2011
What matrix should we use?
Based on these, the AdaGrad update rule is:

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 26
### Content
26
AdaGrad, Duchi et al, 2011
▪
A cheap “approximation” of the Hessian: only estimates the diagonal 
elements
▪
Enforces a separate step size / learning rate for every coordinate of 
the weight vector
▪
Decreases the step size for coordinates with high gradient magnitudes
▪
Motivation: When the model is large, there might be high variability 
across the coordinates, so it makes sense to use different learning rates for 
them.

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 27
### Content
27
AdaGrad – Stochastic Gradient Version
AdaGrad is often used combined with stochastic gradient
For example,

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 28
### Content
28
AdaGrad – Stochastic Gradient Version

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 29
### Content
29
AdaGrad Diagonal and Full Matrix Versions
Diagonal Version
Full Matrix Version

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 30
### Content
30
Nonconvex AdaGrad 
(Stochastic Setting)
Theorem: AdaGrad convergence
Theorem:
Proof: https://proceedings.mlr.press/v97/ward19a/ward19a.pdf
Note:

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 31
### Content
31
AdaGrad's main weakness is its accumulation of the squared gradients in 
the inverse of matrix H: 
▪
Since every added term is positive, the accumulated sum keeps 
growing during training. 
▪
This in turn causes the step size (the inverse of H) to shrink and 
eventually become infinitesimally small.
▪
Therefore, the step size can become very small in some directions.
An Issue with AdaGrad

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 32
### Content
32
RMSprop and AdaDelta
RMSProp and AdaDelta: 
a solution to Adagrad’s too aggressively decreasing learning rate. 
Use a moving average instead of the full sum!
AdaDelta: Zeiler, 2012, https://arxiv.org/pdf/1212.5701.pdf
AdaGrad:
We now simply replace the sum of squares of gradients in 
AdaGrad with the decaying running average
It puts more emphasis on the current gradients than the gradient history

### Visual Description
Text extraction fallback; original layout not preserved.

---
## Page 33
### Content
33
RMSprop and AdaDelta
Variant 1 (RMSprop): [ = Root Mean Square Propagation]
Variant 2 (AdaDelta):
Motivation: 
▪
The update in RMSprop is unitless, which is wrong…
▪
In Newton’s method:
Newton’s method has 
the correct dimension!

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 34
### Content
34
RMSprop and AdaDelta
Variant 1 (RMSprop): [ = Root Mean Square Propagation]
Variant 2 (AdaDelta):
Let’s fix the dimensions!

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 35
### Content
35
Adam [Adaptive Moment estimation]
Bias correction:
Update rule:
Adam: https://arxiv.org/abs/1412.6980
Momentum update
RMSprop update
Adam = Momentum + RMSprop
Proof: [Next slide]

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 36
### Content
36
Adam [Adaptive Moment estimation]

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 37
### Content
37
Adam = Adaptive moment estimation
▪
Combines momentum and RMSprop
▪
Default choice in most DL frameworks
▪
However, does not converge (even for simple convex problems) 
without modifications [see HW4]
Adam summary

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 38
### Content
38
Results on Toy Problems

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 39
### Content
39
Nonadaptive algos really struggle: SGD gets no where and NAG / Momentum 
exhibits oscillations until they build up velocity in the optimization direction. 
Image credit: http://sebastianruder.com/optimizing-gradient-descent/
SGD optimization on saddle point
https://imgur.com/a/Hqolp

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 40
### Content
40
Adaptive methods (i.e. Adagrad, Adadelta, RMSprop, and Adam) can break 
symmetry and are the most suitable and provide the best convergence for 
these scenarios.
Image credit: http://sebastianruder.com/optimizing-gradient-descent/
SGD optimization on saddle point
https://imgur.com/a/Hqolp

### Visual Description
Text extraction fallback; original layout not preserved.

---
## Page 41
### Content
41
Beale’s function 
Beale’s function: nonconvex, high variability in terms of gradients

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 42
### Content
42
Due to the large initial gradient, velocity-based techniques shoot off and 
bounce around. adaGrad is unstable for the same reason. adaDelta and 
RMSprop are the best
Beale’s function
Image credit: http://sebastianruder.com/optimizing-gradient-descent/

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 43
### Content
43
https://github.com/bapoczos/ScalableML/blob/master/optimization
/Pytorch_MinimizationDemo_110.ipynb
Pytorch Demo

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 44
### Content
44
https://github.com/bapoczos/ScalableML/blob/master/optimization
/Pytorch_MinimizationDemo_110.ipynb
Pytorch Demo

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 45
### Content
Performance on DL benchmarks
“Adam: A Method for Stochastic Optimization”, Kingma & Ba, ICLR 2015
45

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 46
### Content
Are these Actually Helpful?
▪
“The Marginal Value of Adaptive Gradient Methods in Machine Learning”, 
Wilson et al., NeurIPS 2017
▪
Performance can particularly drop for test error 
(i.e., what we actually care about!)
46

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 47
### Content
47
Thanks for your attention!

### Visual Description
Text extraction fallback; original layout not preserved.

---
