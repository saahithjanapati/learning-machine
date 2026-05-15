# SparseRM: A Lightweight Preference Modeling with Sparse Autoencoder

Source: `https://arxiv.org/pdf/2511.07896`
Canonical page: `https://arxiv.org/abs/2511.07896`
Title: `SparseRM: A Lightweight Preference Modeling with Sparse Autoencoder`
Authors: `Dengcan Liu, Jiahao Li, Zheren Fu, Yi Tu, Jiajun Li, Zhendong Mao, Yongdong Zhang`
Submitted: `2025-11-11`
Venue: `AAAI 2026`
arXiv: `2511.07896`
DOI: `10.48550/arXiv.2511.07896`
Ingested: `2026-05-15`
Extraction engine: `arXiv metadata + Python PDF text extraction + manual structured ingest`
Strategy: `paper-mode summary focused on SAE-based reward modeling, low-resource preference prediction, and online alignment`

Related processed note: [Interpretable Reward Model via Sparse Autoencoder](interpretable-reward-model-via-sparse-autoencoder.md)

## Summary

SparseRM is a lightweight reward-modeling method that uses sparse autoencoders (SAEs) to extract preference-relevant directions from language-model hidden representations. Instead of fine-tuning a full reward-model backbone, SparseRM identifies SAE latents whose activation frequencies differ between preferred and rejected responses, converts their decoder vectors into positive and negative preference directions, projects response representations onto those directions, and trains a small reward head on the resulting projection vector.

The motivation is practical and interpretability-oriented. Reward models are important for RLHF and iterative alignment, but ordinary scalar reward models can be expensive to train and opaque. SparseRM tries to reduce trainable parameters while retaining a readable connection between reward prediction and sparse, interpretable features.

The paper evaluates SparseRM on TruthfulQA-derived preference pairs, PKU-SafeRLHF, and Red-Teaming data. It uses Gemma-2-2B-it, Gemma-2-9B-it, and Llama-3.1-8B-Instruct backbones with public Gemma-Scope and Llama-Scope SAEs. The headline claim is that SparseRM matches or outperforms most mainstream reward models while training less than 1 percent of the parameters used by conventional reward-model fine-tuning. It also works as a filter inside an online iterative DPO alignment loop.

The strongest conceptual result is the projection-vector design: raw SAE activations are not used directly. Instead, the method uses SAE decoder directions selected by preference-separation statistics and asks how strongly a sample's hidden state aligns with those directions. This preserves more preference information than simply feeding sparse latents to a classifier.

## Method

SparseRM has three main stages.

### 1. Identify preference-relevant directions

Given preference pairs `(x, y_w, y_l)`, the model extracts hidden states for the preferred and rejected responses at a target layer. A pretrained SAE maps those hidden states into sparse latent activations.

For each latent, SparseRM computes how often it activates on preferred samples and how often it activates on rejected samples. Latents whose activation frequency is much higher on preferred samples become positive preference latents. Latents whose activation frequency is much higher on rejected samples become negative preference latents.

The method then takes the corresponding SAE decoder vectors as preference-relevant directions.

### 2. Compute projection vectors

For a new response representation, SparseRM computes inner products between the hidden state and the selected positive and negative decoder directions. These inner products form a compact preference-aware projection vector.

If `K = 128`, the projection vector has `2K = 256` dimensions: `K` positive-direction scores and `K` negative-direction scores.

### 3. Train a reward head

SparseRM feeds the projection vector into a small MLP reward head and trains it with pairwise margin loss. The objective encourages the preferred response score to exceed the rejected response score by a margin.

This keeps the trainable part small. The backbone and SAE provide feature extraction, while the reward head learns how to aggregate preference-relevant directions.

## Online Alignment Loop

The paper also plugs SparseRM into an online iterative alignment framework.

At each iteration:

1. The policy model generates candidate response pairs.
2. SparseRM scores the candidates.
3. Pairs that disagree with SparseRM's preference signal are filtered out.
4. The retained pairs are used for DPO training.
5. The aligned policy becomes the policy for the next iteration.

The point is that SparseRM can act as a low-cost preference filter during alignment, not only as an offline reward-model benchmark.

## Experimental Setup

The paper evaluates two broad abilities:

- truthfulness, using TruthfulQA-derived preference pairs and MC1/MC2 evaluation;
- safety, using PKU-SafeRLHF and Red-Teaming datasets.

For low-resource reward-model training, it samples around 1,000 labeled training examples per dataset. For alignment, it uses generated preference pairs and evaluates whether the aligned model assigns higher likelihood to preferred responses.

Backbones include:

- Gemma-2-2B-it;
- Gemma-2-9B-it;
- Llama-3.1-8B-Instruct.

SAEs come from Gemma-Scope and Llama-Scope. The default choices include intermediate layers, with layer 13 for Gemma-2-2B-it, layer 31 for Gemma-2-9B-it, and layer 15 for Llama-3.1-8B-Instruct.

Baselines include standard scalar reward models, GeneralizableRM, JudgeLM, and GRAM.

## Main Results

SparseRM performs strongly as a reward model under limited data.

For Gemma-2-9B-it, the paper reports that SparseRM reaches the highest accuracy on TruthfulQA and outperforms most baselines on SafeRLHF and Red-Teaming. The method does this with a 256-dimensional projection vector and a small reward head rather than backbone fine-tuning.

In downstream alignment with Gemma backbones, SparseRM is competitive or best on several metrics. For example:

- Gemma-2-2B-it: SparseRM gets 79.5 on SafeRLHF, 67.0 on Red-Teaming, 59.3 on TruthfulQA MC1, and 73.1 on TruthfulQA MC2.
- Gemma-2-9B-it: SparseRM gets 79.9 on SafeRLHF, 60.4 on Red-Teaming, 65.2 on TruthfulQA MC1, and 78.5 on TruthfulQA MC2.

The paper also reports a Llama-3.1-8B-Instruct alignment comparison in the appendix, where SparseRM is strongest on the safety tasks and competitive on truthfulness.

## Ablations And Analysis

The design choices matter.

SparseRM compares three representations for reward-head input:

- raw SAE latents;
- random directions;
- selected top-K preference directions.

The top-K preference-direction projection vector performs best across SafeRLHF, Red-Teaming, and TruthfulQA. This supports the claim that the decoder-direction projection step is not just cosmetic; it preserves useful preference information.

The loss function also matters. Margin loss outperforms Bradley-Terry loss and binary cross-entropy in the paper's reward-model accuracy table.

SparseRM also compares against DenseRM, a variant that uses dense hidden states directly. DenseRM has slightly higher in-distribution reward-model accuracy, but SparseRM performs better in downstream alignment. The authors argue that sparse preference directions are more robust under the distribution shift from supervised preference pairs to model-generated online data.

## Interpretability

SparseRM's interpretability comes from selected SAE latents and their decoder directions. In the appendix, the paper inspects top TruthfulQA latents using Neuronpedia descriptions. Several top latents correspond to content related to statement correctness, negation, disagreement, joking, and false remarks.

This is not a complete mechanistic explanation of reward scoring, but it is more inspectable than a conventional scalar reward head over dense hidden states.

## Limitations

- The method depends on the availability and quality of pretrained SAEs for the target model and layer.
- The interpretability claim depends on whether selected SAE latents really correspond to stable, human-readable features.
- Reward-head interpretability is partial: even if directions are meaningful, the final MLP can still combine them in nontrivial ways.
- Experiments focus on selected truthfulness and safety settings, not the full diversity of reward-model use cases.
- SparseRM is evaluated as a filter in iterative DPO, but the paper does not fully analyze reward hacking against SparseRM itself.
- The comparison to dense representations suggests robustness benefits, but the mechanism of robustness under distribution shift needs deeper evidence.

## Why It Matters

SparseRM is directly relevant to the intersection of post-training and interpretability. It treats SAE features not only as audit artifacts, but as operational reward-model inputs. That is a concrete step toward using model internals as scalable supervision signals.

The most important question for future work is whether optimizing against SAE-derived preference features preserves the intended human preference concept or creates new failure modes where the policy learns to activate rewarded features without genuinely improving behavior.

## Questions For Review

1. Why does SparseRM select SAE latents by activation-frequency differences between preferred and rejected responses?
2. Why does it use decoder-direction projections instead of raw sparse latent activations?
3. What makes the method lightweight compared with ordinary reward-model fine-tuning?
4. How does SparseRM fit into an online iterative DPO loop?
5. Why might sparse projection vectors generalize better than dense hidden states under distribution shift?
6. What would reward hacking against SparseRM look like?
