import { useState, useEffect } from "react";
import { Payment } from "../page";

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

export default usePaymentHistory;
