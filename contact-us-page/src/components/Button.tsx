import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

function Button({
  className,
  children,
  variant = "primary",
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  return (
    <button
      className={twMerge(
        "font-bold py-2 px-4 rounded",
        className,
        variantClasses[variant],
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
