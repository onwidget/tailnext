import Image from 'next/image';

import { IconArrowDown, IconCheck } from '@tabler/icons';

import gasImg from '~/assets/images/gas.jpg';

const Steps = () => (
  <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
    <div className="row-gap-10 grid gap-6 md:grid-cols-2">
      <div className="md:pb-6 md:pr-16">
        <h2 className="font-heading mb-8 text-3xl font-bold lg:text-4xl">
          Sed ac magna sit amet risus tristique interdum. hac.
        </h2>
        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900">
                <IconArrowDown className="h-6 w-6 text-primary-900 dark:text-slate-200" />
              </div>
            </div>
            <div className="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
          </div>
          <div className="pt-1 pb-8">
            <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">Step 1</p>
            <p className="text-gray-600 dark:text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi
              risus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula.
              Fusce sit amet dui tellus.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900">
                <IconArrowDown className="h-6 w-6 text-primary-900 dark:text-slate-200" />
              </div>
            </div>
            <div className="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
          </div>
          <div className="pt-1 pb-8">
            <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">Step 2</p>
            <p className="text-gray-600 dark:text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi
              risus tempus nulla, sed porttitor est nibh at nulla.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900">
                <IconArrowDown className="h-6 w-6 text-primary-900 dark:text-slate-200" />
              </div>
            </div>
            <div className="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
          </div>
          <div className="pt-1 pb-8">
            <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">Step 3</p>
            <p className="text-gray-600 dark:text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi
              risus tempus nulla, sed porttitor est nibh at nulla.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900 bg-primary-900">
                <IconCheck className="h-6 w-6 text-white dark:text-slate-200" />
              </div>
            </div>
          </div>
          <div className="pt-1">
            <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">Ready!</p>
            <p className="text-gray-600 dark:text-slate-400"></p>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          src={gasImg}
          width={432}
          height={768}
          alt="Random image from unplash"
          className="mx-auto h-auto w-full rounded-lg bg-gray-500 shadow-lg"
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
