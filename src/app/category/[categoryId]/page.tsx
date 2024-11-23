// import ButtonDropdown from '@/components/buttons/ButtonDropdown';
import { Product } from '@/types';
import React, { Suspense } from 'react';
import ProductListSkeleton from './components/ProductListSkeleton';
import ProductListItem from '@/components/product/ProductListItem';

type Props = {
  params: Promise<{ categoryId: string }>;
};

const categories = ['all', 'jewelry', 'men', 'women'];

export default async function page({ params }: Props) {
  const { categoryId } = await params;

  if (categories.findIndex((category) => category === categoryId) === -1) {
    return;
  }

  let category = '';

  if (categoryId === 'men') {
    category = `men's clothing`;
  } else if (categoryId === 'women') {
    category = `women's clothing`;
  } else if (categoryId === 'all') {
    category = '';
  } else if (categoryId === 'jewelry') {
    category = 'jewelery';
  }

  let response;

  if (category === '') {
    response = await fetch('https://fakestoreapi.com/products?limit=0', {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } else {
    response = await fetch(
      `https://fakestoreapi.com/products/category/${category}?limit=0`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  const results = (await response.json()) as Array<Product>;

  return (
    <div className="flex flex-col items-center gap-6 px-4 py-4 md:max-w-4xl md:py-8 lg:max-w-5xl lg:gap-y-8 lg:py-14 xl:max-w-6xl xl:gap-y-10 xl:px-0 xl:py-16">
      <div className="flex w-full justify-between">
        <span className="text-2xl font-semibold capitalize">{categoryId}</span>
      </div>
      <Suspense fallback={<ProductListSkeleton />}>
        <div className="grid grid-cols-1 justify-stretch gap-8 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-4">
          {results.map((product) => (
            <ProductListItem key={product.id} product={product} />
          ))}
        </div>
      </Suspense>
    </div>
  );
}
