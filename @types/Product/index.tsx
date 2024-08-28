import { Signal } from "@preact/signals";

export interface IAddToCartButtonProps {
  selectedSKU: Signal<string>;
  quantityItems: Signal<number>;
  updateSKU: Signal<string>;
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
  images: string;
}
