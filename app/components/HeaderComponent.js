import React , { Component }from "react";
import { StyleSheet, Text, View, TouchableOpacity, 
  StatusBar ,Dimensions,Platform,Image ,Animated, Alert} from "react-native";
import { Header,  Icon } from 'native-base';
import * as navigationActions from 'app/actions/navigationActions';
import Modal from "react-native-modal";
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen';
import ApiConstants from '../api/ApiConstants';

import Menu, {
  MenuProvider,
  MenuTrigger,
  MenuOptions,
  MenuOption,
  renderers,
} from 'react-native-popup-menu';

const { width: viewportWidth , height: viewportHeight } = Dimensions.get('window');


import Styles from "../config/styles";
const { color,Typography} = Styles;

class HeaderComponent extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible:false,
      tabActive:false,
      customerguid: '',
      customerfirstname:'',
      customerlastname:'',
      customerimage:''
    };
  }

  navigateToLogin = () =>{
    this._storeData("login_token","")
    this._storeData("loginuser","");
    this._storeData("password","");
    this._storeData("customerguid","");
    this._storeData("customerfirstname","");
    this._storeData("customerlastname","");
    this._storeData("customerimage","");
    this._storeData("countcartitems","0");
    this.setState({ isModalVisible: !this.state.isModalVisible });
    navigationActions.navigateToLogin();
    
  }

  _storeData = async (key,value) => {
    try {
      await AsyncStorage.setItem(key, value);
      return value;
    } catch (error) {
      // Error saving data
      return null;
    }
  };

  async toggleModal() {
    let customerguid = await this._retrieveData("customerguid");
    let customerfirstname = await this._retrieveData("customerfirstname");
    let customerlastname = await this._retrieveData("customerlastname");
    let customerimage = await this._retrieveData("customerimage");
    this.setState({
      customerguid: customerguid,
      customerfirstname: customerfirstname,
      customerlastname: customerlastname,
      customerimage: customerimage
    });
  
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }
  navigateToAccount=()=>{
    this.setState({ tabActive: true });
  }
  navigateToTermsPolicies=()=>{
    navigationActions.navigateToTermsPolicies();
    this.setState({ isModalVisible: false });
  }
  // navigateToFAQ=()=>{
  //   navigationActions.navigateToFAQ();
  //   this.setState({ isModalVisible: false });
  // }
  navigateToMyOrders=()=>{
    navigationActions.navigateToMyOrders();
    this.setState({ isModalVisible: false });
  }
  closeModal=()=>{
    this.setState({ isModalVisible: false });
  }

  navigateToEditProfileImage=()=>{
    this.setState({ isModalVisible: !this.state.isModalVisible });
    navigationActions.navigateToEditProfileImage();
  }

  async componentDidMount() {
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      setTimeout(() => {
        SplashScreen.hide();
      }, 2000);
      
    let customerguid = await this._retrieveData("customerguid");
    let customerfirstname = await this._retrieveData("customerfirstname");
    let customerlastname = await this._retrieveData("customerlastname");
    let customerimage = await this._retrieveData("customerimage");
    this.setState({
      customerguid: customerguid,
      customerfirstname: customerfirstname,
      customerlastname: customerlastname,
      customerimage: customerimage
    });
  }

  _retrieveData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value
      }
    } catch (error) {
    }
  };

  //====== alert popup on logout press=========//
  logoutButtonClicked = () => {
    Alert.alert(
      "Log Out",
      "Are you sure you want to log out of your account?",
      [
        { text: "Cancel", style:'cancel'},
        { text: "Log Out", onPress: () => {this.userlogout();} ,style:'cancel'}
      ],
      { cancelable: false }
    );
  };

  userlogout = () => {
    this._storeData("login_token","")
    this._storeData("loginuser","");
    this._storeData("password","");
    this._storeData("customerguid","");
    this._storeData("customerfirstname","");
    this._storeData("customerlastname","");
    this._storeData("customerimage","");
    this._storeData("countcartitems","0");
    this.setState({ 
      isModalVisible: !this.state.isModalVisible,
      customerguid: '',
      customerfirstname:'',
      customerlastname:'',
      customerimage:''
     });
    navigationActions.navigateToLogin();
  }
//===============================//

  render(){
    const props = this.props;
    const { 
      count=true,
      menuPage=false,
      cart=false,
      iname='ios-close',
      irefresh='ios-refresh',
      mainpage=false, 
      subpage=false, 
      subTitle=false,
      crosssign=false, 
      showclearbtn=false,
      cartText=false,
      back=false,
      subPopup=false,
      menu=false,
      add=false,
      sidemenu=false,
      addProject=false,
      iconName='ios-information-circle-outline',
      iconMenu="md-more",
      onFilterOptionClose,
      onFilterOptionClear
    } = props; 
    const { addImg,textStyleOne, headerbgGreen,headerbgBlack,
      titleStyleOne ,titleStyle ,headerStyle, 
      textStyle, SmalltitleText, iconStyle,
      iconBackStyle,userStyle,backStyle,
      iconClearStyle ,iconUserStyle,titleHead,
      menuWrapper,MenuProviderStyle,MenuIconStyle,
      MenuOptionStyle,MenuOptionInner,imgStyle,addImgStyle} = styles;
      const onClose = () => {
        if (props.onFilterOptionClose) {
          props.onFilterOptionClose();
        } else {
          props.navigation.goBack();
        }
      }
      
      const onClear = () =>{
        if (props.onFilterOptionClear) {
          props.onFilterOptionClear();
        } 
      }

      //alert(this.state.customerguid);
      let profileImgPath = ApiConstants.SITEURL + ApiConstants.PROFILEIMGPATH + this.state.customerimage;
    return (
      <View>
        <Modal animationIn={"slideInLeft"} animationOut={"slideOutLeft"} backdropTransitionOutTiming={0}
        isVisible={this.state.isModalVisible} style={styles.modalStyle}
        onBackdropPress={() => this.closeModal()}
        onBackButtonPress={() => this.closeModal()}>
          <View style={styles.menuContent}>
          <TouchableOpacity style={styles.closeIcon} onPress={() => { this.toggleModal()}}>
             <Icon name={"ios-close"} style={styles.close}/>
          </TouchableOpacity>
          {
            this.state.customerguid !='' && this.state.customerguid !=undefined &&
            <View style={styles.headrMenu}>
              <View style={styles.userImgBox}>
                {
                  this.state.customerimage!= '' && this.state.customerimage !=undefined &&
                  <Image style={styles.userImg} source={{ uri: profileImgPath }} resizeMode="contain"/>
                }

                {
                  (this.state.customerimage== '' || this.state.customerimage== undefined) &&
                  <Image style={styles.userImg} source={require('../assets/img/user_img.png')} resizeMode="contain" />
                }
                
              </View>
              {/* <TouchableOpacity onPress={this.navigateToEditProfileImage}>
                <Text style={styles.userPost}>Edit</Text>
              </TouchableOpacity> */}
              <Text style={styles.userName}>{this.state.customerfirstname} {this.state.customerlastname}</Text>
              {/* <View style={styles.flexBox}>
                <Image style={styles.headerlistIcon} source={require('../assets/img/location.png')} resizeMode="contain" />
                <Text style={styles.userPost}>Vadodara, Gujarat</Text>
              </View> */}
            </View>
          }
                <View style={styles.listBox}>
                  {
                    this.state.customerguid !='' && this.state.customerguid !=undefined &&
                    <TouchableOpacity style={[styles.linkBox,(this.state.tabActive) ? styles.activetabBg : styles.tabBg]} onPress={this.navigateToAccount}>
                      <Image style={styles.listIcon} source={require('../assets/img/account.png')} resizeMode="contain" />
                      <Text style={styles.listLink}>My Account</Text>
                    </TouchableOpacity>
                  }

                  {
                    this.state.customerguid !='' && this.state.customerguid !=undefined &&
                    <TouchableOpacity style={styles.linkBox} onPress={this.navigateToMyOrders}>
                      <Image style={styles.listIcon} source={require('../assets/img/order.png')} resizeMode="contain" />
                      <Text style={styles.listLink}>My Order</Text>
                    </TouchableOpacity>
                  }
                  
                    <TouchableOpacity style={styles.linkBox} onPress={this.navigateToTermsPolicies}>
                      <Image style={styles.listIcon} source={require('../assets/img/terms.png')} 
                      resizeMode="contain" />
                      <Text style={styles.listLink}>Terms and Conditions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.linkBox} >
                      <Image style={styles.listIcon} source={require('../assets/img/notification.png')} resizeMode="contain" />
                      <Text style={styles.listLink}>Notification</Text>
                      <Text style={styles.notificationCount}>13</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.linkBox} >
                      <Image style={styles.listIcon} source={require('../assets/img/location_link.png')} resizeMode="contain" />
                      <Text style={styles.listLink}>Contact Us</Text>
                    </TouchableOpacity>

                  {
                    this.state.customerguid !='' && this.state.customerguid !=undefined &&
                    <TouchableOpacity style={styles.linkBox} onPress={this.logoutButtonClicked} >
                      <Image style={styles.listIcon} source={require('../assets/img/signout.png')} resizeMode="contain" />
                      <Text style={styles.listLink}>Sign Out</Text>
                    </TouchableOpacity>
                  }
                  {
                    (this.state.customerguid =='' || this.state.customerguid ==undefined) &&
                    <TouchableOpacity style={styles.linkBox} onPress={()=>this.navigateToLogin()}>
                      <Image style={styles.listIcon} source={require('../assets/img/signout.png')} resizeMode="contain" />
                      <Text style={styles.listLink}>Log In</Text>
                    </TouchableOpacity>
                  }
                </View>
                <View style={styles.flexBox}>
                <Image style={styles.lineBottom} source={require('../assets/img/line_menu.png')} resizeMode="contain" />
                </View>
                <View style={styles.flexBox}> 
                  <TouchableOpacity style={styles.linkSocialBox} >
                    <Image style={styles.listSocialIcon} source={require('../assets/img/facebook.png')} resizeMode="contain" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.linkSocialBox} >
                    <Image style={styles.listSocialIcon} source={require('../assets/img/insta.png')} resizeMode="contain" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.linkSocialBox} >
                    <Image style={styles.listSocialIcon} source={require('../assets/img/twitter.png')} resizeMode="contain" />
                  </TouchableOpacity>
                </View>
              
            </View>
        </Modal>
        <Header style={[headerbgBlack,headerStyle ]}>
        <StatusBar
          barStyle="light-content"
          // dark-content, light-content and default
          hidden={false}
          //To hide statusBar
          backgroundColor={"#000000"}
          //Background color of statusBar
          translucent={false}
          //allowing light, but not detailed shapes
          networkActivityIndicatorVisible={true}
        />
         {subpage === true &&
         <View style={titleHead}>
           <Text style={textStyle} numberOfLines={1} ellipsizeMode='tail'>{props.title}</Text> 
              {
                subTitle === true &&
                <Text style={titleStyle}>{props.subTitleText}</Text>
              }
         </View>
         }
        {subPopup === true &&
         <View style={titleHead}>
           <Text style={titleStyleOne}>{props.subTitleText}</Text> 
              {
                subTitle === true &&
                <Text style={textStyleOne}>{props.title}</Text>
              }
         </View>
         }
          
        {mainpage === true && <Text style={SmalltitleText}>{props.Smalltitle}</Text>}
        {crosssign === true &&
         <Icon name={iname} style={iconStyle}  onPress={() => { onClose() }}/>
        }
        {showclearbtn === true &&
         <Icon name={irefresh} style={iconClearStyle}  onPress={() => { onClear() }}/>
        }
        {back === true &&
          <TouchableOpacity style={backStyle} onPress={() => { onClose() }}>
            <Icon name={props.iname} style={iconBackStyle} />
            <Text style={styles.backStyleOne}>{props.title}</Text>
          </TouchableOpacity>
        }
        {sidemenu === true &&
          <TouchableOpacity style={backStyle} onPress={() => { this.toggleModal()}}>
            <Icon name={props.iname} style={styles.iconMenuStyle} />
            <Text style={styles.backStyleOne}>{props.title}</Text>
          </TouchableOpacity>
        }
        
        {
          cart === true &&
          <TouchableOpacity style={userStyle} onPress={() => { this.navigateToCart()}}>
            {
              count == true &&  props.cartCount > 0 &&
                <Text style={styles.cartCount}>{props.cartCount}</Text>
            }
            <Image style={iconUserStyle} source={require('../assets/img/cart.png')} resizeMode="contain" /> 
            {
              cartText == true &&
                <Text style={styles.cartText}>Cart</Text>
            }
          </TouchableOpacity>
        }
       {
         menuPage == true &&
         <TouchableOpacity style={styles.logoContainer}>
           <Image style={styles.logoImg} source={require('../assets/img/logo.png')} resizeMode="contain" />
         </TouchableOpacity>
       }
     
      </Header>
     </View>
    );
  }
}

//const majorVersionIOS = parseInt(Platform.Version , 13 );
const styles = StyleSheet.create({
  
  headerStyle: {
    //backgroundColor: color.COLOR_PRIMARY,
    height: Platform.OS === 'ios' ?  viewportHeight* 0.11 : viewportHeight* 0.09,
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderWidth:0,
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    overflow:'visible',
    borderBottomWidth:0,
    position:"relative"
  },
  headerbgGreen:{
    backgroundColor: color.COLOR_PRIMARY,
  },
  headerbgBlack:{
    backgroundColor: color.COLOR_BLACK,
  },
  textStyle: {
    color: color.COLOR_WHITE,
    fontSize:Typography.FONT_SIZE25,
    justifyContent:"center",   
    alignContent:"center",
    textAlign:'center',
    fontFamily:Typography.FONT_MEDIUM,
    marginTop:viewportWidth*0.03,
  },
  textStyleOne: {
    color: color.COLOR_WHITE,
    fontSize:Typography.FONT_SIZE18,
    paddingHorizontal:viewportWidth* 0.04,
    justifyContent:"center",   
    alignContent:"center",
    textAlign:'center',
    fontFamily:Typography.FONT_MEDIUM,
  },
  titleStyle:{
    fontSize:Typography.FONT_SIZE10,
    fontFamily:Typography.FONT_REGULAR,
    color: color.COLOR_WHITE,
    paddingTop:viewportWidth*0.006,
    paddingBottom:viewportWidth*0.03,
  },
  titleStyleOne:{
    fontSize:Typography.FONT_SIZE10,
    fontFamily:Typography.FONT_REGULAR,
    color: color.COLOR_WHITE,
    paddingBottom:viewportWidth*0.01,
  },
  SmalltitleText: {
    color: color.COLOR_WHITE,
    fontSize:Typography.FONT_SIZE28,
    paddingTop:Platform.OS === 'ios' ? viewportHeight* 0.033 : viewportHeight* 0.025,
    paddingBottom:Platform.OS === 'ios' ? 0 : viewportHeight* 0.01,
    paddingHorizontal:viewportWidth* 0.015,
    borderWidth:0,  
    display:"flex",
    justifyContent:"flex-start",
    flexDirection:"row",
    alignItems:"flex-start",
    alignSelf:"flex-start",
    width:"100%",
    fontFamily:Typography.FONT_MEDIUM,
  },
  SmalltitleTextHide:{borderWidth:1},
  iconStyle:{
    color: color.COLOR_WHITE,
    position:'absolute',
    right:0,
    bottom:Platform.OS === 'ios' ? viewportHeight* 0.016 : viewportHeight* 0.014,
    paddingHorizontal:20,
    fontSize:Typography.FONT_SIZE28,
    borderWidth:0,
  },
  userStyle:{
    position:'absolute',
    right:0,
    bottom:Platform.OS === 'ios' ? viewportHeight* 0.027 : viewportHeight* 0.025,
    paddingHorizontal:20,
  },
  iconUserStyle:{
    height:viewportWidth*0.06,
    width:viewportWidth*0.06
  },
  addImg:{
    height:viewportWidth*0.05,
    width:viewportWidth*0.05
  },
  addImgStyle:{
    paddingHorizontal:25,
    position:'absolute',
    right:0,
    bottom:Platform.OS === 'ios' ? viewportHeight* 0.03 : viewportHeight* 0.025
  },
  iconClearStyle:{
    color: color.COLOR_WHITE,
    position:'absolute',
    left:0,  
    top:25,
    paddingHorizontal:20,
    paddingVertical:5,
    fontSize:Typography.FONT_SIZE28,
    borderWidth:0,
  },
  iconBackStyle:{
    color: color.COLOR_WHITE,
    fontSize:Typography.FONT_SIZE20,
  },
  
  subTitleText:{
    color: color.COLOR_WHITE,
    fontSize:Typography.FONT_SIZE,
    borderWidth:0,  
    paddingHorizontal:viewportWidth*0.03,
  },
  backStyle:{
    position:'absolute',
    left:0,
    paddingHorizontal:viewportWidth*0.041,
    bottom:Platform.OS === 'ios' ? viewportHeight* 0.03 : viewportHeight* 0.025,
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    alignSelf:"center",
    justifyContent:"center"
  },
  titleHead:{
    display:"flex",
    alignItems:'center',
    width:viewportWidth*0.6,
    marginLeft:'auto',
    marginRight:'auto',
    // paddingTop:viewportWidth*0.03,
    paddingBottom:viewportWidth*0.006,
  },
  menuWrapper:{
    position:'absolute' , 
    right:8 , 
    bottom: Platform.OS === 'ios' ? viewportHeight* 0.01 : 10, 
    width:'50%' , 
    height:'100%',
    overflow:'visible'
  },
  MenuProviderStyle:{
    marginLeft:'auto' , 
    position:'relative' , 
    marginRight:15
  },
  MenuIconStyle:{
    color: '#fff', 
    paddingLeft: 30, 
    paddingTop: Platform.OS === 'ios' ? viewportHeight* 0.04 : viewportHeight* 0.05
  },
  MenuOptionStyle:{
    fontSize: 16
  },
  MenuOptionInner:{
    display:'flex',
    flexDirection:'row'
  },
  imgStyle:{
    width:viewportWidth*0.045,
    height:viewportWidth*0.045,
    alignItems: 'center',
    marginRight:viewportWidth*0.02
  },
  // ======================================//
  
  closeIcon:{
   position:'absolute',
   paddingHorizontal:viewportWidth*0.06,
   paddingVertical:viewportWidth*0.03,
   zIndex:9999,
   right:0
  },
  close:{
    color:color.COLOR_WHITE,
    fontSize:Typography.FONT_SIZE30
  },
menuContent:{
    height:viewportHeight,
    width:viewportWidth - viewportWidth*.15,
    backgroundColor:color.COLOR_PRIMARY,
    paddingVertical:viewportWidth*0.04,
},
headrMenu:{
    alignItems:'center',
    paddingTop:viewportWidth*0.05,
    paddingHorizontal:viewportWidth*0.04
},
userName:{
    color:color.COLOR_WHITE,
    fontSize:Typography.FONT_SIZE24,
    fontFamily:Typography.FONT_Roboto,
    paddingTop:viewportWidth*0.025,
    paddingBottom:viewportWidth*0.015
},
userPost:{
    fontSize:Typography.FONT_SIZE14,
    color:color.COLOR_WHITE,
    fontFamily:Typography.FONT_Roboto
},
listBox:{
    paddingTop:viewportWidth*0.1,
    // paddingHorizontal:viewportWidth*0.04
},
linkBox:{
    display:"flex",
    flexDirection:'row',
    paddingVertical:viewportWidth*0.038,
    alignItems:'center',
    paddingHorizontal:viewportWidth*0.08
},
linkSocialBox:{
  display:"flex",
  flexDirection:'row',
  paddingVertical:viewportWidth*0.038,
  alignItems:'center',
  paddingHorizontal:viewportWidth*0.03
},
listIcon:{
    width:viewportWidth*0.039,
    height:viewportWidth*0.039
},
headerlistIcon:{
  width:viewportWidth*0.04,
  height:viewportWidth*0.04,
  marginRight:viewportWidth*0.01
},
listLink:{
    fontSize:Typography.FONT_SIZE17,
    color:color.COLOR_WHITE,
    marginLeft:viewportWidth*0.04,
    fontFamily:Typography.FONT_REGULAR,
    textTransform:"uppercase"
},
userImg:{        
    width:"100%",
    height:"100%",
    aspectRatio: 1,
    resizeMode:"cover"
},
userImgBox:{
    width:viewportWidth*0.25,
    height:viewportWidth*0.25,
    borderWidth:1,
    borderRadius:100,
    overflow:"hidden",
    borderColor:color.COLOR_WHITE
},
modalStyle:{
  marginTop:0,
  marginBottom:0,
  marginLeft:0,
  marginRight:0,
  height:"100%"
},
// ===========================================//
logoImg:{
  width:viewportWidth*0.33,
  height:viewportWidth*0.33
},
logoContainer:{
  marginLeft:viewportWidth*0.1,
  paddingTop:viewportWidth*0.02
},
iconMenuStyle:{
  color: color.COLOR_WHITE,
  fontSize:Typography.FONT_SIZE24,
},
cartCount:{
  fontSize:Typography.FONT_SIZE6,
  borderRadius:viewportWidth*0.1,
  width:16,
  height:16,
  justifyContent:'center',
  lineHeight:15,
  textAlign:'center',
  backgroundColor:'red',
  color:color.COLOR_WHITE,
  position:'absolute',
  right:12,
  top:-4,
  zIndex:9999
},
backStyleOne:{
  textTransform:"capitalize",
  color:color.COLOR_WHITE,
  fontSize:Typography.FONT_SIZE,
  paddingLeft:viewportWidth*0.022
},
cartText:{
  position:"absolute",
  width:55,
  right:15,
  top:2,
  marginRight:viewportWidth*0.01,
  fontSize:Typography.FONT_SIZE15,
  color:color.COLOR_WHITE,
},
flexBox:{
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center'
},
notificationCount:{
  fontSize:Typography.FONT_SIZE8,
  color:color.COLOR_WHITE,
  fontFamily:Typography.FONT_REGULAR,
  backgroundColor:color.COLOR_RED,
  borderRadius:50,
  paddingHorizontal:viewportWidth*0.01,
  paddingTop:1,
  paddingBottom:1,
  lineHeight:15,
  marginLeft:viewportWidth*0.015,
  textAlign:'center',
  marginBottom:5
},
activetabBg:{
  backgroundColor:color.COLOR_GREEN
},
lineBottom:{
  width:"88%",
  display:'flex',
  justifyContent:'center',
  marginTop:viewportWidth*0.06

},
listSocialIcon:{
  width:viewportWidth*0.062,
  height:viewportWidth*0.062

}
});


export {HeaderComponent} ;
