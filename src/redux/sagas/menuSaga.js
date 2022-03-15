import { call, put, takeLatest } from "redux-saga/effects";
import { getMenu } from "../../apis/menuApi";
import { FETCH_MENU_DATA, SET_MENU_DATA } from "../actions/menuActions";

function* getMenuData() {
  try {
    const menu = yield call(getMenu);
    yield put({ type: SET_MENU_DATA, payload: menu });
  } catch (e) {
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
    console.log(e);
  }
}

function* menuSaga() {
  yield takeLatest(FETCH_MENU_DATA, getMenuData);
}

export default menuSaga;
