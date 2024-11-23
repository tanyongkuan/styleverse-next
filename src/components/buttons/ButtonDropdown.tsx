'use client';

import React from 'react';
import Button from './Button';
import { ChevronDown } from 'lucide-react';
import { DropdownItem } from '@/types';

type Props = {
  options: Array<DropdownItem>;
};

export default function ButtonDropdown({ options }: Props) {
  return (
    <div className="buttonDropdown relative inline-block">
      <Button text="Filter" className="bg-white" rightIcon={<ChevronDown />} />
      {/* Dropdown menu */}
      <div className="pt-2">
        <div className="'dropdownHover right-0' absolute z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow">
          <ul
            className="text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownHoverButton"
          >
            {options.map((option) => (
              <li key={option.name}>
                <span
                  onClick={option.action}
                  className="block cursor-pointer p-4 hover:bg-gray-100 dark:hover:text-white"
                >
                  {option.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
