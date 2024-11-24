'use client';

import React, { createContext, useContext, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

type THeaderContext = {
  mobileMenuDisplay: boolean;
  setMobileMenuDisplay: React.Dispatch<React.SetStateAction<boolean>>;
};

export const HeaderContext = createContext<THeaderContext | null>(null);

export default function HeaderContextProvider({ children }: Props) {
  const [mobileMenuDisplay, setMobileMenuDisplay] = useState(false);

  return (
    <HeaderContext.Provider value={{ mobileMenuDisplay, setMobileMenuDisplay }}>
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeaderContext() {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error('HeaderContext is not defined in Header Component');
  }

  return context;
}
