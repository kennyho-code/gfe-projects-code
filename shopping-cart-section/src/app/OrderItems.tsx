"use client";
import ProductCard from "./ProductCard";
import { useCart } from "./utils/useCart";

function OrderItems() {
  const { cart, removeFromCart } = useCart();
  return (
    <div className="flex flex-col">
      {cart.map((cartItem) => (
        <div
          className="flex flex-col gap-6 py-8 first:pt-0 border-b last:border-b-0 border-dotted border-gray-300"
          key={cartItem.product.product_id}
        >
          <ProductCard
            product={cartItem.product}
            productUnit={cartItem.unit}
            onRemoveItem={() => {
              removeFromCart(cartItem.product.product_id);
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default OrderItems;
