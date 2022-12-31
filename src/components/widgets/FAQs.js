'use client';

import { useState } from 'react';

import { IconChevronDown, IconChevronUp } from '@tabler/icons';

const items = [
  {
    question: 'What do I need to start?',
    answer: `Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds.
  Many say exploration is part of our destiny, but it’s actually our duty to future generations.`,
  },
  {
    question: 'How to install the NextJS + Tailwind CSS template?',
    answer: `Well, the way they make shows is, they make one show. That show's called a pilot.
  Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.`,
  },
  {
    question: "What's something that you completely don't understand?",
    answer: `A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear. I didn't even know we were calling him Big Bear.`,
  },
  {
    question: "What's an example of when you changed your mind?",
    answer: `Michael Knight a young loner on a crusade to champion the cause of the innocent. The helpless. The powerless in a world of criminals who operate above the law. Here he comes Here comes Speed Racer. He's a demon on wheels.`,
  },
  {
    question: 'What is something that you would really like to try again?',
    answer: `A business big enough that it could be listed on the NASDAQ goes belly up. Disappears!
    It ceases to exist without me. No, you clearly don't know who you're talking to, so let me clue you in.`,
  },
  {
    question: 'If you could only ask one question to each person you meet, what would that question be?',
    answer: `This is not about revenge. This is about justice. A lot of things can change in twelve years, Admiral. Well, that's certainly good to know. About four years. I got tired of hearing how young I looked.`,
  },
];

const FAQs = () => {
  const [toggle, setToggle] = useState(true);
  const [activeIndex, setActiveIndex] = useState(undefined);

  const handleSetIndex = (index) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
      setToggle(!toggle);
    } else {
      setActiveIndex(undefined);
      setToggle(!toggle);
    }
  };

  return (
    <section className="text-gray-800">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-10 text-center">
          <h2 className="font-heading mb-4 max-w-lg text-3xl font-bold leading-none tracking-tight dark:text-slate-300 sm:text-4xl md:mx-auto">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
            Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor
            scelerisque pulvinar.
          </p>
        </div>
        <div className="">
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
        </div>
      </div>
    </section>
  );
};

export default FAQs;
