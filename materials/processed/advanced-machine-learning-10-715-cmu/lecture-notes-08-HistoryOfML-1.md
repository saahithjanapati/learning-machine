# lecture-notes-08-HistoryOfML-1

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/lecture-notes-08-HistoryOfML-1.pdf`
Duplicate equivalents: `lecture-notes-08-HistoryOfML-1.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 18

## Page 1
### Content
Machine Learning 10-715
History of Machine Learning

Lecture 1 of 2
September 8, 2025
Tom M. Mitchell
Machine Learning Department
Carnegie Mellon University

**Goals for these two lectures**
1. The historical timeline 1945-2025
2. Enduring lessons learned
3. Implications for the future of machine learning

Disclaimer: *There’s more in ML history than we will have time to discuss here. We will sample interesting developments, of course not cover them all.*

### Visual Description
Title slide for a lecture. The top half contains the course title and lecture topic. The bottom half lists the goals for the lectures and a disclaimer. The layout is clean with blue and red text on a white background.

---

## Page 2
### Content
**Decades of ML**
* **1940s**
    * Turing suggests machines should learn
* **1950s**
    * Perceptrons, learning to play checkers
* **1960s**
    * Perceptrons
* **1970s**
    * Learning symbolic descriptions
* **1980s**
    * Multilayer neural nets, decision tree learning, explanation-based learning, reinforcement learning, genetic algorithms
* **1990s**
    * Probabilistic graphical models, commercial applications
* **2000s**
    * Probabilistic graphical models, SVMs, kernel methods, increasingly commercial
* **2010s**
    * ML takeover of vision, speech, text processing; attention in neural nets, sequence modeling
* **2020s**
    * Transformer-based LLMs, ChatGPT, Multimodal models, inference time compute
    * AI safety, alignment, fairness
    * ???

**1940s**
* **Alan Turing raises the idea that computers should learn**
    * “Instead of trying to produce a program to simulate the adult mind, why not rather try to produce one which simulates the child’s? If this were then subjected to an appropriate course of education one would obtain the adult brain.”
    * “We normally associate punishments and reward with the teaching process. Some simple child machines can be constructed or programmed on this sort of principle. The machine has to be so constructed that events which shortly preceded the occurrence of a punishment signal are unlikely to be repeated, whereas a reward signal increased the probability of repetition of the event which led up to it.”
    * - *Computing Machinery and Intelligence*, Alan Turing, 1950

### Visual Description
The top half of the slide provides a bulleted timeline of Machine Learning by decade from the 1940s to the 2020s. The bottom half focuses on the 1940s, featuring a black-and-white portrait of Alan Turing and two quotes from his 1950 paper.

---

## Page 3
### Content
**1950s – Frank Rosenblatt’s Perceptron**
“The Perceptron: A Probabilistic Model for Information Storage and Organization in the Brain.” F. Rosenblatt, *Psychological Review*, 1958

**Key Idea:**
* Sensory input projects to a layer of A units with inhibitory and excitatory connections to downstream R units
* Downstream R units influence behavior
* Connection weights are learned
* Extended earlier ideas of Hebb, Hayek, Uttley, and Ashby

**Significant because:**
* Suggests how the brain might store and recall information, and use it to influence behavior
* Bridges biophysiology $\leftrightarrow$ psychology
* Triggered significant follow-up research on perceptron training/classification

**1950s – Art Samuel’s Checkers learning program**
“Some Studies in Machine Learning Using the Game of Checkers,” A. Samuel, *IBM Journal*, Vol. 3, July 1959.

**Abstract:** Two machine-learning procedures have been investigated in some detail using the game of checkers. Enough work has been done to verify the fact that a computer can be programmed so that it will learn to play a better game of checkers than can be played by the person who wrote the program. Furthermore, it can learn to do this in a remarkably short period of time (8 or 10 hours of machine-playing time) when given only the rules of the game, a sense of direction, and a redundant and incomplete list of parameters which are thought to have something to do with the game, but whose correct signs and relative weights are unknown and unspecified. The principles of machine learning verified by these experiments are, of course, applicable to many other situations.

### Visual Description
The top half discusses Frank Rosenblatt's Perceptron, including a portrait of Rosenblatt and two technical diagrams: Fig 2A (Schematic representation of connections) and Fig 2B (Venn diagram of active sets). The bottom half introduces Art Samuel's Checkers program, featuring a portrait of Samuel and a screenshot of the abstract from his 1959 paper.

---

## Page 4
### Content
“Some Studies in Machine Learning Using the Game of Checkers,” A. Samuel, *IBM Journal*, Vol. 3, July 1959.

**4.3.3 Definitions of parameters**
* **ADV (Advancement):** The parameter is credited with 1 for each passive man in the 5th and 6th rows (counting in passive's direction) and debited with 1 for each passive man in the 3rd and 4th rows.
* **APEX (Apex):** The parameter is debited with 1 if there are no kings on the board, if either square 7 or 26 is occupied by an active man, and if neither of these squares is occupied by a passive man.
* **BACK (Back Row Bridge):** The parameter is credited with 1 if there are no active kings on the board and if the two bridge squares (1 and 3, or 30 and 32) in the back row are occupied by passive pieces.
* **CENT (Center Control I):** The parameter is credited with 1 for each of the following squares: 11, 12, 15, 16, 20, 21, 24 and 25 which is occupied by a passive man.
* **CNTR (Center Control II):** The parameter is credited with 1 for each of the following squares: 11, 12, 15, 16, 20, 21, 24 and 25 that is either currently occupied by an active piece or to which an active piece can move.
* **DYKE (Dyke):** The parameter is credited with 1 for each string of passive pieces that occupy three adjacent diagonal squares.
* **EXCH (Exchange):** The parameter is credited with 1 for each square to which the active side may advance a piece and, in so doing, force an exchange.
* **EXPOS (Exposure):** The parameter is credited with 1 for each passive piece that is flanked along one or the other diagonal by two empty squares.
* **FORK (Threat of Fork):** The parameter is credited with 1 for each situation in which passive pieces occupy two adjacent squares in one row and in which there are three empty squares so disposed that the active side could, by occupying one of them, threaten a sure capture of one or the other of the two pieces.
* **GAP (Gap):** The parameter is credited with 1 for each single empty square that separates two passive pieces along a diagonal, or that separates a passive piece from the edge of the board.
* **GUARD (Back Row Control):** [Text cut off]

### Visual Description
The top half shows a diagram from Samuel's paper representing a look-ahead search tree for checkers, with a portrait of Art Samuel. The bottom half shows a list of parameter definitions (features) used in the checkers program, such as ADV, APEX, and BACK, also accompanied by Samuel's portrait.

---

## Page 5
### Content
**1950s – Art Samuel’s Checkers learning program**
“Some Studies in Machine Learning Using the Game of Checkers,” A. Samuel, *IBM Journal*, Vol. 3, July 1959.

**Key Idea:**
* Learn a polynomial evaluation function to predict game board values by adjusting weights of board features
    * Ad hoc adjustments, not gradient descent
* Training data from self-play: predict look-ahead search values using current evaluation function

**Significant because:**
* Demonstrated feasibility of machine learning a successful game strategy from self-play
* Set the stage for evaluation function learning in Backgammon, Chess, Go, …

**1960s – “Perceptrons” book – Seymour Pappert, Marvin Minsky**
*Perceptrons: An Introduction to Computational Geometry*, Minsky and Papert, 1969.

**Significant because:**
* Proved that one-layer perceptrons can learn only linear decision surfaces
    * e.g., cannot learn XOR function
* This result severely damped research on perceptrons

### Visual Description
The top half continues the discussion of Art Samuel's checkers program, including a graph titled "Learned board feature weights versus games played" showing multiple fluctuating lines. The bottom half discusses the 1969 book "Perceptrons" by Minsky and Papert, featuring portraits of both authors and the cover of the "Expanded Edition" of their book, which shows a red and orange interlocking spiral pattern.

---

## Page 6
### Content
**1970s – Symbolic Concept Learning – Patrick Winston**
**Key Idea:**
* Learn symbolic representation of concepts from sequence of positive and negative training examples.
* Learning as iterative refinement to a symbolic representation of the concept
* Highlighted importance of near-miss training

*Learning structural descriptions from examples*, PhD thesis, MIT, 1970.

**Significant because:**
* One of first attempts to learn concepts represented symbolically

**Related:**
* Induction of symbolic concepts [R. Michalski]
* Specific to general induction [F. Hayes-Roth]
* Maximally specific common generalization [S. Vere]
* …

**1970s – Meta-Dendral – Bruce Buchanan**
*Automatic Rule Formation in Mass Spectrometry by Means of the Meta-DENDRAL Program.* Buchanan et al., *Journal of the American Chemical Society*, 98(20), 1976.

**Discover chemical substructures likely to fragment, and where**
[Diagram of chemical structure and mass spectrogram]

### Visual Description
The top half covers Patrick Winston's work on symbolic concept learning, featuring his portrait and four diagrams labeled "ARCH" (Fig 1-4, 1-6) and "NEAR MISS" (Fig 1-5, 1-7) showing block arrangements. The bottom half introduces Bruce Buchanan's Meta-Dendral, featuring his portrait, a chemical structure diagram, a mass spectrogram graph, and a table of "NODE CONSTRAINTS" for a Meta-DENDRAL mass spectroscopy rule.

---

## Page 7
### Content
**1970s – Meta-Dendral – Bruce Buchanan**
*Automatic Rule Formation in Mass Spectrometry by Means of the Meta-DENDRAL Program.* Buchanan et al., *Journal of the American Chemical Society*, 98(20), 1976.

**Search to discover chemical substructures likely to fragment**
[Diagram showing chemical fragmentation: $x + x$, $x(2H) + x(1H)$, $C + C$, etc. with red arrows indicating fragmentation paths.]

**1970s – Meta-Dendral – Bruce Buchanan**
**Key Idea:**
* Rule generation, followed by rule refinement
* **Rulegen:** search from most general to increasingly specific rules, evaluating positive and negative evidence at each step, to find **set** of rules that cover evidence well
* **Rulemod:** search for useful refinements to rules

**Significant because:**
* One of first symbolic ML programs to discover knowledge useful to scientists
* One of first to learn from **indirect** training data

### Visual Description
The top half shows a fragmentation diagram for chemical structures related to Meta-Dendral, with red arrows pointing to various molecular fragments. The bottom half details the "Key Idea" and "Significance" of Meta-Dendral, including the Rulegen and Rulemod processes, accompanied by the same portrait of Bruce Buchanan and the node constraints table from the previous page.

---

## Page 8
### Content
**1970s – Version Spaces – Tom Mitchell**
*Version Spaces: A Candidate Elimination Approach to Rule Learning*, T.M. Mitchell, *IJCAI*, 1977.

**Key Idea:** Represent the set of **all hypotheses consistent with training examples**, by its maximally specific and maximally general members

**maximally specific:** [Diagram of specific boundary set]
**maximally general:** [Diagram of general boundary set]

**1970s – Version Spaces – Tom Mitchell**
**Significant because:**
* Replaced iteratively refining a **current hypothesis** by iteratively refining the **set of all acceptable hypotheses**
* Admitted algorithms for active learning,
* Admitted algorithms for classifying with partially learned concepts

### Visual Description
The slide describes Tom Mitchell's Version Spaces. It includes two technical diagrams showing "maximally specific" and "maximally general" boundaries within a hypothesis space, represented as nodes and constraints. A blue box highlights the "Significant because" section, emphasizing the shift from a single hypothesis to a set of hypotheses.

---
==End of PDF==
## Page 9
### Content
video clip – Bruce Buchanan

1980s – Machine Learning Workshop
Machine Learning: An Artificial Intelligence Approach, R. Michalski, J. Carbonell, and T. Mitchell, Tioga Press, 1983.

– Held in 1980, Wean Hall 5309
– Prof. Jaime Carbonell was CMU host
– Few dozen attendees
– Evolved into International Conf. on Machine Learning
– Led to edited collection published in 1983
– Perhaps the first published collection of machine learning papers

### Visual Description
The page contains two main sections. The top section shows a screenshot of a video call with Bruce Buchanan. The bottom section features a photo of the book cover for "MACHINE LEARNING: An Artificial Intelligence Approach" by Michalski, Carbonell, and Mitchell, alongside a photo of three men standing at a podium labeled "THE CARNEGIE."

---

## Page 10
### Content
1980s – Machine Learning Workshop
Machine Learning: An Artificial Intelligence Approach, R. Michalski, J. Carbonell, and T. Mitchell, Tioga Press, 1983.

1980s – ID3 Decision Tree Learning – Ross Quinlan

Idea:
– Represent learned concept as a decision tree
– Learn the tree by growing it from the root, adding branches, guided by its performance over training examples

Learning efficient classification procedures and their application to chess end games, J. Ross Quinlan, in Machine Learning, 1983.

Significant because:
– General approach to learning from noisy training data
– Became one of the most widely used ML approaches
– Early focus on avoiding overfitting

### Visual Description
The top half shows the cover and title page of the book "Machine Learning: An Artificial Intelligence Approach." The bottom half features a portrait of Ross Quinlan and a diagram of a decision tree. The tree starts with a root node "Outlook" branching into "Sunny," "Overcast," and "Rain." "Sunny" leads to a "Humidity" node, and "Rain" leads to a "Wind" node.

---

## Page 11
### Content
Video clip – Ross Quinlan

1980s – PAC Learning – Leslie Valiant

Idea:
– Assume training and test data generated by the same, perhaps unknown, probability distribution
– Assume noise-free data, $H$ contains the target Boolean-valued concept to be learned
– “Probably Approximately Correct” learning is achievable if learner, given $m$ randomly drawn training examples, can
    * With arbitrarily high probability $(1 - \delta)$ output a hypothesis with arbitrarily small error $\epsilon$
    * And do this in time that is polynomial in $1/\epsilon, 1/\delta, n$, and $size(H)$

A theory of the learnable, L. Valiant, Comm. ACM, 1984.

Significant because:
– Provides theoretical relationship between
    * Number of training examples $m$, each of length $\le n$
    * Complexity of hypothesis space $H$
    * Probability $(1-\delta)$ of successful learning
    * Error tolerance $\epsilon$ that defines successful learning
– Led to understanding of practically learnable problem settings, vs. not
– Catalyzed much follow-on research

### Visual Description
The top section shows a screenshot of a video call with Tom Mitchell (labeled as a Ross Quinlan clip). The bottom section contains text about PAC Learning and a portrait of Leslie Valiant in the upper right corner of that section.

---

## Page 12
### Content
Video clip – Leslie Valiant

1980s – Explanation-based learning – T. Mitchell, G. DeJong

Idea:
– Learner uses background knowledge to “explain” why this example has positive or negative label
– Generalization strategy: Example features mentioned in explanation are relevant; features not mentioned are irrelevant

Explanation-Based Generalization: A Unifying View. Mitchell, T., Keller, R., & Kedar-Cabelli, S. (1986). Machine Learning, 1(1), 47–80.
Explanation-Based Learning: An Alternative View. DeJong, G., & Mooney, R. (1986). Machine Learning, 1(2), 145–176.

positive example of “lose rook in 3 moves”

### Visual Description
The top section shows a screenshot of a video call with Leslie Valiant. The bottom section contains text about Explanation-based learning and a diagram of a chessboard showing a specific game state, labeled as a "positive example of 'lose rook in 3 moves'".

---

## Page 13
### Content
1980s – Explanation-based learning – T. Mitchell, G. DeJong

Explanation of why this is a positive example of “lose rook in 3 moves”:
• Black can move knight to C2
• This will put my king in check, and threaten my rook on A1
• None of my pieces can take knight on C2, so I will have to move my king out of check
• Black knight can then take my rook on A1

General rule learnable from explanation:
• IF
    • Opponent knight can move to a spot where
        • it puts me in check, and
        • it threatens my rook, and
        • I cannot capture it immediately
• THEN
    • Positive example of “lose rook in 3 moves”

1980s – Explanation-based learning – T. Mitchell, G. DeJong

Idea:
– Learner uses background knowledge to “explain” why this example has positive or negative label
– Generalization strategy: Example features mentioned in explanation are relevant; features not mentioned are irrelevant

Significant because:
– Introduced learning by deductive inference rather than inductive inference
– Learn from many fewer examples, relying on background knowledge to generalize
– Led to distinction between knowledge level learning and knowledge compilation

positive example of “lose rook in 3 moves”

### Visual Description
The page is divided into two similar sections. Both show a chessboard diagram. The top section includes a blue-bordered box containing a step-by-step explanation and a general "IF-THEN" rule derived from the chess example. The bottom section repeats the "Idea" and adds a "Significant because" list.

---

## Page 14
### Content
1980s – SOAR – Newell, Laird, Rosenbloom

Key Idea:
– AI agent architecture intended to capture breadth of human cognition
– Different problems solved in different “problem spaces”
– Self-reflection capability : an impasse in solving a problem in one problem space invokes a second problem space to solve that problem
– Learning: solution to impasses stored as general rules (“chunking”)

SOAR: An architecture for general intelligence. Laird, J. E., Newell, A., & Rosenbloom, P. S. (1987). Artificial Intelligence, 33(1), 1–64

1980s – SOAR – Newell, Laird, Rosenbloom

Key Idea:
– AI agent architecture intended to capture breadth of human intelligence
– Different problems solved in different “problem spaces”
– Self-reflection capability : an impasse in solving a problem in one problem space invokes a second problem space to solve that problem
– Learning: solution to impasses stored as general rules. (“chunking”)

Chunk: A & B & D $\Rightarrow$ R
Circles are WMEs or sets of WMEs
Bold circles indicate nodes essential to the resolution
Arrow sets going into a node are rules that fire to add it
Numbered nodes are WMEs in the impasse

### Visual Description
The page shows two versions of the SOAR slide. Both feature portraits of Allen Newell, John Laird, and Paul Rosenbloom at the top right. Both include a block diagram of the SOAR architecture showing "Long-term Recognition Memory," "Working Memory," "Goal stack," and "CHUNKING." The bottom version includes an additional diagram labeled "IMPASSE" showing a network of nodes (A, B, C, D, E, R) and rules, illustrating the "chunking" process.

---

## Page 15
### Content
1980s – SOAR – Newell, Laird, Rosenbloom

Key Idea:
– AI agent architecture intended to capture breadth of human intelligence
– Different problems solved in different “problem spaces”
– Self-reflection capability : an impasse in solving a problem in one problem space invokes a second problem space to solve that problem
– Learning: solution to impasses stored as general rules. (“chunking”)

SOAR: An architecture for general intelligence. Laird, J. E., Newell, A., & Rosenbloom, P. S. (1987). Artificial Intelligence, 33(1), 1–64

Significant because:
– Introduced goal of general learning agent
– Introduced self-reflection as mechanism to handle impasses, and general learning mechanism invoked post-impasse
– Still active project/company today

Video clip – John Laird

### Visual Description
The top half of the page repeats the SOAR architecture slide from the previous page, including the portraits and the block diagram. The bottom half shows a screenshot of a video call with John Laird.

---

## Page 16
### Content
1980s – Multilayer neural nets – Rummelhart, McClelland, Hinton

Idea:
– Gradient descent algorithm for training multi-layer sigmoid unit networks
– Train/validation/test data to avoid overfitting

Significant because:
– Multilayer networks overcome representation limitations of single-layer perceptrons
– Good algorithms to train multiple layer nets
– Ability to discover useful features
– Great deal of follow-on research!

David Rumelhart, James McClelland and PDP Research Group (1987). Parallel Distributed Processing: Explorations in the Microstructure of Cognition. MIT Press.
[Huang & Lippmann, 1988]

1980s – Reinforcement Learning – Sutton and Barto

Idea:
– Learn from potentially distant rewards
– Learn function
    * State $\rightarrow$ time discounted future reward
    * State x Action $\rightarrow$ time discounted future reward
– Build on mathematical framework of Markov Decision Processes
– Approximate function with any representation

Significant because:
– Agent architecture for learning from direct experience
– Many, many applications
    * Robot control
    * Self-driving cars
    * Chess, backgammon, Go
    * …

Learning to predict by the methods of temporal differences, R. Sutton, Machine Learning, 1988

### Visual Description
The top section discusses multilayer neural nets and includes a diagram of a neural network and a scatter plot of speech data (F1 vs F2) for different vowel sounds. The bottom section discusses Reinforcement Learning and includes portraits of Richard Sutton and Andrew Barto, along with two grid-world diagrams illustrating value propagation and policy.

---
## Page 17
### Content
Video clip of Rich Sutton

1980s – Neural networks for self-driving – Dean Pomerleau

**Idea:**
- Neural net maps input camera image to output steering command
- Drove 55 mph on Pittsburgh public roads (I-79), far outperforming all earlier attempts (which drove about 10 mph on private trails)

**Significant because:**
- Improved self-driving state of the art
    - From 10 mph on private trails
    - To 55 mph on Interstate 79
- Introduced idea of training on synthetic data (perturbed real data)

ALVINN: An Autonomous Land Vehicle in a Neural Network, D. Pomerleau, NeurIPS, 1988

### Visual Description
The top half of the slide shows a video frame of Rich Sutton, an older man with a beard, resting his chin on his hand during a video call. The bottom half contains text and a technical diagram of the ALVINN neural network architecture. The diagram illustrates a "30x32 Video Input Retina" and an "8x32 Range Finder Input Retina" connecting to "29 Hidden Units," which then connect to a "Road Intensity Feedback Unit" and "45 Direction Output Units." A small black-and-white image of a road is shown as the input source.

---

## Page 18
### Content
Video clip – Dean Pommerleau

Decades of ML

- **1940s**
    - Turing suggests machines should learn
- **1950s**
    - Perceptrons, learning to play checkers
- **1960s**
    - Perceptrons
- **1970s**
    - Learning symbolic descriptions
- **1980s**
    - Multilayer neural nets, decision tree learning, explanation-based learning, reinforcement learning, genetic algorithms
- **1990s**
    - Probabilistic graphical models, commercial applications
- **2000s**
    - Probabilistic graphical models, SVMs, kernel methods, increasingly commercial
- **2010s**
    - ML takeover of vision, speech, text processing; attention in neural nets, sequence modeling
- **2020s**
    - Transformer-based LLMs, ChatGPT, Multimodal models, inference time compute
    - AI safety, alignment, fairness
    - ???

### Visual Description
The top half of the slide shows a video frame of a man (Dean Pommerleau) smiling during a video call. The bottom half of the slide provides a bulleted chronological summary of the history of machine learning from the 1940s to the 2020s.

---
