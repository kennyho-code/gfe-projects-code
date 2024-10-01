import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

interface H2Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  children: ReactNode;
}

function H2({ children }: H2Props) {
  return <h2 className="font-bold text-3xl">{children}</h2>;
}

export default H2;
