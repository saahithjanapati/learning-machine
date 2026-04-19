# Lesson Plan

Date: `2026-04-07`  
Topic Path: `topics/interviews/ml-system-design`  
Mode: `bootstrapping`
Learner Intent: `learn`
Question Style: `conceptual`
Difficulty: `medium`

## Inputs

- Source materials: [materials/processed/interviews/system_design.md](../../../../materials/processed/interviews/system_design.md)
- Prior session summary: none
- Recent mistake tags: none
- In-depth mode requested?: no
- History loaded from: [learning_system/LESSON_INDEX.md](../../../../learning_system/LESSON_INDEX.md)

## Session Objectives

1. Build a clean end-to-end map of the ML system design problem.
2. Separate candidate mining, labeling, and evaluation concerns.
3. Surface the highest-yield interview tradeoffs to practice next.

## Allocation

- Exposition: 30 minutes
- Guided examples: 20 minutes
- Practice problems: 15 minutes
- One-at-a-time or batch: one-at-a-time

## Problem Set

1. Define "novel" for a large unlabeled corpus without making the definition too narrow.
- Skill tested: problem framing
- Expected difficulty: medium

2. Choose a first-pass sampling strategy when labels are scarce and duplicates are common.
- Skill tested: data selection tradeoffs
- Expected difficulty: medium

3. Decide whether a surfaced dense cluster should become a new class, a subclass, or stay unlabeled.
- Skill tested: taxonomy evolution
- Expected difficulty: medium-hard

## Hint Policy

- First hint: narrow the stage of the pipeline you are answering for.
- Second hint: name the concrete constraint or metric driving the decision.
- Full solution trigger: after two stalled attempts or if the answer mixes up mining, labeling, and evaluation.

## Success Criteria

- [ ] Conceptual explanation quality
- [ ] Accuracy threshold
- [ ] Independence level

## Roadmap

1. Start with prompt decomposition: objective, constraints, novelty definition, and failure modes.
2. Move to corpus audit: source quality, metadata, duplication, and sensitive-content handling.
3. Design the mining stack: embeddings, retrieval, novelty signals, and cluster prioritization.
4. Add selective labeling: coverage, diversity, uncertainty, hard negatives, and active-learning caveats.
5. Close with annotation quality, taxonomy updates, and slice-based evaluation.
