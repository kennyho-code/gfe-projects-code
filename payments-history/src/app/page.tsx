"use client";

import { useEffect, useState } from "react";

type Payment = {
  id: string;
  invoice: string;
  status: string;
  amount: number;
  plan: string;
};

function usePaymentHistory() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchPayments() {
      try {
        setLoading(true);
        const response = await fetch("api/payments");
        const payments = (await response.json()).data.data;
        setPayments(payments);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    }
    fetchPayments();
  }, []);

  return {
    error,
    loading,
    payments,
  };
}

export default function Home() {
  return (
    <div>
      <main>
        <header>
          <h1>Payment History</h1>
          <div>
            Please reach out to our friendly team via team@codepulse.com if you
            have questions.
          </div>
        </header>
        <PaymentsTable />
      </main>
    </div>
  );
}

const cols = ["Invoice", "Status", "Amount", "Plan"];
function PaymentsTable() {
  const { payments, loading } = usePaymentHistory();
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <table>
      <thead>
        <thead>
          <tr>
            {cols.map((col, idx) => (
              <th key={idx}>{col}</th>
            ))}
          </tr>
        </thead>
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
