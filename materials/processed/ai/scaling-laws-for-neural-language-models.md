# Scaling Laws for Neural Language Models

Source: `https://arxiv.org/abs/2001.08361`
PDF: `https://arxiv.org/pdf/2001.08361`
HTML: `https://ar5iv.labs.arxiv.org/html/2001.08361`
Title: `Scaling Laws for Neural Language Models`
Authors: `Jared Kaplan, Sam McCandlish, Tom Henighan, Tom B. Brown, Benjamin Chess, Rewon Child, Scott Gray, Alec Radford, Jeffrey Wu, Dario Amodei`
Submitted: `2020-01-23`
Latest version: `2020-01-23` (`v1`)
Ingested: `2026-05-03`
Extraction engine: `arXiv metadata + local PDF extraction with PyMuPDF + ar5iv availability check + manual structured ingest`
Strategy: `canonical paper extraction and medium/full lesson normalization`

## Summary

Kaplan et al. study empirical scaling laws for autoregressive Transformer language models. They show that cross-entropy loss follows smooth power laws in three main quantities: non-embedding parameter count `N`, dataset size `D`, and optimally allocated training compute `C_min`. The paper's broad claim is that language-model loss is predictable across many orders of magnitude, and that overall scale matters much more than many architectural shape choices such as width versus depth within a reasonable range.

The paper's most influential practical result is its compute-allocation prescription. For a fixed compute budget, the authors estimate that compute-efficient training should use very large models, train them well short of full convergence, and increase dataset size relatively slowly. In their fit, optimal model size scales roughly as `C_min^0.73`, while one-epoch training data grows roughly as `C_min^0.27`.

This conclusion helped motivate very large language models, but it is also the result later revised by Hoffmann et al. in `Training Compute-Optimal Large Language Models` (Chinchilla). Chinchilla agrees that models should not be trained all the way to convergence under a fixed compute budget, but argues that Kaplan et al. underestimates the amount of data required for compute-optimal training.

## Core Results

### Scale Matters Most

The paper studies Transformer language models across large ranges of model size, dataset size, training compute, and training time. The authors find that performance depends most strongly on three scale variables:

- `N`: non-embedding parameter count;
- `D`: dataset size in tokens;
- `C`: training compute.

Architectural details such as depth versus width have much weaker effects when compared at the same broad scale.

### Three Basic Power Laws

The headline scaling laws are:

$$
L(N) = (N_c / N)^{\alpha_N}
$$

with `alpha_N ~= 0.076` for parameter-limited models trained to convergence on enough data;

$$
L(D) = (D_c / D)^{\alpha_D}
$$

with `alpha_D ~= 0.095` for data-limited models with early stopping;

$$
L(C_{min}) = (C_c^{min} / C_{min})^{\alpha_C^{min}}
$$

with `alpha_C^{min} ~= 0.050` for compute-limited training when compute is allocated efficiently.

The exact constants are tokenization- and setup-dependent, so the exponents and qualitative relationships matter more than treating the constants as timeless numbers.

### Overfitting Depends On A Ratio

The paper proposes a joint model for model size and dataset size:

$$
L(N, D) = \left[\left(N_c / N\right)^{\alpha_N / \alpha_D} + D_c / D\right]^{\alpha_D}.
$$

This says that loss worsens predictably if either model size or dataset size is held fixed while the other grows. The overfitting penalty depends mainly on the ratio `N^0.74 / D`, because `alpha_N / alpha_D ~= 0.74`.

In this fit, increasing model size by `8x` only requires increasing data by roughly `5x` to avoid a fixed overfitting penalty. That sublinear data requirement became one reason the original paper emphasized very large models.

### Larger Models Are More Sample Efficient

The paper finds that larger models need fewer samples and fewer optimization steps to reach the same loss. In other words, a bigger model is not merely a bigger container; it can learn faster in sample terms.

This result supports the paper's compute-allocation conclusion: if the training budget is fixed, it can be better to train a larger model for fewer steps than to train a smaller model to convergence.

### Compute-Efficient Training Stops Early

The paper argues that compute-efficient training should stop well before convergence. If a researcher trains a small model all the way to its best possible loss, they may be wasting compute that could have been spent on a larger model that reaches a lower loss faster.

The paper estimates:

$$
N_{opt} \propto C_{min}^{0.73},
$$

$$
D_{opt} \propto C_{min}^{0.27},
$$

with optimal batch size growing as about `C_min^0.24` and the number of serial optimization steps growing only very slowly, about `C_min^0.03`.

## Experiments

The authors train many autoregressive Transformer language models on WebText2-style data and related text distributions. They vary:

- model parameter count;
- dataset size;
- training compute;
- context length;
- architecture shape;
- training time and batch behavior.

They evaluate primarily by cross-entropy loss, not downstream task accuracy. The goal is to understand predictable language-model loss scaling, rather than to benchmark a particular product model.

## Interpretation

The paper's deepest contribution is not a single exponent. It is the idea that language-model training can be treated as a predictable scaling problem. If the power laws hold, then small experiments can forecast large training runs and help allocate compute before spending enormous budgets.

This was especially influential because large model training is often a one-shot decision. You need to choose model size, data, schedule, and compute allocation before you can afford to know the answer empirically at full scale.

## Caveats

- The paper optimizes and measures cross-entropy loss, which does not always map cleanly to downstream capabilities.
- The scaling laws are empirical, not derived from a complete theory.
- The paper itself notes that power laws must eventually break down because natural language has nonzero entropy.
- The compute-allocation recipe was later revised by Chinchilla, which found that data should scale much faster with compute.
- The results are specific to autoregressive language modeling under the studied training setup.
- The analysis does not settle data quality, contamination, inference cost, alignment, or post-training behavior.

## Main Takeaway

Kaplan et al. made language-model scaling feel quantitatively predictable: loss improves smoothly with model size, data, and compute. Its original compute-optimal recipe strongly favored making models larger and training them short of convergence, but later work revised the data side of that recipe upward.
