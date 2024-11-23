'use client';

import React from 'react';
import useCartStore from '@/stores/cart';
import { ShoppingCart } from 'lucide-react';
import ButtonFloating from '@/components/buttons/ButtonFloating';

export default function ShoppingCartButton() {
  const { cart, toggleCart } = useCartStore();

  return (
    <ButtonFloating onClick={toggleCart}>
      <ShoppingCart />
      <div className="absolute -right-0 top-2 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-red-500 text-xs font-bold text-white lg:-right-1 xl:-right-3 dark:border-gray-900">
        {cart.length}
      </div>
    </ButtonFloating>
  );
}
