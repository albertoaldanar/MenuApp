import CONSTANTS from "../constants";

const random = Math.floor(Math.random() * CONSTANTS.restaurantsList.length);

async function getMenu() {
  const conf = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-API-KEY": "756c68d8b08b17a4edafe28a263fded6",
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
