import { Signal } from "@preact/signals";

export interface ICartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  updateSKU: string;
  quantityItems: number;
  cartItems: Signal<any[]>;
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
  cartItems: Signal<any[]>;
}
export interface IHeaderLoginAndCart {
  quantityItems: Signal<number>;
  updateSKU: Signal<string>;
  cartItems: Signal<any[]>;
}
