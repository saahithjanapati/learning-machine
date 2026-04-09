# ML System Design 0 -> 1 Curriculum

Topic Path: `topics/interviews/ml-system-design`

## Source Trace

- Canonical manifest: `learning_system/SOURCE_MAP.json`
- Topic locator: `topics/interviews/ml-system-design/curriculum/0-to-1-plan.md`
- Transcript links: keep these in `## Source Materials`.

## Source Materials

- `materials/processed/interviews/system_design.md`

## Transcript Anchors

- Problem framing: novelty types, business goal alignment, success metrics.
- Corpus understanding: source quality, metadata, duplication, bias, and sensitive content.
- Mining loop: embeddings, retrieval, novelty/OOD methods, clustering, and active learning.
- Annotation system: guidelines, reviewer flow, agreement checks, and abstain handling.
- Taxonomy and evaluation: label-space evolution, slice metrics, and downstream validation.

## Target Outcome (What "1" Means)

- [ ] Can structure an ML system design answer from problem framing through deployment feedback loops.
- [ ] Can justify candidate-mining, sampling, and labeling choices under budget constraints.
- [ ] Can distinguish useful novelty from duplicates, noise, and annotation artifacts.
- [ ] Can propose metrics that measure both pipeline quality and downstream model lift.

## Prerequisites

- Supervised learning basics.
- Precision/recall and slice-based evaluation basics.
- Familiarity with embeddings, nearest-neighbor retrieval, and clustering at a high level.

## Modules

1. Framing the task and defining novelty
- Objective: turn vague prompts into a precise discovery and labeling objective.
- Content type: exposition/practice
- Exit check: define success metrics, novelty types, and key constraints for a sample prompt.

2. Auditing the unlabeled corpus
- Objective: identify data source risks before mining examples.
- Content type: exposition/practice
- Exit check: produce a corpus health checklist covering duplication, bias, quality, and compliance.

3. Representation learning and retrieval
- Objective: explain why embedding quality controls the usefulness of mining.
- Content type: exposition/practice
- Exit check: choose an embedding/retrieval stack and explain likely failure modes.

4. Novelty detection and candidate generation
- Objective: compare distance, uncertainty, density, anomaly, and clustering-based mining.
- Content type: exposition/practice
- Exit check: defend a hybrid discovery strategy for a large unlabeled corpus.

5. Sampling and active learning
- Objective: allocate labeling budget across uncertainty, diversity, coverage, and hard negatives.
- Content type: exposition/practice
- Exit check: design a batch selection policy and explain why it avoids redundant or junk-heavy picks.

6. Annotation operations and quality control
- Objective: design a labeling workflow that preserves true novelty instead of collapsing it.
- Content type: exposition/practice
- Exit check: write guideline components, abstain rules, and review/escalation logic.

7. Taxonomy evolution and open-set handling
- Objective: decide when the schema needs to change instead of just collecting more labels.
- Content type: exposition/practice
- Exit check: recommend add/split/merge/open-set actions for newly surfaced clusters.

8. Evaluation and iteration loop
- Objective: connect surfaced data quality to measurable downstream improvement.
- Content type: exposition/practice
- Exit check: define pipeline metrics, downstream metrics, slice checks, and contamination guards.

## Session Cadence

- Session length: 45-75 minutes
- Sessions per week: 2-4
- Practice ratio progression:
  - early: 60% exposition, 40% design articulation
  - middle: 40% exposition, 60% scenario design
  - late: 20% exposition, 80% mock interview answers

## Assessment Plan

- Quick checks: explain one design decision and one tradeoff in 2-3 sentences.
- Medium practice: answer a constrained system-design prompt with a whiteboard-style plan.
- Capstone task: design a full data engine for novelty mining, labeling, taxonomy updates, and evaluation.
