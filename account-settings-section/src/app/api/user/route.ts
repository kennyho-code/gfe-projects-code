const DATA = {
  id: 1,
  username: "johnappleseed",
  email: "example@mail.com",
  firstName: "John",
  lastName: "AppleSeed",
};

export async function GET() {
  return Response.json({ data: DATA });
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  return Response.json({ status: 200 });
}
