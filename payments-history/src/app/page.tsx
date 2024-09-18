"use client";

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import usePaymentHistory from "./utils/usePaymentsHistory";
import useScreenSize from "./utils/useScreenSize";

export type Payment = {
  id: string;
  invoice: string;
  status: "paid" | "pending";
  amount: number;
  plan: string;
};

export default function Home() {
  const { screenSize } = useScreenSize();
  const { payments, loading } = usePaymentHistory();
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <main className="p-4 max-w-[1248px]">
        <header className="flex flex-col gap-2 mt-8 mb-8">
          <h1 className="text-2xl font-bold">Payment History</h1>
          <div>
            Please reach out to our friendly team via team@codepulse.com if you
            have questions.
          </div>
        </header>
        {screenSize.width >= 768 ? (
          <PaymentsTable payments={payments} />
        ) : (
          <PaymentsList payments={payments} />
        )}
      </main>
    </div>
  );
}

const cols = ["Invoice", "Status", "Amount", "Plan"];

function Label({ children }: { children: ReactNode }) {
  return <div className="text-gray-700">{children}</div>;
}

function PaymentsList({ payments }: { payments: Payment[] }) {
  return (
    <div>
      <ul className="flex flex-col gap-4">
        {payments.map((payment) => (
          <PaymentsItem key={payment.id} payment={payment} />
        ))}
      </ul>
    </div>
  );
}

function PaymentData({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={twMerge("flex justify-between border-b-2 p-4", className)}>
      {children}
    </div>
  );
}

function PaymentStatus({ status }: { status: Payment["status"] }) {
  return (
    <span
      className={twMerge(
        "rounded-full border-2 px-2 inline-flex justify-center item",
        status === "paid" && "bg-green-50 text-green-500 border-green-100",
        status === "pending" && "bg-gray-50 text-gray-500",
      )}
    >
      {capitalizeWord(status)}
    </span>
  );
}

function capitalizeWord(word: string): string {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function PaymentsItem({ payment }: { payment: Payment }) {
  return (
    <li className="border-2  rounded-lg">
      <PaymentData>
        <Label>Invoice</Label>
        <div className="font-semibold">{payment.invoice}</div>
      </PaymentData>
      <PaymentData>
        <Label>Status</Label>
        <PaymentStatus status={payment.status} />
      </PaymentData>
      <PaymentData>
        <Label>Amount</Label>
        <div className="font-semibold">{`$${payment.amount.toFixed(2)}`}</div>
      </PaymentData>
      <PaymentData>
        <Label>Plan</Label>
        <div className="font-semibold">{`${capitalizeWord(payment.plan)} Plan`}</div>
      </PaymentData>
      <PaymentData className="flex justify-center border-b-0">
        <div>
          <button className="text-blue-500 font-bold">Download</button>
        </div>
      </PaymentData>
    </li>
  );
}

function PaymentsTable({ payments }: { payments: Payment[] }) {
  return (
    <div className="border-2 rounded-lg">
      <table>
        <thead className="border-b-2 w-full">
          <tr>
            {cols.map((col, idx) => (
              <th
                className="text-left p-4 min-w-[184px] text-gray-700"
                key={idx}
              >
                {col}
              </th>
            ))}
            <th className="w-full"></th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr className="border-b-2 last:border-b-0 " key={payment.id}>
              <Td className="font-semibold">{payment.invoice}</Td>
              <Td>
                <PaymentStatus status={payment.status} />
              </Td>
              <Td>{`$${payment.amount.toFixed(2)}`}</Td>
              <Td>{`${capitalizeWord(payment.plan)} Plan`}</Td>
              <Td className="text-right">
                <button className="text-blue-500 font-bold">Download</button>
              </Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Td({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <td className={twMerge("w-[184px] p-6", className)}>{children}</td>;
}
