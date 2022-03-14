export const SET_MENU_DATA = "SET_MENU_DATA";
export const FETCH_MENU_DATA =  "FETCH_MENU_DATA";

export function changeMenuData(object) {
  return {
    type: SET_MENU_DATA,
    payload: object,
  };
}

export function fetchMenuData(){
  console.log("llego aqui")
  return {
    type: FETCH_MENU_DATA,
  };

}
