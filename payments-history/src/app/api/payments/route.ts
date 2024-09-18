const DATA = {
  data: [
    {
      id: "1",
      invoice: "1 Mar, 2024",
      status: "pending",
      amount: 12.0,
      plan: "professional",
    },
    {
      id: "2",
      invoice: "1 Feb, 2024",
      status: "paid",
      amount: 6.0,
      plan: "basic",
    },
    {
      id: "3",
      invoice: "1 Jan, 2024",
      status: "paid",
      amount: 6.0,
      plan: "basic",
    },
    {
      id: "4",
      invoice: "1 Dec, 2023",
      status: "paid",
      amount: 0.0,
      plan: "starter",
    },
  ],
};

export async function GET() {
  return Response.json({ data: DATA });
}
