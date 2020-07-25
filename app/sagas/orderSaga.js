import { put, call, select } from 'redux-saga/effects';
import * as loginActions from 'app/actions/loginActions';
import * as orderActions from 'app/actions/orderActions';
import { getCustomerOrders, changeorderstatus } from 'app/api/methods/order';
import * as navigationActions from 'app/actions/navigationActions';

// Our worker Saga that loads filter

function* getCustomerOrdersAsync(action) {
  yield put(loginActions.enableLoader());
  const response = yield call(getCustomerOrders,action);
  console.log(response);
  if (response.Message === "success") {
      yield put(orderActions.ongetCustomerOrdersResponse(response.orders));
      yield put(loginActions.disableLoader({}));
  } else {
      yield put(orderActions.ongetCustomerOrdersFailedResponse(response));
      yield put(loginActions.disableLoader({}));
  }
}

function* changeOrderStatusAsync(action) {
  yield put(loginActions.enableLoader());
  const response = yield call(changeorderstatus,action);
  console.log(response);
  if (response.Message === "success") {
      yield put(orderActions.onchangeOrderStatusResponse(response));
      yield put(loginActions.disableLoader({}));
  } else {
      yield put(orderActions.onchangeOrderStatusFailedResponse(response));
      yield put(loginActions.disableLoader({}));
  }
}

_storeData = async (key,value) => {
  try {
    await AsyncStorage.setItem(key, value);
    return value;
  } catch (error) {
    // Error saving data
    return null;
  }
};

_retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value
    }
  } catch (error) {
    // Error retrieving data
  }
};


export { getCustomerOrdersAsync, changeOrderStatusAsync }