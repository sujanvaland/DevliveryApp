/* account Reducer
 * handles filters states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
};

export const accountReducer = createReducer(initialState, {

    // Change Password
    [types.CHANGEPASSWORD_RESPONSE](state,action) {
        return {
            ...state,
            changepasswordresponse:action.response
        };
    },
    [types.CHANGEPASSWORDFAILED_RESPONSE](state,action) {
        return {
            ...state,
            changepasswordresponse:[]
        };
    },

    [types.PROFILEIMAGELOADED_RESPONSE](state,action) {
        return {
            ...state,
            profileimage:action.response
        };
    },

    [types.FAILEDLOADINGPROFILEIMAGE_RESPONSE](state) {
        return {
            ...state
        };
    },
    
});