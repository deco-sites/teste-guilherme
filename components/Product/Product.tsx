import ProductInfo from "site/components/Product/ProductInfo.tsx";

const Product = () => {
  return (
    <div className="flex flex-col lg:flex-row max-w-6xl mx-auto rounded-lg p-4 mt-20">
      <div className="flex-1 bg-zinc-300 p-4 rounded-lg shadow-lg">
        <ProductInfo />
      </div>
    </div>
  );
};

export default Product;
