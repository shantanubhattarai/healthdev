import Image from "next/image";
import SILImage from "@/public/images/SIL.jpg";
// import SIL_01 from "@/public/images/SIL_01.jpg";
import Banner from "@/components/common/Banner";
import ContactDetails from "@/components/contact/ContactDetails";

export default function SIL() {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-green-900 bg-noise bg-blend-multiply text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-current-serif font-medium mb-4">
            Supported Independent Living
          </h2>
        </div>
      </section>
      <section className="pt-12">
        <p className="text-zinc-800">
          At Apex Aid Health Care, our Supported Independent Living (SIL)
          services are designed to empower individuals with disabilities to live
          confidently and independently while receiving the support they need.
          We provide tailored assistance in shared or individual living
          environments, guided by each participant&apos;s NDIS goals, routines,
          and preferences.
        </p>
        <div className="relative h-96 lg:h-[640px] rounded-md mt-4">
          <Image
            src={SILImage}
            alt="sda"
            fill
            className="rounded-md object-cover object-top"
          />
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          What we offer
        </h3>
        <p className="text-zinc-800">
          Our SIL services cover a wide range of supports, including:
        </p>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>Daily Living Assistance</li>
          <li>Personal Care</li>
          <li>Meal Preparation</li>
          <li>Cleaning, Laundry and Home Organization</li>
        </ul>
        <p className="mt-2 text-zinc-800">
          Delivered with respect for autonomy and routine
        </p>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          24/7 On-Site Support
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>Qualified, compassionate staff</li>
          <li>Round-the-clock help based on individual needs</li>
          <li>Ensuring safety, security, and peace of mind</li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Skill Building and Development
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>Cooking, budgeting, shopping</li>
          <li>Appointment management</li>
          <li>Using public transport</li>
          <li>Boosting confidence and lifelong independence</li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Medication and Health Management
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>Medication prompts</li>
          <li>Health monitoring</li>
          <li>Coordination with health professionals</li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Person-Centred Planning
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>
            Collaborative planning with participants, families, and coordinators
          </li>
          <li>
            Individualised plans reflecting personal vision and life goals
          </li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Safe, Supportive Homes
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>Welcoming, inclusive, and secure</li>
          <li>A sense of belonging and community</li>
          <li>Respecting privacy and independence</li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Social and Community Engagement
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-800">
          <li>
            Participation in social, recreational, and community activities
          </li>
          <li>Building meaningful connections</li>
          <li>Reducing isolation</li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Empowering Independence, Every Step of the Way
        </h3>
        <p className="text-zinc-800 mt-2">
          Everyone deserves the right to live life on their own terms.
        </p>
        <p className="text-zinc-800 mt-2">
          Our mission is to build pathways, not just provide support. We support
          you to develop skills, manage routines, and connect with the
          community.
        </p>
        <p className="text-zinc-800 mt-2">
          Independence is about having the right support to do things your way.
        </p>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Shared Accommodation: Finding the right fit
        </h3>
        <p className="text-zinc-800">
          At Apex Aid Health Care, we understand that choosing to live in shared
          accommodation is more than just finding a place to stay — it&apos;s
          about finding a space where you feel safe, respected, and understood.
        </p>
        <p className="text-zinc-800 mt-2">
          That&apos;s why we focus on creating shared living environments that
          support both independence and meaningful connections. We take the time
          to carefully match housemates based on lifestyle preferences,
          personality, routines, and support needs to ensure a harmonious and
          positive living experience for everyone involved.
        </p>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Holistic supported accommodation: integrating SIL and SDA
        </h3>
        <p className="text-zinc-800">
          At Apex Aid Health Care, we believe that quality supported
          accommodation is about more than just housing — it&apos;s about
          creating ah holistic environment that supports independence,
          wellbeing, and community connection.
        </p>
        <p className="text-zinc-800 mt-2">
          Our integrated approach combines
          <span className="font-medium">
            {" "}
            Specialist Disability Accommodation (SDA){" "}
          </span>
          with
          <span className="font-medium">
            {" "}
            Supported Independent Living (SIL){" "}
          </span>
          services to offer personalised, flexible support tailored to each
          individual&apos;s unique needs.
        </p>
      </section>
      <section className="py-12">
        <Banner
          mainText={<ContactDetails horizontal />}
          url="/contact"
          urlText="Talk to Our Team"
        />
      </section>
    </article>
  );
}
