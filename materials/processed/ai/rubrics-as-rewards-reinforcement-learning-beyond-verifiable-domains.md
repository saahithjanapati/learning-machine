# Rubrics as Rewards: Reinforcement Learning Beyond Verifiable Domains

Source: `https://labs.scale.com/papers/rubrics_as_rewards`
PDF: `https://arxiv.org/pdf/2507.17746`
arXiv: `https://arxiv.org/abs/2507.17746`
Authors: Anisha Gunjal, Anthony Wang, Elaine Lau, Vaskar Nath, Yunzhong He, Bing Liu, and Sean Hendryx
Affiliation: Scale AI
Scale Labs date: `2025-07-23`
arXiv version: `2507.17746v2`, dated `2025-10-03`
Ingested: `2026-05-08`
Extraction engine: Local PDF extraction with PyMuPDF plus manual structured ingest
Strategy: Canonical PDF extraction and medium/full AI paper lesson normalization

## Summary

This paper studies how to extend reinforcement learning post-training beyond domains where reward is easy to verify. RL with verifiable rewards has worked well for math, code, and other tasks where a final answer can be checked automatically. But many important tasks, especially medical reasoning, scientific explanation, and realistic expert assistance, do not have a single exact answer. They require a response to satisfy several criteria at once: factual correctness, completeness, reasoning quality, safety, tone, context awareness, and avoidance of common mistakes.

`Rubrics as Rewards` proposes a middle ground between binary verifiers and opaque preference reward models. For each prompt, the system builds a prompt-specific checklist of rubric criteria. Each criterion describes something the answer should include or avoid. Those criteria are then used by an LLM judge to produce reward signals for on-policy reinforcement learning with GRPO.

The paper evaluates two main reward aggregation approaches. In `RaR-Explicit`, each rubric item is judged separately and combined with a weighted average. In `RaR-Implicit`, the judge receives the whole rubric and assigns one holistic score. The implicit version performs best overall in the reported experiments, while the explicit version gives more direct interpretability and control.

Across medicine and science tasks, rubric-based rewards beat simple Likert-style LLM judging. On HealthBench, the paper reports that `RaR-Implicit` reaches an overall score of `31.2%`, compared with `25.5%` for Direct-Likert and `28.9%` for Reference-Likert in the main comparison. On GPQA-Diamond, `RaR-Implicit` reaches `37.6%` mean accuracy, compared with `34.8%` for Direct-Likert and `36.5%` for Reference-Likert. The abstract summarizes these as relative improvements of up to `31%` on HealthBench and `7%` on GPQA-Diamond over direct Likert-based rewards.

The most important lesson is that rubrics can make open-ended reward signals more structured, legible, and useful for training. They are not just evaluation artifacts. In this paper, they become the actual reward interface between expert intent and policy optimization.

## Core Thesis

RLVR is a special case of rubric-based reinforcement learning. A math verifier is basically a one-item rubric: "the answer is correct." Real-world tasks need many criteria. The paper's core move is to treat those criteria as reusable, prompt-specific reward functions.

This matters because preference labels and direct Likert scores compress too much. A single 1-to-10 rating may know that an answer is worse, but it does not tell the training loop which part of the answer failed. Rubrics expose the latent structure of quality: what facts matter, what reasoning steps matter, which omissions are dangerous, and which common mistakes should be penalized.

## Method

Each prompt `x` receives a set of rubric items. A criterion has a weight and a binary scoring function that checks whether a sampled response satisfies that criterion. The normalized weighted score becomes a reward.

The paper compares:

- `Direct-Likert`: an LLM judge rates the generated answer on a 1-to-10 scale with no reference or rubric.
- `Reference-Likert`: an LLM judge compares the generated answer to a reference answer and gives a 1-to-10 score.
- `RaR-Predefined`: a fixed generic checklist is reused for every prompt.
- `RaR-Explicit`: prompt-specific rubric criteria are judged one by one and combined with manually assigned weights.
- `RaR-Implicit`: prompt-specific rubric criteria are passed to the judge, which produces one holistic reward score.

Rubrics are generated with strong LLMs from reference answers. The authors use four desiderata:

- expert grounding,
- comprehensive coverage,
- criterion importance,
- self-contained evaluation.

Each generated rubric contains about 7 to 20 items, using categories such as `Essential`, `Important`, `Optional`, and `Pitfall`. In the released datasets, this becomes `RaR-Medicine` and `RaR-Science`, each around 20k prompts.

Training uses Qwen2.5-7B as the base policy, GRPO as the RL algorithm, 16 rollouts per prompt, a context length of 3584, a sampling temperature of 1.0, and `gpt-4o-mini` as the LLM judge for reward computation.

## Main Results

The main comparison is on HealthBench for medical reasoning and GPQA-Diamond for scientific multiple-choice reasoning.

On HealthBench:

- Qwen2.5-7B: `7.7%`
- Qwen2.5-7B-Instruct: `22.7%`
- Direct-Likert: `25.5%`
- Reference-Likert: `28.9%`
- RaR-Predefined: `12.5%`
- RaR-Explicit: `29.7%`
- RaR-Implicit: `31.2%`

On GPQA-Diamond:

- Qwen2.5-7B: `31.7%`
- Qwen2.5-7B-Instruct: `35.0%`
- Direct-Likert: `34.8%`
- Reference-Likert: `36.5%`
- RaR-Predefined: `31.7%`
- RaR-Explicit: `36.9%`
- RaR-Implicit: `37.6%`

The generic predefined rubric is weak, which is one of the paper's most useful negative results. The benefit does not come from saying "use a checklist" in the abstract. It comes from making the checklist specific to the prompt.

## Ablations And Analysis

The paper also studies the quality of rubric generation. On HealthBench-1k, rubric-based GRPO beats SFT, simple Likert rewards, and reference-Likert rewards. Rubrics generated with reference-answer guidance perform better than rubrics generated without references, which supports the claim that expert signal matters during rubric construction.

The authors also compare different rubric-generation models. GPT-4o produces the best reference-free rubrics in their comparison, but still falls short of o3-mini rubrics generated with reference-answer guidance. Smaller or open-weight models can produce useful rubrics, but rubric quality is clearly not free.

A judge-alignment study shows that rubric-guided evaluation improves pairwise preference accuracy across judge sizes. The effect is especially important for smaller judges, where explicit criteria help the model approximate human preference more reliably than a bare Likert prompt.

## Caveats

RaR still depends on LLM judges. A rubric may be human-readable, but if the judge cannot correctly apply the criteria, the reward remains noisy.

The paper studies medicine and science, not every open-ended domain. Dialogue, tool use, long-horizon agents, creative writing, and messy professional workflows may need different rubric generation and auditing.

Rubric quality is a central bottleneck. Synthetic rubrics without expert or reference grounding can miss subtle requirements, especially in high-stakes domains.

Implicit aggregation works best in the main experiments, but it hides some of the interpretability advantage because the judge is doing a holistic internal combination. Explicit aggregation is more inspectable, but its manual weights can be brittle.

Finally, rubrics reduce some problems of preference reward modeling, but they do not eliminate reward hacking. A model can still learn to satisfy rubric wording without satisfying the deeper human intent unless the rubric and judge are maintained carefully.

## Related Local Reading

- Lesson: [topics/ai/lessons/2026-05-08-rubrics-as-rewards.md](../../../topics/ai/lessons/2026-05-08-rubrics-as-rewards.md)
- Scale prep index: [topics/ai/scale-ai-research-internship-prep/INDEX.md](../../../topics/ai/scale-ai-research-internship-prep/INDEX.md)
- Nearby lesson: [Online Rubrics Elicitation from Pairwise Comparisons](../../../topics/ai/lessons/2026-05-05-online-rubrics-elicitation.md)
