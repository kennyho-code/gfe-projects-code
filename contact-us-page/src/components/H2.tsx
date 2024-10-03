import React from "react";
import { twMerge } from "tailwind-merge";

interface H2Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

function H2({ children, className = "", ...props }: H2Props) {
  const baseClasses = "text-2xl font-bold text-gray-800 mb-4 md:text-5xl";
  const mergedClasses = twMerge(baseClasses, className);

  return (
    <h2 className={mergedClasses} {...props}>
      {children}
    </h2>
  );
}

export default H2;
