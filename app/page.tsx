import ContactSection from "@/components/home/ContactSection";
import HowWeHelpSection from "@/components/home/HowWeHelpSection";
import Image from "next/image";
import Link from "next/link";

import HeroBG from "@/public/images/home.jpg";
import EmpowerImage from "@/public/images/EmpowerSection.jpg";
import EmpowerMini01 from "@/public/images/EmpowerMini01.jpg";
import EmpowerMini02 from "@/public/images/EmpowerMini02.jpg";
import EmpowerMini03 from "@/public/images/EmpowerMini03.jpg";
import Trees from "@/components/svg/Trees";

import { Clock3Icon, HeartIcon, ShieldCheckIcon } from "lucide-react";

export default function Home() {
  return (
    <article>
      <section
        className="text-white px-4 py-8 flex flex-col gap-8 justify-center items-center min-h-[75dvh] text-center bg-center bg-cover bg-black/30 bg-blend-overlay"
        style={{ backgroundImage: `url(${HeroBG.src})` }}
      >
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-4xl tracking-wide font-serif font-medium mb-4">
            Care that uplifts, support that endures
          </h2>
          <p className="text-zinc-200 leading-5">
            Disability is not a limitation, but a call for equity, inclusion,
            and empowerment.
          </p>
        </div>
        <Link
          className="bg-brand-800 bg-noise bg-blend-color-burn
            hover:ring hover:ring-brand-400 hover:bg-brand-700 active:bg-brand-900 transition-all
            cursor-pointer
            px-6 py-2 rounded-sm
            text-white tracking-wide
            "
          href="/contact"
        >
          Enquire Now
        </Link>
      </section>
      <section className="px-4 pt-12 md:pt-8 container mx-auto">
        <section className="py-12 md:pt-24">
          <div className="flex flex-col gap-4 justify-center items-center text-center">
            <h3 className="text-2xl lg:text-4xl font-medium text-teal-700">
              Define your own success with our care
            </h3>
            <p className="text-zinc-800 text-lg md:text-xl max-w-2xl">
              Our dedicated team provide tailored supports that make a real
              difference in your everyday life.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 text-left gap-x-4 gap-y-6 lg:gap-y-8 mt-8 lg:mt-12">
              <div className="lg:px-8 flex flex-col items-center justify-center text-center gap-y-4">
                <Clock3Icon className="text-teal-700" />
                <div>
                  <h4 className="text-xl font-medium">
                    Responsive, quick appointments
                  </h4>
                  <p className="text-zinc-800">
                    Prompt service when you need it.
                  </p>
                </div>
              </div>
              <div className="lg:px-8 flex flex-col items-center justify-center text-center gap-y-4">
                <HeartIcon className="text-teal-700" />
                <div>
                  <h4 className="text-xl font-medium">Personalized Support</h4>
                  <p className="text-zinc-800">Care tailored to your needs</p>
                </div>
              </div>
              <div className="lg:px-8 flex flex-col items-center justify-center text-center gap-y-4">
                <ShieldCheckIcon className="text-teal-700" />
                <div>
                  <h4 className="text-xl font-medium">
                    Experienced Professionals
                  </h4>
                  <p className="text-zinc-800">
                    Qualified and compassionate team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:pt-36">
          <div className="flex flex-col md:flex-row gap-4 md:gap-16 justify-center items-center">
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-2xl lg:text-4xl font-medium mb-2 text-teal-700">
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
                src={EmpowerImage}
                alt="home-1"
                className="absolute inset-0 aspect-square object-cover object-center rounded-xl z-20 border-background border-0 md:border-4"
                width={480}
              />
              <Image
                src={EmpowerMini03}
                alt="home-1"
                className="absolute hidden xl:block -top-12 -left-6 rounded-full border-background border-8 z-30 aspect-square object-cover object-center"
                width={100}
              />
              <Image
                src={EmpowerMini02}
                alt="home-1"
                className="absolute hidden xl:block top-4 -right-18 rounded-full border-background border-6 z-30 aspect-square object-cover object-center"
                width={100}
                height={100}
              />
              <Image
                src={EmpowerMini01}
                alt="home-1"
                className="absolute hidden xl:block -top-12 -right-24 rounded-full z-10 aspect-square object-cover object-center"
                width={64}
                height={64}
              />
            </div>
          </div>
        </section>
        <HowWeHelpSection />
        <ContactSection />
      </section>
    </article>
  );
}
