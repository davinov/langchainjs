import { describe, expectTypeOf, it } from "vitest";
import type { ChatCompletionRequest } from "@mistralai/mistralai/models/components/chatcompletionrequest.js";
import type { ChatCompletionStreamRequest } from "@mistralai/mistralai/models/components/chatcompletionstreamrequest.js";
import type {
  ChatMistralAICallOptions,
  ChatMistralAIInput,
} from "../chat_models.js";

describe("promptCacheKey", () => {
  it("is accepted by the constructor and per call", () => {
    expectTypeOf<ChatMistralAIInput>()
      .toHaveProperty("promptCacheKey")
      .toEqualTypeOf<string | undefined>();
    expectTypeOf<ChatMistralAICallOptions>()
      .toHaveProperty("promptCacheKey")
      .toEqualTypeOf<string | undefined>();
  });

  it("is forwarded as a key the Mistral SDK accepts", () => {
    expectTypeOf<string>().toExtend<
      NonNullable<ChatCompletionRequest["promptCacheKey"]>
    >();
    expectTypeOf<string>().toExtend<
      NonNullable<ChatCompletionStreamRequest["promptCacheKey"]>
    >();
  });
});
