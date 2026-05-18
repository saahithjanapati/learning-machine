# Distilled Pretraining: A Modern Lens Of Data, In-Context Learning And Test-Time Scaling

Source: `https://arxiv.org/pdf/2509.01649`
arXiv: `2509.01649`
Title: `Distilled Pretraining: A modern lens of Data, In-Context Learning and Test-Time Scaling`
Authors: Sachin Goyal, David Lopez-Paz, Kartik Ahuja
Published: `2025-09-01`
PDF date: `2025-09-03`
Ingested: `2026-05-18`
Extraction engine: `official arXiv PDF via PyMuPDF text extraction`
Strategy: `paper extraction, structured study note, medium/full AI lesson normalization, and Scale AI prep cross-filing`
Regular filing: `AI / Collection`
Research prep filing: `Scale AI research internship prep; pretraining; distillation; test-time scaling; in-context learning; RLVR`

## Summary

This paper studies distilled pretraining, where a smaller language model is pretrained not only on next-token hard labels from data, but also on soft probability distributions from a larger teacher model. The authors ask whether distillation helps only because the teacher has seen more data, or whether it gives benefits even when the student and teacher are trained on the same dataset.

Their answer is nuanced. Distilled pretraining remains useful even in the IsoData setting where the 1B student and 8B teacher see the same 1T tokens. It improves ordinary language-modeling performance and strongly improves test-time scaling as measured by pass@k on reasoning and coding tasks. However, it can hurt in-context learning, especially tasks that require copying from context. The paper ties this tradeoff to entropy: teacher soft labels help high-entropy next-token distributions, but can blur low-entropy deterministic mappings that induction heads need.

In short, distillation makes the student better at representing multiple plausible continuations, which helps diversity and pass@k. But the same softening can inject noise into places where the correct behavior is to copy one specific token from context.

## Core Question

Recent LLM families such as Llama 3.2 and Gemma use distillation during pretraining. The practical motivation is clear: very large models are expensive to deploy, so they may increasingly act as teachers for smaller deployable models.

The scientific question is less clear:

- Does distillation help because the teacher saw extra data?
- Or does the soft-label training signal itself help the student?
- What does distillation do to modern LLM capabilities such as in-context learning and test-time scaling?

The paper separates these questions by using IsoData experiments. The teacher is an 8B model trained on 1T tokens. The student is a 1B model trained with and without distillation on the same 1T tokens.

## Distillation Objective

The paper uses the standard Hinton-style knowledge distillation objective. The student is trained with a mixture of:

- ordinary cross-entropy against the ground-truth next token;
- cross-entropy against the teacher's softened output distribution.

The key hyperparameters are:

- `alpha`: the weight on the teacher soft-label loss;
- `T`: the temperature used to soften teacher probabilities.

For language modeling, this means every next-token prediction can receive two supervision signals: the observed token from the dataset and the teacher's distribution over plausible next tokens.

## IsoData Result

The authors show that distilled pretraining continues to help on standard language-modeling tasks even when the teacher and student see the same data.

The paper evaluates models on tasks such as HellaSwag, Natural Questions, MBPP, COPA, TriviaQA, GSM8K, and related benchmarks. The distilled student often outperforms standard pretraining at the same data scale, including when both teacher and student have been trained on the same 1T-token dataset.

This matters because it weakens the simplest explanation for distillation gains. Distillation is not only a backdoor for letting the student benefit from extra teacher data. The soft labels themselves can improve the student, especially in data-constrained regimes.

The authors also argue that compute-matched comparisons are not always the most relevant practical setup. Teacher logits can be cached or generated with cheaper distributed inference, and future LLM training may become more data-constrained as the data wall gets tighter.

## In-Context Learning Tradeoff

The paper's first major tradeoff is that distilled pretraining can hurt in-context learning.

The authors evaluate ICL through:

- context-based QA, using tasks such as DROP and RACE;
- needle-in-a-haystack retrieval, using babilong;
- counterfactual context QA, where the answer in the prompt contradicts the model's parametric memory.

As training data increases toward the IsoData setting, the initial ICL advantage from distillation fades. At 1T tokens, the distilled model underperforms standard pretraining on needle-in-a-haystack and counterfactual context QA.

The authors connect this to induction heads. Induction heads are circuits that help the model copy a token from earlier in the context. They are useful when the prompt says, in effect, "this name or value appeared earlier; reuse that exact thing now."

Distillation can be bad for that behavior because copying is low-entropy. If the correct next token is exactly one token from the context, the hard label already gives the needed signal. A perfect teacher would provide the same one-hot signal. But a real teacher may put probability mass on distractor tokens, turning a clean copy target into a softened target.

## Test-Time Scaling Benefit

The second major result is that distilled pretraining improves generation diversity and test-time scaling.

The authors evaluate pass@k on GSM8K, MATH500, and MBPP. In pass@k, the model gets multiple attempts, and the evaluation asks whether any attempt is correct. This rewards not only the top answer but the model's ability to cover multiple plausible solution paths.

The reported pattern is that distilled models can have similar or worse pass@1 but better pass@16. On GSM8K, the introduction highlights a standard pretrained model and a distilled model with similar pass@1, but the distilled model reaches a higher pass@16, about 27-28% versus 23% depending on the plotted comparison. The distilled model can even match or beat a standard pretrained model trained on twice as much data in pass@16.

The authors also sweep sampling temperature and plot pass@1 against pass@16. This matters because otherwise the result might be explained by simply turning up temperature. The distilled model's curve generally sits above the standard-pretraining curve, meaning that at similar pass@1 it gets better pass@16.

## Entropy Explanation

The central explanatory lens is entropy.

For high-entropy prompts, there are many plausible continuations. For example, "I work at" could be followed by "hospital", "gym", "restaurant", or many other words. The dataset hard label shows only one continuation. The teacher distribution can reveal other plausible continuations. This helps the student learn a richer next-token distribution.

For low-entropy prompts, there is one correct continuation. Induction and copying tasks often look like this. The model should copy the exact token from context. In this case, teacher soft labels add little value if the teacher is perfect and can actively hurt if the teacher spreads probability mass onto wrong tokens.

This is the paper's unifying mechanism:

- high-entropy rows benefit from teacher distributions;
- low-entropy rows do not benefit and can be harmed;
- high-entropy learning improves generation diversity and pass@k;
- low-entropy degradation hurts induction heads and in-context learning.

## Bigram Sandbox

To make the entropy argument more precise, the paper studies a simplified bigram model. A bigram model is a transition matrix where each row gives the next-token distribution after a current token.

The authors divide rows into high-entropy and low-entropy rows. High-entropy rows correspond to prompts with many valid completions. Low-entropy rows correspond to deterministic transitions or induction-style copy behavior.

The bigram analysis shows that distillation accelerates learning for high-entropy rows because the teacher gives dense information about the full distribution. For low-entropy rows, distillation gives no advantage with a perfect teacher and can hurt with an imperfect teacher.

The paper then uses this setup to explain both empirical phenomena:

- better high-entropy distribution learning gives better pass@k;
- softened low-entropy supervision weakens induction-head-like behavior.

## Why Pass@k Likes Distillation

The paper includes a simple classification example showing that the Bayes-optimal classifier for pass@1 is not necessarily optimal for pass@k.

Pass@1 mainly needs the top prediction to be right. It does not require the model to estimate the full probability distribution accurately. Pass@k rewards coverage: if several attempts are sampled, the model benefits from placing probability mass across multiple plausible answers.

This is why distillation helps. Teacher soft labels teach a fuller distribution, not just the single observed label. That richer distribution may not improve the top answer, but it can make the model's sampled attempts more diverse and more likely to include a correct solution.

## Practitioner Guidance

### Token Routing

The paper proposes token routing as a mitigation for the ICL loss. Instead of applying distillation loss to every token, compute the entropy of the teacher distribution and skip distillation on the lowest-entropy tokens. For those positions, train only on the hard ground-truth next-token loss.

With routing on the 15% lowest-entropy tokens, the paper reports improvements over vanilla distillation on two of three ICL tasks, partially closing the gap to standard pretraining without hurting standard benchmark performance. Routing 30% does not help further and can hurt.

This supports the entropy story: the gains come from high-entropy teacher labels, so low-entropy tokens should be protected from soft-label noise.

### Distillation Versus Multi-Token Prediction

The paper compares next-token prediction, multi-token prediction, and distillation. In the IsoData setup, distillation generally has better pass@16 than next-token prediction and multi-token prediction on GSM8K and MBPP, and is comparable on MATH.

The takeaway is not that multi-token prediction is bad. It is that distillation is a strong pretraining tool for models meant to benefit from verifier-driven inference and test-time search.

### Teacher Choice

The paper also compares distilling from base, instruction-tuned, and RL-trained versions of an 8B teacher. Surprisingly, the RL-trained teacher produces the best student across reasoning, coding, and some general benchmarks.

This challenges the default assumption that the base model is always the most natural teacher for pretraining. A stronger teacher's capability may outweigh mismatch with the pure next-token pretraining objective.

### Top-k Logit Distillation

The paper studies practical approximations where only top-k teacher logits are used. Even top-k equals 1 can outperform standard pretraining, likely because teacher-selected tokens act like token-level synthetic data and filter out outlier ground-truth tokens. Richer top-k distributions can preserve more of the teacher's probability information.

## Why The Paper Matters

This paper is useful because it treats distillation not as a generic "teacher makes student better" trick, but as a distribution-shaping intervention with specific consequences.

For post-training and RLVR work, the test-time scaling result is important. If RL and verifier search mostly sharpen or select from base-model capabilities, then a base model with more diverse plausible solution paths can be easier to improve downstream.

For long-context and agent work, the ICL result is a warning. A model can become better at diverse generation while becoming worse at copying exact context details. That matters for retrieval, tool outputs, memory, codebase context, and user-specific facts.

For data work, the paper suggests that pretraining data and objectives should be curated differently for distilled pretraining than for ordinary next-token prediction. Low-entropy and high-entropy tokens may deserve different treatment.

## Limitations And Caveats

The main models are 1B students and 8B teachers, so results need to be tested at larger scales.

The ICL evaluations focus on copying and context-use tasks. In-context learning is broader than induction heads, so the result should not be read as "distillation hurts all forms of ICL equally."

Pass@k diversity is not the same as creativity or reasoning quality. Better pass@16 can mean a model samples more useful alternatives, but it can also interact with verifier quality and sampling settings.

The teacher-choice result is surprising but preliminary. Distilling from RL-trained teachers may work well in these settings, but could also transfer teacher-specific biases, refusals, styles, or reward artifacts.

The token-routing mitigation is promising but simple. It depends on teacher entropy as a proxy for where distillation is useful, and future work may need more nuanced routing based on task type, token role, position, or context function.

## Study Questions

1. What is the difference between ordinary next-token pretraining and distilled pretraining?
2. Why does IsoData distillation matter as a control?
3. Why do teacher soft labels help high-entropy prompts?
4. Why can soft labels hurt induction-head-like copying behavior?
5. Why can a model have worse pass@1 but better pass@16?
6. How does token routing decide where to skip distillation?
7. Why might an RL-trained teacher outperform a base teacher for pretraining distillation?

