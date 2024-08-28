import { signal } from "@preact/signals";

const showHeader = signal(true);
const lastScrollY = signal(0);
const isMobileMenuOpen = signal(false);
const isCartOpen = signal(false);
const selectedSKU = signal("");
const updateSKU = signal("");
const selectedImage = signal(0);
const quantityItems = signal(0);
const cartItems = signal([]);

const state = {
  showHeader,
  lastScrollY,
  isMobileMenuOpen,
  isCartOpen,
  selectedSKU,
  updateSKU,
  selectedImage,
  quantityItems,
  cartItems
};

export const useUI = () => state;
