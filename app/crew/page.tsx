import NavBar from "@/app/NavBar";
import Heading5 from "@/app/components/Heading5";
import Image from "next/image";
import { crewInfo } from "@/app/crew/crewInfo";
import CrewText from "@/app/crew/CrewText";

export type CrewMember = "douglas" | "mark" | "victor" | "anousheh";

interface Props {
  searchParams: {
    crewMember?: CrewMember;
  };
}

export default function CrewPage({ searchParams }: Props) {
  const crewMember = searchParams.crewMember || "douglas";
  console.log(crewMember);

  return (
    <div
      className="bg-[url('/crew/background-crew-mobile.jpg')]
  sm:bg-[url('/crew/background-crew-tablet.jpg')]
  lg:bg-[url('/crew/background-crew-desktop.jpg')]
      bg-cover h-screen"
    >
      <NavBar page="CREW" />
      <Heading5 className="text-white p-10">
        <strong className="opacity-25">02</strong> MEET YOUR CREW
      </Heading5>

      <CrewText crewMember={crewMember} />
      <Image
        className={"absolute bottom-0 left-1/2 -translate-x-1/2"}
        src={crewInfo[crewMember].imageUrl}
        alt={"Photo of Douglas Hurley"}
        width={480}
        height={570}
      />
    </div>
  );
}
