'use client';

import { useState } from 'react';
import { IconChevronDown, IconChevronUp } from '@tabler/icons';

interface Item {
  question: string;
  answer: string;
}

export interface FAQsProps {
  title?: string;
  subtitle?: string;
  highlight?: string;
  items: Array<Item>;
}

const faqs: FAQsProps = {
  title: "Frequently Asked Questions",
  subtitle: "Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar.",
  highlight: "FAQS",
  items: [
    {
      question: 'What do I need to start?',
      answer: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      question: 'How to install the NextJS + Tailwind CSS template?',
      answer: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
    },
    {
      question: "What's something that you completely don't understand?",
      answer: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
    },
    {
      question: "What's an example of when you changed your mind?",
      answer: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      question: 'What is something that you would really like to try again?',
      answer: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      question: 'If you could only ask one question to each person you meet, what would that question be?',
      answer: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
    },
  ]
};

const FAQs2 = () => {
  const { title, subtitle, highlight, items } = faqs;

  const [toggle, setToggle] = useState<boolean>(true);
  const [activeIndex, setActiveIndex] = useState<undefined | number>(undefined);

  const handleSetIndex = (index: number) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
      setToggle(!toggle);
    } else {
      setActiveIndex(undefined);
      setToggle(!toggle);
    }
  };

  return (
    <section id="faqsTwo">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-10 text-center">
          {highlight && (
            <p className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200">
              {highlight}
            </p>
          )}
          {title && (
            <h2 className="font-heading mb-4 text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
              {subtitle}
            </p>
          )}
        </div>
        <>
          {items.map(({ question, answer }, index) => (
            <div
              key={`accordion-${index}`}
              onClick={() => handleSetIndex(index)}
              className="mx-auto mb-2 max-w-3xl select-none rounded-md border border-gray-300 bg-transparent px-5 py-4 text-base text-gray-700 shadow-md"
            >
              <div className="py-1 px-3">
                <div
                  className="align-center flex justify-between"
                  id={`accordion__heading-${index}`}
                  aria-disabled="false"
                  aria-expanded="false"
                  aria-controls={`accordion__panel-${index}`}
                  role="button"
                >
                  <h2 className="text-lg font-medium leading-6 text-gray-900 dark:text-slate-300">{question}</h2>
                  <>
                    {activeIndex === index ? (
                      <IconChevronUp className="h-6 w-6 text-primary-600 dark:text-slate-200" />
                    ) : (
                      <IconChevronDown className="h-6 w-6 text-primary-600 dark:text-slate-200" />
                    )}
                  </>
                </div>
                {activeIndex === index && (
                  <div
                    className="mt-3 select-none"
                    aria-labelledby={`accordion__heading-${index}`}
                    id={`accordion__panel-${index}`}
                  >
                    <p className="mt-2 text-gray-600 dark:text-slate-400">{answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </>
      </div>
    </section>
  );
};

export default FAQs2;
