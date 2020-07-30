import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity,StatusBar} from 'react-native';
import PasswordChangeStyles from './PasswordChangeStyles';
import globalStyles from '../../assets/css/globalStyles';
import SplashScreen from 'react-native-splash-screen';
import PropTypes from 'prop-types';
import Resource_EN from '../../config/Resource_EN';
import { TextInput ,ScrollView} from 'react-native-gesture-handler';
import * as navigationActions from 'app/actions/navigationActions';


class PasswordChangeView extends Component {
  constructor(props) {
    super(props);
  }
  
  navigateToDashboard = () => {
    navigationActions.navigateToDashboard();
  }

  render() {
    const {button} =Resource_EN
    return (
        <View style={globalStyles.innerContainer}>
          <StatusBar
            barStyle="light-content"
            // dark-content, light-content and default
            hidden={false}
            //To hide statusBar
            backgroundColor="#000"
            //Background color of statusBar
            translucent={false}
            //allowing light, but not detailed shapes
            networkActivityIndicatorVisible={true}
          />
          <Image style={PasswordChangeStyles.loginBg} source={require('../../assets/img/login_bg.jpg')} resizeMode="cover" /> 
            <View style={PasswordChangeStyles.PasswordChangeInner}>
              <View style={PasswordChangeStyles.ImgContainer}>
                <Image style={PasswordChangeStyles.PasswordChange} source={require('../../assets/img/password_success.png')} resizeMode="contain" /> 
              </View>
              <Text style={PasswordChangeStyles.titletext}>Password Changed</Text>
              <Text style={PasswordChangeStyles.Detailtext}>Your Password has been change Successfully</Text>
              <TouchableOpacity  style={PasswordChangeStyles.btnGreen} 
                onPress={this.navigateToDashboard}>
                <Text style={PasswordChangeStyles.btnText}>Dashboard</Text>
              </TouchableOpacity>
            </View>
        </View>
      
    );
  }
}

PasswordChangeView.propTypes = {
  onLogin: PropTypes.func
};

export default PasswordChangeView;
