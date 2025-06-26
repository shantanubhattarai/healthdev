"use client";

import { usePrefs } from "@/app/context/PrefContext";
import { cn } from "@/lib/utils";
import Link from "next/link";
import HeroBG from "@/public/images/home.jpg";

const HeroSection = () => {
  const { highlightLinks } = usePrefs();
  return (
    <section
      className="text-white px-4 py-8 flex flex-col gap-8 justify-center items-center min-h-[75dvh] text-center bg-center bg-cover bg-black/30 bg-blend-overlay"
      style={{ backgroundImage: `url(${HeroBG.src})` }}
    >
      <div className="max-w-2xl bg-black/30 px-4 pt-6 pb-8 rounded-md">
        <h2 className="text-2xl md:text-4xl tracking-wide font-current-serif font-medium mb-4">
          Care that uplifts, support that endures
        </h2>
        <p className="text-zinc-200 leading-5">
          Disability is not a limitation, but a call for equity, inclusion, and
          empowerment.
        </p>
      </div>
      <Link
        className={cn(
          "bg-sky-800 ring ring-sky-600 hover:ring-sky-500 hover:bg-sky-700 active:ring-sky-600 active:bg-sky-900 transition-all cursor-pointer px-6 py-2 rounded-sm text-white tracking-wide",
          highlightLinks && "underline underline-offset-2"
        )}
        href="/contact"
      >
        Enquire Now
      </Link>
    </section>
  );
};

export default HeroSection;
