import { productName } from "site/helpers/mock.ts";
import { ICartDrawerProps } from "site/@types/Header/index.tsx";

const CartDrawer = ({
  isOpen,
  onClose,
  updateSKU,
  quantityItems,
}: ICartDrawerProps) => {
  const productPrice = 199;
  return (
    <div
      className={`fixed right-0 top-0 h-screen z-50 w-80 bg-zinc-400 shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      {quantityItems > 0 ? (
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
            <p className="text-gray-800">{productName}</p>
            <p className="text-gray-800">Tamanho: {updateSKU}</p>
            <p>Preço: R$ {productPrice},00</p>
            <p>Quantidade: {quantityItems}</p>
            <div className="border-t mt-4 text-gray-800">
              <p>Total: R$ {productPrice * quantityItems},00</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col p-4 justify-center items-center">
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

          <div className="flex-1 ">
            <span class={"text-lg font-semibold"}>
              Não tem nada por aqui 😢
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDrawer;
