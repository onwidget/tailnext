'use client';

import { IconCheck, IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { Dropdown, Tab } from '~/shared/types';

const Dropdown = ({ options, activeTab, onActiveTabSelected, iconUp, iconDown }: Dropdown) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>(options[activeTab].link?.label as string);

  const dropdownHandler = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onOptionSelected = (option: Tab, index: number) => {
    setSelectedOption(option.link?.label as string);

    // Sends the value to the parent component
    onActiveTabSelected(index);
  };

  useEffect(() => {
    const handler = () => setIsDropdownOpen(false);

    window.addEventListener('click', handler);

    return () => {
      window.removeEventListener('click', handler);
    };
  });

  return (
    <div className="relative mt-4 rounded-md border border-gray-400 text-left">
      <div onClick={dropdownHandler} className="flex select-none items-center justify-between rounded-md p-3">
        <div className="text-lg">{selectedOption}</div>
        {iconDown && iconUp ? (
          isDropdownOpen === false ? (
            iconDown
          ) : (
            iconUp
          )
        ) : isDropdownOpen === false ? (
          <IconChevronDown className="h-6 w-6 text-primary-600 dark:text-slate-200" />
        ) : (
          <IconChevronUp className="h-6 w-6 text-primary-600 dark:text-slate-200" />
        )}
      </div>
      {isDropdownOpen && (
        <div className="absolute w-full translate-y-1 overflow-auto rounded-md border border-gray-400">
          {options.map((option: Tab, index) => (
            <div
              key={`option-${index}`}
              onClick={() => onOptionSelected(option, index)}
              className={`flex cursor-pointer items-center bg-white p-3 text-lg dark:bg-slate-900 ${
                activeTab !== index ? 'pl-10' : 'text-primary-600 dark:text-primary-200'
              }`}
            >
              {activeTab === index && <IconCheck className="mr-2 h-5 w-5" />} {option.link?.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
