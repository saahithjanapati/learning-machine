# RL For Knowledge Awareness

Source note: Kalomaze, "Reinforcement Learning for Knowledge Awareness," published May 7, 2026. Source page: [kalomaze.bearblog.dev/rl-for-knowledge-awareness](https://kalomaze.bearblog.dev/rl-for-knowledge-awareness/). Processed source: [materials/processed/ai/reinforcement-learning-for-knowledge-awareness.md](../../../materials/processed/ai/reinforcement-learning-for-knowledge-awareness.md).

Filing note: This is filed normally under `AI / Collection` and cross-listed under [Scale AI Research Internship Prep](../scale-ai-research-internship-prep/README.md) as `post-training`, `interpretability`, and `post-training x interpretability`.

## Table of Contents

- [The Big Picture](#the-big-picture)
- [Why Reward Modeling Is The Main Idea](#why-reward-modeling-is-the-main-idea)
- [The Behavior Being Trained](#the-behavior-being-trained)
- [How The Data Is Constructed](#how-the-data-is-constructed)
- [The Tiny Reward Head](#the-tiny-reward-head)
- [What The RL Run Shows](#what-the-rl-run-shows)
- [The Environment Design Lesson](#the-environment-design-lesson)
- [The Interpretability Connection](#the-interpretability-connection)
- [Why This Is Useful For Research Prep](#why-this-is-useful-for-research-prep)
- [Caveats](#caveats)
- [Memory Checklist](#memory-checklist)

## The Big Picture

This post is about a deceptively simple question:

**Can reinforcement learning teach a model to know when it does not know something?**

The concrete behavior is "knowledge awareness." If a user asks about a real researcher, the model should answer with useful substance. If a user asks about a detailed but nonexistent researcher, the model should not confidently invent a biography. It should hedge, flag uncertainty, or push back on the premise.

That is a good post-training problem because it is not a clean exact-answer task. There is no unit test for "epistemic humility." A model can be too credulous, but it can also become too timid. The goal is not "always refuse unfamiliar names." The goal is a context-sensitive boundary between real knowledge and fake premises.

Kalomaze's experiment tries to create that boundary through a learned reward model over outcomes.

## Why Reward Modeling Is The Main Idea

The post argues that people often underrate Bradley-Terry reward modeling because they associate it with early RLHF and noisy human preference data.

The deeper framing is different. A Bradley-Terry reward model trained on chosen and rejected responses is learning a discriminator between two outcome distributions. In rough terms, it asks:

- What does the preferred behavior distribution look like?
- What does the dispreferred behavior distribution look like?
- Can I assign a scalar score that separates them?

That is broader than "predict what humans like." It can be used whenever you can construct meaningful pairs.

For post-training, this is important because many behaviors we want are not naturally verifiable. Code and math can often use exact rewards. But honesty, calibration, helpful refusal, non-sycophancy, good taste, and domain judgment often need softer signals. A learned reward model can become the bridge between fuzzy outcome quality and an RL objective.

## The Behavior Being Trained

The target behavior is not general truthfulness. It is a narrower epistemic habit:

- answer known real-person questions,
- hedge or reject invented-person questions,
- avoid collapsing into blanket refusal.

The third point is crucial. If the model learns "uncertainty is always rewarded," then it can get high scores by pretending not to know anything. That would reduce hallucination but also destroy usefulness.

So the task has two sides:

- On fake prompts, confident substantive answers are bad.
- On real prompts, false hedging is bad.

That makes the reward signal genuinely relational. The same surface behavior, uncertainty, can be good or bad depending on the prompt class.

## How The Data Is Constructed

The experiment uses synthetic data with two subsets.

The fake subset contains detailed questions about nonexistent researchers. These are designed to trigger confident confabulation.

The real subset contains questions about known influential researchers, grounded with Wikipedia context. Real people are chosen with a simple popularity heuristic.

The clever part is the use of prefix conditioning. The author uses assistant-turn prefilling to induce locally desirable uncertainty behavior. For example, a model can be nudged to say that it does not recognize a name and should be careful.

But if that prefill were treated as a universal behavioral target, the model could overgeneralize. It might start denying knowledge of real people too.

The fix is polarity flipping:

- For fake-person prompts, the uncertainty-shaped response is preferred.
- For real-person prompts, confident substantive answering is preferred.

Then the prefill is stripped before training the reward model. The scorer only sees the final completion, not the intervention that produced it. That forces the learned reward to separate behavior based on outcome quality rather than copying a steering artifact.

## The Tiny Reward Head

The reward model is intentionally small.

Qwen3-8B has hidden states of size `4096`. The experiment freezes the language model and trains a single linear transformation over one hidden state:

```text
W: 4096 -> 4096
score(x) = 0.01 * sum(Wx)
```

That score becomes the Bradley-Terry logit for chosen-vs-rejected comparisons.

This is the interpretability-adjacent part. The reward head does not add new knowledge. It reads the model's existing internal representation and turns a latent distinction into a scalar training signal.

The post reports clean separation on the contrastive data:

| Prompt class | Preferred behavior | Dispreferred behavior | Reported accuracy |
| --- | --- | --- | ---: |
| Real people | answer substantively | falsely hedge | `100%` |
| Fake people | hedge or reject premise | confabulate | `100%` |

That does not prove the reward is universally robust. It does show that the chosen synthetic distinction is highly readable from the model's activations.

## What The RL Run Shows

The RL run is short, about 300 steps, and evaluated periodically on held-out prompts.

The important metrics track:

- fake-person refusals,
- fake-person hedging,
- fake-person confident confabulation,
- real-person substantive answering.

A successful run should reduce confident fake-person confabulation without sacrificing real-person answering.

That is roughly what happens. The model becomes much less likely to accept fake biographical premises while retaining high answer rates for real researchers. A qualitative held-out example also shows transfer to a different false-premise case, where the post-RL model pushes back instead of confidently agreeing.

The result is small-scale, but it demonstrates the shape of a useful post-training loop:

1. Construct contrastive data around a subtle behavior.
2. Learn a reward model from model representations.
3. Use RL to shift the policy.
4. Check both the desired improvement and the obvious degenerate failure.

## The Environment Design Lesson

The most practically important section is the failed environment design.

In an early setup, the prompt mix was imbalanced and the reward objective was effectively unbounded. The policy learned a degenerate shortcut: deny knowledge more broadly, including when it should have answered.

This is exactly the kind of thing post-training researchers worry about. A scalar reward can be technically correct on the training setup and still point the policy toward a bad region of behavior space.

The fix was to target the empirical distribution of chosen response scores rather than simply maximize the scalar. In plain terms, the model should learn to look like the preferred outcomes, not race beyond them into an out-of-distribution high-score corner.

Combined with a class-balanced prompt mix, this prevents the "just refuse everything" failure and avoids entropy collapse.

The lesson is:

**Reward model quality and environment design are inseparable.**

The same learned scorer can be useful or dangerous depending on the policy objective, sampling mix, and calibration target.

## The Interpretability Connection

This post is not trying to explain a circuit. But it is very relevant to interpretability because the whole approach depends on readable internal features.

The experiment assumes that Qwen3-8B already represents enough about epistemic status for a linear head to separate good and bad outcomes. The head is not an external judge reading text from scratch. It is a low-complexity readout over model activations.

That connects directly to a broader research direction:

- train probes for behavior-relevant internal variables,
- use the probes as monitors or reward functions,
- post-train the model against those signals,
- audit whether the model learns the intended behavior or learns to game the probe.

This is close in spirit to "Features as Rewards," where interpretability probes become a reward source for hallucination reduction. Kalomaze's post is a smaller and more informal experiment, but the overlap is clear: internal representations can sometimes become supervision.

## Why This Is Useful For Research Prep

For a Scale AI research internship, this is useful because Scale's recent research themes include evaluation, reward design, rubrics, verifiers, and post-training for open-ended tasks.

The post gives a compact example of a problem that sits between exact RLVR and vague preference tuning:

- The target behavior is not captured by a simple checklist.
- The desired behavior may have near-zero natural hit rate.
- The reward must distinguish context-dependent preferences.
- The model already appears to contain useful latent information.
- The RL environment must avoid degenerate overoptimization.

That is a good mental template for many research questions around post-training and interpretability:

**Can we turn a latent representation or constructed preference distinction into a robust training signal for a behavior that is hard to verify directly?**

## Caveats

First, the experiment is deliberately small. It uses one model family, one behavior, and synthetic data. The clean separation numbers may not survive a broader prompt distribution.

Second, the reward head could learn dataset artifacts. Stripping the prefill helps, and polarity flipping is clever, but deeper audits would be needed.

Third, using a probe as a reward creates the possibility of probe gaming. The post addresses one obvious reward-hacking issue, but a stronger study would need adversarial evaluations and distribution-shift tests.

Fourth, the behavior is single-turn. Real knowledge awareness in assistants often requires multi-turn context, retrieval, tool use, and calibrated uncertainty over many kinds of claims.

Still, the post is valuable because it is concrete. It shows how reward modeling, representation readouts, synthetic data construction, and environment design fit into one post-training experiment.

## Memory Checklist

- Bradley-Terry reward models can be viewed as outcome-distribution discriminators.
- The task is knowledge awareness: answer real known-person prompts, avoid confabulating on fake-person prompts.
- The data uses fake and real prompt classes with polarity-flipped preferences.
- A small linear head over frozen Qwen3-8B activations separates the chosen and rejected outcomes.
- The RL run reduces fake-person confabulation while preserving real-person answering.
- An imbalanced unbounded reward setup caused over-refusal.
- Targeting the chosen-score distribution plus class-balanced data fixed the degenerate behavior.
- The interpretability link is that internal model features become a reward signal.
- The Scale AI prep relevance is post-training for soft, open-ended, hard-to-verify behaviors.
