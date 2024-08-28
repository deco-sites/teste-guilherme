import { productName } from "site/helpers/mock.ts";
import { ICartDrawerProps } from "site/@types/Header/index.tsx";

const CartDrawer = ({ isOpen, onClose, cartItems }: ICartDrawerProps) => {
  const productPrice = 199;

  const calculateTotal = () =>
    cartItems.value.reduce(
      (total, item) => total + productPrice * item.quantity,
      0
    );

  return (
    <div
      className={`fixed right-0 top-0 h-screen z-50 w-80 bg-zinc-300 shadow-xl transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Carrinho</h2>
          <button onClick={onClose} className="text-gray-800">
            <svg
              className="w-6 h-6"
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
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.value.length > 0 ? (
            cartItems.value.map((item) => (
              <div
                key={item.sku}
                className="flex justify-between items-center py-2 border-b"
              >
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="text-gray-800">{productName}</p>
                    <p className="text-gray-600 text-sm">Tamanho: {item.sku}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-800">R$ {productPrice},00</p>
                  <p className="text-sm text-gray-600">
                    Quantidade: {item.quantity}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center h-full">
              <span className="text-gray-600">Não há itens no carrinho</span>
            </div>
          )}
        </div>

        {cartItems.value.length > 0 && (
          <div className="p-4 border-t">
            <div className="flex justify-between text-gray-800">
              <span>Total:</span>
              <span className="font-semibold">R$ {calculateTotal()},00</span>
            </div>
            <button className="w-full mt-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
