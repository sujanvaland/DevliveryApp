import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity ,Keyboard,KeyboardAvoidingView} from 'react-native';
import ResetPasswordStyles from './ResetPasswordStyles';
import globalStyles from '../../assets/css/globalStyles';
import PropTypes from 'prop-types';
import { TextBoxElement, LinkButton, ButtonElement, OverlayActivityIndicatorElement } from "../../components";
import Resource_EN from '../../config/Resource_EN';
import { ScrollView } from 'react-native-gesture-handler';
import { get } from 'lodash';

class ResetPasswordView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enableScroll:false,
    }
  }

  componentDidMount(){
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
  }
  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = ( )=> {
    this.setState({ enableScroll: true});
  }

  _keyboardDidHide = ( )=>{
    this.setState({ enableScroll: false});
  }
  render() {
    const { button } = Resource_EN
    return (

      <View style={ResetPasswordStyles.loginView}>
        <Image style={ResetPasswordStyles.loginBg} source={require('../../assets/img/login_bg.jpg')} resizeMode="cover" />
        <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={this.state.enableScroll}>
          <KeyboardAvoidingView style={ResetPasswordStyles.container} enabled>
          

            <View style={globalStyles.loginContainer}>

              <View style={ResetPasswordStyles.textBoxContent}>
                <TextBoxElement
                  placeholder={"Current Password"}
                  autoCapitalize={'none'}
                />
                <View style={ResetPasswordStyles.textBoxInner}>
                  <Image style={ResetPasswordStyles.lineImg} source={require('../../assets/img/line.png')} resizeMode="cover" />
                  <Image style={ResetPasswordStyles.passwordImg} source={require('../../assets/img/password.png')} resizeMode="cover" />
                </View>
              </View>
              <View style={ResetPasswordStyles.textBoxContent}>
                <TextBoxElement
                  placeholder={"New Password"}
                  autoCapitalize={'none'}
                />
                <View style={ResetPasswordStyles.textBoxInner}>
                  <Image style={ResetPasswordStyles.lineImg} source={require('../../assets/img/line.png')} resizeMode="cover" />
                  <Image style={ResetPasswordStyles.passwordImg} source={require('../../assets/img/password.png')} resizeMode="cover" />
                </View>
              </View>
              <View style={ResetPasswordStyles.textBoxContent}>
                <TextBoxElement
                  placeholder={"Confirm Password"}
                  autoCapitalize={'none'}
                />
                <View style={ResetPasswordStyles.textBoxInner}>
                  <Image style={ResetPasswordStyles.lineImg} source={require('../../assets/img/line.png')} resizeMode="cover" />
                  <Image style={ResetPasswordStyles.passwordImg} source={require('../../assets/img/password.png')} resizeMode="cover" />
                </View>
              </View>
              <View style={ResetPasswordStyles.flexBox}>
                <TouchableOpacity style={ResetPasswordStyles.btnGreen}>
                  <Text style={ResetPasswordStyles.btnText}>Update Password</Text>
                </TouchableOpacity>
              </View>
             
            </View>

          </KeyboardAvoidingView>
        </ScrollView>
      </View>


    );
  }
}

ResetPasswordView.propTypes = {
  onLogin: PropTypes.func
};

export default ResetPasswordView;
