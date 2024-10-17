"use client";

import QuantityButton from "./components/QuantityButton";
import { Product, ProductUnit, CartItem } from "./types";

interface ProductCardItemProps {
  product: Product;
  productUnit: ProductUnit;
  cartItem: CartItem;
}

function ProductCard({ product, productUnit, cartItem }: ProductCardItemProps) {
  return (
    <div className="bg-white rounded-md p-4">
      {/* <Image src="/images/1.jpg" width={200} height={200} /> */}
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <div>
        <span>{productUnit.color}</span> <span>{productUnit.size}</span>
      </div>
      <p className="text-sm">{product.description}</p>
      <div>
        <QuantityButton />
        <p className="text-lg font-semibold">Price</p>
      </div>
    </div>
  );
}

export default ProductCard;
