// General api to access data
import ApiConstants from './ApiConstants';
import * as navigationActions from 'app/actions/navigationActions';
import AsyncStorage from '@react-native-community/async-storage';


// import RNFetchBlob from 'react-native-fetch-blob'
export default function api(path, params, method, token) {
    return CallApi(params,path,method).then((data) => {
      //console.log(data);
        try {
          let response = JSON.parse(data);
          return response;
      }
      catch (e) {
        navigationActions.navigateToLogin();
        return {};
      }
    });
}

async function CallApi(params,path,method){
  let env =  await retrieveData("environment");
  let login_token =  await retrieveData("login_token");
  let customerguid =  await retrieveData("customerguid");
  if(env == null || env == "" || env == undefined){
    env = ApiConstants.BASE_URL;
  }
  return new Promise(function(resolve, reject) {
    var data = "";
    if(path == ApiConstants.LOGIN)
    {
      for (var key in params) {
        if(data == ""){
          data = key+"="+ params[key];
        }
        else{
          data = data + "&"+key+"="+ params[key];
        }
      }
    }
    else
    {
      data = JSON.stringify(params);
    }
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
   
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        return resolve(xhr.responseText)
      }
    });
   
    // xhr.open("POST", ApiConstants.BASE_URL + "/" + path);
    xhr.open(method, env + "/" + path)
    xhr.setRequestHeader("Accept", "application/json");
    if(path == ApiConstants.LOGIN)
    {
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    else{
      //console.log(customerguid);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("customerguid", customerguid);
      xhr.setRequestHeader("Authorization", "bearer "+login_token);
    }
    xhr.send(data);
  });
}

retrieveData = async (key) => {
  try {
    //environment
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value
    }
  } catch (error) {
    // Error retrieving data
  }
};