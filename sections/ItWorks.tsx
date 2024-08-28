import Header from "site/components/Header/Header.tsx";
import Product from "site/components/Product/Product.tsx";
import Footer from "site/components/Footer/index.tsx";

export interface Props {
  /**
   * @format rich-text
   * @description The description of name.
   * @default It Works!
   */
  name?: string;

  count?: number;
}

export default function Section({ name = "It Works!", count = 0 }: Props) {
  return (
    <div className="flex py-4 flex flex-col h-screen w-full">
      <Header />

      <div className="flex items-center justify-center gap-2 py-10">
        <Product />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
