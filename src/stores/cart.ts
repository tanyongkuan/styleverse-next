import { Product, ProductCart } from '@/types';
import { create } from 'zustand';

type CartState = {
  cart: Array<ProductCart>;
  showCart: boolean;
  addToCart: (val: Product, quantity: number) => void;
  removeFromCart: (val: Product) => void;
  toggleCart: () => void;
};

const useCartStore = create<CartState>((set) => ({
  cart: [] as Array<ProductCart>,
  showCart: false,
  toggleCart: () => set((state) => ({ showCart: !state.showCart })),
  addToCart: (val: Product, quantity: number) =>
    set((state) => {
      const index = state.cart.findIndex((item) => item.id === val.id);
      if (index === -1) {
        return { cart: [...state.cart, { ...val, quantity }] };
      } else {
        const updatedCart = [...state.cart];
        updatedCart[index].quantity += quantity;

        return { cart: updatedCart };
      }
    }),
  removeFromCart: (val: Product) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== val.id)
    }))
}));

export default useCartStore;
