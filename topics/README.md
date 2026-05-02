# Topics

This directory is the learner-facing subject tree. Use `learning_system/TOPIC_INDEX.md` for machine-readable routing and this file for the human/agent overview.

## Current Roots

| Root | Scope | Main Entry |
|---|---|---|
| `ai` | AI papers, agent research, safety/evals notes, and related reading lessons. | [ai/README.md](ai/README.md) |
| `biology` | Biology review material, currently organized under the `core` course. | [biology/README.md](biology/README.md) |
| `interviews` | Interview-prep tracks, currently ML system design. | [interviews/README.md](interviews/README.md) |
| `optimization-for-ml` | Optimization for ML course catch-up, proofs, and problem-solving. | [optimization-for-ml/README.md](optimization-for-ml/README.md) |
| `probabilistic-graphical-models` | PGM course catch-up and related probabilistic/generative modeling topics. | [probabilistic-graphical-models/README.md](probabilistic-graphical-models/README.md) |
| `transformers` | Transformer architecture topics, currently KV caching. | [transformers/README.md](transformers/README.md) |

## Conventions

- Use `topics/<root>/` for root-wide material that spans multiple subtopics.
- Use `topics/<root>/<topic>/` for focused topic tracks.
- Common child folders are `curriculum/`, `lessons/`, `live-chats/`, `practice/`, and `materials/`.
- Keep raw or converted source transcripts under `materials/processed/<root>/`, not inside `topics/`.
- Run `python scripts/learning_cli.py reindex --write-skill-tree` after adding or moving topic folders.

## Reorganization Policy

Subject moves should be planned before they are applied. For merge-like changes, run:

```bash
python scripts/learning_cli.py merge-topic --from <src> --into <dst>
```

Apply the merge only after the user confirms the exact paths.
