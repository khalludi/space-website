import Link from "next/link";
import { CrewMember } from "@/app/crew/page";
import classNames from "classnames";

interface Props {
  activeMember: CrewMember;
}

export default function CrewNav({ activeMember }: Props) {
  const crewMembers: CrewMember[] = ["douglas", "mark", "victor", "anousheh"];

  return (
    <div className="flex gap-5 pt-10">
      {crewMembers.map((member) => {
        return (
          <Link
            key={`crew-nav-${member}`}
            href={{ pathname: "crew", query: { crewMember: member } }}
          >
            <div
              className={classNames({
                "bg-white h-2 w-2 rounded-full": true,
                "opacity-30": activeMember !== member,
              })}
            />
          </Link>
        );
      })}
      {/*<Link href={{ pathname: "crew", query: { crewMember: "douglas" } }}>*/}
      {/*  <div className="bg-white h-2 w-2 rounded-full" />*/}
      {/*</Link>*/}
      {/*<Link href={{ pathname: "crew", query: { crewMember: "mark" } }}>*/}
      {/*  <div className="bg-white h-2 w-2 opacity-30 rounded-full" />*/}
      {/*</Link>*/}
      {/*<Link href={{ pathname: "crew", query: { crewMember: "victor" } }}>*/}
      {/*  <div className="bg-white h-2 w-2 opacity-30 rounded-full" />*/}
      {/*</Link>*/}
      {/*<Link href={{ pathname: "crew", query: { crewMember: "anousheh" } }}>*/}
      {/*  <div className="bg-white h-2 w-2 opacity-30 rounded-full" />*/}
      {/*</Link>*/}
    </div>
  );
}
