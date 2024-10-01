import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

interface H3Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  children: ReactNode;
}

function H3({ children }: H3Props) {
  return <h2 className="font-bold text-blue-600">{children}</h2>;
}

export default H3;
