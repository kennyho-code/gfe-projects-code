import { Product, ProductUnit } from "./types";
import ProductCard from "./ProductCard";
import OrderSummary from "./OrderSummary";

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
  return (
    <div className="bg-gray-100 p-4 min-h-screen">
      <main className="bg-white rounded-md min-h-screen p-4">
        <div className="flex flex-col gap-4 max-w-[1216px] mx-auto">
          <h1 className="text-3xl font-semibold lg:mb-0">Shopping Cart</h1>
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="flex flex-col gap-4 lg:flex-row lg:w-2/3">
              <div className="flex flex-col">
                {cartItems.items.map((cartItem) => (
                  <div
                    className="flex flex-col gap-6 py-8 first:pt-0 border-b last:border-b-0 border-dotted border-gray-300"
                    key={cartItem.product.product_id}
                  >
                    <ProductCard
                      product={cartItem.product}
                      productUnit={cartItem.unit}
                    />
                  </div>
                ))}
              </div>
            </div>
            <OrderSummary />
          </div>
        </div>
      </main>
    </div>
  );
}
