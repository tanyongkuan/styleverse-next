'use client';

import { Product } from '@/types';
import React, { useState } from 'react';
import AddToCartButton from './AddToCartButton';
import NumberInput from '@/components/NumberInput';

type Props = {
  product: Product;
};

export default function AddToCart({ product }: Props) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => Math.max(0, prev - 1)); // Prevent going below 0

  return (
    <>
      <NumberInput
        value={quantity}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
      <AddToCartButton product={product} quantity={quantity} />
    </>
  );
}
