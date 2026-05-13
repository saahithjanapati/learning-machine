# Positive Alignment: Artificial Intelligence for Human Flourishing

Source: [arXiv PDF](https://arxiv.org/pdf/2605.10310), arXiv:2605.10310.

Authors: Ruben Laukkonen, Seb Krier, Chloe Bakalar, Shamil Chandaria, Morten Kringelbach, Adam Elwood, Daniel Ford, Fernando Rosas, Maty Bohacek, Matija Franklin, Nenad Tomasev, Stephanie Chan, Verena Rieser, Roma Patel, Michael Levin, Arun Rao.

## Core Claim

The paper argues that AI alignment has focused too heavily on negative alignment: preventing harm, ensuring controllability, refusing dangerous requests, and avoiding catastrophic failure. That work is necessary, but incomplete. The authors propose positive alignment as a complementary research agenda: building AI systems that actively support human and ecological flourishing while remaining safe and cooperative.

The analogy is positive psychology. Clinical psychology did important work by studying illness and dysfunction, but it did not automatically define flourishing, wisdom, purpose, virtue, and resilient well-being. Similarly, safety alignment can establish a behavioral floor, but it does not define what excellent, life-supporting AI behavior should look like.

## Main Ideas

Positive alignment means optimizing toward positive attractors, not only away from negative failure modes. In the paper's dynamical-systems framing, negative alignment pushes models away from basins like hallucination, manipulation, bias, and harmful assistance. Positive alignment asks what stable beneficial behavioral regimes AI should converge toward.

The authors define positive alignment as the development of AI systems that remain safe and cooperative while actively supporting human and ecological flourishing in a pluralistic, polycentric, context-sensitive, and user-authored way.

This is not a call for one universal moral doctrine. The paper explicitly warns against paternalism. Users and communities must retain agency over what flourishing means in their contexts. The system should scaffold autonomy, not silently impose a single conception of the good life.

The paper argues that flourishing is multidimensional. It draws from hedonic theories, desire-satisfaction theories, objective-list theories, and virtue/perfectionist theories. It also emphasizes cultural, spiritual, psychological, social, institutional, and ecological variation.

## Critique Of Negative Alignment

The authors summarize negative alignment as harm prevention. It includes refusal training, safety classifiers, robust controllability, jailbreak resistance, red-teaming, responsible scaling policies, and safety benchmarks.

They credit negative alignment with real achievements: safer public deployment, lower harmful-output rates, better refusal behavior, stronger red-teaming, and emerging governance frameworks.

But they identify structural limitations:

- Floor without ceiling: a model can avoid harms while remaining mediocre, sycophantic, shallow, or unhelpful.
- Preference-wellbeing divergence: users may prefer flattery, speed, or engagement even when those undermine long-term well-being.
- Hidden value system: safety framing can encode normative judgments while pretending to be neutral.
- Scalability: enumerating all harms becomes harder as AI systems become more autonomous and complex.

## Technical Directions

Positive alignment must operate across the full model lifecycle.

Goal-setting and evaluations: the field needs benchmarks for moral reasoning, even-handedness, human flourishing, epistemic humility, and long-term user outcomes.

Data curation: instead of only filtering out toxic or illegal content, training pipelines should intentionally include prosocial discourse, cross-cultural ethical frameworks, high-quality deliberation, and examples of virtuous interactions.

Pretraining: because pretraining shapes downstream behavior, positive alignment cannot be left entirely to a fragile post-training layer. Data quality, diversity, and value orientation matter before alignment tuning.

Mid- and post-training: constitutional methods, multi-objective reward modeling, adaptive reward models, and longitudinal interaction data should teach models when to disagree, defer, guide, or step back.

Memory and in-context learning: long-context and memory systems could support longitudinal alignment by tracking user values, goals, growth, and higher-order preferences over time. But memory systems must remain governable and agency-preserving.

Agents: agentic AI requires metrics for long-horizon cooperation, reciprocity, de-escalation, fair bargaining, and process ethics rather than only task success.

Forward-looking methods: the authors discuss interpretability, virtue-relevant features, active-inference-inspired agents, multi-agent collaboration, adversarial competition within rules, teacher-student training, search over alignment strategies, and interface alignment.

## Evaluation

The paper distinguishes two broad positive-alignment measurement targets.

First, model normative capabilities: can the model reason well about values, uncertainty, pluralism, moral trade-offs, political neutrality, cooperative norms, and epistemic humility?

Second, human growth: does interaction with the model actually improve human well-being, autonomy, competence, relatedness, resilience, mastery, and reflective agency over time?

The authors argue that one-shot QA benchmarks are insufficient for measuring flourishing. Longitudinal studies and short-term predictive proxies are needed. Useful proxies may include autonomy, competence, relatedness, shifts from impulsive first-order preferences to reflective second-order values, and scaffolded success where the user becomes more capable rather than more dependent.

## Governance

The paper argues that positive alignment cannot be centrally defined by one lab, state, or moral framework. Because flourishing is pluralistic, alignment governance should be decentralized and polycentric.

Proposed governance artifacts and institutions include:

- public, versioned model constitutions;
- collectively authored constitutions through public deliberation;
- pluralistic alignment frameworks that represent multiple value perspectives;
- role-based normative standards for tutors, mediators, assistants, and domain agents;
- agent identity, registration, and reputation records;
- middleware marketplaces for community-specific alignment layers;
- auditing institutions focused on thick values, not only toxic outputs;
- dispute-resolution mechanisms for conflicting values;
- interoperability protocols for agent ecosystems.

The basic governance thesis is that positive alignment should be contestable, revisable, locally adaptable, and accountable.

## Limitations And Open Problems

The paper is primarily agenda-setting rather than an empirical demonstration. It names many technical directions but does not solve the measurement problem.

Flourishing is difficult to define, pluralistic, culturally variable, and developmentally dynamic. Any attempt to optimize it risks paternalism.

Positive alignment may conflict with user autonomy if systems overrule short-term preferences in the name of long-term well-being. The line between scaffolded autonomy and manipulation is hard to specify.

Longitudinal evaluation is expensive and methodologically hard. Short-term proxies may be gameable or misleading.

Polycentric governance can preserve pluralism, but it also introduces coordination problems, inconsistent standards, and risks of harmful local value regimes.

## Scale AI Prep Relevance

This paper is relevant to Scale AI prep through evaluation, post-training, rubrics, moral reasoning, and long-horizon agent oversight.

It connects directly to MoReBench and Rubrics as Rewards: if alignment should support flourishing, then evaluation needs process-oriented rubrics for value trade-offs, not just final-answer correctness or harm refusal.

It also connects to post-training because the paper treats traits like epistemic humility, autonomy support, even-handedness, and prosocial cooperation as trainable objectives. The challenge is making these objectives measurable without collapsing them into shallow preference optimization.

For agent evaluation, the paper argues that task success is not enough. Long-horizon agents should be evaluated on whether they preserve user agency, build competence, cooperate fairly, avoid dependency, and support reflective goals.

## Key Takeaways

- Safety alignment is necessary but not sufficient.
- Positive alignment asks how AI can actively support flourishing, not merely avoid harm.
- Flourishing must remain pluralistic, context-sensitive, and user-authored.
- Technical work is needed across data, pretraining, post-training, memory, agents, and evaluation.
- The hardest measurement problem is long-term human growth rather than short-term user preference.
- Governance must be polycentric and contestable to avoid a single moral chokepoint.
