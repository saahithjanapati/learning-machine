# Lecture_2_directed

Source: `materials/archive/probabilistic graphical models/Lecture_2_directed (1).pdf`
Duplicate equivalents: `Lecture_2_directed (1).pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `strict full-PDF single-call conversion`
Finish reason: `STOP`
Pages: 41
## Page 1
### Content
10708
Probabilistic Graphical Models: 
Spring 2026

Andrej Risteski
Machine Learning Department

Lecture 2:
Directed graphical models: 
definitions and motivations

### Visual Description
This is the title slide for Lecture 2 of the course "10708 Probabilistic Graphical Models" for Spring 2026. The text is centered on a plain white background. The course number and title are in a large, bold, dark blue font. The instructor's name, department, and lecture title are in a smaller, dark gray font.

## Page 2
### Content
Basic motivation: representing 
high-dimensional distributions

How much memory do we need to represent a (general) 
distribution over 4 variables, each taking 2 possible values? 

Cloudy (T/F)
Sprinkler (T/F)
Rain (T/F)
WetGrass (T/F)

| Atomic Event | Probability |
| :--- | :--- |
| (T, T, T, T) | 0.02 |
| (T, T, T, F) | 0.0 |
| (T, T, F, T) | 0.1 |
| ... | |
| (F, F, F, F) | 0.16 |

$2 \times 2 \times 2 \times 2 - 1 = 15$ numbers

### Visual Description
The slide illustrates the memory requirements for representing a joint probability distribution. On the left, four variables (Cloudy, Sprinkler, Rain, WetGrass) are shown in ovals, each with arrows pointing to "T" (True) and "F" (False) options. On the right, a table titled "Atomic Event" and "Probability" shows examples of joint configurations and their associated probabilities. At the bottom right, a calculation shows that for 4 binary variables, 15 independent numbers are needed to define the full joint distribution (since the probabilities must sum to 1).

## Page 3
### Content
Basic motivation: representing 
high-dimensional distributions

More generally, if we have a distribution over $d$ variables, each 
taking $c$ possible values, we need a table of size $c^d$ : prohibitively 
large for large $d$

However, in general, many distributions we are interested will 
have some structure:
(1) Instead of lookup table, we may want to have postulate some 
compact functional form. 
(2) Some variables have some correlation: it’s much more likely 
that it’s cloudy if it rains. 

### Visual Description
This slide continues the motivation for PGMs, focusing on the exponential growth of state space. It lists two types of structure that can be exploited: compact functional forms and correlations between variables. The text is presented as a bulleted list on a white background.

## Page 4
### Content
Basic motivation: representing 
high-dimensional distributions

Instead of lookup table, we can parametrize distribution by
$p_\theta(x) \propto \exp(-E_\theta(x))$
where $E_\theta(x)$ has some compact form. 

$E_\theta(x)$ can be seen as “energy” or “soft constraint”: tells us what 
configurations are “lower energy” and the distribution prefers. 

$E_\theta(x)$ can “respect” the structure of a graph:
$p_\theta(x) \propto \exp \left( \sum_{ij} \phi_{ij}(x_i, x_j) \right)$

$\phi_{cr}(\text{Cloudy} = F, \text{Rain} = T) = -100$

[Graph Diagram]
Cloudy --- Sprinkler
| \ / |
|  X  |
| / \ |
Rain --- WetGrass

### Visual Description
The slide introduces energy-based models as a way to represent distributions compactly. It shows a formula where the probability is proportional to the exponential of a negative energy function. A graph diagram at the bottom shows four nodes (Cloudy, Sprinkler, Rain, WetGrass) connected by lines, representing pairwise interactions ($\phi_{ij}$). An example value for a potential function $\phi_{cr}$ is given, showing a high penalty (-100) for the configuration where it's not cloudy but it is raining.

## Page 5
### Content
Basic motivation: representing 
high-dimensional distributions

More generally, if we have a distribution over $d$ variables, each 
taking $c$ possible values, we need a table of size $c^d$ : prohibitively 
large for large $d$

However, in general, many distributions we are interested will 
have some structure:
(1) Instead of lookup table, we may want to have postulate some 
compact functional form. 
(2) Some variables have some correlation: it’s much more likely 
that it’s cloudy if it rains. 
(3) We may have some mechanistic knowledge of domain: a 
sprinkler causes the grass to be wet. 

### Visual Description
This slide is an update to Page 3, adding a third point about structure: mechanistic or causal knowledge of the domain.

## Page 6
### Content
Basic motivation: representing 
high-dimensional distributions

[Bayesian Network Diagram]
Cloudy -> Sprinkler
Cloudy -> Rain
Sprinkler -> WetGrass
Rain -> WetGrass

CPTs:
Cloudy: $P(C=T)=0.5, P(C=F)=0.5$
Sprinkler: $P(S|C)$ table
Rain: $P(R|C)$ table
WetGrass: $P(W|S,R)$ table

### Visual Description
The slide shows a classic Bayesian Network example. Four nodes (Cloudy, Sprinkler, Rain, WetGrass) are connected by directed arrows indicating causal influence: Cloudy influences both Sprinkler and Rain, and both Sprinkler and Rain influence WetGrass. Each node has an associated Conditional Probability Table (CPT) shown in callout bubbles. For example, the WetGrass table shows probabilities $P(W=T)$ and $P(W=F)$ for all four combinations of its parents $S$ and $R$.

## Page 7
### Content
Basic motivation: representing 
high-dimensional distributions

More generally, if we have a distribution over $d$ variables, each 
taking $c$ possible values, we need a table of size $c^d$ : prohibitively 
large for large $d$

However, in general, many distributions we are interested will 
have some structure:
(1) Instead of lookup table, we may want to have postulate some 
compact functional form. 
(2) Some variables have some correlation: it’s much more likely 
that it’s cloudy if it rains. 
(3) We may have some mechanistic knowledge of domain: a 
sprinkler causes the grass to be wet. 
(4) Some variables are independent: the sprinkler being on and 
rain are independent events. 

### Visual Description
This slide further updates the list of structural properties, adding point (4) about independence between variables (specifically, that Sprinkler and Rain are independent, presumably given Cloudy).

## Page 8
### Content
Applications of PGMs
• Computer vision and graphics
• Natural language processing 
• Information retrieval
• Robotic control 
• Computational biology
• Genetics and medical diagnosis/prognosis
• Finance and economics
• Decision making under uncertainty
• Social network analysis 
• …

[Images for:]
Speech recognition
Computer vision
Robotic control
Planning
Games
Evolution
Pedigree
Social network analysis

### Visual Description
The slide lists various fields where Probabilistic Graphical Models are applied. To the right of the list is a collage of images illustrating these applications: a speech waveform for speech recognition, a group photo with face detection boxes for computer vision, a robot vehicle for robotic control, a top-down view of units in a game for planning/games, a phylogenetic tree for evolution, a family tree diagram for pedigree, and a complex node-link diagram for social network analysis.

## Page 9
### Content
The three pillars

Representation: is the representation compact and/or captures some 
structural semantics about distribution of choice. 
The latter is a little open-ended: we’ll see things like conditional 
dependence, maximum-entropy principles, etc. 

Inference: can we efficiently (1) calculate marginals in the model 
and/or (2) draw samples from the model. 

“What’s the probability that a 
patient has a disease, given 
some symptoms they exhibit?“

[Image: “Chess match between Albert Einstein and Abraham Lincoln, dim moody lighting, photorealistic ”]

### Visual Description
The slide introduces the first two "pillars" of PGMs: Representation and Inference. Representation deals with how to model the distribution, while Inference deals with answering questions using the model. An example inference question about medical diagnosis is provided. On the bottom right, there is an AI-generated photorealistic image of Albert Einstein and Abraham Lincoln playing chess in a dimly lit room, used as an example of drawing samples from a complex model.

## Page 10
### Content
The three pillars

Representation: is the representation compact and/or captures some 
structural semantics about distribution of choice. 
The latter is a little open-ended: we’ll see things like conditional 
dependence, maximum-entropy principles, etc. 

Inference: can we efficiently (1) calculate marginals in the model 
and/or (2) draw samples from the model. 

Learning: can the model be fit from data in an efficient manner. 
What loss do we optimize? How do we optimize it? Can we use 
gradient-based methods to do so? 

### Visual Description
This slide adds the third "pillar": Learning. It describes learning as fitting the model to data and lists key questions regarding optimization objectives and methods.

## Page 11
### Content
Directed graphical models

### Visual Description
A simple transition slide with the text "Directed graphical models" centered in a large, bold, dark blue font.

## Page 12
### Content
Basic motivation: representing 
high-dimensional distributions

[Repeat of Bayesian Network Diagram from Page 6]

### Visual Description
This slide repeats the Bayesian Network diagram from Page 6 (Cloudy, Sprinkler, Rain, WetGrass with CPTs) to re-center the discussion on directed models.

## Page 13
### Content
First view of directed graphical 
models: causal relationships

Directed Graphs are useful for expressing directional/causal
relationships between random variables. 

Your symptoms: fever + loss of taste.
Probability that you have COVID?

Directed graphical model 
succinctly describes 
Pr[symptom| diseases]

[Diagram]
Diseases (top row of nodes)
Symptoms (bottom row of nodes)
Params W (edges connecting them)

[Image of Coronavirus]

### Visual Description
The slide presents directed graphs as a way to model causal relationships. It uses a medical example where diseases cause symptoms. A bipartite-style graph is shown with a top layer of nodes labeled "Diseases" and a bottom layer labeled "Symptoms". Directed arrows point from diseases to symptoms, representing the conditional probability $Pr[\text{symptom} | \text{diseases}]$. An image of a coronavirus is shown on the right.

## Page 14
### Content
First view of directed graphical 
models: causal relationships

Directed Graphs are useful for expressing directional/causal
relationships between random variables. 

• X = height of a child 
• Y = vocabulary of a child
• Z = age of a child 

[Diagram]
Z -> X
Z -> Y

### Visual Description
This slide provides another example of causal modeling. It defines three variables: $X$ (height), $Y$ (vocabulary), and $Z$ (age). The directed graph shows $Z$ pointing to both $X$ and $Y$, indicating that a child's age causally influences both their height and their vocabulary size.

## Page 15
### Content
First view of directed graphical 
models: causal relationships

Directed Graphs are useful for expressing directional/causal
relationships between random variables. 

Is direction somehow “inherent” or “unique” ?

(a) (b)  $p(a, b)$
(a) -> (b)  $= p(a)p(b|a)$
(a) <- (b)  $= p(b)p(a|b)$

### Visual Description
The slide explores whether the direction of edges in a directed graph is unique. It shows three cases for two variables $a$ and $b$:
1. No edge: represents the joint distribution $p(a, b)$.
2. Edge $a \rightarrow b$: represents the factorization $p(a)p(b|a)$.
3. Edge $b \rightarrow a$: represents the factorization $p(b)p(a|b)$.
Mathematically, both factorizations are valid for any joint distribution, suggesting that directionality might be a modeling choice rather than an inherent property of the data itself.

## Page 16
### Content
First view of directed graphical 
models: causal relationships

Where does the graph come from?
• Prior knowledge of causal relationships
• Prior knowledge of modular relationships
• Assessment from experts
• Learning from data
• We simply prefer a certain structure (e.g., a layered graph) 
• …

17

### Visual Description
This slide lists various sources for the structure of a directed graphical model, ranging from human expert knowledge to automated learning from data. The number "17" appears in the bottom right corner.

## Page 17
### Content
Second view: restricted conditional 
factorization 

“Deriving” Bayesian Networks as restrictions of arbitrary distributions: 

An arbitrary joint distribution $p(a, b, c)$ over three random variables a,b, 
and c can be written as 
$p(a, b, c) = p(c|a, b)p(a, b) = p(c|a, b)p(b|a)p(a)$

Associate a graph with the decomposition: 
- Node for each of the random variables. 
- Add directed links to the graph from the nodes 
corresponding to the vars on which the 
distribution is conditioned. 

[Diagram]
a -> b
a -> c
b -> c

### Visual Description
The slide introduces the "factorization" view of directed models. It shows how an arbitrary joint distribution can be decomposed into a product of conditionals using the chain rule of probability. A corresponding graph is built where each node has incoming edges from the variables it is conditioned on. The resulting graph for the example $p(c|a, b)p(b|a)p(a)$ is a fully connected directed graph with nodes $a, b, c$ and edges $a \rightarrow b, a \rightarrow c, b \rightarrow c$.

## Page 18
### Content
Second view: restricted conditional 
factorization 

“Deriving” Bayesian Networks as restrictions of arbitrary distributions: 

An arbitrary joint distribution $p(a, b, c)$ over three random variables a,b, 
and c can be written as 
$p(a, b, c) = p(c|a, b)p(a, b) = p(c|a, b)p(b|a)p(a)$

Associate a graph with the decomposition: 

Different ordering => different graphical 
representation.

Joint distribution over K variables factorizes: 
$p(x_1, \dots, x_K) = p(x_K | x_1, \dots, x_{K-1}) \dots p(x_2 | x_1) p(x_1)$

Corresponding undirected graph is fully connected:
(as each lower-numbered node points to each higher-numbered node)

19

### Visual Description
This slide generalizes the factorization view to $K$ variables. It notes that the choice of ordering for the chain rule leads to different graph structures. For a general distribution with no independence assumptions, the resulting graph is fully connected (a complete DAG). The number "19" appears in the bottom right.

## Page 19
### Content
Second view: restricted conditional 
factorization 

A graph that is not fully connected conveys information about the 
conditional factorization of the distribution it encodes. 

E.g. consider the graph on the left. 

It encodes distributions over $x_1, \dots, x_7$ that can be 
written as the product: 
$p(x_1, \dots, x_7) = p(x_1)p(x_2)p(x_3)p(x_4|x_1, x_2, x_3)p(x_5|x_1, x_3)p(x_6|x_4)p(x_7|x_4, x_5)$

Note the change from the previous slide: e.g. $x_5$ is 
not conditioned on all of $x_1, x_2, x_3, x_4$ but only on 
$x_1, x_3$.

[Diagram]
A DAG with 7 nodes:
$x_1, x_2, x_3$ are root nodes.
$x_1, x_2, x_3 \rightarrow x_4$
$x_1, x_3 \rightarrow x_5$
$x_4 \rightarrow x_6$
$x_4, x_5 \rightarrow x_7$

20

### Visual Description
The slide explains that missing edges in a DAG represent conditional independence assumptions. A 7-node DAG is shown as an example. The joint distribution is written as a product of conditionals, where each variable is only conditioned on its parents in the graph. For instance, $x_5$ only has incoming arrows from $x_1$ and $x_3$, so it is only conditioned on those two variables in the factorization. The number "20" appears in the bottom right.

## Page 20
### Content
Second view: restricted conditional 
factorization 

The joint distribution defined by the graph is given by the product of a 
conditional distribution for each node conditioned on its parents:
$p(\mathbf{x}) = \prod_{k=1}^K p(x_k | pa_k)$

where $pa_k$ denotes a set of parents for the node $x_k$. 

Each of the conditional distributions will 
typically have some parametric form. (e.g. 
product of Bernoullis in the noisy-OR case) 

Important restriction: There must be no directed 
cycles! (i.e. graph is a DAG)

21

### Visual Description
This slide provides the formal definition of the joint distribution for a Directed Graphical Model as the product of conditional distributions of each node given its parents. It emphasizes the crucial requirement that the graph must be a Directed Acyclic Graph (DAG). The same 7-node graph from the previous page is shown. The number "21" appears in the bottom right.

## Page 21
### Content
Third view: generative model

Consider a joint distribution over K random variables that 
factorizes as:
$p(\mathbf{x}) = \prod_{k=1}^K p(x_k | pa_k)$

Suppose each of the conditional distributions are 
easy to sample from. How do we sample from 
the joint? 

Start at the top and sample in order.
$\hat{x}_1 \sim p(x_1)$
$\hat{x}_2 \sim p(x_2)$
$\hat{x}_3 \sim p(x_3)$
$\hat{x}_4 \sim p(x_4 | \hat{x}_1, \hat{x}_2, \hat{x}_3)$
$\hat{x}_5 \sim p(x_5 | \hat{x}_1, \hat{x}_3)$
...
The parent variables are set to their sampled values.

To obtain a sample from the marginal distribution, e.g. $p(x_2, x_5)$, sample from 
the full joint distribution, retain $\hat{x}_2, \hat{x}_5$, discard the remaining values. 

22

### Visual Description
The slide introduces the "generative" view of directed models. It explains how to draw samples from the joint distribution by following a topological order of the nodes (sampling parents before children). A blue arrow points to the sequence of sampling steps for the 7-node example graph. It also mentions that marginal samples can be obtained by sampling the full joint and then ignoring the unwanted variables. The number "22" appears in the bottom right.

## Page 22
### Content
Compactness of representation

How much memory do we need to represent a DGM over a discrete space? 

Simplest representation: probability tables for conditional distributions 

[Diagram]
A -> C
B -> C
C -> D

$P(a,b,c,d) = P(a)P(b)P(c|a,b)P(d|c)$

Tables:
$P(a)$: $a^0: 0.75, a^1: 0.25$
$P(b)$: $b^0: 0.33, b^1: 0.67$
$P(c|a,b)$: Table with rows for $c^0, c^1$ and columns for combinations $a^0b^0, a^0b^1, a^1b^0, a^1b^1$
$P(d|c)$: Table with rows for $d^0, d^1$ and columns for $c^0, c^1$

### Visual Description
The slide illustrates the memory efficiency of DGMs using a 4-node example ($A, B, C, D$). Instead of one large joint table, the distribution is represented by several smaller Conditional Probability Tables (CPTs). The graph shows $A$ and $B$ as parents of $C$, and $C$ as the parent of $D$. The corresponding CPTs are shown: two 1D tables for $P(a)$ and $P(b)$, a 2x4 table for $P(c|a,b)$, and a 2x2 table for $P(d|c)$.

## Page 23
### Content
Compactness of representation

Consider random variables $X_1, X_2, \dots, X_n$ where $X_i \in \mathcal{X}$, where $|\mathcal{X}| = r$

• No DAG: To represent an arbitrary distribution $P(\mathbf{X})$ via a single joint 
probability table requires $r^n - 1$ values.
(Arrow pointing to "exponential in n")

• If the distribution factors according to a graph G with 
$\max_{X_i} |\text{parents}(X_i)| \leq D$

• then each $P(X_i | \text{parents}(X_i))$ needs only $r^D(r - 1)$ values 

• for a total of only $n(r^D(r - 1))$ values.
(Arrow pointing to "linear in n")

### Visual Description
This slide quantifies the memory savings of DGMs. For $n$ variables with $r$ states each, a general joint distribution requires $O(r^n)$ parameters (exponential in $n$). However, if each node has at most $D$ parents, the total number of parameters is $O(n \cdot r^D)$, which is linear in $n$. Blue arrows highlight the contrast between "exponential in n" and "linear in n".

## Page 24
### Content
The latent-variable paradigm

More often than not, we need to model part of the data that is not 
observable. We already saw examples of this: 

Diseases (causes) - $d_1, \dots, d_i, \dots, d_m$
Symptoms (effects) - $s_1, \dots, s_j, \dots, s_n$
Edges labeled $W_{ij}$

[Diagram: Object, Position, Orientation -> Image]

This is also a natural way to extract features/representation: 
the latent variables contain “meaningful” information.

### Visual Description
The slide introduces latent (hidden) variables. Two examples are shown:
1. A bipartite graph where a top layer of latent "Diseases" (purple nodes) causes a bottom layer of observed "Symptoms" (blue nodes). Edges represent causal weights $W_{ij}$.
2. A simple graph where latent variables "Object", "Position", and "Orientation" (red circles) all point to an observed "Image" node (red circle).
The text notes that latent variables often capture meaningful underlying features of the data.

## Page 25
### Content
The latent-variable paradigm

Higher-up nodes will typically represent latent (hidden) random variables. 
The role of latent variables is to allow modeling a complicated distribution 
over observed variables constructed from simpler conditional distributions. 

Latent-variable model of image:
Object identity, position, and orientation 
have independent prior probabilities. 
Image has probability distr that depends 
on object identity, position, and orientation 
(conditional distribution/likelihood). 

$P(Im, Ob, Po, Or) = \underbrace{P(Im|Ob, Po, Or)}_{\text{Likelihood}} \underbrace{P(Ob)P(Po)P(Or)}_{\text{Prior}}$

Likelihood and prior are modeled by parametric distribution whose 
parameters are fitted throughout training. 

26

### Visual Description
This slide elaborates on the image model example. It shows the factorization of the joint distribution into a "Likelihood" term (image given latent factors) and a "Prior" term (distribution of latent factors). The latent factors (Object, Position, Orientation) are assumed to be independent in the prior. The number "26" appears in the bottom right.

## Page 26
### Content
Examples: single-layer latent-variable 
Bayesian networks

Simple, but powerful paradigm: 
single-layer Bayesian networks, where top nodes are latent. 

Latent variables Z (purple nodes)
Observable variables X (blue nodes)

$p_\theta(X, Z) = p_\theta(Z) p_\theta(X|Z)$

### Visual Description
The slide shows a general architecture for single-layer latent variable models. It features a bipartite graph with a top layer of latent variables $Z$ and a bottom layer of observable variables $X$. Directed arrows point from $Z$ to $X$. The joint distribution is factorized as the prior $p_\theta(Z)$ times the likelihood $p_\theta(X|Z)$.

## Page 27
### Content
Example 1: Mixture distributions 

Mixture models: observables = points; latent = clustering

To draw a sample (X,Z): 
Sample Z from a categorial distr. on K components with parameters $\{\pi_i\}$
Sample X from the corresponding component in the mixture. 

[Diagrams]
- Scatter plot with three colored clusters (green, blue, red) and ellipses.
- Plate notation: Node Z points to node X, both inside a box labeled N.
- Equation: $p(\mathbf{x}) = \sum_{k=1}^K \underbrace{\pi_k}_{\text{Mixing coefficient}} \underbrace{\mathcal{N}(\mathbf{x} | \mu_k, \Sigma_k)}_{\text{Component}}$
$\forall k : \pi_k \geq 0$ and $\sum_{k=1}^K \pi_k = 1$

### Visual Description
The slide presents Mixture Models as a latent variable model. The latent variable $Z$ represents the cluster assignment, and $X$ is the observed data point. A scatter plot shows data points clustered into three groups. Plate notation is used to show $N$ independent samples of $(Z, X)$. The marginal distribution $p(\mathbf{x})$ is shown as a weighted sum of Gaussian components, with labels for "Mixing coefficient" and "Component".

## Page 28
### Content
Example 2: Noisy-OR networks

$x_i, z_j \in \{0, 1\}$
$W_{ij} \geq 0$

Diseases (causes) - $z_1, \dots, z_i, \dots, z_m$
Symptoms (effects) - $x_1, \dots, x_j, \dots, x_n$

֍ Sample each $z_i$ is on independently with prob. $\rho$
֍ When $z_i$ is on, it activates $x_j$ with probability $1 - \exp(-W_{ij})$.
֍ $x_j$ is on if one of $z_i$’s activates $x_j$

### Visual Description
The slide describes Noisy-OR networks, often used in medical diagnosis. It uses the bipartite graph from Page 24. The variables are binary (0 or 1). The generative process is explained: diseases $z_i$ are sampled independently, and each active disease has a certain probability of "activating" (causing) a symptom $x_j$. A symptom is present if at least one of its causal diseases activates it.

## Page 29
### Content
Example 2: Noisy-OR networks

[Diagram: Portion of QMR-DT belief network]
Nodes: Gastric Ulcer, Coronary Artery Disease, Nausea, Chest Pain.
Edges:
Gastric Ulcer -> Nausea
Coronary Artery Disease -> Nausea
Coronary Artery Disease -> Chest Pain

Figure 1: A portion of the QMR-DT belief network. 
The upper layer of the network consists of over 500 
disease propositions. These propositions are associ-
ated with over 4,000 manifestations represented as 
nodes in the bottom layer of the network. 

QMR-DT network, Heckerman-Miller ‘86, 
Figure from Heckerman-Horvitz ‘90. 

### Visual Description
This slide shows a real-world application of the Noisy-OR model: the QMR-DT (Quick Medical Reference - Decision Theoretic) network. A small portion of the graph is shown with specific diseases like "Gastric Ulcer" and "Coronary Artery Disease" pointing to symptoms like "Nausea" and "Chest Pain". The caption notes the massive scale of the full network (500 diseases, 4,000 symptoms).

## Page 30
### Content
Example 3: Topic models (LDA)

Latent Dirichlet Allocation: famous model for modeling topic 
structure of documents of text. (Blei, Ng, Jordan ‘03)

[Image: Document with highlighted words and arrows pointing to topics]

### Visual Description
The slide introduces Latent Dirichlet Allocation (LDA) for topic modeling. An image shows a document titled "Seeking Life's Bare (Genetic) Necessities" with various words highlighted in different colors. Arrows from these words point to a set of colored circles representing different topics, and a bar chart showing the topic distribution for the document.

## Page 31
### Content
Side-remark: Dirichlet Distribution 

Consider a distribution over simplex, namely over points $\{\mu_i\}_{i=1}^K$
$\forall k : \mu_k \geq 0$ and $\sum_{k=1}^K \mu_k = 1$

The Dirichlet distribution (with params $\{\alpha_i \geq 0\}_{i=1}^K$) 
is defined as:
$Dir(\mu | \alpha) \propto \prod_{k=1}^K \mu_k^{\alpha_k - 1}$

[Diagram: 3D Simplex]

### Visual Description
This slide defines the Dirichlet distribution, which is used as a prior in LDA. It's a distribution over a probability simplex (where values are non-negative and sum to 1). A 3D plot shows a triangular plane (the simplex) in a coordinate system with axes $\mu_1, \mu_2, \mu_3$.

## Page 32
### Content
Side-remark: Dirichlet Distribution 

Plots of the Dirichlet distribution over three variables. 

[Three plots for different $\alpha_k$ values:]
- $\alpha_k = 10^{-1}$ (Density at corners)
- $\alpha_k = 10^0$ (Uniform density)
- $\alpha_k = 10^1$ (Density at center)

### Visual Description
The slide shows how the shape of the Dirichlet distribution changes with its parameters $\alpha_k$. Three 3D plots over a triangular simplex are shown:
1. For small $\alpha$ (0.1), the probability mass is concentrated at the corners of the simplex (sparse distributions).
2. For $\alpha=1$, the distribution is uniform over the simplex.
3. For large $\alpha$ (10), the mass is concentrated in the center (dense, balanced distributions).

## Page 33
### Content
Example 3: Topic models (LDA)

Defines a distribution over documents, 
involving K topics. 

The parameters are: $\{\alpha_i\}_{i=1}^K$ (Dirichlet 
parameters) and matrix $\beta \in \mathbb{R}_+^{V \times K}$, where 
$V$ is the size of the vocabulary. 

The columns of $\beta$ satisfy $\sum_{j=1}^V \beta_{ij} = 1$
(the distribution of words in a topic i) 

To produce document: 
❖ First, sample $\theta \sim Dir(\cdot | \alpha)$: this will be 
the topic proportion vector for the 
document. 
❖ Each word in the document is generated 
in order, independently.
❖ To generate word i:
❖ Sample topic $z_i$ with categorical 
distribution with parameters $\theta$
❖ Sample word $w_i$ with categorical 
distribution with parameters $\beta_{z_i}$

[Plate Notation Diagram for LDA]
$\alpha \rightarrow \theta \rightarrow z \rightarrow w$
$\beta \rightarrow w$
$z, w$ in plate $N$ (words)
$\theta, z, w$ in plate $M$ (documents)

### Visual Description
The slide details the generative process of LDA. It defines the parameters $\alpha$ (for document-topic distribution) and $\beta$ (for topic-word distributions). The step-by-step process for generating a document is listed. A plate notation diagram summarizes the model: $\alpha$ influences the document's topic proportions $\theta$, which in turn influences the topic $z$ for each of the $N$ words. The word $w$ is then sampled based on its topic $z$ and the topic-word distributions $\beta$. The document-level variables are inside a plate of size $M$.

## Page 34
### Content
Example 3: Topic models (LDA)

[Table of Topics and Top Words]
"Arts": NEW, FILM, SHOW, MUSIC, ...
"Budgets": MILLION, TAX, PROGRAM, BUDGET, ...
"Children": CHILDREN, WOMEN, PEOPLE, CHILD, ...
"Education": SCHOOL, STUDENTS, SCHOOLS, EDUCATION, ...

[Example Text with Color-Coded Words]
The William Randolph Hearst Foundation will give $1.25 million to Lincoln Center...

### Visual Description
The slide shows the results of applying LDA. A table lists four discovered topics ("Arts", "Budgets", "Children", "Education") and their most probable words. Below the table, a paragraph of text is shown where words are color-coded according to which of these four topics they most likely belong to. For example, "million" is green (Budgets), and "Foundation" is red (Arts).

## Page 35
### Content
Example 4: Variational 
Autoencoder

Directed Bayesian network with Gaussian layers 
$p(\mathbf{x}|\theta) = \sum_{\mathbf{h}^1, \dots, \mathbf{h}^L} p(\mathbf{h}^L|\theta) p(\mathbf{h}^{L-1}|\mathbf{h}^L, \theta) \dots p(\mathbf{x}|\mathbf{h}^1, \theta)$

Each term may denote a complicated 
nonlinear relationship 

Layers are parametrized as: 
$p(\mathbf{h}^{L-1}|\mathbf{h}^L, \theta) = \mathcal{N}(\mu_\theta(\mathbf{h}^L), \Sigma_\theta(\mathbf{h}^L))$

Gaussians, means/covariances 
functions (e.g. neural net) of previous 
layer and model parameters $\theta$. 

Easy to sample!

[Diagram: Deep Generative Model]
Layers: $\mathbf{h}^3, \mathbf{h}^2, \mathbf{h}^1, \mathbf{x}$
Weights: $W^3, W^2, W^1$
Generative Process arrow pointing down.
Input data $\mathbf{x}$ at the bottom.

36

### Visual Description
The slide introduces the Variational Autoencoder (VAE) as a deep directed graphical model. It shows a multi-layer structure where each layer $\mathbf{h}^l$ is a latent variable that influences the layer below it. The conditional distributions are Gaussians whose parameters (mean and covariance) are non-linear functions (typically neural networks) of the layer above. A diagram shows the "Generative Process" as a top-down flow from high-level latent variables $\mathbf{h}^3$ down to the observed data $\mathbf{x}$. The number "36" appears in the bottom right.

## Page 36
### Content
Example 4: Variational Autoencoder
(VQ-VAE, Oord et al ‘17, Razavi et al 
‘19)

[Six AI-generated face images]

Figure from Razavi et al ‘19

### Visual Description
The slide showcases the generative capabilities of VAE variants (specifically VQ-VAE). It displays six high-quality, photorealistic images of human faces that were generated by the model. A credit line at the bottom refers to Razavi et al '19.

## Page 37
### Content
Example 4: Variational Autoencoder
(DALL-E, Ramesh et al ’21)

TEXT PROMPT
an illustration of a baby daikon radish in a tutu walking a dog
AI-GENERATED IMAGES
[5 images of radishes in tutus with dogs]

TEXT PROMPT
an armchair in the shape of an avocado [...]
AI-GENERATED IMAGES
[5 images of avocado-shaped chairs]

https://openai.com/blog/dall-e/

### Visual Description
The slide shows examples from OpenAI's DALL-E, which uses a generative model architecture. It presents two text prompts and the corresponding AI-generated images. The first prompt is "an illustration of a baby daikon radish in a tutu walking a dog", followed by five whimsical illustrations. The second prompt is "an armchair in the shape of an avocado", followed by five realistic-looking images of avocado-themed furniture.

## Page 38
### Content
Example 4: Variational Autoencoder
(NVAE, Vahdat-Kautz ’21)

[4x4 grid of AI-generated face images]

Figure from Vahdat-Kautz ‘21

### Visual Description
The slide shows more examples of high-quality face generation, this time from the NVAE (Nouveau VAE) model. A 4x4 grid of diverse, photorealistic human faces is displayed. A credit line at the bottom refers to Vahdat-Kautz '21.

## Page 39
### Content
Example 5: Hidden Markov Models

Latent signal (e.g. a phoneme) - $Y_1, Y_2, Y_3, \dots, Y_T$
Observable signal (e.g. audio signal) - $X_1, X_2, X_3, \dots, X_T$

[Diagram: HMM structure]
$Y_1 \rightarrow Y_2 \rightarrow Y_3 \rightarrow \dots \rightarrow Y_T$
$Y_1 \rightarrow X_1$
$Y_2 \rightarrow X_2$
$Y_3 \rightarrow X_3$
$Y_T \rightarrow X_T$

Need to only parametrize: $p(Y_t | Y_{t-1}), p(X_t | Y_t)$

### Visual Description
The slide introduces Hidden Markov Models (HMMs). The graph shows a chain of latent variables $Y_t$ (the "state" or "signal") where each state depends only on the previous one. Each latent state $Y_t$ also generates an observable variable $X_t$. This structure is commonly used for sequential data like speech. The text notes that only the transition probabilities $p(Y_t | Y_{t-1})$ and emission probabilities $p(X_t | Y_t)$ need to be parameterized.

## Page 40
### Content
Example 5: Hidden Markov Models

[Diagram: Speech Recognition Pipeline]
Audio Waveform -> speech preprocessing -> features (spectrogram) -> acoustic models (Gaussian Mixture Models) -> pronunciation models (Pronunciation tables) -> language models (N-gram models) -> Output text Y = "cat sits on a mat"

Figure from: 
https://web.stanford.edu/class/archive/cs/cs224n/cs224n.1174/lectures
/cs224n-2017-lecture12.pdf

### Visual Description
The slide illustrates a classical speech recognition pipeline that utilizes HMMs. It shows the flow from a raw audio waveform through various stages: feature extraction (spectrogram), acoustic modeling (often using GMMs within an HMM framework), pronunciation modeling, and finally language modeling to produce the transcribed text. A small HMM-like diagram for a phoneme /k/ is shown above the acoustic models box.

## Page 41
### Content
Example 5: Hidden Markov Models

Transcription: Samson
Pronunciation: S – AE – M – S – AH – N
Sub-phones: 942 – 6 – 37 – 8006 – 4422 …

Hidden Markov Model (HMM): [Chain of nodes with numbers like 942, 942, 6]
Acoustic Model: [Plots of Gaussian distributions]
Audio Input: [Spectrogram features]
Features: [Boxes labeled Features]

Figure from: 
http://web.stanford.edu/class/cs224s/lectures/224s.22.lec8.pdf

### Visual Description
This slide provides a more detailed look at an HMM for speech recognition. It shows the hierarchy from the word "Samson" down to its pronunciation, sub-phones, and the corresponding HMM states. Below the HMM states, it shows the acoustic models (represented as Gaussian curves) that link the states to the observed audio features (represented as a spectrogram). Arrows indicate the generative flow from hidden states to observed features.\n