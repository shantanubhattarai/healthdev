import ReferralForm from "@/components/referral/ReferralForm";

const Referral = () => {
  return (
    <article className="px-4 lg:px-0  pt-12 md:pt-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-amber-900 bg-noise bg-blend-soft-light text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-serif font-medium mb-4">
            Make a Referral
          </h2>
          <p className="text-zinc-200 leading-5">
            Making a referral to Apex Aid Health Care is easy and simple.
            Complete the below form and a friendly team member will get in
            contact with you.
          </p>
        </div>
      </section>
      <section className="pt-24 py-12 max-w-xl">
        <ReferralForm />
      </section>
    </article>
  );
};

export default Referral;
