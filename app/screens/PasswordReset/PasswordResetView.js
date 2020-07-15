import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity,StatusBar} from 'react-native';
import PasswordResetStyles from './PasswordResetStyles';
import globalStyles from '../../assets/css/globalStyles';
import SplashScreen from 'react-native-splash-screen';
import PropTypes from 'prop-types';
import Resource_EN from '../../config/Resource_EN';
import { TextInput ,ScrollView} from 'react-native-gesture-handler';


class PasswordResetView extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    SplashScreen.hide();
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
          <Image style={PasswordResetStyles.loginBg} source={require('../../assets/img/login_bg.jpg')} resizeMode="cover" /> 
            <View style={PasswordResetStyles.PasswordResetInner}>
              <View style={PasswordResetStyles.ImgContainer}>
                <Image style={PasswordResetStyles.PasswordReset} source={require('../../assets/img/password_success.png')} resizeMode="contain" /> 
              </View>
              <Text style={PasswordResetStyles.titletext}>Password Reset</Text>
              <Text style={PasswordResetStyles.Detailtext}>Your Password has been reset Successfully</Text>
              <TouchableOpacity  style={PasswordResetStyles.btnGreen} 
                onPress={()=>this.submitotp()}>
                <Text style={PasswordResetStyles.btnText}>Continue Shopping</Text>
              </TouchableOpacity>
            </View>
        </View>
      
    );
  }
}

PasswordResetView.propTypes = {
  onLogin: PropTypes.func
};

export default PasswordResetView;
