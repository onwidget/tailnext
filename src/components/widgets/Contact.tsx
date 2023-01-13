import {
  IconMapPin,
  IconPhoneCall,
  IconClock
} from "@tabler/icons";

const Contact = () => (
  <section className="bg-primary-50 dark:bg-slate-800" id="contact">
    <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:pt-20">
      <div className="mb-4 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Contact
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
          In hac habitasse platea dictumst
        </p>
      </div>
      <div className="flex items-stretch justify-center">
        <div className="mt-8 grid md:grid-cols-2 md:items-center">
          <div className="pr-6">
            <div className="">
              <h2 className="text-2xl font-bold">Get in Touch</h2>
              <p className="mt-3 mb-6 text-lg text-gray-600 dark:text-slate-400">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <IconMapPin className="h-6 w-6" />
                  </div>
                  <div className="ml-4 mb-4">
                    <h4 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Our Address
                    </h4>
                    <p className="text-gray-600 dark:text-slate-400">1230 Maecenas Street Donec Road</p>
                    <p className="text-gray-600 dark:text-slate-400">New York, EEUU</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <IconPhoneCall className="h-6 w-6" />
                  </div>
                  <div className="ml-4 mb-4">
                    <h4 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Contact
                    </h4>
                    <p className="text-gray-600 dark:text-slate-400">Mobile: <a href="tel:+11234567890">+1 (123) 456-7890</a></p>
                    <p className="text-gray-600 dark:text-slate-400">Mail: <a href="mailto:tailnext@gmail.com">tailnext@gmail.com</a></p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <IconClock className="h-6 w-6" />
                  </div>
                  <div className="ml-4 mb-4">
                    <h4 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Working hours
                    </h4>
                    <p className="text-gray-600 dark:text-slate-400">Monday - Friday: 08:00 - 17:00</p>
                    <p className="text-gray-600 dark:text-slate-400">Saturday &amp; Sunday: 8:00 - 12:00</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="card p-9 h-full">
            <div className="">
              <h2 className="text-2xl font-bold">Ready to Get Started?</h2>
              <p>Suspendisse ultricies quis est at bibendum</p>
              <form id="contactForm" className="mt-6">
                <div className="row">
                  <div className="grid grid-cols-2 md:grid-cols-1 my-1 md:my-0">
                    <div className="mx-1 md:mx-0 md:my-2">
                      <input type="text" name="name" placeholder="Your name" className="rounded-md border border-gray-400 shadow-md w-full py-2 pl-2 pr-4 dark:text-gray-300" />
                      <div className="invalid-feedback" style={{display: "block"}}></div>
                    </div>
                    <div className="mx-1 md:mx-0">
                      <input type="text" name="email" placeholder="Your email address" className="rounded-md border border-gray-400 shadow-md w-full py-2 pl-2 pr-4 dark:text-gray-300" />
                      <div className="invalid-feedback" style={{display: "block"}}></div>
                    </div>
                  </div>
                  <div className="mx-1 md:mx-0 my-2">
                    <input type="text" name="number" placeholder="Your phone number" className="rounded-md border border-gray-400 shadow-md w-full py-2 pl-2 pr-4 dark:text-gray-300" />
                    <div className="invalid-feedback" style={{display: "block"}}></div>
                  </div>
                  <div className="mx-1 md:mx-0 my-2">
                    <textarea name="text" cols={30} rows={5} placeholder="Write your message..." className="rounded-md border border-gray-400 shadow-md w-full py-2 pl-2 pr-4 dark:text-gray-300"></textarea>
                    <div className="invalid-feedback" style={{display: "block"}}></div>
                  </div>
                  <button type="submit" className="btn btn-primary sm:mb-0">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Contact;