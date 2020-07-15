/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    isLoggedIn: false,
    ErrorMessage:'',
    id: -1,
    username: '',
    password: ''
};

export const loginReducer = createReducer(initialState, {
    [types.LOGIN_REQUEST](state, action) {
        return {
            ...state,
            username: action.username,
            password: action.password
        };
    },
    [types.LOGIN_LOADING_ENDED](state) {
        return { ...state };
    },
    [types.LOGIN_RESPONSE](state, action) {
        return {
            ...state,
            id: action.response.results[0].id,
            isLoggedIn:true,
            login_token: action.response.accessToken,
            username:action.response.results[0].username,
            firstname:action.response.results[0].firstname,
            lastname:action.response.results[0].lastname,
            phone:action.response.results[0].phone,
            email:action.response.results[0].email,
            userguid:action.response.results[0].userguid,
            customerimage:action.response.results[0].customerimage
        };
    },
    [types.LOGIN_FAILED](state,action) {
        return {
            ...state,
            ErrorMessage : "Incorrect username or password. Please try again.",
            id:null,
            login_token:null,
            isLoggedIn: false
        };
    }
});
