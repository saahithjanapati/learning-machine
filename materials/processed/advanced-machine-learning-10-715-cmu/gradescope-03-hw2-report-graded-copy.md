# gradescope-03-hw2-report-graded-copy

Source: `materials/archive/advanced-machine-learning-10-715-cmu/gradescope-graded-copies/gradescope-03-hw2-report-graded-copy.pdf`
Duplicate equivalents: `gradescope-03-hw2-report-graded-copy.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 7

## Page 1
### Content
**HW2 Report**
**Graded**

**Student**
Saahith Janapati

**Total Points**
90 / 100 pts

**Question 1**
Q1: 40 / 40 pts

**1.1 (a): 10 / 10 pts**
* + 3 pts Partially identify correct size of hypothesis class
* [Check] + 5 pts Correctly identify size of hypothesis class
* [Check] + 5 pts Apply finite hypothesis class formula

**1.2 (b): 20 / 20 pts**
* [Check] + 6 pts Number of hypothesis is $\binom{d}{k} \cdot 2^k$
* [Check] + 8 pts $\log |H| \le k (\log(2d/k)+1)$
* [Check] + 6 pts Finite Hypothesis Class Formula

**1.3 (c): 10 / 10 pts**
* [Check] + 2.5 pts 572.33 for Hypothesis 1
* [Check] + 2.5 pts 158.22 for Hypothesis 2
* [Check] + 5 pts The first hypothesis needs more because larger hypothesis class

### Visual Description
This is a Gradescope grading report page. It shows the student's name, total score, and a breakdown of points for Question 1. Each sub-question (1.1, 1.2, 1.3) lists rubric items with checkmarks indicating points awarded.

---

## Page 2
### Content
**Question 2**
Q2: 50 / 60 pts

**2.1 (a): 15 / 15 pts**
* [Check] - 0 pts Correct
* - 3 pts Missing proper justification for VC dimension lower bound
* - 3 pts Missing proper justification for VC dimension upper bound
* - 5 pts Missing upper bound on VC dimension
* - 5 pts Missing lower bound on VC dimension
* - 0.5 pts Minor mistake

**2.2 (b): 5 / 15 pts**
* - 0 pts Correct
* - 7.5 pts Missing proof for upper bound
* - 7.5 pts Missing proof for lower bound
* - 15 pts Missing response
* - 1 pt Minor issue in proof of upper bound
* - 1 pt Minor issue in proof of lower bound
* - 3 pts Issue in proof of upper bound
* - 3 pts Issue in proof of lower bound
* [Check] - 5 pts Key issue in proof of upper bound
* [Check] - 5 pts Key issue in proof of lower bound

**2.3 (c): 15 / 15 pts**
* [Check] - 0 pts Correct
* - 0.5 pts Missing reasoning
* - 4 pts Missing $k$
* - 4 pts Missing $|\mathcal{X}| - k$
* - 4 pts Shattered set is incorrect

**2.4 (d): 15 / 15 pts**
* [Check] - 0 pts Correct
* - 4 pts Missing $|\mathcal{X}|$
* - 4 pts Missing $2k + 1$
* - 4 pts Incorrect set shattered

### Visual Description
This is the second page of the Gradescope grading report, detailing Question 2. It shows point deductions and awarded points for sub-questions 2.1 through 2.4. Rubric items with checkmarks indicate the specific feedback applied to the student's work.

---

## Page 3
### Content
No questions assigned to the following page.

**CMU 10-715: Homework 2**
Learning Theory
**Released: Sept. 15, 2025.**
**Due: Sept. 26, 2025, 11:59 PM.**

**Instructions:**
* **Collaboration policy:** Collaboration on solving the homework is allowed, after you have thought about the problems on your own. It is also OK to get clarification (but not solutions) from books, again after you have thought about the problems on your own. Please don't search for answers on the web, previous years' homeworks, etc. (please ask the TAs if you are not sure if you can use a particular reference). There are two requirements: first, cite your collaborators fully and completely (e.g., "Alice explained to me what is asked in Question 4.3"). Second, write your solution *independently*: close the book and all of your notes, and send collaborators out of the room, so that the solution comes from you only.
* **Submitting your work:** On Gradescope:
    * Submit your PDF report file, named [your andrew id].pdf, to the assignment titled "HW2 Report". Upon submission, please follow Gradescope instructions to match the question numbers with the page numbers of your report.
    * There is no programming section for this homework.
    There is no limit on the number of submissions to Gradescope.
* **Gradescope access:** The link to this course is `https://www.gradescope.com/courses/1082583`.
* **Late days:** For each homework you get three late days to be used only when anything urgent comes up. No points will be deducted for using these late days. We will consider an honor system where we will rely on you to use the late days appropriately.

1

### Visual Description
Text-only slide. This is the cover page of the homework assignment containing the title, dates, and detailed instructions regarding collaboration, submission, and late policies.

---

## Page 4
### Content
Questions assigned to the following page: 1.1, 1.2, and 1.3

### 1 PAC Learning [40 points]
A conjunction ($f$) of Boolean variables is an equation consisting of $d$ variables, $x_1, \dots, x_d$, where each $x_i$ is either used directly, used as a negation, or not used in constructing the conjunction. Variables are then combined through the and ($\wedge$) operator. An example of a conjunction is $f(\mathbf{x}) = f(x_1, \dots, x_d) = x_1 \wedge \neg x_3 \wedge x_4$. In this problem, we will show PAC learnability of the conjunction hypothesis class. Throughout this problem, let $S = \{(\mathbf{x}_i, y_i)\}_{i=1}^m$ be the training set of size $m$ and assume that we have a consistent learning algorithm. That is, we can find a hypothesis consistent to the training set whenever one exists.

(a) (10 points) Prove that if $m \ge \frac{1}{\epsilon}(d \ln 3 + \log \frac{1}{\delta})$, then the resulting hypothesis $h$ satisfies $\mathcal{P}[h(\mathbf{x}) \neq f(\mathbf{x})] \le \epsilon$, with probability at least $1 - \delta$ over the training set. Here, $\log$ is the natural logarithm.
Each of the $d$ variables can be (i) used, (ii) negated, or (iii) not used. Hence $|\mathcal{H}| = 3^d$. By the finite-class PAC bound, if
$$m \ge \frac{1}{\epsilon} \left( \ln |\mathcal{H}| + \ln \frac{1}{\delta} \right) = \frac{1}{\epsilon} \left( d \ln 3 + \ln \frac{1}{\delta} \right),$$
then any consistent learner outputs $h$ with $R(h) \le \epsilon$ with probability at least $1 - \delta$.

(b) (20 points) Suppose we know $k$, the exact number of variables used (negated or not) among $d$ variables in the conjunction. This further restricts the size of the hypothesis class. If $m \ge \frac{1}{\epsilon} (k(\log(\frac{2d}{k}) + 1) + \log \frac{1}{\delta})$, prove that the resulting hypothesis $h$ within the new hypothesis class satisfies $\mathcal{P}[h(\mathbf{x}) \neq f(\mathbf{x})] \le \epsilon$, with probability at least $1 - \delta$ over the training set.
(Hint: $\log(k!) \approx k \log k - k$)
If exactly $k$ variables are used (each either positive or negated), then
$$|\mathcal{H}| = \binom{d}{k} 2^k.$$
Using $\binom{d}{k} \le d^k/k!$ and $\ln k! \ge k \ln k - k$,
$$\ln |\mathcal{H}| = \ln \binom{d}{k} + k \ln 2 \le k \ln d - \ln k! + k \ln 2$$
$$\le k \ln d - (k \ln k - k) + k \ln 2 = k (\ln \frac{2d}{k} + 1).$$
Thus a sufficient sample size is
$$m \ge \frac{1}{\epsilon} \left( k (\ln \frac{2d}{k} + 1) + \ln \frac{1}{\delta} \right),$$
which guarantees $R(h) \le \epsilon$ with probability at least $1 - \delta$ for any consistent learner.

(c) (10 points) Calculate the two minimum number of samples $m$ for (a) and (b) when $d = 50, k = 3$, and $\epsilon = \delta = 0.1$. Remember that $m \ge \frac{1}{\epsilon} (k(\log(\frac{2d}{k}) + 1) + \log \frac{1}{\delta})$ for (b). Which hypothesis class needs more data to learn and why?
With $d = 50, k = 3$, and $\epsilon = \delta = 0.1$:
$$m_a \ge \frac{1}{0.1} (50 \ln 3 + \ln 10) \approx 572.33, \quad m_b \ge \frac{1}{0.1} \left( 3 (\ln \frac{100}{3} + 1) + \ln 10 \right) \approx 158.22.$$
Conclusion: (a) needs more samples because $|\mathcal{H}| = 3^d$ is much larger than $|\mathcal{H}| = \binom{d}{k} 2^k$ in (b).

2

### Visual Description
Text-only slide. This page contains the problem statement and solutions for Question 1 regarding PAC Learning of Boolean conjunctions, including mathematical proofs and a numerical calculation.

---

## Page 5
### Content
Questions assigned to the following page: 2.1, 2.2, and 2.3

### 2 VC Dimension [60 points]
Figure out the VC dimension of each case and justify your claims:

(a) (15 points) Let $\mathcal{X}$ be the Boolean hypercube $\{0, 1\}^n$. For a set $I \subseteq \{1, 2, \dots, n\}$ we define a parity function $h_I$ as follows. On a binary vector $\mathbf{x} = (x_1, x_2, \dots, x_n) \in \{0, 1\}^n$,
$$h_I(\mathbf{x}) = \left( \sum_{i \in I} x_i \right) \pmod 2$$
That is, $h_I$ computes the parity of bits in $I$. What is the VC dimension of the class of all such parity functions, $\mathcal{H}_{n\text{-parity}} = \{h_I : I \subseteq \{1, 2, \dots, n\}\}$?
The parity problem is a benchmark problem used to evaluate the learning capacity of various algorithms. Specifically, solving the parity problem requires a non-linear decision boundary, making it a natural testbed for exploring the expressive power of models like neural networks.
Let $\mathcal{H} = \{h_I : I \subseteq [n]\}$ with $h_I(\mathbf{x}) = (\sum_{i \in I} x_i) \pmod 2$.
Upper bound: $|\mathcal{H}| = 2^n$ (one function per subset $I$). For any $m$-point set $X$ we have $|\mathcal{H}_X| \le |\mathcal{H}| = 2^n$. If $X$ were shattered then $|\mathcal{H}_X| = 2^m$, so $2^m \le 2^n$ and $m \le n$.
Lower bound: take the $n$ standard basis vectors $S = \{e_1, \dots, e_n\}$. Given any labels $y \in \{0, 1\}^n$, set $I = \{i : y_i = 1\}$. Then $h_I(e_i) = \bigoplus_{j \in I} (e_i)_j = 1$ iff $i \in I$, so we realize $y$. Thus $S$ is shattered.
Conclusion: $VC(\mathcal{H}) = n$.

(b) (15 points) Let $\mathcal{H}$ be the class of signed intervals. That is, $\mathcal{H} = \{h_{a,b,s} : a \le b, s \in \{-1, 1\}\}$ where
$$h_{a,b,s}(x) = \begin{cases} s & \text{if } x \in [a, b] \\ -s & \text{otherwise} \end{cases}$$
Calculate $VC(\mathcal{H})$ and prove your result.
In machine learning, signed intervals can be used to model uncertainty in input data or model predictions. This is particularly important in safety-critical applications like autonomous vehicles and medical diagnosis.
$\mathcal{H} = \{h_{a,b,s} : a \le b, s \in \{-1, 1\}\}$ with $h_{a,b,s}(x) = s$ if $x \in [a, b]$ and $-s$ otherwise.
Lower bound: with two points $x_1 < x_2$ you can get all four labelings by picking $[a, b]$ appropriately (e.g., $(0, 1)$ via $s=1, [a, b] = [(x_1+x_2)/2, x_2+1]$). So 2 points are shattered.
Upper bound: for three points $x_1 < x_2 < x_3$, the pattern $(1, 0, 1)$ is impossible because the $+1$ region is a single contiguous block (either the interval or its complement), and $1-0-1$ would need two blocks. So you can't shatter 3 points.
Conclusion: $VC(\mathcal{H}) = 2$.

(c) (15 points) Given some finite domain set, $\mathcal{X}$, and a number $k \le |\mathcal{X}|$, let $\mathcal{H}_{=k}^{\mathcal{X}} = \{h \in \{0, 1\}^{\mathcal{X}} : |\{x : h(x) = 1\}| = k\}$. What is the VC dimension of $\mathcal{H}_{=k}^{\mathcal{X}}$? More intuitively, $\mathcal{H}$ is the set of functions defined on the finite domain $\mathcal{X}$ that map exactly $k$ points to 1 and all the others to 0.
These functions can be considered as a special class of Boolean functions. Studying the properties of such functions can help understand the complexity of decision trees, as each function corresponds to a particular decision tree structure.
Let $|\mathcal{X}| = N$ and $\mathcal{H}_{=k}^{\mathcal{X}} = \{h : \mathcal{X} \to \{0, 1\} : |\{x : h(x) = 1\}| = k\}$.
Upper bound: if $S \subseteq \mathcal{X}$ with $|S| = m$ is shattered, then the all-ones labeling on $S$ forces $m \le k$. The all-zeros labeling on $S$ forces all $k$ ones to live in $\mathcal{X} \setminus S$, so $N - m \ge k$ i.e. $m \le N - k$. Hence $m \le \min\{k, N - k\}$.
Lower bound: fix $m \le \min\{k, N - k\}$ and $S \subseteq \mathcal{X}$ with $|S| = m$. Take any labeling of $S$ with $t$ ones ($t \le m$). Since $t \le k$, we still need $k - t$ ones outside $S$, and there are $N - m \ge k$ spots out there, so we can pick $k - t$ of them. That extends the labeling. So every labeling of $S$ works.

3

### Visual Description
Text-only slide. This page presents Question 2 on VC Dimension, covering parts (a) parity functions, (b) signed intervals, and (c) functions with exactly $k$ ones. It includes definitions, motivations, and proofs for the VC dimension in each case.

---

## Page 6
### Content
Questions assigned to the following page: 2.3 and 2.4

Conclusion: $VC(\mathcal{H}_{=k}^{\mathcal{X}}) = \min\{k, N - k\}$.

(d) (15 points) Given some finite domain set $\mathcal{X}$, and a number $k \le |\mathcal{X}|$, let $\mathcal{H}_{\text{at-most-}k}^{\mathcal{X}} = \{h \in \{0, 1\}^{\mathcal{X}} : |\{x : h(x) = 1\}| \le k \text{ or } |\{x : h(x) = 0\}| \le k\}$. What is the VC dimension of $\mathcal{H}_{\text{at-most-}k}^{\mathcal{X}}$? More intuitively, $\mathcal{H}$ is the set of functions defined on the finite domain $\mathcal{X}$ that either map no more than $k$ points to 1 or no more than $k$ points to 0.
The ability to detect anomalies or outliers in data is crucial in various domains such as fraud detection, network security, and medical diagnosis. Functions in $\mathcal{H}$ can be used to design anomaly detection systems where the focus is on identifying a small subset of anomalies.
Let $|\mathcal{X}| = N$ and
$$\mathcal{H}_{\text{at-most-}k}^{\mathcal{X}} = \{h : \mathcal{X} \to \{0, 1\} : \#\{x : h(x) = 1\} \le k \text{ or } \#\{x : h(x) = 0\} \le k\}.$$
Lower bound: for any labeling on $m$ points we have $\min\{\#1, \#0\} \le \lfloor m/2 \rfloor$. If $m \le 2k + 1$ then $\lfloor m/2 \rfloor \le k$, so every labeling has either $\le k$ ones or $\le k$ zeros. That means every labeling is realized by one side of the union, so any $m \le \min\{2k + 1, N\}$ points are shattered.
Upper bound: on $m = 2k + 2$ points, the labeling with exactly $k + 1$ ones and $k + 1$ zeros is in neither side ("at-most-$k$ ones" fails and "at-most-$k$ zeros" fails). So you cannot shatter $2k + 2$ points.
Conclusion: $VC(\mathcal{H}_{\text{at-most-}k}^{\mathcal{X}}) = \min\{2k + 1, N\}$.

4

### Visual Description
Text-only slide. This page concludes the proof for part (c) and provides the full problem statement and proof for part (d) of Question 2, which deals with the VC dimension of functions that have at most $k$ ones or at most $k$ zeros.

---

## Page 7
### Content
[Empty]

### Visual Description
Blank page.

---
