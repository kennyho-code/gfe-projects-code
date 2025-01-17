export interface ChatMessage {
  id: number | string;
  role: "assistant" | "user";
  content: string;
}
