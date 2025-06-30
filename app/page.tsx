import ContactSection from "@/components/home/ContactSection";
import HowWeHelpSection from "@/components/home/HowWeHelpSection";

import { Clock3Icon, HeartIcon, ShieldCheckIcon } from "lucide-react";
import HeroSection from "@/components/home/HeroSection";
import EmpowerSection from "@/components/home/EmpowerSection";
import AboutSection from "@/components/home/AboutSection";
import Banner from "@/components/common/Banner";

export default function Home() {
  return (
    <article>
      <HeroSection />
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
            <div className="grid grid-cols-1 lg:grid-cols-3 text-left gap-x-4 gap-y-12 lg:gap-y-8 mt-12 lg:mt-16">
              <div className="lg:px-8 flex flex-col items-center justify-center text-center gap-y-4">
                <Clock3Icon className="text-teal-700" size={42} />
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
                <HeartIcon className="text-teal-700" size={42} />
                <div>
                  <h4 className="text-xl font-medium">Personalized Support</h4>
                  <p className="text-zinc-800">Care tailored to your needs</p>
                </div>
              </div>
              <div className="lg:px-8 flex flex-col items-center justify-center text-center gap-y-4">
                <ShieldCheckIcon className="text-teal-700" size={42} />
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
        <EmpowerSection />
        <AboutSection />
        <HowWeHelpSection />
        <section className="pb-16">
          <Banner
            mainText="Ready to explore how Apex Aid Health Care can support you?"
            urlText="Talk to Our Team"
            url="/contact"
          />
        </section>
        <ContactSection />
      </section>
    </article>
  );
}
