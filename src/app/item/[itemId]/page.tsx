import React from 'react';
import { Product } from '@/types';
import Image from 'next/image';
import TheRating from '@/components/TheRating';
import AddToCart from './components/AddToCart';

type Props = {
  params: Promise<{ itemId: string }>;
};

export default async function page({ params }: Props) {
  const { itemId } = await params;

  const response = await fetch(`https://fakestoreapi.com/products/${itemId}`);

  const product = (await response.json()) as Product;

  return (
    <div className="flex grid-cols-6 flex-col gap-4 p-4 py-4 md:max-w-4xl md:py-8 lg:grid lg:max-w-5xl lg:gap-12 lg:py-14 xl:max-w-6xl xl:px-0 xl:py-16">
      <div className="col-span-2 flex h-72 w-full cursor-pointer flex-col items-center bg-white py-4">
        <Image
          src={product.image}
          width={200}
          height={200}
          alt={product.title}
          className="h-full"
        />
      </div>
      <div className="col-span-4 flex flex-grow gap-2 self-stretch py-4 lg:py-0">
        <div className="flex flex-grow flex-col justify-between gap-4 lg:gap-6">
          <span className="text-2xl font-semibold lg:text-3xl">
            {product.title}
          </span>
          <div className="flex gap-3">
            <span className="text-lg font-semibold text-black lg:text-xl">
              $
              {product.price.toLocaleString('en-US', {
                minimumFractionDigits: 2
              })}
            </span>
            <span className="text-base text-neutral-500 line-through lg:text-lg">
              ${(product.price * 1.05).toFixed(2)}
            </span>
          </div>
          <TheRating rating={product.rating.rate}>
            <span>{product.rating.count} Sold</span>
          </TheRating>
          <div className="flex items-center justify-between">
            <AddToCart product={product} />
          </div>
          <div className="mt-4 flex flex-col gap-1">
            <span className="text-xl font-medium lg:text-2xl">Description</span>
            <span className="text-neutral-500">{product.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
