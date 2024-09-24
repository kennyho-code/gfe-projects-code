import { ReactNode } from "react";
import {
  Order,
  OrderItem,
  OrderSummary as OrderSummaryType,
  PaymentMethod as PaymentMethodType,
  ProductUnit,
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
    <div className="bg-gray-200 p-4  h-full">
      <main className="bg-white p-4 rounded-lg flex flex-col gap-8 lg:flex-row lg:p-12 lg:justify-center">
        <HeaderImage />
        <div className="flex flex-col gap-8">
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Your order is confirmed.</h1>
            <div className="text-gray-600">
              Your order is now in the queue and being processed. We&apos;ll let
              you know when we ship it out!
            </div>
          </header>
          <div>
            <div className="text-gray-600">Order number</div>
            <div className="flex gap-2 text-indigo-500">
              <span>{order.order_id}</span>
              <span>📝</span>
            </div>
          </div>
          <OrderList orderList={order.items} />
          <OrderSummary orderSummary={order.summary} />
          <div className="flex flex-col gap-8 md:flex-row">
            <ShippingDetails shippingDetails={order.shipping_details} />
            <PaymentMethod paymentMethod={order.payment_method} />
          </div>
          <button className="border-2 inline-flex justify-center items-center  py-2 rounded-md font-semibold w-full">
            Continue Shipping ➡️
          </button>
        </div>
      </main>
    </div>
  );
}

function capWord(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

function OrderList({ orderList }: { orderList: OrderItem[] }) {
  return (
    <ul className="flex flex-col ">
      {orderList.map((order) => (
        <div
          className="justify-between flex gap-4 border-b-2 pt-6 pb-6"
          key={order.product.product_id}
        >
          <div className="flex gap-4">
            <img
              src={order.unit.image_url}
              className="h-[80px] w-[80px] rounded-lg object-cover"
            />
            <div>
              <div className=" flex-col">
                <div className="text-lg font-semibold">
                  {order.product.name}
                </div>
                <div className="flex gap-2">
                  <div>{capWord(order.unit.color)}</div>
                  {order.unit.size && <div>&#8226;</div>}
                  <div>{order.unit.size}</div>
                </div>
                <div className="text-gray-600">
                  Quantitity: {order.quantity}
                </div>
              </div>
            </div>
          </div>
          <OrderUnitPrice orderUnit={order.unit} />
        </div>
      ))}
    </ul>
  );
}

function OrderUnitPrice({ orderUnit }: { orderUnit: ProductUnit }) {
  return (
    <div className="flex flex-col text-right">
      <div className="font-semibold">${orderUnit.sale_price}</div>
      {orderUnit.sale_price < orderUnit.list_price && (
        <div className="line-through text-gray-600 font-normal">
          ${orderUnit.list_price}
        </div>
      )}
    </div>
  );
}

function OrderSummary({ orderSummary }: { orderSummary: OrderSummaryType }) {
  return (
    <div className="flex flex-col  gap-6">
      <OrderSummaryItem field="Subtotal" value={`$${orderSummary.subtotal}`} />
      <OrderSummaryItem
        field="Shipping"
        value={
          orderSummary.shipping === 0
            ? "FREE"
            : "$" + orderSummary.shipping.toFixed(2).toString()
        }
      />

      <OrderSummaryItem
        field={
          <div className="flex flex-col md:flex-row gap-4">
            <div className="text-gray-600">Coupon Discount</div>
            <div>
              <span className="text-sm bg-purple-50 inline px-2 py-2 border-purple-500 border-2 rounded-full text-purple-500">
                {orderSummary.discount_code}
              </span>
            </div>
          </div>
        }
        value={`-$${orderSummary.discount.toFixed(2)}`}
      />
      <hr />
      <div className="flex justify-between items-center">
        <div className="font-semibold text-gray-600">Total</div>
        <div className="font-bold text-xl">{`$${(orderSummary.total - orderSummary.discount).toFixed(2)}`}</div>
      </div>
    </div>
  );
}

function OrderSummaryItem({
  field,
  value,
}: {
  field: string | ReactNode;
  value: string;
}) {
  return (
    <div className="flex justify-between">
      {typeof field === "string" ? (
        <div className="text-gray-600">{field}</div>
      ) : (
        field
      )}
      <div className="font-bold">{value}</div>
    </div>
  );
}

function PaymentMethod({
  paymentMethod,
}: {
  paymentMethod: PaymentMethodType;
}) {
  return (
    <div className="md:grow flex flex-col gap-2 text-gray-600">
      <div>Payment</div>
      <div className="flex gap-4 items-center">
        <div>💳</div>
        <div className="flex flex-col">
          <div className="text-black">Ending with {paymentMethod.last_4}</div>
          <div>
            Expires {paymentMethod.exp_month} /{" "}
            {paymentMethod.exp_year.toString().slice(-2)}
          </div>
        </div>
      </div>
    </div>
  );
}

function formatPhone(s: string) {
  return `+1 (${s.slice(0, 3)}) ${s.slice(3, 6)}-${s.slice(6, 9)}`;
}

function ShippingDetails({
  shippingDetails,
}: {
  shippingDetails: ShippingDetailsType;
}) {
  return (
    <div className="md:grow">
      <div className="text-gray-600">Shipping Address </div>
      <address className="text-gray-600 font-normal">
        <div>{formatPhone(shippingDetails.phone)}</div>
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

function HeaderImage() {
  return (
    <div>
      <img
        className="h-[196px] md:h-[420px] lg:h-full lg:w-[592px] w-full object-cover"
        src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/collections/cozy-comfort.jpg"
      />
    </div>
  );
}
