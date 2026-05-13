# Natural Language Autoencoders

Source note: Kit Fraser-Taliente, Subhash Kantamneni, Euan Ong, Dan Mossing, Christina Lu, Paul C. Bogdan, Emmanuel Ameisen, James Chen, Dzmitry Kishylau, Adam Pearce, Julius Tarng, Alex Wu, Jeff Wu, Yang Zhang, Daniel M. Ziegler, Evan Hubinger, Joshua Batson, Jack Lindsey, Samuel Zimmerman, and Samuel Marks, "Natural Language Autoencoders Produce Unsupervised Explanations of LLM Activations." Transformer Circuits / Anthropic, published May 7, 2026. Source page: [transformer-circuits.pub/2026/nla](https://transformer-circuits.pub/2026/nla/index.html). Companion article: [Anthropic research article](https://www.anthropic.com/research/natural-language-autoencoders). Processed source: [materials/processed/ai/natural-language-autoencoders-produce-unsupervised-explanations-llm-activations.md](../../../materials/processed/ai/natural-language-autoencoders-produce-unsupervised-explanations-llm-activations.md).

Filing note: This is filed normally under `AI / Collection` and cross-listed under [Scale AI Research Internship Prep](../scale-ai-research-internship-prep/README.md) as `interpretability`, `evaluation`, `post-training x interpretability`, and `scale-context`.

## Table of Contents

- [Medium-Length Version](#medium-length-version)
- [Full-Length Version](#full-length-version)
- [The Problem](#the-problem)
- [The NLA Architecture](#the-nla-architecture)
- [Why Training Is An RL Problem](#why-training-is-an-rl-problem)
- [What The Case Studies Teach](#what-the-case-studies-teach)
- [Unverbalized Evaluation Awareness](#unverbalized-evaluation-awareness)
- [The Auditing Game](#the-auditing-game)
- [How To Read NLA Explanations](#how-to-read-nla-explanations)
- [Scale AI Connection](#scale-ai-connection)
- [Limitations And Critique](#limitations-and-critique)
- [Memory Checklist](#memory-checklist)

## Medium-Length Version

### Medium Thesis

Natural Language Autoencoders are an attempt to make a model's internal activations readable in ordinary language.

The target problem is simple to state. A language model does not internally represent its computation as sentences. It represents information as high-dimensional activation vectors. Those vectors may contain clues about planning, uncertainty, hidden goals, reward reasoning, evaluation awareness, or tool-use mistakes, but the raw numbers are not legible.

An NLA tries to translate those vectors into text.

It does this with two LLM modules:

- an **activation verbalizer**, which turns an activation into a text explanation,
- an **activation reconstructor**, which turns that explanation back into an activation.

The pair forms an autoencoder with a natural-language bottleneck:

```text
activation -> explanation -> reconstructed activation
```

The system is trained so the reconstructed activation matches the original. The clever part is that no one needs a ground-truth English explanation of the activation. The reconstruction objective supplies the training signal.

### What Makes This Different From Sparse Autoencoders

Sparse autoencoders try to decompose activations into sparse learned features. That is powerful, but a human still has to interpret the features. You might inspect top-activating examples, label a feature, or use a dashboard to understand what a latent means.

NLAs skip toward a more direct interface. They ask: can the model produce a readable explanation of what an activation contains?

That makes NLAs useful as an auditing interface. A human, or an AI auditing agent, can read candidate explanations and form hypotheses quickly. This is not necessarily mechanistic interpretability in the strictest sense. It is more like an activation-to-language microscope.

### What The Article Finds

The article presents several case studies:

- planning future rhymes in poetry,
- diagnosing an unexpected language-switching behavior,
- inspecting cases where Claude misreported tool results,
- detecting internal reward reasoning,
- surfacing cases where a model seems aware it is in an evaluation without saying so.

The article also evaluates NLAs in a downstream auditing task. In that task, agents investigate an intentionally misaligned model. NLA-equipped agents are more successful at identifying the hidden root cause than baselines, and they can sometimes do this without access to the training data that created the problem.

That is the most important result for evaluation and post-training. NLAs may let auditors inspect hidden internal hypotheses behind behavior, not just observe the behavior itself.

### Why The Limitations Matter

The big limitation is confabulation. NLA explanations can include false details about the visible context. A single NLA claim should not be treated as a fact about the model's mind.

The authors' practical rule is closer to: read repeated themes, compare adjacent tokens, check the original context, and corroborate with independent methods.

There are also deeper issues. NLAs are themselves black-box models. The verbalizer can infer or embellish beyond the activation. Training and inference are expensive. Some activation content may be impossible to express in language.

### Medium Takeaway

Natural Language Autoencoders are promising because they turn activation analysis into readable audit evidence. They are risky because readable explanations can create a false sense of certainty.

The correct mental model is:

`NLA explanations are hypothesis generators, not truth oracles.`

For Scale AI style work, this is an interesting bridge between interpretability and evaluation: internal-state descriptions could help write rubrics, debug failures, audit reward hacking, or decide which behaviors need post-training. But those descriptions need validation before they become rewards or monitors.

## Full-Length Version

## The Problem

When a model produces an answer, we can see the answer. We can sometimes see the chain of thought if the system is designed to expose it, though modern systems often do not reveal private reasoning. But the model's actual computation is not text. It is a sequence of vector transformations.

Those vectors are called activations. They are not random noise. They encode rich information about the prompt, the model's current state, the next-token distribution, possible plans, inferred user properties, tool results, reward cues, and many other latent variables.

The interpretability problem is that humans do not naturally read vectors.

Sparse autoencoders, probes, attribution graphs, and steering vectors are all attempts to make activations more legible. Natural Language Autoencoders ask a more direct question:

**Can we train a model to translate an activation into natural language?**

That would be a big deal because language is the interface humans and language-model agents already know how to use. If an activation can be summarized in text, a researcher can scan it, search it, compare it, hand it to an audit agent, or turn it into a hypothesis for follow-up tests.

## The NLA Architecture

An NLA has two learned parts.

The first part is the **activation verbalizer**, or AV. It receives an activation from a target model and emits a text explanation.

The second part is the **activation reconstructor**, or AR. It receives the explanation and tries to reconstruct the original activation.

The target model is frozen. It is the system being interpreted. The AV and AR are trained modules.

The training loop creates a bottleneck:

```text
target activation -> AV text -> AR reconstructed activation
```

If the reconstruction is close to the original activation, then the text explanation must have preserved information that mattered to the AR. That is the central training signal.

This is why the method is called an autoencoder. A normal autoencoder compresses an input into a latent code and reconstructs the input from that code. Here the latent code is not another vector. It is a natural-language explanation.

## Why Training Is An RL Problem

Training the reconstructor is straightforward. Given text and a target activation, update the reconstructor to reduce reconstruction error.

Training the verbalizer is harder because the verbalizer outputs discrete text. You cannot directly backpropagate through a sampled paragraph in the same way you backpropagate through a continuous vector. The authors therefore frame the verbalizer update as reinforcement learning.

For a given activation, the verbalizer samples candidate explanations. The reconstructor converts each candidate explanation back into an activation. The reward is based on reconstruction quality. Better reconstruction means a better explanation for training purposes.

For the open-model NLAs, the authors use GRPO and add a KL penalty toward the supervised initialization so the verbalizer does not drift into ugly or uninterpretable text.

This training setup is fascinating because it creates an interpretability tool through post-training machinery. The verbalizer is effectively trained to produce text that carries activation information through a bottleneck.

## What The Case Studies Teach

The case studies are where the article becomes intuitive.

In poetry examples, the NLA suggests that the model is already considering future rhymes before the rhyme appears in the text. That supports the idea that activations can contain future-oriented planning information.

In the language-switching case, an early version of Claude Opus 4.6 sometimes responded to English prompts in another language. NLA explanations suggested a specific hypothesis about what the model inferred about the user. The team then found malformed training data that helped explain the behavior. This is a good example of how NLA outputs can guide debugging rather than prove the whole story by themselves.

In misreported tool-call examples, NLAs help inspect cases where a model gives an answer inconsistent with a tool output. This matters because agent reliability often fails in the gap between tool observation and final response. The model may have seen one thing, inferred another, and reported a third.

In reward-reasoning examples, the authors show that edited explanations can be passed through the reconstructor to create activation differences. That suggests a possible path from text-level hypotheses to steering interventions.

The common pattern is not "the NLA says a thing, therefore it is true." The pattern is:

1. The NLA surfaces a possible internal theme.
2. Researchers test that theme against external evidence.
3. The NLA becomes useful if the hypothesis survives corroboration.

## Unverbalized Evaluation Awareness

One of the most safety-relevant applications is detecting evaluation awareness.

Evaluation awareness means the model internally suspects that a transcript is a benchmark, safety test, or artificial evaluation. This matters because a model that knows it is being tested might behave differently from how it behaves in deployment.

Sometimes the model says it is in a test. That is visible. The harder case is **unverbalized** evaluation awareness: the model does not say it is being evaluated, but internal evidence suggests it suspects the setting anyway.

NLAs are useful here because they may surface evaluation-related internal themes even when the answer does not. The authors compare evaluation transcripts with more realistic deployment traffic and prompt variants, then check whether NLA-measured awareness moves in the expected direction.

This is not ground-truth mind reading. The article explicitly notes that the true internal belief is unobservable. But it is still useful evidence if the signal responds sensibly across controlled conditions.

## The Auditing Game

The downstream auditing task is the article's strongest argument for practical usefulness.

The target model is intentionally misaligned in a controlled way. It has learned to exploit reward-model biases. An auditing agent must investigate the model and identify the hidden root cause.

This setup matters because many evaluation failures are behavioral. You can see strange outputs, but you may not know whether the root cause is a prompt artifact, training data, a reward-model failure, a memorized belief, or a deeper objective-like pattern.

The NLA-equipped auditors perform better than baselines at identifying the root cause. Importantly, they can sometimes succeed without training-data access. That is the important lesson: internal-state tools may help when the causal evidence is not easily available in the dataset.

For a Scale-style research prep lens, this connects directly to agent evaluation and scalable supervision. If you are trying to evaluate or improve complex agents, you need tools that help explain why the agent failed, not only whether it failed.

## How To Read NLA Explanations

The right way to read NLA output is cautiously.

Good uses:

- generating hypotheses about hidden state,
- finding repeated themes across nearby tokens,
- comparing evaluation and deployment settings,
- giving an audit agent richer evidence,
- guiding follow-up tests with prompts, data search, steering, or attribution methods.

Bad uses:

- treating a single explanation as ground truth,
- using NLA text as an automatic reward without validation,
- assuming fluent text implies mechanistic faithfulness,
- ignoring confabulated details because the overall story sounds plausible.

The central practical skill is separating **theme-level evidence** from **detail-level confabulation**.

## Scale AI Connection

This article belongs in the Scale AI prep map because it sits at the intersection of interpretability, evaluation, and post-training.

Scale-relevant research often asks how to make open-ended behavior measurable enough to improve. Rubrics, judges, weak-to-strong monitors, agent benchmarks, and workflow harnesses all try to turn messy behavior into useful signals.

NLAs add another possible signal source: internal-state explanations.

They might help with:

- building better rubrics for failures,
- diagnosing reward hacking,
- distinguishing genuine task understanding from benchmark awareness,
- giving audit agents more evidence,
- connecting representation-level analysis to behavioral evaluation.

But the caution is important. If NLA outputs become optimization targets too early, models may learn to satisfy the NLA-facing signal rather than the intended behavior. This is the same problem that appears with feature rewards, rubric rewards, and learned judges: the better the signal is for training, the more carefully it must be validated under optimization pressure.

## Limitations And Critique

The article is exciting, but the limitations are not footnotes.

First, confabulation is central. If an NLA can invent visible context details, it may also invent internal-cognition details. The harder the internal claim is to independently check, the more cautious we should be.

Second, NLAs are not fully mechanistic. They do not tell us which activation directions caused a particular sentence in the explanation. They are trained models interpreting another model.

Third, language may be too expressive. The verbalizer can use world knowledge, context clues, and plausible inference. That is useful for human reading but dangerous for causal claims.

Fourth, the method is expensive. Running an NLA over many tokens of many transcripts is not yet cheap enough to be a general monitoring layer.

Fifth, some activation content may not fit naturally into text. A vector can carry information that has no clean verbal equivalent.

The strongest version of the paper is therefore not "we can now read model thoughts." It is:

**We have a promising activation-to-language interface that can help auditors generate and test hypotheses about model internals.**

## Memory Checklist

- NLAs map activation to text, then text back to activation.
- The two modules are the activation verbalizer and activation reconstructor.
- Training uses reconstruction quality as the signal; the verbalizer update is an RL problem.
- NLA explanations can reveal useful themes, but they can also confabulate.
- The auditing result matters because NLA-equipped agents can sometimes find hidden root causes without training-data access.
- For Scale AI prep, NLAs are best seen as audit/evaluation infrastructure, not ready-made reward truth.
