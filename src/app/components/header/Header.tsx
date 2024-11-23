import React from 'react';
import ButtonFloating from '@/components/buttons/ButtonFloating';
import Link from 'next/link';
import { UserRound } from 'lucide-react';
import ShoppingCartButton from './ShoppingCartButton';
import CartPopup from '../CartPopup';
import MobileMenuButton from './MobileMenuButton';
import MobileMenu from './MobileMenu';

const links = ['men', 'women', 'jewelry'];

export default function Header() {
  return (
    <>
      <MobileMenu links={links} />
      <header className="sticky top-0 z-10 flex w-full items-center justify-between bg-neutral-50 p-4 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl xl:px-0">
        <div className="flex items-center justify-center gap-4 lg:gap-10">
          <MobileMenuButton />
          <Link href="/">
            <span className="cursor-pointer text-xl font-bold">StyleVerse</span>
          </Link>
        </div>
        <nav>
          <ul className="flex items-center justify-center gap-6">
            {links.map((link, index) => (
              <li
                key={index}
                className="hidden text-black transition hover:text-gray-700 lg:block"
              >
                <Link href={`/category/${link}`}>
                  <span className="cursor-pointer capitalize">{link}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center justify-center gap-4">
          <ButtonFloating>
            <UserRound className="h-5 w-5" />
          </ButtonFloating>
          <ShoppingCartButton />
        </div>
        <CartPopup />
      </header>
    </>
  );
}
