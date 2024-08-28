import { HeaderNavbar } from "site/islands/HeaderIsland.tsx";
import { useUI } from "site/islands/useUI.ts";

const Header = () => {
  const { lastScrollY, showHeader, quantityItems, updateSKU } = useUI();

  return (
    <header>
      <HeaderNavbar
        lastScrollY={lastScrollY}
        showHeader={showHeader}
        quantityItems={quantityItems}
        updateSKU={updateSKU}
      />
    </header>
  );
};

export default Header;
