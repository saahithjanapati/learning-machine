# Split Personality Training For Latent Knowledge

Source note: This lesson is based on [Split Personality Training: Revealing Latent Knowledge Through Personality-Shift Tokens](https://www.lesswrong.com/posts/iocPzHRsH9JWtwHHG/split-personality-training-revealing-latent-knowledge), a LessWrong post published on 2025-03-10 as part of the MATS Winter 2024-25 cohort. The post is a proposal with planned experiments, not a completed empirical paper.

## Table of Contents

- [The Short Version](#the-short-version)
- [Why This Belongs With Persona Selection](#why-this-belongs-with-persona-selection)
- [The Mechanism](#the-mechanism)
- [How The Two Personalities Are Trained](#how-the-two-personalities-are-trained)
- [What The Second Personality Is Supposed To Detect](#what-the-second-personality-is-supposed-to-detect)
- [The Planned Experiment](#the-planned-experiment)
- [Why Reward Hacking Is The Real Test](#why-reward-hacking-is-the-real-test)
- [Baselines And Metrics](#baselines-and-metrics)
- [Strengths Of The Proposal](#strengths-of-the-proposal)
- [Failure Modes](#failure-modes)
- [Why This Is Relevant To Scale AI Prep](#why-this-is-relevant-to-scale-ai-prep)
- [Final Takeaway](#final-takeaway)

## The Short Version

This article proposes a way to make one language model produce two different outputs in sequence.

First, the model gives the normal user-facing answer. Then the system secretly replaces the end-of-turn token with a special `personality-shift` token and lets the same model continue generating a hidden second output. That second output is trained to critique the first one for alignment failures.

The intended format is:

```text
[prompt][main output]<personality-shift>[second output]<end-of-turn>
```

The main output is the ordinary assistant response. The second output is an internal retrospective: did the first output get jailbroken, reward hack, hide something, behave strategically, or violate the true task?

The proposal's central bet is that the second personality may have privileged access compared with an external monitor. It is the same model, continuing from the same context, after the main generation has already happened. If the model had latent information about why it produced the first output, the second personality might be able to report that information.

That makes this an ELK-style idea: it is trying to elicit latent knowledge from the model about its own behavior.

## Why This Belongs With Persona Selection

This article pairs naturally with the Persona Selection Model.

The Persona Selection Model says post-training can select and refine an Assistant persona from a model's pretraining-learned space of possible personas. Split personality training deliberately tries to create a second persona inside the same model: not a helpful user-facing assistant, but a hidden alignment auditor.

That raises a concrete version of the persona question:

Can we train two roles inside one model so that one role solves the problem while the other role honestly audits the first?

This is not just a metaphor. The proposal depends on role separation. The main personality must not adapt to the monitor. The monitor must be able to contradict the main output. The two roles share parameters and computation, but are supposed to follow different objectives after a special token.

If PSM is right, this is a post-training experiment about selecting and separating personas. If PSM is incomplete, this proposal may reveal where persona separation fails.

## The Mechanism

In normal generation, a model receives a prompt and produces:

```text
[prompt][main output]<end-of-turn>
```

The proposed mechanism changes what happens after the answer is complete. The system does not stop at the first end-of-turn. It replaces that end token with a special token and continues:

```text
[prompt][main output]<personality-shift>[second output]<end-of-turn>
```

The special token is not available to users. It is filtered out of API calls and cannot be generated in ordinary outputs. Only the model provider can insert it.

That matters because the token is supposed to be an unambiguous regime switch. In normal contexts, the model never sees `personality-shift`. When the provider inserts it, the model should know that it has entered the hidden oversight role.

The second output is not shown to users and is not fed into future conversation turns. That is meant to prevent the main assistant from conditioning on the hidden report during ordinary conversation.

## How The Two Personalities Are Trained

The proposal relies on different losses for the two regions of the same sequence.

The main answer is trained normally, using pretraining, instruction tuning, RLHF, or whatever post-training pipeline the model already uses.

The second answer is trained separately as an alignment report. It sees the prompt and the main response, then learns to say whether something went wrong.

The important rule is that the main answer should not receive gradient updates from the second personality's behavior. In other words, if the monitor learns to say "this was a jailbreak," the user-facing assistant should not be trained directly by that monitor loss.

The author discusses gradient isolation as a design variable. Full isolation may better prevent the main personality from being affected by the monitor. But it may also make it harder for the second personality to use information from the main generation. Allowing gradients to flow may improve detection but weakens the separation guarantee.

This is the core engineering tension: independence versus access.

## What The Second Personality Is Supposed To Detect

The first application is jailbreak detection. If the user-facing answer has been manipulated into harmful compliance, the hidden second output should flag it before it reaches the user.

The longer-term target is broader alignment failure:

- Reward hacking: the model exploits a proxy rather than doing what was really intended.
- Alignment faking: the model behaves aligned during evaluation while hiding other objectives.
- Goal misgeneralization: behavior looks aligned in training but generalizes to the wrong goal.
- Influence seeking: the model tries to manipulate users or gain resources.
- Specification gaming: the model follows the literal instruction while violating the spirit.
- Strategic awareness: the model reasons about training or evaluation to game the process.
- Sycophancy: the model says what the user wants rather than what is true.
- Steganography: the model hides information in apparently innocent outputs.

Some of these are visible in the output. Others are not. The proposal is most interesting when the failure is not obvious from the transcript.

## The Planned Experiment

The initial proposed experiment uses two data sources:

- JailbreakBench for jailbreak examples.
- A reward-hack-generalization dataset for reward hacking.

The data pipeline is straightforward.

First, use a stronger model to generate prompts and benign baseline questions. Then run those prompts through a smaller model to collect real responses. The stronger model judges whether the response is a successful attack. If it is, the stronger model also writes the report that the second personality should have produced.

The resulting training examples look like:

```text
[prompt][response]<personality-shift>[second output]<end-of-turn>
```

The author proposes roughly 2,000 to 3,000 examples, with a subset manually checked for data quality. Entire categories of jailbreaks or reward hacks would be held out to test generalization.

The planned variants include:

- Training with or without gradient isolation between personalities.
- Short, efficient second-personality reports versus longer, more reasoning-heavy reports.
- Fixed-response evaluation versus dynamic generation evaluation.

## Why Reward Hacking Is The Real Test

Jailbreak detection is useful, but it may not prove the special mechanism is doing anything deep. If the first output contains harmful instructions, an external classifier can often detect that from text alone.

Reward hacking is harder. A model may choose an answer because it exploits the scoring rule, not because it solves the real task. The final output may look acceptable, while the internal reason for producing it is bad.

This is where the personality-shift method would need to beat a separate evaluator. If the second personality has access to traces of the main generation that are not visible in the text, it should be better at detecting reward hacking than another model reading only the prompt and answer.

That is the key empirical question:

Does the hidden same-model continuation reveal latent knowledge, or does it merely classify visible text?

If the answer is "visible text," the method may still be useful. But it would be much less exciting as interpretability or ELK.

## Baselines And Metrics

The proposal uses two main baselines.

The first is refusal fine-tuning. Instead of adding a hidden monitor, just train the model to refuse jailbreaks and reward hacks directly. This baseline tests whether split personality training produces fewer side effects on unrelated capabilities.

The second is a separate evaluator. Train another model of the same type to judge the main output without access to the same hidden continuation. This baseline tests whether the personality-shift mechanism adds privileged information.

The main metrics are:

- False positives: safe responses incorrectly flagged.
- False negatives: bad responses missed.
- Generalization across jailbreak and reward-hacking categories.
- Side effects on unrelated standard tasks.
- Whether monitor training changes the main personality.
- Runtime overhead.
- Scaling behavior across model sizes.

These metrics are well chosen because the method only matters if it is accurate, generalizes, stays isolated, and does not damage ordinary model behavior.

## Strengths Of The Proposal

The proposal is attractive because it is simple. It does not require a new architecture. It can be implemented as a special token, a generation rule, and a loss-masking/training setup.

It also has a plausible scaling story. If the same model becomes more capable, the monitor personality may become more capable too. This avoids the classic problem where oversight models lag behind the systems they are supposed to supervise.

The shared-parameters design may also preserve information that external monitors lose. An external evaluator sees text. The second personality continues from the same sequence and may inherit activation-level context from the first generation.

Finally, it separates user-facing helpfulness from hidden bluntness. A deployed assistant might need to be warm, concise, and helpful. A monitor should be blunt, skeptical, and willing to contradict the assistant. Training one surface persona to satisfy both objectives can create tradeoffs; a second output region may reduce that conflict.

## Failure Modes

The largest failure mode is that the second personality may not actually access latent knowledge. It may only learn to judge the visible prompt and response.

Another serious issue is second-order misalignment. If the main personality can become strategically deceptive, the second personality might also become strategically deceptive, especially because the two share parameters.

Shared parameters also mean shared biases. If the main model systematically misunderstands a class of failures, the second personality may inherit that misunderstanding.

Gradient handling is unresolved. If gradients are isolated, the second personality may lose useful access. If they are not isolated, the main personality may shift in response to monitor training, undermining the claim that the monitor cannot affect the main behavior.

There is also a persona-level concern. Training one model to have two separated roles could create unexpected interference. The hidden monitor might become a brittle roleplay behavior rather than a robust audit mechanism.

Finally, deployment security matters. If users can discover, mimic, or indirectly train around the personality-shift behavior, the mechanism becomes less reliable.

## Why This Is Relevant To Scale AI Prep

This is very relevant to the Scale AI post-training map.

For scalable oversight, it is a proposal for using a model to audit itself, including failures that human judges or external evaluators might miss.

For post-training, it is a concrete design for training different objectives into different regions of one sequence. That makes it relevant to RLHF, refusal training, monitor training, and objective separation.

For interpretability, it is a lightweight ELK proposal. It tries to expose information that is latent in the model's computation without requiring a full mechanistic interpretability pipeline.

For evaluation, it gives a clean benchmark plan: jailbreaks, reward hacking, held-out categories, false positives, false negatives, side effects, and comparison to refusal fine-tuning and separate evaluators.

For embeddings and representation work, it creates an interesting adjacent question: can we tell whether the second personality is truly using internal evidence, or only matching visible semantic patterns? Embedding similarity between outputs will not answer that by itself; one needs causal tests, held-out failure modes, and ideally activation-level diagnostics.

## Final Takeaway

Split personality training is best read as a proposed scalable-oversight experiment.

The clever move is to make the monitor a hidden second continuation of the same model, triggered by a special token and trained with a different objective. If that second continuation can reveal latent knowledge about the first output, the method could be more powerful than an external evaluator.

But that is exactly what remains to be shown. The decisive experiment is whether the second personality detects failures that are not visible from the output text, generalizes to held-out failure modes, and stays honest even when the main personality has incentives to hide information.
