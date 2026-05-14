import { getSql } from "./_lib/db.js"
import { requireSessionUser } from "./_lib/auth.js"
import { getRequestUrl, methodNotAllowed, readJsonBody, sendApiError, sendJson } from "./_lib/http.js"

const MAX_NOTE_MARKDOWN_CHARS = 24000
const MAX_LESSON_TITLE_CHARS = 300
const MAX_LESSON_URL_CHARS = 900

function normalizeLessonId(value) {
  if (typeof value !== "string") {
    return ""
  }

  const normalized = value.trim().replace(/^\/+|\/+$/g, "")

  if (
    !normalized ||
    normalized.length > 800 ||
    normalized.includes("..") ||
    /[\u0000-\u001f]/.test(normalized)
  ) {
    return ""
  }

  return normalized
}

function normalizeText(value, maxLength) {
  if (typeof value !== "string") {
    return ""
  }

  return value.trim().slice(0, maxLength)
}

function normalizeNoteMarkdown(value) {
  if (typeof value !== "string") {
    return ""
  }

  if (value.length > MAX_NOTE_MARKDOWN_CHARS) {
    const error = new Error(`Markdown note must be ${MAX_NOTE_MARKDOWN_CHARS} characters or fewer`)
    error.statusCode = 400
    throw error
  }

  return value
}

function normalizeLessonUrl(value, lessonId) {
  const fallback = `/${lessonId}/`

  if (typeof value !== "string") {
    return fallback
  }

  const normalized = value.trim().slice(0, MAX_LESSON_URL_CHARS)

  if (
    !normalized.startsWith("/") ||
    normalized.startsWith("//") ||
    normalized.startsWith("/api/") ||
    normalized.includes("..") ||
    /[\u0000-\u001f]/.test(normalized)
  ) {
    return fallback
  }

  return normalized
}

function serializeNote(row) {
  return {
    lessonId: row.lesson_id,
    lessonTitle: row.lesson_title,
    lessonUrl: row.lesson_url,
    noteMarkdown: row.note_markdown,
    reviewSaved: row.review_saved,
    reviewSavedAt: row.review_saved_at,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  }
}

function emptyNote({ lessonId, lessonTitle, lessonUrl }) {
  return {
    lessonId,
    lessonTitle,
    lessonUrl,
    noteMarkdown: "",
    reviewSaved: false,
    reviewSavedAt: null,
    createdAt: null,
    updatedAt: null,
  }
}

async function getLessonNote(response, user, lessonId) {
  const sql = getSql()
  const [row] = await sql`
    SELECT
      lesson_id,
      lesson_title,
      lesson_url,
      note_markdown,
      review_saved,
      review_saved_at,
      created_at,
      updated_at
    FROM reader_lesson_notes
    WHERE user_id = ${user.id}
      AND lesson_id = ${lessonId}
    LIMIT 1
  `

  sendJson(response, 200, {
    note: row ? serializeNote(row) : null,
  })
}

async function listLessonNotes(response, user) {
  const sql = getSql()
  const rows = await sql`
    SELECT
      lesson_id,
      lesson_title,
      lesson_url,
      note_markdown,
      review_saved,
      review_saved_at,
      created_at,
      updated_at
    FROM reader_lesson_notes
    WHERE user_id = ${user.id}
      AND (review_saved OR length(btrim(note_markdown)) > 0)
    ORDER BY review_saved DESC, COALESCE(review_saved_at, updated_at) DESC
    LIMIT 500
  `

  sendJson(response, 200, {
    notes: rows.map(serializeNote),
  })
}

async function updateLessonNote(request, response, user) {
  const body = await readJsonBody(request)
  const lessonId = normalizeLessonId(body.lessonId)

  if (!lessonId) {
    const error = new Error("A valid lessonId is required")
    error.statusCode = 400
    throw error
  }

  const noteMarkdown = normalizeNoteMarkdown(body.noteMarkdown)
  const lessonTitle = normalizeText(body.lessonTitle, MAX_LESSON_TITLE_CHARS) || lessonId
  const lessonUrl = normalizeLessonUrl(body.lessonUrl, lessonId)
  const reviewSaved = body.reviewSaved === true
  const sql = getSql()

  if (!noteMarkdown.trim() && !reviewSaved) {
    await sql`
      DELETE FROM reader_lesson_notes
      WHERE user_id = ${user.id}
        AND lesson_id = ${lessonId}
    `

    sendJson(response, 200, {
      note: emptyNote({ lessonId, lessonTitle, lessonUrl }),
    })
    return
  }

  const [row] = await sql`
    INSERT INTO reader_lesson_notes (
      user_id,
      lesson_id,
      lesson_title,
      lesson_url,
      note_markdown,
      review_saved,
      review_saved_at,
      updated_at
    )
    VALUES (
      ${user.id},
      ${lessonId},
      ${lessonTitle},
      ${lessonUrl},
      ${noteMarkdown},
      ${reviewSaved},
      CASE WHEN ${reviewSaved}::boolean THEN now() ELSE NULL END,
      now()
    )
    ON CONFLICT (user_id, lesson_id) DO UPDATE SET
      lesson_title = EXCLUDED.lesson_title,
      lesson_url = EXCLUDED.lesson_url,
      note_markdown = EXCLUDED.note_markdown,
      review_saved = EXCLUDED.review_saved,
      review_saved_at = CASE
        WHEN EXCLUDED.review_saved THEN COALESCE(reader_lesson_notes.review_saved_at, now())
        ELSE NULL
      END,
      updated_at = now()
    RETURNING
      lesson_id,
      lesson_title,
      lesson_url,
      note_markdown,
      review_saved,
      review_saved_at,
      created_at,
      updated_at
  `

  sendJson(response, 200, {
    note: serializeNote(row),
  })
}

export default async function handler(request, response) {
  if (!["GET", "PUT", "POST"].includes(request.method)) {
    methodNotAllowed(response, ["GET", "PUT", "POST"])
    return
  }

  try {
    const user = await requireSessionUser(request)

    if (request.method === "GET") {
      const requestUrl = getRequestUrl(request)

      if (requestUrl.searchParams.has("lessonId")) {
        const lessonId = normalizeLessonId(requestUrl.searchParams.get("lessonId"))

        if (!lessonId) {
          const error = new Error("A valid lessonId is required")
          error.statusCode = 400
          throw error
        }

        await getLessonNote(response, user, lessonId)
        return
      }

      await listLessonNotes(response, user)
      return
    }

    await updateLessonNote(request, response, user)
  } catch (error) {
    sendApiError(response, error, "Could not update lesson notes")
  }
}
