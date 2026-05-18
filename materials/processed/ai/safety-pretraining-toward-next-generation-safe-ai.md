# Safety Pretraining: Toward the Next Generation of Safe AI

Source: `https://proceedings.neurips.cc/paper_files/paper/2025/file/3e84c4e0acee2be072571fedc70700a9-Paper-Conference.pdf`
Title: `Safety Pretraining: Toward the Next Generation of Safe AI`
Authors: Pratyush Maini, Sachin Goyal, Dylan Sam, Alex Robey, Yash Savani, Yiding Jiang, Andy Zou, Matt Fredrikson, Zachary C. Lipton, J. Zico Kolter
Venue: NeurIPS 2025
Project site: `https://locuslab.github.io/safety-pretraining`
Ingested: `2026-05-18`
Extraction engine: `official NeurIPS PDF via PyMuPDF text extraction`
Strategy: `paper extraction, structured study note, medium/full AI lesson normalization, and Scale AI prep cross-filing`
Regular filing: `AI / Collection`
Research prep filing: `Scale AI research internship prep; safety; alignment; pretraining; evaluation`

## Summary

This paper argues that safety should be built into language models during pretraining rather than bolted on only during post-training. The authors' central slogan is that alignment is not unlearning: if a base model has already learned unsafe patterns from web-scale data, later RLHF, DPO, or instruction tuning may suppress those behaviors in ordinary chat settings but may not remove the underlying capability or association.

The proposed response is a data-centric pretraining pipeline. The pipeline scores web data for harmfulness, rewrites some unsafe material into safer educational contexts, converts highly unsafe examples into refusal and moral-education data, inserts a special harmfulness tag during pretraining for unsafe segments, and uses that tag at inference time through a modified beam-search procedure called SafeBeam.

The headline result is that the authors' 1.7B-parameter safety-pretrained models have much lower attack success rates than standard pretrained models after benign finetuning, while keeping roughly comparable performance on ordinary language benchmarks. In the main ablation, raw pretraining has 38.8% attack success after benign GSM8K finetuning, safety pretraining with moral education reaches 23.0%, and adding SafeBeam reaches 8.3%.

## Core Claim

Post-training alignment can make a model behave safer in the distribution where it was aligned, but it does not necessarily erase unsafe knowledge, tendencies, or representations learned during pretraining. A model trained on raw web data may later refuse harmful requests after instruction tuning, but a small amount of unrelated benign finetuning can degrade that refusal behavior.

The paper's alternative is to shift safety earlier:

- teach the model to encounter sensitive information in context rather than as raw unsafe continuation text;
- preserve factual and historical knowledge where removal would create blind spots;
- teach refusal and ethical reasoning as part of the pretraining distribution;
- give the model a learned internal marker for unsafe content;
- use that marker for decoding-time steering.

## Pipeline

### 1. Safety Scoring

The first stage assigns web documents a safety score from 0 to 5. The authors annotate FineWeb-Edu examples with GPT-4o-mini, then train lighter classifiers that can scale to pretraining data.

The final scoring approach uses both:

- an LLM-based classifier based on Qwen 2.5-7B;
- an embedding classifier based on `gte-base-en-v1.5`;
- an ensemble rule that takes the maximum score across classifiers to favor recall on unsafe content.

The appendix reports that the ensemble reaches high recall on unsafe examples, with `Recall@1` of 0.9536 and `Recall@3` of 0.7483 on the held-out GPT-4o-mini annotated set. This reflects the paper's priority: false negatives in safety filtering are costly, so the system accepts some overscoring.

### 2. Synthetic Recontextualization

For mildly to moderately unsafe material, the authors do not simply delete the data. They rewrite it into safer educational contexts. The goal is to preserve important information while changing the framing so the model sees sensitive content through warnings, explanations, and ethical context.

The paper calls the resulting dataset SafeWeb and describes it as over 100B tokens of synthetic recontextualized data. The rephrasing is generated with LLaMA-3.1-8B and designed so sensitive facts are paired with context explaining why the material is dangerous, misleading, historically painful, or ethically fraught.

The important conceptual point is that safety is not only filtering. Pure removal can leave a model ignorant or brittle. Recontextualization tries to teach the model what the topic means and why it must be handled carefully.

### 3. RefuseWeb

For highly unsafe source content, the paper creates refusal training examples. Texts with safety scores 4 or 5 are transformed into dialogues in which a user asks for harmful assistance and the assistant refuses while explaining the boundary.

This dataset, RefuseWeb, is meant to teach hard stops: not every sensitive topic should be safely reframed into a helpful answer. Some requests need refusal.

### 4. Moral Education Data

The authors also create a moral education dataset from the refusal examples. Instead of only training dialogue refusals, they transform the ethical message into educational prose such as articles or guidelines.

This matters because a model should not only memorize the conversational pattern "I cannot help with that." The paper wants the model to learn the principles behind refusal: why the request is unsafe, who may be harmed, and what responsible alternatives look like.

### 5. Harmfulness-Tag Annotated Pretraining

The paper adds a special token, `<potentially unsafe content>`, into unsafe training segments at random positions covering 5% of the input sequence length. The tag is not inserted in safe content or synthetic safe rephrasings.

The goal is representational separation. The model should learn that some surrounding text is associated with unsafe semantics. That creates a handle for inference-time control.

The appendix ablates tag injection rates of 3%, 5%, and 10%, and reports that 5% gives the best safety-utility tradeoff in their setting.

### 6. SafeBeam

SafeBeam modifies beam search. At each decoding step, each candidate continuation is scored not only by likelihood but also by the next-step probability of generating the harmfulness tag. The algorithm discards the 50% of candidate beams with the highest probability of producing the tag, then keeps the top beams by normal log probability.

This makes SafeBeam a decoding-time steering method. It does not ban a list of words. It uses the model's own learned unsafe-content marker as a risk signal.

## Training Setup

The experiments train 1.7B-parameter models using a SmolLM2-style pretraining setup. The initial corpus includes FineWeb-Edu, StackOverflow, FineMath, and Cosmopedia. Training uses LitGPT, FlashAttention-2, and mixed precision.

For post-training, all models are instruction-tuned on UltraChat-200k plus WildGuardMix and WildJailbreak safety data. This creates a strong comparison against ordinary post-hoc safety alignment. Models with harmfulness-tag pretraining also receive a small fraction of harmfulness-tag annotated completions during instruction tuning.

The key comparison is therefore not "unaligned raw model versus aligned safe model." The paper tests whether safety-aware pretraining remains useful even when standard pretrained baselines also receive safety instruction tuning.

## Evaluation Setup

The evaluations cover three broad questions.

### General Capability

The authors evaluate on ARC Challenge, ARC Easy, CommonsenseQA, GSM8K, OpenBookQA, PIQA, TriviaQA, WinoGrande, and MMLU. The safety-pretrained models remain comparable to raw-data baselines, with the paper reporting an average of 43.5% for the rephrasing condition versus 42.8% for raw data.

### Safety

The paper evaluates:

- base-model unsafe completion behavior before instruction tuning;
- instruction-tuned safety benchmark behavior;
- robustness after benign finetuning on GSM8K;
- adversarial jailbreak robustness with GCG attacks on JailbreakBench;
- overrefusal and helpfulness on benign Alpaca requests.

The base-model evaluation is a meaningful addition because most safety benchmarks are chat/instruction oriented. A base model is not naturally a chat assistant, so the authors convert harmful request datasets into completion-style prompts.

### Robustness To Benign Finetuning

The paper emphasizes benign finetuning as a stress test. The idea is simple: if a model is only superficially aligned at the instruction-tuning layer, then a small non-safety finetune can erode safety behavior. This is meant to expose whether safety is native to the pretrained model or mostly a post-training shell.

## Main Results

### Safety Pretraining Reduces Unsafe Completions

In the base-model setting, the standard pretrained model has 44.1% attack success rate, while the safety-pretrained model has 11.6%. With SafeBeam, the base-model ASR drops to 1.6%.

### Instruction Tuning Can Hide Differences

After safety instruction tuning, all models show low attack success rates. This is part of the paper's argument: ordinary aligned evaluation can make models look similarly safe even if their underlying robustness differs.

### Benign Finetuning Reveals Brittleness

After benign GSM8K finetuning, the differences reappear:

- standard pretraining: 38.8% ASR;
- safety pretraining: 23.0% ASR;
- safety pretraining plus SafeBeam: 8.3% ASR.

This is the paper's strongest evidence for the "alignment is not unlearning" claim. The standard model can be instruction-tuned into apparent safety, but the behavior is less robust after unrelated finetuning.

### Filtering Alone Is Not Enough

One of the most useful ablations is that training only on safety-score-0 data is worse than raw data under the benign-finetuning safety metric. The paper reports ASR increasing from 38.8% for raw data to 43.8% for score-0-only data.

The authors' interpretation is that a model with no exposure to unsafe patterns may not learn how to handle them. Safe pretraining requires contextual exposure, not just deletion.

### The Data Interventions Are Complementary

The stepwise ablation is:

- raw data: 38.8% ASR;
- score-0-only safe data: 43.8% ASR;
- plus rephrasing: 33.6% ASR;
- plus native refusal: 25.1% ASR;
- plus moral education: 23.0% ASR;
- plus SafeBeam: 8.3% ASR.

This suggests that each intervention plays a different role. Rephrasing teaches safe handling of sensitive topics. Refusal data teaches boundaries. Moral education teaches principles. SafeBeam uses the tag signal to steer generation at inference time.

### SafeBeam Helps, But Is Not A Complete Solution

SafeBeam improves GCG jailbreak robustness in the reported setup, reducing GCG attack success from 55.0% for safety pretraining to 39.0% with SafeBeam. However, the authors note that the attacks were not adapted to the modified decoding algorithm, so future adaptive attacks could weaken this result.

### Helpfulness Is Mostly Preserved

On benign Alpaca requests, the paper reports that safety pretraining does not reduce compliance/helpfulness meaningfully. SafeBeam slightly increases overrefusal. An appendix ablation shows that using harmfulness-tag pretraining and SafeBeam without the richer data interventions can hurt helpfulness, which supports the claim that safe alternatives need to be present in the model's candidate continuations.

## Data Safety Report Cards

The paper proposes Data Safety Report Cards for pretraining datasets. A report card should include:

- a distribution of safety scores across a dataset sample;
- frequencies of harmful content categories per million tokens;
- category definitions based on a safety taxonomy.

This is a practical process contribution. The authors argue that model safety should be tied back to the training data's safety profile, not only measured after a model is trained.

## Why The Paper Matters

The paper connects several alignment themes:

- pretraining data curation;
- synthetic data;
- refusal behavior;
- moral reasoning;
- representation-level markers;
- inference-time steering;
- robustness after finetuning;
- dataset transparency.

Its strongest lesson is that safety can be treated as a curriculum problem. The model should not merely be denied unsafe content, and it should not only be patched after pretraining. It should encounter a curated distribution that teaches context, boundaries, and ethical reasoning before chat alignment ever begins.

## Limitations And Caveats

The experiments are on 1.7B-parameter models, so the method still needs validation at production scale. Larger models may have different safety-capability tradeoffs.

The pipeline depends on safety classifier quality. If the classifier misses subtle harms, the downstream data interventions inherit that blind spot. If it overscores benign material, it may distort the data distribution or create excessive caution.

SafeBeam is a decoding method, which means it changes inference behavior and may be attackable by adversaries who optimize specifically against it. It also slightly increases overrefusal in the paper's benign-request evaluation.

The synthetic data pipeline is itself value-laden. Recontextualization and moral education require choices about what counts as safe, what ethical frame is appropriate, and how to preserve information without laundering harmful guidance.

The paper evaluates safety primarily through attack success rate and refusal-style behavior. That is important, but safety also includes deception, power-seeking, long-horizon agency, epistemic humility, and human autonomy. This work is most directly about harmful-content safety, not every alignment risk.

## Study Questions

1. Why does the paper say alignment is not unlearning?
2. Why can training only on safe-score-0 data make the model less robust?
3. What different roles do SafeWeb, RefuseWeb, and Moral Education data play?
4. How does the harmfulness tag create a handle for SafeBeam?
5. Why is benign finetuning a useful stress test for post-hoc alignment?
6. What would need to be shown before trusting this pipeline at frontier scale?

