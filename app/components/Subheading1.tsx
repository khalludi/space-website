import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

export default function Subheading1({ className, children }: Props) {
  return (
    <div className={`text-white ${className}`} style={{ fontSize: "1.75rem" }}>
      {children}
    </div>
  );
}
