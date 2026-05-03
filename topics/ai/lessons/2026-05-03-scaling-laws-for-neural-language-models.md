# Scaling Laws for Neural Language Models

Source note: Jared Kaplan, Sam McCandlish, Tom Henighan, Tom B. Brown, Benjamin Chess, Rewon Child, Scott Gray, Alec Radford, Jeffrey Wu, and Dario Amodei, "Scaling Laws for Neural Language Models." arXiv:2001.08361v1, submitted January 23, 2020. Source page: [arxiv.org/abs/2001.08361](https://arxiv.org/abs/2001.08361). Processed source: [materials/processed/ai/scaling-laws-for-neural-language-models.md](../../../materials/processed/ai/scaling-laws-for-neural-language-models.md).

## Table of Contents

- [Medium-Length Version](#medium-length-version)
- [Full-Length Version](#full-length-version)
- [The Core Question](#the-core-question)
- [What The Paper Measures](#what-the-paper-measures)
- [The Three Basic Power Laws](#the-three-basic-power-laws)
- [The Joint Model-Data Law](#the-joint-model-data-law)
- [Why Large Models Are Sample Efficient](#why-large-models-are-sample-efficient)
- [Compute-Optimal Training](#compute-optimal-training)
- [Why The Chinchilla Paper Later Matters](#why-the-chinchilla-paper-later-matters)
- [Limitations](#limitations)
- [Memory Checklist](#memory-checklist)

## Medium-Length Version

### Medium Thesis

This paper made one of the most important claims in modern language-model scaling: language-model loss improves smoothly and predictably as model size, dataset size, and training compute increase.

Before this kind of work, it was easy to think of large-model training as mostly empirical trial and error. You build a model, train it, and see what happens. Kaplan et al. argue that, at least for autoregressive Transformer language models and cross-entropy loss, the situation is much more regular. If you measure the right scale variables, performance follows power laws across many orders of magnitude.

The three variables are:

- `N`: non-embedding parameter count;
- `D`: dataset size in tokens;
- `C`: training compute.

The headline result is that all three matter, but they matter in predictable ways. If model size is the bottleneck, loss falls as a power of `N`. If data is the bottleneck, loss falls as a power of `D`. If compute is the bottleneck and allocated efficiently, loss falls as a power of `C_min`.

### The Main Power Laws

The paper reports:

$$
L(N) = (N_c / N)^{\alpha_N}, \quad \alpha_N \approx 0.076.
$$

This is the parameter-scaling law. If you train models to convergence on enough data, larger models have lower loss.

It also reports:

$$
L(D) = (D_c / D)^{\alpha_D}, \quad \alpha_D \approx 0.095.
$$

This is the data-scaling law. If dataset size is the bottleneck, more data lowers loss.

Finally, under a compute-efficient allocation:

$$
L(C_{min}) = (C_c^{min}/C_{min})^{\alpha_C^{min}}, \quad \alpha_C^{min} \approx 0.050.
$$

The exact constants are not universal; they depend on tokenization and training setup. The important idea is the form: smooth power-law improvement over large scale ranges.

### The Practical Message

The paper's practical recommendation is that, under a fixed compute budget, you should train a larger model for fewer steps rather than a smaller model all the way to convergence.

The reason is sample efficiency. Larger models reach the same loss with fewer optimization steps and fewer samples. If you spend all your compute making a small model converge, you may be wasting compute that could have gone into a bigger model with better final loss.

The paper estimates:

$$
N_{opt} \propto C_{min}^{0.73},
$$

and:

$$
D_{opt} \propto C_{min}^{0.27}.
$$

In words: as compute grows, the original Kaplan prescription says to put most of the extra compute into model size, not data. Data still grows, but more slowly.

### Why This Was So Influential

This paper gave labs a way to think before training. If a full run costs millions of dollars, you cannot casually try every possible size. Scaling laws let you run smaller experiments and extrapolate.

The paper also made the case that aggregate loss can be smooth even when capabilities feel discontinuous. The authors explicitly note that "more is different": a smooth loss curve can hide qualitative improvements in what the model can do.

### The Important Caveat

This paper's compute-allocation recommendation was later revised by `Training Compute-Optimal Large Language Models`, the Chinchilla paper. Chinchilla agrees that training to convergence is inefficient, but argues that Kaplan et al. underestimates how much data compute-optimal models need.

So the correct way to remember Kaplan is not "the final word on how much data to use." It is better remembered as the paper that made LLM scaling quantitatively predictable and introduced the original compute-optimal training framework.

### Medium Takeaway

Kaplan et al. show that language-model loss follows smooth power laws in model size, data, and compute. The paper's original compute-optimal recipe strongly favored larger models trained short of convergence, but later Chinchilla work revised the data-scaling side upward.

## Full-Length Version

## The Core Question

The paper asks:

**How does language-model loss change as we scale model size, dataset size, and training compute?**

This is a deceptively important question. If performance were chaotic, every large model would be a gamble. If performance is predictable, then small runs can guide large training decisions.

The paper studies autoregressive language modeling. The model sees previous tokens and predicts the next token. The main metric is cross-entropy loss. Lower loss means the model assigns higher probability to the actual next tokens in the data.

This is not the same as directly measuring reasoning, coding, helpfulness, truthfulness, or alignment. But cross-entropy loss is the basic pretraining objective, and improvements in loss often correlate with broader capability.

## What The Paper Measures

The authors focus on three scale variables.

`N` is the number of non-embedding model parameters. They exclude embedding parameters because embeddings can obscure the scaling trend; the non-embedding Transformer body is the better proxy for model capacity.

`D` is dataset size in tokens.

`C` is training compute. A rough estimate is:

$$
C \approx 6NBS,
$$

where `B` is batch size and `S` is the number of parameter-update steps. The factor of 6 roughly accounts for forward and backward passes.

The paper varies these quantities over large ranges and looks for simple relationships.

## The Three Basic Power Laws

### Model Size

When the model is the limiting factor and data is sufficient, loss follows:

$$
L(N) = (N_c / N)^{\alpha_N}.
$$

The fitted exponent is:

$$
\alpha_N \approx 0.076.
$$

This exponent is small. Doubling parameters does not halve the loss. Scaling has diminishing returns. But the trend is smooth and persistent.

### Dataset Size

When data is the limiting factor, loss follows:

$$
L(D) = (D_c / D)^{\alpha_D}.
$$

The fitted exponent is:

$$
\alpha_D \approx 0.095.
$$

Again, returns diminish. More data helps, but predictably and slowly.

### Compute

When compute is the limiting factor and allocated efficiently, loss follows:

$$
L(C_{min}) = (C_c^{min}/C_{min})^{\alpha_C^{min}}.
$$

The fitted exponent is:

$$
\alpha_C^{min} \approx 0.050.
$$

This is one of the most important numbers conceptually: loss improves with compute, but slowly. Huge compute increases are needed for modest loss decreases.

## The Joint Model-Data Law

The paper does not just fit one variable at a time. It also proposes a combined law:

$$
L(N,D) =
\left[
\left(N_c/N\right)^{\alpha_N/\alpha_D}
+ D_c/D
\right]^{\alpha_D}.
$$

This formula says that model-size bottlenecks and data-size bottlenecks combine in a structured way.

The key ratio is:

$$
N^{\alpha_N/\alpha_D}/D.
$$

Since:

$$
\alpha_N/\alpha_D \approx 0.74,
$$

the overfitting penalty depends roughly on `N^0.74 / D`.

That means data requirements grow sublinearly with model size in the paper's fit. If you make a model `8x` larger, you need only about `5x` more data to hold the same overfitting penalty.

This sublinear data result is one reason the paper's compute-optimal recipe emphasizes larger models.

## Why Large Models Are Sample Efficient

One of the paper's most important intuitions is that large models are more sample efficient.

A small model might eventually reach some target loss after many examples. A larger model can reach that same loss after fewer examples. This changes how fixed-compute training should be allocated.

Suppose you have a fixed amount of compute. You could train a small model for a long time, pushing it close to convergence. Or you could train a much larger model for fewer steps. If the larger model learns more efficiently, the second option may give better final loss.

This is why the paper says compute-efficient training stops short of convergence. Full convergence is not the objective. Best loss per unit compute is.

## Compute-Optimal Training

The paper derives an allocation rule for fixed compute.

The fitted result is:

$$
N_{opt} \propto C_{min}^{0.73}.
$$

The number of data tokens used for one-epoch compute-efficient training grows more slowly:

$$
D_{opt} \propto C_{min}^{0.27}.
$$

The batch size grows approximately as:

$$
B \propto C_{min}^{0.24}.
$$

The number of serial training steps grows barely at all:

$$
S \propto C_{min}^{0.03}.
$$

In words, Kaplan's original prescription is:

1. as compute grows, make the model much larger;
2. increase batch size;
3. increase data more slowly;
4. do not train all the way to convergence.

This was a clean and powerful recipe. It made large models look especially attractive.

## Why The Chinchilla Paper Later Matters

Two years later, Hoffmann et al. revisited this question in `Training Compute-Optimal Large Language Models`.

They agreed with Kaplan on one big point: under a fixed compute budget, training to convergence is inefficient.

But they disagreed on the data/model split. Kaplan's recipe implied model size should grow much faster than training tokens. Chinchilla found that parameters and tokens should scale in roughly equal proportions.

So the historical relationship is:

- Kaplan: scaling laws are smooth; train bigger models short of convergence; data grows slowly.
- Chinchilla: yes, scaling is predictable and convergence is inefficient, but data was underscaled; train smaller models on many more tokens.

That is why modern LLM training discussions often talk about "Chinchilla-optimal" models. They are using Kaplan's framing but Hoffmann et al.'s revised allocation.

## Limitations

First, the paper studies loss, not full model usefulness. Loss is important, but downstream capability, instruction following, factuality, tool use, and alignment can behave differently.

Second, the scaling laws are empirical. The paper does not give a complete theory explaining why these exponents should hold.

Third, the authors themselves note that power laws must eventually break down because natural language has nonzero entropy. The model cannot reduce loss forever.

Fourth, the data-allocation conclusion was later revised. The paper remains foundational, but its exact compute-optimal prescription should be read in conversation with Chinchilla.

Finally, data quality, contamination, inference cost, and post-training are not the main focus. Those concerns became more central as LLMs moved from pretraining research to deployed systems.

## Memory Checklist

- `N` means non-embedding parameters.
- `D` means dataset size in tokens.
- `C` means training compute.
- Loss follows smooth power laws in `N`, `D`, and efficiently allocated `C_min`.
- Kaplan's original compute-optimal rule heavily favors larger models.
- The paper argues compute-efficient training stops before convergence.
- Larger models are more sample efficient.
- Chinchilla later revises the data allocation upward.
- The lasting contribution is the scaling-law framework, not every final exponent.
