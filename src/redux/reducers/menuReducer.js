import { SET_MENU_DATA } from "../actions/menuActions";

const initialState = {
  menus: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_MENU_DATA: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
}
