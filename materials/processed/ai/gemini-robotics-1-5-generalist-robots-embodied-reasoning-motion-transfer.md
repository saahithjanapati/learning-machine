# Gemini Robotics 1.5: Generalist Robots With Embodied Reasoning, Thinking, And Motion Transfer

Source: `https://arxiv.org/abs/2510.03342`
PDF: `https://arxiv.org/pdf/2510.03342`
HTML: `https://ar5iv.labs.arxiv.org/html/2510.03342`
Title: `Gemini Robotics 1.5: Pushing the Frontier of Generalist Robots with Advanced Embodied Reasoning, Thinking, and Motion Transfer`
Authors: `Gemini Robotics Team et al.`
Submitted: `2025-10-02`
Latest version: `2025-11-28` (`v3`)
Ingested: `2026-05-03`
Extraction engine: `arXiv metadata + local PDF extraction with PyMuPDF + ar5iv availability check + manual structured ingest`
Strategy: `canonical PDF extraction and medium/full paper lesson normalization`

## Summary

This technical report introduces the Gemini Robotics 1.5 family: `Gemini Robotics 1.5` (`GR 1.5`), a multi-embodiment vision-language-action model, and `Gemini Robotics-ER 1.5` (`GR-ER 1.5`), an embodied-reasoning vision-language model. The report frames these as two complementary pieces of a physical-agent stack. `GR-ER 1.5` handles high-level perception, planning, tool use, success detection, and safety reasoning. `GR 1.5` turns natural-language instructions into robot actions across several robot embodiments.

The paper's core claim is that general-purpose robots require more than better low-level control. They need physical-world understanding, explicit reasoning, multi-step planning, action execution, recovery, and safety constraints to work together. The report contributes three main ideas:

- `Motion Transfer`: a training recipe and architecture direction for learning across heterogeneous robot bodies and transferring skills between them.
- `Embodied Thinking`: a mode in which the VLA generates natural-language intermediate reasoning before acting, improving multi-step execution and interpretability.
- `Embodied Reasoning`: a VLM optimized for spatial, temporal, task-progress, success-detection, and real-world physical reasoning.

The report then combines the ER model and VLA into an agentic physical system and evaluates it on long-horizon tasks that require planning, tool use, memory, and recovery.

## Model Family

### Gemini Robotics 1.5

`GR 1.5` is the action model. It is a vision-language-action model that accepts visual observations, proprioception, and language instructions, then emits low-level robot actions. The report emphasizes that a single checkpoint can control multiple robot platforms:

- ALOHA;
- Bi-arm Franka;
- Apptronik Apollo humanoid.

The important claim is not just multi-robot support. It is that the model can use data from one embodiment to improve performance on another, and in some cases transfer skills zero-shot across bodies.

### Gemini Robotics-ER 1.5

`GR-ER 1.5` is the embodied-reasoning model. It inherits Gemini's multimodal and tool-use capabilities, then is optimized for physical-world reasoning problems such as:

- task planning;
- spatial reasoning;
- object detection and pointing;
- trajectory and state estimation;
- progress prediction;
- success detection;
- safety reasoning.

In the agentic system, `GR-ER 1.5` is the orchestrator. It interprets the user's goal, makes and updates plans, calls tools when useful, decides when substeps have succeeded, and sends executable natural-language instructions to `GR 1.5`.

## Motion Transfer

Robotics suffers from fragmented data. A dataset from a two-arm tabletop robot does not naturally line up with a dataset from a humanoid. The bodies have different joints, action spaces, cameras, reach envelopes, and failure modes.

The paper's `Motion Transfer` idea is to train a VLA so it can extract transferable structure from heterogeneous embodiment data. Instead of treating each robot as a separate policy problem, the model is encouraged to learn shared facts about motion and physical interaction. The report argues that this improves generalization and enables cross-embodiment skill transfer.

The training data includes robot data from ALOHA, Bi-arm Franka, and Apollo, plus public text, image, and video data. The robot data covers thousands of tasks across varied scenes and manipulation skills.

## Embodied Thinking

The report introduces thinking at two levels:

- `GR-ER 1.5` thinks at the planning and physical-reasoning level.
- `GR 1.5` can think before acting at the action-execution level.

For the VLA, thinking means the model generates a natural-language reasoning trace before emitting robot actions. This helps it decompose high-level commands into shorter physical steps. The authors report that this improves performance on multi-step tasks and makes robot behavior easier for humans to inspect.

This is important because robot control is a cross-modal translation problem. A phrase like "sort the clothes by color" has to become visual grounding, object selection, gripper movements, placement choices, and recovery behavior. The report argues that splitting this into language-mediated intermediate steps makes the mapping more robust than a single direct jump from instruction to action.

## Evaluation

The report combines real-robot evaluation with simulation-heavy development.

For real-robot comparisons, the authors use interleaved A/B/n testing in the same work cells, so differences are less likely to come from hardware or environment variation. For development, they use MuJoCo-based simulation and report that more than 90 percent of evaluation episodes during development were conducted in simulation, while real-world evaluation remained necessary for final quality.

The main short-horizon benchmark contains 230 tasks and evaluates:

- visual generalization;
- instruction generalization;
- action generalization;
- task generalization;
- cross-embodiment transfer;
- multi-step performance with and without thinking.

## Main Findings

### Multi-Embodiment VLA

`GR 1.5` controls ALOHA, Bi-arm Franka, and Apollo from the same checkpoint without robot-specific post-training for the reported short-horizon evaluations. It outperforms prior Gemini Robotics models and ablations across the tested embodiments.

The Motion Transfer ablation is central. Models trained on single-embodiment data do poorly on cross-embodiment transfer. Multi-embodiment data helps, but the report says the full Motion Transfer recipe provides stronger positive transfer.

### Cross-Embodiment Skill Transfer

The report shows examples where one robot performs tasks whose training data came only from another robot. The paper stresses that this is not merely partial progress: the success-rate plots are included to show successful task execution in zero-shot cross-embodiment settings.

This matters because collecting robot data is expensive. If a model can learn useful skill structure across bodies, the robotics community can get more value from heterogeneous datasets instead of needing to repeat every skill on every platform.

### Thinking Helps Acting

The report compares `GR 1.5` with thinking enabled versus disabled on multi-step tasks. Thinking improves progress scores across the tested embodiments. The qualitative examples also show interpretability, implicit subtask-completion awareness, and recovery behavior, such as choosing a different hand after an object slips.

### Embodied Reasoning

`GR-ER 1.5` is evaluated on a mix of academic embodied-reasoning benchmarks and general multimodal benchmarks. The report presents it as expanding the tradeoff frontier: it keeps broad generality while improving physical-world reasoning.

Important evaluated capabilities include:

- complex pointing;
- point-to-count;
- progress understanding;
- real-time and offline success detection;
- single-view and multi-view scene understanding;
- real-world object detection and pointing from early tester use cases;
- improved performance from inference-time thinking.

The paper compares against several Gemini and GPT-5-family baselines using API results from September 2025 for the GPT models.

### Physical Agent

The report combines `GR-ER 1.5` and `GR 1.5` into an agentic robot system. The orchestrator plans and monitors; the VLA executes.

The long-horizon evaluation uses 8 tasks across ALOHA and Bi-arm Franka. The tasks include examples that require web search, memory, planning, 3-D reasoning, dexterity, and multi-step execution. The agent with `GR-ER 1.5` as orchestrator outperforms both:

- `GR 1.5` with thinking alone;
- an agent using Gemini 2.5 Flash as orchestrator with `GR 1.5` as executor.

The failure analysis breaks errors into planning, success detection, and action failures. The `GR-ER 1.5` orchestrator reduces failures in all three categories, with the largest improvement in planning.

## Safety And Limitations

The report includes a safety section covering:

- high-level semantic safety reasoning;
- safe human-robot dialogue;
- thinking before unsafe actions;
- low-level physical safety subsystems;
- operational safety practices;
- ASIMOV-2.0 safety benchmarks;
- auto-red-teaming for hallucination and robustness failures.

The report also names several limitations and future directions:

- long-horizon autonomy is still hard;
- real-world deployment requires stronger robustness and monitoring;
- robot dexterity remains roughly on par with the previous generation despite improved generalization;
- the authors want to learn from scalable data sources such as human videos and synthetic videos;
- reinforcement learning and new architectures may be needed for more precise manipulation.

## Main Takeaway

Gemini Robotics 1.5 is best read as a physical-agent architecture report. Its central lesson is that robotics progress does not come from one model capability in isolation. A capable physical agent needs low-level action, high-level embodied reasoning, cross-embodiment transfer, thinking, success detection, tool use, and safety systems to fit together.
