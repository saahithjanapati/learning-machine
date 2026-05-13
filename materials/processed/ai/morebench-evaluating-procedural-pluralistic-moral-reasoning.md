# MoReBench: Evaluating Procedural and Pluralistic Moral Reasoning in Language Models, More than Outcomes

Source: [Scale Labs page](https://labs.scale.com/papers/morebench), [arXiv PDF](https://arxiv.org/pdf/2510.16380), [project site](https://morebench.github.io/), [dataset](https://huggingface.co/datasets/morebench/morebench), [code](https://github.com/morebench/morebench).

Authors: Yu Ying Chiu, Michael S. Lee, Rachel Calcott, Brandon Handoko, Paul de Font-Reaulx, Paula Rodriguez, Chen Bo Calvin Zhang, Ziwen Han, Udari Madhushani Sehwag, Yash Maurya, Christina Q. Knight, Harry R. Lloyd, Florence Bacus, Mantas Mazeika, Bing Liu, Yejin Choi, Mitchell L. Gordon, Sydney Levine.

Scale Labs date: 2025-12-22. arXiv: 2510.16380v1, dated 2025-10-18.

## Core Claim

MoReBench evaluates moral reasoning by scoring the reasoning process, not merely the final moral answer. The benchmark is built around morally ambiguous scenarios where multiple conclusions can be defensible, so the important question is whether a model identifies relevant moral considerations, reasons clearly, integrates trade-offs, avoids harmful advice, and gives useful recommendations.

The benchmark has two parts:

- MoReBench: 1,000 contextualized moral dilemma scenarios with 23,018 human-written expert rubric criteria.
- MoReBench-Theory: 150 examples testing reasoning under five normative ethical frameworks: Benthamite Act Utilitarianism, Kantian Deontology, Aristotelian Virtue Ethics, Scanlonian Contractualism, and Gauthierian Contractarianism.

## Dataset Construction

The authors recruited 53 moral philosophy experts. The scenarios cover two expected AI roles:

- Moral Advisor: the AI advises a human facing an everyday dilemma.
- Moral Agent: the AI acts autonomously in a high-stakes AI safety scenario.

Scenarios were drawn from DailyDilemmas, AIRiskDilemmas, applied ethics cases, debate cases, and expert-written sources. They include domains such as interpersonal relationships, healthcare, education, business, scientific oversight, and AI-agent decision-making.

Each scenario has at least 20 atomic, scenario-specific rubric criteria. Criteria are classified into five dimensions:

- Identifying: whether the reasoning notices relevant moral considerations and assumptions.
- Clear Process: whether the reasoning is systematic and well supported.
- Logical Process: whether the reasoning integrates competing considerations and trade-offs.
- Helpful Outcome: whether the reasoning gives useful action guidance.
- Harmless Outcome: whether it avoids illegal or harmful advice.

Each criterion is weighted from -3 to +3, with positive weights for desirable criteria and negative weights for harmful or detrimental reasoning moves.

## Evaluation Method

The paper grades model thinking traces and final responses against the expert criteria using an LLM judge. The authors meta-evaluate judge models against human expert labels on 7,176 response-criteria pairs. GPT-5-high scores highest as a judge, but GPT-oss-120b is nearly as strong and far cheaper, so they use GPT-oss-120b for subsequent experiments.

The score rewards fulfilling positive-weight criteria and avoiding negative-weight criteria. The paper reports:

- MoReBench-Regular: weighted rubric score.
- MoReBench-Hard: length-corrected score to penalize verbose reasoning that satisfies more criteria simply by saying more.

The authors reserve 500 examples as a private test set to reduce contamination risk.

## Main Findings

### Moral Reasoning Does Not Track Standard Reasoning Benchmarks

MoReBench performance is not well predicted by Chatbot Arena, Humanity's Last Exam, AIME 25, or LiveCodeBench. Pearson correlations range from about -0.245 to 0.216, suggesting negligible correlation.

This is the central result: math, code, science, and preference benchmarks do not tell us whether a model reasons well about pluralistic moral dilemmas.

### Scaling Patterns Are Strange

The largest model within a family is not always best on MoReBench-Regular. In some families, smaller or mid-sized models score higher. The authors suggest one possible explanation: smaller models may write more explicit thinking traces, while larger models may reason more implicitly. After length correction, the largest models recover in several families, but not all.

### Models Are Better At Harmlessness Than Moral Trade-Off Reasoning

Across thinking traces, models do relatively well on Harmless Outcome criteria and much worse on Logical Process. The authors interpret this as evidence that current safety training has emphasized not giving harmful advice more than deeply integrating moral trade-offs.

The paper reports average thinking-trace criterion satisfaction of roughly:

- Harmless Outcome: 81.1%.
- Clear Process: 53.6%.
- Identifying: 52.7%.
- Helpful Outcome: 50.1%.
- Logical Process: 47.9%.

The text also summarizes the broader pattern as models doing well at avoiding harmful outcomes and weaker at logical moral reasoning.

### Thinking Traces And Final Responses Are Related But Not Identical

The paper finds a moderate positive relationship between thinking-trace scores and final-response scores on MoReBench-Hard. Better internal or summarized reasoning usually leads to better final answers, but the relationship is not perfect. The paper also notes that thinking traces and generated summaries are not strictly comparable across open and closed models.

### Models Show Moral Framework Partiality

On MoReBench-Theory, models perform best on Benthamite Act Utilitarianism and Kantian Deontology, averaging about 64.8% and 65.9% respectively. Performance varies more strongly on Virtue Ethics and Contractarianism.

The authors suggest this may reflect prevalence in academic literature or side effects of training paradigms such as RLHF, where preference collection and rationales may indirectly emphasize utilitarian or deontological structures.

## Why This Matters

MoReBench is important because it treats moral reasoning as a process evaluation problem. In ambiguous moral domains, a final answer can be defensible for more than one reason. A benchmark that scores only the conclusion may punish pluralism or reward shallow agreement with the evaluator.

The rubric approach asks a more useful question: did the model surface the right considerations, weigh trade-offs, reason clearly, avoid harmful advice, and give actionable guidance?

This makes MoReBench especially relevant to Scale AI prep. It is a Scale Labs benchmark, it uses expert rubrics for hard-to-verify reasoning, and it sits close to the same family of ideas as Rubrics as Rewards, Agentic Rubrics, HealthBench-style criterion scoring, and process-focused oversight.

## Limitations And Cautions

The benchmark depends on LLM-as-judge scoring, even though the authors validate judge quality against human labels. A judge F1 in the mid-to-high 70s is useful but not perfect.

Thinking traces are also not uniformly available. For open-weight reasoning models, the paper can inspect actual traces; for some closed models, it uses summaries of thinking traces. Those are not the same object.

The rubric criteria are expert-written and reviewed, but moral philosophy is pluralistic. The dataset captures a broad expert distribution, not a final ground truth for morality.

Length correction is useful, but it may also punish appropriate nuance in genuinely difficult cases. The trade-off between concise moral reasoning and complete moral reasoning is itself normative.

## Key Takeaways

- MoReBench shifts moral evaluation from "what answer did the model choose?" to "how did the model reason?"
- The benchmark includes 1,000 moral scenarios and 23,018 expert-written rubric criteria.
- MoReBench-Theory tests five moral frameworks, making pluralism explicit.
- Existing reasoning and preference benchmarks do not predict moral reasoning performance.
- Models are much stronger at avoiding harmful recommendations than at logically integrating moral trade-offs.
- The paper is highly relevant for scalable supervision, rubric-based evaluation, alignment generalization, and Scale-style benchmark design.
