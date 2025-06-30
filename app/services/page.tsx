"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import SDAImage from "@/public/images/SDA.jpg";
import SILImage from "@/public/images/SIL.jpg";
import STAImage from "@/public/images/STA.jpg";
// import FDSImage from "@/public/images/FDS.jpg";
import HToHImage from "@/public/images/HtoH.jpg";
import CNImage from "@/public/images/CN.jpg";
import ADLImage from "@/public/images/ADL.jpg";
import SCPImage from "@/public/images/SCP.jpg";
import GroupImage from "@/public/images/Group.jpg";
import TransportImage from "@/public/images/Transport.jpg";
import HouseholdImage from "@/public/images/Household.jpg";
import { usePrefs } from "../context/PrefContext";
import { cn } from "@/lib/utils";
import FAQSection from "@/components/services/FAQSection";

const Services = () => {
  const [selectedKey, setSelectedKey] = useState<string | null>("sda");

  const selectService = (key: string) => {
    setSelectedKey(key);
  };

  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-teal-800 bg-noise bg-blend-multiply text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-current-serif font-medium mb-4">
            Our Services
          </h2>
        </div>
      </section>
      <section className="pt-12 text-zinc-800">
        <p className="text-zinc-800">
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
              {/* <ServiceItem
                serviceKey="fds"
                label="Forensic Disability Services"
                selectedKey={selectedKey}
                selectService={selectService}
              /> */}
              <ServiceItem
                serviceKey="htoh"
                label="Hospital to Home"
                selectedKey={selectedKey}
                selectService={selectService}
              />
              <ServiceItem
                serviceKey="cn"
                label="Community Nursing"
                selectedKey={selectedKey}
                selectService={selectService}
              />
              <ServiceItem
                serviceKey="adl"
                label="Assistance with Daily Living"
                selectedKey={selectedKey}
                selectService={selectService}
              />
              <ServiceItem
                serviceKey="scp"
                label="Community Participation"
                selectedKey={selectedKey}
                selectService={selectService}
              />
              <ServiceItem
                serviceKey="group"
                label="Group Activities"
                selectedKey={selectedKey}
                selectService={selectService}
              />
              <ServiceItem
                serviceKey="transport"
                label="Transport Assistance"
                selectedKey={selectedKey}
                selectService={selectService}
              />
              <ServiceItem
                serviceKey="household"
                label="Household Assistance"
                selectedKey={selectedKey}
                selectService={selectService}
              />
            </ul>
          </div>
          <div className="md:col-span-2 lg:col-span-3">
            <ServiceContent
              value="sda"
              selectedKey={selectedKey}
              imageSrc={SDAImage.src}
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
              imageSrc={SILImage.src}
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
              imageSrc={STAImage.src}
              imageAlt="Respite Care & Short-Term Accommodation"
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
            {/* <ServiceContent
              value="fds"
              selectedKey={selectedKey}
              imageSrc={FDSImage.src}
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
            </ServiceContent> */}
            <ServiceContent
              value="htoh"
              selectedKey={selectedKey}
              imageSrc={HToHImage.src}
              imageAlt="htoh"
              url={"/services/htoh"}
            >
              <p>
                At Apex Aid Health Care, we understand that leaving hospital is
                a critical time that requires careful planning and the right
                support. Our
                <span className="font-medium"> Hospital to Home </span>
                transition service is designed to help individuals with
                disability, illness, or injury move safely and confidently from
                hospital or rehabilitation settings back into their homes or
                supported living environments.
              </p>
            </ServiceContent>
            <ServiceContent
              value="cn"
              selectedKey={selectedKey}
              imageSrc={CNImage.src}
              imageAlt="cn"
              url={"/services/cn"}
            >
              <p>
                At Apex Aid Health Care, our
                <span className="font-medium">
                  {" "}
                  Community Nursing Services{" "}
                </span>
                are designed to provide compassionate, clinical care to
                individuals living with a disability or chronic health condition
                — delivered in the comfort of their own home or supported
                accommodation.
              </p>
            </ServiceContent>
            <ServiceContent
              value="adl"
              selectedKey={selectedKey}
              imageSrc={ADLImage.src}
              imageAlt="adl"
              url={"/services/adl"}
            >
              <p>
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
            </ServiceContent>
            <ServiceContent
              value="scp"
              selectedKey={selectedKey}
              imageSrc={SCPImage.src}
              imageAlt="scp"
              url={"/services/scp"}
            >
              <p>
                At Apex Aid Health Care, we believe that everyone deserves the
                opportunity to be an active part of their community. Our
                <span className="font-medium"> Community Participation </span>
                support services are designed to empower individuals with
                disabilities to engage in meaningful, social, recreational, and
                civic activities that enrich their lives and foster a sense of
                belonging.
              </p>
            </ServiceContent>
            <ServiceContent
              value="group"
              selectedKey={selectedKey}
              imageSrc={GroupImage.src}
              imageAlt="group"
              url={"/services/group"}
            >
              <p>
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
            </ServiceContent>
            <ServiceContent
              value="transport"
              selectedKey={selectedKey}
              imageSrc={TransportImage.src}
              imageAlt="transport"
              url={"/services/transport"}
            >
              <p>
                At Apex Aid Health Care, we understand how important it is to
                access your community, appointments, education, and social life
                with ease and confidence. Our
                <span className="font-medium"> Transport Assistance </span>
                service is designed to support individuals with disabilities to
                travel safely, independently, and on time — whether it&apos;s
                for daily routines or special events.
              </p>
            </ServiceContent>
            <ServiceContent
              value="household"
              selectedKey={selectedKey}
              imageSrc={HouseholdImage.src}
              imageAlt="household"
              url={"/services/household"}
            >
              <p>
                At Apex Aid Health Care, we provide
                <span className="font-medium"> Household Assistance </span>
                to help individuals with disabilities manage day-to-day domestic
                tasks. Our support is designed to ensure your home remains
                clean, safe, and functional — while also promoting your
                independence and dignity.
              </p>
            </ServiceContent>
          </div>
        </div>
      </section>
      <FAQSection />
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
  imageSrc?: string;
  imageAlt: string;
  url: string;
}) => {
  const { highlightLinks } = usePrefs();
  if (selectedKey !== value) return;
  return (
    <>
      {imageSrc ? (
        <div className="w-full relative h-96 lg:h-[640px] mb-8">
          <Image
            src={imageSrc}
            fill
            alt={imageAlt}
            className="rounded-lg object-cover object-center"
          />
        </div>
      ) : (
        <p className="mb-2 text-2xl"> {imageAlt} </p>
      )}
      <div className="text-zinc-800">{children}</div>
      <Link
        href={url}
        className={cn(
          "underline underline-offset-4 text-sky-800 hover:text-sky-700 mt-2 inline-block",
          highlightLinks && "font-semibold font-lg"
        )}
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
          ? "border-sky-800 text-sky-800"
          : "border-zinc-300 text-zinc-500 hover:text-zinc-600 hover:border-zinc-600"
      )}
      onClick={() => selectService(serviceKey)}
    >
      {label}
    </button>
  );
};

export default Services;
