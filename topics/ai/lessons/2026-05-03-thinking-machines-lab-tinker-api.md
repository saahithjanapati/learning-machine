# What Thinking Machines Lab's Tinker API Does

Source note: This lesson is based on Thinking Machines Lab's Tinker announcement and official documentation: [Tinker launch page](https://thinkingmachines.ai/blog/tinker/), [Tinker docs](https://docs.thinkingmachines.ai/docs/guides/index), [tutorials](https://docs.thinkingmachines.ai/docs/guides/tutorials), [guides](https://docs.thinkingmachines.ai/docs/guides/guides), and [pricing guide](https://docs.thinkingmachines.ai/docs/guides/pricing). Ingested on 2026-05-03.

## Table of Contents

- [Start Here](#start-here)
- [The Problem Tinker Is Solving](#the-problem-tinker-is-solving)
- [The Short Version](#the-short-version)
- [What You Control](#what-you-control)
- [What Tinker Runs For You](#what-tinker-runs-for-you)
- [How The API Feels](#how-the-api-feels)
- [Why LoRA Is Central](#why-lora-is-central)
- [What Kinds Of Training It Supports](#what-kinds-of-training-it-supports)
- [Sampling, Evaluation, And Checkpoints](#sampling-evaluation-and-checkpoints)
- [The Pricing Mental Model](#the-pricing-mental-model)
- [What Tinker Is Not](#what-tinker-is-not)
- [Why This Matters](#why-this-matters)
- [Quick Check](#quick-check)
- [One-Minute Summary](#one-minute-summary)

## Start Here

Tinker is easiest to understand if you contrast it with a normal AI API.

A normal chat API says:

> Send us a prompt, and we will send you model outputs.

Tinker says something different:

> Write the training algorithm you want to run, and we will provide the distributed model-training infrastructure underneath it.

That makes Tinker a post-training API. It is for changing how a model behaves after pretraining, usually by fine-tuning adapters on top of large open-weight models.

So if a normal model API is like renting a trained employee for a task, Tinker is more like renting a training facility where you can run your own coaching plan.

## The Problem Tinker Is Solving

Modern post-training is powerful but operationally painful.

Suppose you want to try a new reinforcement-learning recipe for a large language model. You may need to:

- host a large model across many GPUs,
- run forward and backward passes without memory problems,
- coordinate distributed workers,
- store checkpoints,
- sample from checkpoints during training,
- recover from failures,
- track experiments,
- keep the training job alive even if your local notebook disconnects.

That infrastructure work is real engineering. It can easily become the bottleneck, especially for researchers whose main idea is about the training algorithm, reward function, dataset, or evaluation loop.

Tinker tries to move that burden into a managed service. The researcher keeps control of the training recipe. Thinking Machines Lab handles the compute substrate.

## The Short Version

Tinker is a Python API for custom post-training of supported open-weight models.

You write code that says, in effect:

1. take this batch of data,
2. run a forward/backward pass,
3. apply an optimization step,
4. save or sample from the resulting checkpoint,
5. repeat with whatever algorithmic logic your experiment needs.

Tinker runs the remote workers that make those steps possible on large models.

The core point is not "easy fine-tuning" in the usual dashboard sense. The core point is programmable fine-tuning: you can implement supervised fine-tuning, DPO, reinforcement learning, distillation, or a custom research method while avoiding the hardest distributed-systems work.

## What You Control

Tinker is built around a useful separation of responsibilities.

You control the parts that determine the scientific content of the experiment:

- the data,
- the batching strategy,
- the loss or reward,
- the training loop,
- the order of optimization steps,
- when to checkpoint,
- when to sample,
- how to evaluate the result.

That control matters because post-training research is often about small details. Two experiments can use the same base model and dataset but differ in the reward shaping, optimizer schedule, preference objective, rejection sampling loop, or evaluation harness. A high-level fine-tuning product can hide too much of that.

Tinker exposes lower-level training primitives so the user can shape the method directly.

## What Tinker Runs For You

Tinker handles the parts that are necessary but usually not the research idea:

- distributed training workers,
- model execution for large supported open-weight models,
- LoRA checkpoint management,
- sampling workers,
- long-running asynchronous jobs,
- infrastructure that keeps a training run going even if local code disconnects.

That asynchronous design is more important than it may sound. A serious training run might last longer than your laptop session, notebook kernel, or local process. Tinker's job model lets the remote run continue while your local code acts more like the controller.

## How The API Feels

The official materials describe a Python SDK with primitives such as `forward_backward` and `optim_step`.

Those names are revealing.

`forward_backward` means: run the model forward on the batch, compute the loss, and backpropagate gradients.

`optim_step` means: use those gradients to update the trainable parameters.

That is close to how training is described in machine-learning code, except the expensive work is happening on managed remote infrastructure. The user is not merely calling "fine_tune(dataset)" and accepting a fixed recipe. The user is writing the loop.

The mental model looks like this:

```text
your Python code
    chooses data
    defines losses or rewards
    calls training primitives
    requests samples and checkpoints

Tinker service
    hosts supported base models
    runs distributed workers
    stores adapter checkpoints
    keeps jobs alive
    provides sampling/inference workers
```

This is why Tinker is especially relevant to researchers. It preserves algorithmic control while removing infrastructure setup.

## Why LoRA Is Central

Tinker trains LoRA adapters.

LoRA stands for low-rank adaptation. The basic idea is that instead of updating all the weights of a huge model, you insert smaller trainable matrices into parts of the model. During fine-tuning, those smaller adapter parameters change while the base model mostly stays fixed.

This has several practical advantages:

- it is cheaper than full fine-tuning,
- checkpoints are smaller,
- many experiments can share the same base model,
- trained adapters can be swapped, stored, and sampled from more easily,
- researchers can run many post-training variants without copying an entire model each time.

This fits Tinker's goal. If the platform wants to support many training tasks on large models, LoRA makes that much more tractable than full-weight training.

At launch, the materials described support for models such as `Llama-3.1-8B`, `Llama-3.1-70B`, and `Qwen-235B-A22B`. The general-availability update added more Qwen3 models and vision-capable Qwen3-VL models. The exact supported list can change, so the official docs are the source of truth for current availability.

## What Kinds Of Training It Supports

Tinker is aimed at post-training workflows, not pretraining from scratch.

The official tutorials and guides include examples around:

- supervised fine-tuning,
- DPO, or direct preference optimization,
- reinforcement learning,
- distillation,
- text-to-SQL reinforcement learning with execution rewards,
- multimodal fine-tuning,
- automatic speech recognition fine-tuning,
- sampling from LoRA checkpoints.

The common pattern is that you start with a capable base model and then use post-training to push it toward a behavior you care about.

For example, a supervised fine-tuning run might teach a model to imitate high-quality examples. A DPO run might push the model toward preferred answers over rejected answers. An RL run might train against a reward signal, such as whether generated SQL actually executes correctly.

Tinker matters because these workflows are not all the same. A generic fine-tuning endpoint may support only a fixed objective. Tinker is trying to expose enough of the training loop that the user can implement different objectives.

## Sampling, Evaluation, And Checkpoints

Training is only half the workflow. You also need to inspect what the model has learned.

Tinker supports sampling from base and trained models. The general-availability update added OpenAI-compatible sampling, which means developers can interact with base models and trained adapters through a familiar API shape.

This matters because post-training is usually iterative:

1. train a little,
2. sample outputs,
3. evaluate the behavior,
4. adjust data or loss,
5. train again.

Good post-training research depends on that loop. If sampling and checkpointing are awkward, researchers will run fewer checks, catch fewer failures, and over-trust aggregate metrics.

Tinker is useful because it treats training, checkpointing, and sampling as connected parts of one workflow.

## The Pricing Mental Model

Tinker's pricing is compute-based. Training and sampling use workers, and those workers cost money.

The important idea is that cost is tied to the actual training and inference work being performed. Larger base models cost more to train. Longer sequences cost more. Higher LoRA ranks can cost more. Sampling is a separate usage category.

That means Tinker is not priced like a simple note-taking app where the main question is monthly seats. It is closer to cloud compute: the bill reflects how much model work you ask the system to do.

For a learner, the takeaway is simple: Tinker lowers infrastructure friction, but it does not make large-model experimentation free. You still need to think carefully about experiment design, batch sizes, sequence lengths, model choice, and evaluation budget.

## What Tinker Is Not

Tinker is not a replacement for research judgment.

It will not automatically choose the right dataset, detect every reward hack, design a clean evaluation, or prove that a trained model is safe. A bad objective can still produce a bad model. A weak evaluation can still make an experiment look better than it is.

Tinker is also not the same thing as full control over arbitrary model training. It is a managed API with supported models, supported training abstractions, and a LoRA-centered design.

And it is not just another chatbot wrapper. Its main value is not that you can ask a model questions. Its main value is that you can run custom post-training loops without personally operating the distributed training stack.

## Why This Matters

Post-training is where a lot of current AI capability gets shaped.

Pretraining gives a model broad knowledge and general abilities. Post-training turns that raw capability into something more useful, steerable, reliable, or specialized. Instruction following, preference tuning, tool use, domain behavior, and many agentic skills are heavily affected by post-training.

That makes post-training infrastructure strategically important. If researchers can test new training algorithms faster, they can explore more ideas. If labs can run many LoRA experiments on large models without building their own cluster stack, the pace of iteration increases.

For alignment and safety work, the same point applies. Many safety-relevant questions are questions about training recipes, incentives, feedback loops, evaluations, and failure modes. A platform that makes those experiments easier could be useful, provided researchers remain careful about measurement and misuse.

The best way to summarize Tinker is:

> It is an API for controlling the learning process, not just consuming the learned model.

## Quick Check

1. What is the difference between a normal chat-completion API and Tinker?
2. Why does Tinker use LoRA adapters instead of full fine-tuning by default?
3. What parts of the training workflow does the user control?
4. What infrastructure does Tinker handle?
5. Why is sampling from checkpoints important during post-training?
6. Why does Tinker still require careful evaluation and research judgment?

## One-Minute Summary

Thinking Machines Lab's Tinker API lets researchers and developers run custom post-training loops on supported open-weight models. The user controls the data, losses, rewards, training logic, checkpoints, and evaluation loop. Tinker handles the distributed training infrastructure, asynchronous jobs, LoRA checkpointing, and sampling workers.

The key idea is programmable post-training. Tinker is useful when you want to experiment with how a model learns, not merely send prompts to a finished model.
