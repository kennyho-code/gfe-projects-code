"use client";

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import usePaymentHistory from "./utils/usePaymentsHistory";
import useScreenSize from "./utils/useScreenSize";

export type Payment = {
  id: string;
  invoice: string;
  status: string;
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
      <main className="p-4">
        <header>
          <h1>Payment History</h1>
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

const cols = ["Invoice", "Status", "Amount", "Plan", ""];

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
        {payment.status}
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
          <button className="text-blue-500">Download</button>
        </div>
      </PaymentData>
    </li>
  );
}

function PaymentsTable({ payments }: { payments: Payment[] }) {
  return (
    <table>
      <thead>
        <tr>
          {cols.map((col, idx) => (
            <th key={idx}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {payments.map((payment) => (
          <tr key={payment.id}>
            <td>{payment.invoice}</td>
            <td>{payment.status}</td>
            <td>{payment.amount}</td>
            <td>{payment.plan}plan</td>
            <td>
              <button>Download</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
