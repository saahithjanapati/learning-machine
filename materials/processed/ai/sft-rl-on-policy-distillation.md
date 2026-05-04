# On SFT, RL, And On-Policy Distillation

Source: `https://x.com/willccbb/status/2050038277454143918`
Resolved article: `https://x.com/i/article/2050010745375768576`
Author: `Will Brown`
Co-writing note from source: `Will Brown & Claude Opus 4.7; arguments credited to Will Brown, writing credited to Claude`
Published: `2026-04-30` in the article body; seed post dated `2026-05-01`
Accessed: `2026-05-03`
Extraction engine: `X public web API article extraction + manual structured ingest`
Strategy: `canonical social/article extraction and post-training lesson normalization`

## Summary

Will Brown's article explains why the common post-training sequence of supervised fine-tuning first, reinforcement learning later is not just an accidental convention. It follows from a sampling-distribution argument.

In teacher SFT, the student trains on completions produced before training begins. The sampling distribution is fixed. As the student approaches the teacher, extra examples become less informative, and the practical ceiling is roughly the teacher's level.

In RL, the student samples its own rollouts. When the policy improves, the next batch of samples comes from the improved policy. Improvements compound through the data-generating process. The ceiling is no longer the teacher. It is whatever the verifier, grader, or reward model can reliably evaluate.

The article then asks where on-policy distillation fits. On-policy distillation (OPD) lets the student generate its own rollouts, but uses a stronger teacher to score each token under a reverse-KL-style signal. This combines RL's on-policy state coverage with a dense teacher signal. It can approach teacher-level performance much faster than RL when the teacher and student are in the same model family.

The article's warning is that self-distillation with privileged hints can produce dense, biased, and concentrated gradients. That concentration can make training collapse unless the KL contribution is carefully clipped or budgeted.

## Core Concepts

### Teacher SFT

Teacher SFT means training a student on completions produced by a teacher model. Human-written instruction tuning has the same shape if humans are treated as the teacher.

The important property is that the data is fixed. The student does not change the distribution of future training examples while it improves.

### Reinforcement learning

RL lets the student sample trajectories from its current policy, receive reward or verifier feedback, and then update the policy. The next training batch comes from a different, hopefully better policy.

This gives RL a compounding advantage when the reward signal is reliable enough.

### Rejection-sampled SFT

Rejection-sampled SFT samples candidate completions, filters for correctness, and trains on the survivors. It improves over vanilla SFT, but Brown argues it still inherits the fixed-distribution ceiling once the filter saturates.

### Same-family teacher

A same-family teacher shares the student's tokenizer, training recipe, and broad distributional shape. A larger Qwen model teaching a smaller Qwen model is the kind of case Brown has in mind.

Same-family teachers make token-level distillation much cleaner because teacher and student probabilities are defined over the same vocabulary positions.

### Different-family teacher

A different-family teacher differs in tokenizer, model family, training recipe, style, or hidden reasoning conventions. Distilling a frontier closed model into an unrelated open base is the hard case.

The student must learn not only the teacher's capabilities, but also the teacher's surface artifacts: formatting, register, chain-of-thought conventions, and distributional quirks.

### On-policy distillation

OPD uses student rollouts, then asks a teacher to score those rollouts token by token. The student gets an on-policy data distribution and a dense teacher signal.

This is attractive when:

- the teacher is stronger,
- the teacher is same-family,
- teacher scoring is cheaper than teacher generation,
- the goal is to reach teacher-level competence quickly.

OPD is not a magic replacement for RL. Since it targets the teacher distribution, its limit is still teacher-bounded. RL can in principle exceed the teacher if the verifier can identify better behavior.

## The Compounding Argument

Brown's central argument is about where improvement enters the sampling loop.

With SFT:

1. Build or sample a teacher dataset.
2. Train the student on that dataset.
3. The student improves.
4. The dataset does not improve.

The marginal value of SFT is high when the student is far below the teacher. Once the student nears the teacher, new SFT examples mostly repeat behavior the student can already imitate.

With RL:

1. Let the student sample rollouts.
2. Score the rollouts.
3. Update the student.
4. Sample again from the updated student.

Now improvement feeds back into exploration. A slightly better policy can discover better states, which can produce better training signal, which can improve the policy again.

This creates a tipping point. Early on, cheap teacher SFT is better. Later, when the student is near the teacher and teacher data is no longer very informative, rollout compute is often better spent on RL.

## Why Same-Family Teachers Matter

Brown argues that teacher choice is a major hidden variable in SFT efficiency.

When teacher and student are same-family, the token-level signal is mostly about the capability gap. The teacher's probability for a token and the student's probability for a token can be compared directly.

When teacher and student are different-family, two costs appear.

First, tokenizer mismatch breaks clean token-level comparison. A teacher completion must be re-tokenized into the student's vocabulary. Token boundaries and log probabilities no longer line up naturally.

Second, recipe mismatch means the student may waste capacity learning the teacher's style and pipeline artifacts rather than the underlying competence.

The practical consequence is that OPD is mostly a same-family method. It needs token-level agreement between teacher and student distributions.

## Why OPD Can Beat Ordinary Distillation At Moderate Compute

The article's argument for OPD has two layers.

The first layer is cost. If the student generates the rollout and the teacher only scores it, teacher work can be cheaper than teacher generation. The teacher is doing a forward pass over known tokens rather than producing all tokens autoregressively.

The second layer is state coverage. SFT trains on the teacher's state distribution but evaluates the student on the student's own state distribution. Over long rollouts, small distribution shifts can accumulate. OPD trains directly on student rollouts, so it teaches the student in the states it actually visits.

This is why OPD can have a higher practical ceiling than off-policy SFT or rejection-sampled SFT even when all target the same teacher. It reduces the exposure-bias gap.

## Self-Distillation With Privileged Hints

If no same-family stronger teacher exists, one tempting move is self-distillation: use the same model as both student and teacher, but give the teacher extra information.

Brown discusses two forms:

- SDFT: the teacher sees an expert demonstration or worked example.
- OPSD: the teacher sees the ground-truth answer.

Both are on-policy and tokenizer-matched because the same model is used. But the privileged information shifts the teacher distribution away from the student's natural distribution.

The sharper the privileged information, the more concentrated the resulting gradient can become.

## Gradient Geometry

The article compares methods by the shape of their gradients.

### RL

RL is sparse but comparatively unbiased. Reward is assigned at the rollout level, and many token-level updates are noisy. In large batches, much of that noise cancels. The useful part is the consistent direction correlated with reward.

This makes RL slow but relatively honest when the reward is valid.

### SFT

SFT is dense and biased. Every token has a label, so every token provides a learning signal. The bias points toward the training data.

SFT is usually stable because the bias is diffuse across many examples and many tokens. It pulls the model toward a broad data manifold rather than one narrow pivot.

### OPD

Same-family OPD is also dense and biased, but its bias can remain diffuse if the teacher is well calibrated to the student's model family.

The teacher supplies dense token-level preference information, while the student supplies on-policy states.

### OPSD

OPSD is dense, biased, and concentrated. If the teacher sees the answer, it may assign much higher probability to a rare pivot token that the student would almost never choose.

That creates a large reverse-KL contribution at a small number of positions. The update can be dominated by a few teacher-favored tokens, producing instability unless the divergence is clipped.

Brown treats this as the main failure mode of self-with-hint distillation: the signal is informative, but too concentrated.

## Sparse/Dense And Biased/Unbiased Taxonomy

The article organizes methods along two main axes:

- sparse versus dense: does feedback arrive only at the trajectory level, or at each token?
- biased versus unbiased: does the expected update point toward a teacher/data distribution, or only toward reward-correlated directions?

There is also a third important axis: concentration.

The rough map is:

- RL: sparse, relatively unbiased, slow.
- SFT: dense, biased, usually diffuse.
- Same-family OPD: dense, biased, usually diffuse if teacher and student are calibrated.
- OPSD: dense, biased, potentially concentrated.

This taxonomy explains why some methods feel stable and slow, while others feel efficient but fragile.

## Toward Better Teachers

The final section reframes the open problem as teacher construction.

The ideal teacher would improve reward while staying within a KL budget. It would be strong enough to move the student in useful directions, but close enough to avoid destabilizing updates.

Brown suggests several possible directions:

- per-task prompt optimization for low-KL hints,
- distribution-level hint optimization,
- online self-prompt optimization,
- RL-trained hint writers,
- hybrids that combine teacher KL with outcome reward.

The unifying idea is to build a "surgical" teacher: one that gives the student just enough extra information to improve, without dragging it far away from its own stable distribution.

## Main Takeaways

- The SFT-to-RL ordering has a sampling-distribution rationale.
- SFT is efficient early because teacher examples teach missing capabilities cheaply.
- SFT saturates because the data distribution is fixed and teacher-bounded.
- RL compounds because the student improves the distribution it samples from.
- OPD combines student rollouts with dense teacher token scores.
- OPD is most natural when teacher and student are same-family.
- Different-family distillation pays tokenizer and recipe-mismatch taxes.
- Self-distillation with privileged hints can be powerful but unstable.
- The key danger in OPSD-like methods is concentrated biased gradient signal.
- Future progress may come from constructing teachers that optimize reward gain subject to a KL budget.

## Questions For Review

1. Why does teacher SFT have a practical ceiling near the teacher?
2. What does it mean for RL improvements to compound through the sampling distribution?
3. Why does OPD need a same-family teacher?
4. Why can OPD reach teacher level faster than RL?
5. Why can OPD still be teacher-bounded?
6. What makes OPSD's gradient more dangerous than ordinary SFT's gradient?
7. What would a "surgical teacher" optimize?
