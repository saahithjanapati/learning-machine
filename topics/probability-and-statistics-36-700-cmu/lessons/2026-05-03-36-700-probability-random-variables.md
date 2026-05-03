# 36-700 Lesson: Probability Foundations And Random Variables

Source note: Based on the 36-700 processed notes for Chapter 1 probability basics and Chapter 2 random variables and distributions. Ingested on 2026-05-03.

## Table of Contents

- [Start With Experiments](#start-with-experiments)
- [Events And Probability Laws](#events-and-probability-laws)
- [Conditional Probability](#conditional-probability)
- [Independence](#independence)
- [Random Variables](#random-variables)
- [CDFs, PMFs, And PDFs](#cdfs-pmfs-and-pdfs)
- [What To Remember](#what-to-remember)
- [Quick Check](#quick-check)

## Start With Experiments

Probability starts with an experiment: a measurement of a random process.

The set of all possible outcomes is the sample space, usually written $\Omega$.

If you toss a coin once,

$$
\Omega = \{H,T\}.
$$

If you toss a coin twice,

$$
\Omega = \{HH,HT,TH,TT\}.
$$

An event is a subset of the sample space. For example, "at most one head" in two tosses is

$$
\{HT,TH,TT\}.
$$

This set-based language is not decoration. It is what makes probability precise.

## Events And Probability Laws

A probability distribution assigns numbers to events. It obeys three core rules:

1. probabilities are nonnegative;
2. $\mathbb{P}(\Omega)=1$;
3. disjoint events add.

From these axioms, you get useful tools:

$$
\mathbb{P}(A^c)=1-\mathbb{P}(A),
$$

$$
\mathbb{P}(A\cup B)=\mathbb{P}(A)+\mathbb{P}(B)-\mathbb{P}(A\cap B),
$$

and the union bound:

$$
\mathbb{P}\left(\bigcup_{i=1}^n A_i\right)\le \sum_{i=1}^n \mathbb{P}(A_i).
$$

For a finite uniform sample space,

$$
\mathbb{P}(A)=\frac{|A|}{|\Omega|}.
$$

That formula is useful, but only when outcomes are equally likely. If probabilities are nonuniform, you add the probabilities of the individual outcomes in the event.

## Conditional Probability

Conditional probability updates the probability of one event after learning another event occurred.

If $\mathbb{P}(B)>0$, then

$$
\mathbb{P}(A|B)=\frac{\mathbb{P}(A\cap B)}{\mathbb{P}(B)}.
$$

The denominator matters: once you know $B$ occurred, the world has narrowed to $B$. You are asking what fraction of that narrowed world also lies in $A$.

The same formula gives the chain rule:

$$
\mathbb{P}(A\cap B)=\mathbb{P}(B)\mathbb{P}(A|B)
=\mathbb{P}(A)\mathbb{P}(B|A).
$$

Bayes' rule comes from equating the two expressions:

$$
\mathbb{P}(A|B)=\frac{\mathbb{P}(B|A)\mathbb{P}(A)}{\mathbb{P}(B)}.
$$

This is the backbone of Bayesian updating and many statistical calculations.

## Independence

Two events are independent if learning one does not change the probability of the other.

Formally,

$$
\mathbb{P}(A\cap B)=\mathbb{P}(A)\mathbb{P}(B).
$$

Equivalently, if $\mathbb{P}(B)>0$,

$$
\mathbb{P}(A|B)=\mathbb{P}(A).
$$

A common trap: disjoint does not mean independent. If two nonempty events are disjoint, knowing one occurred makes the other impossible. That is strong dependence, not independence.

## Random Variables

A random variable is a function from outcomes to numbers.

If you toss a coin three times and let $X$ be the number of heads, then $X$ maps each sequence to a count:

- $HHH \mapsto 3$;
- $HHT \mapsto 2$;
- $TTT \mapsto 0$.

The random variable turns a distribution over outcomes into a distribution over numbers. This induced distribution is what we usually work with.

This is why random variables are so central. In statistics, data are usually numerical summaries or measurements, not raw sample-space outcomes.

## CDFs, PMFs, And PDFs

Every random variable has a cumulative distribution function:

$$
F_X(x)=\mathbb{P}(X\le x).
$$

For a discrete random variable, the probability mass function is

$$
f_X(x)=\mathbb{P}(X=x).
$$

For a continuous random variable, point probabilities are zero, so we use a density $f_X$ satisfying

$$
F_X(x)=\int_{-\infty}^x f_X(t)\,dt.
$$

If $F_X$ is differentiable, then

$$
f_X(x)=F_X'(x).
$$

Discrete distributions put probability on points. Continuous distributions put probability over intervals. That is why $\mathbb{P}(X=x)=0$ can coexist with $\mathbb{P}(a<X<b)>0$.

## What To Remember

The first unit of 36-700 gives the grammar for everything later:

- events make probability precise;
- conditioning changes the reference world;
- independence means multiplication, not separation;
- random variables turn outcomes into numerical quantities;
- CDFs describe distributions universally;
- PMFs and PDFs are two different ways probability can be represented.

If these are shaky, estimation and testing will feel like memorized recipes. If these are solid, inference becomes a natural extension.

## Quick Check

1. What is the sample space for two dice rolls?
2. Why is $\mathbb{P}(A|B)$ not usually equal to $\mathbb{P}(B|A)$?
3. Give an example of two disjoint events that are not independent.
4. What is a random variable as a function?
5. Why does a continuous random variable have probability zero at a point?
