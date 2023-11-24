import { CrewMember } from "@/app/crew/page";

interface CrewInfo {
  title: string;
  name: string;
  description: string;
  imageUrl: string;
}

export const crewInfo: { [member in CrewMember]: CrewInfo } = {
  douglas: {
    title: "COMMANDER",
    name: "DOUGLAS HURLEY",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine " +
      "Corps pilot and former NASA astronaut. He launched into space" +
      " for the third time as commander of Crew Dragon Demo-2.",
    imageUrl: "/crew/image-douglas-hurley.png",
  },
  mark: {
    title: "MISSION SPECIALIST",
    name: "MARK SHUTTLEWORTH",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical," +
      " the company behind the Linux-based Ubuntu operating system. " +
      "Shuttleworth became the first South African to travel to space" +
      " as a space tourist.",
    imageUrl: "/crew/image-mark-shuttleworth.png",
  },
  victor: {
    title: "PILOT",
    name: "VICTOR GLOVER",
    description:
      "Pilot on the first operational flight of the SpaceX" +
      " Crew Dragon to the International Space Station. Glover is a" +
      " commander in the U.S. Navy where he pilots an F/A-18. He was" +
      " a crew member of Expedition 64, and served as a station " +
      "systems flight engineer.",
    imageUrl: "/crew/image-victor-glover.png",
  },
  anousheh: {
    title: "FLIGHT ENGINEER",
    name: "ANOUSHEH ANSARI",
    description:
      "Anousheh Ansari is an Iranian American engineer " +
      "and co-founder of Prodea Systems. Ansari was the fourth " +
      "self-funded space tourist, the first self-funded woman to " +
      "fly to the ISS, and the first Iranian in space. ",
    imageUrl: "/crew/image-anousheh-ansari.png",
  },
};
