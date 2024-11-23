import React from 'react';
import ButtonFloating from '@/components/buttons/ButtonFloating';
import Link from 'next/link';
import { Menu, UserRound } from 'lucide-react';
import ShoppingCartButton from './ShoppingCartButton';
import CartPopup from '../CartPopup';

const links = ['men', 'women', 'jewelry'];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex w-full items-center justify-between bg-neutral-50 p-4 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl xl:px-0">
      <div className="flex items-center justify-center gap-4 lg:gap-10">
        {/* @click="navDrawer?.displayDrawer()" */}
        <ButtonFloating className="lg:hidden">
          <Menu />
        </ButtonFloating>
        <Link href="/">
          <span className="cursor-pointer text-xl font-bold">StyleVerse</span>
        </Link>

        {links.map((link, index) => (
          <Link href={`/category/${link}`} key={index}>
            <span className="cursor-pointer capitalize">{link}</span>
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4">
        <ButtonFloating>
          <UserRound />
        </ButtonFloating>
        <ShoppingCartButton />
      </div>
      <CartPopup />
    </header>
  );
}
