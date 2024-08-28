import { IAddToCartButton } from "site/@types/Product/index.tsx";

const AddToCartButton = ({
  selectedSKU,
  isCartOpen,
  cartItems,
}: IAddToCartButton) => {
  const handleAddToCart = () => {
    if (selectedSKU.value) {
      const existingItem = cartItems.value.find(
        (item) => item.sku === selectedSKU.value
      );

      if (existingItem) {
        alert("Você só pode adicionar 1 de cada tamanho!");
      } else {
        cartItems.value = [
          ...cartItems.value,
          { sku: selectedSKU.value, quantity: 1 },
        ];
      }

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
