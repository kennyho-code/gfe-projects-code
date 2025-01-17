import useApiKey from "@/utils/useOpenAiApiKey";
import Link from "next/link";
import { useState } from "react";

interface OpenAiModalPanelProps {
  onSave: () => void;
  onClose: () => void;
}

function OpenAiModalPanel({ onSave, onClose }: OpenAiModalPanelProps) {
  const { setApiKey } = useApiKey();
  const [apiKeyVal, setApiKeyVal] = useState("");
  return (
    <div>
      <div className="text-center flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Enter Your OpenAI API Key</h1>
        <p>
          You need an OpenAI API Key to use this app. Your API Key will be
          stored locally on your browser.
        </p>
        <input
          value={apiKeyVal}
          onChange={(e) => {
            setApiKeyVal(e.currentTarget.value);
          }}
          type="text"
          className="bg-gray-50 border-2 rounded-md w-full p-4"
          placeholder="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        />
        <Link target="_blank" href={"https://platform.openai.com/api-keys"}>
          <span className="text-blue-600">
            {" "}
            Go to Open AI to get your API key{" "}
          </span>
        </Link>
        <div className="flex gap-2">
          <button onClick={onClose} className="border-2 rounded-md w-full py-2">
            Cancel
          </button>
          <button
            onClick={() => {
              setApiKey(apiKeyVal);
              onSave();
            }}
            className="border-2 rounded-md w-full py-2 bg-blue-600 text-white border-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAiModalPanel;
