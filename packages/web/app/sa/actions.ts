"use server";

export async function test() {
  const bacon = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Los_Angeles"
  );
  const data = await bacon.json();
  console.log(data);
  return { hello: "worlds", data };
}
