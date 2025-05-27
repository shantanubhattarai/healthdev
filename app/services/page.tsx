"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Services = () => {
  const [selectedKey, setSelectedKey] = useState<string | null>("sda");

  const selectService = (key: string) => {
    setSelectedKey(key);
  };

  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-brand-800 bg-noise bg-blend-soft-light text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-serif font-medium mb-4">
            Our Services
          </h2>
        </div>
      </section>
      <section className="pt-12 text-zinc-700">
        <p>
          At Apex Aid Health Care, we provide person-centred, high-quality NDIS
          services that reflect each participant&apos;s unique goals, needs, and
          values. We understand that every individual&apos;s journey is
          different, and we tailor our support to promote dignity, independence,
          and self-determination.
        </p>
        <p className="mt-2">
          Our services are designed to be responsive, culturally respectful, and
          outcome-driven. Whether you need support with daily living tasks,
          personal care, or community engagement, our team works alongside you
          to help you build capacity and lead a fulfilling life. We prioritise
          clear communication, transparency, and collaborative planning to
          ensure you stay informed and in control of your care every step of the
          way.
        </p>
        <p className="mt-2">
          With Apex Aid Health Care, you are not just accessing a service — you
          are building a trusted partnership focused on achieving the goals that
          matter most to you.
        </p>
      </section>
      <section className="pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-x-4 lg:gap-x-8">
          <div>
            <ul className="flex flex-row md:flex-col items-start gap-2 pt-6 overflow-x-scroll md:overflow-hidden pb-3 mb-3 md:pb-0 md:mb-0">
              <ServiceItem
                serviceKey="sda"
                label="Specialist Disability Accommodation"
                selectedKey={selectedKey}
                selectService={selectService}
              />
              <ServiceItem
                serviceKey="sil"
                label="Supported Independent Living"
                selectedKey={selectedKey}
                selectService={selectService}
              />
              <ServiceItem
                serviceKey="sta"
                label="Respite Care & Short-Term Accommodation"
                selectedKey={selectedKey}
                selectService={selectService}
              />
              <ServiceItem
                serviceKey="fds"
                label="Forensic Disability Services"
                selectedKey={selectedKey}
                selectService={selectService}
              />
              <ServiceItem
                serviceKey="skill-development"
                label="Skill Development"
                selectedKey={selectedKey}
                selectService={selectService}
              />
              <ServiceItem
                serviceKey="employment-support"
                label="Employment Support"
                selectedKey={selectedKey}
                selectService={selectService}
              />
            </ul>
          </div>
          <div className="md:col-span-2 lg:col-span-3">
            <ServiceContent
              value="sda"
              selectedKey={selectedKey}
              imageSrc="https://picsum.photos/800/800"
              imageAlt="sda"
              url={"/services/sda"}
            >
              <p>
                At Apex Aid Health Care, we understand that having the right
                home environment is essential for people living with significant
                disabilities. That is why we offer Specialist Disability
                Accommodation (SDA) — high-quality housing solutions designed
                for NDIS participants with complex needs or extreme functional
                limitations.
              </p>
            </ServiceContent>
            <ServiceContent
              value="sil"
              selectedKey={selectedKey}
              imageSrc="https://picsum.photos/900/900"
              imageAlt="sil"
              url={"/services/sil"}
            >
              <p>
                At Apex Aid Health Care, our Supported Independent Living (SIL)
                services are designed to empower individuals with disabilities
                to live as independently as possible while receiving the support
                they need. We provide tailored assistance in shared or
                individual living environments, guided by each
                participant&apos;s NDIS goals, daily routines, and personal
                preferences.
              </p>
            </ServiceContent>
            <ServiceContent
              value="sta"
              selectedKey={selectedKey}
              imageSrc="https://picsum.photos/1024/900"
              imageAlt="sta"
              url={"/services/sta"}
            >
              <p>
                Short Term Accommodation (STA), often referred to as respite
                care, provides temporary supported housing for people with
                disabilities. It offers a break or relief for regular carers and
                families, while giving participants an opportunity to experience
                living independently or in a supported environment for a short
                period.
              </p>
            </ServiceContent>
            <ServiceContent
              value="fds"
              selectedKey={selectedKey}
              imageSrc="https://picsum.photos/1024/900"
              imageAlt="forensic disability services"
              url={"/services/fds"}
            >
              <p>
                At Apex Aid Health Care, we recognise the unique and complex
                needs of individuals with a disability who are involved in the
                criminal justice system. Our
                <span className="font-medium">
                  {" "}
                  Forensic Disability Support{" "}
                </span>
                services are designed to provide structured, therapeutic, and
                person-centred care for people with cognitive, intellectual, or
                psychosocial disabilities who have encountered legal or forensic
                settings.
              </p>
            </ServiceContent>
            <ServiceContent value="skill-development" selectedKey={selectedKey}>
              <div className="w-full relative h-96">
                <Image
                  src="https://picsum.photos/900/800"
                  fill
                  alt="Skill Development"
                  className="rounded-lg object-cover"
                />
              </div>
              <p className="pt-8">
                Travelling day in and day out. Doing business like this takes
                much more effort than doing your own business at home, and on
                top of that {"there's"} the curse of travelling, worries about
                making train connections, bad and irregular food, contact with
                different people all the time so that you can never get to know
                anyone or become friendly with them. It can all go to Hell! He
                felt a slight itch up on his belly; pushed himself slowly up on
                his back towards the headboard so that he could lift his head
                better; found where the itch was, and saw that it was covered
                with lots of little white spots which he {"didn't"} know what to
                make of; and when he tried to feel the place with one of his
                legs he drew it quickly back because as soon as he touched it he
                was overcome by a cold shudder. He slid back into his former
                position.
              </p>
            </ServiceContent>
            <ServiceContent
              value="employment-support"
              selectedKey={selectedKey}
            >
              <div className="w-full relative h-96">
                <Image
                  src="https://picsum.photos/800/900"
                  fill
                  alt="Employment Support"
                  className="rounded-lg object-cover"
                />
              </div>
              <p className="pt-8">
                {`For instance, whenever I go back to the guest house during the morning to copy out the contract, these gentlemen are always
                still sitting there eating their breakfasts. I ought to just try
                that with my boss; I'd get kicked out on the spot. But who
                knows, maybe that would be the best thing for me. If I didn't
                have my parents to think about I'd have given in my notice a
                long time ago, I'd have gone up to the boss and told him just
                what I think, tell him everything I would, let him know just
                what I feel. He'd fall right off his desk! And it's a funny sort
                of business to be sitting up there at your desk, talking down at
                your subordinates from up there, especially when you have to go
                right up close because the boss is hard of hearing. Well,
                there's still some hope; once I've got the money together to pay
                off my parents' debt to him - another five or six years I
                suppose - that's definitely what I'll do. That's when I'll make
                the big change. First of all though, I've got to get up, my
                train leaves at five. And he looked over at the alarm clock,
                ticking on the chest of drawers.`}
              </p>
            </ServiceContent>
          </div>
        </div>
      </section>
    </article>
  );
};

const ServiceContent = ({
  children,
  value,
  selectedKey,
  imageSrc,
  imageAlt,
  url,
}: {
  children: React.ReactNode;
  value: string;
  selectedKey: string | null;
  imageSrc: string;
  imageAlt: string;
  url: string;
}) => {
  if (selectedKey !== value) return;
  return (
    <>
      <div className="w-full relative h-96">
        <Image
          src={imageSrc}
          fill
          alt={imageAlt}
          className="rounded-lg object-cover"
        />
      </div>
      <div className="pt-8 text-zinc-700">{children}</div>
      <Link
        href={url}
        className="underline underline-offset-4 text-zinc-700 hover:text-zinc-900 mt-2 inline-block"
      >
        Learn More
      </Link>
    </>
  );
};

const ServiceItem = ({
  serviceKey,
  label,
  selectedKey,
  selectService,
}: {
  serviceKey: string;
  label: string;
  selectedKey: string | null;
  selectService: (key: string) => void;
}) => {
  return (
    <button
      className={clsx(
        "text-md lg:text-xl xl:text-2xl hover:cursor-pointer border-b-2 pb-2 pt-4 shrink-0 text-left",
        serviceKey === selectedKey
          ? "border-zinc-900"
          : "border-zinc-300 text-zinc-500 hover:text-zinc-600 hover:border-zinc-600"
      )}
      onClick={() => selectService(serviceKey)}
    >
      {label}
    </button>
  );
};

export default Services;
