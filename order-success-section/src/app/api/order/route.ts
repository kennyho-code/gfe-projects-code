import { NextResponse } from "next/server";
import sampleOrder from "./sample-order";

export async function GET() {
  return NextResponse.json({ data: sampleOrder });
}
