"use client";

import Link from "next/link";

import {
  AccessibilityIcon,
  AmbulanceIcon,
  ArrowRightIcon,
  ChevronRight,
  HandHelpingIcon,
  HeartHandshakeIcon,
  HospitalIcon,
  HouseIcon,
  HousePlusIcon,
  UsersIcon,
  UsersRoundIcon,
} from "lucide-react";
import React from "react";
import { usePrefs } from "@/app/context/PrefContext";
import { cn } from "@/lib/utils";

const ServiceListSection = () => {
  const { highlightLinks } = usePrefs();
  return (
    <section className="py-12">
      <h3 className="text-center text-2xl lg:text-4xl font-medium leading-14 mb-8 text-green-700">
        Our services
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <HelpCard
          label="Specialist Disability Accommodation"
          cardKey="sda"
          icon={<AccessibilityIcon size={48} />}
        >
          <p>High-quality housing solutions designed for you</p>
        </HelpCard>
        <HelpCard
          label="Supported Independent Living"
          cardKey="sil"
          icon={<HousePlusIcon size={48} />}
        >
          <p>Independent living with support you need</p>
        </HelpCard>
        <HelpCard
          label="Respite Care & Short-Term Accommodation"
          cardKey="sta"
          icon={<HouseIcon size={48} />}
        >
          <p>Temporary Supported housing</p>
        </HelpCard>
        <HelpCard
          label="Hospital to Home"
          cardKey="htoh"
          icon={<HospitalIcon size={48} />}
        >
          <p>Move safely and confidently between the hospital and your home </p>
        </HelpCard>
        <HelpCard
          label="Community Nursing"
          cardKey="cn"
          icon={<HandHelpingIcon size={48} />}
        >
          <p>Compassionate, clinical care in the comfort of their own home</p>
        </HelpCard>
        <HelpCard
          label="Assistance with Daily Living"
          cardKey="adl"
          icon={<HeartHandshakeIcon size={48} />}
        >
          <p>Manage everyday tasks and routines</p>
        </HelpCard>
        <HelpCard
          label="Community Participation"
          cardKey="scp"
          icon={<UsersRoundIcon size={48} />}
        >
          <p>Engage in social, recreational, and civic activities</p>
        </HelpCard>
        <HelpCard
          label="Group Activities"
          cardKey="group"
          icon={<UsersIcon size={48} />}
        >
          <p>
            Foster social connections, skill development, and personal growth
          </p>
        </HelpCard>
        <HelpCard
          label="Transport Assistance"
          cardKey="transport"
          icon={<AmbulanceIcon size={48} />}
        >
          <p>Travel safely, independently, and on time</p>
        </HelpCard>
        <HelpCard
          label="Household Assistance"
          cardKey="household"
          icon={<HousePlusIcon size={48} />}
        >
          <p>Help manage day-to-day domestic tasks</p>
        </HelpCard>
        <Link href={`/services`} className="group">
          <div
            className={
              "px-6 py-6 h-full rounded-sm flex flex-col items-center justify-start w-full text-center gap-y-6 bg-green-700 bg-[url(/noise.png)] bg-blend-darken group-hover:bg-green-600 transition-all border border-green-800"
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
        </Link>
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
    <Link href={`/services/${cardKey}`} className="group">
      <div
        className={cn(
          "px-4 lg:px-6 py-8 lg:py-6 h-full rounded-sm flex gap-x-4 items-center justify-between w-full gap-y-6 bg-zinc-100 lg:bg-zinc-50 group-hover:bg-teal-50 transition-all",
          highlightLinks ? "border-2 border-zinc-500" : "border border-zinc-200"
        )}
        key={cardKey}
      >
        <div className="flex justify-start gap-x-4 items-center">
          <p className="text-green-700">{icon}</p>
          <div>
            <p className="text-lg md:text-xl text-green-900 font-medium">
              {label}
            </p>
            <div className="text-teal-950 hidden lg:block">{children}</div>
          </div>
        </div>
        <ChevronRight className="text-green-700" size={24} />
        {/* <Link
        href={`/services/${cardKey}`}
        className="underline underline-offset-4 hover:text-sky-600 mt-2 inline-block text-green-700"
      >
        Learn More
      </Link> */}
      </div>
    </Link>
  );
};

export default ServiceListSection;
