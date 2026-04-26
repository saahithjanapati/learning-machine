# PGM Practice Problems 8: Causality

Use with [[2026-04-20-pgm-exam-prep-section-08-causality]], [[2026-04-20-pgm-worked-problems-section-08-causality]], [[2026-04-20-pgm-practice-problems-section-08-causality-answer-key]], and [[2026-04-20-pgm-memory-08-causality]].

These are unsolved practice problems for the causality module. They are designed around graph-based identification and causal-discovery traps.

## Table of Contents

- [[#Problem 8.1]]
- [[#Problem 8.2]]
- [[#Problem 8.3]]
- [[#Problem 8.4]]

## Problem 8.1

Consider the causal graph
$$
Z \to X,\qquad Z \to Y,\qquad X \to Y.
$$

1. Is $p(y\mid x)$ generally equal to $p(y\mid do(x))$ in this graph?
2. Which variable is the confounder?
3. Write the backdoor-adjustment expression for $p(y\mid do(x))$.
4. In one sentence, explain what intervention changes about the graph.

## Problem 8.2

Consider the graph
$$
W \to T,\qquad W \to Y,\qquad T \to M,\qquad M \to Y.
$$

You want the causal effect of $T$ on $Y$.

1. Is $\{W\}$ a valid backdoor adjustment set?
2. Is $\{M\}$ a valid backdoor adjustment set?
3. Write a valid adjustment formula for $p(y\mid do(t))$.
4. Explain why adjusting for a mediator is not the same thing as blocking confounding.

## Problem 8.3

A PC-style causal-discovery algorithm is run on variables $A,B,C,D$.

Select all statements that are true.

A. PC uses conditional-independence tests to remove edges from an initially dense graph.

B. If PC finds $A$ and $C$ independent given $B$, this can affect whether the edge $A-C$ remains in the skeleton.

C. PC can orient every edge uniquely from observational data under all circumstances.

D. Collider orientation uses patterns like $A-B-C$ where $A$ and $C$ are not adjacent, together with separation-set information.

E. PC's output should be interpreted under assumptions such as causal sufficiency and faithfulness.

## Problem 8.4

Two DAGs imply the same observational conditional independences but disagree on the direction of one edge.

1. What is this phenomenon usually called?
2. Why does it limit what can be learned from observational data alone?
3. Give one kind of additional information that could help distinguish the two DAGs.
4. Select all warnings that apply:

A. Hidden confounding can make the learned causal graph misleading.

B. Finite-sample conditional-independence tests can make mistakes.

C. If two DAGs are Markov equivalent, they must have identical interventional distributions for every possible intervention.

D. Domain knowledge or interventions can add information not present in passive observations.
