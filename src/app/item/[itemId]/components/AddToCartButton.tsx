'use client';

import { Product } from '@/types';
import React from 'react';
import useCartStore from '@/stores/cart';
import { ShoppingCart } from 'lucide-react';
import Button from '@/components/buttons/Button';

type Props = {
  product: Product;
  quantity: number;
};

export default function AddToCartButton({ product, quantity }: Props) {
  const { addToCart } = useCartStore();

  return (
    <Button
      className="bg-black text-white"
      rightIcon={<ShoppingCart />}
      text="Add To Cart"
      onClick={() => addToCart(product, quantity)}
    />
  );
}
