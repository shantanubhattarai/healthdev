import Image from "next/image";
import STAImage from "@/public/images/STA.jpg";

export default function STA() {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-brand-800 bg-noise bg-blend-soft-light text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-serif font-medium mb-4">
            Respite Care & Short-Term Accommodation
          </h2>
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-brand-800">
          What is Short-Term Accommodation?
        </h3>
        <p className="text-zinc-800">
          Short Term Accommodation (STA), often referred to as respite care,
          provides temporary supported housing for people with disabilities. It
          offers a break or relief for regular carers and families, while giving
          participants an opportunity to experience living independently or in a
          supported environment for a short period.
        </p>
        <p className="text-zinc-800">
          STA can range from overnight stays to several weeks, depending on
          individual needs and NDIS funding.
        </p>
        <div className="relative h-96  lg:h-[640px] rounded-md mt-4">
          <Image
            src={STAImage}
            alt="fds"
            fill
            className="rounded-md object-cover object-center"
          />
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-brand-800">
          How to access STA through the NDIS
        </h3>
        <p className="text-zinc-800">
          Accessing STA through the NDIS usually involves the following steps:
        </p>
        <div className="text-zinc-800 flex flex-col gap-2 mt-2">
          <div>
            <p className="font-medium">Review your NDIS Plan</p>
            <p>
              Check if your current NDIS plan includes funding for Short Term
              Accommodation or Respite services under &quot;Daily Supports&quot;
              or &quot;Assistance with Daily Living.&quot;
            </p>
          </div>
          <div>
            <p className="font-medium">
              Discuss with your NDIS Planner or Support Coordinator
            </p>
            <p>
              Work with your planner or coordinator to include STA funding in
              your next plan review or request a plan review if your current
              plan doesn&apos;t cover it.
            </p>
          </div>
          <div>
            <p className="font-medium">Choose a Provider</p>
            <p>
              Select a registered provider like Apex Aid Health Care that offers
              STA tailored to your needs and preferences.
            </p>
          </div>
          <div>
            <p className="font-medium">Booking and Coordination</p>
            <p>
              Once funding and provider are confirmed, you can book your stay,
              and the provider will coordinate care and support during your time
              in STA.
            </p>
          </div>
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-brand-800">
          What can you use STA for?
        </h3>
        <p className="text-zinc-800">
          STA is versatile and can be used for many purposes, including:
        </p>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>Giving your regular carers a well-deserved break</li>
          <li>
            Trying out new living arrangements before making longer-term
            decisions
          </li>
          <li>Recovering after hospital stays or health setbacks</li>
          <li>Learning new skills to increase independence</li>
          <li>
            Participating in social, recreational, or community activities with
            support
          </li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-brand-800">
          What to expect at Apex Aid Health Care Respite
        </h3>
        <p className="text-zinc-800">
          At Apex Aid Health Care, our STA services are designed to be
          comfortable, safe, and empowering. Here&apos;s what you can expect:
        </p>
        <div className="text-zinc-800 flex flex-col gap-2 mt-2">
          <div>
            <p className="font-medium">Person-Centered Care</p>
            <p>
              We tailor support to your individual goals, routines, and
              preferences.
            </p>
          </div>
          <div>
            <p className="font-medium">Experienced and Compassionate Staff</p>
            <p>
              Our team is trained to provide respectful and responsive
              assistance 24/7 as needed.
            </p>
          </div>
          <div>
            <p className="font-medium">
              Accessible and Comfortable Accommodation
            </p>
            <p>
              Our properties meet SDA standards to ensure accessibility and
              comfort for all participants.
            </p>
          </div>
          <div>
            <p className="font-medium">
              Engaging Activities and Social Opportunities
            </p>
            <p>
              We encourage participation in activities that promote wellbeing,
              social connection, and enjoyment.
            </p>
          </div>
          <div>
            <p className="font-medium">Flexible Stay Durations</p>
            <p>
              Whether you need a short overnight stay or several weeks, we work
              with you to accommodate your needs.
            </p>
          </div>
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-brand-800">
          For more independent clients
        </h3>
        <p className="text-zinc-800">
          For participants who are more independent, our STA offers:
        </p>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>Greater autonomy in daily routines and decision-making</li>
          <li>
            Opportunities to practise life skills in a supported environment
          </li>
          <li>Access to communal spaces for socialising or quiet reflection</li>
          <li>
            Support available as needed, while respecting privacy and
            independence
          </li>
        </ul>
        <p className="text-zinc-800 mt-2">
          At Apex Aid Health Care, our goal is to make your STA experience
          positive and enriching, giving you the support you need while
          promoting independence and confidence.
        </p>
      </section>
    </article>
  );
}
