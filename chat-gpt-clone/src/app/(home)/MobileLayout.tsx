import { ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

function MobileLayout({ children }: { children: ReactNode }) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div>
      <header className="flex justify-between p-6 bg-pink-50">
        <div>Chatty Cat AI</div>
        <div>
          <button
            onClick={() => {
              setShowSidebar(!showSidebar);
            }}
          >
            🍔
          </button>
        </div>
      </header>
      <MobileSidebar
        hide={!showSidebar}
        onClose={() => setShowSidebar(false)}
      />
      {children}
    </div>
  );
}

interface SidebarProps {
  hide: boolean;
  onClose?: () => void;
  className?: string;
}

function MobileSidebar({ hide, onClose, className }: SidebarProps) {
  return (
    <aside
      className={twMerge(
        "fixed left-0 top-0 bg-purple-50 min-h-screen w-full",
        "transition-transform duration-300 ease-in-out",
        hide && "-translate-x-full",
        className,
      )}
    >
      <div className="flex flex-col gap-4 p-4">
        <div className="flex justify-between">
          <span>🐱 Chatty Cat AI</span> <button onClick={onClose}>X</button>
        </div>
        <div>
          <button>⚡ Ongoing Prompt</button>
        </div>
      </div>
    </aside>
  );
}

export default MobileLayout;
