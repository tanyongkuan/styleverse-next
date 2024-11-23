import { cn } from '@/libs/util';
import React from 'react';

type Props = {
  rounded?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  text: string;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  rounded,
  leftIcon,
  rightIcon,
  text,
  className,
  ...props
}: Props) {
  return (
    <button
      type="button"
      className={cn(
        `flex items-center gap-1.5 border border-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white ${rounded && 'rounded-lg'} ${className}`
      )}
      {...props}
    >
      {leftIcon}
      <span className="w-full text-center">{text}</span>
      {rightIcon}
    </button>
  );
}
