# Modifying Large Language Model Post-Training For Diverse Creative Writing

Source: `https://arxiv.org/abs/2503.17126`
PDF: `https://arxiv.org/pdf/2503.17126`
Title: `Modifying Large Language Model Post-Training for Diverse Creative Writing`
Authors: `John Joon Young Chung, Vishakh Padmakumar, Melissa Roemmele, Yuqian Sun, Max Kreminski`
Affiliations: `Midjourney; New York University`
Submitted: `2025-03-21`
arXiv version: `2503.17126v1`
Status: `Preprint. Under review.`
Ingested: `2026-05-08`
Extraction engine: `local PDF extraction with PyMuPDF + manual structured ingest`
Strategy: `canonical PDF extraction and AI-for-art creative-writing diversity lesson normalization`
Cross-file: `topics/ai/scale-ai-research-internship-prep/INDEX.md` for post-training, reward modeling, and open-ended evaluation relevance.

## Medium-Length Version

This paper studies a problem that matters directly for creative AI: post-training can make language models more helpful and higher-quality, but it can also make their outputs more uniform. In creative writing, uniformity is not a harmless side effect. A prompt can have many valid continuations, tones, genres, and narrative directions. If post-training teaches the model to converge on one polished default style, the model may become less useful as a creative partner even if its average judged quality rises.

The authors propose modifying preference-optimization objectives so that training pays more attention to rare but high-quality responses. Their core quantity is `deviation`: for a given prompt, how different one response is from the other responses to the same prompt. A response can deviate semantically, by choosing a different plot or premise, or stylistically, by sounding like it was written by a different kind of writer. Instead of treating all preferred responses equally, the new objectives upweight preferred responses that are both high-quality and different from the common local cluster.

They adapt two standard post-training methods:

- `DDPO`, a diversified version of DPO, weights each preference-pair loss by the winning response's deviation.
- `DORPO`, a diversified version of ORPO, weights both the likelihood and odds-ratio parts of ORPO by the winning response's deviation.

The experiments use the r/writingPrompts dataset. A prompt can have many user-written stories, and each story has an upvote score. The authors use those scores as a noisy quality signal to build preference pairs and to train an automatic reward model. They evaluate each model by sampling four responses per prompt over 1000 test prompts, then measuring average quality plus pairwise diversity among the four responses.

Diversity is measured in two ways. Semantic diversity uses `jinaai/jina-embeddings-v3` to ask whether the responses mean different things. Style diversity uses `AnnaWegmann/Style-Embedding` to ask whether the responses sound like different writers. This distinction matters because creative diversity is not just "different wording." Four stories can share the same premise but differ in voice, or share the same voice but differ in plot.

The main result is that deviation-weighted post-training improves targeted diversity while usually preserving quality. Existing instruction-tuned models such as GPT-4o, Claude-3.5-Sonnet, DeepSeek-R1, and provider-tuned instruct models form a high-quality but low-diversity cluster. Human-written gold data is more diverse but has lower reward according to the learned reddit-reward model. Standard DPO and ORPO raise reward compared with SFT but can maintain or reduce diversity. DDPO and DORPO move the trained models toward higher semantic and/or style diversity without a large quality collapse.

The best headline result is the Llama-3.1-8B `DDPO-both` model. It uses both semantic and style deviation signals. The authors report that it reaches quality close to strong baselines while achieving semantic diversity close to human-written gold data and style diversity only slightly below gold.

Human evaluation supports the automated picture. In pairwise comparisons, evaluators preferred `DDPO-both` over GPT-4o for both quality and diversity; the diversity preference was especially strong. Against standard DPO, `DDPO-both` was judged more diverse, while the quality difference was not statistically significant.

The paper also compares against DivPO and varies how many responses per prompt are available. DDPO-both usually gives higher diversity than DPO and DivPO while keeping reward similar, but the method becomes fragile when there are very few responses per prompt. With only four responses per prompt, some winning examples can receive zero deviation weight. The authors show two fixes: impose a minimum deviation weight, or ensure higher-quality winning examples. Both recover quality but reduce some diversity gains.

The conceptual takeaway is clean: if creative post-training only rewards the most common style of good answer, it will teach models to produce polished sameness. If training can identify high-quality examples that are unusual relative to the rest of the prompt's response set, it can preserve more of the creative spread. This also makes the paper useful for Scale-style preparation: it is a concrete example of reward modeling and preference optimization for an open-ended domain where "better" cannot mean one narrow answer.

## Full-Length Version

## Core Question

The paper asks:

Can LLM post-training improve or preserve output diversity in creative writing, instead of collapsing toward a smaller set of polished defaults?

This is a different question from ordinary instruction-following quality. In many tasks, there is one correct answer or one narrow range of acceptable answers. In creative writing, the point is often that there are many valid answers:

- a fantasy premise can become tragedy, comedy, romance, horror, or satire;
- the same line of dialogue can imply political power, family conflict, supernatural fate, or mundane insecurity;
- a good story can be quiet and literary, fast and pulpy, lyrical, blunt, surreal, or procedural.

A model that always produces the same kind of "good story" is not actually a strong creative system. It is a system with a high-polish attractor.

## Why Post-Training Can Hurt Creative Usefulness

Post-training methods such as SFT, DPO, ORPO, and RLHF often optimize toward human-preferred outputs. That can improve apparent quality, but it can also narrow the distribution. The model learns the response styles that are most consistently rewarded and suppresses responses that are unusual, risky, niche, or harder to judge.

For creative applications, this is dangerous because a rare response is not necessarily a bad response. It might be rare because it takes an unusual premise seriously, uses an uncommon style, or explores a direction most writers ignored.

The paper's framing is not "make the model random." It is subtler:

```text
Prefer high-quality outputs,
but do not only learn from the most common high-quality outputs.
```

That is why the central object is not diversity alone. It is the deviation of a preferred response relative to other responses for the same prompt.

## Dataset: r/writingPrompts

The authors use the r/writingPrompts dataset introduced by Fan et al. The structure is unusually useful for this problem:

```text
prompt x
  response y_1 with upvote score s_1
  response y_2 with upvote score s_2
  response y_3 with upvote score s_3
  ...
```

Many datasets have one answer per prompt. This one can have multiple stories per prompt. That lets the authors ask which responses are common, which responses are unusual, and which unusual responses are still high-quality.

They use upvotes as a noisy quality signal in two ways:

- to train a regression-style reward model called `reddit-reward`;
- to build binary preference pairs with winning and losing responses.

The train/test split contains 421,330 and 45,868 prompt-response pairs respectively. For evaluation, they sample four responses per prompt over 1000 test prompts, producing 4000 generated samples per model condition.

The paper is careful that upvotes are imperfect. A lower-upvote story may simply have received less attention. Still, the dataset gives a practical signal for large-scale creative-writing experiments.

## Quality And Diversity Metrics

The paper evaluates two axes:

| Axis | How It Is Measured | What It Means |
| --- | --- | --- |
| Quality | A learned `reddit-reward` model predicts upvote-like score from prompt and response. | Does the output look like something the dataset would reward? |
| Semantic diversity | Mean pairwise cosine distance among responses to the same prompt using `jinaai/jina-embeddings-v3`. | Do the outputs choose different meanings, premises, or story directions? |
| Style diversity | Mean pairwise cosine distance using `AnnaWegmann/Style-Embedding`. | Do the outputs sound like different writers or voices? |

The semantic/style split is one of the best parts of the paper. Diversity in creative writing is not a single property. A model can vary the plot while keeping the same house style, or vary voice while telling nearly the same story.

## Deviation

For a given prompt `x`, suppose the dataset contains responses:

```text
Y_x = {y_1, y_2, ..., y_N}
```

The deviation of one response is the average distance from that response to the other responses for the same prompt. Conceptually:

```text
deviation(y_i) = average distance from y_i to all other y_j for the same prompt
```

The authors compute deviation with the same embedding families used for diversity evaluation: semantic embeddings, style embeddings, or a combination of both. They normalize deviations so that weights are nonnegative and their sum matches the number of responses for that prompt.

This matters because deviation is local to the prompt. A response is not rewarded for being globally bizarre. It is considered unusual relative to the other plausible responses to the same creative setup.

## Standard DPO And ORPO

The paper modifies two post-training methods.

`DPO`, direct preference optimization, trains on preference pairs:

```text
(prompt, winning response, losing response)
```

It increases the relative likelihood of the winner over the loser compared with a reference model.

`ORPO`, odds-ratio preference optimization, combines supervised learning and preference optimization without using a separate reference model in the same way. It rewards preferred completions and penalizes dispreferred ones through an odds-ratio term.

Both methods can improve judged quality. But if most training pressure comes from common winners, both can also encourage the model to stay near the dominant style of acceptable responses.

## DDPO And DORPO

The paper's modified objectives are simple in spirit.

For `DDPO`, the DPO loss for a preference pair is multiplied by the deviation of the winning response:

```text
ordinary DPO pair loss
  -> weighted by deviation(winning response)
```

So a preferred response that is similar to many other responses still helps training, but a preferred response that is unusual for that prompt receives more influence.

For `DORPO`, the same idea is applied to ORPO. Both the supervised likelihood term and the odds-ratio preference term are weighted by the winning response's deviation.

The method does not require inventing a new creative reward model. It changes how existing preference data is used. That is the practical appeal: if a dataset already has multiple responses per prompt plus some quality signal, the model can learn from diversity structure already present in the data.

## Experimental Conditions

The trained base models are:

- `meta-llama/Llama-3.1-8B`
- `mistralai/Mistral-7B-v0.3`

The authors compare:

- SFT;
- DPO;
- ORPO;
- DDPO with semantic deviation;
- DDPO with style deviation;
- DDPO with both semantic and style deviation;
- DORPO with semantic deviation;
- DORPO with style deviation;
- DORPO with both semantic and style deviation.

They also compare against provider/instruction-tuned models:

- GPT-4o;
- GPT-4o with iterative diversity-inducing prompting;
- o1;
- Claude-3.5-Sonnet;
- DeepSeek-R1;
- provider-tuned instruct variants of the base models;
- the original human-written test data, called `Gold`.

The iterative GPT-4o condition is important. It tests whether simply prompting a strong model to be different is enough. The paper finds that prompting helps less than training on diversity structure.

## Main Results

The results show a tradeoff landscape.

Existing instruction-tuned models cluster at high reward but low diversity. This fits the broader worry that post-training can homogenize model outputs. They are polished, but they do not explore the same range as human-written responses.

Human-written gold data sits in a different region: much more diverse, but lower on the learned reddit-reward metric. That does not necessarily mean humans wrote worse stories; it may also reflect reward-model bias and the noisiness of upvote prediction.

SFT models are relatively weak in reward. Standard DPO and ORPO improve reward, but often maintain or reduce diversity.

The diversified methods do what they are designed to do:

- semantic-deviation variants increase semantic diversity;
- style-deviation variants increase style diversity;
- mixed variants can improve both.

The strongest overall condition is the Llama-3.1-8B `DDPO-both` model. The authors report that it reaches reward close to strong baselines while achieving semantic diversity close to human-written gold data and style diversity slightly below gold.

For creative AI, this is the main result: you can train for preference quality without automatically erasing the long tail of good creative responses.

## Human Evaluation

Automated metrics are useful but not enough for creative writing, so the paper adds a human evaluation.

Evaluators compare two sets of four generated writings. They answer:

- Which set has the most interesting, highest-quality writing?
- Which set is more diverse?

The paper compares `DDPO-both` against GPT-4o and against standard DPO. The evaluators are the paper's authors, blinded to condition. They use summarized versions of long writings to keep the task manageable.

The headline findings:

- Against GPT-4o, `DDPO-both` is chosen more often for quality and far more often for diversity.
- Against standard DPO, `DDPO-both` is chosen more often for diversity, while the quality comparison is not statistically significant.

This supports the paper's key claim. The diversified model is not merely moving an embedding metric. Humans can see the diversity improvement, especially compared with GPT-4o.

## DivPO And Data-Size Ablations

The paper also compares with DivPO, another diversity-oriented preference-optimization approach.

DivPO filters training data based on quality and diversity. The authors point out that this can require more raw data, because some examples are filtered away. Their deviation-weighted method uses the full available dataset, which is useful when data is scarce.

They vary the maximum number of responses per prompt. This matters because deviation is only meaningful if the model can compare a response to several other responses for the same prompt.

The finding is practical:

- with enough responses per prompt, DDPO-both usually gives higher diversity than DPO and DivPO while keeping reward similar;
- with only four responses per prompt, quality can drop because some winning responses get zero deviation weight;
- imposing a minimum deviation weight helps recover reward but reduces some diversity gain;
- using higher-quality winning responses also helps recover reward while still beating DPO and DivPO on diversity.

So the method is not magic. It benefits from datasets where each prompt has a healthy set of alternative responses.

## Why This Belongs In AI For Art

This is an AI-for-art paper because it treats creativity as a first-class optimization target.

Most post-training discussions focus on correctness, harmlessness, helpfulness, or instruction following. Those are important, but creative systems need another property: breadth of viable outputs.

For a writing assistant, a model that always gives the same kind of clever twist is a bad collaborator. A useful creative system should offer distinct premises, tones, structures, and voices. It should not only maximize the probability of a generic "good answer."

The paper gives a concrete training recipe for that goal:

```text
Do not reward difference by itself.
Find high-quality responses that are unusual for their prompt.
Give those responses more training influence.
```

That is a transferable idea. The same shape could matter for image prompts, music continuations, design variants, animation concepts, worldbuilding, and other domains where many good answers exist.

## What To Remember

The paper's key distinction is:

```text
diversity as randomness
  vs.
diversity as preservation of rare high-quality modes
```

DDPO and DORPO are not asking the model to scatter outputs randomly. They are trying to keep the model from collapsing onto the most common kind of good response.

This is why deviation is measured within a prompt. A rare response should matter only if it is rare among plausible responses to the same creative setup and is still preferred over an alternative.

## Limitations

The method depends on having multiple responses per prompt. Many preference datasets do not have that structure.

The quality signal comes from Reddit upvotes, which are noisy and socially contingent. Upvotes reflect attention, timing, taste, and community norms, not only story quality.

The reward model is trained on the same broad signal, so quality measurement inherits some of that noise.

The human evaluation is useful but limited. It uses author evaluators, a subset of conditions, and summarized stories rather than full reading experiences.

The work is offline. Many modern post-training pipelines use online preference collection, iterative RL, or model-generated data. The authors explicitly leave online versions for future work.

The paper focuses on creative writing. The general idea likely transfers, but each creative medium needs its own notion of local deviation and quality.

## Memory Checklist

- Post-training can improve quality while reducing creative diversity.
- The paper introduces deviation-weighted versions of DPO and ORPO.
- `deviation` means how different a response is from other responses to the same prompt.
- DDPO weights the DPO pair loss by the winning response's deviation.
- DORPO applies the same idea to ORPO's likelihood and odds-ratio terms.
- The dataset is r/writingPrompts, where many stories can answer the same prompt.
- Diversity is measured semantically and stylistically.
- The best result is Llama-3.1-8B `DDPO-both`: strong quality with diversity close to human-written gold data.
- The key creative-AI idea is preserving rare high-quality modes, not adding random noise.
