# Language Models Use Trigonometry to Do Addition

Source: `https://arxiv.org/abs/2502.00873`
PDF: `https://arxiv.org/pdf/2502.00873`
Authors: Subhash Kantamneni and Max Tegmark
Affiliation: Massachusetts Institute of Technology
Submitted: `2025-02-02`
arXiv version: `2502.00873v1`
Venue metadata: Proceedings of the International Conference on Machine Learning 2025
Ingested: `2026-05-08`
Extraction engine: Local PDF extraction with PyMuPDF plus manual structured ingest
Strategy: Canonical PDF extraction and medium/full AI paper lesson normalization

## Summary

This paper reverse engineers how three mid-sized language models perform two-digit addition. The authors study GPT-J, Pythia-6.9B, and Llama3.1-8B on prompts of the form `a + b =`, where `a` and `b` are integers from 0 to 99 and the answer is a single token.

The main claim is that these models do not merely memorize addition tables or use a purely linear number line. Instead, they represent numbers using a generalized helix: a linear direction plus periodic Fourier-like components with periods such as `2`, `5`, `10`, and `100`. This representation captures both order and modular structure. The model can know that `37` is greater than `22`, while also representing facts like parity, units digit, and base-10 cycles.

The authors then argue that the models compute addition by manipulating this helical representation with a version of the `Clock` algorithm. To solve `a + b`, the model builds helix-like representations for `a` and `b`, moves them to the final token, constructs a representation of `a + b`, and then reads that representation out into logits for the answer token.

The paper is mechanistic because it does not stop at representation geometry. It uses activation patching, path patching, attention-head analysis, MLP-output analysis, and neuron-preactivation fitting to test whether the helical variables are causally involved. In GPT-J, the authors find a staged story: attention heads mostly move the `a` and `b` helices to the final token; MLPs 14-18 build the `a + b` helix; MLPs 19-27 read that helix out into logits.

The authors are careful about limits. The helix is strongly implicated in addition and subtraction and relevant for several other numerical tasks, but it does not fully explain every numerical behavior. They also do not isolate the exact low-level trigonometric identities that build `helix(a + b)` from `helix(a)` and `helix(b)`. The result is best read as a strong representation-level and circuit-level explanation of one arithmetic capability, not a complete theory of all model math.

## Core Thesis

Language models can learn a structured internal number system. In these models, numbers live on a generalized helix made from linear and periodic components. Addition works by transforming the helix for the operands into a helix for the answer, then reading that answer helix into the output distribution.

This matters because it gives a concrete example of a real LLM capability being explained at the level of internal variables and model components. The paper connects features and circuits: it identifies what the relevant feature is, then studies how attention heads, MLPs, and neurons move and use that feature.

## Main Pieces

### 1. The Task Setup

The authors test GPT-J, Pythia-6.9B, and Llama3.1-8B on 10,000 prompts of the form `a + b =`, where `a, b` are in `[0, 99]`.

The models are competent enough for mechanistic study:

- GPT-J: `80.5%` accuracy
- Pythia-6.9B: `77.2%` accuracy
- Llama3.1-8B: `98.0%` accuracy

The main analysis focuses on GPT-J because its simpler MLP architecture makes neuron-level interpretation easier.

### 2. Numbers Look Like Generalized Helices

The authors analyze number representations after layer 0 and find two kinds of structure:

- linear structure, where number magnitude is represented along a direction;
- periodic structure, where Fourier components capture cycles like parity and base-10 digit patterns.

They model a number representation as a generalized helix: one linear term plus sine/cosine terms for periods such as `2`, `5`, `10`, and `100`.

### 3. The Helix Is Causally Involved

The authors use activation patching to test whether fitted helix representations preserve the information the model uses. The helix fit often outperforms PCA baselines with the same or similar dimensionality and approaches the effect of patching the full activation. This suggests the helix is not merely a visualization trick; it is part of the computation.

### 4. Addition Uses The Clock Algorithm

The proposed algorithm has four steps:

1. represent `a` and `b` as helices on their tokens;
2. use attention heads to move those helices to the final token;
3. use MLPs to build the `a + b` helix;
4. use later MLPs and some attention heads to read the answer helix into logits.

In GPT-J, attention heads in roughly layers 9-14 mostly move information, MLPs 14-18 build the answer helix, and MLPs 19-27 translate the answer helix to logits.

### 5. Neurons Also Show Helical Structure

The authors inspect important neuron preactivations. Many can be fit with functions over `a`, `b`, and `a + b` using the same periods as the helix. Patching fitted preactivations for top neurons recovers much of the performance of patching their actual preactivations, supporting the idea that individual neurons are reading helical variables.

## Limitations

The authors do not fully identify the exact micro-mechanism that creates `helix(a + b)` from the operand helices. They hypothesize that trigonometric identities are involved, but they do not isolate that calculation directly.

The helix is not the whole story for every numerical task. It is strongly implicated for addition and subtraction, and relevant for other tasks like modular arithmetic and integer division, but PCA can outperform the helix fit on some tasks.

Different tokenization schemes and model architectures may use modified algorithms. For example, models that tokenize digits separately must solve an additional digit-collation problem.

The study focuses on two-digit addition in mid-sized models. It does not prove that all arithmetic or all mathematical reasoning in frontier models works this way.

## Related Local Reading

- Lesson: [topics/ai/lessons/2026-05-08-language-models-use-trigonometry-to-do-addition.md](../../../topics/ai/lessons/2026-05-08-language-models-use-trigonometry-to-do-addition.md)
- Related interpretability lesson: [Features as Rewards](../../../topics/ai/lessons/2026-05-06-features-as-rewards.md)
- Related representation lesson: [Qwen-Scope](../../../topics/ai/lessons/2026-05-04-qwen-scope.md)
