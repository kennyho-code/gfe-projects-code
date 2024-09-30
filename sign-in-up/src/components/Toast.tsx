import { ReactNode, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface ToastProps {
  children: ReactNode;
  onClick?: () => void;
}

function Toast({ children, onClick }: ToastProps) {
  const [startTransition, setStartTransition] = useState(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setStartTransition(true);
    }, 1000);

    return () => {
      setStartTransition(false);
      clearTimeout(timeOutId);
    };
  }, []);

  return (
    <div
      className={twMerge(
        "fixed top-0 -translate-y-full  transition transform left-1/2 -translate-x-1/2",
        startTransition && "translate-y-0",
      )}
    >
      <div className="bg-red-50 py-1 px-2 rounded-full inline-flex gap-4 items-center">
        <div className="bg-white text-red-500 px-2 py-1 shadow-md rounded-full">
          Error
        </div>
        <div className="text-red-600 whitespace-nowrap">{children}</div>
        <button onClick={onClick}>X</button>
      </div>
    </div>
  );
}

export default Toast;
