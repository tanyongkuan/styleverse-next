'use client';

import React from 'react';
import { useHeaderContext } from './HeaderContextProvider';
import { cn } from '@/libs/util';
import ButtonFloating from '@/components/buttons/ButtonFloating';
import { X } from 'lucide-react';
import Button from '@/components/buttons/Button';
import Link from 'next/link';

type Props = {
  links: Array<string>;
};

export default function MobileMenu({ links }: Props) {
  const { mobileMenuDisplay, setMobileMenuDisplay } = useHeaderContext();

  return (
    <>
      <div
        id="drawer-navigation"
        className={cn(
          'fixed left-0 top-0 z-40 h-screen w-full overflow-y-auto bg-white transition-transform dark:bg-gray-800',
          mobileMenuDisplay ? '-translate-x-none' : '-translate-x-full'
        )}
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
      >
        <div className="flex h-full flex-col">
          <div className="flex justify-between px-4 py-5">
            <span className="text-xl font-semibold">StyleVerse</span>
            <ButtonFloating onClick={() => setMobileMenuDisplay(false)}>
              <X className="h-5 w-5" />
            </ButtonFloating>
          </div>
          <div className="grow overflow-y-auto">
            <ul>
              {links.map((link, index) => (
                <li
                  className="cursor-pointer border-b border-neutral-400 p-4"
                  onClick={() => setMobileMenuDisplay(false)}
                  key={index}
                >
                  <Link href={`/category/${link}`} key={index}>
                    <div className="flex items-center justify-between px-2 capitalize">
                      <span>{link}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Button
            text="Log in / Signup"
            className="bg-neutral-800 py-5 text-center text-white"
          />
        </div>
      </div>
      {mobileMenuDisplay && (
        <div
          onClick={() => setMobileMenuDisplay(false)}
          drawer-backdrop=""
          className="fixed inset-0 z-30 bg-gray-900 bg-opacity-50 dark:bg-opacity-80"
        />
      )}
    </>
  );
}
