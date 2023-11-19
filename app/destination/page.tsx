"use client";

import Image from "next/image";
import Paragraph from "@/app/components/Paragraph";
import NavBar from "@/app/NavBar";
import Subheading1 from "@/app/components/Subheading1";
import Subheading2 from "@/app/components/Subheading2";
import Heading5 from "@/app/components/Heading5";
import { ReactNode, useState } from "react";
import Heading2 from "@/app/components/Heading2";
import { Barlow_Condensed } from "next/font/google";
import classNames from "classnames";

type Planet = "moon" | "mars" | "titan" | "europa";

interface PlanetInfo {
  name: string;
  imageUrl: string;
  description: string;
  avgDistance: string;
  travelTime: string;
}

const planetInfo: {
  [key in Planet]: PlanetInfo;
} = {
  moon: {
    name: "MOON",
    imageUrl: "/destination/image-moon.png",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip " +
      "away to help regain perspective and come back refreshed. While you’re " +
      "there, take in some history by visiting the Luna 2 and Apollo 11 landing" +
      " sites.",
    avgDistance: "384,400 KM",
    travelTime: "3 DAYS",
  },
  mars: {
    name: "MARS",
    imageUrl: "/destination/image-mars.png",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus" +
      " Mons, the tallest planetary mountain in our solar system. It’s two and" +
      " a half times the size of Everest!",
    avgDistance: "225 MIL. KM",
    travelTime: "9 MONTHS",
  },
  europa: {
    name: "EUROPA",
    imageUrl: "/destination/image-europa.png",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a" +
      " winter lover’s dream. With an icy surface, it’s perfect for a bit of" +
      " ice skating, curling, hockey, or simple relaxation in your snug" +
      " wintery cabin.",
    avgDistance: "628 MIL. KM",
    travelTime: "3 YEARS",
  },
  titan: {
    name: "TITAN",
    imageUrl: "/destination/image-titan.png",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan " +
      "is a home away from home (just a few hundred degrees colder!). As a " +
      "bonus, you get striking views of the Rings of Saturn.",
    avgDistance: "1.6 BIL. KM",
    travelTime: "7 YEARS",
  },
};

export default function DestinationPage() {
  const [planet, setPlanet] = useState<Planet>("moon");

  return (
    <div
      className="bg-[url('/destination/background-destination-mobile.jpg')]
  sm:bg-[url('/destination/background-destination-tablet.jpg')]
  lg:bg-[url('/destination/background-destination-desktop.jpg')]
  bg-cover h-screen"
    >
      <NavBar />
      <Heading5 className="text-white m-10">
        <strong className="opacity-25">01</strong> PICK YOUR DESTINATION
      </Heading5>
      <div className="p-5 flex flex-col items-center">
        <Image
          className="mt-5"
          src={`/destination/image-${planet}.png`}
          alt="Image of the moon"
          width={300}
          height={300}
        />
        <ul className="flex text-white space-x-10 mt-10">
          {Object.entries(planetInfo).map(([name, info]) => (
            <li
              className="relative"
              key={name}
              onClick={() => setPlanet(name as Planet)}
            >
              <PlanetNavItem
                className={classNames({
                  "text-gray-400": planet !== name,
                  "text-white": planet === name,
                })}
              >
                {info.name}
              </PlanetNavItem>
              {planet == name && (
                <div className="absolute border-b-2 border-white w-full mt-1" />
              )}
            </li>
          ))}
        </ul>
        <Heading2 className="pt-10">{planet.toUpperCase()}</Heading2>
        <Paragraph className="max-w-xl text-center">
          {planetInfo[planet].description}
        </Paragraph>
        <div className="w-5/6 border-b-2 mt-10 border-gray-800" />
        <div className="grid grid-cols-2 pt-10 space-x-16">
          <div className="flex flex-col items-center space-y-2">
            <Subheading2>AVG. DISTANCE</Subheading2>
            <Subheading1>{planetInfo[planet].avgDistance}</Subheading1>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Subheading2>EST. TRAVEL TIME</Subheading2>
            <Subheading1>{planetInfo[planet].travelTime}</Subheading1>
          </div>
        </div>
      </div>
    </div>
  );
}

interface PlanetNavItemProps {
  className?: string;
  children: ReactNode;
}

const barlow_condensed = Barlow_Condensed({
  weight: "400",
  subsets: ["latin"],
});

function PlanetNavItem({ className, children }: PlanetNavItemProps) {
  return (
    <span
      className={`text-gray-400 ${barlow_condensed.className} ${className}`}
      style={{ fontSize: "1rem", letterSpacing: "0.169rem" }}
    >
      {children}
    </span>
  );
}
