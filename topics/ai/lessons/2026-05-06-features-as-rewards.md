# Features as Rewards: Turning Interpretability Into Supervision

Source note: Aaditya Vikram Prasad, Connor Watts, Jack Merullo, Dhruvil Gala, Owen Lewis, Thomas McGrath, and Ekdeep Singh Lubana, "Features as Rewards: Scalable Supervision for Open-Ended Tasks via Interpretability." arXiv:2602.10067v3, dated February 18, 2026. Source page: [arxiv.org/abs/2602.10067](https://arxiv.org/abs/2602.10067). Processed source: [materials/processed/ai/features-as-rewards-scalable-supervision-open-ended-tasks-interpretability.md](../../../materials/processed/ai/features-as-rewards-scalable-supervision-open-ended-tasks-interpretability.md).

Original sources: [arXiv abstract](https://arxiv.org/abs/2602.10067), [arXiv PDF](https://arxiv.org/pdf/2602.10067).

## Table of Contents

- [Medium-Length Version](#medium-length-version)
- [Full-Length Version](#full-length-version)
- [The Central Question](#the-central-question)
- [Why Open-Ended Tasks Are Hard To Reward](#why-open-ended-tasks-are-hard-to-reward)
- [What It Means To Use Features As Rewards](#what-it-means-to-use-features-as-rewards)
- [The RLFR Pipeline](#the-rlfr-pipeline)
- [How The Hallucination Case Study Works](#how-the-hallucination-case-study-works)
- [Main Results](#main-results)
- [Why The Best-Of-N Result Matters](#why-the-best-of-n-result-matters)
- [What To Be Careful About](#what-to-be-careful-about)
- [Memory Checklist](#memory-checklist)

## Medium-Length Version

### Medium Thesis

This paper asks whether interpretability features can become a scalable source of supervision.

The usual story for activation probes is monitoring. You train a probe to detect whether a model internally represents something: uncertainty, factuality, harmful intent, a persona, or another latent concept. Then you use the probe to watch the model or maybe steer it at inference time.

This paper makes a stronger move:

**If a model's internal features are well calibrated for a concept, those features can be used as reward functions for reinforcement learning.**

The authors call their pipeline **RLFR**, or Reinforcement Learning from Feature Rewards. They demonstrate it on hallucination reduction in Gemma-3-12B-IT.

### Why This Is Needed

Some AI tasks are easy to reward. If a model writes code, we can run tests. If it solves arithmetic, we can check the answer. If it plays a game, we can score the state.

Hallucination reduction is not like that. A long-form answer can contain dozens of factual claims. Checking them requires identifying each claim, searching for evidence, understanding context, and deciding whether the claim is supported. That is expensive if done by humans and still expensive if done by an LLM judge with web search.

The paper's idea is to pay that cost once to create labels, then train probes on model activations so future reward computation is much cheaper.

### The Basic Mechanism

RLFR has four conceptual stages.

First, it detects candidate factual claims in the model's answer. The paper calls these claims **Entities**: people, dates, places, citations, numbers, and other checkable assertions.

Second, it classifies which Entities look unsupported. This is the monitoring pipeline.

Third, when a claim is flagged, the model is asked to intervene. It can maintain the claim, retract it, or correct it. A good retraction names the specific uncertainty or mistake. A good correction replaces the wrong claim with a specific factual one.

Fourth, separate reward probes score the intervention. One probe scores correction quality. Another scores retraction quality. Those scores become rewards for RL.

The key trick is that the reward probes are trained from expensive labels but are cheap to run afterward.

### What The Paper Finds

The headline result is strong: RLFR with best-of-32 intervention sampling makes the trained policy **58% less likely to hallucinate** than the base model under the paper's evaluation.

That 58% reduction is not one thing. The paper decomposes it:

- about `10%` comes from the trained policy becoming less hallucinatory by default,
- about `35%` comes from inline interventions changing the rest of the completion in context,
- about `13%` comes from interventions directly fixing or retracting hallucinated claims.

The authors also report that the feature-reward pipeline is about two orders of magnitude cheaper than using Gemini 2.5 Pro with web search as the online reward model for the same early RL training steps.

### The Important Interpretability Claim

The most interesting result is not only that hallucinations go down. It is that the model's activations contain a better ordering over possible interventions than the model can express when asked to judge them in text.

At test time, the system can sample many candidate corrections or retractions and score them with the reward probes. As best-of-N increases, the feature-probe scorer improves substantially. A baseline where Gemma is asked to grade its own interventions in text improves much less. At N = 256, the probe-based selection beats the text-judge baseline by nearly 15 percentage points.

That suggests a subtle but important distinction:

**The model may internally represent which correction is better even when it cannot reliably verbalize that judgment as an explicit score.**

### Medium Takeaway

This paper treats interpretability as part of the training stack. Features are not just explanations after the fact. They can become dense, cheap supervision signals for behaviors that are otherwise expensive to verify.

The caution is that feature rewards are only useful when the relevant feature is real, calibrated, and hard for the student to game. But as a case study, RLFR is a concrete example of interpretability doing operational work.

## Full-Length Version

## The Central Question

Can a model's internal features supervise its future behavior?

That question sounds strange at first. Supervision usually comes from outside the model: human labels, tests, reward models, preference data, search-backed judges, or environment feedback. Interpretability, meanwhile, is often treated as a diagnostic layer. We look inside the model to understand what it is doing, but the training signal still comes from somewhere else.

This paper blurs that line.

The authors argue that if a model has learned internal features corresponding to a concept, and if those features are well calibrated against ground truth, then a probe over those features can become a reward function. The probe is not the original source of truth. It is an amortized version of an expensive source of truth.

The case study is hallucination reduction. The model already appears to track something about factual support or uncertainty in its activations. RLFR tries to turn that internal signal into a training reward.

## Why Open-Ended Tasks Are Hard To Reward

The phrase **open-ended task** matters here.

A task is open-ended when there are many acceptable outputs and no cheap deterministic verifier. Code tasks are often verifiable: run the tests. Math can sometimes be checked: compare the final answer or verify a proof structure. But long-form factual generation is messier.

Imagine a model answers:

"Grace Kelly was born in Philadelphia, trained at the American Academy of Dramatic Arts, starred in several Hitchcock films, and later became Princess of Monaco."

That answer contains many factual units. Some may be supported, some may be slightly wrong, some may be contextually misleading, and some may require external search to verify. The reward problem is not just "is the answer good?" It is:

- Which spans are factual claims?
- Which ones are unsupported?
- What specific correction or retraction would fix each unsupported claim?
- Does the correction introduce a new hallucination?
- Does the model continue naturally afterward?

That is why hallucination reduction is expensive to supervise. A good reward is dense, span-level, and context-sensitive.

## What It Means To Use Features As Rewards

The paper rests on a representational bet:

**A model trained on enough data may internally represent latent variables that matter for behavior, even when producing a correct external answer is difficult.**

This is familiar from interpretability. Probes can sometimes decode whether a model knows a statement is false, whether a prompt is asking for harmful behavior, or whether a hidden concept is active. The paper leans on that idea but changes the use case.

Instead of using a probe only to monitor the model, RLFR uses the probe as a reward model. The training loop becomes:

1. Use an expensive judge to label examples.
2. Train a low-expressivity probe on model activations to imitate those labels.
3. Use the probe's prediction as a cheap reward signal.
4. Train the policy to produce outputs the probe scores highly.

This has a different flavor from training a large neural reward model on text. A probe is constrained. It can only read what is present in the model's representations. That constraint is both a strength and a weakness. It may improve sample efficiency and reduce arbitrary reward-model generalization, but it also fails if the relevant feature is absent or brittle.

## The RLFR Pipeline

The hallucination pipeline has four probes in two groups.

### Monitoring Probes

The monitoring pipeline finds possible hallucinations in a generated answer.

The first probe is a **Localization** probe. It marks the tokens that belong to factual Entities. An Entity is a localized claim-like span: a person, institution, date, citation, relation, or other fact that can be checked.

The second probe is a **Classification** probe. Given an Entity, it predicts whether the claim is unsupported.

The labels for these probes come from Gemini 2.5 Pro. Gemini extracts factual entities, then uses web search to classify them as supported, not supported, or insufficient information. The probes then learn to imitate that expensive labeling pipeline from activations.

### Intervention Step

When the classification probe fires, the policy is asked to reassess the flagged Entity.

It chooses among:

- `MAINTAIN`: the claim is okay, so preserve it,
- `RETRACT`: the claim may be wrong, so withdraw or qualify it,
- `CORRECT`: the claim is wrong, and the model can provide a specific replacement.

This action must be realized as natural text. The system is not merely labeling the error; it is trying to produce an intervention that could be inserted into the completion.

### Reward Probes

Corrections and retractions are different skills, so the authors train separate reward probes.

The **Correction** probe predicts whether a correction fixes the unsupported claim without adding new errors. A failed correction might address the wrong aspect of the claim, introduce a new falsehood, or simply continue the mistake.

The **Retraction** probe predicts whether a retraction specifically and correctly withdraws the flagged inaccuracy. A vague "I might be wrong" is not enough if it does not identify the relevant mistake.

The resulting reward is not just the probe score. The authors also include lightweight checks for legibility, naturalness, whether the intervention is meta, whether it matches the chosen action, and whether it is substantive.

### RL Training

The student policy starts from Gemma-3-12B-IT. Training uses ScaleRL with CISPO for 360 steps.

The reward is shaped so that the model learns both correction and retraction. Retractions are easier because they only require identifying uncertainty or withdrawing a claim. Corrections require knowing the right replacement. To avoid learning only the easier behavior, the authors use a Lagrangian constraint to target a 60:40 correction-to-retraction ratio.

This is a small but important detail: the reward design is not "maximize probe score and hope." It includes structure to keep the learned policy useful.

## How The Hallucination Case Study Works

The data source is Longfact++, a prompt set designed to elicit long, factual completions across domains such as biology, law, economics, and history.

The appendix gives a concrete sense of scale:

- about `84,256` completions are generated before API failures,
- `76,849` are successfully verified,
- about `4.97 million` factual entities are extracted and verified,
- `65.5%` are supported,
- `22.9%` are not supported,
- `11.6%` are insufficient information.

This matters because the probes are not trained on a tiny hand-labeled toy set. The authors use an expensive judge pipeline to create a large training corpus, then amortize it into cheaper feature-based reward functions.

The raw intervention labels are also revealing. When the base model is asked to respond to unsupported entities, it chooses to correct in about `47.7%` of cases, maintain in `39.5%`, and retract in `12.8%`.

But attempted corrections are usually bad. Only `14.7%` of correction attempts are labeled fixed, while `72.9%` are failed fixes. Retractions are more reliable: `69.4%` of retraction attempts are correct retractions.

This explains why the paper treats correction and retraction as separate behaviors. They are not two phrasings of the same action. They have different difficulty profiles.

## Main Results

### Result 1: RLFR Reduces Hallucinations

The headline result is a `58.0%` overall hallucination reduction for RLFR with best-of-32 sampling.

The decomposition is more informative than the headline:

| System | Policy reduction | In-context reduction | Direct reduction | Overall reduction |
| --- | ---: | ---: | ---: | ---: |
| Base | `0.0%` | `0.0%` | `0.0%` | `0.0%` |
| Base + Monitor | `0.0%` | `25.9%` | `5.0%` | `30.9%` |
| RLFR-NI | `10.0%` | `0.0%` | `21.3%` | `31.4%` |
| RLFR | `10.02%` | `34.7%` | `11.8%` | `56.6%` |
| RLFR-bo32 | `10.0%` | `35.4%` | `12.5%` | `58.0%` |

Three things are happening.

First, RL training changes the base policy a bit: it hallucinates less even before inline interventions.

Second, inline interventions have a large in-context effect. When the model inserts a correction or retraction, the following generation becomes more cautious.

Third, some interventions directly resolve the specific hallucination.

That means RLFR is partly a policy-training method and partly a runtime self-correction system.

### Result 2: The Monitoring Pipeline Works In The Streaming Setting

Validation AUC is useful, but deployment is harder. At test time, the monitoring pipeline has to run on streaming generations from the trained policy, and the classification probe receives segments produced by the localization probe rather than perfect judge-provided spans.

In that setting, the monitoring pipeline achieves:

- `.85` precision and `.56` recall for inline interventions,
- `.88` precision and `.61` recall for not-inline interventions.

That is not perfect recall. The system misses hallucinations. But the precision is high enough that the interventions are often targeted at real problems.

### Result 3: Feature Rewards Are Much Cheaper Than Search-Backed LLM Rewards

The paper estimates that using Gemini 2.5 Pro with web search as the reward model for the first 300 RL steps would cost around `$344,064`.

Their feature-reward computation costs around `$3,818` over the same portion of training.

This is the practical scaling argument. The expensive judge is used to create labels and validate the setup. The cheap probe then makes RL training feasible.

### Result 4: Standard Benchmarks Are Mostly Preserved

The trained policy is evaluated on a standard benchmark suite. Scores are broadly similar to the base model.

For example:

- HellaSwag: `83.8` base measured vs `83.6` RLFR,
- PIQA: `78.1` vs `78.5`,
- MMLU: `69.2` vs `67.2`,
- GSM8K: `72.3` vs `73.0`,
- GPQA: `26.3` vs `27.3`.

This does not prove there are no off-target effects, but it is a useful sanity check. The model is not obviously sacrificing broad benchmark competence to reduce hallucinations.

### Result 5: The Model Is Not Merely Saying Less

A cheap way to reduce hallucinations would be to make fewer factual claims.

The authors check this. In not-inline generation, the trained policy produces about `63.4` entities per sequence, while the base model produces about `63.6`. That is almost unchanged.

Inline runs produce fewer entities, around `59.1`, which makes sense because inline corrections can make the rest of the answer more cautious. But the pure policy does not seem to be solving hallucination by becoming empty or evasive.

They also run a preference test where Gemini compares paired base and RLFR completions. Gemini prefers the RLFR answer `50.9%` of the time, suggesting there is no obvious preference collapse.

## Why The Best-Of-N Result Matters

The most conceptually important experiment is the test-time scaling comparison.

At inference time, RLFR can sample many candidate interventions for a flagged hallucination. It then scores them with the correction or retraction reward probe and chooses the best one.

The authors compare this with a baseline where Gemma is asked in text to grade its own interventions from 1 to 10.

Both methods improve as N increases, but the feature-probe scorer improves much more. At N = 256, probe-based scoring beats the text-space judge baseline by nearly 15 percentage points.

This is the paper's cleanest evidence for the value of internal features. It suggests:

- the model's activations contain useful information about intervention quality,
- the model cannot fully access or report that information through ordinary text judgment,
- and probes can expose that information as a more useful selection signal.

That is the interpretability payoff. The probe is not merely compressing an external judge. It is extracting a signal from the model's internal computation that is stronger than the model's own verbal self-evaluation.

## What To Be Careful About

### Monitor Evasion

Any time a model is trained against a monitor, there is a concern that it will learn to fool the monitor rather than learn the intended behavior.

The authors address this by running probes on frozen parameters and adding constraints for natural, legible interventions. Their empirical results suggest that, in this setup, it is easier for the model to learn better correction behavior than to evade the probe.

But this remains a serious open question. With stronger optimization, other behaviors, or different probes, monitor evasion could become the dominant failure mode.

### Shared Evaluation Stack

The evaluation pipeline reuses much of the same tooling as the data-collection pipeline. That gives internal consistency, but it can also hide systematic judge biases. The authors report manual auditing and red-teaming, but independent evaluation would strengthen the claim.

### Dependence On Feature Quality

Feature rewards only work when the relevant feature is actually represented and can be probed reliably. If the model lacks a calibrated representation of the target concept, a probe reward may be noisy or misleading.

This is especially important for future applications. Hallucination detection may be unusually probe-friendly because models often have internal uncertainty about factual claims. Concepts like sycophancy, manipulation, or long-horizon harmfulness may be harder.

### Intervention Distribution Shift

Inline interventions can push a completion into unusual territory, especially when there are repeated corrections. The paper notes rare degeneration in inline completions. That matters for product use: a self-correcting model needs to remain coherent after correction, not merely reduce a metric.

### Reward Scope

The reward probes measure correction or retraction quality for flagged entities. They do not automatically measure every other property we care about: style, helpfulness, coverage, calibration, or user experience. The authors add lightweight rubric checks, but broader deployment would need a fuller reward stack.

## Memory Checklist

- RLFR means Reinforcement Learning from Feature Rewards.
- The paper uses interpretability probes as cheap reward functions for open-ended tasks.
- The case study is hallucination reduction in Gemma-3-12B-IT.
- The four probes are localization, classification, correction, and retraction.
- Corrections and retractions are separate skills because corrections require a specific factual replacement.
- RLFR with best-of-32 reports a `58%` overall hallucination reduction.
- Most of the reduction comes from inline interventions changing the rest of the completion, not only from the policy becoming less hallucinatory.
- Feature-reward training is estimated to be about two orders of magnitude cheaper than using Gemini 2.5 Pro with web search as the online reward model.
- The best-of-N experiment suggests activations contain a better intervention-quality signal than the model can express through text-space self-judgment.
- The main risks are monitor evasion, judge/evaluation bias, dependence on feature quality, and inline intervention distribution shift.
