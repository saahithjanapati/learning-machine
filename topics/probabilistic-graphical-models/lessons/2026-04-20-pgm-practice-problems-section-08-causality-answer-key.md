# PGM Practice Problems 8 Answer Key: Causality

Use with [[2026-04-20-pgm-practice-problems-section-08-causality]].

## Table of Contents

- [[#Solution 8.1]]
- [[#Solution 8.2]]
- [[#Solution 8.3]]
- [[#Solution 8.4]]

## Solution 8.1

No. In this graph, $p(y\mid x)$ is not generally equal to $p(y\mid do(x))$ because $Z$ confounds the relationship between $X$ and $Y$.

The confounder is $Z$ because it affects both treatment $X$ and outcome $Y$.

The backdoor adjustment is
$$
p(y\mid do(x))
=
\sum_z p(y\mid x,z)p(z).
$$

The intervention $do(X=x)$ removes incoming arrows into $X$, so the arrow $Z\to X$ is cut while the downstream causal effect $X\to Y$ remains.

## Solution 8.2

$\{W\}$ is a valid backdoor adjustment set because $W$ blocks the backdoor path
$$
T\leftarrow W\to Y.
$$

$\{M\}$ is not a valid backdoor adjustment set. $M$ is a mediator on the causal path $T\to M\to Y$, not a pre-treatment confounder. Adjusting for it would block part of the effect you are trying to estimate.

A valid adjustment formula is
$$
p(y\mid do(t))
=
\sum_w p(y\mid t,w)p(w).
$$

Adjusting for a mediator changes the causal estimand by controlling away part of the treatment's effect. Backdoor adjustment is supposed to block noncausal confounding paths into treatment, not block the causal path out of treatment.

## Solution 8.3

The true statements are:

- A
- B
- D
- E

Statement C is false. Observational data usually identify only a Markov-equivalence class, not a unique fully oriented DAG, unless additional assumptions or information are available.

## Solution 8.4

This phenomenon is Markov equivalence.

It limits observational causal discovery because the same observed conditional independences can be consistent with multiple causal directions. Observational data alone may not contain enough information to choose between those directions.

Additional information that can help includes interventions, temporal ordering, domain knowledge, known randomized treatment assignment, or stronger modeling assumptions.

The true warnings are:

- A
- B
- D

Statement C is false. Markov-equivalent DAGs agree on observational independences, but they can disagree on interventional distributions.
