# March31_ICA

Source: `materials/archive/March31_ICA.pdf`
Duplicate equivalents: `March31_ICA.pdf`
Extraction engine: `Gemini API (gemini-2.5-flash) + Local PyMuPDF (fitz fallback)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `FALLBACK`
Pages: 47

## Page 1
### Content
Optimization for ML
CMU-10725
Independent Component Analysis

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 2
### Content
2
Independent Component Analysis
Application for 
• Newton Method
• Lagrange multipliers

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 3
### Content
3
Observations (Mixtures)
original signals
Model
ICA estimated signals
Independent Component Analysis

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 4
### Content
4
We observe
Model
We want
Goal:
Independent Component Analysys

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 5
### Content
5
PCA Estimation
Sources
Observation
x(t) = As(t)
s(t)
Mixing
y(t)=Wx(t)
The Cocktail Party Problem
SOLVING WITH PCA

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 6
### Content
6
ICA Estimation
Sources
Observation
x(t) = As(t)
s(t)
Mixing
y(t)=Wx(t)
The Cocktail Party Problem
SOLVING WITH ICA

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 7
### Content
7
• Perform linear transformations
• Matrix factorization
X
U
S
X
A
S
PCA: low rank matrix factorization for compression
ICA: full rank matrix factorization to remove dependency among the rows
=
=
N
N
N
M
M<N
ICA vs PCA, Similarities 
Columns of U = PCA vectors
Columns of A = ICA vectors

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 8
### Content
8
PCA basis vectors extracted from 
natural images

### Visual Description
Text extraction fallback; original layout not preserved.

---
## Page 9
### Content
9
Gabor wavelets, 
edge detection, 
receptive fields of V1 cells..., deep neural networks 
ICA basis vectors extracted from 
natural images

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 10
### Content
10
STATIC
• Image denoising
• Microarray data processing
• Decomposing the spectra of 
galaxies
• Face recognition
• Facial expression recognition
TEMPORAL
• Medical signal processing – fMRI, 
ECG, EEG 
• Brain Computer Interfaces
• Modeling of the hippocampus, 
place cells 
• Modeling of the visual cortex
• Time series analysis 
• Financial applications
• Blind deconvolution
Some ICA Applications

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 11
### Content
11
❑EEG ~ Neural cocktail party
❑Severe contamination of EEG activity by 
• eye movements 
• blinks
• muscle
• heart, ECG artifact
• vessel pulse 
• electrode noise
• line noise, alternating current (60 Hz)
❑ICA can improve signal 
• effectively detect, separate and remove activity in EEG records 
from a wide variety of artifactual sources. 
(Jung, Makeig, Bell, and Sejnowski)
❑ICA weights (mixing matrix) help find location of sources
ICA Application,
Removing Artifacts from EEG

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 12
### Content
12
Fig from Jung
ICA Application,
Removing Artifacts from EEG

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 13
### Content
13
Fig from Jung
Removing Artifacts from EEG

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 14
### Content
14
14
original
noisy
Wiener filtered
median filtered
ICA denoised
ICA for Image Denoising
(Hoyer, Hyvarinen)

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 15
### Content
15
❑Method for analysis and synthesis of human motion from 
motion captured data
❑Provides perceptually meaningful “style” components
❑109 markers, (327dim data)
❑Motion capture => data matrix 
Goal: Find motion style components.
 
 
 ICA => 6 independent components (emotion, content,…)
ICA for Motion Style Components
(Mori & Hoshino 2002, Shapiro et al 
2006, Cao et al 2003)

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 16
### Content
16
walk
sneaky
walk with sneaky
sneaky with walk

### Visual Description
Text extraction fallback; original layout not preserved.

---
## Page 17
### Content
17
ICA Theory

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 18
### Content
18
Definition (Independence)
Statistical (in)dependence
Definition (Mutual Information)
Definition (Shannon entropy)
Definition (KL divergence)

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 19
### Content
19
Solving the ICA problem with i.i.d. 
sources

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 20
### Content
20
Solving the ICA problem

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 21
### Content
21
Whitening 
(We assumed centered data)

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 22
### Content
22
Whitening (continued)
We have,

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 23
### Content
23
whitened
original
mixed
Whitening solves half of the ICA 
problem
The number of free parameters of an N by N orthogonal 
matrix is (N-1)(N-2)/2. 
Note: 
=> whitening solves half of the ICA problem

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 24
### Content
24
❑Remove mean, E[x]=0
❑Whitening, E[xxT]=I
❑Find an orthogonal W optimizing an objective function
• Sequence of 2-d Jacobi (Givens) rotations
❑find y (the estimation of s), 
❑find W (the estimation of A-1)
ICA solution: y=Wx
ICA task: Given x, 
original
mixed
whitened
rotated
(demixed)
Solving ICA

### Visual Description
Text extraction fallback; original layout not preserved.

---
## Page 25
### Content
25
p
q
p
q
Optimization Using Jacobi Rotation 
Matrices

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 26
### Content
26
ICA Cost Functions
Proof: Homework
Lemma
Therefore,

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 27
### Content
27
=> go away from normal distribution
ICA Cost Functions
Therefore,
The covariance is fixed: I. Which distribution has the largest entropy?

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 28
### Content
28
28
The sum of independent variables converges to the normal distribution
Figs from Ata Kaban
Central Limit Theorem
=> For separation go far away from the normal distribution
=> Negentropy, |kurtozis| maximization

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 29
### Content
29
Kurtosis = 4th order cumulant
Measures 
•the distance from normality
•the degree of peakedness
ICA algorithm based on Kurtosis 
maximization

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 30
### Content
30
Probably the most famous 
ICA algorithm
The Fast ICA algorithm (Hyvarinen)
(Lagrange multiplier)
Solve this equation by Newton–Raphson’s method.

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 31
### Content
31
The Fast ICA algorithm (Hyvarinen)
Solve:
The derivative of F :
Note:

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 32
### Content
32
The Fast ICA algorithm (Hyvarinen)
Therefore,
The Jacobian matrix becomes diagonal, and can easily be inverted.

### Visual Description
Text extraction fallback; original layout not preserved.

---
## Page 33
### Content
33
Independent Subspace Analysis

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 34
### Content
Independent Subspace Analysis
34

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 35
### Content
Independent Subspace Analysis
Observation
Hidden, independent 
sources (subspaces)
Estimate A and S observing samples from X=AS only
Goal:
35

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 36
### Content
Independent Subspace Analysis
In case of perfect separation, 
WA is a block permutation 
matrix.
Objective:
36
Observation
Estimation
Hidden sources

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 37
### Content
Independent Component Analysis
▪https://scikit-learn.org/stable/modules/generated/
sklearn.decomposition.FastICA.html
37
Code

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 38
### Content
Appendix
38

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 39
### Content
❑PCA: X=US, UTU=I
❑ICA: X=AS, A is invertible
❑PCA does compression 
– M<N
❑ICA does not do compression 
– same # of features (M=N)
❑PCA just removes correlations, not higher order dependence
❑ICA removes correlations, and higher order dependence
❑PCA: some components are more important than others 
 
(based on eigenvalues)
❑ICA: components are equally important
ICA vs PCA, Similarities

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 40
### Content
Note
• PCA vectors are orthogonal 
• ICA vectors are not orthogonal
ICA vs PCA

### Visual Description
Text extraction fallback; original layout not preserved.

---
## Page 41
### Content
ICA vs PCA

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 42
### Content
Using
Estimate divergence
RÉNYI DIVERGENCE ESTIMATION
without density estimation 
42

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 43
### Content
The Estimator
43

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 44
### Content
44
Using
Estimate Rényi entropy
without density estimation 
ENTROPY ESTIMATION

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 45
### Content
Rényi- entropy estimators using kNN graphs
Calculate:
Pál, Póczos & Szepesvári. NIPS 2010 
45

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 46
### Content
Theoretical Results
Pál, Póczos & Szepesvári, NIPS 2010 
Convergence rate
Almost surely consistent
46

### Visual Description
Text extraction fallback; original layout not preserved.

---

## Page 47
### Content
47
Thanks for your Attention!

### Visual Description
Text extraction fallback; original layout not preserved.

---
