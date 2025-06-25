"use client";

import Link from "next/link";

import {
  AccessibilityIcon,
  AmbulanceIcon,
  ArrowRightIcon,
  HandHelpingIcon,
  HeartHandshakeIcon,
  HospitalIcon,
  HouseIcon,
  HousePlusIcon,
  UsersIcon,
  UsersRoundIcon,
} from "lucide-react";
import React from "react";

const HowWeHelpSection = () => {
  return (
    <section className="pb-12 md:pb-24 lg:py-36">
      <h3 className="text-center text-2xl lg:text-4xl font-medium leading-14 mb-8 text-teal-700">
        How we help
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        <HelpCard
          label="Specialist Disability Accommodation"
          cardKey="sda"
          icon={<AccessibilityIcon size={36} />}
        >
          <p>High-quality housing solutions designed for you</p>
        </HelpCard>
        <HelpCard
          label="Supported Independent Living"
          cardKey="sil"
          icon={<HousePlusIcon size={36} />}
        >
          <p>Independent living with support you need</p>
        </HelpCard>
        <HelpCard
          label="Respite Care & Short-Term Accommodation"
          cardKey="sta"
          icon={<HouseIcon size={36} />}
        >
          <p>Temporary Supported housing</p>
        </HelpCard>
        <HelpCard
          label="Hospital to Home"
          cardKey="htoh"
          icon={<HospitalIcon size={36} />}
        >
          <p>Move safely and confidently between the hospital and your home </p>
        </HelpCard>
        <HelpCard
          label="Community Nursing"
          cardKey="cn"
          icon={<HandHelpingIcon size={36} />}
        >
          <p>Compassionate, clinical care in the comfort of their own home</p>
        </HelpCard>
        <HelpCard
          label="Assistance with Daily Living"
          cardKey="adl"
          icon={<HeartHandshakeIcon size={36} />}
        >
          <p>Manage everyday tasks and routines</p>
        </HelpCard>
        <HelpCard
          label="Community Participation"
          cardKey="scp"
          icon={<UsersRoundIcon size={36} />}
        >
          <p>Engage in social, recreational, and civic activities</p>
        </HelpCard>
        <HelpCard
          label="Group Activities"
          cardKey="group"
          icon={<UsersIcon size={36} />}
        >
          <p>
            Foster social connections, skill development, and personal growth
          </p>
        </HelpCard>
        <HelpCard
          label="Transport Assistance"
          cardKey="transport"
          icon={<AmbulanceIcon size={36} />}
        >
          <p>Travel safely, independently, and on time</p>
        </HelpCard>
        <HelpCard
          label="Household Assistance"
          cardKey="household"
          icon={<HousePlusIcon size={36} />}
        >
          <p>Help manage day-to-day domestic tasks</p>
        </HelpCard>
        <Link href={`/services`} className="group">
          <div
            className={
              "px-6 py-6 h-full rounded-sm flex flex-col items-center justify-start w-full text-center gap-y-6 bg-brand-100 bg-[url(/noise.png)] bg-blend-darken group-hover:bg-brand-200 transition-all"
            }
          >
            <div className="text-center text-xl md:text-2xl col-span-2 flex justify-center items-center flex-col h-full text-brand-900">
              <p className="inline-flex gap-x-2 justify-start items-center  group-hover:gap-x-4 transition-all">
                <span className="inline-block">See all services</span>
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
  return (
    <Link href={`/services/${cardKey}`} className="group">
      <div
        className="px-6 py-12 h-full rounded-sm flex flex-col items-center justify-start w-full text-center gap-y-6 bg-zinc-50 group-hover:bg-teal-50 transition-all"
        key={cardKey}
      >
        <p className="text-teal-700">{icon}</p>
        <div>
          <p className="text-xl text-teal-900 font-medium">{label}</p>
          <div className="text-teal-950 mt-2">{children}</div>
        </div>
        {/* <Link
        href={`/services/${cardKey}`}
        className="underline underline-offset-4 hover:text-brand-600 mt-2 inline-block text-brand-700"
      >
        Learn More
      </Link> */}
      </div>
    </Link>
  );
};

export default HowWeHelpSection;
