# Optimization for ML Catch-Up Lesson 01

Date: 2026-02-15
Mode: bootstrapping (exposition-heavy)

## Objective

Build a coherent mental model of the course timeline and core optimization vocabulary before diving into proofs/coding.

## Covered Material

- Course structure and module map from intro/logistics
- What convex optimization tries to guarantee (global minima tractability)
- Why matrix tools and gradient methods appear early
- Why subgradients/projected methods are needed for real ML objectives

## Lesson Flow

1. Big picture (20 min)
- map the course into 5 buckets: convex setup, linear algebra, GD, nonsmooth methods, constrained methods

2. Core concepts (40 min)
- optimization objective and constraints
- convex set vs convex function
- smooth vs nonsmooth objective
- unconstrained vs constrained algorithm choices

3. Guided checks (30 min)
- classify 8 examples as convex/non-convex (set/function)
- short explainers: when does vanilla GD fail? why projection helps?

4. Homework-lite (self-study)
- read: `Jan15_ConvexSets.md` pages with definitions/examples
- read: `Jan20_ConvexFunctions.md` pages on first-order characterization
- produce 10-question FAQ from your confusion points

## Next Session Plan

Move to targeted practice on convex set/function identification and first-order test usage.
