# Gemini Robotics 1.5: Generalist Robots, Embodied Reasoning, And Motion Transfer

Source note: Gemini Robotics Team et al., "Gemini Robotics 1.5: Pushing the Frontier of Generalist Robots with Advanced Embodied Reasoning, Thinking, and Motion Transfer." arXiv:2510.03342v3, submitted October 2, 2025 and last revised November 28, 2025. Source page: [arxiv.org/abs/2510.03342](https://arxiv.org/abs/2510.03342). Processed source: [materials/processed/ai/gemini-robotics-1-5-generalist-robots-embodied-reasoning-motion-transfer.md](../../../materials/processed/ai/gemini-robotics-1-5-generalist-robots-embodied-reasoning-motion-transfer.md).

## Table of Contents

- [Medium-Length Version](#medium-length-version)
- [Full-Length Version](#full-length-version)
- [The Robot Problem This Paper Is Trying To Solve](#the-robot-problem-this-paper-is-trying-to-solve)
- [The Two-Model Family](#the-two-model-family)
- [Motion Transfer](#motion-transfer)
- [Embodied Thinking](#embodied-thinking)
- [Embodied Reasoning](#embodied-reasoning)
- [The Physical Agent Architecture](#the-physical-agent-architecture)
- [Evaluation Strategy](#evaluation-strategy)
- [Main Results](#main-results)
- [Safety](#safety)
- [Limitations](#limitations)
- [Memory Checklist](#memory-checklist)

## Medium-Length Version

### Medium Thesis

Gemini Robotics 1.5 is a report about building more general robot agents.

The key idea is that a useful real-world robot cannot be just a language model, just a vision model, or just a motor-control policy. It needs several abilities to work together:

- understand the physical scene;
- reason about space, objects, progress, and safety;
- break a long task into executable substeps;
- call tools or use external information when the task needs it;
- turn instructions into continuous robot actions;
- notice when something failed;
- recover.

The report introduces two models:

- `Gemini Robotics 1.5` (`GR 1.5`), a vision-language-action model that controls robots.
- `Gemini Robotics-ER 1.5` (`GR-ER 1.5`), an embodied-reasoning model that plans, understands physical situations, uses tools, and monitors progress.

Together, they form a physical-agent stack: one model thinks and orchestrates; the other model acts.

### What Makes This Different From A Normal VLA

A normal vision-language-action model takes in images and instructions, then outputs actions. That is already hard. But a single direct policy can struggle when a task is long, ambiguous, or requires outside knowledge.

This paper adds three important upgrades.

First, `Motion Transfer` tries to let one model learn across very different robot bodies. The same `GR 1.5` checkpoint is evaluated on ALOHA, Bi-arm Franka, and Apptronik Apollo. The goal is not just "train on many robots." The goal is to learn reusable structure about motion and physical interaction so a skill observed on one robot can help another robot.

Second, `Embodied Thinking` lets the action model generate language-like intermediate reasoning before acting. Instead of jumping directly from "sort the clothes by color" to raw motor commands, the model can break the task into smaller physical intentions. This helps multi-step tasks and makes the robot's behavior more inspectable.

Third, `GR-ER 1.5` is specialized for embodied reasoning. It handles physical-world problems such as pointing, progress estimation, success detection, task planning, and safety reasoning. In the agent system, it acts as the orchestrator.

### The Agent Pattern

The paper's agent architecture is simple to state:

1. The user gives a goal.
2. `GR-ER 1.5` interprets the goal, looks at the scene, calls tools if needed, and makes a plan.
3. It sends natural-language subinstructions to `GR 1.5`.
4. `GR 1.5` turns each subinstruction into robot action.
5. `GR-ER 1.5` checks progress and decides what should happen next.

This is similar to a software agent loop, but with the physical world in the loop. That makes success detection and safety much more important. A bad software tool call may return a wrong string. A bad robot action can break something, spill something, or harm someone.

### Results In One Pass

The report evaluates `GR 1.5` on a 230-task benchmark across several kinds of generalization: visual, instruction, action, task, cross-embodiment transfer, and multi-step thinking. It reports that `GR 1.5` outperforms earlier Gemini Robotics models and ablations.

The Motion Transfer ablation is one of the most important results. Multi-embodiment data helps, but the full Motion Transfer recipe helps more. Single-embodiment models are weak on tasks whose data came from another robot. With cross-embodiment training and Motion Transfer, the model can transfer skills more effectively.

Thinking also helps. Turning on thinking for the VLA improves progress on multi-step tasks across the tested embodiments. The qualitative examples show that thinking traces can reveal what the robot is trying to do, whether it thinks a subtask is complete, and how it recovers after mistakes.

For `GR-ER 1.5`, the report shows strong results on embodied-reasoning benchmarks: complex pointing, success detection, progress understanding, and real-world object localization tasks. It also argues that embodied-reasoning performance improves with inference-time thinking.

Finally, the combined physical agent is evaluated on 8 long-horizon tasks. The `GR-ER 1.5 + GR 1.5` agent outperforms both a thinking VLA alone and a baseline that uses Gemini 2.5 Flash as the orchestrator. The failure analysis says the specialized embodied-reasoning orchestrator reduces planning failures, success-detection failures, and action failures.

### Medium Takeaway

The durable lesson is that physical agents need an architecture, not just a larger action model. `GR 1.5` supplies multi-embodiment action. `GR-ER 1.5` supplies high-level physical reasoning. Motion Transfer tries to make robot data reusable across bodies. Thinking makes both planning and acting more explicit. The combination is what moves the system toward generalist robots.

## Full-Length Version

## The Robot Problem This Paper Is Trying To Solve

Robots are stuck between two worlds.

On one side, foundation models are very good at language, images, code, and general reasoning. They can answer questions, read pictures, call tools, and plan in text.

On the other side, robots have to touch the world. They have joints, grippers, cameras, collisions, delays, blind spots, fragile objects, and safety constraints. A robot does not merely answer "where should the mug go?" It must move through space, grasp the mug, avoid knocking over the cup beside it, notice if it slipped, and recover.

That means general robotics is not solved by adding a language model to a robot arm. The hard problem is the interface between thought and action:

- high-level task meaning;
- visual grounding;
- spatial and temporal reasoning;
- action execution;
- progress monitoring;
- failure recovery;
- safety.

The Gemini Robotics 1.5 report is an attempt to build that interface as a model family and an agent system.

The central claim is:

**General-purpose robots need both embodied reasoning and embodied action.**

Embodied reasoning means understanding the physical world well enough to plan, estimate progress, predict success, identify risks, and choose substeps. Embodied action means turning those substeps into actual robot movement.

## The Two-Model Family

The paper introduces two models that play different roles.

### Gemini Robotics 1.5: The Action Model

`Gemini Robotics 1.5`, or `GR 1.5`, is the VLA: the vision-language-action model.

It receives visual observations, robot state, and natural-language instructions. It outputs robot actions. It is supposed to understand instructions like a multimodal model and move like a robot policy.

The notable part is that the same model family is evaluated across very different embodiments:

- `ALOHA`, a bimanual manipulation platform;
- `Bi-arm Franka`, another two-arm robot setup;
- `Apptronik Apollo`, a humanoid robot.

These bodies are not interchangeable. They differ in geometry, degrees of freedom, cameras, reach, hands, control spaces, and data availability. A skill that looks easy on one platform may be much harder on another.

So the paper is not merely saying "we trained one model on one robot." It is saying that `GR 1.5` is built to learn from heterogeneous robot data and transfer what it learns across bodies.

### Gemini Robotics-ER 1.5: The Reasoning Model

`Gemini Robotics-ER 1.5`, or `GR-ER 1.5`, is the embodied-reasoning model.

It is not the low-level controller. It is the model that understands the physical task well enough to orchestrate the controller.

The paper emphasizes capabilities such as:

- planning;
- visual and spatial understanding;
- object detection;
- pointing;
- trajectory reasoning;
- progress estimation;
- success detection;
- safety reasoning;
- tool use.

In a software-agent analogy, `GR-ER 1.5` is closer to the planner and supervisor. In a robotics analogy, it is the system that says, "Given the user's goal and the current scene, what should we try next, and did the last step work?"

## Motion Transfer

Robot data is expensive and fragmented.

If you collect a large dataset on one robot arm, it does not automatically train another robot. The action spaces differ. The bodies differ. The cameras differ. Even the meaning of a simple movement can differ because the robot has a different wrist, gripper, height, or workspace.

This creates a data bottleneck. If every new robot needs its own full dataset for every skill, general robotics scales badly.

`Motion Transfer` is the paper's answer to that bottleneck.

The idea is to train the VLA so it can learn common structure across embodiments. A robot placing an object in a bowl, a humanoid reaching for a bag, and a dual-arm setup sliding a drawer are not the same action sequence, but they share physical regularities:

- objects occupy space;
- contact changes state;
- grippers and hands can constrain motion;
- trajectories have affordances and obstacles;
- tasks have subgoals;
- the visual result of success may be similar even when the motor command differs.

The report says `GR 1.5` uses a new architecture and training recipe to learn from multi-embodiment data and transfer skills across robots. The training data includes ALOHA, Bi-arm Franka, and Apollo data, plus public text, image, and video data.

The important evaluation is the ablation:

- single-embodiment training is weak for cross-embodiment transfer;
- multi-embodiment data helps;
- multi-embodiment data plus Motion Transfer helps more.

That is the result that supports the claim that the model is learning something more reusable than a separate policy per robot.

## Embodied Thinking

One of the report's most interesting ideas is that the action model can think before acting.

In ordinary language-model use, thinking means spending extra inference computation on intermediate reasoning. In this paper, embodied thinking means using intermediate natural-language reasoning inside physical tasks.

For `GR 1.5`, thinking helps bridge a difficult translation:

```text
high-level task instruction
-> scene understanding
-> physical subgoals
-> short-horizon commands
-> robot actions
```

Without thinking, a VLA has to map the high-level instruction and visual observation directly into actions. With thinking, it can make an intermediate plan. For example, "pack the suitcase for London" might become a sequence involving weather, clothing choice, object localization, picking, placing, and checking.

The paper gives two main reasons this matters.

First, it improves multi-step execution. A robot can decompose a task into smaller physical intentions, then act on those. That is easier than solving the whole task as one opaque action-generation problem.

Second, it improves interpretability. If a robot's intermediate thoughts say what it is about to do, a human can inspect whether the robot is pursuing the right subgoal. This does not automatically make the system safe, but it gives designers and operators more observability.

The qualitative examples are especially useful. The paper describes cases where the thinking VLA:

- notices that a subtask is complete and switches to the next step;
- changes behavior after an object slips;
- exposes planned actions through thinking traces;
- handles multi-step semantic tasks more coherently.

The deeper lesson is that reasoning is not only for final answers. In robotics, reasoning can become a control interface between task meaning and action.

## Embodied Reasoning

`GR-ER 1.5` is designed for the kind of reasoning that robots need.

This is different from ordinary visual question answering. A robot needs to know where to place a point, whether a drawer is open enough, whether an object is reachable, whether the current frame represents success, and what could go wrong if it acts.

The report evaluates embodied reasoning across several families of tasks.

### Complex Pointing

Pointing is a compact way to ground language in an image. A point can mean "click here," "grasp here," "avoid this," "place it there," or "this is the relevant object."

Complex pointing goes beyond locating a named object. It may require spatial, physical, or semantic constraints:

- point to the safe grasp location;
- point to the object matching a description;
- point to a place that satisfies a spatial relation;
- count by using points as intermediate evidence;
- predict a trajectory or path.

The report presents `GR-ER 1.5` as strong on these pointing and point-based reasoning tasks.

### Progress Understanding

Progress understanding is the ability to tell where the task is in time.

That sounds easy until you imagine a real robot rollout. The robot might partially complete a step. The relevant object may be hidden from one camera. Success might require semantic context, not just pixel change. A towel being "folded" or a screw being "on the right" requires interpretation.

The paper studies several versions:

- estimating percentage completion;
- detecting success or failure;
- reasoning from single or multiple camera views;
- doing this in real time or offline;
- unshuffling frames into the right order.

This matters because long-horizon agents need reliable step boundaries. If the orchestrator thinks a subtask succeeded too early, it may move on before the world is ready. If it waits too long, it wastes time or repeats actions.

### Real-World Use Cases

The report also evaluates object detection and pointing on data from real-world early tester scenarios. This is important because robotics demos can overfit to clean lab settings. In-the-wild distributions are messier, less curated, and more variable.

The lesson is not just that the model scores well. The lesson is that embodied reasoning should be measured on tasks that resemble the perception and decision problems robots actually face.

### Inference-Time Thinking

The report says `GR-ER 1.5` benefits from thinking budget on embodied-reasoning tasks. More reasoning is not equally useful for every task: image and video question answering tend to benefit more than simple pointing. But the broader pattern is that embodied reasoning can scale with inference-time computation, not just training-time scale.

That is important because robots often face tasks where taking a little more time to reason is acceptable and safer than acting too quickly.

## The Physical Agent Architecture

The full system combines `GR-ER 1.5` and `GR 1.5`.

The architecture is:

```text
user goal
-> GR-ER 1.5 orchestrator
-> natural-language subinstruction
-> GR 1.5 action model
-> robot action
-> scene feedback
-> GR-ER 1.5 progress check
-> next subinstruction or recovery
```

The key idea is that the action model is made available to the orchestrator as a specialized tool. The orchestrator does not directly output motor commands. It sends natural-language instructions to the VLA.

This separation is useful:

- the orchestrator can reason broadly and call tools;
- the VLA can specialize in execution;
- success detection can be handled outside the low-level controller;
- long-horizon tasks can be broken into smaller pieces;
- failures can be diagnosed as planning, success-detection, or action failures.

The paper tests this on long-horizon tasks such as sorting trash, handling allergy-related instructions, organizing a desk, packing a suitcase, moving blocks through a drawer sequence, and cooking-related object selection.

Some tasks require web search. Some require remembering the earlier scene state. Some require 3-D reasoning. Some require many steps. This is the setting where a pure action model is most likely to struggle.

## Evaluation Strategy

The report uses both real robots and simulation.

For real-robot comparisons, the authors use interleaved A/B/n tests in the same work cells. That matters because robotics evaluation can be noisy. If one model is tested on a slightly easier arrangement, cleaner lighting, or more cooperative object placement, the comparison can be misleading.

For development, the team uses MuJoCo simulation to scale evaluation across scenes, objects, and embodiments. The report says more than 90 percent of evaluation episodes during development were simulated, though real-world evaluation remained necessary for final quality judgments.

The short-horizon benchmark contains 230 tasks. It looks at several axes:

- visual generalization: can the model handle background, lighting, distractors, and texture changes?
- instruction generalization: can it handle paraphrases, typos, languages, and different specificity levels?
- action generalization: can it adapt movement to new initial conditions or object instances?
- task generalization: can it do new tasks in new environments?
- cross-embodiment transfer: can a skill learned on one robot help another?
- thinking: does explicit reasoning improve multi-step execution?

The long-horizon agent evaluation contains 8 tasks across ALOHA and Bi-arm Franka. It tests planning, tool use, memory, dexterity, and recovery.

## Main Results

### GR 1.5 Generalizes Across Robots

The report says `GR 1.5` outperforms earlier Gemini Robotics models across the tested embodiments and generalization settings.

The important point is the shared checkpoint. The same model can control ALOHA, Bi-arm Franka, and Apollo in the reported setup. That is a step away from robot-specific post-training for every platform.

### Motion Transfer Helps

The Motion Transfer ablation is one of the clearest conceptual results.

Training on data from multiple robots can help, but it is not enough by itself. The paper's full Motion Transfer recipe provides stronger transfer than multi-embodiment training without Motion Transfer.

This is especially important for data-scarce robots. Humanoid robot data is harder and more expensive to collect. If a humanoid can benefit from data collected on other platforms, the data problem becomes less severe.

The paper also notes that the benefit depends on the size of the embodiment gap. Transfer between tabletop platforms can be easier than transfer from tabletop robots to a humanoid with different whole-body dynamics and visibility constraints.

### Thinking Helps Multi-Step Acting

On multi-step tasks, `GR 1.5` with thinking enabled improves progress scores over the non-thinking version.

The paper's interpretation is that thinking decomposes the instruction-to-action problem. Instead of compressing everything into one opaque policy step, the model first forms a language-based account of what it should do, then maps those shorter intentions to action.

That makes the task easier and more inspectable.

### GR-ER 1.5 Improves Embodied Reasoning

The report presents `GR-ER 1.5` as state-of-the-art on its embodied-reasoning benchmark mix while preserving broad general multimodal capabilities.

The most robotics-relevant capabilities are:

- complex pointing;
- spatial reasoning;
- progress estimation;
- success detection;
- multiview reasoning;
- object detection and pointing on real-world use-case data;
- safety-relevant physical reasoning.

The report compares with other frontier multimodal models, including Gemini 2.5 variants and GPT-5-family API baselines from September 2025.

### The Combined Agent Beats The Baselines

The most architecture-relevant result is the long-horizon agent evaluation.

The paper compares:

- `GR 1.5` with thinking on;
- Gemini 2.5 Flash as orchestrator plus `GR 1.5` as action model;
- `GR-ER 1.5` as orchestrator plus `GR 1.5` as action model.

The combined `GR-ER 1.5 + GR 1.5` agent performs best.

The failure breakdown is useful because it explains why. The specialized embodied-reasoning orchestrator reduces:

- planning failures;
- success-detection failures;
- action failures.

The largest reduction is in planning. That makes sense: `GR-ER 1.5` is not merely a generic VLM glued on top of a controller. It is optimized for the physical-world reasoning tasks the orchestrator needs.

## Safety

The report treats robot safety as a layered problem.

There is no single safety filter that solves robotics. Safety has to appear at several levels:

- dialogue safety, so the system does not produce harmful or inappropriate communication;
- semantic action safety, so it understands common-sense physical risks;
- thinking before acting, so unsafe actions can be reasoned about before execution;
- low-level physical safety systems, such as collision avoidance;
- operational safety practices around real hardware;
- red-team methods that search for adversarial failures.

The report discusses `ASIMOV-2.0`, a benchmark for physical safety reasoning. It includes injury-risk recognition, safety-consequence reasoning, intervention timing, and multimodal physical constraints.

It also discusses auto-red-teaming. In this setup, an attacker model creates adversarial tasks, a target model responds, and an autorater judges correctness and safety. The report gives hallucination discovery as one example: the attacker can ask the model to point to something that does not exist, and the autorater can detect that the response hallucinated an entity.

The safety lesson is practical: physical agents need both cognitive safety and physical safety. A robot can fail by saying the wrong thing, planning the wrong step, hallucinating the scene, acting too fast, colliding, or failing to stop.

## Limitations

The report is ambitious, but it is not a claim that general robotics is solved.

The paper itself points to several open problems.

First, long-horizon autonomy remains difficult. The agent results improve reliability, but the tasks are still bounded evaluations, not open-ended home or workplace deployment.

Second, dexterity does not advance as much as generalization. The report says `GR 1.5` reaches a new level of generalization, while dexterity remains roughly on par with the previous generation. That distinction matters. A robot can understand more tasks without becoming dramatically better at delicate manipulation.

Third, data remains a bottleneck. Motion Transfer helps reuse heterogeneous robot data, but the report still points toward learning from more scalable sources such as human video and synthetic video.

Fourth, safety and societal impacts remain ongoing work. The system includes safety benchmarks and red-teaming, but real deployment would require monitoring, constraints, and operational controls beyond benchmark performance.

Fifth, the reported system is still a composed architecture. That is a strength, but also a source of failure. The orchestrator can plan incorrectly. The success detector can misjudge progress. The action model can fail physically. The full agent is only as reliable as the loop between those parts.

## Memory Checklist

Remember these anchors:

1. `GR 1.5` is the action model: a multi-embodiment VLA.
2. `GR-ER 1.5` is the reasoning model: planning, physical understanding, success detection, and tool use.
3. `Motion Transfer` is the cross-embodiment learning idea.
4. `Embodied Thinking` lets the VLA reason in language before acting.
5. The full physical agent uses `GR-ER 1.5` as orchestrator and `GR 1.5` as executor.
6. The key benchmark logic is not just "better robot demo"; it tests visual, instruction, action, task, cross-embodiment, and long-horizon generalization.
7. Safety is layered: semantic reasoning, dialogue safety, physical safety systems, and red-teaming all matter.

The simplest one-sentence memory:

**Gemini Robotics 1.5 argues that capable physical agents need a reasoning model to plan and monitor, an action model to move, Motion Transfer to reuse robot data across bodies, and thinking to make long-horizon action more reliable.**
