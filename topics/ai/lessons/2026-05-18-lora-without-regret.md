# LoRA Without Regret

Source note: This lesson is based on John Schulman and collaborators at Thinking Machines Lab, "LoRA Without Regret," published September 29, 2025. Source: [https://thinkingmachines.ai/blog/lora/](https://thinkingmachines.ai/blog/lora/). Processed source: [materials/processed/ai/lora-without-regret.md](../../../materials/processed/ai/lora-without-regret.md).

Filing note: This is filed normally under `AI / Collection` and cross-listed under [Scale AI Research Internship Prep](../scale-ai-research-internship-prep/README.md) as `post-training`, `infrastructure`, and `scale-context`.

## Table of Contents

- [The Big Picture](#the-big-picture)
- [Why LoRA Is A Serious Post-Training Tool](#why-lora-is-a-serious-post-training-tool)
- [The Low-Regret Regime](#the-low-regret-regime)
- [Rank, Capacity, And Dataset Size](#rank-capacity-and-dataset-size)
- [Why Attention-Only LoRA Is Usually The Wrong Default](#why-attention-only-lora-is-usually-the-wrong-default)
- [Why RL Needs Surprisingly Little LoRA Capacity](#why-rl-needs-surprisingly-little-lora-capacity)
- [Hyperparameters And The 10x Learning Rate Rule](#hyperparameters-and-the-10x-learning-rate-rule)
- [Compute Efficiency](#compute-efficiency)
- [What This Means For Tinker And Post-Training Research](#what-this-means-for-tinker-and-post-training-research)
- [Caveats](#caveats)
- [Memory Checklist](#memory-checklist)

## The Big Picture

This post asks a very practical question:

**When can LoRA match full fine-tuning, and when is it actually giving something up?**

The answer is more favorable to LoRA than the usual cautious story. Thinking Machines finds a broad "low-regret regime" where LoRA learns with the same sample efficiency as full fine-tuning and reaches the same final performance. That regime covers many post-training settings: instruction tuning, reasoning fine-tuning, and especially policy-gradient RL.

This matters because LoRA is much easier to operate. It trains fewer parameters, stores small adapters, supports many adapters on one serving stack, and makes checkpoint transfer cheap. If LoRA were always a quality compromise, those operational wins would be secondary. But if LoRA often matches FullFT in post-training, it becomes a default research tool.

## Why LoRA Is A Serious Post-Training Tool

LoRA replaces a weight matrix update with a low-rank adapter:

$$
W' = W + \gamma BA
$$

Instead of updating all of $W$, the training run updates smaller matrices $B$ and $A$. This is attractive for three reasons.

First, LoRA supports multi-tenant serving. A server can keep a base model fixed and load many adapters for different trained variants.

Second, LoRA reduces training memory. Full fine-tuning needs gradients and optimizer states for the whole model, often in higher precision. LoRA only needs those states for adapter parameters.

Third, LoRA adapters are easy to store, move, and compare. That is valuable when running many post-training experiments.

The open question is whether those benefits come with performance regret.

## The Low-Regret Regime

The post's answer is that LoRA often has little or no regret when:

- the post-training dataset is small or medium sized,
- the LoRA rank provides enough trainable capacity,
- LoRA is applied to all important layers,
- learning rates are tuned for LoRA rather than copied directly from FullFT.

In this regime, high-rank LoRA and FullFT have similar learning curves. The loss decreases similarly over training steps, and the final result can match FullFT.

This is not the same as saying LoRA always works. Pretraining-like settings with huge datasets can exceed adapter capacity. In that case, LoRA underperforms. But the failure mode is not a clean loss floor. It is a training-efficiency slowdown as capacity becomes binding.

## Rank, Capacity, And Dataset Size

The article varies LoRA rank from 1 to 512 and compares against FullFT on Tulu3 and OpenThoughts3 style supervised fine-tuning data.

The pattern is intuitive:

- high-rank LoRA tracks FullFT,
- medium and low ranks eventually fall behind,
- the step where they fall behind correlates with rank and dataset size.

The useful mental model is:

**LoRA has to store the information the training data is trying to impart.**

If the adapter has enough capacity, it behaves like FullFT for the relevant training horizon. If it runs out of capacity, learning slows. This gives a more concrete way to think about PEFT than "smaller adapter means worse model." The right question is whether the adapter is large enough for the information content of the post-training task.

## Why Attention-Only LoRA Is Usually The Wrong Default

One of the strongest practical results is that attention-only LoRA underperforms. Applying LoRA to MLP and MoE layers matters a lot, and attention-only LoRA can lose even when matched for trainable parameter count.

That is important because the original LoRA paper and many follow-ups focused on attention matrices. Thinking Machines' result suggests that for modern post-training, the default should be broader coverage, especially the MLP/MoE layers where much of the model's parameter mass lives.

The post offers an empirical neural tangent kernel intuition. If fine-tuning behavior is approximated by gradient dot products, then the layers containing most parameters have large influence. LoRA resembles FullFT only if the adapter is placed on the layers that dominate those gradient features.

## Why RL Needs Surprisingly Little LoRA Capacity

The most interesting result is about reinforcement learning.

In policy-gradient experiments on math reasoning tasks, LoRA matches FullFT even with very small ranks. The post argues that this is not an accident. Supervised learning can provide roughly one bit per token or more of learning signal. Policy-gradient RL often provides one scalar reward or advantage per episode.

In information terms, that means RL supplies far less training information per generated token. If an episode produces thousands of tokens but only one scalar advantage signal, the adapter does not need to absorb token-level supervision in the same way supervised fine-tuning does.

That makes low-rank adapters surprisingly sufficient for RL post-training. A rank-1 LoRA for an 8B model can already have millions of trainable parameters, enough to store the information carried by many scalar reward episodes in the post's back-of-the-envelope estimate.

This is a useful lens for RLVR and reasoning-model work. The bottleneck may not be adapter capacity; it may be reward quality, exploration, task distribution, and evaluation.

## Hyperparameters And The 10x Learning Rate Rule

The post also studies LoRA hyperparameters.

One practical finding is simple:

**The optimal LoRA learning rate is about 10 times the optimal FullFT learning rate in their experiments.**

This appears across supervised and RL sweeps. The authors do not claim a complete theory for the 10x ratio, but it is immediately useful as a tuning heuristic.

The post also explains why the standard $1/r$ LoRA scaling makes the optimal learning rate approximately independent of rank, especially early in training. Because the effective adapter update is an average over rank-1 components, changing rank does not strongly change the initial expected update size under the standard parametrization.

The practical implication is that rank and learning rate are not as hopelessly tangled as they might look. You still need sweeps, but there are invariances that reduce the search space.

## Compute Efficiency

LoRA is also compute-efficient. In the simplified matrix analysis, FullFT needs the forward pass, the backward pass into inputs, and the gradient for the full weight matrix. That is roughly $3N^2$ multiply-adds for a square matrix.

LoRA still needs the forward and backward through the frozen base weight, but it avoids computing a full $N \times N$ weight gradient. The adapter-gradient cost is much smaller when rank $R \ll N$. The article estimates LoRA as slightly more than 2/3 of FullFT FLOPs per pass.

So even when LoRA and FullFT have the same learning curve by step count, LoRA can win by FLOPs, memory, and operational simplicity.

## What This Means For Tinker And Post-Training Research

This post also explains why Thinking Machines' Tinker API is LoRA-centered.

If LoRA often matches FullFT for post-training, then a managed LoRA training service is not just a compromise for small users. It is a way to run many serious experiments cheaply:

- sweep post-training data recipes,
- test reward models,
- run RL loops,
- checkpoint and sample adapters,
- compare many variants without full-model training infrastructure.

This is directly relevant to Scale-style research prep because the post links method choice, reward signal bandwidth, data size, model capacity, and infrastructure into one picture. It is not just "LoRA saves memory." It is "post-training often does not need full-weight capacity."

## Caveats

First, LoRA is not a free replacement for FullFT in pretraining-like regimes. Huge datasets can exceed adapter capacity.

Second, LoRA can be less tolerant of large batch sizes. That means tuning recipes that work for FullFT may not transfer cleanly.

Third, the experiments focus on specific model families, datasets, and policy-gradient setups. The broader claim is plausible, but users should still verify for their own model, task, and training loop.

Fourth, low-rank capacity is not the only concern in RL. Reward hacking, exploration failure, evaluation leakage, and distribution shift can dominate the adapter-capacity question.

## Memory Checklist

- LoRA can match FullFT in a broad post-training "low-regret" regime.
- The adapter must have enough capacity for the information in the dataset.
- Attention-only LoRA is a bad default; MLP/MoE layers matter.
- LoRA is less tolerant of large batch sizes in some supervised settings.
- Policy-gradient RL needs surprisingly little adapter capacity because the reward signal carries few bits per episode.
- A practical LoRA learning-rate heuristic from the post is about 10x the FullFT learning rate.
- LoRA can be slightly more than 2/3 of FullFT FLOPs per pass in the simplified matrix analysis.
- The post supports LoRA-centered post-training infrastructure like Tinker.
