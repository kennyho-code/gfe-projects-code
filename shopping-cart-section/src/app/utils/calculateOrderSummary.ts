import { CartItem } from "../types";

interface OrderSummary {
  subtotal: number;
  discount: number;
  discount_code: string | null;
  shipping: number;
  total: number;
}

export default function calculateOrderSummary(
  cartItems: CartItem[],
): OrderSummary {
  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.unit.sale_price * item.quantity,
    0,
  );

  // For this example, we'll set discount and shipping to 0
  // You can modify this logic if you have specific discount or shipping rules
  const discount = 0;
  const shipping = 0;

  // Calculate total
  const total = subtotal - discount + shipping;

  return {
    subtotal: Number(subtotal.toFixed(2)),
    discount: Number(discount.toFixed(2)),
    discount_code: null,
    shipping: Number(shipping.toFixed(2)),
    total: Number(total.toFixed(2)),
  };
}
