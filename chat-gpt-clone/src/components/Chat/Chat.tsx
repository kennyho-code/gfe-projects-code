import { twMerge } from "tailwind-merge";

import { useEffect, useRef, useState } from "react";
import DefaultChat from "./DefaultChat";
import { useOpenAI } from "@/utils/useOpenAi";

import { v4 as uuidv4 } from "uuid";
import { useConversations } from "@/utils/useConversation";
import { ChatMessage } from "./types";

interface ChatProps {
  defaultMessages?: ChatMessage[];
  defaultPromptType?: string;
  chatId?: string;
}

function Chat({ defaultMessages, defaultPromptType, chatId }: ChatProps) {
  const [promptType, setPromptType] = useState<string | null>(
    defaultPromptType || null,
  );
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(
    defaultMessages || [],
  );
  const openai = useOpenAI();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { addMessage, conversations } = useConversations();

  function handleSetPromptType(promptType: string) {
    setPromptType(promptType);
  }

  useEffect(() => {
    const existingConversation = conversations.filter(
      (conversation) => conversation.id === chatId,
    )[0];

    if (existingConversation) {
      setChatMessages(existingConversation.messages);
    }
  }, [chatId, conversations]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  async function handleSubmit(inputValue: string) {
    const newInputChatMessage: ChatMessage = {
      id: uuidv4(),
      role: "user",
      content: inputValue,
    };
    addMessage(chatId as string, newInputChatMessage);
    const newChatMessages: ChatMessage[] = [
      ...chatMessages,
      newInputChatMessage,
    ];
    setChatMessages(newChatMessages);
    const response = await openai.createChatCompletion(newChatMessages);
    const responseMessage = response.choices.map((choice) => ({
      content: choice.message.content,
      role: choice.message.role,
      id: response.id,
    }))[0] as ChatMessage;

    addMessage(chatId as string, responseMessage);
    setChatMessages([...newChatMessages, responseMessage]);
  }

  return (
    <div className="w-full h-full max-w-[598px] flex flex-col">
      <div
        className="flex-1 overflow-y-auto pb-[68px]"
        ref={containerRef}
        style={{
          msOverflowStyle: "none", // IE and Edge
          scrollbarWidth: "none", // Firefox
        }}
      >
        {promptType === null ? (
          <DefaultChat setPromptType={handleSetPromptType} />
        ) : (
          <Messages messages={chatMessages} />
        )}
      </div>

      <ChatInput onSubmit={handleSubmit} />
    </div>
  );
}

interface ChatInputProps {
  onSubmit: (inputVal: string) => void;
}

// There's a bug in mobile where it has to account for the header height so.... the chat input is not visible
function ChatInput({ onSubmit }: ChatInputProps) {
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = () => {
    onSubmit(inputVal);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <div className="sticky bottom-0 flex gap-4 p-4">
      <input
        value={inputVal}
        onChange={(e) => {
          setInputVal(e.currentTarget.value);
        }}
        className="w-full bg-gray-100 py-2 px-4 border-2 rounded-md"
        type="text"
        placeholder="Ask me anything..."
        onKeyDown={handleKeyDown}
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-gray-100 px-4 py-2 rounded-md border-2 rounded-m"
      >
        Submit
      </button>
    </div>
  );
}

interface MessageProps {
  messages: ChatMessage[];
}
function Messages({ messages }: MessageProps) {
  return (
    <div className="flex flex-col gap-4 ">
      {messages.map((message) => {
        return (
          <div
            className={twMerge(
              "flex",
              message.role === "assistant" ? "justify-start" : "justify-end",
            )}
            key={message.id}
          >
            <span
              className={twMerge(
                "border-2 p-4 rounded-md",
                message.role === "assistant"
                  ? "bg-white"
                  : "bg-blue-500 border-blue-500 text-white",
              )}
            >
              {message.content}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Chat;
