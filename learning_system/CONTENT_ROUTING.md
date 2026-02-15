# Content Routing

Use this when new materials are uploaded.

## Routing Modes

1. `unified-topic`
- Use for all materials.
- Path pattern:
  - `topics/<root>/<topic>/...`
- `<root>` selection:
  - default: use domain (`transformers`, `optimization`, `probability`)
  - class-specific: use class name (`cs229`, `ee364a`)

## Required Metadata For New Uploads

- `topic`: short slug (example: `kv-caching`, `bayes-rule`)
- `root`: domain or class name

## Routing Examples

- "This PDF is for CS229 lecture 3"
  - `topics/cs229/gradient-descent/...`

- "This is for my own transformers study"
  - `topics/transformers/attention/...`

## Similar Topic Matching

When a new topic name is close to an existing one:
- suggest the closest match and ask for confirmation,
- if not confirmed, create a new topic path.
