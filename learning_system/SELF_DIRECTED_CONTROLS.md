# Self-Directed Controls

Learner can steer each session with explicit intent.

## Session Intents

1. `learn`
- Exposition-first.
- Use when learner is new or wants intuition first.

2. `practice`
- Question-first.
- Use when learner wants drills, coding tasks, or assessments.

3. `mixed`
- Short explanation + immediate practice loop.

## Common User Phrases -> Behavior

- "I do not know anything about this"
  - start in `learn` with `bootstrapping` mode.

- "I want to practice this topic"
  - start in `practice` with minimal exposition.

- "Quiz me"
  - use short questions, immediate feedback, escalating difficulty.

- "Give me coding exercises"
  - generate implementation tasks with optional TODO scaffolds.

## Question Style Controls

Learner can request:
- style: conceptual, coding, debugging, MCQ, short-answer
- difficulty: easy, medium, hard
- count: number of questions
- hint policy: no hints, hint-first, full-solution-allowed
- pacing: one-at-a-time vs batch

## Recommended Session Header (Assistant Should Confirm)

- Intent:
- Topic:
- Difficulty:
- Question style:
- Hint policy:
- Count:

