"use client";
import Badge from "./components/Badge";
import calculateOrderSummary from "./utils/calculateOrderSummary";
import { useCart } from "./utils/useCart";

interface OrderItemProps {
  label: string;
  value: string | number;
}

function OrderItem({ label, value }: OrderItemProps) {
  return (
    <div className="flex justify-between items-center">
      <span className="font-semibold text-gray-700">{label}</span>
      <span className="text-right font-semibold">${value}</span>
    </div>
  );
}

function validateItemsinRealTime() {
  // do some validation logic when to see if the present data agrees with the
  // users local cart
}

function OrderSummary() {
  const { cart } = useCart();
  const orderSummary = calculateOrderSummary(cart);

  return (
    <div className="lg:w-1/3">
      <div className="p-4 flex flex-col gap-4 border-2 rounded-md">
        <h2 className="text-2xl font-semibold">Order Summary</h2>
        <OrderItem label="Subtotal" value={orderSummary.subtotal} />
        <OrderItem label="Shipping" value={orderSummary.shipping} />

        <div className="flex justify-between items-center">
          <Badge rounded text="GR8FRNTND24" />
          <span>-$1.00</span>
        </div>
        <div>
          <label className="block text-sm font-semibold">Coupon code</label>
          <div className="flex gap-2 items-center">
            <input
              className="bg-gray-100 border-2 rounded-md w-full p-2"
              placeholder="Enter coupon code"
            />
            <button className="border-2 rounded-md p-2">Apply</button>
          </div>
          <div className="mt-1">
            <Badge variant="secondary" text="GR8FRNTND24" />
          </div>
        </div>

        <div className="border-b border-dotted border-gray-300" />
        <div className="flex justify-between items-center">
          <span className="font-semibold  text-2xl">Total</span>
          <span className="text-4xl font-bold">${orderSummary.total}</span>
        </div>

        <button
          onClick={() => {
            /// go to the checkout page and do price validation....for everything
            validateItemsinRealTime();
          }}
          className="bg-blue-800 text-white py-2 w-full font-semibold rounded-md"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default OrderSummary;
