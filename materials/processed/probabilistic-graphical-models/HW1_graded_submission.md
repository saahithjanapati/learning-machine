# Homework 1 (Graded Submission)

Source: `materials/archive/submission_388360398.pdf`
Duplicate equivalents: `submission_388360398.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 37

## Page 1
### Content
**Homework 1**
**Graded**

**Student**
Saahith Janapati

**Total Points**
104 / 105 pts

**Question 1**
UGM 1.1 **10 / 10 pts**

1.1 **1.1.a** **2 / 2 pts**
*   **- 0 pts** Correct
*   **- 2 pts** Incorrect

1.2 **1.1.b** **1 / 1 pt**
*   **- 0 pts** Correct
*   **- 1 pt** Incorrect

1.3 **1.1.c** **1 / 1 pt**
*   **- 0 pts** Correct
*   **- 1 pt** Incorrect

1.4 **1.1.d** **1 / 1 pt**
*   **- 0 pts** Correct

1.5 **1.1.e** **1 / 1 pt**
*   **- 0 pts** Correct
*   **- 1 pt** Incorrect

1.6 **1.1.f** **2 / 2 pts**
*   **- 0 pts** Correct
*   **- 2 pts** Incorrect

1.7 **1.1.g** **2 / 2 pts**
*   **- 0 pts** Correct
*   **- 2 pts** Incorrect

### Visual Description
This is a summary page for a graded homework assignment. It lists the student's name, total score, and a breakdown of points for Question 1, sub-parts 1.1.a through 1.1.g. Each sub-part shows a checkmark indicating it was correct and 0 points were deducted.

---

## Page 2
### Content
**Question 2**
DGM 1.2 **12 / 12 pts**

2.1 **1.2.a** **2 / 2 pts**
*   **- 0 pts** Correct
*   **- 2 pts** Incorrect

2.2 **1.2.b** **1 / 1 pt**
*   **- 0 pts** Correct

2.3 **1.2.c** **1 / 1 pt**
*   **- 0 pts** Correct

2.4 **1.2.d** **1 / 1 pt**
*   **- 0 pts** Correct

2.5 **1.2.e** **1 / 1 pt**
*   **- 0 pts** Correct
*   **- 1 pt** Incorrect

2.6 **1.2.f** **2 / 2 pts**
*   **- 0 pts** Correct
*   **- 1 pt** Incorrect

2.7 **1.2.g** **2 / 2 pts**
*   **- 0 pts** Correct
*   **- 2 pts** Incorrect

### Visual Description
This page continues the grading summary, focusing on Question 2, sub-parts 1.2.a through 1.2.g. Like the previous page, it shows full marks for each section with checkmarks indicating correct answers.

---

## Page 3
### Content
2.8 **1.2.h** **2 / 2 pts**

**Correct**

*   **- 2 pts** Incorrect
*   **- 1 pt** One edit (either extraneous edge or missing edge) away.
*   **- 2 pts** At least two edits (either extraneous edge or missing edge) away.
*   **- 0.5 pts** Did not use undirected edges.
*   **- 2 pts** No answer provided.

### Visual Description
The page shows the grading for sub-part 1.2.h, which includes an undirected graph. The graph has 8 nodes labeled A, B, C, D, E, F, G, and H. The edges are red lines connecting the nodes: (A,B), (A,H), (B,C), (B,D), (B,H), (C,D), (C,F), (D,E), (D,F), (D,G), (E,G), (E,H), (F,G), and (G,H). Below the graph is a grading rubric for potential deductions.

---

## Page 4
### Content
**Question 3**
(no title) **13 / 13 pts**

3.1 **1.3.a (Properties of Probability Distance and Correlations)** **5 / 5 pts**

**Correct**

> **Solution** By the expression in class, the LHS is equal to $\log(\sigma_3/\sigma_1) + \sigma_1^2/2\sigma_3^2 - 1/2$, and the RHS is
> $$\log(\sigma_2/\sigma_1) + \log(\sigma_3/\sigma_2) + \sigma_1^2/2\sigma_2^2 + \sigma_2^2/2\sigma_3^2 - 1$$
> So, we want to find $\sigma_i$, s.t.
> $$\sigma_1^2/\sigma_3^2 > \sigma_1^2/\sigma_2^2 + \sigma_2^2/\sigma_3^2 - 1$$
> $$(\sigma_1^2 - \sigma_2^2)(\sigma_2^2 - \sigma_3^2) > 0$$
> **Therefore** $\sigma_1^2 > \sigma_2^2 > \sigma_3^2 > 0$ or $0 < \sigma_1^2 < \sigma_2^2 < \sigma_3^2$. Consider $\sigma_1^2 = 3, \sigma_2^2 = 2, \sigma_1^2 = 1$ and the inequality will be satisfied.

*   **- 0.5 pts** Student's solution has minor mistakes that do not affect the final conclusion
*   **- 1 pt** Student's solution has minor mistakes that affects the final conclusion
*   **- 1 pt** Student generally used the correct approach but gave a solution that satisfies $KL(p,r) \ge KL(p,q) + KL(q,r)$, NOT $KL(p,r) > KL(p,q) + KL(q,r)$.
*   **- 2 pts** Student generally used the correct approach but there is some important mistake (e.g., their KL expression is incorrect), which led to incorrect answer.
*   **- 4 pts** Student's solution satisfies instead of violating the triangle inequality. Note that the inequality given in the question describes the violation of the triangle inequality, so you're supposed to give an example that satisfies $KL(p,r) > KL(p,q) + KL(q,r)$.
*   **- 5 pts** No submission

### Visual Description
This page shows the grading for sub-part 1.3.a. It includes a solution box with mathematical derivations using KL divergence properties for Gaussian distributions to show a violation of the triangle inequality. Below the solution is a detailed grading rubric with various point deductions for specific errors.

---

## Page 5
### Content
3.2 **1.3.b (Relating Covariance and Mutual Information)** **8 / 8 pts**

**Correct**

> **Solution** First, we have:
> $$TV(p_{X,Y}, p_X \otimes p_Y) = \frac{1}{2} \sum_{x,y} |Pr(X=x, Y=y) - Pr(X=x)Pr(Y=y)|$$
> $$\ge \frac{1}{2} \sum_{x,y} \left| \frac{x}{M} \frac{y}{M} \right| |Pr(X=x, Y=y) - Pr(X=x)Pr(Y=y)|$$
> $$= \frac{1}{2M^2} \sum_{x,y} |xy| |Pr(X=x, Y=y) - Pr(X=x)Pr(Y=y)|$$
> $$\ge \frac{1}{2M^2} \left| \sum_{x,y} xy Pr(X=x, Y=y) - Pr(X=x)Pr(Y=y) \right|$$
> $$= \frac{1}{2M^2} Cov(X,Y)$$
> By Pinsker's inequality, we additionally have
> $$\sqrt{\frac{1}{2} KL(p_{X,Y} || p_X \otimes p_Y)} \ge TV(p_{X,Y}, p_X \otimes p_Y)$$
> Hence,
> $$\sqrt{\frac{1}{2} KL(p_{X,Y} || p_X \otimes p_Y)} \ge \frac{1}{2M^2} Cov(X,Y)$$
> Squaring on both sides, and rearranging, we get the claim we need.

*   **- 1 pt** The solution is generally correct but has very minor mistakes that do not affect the conclusion
*   **- 1.5 pts** The solution is generally correct but has mistakes that are not negligible but still do not affect the conclusion
*   **- 3.5 pts** The solution contains significant mistakes that shows misunderstandings of certain important concepts but still shows the correct thought process
*   **- 6 pts** The solution doesn't show the correct thought process but has made significant efforts and somehow arrives at the correct answer
*   **- 7 pts** The solution does not show significant effort of attempting (e.g. just copying and rearranging the hints we provided in the problem statement) but somehow still arrives at the correct answer
*   **- 8 pts** Incorrect/No submission/Extremely minimal effort

### Visual Description
This page shows the grading for sub-part 1.3.b. It contains a mathematical proof relating Total Variation (TV) distance, Covariance, and KL divergence (Mutual Information) using Pinsker's inequality. The proof is contained in a red-bordered box, followed by a grading rubric.

---

## Page 6
### Content
**Question 4**
Factor Graphs **8 / 8 pts**

4.1 **1.4.a** **2 / 2 pts**

**Correct**

*   **- 1 pt** Did not use maximal cliques/extra connections
*   **- 2 pts** Incorrect/Missing

### Visual Description
This page shows the grading for sub-part 1.4.a, which involves a factor graph. The graph contains circular variable nodes labeled A, B, C, D, E, F, G, H, I, and J. There are also small black square factor nodes.
- A factor node connects A, B, C, and D.
- A factor node connects C, I, and E.
- A factor node connects E, F, H, and G.
- A factor node connects D and J.
- A factor node connects J and G.
The connections are shown with red lines. A grading rubric is provided below the graph.

---

## Page 7
### Content
4.2 **1.4.b** **2 / 2 pts**

**Correct**

*   **- 1 pt** Missing factor/incorrect connection
*   **- 2 pts** Incorrect/Missing

### Visual Description
This page shows the grading for sub-part 1.4.b, featuring another factor graph. Circular variable nodes are labeled A, B, C, D, E, and F.
- A factor node connects A and C.
- A factor node connects C and D.
- A factor node connects B, C, and F.
- A factor node connects B, E, and F.
- There is a factor node connected only to E.
- There is a factor node connected only to F.
The connections are red lines. A grading rubric is provided below.

---

## Page 8
### Content
4.3 **1.4.c** **2 / 2 pts**

**Correct**

*   **- 1 pt** Missing/extra edges
*   **- 2 pts** Incorrect/Missing

4.4 **1.4.d** **2 / 2 pts**

**Correct**

*   **- 1 pt** Incorrect edge
*   **- 2 pts** Incorrect/Missing

### Visual Description
This page contains two sub-parts, 1.4.c and 1.4.d, each with a graph and a rubric.
- **1.4.c**: An undirected graph with nodes A, B, C, D, E, F, and G. Red edges connect (A,E), (A,F), (E,F), (B,F), (B,C), (C,F), (C,D), (C,G), and (D,G).
- **1.4.d**: A directed acyclic graph (DAG) with nodes A, B, C, D, and E. Red arrows indicate directed edges: A $\rightarrow$ C, A $\rightarrow$ D, B $\rightarrow$ C, C $\rightarrow$ D, and C $\rightarrow$ E.

---
## Page 9
### Content
**Question 5**
**Belief Propagation** **6 / 6 pts**

**5.1 1.5.a** **1 / 1 pt**
*   $\checkmark$ **- 0 pts** [1, 1]
*   **- 1 pt** incorrect

**5.2 1.5.b** **1 / 1 pt**
*   $\checkmark$ **- 0 pts** [5, 4]
*   **- 1 pt** incorrect

**5.3 1.5.c** **1 / 1 pt**
*   $\checkmark$ **- 0 pts** [2990, 1850]
*   **- 1 pt** incorrect

**5.4 1.5.d** **1 / 1 pt**
*   $\checkmark$ **- 0 pts** [2904, 1936]
*   **- 1 pt** incorrect

**5.5 1.5.e** **1 / 1 pt**
*   $\checkmark$ **- 0 pts** [2400, 160, 1800, 480]
*   **- 1 pt** incorrect
*   **- 0.001 pts** belief is unnormalized

**5.6 1.5.f** **1 / 1 pt**
*   $\checkmark$ **- 0 pts** 4840 Correct
*   **- 1 pt** incorrect

### Visual Description
A screenshot of a digital grading interface for "Question 5: Belief Propagation". It shows six sub-questions (5.1 to 5.6) with their respective scores (all 1/1 pt) and the correct numerical answers provided in brackets or as plain text.

---

## Page 10
### Content
**Question 6**
**Variable Elimination** **7 / 7 pts**

**6.1 1.6.a** **4 / 4 pts**
*   $\checkmark$ **- 0 pts**
    **Solution**
    Below we show that eliminating a leaf node won't introduce any extra edge. Since a leaf node only has one edge. By using the elimination rule in the class, it won't introduce any extra edge. Therefore, every time we eliminate leaves, we only create a nodewise potential and the remaining graph is still a tree.
    Correct
*   **- 1 pt** Minor Mistake or missing details in explanation
*   **- 2 pts** Missing explanation or not generalizable to all trees
*   **- 4 pts** Missing or incorrect

**6.2 1.6.b** **3 / 3 pts**
*   $\checkmark$ **- 0 pts**
    **Solution** Consider a star-graph with $r$ neighbors. Eliminating center of star creates a clique over its neighbors.
    Correct
*   **- 1 pt** Minor Mistake
*   **- 3 pts** Missing or incorrect

### Visual Description
A screenshot of a digital grading interface for "Question 6: Variable Elimination". It contains two sub-questions (6.1 and 6.2) with their scores. Sub-question 6.1 includes a red-text solution explaining why eliminating leaf nodes in a tree preserves the tree structure. Sub-question 6.2 includes a red-text solution using a star-graph example to show how eliminating a central node creates a clique.

---

## Page 11
### Content
**Question 7**
**D-Separation** **10 / 10 pts**

*   $\checkmark$ **- 0 pts**
    **Solution** We can partition $Y = Y_1 \cup Y_2$, where $Y_1$ consists of elements in $Y$ whose parents are in $X$, and $Y_2 = Y \setminus Y_1$.
    Define $\pi(v)$ as the parents of the node $v \in V$.
    Consider any element $e \in X \cup Y_1$.

    1. If $e \in X$, then it is clear that $\pi(e) \subset X \cup Y$; if a parent of $e$ were in $Z$ then $X$ and $Z$ could not be d-separated by $Y$.
    2. Suppose instead $e \in Y_1$. By definition, $e$ has a parent in $X$. Assume for the sake of contradiction it also has a parent in $Z$. Then we would have a v-structure collision with $e \in Y$, and $X$ and $Z$ would not be d-separated by $Y$ because of this path.

    From this it follows that
    $$e \in X \cup Y_1 \implies \pi(e) \subset X \cup Y,$$
    Similarly we also have
    $$e \in Z \cup Y_2 \implies \pi(e) \subset Z \cup Y.$$
    With these two facts, we can decompose the joint probability over the graph as
    $$P(X, Y, Z) = \prod_{v \in V} P(v \mid \pi(v)) = \underbrace{\prod_{v \in X \cup Y_1} P(v \mid \pi(v))}_{\phi(X, Y)} \underbrace{\prod_{v \in Z \cup Y_2} P(v \mid \pi(v))}_{\phi(Z, Y)},$$
    where the factors are over only their respective arguments because they do not depend on $Z$ and $X$, respectively. Now we can write the conditional probability as
    $$P(X, Z \mid Y) = \frac{P(X, Y, Z)}{P(Y)} = \frac{P(X, Y, Z)}{\sum_{X, Z} P(X, Y, Z)} = \frac{\phi(X, Y) \phi(Z, Y)}{\sum_X \phi(X, Y) \sum_Z \phi(Z, Y)} = P(X \mid Y) P(Z \mid Y),$$
    which is exactly the definition of conditional independence.

    Correct

*   **- 10 pts** Irrelevant
*   **- 7 pts** Major Issues in reasoning / lack of steps
*   **- 7 pts** Major lack of proof steps
*   **- 5 pts** Does justification on common parent, cascader, v-structure to justify conditional independence for individual nodes
*   **- 5 pts** Issues in reasoning / lack of steps
*   **- 4 pts** Did not prove the case for condition 3
*   **- 3 pts** Good efforts but missing some justification or edge case.
*   **- 1 pt** Very minor points

### Visual Description
A screenshot of a digital grading interface for "Question 7: D-Separation". It displays a detailed mathematical proof in red text showing how d-separation implies conditional independence by decomposing the joint probability distribution. Below the solution is a list of possible point deductions for various errors.

---

## Page 12
### Content
**Question 8**
**Ising Models** **10 / 10 pts**

*   $\checkmark$ **- 0 pts** Correct
*   **- 10 pts**
    **Solution** It's easy to see that the factor graph representation of $G$ is simply putting a "factor" node on every edge in $G$ — thus has no loops since $G$ is a tree.
    (WLOG assume that $X_1$ is a leaf node) By dynamic programming / belief propagation, we can calculate the marginal $p(x_1 = 1)$ efficiently. Hence, we can sample $x_1$ marginally. After conditioning on the value of $x_1$, the conditional probability of the remaining nodes also specifies a tree Ising model (i.e. there is still at least one leaf node to be sampled).
    Altogether, we get a polytime algorithm.

    Incorrect
*   **- 3 pts** Missing specific details
*   **- 1 pt** Minor points
*   **- 3 pts** Missing time complexity analysis

### Visual Description
A screenshot of a digital grading interface for "Question 8: Ising Models". It shows a solution in red text explaining how to use factor graphs and dynamic programming/belief propagation to create a polynomial-time sampling algorithm for a tree-structured Ising model.

---

## Page 13
### Content
**Question 9**
**Inference** **28 / 29 pts**

**9.1 1.9.a** **2 / 2 pts**
*   $\checkmark$ **- 0 pts** Correct

**9.2 1.9.b** **11 / 11 pts**
*   $\checkmark$ **- 0 pts** Correct
    **Solution**
    $$P(X_1 = 1) = \frac{\sum_{X \setminus X_1 = 1} \exp \left( \sum_{s \in [n]} J_s X_s + \sum_{s \neq t \in [n]} J_{st} X_s X_t \right)}{\sum_X \exp \left( \sum_{s \in [n]} J_s X_s + \sum_{s \neq t \in [n]} J_{st} X_s X_t \right)}$$
    The denominator is precisely $Z_G$ which can be calculated by $O$. The numerator is
    $$\sum_{X \setminus X_1 = 1} \exp \left( \sum_{s \in [n]} J_s X_s + \sum_{s \neq t \in [n]} J_{st} X_s X_t \right)$$
    $$= \sum_{X_2, \dots, X_n} \exp \left( J_1 + \sum_{s \in 2..n} J_s X_s + \sum_{s \in 2..n} J_{1s} X_s + \sum_{s \in 2..n} J_{s1} X_s + \sum_{s \neq t \in 2..n} J_{st} X_s X_t \right)$$
    $$= e^{J_1} \cdot \sum_{X_2, \dots, X_n} \exp \left( \sum_{s \in 2..n} (J_s + J_{1s} + J_{s1}) X_s + \sum_{s \neq t \in 2..n} J_{st} X_s X_t \right)$$
    is precisely the constant $e^{J_1}$ times the partition function of an Ising model $G'[2..n]$ consisting of $n-1$ variables $X_2, \dots, X_n$ and parameters $\{(J_s + J_{1s} + J_{s1} : s \in 2..n\} \cup \{J_{st} : s \neq t \in 2..n\}$.
    Hence, the numerator can be calculated by applying $O$ to $G'[2..n]$.
    In total, the oracle function is called twice.

*   **- 1 pt** Needs more justification that we have a new Ising model
*   **- 1 pt** Minor error
*   **- 2 pts** Major error
*   **- 1 pt** No polynomial time justification
*   **- 11 pts** Missing

### Visual Description
A screenshot of a digital grading interface for "Question 9: Inference". It shows sub-questions 9.1 and 9.2. Sub-question 9.2 contains a detailed mathematical solution in red text showing how to calculate the marginal probability $P(X_1 = 1)$ using an oracle for the partition function of an Ising model.

---

## Page 14
### Content
**9.3 1.9.c** **15 / 16 pts**
*   **- 0 pts** Correct
*   **- 4 pts** Missing Major Algorithm Details
*   **- 2 pts** Missing Algorithmic Details: The update for a remaining node $s$ must be the cumulative sum of interactions with all previously fixed nodes $A$: $\sum_{i \in A} (J_{is} + J_{si})$, not just a local update from the most recent node.
*   **- 1 pt** Missing Minor Algorithmic Details
*   **- 2 pts** Oracle Usage
*   $\checkmark$ **- 1 pt** Incomplete Runtime Analysis
*   **- 2 pts** Incorrect \ Missing Complexity Analysis
*   **- 2 pts** Missing Chain Rule Derivation
*   **- 16 pts** No solution
*    the runtime analysis was just a claim of 'polynomial time' rather than a specific derivation of the complexity

**Question 10**
**Collaboration Policy** **0 / 0 pts**

**10.1 Received Help** **0 / 0 pts**
*   **- 0 pts** Received Help
*   $\checkmark$ **- 0 pts** Did Not Receive Help
*   **- 0 pts** Blank

**10.2 Given Help** **0 / 0 pts**
*   **- 0 pts** Gave Help
*   $\checkmark$ **- 0 pts** Did Not Give Help
*   **- 0 pts** Blank

**10.3 Came Across Implementation** **0 / 0 pts**
*   **- 0 pts** Found Code
*   $\checkmark$ **- 0 pts** Did Not Find Code
*   **- 0 pts** Blank

### Visual Description
A screenshot of a digital grading interface. The top part shows feedback for sub-question 9.3, including a deduction for "Incomplete Runtime Analysis" and a comment about the lack of a specific complexity derivation. The bottom part shows "Question 10: Collaboration Policy" with three sections (10.1, 10.2, 10.3) where the student has indicated they did not receive help, give help, or find code.

---

## Page 15
### Content
Homework 1: Introduction of Graphical Models and Exact Inference 10-708

# HOMEWORK 1
# INTRODUCTION OF GRAPHICAL MODELS AND EXACT INFERENCE $^1$

10-708 PROBABILISTIC GRAPHICAL MODELS (SPRING 2026)
https://piazza.com/cmu/spring2026/10708

OUT: Jan. 28th, 2026
DUE: Feb. 11th, 2026 11:59 PM ET
TAs: Nupoor Gandhi, Aviv Bick, Kadin Zhang

### START HERE: Instructions
**Summary** In this assignment, you will explore the distributions captured by directed graphical models (Bayesian Networks), undirected graphical models (MRFs / CRFs), and factor graphs as well as variable elimination.

*   **Collaboration policy:** The purpose of student collaboration is to facilitate learning, not to circumvent it. Studying the material in groups is strongly encouraged. It is also allowed to seek help from other students in understanding the material needed to solve a particular homework problem, provided no written notes (including code) are shared, or are taken at that time, and provided learning is facilitated, not circumvented. The actual solution must be done by each student alone. The presence or absence of any form of help or collaboration, whether given or received, must be explicitly stated and disclosed in full by all involved. See the Academic Integrity Section on the course site for more information: https://andrejristeski.github.io/10708F25/#~:text=Academic%20Integrity%20Policies
*   **Late Submission Policy:** See the late submission policy here: https://andrejristeski.github.io/10708F25/#~:text=Grace%20Day/Late%20Homework%20Policy
*   **Submitting your work to Gradescope:** We use Gradescope (https://www.gradescope.com/courses/1099460/assignments) to collect PDF submissions of open-ended questions on the homework (e.g. mathematical derivations, plots, short answers). The course staff will manually grade your submission, and you'll receive personalized feedback explaining your final marks. The homework template must be used and can be completed in Latex or by hand. Handwritten submissions must be legible otherwise we will not be able to give credit to your solutions. No changes should be made to the template, boxes and choices **MUST** remain the same size and in the same locations between the template and your completed submission, the document has 23 pages so your submission must contain no more and no less than 23 pages.

For multiple choice or select all that apply questions, shade in the box or circle in the template document corresponding to the correct answer(s) for each of the questions. For \LaTeX users, replace `\choice` with `\CorrectChoice` to obtain a shaded box/circle, and don't change anything else.

$^1$ Compiled on Thursday 12$^{th}$ February, 2026 at 01:27
1 of 23

### Visual Description
The cover page of a homework assignment titled "HOMEWORK 1: INTRODUCTION OF GRAPHICAL MODELS AND EXACT INFERENCE" for the course "10-708 PROBABILISTIC GRAPHICAL MODELS (SPRING 2026)". It lists the release and due dates, TAs, and provides detailed instructions on collaboration, late submissions, and Gradescope submission procedures.

---

## Page 16
### Content
Homework 1: Introduction of Graphical Models and Exact Inference 10-708

### Instructions for Specific Problem Types
For "Select One" questions, please fill in the appropriate bubble completely:
1. **Select One:** Who taught this course?
    *   $\bullet$ Andrej Risteski
    *   $\circ$ Marie Curie
    *   $\circ$ Noam Chomsky

If you need to change your answer, you may cross out the previous answer and bubble in the new answer:
2. **Select One:** Who taught this course?
    *   $\bullet$ Andrej Risteski
    *   $\circ$ Marie Curie
    *   $\otimes$ Noam Chomsky

For "Select all that apply" questions, please fill in all appropriate squares completely:
3. **Select all that apply:** Which are scientists?
    *   $\blacksquare$ Stephen Hawking
    *   $\blacksquare$ Albert Einstein
    *   $\blacksquare$ Isaac Newton
    *   $\square$ I don't know

Again, if you need to change your answer, you may cross out the previous answer(s) and bubble in the new answer(s):
4. **Select all that apply:** Which are scientists?
    *   $\blacksquare$ Stephen Hawking
    *   $\blacksquare$ Albert Einstein
    *   $\blacksquare$ Isaac Newton
    *   $\boxtimes$ I don't know

For questions where you must fill in a blank, please make sure your final answer is fully included in the given space. You may cross out answers or parts of answers, but the final answer must still be within the given space.
5. **Fill in the blank:** What is the course number?
    *   [ 10-708 ]
    *   [ 10-~~9~~708 ]

2 of 23

### Visual Description
An instructional page titled "Instructions for Specific Problem Types". It provides visual examples of how to correctly fill out the assignment form for different question types: "Select One" (using radio buttons), "Select all that apply" (using checkboxes), and "Fill in the blank" (using text boxes). It also demonstrates how to correct mistakes by crossing them out.

---
==End of PDF==
## Page 17
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708

# 1 Written Questions [105 pts]
Answer the following questions in the template provided. Then upload your solutions to Gradescope. You may use $\LaTeX$ or print the template and hand-write your answers then scan it in. Failure to use the template may result in a penalty. There are 105 points and 14 questions.

1. Consider an undirected graphical model shown in 1.1. This model structure looks as follows:

![Figure 1.1: Undirected Graphical Model](figure_1_1.png)
Figure 1.1: Undirected Graphical Model

For this model structure, answer the following questions:
(a) (2 points) Factorize the joint distribution $P(A, B, C, D, E, F, G, H, I, J)$ according to the undirected graph in Figure 1.1.
The joint distribution factorizes over the maximal cliques of the graph:
$$P(A, \dots, J) = \frac{1}{Z} \left( \psi_{ABCD}(A, B, C, D) \cdot \psi_{CDF}(C, D, F) \cdot \psi_{BDE}(B, D, E) \cdot \psi_{EGI}(E, G, I) \cdot \psi_{GHI}(G, H, I) \cdot \psi_{AH}(A, H) \cdot \psi_{BJ}(B, J) \right)$$

(b) (1 point) Is $A \perp J \mid B$?
- [x] True
- [ ] False

(c) (1 point) Is $A \perp E \mid (C, B, D)$?
- [x] True
- [ ] False

(d) (1 point) Is $B \perp G \mid (C, D, E, J)$?
- [x] True
- [ ] False

(e) (1 point) Is $F \perp H \mid (A, D, G)$?

3 of 23

### Visual Description
The page contains a homework assignment header and the first part of Question 1. Figure 1.1 shows an undirected graph with nodes A, B, C, D, E, F, G, H, I, and J. The nodes are connected as follows: A is connected to C, B, H; B is connected to A, C, D, E, J; C is connected to A, B, D, F; D is connected to C, B, E, F; E is connected to B, D, G, I; F is connected to C, D; G is connected to E, H, I; H is connected to A, G, I; I is connected to E, G, H; J is connected to B. There is a large box containing the factorization formula for the joint distribution. Below it are multiple-choice questions with radio buttons, some of which are filled in.

---

## Page 18
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708

- [ ] True
- [x] False

(f) (2 points) Which nodes are present in the Markov blanket of $C$?
$$\{A, B, D, F\}$$

(g) (2 points) Which nodes are present in the Markov blanket of $B$?
$$\{A, C, D, E, J\}$$

4 of 23

### Visual Description
Text-only slide. This page continues the questions from the previous page. It includes the completion of question (e) with a selected "False" option, and two text boxes containing the answers for questions (f) and (g) regarding Markov blankets.

---

## Page 19
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708

2. Consider the Bayesian Network described in Figure 1.2

![Figure 1.2: Bayesian Network Structure](figure_1_2.png)
Figure 1.2: Bayesian Network Structure

Based on this network structure, answer the following questions:
(a) (2 points) Factorize the joint distribution $P(A, B, C, D, E, F, G, H)$ according to the directed graph in Figure 1.2.
$$P(A, B, C, D, E, F, G, H) = P(A) P(B \mid A) P(H \mid A) P(C \mid B) P(E \mid B, H) \times P(G \mid H) P(D \mid B, C, E) P(F \mid C, D, G).$$

(b) (1 point) Is $A \perp F \mid (B, C, D, E, H)$?
- [x] True
- [ ] False

(c) (1 point) Is $F \perp D \mid G$?
- [ ] True
- [x] False

(d) (1 point) Is $A \perp E \mid (B, H)$?
- [x] True
- [ ] False

(e) (1 point) Is $P(C \mid E, B, F, G) = P(C \mid B, F, G)$ or equivalently is $C \perp E \mid B, F, G$?
- [ ] True
- [x] False

(f) (2 points) Which nodes are present in the Markov blanket of $G$?
$$\{H, F, C, D\}$$

(g) (2 points) Which nodes are present in the Markov blanket of $D$?

5 of 23

### Visual Description
The page contains Question 2 of the homework. Figure 1.2 shows a directed acyclic graph (Bayesian Network) with nodes A through H. The edges are: $A \to B$, $A \to H$, $B \to C$, $B \to E$, $B \to D$, $H \to E$, $H \to G$, $C \to D$, $C \to F$, $E \to D$, $D \to F$, $G \to F$. There is a box containing the factorization of the joint distribution. Below are several multiple-choice questions with radio buttons and a text box for the Markov blanket of G.

---

## Page 20
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708

$$\{B, C, E, F, G\}$$

(h) (2 points) Draw the undirected moralized graph of the Bayesian network.

![Moralized Graph](moralized_graph.png)

6 of 23

### Visual Description
This page continues Question 2. It provides the answer for the Markov blanket of node D in a text box. Below that, in a large box, there is a drawing of the moralized version of the graph from Figure 1.2. In this moralized graph, all directed edges are replaced with undirected ones, and "parents" of the same child are connected (e.g., B and H are connected because they are parents of E; B, C, and E are connected because they are parents of D; C, D, and G are connected because they are parents of F).

---

## Page 21
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708

3. (Properties of probability distances and correlations) In this problem, we will show a few properties of KL divergence and different notions of dependence (covariance and mutual information) which we mentioned in class, but didn't formally prove.

(a) (5 points) As mentioned in class, KL divergence does not satisfy the triangle inequality — even for simple distributions like univariate Gaussians. Show the following claim: you can choose variances $\sigma_1^2, \sigma_2^2, \sigma_3^2$, such that the distributions $p = N(0, \sigma_1^2), q = N(0, \sigma_2^2), r = N(0, \sigma_3^2)$ violate the triangle inequality, that is:
$$KL(p, r) > KL(p, q) + KL(q, r)$$

For 1D zero-mean Gaussians there is a closed form:
$$KL(N(0, \sigma_p^2) \| N(0, \sigma_q^2)) = \frac{1}{2} \left( \frac{\sigma_p^2}{\sigma_q^2} - 1 - \ln \left( \frac{\sigma_p^2}{\sigma_q^2} \right) \right)$$
I'll pick some simple variances:
$$\sigma_1^2 = 1, \quad \sigma_2^2 = 2, \quad \sigma_3^2 = 4$$
so $p = N(0, 1), q = N(0, 2), r = N(0, 4)$.
Compute each KL:
$$KL(p, q) = \frac{1}{2} \left( \frac{1}{2} - 1 - \ln \frac{1}{2} \right) = \frac{1}{2} \left( -\frac{1}{2} + \ln 2 \right) = -\frac{1}{4} + \frac{1}{2} \ln 2.$$
$$KL(q, r) = \frac{1}{2} \left( \frac{2}{4} - 1 - \ln \frac{2}{4} \right) = \frac{1}{2} \left( -\frac{1}{2} + \ln 2 \right) = -\frac{1}{4} + \frac{1}{2} \ln 2.$$
So
$$KL(p, q) + KL(q, r) = \left( -\frac{1}{4} + \frac{1}{2} \ln 2 \right) + \left( -\frac{1}{4} + \frac{1}{2} \ln 2 \right) = -\frac{1}{2} + \ln 2.$$
Now
$$KL(p, r) = \frac{1}{2} \left( \frac{1}{4} - 1 - \ln \left( \frac{1}{4} \right) \right) = \frac{1}{2} \left( -\frac{3}{4} + \ln 4 \right) = \frac{1}{2} \left( -\frac{3}{4} + 2 \ln 2 \right) = -\frac{3}{8} + \ln 2.$$
Compare them:
$$KL(p, r) - (KL(p, q) + KL(q, r)) = \left( -\frac{3}{8} + \ln 2 \right) - \left( -\frac{1}{2} + \ln 2 \right) = \frac{1}{8} > 0.$$
Therefore $KL(p, r) > KL(p, q) + KL(q, r)$, so KL violates triangle inequality.

(b) (8 points) (Relating covariance and mutual information) In this problem, we will show an inequality between two notions of dependence we saw in class: covariance and mutual information.
For this problem, we will assume the random variables $X, Y$ are bounded, i.e. they take values in a set $D \subseteq \mathbb{R}$, s.t. for all $c \in D, |c| \leq M$.
Recall that mutual information between two random variables $X, Y$ is defined as
$$I(X; Y) := KL(p_{X,Y} \| p_X \otimes p_Y)$$
where $p_{X,Y}$ denotes the joint distribution of $(X, Y)$; $p_X$ and $p_Y$ denote the marginals of $X, Y$ respectively; and $p_X \otimes p_Y$ denotes a product distribution over $(X, Y)$, s.t. the marginals of $X, Y$ are $p_X$ and $p_Y$ respectively.
Recall also, the covariance of the random variables $X, Y$ is defined as
$$Cov(X, Y) := \mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y]$$
With this setup in place, show that:
$$Cov(X, Y)^2 \leq 2M^4 I(X; Y)$$
Other than definitions we saw in class, it will be helpful to use (you can use it without proof) **Pinsker's inequality**, which asserts that for any two distributions $p, q$, it holds that:
$$TV(p, q) \leq \sqrt{\frac{1}{2} KL(p \| q)}$$

7 of 23

### Visual Description
The page contains Question 3, parts (a) and (b). Part (a) asks to show that KL divergence violates the triangle inequality using univariate Gaussians, and a detailed derivation is provided in a box. Part (b) introduces a problem to relate covariance and mutual information, providing definitions and Pinsker's inequality.

---

## Page 22
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708

*Hint: It might be helpful to lower bound $TV(p_{X,Y}, p_X \otimes p_Y)$ in terms of $Cov(X, Y)$.*

Let $P := p_{X,Y}$ be the joint distribution and let $Q := p_X \otimes p_Y$ be the product of marginals. Then by definition,
$$I(X; Y) = KL(P \| Q).$$
Also note that under $Q$, $X$ and $Y$ are independent but have the same marginals as in $P$, so
$$\mathbb{E}_Q[XY] = \mathbb{E}[X]\mathbb{E}[Y].$$
Therefore the covariance can be written as
$$Cov(X, Y) = \mathbb{E}_P[XY] - \mathbb{E}[X]\mathbb{E}[Y] = \mathbb{E}_P[XY] - \mathbb{E}_Q[XY].$$
Now use boundedness: since $|X| \leq M$ and $|Y| \leq M$, we have $|XY| \leq M^2$ always.
We use the variational form of total variation distance:
$$TV(P, Q) = \frac{1}{2} \sup_{\|h\|_\infty \leq 1} |\mathbb{E}_P[h] - \mathbb{E}_Q[h]|.$$
We choose the specific function $h(x, y) = \frac{xy}{M^2}$, which satisfies $\|h\|_\infty \leq 1$ because $|xy| \leq M^2$. Then
$$TV(P, Q) \geq \frac{1}{2} \left| \mathbb{E}_P\left[\frac{XY}{M^2}\right] - \mathbb{E}_Q\left[\frac{XY}{M^2}\right] \right|$$
$$= \frac{1}{2M^2} |\mathbb{E}_P[XY] - \mathbb{E}_Q[XY]| = \frac{|Cov(X, Y)|}{2M^2}.$$
So this gives
$$|Cov(X, Y)| \leq 2M^2 TV(P, Q).$$
Now apply Pinsker:
$$TV(P, Q) \leq \sqrt{\frac{1}{2} KL(P \| Q)} = \sqrt{\frac{1}{2} I(X; Y)}.$$
Combine the two inequalities:
$$|Cov(X, Y)| \leq 2M^2 \sqrt{\frac{1}{2} I(X; Y)} = M^2 \sqrt{2 I(X; Y)}.$$
We square both sides:
$$Cov(X, Y)^2 \leq 2M^4 I(X; Y),$$
which is what we wanted.

8 of 23

### Visual Description
Text-only slide. This page contains the complete proof for Question 3(b) inside a large box, following the hint provided at the top. It uses the variational form of total variation distance and Pinsker's inequality to derive the required bound between squared covariance and mutual information.

---

## Page 23
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708

4. (Factor graphs) Please answer the following problems:
(a) (2 points) Convert the undirected graphical model in Figure 1.3 to the tightest factor graph.

![Figure 1.3: Undirected Graphical Model](figure_1_3.png)
Figure 1.3: Undirected Graphical Model

![Factor Graph Solution](factor_graph_solution_a.png)

9 of 23

### Visual Description
The page contains Question 4(a). Figure 1.3 shows an undirected graph with nodes A through J. The nodes are connected in a specific pattern: A-B, A-C, A-D, B-C, B-D, C-D form a clique; C-I, C-E, I-E form a clique; E-F, E-G, F-G form a clique; E-H, G-H form a clique; D-J, J-G form a path. The solution box shows the corresponding factor graph where maximal cliques are represented by black square factor nodes connected to the variable nodes (circles). For example, a factor node connects A, B, C, D; another connects C, I, E; another connects E, F, G; another connects E, G, H; and factors connect D-J and J-G.

---

## Page 24
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708

(b) (2 points) Convert the directed graphical model in Figure 1.4 to a factor graph

![Figure 1.4: Directed Graphical Model](figure_1_4.png)
Figure 1.4: Directed Graphical Model

![Factor Graph Solution B](factor_graph_solution_b.png)

(c) (2 points) Convert the factor graph in Fig 1.5 to an undirected graphical model.

![Figure 1.5: Factor Graph](figure_1_5.png)
Figure 1.5: Factor Graph

10 of 23

### Visual Description
The page contains Question 4(b) and 4(c). 
In 4(b), Figure 1.4 is a directed graph: $E \to B$, $F \to B$, $B \to C$, $A \to C$, $F \to C$, $C \to D$. The solution box shows a factor graph where each conditional probability distribution is a factor: $f_E$ for $P(E)$, $f_F$ for $P(F)$, $f_A$ for $P(A)$, $f_B$ connecting $E, F, B$ for $P(B|E,F)$, $f_C$ connecting $B, A, F, C$ for $P(C|B,A,F)$, and $f_D$ connecting $C, D$ for $P(D|C)$.
In 4(c), Figure 1.5 is a factor graph with variable nodes A, B, C, D, E, F, G and three factor nodes (black squares). One factor connects A, E, B; another connects B, F, C; another connects C, G, D. The question asks to convert this to an undirected graphical model (the solution is not shown on this page).

---
==End of PDF==
## Page 25
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708

(d) (2 points) Convert the factor graph in Fig 1.6 to a directed graphical model.

![Figure 1.6: Factor Graph](figure_1_6.png)

11 of 23

### Visual Description
The page contains two diagrams. The top diagram is a large empty box containing an undirected graph with nodes A, B, C, D, E, F, and G. Node A is connected to B, E, and F. Node B is connected to A, F, and C. Node C is connected to B, F, D, and G. Node D is connected to C and G. Node E is connected to A and F. Node F is connected to A, B, C, and E. Node G is connected to C and D.

The bottom diagram, labeled "Figure 1.6: Factor Graph", shows a factor graph with variable nodes A, B, C, D, and E (circles) and factor nodes (small black squares). There are factors connected to:
- Node A alone.
- Node B alone.
- Nodes A, B, and C together.
- Nodes C and D together.
- Nodes C and E together.

---
## Page 26
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708

![Directed Graphical Model](directed_graph.png)

12 of 23

### Visual Description
The page shows a directed graphical model inside a large box. The graph consists of five nodes: A, B, C, D, and E. The directed edges are:
- $A \to D$
- $A \to C$
- $B \to C$
- $C \to D$
- $C \to E$

---
## Page 27
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708

5. Consider the factor graph in Figure 1.7. On paper, carry out a run of belief propagation by sending messages first from the leaves, $\psi_A, \psi_D, \psi_F$, to the root $\psi_B$, and then from the root back to the leaves. Then answer the questions below. Assume all messages are un-normalized. *The magnitudes of your answers can be rather large, but not larger than 10000.*

| $a$ | $\psi_A(a)$ |
| :--- | :--- |
| 0 | 2 |
| 1 | 2 |

| $b$ | $\psi_B(b)$ |
| :--- | :--- |
| 0 | 2 |
| 1 | 1 |

| $c$ | $\psi_C(c)$ |
| :--- | :--- |
| 0 | 3 |
| 1 | 1 |

| $d$ | $\psi_D(d)$ |
| :--- | :--- |
| 0 | 1 |
| 1 | 1 |

| $e$ | $\psi_E(e)$ |
| :--- | :--- |
| 0 | 1 |
| 1 | 1 |

| $f$ | $\psi_F(f)$ |
| :--- | :--- |
| 0 | 2 |
| 1 | 1 |

![Figure 1.7](figure_1_7.png)

| $a$ | $b$ | $\psi_{AB}(a,b)$ |
| :--- | :--- | :--- |
| 0 | 0 | 1 |
| 0 | 1 | 3 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

| $b$ | $c$ | $\psi_{BC}(b,c)$ |
| :--- | :--- | :--- |
| 0 | 0 | 4 |
| 0 | 1 | 1 |
| 1 | 0 | 3 |
| 1 | 1 | 3 |

| $d$ | $e$ | $\psi_{DE}(d,e)$ |
| :--- | :--- | :--- |
| 0 | 0 | 2 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

| $c$ | $e$ | $\psi_{CE}(c,e)$ |
| :--- | :--- | :--- |
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

| $c$ | $f$ | $\psi_{CF}(c,f)$ |
| :--- | :--- | :--- |
| 0 | 0 | 2 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 2 |

(a) (1 point) **Numerical answer:** What is the message from $D$ to $\psi_{DE}$?
[1, 1]

(b) (1 point) **Numerical answer:** What is the message from $\psi_{CF}$ to $C$?
[5, 4]

(c) (1 point) **Numerical answer:** What is the belief at variable $A$?

13 of 23

### Visual Description
The page contains text describing a belief propagation problem on a factor graph. It includes several tables defining unary and pairwise potentials ($\psi$). Figure 1.7 shows the factor graph with variable nodes A, B, C, D, E, F and factor nodes $\psi_A, \psi_B, \psi_C, \psi_D, \psi_E, \psi_F, \psi_{AB}, \psi_{BC}, \psi_{DE}, \psi_{CE}, \psi_{CF}$. The graph structure is:
- $\psi_A$ connected to A.
- $\psi_D$ connected to D.
- $\psi_F$ connected to F.
- $\psi_{AB}$ connected to A and B.
- $\psi_{BC}$ connected to B and C.
- $\psi_{DE}$ connected to D and E.
- $\psi_{CE}$ connected to C and E.
- $\psi_{CF}$ connected to C and F.
- $\psi_B$ connected to B.
- $\psi_C$ connected to C.
- $\psi_E$ connected to E.

---
## Page 28
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708

[2990, 1850]

(d) (1 point) **Numerical answer:** What is the belief at variable $E$?
[2904, 1936]

(e) (1 point) **Numerical answer:** What is the belief at factor $\psi_{BC}$?
| | $c=0$ | $c=1$ |
| :--- | :--- | :--- |
| $b=0$ | 2400 | 160 |
| $b=1$ | 1800 | 480 |

(f) (1 point) **Numerical answer:** What is the value of the partition function?
4840

14 of 23

### Visual Description
This page continues the numerical answers for the belief propagation problem from the previous page. It contains answer boxes for parts (c), (d), (e), and (f). Part (e) includes a $2 \times 2$ table of values.

---
## Page 29
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708

6. As we mentioned in class, there are a variety of heuristics for choosing the variable ordering when performing variable elimination. Most often, we do not have guarantees on when the ordering is good (in fact, finding the optimal ordering is NP-hard).

In this problem, we will see how the order can affect the complexity of the intermediate graphs, even on trees. Precisely, consider an undirected pairwise graphical model, that is, an undirected graphical model for which the potential are associated with edges or nodes of a graph $G$:
$$p(X = x) \propto \exp \left( \sum_i \phi_i(x_i) + \sum_{\{i,j\} \in E(G)} \phi_{ij}(x_i, x_j) \right)$$
Furthermore assume that the graph $G$ associated with the graphical model is a tree. (Recall, an undirected tree is an undirected graph without loops, see e.g. Figure 1.8.)

(a) (4 points) Show that there exists an elimination order, s.t. after every elimination, the resulting graphical model is still a pairwise graphical model over a tree.

> A valid elimination order is obtained by repeatedly eliminating a leaf of the current tree.
> Let $\ell$ be a leaf and let $j$ be its unique neighbor. The only terms involving $x_\ell$ are the unary potential $\phi_\ell(x_\ell)$ and the pairwise potential $\phi_{\ell j}(x_\ell, x_j)$. Eliminating $x_\ell$ produces a new factor on the neighbors of $\ell$, which here is just $\{j\}$:
> $$\tilde{\phi}_j(x_j) := \log \sum_{x_\ell} \exp \left( \phi_\ell(x_\ell) + \phi_{\ell j}(x_\ell, x_j) \right).$$
> This is a unary potential on $x_j$, so we absorb it into $\phi_j$ by setting $\phi_j(x_j) \leftarrow \phi_j(x_j) + \tilde{\phi}_j(x_j)$. Graphically, eliminating a leaf removes $\ell$ and the single edge $\{\ell, j\}$ and creates no fill-in edges, so the remaining graph is still a tree. Therefore after each leaf-elimination step, the resulting model remains a pairwise graphical model over a tree. Repeating so all variables are eliminated yields desired elimination order.

(b) (3 points) Recall, the degree of a node is the number of neighbors it has. Show that there exists a tree, which has a node of degree $r$, s.t. eliminating some node results in the creation of an undirected graphical model with a potential over $r$ nodes, for all $r > 0$.

> We any $r > 0$. Consider the star tree on $r + 1$ nodes with center node $c$ and leaves $1, 2, \dots, r$, with edges $\{c, k\}$ for $k = 1, \dots, r$. Then $\text{deg}(c) = r$.
> Eliminate the center variable $x_c$. Since the neighbors of $c$ are exactly $\{1, \dots, r\}$, variable elimination creates a new factor scope is all of these neighbors:
> $$\tilde{\phi}_{1:r}(x_1, \dots, x_r) := \log \sum_{x_c} \exp \left( \phi_c(x_c) + \sum_{k=1}^r \phi_{ck}(x_c, x_k) \right).$$
> This is a single potential over the $r$ variables $(x_1, \dots, x_r)$. Hence, for every $r > 0$, there exists a tree (the star) with a node of degree $r$ such that eliminating a node creates a potential over $r$ nodes.

15 of 23

### Visual Description
Text-only slide containing a problem description and two sub-questions (a and b) with their respective solutions provided in boxes. The solutions involve mathematical derivations for variable elimination on trees.

---
## Page 30
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708

7. (10 points) **(D-separation)** In this question we will formally prove that d-separation implies conditional independence.

Recall the definition of d-separation: two disjoint sets of variables $X, Z$ are said to be d-separated by an evidence set $E$ if and only if every (undirected) path from $X$ to $Z$ is "blocked" by $E$. A path is "blocked" whenever any of the following hold:
- $\exists Y \in E$ on the path and $Y$ is a common parent:
![Common Parent Diagram](common_parent.png)
- $\exists Y \in E$ on the path and $Y$ is in a "cascade" (in either direction):
![Cascade Diagram](cascade.png)
- $\exists Y$ on the path such that $Y$ is a common descendant (in a v structure) and $\forall \tilde{Y} \in \{Y\} \cup \text{descendants}(Y), \tilde{Y} \notin E$
(i.e., **None of the descendants of X and Z are observed in the evidence set E**):
![V-structure Diagram](v_structure.png)

Suppose we have a Bayesian network described by a directed graph $G = (V, E)$. Consider a partition of $V$ into three disjoint sets $X, Y, Z$ such that $X \cup Y \cup Z = V$. Prove that
$$\text{dsep}(X, Z \mid Y) \implies X \perp Z \mid Y.$$
*Hint: think about how you could decompose the factors over $X, Y, Z$ into separate factors over $X, Y$ and $Z, Y$.*

16 of 23

### Visual Description
The page introduces a problem to prove that d-separation implies conditional independence. It provides visual diagrams for the three rules of d-separation:
1. **Common Parent:** $X \leftarrow \dots \leftarrow Y \to \dots \to Z$, where $Y$ is circled in red and belongs to the evidence set $E$.
2. **Cascade:** $X \to \dots \to Y \to \dots \to Z$, where $Y$ is circled in red and belongs to $E$.
3. **V-structure:** $X \to \dots \to Y \leftarrow \dots \leftarrow Z$, where $Y$ is circled in red and has a descendant $Y'$. The rule states that neither $Y$ nor any of its descendants are in $E$.

---
## Page 31
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708

Let $P$ be the distribution represented by the BN $G = (V, E)$. Then it factorizes as
$$P(V) = \prod_{v \in V} P(v \mid \text{Pa}(v)).$$
Assume $V = X \cup Y \cup Z$ and $\text{dsep}(X, Z \mid Y)$. We prove $X \perp Z \mid Y$.
**Lemma.** No local factor can involve variables from both $X$ and $Z$. Equivalently, for every node $v$, the set $\{v\} \cup \text{Pa}(v)$ cannot intersect both $X$ and $Z$.
*Reason:* Suppose some $v$ had $x \in X$ and $z \in Z$ in $\{v\} \cup \text{Pa}(v)$.
- If $v \in X$ (or $v \in Z$), then there is an edge between $v$ and the other set, giving a length-1 undirected path from $X$ to $Z$, which cannot be blocked by conditioning on $Y$.
- If $v \in Y$, then we must have $x, z \in \text{Pa}(v)$, i.e. a v-structure $x \to v \leftarrow z$. Since $v \in Y$ is observed, this collider activates the path $x - v - z$.

Either way there is an active path from $X$ to $Z$ given $Y$, contradicting $\text{dsep}(X, Z \mid Y)$.
Therefore, each factor $P(v \mid \text{Pa}(v))$ depends only on variables in $X \cup Y$ or only on variables in $Z \cup Y$. Group the factors accordingly to get
$$P(x, y, z) = \prod_{v \in V} P(v \mid \text{Pa}(v)) = f(x, y) g(z, y)$$
for some functions $f$ and $g$.
Now condition on $Y = y$:
$$P(x, z \mid y) = \frac{f(x, y) g(z, y)}{\sum_{x', z'} f(x', y) g(z', y)} = \frac{f(x, y)}{\sum_{x'} f(x', y)} \cdot \frac{g(z, y)}{\sum_{z'} g(z', y)} = P(x \mid y) P(z \mid y).$$
Thus $X \perp Z \mid Y$. ■

17 of 23

### Visual Description
Text-only slide containing a formal proof that d-separation implies conditional independence. The proof uses a lemma about local factors and then shows how the joint distribution factorizes into two parts, $f(x, y)$ and $g(z, y)$, which leads to the conditional independence result.

---
## Page 32
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708

8. (10 points) Consider an Ising model, described by an undirected graphical model $G(V, E)$ ($V = \{1, 2, \dots, n\}$ and $\{i, j\} \in E$ means $i, j$ are adjacent in $G$) and
$$p(\mathbf{x}) \propto \exp \left( \sum_{i,j:\{i,j\} \in E} J_{ij}x_i x_j + \sum_{i=1}^d J_i x_i \right)$$
Note that $J_{ij} \neq 0$ only if $i$ and $j$ are adjacent in the graph $G$.
Show that if the graph $G$ is an undirected tree (i.e. has no loops, see Fig. 1.8 for an example), there is a polynomial time algorithm that draws samples from $p$. You may assume that for any real-value $q \in [0, 1]$, drawing a sample from a Bernoulli variable with bias $q$ can be done in constant time (i.e., $O(1)$).

![Figure 1.8: An example of an undirected tree with $n=6$.](figure_1_8.png)

> Let $x_i \in \{-1, +1\}$ and define potentials
> $$\psi_i(x_i) = e^{J_i x_i}, \quad \psi_{ij}(x_i, x_j) = e^{J_{ij} x_i x_j},$$
> so $p(\mathbf{x}) = \frac{1}{Z} \prod_i \psi_i(x_i) \prod_{\{i,j\} \in E} \psi_{ij}(x_i, x_j)$. Since $G$ is a tree, pick a root $r$ and orient edges away from $r$.
> **Upward DP (sum-product).** For each directed edge $i \to j$ (parent $j$), define
> $$m_{i \to j}(x_j) = \sum_{x_i \in \{\pm 1\}} \psi_i(x_i) \psi_{ij}(x_i, x_j) \prod_{k \in N(i) \setminus \{j\}} m_{k \to i}(x_i).$$
> Compute messages by post-order traversal (leaves $\to$ root). Each message is just two numbers ($x_j = \pm 1$), so total cost is $O(\sum_i \text{deg}(i)) = O(|E|) = O(n)$.
> **Sample root.** Using incoming messages,
> $$p(x_r) \propto \psi_r(x_r) \prod_{k \in N(r)} m_{k \to r}(x_r),$$
> so
> $$\mathbb{P}(x_r = +1) = \frac{\psi_r(+1) \prod_k m_{k \to r}(+1)}{\psi_r(+1) \prod_k m_{k \to r}(+1) + \psi_r(-1) \prod_k m_{k \to r}(-1)}.$$
> Sample $x_r$ via a Bernoulli draw.
> **Top-down sampling.** For each child $i$ of parent $j$ (with sampled $x_j$),
> $$\mathbb{P}(x_i \mid x_j) \propto \psi_i(x_i) \psi_{ij}(x_i, x_j) \prod_{k \in N(i) \setminus \{j\}} m_{k \to i}(x_i), \quad x_i \in \{\pm 1\},$$
> normalize the two weights to get $\mathbb{P}(x_i = +1 \mid x_j)$ and sample $x_i$ (Bernoulli). Repeat to leaves.
> **Correctness & runtime.** On a tree, these messages are exact subtree sums, so the above produces $\mathbf{x} \sim p(\mathbf{x})$. Computing all messages is $O(n)$ and sampling $n$ spins is $O(n)$, hence a polynomial-time (indeed linear-time) exact sampler.

18 of 23

### Visual Description
The page describes a problem about sampling from an Ising model on a tree. It includes the mathematical definition of the Ising model and a diagram (Figure 1.8) of an undirected tree with 6 nodes. The nodes are numbered 1 to 6, with edges $(1,2), (2,3), (3,4), (4,5), (5,6)$. The edges are labeled with weights $J_{12}, J_{23}, J_{34}, J_{45}, J_{56}$. A solution box provides a linear-time algorithm using dynamic programming (sum-product) and top-down sampling.
## Page 33
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708

9. (Hardness of inference in graphical models). Classical results show that (both approximate and exact) inference in PGMs is #P-hard in general [1, 2].

In this question, we will guide you through two reductions, showing that the computational complexity of calculating partition functions and marginals is essentially the same. (More results of this type will be included in a course on computational complexity.)

We show that complexity of calculating partition functions and marginals in Ising models is comparable. Consider random variables $\mathbf{X} = \{X_s \in \{-1, 1\} | s \in \{1, 2, \dots, n\}\}$ following the distribution of an Ising model $G$ with parameters $\mathbf{J}$. Precisely, the joint distribution of the random variables is expressed as:
$$p(\mathbf{X} = \mathbf{x}) = \frac{1}{Z_G} \exp \left( \sum_{s \in [n]} \mathbf{J}_s \mathbf{x}_s + \sum_{s \neq t \in [n]} \mathbf{J}_{st} \mathbf{x}_s \mathbf{x}_t \right), \tag{1.1}$$
in which $Z_G$ is the partition function. (Note, the above expression without loss of generality assumes a complete graph; if the graph is not complete, some values $\mathbf{J}_{st}$ would be 0.)

(a) (2 points) Write down the partition function $Z_G$ for the above Ising model $G$.
$$Z_G = \sum_{\mathbf{x} \in \{-1, 1\}^n} \exp \left( \sum_{s \in [n]} J_s x_s + \sum_{s \neq t \in [n]} J_{st} x_s x_t \right).$$

(b) (11 points) Suppose you are given an oracle $O(H)$ which takes as input an Ising model $H$ and output its partition function $Z_H$ in $\mathcal{O}(1)$ time. Given access to such an oracle $O$, design a polynomial-time algorithm that calculates the marginal probability $p(X_1 = 1)$.

19 of 23

### Visual Description
Text-only slide containing a homework problem description and a solution box for part (a).

---
## Page 34
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708

To compute $p(X_1 = 1)$, write
$$p(X_1 = 1) = \frac{\sum_{x_{2:n}} \exp \left( J_1 + \sum_{s=2}^n J_s x_s + \sum_{\substack{s \neq t \\ s,t \geq 2}} J_{st} x_s x_t + \sum_{t=2}^n (J_{1t} + J_{t1}) x_t \right)}{Z_G}.$$
Define an Ising model $H^{(+)}$ on variables $\{2, \dots, n\}$ with parameters
$$J_t^{(+)} := J_t + (J_{1t} + J_{t1}) \quad (t \geq 2), \quad J_{st}^{(+)} := J_{st} \quad (s \neq t, s, t \geq 2).$$
Then the numerator equals $e^{J_1} Z_{H^{(+)}}$, so
$$p(X_1 = 1) = \frac{e^{J_1} Z_{H^{(+)}}}{Z_G}.$$
**Algorithm:** query $Z_G \leftarrow O(G)$; build $H^{(+)}$ (poly-time); query $Z_{H^{(+)}} \leftarrow O(H^{(+)})$; output $\frac{e^{J_1} Z_{H^{(+)}}}{Z_G}$.

20 of 23

### Visual Description
Text-only slide showing the mathematical derivation and algorithm for part (b) of the problem.

---
## Page 35
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708

(c) (16 points) Suppose you are given an oracle $O'_H(i, \mathbf{x}_i)$ which takes as input an Ising model $H$, a coordinate $i \in [n]$ and value $\mathbf{x}_i \in \{\pm 1\}$, and calculates its marginal probability $p(\mathbf{X}_i = \mathbf{x}_i)$ in $\mathcal{O}(1)$ time. Given access to such an oracle $O'$, design a polynomial-time algorithm that calculates the partition function $Z_G$ for our Ising model $G$.

Fix the configuration $\mathbf{x}^* = (1, 1, \dots, 1)$. Then
$$p_G(\mathbf{x}^*) = \frac{\exp(E_G(\mathbf{x}^*))}{Z_G} \Rightarrow Z_G = \frac{\exp(E_G(\mathbf{x}^*))}{p_G(\mathbf{x}^*)},$$
where
$$E_G(\mathbf{x}) := \sum_{s \in [n]} J_s x_s + \sum_{s \neq t \in [n]} J_{st} x_s x_t, \quad E_G(\mathbf{x}^*) = \sum_{s \in [n]} J_s + \sum_{s \neq t \in [n]} J_{st}.$$
So it suffices to compute $p_G(\mathbf{x}^*)$ using marginal oracles.
By the chain rule,
$$p_G(\mathbf{x}^*) = \prod_{i=1}^n p_G(X_i = 1 \mid X_1 = \dots = X_{i-1} = 1).$$
We obtain each conditional as a marginal in a conditioned Ising model. Let $H^{(0)} := G$. For $i = 1, 2, \dots, n$:
1. Query
$$q_i := O'_{H^{(i-1)}}(1, +1) = p_{H^{(i-1)}}(X_1 = 1) = p_G(X_i = 1 \mid X_1 = \dots = X_{i-1} = 1).$$
2. Construct $H^{(i)}$ from $H^{(i-1)}$ by conditioning $X_1 = 1$ and removing it: for each remaining variable $t \geq 2$,
$$\tilde{J}_t := J_t^{H^{(i-1)}} + (J_{1t}^{H^{(i-1)}} + J_{t1}^{H^{(i-1)}}), \quad \tilde{J}_{st} := J_{st}^{H^{(i-1)}} \quad (s \neq t, s, t \geq 2),$$
and drop the conditioned node (this absorbs its interactions into the unary terms).
Let $p := \prod_{i=1}^n q_i$, so $p = p_G(\mathbf{x}^*)$. Finally output
$$Z_G = \frac{\exp \left( \sum_s J_s + \sum_{s \neq t} J_{st} \right)}{p}.$$
This uses $n$ oracle calls and only polynomial-time model updates.

21 of 23

### Visual Description
Text-only slide showing the problem statement and solution for part (c), involving a chain rule decomposition and iterative model conditioning.

---
## Page 36
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708

## 2 Collaboration Policy
After you have completed all other components of this assignment, report your answers to the collaboration policy questions detailed in the Academic Integrity Policies for this course.

1. Did you receive any help whatsoever from anyone in solving this assignment? If so, include full details including names of people who helped you and the exact nature of help you received.
   > No.

2. Did you give any help whatsoever to anyone in solving this assignment? If so, include full details including names of people you helped and the exact nature of help you offered.
   > No

3. Did you find or come across code that implements any part of this assignment? If so, include full details including the source of the code and how you used it in the assignment.
   > No

22 of 23

### Visual Description
Text-only slide containing the collaboration policy section with three questions and their respective answers in boxes.

---
## Page 37
### Content
Homework 1: Introduction of Graphical Models and Exact Inference
10-708

### References
[1] Francisco Barahona. On the computational complexity of ising spin glass models. *Journal of Physics A: Mathematical and General*, 15(10):3241, 1982.

[2] Gregory F. Cooper. The computational complexity of probabilistic inference using bayesian belief networks. *Artificial Intelligence*, 42(2):393–405, 1990.

23 of 23

### Visual Description
Text-only slide listing two academic references.

---
