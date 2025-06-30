"use client";

import Link from "next/link";

import {
  AccessibilityIcon,
  // AmbulanceIcon,
  // ArrowRightIcon,
  HandHelpingIcon,
  // HeartHandshakeIcon,
  // HospitalIcon,
  // HouseIcon,
  HousePlusIcon,
  // UsersIcon,
  UsersRoundIcon,
} from "lucide-react";
import React from "react";
import { usePrefs } from "@/app/context/PrefContext";
import { cn } from "@/lib/utils";

const HowWeHelpSection = () => {
  return (
    <section className="pb-12 md:pb-24 lg:py-36">
      <h3 className="text-center text-2xl lg:text-4xl font-medium leading-14 text-teal-700">
        Core Services Overview
      </h3>
      <p className="text-center text-zinc-800 text-lg mb-8">
        Our Support Services
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
        <HelpCard
          label="Daily Personal Activities"
          cardKey="sda"
          icon={<AccessibilityIcon size={48} />}
        >
          <p>
            Supporting you with personal care tasks, routines, and everyday
            activies, promoting independence and confidence.
          </p>
        </HelpCard>
        <HelpCard
          label="Household Tasks"
          cardKey="sil"
          icon={<HandHelpingIcon size={48} />}
        >
          <p>
            Keeping your home safe, clean, and comfortable so you can focus on
            what matters most.
          </p>
        </HelpCard>
        <HelpCard
          label="Community Participation"
          cardKey="scp"
          icon={<UsersRoundIcon size={48} />}
        >
          <p>
            Connecting you to community, hobbies, and interests with friendly,
            reliable support.
          </p>
        </HelpCard>
        <HelpCard
          label="In-Home Support"
          cardKey="htoh"
          icon={<HousePlusIcon size={48} />}
        >
          <p>
            Flexible in-home care tailored to your lifestyle, helping you live
            safely and comfortably at home.
          </p>
        </HelpCard>
        {/* <Link href={`/services`} className="group">
          <div
            className={
              "px-6 py-6 h-full rounded-sm flex flex-col items-center justify-start w-full text-center gap-y-6 bg-sky-700 bg-[url(/noise.png)] bg-blend-darken group-hover:bg-sky-600 transition-all border border-sky-800"
            }
          >
            <div className="text-center text-xl md:text-2xl col-span-2 flex justify-center items-center flex-col h-full text-white">
              <p className="inline-flex gap-x-2 justify-start items-center  group-hover:gap-x-4 transition-all">
                <span
                  className={cn(
                    "inline-block",
                    highlightLinks && "underline underline-offset-4"
                  )}
                >
                  See all services
                </span>
                <ArrowRightIcon className="mt-1" />
              </p>
            </div>
          </div>
        </Link> */}
      </div>
    </section>
  );
};

const HelpCard = ({
  cardKey,
  icon,
  label,
  children,
}: {
  cardKey: string;
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => {
  const { highlightLinks } = usePrefs();
  return (
    <Link href={`/services/`} className="group" key={cardKey}>
      <div
        className={cn(
          "px-6 py-16 h-full rounded-sm flex flex-col items-center justify-start w-full text-center gap-y-6 bg-zinc-100 lg:bg-zinc-50 group-hover:bg-teal-50 transition-all",
          highlightLinks ? "border-2 border-zinc-500" : "border border-zinc-200"
        )}
      >
        <p className="text-teal-700">{icon}</p>
        <div>
          <p className="text-xl text-teal-900 font-medium">{label}</p>
          <div className="text-teal-950 mt-2">{children}</div>
        </div>
        <p
          className={cn(
            "underline underline-offset-4 text-sky-800 hover:text-sky-700 mt-2 inline-block",
            highlightLinks && "font-semibold font-lg"
          )}
        >
          Learn More
        </p>
      </div>
    </Link>
  );
};

export default HowWeHelpSection;
