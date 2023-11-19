import { ReactNode } from "react";
import { Barlow_Condensed } from "next/font/google";

const barlow_condensed = Barlow_Condensed({
  weight: "400",
  subsets: ["latin"],
});

interface Props {
  className?: string;
  children: ReactNode;
}

export default function Subheading2({ className, children }: Props) {
  return (
    <div
      className={`text-gray-400 ${barlow_condensed.className} ${className}`}
      style={{ fontSize: "0.875rem", letterSpacing: "0.148rem" }}
    >
      {children}
    </div>
  );
}
