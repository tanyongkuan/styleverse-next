import { cn } from '@/libs/util';
import React from 'react';

type Props = {
  icon?: React.ReactNode;
  placeholder?: string;
};

export default function TextBox({ icon, placeholder, ...props }: Props) {
  return (
    <div className="relative flex">
      <div
        v-if="$slots.icon"
        className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5"
      >
        {icon}
      </div>
      <input
        type="text"
        className={cn(
          `block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 ${
            icon && 'pl-10'
          }`
        )}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}
