"use client";

import Link from "next/link";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react.es";

import SDAImage from "@/public/images/SDA.jpg";
import SILImage from "@/public/images/SIL.jpg";
import STAImage from "@/public/images/STA.jpg";
import FDSImage from "@/public/images/FDS.jpg";
import HToHImage from "@/public/images/HtoH.jpg";
import CNImage from "@/public/images/CN.jpg";
import ADLImage from "@/public/images/ADL.jpg";
import SCPImage from "@/public/images/SCP.jpg";
import GroupImage from "@/public/images/Group.jpg";
import TransportImage from "@/public/images/Transport.jpg";
import HouseholdImage from "@/public/images/Household.jpg";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const HowWeHelpSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      created() {
        setLoaded(true);
      },
      loop: true,
      breakpoints: {
        "(min-width: 720px)": {
          slides: { perView: 2, spacing: 4 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 3, spacing: 4 },
        },
      },
      slides: { perView: 1, spacing: 4 },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
        slider.on("slideChanged", clearNextTimeout);
      },
    ]
  );

  const handleArrowClick = (e: any, dir: "left" | "right") => {
    if (dir === "left") {
      e.stopPropagation() || instanceRef.current?.prev();
    } else {
      e.stopPropagation() || instanceRef.current?.next();
    }
  };

  return (
    <section className="pb-12 md:pb-24 lg:py-24">
      <h3 className="text-center text-2xl lg:text-4xl font-medium leading-14 mb-8 text-brand-800">
        How we help
      </h3>
      <div className="relative">
        <div ref={sliderRef} className="keen-slider rounded-md">
          <div className="keen-slider__slide rounded-md">
            <HelpCard
              label="Specialist Disability Accommodation"
              cardKey="sda"
              imageSrc={SDAImage.src}
            >
              <p className="line-clamp-3">
                At Apex Aid Health Care, we understand that having the right
                home environment is essential for people living with significant
                disabilities. That is why we offer Specialist Disability
                Accommodation (SDA) — high-quality housing solutions designed
                for NDIS participants with complex needs or extreme functional
                limitations.
              </p>
            </HelpCard>
          </div>
          <div className="keen-slider__slide rounded-md">
            <HelpCard
              label="Supported Independent Living"
              cardKey="sil"
              imageSrc={SILImage.src}
            >
              <p className="line-clamp-3">
                At Apex Aid Health Care, our Supported Independent Living (SIL)
                services are designed to empower individuals with disabilities
                to live as independently as possible while receiving the support
                they need. We provide tailored assistance in shared or
                individual living environments, guided by each
                participant&apos;s NDIS goals, daily routines, and personal
                preferences.
              </p>
            </HelpCard>
          </div>
          <div className="keen-slider__slide rounded-md">
            <HelpCard
              label="Respite Care & Short-Term Accommodation"
              cardKey="sta"
              imageSrc={STAImage.src}
            >
              <p className="line-clamp-3">
                Short Term Accommodation (STA), often referred to as respite
                care, provides temporary supported housing for people with
                disabilities. It offers a break or relief for regular carers and
                families, while giving participants an opportunity to experience
                living independently or in a supported environment for a short
                period.
              </p>
            </HelpCard>
          </div>
          <div className="keen-slider__slide rounded-md">
            <HelpCard
              label="Forensic Disability Services"
              cardKey="fds"
              imageSrc={FDSImage.src}
            >
              <p className="line-clamp-3">
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
            </HelpCard>
          </div>
          <div className="keen-slider__slide rounded-md">
            <HelpCard
              label="Hospital to Home"
              cardKey="htoh"
              imageSrc={HToHImage.src}
            >
              <p className="line-clamp-3">
                At Apex Aid Health Care, we understand that leaving hospital is
                a critical time that requires careful planning and the right
                support. Our
                <span className="font-medium"> Hospital to Home </span>
                transition service is designed to help individuals with
                disability, illness, or injury move safely and confidently from
                hospital or rehabilitation settings back into their homes or
                supported living environments.
              </p>
            </HelpCard>
          </div>
          <div className="keen-slider__slide rounded-md">
            <HelpCard
              label="Community Nursing"
              cardKey="cn"
              imageSrc={CNImage.src}
            >
              <p className="line-clamp-3">
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
            </HelpCard>
          </div>
          <div className="keen-slider__slide rounded-md">
            <HelpCard
              label="Assistance with Daily Living"
              cardKey="adl"
              imageSrc={ADLImage.src}
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
            </HelpCard>
          </div>
          <div className="keen-slider__slide rounded-md">
            <HelpCard
              label="Community Participation"
              cardKey="scp"
              imageSrc={SCPImage.src}
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
            </HelpCard>
          </div>
          <div className="keen-slider__slide rounded-md">
            <HelpCard
              label="Group Activities"
              cardKey="group"
              imageSrc={GroupImage.src}
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
            </HelpCard>
          </div>
          <div className="keen-slider__slide rounded-md">
            <HelpCard
              label="Transport Assistance"
              cardKey="transport"
              imageSrc={TransportImage.src}
            >
              <p className="line-clamp-3">
                At Apex Aid Health Care, we understand how important it is to
                access your community, appointments, education, and social life
                with ease and confidence. Our
                <span className="font-medium"> Transport Assistance </span>
                service is designed to support individuals with disabilities to
                travel safely, independently, and on time — whether it&apos;s
                for daily routines or special events.
              </p>
            </HelpCard>
          </div>
          <div className="keen-slider__slide rounded-md">
            <HelpCard
              label="Household Assistance"
              cardKey="household"
              imageSrc={HouseholdImage.src}
            >
              <p className="line-clamp-3">
                At Apex Aid Health Care, we provide
                <span className="font-medium"> Household Assistance </span>
                to help individuals with disabilities manage day-to-day domestic
                tasks. Our support is designed to ensure your home remains
                clean, safe, and functional — while also promoting your
                independence and dignity.
              </p>
            </HelpCard>
          </div>
        </div>

        {loaded && instanceRef.current && (
          <>
            <Arrow dir="left" onClick={(e) => handleArrowClick(e, "left")} />
            <Arrow dir="right" onClick={(e) => handleArrowClick(e, "right")} />
          </>
        )}
      </div>
      <p className="text-center md:text-right">
        <Link
          href={`/services`}
          className="underline underline-offset-4 text-zinc-700 hover:text-brand-700 mt-2 inline-block"
        >
          See all services
        </Link>
      </p>
    </section>
  );
};

const Arrow = ({
  dir,
  onClick,
}: {
  dir: "left" | "right";
  onClick: (e: any) => void;
}) => {
  return dir === "left" ? (
    <ChevronLeftIcon
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2 left-1 cursor-pointer text-white"
      size={36}
    />
  ) : (
    <ChevronRightIcon
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2 right-1 cursor-pointer text-white"
      size={36}
    />
  );
};

const HelpCard = ({
  cardKey,
  imageSrc,
  label,
  children,
}: {
  cardKey: string;
  label: string;
  imageSrc?: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <div
        className="h-[480px] bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${
            imageSrc || "https://picsum.photos/2000/2000"
          })`,
        }}
        key={cardKey}
      >
        <div className="px-6 py-6 h-full rounded-sm flex flex-col items-start justify-end w-full bg-gradient-to-tr from-black to-transparent">
          <p className="text-xl text-white">{label}</p>
          <div className="text-zinc-200 mt-2 block max-w-2xl">{children}</div>
          <Link
            href={`/services/${cardKey}`}
            className="underline underline-offset-4 hover:text-brand-400 mt-2 inline-block text-zinc-200"
          >
            Learn More
          </Link>
        </div>
      </div>
    </>
  );
};

export default HowWeHelpSection;
