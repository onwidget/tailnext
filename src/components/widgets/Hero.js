import Image from "next/image";

const Hero = (props) => (
  <section>
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-12 md:py-20">
        <div className="text-center pb-10 md:pb-16 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-6 font-heading">
            Free template for{" "}
            <span className="hidden md:inline">starts a website using</span>{" "}
            <span>Next.js</span> +{" "}
            <span className="sm:whitespace-nowrap">Tailwind CSS</span>
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 mb-6 dark:text-slate-400 font-normal">
              <span className="hidden md:inline">
              <span className="font-semibold underline decoration-wavy decoration-1 decoration-primary-600 underline-offset-2">TailNext</span> is a production ready template to start your new
                website using <em>Next.js</em> + <em>Tailwind CSS</em>.
              </span>{" "}
              It has been designed following Best Practices, SEO, Accessibility,
              Dark Mode, great Page Speed, image optimization.
            </p>
            <div className="max-w-none px-4 flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4">
              <div className="flex w-full sm:w-auto">
                <a
                  className="btn btn-primary sm:mb-0 w-full"
                  href="https://github.com/onwidget/astrowind"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get template
                </a>
              </div>
              <div className="flex w-full sm:w-auto">
                <a className="btn w-full" href="#features">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative m-auto max-w-5xl">
            <Image
              src="https://images.unsplash.com/photo-1502101872923-d48509bff386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
              alt="Picture of the author"
              width={1024}
              height={576}
              className="mx-auto rounded-md shadow-lg bg-gray-400 dark:bg-slate-700 w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
