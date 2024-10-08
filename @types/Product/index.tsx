import { Signal } from "@preact/signals";

export interface IAddToCartButtonProps {
  isCartOpen: Signal<boolean>;
  selectedSKU: Signal<string>;
  quantityItems: Signal<number>;
  updateSKU: Signal<string>;
  cartItems: Signal<
    {
      sku: string;
      quantity: number;
    }[]
  >;
}
export interface IAddToCartButton {
  isCartOpen: Signal<boolean>;
  selectedSKU: Signal<string>;
  cartItems: Signal<
    {
      sku: string;
      quantity: number;
    }[]
  >;
}
export interface IProductAddToCartButton {
  selectedSKU: Signal<string>;
  cartItems: Signal<
    {
      sku: string;
      quantity: number;
    }[]
  >;
}

export interface ISKUSelectorProps {
  selectedSKU: Signal<string>;
}
export interface IProductSelectedImage {
  selectedImage: Signal<number>;
  index: number;
  src: string;
}
export interface IProductViewImage {
  selectedImage: Signal<number>;
  images: string[];
}
export interface IProductInfo {
  isCartOpen: Signal<boolean>;
}
