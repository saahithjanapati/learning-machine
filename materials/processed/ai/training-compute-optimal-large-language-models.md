# Training Compute-Optimal Large Language Models

Source: `https://arxiv.org/abs/2203.15556`
PDF: `https://arxiv.org/pdf/2203.15556`
HTML: `https://ar5iv.labs.arxiv.org/html/2203.15556`
Title: `Training Compute-Optimal Large Language Models`
Authors: `Jordan Hoffmann, Sebastian Borgeaud, Arthur Mensch, Elena Buchatskaya, Trevor Cai, Eliza Rutherford, Diego de Las Casas, Lisa Anne Hendricks, Johannes Welbl, Aidan Clark, Tom Hennigan, Eric Noland, Katie Millican, George van den Driessche, Bogdan Damoc, Aurelia Guy, Simon Osindero, Karen Simonyan, Erich Elsen, Jack W. Rae, Oriol Vinyals, Laurent Sifre`
Submitted: `2022-03-29`
Latest version: `2022-03-29` (`v1`)
Ingested: `2026-05-03`
Extraction engine: `arXiv metadata + local PDF extraction with PyMuPDF + ar5iv availability check + manual structured ingest`
Strategy: `canonical paper extraction and medium/full lesson normalization`

## Summary

Hoffmann et al. revisit the compute-allocation question from Kaplan et al.'s `Scaling Laws for Neural Language Models`: given a fixed training compute budget, how should one trade off model size and number of training tokens?

Their answer is the Chinchilla scaling law. The paper finds that many large language models of the period were undertrained: they were too large for their token budget. Instead of scaling model size much faster than data, the authors estimate that compute-optimal training should scale model parameters and training tokens in roughly equal proportions. In their fits, `N_opt` scales roughly as `C^0.5` and `D_opt` also scales roughly as `C^0.5`.

The paper tests this by training Chinchilla, a 70B parameter model trained on 1.4T tokens, using about the same training compute as Gopher, a 280B parameter model trained on far fewer tokens. Chinchilla outperforms Gopher and several larger models across many evaluations while being smaller and cheaper at inference time.

## Core Research Question

The paper asks:

Given a fixed FLOP budget, what model size and number of training tokens minimize language-model loss?

The optimization is framed as:

$$
N_{opt}(C), D_{opt}(C) =
\arg\min_{N,D:\ \mathrm{FLOPs}(N,D)=C} L(N,D).
$$

Here:

- `N` is model parameter count;
- `D` is training tokens;
- `C` is the training compute budget;
- `L(N,D)` is final pretraining loss.

## Why This Revises Kaplan

Kaplan et al. also concluded that compute-optimal models should not be trained to convergence. Hoffmann et al. agree with that broad point. The revision is about the model-size/data tradeoff.

Kaplan's allocation implied that when compute increased `10x`, model size should increase about `5.5x` and training tokens about `1.8x`. Hoffmann et al. find instead that both should rise at nearly the same rate.

The paper attributes part of the difference to methodology. Kaplan et al. used fixed training token budgets and learning-rate schedules in ways that made short-training runs look worse than they should. Chinchilla varies both model size and training horizon more directly.

## Three Estimation Approaches

The authors use three approaches.

### Approach 1: Fixed Model Sizes, Vary Training Tokens

They train models of fixed sizes for different numbers of training tokens and extract the minimum loss achieved at different compute budgets.

This estimates:

$$
N_{opt} \propto C^{0.50},
$$

$$
D_{opt} \propto C^{0.50}.
$$

### Approach 2: IsoFLOP Profiles

They train different model sizes under the same total FLOP budget and directly look for the model size with the lowest final loss.

This estimates:

$$
N_{opt} \propto C^{0.49},
$$

$$
D_{opt} \propto C^{0.51}.
$$

### Approach 3: Parametric Loss Fit

They fit a parametric loss function:

$$
\hat{L}(N,D) = E + A/N^\alpha + B/D^\beta,
$$

then minimize it under the approximate compute constraint `FLOPs(N,D) ~= 6ND`.

This estimates:

$$
N_{opt} \propto C^{0.46},
$$

$$
D_{opt} \propto C^{0.54}.
$$

The exact exponents differ, but the qualitative result is stable: parameters and tokens should scale together.

## Main Empirical Setup

The paper trains over 400 language models:

- from about 70M to over 16B parameters;
- on 5B to over 400B tokens;
- with different training horizons and IsoFLOP slices.

The analysis projects that, at Gopher's compute budget, the compute-optimal model should be far smaller than Gopher and trained on far more tokens.

## Chinchilla

To test the prediction, the authors train Chinchilla:

- 70B parameters;
- 1.4T training tokens;
- same approximate compute budget as Gopher;
- same broad architecture family as Gopher;
- trained on MassiveText with a different data mixture, AdamW, a slightly modified SentencePiece tokenizer, and a float32 optimizer-state copy.

Gopher has 280B parameters and was trained on roughly 300B tokens. Chinchilla is about `4x` smaller and uses about `4x` more training data.

## Results

Chinchilla outperforms Gopher and several larger models on many evaluations.

Key reported results include:

- Chinchilla reaches `67.6%` 5-shot average accuracy on MMLU, compared with `60.0%` for Gopher.
- Chinchilla improves over Gopher on all evaluated subsets of The Pile in bits-per-byte.
- Chinchilla reaches `7.16` perplexity on WikiText-103, compared with `7.75` for Gopher.
- Chinchilla improves on most BIG-bench tasks used in the comparison.
- Chinchilla improves on reading comprehension, common-sense, and closed-book question-answering evaluations.

The paper's strongest message is that a smaller, more-data-trained model can beat a much larger undertrained model at the same training compute.

## Practical Implications

The Chinchilla result changed the meaning of "scaling." It was no longer enough to make models larger. To use compute efficiently, labs also had to scale high-quality training data.

It also made inference economics more important. If two models cost the same to train but one is much smaller and performs better, the smaller model is better not only during pretraining but also during deployment, fine-tuning, and serving.

## Caveats

- The large-scale direct comparison is mainly Chinchilla versus Gopher; the authors do not have many large intermediate-scale confirmation runs.
- The analysis assumes a power-law efficient frontier.
- The training runs used for the analysis are all under one epoch; multiple-epoch behavior is left open.
- The result increases pressure on dataset collection and quality, which raises contamination, privacy, copyright, and bias concerns.
- The paper studies dense autoregressive language models; other architectures and modalities may need their own fits.

## Main Takeaway

Chinchilla revises the older scaling-law prescription: for compute-optimal dense LLM pretraining, scale parameters and training tokens together. A smaller model trained on much more data can outperform a much larger undertrained model at the same training compute.
