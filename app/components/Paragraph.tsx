import { ReactNode } from "react";
import { Barlow } from "next/font/google";

const barlow_condensed = Barlow({
  weight: "400",
  subsets: ["latin"],
});

interface Props {
  className: string;
  children: ReactNode;
}

export default function Paragraph({ className, children }: Props) {
  return (
    <p
      className={`${barlow_condensed.className} ${className}`}
      style={{ fontSize: "1rem", lineHeight: "1.75rem", color: "#D0D6F9" }}
    >
      {children}
    </p>
  );
}
