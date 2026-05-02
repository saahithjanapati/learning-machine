# lecture-notes-18-RL policy_gradient methods

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/lecture-notes-18-RL policy_gradient methods.pdf`
Duplicate equivalents: `lecture-notes-18-RL policy_gradient methods.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 3

## Page 1
### Content
# CMU 10-715 Lecture Notes: RL Policy Gradients
Nihar B. Shah
Carnegie Mellon University

## 1 Introduction to policy gradient methods
We will now discuss "policy gradients" where we perform gradient ascent (to maximize rewards) directly on the policy. We do this when the policies are parameterized, for instance, when the policy space is represented by a fixed neural network architecture and each policy is defined by the neural network parameters. Furthermore, we assume that the policies are stochastic, and that the neural network's output is a probability distribution over the actions. We denote the neural network parameters by $\theta$ and use the notation $\pi_\theta$ to denote the policy specified by neural network parameters $\theta$.

Let us introduce some more notation. For any policy $\pi$, state $s$ and action $a$:
* Let $V_\pi(s)$ denote the discounted cumulative reward under policy $\pi$ when starting from state $s$.
* Let $Q_\pi(s, a)$ denote the discounted cumulative reward under policy $\pi$ when starting from state $s$ but taking action $a$ in the first step.
* Let $A_\pi(s, a) = Q_\pi(s, a) - V_\pi(s)$ denote the "advantage function".

Further, let $\rho_0$ denote the distribution over the initial state. When clear from context, we will use $V_\theta$ etc. as a shorthand for $V_{\pi_\theta}$ etc.

We will make some assumptions.
* **Key assumption:** We can run many simulations or experiments of the RL trajectory to estimate quantities. For instance, for a self-driving car, one can run simulations. For a Ribik's cube-solving robot, one can run many instantiations of solving the cube. In LLMs, policy gradients are used for post-training; here we can generate many prompt-answer pairs (and have them graded by a human or another model to get the rewards). Each such trajectory is called an 'episode.'
* **Simplification:** In some derivations, we will consider each episode to comprise only one step.
* **Mild assumption:** We will not worry about exchangability of the derivative and expectation, and assume they can be exchanged (e.g., arguing that the state and action spaces are finite because the inputs and outputs of a computer have to be quantized and bounded).

## 2 REINFORCE algorithm
For the policy specified by any $\theta$, we let $J(\theta)$ denote the cumulative discounted reward. We will maximize the reward via gradient ascent in the "$\theta$" space. In order to run gradient ascent, we need to compute the gradient $\nabla_\theta J(\theta)$. Let us discuss how to do this. In what follows, we will employ the cute 'log derivative

### Visual Description
Text-only slide.

---
## Page 2
### Content
CMU 10-715 Lecture Notes: RL Policy Gradients

trick' which can be useful in other contexts as well: $\nabla_\theta \pi_\theta(a|s) = \pi_\theta(a|s) \nabla_\theta \log \pi_\theta(a|s)$.

$$
\begin{aligned}
\nabla_\theta J(\theta) &= \nabla_\theta \sum_s \rho_0(s) V_\theta(s) \\
&= \nabla_\theta \sum_s \rho_0(s) \sum_a \pi_\theta(a|s) Q_\theta(s, a) \\
&= \sum_s \rho_0(s) \sum_a (\pi_\theta(a|s) \nabla_\theta Q_\theta(s, a) + Q_\theta(s, a) \nabla_\theta \pi_\theta(a|s)) \\
&= \sum_s \rho_0(s) \sum_a (\pi_\theta(a|s) \nabla_\theta (R(s, a) + \gamma \sum_{s'} T(s, a, s') V_\theta(s')) + Q_\theta(s, a) \pi_\theta(a|s) \nabla_\theta \log \pi_\theta(a|s)) \\
&= \sum_s \rho_0(s) \sum_a \pi_\theta(a|s) (\gamma \sum_{s'} T(s, a, s') \nabla_\theta V_\theta(s') + Q_\theta(s, a) \nabla_\theta \log \pi_\theta(a|s)).
\end{aligned}
$$

This expression can now be completed by recursing on the term $V_\theta(s')$. We won't do the full derivation here, but instead, we will do one simplification that will yield a useful result. Consider a simplified setting where the episode comprises only one step. In this case, we have
$$
\begin{aligned}
\nabla_\theta J(\theta) &= \sum_s \rho_0(s) \sum_a \pi_\theta(a|s) Q_\theta(s, a) \nabla_\theta \log \pi_\theta(a|s) \\
&= \mathbb{E}_{s \sim \rho_0} [\mathbb{E}_{a \sim \pi_\theta} [Q_\theta(s, a) \nabla_\theta \log \pi_\theta(a|s)]].
\end{aligned}
$$
This quantity can be estimated empirically by running several trajectories. The gradient ascent algorithm which uses these gradient updates is called the REINFORCE algorithm. The term $\nabla_\theta \log \pi_\theta$ is called the "score function".

**Variance reduction:** In practice, we don't compute the expectations exactly, but instead sample many trajectories and take their mean to form an estimate of this quantity. However, the variance of this gradient, specifically that of $Q$, can be quite high. To address this problem, we make one important observation. For any $s$,
$$\mathbb{E}_{a \sim \pi_\theta} [\nabla_\theta \log \pi_\theta(a|s)] = \sum_a \pi_\theta(a|s) \frac{\nabla_\theta \pi_\theta(a|s)}{\pi_\theta(a|s)} = \nabla_\theta \sum_a \pi_\theta(a|s) = \nabla_\theta 1 = 0.$$
This implies that $\nabla_\theta J(\theta) = \mathbb{E}_{s \sim \rho_0} [\mathbb{E}_{a \sim \pi_\theta} [(Q_\theta(s, a) - b_\theta(s)) \nabla_\theta \log \pi_\theta(a|s)]]$ for any function $b$ that does not depend on $a$. Choosing $b$ as the value function, we get
$$
\begin{aligned}
\nabla_\theta J(\theta) &= \mathbb{E}_{s \sim \rho_0} [\mathbb{E}_{a \sim \pi_\theta} [(Q_\theta(s, a) - V_\theta(s)) \nabla_\theta \log \pi_\theta(a|s)]] \\
&= \mathbb{E}_{s \sim \rho_0} [\mathbb{E}_{a \sim \pi_\theta} [A_\theta(s, a) \nabla_\theta \log \pi_\theta(a|s)]].
\end{aligned}
$$
This helps reduce the variance when we sample. This is because the $Q$ is now compared to a baseline that is generally correlated with $Q$.

The problem is that the gradients may still be problematic – high variance and unstable updates. The updates may make large jumps to policies that are too good to be true, and hence be unstable and perform poorly. The next algorithm – TRPO – aims to address this.

## 3 Trust Region Policy Optimization (TRPO) algorithm
The derivation of this algorithm uses a theorem due to Langford and Kakade which says that for any pair of policies $\tilde{\pi}$ and $\pi$, it must be that $J(\tilde{\pi}) - J(\pi) = \mathbb{E}_{\rho_0} [\mathbb{E}_{\tilde{\pi}} [\sum_{t=0}^\infty \gamma^t A_\pi(s_t, a_t)]]$. This theorem thus connects the relative rewards under two policies to the advantage function. So now, if we want to take a gradient step in the policy space, if we are currently at policy $\pi$, we should find the direction that maximizes this right hand side. After a series of algebraic manipulations and approximations, we arrive at the following update rule. Letting $\theta_{old}$ denote the weights at the beginning of any iteration, the weight at the end of the iteration are obtained as the solution to the problem:
$$\arg \max_\theta \mathbb{E}_{\rho_0} \left[ \mathbb{E}_{\pi_{\theta_{old}}} \left[ \frac{\pi_\theta(a|s)}{\pi_{\theta_{old}}(a|s)} A_{\pi_{\theta_{old}}}(s, a) \right] \right]$$
$$\text{subject to } \mathbb{E}_{\rho_0} [KL(\pi_{\theta_{old}} || \pi_\theta)] \leq \delta.$$

Nihar B. Shah, Carnegie Mellon University 2

### Visual Description
Text-only slide.

---
## Page 3
### Content
CMU 10-715 Lecture Notes: RL Policy Gradients

Again, all of these are empirically estimated quantities. The objective chooses policy $\pi_\theta$ which puts more mass on actions that have a high advantage over the old policy. This constraint ensures that the updated policy doesn't go too far away from the previous iterate. The optimization program is solved by taking a quadratic approximation of the constraint.

## 4 Proximal Policy Optimization (PPO) algorithm
This performs well but the KL divergence part is computationally expensive. The next idea aims to mitigate this problem. The following algorithm is called Proximal Policy Optimization (PPO). The key idea is to retain the TRPO algorithm, but (i) get rid of the KL constraint since that was computationally expensive; (ii) instead, "clip" the ratio of the new to old policy to bound the amount of update. In particular, PPO uses the following update rule:
$$\arg \max_\theta \mathbb{E}_{\rho_0} \left[ \mathbb{E}_{\pi_{\theta_{old}}} \left[ \min \left( \frac{\pi_\theta(a|s)}{\pi_{\theta_{old}}(a|s)} A_{\pi_{\theta_{old}}}(s, a), \text{CLIP} \left( \frac{\pi_\theta(a|s)}{\pi_{\theta_{old}}(a|s)}, 1 - \epsilon, 1 + \epsilon \right) A_{\pi_{\theta_{old}}}(s, a) \right) \right] \right],$$
where $\epsilon$ is a small positive number, e.g., $\epsilon = 0.2$. This expression seems messy at first, but let us break it down to make it simpler. Let us consider the various cases of the ratio of $\pi$s and $A$:
* Ratio $\frac{\pi_\theta(a|s)}{\pi_{\theta_{old}}(a|s)}$ is within the range $[1 - \epsilon, 1 + \epsilon]$: In this case, the candidate policy $\pi_\theta$ and the old policy put a similar mass on action $a$ in state $s$, and hence we are not concerned. The term inside the expectations in the objective thus simply reduces to $\frac{\pi_\theta(a|s)}{\pi_{\theta_{old}}(a|s)} A_{\pi_{\theta_{old}}}(s, a)$. The intuition for this objective is identical to that in TRPO.
* $A_{\pi_{\theta_{old}}}(s, a) = 0$ means everything is 0.
* $\frac{\pi_\theta(a|s)}{\pi_{\theta_{old}}(a|s)} > 1 + \epsilon$ and $A_{\pi_{\theta_{old}}}(s, a) > 0$. The advantage of action $a$ is positive, which means this is a good action. The new policy has much more mass on this seemingly good action $a$ as compared to the old policy. While this may appear good, we are not comfortable with that since this may be too good to be true, and we may just be overfitting to something else. We thus clip the ratio to $1 + \epsilon$, and the objective inside the expectations just becomes $(1 + \epsilon) A_{\pi_{\theta_{old}}}(s, a)$.
* $\frac{\pi_\theta(a|s)}{\pi_{\theta_{old}}(a|s)} < 1 - \epsilon$ and $A_{\pi_{\theta_{old}}}(s, a) < 0$. The advantage of action $a$ is negative, which means this is a bad action. The new policy has much less mass on this seemingly bad action $a$ as compared to the old policy. While this may appear good, we are not comfortable with that since this may be too good to be true, and we may just be overfitting to something else. We thus clip the ratio to $1 - \epsilon$, and the objective inside the expectations just becomes $(1 - \epsilon) A_{\pi_{\theta_{old}}}(s, a)$.
* If $(\frac{\pi_\theta(a|s)}{\pi_{\theta_{old}}(a|s)} < 1 - \epsilon \text{ and } A_{\pi_{\theta_{old}}}(s, a) > 0)$ or $(\frac{\pi_\theta(a|s)}{\pi_{\theta_{old}}(a|s)} > 1 + \epsilon \text{ and } A_{\pi_{\theta_{old}}}(s, a) < 0)$: The new policy is putting more weight on a bad action or less weight on a good action. We are not concerned about this as it doesn't look like overfitting, and hence we don't tamper with it. The objective thus just reduces to $\frac{\pi_\theta(a|s)}{\pi_{\theta_{old}}(a|s)} A_{\pi_{\theta_{old}}}(s, a)$.

## 5 Group Relative Policy Optimization (GRPO)
Typically used for LLMs. For each state $s$ (i.e., each prompt), we sample $K$ independent actions (i.e., responses) from the current policy: $a_1, a_2, \dots, a_K \sim \pi_{\theta_{old}}(\cdot | s)$, and obtain corresponding scalar rewards $r_i = R(s, a_i), i = 1, \dots, K$. For each sample $i$, we define a baseline as either $b_i(s) = \frac{1}{K} \sum_{j \in [K]} r_j$ or a leave-one-out baseline as $b_i(s) = \frac{1}{K-1} \sum_{j \in [K] \setminus \{i\}} r_j$. We may further normalize this baseline by dividing it by the standard deviation of $r_1, \dots, r_K$. The advantage estimate for that sample is then
$$A_{\pi_{\theta_{old}}}(s, a_i) = r_i - b_i(s).$$
This advantage is then used in the PPO update discussed earlier.

Nihar B. Shah, Carnegie Mellon University 3

### Visual Description
Text-only slide.

---
