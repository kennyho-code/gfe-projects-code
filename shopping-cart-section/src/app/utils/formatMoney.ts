export default function formatMoney(amount: number): string {
  // Check if the input is a valid number
  if (typeof amount !== "number" || isNaN(amount)) {
    return "Invalid amount";
  }

  // Format the number to a fixed 2 decimal places and add thousand separators
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(amount);
}
