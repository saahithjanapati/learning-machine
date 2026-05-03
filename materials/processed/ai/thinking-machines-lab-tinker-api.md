# Thinking Machines Lab Tinker API

Source: `https://thinkingmachines.ai/blog/tinker/`
Docs: `https://docs.thinkingmachines.ai/docs/guides/index`
Tutorials: `https://docs.thinkingmachines.ai/docs/guides/tutorials`
Guides: `https://docs.thinkingmachines.ai/docs/guides/guides`
Pricing: `https://docs.thinkingmachines.ai/docs/guides/pricing`
Site: `Thinking Machines Lab`
Updated: `2025-11-19` general availability update
Ingested: `2026-05-03`
Extraction engine: `official web docs + manual structured ingest`
Strategy: `official docs article extraction and developer-oriented lesson normalization`

## Summary

Tinker is Thinking Machines Lab's managed API for post-training open-weight language models. It is designed for researchers and developers who want to control the training algorithm and data, but do not want to operate the distributed GPU infrastructure themselves.

The important distinction is that Tinker is not primarily a chat-completion API. A normal model API asks: "What text should this model produce for this prompt?" Tinker asks: "How should this model be trained, evaluated, sampled, and checkpointed across many training steps?"

Tinker exposes Python SDK primitives for training loops, including operations such as `forward_backward` and `optim_step`. The user writes the algorithmic logic: which examples go into a batch, what loss is computed, when optimization steps happen, how checkpoints are sampled from, and how the experiment is evaluated. Thinking Machines handles model hosting, distributed execution, worker management, and long-running job infrastructure.

## What The API Controls

Tinker gives the user control over:

- the dataset and batching logic,
- the loss or training recipe,
- the sequence of forward/backward passes and optimizer steps,
- supervised fine-tuning, preference optimization, reinforcement learning, distillation, or custom post-training methods,
- checkpointing and sampling from trained adapters,
- experiment code written in familiar Python environments.

This makes it closer to a programmable training substrate than a one-click fine-tuning product.

## What Tinker Handles

Tinker handles the difficult infrastructure pieces:

- distributed training workers,
- execution on large open-weight models,
- asynchronous job execution,
- checkpoint storage and retrieval,
- sampling workers for evaluation or inference,
- scaling many LoRA training tasks.

The asynchronous design matters because post-training jobs can run for a long time. A local Python process can disconnect while Tinker keeps the remote job running.

## Models And LoRA

Tinker trains low-rank adapters rather than full model weights. In practical terms, this means the base model stays mostly fixed while a smaller set of LoRA parameters learns the desired behavior. This is cheaper and easier to checkpoint than full fine-tuning, and it supports many parallel experiments.

The launch materials described support for open-weight models such as:

- `Llama-3.1-8B`,
- `Llama-3.1-70B`,
- `Qwen-235B-A22B`.

The general-availability update added support for more Qwen3 models, including:

- `Qwen3-235B-A22B`,
- `Qwen3-32B`,
- `Qwen3-14B`,
- `Qwen3-4B`,
- vision-capable Qwen3-VL models.

The update also added OpenAI-compatible sampling for base and trained models, making it easier to evaluate or use a trained adapter through a familiar inference interface.

## Workflows It Enables

The official tutorials and guides frame Tinker around post-training research workflows such as:

- supervised fine-tuning,
- DPO,
- reinforcement learning with custom rewards,
- distillation,
- text-to-SQL RL with execution rewards,
- multimodal fine-tuning,
- automatic speech recognition fine-tuning,
- sampling trained checkpoints for evaluation.

The key idea is that Tinker lets researchers experiment with the training loop itself, not merely upload a dataset and wait for a hosted fine-tune.

## Pricing Mental Model

Tinker is priced around usage of training and inference workers. Training usage depends on model size and forward-backward work, with LoRA rank and sequence length affecting cost. Sampling usage is priced separately. The important lesson is that cost is tied to the compute used by training and sampling jobs, not just to a count of API calls.

## Why This Matters

Post-training is becoming one of the central ways AI systems acquire useful behavior after pretraining. But post-training large open models normally requires a complicated stack: distributed compute, checkpoint management, fault tolerance, model serving, inference workers, and experiment tracking.

Tinker tries to separate two concerns:

1. researchers decide the scientific and algorithmic content of the experiment;
2. the platform runs the heavy infrastructure.

If it works well, it lowers the overhead of trying new post-training algorithms. That matters for alignment research, model behavior research, domain adaptation, agent training, and evaluation-heavy workflows where the interesting part is the learning recipe rather than the cluster administration.

## Caveats

Tinker does not remove the need for good research taste. Users still need to choose meaningful data, losses, reward functions, evaluation methods, and safety checks. It also does not provide arbitrary full-weight training control over any model. It is a managed LoRA-centered training API over a supported set of open-weight models.

The practical value depends on whether its abstractions are low-level enough for real research while still being high-level enough to remove infrastructure pain.
