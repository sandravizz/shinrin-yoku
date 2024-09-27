import { error as err } from "@sveltejs/kit";
export const prerender = true;
export const load = async () => {
  try {
    const result = await fetch(
      `https://api.meetup.com/lx-urban-gardening/events`
    );
    const data = await result.json();
    return { events: data };
  } catch (error) {
    console.log(error);
    throw err(400, `There was error.`);
  }
};
