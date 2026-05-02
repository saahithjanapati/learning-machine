---
title: "10-715 Source Ingest Overview"
---

# 10-715 Source Ingest Overview

The 10-715 Advanced Introduction to Machine Learning course materials have been ingested into Learning Machine under `advanced-machine-learning-10-715-cmu`.

## What Was Ingested

- 72 Piazza resource records from the Fall 2025 10-715 resources page.
- 57 PDFs from Piazza resources or resolved public paper links.
- 7 valid homework handout PDFs extracted from ZIP archives.
- 12 available Gradescope graded-copy PDFs from homework, code, midterm, and final submissions.
- 76 processed PDF transcripts.
- 6 homework ZIPs, 6 programming submission ZIPs, 7 PPTX files, and 1 recitation notebook archived as source assets.
- Previous-year midterm and final exams, including solution files where posted.

## Where To Look

- Processed transcripts: `materials/processed/advanced-machine-learning-10-715-cmu/`
- Source archive: `materials/archive/advanced-machine-learning-10-715-cmu/`
- Piazza resource manifest: `materials/processed/advanced-machine-learning-10-715-cmu/_piazza_resources_manifest.md`
- Gradescope dashboard manifest: `materials/processed/advanced-machine-learning-10-715-cmu/_gradescope_dashboard.md`
- Ingest report: `materials/processed/advanced-machine-learning-10-715-cmu/_INGEST_REPORT.md`

## Known Gap

The HW6 Piazza resource points to a CMU Box link. Automated download redirected to CMU Box login, so the link was recorded in the manifest but no HW6 file was downloaded.

HW5 Code and HW7 Code in Gradescope show `Submitted` without numeric scores. Their graded PDF endpoints returned `Internal Server Error`; the programming source ZIPs were archived, but no graded-copy PDFs were available for those two rows.

## Suggested Next Use

Use the lecture sequence for a first-pass course map, then use the homework handouts, graded copies, and previous-year exams to generate targeted proof, derivation, and error-audit practice.
