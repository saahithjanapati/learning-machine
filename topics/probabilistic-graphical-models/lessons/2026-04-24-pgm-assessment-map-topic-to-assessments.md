# PGM Assessment Map: Topic To Assessments

## Jump

- [[2026-04-24-pgm-assessment-topic-map|Hub]]
- [[2026-04-24-pgm-assessment-map-question-to-topic|Question -> Topic Map]]
- [[2026-04-24-pgm-assessment-map-difficulty-to-questions|Difficulty -> Question Map]]

Legend:
- <span style="color: #86EFAC;">green</span> = reviewed together and currently marked as answered correctly
- <span style="color: #FDE047;">yellow</span> = needs review, concept clarification, or more study
- <span style="color: #FDA4AF;">red</span> = reviewed together and currently marked as needs more practice

## Topic -> Assessment Reverse Map

### Directed Graphical Models / Bayesian Networks / D-Separation / Moralization

- `HW1-Q2` (`Easy`): Bayesian network factorization, d-separation, Markov blankets, and moralization.
- `HW1-Q7` (`Hard`): formal proof that d-separation implies conditional independence.
- <span style="color: #86EFAC;">`M1-Q1` (`Easy`): Bayesian network local reasoning: Markov blanket and d-separation / conditional independence. Reviewed in live chat; Markov blanket answer for $D$ was correct.</span>
- `PF-P1` (`Easy`): Bayesian network factorization, d-separation, Markov blankets, and moralization.

### Undirected Graphical Models / Cliques / Markov Blankets / Factor-Graph Conversion

- `HW1-Q1` (`Easy`): undirected graphical model factorization, conditional independence by graph separation, and Markov blankets.
- `HW1-Q4` (`Easy`): convert between UGMs, DAGs, and factor graphs.
- <span style="color: #86EFAC;">`M1-Q2` (`Easy`): undirected graphical model local reasoning: Markov blanket, factor-graph conversion, and separation. Reviewed in live chat; parts (a), (b), and (c) were correct.</span>
- `M1-Q11` (`Hard`): explicit construction of maximal-clique log-potentials from smaller local log-potentials.

### Exact Inference / Belief Propagation / Variable Elimination / Treewidth / Tree Decomposition

- `HW1-Q5` (`Medium`): exact belief propagation on a tree factor graph.
- `HW1-Q6` (`Medium`): variable elimination order and factor growth on trees.
- `HW1-Q8` (`Hard`): exact sampling from an Ising model on a tree via DP / sum-product ideas.
- `M1-Q12` (`Medium`): construct and verify a tree decomposition.
- `HW3-Q3` (`Hard`): loopy belief propagation convergence and non-convergence on a cycle.

### Information Theory / KL / Mutual Information / Metrics / IPMs

- <span style="color: #FDA4AF;">`HW1-Q3` (`Medium`): KL non-metric behavior and covariance vs mutual information. Reviewed in live chat; marked red for counterexample/Pinsker proof-template difficulty.</span>
- `HW4-Q3` (`Easy`): metric properties, KL not being a metric, and when `d_F` is a metric.
- <span style="color: #86EFAC;">`PF-SQ1` (`Medium`): Gibbs variational principle relaxations and inner vs outer approximations. Reviewed in live chat; your answer `1 and 4` was correct.</span>
- <span style="color: #86EFAC;">`PF-SQ4` (`Medium`): `KL(q || p)` vs `KL(p || q)`. Reviewed in live chat; your answer `1 and 2` was correct.</span>
- <span style="color: #86EFAC;">`PF-SQ6` (`Easy`): VI vs MCMC and the role of the ELBO. Reviewed in live chat; your answer `2 only` was correct.</span>
- <span style="color: #86EFAC;">`PF-SQ14` (`Medium`): derivative requirements in Hyvarinen score matching. Reviewed in live chat; your answer `1 and 2` was correct.</span>

### Hardness / Reductions / Computational Complexity

- `HW1-Q9` (`Hard`): partition-function / marginal reduction arguments for Ising inference.

### Markov Chains / MCMC / Gibbs / Metropolis-Hastings / HMC / Tempering

- `HW2-Q1` (`Easy`): MCMC concept checks.
- `HW2-Q2` (`Medium`): rejection-sampling proposal validity.
- `HW2-Q3` (`Easy`): Gibbs sampling for a bivariate Gaussian.
- `HW2-Q4` (`Hard`): finite-chain spectral and conductance analysis.
- `HW2-PROG` (`Hard`): Gibbs, AIS, and tempering on Ising grids.
- <span style="color: #FDE047;">`M1-Q3` (`Easy`): irreducibility and aperiodicity for a finite Markov chain. Reviewed in live chat; concepts understood, but the question was answered incorrectly.</span>
- <span style="color: #86EFAC;">`M1-Q4` (`Easy`): MALA concept check. Reviewed in live chat; your answer `False` was correct.</span>
- <span style="color: #FDA4AF;">`M1-Q5` (`Easy`): Metropolis-Hastings / conductance concept check. Reviewed in live chat; marked red for conductance confusion / needs more practice.</span>
- <span style="color: #FDE047;">`M1-Q6` (`Easy`): Gibbs-sampling / ergodicity concept check. Reviewed in live chat; concepts understood, but the question was answered incorrectly.</span>
- <span style="color: #86EFAC;">`M1-Q7` (`Easy`): simulated tempering intuition. Reviewed in live chat; your answer `False` was correct.</span>
- <span style="color: #FDE047;">`M1-Q8` (`Easy`): simulated tempering stationary-distribution intuition. Reviewed in live chat; concepts mostly understood, but needed clarification.</span>
- `M1-Q9` (`Medium`): systematic-scan Gibbs sampler.
- `M1-Q10` (`Medium`): Metropolis-Hastings independent sampler.
- <span style="color: #FDE047;">`PF-SQ5` (`Medium`): HMC and simulated tempering as extended-state chains. Reviewed in live chat; concepts mostly understood, but needed clarification.</span>
- <span style="color: #86EFAC;">`PF-SQ6` (`Easy`): VI vs MCMC and the ELBO. Reviewed in live chat; your answer `2 only` was correct.</span>

### Mixing Time / Spectral Gap / Conductance / Reversibility / Stationarity

- `HW2-Q4` (`Hard`): spectral mixing bounds, spectral gap, and conductance.
- <span style="color: #FDE047;">`M1-Q3` (`Easy`): irreducibility and aperiodicity. Reviewed in live chat; concepts understood, but the question was answered incorrectly.</span>
- `M1-Q9` (`Medium`): stationarity and non-reversibility for systematic-scan Gibbs.
- `M1-Q10` (`Medium`): acceptance rule, irreducibility, aperiodicity, and slow mixing.
- `PF-P2` (`Medium`): finite Markov chain graph, aperiodicity, and unique stationary distribution.

### Variational Inference / Mean Field / ELBO / CAVI / Latent-Variable Inference

- `HW3-Q1` (`Medium`): mean-field approximation and non-concavity.
- `HW3-Q4` (`Hard`): Bayesian HMM mean-field CAVI updates.
- `HW3-Q5` (`Medium`): REINFORCE vs reparameterization variance comparison.
- `HW3-PROG` (`Hard`): variational inference / variational EM for LDA.
- <span style="color: #86EFAC;">`PF-SQ1` (`Medium`): Gibbs variational principle relaxations. Reviewed in live chat; your answer `1 and 4` was correct.</span>
- <span style="color: #86EFAC;">`PF-SQ4` (`Medium`): `KL(q || p)` vs `KL(p || q)`. Reviewed in live chat; your answer `1 and 2` was correct.</span>
- <span style="color: #86EFAC;">`PF-SQ6` (`Easy`): VI vs MCMC and the ELBO. Reviewed in live chat; your answer `2 only` was correct.</span>
- <span style="color: #FDE047;">`PF-SQ9` (`Medium`): when REINFORCE vs reparameterization applies directly. Reviewed in live chat; answers were correct, but part (c) needed clarification.</span>

### Marginal Polytope / Local Polytope / Loopy BP

- `HW3-Q2` (`Hard`): local polytope vs marginal polytope and cycle inequalities.
- `HW3-Q3` (`Hard`): loopy BP convergence and periodic non-convergence.

### HMMs / Sequence Models / Structured Latent Variables

- `HW3-Q4` (`Hard`): Bayesian HMM with Dirichlet priors and latent-state updates.

### VAE Gradient Estimators / REINFORCE vs Reparameterization

- `HW3-Q5` (`Medium`): estimator-variance comparison.
- <span style="color: #FDE047;">`PF-SQ9` (`Medium`): direct applicability of REINFORCE vs reparameterization. Reviewed in live chat; answers were correct, but part (c) needed clarification.</span>

### GNNs / Message Passing / Over-Smoothing / Algorithm Simulation On Graphs

- `HW2-Q9` (`Hard`): linear GCN dynamics and oversmoothing.
- <span style="color: #86EFAC;">`PF-SQ2` (`Easy`): over-smoothing vs over-squashing. Reviewed in live chat; your answer `1 and 2` was correct.</span>
- `PF-P3` (`Medium`): shortest paths as message-passing GNN computation.

### Score Matching / Generalized Score Matching / NCE / Exponential Families

- `HW4-Q1` (`Hard`): exponential families, score matching, and NCE.
- `HW4-PROG` (`Medium`): neural score matching on Gaussian mixtures.
- <span style="color: #86EFAC;">`PF-SQ8` (`Easy`): NCE noise-distribution choice. Reviewed in live chat; your answer `False` was correct.</span>
- <span style="color: #86EFAC;">`PF-SQ14` (`Medium`): Hyvarinen score-matching derivative requirements. Reviewed in live chat; your answer `1 and 2` was correct.</span>
- <span style="color: #FDE047;">`PF-P4` (`Hard`): gradient matching vs score matching and generalized score matching. Need to study; did not understand yet.</span>

### GANs / WGAN / Wasserstein / CycleGAN / Generator-Gradient Behavior

- `HW4-Q2` (`Medium`): WGAN trace-form analysis and best-response cycling.
- <span style="color: #86EFAC;">`PF-SQ3` (`Easy`): standard GAN vs Wasserstein intuition. Reviewed in live chat; your answer `1 and 4` was correct.</span>
- `PF-SQ7` (`Medium`): standard GAN local minima and CycleGAN non-uniqueness.
- `PF-P5` (`Medium`): JS-based GAN vs WGAN on shifted uniforms.

### Diffusion / Score-Based Sampling / Probability-Flow ODE

- <span style="color: #FDE047;">`PF-SQ12` (`Easy`): predictor-corrector diffusion sampling. Reviewed in live chat; answer `2 and 3` was correct, but reverse-time SDE / probability-flow ODE integration needed clarification.</span>
- <span style="color: #86EFAC;">`PF-SQ13` (`Easy`): probability-flow ODE uses. Reviewed in live chat; your answer `4, all of the above` was correct.</span>

### Causality / Backdoor / Causal Discovery

- `PF-SQ10` (`Medium`): backdoor criterion.
- `PF-SQ11` (`Medium`): PC algorithm identifiability.

## Comprehensive Notes Worked Problems By Topic

These `WPx.y` entries are worked examples from the comprehensive notes, not separate graded assessment questions.

### Foundations / Representation / Inference / Learning

- `WP1.1` (`Easy`): [[2026-04-20-pgm-exam-prep-section-01-foundations#Problem 1.1|full-joint table size]] and exponential scaling.
- `WP1.2` (`Easy`): [[2026-04-20-pgm-exam-prep-section-01-foundations#Problem 1.2|why a graph is not itself a probability distribution]].
- `WP1.3` (`Easy`): [[2026-04-20-pgm-exam-prep-section-01-foundations#Problem 1.3|marginal vs conditional distributions]].
- `WP1.4` (`Medium`): [[2026-04-20-pgm-exam-prep-section-01-foundations#Problem 1.4|compact representation vs inference difficulty]].
- `WP1.5` (`Easy`): [[2026-04-20-pgm-exam-prep-section-01-foundations#Problem 1.5|representation vs inference vs learning tasks]].

### Directed Graphical Models / D-Separation / Markov Blankets

- `WP2.1` (`Easy`): [[2026-04-20-pgm-exam-prep-section-02-directed-undirected#Problem 2.1|DAG factorization from parent sets]].
- `WP2.2` (`Easy`): [[2026-04-20-pgm-exam-prep-section-02-directed-undirected#Problem 2.2|chain, fork, and collider conditioning rules]].
- `WP2.3` (`Medium`): [[2026-04-20-pgm-exam-prep-section-02-directed-undirected#Problem 2.3|collider blocking and opening]].
- `WP2.4` (`Easy`): [[2026-04-20-pgm-exam-prep-section-02-directed-undirected#Problem 2.4|DAG Markov blanket]].

### Undirected Graphical Models / Cliques / Partition Functions

- `WP2.5` (`Easy`): [[2026-04-20-pgm-exam-prep-section-02-directed-undirected#Problem 2.5|why UGMs need partition functions]].
- `WP2.6` (`Easy`): [[2026-04-20-pgm-exam-prep-section-02-directed-undirected#Problem 2.6|UGM cliques and graph separation]].
- `WP2.7` (`Medium`): [[2026-04-20-pgm-exam-prep-section-02-directed-undirected#Problem 2.7|directed vs undirected probability semantics]].

### Exact Inference / Belief Propagation / Variable Elimination / Treewidth

- `WP3.1` (`Medium`): [[2026-04-20-pgm-exam-prep-section-03-inference-bp#Problem 3.1|variable elimination for a marginal]].
- `WP3.2` (`Easy`): [[2026-04-20-pgm-exam-prep-section-03-inference-bp#Problem 3.2|elimination order and runtime]].
- `WP3.3` (`Easy`): [[2026-04-20-pgm-exam-prep-section-03-inference-bp#Problem 3.3|BP recipient-exclusion rule]].
- `WP3.4` (`Medium`): [[2026-04-20-pgm-exam-prep-section-03-inference-bp#Problem 3.4|BP exactness on trees vs loopy graphs]].
- `WP3.5` (`Medium`): [[2026-04-20-pgm-exam-prep-section-03-inference-bp#Problem 3.5|forward-backward vs Viterbi]].
- `WP3.6` (`Medium`): [[2026-04-20-pgm-exam-prep-section-03-inference-bp#Problem 3.6|treewidth and exact inference]].

### GNNs / Message Passing / Over-Smoothing / Algorithm Simulation On Graphs

- `WP4.1` (`Easy`): [[2026-04-20-pgm-exam-prep-section-04-gnns#Problem 4.1|why compare GNNs to BP]].
- `WP4.2` (`Easy`): [[2026-04-20-pgm-exam-prep-section-04-gnns#Problem 4.2|BP messages vs GNN messages]].
- `WP4.3` (`Easy`): [[2026-04-20-pgm-exam-prep-section-04-gnns#Problem 4.3|permutation-invariant aggregation]].
- `WP4.4` (`Easy`): [[2026-04-20-pgm-exam-prep-section-04-gnns#Problem 4.4|k-hop dependence after k rounds]].
- `WP4.5` (`Easy`): [[2026-04-20-pgm-exam-prep-section-04-gnns#Problem 4.5|over-smoothing vs over-squashing]].
- `WP4.6` (`Easy`): [[2026-04-20-pgm-exam-prep-section-04-gnns#Problem 4.6|shortest paths as message passing]].

### Markov Chains / MCMC / Gibbs / Metropolis-Hastings / HMC / Tempering

- `WP5.1` (`Easy`): [[2026-04-20-pgm-exam-prep-section-05-mcmc#Problem 5.1|stationarity vs fast mixing]].
- `WP5.2` (`Medium`): [[2026-04-20-pgm-exam-prep-section-05-mcmc#Problem 5.2|detailed balance implies stationarity]].
- `WP5.3` (`Easy`): [[2026-04-20-pgm-exam-prep-section-05-mcmc#Problem 5.3|MH with unnormalized targets]].
- `WP5.4` (`Medium`): [[2026-04-20-pgm-exam-prep-section-05-mcmc#Problem 5.4|Gibbs as MH with acceptance 1]].
- `WP5.5` (`Easy`): [[2026-04-20-pgm-exam-prep-section-05-mcmc#Problem 5.5|slow-mixing structures]].
- `WP5.6` (`Easy`): [[2026-04-20-pgm-exam-prep-section-05-mcmc#Problem 5.6|gradient descent is not sampling]].
- `WP5.7` (`Medium`): [[2026-04-20-pgm-exam-prep-section-05-mcmc#Problem 5.7|HMC vs random-walk MH]].
- `WP5.8` (`Medium`): [[2026-04-20-pgm-exam-prep-section-05-mcmc#Problem 5.8|HMC and tempering as extended-state methods]].

### Variational Inference / Mean Field / ELBO / EM / VAEs

- `WP6.1` (`Easy`): [[2026-04-20-pgm-exam-prep-section-06-vi-em-vae#Problem 6.1|MCMC vs VI philosophy]].
- `WP6.2` (`Medium`): [[2026-04-20-pgm-exam-prep-section-06-vi-em-vae#Problem 6.2|ELBO lower-bound identity]].
- `WP6.3` (`Medium`): [[2026-04-20-pgm-exam-prep-section-06-vi-em-vae#Problem 6.3|ELBO maximization and posterior approximation]].
- `WP6.4` (`Easy`): [[2026-04-20-pgm-exam-prep-section-06-vi-em-vae#Problem 6.4|mean-field VI tradeoff]].
- `WP6.5` (`Medium`): [[2026-04-20-pgm-exam-prep-section-06-vi-em-vae#Problem 6.5|mode-seeking `KL(q || p)`]].
- `WP6.6` (`Medium`): [[2026-04-20-pgm-exam-prep-section-06-vi-em-vae#Problem 6.6|EM vs variational EM]].
- `WP6.7` (`Easy`): [[2026-04-20-pgm-exam-prep-section-06-vi-em-vae#Problem 6.7|VAE vs classical VI]].
- `WP6.8` (`Medium`): [[2026-04-20-pgm-exam-prep-section-06-vi-em-vae#Problem 6.8|REINFORCE vs reparameterization]].
- `WP6.9` (`Medium`): [[2026-04-20-pgm-exam-prep-section-06-vi-em-vae#Problem 6.9|VAE reconstruction and KL terms]].

### Score Matching / NCE / GANs / Diffusion

- `WP7.1` (`Medium`): [[2026-04-20-pgm-exam-prep-section-07-generative-models#Problem 7.1|optimal GAN discriminator]].
- `WP7.2` (`Medium`): [[2026-04-20-pgm-exam-prep-section-07-generative-models#Problem 7.2|JS-GAN support-mismatch gradients]].
- `WP7.3` (`Medium`): [[2026-04-20-pgm-exam-prep-section-07-generative-models#Problem 7.3|score matching avoids partition functions]].
- `WP7.4` (`Medium`): [[2026-04-20-pgm-exam-prep-section-07-generative-models#Problem 7.4|integration by parts in score matching]].
- `WP7.5` (`Easy`): [[2026-04-20-pgm-exam-prep-section-07-generative-models#Problem 7.5|GAN vs NCE discrimination]].
- `WP7.6` (`Easy`): [[2026-04-20-pgm-exam-prep-section-07-generative-models#Problem 7.6|denoising score matching and diffusion]].
- `WP7.7` (`Easy`): [[2026-04-20-pgm-exam-prep-section-07-generative-models#Problem 7.7|corrector step in PC sampling]].
- `WP7.8` (`Medium`): [[2026-04-20-pgm-exam-prep-section-07-generative-models#Problem 7.8|probability-flow ODE significance]].

### Causality / Backdoor / Front-Door / Causal Discovery

- `WP8.1` (`Easy`): [[2026-04-20-pgm-exam-prep-section-08-causality#Problem 8.1|conditioning vs intervention]].
- `WP8.2` (`Easy`): [[2026-04-20-pgm-exam-prep-section-08-causality#Problem 8.2|truncated factorization]].
- `WP8.3` (`Medium`): [[2026-04-20-pgm-exam-prep-section-08-causality#Problem 8.3|backdoor and descendants of treatment]].
- `WP8.4` (`Medium`): [[2026-04-20-pgm-exam-prep-section-08-causality#Problem 8.4|backdoor vs front-door]].
- `WP8.5` (`Easy`): [[2026-04-20-pgm-exam-prep-section-08-causality#Problem 8.5|Markov equivalence and observational ambiguity]].
- `WP8.6` (`Easy`): [[2026-04-20-pgm-exam-prep-section-08-causality#Problem 8.6|PC as constraint-based causal discovery]].
- `WP8.7` (`Medium`): [[2026-04-20-pgm-exam-prep-section-08-causality#Problem 8.7|interventions help causal discovery]].
- `WP8.8` (`Medium`): [[2026-04-20-pgm-exam-prep-section-08-causality#Problem 8.8|intervention-count bounds]].
