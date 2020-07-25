/* order Reducer
 * handles filters states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
};

export const orderReducer = createReducer(initialState, {

    [types.GETCUSTOMERORDERS_RESPONSE](state,action) {
        return {
            ...state,
            myorders:action.response
        };
    },

    [types.GETCUSTOMERORDERSFAILED_RESPONSE](state) {
        return {
            ...state,
            myorders:null
        };
    },

    [types.CHANGEORDERSTATUS_RESPONSE](state, action) {
        return {
            ...state,
            changeorderstatus: action.response,
        };
    },
    [types.CHANGEORDERSTATUSFILED_RESPONSE](state) {
        return { 
            ...state,
            changeorderstatus:null
        };
    },
    
});