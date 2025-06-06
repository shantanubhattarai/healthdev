import ContactSection from "@/components/home/ContactSection";
import HowWeHelpSection from "@/components/home/HowWeHelpSection";
import Image from "next/image";
import Link from "next/link";

import HeroBG from "@/public/images/home.jpg";
import Trees from "@/components/svg/Trees";
import {
  AlarmClockIcon,
  CalendarClockIcon,
  ScanHeartIcon,
  UserPenIcon,
} from "lucide-react";

export default function Home() {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section
        className="text-white px-4 py-8 rounded-md flex flex-col gap-8 justify-center items-center min-h-[46vh] text-center bg-center bg-cover bg-black/30 bg-blend-overlay"
        style={{ backgroundImage: `url(${HeroBG.src})` }}
      >
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-4xl tracking-wide font-serif font-medium mb-4">
            Care that lifts, support that lasts
          </h2>
          <p className="text-zinc-200 leading-5">
            Disability is not a limitation, but a call for equity, inclusion,
            and empowerment.
          </p>
        </div>
        <Link
          className="text-medium bg-brand-700 bg-noise bg-blend-color-burn text-white px-6 py-2 rounded-sm tracking-wide text-sm cursor-pointer ring ring-brand-600 hover:ring-brand-400 hover:bg-brand-600 active:bg-brand-800 transition-all"
          href="/about"
        >
          Learn More
        </Link>
      </section>

      <section className="py-12 md:pt-24">
        <div className="flex flex-col gap-4 justify-center items-center text-center">
          <h3 className="text-2xl lg:text-4xl text-brand-800">
            Define your own success with our care
          </h3>
          <p className="text-zinc-800 text-lg md:text-xl max-w-2xl">
            Our dedicated team provide tailored supports that make a real
            difference in your everyday life.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 text-left gap-x-4 gap-y-6 lg:gap-y-8 mt-4">
            <div className="lg:px-8 flex flex-row items-start justify-start gap-x-4">
              <UserPenIcon className="mt-1 text-green-700 shrink-0" />
              <div>
                <h4 className="text-xl">Responsive, quick appointments</h4>
                <p className="text-zinc-800">
                  Receive quick support with an experienced professional in a
                  matter of hours
                </p>
              </div>
            </div>
            <div className="lg:px-8 flex flex-row items-start justify-start gap-x-4">
              <AlarmClockIcon className="mt-1 text-green-700 shrink-0" />
              <div>
                <h4 className="text-xl">Personalized plans for you</h4>
                <p className="text-zinc-800">
                  We take time to understand your personal stories and goals and
                  work to design truly effective supports.
                </p>
              </div>
            </div>
            <div className="lg:px-8 flex flex-row items-start justify-start gap-x-4">
              <CalendarClockIcon className="mt-1 text-green-700 shrink-0" />
              <div>
                <h4 className="text-xl">
                  24/7 flexible support from start to finish
                </h4>
                <p className="text-zinc-800">
                  Our support staff provide round-the-clock assistance ensuring
                  safety, security and immediate help.
                </p>
              </div>
            </div>
            <div className="lg:px-8 flex flex-row items-start justify-start gap-x-4">
              <ScanHeartIcon className="mt-1 text-green-700 shrink-0" />
              <div>
                <h4 className="text-xl">Genuine care for every case</h4>
                <p className="text-zinc-800">
                  We offer care for complex behaviours, physical disabilities,
                  psychosocial challenges and forensic disability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:pt-24">
        <div className="flex flex-col md:flex-row gap-4 md:gap-16 justify-center items-center">
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-2xl lg:text-4xl mb-2 text-brand-800">
                Empowering Lives.
                <br /> Supporting Independence.
              </h3>
            </div>
            <p className="text-zinc-800 text-lg md:text-xl max-w-xl">
              <span className="mr-2">
                Engage in opportunities you choose. You get an inclusive
                environment, surrounded by our values to create the experience
                that lets you put your foot forward.
              </span>
              <Trees />
            </p>
          </div>
          <div className="relative max-w-full w-96 h-96">
            <Image
              src="https://picsum.photos/1000/1000"
              alt="home-1"
              className="absolute inset-0 object-contain rounded-xl z-20 border-background border-0 md:border-4"
              width={480}
              height={480}
            />
            <Image
              src="https://picsum.photos/800/800"
              alt="home-1"
              className="absolute hidden xl:block -top-12 -left-6 object-contain rounded-full border-background border-8 z-30"
              width={100}
              height={100}
            />
            <Image
              src="https://picsum.photos/1024/1024"
              alt="home-1"
              className="absolute hidden xl:block top-4 -right-18 object-contain rounded-full border-background border-6 z-30"
              width={100}
              height={100}
            />
            <Image
              src="https://picsum.photos/640/640"
              alt="home-1"
              className="absolute hidden xl:block -top-12 -right-24 object-contain rounded-full z-10"
              width={64}
              height={64}
            />
          </div>
        </div>
      </section>
      <HowWeHelpSection />
      <ContactSection />
    </article>
  );
}
