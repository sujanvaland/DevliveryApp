

/* 
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import * as forgotPasswordReducer from './forgotPasswordReducer';
import * as accountReducer from './accountReducer';
import * as dashboardReducer from './dashboardReducer';
import * as orderReducer from './orderReducer';

export default Object.assign(loginReducer, 
    loadingReducer,
    forgotPasswordReducer, 
    accountReducer,
    dashboardReducer, 
    orderReducer);
