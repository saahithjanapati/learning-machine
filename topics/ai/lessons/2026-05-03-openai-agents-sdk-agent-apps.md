# OpenAI Agents SDK: What It Does And What You Can Build

Source note: This lesson is based on OpenAI's official Agents SDK documentation, checked on 2026-05-03: [Agents SDK platform guide](https://developers.openai.com/api/docs/guides/agents), [Python Agents SDK](https://openai.github.io/openai-agents-python/), [TypeScript Agents SDK](https://openai.github.io/openai-agents-js/), [agent definitions](https://openai.github.io/openai-agents-python/agents/), [running agents](https://openai.github.io/openai-agents-python/running_agents/), [tools](https://openai.github.io/openai-agents-python/tools/), [sessions](https://openai.github.io/openai-agents-python/sessions/), [guardrails](https://openai.github.io/openai-agents-python/guardrails/), [tracing](https://openai.github.io/openai-agents-python/tracing/), [sandbox agents](https://openai.github.io/openai-agents-python/sandbox/guide/), [realtime agents](https://openai.github.io/openai-agents-python/realtime/quickstart/), and the [Python changelog](https://openai.github.io/openai-agents-python/release/).

Version note: the request said "Agents SDK 2.0." The official docs I checked do not describe the Agents SDK itself as version 2.0. The Python Agents SDK changelog uses `0.x` SDK versions, and its `0.4.0` entry says the SDK should be used with the `openai` Python package `v2.x`. In this lesson, "2.x-era Agents SDK" means the current code-first Agents SDK surface used with the modern OpenAI client libraries, not a formal `openai-agents==2.0.0` release.

## Table of Contents

- [Start Here](#start-here)
- [The One-Sentence Mental Model](#the-one-sentence-mental-model)
- [Why The SDK Exists](#why-the-sdk-exists)
- [Agents SDK, Responses API, And Agent Builder](#agents-sdk-responses-api-and-agent-builder)
- [The Core Primitives](#the-core-primitives)
- [The Agent Loop](#the-agent-loop)
- [What You Can Build With It](#what-you-can-build-with-it)
- [Tools: How Agents Act](#tools-how-agents-act)
- [Multi-Agent Design: Handoffs And Agents As Tools](#multi-agent-design-handoffs-and-agents-as-tools)
- [State And Memory](#state-and-memory)
- [Guardrails And Human Review](#guardrails-and-human-review)
- [Tracing And Debugging](#tracing-and-debugging)
- [Sandbox Agents](#sandbox-agents)
- [Realtime And Voice Agents](#realtime-and-voice-agents)
- [Python And TypeScript](#python-and-typescript)
- [A Minimal Example](#a-minimal-example)
- [A Practical Architecture Pattern](#a-practical-architecture-pattern)
- [What The SDK Is Not](#what-the-sdk-is-not)
- [Design Checklist](#design-checklist)
- [Common Confusions](#common-confusions)
- [Quick Check](#quick-check)
- [One-Minute Summary](#one-minute-summary)

## Start Here

The OpenAI Agents SDK is for building agentic applications in code.

That means it is not just a way to send one prompt to one model. It is a library for the surrounding loop that makes an AI system feel like an agent:

1. receive a task,
2. decide whether the model can answer directly,
3. call tools when outside action or information is needed,
4. pass work to specialist agents when the task changes shape,
5. preserve enough state to continue across turns,
6. validate risky inputs or outputs,
7. stream progress,
8. trace what happened so you can debug and improve it.

The SDK gives names and APIs to those pieces. The important shift is from "model call" to "workflow run."

## The One-Sentence Mental Model

An agent is a model plus instructions plus tools plus runtime rules.

In ordinary API code, you often write the loop yourself:

```text
call model
parse tool call
run tool
append result
call model again
handle final answer
log events
handle failures
```

The Agents SDK packages that loop into `Agent` and `Runner` abstractions. You still own the product logic, tools, storage, approvals, and deployment, but the SDK handles the repeated mechanics of model calls, tool calls, handoffs, streaming, sessions, guardrails, and traces.

## Why The SDK Exists

Agent applications have a lot of boring-but-essential plumbing.

Suppose you want to build a research assistant that can search the web, read uploaded files, call internal APIs, write a report, ask a human before sending email, and remember the thread. The hard part is not only "which model should answer?" The hard part is the whole control surface:

- What tools are available?
- Which tool calls are safe to run automatically?
- When should the model stop and return a final answer?
- When should a specialist agent take over?
- How do you keep conversation state across turns?
- How do you trace a failed run?
- How do you inspect what the model did before it reached the final answer?
- How do you keep tool output from polluting context forever?

The SDK is useful because those concerns show up repeatedly across agent products. It gives you a small set of primitives rather than forcing every application to rebuild its own ad hoc agent loop.

## Agents SDK, Responses API, And Agent Builder

OpenAI now has several related surfaces, and it is easy to mix them up.

The `Responses API` is the lower-level model API. It is a unified endpoint for model requests, tool use, multimodal inputs, streaming, and stateful interactions. If you want direct control over the model request and tool loop, you can build directly on Responses.

The `Agents SDK` is the code-first orchestration layer. Use it when your server owns tools, state, approvals, custom runtime behavior, and product integration. You write Python or TypeScript code, define agents and tools, run them with the SDK, and deploy the result inside your own backend.

`Agent Builder` is the hosted visual workflow path. Use it when you want a UI for designing and deploying hosted agent workflows, especially when paired with ChatKit. It is different from the SDK path because Agent Builder owns more of the workflow-authoring surface.

A good rule:

- Use the OpenAI client libraries for direct model requests.
- Use the Agents SDK when you want code-owned orchestration.
- Use Agent Builder when you want hosted visual workflow building and ChatKit deployment.

## The Core Primitives

The SDK is intentionally small. The most important primitives are:

### `Agent`

An `Agent` is the main unit. It usually has:

- a `name`,
- `instructions`,
- a model choice,
- tools,
- optional handoffs,
- optional guardrails,
- optional structured output type,
- optional runtime hooks and settings.

The agent definition is the contract for one role. A refund support agent, report-writing agent, code-review agent, data-analysis agent, and triage agent should usually be separate agents because they have different instructions, tools, and success criteria.

### `Runner`

`Runner` executes the agent loop. It can run asynchronously, synchronously, or with streaming. Its job is to keep calling the model, executing tool calls, switching agents after handoffs, and stopping when the run reaches a final output or hits a configured limit.

### Tools

Tools are how the agent acts outside pure text generation. The SDK supports hosted OpenAI tools, local/runtime tools, function tools, MCP tools, agents-as-tools, and newer workspace-oriented tools.

### Handoffs

Handoffs let one agent delegate the conversation to another specialist. After a handoff, the specialist becomes the active agent for the rest of that run.

### Guardrails

Guardrails validate user input, tool input/output, or final output. They can block or fail fast when a request or result violates a policy.

### Sessions

Sessions store conversation history across multiple agent runs so you do not have to manually reconstruct prior turns.

### Tracing

Tracing records the workflow: model calls, tool calls, handoffs, guardrails, and custom events. This matters because agent failures are usually trajectory failures, not just final-answer failures.

## The Agent Loop

The agent loop is the operational heart of the SDK.

When you call `Runner.run(...)`, the SDK starts with an agent and some input. Then it loops:

1. call the model for the current agent,
2. inspect the model output,
3. if the model returned final output, stop,
4. if the model requested a tool, run the tool and append the result,
5. if the model requested a handoff, switch the active agent,
6. repeat until the run is done or the max turn limit is reached.

This is why agent frameworks are not just prompt templates. The loop is an execution model. It decides when the model speaks, when code runs, when specialists take over, and when the system stops.

## What You Can Build With It

The SDK is useful for applications where the model must do more than answer from its own weights.

### Customer support agents

You can build a triage agent that routes to billing, refunds, technical support, or policy specialists. Each specialist can have its own instructions and tools. Guardrails can block requests that ask for unsafe account changes. Human review can pause before refunds, account deletion, or outbound messages.

### Research assistants

You can combine web search, file search, code interpreter, internal APIs, and report-writing agents. A manager agent can break a research task into subquestions, call specialist agents as tools, and produce a final memo with citations and caveats.

### Data analysis agents

You can wrap internal data queries, spreadsheet tools, code execution, chart generation, and structured outputs. The model can ask for data, run calculations, generate a summary, and return a typed object for your application to render.

### Coding and repository agents

With local/runtime tools or sandbox agents, an agent can inspect files, run commands, apply patches, and verify results. That turns the system from "chat about code" into "operate on a workspace."

### Operations agents

You can build agents that inspect dashboards, query logs, draft incident updates, create tickets, or run predefined runbooks. The key is to put approval gates around irreversible actions.

### Personal workflow agents

You can build calendar, email, note-taking, travel-planning, or task-management assistants. Sessions help preserve the thread, tools connect to external services, and guardrails/human review protect high-consequence actions.

### Voice agents

The SDK includes realtime and voice paths for low-latency spoken interactions. In Python, realtime agents are server-side WebSocket agents built on the Realtime API. In TypeScript, the SDK also supports browser-oriented realtime flows.

## Tools: How Agents Act

Tools are the main boundary between language and the world.

The SDK supports several tool categories:

- Hosted OpenAI tools: web search, file search, code interpreter, hosted MCP, image generation, and tool search.
- Local/runtime tools: computer use, shell, patching, or environment-specific tools.
- Function tools: ordinary Python or TypeScript functions wrapped as callable tools.
- MCP tools: tool surfaces exposed by Model Context Protocol servers.
- Agents as tools: a specialist agent exposed as a callable tool.
- Workspace-scoped tools: newer surfaces for running workspace tasks through agent tooling.

Function tools are often the first tool type to learn. You write a normal function, decorate or wrap it, and the SDK exposes a schema so the model can call it.

The important design question is not "can the agent call a tool?" It is "should this tool be available, what inputs are allowed, and what happens if it fails?"

Good tools are:

- narrow enough to be safe,
- explicit about their inputs,
- easy to test outside the model,
- clear about errors,
- instrumented so you can trace calls,
- gated when they can cause real-world consequences.

## Multi-Agent Design: Handoffs And Agents As Tools

The SDK gives you two common ways to compose agents.

### Handoffs

A handoff means one agent passes control to another. This is useful when the user should now be speaking to the specialist.

Example: a support triage agent hands off to a refund agent. The refund agent receives the conversation and owns the next response.

Use handoffs when:

- the specialist should take over the conversation,
- the task naturally belongs to one domain,
- the final answer should come from that specialist,
- you want the active agent identity to change.

### Agents as tools

An agent-as-tool means one agent calls another agent as a tool, receives its result, and stays in control.

Example: a research manager calls a statistics agent, a literature agent, and a writing agent, then synthesizes the final report.

Use agents as tools when:

- a manager should keep control,
- specialist outputs are intermediate evidence,
- the user should receive one integrated answer,
- you want a planner-worker-reviewer pattern.

### The practical difference

Handoffs are like transferring the call to another department.

Agents as tools are like asking another department for a memo while you keep leading the project.

## State And Memory

State is where many agent products become fragile.

The SDK has several state strategies:

- manual conversation management,
- SDK sessions,
- OpenAI server-managed continuation mechanisms,
- sandbox memory for workspace-oriented agents.

Sessions are the simplest place to start for multi-turn chat. A session stores conversation history and prepends the relevant prior items on the next run. This prevents you from manually calling conversion helpers and passing prior output back into the model each time.

But session memory is not the same thing as durable semantic memory.

Session memory says: "remember this conversation thread."

Semantic or product memory says: "remember stable facts, preferences, decisions, prior task outcomes, or reusable lessons across threads."

Sandbox memory is a different feature for sandbox agents. It distills lessons from prior sandbox runs into files inside the sandbox workspace so future runs can reuse that experience. That is especially relevant for coding, file-heavy analysis, or long-running workspace tasks.

## Guardrails And Human Review

Guardrails are checks around agent behavior.

The SDK has input guardrails, output guardrails, and tool guardrails.

Input guardrails run on the initial user input. They are useful for blocking requests the system should not handle.

Output guardrails run on the final output. They are useful for checking whether the response violates a policy, leaks sensitive data, fails a required schema, or needs revision.

Tool guardrails run around custom function-tool calls. These matter when a workflow includes manager agents, handoffs, or delegated specialists, because agent-level guardrails do not automatically inspect every tool call in the middle of a complex workflow.

Human review is the human version of a guardrail. Instead of letting an agent take an irreversible action immediately, you can pause the run, ask for approval, and resume after the decision.

Use human review for:

- sending messages externally,
- making purchases,
- changing account settings,
- deleting files,
- modifying production systems,
- issuing refunds,
- changing legal or financial records.

## Tracing And Debugging

Tracing is not optional in serious agent work.

A chatbot failure is often visible in the final text. An agent failure may be hidden in the path:

- it picked the wrong tool,
- it called the right tool with the wrong arguments,
- it ignored a tool error,
- it handed off too early,
- it let context bloat bury the important instruction,
- it passed a guardrail because the guardrail checked the wrong boundary,
- it produced a plausible final answer from stale intermediate evidence.

The SDK traces model generations, tool calls, handoffs, guardrails, and custom events. That gives you a run history you can inspect in development and production.

Tracing turns agent debugging from "why did it say that?" into "what did it do before it said that?"

## Sandbox Agents

Sandbox agents are a newer Python SDK feature for agents that need a real workspace.

A normal tool-using agent might call functions and APIs. A sandbox agent can operate in an isolated filesystem with files, commands, packages, ports, snapshots, mounts, and memory.

This matters for tasks like:

- code review,
- repository edits,
- document bundle analysis,
- data-room question answering,
- artifact generation,
- website cloning,
- multi-step file transformations,
- long-running workspace investigations.

The key pieces are:

- `SandboxAgent`: an `Agent` plus sandbox-specific defaults and capabilities,
- `Manifest`: the starting workspace contract,
- sandbox session: the live isolated environment where commands and file changes happen,
- snapshots and resume state: ways to continue or seed future runs,
- capabilities: filesystem, shell, skills, memory, compaction, and related workspace powers.

Sandbox agents are beta in the docs. That means the concept is important, but production code should expect API details to evolve.

## Realtime And Voice Agents

The SDK also supports realtime/voice agent patterns.

Voice agents add a latency-sensitive loop:

```text
audio input
-> speech-to-text
-> agent workflow
-> text-to-speech
-> audio output
```

Realtime agents are for spoken or low-latency interactions where turn-taking, interruption handling, and streaming events matter. The Python docs describe server-side realtime agents over WebSocket transport. The TypeScript SDK includes browser-friendly realtime patterns, including WebRTC paths.

Voice agents are not just text agents with a microphone. They need short responses, interruption handling, fast tools, and careful management of latency.

## Python And TypeScript

The SDK exists in Python and TypeScript.

Python is a natural fit when:

- your tools are Python functions,
- you are doing data analysis,
- you need backend orchestration,
- you want sandbox agents,
- you are integrating with Python ML or data systems.

TypeScript is a natural fit when:

- your application backend is Node, Deno, or Bun,
- you are integrating tightly with a web product,
- you want TypeScript types and Zod schemas,
- you are building browser-facing realtime or voice experiences.

The mental model is shared: agents, tools, handoffs, guardrails, sessions, tracing, and realtime paths.

## A Minimal Example

Here is the smallest useful Python shape:

```python
from agents import Agent, Runner, function_tool


@function_tool
def get_order_status(order_id: str) -> str:
    """Return the current status for an order."""
    # In a real app, this would call your database or internal API.
    return f"Order {order_id} is currently in transit."


agent = Agent(
    name="Support assistant",
    instructions=(
        "You help customers with order questions. "
        "Use tools when order-specific status is needed."
    ),
    tools=[get_order_status],
)

result = Runner.run_sync(
    agent,
    "Can you check order A123?",
)

print(result.final_output)
```

That example is simple, but it contains the whole pattern:

- define the role,
- expose a tool,
- run the agent,
- let the SDK manage whether the model calls the tool and how the tool result returns to the model.

## A Practical Architecture Pattern

A production-ish agent application often looks like this:

```text
App request
  -> auth and permissions
  -> input guardrails
  -> triage agent
       -> hosted tools for search or retrieval
       -> local tools for internal APIs
       -> specialist agents as tools
       -> handoff to a specialist when needed
       -> human approval before external side effects
  -> output guardrails
  -> structured final output
  -> product renderer
  -> trace and eval logging
```

The most important product decision is the boundary between agent autonomy and application control.

Let the agent decide flexible reasoning steps. Keep your application in charge of permissions, irreversible actions, storage, billing, and deployment policy.

## What The SDK Is Not

The SDK is not a guarantee that an agent will behave well. It gives you primitives for building, not automatic judgment.

The SDK is not a replacement for evaluation. You still need task-level tests, trace review, adversarial examples, and production monitoring.

The SDK is not the only way to build agents. If your use case is simple, direct Responses API code may be enough.

The SDK is not the same thing as Agent Builder. Agent Builder is the hosted visual workflow path; the SDK is the code-first orchestration path.

The SDK is not magic long-term memory. Sessions preserve conversation history, and sandbox memory preserves workspace lessons, but product memory still needs careful schema, permissions, retention, and privacy design.

The SDK is not a reason to expose broad tools without guardrails. Tool access is capability access. If a tool can move money, delete files, email customers, or change production state, approval and auditing should be part of the design.

## Design Checklist

When designing an Agents SDK app, answer these questions before writing much code:

1. What is the agent allowed to do autonomously?
2. What actions require human approval?
3. What tools does it need, and can each tool be tested without the model?
4. Which tools should be hosted, local functions, MCP tools, or sandbox capabilities?
5. Does the workflow need one agent, handoffs, or manager-style agents-as-tools?
6. What state should persist for one conversation only?
7. What durable memory should survive across conversations?
8. What should be structured output instead of free text?
9. What input, tool, and output guardrails are required?
10. What traces and evals will tell you whether the system is improving?

## Common Confusions

### "Is this the same as OpenAI's Python SDK 2.0?"

No. The Agents SDK is a separate package (`openai-agents` in Python, `@openai/agents` in TypeScript). The Python Agents SDK docs say to use the `openai` Python package `v2.x` with newer SDK versions, but that is not the same as the Agents SDK itself being formally version `2.0`.

### "Do I need the Agents SDK for every tool-using app?"

No. If you only need one or two model calls and a simple tool loop, direct Responses API code may be cleaner. The SDK starts paying off when you need orchestration, handoffs, sessions, guardrails, streaming, tracing, or repeated agent patterns.

### "Should I use handoffs or agents as tools?"

Use handoffs when the specialist should own the conversation. Use agents as tools when a manager should gather specialist work and still own the final answer.

### "Are sessions the same as memory?"

Not exactly. Sessions store conversation history across runs. Durable memory stores reusable facts, preferences, or lessons. Sandbox memory is a workspace-specific memory feature for sandbox agents.

### "Can I trust a tool-using agent with production actions?"

Only after you design permissions, approvals, validation, logging, and rollback. The SDK makes tool use easier; it does not remove operational responsibility.

## Quick Check

1. What is the difference between the Responses API and the Agents SDK?
2. Why is a tool call more dangerous than a normal text response?
3. When would you use a handoff instead of an agent-as-tool?
4. What does a session remember?
5. Why is tracing especially important for agents?
6. What extra capability does a sandbox agent add beyond a normal agent?
7. Why should irreversible actions usually require approval?

## One-Minute Summary

The OpenAI Agents SDK is a code-first framework for building agentic applications. It gives you `Agent` definitions, a `Runner` loop, tool calling, handoffs, sessions, guardrails, tracing, sandbox agents, and realtime/voice paths.

Use it when your application needs more than a single model response: tools, state, delegation, streaming, validation, or production observability.

The clean mental model is:

```text
model intelligence
+ tools
+ state
+ orchestration
+ guardrails
+ traces
= an agent application
```

The SDK helps with the middle layers. You still need to design the product boundary: what the agent may do, what humans must approve, what state persists, how failures are detected, and how the system is evaluated.
