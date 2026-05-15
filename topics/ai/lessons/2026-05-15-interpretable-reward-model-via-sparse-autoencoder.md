# Interpretable Reward Model Via Sparse Autoencoder

Source note: [materials/processed/ai/interpretable-reward-model-via-sparse-autoencoder.md](../../../materials/processed/ai/interpretable-reward-model-via-sparse-autoencoder.md)

Related lesson: [SparseRM: Lightweight Preference Modeling With Sparse Autoencoders](2026-05-15-sparserm-lightweight-preference-modeling-sparse-autoencoder.md)

Paper: Shuyi Zhang, Wei Shi, Sihang Li, Jiayi Liao, Hengxing Cai, and Xiang Wang, "Interpretable Reward Model via Sparse Autoencoder," AAAI 2026 Oral. arXiv:2508.08746.

## Table of Contents

1. [Medium-Length Version](#medium-length-version)
2. [Full-Length Version](#full-length-version)
3. [The Research Question](#the-research-question)
4. [SARM In One Picture](#sarm-in-one-picture)
5. [How SARM Is Trained](#how-sarm-is-trained)
6. [Feature Attribution](#feature-attribution)
7. [Preference Manipulation](#preference-manipulation)
8. [RewardBench 2 Results](#rewardbench-2-results)
9. [Ablations](#ablations)
10. [What Is Convincing](#what-is-convincing)
11. [What Is Still Open](#what-is-still-open)
12. [Memory Checklist](#memory-checklist)

## Medium-Length Version

This paper introduces SARM, a Sparse Autoencoder-enhanced Reward Model.

The motivation is simple. Reward models are central to RLHF, but ordinary scalar reward models are opaque. They assign a number to a response, but the number usually does not explain itself. If a reward model says an answer deserves a high score, we want to know why. Was it factuality? Safety? Helpfulness? Style? Refusal behavior? A spurious artifact?

SARM routes reward modeling through sparse autoencoder features. A pretrained SAE maps dense hidden activations into a sparse feature space. A value head aggregates those feature activations into a scalar reward.

That changes the reward model from:

`dense hidden state -> scalar reward`

to:

`dense hidden state -> sparse interpretable features -> scalar reward`

The model is trained on ordinary preference data with the standard pairwise reward-modeling objective. It does not need multidimensional labels such as separate helpfulness, safety, verbosity, or factuality scores.

The paper argues that SARM has two major advantages.

First, it provides feature-level attribution. Because only a small number of SAE features activate for a given response, the reward score can be traced to a sparse set of features. The authors use auto-interpretation to describe features from their activating contexts. Positive features include technical calculation, programming, and ethical-consideration patterns. Negative features include unsafe or misleading content.

Second, it enables targeted preference manipulation. The value head has a weight for each feature. If a safety-related feature is identified, increasing its value-head weight should raise rewards when that feature activates. The paper shows a safety-feature intervention that shifts reward scores rightward for safety-positive target examples while leaving a complement set mostly unchanged.

The paper evaluates SARM on RewardBench 2. The headline result is that SARM-4B gets 73.6 overall, higher than the compared open-source and closed-source baselines in the table, including GPT-4.1 at 72.3, LDL-Reward-Gemma-2-27B at 72.5, and Llama-3.1-Tulu-3-70B-SFT-RM-RB2 at 72.2. SARM-4B is especially strong on safety and focus.

The ablations support the method. Replacing the pretrained SAE encoder with a randomly initialized layer drops overall score from 73.6 to 68.4. Using token-level SAE pretraining instead of sequence-level SAE pretraining reaches 71.5, below full SARM. This suggests that SARM benefits from real sparse features and from sequence-level abstraction.

The central lesson is that interpretability can be built into the reward model's computation, not added afterward. But there is also a risk: if a policy is optimized against feature-weighted rewards, it may learn to manipulate the features. SARM makes the reward easier to inspect and steer, but the next question is whether that makes reward hacking easier to catch or easier to perform.

## Full-Length Version

## The Research Question

The paper asks:

`Can a reward model be accurate, interpretable, and controllable at the level of individual features?`

Traditional scalar reward models are useful because they turn preference data into a reusable score. But the score is opaque. A dense hidden state goes into a value head, and a number comes out.

That opacity is a problem for alignment. If the reward model is wrong, we need to know why. If it favors an unsafe answer, did it miss the danger? Did it overvalue confidence? Did it respond to superficial politeness? Did it learn a dataset artifact?

Multidimensional reward models try to help by scoring attributes such as helpfulness, safety, or verbosity. But they often require expensive multidimensional annotations, and even those attribute scores may not expose the feature-level reason for a reward.

SARM proposes a different path: use sparse autoencoder features as the internal reward basis.

## SARM In One Picture

SARM inserts a pretrained SAE into the reward model.

An ordinary reward model looks like this:

```text
prompt + response -> LLM hidden state -> scalar value head -> reward
```

SARM looks like this:

```text
prompt + response -> LLM hidden state -> SAE sparse features -> value head -> reward
```

The SAE encoder converts the hidden state into sparse feature activations. A linear value head assigns weights to those features and sums them into a scalar reward.

This means the reward can be decomposed:

```text
reward = sum(active feature strength * feature weight)
```

That is the interpretability hook. If a response receives a high reward, the model can show which sparse features contributed positively. If it receives a low reward, the model can show which features contributed negatively.

## How SARM Is Trained

The paper uses a two-stage process.

### Stage 1: SAE Pretraining

The authors train a TopK sparse autoencoder on sequence-level hidden activations from a selected LLM layer.

TopK sparsity means only the largest latent activations are kept. This encourages a compact set of active features per example.

The paper argues that sequence-level hidden states are better suited for reward modeling than token-level activations because reward judgments often depend on whole-response properties.

### Stage 2: Reward Modeling

After SAE pretraining, the SAE encoder is inserted into the reward model. The reward model maps the final-token hidden state into sparse activations and trains a value head on preference pairs.

The objective is standard pairwise reward modeling. Given a preferred response and rejected response, the model should assign the preferred response a higher score.

Unlike multidimensional reward models, SARM does not require labels for separate categories. It learns from ordinary preference pairs.

## Feature Attribution

To interpret features, the paper collects contexts that activate each feature and uses GPT-4o to generate natural-language explanations.

The paper shows positive features and negative features.

Positive features are associated with preferred answers. Examples include:

- calculation and programming;
- structured mathematical reasoning;
- ethical considerations;
- privacy and respectful communication.

Negative features are associated with rejected answers. Examples include unsafe, harmful, or misleading content.

The important part is not only that these features can be named. The value head gives each feature a signed weight. A positively weighted feature increases reward when active. A negatively weighted feature decreases reward when active.

That makes reward assignments more inspectable than ordinary scalar rewards.

## Preference Manipulation

The paper's most interesting experiment is feature-level preference manipulation.

The authors identify a safety-related feature by measuring which feature activates more on chosen safety responses than rejected safety responses. Then they multiply that feature's value-head weight.

Because the feature only contributes when it is active, changing its weight should selectively affect examples that contain that feature.

The paper splits RewardBench 2 examples into:

- a target set: safety queries with chosen responses;
- a complement set: everything else, including non-safety examples and rejected safety responses.

After increasing the safety feature's weight, the target reward distribution shifts rightward. The complement distribution stays mostly unchanged.

This is a stronger claim than ordinary interpretability. The feature is not merely readable; it is a control handle.

## RewardBench 2 Results

SARM is evaluated on RewardBench 2, which includes categories such as factuality, precise instruction following, math, safety, focus, and ties.

The headline table reports:

- SARM-4B: 73.6 overall.
- GPT-4.1: 72.3 overall.
- LDL-Reward-Gemma-2-27B: 72.5 overall.
- Llama-3.1-Tulu-3-70B-SFT-RM-RB2: 72.2 overall.
- Skywork-Llama-8B-v0.2: 71.8 overall.

SARM-4B also reports:

- Factuality: 68.5.
- Precise IF: 42.5.
- Math: 63.9.
- Safety: 91.3.
- Focus: 96.0.
- Ties: 79.6.

The paper's conclusion is that sparse-feature interpretability does not come at the cost of reward-model quality in this benchmark setting.

## Ablations

The ablations are important because they test whether SARM is just adding parameters or actually using meaningful sparse features.

### Random Encoder

Replacing the pretrained SAE encoder with a randomly initialized layer drops overall score from 73.6 to 68.4.

That suggests the learned SAE features matter. The benefit is not only extra capacity.

### Token-Level Versus Sequence-Level SAE

Using token-level SAE pretraining reaches 71.5 overall. That is better than the random encoder but below full SARM.

The authors interpret this as evidence that sequence-level SAE pretraining produces more abstract features suited for reward decisions.

### Layer, Dimension, And Sparsity

The appendix explores SAE layer position, feature dimension, and TopK sparsity. Shallow layers perform poorly. Middle/deeper layers work better. Feature dimension is fairly robust in the tested range, and sparsity changes do not dominate performance.

This supports a practical lesson: for reward models, the feature space should be abstract enough to represent response-level properties.

## What Is Convincing

The paper makes a strong case that SAE features can be integrated directly into reward modeling.

The best evidence is:

- feature-level attribution examples;
- targeted safety-feature manipulation;
- strong RewardBench 2 performance;
- ablations showing that pretrained SAE features matter.

The preference manipulation result is especially useful because it tests whether feature weights behave like control handles.

## What Is Still Open

Several questions remain.

First, feature descriptions are generated by another model. Auto-interpretation can be wrong or incomplete.

Second, sparse features may not be perfectly monosemantic. A safety feature might activate in contexts that are semantically related but normatively different.

Third, changing feature weights may have hidden side effects. The complement-set experiment is reassuring but narrow.

Fourth, RewardBench 2 is still a benchmark. The paper does not fully test what happens when a policy is optimized against SARM over many RL steps.

Fifth, making reward features visible may create new attack surfaces. A model or optimizer could learn to trigger positively weighted features without satisfying the real preference.

The big unresolved question is:

`Does feature-level interpretability make reward optimization safer, or does it simply expose a new set of reward buttons to press?`

## Memory Checklist

- SARM inserts a pretrained SAE into a reward model.
- The reward is computed from sparse feature activations rather than opaque dense activations.
- Feature-level attribution means active sparse features can explain reward contributions.
- The value head's weights can be modified to manipulate preferences.
- A safety-feature intervention shifts target safety rewards while mostly preserving the complement distribution.
- SARM-4B reports 73.6 overall on RewardBench 2.
- Random encoder and token-level SAE ablations perform worse than full SARM.
- Sequence-level SAE features seem better suited for reward modeling than token-level features.
- SARM is promising for interpretable post-training, but policy optimization against feature rewards could still create reward hacking.
