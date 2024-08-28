import { Signal } from "@preact/signals";

export interface ICartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  updateSKU: string;
  quantityItems: number;
  cartItems: Signal<
    {
      sku: string;
      quantity: number;
    }[]
  >;
}

export interface IMobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface IHeaderNavbar {
  lastScrollY: Signal<number>;
  showHeader: Signal<boolean>;
  quantityItems: Signal<number>;
  updateSKU: Signal<string>;
  cartItems: Signal<
    {
      sku: string;
      quantity: number;
    }[]
  >;
}
export interface IHeaderLoginAndCart {
  quantityItems: Signal<number>;
  updateSKU: Signal<string>;
  cartItems: Signal<
    {
      sku: string;
      quantity: number;
    }[]
  >;
}
