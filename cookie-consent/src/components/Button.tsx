import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "bg-blue-500 text-white font-bold py-2 px-4 rounded w-full md:w-auto h-[44px]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
