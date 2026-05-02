# lecture-notes-09-HistoryOfML-2

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/lecture-notes-09-HistoryOfML-2.pdf`
Duplicate equivalents: `lecture-notes-09-HistoryOfML-2.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `MIXED`
Pages: 15

## Page 1
### Content
9/10/25

# Machine Learning 10-715
## History (and future) of Machine Learning

Lecture 2 of 2
September 10, 2025

Tom Mitchell
Machine Learning Department
Carnegie Mellon University

### Outline for today
1. The historical timeline 1990-2025
2. What have we learned (and not yet learned)
3. Implications for the future

*Disclaimer: There’s more in ML history than we will have time to discuss here. We will sample interesting developments, of course not cover them all.*

### Visual Description
Text-only slide.

---

## Page 2
### Content
9/10/25

### Decades of ML
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
    * Probabilistic graphical models, SVMs, kernel methods, increasing commercial applications
* **2010s**
    * ML takeover of vision, speech, text processing; attention in neural nets, sequence modeling
* **2020s**
    * Transformer-based LLMs, ChatGPT, Multimodal models, inference time compute
    * AI safety, alignment, fairness
    * ???

### 1980s – Reinforcement Learning – Sutton and Barto
**Idea:**
* Learn from potentially distant rewards
* Learn function
    * State $\to$ time discounted future reward
    * State x Action $\to$ time discounted future reward
* Build on mathematical framework of Markov Decision Processes
* Approximate function with any representation

*Learning to predict by the methods of temporal differences, R. Sutton, Machine Learning, 1988*

**Significant because:**
* Provides agent architecture that learns from direct experience
* Many, many applications
    * Robot control
    * Self-driving cars
    * Chess, backgammon, Go
    * ...

### Visual Description
The slide contains two main sections. The top section lists the decades of ML from the 1940s to the 2020s. The bottom section focuses on Reinforcement Learning in the 1980s, featuring portrait photos of Rich Sutton and Andrew Barto, alongside two grid-world diagrams illustrating reward propagation and value estimation in a reinforcement learning environment.

---

## Page 3
### Content
9/10/25

### Video clip of Rich Sutton
[Video placeholder]

### Lots more from the 1980s
* **Learning by simulated evolution**
    * Genetic algorithms, Genetic program
* **Experiments in automated discovery**
    * Doug Lenat’s AM, Eurisko that searched for “interesting” concepts
    * Herb Simon and Pat Langley’s BACON to rediscover empirical laws of chemistry, astronomy, …
* **Case based reasoning**
* **Learning by analogy**
* **Learning to plan**
    * Jaime Carbonell’s PRODIGY
* **Modeling human learning**
    * John Anderson’s ACT, ACT-R

### Visual Description
The top half of the slide shows a screenshot of a video call featuring Rich Sutton. The bottom half lists various machine learning developments and research projects from the 1980s.

---

## Page 4
### Content
9/10/25

### 1990s – Learning Probabilistic Graphical Models – aka Bayes Nets
**Key Idea:**
* J. Pearl introduced Bayesian Networks in 1988 as an approach to representing probability distributions, and performing probabilistic inference.
* In 1990’s many researchers worked on algorithms to **learn** Bayesian networks
* Many leverage statistical/probabilistic algorithms like Expectation Maximization (EM) to accommodate unobserved variables in training data

**Significant because:**
* Integrated general machine learning with probabilistic approaches
* Many practical applications
* More interpretable than neural nets

*Probabilistic Reasoning in Intelligent Systems: Networks of Plausible Inference. Pearl, J. Morgan Kaufmann Publishers, 1988.*
*Causation, Prediction, and Search. Spirtes, P., Glymour, C., & Scheines, R. (1993). Springer-Verlag.*
*A Bayesian method for the induction of probabilistic networks from data. Cooper, G. F., & Herskovits, E. Machine Learning, 9(4), 309–347. 1992*
*Learning Bayesian networks: The combination of knowledge and statistical data. Heckerman, D., et al. Machine Learning, 20(3), 197–243. (1995).*

### 1990s – Support Vector Machines – V. Vapnik
**Key Ideas:**
* Learn a linear decision surface, but…
* Use the “kernel trick” to **virtually** project data points into much higher dimension space, where linear surfaces there are highly non-linear in original space
* Training objective: maximize distance from decision surface to the closest training point
* Requires manually designing the kernel ~ projection

**Significant because:**
* Successful applications
* Introduced “maximum margin” as training objective
* Led to kernel methods for many types of learning problems, from numerical data to text strings

*A training algorithm for optimal margin classifiers. Boser, B., Guyon, I., & Vapnik, V. COLT, 1992*

### Visual Description
The slide is divided into two sections. The top section describes Bayesian Networks and includes a diagram of the "Asia" network (a directed acyclic graph with nodes like "Visit to Asia", "Smoker", "Lung Cancer", etc., showing conditional probabilities). The bottom section describes Support Vector Machines and includes a diagram showing a linear decision boundary separating two classes of points (blue pluses and red minuses) with a highlighted margin and support vectors.

---

## Page 5
### Content
9/10/25

### 2000s – Decision forests. -- L. Breiman
**Key Ideas:**
* Instead of learning a single decision tree, learn a collection of them
* Train each tree on a different sample of training data
* At each step of growing a tree, consider only a subset of possible features
* Classify new examples by voting the forest
* Builds on earlier theoretical ideas around bagging

**Significant because:**
* Tends to work well out-of-the-box without tinkering
* Widely used for practical applications
* Part of a larger movement toward ensemble learning methods to avoid overfitting

*Random Forests. Breiman, L. Machine Learning, 45(1), (2001).*

### Lots more from the 2000s
* Much development of probabilistic graphical models
* Much development of SVMs and other kernel-based methods
* **Latent Dirichlet Allocation**
    * E.g., For pulling out sub-themes in collections of text documents
* Learning lower-dimensional manifolds to re-represent data
* Generally, much integration of statistical and optimization algorithms with ML
* Growing commercialization of ML

### Visual Description
The top section describes Decision Forests and includes a diagram showing a dataset being split into multiple decision trees (Decision Tree 1, Decision Tree 2, ... Decision Tree N), each producing a result, which are then combined via "Majority Voting / Averaging" to reach a "Final Result". The bottom section lists other major developments in ML during the 2000s.

---

## Page 6
### Content
9/10/25

### 2010s – Alex Net (2012)
**Key Idea:**
* Deep, multilayer convolutional neural net
* ReLU units, dropout, real and synthetic data, …
* Trained using GPUs

**Significant because:**
* Demonstrated deep neural networks outperform existing vision algorithms
* On ImageNet challenge, achieved 15% top-5 error rate, compared to 26% for second place entry
* Learns low-level image features from pixel level on up
* Led to neural networks essentially taking over computer vision research

*“ImageNet Classification with Deep Convolutional Neural Networks” A. Krizhevsky., I. Sutskever, G. Hinton, NeurIPS, 2012*

### 2010s – Neural nets achieve human level speech recognition (2016)
**Significant because:**
* Demonstrated deep neural networks outperformed existing speech recognition systems
* On Switchboard dataset, achieved human-level word recognition rate
* Collection of neural networks (e.g., CNNs), along with other improvements

*Achieving Human Parity in Conversational Speech Recognition. Xiong, W., Droppo, J., Huang, X., Seide, F., Seltzer, M., Stolcke, A., Yu, D., & Zweig, G. (2016) arXiv:1610.05256.*

### Visual Description
The top section describes AlexNet and includes a grid of images classified into categories like "craft", "watercraft", "sailing vessel", "carnivore", "canine", and "dog", as well as a diagram of the AlexNet architecture showing convolutional and fully connected layers. The bottom section describes human-level speech recognition and includes a complex block diagram labeled "Fig. 1. LACE network architecture".

---

## Page 7
### Content
9/10/25

### 2010s – Transformer Architecture (2017). Vaswani et al., Google
$$Attention(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$

**Significant because:**
* Exceeded state of the art performance in English-to-German and English-to-French translation.
* Simpler architecture than prevailing convolutional and LSTM architectures
    * Based on attention mechanism
* Highly parallelizable with GPUs
* Became the core neural network architecture underlying Large Language Models

*Attention Is All You Need. Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., & Polosukhin, I. (2017). NeurIPS 2017.*

### Lots more from the 2010s
* Learned vector embeddings to represent word meanings,
    * e.g., Word2Vec, GloVe
* **Generative Adversarial Networks**
    * Train one network to generate, the other to detect generated vs. real data (e.g., images)
* Diffusion models for image generation
* **Deep Q-Networks**
    * Get Q-learning to work with deep networks
* Alpha Go
* Alpha Fold
* Open source frameworks supporting GPU use: PyTorch, TensorFlow
* Much commercial activity

### Visual Description
The top section describes the Transformer architecture and includes the mathematical formula for attention and the standard Transformer model architecture diagram (showing encoder/decoder blocks, multi-head attention, and positional encoding). The bottom section lists other major developments in ML during the 2010s.

---

## Page 8
### Content
9/10/25

| ML timeline | Approaches invented | Milestone accomplishments |
| :--- | :--- | :--- |
| 1960s | Perceptrons, Learn evaluation functions for search | Learn to play checkers well |
| 1970s | Supervised symbolic concept learning | Meta-DENDRAL discoveries published in Chemistry journal |
| 1980s | Decision trees, PAC theory, multilayer neural nets, reinforcement learning | ALVINN autonomous vehicle drives 55
## Page 9
### Content
**Ideas of lasting importance?**
* Different learning problem settings, and different training objectives
* Overfitting and how to manage it
* Learning probabilistic models
* Probabilistic interpretation of other models
* Underlying theory – PAC, et al.
* Attention in neural networks
* Natural language is a much more expressive representation than formal representations, and better for common sense reasoning

**Ideas worth (re)examining now?**
* Self-reflective agent architectures
    * E.g., SOAR-like
* Evolutionary approaches like genetic algorithms, genetic programming
* Explanation-based methods
    * Now that LLMs can produce explanations
    * Now that LLMs have a lot of background knowledge
* Cognitive science of human learning
    * Episodic memory, procedural memory, effect of spaced repetition, …
* Biological learning
    * Hebb’s rule, habituation, …
* Societal level learning
    * As opposed to individual agents.
    * See “Sapiens” by Hariri

**Lessons and questions**
* Big data and big computing, with gradient descent, can learn a lot
    * Including low-level features
    * Is there anything that can not be learned from current big data (e.g., the web)?
* Neural networks can be trained to output probabilistic labels, using any architecture you like as long as the output layer is softmax, trained with the appropriate objective
    * What then is the role for Probabilistic Graphical Models?
* Much frontier research in ML is now in industry, not universities
    * And exact algorithms are trade secrets
    * What research should universities do?

### Visual Description
Text-only slide. The content is organized into two main rectangular boxes. The top box contains two columns of bulleted lists under the headings "Ideas of lasting importance?" and "Ideas worth (re)examining now?". The bottom box contains a single column of bulleted lists under the heading "Lessons and questions".

---

## Page 10
### Content
**Possible thesis areas?**
* AI+X:
    * AI for Biological science
    * AI for Material science
    * AI for Medicine
    * AI for Engineering
    * …
* AI safety/fairness/privacy
    * How can we learn from everybody’s phone data while assuring their privacy?
    * What biases exist in AI systems and how can they be addressed?

**Possible thesis areas?**
* Instead of solving ”learn a function $f: X \rightarrow Y$”, solve “learn a function that predicts $Y$”, your algorithm figures out the right $X$, data set, and the right representation (hint: use the web)
* Instead of solving “train a model from this experimental data” solve “train a model from this experimental data, plus relevant publications”
* Train/refine a LMM to the objective of self-consistency e.g., if it believes “$X+3=8$” and “$Y+8=15$”, it should believe “$Y+X+3=15$”
* Self-reflection: build a LLM-based agent that can answer questions like “Why did you output this answer?” and “What change to the input would change your answer?”

### Visual Description
Text-only slide. The content is divided into two rectangular boxes, both titled "Possible thesis areas?". Each box contains a list of bulleted research topics and questions.

---

## Page 11
### Content
**Wildcards**

**Will AI agents (that can take actions on your behalf) become widespread?**

### Visual Description
Text-only slide. The slide contains two rectangular boxes. The top box contains the word "Wildcards" centered. The bottom box contains the question "Will AI agents (that can take actions on your behalf) become widespread?" centered.

---

## Page 12
### Content
**Will Large Multimodal Models catalyze a revolution in robotics?**

**Will Open Source models dominate, or closed models accessed over the cloud?**

### Visual Description
Text-only slide. The slide contains two rectangular boxes. The top box contains the question "Will Large Multimodal Models catalyze a revolution in robotics?" centered. The bottom box contains the question "Will Open Source models dominate, or closed models accessed over the cloud?" centered.

---

## Page 13
### Content
**Will the US remain the AI leader?**

**What are we overlooking when we predict future of AI?**

### Visual Description
Text-only slide. The slide contains two rectangular boxes. The top box contains the question "Will the US remain the AI leader?" centered. The bottom box contains the question "What are we overlooking when we predict future of AI?" centered.

---

## Page 14
### Content
**How will AI change jobs?**

**What will be the main gating factor on market penetration of AI?**

### Visual Description
Text-only slide. The slide contains two rectangular boxes. The top box contains the question "How will AI change jobs?" centered. The bottom box contains the question "What will be the main gating factor on market penetration of AI?" centered.

---

## Page 15
### Content
**How will AI change businesses and partnerships?**

### Visual Description
Text-only slide. The slide contains a single large rectangular box in the center containing the question "How will AI change businesses and partnerships?".

---
