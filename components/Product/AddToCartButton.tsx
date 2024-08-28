import { IAddToCartButtonProps } from "site/@types/Product/index.tsx";

const AddToCartButton = ({
  selectedSKU,
  quantityItems,
  updateSKU,
  isCartOpen,
}: IAddToCartButtonProps) => {
  const handleAddToCart = () => {
    if (selectedSKU.value) {
      updateSKU.value = selectedSKU.value;
      quantityItems.value += 1;
      isCartOpen.value = true;
    } else {
      alert("Por favor, selecione um tamanho.");
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors"
    >
      Adicionar ao Carrinho
    </button>
  );
};
export default AddToCartButton;
