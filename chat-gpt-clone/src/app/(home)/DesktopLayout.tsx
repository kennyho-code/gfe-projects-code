import { useConversations } from "@/utils/useConversation";
import Link from "next/link";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { v4 as uuidv4 } from "uuid";

function DesktopLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <DesktopSidbar />
      {children}
    </div>
  );
}

function DesktopSidbar() {
  const { addConversation, conversations } = useConversations();
  return (
    <aside
      className={twMerge(
        "bg-purple-50 h-screen w-[250px] flex-none flex flex-col justify-between p-4",
      )}
    >
      <div className="flex flex-col h-screen justify-between">
        <div className="flex flex-col gap-4">
          <Link href="/">
            <span>🐱 Chatty Cat AI</span>
          </Link>
          <div>
            <ul>
              {conversations.map((conversation) => (
                <Link
                  href={`/${conversation.id}`}
                  className="text-blue-600"
                  key={conversation.id}
                >
                  {conversation.title}
                </Link>
              ))}
            </ul>
            <button>⚡ Ongoing Prompt</button>
          </div>
        </div>

        <div className="flex flex-col gap-4 sticky bottom-0 pb-4">
          <button
            onClick={() => {
              addConversation("new-conversation-" + uuidv4(), []);
            }}
            className="border-2 rounded-md w-full inline-flex pl-4 py-2 bg-white shadow-sm"
          >
            <div>🪄 Start a Chat</div>
          </button>
          <CreateAccountCard />
        </div>
      </div>
    </aside>
  );
}

function CreateAccountCard() {
  return (
    <div className="bg-white p-4 border-2 rounded-md flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold">Let’s create an account</h2>
        <p>
          Save your chat history, share chat, and personalize your experience.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <button className="bg-blue-700 py-2 px-2 text-white rounded-md font-semibold">
          Sign in
        </button>
        <button className="text-blue-700 py-2 px-2 rounded-md font-semibold">
          Create account
        </button>
      </div>
    </div>
  );
}

export default DesktopLayout;
