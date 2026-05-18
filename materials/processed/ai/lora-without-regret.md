# LoRA Without Regret

Source: `https://thinkingmachines.ai/blog/lora/`
Author/site: John Schulman in collaboration with others at Thinking Machines Lab
Published: `2025-09-29`
Accessed: `2026-05-18`
Extraction engine: `direct article extraction plus structured manual ingest`
Strategy: `canonical technical blog extraction and post-training / LoRA lesson normalization`
Regular filing: `AI / Collection`
Research prep filing: `Scale AI research internship prep; post-training; infrastructure; scale-context`

## Summary

This Thinking Machines Lab post asks when low-rank adaptation (LoRA) can match full fine-tuning (FullFT) for modern language-model post-training. The main claim is that LoRA can learn with the same sample efficiency and reach the same final performance as FullFT in a broad "low-regret" regime, especially for small-to-medium post-training datasets and policy-gradient reinforcement learning.

The post is careful about the conditions. LoRA must have enough capacity relative to the information in the dataset, and it works much better when applied to all weight matrices, especially MLP and MoE layers. Attention-only LoRA underperforms even when given a similar trainable-parameter budget. LoRA also appears less tolerant of large batch sizes in some supervised settings, likely because the $BA$ product parametrization has different training dynamics from directly optimizing the original matrix.

For reinforcement learning, the result is stronger: LoRA matches FullFT even at very low rank in the reported policy-gradient experiments. The article gives an information-theoretic intuition: supervised learning can provide information roughly proportional to token count, while policy-gradient RL with a scalar advantage provides only $O(1)$ bits per episode. That makes low-rank adapters surprisingly sufficient for many RL post-training runs.

## Core Claims

1. For small-to-medium supervised fine-tuning datasets like instruction tuning and reasoning data, sufficiently high-rank LoRA can match FullFT.
2. When the dataset exceeds LoRA capacity, LoRA does not hit a clean loss floor; instead, learning becomes less efficient as capacity runs out.
3. LoRA can be more sensitive to large batch sizes than FullFT.
4. Applying LoRA to all layers, especially MLP and MoE layers, is much better than attention-only LoRA.
5. In policy-gradient RL, LoRA can match FullFT even with tiny ranks because the training signal has low information content per episode.
6. The optimal LoRA learning rate is empirically about 10 times the optimal FullFT learning rate in their sweeps.
7. LoRA can be compute-efficient because its forward-backward pass avoids computing full weight gradients, making it slightly more than 2/3 of FullFT FLOPs per pass in the simplified matrix analysis.

## Practical Lessons

- Do not treat LoRA as merely a memory-saving hack. In the right regime, it can behave like FullFT.
- Do not use attention-only LoRA by default for post-training. MLP/MoE coverage matters.
- Tune learning rates separately from FullFT; a 10x LoRA multiplier is a useful empirical starting point from this post.
- Watch batch size. Large batches can hurt LoRA more than FullFT.
- For RL post-training, low-rank adapters may be much more capable than intuition from supervised learning suggests.

## Why It Matters

This post connects infrastructure decisions to research iteration speed. If LoRA usually matches FullFT for post-training, then managed APIs like Tinker, multi-tenant LoRA serving, cheap checkpoint transfer, and many parallel adapter experiments become more than convenience features. They become a realistic way to scale experimentation without paying full-weight training costs every time.

The post also gives a concrete bridge between post-training practice and theory: dataset information content, trainable capacity, low-rank parametrization, and RL signal bandwidth all become part of the decision about when LoRA is enough.

## Questions For Review

1. What is the "low-regret" regime for LoRA?
2. Why does attention-only LoRA underperform MLP/MoE LoRA?
3. Why can low-rank LoRA be enough for policy-gradient RL?
4. Why might LoRA be less tolerant of large batch sizes?
5. What does the 10x LoRA learning-rate rule tell us in practice?
