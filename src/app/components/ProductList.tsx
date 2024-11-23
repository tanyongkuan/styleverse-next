import ProductListItem from '@/components/product/ProductListItem';
import { Product } from '@/types';
import React from 'react';

type Props = {};

export default async function ProductList({}: Props) {
  const retrieveProduct = async ({ id }: Pick<Product, 'id'>) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return await response.json();
  };

  const response = await Promise.allSettled([
    retrieveProduct({ id: '1' }),
    retrieveProduct({ id: '4' }),
    retrieveProduct({ id: '5' }),
    retrieveProduct({ id: '8' })
  ]);

  const products = response
    .filter((res) => res.status === 'fulfilled')
    .map((res) => res.value);

  return (
    <>
      {products.map((product, index) => (
        <ProductListItem key={index} product={product} />
      ))}
    </>
  );
}
