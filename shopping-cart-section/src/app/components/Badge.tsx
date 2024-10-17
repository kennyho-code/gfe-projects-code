import React from "react";

type BadgeVariant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info";

interface BadgeProps {
  text: string;
  variant?: BadgeVariant;
  rounded?: boolean;
}

const Badge: React.FC<BadgeProps> = ({
  text,
  variant = "primary",
  rounded = false,
}) => {
  const baseClasses = "inline-block px-2 py-1 text-xs font-semibold";
  const roundedClass = rounded ? "rounded-full" : "rounded";

  const variantClasses: Record<BadgeVariant, string> = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-500 text-white",
    success: "bg-green-500 text-white",
    danger: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-white",
    info: "bg-indigo-500 text-white",
  };

  const classes = `${baseClasses} ${roundedClass} ${variantClasses[variant]}`;

  return <span className={classes}>{text}</span>;
};

export default Badge;
