---
"@langchain/mistralai": patch
---

fix(mistralai): report token usage in streamEvents

The SDK camelCases usage counts, but the OpenAI stream converter reads snake_case, so `streamEvents` reported 0 input, output and total tokens.
