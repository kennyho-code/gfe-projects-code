"use client";

import Chat from "@/components/Chat/Chat";
import { useParams } from "next/navigation";

function Page() {
  const params = useParams();
  return (
    <div className="flex justify-center h-screen p-4">
      <div className="w-full flex flex-col items-center gap-24">
        <Chat chatId={params.chatId as string} defaultPromptType="assistant" />
      </div>
    </div>
  );
}

export default Page;
