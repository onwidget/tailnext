import Image from 'next/image';

import { IconBrandTwitter } from '@tabler/icons';

const items = [
  {
    name: 'Tayla Kirsten',
    occupation: 'Marketing Manager',
    comment:
      'Suspendisse mollis ante turpis, ut fermentum nulla finibus ac. Integer ut justo id dolor lobortis pharetra. Integer ultrices leo a nunc ullamcorper commodo. In id nulla et nibh pretium pretium non vel metus. Suspendisse dapibus quis lorem sit amet fermentum. Ut a dapibus justo. In faucibus molestie pretium. Cras eros orci, bibendum fringilla elit at, vehicula maximus eros. Aenean placerat aliquet mi, et pellentesque dolor gravida at.',
    src: ' https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    href: 'https://twitter.com/',
  },
  {
    name: 'Silver Jordan',
    occupation: 'Senior Marketer',
    comment:
      'Mauris semper enim dolor, ac dictum sapien sollicitudin quis. Quisque id pharetra mi. Phasellus eu posuere lectus, vitae rhoncus velit. Nullam imperdiet purus quis dapibus vestibulum. Integer purus ex, hendrerit at elementum non, varius a nibh. Ut eget convallis mi. Morbi mattis, felis sit amet consectetur scelerisque, odio purus ornare sapien, in feugiat lorem tellus et magna. Pellentesque luctus dolor in ornare mattis.',
    src: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    href: 'https://twitter.com/',
  },
  {
    name: 'Kelsey Arden',
    occupation: 'Co-Founder & CEO',
    comment:
      'Sed malesuada rhoncus arcu, sit amet condimentum leo pharetra feugiat. In augue quam, venenatis nec dui in, auctor tempus libero. Aliquam tempus ex id metus viverra blandit. Proin varius venenatis tortor, a pellentesque enim malesuada a. Aliquam lectus magna, interdum eget odio non, consequat imperdiet ipsum.',
    src: 'https://images.unsplash.com/photo-1596935884413-260a972dab44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    href: 'https://twitter.com/',
  },
  // {
  //   name: "Kelly Ashley",
  //   occupation: "SEO Specialist",
  //   comment: "Proin viverra lorem vitae quam imperdiet convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus non enim lectus. Maecenas vitae tortor urna. Maecenas nec nulla bibendum, maximus nulla vel, varius dui. Morbi hendrerit, massa sollicitudin dapibus tristique, eros justo imperdiet ipsum, quis tempus ligula urna ac felis. Quisque porta mi lectus, a interdum augue vehicula et.",
  //   src: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  //   href: "https://twitter.com/"
  // },
  // {
  //   name: "Devin Darby",
  //   occupation: "Designer",
  //   comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla. Maecenas nec nulla bibendum, maximus nulla vel, varius dui. Suspendisse mollis ante turpis, ut fermentum nulla finibus ac.",
  //   src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  //   href: "https://twitter.com/"
  // },
  // {
  //   name: "Annabel Jeannie",
  //   occupation: "Freelance Creative",
  //   comment: "Quisque porta mi lectus, a interdum augue vehicula et. Quisque vitae ultricies tortor, ut aliquam odio. Sed pellentesque ipsum mi, ac eleifend dolor congue at. Phasellus nec nunc eleifend, condimentum nisi non, ullamcorper dolor.",
  //   src: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  //   href: "https://twitter.com/"
  // },
];

const Testimonial = () => (
  <section className="bg-primary-50 dark:bg-slate-800" id="testimonial">
    <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:pt-20">
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">What our customers say about us</h2>
        <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600">
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
                  <p className="m-b-30 font-light">
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
