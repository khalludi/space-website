import { ReactNode } from "react";
import { Barlow_Condensed } from "next/font/google";

const barlow_condensed = Barlow_Condensed({
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
      className={`text-gray-400 ${barlow_condensed.className} ${className}`}
      style={{ fontSize: "1rem", lineHeight: "1.75rem" }}
    >
      {children}
    </p>
  );
}
