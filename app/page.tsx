import Heading1 from "@/app/components/Heading1";
import Heading5 from "@/app/components/Heading5";
import Paragraph from "@/app/components/Paragraph";
import Explore from "@/app/Explore";
import NavBar from "@/app/NavBar";

export default function Home() {
  return (
    <div
      className="bg-[url('/home/background-home-mobile.jpg')]
  sm:bg-[url('/home/background-home-tablet.jpg')]
  lg:bg-[url('/home/background-home-desktop.jpg')]
  bg-cover h-screen"
    >
      <NavBar />
      <div className="mt-24" />
      <Heading5 className={"text-center pb-5"}>
        SO, YOU WANT TO TRAVEL TO
      </Heading5>
      <Heading1 className="text-center">SPACE</Heading1>
      <div className="flex justify-center pt-3">
        <Paragraph className={"max-w-md text-center"}>
          Let&apos;s face it: if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we&apos;ll give you a truly out of
          this world experience!
        </Paragraph>
      </div>

      <div className="absolute bottom-10 w-screen">
        <div className="flex flex-col items-center">
          <Explore />
        </div>
      </div>
    </div>
  );
}
