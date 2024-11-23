'use server';

import { ProductCart, StripeCartItem } from '@/types';
import { env } from '@/env.mjs';

export const initStripePayment = async (cart: Array<ProductCart>) => {
  const line_items: Array<StripeCartItem> = cart.map((item) => {
    return {
      price_data: {
        currency: 'SGD',
        product_data: {
          name: item.title,
          description: item.description,
          images: [item.image]
        },
        unit_amount: item.price * 100
      },
      quantity: item.quantity
    };
  });

  const query = buildQuery({
    payment_method_types: ['card'],
    mode: 'payment',
    success_url: env.BASE_URL,
    cancel_url: env.BASE_URL,
    line_items
  });

  const response = await fetch(
    `https://api.stripe.com/v1/checkout/sessions?${query}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.STRIPE_API_KEY}`,
        'Content-type': 'application/x-www-form-urlencoded'
      }
    }
  );

  const result = await response.json();

  return result;
};

const buildQuery = (data: object, prefix = ''): string => {
  // Determine the data type
  const type = Object.prototype.toString.call(data).slice(8, -1).toLowerCase();

  // Loop through the object and create the query string
  return Object.keys(data)
    .map((key, index) => {
      // Cache the value of the item
      const value = data[key as keyof object];

      // Add the correct string if the object item is an array or object
      if (type === 'array') {
        key = prefix + '[' + index + ']';
      } else if (type === 'object') {
        key = prefix ? prefix + '[' + key + ']' : key;
      }

      // If the value is an array or object, recursively repeat the process
      if (typeof value === 'object') {
        return buildQuery(value, key);
      }

      // Join into a query string
      return key + '=' + encodeURIComponent((value as string).toString());
    })
    .join('&');
};
