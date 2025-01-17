import { OpenAIService } from "@/services/openai";
import useApiKey from "./useOpenAiApiKey";
import { useEffect } from "react";

export const useOpenAI = () => {
  const { apiKey, isLoading, isKeyValid } = useApiKey();

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (!isKeyValid) {
      throw new Error("API key is not set");
    }
  }, [isKeyValid, isLoading]);

  return new OpenAIService(apiKey as string);
};
