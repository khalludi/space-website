"use client";

import Heading4 from "@/app/components/Heading4";
import { crewInfo } from "@/app/crew/crewInfo";
import Heading3 from "@/app/components/Heading3";
import Paragraph from "@/app/components/Paragraph";
import CrewNav from "@/app/crew/CrewNav";
import { CrewMember } from "@/app/crew/page";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  crewMember: CrewMember;
}

export default function CrewText({ crewMember }: Props) {
  const router = useRouter();
  const [clientX, setClientX] = useState(0);

  return (
    <div
      className="flex flex-col relative m-0 h-max text-center justify-center items-center"
      onTouchStart={(e) => {
        setClientX(e.touches[0].clientX);
      }}
      onTouchEnd={(e) => {
        const newX = e.changedTouches[0].clientX;
        if (newX - clientX > 20) {
          router.push("crew?crewMember=victor");
        }
      }}
    >
      <Heading4 className="opacity-50">{crewInfo[crewMember].title}</Heading4>
      <Heading3>{crewInfo[crewMember].name}</Heading3>
      <Paragraph className="max-w-xl">
        {crewInfo[crewMember].description}
      </Paragraph>
      <CrewNav activeMember={crewMember} />
    </div>
  );
}
