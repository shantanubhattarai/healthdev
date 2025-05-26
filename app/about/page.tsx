import Image from "next/image";

const About = () => {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-brand-800 bg-noise bg-blend-soft-light text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-serif font-medium mb-4">
            About Us
          </h2>
          <p className="text-zinc-200 leading-5">
            Empowering Lives. Supporting Independence.
          </p>
        </div>
      </section>
      <section className="pt-12 lg:pt-24 pb-8">
        <p className="text-zinc-700">
          At <span className="font-semibold">Apex Aid Health Care</span>, we are
          committed to delivering high-quality, person-centred disability
          support services that empower individuals to live independently,
          safely, and with dignity.
        </p>
        <p className="text-zinc-700 mt-3">
          As a registered NDIS provider, we proudly support people with a wide
          range of abilities, backgrounds, and support needs—including complex
          behaviours, physical disabilities, psychosocial challenges, and
          forensic disability. Our services are built around
          <span className="font-semibold">
            &nbsp;individual choice, genuine care,&nbsp;
          </span>
          and a <span className="font-semibold">holistic approach</span> to
          wellbeing.
        </p>
      </section>
      <section className="py-6">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium">Who We Are</h3>
        <p className="text-zinc-700">
          Founded with a vision to raise the standard of disability care, Apex
          Aid Health Care brings together a dedicated team of{" "}
          <span className="font-semibold">
            experienced support workers, registered nurses, allied health
            professionals,
          </span>{" "}
          and
          <span className="font-semibold"> specialist carers.</span> Our goal is
          simple: to provide tailored supports that
          <span className="font-semibold"> make a real difference </span>in
          everyday life.
        </p>
        <p className="text-zinc-700 mt-2">
          We offer a broad range of NDIS supports including:
        </p>
        <ul className="py-1 text-zinc-700 list-disc list-inside">
          <li>Supported Independent Living (SIL) </li>
          <li>Specialist Disability Accommodation (SDA) </li>
          <li>Short-Term Accommodation (STA) / Respite</li>
          <li>Community Nursing</li>
          <li>Community Participation & Group Activities</li>
          <li>Household Tasks & Assistance with Daily Living</li>
          <li>Forensic & Complex Behavioural Supports</li>
          <li>Transition Programs (Hospital to Home, Youth to Adult Care)</li>
        </ul>
      </section>
      <section className="py-6">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium">Our Approach</h3>
        <p className="text-zinc-700">
          We don&apos;t believe in one-size-fits-all care. Instead, we take the
          time to
          <span className="font-semibold">
            &nbsp;understand each person&apos;s story, strengths, and
            goals,&nbsp;
          </span>
          working collaboratively with participants, families, support
          coordinators, and healthcare professionals to design supports that are
          truly effective and respectful.
        </p>
        <ul className="py-1 text-zinc-700 list-disc list-inside">
          <li>Individualized Support Plans</li>
          <li>Culturally Safe & Trauma-Informed Care</li>
          <li>24/7 Flexible Support Options</li>
          <li>Genuine Community Engagement</li>
          <li>Outcome-Focused & Goal-Driven Care</li>
        </ul>
      </section>
      <section className="py-6">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium">Our Mission</h3>
        <p className="text-zinc-700">
          To support people with disabilities to lead fulfilling, independent
          lives by providing care that is personal, reliable, and empowering.
        </p>
      </section>
      <section className="py-6">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium">Our Vision</h3>
        <p className="text-zinc-700">
          To be recognised as a leading, compassionate provider of disability
          and community health services—built on trust, integrity, and
          person-centred care.
        </p>
      </section>
      <section className="py-6">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium">Our Values</h3>
        <ul className="text-zinc-700 list-decimal list-inside">
          <li>
            <span className="font-medium">Dignity & Respect - </span>We honour
            each person&nbsp;s worth, voice, and choices. Every interaction
            reflects our deep respect for individual identity and autonomy.
          </li>
          <li>
            <span className="font-medium">Empowerment - </span>We support people
            to lead their own lives, make their own decisions, and build their
            confidence to achieve what matters most to them.
          </li>
          <li>
            <span className="font-medium">Inclusion - </span>We are committed to
            creating inclusive environments where everyone belongs — not just in
            words, but in actions, spaces, and attitudes.
          </li>
          <li>
            <span className="font-medium">Integrity - </span>We act with
            honesty, transparency, and accountability. Trust is the foundation
            of everything we do.
          </li>
          <li>
            <span className="font-medium">Person-centred Practice - </span>We
            see the person first, not the disability. Services are shaped around
            individual needs, goals, strengths, and stories.
          </li>
        </ul>
      </section>
      <section className="py-12">
        <h3 className="text-4xl tracking-wide text-center">Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 gap-8">
          <div className="flex flex-col gap-3 border rounded-md pb-2">
            <div className="relative w-full aspect-square">
              <Image
                className="rounded-t-md object-cover"
                src="https://picsum.photos/800/800"
                fill
                alt="team member"
              />
            </div>
            <div className="px-3">
              <p className="font-medium">John Doe</p>
              <p>Founder & CEO</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 border rounded-md pb-2">
            <div className="relative w-full aspect-square">
              <Image
                className="rounded-t-md object-cover"
                src="https://picsum.photos/800/800"
                fill
                alt="team member"
              />
            </div>
            <div className="px-3">
              <p className="font-medium">Mary Sue</p>
              <p>General Manager</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 border rounded-md pb-2">
            <div className="relative w-full aspect-square">
              <Image
                className="rounded-t-md object-cover"
                src="https://picsum.photos/800/800"
                fill
                alt="team member"
              />
            </div>
            <div className="px-3">
              <p className="font-medium">Lisa Lee</p>
              <p>CTO</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 border rounded-md pb-2">
            <div className="relative w-full aspect-square">
              <Image
                className="rounded-t-md object-cover"
                src="https://picsum.photos/800/800"
                fill
                alt="team member"
              />
            </div>
            <div className="px-3">
              <p className="font-medium">Rajesh</p>
              <p>Engineering Manager</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 border rounded-md pb-2">
            <div className="relative w-full aspect-square">
              <Image
                className="rounded-t-md object-cover"
                src="https://picsum.photos/800/800"
                fill
                alt="team member"
              />
            </div>
            <div className="px-3">
              <p className="font-medium">Shannon Saint Raven</p>
              <p>Human Resources Manager</p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default About;
