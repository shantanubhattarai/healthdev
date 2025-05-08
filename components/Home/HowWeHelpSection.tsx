"use client";

import clsx from "clsx";
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
    <section className="py-24">
      <h3 className="text-center text-4xl leading-14 mb-8">How we help</h3>
      <div className="grid grid-cols-3 gap-8 items-center justify-start relative">
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
    <div
      className={clsx(
        "px-12 py-6 rounded-md text-white cursor-pointer transition-all",
        `ring-2 ${variantClassMap[variant]}`,
        `bg-noise bg-blend-overlay`,
        selected === cardKey ? "absolute inset-0" : ""
      )}
      key={cardKey}
      onClick={() => toggleCardSelect(cardKey)}
    >
      <p
        className={clsx(
          selected === cardKey
            ? "text-left font-medium tracking-wide"
            : "text-center transition-all",
          "text-lg"
        )}
      >
        {label}
      </p>
      <div
        className={clsx(
          "text-zinc-100 mt-2",
          selected === cardKey ? "block" : "hidden"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default HowWeHelpSection;
