# zip-extracted-homework-02-HW2-hw2

Source: `materials/archive/advanced-machine-learning-10-715-cmu/piazza-resources/zip-extracted-homework-02-HW2-hw2.pdf`
Duplicate equivalents: `zip-extracted-homework-02-HW2-hw2.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 3

## Page 1
### Content
# CMU 10-715: Homework 2
## Learning Theory
**Released:** Sept. 15, 2025.
**Due:** Sept. 26, 2025, 11:59 PM.

### Instructions:
* **Collaboration policy:** Collaboration on solving the homework is allowed, after you have thought about the problems on your own. It is also OK to get clarification (but not solutions) from books, again after you have thought about the problems on your own. Please don’t search for answers on the web, previous years’ homeworks, etc. (please ask the TAs if you are not sure if you can use a particular reference). There are two requirements: first, cite your collaborators fully and completely (e.g., “Alice explained to me what is asked in Question 4.3”). Second, write your solution *independently*: close the book and all of your notes, and send collaborators out of the room, so that the solution comes from you only.
* **Submitting your work:** On Gradescope:
    * Submit your PDF report file, named [your andrew id].pdf , to the assignment titled “HW2 Report”. Upon submission, please follow Gradescope instructions to match the question numbers with the page numbers of your report.
    * There is no programming section for this homework.
    There is no limit on the number of submissions to Gradescope.
* **Gradescope access:** The link to this course is `https://www.gradescope.com/courses/1082583`.
* **Late days:** For each homework you get three late days to be used only when anything urgent comes up. No points will be deducted for using these late days. We will consider an honor system where we will rely on you to use the late days appropriately.

1

### Visual Description
Text-only slide.

---

## Page 2
### Content
# 1 PAC Learning [40 points]
A conjunction ($f$) of Boolean variables is an equation consisting of $d$ variables, $x_1, \dots, x_d$, where each $x_i$ is either used directly, used as a negation, or not used in constructing the conjunction. Variables are then combined through the and ($\wedge$) operator. An example of a conjunction is $f(\mathbf{x}) = f(x_1, \dots, x_d) = x_1 \wedge \neg x_3 \wedge x_4$. In this problem, we will show PAC learnability of the conjunction hypothesis class. Throughout this problem, let $S = \{(\mathbf{x}_i, y_i)\}_{i=1}^m$ be the training set of size $m$ and assume that we have a consistent learning algorithm. That is, we can find a hypothesis consistent to the training set whenever one exists.

(a) (10 points) Prove that if $m \ge \frac{1}{\epsilon}(d \log 3 + \log \frac{1}{\delta})$, then the resulting hypothesis $h$ satisfies $\mathcal{P}[h(\mathbf{x}) \neq f(\mathbf{x})] \le \epsilon$, with probability at least $1 - \delta$ over the training set. Here, $\log$ is the natural logarithm.

(b) (20 points) Suppose we know $k$, the exact number of variables used (negated or not) among $d$ variables in the conjunction. This further restricts the size of the hypothesis class. If $m \ge \frac{1}{\epsilon}(k(\log(\frac{2d}{k}) + 1) + \log \frac{1}{\delta})$, prove that the resulting hypothesis $h$ within the new hypothesis class satisfies $\mathcal{P}[h(\mathbf{x}) \neq f(\mathbf{x})] \le \epsilon$, with probability at least $1 - \delta$ over the training set.
(*Hint:* $\log(k!) \approx k \log k - k$)

(c) (10 points) Calculate the two minimum number of samples $m$ for (a) and (b) when $d = 50$, $k = 3$, and $\epsilon = \delta = 0.1$. Remember that $m \ge \frac{1}{\epsilon}(k(\log(\frac{2d}{k}) + 1) + \log \frac{1}{\delta})$ for (b). Which hypothesis class needs more data to learn and why?

2

### Visual Description
Text-only slide.

---

## Page 3
### Content
# 2 VC Dimension [60 points]
Figure out the VC dimension of each case and justify your claims:

(a) (15 points) Let $\mathcal{X}$ be the Boolean hypercube $\{0, 1\}^n$. For a set $I \subseteq \{1, 2, \dots, n\}$ we define a parity function $h_I$ as follows. On a binary vector $\mathbf{x} = (x_1, x_2, \dots, x_n) \in \{0, 1\}^n$,
$$h_I(\mathbf{x}) = \left(\sum_{i \in I} x_i\right) \pmod 2$$
That is, $h_I$ computes the parity of bits in $I$. What is the VC dimension of the class of all such parity functions, $\mathcal{H}_{n-parity} = \{h_I : I \subseteq \{1, 2, \dots, n\}\}$?
The parity problem is a benchmark problem used to evaluate the learning capacity of various algorithms. Specifically, solving the parity problem requires a non-linear decision boundary, making it a natural testbed for exploring the expressive power of models like neural networks.

(b) (15 points) Let $\mathcal{H}$ be the class of signed intervals. That is, $\mathcal{H} = \{h_{a,b,s} : a \le b, s \in \{-1, 1\}\}$ where
$$h_{a,b,s}(x) = \begin{cases} s & \text{if } x \in [a, b] \\ -s & \text{otherwise} \end{cases}$$
Calculate $VC(\mathcal{H})$ and prove your result.
In machine learning, signed intervals can be used to model uncertainty in input data or model predictions. This is particularly important in safety-critical applications like autonomous vehicles and medical diagnosis.

(c) (15 points) Given some finite domain set, $\mathcal{X}$, and a number $k \le |\mathcal{X}|$, let $\mathcal{H}_{=k}^{\mathcal{X}} = \{h \in \{0, 1\}^{\mathcal{X}} : |\{x : h(x) = 1\}| = k\}$. What is the VC dimension of $\mathcal{H}_{=k}^{\mathcal{X}}$? More intuitively, $\mathcal{H}$ is the set of functions defined on the finite domain $\mathcal{X}$ that map exactly $k$ points to 1 and all the others to 0.
These functions can be considered as a special class of Boolean functions. Studying the properties of such functions can help understand the complexity of decision trees, as each function corresponds to a particular decision tree structure.

(d) (15 points) Given some finite domain set $\mathcal{X}$, and a number $k \le |\mathcal{X}|$, let $\mathcal{H}_{at-most-k}^{\mathcal{X}} = \{h \in \{0, 1\}^{\mathcal{X}} : |\{x : h(x) = 1\}| \le k \text{ or } |\{x : h(x) = 0\}| \le k\}$. What is the VC dimension of $\mathcal{H}_{at-most-k}^{\mathcal{X}}$? More intuitively, $\mathcal{H}$ is the set of functions defined on the finite domain $\mathcal{X}$ that either map no more than $k$ points to 1 or no more than $k$ points to 0.
The ability to detect anomalies or outliers in data is crucial in various domains such as fraud detection, network security, and medical diagnosis. Functions in $\mathcal{H}$ can be used to design anomaly detection systems where the focus is on identifying a small subset of anomalies.

3

### Visual Description
Text-only slide.
