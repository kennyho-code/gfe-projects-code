"use client";

import { useState } from "react";

export default function Home() {
  const [pressed, setPressed] = useState(false);

  return (
    <div className="h-screen">
      <ToggleComponent pressed={pressed} onClick={() => setPressed(!pressed)} />
    </div>
  );
}

function clsx(...classnames: any[]) {
  return classnames.filter(Boolean).join(" ");
}

function ToggleComponent({
  onClick,
  pressed,
  size,
}: {
  onClick: () => void;
  pressed?: boolean;
  size?: "sm" | "lg";
}) {
  const sm = "w-[36px] h-[20px]";
  const lg = "w-[44px] h-[22px]";

  const circleSm = "w-[16px] h-[16px]";
  const circlelg = "w-[20px] h-[20px]";
  return (
    <button
      role="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={clsx(
        "rounded-full inline-flex items-center px-1",
        pressed ? "bg-blue-500" : "bg-gray-500",
        pressed ? "justify-end" : "justify-start",
        size === "lg" ? lg : sm,
      )}
    >
      <div
        className={clsx(
          "rounded-full bg-white",
          size === "lg" ? circlelg : circleSm,
        )}
      />
    </button>
  );
}
