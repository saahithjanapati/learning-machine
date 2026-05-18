# Distilled Pretraining And The Diversity-ICL Tradeoff

Source note: This lesson is based on Sachin Goyal, David Lopez-Paz, and Kartik Ahuja, "Distilled Pretraining: A modern lens of Data, In-Context Learning and Test-Time Scaling," arXiv:2509.01649, published September 1, 2025. Source PDF: [arxiv.org/pdf/2509.01649](https://arxiv.org/pdf/2509.01649). Processed source: [materials/processed/ai/distilled-pretraining-data-in-context-learning-test-time-scaling.md](../../../materials/processed/ai/distilled-pretraining-data-in-context-learning-test-time-scaling.md).

Filing note: This is filed normally under `AI / Collection` and cross-listed under [Scale AI Research Internship Prep](../scale-ai-research-internship-prep/README.md) as `pretraining`, `distillation`, `test-time scaling`, `in-context learning`, and `RLVR`.

## Table of Contents

- [Medium-Length Version](#medium-length-version)
- [Full-Length Version](#full-length-version)

## Medium-Length Version

Distilled pretraining trains a smaller model using both the real next token and the soft probability distribution from a larger teacher model. Instead of telling the student only "the next word was hospital," the teacher might say "hospital is likely, but gym, restaurant, and school are also plausible."

This paper asks what that does to modern LLM capabilities.

The answer is a tradeoff:

- distillation improves test-time scaling because it teaches richer, more diverse output distributions;
- distillation can hurt in-context learning because it softens low-entropy copying targets that should stay exact.

The authors first control for a major confound. Maybe distillation helps only because the teacher has seen more data. To test that, they run IsoData experiments: train an 8B teacher on 1T tokens, then train 1B students with and without distillation on the same 1T tokens. Distillation still helps on many standard language modeling tasks. So the benefit is not only hidden extra data from the teacher.

The test-time scaling result is the positive side. On tasks like GSM8K, MATH500, and MBPP, distilled models can have similar or worse pass@1 but better pass@16. That means their first answer may not be better, but their set of sampled attempts covers more useful alternatives. For verifier-driven inference, that is valuable: if you can sample several attempts and check them, diversity matters.

The in-context learning result is the negative side. ICL often depends on induction heads: circuits that copy a specific token from earlier in the prompt. Copying is a low-entropy behavior. If the answer should be exactly the token "Gym" from the context, the hard label already gives the clean signal. A teacher's soft distribution can add noise by placing probability on distractors.

The paper's unifying explanation is entropy:

- high-entropy prompts have many plausible continuations, so teacher distributions help;
- low-entropy prompts have one correct continuation, so soft labels can blur the target;
- high-entropy learning improves pass@k diversity;
- low-entropy blurring hurts induction and context copying.

The authors support this with a bigram sandbox, where rows of the transition matrix are classified as high entropy or low entropy. Distillation accelerates learning for high-entropy rows but gives little benefit, and sometimes harm, for low-entropy rows.

The practical fix is token routing. Skip the distillation loss on the lowest-entropy teacher outputs and use only the hard label there. Routing the 15% lowest-entropy tokens improves ICL on two of three evaluated tasks without hurting standard benchmark performance.

The memory hook:

Distillation teaches the student the teacher's distribution. That helps when the distribution is genuinely broad, and hurts when the correct behavior is exact copying.

## Full-Length Version

### Research Question

Distillation is becoming central to LLM training. The largest models are too expensive to deploy everywhere, so they increasingly become teachers for smaller models. Recent Llama and Gemma model families use distillation during pretraining, not only during post-training.

The paper asks three questions:

1. Does distilled pretraining help beyond giving the student indirect access to extra teacher data?
2. What does it do to in-context learning?
3. What does it do to test-time scaling?

Those questions matter because modern LLMs are not judged only by static benchmark accuracy. They are also judged by whether they can use long prompts, copy context, generate diverse solution attempts, and benefit from search or verifier selection at inference time.

### What Distilled Pretraining Is

Ordinary language-model pretraining uses hard labels. For each prefix, the model predicts the actual next token in the corpus.

Distilled pretraining adds soft labels from a teacher model. The student still sees the real next token, but it also tries to match the teacher's probability distribution over the vocabulary.

The loss is a mixture:

- ground-truth next-token cross-entropy;
- teacher-distribution cross-entropy.

The mixture weight is `alpha`, and the teacher distribution can be softened with temperature `T`.

This is more informative than one-hot training when many next tokens are plausible. A dataset only records one continuation, but the teacher can tell the student that several continuations make sense.

### Why IsoData Matters

A common objection is that distillation helps because the teacher model has seen more data. If a teacher trained on 10T tokens supervises a student trained on 1T tokens, the student may inherit some information from the teacher's larger data exposure.

The paper controls for this with IsoData experiments.

The setup:

- train an 8B teacher on 1T tokens;
- train 1B students on the same 1T tokens;
- compare standard pretraining and distilled pretraining.

Distillation still improves performance on many standard tasks. This suggests that soft-label training has its own value. It is not merely a wrapper around extra teacher data.

The authors also argue that data-constrained comparisons may be more relevant than strict compute-matched comparisons. As high-quality data becomes scarce, the question is not only "how many FLOPs did teacher inference cost?" but also "can we extract more learning signal from the same tokens?"

### The Good News: Test-Time Scaling

Distilled pretraining improves pass@k.

Pass@k asks whether any of `k` sampled attempts solves the problem. It is central to reasoning and coding workflows where a model can produce multiple candidate solutions and a verifier, test suite, or reward model can choose among them.

The paper evaluates GSM8K, MATH500, and MBPP. The important pattern is that distilled models can be better at pass@16 even when they are not better at pass@1.

That means distillation is not simply making the top answer stronger. It is improving coverage across samples. The model has a broader distribution over plausible answers and solution paths.

This matters for RLVR and verifier-driven inference. If downstream training or search mostly sharpens, ranks, or selects from what the base model can already produce, then a more diverse base distribution can be a better starting point.

### The Bad News: In-Context Learning

The negative result is that distilled pretraining can hurt in-context learning, especially in the IsoData setting.

The paper evaluates:

- context-based QA;
- needle-in-a-haystack retrieval;
- counterfactual context QA.

These tasks require the model to use information in the prompt, not just its parametric memory. Counterfactual context QA is especially revealing because the context may contradict what the model "knows"; the model must follow the prompt.

As the student data increases to the same 1T tokens seen by the teacher, the distilled model underperforms standard pretraining on needle-in-a-haystack and counterfactual context QA.

The authors connect this to induction heads. An induction head helps the model copy a token or pattern from earlier in the prompt. If the prompt says "I work at Gym" and later asks for the workplace, the right behavior is to copy "Gym."

That behavior is low entropy. There is one correct token to copy.

### The Entropy Explanation

The paper's core explanation is about high-entropy and low-entropy targets.

High-entropy target:

The prefix "I work at" can continue in many reasonable ways. The corpus gives one continuation, but the teacher distribution can tell the student about many plausible completions. This extra distributional information helps.

Low-entropy target:

An induction task might require copying a specific token from context. The target is almost deterministic. A perfect teacher would put all probability on that token, giving no more information than the hard label. A real teacher may be imperfect and put some probability on distractors, which makes the target noisier.

This explains the tradeoff:

- teacher soft labels improve broad distribution learning;
- broad distribution learning improves pass@k diversity;
- soft labels can blur exact-copy targets;
- blurred exact-copy targets weaken ICL.

### The Bigram Sandbox

The authors test the entropy story in a simplified bigram model.

A bigram model is just a transition matrix: for each current token, it gives a distribution over the next token. Each row can be high entropy or low entropy.

High-entropy rows represent contexts with many possible next tokens. Distillation helps because the teacher gives dense information about the full row.

Low-entropy rows represent deterministic transitions. Distillation gives no advantage if the teacher is perfect, and can hurt if the teacher is noisy.

The bigram sandbox is useful because it removes the complexity of full transformers while preserving the central distinction. It shows that the same mechanism can explain both improved pass@k and worse induction behavior.

### Why Pass@1 And Pass@k Want Different Things

The paper also explains why pass@1 and pass@k are not optimized by the same behavior.

Pass@1 mostly cares whether the top answer is correct. If the model ranks the best answer first, it can do well even if its full distribution is badly calibrated.

Pass@k cares about coverage. If the model samples multiple times, it matters whether probability mass is spread across plausible alternatives. The best pass@k model may not always put all mass on the single most likely answer.

Distillation helps because teacher distributions are richer than hard labels. They encourage the student to learn probabilities across plausible outputs. That may not raise pass@1, but it can raise pass@16.

### Token Routing

The practical mitigation is token routing.

Instead of applying distillation everywhere, route tokens based on the teacher distribution's entropy:

- for high-entropy tokens, use distillation because the teacher distribution is informative;
- for the lowest-entropy tokens, skip the distillation term and train only on the hard label.

The paper reports that skipping distillation on the lowest-entropy 15% of tokens improves ICL on two of three tasks and does not hurt standard benchmark performance. Skipping 30% does not help further and can hurt.

This is a simple but powerful idea: distillation should be selective. Use teacher distributions where they add information; protect exact-copy tokens from soft-label noise.

### Distillation Versus Multi-Token Prediction

The paper compares next-token prediction, multi-token prediction, and distillation.

Multi-token prediction is another modern pretraining objective that can improve downstream performance and diversity. But in the paper's IsoData comparison, distillation generally gives stronger pass@16 on GSM8K and MBPP and comparable pass@16 on MATH.

The lesson is practical. If the goal is a small model that performs well under test-time search or verifier selection, distilled pretraining is a strong candidate objective.

### Teacher Choice

The paper also asks which teacher version is best:

- base teacher;
- instruction-tuned teacher;
- RL-trained teacher.

At first, a base teacher seems natural because pretraining is about free-form next-token prediction. But the empirical result favors instruction-tuned and especially RL-trained teachers. The RL-trained teacher produces better students on reasoning, coding, and even some general benchmarks.

This is surprising because RL-trained models may be less diverse and more style-shaped. The paper's result suggests that teacher strength can outweigh objective mismatch in this setting.

The caveat is that teacher choice can transfer artifacts. An RL teacher may also transfer reward-model preferences, refusals, style biases, or narrow reasoning habits. The result is promising, not a universal rule.

### Why This Matters For Scale-Style Prep

This paper sits at the intersection of data, pretraining objectives, test-time inference, and post-training.

For data work, it says that the same token should not always receive the same kind of supervision. Some tokens are broad-distribution tokens where teacher soft labels help. Some are exact-copy tokens where soft labels can hurt.

For evaluation work, it says that pass@1 can miss an important capability: useful diversity. A model can look weaker on first answer but stronger under sampling plus verification.

For post-training work, it suggests that base-model diversity is a precondition for good RLVR. If the base model never samples the right diverse solution path, a verifier cannot select it.

For agent and memory work, it warns that improving diversity can damage context fidelity. A model that is better at producing many solution attempts may be worse at copying exact values from a prompt.

### Critique

The paper's main strength is that it avoids the vague claim "distillation helps." It identifies where distillation helps and where it hurts.

The entropy story is especially useful because it produces a concrete design rule: do not apply soft-label distillation uniformly. High-entropy positions and low-entropy positions should be treated differently.

The main limitation is scale. The experiments focus on 1B students and 8B teachers. The result probably matters at larger scales, but the exact tradeoff may change.

The second limitation is that in-context learning is broader than induction heads. Copying exact tokens is central, but ICL can also involve task inference, format adaptation, implicit Bayesian updating, and reasoning from examples.

The third limitation is that pass@k depends on the verifier setting. A model with more diverse samples is useful only if you can identify the good samples.

The fourth limitation is teacher risk. RL-trained teachers may produce stronger students, but they may also transfer post-training artifacts. A stronger teacher is not automatically a cleaner teacher.

### How To Remember The Paper

Distilled pretraining teaches a student the teacher's probability distribution.

That is good when many next tokens are plausible. It teaches diversity, improves pass@k, and helps test-time scaling.

That is bad when the task requires exact copying. Soft labels can blur deterministic targets and weaken induction-head-like behavior.

The paper's practical answer is token routing:

use distillation on high-entropy teacher outputs, but use hard labels only on low-entropy outputs.

The big takeaway:

Distillation is not uniformly good or bad. It is an entropy-sensitive pretraining tool that trades exact context copying against richer generation diversity.

