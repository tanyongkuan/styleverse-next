import { cn } from '@/libs/util';
import React from 'react';

type Props = {
  icon: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ icon, className, ...rest }: Props) {
  return (
    <button
      type="button"
      className={cn(
        `bg-primary cursor-pointer rounded-xl border border-gray-200 p-3 text-sm font-medium text-gray-900 focus:outline-none`,
        className
      )}
      {...rest}
    >
      {icon}
    </button>
  );
}
