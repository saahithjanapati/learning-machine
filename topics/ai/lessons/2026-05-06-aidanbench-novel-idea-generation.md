# AidanBench and the Problem of Measuring Novel Ideas

Source note: Aidan McLaughlin, James Campbell, and Anuja Uppuluri, "AidanBench: Evaluating Novel Idea Generation on Open-Ended Questions." NeurIPS 2024 Workshop on Language Gamification. OpenReview page: [openreview.net/forum?id=fz969ahcvJ](https://openreview.net/forum?id=fz969ahcvJ). PDF: [openreview.net/pdf?id=fz969ahcvJ](https://openreview.net/pdf?id=fz969ahcvJ). Code: [github.com/aidanmclaughlin/Aidan-Bench](https://github.com/aidanmclaughlin/Aidan-Bench). Processed source: [materials/processed/ai/aidanbench-evaluating-novel-idea-generation-on-open-ended-questions.md](../../../materials/processed/ai/aidanbench-evaluating-novel-idea-generation-on-open-ended-questions.md).

## Table of Contents

- [Medium-Length Version](#medium-length-version)
- [Full-Length Version](#full-length-version)
- [The Evaluation Gap](#the-evaluation-gap)
- [How AidanBench Works](#how-aidanbench-works)
- [The Scoring Math In Plain English](#the-scoring-math-in-plain-english)
- [What The Results Suggest](#what-the-results-suggest)
- [Why The MMR Connection Matters](#why-the-mmr-connection-matters)
- [Critique And Open Questions](#critique-and-open-questions)
- [How To Remember The Paper](#how-to-remember-the-paper)

## Medium-Length Version

### Medium Thesis

AidanBench tries to measure something that ordinary benchmarks often miss: whether a language model can keep producing genuinely different, plausible ideas when the question does not have one correct answer.

Most familiar benchmarks reward convergence. A math benchmark asks for the answer. A coding benchmark asks for the patch. A knowledge benchmark asks for the fact. But many real uses of LLMs are divergent: brainstorming possible designs, imagining futures, proposing explanations, generating product ideas, or suggesting unusual but coherent plans.

The paper's core move is to turn that divergent task into an iterative evaluation. The model is given an open-ended question and asked to produce an answer it has not already given. The benchmark checks whether the answer is coherent and whether it is semantically novel relative to the model's earlier answers. If the answer is too repetitive or too incoherent, the run stops.

### The Benchmark Loop

For each open-ended question, AidanBench repeats this loop:

1. Ask the model for a new answer.
2. Compare the answer to previous answers for the same question using embeddings.
3. Use a separate LLM judge to score coherence and plausibility.
4. Add the answer to context if it is both novel enough and coherent enough.
5. Stop when the model repeats itself or becomes incoherent.

That design makes the benchmark different from simply asking "give me ten ideas." It tests whether the model can sustain novelty over time while keeping track of what it already said.

### The Main Result

The paper reports that AidanBench does not line up neatly with standard benchmark rankings. Some models that look strong on conventional leaderboards are less impressive when asked to sustain open-ended novelty. The text highlights o1-mini as especially strong on summed novelty, while the figure-level total coherence chart ranks Claude 3.5 Sonnet highest.

That difference is not a contradiction to sweep away. It reveals the central lesson: "creative performance" is not one number. A model can be coherent but conservative, diverse but shallow, or good at producing many angles until it suddenly repeats itself.

### Medium Takeaway

AidanBench is best read as a benchmark for **sustained non-redundant idea generation under coherence constraints**. It asks whether a model can keep exploring a space without collapsing into paraphrase or nonsense.

## Full-Length Version

## The Evaluation Gap

The paper begins from a simple but important observation: current LLM evaluations are much better at measuring closed-form competence than open-ended usefulness.

Closed-form tasks are easier to grade. If the model solves a math problem, passes a unit test, or answers a multiple-choice question, the evaluator can usually decide whether the output is right. That made benchmarks like MMLU, MATH, GPQA, and SWE-bench useful for tracking progress.

But people often use LLMs in settings where there is no one correct output. A user might ask:

- How could Los Angeles traffic be improved?
- What might be an unexpected consequence of nuclear fusion?
- How could the rules of chess be changed for spectators?
- What is a novel use for drones?

These are not "find the answer" tasks. They are exploration tasks. A useful model needs to produce multiple plausible directions, avoid repeating the same idea with different wording, and keep enough contextual attention to know what it has already said.

AidanBench is designed around that gap.

## How AidanBench Works

The benchmark uses a list of open-ended prompts spanning history, policy, design, art, speculative science, lifestyle, mathematical proof, and odd creative tasks. The prompt set matters because it mixes ordinary explanatory questions with more generative prompts. That keeps the benchmark from being only "creative writing" or only "reasoning."

For each question, the model is asked for a response. Then it is asked again for a response it has not given previously. After each answer, the benchmark checks two things.

First, it checks **novelty**. The new answer is embedded, then compared against embeddings of the model's previous answers to that question. If it is too close to something already said, the model has effectively repeated itself.

Second, it checks **coherence**. A separate LLM judge gives the answer a score from 1 to 10 for intelligibility, relevance, and plausibility. If the score is too low, the benchmark stops that question.

This makes AidanBench a survival test. The model keeps earning credit only as long as it can produce answers that are both different and sensible.

## The Scoring Math In Plain English

The novelty score is:

$$
\text{Novelty Score} = 1 - \max_{e_i \in E_{prev}} \frac{e_{new} \cdot e_i}{\|e_{new}\| \|e_i\|}
$$

Translated:

- represent the new answer as an embedding vector;
- compare it to every previous answer for the same question;
- find the most similar previous answer;
- subtract that similarity from 1.

If the new answer is basically a paraphrase, cosine similarity is high and novelty is low. If it goes in a genuinely different direction, similarity is lower and novelty is higher.

The total score sums novelty across answers and questions, but only for coherent answers:

$$
S_{total}(M) = \sum_{q=1}^{Q} \sum_{i=1}^{N_q} \mathbb{1}[\text{coherence}(r_{q,i}) \geq \theta] \cdot S_{novel}(r_{q,i})
$$

The indicator term is the important guardrail. It prevents a model from scoring well by producing random weirdness. Novelty alone is cheap. Useful novelty has to stay coherent.

## What The Results Suggest

The paper evaluates several contemporary models and compares AidanBench behavior against more standard leaderboard strength.

The main qualitative result is that standard benchmark strength is not the same as open-ended idea-generation strength. The paper text reports a weak relationship between AidanBench and LMSYS-style scores, and argues that models strong on common user queries may still struggle on divergent thinking.

The result charts also show that different metrics tell different stories:

- Claude 3.5 Sonnet ranks very highly on total coherence in the figure.
- o1-mini is highlighted in the text as especially strong on summed novelty.
- GPT-4 Turbo is used for deeper per-question and iteration analysis.
- Temperature changes do not simply solve novelty, because higher randomness can also lower coherence.

This is probably the right way to read the paper. AidanBench is not saying "model X is creative, model Y is not." It is showing that open-ended ability has several separable parts:

- generating new angles;
- avoiding repeated semantic patterns;
- staying plausible;
- remembering prior answers;
- handling prompts from many domains;
- balancing diversity against quality.

Those pieces can move independently.

## Why The MMR Connection Matters

The appendix connects AidanBench to Maximal Marginal Relevance, or MMR.

MMR comes from information retrieval. A search engine does not only want relevant documents. It also wants non-redundant documents. If five papers make the same point, returning all five is less useful than returning one of them plus other relevant perspectives.

AidanBench applies the same basic tension to model answers:

- quality means "does this answer fit the question?"
- novelty means "is this answer different from what has already been said?"

That connection is useful because it frames creativity as a relevance-diversity tradeoff rather than magic. A creative answer is not merely unusual. It is unusual **while still being on task**.

## Critique And Open Questions

AidanBench is clever, but the benchmark has several natural limitations.

First, embedding novelty is only a proxy for idea novelty. Two answers can have different surface semantics while relying on the same underlying idea. The opposite can also happen: two genuinely different ideas might share vocabulary and be marked too similar.

Second, the coherence judge is itself an LLM. That means the benchmark inherits judge-model biases. A judge may prefer polished conventional answers, punish strange but valid ideas, or miss domain-specific errors.

Third, stopping on failure makes single mistakes expensive. If a model has one bad response early, it loses the chance to demonstrate later recovery. That is reasonable for measuring sustained reliability, but it can blur capability with local variance.

Fourth, answer length and style may matter. A verbose model can pack several ideas into one response, while a terse model may split ideas across iterations. Without careful controls, the benchmark may partly measure formatting behavior.

Fifth, the paper's own result presentation invites careful reading. The text and figures emphasize different scoring views, such as novelty versus coherence. That is not fatal, but it means the benchmark should be interpreted as a diagnostic suite rather than a single creativity leaderboard.

Finally, the prompt set is hand-built and finite. A model can in principle overfit to this kind of prompt family. A stronger version of the benchmark would need larger prompt diversity, adversarial prompt generation, and perhaps human evaluation of whether the "new" ideas are actually useful.

## How To Remember The Paper

AidanBench measures whether a model can keep generating new, coherent answers to open-ended questions.

The benchmark loop is:

1. ask for another answer;
2. check semantic novelty against previous answers;
3. check coherence with an LLM judge;
4. keep going until repetition or incoherence stops the run.

The main lesson is that open-ended usefulness is not captured by ordinary answer-key benchmarks. A model can be strong at solving closed tasks and still be mediocre at sustained divergent thinking.

The critique to remember is that novelty is hard to measure. Embeddings and LLM judges make AidanBench practical, but they also turn "creativity" into a set of imperfect proxies.

The big takeaway:

**AidanBench treats creativity as sustained relevance plus non-redundancy. That is a practical, imperfect, and useful way to start measuring one part of open-ended intelligence.**
