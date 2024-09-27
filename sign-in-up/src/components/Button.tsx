import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  children: ReactNode;
}

function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "bg-blue-500 w-full py-2 rounded-md text-white font-semibold",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
