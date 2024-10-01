import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  className?: string;
}

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "w-full rounded-md font-semibold bg-blue-600 text-white py-2",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
