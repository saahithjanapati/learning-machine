# Language Models Use Trigonometry to Do Addition

Source note: Subhash Kantamneni and Max Tegmark, "Language Models Use Trigonometry to Do Addition." arXiv:2502.00873v1, submitted February 2, 2025. Source page: [arxiv.org/abs/2502.00873](https://arxiv.org/abs/2502.00873). Processed source: [materials/processed/ai/language-models-use-trigonometry-to-do-addition.md](../../../materials/processed/ai/language-models-use-trigonometry-to-do-addition.md).

Original sources: [arXiv abstract](https://arxiv.org/abs/2502.00873), [arXiv PDF](https://arxiv.org/pdf/2502.00873).

## Table of Contents

- [Medium-Length Version](#medium-length-version)
- [Full-Length Version](#full-length-version)
- [The Central Question](#the-central-question)
- [Why Addition Is A Good Interpretability Target](#why-addition-is-a-good-interpretability-target)
- [The Task Setup](#the-task-setup)
- [What A Generalized Helix Means](#what-a-generalized-helix-means)
- [How The Authors Test Whether The Helix Is Real](#how-the-authors-test-whether-the-helix-is-real)
- [The Clock Algorithm](#the-clock-algorithm)
- [How GPT-J Implements The Algorithm](#how-gpt-j-implements-the-algorithm)
- [What The Neuron Analysis Adds](#what-the-neuron-analysis-adds)
- [What The Paper Does Not Yet Explain](#what-the-paper-does-not-yet-explain)
- [Why This Matters For Mechanistic Interpretability](#why-this-matters-for-mechanistic-interpretability)
- [Limitations And Critique](#limitations-and-critique)
- [Memory Checklist](#memory-checklist)

## Medium-Length Version

### Medium Thesis

This paper reverse engineers how language models do a small but surprisingly revealing mathematical task: two-digit addition.

The authors study GPT-J, Pythia-6.9B, and Llama3.1-8B on prompts like:

```text
37 + 58 =
```

where both inputs are between 0 and 99 and the answer can be emitted as a single token. The models are not perfect, but they are good enough to study mechanistically: GPT-J gets `80.5%`, Pythia-6.9B gets `77.2%`, and Llama3.1-8B gets `98.0%` accuracy.

The main claim is that these models represent numbers as generalized helices. A helix is useful because it combines two things numbers need:

- a line-like direction for magnitude;
- circular components for modular patterns like parity, units digits, and base-10 cycles.

So the representation of a number is not just "bigger numbers go farther along a line." It also contains repeating sine/cosine-like components with periods such as `2`, `5`, `10`, and `100`.

That lets the model represent facts like:

- `48` is bigger than `23`;
- `48` is even;
- `48` has units digit `8`;
- `48` is close to `50`;
- adding `7` should rotate the units-digit component by seven steps.

The paper then argues that the models use a version of the `Clock` algorithm. To solve `a + b`, the model represents `a` and `b` as helices, moves those helices to the final token, constructs the helix for `a + b`, and reads that answer helix into the output logits.

### The Mechanistic Story

The authors do not only make a geometric plot. They use causal methods.

First, they fit a helical representation to residual-stream activations. Then they use activation patching: they corrupt a prompt, patch in either the real clean activation or a fitted helix version of it, and measure whether the clean answer logit is restored. The fitted helix restores a large amount of the model behavior, often beating low-dimensional PCA baselines.

This is the key difference between "nice visualization" and "mechanistic evidence." The helix is not just an after-the-fact pattern. It contains information the model uses.

The paper then focuses on GPT-J because its MLPs are simpler to analyze. The rough division of labor is:

- attention heads in middle layers move the `a` and `b` helices to the final token;
- MLPs 14-18 build the `a + b` helix;
- MLPs 19-27 read from the `a + b` helix and write the answer into logits;
- some late attention heads also write answer-helix information toward logits.

The neuron-level analysis supports this story. Important neuron preactivations can often be modeled as functions of `a`, `b`, and `a + b` using the same periods as the helix. Earlier important neurons read from `a` and `b`; later important neurons read more from `a + b` and have more direct effect on logits.

### Why This Is Interesting

This paper is important because it connects two sides of mechanistic interpretability that often stay separate.

One side studies features: what internal representation corresponds to a human-understandable concept? Here, the feature is number, represented as a generalized helix.

The other side studies circuits: which attention heads, MLPs, and neurons are responsible for a behavior? Here, the behavior is addition, and the circuit manipulates the number helix.

The paper gives both:

```text
feature: numbers live on a helix
circuit: model components move and transform helices to compute addition
```

That is why the result is stronger than "LLMs have number directions." It is a representation-level explanation of a real mathematical behavior.

### Medium Takeaway

The lesson is not simply that LLMs use trigonometry in a literal conscious sense. The lesson is that LLMs can learn internal variables with trigonometric structure because those variables make arithmetic easier.

For addition, the model appears to use a robust coordinate system: numbers are partly represented by circular clocks, and addition corresponds to rotating those clocks. That makes the paper a concrete example of how a learned neural network can implement an interpretable algorithm inside messy transformer components.

## Full-Length Version

## The Central Question

The central question is:

**What is actually happening inside a language model when it adds two numbers?**

That question is harder than it sounds. We can observe the input and output, but a language model is not running ordinary Python arithmetic. It has token embeddings, residual streams, attention heads, MLPs, nonlinearities, and output logits. If it answers `37 + 58 = 95`, where did the `95` come from?

There are several possible explanations.

The model might memorize common sums. It might use a bag of heuristics. It might use linear number directions. It might learn something like digit-wise arithmetic. Or it might learn a stranger internal representation that is not obvious from surface behavior.

This paper argues for the last possibility. In the studied models, numbers appear to be represented as generalized helices, and addition appears to be performed by manipulating those helices.

## Why Addition Is A Good Interpretability Target

Addition is a useful target because it is simple enough to test exhaustively but complex enough to require real computation.

For two numbers `a` and `b` in `[0, 99]`, there are 10,000 possible additions. That is small enough to sweep over. The answer is also easy to verify. If the model says `82` for `37 + 58`, we know it is wrong.

At the same time, addition is not a random lookup table if the model generalizes. The model needs to combine two inputs, track digit-like structure, deal with carries, and output a specific result.

This makes addition a good bridge between toy mechanistic interpretability and real LLM capabilities. The task is simple, but it is still a genuine mathematical behavior.

## The Task Setup

The authors study three autoregressive transformers:

- GPT-J, with about 6B parameters;
- Pythia-6.9B;
- Llama3.1-8B.

They use prompts of the form `a + b =`, where `a` and `b` are integers from 0 to 99. They choose this range partly because the relevant numbers and answers can be single tokens for the models under study. This avoids confounding the analysis with multi-token digit generation.

The reported accuracies are:

| Model | Accuracy on `a + b`, `a,b in [0,99]` |
| --- | ---: |
| GPT-J | `80.5%` |
| Pythia-6.9B | `77.2%` |
| Llama3.1-8B | `98.0%` |

The main mechanistic analysis focuses on GPT-J. That is a pragmatic choice. GPT-J uses a simpler MLP form, which makes neuron preactivation analysis more tractable.

## What A Generalized Helix Means

The first major finding is about number representation.

When the model sees a number token like `37`, its residual stream contains structure. The authors analyze the residual stream after layer 0 for numbers from 0 to 360 and find two patterns.

First, there is linear structure. A principal component tracks number magnitude, especially for numbers in the same tokenization regime.

Second, there is periodic structure. Fourier analysis shows strong components at periods like `2`, `5`, and `10`, with `100` also playing a role.

This makes intuitive sense if you think about what arithmetic needs.

The linear part helps represent magnitude. `87` is larger than `12`.

The periodic parts help represent modular facts. A period-2 component tracks even versus odd. A period-10 component tracks the units digit. A period-100 component can track position within the two-digit range.

The authors combine these into a generalized helix. Conceptually, the representation has:

```text
linear number component
period-2 circle
period-5 circle
period-10 circle
period-100 circle
```

For a normal 3D helix, moving forward increases height while rotating around a circle. Here, there are multiple circular components plus a line. That is why the paper calls it a generalized helix.

This is a good mental image:

```text
number = position on a line + position on several clocks
```

Each clock has a different period. One clock wraps every 2 steps, another every 5, another every 10, another every 100.

## How The Authors Test Whether The Helix Is Real

A geometric pattern by itself is not enough. Neural activations often contain many extractable patterns, and some of them are not used by the model.

The authors therefore use activation patching.

The basic idea is:

1. Run the model on a clean prompt like `a + b =`.
2. Run the model on a corrupted prompt like `a' + b =`.
3. Patch some clean internal representation into the corrupted run.
4. Measure whether the logit for the clean answer `a + b` is restored.

If patching a representation restores the right answer, that representation is causally relevant.

The authors patch several things:

- the full activation;
- a PCA approximation;
- a polynomial fit;
- a circular fit;
- a generalized helix fit.

The helix fit performs strongly. It often beats PCA baselines with similar dimensionality and approaches the effect of patching the full activation. This means the helical variables preserve much of the information the model actually uses for addition.

They also test other numerical tasks. The helix is causally relevant for tasks like subtraction, modular arithmetic, multiplication-like transformations, and integer division. But it does not always beat PCA. That is important: the helix is a major part of number representation, especially for addition, but it is not the whole theory of numbers in LLMs.

## The Clock Algorithm

The next question is how the model uses the helix to compute `a + b`.

The proposed answer is the `Clock` algorithm. The name comes from earlier work on modular addition in small transformers.

The intuition is simple. If a number is represented partly by clocks, then adding means rotating the clocks.

For example, suppose the period-10 clock represents the units digit. Adding `7` means rotating that clock by 7 steps. A period-2 clock tracks parity, so adding an odd number flips it, while adding an even number preserves it.

The paper's version of the algorithm is:

1. Embed `a` and `b` as helices on their own tokens.
2. Move those operand helices to the final token.
3. Construct the helix for `a + b`.
4. Read the answer helix into logits for the answer token.

The key representational object is `helix(a + b)`. If the model can build that internal representation, then later components can map it to the answer token.

## How GPT-J Implements The Algorithm

The authors use patching to identify which parts of GPT-J matter for addition.

The broad result is that MLPs dominate the computation, while attention heads provide targeted routing and some output help.

### Attention Heads

The authors find that a small set of attention heads carries most of the attention-head effect. Patching 17 heads recovers about 80% of the effect of patching all 448 heads, and they analyze a rounded set of 20 heads.

They divide these heads into three types:

- `a,b` heads: move the operand helices from the number tokens to the final token;
- `a+b` heads: output answer-helix information toward logits;
- mixed heads: combine or transmit some of all three representations.

Most `a,b` heads are in layers 9-14. Most `a+b` heads are late, in layers 24-26, with one in layer 19. Mixed heads appear around layers 15-18.

This fits the story that attention mostly moves information into place.

### MLPs

The MLP story has two stages.

MLPs 14-18 appear to build the `a + b` helix. Their outputs are increasingly well modeled by `helix(a + b)`, and their effects are mostly indirect. That means they are building an intermediate representation that downstream components use.

MLPs 19-27 appear to read from the `a + b` helix and write to logits. Their direct effect on the answer logit is larger, which suggests they are closer to the final output.

So the GPT-J circuit has a clean temporal structure:

```text
middle attention: move a and b
MLPs 14-18: build answer helix
MLPs 19-27: read answer helix into logits
```

That is not the same as saying the model has a neat hand-coded addition module. It is still a distributed transformer computation. But the computation has interpretable phases.

## What The Neuron Analysis Adds

The neuron analysis goes one level deeper.

In GPT-J, an MLP first projects the residual stream into neuron preactivations. The authors ask whether important neuron preactivations can also be explained in helical terms.

They use attribution patching to identify a sparse set of influential neurons. Keeping about 1% of GPT-J's neurons while mean-ablating the rest still allows the model to complete around 80% of prompts, so this subset captures much of the addition behavior.

Then they fit important neuron preactivations as functions of:

- `a`;
- `b`;
- `a + b`;
- periodic components with periods `2`, `5`, `10`, and `100`.

Many important neurons show clear periodic patterns. Some are best explained by terms involving `a` and `b`; others are best explained by terms involving `a + b`.

This supports the MLP-stage story:

- earlier important neurons read from operand helices;
- later important neurons read from the answer helix and affect logits more directly.

This is valuable because it prevents the explanation from stopping at the MLP output. The authors can say something about what individual neurons are reading.

## What The Paper Does Not Yet Explain

The authors are explicit that they do not fully isolate the exact micro-algorithm that builds `helix(a + b)` from `helix(a)` and `helix(b)`.

They hypothesize that the model may use trigonometric identities like:

```text
cos(a + b) = cos(a)cos(b) - sin(a)sin(b)
```

That would make sense because if numbers are represented by sine and cosine components, addition can be computed by combining those components. But the paper does not pin down the exact identity-level implementation inside the network.

There is also a broader caution. Even if the Clock algorithm explains much of addition in these models, it may not be the only algorithm. Prior work on small transformers found alternative mechanisms, such as the `Pizza` algorithm. Different model scales, architectures, and tokenizers could learn modified or mixed strategies.

For example, models that tokenize each digit separately must solve an additional problem: they need to collate digit-token information into a number representation before doing arithmetic.

## Why This Matters For Mechanistic Interpretability

The paper matters because it gives a rare representation-plus-circuit explanation of a language-model capability.

Many mechanistic interpretability projects focus on features. They ask: where is a concept represented? This paper does that for numbers by identifying a generalized helix.

Other projects focus on circuits. They ask: which heads and MLPs matter for the behavior? This paper also does that, by identifying how attention heads, MLPs, and neurons contribute to addition.

The stronger thing is the combination:

```text
numbers are represented as helices
the model computes addition by moving and transforming those helices
```

That is closer to a mechanistic explanation than simply saying "this layer has number information" or "this head is important."

It also shows why nonlinear feature geometry matters. The strongest version of the linear representation hypothesis says human-interpretable concepts are represented as linear directions. This paper supports a more nuanced view. Some concepts may be represented on nonlinear manifolds, like circles or helices, while still being accessible to linear components locally.

## Limitations And Critique

The first limitation is scope. The task is two-digit addition with single-token inputs and outputs. That is useful for clean analysis, but it is not the same as explaining long multi-step mathematical reasoning.

The second limitation is model coverage. The authors study three mid-sized LLMs, and the detailed circuit analysis focuses mostly on GPT-J. Llama3.1-8B and Pythia-6.9B show similar helical evidence, but the component-level story is less fully developed for them.

The third limitation is that the helix is not sufficient for every numerical task. It is strongly implicated for addition and subtraction, and relevant elsewhere, but it underperforms PCA baselines on some tasks. So number representation likely has additional structure.

The fourth limitation is that the exact trigonometric computation remains unresolved. The authors show that the model builds `helix(a + b)`, but they do not fully isolate how the network calculates that representation from the operand helices.

The fifth limitation is possible algorithmic diversity. The Clock algorithm may be one component of an ensemble. Models with different tokenizers, MLP types, scales, or training data may rely on different mixtures of strategies.

Even with those caveats, the paper is unusually concrete. It gives a plausible internal data type, a causal test that the data type matters, and a staged account of how components transform it.

## Memory Checklist

- The paper studies two-digit addition in GPT-J, Pythia-6.9B, and Llama3.1-8B.
- The main claim is that numbers are represented as generalized helices.
- A generalized helix combines a linear magnitude direction with periodic components.
- Important periods include `2`, `5`, `10`, and `100`.
- Activation patching shows that fitted helix variables are causally involved in addition.
- The proposed algorithm is the `Clock` algorithm: move operand helices, build the answer helix, read it into logits.
- In GPT-J, attention heads mostly route `a` and `b`; MLPs do most of the computation.
- MLPs 14-18 build `helix(a + b)`.
- MLPs 19-27 read from `helix(a + b)` and write answer logits.
- Important neuron preactivations can often be fit with helix-like functions of `a`, `b`, and `a + b`.
- The exact low-level trigonometric mechanism is not fully isolated.
- The result is a strong example of combining feature geometry with circuit analysis.
