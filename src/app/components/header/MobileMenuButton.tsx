'use client';

import ButtonFloating from '@/components/buttons/ButtonFloating';
import { Menu } from 'lucide-react';
import React, { useContext } from 'react';
import { HeaderContext } from './HeaderContextProvider';

export default function MobileMenuButton() {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error('HeaderContext is not defined in Header Component');
  }

  const { setMobileMenuDisplay } = context;

  return (
    <ButtonFloating
      className="lg:hidden"
      onClick={() => setMobileMenuDisplay((prev) => !prev)}
    >
      <Menu className="h-5 w-5" />
    </ButtonFloating>
  );
}
