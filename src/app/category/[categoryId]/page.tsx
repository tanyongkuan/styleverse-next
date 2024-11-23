// import ButtonDropdown from '@/components/buttons/ButtonDropdown';
import React, { Suspense } from 'react';
import ProductListSkeleton from '@/components/product/ProductListSkeleton';
import ProductList from './components/ProductList';

type Props = {
  params: Promise<{ categoryId: string }>;
};

export default async function page({ params }: Props) {
  const { categoryId } = await params;

  return (
    <div className="flex flex-col items-center gap-6 px-4 py-4 md:max-w-4xl md:py-8 lg:max-w-5xl lg:gap-y-8 lg:py-14 xl:max-w-6xl xl:gap-y-10 xl:px-0 xl:py-16">
      <div className="flex w-full justify-between">
        <span className="text-2xl font-semibold capitalize">{categoryId}</span>
      </div>
      <div className="grid grid-cols-1 justify-stretch gap-8 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-4">
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList categoryId={categoryId} />
        </Suspense>
      </div>
    </div>
  );
}
