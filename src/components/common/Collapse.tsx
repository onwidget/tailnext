'use client';

import { useState } from 'react';
import { CollapseProps } from '~/shared/types';

const Collapse = ({ items, classCollapseItem, iconUp, iconDown }: CollapseProps) => {
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
    <>
      {items.map(({ title, description }, index) => (
        <div
          key={`accordion-${index}`}
          onClick={() => handleSetIndex(index)}
          className="mx-auto max-w-3xl select-none bg-transparent text-base text-gray-700"
        >
          <div className={classCollapseItem}>
            <div
              className="align-center flex justify-between"
              id={`accordion__heading-${index}`}
              aria-disabled="false"
              aria-expanded="false"
              aria-controls={`accordion__panel-${index}`}
              role="button"
            >
              <h2 className="w-full pr-2 text-lg font-medium leading-6 text-gray-900 dark:text-slate-300">{title}</h2>
              {activeIndex === index ? iconUp : iconDown}
            </div>
            {activeIndex === index && (
              <div
                className="mt-3 select-none"
                aria-labelledby={`accordion__heading-${index}`}
                id={`accordion__panel-${index}`}
              >
                <p className="mt-2 text-gray-600 dark:text-slate-400">{description}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Collapse;
