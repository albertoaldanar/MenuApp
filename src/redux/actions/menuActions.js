export const SET_MENU_DATA = "SET_MENU_DATA";

export function changeMenuData(object) {
  return {
    type: SET_MENU_DATA,
    payload: object,
  };
}
