import Image from 'next/image';

import { IconBrandTwitter } from '@tabler/icons';

const items = [
  {
    name: 'Tayla Kirsten',
    occupation: 'Marketing Manager',
    comment:
      'Suspendisse mollis ante turpis, ut fermentum nulla finibus ac. Integer ut justo id dolor lobortis pharetra. Integer ultrices leo a nunc ullamcorper commodo. In id nulla et nibh pretium pretium non vel metus. Suspendisse dapibus quis lorem sit amet fermentum. Ut a dapibus justo. In faucibus molestie pretium. Cras eros orci, bibendum fringilla elit at, vehicula maximus eros. Aenean placerat aliquet mi, et pellentesque dolor gravida at.',
    src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    href: '#',
  },
  {
    name: 'Silver Jordan',
    occupation: 'Senior Marketer',
    comment:
      'Mauris semper enim dolor, ac dictum sapien sollicitudin quis. Quisque id pharetra mi. Phasellus eu posuere lectus, vitae rhoncus velit. Nullam imperdiet purus quis dapibus vestibulum. Integer purus ex, hendrerit at elementum non, varius a nibh. Ut eget convallis mi. Morbi mattis, felis sit amet consectetur scelerisque, odio purus ornare sapien, in feugiat lorem tellus et magna. Pellentesque luctus dolor in ornare mattis.',
    src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    href: '#',
  },
  {
    name: 'Kelsey Arden',
    occupation: 'Co-Founder & CEO',
    comment:
      'Sed malesuada rhoncus arcu, sit amet condimentum leo pharetra feugiat. In augue quam, venenatis nec dui in, auctor tempus libero. Aliquam tempus ex id metus viverra blandit. Proin varius venenatis tortor, a pellentesque enim malesuada a. Aliquam lectus magna, interdum eget odio non, consequat imperdiet ipsum.',
    src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    href: '#',
  },
];

const Testimonial = () => (
  <section className="bg-primary-50 dark:bg-slate-800" id="testimonial">
    <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:pt-20">
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
          What our customers say about us
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
          Etiam sed odio et dolor auctor gravida. Curabitur tincidunt elit non risus pharetra sodales. Etiam sit amet
          mattis massa.
        </p>
      </div>
      <div className="flex items-stretch justify-center">
        <div className="mt-8 grid grid-cols-3 gap-3 dark:text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {items.map(({ name, occupation, comment, src, href }, index) => (
            <div
              key={`item-feature3-${index}`}
              className="col-span-3 flex sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"
            >
              <div className="flex-flow card flex border-b-[3px] border-transparent hover:border-primary-600 hover:shadow-lg hover:transition hover:duration-100">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={`item-testimonial-${index}`}
                  className="card-body"
                >
                  <div className="mb-4 flex">
                    <Image
                      src={src}
                      width={48}
                      height={48}
                      alt={name}
                      className="mr-4 h-12 w-12 rounded-full object-cover shadow-lg"
                    />
                    <div className="text-left">
                      <h3 className="font-semibold">{name}</h3>
                      <span className="">{occupation}</span>
                    </div>
                  </div>
                  <p className="m-b-30 font-light dark:text-slate-400">
                    {`"${comment.slice(0, 150)}..."`}
                    <IconBrandTwitter className="mx-auto mt-4 h-6 w-6 text-primary-600 dark:text-slate-200" />
                  </p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Testimonial;
