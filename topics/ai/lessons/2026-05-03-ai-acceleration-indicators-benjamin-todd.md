# Are The Last 3 Months The Start Of An AI Acceleration?

Source note: Benjamin Todd, "Are the last 3 months the start of an AI acceleration?", published May 3, 2026 on Benjamin Todd's Substack. Source: [benjamintodd.substack.com/p/is-ai-accelerating](https://benjamintodd.substack.com/p/is-ai-accelerating). Processed source: [materials/processed/ai/are-the-last-3-months-the-start-of-an-ai-acceleration.md](../../../materials/processed/ai/are-the-last-3-months-the-start-of-an-ai-acceleration.md).

## Table of Contents

1. [Start Here](#start-here)
2. [The Core Question](#the-core-question)
3. [The Article In One Pass](#the-article-in-one-pass)
4. [What Counts As Acceleration?](#what-counts-as-acceleration)
5. [Signal 1: Benchmarks](#signal-1-benchmarks)
6. [Signal 2: Revenue](#signal-2-revenue)
7. [Signal 3: AI Uplift For AI Researchers](#signal-3-ai-uplift-for-ai-researchers)
8. [Signal 4: Compute Prices](#signal-4-compute-prices)
9. [How To Read The Argument Carefully](#how-to-read-the-argument-carefully)
10. [What To Watch Next](#what-to-watch-next)
11. [Quick Check](#quick-check)
12. [One-Minute Summary](#one-minute-summary)

## Start Here

This article is about a deceptively simple question:

**Is AI progress merely continuing quickly, or is it starting to speed up?**

That distinction matters. If AI progress is fast but roughly exponential, then each year might bring a fairly predictable multiplier in capability, revenue, and deployment. If progress is superexponential, then the pace itself is increasing. The same amount of calendar time starts buying more progress than before.

Benjamin Todd's answer is cautious. He thinks there are signs that an acceleration may be starting, especially around Anthropic and agentic coding. But he does not think the evidence is strong enough yet to call it. The last few months could be the beginning of an AI acceleration, or they could be Anthropic catching up, one unusually large training run, or noise in a small number of recent model releases.

The article is useful because it does not rely on one signal. It compares four different kinds of evidence:

- benchmark results,
- revenue growth,
- AI productivity uplift for AI researchers,
- compute prices.

Each signal tells a different story. Benchmarks ask whether capabilities are improving faster. Revenue asks whether users are paying more because the products are becoming more useful. Uplift asks whether AI is helping AI researchers improve AI faster. Compute prices ask whether the market is starting to value scarce inference and training capacity more highly.

## The Core Question

Todd is really asking whether we are seeing the start of an **algorithmic feedback loop**.

The simple version of the loop is:

1. AI systems become better at AI R&D.
2. AI researchers use those systems to make faster progress.
3. Faster progress produces better AI systems sooner.
4. Better systems further improve AI R&D.

If this loop becomes strong enough, capability progress can accelerate. In extreme versions, people call this an intelligence explosion.

The hard part is measurement. A single impressive model release does not prove acceleration. It could be:

- a normal on-trend step,
- a model family catching up to competitors,
- a larger training run,
- a benchmark fluke,
- a real jump in agentic ability,
- or the start of AI systems meaningfully helping create their successors.

Todd's article is basically a structured attempt to tell these possibilities apart.

## The Article In One Pass

Todd's main conclusion is:

**We might be seeing the start of an acceleration driven by Anthropic, but it is too early to tell.**

The evidence looks like this:

| Evidence Stream | What It Suggests | Why It Is Not Decisive |
| --- | --- | --- |
| Benchmarks | Mythos may be ahead of trend on agentic tasks | one data point, possible bigger training run, benchmark uncertainty |
| Revenue | frontier AI revenue is accelerating, especially because Anthropic is growing fast | Anthropic may slow once it stops taking market share |
| AI uplift | AI is making AI researchers more productive | likely not enough yet to explain a major acceleration |
| Compute prices | H100 prices recently rose instead of falling | could be a temporary demand spike, not a durable trend |

The article's tone is important. Todd is not saying, "The intelligence explosion is here." He is saying, "The indicators are becoming interesting enough that we should watch them closely over the next few months."

## What Counts As Acceleration?

To understand the article, separate three levels of progress.

### Fast Progress

Fast progress means AI improves quickly, but the rate is fairly stable. For example, a capability index might grow by about the same multiplicative factor each year.

This is already a big deal. If frontier models keep improving quickly for several more years, that can still produce extremely powerful systems.

### Acceleration

Acceleration means the rate itself increases. Maybe a model family used to make six months of progress in six months, but now makes six months of progress in two months.

This is the question Todd is asking about recent Anthropic releases.

### Feedback-Driven Acceleration

Feedback-driven acceleration is stronger. It means AI progress speeds up because AI systems themselves are helping with AI R&D. This is the route to a more explosive takeoff.

Todd is skeptical that the recent evidence proves this stronger version. AI tools are helping researchers, but he doubts the productivity gain is already big enough to explain the full apparent jump.

## Signal 1: Benchmarks

Benchmarks are the most direct capability signal. If a broad capability index bends upward, that is the cleanest evidence for acceleration.

Todd discusses Epoch's ECI, an index combining 37 benchmarks. Epoch already thinks a faster trend started in early 2024. The question is whether Mythos is above that post-2024 trend.

The answer depends on which benchmark aggregate you trust.

External estimates suggest Mythos may be roughly on trend for Epoch's ECI. Anthropic's own internal ECI-like index makes Mythos look more like six months of progress in about two months.

Todd's best guess is that the difference comes from benchmark composition:

- Epoch's ECI may be more influenced by high-end math progress.
- Anthropic's internal index may contain more agentic and coding tasks.

That distinction matters because AI R&D automation probably depends more on agentic coding than on many static benchmark skills. A model that can plan, debug, use tools, and complete long software tasks is closer to helping automate research workflows.

### METR Time Horizon

Todd highlights METR's time horizon benchmark as especially important. It measures how long a task an AI agent can complete with a given success rate.

This benchmark is useful because many real research tasks are long-horizon tasks:

- read the codebase,
- form a plan,
- write code,
- debug failures,
- recover from wrong turns,
- keep track of context,
- finish without a human constantly steering.

Todd's read is that Claude Opus 4.6 is slightly above trend for 50% success, but within uncertainty. At 80% success, it looks on trend or slightly below. Mythos has not yet settled the question. If Mythos lands around 6 hours at 80% reliability, that would look like about six months of progress in two months on a very relevant benchmark.

The lesson: the benchmark signal is suggestive, but not settled.

## Signal 2: Revenue

Todd calls revenue his favorite benchmark because it is harder to game than leaderboard scores.

The intuition is simple: if customers pay more for AI products, those products are probably becoming more useful. Revenue is not perfect, because pricing, competition, sales, bundling, and enterprise contracts all matter. But it is a useful market signal.

Todd's numbers are:

- frontier AI revenue excluding Gemini grew about 3.2x in 2024,
- about 4.7x in 2025,
- about 8x annualized so far in 2026,
- OpenAI has been growing about 3-4x per year,
- Anthropic has been growing about 10x per year.

The acceleration story is that Anthropic is becoming a larger share of the frontier AI market. If Anthropic keeps growing near 10x per year, then aggregate frontier revenue growth could accelerate.

But there is a catch. Anthropic may be growing fast partly because it is catching up and taking market share. Once it becomes a much larger share of the total, its growth rate may slow toward the field's broader growth rate. Todd thinks this is one of the key things to watch over the next three to six months.

## Signal 3: AI Uplift For AI Researchers

This is the signal most directly connected to an intelligence explosion story.

If AI makes AI researchers much more productive, then model progress can speed up even without a one-off increase in compute. But the size of the uplift matters.

Todd discusses Anthropic-reported researcher productivity estimates:

- Opus 4.6 made researchers about 2x more productive at the median and 2.5x at the mean.
- Mythos had a reported geometric mean productivity uplift around 4x.
- In an internal survey of 18 researchers, one thought Mythos Preview was already a drop-in replacement for an entry-level research scientist or engineer; four thought it had a 50% chance after three months of scaffolding iteration.

Those are striking numbers. Todd's skepticism is about whether they are accurate and whether they translate into total research progress.

First, self-reported AI productivity gains can be inflated. Developers often feel faster with AI even when measured productivity gains are smaller. Second, AI progress depends on more than labor. It also depends on compute, experiments, data, infrastructure, organizational decisions, and research taste.

Todd cites outside estimates closer to 1.6x true labor productivity uplift. If labor is only one input to AI progress, that might produce about a 1.2x overall speedup. That is noticeable, but not enough to explain a dramatic acceleration.

Even if Anthropic's 4x researcher productivity estimate were accurate, Todd says Anthropic's own estimate would imply less than a 2x increase in the overall rate of AI progress. That still matters, but it is not enough by itself to prove a runaway feedback loop.

## Signal 4: Compute Prices

Compute prices are a subtler signal.

Historically, compute gets cheaper over time because chips become more efficient. Todd says prices have historically fallen around 30% per year.

But if AI systems become extremely valuable workers, compute becomes the scarce input needed to run those workers. In that world, compute prices could rise toward the economic value of the AI labor they enable.

Todd's rough comparison is:

- renting an H100 is currently around $2 per hour,
- an H100 can run roughly ten GPT-5-level workers,
- typical white-collar labor might be around $50 per hour.

If AI workers become close substitutes for human workers and compute is scarce, the value of marginal compute could rise substantially.

Todd notes that H100 rental prices rose about 30% in the last four months, which is the opposite of the historical downward trend. He does not claim this proves acceleration. It might be a temporary blip caused by demand for products like Claude Code and Cowork. But if compute prices keep rising, that would be an important signal that AI capability is becoming more economically valuable relative to chip supply.

## How To Read The Argument Carefully

The strongest version of the acceleration argument would require several signals to line up:

- models repeatedly above benchmark trend,
- especially on agentic long-horizon tasks,
- fast revenue growth that persists after market-share catch-up,
- reliable evidence of large AI researcher productivity gains,
- rising compute prices driven by real AI labor value.

Right now, the evidence is mixed.

The benchmark evidence is suggestive but partly one-model-release dependent. Revenue growth is real, but the market-share story complicates it. AI researcher uplift is real, but the magnitude is uncertain. Compute prices rose recently, but one short-term rise does not establish a durable market regime change.

This is why Todd's conclusion is cautious. The useful move is not to pick a side too early. The useful move is to identify which observations would update us.

## What To Watch Next

Todd names several near-term indicators:

1. Where does Mythos land on METR time horizon at 80% reliability?
2. Are the next one or two major model releases also above trend on ECI?
3. Does Anthropic revenue keep growing near its faster trend, or slow toward OpenAI's trend?
4. Can we get better estimates of AI uplift for AI researchers?
5. Do compute prices keep rising?

This is a good checklist because each item tests a different explanation.

If Mythos is strong on METR but the next releases are not, maybe Mythos was a one-off. If revenue slows once Anthropic catches up, maybe the revenue acceleration was market-share transfer. If better productivity studies show only modest uplift, the feedback-loop story weakens. If compute prices keep rising despite new supply, that strengthens the view that useful AI labor is becoming compute-constrained.

## Quick Check

1. What is the difference between fast progress and acceleration?
2. Why might agentic coding benchmarks matter more for AI R&D automation than broad benchmark averages?
3. Why does Todd treat revenue as a useful benchmark?
4. Why might Anthropic's revenue growth slow even if its products remain strong?
5. Why does a 4x labor productivity gain not automatically mean 4x faster AI progress?
6. Why could compute prices rise if AI workers become economically valuable?
7. What evidence would make the acceleration story stronger over the next three months?

## One-Minute Summary

Benjamin Todd argues that recent AI progress might be the start of an acceleration, especially around Anthropic and agentic coding, but the evidence is not yet decisive. Benchmarks give mixed signals: Mythos may be ahead on Anthropic's agentic-heavy index, while external estimates put it closer to trend on Epoch's ECI. Revenue growth is accelerating because Anthropic is growing much faster than OpenAI, but that may slow once Anthropic stops taking market share. AI is making AI researchers more productive, though Todd doubts the uplift is already large enough to explain a major acceleration. Compute prices recently rose after a long history of decline, which could be an early market signal, but might also be a short-term blip. The main takeaway is to watch the next few months carefully: METR time horizons, ECI trend breaks, Anthropic revenue, better AI-uplift estimates, and compute prices.
