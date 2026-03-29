# Homework 1: Introduction of Graphical Models and Exact Inference

Source: `materials/archive/S2610708_HW1_Final_prob_graph_model.pdf`
Duplicate equivalents: `S2610708_HW1_Final_prob_graph_model.pdf`
Extraction engine: `Local PyMuPDF text extraction (fitz)`
Strategy: `full-PDF page-wise text extraction`
Finish reason: `COMPLETE`
Pages: 23
## Page 1
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708
HOMEWORK 1
INTRODUCTION OF GRAPHICAL MODELS AND EXACT
INFERENCE 1
10-708 PROBABILISTIC GRAPHICAL MODELS (SPRING 2026)
https://piazza.com/cmu/spring2026/10708
OUT: Jan. 28th, 2026
DUE: Feb. 11th, 2026 11:59 PM ET
TAs: Nupoor Gandhi, Aviv Bick, Kadin Zhang
START HERE: Instructions
Summary
In this assignment, you will explore the distributions captured by directed graphical models
(Bayesian Networks), undirected graphical Models (MRFs / CRFs), and factor graphs as well as variable
elimination.
• Collaboration policy: The purpose of student collaboration is to facilitate learning, not to circum-
vent it. Studying the material in groups is strongly encouraged. It is also allowed to seek help from
other students in understanding the material needed to solve a particular homework problem, pro-
vided no written notes (including code) are shared, or are taken at that time, and provided learn-
ing is facilitated, not circumvented. The actual solution must be done by each student alone. The
presence or absence of any form of help or collaboration, whether given or received, must be ex-
plicitly stated and disclosed in full by all involved.
See the Academic Integrity Section on the
course site for more information: https://andrejristeski.github.io/10708F25/#:
~:text=Academic%20Integrity%20Policies
• Late Submission Policy: See the late submission policy here: https://andrejristeski.
github.io/10708F25/#:~:text=Grace%20Day/Late%20Homework%20Policy
• Submitting your work to Gradescope: We use Gradescope (https://www.gradescope.
com/courses/1099460/assignments) to collect PDF submissions of open-ended questions
on the homework (e.g. mathematical derivations, plots, short answers). The course staff will man-
ually grade your submission, and you’ll receive personalized feedback explaining your final marks.
The homework template must be used and can be completed in Latex or by hand. Handwritten sub-
missions must be legible otherwise we will not be able to give credit to your solutions. No changes
should be made to the template, boxes and choices MUST remain the same size and in the same
locations between the template and your completed submission, the document has 23 pages so your
submission must contain no more and no less than 23 pages.
For multiple choice or select all that apply questions, shade in the box or circle in the template document
corresponding to the correct answer(s) for each of the questions. For LATEX users, replace \choice with
\CorrectChoice to obtain a shaded box/circle, and don’t change anything else.
1Compiled on Thursday 12th February, 2026 at 01:27
1 of 23

---

## Page 2
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708
Instructions for Specific Problem Types
For “Select One" questions, please fill in the appropriate bubble completely:
1. Select One: Who taught this course?
Andrej Risteski
⃝Marie Curie
⃝Noam Chomsky
If you need to change your answer, you may cross out the previous answer and bubble in the new answer:
2. Select One: Who taught this course?
Andrej Risteski
⃝Marie Curie
@@ Noam Chomsky
For “Select all that apply" questions, please fill in all appropriate squares completely:
3. Select all that apply: Which are scientists?
■Stephen Hawking
■Albert Einstein
■Isaac Newton
2 I don’t know
Again, if you need to change your answer, you may cross out the previous answer(s) and bubble in the new
answer(s):
4. Select all that apply: Which are scientists?
■Stephen Hawking
■Albert Einstein
■Isaac Newton
@
@
■I don’t know
For questions where you must fill in a blank, please make sure your final answer is fully included in the
given space. You may cross out answers or parts of answers, but the final answer must still be within the
given space.
5. Fill in the blank: What is the course number?
10-708
10-
SS9708
2 of 23

---

## Page 3
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708
1
Written Questions [105 pts]
Answer the following questions in the template provided. Then upload your solutions to Gradescope. You
may use LATEX or print the template and hand-write your answers then scan it in. Failure to use the template
may result in a penalty. There are 105 points and 14 questions.
1. Consider an undirected graphical model shown in 1.1. This model structure looks as follows:
A
B
C
D
F
E
H
I
G
J
Figure 1.1: Undirected Graphical Model
For this model structure, answer the following questions:
(a) (2 points) Factorize the joint distribution P(A, B, C, D, E, F, G, H, I, J) according to the undi-
rected graph in Figure 1.1.
The joint distribution factorizes over the maximal cliques of the graph:
P(A, . . . , J) = 1
Z
 
ψABCD(A, B, C, D) · ψCDF (C, D, F) · ψBDE(B, D, E)
· ψEGI(E, G, I) · ψGHI(G, H, I) · ψAH(A, H) · ψBJ(B, J)
!
(b) (1 point) Is A ⊥J | B?
True
⃝False
(c) (1 point) Is A ⊥E | (C, B, D)?
⃝True
False
(d) (1 point) Is B ⊥G | (C, D, E, J)?
⃝True
False
(e) (1 point) Is F ⊥H | (A, D, G)?
3 of 23

---

## Page 4
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708
⃝True
False
(f) (2 points) Which nodes are present in the Markov blanket of C?
{A, B, D, F}
(g) (2 points) Which nodes are present in the Markov blanket of B?
{A, C, D, E, J}
4 of 23

---

## Page 5
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708
2. Consider the Bayesian Network described in Figure 1.2
A
B
D
E
C
F
G
H
Figure 1.2: Bayesian Network Structure
Based on this network structure, answer the following questions:
(a) (2 points) Factorize the joint distribution P(A, B, C, D, E, F, G, H) according to the directed
graph in Figure 1.2.
P(A, B, C, D, E, F, G, H) = P(A) P(B | A) P(H | A) P(C | B) P(E | B, H)
× P(G | H) P(D | B, C, E) P(F | C, D, G).
(b) (1 point) Is A ⊥F | (B, C, D, E, H)?
True
⃝False
(c) (1 point) Is F ⊥D | G?
⃝True
False
(d) (1 point) Is A ⊥E | (B, H)?
True
⃝False
(e) (1 point) Is P(C|E, B, F, G) = P(C|B, F, G) or equivalently is C ⊥E | B, F, G?
⃝True
False
(f) (2 points) Which nodes are present in the Markov blanket of G?
{H, F, C, D}
(g) (2 points) Which nodes are present in the Markov blanket of D?
5 of 23

---

## Page 6
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708
{B, C, E, F, G}
(h) (2 points) Draw the undirected moralized graph of the Bayesian network.
A
B
D
E
C
F
G
H
6 of 23

---

## Page 7
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708
3. (Properties of probability distances and correlations) In this problem, we will show a few properties
of KL divergence and different notions of dependence (covariance and mutual information) which we
mentioned in class, but didn’t formally prove.
(a) (5 points) As mentioned in class, KL divergence does not satisfy the triangle inequality — even
for simple distributions like univariate Gaussians. Show the following claim: you can choose
variances σ2
1, σ2
2, σ2
3, such that the distributions p = N(0, σ2
1), q = N(0, σ2
2), r = N(0, σ2
3) violate
the triangle inequality, that is:
KL(p, r) > KL(p, q) + KL(q, r)
For 1D zero-mean Gaussians there is a closed form:
KLN (0, σ2
a) || N (0, σ2
b )
=
1
2

σ2
a
σ2
b
−1 −ln

σ2
a
σ2
b



.
I’ll pick some simple variances:
σ2
1 = 1,
σ2
2 = 2,
σ2
3 = 4
so p = N (0, 1), q = N (0, 2), r = N (0, 4).
Compute each KL:
KL(p, q) =
1
2
 1
2
−1 −ln
 1
2

=
1
2

−
1
2
+ ln 2

= −
1
4
+
1
2
ln 2.
KL(q, r) =
1
2
 2
4
−1 −ln
 2
4

=
1
2

−
1
2
+ ln 2

= −
1
4
+
1
2
ln 2.
So
KL(p, q) + KL(q, r) =

−
1
4
+
1
2
ln 2

+

−
1
4
+
1
2
ln 2

= −
1
2
+ ln 2.
Now
KL(p, r) =
1
2
 1
4
−1 −ln
 1
4

=
1
2

−
3
4
+ ln 4

=
1
2

−
3
4
+ 2 ln 2

= −
3
8
+ ln 2.
Compare them:
KL(p, r) −KL(p, q) + KL(q, r)
=

−
3
8
+ ln 2

−

−
1
2
+ ln 2

=
1
8
> 0.
Therefore KL(p, r) > KL(p, q) + KL(q, r), so KL violates triangle inequality.
(b) (8 points) (Relating covariance and mutual information) In this problem, we will show an inequal-
ity between two notions of dependence we saw in class: covariance and mutual information.
For this problem, we will assume the random variables X, Y are bounded, i.e. they take values in
a set D ⊆R, s.t. for all c ∈D, |c| ≤M.
Recall that mutual information between two random variables X, Y is defined as
I(X; Y ) := KL(pX,Y ||pX ⊗pY )
where pX,Y denotes the joint distribution of (X, Y ); pX and pY denote the marginals of X, Y
respectively; and pX ⊗pY denotes a product distribution over (X, Y ), s.t. the marginals of X, Y
are pX and pY respectively.
Recall also, the covariance of the random variables X, Y is defined as
Cov(X, Y ) := E[XY ] −E[X]E[Y ]
With this setup in place, show that:
Cov(X, Y )2 ≤2M4I(X; Y )
Other than definitions we saw in class, it will be helpful to use (you can use it without proof)
Pinsker’s inequality, which asserts that for any two distributions p, q, it holds that:
TV(p, q) ≤
r
1
2KL(p||q)
7 of 23

---

## Page 8
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708
Hint: It might be helpful to lower bound TV(pX,Y , pX ⊗pY ) in terms of Cov(X, Y ).
Let P := pX,Y be the joint distribution and let Q := pX ⊗pY be the product of marginals. Then by definition,
I(X; Y ) = KL(P||Q).
Also note that under Q, X and Y are independent but have the same marginals as in P, so
EQ[XY ] = E[X]E[Y ].
Therefore the covariance can be written as
Cov(X, Y ) = EP [XY ] −E[X]E[Y ] = EP [XY ] −EQ[XY ].
Now use boundedness: since |X| ≤M and |Y | ≤M, we have |XY | ≤M 2 always.
We use the variational form of total variation distance:
TV(P, Q) = 1
2
sup
∥h∥∞≤1
|EP [h] −EQ[h]| .
We choose the specific function h(x, y) =
xy
M2 , which satisfies ∥h∥∞≤1 because |xy| ≤M 2. Then
TV(P, Q) ≥1
2




EP
XY
M 2

−EQ
XY
M 2





=
1
2M 2 |EP [XY ] −EQ[XY ]| = |Cov(X, Y )|
2M 2
.
So this gives
|Cov(X, Y )| ≤2M 2 TV(P, Q).
Now apply Pinsker:
TV(P, Q) ≤
r
1
2KL(P||Q) =
r
1
2I(X; Y ).
Combine the two inequalities:
|Cov(X, Y )| ≤2M 2
r
1
2I(X; Y ) = M 2q
2I(X; Y ).
We square both sides:
Cov(X, Y )2 ≤2M 4I(X; Y ),
which is what we wanted.
8 of 23

---

## Page 9
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708
4. (Factor graphs) Please answer the following problems:
(a) (2 points) Convert the undirected graphical model in Figure 1.3 to the tightest factor graph.
A
B
C
D
I
J
E
F
G
H
Figure 1.3: Undirected Graphical Model
B
C
E
H
A
I
F
D
J
G
9 of 23

---

## Page 10
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708
(b) (2 points) Convert the directed graphical model in Figure 1.4 to a factor graph
A
B
C
D
E
F
Figure 1.4: Directed Graphical Model
E
F
B
C
D
A
fE
fF
fB
fC
fA
fD
(c) (2 points) Convert the factor graph in Fig 1.5 to an undirected graphical model.
A
B
C
D
E
F
G
Figure 1.5: Factor Graph
10 of 23

---

## Page 11
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708
A
B
C
D
E
F
G
(d) (2 points) Convert the factor graph in Fig 1.6 to a directed graphical model.
A
B
C
E
D
Figure 1.6: Factor Graph
11 of 23

---

## Page 12
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708
A
B
C
D
E
12 of 23

---

## Page 13
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708
5. Consider the factor graph in Figure 1.7. On paper, carry out a run of belief propagation by sending
messages first from the leaves, ψA, ψD, ψF , to the root ψB, and then from the root back to the leaves.
Then answer the questions below. Assume all messages are un-normalized. The magnitudes of your
answers can be rather large, but not larger than 10000.
A
B
C
D
E
F
ψA
ψB
ψC
ψD
ψE
ψF
ψAB
ψBC
ψDE
ψCF
ψCE
Figure 1.7
a
ψA(a)
0
2
1
2
b
ψB(b)
0
2
1
1
c
ψC(c)
0
3
1
1
d
ψD(d)
0
1
1
1
e
ψE(e)
0
1
1
1
f
ψF (f)
0
2
1
1
a
b
ψAB(a, b)
0
0
1
0
1
3
1
0
1
1
1
1
b
c
ψBC(b, c)
0
0
4
0
1
1
1
0
3
1
1
3
d
e
ψDE(d, e)
0
0
2
0
1
1
1
0
1
1
1
1
c
e
ψCE(c, e)
0
0
1
0
1
1
1
0
1
1
1
1
c
f
ψCF (c, f)
0
0
2
0
1
1
1
0
1
1
1
2
(a) (1 point) Numerical answer: What is the message from D to ψDE?
[1, 1]
(b) (1 point) Numerical answer: What is the message from ψCF to C?
[5, 4]
(c) (1 point) Numerical answer: What is the belief at variable A?
13 of 23

---

## Page 14
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708
[2990, 1850]
(d) (1 point) Numerical answer: What is the belief at variable E?
[2904, 1936]
(e) (1 point) Numerical answer: What is the belief at factor ψBC?
c = 0
c = 1
b = 0
2400
160
b = 1
1800
480
(f) (1 point) Numerical answer: What is the value of the partition function?
4840
14 of 23

---

## Page 15
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708
6. As we mentioned in class, there are a variety of heuristics for choosing the variable ordering when
performing variable elimination. Most often, we do not have guarantees on when the ordering is good
(in fact, finding the optimal ordering is NP-hard).
In this problem, we will see how the order can affect the complexity of the intermediate graphs, even
on trees. Precisely, consider an undirected pairwise graphical model, that is, an undirected graphical
model for which the potential are associated with edges or nodes of a graph G:
p(X = x) ∝exp

X
i
ϕi(xi) +
X
{i,j}∈E(G)
ϕij(xi, xj)


Furthermore assume that the graph G associated with the graphical model is a tree. (Recall, an undi-
rected tree is an undirected graph without loops, see e.g. Figure 1.8.)
(a) (4 points) Show that there exists an elimination order, s.t. after every elimination, the resulting
graphical model is still a pairwise graphical model over a tree.
A valid elimination order is obtained by repeatedly eliminating a leaf of the current tree.
Let ℓbe a leaf and let j be its unique neighbor. The only terms involving xℓare the unary potential ϕℓ(xℓ)
and the pairwise potential ϕℓj(xℓ, xj). Eliminating xℓproduces a new factor on the neighbors of ℓ, which
here is just {j}:
˜ϕj(xj) := log
X
xℓ
exp

ϕℓ(xℓ) + ϕℓj(xℓ, xj)

.
This is a unary potential on xj, so we absorb it into ϕj by setting ϕj(xj) ←ϕj(xj) + ˜ϕj(xj). Graphically,
eliminating a leaf removes ℓand the single edge {ℓ, j} and creates no fill-in edges, so the remaining graph
is still a tree. Therefore after each leaf-elimination step, the resulting model remains a pairwise graphical
model over a tree. Repeating so all variables are eliminated yields desired elimination order.
(b) (3 points) Recall, the degree of a node is the number of neighbors it has. Show that there exists a
tree, which has a node of degree r, s.t. eliminating some node results in the creation of an undi-
rected graphical model with a potential over r nodes, for all r > 0.
We any r > 0. Consider the star tree on r + 1 nodes with center node c and leaves 1, 2, . . . , r, with edges
{c, k} for k = 1, . . . , r. Then deg(c) = r.
Eliminate the center variable xc. Since the neighbors of c are exactly {1, . . . , r}, variable elimination
creates a new factor scope is all of these neighbors:
˜ϕ1:r(x1, . . . , xr) := log
X
xc
exp

ϕc(xc) +
r
X
k=1
ϕck(xc, xk)

.
This is a single potential over the r variables (x1, . . . , xr). Hence, for every r > 0, there exists a tree (the
star) with a node of degree r such that eliminating a node creates a potential over r nodes.
15 of 23

---

## Page 16
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708
7. (10 points) (D-separation) In this question we will formally prove that d-separation implies conditional
independence.
Recall the definition of d-separation: two disjoint sets of variables X, Z are said to be d-separated by
an evidence set E if and only if every (undirected) path from X to Z is “blocked” by E. A path is
“blocked” whenever any of the following hold:
• ∃Y ∈E on the path and Y is a common parent:
X
...
Y
...
Z
• ∃Y ∈E on the path and Y is in a “cascade” (in either direction):
X
...
Y
...
Z
• ∃Y on the path such that Y is a common descendant (in a v structure) and ∀˜Y
∈{Y } ∪
descendants(Y ), ˜Y ̸∈E
(i.e., None of the descendants of X and Z are observed in the evidence set E):
X
...
Y
...
Z
Y’
Suppose we have a Bayesian network described by a directed graph G = (V, E). Consider a partition
of V into three disjoint sets X, Y, Z such that X ∪Y ∪Z = V . Prove that
dsep(X, Z | Y ) =⇒X ⊥Z | Y.
Hint: think about how you could decompose the factors over X, Y, Z into separate factors over X, Y
and Z, Y .
16 of 23

---

## Page 17
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708
Let P be the distribution represented by the BN G = (V, E). Then it factorizes as
P(V ) =
Y
v∈V
P
v | Pa(v)

.
Assume V = X ⊔Y ⊔Z and dsep(X, Z | Y ). We prove X ⊥Z | Y .
Lemma. No local factor can involve variables from both X and Z. Equivalently, for every node v, the set
{v} ∪Pa(v) cannot intersect both X and Z.
Reason: Suppose some v had x ∈X and z ∈Z in {v} ∪Pa(v).
• If v ∈X (or v ∈Z), then there is an edge between v and the other set, giving a length-1 undirected
path from X to Z, which cannot be blocked by conditioning on Y .
• If v ∈Y , then we must have x, z ∈Pa(v), i.e. a v-structure x →v ←z. Since v ∈Y is observed,
this collider activates the path x −v −z.
Either way there is an active path from X to Z given Y , contradicting dsep(X, Z | Y ).
Therefore, each factor P(v | Pa(v)) depends only on variables in X ∪Y or only on variables in Z ∪Y .
Group the factors accordingly to get
P(x, y, z) =
Y
v∈V
P(v | Pa(v)) = f(x, y) g(z, y)
for some functions f and g.
Now condition on Y = y:
P(x, z | y) =
f(x, y)g(z, y)
P
x′,z′ f(x′, y)g(z′, y) =
f(x, y)
P
x′ f(x′, y) ·
g(z, y)
P
z′ g(z′, y) = P(x | y) P(z | y).
Thus X ⊥Z | Y .
■
17 of 23

---

## Page 18
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708
8. (10 points) Consider an Ising model, described by an undirected graphical model G(V, E) (V
=
{1, 2, · · · , n} and {i, j} ∈E means i, j are adjacent in G) and
p(x) ∝exp


X
i,j:{i,j}∈E
Jijxixj +
d
X
i=1
Jixi


Note that Jij ̸= 0 only if i and j are adjacent in the graph G.
Show that if the graph G is an undirected tree (i.e. has no loops, see Fig. 1.8 for an example), there
is a polynomial time algorithm that draws samples from p. You may assume that for any real-value
q ∈[0, 1], drawing a sample from a Bernoulli variable with bias q can be done in constant time (i.e.,
O(1)).
Figure 1.8: An example of an undirected tree with n = 6. Note that the question addresses general trees,
not just this specific example.
Let xi ∈{−1, +1} and define potentials
ψi(xi) = eJixi ,
ψij(xi, xj) = eJij xixj ,
so p(x) =
1
Z
Q
i ψi(xi) Q
{i,j}∈E ψij(xi, xj). Since G is a tree, pick a root r and orient edges away from r.
Upward DP (sum-product). For each directed edge i →j (parent j), define
mi→j(xj) =
X
xi∈{±1}
ψi(xi)ψij(xi, xj)
Y
k∈N(i)\{j}
mk→i(xi).
Compute messages by post-order traversal (leaves→root). Each message is just two numbers (xj = ±1), so total cost is O(P
i deg(i)) = O(|E|) = O(n).
Sample root. Using incoming messages,
p(xr) ∝ψr(xr)
Y
k∈N(r)
mk→r(xr),
so
¶(xr = +1) =
ψr(+1) Q
k mk→r(+1)
ψr(+1) Q
k mk→r(+1) + ψr(−1) Q
k mk→r(−1)
.
Sample xr via a Bernoulli draw.
Top-down sampling. For each child i of parent j (with sampled xj),
¶(xi | xj) ∝ψi(xi)ψij(xi, xj)
Y
k∈N(i)\{j}
mk→i(xi),
xi ∈{±1},
normalize the two weights to get ¶(xi = +1 | xj) and sample xi (Bernoulli). Repeat to leaves.
Correctness & runtime. On a tree, these messages are exact subtree sums, so the above produces x ∼p(x). Computing all messages is O(n) and sampling n spins is
O(n), hence a polynomial-time (indeed linear-time) exact sampler.
18 of 23

---

## Page 19
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708
9. (Hardness of inference in graphical models). Classical results show that (both approximate and exact)
inference in PGMs is #P-hard in general [1, 2].
In this question, we will guide you through two reductions, showing that the computational complexity
of calculating partition functions and marginals is essentially the same. (More results of this type will
be included in a course on computational complexity.)
We show that complexity of calculating partition functions and marginals in Ising models is comparable.
Consider random variables X = {Xs ∈{−1, 1}|s ∈{1, 2, · · · , n}} following the distribution of an
Ising model G with parameters J. Precisely, the joint distribution of the random variables is expressed
as:
p(X = x) =
1
ZG
exp

X
s∈[n]
Jsxs +
X
s̸=t∈[n]
Jstxsxt

,
(1.1)
in which ZG is the partition function. (Note, the above expression without loss of generality assumes a
complete graph; if the graph is not complete, some values Jst would be 0.)
(a) (2 points) Write down the partition function ZG for the above Ising model G.
ZG =
X
x∈{−1,1}n
exp

X
s∈[n]
Jsxs +
X
s̸=t∈[n]
Jst xsxt

.
(b) (11 points) Suppose you are given an oracle O(H) which takes as input an Ising model H and out-
put its partition function ZH in O(1) time. Given access to such an oracle O, design a polynomial-
time algorithm that calculates the marginal probability p(X1 = 1).
19 of 23

---

## Page 20
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708
To compute p(X1 = 1), write
p(X1 = 1) =
P
x2:n exp

J1 + Pn
s=2 Jsxs + P
s̸=t
s,t≥2
Jstxsxt + Pn
t=2(J1t + Jt1)xt

ZG
.
Define an Ising model H(+) on variables {2, . . . , n} with parameters
J(+)
t
:= Jt + (J1t + Jt1)
(t ≥2),
J(+)
st
:= Jst
(s ̸= t, s, t ≥2).
Then the numerator equals eJ1ZH(+), so
p(X1 = 1) = eJ1ZH(+)
ZG
.
Algorithm: query ZG ←O(G); build H(+) (poly-time); query ZH(+) ←O(H(+)); output eJ1ZH(+)
ZG
.
20 of 23

---

## Page 21
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708
(c) (16 points) Suppose you are given an oracle O′
H(i, xi) which takes as input an Ising model H, a
coordinate i ∈[n] and value xi ∈{±1}, and calculates its marginal probability p(Xi = xi) in
O(1) time. Given access to such an oracle O′, design a polynomial-time algorithm that calculates
the partition function ZG for our Ising model G.
Fix the configuration x⋆= (1, 1, . . . , 1). Then
pG(x⋆) = exp(EG(x⋆))
ZG
⇒
ZG = exp(EG(x⋆))
pG(x⋆)
,
where
EG(x) :=
X
s∈[n]
Jsxs +
X
s̸=t∈[n]
Jstxsxt,
EG(x⋆) =
X
s∈[n]
Js +
X
s̸=t∈[n]
Jst.
So it suffices to compute pG(x⋆) using marginal oracles.
By the chain rule,
pG(x⋆) =
n
Y
i=1
pG(Xi = 1 | X1 = · · · = Xi−1 = 1) .
We obtain each conditional as a marginal in a conditioned Ising model. Let H(0) := G. For i = 1, 2, . . . , n:
1. Query
qi := O′
H(i−1)(1, +1) = pH(i−1)(X1 = 1) = pG(Xi = 1 | X1 = · · · = Xi−1 = 1) .
2. Construct H(i) from H(i−1) by conditioning X1 = 1 and removing it: for each remaining variable
t ≥2,
eJt := JH(i−1)
t
+ (JH(i−1)
1t
+ JH(i−1)
t1
),
eJst := JH(i−1)
st
(s ̸= t, s, t ≥2),
and drop the conditioned node (this absorbs its interactions into the unary terms).
Let p := Qn
i=1 qi, so p = pG(x⋆). Finally output
ZG =
exp
P
s Js + P
s̸=t Jst

p
.
This uses n oracle calls and only polynomial-time model updates.
21 of 23

---

## Page 22
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708
2
Collaboration Policy
After you have completed all other components of this assignment, report your answers to the collaboration
policy questions detailed in the Academic Integrity Policies for this course.
1. Did you receive any help whatsoever from anyone in solving this assignment? If so, include full
details including names of people who helped you and the exact nature of help you received.
No.
2. Did you give any help whatsoever to anyone in solving this assignment? If so, include full details
including names of people you helped and the exact nature of help you offered.
No
3. Did you find or come across code that implements any part of this assignment? If so, include full
details including the source of the code and how you used it in the assignment.
No
22 of 23

---

## Page 23
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708
References
[1] Francisco Barahona. On the computational complexity of ising spin glass models. Journal of Physics
A: Mathematical and General, 15(10):3241, 1982.
[2] Gregory F. Cooper.
The computational complexity of probabilistic inference using bayesian belief
networks. Artificial Intelligence, 42(2):393–405, 1990.
23 of 23

---
