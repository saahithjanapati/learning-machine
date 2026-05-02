# SkillWeaver: Web Agents can Self-Improve by Discovering and Honing Skills

Source: `https://arxiv.org/abs/2504.07079`
PDF: `https://arxiv.org/pdf/2504.07079`
DOI: `https://doi.org/10.48550/arXiv.2504.07079`
Code/resources: `https://github.com/OSU-NLP-Group/SkillWeaver`
Site: `arXiv`
Submitted: `2025-04-09`
Authors: `Boyuan Zheng, Michael Y. Fatemi, Xiaolong Jin, Zora Zhiruo Wang, Apurva Gandhi, Yueqi Song, Yu Gu, Jayanth Srinivasa, Gaowen Liu, Graham Neubig, Yu Su`
Subjects: `Artificial Intelligence (cs.AI); Computation and Language (cs.CL); Computer Vision and Pattern Recognition (cs.CV)`
Extraction engine: `arXiv metadata + TeX source review`
Strategy: `canonical paper extraction and curriculum-oriented normalization`

## Summary

This paper introduces `SkillWeaver`, a framework for helping web agents improve without model-weight updates. Instead of storing raw trajectories or waiting for supervised demonstrations, the agent explores a website, proposes useful skills, practices those skills, converts successful trajectories into Python Playwright functions, tests and debugs those functions, and keeps them in a reusable skill library.

The paper's key claim is that website-specific procedural knowledge can be represented as lightweight APIs. In this paper, `API` does not mean a server-side REST endpoint. It means an executable Python function wrapping browser automation. A skill might fill a pill identifier form, apply a shopping discount code, perform express checkout, scrape a set of reviews, navigate to a profile page, or compose several simpler skills into a larger website routine.

SkillWeaver is motivated by a gap in current web agents. Agents can often browse and act step by step, but they repeatedly rediscover the same procedural routines and struggle to transfer learned website knowledge to later tasks or weaker agents. SkillWeaver makes those routines explicit, testable, composable, and shareable.

## Core Claim

The paper argues that self-improving web agents need a persistent procedural memory that is more structured than raw screenshots, HTML traces, or natural-language advice.

Executable skills have several advantages:

- They compress multi-step browser routines into one callable action.
- They preserve website-specific interaction knowledge.
- They can be tested and debugged.
- They can be reused by other agents.
- They can compose into higher-level routines.
- They do not require fine-tuning or weight updates.

The broader view is that a web agent's action space should grow as it explores. A new website is not just a new task distribution; it is an environment with learnable affordances.

## Method Pipeline

SkillWeaver has three stages.

### 1. Skill Proposal

The agent explores a website and proposes short-horizon reusable skills. The proposal model sees the website name, URL, screenshot, accessibility tree, and current skill library. It is prompted to avoid duplicating existing skills and to prefer skills that can later be reused.

The paper divides proposed skills into three broad classes:

| Skill type | What it captures | Example pattern |
| --- | --- | --- |
| Procedural | A multi-step workflow with a clear goal | Fill a form, submit a search, complete checkout |
| Navigational | A route through the website | Open a reviews page, reach a user profile |
| Information-seeking | Data extraction from one or more pages | Scrape commits, reviews, orders, listings |

This proposal stage is the curriculum generator. It decides what the agent should practice next.

### 2. Skill Synthesis

Given a proposed skill, the agent attempts the task in the browser.

For procedural and navigational tasks, a base web agent acts through Playwright browser code. For information-seeking tasks, the system synthesizes scraping code, including any navigation needed to reach the target data.

A reward model then judges whether the attempt succeeded. The judge sees the task description, the action trajectory, screenshots or trajectory descriptions, execution results, and environmental feedback.

When the attempt is successful, SkillWeaver turns the trajectory into a reusable Python function. The synthesized function includes:

- a function signature,
- Playwright browser actions,
- parameters for the variable parts of the task,
- a docstring explaining purpose and usage,
- a usage log with prior execution behavior,
- preconditions or assumptions about the page state.

The system also performs static checks for common generation mistakes and can ask the model to regenerate the function when those checks fail.

### 3. Skill Honing

Synthesized APIs are not assumed to be correct. The honing stage tests and debugs them.

If an API only needs a Playwright page object, SkillWeaver can run it directly as a unit test. If it needs extra parameters, an LLM generates plausible test values. When an execution fails, the agent uses the failure context to revise the implementation and rerun tests.

This stage is important because website automation is brittle. Locator errors, dynamic UI timing, missing preconditions, and wrong parameter assumptions can make a skill fail even if the original trajectory succeeded.

## Experimental Setup

The paper evaluates SkillWeaver in two settings.

### WebArena

WebArena is a self-hosted sandbox benchmark for web agents. The paper describes it as a benchmark with 812 tasks across five domains:

| Domain | Appendix task count |
| --- | ---: |
| GitLab | 180 |
| Map | 109 |
| Shopping | 187 |
| CMS | 182 |
| Reddit | 106 |

The self-hosted environment also allows comparison against human-crafted APIs derived from official documentation or external sources.

### Real-World Websites

For live websites, the authors use Online-Mind2Web. The full benchmark contains 300 tasks across 136 websites, but the paper filters to websites with enough accessible tasks for Playwright-based online evaluation.

The final live evaluation uses 57 tasks across four websites:

| Website/domain | Tasks |
| --- | ---: |
| Drugs.com | 23 |
| Southwest flights | 17 |
| Cookpad | 8 |
| Cars.com | 9 |

The authors manually evaluate live-website trajectories for task success.

### Agent Implementation

The default base agent uses GPT-4o with temperature 0.3 and a maximum of 10 steps per iteration. The baseline action space contains ordinary browsing actions implemented through Playwright code. The skill-augmented agent adds API calls from the synthesized skill library, with a selection module that filters relevant APIs and removes APIs whose preconditions do not apply.

The paper also tests transfer to a weaker GPT-4o-mini agent while keeping the agent design otherwise fixed.

During exploration, each website receives 160 iterations with GPT-4o. An iteration is either a proposed-skill attempt or a test of an existing skill.

## Main Results

### WebArena

On WebArena, synthesized skills improve average task success for both GPT-4o and GPT-4o-mini agents.

| Method | GitLab | Map | Shopping | CMS | Reddit | Average |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| GPT-4o baseline | 17.8 | 27.5 | 19.8 | 18.7 | 37.7 | 22.6 |
| GPT-4o + skills | 22.2 | 33.9 | 27.2 | 25.8 | 50.0 | 29.8 |
| GPT-4o-mini baseline | 6.1 | 10.3 | 11.8 | 3.3 | 18.9 | 9.2 |
| GPT-4o-mini + skills | 8.9 | 16.7 | 17.1 | 7.7 | 26.4 | 14.1 |

For GPT-4o, the table implies a gain of 7.2 percentage points on average, about a 31.8% relative improvement. For GPT-4o-mini, the paper reports that APIs synthesized by stronger agents yield improvements up to 54.3%.

The strongest domain gain for GPT-4o-mini is CMS, where the score rises from 3.3 to 7.7. That is still low in absolute terms, but the relative improvement is large because the weaker baseline starts from a very poor success rate.

### Real-World Websites

SkillWeaver also improves success on live websites.

| Domain | Baseline | + Skills | Relative change |
| --- | ---: | ---: | ---: |
| Drug | 65.0 | 87.0 | +34% |
| Flight | 11.7 | 29.4 | +151% |
| Cooking | 62.5 | 75.0 | +20% |
| Car | 11.1 | 11.1 | 0% |
| Average | 40.2 | 56.2 | about +40% |

The live setting is noisier than WebArena because websites change and require visual or environment-specific judgment. The car site is the main failure case: synthesized APIs often moved the agent toward the right state, but the final steps still required stronger visual or environment understanding.

## Analysis

### Generalization Across Websites

SkillWeaver does not hard-code website-specific prompts into the main agent. Instead, each website gets its own synthesized API library. At inference time, switching websites mainly means switching the available library.

This is the paper's version of generalization: not a single universal policy that knows every website, but an agent that can build and reuse website-specific procedural memory.

### Generalization Across Agents

The synthesized APIs transfer to weaker agents because the hard procedural work is embedded in executable code. A weaker model still has to choose the right API and provide good parameters, but it no longer has to rediscover the full browser-action sequence.

This makes SkillWeaver look like a form of externalized knowledge distillation: a stronger agent explores and writes skills; a weaker agent consumes those skills as tools.

### Human-Crafted Versus Synthesized APIs

The paper compares synthesized APIs with human-crafted APIs. Synthesized APIs are competitive on websites with low or medium official API support, such as Reddit and Shopping. They are weaker on websites with high official API support, such as GitLab and Maps.

This suggests a practical niche: synthesized browser APIs are especially useful when official APIs are missing, incomplete, poorly aligned with UI tasks, or expensive to wire in manually.

### Emergent Composition

After enough exploration, SkillWeaver begins producing compositional APIs that call previously synthesized APIs. For example, an API for filtering search results may first call a skill to close an overlay and then call other filter-specific skills.

This is important because it shows that the library can become hierarchical rather than a flat collection of one-off browser macros.

## Limitations And Caveats

- The approach depends on the exploration agent's capability. If the base agent cannot complete a task, SkillWeaver cannot reliably turn that task into a good API.
- API use remains a bottleneck. The inference-time agent can still select the wrong API or provide wrong parameters.
- Browser automation is brittle. UI changes, locator ambiguity, dynamic elements, and login/session differences can break skills.
- The reward model is an LLM judge, so false positives or false negatives can corrupt the skill library.
- Live website exploration has safety concerns. The paper explicitly discusses avoiding harmful side effects such as account creation, financial actions, or interactions with real users.
- The framework improves agents without weight updates, but it does not solve deeper reasoning or visual understanding failures.
- A result-text inconsistency appears in the paper: one WebArena results sentence says 39.8% average relative improvement, while the abstract and the table support about 31.8% for WebArena and about 39.8% for live websites.

## Practical Takeaway

SkillWeaver is best understood as a procedure for turning exploratory web-agent experience into a tested tool library.

Instead of asking a web agent to solve every future task from scratch, the system asks:

1. What recurring website routines should be turned into functions?
2. Can the agent practice them successfully?
3. Can the successful trajectory be generalized into a parameterized Playwright API?
4. Can that API be tested and repaired?
5. Can another agent use the API later?

For agent design, the paper's most useful lesson is that external memory should often be executable. Natural-language memories can guide an agent, but executable skills can directly change what actions the agent is capable of taking.

## Bottom Line

SkillWeaver is a self-improvement framework for web agents that converts autonomous website exploration into reusable Playwright APIs.

If you remember one sentence from this paper, use:

`SkillWeaver turns web-agent experience into executable, testable procedural memory.`
