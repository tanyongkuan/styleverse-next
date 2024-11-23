import { cn } from '@/libs/util';
import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLDivElement>;

export default function ButtonFloating({
  children,
  className,
  ...props
}: Props) {
  return (
    <div
      className={cn(
        `h-7 w-7 cursor-pointer rounded-full p-1 hover:bg-gray-200`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
