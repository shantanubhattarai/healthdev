import Image from "next/image";
import ADLImage from "@/public/images/ADL.jpg";
import ADL01Image from "@/public/images/ADL_01.jpg";

export default function SDA() {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-green-900 bg-noise bg-blend-multiply text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-current-serif font-medium mb-4">
            Assistance with Daily Living
          </h2>
        </div>
      </section>
      <section className="pt-12">
        <p className="text-zinc-800">
          At Apex Aid Health Care, we provide
          <span className="font-medium">
            {" "}
            Assistance with Daily Living (ADL){" "}
          </span>
          to help individuals with disabilities manage everyday tasks and
          routines in a way that supports
          <span className="font-medium">
            {" "}
            independence, dignity, and personal choice.{" "}
          </span>
          Our goal is to empower people to live life on their own terms—safely,
          confidently, and comfortably in their home or community.
        </p>
        <div className="relative h-96 lg:h-[640px] rounded-md mt-4">
          <Image
            src={ADLImage}
            alt="Assistance with Daily Living"
            fill
            className="rounded-md object-cover object-center"
          />
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-green-800">
          What is Assistance with Daily Living?
        </h3>
        <p className="text-zinc-800">
          ADL refers to support provided to help you complete essential daily
          tasks that may be challenging due to physical, cognitive, or
          psychosocial disability. These supports can be delivered in your own
          home, in shared accommodation, or during community participation.
        </p>
      </section>

      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-green-800">
          How do we support you?
        </h3>
        <p className="text-zinc-800">
          Our experienced and compassionate support workers assist with:
        </p>
        <div className="mt-2 flex flex-col xl:flex-row items-start gap-4">
          <div className="text-zinc-800 flex flex-col gap-2">
            <div>
              <p className="font-medium">Personal Care</p>
              <p>
                Bathing, grooming, dressing, oral hygiene, and toileting in a
                respectful and discreet manner.
              </p>
            </div>
            <div>
              <p className="font-medium">Meal Preparation & Feeding</p>
              <p>
                Assistance with preparing nutritious meals, feeding support, and
                dietary planning based on your needs and preferences.
              </p>
            </div>
            <div>
              <p className="font-medium">Mobility & Transfers</p>
              <p>
                Help with safe movement around the home, including hoist use,
                walking support, or wheelchair transfers.
              </p>
            </div>
            <div>
              <p className="font-medium">Household Tasks</p>
              <p>
                Light cleaning, laundry, dishwashing, and general tidying to
                keep your home clean and comfortable.
              </p>
            </div>
            <div>
              <p className="font-medium">
                Medication Prompts & Health Routines
              </p>
              <p>
                Support with remembering to take medications, managing
                health-related tasks, and following routines as recommended by
                medical professionals.
              </p>
            </div>
            <div>
              <p className="font-medium">Transport & Community Access</p>
              <p>
                Support to attend appointments, run errands, or engage in
                community and social activities.
              </p>
            </div>
          </div>
          <div className="w-full xl:w-xl h-96 relative shrink-0">
            <Image
              src={ADL01Image}
              alt="Design standards"
              fill
              className="rounded-md object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-green-800">
          NDIS and Daily Living Support
        </h3>
        <p className="mt-2 text-zinc-800">
          Assistance with Daily Living is typically funded under:
        </p>
        <div className="text-zinc-800 mt-2">
          <p className="font-medium">
            Core Supports - Assistance with Daily Life
          </p>
          <p>
            This allows for flexible, everyday support that meets your practical
            and personal needs at home and in the community.
          </p>
        </div>
        <p className="mt-2 text-zinc-800">
          We work closely with you and your support network to develop a
          tailored plan that aligns with your goals, promotes independence, and
          respects your lifestyle and routine.
        </p>
      </section>

      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-green-800">
          Why choose Apex Aid?
        </h3>
        <ul className="list-disc list-inside text-zinc-800 mt-2">
          <li>
            <span className="font-medium">Person-Centred Support - </span>
            We honour your choices, preferences, and goals in every aspect of
            your daily routine.
          </li>
          <li>
            <span className="font-medium">Experienced, Friendly Staff - </span>
            Our team is trained in safe, respectful, and inclusive support
            practices.
          </li>
          <li>
            <span className="font-medium">Flexible Scheduling - </span>
            Whether you need a few hours a week or 24/7 assistance, we work
            around your life.
          </li>
          <li>
            <span className="font-medium">Holistic Care - </span>
            We collaborate with allied health professionals and families to
            ensure consistent and quality support.
          </li>
          <p className="mt-2 text-zinc-800">
            At Apex Aid Health Care, we support more than just your daily
            tasks—we support your independence, wellbeing, and confidence every
            step of the way.
          </p>
        </ul>
      </section>
    </article>
  );
}
