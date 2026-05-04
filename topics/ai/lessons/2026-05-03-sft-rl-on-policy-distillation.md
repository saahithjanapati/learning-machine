# SFT, RL, And On-Policy Distillation

Source note: [materials/processed/ai/sft-rl-on-policy-distillation.md](../../../materials/processed/ai/sft-rl-on-policy-distillation.md)

Will Brown's article is a compact theory of modern post-training. It explains why the usual sequence is supervised fine-tuning first, reinforcement learning later; why on-policy distillation can be so efficient when a same-family teacher exists; and why self-distillation with privileged hints can become unstable.

## Table of Contents

1. [The Big Picture](#the-big-picture)
2. [SFT: Cheap Transfer With A Fixed Ceiling](#sft-cheap-transfer-with-a-fixed-ceiling)
3. [RL: Slow Signal That Compounds](#rl-slow-signal-that-compounds)
4. [Rejection-Sampled SFT](#rejection-sampled-sft)
5. [Same-Family Teachers](#same-family-teachers)
6. [On-Policy Distillation](#on-policy-distillation)
7. [Why OPD Has A Different Practical Ceiling](#why-opd-has-a-different-practical-ceiling)
8. [Self-Distillation With Hints](#self-distillation-with-hints)
9. [Gradient Geometry](#gradient-geometry)
10. [The Sparse/Dense And Biased/Unbiased Map](#the-sparsedense-and-biasedunbiased-map)
11. [The Open Problem: Better Teachers](#the-open-problem-better-teachers)
12. [Memory Checklist](#memory-checklist)

## The Big Picture

A lot of post-training pipelines have the same broad shape:

1. Pre-train a base model.
2. Supervised-finetune it on good completions.
3. Use reinforcement learning when supervised examples stop giving enough progress.

It is easy to treat that as a historical accident: people had instruction data, so they used it; later they added RL. Brown argues there is a deeper reason. The difference is not just the objective. It is the sampling distribution.

SFT learns from a fixed distribution. RL learns from a distribution that changes as the student changes.

That single distinction explains much of the pipeline.

## SFT: Cheap Transfer With A Fixed Ceiling

In this article, SFT mainly means `teacher SFT`: a teacher model produces completions, and a student model trains on those completions.

Human instruction tuning has the same shape if humans are the teacher. The important point is that the student does not create the data. The examples exist before the update.

This makes SFT extremely useful early. If the student is much worse than the teacher, teacher completions contain many behaviors the student does not yet know. Each example can be cheap capability transfer.

But the same property creates a ceiling. The dataset does not improve when the student improves. Once the student gets close to the teacher's distribution, another teacher example teaches less. The student mostly learns to imitate what it can already imitate.

So SFT is a strong early-stage move, but a weak way to push beyond the teacher.

A useful way to remember it:

`SFT is fast imitation of a fixed source.`

## RL: Slow Signal That Compounds

Reinforcement learning changes the loop.

The student samples its own rollouts. A verifier, reward model, environment, or grader scores them. The policy updates. Then the next samples come from the updated policy.

That means improvement feeds back into the data-generating process. A slightly better model can discover slightly better trajectories. Those trajectories can produce better learning signal. The next model is better again.

This is why Brown says RL's ceiling is set by the verifier, not by the teacher. If the verifier can recognize a solution better than the current policy or any fixed teacher sample, then the policy can in principle climb toward it.

The downside is that RL feedback is sparse and noisy. A math solution may be thousands of tokens long, but the verifier may only say correct or incorrect at the end. Most tokens did not causally determine success, but they receive credit or blame through the trajectory.

So RL is often slower than SFT. But it has a compounding property SFT lacks.

A useful way to remember it:

`RL is slow feedback that can improve its own future data.`

## Rejection-Sampled SFT

Rejection-sampled SFT tries to improve ordinary SFT.

The pipeline is:

1. Sample multiple completions.
2. Keep the ones that pass a filter or verifier.
3. Train on the survivors.

This is often better than training on unfiltered teacher data. But Brown argues it does not fully solve the ceiling problem.

Why? Because the sampling source is still fixed or pinned. Once the filter has included the correct examples and discarded the bad ones, there is not much more signal. The curve shifts upward, but the shape remains similar.

Rejection sampling helps select better data. It does not necessarily create the compounding loop that RL gets from the improving student policy.

## Same-Family Teachers

The article then turns to a detail that matters more than people often admit: what kind of teacher is used?

A same-family teacher is close to the student in tokenizer, architecture family, and training recipe. For example, a larger Qwen model teaching a smaller Qwen model.

This matters because the teacher's token probabilities and the student's token probabilities are directly comparable. They speak the same token language. Their stylistic and distributional habits are similar enough that a token-level signal is likely to mean "the teacher knows something useful here" rather than "the teacher formats answers differently."

A different-family teacher creates two problems.

First, tokenizer mismatch. The teacher's tokens and the student's tokens may not align cleanly. A token-level probability from the teacher is no longer naturally the same event as a token-level probability from the student.

Second, recipe mismatch. A frontier model from another lab may have different formatting habits, reasoning traces, refusal style, chain-of-thought conventions, and output register. The student can waste training capacity learning the teacher's surface form.

This is why cross-family distillation often transfers less than expected. Some bits go into style, not competence.

## On-Policy Distillation

On-policy distillation, or OPD, is the key middle method in the article.

OPD combines two ideas:

- The student samples its own rollouts, like RL.
- A teacher scores the student's tokens, like distillation.

So the student gets on-policy state coverage, but not only sparse outcome reward. Each token can receive a dense signal from the teacher.

This is powerful when the teacher is same-family. The teacher can cheaply score the student's tokens because both models share a vocabulary. The teacher does not need to generate full completions. It only needs to evaluate the student's rollout.

Brown's interpretation is:

`OPD gets you to the teacher's level much faster than RL, if you have the right teacher.`

That last clause matters. OPD is not generally available if the teacher is a closed frontier model with a different tokenizer and training recipe. It works best when you own or can query a bigger same-family model.

## Why OPD Has A Different Practical Ceiling

SFT and OPD may both target the teacher, so why would OPD do better in practice?

The answer is exposure bias and state coverage.

SFT trains on the teacher's distribution. But at evaluation time, the student runs under its own distribution. Over long rollouts, small deviations compound. The student reaches states that the teacher dataset did not cover well.

OPD trains on student rollouts. It teaches the student in the states the student actually visits.

That does not mean OPD exceeds the teacher in the limit. Its target is still teacher-bounded. But it can have a higher practical ceiling than off-policy SFT because it closes the gap between training states and evaluation states.

The distinction is:

- SFT: learn from teacher states.
- OPD: learn teacher preferences on student states.
- RL: learn from outcome feedback on student states.

## Self-Distillation With Hints

What if there is no stronger same-family teacher?

Self-distillation tries to use the student as its own teacher, but gives the teacher extra information.

Brown discusses two examples:

- SDFT, where the teacher sees an expert demonstration.
- OPSD, where the teacher sees the ground-truth answer.

The advantage is obvious. Since the teacher and student are the same model, tokenizer match and recipe match are automatic.

The danger is also obvious once you see it. The privileged hint changes the teacher's distribution. If the hint is mild, the shift may be useful. If the hint is strong, the teacher may suddenly assign high probability to tokens the unhinted student considered very unlikely.

That can create a concentrated gradient.

## Gradient Geometry

Brown's most useful section is the gradient-shape analysis.

### RL: Sparse But Relatively Unbiased

In RL, reward arrives at the trajectory level. The update is noisy because many tokens receive credit or blame even if they were not causally important.

But in a large batch, much of the token-level noise cancels out. What remains is the small consistent direction correlated with reward.

This makes RL slow but relatively trustworthy when the verifier is valid. It moves cautiously because the signal is sparse.

### SFT: Dense, Biased, And Diffuse

SFT gives every token a label. That is dense signal.

It is also biased because it points toward the data distribution. There is no guarantee that the data distribution is optimal.

But SFT is usually stable because the bias is diffuse. Across many examples and many tokens, the updates point toward a broad manifold rather than one narrow trick.

### Same-Family OPD: Dense, Biased, But Usually Calibrated

OPD is also dense and biased. It points toward the teacher.

The reason it can work well is that a same-family teacher is usually close enough to the student that its token-level preferences are calibrated. The teacher nudges the student broadly toward better behavior rather than yanking it toward alien phrasing.

### OPSD: Dense, Biased, And Concentrated

OPSD is the dangerous corner.

If the teacher sees the final answer, it may strongly prefer a rare pivot token in the reasoning trace. The unhinted student might assign tiny probability to that token; the hinted teacher might assign high probability. A reverse-KL-style loss then puts huge pressure on that small span.

Now the gradient is not just dense and biased. It is concentrated. A few tokens dominate the update.

That explains why OPSD-style methods need explicit controls such as per-token KL clipping. Without a budget, the hint-conditioned teacher can pull the student too sharply away from its stable distribution.

## The Sparse/Dense And Biased/Unbiased Map

The article's taxonomy can be remembered as a small map:

| Method | Signal density | Bias | Concentration risk |
| --- | --- | --- | --- |
| RL | sparse | low, if verifier is valid | low-to-moderate |
| SFT | dense | toward dataset | usually diffuse |
| same-family OPD | dense | toward teacher | usually diffuse if calibrated |
| OPSD | dense | toward self-with-hint | high if hint is strong |

The main safety and stability question is not only whether a method is biased. It is whether the bias is spread across many small corrections or concentrated in a few sharp pivots.

That is a useful lens for many post-training methods.

## The Open Problem: Better Teachers

The article ends by reframing progress as a teacher-construction problem.

The ideal teacher should improve reward while staying close enough to the student to keep the update stable. In plain terms:

`maximize reward gain while staying within a KL budget.`

This creates a curve. At one end, RL has little teacher bias but sparse signal. At another end, SFT and OPD have dense teacher signal but teacher-bounded ceilings. The interesting region may be teachers that are neither fixed external models nor overly strong answer-revealing hints.

Brown suggests several ways to search for such teachers:

- optimize per-task hints,
- train a hint writer,
- use distribution-level prompt optimization,
- let a hint generator and student co-evolve,
- combine outcome reward and teacher KL in hybrid systems.

The theme is "surgical teaching." A good teacher should give the student just enough extra structure to find better behavior without forcing a large distribution shift.

## Memory Checklist

Remember these points:

1. SFT trains on fixed data; RL trains on data generated by the improving student.
2. SFT is cheap and effective early because the teacher is better than the student.
3. SFT saturates near the teacher; RL can in principle climb as far as the verifier can grade.
4. Rejection-sampled SFT improves data quality but does not fully solve the fixed-distribution ceiling.
5. Same-family teachers make token-level distillation much more efficient.
6. OPD uses student rollouts plus dense teacher token scores.
7. OPD is fast to teacher level but still teacher-bounded.
8. Self-distillation with privileged hints solves tokenizer match but creates distribution-shift risk.
9. OPSD can collapse because gradients become dense, biased, and concentrated.
10. The next open problem is constructing low-KL, high-reward teachers.

The shortest version:

**SFT transfers fixed teacher behavior cheaply, RL compounds through student rollouts, OPD gives dense teacher feedback on student states, and self-distillation works only if privileged hints improve the signal without creating concentrated unstable gradients.**
