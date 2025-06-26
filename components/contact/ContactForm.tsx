const ContactForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
          Name<span className="text-red-700">*</span>
        </label>
        <input
          className="border border-zinc-300 bg-white rounded-sm p-2 block w-full"
          placeholder="Your name"
          required
          name="name"
        />
      </div>
      <div>
        <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
          Email<span className="text-red-700">*</span>
        </label>
        <input
          className="border border-zinc-300 bg-white rounded-sm p-2 block w-full"
          required
          placeholder="Your email address"
          name="email"
        />
      </div>
      <div>
        <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
          Phone Number<span className="text-red-700">*</span>
        </label>
        <input
          className="border border-zinc-300 bg-white rounded-sm p-2 block w-full"
          required
          placeholder="Your phone number"
          name="phone"
        />
      </div>
      <div>
        <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
          Contact Preference
        </label>
        <div className="flex flex-col md:flex-row lg:space-x-2 wrap">
          <div className="flex space-x-1 items-center">
            <input
              className="border border-zinc-300 bg-white"
              type="radio"
              id="contact-callback"
              name="contact-preference"
            />
            <label htmlFor="contact-callback" className="text-zinc-800">
              Request for Callback
            </label>
          </div>
          <div className="flex space-x-1 items-center">
            <input
              className="border border-zinc-300 bg-white"
              type="radio"
              id="contact-email"
              name="contact-preference"
            />
            <label htmlFor="contact-email" className="text-zinc-800">
              Request for email
            </label>
          </div>
        </div>
      </div>
      <div>
        <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
          Enquiry
        </label>
        <textarea
          placeholder="Any additional information you would like to send"
          className="border border-zinc-300 bg-white rounded-sm p-2 block w-full resize-none"
          rows={5}
          name="enquiry"
        />
      </div>
      <button
        className="font-medium bg-sky-800 bg-noise bg-blend-color-burn text-white px-6 py-2 rounded-sm tracking-wide cursor-pointer ring ring-sky-600 hover:bg-sky-700 hover:ring-sky-500 active:bg-sky-900 transition-all"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
