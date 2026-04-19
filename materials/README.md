# Materials Ingestion

Use this folder for source study materials (PDFs, slides, notes) and extracted Markdown.

## Layout

- `materials/inbox/`
  - Place raw uploads here (PDF, DOCX export, copied notes).
  - Git policy: ignored (not committed).
- `materials/archive/`
  - Processed source files moved out of inbox for provenance.
  - Git policy: ignored (not committed).
- `materials/processed/`
  - Markdown extracted from source files.
  - Git policy: committed.

## PDF -> Markdown (Gemini API Default)

Workflow:

1. Put a PDF in `materials/inbox/`.
2. Ask the assistant to convert it to markdown.
3. Assistant saves output to `materials/processed/<file>.md`.
4. Assistant automatically runs post-ingest maintenance:
   - archives processed source PDFs to `materials/archive/`,
   - updates transcript `Source:` paths,
   - refreshes `learning_system/SOURCE_MAP.json`.

Engine policy:
- Default conversion engine is Gemini API (`GEMINI_INGEST_MODEL`).
- API key is read from `.env.local` (`GEMINI_API_KEY`).
- Default strategy is whole-PDF conversion in one Gemini call.
- If output is truncated or request fails, fallback to chunked conversion.

No user-run conversion script is required for this workflow.

## After Extraction

1. Create or update a curriculum doc using [learning_system/templates/CURRICULUM_TEMPLATE.md](../learning_system/templates/CURRICULUM_TEMPLATE.md).
2. Create a lesson plan using [learning_system/templates/LESSON_PLAN_TEMPLATE.md](../learning_system/templates/LESSON_PLAN_TEMPLATE.md).
3. Track outcomes in [learning_system/PROGRESS_LOG.md](../learning_system/PROGRESS_LOG.md).
