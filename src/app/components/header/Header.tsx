import React from 'react';
import ButtonFloating from '../../../components/buttons/ButtonFloating';
import Link from 'next/link';
import { Menu, ShoppingCart, UserRound } from 'lucide-react';
// import useCartStore from '@/stores/cart';
import ShoppingCartButton from './ShoppingCartButton';
import CartPopup from '../CartPopup';

type Props = {};

const links = ['men', 'women', 'jewelry'];

export default function Header({}: Props) {
  // const { cart, showCart, addToCart, removeFromCart, toggleCart } =
  //   useCartStore();

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
      {/* </div> */}
      {/* <div
      className="
        flex
        p-4
        xl:px-0
        md:max-w-4xl
        lg:max-w-5xl
        xl:max-w-6xl
        items-center
        justify-between
        w-full
        sticky
        top-0
        z-10
        bg-neutral-50
      "
    >
      <div className="flex justify-center items-center gap-4 lg:hidden">
        <ButtonFloating @click="navDrawer?.displayDrawer()">
          <menu-icon />
        </ButtonFloating>
        <span
          className="text-xl font-bold lg:hidden cursor-pointer"
          @click="() => router.push('/')"
          >StyleVerse</span
        >
      </div>
      <div className="lg:flex hidden justify-center items-center gap-10">
        <span
          className="text-xl font-bold cursor-pointer"
          @click="() => router.push('/')"
          >StyleVerse</span
        >
        <span className="cursor-pointer" @click="router.push('/category/men')"
          >Men</span
        >
        <span className="cursor-pointer" @click="router.push('/category/women')"
          >Women</span
        >
        <span className="cursor-pointer" @click="router.push('/category/jewelry')"
          >Jewelry</span
        >
      </div>
      <div className="flex justify-center items-center gap-4">
        <ButtonFloating>
          <account-outline-icon />
        </ButtonFloating>
        <ButtonFloating @click="() => (showCart = !showCart)">
          <cart-outline-icon />
          <div
            className="
              absolute
              inline-flex
              items-center
              justify-center
              w-6
              h-6
              text-xs
              font-bold
              text-white
              bg-red-500
              border-2 border-white
              rounded-full
              top-2
              -right-0
              lg:-right-1
              xl:-right-3
              dark:border-gray-900
            "
          >
            {{ cart.length }}
          </div>
        </ButtonFloating>
      </div>
      <Cart v-show="showCart" />
    </div> */}
    </header>
  );
}
