import React, { Component } from 'react';
import { get } from 'lodash';
import { View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import AccountStyles from './AccountStyles';
import globalStyles from '../../assets/css/globalStyles';
import {FooterComponents,OverlayActivityIndicatorElement} from "../../components";
import Resource_EN from '../../config/Resource_EN';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native-gesture-handler';
import ApiConstants from '../../api/ApiConstants';
import Rate, { AndroidMarket } from 'react-native-rate'
class AccountView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rated: false
    }
  }
  navigateToLogin = () => {
      this.props.login();
  }//redirect to Login page 

  navigateToProfile = () => {
    this.props.profile();
  }//redirect to Profile page 

  navigateToDemos = () => {
    this.props.demos();
  }//redirect to Demos page 

  navigateToHelp = () => {
    this.props.Help();
  }//redirect to Help page 

  navigateToTerms = () => {
    this.props.Terms();
  }//redirect to Terms page 

  navigateToReviews = () => {
    this.props.review();
  }//redirect to Reviews page 

 //====== alert popup on logout press=========//
  buttonClicked = () => {
    Alert.alert(
      "Log Out",
      "Are you sure you want to log out of your account?",
      [
        { text: "Cancel", style:'cancel'},
        { text: "Log Out", onPress: () => { 
                              this.props.requestLogout();
                            } ,style:'cancel'}
      ],
      { cancelable: false }
    );
  };
//===============================//

  render() {
    const { loading } = this.props;
    const { accountdetail,usertype } = this.props;
    const { button ,content} = Resource_EN;
    let accdetail = accountdetail;
    if(!accdetail){
      accdetail ={};
    }
    return (
      <View style={globalStyles.innerContainer}>
      {
          get(loading, 'isLoading') && <OverlayActivityIndicatorElement />
      }
      <View style={AccountStyles.container}>
      <ScrollView>
          <View style={AccountStyles.acoountTopBox}>
            <View style={AccountStyles.acoountBox}>
              <View style={AccountStyles.imgbox}>
                <View style={AccountStyles.userImgBox}>
                  {
                    (accdetail.avatar) ?
                    <Image style={AccountStyles.userImg} source={{uri: accdetail.avatar}} resizeMode='cover'/> :
                    <Image style={AccountStyles.userImg} source={require('../../assets/images/profile.jpg')} resizeMode='cover'/>
                  }
                </View>
              </View>
              <View style={AccountStyles.nameBox}>
                <Text style={AccountStyles.nameUser}>{accdetail.first_name} {accdetail.last_name}</Text>
                    <TouchableOpacity style={AccountStyles.viewProfileBox} onPress={this.navigateToProfile}>
                      <Text style={AccountStyles.viewProfile}>{button.View_Profile}</Text>
                    </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={[AccountStyles.acoountMainBox , AccountStyles.borders]}>
            <TouchableOpacity style={AccountStyles.ReviewBox} onPress={this.navigateToReviews}>
              <Image style={AccountStyles.startIcon} source={require('../../assets/images/fas_fa_star-dark.png')} resizeMode='cover' />
                <Text style={AccountStyles.reviews}>{content.Reviews}</Text>
            </TouchableOpacity>
          </View>
          <View style={[AccountStyles.acoountMainBox , AccountStyles.borders]}>
            <TouchableOpacity style={[AccountStyles.ReviewBox,AccountStyles.ReviewBoxSpacing]} onPress={this.navigateToHelp}>
               <Image style={AccountStyles.startIcon} source={require('../../assets/images/fas_fa_wheel.png')} resizeMode='cover' />
               <Text style={AccountStyles.reviews}>{content.Help_Center}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[AccountStyles.ReviewBox,AccountStyles.ReviewBoxSpacing]} onPress={this.navigateToTerms}>
               <Image style={AccountStyles.startIcon} source={require('../../assets/images/fas_fa_copy.png')} resizeMode='cover' />
               <Text style={AccountStyles.reviews}>{content.Terms_Policies}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={AccountStyles.ReviewBox} onPress={()=>{
                    const options = {
                      AppleAppID:ApiConstants.AppleAppID,
                      GooglePackageName:ApiConstants.GooglePackageName,
                      preferredAndroidMarket: AndroidMarket.Google,
                      preferInApp:false,
                      openAppStoreIfInAppFails:true,
                      fallbackPlatformURL:ApiConstants.RatingFallbackUrl,
                    }
                    Rate.rate(options, success=>{
                      if (success) {
                        // this technically only tells us if the user successfully went to the Review Page. Whether they actually did anything, we do not know.
                        this.setState({rated:true})
                      }
                    })
                  }}>
               <Image style={AccountStyles.startIcon} source={require('../../assets/images/fas_fa_star-dark.png')} resizeMode='cover' />
               <Text style={AccountStyles.reviews}>{content.RateThisApp}</Text>
            </TouchableOpacity>
           
          </View>
          <View style={AccountStyles.acoountMainLastBox}>
            <TouchableOpacity style={AccountStyles.ReviewBox} onPress={this.buttonClicked}>
              <Image style={AccountStyles.startIcon} source={require('../../assets/images/fas_fa_arrow.png')} resizeMode='cover' />
              <Text style={AccountStyles.reviews} onPress={this.buttonClicked}>{content.Log_Out}</Text>
            </TouchableOpacity>
          </View>
          <View style={AccountStyles.acoountMainLastBox}>
              <Text style={AccountStyles.reviews} onPress={this.buttonClicked}>{"Version " + ApiConstants.VERSION + " " + ApiConstants.BUILDNO}</Text>
          </View>
      </ScrollView>
      </View>
      <FooterComponents ActiveTab="Account"/>
      </View>
    );
  }
}

AccountView.propTypes = {
  onLogin: PropTypes.func
};

export default AccountView;
