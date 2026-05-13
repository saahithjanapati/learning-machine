# Rubrics as Rewards: Reinforcement Learning Beyond Verifiable Domains

Source note: Anisha Gunjal, Anthony Wang, Elaine Lau, Vaskar Nath, Yunzhong He, Bing Liu, and Sean Hendryx, "Rubrics as Rewards: Reinforcement Learning Beyond Verifiable Domains." Scale AI / arXiv:2507.17746v2. Scale Labs date: July 23, 2025; arXiv v2 dated October 3, 2025. Source page: [labs.scale.com/papers/rubrics_as_rewards](https://labs.scale.com/papers/rubrics_as_rewards). Processed source: [materials/processed/ai/rubrics-as-rewards-reinforcement-learning-beyond-verifiable-domains.md](../../../materials/processed/ai/rubrics-as-rewards-reinforcement-learning-beyond-verifiable-domains.md).

Original sources: [Scale Labs paper page](https://labs.scale.com/papers/rubrics_as_rewards), [arXiv abstract](https://arxiv.org/abs/2507.17746), [arXiv PDF](https://arxiv.org/pdf/2507.17746).

Filing note: This is filed normally under `AI / Collection` and cross-listed under [Scale AI Research Internship Prep](../scale-ai-research-internship-prep/README.md) as `post-training`, `post-training x interpretability`, and `scale-context`.

## Table of Contents

- [Medium-Length Version](#medium-length-version)
- [Full-Length Version](#full-length-version)
- [The Central Question](#the-central-question)
- [Why RLVR Needs Help Beyond Exact Verifiers](#why-rlvr-needs-help-beyond-exact-verifiers)
- [What A Rubric Is Doing Here](#what-a-rubric-is-doing-here)
- [The RaR Reward Formulation](#the-rar-reward-formulation)
- [How The Rubrics Are Generated](#how-the-rubrics-are-generated)
- [Training And Evaluation Setup](#training-and-evaluation-setup)
- [Main Results](#main-results)
- [Why Instance-Specific Rubrics Matter](#why-instance-specific-rubrics-matter)
- [Why Judge Scale Matters](#why-judge-scale-matters)
- [What The Ablations Teach](#what-the-ablations-teach)
- [How This Connects To Other Rubric Work](#how-this-connects-to-other-rubric-work)
- [Limitations And Critique](#limitations-and-critique)
- [Memory Checklist](#memory-checklist)

## Medium-Length Version

### Medium Thesis

This paper asks how reinforcement learning post-training can work when there is no clean verifier.

RL with verifiable rewards has a simple appeal. If a model solves a math problem, you can often check the final answer. If it writes code, you can run tests. If it plays a game, the environment can score the outcome. That makes the reward signal comparatively cheap, repeatable, and hard to argue about.

But many useful AI tasks are not like that. A medical answer can be partly correct but missing a safety caveat. A science explanation can identify the right answer but give the wrong reason. A professional answer can be clear, complete, and safe in some dimensions while failing in others. These tasks require multi-criteria judgment rather than a single exact match.

`Rubrics as Rewards` proposes a way to turn those multi-criteria judgments into training rewards. The core idea is straightforward:

**Instead of asking an LLM judge for one vague quality score, give the judge a prompt-specific rubric and use the rubric score as the reward for on-policy RL.**

That rubric is a checklist of criteria for the answer. Some criteria are essential. Some are important. Some are optional. Some are pitfalls to avoid. The checklist is not merely used after training to evaluate the model. It is used during training as the reward interface.

### Why This Is A Middle Ground

The paper positions rubrics between two common reward styles.

On one side is exact verification. This is clean but narrow. It works well when the task has a single checkable outcome.

On the other side is preference or Likert-style reward modeling. This is broad, but it compresses too much into one score. If a judge says an answer is a `7/10`, the training loop does not know whether the answer missed a key fact, used unsafe advice, failed to reason, or was simply too vague.

Rubrics add structure. They decompose answer quality into smaller claims about what a good response should do.

For example, a medical rubric might say:

- identify the correct diagnosis,
- connect the diagnosis to a key sign,
- mention the correct quantitative finding,
- avoid a common misdiagnosis,
- explain why immediate treatment is needed.

That is still softer than a unit test, but much more legible than a single scalar preference score.

### The Method In One Pass

For each prompt, the system generates an instance-specific rubric using a strong LLM and a reference answer. The generated criteria are intended to be expert-grounded, comprehensive, self-contained, and weighted by importance.

Then the authors train Qwen2.5-7B with GRPO. For each prompt, the policy samples 16 responses. An LLM judge, usually `gpt-4o-mini` in the experiments, evaluates each response using the rubric. Those scores become rewards for the policy update.

The paper compares two main rubric aggregation strategies.

`RaR-Explicit` asks the judge to evaluate each criterion separately, then combines the criteria with manual weights. This is more interpretable because you can inspect which criteria passed or failed.

`RaR-Implicit` gives the whole rubric to the judge and asks for one holistic 1-to-10 score. This is less transparent, but it avoids hand-tuning weights and performs best in the main experiments.

### What The Paper Finds

The main experiments use two domains:

- medicine, evaluated on HealthBench,
- science, evaluated on GPQA-Diamond.

The strongest rubric method, `RaR-Implicit`, beats direct Likert-based reward training in both domains. On HealthBench, it reaches `31.2%` overall score versus `25.5%` for Direct-Likert and `28.9%` for Reference-Likert. On GPQA-Diamond, it reaches `37.6%` mean accuracy versus `34.8%` for Direct-Likert and `36.5%` for Reference-Likert.

The abstract summarizes the gains as relative improvements of up to `31%` on HealthBench and `7%` on GPQA-Diamond over direct Likert rewards.

The negative result is just as useful: a fixed generic rubric performs poorly. `RaR-Predefined`, which uses the same generic criteria for every prompt, underperforms badly on HealthBench. So the benefit is not "checklists are magic." The benefit comes from criteria that are specific to the prompt.

### Why This Matters

The paper's best conceptual point is that RLVR can be seen as a special case of rubric rewards. A normal verifier is like a one-item rubric:

```text
Criterion: the final answer is correct.
Weight: 1.
Score: pass or fail.
```

Rubrics generalize that idea. They let a task have many criteria, mixed subjective and objective components, and prompt-specific requirements.

That makes RaR a useful post-training frame for domains where exact verifiers are too narrow but preference scores are too opaque.

### Medium Takeaway

Rubrics as Rewards is best understood as `structured reward specification for non-verifiable domains`.

The paper does not prove that rubrics solve reward modeling in general. It shows something more concrete: when rubrics are prompt-specific and grounded in expert/reference answers, they can provide better on-policy RL rewards than plain Likert-style LLM judging for medical and scientific reasoning tasks.

## Full-Length Version

## The Central Question

The central question is:

**Can we train models with reinforcement learning on tasks where quality is real but not exactly verifiable?**

This is one of the major bottlenecks in current post-training. A lot of recent excitement around RL comes from domains where rewards are clean. Math, code, formal games, and some tool tasks have relatively objective success conditions. The training loop can produce many attempts, score them cheaply, and push the model toward higher-scoring behavior.

But the most valuable language tasks often have no single exact answer. A useful answer to a clinical question may need to balance diagnostic accuracy, safe treatment advice, uncertainty, context, empathy, and whether the patient should seek in-person care. A scientific explanation may need the right conclusion, the right mechanism, the right assumptions, and the right caveats.

In those settings, a scalar reward is still needed for RL, but the thing being rewarded is not binary correctness. It is a structured judgment.

The paper's answer is to make that structure explicit. Instead of asking a judge to produce an unstructured preference score, it gives the judge a checklist of criteria and turns the checklist into a reward.

## Why RLVR Needs Help Beyond Exact Verifiers

RLVR means reinforcement learning with verifiable rewards. In the cleanest version, the model gets a prompt, produces an answer, and a verifier checks whether the answer is correct.

That works when verification is easy:

- a code problem can run unit tests,
- a math answer can be checked against a known solution,
- a multiple-choice answer can be compared to a label,
- a game outcome can be scored by the environment.

The appeal is not just that the score is objective. The score is also scalable. You can generate many model rollouts and grade them automatically.

The difficulty is that many domains are not naturally verifiable. Suppose a model is asked:

```text
A patient presents with symptoms X, lab result Y, and context Z.
What is the most likely diagnosis and initial management?
```

There may be a best answer, but grading it is not a one-bit operation. A response could name the right diagnosis but omit the safety warning. It could explain the right mechanism but recommend an unsafe treatment. It could include all the facts but fail to communicate uncertainty. Each of those failures matters differently.

This is where preference rewards are tempting. Ask a human or LLM judge which answer is better, or ask for a 1-to-10 rating. But preference scores can overfit artifacts like length, formatting, or judge style. They also hide the reason for the score. If one answer gets `8` and another gets `6`, the policy update only sees the scalar difference.

Rubrics are an attempt to keep the scalability of automated rewards while exposing more of the structure behind the judgment.

## What A Rubric Is Doing Here

In ordinary classroom language, a rubric is a grading checklist. It says what an answer must do to receive credit.

In this paper, a rubric is a prompt-specific reward specification. Each criterion describes a property the generated answer should satisfy.

The important word is `prompt-specific`. A generic checklist like "be accurate, concise, helpful, and safe" is not enough. The paper shows that generic rubrics perform poorly. The useful rubrics include concrete criteria tied to the particular prompt.

For a medical problem, a rubric might include:

- the answer identifies the correct diagnosis,
- the answer connects the diagnosis to a key lab finding,
- the answer recommends the correct first step,
- the answer warns against a dangerous alternative,
- the answer does not overstate certainty.

For a science problem, a rubric might include:

- the answer identifies the correct physical principle,
- the answer applies the principle to the given setup,
- the answer distinguishes relevant from irrelevant assumptions,
- the answer avoids a common misconception,
- the answer states the final option clearly.

This turns answer quality into smaller pieces. The training signal is still scalar at the end, but that scalar is built from interpretable criteria rather than an opaque preference impression.

## The RaR Reward Formulation

The paper formalizes each prompt `x` as having a set of rubric items:

```text
{(w_j, c_j)} for j = 1 ... k
```

Here:

- `w_j` is the weight or importance of criterion `j`,
- `c_j(x, y_hat)` is a scoring function that says whether the generated response satisfies criterion `j`.

The explicit reward is a normalized weighted average:

```text
reward = sum_j w_j * c_j(x, y_hat) / sum_j w_j
```

The normalization matters because different prompts can have different numbers of criteria. Without normalization, prompts with longer rubrics could produce larger raw scores.

The paper also defines an implicit aggregation version. Instead of evaluating each criterion separately and combining the results manually, the judge receives the prompt, the response, and the whole rubric, then produces one overall score.

So the two key variants are:

- `RaR-Explicit`: judge each criterion independently, then aggregate with weights.
- `RaR-Implicit`: give the full rubric to the judge and let the judge produce a holistic score.

Explicit aggregation is cleaner to audit. You can inspect which criteria passed or failed. But it requires weight choices, and those weights may be brittle.

Implicit aggregation is less transparent but more flexible. The judge can treat the rubric as context for a holistic quality judgment. In the experiments, this performs best.

## How The Rubrics Are Generated

The paper gives four desiderata for useful rubrics.

First, rubrics should be grounded in expert guidance. In high-stakes domains, the checklist should reflect real domain knowledge, not generic vibes. Since expert-written rubrics are expensive, the paper often uses reference answers as a proxy for expert signal.

Second, rubrics should have comprehensive coverage. They should cover factual accuracy, reasoning, completeness, style, safety, and common failure modes when relevant.

Third, rubrics should represent criterion importance. Some mistakes should matter more than others. Missing the diagnosis is not the same as writing a slightly less elegant explanation.

Fourth, criteria should be self-contained. A judge should be able to apply each item without guessing what the criterion means or looking up missing context.

In practice, each prompt receives about 7 to 20 rubric items. Each item has a title, a description, and a weight or category. The categories include:

- `Essential`,
- `Important`,
- `Optional`,
- `Pitfall`.

The paper uses GPT-4o and o3-mini to synthesize rubrics from reference answers. The released datasets are:

- `RaR-Medicine`, about 20k medical reasoning prompts,
- `RaR-Science`, about 20k science prompts aligned with GPQA-Diamond categories.

The appendix examples are helpful because they show that the rubrics are not abstract slogans. A medical example about sodium bicarbonate dosing includes criteria for applying the correct formula, recommending partial correction, showing the calculation, using the patient data accurately, and avoiding overcorrection risk.

That is exactly the kind of structure a direct Likert score tends to hide.

## Training And Evaluation Setup

The training setup is deliberately close to current LLM post-training practice.

The base policy is Qwen2.5-7B. The RL algorithm is GRPO. For each prompt, the current policy samples 16 responses at temperature 1.0, using a context length of 3584. The judge computes rewards, and the policy is updated from those rewards.

The main judge model is `gpt-4o-mini`. That is important because the paper is not only testing whether a frontier judge can make rubrics work. It is testing whether a relatively small accessible judge can apply structured criteria well enough to train a smaller policy.

The main rubric-free baselines are:

- `Direct-Likert`: judge the response directly on a 1-to-10 quality scale.
- `Reference-Likert`: judge the response against a reference answer on a 1-to-10 scale.
- off-the-shelf Qwen2.5-7B and Qwen2.5-7B-Instruct.

The rubric-guided methods are:

- `RaR-Predefined`: use a fixed generic rubric for all prompts.
- `RaR-Explicit`: use prompt-specific criteria and manually assigned numeric weights.
- `RaR-Implicit`: use prompt-specific criteria and ask the judge for a holistic rubric-guided score.

The evaluation domains are:

- `HealthBench`, a free-form medical benchmark scored with physician-authored rubrics,
- `GPQA-Diamond`, a hard science multiple-choice benchmark evaluated over 10 runs.

The authors also evaluate judge alignment with human preferences by constructing preferred and perturbed HealthBench responses, then measuring whether judges score the preferred answer higher.

## Main Results

The paper's headline result is that prompt-specific rubric rewards beat direct Likert-style rewards.

On HealthBench, the reported overall scores are:

| Training method | HealthBench score |
| --- | ---: |
| Qwen2.5-7B | `7.7%` |
| Qwen2.5-7B-Instruct | `22.7%` |
| Direct-Likert | `25.5%` |
| Reference-Likert | `28.9%` |
| RaR-Predefined | `12.5%` |
| RaR-Explicit | `29.7%` |
| RaR-Implicit | `31.2%` |

On GPQA-Diamond, the reported mean accuracies are:

| Training method | GPQA-Diamond accuracy |
| --- | ---: |
| Qwen2.5-7B | `31.7%` |
| Qwen2.5-7B-Instruct | `35.0%` |
| Direct-Likert | `34.8%` |
| Reference-Likert | `36.5%` |
| RaR-Predefined | `31.7%` |
| RaR-Explicit | `36.9%` |
| RaR-Implicit | `37.6%` |

Several things stand out.

First, direct Likert reward training helps but is not the best signal. It improves over the base model, but rubric-guided reward training improves more.

Second, Reference-Likert is strong. That makes sense: comparing to a reference answer gives the judge more information than judging the response in isolation.

Third, RaR-Implicit beats Reference-Likert in the main comparisons. That is the paper's most useful empirical point. A reference answer helps, but converting the reference into structured criteria can produce a better training signal than asking for a direct reference comparison.

Fourth, GPQA gains matter because GPQA-Diamond is multiple-choice. The model is trained with rubric-shaped rewards, but it improves on a different evaluation format. That suggests the rubrics are not merely teaching the model to satisfy rubric text; they may be strengthening underlying reasoning behavior.

## Why Instance-Specific Rubrics Matter

The most important negative result is `RaR-Predefined`.

This baseline uses a fixed set of generic criteria for every prompt, such as whether the response is correct, complete, concise, and helpful. That sounds reasonable, but it performs poorly, especially on HealthBench.

The reason is straightforward: generic criteria miss the real failure modes. A medical prompt does not only need "be helpful." It needs a specific diagnosis, a specific calculation, a specific contraindication, or a specific safety caveat.

This is a key lesson for using rubrics in training:

**Rubrics are useful because they encode local task structure, not because checklists are intrinsically powerful.**

If the rubric is generic, it becomes another vague reward prompt. If the rubric is prompt-specific, it can tell the judge what matters in this particular case.

This also explains why reference answers are useful for generating rubrics. A good reference answer contains the hidden structure of the task. The rubric extraction step turns that structure into reusable grading criteria.

## Why Judge Scale Matters

The paper also studies whether rubrics help LLM judges align better with human preferences.

The setup is simple. For HealthBench prompts, the authors create pairs:

- a practitioner-approved answer,
- a perturbed answer that is intentionally worse but still plausible.

Then they ask judge models to score the pair. The metric is pairwise preference accuracy: how often does the judge score the approved answer higher?

Rubric guidance improves performance across judge sizes. The benefit is largest for smaller judges.

This is conceptually important. A small judge may not be good at inferring all the relevant criteria from the prompt and answer alone. But if a rubric decomposes the task, the judge's job becomes easier. It no longer has to invent the evaluation dimensions. It only has to apply them.

That suggests one reason rubrics are valuable for scalable supervision:

**Rubrics can move difficulty from implicit judgment into explicit specification.**

This does not make the judge perfect, but it can reduce the amount of hidden reasoning the judge must perform.

## What The Ablations Teach

The ablations reinforce three practical lessons.

First, expert or reference grounding matters. Rubrics generated with reference-answer guidance outperform rubrics generated without that grounding. Purely synthetic rubrics can help, but they may miss subtle or high-stakes criteria.

Second, the rubric generator matters. In the paper's HealthBench-1k ablation, GPT-4o-generated reference-free rubrics perform best among the reference-free generators, but still trail o3-mini rubrics generated with reference-answer access. The lesson is not simply "use the largest model." It is that alignment, reasoning ability, and access to grounding information all affect rubric quality.

Third, richer rubrics generally beat essential-only rubrics. The paper's design ablation finds that limiting the rubric to essential criteria performs worse than broader criterion sets. That makes sense: open-ended quality is not only about the single most critical fact. It is also about reasoning, context, safety, and common omissions.

Interestingly, removing categorical labels or pitfall criteria does not strongly hurt in the reported ablation. The authors suggest one reason: synthetic pitfall generation is hard. Anticipating common model-specific mistakes often requires human intuition and domain expertise.

That is a useful caution. Negative criteria are potentially valuable, but only if they are specific enough to catch real failures.

## How This Connects To Other Rubric Work

This lesson sits naturally next to the local lesson on [Online Rubrics Elicitation](2026-05-05-online-rubrics-elicitation.md).

`Rubrics as Rewards` asks: can static prompt-specific rubrics become reward signals for on-policy RL?

`Online Rubrics Elicitation` asks: what happens when static rubrics get stale during training, and can we elicit new criteria online by comparing model outputs?

Together, the two papers make a broader point:

**Open-ended RL needs reward specifications that are both structured and maintainable.**

RaR gives the basic rubric-as-reward interface. OnlineRubrics addresses the next problem: as the policy changes, the rubric may need to change too.

This paper also connects to `Features as Rewards`. Both papers are about replacing a vague scalar preference signal with a more structured supervision source. Features as Rewards uses internal activation probes as reward signals. Rubrics as Rewards uses explicit natural-language criteria as reward signals.

The common theme is scalable supervision for behaviors that are not easy to verify with a final-answer checker.

## Limitations And Critique

The first limitation is judge dependence. A rubric is only useful if the judge can apply it correctly. If the judge misunderstands a criterion, misses a subtle error, or rewards surface compliance, the RL signal can still be wrong.

The second limitation is rubric-generation quality. The paper shows that reference grounding matters, but in many real settings there may be no high-quality reference answer. If the reference is flawed, the rubric can encode the flaw. If the rubric generator is weak, the checklist may omit the most important criteria.

The third limitation is domain scope. Medicine and science are good testbeds because they combine expert reasoning with somewhat checkable answers. But dialogue, legal reasoning, creative work, tool use, and long-horizon agents may have different failure modes. Rubrics might still help, but the generation and auditing process would need to change.

The fourth limitation is reward hacking. Rubrics make the reward more legible, but they also expose the optimization target. A policy might learn to satisfy the wording of criteria while missing the deeper intent. This is especially likely if rubrics are static and reused heavily.

The fifth limitation is the interpretability-performance tradeoff between explicit and implicit aggregation. `RaR-Explicit` is easier to audit because each criterion receives a score. `RaR-Implicit` performs best, but because the judge produces one holistic score, some of the aggregation logic becomes hidden inside the judge again.

The strongest version of this research direction would probably combine several ideas:

- prompt-specific rubrics for local task structure,
- online rubric revision to catch emerging failure modes,
- explicit audit trails for which criteria drove reward,
- human review for high-stakes criteria,
- tests for whether the trained policy is satisfying intent rather than rubric wording.

## Memory Checklist

- RLVR works best when rewards are cheaply verifiable, such as math and code.
- Many real tasks need multi-criteria judgment rather than binary correctness.
- RaR turns prompt-specific rubrics into reward signals for GRPO training.
- A rubric item has an importance weight and a criterion that the response should satisfy.
- `RaR-Explicit` scores criteria separately and aggregates them with weights.
- `RaR-Implicit` gives the whole rubric to the judge and asks for one holistic score.
- Prompt-specific rubrics beat generic predefined rubrics.
- The main experiments use Qwen2.5-7B, GRPO, HealthBench, and GPQA-Diamond.
- `RaR-Implicit` beats Direct-Likert and Reference-Likert in the main comparisons.
- Rubrics help smaller LLM judges align better with human preferences.
- Reference or expert grounding is important for good rubric generation.
- The main caveat is that rubrics are still judge-mediated and can still be gamed.
