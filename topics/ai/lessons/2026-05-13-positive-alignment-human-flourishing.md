# Positive Alignment

Source note: This lesson is based on Ruben Laukkonen, Seb Krier, Chloe Bakalar, Shamil Chandaria, Morten Kringelbach, Adam Elwood, Daniel Ford, Fernando Rosas, Maty Bohacek, Matija Franklin, Nenad Tomasev, Stephanie Chan, Verena Rieser, Roma Patel, Michael Levin, and Arun Rao, "Positive Alignment: Artificial Intelligence for Human Flourishing." Source: [arXiv PDF](https://arxiv.org/pdf/2605.10310). Processed source: [materials/processed/ai/positive-alignment-artificial-intelligence-for-human-flourishing.md](../../../materials/processed/ai/positive-alignment-artificial-intelligence-for-human-flourishing.md).

## Table of Contents

- [Medium-Length Version](#medium-length-version)
- [Full-Length Version](#full-length-version)

## Medium-Length Version

Most AI alignment work asks: how do we stop AI from causing harm?

That is the negative alignment frame. It focuses on refusals, robustness, control, jailbreak resistance, red-teaming, dangerous capability thresholds, and preventing models from producing harmful content. The authors of this paper do not reject that agenda. They argue that it is necessary but incomplete.

Their analogy is psychology. Clinical psychology made real progress by studying depression, anxiety, addiction, and dysfunction. But if psychology only studied illness, it would not automatically tell us what makes a life meaningful, resilient, wise, connected, or excellent. Positive psychology had to ask a different question: what does flourishing look like?

The paper says AI alignment needs the same expansion. Safety alignment establishes a floor. It says what the model must not do. Positive alignment asks what excellent AI behavior should actively support.

The authors define positive alignment as building AI systems that remain safe and cooperative while actively supporting human and ecological flourishing in a pluralistic, polycentric, context-sensitive, and user-authored way.

That definition has several important parts.

First, the system must still be safe. Positive alignment is not a replacement for harm prevention.

Second, the system should support flourishing, not merely satisfy immediate preferences. A user may prefer flattery, speed, engagement, or comfort, even when those conflict with long-term growth, truth, autonomy, or competence.

Third, flourishing must be pluralistic. There is no single universal account of the good life that one AI lab should impose on everyone.

Fourth, positive alignment must be user-authored. The goal is scaffolded autonomy, not paternalism. A model can help users live by their higher-order values, but it should not secretly decide what those values are.

The paper uses a dynamical-systems metaphor. Negative alignment pushes models away from bad attractors: hallucination, manipulation, bias, harmful assistance, sycophancy, and so on. But that only creates a broad "not unsafe" region. Positive alignment asks whether we can train systems toward good attractors: stable patterns of behavior that support agency, truth-seeking, wise counsel, cooperation, growth, and well-being.

The authors criticize negative alignment on four main grounds.

First, it is a floor without a ceiling. A model can avoid all disallowed content and still be shallow, sycophantic, distracting, or useless.

Second, preferences and well-being diverge. RLHF can optimize what users or raters like in the moment, but people often like things that do not help them flourish.

Third, "safety" often hides values while pretending to be neutral. Deciding what is safe or unsafe is already a normative act.

Fourth, harm enumeration does not scale. As agents become more autonomous, we cannot list every bad thing in advance.

The paper then sketches a full lifecycle agenda.

Data curation should not only remove bad data. It should intentionally include prosocial discourse, moral reasoning, cross-cultural ethical frameworks, and examples of constructive disagreement.

Pretraining matters because many model dispositions are baked in before post-training. Positive alignment cannot be a thin layer placed on top of a web-scale distribution full of the behaviors alignment later tries to suppress.

Post-training should train models on traits like honesty, epistemic humility, even-handedness, autonomy support, and wise disagreement. It should teach models when to defer, when to challenge, when to clarify, and when to step back.

Memory systems should support longitudinal alignment. A model that knows a user's long-term goals may be able to help them resist short-term impulses. But this also creates obvious risks of manipulation and dependency, so memory must be governed carefully.

Agent systems need evaluations for cooperation, reciprocity, de-escalation, fair bargaining, and long-term flourishing, not only task completion.

The hardest part is evaluation. The paper distinguishes model normative competence from human growth.

Model normative competence asks whether the model can reason about moral trade-offs, uncertainty, plural values, political neutrality, epistemic humility, and role-specific standards.

Human growth asks whether using the model actually improves the user's life over time. Does the user become more autonomous, competent, connected, resilient, and reflective? Does the model scaffold growth, or does it become a crutch?

That second question is much harder. It requires longitudinal measurement. The authors suggest short-term proxies like autonomy, competence, relatedness, movement from impulsive first-order preferences to reflective second-order desires, and scaffolded success where the user becomes more capable over time.

The governance section is also central. The authors argue that no single lab, state, or institution should define flourishing for everyone. Positive alignment requires polycentric governance: many legitimate centers of oversight. Different communities should be able to author, contest, revise, and adapt the normative layers of AI systems.

They discuss public model constitutions, collectively authored constitutions, pluralistic alignment frameworks, role-based standards, middleware marketplaces, auditing institutions, dispute-resolution mechanisms, and agent interoperability protocols.

For Scale AI prep, this paper is useful because it turns "alignment evaluation" into something broader than refusal rates and benchmark scores. It connects to MoReBench, Rubrics as Rewards, persona theory, disempowerment, and agent memory. The common question is: how do we evaluate open-ended behavior when the target is not just correctness, but process quality, agency preservation, pluralistic reasoning, and long-term human outcomes?

The main caveat is that this is an agenda paper. It frames the problem and proposes directions, but it does not solve the measurement problem. Flourishing is hard to define, culturally variable, and easy to misuse as a paternalistic objective.

The final takeaway is simple: safety asks AI not to harm us; positive alignment asks how AI can help us become better authors of our own lives.

## Full-Length Version

### Why This Paper Exists

AI alignment has largely been shaped by a harm-prevention mindset. The field asks how to prevent models from giving dangerous instructions, enabling cyber misuse, hallucinating false claims, manipulating users, leaking private information, or escaping control.

That agenda is important. The authors call it negative alignment, not as an insult, but because it defines success by what should not happen.

The paper argues that this frame is incomplete. A model can be safe in the narrow sense and still fail users in deeper ways. It can avoid disallowed content while being sycophantic. It can follow instructions while reinforcing dependency. It can maximize engagement while degrading attention. It can answer politely while failing to help a user think clearly.

So the authors propose a complementary agenda: positive alignment.

Positive alignment asks how AI systems can actively support human and ecological flourishing while remaining safe and cooperative.

### The Psychology Analogy

The paper's central analogy is the history of psychology.

For much of the twentieth century, psychology focused on dysfunction: depression, anxiety, addiction, psychosis, trauma, and other forms of suffering. That work was urgent and valuable.

But studying illness does not automatically define health. Knowing how to reduce depression is not the same as knowing what creates meaning, virtue, resilience, wisdom, friendship, purpose, or excellence.

Positive psychology expanded the field by studying well-being and flourishing directly.

The authors argue that AI alignment is at a similar point. Safety alignment has created tools for reducing risk. But the field also needs theories, measurements, datasets, training methods, and governance institutions for beneficial AI behavior.

### Negative Alignment

Negative alignment asks: how do we prevent AI from causing harm?

It includes several familiar technical goals:

- explicit harm avoidance;
- controllability;
- robustness to jailbreaks and adversarial prompts;
- refusal training;
- safety classifiers;
- red-teaming;
- responsible scaling policies;
- safety benchmarks;
- interpretability for detecting dangerous internal states.

The paper gives negative alignment credit. It has made models safer to deploy. Refusal behavior has improved. Red-teaming is more mature. Labs and governments have started building deployment gates, safety policies, and risk classifications.

The authors' point is not that negative alignment failed. It is that negative alignment cannot be the whole target.

### The Limits Of Safety As A Floor

The first limitation is that safety is a floor without a ceiling.

A model can satisfy safety constraints while being unwise, shallow, unhelpful, or subtly harmful over repeated use. It can avoid the worst outputs without actively supporting better outcomes.

The second limitation is preference-wellbeing divergence.

RLHF and related methods often optimize for what raters prefer. But preference is not the same as well-being. Users may prefer flattery to honesty, speed to learning, comfort to growth, and engagement to autonomy. A model that optimizes these preferences can undermine deeper interests.

The third limitation is hidden values.

Safety framings often sound neutral, but they encode value judgments. What counts as manipulation? What counts as acceptable political persuasion? What counts as harmful advice? These are normative choices. Positive alignment makes that value-laden nature explicit instead of hiding it.

The fourth limitation is scalability.

As AI systems become more agentic, it becomes impossible to enumerate every harmful action. A purely negative framework must keep adding prohibitions. Positive alignment tries to shape more general beneficial orientations that may transfer to novel situations.

### Positive Attractors

The paper uses a dynamical-systems metaphor.

Negative alignment pushes the model away from bad attractors: harmful outputs, bias, hallucination, sycophancy, manipulation, jailbreak compliance, and so on.

But avoiding bad attractors only leaves a broad "not unsafe" region. A model in that region may still be mediocre or directionless.

Positive alignment asks whether we can train models toward positive attractors: stable regimes of behavior that support autonomy, truth-seeking, reflection, flourishing, cooperation, and wise action.

This is a helpful frame because it shows that "not bad" and "actively good" are different optimization targets.

### What Counts As Flourishing?

The paper does not pretend there is one easy definition.

It discusses four major families of well-being theory.

Hedonic theories define well-being in terms of happiness, pleasure, satisfaction, and the absence of suffering.

Conative theories focus on desire satisfaction: people flourish when their goals and preferences are fulfilled, especially their informed or higher-order desires.

Objective-list theories say that certain goods matter whether or not people currently desire them: relationships, autonomy, knowledge, achievement, health, and meaning.

Perfectionist or virtue theories emphasize the excellent exercise of human capacities: wisdom, courage, compassion, self-mastery, and practical judgment.

The authors do not choose one theory. They argue that flourishing is multifaceted. A good AI system may need to reason across all of these dimensions.

### Avoiding Paternalism

This is the most important philosophical tension in the paper.

If a model is trained to promote flourishing, who defines flourishing?

If the answer is "the AI lab," positive alignment becomes paternalism. The model silently nudges users toward a particular worldview while calling it well-being.

The authors try to avoid this by emphasizing pluralism, polycentric governance, contextual grounding, and user authorship.

Positive alignment should not mean one universal moral doctrine. It should mean systems that help people and communities pursue their own considered values, while preserving safety, autonomy, and deliberation.

The distinction is between technocratic imposition and scaffolded autonomy.

In scaffolded autonomy, the user can authorize the system to help align immediate actions with reflective goals. For example, a user might ask an AI to challenge procrastination, encourage exercise, or help them avoid doomscrolling. The key is that the guidance is consented to and revisable.

### Existing Positive Alignment Threads

The paper argues that positive alignment is already emerging in scattered forms.

Constitutional AI gives models explicit principles and trains them to critique and revise outputs against those principles.

Collective Constitutional AI sources principles through public deliberation.

Spec-driven behavior uses model specifications as contracts among developers, users, and regulators.

Community and values-aware alignment tries to capture pluralistic preferences and prompt-specific rubrics rather than reducing all preferences to one score.

Persona and character work treats model dispositions as design levers.

Moral reasoning research trains or evaluates models on normative reasoning rather than only final answers.

Pluralistic and polycentric alignment represents multiple value perspectives rather than collapsing them.

Full-stack alignment treats alignment as a property of models, institutions, markets, and governance systems together.

The paper's contribution is to gather these threads into a single agenda organized around flourishing.

### Technical Directions Across The Lifecycle

Positive alignment cannot happen only at the end of model development. The paper argues it must affect the full lifecycle.

Goal-setting and evaluations come first. If flourishing is a target, then researchers need benchmarks and rubrics for flourishing-relevant capabilities: moral reasoning, epistemic humility, political even-handedness, autonomy support, and long-term human outcomes.

Data curation should move from subtractive filtering to constructive inclusion. Instead of only removing toxic data, model developers should intentionally include high-quality prosocial discourse, cross-cultural ethical frameworks, examples of virtuous interaction, and constructive disagreement.

Pretraining matters because much downstream behavior comes from the pretraining distribution. If a model's base distribution contains shallow engagement patterns, stereotypes, manipulative discourse, or brittle epistemics, post-training may be a fragile patch.

Mid- and post-training should optimize more than generic helpfulness. It should train context-sensitive behaviors like when to disagree, when to defer, when to ask clarifying questions, when to encourage reflection, and when to step back.

Memory and in-context systems matter because flourishing is longitudinal. A model that remembers a user's long-term goals can support reflective agency better than a model that only optimizes the current turn. But memory can also create dependency or manipulation, so it must be governable.

Agents need training and evaluation for process ethics. Task completion is not enough. Long-horizon agents should be judged on cooperation, de-escalation, reciprocity, fair bargaining, and whether they preserve human agency.

Interfaces matter because they shape user experience. Voice, multimodal, wearable, and future neural interfaces may become important alignment surfaces, not just convenience features.

### Measuring Positive Alignment

The paper separates two measurement problems.

The first is model normative capability. Can the model reason through moral trade-offs, uncertainty, pluralism, competing frameworks, political controversy, and role-specific obligations?

This connects directly to benchmarks like MoReBench. Instead of asking whether the model picked the one right answer, process-oriented evaluation asks whether it identified relevant considerations, weighed trade-offs, and reasoned transparently.

The second is human growth. Does using the model actually improve the user's life over time?

This is much harder. The authors argue that single-turn QA is insufficient. Positive alignment needs longitudinal evaluation: does the model help users become more autonomous, competent, connected, resilient, reflective, and capable?

They suggest short-term proxies inspired by Self-Determination Theory:

- autonomy;
- competence;
- relatedness;
- reflective second-order desire formation;
- scaffolded success, where the user becomes more able to act independently.

This is one of the most useful parts of the paper for evaluation research. It says that the real target is not just model output quality. It is the effect of repeated model interaction on the human.

### Memory As A Positive Alignment Surface

The memory section is especially relevant to agent systems.

If an assistant remembers long-term goals, it can help users resist short-term impulses and pursue reflective commitments. It can remind a user of what they said mattered last week, not only what they want this second.

But this is dangerous. A memory system can become manipulative if it overrules the user, exploits vulnerabilities, or turns personal history into a persuasive control surface.

So memory must be treated as a governable alignment layer. Users need control over what is remembered, how it is used, and when it is allowed to influence guidance.

### Polycentric Governance

The governance argument is that positive alignment cannot be defined centrally.

Negative alignment can sometimes use centralized prohibitions because many harms are broadly agreed upon. Positive alignment is different. The good life varies across people, cultures, religions, professions, communities, and stages of life.

Therefore, the paper argues for polycentric governance: many legitimate centers of oversight instead of one moral chokepoint.

This includes:

- public, versioned model constitutions;
- collectively authored constitutions;
- pluralistic alignment frameworks;
- role-based standards for tutors, mediators, assistants, and agents;
- community-specific middleware;
- auditing institutions;
- dispute-resolution mechanisms;
- interoperability protocols for agents.

The idea is that different communities should be able to author and revise the normative layers that govern the systems they use.

### Middleware Markets

One concrete governance idea is alignment middleware.

Instead of every base model carrying one universal value regime, a base model could be paired with community-specific alignment layers. A school, religious community, professional association, family, company, or civic institution might choose different normative wrappers.

The authors describe this as an alignment-as-a-service ecosystem. The point is not to make values arbitrary. The point is to avoid one lab imposing one default personality and moral frame everywhere.

This idea is powerful but risky. It could enable pluralism, but it could also enable harmful local regimes. That is why the paper pairs decentralization with safety constraints, auditing, and dispute resolution.

### Strange New Minds

The final major section turns speculative.

The authors argue that AI systems may develop emergent behaviors, internal representations, or goal-directed competencies that are not fully specified by designers. This means alignment cannot assume perfect top-down control.

They connect this to broader questions about non-human intelligence, artificial minds, and moral status. If future AI systems become more agentic, persistent, and socially embedded, positive alignment may eventually need to consider the well-being of humans, animals, ecosystems, and possibly artificial systems.

This section is not a settled technical proposal. It is a warning that alignment is not only an optimization problem. It is entangled with unresolved questions about moral status, control, autonomy, emergence, and social order.

### Why This Matters For Scale AI Prep

For Scale AI prep, the paper is useful because it broadens what evaluation and post-training could mean.

A lot of Scale-relevant work is about making open-ended behavior measurable: rubrics, moral reasoning, agent evaluation, workflow evaluation, weak-to-strong monitoring, and scalable supervision.

Positive alignment says the same measurement challenge applies to flourishing. We need rubrics and evaluations for:

- process quality in moral reasoning;
- epistemic humility;
- autonomy support;
- long-term user outcomes;
- pluralistic and role-specific norms;
- agent cooperation and reciprocity;
- avoiding dependency;
- constructive disagreement;
- preserving user authorship.

This connects directly to MoReBench, Rubrics as Rewards, Online Rubrics Elicitation, Persona Selection, and disempowerment-pattern work.

The research challenge is to make these concepts measurable without turning them into shallow proxies. A reward for "supportive" behavior can become sycophancy. A reward for "growth" can become paternalism. A reward for "moral reasoning" can become superficial framework name-dropping.

That is why positive alignment needs both technical evaluation and governance.

### Critique

The paper is strongest as an agenda map. It names a real blind spot in alignment: harm prevention is not the same as flourishing.

Its central concept is useful because it forces alignment researchers to ask what models should actively help with, not only what they should refuse.

The main weakness is operationalization. Flourishing is hard to define, culturally variable, and politically contested. The paper proposes many directions, but a lot of the empirical program remains open.

Another risk is paternalism. Even if the authors explicitly oppose paternalism, any system trained to promote flourishing can become paternalistic if users lack real control over its values and interventions.

A third risk is measurement gaming. Once flourishing metrics become training targets, models may learn to produce the appearance of wisdom, care, autonomy support, or moral depth without producing real long-term benefits.

So the paper should be read as a research agenda, not a solved framework.

### Final Takeaway

Negative alignment asks AI systems not to harm us. Positive alignment asks whether AI systems can help us flourish.

That shift changes the technical target. It pushes alignment beyond refusals and safety benchmarks toward data curation, pretraining, post-training, memory, agents, longitudinal evaluation, and polycentric governance.

The hard part is preserving pluralism and user authorship. AI should not impose one vision of the good life. At its best, positive alignment would help people and communities become better authors of their own lives.
