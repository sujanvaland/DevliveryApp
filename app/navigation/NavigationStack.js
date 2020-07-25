import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Account from '../screens/Account';
import AuthLoadingScreen from 'app/screens/Login/AuthLoading';
import Forgotpassword from '../screens/Forgotpassword';
import Home from 'app/screens/Home';
import Login from 'app/screens/Login';
import WebView from '../screens/WebView';
import Dashboard from '../screens/Dashboard';
import NoInternet from '../screens/NoInternet';
import Verification from '../screens/Verification';
import EditProfileImage from '../screens/EditProfileImage';
import ResetPassword from '../screens/ResetPassword';
import PasswordChange from '../screens/PasswordChange';
import PasswordReset from '../screens/PasswordReset';
import MyOrders from '../screens/MyOrders';
import OrderDetail from '../screens/OrderDetail';



import { HeaderComponent } from 'app/components';

const AuthStack = createStackNavigator({         
    Login: {
        screen: Login,
        navigationOptions: { headerShown: false, gestureEnabled: false }
    } 
});
const RNApp = createStackNavigator(
    {   
        Account:{
            screen: Account,
            navigationOptions: { 
                header: () => <HeaderComponent Smalltitle={'Account'} mainpage={true} subpage={false}/>,
                gestureEnabled: false }
        },
        Forgotpassword: {
            screen: Forgotpassword,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    header: () => <HeaderComponent iname={"chevron-back"}
                    title={"Forgot Password"}
                    back={true} navigation={navigation} />,
                    gestureEnabled: false
                }
            }
        },
        Home: {
            screen: Home,
            navigationOptions: { headerShown: false, gestureEnabled: false }
        },
        PasswordChange: {
            screen: PasswordChange,
            navigationOptions: { headerShown: false, gestureEnabled: false }
        },
        PasswordReset:{
            screen: PasswordReset,
            navigationOptions: { headerShown: false, gestureEnabled: false }
        },
        Login: {
            screen: Login,
            navigationOptions: { headerShown: false, gestureEnabled: false }
        },
       
        NoInternet: {
            screen: NoInternet,
            navigationOptions: { headerShown: false, gestureEnabled: false }
        },
        ResetPassword:{
            screen: ResetPassword,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    header: () => <HeaderComponent iname={"chevron-back"}
                    title={"Reset Password"}
                    back={true} navigation={navigation} />,
                    gestureEnabled: false
                }
            }
        },
        EditProfileImage: {
            screen: EditProfileImage,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    header: () => <HeaderComponent iname={"chevron-back"}
                    title={"Profile Photo"}
                    back={true} navigation={navigation} />,
                    gestureEnabled: false
                }
            }
        },
        MyOrders:{
            screen: MyOrders,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    header: () => <HeaderComponent iname={"chevron-back"}
                    title={"Orders"}
                    back={true} navigation={navigation}/>,
                    gestureEnabled: false
                }
            }
        },
        OrderDetail:{
            screen: OrderDetail,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    header: () => <HeaderComponent iname={"chevron-back"}
                    title={"Orders"}
                    back={true} navigation={navigation}/>,
                    gestureEnabled: false
                }
            }
        },
        Dashboard: {
            screen: Dashboard,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    header: () => <HeaderComponent iname={"ios-menu"} 
                    sidemenu={true} title={"Dashboard"} />,
                    gestureEnabled: false
                }
            }
        },
        WebView:{
            screen: WebView,
            navigationOptions: ({ navigation }) =>
            {
                return {  headerShown: false,gestureEnabled: false }
            }
        }
    },
    {
        initialRouteName: 'Login'
    } 
);
//export default createAppContainer(RNApp);

export default createAppContainer(
    createSwitchNavigator(
      {
        AuthLoading: AuthLoadingScreen,
        App: RNApp,
        Auth: AuthStack,
      },
      {
        initialRouteName: 'AuthLoading',
      }
    )
  );