"use client";

import { useState } from "react";
import Link from "next/link";

export default function Explore() {
  const [hover, setHover] = useState(false);

  const background = `rgba(255, 255, 255, ${hover ? "0.1" : "0"})`;

  return (
    <Link
      href={"/destination"}
      className={"absolute w-96 h-96 rounded-full z-10 bottom-0"}
      style={{ background: background }}
    >
      <div
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2
        bg-white w-60 h-60 rounded-full flex justify-center items-center z-10"
      >
        <p className="text-black text-4xl">EXPLORE</p>
      </div>
    </Link>
  );
}
