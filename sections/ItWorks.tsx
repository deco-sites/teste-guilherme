import { useSection } from "deco/hooks/useSection.ts";
import Header from "site/components/Header/Header.tsx";
import Product from "site/components/Product/Product.tsx";

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
  /**
   * useSection is a nice hook for getting the HTMX link to render this section,
   * but with the following Props
   */
  const downLink = useSection({ props: { count: count - 1 } });
  const upLink = useSection({ props: { count: count + 1 } });

  return (
    <div className="flex py-4 flex flex-col h-screen w-full">
      <Header />

      <div className="flex items-center justify-center gap-2 py-10">
        <Product />
      </div>
    </div>
  );
}
