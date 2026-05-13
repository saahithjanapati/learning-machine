# Features as Rewards: Scalable Supervision for Open-Ended Tasks via Interpretability

Source: `https://arxiv.org/abs/2602.10067`
PDF: `https://arxiv.org/pdf/2602.10067`
Authors: Aaditya Vikram Prasad, Connor Watts, Jack Merullo, Dhruvil Gala, Owen Lewis, Thomas McGrath, and Ekdeep Singh Lubana
Affiliation: Goodfire AI
arXiv version: 2602.10067v3, dated 2026-02-18
Subjects: Machine Learning
Ingested: 2026-05-06
Extraction engine: Local PDF extraction with PyMuPDF plus manual structured ingest
Strategy: Canonical PDF extraction and medium/full AI paper lesson normalization

## Summary

This paper proposes **RLFR**, or Reinforcement Learning from Feature Rewards. The core idea is to use internal model features, read through interpretability probes, as reward functions for behaviors that are hard to verify directly.

The paper focuses on hallucination reduction. Hallucinations are an example of an open-ended behavior problem: for long-form answers, checking every factual claim usually requires search, judgment, and context-sensitive interpretation. That makes direct reward labeling expensive. The authors ask whether a model's own internal representations can provide cheaper supervision.

Their answer is yes, at least in this case study. They train probes on activations from Gemma-3-12B-IT to detect and grade factual mistakes. The full system:

1. localizes candidate factual claims in a completion,
2. classifies which claims look unsupported,
3. asks the model to maintain, retract, or correct a flagged claim,
4. scores the intervention with feature-based reward probes,
5. uses those rewards in RL,
6. and optionally uses the same rewards for best-of-N intervention selection at inference time.

The headline result is that RLFR with best-of-32 sampling makes the trained policy **58% less likely to hallucinate** than the base model in the paper's Longfact++ evaluation harness. The authors decompose that result into roughly:

- `10%` policy reduction: the trained model becomes less hallucinatory by default,
- `35%` in-context reduction: inline interventions make the continuation more cautious,
- `13%` direct reduction: interventions fix or retract specific hallucinations.

The system also appears much cheaper than using Gemini 2.5 Pro with web search as the online reward model. The paper estimates about `$344,064` for Gemini-based rewards over the first 300 RL steps, versus about `$3,818` in compute for their feature-reward pipeline, which is about two orders of magnitude cheaper.

## Core Thesis

Interpretability features are not only useful for monitoring or steering a model at test time. If a model's internal features are well calibrated for a concept, those features can become a **supervision signal** for training the model to produce better behavior.

The paper's most compact thesis is:

> If a model already represents a behavior-relevant latent variable internally, a low-expressivity probe can turn that representation into a cheap reward signal for RL.

For hallucinations, the latent variable is whether a claim is factually supported. For other open-ended behaviors, the authors imagine similar probes for traits such as sycophancy, verbosity, or other alignment-relevant properties.

## Why The Problem Matters

RL has worked especially well when the reward is cheap and reliable. Code can be tested. Math answers can be checked. Some game states can be scored directly.

Many valuable language-model behaviors are different. Factuality, helpfulness, non-sycophancy, humility, and good judgment are not usually one-line verifier problems. A long-form answer can contain dozens of claims, and each claim may require search or expert judgment. That creates a supervision bottleneck:

- human labels are expensive,
- LLM judges with search are still expensive and imperfect,
- reward models can overfit limited preference data,
- and sparse end-of-answer rewards do not tell the model which span caused the problem.

RLFR tries to turn the model's own internal belief-like signals into a dense reward source.

## Pipeline At A Glance

### 1. Localize Candidate Claims

The first probe finds spans in the generated text that correspond to verifiable entities or factual claims. The paper calls these spans **Entities**. The localization probe is trained to imitate an LLM extraction pipeline that tries to identify factual units such as people, dates, places, citations, numeric claims, and other checkable statements.

### 2. Classify Candidate Hallucinations

The second monitoring probe predicts whether each localized Entity is unsupported. The labels come from Gemini 2.5 Pro with web search, which classifies entities as supported, not supported, or insufficient information. The paper reports that the held-out classification probe reaches strong validation performance, and in the streaming test-time setting the monitoring pipeline reaches about `.85` precision and `.56` recall for inline interventions, and about `.88` precision and `.61` recall for not-inline interventions.

### 3. Ask The Model To Intervene

When the classification probe fires, the policy enters a sub-context and chooses one of three actions:

- `MAINTAIN`: keep the claim because it is believed to be correct,
- `RETRACT`: acknowledge uncertainty or withdraw the specific claim,
- `CORRECT`: replace the claim with a specific factual correction.

The important detail is that the intervention is not only a label. The model must write a natural continuation that resolves the flagged claim.

### 4. Score Retractions And Corrections With Reward Probes

The reward pipeline uses two additional probes:

- a `Correction` probe that predicts whether a correction actually fixes the hallucination,
- a `Retraction` probe that predicts whether a retraction specifically and correctly withdraws the unsupported claim.

These probes are trained on labels produced by the expensive judge pipeline, then used as cheap dense reward functions.

### 5. Train With RL

The policy is trained for 360 steps using ScaleRL and CISPO. Rewards combine the feature-probe score with lightweight judge checks for legibility, non-meta behavior, substantiveness, and action consistency. The authors also use a Lagrangian constraint to balance corrections and retractions, aiming for a 60:40 correction-to-retraction ratio.

### 6. Use The Same Reward At Test Time

At inference time, the system can sample many possible interventions, score them with the feature-reward probes, and pick the best one. This best-of-N mechanism is important because the model may know how to produce a good correction in some samples but not others.

## Data And Labels

The hallucination case study uses Longfact++, a dataset of about 20K prompts designed to elicit fact-dense long-form completions across domains such as biology, law, economics, and history.

The data pipeline generates completions from the base policy, extracts factual entities, verifies those entities with Gemini 2.5 Pro and web search, samples interventions for unsupported entities, and evaluates those interventions.

Some key dataset facts from the appendix:

- `84,256` completions are generated from train and validation prompts before API failures.
- `76,849` completions are successfully verified.
- about `4.97 million` entities are extracted and verified.
- `65.5%` are labeled supported.
- `22.9%` are labeled not supported.
- `11.6%` are labeled insufficient information.

For unsupported entities, the base model's sampled interventions choose:

- `47.7%` correct,
- `39.5%` maintain,
- `12.8%` retract.

Those raw choices reveal a useful behavioral fact: the base model often tries to correct a mistake, but most attempted corrections fail. In the correction dataset, only `14.7%` of correction attempts are labeled fixed, while `72.9%` are failed fixes. Retractions are easier: `69.4%` of retraction attempts are correct retractions.

## Main Results

### End-To-End Hallucination Reduction

The paper's headline table compares the base model, the base model with the monitoring pipeline, and several RLFR configurations.

| Policy | Policy reduction | In-context reduction | Direct reduction | Overall reduction |
| --- | ---: | ---: | ---: | ---: |
| Base | `0.0%` | `0.0%` | `0.0%` | `0.0%` |
| Base + Monitor | `0.0%` | `25.9%` | `5.0%` | `30.9%` |
| RLFR-NI | `10.0%` | `0.0%` | `21.3%` | `31.4%` |
| RLFR | `10.02%` | `34.7%` | `11.8%` | `56.6%` |
| RLFR-bo32 | `10.0%` | `35.4%` | `12.5%` | `58.0%` |

This decomposition is important. RLFR is not only making the base policy less hallucinatory. A large part of the measured improvement comes from targeted inline self-corrections changing the rest of the completion.

### Train-Time Scaling

The paper reports that policy reduction and intervention success improve as RL training proceeds, with most policy-reduction gains by step 300 and correction quality still improving at step 360.

The cost comparison is one of the most practically interesting parts. The authors estimate that using Gemini 2.5 Pro with web search as the direct reward model for the first 300 RL steps would cost around `$344,064`. Their feature-reward computation cost is around `$3,818`.

### Test-Time Scaling

The feature-reward probes are also useful for best-of-N selection. The paper compares probe-based scoring with a baseline where Gemma is asked in token space to grade its own interventions. As N increases up to 256, both improve, but the feature-probe scorer outperforms the text-judge baseline by nearly 15 percentage points at N = 256.

That result supports the central interpretability claim: Gemma's activations contain a better ordering over interventions than Gemma can explicitly verbalize when asked to judge them.

### Standard Benchmark Preservation

The authors evaluate the trained policy on HellaSwag, PIQA, ARC-c, ARC-e, WinoGrande, BBH, MMLU, MATH, GSM8K, and GPQA. Scores are broadly similar between the base model and the RLFR policy. For example, measured MMLU moves from `69.2` to `67.2`, GSM8K from `72.3` to `73.0`, and GPQA from `26.3` to `27.3`.

The paper's interpretation is that the hallucination intervention did not broadly damage standard capabilities.

### Claim Count And Preference Checks

The trained policy does not appear to simply avoid making claims. In not-inline generation, it produces about `63.4` entities per sequence versus `63.6` for the base model. In inline settings, the claim count drops more noticeably, which the authors interpret as a natural caution effect from in-context interventions.

They also run a blind preference-rating test with Gemini over 1000 paired completions. Gemini chooses the RLFR policy's response `50.9%` of the time, suggesting the trained model is not obviously stylistically worse than the base model under that rubric.

## Why This Paper Is Interesting

The paper connects interpretability, scalable oversight, and RL post-training in a concrete way.

Usually, activation probes are discussed as monitors: they detect dangerous states, hallucinations, deception-like signals, or internal uncertainty. Sometimes they are discussed as steering tools: intervene on a representation and change behavior at test time. This paper adds a third role:

**use features as rewards, and train the model to produce behavior that its own features regard as better.**

That is conceptually neat because it makes interpretability part of the training loop rather than only a diagnostic layer outside it.

## Limitations

The authors are explicit about several risks.

First, training against a monitor can make the student learn to evade the monitor. The paper mitigates this by running probes on a frozen parameter set and by adding constraints for natural text, and the results suggest evasion is not the main effect in this experiment. But the authors do not claim the issue is solved in general.

Second, the evaluation and data-collection pipelines share much of the same prompting and tooling stack. That makes labels internally consistent, but it also means external validation remains important.

Third, the method is only demonstrated on hallucination reduction with one model family and one evaluation setup. It is plausible that feature rewards work for other open-ended behaviors, but that is future work.

Fourth, inline interventions can sometimes push completions out of distribution, especially after repeated or severe corrections.

Finally, successful feature rewards require well-calibrated features. If the relevant concept is not represented clearly, or if the probe learns a brittle shortcut, the reward may teach the wrong behavior.

## My Take

The most useful idea here is not merely "use a probe as a reward model." It is the broader training pattern:

1. use an expensive judge to label a behavior,
2. train a cheap probe on model activations to imitate the judge,
3. optimize a policy against the probe,
4. keep the expensive judge mostly for calibration, auditing, and uncertain cases.

That looks like a promising shape for scalable oversight because it gives a middle path between fully manual reward labeling and fully opaque reward models. The reward is still learned, but it is intentionally low-expressivity and grounded in existing model features.

The main caution is that feature rewards are only as good as the representational story behind them. A probe with good held-out AUC is not automatically a trustworthy objective. But this paper is a strong example of how interpretability can become operational engineering rather than only after-the-fact explanation.

## Questions To Remember

1. What makes hallucination reduction an open-ended reward problem rather than a simple verifier problem?
2. Why does RLFR use separate localization, classification, correction, and retraction probes?
3. Why are retractions easier than corrections in this setup?
4. What does the 58% hallucination reduction decompose into?
5. Why does best-of-N sampling help more when scored by activation probes than by text-space self-judgment?
6. What does it mean for a model to learn the target behavior rather than evade the monitor?
7. What would need to be true for feature rewards to work on sycophancy, verbosity, or other alignment-relevant behaviors?
