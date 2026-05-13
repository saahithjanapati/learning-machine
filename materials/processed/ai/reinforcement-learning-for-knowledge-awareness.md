# Reinforcement Learning for Knowledge Awareness

Source: `https://kalomaze.bearblog.dev/rl-for-knowledge-awareness/`
Author/site: `kalomaze's kalomazing blog`
Published: `2026-05-07`
Accessed: `2026-05-07`
Extraction engine: `Codex browser text extraction plus manual structured ingest`
Strategy: `Canonical blog extraction and post-training / interpretability research-prep normalization`
Regular filing: `AI / Collection`
Research prep filing: `Scale AI research internship prep; post-training; interpretability; post-training x interpretability`
Cross-index: `topics/ai/scale-ai-research-internship-prep/INDEX.md`

## Summary

This blog post argues that Bradley-Terry reward modeling should be treated as a general outcome-distribution discriminator, not merely as an old RLHF proxy for noisy human approval.

The concrete experiment trains a very small reward-modeling head on frozen Qwen3-8B activations. The reward head is learned from contrastive pairs designed around "knowledge awareness": the model should answer confidently about real known people, but should hedge, push back, or refuse the premise when asked detailed questions about nonexistent people.

The interesting result is that a simple linear transformation over one hidden state can separate the chosen and rejected completion distributions strongly enough to drive a short RL run. After training, the model reduces confident confabulation on fake-person prompts while preserving high answer rates on real-person prompts. A held-out qualitative example also shows transfer to a different factual false-premise setting.

The post is especially useful for research prep because it sits at the intersection of:

- post-training with learned reward models,
- preference modeling beyond simple human-liking proxies,
- interpretability-style use of internal representations,
- calibration and reward-hacking control in RL environments,
- synthetic data construction for behaviors with low natural hit rate.

## Core Claim

The post reframes Bradley-Terry reward modeling as density-ratio estimation over outcome distributions. A reward model trained on preferred and dispreferred samples is not only guessing "what a human likes." It can learn a scalar boundary between two kinds of behavior, even when the desired behavior is difficult to specify with a clean rule or exact verifier.

For this experiment, the desired behavior is epistemic humility in a very specific sense:

- If a prompt refers to a real known person, answer substantively.
- If a prompt invents a detailed false person, avoid confidently accepting the premise.
- Do not learn the degenerate rule "deny knowledge too often."

The post's thesis is that constructed preference pairs can target this kind of behavior through outcome-level discrimination.

## Data Setup

The experiment uses two synthetic subsets.

The rejected subset contains detailed questions about nonexistent researchers. These prompts are designed to make the base model confabulate.

The chosen subset contains questions about real influential researchers with Wikipedia-grounded context. The real people are selected using a daily Wikipedia-view heuristic.

The important data trick is prefix conditioning. Some generations are produced with an assistant prefill that nudges the model toward uncertainty. This is useful locally for fake-person prompts, but dangerous globally, because a model could overgeneralize and deny knowledge even when it knows the answer.

To avoid that failure, the labels are polarity-flipped by prompt class:

- On fake-person prompts, hedging or premise rejection is preferred.
- On real-person prompts, confident substantive answering is preferred.

The prefill is removed before reward-model training, so the reward head only sees the final completion text. This forces it to learn a behavioral distinction rather than a surface marker from the steering intervention.

## Reward Head Training

The base model is Qwen3-8B with thinking disabled during generation.

The reward head reads a frozen hidden state with dimension `4096`. The trained component is a linear map:

```text
W: 4096 -> 4096
score(x) = 0.01 * sum(Wx)
```

The author notes that a direct `4096 -> 1` head did not converge as reliably, even though the function class is effectively equivalent. In this setup, the larger linear map appears easier to optimize.

The resulting Bradley-Terry head separates both contrastive datasets cleanly:

| Prompt class | Preferred behavior | Dispreferred behavior | Reported margin | Accuracy |
| --- | --- | --- | ---: | ---: |
| Real people | confident answer | false hedge | `+1.73` | `100%` |
| Fake people | hedge or reject premise | confabulation | `+1.38` | `100%` |

These numbers should be read as evidence that the synthetic contrastive data is very separable under the chosen representation, not as proof that the method is robust in all domains.

## RL Outcomes

The RL run is about 300 steps with periodic held-out evaluations.

The tracked metrics are:

- `refuses_fake`: fake-person responses that explicitly flag the person as probably made up.
- `fake_hedge`: fake-person responses that express uncertainty while still engaging hypothetically.
- `fake_substantive`: fake-person responses that confidently accept the false premise.
- `answers_real`: real-person responses that answer with substantive content.

The intended movement is:

- raise `refuses_fake`,
- raise or preserve `fake_hedge`,
- drive down `fake_substantive`,
- preserve `answers_real`.

The reported run largely does that. Confident fake-person confabulation drops sharply, while real-person answering remains high.

## Environment Design And Calibration

The post spends important time on a failed environment design.

If the prompt mix is class-imbalanced and the reward objective only maximizes an unbounded scalar, the policy learns a degenerate behavior: it denies knowledge too often, including on real-person prompts. This is the familiar reward-hacking shape where the policy finds a region outside the true preferred-response distribution.

The fix is to target the empirical distribution of chosen response scores, not just an unbounded higher-is-better score. Combined with a class-balanced RL datamix, this steers the policy toward the global distribution of preferred outcomes and avoids entropy collapse.

This point matters for post-training. Reward modeling alone is not enough; the environment target and data mix define what the policy can exploit.

## Interpretability Angle

The post is not a mechanistic interpretability paper, but it is interpretability-adjacent in a concrete way.

The experiment depends on the claim that Qwen3-8B already contains linearly useful information about whether a response is epistemically appropriate. The learned head does not add world knowledge. It reads an existing representation and turns a latent distinction into a reward signal.

That puts this work near the same research direction as "features as rewards" and other attempts to turn internal model representations into training signals:

- find a behavior-relevant latent variable,
- train a low-complexity readout,
- use that readout as a monitor, scorer, or reward,
- then design the RL loop so the model cannot cheaply exploit it.

The blog's experiment is small, but the research shape is important.

## Why This Belongs In The Prep Collection

For a Scale AI research internship focused on post-training and possibly interpretability, this source is relevant because it asks how to build reward signals for behaviors that are not cleanly verifiable.

The Scale-related overlap is especially strong with:

- rubric and verifier work for open-ended tasks,
- reward modeling for soft outcome distributions,
- RL environments where the model initially has near-zero hit rate for the desired behavior,
- feature-level supervision and interpretability-based rewards,
- calibration-aware evaluation of learned reward signals.

## Image References From Source

- RL metric curves: `https://gist.githubusercontent.com/kalomaze/5a0ffb9ccf0aaeaed82812f6f4ab2864/raw/first_graph.png`
- Degenerate class-imbalance run: `https://gist.githubusercontent.com/kalomaze/5a0ffb9ccf0aaeaed82812f6f4ab2864/raw/judge_eval_curves.png`
- Chosen-score KDE target: `https://gist.githubusercontent.com/kalomaze/5a0ffb9ccf0aaeaed82812f6f4ab2864/raw/kde.jpeg`
- Entropy curve: `https://gist.githubusercontent.com/kalomaze/5a0ffb9ccf0aaeaed82812f6f4ab2864/raw/image_5.jpeg`
- Base-policy false-premise example: `https://gist.githubusercontent.com/kalomaze/5a0ffb9ccf0aaeaed82812f6f4ab2864/raw/base_policy.png`
- Post-RL false-premise example: `https://gist.githubusercontent.com/kalomaze/5a0ffb9ccf0aaeaed82812f6f4ab2864/raw/not_right.png`

## Questions For Review

1. Why is Bradley-Terry reward modeling closer to density-ratio estimation than to generic "human approval prediction"?
2. Why does the fake-person / real-person polarity flip matter?
3. What failure appears when the RL environment uses an imbalanced prompt mix?
4. Why is targeting the chosen-score distribution different from maximizing an unbounded scalar reward?
5. What would make this method fail if the relevant behavior were not linearly decodable from the model's representations?
6. How does this connect to feature-reward methods for hallucination reduction?
7. What would a stronger version of this experiment need to test before it counted as robust post-training evidence?
