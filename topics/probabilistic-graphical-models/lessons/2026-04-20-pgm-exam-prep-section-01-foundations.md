# 1. Foundations and Why Graphical Models Exist

## Table of Contents

- [[#Big Picture]]
- [[#0. How To Use This Section]]
- [[#1.0 Start With the Plain-Old Probability Problem]]
- [[#1.1 Why the Full Joint Blows Up]]
- [[#1.2 What a Graphical Model Actually Is]]
- [[#1.3 Four Objects Beginners Often Confuse]]
- [[#1.4 The Three Core Jobs of the Course]]
- [[#1.5 Directed and Undirected Models: First Preview]]
- [[#1.6 Why Compact Representation Does Not Automatically Give Easy Inference]]
- [[#1.7 Vocabulary You Should Actually Know]]
- [[#1.8 What You Should Be Able To Say Out Loud]]
- [[#Formal Anchors]]
- [[#Worked Problems]]

## Big Picture

This section is trying to answer the most basic question in the whole course:

why do we need graphical models in the first place?

The answer is not “because graphs are cool.”
The answer is:

- we want to describe a probability distribution over many variables
- the full distribution is usually too big to write down naively
- so we need structure

The graph is a way of showing that structure.

If you get lost later in the course, this is the sentence to come back to:

`a graphical model is a structured way to describe a large joint probability distribution`

Everything else in the course grows out of that sentence.

## 0. How To Use This Section

Primary lecture coverage:

- `Lecture 1`

This is the floor of the entire class.

If terminology feels foreign, slow down here.
You do not need to be fast.
You need to be clear.

The goal of this section is that, by the end, you can explain in plain English:

- what a joint distribution is
- why large joint distributions are hard
- what the graph is doing
- why representation and computation are different problems

## 1.0 Start With the Plain-Old Probability Problem

Forget graphs for one minute.
Start with ordinary probability.

Suppose you have several random variables:
$$
X_1, X_2, \dots, X_d.
$$

Maybe they mean:

- whether it is raining
- whether traffic is bad
- whether you are late
- whether your professor is annoyed

Or maybe they mean pixels, words, genes, medical symptoms, or hidden latent states.

No matter what the variables mean, the mathematically complete object is the **joint distribution**
$$
p(x_1, x_2, \dots, x_d).
$$

That joint distribution tells you everything:

- the probability of every full assignment
- every marginal
- every conditional
- every correlation pattern

So the real object in the course is not “the graph.”
The real object is the probability distribution.

The graph is a tool that helps us describe and reason about that distribution.

## 1.1 Why the Full Joint Blows Up

Now the problem.

Suppose every variable has `c` possible values.
Then the full joint table has
$$
c^d
$$
entries.

That number grows exponentially in the number of variables.

If $c = 2$, then with:

- $10$ variables you have $2^{10} = 1024$ entries
- $20$ variables you have $2^{20}$ entries, already over a million
- $100$ variables you have $2^{100}$, which is absurdly large

So even though the idea of a joint distribution is simple, writing it down naively becomes impossible very quickly.

This is the first motivation for graphical models:

we need a way to describe a huge distribution using much less information.

### Slow intuition

Imagine someone says:

“Here is the exact probability of every possible configuration of 200 binary variables.”

That is not a realistic data structure.
You would never want to store or learn that object directly.

So the real question becomes:

what assumptions let us compress the joint?

That is where graphs enter.

## 1.2 What a Graphical Model Actually Is

A graphical model is a way of saying:

`the full joint is complicated, but not every variable interacts directly with every other variable`

The graph shows which local interactions or local conditional relationships matter.

Then those local relationships give a **factorized formula** for the joint.

So a graphical model is not “just a graph.”
It is:

- a set of variables
- a graph over those variables
- a factorization rule implied by the graph
- numerical parameters inside the local factors or local conditionals

The graph is useful because it makes two kinds of structure visible:

### 1. Statistical structure

Which variables are directly related?
Which independences are being asserted?

### 2. Computational structure

Can we sample efficiently?
Can we compute marginals efficiently?
Can we exploit locality in learning or inference?

That second point is easy to miss.
Graphs are not just about pretty pictures of dependence.
They are also computational devices.

## 1.3 Four Objects Beginners Often Confuse

There are four different things here, and keeping them separate will save you a lot of confusion later.

### 1. The variables

These are the random quantities:
$X_1, \ldots, X_d$.

### 2. The graph

This is the structural picture saying who is connected to whom.

### 3. The factorized probability formula

This is the actual math implied by the graph, for example:
$$
p(x)=\prod_i p(x_i \mid pa_i)
$$
or
$$
p(x)=\frac{1}{Z}\prod_C \psi_C(x_C).
$$

### 4. The numerical parameters

These are the numbers inside the local conditionals or potentials.

If you mix these up, later sections become much harder than they need to be.

For example:

- the graph is not the same as the parameters
- the graph is not itself a probability distribution
- the factorization is not identical to the raw graph drawing

The graph tells you what kind of factorization is allowed.
The parameters fill in the actual numbers.

## 1.4 The Three Core Jobs of the Course

Almost the whole course can be organized into three jobs.

### Job 1: Representation

How do we write the distribution compactly?

This is where directed and undirected graphical models enter.

### Job 2: Inference

Once the model is written down, how do we answer useful questions?

Examples:

- what is the marginal probability of this variable?
- what is the most likely hidden configuration?
- what is the partition function?

### Job 3: Learning

How do we estimate the parameters of the model from data?

This later leads to:

- MLE
- EM
- variational inference
- score matching
- GANs
- diffusion

So when a later section feels abstract, try to ask:

`is this section mainly about representation, inference, or learning?`

That usually clarifies what role the math is playing.

## 1.5 Directed and Undirected Models: First Preview

There are two main families in the course.

### Directed graphical models

These are DAGs.
They say the joint can be written as
$$
p(x)=\prod_i p(x_i \mid pa_i).
$$

Intuition:

- each node is generated from its parents
- local pieces are conditional probabilities
- the model has a natural generative story

### Undirected graphical models

These say the joint can be written as
$$
p(x)=\frac{1}{Z}\prod_C \psi_C(x_C).
$$

Intuition:

- local pieces are compatibility scores, not conditional probabilities
- the graph is symmetric rather than causal-looking
- one global normalizing constant `Z` is needed

You do **not** need to master the distinction in this section.
You only need the preview:

- directed = locally normalized conditional pieces
- undirected = globally normalized compatibility pieces

## 1.6 Why Compact Representation Does Not Automatically Give Easy Inference

This is one of the most important warnings in the whole class.

You might think:

“Great, the graph gave me a compact representation, so now all the computations should also be easy.”

Unfortunately, no.

A model can be:

- easy to write down
- compact to store
- still hard to do inference in

That is why the course does not stop after representation.
It goes on to:

- variable elimination
- treewidth
- belief propagation
- MCMC
- variational inference

In other words:

representation and computation are related, but they are not the same problem.

This is why the class keeps asking not only:

- “what does the graph mean?”

but also:

- “what does the graph let us compute efficiently?”

## 1.7 Vocabulary You Should Actually Know

Here is the beginner vocabulary list worth slowing down for.

### Random variable

A quantity whose value is uncertain.

### Joint distribution

The probability distribution over **all** variables at once.

### Marginal

The distribution of a smaller subset of variables after summing/integrating out the rest.

### Conditional distribution

A distribution after you treat some variables as known.

### Factorization

A way of writing one big probability object as a product of smaller local pieces.

### Conditional independence

A statement that once certain variables are known, some others no longer provide extra information.

### Latent variable

A hidden variable that is part of the model but not directly observed in the data.

### Inference

Computing useful probabilistic quantities from the model.

### Learning

Estimating the model parameters from data.

If these words feel natural, the later sections become much easier to read.

## 1.8 What You Should Be Able To Say Out Loud

By the end of this section, you should be able to say something like this:

> A graphical model is a structured way to represent a big joint distribution.
> We need that because the full joint table grows exponentially with the number of variables.
> The graph tells us what local relationships we assume, and that gives a factorized formula for the joint.
> But writing the model compactly does not mean inference is automatically easy, which is why the rest of the course studies inference and approximation methods.

If you can say that in your own words, this section has done its job.

## Formal Anchors

This section is mostly conceptual, but there are still a few formal facts worth being able to state cleanly.

### Chain rule of probability

Any joint distribution can be written as
$$
p(x_1,\dots,x_d)=p(x_d\mid x_{1:d-1})\cdots p(x_2\mid x_1)p(x_1).
$$

Graphical models do not invent factorization from nothing.
They impose structured **restrictions** on very general factorizations like the chain rule.

### Exponential size of a full discrete joint

If each variable has `c` states and there are `d` variables, then the full joint table has
$$
c^d
$$
entries.

That is the basic complexity reason graphical models exist.

### Representation versus inference

These are logically different statements:

- "the model can be written compactly"
- "the model can be queried efficiently"

A graph may give a small factorized description while exact inference is still computationally hard.

### Directed versus undirected preview

At the highest level, the two main model families later in the course are:
$$
p(x)=\prod_i p(x_i\mid pa_i)
\qquad\text{and}\qquad
p(x)=\frac{1}{Z}\prod_C \psi_C(x_C).
$$

The first uses locally normalized conditionals.
The second uses unnormalized local scores plus one global normalizer.

## Worked Problems

### Problem 1.1

You have `10` binary variables $X_1,\dots,X_{10}$.

Compare two representations:

- Model A is an unrestricted full joint distribution.
- Model B is a directed chain $X_1\to X_2\to\cdots\to X_{10}$ with tabular conditionals.

Answer:

1. How many independent parameters does Model A have?
2. How many independent parameters does Model B have?
3. What exam-level lesson should you take from the gap?

### Solution

Model A has $2^{10}$ joint assignments, but the probabilities must sum to $1$, so it has
$$
2^{10}-1=1023
$$
independent parameters.

For Model B, $p(x_1)$ needs $1$ independent parameter. Each binary conditional $p(x_i\mid x_{i-1})$ has two parent settings and one free child probability per setting, so each conditional needs $2$ parameters. There are $9$ conditionals, so Model B has
$$
1+9\cdot 2=19
$$
independent parameters.

The lesson is not just "graphs save space." The sharper lesson is: conditional-independence assumptions convert one huge joint table into local pieces, but those assumptions must be justified and inference cost is a separate question.

### Problem 1.2

Select all statements that are true.

A. The graph specifies which variables are connected structurally, but not the numerical probabilities by itself.

B. Once a graph is drawn, all CPTs or potentials are determined automatically.

C. A factorization is an algebraic way to write the joint distribution using local pieces.

D. Two different parameter settings on the same graph can define different joint distributions.

E. The graph, factorization, and full joint distribution are related but not identical objects.

### Solution

The true statements are A, C, D, and E.

B is false. A graph gives structure, not numbers. You still need the numerical CPTs, potentials, neural-network parameters, or other factor parameters.

The clean mental separation is:

- graph: structural constraints
- factorization: product form implied by the structure
- parameters: numerical values inside the factors
- full joint: the complete probability law

### Problem 1.3

Suppose the joint distribution over two binary variables is:

| $X$ | $Y$ | $p(x,y)$ |
|---|---|---:|
| 0 | 0 | 0.30 |
| 0 | 1 | 0.20 |
| 1 | 0 | 0.10 |
| 1 | 1 | 0.40 |

Compute:

1. $p(X=1)$
2. $p(Y=1\mid X=1)$
3. Explain the difference between what you did in parts 1 and 2.

### Solution

For the marginal,
$$
p(X=1)=p(1,0)+p(1,1)=0.10+0.40=0.50.
$$

For the conditional,
$$
p(Y=1\mid X=1)
=
\frac{p(X=1,Y=1)}{p(X=1)}
=
\frac{0.40}{0.50}
=0.80.
$$

Marginalization sums out variables you are not asking about. Conditioning restricts attention to a slice of the table and renormalizes inside that slice.

### Problem 1.4

A model over binary variables has a compact factorization:
$$
p(x_1,\dots,x_n)\propto \prod_{i<j}\psi_{ij}(x_i,x_j).
$$

Assume every pair $(i,j)$ has a factor.

1. Is this representation more compact than a full joint table?
2. Would exact variable elimination necessarily be cheap?
3. Explain the difference between parameter-count savings and inference-time savings.

### Solution

The pairwise representation can be much more compact than a full joint table because it uses $O(n^2)$ pairwise factors instead of $2^n$ joint entries.

Exact variable elimination is not necessarily cheap. If every variable is connected to every other variable, eliminating variables creates large factors over many remaining variables.

Parameter-count savings ask: "How many numbers do I need to write down the model?" Inference-time savings ask: "How large do the intermediate computations become when answering a query?" A compact factorization can still have high treewidth and expensive exact inference.

### Problem 1.5

Classify each task as mainly `representation`, `inference`, `learning`, or `sampling`.

1. Writing a DAG factorization for a disease-symptom model
2. Computing $p(Z\mid X=x)$ in a latent-variable model
3. Estimating model parameters from observed data
4. Drawing approximate posterior samples from a Markov chain
5. Choosing an elimination order to compute a marginal

### Solution

1. representation
2. inference
3. learning
4. sampling
5. inference

The slight trick is part 5. Choosing an elimination order is an algorithmic choice inside inference; the goal is still to compute a model-implied probability query.
