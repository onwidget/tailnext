import Image from "next/image";

import {
  IconArrowDown,
  IconCheck,
} from "@tabler/icons";

const Icon = ({ icon }) => <>{icon}</>;

const Steps = () => (
  <section className="px-4 py-16 sm:px-6 mx-auto lg:px-8 lg:py-20 max-w-6xl">
    <div className="grid gap-6 row-gap-10 md:grid-cols-2">
      <div className="md:pb-6 md:pr-16">
        <h2 className="mb-8 text-3xl lg:text-4xl font-bold font-heading">
          Sed ac magna sit amet risus tristique interdum. hac.
        </h2>
        <div className="flex">
          <div className="flex flex-col items-center mr-4">
            <div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-primary-600 border-2">
                <IconArrowDown
                  className="w-6 h-6 text-primary-600 dark:text-slate-200"
                />
              </div>
            </div>
            <div className="w-px h-full bg-gray-300 dark:bg-slate-500"></div>
          </div>
          <div className="pt-1 pb-8">
            <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
              Step 1
            </p>
            <p className="text-gray-600 dark:text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              sagittis, quam nec venenatis lobortis, mi risus tempus nulla, sed
              porttitor est nibh at nulla. Praesent placerat enim ut ex
              tincidunt vehicula. Fusce sit amet dui tellus.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center mr-4">
            <div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-primary-600 border-2">
                <IconArrowDown
                  className="w-6 h-6 text-primary-600 dark:text-slate-200"
                />
              </div>
            </div>
            <div className="w-px h-full bg-gray-300 dark:bg-slate-500"></div>
          </div>
          <div className="pt-1 pb-8">
            <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
              Step 2
            </p>
            <p className="text-gray-600 dark:text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              sagittis, quam nec venenatis lobortis, mi risus tempus nulla, sed
              porttitor est nibh at nulla.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center mr-4">
            <div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-primary-600 border-2">
                <IconArrowDown
                  className="w-6 h-6 text-primary-600 dark:text-slate-200"
                />
              </div>
            </div>
            <div className="w-px h-full bg-gray-300 dark:bg-slate-500"></div>
          </div>
          <div className="pt-1 pb-8">
            <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
              Step 3
            </p>
            <p className="text-gray-600 dark:text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              sagittis, quam nec venenatis lobortis, mi risus tempus nulla, sed
              porttitor est nibh at nulla.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center mr-4">
            <div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-primary-600 border-2 bg-primary-600">
                <IconCheck
                  className="w-6 h-6 text-white dark:text-slate-200"
                />
              </div>
            </div>
          </div>
          <div className="pt-1">
            <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
              Ready!
            </p>
            <p className="text-gray-600 dark:text-slate-400"></p>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          src="https://images.unsplash.com/photo-1594904351111-a072f80b1a71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
          width={432}
          height={768}
          alt="Random image from unplash"
          className="mx-auto rounded-lg shadow-lg bg-gray-500 w-full"
        />
        {/* <Picture
				className="inset-0 object-cover object-top w-full rounded-md shadow-lg md:absolute md:h-full bg-gray-400 dark:bg-slate-700"
				src={import('~/assets/images/astronaut.jpg')}
				widths={[400, 768]}
				sizes="(max-width: 768px) 100vw, 432px"
				alt="Astronaut"
				aspectRatio="432:768"
			/> */}
      </div>
    </div>
  </section>
);

export default Steps;
