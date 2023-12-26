'use client';

import Headline from '../common/Headline';
import Collapse from '../common/Collapse';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import { FAQsProps, Item, Tab } from '~/shared/types';
import { useState } from 'react';
import useWindowSize from '~/hooks/useWindowSize';
import Dropdown from '../common/Dropdown';
import WidgetWrapper from '../common/WidgetWrapper';

const FAQs4 = ({ header, tabs, id, hasBackground = false }: FAQsProps) => {
  const { width } = useWindowSize();
  const [activeTab, setActiveTab] = useState(0);

  const activeTabSelectedHandler = (index: number) => {
    setActiveTab(index);
  };

  return (
    <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
      {header && <Headline header={header} titleClass="text-3xl sm:text-4xl" />}
      <div className="flex items-stretch justify-center">
        <div className="grid w-full md:grid-cols-3 md:items-center md:gap-4">
          {width > 767 ? (
            <div className="block h-full sm:flex sm:items-center sm:justify-between md:mx-4 md:mt-10 md:block md:px-4">
              <div className="flex h-fit w-full justify-center sm:w-auto sm:justify-start">
                <ul>
                  {(tabs as Tab[]).map((tab, index) => {
                    const onSelectTab = () => {
                      setActiveTab(index);
                    };

                    return (
                      <li
                        key={`tab-${index}`}
                        className={`mb-5 flex cursor-pointer items-center ${
                          activeTab === index ? 'text-primary-600 dark:text-primary-200' : ''
                        }`}
                        tabIndex={0}
                        onClick={onSelectTab}
                      >
                        <span className="w-full text-xl hover:underline">{tab.link?.label}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ) : (
            <Dropdown options={tabs as Tab[]} activeTab={activeTab} onActiveTabSelected={activeTabSelectedHandler} />
          )}
          <div className="mt-4 h-fit md:col-span-2 md:mx-4 md:mt-0 md:px-4">
            {(tabs as Tab[]).map((tab, index) => (
              <div key={`tab-${index}`} className="">
                {activeTab === index && (
                  <Collapse
                    items={tab.items as Item[]}
                    classCollapseItem="border-b border-solid border-slate-300 dark:border-slate-500 py-5"
                    iconUp={<IconMinus className="h-6 w-6 text-primary-600 dark:text-slate-200" />}
                    iconDown={<IconPlus className="h-6 w-6 text-primary-600 dark:text-slate-200" />}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </WidgetWrapper>
  );
};

export default FAQs4;
