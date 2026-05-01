# Golden Goose: RLVR From Unverifiable Internet Text

Source note: Ximing Lu, David Acuna, Jaehun Jung, Jian Hu, Di Zhang, Shizhe Diao, Yunheng Zou, Shaokun Zhang, Brandon Cui, Mingjie Liu, Hyunwoo Kim, Prithviraj Ammanabrolu, Jan Kautz, Yi Dong, and Yejin Choi, "Golden Goose: A Simple Trick to Synthesize Unlimited RLVR Tasks from Unverifiable Internet Text." arXiv:2601.22975v2, updated February 2, 2026. Source PDF: [arxiv.org/pdf/2601.22975v2](https://arxiv.org/pdf/2601.22975v2).

## Table of Contents

- [Medium-Length Version](#medium-length-version)
- [Full-Length Version](#full-length-version)
- [The Paper In One Sentence](#the-paper-in-one-sentence)
- [The Central Research Question](#the-central-research-question)
- [Background: What RLVR Needs From Data](#background-what-rlvr-needs-from-data)
- [Why Existing RLVR Data Saturates](#why-existing-rlvr-data-saturates)
- [The Golden Goose Trick](#the-golden-goose-trick)
- [The Data Synthesis Pipeline](#the-data-synthesis-pipeline)
- [Why Multiple Choice Instead Of Open-Ended Infilling](#why-multiple-choice-instead-of-open-ended-infilling)
- [The Source Corpora](#the-source-corpora)
- [The Experiments](#the-experiments)
- [Main Results](#main-results)
- [The Cybersecurity Deployment](#the-cybersecurity-deployment)
- [What Makes The Paper Convincing](#what-makes-the-paper-convincing)
- [Limitations And Critical Reading](#limitations-and-critical-reading)
- [Open Questions](#open-questions)
- [The Takeaway](#the-takeaway)
- [Memory Checklist](#memory-checklist)

## Medium-Length Version

### Medium Thesis

Golden Goose is a paper about a bottleneck in reinforcement learning with verifiable rewards, or RLVR. RLVR works best when a model can try a problem, receive an automatically checkable reward, and improve from that signal. Math problems with exact answers and programming problems with unit tests are natural examples. The reward is cheap, objective, and scalable.

The problem is that most interesting reasoning text on the internet is not packaged that way. A theorem proof on a forum, a worked chemistry explanation, a textbook solution, or a cybersecurity writeup may contain rich reasoning, but it is not automatically verifiable in the usual RLVR sense. There is no simple answer string, no unit test, and no parser that can confidently decide whether a generated long-form solution is correct.

Golden Goose proposes a simple conversion trick:

Take reasoning-rich text, mask an important span, make the removed span the correct answer, generate plausible wrong alternatives, and train the model with a multiple-choice fill-in-the-middle task.

This turns unverifiable text into a verifiable RL problem. The model only needs to choose the option that best fills the mask. The reward can be a simple exact match against the correct option.

### The Core Idea

The method starts from a source passage. An LLM identifies a contiguous span containing important reasoning steps. That span is removed and replaced with `[MASK]`. The removed text becomes the ground-truth answer. The LLM then generates distractors that look stylistically similar and plausible, but are wrong in context.

The final task is not "write the whole proof" or "solve the whole programming problem from scratch." It is:

Given the context with a missing reasoning step, choose which candidate span correctly completes it.

That framing is doing two jobs at once. It keeps the reward cheap and verifiable, and it forces the model to read the surrounding reasoning carefully enough to distinguish the real step from plausible alternatives.

### Why This Matters

Existing RLVR data gets stale. Once a model consistently solves an example or consistently fails it, that example provides little useful reinforcement signal. The paper defines an effective example as one where multiple rollouts include both successes and failures. Such examples sit in the useful difficulty band: the model is not already perfect, but it is not hopeless either.

The authors report that for a heavily trained ProRL-1.5B-v2 model, only about 25% of the existing 136K ProRL training examples remain effective. In contrast, GooseReason-0.7M retains around a 70% effectiveness ratio. The claim is not merely that Golden Goose creates more examples. It creates fresh examples that sit in a useful learning regime for already-trained reasoning models.

### The Dataset

Using Golden Goose, the authors build GooseReason-0.7M, with more than 0.7 million RLVR tasks across:

| Source | What it contributes |
| --- | --- |
| AoPS-Instruct | Olympiad-style math problems, forum solutions, and theorem-proving text that is hard to verify directly |
| rStar-Coder | Competitive-programming style problems and solutions where many generated examples lack executable test cases |
| MegaScience | University-level scientific textbook QA across physics, biology, chemistry, medicine, computer science, math, economics, and related domains |

They also build GooseReason-Cyber, about 180K cybersecurity tasks synthesized from raw web scrapes, mainly through the FineWeb-derived cybersecurity corpus used by Primus.

### The Design Choice

The paper explicitly compares multiple-choice fill-in-the-mask against open-ended fill-in-the-mask. Open-ended infilling sounds more natural, but it causes practical trouble. A heavily RL-trained reasoning model may ignore the instruction to fill the missing span and instead solve the problem in its own way. Then the verifier has to judge free-form text, which is expensive and unreliable.

Multiple choice avoids that. The reward is exact. The options also control difficulty. With too few distractors, the model can eliminate bad choices without doing the intended reasoning. With more distractors, especially the paper's 9-choice setting, more examples land in the medium-difficulty band that is useful for RL.

### The Experiments

The paper studies two main RL scaling scenarios.

First, it asks whether GooseReason helps a model that has already saturated on existing RLVR data. For ProRL-1.5B-v2, continuing on the original ProRL data gives only marginal gains over a large additional compute budget. Adding GooseReason produces stronger gains across math, code, and especially STEM.

Second, it asks what happens with a stronger 4B model. The paper reports that Qwen3-4B-Instruct saturates quickly under the original ProRL recipe. After around 333 RL steps, further training on the original data plateaus or regresses, especially in math and STEM. Adding GooseReason revives training and yields new state-of-the-art results among 4B-Instruct models across 15 benchmarks.

The paper also tests a fixed-compute setting: train Qwen3-4B-Instruct from scratch for 200 RL steps with either ProRL data alone or ProRL plus GooseReason. The combined data is better at the same step budget.

### The Cybersecurity Result

The cybersecurity section is important because it demonstrates the method outside the usual math and coding comfort zone. Cybersecurity has lots of technical text and scarce open RLVR data. Golden Goose converts cybersecurity web text into verifiable multiple-choice reasoning tasks.

Training Qwen3-4B-Instruct on GooseReason-Cyber for 100 RL steps improves the average across CTI-MCQ, CyberMetric, and SecEval from 74.55 to 78.99. The resulting 4B model also surpasses the Primus cybersecurity baselines reported in the paper, despite those baselines being domain-specialized models built from extensive cybersecurity pretraining and post-training.

### Medium Takeaway

Golden Goose is a data-scaling paper disguised as a simple prompt trick. Its deeper idea is that the internet already contains massive amounts of reasoning-rich material that current RLVR pipelines throw away because the final answers are not automatically checkable. By converting hidden reasoning spans into multiple-choice infilling tasks, the paper makes that material usable for RL.

The result is a pragmatic recipe:

If you cannot verify a whole free-form solution, verify a carefully chosen local reasoning step.

That is the paper's central contribution. It does not solve all problems in RL data generation, but it gives a surprisingly scalable bridge between messy educational text and clean reward signals.

## Full-Length Version

## The Paper In One Sentence

Golden Goose shows how to turn reasoning-rich but otherwise unverifiable internet text into RLVR training data by masking important reasoning spans, generating plausible distractors, and training models on multiple-choice fill-in-the-middle tasks with exact-match rewards.

The paper's broader lesson is simple:

**RLVR does not always need naturally verifiable problems; it can sometimes manufacture verifiability by changing the question format.**

That is why the paper is interesting. It is not mainly an architecture paper or a new RL algorithm paper. It is a data-conversion paper. It asks whether the vast pile of messy proofs, explanations, forum answers, textbook solutions, and technical web writing can be made useful for reinforcement learning without requiring human experts to write formal verifiers.

The answer, according to the authors' experiments, is yes. Not perfectly and not for free, but well enough to revive saturated RL training, improve a 4B reasoning model across diverse benchmarks, and create useful domain data for cybersecurity.

## The Central Research Question

The paper is trying to answer this question:

**Can we scale RLVR beyond the small universe of naturally verifiable math and code problems by converting arbitrary reasoning-rich text into automatically checkable tasks?**

There are several subquestions inside that.

First, can an LLM synthesize reliable rewardable tasks from text that was not written as a benchmark? The source may be a forum solution, a textbook answer, a code explanation without tests, or a noisy web scrape.

Second, can those synthesized tasks provide real RL signal to models that have already saturated on existing RLVR datasets? More data is not automatically better. If the examples are too easy, too hard, ambiguous, or reward-hacky, they will not help.

Third, does the task format matter? The paper's answer is strongly yes. Open-ended infilling looks closer to natural reasoning, but multiple-choice infilling is much more compatible with simple verifiable rewards.

Fourth, can the method work outside math and competitive programming? This matters because the long-term promise of RLVR is not only better contest math. It is stronger reasoning in domains like science, medicine, law, security, engineering, and operations, where expert text is abundant but formal verifiers are scarce.

## Background: What RLVR Needs From Data

Reinforcement learning with verifiable rewards is appealing because the reward can be computed automatically. A model samples one or more responses. A verifier scores them. The RL algorithm pushes probability mass toward actions or answers that get the reward.

In the cleanest cases, the verifier is simple:

| Domain | Natural verifier |
| --- | --- |
| Short-answer math | Parse final answer and compare against a known value |
| Programming | Run unit tests in a sandbox |
| Formal proof | Check proof in a proof assistant |
| Multiple choice | Compare selected option against answer key |

This is powerful because it avoids one of the hardest parts of RLHF-style training: asking a human or model judge to evaluate free-form quality. If the reward is objective, scalable, and cheap, training can run at large rollout budgets.

But the reward has to exist.

For many valuable reasoning tasks, it does not. A scientific explanation may be correct in several different phrasings. A medical diagnostic argument may require nuance. A theorem proof may be long, informal, and structurally varied. A cybersecurity writeup may contain causal reasoning, empirical claims, and system assumptions. A code discussion may explain the bug and solution without providing test cases.

Those examples are educationally rich, but they are not RLVR-ready.

Golden Goose starts from that mismatch. It asks: instead of trying to verify the whole answer, can we create a smaller local decision that is easy to verify?

## Why Existing RLVR Data Saturates

The paper's practical motivation is data saturation.

In RLVR, an example is useful only if it can still teach the current model something. Suppose the model samples 16 rollouts for a problem.

If all 16 are correct, the problem is too easy. The reward does not distinguish better from worse behavior.

If all 16 are wrong, the problem may be too hard, ambiguous, or outside the model's reachable capability under the current policy. Again, there is little useful gradient signal.

The sweet spot is mixed success: some rollouts succeed and some fail. That means the model is near the boundary of learning, and the reward can push it toward better behavior.

The paper calls these effective examples. For the heavily RL-trained ProRL-1.5B-v2 model, only about 25% of the 136K examples in the original ProRL data blend remain effective. The rest are stale in the sense that they produce no meaningful contrast across rollouts.

This is an important framing. A large dataset can become small from the perspective of a trained model. The effective size of a dataset is not just the number of rows; it depends on the current policy.

That also explains why stronger models can saturate faster. A 4B model may already solve many examples that were useful for a 1.5B model. The data frontier has to move as the model improves.

## The Golden Goose Trick

Golden Goose turns a source text into a multiple-choice fill-in-the-middle problem.

The source text might contain a question and answer, a worked proof, a programming solution, a textbook explanation, or a cybersecurity passage. The synthesis model looks for a contiguous span that contains important reasoning. It removes that span and replaces it with `[MASK]`.

Then it creates distractors.

The correct answer is the removed span. The wrong answers are plausible continuations that match the style, length, and domain, but do not fit the actual context.

The student model sees the masked passage and options. Its job is to choose the option that best fills the missing span.

In rough notation:

| Symbol | Meaning |
| --- | --- |
| `S` | Source passage |
| `t` | Important reasoning span removed from `S` |
| `S_mask` | Source passage with `t` replaced by `[MASK]` |
| `D` | Set of generated distractors |
| `Q` | Multiple-choice task made from `S_mask`, `t`, and `D` |

The reward is now trivial. If the model selects the option containing `t`, reward 1. Otherwise, reward 0.

The trick is that the verifier no longer has to understand chemistry, proof structure, cybersecurity, or code semantics. The synthesis stage puts the semantics into the construction of the options. The RL stage only needs to check the answer key.

This is both clever and slightly dangerous. It moves much of the intellectual burden from reward computation to data synthesis. If the masked span is not important, the distractors are weak, or the correct answer is ambiguous, the reward will be clean but not meaningful. The rest of the paper is largely an argument that, at scale and with filtering, the method produces enough meaningful examples to help.

## The Data Synthesis Pipeline

The pipeline has four main stages.

### Stage 1: Start With Reasoning-Rich Text

The method needs passages that contain real reasoning. The paper emphasizes reasoning-rich unverifiable text, not arbitrary web text.

For relatively clean sources such as textbook QA or code solutions, the input may already be coherent. For noisy sources such as raw FineWeb cybersecurity scrapes, the synthesis model first extracts or summarizes an educationally valuable passage. If there is no usable passage, it is supposed to return an empty string.

That first filter matters. Golden Goose is not magic spam conversion. The source still needs informational substance.

### Stage 2: Mask A Crucial Span

The synthesis model identifies several consecutive reasoning steps and removes them. The removed content should be locally necessary. If the span is too obvious from surrounding words, the task becomes too easy. If the span is too arbitrary, the task becomes a memorization or style-matching exercise rather than reasoning.

Good masked spans are the places where the reader has to understand why the next step follows.

Examples include:

- a key algebraic transformation in a proof,
- a line inside a dynamic-memory allocation explanation,
- a balanced chemical reaction step,
- the causal interpretation of a cybersecurity observation,
- the central diagnostic inference in a technical explanation.

### Stage 3: Generate Plausible Distractors

The synthesis model creates distractors that are similar to the correct span in style and length but wrong in context.

This is critical. Bad distractors make the problem shallow. If the wrong options are obviously unrelated, the student can answer by style or elimination. Strong distractors force the model to reason about the surrounding context.

The paper uses the strongest available LLM at the time of the experiment, GPT-5, for synthesis. That is an important detail because the method depends on the teacher model's ability to identify meaningful spans and create plausible alternatives.

### Stage 4: Filter For Difficulty When Needed

For reasoning-dense sources such as AoPS-Instruct, rStar-Coder, and MegaScience, the authors report that the generated questions were strong enough without heavy post-processing.

For noisy sources such as FineWeb cybersecurity scrapes, they add difficulty-based filtering. They run the student model with multiple rollouts and remove easy problems where the model consistently succeeds. The paper mentions 16 rollouts in this filtering/effectiveness analysis.

The idea is to keep examples in the medium-difficulty band: not too easy, not hopeless.

## Why Multiple Choice Instead Of Open-Ended Infilling

The most important design choice in the paper is multiple-choice infilling.

An obvious alternative is open-ended fill-in-the-middle. Show the passage with a missing span and ask the model to write the missing text. Then use an LLM judge to decide whether the generated span matches the removed answer.

That seems more natural, but the paper argues it fails in practice for two reasons.

First, judging open-ended spans is expensive. You need a strong judge model during RL training, and that judge has to compare free-form text to the original answer. That adds cost, latency, and another source of error.

Second, heavily RL-trained reasoning models may not follow the fill-in-the-middle instruction. Instead of reconstructing the missing span, they may solve the underlying problem from scratch or produce an alternative explanation. That can be intellectually valid but incompatible with the infilling reward.

The paper reports that in the open-ended version of GooseReason-Math, more than 83% of examples lead ProRL-1.5B-v2 to consistent zero accuracy. In other words, the open-ended format produces little usable RL signal for that model.

Multiple choice fixes the interface. It constrains the action space and gives an exact verifier.

### Why Nine Choices?

The number of distractors controls difficulty.

With too few options, the model can often eliminate bad choices. The task becomes less about reconstructing the masked reasoning and more about spotting the obviously wrong alternatives.

With more options, elimination becomes harder. The model has to understand the context more deeply. The paper's key ablation shows that the 9-choice multiple-choice format places more than 70% of problems into a medium-difficulty regime for ProRL-1.5B-v2, meaning examples have both successful and failed rollouts.

That is exactly what RL needs.

The design principle is worth remembering:

**Distractors are not just wrong answers. They are a difficulty-control mechanism.**

## The Source Corpora

The paper builds GooseReason-0.7M from three major reasoning-domain sources.

### AoPS-Instruct

AoPS-Instruct contains about 600K question-answer pairs extracted from the Art of Problem Solving forum. The source is valuable because it includes Olympiad-level problems and community-written solutions.

It is also difficult for ordinary RLVR pipelines. Forum solutions can be noisy, incomplete, informal, and stylistically varied. Many problems are theorem-proving problems, where the answer is an entire proof rather than a short expression. A standard math-answer verifier cannot check that kind of solution.

Golden Goose can still use the material by turning local proof steps into multiple-choice infilling decisions.

### rStar-Coder

rStar-Coder contains competitive-programming style problems and oracle solutions. The relevant issue is not that code is impossible to verify in principle. Code can often be tested. The issue is that many synthesized examples do not have usable tests.

The paper notes that rStar-Coder starts from 37.7K expert-written problems and synthesizes many more problems, but only 380K out of 1.656M synthesized questions successfully obtain test cases through that pipeline. The released synthetic SFT split contains questions and teacher-model solutions without test cases, making it hard to use directly for RLVR.

Golden Goose converts these problem-solution texts into verifiable multiple-choice tasks without needing to write unit tests.

### MegaScience

MegaScience contains about 650K question-answer pairs from nearly 12K university-level textbooks. It spans domains such as physics, biology, chemistry, medicine, computer science, mathematics, and economics.

This is exactly the kind of material that ordinary RLVR struggles with. A chemistry solution may involve specialized notation. A medical or economics answer may be multi-paragraph and explanatory. A scientific derivation may have many valid phrasings.

Golden Goose uses the local-step trick: do not verify the whole textbook answer; verify whether the model can choose the missing reasoning span.

### GooseReason-0.7M

From these sources, the authors synthesize more than 0.7 million RLVR tasks. Figure 3 in the paper compares GooseReason against the existing ProRL training data in total examples and effective examples. The headline is that GooseReason adds more than 450K effective examples across math, code, and STEM, a 13x increase over the effective examples in the ProRL dataset for the saturated ProRL-1.5B-v2 model.

That is the paper's main data claim. The important unit is not rows. It is effective RL signal.

## The Experiments

The paper evaluates Golden Goose in three settings:

| Setting | Question |
| --- | --- |
| Continued RL on a saturated 1.5B model | Can GooseReason revive training after existing data gets stale? |
| Continued and from-scratch RL on a 4B model | Can GooseReason help stronger models that saturate faster? |
| Cybersecurity domain RLVR | Can the method create useful RLVR data in a domain with little existing verifiable data? |

### RL Algorithm

Golden Goose is presented as data, not a new RL algorithm. The authors use the ProRLv2 recipe, a variant of GRPO designed for stable long-horizon RL training. The paper describes it as using a clipped GRPO objective plus decoupled advantage normalization from REINFORCE++, with group-wise mean subtraction followed by batch-level standardization.

The methodological point is that GooseReason should be pluggable into existing RLVR recipes. The authors are not claiming that the gains come from a new optimizer.

### Evaluation Benchmarks

The evaluation covers 15 benchmarks across several domains.

Math:

- AIME 2024,
- AIME 2025,
- AMC,
- MATH,
- Minerva,
- Olympiad Bench.

Coding:

- APPS,
- CodeContests,
- CodeForces,
- TACO,
- HumanEvalPlus,
- LiveCodeBench.

Other reasoning:

- GPQA Diamond for STEM reasoning,
- IFEval for instruction following,
- Reasoning Gym for math, algorithmic, cognition, and logic puzzle tasks.

The non-MCQ benchmarks are important. If a model trained on multiple-choice infilling only improved on multiple-choice infilling, the result would be much less interesting. The paper's claim is that the training improves general reasoning behavior beyond the exact training format.

## Main Results

### Result 1: GooseReason Revives A Saturated 1.5B RL Model

The first major experiment starts from ProRL-1.5B-v2, a heavily RL-trained model originally trained from R1-Distill-Qwen-1.5B with over 20K H100 GPU hours. This model has already saturated on the original ProRL data blend.

Continuing RL on the original data yields marginal improvement over an additional 1,100 H100 GPU hours.

Adding GooseReason-0.7M changes the picture.

The paper reports continued-RL gains of:

| Domain | Original ProRL data | With GooseReason |
| --- | ---: | ---: |
| Math | 0.63% | 2.71% |
| Coding | 0.95% | 2.12% |
| STEM | 0.13% | 3.48% |

The largest difference is in STEM. That is intuitive because existing RLVR data is relatively richer in math and code than in general science. GooseReason can harvest textbook-style scientific reasoning that was previously hard to use.

The important lesson is that RL training did not stop because the optimizer ran out of ideas. It stopped because the data stopped producing useful contrast. Fresh medium-difficulty data reopened the learning signal.

### Result 2: Stronger Models Saturate Earlier

The paper then applies a similar recipe to Qwen3-4B-Instruct.

This is where saturation becomes more severe. The ProRL recipe can train weaker 1.5B models for many steps, but Qwen3-4B-Instruct plateaus or degrades after roughly 300 steps on the original ProRL data.

After 333 RL steps with ProRL data, the authors compare continued training with the same data against continued training with GooseReason added.

In the paper's summary, further training on the original ProRL data causes:

- a 1.29% loss in math,
- a marginal 0.43% coding gain,
- a 1.52% loss in STEM.

With GooseReason, the trend reverses:

- 2.18% gain in math,
- 2.24% gain in coding,
- 2.40% gain in STEM.

The table values show the same story. For math average, Qwen3-4B-Instruct starts at 68.21, improves to 71.65 after ProRL training, falls to 70.36 with more original-data training, and rises to 73.83 when GooseReason is added. For coding average, it moves from 42.63 to 53.46, then 53.89 with more original data, and 55.70 with GooseReason. GPQA Diamond moves from 60.26 to 64.39, then down to 62.87 with more original data, and up to 66.79 with GooseReason.

The resulting GooseReason-4B-Instruct model sets new state-of-the-art results among 4B-Instruct models across the paper's 15 benchmarks. The authors also compare against Qwen3-30B-Instruct as a larger reference point and report that the trained 4B model becomes comparable to or better than that 30B reference on several benchmarks.

### Result 3: The Gains Transfer Beyond The Training Format

A natural concern is that a model trained on multiple-choice masked-span tasks might simply become better at multiple-choice masked-span tasks.

The paper argues against that narrow interpretation by evaluating on standard math, code, STEM, instruction-following, and reasoning benchmarks. Many of these are not multiple-choice infilling tasks.

The transfer to Reasoning Gym is especially interesting because the GooseReason data does not explicitly cover all of those downstream task families. The paper reports further improvement on logical-puzzle style tasks, suggesting that the model may be learning more general reasoning habits.

This does not prove a clean mechanism. It does show that the training signal is not purely locked to the surface format.

### Result 4: GooseReason Improves Fixed-Compute RL

The paper also studies a compute-constrained setting. Instead of starting from a saturated model and continuing training, it trains Qwen3-4B-Instruct from scratch for 200 RL steps.

The comparison is ProRL data alone versus ProRL plus GooseReason.

The result is that joint training with GooseReason consistently performs better at the same number of steps. This matters because it shows the method is not only a rescue strategy after saturation. It can also improve the efficiency of RL training from the beginning.

The practical implication is straightforward:

If RL compute is fixed, data diversity and data effectiveness matter even more.

## The Cybersecurity Deployment

The cybersecurity experiment is the paper's strongest argument that Golden Goose is not merely a math/code dataset hack.

Cybersecurity has lots of useful text:

- vulnerability writeups,
- threat-intelligence reports,
- exploit explanations,
- system-administration discussions,
- incident reports,
- defensive guidance,
- empirical observations from real systems.

But it has little open RLVR data. There is no easy equivalent of "run unit tests" for a threat-intelligence reasoning answer. Many useful examples are narrative, causal, and context-dependent.

Golden Goose uses cybersecurity-related web scrapes, mainly from the FineWeb-derived corpus associated with Primus, and synthesizes about 180K RLVR tasks. Because the source is noisy, the pipeline first extracts coherent educational passages before creating the masked-span multiple-choice tasks.

The authors train Qwen3-4B-Instruct on GooseReason-Cyber for 100 RL steps and evaluate on:

| Benchmark | What it tests |
| --- | --- |
| CTI-MCQ | Cyber threat intelligence and vulnerability analysis |
| CyberMetric | Cybersecurity knowledge such as compliance and penetration testing |
| SecEval | Foundational software and network security |

The reported numbers are:

| Model | CTI-MCQ | CyberMetric | SecEval | Average |
| --- | ---: | ---: | ---: | ---: |
| Qwen3-4B-Instruct | 63.44 | 89.78 | 70.44 | 74.55 |
| GooseReason-Cyber-4B | 73.79 | 92.05 | 71.14 | 78.99 |

That is a 4.44 point average gain.

The model also surpasses the Primus baselines reported in the table. That is notable because the Primus models are domain-specialized cybersecurity models built on Llama-3.1-8B-Instruct with extensive domain-specific pretraining and post-training. The lesson is not that general 4B models are always better than domain-specialized 8B models. The lesson is that scalable RLVR data can be a very strong domain-adaptation lever when the domain contains abundant reasoning-rich text.

The cybersecurity section also has an impact caveat. Better cybersecurity reasoning can support defense, vulnerability analysis, and incident response, but it is dual-use. A data pipeline that improves reasoning in cybersecurity could also improve offensive capability if applied carelessly.

## What Makes The Paper Convincing

The paper is convincing in part because the main idea is simple enough to be testable. There is no complicated hidden mechanism. The hypothesis is:

If we convert reasoning-rich text into verifiable masked-span MCQs, then the resulting tasks will provide useful RL signal.

The authors test that hypothesis in several complementary ways.

First, they measure effective examples, not just dataset size. This is the right diagnostic for RLVR saturation. A million examples do not matter if the current policy always succeeds or always fails. The paper's effective-example analysis directly explains why GooseReason helps.

Second, they run continued-training experiments after saturation. That is a hard setting. If a model has already stopped improving on the existing data, new gains are evidence that the data distribution is genuinely adding something.

Third, they evaluate on non-MCQ downstream tasks. This addresses the most obvious worry about multiple-choice training. The gains are not confined to the exact training format.

Fourth, the cybersecurity deployment tests domain transfer. The method is applied to raw web-derived text in a domain where ordinary RLVR data is scarce. That is closer to the paper's long-term promise than yet another math benchmark.

Fifth, the design ablations are directly tied to the method. The comparison between open-ended and multiple-choice infilling explains why the answer format matters. The distractor-count ablation explains why 9-choice questions are useful. These are not decorative ablations; they teach how to use the method.

## Limitations And Critical Reading

Golden Goose is useful, but it should not be read as "unlimited clean RL data from the internet." Several caveats matter.

### The Reward Is Verifiable, But The Task Construction Is Not Automatically True

The final reward is exact-match against the answer key. That part is verifiable.

But the answer key itself comes from the synthesis process. If the masked span is ambiguous, if a distractor is also valid, or if the source passage contains an error, then the reward can be cleanly wrong.

This is a classic synthetic-data issue. Verification has moved from runtime reward computation into upstream dataset construction.

### The Method Depends On A Strong Teacher Model

The paper uses GPT-5 for synthesis. That is reasonable for a high-quality data pipeline, but it means the method depends on access to a strong teacher model and enough budget to run it at scale.

The paper's "simple trick" is conceptually simple, but producing 0.7M high-quality tasks is still an industrial data-generation operation.

An important future question is how the method performs with weaker, cheaper, open-weight synthesis models, and how much quality falls when the teacher is less capable.

### Multiple Choice Can Reward Test-Taking Shortcuts

Multiple choice makes RL feasible, but it also introduces multiple-choice artifacts.

A model may learn to compare options, detect common distractor patterns, or exploit stylistic clues. The paper mitigates this by using many plausible distractors and evaluating on non-MCQ benchmarks. Still, the concern does not disappear.

The best reading is that Golden Goose creates a useful reasoning signal, not a perfect imitation of open-ended reasoning.

### "Unverifiable Text" Is Not The Same As "Reliable Text"

The internet contains reasoning-rich material, but it also contains mistakes, outdated claims, hallucinated explanations, bias, toxic content, copied benchmark items, and adversarial writing.

Golden Goose can transform text into RL tasks, but it cannot guarantee the source text is correct. Source filtering, deduplication, contamination checks, and domain-specific quality controls still matter.

This is especially important for domains like medicine, law, and cybersecurity, where wrong reasoning can have high consequences.

### Benchmark Contamination Needs Careful Treatment

Any web-derived training data raises contamination concerns. The paper's gains across many benchmarks are meaningful, but the general risk remains: if source corpora overlap with evaluation benchmarks or their solutions, results can be inflated.

This is not unique to Golden Goose. It is a general issue for large-scale web-derived training data. But because Golden Goose is explicitly designed to reuse internet text for RL, contamination analysis becomes even more important.

### The Cybersecurity Result Is Dual-Use

The cybersecurity deployment is impressive, but it also shows that this method can improve specialized technical reasoning in domains with dual-use risks.

The paper acknowledges this. A responsible deployment would need source controls, task filtering, capability evaluations, and restrictions around offensive content. The method itself is domain-general, so governance has to happen at the data and deployment layers.

### The Method Does Not Replace Domain Verifiers

If a domain has a real verifier, such as unit tests, symbolic checks, or formal proof checking, those are still valuable. Golden Goose is best seen as a complement for material that would otherwise be thrown away.

The ideal future pipeline might combine:

- natural verifiers where they exist,
- generated verifiable environments where possible,
- Golden Goose-style masked-span tasks for rich informal text,
- human or expert review for high-risk domains.

## Open Questions

1. **How often are the generated answer keys wrong or ambiguous?** Exact-match reward is only as good as the data construction. A careful human audit across domains would help quantify label noise.

2. **How much of the gain comes from reasoning versus option comparison?** The non-MCQ benchmark gains are encouraging, but more probing could separate genuine reasoning improvement from multiple-choice strategy learning.

3. **Can smaller or open synthesis models produce comparable GooseReason data?** GPT-5-quality synthesis may be expensive. The cost-quality frontier matters if this becomes a general data factory.

4. **What is the best way to filter source text before synthesis?** The paper uses reasoning-rich corpora and difficulty filtering, but source trustworthiness is a separate axis from difficulty.

5. **Can Golden Goose be made adaptive?** Instead of synthesizing a static dataset, a pipeline could generate new masked-span tasks targeted to the current model's failure boundary.

6. **How does this interact with curriculum design?** The number of choices, source domain, masked-span length, and difficulty filter could be scheduled over training.

7. **What happens in high-stakes expert domains?** Law, medicine, and cybersecurity have abundant text but high error costs. The method may help, but it needs stricter data governance.

8. **Can the method create false confidence?** A model might get better at recognizing locally plausible spans without becoming reliable at generating full expert solutions.

9. **How should contamination be measured for masked-span tasks?** A benchmark item might not appear verbatim, but a solution passage or explanation could still leak through the source corpus.

10. **Can learned reward models use Golden Goose data as a stepping stone?** Multiple-choice exact rewards might train stronger reasoning representations that later support more open-ended reward modeling.

## The Takeaway

Golden Goose is valuable because it reframes the RLVR data bottleneck.

The usual assumption is:

**To use RLVR, we need naturally verifiable tasks.**

The paper proposes a more flexible assumption:

**To use RLVR, we need a verifiable decision extracted from a useful reasoning context.**

That distinction opens up a lot of data. A theorem proof may not be automatically checkable as a whole, but a missing proof step can become a multiple-choice decision. A textbook explanation may not have a short answer, but a missing causal step can become a rewardable task. A cybersecurity writeup may not have unit tests, but a missing technical inference can become a verifiable option-selection problem.

The method's strength is also its weakness. It makes reward computation easy by relying heavily on synthesis quality. That means the future of this approach depends on good teacher models, good source filtering, good distractors, and careful audits.

Still, the central lesson is durable:

**When full-solution verification is too hard, local-step verification may be enough to scale useful RL.**

That is why the paper matters. It turns messy educational text into a reinforcement-learning substrate.

## Memory Checklist

- RLVR means reinforcement learning with verifiable rewards.
- Existing RLVR data saturates when examples become too easy or too hard for the current model.
- An effective example has mixed rollout outcomes: some successes and some failures.
- Golden Goose converts unverifiable reasoning text into multiple-choice fill-in-the-middle tasks.
- The correct answer is the masked span from the original source text.
- Distractors must be plausible, similar in style, and wrong in context.
- The reward is exact-match against the correct option.
- GooseReason-0.7M contains more than 0.7 million tasks from AoPS-Instruct, rStar-Coder, and MegaScience.
- The paper reports that GooseReason adds more than 450K effective examples, about a 13x increase over effective ProRL examples for ProRL-1.5B-v2.
- Multiple-choice infilling works better than open-ended infilling because it avoids expensive judging and instruction-following failures.
- Too few distractors make the task easy; 9-choice MCQ gives many medium-difficulty examples.
- GooseReason revives saturated RL training on ProRL-1.5B-v2 and Qwen3-4B-Instruct.
- The gains transfer to non-MCQ benchmarks across math, code, STEM, instruction following, and logic.
- GooseReason-Cyber uses about 180K synthesized cybersecurity tasks from web-derived text.
- The cybersecurity-trained 4B model improves from 74.55 to 78.99 average across the paper's three cybersecurity benchmarks.
- The core critique: exact rewards do not guarantee correct task construction.
- The core lesson: if full-solution verification is hard, local-step verification can still provide scalable RL signal.
