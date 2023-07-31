import { NextResponse } from "next/server";
export async function GET() {
  const bacon = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Los_Angeles",
    {
      next: {
        tags: ["bacon"],
      },
    }
  );
  const data = await bacon.json();
  return NextResponse.json({
    hello: "worlds",
    data,
  });
}
