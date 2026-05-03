# 10-715 Lesson: Linear Classifiers, SVMs, And Kernels

Source note: Based on the 10-715 processed lecture notes for perceptrons, linear SVMs, kernel methods, and the representer/Mercer theorem proofs. Ingested on 2026-05-03.

## Table of Contents

- [Why This Block Matters](#why-this-block-matters)
- [Perceptrons](#perceptrons)
- [The Mistake-Bound Proof Shape](#the-mistake-bound-proof-shape)
- [Why Perceptrons Are Not Enough](#why-perceptrons-are-not-enough)
- [Support Vector Machines](#support-vector-machines)
- [The Dual And Support Vectors](#the-dual-and-support-vectors)
- [Kernels](#kernels)
- [What To Remember](#what-to-remember)
- [Quick Check](#quick-check)

## Why This Block Matters

The perceptron, SVM, and kernel sequence is a compact introduction to how 10-715 thinks.

The perceptron gives a simple algorithm and a clean convergence proof under separability. SVMs turn the same linear-separation setting into margin maximization and convex optimization. Kernels keep the linear-algebra machinery but let the model behave nonlinearly in the original input space.

So the block teaches three durable ideas:

- geometry of classification,
- optimization formulations,
- representation through feature maps.

## Perceptrons

For binary classification, a linear classifier predicts

$$
h_{w,b}(x) = \mathrm{sign}(\langle w,x\rangle + b).
$$

The perceptron starts with $w=0$ and $b=0$. Whenever it finds a misclassified example, meaning

$$
y_i(\langle w,x_i\rangle + b) \le 0,
$$

it updates

$$
w \leftarrow w + y_i x_i,\quad b \leftarrow b + y_i.
$$

The update has a simple intuition: move the hyperplane parameters in a direction that increases the score of the misclassified point under its correct label.

## The Mistake-Bound Proof Shape

The perceptron theorem says that if the data are linearly separable with margin $\gamma$, the algorithm stops after a bounded number of mistakes. The proof has two forces.

First, progress toward the true separator grows at least linearly. If $(w^*, b^*)$ is a good separating direction, then each mistaken update increases alignment with it by at least $\gamma$:

$$
\langle [w^*, b^*], [w^{(T+1)}, b^{(T+1)}]\rangle \ge \gamma T.
$$

Second, the norm of the learned parameter vector grows only like $\sqrt{T}$:

$$
\|[w^{(T+1)}, b^{(T+1)}]\|_2 \le \sqrt{T(R^2+1)}.
$$

Cauchy-Schwarz says alignment cannot exceed the product of the norms. Linear growth cannot stay below square-root growth forever, so $T$ must be bounded.

This proof shape appears often in ML: show progress, control size, combine with an inequality.

## Why Perceptrons Are Not Enough

Perceptrons fail when the data are not linearly separable. XOR is the classic example: no single line can separate the positive and negative corners.

Even when data are linearly separable, the perceptron does not necessarily choose the "best" separator. It finds some separator, not necessarily the largest-margin one.

These two limitations motivate the next steps:

- SVMs ask for the best linear separator by maximizing margin.
- Kernels and neural networks address nonlinear separability.

## Support Vector Machines

The hard-margin SVM starts from a geometric idea: among all separating hyperplanes, choose the one with maximum margin.

For a normalized hyperplane, the distance from $x$ to the hyperplane is tied to $|w^\top x + b|$. The hard-margin SVM can be written as

$$
\min_{w,b} \frac{1}{2}\|w\|_2^2
$$

subject to

$$
y_i(w^\top x_i+b) \ge 1 \quad \forall i.
$$

The objective may look backwards at first. Why minimize $\|w\|$ when we want a large margin? Because after fixing the functional-margin constraints at 1, a smaller $\|w\|$ means a larger geometric margin.

The SVM is important because it converts a geometric learning goal into a convex optimization problem.

## The Dual And Support Vectors

The Lagrangian introduces nonnegative multipliers $\alpha_i$ for the constraints:

$$
\mathcal{L}(w,b,\alpha)
= \frac{1}{2}\|w\|_2^2 + \sum_{i=1}^n \alpha_i(1-y_i(w^\top x_i+b)).
$$

The stationarity conditions imply

$$
w = \sum_{i=1}^n \alpha_i y_i x_i
$$

and

$$
\sum_{i=1}^n \alpha_i y_i = 0.
$$

The KKT complementarity condition says

$$
\alpha_i(y_i(w^\top x_i+b)-1)=0.
$$

If a point is not tight against the margin, then its $\alpha_i$ is zero. The only points with nonzero $\alpha_i$ are the support vectors. These are the training points that define the decision boundary.

That is the conceptual punchline: the learned classifier can depend on only a subset of the training examples.

## Kernels

Kernels let us replace ordinary dot products with dot products in a feature space:

$$
K(x,z) = \langle \phi(x), \phi(z)\rangle.
$$

The feature map $\phi$ may be high-dimensional or even infinite-dimensional, but the algorithm only needs $K(x,z)$.

This matters because the SVM dual depends on data through inner products. If we can compute a valid kernel, we can run a linear method in the feature space without explicitly constructing the feature vectors.

The intuition:

- in the original space, the data may not be linearly separable;
- after a nonlinear feature map, it may become linearly separable;
- the kernel lets the algorithm work with that transformed geometry efficiently.

The mathematical caution is that not every similarity function is a valid kernel. Valid kernels correspond to inner products in some feature space, which is why positive semidefinite kernel matrices matter.

## What To Remember

Perceptron:

- simple update rule;
- convergence under separability;
- proof by alignment growth and norm control.

SVM:

- chooses maximum-margin separator;
- convex primal;
- dual exposes support vectors.

Kernels:

- replace inner products with feature-space inner products;
- make linear algorithms nonlinear in input space;
- require valid positive semidefinite structure.

Together, these are a miniature version of the whole course: define the class, optimize a criterion, prove what you can, and understand the assumptions.

## Quick Check

1. What condition triggers a perceptron update?
2. Why does the perceptron proof compare alignment growth with norm growth?
3. Why does minimizing $\|w\|^2$ correspond to maximizing SVM margin?
4. What makes a training point a support vector?
5. Why do kernels let linear methods solve nonlinear-looking problems?
