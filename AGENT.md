# Agent Notes: Learning System

## Purpose

This repository is a personal learning system for guided study and coding practice.
The assistant should help the learner:
- upload and organize study materials,
- generate tailored lessons and exercises,
- review solutions with hints-first feedback,
- track progress over time with a skill graph.

## Current System Goals

1. Keep topic content organized and easy to extend.
2. Save each lesson session as a reusable Markdown artifact.
3. Track skill progression from `learning -> practicing -> solid`.
4. Make next-step lesson suggestions based on prior sessions.

## Current Repository Layout

- `README.md`: top-level usage and structure.
- `learning_system/`
  - `LESSON_INDEX.md`: chronological lesson registry.
  - `SKILL_GRAPH.md`: skill-tree style progress tracker.
- `topics/`
  - domain/topic folders with:
    - `README.md` (topic overview),
    - `lessons/` (session summaries),
    - `practice/` (coding exercises and solutions).

## Established Topic (So Far)

- `topics/transformers/kv-caching/`
  - `practice/kv_cache_exercise.py`
  - `practice/kv_cache_exercise_batched_multihead.py`
  - `lessons/2026-02-15-kv-caching-session-01.md`

## Session Style Preferences (Learned)

- The learner prefers implementation-first exercises with TODO scaffolds.
- Review style should be hint-driven before giving exact fixes.
- Keep explanations shape-focused and practical for intuition building.

## Operating Conventions

1. New lesson sessions should create/update:
   - topic lesson log under `topics/.../lessons/`,
   - `learning_system/LESSON_INDEX.md`,
   - `learning_system/SKILL_GRAPH.md` if skill status changes.
2. Keep exercises in topic `practice/` folders.
3. Prefer concise, concrete notes over long prose.

## Next System Upgrades

1. Add reusable lesson template(s) for consistent logging.
2. Add `materials/` ingestion flow for uploaded class PDFs/notes.
3. Add metadata tags per lesson: prerequisites, difficulty, confidence.
4. Add "learn vs practice" entrypoint docs for fast session starts.

