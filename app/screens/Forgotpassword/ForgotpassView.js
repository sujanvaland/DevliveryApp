import React, { Component } from 'react';
import { get } from 'lodash';
import { View, Text, TouchableOpacity, Image, ScrollView,Keyboard } from 'react-native';
import ForgotPasswordstyles from './ForgotPasswordstyles';
import globalStyles from '../../assets/css/globalStyles';
import Resource_EN from '../../config/Resource_EN';
import PropTypes from 'prop-types';
import { TextBoxElement, LinkButton, ButtonElement,OverlayActivityIndicatorElement } from "../../components";
const { heading } = Resource_EN;
const { content } = Resource_EN;
const { button } = Resource_EN;
class ForgotpassView extends Component {
  state = {
    username: "",
    disablebtn:true ,
    enableScroll:false,
  }; 
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
  forgotpassword = () => {
      this.props.onForgotPassword(this.state.username);
  }; 

  navigateToLogin = () => {
    this.props.login();
  }
  
  validateUsername = () =>{
    if(this.state.username == "")
    {
      this.setState({disablebtn:true});
    }
    else {
      this.setState({disablebtn:false});
    }
  }

  updateState = (fieldName, value) => {
    this.setState({
      [fieldName]: value
    });
  };
 
  render() {
    const {username,disablebtn} = this.state;
    const { loginError,loading} = this.props;
    return (
      // <KeyboardAvoidingView style={globalStyles.container} behavior="padding" enabled>
      // {
      //     get(loading, 'isLoading') && <OverlayActivityIndicatorElement />
      // } 
     
      //   <View style={globalStyles.loginContainer}>
      //       <Text style={ForgotPasswordstyles.forgotPassHeadingText}>{heading.FORGOTPASS_HEAD_LINE}</Text>
      //       <Text style={ForgotPasswordstyles.grayTxt}>{content.FORGOTPASS_TEXT}</Text>
      //       <TextBoxElement
      //         placeholder={'Enter Username'}
      //         value={username}
      //         autoCapitalize={'none'}
      //         onBlur={value => this.validateUsername()}
      //         onChangeText={value => this.updateState("username", value)}
      //         style={ForgotPasswordstyles.textBox}
      //       />
      //       {/* <Text style={styles.errorMessage}>{loginError}</Text> */}
      //       <View>
      //         <ButtonElement
      //           title={'Submit'}
      //           onPress={this.forgotpassword}
      //           disabled={disablebtn}
      //         />
      //       </View>
      //       <View style={ForgotPasswordstyles.forgotPassBottom}>
      //         <LinkButton title={'Login'}  onPress={this.navigateToLogin}/>
      //       </View>
      //   </View>
      
      //  </KeyboardAvoidingView >
      <View style={globalStyles.innerContainer}>
          <Image style={ForgotPasswordstyles.loginBg} source={require('../../assets/img/login_bg.jpg')} resizeMode="cover" /> 
          <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={this.state.enableScroll}>
            <View style={ForgotPasswordstyles.verificationInner}>
              <View style={ForgotPasswordstyles.ImgContainer}>
                <Image style={ForgotPasswordstyles.verification} source={require('../../assets/img/paaword_lock.png')} resizeMode="cover" /> 
              </View>
              <Text style={ForgotPasswordstyles.titletext}>Please enter your registered email ID.</Text>
              <Text style={ForgotPasswordstyles.Detailtext}>We will send a verification code to{"\n"}
              your registered email ID. </Text>
                <View style={ForgotPasswordstyles.textBoxContent}>
                  <TextBoxElement
                   placeholder={'Enter Username'}
                   value={username}
                   autoCapitalize={'none'}
                   onBlur={value => this.validateUsername()}
                   onChangeText={value => this.updateState("username", value)}
                  />
                  <View style={ForgotPasswordstyles.textBoxInner}>
                    <Image style={ForgotPasswordstyles.lineImg} source={require('../../assets/img/line.png')} resizeMode="contain" /> 
                    <Image style={ForgotPasswordstyles.passwordImg} source={require('../../assets/img/user.png')} resizeMode="contain" /> 
                  </View>
                </View>
              <TouchableOpacity disabled={disablebtn} style={ForgotPasswordstyles.btnGreen} 
                onPress={this.forgotpassword}>
                <Text style={[ForgotPasswordstyles.btnText , 
                  (disablebtn) ? ForgotPasswordstyles.btnDisable : ForgotPasswordstyles.btnActive]}>Next</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
    );
  }
}

ForgotpassView.propTypes = {
    onLogin: PropTypes.func
};

export default ForgotpassView;
