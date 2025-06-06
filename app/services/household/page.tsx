import Image from "next/image";

export default function GroupActivities() {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-brand-800 bg-noise bg-blend-soft-light text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-serif font-medium mb-4">
            Household Assistance
          </h2>
        </div>
      </section>
      <section className="pt-12">
        <p className="text-zinc-800">
          At Apex Aid Health Care, we provide
          <span className="font-medium"> Household Assistance </span>
          to help individuals with disabilities manage day-to-day domestic
          tasks. Our support is designed to ensure your home remains clean,
          safe, and functional — while also promoting your independence and
          dignity.
        </p>
        <div className="relative h-96 rounded-md mt-4">
          <Image
            src="https://picsum.photos/1024/1024"
            alt="sda"
            fill
            className="rounded-md object-cover object-center"
          />
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-brand-800">
          What is household assistance?
        </h3>
        <div className="text-zinc-800">
          <p>
            Household Assistance involves practical, hands-on help with domestic
            chores and home maintenance tasks that may be difficult to complete
            on your own due to physical, cognitive, or psychosocial challenges.
          </p>
          <p className="mt-2">This support is typically funded through:</p>
          <ul className="list-disc list-inside mt-2">
            <li className="font-medium">
              NDIS Core Supports - Assistance with Daily Life
            </li>
          </ul>
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-brand-800">
          What services do we provide?
        </h3>
        <p className="text-zinc-800">
          Our experienced support workers can assist with:
        </p>
        <div className="mt-2 flex flex-col xl:flex-row items-start gap-4">
          <div className="w-full xl:w-xl h-96 relative shrink-0">
            <Image
              src="https://picsum.photos/1000/1000"
              alt="What do we offer?"
              fill
              className="rounded-md object-cover object-center"
            />
          </div>
          <div className="text-zinc-800 flex flex-col gap-2">
            <div>
              <p className="font-medium">Cleaning & Tidying</p>
              <p>
                Vacuuming, dusting, mopping, surface cleaning, and keeping your
                home orderly.
              </p>
            </div>
            <div>
              <p className="font-medium">Cooking Classes</p>
              <p>
                Learn to prepare meals, explore nutrition, and gain independence
                in the kitchen.
              </p>
            </div>
            <div>
              <p className="font-medium">Laundry</p>
              <p>
                Washing, drying, folding, and putting away clothes and linens.
              </p>
            </div>
            <div>
              <p className="font-medium">Dishwashing & Kitchen Hygiene</p>
              <p>
                Maintaining a clean kitchen environment, including sanitising
                surfaces and appliances.
              </p>
            </div>
            <div>
              <p className="font-medium">Meal Preparation Support</p>
              <p>Helping with safe food handling, cooking, and cleaning up.</p>
            </div>
            <div>
              <p className="font-medium">Changing Bedding & Linen Care</p>
              <p>
                Ensuring fresh, clean bedding for a healthy and comfortable
                sleep environment.
              </p>
            </div>
            <div>
              <p className="font-medium">Grocery Shopping Support</p>
              <p>
                Accompanied shopping trips or help with making lists and placing
                online orders.
              </p>
            </div>
            <div>
              <p className="font-medium">Light Garden or Outdoor Tasks</p>
              <p>
                Assistance with sweeping patios, watering plants, or tidying
                outdoor areas (if within scope).
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-12">
        <div className="w-full h-96 relative">
          <Image
            src="https://picsum.photos/2000/2000"
            alt="Hospital to home"
            fill
            className="rounded-md object-cover object-center"
          />
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-brand-800">
          Our approach
        </h3>
        <div className="text-zinc-800 flex flex-col gap-2">
          <div>
            <p className="font-medium">Person-Centred Support</p>
            <p>
              We customise our services to your specific needs, preferences, and
              routines.
            </p>
          </div>
          <div>
            <p className="font-medium">Respectful & Reliable Team</p>
            <p>
              Our staff are trained, screened, and committed to maintaining your
              privacy, dignity, and safety.
            </p>
          </div>
          <div>
            <p className="font-medium">Empowerment-Focused</p>
            <p>
              We encourage you to be involved in tasks where possible, helping
              build skills and independence.
            </p>
          </div>
          <div>
            <p className="font-medium">Flexible Scheduling</p>
            <p>
              Whether you need help daily, weekly, or occasionally, we adapt to
              suit your lifestyle.
            </p>
          </div>
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-brand-800">
          Why does it matter?
        </h3>
        <p className="text-zinc-800">
          A well-maintained home supports physical and mental wellbeing. With
          Apex Aid&apos;s Household Assistance, you can focus on what matters
          most—while we help take care of the rest.
        </p>
      </section>
    </article>
  );
}
