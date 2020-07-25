// export action creators
import * as loginActions from './loginActions';
import * as dashboardActions from './dashboardActions';
import * as navigationActions from './navigationActions';
import * as accountActions from './accountActions';
import * as orderActions from './orderActions';
export const ActionCreators = Object.assign(
    {},
    loginActions,
    dashboardActions,
    navigationActions,
    accountActions,
    orderActions
);
