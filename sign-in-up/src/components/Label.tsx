import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface LabelProps
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  className?: string;
  children: ReactNode;
}

function Label({ className, children }: LabelProps) {
  return (
    <label
      className={twMerge("text-gray-600 font-semibold block pb-2", className)}
    >
      {children}
    </label>
  );
}

export default Label;
