# Skill Graph

Use this as a lightweight skill tree. Status values:
- `not_started`
- `learning`
- `practicing`
- `solid`

## Transformers

| Node | Depends On | Status | Evidence |
|---|---|---|---|
| Attention basics (Q, K, V, softmax weighting) | - | solid | KV cache exercises completed |
| Causal attention (prefix-only context) | Attention basics | solid | Correct `forward_full` reasoning |
| KV cache (single-head, batch=1) | Causal attention | solid | `practice/kv_cache_exercise.py` passes |
| KV cache (batched multi-head [B,H,T,D]) | KV cache single-head | solid | `practice/kv_cache_exercise_batched_multihead.py` passes |
| Prefill vs decode-time caching | KV cache single-head | learning | Concept discussed, no dedicated exercise yet |
| Cache efficiency (preallocation, in-place updates) | KV cache batched multi-head | not_started | No benchmark/implementation yet |
| Positional encoding with cache (RoPE/ALiBi) | KV cache batched multi-head | not_started | No implementation yet |

## Suggested Next Unlocks

1. Implement prefill + decode split API.
2. Add preallocated cache buffers and token index writes.
3. Add causal masking in a fully vectorized training forward path.
4. Add RoPE and verify cache correctness across decode steps.

