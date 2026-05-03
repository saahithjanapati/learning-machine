# Training Compute-Optimal Large Language Models: The Chinchilla Lesson

Source note: Jordan Hoffmann, Sebastian Borgeaud, Arthur Mensch, Elena Buchatskaya, Trevor Cai, Eliza Rutherford, Diego de Las Casas, Lisa Anne Hendricks, Johannes Welbl, Aidan Clark, Tom Hennigan, Eric Noland, Katie Millican, George van den Driessche, Bogdan Damoc, Aurelia Guy, Simon Osindero, Karen Simonyan, Erich Elsen, Jack W. Rae, Oriol Vinyals, and Laurent Sifre, "Training Compute-Optimal Large Language Models." arXiv:2203.15556v1, submitted March 29, 2022. Source page: [arxiv.org/abs/2203.15556](https://arxiv.org/abs/2203.15556). Processed source: [materials/processed/ai/training-compute-optimal-large-language-models.md](../../../materials/processed/ai/training-compute-optimal-large-language-models.md).

## Table of Contents

- [Medium-Length Version](#medium-length-version)
- [Full-Length Version](#full-length-version)
- [The Central Research Question](#the-central-research-question)
- [The Problem With The Old Scaling Recipe](#the-problem-with-the-old-scaling-recipe)
- [The Three Estimation Methods](#the-three-estimation-methods)
- [The Chinchilla Test](#the-chinchilla-test)
- [Main Results](#main-results)
- [Why Smaller Can Be Better](#why-smaller-can-be-better)
- [What Changed After Chinchilla](#what-changed-after-chinchilla)
- [Limitations](#limitations)
- [Memory Checklist](#memory-checklist)

## Medium-Length Version

### Medium Thesis

The Chinchilla paper asks a practical question:

**If you already know your training compute budget, should you spend it on a bigger model or on more training tokens?**

Before Chinchilla, the dominant scaling-law prescription from Kaplan et al. said that, as compute grows, model size should grow much faster than data. This helped justify training larger and larger dense models on roughly similar token counts. GPT-3, Gopher, Jurassic-1, and MT-NLG were all very large, and many were trained on a few hundred billion tokens.

Hoffmann et al. argue that this was compute-inefficient. Many large models were undertrained: too many parameters, too few tokens.

Their revised answer is:

$$
N_{opt} \propto C^{0.5}, \quad D_{opt} \propto C^{0.5}.
$$

In plain language: when training compute doubles, model size and training tokens should both grow by about the same factor.

### What The Paper Did

The authors train more than 400 language models, ranging from about 70M to over 16B parameters, on 5B to over 400B tokens. They use three different estimation strategies:

1. train fixed model sizes for different token counts;
2. compare different model sizes at the same FLOP budgets;
3. fit a parametric loss function and minimize it under a compute constraint.

All three methods give roughly the same message: model parameters and training tokens should scale together.

The paper compares these estimates to Kaplan et al.:

| Method | Parameter exponent | Token exponent |
| --- | ---: | ---: |
| Chinchilla Approach 1 | 0.50 | 0.50 |
| Chinchilla Approach 2 | 0.49 | 0.51 |
| Chinchilla Approach 3 | 0.46 | 0.54 |
| Kaplan et al. | 0.73 | 0.27 |

The difference is huge. Kaplan says extra compute should mostly become model size. Chinchilla says extra compute should become model size and data in nearly equal measure.

### The Chinchilla Experiment

The authors test the prediction by training `Chinchilla`, a 70B parameter model on 1.4T tokens. It uses about the same training compute as `Gopher`, a 280B parameter model trained on far fewer tokens.

Chinchilla is about `4x` smaller than Gopher and trained on about `4x` more data.

The result is the famous punchline: Chinchilla outperforms Gopher and several larger models across many evaluations. It gets `67.6%` 5-shot average accuracy on MMLU, compared with `60.0%` for Gopher. It improves over Gopher on The Pile, WikiText-103, BIG-bench, reading comprehension, common-sense benchmarks, and closed-book question answering.

### Why The Result Matters

Chinchilla changed the meaning of scaling. The field could no longer treat "bigger model" as the main axis. A model can be too large for its data budget. A smaller model trained on enough high-quality tokens can be both better and cheaper to serve.

This is why people now talk about a model being "Chinchilla-optimal." They mean that, for the given training compute, the model size and token count are balanced close to the compute-optimal frontier.

### Medium Takeaway

Chinchilla's durable lesson is that compute-optimal dense LLM training requires scaling data with parameters. The field had been over-allocating compute to model size and under-allocating it to training tokens.

## Full-Length Version

## The Central Research Question

The paper asks:

**Given a fixed FLOP budget, what is the best tradeoff between model size and training data?**

This matters because large model training is expensive. In practice, a lab often knows the compute budget before training begins: how many accelerators, how long, and roughly how many FLOPs. The decision to train a 70B, 175B, or 280B parameter model is not easy to reverse.

Formally, the paper writes the problem as:

$$
N_{opt}(C), D_{opt}(C) =
\arg\min_{N,D:\ \mathrm{FLOPs}(N,D)=C} L(N,D).
$$

Here `N` is parameter count, `D` is training tokens, `C` is compute, and `L` is pretraining loss.

The question is not "what is the biggest model we can train?" It is "what model and data mix gives the lowest loss for this compute budget?"

## The Problem With The Old Scaling Recipe

Kaplan et al.'s `Scaling Laws for Neural Language Models` gave the earlier recipe:

$$
N_{opt} \propto C^{0.73}, \quad D_{opt} \propto C^{0.27}.
$$

That implies that if compute goes up by `10x`, model size should increase by about `5.5x`, while data should increase by only about `1.8x`.

Hoffmann et al. argue that this prescription made current large models too big for their token budgets. Many major dense LLMs were trained on roughly a few hundred billion tokens:

- GPT-3: 175B parameters, 300B tokens;
- Jurassic-1: 178B parameters, 300B tokens;
- Gopher: 280B parameters, about 300B tokens;
- MT-NLG: 530B parameters, 270B tokens.

The model sizes grew dramatically, but token counts did not grow enough.

## The Three Estimation Methods

The authors use three independent methods so the conclusion does not depend on one fragile fit.

### Approach 1: Fixed Model Sizes, Vary Training Tokens

For each model size, they train for several different horizons. This lets them ask: at a given FLOP budget, which model size reached the lowest loss?

This gives:

$$
N_{opt} \propto C^{0.50}, \quad D_{opt} \propto C^{0.50}.
$$

### Approach 2: IsoFLOP Profiles

An IsoFLOP comparison fixes the total training compute and tries different model sizes. If the FLOP budget is fixed, a larger model sees fewer tokens and a smaller model sees more tokens.

For each compute budget, the paper identifies the model size with the lowest loss.

This gives:

$$
N_{opt} \propto C^{0.49}, \quad D_{opt} \propto C^{0.51}.
$$

### Approach 3: Parametric Loss Function

The authors also fit a loss function:

$$
\hat{L}(N,D) = E + A/N^\alpha + B/D^\beta.
$$

Then they minimize it under:

$$
\mathrm{FLOPs}(N,D) \approx 6ND.
$$

This gives:

$$
N_{opt} \propto C^{0.46}, \quad D_{opt} \propto C^{0.54}.
$$

The exponents are not identical, but they all tell the same story. Parameters and tokens should scale together.

## The Chinchilla Test

The paper then does the expensive test: train a large model predicted to be near compute-optimal.

The model is Chinchilla:

- 70B parameters;
- 1.4T training tokens;
- same approximate training compute as Gopher;
- same broad architecture family as Gopher;
- trained on MassiveText;
- 80 layers;
- 64 attention heads;
- `d_model = 8192`;
- batch size from 1.5M to 3M tokens.

Gopher was 280B parameters and trained on about 300B tokens. So Chinchilla is much smaller, but trained much longer.

This is the central experimental contrast:

| Model | Parameters | Training Tokens | Main Point |
| --- | ---: | ---: | --- |
| Gopher | 280B | about 300B | Larger but undertrained by Chinchilla's estimate |
| Chinchilla | 70B | 1.4T | Smaller but trained on far more data |

Both use roughly the same training compute.

## Main Results

Chinchilla beats Gopher across a wide range of evaluations.

On MMLU, Chinchilla reaches `67.6%` 5-shot average accuracy, compared with `60.0%` for Gopher and `43.9%` for GPT-3 in the paper's table.

On WikiText-103, Chinchilla reaches perplexity `7.16`, compared with `7.75` for Gopher.

On The Pile, Chinchilla improves over Gopher on all evaluated subsets in bits-per-byte.

On BIG-bench, Chinchilla improves on the vast majority of tasks used in the comparison.

On reading comprehension, Chinchilla improves over Gopher on LAMBADA and improves by more than 10 percentage points on RACE-h and RACE-m.

On common-sense and closed-book question-answering tasks, Chinchilla generally matches or outperforms Gopher and GPT-3 in the reported comparisons.

The conclusion is not merely that Chinchilla is good. The conclusion is that Gopher-sized compute was better spent on a smaller model trained on more data.

## Why Smaller Can Be Better

At first, it feels strange that a smaller model can beat a bigger one. The key is that parameter count is not the only resource. Training tokens are also a resource.

A model with too few parameters may not have enough capacity. But a model with too many parameters and too little data is undertrained. It has unused capacity because it has not seen enough examples.

Chinchilla says the field had crossed into that undertrained regime. The problem was not that models were too small. It was that data had not scaled with them.

There is also an inference benefit. If two models cost about the same to train, and the smaller one performs better, the smaller one is much cheaper to serve. It has a smaller memory footprint and lower inference cost.

That is why Chinchilla mattered commercially and scientifically.

## What Changed After Chinchilla

After this paper, scaling discussions shifted from "make the model bigger" to "balance model size and tokens."

The phrase "Chinchilla-optimal" became shorthand for a model trained near the compute-optimal parameter/token frontier.

The result also put pressure on data pipelines. If optimal training needs trillions of high-quality tokens, then data collection, deduplication, filtering, contamination checks, multilingual coverage, code data, domain data, privacy, and copyright become central scaling problems.

This is a major conceptual shift. In Kaplan's framing, big models could be more important than big data. In Chinchilla's framing, big models and big data have to grow together.

## Limitations

The paper is strong, but it is not unlimited.

First, the expensive large-scale confirmation is mostly Chinchilla versus Gopher. The authors do not train a full ladder of large intermediate models.

Second, the analysis assumes the efficient frontier is well described by power laws. The paper notes possible curvature at high compute budgets.

Third, the analysis uses less than one epoch of data in the training runs. Multiple-epoch regimes may behave differently.

Fourth, "more tokens" only helps if the data is good enough. Scaling data raises difficult problems around quality, duplication, benchmark contamination, private information, toxic content, and bias.

Fifth, the paper focuses on dense autoregressive language models. Mixture-of-experts models, retrieval-augmented models, multimodal models, and post-trained assistants may need separate scaling analysis.

## Memory Checklist

- Chinchilla asks how to split fixed compute between model size and training tokens.
- Kaplan said model size should grow faster than data.
- Chinchilla says parameters and tokens should grow together.
- The fitted exponents are roughly `0.5` for parameters and `0.5` for tokens.
- Chinchilla is 70B parameters trained on 1.4T tokens.
- Gopher is 280B parameters trained on far fewer tokens.
- Chinchilla uses similar training compute to Gopher but performs better.
- The result made data scaling a first-class part of LLM scaling.
- The lesson is compute optimality, not "small models always beat big models."
