# PGM Assessment Map: Question To Topic

## Jump

- [[2026-04-24-pgm-assessment-topic-map|Hub]]
- [[2026-04-24-pgm-assessment-map-difficulty-to-questions|Difficulty -> Question Map]]
- [[2026-04-24-pgm-assessment-map-topic-to-assessments|Topic -> Assessment Reverse Map]]

Legend:
- <span style="color: #86EFAC;">green</span> = reviewed together and currently marked as answered correctly
- <span style="color: #FDE047;">yellow</span> = needs review, concept clarification, or more study
- <span style="color: #FDA4AF;">red</span> = reviewed together and currently marked as needs more practice

## Question -> Topic Map

### Homework 1

- `HW1-Q1` (`Easy`): undirected graphical model factorization, conditional independence by graph separation, and Markov blankets.
- `HW1-Q2` (`Easy`): Bayesian network factorization, d-separation, Markov blankets, and moralization.
- <span style="color: #FDA4AF;">`HW1-Q3` (`Medium`): KL divergence as a non-metric and the relation between covariance and mutual information via Pinsker-style reasoning. Reviewed in live chat; marked red for counterexample/Pinsker proof-template difficulty.</span>
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

- <span style="color: #86EFAC;">`M1-Q1` (`Easy`): Bayesian network local reasoning: Markov blanket and d-separation / conditional independence. Reviewed in live chat; Markov blanket answer for $D$ was correct.</span>
- <span style="color: #86EFAC;">`M1-Q2` (`Easy`): undirected graphical model local reasoning: Markov blanket, factor-graph conversion, and separation. Reviewed in live chat; parts (a), (b), and (c) were correct.</span>
- <span style="color: #FDE047;">`M1-Q3` (`Easy`): irreducibility and aperiodicity for a finite Markov chain. Reviewed in live chat; concepts understood, but the question was answered incorrectly.</span>
- <span style="color: #86EFAC;">`M1-Q4` (`Easy`): MALA concept check. Reviewed in live chat; your answer `False` was correct.</span>
- <span style="color: #FDA4AF;">`M1-Q5` (`Easy`): Metropolis-Hastings / conductance concept check. Reviewed in live chat; marked red for conductance confusion / needs more practice.</span>
- <span style="color: #FDE047;">`M1-Q6` (`Easy`): Gibbs-sampling / ergodicity concept check. Reviewed in live chat; concepts understood, but the question was answered incorrectly.</span>
- <span style="color: #86EFAC;">`M1-Q7` (`Easy`): simulated tempering intuition. Reviewed in live chat; your answer `False` was correct.</span>
- <span style="color: #FDE047;">`M1-Q8` (`Easy`): simulated tempering stationary-distribution intuition. Reviewed in live chat; concepts mostly understood, but needed clarification.</span>
- `M1-Q9` (`Medium`): systematic-scan Gibbs sampler on a two-variable distribution: full conditionals, sweep transition matrix, stationarity, and non-reversibility.
- `M1-Q10` (`Medium`): Metropolis-Hastings independent sampler: acceptance probability, irreducibility, aperiodicity, high-dimensional slow mixing, and comparison with coordinate-wise Gibbs.
- `M1-Q11` (`Hard`): explicit construction of maximal-clique log-potentials from smaller local log-potentials, i.e. constructive clique-based factorization reasoning.
- `M1-Q12` (`Medium`): construct and verify a tree decomposition with the cover, edge, and running-intersection properties.

### Practice Final: Short Questions

- <span style="color: #86EFAC;">`PF-SQ1` (`Medium`): Gibbs variational principle relaxations, inner vs outer approximations, and mean field as an inner approximation. Reviewed in live chat; your answer `1 and 4` was correct.</span>
- <span style="color: #86EFAC;">`PF-SQ2` (`Easy`): over-smoothing vs over-squashing in deep GNNs. Reviewed in live chat; your answer `1 and 2` was correct.</span>
- <span style="color: #86EFAC;">`PF-SQ3` (`Easy`): GAN basics, JS-divergence view of standard GANs, and why Wasserstein objectives help with vanishing gradients. Reviewed in live chat; your answer `1 and 4` was correct.</span>
- <span style="color: #86EFAC;">`PF-SQ4` (`Medium`): `KL(q || p)` vs `KL(p || q)` and the mode-seeking vs mass-covering distinction. Reviewed in live chat; your answer `1 and 2` was correct.</span>
- <span style="color: #FDE047;">`PF-SQ5` (`Medium`): HMC and simulated tempering as Markov chains on extended state spaces. Reviewed in live chat; concepts mostly understood, but needed clarification.</span>
- <span style="color: #86EFAC;">`PF-SQ6` (`Easy`): VI vs MCMC and the role of the ELBO. Reviewed in live chat; your answer `2 only` was correct.</span>
- `PF-SQ7` (`Medium`): standard GAN local minima and non-uniqueness in CycleGAN even with cycle consistency.
- <span style="color: #86EFAC;">`PF-SQ8` (`Easy`): NCE noise-distribution choice and why "farther from the data" is not automatically better. Reviewed in live chat; your answer `False` was correct.</span>
- <span style="color: #FDE047;">`PF-SQ9` (`Medium`): when REINFORCE vs reparameterization can be applied directly for unbiased VAE / ELBO gradients. Reviewed in live chat; answers were correct, but part (c) needed clarification.</span>
- `PF-SQ10` (`Medium`): backdoor criterion in causal graphs.
- `PF-SQ11` (`Medium`): what the PC algorithm can and cannot identify from graph structure.
- <span style="color: #FDE047;">`PF-SQ12` (`Easy`): predictor-corrector sampling for score-based diffusion models. Reviewed in live chat; answer `2 and 3` was correct, but reverse-time SDE / probability-flow ODE integration needed clarification.</span>
- <span style="color: #86EFAC;">`PF-SQ13` (`Easy`): probability-flow ODE uses in diffusion models: likelihoods, faster sampling, and inversion / latent-trajectory reasoning. Reviewed in live chat; your answer `4, all of the above` was correct.</span>
- <span style="color: #86EFAC;">`PF-SQ14` (`Medium`): derivative requirements in Hyvarinen score matching for continuous EBMs. Reviewed in live chat; your answer `1 and 2` was correct.</span>

### Practice Final: Long Problems

- `PF-P1` (`Easy`): Bayesian network factorization, d-separation, Markov blankets, and moralization.
- `PF-P2` (`Medium`): finite Markov chain graph, irreducibility, aperiodicity, and unique stationary distribution.
- `PF-P3` (`Medium`): shortest paths via iterative dynamic programming and exact implementation through message-passing GNN layers.
- <span style="color: #FDE047;">`PF-P4` (`Hard`): modified score-matching objectives, gradient matching vs score matching, generalized score matching, and weighting rare informative regions. Need to study; did not understand yet.</span>
- `PF-P5` (`Medium`): JS-based GAN vs WGAN on shifted uniform intervals, including flat JS gradients and informative Wasserstein gradients.

### Comprehensive Notes: Worked Problems

- `WP1.1` (`Easy`): [[2026-04-20-pgm-exam-prep-section-01-foundations#Problem 1.1|full-joint table size]] for binary variables and exponential scaling.
- `WP1.2` (`Easy`): [[2026-04-20-pgm-exam-prep-section-01-foundations#Problem 1.2|why a graph is not itself a probability distribution]].
- `WP1.3` (`Easy`): [[2026-04-20-pgm-exam-prep-section-01-foundations#Problem 1.3|marginal distributions vs conditional distributions]].
- `WP1.4` (`Medium`): [[2026-04-20-pgm-exam-prep-section-01-foundations#Problem 1.4|why compact representation does not imply easy inference]].
- `WP1.5` (`Easy`): [[2026-04-20-pgm-exam-prep-section-01-foundations#Problem 1.5|classifying tasks as representation, inference, or learning]].
- `WP2.1` (`Easy`): [[2026-04-20-pgm-exam-prep-section-02-directed-undirected#Problem 2.1|DAG joint factorization from parent sets]].
- `WP2.2` (`Easy`): [[2026-04-20-pgm-exam-prep-section-02-directed-undirected#Problem 2.2|chain, fork, and collider conditioning rules]].
- `WP2.3` (`Medium`): [[2026-04-20-pgm-exam-prep-section-02-directed-undirected#Problem 2.3|collider blocking and opening under conditioning]].
- `WP2.4` (`Easy`): [[2026-04-20-pgm-exam-prep-section-02-directed-undirected#Problem 2.4|DAG Markov blanket from parents, children, and co-parents]].
- `WP2.5` (`Easy`): [[2026-04-20-pgm-exam-prep-section-02-directed-undirected#Problem 2.5|why UGMs need partition functions but DAGs do not]].
- `WP2.6` (`Easy`): [[2026-04-20-pgm-exam-prep-section-02-directed-undirected#Problem 2.6|UGM maximal cliques and graph separation]].
- `WP2.7` (`Medium`): [[2026-04-20-pgm-exam-prep-section-02-directed-undirected#Problem 2.7|probability-semantics difference between DAGs and UGMs]].
- `WP3.1` (`Medium`): [[2026-04-20-pgm-exam-prep-section-03-inference-bp#Problem 3.1|variable-elimination form for computing a marginal]].
- `WP3.2` (`Easy`): [[2026-04-20-pgm-exam-prep-section-03-inference-bp#Problem 3.2|why elimination order affects runtime but not exactness]].
- `WP3.3` (`Easy`): [[2026-04-20-pgm-exam-prep-section-03-inference-bp#Problem 3.3|why BP messages exclude the recipient factor]].
- `WP3.4` (`Medium`): [[2026-04-20-pgm-exam-prep-section-03-inference-bp#Problem 3.4|why BP is exact on trees but not automatically exact on loopy graphs]].
- `WP3.5` (`Medium`): [[2026-04-20-pgm-exam-prep-section-03-inference-bp#Problem 3.5|forward-backward marginals vs the Viterbi path]].
- `WP3.6` (`Medium`): [[2026-04-20-pgm-exam-prep-section-03-inference-bp#Problem 3.6|treewidth as induced-clique size for exact inference]].
- `WP4.1` (`Easy`): [[2026-04-20-pgm-exam-prep-section-04-gnns#Problem 4.1|why GNNs can be compared to belief propagation]].
- `WP4.2` (`Easy`): [[2026-04-20-pgm-exam-prep-section-04-gnns#Problem 4.2|BP messages vs learned GNN messages]].
- `WP4.3` (`Easy`): [[2026-04-20-pgm-exam-prep-section-04-gnns#Problem 4.3|permutation-invariant GNN aggregation]].
- `WP4.4` (`Easy`): [[2026-04-20-pgm-exam-prep-section-04-gnns#Problem 4.4|k-hop dependence after k rounds of message passing]].
- `WP4.5` (`Easy`): [[2026-04-20-pgm-exam-prep-section-04-gnns#Problem 4.5|over-smoothing vs over-squashing]].
- `WP4.6` (`Easy`): [[2026-04-20-pgm-exam-prep-section-04-gnns#Problem 4.6|shortest-path computation as message passing]].
- `WP5.1` (`Easy`): [[2026-04-20-pgm-exam-prep-section-05-mcmc#Problem 5.1|stationarity vs fast mixing]].
- `WP5.2` (`Medium`): [[2026-04-20-pgm-exam-prep-section-05-mcmc#Problem 5.2|why detailed balance implies stationarity]].
- `WP5.3` (`Easy`): [[2026-04-20-pgm-exam-prep-section-05-mcmc#Problem 5.3|why MH works with unnormalized targets]].
- `WP5.4` (`Medium`): [[2026-04-20-pgm-exam-prep-section-05-mcmc#Problem 5.4|Gibbs sampling as MH with acceptance probability 1]].
- `WP5.5` (`Easy`): [[2026-04-20-pgm-exam-prep-section-05-mcmc#Problem 5.5|structural reasons MCMC chains mix slowly]].
- `WP5.6` (`Easy`): [[2026-04-20-pgm-exam-prep-section-05-mcmc#Problem 5.6|why pure gradient descent is not sampling]].
- `WP5.7` (`Medium`): [[2026-04-20-pgm-exam-prep-section-05-mcmc#Problem 5.7|HMC vs random-walk MH]].
- `WP5.8` (`Medium`): [[2026-04-20-pgm-exam-prep-section-05-mcmc#Problem 5.8|extended-state intuition behind HMC and simulated tempering]].
- `WP6.1` (`Easy`): [[2026-04-20-pgm-exam-prep-section-06-vi-em-vae#Problem 6.1|MCMC vs variational-inference philosophy]].
- `WP6.2` (`Medium`): [[2026-04-20-pgm-exam-prep-section-06-vi-em-vae#Problem 6.2|why the ELBO lower-bounds log evidence]].
- `WP6.3` (`Medium`): [[2026-04-20-pgm-exam-prep-section-06-vi-em-vae#Problem 6.3|why maximizing ELBO improves the variational approximation]].
- `WP6.4` (`Easy`): [[2026-04-20-pgm-exam-prep-section-06-vi-em-vae#Problem 6.4|mean-field VI as easier but weaker]].
- `WP6.5` (`Medium`): [[2026-04-20-pgm-exam-prep-section-06-vi-em-vae#Problem 6.5|mode-seeking behavior of `KL(q || p)`]].
- `WP6.6` (`Medium`): [[2026-04-20-pgm-exam-prep-section-06-vi-em-vae#Problem 6.6|EM vs variational EM]].
- `WP6.7` (`Easy`): [[2026-04-20-pgm-exam-prep-section-06-vi-em-vae#Problem 6.7|what makes VAEs different from classical VI]].
- `WP6.8` (`Medium`): [[2026-04-20-pgm-exam-prep-section-06-vi-em-vae#Problem 6.8|REINFORCE vs reparameterization]].
- `WP6.9` (`Medium`): [[2026-04-20-pgm-exam-prep-section-06-vi-em-vae#Problem 6.9|VAE reconstruction and KL terms]].
- `WP7.1` (`Medium`): [[2026-04-20-pgm-exam-prep-section-07-generative-models#Problem 7.1|optimal discriminator for a fixed GAN generator]].
- `WP7.2` (`Medium`): [[2026-04-20-pgm-exam-prep-section-07-generative-models#Problem 7.2|why JS-based GANs can have poor gradients under support mismatch]].
- `WP7.3` (`Medium`): [[2026-04-20-pgm-exam-prep-section-07-generative-models#Problem 7.3|why score matching avoids the partition function]].
- `WP7.4` (`Medium`): [[2026-04-20-pgm-exam-prep-section-07-generative-models#Problem 7.4|why integration by parts is central to score matching]].
- `WP7.5` (`Easy`): [[2026-04-20-pgm-exam-prep-section-07-generative-models#Problem 7.5|GAN discrimination vs NCE discrimination]].
- `WP7.6` (`Easy`): [[2026-04-20-pgm-exam-prep-section-07-generative-models#Problem 7.6|denoising score matching as precursor to diffusion]].
- `WP7.7` (`Easy`): [[2026-04-20-pgm-exam-prep-section-07-generative-models#Problem 7.7|corrector step in predictor-corrector sampling]].
- `WP7.8` (`Medium`): [[2026-04-20-pgm-exam-prep-section-07-generative-models#Problem 7.8|conceptual significance of probability-flow ODEs]].
- `WP8.1` (`Easy`): [[2026-04-20-pgm-exam-prep-section-08-causality#Problem 8.1|conditioning vs intervention]].
- `WP8.2` (`Easy`): [[2026-04-20-pgm-exam-prep-section-08-causality#Problem 8.2|purpose of truncated factorization]].
- `WP8.3` (`Medium`): [[2026-04-20-pgm-exam-prep-section-08-causality#Problem 8.3|why backdoor adjustment forbids treatment descendants]].
- `WP8.4` (`Medium`): [[2026-04-20-pgm-exam-prep-section-08-causality#Problem 8.4|backdoor vs front-door identification]].
- `WP8.5` (`Easy`): [[2026-04-20-pgm-exam-prep-section-08-causality#Problem 8.5|observational indistinguishability and Markov equivalence]].
- `WP8.6` (`Easy`): [[2026-04-20-pgm-exam-prep-section-08-causality#Problem 8.6|what kind of algorithm PC is]].
- `WP8.7` (`Medium`): [[2026-04-20-pgm-exam-prep-section-08-causality#Problem 8.7|why interventions help causal discovery]].
- `WP8.8` (`Medium`): [[2026-04-20-pgm-exam-prep-section-08-causality#Problem 8.8|single-node and multi-node intervention bounds]].
