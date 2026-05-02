# previous-years-finals-07-10715_CMU_Fall_2021_final_soln

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/previous-years-finals-07-10715_CMU_Fall_2021_final_soln.pdf`
Duplicate equivalents: `previous-years-finals-07-10715_CMU_Fall_2021_final_soln.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 12

## Page 1
### Content
CMU 10-715 Fall 2021: Final Exam

Name:

Andrew ID:

* This is a 3 hour exam from 8.30 AM to 11:30 AM.
* You are **not** allowed to refer to notes, homework solutions, the textbook, lecture videos or any other outside resources. You are **not** allowed to discuss the exam with anyone in the duration of the exam.
* **Please justify each of your answers.**
* In such a PhD-level course, please treat the exam as an opportunity to understand any blindspots or gaps in understanding of the material, and perhaps learn something new. Remember that the primary objective of the course is to prepare you to be able to do excellent research in ML going ahead. We suggest trying to relax and have fun in the exam, treating it as a part of your learning experience rather than stressing about grades :) (In fact, as a bonus, the approach of relaxing and having fun in the exam may help you do better in the exam itself.) And remember – **You are awesome!**

**Distribution of Marks**

| Question | Points | Score |
| :---: | :---: | :---: |
| **1** | 8 | |
| **2** | 8 | |
| **3** | 8 | |
| **4** | 8 | |
| **5** | 8 | |
| **6** | 7 | |
| **7** | 8 | |
| **8** | 7 | |
| **9** | 3 | |
| Total: | 65 | |

### Visual Description
The page contains the title of the exam, fields for the student's name and ID, a list of instructions and encouraging remarks, and a table titled "Distribution of Marks" showing 9 questions with their respective point values totaling 65.

---

## Page 2
### Content
1) **Neural Network ERM [8 points]**

Suppose $\mathcal{X} = [0, 1]^{42}$ and $\mathcal{Y} = \{-1, 1\}$. Consider any feedforward neural network architecture with a sign activation function. Consider $n = 10$ training points. Assume that the training dataset is perfectly balanced, that is, the number of training points with label -1 equals the number of training points with label +1. Also assume that the feature vectors of all training points are different, that is, $x_i \neq x_j$ for every pair $i \neq j \in [n]$. Consider doing ERM under the 0-1 loss (assume infinite computation power for the optimization), under the constraint that $\|w\|_2 = 1$. Then which of the following statements are true about the global minima for the ERM:

* There are always zero global minima
* There is always exactly one global minimum
* The number of global minima is always upper bounded by a finite function of the number of neurons
* **The number of global minima can be infinite**

Importantly, please thoroughly justify your answer.

[Learning objective: Understand the behavior of ERM and possible existence of multiple minima is an important question in neural networks, and this question in the exam aims to do so in a simple setting. Note that this is a slight modification of a question that you already did in a Diderot poll.]

<span style="color:blue">Consider $\mathcal{X} = \mathbb{R}^2$. Consider some training data that is linearly separable. Consider zero hidden neurons. Then there are infinitely many hyperplanes that can perfectly separate the training data. The directions of the normal vector of these hyperplanes are different and hence the associated $w$ vectors are different even if you normalize them to have a unit norm.</span>

Page 2

### Visual Description
Text-only slide. The solution/justification is provided in blue text at the bottom.

---

## Page 3
### Content
2) **Crossvalidation [8 points]**

In this question, a machine learning engineer observes what appears to be a strange phenomenon. Your goal is to help the machine learning engineer understand this phenomenon. This question has 7 subparts, each of which are quite short. Throughout this question, assume that all (training, validation, test) datapoints are drawn i.i.d. from some distribution.

A machine learning engineer wanted to use a machine learning algorithm for binary classification. The algorithm has a hyperparameter, and so the engineer decided to use crossvalidation:

* The engineer randomly partitioned the labeled data into a training and a validation set.
* For each value of the hyperparameter, the engineer trained using the training set and obtained a hypothesis.
* In this manner, the engineer obtained $m$ hypotheses $h_1, \dots, h_m$.
* Then the engineer applied each of these hypotheses to the validation set, and measured the validation error (under the 0-1 loss, averaged over all samples in the validation set).
* Let us denote the validation errors as $e_1, \dots, e_m \in [0, 1]$ respectively. Assume these are all independent.
* Finally, the engineer decides to choose hypothesis $h_a$ where $a \in \arg \min_{j \in [m]} e_j$ (ties broken randomly).

For ease of analysis in this exam, let us make the following two simplifying assumptions:

* Assume that each hypothesis $h_j$ ($j \in [m]$) has a risk of 0.6. Formally, letting $D$ denote the distribution from which each $(x, y)$ pair is drawn at random, assume $P_{(x,y) \sim D}(h_j(x) \neq y) = 0.6$ for every $j \in [m]$.
* Suppose there is only one sample point in the validation set.

Then answer the following questions and justify your answers:

1. Consider a fixed value $j \in [m]$ (e.g., consider $j = 1$). What is the expected 0-1 loss of $h_j$ on the validation set (where the expectation is with respect to the distribution of the validation data)? [1 point]
<span style="color:blue">The expected loss is 0.6.</span>

2. For the value $j \in [m]$ chosen in part 1, what is the expected 0-1 loss of $h_j$ on the test data? [1 point]
<span style="color:blue">Since the test data is i.i.d., the expected 0-1 loss is also 0.6.</span>

Page 3

### Visual Description
Text-only slide. Solutions to subparts 1 and 2 are provided in blue text.

---

## Page 4
### Content
3. For the value $j \in [m]$ chosen in part 1, do the two aforementioned expected errors have equal value? [1 point]
<span style="color:blue">Yes, in expectation these are the same.</span>

4. Now choose $a = \arg \min_{j \in [m]} e_j$ (ties broken randomly). What is the expected 0-1 loss of $h_a$ on the validation set? [1 point]
<span style="color:blue">We know the value of the 0-1 loss of $h_a$ on the validation set, it is $e_a$. Since $h_a$ is picked so that $e_a \leq e_j$ for all $j \in [m]$, we know $e_a = 1$ only when $e_j = 1$ for all $j$ (or else $e_a$ would not be a minimum). This case happens with probability $0.6^m$. Otherwise, $e_a = 0$ with complementary probability $1 - 0.6^m$. Thus, the expected value of $e_a$ is $0.6^m$.</span>

Now the engineer deploys $h_a$ out in the real world. On previously unseen data in the real world ("test data"), the engineer measures the average error (under the 0-1 loss). Assume that the test data has a very large number of labeled samples. The engineer finds, to their surprise, that this error is bigger than $e_a$. The engineer does this entire procedure in several other applications, and each time, observes that the error in the real world for the chosen hypothesis is bigger than that on the validation set.

The engineer is really puzzled and asks you for help in understanding this phenomenon. In order to help the engineer, please now answer the following questions:

5. For the value $a \in [m]$ chosen above, what is the expected 0-1 loss of $h_a$ on the test data? [1 point]
<span style="color:blue">Since the test data is i.i.d., the expected 0-1 loss is 0.6.</span>

6. For the value $a \in [m]$ chosen above, are the values computed in parts 4 and 5 of this question equal (that is, is the expected 0-1 loss of $h_a$ on the validation set equal to the expected 0-1 loss of $h_a$ on the test set)? [1 point]
<span style="color:blue">No, the expected loss will be lower in the validation set.</span>

7. Finally, based on the six questions above, please provide a 1-2 sentence explanation for the phenomenon that the machine learning engineer observed. [2 points]
<span style="color:blue">When the engineer picks the best-performing hypothesis on the validation set, it's expected error will be lower than the true expected error under the distribution data $D$, precisely due to the fact that this model was chosen "after-the-fact" as the one that minimizes error on the validation set. Given there are many models, with errors that vary around the expected true error, picking the one with minimum error will bias this value down. However, once the best-performing hypothesis is tested on new i.i.d. data (such as from the test set), it's expected error will now be the true expected error, and thus will likely go up from the previous (biased) estimate.</span>

Page 4

### Visual Description
Text-only slide. Solutions to subparts 3 through 7 are provided in blue text.

---

## Page 5
### Content
[Learning objective: Learning about an important phenomenon called regression to the mean. In many settings (beyond machine learning) people have designed policies without paying attention to this phenomenon. They then paid in terms of poor performance of their policies. Look it up after the exam.]

3) **Decision Trees [8 points]**

[Forewarning: Part (a) of this question involves annoying algebra.]

Suppose $\mathcal{X} = [0, 1]^{42}$ and $\mathcal{Y} = \{-1, 1\}$. Consider the ID3 algorithm given below, for real-valued features, with the Gini index gain.$^1$ You are given $n$ training samples $x_1, \dots, x_n \in \mathcal{X}$ such that $x_i \neq x_j$ for all pairs $i \neq j \in [n]$. Suppose you allow the algorithm to run it fully (i.e., no pruning or restricting the depth) on this data.

---
**Algorithm 1:** ID3(training set $S$, features $A$)
**if** all samples in $S$ are labeled 1 **then**
&nbsp;&nbsp;&nbsp;&nbsp;**return** a leaf with label 1
**else if** all samples in $S$ are labeled -1 **then**
&nbsp;&nbsp;&nbsp;&nbsp;**return** a leaf with label -1
Define $C(a) = 2a(1 - a)$
Define $ER(S, j, t_j) = \mathbb{P}_S[[x]_j \leq t_j]C(\mathbb{P}_S[y = 1 | [x]_j \leq t_j]) + \mathbb{P}_S[[x]_j > t_j]C(\mathbb{P}_S[y = 1 | [x]_j > t_j])$
Define $Gini(S, j, t_j) = C(\mathbb{P}_S[y = 1]) - ER(S, j, t_j)$
Let $j^* \in A$ and $t^* \in [0, 1]$ denote the feature & threshold that maximize $Gini(S, j, t_j)$
Let $S_1$ and $S_2$ be the partition of $S$ corresponding to $[x]_{j^*} \leq t^*$ and $[x]_{j^*} > t^*$ respectively
**Return** a subtree with two branches ID3($S_1, A$) and ID3($S_2, A$)
---

(a) Suppose $S$ contains at least one sample labeled 1 and at least one sample labeled -1. Then show that the algorithm will split such that there are a strictly positive number of samples in both partitions, that is, show that $|S_1| \neq 0$ and $|S_2| \neq 0$. [4 points]

(b) Assume that the assertion in part (a) is true (irrespective of whether you have proved it or not). Use this result to compute the empirical risk of the resulting hypothesis. Please justify your answer. [4 points]

[Learning objective: Understand ID3 on real-valued features. Also understand a useful property of the Gini index (part a) which guarantees that this algorithm will terminate. This question is related to a Diderot poll you did.]

$^1$This algorithm considers real-valued features whereas the algorithm we studied in the lecture had binary features. Thus in addition to deciding which feature to split, this algorithm also needs to decide a threshold on the feature value for the split (denoted as $t_j$ in the algorithm description). Also, if the algorithm splits on a certain feature, it is allowed to split on the same feature again down the tree.

Page 5

### Visual Description
The page contains a learning objective note, the problem statement for Question 3 on Decision Trees, and a pseudocode box for Algorithm 1 (ID3). There are two subparts (a) and (b) and a footnote explaining the real-valued feature adaptation.

---

## Page 6
### Content
<span style="color:blue">(a) First, since we have assumed that all points are distinct, that is all points are not the same, there always exists a partition where both splits are non-empty. Now suppose $S$ is split into two subsets $S_1, S_2$. Then some algebra gives that if $S_1$ has $a_1$ points with +1 label, $b_1$ points with -1 label, and $S_2$ has $a_2$ points with +1 label, $b_2$ points with -1 label, then the value of $ER$ for that split equals $2(\frac{a_1 b_1}{(a_1+b_1+a_2+b_2)(a_1+b_1)} + \frac{a_2 b_2}{(a_1+b_1+a_2+b_2)(a_2+b_2)})$.

Via some annoying algebra, the value of $ER$ when one of the splits is empty minus the value of $ER$ for a general value of $(a_1, b_1, a_2, b_2)$ is: $\frac{2(b_1 a_2 - a_1 b_2)^2}{(a_1+b_1+a_2+b_2)^2(a_1+b_1)(a_2+b_2)}$. This value is always non-negative and hence the algorithm will weakly choose the non-empty split (i.e., the non-empty split is guaranteed to be in the argmax). Note that if instead you showed – with or without the aforementioned algebra (e.g., via a construction)– that the argmax may not contain only non-empty splits, that is also totally fine.

(b) Since there is no restriction on the depth, the result of part (a) guarantees that there will be a split if a node has samples with both labels. It will thus stop only when all samples are perfectly classified, so the empirical risk is 0.</span>

4) **AdaBoost [8 points]**

Suppose $\mathcal{X} = [0, 1]^{42}$ and $\mathcal{Y} = \{-1, 1\}$. You are given $n$ training points $\{(x_i, y_i)\}_{i \in [n]}$. Consider a weak learner that does ERM over a hypothesis class $\mathcal{H}$. Suppose that no hypothesis from this class $\mathcal{H}$ can perfectly represent the training data, that is, there is no $h \in \mathcal{H}$ such that $h(x_i) = y_i \forall i \in [n]$. Consider the AdaBoost algorithm with some finite $T$. Then will the error term $\epsilon_t = \mathbb{P}_{i \sim D^{(t)}}[h_t(x_i) \neq y_i]$ ever be zero for any $t \in [T]$? Importantly, please justify your answer.

[Learning objective: Understand a property of AdaBoost in terms of the weak learner's performance under various chosen distributions $D^{(t)}$. This property is useful to simplify proofs of analysis of AdaBoost.]

<span style="color:blue">No, we can prove it by induction. $\epsilon_t = \sum_{i \in [N]} D_i^{(t)} \mathbf{1}_{h_t(x_i) \neq y_i}$
Base case: when $t = 1$
$D_i^{(0)} = [\frac{1}{n}, \dots, \frac{1}{n}]$, $\epsilon_1 = \frac{1}{n} \sum_i \in [N] \mathbf{1}_{h_1(x_i) \neq y_1} \in (0, 1]$ since $h_1$ can't perfectly classify everything. What's more, we can show $w_1$ is finite, and $D_i^{(1)} > 0$.
Induction step: Suppose $D_i^{(t)} > 0, \epsilon_t \in (0, 1]$, then $\frac{1}{\epsilon_t} < \infty$, i.e. $w_t = \frac{1}{2} \log(\frac{1}{\epsilon_t} - 1)$ is finite, then $\tilde{D}_i^{(t+1)} = D_i^{(t)} e^{-w_t} > 0$ or $= D_i^{(t)} e^{w_t} > 0$ and $D_i^{(t+1)} = \text{Normalize}(\tilde{D}^{(t+1)}) > 0$. So $\epsilon_{t+1} = \sum_{i \in [N]} D_i^{(t+1)} \mathbf{1}_{h_{t+1}(x_i) \neq y_i} > 0$ as $h_{t+1}$ can't classify everything correctly.</span>

Page 6

### Visual Description
Text-only slide. Solutions for Question 3 (a) and (b) are at the top in blue. Question 4 on AdaBoost follows, with its solution also provided in blue text.

---

## Page 7
### Content
5) **Online learning [8 points]**

Consider the setting of learning from experts for binary classification, where the goal is to minimize the average regret under an adversarial scenario. In the lecture, we discussed that when the number of experts $d \geq 2$, then any deterministic prediction algorithm, including the majority voting algorithm, is not a no-regret algorithm.

(a) What about $d = 1$? Is there a deterministic algorithm that is a no-regret algorithm? If so, please provide such an algorithm and show that it is a no-regret algorithm. If not, then please prove that no deterministic algorithm can be a no-regret algorithm. [3 points]

<span style="color:blue">Recall regret = $\frac{1}{T}(\text{error of your algorithm} - \min_{i \in [d]} \text{error of expert } i)$. Consider a deterministic algorithm that always makes the same decision as the given expert. Then, by definition, regret of this algorithm is zero as the error of algorithm matches the error of the given single expert.</span>

(b) We will now attempt to construct an algorithm that overcomes the aforementioned limitation of majority voting when $d \geq 2$. Suppose that there are $d = 5$ experts. Consider the following prediction algorithm that is associated to a parameter $p \in [0, 1]$:

* On any day $t \in \{1, \dots, T\}$
    - The $d$ experts will provide their predictions $x_t \in \{+, -\}^5$.
    - Let $m_t \in \{+, -\}$ denote the majority opinion of the experts, that is, $m_t = \text{sign}(\sum_{i \in [d]} [x_t]_i)$.
    - With probability $p$, output the majority vote $m_t$; otherwise output the opposite of the majority vote $\{+, -\}\setminus m_t$. This randomization is independent across all days.

Observe that if $p = 1$, this algorithm reduces to majority voting which we know is not a no-regret algorithm. Can this be a no-regret algorithm for some $p \in [0, 1)$? Is yes, for what values of $p \in [0, 1)$ is this algorithm a no-regret algorithm? [5 points]

<span style="color:blue">For no values of $p$ this is a no-regret algorithm. Since at each time we are selecting the expert independently, no value of $p$ will make it a no-regret algorithm. We will prove this by proving counterexamples where in one case we see that $p = 0$ can only be no-regret and in the second case only $p = 1$ will be no-regret.

First, consider a scenario when a single agent is always correct and all other agents make opposite predictions. In this case, the agent with min error belongs to the minority group and for all $p > 0$, the prediction algorithm makes an error whenever we select a majority vote (i.e., with probability $p$). Hence, the expected regret of the algorithm is $p$ in this case. We need to select $p = 0$ to make it a no-regret algorithm.</span>

Page 7

### Visual Description
Text-only slide. Question 5 on Online Learning is presented with subparts (a) and (b). Solutions are provided in blue text.

---

## Page 8
### Content
<span style="color:blue">On the other hand, consider an exactly opposite case when 4 agents are always correct and one agent is always wrong. In this case, the agents in the majority group make no error and the prediction algorithm makes an error whenever we select a minority vote (i.e., with probability $1 - p$). Hence, the expected regret of the algorithm is $1 - p$ in this case. We will need $p = 1$ (i.e., majority voting) to make it a no-regret algorithm.</span>

6) **Active learning [7 points]**

There is a graduate student from another university. Let's call them student Z. Student Z had access to a set of unlabeled images $\{x_1, \dots, x_m\}$. Student Z designed an active learning algorithm for some prediction task, and based on this active learning algorithm, student Z labeled points $\{x'_1, \dots, x'_n\} \subset \{x_1, \dots, x_m\}$, where $n \ll m$. Student Z then released the dataset $\{(x'_i, y'_i)\}_{i \in [n]}$ for public use.

Now suppose you trained a standard supervised learning algorithm and trained it using the dataset $\{(x'_i, y'_i)\}_{i \in [n]}$. You now deploy the algorithm in the real world. Is there anything in the process above that could cause the performance of your deployed algorithm to go wrong?

[Learning objective: Think about an important conceptual issue related to creation and use of datasets.]

<span style="color:blue">When we are employing active learning, the samples for which we will obtain labels depend a lot on the nature of our querying. That is, the distribution of $x$'s for which we have obtained labels using active learning can be pretty different from the actual underlying distribution $D$ on the $x$'s. Thus, if we train a supervised learning algorithm on the labelled set arrived at via active learning, we might not learn a good classifier in terms of generalization capability to the distribution $D$. One needs to be careful about specifying such active learning policies when releasing datasets, or when trying to perform learning on a dataset obtained in this manner. Otherwise, heavy biases may exist in the data which are not representative of the true distribution.</span>

7) **Randomized-weighted-majority-like algorithm for Multi Armed Bandits [8 points]**

Consider a multi-armed bandit setting with $k = 2$ coins. Assume all coin tosses are independent. Index the two coins as 0 and 1, and let $\mu_0$ and $\mu_1$ denote the probability of heads in the two coins. Consider the following algorithm:

* For $i \in \{0, 1\}$
    - Toss coin $i$, and denote the outcome as $y \in \{0, 1\}$ (1 = heads, 0 = tails)

Page 8

### Visual Description
Text-only slide. It contains the conclusion of the solution for Question 5, Question 6 on Active Learning with its solution in blue, and the beginning of Question 7 on Multi-Armed Bandits.
## Page 9
### Content
- Set $N_i = 1$ and $H_i = y$
- For $t \in \{2, 3, \dots\}$
    - For each $i \in \{0, 1\}$, let $\hat{\mu}_i = \frac{H_i}{N_i}$
    - Pick a coin randomly: pick coin 0 with probability $\frac{e^{\hat{\mu}_0}}{e^{\hat{\mu}_0} + e^{\hat{\mu}_1}}$ and pick coin 1 otherwise (i.e., with probability $\frac{e^{\hat{\mu}_1}}{e^{\hat{\mu}_0} + e^{\hat{\mu}_1}}$). Denote the picked coin as $j \in \{0, 1\}$
    - Toss coin $j$, and denote the outcome as $y \in \{0, 1\}$
    - Set $N_j \leftarrow N_j + 1$ and $H_j \leftarrow H_j + y$

Recall the notion of average regret as:
$$\text{Average regret}(T) = \max_{i \in \{0,1\}} \mu_i - \frac{1}{T}(\text{number of heads observed in expectation})$$

Is the aforementioned algorithm a no-regret algorithm (i.e., does it ensure that $\lim_{T \to \infty} \text{Average regret}(T) = 0$ for every $\mu_1, \mu_2 \in [0, 1]$)?

[Learning objective: Get your hands dirty in evaluating a simple algorithm that represents another way of "randomizing" majority voting. Contrast this algorithm and your result with randomized majority voting.]

<span style="color:blue">No. In the given algorithm non-argmax coin will always be sampled with probability at least $1/(e + 1)$. Assume $\mu_0 > \mu_1$. Expected number of heads observed in $T$ steps will always be less than $T \left[ \frac{e}{1+e}\mu_0 + \frac{1}{1+e}\mu_1 \right]$. Hence, expected average regret is at the least $\frac{1}{1+e}(\mu_0 - \mu_1)$.</span>

## 8) Fairness [7 points]

The question presents a story that is **fictitious** but based on real events. This question is long, but your answer can be short (2-3 sentences).

A new company, called *FairAIrecruiter*, is helping four tech giants – Google, Microsoft, Facebook, Amazon – to automate their hiring process as follows:

- Any applicant who wishes to apply to either of these four tech giants must submit their resume to FairAIrecruiter.
- FairAIrecruiter has put a constraint that any applicant can apply to only one of the four giants.
- FairAIrecruiter collects all resumes until a certain deadline and then processes them. The goal of this processing is to choose applicants whom the tech giants will then interview.

### Visual Description
Text-only slide.

---

## Page 10
### Content
- Google and Microsoft have told FairAIrecruiter that they will interview the top 10% of applicants who have applied to Google and Microsoft respectively. Facebook and Amazon have told FairAIrecruiter that they will interview the top 25% of applicants who have applied to Facebook and Amazon respectively.
- FairAIrecruiter uses machine learning to decide the set of applicants to be interviewed. Specifically, FairAIrecruiter had designed a hypothesis
$$h : \{\text{All possible resumes}\} \to [0, 1],$$
where the label space is the predicted "quality" of the applicant.
- For each of the four tech giants, FairAIrecruiter follows the following procedure. FairAIrecruiter takes the set of all applicants for that tech giant, computes the predicted quality for each applicant using $h$, and selects the top applicants in terms of the predicted quality. The number of applicants selected for each tech giant is determined by the percentages that the tech giant has supplied.

After completion of this process, a group of journalists started investigating if FairAIrecruiter is really fair. Consider two groups of people (these could be grouped by gender, race, or some other attribute). Call them group A and group B. The journalists find out that there were a total of 1000 applicants belonging to group A and 1000 applicants belonging to group B. They also find out somehow that the distribution of qualities of the 1000 group A applicants is identical to the distribution of the qualities of the 1000 group B applicants. They expose that, however, 220 applicants from group A received interview calls whereas only 130 applicants from group B received interview calls. Thus an applicant from group A was nearly twice as likely to receive an interview call under FairAIrecruiter's system even though the applicants in the two groups had identical distributions of qualities! The journalists concluded that there is thus a clear bias in FairAIrecruiter's algorithm against group B. The journalists then sued FairAIrecruiter.

You are the judge/jury assigned to this case. While it appears that there is bias, you are a really smart judge and do not have a knee-jerk reaction. Instead, you look for more information. Specifically, you ask FairAIrecruiter to provide data on a per-tech-giant basis. FairAIrecruiter complies and provides this data:

| Tech giant | Number of applicants from group A | Number of people from group A invited for interview | Number of applicants from group B | Number of people from group B invited for interview |
| :--- | :---: | :---: | :---: | :---: |
| **Google** | 100 | 10 | 400 | 40 |
| **Microsoft** | 100 | 10 | 400 | 40 |
| **Facebook** | 400 | 100 | 100 | 25 |
| **Amazon** | 400 | 100 | 100 | 25 |

What would your judgment be: Based on this evidence, would you convict FairAIrecruiter of bias? Why or why not?

### Visual Description
The page contains descriptive text and a data table showing the breakdown of applicants and interview invitations by tech giant (Google, Microsoft, Facebook, Amazon) for two groups, A and B.

---

## Page 11
### Content
[Learning objective: To learn about an important phenomenon called Simpson's paradox. You should be careful about it when analyzing issues of bias. The real story doesn't involve machine learning, but a manual admissions process. UC Berkeley was sued a few decades ago for perceived bias in admissions. Look it up after the exam.]

<span style="color:blue">When we look at the data broken down by tech giant, we see there is no evidence of bias. For each group, the same proportion of people were admitted to each company (e.g., 10% of the applicants from both groups A and B were accepted into Google, etc).</span>

<span style="color:blue">The appearance of bias when the data is analyzed in aggregate arises from the fact that (for some reason) people from group A are more likely to apply for Facebook and Amazon (which are "easier" to get in), whereas conversely people from group B are more likely to apply for Google and Microsoft (which are "harder" to get in). This results in more people from group A being accepted overall, but as noted above, when analyzed on a per-company basis there does not seem to be any bias against group A or B. This is an example of the phenomenon known as Simpson's paradox.</span>

## 9) Wary of prediction $\neq$ causation [3 points]

[This last question slightly steps beyond the boundary of what we learnt in class. As the final component of this class, it is intended to be a forward looking question that encourages you to explore machine learning and its creative uses. The question text is long but your answer can be short: 1-2 sentences will suffice.]

A researcher wants to understand if the writing styles of masters students and PhD students are different. The researcher thinks of directly using machine learning, but then remembers prediction $\neq$ causation. So the researcher designs a randomized experiment.

The researcher gets a large number of masters and PhD students and asks each of them to give a writing sample. Suppose that these writing samples are representative (that is, have the same distribution as what would be obtained by sampling all masters PhD students in the world) and the sample size is very large. The researcher then uniformly at random splits the writing samples into two equal-sized sets: a training set and a validation set. The researcher then designs a binary classification algorithm by considering each writing sample as the feature vector and the label taking a value "masters" or "PhD". The researcher trains this algorithm on the training set.

The researcher asserts that if there is actually no difference in the writing styles, then no hypothesis can distinguish whether writing samples were written by masters or PhD students. The researcher then applies the hypothesis output by the classification algorithm to every sample in the validation set.

If this hypothesis can classify (that is, distinguish between) masters and PhD writing samples on the validation set reasonably well, then the researcher concludes that there is

### Visual Description
Text-only slide.

---

## Page 12
### Content
a difference between the writing styles of masters and PhD students. <u>Otherwise, the researcher concludes that there is no significant difference between their writing styles.</u>

A machine-learning-based of a similar form is used in practice to understand the difference between two types of data. However, there is a key flaw in the argument in the underlined sentence in the above paragraph. What is the flaw?

[Learning objective: To learn about a new way of using machine learning – for statistical testing – and to reason about it.]

<span style="color:blue">A key flaw in the underlined text is that it assumes that the machine learning algorithm is "perfect." The machine learning algorithm may be suboptimal and may not be able to classify properly even though there is actually a difference. In this case, the researcher will incorrectly conclude that there is actually no difference. Note that there may be other possible answers that can be regarded as correct, and each of your answers will be treated at its own merit.</span>

### Visual Description
Text-only slide.
