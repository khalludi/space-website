import Image from "next/image";
import { Barlow_Condensed } from "next/font/google";
import Link from "next/link";

const barlow_condensed = Barlow_Condensed({
  weight: "400",
  subsets: ["latin"],
});

type Pages = "HOME" | "DESTINATION" | "CREW" | "TECHNOLOGY";

interface Props {
  page: Pages;
}

export default function NavBar({ page }: Props) {
  const navLinks: { label: Pages; href: string }[] = [
    { label: "HOME", href: "/" },
    { label: "DESTINATION", href: "/destination" },
    { label: "CREW", href: "/crew" },
    { label: "TECHNOLOGY", href: "/technology" },
  ];

  return (
    <nav className="flex justify-between items-center">
      <Image
        className="ms-4"
        width={48}
        height={48}
        src={"/shared/logo.svg"}
        title={"Diamond-shaped logo"}
        alt={"Diamond-shaped logo"}
      />
      <ol
        className="w-3/5 h-24 flex space-x-5 items-center justify-center"
        style={{
          background: "rgba(255, 255, 255, 0.04)",
          backdropFilter: "blur(40.774227142333984px)",
        }}
      >
        {navLinks.map((navLink, index) => (
          <Link
            href={navLink.href}
            className="relative h-full"
            key={navLink.href}
          >
            <li
              className={`relative text-white ${barlow_condensed.className} top-1/2 -translate-y-1/2`}
              style={{ fontSize: "16px", letterSpacing: "2.7px" }}
            >
              <strong className="pe-2 hidden">0{index}</strong> {navLink.label}
            </li>
            {navLink.label === page && (
              <div className={"absolute border-b-2 bg-white bottom-0 w-full"} />
            )}
          </Link>
        ))}
      </ol>
    </nav>
  );
}
