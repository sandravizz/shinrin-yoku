import { error as err } from "@sveltejs/kit";

export const load = async () => {
  try {
    const groupResult = await fetch(
      `https://api.meetup.com/lx-urban-gardening`
    );
    const groupData = await groupResult.json();
    const eventsResult = await fetch(
      `https://api.meetup.com/lx-urban-gardening/events`
    );
    const eventsData = await eventsResult.json();
    return { events: eventsData, group: groupData };
  } catch (error) {
    console.log(error);
    throw err(400, `There was error.`);
  }
};
