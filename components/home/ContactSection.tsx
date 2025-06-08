import ContactDetails from "../contact/ContactDetails";
import ContactForm from "../contact/ContactForm";

const ContactSection = () => {
  return (
    <section className="py-12 grid grid-cols-1 md:grid-cols-2 gap-8 min-h-96">
      <div className="text-white bg-amber-800 bg-noise bg-blend-soft-light rounded-md py-12 px-8">
        <h3 className="text-2xl lg:text-4xl mb-4 font-medium">Contact Us</h3>
        <ContactDetails />
      </div>
      <div className="md:p-4">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
