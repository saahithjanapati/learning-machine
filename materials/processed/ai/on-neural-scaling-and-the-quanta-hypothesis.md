# On neural scaling and the quanta hypothesis

Source: `https://ericjmichaud.com/quanta/`
Site: `Eric J. Michaud`
Title: `On neural scaling and the quanta hypothesis`
Author: `Eric J. Michaud`
Published: `2026-01-12`
Ingested: `2026-05-14`
Extraction engine: `direct web scrape + manual structured ingest`
Strategy: `canonical article extraction and learning-oriented normalization`

Related processed note: [The Quantization Model of Neural Scaling](the-quantization-model-of-neural-scaling.md)

## Summary

Eric Michaud revisits the 2023 Quantization Model of Neural Scaling and asks what kind of theory could explain both the smooth aggregate behavior of scaling laws and the sharp, capability-level transitions that researchers often notice in trained networks.

The core proposal is the quanta hypothesis: neural networks may learn many discrete modules, mechanisms, skills, or pieces of knowledge. Each quantum is either learned well enough to matter or not learned at all. If these quanta are useful with power-law-distributed frequencies across the data distribution, then adding more quanta in order of usefulness can produce smooth power-law loss curves even though individual abilities appear discretely.

The essay is partly a defense, partly a revision, and partly a self-critique. Michaud thinks the hypothesis is attractive because it connects scaling laws to mechanistic interpretability: if quanta are real, they are the natural objects to find, catalog, and explain. But he also emphasizes unresolved problems. Real models may not learn quanta in a clean order. Sparse autoencoder features are not obviously the same as quanta. Joint parameter-data scaling is more complex than the original model handled. Some apparent sharp transitions may be noise or metric artifacts. And the field still lacks decisive experiments that could cleanly falsify competing theories of neural scaling.

## Context

The article starts from a practical observation: frontier AI labs are spending enormous resources on scaling deep neural networks, yet deep learning theory still does not offer a mature explanation of what networks learn internally or why scaling works so predictably.

Michaud frames a mature theory as needing two things:

- a framework for thinking about the internal mechanisms neural networks learn and how those mechanisms generalize;
- an account of how architecture, data, hyperparameters, scale, and training time determine which mechanisms are learned.

Neural scaling theories are attractive because they describe how models change with more parameters, more data, or more steps. A theory that explains scaling is implicitly also a theory of what the network is learning.

## The Quanta Hypothesis

The quanta hypothesis says that the learning problem can be decomposed into many discrete mechanisms. A model either learns a mechanism or does not. It does not, in the idealized version, spread capacity across half-learning many mechanisms.

Each quantum has a use frequency: the fraction of samples or tokens where that mechanism would improve prediction. Common quanta help on many tokens; rare quanta help only in niche contexts. If the use frequencies follow a power law, then learning the first `n` quanta produces a power-law decrease in average loss.

This explains the apparent tension between two observations:

- Mean loss improves smoothly with scale.
- Some abilities appear suddenly once a model crosses a scale threshold.

In the quanta picture, smooth aggregate scaling is the average of many discrete acquisitions. A newly learned quantum may create a visible jump on the examples that require it, while barely moving the global loss curve because those examples are rare.

## Why The Theory Is Appealing

The theory gives interpretability a target. Instead of trying to understand an undifferentiated trained network, researchers could ask:

- Which quanta has the model learned?
- What computation or knowledge does each quantum implement?
- Which data caused a quantum to become useful?
- At what scale or training stage does the quantum appear?
- Which quanta are active on a particular token, task, or behavior?

This makes the theory compatible with a circuits-style view of mechanistic interpretability. The important units are not necessarily neurons. They may be sparse, distributed mechanisms that only become visible through better decomposition tools.

Michaud also connects this view to emergent abilities. A capability can appear suddenly if the model has just acquired the required quantum. But the global loss curve remains smooth because the capability only affects a small part of the data distribution.

## Evidence From Synthetic Tasks

The original quantization model paper tested the idea with multitask sparse parity. Sparse parity is a synthetic classification task where a model must discover which input bits determine the label. In the multitask version, many subtasks are mixed together and occur with power-law-distributed frequencies.

This setup creates a clean toy world where there really are discrete subtasks and some are more common than others. Neural networks trained on the task learn subtasks in stages. More frequent subtasks tend to be learned earlier, and the aggregate loss can look like a power law.

The point is not that language modeling is sparse parity. The point is that ordinary neural networks can show the kind of scaling behavior predicted by the quanta model when the data distribution has the right structure.

## Evidence From Language Models

Michaud then asks whether large language models show anything like this. He looks at per-token learning curves in the Pythia model suite, where many model sizes and training checkpoints are available.

The result is mixed but suggestive. Some individual tokens show sharp drops in loss at particular scales or stages. Others improve smoothly. In the quanta framing, sharp curves are "monogenic": one main quantum matters for that token. Smooth curves are "polygenic": several quanta help, appearing at different scales.

This is an appealing story, but not a proof. Some sharp-looking transitions may be seed noise. Some smooth curves may reflect partial progress rather than multiple discrete mechanisms. The article treats the Pythia evidence as a useful probe, not a decisive validation.

## Sparse Autoencoders And Quanta

A major question is whether sparse autoencoder features are the same kind of object as quanta.

Sparse autoencoders decompose activations into sparse feature directions. Quanta, in the theory, are learned mechanisms or pieces of knowledge that affect prediction. These can overlap, but they are not identical by definition.

An SAE feature might correspond to part of a quantum, the output of a quantum, a concept used by many quanta, or a representational feature that is not itself a learned algorithm. Conversely, a quantum may be a whole circuit spanning many layers rather than a single feature direction.

The useful takeaway is that SAEs may help discover quanta-like structure, but researchers should not assume the feature dictionary is already the periodic table of mechanisms.

## Interpretability Limits Under Scaling

The essay argues that interpretability researchers should care more about scaling theory. If the number of learned mechanisms grows with model scale, then fully reverse-engineering a model may become harder in a predictable way.

One worry is that larger models may not merely contain more of the same kind of structure. They may contain many more sparse, niche mechanisms. A model could improve on rare cases by adding mechanisms that are almost invisible under ordinary inspection.

That matters for ambitious interpretability. If every increase in scale adds a long tail of rare mechanisms, then tools such as sparse autoencoders, transcoders, and circuit analysis need to scale with the number and distribution of those mechanisms, not only with parameter count.

## Emergent Abilities And Metric Artifacts

Michaud discusses Rylan Schaeffer and collaborators' argument that many apparent emergent abilities may be artifacts of evaluation metrics. Accuracy and other discontinuous metrics can turn gradual probability shifts into sudden score jumps.

This is a real challenge for the quanta model if the model is supposed to explain every reported emergence result. But Michaud separates two claims:

- Some benchmark-level emergent abilities may be metric artifacts.
- Some internal learning transitions may still be genuinely sharp.

The important measurement question is whether the underlying probabilities, losses, circuits, or mechanisms change smoothly or discontinuously. A jump in benchmark accuracy is not enough by itself.

## Is Scaling Plateauing?

The quanta model gives a natural explanation for why many users may stop noticing pretraining improvements even if scaling still works. As the model moves farther down the power-law tail, new quanta are rarer and more specialized. They may matter a lot for niche users or technical contexts while barely changing everyday chat behavior.

This helps distinguish two claims:

- Pretraining scaling may still add real knowledge and mechanisms.
- The visible utility gain for average users may decline because common capabilities were learned earlier.

This also leaves room for post-training to become more important in product behavior without implying that pretraining has become scientifically irrelevant.

## Joint Scaling And A Major Open Problem

The original model treated parameter scaling, data scaling, and step scaling separately. Real training runs choose parameters, data, and compute jointly. Larger networks also often learn more efficiently, achieving the same loss in fewer steps.

A naive quanta model would say that the number of learned quanta is limited by the bottleneck among capacity, data, and training. But real joint scaling is not that simple. The interaction between network size, data availability, optimization dynamics, and learning speed remains one of the major unsolved problems.

This is where newer empirical results matter. Some Chinchilla reanalyses find exponents that do not fit the original model's expected relationship between parameter and data scaling. Michaud does not treat this as a clean refutation, but he does treat it as a reason to develop richer theories.

## Culture Of Scaling-Law Research

The essay ends with a methodological concern. Theories of neural scaling often give elegant explanations after the fact, but they do not always make distinct, risky predictions.

Michaud invokes the ideal of strong inference: propose alternatives, design experiments that distinguish them, and prefer clean falsification over merely fitting known curves. He admits that the quanta hypothesis is currently hard to falsify because researchers lack a precise operational definition of a quantum.

That self-critique is one of the most useful parts of the article. The quanta model is not presented as finished theory. It is a candidate research program whose value depends on whether it can be connected to measurable mechanisms and discriminating experiments.

## Practical Takeaways

- Scaling theory is not separate from interpretability; it is a theory of how model internals change as models get larger, see more data, or train longer.
- The quanta hypothesis tries to reconcile smooth average loss curves with sharp local capability changes.
- A quantum is best understood as a discrete learned mechanism, skill, or piece of knowledge, not necessarily a single neuron or single SAE feature.
- Power-law scaling can arise if quanta have power-law-distributed use frequencies.
- Per-token language model loss curves give suggestive evidence, but they are noisy and not decisive.
- Sparse autoencoders may help discover quanta-like structure, but SAE features and quanta should not be equated too quickly.
- Some apparent emergent abilities may come from metric discontinuities rather than sharp internal changes.
- Pretraining improvements may become less visible to ordinary users even if they still add rare, specialized mechanisms.
- Joint parameter-data-step scaling remains a major unresolved challenge.
- The field needs sharper experiments that distinguish competing neural scaling theories.

## Questions For Review

1. What problem is the quanta hypothesis trying to solve in neural scaling theory?
2. How can discrete learned mechanisms produce smooth aggregate scaling laws?
3. Why might an ability look emergent even if the global loss curve is smooth?
4. What is the difference between a quantum and a sparse autoencoder feature?
5. Why does the quanta model make interpretability harder and more important at large scale?
6. How do metric artifacts complicate claims about emergent abilities?
7. What is missing from the original quanta model's treatment of joint parameter-data scaling?
8. What kind of experiment would make the quanta hypothesis more scientifically useful?
