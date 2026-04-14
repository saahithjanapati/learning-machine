# Group-Level Data Selection for Efficient Pretraining

Source: `https://arxiv.org/pdf/2502.14709`
Site: `arXiv`
Published: `2025-02-20`
Updated: `2025-06-20 (v2)`
Venue: `ICML`
Authors: `Zichun Yu, Fei Peng, Jie Lei, Arnold Overwijk, Wen-tau Yih, Chenyan Xiong`
Extraction engine: `arXiv HTML/PDF review + manual structured ingest`
Strategy: `canonical PDF extraction and curriculum-oriented normalization`

## Summary

This paper extends MATES from individual-example data valuation to group-level data valuation. The main claim is that training data should not be scored independently, because examples can interact: some pairs cancel each other out, while others amplify each other. Group-MATES models those interactions directly and uses them to choose better pretraining subsets.

## Core Thesis

- Individual influence methods assume data points contribute independently, which is often false in pretraining.
- The utility of a subset depends partly on relationships between examples, not just the sum of their standalone values.
- Modeling those relationships at selection time improves the speed-quality frontier of language model pretraining.

## Method

Group-MATES has three main components:

### 1. Oracle group influence by local probing

Instead of probing one example at a time, the paper probes small groups, especially pairs of examples. Starting from the current language model checkpoint, it performs local training updates on sampled data pairs and measures the change in reference-task loss. That gives an oracle group-level influence signal for the pair.

### 2. Relational data influence model

The paper trains a small encoder-based model to predict group-level influence from text. The prediction combines:

- an individual influence term for each example, and
- a learned relationship term based on embedding similarity.

This relationship term is meant to capture:

- `cancellation`: two examples interfere or become redundant together,
- `amplification`: one example makes the other more useful.

The paper uses `bge-base-en-v1.5` as the relational influence model and `FLAN` as the reference task for probing.

### 3. Influence-aware clustering for efficient inference

Exact group-level selection over a huge corpus would be too expensive because it would require computing pairwise interactions everywhere. To make inference practical, the paper clusters data points using influence representations, then performs selection locally within each cluster. The claim is that important interactions are concentrated within clusters, while cross-cluster interactions are weaker and can mostly be ignored.

## Bootstrapping

The paper also introduces a bootstrapping procedure for collecting more informative oracle pairs. Rather than sampling pairs uniformly, it uses the current influence model to find edge cases:

- examples with very high or very low predicted influence,
- examples with very high or very low similarity to a chosen example.

This pushes oracle collection toward the tails of the distribution, where informative cancellation and amplification effects are more likely to appear.

## Experimental Setup

- Benchmark: `DCLM`
- Model scales: `400M-4x`, `1B-1x`, `3B-1x` in the abstract; the main tables shown in the paper emphasize `400M-4x` and `1B-1x`
- Evaluation: `22` downstream DCLM-Core tasks
- Main metric: centered accuracy / core score

The paper stresses that DCLM is already heavily curated, so gains here are harder to obtain than on noisier datasets like C4. That makes improvements more convincing.

## Main Results

- On `400M-4x`, Group-MATES improves DCLM core score from `0.21356` with random selection to `0.23514`.
- On `1B-1x`, it improves core score from `0.29456` to `0.30685`.
- The paper reports these as `10.1%` and `4.2%` relative improvements over random selection.
- It also beats prior individual-influence methods such as `MATES` and `Quad`, with roughly `5%` relative gains over those baselines in the headline claim.
- The abstract reports `3.5%-9.4%` relative gains over random across `22` downstream tasks and up to `1.75x` fewer tokens required to reach a target performance.

## Compute Cost

The added selection overhead is modest compared with total pretraining cost:

- `400M-4x`: data selection is `12.2%` of total FLOPs
- `1B-1x`: data selection is `6.7%` of total FLOPs

Most cost still comes from main-model pretraining, not the relational selector.

## What The Analyses Show

### Relationship term matters

Removing the relationship term drops performance meaningfully, which supports the paper's core claim that pairwise interactions contain useful information beyond standalone influence.

### Group-level modeling beats individual modeling

In the short decay-stage analysis, the relational model produces lower reference loss and about `6%` relative performance gain over individual selection. The paper also shows that the oracle upper bound for true group-level selection is much better still, suggesting more room to improve.

### Bootstrapping helps mine tail cases

Bootstrapping pushes oracle sampling toward rarer, more informative interactions. The paper reports that one round of bootstrapping increases the upper bound of validation Spearman correlation by about `0.2`.

### Influence-aware clustering is better than semantic clustering

Clustering by learned influence representations preserves interaction structure better than vanilla embedding clustering. Intra-cluster relationships are stronger, and cluster-average influences correlate better with original influences.

## Strengths

- Clear extension of MATES that directly addresses the independence assumption.
- Strong benchmark choice: gains on DCLM are harder to fake.
- Good systems design: relational modeling plus clustering makes a combinatorial idea computationally usable.
- The paper includes useful mechanistic analysis of cancellation and amplification effects.

## Limitations

- The practical method still only approximates true group-level selection.
- It models pairwise interactions and then generalizes upward, which may still miss richer higher-order effects across larger subsets.
- The strongest oracle results indicate there is still a sizable gap between the learned method and optimal group-aware selection.
- The main tables in the body emphasize moderate scales, even though the abstract mentions `3B`.

## My Take

This is a meaningful follow-up to MATES. The original paper showed that static and individual-only data valuation leaves performance on the table because data usefulness changes over training. This paper goes one step further and shows that even model-aware individual scores are still incomplete because data points interact.

The most important idea here is not just "use pairwise features." It is the broader shift from valuing documents independently to valuing subsets as training objects. That is closer to how optimization actually works. The paper does not solve the full combinatorial problem, but it offers a credible scalable approximation and shows consistent gains on a strong benchmark.
