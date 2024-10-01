import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
}

function Text({ children }: TextProps) {
  return <div className="text-gray-600">{children}</div>;
}

export default Text;
