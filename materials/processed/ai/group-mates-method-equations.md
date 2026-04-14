# Group-MATES Method Equations

Source paper: `https://arxiv.org/pdf/2502.14709`

This note rewrites the main equations from *Group-Level Data Selection for Efficient Pretraining* in Obsidian-friendly markdown and explains what each term is doing.

## Main Idea

`Group-MATES` is trying to score a candidate document $x_t$ **in the context of documents already selected**:

$$
\hat I_t(x_t \mid D_{t-1}) = \Theta^{\mathrm{rel}}(x_t \mid D_{t-1}).
$$

That is the key difference from `MATES`, which only predicts an individual score for each document.

## Oracle Local Influence

The paper defines the oracle local influence of a candidate example $x_t$ at training step $t$ as the change in reference loss after one training update on that example:

$$
I(M_t, x_t) = \mathcal{L}(D_r \mid M_{t+1}) - \mathcal{L}(D_r \mid M_t),
$$

where

$$
M_{t+1} = A(M_t, x_t).
$$

Here:

- $M_t$ is the current language model checkpoint.
- $A(M_t, x_t)$ means "take one optimization step on example $x_t$".
- $D_r$ is a small reference dataset used to measure whether the update helped.

Interpretation:

- If $I(M_t, x_t)$ is **more negative**, then training on $x_t$ helped more, because the reference loss dropped more.
- If it is closer to $0$ or positive, then $x_t$ helped less or even hurt.

## MATES: Individual Influence Only

The earlier `MATES` paper predicts individual influence using:

$$
\Theta^{\mathrm{indiv}}(x_i) = w_o \cdot h_{x_i},
$$

where:

- $h_{x_i}$ is the embedding of document $x_i$,
- $w_o$ is a learned regression vector.

This is just a per-document score. It does **not** depend on what other documents were already selected.

## Group-MATES: Relational Influence Model

The key Group-MATES equation is:

$$
I(M_t, x_t) \approx \Theta^{\mathrm{rel}}(x_t \mid D_{t-1})
=
\left[
\alpha
-
\frac{\alpha}{\beta \cdot (t-1)}
\sum_{1 \le i < t} R_{x_i, x_t}
\right]
\cdot
(w_o \cdot h_{x_t}).
$$

This prediction has two parts:

### 1. Individual term

$$
w_o \cdot h_{x_t}
$$

This is the standalone influence of document $x_t$.


You can think of it as:

"How useful does this document look on its own?"

### 2. Relationship-weighted correction

$$
\alpha
-
\frac{\alpha}{\beta \cdot (t-1)}
\sum_{1 \le i < t} R_{x_i, x_t}
$$

This rescales the standalone influence based on the relationship between the candidate $x_t$ and the already selected documents in $D_{t-1}$.

So the model is really saying:

$$
\text{group-aware influence}
=
\text{standalone influence}
\times
\text{interaction correction}.
$$

## Relationship Weight

The relationship term is defined as:

$$
R_{x_i, x_t} = \mathrm{sim}(h_{x_i}, h_{x_t}),
$$

where `sim` is cosine similarity in the paper.

So the same embedding $h_x$ is used for two different jobs:

- as input to the linear head $w_o \cdot h_x$ for standalone influence,
- as input to cosine similarity for pairwise interaction.

## What The Embedding Model Learns

There is not a separate "quality loss" and "interaction loss".

Instead, the model uses **one shared embedding space** and **one regression objective**, but the architecture extracts two different signals from that embedding:

### Standalone document value

$$
w_o \cdot h_x
$$

This is the part that estimates whether a document is useful by itself.

### Interaction with selected documents

$$
R_{x_i, x_t} = \mathrm{sim}(h_{x_i}, h_{x_t})
$$

This is the part that estimates whether the candidate is redundant, conflicting, or complementary relative to what has already been selected.

## What Is $w_o$?

In the Group-MATES equation, the paper uses $w_o$, not $w_i$:

$$
w_o \cdot h_{x_t}.
$$

$w_o$ is a learned linear regression weight vector on top of the embedding $h_{x_t}$.

You can think of the model as:

$$
h_x = \mathrm{encoder}(x),
$$

$$
\text{individual score}(x) = w_o^\top h_x.
$$

So:

- the encoder turns a document into an embedding $h_x$,
- $w_o$ maps that embedding to a scalar standalone influence score,
- that scalar is then rescaled by the relationship multiplier in the full Group-MATES equation.

$w_o$ is not hand-designed and it is not copied from the language model.

It is simply one of the trainable parameters of the smaller relational influence model. During training, the paper minimizes MSE between predicted local influence and oracle local influence, and both:

- the encoder parameters, and
- the linear head parameters $w_o$

are updated to make the prediction fit the oracle labels.

So the role of $w_o$ is:

- not "semantic meaning",
- not "pairwise interaction",
- but specifically "convert embedding into standalone document usefulness."

## Training Loss

The model is trained with mean squared error against oracle rollout labels.

Initial training objective:

$$
\Theta_{\mathrm{init}}^{\mathrm{rel}}
=
\arg\min_{\Theta^{\mathrm{rel}}}
\mathbb{E}_{\mathcal{T}^{\pi_{\mathrm{rand}}}}
\sum_{t=1}^{T}
\left(
\Theta^{\mathrm{rel}}(x_t \mid D_{t-1}) - I(M_t, x_t)
\right)^2.
$$

Final training objective after adding bootstrapped rollouts:

$$
\Theta_{\mathrm{final}}^{\mathrm{rel}}
=
\arg\min_{\Theta^{\mathrm{rel}}}
\mathbb{E}_{\mathcal{T}^{\pi_{\mathrm{rand}}}, \mathcal{T}^{\pi_{\mathrm{boot}}}}
\sum_{t=1}^{T}
\left(
\Theta^{\mathrm{rel}}(x_t \mid D_{t-1}) - I(M_t, x_t)
\right)^2.
$$

So the supervision is always:

$$
\text{predicted local influence} \;\approx\; \text{oracle local influence}.
$$

The model learns standalone value and interactions jointly because both are needed to fit the oracle labels.

## Rollout Definition

To collect training labels, the paper samples training trajectories:

$$
\mathcal{T}^{\pi} \sim x_1 \ldots x_{t-1}
\xrightarrow{\pi(\cdot \mid D_{t-1})}
x_t \ldots x_T,
$$

with

$$
D_t \leftarrow D_{t-1} \cup \{x_t\}, \qquad M_{t+1} = A(M_t, x_t).
$$

This means:

1. Start from a partial selected set.
2. Pick the next document according to some rollout policy.
3. Update the LM on that document.
4. Measure oracle influence.
5. Repeat for a short trajectory.

## Bootstrapping Policy

The paper argues that random rollouts mostly sample near-average influences, because the influence distribution is close to Gaussian.

To get more informative supervision, they add a bootstrapping policy that explicitly samples documents from the extremes of the current model's predicted influence distribution:

$$
\pi_{\mathrm{boot}}(\cdot \mid D_{t-1})
=
\arg\min_{x_t \in D \setminus D_{t-1}}^{(K)}
\Theta_{\mathrm{init}}^{\mathrm{rel}}(x_t \mid D_{t-1})
\cup
\arg\max_{x_t \in D \setminus D_{t-1}}^{(K)}
\Theta_{\mathrm{init}}^{\mathrm{rel}}(x_t \mid D_{t-1}).
$$

Meaning:

- collect some very low predicted-influence examples,
- collect some very high predicted-influence examples,
- use both to better cover the tails of the oracle distribution.

## Selection Rule

Once the relational model is trained, selection is sequential:

$$
x_t = \arg\min_{x_i \in D \setminus D_{t-1}^{\mathrm{rel}}}
\Theta^{\mathrm{rel}}(x_i \mid D_{t-1}^{\mathrm{rel}}),
$$

$$
D_t^{\mathrm{rel}} \leftarrow D_{t-1}^{\mathrm{rel}} \cup \{x_t\}.
$$

So at each step:

1. Score every remaining candidate conditioned on what has already been selected.
2. Pick the one with the best predicted oracle influence.
3. Add it to the selected set.

This is what makes the method group-aware: the score of a document changes as the selected set changes.

## Efficient Clustered Inference

Full inference is expensive because for every candidate you would need to compute relationships with many selected points.

So the paper partitions the data into clusters $C^1, \dots, C^d$ and runs the selection independently inside each cluster:

$$
\text{for } i = 1, \dots, d,
$$

$$
\text{for } t = 1, \dots, \left\lceil n \cdot \frac{|C^i|}{|D|} \right\rceil:
\quad
C_t^i \leftarrow C_{t-1}^i \cup
\left\{
\arg\max_{x_j \in C^i \setminus C_{t-1}^i}
\Theta_{\mathrm{final}}^{\mathrm{rel}}(x_j \mid C_{t-1}^i)
\right\},
$$

$$
D_{(n)} \leftarrow
\bigcup_{i \in \{1, \dots, d\}}
C^i_{\left\lceil n \cdot \frac{|C^i|}{|D|} \right\rceil}.
$$

The paper uses the learned relationship weight $R$ itself as the similarity metric for clustering. That is why they call it **influence-aware clustering**.

Note:

- Earlier equations use `arg min` because lower influence means better improvement.
- The cluster inference equation in the paper is written with `arg max`, which looks inconsistent with the earlier sign convention and may be a notation/sign mismatch.

## Intuition For Eq. 13

You can read Eq. 13 as:

$$
\text{predicted influence of candidate}
=
\text{standalone usefulness}
\times
\text{how compatible it is with the already selected set}.
$$

If the candidate is highly redundant or conflicting with selected documents, the relationship sum changes the multiplier in an unfavorable way.

If the candidate is complementary, the multiplier changes in a favorable way.

So Group-MATES is trying to model:

$$
\text{subset utility} \neq \sum \text{individual utilities}
$$

and replaces that with a pairwise-corrected approximation.

## More Intuition For The Key Equation

The key equation is:

$$
\hat I_t(x_t \mid D_{t-1})
=
\left[
\alpha - \frac{\alpha}{\beta (t-1)} \sum_{1 \le i < t} R_{x_i,x_t}
\right]
\cdot
(w_o \cdot h_{x_t}).
$$

The cleanest way to read this is:

$$
\text{predicted usefulness of candidate}
=
\text{standalone usefulness}
\times
\text{context correction from already-selected docs}.
$$

So there are two conceptual parts.

### Standalone usefulness

$$
w_o \cdot h_{x_t}
$$

This answers:

"If I ignore the rest of the selected set, how useful does this document look by itself?"

This is the part of the model that behaves like an individual document scorer.

### Context correction

$$
\alpha - \frac{\alpha}{\beta (t-1)} \sum_{1 \le i < t} R_{x_i,x_t}
$$

This answers:

"How should I adjust that standalone score based on what I have already selected?"

The relationship sum

$$
\sum_{1 \le i < t} R_{x_i,x_t}
$$

collects pairwise interactions between the candidate $x_t$ and the already selected documents in $D_{t-1}$.

The division by $(t-1)$ keeps this from growing automatically just because more documents have already been selected. It makes the term behave more like an average interaction strength rather than a raw count.

The constants $\alpha$ and $\beta$ control the scale of the correction.

## Why The Model Multiplies Rather Than Adds

The paper uses:

$$
\text{score} = \text{interaction multiplier} \times \text{individual score}
$$

rather than:

$$
\text{score} = \text{individual score} + \text{interaction bonus}.
$$

This means the interaction term is not trying to replace the standalone quality of a document. It is trying to rescale it.

Interpretation:

- a document that already looks poor on its own will usually stay poor,
- a document that looks good on its own can be downweighted if it is redundant,
- a document that looks good on its own can be upweighted if it complements the current selected set.

So the relationship term acts more like a gate or compatibility multiplier than like a separate reward.

## Numerical Toy Example

Suppose a candidate document $x_t$ has standalone predicted influence

$$
w_o \cdot h_{x_t} = -2.0.
$$

Remember: in this setup, more negative is better because it means the update is predicted to reduce the reference loss more.

Now suppose there are already two selected documents, so $t-1 = 2$, and choose $\alpha = 1$, $\beta = 1$.

### Case 1: redundant candidate

If the candidate is strongly related to the current set:

$$
R_{x_1,x_t} = 0.8, \qquad R_{x_2,x_t} = 0.6,
$$

then

$$
\sum_i R_{x_i,x_t} = 1.4.
$$

The multiplier becomes

$$
1 - \frac{1}{2}(1.4) = 0.3.
$$

So the final predicted influence is

$$
\hat I_t(x_t \mid D_{t-1}) = 0.3 \cdot (-2.0) = -0.6.
$$

This is much less favorable than $-2.0$, so the candidate gets downweighted. Intuitively, it looked useful on its own, but too redundant with what is already selected.

### Case 2: weakly related or complementary candidate

If instead the candidate has weaker average relationship to the selected set:

$$
R_{x_1,x_t} = 0.1, \qquad R_{x_2,x_t} = 0.1,
$$

then

$$
\sum_i R_{x_i,x_t} = 0.2.
$$

The multiplier becomes

$$
1 - \frac{1}{2}(0.2) = 0.9.
$$

So the final predicted influence is

$$
\hat I_t(x_t \mid D_{t-1}) = 0.9 \cdot (-2.0) = -1.8.
$$

This stays much more favorable. The document still looks useful after accounting for the current selected set.

## What Changes Relative To MATES

In `MATES`, the document would just get the same standalone score no matter what had already been selected:

$$
\Theta^{\mathrm{indiv}}(x_t) = w_o \cdot h_{x_t}.
$$

In `Group-MATES`, the document's score changes with context:

$$
\Theta^{\mathrm{rel}}(x_t \mid D_{t-1}).
$$

That means two documents with the same standalone quality can be ranked differently depending on whether the current subset makes them redundant or complementary.

## What The Equation Is Trying To Approximate

The true question is:

"What is the marginal value of adding $x_t$ to the current selected subset?"

The paper cannot solve that exactly for all subsets, so it uses a pairwise approximation:

1. estimate the document's individual usefulness,
2. estimate how that usefulness should change because of pairwise interactions with already selected documents.

So Eq. 13 is best viewed as an approximation to conditional marginal utility.

## Main Limitation Of The Equation

The equation only models pairwise interactions through:

$$
\sum_i R_{x_i,x_t}.
$$

It does not model true higher-order effects such as:

- a document only becoming useful if two specific other documents are already present,
- three-way redundancy or conflict,
- larger curriculum structures spanning many documents.

So Group-MATES is richer than individual scoring, but it is still not exact subset optimization.

## Practical Takeaway

The selector is not just ranking documents once.

It is repeatedly asking:

"Given what I have already picked, what should I pick next?"

Mathematically, that is exactly what the conditioning on $D_{t-1}$ and the relationship weights $R_{x_i, x_t}$ are doing.

## Appendix: How The Relational Model Is Actually Trained

One easy misunderstanding is to think the model is trained only on isolated document pairs. That is not quite right.

The model is trained on **rollout states**. At each training step, it sees:

- a current partial selected set $D_{t-1}$,
- a candidate next document $x_t$,
- the oracle local influence of adding $x_t$ after that prefix.

So the target is always:

$$
\Theta^{\mathrm{rel}}(x_t \mid D_{t-1})
\approx
I(M_t, x_t).
$$

This is a **set-conditioned regression problem**: predict the marginal value of the next document given what has already been selected.

### What A Training Example Looks Like

A single supervised example for the relational model is not just "document $x$" and not just "pair $(x_i, x_j)$".

It is more like:

- current LM state $M_t$,
- partial selected set $D_{t-1} = \{x_1, \dots, x_{t-1}\}$,
- candidate next document $x_t$,
- oracle target $I(M_t, x_t)$.

The model then predicts:

$$
\hat I_t(x_t \mid D_{t-1})
=
\left[
\alpha - \frac{\alpha}{\beta (t-1)} \sum_{1 \le i < t} R_{x_i,x_t}
\right]
\cdot
(w_o \cdot h_{x_t}).
$$

So although the model is conditioned on a set, it represents that set through the **sum of pairwise relationships** between the candidate and each previously selected document.

### Why Pairs Still Matter

Pairs are not just a warm-up trick. They are the core approximation the method uses everywhere.

The true problem is higher-order:

$$
\text{value of adding } x_t \text{ may depend on the whole subset } D_{t-1}.
$$

But exact subset modeling is too expensive. So Group-MATES approximates the set effect using:

$$
\sum_{1 \le i < t} R_{x_i,x_t},
$$

which is a sum of pairwise interactions.

So the right mental model is:

- training examples come from longer rollouts and growing selected sets,
- but the architecture compresses those set effects into aggregated pairwise terms.

That means the model is **not** learning full higher-order interactions directly. It is learning a pairwise approximation to marginal utility in a rollout.

### Step-By-Step Training Loop

The training process is roughly:

1. Start from a current language-model checkpoint $M_1$.
2. Construct short selection rollouts using some policy $\pi$.
3. At each rollout step $t$, maintain:
$$
D_t \leftarrow D_{t-1} \cup \{x_t\},
\qquad
M_{t+1} = A(M_t, x_t).
$$
4. Compute the oracle label:
$$
I(M_t, x_t) = \mathcal{L}(D_r \mid M_{t+1}) - \mathcal{L}(D_r \mid M_t).
$$
5. Train the relational model so that:
$$
\Theta^{\mathrm{rel}}(x_t \mid D_{t-1})
\approx
I(M_t, x_t).
$$
6. Repeat over many rollout positions and many trajectories.



So the model is really learning:

"Given this current prefix of selected documents, how useful is this next document likely to be?"

### Initial Training: Random Rollouts

The paper first collects rollouts under a random policy:

$$
\mathcal{T}^{\pi_{\mathrm{rand}}}.
$$

This produces a first dataset of set-conditioned oracle labels. They then fit an initial relational model using the MSE objective:

$$
\Theta_{\mathrm{init}}^{\mathrm{rel}}
=
\arg\min_{\Theta^{\mathrm{rel}}}
\mathbb{E}_{\mathcal{T}^{\pi_{\mathrm{rand}}}}
\sum_{t=1}^{T}
\left(
\Theta^{\mathrm{rel}}(x_t \mid D_{t-1}) - I(M_t, x_t)
\right)^2.
$$

This gives the first version of the encoder and the linear head $w_o$.

### Why They Add Bootstrapping

Random rollouts mostly sample ordinary cases. The paper argues the oracle influence distribution is close to Gaussian, so random collection under-covers the tails:

- highly beneficial candidates,
- highly harmful candidates,
- extreme relationship patterns.

Those edge cases are exactly where the interaction model is most informative.

So they add a second stage:

1. use the initial relational model to score candidates,
2. select candidates from the high and low ends of the predicted distribution,
3. collect more rollout labels on those cases,
4. retrain using both random and bootstrapped data.

That leads to the final objective:

$$
\Theta_{\mathrm{final}}^{\mathrm{rel}}
=
\arg\min_{\Theta^{\mathrm{rel}}}
\mathbb{E}_{\mathcal{T}^{\pi_{\mathrm{rand}}}, \mathcal{T}^{\pi_{\mathrm{boot}}}}
\sum_{t=1}^{T}
\left(
\Theta^{\mathrm{rel}}(x_t \mid D_{t-1}) - I(M_t, x_t)
\right)^2.
$$

### What Is Shared Across All Training Examples

Across all rollout states, the same parameters are reused:

- the encoder that maps $x$ to $h_x$,
- the linear head $w_o$ for standalone influence,
- the similarity-based relation function $R_{x_i,x_t}$.

So the model is trying to learn one embedding space that supports both:

1. individual usefulness via $w_o^\top h_x$,
2. interaction structure via $\mathrm{sim}(h_{x_i}, h_{x_t})$.

### Training Phase Versus Selection Phase

It is also useful to separate training and inference clearly.

During relational-model training:

- oracle labels are collected by running local updates on the LM,
- the encoder parameters change,
- $w_o$ changes.

After training finishes:

- the relational model is frozen,
- $w_o$ stays fixed for that selector checkpoint,
- the model is used only for scoring and subset construction.

Later, when they refresh or retrain the selector, the encoder and $w_o$ can change again.

### What This Means Conceptually

So the relational model is not trained "entirely on pairs" in the sense of only seeing isolated document pairs as standalone examples.

Instead:

- supervision comes from rollout prefixes and candidate next documents,
- the prediction target is conditional marginal utility,
- the architecture approximates that conditional utility using aggregated pairwise relationships.

That is why pairs are fundamental to the model, but not the whole story of how the supervision is generated.

## Appendix: Why Pairs Are Used In Training

This is the main conceptual reason pairs show up so often in the paper:

the true subset-selection problem is higher-order, but the cheapest nontrivial approximation is pairwise.

### What The Paper Would Like To Model

In the ideal version of the problem, the marginal value of adding a document $x_t$ depends on the entire already-selected set:

$$
\text{marginal value of } x_t \text{ depends on } D_{t-1}.
$$

That means the paper would ideally like to learn a function of the form:

$$
f(x_t, D_{t-1}).
$$

But directly learning or evaluating such a function over arbitrary subsets is too expensive:

- the number of possible subsets is enormous,
- collecting oracle labels for whole subsets is expensive,
- exact higher-order interaction modeling would make selection impractical.

### Why Individual Scoring Is Not Enough

`MATES` uses only an individual score:

$$
\Theta^{\mathrm{indiv}}(x_t) = w_o^\top h_{x_t}.
$$

This assumes:

$$
\text{subset utility} \approx \sum \text{individual utilities}.
$$

That misses two important cases:

- redundancy: two individually good documents may be too similar together,
- complementarity: two moderate documents may be especially useful together.

So the paper needs something richer than individual scores.

### Why Pairs Are The First Useful Upgrade

Pairs are the smallest structure that can represent interaction.

With one document, you can only ask:

- "Is this document useful by itself?"

With two documents, you can ask:

- "Does the usefulness of this document change when this other document is already present?"

That is exactly the phenomenon Group-MATES is trying to capture.

So the paper upgrades from:
- individual influence

to:
- individual influence plus pairwise interaction

because pairwise interaction is the first place where cancellation and amplification can appear.

### What Pairs Are Doing Mathematically

The model predicts:
$$
\Theta^{\mathrm{rel}}(x_t \mid D_{t-1})
=
\left[
\alpha - \frac{\alpha}{\beta (t-1)} \sum_{1 \le i < t} R_{x_i,x_t}
\right]
\cdot
(w_o \cdot h_{x_t}).
$$


The only way the selected set enters is through:
$$
\sum_{1 \le i < t} R_{x_i,x_t}.
$$

That sum is built from pairwise terms between the candidate and each previously selected document:

$$
R_{x_i,x_t} = \mathrm{sim}(h_{x_i}, h_{x_t}).
$$

So the model is saying:

- I will not model arbitrary subset structure directly,
- I will approximate subset effects by summing pairwise interactions with the candidate.

This is why pairs are fundamental: they are the mechanism that converts a hard set-conditioned problem into something computationally manageable.

### Are They Training On Isolated Pairs Only?

No.

The supervision still comes from rollouts with growing prefixes:

$$
D_{t-1} = \{x_1, \dots, x_{t-1}\}.
$$

At training time, the target is still:

$$
I(M_t, x_t),
$$

which is the oracle marginal effect of adding $x_t$ at step $t$ of a rollout.

So the target is set-conditioned.

What is pairwise is the **approximation architecture**, not the entire supervision process.

That is the key distinction:

- supervision is generated from longer rollout states,
- prediction is implemented as an aggregation of pairwise interactions.

### Why This Makes Sense

This design keeps the method in the middle ground:

- richer than individual-only scoring,
- much cheaper than true higher-order subset modeling.

In effect, the paper assumes:

$$
f(x_t, D_{t-1})
\approx
\text{individual term for } x_t
+
\text{sum of pairwise corrections with items in } D_{t-1}.
$$

That is not exact, but it is much more expressive than treating each document independently.

### What This Buys Them

Using pairs gives them three practical advantages:

1. It introduces interaction modeling without full combinatorial explosion.
2. It allows them to reuse one embedding space both for standalone scoring and for similarity-based relational scoring.
3. It makes efficient clustered inference possible, because the same pairwise relation can also be used as the clustering signal.

### What It Does Not Capture

Even with pairwise training, the model still cannot capture true higher-order effects like:

- a document becoming useful only if two specific other documents are both already selected,
- three-way redundancy,
- larger curriculum motifs spanning many documents.

So the paper is not claiming pairs are the full story.

It is claiming that pairs are the most practical next step beyond independent scoring.

Short version:

when the paper says the method is "pairwise," it means the contextual part of the selector is computed by comparing the candidate document embedding to each previously selected document embedding one at a time via cosine similarity, and then aggregating those pairwise comparisons into a single correction term.

## Appendix: What FLAN Is In This Setup

In the Group-MATES paper, `FLAN` is used as the **reference dataset** $D_r$ for computing oracle local influence.

That means the oracle label is:

$$
I(M_t, x_t) = \mathcal{L}(D_r \mid M_{t+1}) - \mathcal{L}(D_r \mid M_t),
$$

where $D_r$ is drawn from the FLAN task mixture.

### What FLAN Is

`FLAN` is not a single narrow benchmark. It is an instruction-tuning mixture built from many NLP tasks rewritten into natural-language instruction / response format.

Examples of task types represented in FLAN include:

- question answering,
- natural language inference,
- summarization,
- sentiment and other classification tasks,
- commonsense reasoning,
- translation and text transformation,
- reading comprehension and related instruction-following tasks.

Later FLAN collections broaden this further by mixing many instruction-tuning sources and task templates.

### Why FLAN Matters Here

Using FLAN as $D_r$ means the selector is not being trained to predict:

- "which document most improves plain next-token prediction on web text?"

Instead, it is being trained to predict:

- "which document most improves performance on a broad instruction-following / downstream-task reference distribution?"

That is an important design choice.

It means the oracle favors pretraining examples whose local updates help the current LM on a broad family of downstream-style capabilities, rather than only on raw language-modeling loss.

### Practical Interpretation

So in Group-MATES:

- the **main LM** being updated is the DCLM pretraining model,
- the **oracle measurement set** is FLAN,
- the **relational selector** is trained to predict which pretraining examples are most helpful for improving FLAN performance after a local update.

This makes the data selector more aligned with downstream usefulness than a selector built only around pretraining loss.

## Appendix: Broad Hyperparameter Overview

This section collects the main hyperparameters and implementation choices reported in the paper.

## 1. Main Pretraining Language Models

The paper evaluates Group-MATES on three DCLM settings:

- `400M-4x`
- `1B-1x`
- `3B-1x`

These are decoder-only language models trained from scratch under the standardized DCLM / OpenLM-style recipes.

### Training hyperparameters for the main LMs

| Hyperparameter | 400M-4x | 1B-1x | 3B-1x |
| --- | --- | --- | --- |
| Steps | `31,403` | `54,923` | `107,610` |
| Batch size | `512` | `256` | `256` |
| Sequence length | `2048` | `2048` | `2048` |
| Max learning rate | `3e-3` | `3e-3` | `3e-3` |
| Optimizer | `AdamW` | `AdamW` | `AdamW` |
| Scheduler | `Cosine` | `Cosine` | `Cosine` |

The paper says all experiments are run on `8 GPUs`.

### Token budgets / scales

- `400M-4x`: `32.8B` tokens, `412M` model
- `1B-1x`: `28.0B` tokens, `1.4B` model
- `3B-1x`: `55.9B` tokens, `2.8B` model

Interpretation:

- "`400M` / `1B` / `3B`" refers to the nominal benchmark scale,
- the actual parameter counts reported in tables are `412M`, `1.4B`, and `2.8B`,
- "`4x`" means training longer than the Chinchilla-style `1x` token budget for that size.

## 2. Oracle / Reference Setup

The reference dataset is a `size-128` subset of `FLAN`.

So the oracle label is always:

$$
I(M_t, x_t) = \mathcal{L}(D_r \mid M_{t+1}) - \mathcal{L}(D_r \mid M_t),
$$

where:

- $D_r$ is the sampled FLAN reference set,
- $M_t$ is the current DCLM checkpoint,
- $M_{t+1}$ is the model after a local update on candidate $x_t$.

The paper explicitly says FLAN does not overlap with the final evaluation tasks.

## 3. Relational Data Influence Model

The selector model is initialized from `bge-base-en-v1.5`.

### Encoder details

- Backbone: `bge-base-en-v1.5`
- Embedding used: last hidden state of the first token (`[CLS]`)
- Embedding dimension: `768`
- Similarity function: cosine similarity
- Standalone regression head: $w_o \in \mathbb{R}^{768}$

Because BGE only supports input length `512` but pretraining examples are length `2048`, the paper:

1. splits each training sequence into `4` chunks of length `512`,
2. encodes each chunk separately,
3. averages the four chunk embeddings,
4. uses that averaged vector as the document embedding $h$.

### Training hyperparameters for the relational model

| Hyperparameter | Relational model |
| --- | --- |
| Steps | `3,086` |
| Batch size | `128` |
| Sequence length | `2048` implemented as `512 * 4` |
| Max learning rate | `5e-5` |
| Optimizer | `AdamW` |
| Scheduler | `Cosine` |

Additional training details:

- all parameters are initialized from BGE except $w_o$, which is randomly initialized,
- $\alpha$ and $\beta$ are trainable and initialized to `1`,
- the loss is MSE between predicted influence and **Z-score normalized** oracle influence,
- the validation set contains `1,000` sampled oracle influences.

## 4. Rollout / Oracle-Collection Hyperparameters

These control how training supervision for the relational model is collected.

- Rollout length: `T = 10`
- Rollout width for bootstrapping: `K = 5`
- Number of collected rollout trajectories: `20,000`

The paper first trains from random rollouts, then adds bootstrapped rollouts focusing on high and low predicted influence tails.

### Ablations reported in the paper

- Rollout length ablation: `T in {2, 10, 20}`
- Number of trajectories ablation: `2k, 5k, 10k, 20k, 40k`

The reported final choice is:

- `T = 10`
- `20k` trajectories

because it gives the best or best-efficiency tradeoff in their experiments.

## 5. Selection / Inference Hyperparameters

These control how the trained relational model is used to actually pick pretraining data.

- Number of pretraining stages: `S = 2`
- Selection ratio: $\frac{n}{N} = 50\%$
- Number of clusters for inference: `d = 10,000`
- Clustering method: `k-means`
- Clustering signal: influence-aware similarity derived from the learned relationship weight

Interpretation:

- pretraining is split into `2` stages,
- after one stage, they collect influences, train the selector, and choose data for the next stage,
- they keep half of the available pool at each selection point,
- they use many small clusters so relationship computations stay local and cheap.

### Selection-ratio ablation

The paper reports results for:

- `10%`
- `25%`
- `50%`

and chooses `50%` as the final setting because `10%` loses too much diversity on DCLM, while `25%` and `50%` are comparable but `50%` yields more training tokens.

## 6. Evaluation Setup

The main benchmark is DCLM-Core:

- `22` downstream tasks
- zero-shot and few-shot evaluation depending on task
- grouped into commonsense reasoning, language understanding, reading comprehension, symbolic problem solving, and world knowledge

Primary metric:

- centered accuracy
- averaged over tasks into the `Core score`

## 7. Broad Practical Summary

If you want the shortest useful summary of the important knobs, it is:

- main LM training uses DCLM defaults: `AdamW`, cosine schedule, `2048` tokens, large global batches,
- the selector is a relatively small `BGE-base` model fine-tuned with `batch size 128` and `lr 5e-5`,
- the oracle/reference signal comes from a `128`-example FLAN subset,
- rollout supervision is collected with `T=10`, `K=5`, and `20k` trajectories,
- final data selection uses `2` pretraining stages, `50%` selection ratio, and `10,000` clusters.

These are the main hyperparameters that define the actual Group-MATES pipeline in the paper.
