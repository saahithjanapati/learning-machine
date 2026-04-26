# PGM Memory Sheet 8: Causality

Use with [[2026-04-20-pgm-exam-prep-section-08-causality]].

This section is mostly Practice-Final-driven. The recurring exam skills are distinguishing conditioning from intervention, checking backdoor paths, understanding front-door at a high level, and knowing what PC can and cannot identify.

## Assessed Sources

- `PF-SQ10`: backdoor criterion in causal graphs.
- `PF-SQ11`: PC algorithm identifiability.
- `WP8.1-WP8.8`: conditioning vs intervention, truncated factorization, backdoor, front-door, Markov equivalence, PC, interventions for discovery, intervention-count results.

## Conditioning vs Intervention

Conditioning:

$$
P(Y\mid T=t)
$$

means:

> look at the subpopulation where treatment naturally took value $t$.

Intervention:

$$
P(Y\mid do(T=t))
$$

means:

> force treatment to value $t$ by replacing the treatment mechanism.

These are not generally equal because treatment may be confounded.

Memory:

> Conditioning observes; intervention acts.

## Confounding

Confounding happens when a variable affects both treatment and outcome, creating a noncausal association between them.

Example pattern:

$$
Z\to T,
\qquad
Z\to Y.
$$

Then $P(Y\mid T=t)$ can differ from $P(Y\mid do(T=t))$.

## Truncated Factorization

Given a DAG factorization:

$$
p(x_1,\dots,x_n)=\prod_i p(x_i\mid \mathrm{pa}_i),
$$

an intervention $do(X_j=x_j)$ removes the factor for the intervened variable and fixes its value.

Memory:

> Cut incoming arrows into intervened variables; keep the other mechanisms.

## Backdoor Criterion

A set $Z$ satisfies the backdoor criterion relative to treatment $T$ and outcome $Y$ if:

- no element of $Z$ is a descendant of $T$
- $Z$ blocks every path from $T$ to $Y$ that starts with an arrow into $T$

Backdoor adjustment:

$$
P(Y\mid do(T=t))
=
\sum_z P(Y\mid T=t,Z=z)P(Z=z).
$$

For continuous $Z$, replace the sum with an integral.

## How To Check Backdoor Questions

Procedure:

- identify all paths from $T$ to $Y$ that begin with an arrow into $T$
- ignore causal paths that begin with $T\to$
- check whether candidate adjustment set blocks every backdoor path
- reject the set if it contains descendants of $T$
- watch for colliders that could be opened by conditioning

This is the main skill for `PF-SQ10`.

## Descendants Of Treatment

Do not adjust for descendants of treatment in ordinary backdoor adjustment.

Why:

- they may lie on the causal pathway
- conditioning on them can remove part of the effect you want
- they may introduce collider bias

Memory:

> Backdoor adjustment uses pre-treatment blockers, not post-treatment consequences.

## Front-Door Idea

Backdoor blocks bad noncausal paths.

Front-door uses a mediator to identify the causal effect even when treatment-outcome confounding is present.

High-level structure:

$$
T\to M\to Y
$$

with conditions that make the treatment-to-mediator and mediator-to-outcome pieces identifiable.

Memory:

> Backdoor blocks confounding; front-door routes through a clean mediator.

## Markov Equivalence

Different DAGs can imply the same observational conditional independencies.

Two DAGs are Markov equivalent when they have:

- the same skeleton
- the same unshielded colliders

Therefore observational data alone often cannot identify a unique DAG.

## PC Algorithm

PC is a constraint-based causal-discovery algorithm.

It uses conditional-independence tests to:

- remove edges from a complete undirected graph
- identify unshielded colliders
- orient additional compelled edges using rules

PC usually identifies a CPDAG / equivalence class, not necessarily the unique true DAG.

This is the central idea in `PF-SQ11`.

## What PC Can Identify

PC can identify:

- adjacencies under assumptions
- some collider structures
- some forced edge orientations
- a Markov equivalence class

PC generally cannot identify:

- all edge directions from observational data alone
- a unique DAG when multiple DAGs are Markov equivalent
- directions inside unresolved equivalence classes

## Interventions Help Discovery

Interventions can orient edges because they perturb mechanisms asymmetrically.

If intervening on $X$ changes $Y$, that gives directional information that purely observational CI tests may not reveal.

Memory:

> Observations show association and independence; interventions reveal downstream response.

## Intervention Count Results

The lecture results about $n-1$ single-node interventions and $O(\log n)$ multi-node interventions mean:

- interventions can be planned to recover graph directionality in worst-case settings
- single-node interventions are less efficient
- multi-node interventions can test many directional relationships at once

You usually need the intuition, not the full proof.

## Exam Traps

- Do not equate $P(Y\mid T=t)$ with $P(Y\mid do(T=t))$.
- Do not adjust for descendants of treatment in backdoor adjustment.
- Do not condition on colliders casually.
- Do not say front-door is just another name for backdoor.
- Do not say observational data always identifies the full causal DAG.
- Do not say PC is a likelihood-optimization algorithm.
- Do not say PC always orients every edge.

## Quick Self-Test

- Observing treatment? $P(Y\mid T=t)$.
- Forcing treatment? $P(Y\mid do(T=t))$.
- Need backdoor? Block all paths into treatment, avoid descendants of treatment.
- Need front-door? Look for a mediator structure.
- Same skeleton and same colliders? Markov equivalent.
- PC algorithm? Constraint-based CI testing and partial orientation.
- Interventions? Break equivalence by changing mechanisms.
