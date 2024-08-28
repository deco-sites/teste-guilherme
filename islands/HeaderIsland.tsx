import { useUI } from "site/islands/useUI.ts";
import { useEffect } from "preact/hooks";
import MobileDrawer from "site/components/Header/MobileDrawer.tsx";
import CartDrawer from "site/components/Header/CartDrawer.tsx";
import Navbar from "site/components/Header/Navbar.tsx";
import { IHeaderLoginAndCart, IHeaderNavbar } from "../@types/Header/index.tsx";

export function HeaderNavbar({
  lastScrollY,
  showHeader,
  quantityItems,
  updateSKU,
}: IHeaderNavbar) {
  const controlHeader = () => {
    if (globalThis.scrollY > lastScrollY.value) {
      showHeader.value = false;
    } else {
      showHeader.value = true;
    }
    lastScrollY.value = globalThis.scrollY;
  };

  useEffect(() => {
    const handleScroll = () => controlHeader();

    globalThis.addEventListener("scroll", handleScroll);
    return () => {
      globalThis.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-transform duration-300 ease-in-out ${
          showHeader.value
            ? "transform translate-y-0"
            : "transform -translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-2">
          <HeaderLogo />

          <Navbar />

          <HeaderLoginAndCart
            quantityItems={quantityItems}
            updateSKU={updateSKU}
          />
        </div>
      </header>
    </>
  );
}
export function HeaderLogo() {
  const { isMobileMenuOpen } = useUI();

  return (
    <>
      <MobileDrawer
        isOpen={isMobileMenuOpen.value}
        onClose={() => (isMobileMenuOpen.value = false)}
      />

      <div className="flex items-center">
        <button
          onClick={() => (isMobileMenuOpen.value = true)}
          className="md:hidden mr-4"
        >
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
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <a href="/" className="text-2xl font-bold text-gray-800">
          <svg
            width="80px"
            height="auto"
            viewBox="0 0 169 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.0148 2.5V40H0V2.5H10.0148Z"
              fill="#283841"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.0222 2.5H36.3037C43.2175 2.5 48.8222 8.09644 48.8222 15C48.8222 21.9036 43.2175 27.5 36.3037 27.5H25.037V40H15.0222V2.5ZM25.037 17.5H36.3037C37.6865 17.5 38.8074 16.3807 38.8074 15C38.8074 13.6193 37.6865 12.5 36.3037 12.5H25.037V17.5Z"
              fill="#283841"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M86.3778 2.5V21.875C86.3778 26.3623 90.0208 30 94.5148 30C99.0088 30 102.652 26.3623 102.652 21.875V2.5H112.667V21.875C112.667 31.8852 104.54 40 94.5148 40C84.4898 40 76.363 31.8852 76.363 21.875V2.5H86.3778Z"
              fill="#283841"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M52.5778 20C52.5778 10.335 60.4244 2.5 70.1037 2.5H72.6074V12.5H70.1037C65.9554 12.5 62.5926 15.8579 62.5926 20V21.25C62.5926 31.6053 54.1855 40 43.8148 40H42.563V30H43.8148C48.6545 30 52.5778 26.0825 52.5778 21.25V20Z"
              fill="#283841"
            ></path>
            <path
              d="M169 3.75C169 5.82107 167.319 7.5 165.244 7.5C163.17 7.5 161.489 5.82107 161.489 3.75C161.489 1.67893 163.17 0 165.244 0C167.319 0 169 1.67893 169 3.75Z"
              fill="#283841"
            ></path>
            <path
              d="M123.42 40L128.199 20.0181L131.752 32.0393C133.87 39.2091 144.041 39.2091 146.16 32.0393L149.712 20.0181L154.491 40H164.787L157.273 8.57949C155.486 1.10744 144.941 0.830781 142.763 8.19891L138.956 21.0833L135.148 8.19892C132.971 0.830824 122.425 1.1074 120.638 8.57948L113.124 40H123.42Z"
              fill="#283841"
            ></path>
          </svg>
        </a>
      </div>
    </>
  );
}

export function HeaderLoginAndCart({
  quantityItems,
  updateSKU,
}: IHeaderLoginAndCart) {
  const { isCartOpen } = useUI();

  return (
    <>
      <CartDrawer
        isOpen={isCartOpen.value}
        onClose={() => (isCartOpen.value = false)}
        updateSKU={updateSKU.value}
        quantityItems={quantityItems.value}
      />

      <div className="flex items-center space-x-2">
        {/* Ícone de Login */}
        <button className="mr-2">
          <svg
            className="w-6 h-6 text-gray-800"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6801 14.62L14.2401 12.06L11.6801 9.5"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 12.0601H14.17"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        {/* Ícone do Carrinho */}
        <button
          onClick={() => {
            isCartOpen.value = true;
          }}
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="#000000"
            width="800px"
            height="800px"
            viewBox="0 0 56 56"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 20.0079 39.6485 L 47.3596 39.6485 C 48.2735 39.6485 49.0703 38.8985 49.0703 37.8907 C 49.0703 36.8829 48.2735 36.1328 47.3596 36.1328 L 20.4063 36.1328 C 19.0704 36.1328 18.2501 35.1953 18.0391 33.7656 L 17.6641 31.3047 L 47.4062 31.3047 C 50.8281 31.3047 52.5859 29.1953 53.0783 25.8438 L 54.9532 13.4453 C 55.0003 13.1407 55.0468 12.7656 55.0468 12.5547 C 55.0468 11.4297 54.2030 10.6563 52.9142 10.6563 L 14.6407 10.6563 L 14.1954 7.6797 C 13.9610 5.8750 13.3048 4.9609 10.9141 4.9609 L 2.6876 4.9609 C 1.7501 4.9609 .9532 5.7813 .9532 6.7188 C .9532 7.6797 1.7501 8.5000 2.6876 8.5000 L 10.6094 8.5000 L 14.3594 34.2344 C 14.8516 37.5625 16.6094 39.6485 20.0079 39.6485 Z M 51.0623 14.1953 L 49.3987 25.4219 C 49.2110 26.8750 48.4377 27.7656 47.0548 27.7656 L 17.1485 27.7891 L 15.1563 14.1953 Z M 21.8594 51.0391 C 23.9688 51.0391 25.6563 49.375 25.6563 47.2422 C 25.6563 45.1328 23.9688 43.4453 21.8594 43.4453 C 19.7266 43.4453 18.0391 45.1328 18.0391 47.2422 C 18.0391 49.375 19.7266 51.0391 21.8594 51.0391 Z M 43.7735 51.0391 C 45.9062 51.0391 47.5939 49.375 47.5939 47.2422 C 47.5939 45.1328 45.9062 43.4453 43.7735 43.4453 C 41.6641 43.4453 39.9532 45.1328 39.9532 47.2422 C 39.9532 49.375 41.6641 51.0391 43.7735 51.0391 Z" />
          </svg>
        </button>
      </div>
    </>
  );
}
