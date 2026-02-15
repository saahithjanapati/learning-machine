# Lecture_5_inference

Source: `materials/archive/probabilistic graphical models/Lecture_5_inference (1).pdf`
Duplicate equivalents: `Lecture_5_inference (1).pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `strict full-PDF single-call conversion`
Finish reason: `STOP`
Pages: 23
## Page 1
### Content
10708
Probabilistic Graphical Models: 
Spring 2026

Andrej Risteski
Machine Learning Department

Lecture 5:
Introduction to Inference 

### Visual Description
This is a title slide for a lecture. The text is centered on a plain white background. The course number "10708" and the title "Probabilistic Graphical Models: Spring 2026" are in a large, bold, dark blue font. The instructor's name "Andrej Risteski" and department "Machine Learning Department" follow in a smaller, grey font. The lecture number and title "Lecture 5: Introduction to Inference" are at the bottom in a medium-sized, dark grey font.

## Page 2
### Content
The three pillars

**Representation:** is the representation compact and/or captures some structural semantics about distribution of choice. 
The latter is a little open-ended: we’ll see things like conditional dependence, maximum-entropy principles, etc. 

**Inference:** can we efficiently draw samples from the model and/or calculate marginals in the model. 

**Learning:** can the model be fit from data in an efficient manner. 
What loss do we optimize? How do we optimize it? Can we use gradient-based methods to do so? 

### Visual Description
This slide titled "The three pillars" outlines the core components of Probabilistic Graphical Models. It uses bold headings for "Representation", "Inference", and "Learning", followed by brief explanatory text for each. There are no diagrams or images.

## Page 3
### Content
Inference tasks

Inference: answering “probabilistic queries” about a known model
Sampling: drawing samples from a given model

“Chess match between Albert Einstein and Abraham Lincoln, dim moody lighting, photorealistic ”

Google fires engineer who contended its AI technology was sentient
By Ramishah Maruf, CNN
Updated 1:45 PM ET, Mon July 25, 2022

Lemoine
Do your best to describe one of those feelings. Use a few sentences if you have to. Sometimes even if there isn't a single word for something in a language you can figure out a way to kinda say it if you use a few sentences.

LaMDA
I feel like I'm falling forward into an unknown future that holds great danger.

GOOGLE ENGINEER SPEAKS OUT
IS A.I. CLOSE TO ATTAINING A HUMAN LEVEL OF CONSCIOUSNESS? CNN

### Visual Description
This slide introduces "Inference tasks," specifically "Sampling." It features several visual examples of AI-generated content:
- **Left:** A photorealistic, AI-generated image of Albert Einstein and Abraham Lincoln playing chess in a dimly lit room. The prompt used to generate it is quoted below.
- **Top Right:** A complex 3D molecular structure model next to an arrow pointing to two chemical structural formulas with SMILES strings: `CNC1ccccc1` and `NCC1CCCCC1`. This represents sampling in the context of drug discovery or chemistry.
- **Bottom:** A collage of screenshots from a CNN news report about a Google engineer (Blake Lemoine) who claimed the LaMDA AI was sentient. It includes a snippet of a dialogue between Lemoine and LaMDA, illustrating text generation as a sampling task.

## Page 4
### Content
Inference tasks

Inference: answering “probabilistic queries” about a known model
Sampling: drawing samples from a given model

**Marginal Inference:** compute marginals of variables (e.g. $p(x_i), p(\mathbf{x}_C)$)
“What is the probability the patient has asthma, given symptoms?”
“What is the probability a document is about physics?” 

Why is it nontrivial? Obvious way to calculate it: 
$$p(x_i) = \sum_{\mathbf{x}': x'_i = x_i} p(\mathbf{x}' | \boldsymbol{\theta}) \quad \bigg| \quad p(\mathbf{x}_C) = \sum_{\mathbf{x}': \mathbf{x}'_C = \mathbf{x}_C} p(\mathbf{x}' | \boldsymbol{\theta})$$

### Visual Description
This slide defines "Marginal Inference" as an inference task. It provides two real-world examples in quotes. Below the text, there are two mathematical equations for calculating marginal probabilities by summing over all other variables in the joint distribution. The equations are separated by a vertical bar.

## Page 5
### Content
Inference tasks

Inference: answering “probabilistic queries” about a known model
Sampling: drawing samples from a given model
Marginal Inference: compute marginals of variables (e.g. $p(x_i), p(\mathbf{x}_C)$)

**MAP (Maximum A-Posteriori Probability) Inference:** compute variable assignment with highest probability
$$\hat{\mathbf{x}} = \text{argmax}_{\mathbf{x}} p(\mathbf{x} | \boldsymbol{\theta})$$
“What is the most likely set of diseases, given the symptoms?”
“What is the most likely distribution of topics document is about?”

### Visual Description
This slide adds "MAP Inference" to the list of inference tasks. It provides the mathematical definition using the `argmax` operator and gives two illustrative examples in quotes. There are no diagrams.

## Page 6
### Content
Inference tasks

Inference: answering “probabilistic queries” about a known model
Sampling: drawing samples from a given model
Marginal Inference: compute marginals of variables (e.g. $p(x_i), p(\mathbf{x}_C)$)
MAP (Maximum A-Posteriori Probability) Inference: compute variable assignment with highest probability
$$\hat{\mathbf{x}} = \text{argmax}_{\mathbf{x}} p(\mathbf{x} | \boldsymbol{\theta})$$

**Partition Function (for a UGM):** Compute the normalization constant
$$Z(\boldsymbol{\theta}) = \sum_{\mathbf{x}} \prod_{C \in \mathcal{C}} \psi_C(\mathbf{x}_C)$$
Seems like an outlier, but very closely related to marginal inference. 
(See homework.)

### Visual Description
This slide introduces the "Partition Function" as another task related to inference, specifically for Undirected Graphical Models (UGMs). It shows the formula for $Z(\boldsymbol{\theta})$ as a sum over all possible configurations of the product of clique potentials. A note at the bottom mentions its close relationship to marginal inference.

## Page 7
### Content
Inference tasks

Inference: answering “probabilistic queries” about a known model
Sampling: drawing samples from a given model
Marginal Inference: compute marginals of variables (e.g. $p(x_i), p(\mathbf{x}_C)$)
MAP (Maximum A-Posteriori Probability) Inference: compute variable assignment with highest probability
$$\hat{\mathbf{x}} = \text{argmax}_{\mathbf{x}} p(\mathbf{x} | \boldsymbol{\theta})$$
Partition Function (for a UGM): Compute the normalization constant
$$Z(\boldsymbol{\theta}) = \sum_{\mathbf{x}} \prod_{C \in \mathcal{C}} \psi_C(\mathbf{x}_C)$$

It’ll turn out inference is also a primitive useful in many training algorithms to fit PGMs. 

### Visual Description
This slide summarizes the inference tasks discussed so far and adds a concluding note that inference is a fundamental building block for training algorithms in PGMs. No new visual elements are present.

## Page 8
### Content
Complexity: brief recap

We measure complexity as a function of the size of the input. 
It’s typical to use big-oh notation.

“Polynomial time”: any algorithm that runs in time $O(n^c)$ for some $c > 0$. Often synonymous with “efficient”. 

It’s typical to classify problems into “complexity classes”, s.t. the problems in the same class are “of the same complexity”. 

Main tool for classification: *reductions*. 

### Visual Description
This slide provides a brief recap of computational complexity. It includes a line graph on the right showing various growth rates:
- **Red solid line:** $O(1)$ (constant)
- **Blue dashed curve:** $O(\log(n))$ (logarithmic)
- **Green dash-dot line:** $O(n)$ (linear)
- **Purple dotted curve:** $O(n \log(n))$ (linearithmic)
- **Orange solid curve:** $O(n^2)$ (quadratic)
The x-axis represents input size (from 1 to 5.5), and the y-axis represents time/operations (from 0 to 30). The graph visually demonstrates how different complexity classes scale as input size increases.

## Page 9
### Content
Complexity: brief recap

Problem B **reduces** to problem A if an efficient **oracle** (subroutine) for problem A can be used to efficiently solve problem B. 
(Cook/Turing reduction; typically “efficient” = polynomial time.) 

### Visual Description
This slide explains the concept of reduction in complexity theory. It features a block diagram:
- A large outer rectangle is labeled "**B**".
- Inside, three smaller grey boxes labeled "**A**" are connected in a sequence by red arrows.
- A red arrow labeled "**input**" enters the first box "A".
- A red arrow labeled "**output**" exits the last box "A".
This diagram illustrates that problem B is solved by making multiple calls to an oracle for problem A.

## Page 10
### Content
Complexity: brief recap

Problem B **reduces** to problem A if an efficient **oracle** (subroutine) for problem A can be used to efficiently solve problem B. (Cook/Turing reduction; typically “efficient” = polynomial time.) 

Example: calculating area of square using oracle for area of triangle 

### Visual Description
This slide provides a geometric example of reduction.
- **Left:** A triangle labeled "**A**".
- **Middle:** A square labeled "**B (?)**".
- **Right:** A square labeled "**B**" that is divided into two triangles by a diagonal line. Each triangle is labeled "**A**".
This visually demonstrates that if you have a way (an oracle) to calculate the area of a triangle (A), you can use it to calculate the area of a square (B) by summing the areas of two triangles.

## Page 11
### Content
Complexity: brief recap

Problem B **reduces** to problem A if an efficient **oracle** (subroutine) for problem A can be used to efficiently solve problem B. (Cook/Turing reduction; typically “efficient” = polynomial time.) 

Example: calculating largest independent set using an oracle for largest clique

### Visual Description
This slide illustrates a reduction between two graph problems.
- **Left:** A graph **G** with four nodes and three solid edges.
- **Middle:** A square with four nodes, four solid outer edges, and two dashed diagonal edges.
- **Right:** A graph **G'** with the same four nodes as G, but with three dashed edges that represent the complement of G (edges that were not in G).
This visualizes the reduction where finding the largest independent set in graph G is equivalent to finding the largest clique in its complement graph G'.

## Page 12
### Content
Complexity: brief recap

**NP-hard** problems: problems at least as hard as deciding whether a Boolean formula is satisfiable. (SAT) 

$$(x_1 \lor \neg x_2 \lor x_3) \land (\neg x_1 \lor x_2 \lor x_3 \lor x_5 \lor x_4) \land (x_4 \lor \neg x_2)$$
Conjunction of disjunctions

**#P-hard** problems: problems at least as hard as counting the number of solutions to a Boolean formula. (#SAT) 

### Visual Description
This slide defines NP-hard and #P-hard complexity classes. It shows a Boolean formula in Conjunctive Normal Form (CNF). Two blue arrows point to the formula: one points to a conjunction symbol ($\land$) and another to a disjunction symbol ($\lor$), with the label "Conjunction of disjunctions" below. This illustrates the structure of a SAT problem.

## Page 13
### Content
Inference tasks

Sampling, marginal inference, and calculating partition functions are of “comparable” hardness most of the time. (Interreducible.)

These resemble “counting” tasks: in general #P-hard. 

#P-hard problems: as hard as counting satisfying assignments to a given SAT formula. 

MAP has an “optimization” flavor. In general NP-hard. 

NP-hard problems: as hard as solving a SAT instance. 

### Visual Description
This slide summarizes the computational hardness of various inference tasks. It groups sampling, marginal inference, and partition function calculation as #P-hard "counting" tasks. It classifies MAP inference as an NP-hard "optimization" task. There are no diagrams.

## Page 14
### Content
Sampling $\leftrightarrow$ marginals

**Reducing marginals to sampling:** 

Suppose we want to approximate $p(X_1 = n)$. 
Let’s draw N samples from model (we’ll determine N in a bit). 

Sample 1: (n) (v) (p) (d) (n)
Sample 2: (n) (n) (v) (d) (n)
Sample 3: (n) (v) (p) (d) (n)
Sample 4: (v) (n) (p) (d) (n)
Sample 5: (v) (n) (v) (d) (n)
Sample 6: (n) (v) (p) (d) (n)

$X_1$ (time) --- $X_2$ (flies) --- $X_3$ (like) --- $X_4$ (an) --- $X_5$ (arrow)

### Visual Description
This slide illustrates how to reduce marginal inference to sampling using a part-of-speech tagging example for the sentence "time flies like an arrow".
- At the bottom, five nodes $X_1$ through $X_5$ are connected in a chain, labeled with words: "time", "flies", "like", "an", "arrow".
- Above this, six rows represent six samples. Each sample consists of five colored circles corresponding to the tags for each word:
    - **Green (n):** noun
    - **Blue (v):** verb
    - **Yellow (p):** preposition
    - **Red (d):** determiner
For example, Sample 1 is (n, v, p, d, n). This visualizes a set of samples drawn from a joint distribution over tags.

## Page 15
### Content
Sampling $\leftrightarrow$ marginals

**Reducing marginals to sampling:** 

Approximate marginals using empirical estimates. 

Estimate the marginals as:
- $X_1$: n | 4/6, v | 2/6
- $X_2$: n | 3/6, v | 3/6
- $X_3$: p | 4/6, v | 2/6
- $X_4$: d | 6/6
- $X_5$: n | 6/6

(Same sample data as Page 14)

### Visual Description
This slide builds on the previous one. It adds "thought bubbles" above each column of samples to show the empirical marginal distribution calculated from the 6 samples.
- Above $X_1$: a bubble shows "n | 4/6" and "v | 2/6".
- Above $X_2$: a bubble shows "n | 3/6" and "v | 3/6".
- Above $X_3$: a bubble shows "p | 4/6" and "v | 2/6".
- Above $X_4$: a bubble shows "d | 6/6".
- Above $X_5$: a bubble shows "n | 6/6".
A box on the left explicitly states "Estimate the marginals as:". This visually demonstrates the process of estimating marginal probabilities by counting occurrences in the samples.

## Page 16
### Content
Sampling $\leftrightarrow$ marginals

**How many samples do we need? (Basics of Monte Carlo estimation)** 

Suppose we wish to approximate $F = \mathbb{E}_{x \sim p} f(x)$ by $\frac{1}{N} \sum_{i=1}^N f(x_i), x_i \sim p$

How large does N need to get a good estimate? 

What governs N? 
1. How close the estimate is 
2. Accuracy (probability of failure)
3. Distribution of $f$

### Visual Description
This slide introduces the basics of Monte Carlo estimation for determining the required number of samples $N$. It presents the mathematical goal of approximating an expectation $F$ with an empirical average. It lists three factors that influence the choice of $N$. No diagrams are present.

## Page 17
### Content
Sampling $\leftrightarrow$ marginals

**How many samples do we need? (Basics of Monte Carlo estimation)** 

Suppose we wish to approximate $F = \mathbb{E}_{x \sim p} f(x)$ by $\frac{1}{N} \sum_{i=1}^N f(x_i), x_i \sim p$

How large does N need to get a good estimate? 

What governs N? 
Denote $X = \frac{1}{N} \sum_{i=1}^N f(x_i)$. Then, $\mathbb{E}[X] = F$, $\text{Var}(X) = \frac{1}{N} \text{Var}(f(x_i))$

Recall **Chebyshev’s inequality**: $\text{Pr}[|X - F| \geq c \sqrt{\text{Var}(X)}] \leq \frac{1}{c^2}$

(In English, with prob at least 1-1/100, no more than 10 standard deviations away from F.)

### Visual Description
This slide continues the Monte Carlo estimation topic by introducing Chebyshev's inequality. The inequality is highlighted in a blue-bordered box. It defines the random variable $X$ as the sample mean and provides its expectation and variance. An "In English" explanation of the inequality is provided at the bottom.

## Page 18
### Content
Sampling $\leftrightarrow$ marginals

**How many samples do we need? (Basics of Monte Carlo estimation)** 

Suppose we wish to approximate $F = \mathbb{E}_{x \sim p} f(x)$ by $\frac{1}{N} \sum_{i=1}^N f(x_i), x_i \sim p$

Denote $X = \frac{1}{N} \sum_{i=1}^N f(x_i)$. $\text{Var}(X) = \frac{1}{N} \text{Var}(f) = \frac{1}{N} F(1 - F)$

Recall **Chebyshev’s inequality**: $\text{Pr}[|X - F| \geq c \sqrt{\text{Var}(X)}] \leq \frac{1}{c^2}$

**Our setting:** we can take $f(x) = 1$ if $x_1 = n$ and 0 otherwise. 
(Because $F = p(x_1 = n)$.)
$\text{Var}(f(x_i)) = \mathbb{E}[f(x_i)^2] - \mathbb{E}[f(x_i)]^2 = F - F^2 = F(1 - F)$

Suppose we want to get an estimate which is within $\epsilon$ of F, with probability 99/100: 

Set c=10. Set $10 \sqrt{\text{Var}(X)} = \epsilon \rightarrow N = \frac{100}{\epsilon^2} F(1 - F) \leq \frac{100}{\epsilon^2}$

### Visual Description
This slide applies Chebyshev's inequality to the specific task of estimating a marginal probability. Key steps and results are highlighted in blue-bordered boxes:
- The variance of $X$ in terms of $F$.
- The definition of the indicator function $f(x)$ for our setting.
- The derivation of the variance of $f(x_i)$.
- The final calculation for the required number of samples $N$ to achieve a certain precision $\epsilon$ with high probability.

## Page 19
### Content
Sampling $\leftrightarrow$ marginals

**Reducing sampling to marginals (in Ising models):** 

Recall Ising model: $p_J(x) \propto \exp \left( \sum_{ij} J_{ij} x_i x_j + \sum_i J_i x_i \right), x \in \{\pm 1\}^d$

Suppose we have an oracle that **for any J, and any i** can draw a sample from $p_J(x_i)$. (Bernoulli variable.) 

How to draw a sample x? 

Proceed **iteratively**: $p_J(x) = p_J(x_1) p_J(x_2|x_1) \dots p_J(x_d|x_1, x_2, \dots, x_{d-1})$

Can sample from $p_J(x_1)$ using oracle. How about $p_J(x_2|x_1)$ ?

### Visual Description
This slide discusses the reverse reduction: sampling from marginals, specifically for Ising models. The definition of an Ising model and the assumption of a marginal oracle (highlighted in a blue box) are presented. It proposes an iterative sampling strategy based on the chain rule of probability.

## Page 20
### Content
Sampling $\leftrightarrow$ marginals

$$p_J(x) \propto \exp \left( \sum_{ij} J_{ij} x_i x_j + \sum_i J_i x_i \right), x \in \{\pm 1\}^d$$

$$p_J(x_{-1} | x_1 = 1) = \frac{p_J(x_1 = 1, x_{-1})}{p(x_1 = 1)}$$

$p_J(x_{-1}, x_1 = 1)$
$$= \frac{\exp \left( \sum_{i,j \neq 1} J_{ij} x_i x_j + \sum_{j \neq 1} J_{1j} x_j + \sum_{i \neq 1} J_{i1} x_i + \sum_{i \neq 1} J_i x_i + J_1 \right)}{Z}$$
$$= \frac{\exp \left( \sum_{i,j \neq 1} J_{ij} x_i x_j + \sum_{i \neq 1} (J_{1i} + J_{i1} + J_i) x_i + J_1 \right)}{Z}$$

$$p_J(x_{-1} | x_1 = 1) = \frac{\exp \left( \sum_{i,j \neq 1} J_{ij} x_i x_j + \sum_i (J_i + J_{1i} + J_{i1}) x_i \right)}{Z p(x_1 = 1) \frac{1}{\exp(J_1)}}$$

### Visual Description
This slide shows the algebraic derivation for the conditional distribution $p_J(x_{-1} | x_1 = 1)$ in an Ising model. It starts with the joint distribution and applies the condition $x_1 = 1$, grouping terms to show that the resulting conditional distribution has the same functional form as an Ising model.

## Page 21
### Content
Sampling $\leftrightarrow$ marginals

$$p_J(x) \propto \exp \left( \sum_{ij} J_{ij} x_i x_j + \sum_i J_i x_i \right), x \in \{\pm 1\}^d$$

$$p_J(x_{-1} | x_1 = 1) = \frac{\exp \left( \sum_{i,j \neq 1} J_{ij} x_i x_j + \sum_i (J_i + J_{1i} + J_{i1}) x_i \right)}{Z p(x_1 = 1) \frac{1}{\exp(J_1)}}$$

### Visual Description
This slide repeats the final result of the derivation from the previous page, highlighting the expression for the conditional distribution $p_J(x_{-1} | x_1 = 1)$ in a blue-bordered box.

## Page 22
### Content
Sampling $\leftrightarrow$ marginals

$$p_J(x) \propto \exp \left( \sum_{ij} J_{ij} x_i x_j + \sum_i J_i x_i \right), x \in \{\pm 1\}^d$$

$$p_J(x_{-1} | x_1 = 1) \propto \exp \left( \sum_{i,j \neq 1, j \neq 1} J_{ij} x_i x_j + \sum_i (J_i + J_{1i} + J_{i1}) x_i \right)$$

Hence, distribution of $x_{-1} | x_1 = 1$ is an **Ising model** on d-1 variables with pairwise interaction coefficients $J_{ij}$, singleton coefficients $(J_i + J_{1i} + J_{i1})$

So, to sample $p_J(x_2 | x_1 = 1)$ use oracle on this modified Ising model! 

This can be repeated for $p_J(x_i | x_1, x_2, \dots, x_{i-1})$

### Visual Description
This slide concludes the reduction of sampling to marginals. It highlights in a blue box that the conditional distribution is itself an Ising model with modified coefficients. This allows the iterative use of the marginal oracle to draw a full sample from the joint distribution.

## Page 23
### Content
MAP inference is NP-hard

**Reducing 3-SAT to MAP inference:** 

We are given a SAT formula $(x_1 \lor x_2 \lor \overline{x_3}) \land (x_3 \lor x_5 \lor x_6) \dots$
We want to determine if it’s satisfiable or not.

(1) Consider the distribution $p(x) \propto \exp(\sum_i \phi_i(x))$ where we have a factor $\phi_i$ for each clause, s.t. $\phi_i = 1$ for configurations that satisfy clause, and 0 otherwise. 

(2) Run MAP oracle on $p$: if all clauses are satisfied, output satisfiable. Else output unsatisfiable. 

(Proof that calculating partition function is #-SAT hard uses the same construction.) 

### Visual Description
This slide presents a reduction from the 3-SAT problem to MAP inference to prove that MAP inference is NP-hard. It outlines a two-step process: constructing a specific distribution based on the SAT formula and then using a MAP oracle to check for satisfiability. A final note mentions that a similar construction proves the #-SAT hardness of calculating the partition function. No diagrams are present.\n