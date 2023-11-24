import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

export default function Heading3({ className, children }: Props) {
  return (
    <h2 className={`text-white ${className}`} style={{ fontSize: "2.5rem" }}>
      {children}
    </h2>
  );
}
