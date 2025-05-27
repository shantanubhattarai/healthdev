import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import Image from "next/image";

export default function SDA() {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-brand-800 bg-noise bg-blend-soft-light text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-serif font-medium mb-4">
            Specialist Disability Accommodation
          </h2>
        </div>
      </section>
      <section className="pt-12">
        <p>
          At Apex Aid Health Care, we understand that having the right home
          environment is essential for people living with significant
          disabilities. That is why we offer Specialist Disability Accommodation
          (SDA) — high-quality housing solutions designed for NDIS participants
          with complex needs or extreme functional limitations.
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
          What makes SDA different?
        </h3>
        <div className="text-zinc-700">
          SDA properties are not ordinary homes. They are designed in accordance
          with NDIS requirements and include a range of features such as:
          <ul className="list-disc list-inside mt-2">
            <li>Custom accessibility layouts</li>
            <li>Advance assistive technologies</li>
            <li>Safety modifications</li>
            <li>Durable, low maintenance materials</li>
          </ul>
        </div>
        <p className="text-zinc-700 mt-2">
          SDA also works in tandem with your other funded supports, such as
          <span className="font-medium">
            &nbsp;Supported Independent Living (SIL),&nbsp;
          </span>
          allowing you to access care services while living in a space that
          suits your needs.
        </p>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium">
          What types of SDA Homes do we provide?
        </h3>
        <p className="text-zinc-700">
          At Apex Aid Health Care, we offer a diverse range of Specialist
          Disability Accommodation (SDA) options, tailored to meet varying
          levels of support needs, mobility requirements, and personal
          preferences. Our housing models are thoughtfully designed to foster
          independence, comfort, and social inclusion:
        </p>
        <div className="flex flex-col lg:flex-row gap-4 mt-2">
          <ul className="list-disc list-inside text-zinc-700">
            <li>
              <span className="font-medium">Private Apartments - </span>
              Ideal for individuals seeking greater independence within a safe
              and supported environment, these self-contained units are part of
              managed residential complexes.
            </li>
            <li>
              <span className="font-medium">Townhouses or Villas - </span>
              Suitable for those who enjoy a balance of privacy and community,
              these homes feature shared amenities while allowing for a more
              autonomous lifestyle.
            </li>
            <li>
              <span className="font-medium">Standalone Homes - </span>
              Perfect for individuals who require a customised living space and
              a higher degree of personalisation in their support services.
            </li>
            <li>
              <span className="font-medium">Group Living Arragements - </span>
              Shared homes that encourage companionship and community living,
              supported by dedicated staff who provide daily assistance and
              tailored care.
            </li>
            <p className="mt-2 text-zinc-700">
              Each property is carefully selected and designed to ensure
              accessibility, safety, and a strong sense of belonging within the
              community.
            </p>
          </ul>
          <div className="h-72 w-96 relative shrink-0">
            <Image
              className="rounded-md"
              fill
              src="https://picsum.photos/1000/1000"
              alt="sda homes"
            />
          </div>
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium">
          Our commitment to SDA design standards
        </h3>
        <p className="text-zinc-700">
          At Apex Aid Health Care, we deliver Specialist Disability
          Accommodation (SDA) that aligns with the NDIS SDA Design Standards.
          Our properties are developed with a strong focus on safety,
          functionality, and personalised support, and fall into one or more of
          the following categories:
        </p>
        <div className="mt-2 flex items-start gap-4">
          <div className="w-96 h-72 relative shrink-0">
            <Image
              src="https://picsum.photos/1000/1000"
              alt="Design standards"
              fill
              className="rounded-md"
            />
          </div>
          <div className="text-zinc-700 flex flex-col gap-2">
            <div>
              <p className="font-medium">Sensory-Friendly Living Spaces</p>
              <p>
                Designed for individuals with sensory or cognitive impairments,
                these environments use clear visual cues, accessible layouts,
                and supportive lighting to enhance orientation and reduce
                confusion.
              </p>
            </div>
            <div>
              <p className="font-medium">Mobility-Enhanced Homes</p>
              <p>
                Ideal for residents who use wheelchairs or other mobility aids,
                these homes feature seamless access points, extra-wide doorways,
                and barrier-free bathrooms to promote ease and independence.
              </p>
            </div>
            <div>
              <p className="font-medium">Durable and Secure Environments</p>
              <p>
                Created for those who may have complex behavioural needs, these
                residences are built with reinforced materials and safe,
                low-stimulation designs to offer both resilience and comfort.
              </p>
            </div>
            <div>
              <p className="font-medium">Sensory-Friendly Living Spaces</p>
              <p>
                Tailored for individuals with high physical support
                requirements, these homes integrate assistive technologies,
                structural reinforcements, ceiling hoists, and accessible smart
                systems for maximum care and convenience.
              </p>
            </div>
          </div>
        </div>
        <p className="mt-2 text-zinc-700">
          Each property reflects our commitment to quality, comfort, and
          inclusion - empowering residents to live safely and independently
          within their communities.
        </p>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium">
          Who is eligible for SDA?
        </h3>
        <p>To be eligible for SDA housing, participants must:</p>
        <ul className="list-disc list-inside mt-2 text-zinc-700">
          <li>Be aged 18 or over</li>
          <li>Have a permanent and significant disability</li>
          <li>Require housing that meets high or very high support needs</li>
          <li>Have SDA funding approved in their NDIS plan</li>
        </ul>
        <p className="text-zinc-700 mt-2">
          If you&apos;re not sure whether you qualify, our team can help you
          navigate the process and connect you with the right professionals to
          support your application.
        </p>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium">
          Ready to take the next step?
        </h3>
        <p className="text-zinc-700">
          Whether you&apos;re just starting to explore SDA options or already
          have funding in your plan, Apex Aid Health Care is here to support
          you. We&apos;ll help you find a home that not only meets your physical
          needs but also aligns with your personal goals, values, and lifestyle.
        </p>
      </section>
      <section className="py-12 flex flex-col lg:flex-row items-start gap-8">
        <div className="w-full lg:w-96 px-6 py-4 text-brand-950 bg-brand-50 rounded-md">
          <ContactDetails />
        </div>
        <div className="w-full">
          <ContactForm />
        </div>
      </section>
    </article>
  );
}
