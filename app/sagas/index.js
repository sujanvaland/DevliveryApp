/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import forgotPasswordSaga from './forgotPasswordSaga';
import { getAccountDetailAsync,updatePersonalDetailAsync,updateDeviceTokenAsync,changePasswordAsync, loadprofileimageAsync } from './accountSaga';
import { loginAsync,logoutAsync } from './loginSaga';
import { getCustomerOrdersAsync, changeOrderStatusAsync } from './orderSaga';

export default function* watch() {
    yield all([takeEvery(types.LOGIN_REQUEST, loginAsync)]);
    yield all([takeEvery(types.LOGOUT_REQUEST, logoutAsync)]);
    yield all([takeEvery(types.FORGOTPASSWORD_REQUEST, forgotPasswordSaga)]);
    //account Saga
    yield all([takeEvery(types.GETACCOUNT_REQUEST, getAccountDetailAsync)]);
    yield all([takeEvery(types.UPDATEPERSONALDETAIL_REQUEST, updatePersonalDetailAsync)]);
    yield all([takeEvery(types.UPDATEDEVICETOKEN_REQUEST, updateDeviceTokenAsync)]);
    yield all([takeEvery(types.CHANGEPASSWORD_REQUEST, changePasswordAsync)]);
    yield all([takeEvery(types.LOADPROFILEIMAGE_REQUEST, loadprofileimageAsync)]);

    //order Saga
    yield all([takeEvery(types.GETCUSTOMERORDERS_REQUEST, getCustomerOrdersAsync)]);
    yield all([takeEvery(types.CHANGEORDERSTATUS_REQUEST, changeOrderStatusAsync)]);
}
 