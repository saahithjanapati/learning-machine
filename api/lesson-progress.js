import { getSql } from "./_lib/db.js"
import { requireSessionUser } from "./_lib/auth.js"
import { getRequestUrl, methodNotAllowed, readJsonBody, sendApiError, sendJson } from "./_lib/http.js"

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

function serializeProgress(row) {
  return {
    lessonId: row.lesson_id,
    isRead: row.is_read,
    readCount: Number(row.read_count ?? 0),
    readAt: row.read_at,
    priorityState: row.priority_state || "normal",
    isDeprioritized: row.priority_state === "deprioritized",
    priorityUpdatedAt: row.priority_updated_at,
    updatedAt: row.updated_at,
  }
}

function normalizePriorityState(value) {
  if (value === undefined || value === null) {
    return null
  }

  if (value === "normal" || value === "deprioritized") {
    return value
  }

  return ""
}

async function listProgress(response, user) {
  const sql = getSql()
  const rows = await sql`
    SELECT lesson_id, is_read, read_count, read_at, priority_state, priority_updated_at, updated_at
    FROM reader_lesson_progress
    WHERE user_id = ${user.id}
    ORDER BY (priority_state = 'deprioritized') ASC, updated_at DESC
  `

  sendJson(response, 200, {
    progress: rows.map(serializeProgress),
  })
}

async function getProgress(response, user, lessonId) {
  const sql = getSql()
  const [row] = await sql`
    SELECT lesson_id, is_read, read_count, read_at, priority_state, priority_updated_at, updated_at
    FROM reader_lesson_progress
    WHERE user_id = ${user.id}
      AND lesson_id = ${lessonId}
    LIMIT 1
  `

  sendJson(response, 200, {
    progress: row ? serializeProgress(row) : null,
  })
}

async function updateProgress(request, response, user) {
  const body = await readJsonBody(request)
  const lessonId = normalizeLessonId(body.lessonId)
  const hasIsRead = typeof body.isRead === "boolean"
  const isRead = body.isRead === true
  const incrementReadCount = hasIsRead && isRead && body.incrementReadCount === true
  const priorityState = normalizePriorityState(body.priorityState)
  const hasPriorityState = priorityState !== null

  if (!lessonId) {
    const error = new Error("A valid lessonId is required")
    error.statusCode = 400
    throw error
  }

  if (priorityState === "") {
    const error = new Error("priorityState must be normal or deprioritized")
    error.statusCode = 400
    throw error
  }

  if (!hasIsRead && !hasPriorityState) {
    const error = new Error("No progress update was provided")
    error.statusCode = 400
    throw error
  }

  const sql = getSql()
  const [row] = await sql`
    INSERT INTO reader_lesson_progress (
      user_id,
      lesson_id,
      is_read,
      read_count,
      read_at,
      priority_state,
      priority_updated_at,
      updated_at
    )
    VALUES (
      ${user.id},
      ${lessonId},
      ${hasIsRead && isRead},
      CASE WHEN ${incrementReadCount}::boolean THEN 1 ELSE 0 END,
      CASE WHEN ${hasIsRead && isRead}::boolean THEN now() ELSE NULL END,
      ${hasPriorityState ? priorityState : "normal"},
      CASE WHEN ${hasPriorityState}::boolean THEN now() ELSE NULL END,
      now()
    )
    ON CONFLICT (user_id, lesson_id) DO UPDATE SET
      is_read = CASE
        WHEN ${hasIsRead}::boolean THEN EXCLUDED.is_read
        ELSE reader_lesson_progress.is_read
      END,
      read_count = CASE
        WHEN ${incrementReadCount}::boolean THEN reader_lesson_progress.read_count + 1
        ELSE reader_lesson_progress.read_count
      END,
      read_at = CASE
        WHEN ${hasIsRead}::boolean THEN CASE WHEN EXCLUDED.is_read THEN now() ELSE NULL END
        ELSE reader_lesson_progress.read_at
      END,
      priority_state = CASE
        WHEN ${hasPriorityState}::boolean THEN ${priorityState || "normal"}
        ELSE reader_lesson_progress.priority_state
      END,
      priority_updated_at = CASE
        WHEN ${hasPriorityState}::boolean THEN now()
        ELSE reader_lesson_progress.priority_updated_at
      END,
      updated_at = now()
    RETURNING lesson_id, is_read, read_count, read_at, priority_state, priority_updated_at, updated_at
  `

  sendJson(response, 200, {
    progress: serializeProgress(row),
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

        await getProgress(response, user, lessonId)
        return
      }

      await listProgress(response, user)
      return
    }

    await updateProgress(request, response, user)
  } catch (error) {
    sendApiError(response, error, "Could not update lesson progress")
  }
}
