"use client";
import { ReactNode, useId, useState } from "react";

type TabItem = {
  label: string;
  value: string;
  panel: string;
};

const DATA: TabItem[] = [
  {
    label: "Account",
    value: "account",
    panel:
      "The Account Management section provides a comprehensive view of your personal information and settings. Here, you can update your profile details, manage contact information, and customize your preferences to enhance your user experience.",
  },
  {
    label: "Security",
    value: "security",
    panel:
      "The Security Settings section is dedicated to protecting your account and personal data. Here, you can manage various security features to ensure your information remains safe and secure.",
  },
  {
    label: "Plan",
    value: "plan",
    panel:
      "The Subscription Plan section provides details about your current plan and available upgrades. Here, you can review your plan’s benefits, manage billing information, and explore other subscription options to find the best fit for your needs.",
  },
];

export default function Home() {
  return (
    <div className="flex justify-center h-screen">
      <TabMenu items={DATA} defaultValue={DATA[0].value} />
    </div>
  );
}

function getTabListItemId(id: string, value: string) {
  return id + "-tab-" + value;
}

function getTabPanelId(id: string, value: string) {
  return id + "-tabpanel-" + value;
}

function TabMenu({
  items,
  defaultValue,
}: {
  items: TabItem[];
  defaultValue?: string;
}) {
  const [activeItem, setActiveItem] = useState(defaultValue ?? items[0].value);
  const id = useId();

  function setNewValWithIdx(idx: number) {
    const newVal = items[idx].value;
    setActiveItem(newVal);
    document.getElementById(getTabListItemId(id, newVal))?.focus();
  }

  function handleOnKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    switch (event.code) {
      case "ArrowLeft":
        const leftIdx = items.findIndex(({ value }) => activeItem === value);
        setNewValWithIdx((leftIdx - 1 + items.length) % items.length);
        break;
      case "ArrowRight":
        const rightIdx = items.findIndex(({ value }) => activeItem === value);
        setNewValWithIdx((rightIdx + 1) % items.length);
        break;
      case "Home":
        setNewValWithIdx(0);
        break;
      case "End":
        setNewValWithIdx(items.length - 1);
        break;
      default:
        break;
    }
  }

  return (
    <div className="max-w-[300px] flex flex-col gap-4">
      <div
        role="tab-list"
        className="flex justify-between"
        onKeyDown={handleOnKeyDown}
      >
        {items.map((item) => (
          <TabButton
            key={item.value}
            id={getTabListItemId(id, item.value)}
            aria-controls={getTabListItemId(id, item.value)}
            onClick={() => setActiveItem(item.value)}
            isActive={activeItem === item.value}
          >
            {item.label}
          </TabButton>
        ))}
      </div>

      <div>
        {items.map((item) => (
          <span key={item.value}>
            <TabPanel
              id={getTabPanelId(id, item.value)}
              aria-labelledby={getTabListItemId(id, item.value)}
              hidden={activeItem !== item.value}
            >
              {item.panel}
            </TabPanel>
          </span>
        ))}
      </div>
    </div>
  );
}

interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hidden: boolean;
}

function TabPanel({ children, hidden, ...props }: TabPanelProps) {
  return (
    <div hidden={hidden} {...props}>
      {children}
    </div>
  );
}

interface TabButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  isActive: boolean;
  className?: string;
  children: ReactNode;
  id: string;
}

function TabButton({
  children,
  onClick,
  isActive,
  className,
  ...props
}: TabButtonProps) {
  return (
    <button
      type="button"
      role="tab"
      onClick={onClick}
      className={[
        "px-4 py-2 w-full border-b-2 border-gray-500",
        isActive && "font-bold border-b-2 border-blue-400",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
