import { useState, useEffect } from "react";

interface UseApiKeyReturn {
  apiKey: string | null;
  setApiKey: (key: string) => void;
  removeApiKey: () => void;
  isKeyValid: boolean;
  isLoading: boolean; // Added loading state
}

export const useApiKey = (): UseApiKeyReturn => {
  const [apiKey, setApiKeyState] = useState<string | null>(null);
  const [isKeyValid, setIsKeyValid] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Initialize loading as true

  // Load API key from localStorage on initial render
  useEffect(() => {
    const loadApiKey = async () => {
      try {
        setIsLoading(true);
        const storedKey = localStorage.getItem("openai_api_key");
        console.log("storedKey: ", storedKey);
        if (storedKey) {
          setApiKeyState(storedKey);
          validateApiKey(storedKey);
        }
      } catch (error) {
        console.error("Error loading API key:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadApiKey();
  }, []);

  // Function to validate API key format
  const validateApiKey = (key: string): boolean => {
    // Basic validation for OpenAI API key format (sk-...)
    const isValid = key.startsWith("sk-") && key.length > 20;
    setIsKeyValid(isValid);
    return isValid;
  };

  // Function to set API key
  const setApiKey = (key: string) => {
    setIsLoading(true);
    try {
      if (validateApiKey(key)) {
        localStorage.setItem("openai_api_key", key);
        setApiKeyState(key);
      } else {
        console.error("Invalid API key format");
      }
    } catch (error) {
      console.error("Error setting API key:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to remove API key
  const removeApiKey = () => {
    setIsLoading(true);
    try {
      localStorage.removeItem("openai_api_key");
      setApiKeyState(null);
      setIsKeyValid(false);
    } catch (error) {
      console.error("Error removing API key:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    apiKey,
    setApiKey,
    removeApiKey,
    isKeyValid,
    isLoading, // Include loading state in return value
  };
};

export default useApiKey;
