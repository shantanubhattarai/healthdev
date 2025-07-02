import Image from "next/image";
import CNImage from "@/public/images/CN.jpg";

export default function CN() {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-green-900 bg-noise bg-blend-multiply text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-current-serif font-medium mb-4">
            Community Nursing
          </h2>
        </div>
      </section>
      <section className="pt-12">
        <p className="text-zinc-800">
          At Apex Aid Health Care, our
          <span className="font-medium"> Community Nursing Services </span>
          are designed to provide compassionate, clinical care to individuals
          living with a disability or chronic health condition — delivered in
          the comfort of their own home or supported accommodation.
        </p>
        <p className="text-zinc-800 mt-2">
          Whether you require short-term post-hospital care or ongoing medical
          support, our qualified nursing team ensures your health needs are met
          with dignity, precision, and professionalism.
        </p>
        <div className="relative h-96 lg:h-[640px] rounded-md mt-4">
          <Image
            src={CNImage}
            alt="Community Nursing"
            fill
            className="rounded-md object-cover object-center"
          />
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Who do we support?
        </h3>
        <div className="text-zinc-800">
          Our community nursing services are available to individuals who:
          <ul className="list-disc list-inside mt-2">
            <li>Require complex medical care at home</li>
            <li>
              Are transitioning from hospital to home and need clinical
              follow-up
            </li>
            <li>
              Have wounds, pressure injuries, or chronic health conditions
            </li>
            <li>
              Need support with medications, continence care, or health
              assessments
            </li>
            <li>
              Are funded under the NDIS or other disability and aged care
              programs
            </li>
          </ul>
        </div>
      </section>

      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          What services do we provide?
        </h3>
        <div className="text-zinc-800 flex flex-col gap-2 mt-2">
          <div>
            <p className="font-medium">
              Wound Care & Pressure Injury Management
            </p>
            <p>
              Expert care for acute and chronic wounds to support faster healing
              and prevent infection.
            </p>
          </div>
          <div>
            <p className="font-medium">Medication Management</p>
            <p>
              Assistance with medication administration, dosage monitoring, and
              medication reviews.
            </p>
          </div>
          <div>
            <p className="font-medium">
              Diabetes & Chronic Condition Monitoring
            </p>
            <p>
              Ongoing clinical support for blood sugar checks, insulin
              administration, and education.
            </p>
          </div>
          <div>
            <p className="font-medium">
              Continence Assessments & Catheter Care
            </p>
            <p>
              Professional support to manage continence needs, including
              catheter maintenance and hygiene education.
            </p>
          </div>
          <div>
            <p className="font-medium">PEG Feeding & Enteral Nutrition</p>
            <p>
              Safe and hygienic support for clients with nutritional support
              needs via feeding tubes.
            </p>
          </div>
          <div>
            <p className="font-medium">Health Assessments & Risk Monitoring</p>
            <p>
              Routine health checks, care planning, and early identification of
              risks or complications.
            </p>
          </div>
          <div>
            <p className="font-medium">Post-Hospital Clinical Support</p>
            <p>
              Short-term nursing care for those recovering from surgery, injury,
              or serious illness.
            </p>
          </div>
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          NDIS and community nursing
        </h3>
        <p className="mt-2 text-zinc-800">
          Under the NDIS, Community Nursing Care can be funded through:
        </p>
        <ul className="list-disc list-inside text-zinc-800 mt-2">
          <li className="font-medium">
            Capacity Building - Improved Daily Living
          </li>
          <li className="font-medium">
            Core Supports - Assistance with Daily Life (for nursing in supported
            accommodation or SIL)
          </li>
        </ul>
        <p className="mt-2 text-zinc-800">
          We work with support coordinators, families, and plan managers to
          ensure services are aligned with each participant&apos;s goals and
          clinical needs.
        </p>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Our commitment
        </h3>
        <div className="text-zinc-800 flex flex-col gap-2 mt-2">
          <div>
            <p className="font-medium">Qualified, Registered Nurses</p>
            <p>
              All care is delivered by AHPRA-registered nurses with disability
              and community care experience.
            </p>
          </div>
          <div>
            <p className="font-medium">Respectful & Person-Centred Approach</p>
            <p>
              We build trust through consistent, culturally sensitive, and
              individualised care.
            </p>
          </div>
          <div>
            <p className="font-medium">Seamless Coordination</p>
            <p>
              We collaborate with GPs, allied health professionals, and other
              care providers to ensure continuity and quality of care.
            </p>
          </div>
        </div>
        <p className="mt-4 text-zinc-800">
          At Apex Aid Health Care, our goal is to support health, independence,
          and dignity — right where you live.
        </p>
      </section>
    </article>
  );
}
