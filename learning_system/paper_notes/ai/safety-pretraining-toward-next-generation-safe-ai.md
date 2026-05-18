# Safety Pretraining: Toward the Next Generation of Safe AI

Captured: 2026-05-18
Topic: AI / Collection + Scale AI Research Internship Prep
Source: `https://proceedings.neurips.cc/paper_files/paper/2025/file/3e84c4e0acee2be072571fedc70700a9-Paper-Conference.pdf`
Processed source: [materials/processed/ai/safety-pretraining-toward-next-generation-safe-ai.md](../../../materials/processed/ai/safety-pretraining-toward-next-generation-safe-ai.md)
Lesson: [topics/ai/lessons/2026-05-18-safety-pretraining-next-generation-safe-ai.md](../../../topics/ai/lessons/2026-05-18-safety-pretraining-next-generation-safe-ai.md)
Tags: safety, alignment, pretraining, data curation, refusal, evaluation

## Normalized Takeaway

The paper's useful mental model is that safety can be a pretraining curriculum. The model should not merely be denied unsafe data, and it should not merely learn refusal after pretraining. It should encounter sensitive material with context, boundaries, moral reasoning, and an internal marker that later supports decoding-time steering.

## Why It Belongs In The Prep Queue

This is a good bridge between data work and alignment work. It connects dataset filtering, synthetic data generation, safety evaluation, post-training brittleness, and inference-time steering. It is especially useful for thinking about how a data/evaluation company might inspect and improve the training distribution before model behavior fails downstream.

## Questions To Revisit

1. What evidence would show that safety pretraining scales beyond 1.7B models?
2. Can Data Safety Report Cards become a standard artifact for model-data releases?
3. How would an adaptive jailbreak attack target SafeBeam?
4. When does recontextualization preserve knowledge, and when does it sanitize away important detail?
5. Could harmfulness tags become a general mechanism for controllable model-internal state?

