'use client';

import React, { useEffect, useState } from 'react';
import ButtonFloating from '../../components/buttons/ButtonFloating';
import { Trash2, X } from 'lucide-react';
import useCartStore from '@/stores/cart';
import Image from 'next/image';
import Button from '../../components/buttons/Button';
import { initStripePayment } from '@/libs/stripe';
import { useRouter } from 'next/navigation';

export default function CartPopup() {
  const { cart, showCart, toggleCart, removeFromCart } = useCartStore();
  const [total, setTotal] = useState(0);
  const router = useRouter();

  const handleExecutePayment = async () => {
    try {
      const result = await initStripePayment(cart);
      router.push(result.url);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let total = 0;

    cart.forEach((item) => (total += item.quantity * item.price));
    setTotal(total);
  }, [cart]);

  if (!showCart) return;

  return (
    <div className="absolute right-0 top-0 z-50 flex h-screen w-full flex-col gap-8 bg-white p-5 shadow-inner transition-transform lg:top-20 lg:h-max lg:w-96">
      <div className="flex justify-between">
        <span className="text-xl text-gray-500">Products in your cart</span>
        <ButtonFloating className="text-red-500 lg:hidden" onClick={toggleCart}>
          <X className="h-5 w-5" />
        </ButtonFloating>
      </div>
      {cart.map((item) => (
        <div className="flex items-center gap-5" key={item.id}>
          <Image
            src={item.image}
            className="h-24 w-20"
            alt={item.title}
            width={100}
            height={100}
          />
          <div className="flex flex-col">
            <span className="text-lg font-medium">{item.title}</span>
            <p className="text-neutral-500">
              {item.description.length > 100
                ? `${item.description.substring(0, 100)}...`
                : item.description}
            </p>
            <div className="pt-4 text-base font-semibold text-black">
              {`${item.quantity} x $${item.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}`}
            </div>
          </div>
          <ButtonFloating
            className="text-red-500"
            onClick={() => removeFromCart(item)}
          >
            <Trash2 className="h-5 w-5" />
          </ButtonFloating>
        </div>
      ))}
      <div className="flex justify-between text-base">
        <span>SUBTOTAL</span>
        <span>
          ${total.toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </span>
      </div>
      {cart.length > 0 ? (
        <Button
          text="Proceed To Checkout"
          className="bg-black uppercase text-white"
          onClick={handleExecutePayment}
        />
      ) : (
        <span className="text-sm">Your cart is empty</span>
      )}
    </div>
  );
}
