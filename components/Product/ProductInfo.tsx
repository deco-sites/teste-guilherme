import ShareButton from "site/components/Product/ShareButton.tsx";
import { useUI } from "site/islands/useUI.ts";
import {
  ProductAddToCartButton,
  ProductSelectedImage,
  ProductViewImage,
  ProductSKUSelector,
} from "site/islands/ProductIslands.tsx";
import {
  images,
  productDescription,
  productName,
  productPrice,
} from "site/helpers/mock.ts";

const ProductInfo = () => {
  const { selectedSKU, selectedImage, quantityItems, updateSKU } = useUI();

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Galeria de Imagens */}
      <div className="lg:w-2/3">
        <div className="w-full h-[600px] bg-gray-100">
          <ProductViewImage images={images} selectedImage={selectedImage} />
        </div>

        <div className="flex justify-center mt-4 gap-4">
          {images.map((src, index) => (
            <ProductSelectedImage
              key={index}
              index={index}
              src={src}
              selectedImage={selectedImage}
            />
          ))}
        </div>
      </div>

      {/* Informações do Produto */}
      <div className="lg:w-1/3 flex flex-col">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">
            {productName}
          </h1>
          <p className="text-2xl text-gray-700 mt-2">{productPrice}</p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            {productDescription}
          </p>
        </div>

        <div className="mt-2">
          <ProductSKUSelector selectedSKU={selectedSKU} />
        </div>

        <div className="flex items-center space-x-4 mt-12">
          <ProductAddToCartButton
            selectedSKU={selectedSKU}
            quantityItems={quantityItems}
            updateSKU={updateSKU}
          />
          <ShareButton />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
