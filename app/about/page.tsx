import Image from "next/image";

const About = () => {
  return (
    <article className="px-4 lg:px-0 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-amber-900 bg-noise bg-blend-soft-light text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-serif font-medium mb-4">
            About Us
          </h2>
        </div>
      </section>
      <section className="pt-12 lg:pt-24 pb-8">
        <p className="text-zinc-700">
          At HealthDEV, we believe you are the expert of your life. We pride
          ourselves on genuinely listening to you, taking the time to understand
          your unique values, experiences, and goals. We recognise that
          everyone&apos;s needs are different, so we&apos;re dedicated to
          tailoring our support to fit your individual circumstances and
          preferences.
        </p>
        <p className="text-zinc-700 mt-3">
          Choice, control, and inclusion are embedded into HealthDEV&apos;s
          organisational mission and actions. You can expect to feel safe,
          heard, and respected when engaging with us and encouraged to exercise
          choice and control over how your support is provided. Your feedback
          allows us to continuously review and improve our services to ensure we
          are providing safe and quality support.
        </p>
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
