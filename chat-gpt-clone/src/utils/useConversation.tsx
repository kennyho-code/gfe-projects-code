"use client";
import {
  Conversation,
  ChatStorageService,
  ChatMessage,
} from "@/services/conversation";
import { useState, useEffect } from "react";

export function useConversations() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const storage = new ChatStorageService();

  useEffect(() => {
    setConversations(storage.getAllConversations());
  }, []);

  const addConversation = (title: string, messages: ChatMessage[] = []) => {
    const newConversation = storage.createConversation(title, messages);
    setConversations(storage.getAllConversations());
    return newConversation;
  };

  const addMessage = (
    conversationId: string,
    message: Omit<ChatMessage, "id">,
  ) => {
    storage.addMessage(conversationId, message);
    setConversations(storage.getAllConversations());
  };

  return {
    conversations,
    addConversation,
    addMessage,
    deleteConversation: (id: string) => {
      storage.deleteConversation(id);
      setConversations(storage.getAllConversations());
    },
  };
}
