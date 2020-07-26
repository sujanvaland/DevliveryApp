/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import loginUser from 'app/api/methods/loginUser';
import * as loginActions from 'app/actions/loginActions';
import * as accountActions from 'app/actions/accountActions';
import * as navigationActions from 'app/actions/navigationActions';

// Our worker Saga that logins the user
function* loginAsync(action) {
    yield put(loginActions.enableLoader());
    //how to call api
    const response = yield call(loginUser, action.username, action.password);
    //console.log(response);
    if (response.Message === "success") {
        yield put(loginActions.onLoginResponse(response));
        // _storeData("login_token","");
        // _storeData("loginuser","");
        // _storeData("password","");

        _storeData("login_token",response.accessToken)
        _storeData("customerguid",response.results[0].userguid);
        _storeData("customerfirstname",response.results[0].firstname);
        _storeData("customerlastname",response.results[0].lastname);
        _storeData("customerimage",response.results[0].customerimage);
        _storeData("loginuser",action.username);
        _storeData("password",action.password);
        //yield put(accountActions.loadUserProfileRequest(action.username));
        yield call(navigationActions.navigateToDashboard);
        yield put(loginActions.disableLoader({}));   
    } else {
          yield put(loginActions.loginFailed(response));
          yield put(loginActions.disableLoader({}));  
    }
}

function* logoutAsync(){
  _storeData("login_token","")
  _storeData("loginuser","");
  _storeData("password","");
  navigationActions.navigateToLogin();
}

const _storeData = async (key,value) => {
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

export { loginAsync,logoutAsync }
 