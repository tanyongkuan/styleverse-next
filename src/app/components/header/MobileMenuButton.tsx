'use client';

import ButtonFloating from '@/components/buttons/ButtonFloating';
import { Menu } from 'lucide-react';
import React from 'react';
import { useHeaderContext } from './HeaderContextProvider';

export default function MobileMenuButton() {
  const { setMobileMenuDisplay } = useHeaderContext();

  return (
    <ButtonFloating
      className="lg:hidden"
      onClick={() => setMobileMenuDisplay((prev) => !prev)}
    >
      <Menu className="h-5 w-5" />
    </ButtonFloating>
  );
}
