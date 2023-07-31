"use server";

export async function test() {
  const bacon = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Los_Angeles",
    {
      next: {
        tags: ["bacon"],
      },
    }
  );
  const data = await bacon.json();
  return { hello: "worlds", data };
}
