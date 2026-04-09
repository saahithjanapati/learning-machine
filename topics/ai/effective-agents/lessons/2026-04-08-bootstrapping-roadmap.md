# Lesson Plan

Date: `2026-04-08`  
Topic Path: `topics/ai/effective-agents`  
Mode: `bootstrapping`
Learner Intent: `learn`
Question Style: `conceptual`
Difficulty: `medium`

## Inputs

- Source materials: `materials/processed/ai/building-effective-agents.md`
- Prior session summary: none
- Recent mistake tags: none
- In-depth mode requested?: no
- History loaded from: `learning_system/LESSON_INDEX.md`

## Session Objectives

1. Separate genuine agent use cases from simpler workflow or single-call solutions.
2. Learn the common production patterns and when each one is worth the cost.
3. Build a practical checklist for tool design, transparency, and control.

## Allocation

- Exposition: 30 minutes
- Guided examples: 20 minutes
- Practice problems: 15 minutes
- One-at-a-time or batch: one-at-a-time

## Problem Set

1. Classify a product request as single-call, workflow, or autonomous agent.
- Skill tested: architectural triage
- Expected difficulty: medium

2. Choose between prompt chaining, routing, and orchestrator-workers for a coding or search task.
- Skill tested: pattern selection
- Expected difficulty: medium

3. Explain why a tool interface can make or break an agent.
- Skill tested: tool/ACI design
- Expected difficulty: medium-hard

## Hint Policy

- First hint: name the task structure and whether the subtasks are predictable.
- Second hint: name the reason complexity helps or hurts.
- Full solution trigger: after two stalled attempts or if the answer confuses workflow orchestration with full agent autonomy.

## Success Criteria

- [ ] Conceptual explanation quality
- [ ] Accuracy threshold
- [ ] Independence level

## Roadmap

1. Start with the workflow-vs-agent distinction.
2. Cover the augmented LLM building block and why it is usually enough as a starting point.
3. Walk through the five workflow patterns with concrete examples.
4. Move to autonomous agents, stopping conditions, and trusted-environment constraints.
5. Close with tool schema design and production evaluation.
