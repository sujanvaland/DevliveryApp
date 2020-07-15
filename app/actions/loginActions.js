/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestLogin(username, password) {
    return {
        type: types.LOGIN_REQUEST,
        username,
        password
        // ...obj
    };
}
export function requestLogout() {
    return {
        type: types.LOGOUT_REQUEST,
    };
}

export function loginFailed(response) {
    return {
        type: types.LOGIN_FAILED,
        response
    };
}

export function onLoginResponse(response) {
    return {
        type: types.LOGIN_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.LOGIN_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.LOGIN_DISABLE_LOADER
    };
}
