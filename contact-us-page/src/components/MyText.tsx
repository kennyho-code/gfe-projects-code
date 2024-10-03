import React from "react";
import { twMerge } from "tailwind-merge";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  as?: "p" | "span" | "div";
}

function Text({ children, className = "", as = "p", ...props }: TextProps) {
  const baseClasses = "text-base text-gray-700 leading-relaxed";
  const mergedClasses = twMerge(baseClasses, className);

  const Component = as;

  return (
    <Component className={mergedClasses} {...props}>
      {children}
    </Component>
  );
}

export default Text;
