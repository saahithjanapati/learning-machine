# GDPval: Evaluating AI Model Performance on Real-World Economically Valuable Tasks

Source: https://arxiv.org/abs/2510.04374
PDF: https://arxiv.org/pdf/2510.04374
Authors: Tejal Patwardhan, Rachel Dias, Elizabeth Proehl, Grace Kim, Michele Wang, Olivia Watkins, Simon Posada Fishman, Marwan Aljubeh, Phoebe Thacker, Laurance Fauconnet, Natalie S. Kim, Patrick Chao, Samuel Miserendino, Gildas Chabot, David Li, Michael Sharman, Alexandra Barr, Amelia Glaese, and Jerry Tworek
Institution: OpenAI
Submitted: 2025-10-05
Ingested: 2026-05-03

## What This Paper Is About

GDPval is a benchmark for evaluating whether AI models can produce useful professional work products, not just answer exam-style questions. The benchmark is built around economically valuable tasks: requests and deliverables drawn from the representative work of experienced professionals.

The core question is:

Can frontier AI models produce deliverables that professional experts judge to be as good as, or better than, work produced by human experts?

The paper argues that this kind of benchmark is a leading indicator for economic impact. Adoption statistics and GDP effects are lagging indicators: they show up after organizations have already changed workflows. A capability benchmark can ask earlier whether the models are getting close to doing valuable work.

## Benchmark Construction

GDPval starts from the economy rather than from a model capability taxonomy.

The authors select sectors that contribute more than 5 percent of U.S. GDP, using Q2 2024 value-added data. They then pick high-compensation, predominantly digital occupations within those sectors. The result is an initial full set covering:

- 9 sectors
- 44 occupations
- 1,320 full-set tasks
- 30 tasks per occupation in the full set
- 220 tasks in the open-sourced gold subset
- 5 tasks per occupation in the gold subset

The occupations collectively account for about $3 trillion in annual compensation.

To decide whether an occupation is predominantly digital, the authors use O*NET task statements and ask GPT-4o to classify tasks as digital or non-digital. An occupation is treated as digital when at least 60 percent of its weighted task content is digital. The weighting uses O*NET ratings for task relevance, importance, and frequency.

## Expert Task Creation

The tasks are not synthetic puzzles. They are based on work products from industry professionals.

Experts had to have at least four years of relevant professional experience, strong resumes, and evidence of professional recognition, promotion, or management responsibility. The average expert had 14 years of experience. Experts also passed interviews, background checks, training, and quizzes.

Each task contains:

- a request
- often one or more reference files
- a target deliverable or work product
- metadata about difficulty, representativeness, expected time, and quality

The tasks include real work formats such as spreadsheets, slide decks, documents, images, audio, video, CAD-like files, customer conversations, and social media artifacts. In the gold subset, 67.7 percent of tasks require at least one reference file.

## Quality Control

All 1,320 full-set tasks went through an iterative review pipeline. The pipeline included automated model-based screening and human expert review. Each task received an average of five human reviews, with at least three reviews.

Experts checked whether tasks were realistic, representative, sufficiently difficult, and properly specified. In the gold subset:

- mean overall quality was 4.47 out of 5
- mean difficulty was 3.32 out of 5
- mean representativeness was 4.50 out of 5
- average task completion time was 9.49 hours
- median completion time was 5 hours
- mean estimated dollar value was $398.46

In the full set:

- mean overall quality was 4.55 out of 5
- mean difficulty was 3.20 out of 5
- mean representativeness was 4.43 out of 5
- average task completion time was 8.63 hours
- median completion time was 4 hours
- mean estimated dollar value was $391.44

## Evaluation Method

The headline evaluation uses blinded pairwise comparisons by professional experts.

An expert grader sees:

- the task request
- the reference files
- two or more unlabeled deliverables

The grader then ranks the deliverables. This lets the benchmark compare model outputs against expert human outputs without needing a single rigid answer key.

The paper also releases an experimental automated grader for the open gold subset. The authors still recommend human expert comparison as the primary grading method, but the automated grader makes the benchmark easier to use.

The automated grader achieved about 65.7 percent agreement with human expert graders. Human inter-rater agreement was about 70.8 percent, so the automated grader is within roughly 5 percentage points of human-human agreement on this measurement.

## Main Results

The paper evaluates GPT-4o, o4-mini, o3, GPT-5, Claude Opus 4.1, Gemini 2.5 Pro, and Grok 4.

The headline result is that frontier models are approaching expert deliverable quality on the GDPval gold subset. Claude Opus 4.1 was the best performing model overall. On the gold subset, 47.6 percent of Claude Opus 4.1 deliverables were judged better than, or as good as, the human expert deliverable.

The paper also reports a qualitative split between model strengths:

- Claude Opus 4.1 did especially well on aesthetics, layout, and file deliverable quality.
- GPT-5 did especially well on accuracy, careful instruction following, and calculations.
- GPT-5 performed better on pure text tasks.
- Claude performed better on file-heavy formats such as PDF, spreadsheet, and presentation tasks.

The authors also find that OpenAI frontier model performance improved roughly linearly over time on the GDPval gold subset.

## Speed and Cost Analysis

The paper asks whether model assistance could save time and money when paired with expert oversight.

For the 220-task gold subset:

- average expert completion time was 404 minutes
- average expert completion cost was $361
- average expert review time was 109 minutes
- average expert review cost was $86

The authors analyze several workflows:

1. Naive use: compare human completion time/cost to model completion time/cost without accounting for quality.
2. Try once, then fix it: sample from the model, have an expert review the result, and have the expert do the task if the model output is not acceptable.
3. Try n times, then fix it: sample repeatedly, review each time, and only fall back to full human work if none of the outputs pass the quality bar.

For OpenAI models, the adjusted time and cost improvements are much smaller than naive comparisons, because review and fallback work matter. Table 2 reports:

| Model | Win rate | Naive speed | Try 1x speed | Try n speed | Naive cost | Try 1x cost | Try n cost |
|---|---:|---:|---:|---:|---:|---:|---:|
| GPT-4o | 12.5% | 327x | 0.87x | 0.46x | 5172x | 0.90x | 0.53x |
| o4-mini | 29.1% | 186x | 1.02x | 1.06x | 1265x | 1.06x | 1.22x |
| o3 | 35.2% | 161x | 1.08x | 1.28x | 480x | 1.13x | 1.47x |
| GPT-5 | 39.0% | 90x | 1.12x | 1.39x | 474x | 1.18x | 1.63x |

The main lesson is that review costs and quality failure rates dominate the economics. Very fast model generation does not automatically imply large workflow savings.

## Failure Modes

The authors use a clustering pipeline on expert justifications to understand why model outputs lost to humans.

Common failure patterns include:

- failing to follow instructions
- ignoring reference data
- using the wrong output format
- promising a deliverable but not actually providing it
- making calculation errors
- hallucinating data
- producing formatting or layout problems

Claude, Grok, and Gemini most often lost because of instruction-following problems. GPT-5 high lost more often because of formatting errors and had the fewest instruction-following issues.

For GPT-5 failures, expert reviewers most often labeled the failures as acceptable but subpar. Roughly 29 percent of ratings were bad or catastrophic, with about 3 percent marked catastrophic.

## Reasoning, Context, and Scaffolding

The paper finds that performance improves with:

- more reasoning effort
- more complete task context
- better prompts
- better scaffolding
- best-of-n sampling with a GPT-5 judge

The scaffolding result is practically important. A prompt that instructed GPT-5 to check deliverables carefully, render layouts as images, avoid nonstandard characters, and avoid excessive verbosity improved model outputs. It eliminated black-square PDF artifacts that previously affected more than half of generated PDFs, reduced egregious PowerPoint formatting errors from 86 percent to 64 percent, and increased use of multimodal self-inspection from 15 percent to 97 percent.

This suggests that benchmark performance is not only about the base model. Tooling, prompting, sampling, and verification loops can materially change real-world task quality.

## Open-Sourced Subset

The authors open-source the prompts and reference files for the 220-task gold subset and provide a public automated grading service at evals.openai.com.

The open subset is scrubbed to remove information that could identify the expert who wrote the task. The authors also note that the automated grader cannot grade every task reliably. In the open-source set, 12 of 220 tasks are marked ungradable because of automated-grader limitations.

## Limitations

GDPval is a strong move toward realistic evaluation, but it is still an initial cut.

Important limitations:

- The full set covers 44 occupations and 30 tasks per occupation, not the whole labor market.
- It focuses on self-contained computer-based knowledge work.
- It excludes manual labor and physical tasks.
- It excludes many tasks involving tacit knowledge, proprietary tools, personally identifiable information, or interpersonal communication.
- The tasks are mostly one-shot and precisely specified.
- Real work often requires discovering context, negotiating requirements, asking follow-up questions, and coordinating with people.
- Automated grading is still imperfect.
- Expert task construction and expert grading are expensive.
- Blindness is imperfect because model style may reveal the model source.

The under-contextualized GDPval experiment is especially important: when prompts were made shorter and less explicit, GPT-5 performed worse because it struggled to infer missing context.

## Why This Matters

GDPval shifts the question from "Can a model pass a hard test?" to "Can a model produce valuable work under realistic professional standards?"

That matters because many economically important tasks are not single-answer exams. They involve:

- messy inputs
- file manipulation
- subjective quality judgments
- formatting requirements
- domain conventions
- time and cost tradeoffs
- expert review

The paper's strongest contribution is not merely a leaderboard. It is the benchmark design: representative economic sampling, expert-created tasks, expert pairwise grading, and explicit cost/time analysis.

## Questions To Remember

1. Why is GDPval a leading indicator rather than a lagging economic indicator?
2. Why does GDPval use expert pairwise grading instead of ordinary exact-match scoring?
3. Why do review costs shrink the apparent economic gains from model use?
4. What kinds of tasks does GDPval still leave out?
5. Why does the under-contextualized experiment matter for real-world deployment?
