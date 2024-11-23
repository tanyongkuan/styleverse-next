'use client';

import { Product } from '@/types';
import React from 'react';
import ButtonIcon from '../buttons/ButtonIcon';
import useCartStore from '@/stores/cart';
import { ShoppingCart } from 'lucide-react';

type Props = {
  product: Product;
};

export default function AddToCartButton({ product }: Props) {
  const { addToCart } = useCartStore();

  return (
    <ButtonIcon
      className="bg-black text-white"
      icon={<ShoppingCart />}
      onClick={() => addToCart(product, 1)}
    />
  );
}
