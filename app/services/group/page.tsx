import Image from "next/image";
import GroupImage from "@/public/images/Group.jpg";
import SCPImage from "@/public/images/SCP.jpg";

export default function GroupActivities() {
  return (
    <article className="px-4 pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-green-900 bg-noise bg-blend-multiply text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-current-serif font-medium mb-4">
            Group Activities
          </h2>
        </div>
      </section>
      <section className="pt-12">
        <p className="text-zinc-800">
          At Apex Aid Health Care, we offer a range of
          <span className="font-medium"> group-based activities </span>
          designed to foster
          <span className="font-medium">
            {" "}
            social connection, skill development, and personal growth.{" "}
          </span>
          Group activities are a great way for participants to meet new people,
          build confidence, and have fun in a safe and supportive environment.
        </p>
        <div className="relative h-96 lg:h-[640px] rounded-md mt-4">
          <Image
            src={GroupImage}
            alt="group activities"
            fill
            className="rounded-md object-cover object-center"
          />
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-green-800">
          What are group activities?
        </h3>
        <div className="text-zinc-800">
          <p>
            Group activities bring people together in structured, inclusive
            programs where participants can
            <span className="font-medium">
              {" "}
              learn, create, share, and explore{" "}
            </span>
            — all while receiving the support they need. These programs are
            tailored to different interests, abilities, and goals.
          </p>
          <p className="mt-2">Group supports may be funded under:</p>
          <ul className="list-disc list-inside mt-2">
            <li className="font-medium">
              Core Supports - Assistance with Social and Community Participation
            </li>
            <li className="font-medium">
              Capacity Building - Increased Social and Community Participation
            </li>
          </ul>
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-green-800">
          What do we offer?
        </h3>
        <p className="text-zinc-800">
          Our group activities include, but are not limited to:
        </p>
        <div className="mt-2 flex flex-col xl:flex-row items-start gap-4">
          <div className="w-full xl:w-xl h-96 relative shrink-0">
            <Image
              src={SCPImage}
              alt="What do we offer?"
              fill
              className="rounded-md object-cover object-center"
            />
          </div>
          <div className="text-zinc-800 flex flex-col gap-2">
            <div>
              <p className="font-medium">Art & Craft Sessions</p>
              <p>
                Creative expression through painting, pottery, drawing, and DIY
                projects.
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
              <p className="font-medium">Music & Dance Workshops</p>
              <p>
                Enjoy movement, rhythm, and music in a fun, inclusive setting.
              </p>
            </div>
            <div>
              <p className="font-medium">Life Skills & Personal Development</p>
              <p>
                Group workshops on communication, self-care, budgeting, and goal
                setting.
              </p>
            </div>
            <div>
              <p className="font-medium">Outdoor & Nature Activities</p>
              <p>
                Group walks, gardening, community clean-ups, or excursions to
                local parks and nature reserves.
              </p>
            </div>
            <div>
              <p className="font-medium">Social Games & Movie Nights</p>
              <p>
                A relaxed way to socialise, laugh, and unwind in a group
                setting.
              </p>
            </div>
            <div>
              <p className="font-medium">Cultural & Community Events</p>
              <p>
                Celebrate holidays, local festivals, and multicultural events
                together.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-green-800">
          Why join our group activities?
        </h3>
        <div className="text-zinc-800">
          <ul className="list-disc list-inside mt-2">
            <li>Build friendships & social skills</li>
            <li>Reduce isolation</li>
            <li>Develop new hobbies & skills</li>
            <li>Boost self-esteem & confidence</li>
            <li>Encourage teamwork & inclusion</li>
          </ul>
        </div>
      </section>
      <section className="pt-12">
        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-green-800">
          Our approach
        </h3>
        <p className="text-zinc-800">Our group activities are:</p>
        <ul className="list-disc list-inside text-zinc-800 mt-2">
          <li>
            <span className="font-medium">Person-Centred - </span>
            We tailor sessions based on your interests and goals
          </li>
          <li>
            <span className="font-medium">Inclusive & Accessible - </span>
            Everyone is welcome, regardless of ability
          </li>
          <li>
            <span className="font-medium">Led by Qualified Staff - </span>
            Trained facilitators provide support, motivation, and safety
          </li>
          <li>
            <span className="font-medium">Fun & Engaging - </span>
            We make sure every session is something to look forward to
          </li>
          <p className="mt-2 text-zinc-800">
            At Apex Aid Health Care, we believe that shared experiences are
            powerful. Whether you&apos;re looking to learn, laugh, or just
            connect with others, our group activities offer a welcoming place to
            grow — together.
          </p>
        </ul>
      </section>
    </article>
  );
}
