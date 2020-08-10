import React, { Component } from 'react';
import DashboardView from './DashboardView';
import { connect } from 'react-redux';
import { View,BackHandler } from 'react-native';
import * as dashboardActions from 'app/actions/dashboardActions';
import * as navigationActions from 'app/actions/navigationActions';
import { HeaderComponent } from 'app/components';
import AsyncStorage from '@react-native-community/async-storage';
//import RNFirebase from 'react-native-firebase';
import messaging from '@react-native-firebase/messaging';
//import DeviceInfo from 'react-native-device-info';
// const configurationOptions = {
//   debug: true,
//   promptOnMissingPlayServices: true
// }

//const firebase = RNFirebase.initializeApp(configurationOptions)

class DashboardContainer extends Component {
    constructor(props) {
      super(props); 
    } 

    componentDidMount() {
      let currentRoute = this.props.navigation.state.routeName;
        let navigation = this.props.navigation;
        BackHandler.addEventListener ('hardwareBackPress', function(){
          if (currentRoute == "Login") {
            BackHandler.exitApp();
            return true;
          }
          else{
            navigation.goBack();
            return true;
          }
        });

       
        messaging().getToken().then((token) => {
          this._onChangeToken(token)
        });

        messaging().onTokenRefresh((token) => {
            this._onChangeToken(token)
        });
    }

    _onChangeToken = async (token) => {
      await AsyncStorage.setItem("DEVICE_TOKEN", token);
    }

    // _onChangeToken = (token, language) => {
    //   var data = {
    //     'device_token': token,
    //     'device_type': Platform.OS,
    //     'device_language': language
    //   };
  
    //   this._loadDeviceInfo(data).done();
    // }
  
    // _loadDeviceInfo = async (deviceData) => {
    //   // load the data in 'local storage'.
    //   // this value will be used by login and register components.
    //   var value = JSON.stringify(deviceData);
    //   try {
    //     await AsyncStorage.setItem("DEVICE_STORAGE_KEY", value);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };  

    render() {
        return(
                <DashboardView {...this.props}/>
        );
    }
}

function mapStateToProps(state) {
  return {
    loading: state.loadingReducer,
    login_token:state.loginReducer.login_token,
  };
}
function mapDispatchToProps(dispatch) {
    return {
        
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardContainer);
