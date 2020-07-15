import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage'; // default: localStorage if web, AsyncStorage if react-native
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducers from 'app/reducers'; // where reducers is a object of reducers
import sagas from 'app/sagas';

const config = {
    key: 'root',
    storage,
    blacklist: ['nav', 'loadingReducer'],
    debug: true //to get useful logging
};

const resetEnhancer = rootReducer => (state, action) => {
    if (action.type !== 'LOGOUT_REQUEST') return rootReducer(state, action);
    const newState = rootReducer(undefined, {});
    //newState.router = state.router;
    return newState;
};

const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

if (__DEV__) {
    middleware.push(createLogger());
}

const reducers = persistCombineReducers(config, rootReducers);
const enhancers = [applyMiddleware(...middleware)];
const initialState = {};
const persistConfig = { enhancers };

const store = createStore(
    resetEnhancer(reducers),
    initialState,
    compose(...enhancers)
  );
// const store = createStore(reducers, undefined, compose(...enhancers));
const persistor = persistStore(store, persistConfig, () => {

});
const configureStore = () => {
    return { persistor, store };
};

sagaMiddleware.run(sagas);

export default configureStore;
