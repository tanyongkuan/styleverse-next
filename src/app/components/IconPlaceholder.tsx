import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function IconPlaceholder({ children }: Props) {
  return (
    <div className="rounded-full bg-indigo-50 p-3 text-indigo-500">
      {children}
    </div>
  );
}
