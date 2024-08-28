import { useUI } from "site/islands/useUI.ts";
import SKUSelector from "site/components/Product/SKUSelector.tsx";
import AddToCartButton from "site/components/Product/AddToCartButton.tsx";

export function ProductSKUSelector({ selectedSKU }: any) {
  return <SKUSelector selectedSKU={selectedSKU} />;
}

export function ProductAddToCartButton({
  selectedSKU,
  quantityItems,
  updateSKU,
}: any) {
  return (
    <AddToCartButton
      quantityItems={quantityItems}
      selectedSKU={selectedSKU}
      updateSKU={updateSKU}
    />
  );
}

export function ProductSelectedImage({ index, selectedImage, src }: any) {
  return (
    <img
      key={index}
      src={src}
      alt={`Product ${index + 1}`}
      className={`w-20 h-20 object-cover cursor-pointer hover:opacity-75 ${
        selectedImage.value === index ? "border-2 border-black" : ""
      }`}
      onClick={() => (selectedImage.value = index)}
    />
  );
}

export function ProductViewImage({ images, selectedImage }: any) {
  return (
    <img
      src={images[selectedImage.value]}
      alt="Product"
      className="object-cover w-full h-full"
    />
  );
}
