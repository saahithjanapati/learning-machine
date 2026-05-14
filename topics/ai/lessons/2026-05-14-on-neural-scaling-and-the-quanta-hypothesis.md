# On Neural Scaling And The Quanta Hypothesis

Source note: [materials/processed/ai/on-neural-scaling-and-the-quanta-hypothesis.md](../../../materials/processed/ai/on-neural-scaling-and-the-quanta-hypothesis.md)

Related lesson: [The Quantization Model Of Neural Scaling](2026-05-14-quantization-model-neural-scaling.md)

Eric Michaud's essay is about one of the biggest unanswered questions in modern AI: when we scale neural networks, what exactly are we buying?

We know the empirical surface. Bigger models trained on more data often get better in a smooth, predictable way. Loss curves follow scaling laws. Yet particular abilities can feel abrupt: one model cannot do the thing, the next model can. The quanta hypothesis is an attempt to make those two facts live in the same picture.

## Table of Contents

1. [Start Here](#start-here)
2. [The Puzzle](#the-puzzle)
3. [The Quanta Hypothesis](#the-quanta-hypothesis)
4. [A Toy Example](#a-toy-example)
5. [What Language Models Add](#what-language-models-add)
6. [Why Interpretability Cares](#why-interpretability-cares)
7. [Sparse Autoencoders Are Related, Not Identical](#sparse-autoencoders-are-related-not-identical)
8. [Emergence Might Be Real Or A Measurement Trick](#emergence-might-be-real-or-a-measurement-trick)
9. [Why Scaling Can Still Matter When Users Stop Noticing](#why-scaling-can-still-matter-when-users-stop-noticing)
10. [The Hard Part: Joint Scaling](#the-hard-part-joint-scaling)
11. [The Scientific Weakness](#the-scientific-weakness)
12. [Quick Check](#quick-check)
13. [One-Minute Summary](#one-minute-summary)

## Start Here

Think of pretraining as asking a model to compress and predict a giant distribution of text. To do that well, the model must learn many different things:

- facts about the world;
- syntactic patterns;
- reasoning routines;
- memorized names and references;
- code idioms;
- social conventions;
- domain-specific algorithms;
- tiny tricks that only matter in rare contexts.

The quanta hypothesis says: maybe these things are learned in chunks.

Not every chunk has the same importance. Some chunks help constantly. Others help only in rare cases. If the common chunks are learned first and the rare chunks are learned later, then scaling can look smooth in aggregate while still producing sudden local gains.

That is the main idea.

## The Puzzle

Neural scaling laws say that average loss often improves as a power law when you increase parameters, data, or compute. On a log-log plot, the curve can look strikingly regular.

That is surprising because language is not a simple physical system. It is full of facts, concepts, styles, algorithms, social norms, hidden references, and long-tail edge cases. Yet the average loss curve behaves with a kind of macro-level order.

At the same time, specific abilities often do not feel smooth. A model may suddenly learn induction-like copying behavior during training. A larger model may suddenly pass a benchmark or show a capability that smaller models did not show.

So we get a tension:

`Mean loss looks smooth. Individual abilities can look discrete.`

The quanta hypothesis is a way to explain both.

## The Quanta Hypothesis

The hypothesis says that networks learn many discrete modules. Michaud calls these modules `quanta`.

A quantum might be a piece of knowledge, a circuit, an algorithm, or a learned mechanism. The important assumption is discreteness: for the simplified theory, a model either learns the quantum well enough to use it, or it does not.

Now add one more assumption. Different quanta are useful at different frequencies. Some are needed all the time. Others are needed rarely. If we order quanta by how often they help prediction, we get a long tail:

- common grammar-like mechanisms near the front;
- common factual and semantic patterns after that;
- increasingly specialized knowledge and skills farther out;
- very rare mechanisms deep in the tail.

If the usefulness of these quanta follows a power law, then learning more quanta can produce a power-law improvement in average loss.

This is the central move. The units of learning are discrete, but the average over many units can be smooth.

## A Toy Example

The original quantization model paper tested this idea with a synthetic task called multitask sparse parity.

Sparse parity is a clean algorithmic task. A model sees binary strings and must infer which subset of bits determines the label. In the multitask version, there are many different parity subtasks, and some subtasks occur more often than others.

That gives the researchers a toy world where the "quanta" are not mysterious. Each subtask is a discrete thing the network can learn. Common subtasks appear often, so the network learns them earlier. Rare subtasks appear less often, so they require more data or training.

When the subtasks follow a power-law frequency distribution, the model's average loss can improve smoothly even though the underlying subtasks are learned in stages.

The toy task does not prove that language models work this way. It shows something narrower but important: ordinary neural networks can produce quanta-like scaling behavior when the data has the right structure.

## What Language Models Add

Language models are messier. We do not know the true list of quanta. We do not have labels saying which mechanism a token requires.

Michaud's way into the problem is to look at per-token learning curves using the Pythia model suite. Instead of asking only how average loss changes, ask how loss changes on one particular token in one particular document as model size or training changes.

Some tokens show sharp drops. Others improve gradually.

In the quanta picture:

- a sharp token curve may be `monogenic`, mostly depending on one quantum;
- a smooth token curve may be `polygenic`, depending on several quanta learned at different scales.

This is a helpful vocabulary, but it is not a final proof. A token can look sharp because of noise. A smooth curve can hide several mechanisms or reflect partial improvement. The evidence is suggestive because it gives researchers a way to look below the mean loss curve.

## Why Interpretability Cares

If the quanta hypothesis is right, interpretability has a natural job: find the quanta.

That means asking questions like:

- What mechanism did the model learn?
- Where is it represented?
- What data made it useful?
- Which prompts activate it?
- At what model scale does it appear?
- Does it appear reliably across seeds?
- Is it shared across models or architecture-specific?

This is why the essay connects scaling theory to mechanistic interpretability. Scaling laws are not just about forecasting benchmark curves. They are about how the internal inventory of mechanisms changes as the model gets larger.

The hypothesis also makes interpretability more daunting. If each scale increase adds many rare mechanisms, then larger models may become harder to audit because they contain more long-tail behavior. The mechanisms that matter for unusual or high-stakes cases may be exactly the ones ordinary evaluation misses.

## Sparse Autoencoders Are Related, Not Identical

Sparse autoencoders are one of the main tools researchers use to decompose model activations into sparse features. It is tempting to say:

`quanta = SAE features`

Michaud is more careful than that.

An SAE feature is a direction or component in activation space. A quantum is supposed to be a learned mechanism, skill, or piece of knowledge that affects prediction. These might line up sometimes, but they do not have to.

A quantum could involve a circuit across many layers. An SAE feature could represent one concept used by many mechanisms. A feature could be a useful representation without being the whole computation. A quantum could also require several features working together.

The better view is:

`SAEs may help reveal quanta-like structure, but they are not guaranteed to name the true atoms of learning.`

That distinction matters. If researchers mistake the tool's units for the theory's units, they may overinterpret clean-looking dictionaries.

## Emergence Might Be Real Or A Measurement Trick

The essay also faces a serious objection: maybe many emergent abilities are not truly emergent.

Some benchmark metrics are discontinuous. Accuracy, for example, flips from 0 to 1 when the correct answer becomes the top-ranked answer. A model's probability estimates might improve gradually, while the measured score jumps suddenly.

That means a benchmark-level jump does not automatically prove an internal phase transition.

Michaud's position is moderate. Some emergence claims may be metric artifacts. But that does not rule out genuinely sharp internal learning transitions. It just means researchers need better measurements:

- look at probabilities and losses, not only pass/fail scores;
- compare across random seeds;
- identify circuits or mechanisms when possible;
- distinguish benchmark discontinuity from internal discontinuity.

This is one reason the quanta hypothesis remains unfinished. It needs measurements that can separate real learned chunks from noisy curves and metric artifacts.

## Why Scaling Can Still Matter When Users Stop Noticing

The quanta model gives a useful way to think about scaling plateaus.

Suppose early scaling learns very common quanta. Users notice those immediately because they affect ordinary conversations. Later scaling learns rarer quanta. Those may matter for specialized domains, obscure facts, unusual reasoning chains, or rare failure modes.

Average users might not notice much difference, but the model may still be gaining real capabilities in the tail.

This helps explain why "pretraining scaling still improves loss" and "most users do not feel the difference" can both be true. It also explains why post-training may dominate product feel even while pretraining continues to matter for deep capability.

For research, the important question becomes: which distribution matters?

The pretraining distribution, the chat distribution, the enterprise-task distribution, and the high-stakes-evaluation distribution may put weight on different quanta. A rare quantum in pretraining may be common in a specialized deployment setting.

## The Hard Part: Joint Scaling

The original quanta model treats parameter scaling, data scaling, and training-step scaling mostly separately.

Real training is joint. A lab chooses model size, data quantity, data quality, training duration, and compute budget together. Larger networks can also be more efficient learners. They may need fewer steps to learn the same kind of structure.

That complicates the simple story. It is not enough to say that parameters determine capacity and data determines whether rare quanta are observed. Optimization dynamics also matter. Larger networks may discover mechanisms faster or follow different learning paths.

This is one of the main open problems in the essay. A better theory would explain how parameters, data, and steps jointly determine the number and kind of mechanisms learned.

## The Scientific Weakness

The most honest part of the essay is its self-critique.

Michaud says the quanta hypothesis is hard to falsify right now. We do not yet have a precise operational definition of a quantum. If the theory can explain many outcomes after the fact, but does not clearly rule anything out in advance, then it is not yet strong science.

That does not make it useless. Research programs often begin with informal concepts. But the next step has to be sharper:

- define candidate quanta in measurable terms;
- predict when particular mechanisms should appear;
- compare with rival theories;
- design experiments that one theory passes and another fails.

The lesson is not "the quanta model is true." The lesson is "this is a promising vocabulary for connecting scaling laws, emergence, and interpretability, but it needs stronger tests."

## Quick Check

1. Why does the quanta hypothesis make smooth scaling and sudden abilities compatible?
2. What does it mean for a token to be monogenic or polygenic?
3. Why are sparse autoencoder features not automatically the same thing as quanta?
4. How can an evaluation metric create fake-looking emergence?
5. Why might pretraining improvements become less visible to ordinary users?
6. What makes joint parameter-data-step scaling harder than the simple model?
7. What would make the quanta hypothesis easier to falsify?

## One-Minute Summary

Michaud's quanta hypothesis says that neural networks may learn discrete mechanisms, skills, or pieces of knowledge, and that scaling adds more of these mechanisms in roughly usefulness-ranked order. If those mechanisms are useful with power-law-distributed frequencies, then average loss can improve smoothly even though individual abilities appear suddenly.

The theory is appealing because it gives interpretability something concrete to look for: the learned mechanisms that scaling adds. It also explains why rare, specialized improvements may continue even when everyday users stop noticing pretraining gains. But the theory remains incomplete. Sparse autoencoder features are not automatically quanta, emergent benchmark scores can be metric artifacts, per-token curves are noisy, and joint scaling across parameters, data, and optimization is still poorly understood. The next step is sharper experiments that can distinguish the quanta hypothesis from rival explanations of neural scaling.
