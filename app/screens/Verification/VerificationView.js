import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity,Keyboard} from 'react-native';
import VerificationStyles from './VerificationStyles';
import globalStyles from '../../assets/css/globalStyles';
import PropTypes from 'prop-types';
import Resource_EN from '../../config/Resource_EN';
import { TextInput ,ScrollView} from 'react-native-gesture-handler';


class VerificationView extends Component {
  constructor(props) {
    super(props);
    const { params } = this.props.navigation.state;
    const username = params ? params.username : null;
    this.state = {
      enableScroll:false,
      verificationDetails:{
        username:username,
        vone: "",
        vtwo: "",
        vthree:"",
        vfour:"",
        isvalidvone: true,
        isvalidvtwo: true,
        isvalidvthree:true,
        isvalidvfour:true
      },
      isvalidvone: false,
      isvalidvtwo: false,
      isvalidvthree:false,
      isvalidvfour:false
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

  validateInputs = (fieldName) =>{
    if(fieldName == "vone"){
      if(this.state.verificationDetails.vone == "" ){
        this.updateState("isvalidvone", false);
        this.setState({isvalidvone:false});
      }
      else{
        let reg =  /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/g;
        if(reg.test(this.state.verificationDetails.vone) === true){
          if(this.state.verificationDetails.vone.length==1){
            this.updateState("isvalidvone", true);
            this.setState({isvalidvone:true});
          }
          else{
            ToastAndroid.show("Enter only 1 digit.", ToastAndroid.SHORT);
            this.updateState("isvalidvone", false);
            this.setState({isvalidvone:false});
          }
        }
        else{
            ToastAndroid.show("Number is not valid", ToastAndroid.SHORT);
            this.updateState("isvalidvone", false);
            this.setState({isvalidvone:false});
        }
      }
    }

    if(fieldName == "vtwo"){
      if(this.state.verificationDetails.vtwo == "" ){
        this.updateState("isvalidvtwo", false);
        this.setState({isvalidvtwo:false});
      }
      else{
        let reg =  /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/g;
        if(reg.test(this.state.verificationDetails.vtwo) === true){
          if(this.state.verificationDetails.vtwo.length==1){
            this.updateState("isvalidvtwo", true);
            this.setState({isvalidvtwo:true});
          }
          else{
            ToastAndroid.show("Enter only 1 digit.", ToastAndroid.SHORT);
            this.updateState("isvalidvtwo", false);
            this.setState({isvalidvtwo:false});
          }
        }
        else{
            ToastAndroid.show("Number is not valid", ToastAndroid.SHORT);
            this.updateState("isvalidvtwo", false);
            this.setState({isvalidvtwo:false});
        }
      }
    }

    if(fieldName == "vthree"){
      if(this.state.verificationDetails.vthree == "" ){
        this.updateState("isvalidvthree", false);
        this.setState({isvalidvthree:false});
      }
      else{
        let reg =  /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/g;
        if(reg.test(this.state.verificationDetails.vthree) === true){
          if(this.state.verificationDetails.vthree.length==1){
            this.updateState("isvalidvthree", true);
            this.setState({isvalidvthree:true});
          }
          else{
            ToastAndroid.show("Enter only 1 digit.", ToastAndroid.SHORT);
            this.updateState("isvalidvthree", false);
            this.setState({isvalidvthree:false});
          }
        }
        else{
            ToastAndroid.show("Number is not valid", ToastAndroid.SHORT);
            this.updateState("isvalidvthree", false);
            this.setState({isvalidvthree:false});
        }
      }
    }

    if(fieldName == "vfour"){
      if(this.state.verificationDetails.vfour == "" ){
        this.updateState("isvalidvfour", false);
        this.setState({isvalidvfour:false});
      }
      else{
        let reg =  /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/g;
        if(reg.test(this.state.verificationDetails.vfour) === true){
          if(this.state.verificationDetails.vfour.length==1){
            this.updateState("isvalidvfour", true);
            this.setState({isvalidvfour:true});
          }
          else{
            ToastAndroid.show("Enter only 1 digit.", ToastAndroid.SHORT);
            this.updateState("isvalidvfour", false);
            this.setState({isvalidvfour:false});
          }
        }
        else{
            ToastAndroid.show("Number is not valid", ToastAndroid.SHORT);
            this.updateState("isvalidvfour", false);
            this.setState({isvalidvfour:false});
        }
      }
    }
  };

  updateState = (fieldName, value) => {
    this.setState(prevState => ({
      verificationDetails: {                   // object that we want to update
          ...prevState.verificationDetails,    // keep all other key-value pairs
          [fieldName]: value       // update the value of specific key
      }
    }));

    if (this.state.vone != '' && this.state.vtwo != '' && this.state.vthree != '' && this.state.vfour != ''){
      this.submitted=false;
    } else {
      this.submitted=true;
    }
  };

  submitotp = () => {
    const { isvalidvone,isvalidvtwo,isvalidvthree,isvalidvfour } = this.state;
    let allInputsValidated = false;
   
    if(isvalidvone && isvalidvtwo && isvalidvthree && isvalidvfour)
    {
        allInputsValidated = true;
    }
    else
    {
      this.updateState("isvalidvone",isvalidvone);
      this.updateState("isvalidvtwo",isvalidvtwo);
      this.updateState("isvalidvthree",isvalidvthree);
      this.updateState("isvalidvfour",isvalidvfour);
    }
   
    if(allInputsValidated){
      this.props.onAccountVerification(this.state.verificationDetails);
    }
};

  render() {
    const { verificationDetails} = this.state;
    const {button} =Resource_EN
    return (
        <View style={globalStyles.innerContainer}>
          <Image style={VerificationStyles.loginBg} source={require('../../assets/img/login_bg.jpg')} resizeMode="cover" /> 
          <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={this.state.enableScroll}>
            <View style={VerificationStyles.verificationInner}>
              <View style={VerificationStyles.ImgContainer}>
                <Image style={VerificationStyles.verification} source={require('../../assets/img/verification.png')} resizeMode="cover" /> 
              </View>
              <Text style={VerificationStyles.titletext}>Please enter your Verification Code</Text>
              <Text style={VerificationStyles.Detailtext}>We have sent a verification code {"\n"}
                    to your registered email ID</Text>
                    
              <View style={VerificationStyles.flexBox}>
                <TextInput 
                  style={VerificationStyles.textInput} 
                  keyboardType={"number-pad"}
                  value={verificationDetails.vone}
                  onChangeText={value => this.updateState("vone", value)}
                  isvalidInput={verificationDetails.isvalidvone}
                  onEndEditing={() => this.validateInputs("vone") }
                  maxLength={1}></TextInput>
                <TextInput 
                  style={VerificationStyles.textInput} 
                  keyboardType={"number-pad"}
                  value={verificationDetails.vtwo}
                  onChangeText={value => this.updateState("vtwo", value)}
                  isvalidInput={verificationDetails.isvalidvtwo}
                  onEndEditing={() => this.validateInputs("vtwo") }
                  maxLength={1}></TextInput>
                <TextInput 
                  style={VerificationStyles.textInput} 
                  keyboardType={"number-pad"}
                  value={verificationDetails.vthree}
                  onChangeText={value => this.updateState("vthree", value)}
                  isvalidInput={verificationDetails.isvalidvthree}
                  onEndEditing={() => this.validateInputs("vthree") }
                  maxLength={1}></TextInput>
                <TextInput 
                  style={VerificationStyles.textInput} 
                  keyboardType={"number-pad"}
                  value={verificationDetails.vfour}
                  onChangeText={value => this.updateState("vfour", value)}
                  isvalidInput={verificationDetails.isvalidvfour}
                  onEndEditing={() => this.validateInputs("vfour") }
                  maxLength={1}></TextInput>
              </View>
              <TouchableOpacity disabled={this.submitted} style={VerificationStyles.btnGreen} 
                onPress={()=>this.submitotp()}>
                <Text style={VerificationStyles.btnText}>Done</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      
    );
  }
}

VerificationView.propTypes = {
  onLogin: PropTypes.func
};

export default VerificationView;
