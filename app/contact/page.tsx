import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";

const Contact = () => {
  return (
    <article className="px-4 lg:px-0 container mx-auto">
      <section className="text-white px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-64 bg-amber-900 bg-noise bg-blend-soft-light text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-serif font-medium mb-4">
            Contact Us
          </h2>
          <p className="text-zinc-200 leading-5">
            Use this form to reach out to us regarding any questions or
            feedback.
          </p>
          <p className="text-zinc-200 leading-5 mt-1">
            You can also check our FAQ for answers to commonly asked questions.
          </p>
        </div>
      </section>
      <section className="grid grid-cols-2 gap-8 py-24">
        <ContactForm />
        <div className="bg-amber-100 text-amber-900 bg-noise bg-blend-soft-light rounded-md py-8 px-6 w-fit h-fit mt-6">
          <ContactDetails />
        </div>
      </section>
    </article>
  );
};

export default Contact;
