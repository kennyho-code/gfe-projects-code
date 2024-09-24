import {
  Order,
  OrderItem,
  OrderSummary as OrderSummaryType,
  PaymentMethod as PaymentMethodType,
  ShippingDetails as ShippingDetailsType,
} from "./types";

async function getOrder() {
  const response = await fetch("http://localhost:3000/api/order");
  const body = await response.json();
  return body.data as Order;
}

export default async function Home() {
  const order = await getOrder();
  return (
    <div>
      <main>
        <header>
          <h1>Your order is confirmed.</h1>
          <div>
            Your order is now in the queue and being processed. We&apos;ll let
            you know when we ship it out!
          </div>
        </header>
        <div>
          <div>Order number</div>
          <div className="flex gap-2">
            <span>{order.order_id}</span>
            <span>📝</span>
          </div>
        </div>
        <OrderList orderList={order.items} />
        <hr />
        <OrderSummary orderSummary={order.summary} />
        <PaymentMethod paymentMethod={order.payment_method} />
        <ShippingDetails shippingDetails={order.shipping_details} />
        <button>Continue Shipping </button>
      </main>
    </div>
  );
}

function OrderList({ orderList }: { orderList: OrderItem[] }) {
  return (
    <ul>
      {orderList.map((order) => (
        <div key={order.product.product_id}>
          <h3>{order.product.name}</h3>
          <div className="flex gap-2">
            <div>{order.unit.color}</div>
            <div>{order.unit.size}</div>
          </div>
          <div>Quantitity: {order.quantity}</div>
        </div>
      ))}
    </ul>
  );
}

function OrderSummary({ orderSummary }: { orderSummary: OrderSummaryType }) {
  return (
    <div>
      <div>{orderSummary.subtotal}</div>
      <div>{orderSummary.shipping}</div>
      <div>{orderSummary.discount}</div>
      <div>{orderSummary.discount_code}</div>
      <hr />
      <div>{orderSummary.total}</div>
    </div>
  );
}

function PaymentMethod({
  paymentMethod,
}: {
  paymentMethod: PaymentMethodType;
}) {
  return (
    <div>
      <div>Payment</div>
      <div>Ending with {paymentMethod.last_4}</div>
      <div>
        Expires {paymentMethod.exp_month} / {paymentMethod.exp_year}
      </div>
    </div>
  );
}

function ShippingDetails({
  shippingDetails,
}: {
  shippingDetails: ShippingDetailsType;
}) {
  return (
    <div>
      <div>Shipping Address </div>
      <address>
        <div>{shippingDetails.phone}</div>
        <div>{shippingDetails.address.line1}</div>
        <div>{shippingDetails.address.line2}</div>
        <div>
          {shippingDetails.address.city}, {shippingDetails.address.state} $
          {shippingDetails.address.zip}
        </div>
        <div>{shippingDetails.address.country}</div>
      </address>
    </div>
  );
}
