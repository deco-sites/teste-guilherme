import SKUSelector from "site/components/Product/SKUSelector.tsx";
import AddToCartButton from "site/components/Product/AddToCartButton.tsx";
import {
  IProductAddToCartButton,
  IProductSelectedImage,
  IProductViewImage,
  ISKUSelectorProps,
} from "site/@types/Product/index.tsx";
import { useUI } from "site/islands/useUI.ts";

export function ProductSKUSelector({ selectedSKU }: ISKUSelectorProps) {
  return <SKUSelector selectedSKU={selectedSKU} />;
}

export function ProductAddToCartButton({
  selectedSKU,
  quantityItems,
  updateSKU,
}: IProductAddToCartButton) {
  const { isCartOpen } = useUI();

  return (
    <AddToCartButton
      quantityItems={quantityItems}
      selectedSKU={selectedSKU}
      updateSKU={updateSKU}
      isCartOpen={isCartOpen}
    />
  );
}

export function ProductSelectedImage({
  index,
  selectedImage,
  src,
}: IProductSelectedImage) {
  return (
    <img
      key={index}
      src={src}
      alt={`Product ${index + 1}`}
      className={`w-20 h-20 object-cover cursor-pointer hover:opacity-75 rounded-md ${
        selectedImage.value === index ? "border-2 border-black" : ""
      }`}
      onClick={() => (selectedImage.value = index)}
    />
  );
}

export function ProductViewImage({ images, selectedImage }: IProductViewImage) {
  return (
    <img
      src={images[selectedImage.value]}
      alt="Product"
      className="object-cover w-full h-full rounded-md"
    />
  );
}
