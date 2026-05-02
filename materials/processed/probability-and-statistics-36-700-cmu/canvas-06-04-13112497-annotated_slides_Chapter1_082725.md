# canvas-06-04-13112497-annotated_slides_Chapter1_082725

Source: `materials/archive/probability-and-statistics-36-700-cmu/canvas-modules/canvas-06-04-13112497-annotated_slides_Chapter1_082725.pdf`
Duplicate equivalents: `canvas-06-04-13112497-annotated_slides_Chapter1_082725.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 24

## Page 1
### Content
**36-700 Prelude/Big Picture**

**Probability vs Statistics: what is the difference?**

*   **Probability:** What is the basic problem that we study in probability?
    *   *Handwritten note:* Given a d.g.p (data-generating process), what are the properties of the outcomes?
*   **Statistics:** What is the basic problem that we study in statistics?
    *   *Handwritten note:* Given the outcomes, what can we say about the d.g.p?
    *   *Handwritten note:* Stat. inf. (Statistical inference) --- inverse of prob.

*Think:* What is the role of *models* in statistics?
What are the role of parameters and random variables in statistical inference?

### Visual Description
The slide features a diagram at the top with two circles. The left circle is labeled "Data-generating process" and the right circle is labeled "Observed data". An arrow points from the left to the right circle, labeled "Prob. Th." (Probability Theory). A return arrow points from the right to the left circle, labeled "Stat. Inf." (Statistical Inference). The rest of the page contains text with blue handwritten annotations answering the posed questions.

---

## Page 2
### Content
Given a sample,
$$X_1, \dots, X_n \sim F,$$
*   *Handwritten note:* $X_1, \dots, X_n$ is "data".
*   *Handwritten note:* $F$ is the "underlying distr. (unknown)".
*   *Handwritten note:* These are RVs (Random Variables).

$F \in \mathcal{F}$ the set of possible distributions.
e.g.
$$\mathcal{F} = \left\{ f(x; \mu, \sigma) = \frac{1}{\sigma\sqrt{2\pi}} \exp \left\{ -\frac{(x-\mu)^2}{2\sigma^2} \right\} ; \mu \in \mathbb{R}, \sigma > 0, x \in \mathbb{R} \right\}$$
*   *Handwritten note:* Parameters of interest (POIs) $\theta = (\mu, \sigma)$.

**Goal:** What can we infer about $F$?

**Three broad types of inference:**
1.  **point estimation** — *Handwritten note:* single best guess of quantity of interest $\hat{\theta}(X_1, \dots, X_n)$. Note: $\hat{\theta}$ is an RV.
2.  **interval estimation** — *Handwritten note:* $[L(X_1, \dots, X_n), U(X_1, \dots, X_n)]$. Note: $L, U$ are RVs.
3.  **test of hypotheses.** — *Handwritten note:* e.g. $H_0: \theta = \theta_0$ vs $H_a: \theta \neq \theta_0$. Base decision on "test-statistic" $T(X_1, \dots, X_n)$. Note: $T$ is an RV.

*Handwritten notes at bottom:*
*   properties of RVs?
*   "good" estimator?
*   convergence of $\hat{\theta}$ as $n \to \infty$?

### Visual Description
The slide contains mathematical definitions and a list of inference types. It is heavily annotated with blue and red handwriting. Red circles highlight that estimators and test statistics are Random Variables (RVs).

---

## Page 3
### Content
**Parametric model $F$:** described by a finite number of parameters.
1.  Gaussian model above: two-parameter model.
2.  Bernoulli model: one-parameter model:
    $$\mathcal{F} = \{ \mathbb{P}_p(X = x) = p^x(1 - p)^{1-x} : 0 \le p \le 1, x = \{0, 1\} \}.$$

If we know/learn from data the value of the parameters, then we know the distribution completely.

**Non-parametric model $F$:** Not described by a finite number of parameters.
1.  **CDF** (cumulative distribution function) estimation: the model consists of any valid CDF, i.e.
    *   *Handwritten note:* CDF $F(x) \stackrel{\text{def}}{=} \mathbb{P}(X \le x)$
    $$\mathcal{F} = \{ F : 0 \le F \le 1, F \text{ non-decreasing and right-continuous}, \lim_{x \to -\infty} F(x) = 0, \lim_{x \to +\infty} F(x) = 1 \}.$$
    A "good estimator" is the empirical distribution function (EDF).
    *   *Handwritten note:* EDF $\hat{F}_n(x) \stackrel{\text{def}}{=} \frac{1}{n} \sum_{i=1}^n I(X_i \le x)$

2.  **PDF** (probability density function) estimation: the class of all possible densities is too big for this problem to be well posed
    $\implies$ we assume some smoothness on the density, e.g.
    $$\mathcal{F} = \left\{ f : \int f(x)dx = 1, f(x) \ge 0, \int (f''(x))^2 dx < \infty \right\}.$$
    *   *Handwritten note:* ex. of nonparametric estimator of pdfs: histogram estimator.

### Visual Description
The slide compares parametric and non-parametric models with text and formulas. Blue handwritten notes define CDF and EDF, including a small sketch of a step function for the EDF and a histogram for the PDF estimator.

---

## Page 4
### Content
**36700 CHAPTER 1: Basics of Probability**

**Contents**
1.  **Sample Space, Events, and Probability** (page 4)
    *   *Handwritten note:* three axioms of prob.
    1.1 Sample Spaces and Events (page 4)
    1.2 Probability Distributions (page 7)
    1.3 Counting and the Uniform distribution on Discrete Sets (page 10)
    1.4 Non-Uniform Distributions (page 11)
2.  **Independence of Events** (page 12)
3.  **Conditional Probability** (page 16)
4.  **Bayes’ Rule** (page 19)

Ref: Wasserman Sec 1.1-1.7

### 1 Sample Space, Events, and Probability
We start with a condensed overview of probability theory, focusing on concepts central to statistics.

#### 1.1 Sample Spaces and Events
Suppose that we conduct an **experiment**. An experiment is a measurement of a **random (stochastic) process**. Our measurements take values in some set $\Omega$: this is the **sample space**. The sample space defines all possible outcomes of our measurement.

Examples:
*   Suppose I toss a coin: in this case the sample space $\Omega = \{H, T\}$.
*   If I measure the reaction time to some stimulus the sample space $\Omega = (0, \infty)$.
    *   *Handwritten note:* $\mathbb{R}^+$

### Visual Description
This is a table of contents and introductory page for Chapter 1. It includes section headings and page numbers. There are minor blue handwritten checkmarks and a note about the "three axioms of prob." and "$\mathbb{R}^+$".

---

## Page 5
### Content
An **event** is some subset of $A \subseteq \Omega$, i.e., it is a subset of possible outcomes of our experiment. We say that an event $A$ occurs if the outcome of our experiment lies in the set $A$.

**Exercise:** Suppose I toss a coin twice and $A$ is the event that I observe at most one head. What is the sample space? What is $A$?

*Handwritten Solution:*
$$\Omega = \{HH, HT, TH, TT\}$$
(labeled as "sample space")
$$A = \{HT, TH, TT\}$$
(labeled as "event A")

### Visual Description
The slide defines an "event" and provides an exercise. The solution to the exercise is written in large blue handwriting in the middle of the page.

---

## Page 6
### Content
**Basic set operations**
*   (Subset) $A \subseteq B$ means that all elements in $A$ are also in $B$.
*   (Complement) $A^c$ or $\bar{A}$: elements that are not in $A$.
*   (Empty set) $\Omega^c = \emptyset$.
*   (Union) $A \cup B$: elements that are either in $A$ or in $B$, or both.
*   (Intersection) $A \cap B$: elements that are both in $A$ and $B$. Sometimes we use $AB$ or $A, B$ for brevity.
*   (Set difference) $A \setminus B = A \cap (B^c)$: elements that are in $A$ but not in $B$.
*   (Cardinality) $|A|$ denotes the number of elements in $A$.

*Handwritten notes:*
*   $A \cup A = A$
*   $A \cap A = A$

### Visual Description
The slide lists basic set operations with bullet points. It includes several hand-drawn Venn diagrams in blue:
1.  $A \subseteq B$: A circle $A$ inside a circle $B$, both inside a box $\Omega$.
2.  $A^c$: A circle $A$ inside a box $\Omega$, with the area outside $A$ shaded.
3.  $A \cup B$: Two overlapping circles $A$ and $B$, with both circles shaded ("OR").
4.  $A \cap B$: Two overlapping circles $A$ and $B$, with only the overlapping area shaded ("AND").
5.  $A \setminus B$: Two overlapping circles $A$ and $B$, with only the part of $A$ that does not overlap with $B$ shaded.

---

## Page 7
### Content
#### 1.2 Probability Distributions
A **probability distribution** is a mapping from events to real numbers that satisfies certain axioms. $^1$ We denote this mapping by $\mathbb{P} : \Omega \mapsto \mathbb{R}$.
*   *Handwritten note:* function that assigns a real number $\mathbb{P}(A)$ to each event $A \subseteq \Omega$.

The axioms are:
1.  **Non-negativity:** $\mathbb{P}(A) \ge 0, \forall A \subseteq \Omega$.
2.  **Unity of $\Omega$:** $\mathbb{P}(\Omega) = 1$.
3.  **Countable additivity:** For a collection $A_1, A_2, \dots$ of *disjoint* events we must have that,
    $$\mathbb{P}\left(\bigcup_{i=1}^\infty A_i\right) = \sum_{i=1}^\infty \mathbb{P}(A_i).$$

*Handwritten note:*
Def: $A_1, A_2$ disjoint if $A_1 \cap A_2 = \emptyset$.

---
$^1$(side remark) Generally, it is not feasible to assign probabilities to all subsets of a sample space $\Omega$. Instead, one restricts attention to a set of events called a $\sigma$-algebra, which includes the empty set $\emptyset$, and is closed under countable unions, and complementation. If $\mathbb{P}$ is probability measure defined on a $\sigma$-algebra $\mathcal{A}$, then $(\Omega, \mathcal{A}, \mathbb{P})$ is called a **probability space**. [Ref: Wasserman Appendix 1.9, or C-B]

### Visual Description
The slide defines probability distributions and lists the three Kolmogorov axioms. Blue handwriting adds a functional definition and a definition of disjoint events, accompanied by a small Venn diagram showing two non-overlapping circles $A_1$ and $A_2$.

---

## Page 8
### Content
We use these axioms to show several useful and intuitive properties of probability distributions. All of the properties below can be understood via a Venn diagram.
*   $\mathbb{P}(\emptyset) = 0$. *Handwritten note:* Note: $\Omega = \Omega \cup \emptyset$ (disjoint events).
*   $A \subset B \implies \mathbb{P}(A) \le \mathbb{P}(B)$.
*   $0 \le \mathbb{P}(A) \le 1$.
*   $\mathbb{P}(A^c) = 1 - \mathbb{P}(A)$.
*   $\mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B) - \mathbb{P}(A \cap B)$.

**HW exercise:** Prove these properties using the three axioms!

**Hint:** Decompose set into disjoint sets
*   $A \cup B = (A \setminus B) \cup (A \cap B) \cup (B \setminus A)$ (disjoint sets)
*   $A = (A \setminus B) \cup (A \cap B)$
*   $B = (B \setminus A) \cup (A \cap B)$
*   Apply axioms of countable additivity!

### Visual Description
The slide lists properties derived from the probability axioms. It includes a blue hand-drawn Venn diagram of two overlapping circles $A$ and $B$, with regions labeled $A \setminus B$, $A \cap B$, and $B \setminus A$. Extensive blue handwritten hints for the homework exercise are provided at the bottom.
## Page 9
### Content
**Union bound (Boole’s inequality):** For not necessarily disjoint events $A_i$ we have
$$\mathbb{P}\left(\bigcup_{i=1}^n A_i\right) \le \sum_{i=1}^n \mathbb{P}(A_i).$$

Compare to axiom 3 and use Venn diagrams to understand it. (Exercise: Prove the union bound formally. Also show that the Bonferroni’s Inequality is a special case of the union bound.)

**Handwritten Notes:**
*   $B_1 = A_1$
*   $B_2 = A_2 \setminus A_1$
*   $B_3 = A_3 \setminus (A_1 \cup A_2)$
*   $\dots$

**Sketch of proof:**
1) Define seq. of events $B_n = A_n \setminus \bigcup_{i=1}^{n-1} A_i$
2) Show that they are disjoint
3) Show that $\bigcup_{n=1}^N B_n = \bigcup_{n=1}^N A_n$ (e.g. by mathematical induction)

### Visual Description
The slide contains printed text about the Union bound and Boole's inequality. It includes a blue handwritten Venn diagram showing five overlapping circles labeled $A_1$ through $A_5$. To the right and below the diagram are blue handwritten notes defining a sequence of disjoint sets $B_n$ and outlining a three-step proof sketch.

---

## Page 10
### Content
**Handwritten Notes:**
Union bound $\implies$ prove Bonferroni's Ineq.

$$\mathbb{P}(A \cap B) \ge \mathbb{P}(A) + \mathbb{P}(B) - 1$$

*   $\mathbb{P}(A \cap B)$: "sometimes hard to calculate"
*   $\mathbb{P}(A) + \mathbb{P}(B) - 1$: "lower bound useful only if the prob. of the individual events are sufficiently large"

### Visual Description
This page consists entirely of blue handwritten notes on a light gray grid background. It presents Bonferroni's Inequality as a consequence of the Union bound, with annotations explaining the practical utility of the lower bound.

---

## Page 11
### Content
### 1.3 Counting and the Uniform distribution on Discrete Sets
(Handwritten: to construct prob. assignments on finite sample spaces)

Suppose we toss a die twice. There are 36 possible outcomes: $\Omega = \{(t_1, t_2) : t_1, t_2 = 1, 2, 3, 4, 5, 6\}$. If the die is fair then each outcome is equally likely. This is an example of a uniform distribution on a discrete set.

The general rule of calculating the probability of an event under a uniform distribution on finite sample spaces is
$$\mathbb{P}(A) = \frac{|A|}{|\Omega|}.$$

For example, let $A$ be the event that the sum of two tosses being strictly less than five. Then $A = \{(1, 1), (1, 2), (1, 3), (2, 1), (2, 2), (3, 1)\}$. Thus $\mathbb{P}(A) = 6/36 = 1/6$.

**Example:** There are two black balls and three white balls in a bag. Two balls are randomly drawn, *without replacement*, from the bag. What is the probability of the two balls having different colors? (What is the probability if the balls are drawn with replacement?)

**Handwritten Notes:**
Assume distinguishable objects:
$\Omega = \{B_1 B_2, B_1 W_1, B_1 W_2, B_1 W_3, \dots\}$
Then uniform distr on $\Omega$.

1) w/o replacement:
$|\Omega| = 5 \cdot 4 = 20$
$|A| = 2 \cdot 3 + 3 \cdot 2 = 12$
$\mathbb{P}(A) = \frac{12}{20} = \frac{3}{5}$

2) w. replacement:
$\mathbb{P}(A) = \frac{12}{25}$

### Visual Description
The slide contains printed text explaining uniform distributions and counting. It includes a blue handwritten drawing of a bag containing two black balls ($B_1, B_2$) and three white balls ($W_1, W_2, W_3$). Blue handwritten calculations solve the ball-drawing example for both "without replacement" and "with replacement" scenarios.

---

## Page 12
### Content
### 1.4 Non-Uniform Distributions
Under non-uniform distributions, probabilities can be calculated by adding the probabilities of the individual outcomes.

**Example:** Redo the previous example but now assuming that the balls of the same color are indistinguishable. (*Hint: Each outcome in the unordered sample space corresponds to some outcomes in the ordered sample space, but the number of outcomes differs.*)

**Handwritten Notes:**
If we assume indistinguishable obj,
$\Omega = \{WW, WB, BW, BB\}$
then non-uniform distr. on $\Omega$.

w/o replacement:
$\mathbb{P}(WW) = \frac{3}{5} \cdot \frac{2}{4} = \frac{6}{20}$
$\mathbb{P}(BB) = \frac{2}{5} \cdot \frac{1}{4} = \frac{2}{20}$
$A = \{WB, BW\}$
$\mathbb{P}(A) = \mathbb{P}(\Omega) - \mathbb{P}(WW) - \mathbb{P}(BB) = 1 - \frac{6}{20} - \frac{2}{20} = \frac{12}{20} = \frac{3}{5}$
"same result as before"

**Take-home:**
(Start by defining your sample space) and events of interest.

### Visual Description
The slide contains printed text about non-uniform distributions. It includes a blue handwritten drawing of a bag with balls and detailed calculations showing that assuming indistinguishable objects leads to the same probability result as the distinguishable case, provided a non-uniform distribution is used.

---

## Page 13
### Content
### 2 Independence of Events
(Handwritten: often assumption on d.g.p.)

Independence roughly asks the question of whether one event provides any information about another.

**Examples:** Are the events in the following examples (most likely) independent?
*   Suppose we toss a fair coin twice. Let $H_i$ be the event that the $i$th toss is head ($i = 1, 2$). Are $H_1$ and $H_2$ independent? **Yes**
*   $A = \text{"rain today"}$; $B = \text{"rain yesterday"}$ **No**
*   $A = \text{"draw one card from a deck and it’s black"}$; $B = \text{"draw a second card and it’s black"}$ **No** (Handwritten: w/o replacement)
*   $A = \text{"rain today"}$; $B = \text{"my garbage being collected today"}$ **Yes**
*   $A = \text{"severe hailstorm today"}$; $B = \text{"the local airport will be closed to flights sometime today"}$ **No**

### Visual Description
The slide contains printed text introducing the concept of independence with several examples. Blue handwritten "Yes" and "No" answers are written next to each example, along with a few brief clarifying notes.

---

## Page 14
### Content
The formal definition of independence is

**Definition 1 (Independence)** Two events $A$ and $B$ are called independent if (Handwritten: if and only if)
$$\mathbb{P}(A \cap B) = \mathbb{P}(A)\mathbb{P}(B). \quad (1)$$

A set of events $A_j$ ($j \in I$) are called **mutually independent** if
$$\mathbb{P}\left(\bigcap_{j \in J} A_j\right) = \prod_{j \in J} \mathbb{P}(A_j),$$
for any finite subset $J$ of $I$.

**Examples:**
(i) If we toss a fair coin twice, let $H_i$ be the event that the $i$th toss is head ($i = 1, 2$). We can formally verify that $H_1$ and $H_2$ are independent.

Venn diagram; sample space with equally likely outcomes:

**Handwritten Notes:**
$\Omega = \{HH, HT, TH, TT\}$
uniform distr on $\Omega$

$\mathbb{P}(H_1 \cap H_2) \stackrel{?}{=} \mathbb{P}(H_1)\mathbb{P}(H_2)$
$1/4 = (2/4) \cdot (2/4)$

Answer: yes. $H_1, H_2$ independent events.

### Visual Description
The slide contains printed definitions of independence and mutual independence. It includes a blue handwritten Venn diagram of the sample space for two coin tosses, with circles grouping the outcomes for $H_1$ and $H_2$. Calculations are handwritten in blue to verify the independence of $H_1$ and $H_2$.

---

## Page 15
### Content
**Handwritten Notes:**
$\Omega = \{1, 2, \dots, 6\}$
uniform distr. on finite sample space

(ii) Consider tossing a fair die once. Let $A = \{1, 2, 3, 4\}$, $B = \{2, 4, 6\}$. Are $A$ and $B$ independent?
Note: $A \cap B \neq \emptyset$

$\mathbb{P}(A \cap B) \stackrel{?}{=} \mathbb{P}(A) \cdot \mathbb{P}(B)$
$2/6 = (4/6) \cdot (3/6)$
$1/3 = (2/3) \cdot (1/2)$
Answer: yes

Recall: Indep. roughly asks the question of whether one event provides info on another.

**Q1.** Suppose $A$ and $B$ disjoint events and $\mathbb{P}(A) > 0, \mathbb{P}(B) > 0$. Can $A$ and $B$ be independent?
Answer: **No**. $\mathbb{P}(AB) = \mathbb{P}(\emptyset) = 0$. Yet, $\mathbb{P}(A) \cdot \mathbb{P}(B) \neq 0$.

**Q2.** Are the events $A, B, C$ (mutually) independent if $\mathbb{P}(ABC) = \mathbb{P}(A)\mathbb{P}(B)\mathbb{P}(C)$?
Answer: **No**, not necessarily (see def). Need to also check pairwise independence.

### Visual Description
The slide contains printed text for example (ii) and is heavily annotated with blue handwritten notes. It includes calculations for the die example, a small Venn diagram showing disjoint sets $A$ and $B$, and two conceptual questions (Q1 and Q2) with their respective answers.

---

## Page 16
### Content
(iii) Consider tossing a fair coin, what is the probability of $A = \text{"at least one head in the first 10 tosses"}$?

### Visual Description
Text-only slide.

---
## Page 17
### Content
# 3 Conditional Probability

**Definition 2 (Conditional probability)** If $\mathbb{P}(B) > 0$, the conditional probability of $A$ given $B$ is
$$\mathbb{P}(A|B) := \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)} \quad (2)$$
*Handwritten note:* fraction of times $A$ occurs among those in which $B$ occurs

Conditional probability gives another interpretation of independence: $A$ and $B$ are independent if the unconditional probability is the same as the conditional probability.
*Handwritten note:* If $A, B$ independent, then $\mathbb{P}(A|B) = \mathbb{P}(A)$

**Example:** Consider tossing a fair die. Let $A$ be the event that the result is an odd number, and $B = \{1, 2, 3\}$. Then $\mathbb{P}(A|B) = 2/3$, and $\mathbb{P}(A) = 1/2$. In this example, $A$ and $B$ are not independent.

*Handwritten notes for example:*
$\Omega = \{1, 2, 3, 4, 5, 6\}$
$A = \{1, 3, 5\}$
$B = \{1, 2, 3\}$
equally likely outcomes
$\mathbb{P}(A|B) = \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)} = \frac{2/6}{3/6} = \frac{2}{3}$
$\mathbb{P}(A) = 3/6 = 1/2$
$\mathbb{P}(A|B) \neq \mathbb{P}(A)$

*Handwritten note at bottom:*
For any fixed $B$ s.t. $\mathbb{P}(B) > 0$, $\mathbb{P}_B(\cdot) = \mathbb{P}(\cdot|B)$ is a probability (i.e., it satisfies the three axioms)

### Visual Description
The slide contains printed text and extensive blue handwritten annotations on a grid background. It includes a Venn diagram showing two overlapping circles labeled $A$ and $B$, with the intersection $A \cap B$ shaded.

---

## Page 18
### Content
**Remark:** In general $\mathbb{P}(A|B) \neq \mathbb{P}(B|A)$.

*Handwritten notes:*
In practice, easy to make a mistake.
In legal trial, "prosecutor's fallacy"

e.g. guilty $\xrightarrow{\text{high prob}}$ testimony is true
testimony is true $\xleftarrow{\text{equally high prob?}}$ [crossed out]

$\mathbb{P}(A|B) = \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)}$
$\mathbb{P}(B|A) = \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(A)}$

That is, $\mathbb{P}(A|B) = \mathbb{P}(B|A)$ if and only if $\mathbb{P}(A) = \mathbb{P}(B)$ (assuming $\mathbb{P}(A) > 0, \mathbb{P}(B) > 0$)

### Visual Description
The slide features a printed remark with significant handwritten additions in blue and red. Red circles and lines are used to link terms in the conditional probability formulas to conceptual labels like "accused is guilty" and "testimony is true".

---

## Page 19
### Content
**The chain rule** A simple re-writing of the above expression yields the so-called chain rule:
$$\mathbb{P}(A \cap B) = \mathbb{P}(B)\mathbb{P}(A|B) = \mathbb{P}(A)\mathbb{P}(B|A).$$

More generally,
$$\mathbb{P}(A_1 \cap A_2 \cap A_3 \dots) = \mathbb{P}(A_1)\mathbb{P}(A_2|A_1)\mathbb{P}(A_3|A_2, A_1) \dots$$
(note that $A_2, A_1$ means $A_2$ and $A_1$, the intersection of these 2 events.)

The chain rule is very useful in general and also for temporal processes where the subscripts may mean $1 = t_1, 2 = t_2$, etc.

**Exercise:** Calculate the probability that it will not rain during the whole month of September based on historical data.

(Note: This is a statistical inference and statistical modeling problem. What are the roles of models here? What data might you need to collect? What assumptions on the d.g.p might be reasonable?)

*Handwritten notes:*
useful!
check this!
Think
Define $A_i = \text{event of "no rain on day } i\text{"}$, $i=1, \dots, 30$ days
$\mathbb{P}(A_1 \cap A_2 \cap \dots \cap A_{30}) = \mathbb{P}(A_1) \cdot \mathbb{P}(A_2|A_1) \cdot \mathbb{P}(A_3|A_1, A_2) \dots \mathbb{P}(A_{30}|A_1, \dots, A_{29})$
What now?

### Visual Description
The slide contains printed text about the chain rule and an exercise, with blue handwritten notes expanding on the exercise by defining events and writing out the expanded chain rule formula.

---

## Page 20
### Content
*Handwritten notes:*
**Hint:**
(1) Assume e.g. Markov Chain of 1st order
$$\mathbb{P}(A_1) \cdot \prod_{i=2}^{30} \mathbb{P}(A_i|A_{i-1})$$
need to estimate these quantities

(2) Assume all days of Sept are exchangeable (assume stationarity)
$\implies$ use historical data of Sept. months to estimate these two probs. empirically

That is, assume:
$\mathbb{P}(A_1) = \mathbb{P}(A_2) = \dots = \mathbb{P}(A_{30})$
$\mathbb{P}(A_2|A_1) = \mathbb{P}(A_3|A_2) = \dots = \mathbb{P}(A_{30}|A_{29})$

### Visual Description
This page consists entirely of handwritten notes in blue and red on a grid background, providing hints for the exercise on the previous page.

---

## Page 21
### Content
*Handwritten notes on calendar image:*
September 2024 (also 2023, 2022, ...)
rain, no rain

### Visual Description
The page shows a screenshot of a weather calendar for September 2024, showing daily conditions (Cloudy, Partly Cloudy, Mostly Sunny, etc.) and precipitation amounts. Handwritten notes indicate that historical data from previous years (2023, 2022) should be used to identify "rain" and "no rain" days.

---

## Page 22
### Content
# 4 Bayes' Rule

Roughly Bayes rule allows us to calculate the probability of $B|A$ from the probability of $A|B$. As a preliminary we need the following:

**Theorem 3 (Law of total probability)** Let $A_1, \dots, A_k$ be a partition of $\Omega$. Then for any $B$,
$$\mathbb{P}(B) = \sum_{i=1}^k \mathbb{P}(B|A_i)\mathbb{P}(A_i).$$

*Handwritten notes:*
Partition of $\Omega$:
$\forall i \neq j, A_i \cap A_j = \emptyset$
$\bigcup_{i=1}^k A_i = \Omega$

Prove this! Use axiom of countable additivity and def of cond prob.
$B = \bigcup_{i=1}^k (B \cap A_i)$ (disjoint)
$\mathbb{P}(B) = \sum_{i=1}^k \mathbb{P}(B \cap A_i) = \sum_{i=1}^k \mathbb{P}(A_i) \cdot \mathbb{P}(B|A_i)$

### Visual Description
The slide contains printed text for Bayes' Rule and the Law of Total Probability. Blue handwritten notes include a diagram of a sample space $\Omega$ partitioned into regions $A_1, A_2, A_3, A_4$ with an event $B$ overlapping them, and a brief proof sketch.

---

## Page 23
### Content
The law of total probability is a combination of additivity and conditional probability. It leads to the very useful Bayes' rule.

**Theorem 4 (Bayes' Rule)** Let $A_1, \dots, A_k$ be a partition of $\Omega$. Then
$$\mathbb{P}(A_i|B) = \frac{\mathbb{P}(B|A_i)\mathbb{P}(A_i)}{\mathbb{P}(B)} = \frac{\mathbb{P}(B|A_i)\mathbb{P}(A_i)}{\sum_{j=1}^k \mathbb{P}(B|A_j)\mathbb{P}(A_j)}.$$

This is useful when $\mathbb{P}(A_i|B)$ is not obvious to calculate but $\mathbb{P}(B|A_i)$ and $\mathbb{P}(A_i)$ are easy to find. A typical application is classification.

*Handwritten notes:*
Def of cond. prob.
$\mathbb{P}(A_i|B) = \frac{\mathbb{P}(A_i \cap B)}{\mathbb{P}(B)} = \frac{\mathbb{P}(B|A_i) \cdot \mathbb{P}(A_i)}{\mathbb{P}(B)}$
law of total prob.

### Visual Description
The slide presents Theorem 4 (Bayes' Rule) with printed text. Blue handwritten notes show the derivation from the definition of conditional probability and indicate where the law of total probability is applied in the denominator.

---

## Page 24
### Content
**Example:** Suppose there are three types of emails: $A_1 = \text{"spam"}$, $A_2 = \text{"low priority"}$, $A_3 = \text{"high priority"}$. Based on previous experience, $\mathbb{P}(A_1) = 0.85, \mathbb{P}(A_2) = 0.1, \mathbb{P}(A_3) = 0.05$. Let $B$ be the event that an email contains the word "free", then based on previous experience $\mathbb{P}(B|A_1) = 0.9, \mathbb{P}(B|A_2) = 0.1, \mathbb{P}(B|A_3) = 0.1$. Now a new coming email contains the word "free", what is the probability that it is spam?

*Handwritten notes:*
classification problem
$\mathbb{P}(A_1|B) = \frac{\mathbb{P}(A_1)\mathbb{P}(B|A_1)}{\mathbb{P}(B)}$
rough guess? $\approx 0.98$ (large number)
$= \frac{0.85 \cdot 0.9}{0.85 \cdot 0.9 + 0.1 \cdot 0.1 + 0.05 \cdot 0.1}$
(denominator terms $0.1 \cdot 0.1 + 0.05 \cdot 0.1$ are small)

Graphical model (DAG) of d.g.p:
$A_1$ (spam, 0.85) $\xrightarrow{0.9}$ $B$ (word "free")
$A_2$ (low prior, 0.1) $\xrightarrow{0.1}$ $B$
$A_3$ (high prior, 0.05) $\xrightarrow{0.1}$ $B$

### Visual Description
The slide contains a printed example of a spam classification problem. Blue and yellow handwritten notes show the numerical calculation using Bayes' Rule and a Directed Acyclic Graph (DAG) representing the dependencies and probabilities.

---
