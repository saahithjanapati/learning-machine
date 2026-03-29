# Homework 3: Introduction of Graphical Models and Exact Inference

Source: `materials/archive/S26_10708_HW3_2__1_.pdf`
Duplicate equivalents: `S26_10708_HW3_2__1_.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `MIXED`
Pages: 30

## Page 1
### Content
Homework 3: Introduction of Graphical Models and Exact Inference 10-708

# HOMEWORK 3
# INTRODUCTION OF GRAPHICAL MODELS AND EXACT INFERENCE $^1$

### 10-708 PROBABILISTIC GRAPHICAL MODELS (SPRING 2026)
https://piazza.com/cmu/spring2026/10708/home

**OUT:** March 13th, 2026
**DUE:** March 27th, 2026 11:59 PM ET
**TAs:** James Ngai, Aviv Bick, Justin Lin

*   **Collaboration policy:** The purpose of student collaboration is to facilitate learning, not to circumvent it. Studying the material in groups is strongly encouraged. It is also allowed to seek help from other students in understanding the material needed to solve a particular homework problem, provided no written notes (including code) are shared, or are taken at that time, and provided learning is facilitated, not circumvented. The actual solution must be done by each student alone. The presence or absence of any form of help or collaboration, whether given or received, must be explicitly stated and disclosed in full by all involved. See the Academic Integrity Section on the course site for more information: https://andrejristeski.github.io/10708S26/#:~:text=Academic%20Integrity%20Policies
*   **Late Submission Policy:** See the late submission policy here: https://andrejristeski.github.io/10708S26/#:~:text=Grace%20Day/Late%20Homework%20Policy
*   **Submitting your work to Gradescope:** We use Gradescope (https://www.gradescope.com/courses/1211283/assignments) to collect PDF submissions of open-ended questions on the homework (e.g. mathematical derivations, plots, short answers). The course staff will manually grade your submission, and you’ll receive personalized feedback explaining your final marks. The homework template must be used and can be completed in Latex or by hand. Handwritten submissions must be legible otherwise we will not be able to give credit to your solutions. No changes should be made to the template, boxes and choices **MUST** remain the same size and in the same locations between the template and your completed submission, the document has 30 pages so your submission must contain no more and no less than 30 pages.
*   **Programming Code:** You will also submit your code for the programming questions on the homework to Gradescope, specifically the ’Homework 3 Programming’ submission slot. All code written must be submitted in order for you to get any credit for the written components of the programming section.

$^1$Compiled on Saturday 28$^{th}$ March, 2026 at 03:22

1 of 30

### Visual Description
Text-only slide.

---

## Page 2
### Content
Homework 3: Introduction of Graphical Models and Exact Inference 10-708

# 1 Written Questions [90 pts]

1. (Non-concavity of the mean-field approximation) In this exercise, we will see that the objective that results from a mean-field relaxation can yield a non-concave maximization problem. In general, such objectives will have many local maxima and stationary points, thus will not be easy to optimize.

Consider a simple three variables Ising model with parameter $\theta = [\theta_1, \theta_2, \theta_3, \theta_{12}, \theta_{23}] \in \mathbb{R}^5$:
$$p(\mathbf{x}) \propto \exp (\theta_1x_1 + \theta_2x_2 + \theta_3x_3 + \theta_{12}x_1x_2 + \theta_{23}x_2x_3), \text{ for all } \mathbf{x} = [x_1, x_2, x_3] \in \{-1, 1\}^3.$$

Consider the mean-field approximation:
$$q^* = \text{argmax}_{q \in \mathcal{Q}} H(q) + \mathbb{E}_{\mathbf{x} \sim q}[E_\theta(\mathbf{x})], \tag{1.1}$$
where $E_\theta(\mathbf{x}) = \theta_1x_1 + \theta_2x_2 + \theta_3x_3 + \theta_{12}x_1x_2 + \theta_{23}x_2x_3$, $H$ is the Shannon entropy, and $\mathcal{Q}$ consists of product distributions over $\{1, -1\}^3$, i.e. its density function can be factorized as $q(\mathbf{x}) = q_1(x_1)q_2(x_2)q_3(x_3)$.

(a) (7 points) Let $\mu_1 = \mathbb{E}_q[x_1]$, $\mu_2 = \mathbb{E}_q[x_2]$ and $\mu_3 = \mathbb{E}_q[x_3]$. Show that the objective function (Eqn.(1.1)) can be written as
$$\text{argmax}_{\mu_1, \mu_2, \mu_3 \in (-1,1)} F_\theta(\mu_1, \mu_2, \mu_3), \text{ with}$$
$$F_\theta(\mu_1, \mu_2, \mu_3) = H(q_1) + H(q_2) + H(q_3) + \theta_1\mu_1 + \theta_2\mu_2 + \theta_3\mu_3 + \theta_{12}\mu_1\mu_2 + \theta_{23}\mu_2\mu_3,$$
where $H(q_i) = -\frac{1}{2}(1 + \mu_i) \log \frac{1}{2}(1 + \mu_i) - \frac{1}{2}(1 - \mu_i) \log \frac{1}{2}(1 - \mu_i)$.

> Write $q_i(1) = p_i$ and $q_i(-1) = 1 - p_i$. Then
> $$\mu_i = \mathbb{E}_q[x_i] = p_i - (1 - p_i) = 2p_i - 1, \quad p_i = \frac{1 + \mu_i}{2},$$
> so choosing a product distribution $q(\mathbf{x}) = q_1(x_1)q_2(x_2)q_3(x_3)$ is the same as choosing $(\mu_1, \mu_2, \mu_3) \in (-1, 1)^3$.
> Moreover, the entropy decomposes across the factors of a product distribution:
> $$H(q) = -\sum_{\mathbf{x}} q(\mathbf{x}) \log q(\mathbf{x})$$
> $$= -\sum_{\mathbf{x}} q(\mathbf{x}) \sum_{i=1}^3 \log q_i(x_i) = \sum_{i=1}^3 \left( -\sum_{x_i} q_i(x_i) \log q_i(x_i) \right)$$
> $$= H(q_1) + H(q_2) + H(q_3).$$

2 of 30

### Visual Description
The page contains a homework problem description about mean-field approximation in Ising models. It includes mathematical definitions and a boxed solution area for part (a) showing the derivation of the objective function in terms of means $\mu_i$.

---

## Page 3
### Content
Homework 3: Introduction of Graphical Models and Exact Inference 10-708

> For each factor,
> $$H(q_i) = -p_i \log p_i - (1 - p_i) \log(1 - p_i) = -\frac{1 + \mu_i}{2} \log \frac{1 + \mu_i}{2} - \frac{1 - \mu_i}{2} \log \frac{1 - \mu_i}{2}.$$
> Since $q$ factorizes, mixed moments factor too:
> $$\mathbb{E}_q[x_1x_2] = \mathbb{E}_q[x_1]\mathbb{E}_q[x_2] = \mu_1\mu_2, \quad \mathbb{E}_q[x_2x_3] = \mu_2\mu_3.$$
> Therefore
> $$\mathbb{E}_q[E_\theta(\mathbf{x})] = \theta_1\mu_1 + \theta_2\mu_2 + \theta_3\mu_3 + \theta_{12}\mu_1\mu_2 + \theta_{23}\mu_2\mu_3.$$
> Putting the entropy and energy pieces together,
> $$H(q) + \mathbb{E}_q[E_\theta(\mathbf{x})] = H(q_1) + H(q_2) + H(q_3) + \theta_1\mu_1 + \theta_2\mu_2 + \theta_3\mu_3 + \theta_{12}\mu_1\mu_2 + \theta_{23}\mu_2\mu_3,$$
> which is exactly $F_\theta(\mu_1, \mu_2, \mu_3)$. Therefore, maximizing over $q \in \mathcal{Q}$ is equivalent to maximizing over $\mu_1, \mu_2, \mu_3 \in (-1, 1)$.

3 of 30

### Visual Description
This page continues the solution for part (a) from the previous page, contained within a large box. It shows the final steps of the derivation using entropy and energy terms.

---

## Page 4
### Content
Homework 3: Introduction of Graphical Models and Exact Inference 10-708

(b) (8 points) Assume that $\theta_1 = \theta_2 = \theta_3 = \theta_{23} = 0$. Prove that there exists some $\theta_{12} \in \mathbb{R}$ such that the objective $F_\theta(\mu_1, \mu_2, 0)$ is not a concave function.

*Hint: prove that $F(t, -t, 0)$ is not a concave function for $-1 < t < 1$ and for some $\theta_{12}$.*

> With $\theta_1 = \theta_2 = \theta_3 = \theta_{23} = 0$,
> $$F_\theta(\mu_1, \mu_2, 0) = H(q_1) + H(q_2) + H(q_3) + \theta_{12}\mu_1\mu_2.$$
> Now restrict this to the line $(\mu_1, \mu_2, \mu_3) = (t, -t, 0)$ with $t \in (-1, 1)$. Since $H(q_2) = H(-t) = H(t)$ and $H(q_3) = H(0)$ is constant,
> $$G(t) := F_\theta(t, -t, 0) = 2H(t) + H(0) - \theta_{12}t^2.$$
> So it is enough to show that $G$ is not concave for some $\theta_{12}$, because every line restriction of a concave function must also be concave.
> For the binary entropy in this parameterization,
> $$H(t) = -\frac{1 + t}{2} \log \frac{1 + t}{2} - \frac{1 - t}{2} \log \frac{1 - t}{2},$$
> and differentiating twice yields
> $$H''(t) = -\frac{1}{1 - t^2}.$$
> Hence
> $$G''(t) = 2H''(t) - 2\theta_{12} = -\frac{2}{1 - t^2} - 2\theta_{12}.$$
> Pick, say, $\theta_{12} = -2$. Then at $t = 0$,
> $$G''(0) = -2 - 2(-2) = 2 > 0.$$
> So $G$ is locally convex at 0, which means $G$ is not concave on $(-1, 1)$. Therefore $F_\theta(\mu_1, \mu_2, 0)$ is not concave for this choice of $\theta_{12}$.

4 of 30

### Visual Description
The page contains part (b) of the first question and its solution in a large box. The solution uses calculus (second derivatives) to prove non-concavity.

---

## Page 5
### Content
Homework 3: Introduction of Graphical Models and Exact Inference 10-708

2. As discussed in lecture, we know that for undirected graphical models, the local polytope constitutes an “outer approximation” of the marginal polytope. We showed the two polytopes are the same when the graph doesn’t contain cycles (i.e. is a tree), but for an arbitrary undirected graph $G$, a valid set of local marginals $\{q_C(\mathbf{x}_C)\}$ isn’t always globally valid. That is, for an arbitrary set of local marginals $\{q_C(\mathbf{x}_C)\}$, we cannot always find a distribution $\tilde{q}$ over $\mathbf{X}$, such that for every clique $C$, $\tilde{q}_C(\mathbf{x}_C) = q_C(\mathbf{x}_C)$.

In this question, we’re going to see a natural family of additional inequalities that are also satisfied by valid marginals.

(a) (10 points) Consider a pairwise undirected graphical model with vertices $V$ and edges $E$. We’re going to further assume that every variable $X_i$ only takes values $\{-1, 1\}$ for simplicity.

Consider any cycle $C \subseteq E$, that is a set of edges $\{(v_1, v_2), (v_2, v_3), \dots, (v_{m-1}, v_m), (v_m, v_1)\}$, and any $F \subseteq C$, s.t. $|F|$ is odd. Show that if $\{q_e\}_e$ are valid marginals, that is there is a distribution $\tilde{q}$, s.t. for every edge in the graph, $\tilde{q}_e(\mathbf{x}_e) = q_e(\mathbf{x}_e)$, the following inequality holds for $\{q_e\}$:
$$\sum_{(X_i, X_j) \in C \setminus F} (q_{ij}(x_i = 1, x_j = -1) + q_{ij}(x_i = -1, x_j = 1))$$
$$+ \sum_{(X_i, X_j) \in F} (q_{ij}(x_i = 1, x_j = 1) + q_{ij}(x_i = -1, x_j = -1)) \ge 1,$$
*Hint: as the assignment for each variable can be either 1 or -1, think about how many times the assignment can change when we traverse the cycle in the order $(\mathbf{X}_1, \mathbf{X}_2, \dots, \mathbf{X}_m, \mathbf{X}_1)$. The argument made in lecture would also help here.*

> For a fixed global assignment $\mathbf{x}$, define
> $$Y(\mathbf{x}) = \sum_{(i,j) \in C \setminus F} \mathbf{1}[x_i \neq x_j] + \sum_{(i,j) \in F} \mathbf{1}[x_i = x_j].$$
> I claim that $Y(\mathbf{x}) \ge 1$ for every assignment.
> Indeed, if $Y(\mathbf{x}) = 0$, then every edge in $C \setminus F$ has equal endpoints and every edge in $F$ has different endpoints. So when we walk once around the cycle, the sign changes exactly on the edges in $F$, i.e. exactly $|F|$ times.

5 of 30

### Visual Description
The page introduces Question 2 about local and marginal polytopes. It presents part (a) regarding cycle inequalities and starts the solution in a box, discussing sign changes around a cycle.

---

## Page 6
### Content
Homework 3: Introduction of Graphical Models and Exact Inference 10-708

> This is impossible: on a cycle, one must return to the starting value, so the number of sign changes around the whole loop has to be even. Since $|F|$ is odd, we get a contradiction. Hence $Y(\mathbf{x}) \ge 1$ for all $\mathbf{x}$.
> Now take expectation under the valid global distribution $\tilde{q}$:
> $$\mathbb{E}_{\tilde{q}}[Y(\mathbf{x})] \ge 1.$$
> Expanding the expectation gives
> $$\mathbb{E}_{\tilde{q}}[Y(\mathbf{x})] = \sum_{(i,j) \in C \setminus F} \tilde{q}(x_i \neq x_j) + \sum_{(i,j) \in F} \tilde{q}(x_i = x_j)$$
> $$= \sum_{(i,j) \in C \setminus F} (q_{ij}(1, -1) + q_{ij}(-1, 1)) + \sum_{(i,j) \in F} (q_{ij}(1, 1) + q_{ij}(-1, -1)),$$
> because the pairwise marginals of $\tilde{q}$ are exactly the given $q_{ij}$. So the required cycle inequality follows.

(b) (8 points) Unfortunately, even these cycle constraints are not all the constraints in the marginal polytope. You’ll now see an example where the cycle polytope strictly contains the marginal polytope.

Consider a fully connected graph with 5 variables $\mathbf{X}_1, \dots, \mathbf{X}_5$, and let the pairwise marginals be
$$q_{ij}(\mathbf{X}_i = 1, \mathbf{X}_j = 1) = q_{ij}(\mathbf{X}_i = -1, \mathbf{X}_j = -1) = \frac{1}{6}$$
$$q_{ij}(\mathbf{X}_i = -1, \mathbf{X}_j = 1) = q_{ij}(\mathbf{X}_i = 1, \mathbf{X}_j = -1) = \frac{1}{3}$$
for all pairs of $\mathbf{X}_i$ and $\mathbf{X}_j$. Show that
1. All the cycle inequalities are satisfied, and
2. there is no distribution $\tilde{q}$ such that for all $x_i$ and $x_j$, $\tilde{q}_{ij}(x_i, x_j) = q_{ij}(x_i, x_j)$.

*Hint: to show that the distribution $\tilde{q}$ doesn’t exist, consider maximizing the objective function $\sum_{i,j} \delta(x_i \neq x_j)$, compare the solution for valid marginals, and the expected value under $q$.*

6 of 30

### Visual Description
This page completes the solution for 2(a) and introduces part (b), which asks to show that cycle constraints are insufficient to define the marginal polytope using a 5-variable complete graph example.

---

## Page 7
### Content
Homework 3: Introduction of Graphical Models and Exact Inference 10-708

> First, every pair disagrees with probability
> $$q_{ij}(1, -1) + q_{ij}(-1, 1) = \frac{1}{3} + \frac{1}{3} = \frac{2}{3},$$
> and agrees with probability $\frac{1}{3}$.
> **1. All cycle inequalities hold.** Take any cycle $C$ of length $m$ and any odd $F \subseteq C$. The left-hand side becomes
> $$\sum_{e \in C \setminus F} \frac{2}{3} + \sum_{e \in F} \frac{1}{3} = \frac{2(m - |F|) + |F|}{3} = \frac{2m - |F|}{3}.$$
> If $m$ is odd, the smallest value happens at $|F| = m$, giving $m/3 \ge 1$ since $m \ge 3$. If $m$ is even, the largest odd choice is $|F| = m - 1$, giving $(m + 1)/3 \ge 5/3 > 1$. So every cycle inequality is satisfied.
> **2. No global distribution can realize these marginals.** Let
> $$S(\mathbf{x}) = \sum_{1 \le i < j \le 5} \mathbf{1}[x_i \neq x_j],$$
> the number of disagreeing pairs in the complete graph $K_5$.
> For any deterministic assignment with $r$ variables equal to 1 and $5 - r$ equal to -1, the number of disagreements is
> $$S(\mathbf{x}) = r(5 - r) \le 6,$$
> with the maximum value 6 attained at the split $r = 2$ or $r = 3$. Therefore, for any global distribution $\tilde{q}$ on $\mathbf{x}$,
> $$\mathbb{E}_{\tilde{q}}[S(\mathbf{x})] \le 6.$$
> But under the proposed pairwise marginals,
> $$\mathbb{E}[S(\mathbf{x})] = \sum_{1 \le i < j \le 5} q_{ij}(x_i \neq x_j) = \binom{5}{2} \cdot \frac{2}{3} = 10 \cdot \frac{2}{3} = \frac{20}{3} > 6.$$
> That contradicts the upper bound above. So there is no distribution $\tilde{q}$ whose pairwise marginals are these $q_{ij}$.

3. (Convergence and Non-convergence of the loopy belief propagation algorithm) In this question, we will see loopy belief propagation (LBP) algorithm can sometimes converge, and sometimes not. (Of course, even if it does converge, there’s no guarantee it’ll converge to the correct marginals.)

Consider a pairwise undirected graphical model (UGM) defined on a graph $G = (V, E)$, where $V$ denotes a set of random variables with domain $\mathcal{X}$ and $E$ denotes a set of edges. The UGM can be

7 of 30

### Visual Description
The page contains the solution for 2(b) in a box, proving that the proposed marginals satisfy cycle inequalities but cannot be realized by a global distribution. It then starts Question 3 about Loopy Belief Propagation.

---

## Page 8
### Content
Homework 3: Introduction of Graphical Models and Exact Inference 10-708

factorized as:
$$p(\mathbf{X} = \mathbf{x}) = \frac{1}{Z_G} \prod_{(i,j) \in E} \Phi_{i,j}(x_i, x_j),$$
where $Z_G$ is the partition function of this UGM. Next, the LBP algorithm for the pairwise UGM can be characterized as following: given number of iterations $T$, initial messages $m_{j \to i, 0}(x)$, $m_{i \to j, 0}(x)$ for all $(i, j) \in E$ and for all $x \in \mathcal{X}$.

1: **procedure** LBP($G, T$, initial messages):
2: &nbsp;&nbsp;&nbsp;&nbsp;**for** $t \in (1 \dots T)$ **do**
3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**for** $(i, j) \in E$ **do**
4: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**for** $x_i \in \mathcal{X}$ **do**
5: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$m_{j \to i, t}(x_i) \leftarrow \sum_{x_j \in \mathcal{X}} \Phi_{i,j}(x_i, x_j) \prod_{k \in N(j) \setminus i} m_{k \to j, t-1}(x_j)$.
6: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Normalize $m_{j \to i, t}(x)$ for all $x \in \mathcal{X}$ so that $\sum_{x \in \mathcal{X}} m_{j \to i, t}(x) = 1$.
7: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**for** $x_j \in \mathcal{X}$ **do**
8: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$m_{i \to j, t}(x_j) \leftarrow \sum_{x_i \in \mathcal{X}} \Phi_{i,j}(x_i, x_j) \prod_{k \in N(i) \setminus j} m_{k \to i, t-1}(x_i)$.
9: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Normalize $m_{i \to j, t}(x)$ for all $x \in \mathcal{X}$ so that $\sum_{x \in \mathcal{X}} m_{i \to j, t}(x) = 1$.
10: &nbsp;&nbsp;&nbsp;**Return** $m_{j \to i, T}$ and $m_{i \to j, T}$ for all $(i, j) \in E$

Ideally, we set the number of iterations $T$ large enough so that all messages converge to some fixed point. After they converge, we can calculate the marginals using the following formula:
$$\hat{P}_T(X_i = x_i) \propto \prod_{k \in N(i)} m_{k \to i, T}(x_i).$$
Now assume that we aim to use LBP to calculate the marginal distribution. Consider an undirected graphical model $G = (V, E)$, where the node set $V = \{1, 2, \dots, n\}$ represents $n$ binary random variables $X_1, \dots, X_n \in \{0, 1\}$ and the edge set is $E = \{(1, 2), \dots, (n - 1, n), (n, 1)\}$. Therefore, these variables form a single cycle consisting of edges between $i$ and $i + 1$ for all $1 \le i \le n - 1$ and between 1 and $n$. The potential function for each edge is
$$\Phi_{i,j}(X_i = x_i, X_j = x_j) = \begin{cases} 1 & , \text{if } x_i = x_j \\ \epsilon & , \text{otherwise.} \end{cases} \text{ for all } (i, j) \in E.$$

(a) (2 points) **Numerical Answer:** Assume that $
## Page 9
### Content
Homework 3: Introduction of Graphical Models and Exact Inference 10-708

Because all initial messages are identical and every edge uses the same potential, induction shows that at every iteration all directed messages remain identical. Thus we may write
$$m_{i \to j,t}(0) = p_t, \quad m_{i \to j,t}(1) = 1 - p_t$$
for every directed edge $(i, j)$.
Consider the update of a single message. Since each node has exactly one incoming message besides the target edge,
$$\tilde{m}_{i \to j,t}(0) = \Phi(0, 0)p_{t-1} + \Phi(1, 0)(1 - p_{t-1}) = p_{t-1} + \epsilon(1 - p_{t-1}),$$
$$\tilde{m}_{i \to j,t}(1) = \Phi(0, 1)p_{t-1} + \Phi(1, 1)(1 - p_{t-1}) = \epsilon p_{t-1} + (1 - p_{t-1}).$$
The normalizer is $(1 + \epsilon)$, so
$$p_t = \frac{\epsilon + (1 - \epsilon)p_{t-1}}{1 + \epsilon}.$$
Rearranging,
$$p_t - \frac{1}{2} = \frac{1 - \epsilon}{1 + \epsilon} \left( p_{t-1} - \frac{1}{2} \right).$$
Thus the hint is satisfied with
$$C_1 = \frac{1}{2}, \quad C_2 = \frac{1 - \epsilon}{1 + \epsilon} \in (0, 1).$$
Hence $p_t \to \frac{1}{2}$, and therefore every message converges to $(\frac{1}{2}, \frac{1}{2})$.
Finally, the belief at node 1 is
$$\hat{P}_T(X_1 = 0) \propto p_T^2, \quad \hat{P}_T(X_1 = 1) \propto (1 - p_T)^2.$$
Thus
$$\hat{P}_T(X_1 = 0) = \frac{p_T^2}{p_T^2 + (1 - p_T)^2} \to \frac{1}{2}, \quad \hat{P}_T(X_1 = 1) \to \frac{1}{2}.$$
By part (a), these are exactly the true marginals.

(c) (8 points) Assume that $\epsilon = 0$ and initial messages are positive and normalized, i.e.
$$m_{j \to i,0}(0) + m_{j \to i,0}(1) = 1 \text{ for all } (i, j) \text{ or } (j, i) \in E.$$
Prove that if the initial messages for all edges are not identical, i.e. there exist $(i_1, j_1), (i_2, j_2) \in E$ satisfying $m_{j_1 \to i_1,0}(0) \neq m_{j_2 \to i_2,0}(0)$ and $m_{i_1 \to j_1,0}(0) \neq m_{i_2 \to j_2,0}(0)$, the messages do not converge.

9 of 30

### Visual Description
The page contains a large rectangular box filled with mathematical derivations and text explaining the convergence of messages in a graphical model. Below the box is a new problem part (c) asking for a proof of non-convergence under specific conditions. The layout is clean and academic.

---
## Page 10
### Content
Homework 3: Introduction of Graphical Models and Exact Inference 10-708

When $\epsilon = 0$, the edge potential reduces to
$$\Phi_{i,j}(x_i, x_j) = \mathbf{1}[x_i = x_j].$$
So the update becomes especially simple. If $k$ is the other neighbor of $i$, then
$$m_{i \to j,t}(0) \propto \Phi(0, 0)m_{k \to i,t-1}(0) + \Phi(1, 0)m_{k \to i,t-1}(1) = m_{k \to i,t-1}(0),$$
$$m_{i \to j,t}(1) \propto \Phi(0, 1)m_{k \to i,t-1}(0) + \Phi(1, 1)m_{k \to i,t-1}(1) = m_{k \to i,t-1}(1).$$
These already sum to 1, so normalization does nothing. Thus each message copies the previous message from the preceding edge.
Let
$$u_{i,t} := m_{i \to i+1,t}(0), \quad v_{i,t} := m_{i+1 \to i,t}(0),$$
with indices modulo $n$. Then
$$u_{i,t} = u_{i-1,t-1}, \quad v_{i,t} = v_{i+1,t-1}.$$
So the clockwise messages $\{u_{i,t}\}_i$ rotate one step each iteration, and the counterclockwise messages $\{v_{i,t}\}_i$ do the same in the opposite direction. In particular,
$$u_{i,t+n} = u_{i,t}, \quad v_{i,t+n} = v_{i,t},$$
so every message sequence is periodic with period dividing $n$.
Now suppose the messages converged. A convergent periodic sequence must eventually be constant, so each $u_{i,t}$ would have to be the same for all $t$, which forces
$$u_{1,0} = u_{2,0} = \dots = u_{n,0}.$$
Likewise convergence of the reverse-direction messages forces
$$v_{1,0} = v_{2,0} = \dots = v_{n,0}.$$
But the hypothesis says the initial messages are *not* identical in either direction: there exist two edges with different $m_{j \to i,0}(0)$ values and two edges with different $m_{i \to j,0}(0)$ values. So at least one periodic orbit has more than one distinct value, which means it cannot converge.
Therefore the messages do not converge when $\epsilon = 0$ and the initial edge messages are not all identical.

10 of 30

### Visual Description
The page contains a large rectangular box with a mathematical proof. The proof uses equations and logical reasoning to show that messages in a specific graphical model setup will be periodic and thus won't converge if initial values are non-identical. Text-heavy with interspersed formulas.

---
## Page 11
### Content
Homework 3: Introduction of Graphical Models and Exact Inference 10-708

4. (Bayesian Hidden Markov Models) In this question, we will study Bayesian Hidden Markov Models (HMMs) with two states, and estimate the posterior distribution of the initial state's probability vector $\pi$, the state transition matrix $\mathbf{A}$, and the latent sequence $\mathbf{z}_{1:T}$ with mean-field approximation.

We begin by defining a Hidden Markov Model with two latent states where the generative process is defined as follows.

![Bayesian Hidden Markov Model Diagram](diagram_placeholder)
Figure 1.1: Bayesian Hidden Markov Model

Let the initial (unknown) state probability vector $\pi = (\pi_1, \pi_2)$, with $\pi_1 + \pi_2 = 1$, be drawn from a Dirichlet prior with (known) hyperparameter $\alpha = (\alpha_1, \alpha_2)$ as,
$$p(\pi) = \text{Dir}(\pi \mid \alpha), \quad \alpha = (\alpha_1, \alpha_2).$$
Then the first (unknown) latent $z_1 \in \{1, 2\}$ is drawn from a Bernoulli distribution with parameter $\pi$ as,
$$p(z_1 = 1 \mid \pi) = \pi_1$$
$$p(z_1 = 2 \mid \pi) = \pi_2$$
Next, we define the (unknown) state transition matrix $\mathbf{A} \in \mathbb{R}^{2 \times 2}$, where each row $i$, $\mathbf{A}_i = (a_{i1}, a_{i2})$, represents the transition probabilities from state $i$ to the next state. Note that the sum of each row of $\mathbf{A}$ is 1. Formally, for time steps $t \geq 2$, the latent state $z_t$ is generated as,
$$p(z_t = j \mid z_{t-1} = i, \mathbf{A}) = a_{ij}, \quad t \in \{2, \dots, T\}; i, j \in \{1, 2\}.$$
We assume a prior on $\mathbf{A}$ such that each row $\mathbf{A}_i$ is independently drawn from a Dirichlet distribution with a (known) hyperparameter $\beta = (\beta_1, \beta_2)$.
$$p(\mathbf{A}_i) = \text{Dir}(\mathbf{A}_i \mid \beta), \quad i \in \{1, 2\},$$
Finally, conditioned on the latent state $z_t = i$, the observation $x_t$ is sampled from a Gaussian distribution with (known) mean $\mu_i$ and variance $\sigma^2$,
$$p(x_t \mid z_t = i) = \mathcal{N}(x_t \mid \mu_i, \sigma^2), \quad t = 1, \dots, T.$$

11 of 30

### Visual Description
The page introduces a Bayesian Hidden Markov Model. It features a graphical model diagram (Figure 1.1) showing the dependencies between hyperparameters $\alpha, \beta$, parameters $\pi, \mathbf{A}$, latent states $z_1, z_2, \dots, z_T$, and observations $x_1, x_2, \dots, x_T$. The diagram uses circles for variables and arrows for conditional dependencies, with a plate notation for the observations and latent states. The rest of the page defines the probability distributions for each component of the model.

---
## Page 12
### Content
Homework 3: Introduction of Graphical Models and Exact Inference 10-708

The joint distribution over $\mathbf{x}_{1:T}, \mathbf{z}_{1:T}, \pi$, and $\mathbf{A}$ is given by:
$$p(\mathbf{x}_{1:T}, \mathbf{z}_{1:T}, \pi, \mathbf{A}) = p(\pi) p(z_1 \mid \pi) \prod_{i=1}^2 p(\mathbf{A}_i) \prod_{t=2}^T p(z_t \mid z_{t-1}, \mathbf{A}) \prod_{t=1}^T p(x_t \mid z_t).$$
In this problem, we wish to approximate the posterior $p(\pi, \mathbf{A}, \mathbf{z}_{1:T} \mid \mathbf{x}_{1:T})$. For this, we will assume a mean-field approximation distribution $q$ that factorizes as,
$$q(\pi, \mathbf{A}, \mathbf{z}_{1:T}) = q(\pi) q(\mathbf{A}) \prod_{t=1}^T q(z_t),$$
where,
1. $q(\pi) = \text{Dir}(\pi \mid \gamma)$, with parameters $\gamma = (\gamma_1, \gamma_2)$,
2. For $i = 1, 2, q(\mathbf{A}_i) = \text{Dir}(\mathbf{A}_i \mid \delta_i)$, with parameters $\delta_i = (\delta_{i1}, \delta_{i2})$,
3. For each $t, q(z_t)$ is a categorical distribution with parameters $\phi_t = (\phi_t(1), \phi_t(2))$.

We will find the optimal variational distribution (in particular, learning the parameters $\gamma, \delta_1, \delta_2, \{\phi_t\}_{t=1}^T$) by maximizing the variational formulation:
$$q^*(\pi, \mathbf{A}, \mathbf{z}_{1:T}) = \arg \max_{q \in \mathcal{Q}} \left[ H(q(\pi, \mathbf{A}, \mathbf{z}_{1:T})) + \mathbb{E}_q [\ln p(\mathbf{x}_{1:T}, \mathbf{z}_{1:T}, \pi, \mathbf{A})] \right].$$
Suppose we are using block CAVI (Coordinate Ascent Variational Inference) to find the optimal parameters and latents. We update the parameters in an alternate optimization procedure as follows:
$$q(\pi) \propto \exp \left( \mathbb{E}_{q(\mathbf{A}, \mathbf{z}_{1:T})} [\ln p(\mathbf{x}_{1:T}, \mathbf{z}_{1:T}, \pi, \mathbf{A})] \right),$$
$$q(\mathbf{A}) \propto \exp \left( \mathbb{E}_{q(\pi, \mathbf{z}_{1:T})} [\ln p(\mathbf{x}_{1:T}, \mathbf{z}_{1:T}, \pi, \mathbf{A})] \right),$$
$$q(z_t) \propto \exp \left( \mathbb{E}_{q(\pi, \mathbf{A}, \mathbf{z}_{-t})} [\ln p(\mathbf{x}_{1:T}, \mathbf{z}_{1:T}, \pi, \mathbf{A})] \right), \quad t = \{1, \dots, T\},$$
where $\mathbf{z}_{-t}$ denotes the set of latent states excluding $z_t$. We ask you to derive these updates.

*Hint for part (c): If you have a Dirichlet distribution with parameters $\delta_1, \delta_2, \dots, \delta_K$, then the expectation of $\ln a_i$ (where $a_i$ is the $i$-th component of the sampled probability vector) is given by,*
$$\mathbb{E}[\ln a_i] = \psi(\delta_i) - \psi \left( \sum_{j=1}^K \delta_j \right),$$
*with $\psi(x)$ being the digamma function.*

12 of 30

### Visual Description
Text-only slide. It presents the mathematical framework for variational inference in the Bayesian HMM, including the joint distribution, the mean-field factorization, the variational objective, and the CAVI update rules.

---
## Page 13
### Content
Homework 3: Introduction of Graphical Models and Exact Inference 10-708

(a) (5 points) Derive the update formula for the parameters of $q(\pi)$.
Only the terms involving $\pi$ matter:
$$\ln p(\mathbf{x}_{1:T}, \mathbf{z}_{1:T}, \pi, \mathbf{A}) = \ln p(\pi) + \ln p(z_1 \mid \pi) + \text{const.}$$
For a 2-dim Dirichlet prior,
$$\ln p(\pi) = \sum_{i=1}^2 (\alpha_i - 1) \ln \pi_i + \text{const,}$$
and
$$\ln p(z_1 \mid \pi) = \sum_{i=1}^2 \mathbf{1}[z_1 = i] \ln \pi_i.$$
Taking the expectation over $q(\mathbf{A}, \mathbf{z}_{1:T})$ gives
$$\ln q^*(\pi) = \mathbb{E}[\ln p(\pi) + \ln p(z_1 \mid \pi)] + \text{const}$$
$$= \sum_{i=1}^2 (\alpha_i - 1) \ln \pi_i + \sum_{i=1}^2 \mathbb{E}[\mathbf{1}[z_1 = i]] \ln \pi_i + \text{const}$$
$$= \sum_{i=1}^2 (\alpha_i - 1 + \phi_1(i)) \ln \pi_i + \text{const.}$$
That is exactly the log-density of a Dirichlet. So
$$q(\pi) = \text{Dir}(\pi \mid \gamma), \quad \gamma_i = \alpha_i + \phi_1(i), \quad i \in \{1, 2\}.$$
Thus the prior pseudo-counts receive one additional soft count from the variational posterior of $z_1$.

13 of 30

### Visual Description
The page contains a large rectangular box with the derivation for the variational update of the parameter $\pi$. It shows the step-by-step mathematical process from the joint log-likelihood to the final Dirichlet update rule.

---
## Page 14
### Content
Homework 3: Introduction of Graphical Models and Exact Inference 10-708

(b) (5 points) Derive the update formula for the parameters of $q(\mathbf{A})$.
Keep only the terms involving $\mathbf{A}$:
$$\ln p(\mathbf{x}_{1:T}, \mathbf{z}_{1:T}, \pi, \mathbf{A}) = \sum_{i=1}^2 \ln p(\mathbf{A}_i) + \sum_{t=2}^T \ln p(z_t \mid z_{t-1}, \mathbf{A}) + \text{const.}$$
Using the Dirichlet prior row by row,
$$\ln p(\mathbf{A}_i) = \sum_{j=1}^2 (\beta_j - 1) \ln a_{ij} + \text{const,}$$
and
$$\ln p(z_t \mid z_{t-1}, \mathbf{A}) = \sum_{i=1}^2 \sum_{j=1}^2 \mathbf{1}[z_{t-1} = i] \mathbf{1}[z_t = j] \ln a_{ij}.$$
Now take expectation over $q(\pi, \mathbf{z}_{1:T})$:
$$\ln q^*(\mathbf{A}) = \sum_{i=1}^2 \sum_{j=1}^2 (\beta_j - 1) \ln a_{ij} + \sum_{t=2}^T \sum_{i=1}^2 \sum_{j=1}^2 \mathbb{E}[\mathbf{1}[z_{t-1} = i] \mathbf{1}[z_t = j]] \ln a_{ij} + \text{const.}$$
Because the mean-field posterior factorizes over $z_{t-1}$ and $z_t$,
$$\mathbb{E}[\mathbf{1}[z_{t-1} = i] \mathbf{1}[z_t = j]] = \phi_{t-1}(i) \phi_t(j).$$
So
$$\ln q^*(\mathbf{A}) = \sum_{i=1}^2 \sum_{j=1}^2 \left( \beta_j - 1 + \sum_{t=2}^T \phi_{t-1}(i) \phi_t(j) \right) \ln a_{ij} + \text{const.}$$
Hence each row stays Dirichlet:
$$q(\mathbf{A}) = \prod_{i=1}^2 \text{Dir}(\mathbf{A}_i \mid \delta_i), \quad \delta_{ij} = \beta_j + \sum_{t=2}^T \phi_{t-1}(i) \phi_t(j).$$
Thus $\delta_{ij}$ equals the prior parameter plus the expected number of transitions $i \to j$.

14 of 30

### Visual Description
The page contains a large rectangular box with the derivation for the variational update of the transition matrix $\mathbf{A}$. It details the mathematical steps to show that the variational posterior for each row of $\mathbf{A}$ is also a Dirichlet distribution.

---
## Page 15
### Content
Homework 3: Introduction of Graphical Models and Exact Inference 10-708

(c) (10 points) Derive the update formula for the parameters of $q(z_t)$.
For $q(z_t)$, only the factors touching $z_t$ survive. It is convenient to define
$$\bar{\pi}_i := \mathbb{E}[\ln \pi_i] = \psi(\gamma_i) - \psi(\gamma_1 + \gamma_2),$$
and
$$\bar{a}_{ij} := \mathbb{E}[\ln a_{ij}] = \psi(\delta_{ij}) - \psi(\delta_{i1} + \delta_{i2}).$$
Also write the emission log-likelihood as
$$\ell_t(i) := \ln \mathcal{N}(x_t \mid \mu_i, \sigma^2).$$
**Case 1:** $t = 1$. The relevant terms are
$$\ln p(z_1 \mid \pi) + \ln p(x_1 \mid z_1) + \ln p(z_2 \mid z_1, \mathbf{A}).$$
Therefore, for $i \in \{1, 2\}$,
$$\ln q^*(z_1 = i) = \ell_1(i) + \mathbb{E}[\ln \pi_i] + \sum_{j=1}^2 \mathbb{E}[\mathbf{1}[z_2 = j]] \mathbb{E}[\ln a_{ij}] + \text{const}$$
$$= \ell_1(i) + \bar{\pi}_i + \sum_{j=1}^2 \phi_2(j) \bar{a}_{ij} + \text{const.}$$

15 of 30

### Visual Description
The page contains a large rectangular box starting the derivation for the variational update of the latent states $z_t$. It defines auxiliary variables $\bar{\pi}_i$, $\bar{a}_{ij}$, and $\ell_t(i)$ and then specifically derives the update for the first time step $t=1$.

---
## Page 16
### Content
Homework 3: Introduction of Graphical Models and Exact Inference 10-708

**Case 2:** $1 < t < T$. Then the relevant terms are
$$\ln p(z_t \mid z_{t-1}, \mathbf{A}) + \ln p(x_t \mid z_t) + \ln p(z_{t+1} \mid z_t, \mathbf{A}).$$
So for $i \in \{1, 2\}$,
$$\ln q^*(z_t = i) = \ell_t(i) + \sum_{a=1}^2 \mathbb{E}[\mathbf{1}[z_{t-1} = a]] \mathbb{E}[\ln a_{ai}]$$
$$+ \sum_{b=1}^2 \mathbb{E}[\mathbf{1}[z_{t+1} = b]] \mathbb{E}[\ln a_{ib}] + \text{const}$$
$$= \ell_t(i) + \sum_{a=1}^2 \phi_{t-1}(a) \bar{a}_{ai} + \sum_{b=1}^2 \phi_{t+1}(b) \bar{a}_{ib} + \text{const.}$$
**Case 3:** $t = T$. There is no outgoing transition term, so
$$\ln q^*(z_T = i) = \ell_T(i) + \sum_{a=1}^2 \phi_{T-1}(a) \bar{a}_{ai} + \text{const.}$$
In all three cases, the update has the same softmax form:
$$\phi_t(i) = q(z_t = i) = \frac{\exp(s_t(i))}{\sum_{r=1}^2 \exp(s_t(r))},$$
where $s_t(i)$ is the corresponding score from the expressions above.

16 of 30

### Visual Description
The page contains a large rectangular box completing the derivation for the variational update of $z_t$. It covers the intermediate time steps (Case 2) and the final time step (Case 3), concluding with a general softmax formula for the variational parameters $\phi_t(i)$.
## Page 17
### Content
Homework 3: Introduction of Graphical Models and Exact Inference 10-708

The final coordinate updates may therefore be written compactly as

$$\phi_1(i) \propto \exp \left( \ell_1(i) + \bar{\pi}_i + \sum_{j=1}^2 \phi_2(j)\bar{a}_{ij} \right),$$

$$\phi_t(i) \propto \exp \left( \ell_t(i) + \sum_{a=1}^2 \phi_{t-1}(a)\bar{a}_{ai} + \sum_{b=1}^2 \phi_{t+1}(b)\bar{a}_{ib} \right), \quad 1 < t < T,$$

$$\phi_T(i) \propto \exp \left( \ell_T(i) + \sum_{a=1}^2 \phi_{T-1}(a)\bar{a}_{ai} \right).$$

After normalizing each two-dimensional vector $\phi_t$, we are done.
Equivalently, each latent state is updated by combining
1. the local Gaussian evidence for $x_t$,
2. the expected incoming transition score, and
3. the expected outgoing transition score,
with the special case $t = 1$ using the prior over $\pi$ instead of an incoming transition.

17 of 30
### Visual Description
The slide contains mathematical formulas for coordinate updates $\phi_1(i)$, $\phi_t(i)$, and $\phi_T(i)$, followed by a brief explanation and a numbered list of three points.

---
## Page 18
### Content
Homework 3: Introduction of Graphical Models and Exact Inference 10-708

5. (Variance of REINFORCE and reparametrization trick) We will consider now the variance of the two estimators introduced for calculating gradients of the VAE loss: REINFORCE and the reparametrization trick. Though usually it’s said that the reparametrization trick is useful because it has lower variance, this is in general not true: we will see it in this problem.

The setting is as follows: let us consider estimating a quantity $F = \nabla_\mu(\mathbb{E}_{x \sim q_\mu} f(x))$, for some function $f : \mathbb{R} \to \mathbb{R}$ and $q_\mu = \mathcal{N}(\mu, 1)$, for $\mu \in \mathbb{R}$. We will consider the two estimators mentioned in class, the REINFORCE estimator, and the estimator implied by the reparametrization trick.

As a reminder, the REINFORCE estimator is based on writing
$$\nabla_\mu(\mathbb{E}_{x \sim q_\mu} f(x)) = \nabla_\mu \int_x f(x)q_\mu(x)dx$$
$$= \int_x f(x)(\nabla_\mu \log q_\mu(x))q_\mu(x)dx$$
$$= \mathbb{E}_{x \sim q_\mu} (f(x)\nabla_\mu \log q_\mu(x))$$

Given samples $\{x_i\}_{i=1}^n$ from $q_\mu$, we estimate $F$ as
$$\frac{1}{n} \sum_{i=1}^n f(x_i)\nabla_\mu \log q_\mu(x_i)$$

The reparametrization trick writes a sample $x \sim q_\mu$ as $x = \mu + \epsilon$, where $\epsilon \sim \mathcal{N}(0, 1)$. Denoting $g(\mu, \epsilon) = \mu + \epsilon$, by the change of variables formula, we can write $F$ as
$$\nabla_\mu(\mathbb{E}_{x \sim q_\mu} f(x)) = \mathbb{E}_{\epsilon \sim \mathcal{N}(0,1)} (f'(\mu + \epsilon)\nabla_\mu g(\mu, \epsilon))$$

Given samples $\{x_i\}_{i=1}^n$ from $\mathcal{N}(0, 1)$, we estimate $F$ as
$$\frac{1}{n} \sum_{i=1}^n f'(\mu + x_i)\nabla_\mu g(\mu, x_i)$$

As is immediately apparent, the former estimator involves $f$, the latter $f'$. Depending on how the gradients of $f$ grow compared to $f$, we will show that the variance of either of the two estimators can be smaller.

(a) (5 points) Show that the variance of the REINFORCE estimator satisfies
$$\text{Var}_x(f(x)\nabla_\mu \log q_\mu(x)) = \text{Var}_x(f(x)(x - \mu)).$$

**Proof:**
For $q_\mu = \mathcal{N}(\mu, 1)$,
$$\log q_\mu(x) = -\frac{1}{2}(x - \mu)^2 - \frac{1}{2}\log(2\pi).$$
Differentiate with respect to $\mu$:
$$\nabla_\mu \log q_\mu(x) = x - \mu.$$
So the REINFORCE estimator is exactly $f(x)(x - \mu)$, and therefore
$$\text{Var}_x(f(x)\nabla_\mu \log q_\mu(x)) = \text{Var}_x(f(x)(x - \mu)).$$

18 of 30
### Visual Description
Text-heavy slide with mathematical derivations. A boxed section at the bottom contains the proof for part (a).

---
## Page 19
### Content
Homework 3: Introduction of Graphical Models and Exact Inference 10-708

(b) (5 points) Show that the variance of the reparametrization trick estimator satisfies
$$\text{Var}_\epsilon(f'(\mu + \epsilon)\nabla_\mu g(\mu, \epsilon)) = \text{Var}_\epsilon(f'(\mu + \epsilon)).$$

**Proof:**
Here $g(\mu, \epsilon) = \mu + \epsilon$, so
$$\nabla_\mu g(\mu, \epsilon) = 1.$$
Therefore, the estimator from the reparametrization trick is simply
$$f'(\mu + \epsilon) \cdot 1 = f'(\mu + \epsilon).$$
Hence
$$\text{Var}_\epsilon(f'(\mu + \epsilon)\nabla_\mu g(\mu, \epsilon)) = \text{Var}_\epsilon(f'(\mu + \epsilon)).$$

(c) (7 points) Show that for any $f$, s.t. $f(x) = a + bx, a, b \in \mathbb{R}$, and evaluated at $\mu = 0$, the variance of the REINFORCE estimator is bigger than the variance of the reparametrization trick estimator. You may use the fact that the 4th moment of the standard Gaussian satisfies $\mathbb{E}_{\epsilon \sim \mathcal{N}(0,1)}[\epsilon^4] = 3$.

**Proof:**
Set $\mu = 0$ and write $\epsilon \sim \mathcal{N}(0, 1)$. For $f(x) = a + bx$,
$$f'(\epsilon) = b.$$
So the reparametrization estimator is the constant $b$, and
$$\text{Var}(f'(\epsilon)) = 0.$$
For REINFORCE,
$$f(\epsilon)\nabla_\mu \log q_0(\epsilon) = (a + b\epsilon)\epsilon = a\epsilon + b\epsilon^2.$$
Its mean is
$$\mathbb{E}[a\epsilon + b\epsilon^2] = b.$$
Its second moment is
$$\mathbb{E}[(a\epsilon + b\epsilon^2)^2] = a^2\mathbb{E}[\epsilon^2] + 2ab\mathbb{E}[\epsilon^3] + b^2\mathbb{E}[\epsilon^4] = a^2 + 0 + 3b^2.$$
Therefore
$$\text{Var}(a\epsilon + b\epsilon^2) = a^2 + 3b^2 - b^2 = a^2 + 2b^2.$$
So
$$\text{Var}_{\text{REINFORCE}} = a^2 + 2b^2 \ge 0 = \text{Var}_{\text{reparam}},$$
and it is strictly larger unless $a = b = 0$.

19 of 30
### Visual Description
The slide contains two boxed proofs for parts (b) and (c) of the problem, involving variance calculations for different estimators.

---
## Page 20
### Content
Homework 3: Introduction of Graphical Models and Exact Inference 10-708

(d) (7 points) Show that if $f(x) = 1/x$, and evaluated at $\mu = 0$, the variance of the reparametrization trick estimator is bigger than the variance of the REINFORCE estimator. You may use the fact that the variance of $1/\epsilon^2, \epsilon \sim \mathcal{N}(0, 1)$ is infinite.

**Proof:**
Again set $\mu = 0$ and let $\epsilon \sim \mathcal{N}(0, 1)$. If $f(x) = 1/x$, then
$$f'(x) = -\frac{1}{x^2}.$$
So the reparametrization estimator is
$$f'(\epsilon) = -\frac{1}{\epsilon^2}.$$
Its variance is the same as the variance of $1/\epsilon^2$, which the hint tells us is infinite.
For REINFORCE,
$$f(\epsilon)\nabla_\mu \log q_0(\epsilon) = \frac{1}{\epsilon} \cdot \epsilon = 1$$
for every $\epsilon \neq 0$; the point $\epsilon = 0$ has probability 0 anyway. So this estimator is almost surely constant, and
$$\text{Var}_\epsilon(f(\epsilon)\nabla_\mu \log q_0(\epsilon)) = 0.$$
Hence
$$\text{Var}_{\text{reparam}} = \infty > 0 = \text{Var}_{\text{REINFORCE}}.$$
So in this example the reparametrization estimator has much larger variance.

20 of 30
### Visual Description
The slide contains a boxed proof for part (d) of the problem, showing a case where the reparametrization trick has higher variance than REINFORCE.

---
## Page 21
### Content
Homework 3: Introduction of Graphical Models and Exact Inference 10-708

## 2 Programming [20 pts]
For the programming portion of this homework, we’re going to focus less on complex software implementations and more on being able to see the amazing results that are possible with variational inference. Using a corpus of articles published in the New York Times, we will be learning the parameters of an LDA model. Then, we’ll ask you to do some exploration with the model you’ve learned.

### 2.1 Vanilla LDA
Let’s recap the vanilla LDA model presented several times in class. Recall, the model has the following parameters:
1. $K$ is the fixed number of topics, $V$ is the size of the vocabulary, $M$ is the number of documents and $N$ is the number of words per document. For simplicity and ease of computation, we assume that each document has the same number of words
2. $\alpha \in \mathbb{R}^K_+$ be the parameters of the Dirichlet prior over the $K$ topics
3. $\beta \in \mathbb{R}^{K \times V}_+$, where the row vector $\beta^k \in \mathbb{R}^V_+, k \in [K]$ consists of the parameters of a multinomial distribution on the vocabulary for topic $k$, specifying the probabilities of each word in the vocabulary under that topic. Note that $\beta^k \mathbf{1}_{V \times 1} = 1$, where $\mathbf{1}_{V \times 1}$ denotes a column vector of all ones.
4. $\theta^i \in \mathbb{R}^K_+, i \in [M]$ is the parameter of multinomial distribution over the $K$ topics for document $i$. Therefore $\mathbf{1}_{1 \times K} \theta^i = 1$.
5. $z^{ij} \in [K], i \in [M], j \in [N]$ is the topic selected for the $j^{th}$ word of the $i^{th}$ document.
6. $w^{ij} \in [V], i \in [M], j \in [N]$ be the vocabulary index of the $j^{th}$ word of the $i^{th}$ document

To sample the $M$ documents, each with $N$ words: sample $\theta^i, i \in [M]$ from $\text{Dirichlet}(\alpha)$ and then sample $z^{ij}, i \in [M], j \in [N]$ from $\text{Multinomial}(\theta^i)$ and finally sample $w^{ij}, i \in [M], j \in [N]$ from $\text{Multinomial}(\beta^{z^{ij}})$
The model is shown in plate notation in 2.1.

![Figure 2.1: LDA Generative Model](https://placeholder_for_image)
**Figure 2.1: LDA Generative Model**

Our task is thus to estimate these parameters, as well as the latent parameters representing each document’s distribution over topics and each word’s latent topic. We will do so with a classical algorithm known as Expectation-Maximization, or the EM algorithm.

#### 2.1.1 Shape Convention and Slice Notation
1. The number of documents is $M$. The documents are always indexed by $i$.
2. The number of words per document is $N$. Words are always indexed by $j$.
3. The number of topics is $K$. Topics are always indexed by $k$.

21 of 30
### Visual Description
This slide introduces the programming section on Latent Dirichlet Allocation (LDA). It lists the model parameters and includes a plate notation diagram (Figure 2.1) showing the relationships between $\alpha, \beta, \theta, z, w$ with plates for $N$ and $M$.

---
## Page 22
### Content
Homework 3: Introduction of Graphical Models and Exact Inference 10-708

4. The vocabulary of size $V$ (ordered in some arbitrary fashion), and is always indexed by $v$.
5. If we have a tensor $T$ of the shape $[M, N, K, V]$, and $1 \le i \le M$, then $T^i$ is slice of the tensor, and another tensor of shape $[N, K, V]$. It will be clear from context which dimension of the tensor we are “slicing” over.

### 2.1.2 Expectation Step
For each document $i \in [M]$, our first objective is to compute the posterior distribution on the latent variables:
$$p(\theta^i, \{z^{ij}\}_j | \{w^{ij}\}_j, \alpha, \beta) = \frac{p(\theta^i, \{z^{ij}\}_j, \{w^{ij}\}_j | \alpha, \beta)}{p(\{w^{ij}\}_j | \alpha, \beta)}.$$
As usual, this is intractable due to the need to marginalize out the latents in the denominator of this expression. Instead, we turn to variational inference!

![Figure 2.2: Graphical Representation of the Variational Distribution](https://placeholder_for_image)
**Figure 2.2: Graphical Representation of the Variational Distribution**

Figure 2.2 depicts our chosen variational distribution which we will use to approximate the intractable posterior. Observe that we have dropped the prior $\alpha$ over topic distributions which is shared by all documents; instead, our approximation assumes that each document’s topic distribution $\theta^i \in \mathbb{R}^K$ is drawn as a function of the variational parameter $\gamma^i \in \mathbb{R}^K$. Likewise, each document has its own variational distribution over topics with the variational parameter $\phi^i \in \mathbb{R}^{N \times K}$. We will also view $\phi$ as a tensor of dimensions $[M, N, K]$, in which case $\phi^i$ is a slice of this tensor.

With the variational parameters defined, we can write the variational distribution for a single document as follows:
$$q(\theta^i, \{z^{ij}\}_j | \gamma^i, \phi^i) = q(\theta^i | \gamma^i) \prod_{j=1}^N q(z^{ij} | \phi^{ij}) := q^i \tag{2.1}$$

Recall that standard variational inference uses separate variables for each observation. So, we will be optimizing the variational parameters separately for each document.

Our goal is to optimize the variational parameters so as to minimize the KL Divergence from our variational distribution to the true posterior. That is,
$$(\gamma^{i*}, \phi^{i*}) = \arg \min_{\gamma^i, \phi^i} D(q(\theta^i, \{z^{ij}\}_j | \gamma^i, \phi^i) || p(\theta^i, \{z^{ij}\}_j | \{w^{ij}\}_j, \alpha, \beta)). \tag{2.2}$$

We will minimize this objective by repeatedly solving for a fixed point. Taking the derivative of the KL Divergence, setting it equal to 0, and solving gives us a set of updates which ensure that our parameter

22 of 30
### Visual Description
The slide continues the LDA discussion, focusing on the Expectation Step and Variational Inference. It includes a graphical model (Figure 2.2) showing the variational parameters $\gamma$ and $\phi$ influencing $\theta$ and $z$ respectively, within plates for $N$ and $M$.

---
## Page 23
### Content
Homework 3: Introduction of Graphical Models and Exact Inference 10-708

estimates will converge to the optimum. As promised, we will not make you derive these updates as they are tedious, but the full calculations can be found in the original LDA paper (Blei et al. (2003)).

$$\phi^{ijk} \propto \beta^{kw^{ij}} \exp \left( \mathbb{E}_{q^i} [\log \theta^{ik} | \gamma^i] \right), \tag{2.3}$$
$$\gamma^{ik} = \alpha^k + \sum_{j=1}^N \phi_{ijk}. \tag{2.4}$$
where $\beta^{kw^{ij}}$ is the $w^{ij}$-th coordinate of $\beta^k$. Note, we are viewing $\phi$ as a tensor of dimensions $[M, N, K]$.
Finally, the expectation term in the above update is:
$$\mathbb{E}_{q^i} [\log \theta^{ik} | \gamma^i] = \Psi(\gamma^{ik}) - \Psi \left( \sum_{j=1}^K \gamma^{ij} \right), \tag{2.5}$$
where $\Psi$ is the derivative of the log of the Gamma function, also known as the *digamma function*. Observe that the second term in this expectation can be ignored, because we are only solving for the updated $\phi^{ijk}$ up to proportionality ($\phi^{ij}$ will be normalized to 1 after each iteration).

These updates, repeated until convergence, give us the *Expectation* step of our expectation-maximization algorithm. For a fixed (assumed known) $\alpha, \beta$, we are optimizing the parameters to ensure our variational distribution gives as close an approximation to the true posterior as possible.

### 2.1.3 Maximization Step
The above algorithm is only one half of our expectation-maximization procedure. Recall that this objective optimizes the variational parameters for a fixed $\alpha, \beta$. Once we have learned these parameters, our next step is to find the choice of $\alpha, \beta$ which maximizes the resulting lower bound on the log-likelihood of the observed data (hence, the Maximization step). We will then cycle between these two procedures until we arrive at a complete solution.

Once again, we will skip the details and give you the precise update:
$$\beta^{kv} \propto \sum_{i=1}^M \sum_{j=1}^N \phi^{ijk} \mathbb{I}[w^{ij} = v] \quad \forall k \in [k], v \in [V] \tag{2.6}$$
To implement this update efficiently, it may be helpful to look into the function `numpy.einsum`. Don’t forget to normalize $\beta^k$ to sum to 1. Additionally, the update to $\alpha$ is given as
$$\alpha = \alpha + \frac{g - c}{h}, \tag{2.7}$$
where $c = \frac{\sum_{k=1}^K g^k/h^k}{z^{-1} + \sum_{k=1}^K (h^k)^{-1}}$. The $g$ and $h$ in these expressions are $K$-dimensional vectors which give the gradient, and a particular vector which shows up in the Hessian, of the log-likelihood with respect to $\alpha$, respectively. The $z$ is a scalar that also shows up in the Hessian. They can be computed as
$$g^k = M \left( \Psi \left( \sum_{t=1}^K \alpha^t \right) - \Psi(\alpha^k) \right) + \sum_{i=1}^M \left( \Psi(\gamma^{ik}) - \Psi \left( \sum_{t=1}^K \gamma^{it} \right) \right), \tag{2.8}$$
$$h^k = M \Psi'(\alpha^k), \tag{2.9}$$
$$z = -\Psi' \left( \sum_{t=1}^K \alpha^t \right) \tag{2.10}$$

23 of 30
### Visual Description
Text-only slide containing several numbered mathematical formulas (2.3 to 2.10) for the Expectation and Maximization steps of the LDA algorithm.

---
## Page 24
### Content
Homework 3: Introduction of Graphical Models and Exact Inference 10-708

Note the use of $\Psi'$, not $\Psi$! This is the derivative of the digamma function, or the second derivative of the log Gamma function. It is known as the *polygamma function* of order 1.

### 2.1.4 Implementation notes
* For the very first E-step, initialize the parameters
  1. $\alpha^k = 0.1, \forall k$
  2. $\beta^{kv} \sim \mathcal{U}(0, 1)$ and normalize each $\beta^k$ to 1, $\forall k, v$
  3. $\phi^{ijk}
## Page 25
### Content
Homework 3: Introduction of Graphical Models and Exact Inference 10-708

### 2.2 LDA on New York Times Articles
In this assignment, we will be using the above variational EM algorithm to learn the parameters of an LDA model for a corpus of articles by the New York Times. You’ll also get to do this for an article of your choosing!

The handout includes two files, `nyt_vocab.txt` and `nyt_data.txt`. The former is a simple list of vocabulary words. The latter is a collection of articles coming from the New York Times which has already been partially formatted for you. Each document is on a separate line, encoded as key:value pairs—the key is the index of the vocabulary word as it appears in the vocab file (0-indexed, of course) and the value is the number of times that word appears in the document. Since the LDA model doesn’t account for word order, this encodes all the information you need but in an easier format.

Unfortunately, we do not have the original source documents from which these counts were created. As a result, we won’t be able to directly tie our learned topics to specific articles. To partially fix this, we want *you* to pick an article/document of your choice to add it to the corpus. Be sure to pick something which is available online **and save the url**. You can choose any body of text you like, but note the following:

* It should be sufficiently long that the number of vocabulary words which occur are somewhere around 100-200 (could be more).
* If you choose something wildly different from what might be covered in the Times, your model may have difficulty picking the right topic(s). We don’t think this is likely to be a problem because of the size of the corpus, but just keep this in mind.
* If you like, you can do multiple articles! This will not take any additional work and it will mean you get some more cool results.

(a) (2 points) Report the title and url of the article you chose and give a brief description of what the article is about.

> **Title:** Elon Musk
> **URL:** https://www.biography.com/business-leaders/elon-musk
> I selected Biography.com’s Elon Musk profile. It is a biographical article covering his early life, major companies such as Zip2, PayPal, Tesla, SpaceX, and X, his wealth and business career, and some of his political activity.

Now that you’ve chosen an article, you should copy the raw text into a file. Then, write a script to count the number of occurrences of each vocabulary word and encode the document in the same format as the provided corpus. Finally, append your formatted article to `nyt_data.txt`.

25 of 30

### Visual Description
The page contains instructional text for a homework assignment. There is a boxed area containing a student's response to question (a), providing details about a chosen article on Elon Musk.

---

## Page 26
### Content
Homework 3: Introduction of Graphical Models and Exact Inference 10-708

Now for the algorithm! Using the steps described in the previous section, **implement the variational EM algorithm** to learn the parameters for an LDA model of the data. A few specifics:

* Recall that we assume a fixed document length $N$—for this assignment, we will set $N = 200$. First, you should throw away all documents with fewer than 150 words. Then, for documents with fewer than $N$ words, sample $N$ words from the document uniformly with replacement, and for documents with *more* than $N$ words, sample exactly $N$ words *without* replacement.
* We also assume a fixed number of topics $K$. We choose to set $K = 25$; this provides a nice balance such that there won’t be too many combined topics, but also we won’t have “leftover” topics that don’t correlate with anything.

We highly recommend you vectorize functions where applicable and think about which calculations can be evaluated as a matrix product—and keep in mind `numpy.einsum`. **Be sure to save your final parameter estimates!**

Once you’ve run this algorithm to convergence, you should have three sets of parameters which interest us. The first is $\alpha$, the Dirichlet prior over document topics. The second is $\beta$, which parameterizes each topic’s multinomial distribution over words. The last one is $\theta$, the inferred distribution over topics for each document; this one you won’t have solved for directly, but it will be the mean of $q(\theta \mid \gamma)$.

(b) (8 points) Pick 5 random topics, and for each one, report the 10 words with the highest likelihood. Based on these words, can you identify the focus of each topic? What are they?

> The five sampled topics were 8, 15, 16, 20, and 22.
> **Topic 8:** official, states, government, military, cause, tell, kill, group, plan, life. Government and conflict reporting.
> **Topic 15:** issue, member, official, public, support, law, move, leader, state, company. Public policy and institutions.
> **Topic 16:** case, family, lawyer, child, tell, member, ask, receive, charge, law. Courts and family law.
> **Topic 20:** official, government, political, american, leader, military, group, states, force, tell. National politics and foreign affairs.
> **Topic 22:** child, tell, school, live, home, life, woman, little, ago, thing. Family, education, and social life.

26 of 30

### Visual Description
The page contains technical instructions for implementing an LDA model using variational EM. It includes a boxed response area for question (b), listing five topics with their top 10 words and a brief thematic identification for each.

---

## Page 27
### Content
Homework 3: Introduction of Graphical Models and Exact Inference 10-708

(c) (4 points) Now you get to see the payoff of choosing your own article! Having inferred the distribution over topics $\theta$ for your specific article, find the two or three topics with the highest likelihood under $\theta$, and report the top 10 words for these topics. What might these topics represent? Does this match your description of the article which you gave earlier?

> The top three topics for my Elon Musk document were Topic 17, Topic 22, and Topic 16.
> **Topic 17:** percent, company, market, rise, increase, industry, price, business, cost, pay. Business, markets, and corporate performance.
> **Topic 22:** child, tell, school, live, home, life, woman, little, ago, thing. Childhood, family, and personal life.
> **Topic 16:** case, family, lawyer, child, tell, member, ask, receive, charge, law. Legal and family-related matters.
> This is a reasonable match. The biography article mixes Musk’s companies and wealth with details about his upbringing, family, and public controversies, so the inferred topics appear consistent with the article contents.

27 of 30

### Visual Description
The page continues the homework assignment, focusing on the results of the LDA model applied to the student's chosen article. A boxed area contains the response to question (c), identifying the top three topics for the Elon Musk article and explaining why they are a good match.

---

## Page 28
### Content
Homework 3: Introduction of Graphical Models and Exact Inference 10-708

(d) (6 points) Using the inferred $\theta$ for your article, generate a new “document” consisting of 30 words according to the LDA model: for each word, draw a topic $t$ according to $\theta$, and then draw a word according to the multinomial $\beta_t$. Paste the generated document below. Can you identify any topics in the “document”? Do they match the themes of your chosen article?

> **Generated document:**
> seat turn advertising neighborhood security action share open rise television project rock establish create activity hang proposal percent competitor create market early limit pursue cost family hard doubt percent add
> This sample is noisy given that it is only a 30-word sample. But it still suggests a business / market theme through words such as *share, rise, percent, competitor,* and *market*, with a smaller personal-life signal from *family*. Accordingly, it matches the article only partially: the corporate and wealth-related side appears more strongly than the specific details about Tesla, SpaceX, or Musk’s biography.

(e) (0 points) Further reading: there also exists deep-learning counterpart of LDA called neural topic models, which are essentially VAEs with different priors. If you would like to learn more about this type of models, Srivastava and Sutton (2017), Miao et al. (2017) and Dieng et al. (2020) are some works you can start with; there are also variants using the trending pre-trained LM (Bianchi et al. (2020a), Bianchi et al. (2020b)), or with additional modules to capture the topics varying over time (Dieng et al. (2019)). One can refer to the recent survey paper (Zhao et al. (2021)) for more details.

28 of 30

### Visual Description
The page contains question (d) with a boxed response area showing a generated 30-word document and an analysis of its themes. Below that is section (e), which provides references for further reading on neural topic models.

---

## Page 29
### Content
Homework 3: Introduction of Graphical Models and Exact Inference 10-708

### 3 Collaboration Policy
After you have completed all other components of this assignment, report your answers to the collaboration policy questions detailed in the Academic Integrity Policies for this course.

1. Did you receive any help whatsoever from anyone in solving this assignment? If so, include full details including names of people who helped you and the exact nature of help you received.
> I did not receive any assistance.

2. Did you give any help whatsoever to anyone in solving this assignment? If so, include full details including names of people who helped you and the exact nature of help you offered.
> I did not provide assistance to others.

3. Did you find or come across code that implements any part of this assignment? If so, include full details including the source of the code and how you used it in the assignment.
> I did not use any external code.

29 of 30

### Visual Description
This page outlines the collaboration policy for the assignment. It contains three numbered questions, each followed by a boxed response area where the student has indicated they worked independently and did not use external code.

---

## Page 30
### Content
Homework 3: Introduction of Graphical Models and Exact Inference 10-708

### References
F. Bianchi, S. Terragni, and D. Hovy. Pre-training is a hot topic: Contextualized document embeddings improve topic coherence. *arXiv preprint arXiv:2004.03974*, 2020a.

F. Bianchi, S. Terragni, D. Hovy, D. Nozza, and E. Fersini. Cross-lingual contextualized topic models with zero-shot learning. *arXiv preprint arXiv:2004.07737*, 2020b.

D. M. Blei, A. Y. Ng, and M. I. Jordan. Latent dirichlet allocation. *the Journal of machine Learning research*, 3:993–1022, 2003.

A. B. Dieng, F. J. Ruiz, and D. M. Blei. The dynamic embedded topic model. *arXiv preprint arXiv:1907.05545*, 2019.

A. B. Dieng, F. J. Ruiz, and D. M. Blei. Topic modeling in embedding spaces. *Transactions of the Association for Computational Linguistics*, 8:439–453, 2020.

Y. Miao, E. Grefenstette, and P. Blunsom. Discovering discrete latent topics with neural variational inference. In *International Conference on Machine Learning*, pages 2410–2419. PMLR, 2017.

A. Srivastava and C. Sutton. Autoencoding variational inference for topic models. *arXiv preprint arXiv:1703.01488*, 2017.

H. Zhao, D. Phung, V. Huynh, Y. Jin, L. Du, and W. Buntine. Topic modelling meets deep neural networks: A survey. *arXiv preprint arXiv:2103.00498*, 2021.

30 of 30

### Visual Description
Text-only slide. It lists academic references cited in the homework document.
