import ContactSection from "@/components/home/ContactSection";
import HowWeHelpSection from "@/components/home/HowWeHelpSection";
import Image from "next/image";

export default function Home() {
  return (
    <article className="px-4 lg:px-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-[46vh] bg-green-900 bg-noise bg-blend-soft-light text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-serif font-medium mb-4">
            Begin your health journey
          </h2>
          <p className="text-zinc-200 leading-5">
            We combine experience and empathy to lead the way in psychosocial
            and forensic disability across the NT
          </p>
        </div>
        <button className="text-medium bg-green-700 bg-noise bg-blend-color-burn text-white px-6 py-2 rounded-sm tracking-wide text-sm cursor-pointer ring ring-green-600 hover:ring-white transition-all">
          Learn More
        </button>
      </section>

      <section className="py-24">
        <div className="flex gap-16 justify-center items-center">
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-4xl leading-14 mb-2">
                Navigating Recovery Together
              </h3>
              <p className="text-zinc-700 text-xl">
                Let us join you in your recovery.
              </p>
            </div>
            <p className="text-zinc-700 text-xl max-w-xl">
              Engage in opportunities you choose. You get an inclusive
              environment, surrounded by our values to create the experience
              that lets you put your foot forward.
            </p>
          </div>
          <div className="relative w-96 h-96">
            <Image
              src="https://picsum.photos/1000/1000"
              alt="home-1"
              className="absolute inset-0 object-contain rounded-xl z-20 border-background border-4"
              width={480}
              height={480}
            />
            <Image
              src="https://picsum.photos/800/800"
              alt="home-1"
              className="absolute -top-12 -left-6 object-contain rounded-full border-background border-8 z-30"
              width={100}
              height={100}
            />
            <Image
              src="https://picsum.photos/1024/1024"
              alt="home-1"
              className="absolute top-4 -right-18 object-contain rounded-full border-background border-6 z-30"
              width={100}
              height={100}
            />
            <Image
              src="https://picsum.photos/640/640"
              alt="home-1"
              className="absolute -top-12 -right-24 object-contain rounded-full z-10"
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
