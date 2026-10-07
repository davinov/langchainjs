---
"@langchain/mistralai": minor
---

feat(mistralai): support prompt caching

Adds a `promptCacheKey` option (constructor and call option), sent as `prompt_cache_key`, and reports cached prompt tokens as `usage_metadata.input_token_details.cache_read`.
