"use server";

export async function test() {
  const bacon = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Los_Angeles",
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const data = await bacon.json();
  console.log(data);
  return { hello: "worlds", time: data.utc_datetime };
}
