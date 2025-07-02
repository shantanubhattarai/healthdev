"use client";

// import clsx from "clsx";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";

// import SDAImage from "@/public/images/SDA.jpg";
// import SILImage from "@/public/images/SIL.jpg";
// import STAImage from "@/public/images/STA.jpg";
// import FDSImage from "@/public/images/FDS.jpg";
// import HToHImage from "@/public/images/HtoH.jpg";
// import CNImage from "@/public/images/CN.jpg";
// import ADLImage from "@/public/images/ADL.jpg";
// import SCPImage from "@/public/images/SCP.jpg";
// import GroupImage from "@/public/images/Group.jpg";
// import TransportImage from "@/public/images/Transport.jpg";
// import HouseholdImage from "@/public/images/Household.jpg";
// import { usePrefs } from "../context/PrefContext";
// import { cn } from "@/lib/utils";
import FAQSection from "@/components/services/FAQSection";
import ServiceListSection from "@/components/services/ServiceList";

const Services = () => {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-green-900 bg-noise bg-blend-multiply text-center">
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
      <ServiceListSection />
      <FAQSection />
    </article>
  );
};

export default Services;
