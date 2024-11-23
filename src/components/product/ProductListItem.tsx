import { Product } from '@/types';
import { Star } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import AddToCartButton from './AddToCartButton';
import Image from 'next/image';

type Props = {
  product: Product;
};

export default function ProductListItem({ product }: Props) {
  const productLink = `/item/${product.id}`;

  return (
    <div className="flex flex-col items-start gap-2 self-stretch rounded-lg border border-solid border-gray-200 bg-white">
      <div className="pl-1 pt-1">
        <div className="flex items-center gap-1 rounded bg-neutral-100 px-1 text-xs font-semibold">
          <Star className="h-5 w-5 text-yellow-300" fill="currentColor" />
          <span className="text-neutral-500">{product.rating.rate}</span>
        </div>
      </div>
      <Link
        href={productLink}
        className="flex h-64 w-full cursor-pointer flex-col items-center"
      >
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
          className="h-full"
        />
      </Link>
      <div className="flex items-end gap-2 self-stretch border-t border-neutral-200 p-2">
        <Link
          href={productLink}
          className="flex flex-grow cursor-pointer flex-col justify-between gap-1"
        >
          <span className="line-clamp-2 h-14 text-lg font-semibold">
            {product.title}
          </span>
          <div className="flex gap-3">
            <span className="text-lg font-semibold text-black">
              ${product.price}
            </span>
            <span className="text-base text-neutral-500 line-through">
              ${(product.price * 1.05).toFixed(2)}
            </span>
          </div>
        </Link>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
