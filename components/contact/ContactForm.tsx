const ContactForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
          Name
        </label>
        <input
          className="border border-zinc-300 rounded-sm p-2 block w-full"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
          Email
        </label>
        <input
          className="border border-zinc-300 rounded-sm p-2 block w-full"
          placeholder="Your email address"
        />
      </div>
      <div>
        <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
          Phone Number
        </label>
        <input
          className="border border-zinc-300 rounded-sm p-2 block w-full"
          placeholder="Your phone number"
        />
      </div>
      <div>
        <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
          Message
        </label>
        <textarea
          placeholder="Any additional information you would like to send"
          className="border border-zinc-300 rounded-sm p-2 block w-full resize-none"
          rows={5}
        />
      </div>
      <button
        className="text-medium bg-amber-800 bg-noise bg-blend-color-burn text-white px-6 py-2 rounded-sm tracking-wide text-sm cursor-pointer ring ring-amber-800 hover:ring-amber-600 transition-all"
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
