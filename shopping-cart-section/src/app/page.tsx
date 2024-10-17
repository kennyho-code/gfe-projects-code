import OrderSummary from "./OrderSummary";
import { CartProvider } from "./utils/useCart";
import OrderItems from "./OrderItems";

export default async function Home() {
  return (
    <div className="bg-gray-100 p-4 min-h-screen">
      <main className="bg-white rounded-md min-h-screen p-4">
        <div className="flex flex-col gap-4 max-w-[1216px] mx-auto">
          <h1 className="text-3xl font-semibold lg:mb-0">Shopping Cart</h1>
          <CartProvider>
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="flex flex-col gap-4 lg:flex-row lg:w-2/3">
                <OrderItems />
              </div>
              <OrderSummary />
            </div>
          </CartProvider>
        </div>
      </main>
    </div>
  );
}
