import { twMerge } from "tailwind-merge";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
}
function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={twMerge(
        "text-gray-600 rounded-md bg-gray-50 px-4 py-2 w-full border-2",
        className,
      )}
      {...props}
    />
  );
}

export default Input;
