# Lecture_6_7_beliefprop

Source: `materials/archive/probabilistic graphical models/Lecture_6_7_beliefprop (2).pdf`
Duplicate equivalents: `Lecture_6_7_beliefprop (2).pdf`, `Lecture_6_7_beliefprop (3).pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `strict full-PDF single-call conversion`
Finish reason: `STOP`
Pages: 78
## Page 1
### Content
10708
Probabilistic Graphical Models: 
Spring 2026
Andrej Risteski
Machine Learning Department
Lecture 6+7:
Exact inference: variable elimination and 
belief propagation 

### Visual Description
Title slide for a lecture. The text is centered and uses a dark blue serif font. There are no diagrams or images.

## Page 2
### Content
The three pillars
**Representation**: is the representation compact and/or captures some structural semantics about distribution of choice. 
The latter is a little open-ended: we’ll see things like conditional dependence, maximum-entropy principles, etc. 
**Inference**: can we efficiently draw samples from the model and/or calculate marginals in the model. 
**Learning**: can the model be fit from data in an efficient manner. 
What loss do we optimize? How do we optimize it? Can we use gradient-based methods to do so? 

### Visual Description
Text-based slide outlining the "three pillars" of Probabilistic Graphical Models: Representation, Inference, and Learning. No notable visuals beyond text.

## Page 3
### Content
Inference tasks
Inference: answering “probabilistic queries” about a known model
**Sampling**: drawing samples from a given model

### Visual Description
The slide contains several images illustrating the concept of sampling and generative AI:
1.  A photorealistic AI-generated image of Albert Einstein and Abraham Lincoln playing chess in dim, moody lighting.
2.  A news headline: "Google fires engineer who contended its AI technology was sentient" with a picture of Blake Lemoine and a CNN logo.
3.  A diagram showing a complex molecular structure being converted into simplified chemical strings (SMILES notation) like `CNC1ccccc1` and `NCC1CCCCC1`.
4.  A screenshot of a CNN news feed showing various AI-related stories, including one about an AI winning an art contest.

## Page 4
### Content
Inference tasks
Inference: answering “probabilistic queries” about a known model
**Sampling**: drawing samples from a given model
**Marginal Inference**: compute marginals of variables (e.g. $p(x_i), p(x_C)$)
“What is the probability the patient has asthma, given symptoms?”
“What is the probability a document is about physics?” 
Why is it nontrivial? Obvious way to calculate it: 
$$p(x_i) = \sum_{\mathbf{x}':x'_i=x_i} p(\mathbf{x}' | \theta) \quad | \quad p(x_C) = \sum_{\mathbf{x}':x'_C=x_C} p(\mathbf{x}' | \theta)$$

### Visual Description
Text-based slide defining Marginal Inference with two real-world examples and the mathematical summation formulas for calculating marginals from a joint distribution.

## Page 5
### Content
Inference tasks
Inference: answering “probabilistic queries” about a known model
**Sampling**: drawing samples from a given model
**Marginal Inference**: compute marginals of variables (e.g. $p(x_i), p(x_C)$)
**MAP (Maximum A-Posteriori Probability) Inference**: compute variable assignment with highest probability
$$\hat{\mathbf{x}} = \text{argmax}_{\mathbf{x}} p(\mathbf{x} | \theta)$$
“What is the most likely set of diseases, given the symptoms?”
“What is the most likely distribution of topics document is about?”

### Visual Description
Text-based slide defining MAP Inference with examples and the mathematical `argmax` formula.

## Page 6
### Content
Inference tasks
Inference: answering “probabilistic queries” about a known model
**Sampling**: drawing samples from a given model
**Marginal Inference**: compute marginals of variables (e.g. $p(x_i), p(x_C)$)
**MAP (Maximum A-Posteriori Probability) Inference**: compute variable assignment with highest probability
$$\hat{\mathbf{x}} = \text{argmax}_{\mathbf{x}} p(\mathbf{x} | \theta)$$
**Partition Function (for a UGM)**: Compute the normalization constant
$$Z(\theta) = \sum_{\mathbf{x}} \prod_{C \in \mathcal{C}} \psi_C(\mathbf{x}_C)$$
Seems like an outlier, but very closely related to marginal inference. 
(See homework.)

### Visual Description
Text-based slide defining the Partition Function for Undirected Graphical Models (UGMs) with its mathematical formula involving a sum over products of clique potentials.

## Page 7
### Content
Inference tasks
Sampling, marginal inference, and calculating partition functions are of “comparable” hardness most of the time. (Interreducible.)
These resemble “counting” tasks: in general #P-hard. 
#P-hard problems: as hard as counting satisfying assignments to a given SAT formula. 
MAP has an “optimization” flavor. In general NP-hard. 
NP-hard problems: as hard as solving a SAT instance. 

### Visual Description
Text-based slide discussing the computational complexity of different inference tasks, categorizing sampling/marginals as #P-hard and MAP as NP-hard.

## Page 8
### Content
Exact inference
Today, we’ll see **variable elimination** and **belief propagation**: algorithms for calculating partition function and/or marginals *exactly*.
In general, both these algorithms will take exponential time (unavoidable), though in some special cases they will be efficient.
Generally, these algorithms will be efficient for graphs that are “closer to trees” (we’ll see in what sense). 
We will also see in later modules **MCMC** and **variational methods**: two families of techniques for doing **approximate inference**. 

### Visual Description
Text-based slide introducing the main topics of the lecture: Variable Elimination and Belief Propagation for exact inference, and mentioning future topics for approximate inference.

## Page 9
### Content
Part I: Variable Elimination

### Visual Description
Section header slide. Large dark blue text on a white background.

## Page 10
### Content
Variable elimination
The main idea behind variable elimination is to “peel” variables one at a time.
Precisely, we’ll “peel” one variable, calculate a graphical model where that variable is “summed out”, and continue iteratively. 
Example on a line graph: 
$$Z = \sum_{x_1} \sum_{x_2} \sum_{x_3} \sum_{x_4} \phi_{12}(x_1, x_2)\phi_{23}(x_2, x_3)\phi_{34}(x_3, x_4)$$

### Visual Description
A line graph with four light blue circular nodes labeled 1, 2, 3, and 4. Edges connect 1-2, 2-3, and 3-4. The potentials $\phi_{12}$, $\phi_{23}$, and $\phi_{34}$ are labeled above the corresponding edges. Below the graph is the mathematical expression for the partition function $Z$ as a nested summation.

## Page 11
### Content
Variable elimination
Eliminate variable $x_4$
$$Z = \sum_{x_1} \sum_{x_2} \sum_{x_3} \sum_{x_4} \phi_{12}(x_1, x_2)\phi_{23}(x_2, x_3)\phi_{34}(x_3, x_4)$$
$$= \sum_{x_1} \sum_{x_2} \sum_{x_3} \phi_{12}(x_1, x_2)\phi_{23}(x_2, x_3) \left[ \sum_{x_4} \phi_{34}(x_3, x_4) \right]$$
$$= \sum_{x_1} \sum_{x_2} \sum_{x_3} \phi_{12}(x_1, x_2)\phi_{23}(x_2, x_3) \psi_3(x_3)$$
Depends only on $x_3$!

### Visual Description
The same line graph from the previous page, but node 4 and the edge potential $\phi_{34}$ are crossed out with a large red 'X'. A red box highlights the summation over $x_4$ in the equation, and another red box highlights the resulting new potential $\psi_3(x_3)$.

## Page 12
### Content
Variable elimination
Eliminate variable $x_4$
$$Z = \sum_{x_1} \sum_{x_2} \sum_{x_3} \sum_{x_4} \phi_{12}(x_1, x_2)\phi_{23}(x_2, x_3)\phi_{34}(x_3, x_4)$$
$$= \sum_{x_1} \sum_{x_2} \sum_{x_3} \phi_{12}(x_1, x_2)\phi_{23}(x_2, x_3) \left[ \sum_{x_4} \phi_{34}(x_3, x_4) \right]$$
$$= \sum_{x_1} \sum_{x_2} \sum_{x_3} \phi_{12}(x_1, x_2)\phi_{23}(x_2, x_3) \psi_3(x_3)$$
Depends only on $x_3$!

### Visual Description
Similar to page 11, but the label above the edge between nodes 2 and 3 has been updated to $\phi_{23} \cdot \psi_3$, indicating the combination of the original potential and the new one derived from eliminating node 4.

## Page 13
### Content
Variable elimination
$$Z = \sum_{x_1} \sum_{x_2} \sum_{x_3} \phi_{12}(x_1, x_2)\phi_{23}(x_2, x_3)\psi_3(x_3)$$
$$= \sum_{x_1} \sum_{x_2} \phi_{12}(x_1, x_2) \left[ \sum_{x_3} \phi_{23}(x_2, x_3)\psi_3(x_3) \right]$$
$$= \sum_{x_1} \sum_{x_2} \phi_{12}(x_1, x_2) \psi_2(x_2)$$
Depends only on $x_2$!

### Visual Description
The line graph now has nodes 3 and 4 crossed out with red 'X's. The label above the edge between nodes 2 and 3 is $\phi_{23} \cdot \psi_3$. A red box highlights the summation over $x_3$ in the equation.

## Page 14
### Content
Variable elimination
$$Z = \sum_{x_1} \sum_{x_2} \phi_{12}(x_1, x_2) \psi_2(x_2)$$
$$= \sum_{x_1} \psi_1(x_1)$$

### Visual Description
The line graph now has nodes 2, 3, and 4 crossed out. Only node 1 remains. The label above the edge between 1 and 2 is $\phi_{12}$. The equation shows the final step of summing out $x_2$ to leave a function of $x_1$.

## Page 15
### Content
Variable elimination
$$\sum_{x_3, x_5, x_6} \sum_{x_2, x_4} \dots \left[ \sum_{x_1} \phi_{12}(x_1, x_2)\phi_{14}(x_1, x_4) \right]$$
$$\psi_{24}(x_2, x_4)$$

### Visual Description
A 2x3 grid graph with nodes labeled 1, 2, 3 (top row) and 4, 5, 6 (bottom row). Edges connect 1-2, 2-3, 4-5, 5-6, 1-4, 2-5, and 3-6. A red box highlights the summation over $x_1$ in the equation, which involves potentials $\phi_{12}$ and $\phi_{14}$. The result is a new potential $\psi_{24}$ that depends on $x_2$ and $x_4$.

## Page 16
### Content
Variable elimination
To eliminate a variable (e.g. $x_2$):
1. Combine part of sum involving node and its neighbors.
2. Remove node (marginalize out in the potential) and replace by new potential on clique consisting of neighbors. 

### Visual Description
The grid graph from the previous page is modified. Node 1 is gone. Node 2 is being eliminated. Its neighbors were 1 (already gone), 3, 5, and 4 (via the new potential $\psi_{24}$). Red lines are drawn between nodes 4-5, 5-3, and 4-3, forming a clique among the neighbors of the eliminated node 2.

## Page 17
### Content
Variable elimination

### Visual Description
The graph now shows nodes 3, 4, 5, and 6. Node 2 has been eliminated. Edges exist between 4-5, 5-6, 3-6, 5-3, and 4-3.

## Page 18
### Content
Variable elimination

### Visual Description
Node 3 has been eliminated. The remaining nodes are 4, 5, and 6. A curved edge now connects node 4 and node 6, representing the new potential created by eliminating node 3 and its neighbor 5.

## Page 19
### Content
Variable elimination

### Visual Description
Node 6 has been eliminated. Only nodes 4 and 5 remain, connected by a single edge.

## Page 20
### Content
Variable elimination

### Visual Description
Node 5 has been eliminated. Only node 4 remains.

## Page 21
### Content
Variable Elimination for Marginal Inference
**Algorithm 1b: Variable Elimination for the Partition Function**
**Input**: undirected graphical model (i.e. tables for potentials)
**Output**: the partition function
a. Pick an elimination ordering
b. Eliminate each variable in the ordering using Algorithm 2

**Algorithm 2: Eliminate One Variable**
**Input**: the variable to be eliminated
**Output**: new graph with the variable eliminated (i.e. new tables for potentials)
a. Find the input variable and its neighboring variables -- call this set the eliminated set
b. Add a clique on the eliminated set
a. Build a table for the potential over the new clique (for every possible value of the entries), by summing out the eliminated variable. 

### Visual Description
Two algorithm boxes. Algorithm 1b is in a light yellow box, and Algorithm 2 is in a light red box. The text describes the high-level steps for variable elimination.

## Page 22
### Content
Variable elimination
The complexity of the algorithm is governed by the: 
**largest clique** created in the course of running the algorithm,
since to describe a new potential over k vertices, we need a table of size $c^k$
**Important**: the order of elimination of vertices matters. 
Order 1: eliminate the outside vertices first.

### Visual Description
A star graph with a central node labeled 6 and five peripheral nodes labeled 1, 2, 3, 4, and 5. All peripheral nodes are connected only to node 6.

## Page 23
### Content
Variable elimination
The complexity of the algorithm is governed by the:
largest clique created in the course of running the algorithm,
since to describe a new potential over k vertices, we need a table of size $c^k$
**Important**: the order of elimination of vertices matters. 
Order 2: eliminate the center vertex first

### Visual Description
Two versions of the star graph. The left one is the original star graph. The right one shows the state after eliminating the center node 6: all peripheral nodes (1, 2, 3, 4, 5) are now connected to each other, forming a complete graph (a 5-clique).

## Page 24
### Content
Variable elimination
The complexity of the algorithm is governed by the: 
largest clique created in the course of running the algorithm,
since to describe a new potential over k vertices, we need a table of size $c^k$
The *minimum largest* clique created minus 1 is called the **treewidth** of the graph. 
Example: treewidth of a tree 1

### Visual Description
The original star graph (which is a tree) is shown. The text states its treewidth is 1.

## Page 25
### Content
Variable elimination
The complexity of the algorithm is governed by the: 
largest clique created in the course of running the algorithm,
since to describe a new potential over k vertices, we need a table of size $c^k$
The *minimum largest* clique created minus 1 is called the **treewidth** of the graph. 
Example: treewidth of a tree 1
Example: treewidth of a clique N-1

### Visual Description
The 5-clique graph (complete graph $K_5$) is shown. The text states the treewidth of an N-clique is N-1.

## Page 26
### Content
Variable elimination
The complexity of the algorithm is governed by the: 
largest clique created in the course of running the algorithm,
since to describe a new potential over k vertices, we need a table of size $c^k$
The *minimum largest* clique created minus 1 is called the **treewidth** of the graph. 
Example: treewidth of a tree 1
Example: treewidth of a clique N-1
Example: treewidth of a N by N grid N

### Visual Description
Text-based slide adding the treewidth of an N by N grid, which is N.

## Page 27
### Content
Why is “treewidth” called “treewidth”?
A “tree decomposition” of an undirected graph G(V,E) is a tree T, with nodes $W_1, W_2, \dots$ s.t. each $W_i$ is a subset of nodes of G, and:
(1) $\cup_i W_i = V$
(2) For every edge e, at least one $W_i$ contains it.
(3) If $W_i, W_j$ contain node v, all nodes on path from $W_i$ to $W_j$ in T contain v. 
Treewidth of G = smallest max size of $W_i$’s in any tree decomposition of G minus 1. 

### Visual Description
Top right: An undirected graph with nodes A, B, C, D, E, F, G, H and various edges.
Bottom right: A tree decomposition of the graph. It's a tree where each node is a "bag" containing a subset of the original nodes. For example, one bag contains {A, B, C}, another {B, C, E}, another {C, D, E}, etc. The bags are connected in a tree structure.

## Page 28
### Content
Why is “treewidth” called “treewidth”?
A “tree decomposition” of an undirected graph G(V,E) is a tree T, with nodes $W_1, W_2, \dots$ s.t. each $W_i$ is a subset of nodes of G, and:
(1) $\cup_i W_i = V$
(2) For every edge e, at least one $W_i$ contains it.
(3) If $W_i, W_j$ contain node v, all nodes on path from $W_i$ to $W_j$ in T contain v. 
**Running intersection property**
Also called **junction tree**

### Visual Description
Same as page 27, but property (3) is highlighted with a red box and labeled "Running intersection property". The term "junction tree" is also added.

## Page 29
### Content
Part II: Belief Propagation

### Visual Description
Section header slide. Large dark blue text on a white background.

## Page 30
### Content
Belief propagation
Suppose we wish to calculate the marginals of all vertices. 
We could run variable elimination for every vertex, but this seems wasteful. (A lot of the calculation should be reusable.) 
(Reminiscent of dynamic programming) 
Belief propagation is a **message passing algorithm**, that can be used for exact inference on **tree graphs**. 

### Visual Description
Text-based slide introducing Belief Propagation as an efficient alternative to running Variable Elimination multiple times, specifically for tree graphs.

## Page 31
### Content
Brief detour: factor graphs
A factor graph is a bipartite graph representing the factorization of a function.
$$g(X_1, X_2, \dots, X_n) = \prod_{j=1}^m f_j(S_j),$$
• $S_j \subseteq \{1, 2, \dots, n\}$
• Variable vertices $X_i$
• Factor vertices $f_j$ 
Slide by Eric Xing.

### Visual Description
Text-based slide defining factor graphs as bipartite graphs with variable nodes and factor nodes.

## Page 32
### Content
Brief detour: factor graphs
• Variables: $\mathcal{X} = \{X_1, \dots, X_i, \dots, X_n\}$
• Factors: $\psi_\alpha, \psi_\beta, \psi_\gamma, \dots$ where $\alpha, \beta, \gamma, \dots \subseteq \{1, \dots, n\}$
**Joint Distribution**
$$p(\mathbf{x}) = \frac{1}{Z} \prod_\alpha \psi_\alpha(\mathbf{x}_\alpha)$$
Slide by Eric Xing.

### Visual Description
A complex factor graph representing the sentence "time flies like an arrow". 
- Variable nodes ($X_1$ to $X_9$) are white circles.
- Factor nodes ($\psi$) are black squares.
- Edges connect variables to the factors they participate in.
- For example, $X_1$ (time) is connected to factor $\psi_1$ and factor $\psi_{\{1,8,9\}}$.
- The graph has a hierarchical structure, with some factors connecting multiple variables (e.g., $\psi_{\{1,8,9\}}$ connects $X_1, X_8, X_9$).

## Page 33
### Content
DGMs and UGMs as factor graphs
Each conditional and marginal distribution in a **directed GM** becomes a factor
Each maximal clique in an **undirected GM** becomes a factor
Slide by Eric Xing.

### Visual Description
Two pairs of graphs showing the conversion to factor graphs:
1.  **Left (Directed GM)**: A DAG with 6 nodes is converted to a factor graph. Each node in the DAG has an associated factor node in the factor graph representing its conditional probability $P(X_i | \text{parents}(X_i))$.
2.  **Right (Undirected GM)**: An undirected graph with 6 nodes is converted to a factor graph. Each maximal clique in the UGM becomes a factor node.

## Page 34
### Content
DGMs and UGMs as factor graphs
Example 1:
$P(X_1) P(X_2) P(X_3|X_1,X_2) P(X_5|X_1,X_3) P(X_4|X_2,X_3)$
$\downarrow \downarrow \downarrow \downarrow \downarrow$
$f_a(X_1) f_b(X_2) f_c(X_3,X_1,X_2) f_d(X_5,X_1,X_3) f_e(X_4,X_2,X_3)$
Slide by Eric Xing.

### Visual Description
A Directed Graphical Model (Bayesian Network) with 5 nodes: $X_1, X_2, X_3, X_4, X_5$. 
- Edges: $X_1 \to X_3, X_1 \to X_5, X_2 \to X_3, X_2 \to X_4, X_3 \to X_4, X_3 \to X_5$.
Below the graph, the joint probability factorization is shown, with red arrows mapping each term to a corresponding factor function $f$.

## Page 35
### Content
DGMs and UGMs as factor graphs
Example 1:
$P(X_1) P(X_2) P(X_3|X_1,X_2) P(X_5|X_1,X_3) P(X_4|X_2,X_3)$
$\downarrow \downarrow \downarrow \downarrow \downarrow$
$f_a(X_1) f_b(X_2) f_c(X_3,X_1,X_2) f_d(X_5,X_1,X_3) f_e(X_4,X_2,X_3)$
Slide by Eric Xing.

### Visual Description
The DGM from the previous page is shown alongside its equivalent factor graph.
- The factor graph has variable nodes $X_1$ to $X_5$ (pink circles) and factor nodes $f_a$ to $f_e$ (pink squares).
- $f_a$ connects only to $X_1$.
- $f_b$ connects only to $X_2$.
- $f_c$ connects to $X_1, X_2, X_3$.
- $f_d$ connects to $X_1, X_3, X_5$.
- $f_e$ connects to $X_2, X_3, X_4$.

## Page 36
### Content
DGMs and UGMs as factor graphs
Example 2:
$\psi(x_1,x_2,x_3) = f_a(x_1,x_2)f_b(x_2,x_3)f_c(x_3,x_1)$
Example 3:
$\psi(x_1,x_2,x_3) = f_a(x_1,x_2,x_3)$
Slide by Eric Xing.

### Visual Description
Two examples of Undirected Graphical Models, both being a triangle of nodes $X_1, X_2, X_3$.
- **Example 2**: The potential is a product of three pairwise factors.
- **Example 3**: The potential is a single factor over all three variables.

## Page 37
### Content
DGMs and UGMs as factor graphs
Example 2:
$\psi(x_1,x_2,x_3) = f_a(x_1,x_2)f_b(x_2,x_3)f_c(x_3,x_1)$
Example 3:
$\psi(x_1,x_2,x_3) = f_a(x_1,x_2,x_3)$
Slide by Eric Xing.

### Visual Description
The factor graph versions of Examples 2 and 3 are added.
- **Example 2 factor graph**: A hexagonal ring structure. Variable nodes $X_1, X_2, X_3$ alternate with factor nodes $f_a, f_b, f_c$.
- **Example 3 factor graph**: A star-like structure. A single central factor node $f_a$ is connected to all three variable nodes $X_1, X_2, X_3$.

## Page 38
### Content
Message Passing
Count the soldiers!
adapted from MacKay (2003) textbook
Slide by Matt Gormley.

### Visual Description
An illustration of message passing using a line of six stick-figure soldiers. 
- Each soldier has a speech bubble. 
- Red arrows point forward and backward between soldiers.
- Forward messages (left to right): "1 before you", "2 before you", "3 before you", "4 before you", "5 before you".
- Backward messages (right to left): "5 behind you", "4 behind you", "3 behind you", "2 behind you", "1 behind you".
- One soldier in the middle has a yellow box above them saying "there's 1 of me".

## Page 39
### Content
Message Passing
only see my incoming messages
Belief: Must be 2 + 1 + 3 = 6 of us
Slide by Matt Gormley.

### Visual Description
Focuses on one soldier in the line. 
- They receive a message from the left: "2 before you".
- They receive a message from the right: "3 behind you".
- They know "there's 1 of me".
- A thought cloud shows the calculation: $2 + 1 + 3 = 6$.
- A red dashed circle highlights the incoming messages.

## Page 40
### Content
Message Passing
only see my incoming messages
Belief: Must be 1 + 1 + 4 = 6 of us
Slide by Matt Gormley.

### Visual Description
Focuses on a different soldier (the second one from the left).
- Incoming from left: "1 before you".
- Incoming from right: "4 behind you".
- Self: "1 of me".
- Thought cloud: $1 + 1 + 4 = 6$.
- The previous soldier's thought cloud is also visible in the background.

## Page 41
### Content
Message Passing
7 here
3 here
11 here (= 7+3+1)
1 of me
Slide by Matt Gormley.

### Visual Description
The analogy is extended to a tree structure of soldiers. 
- A central soldier receives messages from three branches.
- Two incoming messages are shown: "7 here" and "3 here".
- The soldier knows "1 of me".
- The outgoing message to the third branch is "11 here (= 7+3+1)".
- Red arrows indicate the direction of message flow.

## Page 42
### Content
Message Passing
3 here
3 here
7 here (= 3+3+1)
Slide by Matt Gormley.

### Visual Description
Shows the message passing in a different direction for the same central soldier.
- Incoming from two branches: "3 here" and "3 here".
- Self: "1 of me".
- Outgoing to the third branch: "7 here (= 3+3+1)".

## Page 43
### Content
Message Passing
7 here
3 here
11 here (= 7+3+1)
Slide by Matt Gormley.

### Visual Description
Another example of message passing in the tree, showing how the "11 here" message is formed from incoming "7" and "3" plus the soldier themselves.

## Page 44
### Content
Message Passing
7 here
3 here
3 here
Belief: Must be 14 of us
Slide by Matt Gormley.

### Visual Description
The central soldier has now received messages from all three branches: "7 here", "3 here", and "3 here".
- Combined with "1 of me", they form a belief: "Must be 14 of us" ($7+3+3+1=14$).

## Page 45
### Content
Message Passing
wouldn't work correctly with a 'loopy' (cyclic) graph
Slide by Matt Gormley.

### Visual Description
The same tree of soldiers, but a new black line is drawn connecting two leaf soldiers, creating a cycle (loop). Blue text notes that this simple counting method wouldn't work in such a graph.

## Page 46
### Content
Message Passing: Belief propagation
Both messages judge the possible values of variable X.
Their product = belief at X = product of all 3 messages to X.
My other factors think I’m likely a n
But my other variables and I think you’re likely a v
Slide by Matt Gormley.

### Visual Description
Transition from the soldier analogy to formal belief propagation on a factor graph.
- A variable node $X$ is connected to three factor nodes (black squares).
- Messages are represented as tables of values for different states (v, n, a).
- One incoming message to $X$ from a factor says: v:1, n:6, a:3 (likely 'n').
- Another incoming message to $X$ from a different factor says: v:6, n:1, a:3 (likely 'v').
- A thought cloud above $X$ shows the combined belief (product of messages): v:6, n:6, a:9.
- Green arrows show the direction of messages.

## Page 47
### Content
Message Passing: Belief propagation
Variables Factors
Beliefs
Messages
Slide by Matt Gormley.

### Visual Description
A 2x2 grid of diagrams illustrating the different types of beliefs and messages:
- **Top Left (Variable Belief)**: Variable $X_1$ receiving messages from factors $\psi_1, \psi_2, \psi_3$.
- **Top Right (Factor Belief)**: Factor $\psi_1$ receiving messages from variables $X_1, X_2, X_3$.
- **Bottom Left (Variable Message)**: Variable $X_1$ sending a message to factor $\psi_3$, based on incoming messages from $\psi_1$ and $\psi_2$.
- **Bottom Right (Factor Message)**: Factor $\psi_1$ sending a message to variable $X_3$, based on incoming messages from $X_1$ and $X_2$.
Yellow arrows and dots indicate message flow.

## Page 48
### Content
Message Passing: Belief propagation
Variable Belief
$$b_i(x_i) = \prod_{\alpha \in \mathcal{N}(i)} \mu_{\alpha \to i}(x_i)$$
Slide by Matt Gormley.

### Visual Description
Diagram for Variable Belief. 
- Variable node $X_1$ receives three messages (tables of values for states v, n, p) from factors $\psi_1, \psi_2, \psi_3$.
- Message from $\psi_1$: v:0.1, n:3, p:1.
- Message from $\psi_2$: v:1, n:2, p:2.
- Message from $\psi_3$: v:4, n:1, p:0.
- The resulting belief $b_1(x_1)$ is shown in a grey cloud: v:.4, n:6, p:0 (element-wise product).
- The mathematical formula for variable belief is shown in a box.

## Page 49
### Content
Message Passing: Belief propagation
Variable Message
$$\mu_{i \to \alpha}(x_i) = \prod_{\alpha' \in \mathcal{N}(i) \setminus \alpha} \mu_{\alpha' \to i}(x_i)$$
Slide by Matt Gormley.

### Visual Description
Diagram for Variable Message.
- Variable $X_1$ is sending a message to factor $\psi_3$.
- This message is the product of incoming messages from its *other* neighbors, $\psi_1$ and $\psi_2$.
- Incoming from $\psi_1$: v:0.1, n:3, p:1.
- Incoming from $\psi_2$: v:1, n:2, p:2.
- Outgoing to $\psi_3$: v:0.1, n:6, p:2.
- The mathematical formula is shown in a box.

## Page 50
### Content
Message Passing: Belief propagation
Factor Belief
$$b_\alpha(\mathbf{x}_\alpha) = \psi_\alpha(\mathbf{x}_\alpha) \prod_{i \in \mathcal{N}(\alpha)} \mu_{i \to \alpha}(\mathbf{x}_\alpha[i])$$
Slide by Matt Gormley.

### Visual Description
Diagram for Factor Belief.
- Factor node $\psi_{13}$ is connected to variables $X_1$ and $X_3$.
- It receives a message from $X_1$: p:4, d:1, n:0.
- It receives a message from $X_3$: v:8, n:0.2.
- The factor itself has a potential table $\psi_{13}(x_1, x_3)$ shown in green.
- The resulting factor belief $b_{13}(x_1, x_3)$ is shown in a grey cloud as a table of products.
- The mathematical formula is shown in a box.

## Page 51
### Content
Message Passing: Belief propagation
Factor Message
$$\mu_{\alpha \to i}(x_i) = \sum_{\mathbf{x}_\alpha : \mathbf{x}_\alpha[i]=x_i} \psi_\alpha(\mathbf{x}_\alpha) \prod_{j \in \mathcal{N}(\alpha) \setminus i} \mu_{j \to \alpha}(\mathbf{x}_\alpha[j])$$
Slide by Matt Gormley.

### Visual Description
Diagram for Factor Message.
- Factor $\psi_{13}$ is sending a message to variable $X_1$.
- It uses its own potential and the incoming message from $X_3$.
- The calculation involves summing over the states of $X_3$.
- The outgoing message to $X_1$ is shown as a table: p:0.8+0.16, d:24+0, n:8+0.2.
- The mathematical formula is shown in a box.

## Page 52
### Content
Sum-product belief propagation
**Input**: a factor graph with no cycles
**Output**: exact marginals for each variable and factor
**Algorithm**:
1. Initialize the messages to the uniform distribution.
   $$\mu_{i \to \alpha}(x_i) = 1 \quad \mu_{\alpha \to i}(x_i) = 1$$
1. Choose a root node.
2. Send messages from the **leaves** to the **root**.
   Send messages from the **root** to the **leaves**.
   $$\mu_{i \to \alpha}(x_i) = \prod_{\alpha' \in \mathcal{N}(i) \setminus \alpha} \mu_{\alpha' \to i}(x_i) \quad \mu_{\alpha \to i}(x_i) = \sum_{\mathbf{x}_\alpha : \mathbf{x}_\alpha[i]=x_i} \psi_\alpha(\mathbf{x}_\alpha) \prod_{j \in \mathcal{N}(\alpha) \setminus i} \mu_{j \to \alpha}(\mathbf{x}_\alpha[j])$$
1. Compute the beliefs (unnormalized marginals).
   $$b_i(x_i) = \prod_{\alpha \in \mathcal{N}(i)} \mu_{\alpha \to i}(x_i) \quad b_\alpha(\mathbf{x}_\alpha) = \psi_\alpha(\mathbf{x}_\alpha) \prod_{i \in \mathcal{N}(\alpha)} \mu_{i \to \alpha}(\mathbf{x}_\alpha[i])$$
2. Normalize beliefs and return the **exact marginals**.
   $$p_i(x_i) \propto b_i(x_i) \quad p_\alpha(\mathbf{x}_\alpha) \propto b_\alpha(\mathbf{x}_\alpha)$$
Slide by Matt Gormley.

### Visual Description
A comprehensive summary of the Sum-product Belief Propagation algorithm, including input/output, initialization, message passing rules, belief computation, and normalization.

## Page 53
### Content
(Acyclic) Belief Propagation
In a factor graph with no cycles: 
1. Pick any node to serve as the root.
2. Send messages from the **leaves** to the **root**.
3. Send messages from the **root** to the **leaves**.
A node computes an outgoing message along an edge only after it has received incoming messages along all its other edges.
Slide by Matt Gormley.

### Visual Description
A tree-structured factor graph for the sentence "time flies like an arrow". 
- Variable nodes $X_1$ to $X_9$ and factor nodes $\psi_1$ to $\psi_{13}$.
- Green arrows show the first pass of messages: from the leaves (bottom) up towards the root ($X_8$).
- A yellow highlight shows a specific message path being computed.

## Page 54
### Content
(Acyclic) Belief Propagation
In a factor graph with no cycles: 
1. Pick any node to serve as the root.
2. Send messages from the **leaves** to the **root**.
3. Send messages from the **root** to the **leaves**.
A node computes an outgoing message along an edge only after it has received incoming messages along all its other edges.
Slide by Matt Gormley.

### Visual Description
The same factor graph, but now showing the second pass of messages: from the root ($X_8$) down towards the leaves. Green arrows point downwards.

## Page 55
### Content
Why it works: dynamic programming
$$p(X_i = x_i) \propto \sum_{\mathbf{x} : x_i=x_i} \prod_\alpha \psi_\alpha(\mathbf{x}_\alpha)$$
$$= \left( \sum_{\mathbf{x}_F} \prod_{\alpha \subseteq F} \psi_\alpha(\mathbf{x}_\alpha) \psi_1(\mathbf{x}_F, x_i) \right) \left( \sum_{\mathbf{x}_G} \prod_{\alpha \subseteq G} \psi_\alpha(\mathbf{x}_\alpha) \psi_2(\mathbf{x}_G, x_i) \right)$$
**Inductively**: we show the messages passed calculate the subtree sums

### Visual Description
A diagram of a tree graph rooted at $X_i$. 
- The tree is split into two subtrees, $F$ and $G$, connected to $X_i$ via factors $\psi_1$ and $\psi_2$.
- Dashed lines enclose the subtrees.
- The equation shows how the marginal at $X_i$ can be factored into independent summations over the subtrees.

## Page 56
### Content
Why it works: dynamic programming
$$p(X_\alpha = \mathbf{x}_\alpha) \propto \sum_{\mathbf{x} : \mathbf{x}[\alpha]=\mathbf{x}_\alpha} \prod_\beta \psi_\beta(\mathbf{x}_\beta)$$
$$= \psi_\alpha(\mathbf{x}_\alpha) \left( \sum_{\mathbf{x}_F} \prod_{\alpha \subseteq F} \psi_\alpha(\mathbf{x}_\alpha) \right) \left( \sum_{\mathbf{x}_G} \prod_{\alpha \subseteq G} \psi_\alpha(\mathbf{x}_\alpha) \right)$$
**Inductively**: we show the messages passed calculate the subtree sums
Why it works: dynamic programming

### Visual Description
Similar to page 55, but the focus is on a factor node $\psi_\alpha$ and its connected subtrees $F$ and $G$. The equation shows the factorization of the factor belief.

## Page 57
### Content
Why it works: dynamic programming
• If you want the **marginal** $p_i(x_i)$ where $X_i$ has degree $k$, you can think of that summation as a **product of $k$ marginals** computed on smaller subgraphs.
• Each subgraph is obtained by **cutting** some edge of the tree.
• The message-passing algorithm uses **dynamic programming** to compute the marginals on all such subgraphs, working from **smaller to bigger**. So you can compute all the marginals.
Slide by Matt Gormley.

### Visual Description
The "time flies like an arrow" factor graph is shown. A green dashed line and arrow highlight a small subgraph (the leaf factor $\psi_3$ and its connection to $X_2$). This represents the "smaller" part of the dynamic programming process.

## Page 58
### Content
Why it works: dynamic programming
Slide by Matt Gormley.

### Visual Description
The same graph, but the dashed line now encloses a slightly larger subgraph: $\psi_3$ and $X_2$. The arrow points towards the next factor $\psi_{13}$.

## Page 59
### Content
Why it works: dynamic programming
Slide by Matt Gormley.

### Visual Description
The dashed line encloses an even larger subgraph: $X_1, \psi_1, X_2, \psi_3$, and $\psi_{13}$. The arrow points towards $X_9$.

## Page 60
### Content
Why it works: dynamic programming
Slide by Matt Gormley.

### Visual Description
The dashed line encloses the entire left branch of the tree up to $X_9$. The arrow points towards the root factor $\psi_{12}$.

## Page 61
### Content
Why it works: dynamic programming
Slide by Matt Gormley.

### Visual Description
The dashed line now encloses the root $X_8$ and its connection to $\psi_{12}$, with an arrow pointing towards the right branch.

## Page 62
### Content
Why it works: dynamic programming
Slide by Matt Gormley.

### Visual Description
The dashed line encloses the right branch starting from $X_7$ and its children.

## Page 63
### Content
Why it works: dynamic programming
Slide by Matt Gormley.

### Visual Description
The dashed line encloses a small part of the right branch: $X_3$ and $\psi_5$.

## Page 64
### Content
Max-product Belief Propagation
• **Sum-product BP** can be used to 
  compute the marginals, $p_i(X_i)$
  compute the partition function, $Z$
• **Max-product BP** can be used to 
  compute the most likely assignment,
  $\mathbf{X}^* = \text{argmax}_{\mathbf{X}} p(\mathbf{X})$
Slide by Matt Gormley.

### Visual Description
Text-based slide comparing Sum-product BP (for marginals/partition function) and Max-product BP (for MAP assignment).

## Page 65
### Content
Max-product Belief Propagation
• Change the sum to a max:
$$\mu_{i \to \alpha}(x_i) = \prod_{\alpha \in \mathcal{N}(i) \setminus \alpha} \mu_{\alpha \to i}(x_i)$$
$$\mu_{\alpha \to i}(x_i) = \sum_{\mathbf{x}_\alpha : \mathbf{x}_\alpha[i]=x_i} \psi_\alpha(\mathbf{x}_\alpha) \prod_{j \in \mathcal{N}(\alpha) \setminus i} \mu_{j \to \alpha}(\mathbf{x}_\alpha[j])$$
• **Max-product BP computes max-marginals**
– The max-marginal $b_i(x_i)$ is the (unnormalized) probability of the MAP assignment under the constraint $X_i = x_i$.
– For an acyclic graph, the MAP assignment (assuming there are no ties) is given by: 
$$x_i^* = \text{argmax}_{x_i} b_i(x_i)$$
Slide by Matt Gormley.

### Visual Description
Text and equations showing the transition from sum-product to max-product. Note: the second equation still shows a summation symbol, which is corrected on the next page.

## Page 66
### Content
Max-product Belief Propagation
• Change the sum to a max:
$$\mu_{i \to \alpha}(x_i) = \prod_{\alpha \in \mathcal{N}(i) \setminus \alpha} \mu_{\alpha \to i}(x_i)$$
$$\mu_{\alpha \to i}(x_i) = \max_{\mathbf{x}_\alpha : \mathbf{x}_\alpha[i]=x_i} \psi_\alpha(\mathbf{x}_\alpha) \prod_{j \in \mathcal{N}(\alpha) \setminus i} \mu_{j \to \alpha}(\mathbf{x}_\alpha[j])$$
• **Max-product BP computes max-marginals**
– The max-marginal $b_i(x_i)$ is the (unnormalized) probability of the MAP assignment under the constraint $X_i = x_i$.
– For an acyclic graph, the MAP assignment (assuming there are no ties) is given by: 
$$x_i^* = \text{argmax}_{x_i} b_i(x_i)$$
Slide by Matt Gormley.

### Visual Description
Same as page 65, but the summation symbol in the second equation has been correctly replaced with a `max` operator.

## Page 67
### Content
Remarks
Algorithm can actually be run **asynchronously** (still works on a tree graph, so long as enough messages have been passed for one full pass in both directions). 
You can run the algorithm on a graph with loops --- performance guarantee just goes away. (This is called **loopy BP**, we’ll see some connections to variational methods later.) 
You can run a version of BP on a tree decomposition of a non-tree graph --- this is called the **junction tree** algorithm. 

### Visual Description
Text-based slide providing additional remarks on asynchronous BP, loopy BP, and the junction tree algorithm.

## Page 68
### Content
Special case: forward-backward algorithm for HMMs
$X_1$ $X_2$ $X_3$
find preferred tags
Could be verb or noun | Could be adjective or verb | Could be noun or verb
Slide by Matt Gormley.

### Visual Description
A factor graph representing a Hidden Markov Model (HMM) for part-of-speech tagging. 
- Three variable nodes $X_1, X_2, X_3$ (white circles) represent the hidden tags for the words "find", "preferred", and "tags".
- Black square factor nodes connect the variables in a chain and also connect each variable to its observed word.
- Text below each word indicates possible tags.

## Page 69
### Content
Special case: forward-backward algorithm for HMMs
$X_1$ $X_2$ $X_3$
v n a | v n a | v n a
START END
• A configuration for the variables is one “guess” for the parts of speech for each token. (The latent vars.) 
find preferred tags
Slide by Matt Gormley.

### Visual Description
The factor graph is "blown up" to show the possible states for each variable: 'v' (verb), 'n' (noun), 'a' (adjective). 
- Each variable node is now an ellipse containing three triangles representing these states.
- Lines connect states between adjacent variables, representing transition probabilities.
- "START" and "END" nodes are added at the beginning and end of the chain.
- A specific path is highlighted: $X_1=v, X_2=a, X_3=n$.

## Page 70
### Content
Special case: forward-backward algorithm for HMMs
$X_1$ $X_2$ $X_3$
v n a | v n a | v n a
START END
• The factor graph looks as above (ellipses are “blown up” variable node). 
find preferred tags
Slide by Matt Gormley.

### Visual Description
Same as page 69, emphasizing that the ellipses represent expanded variable nodes in the factor graph.

## Page 71
### Content
Special case: forward-backward algorithm for HMMs
$X_1$ $X_2$ $X_3$
v n a | v n a | v n a
START END
find preferred tags
• So $p(\mathbf{v} \mathbf{a} \mathbf{n}) = (1/Z) * \text{product weight of one path}$
$\psi_{\{0,1\}}(\text{START}, v)$
$\psi_{\{1\}}(v)$
$\psi_{\{1,2\}}(v, a)$
$\psi_{\{2\}}(a)$
$\psi_{\{2,3\}}(a, n)$
$\psi_{\{3\}}(n)$
$\psi_{\{3,4\}}(a, \text{END})$
Slide by Matt Gormley.

### Visual Description
The highlighted path ($v \to a \to n$) is shown with red lines. Labels in red text identify the various potential functions (transition and emission) along this path.

## Page 72
### Content
Special case: forward-backward algorithm for HMMs
$X_1$ $X_2$ $X_3$
v n a | v n a | v n a
START END
find preferred tags
• So $p(\mathbf{v} \mathbf{a} \mathbf{n}) = (1/Z) * \text{product weight of one path}$
• Marginal probability $p(X_2 = a) = (1/Z) * \text{total weight of all paths through a}$
Slide by Matt Gormley.

### Visual Description
The diagram now highlights all paths that pass through state 'a' for variable $X_2$ using orange lines. A red triangle highlights the specific state 'a' at $X_2$.

## Page 73
### Content
Special case: forward-backward algorithm for HMMs
$\alpha_2(n) = \text{total weight of these path prefixes}$
(found by dynamic programming)
$X_1$ $X_2$ $X_3$
v n a | v n a | v n a
START END
find preferred tags
Slide by Matt Gormley.

### Visual Description
Focuses on the "forward" part of the algorithm. 
- A blue shaded area highlights all path prefixes from START to state 'n' at $X_2$.
- This total weight is labeled $\alpha_2(n)$.

## Page 74
### Content
Special case: forward-backward algorithm for HMMs
$\beta_2(n) = \text{total weight of these path suffixes}$
(found by dynamic programming)
$X_1$ $X_2$ $X_3$
v n a | v n a | v n a
START END
find preferred tags
Slide by Matt Gormley.

### Visual Description
Focuses on the "backward" part of the algorithm.
- A blue shaded area highlights all path suffixes from state 'n' at $X_2$ to END.
- This total weight is labeled $\beta_2(n)$.

## Page 75
### Content
Special case: forward-backward algorithm for HMMs
“belief that $X_2 = n$”
total weight of all paths through $n = \alpha_2(n) \cdot \psi_{\{2\}}(n) \cdot \beta_2(n)$
Slide by Matt Gormley.

### Visual Description
Combines the forward and backward components for state 'n' at $X_2$.
- Green arrows show the incoming forward message $\alpha_2(n)$ and backward message $\beta_2(n)$.
- A green arrow from below represents the emission potential $\psi_{\{2\}}(n)$.
- The product of these three terms gives the belief for $X_2=n$.

## Page 76
### Content
Special case: forward-backward algorithm for HMMs
“belief that $X_2 = a$”
“belief that $X_2 = v$”
“belief that $X_2 = n$”
sum = Z (total probability of all paths)
divide by Z=6 to get marginal probs
total weight of all paths through $a = \alpha_2(a) \cdot \psi_{\{2\}}(a) \cdot \beta_2(a)$
Slide by Matt Gormley.

### Visual Description
Shows the calculation of beliefs for all three states (v, n, a) at $X_2$.
- A thought cloud shows the unnormalized beliefs: v:1.8, n:0, a:4.2.
- Their sum is $Z=6$.
- Another thought cloud shows the normalized marginal probabilities: v:0.3, n:0, a:0.7.

## Page 77
### Content
Special case: Viterbi algorithm for HMMs
Most likely path is max over $x \in \{v, n, a\}$
$\alpha'_2(x) \cdot \psi_{\{2\}}(x) \cdot \beta'_2(x)$
$\alpha'_2, \beta'_2$ most likely prefix/suffix (computed w dynamic programming)
Slide by Matt Gormley.

### Visual Description
Diagram for the Viterbi algorithm, which is the max-product version of forward-backward.
- The notation changes to $\alpha'$ and $\beta'$ to indicate that they represent the *maximum* weight of prefixes/suffixes rather than the sum.

## Page 78
### Content
Summary
**Variable Elimination**
**Uses**
• Computes the partition function/marginals of **any** undirected graph
• Computes the **marginal probability** of a **query variable**
**Limitations**
• Only computes the marginal for **one variable at a time** (i.e. need to re-run variable elimination for each variable if you need them all)
• Efficient only when graph has **low treewidth**, and **good elimination order** can be found. 

**Belief Propagation**
**Uses**
• Computes the partition function of **any acyclic** factor graph.
• Computes **all marginal probabilities** of factors and variables at once, for **any acyclic** factor graph
• Can be run asynchronously (but the obvious topological ordering always works best)
**Limitations**
• Formally correct only on **acyclic** factor graphs (though we’ll consider its “loopy” variant later; also variants like junction tree exist for cyclic graphs)

### Visual Description
A summary table comparing Variable Elimination (in a light blue box) and Belief Propagation (in a light red box) based on their uses and limitations.\n