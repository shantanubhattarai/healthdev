"use client";

import clsx from "clsx";
import { X } from "lucide-react";
import { useState } from "react";

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
          variant="green"
          label="Community Access"
          cardKey="community-access"
        >
          <p>
            From visiting family, attending spiritual and cultural events, or
            fishing off the jetty, our team is excited to support you to access
            all your community and beyond has to offer.
          </p>
          <p>
            We also partner with other providers and community groups to help
            you find activities that fit your interests.
          </p>
        </HelpCard>
        <HelpCard
          toggleCardSelect={toggleCardSelect}
          selected={selected}
          variant="yellow"
          label="Daily Support"
          cardKey="daily-support"
        >
          <p>Community Access Description</p>
        </HelpCard>
        <HelpCard
          toggleCardSelect={toggleCardSelect}
          selected={selected}
          variant="cyan"
          label="Independent Living"
          cardKey="independent-living"
        >
          <p>Community Access Description</p>
        </HelpCard>
        <HelpCard
          toggleCardSelect={toggleCardSelect}
          selected={selected}
          variant="teal"
          label="Transport"
          cardKey="transport"
        >
          <p>Community Access Description</p>
        </HelpCard>
        <HelpCard
          toggleCardSelect={toggleCardSelect}
          selected={selected}
          variant="rose"
          label="Skill Development"
          cardKey="skill-development"
        >
          <p>Community Access Description</p>
        </HelpCard>
        <HelpCard
          toggleCardSelect={toggleCardSelect}
          selected={selected}
          variant="violet"
          label="Employment Support"
          cardKey="employment-support"
        >
          <p>Community Access Description</p>
        </HelpCard>
      </div>
    </section>
  );
};

const HelpCard = ({
  cardKey,
  label,
  variant,
  selected,
  toggleCardSelect,
  children,
}: {
  cardKey: string;
  label: string;
  variant: "green" | "cyan" | "teal" | "yellow" | "rose" | "violet";
  selected: string | null;
  toggleCardSelect: (key: string) => void;
  children: React.ReactNode;
}) => {
  const variantClassMap = {
    green: "ring-green-900 hover:ring-green-600 bg-green-800",
    cyan: "ring-cyan-900 hover:ring-cyan-600 bg-cyan-800",
    teal: "ring-teal-900 hover:ring-teal-600 bg-teal-800",
    yellow: "ring-yellow-900 hover:ring-yellow-600 bg-yellow-800",
    rose: "ring-rose-900 hover:ring-rose-600 bg-rose-800",
    violet: "ring-violet-900 hover:ring-violet-600 bg-violet-800",
  };

  return (
    <>
      <div
        className={clsx(
          "px-12 py-6 rounded-sm text-white cursor-pointer transition-all h-full inline-flex flex-col items-center justify-center",
          `ring-2 ${variantClassMap[variant]}`,
          `bg-noise bg-blend-overlay`
        )}
        key={cardKey}
        onClick={() => toggleCardSelect(cardKey)}
      >
        <p className={clsx("text-center transition-all", "text-lg")}>{label}</p>
      </div>
      {selected === cardKey ? (
        <div
          className={clsx(
            "px-6 md:px-12 py-6 rounded-sm text-white cursor-pointer transition-all",
            `ring-2 ${variantClassMap[variant]}`,
            `bg-noise bg-blend-overlay`,
            "absolute inset-0"
          )}
          key={`overlay-${cardKey}`}
          onClick={() => toggleCardSelect(cardKey)}
        >
          <p className={clsx("text-left font-medium tracking-wide", "text-lg")}>
            {label}
          </p>
          <div className={clsx("text-zinc-100 mt-2", "block")}>{children}</div>
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
