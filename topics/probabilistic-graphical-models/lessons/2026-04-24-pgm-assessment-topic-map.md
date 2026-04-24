# PGM Assessment Topic Map

This note maps the homeworks, Midterm 1, and the practice final in both directions:

- `question -> topic`
- `topic -> where it has been tested`

The goal is not just to list problems, but to show the recurring ideas the course keeps coming back to.

## Notes On Scope

- I included the written homeworks, the visible homework programming problems, Midterm 1, and the processed `Practice_Exam_Solutions`.
- The processed `HW2_graded_submission.md` has some numbering/OCR drift. I preserved the clearly visible problem blocks from the processed source, including the late-file GNN oversmoothing problem that appears there as `Q9`.
- Difficulty is approximate and meant in the sense of `how hard this is likely to feel under exam pressure`, not `how many points it was worth`.

## Difficulty Scale

- `Easy`: mostly direct application of a definition, graph rule, or one standard identity
- `Medium`: short derivation or several linked reasoning steps
- `Hard`: proof, algorithm design, many-step derivation, or a problem that mixes multiple ideas

## High-Frequency Topics

- `Directed vs undirected structure reasoning` shows up repeatedly in `HW1`, `Midterm 1`, and `Practice Final Problem 1`.
- `Exact inference / message passing / treewidth-style reasoning` is concentrated in `HW1`, but still matters later through `tree decomposition`, `loopy BP`, and `GNN message passing`.
- `MCMC and Markov-chain properties` are extremely high-yield: they dominate `HW2`, much of `Midterm 1`, and several `Practice Final` short questions.
- `Variational inference` shows up most heavily in `HW3` and the `Practice Final`, especially `KL direction`, `mean field`, `CAVI`, and `REINFORCE vs reparameterization`.
- `Beyond-likelihood generative modeling` is concentrated in `HW4` and the `Practice Final`: `score matching`, `NCE`, `GAN/WGAN`, `Wasserstein`, and `diffusion`.
- `Causality` and `diffusion` appear most clearly in the `Practice Final`, which suggests they were important late-course review targets even if they were lighter in earlier assessments.

## Question -> Topic Map

### Homework 1

- `HW1-Q1`: undirected graphical model factorization, conditional independence by graph separation, and Markov blankets. Difficulty: `Easy`.
- `HW1-Q2`: Bayesian network factorization, d-separation, Markov blankets, and moralization. Difficulty: `Easy`.
- `HW1-Q3`: KL divergence as a non-metric and the relation between covariance and mutual information via Pinsker-style reasoning. Difficulty: `Medium`.
- `HW1-Q4`: convert between UGMs, DAGs, and factor graphs. Difficulty: `Easy`.
- `HW1-Q5`: exact belief propagation on a tree factor graph, including messages, beliefs, factor beliefs, and partition function. Difficulty: `Medium`.
- `HW1-Q6`: variable elimination order, tree structure, and how eliminating a high-degree node can create a large factor even on a tree. Difficulty: `Medium`.
- `HW1-Q7`: formal proof that d-separation implies conditional independence. Difficulty: `Hard`.
- `HW1-Q8`: exact sampling from an Ising model on a tree using sum-product style dynamic programming and top-down sampling. Difficulty: `Hard`.
- `HW1-Q9`: hardness / reduction viewpoint for inference in Ising models, especially reducing partition-function computation to marginals and vice versa via oracle constructions. Difficulty: `Hard`.

### Homework 2

- `HW2-Q1`: MCMC concept checks: stationary distribution, rejection sampling in high dimensions, HMC vs Gibbs on discrete spaces, tempering intuition, and slow mixing in Ising models. Difficulty: `Easy`.
- `HW2-Q2`: rejection-sampling proposal validity via tail comparison and boundedness of `sup_x p(x) / q(x)`. Difficulty: `Medium`.
- `HW2-Q3`: Gibbs sampling for a bivariate Gaussian via conditional Gaussian formulas. Difficulty: `Easy`.
- `HW2-Q4`: Markov-chain graph structure, irreducibility, eigendecomposition, stationary distribution, spectral mixing bounds, spectral gap, and conductance. Difficulty: `Hard`.
- `HW2-Q9` (as numbered in the processed file): linear GCN dynamics and oversmoothing through repeated multiplication by normalized adjacency and weight matrices. Difficulty: `Hard`.
- `HW2-PROG`: Gibbs sampling, annealed importance sampling, and Gibbs-with-tempering on Ising grids; compare magnetization and mixing across coupling strengths. Difficulty: `Hard`.

### Homework 3

- `HW3-Q1`: mean-field approximation for an Ising model, entropy-energy objective rewriting, and non-concavity of the mean-field objective. Difficulty: `Medium`.
- `HW3-Q2`: local polytope vs marginal polytope, cycle inequalities, and why cycle constraints are still insufficient in general. Difficulty: `Hard`.
- `HW3-Q3`: loopy belief propagation on a cycle, including convergence in one regime and periodic non-convergence in another. Difficulty: `Hard`.
- `HW3-Q4`: Bayesian HMM with Dirichlet priors, mean-field factorization, and CAVI updates for `q(pi)`, `q(A)`, and `q(z_t)`. Difficulty: `Hard`.
- `HW3-Q5`: REINFORCE vs reparameterization-trick variance comparison, including examples where either one can be better. Difficulty: `Medium`.
- `HW3-PROG`: variational inference / variational EM for LDA on text data. Difficulty: `Hard`.

### Homework 4

- `HW4-Q1`: exponential families; closed-form score-matching estimator; convexity of NCE; and Hessian-level comparison of NCE vs MLE efficiency. Difficulty: `Hard`.
- `HW4-Q2`: WGAN with linear generator and quadratic critic; trace-form loss; exact optimum condition `WW^T = I`; and alternating best-response cycling. Difficulty: `Medium`.
- `HW4-Q3`: metric properties, KL not being a metric, and when an IPM-style distance `d_F` becomes a true metric. Difficulty: `Easy`.
- `HW4-PROG`: neural score matching on `1D` and `2D` Gaussian mixtures, reconstructing `log p` and `p` from a learned score, and comparing learned vs true score fields. Difficulty: `Medium`.

### Midterm 1

- `M1-Q1`: Bayesian network local reasoning: Markov blanket and d-separation / conditional independence. Difficulty: `Easy`.
- `M1-Q2`: undirected graphical model local reasoning: Markov blanket, factor-graph conversion, and separation. Difficulty: `Easy`.
- `M1-Q3`: irreducibility and aperiodicity for a finite Markov chain. Difficulty: `Easy`.
- `M1-Q4`: MALA concept check. Difficulty: `Easy`.
- `M1-Q5`: Metropolis-Hastings / conductance concept check. Difficulty: `Easy`.
- `M1-Q6`: Gibbs-sampling / ergodicity concept check. Difficulty: `Easy`.
- `M1-Q7`: simulated tempering intuition. Difficulty: `Easy`.
- `M1-Q8`: simulated tempering stationary-distribution intuition. Difficulty: `Easy`.
- `M1-Q9`: systematic-scan Gibbs sampler on a two-variable distribution: full conditionals, sweep transition matrix, stationarity, and non-reversibility. Difficulty: `Medium`.
- `M1-Q10`: Metropolis-Hastings independent sampler: acceptance probability, irreducibility, aperiodicity, high-dimensional slow mixing, and comparison with coordinate-wise Gibbs. Difficulty: `Medium`.
- `M1-Q11`: explicit construction of maximal-clique log-potentials from smaller local log-potentials, i.e. constructive clique-based factorization reasoning. Difficulty: `Hard`.
- `M1-Q12`: construct and verify a tree decomposition with the cover, edge, and running-intersection properties. Difficulty: `Medium`.

### Practice Final: Short Questions

- `PF-SQ1`: Gibbs variational principle relaxations, inner vs outer approximations, and mean field as an inner approximation. Difficulty: `Medium`.
- `PF-SQ2`: over-smoothing vs over-squashing in deep GNNs. Difficulty: `Easy`.
- `PF-SQ3`: GAN basics, JS-divergence view of standard GANs, and why Wasserstein objectives help with vanishing gradients. Difficulty: `Easy`.
- `PF-SQ4`: `KL(q || p)` vs `KL(p || q)` and the mode-seeking vs mass-covering distinction. Difficulty: `Medium`.
- `PF-SQ5`: HMC and simulated tempering as Markov chains on extended state spaces. Difficulty: `Medium`.
- `PF-SQ6`: VI vs MCMC and the role of the ELBO. Difficulty: `Easy`.
- `PF-SQ7`: standard GAN local minima and non-uniqueness in CycleGAN even with cycle consistency. Difficulty: `Medium`.
- `PF-SQ8`: NCE noise-distribution choice and why "farther from the data" is not automatically better. Difficulty: `Easy`.
- `PF-SQ9`: when REINFORCE vs reparameterization can be applied directly for unbiased VAE / ELBO gradients. Difficulty: `Medium`.
- `PF-SQ10`: backdoor criterion in causal graphs. Difficulty: `Medium`.
- `PF-SQ11`: what the PC algorithm can and cannot identify from graph structure. Difficulty: `Medium`.
- `PF-SQ12`: predictor-corrector sampling for score-based diffusion models. Difficulty: `Easy`.
- `PF-SQ13`: probability-flow ODE uses in diffusion models: likelihoods, faster sampling, and inversion / latent-trajectory reasoning. Difficulty: `Easy`.
- `PF-SQ14`: derivative requirements in Hyvarinen score matching for continuous EBMs. Difficulty: `Medium`.

### Practice Final: Long Problems

- `PF-P1`: Bayesian network factorization, d-separation, Markov blankets, and moralization. Difficulty: `Easy`.
- `PF-P2`: finite Markov chain graph, irreducibility, aperiodicity, and unique stationary distribution. Difficulty: `Medium`.
- `PF-P3`: shortest paths via iterative dynamic programming and exact implementation through message-passing GNN layers. Difficulty: `Medium`.
- `PF-P4`: modified score-matching objectives, gradient matching vs score matching, generalized score matching, and weighting rare informative regions. Difficulty: `Hard`.
- `PF-P5`: JS-based GAN vs WGAN on shifted uniform intervals, including flat JS gradients and informative Wasserstein gradients. Difficulty: `Medium`.

## Topic -> Assessment Reverse Map

### Directed Graphical Models / Bayesian Networks / D-Separation / Moralization

- `HW1-Q2`
- `HW1-Q7`
- `M1-Q1`
- `PF-P1`

### Undirected Graphical Models / Cliques / Markov Blankets / Factor-Graph Conversion

- `HW1-Q1`
- `HW1-Q4`
- `M1-Q2`
- `M1-Q11`

### Exact Inference / Belief Propagation / Variable Elimination / Treewidth / Tree Decomposition

- `HW1-Q5`
- `HW1-Q6`
- `HW1-Q8`
- `M1-Q12`
- `HW3-Q3`

### Information Theory / KL / Mutual Information / Metrics / IPMs

- `HW1-Q3`
- `HW4-Q3`
- `PF-SQ1`
- `PF-SQ4`
- `PF-SQ6`
- `PF-SQ14`

### Hardness / Reductions / Computational Complexity

- `HW1-Q9`

### Markov Chains / MCMC / Gibbs / Metropolis-Hastings / HMC / Tempering

- `HW2-Q1`
- `HW2-Q2`
- `HW2-Q3`
- `HW2-Q4`
- `HW2-PROG`
- `M1-Q3`
- `M1-Q4`
- `M1-Q5`
- `M1-Q6`
- `M1-Q7`
- `M1-Q8`
- `M1-Q9`
- `M1-Q10`
- `PF-SQ5`
- `PF-SQ6`

### Mixing Time / Spectral Gap / Conductance / Reversibility / Stationarity

- `HW2-Q4`
- `M1-Q3`
- `M1-Q9`
- `M1-Q10`
- `PF-P2`

### Variational Inference / Mean Field / ELBO / CAVI / Latent-Variable Inference

- `HW3-Q1`
- `HW3-Q4`
- `HW3-Q5`
- `HW3-PROG`
- `PF-SQ1`
- `PF-SQ4`
- `PF-SQ6`
- `PF-SQ9`

### Marginal Polytope / Local Polytope / Loopy BP

- `HW3-Q2`
- `HW3-Q3`

### HMMs / Sequence Models / Structured Latent Variables

- `HW3-Q4`

### VAE Gradient Estimators / REINFORCE vs Reparameterization

- `HW3-Q5`
- `PF-SQ9`

### GNNs / Message Passing / Over-Smoothing / Algorithm Simulation On Graphs

- `HW2-Q9`
- `PF-SQ2`
- `PF-P3`

### Score Matching / Generalized Score Matching / NCE / Exponential Families

- `HW4-Q1`
- `HW4-PROG`
- `PF-SQ8`
- `PF-SQ14`
- `PF-P4`

### GANs / WGAN / Wasserstein / CycleGAN / Generator-Gradient Behavior

- `HW4-Q2`
- `PF-SQ3`
- `PF-SQ7`
- `PF-P5`

### Diffusion / Score-Based Sampling / Probability-Flow ODE

- `PF-SQ12`
- `PF-SQ13`

### Causality / Backdoor / Causal Discovery

- `PF-SQ10`
- `PF-SQ11`

## What This Suggests About Exam Prep

- If you are weak on `graph structure reasoning`, do `HW1-Q1/Q2/Q4/Q5`, `M1-Q1/Q2`, and `PF-P1`.
- If you are weak on `MCMC`, the densest cluster is `HW2`, then `M1-Q3-Q10`, then `PF-SQ5/SQ6`.
- If you are weak on `VI`, the most important sources are `HW3-Q1/Q4/Q5` plus `PF-SQ1/SQ4/SQ6/SQ9`.
- If you are weak on `beyond-likelihood generative modeling`, focus on `HW4-Q1/Q2`, `PF-SQ3/SQ8/SQ12/SQ13/SQ14`, and `PF-P4/P5`.
- If you want the most final-like late-course conceptual review, the `Practice Final` is the best single source because it touches `VI`, `MCMC`, `GANs`, `score matching`, `diffusion`, `causality`, and `GNNs` in one place.
