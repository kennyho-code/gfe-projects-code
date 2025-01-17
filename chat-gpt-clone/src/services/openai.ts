interface OpenAIResponse {
  id: string;
  choices: {
    message: {
      content: string;
      role: string;
    };
    finish_reason: string;
    index: number;
  }[];
  created: number;
  model: string;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

class OpenAIError extends Error {
  constructor(
    message: string,
    public status?: number,
  ) {
    super(message);
    this.name = "OpenAIError";
  }
}

export class OpenAIService {
  private apiKey: string;
  private baseUrl = "https://api.openai.com/v1";
  private model = "gpt-3.5-turbo";

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  private async fetch<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new OpenAIError(
        `OpenAI API error: ${response.statusText}`,
        response.status,
      );
    }

    return response.json();
  }

  async createChatCompletion(
    messages: ChatMessage[],
    options: {
      temperature?: number;
      max_tokens?: number;
      stream?: boolean;
    } = {},
  ): Promise<OpenAIResponse> {
    try {
      return await this.fetch<OpenAIResponse>("/chat/completions", {
        method: "POST",
        body: JSON.stringify({
          model: this.model,
          messages,
          temperature: options.temperature ?? 0.7,
          max_tokens: options.max_tokens ?? 1000,
          stream: options.stream ?? false,
        }),
      });
    } catch (error) {
      if (error instanceof OpenAIError) {
        throw error;
      }
      throw new OpenAIError(
        "Failed to create chat completion: " + (error as Error).message,
      );
    }
  }

  // Stream response handler
  async *createChatCompletionStream(
    messages: ChatMessage[],
    options: {
      temperature?: number;
      max_tokens?: number;
    } = {},
  ): AsyncGenerator<string, void, unknown> {
    const response = await fetch(`${this.baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model: this.model,
        messages,
        temperature: options.temperature ?? 0.7,
        max_tokens: options.max_tokens ?? 1000,
        stream: true,
      }),
    });

    if (!response.ok) {
      throw new OpenAIError(
        `OpenAI API error: ${response.statusText}`,
        response.status,
      );
    }

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    if (!reader) {
      throw new OpenAIError("Response body is null");
    }

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      const lines = chunk.split("\n");

      for (const line of lines) {
        if (line.startsWith("data: ") && line !== "data: [DONE]") {
          const jsonData = JSON.parse(line.replace("data: ", ""));
          yield jsonData.choices[0]?.delta?.content || "";
        }
      }
    }
  }
}
