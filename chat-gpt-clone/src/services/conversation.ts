"use client";
export interface ChatMessage {
  id: number | string;
  role: "assistant" | "user";
  content: string;
  timestamp?: number;
}

export interface Conversation {
  id: string;
  title: string;
  messages: ChatMessage[];
  createdAt: number;
  updatedAt: number;
}

// This implementation is preobably not great...
//
// CHAT service always has to look for the window...beacuse it's being used in the nextjs server first.....
// .... it's probably better to load it in the client using a Context first' like so
//
/*
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StorageProvider>
          {children}
        </StorageProvider>
      </body>
    </html>
  );
}
*/
//
//
//

// chatStorageService.ts
export class ChatStorageService {
  private readonly STORAGE_KEY = "chat_conversations";
  private isClient(): boolean {
    return typeof window !== "undefined";
  }

  private getStorage(): Conversation[] {
    if (!this.isClient()) return [];

    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error("Error accessing localStorage:", error);
      return [];
    }
  }

  private setStorage(data: Conversation[]): void {
    if (!this.isClient()) return;

    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error("Error setting localStorage:", error);
    }
  }

  getAllConversations(): Conversation[] {
    return this.getStorage();
  }

  getConversation(id: string): Conversation | null {
    const conversations = this.getStorage();
    return conversations.find((conv) => conv.id === id) || null;
  }

  createConversation(
    title: string,
    initialMessages: ChatMessage[] = [],
  ): Conversation | null {
    if (!this.isClient()) return null;

    try {
      const conversations = this.getStorage();
      const newConversation: Conversation = {
        id: crypto.randomUUID(),
        title,
        messages: initialMessages,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };

      conversations.push(newConversation);
      this.setStorage(conversations);
      return newConversation;
    } catch (error) {
      console.error("Error creating conversation:", error);
      return null;
    }
  }

  // Add message to conversation
  addMessage(
    conversationId: string,
    message: Omit<ChatMessage, "id">,
  ): boolean | null {
    if (!this.isClient()) return null;
    try {
      const conversations = this.getAllConversations();
      const conversationIndex = conversations.findIndex(
        (conv) => conv.id === conversationId,
      );

      if (conversationIndex === -1) return false;

      const newMessage: ChatMessage = {
        ...message,
        id: crypto.randomUUID(),
      };

      conversations[conversationIndex].messages.push(newMessage);
      conversations[conversationIndex].updatedAt = Date.now();

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(conversations));
      return true;
    } catch (error) {
      console.error("Error adding message:", error);
      return false;
    }
  }

  // Delete a conversation
  deleteConversation(conversationId: string): boolean | null {
    if (!this.isClient()) return null;
    try {
      const conversations = this.getAllConversations();
      const filteredConversations = conversations.filter(
        (conv) => conv.id !== conversationId,
      );
      localStorage.setItem(
        this.STORAGE_KEY,
        JSON.stringify(filteredConversations),
      );
      return true;
    } catch (error) {
      console.error("Error deleting conversation:", error);
      return false;
    }
  }

  // Clear all conversations
  clearAllConversations(): boolean | null {
    if (!this.isClient()) return null;

    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify([]));
      return true;
    } catch (error) {
      console.error("Error clearing conversations:", error);
      return false;
    }
  }

  // Update conversation title
  updateConversationTitle(
    conversationId: string,
    newTitle: string,
  ): boolean | null {
    if (!this.isClient()) return null;

    try {
      const conversations = this.getAllConversations();
      const conversation = conversations.find(
        (conv) => conv.id === conversationId,
      );

      if (!conversation) return false;

      conversation.title = newTitle;
      conversation.updatedAt = Date.now();

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(conversations));
      return true;
    } catch (error) {
      console.error("Error updating conversation title:", error);
      return false;
    }
  }

  // Get total number of stored conversations
  getConversationCount(): number {
    return this.getAllConversations().length;
  }

  // Export conversations to JSON
  exportConversations(): string {
    return JSON.stringify(this.getAllConversations(), null, 2);
  }

  // Import conversations from JSON
  importConversations(jsonData: string): boolean {
    try {
      const conversations = JSON.parse(jsonData);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(conversations));
      return true;
    } catch (error) {
      console.error("Error importing conversations:", error);
      return false;
    }
  }
}
