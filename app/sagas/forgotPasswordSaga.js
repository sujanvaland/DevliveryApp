/* Redux saga class
 * forgotpassword the user into the app
 * requires username and password.
 * email
 */
import { put, call, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { Alert } from 'react-native';
import forgotPassword from 'app/api/methods/forgotPassword';
import * as loginActions from 'app/actions/loginActions';
import * as forgotPasswordActions from 'app/actions/forgotPasswordActions';
import * as navigationActions from 'app/actions/navigationActions';

// Our worker Saga that logins the user
export default function* forgotPasswordAsync(action) {
    yield put(loginActions.enableLoader());
    //how to call api
    const response = yield call(forgotPassword, action.username);
    //mock response
    //console.log(response);
    if (response.Message === "success") {
        yield put(forgotPasswordActions.onForgotPasswordResponse(response));
        yield put(loginActions.disableLoader({})); 
        Alert.alert(
            'Email Sent', 
            'You have been sent an email with a temporary password.'
          );   
          yield call(navigationActions.navigateToLogin);
    } else {
        yield put(forgotPasswordActions.forgotPasswordFailed(response));
        yield put(loginActions.disableLoader({}));
        var alermessage = "Something went wrong. Please try again.!!!";
        if(response.message === "missing_required_fields:email"){
           alermessage = "Please enter username";
        }
        if(response.message === "reset password failed - no member with email address "+action.email){
          alermessage = "The email address "+action.email+" is not connected to any member.";
        }
        Alert.alert(
            'Reset Password Failed', 
            alermessage,
            [ 
              {text: 'OK'}, 
            ]
          );
    }
}
