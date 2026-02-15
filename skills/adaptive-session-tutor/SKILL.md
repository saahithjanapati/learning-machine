---
name: adaptive-session-tutor
description: Run adaptive tutoring sessions with learner-directed controls. Use when the learner wants learn/practice/mixed modes, custom question styles, or deep dives based on prior performance.
---

# Adaptive Session Tutor

## When To Use

Use this skill when learner asks for:
- exposition-first learning
- practice-first drills
- mixed mode sessions
- in-depth deep dives
- dynamic question styles/difficulty

## Session Controls

Collect or infer:
- intent: `learn` | `practice` | `mixed`
- style: conceptual | coding | debugging | mcq | short-answer
- difficulty: easy | medium | hard
- pacing: one-at-a-time | batch
- hints: none | hints-first | full-solution-on-request

## Adaptation Workflow

1. Load topic history:
- recent `lessons/`
- `learning_system/PROGRESS_LOG.md`
- relevant nodes from `learning_system/SKILL_GRAPH.md`

2. Determine mode:
- new/weak topic -> more exposition
- stable topic -> more practice
- explicit learner override always respected

3. Generate session:
- targeted explanation + dynamic problems
- adjust in-session based on responses

4. Log outcomes:
- mistakes by tag
- accuracy signal
- recommended next step

