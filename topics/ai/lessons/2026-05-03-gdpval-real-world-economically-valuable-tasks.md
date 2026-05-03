# GDPval: Evaluating AI on Real-World Economically Valuable Tasks

Source note: Tejal Patwardhan et al., "GDPval: Evaluating AI Model Performance on Real-World Economically Valuable Tasks." arXiv:2510.04374v1, submitted October 5, 2025. Source page: [arxiv.org/abs/2510.04374](https://arxiv.org/abs/2510.04374). Processed source: [materials/processed/ai/gdpval-evaluating-ai-model-performance-on-real-world-economically-valuable-tasks.md](../../../materials/processed/ai/gdpval-evaluating-ai-model-performance-on-real-world-economically-valuable-tasks.md).

Original sources: [arXiv abstract](https://arxiv.org/abs/2510.04374), [arXiv PDF](https://arxiv.org/pdf/2510.04374), [GDPval grader](https://evals.openai.com).

## Table of Contents

1. [Start Here](#start-here)
2. [The Core Question](#the-core-question)
3. [Medium-Length Version](#medium-length-version)
4. [Full-Length Version](#full-length-version)
5. [What GDPval Measures](#what-gdpval-measures)
6. [How The Benchmark Is Built](#how-the-benchmark-is-built)
7. [How The Models Are Judged](#how-the-models-are-judged)
8. [Main Results](#main-results)
9. [Speed And Cost](#speed-and-cost)
10. [Failure Modes](#failure-modes)
11. [Why Reasoning And Scaffolding Help](#why-reasoning-and-scaffolding-help)
12. [Limitations](#limitations)
13. [How To Read This Paper Carefully](#how-to-read-this-paper-carefully)
14. [Quick Check](#quick-check)
15. [One-Minute Summary](#one-minute-summary)

## Start Here

GDPval is a benchmark for asking a practical question:

Can AI systems do professional work that an expert would actually accept?

That sounds simple, but it is different from many AI benchmarks. A lot of benchmarks look like exams: a model answers a question, solves a puzzle, writes code for a test suite, or chooses from multiple-choice options. Those are useful, but they miss a huge part of work: messy reference files, formatting expectations, judgment calls, deliverable quality, and the economics of review.

GDPval tries to evaluate work products. It asks models to complete tasks drawn from real professional work, then has experts compare the model deliverable to a human expert deliverable.

## The Core Question

The paper is asking:

If a professional gave an AI model the same request and files they would give a human expert, would the AI's deliverable be good enough?

This is a more economic version of model evaluation. The authors are not only asking whether models are smart. They are asking whether models are close to producing outputs that could matter in the labor market.

The key idea is that capability benchmarks can be leading indicators. Actual labor-market effects show up slowly because companies need to change tools, workflows, regulations, trust practices, and culture. But a benchmark can measure whether the underlying capability is already approaching useful work.

## Medium-Length Version

GDPval is an OpenAI benchmark for real-world economically valuable tasks. It covers 44 occupations across 9 major U.S. GDP sectors. The full set has 1,320 tasks, and the open gold subset has 220 tasks.

The tasks are based on work from experienced industry professionals, not invented toy problems. The average expert had 14 years of experience. Each task includes a request, often reference files, and a target deliverable. These deliverables can involve text, spreadsheets, slide decks, PDFs, images, audio, video, CAD-like files, and other workplace artifacts.

The benchmark is evaluated mainly through blind expert pairwise comparison. A professional grader sees the request, reference files, and multiple unlabeled deliverables. The grader decides which output is better. That matters because many professional outputs do not have a single exact answer. A good memo, spreadsheet, presentation, legal analysis, design document, or customer-support plan can be judged by correctness, completeness, structure, format, aesthetics, and relevance.

The headline result is that frontier models are getting close to expert deliverable quality on the gold subset. Claude Opus 4.1 was the best overall model in the paper's comparison: 47.6 percent of its deliverables were judged better than, or as good as, the human expert deliverable. GPT-5 had a different strength profile: it was especially strong on accuracy, calculations, and instruction following, while Claude was stronger on aesthetics and file-heavy deliverables like PDFs, spreadsheets, and slide decks.

The paper also analyzes economics. A naive comparison makes models look enormously faster and cheaper. But once expert review time and fallback work are included, the gains are much smaller. For GPT-5, the paper reports a naive 90x speed improvement and 474x cost improvement, but under a "try once, then fix it if needed" workflow, the improvements shrink to 1.12x speed and 1.18x cost. Under repeated tries, GPT-5 reaches 1.39x speed and 1.63x cost in the authors' model.

This is an important correction. The cost of AI work is not just generation cost. It is generation plus review plus correction plus the risk of accepting a bad output.

The paper also finds that models improve with more reasoning effort, more task context, better prompting, and scaffolding. A GPT-5 prompt that encouraged careful checking, rendering deliverables as images, avoiding odd characters, and using multimodal inspection improved results. This suggests that real-world AI capability depends on the model and the workflow around it.

GDPval is still limited. It focuses on self-contained computer-based knowledge work. It excludes physical labor, many interactive workflows, proprietary systems, personally identifiable information, and tasks requiring extensive tacit organizational context. The paper also shows that when prompts are under-contextualized, GPT-5 performs worse.

So the main takeaway is balanced: GDPval is strong evidence that frontier models are approaching useful professional deliverable quality in some digital work settings, but it is not proof that models can replace whole jobs or handle the full messiness of real organizations.

## Full-Length Version

### Why This Benchmark Exists

AI capability is hard to connect to economic impact.

If we wait for macroeconomic statistics, we are looking at a lagging signal. Productivity, wages, adoption rates, and GDP changes are affected by many things besides model ability. They also require institutions to change slowly.

GDPval takes a different route. It says: instead of waiting for the whole economy to reorganize, evaluate whether models can already do valuable tasks.

This is why the benchmark is organized around sectors, occupations, and deliverables rather than abstract skills.

### What GDPval Measures

GDPval measures whether a model can create a professional deliverable that an expert grader prefers to, or ties with, a human expert deliverable.

The unit of evaluation is not a question. It is a work task.

A GDPval task can include:

- a work request
- one or more reference files
- a desired file or output format
- domain-specific constraints
- subjective quality requirements
- a human expert deliverable
- model-generated deliverables

The paper emphasizes that real professional quality is not just correctness. It can include structure, style, formatting, aesthetics, relevance, and whether the output actually satisfies the request.

### How The Benchmark Is Built

The authors start by choosing sectors that each contribute more than 5 percent to U.S. GDP. Then they choose high-compensation occupations that are mostly digital within those sectors.

The resulting initial benchmark covers:

- 9 sectors
- 44 occupations
- 1,320 tasks in the full set
- 220 tasks in the gold subset
- about $3 trillion in annual compensation across the covered occupations

To classify occupations as digital, the authors use O*NET task data. They classify tasks as digital or non-digital, weight them by relevance, importance, and frequency, and treat an occupation as digital if at least 60 percent of its weighted task content is digital.

This matters because GDPval is trying to be economically grounded. It is not just a grab bag of hard prompts.

### Expert Task Creation

The tasks are created by experienced professionals. Experts had to have at least four years of relevant experience and strong professional credentials. The average expert had 14 years of experience.

Each expert creates realistic tasks based on their professional work. These tasks are then reviewed for:

- realism
- difficulty
- representativeness
- quality
- expected completion time
- alignment with occupational tasks

Every task in the full set went through a quality-control pipeline with automated screening and human expert review. Each task received an average of five human reviews.

### What Makes The Tasks More Realistic

GDPval is more realistic than many benchmarks because it includes file-heavy and multimodal deliverables.

The tasks may involve:

- spreadsheets
- documents
- slide decks
- PDFs
- images
- audio
- video
- social media posts
- diagrams
- customer-support conversations
- specialized files such as CAD-like artifacts

In the gold subset, 67.7 percent of tasks require at least one reference file. That is important because a large amount of professional work is not "answer from memory." It is "read these messy inputs, extract what matters, and produce the right artifact."

### How The Models Are Judged

The main grading method is blind expert pairwise comparison.

An expert grader sees the task and multiple unlabeled deliverables. They rank the deliverables. This gives the paper a way to compare model outputs with human expert outputs without pretending that every task has one exact answer.

This is especially useful for subjective work. A presentation, memo, spreadsheet, or strategy document can be better or worse along several dimensions.

The paper also releases an experimental automated grader for the open gold subset. It is not the primary evaluation method, but it makes the benchmark more usable. The automated grader gets about 65.7 percent agreement with human expert graders, while human inter-rater agreement is about 70.8 percent.

That means the grader is useful as a proxy, but still not a replacement for expert judgment.

### Main Results

The paper evaluates GPT-4o, o4-mini, o3, GPT-5, Claude Opus 4.1, Gemini 2.5 Pro, and Grok 4.

The headline result is that frontier models are approaching expert quality on the gold subset.

Claude Opus 4.1 was the top overall model. Its deliverables were judged better than, or as good as, the human expert deliverable 47.6 percent of the time.

That does not mean Claude beat humans on 47.6 percent of all economically valuable work. It means that on this particular gold subset, under this evaluation design, it reached wins or ties against the expert deliverable at that rate.

The model comparison is also not one-dimensional:

- Claude Opus 4.1 was strongest overall, especially on aesthetics and file deliverable quality.
- GPT-5 was especially strong on accuracy, instruction following, and calculations.
- GPT-5 did better on pure text tasks.
- Claude did better on file-heavy tasks such as PDFs, spreadsheets, and slide decks.

This distinction is useful. It suggests that a model's "work ability" depends on the format and evaluation criterion, not just abstract intelligence.

### Speed And Cost

The economics are one of the most useful parts of the paper.

For the gold subset:

- average expert completion time was 404 minutes
- average expert completion cost was $361
- average expert review time was 109 minutes
- average expert review cost was $86

If we compare only model generation time and cost to human completion time and cost, models look dramatically faster and cheaper.

But that misses the cost of quality control. In real workflows, a human may need to inspect the model output. If the output is not good enough, the human may need to fix it or redo the task.

The paper models this with workflows like:

1. Try the model once, review it, and if it fails, the human does the task.
2. Try the model several times, review each attempt, and if all fail, the human does the task.

For GPT-5, the naive comparison is 90x faster and 474x cheaper. But after review and fallback are included, the "try once" workflow becomes only 1.12x faster and 1.18x cheaper. With repeated attempts, the estimate becomes 1.39x faster and 1.63x cheaper.

This is the lesson to remember: AI generation is cheap, but trustworthy professional use includes review, correction, and risk.

### Failure Modes

The paper analyzes why models lose to human experts.

Common failures include:

- not fully following instructions
- ignoring reference data
- using the wrong output format
- promising a deliverable but failing to provide it
- hallucinating data
- making calculation errors
- producing poor formatting
- creating visually broken artifacts

Claude, Grok, and Gemini most often lost because of instruction-following failures. GPT-5 high lost more often because of formatting issues, while having fewer instruction-following problems.

This is another important real-world lesson. A model can be smart enough to reason through a task but still fail because it creates the wrong file, formats it badly, ignores a required attachment, or misses a professional convention.

### Why Reasoning And Scaffolding Help

The paper finds that model performance improves with more reasoning effort. It also improves with better scaffolding.

Scaffolding means the surrounding workflow that helps the model do better work. In this paper, the authors use a prompt that asks GPT-5 to:

- check deliverables for correctness
- render files as images to inspect layouts
- avoid nonstandard characters
- avoid excessive verbosity
- make diagrams and plots legible
- use appropriate file-generation practices

This prompt helped a lot. It eliminated black-square artifacts in generated PDFs, reduced severe PowerPoint formatting errors, increased multimodal self-inspection, and improved human preference win rates by 5 percentage points.

This is a major point for agent design: the model is not the whole system. The harness, tools, prompts, verification loops, and sampling strategy can change performance.

### Why Context Matters

GDPval tasks are mostly well-specified. The paper reports that about 89 percent of tasks are rated well-specified.

But real work is often under-specified. You may need to figure out where the data is, what the manager really wants, which file matters, or what hidden convention applies.

The paper includes an under-contextualized GDPval experiment. The authors shorten prompts and remove helpful context. GPT-5 performs worse because it struggles to infer the missing context.

This matters because real deployment is rarely just "paste a perfect task prompt." Often the system must ask clarifying questions, search for context, remember organizational norms, and decide what work needs doing.

### Limitations

GDPval is more realistic than many benchmarks, but it is still not the whole world of work.

It currently focuses on self-contained digital knowledge work. It does not cover manual labor, physical tasks, deeply interactive workflows, many proprietary software environments, sensitive personal information, or tasks that require long-term relationships and tacit organizational knowledge.

It is also expensive to build and run. Expert-created tasks and expert grading are costly. The automated grader helps, but it is imperfect.

The pairwise grading is also not perfectly blind. Model style can leak identity. For example, the paper notes that some model outputs had recognizable stylistic patterns.

### How To Read This Paper Carefully

The paper supports a strong but bounded claim:

Frontier models are getting close to expert deliverable quality on some self-contained digital professional tasks.

It does not prove:

- that AI can replace whole occupations
- that all knowledge work is automatable
- that models can handle long-horizon organizational context
- that model outputs can be trusted without review
- that automated grading is fully reliable

The best way to read GDPval is as an economic capability benchmark. It is a better proxy for workplace usefulness than many puzzle benchmarks, but still an abstraction from real work.

## What GDPval Measures

GDPval measures deliverable quality. A deliverable is the actual work product someone would hand over: a spreadsheet, deck, memo, report, analysis, file, or other artifact.

That is why exact-match grading is not enough. For many professional tasks, the question is not just "is this answer right?" It is "would this output be acceptable professional work?"

## How The Benchmark Is Built

The benchmark is built from the economy downward:

1. Pick major GDP sectors.
2. Pick high-compensation, mostly digital occupations.
3. Recruit experienced professionals.
4. Have them create realistic tasks and deliverables.
5. Review and revise tasks through quality control.
6. Compare model outputs to expert outputs.

This design makes GDPval more representative than a benchmark made only from what researchers happen to think is interesting.

## How The Models Are Judged

The key metric is pairwise expert preference. A model gets credit when its deliverable is judged better than, or tied with, the human expert deliverable.

This setup is useful because professional work can be subjective. But it also means the benchmark depends on grader judgment, grader consistency, and the exact task distribution.

## Main Results

The most memorable result is Claude Opus 4.1 reaching 47.6 percent wins or ties against human expert deliverables on the gold subset.

But the more nuanced result is that models have different work profiles:

- GPT-5 looks stronger on accuracy and text.
- Claude looks stronger on aesthetics and formatted files.
- Many models still fail from instruction-following and deliverable-format issues.
- Better reasoning effort and scaffolding improve results.

## Speed And Cost

The paper's cost analysis is a useful antidote to naive AI productivity claims.

If a model takes minutes and an expert takes hours, the model looks much faster. But professional use requires review. If the expert spends a long time checking the output, and then sometimes has to redo the work, the actual productivity gain can be small.

So the economics depend on:

- model win rate
- review time
- correction time
- model cost
- human cost
- risk of bad outputs
- whether repeated sampling helps

## Failure Modes

The failures are practical rather than mysterious. The models often lose because they do not do the exact requested professional task.

Examples:

- wrong format
- missing file
- ignored reference document
- bad layout
- hallucinated number
- incomplete instruction following

These are exactly the kinds of failures that matter in workplace automation.

## Why Reasoning And Scaffolding Help

The paper shows that models are not isolated brains. They are parts of workflows.

A better workflow can ask the model to inspect its own output, render files before submitting them, check calculations, avoid formatting traps, and sample multiple attempts. This can unlock capability that is not visible from a plain prompt.

That connects GDPval to agent design: strong agents need not only a strong model, but also good tools, verification loops, and product constraints.

## Limitations

GDPval should not be read as "AI can do all work." It is a benchmark of selected digital tasks.

The big missing pieces are:

- physical work
- interactive work
- tacit organizational knowledge
- proprietary systems
- sensitive data workflows
- long-term accountability
- ambiguous task discovery

Those missing pieces are exactly where real-world deployment often gets hard.

## How To Read This Paper Carefully

Use GDPval as a lens for workplace AI, not as a full labor-market forecast.

The paper is most useful for asking:

- Which professional deliverables are models close to handling?
- Which formats still break them?
- How much human review is needed?
- What parts of the workflow matter besides the model?
- Where does context ambiguity still hurt?

## Quick Check

1. Why is GDPval organized around sectors and occupations?
2. What is a deliverable, and why is it harder to grade than a multiple-choice answer?
3. Why does the paper use pairwise expert comparison?
4. What does the 47.6 percent Claude Opus 4.1 result mean, and what does it not mean?
5. Why do review and fallback costs shrink the economic benefit?
6. What kinds of failures caused models to lose?
7. Why does the under-contextualized experiment matter?

## One-Minute Summary

GDPval is a benchmark for evaluating whether AI models can produce economically valuable professional deliverables. It covers 44 occupations across 9 major GDP sectors, with a 1,320-task full set and a 220-task open gold subset. Expert graders compare model outputs against human expert outputs. The strongest models are approaching expert quality on some tasks, with Claude Opus 4.1 reaching 47.6 percent wins or ties on the gold subset. But review costs, failure modes, missing context, and limited task coverage make the result more nuanced: GDPval shows real progress toward useful digital knowledge work, not full job automation.
