# Generated-Token Embeddings

Source note: This lesson is based on Sophie L. Wang, Phillip Isola, and Brian Cheung, "The Truth Lies Somewhere in the Middle (of the Generated Tokens)." Source: [arXiv PDF](https://arxiv.org/pdf/2605.09969). Processed source: [materials/processed/ai/the-truth-lies-somewhere-in-the-middle-generated-tokens.md](../../../materials/processed/ai/the-truth-lies-somewhere-in-the-middle-generated-tokens.md).

## Table of Contents

- [Medium-Length Version](#medium-length-version)
- [Full-Length Version](#full-length-version)

## Medium-Length Version

Most people think about embeddings as something you extract from an input. You give a model a prompt, take a hidden state somewhere, pool it somehow, and call that vector the representation of the prompt.

This paper asks a subtle question: for a decoder-only language model, is the best representation of a prompt actually in the prompt hidden states? Or does the model form a better semantic representation while it is generating?

The answer, in this paper, is that generation helps. The authors find that if an autoregressive model generates a continuation and we mean-pool hidden states across the generated tokens, the resulting embedding is more semantically aligned than any single generated-token hidden state. It is also often better than embeddings extracted from the prompt tokens.

That is surprising because the prompt already contains the information. If the prompt says "Poolbeg generating station after being closed down," the semantic content is already there. But in a decoder-only model, prompt-token states are constrained by causal masking: earlier prompt tokens cannot attend to later prompt tokens. Generated tokens, by contrast, are computed after the model has seen the full prompt and after it has started elaborating on it. The generated continuation can make the prompt's meaning more accessible in hidden-state space.

The authors test this with kernel alignment. For each example, they extract a language-model representation and compare the similarity structure it induces to a reference similarity structure. In vision-language experiments, the language model sees captions, while DINOv2 image embeddings provide the reference space. If two images are visually similar, then good caption embeddings should place their captions close together. They also test reasoning tasks using gold-solution embeddings and protein tasks using ESM-3 structure embeddings.

The basic representation comparison is simple. Let a model generate `T` tokens. The authors compare:

```text
last-token pooling: use h_T
mean-token pooling: average h_1, h_2, ..., h_T
```

Mean pooling wins. As more generated-token states are averaged, semantic alignment increases and eventually beats every individual token. No single token is the whole truth.

The authors then test whether the effect is just an artifact of averaging. It is not. If they shuffle image-text pairings so the reference structure is broken, the averaging advantage disappears. Pooling helps because the token states are centered on meaningful semantic information, not merely because averaging reduces noise.

They also show that different parts of a generation carry complementary information. If you average the first, middle, and final thirds of a generation separately, then convex mixtures of those segment embeddings can outperform any single segment. The same pattern appears in vision-language, reasoning, and protein domains.

One of the most interesting parts of the paper is the phase analysis. Qwen3-14B generations often move through phases: generic preamble, prompt repetition, recall, and task-specific response. The alignment curve changes across those phases. Even generic phrases like "Let me recall what I know" can induce a spike in semantic alignment before scene-specific content appears. That suggests these phrases are not just filler. They can correspond to internal-state transitions.

The phase structure is model-specific. If Qwen3 embeds its own generated tokens, the alignment trajectory has a recognizable shape. If it embeds another model's generated text, that shape can disappear. This means the phenomenon is not only about the surface string. It is about how a model processes its own generation trajectory.

The paper has an important limitation: this is more expensive than ordinary embedding extraction. You need to generate tokens before you can mean-pool them. It is also a probe, not a generative state. A mean-pooled hidden vector may be useful as an embedding, but that does not mean you can feed it back into the model as a valid soft token.

For your Scale AI prep map, this belongs squarely in the embeddings and interpretability intersection. It says that embedding quality is not only a question of model choice. It is also a question of extraction procedure. If embedding spaces are going to support retrieval, semantic evaluation, style-distance rewards, feature rewards, diversity metrics, or post-training diagnostics, then we need to care about where the vector came from.

The takeaway is: autoregressive generation is not just output production. It is also representation formation. The meaning of a prompt may be distributed across the hidden states produced while the model thinks, recalls, and elaborates.

## Full-Length Version

### The Problem

Embeddings are usually treated as fixed summaries of inputs. A system takes a piece of text, runs a model, extracts a vector, and uses that vector for retrieval, clustering, classification, semantic similarity, or evaluation.

But decoder-only language models create an awkward problem. They are causal. Each token representation can only see previous tokens. This makes prompt-side embeddings less straightforward than embeddings from bidirectional encoders. If you average all prompt-token states, earlier states may be missing later context. If you use only the last prompt token, you are betting that one position contains the whole meaning.

The paper asks whether this is the wrong place to look. Instead of only embedding the prompt, what if we let the model generate a continuation and then embed the hidden states formed during generation?

This changes the representation problem. The generated tokens are computed after the model has processed the full prompt. They are also part of a trajectory: each new token becomes part of the context for the next token. The model may elaborate, recall, reason, or correct itself. The paper's central claim is that semantic information is distributed across this trajectory.

### The Core Idea

For a prompt `p`, an autoregressive model generates a continuation of `T` tokens. At each generated-token position, the model has a hidden state. The authors focus mostly on final-layer hidden states:

```text
h_1, h_2, ..., h_T
```

They compare two simple ways to collapse this sequence into one vector:

```text
last-token pooling: h_T
mean-token pooling: (h_1 + h_2 + ... + h_T) / T
```

The claim is not that mean pooling is sophisticated. The claim is that the generated-token trajectory contains distributed semantic information, so even a simple average can beat any single token.

This is where the title comes from. The truth is not at the first generated token or the last generated token. It lies somewhere in the middle of the generated-token trajectory, and more precisely across many positions in that trajectory.

### How They Measure Semantic Quality

The paper uses kernel alignment rather than a single downstream classifier.

For each example, there are two representations:

- a language-model representation extracted from generated-token hidden states
- a reference representation from some target space

The authors compute similarity matrices over examples. One matrix says which examples are close according to the language-model embeddings. The other says which examples are close according to the reference embeddings.

Then they use debiased centered kernel alignment, or CKA, to measure whether those similarity structures match.

This matters because the task is not merely "does this embedding classify labels well?" It is "does this embedding organize the dataset in a way that matches a meaningful semantic structure?"

### Reference Spaces

The paper uses several domains.

In vision-language experiments, the language model receives image captions and generates text after prompts such as:

```text
Imagine what it would look like to see: {caption}.
```

The reference space is built from image embeddings, mainly DINOv2. If two images are visually similar, then good language-model representations of their captions should also be close.

In reasoning experiments, the model receives Math-500 or GPQA Diamond problems. The reference space comes from embeddings of gold solutions. Good generated-token embeddings should organize problems according to solution-relevant structure, not just wording.

In protein-language experiments, the model receives protein-related prompts. The reference space comes from ESM-3 protein-structure embeddings. Good language representations should align with biologically meaningful structure.

This design is useful because it tests whether the effect generalizes beyond one modality. The paper is not only saying "image captions get better embeddings." It is saying generated-token pooling improves alignment across visual, reasoning, and protein reference spaces.

### Main Result: Mean Pooling Generated Tokens Works

The first result is the cleanest. As the authors average more generated-token states, alignment improves. The final mean-pooled representation beats every individual generated-token representation.

This matters because a natural instinct is to use the last token. In a causal model, the last generated token has seen the whole prompt and the whole generated continuation before it. If any single token should contain the complete context, the last token seems like the best candidate.

But the last token is not best. The paper's evidence suggests that the semantic structure is not localized in one hidden state. It is distributed across many hidden states.

The effect is also stable across decoding seeds. Surface text can vary from one generation to another, but the semantic structure of the mean-pooled hidden states is still consistent.

### Segment Mixing: Different Parts Carry Complementary Information

The authors then ask whether the advantage is specific to averaging the entire generation or whether different token regions contribute complementary information.

They divide a generation into segments, such as first third, middle third, and final third. They compute an embedding for each segment, then study convex mixtures of those segment embeddings.

The result: interior mixtures often align better than any single segment. This means the first, middle, and final parts of the generation each carry useful information. The best representation is not simply "the beginning" or "the end." It combines information from across the trajectory.

The same pattern appears in reasoning and protein tasks. For Math-500 and GPQA Diamond, better alignment means the representation better matches gold-solution structure. For UniProt, better alignment means the representation better matches protein-structure embeddings.

This broadens the interpretation. Generated-token pooling is not just a trick for caption embeddings. It looks like a general fact about autoregressive trajectories: different generated-token regions can encode complementary pieces of the underlying semantic state.

### Prompt Tokens Behave Differently

One of the strongest comparisons is prompt tokens versus generated tokens.

The prompt already contains the semantic content. So if the method only works because there are more positions to average, prompt-token averaging should also work.

But it does not. Prompt-token representations do not get the same benefit from mean pooling. In the main vision-language comparison, generated-token embeddings are much more aligned than prompt-token embeddings.

The likely reason is causal masking. Earlier prompt tokens cannot attend to later prompt tokens, so their hidden states are incomplete summaries. Averaging them can dilute information. Generated tokens, by contrast, are computed after the full prompt is available and after the model has begun to turn that prompt into a continuation.

This is the key conceptual shift: generation is not just a response to an already-formed representation. Generation helps form the representation.

### Why Averaging Is Not Enough By Itself

A skeptical explanation would be: averaging always improves things because it reduces noise.

The authors test this by breaking semantic correspondence. In image-language experiments, they shuffle image-text pairings. If averaging only helps by variance reduction, it might still improve alignment even when the image-caption relationship is broken.

It does not. Once correspondence is broken, the averaging advantage disappears.

That suggests mean pooling helps because the token states are meaningfully organized around the right semantic structure. Averaging unrelated hidden states is not magic. The benefit depends on the model's generated-token trajectory carrying real semantic information.

### Independent Generations And Multiple Views

The paper also finds that mixing across independent generations can help. If the same prompt is decoded with different random seeds, convex combinations of those generation embeddings can outperform any one generation.

This is intuitive. Different generations may elaborate different aspects of the prompt. One continuation may recall an object's location. Another may describe its appearance. Another may mention context. Combining them can produce a more complete representation.

The effect is even clearer when the model generates from different views of the same image. On DCI, region-conditioned captions describe different parts of an image. Combining those region-conditioned generated-token embeddings improves alignment, because the combined representation contains more of the scene.

This connects to an older idea in embedding spaces: vector combinations can be meaningful. But the paper applies that idea inside a single autoregressive generation, where token-level hidden states are usually treated as transient computation rather than as useful representational material.

### Generation Has Interpretable Phases

The paper does more than compare final embeddings. It studies how alignment changes across the generation trajectory.

In Qwen3-14B, especially with thinking mode, the generated text often moves through recognizable phases:

- generic preamble
- prompt repetition
- recall
- caption-specific or task-specific response

Alignment changes across these phases. When the model starts recalling relevant information, the hidden states move closer to the reference semantic structure.

This creates a useful interpretability lens. The generated text is not only an answer. It is a trace of state changes. When the model says something like "Let me recall what I know," that phrase may correspond to a real shift in hidden-state geometry.

The authors test this by injecting the phrase "Let me recall what I know" into a generation with thinking mode disabled. Even before scene-specific information appears, the phrase induces a spike in alignment.

This is one of the most interesting findings. It suggests that certain generic thinking phrases can act like control tokens for internal state. They are not informative in ordinary semantic content, but they can move the model into a more recall-oriented representation.

### Model-Specific Dynamics

The authors separate generation from embedding. They generate text with one model, then embed it with another.

The phase structure largely disappears when the embedding model did not generate the text. That matters because it rules out a simple text-only explanation. The phenomenon is not just "the string contains certain words." It is about how a model processes its own generated trajectory.

They also observe that inconsistent generated text can degrade alignment. For example, OLMo3 may incorrectly place Poolbeg Generating Station in Canada, while Qwen3 correctly treats it as being in Dublin. If Qwen3 embeds OLMo3's inconsistent continuation, the representation can initially improve and then degrade as false details accumulate.

This suggests that generated-token embeddings are sensitive not only to output fluency, but to whether the generated trajectory stays consistent with the embedding model's internal knowledge.

### Layer Averaging Does Not Work The Same Way

The authors ask whether averaging helps simply because more hidden states are being combined. If so, averaging across layers might help too.

It does not. Averaging across layers performs about as well as the best single layer, but does not improve beyond it.

So the important axis is the token trajectory, not arbitrary averaging over hidden states. Generated-token states appear to carry complementary information over time, while layer states are more redundant for this purpose.

### Why This Matters For Embeddings

The practical lesson is that embedding extraction is an experimental design choice.

If you use an embedding for retrieval, clustering, semantic distance, style distance, or evaluation, you are not only choosing a model. You are choosing:

- prompt template
- whether to generate
- how many tokens to generate
- which layer to use
- whether to pool prompt tokens or generated tokens
- whether to mix multiple generations or views

This paper says those choices can qualitatively change the semantic geometry you get.

For decoder-only models, generated-token mean pooling may be a simple way to get better semantic embeddings without training a separate encoder. It lets the model elaborate the input before extracting the vector.

### Why This Matters For Interpretability

The interpretability angle is that generation is a trajectory of internal states.

Instead of asking only "what did the model output?", we can ask:

- when did the hidden states become aligned with the target semantic structure?
- which generated phrases correspond to state transitions?
- do recall-like phrases move the model toward more accurate representations?
- when does false or inconsistent text start degrading the representation?
- do different models process the same generated text differently?

This treats text generation as a coupled output-state process. The tokens are both outputs and future inputs. That makes autoregressive generation a natural object for studying how model state evolves.

### Why This Matters For Scale AI Prep

You had already flagged embeddings as an intersection topic between interpretability and post-training. This paper fits that intersection unusually well.

Embedding-based systems often quietly become evaluation systems. They measure semantic similarity, novelty, diversity, retrieval relevance, answer consistency, style match, and sometimes reward-model features. If the embedding extraction method is weak, the evaluation signal is weak.

This paper suggests that generated-token embeddings may better capture the model's internal semantic state than prompt-token embeddings. That could matter for:

- semantic evaluators for open-ended tasks
- diversity metrics for creative post-training
- retrieval representations produced by decoder-only models
- internal-state diagnostics during reasoning
- feature or embedding rewards that depend on semantic distance
- detecting when a generation has entered recall, inconsistency, or task-specific phases

But it also creates caution. These embeddings require generation, so they are slower and more prompt-sensitive. If used as reward signals, the policy might learn to manipulate the generation trajectory that produces the embedding. Any post-training use would need adversarial validation.

### Limitations

The first limitation is cost. Standard embeddings can be extracted in one forward pass. Generated-token embeddings require autoregressive decoding, so cost grows with the number of generated tokens.

The second limitation is metric scope. CKA measures relational alignment across a dataset. It does not guarantee that each individual embedding is correct, nor does it prove that the embedding is best for every downstream task.

The third limitation is usability. A mean-pooled hidden state is useful as a representation, but it is not necessarily a valid model state for continued generation. The authors explicitly frame these averages as probes, not as soft concept tokens.

The fourth limitation is dependence on prompts and models. The paper mainly uses Qwen3-14B with thinking mode in the main experiments. The exact dynamics may differ across model families, decoding settings, prompt templates, and domains.

### Final Takeaway

The main idea is simple and powerful: in an autoregressive model, meaning can be distributed across generated-token hidden states.

A prompt embedding is not always the best representation of the prompt. Letting the model generate can make the prompt's meaning more accessible. Mean-pooling the generated-token trajectory then captures a richer semantic embedding than any single token.

For embeddings, this is a better extraction recipe. For interpretability, it is a way to study internal-state dynamics during generation. For post-training and evaluation, it is a warning that the quality of a semantic signal depends heavily on how the representation is produced.
