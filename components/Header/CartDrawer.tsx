import { useUI } from "site/islands/useUI.ts";
import { productName, productPrice } from "site/helpers/mock.ts";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  updateSKU: string;
  quantityItems: number;
}

const CartDrawer = ({
  isOpen,
  onClose,
  updateSKU,
  quantityItems,
}: CartDrawerProps) => {
  const productPrice = 199;
  return (
    <div
      className={`fixed right-0 top-0 h-screen z-50 w-80 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex flex-col p-4 h-full">
        <button onClick={onClose} className="mb-4 self-end">
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div className="flex-1 overflow-y-auto">
          <p className="text-gray-800">
            {productName} - Tamanho: {updateSKU}
          </p>
          <p>Preço: R$ {productPrice},00</p>
          <p>Quantidade: {quantityItems}</p>
          <div className="border-t mt-4 text-gray-800">
            <p>Total: R$ {productPrice * quantityItems},00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
