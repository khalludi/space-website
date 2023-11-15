import { Barlow_Condensed } from "next/font/google";
import Image from "next/image";

const barlow_condensed = Barlow_Condensed({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className="bg-[url('/home/background-home-mobile.jpg')]
      sm:bg-[url('/home/background-home-tablet.jpg')]
      lg:bg-[url('/home/background-home-desktop.jpg')]
      bg-cover h-screen"
    >
      <nav className="flex justify-between items-center p-5 py-14">
        <Image
          className="ms-4"
          width={48}
          height={48}
          src={"/shared/logo.svg"}
          title={"Diamond-shaped logo"}
          alt={"Diamond-shaped logo"}
        />
        <div
          className="absolute w-3/5 h-24 right-0 z-10"
          style={{
            background: "rgba(255, 255, 255, 0.04)",
            backdropFilter: "blur(40.774227142333984px)",
          }}
        />
        <ol className="flex space-x-10 relative z-20" style={{ left: "-15%" }}>
          <li
            className={`text-white ${barlow_condensed.className}`}
            style={{ fontSize: "16px", letterSpacing: "2.7px" }}
          >
            <strong className="pe-2">00</strong> HOME
          </li>
          <li
            className={`text-white ${barlow_condensed.className}`}
            style={{ fontSize: "16px", letterSpacing: "2.7px" }}
          >
            <strong className="pe-2">01</strong> DESTINATION
          </li>
          <li
            className={`text-white ${barlow_condensed.className}`}
            style={{ fontSize: "16px", letterSpacing: "2.7px" }}
          >
            <strong className="pe-2">02</strong> CREW
          </li>
          <li
            className={`text-white ${barlow_condensed.className}`}
            style={{ fontSize: "16px", letterSpacing: "2.7px" }}
          >
            <strong className="pe-2">03</strong> TECHNOLOGY
          </li>
        </ol>
      </nav>

      <div className="absolute bottom-32">
        <div className="flex justify-between w-screen">
          <div className="ps-40">
            <h5
              className={`text-gray-400 ${barlow_condensed.className}`}
              style={{ fontSize: "28px", letterSpacing: 4.75 }}
            >
              SO, YOU WANT TO TRAVEL TO
            </h5>
            <h1 className="text-white" style={{ fontSize: "150px" }}>
              SPACE
            </h1>
            <p
              className={`text-gray-400 ${barlow_condensed.className} max-w-md`}
              style={{ fontSize: "18px", lineHeight: "32px" }}
            >
              Let&apos;s face it: if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we&apos;ll give you a truly
              out of this world experience!
            </p>
          </div>
          <div className="pe-40 flex flex-col justify-end">
            <div className="bg-white w-60 h-60 rounded-full flex justify-center items-center">
              <p className="text-black text-3xl">EXPLORE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
