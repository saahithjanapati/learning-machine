# Building Effective Agents

Source: `https://www.anthropic.com/engineering/building-effective-agents`
Site: `Anthropic Engineering`
Published: `2024-12-19`
Extraction engine: `direct web scrape + manual structured ingest`
Strategy: `canonical article extraction and curriculum-oriented normalization`

## Summary

This article argues that effective agentic systems usually come from simple, composable patterns rather than heavyweight frameworks or maximally autonomous designs. The core recommendation is to start with the simplest solution that works, measure whether added complexity improves outcomes, and only then move toward workflows or autonomous agents.

## Core Thesis

- Many real applications should stay as a single LLM call plus retrieval, examples, or tools.
- Workflows are useful when the task structure is known ahead of time and can be decomposed in code.
- Agents are useful when the task is open-ended enough that the model needs to decide its own sequence of steps and tool use.
- More autonomy trades predictability for flexibility, while also increasing latency, cost, and the chance of compounding errors.

## Definitions

### Workflows

Workflows are agentic systems where LLMs and tools are orchestrated through predefined code paths. The developer defines the structure up front and the model fills in parts of that structure.

### Agents

Agents are systems where the LLM dynamically directs its own process and tool usage. Once the task is clear, the model plans and acts with more autonomy, using environmental feedback and possibly pausing for human feedback at checkpoints.

## When Not To Use Agents

- If a task is well handled by one prompt plus retrieval or in-context examples, adding agent layers is usually unnecessary.
- If the task is predictable and decomposes cleanly into known steps, workflows are often a better fit than agents.
- If latency and cost matter more than marginal performance gains, keep the design simpler.

## Framework Guidance

- Frameworks can accelerate prototyping by handling tool calls, parsing, and chaining.
- They can also hide the actual prompts, responses, and control flow, which makes debugging harder.
- The article recommends understanding the underlying direct-API version even when using a framework.

## Building Block: The Augmented LLM

The foundation is an LLM with three kinds of augmentation:

- retrieval,
- tools, and
- memory.

The article treats this as the baseline building block for most agentic systems. The design focus is not just which capabilities exist, but whether they are exposed through interfaces the model can actually use reliably.

## Workflow Patterns

### 1. Prompt chaining

Use prompt chaining when a task can be cleanly decomposed into fixed sequential subtasks. Each LLM call handles an easier subproblem, and programmatic gates can check whether intermediate outputs are good enough before continuing.

Good fit:

- outline -> check -> write,
- generate -> translate,
- any multi-step task where fixed decomposition improves reliability.

### 2. Routing

Use routing when inputs fall into distinct classes that should be handled differently. The routing step classifies the input and sends it to a specialized prompt, tool set, or downstream workflow.

Good fit:

- support triage,
- easy-vs-hard model selection,
- cases where one monolithic prompt performs worse than specialized branches.

### 3. Parallelization

Parallelization splits work across simultaneous LLM calls and combines the results later. The article highlights two subtypes:

- sectioning: different independent subtasks run in parallel,
- voting: repeated attempts or perspectives improve confidence.

Good fit:

- guardrails and multi-aspect evals,
- multiple code reviews or content-safety passes,
- speedups when the subproblems are independent.

### 4. Orchestrator-workers

Use orchestrator-workers when the task is complex but the needed subtasks are not known ahead of time. A central LLM decides how to break down the work, delegates to worker LLMs, and then synthesizes the results.

Good fit:

- coding tasks touching an unknown set of files,
- search tasks that require exploring multiple information branches,
- cases where fixed parallelization is too rigid.

### 5. Evaluator-optimizer

In evaluator-optimizer, one LLM drafts a result while another critiques it and sends the loop back for refinement. This is useful only when:

- there are clear evaluation criteria, and
- iterative revision reliably improves the output.

Good fit:

- polishing writing or translation,
- search or research tasks that benefit from iterative critique,
- tasks where feedback quality is itself understandable and measurable.

## Autonomous Agents

The article treats agents as a loop:

1. receive a task from the user,
2. plan and act using tools,
3. gather ground truth from the environment,
4. continue until done or until a stopping condition is hit,
5. optionally ask the human for judgment at checkpoints.

Conditions that make agents a good fit:

- the number of required steps is hard to predict,
- the environment can provide meaningful feedback,
- there is enough trust in the model to give it local autonomy,
- the system is guarded with checkpoints, iteration limits, and testing.

Main risks:

- higher cost,
- higher latency,
- compounding mistakes,
- poor observability if the planning/tool interfaces are opaque.

## Production Principles

The article emphasizes three repeated principles:

1. Keep the design simple.
2. Make the system transparent, including intermediate planning.
3. Design the agent-computer interface carefully through good tool documentation and testing.

## Where Agents Add Value

The article gives two high-value domains:

### Customer support

Agentic systems are useful when they combine conversation with actions such as looking up data, using a knowledge base, updating tickets, or issuing refunds. Success is relatively measurable because the task has concrete resolution criteria.

### Coding agents

Coding is a strong fit because tools provide feedback through test runs, code execution, and file changes. The environment gives real signals about whether the system is making progress, even though human review is still required before trusting the result broadly.

## Tool Design Guidance

The appendix argues that tool schemas deserve prompt-engineering attention just like the main prompt. Good tool interfaces:

- stay close to formats the model naturally sees,
- avoid unnecessary formatting overhead,
- avoid making the model keep fragile counts or escape-heavy formats in working memory,
- leave enough space for the model to think before committing to an output format.

The underlying point is that two tools with the same semantics can differ sharply in reliability depending on how natural their interface is for the model.

## Practical Takeaways

- Start with the smallest viable system.
- Add workflows before jumping to full agents.
- Use agents only where the task is open-ended enough to justify autonomy.
- Treat tool design and observability as first-class engineering work.
- Prefer measured complexity over framework-driven complexity.
