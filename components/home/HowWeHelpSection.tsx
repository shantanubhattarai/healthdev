"use client";

import clsx from "clsx";
import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const HowWeHelpSection = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const toggleCardSelect = (key: string) => {
    if (selected === key) {
      setSelected(null);
      return;
    }
    setSelected(key);
  };

  return (
    <section className="pb-12 md:pb-24 lg:py-24">
      <h3 className="text-center text-4xl leading-14 mb-8">How we help</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 items-center justify-start relative">
        <HelpCard
          toggleCardSelect={toggleCardSelect}
          selected={selected}
          label="Specialist Disability Accommodation"
          cardKey="sda"
        >
          <p className="line-clamp-3">
            At Apex Aid Health Care, we understand that having the right home
            environment is essential for people living with significant
            disabilities. That is why we offer Specialist Disability
            Accommodation (SDA) — high-quality housing solutions designed for
            NDIS participants with complex needs or extreme functional
            limitations.
          </p>
        </HelpCard>
        <HelpCard
          toggleCardSelect={toggleCardSelect}
          selected={selected}
          label="Supported Independent Living"
          cardKey="sil"
        >
          <p className="line-clamp-3">
            At Apex Aid Health Care, our Supported Independent Living (SIL)
            services are designed to empower individuals with disabilities to
            live as independently as possible while receiving the support they
            need. We provide tailored assistance in shared or individual living
            environments, guided by each participant&apos;s NDIS goals, daily
            routines, and personal preferences.
          </p>
        </HelpCard>
        <HelpCard
          toggleCardSelect={toggleCardSelect}
          selected={selected}
          label="Respite Care & Short-Term Accommodation"
          cardKey="sta"
        >
          <p className="line-clamp-3">
            Short Term Accommodation (STA), often referred to as respite care,
            provides temporary supported housing for people with disabilities.
            It offers a break or relief for regular carers and families, while
            giving participants an opportunity to experience living
            independently or in a supported environment for a short period.
          </p>
        </HelpCard>
        <HelpCard
          toggleCardSelect={toggleCardSelect}
          selected={selected}
          label="Forensic Disability Services"
          cardKey="fds"
        >
          <p className="line-clamp-3">
            At Apex Aid Health Care, we recognise the unique and complex needs
            of individuals with a disability who are involved in the criminal
            justice system. Our
            <span className="font-medium"> Forensic Disability Support </span>
            services are designed to provide structured, therapeutic, and
            person-centred care for people with cognitive, intellectual, or
            psychosocial disabilities who have encountered legal or forensic
            settings.
          </p>
        </HelpCard>
        <HelpCard
          toggleCardSelect={toggleCardSelect}
          selected={selected}
          label="Hospital to Home"
          cardKey="htoh"
        >
          <p className="line-clamp-3">
            At Apex Aid Health Care, we understand that leaving hospital is a
            critical time that requires careful planning and the right support.
            Our
            <span className="font-medium"> Hospital to Home </span>
            transition service is designed to help individuals with disability,
            illness, or injury move safely and confidently from hospital or
            rehabilitation settings back into their homes or supported living
            environments.
          </p>
        </HelpCard>
        <Link className="block w-full" href="/services">
          <div
            className={clsx(
              "pb-6 rounded-sm cursor-pointer transition-all h-full inline-flex flex-col items-center justify-center w-full overflow-clip",
              `ring ring-zinc-500 hover:ring-2 hover:ring-zinc-600`,
              `bg-zinc-50`
            )}
          >
            <div className="w-full h-48 rounded-t-sm mb-4 overflow-clip">
              <Image
                src={"https://picsum.photos/500/500"}
                alt={"See all services"}
                width={500}
                height={500}
                className="object-cover object-center rounded-t-sm max-w-full max-h-full"
              />
            </div>
            <p
              className={clsx(
                "text-center transition-all",
                "text-lg",
                "text-zinc-700 underline underline-offset-2"
              )}
            >
              See all services
            </p>
          </div>
        </Link>
        {/* <HelpCard
          toggleCardSelect={toggleCardSelect}
          selected={selected}
          label="Community Nursing"
          cardKey="cn"
        >
          <p className="line-clamp-3">
            At Apex Aid Health Care, our
            <span className="font-medium"> Community Nursing Services </span>
            are designed to provide compassionate, clinical care to individuals
            living with a disability or chronic health condition — delivered in
            the comfort of their own home or supported accommodation.
          </p>
        </HelpCard> */}
        {/* <HelpCard
          toggleCardSelect={toggleCardSelect}
          selected={selected}
          label="Assistance with Daily Living"
          cardKey="adl"
        >
          <p className="line-clamp-3">
            At Apex Aid Health Care, we provide
            <span className="font-medium">
              {" "}
              Assistance with Daily Living (ADL){" "}
            </span>
            to help individuals with disabilities manage everyday tasks and
            routines in a way that supports
            <span className="font-medium">
              {" "}
              independence, dignity, and personal choice.{" "}
            </span>
            Our goal is to empower people to live life on their own
            terms—safely, confidently, and comfortably in their home or
            community.
          </p>
        </HelpCard> */}
        {/* <HelpCard
          toggleCardSelect={toggleCardSelect}
          selected={selected}
          label="Community Participation"
          cardKey="scp"
        >
          <p className="line-clamp-3">
            At Apex Aid Health Care, we believe that everyone deserves the
            opportunity to be an active part of their community. Our
            <span className="font-medium"> Community Participation </span>
            support services are designed to empower individuals with
            disabilities to engage in meaningful, social, recreational, and
            civic activities that enrich their lives and foster a sense of
            belonging.
          </p>
        </HelpCard> */}
        {/* <HelpCard
          toggleCardSelect={toggleCardSelect}
          selected={selected}
          label="Group Activities"
          cardKey="group"
        >
          <p className="line-clamp-3">
            At Apex Aid Health Care, we offer a range of
            <span className="font-medium"> group-based activities </span>
            designed to foster
            <span className="font-medium">
              {" "}
              social connection, skill development, and personal growth.{" "}
            </span>
            Group activities are a great way for participants to meet new
            people, build confidence, and have fun in a safe and supportive
            environment.
          </p>
        </HelpCard> */}
        {/* <HelpCard
          toggleCardSelect={toggleCardSelect}
          selected={selected}
          label="Transport Assistance"
          cardKey="transport"
        >
          <p className="line-clamp-3">
            At Apex Aid Health Care, we understand how important it is to access
            your community, appointments, education, and social life with ease
            and confidence. Our
            <span className="font-medium"> Transport Assistance </span>
            service is designed to support individuals with disabilities to
            travel safely, independently, and on time — whether it&apos;s for
            daily routines or special events.
          </p>
        </HelpCard> */}
        {/* <HelpCard
          toggleCardSelect={toggleCardSelect}
          selected={selected}
          label="Household Assistance"
          cardKey="household"
        >
          <p className="line-clamp-3">
            At Apex Aid Health Care, we provide
            <span className="font-medium"> Household Assistance </span>
            to help individuals with disabilities manage day-to-day domestic
            tasks. Our support is designed to ensure your home remains clean,
            safe, and functional — while also promoting your independence and
            dignity.
          </p>
        </HelpCard> */}
      </div>
    </section>
  );
};

const HelpCard = ({
  cardKey,
  imageSrc,
  label,
  selected,
  toggleCardSelect,
  children,
}: {
  cardKey: string;
  label: string;
  imageSrc?: string;
  selected: string | null;
  toggleCardSelect: (key: string) => void;
  children: React.ReactNode;
}) => {
  return (
    <>
      <div
        className={clsx(
          "pb-6 rounded-sm cursor-pointer transition-all h-full inline-flex flex-col items-center justify-center",
          `ring ring-zinc-500 hover:ring-2 hover:ring-zinc-600`,
          `bg-zinc-50`
        )}
        key={cardKey}
        onClick={() => toggleCardSelect(cardKey)}
      >
        <div className="w-full h-48 rounded-t-sm mb-4 overflow-clip">
          <Image
            src={imageSrc || "https://picsum.photos/400/400"}
            alt={label}
            width={500}
            height={500}
            className="object-cover object-center rounded-t-sm max-w-full max-h-full"
          />
        </div>
        <p className={clsx("text-center transition-all", "text-lg")}>{label}</p>
      </div>
      {selected === cardKey ? (
        <div
          className={clsx(
            "px-6 py-6 rounded-sm cursor-pointer transition-all",
            `ring-2 ring-zinc-900 hover:ring-zinc-600`,
            `bg-zinc-50`,
            "absolute inset-0",
            " overflow-hidden"
          )}
          key={`overlay-${cardKey}`}
          onClick={() => toggleCardSelect(cardKey)}
        >
          <p className={clsx("text-left font-medium tracking-wide", "text-lg")}>
            {label}
          </p>
          <div className={clsx("text-zinc-800 mt-2", "block")}>{children}</div>
          <Link
            href={`/services/${cardKey}`}
            className="underline underline-offset-4 text-zinc-800 hover:text-zinc-900 mt-2 inline-block"
          >
            Learn More
          </Link>
          <X
            className={clsx("absolute right-4 top-6 md:top-3")}
            onClick={() => toggleCardSelect(cardKey)}
          />
        </div>
      ) : null}
    </>
  );
};

export default HowWeHelpSection;
