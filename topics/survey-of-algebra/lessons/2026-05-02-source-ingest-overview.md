---
title: "Survey of Algebra Source Ingest Overview"
---

# Survey of Algebra Source Ingest Overview

The local Survey of Algebra materials have been ingested into Learning Machine under `survey-of-algebra`.

## What Was Ingested

- 41 PDFs found in `/Users/saahithjanapati/Desktop/other/survey_of_algebra`.
- 33 unique PDF contents copied for ingest after exact duplicate detection.
- 8 exact duplicate PDFs skipped.
- 33 processed PDF transcripts.
- 143 unique PDF pages.

## Where To Look

- Processed transcripts: `materials/processed/survey-of-algebra/`
- Source archive: `materials/archive/survey-of-algebra/local-pdfs/`
- Source manifest: `materials/archive/survey-of-algebra/source-manifest.json`
- Local source manifest: `materials/processed/survey-of-algebra/_local_source_manifest.md`
- Ingest report: `materials/processed/survey-of-algebra/_INGEST_REPORT.md`

## Notes

Some same-number files were exact duplicates and were skipped. Others had different contents despite similar names, so they were preserved as variants, such as `lecture-02-variant-1.md`, `lecture-11-variant-1.md`, and `lecture-17-variant-1.md`.

The copied `lecture-17.pdf` needed repair before ingest because PyMuPDF failed while slicing it for Gemini. The original file in the source folder was not modified.

The source folder also contained several stochastic-process lectures, including Markov chains, martingales, and Brownian motion. They were ingested because they were part of the requested local folder.
