# PGM Practice Problems 2 Answer Key: Directed and Undirected Models

Use with [[2026-04-20-pgm-practice-problems-section-02-directed-undirected]].

## Table of Contents

- [[#Solution 2.1]]
- [[#Solution 2.2]]
- [[#Solution 2.3]]
- [[#Solution 2.4]]

## Solution 2.1

The parent sets are:

- $A$: no parents
- $B$: parent $A$
- $C$: parent $A$
- $D$: parents $B,C$
- $E$: parent $D$

So the Bayesian-network factorization is
$$
p(a,b,c,d,e)
=
p(a)p(b\mid a)p(c\mid a)p(d\mid b,c)p(e\mid d).
$$

The Markov blanket of $D$ is
$$
\{B,C,E\}.
$$
Those are its parents and child. Since $D$'s child $E$ has no other parents, there are no co-parents to add.

The true d-separation statements are A and C.

- A is true because conditioning on $A$ blocks the common-cause path $B\leftarrow A\to C$, and the collider path $B\to D\leftarrow C$ is blocked unless $D$ or a descendant is conditioned on.
- B is false because conditioning on collider $D$ opens the path $B\to D\leftarrow C$.
- C is true because conditioning on $D$ blocks the directed paths from $A$ through $B,C$ into $D$ and then to $E$.
- D is false because $A$ can influence $E$ through $A\to B\to D\to E$ and $A\to C\to D\to E$.

## Solution 2.2

The maximal cliques are
$$
\{A,B,C\},\qquad \{C,D\},\qquad \{D,E\}.
$$

One valid factorization is
$$
p(a,b,c,d,e)
=
\frac{1}{Z}\psi_{ABC}(a,b,c)\psi_{CD}(c,d)\psi_{DE}(d,e).
$$

If each variable is binary, the largest clique table is for $\{A,B,C\}$, which has $2^3=8$ entries.

The partition function is needed because the potentials are compatibility scores, not locally normalized conditional probabilities. Dividing by $Z$ makes the total probability over all assignments sum to $1$.

## Solution 2.3

The true statements are:

- A
- C
- D

Statement B is false because an undirected potential does not need to sum to $1$. It only needs to be nonnegative.

Statement E is false because the partition function is exactly what turns unnormalized scores into probabilities. You can sometimes avoid it in ratios or certain conditional computations, but not in exact normalized probabilities in general.

## Solution 2.4

The partition function is the sum of all unnormalized scores:
$$
Z=4+1+1+2=8.
$$

Therefore
$$
p(X_1=0,X_2=0)=\frac{4}{8}=\frac{1}{2}.
$$

Also,
$$
p(X_1=1)=p(1,0)+p(1,1)=\frac{1+2}{8}=\frac{3}{8}.
$$

In a large undirected model, computing $Z$ may require summing over exponentially many joint assignments.
