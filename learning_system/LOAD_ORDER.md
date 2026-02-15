# Context Load Order

For a new assistant instance, load files in this order:

1. `learning_system/STARTUP_CONTEXT.md`
2. `AGENT.md`
3. `learning_system/TOPIC_INDEX.md`
4. `learning_system/SOURCE_MAP.json`
5. `learning_system/LESSON_INDEX.md`
6. `learning_system/PROGRESS_LOG.md`
7. `learning_system/SKILL_GRAPH.md`
8. `learning_system/CLI_HELP.md`
9. `AGENTS.md`

Then load topic-specific files as needed:
- `topics/<root>/<topic>/README.md`
- `topics/<root>/<topic>/curriculum/*.md`
- `topics/<root>/<topic>/lessons/*.md`
- `topics/<root>/<topic>/practice/*`

For startup UX:
- invoke startup skill behavior from `skills/learning-startup-resume/SKILL.md`
