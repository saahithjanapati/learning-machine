# Modifying LLM Post-Training For Diverse Creative Writing

Source note: John Joon Young Chung, Vishakh Padmakumar, Melissa Roemmele, Yuqian Sun, and Max Kreminski, "Modifying Large Language Model Post-Training for Diverse Creative Writing." arXiv:2503.17126v1, submitted March 21, 2025. Source page: [arxiv.org/abs/2503.17126](https://arxiv.org/abs/2503.17126). Processed source: [materials/processed/ai/modifying-large-language-model-post-training-for-diverse-creative-writing.md](../../../../materials/processed/ai/modifying-large-language-model-post-training-for-diverse-creative-writing.md).

Filing note: this lesson lives in AI For Art because the paper is directly about creative writing, creative-output diversity, taste, and post-training for open-ended artistic generation. It is also cross-filed in [Scale AI Research Internship Prep](../../scale-ai-research-internship-prep/INDEX.md) because it is a useful post-training and evaluation paper for open-ended domains.

## Table of Contents

- [Medium-Length Version](#medium-length-version)
- [Full-Length Version](#full-length-version)
- [The Creative Problem](#the-creative-problem)
- [Quality Is Not Enough](#quality-is-not-enough)
- [The Dataset Shape](#the-dataset-shape)
- [Deviation: The Key New Signal](#deviation-the-key-new-signal)
- [DDPO And DORPO](#ddpo-and-dorpo)
- [How They Evaluate Diversity](#how-they-evaluate-diversity)
- [Main Results](#main-results)
- [Human Evaluation](#human-evaluation)
- [Ablation: What If You Have Fewer Responses Per Prompt](#ablation-what-if-you-have-fewer-responses-per-prompt)
- [Why This Matters For Creative AI](#why-this-matters-for-creative-ai)
- [Limitations](#limitations)
- [Memory Checklist](#memory-checklist)

## Medium-Length Version

### Medium Thesis

This paper is about a real problem in creative AI: post-training can make language models more polished while making them less creatively varied.

In ordinary instruction-following tasks, a model that converges toward one high-quality answer style may be fine. In creative writing, that is a loss. A prompt should be able to produce many good stories: different genres, voices, premises, emotional arcs, and weird little choices. If post-training teaches the model to always reach for the same kind of polished story, the model becomes a worse creative collaborator even if its average quality score rises.

The paper's central idea is to modify preference optimization so that the model learns more from rare high-quality responses.

### The Core Signal: Deviation

For each writing prompt, the dataset contains multiple human-written responses. The paper asks:

```text
For this prompt, how different is this response from the other responses?
```

That difference is called `deviation`.

A response can have high semantic deviation if it takes the story in a different plot direction. It can have high style deviation if it sounds like a different writer or voice. The paper measures both.

The important detail is that deviation is local to the prompt. The model is not rewarded for being randomly strange. It is rewarded for learning from preferred responses that are unusual among the possible answers to the same creative setup.

### How They Modify Post-Training

The authors adapt two familiar preference-optimization methods:

- `DPO`, direct preference optimization;
- `ORPO`, odds-ratio preference optimization.

Their versions are:

- `DDPO`: DPO weighted by the winning response's deviation;
- `DORPO`: ORPO weighted by the winning response's deviation.

In ordinary DPO, each preference pair says:

```text
for this prompt, prefer winner over loser
```

In DDPO, that pair matters more if the winning response is both preferred and different from the other responses to the same prompt.

That is the whole conceptual move:

```text
learn from good examples,
but give extra weight to good examples that preserve rare creative modes.
```

### The Dataset And Evaluation

The paper uses the r/writingPrompts dataset. Each prompt can have many user-written stories, and each story has an upvote score. The authors use upvotes as a noisy quality signal to create preference pairs and to train a `reddit-reward` model.

For evaluation, each model produces four responses per prompt over 1000 prompts. The authors measure:

- average quality using the learned reddit-reward model;
- semantic diversity using pairwise distances in a semantic embedding space;
- style diversity using pairwise distances in a style embedding space.

This is a smart split. In creative writing, diversity is not just "use different words." Four outputs can tell different stories in the same voice, or use different voices for the same story.

### What They Find

Existing instruction-tuned models such as GPT-4o, Claude-3.5-Sonnet, DeepSeek-R1, and provider-tuned instruct models are high-quality but low-diversity. Human-written gold responses are much more diverse, though lower according to the learned reward model.

Standard DPO and ORPO improve reward over SFT but can maintain or reduce diversity.

DDPO and DORPO increase the type of diversity they are trained for:

- semantic-deviation variants increase semantic diversity;
- style-deviation variants increase style diversity;
- mixed variants can improve both.

The strongest model is Llama-3.1-8B with `DDPO-both`, using both semantic and style deviation. The paper reports that it reaches quality close to strong baselines while getting semantic diversity close to human-written gold data and style diversity slightly below gold.

### Human Evaluation

The paper adds human evaluation because automatic creative-writing metrics are not enough.

Evaluators compare sets of four generated writings and judge which set has the highest-quality story and which set is more diverse. `DDPO-both` beats GPT-4o on both quality and diversity in this setup, and beats standard DPO on diversity while having no statistically significant quality advantage over DPO.

That is important: the diversity gain is visible to humans, not only to embedding metrics.

### Medium Takeaway

The paper is useful because it turns "make models more creative" into a concrete post-training rule:

```text
Do not just reward the average preferred response.
Find preferred responses that are unusual for the prompt,
and let them matter more during training.
```

For creative AI, this is a better target than randomness. The goal is not chaos. The goal is to preserve multiple high-quality modes of expression.

## Full-Length Version

## The Creative Problem

The paper starts from a simple observation: creative writing is not a single-answer domain.

If the prompt is:

```text
"Why are you shaking, my love? You are king now."
```

there are many good continuations. The king could be literal or metaphorical. The story could be about a monarch, a new manager, a child playing pretend, a supernatural curse, a political assassination, a romantic betrayal, or a comedy about someone winning a game. Several answers can be excellent while being mutually different.

That makes creative writing different from closed-form math, many factual QA tasks, or code tasks with executable tests. In those domains, quality often means moving closer to a small target set. In creative writing, quality and variety both matter.

This is why the paper belongs in AI for art. It is not just using creative writing as a toy benchmark. It is studying a real artistic-system design issue: how do you post-train a model without sanding away its creative spread?

## Quality Is Not Enough

Modern LLM post-training is often judged by preference quality. Does the model produce answers humans like? Does it follow instructions? Does it avoid bad behavior? Does it sound polished?

Those are useful goals, but for creative systems they are incomplete.

Imagine a writing assistant that always produces:

- the same type of dramatic reveal;
- the same sentence rhythm;
- the same "cinematic" description;
- the same moral conflict;
- the same emotionally safe ending.

Such a model might score well on broad helpfulness. It might even be pleasant to read in isolation. But as a creative collaborator, it is limited. It offers polish without range.

The paper argues that post-training can push models into this kind of homogenization. When the model learns from broad human preferences, it may learn the safest and most common traits of preferred responses. The long tail of unusual but good writing gets less influence.

The key target is therefore:

```text
quality without collapse
```

The model should still learn from preference data. It should not become noisy. But it should preserve rare high-quality modes instead of only amplifying the majority style.

## The Dataset Shape

The dataset is r/writingPrompts. Users post prompts, and other users reply with stories. This gives the paper exactly the structure it needs:

```text
one prompt
  many human responses
  each with an upvote score
```

The authors use 421,330 prompt-response pairs for training and 45,868 prompt-response pairs for testing.

Upvotes serve as a quality signal. This is imperfect, and the paper says so. Upvotes reflect attention, timing, community taste, and luck, not only literary quality. But they are still a useful large-scale signal.

The authors use upvotes for two things:

- train a reward model that predicts upvote-like quality from a prompt and response;
- construct preference pairs where one response is treated as preferred over another.

This turns a creative-writing community dataset into a post-training dataset.

## Deviation: The Key New Signal

The main new idea is `deviation`.

For a given prompt, suppose there are several responses:

```text
Y_x = {y_1, y_2, ..., y_N}
```

For one response `y_i`, deviation asks:

```text
How far is y_i from the other responses to the same prompt?
```

If most stories take the prompt in one direction but one good story takes it somewhere else, that story has high deviation.

This is not global weirdness. It is prompt-relative difference.

That distinction is crucial. A creative model should not simply learn to be bizarre. A story can be strange in a bad way. A response can be different because it misunderstood the prompt. The useful signal is:

```text
different among responses to this same prompt,
and still high-quality enough to be a winner in a preference pair.
```

The paper measures two kinds of deviation:

- semantic deviation: different meaning, premise, or story direction;
- style deviation: different writerly voice or style.

Semantic deviation is computed with `jinaai/jina-embeddings-v3`. Style deviation is computed with `AnnaWegmann/Style-Embedding`. The authors also test a combined version that mixes both signals.

## DDPO And DORPO

The paper modifies DPO and ORPO.

### DPO Refresher

DPO trains on triples:

```text
(prompt, preferred response, dispreferred response)
```

The model is trained so that the preferred response becomes more likely than the dispreferred response, relative to a reference model.

This is a powerful post-training recipe, but ordinary DPO treats preference pairs in a mostly uniform way. If most preferred responses share a common style, the model can learn that style strongly.

### DDPO

DDPO means diversified DPO.

The paper weights each DPO pair by the deviation of the winning response:

```text
DPO loss for pair
  multiplied by
deviation(winning response)
```

So a common preferred response still contributes, but a rare preferred response contributes more.

Intuitively:

```text
If a winner is good and unusual for this prompt,
do not let it get drowned out by the common winners.
```

### ORPO Refresher

ORPO combines supervised learning and preference optimization in one objective. It has a likelihood component and an odds-ratio preference component.

### DORPO

DORPO means diversified ORPO.

It applies the same deviation weighting to ORPO's terms. The winning response's deviation scales both the likelihood part and the odds-ratio part.

The paper's contribution is not that deviation itself is complicated. The contribution is that this simple local-diversity signal can be inserted into standard post-training objectives and move the model's output distribution in a useful creative direction.

## How They Evaluate Diversity

The authors generate four responses per prompt for 1000 test prompts. That creates a small set of alternative model outputs for each prompt.

They evaluate:

| Property | Measurement |
| --- | --- |
| Quality | Learned `reddit-reward` model. |
| Semantic diversity | Mean pairwise embedding distance among the four responses using semantic embeddings. |
| Style diversity | Mean pairwise embedding distance among the four responses using style embeddings. |

The pairwise design matters. Diversity is not measured across all outputs globally. It is measured within the set of outputs for the same prompt. That is exactly what a user of a creative writing model would care about: "If I ask again, do I get a genuinely different good idea?"

The style metric is also important. A model can produce four plot variants in the same bland house voice. That is only partial diversity. For creative tools, variation in voice and texture matters too.

## Main Results

The comparison includes:

- SFT;
- DPO;
- ORPO;
- DDPO variants;
- DORPO variants;
- GPT-4o;
- GPT-4o with diversity prompting;
- o1;
- Claude-3.5-Sonnet;
- DeepSeek-R1;
- provider-tuned instruct models;
- human-written gold responses.

The broad picture is:

```text
instruction-tuned frontier models:
  high reward, low diversity

human-written gold data:
  high diversity, lower learned reward

standard DPO/ORPO:
  improved reward over SFT, but limited diversity gains

DDPO/DORPO:
  higher targeted diversity with relatively small quality cost
```

The best single model is Llama-3.1-8B with `DDPO-both`. It uses both semantic and style deviation. The paper reports that it is close to strong baselines on reward, close to human-written gold data on semantic diversity, and only slightly below gold on style diversity.

This is a meaningful result because the model is not simply sampling with more temperature. It has been trained so that rare high-quality response modes have more influence.

The GPT-4o iterative prompting baseline is useful here. It tries to induce diversity by telling GPT-4o to generate outputs far from previous ones. The paper finds that trained models can still reach higher diversity. Prompting helps, but it does not fully replace post-training that learns diversity structure from data.

## Human Evaluation

Creative-writing metrics are always suspicious. Embedding distance can reward superficial difference, miss narrative quality, or fail to capture reader experience. So the paper includes a human evaluation.

Evaluators compare sets of four generated writings. They choose:

- which set includes the most interesting, highest-quality story;
- which set is more diverse.

The paper compares `DDPO-both` against GPT-4o and against standard DPO.

Against GPT-4o, `DDPO-both` is selected more often for both quality and diversity. The diversity result is especially strong.

Against DPO, `DDPO-both` is selected more often for diversity. The quality result favors DPO in raw percentages but is not statistically significant in the reported test.

This is roughly what we should hope for. DDPO is not supposed to dominate every quality measure. It is supposed to recover diversity without losing too much quality. The human evaluation supports that story.

## Ablation: What If You Have Fewer Responses Per Prompt

Deviation requires comparison. If a prompt has many responses, you can tell which ones are common and which ones are unusual. If a prompt has only a few responses, deviation is noisier.

The paper tests this by limiting the maximum number of responses per prompt. It compares DDPO-both with DPO and DivPO.

DivPO is another diversity-oriented preference-optimization method. It filters data based on quality and diversity. That can work, but it means some data is discarded. The authors note that their deviation-weighted method uses the full dataset, which can be useful when data is scarce.

The ablation finds:

- DDPO-both generally has higher diversity than DPO and DivPO;
- reward stays similar in most settings;
- with only four responses per prompt, DDPO-both can lose quality;
- adding a minimum deviation weight recovers quality but reduces some diversity gain;
- using higher-quality winning responses also helps recover quality.

The lesson is practical. Deviation weighting is most natural when the dataset has multiple alternatives for the same prompt. If the dataset has only a few alternatives, the method may need smoothing or better winner selection.

## Why This Matters For Creative AI

This paper is useful because it names a training failure mode that creative people actually feel:

```text
the model is good,
but all of its ideas feel like siblings.
```

The model may not be wrong. It may not be low-quality. It may simply be narrow.

For a creative writing assistant, narrowness is a serious defect. Users often want multiple directions:

- "Give me a darker version."
- "What if this were funny?"
- "Make it less cinematic and more intimate."
- "What is a weird take?"
- "What is a version that does not use the obvious trope?"

If the model's post-training collapses its response distribution, these requests become harder. You can turn up temperature, but that often adds randomness rather than tastefully distinct ideas.

The paper's rule is better aligned with creative work:

```text
Preserve rare high-quality modes.
```

That phrase is the core. Creative diversity is not just entropy. It is the presence of multiple good modes in the output distribution.

## Relation To Other AI-For-Art Lessons

This paper connects naturally to the creative-evaluation part of AI For Art.

The Jukebox and VQ-VAE lessons explain how creative media can be represented and generated. This paper asks what happens after we have a model that can generate: how do we tune it so that "better" does not become "samey"?

It also connects to the lesson on creative limits of next-token prediction. Next-token prediction can learn a broad distribution from data, but post-training can reshape that distribution. If post-training compresses the long tail too aggressively, a model can become less useful for divergent creative work.

## Limitations

The method relies on datasets with multiple responses per prompt. That is common in some creative-writing settings but not universal.

The quality signal is based on Reddit upvotes. Upvotes are useful at scale but noisy. They reflect visibility and community taste, not only writing quality.

The reward model may encode those same biases. A model optimized for `reddit-reward` may learn a subreddit-specific notion of what a good story sounds like.

The human evaluation is limited. The evaluators are the paper's authors, the evaluation uses summarized writings, and only a subset of conditions is compared.

The work is offline. Modern post-training often uses online preference collection, RL loops, model-generated data, and tool-assisted evaluation. The paper leaves online versions of deviation-aware training for future work.

The idea likely transfers beyond writing, but each creative medium needs a suitable deviation measure. Image, music, video, dance, and design all have different notions of semantic and stylistic distance.

## Memory Checklist

- The paper studies post-training for creative writing diversity.
- Standard post-training can raise quality while reducing output variety.
- The key signal is `deviation`: how different one response is from other responses to the same prompt.
- DDPO is DPO weighted by the winning response's deviation.
- DORPO is ORPO weighted by the winning response's deviation.
- The dataset is r/writingPrompts, with many responses per prompt and upvote scores as a noisy quality signal.
- Diversity is measured both semantically and stylistically.
- Llama-3.1-8B `DDPO-both` is the strongest overall result.
- Human evaluation supports the diversity gain.
- The big creative-AI lesson is to preserve rare high-quality modes, not merely increase randomness.
