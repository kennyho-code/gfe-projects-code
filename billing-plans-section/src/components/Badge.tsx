import React from "react";

interface BadgeProps {
  text: string;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  size?: "small" | "medium" | "large";
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  text,
  color = "primary",
  size = "medium",
  className = "",
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-bold rounded-full";

  const colorClasses = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-500 text-white",
    success: "bg-green-500 text-white",
    danger: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-black",
    info: "bg-sky-500 text-white",
  };

  const sizeClasses = {
    small: "text-xs px-2 py-1",
    medium: "text-sm px-3 py-1",
    large: "text-base px-4 py-2",
  };

  const classes = `
    ${baseClasses}
    ${colorClasses[color]}
    ${sizeClasses[size]}
    ${className}
  `;

  return <span className={classes.trim()}>{text}</span>;
};

export default Badge;
