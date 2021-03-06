import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity , Keyboard, KeyboardAvoidingView} from 'react-native';
import ChangePasswordStyles from './ChangePasswordStyles';
import globalStyles from '../../assets/css/globalStyles';
import PropTypes from 'prop-types';
import { TextBoxElement } from "../../components";
import Resource_EN from '../../config/Resource_EN';
import { ScrollView } from 'react-native-gesture-handler';
import Toast from 'react-native-simple-toast';

class ChangePasswordView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enableScroll:false,
      isValidoldpassword:true,
      errorMessageoldpassword:false,
      isValidnewpassword:true,
      errorMessagenewpassword:false,
      isValidconfirmpassword:true,
      errorMessageconfirmpassword:false,
      eyeOpen:false,
      disable:true,
      visible:false,
      postChangePassword: {
        oldpassword: '',
        newpassword: '',
        confirmpassword: ''
      }
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

  onValueChange = (fieldName, value) => {
    this.setState(prevState => ({
      postChangePassword: {                   // object that we want to update
          ...prevState.postChangePassword, // keep all other key-value pairs
          [fieldName]: value 
        }
      }), function () {
    });
  }

  validateInputs = (fieldName) =>{

    if(fieldName == "oldpassword"){
      if(this.state.postChangePassword.oldpassword == "" ){
        this.setState({isvalidoldpassword:false});
      }
      else{
        if(this.state.postChangePassword.oldpassword.length >= 8 && this.state.postChangePassword.oldpassword.length <=20){
          
          if(this.state.postChangePassword.oldpassword === this.state.postChangePassword.newpassword)
          {
            Toast.show("Old Password and New Password are same. Please change it.", Toast.SHORT);
            this.setState({isvalidoldpassword:false});
          }
          else
          {
            this.setState({isvalidoldpassword:true});
          }
          
        }
        else{
          Toast.show("Current Password should have min 8 chars and max 20", Toast.SHORT);
          this.setState({isvalidoldpassword:false});
        }
      }
    }

    if(fieldName == "newpassword"){
      if(this.state.postChangePassword.newpassword == "" ){
        this.setState({isvalidnewpassword:false});
      }
      else{
        if(this.state.postChangePassword.newpassword.length >= 8 && this.state.postChangePassword.newpassword.length <=20){
          if(this.state.postChangePassword.oldpassword === this.state.postChangePassword.newpassword)
          {
            Toast.show("Old Password and New Password are same. Please change it.", Toast.SHORT);
            this.setState({isvalidnewpassword:false});
          }
          else
          {
            this.setState({isvalidnewpassword:true});
          }
        }
        else{
          Toast.show("New Password should have min 8 chars and max 20", Toast.SHORT);
          this.setState({isvalidnewpassword:false});
        }
      }
    }

    if(fieldName == "confirmpassword"){
      if(this.state.postChangePassword.confirmpassword == "" ){
        this.setState({isvalidconfirmpassword:false});
      }
      else{
        if(this.state.postChangePassword.confirmpassword.length >= 8 && this.state.postChangePassword.confirmpassword.length <=20){
          
          if(this.state.postChangePassword.newpassword === this.state.postChangePassword.confirmpassword)
          {
            this.setState({isvalidconfirmpassword:true});
          }
          else
          {
            Toast.show("New Password and Confirm Password are diffrent.", Toast.SHORT);
            this.setState({isvalidconfirmpassword:false});
          }
        }
        else{
          Toast.show("Confirm Password should have min 8 chars and max 20", Toast.SHORT);
          this.setState({isvalidconfirmpassword:false});
        }
      }
    }

  };

  changePassword = () => {
    if(this.validatePassword()){
      this.props.onChangePassword(this.state.postChangePassword);
    }
  }

  validatePassword=()=>{
    //====== title ======//
   let isvalidoldpassword;
   let isvalidnewpassword;
   let isvalidconfirmpassword;

   let allInputsValidated;
   
    if(this.state.postChangePassword.oldpassword == "" ){
      isvalidoldpassword = false;
    }
    else{
      if(this.state.postChangePassword.oldpassword.length >= 8 && this.state.postChangePassword.oldpassword.length <=20){
        if(this.state.postChangePassword.oldpassword === this.state.postChangePassword.newpassword)
          {
            Toast.show("Old Password and New Password are same. Please change it.", Toast.SHORT);
            isvalidoldpassword = false;
          }
          else
          {
            isvalidoldpassword = true;
          }
      }
      else{
        Toast.show("Current Password should have min 8 chars and max 20", Toast.SHORT);
        isvalidoldpassword = false;
      }
    }

  
    if(this.state.postChangePassword.newpassword == "" ){
      isvalidnewpassword = false;
    }
    else{
      if(this.state.postChangePassword.newpassword.length >= 8 && this.state.postChangePassword.newpassword.length <=20){
        if(this.state.postChangePassword.oldpassword === this.state.postChangePassword.newpassword)
          {
            Toast.show("Old Password and New Password are same. Please change it.", Toast.SHORT);
            isvalidnewpassword = false;
          }
          else
          {
            isvalidnewpassword = true;
          }
      }
      else{
        Toast.show("New Password should have min 8 chars and max 20", Toast.SHORT);
        isvalidnewpassword = false;
      }
    }

  
    if(this.state.postChangePassword.confirmpassword == "" ){
      isvalidconfirmpassword = false;
    }
    else{
      if(this.state.postChangePassword.confirmpassword.length >= 8 && this.state.postChangePassword.confirmpassword.length <=20){
        
        if(this.state.postChangePassword.newpassword === this.state.postChangePassword.confirmpassword)
        {
          isvalidconfirmpassword = true;
        }
        else
        {
          Toast.show("New Password and Confirm Password are diffrent.", Toast.SHORT);
          isvalidconfirmpassword = false;
        }
      }
      else{
        Toast.show("Confirm Password should have min 8 chars and max 20", Toast.SHORT);
        isvalidconfirmpassword = false;
      }
    }

  if(isvalidoldpassword && isvalidnewpassword && isvalidconfirmpassword) 
   {
      allInputsValidated = true;
   }
  else
   {
      Toast.show("Please check all fields", Toast.SHORT);
   }
   
   this.setState({ 
    isvalidoldpassword: isvalidoldpassword,
    errorMessageoldpassword:!isvalidoldpassword,
    isvalidnewpassword: isvalidnewpassword,
    errorMessagenewpassword:!isvalidnewpassword,
    isvalidconfirmpassword: isvalidconfirmpassword,
    errorMessageconfirmpassword:!isvalidconfirmpassword
    });

   return allInputsValidated;
 }
 togglePassword=()=>{
  this.setState({ visible: !this.state.visible});
}
  render() {
    const { button } = Resource_EN
    return (

      <View style={ChangePasswordStyles.loginView}>
        <Image style={ChangePasswordStyles.loginBg} source={require('../../assets/img/login_bg.jpg')} resizeMode="cover" />
        <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={this.state.enableScroll}>
          <KeyboardAvoidingView style={ChangePasswordStyles.container} enabled>
            <View style={globalStyles.loginContainer}>
              <View style={ChangePasswordStyles.textBoxContent}>
                <TextBoxElement placeholder="Current Password" 
                  style={[this.state.isValidoldpassword ? ChangePasswordStyles.BorderGrey : ChangePasswordStyles.BorderRed, ChangePasswordStyles.textInput]}
                  value={this.state.postChangePassword.oldpassword}
                  onChangeText={value => this.onValueChange("oldpassword", value)}
                  placeholderTextColor='#4A4A4A' 
                  maxLength={20}
                  isvalidInput={this.state.isValidoldpassword}
                  onEndEditing={() => this.validateInputs("oldpassword")}
                  secureTextEntry={true}
                  autoCapitalize={'none'} />
                <View style={ChangePasswordStyles.textBoxInner}>
                  <Image style={ChangePasswordStyles.lineImg} source={require('../../assets/img/line.png')} resizeMode="cover" />
                  <TouchableOpacity onPress={this.togglePassword}>
                    <Image style={ChangePasswordStyles.passwordImg} source={(this.state.visible) ? require('../../assets/img/user.png') : require('../../assets/img/password.png')} resizeMode="contain" /> 
                  </TouchableOpacity>
                </View>
              </View>
              <View style={ChangePasswordStyles.textBoxContent}>
                <TextBoxElement placeholder="New Password" 
                  style={[this.state.isValidnewpassword ? ChangePasswordStyles.BorderGrey : ChangePasswordStyles.BorderRed, ChangePasswordStyles.textInput]}
                  value={this.state.postChangePassword.newpassword}
                  onChangeText={value => this.onValueChange("newpassword", value)}
                  placeholderTextColor='#4A4A4A' 
                  maxLength={20}
                  isvalidInput={this.state.isValidnewpassword}
                  onEndEditing={() => this.validateInputs("newpassword")}
                  secureTextEntry={true}
                  autoCapitalize={'none'} />
                <View style={ChangePasswordStyles.textBoxInner}>
                  <Image style={ChangePasswordStyles.lineImg} source={require('../../assets/img/line.png')} resizeMode="cover" />
                  <TouchableOpacity onPress={this.togglePassword}>
                    <Image style={ChangePasswordStyles.passwordImg} source={(this.state.visible) ? require('../../assets/img/user.png') : require('../../assets/img/password.png')} resizeMode="contain" /> 
                  </TouchableOpacity>
                </View>
              </View>
              <View style={ChangePasswordStyles.textBoxContent}>
                <TextBoxElement placeholder="Confirm Password" 
                  style={[this.state.isValidconfirmpassword ? ChangePasswordStyles.BorderGrey : ChangePasswordStyles.BorderRed, ChangePasswordStyles.textInput]}
                  value={this.state.postChangePassword.confirmpassword}
                  onChangeText={value => this.onValueChange("confirmpassword", value)}
                  placeholderTextColor='#4A4A4A' 
                  maxLength={20}
                  isvalidInput={this.state.isValidconfirmpassword}
                  onEndEditing={() => this.validateInputs("confirmpassword")}
                  secureTextEntry={(this.state.visible) ? false : true}
                  autoCapitalize={'none'} />
                <View style={ChangePasswordStyles.textBoxInner}>
                  <Image style={ChangePasswordStyles.lineImg} source={require('../../assets/img/line.png')} resizeMode="contain" />
                  {/* <Image style={ChangePasswordStyles.passwordImg} source={require('../../assets/img/password.png')} resizeMode="contain" /> */}
                  <TouchableOpacity onPress={this.togglePassword}>
                    <Image style={ChangePasswordStyles.passwordImg} source={(this.state.visible) ? require('../../assets/img/user.png') : require('../../assets/img/password.png')} resizeMode="contain" /> 
                  </TouchableOpacity>
                </View>
              </View>
              <View style={ChangePasswordStyles.flexBox}>
                <TouchableOpacity style={[this.state.disable ? ChangePasswordStyles.buttonDisable : 
                  ChangePasswordStyles.buttonActive , ChangePasswordStyles.btnGreen]}
                  onPress={()=>this.changePassword()}>
                  <Text style={ChangePasswordStyles.btnText}>Update Password</Text>
                </TouchableOpacity>
              </View>
             
            </View>

          </KeyboardAvoidingView>
        </ScrollView>
      </View>


    );
  }
}

ChangePasswordView.propTypes = {
  onLogin: PropTypes.func
};

export default ChangePasswordView;
