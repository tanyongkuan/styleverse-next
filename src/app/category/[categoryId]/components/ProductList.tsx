import ProductListItem from '@/components/product/ProductListItem';
import { Product } from '@/types';
import React from 'react';

type Props = {
  categoryId: string;
};

export default async function ProductList({ categoryId }: Props) {
  const categories = ['all', 'jewelry', 'men', 'women'];

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
    <>
      {results.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </>
  );
}
