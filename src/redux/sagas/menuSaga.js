import { call, put, takeEvery, fork } from 'redux-saga/effects'
import API from '../../apis/menuApi';

// // worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getMenu() {
   console.log("MENUUUUUUUU")
   try {
      const menu = yield call(API.getMenu());
      console.log("esto es menu", menu)
      yield put({type: "SET_MENU_DATA", menus: menu});
   } catch (e) {
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
    console.log(e)
   }
}

function* menuSaga() {
   console.log('aquiii es my saga')
   yield takeEvery("FETCH_MENU_DATA", getMenu)
}

export default menuSaga;
