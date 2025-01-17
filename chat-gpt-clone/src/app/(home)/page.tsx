"use client";

import Chat from "@/components/Chat/Chat";
import { Modal } from "@/components/Modal";
import OpenAiModalPanel from "@/components/OpenAIModalPanel";
import useApiKey from "@/utils/useOpenAiApiKey";
import { useEffect, useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isKeyValid, isLoading } = useApiKey();

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (!isKeyValid) {
      setIsModalOpen(true);
    }
  }, [isKeyValid, isLoading]);

  return (
    <div className="flex justify-center h-screen p-4">
      <div className="w-full flex flex-col items-center gap-24">
        <Chat />
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <OpenAiModalPanel
          onSave={() => {
            setIsModalOpen(false);
          }}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
}
