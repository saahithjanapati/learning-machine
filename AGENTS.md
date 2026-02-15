<INSTRUCTIONS>
## Skills
A skill is a reusable instruction set stored in `SKILL.md`.

### Available skills
- learning-repo-orchestrator: Umbrella skill for startup help, recent-topic resume, topic indexing/tree regeneration, reorg reports, and topic merge/create workflows. (file: `skills/learning-repo-orchestrator/SKILL.md`)
- learning-startup-resume: Startup help menu + recent topic resume flow. (file: `skills/learning-startup-resume/SKILL.md`)
- topic-tree-manager: Hierarchical topic/subtopic creation, reindexing, and merge workflows. (file: `skills/topic-tree-manager/SKILL.md`)
- materials-to-curriculum: Convert uploaded materials to markdown and build curriculum/lesson plans. (file: `skills/materials-to-curriculum/SKILL.md`)
- adaptive-session-tutor: Learner-directed adaptive tutoring (`learn`/`practice`/`mixed` + in-depth mode). (file: `skills/adaptive-session-tutor/SKILL.md`)
- skill-catalog-manager: Create/split/merge skills and maintain capability boundaries. (file: `skills/skill-catalog-manager/SKILL.md`)

### How to use skills
- Trigger when user names a skill or asks for behavior that matches a skill description.
- Read only the required skill files and minimal related context.
- Prefer natural-language skill invocation over asking users to run shell commands.
- For risky operations (topic merge apply), run a dry-run first and require explicit confirmation.
</INSTRUCTIONS>
