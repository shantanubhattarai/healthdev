export default function Home() {
  return (
    <main className="px-4 lg:px-8">
      <section className="text-background px-4 py-2 rounded-md flex flex-col gap-8 justify-center items-center min-h-96 bg-green-900 bg-noise bg-blend-soft-light text-center">
        <div className="max-w-xl">
          <h2 className="text-4xl tracking-wide font-serif font-medium mb-4">
            Begin your health journey
          </h2>
          <p className="text-zinc-200 leading-5">
            We combine experience and empathy to lead the way in psychosocial
            and forensic disability across the NT
          </p>
        </div>
        <button className="text-medium bg-green-700 bg-noise bg-blend-color-burn text-white px-6 py-2 rounded-sm tracking-wide text-sm cursor-pointer ring ring-green-600 hover:ring-white transition-all">
          Learn More
        </button>
      </section>

      <section className="py-12">
        <h3 className="text-lg font-medium">Navigating Recovery Together</h3>
        <p className="text-zinc-700">Let us join you in your recovery.</p>
        <p className="text-zinc-700">
          Engage in opportunities you choose. You get an inclusive environment,
          surrounded by our values to create the experience that lets you put
          your foot forward.
        </p>
      </section>
    </main>
  );
}
