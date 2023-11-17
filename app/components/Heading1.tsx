import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

export default function Heading1({ className, children }: Props) {
  return (
    <h1
      className={`text-white ${className}`}
      style={{ fontSize: "9.375rem", lineHeight: "9.375rem" }}
    >
      {children}
    </h1>
  );
}
