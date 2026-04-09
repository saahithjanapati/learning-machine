# system_design

Source: `materials/archive/system_design.txt`
Extraction engine: `manual structured ingest`
Strategy: `plain-text normalization and curriculum mapping`

## Summary

This source frames an ML system design interview around building a data engine for a very large unlabeled corpus. The main loop is:

1. discover useful candidate examples,
2. decide what is worth labeling,
3. label it reliably,
4. retrain or update the system,
5. measure whether the loop improves quality without polluting the dataset.

The emphasis is on problem definition, mining strategy, annotation quality, and evaluation discipline rather than model novelty for its own sake.

## Topic Areas

### 1. Problem framing

- Define what "novel" means relative to the current dataset, taxonomy, or model failures.
- Tie the notion of novelty to a business or modeling objective.
- Name hard constraints early: budget, latency, privacy, compliance, annotation bandwidth, and evaluation requirements.

Novelty subtypes called out in the source:

- Distributional novelty
- Semantic novelty
- Label-space novelty
- Failure-driven novelty
- Long-tail novelty
- Compositional novelty

### 2. Understanding the unlabeled corpus

- Inspect data sources and available metadata.
- Identify quality problems, source imbalance, duplicates, and near-duplicates.
- Separate genuinely novel data from low-quality or regulated content.

Key warning: apparent novelty may just be noise, duplication, or source bias.

### 3. Novelty detection and OOD detection

Candidate families:

- Embedding-distance methods
- Uncertainty-based methods
- Density or generative methods
- Classical anomaly detection
- Cluster-based discovery

Key distinction: isolated point anomalies are often junk, while dense novel regions are often much higher value.

### 4. Representation learning and retrieval

- The mining loop depends heavily on embedding quality.
- Use nearest-neighbor retrieval and ANN/vector search to expand seeds and explore uncovered regions.
- Poor representation quality can break the full candidate-generation stage.

### 5. Bootstrapping from little labeled data

Suggested loop:

1. start from a trusted seed set,
2. expand through mining or weak supervision,
3. annotate carefully,
4. retrain,
5. repeat.

Methods mentioned:

- Seed set expansion
- Weak supervision
- Pseudo-labeling and self-training
- Positive-unlabeled learning
- Human-in-the-loop expansion

### 6. Sampling strategy

Selection options:

- Random sampling
- Stratified sampling
- Uncertainty sampling
- Diversity sampling
- Hard negative mining
- Coverage-driven sampling
- Hybrid strategies

Key distinction: uncertainty finds hard examples, while diversity reduces wasted budget on near-duplicates.

### 7. Active learning

- Label the most informative examples instead of sampling randomly.
- Use methods such as query-by-committee, expected error reduction, expected model change, and core-set selection.
- Watch for the failure mode where the loop overfocuses on ambiguous junk.

### 8. Clustering and cluster analysis

- Use clustering to discover dense semantic regions, new subclasses, or systematic coverage gaps.
- Prefer large, dense, low-coverage clusters over isolated oddities when deciding what to label first.

Methods mentioned:

- k-means
- hierarchical clustering
- DBSCAN or HDBSCAN
- graph-based clustering

### 9. Annotation strategy and quality control

- Write clear guidelines with positive and negative examples.
- Handle edge cases and abstain flows explicitly.
- Add reviewer workflows, expert adjudication, spot checks, and gold examples.
- Track inter-annotator agreement.

Key warning: forcing annotators into the existing taxonomy can erase real novelty.

### 10. Taxonomy and label-space evolution

- Decide when to add, split, or merge classes.
- Consider hierarchical labels or open-set handling when the flat taxonomy is too weak.
- Avoid oversized "other" buckets.

Key idea: the right system improvement may be a schema change, not just more data collection.

### 11. Experimentation and validation

Evaluate at two levels:

- Pipeline quality
- Downstream model impact

Pipeline metrics:

- Precision of surfaced candidates
- Annotation acceptance rate
- Diversity
- Coverage increase
- Cluster discovery rate

Downstream metrics:

- Accuracy, F1, AUROC, AUPRC
- Rare-class performance
- Robustness under shift
- Calibration
- Slice-based performance

### 12. Metrics and slice-based evaluation

- Do not rely on a single global metric.
- Evaluate by rare cases, source domains, languages, time periods, OOD buckets, and safety slices.
- Keep train, dev, and test separation clean to avoid contamination from the mining loop.

## Interview Through-Line

A strong answer built from this material should move in this order:

1. define novelty and the business objective,
2. audit the corpus and representation quality,
3. design candidate mining and sampling,
4. design annotation and taxonomy handling,
5. define evaluation and iteration criteria.
