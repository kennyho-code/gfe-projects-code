import { Product, ProductUnit } from "./types";
import ProductCard from "./ProductCard";

async function getCartItems() {
  const response = await fetch(
    "https://www.greatfrontend.com/api/projects/challenges/e-commerce/cart-sample",
  );
  const data = await response.json();
  return data as CartItemData;
}

type CartItemData = {
  cart_id: string;
  items: {
    product: Product;
    unit: ProductUnit;
    quantitity: number;
    total_list_price: number;
    total_sale_price: number;
    created_at: string;
  }[];
};

export default async function Home() {
  const cartItems = await getCartItems();
  console.log("cartItems", cartItems);
  return (
    <div className="bg-gray-100 p-4 min-h-screen">
      <main className="bg-white rounded-md h-screen p-4">
        <h1 className="text-3xl font-semibold">Shopping Cart</h1>

        <div>
          {cartItems.items.map((cartItem) => (
            <ProductCard
              key={cartItem.product.id}
              product={cartItem.product}
              productUnit={cartItem.unit}
              cartItem={cartItem}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
