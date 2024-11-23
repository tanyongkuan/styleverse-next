//Table
export type TableFilter = {
  limit: number;
  sort?: boolean;
};

//ButtonDropdown Item
export type DropdownItem = {
  name: string;
  action: () => void;
};

export interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  rating: ProductRating;
  image: string;
}

export interface ProductCart extends Product {
  quantity: number;
}

export type ProductRating = {
  count: number;
  rate: number;
};

//MenuItem
export type MenuItemType = {
  label: string;
  link?: string;
  //   level?: number;
  children?: Array<MenuItemType>;
};

export type StripeCartItem = {
  price_data: {
    currency: string;
    product_data: {
      name: string;
      description: string;
      images: string[];
    };
    unit_amount: number;
  };
  quantity: number;
};

export type StripePaymentIntent = {
  payment_method_types: Array<string>;
  mode: string;
  success_url: string;
  cancel_url: string;
  line_items: Array<StripeCartItem>;
};
