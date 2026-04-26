# PGM Assessment Map: Difficulty To Questions

## Jump

- [[2026-04-24-pgm-assessment-topic-map|Hub]]
- [[2026-04-24-pgm-assessment-map-question-to-topic|Question -> Topic Map]]
- [[2026-04-24-pgm-assessment-map-topic-to-assessments|Topic -> Assessment Reverse Map]]

Legend:
- <span style="color: #86EFAC;">green</span> = reviewed together and currently marked as answered correctly
- <span style="color: #FDE047;">yellow</span> = needs review, concept clarification, or more study
- <span style="color: #FDA4AF;">red</span> = reviewed together and currently marked as needs more practice

## Difficulty -> Question Map

### Easy

- `HW1-Q1`: undirected graphical model factorization, conditional independence by graph separation, and Markov blankets.
- `HW1-Q2`: Bayesian network factorization, d-separation, Markov blankets, and moralization.
- `HW1-Q4`: convert between UGMs, DAGs, and factor graphs.
- `HW2-Q1`: MCMC concept checks: stationary distribution, rejection sampling in high dimensions, HMC vs Gibbs on discrete spaces, tempering intuition, and slow mixing in Ising models.
- `HW2-Q3`: Gibbs sampling for a bivariate Gaussian via conditional Gaussian formulas.
- `HW4-Q3`: metric properties, KL not being a metric, and when an IPM-style distance `d_F` becomes a true metric.
- <span style="color: #86EFAC;">`M1-Q1`: Bayesian network local reasoning: Markov blanket and d-separation / conditional independence. Reviewed in live chat; Markov blanket answer for $D$ was correct.</span>
- <span style="color: #86EFAC;">`M1-Q2`: undirected graphical model local reasoning: Markov blanket, factor-graph conversion, and separation. Reviewed in live chat; parts (a), (b), and (c) were correct.</span>
- <span style="color: #FDE047;">`M1-Q3`: irreducibility and aperiodicity for a finite Markov chain. Reviewed in live chat; concepts understood, but the question was answered incorrectly.</span>
- <span style="color: #86EFAC;">`M1-Q4`: MALA concept check. Reviewed in live chat; your answer `False` was correct.</span>
- <span style="color: #FDA4AF;">`M1-Q5`: Metropolis-Hastings / conductance concept check. Reviewed in live chat; marked red for conductance confusion / needs more practice.</span>
- <span style="color: #FDE047;">`M1-Q6`: Gibbs-sampling / ergodicity concept check. Reviewed in live chat; concepts understood, but the question was answered incorrectly.</span>
- <span style="color: #86EFAC;">`M1-Q7`: simulated tempering intuition. Reviewed in live chat; your answer `False` was correct.</span>
- <span style="color: #FDE047;">`M1-Q8`: simulated tempering stationary-distribution intuition. Reviewed in live chat; concepts mostly understood, but needed clarification.</span>
- <span style="color: #86EFAC;">`PF-SQ2`: over-smoothing vs over-squashing in deep GNNs. Reviewed in live chat; your answer `1 and 2` was correct.</span>
- <span style="color: #86EFAC;">`PF-SQ3`: GAN basics, JS-divergence view of standard GANs, and why Wasserstein objectives help with vanishing gradients. Reviewed in live chat; your answer `1 and 4` was correct.</span>
- <span style="color: #86EFAC;">`PF-SQ6`: VI vs MCMC and the role of the ELBO. Reviewed in live chat; your answer `2 only` was correct.</span>
- <span style="color: #86EFAC;">`PF-SQ8`: NCE noise-distribution choice and why "farther from the data" is not automatically better. Reviewed in live chat; your answer `False` was correct.</span>
- <span style="color: #FDE047;">`PF-SQ12`: predictor-corrector sampling for score-based diffusion models. Reviewed in live chat; answer `2 and 3` was correct, but reverse-time SDE / probability-flow ODE integration needed clarification.</span>
- <span style="color: #86EFAC;">`PF-SQ13`: probability-flow ODE uses in diffusion models: likelihoods, faster sampling, and inversion / latent-trajectory reasoning. Reviewed in live chat; your answer `4, all of the above` was correct.</span>
- `PF-P1`: Bayesian network factorization, d-separation, Markov blankets, and moralization.
- `WP1.1`: [[2026-04-20-pgm-exam-prep-section-01-foundations#Problem 1.1|full-joint table size and exponential scaling]].
- `WP1.2`: [[2026-04-20-pgm-exam-prep-section-01-foundations#Problem 1.2|why a graph is not itself a probability distribution]].
- `WP1.3`: [[2026-04-20-pgm-exam-prep-section-01-foundations#Problem 1.3|marginal distributions vs conditional distributions]].
- `WP1.5`: [[2026-04-20-pgm-exam-prep-section-01-foundations#Problem 1.5|representation vs inference vs learning tasks]].
- `WP2.1`: [[2026-04-20-pgm-exam-prep-section-02-directed-undirected#Problem 2.1|DAG joint factorization]].
- `WP2.2`: [[2026-04-20-pgm-exam-prep-section-02-directed-undirected#Problem 2.2|chain, fork, and collider conditioning rules]].
- `WP2.4`: [[2026-04-20-pgm-exam-prep-section-02-directed-undirected#Problem 2.4|DAG Markov blanket]].
- `WP2.5`: [[2026-04-20-pgm-exam-prep-section-02-directed-undirected#Problem 2.5|DAG normalization vs UGM partition function]].
- `WP2.6`: [[2026-04-20-pgm-exam-prep-section-02-directed-undirected#Problem 2.6|UGM maximal cliques and separation]].
- `WP3.2`: [[2026-04-20-pgm-exam-prep-section-03-inference-bp#Problem 3.2|why elimination order changes runtime]].
- `WP3.3`: [[2026-04-20-pgm-exam-prep-section-03-inference-bp#Problem 3.3|why BP messages exclude the recipient factor]].
- `WP4.1`: [[2026-04-20-pgm-exam-prep-section-04-gnns#Problem 4.1|why GNNs compare to belief propagation]].
- `WP4.2`: [[2026-04-20-pgm-exam-prep-section-04-gnns#Problem 4.2|BP messages vs GNN messages]].
- `WP4.3`: [[2026-04-20-pgm-exam-prep-section-04-gnns#Problem 4.3|permutation-invariant GNN aggregation]].
- `WP4.4`: [[2026-04-20-pgm-exam-prep-section-04-gnns#Problem 4.4|k-hop dependence after k message-passing rounds]].
- `WP4.5`: [[2026-04-20-pgm-exam-prep-section-04-gnns#Problem 4.5|over-smoothing vs over-squashing]].
- `WP4.6`: [[2026-04-20-pgm-exam-prep-section-04-gnns#Problem 4.6|shortest-path computation as message passing]].
- `WP5.1`: [[2026-04-20-pgm-exam-prep-section-05-mcmc#Problem 5.1|stationarity vs fast mixing]].
- `WP5.3`: [[2026-04-20-pgm-exam-prep-section-05-mcmc#Problem 5.3|MH with unnormalized targets]].
- `WP5.5`: [[2026-04-20-pgm-exam-prep-section-05-mcmc#Problem 5.5|why MCMC chains mix slowly]].
- `WP5.6`: [[2026-04-20-pgm-exam-prep-section-05-mcmc#Problem 5.6|why pure gradient descent is not sampling]].
- `WP6.1`: [[2026-04-20-pgm-exam-prep-section-06-vi-em-vae#Problem 6.1|MCMC vs VI philosophy]].
- `WP6.4`: [[2026-04-20-pgm-exam-prep-section-06-vi-em-vae#Problem 6.4|mean-field VI as easier but weaker]].
- `WP6.7`: [[2026-04-20-pgm-exam-prep-section-06-vi-em-vae#Problem 6.7|what makes VAEs different from classical VI]].
- `WP7.5`: [[2026-04-20-pgm-exam-prep-section-07-generative-models#Problem 7.5|GAN discrimination vs NCE discrimination]].
- `WP7.6`: [[2026-04-20-pgm-exam-prep-section-07-generative-models#Problem 7.6|denoising score matching and diffusion]].
- `WP7.7`: [[2026-04-20-pgm-exam-prep-section-07-generative-models#Problem 7.7|corrector step in predictor-corrector sampling]].
- `WP8.1`: [[2026-04-20-pgm-exam-prep-section-08-causality#Problem 8.1|conditioning vs intervention]].
- `WP8.2`: [[2026-04-20-pgm-exam-prep-section-08-causality#Problem 8.2|truncated factorization]].
- `WP8.5`: [[2026-04-20-pgm-exam-prep-section-08-causality#Problem 8.5|observational indistinguishability]].
- `WP8.6`: [[2026-04-20-pgm-exam-prep-section-08-causality#Problem 8.6|PC algorithm type]].

### Medium

- <span style="color: #FDA4AF;">`HW1-Q3`: KL divergence as a non-metric and the relation between covariance and mutual information via Pinsker-style reasoning. Reviewed in live chat; marked red for counterexample/Pinsker proof-template difficulty.</span>
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
- <span style="color: #86EFAC;">`PF-SQ1`: Gibbs variational principle relaxations, inner vs outer approximations, and mean field as an inner approximation. Reviewed in live chat; your answer `1 and 4` was correct.</span>
- <span style="color: #86EFAC;">`PF-SQ4`: `KL(q || p)` vs `KL(p || q)` and the mode-seeking vs mass-covering distinction. Reviewed in live chat; your answer `1 and 2` was correct.</span>
- <span style="color: #FDE047;">`PF-SQ5`: HMC and simulated tempering as Markov chains on extended state spaces. Reviewed in live chat; concepts mostly understood, but needed clarification.</span>
- `PF-SQ7`: standard GAN local minima and non-uniqueness in CycleGAN even with cycle consistency.
- <span style="color: #FDE047;">`PF-SQ9`: when REINFORCE vs reparameterization can be applied directly for unbiased VAE / ELBO gradients. Reviewed in live chat; answers were correct, but part (c) needed clarification.</span>
- `PF-SQ10`: backdoor criterion in causal graphs.
- `PF-SQ11`: what the PC algorithm can and cannot identify from graph structure.
- <span style="color: #86EFAC;">`PF-SQ14`: derivative requirements in Hyvarinen score matching for continuous EBMs. Reviewed in live chat; your answer `1 and 2` was correct.</span>
- `PF-P2`: finite Markov chain graph, irreducibility, aperiodicity, and unique stationary distribution.
- `PF-P3`: shortest paths via iterative dynamic programming and exact implementation through message-passing GNN layers.
- `PF-P5`: JS-based GAN vs WGAN on shifted uniform intervals, including flat JS gradients and informative Wasserstein gradients.
- `WP1.4`: [[2026-04-20-pgm-exam-prep-section-01-foundations#Problem 1.4|compact representation does not imply easy inference]].
- `WP2.3`: [[2026-04-20-pgm-exam-prep-section-02-directed-undirected#Problem 2.3|collider blocking and opening]].
- `WP2.7`: [[2026-04-20-pgm-exam-prep-section-02-directed-undirected#Problem 2.7|directed vs undirected probability semantics]].
- `WP3.1`: [[2026-04-20-pgm-exam-prep-section-03-inference-bp#Problem 3.1|variable elimination for a marginal]].
- `WP3.4`: [[2026-04-20-pgm-exam-prep-section-03-inference-bp#Problem 3.4|BP exactness on trees vs loopy graphs]].
- `WP3.5`: [[2026-04-20-pgm-exam-prep-section-03-inference-bp#Problem 3.5|forward-backward vs Viterbi]].
- `WP3.6`: [[2026-04-20-pgm-exam-prep-section-03-inference-bp#Problem 3.6|treewidth and exact inference cost]].
- `WP5.2`: [[2026-04-20-pgm-exam-prep-section-05-mcmc#Problem 5.2|why detailed balance implies stationarity]].
- `WP5.4`: [[2026-04-20-pgm-exam-prep-section-05-mcmc#Problem 5.4|Gibbs as MH with acceptance probability 1]].
- `WP5.7`: [[2026-04-20-pgm-exam-prep-section-05-mcmc#Problem 5.7|HMC vs random-walk MH]].
- `WP5.8`: [[2026-04-20-pgm-exam-prep-section-05-mcmc#Problem 5.8|HMC and simulated tempering as extended-state methods]].
- `WP6.2`: [[2026-04-20-pgm-exam-prep-section-06-vi-em-vae#Problem 6.2|ELBO as lower bound]].
- `WP6.3`: [[2026-04-20-pgm-exam-prep-section-06-vi-em-vae#Problem 6.3|ELBO maximization improves the variational approximation]].
- `WP6.5`: [[2026-04-20-pgm-exam-prep-section-06-vi-em-vae#Problem 6.5|mode-seeking behavior of `KL(q || p)`]].
- `WP6.6`: [[2026-04-20-pgm-exam-prep-section-06-vi-em-vae#Problem 6.6|EM vs variational EM]].
- `WP6.8`: [[2026-04-20-pgm-exam-prep-section-06-vi-em-vae#Problem 6.8|REINFORCE vs reparameterization]].
- `WP6.9`: [[2026-04-20-pgm-exam-prep-section-06-vi-em-vae#Problem 6.9|VAE reconstruction and KL terms]].
- `WP7.1`: [[2026-04-20-pgm-exam-prep-section-07-generative-models#Problem 7.1|optimal GAN discriminator]].
- `WP7.2`: [[2026-04-20-pgm-exam-prep-section-07-generative-models#Problem 7.2|JS-based GAN gradients under support mismatch]].
- `WP7.3`: [[2026-04-20-pgm-exam-prep-section-07-generative-models#Problem 7.3|score matching avoids partition functions]].
- `WP7.4`: [[2026-04-20-pgm-exam-prep-section-07-generative-models#Problem 7.4|integration by parts in score matching]].
- `WP7.8`: [[2026-04-20-pgm-exam-prep-section-07-generative-models#Problem 7.8|probability-flow ODE significance]].
- `WP8.3`: [[2026-04-20-pgm-exam-prep-section-08-causality#Problem 8.3|backdoor adjustment and descendants of treatment]].
- `WP8.4`: [[2026-04-20-pgm-exam-prep-section-08-causality#Problem 8.4|backdoor vs front-door identification]].
- `WP8.7`: [[2026-04-20-pgm-exam-prep-section-08-causality#Problem 8.7|why interventions help causal discovery]].
- `WP8.8`: [[2026-04-20-pgm-exam-prep-section-08-causality#Problem 8.8|single-node and multi-node intervention bounds]].

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
- <span style="color: #FDE047;">`PF-P4`: modified score-matching objectives, gradient matching vs score matching, generalized score matching, and weighting rare informative regions. Need to study; did not understand yet.</span>
