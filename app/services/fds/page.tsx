import Image from "next/image";

export default function SDA() {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-brand-800 bg-noise bg-blend-soft-light text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-serif font-medium mb-4">
            Forensic Disability Services
          </h2>
        </div>
      </section>
      <section className="pt-12">
        <p>
          At Apex Aid Health Care, we recognise the unique and complex needs of
          individuals with a disability who are involved in the criminal justice
          system. Our
          <span className="font-medium"> Forensic Disability Support </span>
          services are designed to provide structured, therapeutic, and
          person-centred care for people with cognitive, intellectual, or
          psychosocial disabilities who have encountered legal or forensic
          settings.
        </p>
        <div className="relative h-96 rounded-md mt-4">
          <Image
            src="https://picsum.photos/1024/1024"
            alt="sda"
            fill
            className="rounded-md"
          />
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium">
          What is Forensic Disability Support?
        </h3>
        <div className="text-zinc-700">
          <p>
            Forensic disability support involves specialised services for people
            who:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              Have a diagnosed disability and are involved in, or at risk of
              entering, the criminal justice system
            </li>
            <li>
              May be under community-based orders, parole, or custodial
              supervision
            </li>
            <li>
              Need a structured support environment to address behaviours of
              concern
            </li>
          </ul>
        </div>
        <p className="text-zinc-700 mt-2">
          Our focus is on
          <span className="font-medium">
            {" "}
            rehabilitation, risk management, skill development,{" "}
          </span>
          and
          <span className="font-medium"> community reintegration, </span>
          always delivered in a safe, respectful, and non-judgmental manner.
        </p>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium">Our approach</h3>
        <p className="text-zinc-700">
          At Apex Aid Health Care, we take a trauma-informed, strengths-based
          approach that includes:
        </p>
        <div className="mt-2 flex items-start gap-4">
          <div className="text-zinc-700 flex flex-col gap-2">
            <div>
              <p className="font-medium">
                Individualised Behaviour Support Plans
              </p>
              <p>
                Developed in collaboration with Positive Behaviour Practitioners
                and clinical teams to manage risk and promote safer
                decision-making.
              </p>
            </div>
            <div>
              <p className="font-medium">Specialised Staff Training</p>
              <p>
                Our team is trained in working with complex behaviours, forensic
                risk, restrictive practices, and safeguarding vulnerable
                participants.
              </p>
            </div>
            <div>
              <p className="font-medium">Structured Daily Routines</p>
              <p>
                Providing consistency, safety, and meaningful engagement to
                support behaviour regulation and personal growth.
              </p>
            </div>
            <div>
              <p className="font-medium">
                Collaboration with Justice and Health Services
              </p>
              <p>
                We work closely with legal guardians, courts, probation
                services, and forensic clinicians to ensure continuity of care
                and appropriate reporting.
              </p>
            </div>
            <div>
              <p className="font-medium">Pathways to Independence</p>
              <p>
                Support to develop life skills, social skills, emotional
                regulation, and vocational readiness in line with NDIS goals and
                forensic care plans.
              </p>
            </div>
          </div>

          <div className="w-96 h-72 relative shrink-0">
            <Image
              src="https://picsum.photos/1000/1000"
              alt="Design standards"
              fill
              className="rounded-md"
            />
          </div>
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium">
          Eligibility and Access
        </h3>
        <div className="text-zinc-700">
          <p>
            Access to forensic disability support services typically involves
            collaboration between:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              The NDIS (including funding through &quot;Improved
              Relationships&quot; or &quot;CB Daily Activities&quot;)
            </li>
            <li>State-based forensic or disability services</li>
            <li>Legal and mental health professionals</li>
            <li>Families, guardians, or appointed advocates</li>
          </ul>
        </div>
        <p className="text-zinc-700 mt-2">
          If you or someone you support has a forensic disability need, Apex Aid
          Health Care can help you navigate referrals, assessments, and tailored
          support planning.
        </p>
      </section>
    </article>
  );
}
