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

- `HW1-Q1` (`Easy`): undirected graphical model factorization, conditional independence by graph separation, and Markov blankets.
- `HW1-Q2` (`Easy`): Bayesian network factorization, d-separation, Markov blankets, and moralization.
- `HW1-Q3` (`Medium`): KL divergence as a non-metric and the relation between covariance and mutual information via Pinsker-style reasoning.
- `HW1-Q4` (`Easy`): convert between UGMs, DAGs, and factor graphs.
- `HW1-Q5` (`Medium`): exact belief propagation on a tree factor graph, including messages, beliefs, factor beliefs, and partition function.
- `HW1-Q6` (`Medium`): variable elimination order, tree structure, and how eliminating a high-degree node can create a large factor even on a tree.
- `HW1-Q7` (`Hard`): formal proof that d-separation implies conditional independence.
- `HW1-Q8` (`Hard`): exact sampling from an Ising model on a tree using sum-product style dynamic programming and top-down sampling.
- `HW1-Q9` (`Hard`): hardness / reduction viewpoint for inference in Ising models, especially reducing partition-function computation to marginals and vice versa via oracle constructions.

### Homework 2

- `HW2-Q1` (`Easy`): MCMC concept checks: stationary distribution, rejection sampling in high dimensions, HMC vs Gibbs on discrete spaces, tempering intuition, and slow mixing in Ising models.
- `HW2-Q2` (`Medium`): rejection-sampling proposal validity via tail comparison and boundedness of `sup_x p(x) / q(x)`.
- `HW2-Q3` (`Easy`): Gibbs sampling for a bivariate Gaussian via conditional Gaussian formulas.
- `HW2-Q4` (`Hard`): Markov-chain graph structure, irreducibility, eigendecomposition, stationary distribution, spectral mixing bounds, spectral gap, and conductance.
- `HW2-Q9` (`Hard`, as numbered in the processed file): linear GCN dynamics and oversmoothing through repeated multiplication by normalized adjacency and weight matrices.
- `HW2-PROG` (`Hard`): Gibbs sampling, annealed importance sampling, and Gibbs-with-tempering on Ising grids; compare magnetization and mixing across coupling strengths.

### Homework 3

- `HW3-Q1` (`Medium`): mean-field approximation for an Ising model, entropy-energy objective rewriting, and non-concavity of the mean-field objective.
- `HW3-Q2` (`Hard`): local polytope vs marginal polytope, cycle inequalities, and why cycle constraints are still insufficient in general.
- `HW3-Q3` (`Hard`): loopy belief propagation on a cycle, including convergence in one regime and periodic non-convergence in another.
- `HW3-Q4` (`Hard`): Bayesian HMM with Dirichlet priors, mean-field factorization, and CAVI updates for `q(pi)`, `q(A)`, and `q(z_t)`.
- `HW3-Q5` (`Medium`): REINFORCE vs reparameterization-trick variance comparison, including examples where either one can be better.
- `HW3-PROG` (`Hard`): variational inference / variational EM for LDA on text data.

### Homework 4

- `HW4-Q1` (`Hard`): exponential families; closed-form score-matching estimator; convexity of NCE; and Hessian-level comparison of NCE vs MLE efficiency.
- `HW4-Q2` (`Medium`): WGAN with linear generator and quadratic critic; trace-form loss; exact optimum condition `WW^T = I`; and alternating best-response cycling.
- `HW4-Q3` (`Easy`): metric properties, KL not being a metric, and when an IPM-style distance `d_F` becomes a true metric.
- `HW4-PROG` (`Medium`): neural score matching on `1D` and `2D` Gaussian mixtures, reconstructing `log p` and `p` from a learned score, and comparing learned vs true score fields.

### Midterm 1

- `M1-Q1` (`Easy`): Bayesian network local reasoning: Markov blanket and d-separation / conditional independence.
- `M1-Q2` (`Easy`): undirected graphical model local reasoning: Markov blanket, factor-graph conversion, and separation.
- `M1-Q3` (`Easy`): irreducibility and aperiodicity for a finite Markov chain.
- `M1-Q4` (`Easy`): MALA concept check.
- `M1-Q5` (`Easy`): Metropolis-Hastings / conductance concept check.
- `M1-Q6` (`Easy`): Gibbs-sampling / ergodicity concept check.
- `M1-Q7` (`Easy`): simulated tempering intuition.
- `M1-Q8` (`Easy`): simulated tempering stationary-distribution intuition.
- `M1-Q9` (`Medium`): systematic-scan Gibbs sampler on a two-variable distribution: full conditionals, sweep transition matrix, stationarity, and non-reversibility.
- `M1-Q10` (`Medium`): Metropolis-Hastings independent sampler: acceptance probability, irreducibility, aperiodicity, high-dimensional slow mixing, and comparison with coordinate-wise Gibbs.
- `M1-Q11` (`Hard`): explicit construction of maximal-clique log-potentials from smaller local log-potentials, i.e. constructive clique-based factorization reasoning.
- `M1-Q12` (`Medium`): construct and verify a tree decomposition with the cover, edge, and running-intersection properties.

### Practice Final: Short Questions

- `PF-SQ1` (`Medium`): Gibbs variational principle relaxations, inner vs outer approximations, and mean field as an inner approximation.
- `PF-SQ2` (`Easy`): over-smoothing vs over-squashing in deep GNNs.
- `PF-SQ3` (`Easy`): GAN basics, JS-divergence view of standard GANs, and why Wasserstein objectives help with vanishing gradients.
- `PF-SQ4` (`Medium`): `KL(q || p)` vs `KL(p || q)` and the mode-seeking vs mass-covering distinction.
- `PF-SQ5` (`Medium`): HMC and simulated tempering as Markov chains on extended state spaces.
- `PF-SQ6` (`Easy`): VI vs MCMC and the role of the ELBO.
- `PF-SQ7` (`Medium`): standard GAN local minima and non-uniqueness in CycleGAN even with cycle consistency.
- `PF-SQ8` (`Easy`): NCE noise-distribution choice and why "farther from the data" is not automatically better.
- `PF-SQ9` (`Medium`): when REINFORCE vs reparameterization can be applied directly for unbiased VAE / ELBO gradients.
- `PF-SQ10` (`Medium`): backdoor criterion in causal graphs.
- `PF-SQ11` (`Medium`): what the PC algorithm can and cannot identify from graph structure.
- `PF-SQ12` (`Easy`): predictor-corrector sampling for score-based diffusion models.
- `PF-SQ13` (`Easy`): probability-flow ODE uses in diffusion models: likelihoods, faster sampling, and inversion / latent-trajectory reasoning.
- `PF-SQ14` (`Medium`): derivative requirements in Hyvarinen score matching for continuous EBMs.

### Practice Final: Long Problems

- `PF-P1` (`Easy`): Bayesian network factorization, d-separation, Markov blankets, and moralization.
- `PF-P2` (`Medium`): finite Markov chain graph, irreducibility, aperiodicity, and unique stationary distribution.
- `PF-P3` (`Medium`): shortest paths via iterative dynamic programming and exact implementation through message-passing GNN layers.
- `PF-P4` (`Hard`): modified score-matching objectives, gradient matching vs score matching, generalized score matching, and weighting rare informative regions.
- `PF-P5` (`Medium`): JS-based GAN vs WGAN on shifted uniform intervals, including flat JS gradients and informative Wasserstein gradients.

## Difficulty -> Question Map

### Easy

- `HW1-Q1`: undirected graphical model factorization, conditional independence by graph separation, and Markov blankets.
- `HW1-Q2`: Bayesian network factorization, d-separation, Markov blankets, and moralization.
- `HW1-Q4`: convert between UGMs, DAGs, and factor graphs.
- `HW2-Q1`: MCMC concept checks: stationary distribution, rejection sampling in high dimensions, HMC vs Gibbs on discrete spaces, tempering intuition, and slow mixing in Ising models.
- `HW2-Q3`: Gibbs sampling for a bivariate Gaussian via conditional Gaussian formulas.
- `HW4-Q3`: metric properties, KL not being a metric, and when an IPM-style distance `d_F` becomes a true metric.
- `M1-Q1`: Bayesian network local reasoning: Markov blanket and d-separation / conditional independence.
- `M1-Q2`: undirected graphical model local reasoning: Markov blanket, factor-graph conversion, and separation.
- `M1-Q3`: irreducibility and aperiodicity for a finite Markov chain.
- `M1-Q4`: MALA concept check.
- `M1-Q5`: Metropolis-Hastings / conductance concept check.
- `M1-Q6`: Gibbs-sampling / ergodicity concept check.
- `M1-Q7`: simulated tempering intuition.
- `M1-Q8`: simulated tempering stationary-distribution intuition.
- `PF-SQ2`: over-smoothing vs over-squashing in deep GNNs.
- `PF-SQ3`: GAN basics, JS-divergence view of standard GANs, and why Wasserstein objectives help with vanishing gradients.
- `PF-SQ6`: VI vs MCMC and the role of the ELBO.
- `PF-SQ8`: NCE noise-distribution choice and why "farther from the data" is not automatically better.
- `PF-SQ12`: predictor-corrector sampling for score-based diffusion models.
- `PF-SQ13`: probability-flow ODE uses in diffusion models: likelihoods, faster sampling, and inversion / latent-trajectory reasoning.
- `PF-P1`: Bayesian network factorization, d-separation, Markov blankets, and moralization.

### Medium

- `HW1-Q3`: KL divergence as a non-metric and the relation between covariance and mutual information via Pinsker-style reasoning.
- `HW1-Q5`: exact belief propagation on a tree factor graph, including messages, beliefs, factor beliefs, and partition function.
- `HW1-Q6`: variable elimination order, tree structure, and how eliminating a high-degree node can create a large factor even on a tree.
- `HW2-Q2`: rejection-sampling proposal validity via tail comparison and boundedness of `sup_x p(x) / q(x)`.
- `HW3-Q1`: mean-field approximation for an Ising model, entropy-energy objective rewriting, and non-concavity of the mean-field objective.
- `HW3-Q5`: REINFORCE vs reparameterization-trick variance comparison, including examples where either one can be better.
- `HW4-Q2`: WGAN with linear generator and quadratic critic; trace-form loss; exact optimum condition `WW^T = I`; and alternating best-response cycling.
- `HW4-PROG`: neural score matching on `1D` and `2D` Gaussian mixtures, reconstructing `log p` and `p` from a learned score, and comparing learned vs true score fields.
- `M1-Q9`: systematic-scan Gibbs sampler on a two-variable distribution: full conditionals, sweep transition matrix, stationarity, and non-reversibility.
- `M1-Q10`: Metropolis-Hastings independent sampler: acceptance probability, irreducibility, aperiodicity, high-dimensional slow mixing, and comparison with coordinate-wise Gibbs.
- `M1-Q12`: construct and verify a tree decomposition with the cover, edge, and running-intersection properties.
- `PF-SQ1`: Gibbs variational principle relaxations, inner vs outer approximations, and mean field as an inner approximation.
- `PF-SQ4`: `KL(q || p)` vs `KL(p || q)` and the mode-seeking vs mass-covering distinction.
- `PF-SQ5`: HMC and simulated tempering as Markov chains on extended state spaces.
- `PF-SQ7`: standard GAN local minima and non-uniqueness in CycleGAN even with cycle consistency.
- `PF-SQ9`: when REINFORCE vs reparameterization can be applied directly for unbiased VAE / ELBO gradients.
- `PF-SQ10`: backdoor criterion in causal graphs.
- `PF-SQ11`: what the PC algorithm can and cannot identify from graph structure.
- `PF-SQ14`: derivative requirements in Hyvarinen score matching for continuous EBMs.
- `PF-P2`: finite Markov chain graph, irreducibility, aperiodicity, and unique stationary distribution.
- `PF-P3`: shortest paths via iterative dynamic programming and exact implementation through message-passing GNN layers.
- `PF-P5`: JS-based GAN vs WGAN on shifted uniform intervals, including flat JS gradients and informative Wasserstein gradients.

### Hard

- `HW1-Q7`: formal proof that d-separation implies conditional independence.
- `HW1-Q8`: exact sampling from an Ising model on a tree using sum-product style dynamic programming and top-down sampling.
- `HW1-Q9`: hardness / reduction viewpoint for inference in Ising models, especially reducing partition-function computation to marginals and vice versa via oracle constructions.
- `HW2-Q4`: Markov-chain graph structure, irreducibility, eigendecomposition, stationary distribution, spectral mixing bounds, spectral gap, and conductance.
- `HW2-Q9` (as numbered in the processed file): linear GCN dynamics and oversmoothing through repeated multiplication by normalized adjacency and weight matrices.
- `HW2-PROG`: Gibbs sampling, annealed importance sampling, and Gibbs-with-tempering on Ising grids; compare magnetization and mixing across coupling strengths.
- `HW3-Q2`: local polytope vs marginal polytope, cycle inequalities, and why cycle constraints are still insufficient in general.
- `HW3-Q3`: loopy belief propagation on a cycle, including convergence in one regime and periodic non-convergence in another.
- `HW3-Q4`: Bayesian HMM with Dirichlet priors, mean-field factorization, and CAVI updates for `q(pi)`, `q(A)`, and `q(z_t)`.
- `HW3-PROG`: variational inference / variational EM for LDA on text data.
- `HW4-Q1`: exponential families; closed-form score-matching estimator; convexity of NCE; and Hessian-level comparison of NCE vs MLE efficiency.
- `M1-Q11`: explicit construction of maximal-clique log-potentials from smaller local log-potentials, i.e. constructive clique-based factorization reasoning.
- `PF-P4`: modified score-matching objectives, gradient matching vs score matching, generalized score matching, and weighting rare informative regions.

## Topic -> Assessment Reverse Map

### Directed Graphical Models / Bayesian Networks / D-Separation / Moralization

- `HW1-Q2` (`Easy`): Bayesian network factorization, d-separation, Markov blankets, and moralization.
- `HW1-Q7` (`Hard`): formal proof that d-separation implies conditional independence.
- `M1-Q1` (`Easy`): Bayesian network local reasoning: Markov blanket and d-separation / conditional independence.
- `PF-P1` (`Easy`): Bayesian network factorization, d-separation, Markov blankets, and moralization.

### Undirected Graphical Models / Cliques / Markov Blankets / Factor-Graph Conversion

- `HW1-Q1` (`Easy`): undirected graphical model factorization, conditional independence by graph separation, and Markov blankets.
- `HW1-Q4` (`Easy`): convert between UGMs, DAGs, and factor graphs.
- `M1-Q2` (`Easy`): undirected graphical model local reasoning: Markov blanket, factor-graph conversion, and separation.
- `M1-Q11` (`Hard`): explicit construction of maximal-clique log-potentials from smaller local log-potentials.

### Exact Inference / Belief Propagation / Variable Elimination / Treewidth / Tree Decomposition

- `HW1-Q5` (`Medium`): exact belief propagation on a tree factor graph.
- `HW1-Q6` (`Medium`): variable elimination order and factor growth on trees.
- `HW1-Q8` (`Hard`): exact sampling from an Ising model on a tree via DP / sum-product ideas.
- `M1-Q12` (`Medium`): construct and verify a tree decomposition.
- `HW3-Q3` (`Hard`): loopy belief propagation convergence and non-convergence on a cycle.

### Information Theory / KL / Mutual Information / Metrics / IPMs

- `HW1-Q3` (`Medium`): KL non-metric behavior and covariance vs mutual information.
- `HW4-Q3` (`Easy`): metric properties, KL not being a metric, and when `d_F` is a metric.
- `PF-SQ1` (`Medium`): Gibbs variational principle relaxations and inner vs outer approximations.
- `PF-SQ4` (`Medium`): `KL(q || p)` vs `KL(p || q)`.
- `PF-SQ6` (`Easy`): VI vs MCMC and the role of the ELBO.
- `PF-SQ14` (`Medium`): derivative requirements in Hyvarinen score matching.

### Hardness / Reductions / Computational Complexity

- `HW1-Q9` (`Hard`): partition-function / marginal reduction arguments for Ising inference.

### Markov Chains / MCMC / Gibbs / Metropolis-Hastings / HMC / Tempering

- `HW2-Q1` (`Easy`): MCMC concept checks.
- `HW2-Q2` (`Medium`): rejection-sampling proposal validity.
- `HW2-Q3` (`Easy`): Gibbs sampling for a bivariate Gaussian.
- `HW2-Q4` (`Hard`): finite-chain spectral and conductance analysis.
- `HW2-PROG` (`Hard`): Gibbs, AIS, and tempering on Ising grids.
- `M1-Q3` (`Easy`): irreducibility and aperiodicity for a finite Markov chain.
- `M1-Q4` (`Easy`): MALA concept check.
- `M1-Q5` (`Easy`): Metropolis-Hastings / conductance concept check.
- `M1-Q6` (`Easy`): Gibbs-sampling / ergodicity concept check.
- `M1-Q7` (`Easy`): simulated tempering intuition.
- `M1-Q8` (`Easy`): simulated tempering stationary-distribution intuition.
- `M1-Q9` (`Medium`): systematic-scan Gibbs sampler.
- `M1-Q10` (`Medium`): Metropolis-Hastings independent sampler.
- `PF-SQ5` (`Medium`): HMC and simulated tempering as extended-state chains.
- `PF-SQ6` (`Easy`): VI vs MCMC and the ELBO.

### Mixing Time / Spectral Gap / Conductance / Reversibility / Stationarity

- `HW2-Q4` (`Hard`): spectral mixing bounds, spectral gap, and conductance.
- `M1-Q3` (`Easy`): irreducibility and aperiodicity.
- `M1-Q9` (`Medium`): stationarity and non-reversibility for systematic-scan Gibbs.
- `M1-Q10` (`Medium`): acceptance rule, irreducibility, aperiodicity, and slow mixing.
- `PF-P2` (`Medium`): finite Markov chain graph, aperiodicity, and unique stationary distribution.

### Variational Inference / Mean Field / ELBO / CAVI / Latent-Variable Inference

- `HW3-Q1` (`Medium`): mean-field approximation and non-concavity.
- `HW3-Q4` (`Hard`): Bayesian HMM mean-field CAVI updates.
- `HW3-Q5` (`Medium`): REINFORCE vs reparameterization variance comparison.
- `HW3-PROG` (`Hard`): variational inference / variational EM for LDA.
- `PF-SQ1` (`Medium`): Gibbs variational principle relaxations.
- `PF-SQ4` (`Medium`): `KL(q || p)` vs `KL(p || q)`.
- `PF-SQ6` (`Easy`): VI vs MCMC and the ELBO.
- `PF-SQ9` (`Medium`): when REINFORCE vs reparameterization applies directly.

### Marginal Polytope / Local Polytope / Loopy BP

- `HW3-Q2` (`Hard`): local polytope vs marginal polytope and cycle inequalities.
- `HW3-Q3` (`Hard`): loopy BP convergence and periodic non-convergence.

### HMMs / Sequence Models / Structured Latent Variables

- `HW3-Q4` (`Hard`): Bayesian HMM with Dirichlet priors and latent-state updates.

### VAE Gradient Estimators / REINFORCE vs Reparameterization

- `HW3-Q5` (`Medium`): estimator-variance comparison.
- `PF-SQ9` (`Medium`): direct applicability of REINFORCE vs reparameterization.

### GNNs / Message Passing / Over-Smoothing / Algorithm Simulation On Graphs

- `HW2-Q9` (`Hard`): linear GCN dynamics and oversmoothing.
- `PF-SQ2` (`Easy`): over-smoothing vs over-squashing.
- `PF-P3` (`Medium`): shortest paths as message-passing GNN computation.

### Score Matching / Generalized Score Matching / NCE / Exponential Families

- `HW4-Q1` (`Hard`): exponential families, score matching, and NCE.
- `HW4-PROG` (`Medium`): neural score matching on Gaussian mixtures.
- `PF-SQ8` (`Easy`): NCE noise-distribution choice.
- `PF-SQ14` (`Medium`): Hyvarinen score-matching derivative requirements.
- `PF-P4` (`Hard`): gradient matching vs score matching and generalized score matching.

### GANs / WGAN / Wasserstein / CycleGAN / Generator-Gradient Behavior

- `HW4-Q2` (`Medium`): WGAN trace-form analysis and best-response cycling.
- `PF-SQ3` (`Easy`): standard GAN vs Wasserstein intuition.
- `PF-SQ7` (`Medium`): standard GAN local minima and CycleGAN non-uniqueness.
- `PF-P5` (`Medium`): JS-based GAN vs WGAN on shifted uniforms.

### Diffusion / Score-Based Sampling / Probability-Flow ODE

- `PF-SQ12` (`Easy`): predictor-corrector diffusion sampling.
- `PF-SQ13` (`Easy`): probability-flow ODE uses.

### Causality / Backdoor / Causal Discovery

- `PF-SQ10` (`Medium`): backdoor criterion.
- `PF-SQ11` (`Medium`): PC algorithm identifiability.

## What This Suggests About Exam Prep

- If you are weak on `graph structure reasoning`, do `HW1-Q1/Q2/Q4/Q5`, `M1-Q1/Q2`, and `PF-P1`.
- If you are weak on `MCMC`, the densest cluster is `HW2`, then `M1-Q3-Q10`, then `PF-SQ5/SQ6`.
- If you are weak on `VI`, the most important sources are `HW3-Q1/Q4/Q5` plus `PF-SQ1/SQ4/SQ6/SQ9`.
- If you are weak on `beyond-likelihood generative modeling`, focus on `HW4-Q1/Q2`, `PF-SQ3/SQ8/SQ12/SQ13/SQ14`, and `PF-P4/P5`.
- If you want the most final-like late-course conceptual review, the `Practice Final` is the best single source because it touches `VI`, `MCMC`, `GANs`, `score matching`, `diffusion`, `causality`, and `GNNs` in one place.
