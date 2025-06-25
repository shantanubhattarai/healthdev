import Image from "next/image";
import TransportImage from "@/public/images/Transport.jpg";
import Transport01Image from "@/public/images/Transport_01.jpg";

export default function TransportAssistance() {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-teal-800 bg-noise bg-blend-multiply text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-current-serif font-medium mb-4">
            Transport Assistance
          </h2>
        </div>
      </section>
      <section className="pt-12">
        <p className="text-zinc-800">
          At Apex Aid Health Care, we understand how important it is to access
          your community, appointments, education, and social life with ease and
          confidence. Our
          <span className="font-medium"> Transport Assistance </span>
          service is designed to support individuals with disabilities to travel
          safely, independently, and on time — whether it&apos;s for daily
          routines or special events.
        </p>
        <div className="relative h-96 lg:h-[640px] rounded-md mt-4">
          <Image
            src={TransportImage}
            alt="transport assistance"
            fill
            className="rounded-md object-cover object-center"
          />
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-teal-800">
          What is transport assistance?
        </h3>
        <div className="text-zinc-800">
          <p>
            Transport Assistance helps NDIS participants travel to and from:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Medical appointments and allied health sessions</li>
            <li>Day programs, schools, or training facilities</li>
            <li>Social, recreational, or cultural activities</li>
            <li>Community events or personal errands</li>
            <li>Employment, volunteer work, or job interviews</li>
          </ul>
          <p className="mt-2">This support may be funded under the NDIS as:</p>
          <ul className="list-disc list-inside mt-2">
            <li className="font-medium">Core Supports - Transport Allowance</li>
            <li className="font-medium">
              Support Worker Time - Assistance with Community Access (including
              transport)
            </li>
          </ul>
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-teal-800">
          How do we support you?
        </h3>
        <p className="text-zinc-800">
          We tailor our transport solutions to meet your unique needs,
          preferences, and schedule:
        </p>
        <div className="text-zinc-800 flex flex-col gap-2 mt-2">
          <div>
            <p className="font-medium">Door-to-Door Pickups</p>
            <p>
              Safe and punctual transport from your home to your destination and
              back.
            </p>
          </div>
          <div>
            <p className="font-medium">Supported Travel</p>
            <p>
              A qualified support worker can accompany you during outings to
              provide guidance, physical assistance, or reassurance.
            </p>
          </div>
          <div>
            <p className="font-medium">Special Vehicle Access</p>
            <p>
              Access to suitable vehicles for wheelchair users or those with
              mobility aids.
            </p>
          </div>
          <div>
            <p className="font-medium">Public Transport Training</p>
            <p>
              Build confidence in using buses, trains, and trams independently.
            </p>
          </div>
          <div>
            <p className="font-medium">Flexible Scheduling</p>
            <p>
              Regular or one-off trips, short distances or longer journeys—we
              work around your life.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-12">
        <div className="w-full h-96 lg:h-[720px] relative">
          <Image
            src={Transport01Image}
            alt="Hospital to home"
            fill
            className="rounded-md object-cover object-center"
          />
        </div>
      </section>

      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-teal-800">
          How choose Apex Aid for transport?
        </h3>
        <div className="text-zinc-800 flex flex-col gap-2 mt-2">
          <div>
            <p className="font-medium">Reliable and Safe Vehicles</p>
            <p>Our fleet meets all safety and accessibility standards.</p>
          </div>
          <div>
            <p className="font-medium">Trusted, Experienced Staff</p>
            <p>
              All drivers and support workers hold valid licenses, NDIS Worker
              Screening, and First Aid certifications.
            </p>
          </div>
          <div>
            <p className="font-medium">Empowering Independence</p>
            <p>
              We promote skill-building and confidence so you can travel more
              independently over time.
            </p>
          </div>
          <div>
            <p className="font-medium">Respectful and Inclusive Service</p>
            <p>
              We prioritise dignity, punctuality, and clear communication in
              every journey.
            </p>
          </div>
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-teal-800">
          Making the journey matter
        </h3>
        <p className="mt-2 text-zinc-800">
          At Apex Aid Health Care, transport is more than just getting from A to
          B — it&apos;s about
          <span className="font-medium"> freedom, choice, and inclusion. </span>
          Whether you&apos;re heading to an appointment, a class, or catching up
          with friends, we&apos;re here to make sure you get there safely and
          with support that suits you.
        </p>
      </section>
    </article>
  );
}
