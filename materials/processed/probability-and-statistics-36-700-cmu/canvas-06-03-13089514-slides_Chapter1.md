# canvas-06-03-13089514-slides_Chapter1

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-06-03-13089514-slides_Chapter1.pdf`
Duplicate equivalents: `canvas-06-03-13089514-slides_Chapter1.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 21

## Page 1
### Content
**36-700 Prelude/Big Picture**

**Probability vs Statistics: what is the difference?**

**Probability:** What is the basic problem that we study in probability?

**Statistics:** What is the basic problem that we study in statistics?

*Think:* What is the role of *models* in statistics?
What are the role of parameters and random variables in statistical inference?

1
### Visual Description
Text-only slide. The background of the slide is a light gray grid pattern.

---
## Page 2
### Content
Given a sample,
$$X_1, \dots, X_n \sim F,$$
$F \in \mathcal{F}$ the set of possible distributions.

e.g.
$$\mathcal{F} = \left\{ f(x; \mu, \sigma) = \frac{1}{\sigma \sqrt{2\pi}} \exp \left\{ -\frac{(x - \mu)^2}{2\sigma^2} \right\} ; \mu \in \mathbb{R}, \sigma > 0, x \in \mathbb{R} \right\}$$

**Goal:** What can we infer about $F$?

Three broad types of inference:
* point estimation
* interval estimation
* test of hypotheses.

2
### Visual Description
Text and mathematical formulas on a light gray grid background.

---
## Page 3
### Content
**Parametric model $F$:** described by a finite number of parameters.

1. Gaussian model above: two-parameter model.
2. Bernoulli model: one-parameter model:
$$\mathcal{F} = \{ \mathbb{P}_p(X = x) = p^x(1 - p)^{1-x} : 0 \le p \le 1, x = \{0, 1\} \}.$$

If we know/learn from data the value of the parameters, then we know the distribution completely.

**Non-parametric model $F$:** *Not* described by a finite number of parameters.

1. CDF (cumulative distribution function) estimation: the model consists of any valid CDF, i.e.
$$\mathcal{F} = \left\{ F : 0 \le F \le 1, F \text{ non-decreasing and right-continuous}, \lim_{x \to -\infty} F(x) = 0, \lim_{x \to +\infty} F(x) = 1 \right\}.$$
A "good estimator" is the empirical distribution function (EDF).

2. PDF (probability density function) estimation: the class of all possible densities is too big for this problem to be well posed
$\implies$ we assume some smoothness on the density, e.g.
$$\mathcal{F} = \left\{ f : \int f(x)dx = 1, f(x) \ge 0, \int (f''(x))^2 dx < \infty \right\}.$$

3
### Visual Description
Text and mathematical formulas on a light gray grid background.

---
## Page 4
### Content
**36700 CHAPTER 1: Basics of Probability**

**Contents**
1. **Sample Space, Events, and Probability** (4)
   1.1 Sample Spaces and Events (4)
   1.2 Probability Distributions (7)
   1.3 Counting and the Uniform distribution on Discrete Sets (10)
   1.4 Non-Uniform Distributions (11)
2. **Independence of Events** (12)
3. **Conditional Probability** (16)
4. **Bayes' Rule** (19)

Ref: Wasserman Sec 1.1-1.7

**1 Sample Space, Events, and Probability**

We start with a condensed overview of probability theory, focusing on concepts central to statistics.

**1.1 Sample Spaces and Events**

Suppose that we conduct an experiment. An experiment is a measurement of a random (stochastic) process. Our measurements take values in some set $\Omega$: this is the **sample space**. The sample space defines all possible outcomes of our measurement.

Examples:
* Suppose I toss a coin: in this case the sample space $\Omega = \{H, T\}$.
* If I measure the reaction time to some stimulus the sample space $\Omega = (0, \infty)$.

4
### Visual Description
Text-only slide containing a table of contents and introductory definitions. The background is a light gray grid.

---
## Page 5
### Content
An **event** is some subset of $A \subseteq \Omega$, i.e., it is a subset of possible outcomes of our experiment. We say that an event $A$ occurs if the outcome of our experiment lies in the set $A$.

**Exercise:** Suppose I toss a coin twice and $A$ is the event that I observe at most one head. What is the sample space? What is $A$? $\square$

5
### Visual Description
Text-only slide on a light gray grid background.

---
## Page 6
### Content
**Basic set operations**

* (Subset) $A \subseteq B$ means that all elements in $A$ are also in $B$.
* (Complement) $A^c$ or $\bar{A}$: elements that are not in $A$.
* (Empty set) $\Omega^c = \emptyset$.
* (Union) $A \cup B$: elements that are either in $A$ or in $B$, or both.
* (Intersection) $A \cap B$: elements that are both in $A$ and $B$. Sometimes we use $AB$ or $A, B$ for brevity.
* (Set difference) $A \setminus B = A \cap (B^c)$: elements that are in $A$ but not in $B$.
* (Cardinality) $|A|$ denotes the number of elements in $A$.

6
### Visual Description
Text-only slide with a bulleted list of set operations on a light gray grid background.

---
## Page 7
### Content
**1.2 Probability Distributions**

A **probability distribution** is a mapping from events to real numbers that satisfies certain axioms.$^1$ We denote this mapping by $\mathbb{P} : \Omega \to \mathbb{R}$. The axioms are:

1. **Non-negativity:** $\mathbb{P}(A) \ge 0, \quad \forall A \subseteq \Omega$.
2. **Unity of $\Omega$:** $\mathbb{P}(\Omega) = 1$.
3. **Countable additivity:** For a collection $A_1, A_2, \dots,$ of *disjoint* events we must have that,
$$\mathbb{P} \left( \bigcup_{i=1}^\infty A_i \right) = \sum_{i=1}^\infty \mathbb{P}(A_i).$$

---
$^1$(side remark) Generally, it is not feasible to assign probabilities to all subsets of a sample space $\Omega$. Instead, one restricts attention to a set of events called a $\sigma$-algebra, which includes the empty set $\emptyset$, and is closed under countable unions, and complementation. If $\mathbb{P}$ is probability measure defined on a $\sigma$-algebra $\mathcal{A}$, then $(\Omega, \mathcal{A}, \mathbb{P})$ is called a **probability space**. [Ref: Wasserman Appendix 1.9, or C-B]

7
### Visual Description
Text and mathematical formulas on a light gray grid background. Includes a footnote at the bottom.

---
## Page 8
### Content
We use these axioms to show several useful and intuitive properties of probability distributions. All of the properties below can be understood via a Venn diagram.

* $\mathbb{P}(\emptyset) = 0$.
* $A \subset B \implies \mathbb{P}(A) \le \mathbb{P}(B)$.
* $0 \le \mathbb{P}(A) \le 1$.
* $\mathbb{P}(A^c) = 1 - \mathbb{P}(A)$.
* $\mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B) - \mathbb{P}(A \cap B)$.

**HW exercise:** Prove these properties using the three axioms!

8
### Visual Description
Text-only slide with a bulleted list of probability properties on a light gray grid background.
## Page 9
### Content
**Union bound (Boole’s inequality):** For not necessarily disjoint events $A_i$ we have
$$\mathbb{P}\left(\bigcup_{i=1}^n A_i\right) \le \sum_{i=1}^n \mathbb{P}(A_i).$$

Compare to axiom 3 and use Venn diagrams to understand it. (Exercise: Prove the union bound formally. Also show that the Bonferroni’s Inequality is a special case of the union bound.)

### Visual Description
Text-only slide. The content is presented on a light gray grid background.

---
## Page 10
### Content
### 1.3 Counting and the Uniform distribution on Discrete Sets

Suppose we toss a die twice. There are 36 possible outcomes: $\Omega = \{(t_1, t_2) : t_1, t_2 = 1, 2, 3, 4, 5, 6\}$. If the die is fair then each outcome is equally likely. This is an example of a uniform distribution on a discrete set.

The general rule of calculating the probability of an event under a uniform distribution on finite sample spaces is
$$\mathbb{P}(A) = \frac{|A|}{|\Omega|}.$$

For example, let $A$ be the event that the sum of two tosses being strictly less than five. Then $A = \{(1, 1), (1, 2), (1, 3), (2, 1), (2, 2), (3, 1)\}$. Thus $\mathbb{P}(A) = 6/36 = 1/6$.

**Example:** *There are two black balls and three white balls in a bag. Two balls are randomly drawn, without replacement, from the bag. What is the probability of the two balls having different colors? (What is the probability if the balls are drawn with replacement?)*

### Visual Description
Text-only slide. The formula for $\mathbb{P}(A)$ is enclosed in a box. The content is presented on a light gray grid background.

---
## Page 11
### Content
### 1.4 Non-Uniform Distributions

Under non-uniform distributions, probabilities can be calculated by adding the probabilities of the individual outcomes.

**Example:** Redo the previous example but now assuming that the balls of the same color are indistinguishable. (*Hint: Each outcome in the unordered sample space corresponds to some outcomes in the ordered sample space, but the number of outcomes differs.*) $\square$

### Visual Description
Text-only slide. The content is presented on a light gray grid background.

---
## Page 12
### Content
## 2 Independence of Events

Independence roughly asks the question of whether one event provides any information about another.

**Examples:** Are the events in the following examples (most likely) independent?

* Suppose we toss a fair coin twice. Let $H_i$ be the event that the $i$th toss is head ($i = 1, 2$). Are $H_1$ and $H_2$ independent?
* $A = \text{"rain today"}$;
  $B = \text{"rain yesterday"}$
* $A = \text{"draw one card from a deck and it’s black"}$;
  $B = \text{"draw a second card and it’s black"}$
* $A = \text{"rain today"}$;
  $B = \text{"my garbage being collected today"}$
* $A = \text{"severe hailstorm today"}$;
  $B = \text{"the local airport will be closed to flights sometime today"}$

### Visual Description
Text-only slide. The content is presented as a list of bullet points on a light gray grid background.

---
## Page 13
### Content
The formal definition of independence is

**Definition 1 (Independence)** Two events $A$ and $B$ are called independent if
$$\mathbb{P}(A \cap B) = \mathbb{P}(A)\mathbb{P}(B). \tag{1}$$

A set of events $A_j$ ($j \in I$) are called mutually independent if
$$\mathbb{P}\left(\bigcap_{j \in J} A_j\right) = \prod_{j \in J} \mathbb{P}(A_j),$$
for any finite subset $J$ of $I$.

**Examples:**
(i) If we toss a fair coin twice, let $H_i$ be the event that the $i$th toss is head ($i = 1, 2$). We can formally verify that $H_1$ and $H_2$ are independent.

Venn diagram; sample space with equally likely outcomes:

### Visual Description
Text-only slide. The content includes mathematical definitions and an example on a light gray grid background.

---
## Page 14
### Content
(ii) Consider tossing a fair die once. Let $A = \{1, 2, 3, 4\}$, $B = \{2, 4, 6\}$. Are $A$ and $B$ independent?
$\square$

### Visual Description
Text-only slide. The content is presented on a light gray grid background.

---
## Page 15
### Content
(iii) Consider tossing a fair coin, what is the probability of $A = \text{"at least one head in the first 10 tosses"}$?

### Visual Description
Text-only slide. The content is presented on a light gray grid background.

---
## Page 16
### Content
## 3 Conditional Probability

**Definition 2 (Conditional probability)** If $\mathbb{P}(B) > 0$, the conditional probability of $A$ given $B$ is
$$\mathbb{P}(A|B) := \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)}. \tag{2}$$

Conditional probability gives another interpretation of independence: $A$ and $B$ are independent if the unconditional probability is the same as the conditional probability.

**Example:** Consider tossing a fair die. Let $A$ be the event that the result is an odd number, and $B = \{1, 2, 3\}$. Then $\mathbb{P}(A|B) = 2/3$, and $\mathbb{P}(A) = 1/2$. In this example, $A$ and $B$ are not independent.

### Visual Description
Text-only slide. The content includes a definition and an example on a light gray grid background.
## Page 17
### Content
**Remark:** In general $\mathbb{P}(A|B) \neq \mathbb{P}(B|A)$.

17
### Visual Description
Text-only slide.

---
## Page 18
### Content
**The chain rule** A simple re-writing of the above expression yields the so-called chain rule:
$$\mathbb{P}(A \cap B) = \mathbb{P}(B)\mathbb{P}(A|B) = \mathbb{P}(A)\mathbb{P}(B|A).$$
More generally,
$$\mathbb{P}(A_1 \cap A_2 \cap A_3 \dots) = \mathbb{P}(A_1)\mathbb{P}(A_2|A_1)\mathbb{P}(A_3|A_2, A_1) \dots$$
(note that $A_2, A_1$ means $A_2$ and $A_1$, the intersection of these 2 events.)

The chain rule is very useful in general and also for temporal processes where the subscripts may mean $1 = t_1, 2 = t_2$, etc.

**Exercise:** Calculate the probability that it will not rain during the whole month of September based on historical data.

(*Note:* This is a statistical inference and statistical modeling problem. What are the roles of models here? What data might you need to collect? What assumptions on the d.g.p might be reasonable?) $\square$

18
### Visual Description
Text-only slide.

---
## Page 19
### Content
## 4 Bayes' Rule

Roughly Bayes rule allows us to calculate the probability of $B|A$ from the probability of $A|B$. As a preliminary we need the following:

**Theorem 3 (Law of total probability)** Let $A_1, \dots, A_k$ be a partition of $\Omega$. Then for any $B$,
$$\mathbb{P}(B) = \sum_{i=1}^{k} \mathbb{P}(B|A_i)\mathbb{P}(A_i).$$

19
### Visual Description
Text-only slide.

---
## Page 20
### Content
The law of total probability is a combination of additivity and conditional probability. It leads to the very useful Bayes' rule.

**Theorem 4 (Bayes' Rule)** Let $A_1, \dots, A_k$ be a partition of $\Omega$. Then
$$\mathbb{P}(A_i|B) = \frac{\mathbb{P}(B|A_i)\mathbb{P}(A_i)}{\mathbb{P}(B)} = \frac{\mathbb{P}(B|A_i)\mathbb{P}(A_i)}{\sum_{i=1}^{k} \mathbb{P}(B|A_i)\mathbb{P}(A_i)}.$$

This is useful when $\mathbb{P}(A_i|B)$ is not obvious to calculate but $\mathbb{P}(B|A_i)$ and $\mathbb{P}(A_i)$ are easy to find. A typical application is classification.

20
### Visual Description
Text-only slide.

---
## Page 21
### Content
**Example:** Suppose there are three types of emails: $A_1 = \text{"spam"}$, $A_2 = \text{"low priority"}$, $A_3 = \text{"high priority"}$. Based on previous experience, $\mathbb{P}(A_1) = 0.85, \mathbb{P}(A_2) = 0.1, \mathbb{P}(A_3) = 0.05$. Let $B$ be the event that an email contains the word "free", then based on previous experience $\mathbb{P}(B|A_1) = 0.9, \mathbb{P}(B|A_2) = 0.1, \mathbb{P}(B|A_3) = 0.1$. Now a new coming email contains the word "free", what is the probability that it is spam?

21
### Visual Description
Text-only slide.
