# Effective Agents 0 -> 1 Curriculum

Topic Path: `topics/ai/effective-agents`

## Source Trace

- Canonical manifest: `learning_system/SOURCE_MAP.json`
- Topic locator: `topics/ai/effective-agents/curriculum/0-to-1-plan.md`
- Transcript links: keep these in `## Source Materials`.

## Source Materials

- `materials/processed/ai/building-effective-agents.md`

## Transcript Anchors

- Distinction between workflows and agents.
- Simpler-is-better decision rule and the latency/cost tradeoff.
- Production workflow patterns: prompt chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer.
- Conditions for when autonomous agents are justified.
- Tooling guidance: transparency, tool documentation, and ground-truth feedback loops.

## Target Outcome (What "1" Means)

- [ ] Can explain the difference between a workflow and an autonomous agent without hand-waving.
- [ ] Can choose an appropriate agent pattern for a concrete product or coding task.
- [ ] Can explain why many use cases should stay as simple prompt-plus-retrieval systems.
- [ ] Can design an agent/tool interface with explicit attention to observability and failure control.

## Prerequisites

- Basic familiarity with LLM prompting and API usage.
- High-level understanding of retrieval, tool calling, and evaluation loops.

## Modules

1. Workflows vs agents
- Objective: learn the architectural distinction and the simplicity-first decision rule.
- Content type: exposition/practice
- Exit check: classify examples as single-call, workflow, or agent and justify the choice.

2. The augmented LLM building block
- Objective: understand retrieval, tools, and memory as the baseline capability set.
- Content type: exposition/practice
- Exit check: describe what makes an augmented LLM useful without overcomplicating the stack.

3. Prompt chaining and routing
- Objective: use deterministic composition patterns for tasks that decompose cleanly.
- Content type: exposition/practice
- Exit check: choose between chaining and routing for a task and explain the tradeoff.

4. Parallelization and orchestrator-workers
- Objective: distinguish fixed parallel subtasking from dynamic delegation.
- Content type: exposition/practice
- Exit check: map coding/search examples to the right pattern and explain why.

5. Evaluator-optimizer loops
- Objective: identify when iterative self-critique actually adds value.
- Content type: exposition/practice
- Exit check: define a task with clear evaluation criteria where this loop is worth the latency.

6. Autonomous agents in production
- Objective: know when open-ended tool-using agents are justified and what guardrails they need.
- Content type: exposition/practice
- Exit check: explain a trusted-environment use case, the stopping conditions, and the main risk controls.

7. Tool and interface design
- Objective: design tool schemas and documentation that LLMs can use reliably.
- Content type: exposition/practice
- Exit check: compare good vs bad tool interfaces and name why one is easier for the model to use.

## Session Cadence

- Session length: 45-75 minutes
- Sessions per week: 2-3
- Practice ratio progression:
  - early: 65% exposition, 35% classification/design questions
  - middle: 45% exposition, 55% scenario selection and critique
  - late: 25% exposition, 75% architecture tradeoff drills

## Assessment Plan

- Quick checks: classify a task into single call vs workflow vs agent.
- Medium practice: choose among the workflow patterns and defend the choice under latency/cost constraints.
- Capstone task: design an agentic system with explicit tool interfaces, checkpoints, and failure controls.
