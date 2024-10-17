"use client";

import QuantityButton from "./components/QuantityButton";
import { Product, ProductUnit } from "./types";
import Image from "next/image";
import capitalizeWord from "./utils/capitalizeWord";
import formatMoney from "./utils/formatMoney";

interface ProductCardItemProps {
  product: Product;
  productUnit: ProductUnit;
}

function ProductCard({ product, productUnit }: ProductCardItemProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 bg-white rounded-md">
      <div className="flex justify-center">
        <Image
          style={{
            width: "100%",
            minWidth: "280px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
          src={productUnit.image_url}
          width={319}
          height={200}
          alt="item picture"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <div>
          <span>{capitalizeWord(productUnit.color)}</span>{" "}
          {productUnit.size && <span>{productUnit.size.toUpperCase()}</span>}
        </div>
        <p className="text-sm">{product.description}</p>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <QuantityButton />
            <button>Remove</button>
          </div>
          <div className="flex gap-2">
            <p className="text-lg font-semibold">
              {formatMoney(productUnit.sale_price)}
            </p>
            <p className="text-sm line-through text-gray-500">
              ${productUnit.list_price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
