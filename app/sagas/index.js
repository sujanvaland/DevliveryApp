/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import forgotPasswordSaga from './forgotPasswordSaga';
import { changePasswordAsync, loadprofileimageAsync } from './accountSaga';
import { loginAsync,logoutAsync } from './loginSaga';

export default function* watch() {
    yield all([takeEvery(types.LOGIN_REQUEST, loginAsync)]);
    yield all([takeEvery(types.LOGOUT_REQUEST, logoutAsync)]);
    yield all([takeEvery(types.FORGOTPASSWORD_REQUEST, forgotPasswordSaga)]);
    //account Saga
    yield all([takeEvery(types.CHANGEPASSWORD_REQUEST, changePasswordAsync)]);
    yield all([takeEvery(types.LOADPROFILEIMAGE_REQUEST, loadprofileimageAsync)]);
}
 