# Gemma Scope: Open Sparse Autoencoders Everywhere All At Once On Gemma 2

Source: `https://arxiv.org/abs/2408.05147`
PDF: `https://arxiv.org/pdf/2408.05147`
HTML: `https://arxiv.org/html/2408.05147`
Authors: Tom Lieberum, Senthooran Rajamanoharan, Arthur Conmy, Lewis Smith, Nicolas Sonnerat, Vikrant Varma, Janos Kramar, Anca Dragan, Rohin Shah, and Neel Nanda
Affiliation: Google DeepMind
arXiv version: 2408.05147v2, submitted 2024-08-09 and revised 2024-08-19
Subjects: Machine Learning, Artificial Intelligence, Computation and Language
Ingested: 2026-05-12
Extraction engine: arXiv abstract, PDF, and HTML extraction
Strategy: Canonical paper summary and interpretability lesson normalization

## Summary

Gemma Scope is an infrastructure paper for mechanistic interpretability. It releases a large suite of sparse autoencoders, or SAEs, trained on Gemma 2 models.

SAEs are used to decompose language-model activations into sparse learned latents. The hope is that those latents correspond to more interpretable features than the original dense activation vector. Gemma Scope does not claim to solve interpretability. Instead, it lowers the barrier for researchers to do ambitious SAE work on modern open models.

The release covers Gemma 2 2B and 9B across all layers and key sub-layer sites, selected layers of Gemma 2 27B, and some instruction-tuned 9B comparisons. The main release contains more than 400 SAEs, and the broader release includes more than 2,000 sparsity variants, totaling more than 30 million learned latents.

## Core Thesis

The paper's thesis is that interpretability research needs reusable infrastructure, not only isolated demonstrations.

Training a comprehensive SAE suite is expensive. Without public suites, academic and independent researchers are limited to small models, single layers, or proprietary artifacts they cannot share. Gemma Scope tries to make full-model sparse-feature analysis easier by releasing the weights, metrics, tutorial material, and interactive demo.

## What Gemma Scope Builds

Gemma Scope trains JumpReLU SAEs on three sites within each transformer block:

- attention outputs,
- MLP outputs,
- post-MLP residual stream.

The models include:

- Gemma 2 2B base,
- Gemma 2 9B base,
- selected layers of Gemma 2 27B base,
- some Gemma 2 9B instruction-tuned SAEs for comparison,
- one suite of transcoders for Gemma 2 2B.

The paper emphasizes the engineering difficulty. The SAEs are trained on billions of tokens each, require storing large activation datasets, and involve substantial distributed training work.

## How The SAEs Work

An SAE tries to reconstruct an activation from a sparse combination of learned dictionary vectors.

The encoder maps an activation into many possible latents, but only a small number should be active for any one token. The decoder uses those active latents to reconstruct the original activation.

Gemma Scope focuses on JumpReLU SAEs. A JumpReLU latent has a learned threshold. Below the threshold, the latent is inactive. Above it, the latent passes through its value. This gives the model a direct way to learn which latents should be active while maintaining sparse activations.

The training objective balances reconstruction fidelity against sparsity. In plain language: reconstruct the activation well, but do it with few active latents.

## Evaluation

The paper evaluates the sparsity-fidelity tradeoff.

Sparsity is measured with the average number of active latents, often called `L0`.

Fidelity is measured mainly in two ways:

- **delta LM loss**: how much worse the language model gets when the SAE reconstruction is spliced into the forward pass,
- **fraction of variance unexplained**, or `FVU`: how much reconstruction error remains relative to a baseline.

The paper finds that residual-stream SAEs can have higher delta loss than attention or MLP-output SAEs, even when FVU looks comparable. The interpretation is that the residual stream is a shared communication channel across layers, so small errors there can matter more to the whole model.

The paper also evaluates sequence-position effects, SAE width, different SAE architectures, transfer from base to instruction-tuned models, behavior on Pile subsets, and low-precision inference.

## Important Findings

The most important findings are practical rather than flashy.

First, full-model SAE coverage is feasible but expensive. Gemma Scope is useful partly because it absorbs that cost for the community.

Second, there is no single settled SAE quality metric. Reconstruction is necessary but not sufficient. A feature space can reconstruct well without being cleanly interpretable, and a useful feature can still be hard to validate.

Third, width helps but creates feature-splitting questions. Wider SAEs can represent more fine-grained latents, but high-level concepts may split across multiple smaller latents.

Fourth, base-model SAEs transfer reasonably to instruction-tuned activations in some evaluations. That is encouraging because it suggests interpretability artifacts may survive some post-training transformations, though the transfer is not perfect.

## Why It Matters For Scale AI Prep

Gemma Scope is relevant to the Scale AI prep map because it gives concrete infrastructure for representation-level supervision and evaluation.

If the research question is "can embeddings, activations, sparse features, or probes become useful signals for post-training?", then Gemma Scope is one of the building blocks. It supplies feature spaces that can be inspected, labeled, compared, steered, or potentially used as monitors.

It also gives a useful warning. Before sparse features become rewards or evaluation signals, researchers need to know whether they are robust, causal, transferable, and resistant to optimization pressure.

## Questions To Track

- Which SAE latents are stable enough to use across prompts, layers, or post-trained model variants?
- When does feature splitting help interpretability, and when does it fragment a concept into unusable pieces?
- Are delta LM loss and FVU good enough proxies for downstream usefulness?
- How well do base-model features transfer after instruction tuning or RL post-training?
- Could SAE latents become practical reward features, or should they remain audit and monitoring tools?

## Memory Hook

Gemma Scope is less a single interpretability result than an open interpretability substrate. It gives researchers a large, reusable SAE map over Gemma 2 so they can ask better questions about features, circuits, evaluation, and post-training signals.
