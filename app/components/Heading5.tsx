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

export default function Heading5({ className, children }: Props) {
  return (
    <h5
      className={`text-gray-400 ${barlow_condensed.className} ${className}`}
      style={{ fontSize: "1.25rem", letterSpacing: "0.21094rem" }}
    >
      {children}
    </h5>
  );
}
