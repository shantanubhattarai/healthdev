import Image from "next/image";
import SILImage from "@/public/images/SIL.jpg";
import CN from "@/public/images/CN.jpg";

export default function SIL() {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-brand-800 bg-noise bg-blend-soft-light text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-serif font-medium mb-4">
            Supported Independent Living
          </h2>
        </div>
      </section>
      <section className="pt-12">
        <p className="text-zinc-800">
          At Apex Aid Health Care, our Supported Independent Living (SIL)
          services are designed to empower individuals with disabilities to live
          as independently as possible while receiving the support they need. We
          provide tailored assistance in shared or individual living
          environments, guided by each participant&apos;s NDIS goals, daily
          routines, and personal preferences.
        </p>
        <div className="relative h-96 lg:h-[640px] rounded-md mt-4">
          <Image
            src={SILImage}
            alt="sda"
            fill
            className="rounded-md object-cover object-top"
          />
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-brand-800">
          What we offer
        </h3>
        <p className="text-zinc-800">
          Our SIL services cover a wide range of supports, including:
        </p>
        <div className="mt-2 flex flex-col xl:flex-row items-start gap-4">
          <div className="text-zinc-800 flex flex-col gap-2">
            <div>
              <p className="font-medium">Daily Living Assistance</p>
              <p>
                Support with everyday activities such as personal care, meal
                preparation, cleaning, laundry, and household management — all
                delivered with respect for the participant&apos;s autonomy and
                routines.
              </p>
            </div>
            <div>
              <p className="font-medium">24/7 On-Site Support</p>
              <p>
                Depending on the individual&apos;s needs, we offer
                round-the-clock assistance from qualified support staff,
                ensuring safety, security, and immediate help whenever required.
              </p>
            </div>
            <div>
              <p className="font-medium">Skill Building and Development</p>
              <p>
                We actively support participants in developing life skills such
                as budgeting, cooking, using public transport, and managing
                appointments — promoting confidence and long-term independence.
              </p>
            </div>
            <div>
              <p className="font-medium">Medication and Health Management</p>
              <p>
                Trained staff assist with medication prompts, health monitoring,
                and coordination with healthcare professionals to ensure
                continuity of care and overall wellbeing.
              </p>
            </div>
            <div>
              <p className="font-medium">Person-Centered Planning</p>
              <p>
                We start with understanding the unique needs, preferences, and
                goals of every participant. Through collaborative planning with
                individuals, families, and support coordinators, we design
                tailored SIL arrangements that reflect each person&apos;s vision
                for their life.
              </p>
            </div>
            <div>
              <p className="font-medium">Safe, Supportive Homes</p>
              <p>
                Our SIL homes are welcoming, inclusive, and safe environments
                where participants feel a sense of belonging. We foster positive
                relationships among housemates and create spaces where people
                can enjoy both independence and community.
              </p>
            </div>
            <div>
              <p className="font-medium">Social and Community Engagement</p>
              <p>
                Our team encourages and supports residents to participate in
                social, recreational, and community activities, helping to build
                meaningful connections and reduce isolation.
              </p>
            </div>
          </div>
          <div className="w-full xl:w-96 h-72 relative shrink-0">
            <Image
              src={CN}
              alt="Design standards"
              fill
              className="rounded-md object-cover object-center"
            />
          </div>
        </div>
        <p className="mt-2 text-zinc-800">
          Every SIL arrangement at Apex Aid Health Care is tailored through a
          person-centred planning approach. We work closely with participants,
          families, and support networks to create safe, supportive, and
          inclusive environments where individuals can thrive.
        </p>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-brand-800">
          Empowering independence, every step of the way
        </h3>
        <p className="text-zinc-800 mt-2">
          At Apex Aid Health Care, we believe that everyone deserves the right
          to live life on their own terms. That&apos;s why our services are
          built around one simple goal: empowering individuals to live
          independently, with confidence and dignity.
        </p>
        <p className="text-zinc-800 mt-2">
          We don&apos;t just provide support — we build pathways. Whether
          it&apos;s learning new life skills, navigating daily routines, or
          connecting with the community, we&apos;re here to walk alongside you,
          offering the tools, encouragement, and care you need to shape your own
          future.
        </p>
        <p className="text-zinc-800 mt-2">
          Because independence isn&apos;t about doing everything alone —
          it&apos;s about having the right support to do things your way.
        </p>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-brand-800">
          Shared Accommodation: Finding the right fit
        </h3>
        <p className="text-zinc-800">
          At Apex Aid Health Care, we understand that choosing to live in shared
          accommodation is more than just finding a place to stay — it&apos;s
          about finding a space where you feel safe, respected, and understood.
        </p>
        <p className="text-zinc-800 mt-2">
          That&apos;s why we focus on creating shared living environments that
          support both independence and meaningful connections. We take the time
          to carefully match housemates based on lifestyle preferences,
          personality, routines, and support needs to ensure a harmonious and
          positive living experience for everyone involved.
        </p>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-brand-800">
          Holistic supported accommodation: integrating SIL and SDA
        </h3>
        <p className="text-zinc-800">
          At Apex Aid Health Care, we believe that quality supported
          accommodation is about more than just housing — it&apos;s about
          creating ah holistic environment that supports independence,
          wellbeing, and community connection.
        </p>
        <p className="text-zinc-800 mt-2">
          Our integrated approach combines
          <span className="font-medium">
            {" "}
            Specialist Disability Accommodation (SDA){" "}
          </span>
          with
          <span className="font-medium">
            {" "}
            Supported Independent Living (SIL){" "}
          </span>
          services to offer personalised, flexible support tailored to each
          individual&apos;s unique needs.
        </p>
      </section>
    </article>
  );
}
