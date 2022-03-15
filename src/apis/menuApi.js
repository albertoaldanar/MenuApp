import CONSTANTS from "../constants";

const random = Math.floor(Math.random() * CONSTANTS.restaurantsList.length);

async function getMenu() {
  const conf = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-API-KEY": "c3ba8c2613d3988d3329f116ad27ab82",
    },
  };

  try {
    const response = await fetch(
      `${CONSTANTS.url}${CONSTANTS.restaurantsList[random]}/`,
      conf
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("error", error);
  }
}
export { getMenu };
