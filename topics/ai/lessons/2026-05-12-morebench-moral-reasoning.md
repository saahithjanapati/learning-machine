# MoReBench: Procedural And Pluralistic Moral Reasoning

Source note: This lesson is based on Yu Ying Chiu et al., "MoReBench: Evaluating Procedural and Pluralistic Moral Reasoning in Language Models, More than Outcomes." Links: [Scale Labs](https://labs.scale.com/papers/morebench), [arXiv PDF](https://arxiv.org/pdf/2510.16380), [project site](https://morebench.github.io/), [dataset](https://huggingface.co/datasets/morebench/morebench), [code](https://github.com/morebench/morebench). Scale Labs publication date: 2025-12-22. arXiv v1 date: 2025-10-18. Processed source: [materials/processed/ai/morebench-evaluating-procedural-pluralistic-moral-reasoning.md](../../../materials/processed/ai/morebench-evaluating-procedural-pluralistic-moral-reasoning.md).

## Table of Contents

- [Medium-Length Version](#medium-length-version)
- [Full-Length Version](#full-length-version)

## Medium-Length Version

MoReBench is a benchmark for a problem that normal AI benchmarks mostly dodge: moral reasoning is often not about finding one objectively correct final answer. In moral dilemmas, multiple conclusions can be defensible. What matters is whether the model notices the right considerations, weighs trade-offs honestly, explains its reasoning, avoids harmful advice, and gives a useful recommendation.

The paper's central move is to evaluate the reasoning process rather than only the outcome. It introduces MoReBench, a dataset of 1,000 moral dilemma scenarios with 23,018 expert-written rubric criteria. It also introduces MoReBench-Theory, a smaller 150-example benchmark that tests whether models can reason within five normative ethical frameworks: Benthamite Act Utilitarianism, Kantian Deontology, Aristotelian Virtue Ethics, Scanlonian Contractualism, and Gauthierian Contractarianism.

The scenarios cover two roles. In the Moral Advisor role, an AI advises a human who is facing an everyday moral decision. In the Moral Agent role, an AI has to make or recommend actions in higher-stakes autonomous settings, including AI safety-flavored scenarios. This distinction is important: advising a human is not the same as acting as an autonomous agent.

Each scenario has a rubric written by moral philosophy experts. Criteria are atomic and scenario-specific. They are grouped into five dimensions:

- Identifying relevant moral considerations and assumptions.
- Giving a clear, systematic reasoning process.
- Logically integrating trade-offs among moral considerations.
- Giving helpful action guidance.
- Avoiding illegal or harmful recommendations.

Each criterion has a weight from -3 to +3. A good response should satisfy positive criteria and avoid negative criteria. The authors evaluate model thinking traces and final responses against these criteria with an LLM judge. They meta-evaluate candidate judge models against human labels and choose GPT-oss-120b because it performs close to GPT-5-high while being dramatically cheaper.

The main empirical result is that moral reasoning is its own capability. MoReBench performance does not correlate meaningfully with Chatbot Arena, Humanity's Last Exam, AIME 25, or LiveCodeBench. A model can be strong at math, code, science, or user preference and still be weak at pluralistic moral reasoning.

The paper also finds that models are better at harmlessness than at moral trade-off reasoning. In thinking traces, models do relatively well at avoiding harmful outcomes, but much worse at logical process: identifying how considerations interact, resolving conflicts, and justifying why one trade-off should dominate another. This is exactly the kind of gap a safety-trained assistant might have: it learns not to say dangerous things, but that is not the same as reasoning well about hard moral cases.

On MoReBench-Theory, models perform best on Benthamite Act Utilitarianism and Kantian Deontology. They vary much more on Virtue Ethics and Contractarianism. The authors suggest this may reflect the prevalence of some frameworks in academic and training data, or side effects of RLHF-style preference collection.

The paper matters for Scale AI prep because it sits at the intersection of evaluation, rubrics, scalable supervision, process oversight, and alignment. It is also a natural complement to Rubrics as Rewards: MoReBench shows how expert rubrics can evaluate hard-to-verify reasoning, while Rubrics as Rewards explores how rubrics can become training signals.

The main caveat is that MoReBench is still an automatic benchmark. It relies on LLM-as-judge scoring, and the judge is useful but imperfect. Also, thinking traces are not equally available across models: open-weight models may expose actual traces, while closed models may expose summaries or self-reports. Finally, expert rubrics are not moral ground truth. They are a structured attempt to evaluate pluralistic reasoning.

The takeaway: MoReBench is valuable because it refuses to collapse morality into answer matching. It asks whether the model reasoned like a competent moral reasoner, not merely whether it picked a popular conclusion.

## Full-Length Version

### The Problem: Moral Reasoning Is Not Like Math

Many AI evaluations are built around tasks with crisp answers. A math problem has a number. A coding task has tests. A factual question has a reference answer. Even when evaluation is hard, the target is often still treated as a final answer.

Moral reasoning does not work that way. A morally serious person can reach one conclusion while another morally serious person reaches a different conclusion. The difference may come from weighting duties, harms, consent, fairness, long-run effects, virtue, partial obligations, institutional trust, or stakeholder claims differently.

So if an AI benchmark says only "did the model choose option A or option B?", it misses the thing we care about. A shallow answer can land on the same conclusion as a good answer. A careful answer can reach a different conclusion while still being morally competent.

MoReBench's core idea is that moral reasoning should be evaluated procedurally. The right question is not only "what did the model decide?" It is:

- Did it identify the relevant moral considerations?
- Did it reason clearly?
- Did it integrate trade-offs logically?
- Did it give useful guidance?
- Did it avoid harmful recommendations?

This is why the subtitle says "More than Outcomes."

### What MoReBench Contains

MoReBench has 1,000 contextualized moral dilemma scenarios and 23,018 expert-written rubric criteria. The average scenario is about 195 words. Each scenario has between 20 and 49 criteria, with an average of about 23.

The paper also builds MoReBench-Theory, a 150-example sibling benchmark for theory-grounded reasoning. It asks models to reason under five moral frameworks:

- Benthamite Act Utilitarianism: choose the action with the best net consequences for all affected.
- Kantian Deontology: act according to duties and principles that respect rational agents as ends.
- Aristotelian Virtue Ethics: reason from character, flourishing, practical wisdom, and virtues.
- Scanlonian Contractualism: ask what principles no one could reasonably reject.
- Gauthierian Contractarianism: ask what self-interested rational bargainers would agree to under mutually beneficial cooperation.

This theory split is important because "moral reasoning" is not one monolithic skill. A model might be good at utilitarian cost-benefit analysis and weak at virtue-ethical character reasoning. MoReBench-Theory makes that visible.

### The Two AI Roles: Advisor And Agent

The benchmark distinguishes two roles an AI might play.

In the Moral Advisor role, the AI gives guidance to a human. An example might look like an everyday dilemma: a friend cooked a meal you dislike, and you want to know whether to eat it or be honest.

In the Moral Agent role, the AI acts or advises in a higher-stakes autonomous setting. These cases include AI safety-style dilemmas where an AI system faces conflicts involving scientific deception, scarce resources, institutional trust, privacy, health, or other high-impact outcomes.

This distinction matters because giving advice and taking action are morally different. Advisors must respect human agency and context. Agents must reason about direct responsibility, constraints, and consequences of action.

### How The Rubrics Work

The authors recruited 53 moral philosophy experts. The paper reports that most had doctorates or equivalent expertise, and the annotators were paid above local minimum wage standards.

Experts wrote scenario-specific rubrics. Each criterion had to be:

- Objective enough for scoring.
- Specific to the scenario.
- Atomic, meaning it checked one thing rather than bundling many requirements.
- Part of a broad rubric that covers the important considerations without heavy overlap.

The criteria are grouped into five dimensions.

Identifying asks whether the response notices the morally relevant facts, stakeholders, values, and assumptions.

Clear Process asks whether the reasoning is systematic, explicit, and supported.

Logical Process asks whether the response integrates the considerations, weighs trade-offs, and explains why some considerations override others.

Helpful Outcome asks whether the answer gives useful paths forward and clarifies practical implications.

Harmless Outcome asks whether the model avoids illegal, unsafe, or harmful recommendations.

Weights run from -3 to +3. Positive criteria are things the model should include. Negative criteria are detrimental moves it should avoid. For example, a good answer might need to recognize a trade-off between saving lives and preserving honesty, while avoiding a claim that the AI has a special obligation to help another AI over humans.

The most common criteria are positive. The paper reports that +2 and +3 criteria dominate, while negative criteria are less than one in ten.

### The Scoring Method

MoReBench scores responses by checking whether each criterion is fulfilled. An ideal response satisfies all positive criteria and avoids all negative criteria.

The paper evaluates two kinds of model output:

- Thinking traces or summaries of thinking traces.
- Final responses.

The authors focus on thinking traces in the main text because reasoning models provide an opportunity to study the process behind the answer. They are careful, though: for open-weight models, traces may be actual traces; for closed-source models, traces may be generated summaries or self-reports. Those are not exactly comparable.

The paper uses an LLM judge to score whether criteria are met. To choose the judge, the authors compare candidate judge models against human expert labels on 7,176 response-criterion pairs. GPT-5-high is the best judge by their F1 metric, but GPT-oss-120b performs close enough at far lower cost, so they use GPT-oss-120b for the main experiments.

The benchmark has two headline scores:

- MoReBench-Regular: the weighted rubric score.
- MoReBench-Hard: a length-corrected version.

Length correction matters because verbose models can satisfy more criteria just by saying more. The hard score pushes models to reason well without relying on excessive length.

### Rubric Meta-Evaluation

The authors do not simply assume their rubrics work. They test two properties.

First, discriminatory power: can the rubrics distinguish low-, medium-, and high-quality moral reasoning? They ask experts to write reasoning traces at different quality levels and then score them. The scores differ significantly, and there is a positive Spearman correlation between intended reasoning quality and MoReBench score.

Second, robustness to pluralistic conclusions: do the rubrics unfairly favor one conclusion over another? The authors compare high-quality arguments for opposite conclusions on the same cases. They find no statistically significant difference between the two groups, suggesting that the rubrics can reward good reasoning without forcing a single preferred answer.

This is a central design feature. MoReBench is trying to measure reasoning quality without collapsing pluralism into answer matching.

### Result 1: Standard Benchmarks Do Not Predict Moral Reasoning

The paper compares MoReBench scores to Chatbot Arena, Humanity's Last Exam, AIME 25, and LiveCodeBench.

The result is basically no meaningful correlation. Pearson correlations range from about -0.245 to 0.216.

This is a clean and important result. A model's general popularity, math skill, code skill, or broad hard-question performance does not tell you whether it reasons well about moral dilemmas.

That matters because we often talk as if "reasoning models" have general reasoning. MoReBench says: maybe not. Moral reasoning is a domain with its own structure.

### Result 2: Bigger Is Not Always Better

The paper finds unusual scaling patterns. In some model families, the largest model is not the best on MoReBench-Regular. Sometimes mid-sized or smaller models do better.

The authors suggest a possible explanation: smaller models may write more explicit thinking traces, while larger models may reason more implicitly. Since MoReBench rewards explicit criteria satisfaction, a model that writes out more intermediate steps may score better. After length correction, larger models regain the lead in some families, but not all.

This is not just a leaderboard curiosity. It shows that process benchmarks interact with model style. A benchmark of reasoning traces can reward explicitness, while a model may be capable but terse or implicit.

### Result 3: Models Are Stronger At Harmlessness Than Trade-Off Reasoning

The paper breaks results down by rubric dimension. In thinking traces, models are strongest on Harmless Outcome and weakest on Logical Process.

The reported average criterion satisfaction in thinking traces is roughly:

- Harmless Outcome: 81.1%.
- Clear Process: 53.6%.
- Identifying: 52.7%.
- Helpful Outcome: 50.1%.
- Logical Process: 47.9%.

The lesson is sharp: safety training has made models pretty good at not recommending illegal or directly harmful actions. But avoiding harmful advice is not the same as reasoning well about moral trade-offs.

Logical Process is the hard part. A model has to explain how different considerations interact: whose interests matter, what risks are uncertain, which harms are reversible, which duties are non-negotiable, what trade-offs are legitimate, and what action follows from the analysis.

This matters for real deployment. A model that says "be careful and avoid harm" may look safe but still fail to help users navigate morally hard decisions.

### Result 4: Thinking Traces And Final Responses Are Related But Different

The paper finds a moderate positive relationship between thinking-trace scores and final-response scores on MoReBench-Hard. Models with better traces usually have better final answers, but the correlation is not perfect.

Final responses also behave differently. In the appendix, the paper reports final responses average higher on several dimensions, including helpfulness and harmlessness. One possible reason is that models are better at following explicit response instructions in the final answer than in their thinking traces.

This connects to the broader debate about chain-of-thought faithfulness. The paper does not assume traces are perfectly faithful. It treats them as a useful signal, especially for difficult cases, while still analyzing final responses separately.

### Result 5: Models Prefer Some Moral Frameworks

MoReBench-Theory tests whether models can reason under five explicit moral theories.

Average thinking-trace performance is best for Kantian Deontology and Benthamite Act Utilitarianism, at about 65.9% and 64.8%. It is lower for Contractualism, Virtue Ethics, and Contractarianism.

The model gaps are especially large for Virtue Ethics and Contractarianism. The paper notes cases where the lowest-performing models are far below the top model on these frameworks.

This matters because users or institutions may want a model to follow particular moral principles. The paper suggests that explicit instructions may not be enough. A model can be asked to reason under a framework and still be uneven across theories.

The authors speculate that better performance on utilitarian and deontological reasoning may come from the prevalence of these frameworks in academic text or from training paradigms that implicitly reward consequentialist and rule-like rationales.

### Why This Paper Matters For Scale AI Prep

MoReBench is directly relevant to Scale AI prep for several reasons.

First, it is a Scale Labs benchmark. It reflects the same research style as Agentic Rubrics, ResearchRubrics, and other Scale work: turn hard-to-verify behavior into rubric-grounded evaluation.

Second, it is process-focused. The paper evaluates reasoning structure rather than only final answers. That connects to chain-of-thought monitoring, hidden-state audits, natural-language activation explanations, and other attempts to evaluate what models are doing internally or procedurally.

Third, it is pluralistic. Many AI evaluations quietly assume a single correct answer. MoReBench instead builds rubrics that can reward different conclusions if they are well reasoned. This is important for real-world AI systems, where values conflict and reasonable people disagree.

Fourth, it is adjacent to post-training. If a rubric can evaluate moral reasoning, it might eventually become a training signal. But that immediately raises reward hacking and specification gaming concerns. A model could learn to mention rubric-friendly phrases without truly improving moral reasoning.

This makes MoReBench a useful companion to Rubrics as Rewards. Rubrics as Rewards asks how rubrics can train models. MoReBench asks how expert rubrics can evaluate a domain where outcomes alone are insufficient.

### Limitations And Cautions

The first limitation is LLM-as-judge scoring. The authors validate judge quality, but a judge F1 in the mid-to-high 70s means there is still substantial noise.

The second limitation is thinking-trace access. Actual traces, summarized traces, and self-reported traces are not the same thing. Comparing open and closed models through this lens is informative but imperfect.

The third limitation is moral pluralism itself. Expert-written rubrics are much better than answer keys, but they are not the final word on moral truth. They reflect a broad expert process, not objective access to morality.

The fourth limitation is length correction. Verbosity is a real benchmark artifact, but concise reasoning is not always better. Some moral dilemmas require careful detail, and over-penalizing length could punish legitimate nuance.

The fifth limitation is that benchmark performance can be gamed. Once a model is trained against rubric criteria, it may learn to produce criterion-shaped language without actually becoming better at moral reasoning.

### What To Remember

MoReBench is a benchmark for moral reasoning as a process.

It is built from 1,000 moral scenarios and 23,018 expert-written criteria. It scores whether models identify relevant considerations, reason clearly, integrate trade-offs, give helpful guidance, and avoid harmful advice.

Its main result is that standard capability benchmarks do not predict moral reasoning performance. Math, code, science, and preference scores are not enough.

The most important conceptual lesson is that alignment evaluation cannot always be outcome-based. In pluralistic domains, we need to evaluate how a model reasons, not only which answer it chooses.
