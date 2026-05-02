# lecture-07

Source: `materials/archive/survey-of-algebra/local-pdfs/lecture-07.pdf`
Duplicate equivalents: `lecture-07.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `MAX_TOKENS`
Pages: 4

## Page 1
### Content
# 7. CONGRUENCES (CONTINUED)

We continue with an application of congruences that we started last time. Recall that the following lemma was proved at the end of Lecture 6:

**Lemma 6.6.** For any $x \in \mathbb{Z}$ we have $x^2 \equiv 0$ or $1 \pmod 4$.

We now use this lemma to prove the following interesting result.

**Proposition 7.1.** Let $n$ be an integer of the form $4k + 3$ for some $k \in \mathbb{Z}$. Then $n$ is not representable as a sum of two squares, that is, there are no $a, b \in \mathbb{Z}$ such that $n = a^2 + b^2$.

*Proof.* We argue by contradiction. Suppose $n = a^2 + b^2$ for some $a, b \in \mathbb{Z}$. By Lemma 6.6 we have $a^2 \equiv 0$ or $1 \pmod 4$ and $b^2 \equiv 0$ or $1 \pmod 4$, whence by Theorem 6.3,
$$n = a^2 + b^2 \equiv \begin{cases} 0 + 0 = 0 & \text{or} \\ 0 + 1 = 1 & \text{or} \\ 1 + 1 = 2 \end{cases} \pmod 4.$$
On the other hand, by our original hypothesis $n \equiv 3 \pmod 4$. This is a contradiction since 0, 1 and 2 are not congruent to 3 mod 4 (and since congruence relation is transitive). $\square$

Note that every odd integer is either of the form $4k + 1$ or $4k + 3$ for some $k$, and in view of the above proposition one may wonder if every positive integer of the form $4k + 1$ is representable as a sum of two squares. This is not true in general (for instance, 21 is not representable); however, quite surprisingly, it is true for primes:

**Theorem 7.2 (Euler-Fermat).** Every prime of the form $4k + 1$ is representable as a sum of two squares.

This result is beyond the scope of this course, but it is typically proved in number theory courses.

### 7.1. Solving systems of linear congruences.
We start with the following question:

**Question.** Let $a, b, n, m \in \mathbb{Z}$ with $n, m \ge 2$. Does there exist $x \in \mathbb{Z}$ such that $x \equiv a \pmod n$ and $x \equiv b \pmod m$?

The answer to this question in general is clearly negative. For instance, the system of congruences $x \equiv 1 \pmod 4$ and $x \equiv 2 \pmod 6$ has no solutions,

1
### Visual Description
Text-only slide.

---
## Page 2
### Content
2
as $x \equiv 1 \pmod 4$ means that $x$ has to be odd while $x \equiv 2 \pmod 6$ forces $x$ to be even.

However, the solution always exists if $n$ and $m$ are coprime. We start with an example and then formulate a general result.

**Example 1.** Find the general solution to the following system of congruences:
$$\begin{cases} x \equiv 2 \pmod{15} \\ x \equiv 9 \pmod{17} \end{cases}$$

We know that the general solution to the second congruence is $x = 9 + 17k$ for some $k \in \mathbb{Z}$. Thus, we can proceed by substituting $9 + 17k$ for $x$ in the first congruence, solving the resulting congruence in $k$ (using the method we discussed last time) and finally substituting the obtained formula for $k$ in the equation $x = 9
