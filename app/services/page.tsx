"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

const Services = () => {
  const [selectedKey, setSelectedKey] = useState<string | null>(
    "community-access"
  );

  const selectService = (key: string) => {
    setSelectedKey(key);
  };

  return (
    <article className="px-4 lg:px-0  pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-amber-900 bg-noise bg-blend-soft-light text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-serif font-medium mb-4">
            Our Services
          </h2>
        </div>
      </section>
      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <>
              <ServiceDetails
                value="community-access"
                selectedKey={selectedKey}
                title="Help with Community Access"
              >
                <p className="pt-4">
                  To empower you to take control of your mental well-being. We
                  aim to break the stigma surrounding mental health, making
                  therapy accessible, supportive, and transformative for
                  everyone who seeks it.
                </p>
              </ServiceDetails>
              <ServiceDetails
                value="daily-support"
                selectedKey={selectedKey}
                title="Your needs. Everyday."
              >
                <p className="pt-4">
                  To empower you to take control of your mental well-being. We
                  aim to break the stigma surrounding mental health, making
                  therapy accessible, supportive, and transformative for
                  everyone who seeks it.
                </p>
              </ServiceDetails>
              <ServiceDetails
                value="independent-living"
                selectedKey={selectedKey}
                title="Become Independent"
              >
                <p className="pt-4">
                  To empower you to take control of your mental well-being. We
                  aim to break the stigma surrounding mental health, making
                  therapy accessible, supportive, and transformative for
                  everyone who seeks it.
                </p>
              </ServiceDetails>
              <ServiceDetails
                value="transport"
                selectedKey={selectedKey}
                title="Free transport"
              >
                <p className="pt-4">
                  To empower you to take control of your mental well-being. We
                  aim to break the stigma surrounding mental health, making
                  therapy accessible, supportive, and transformative for
                  everyone who seeks it.
                </p>
              </ServiceDetails>
              <ServiceDetails
                value="skill-development"
                selectedKey={selectedKey}
                title="Assisted Learning"
              >
                <p className="pt-4">
                  To empower you to take control of your mental well-being. We
                  aim to break the stigma surrounding mental health, making
                  therapy accessible, supportive, and transformative for
                  everyone who seeks it.
                </p>
              </ServiceDetails>
              <ServiceDetails
                value="employment-support"
                selectedKey={selectedKey}
                title="Employment Support"
              >
                <p className="pt-4">
                  To empower you to take control of your mental well-being. We
                  aim to break the stigma surrounding mental health, making
                  therapy accessible, supportive, and transformative for
                  everyone who seeks it.
                </p>
              </ServiceDetails>
            </>
            <ul className="flex flex-row md:flex-col items-start gap-2 pt-6 overflow-x-scroll md:overflow-hidden pb-3 mb-3 md:pb-0 md:mb-0">
              <ServiceItem
                serviceKey="community-access"
                label="Community Access"
                selectedKey={selectedKey}
                selectService={selectService}
              />
              <ServiceItem
                serviceKey="daily-support"
                label="Daily Support"
                selectedKey={selectedKey}
                selectService={selectService}
              />
              <ServiceItem
                serviceKey="independent-living"
                label="Independent Living"
                selectedKey={selectedKey}
                selectService={selectService}
              />
              <ServiceItem
                serviceKey="transport"
                label="Transport"
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
          <div className="lg:col-span-2">
            <ServiceContent value="community-access" selectedKey={selectedKey}>
              <div className="w-full relative h-96">
                <Image
                  src="https://picsum.photos/800/800"
                  fill
                  alt="Community Access"
                  className="rounded-lg object-cover"
                />
              </div>
              <p className="pt-8">
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart. I am alone, and feel the charm of existence in this spot,
                which was created for the bliss of souls like mine. I am so
                happy, my dear friend, so absorbed in the exquisite sense of
                mere tranquil existence, that I neglect my talents. I should be
                incapable of drawing a single stroke at the present moment; and
                yet I feel that I never was a greater artist than now. When,
                while the lovely valley teems with vapour around me, and the
                meridian sun strikes the upper surface of the impenetrable
                foliage of my trees, and but a few stray gleams steal into the
                inner sanctuary, I throw myself down among the tall grass by the
                trickling stream; and, as I lie close to the earth, a thousand
                unknown plants are noticed by me: when I hear the buzz of the
                little world among the stalks, and grow familiar with the
                countless indescribable forms of the insects and flies, then I
                feel the presence of the community, who formed us in his own
                image.
              </p>
            </ServiceContent>
            <ServiceContent value="daily-support" selectedKey={selectedKey}>
              <div className="w-full relative h-96">
                <Image
                  src="https://picsum.photos/900/900"
                  fill
                  alt="Daily Support"
                  className="rounded-lg object-cover"
                />
              </div>
              <p className="pt-8">
                When considering a paragraph and how to set one well, there are
                three parameters that work together: font size, line height (or
                leading in traditional parlance), and line length (or measure).
                I am including the traditional terms here because I think it is
                important to connect how type has been set by typographers and
                graphic designers. Understanding the terms and using them
                properly helps us understand one another—and the intent behind a
                given design file—in important and fundamental ways.
              </p>
            </ServiceContent>
            <ServiceContent
              value="independent-living"
              selectedKey={selectedKey}
            >
              <div className="w-full relative h-96">
                <Image
                  src="https://picsum.photos/1024/800"
                  fill
                  alt="Independent Living"
                  className="rounded-lg object-cover"
                />
              </div>
              <p className="pt-8">
                The European languages are members of the same family. Their
                separate existence is a myth. For science, music, sport, etc,
                Europe uses the same vocabulary. The languages only differ in
                their grammar, their pronunciation and their most common words.
                Everyone realizes why a new common language would be desirable:
                one could refuse to pay expensive translators. To achieve this,
                it would be necessary to have uniform grammar, pronunciation and
                more common words. If several languages coalesce, the grammar of
                the resulting language is more simple and regular than that of
                the individual languages. The new common language will be more
                simple and regular than the existing European languages. It will
                be as simple as Occidental; in fact, it will be Occidental. To
                an English person, it will seem like simplified English, as a
                skeptical Cambridge friend of mine told me what Occidental
                is.The European languages are members of the same family. Their
                separate existence is a myth. For science, music, sport, etc,
                Europe uses the same vocabulary. The languages only differ in
                their grammar, their pronunciation and their most common words.
                Everyone realizes why a new common language would be desirable:
                one could refuse to pay expensive translators.
              </p>
            </ServiceContent>
            <ServiceContent value="transport" selectedKey={selectedKey}>
              <div className="w-full relative h-96">
                <Image
                  src="https://picsum.photos/1024/1024"
                  fill
                  alt="Transport"
                  className="rounded-lg object-cover"
                />
              </div>
              <p className="pt-8">
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff sections. The bedding was hardly able to cover
                it and seemed ready to slide off any moment.
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

const ServiceDetails = ({
  children,
  value,
  title,
  selectedKey,
}: {
  children: React.ReactNode;
  value: string;
  title: string;
  selectedKey: string | null;
}) => {
  if (selectedKey !== value) return null;
  return (
    <>
      <h4 className="text-3xl font-medium">{title}</h4>
      {children}
    </>
  );
};

const ServiceContent = ({
  children,
  value,
  selectedKey,
}: {
  children: React.ReactNode;
  value: string;
  selectedKey: string | null;
}) => {
  if (selectedKey !== value) return;
  return <>{children}</>;
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
        "text-md md:text-xl lg:text-2xl hover:cursor-pointer border-b-2 pb-2 pt-4 shrink-0",
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
