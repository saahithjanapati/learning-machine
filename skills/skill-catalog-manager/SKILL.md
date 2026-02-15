---
name: skill-catalog-manager
description: Manage the repository skill catalog itself. Use when the user asks to add new skills, split/merge existing skills, or reorganize capability boundaries.
---

# Skill Catalog Manager

## When To Use

Use this skill when user asks:
- "create a new skill for X"
- "split this skill into smaller skills"
- "merge these two skills"
- "reorganize our capability skills"

## Workflow

1. Identify capability boundary:
- what behavior should trigger the skill?
- what behavior should stay outside it?

2. Create/update skill files:
- add or modify `skills/<skill-name>/SKILL.md`
- keep trigger description specific
- keep instructions concise and action-oriented

3. Update registration:
- maintain `AGENTS.md` skill list entries
- keep file paths accurate

4. Validate overlap:
- check for duplicate trigger domains
- if overlap exists, narrow descriptions or merge skills

## Safety Rules

- Do not delete a skill unless replacement is confirmed.
- Preserve behavior coverage during merges/splits.

