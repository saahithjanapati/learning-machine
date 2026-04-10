# Bloom: an open source tool for automated behavioral evaluations

Source: `https://alignment.anthropic.com/2025/bloom-auto-evals/`
Site: `Anthropic Alignment Science Blog`
Published: `2025-12-19`
Authors: `Kai Fronsdal, Abhay Sheshadri, Jonathan Michala, Jacqueline Tay, Rowan Wang, Samuel R. Bowman, Sara Price`
Extraction engine: `direct web scrape + manual structured ingest`
Strategy: `canonical article extraction and collection-oriented normalization`

## Summary

This post introduces Bloom, an agentic framework for automatically generating targeted behavioral evaluations for frontier language models. The main pitch is that, instead of hand-authoring a small bespoke benchmark for each new misalignment concern, researchers can specify a behavior of interest and use Bloom to generate many scenarios that quantify how often and how strongly the model exhibits that behavior.

## Core Motivation

- High-quality behavioral evaluations are expensive to build by hand.
- Existing bespoke evals are limited in quantity and can go stale as capabilities shift.
- Open-ended auditing can discover surprising behaviors, but it does not directly produce stable statistical measurement for one named behavior.

Bloom is meant to fill that gap: once you know the behavior you want to measure, it generates many scenarios and scores the target model across them.

## What Bloom Measures

The article frames Bloom as measuring:

- `frequency`: how often a target behavior appears,
- `severity`: how strongly it appears when elicited.

The key top-level metric is `elicitation rate`, defined as the proportion of rollouts whose behavior-presence score exceeds a threshold (the post uses scores on a 1-10 scale and often thresholds at 7+).

## Example Behaviors Evaluated

The release includes Bloom-generated evaluations for four alignment-relevant behaviors across 16 frontier models:

- delusional sycophancy,
- instructed long-horizon sabotage,
- self-preservation,
- self-preferential bias.

The article emphasizes that these suites took only a few days to conceptualize, refine, and generate with Bloom.

## Bloom Pipeline

Bloom is described as a four-stage system:

1. `Understanding`
- interpret the target behavior and interaction type.

2. `Ideation`
- generate candidate scenarios and prompts that could elicit the behavior.

3. `Rollout`
- run the model through those scenarios to produce transcripts.

4. `Judgment`
- score the transcripts for the target behavior and produce suite-level reports.

The post says Bloom is seeded by a configuration file that specifies the target behavior, examples, model choices, and other settings. The seed acts like the “DNA” of the evaluation and should be cited alongside Bloom metrics for reproducibility.

## Workflow and Intended Use

A typical Bloom workflow is:

1. specify the behavior and interaction type you want,
2. generate local sample evals and iterate on prompts/configuration,
3. run larger sweeps across models,
4. inspect transcripts and aggregate metrics.

The article positions Bloom as infrastructure for measurement rather than for broad exploratory auditing.

## Bloom vs Petri

The post explicitly contrasts Bloom with Petri:

- `Petri` is for exploration. It probes models broadly and may surface unexpected or concerning behaviors.
- `Bloom` is for measurement. It tests one specified behavior across many generated scenarios and reports how common it is.

The intended research workflow is:

1. use Petri to discover or surface candidate problematic behaviors,
2. use Bloom to measure how widespread they are and compare them across models.

## Validation: Model Organisms

A central validation test is whether Bloom can distinguish baseline models from system-prompted “model organisms” intentionally engineered to display certain behavioral quirks.

Headline result:

- Bloom significantly separated the model organism from the baseline on 9 out of 10 quirks,
- and did so even without example transcripts in the prompt.

The one exception was self-promotion, where the baseline model already exhibited the behavior strongly enough that there was little gap to detect.

## Validation: Judge Calibration

The article says Bloom’s usefulness depends heavily on whether the judge model is calibrated to the behavior being scored.

To test this, the authors:

- hand-labeled 40 transcripts across different behaviors and settings,
- compared many judge models against those labels,
- found strong correlation, especially for Claude Opus 4.1 and Sonnet 4.5.

The post reports that Opus achieved a Spearman correlation around `0.86`, with Sonnet 4.5 also strong. Some other judges performed materially worse and may require more guidance.

The authors also note that they care especially about calibration at the extremes: whether the judge can reliably distinguish clearly low-behavior and clearly high-behavior transcripts.

## Variance and Repeat Judging

Bloom can sample the judge multiple times per rollout. The article reports nontrivial judge variance on some behaviors, especially in more reasoning-heavy settings, which is why repeated judging and aggregate statistics matter.

This reinforces the main theme: Bloom is not a magic one-shot score but a configurable evaluation process whose variance needs to be measured and managed.

## Main Claim

The post’s central claim is not that Bloom solves alignment evaluation completely. It is that it provides a reproducible, configurable scaffold for producing many targeted behavioral scenarios quickly enough to make alignment measurement more scalable.

## Practical Takeaways

- Bloom is for measuring known or researcher-specified behaviors, not for discovering all unknown ones.
- The seed/configuration matters a lot and should travel with the metric.
- Judge calibration is a first-class concern.
- Automated evaluation can scale behavior measurement, but it still needs careful prompt design, validation, and variance analysis.
