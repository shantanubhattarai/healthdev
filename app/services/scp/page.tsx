import Image from "next/image";
import SCPImage from "@/public/images/SCP.jpg";
import SCP01Image from "@/public/images/SCP_01.jpg";

export default function HTOH() {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-teal-800 bg-noise bg-blend-multiply text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-current-serif font-medium mb-4">
            Social & Community Participation
          </h2>
        </div>
      </section>
      <section className="pt-12">
        <p className="text-zinc-800">
          At Apex Aid Health Care, we believe that everyone deserves the
          opportunity to be an active part of their community. Our
          <span className="font-medium"> Community Participation </span>
          support services are designed to empower individuals with disabilities
          to engage in meaningful, social, recreational, and civic activities
          that enrich their lives and foster a sense of belonging.
        </p>
        <div className="relative h-96 lg:h-[640px] rounded-md mt-4">
          <Image
            src={SCPImage}
            alt="Social and Community Participation"
            fill
            className="rounded-md object-cover object-top"
          />
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-teal-800">
          What is Community Participation?
        </h3>
        <p className="text-zinc-800">
          Community Participation refers to support that helps you connect with
          your community, build relationships, develop skills, and pursue
          hobbies or goals. It&apos;s about
          <span className="font-medium">
            {" "}
            living life to the fullest — outside the home,{" "}
          </span>
          with confidence and choice.
        </p>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-teal-800">
          NDIS and community participation
        </h3>
        <p className="mt-2 text-zinc-800">
          This support is funded through NDIS under:
        </p>
        <ul className="list-disc list-inside text-zinc-800 mt-2">
          <li className="font-medium">
            Capacity Building - Increased Social & Community Participation
          </li>
          <li className="font-medium">
            Core Supports - Assistance with Social, Economic and Community
            Participation
          </li>
        </ul>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-teal-800">
          How do we support you?
        </h3>
        <p className="text-zinc-800 mt-2">
          Our trained and friendly support workers can assist you with:
        </p>
        <div className="text-zinc-800 flex flex-col gap-2 mt-2">
          <div>
            <p className="font-medium">Social Activities</p>
            <p>
              Attend events, community groups, movie nights, sports games, or
              catch up with friends.
            </p>
          </div>
          <div>
            <p className="font-medium">Skill-Building Programs</p>
            <p>
              Learn how to manage money, use public transport, cook, or improve
              communication skills.
            </p>
          </div>
          <div>
            <p className="font-medium">Volunteering & Work Experience</p>
            <p>
              Engage in local volunteering opportunities or explore pathways
              into employment.
            </p>
          </div>
          <div>
            <p className="font-medium">Health & Wellness Activities</p>
            <p>
              Join a gym, attend yoga or swim classes, or take part in wellness
              and mindfulness programs.
            </p>
          </div>
          <div>
            <p className="font-medium">Cultural & Recreational Outings</p>
            <p>
              Visit libraries, museums, art classes, markets, nature parks, or
              participate in hobby-based clubs.
            </p>
          </div>
          <div>
            <p className="font-medium">
              Independent Travel & Public Transport Training
            </p>
            <p>
              Build the skills and confidence to travel independently and safely
              in your local area.
            </p>
          </div>
        </div>
      </section>
      <section className="pt-12">
        <div className="w-full h-96 lg:h-[640px] relative">
          <Image
            src={SCP01Image}
            alt="Hospital to home"
            fill
            className="rounded-md object-cover object-center"
          />
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-teal-800">
          Why does community participation matter?
        </h3>
        <div className="text-zinc-800">
          <ul className="list-disc list-inside mt-2">
            <li>Builds confidence & social skills</li>
            <li>Promotes independence</li>
            <li>Improves mental health & emotional wellbeing</li>
            <li>Encourages inclusion & belonging</li>
            <li>Fosters friendships & community connections</li>
          </ul>
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-teal-800">
          Our approach
        </h3>
        <p className="mt-2 text-zinc-800">
          At Apex Aid Health Care, we tailor every activity to your interests,
          abilities, and goals. We believe community participation should be
          <span className="font-medium"> fun, meaningful, and empowering </span>
          — not just something to fill time. Whether you&apos;re looking to try
          something new, reconnect with old hobbies, or simply get out more and
          enjoy life, our team is here to support you every step of the way.
        </p>
      </section>
    </article>
  );
}
