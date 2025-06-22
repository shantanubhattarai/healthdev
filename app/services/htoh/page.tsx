import Image from "next/image";
import HtoHImage from "@/public/images/HtoH.jpg";
import HtoH01Image from "@/public/images/HtoH_01.jpg";

export default function HTOH() {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-teal-800 bg-noise bg-blend-multiply text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-current-serif font-medium mb-4">
            Hospital to Home
          </h2>
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-teal-800">
          Hospital to Home: Safe, Supported Transitions
        </h3>
        <p className="text-zinc-800">
          At Apex Aid Health Care, we understand that leaving hospital is a
          critical time that requires careful planning and the right support.
          Our Hospital to Home transition service is designed to help
          individuals with disability, illness, or injury move safely and
          confidently from hospital or rehabilitation settings back into their
          homes or supported living environments.
        </p>
        <div className="relative h-96 lg:h-[640px] rounded-md mt-4">
          <Image
            src={HtoHImage}
            alt="hospital to home"
            fill
            className="rounded-md object-cover object-center"
          />
        </div>
        <p className="text-zinc-800 mt-2">
          We provide a coordinated, person-centred approach that ensures
          continuity of care, promotes recovery, and reduces the risk of
          readmission.
        </p>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-teal-800">
          Who do we support?
        </h3>
        <div className="text-zinc-800">
          Our Hospital to Home service is ideal for people who:
          <ul className="list-disc list-inside mt-2">
            <li>
              Have a disability and are transitioning from a hospital, mental
              health unit, or rehabilitation facility
            </li>
            <li>
              Require short or medium-term support before returning to permanent
              accommodation
            </li>
            <li>
              Need assistance with daily activities, mobility, equipment setup,
              or medical follow-up at home
            </li>
            <li>
              Are waiting for long-term NDIS housing or support arrangements to
              be finalised
            </li>
          </ul>
        </div>
      </section>
      <section className="pt-12">
        <div className="w-full h-96 lg:h-[480px] relative">
          <Image
            src={HtoH01Image}
            alt="Hospital to home"
            fill
            className="rounded-md object-cover object-center"
          />
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-teal-800">
          What do we offer?
        </h3>
        <div className="text-zinc-800 flex flex-col gap-2 mt-2">
          <div>
            <p className="font-medium">Transition Planning</p>
            <p>
              We work closely with hospital discharge teams, allied health
              professionals, families, and NDIS planners to create a smooth,
              coordinated exit from hospital care.
            </p>
          </div>
          <div>
            <p className="font-medium">
              Short-Term Accommodation (STA) or In-Home Support
            </p>
            <p>
              Whether returning home or into temporary accommodation, we provide
              the right environment and support team to assist with recovery and
              stability.
            </p>
          </div>
          <div>
            <p className="font-medium">Personalised Support</p>
            <p>
              Assistance with daily activities such as showering, meal
              preparation, mobility, medication prompts, and emotional support
              tailored to each person&apos;s needs.
            </p>
          </div>
          <div>
            <p className="font-medium">
              Allied Health & Equipment Coordination
            </p>
            <p>
              We help arrange essential supports such as home modifications,
              mobility aids, and ongoing therapy to ensure a safe and functional
              living space.
            </p>
          </div>
          <div>
            <p className="font-medium">Goal-Focused Care</p>
            <p>
              Our team supports participants to regain independence, rebuild
              routines, and work toward long-term goals as outlined in their
              NDIS plan.
            </p>
          </div>
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-teal-800">
          Our commitment
        </h3>
        <ul className="list-disc list-inside text-zinc-800 mt-2">
          <li>
            <span className="font-medium">Timely Response - </span>
            We prioritise fast, efficient transitions to avoid extended hospital
            stays.
          </li>
          <li>
            <span className="font-medium">Dignified Care - </span>
            Respect and empathy are at the heart of every service we provide.
          </li>
          <li>
            <span className="font-medium">Collaborative Support - </span>
            We liaise with families, case managers, support coordinators, and
            medical teams to ensure a seamless, safe transition.
          </li>
          <p className="mt-2 text-zinc-800">
            At Apex Aid Health Care, we&apos;re here to support your
            journey—every step from hospital to home. Because recovery begins
            where you feel most comfortable: in your own space, with the right
            support behind you.
          </p>
        </ul>
      </section>
    </article>
  );
}
