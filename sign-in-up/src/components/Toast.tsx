import { ReactNode } from "react";

interface ToastProps {
  children: ReactNode;
  onClick?: () => void;
}

function Toast({ children, onClick }: ToastProps) {
  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2">
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
