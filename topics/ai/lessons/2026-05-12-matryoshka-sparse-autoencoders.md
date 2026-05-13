# Matryoshka Sparse Autoencoders

Source note: This lesson is based on Bart Bussmann, Noa Nabeshima, Adam Karvonen, and Neel Nanda, "Learning Multi-Level Features with Matryoshka Sparse Autoencoders." Source: [arXiv PDF](https://arxiv.org/pdf/2503.17547). Processed source: [materials/processed/ai/learning-multi-level-features-matryoshka-sparse-autoencoders.md](../../../materials/processed/ai/learning-multi-level-features-matryoshka-sparse-autoencoders.md).

## Table of Contents

- [Medium-Length Version](#medium-length-version)
- [Full-Length Version](#full-length-version)

## Medium-Length Version

Sparse autoencoders, or SAEs, are one of the main tools in modern mechanistic interpretability. The goal is to take dense neural-network activations and represent them as a sparse combination of human-interpretable features. If the model internally represents a concept, an SAE might learn a latent that activates on that concept.

But normal SAE training has a problem. The objective rewards reconstruction and sparsity. That sounds reasonable, but it can create feature pathologies. When the dictionary gets larger, the SAE may stop preserving broad, useful features and instead optimize the sparsity objective in weird ways.

The paper identifies three related problems.

Feature splitting happens when a broad concept fragments into many narrower latents. Instead of a general punctuation feature, the SAE might learn separate comma, period, and question-mark features, losing the high-level punctuation feature.

Feature absorption happens when a broad feature remains but develops holes. For example, a female-name feature might fire on Mary, Jane, and Sarah, but not Lily, because a Lily-specific latent has absorbed that case.

Feature composition happens when independent concepts are merged. Instead of red and triangle, the SAE learns red triangle because that can be sparser on the training distribution.

These are not small cosmetic issues. If you want to use SAE features for auditing, steering, monitoring, or rewards, then holes and compositions are dangerous. A monitor for a high-level concept might miss exactly the cases absorbed by specialized features.

Matryoshka SAEs solve this by training nested dictionaries. Imagine one SAE with 65,536 latents, but also smaller prefix SAEs inside it: the first 2,048 latents, the first 6,144, the first 14,336, and so on. Each prefix must reconstruct the input. That means early latents cannot rely on later specialized latents. They are pressured to learn general, reusable features. Later latents can specialize, but they cannot erase the need for early general features.

The training objective is simple: add reconstruction losses for multiple prefix sizes. If the maximum dictionary size is `m` and the nested sizes are `m1 < m2 < ... < mn = m`, then each prefix reconstruction gets its own loss. This is inspired by Matryoshka Representation Learning, where one embedding vector is trained to remain useful at multiple prefix lengths.

The authors test the method in three settings.

First, in a synthetic toy model with hierarchical features, a normal SAE shows absorption: parent features fail to activate when child features are present. The Matryoshka SAE recovers the true feature hierarchy more cleanly.

Second, in a TinyStories transformer, they show a concrete absorption example. A broad female-words latent in a standard SAE develops holes for names like Lily and Sue after more specific name latents appear. A Matryoshka SAE preserves the broad female-words feature while still learning the specific names.

Third, on Gemma-2-2B, they train Matryoshka SAEs on layer 12 residual stream activations using 500M tokens from The Pile. The full dictionary size is 65,536, with five nested prefix sizes. They compare against several SAE baselines.

The results are strong. Matryoshka SAEs slightly underperform BatchTopK on raw reconstruction. At L0 = 40, they explain about 70% of variance versus 72% for BatchTopK. But downstream language-model loss is comparable at higher sparsities, and feature quality is much better.

At L0 = 40, the feature absorption rate is about 0.05 for Matryoshka versus 0.49 for BatchTopK. For first-letter features, Matryoshka needs about one latent per letter, while BatchTopK splits the same information across about three latents. Matryoshka also improves sparse probing, targeted probe perturbation, and spurious correlation removal. Decoder cosine similarity is lower, suggesting less feature composition.

The main limitation is trade-off. Matryoshka SAEs reconstruct slightly worse and train slower. With five nested dictionaries, the authors report about 50% more training time. The paper also relies heavily on automated metrics, so human interpretability and practical workflows need more validation.

The takeaway is that SAE quality is not just reconstruction quality. If the goal is interpretability, we need features that preserve high-level concepts while allowing low-level specificity. Matryoshka SAEs are a clean way to train that structure directly into the dictionary.

## Full-Length Version

### Why This Paper Exists

Sparse autoencoders are supposed to solve a core interpretability problem: neural network activations are dense and superposed, but we want a basis of simpler features. An SAE maps dense activations into a sparse latent vector and then reconstructs the original activation from those sparse latents.

The hope is that each latent corresponds to a concept: a syntactic pattern, a topic, a sentiment, a safety-relevant behavior, a name category, a factual relation, or some other model-internal feature.

The difficulty is that the SAE objective is not "learn human concepts." It is closer to "reconstruct the activation using a small number of active latents." Sparsity is only a proxy for interpretability. When the proxy is optimized hard, it can produce features that are technically sparse but not the conceptual structure we wanted.

This paper asks: can we change the SAE training objective so large dictionaries preserve both broad and specific features?

### The Three SAE Pathologies

The paper focuses on three problems that become more severe as SAE dictionary size grows.

Feature splitting is the simplest. A broad feature gets replaced by several narrower features. A punctuation feature might split into comma, period, and question-mark features. Each narrow feature is interpretable, but the broad feature disappears.

That matters because the underlying language model may use the broad concept. If the model has a real direction for punctuation-like structure, losing that direction makes the SAE less useful for circuit analysis or steering.

Feature absorption is subtler. The broad feature remains, but it develops systematic holes. A general female-name latent may fire on Mary, Jane, and Sarah but stop firing on Lily because a Lily-specific latent handles Lily. The parent concept is still present, but it is no longer reliable.

Absorption is dangerous for safety. If a monitor is supposed to detect a broad category, holes are exactly where failures hide.

Feature composition happens when independent features are merged into one latent. If red and triangle often co-occur, the SAE may learn red triangle instead of learning red and triangle separately. This helps sparsity but damages disentanglement.

The common cause is the flat sparsity objective. The SAE is not asked to preserve a hierarchy of abstraction. It is only asked to reconstruct with few active latents.

### The Matryoshka Idea

Matryoshka SAEs borrow from Matryoshka Representation Learning. A Matryoshka embedding is useful at multiple prefix lengths: the first small slice gives a coarse representation, and larger slices add detail.

The SAE version applies the same idea to dictionary latents.

Suppose the full SAE has `m` latents. Instead of training only the full dictionary, define nested prefix sizes:

```text
m1 < m2 < ... < mn = m
```

Each prefix must reconstruct the input. The first `m1` latents must be useful on their own. The first `m2` latents must be useful on their own. The full `m` latents also reconstruct the input.

This creates an abstraction hierarchy. Early latents are used in every prefix reconstruction, so they are pressured to learn broad, reusable features. Later latents are only used in bigger dictionaries, so they can specialize.

The full training loss is the sum of reconstruction losses across the prefix sizes. In the Gemma experiments, the authors use BatchTopK activations, which keep the largest activations across a batch so average sparsity is controlled while per-example sparsity can vary.

### Why Nested Prefixes Fight Absorption

In a normal SAE, if a child latent handles Lily, the model can let the broad female-name latent stop firing on Lily. The reconstruction still works, and the sparse objective may prefer the specialized latent.

In a Matryoshka SAE, the broad female-name latent is likely to live earlier in the dictionary. Smaller prefix reconstructions cannot use later Lily-specific latents. Therefore, the early broad latent must still reconstruct Lily-like cases when only the small prefix is available.

This does not prevent specific features from existing. It prevents specific features from absorbing the general feature's job.

That is the whole design: specialize without destroying abstraction.

### Toy Model Experiment

The first experiment uses a synthetic hierarchical feature dataset. Features form a tree. A child feature can only appear when its parent appears, mimicking relationships like "comma implies punctuation."

A standard SAE and a Matryoshka SAE are trained with the same total number of latents.

The standard SAE shows absorption: when child features are active, the parent latent often does not fire. Its decoder vectors also show high similarity between parent and child latents, suggesting redundant and entangled representations.

The Matryoshka SAE recovers the feature structure more cleanly. Parent features stay active when children appear, and decoder vectors align more cleanly with the ground-truth feature directions.

This toy setting matters because the authors know the true feature hierarchy. It gives a clean demonstration of the mechanism.

### TinyStories Experiment

The second experiment studies a 4-layer TinyStories transformer. The authors train reference SAEs of different sizes on attention block outputs, MLP outputs, and the residual stream.

They observe a common pattern: small SAEs learn broad concepts, while larger SAEs fragment those concepts into narrower cases.

The key example is a female-words feature. In a 300-latent SAE, one latent fires on words like she, her, girl, Lily, and Sue. In a 1,000-latent SAE, a related broad female-words latent develops holes. It stops firing on Lily because a Lily-specific latent has absorbed that case.

A 25k-latent Matryoshka SAE behaves differently. It keeps the broad female-words feature while also learning specialized name latents. This is exactly the desired multi-level structure.

### Gemma-2-2B Experiment

The main experiment uses Gemma-2-2B. The authors train on residual stream activations from layer 12 using 500M tokens from The Pile.

The full Matryoshka dictionary has 65,536 latents. The nested prefix sizes are:

```text
2048, 6144, 14336, 30720, 65536
```

They train at average sparsities of 20, 40, 80, 160, and 320 active latents per token.

They compare Matryoshka SAEs against several SAE architectures, including BatchTopK baselines, using SAE Bench-style evaluations.

### Reconstruction Results

Matryoshka SAEs reconstruct slightly worse than standard BatchTopK SAEs. At L0 = 40, Matryoshka explains around 70% of activation variance, while BatchTopK explains around 72%.

This is expected. Matryoshka SAEs are constrained. They cannot freely optimize reconstruction by letting later specialized features absorb broad features.

However, downstream language-model cross-entropy is comparable at larger L0s when reconstructed activations are fed back into the model. This suggests the raw reconstruction penalty may overstate the practical cost.

The lesson is important: reconstruction fidelity is not the same as interpretability quality.

### Absorption And Splitting Results

The paper uses first-letter classification probes to quantify absorption and splitting.

At L0 = 40, Matryoshka SAEs have an absorption rate around 0.05. BatchTopK SAEs have an absorption rate around 0.49.

That is a large difference. It means the standard SAE often fails to preserve the broad first-letter feature when specific token latents appear, while Matryoshka mostly avoids that failure.

For splitting, Matryoshka needs about one latent per first-letter feature at L0 = 40. BatchTopK spreads the same information across about three latents.

Together, these results show that nested dictionary training does what it was designed to do: preserve high-level features while allowing specialization.

### Sparse Probing And Concept Isolation

The authors then test whether the features are useful for downstream interpretability tasks.

Sparse probing asks whether individual SAE latents encode semantically useful concepts. The paper uses 35 binary classification tasks across professions, sentiment, language, code, and news.

Spurious correlation removal tests whether the SAE can isolate a confounding signal. For example, if a classifier learns nurse = female on biased data, can the SAE identify and remove the gender signal so the classifier focuses on profession?

Targeted probe perturbation tests whether ablating latents for one class affects only that class rather than unrelated classes. Good features should have isolated causal effects.

Matryoshka SAEs perform strongly on these tasks. They outperform baselines on targeted probe perturbation and spurious correlation removal, and outperform BatchTopK on sparse probing across sparsity levels.

This is the most practically important part of the paper. The method does not only look better by an internal metric; it improves tasks that resemble actual interpretability workflows.

### Feature Composition And Automated Interpretability

The paper also measures decoder cosine similarity. High maximum cosine similarity suggests multiple latents share similar information, which is a sign of feature composition or redundancy.

Matryoshka SAEs have lower maximum cosine similarity, suggesting less composition.

For automated interpretability, the authors use an LLM judge workflow: generate explanations for latents based on activating examples, then score how well those explanations predict activation. Matryoshka features are comparable to BatchTopK and better than many alternatives.

This is useful but should be treated carefully. Automated interpretability scores are proxies. They do not replace human inspection or causal validation.

### Scaling Results

The authors train Matryoshka SAEs with dictionary sizes of 4k, 16k, and 65k. Most metrics improve or stay stable with scale. Alternative architectures often degrade as dictionary size grows.

This is a central selling point. If interpretability is supposed to scale to frontier models, larger dictionaries are necessary. But if larger dictionaries destroy broad features, they become less useful. Matryoshka SAEs are meant to make scaling dictionaries safer.

### Ablations

The appendix studies variants.

Weighted Matryoshka changes the loss weighting to emphasize the full dictionary more heavily. This improves reconstruction-like metrics but worsens feature quality metrics such as absorption and spurious correlation removal. Equal weighting seems important for hierarchy.

Stop-gradient variants isolate nested dictionaries more strongly. They can help some low-L0 absorption metrics but hurt loss recovered, sparse probing, and spurious correlation removal.

Changing the number of nested groups creates trade-offs. Three groups behaves more like BatchTopK and weakens some hierarchy benefits. Ten groups improves some absorption metrics but hurts other performance. The five-group setup appears to be a reasonable compromise.

### Limitations

The first limitation is reconstruction. Matryoshka SAEs slightly underperform standard SAEs on raw reconstruction. For some applications, this may be unacceptable.

The second limitation is training cost. Multiple nested objectives increase training time. With five nested dictionaries, the authors report roughly 50% more training time.

The third limitation is measurement. The paper relies heavily on quantitative proxies and automated interpretability. These are useful but incomplete. Human interpretability and real research workflows need more study.

The fourth limitation is scope. The paper tests specific models and layers, especially Gemma-2-2B layer 12. The method likely generalizes, but the exact trade-offs may differ by architecture, layer, activation site, and training budget.

### Why This Matters For Scale AI Prep

This paper is very relevant to the interpretability/post-training/embeddings intersection.

First, it improves sparse feature spaces. If features are going to become monitors, steering handles, rubric inputs, or reward signals, they need to be reliable. A feature with absorption holes is dangerous as a monitor.

Second, it reinforces a key distinction: reconstruction quality is not feature quality. For scalable supervision, the feature basis must preserve the concepts we care about, not merely reconstruct activations.

Third, it connects to embeddings. Matryoshka-style nesting is a way to organize representation spaces across abstraction levels. Earlier latents behave like coarse, high-level coordinates; later latents add specificity. That is exactly the kind of structure useful for comparing semantic, behavioral, and internal-state signals.

Fourth, it pairs naturally with Gemma Scope, Qwen-Scope, Natural Language Autoencoders, Features as Rewards, and RL for Knowledge Awareness. All of those become stronger if the underlying feature dictionaries are less absorbed and less composed.

### Final Takeaway

Matryoshka SAEs are a simple but important modification to SAE training. Instead of letting a large flat dictionary optimize sparsity however it wants, they force nested prefixes to reconstruct the input at multiple scales.

That pressure preserves broad concepts while allowing later latents to specialize. The result is slightly worse reconstruction but substantially better feature behavior: less absorption, less splitting, less composition, and better concept isolation.

For interpretability, this paper is a reminder that the objective matters. If we train for reconstruction plus sparsity alone, we may get features that look clean locally but fail as reliable abstractions. If we train for multi-level structure, we can get dictionaries that better match how concepts are actually organized.
